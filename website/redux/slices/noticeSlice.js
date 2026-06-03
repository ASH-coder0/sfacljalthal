import { base_url } from "@/constant";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNotice = createAsyncThunk(
  'notice/allNotices', async (notice, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        page: 1,
        limit: 10,
        publish_status: 'published',
      });
      const response = await axios.get(`${base_url}/api/getnoticepagination?${query}`);
      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });

export const getSingleNotice = createAsyncThunk(
  'notice/singlenotice', async (noticeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/getnotice?noticeId=${noticeId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  });


const noticeSlice = createSlice({
  name: 'notice',
  initialState: {
    notices: [],
    loading: false,
    error: null,
    singleNotice: {}
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotice.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notices = action.payload.data.data;
      })
      .addCase(getAllNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
     .addCase(getSingleNotice.pending, (state, action) => {
        state.loading = true;
        state.error = null;
     })
     .addCase(getSingleNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.singleNotice = action.payload.data;
     })
     .addCase(getSingleNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
     });

  }
});


export default noticeSlice.reducer;