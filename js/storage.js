const STORAGE_KEY = 'followed_offers_ids';
export function getFollowedIds() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
export function toggleFollowedId(id) {
  const followed = getFollowedIds();
  const index = followed.indexOf(id);

  if (index === -1) {
    followed.push(id);
  } else {
    followed.splice(index, 1);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(followed));
  return followed.includes(id);
}