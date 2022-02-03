import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user/userSlice';
import modalReducer from '../reducers/modal/modalSlice';
import postsReducer from '../reducers/posts/postsSlice';
import showFlagsReducer from '../reducers/showFlags/showFlagsSlice';
import subHeaderReducer from '../reducers/subHeader/subHeaderSlice';
import bookmarksReducer from '../reducers/bookmarks/bookmarksSlice';
import lotReducer from '../reducers/lot/lotSlice';
import notificationsReducer from '../reducers/notifications/notificationsSlice';
import spinnerReducer from '../reducers/spinner/spinnerSlice';
import toasterReducer from '../reducers/toaster/toasterSlice';
import myLotsReducer from '../reducers/myLots/myLotsSlice';

export default configureStore({
  reducer: {
    subHeader: subHeaderReducer,
    modal: modalReducer,
    showFlags: showFlagsReducer,
    posts: postsReducer,
    bookmarks: bookmarksReducer,
    lot: lotReducer,
    notifications: notificationsReducer,
    spinner: spinnerReducer,
    toaster: toasterReducer,
    myLots: myLotsReducer,
    user: userReducer,
  },
});
