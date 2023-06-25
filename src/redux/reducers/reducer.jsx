import {
  DRONES,
  VIDEOS,
  ENTREGAS,
} from '../actions/action';

const INICIAL_STATE = {
  drones: [],
  videos: [],
  entregas: [],
};

const reducerFetch = (state = INICIAL_STATE, { type, payload }) => {
  switch (type) {
  case DRONES: return ({ ...state, drones: payload });
  case VIDEOS: return ({ ...state, videos: payload });
  case ENTREGAS: return ({ ...state, entregas: payload });
  default: return state;
  }
};

export default reducerFetch;
