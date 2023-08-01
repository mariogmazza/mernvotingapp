import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';

const initialState = { userData: [], status: '', error: '' };

export const fetchUserLogin = createAsyncThunk(
  'login/fetchUser',
  async ({ username, password }) => {
    try {
      const response = await api.call('post', 'auth/login', {
        username: username,
        password: password,
      });
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserLogin.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = '';
        state.userData = [action.payload];
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUserData = state => state.userData.data;
