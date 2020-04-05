const createLikInfo = (data) => {
    const map = {};

    data.forEach(({user, liked, likes}) => {
        map[user] = {
            isLiked: liked,
            likeCount: likes
        };
    });
    return map;
}
export default createLikInfo;