/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as appReducer from './appReducer';
import * as snackbarReducer from './snackbarReducer';
export default Object.assign(
    loginReducer,
    loadingReducer,
    themeReducer,
    appReducer,
    snackbarReducer,
);