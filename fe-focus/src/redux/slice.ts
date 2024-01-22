import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewIdea, fetchIdeas } from "./api";
import { State } from "./definations/types";
import { Idea } from "../global/definations/types";

const initialState: State = {
  ideasResponse: {
    ideasData: [],
  },
  loading: false,
  error: false,
  filteredStatus: "All",
};

export const FetchIdeasAsync = createAsyncThunk(
  "fetch/ideas",
  async (_, { rejectWithValue }) => {
    try {
      console.log(`🚀: Async Thunk for fetching ideas`);
      const { data } = await fetchIdeas();
      return data;
    } catch (error: any) {
      console.log(`❌: Error in Async Thunk for fetching ideas`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const AddNewIdeaAsync = createAsyncThunk(
  "add/idea",
  async (idaa: Idea, { rejectWithValue }) => {
    try {
      console.log(`🚀: Async Thunk for addinf new idea`);
      const { data } = await addNewIdea(idaa);
      return data;
    } catch (error: any) {
      console.log(`❌: Error in Async Thunk for adding new idea`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const IdeasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    setFilteredStatus: (state, action: PayloadAction<string>) => {
      state.filteredStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchIdeasAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        FetchIdeasAsync.fulfilled,
        (state, action: PayloadAction<Idea[]>) => {
          state.loading = false;
          state.ideasResponse.ideasData = action.payload;
          state.error = false;
        }
      )
      .addCase(FetchIdeasAsync.rejected, (state) => {
        state.error = true;
      })
      .addCase(AddNewIdeaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddNewIdeaAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.ideasResponse = action.payload;
        state.error = false;
      })
      .addCase(AddNewIdeaAsync.rejected, (state) => {
        state.error = false;
      });
  },
});

export const { actions } = IdeasSlice;
export default IdeasSlice.reducer;
