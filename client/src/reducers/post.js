import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_LIKE,
  REMOVE_LIKE
} from '../actions/types';

const initialState = {
  posts: [],
  likeInfo: {},
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        likeInfo: {...payload},
        loading: false
      };
    case ADD_LIKE:
      return {
        ...state,
        likeInfo: {
          ...state.likeInfo,
          [payload.id]: {
            isLiked : true, likeCount: state.likeInfo[payload.id].likeCount + 1
          }
        },
        loading: false
      };
    case REMOVE_LIKE:
    return {
      ...state,
      likeInfo: {
        ...state.likeInfo,
        [payload.id]: {
          isLiked : false, likeCount: state.likeInfo[payload.id].likeCount - 1
        }
      },
      loading: false
    };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
