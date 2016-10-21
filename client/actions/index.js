//isomorphic-fetch 是一个前后端通用的 Ajax 实现，前后端要共享代码这点很重要。
import fetch from 'isomorphic-fetch';

export function fetchTest() {
    return (dispatch) => {
        return fetch('/api/test')
            .then(res => res.json())
            .then(json => dispatch({
                type: 'FETCH_TEST_SUCCESS',
                payload: json
            }))
    }
}