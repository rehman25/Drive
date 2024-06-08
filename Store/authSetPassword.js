import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const SetPassword = createAsyncThunk(
    'pass/SetPassword',
    async (postData, thunkAPI) => {
      

    try {
      const response = await fetch('https://driver.alitacode.com/api/driver/set-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      

      if (!email && !phone_number) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
        console.log(email, phone_number , 'checkdata')
      // const data = await response.json();
      console.log(data, 'data')
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const PasswordSlice = createSlice({
  name: 'pass',
  initialState: {
    post: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SetPassword.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SetPassword.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(SetPassword.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default PasswordSlice.reducer;
