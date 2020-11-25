const layoutReducer=(state={isSidebarOpened:false}, action)=> {
    switch (action.type) {
      case "TOGGLE_SIDEBAR":
        return { ...state, isSidebarOpened: !state.isSidebarOpened };
      default: {
       return state
      }
    }
  }
  export default layoutReducer 


  function toggleSidebar(dispatch) {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  }

  export {  toggleSidebar };