import { types } from '../types/types';

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.register:
      return {
        id: action.payload.id,
        title: action.payload.title,
        vote_average: action.payload.vote_average,
        overview: action.payload.overview,
        image: action.payloadimage
      };

    case types.list:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

}
