import { base_url } from "@/constant";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPressRelease = createAsyncThunk(
  'pressRelease/allpressReleases', async (team, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        page: 1,
        limit: 10,
        publish_status: 'published',
        status: 1
      });

    const response = await axios.get(`${base_url}/api/getallpressrelease?${query}`);
    return response.data;
  } catch (error) {

    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const getSinglePressRelease = createAsyncThunk(
  'pressRelease/singlepressrelease', async (pressReleaseId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/getpressrelease?pressReleaseId=${pressReleaseId}`);

      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });


const pressReleaseSlice = createSlice({
  name: 'pressRelease',
  initialState: {
    pressReleases: [],
    loading: false,
    error: null,
    singlePressRelease: {}
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPressRelease.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPressRelease.fulfilled, (state, action) => {
        state.loading = false;
        state.pressReleases = action.payload.data.data;
      })
      .addCase(getAllPressRelease.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

      });
    builder
      .addCase(getSinglePressRelease.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSinglePressRelease.fulfilled, (state, action) => {
        state.loading = false;
        state.singlePressRelease = action.payload.data;
      })
      .addCase(getSinglePressRelease.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  }
});


export default pressReleaseSlice.reducer;