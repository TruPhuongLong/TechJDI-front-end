export const query = (sortVote, skip) => {
    const sort = { vote: sortVote}
    const sortString = JSON.stringify(sort);
    const limit = 20;
    const queryStr = `?sort=${sortString}&skip=${skip}&limit=${limit}`
    return queryStr
}