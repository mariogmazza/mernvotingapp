import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  userData: [],
  isLoading: false,
  error: '',
  currentUser: '',
};

export const fetchUserLogin = createAsyncThunk(
  'login/fetchUser',
  async ({ username, password }, thunkAPI) => {
    try {
      console.log(thunkAPI);
      const response = await api.call('post', 'auth/login', {
        username: username,
        password: password,
      });
      // console.log(response);
      return response;
    } catch (err) {
      return err.message;
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    displayCurrentUser: (state, action) => {
      let username = state.currentUser;
      if (username === 'kelvin') {
        username = username + '3';
      }
      state.currentUser = username;
    },
  },
  extraReducers: {
    [fetchUserLogin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUserLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      console.log(action.payload);
      state.userData = [action.payload];
      state.currentUser = action.payload.username;
    },
    [fetchUserLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const selectUserData = state => state.userData.data;
export const { displayCurrentUser } = loginSlice.actions;
export default loginSlice.reducer;
