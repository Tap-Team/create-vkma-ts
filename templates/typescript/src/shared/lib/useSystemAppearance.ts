import { useEffect, useState } from 'react';

import { Appearance } from '@vkontakte/vkui';

const useSystemAppearance = () => {
  const [preferredColorSchema, setPreferredColorSchema] = useState<Appearance>(() => {
    if (typeof window === 'undefined') return null;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isLight = window.matchMedia('(prefers-color-scheme: light)');

    return isDark.matches ? Appearance.DARK : isLight.matches ? Appearance.LIGHT : null;
  });

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;

    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isLight = window.matchMedia('(prefers-color-scheme: light)');

    if (typeof isLight.addEventListener === 'function') {
      const darkListener = ({ matches }: MediaQueryListEvent) => {
        matches && setPreferredColorSchema(Appearance.DARK);
      };
      const lightListener = ({ matches }: MediaQueryListEvent) => {
        matches && setPreferredColorSchema(Appearance.LIGHT);
      };
      isDark.addEventListener('change', darkListener);
      isLight.addEventListener('change', lightListener);
      return () => {
        isDark.removeEventListener('change', darkListener);
        isLight.removeEventListener('change', lightListener);
      };
    }

    if (typeof isLight.addListener === 'function') {
      const listener = () =>
        setPreferredColorSchema(
          isDark.matches ? Appearance.DARK : isLight.matches ? Appearance.LIGHT : undefined
        );

      isDark.addListener(listener);
      isLight.addListener(listener);
      return () => {
        isDark.removeListener(listener);
        isLight.removeListener(listener);
      };
    }

    return;
  }, []);

  return preferredColorSchema;
};

export default useSystemAppearance;
