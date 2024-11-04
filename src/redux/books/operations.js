import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecommendedBooks = createAsyncThunk(
  "fetchRecommendedBooks",
  async (page = 1, thunkApi) => {
    try {
      const response = await axios.get(`/books/recommend?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBook = createAsyncThunk(
  "addBook",
  async (newBook, thunkAPI) => {
    try {
      const response = await axios.post("/books/add", newBook);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookFromRecommendedBooks = createAsyncThunk(
  "addBookFromRecommendedBooks",
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.post(`/books/add/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "deleteBook",
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`/books/remove/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnBooks = createAsyncThunk(
  "fetchOwnBooks",
  async (_, thunkAPI) => {
    try {
      const response = axios.get("/books/own");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const safeTheStartReading = createAsyncThunk(
  "safeTheStartReading",
  async (_, thunkAPI) => {
    try {
      const response = axios.post("/books/reading/start");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const safeTheFinishReading = createAsyncThunk(
  "safeTheFinishReading",
  async (_, thunkAPI) => {
    try {
      const response = axios.post("/books/reading/finish");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDeleteReading = createAsyncThunk(
  "fetchDeleteReading",
  async (_, thunkAPI) => {
    try {
      const response = axios.delete("/books/reading");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchInfoAboutBook = createAsyncThunk(
  "fetchInfoAboutBook",
  async (bookId, thunkAPI) => {
    try {
      const response = axios.get(`/books/${bookId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
