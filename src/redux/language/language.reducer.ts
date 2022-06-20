import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppConstant, LANGUAGES } from '../../constants/app.constant';

export const REDUCER_ID = AppConstant.redux.LANGUAGE_STATE;

interface LanguageStateModel {
  locale: LANGUAGES
}

export const initialState: LanguageStateModel = {
  locale: LANGUAGES.EN
};

const languageSlice = createSlice({
  name: 'language',
  reducers: {
    setLocale(state, action: PayloadAction<LANGUAGES>) {
      return {
        ...state,
        locale: action.payload
      };
    },
    restoreLocale(state, action: PayloadAction<LanguageStateModel>) {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  initialState
});

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;
