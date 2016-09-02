import testReducer from './components/test';

export default function rootReducer(state = {}, action) {
  return {
    test: testReducer(state.list, action)
  };
}