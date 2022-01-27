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

export const selecLogo = (state) => state.showFlags.logo;
export const selecFooter = (state) => state.showFlags.footer;
export const selecFixedContent = (state) => state.showFlags.fixedContent;

export default showFlags.reducer;
