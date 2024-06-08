import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const authOtp = createAsyncThunk( 'otp/authOtp',
async (otpData, thunkAPI) => {
  console.log(otpData , 'otpdata')
      

    try {
      const response = await fetch('https://driver.alitacode.com/api/driver/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(otpData),
      });

      

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }

      const data = await response.json();
      console.log(data, 'data')
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const ReauthOtp = createAsyncThunk(
  'otp/ReauthOtp',
  async (RepostData, thunkAPI) => {
    console.log(RepostData , 'RepostData')

  try {
    const response = await fetch('https://driver.alitacode.com/api/driver/resend-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(RepostData),
    });

    

    if (!response.ok) {
      const errorData = await response.json();
      return thunkAPI.rejectWithValue(errorData);
    }

    const data = await response.json();
    // console.log(data, 'data')
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
}
);


const OtpSlice = createSlice({
  name: 'otp',
  initialState: {
    post: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authOtp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authOtp.fulfilled, (state, action) => {
        state.status = 'message';
        state.post = action.payload;
      })
      .addCase(authOtp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
      
  },
});

export default OtpSlice.reducer;
