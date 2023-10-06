import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageType } from "../types/LanguageType";

interface IState {
    language: LanguageType;
}

const initialState: IState = {
    language: "fa",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        languageChanged(state, action: PayloadAction<LanguageType>) {
            state.language = action.payload;
        },
    },
});

export const { languageChanged } = appSlice.actions;

export default appSlice.reducer;
