const data = location.search.match(/vk_user_id=([0-9]*)/);
export const userId = (() => (data ? data[1] : ''))();
