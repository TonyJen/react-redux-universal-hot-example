const TOGGLE = 'redux-example/experiment/TOGGLE';

const initialState = {
  liked: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        liked: !state.liked
      };
    default:
      return state;
  }
}

export function toggle() {
  return {
    type: TOGGLE
  };
}
