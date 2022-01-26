import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: {
      title: '',
      show: false,
      type: undefined,
      btns: {
        left: {
          action: null,
          text: 'Cancelar',
        },
        right: {
          action: null,
          text: 'Aceptar',
        },
      },
    },
  },
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    hideModal: (state) => {
      console.log('hide', state.modal);
      state.modal.show = false;
    },
  },
});

export const { setModal, hideModal } = modalSlice.actions;
export const selecModal = (state) => state.modal;

export default modalSlice.reducer;
