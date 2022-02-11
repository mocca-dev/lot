import { createSlice } from '@reduxjs/toolkit';

export const showFlags = createSlice({
  name: 'showFLags',
  initialState: {
    logo: true,
    header: true,
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
    showHeader: (state) => {
      state.header = true;
    },
    hideHeader: (state) => {
      state.header = false;
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
  showHeader,
  hideHeader,
  showFooter,
  hideFooter,
  showFixedContent,
  hideFixedContent,
} = showFlags.actions;

export const selecLogo = (state) => state.showFlags.logo;
export const selecShowHeader = (state) => state.showFlags.header;
export const selecFooter = (state) => state.showFlags.footer;
export const selecFixedContent = (state) => state.showFlags.fixedContent;

export default showFlags.reducer;
