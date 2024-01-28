import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Idea, Status } from "../global/definations/types";
import {
  AddNewIdeaAsync,
  DeleteIdeaAsync,
  FetchIdeasAsync,
  UpdateIdeaAsync,
} from "./api/controllers";
import { State } from "./definations/types";

const initialState: State = {
  ideasResponse: {
    ideasData: [],
  },
  loading: false,
  error: false,
  filteredStatus: { label: "All", value: "All", variant: "primary" },
  selectedStatus: null,
  newIdea: null,
};

export const IdeasSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    setFilteredStatus: (state, action: PayloadAction<Status>) => {
      state.filteredStatus = action.payload;
    },
    setSelectedStatus: (state, action: PayloadAction<Status>) => {
      state.selectedStatus = action.payload;
    },
    setNewIdea: (state, action: PayloadAction<Idea>) => {
      state.newIdea = action.payload;
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
      .addCase(
        AddNewIdeaAsync.fulfilled,
        (state, action: PayloadAction<Idea[]>) => {
          state.loading = false;
          state.ideasResponse.ideasData = action.payload;
          state.error = false;
        }
      )
      .addCase(AddNewIdeaAsync.rejected, (state) => {
        state.error = false;
      })
      .addCase(UpdateIdeaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        UpdateIdeaAsync.fulfilled,
        (state, action: PayloadAction<Idea[]>) => {
          state.loading = false;
          state.ideasResponse.ideasData = action.payload;
          state.error = false;
        }
      )
      .addCase(UpdateIdeaAsync.rejected, (state) => {
        state.error = false;
      })
      .addCase(DeleteIdeaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        DeleteIdeaAsync.fulfilled,
        (state, action: PayloadAction<Idea[]>) => {
          state.loading = false;
          state.ideasResponse.ideasData = action.payload;
          state.error = false;
        }
      )
      .addCase(DeleteIdeaAsync.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { actions } = IdeasSlice;
export default IdeasSlice.reducer;
