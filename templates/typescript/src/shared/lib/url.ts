export const urlEncode = (data: string) => {
  return btoa(encodeURIComponent(data))
    .replace('+', '.')
    .replace('/', '_')
    .replace('=', '-')
    .replace(/=$/, '-');
};

export const urlDecode = (data: string) => {
  return decodeURIComponent(
    atob(data.replace('.', '+').replace('_', '/').replace('-', '=').replace(/-$/, '='))
  );
};
