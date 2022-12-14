import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialUserState = {
  loading: true,
  userData: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {},
};

const signUp = createAsyncThunk("SIGN_UP", async (userData) => {
  try {
    await axios.post("/signup", userData);
  } catch (error) {
    throw error;
  }
});

const logIn = createAsyncThunk("LOG_IN", async (userData) => {
  try {
    const loggedInUser = await axios.post("/login", userData);
    return loggedInUser;
  } catch (error) {
    throw error;
  }
});

const logOut = createAction("LOG_OUT");

const usersReducer = createReducer(initialUserState, {
  [signUp.fulfilled]: (state, action) => {
    alert("You have signed up successfully");
  },
  [signUp.rejected]: (state, action) => {
    alert(`There has been an error with the user registration`);
  },
  [logIn.fulfilled]: (state, action) => {
    state.loading = false;
    state.userData = action.payload;
    localStorage.setItem("userData", JSON.stringify(action.payload));
  },
  [logIn.rejected]: (state, action) => {
    throw new Error("Wrong credentials!");
  },
  [logOut]: (state, action) => {
    state.userData = {};
    localStorage.removeItem("userData");
  },
});

export default usersReducer;
