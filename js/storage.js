const STORAGE_KEY = 'followed_offers_ids';

export function getFollowedIds() {
    const data = localStorage.getItem(STORAGE_KEY);
    const ids = data ? JSON.parse(data) : [];
    return ids.map(id => Number(id));
}

export function toggleFollowedId(id) {
    const numericId = Number(id);
    const followed = getFollowedIds();
    const index = followed.indexOf(numericId);

    if (index === -1) {
        followed.push(numericId);
    } else {
        followed.splice(index, 1);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(followed));
    return followed.includes(numericId);
}