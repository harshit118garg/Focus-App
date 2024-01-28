import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateIdea, fetchIdeas, addNewIdea } from ".";
import { Idea } from "../../global/definations/types";

const FetchIdeasAsync = createAsyncThunk(
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

const AddNewIdeaAsync = createAsyncThunk(
  "add/idea",
  async (idea: Idea, { rejectWithValue }) => {
    try {
      console.log(`🚀: Async Thunk for adding new idea`);
      await addNewIdea(idea);
      const { data } = await fetchIdeas();
      return data;
    } catch (error: any) {
      console.log(`❌: Error in Async Thunk for adding new idea`);
      return rejectWithValue(error.response.data);
    }
  }
);

const UpdateIdeaAsync = createAsyncThunk(
  "update/idea",
  async (idea: Idea, { rejectWithValue }) => {
    try {
      console.log(`🚀: Async Thunk for updating existing idea`);
      await updateIdea(idea);
      const { data } = await fetchIdeas();
      return data;
    } catch (error: any) {
      console.log(`❌: Error in Async Thunk for updating existing idea`);
      return rejectWithValue(error.response.data);
    }
  }
);

export { FetchIdeasAsync, AddNewIdeaAsync, UpdateIdeaAsync };
