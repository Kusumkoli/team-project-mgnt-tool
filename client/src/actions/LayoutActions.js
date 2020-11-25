import store from '../store';

export function layoutDispatch(credentials) {
    store.dispatch({type:'TOGGLE_SIDEBAR', payload:credentials})
}
