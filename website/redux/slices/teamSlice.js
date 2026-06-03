import { base_url } from "@/constant";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllTeamMembers = createAsyncThunk(
  'team/allMembers', async (team, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/getallteammember`);
      return response.data.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  });


const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teamMembers: [],
    loading: false,
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeamMembers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTeamMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.teamMembers = action.payload.data;
      })
      .addCase(getAllTeamMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  }
});


export default teamSlice.reducer;