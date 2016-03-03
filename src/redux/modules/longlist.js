const LOAD = 'redux-example/longlist/LOAD';

const initialState = {
  list: []
};

const createLongList = (number)=> {
  const foo = [];
  let i = 0;
  for (i = 0; i <= number; i++) {
    foo.push(Math.floor((Math.random() * 100) + 1));
  }
  return foo;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        list: createLongList(action.number)
      };
    default:
      return state;
  }
}

export function load(number) {
  return {
    type: LOAD,
    number: number
  };
}
