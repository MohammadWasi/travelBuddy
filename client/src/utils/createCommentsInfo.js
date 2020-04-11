const createCommentsInfo = (data) => {
  const map = {};

  data.forEach(({ _id, topComments }) => {
    map[_id] = {comments: topComments};
  });
  return map;
};
export default createCommentsInfo;
