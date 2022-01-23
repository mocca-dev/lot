function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SUB_HEADER':
      return { ...state, subHeader: action.payload };
    case 'SET_MARKER_POS':
      return { ...state, initialMarker: action.payload };
    case 'SHOW_FOOTER':
      return { ...state, showFooter: true };
    case 'HIDE_FOOTER':
      return { ...state, showFooter: false };
    case 'SHOW_LOGO':
      return { ...state, showFixedContent: true };
    case 'HIDE_LOGO':
      return { ...state, showLogo: false };
    case 'SET_MODAL':
      return { ...state, modal: action.payload };
    case 'HIDE_MODAL':
      return { ...state, modal: { ...state.modal, show: false } };
    case 'SHOW_FIXED_CONTENT':
      return { ...state, showFixedContent: true };
    case 'HIDE_FIXED_CONTENT':
      return { ...state, showFixedContent: false };
    default:
      return state;
  }
}

export default appReducer;
