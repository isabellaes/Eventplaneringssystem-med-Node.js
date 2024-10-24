import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrganizerById } from "../api";

const initialState = {
  organizers: [],
};

export const fetchOrganizerById = createAsyncThunk(
  "organizersById",
  async (organizerId) => {
    try {
      const response = await getOrganizerById(organizerId);
      return response;
    } catch (error) {
      return "something went wrong";
    }
  }
);

/* const fetchCreateOrganizer = createAsyncThunk(
  "organizersCreate",
  async (organizer) => {
    const response = await createOrganizer(organizer);
    return response.data;
  }
); */

export const organizerSlice = createSlice({
  name: "organizer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrganizerById.fulfilled, (state, action) => {
      state.organizers.push(action.payload);
    });
  },
});

export const {} = organizerSlice.actions;

export default organizerSlice.reducer;
