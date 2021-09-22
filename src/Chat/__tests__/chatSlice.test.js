import reducer,{setMyUid} from '../chatSlice';
import expect from 'expect';

describe('post reducer', () => {
  const expected = {
    chats: {},
    isAuthenticated: false,
    messages:{},
    myUid: "",
  };

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it('set uid', () => {
    const expected = {
      chats: {},
      isAuthenticated: false,
      messages:{},
      myUid: 'My identifier',
    };
    expect(reducer(undefined, setMyUid(expected.myUid))).toEqual(expected);
  });

});