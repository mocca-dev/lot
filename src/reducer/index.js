function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SUB_HEADER':
      return { ...state, subHeader: action.payload };
    case 'SHOW_FOOTER':
      return { ...state, showFooter: true };
    case 'HIDE_FOOTER':
      return { ...state, showFooter: false };
    case 'SHOW_LOGO':
      return { ...state, showLogo: true };
    case 'HIDE_LOGO':
      return { ...state, showLogo: false };
    default:
      return state;
  }
}

export default appReducer;
