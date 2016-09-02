const initialState = [];

export default function testReducer(state = initialState, action) {
  switch(action.type) {
  case 'FETCH_TEST_SUCCESS': return [...action.payload];
  default: return state;
  }
}