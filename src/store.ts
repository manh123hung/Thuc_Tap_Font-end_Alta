import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';

// Định nghĩa kiểu dữ liệu cho state
interface UserState {
  loading: boolean;
  error: string | null;
  data: any;
}

// Tạo async thunk để fetch dữ liệu
const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Tạo slice với Redux Toolkit
const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    error: null,
    data: [],
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Tạo store với Redux Toolkit
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

// Sử dụng async thunk trong component
dispatch(fetchUsers());