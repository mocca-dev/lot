import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice';
import modalReducer from '../reducers/modal/modalSlice';
import showFlagsReducer from '../reducers/showFlags/showFlagsSlice';
import subHeaderReducer from '../reducers/subHeader/subHeaderSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    subHeader: subHeaderReducer,
    modal: modalReducer,
    showFlags: showFlagsReducer,
  },
});
