
import axios from "axios";
import { base_url } from "@/constant";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllEvents = createAsyncThunk(
  'event/allEvents', async (team, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        page: 1,
        limit: 10,
        publish_status: 'published',
      });
      const response = await axios.get(`${base_url}/api/geteventpagination?${query}`);

    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const getSingleEvent = createAsyncThunk(
  'pressRelease/singlepressrelease', async (eventId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/getevent?eventId=${eventId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  });


const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    loading: false,
    error: null,
    singleEvent: {}
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.data.data;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(getSingleEvent.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.singleEvent = action.payload.data;
      })
      .addCase(getSingleEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});


export default eventSlice.reducer;