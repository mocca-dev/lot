import { createSlice } from '@reduxjs/toolkit';

export const showFlags = createSlice({
  name: 'counter',
  initialState: {
    logo: true,
    footer: true,
    fixedContent: true,
  },
  reducers: {
    showLogo: (state) => {
      state.logo = true;
    },
    hideLogo: (state) => {
      state.logo = false;
    },
    showFooter: (state) => {
      state.footer = true;
    },
    hideFooter: (state) => {
      state.footer = false;
    },
    showFixedContent: (state) => {
      state.fixedContent = true;
    },
    hideFixedContent: (state) => {
      state.fixedContent = false;
    },
  },
});

export const {
  showLogo,
  hideLogo,
  showFooter,
  hideFooter,
  showFixedContent,
  hideFixedContent,
} = showFlags.actions;

export const selecLogo = (state) => state.logo.value;
export const selecFooter = (state) => state.footer.value;
export const selecFixedContent = (state) => state.fixedContent.value;

export default showFlags.reducer;
