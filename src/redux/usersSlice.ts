import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TeamMember } from '../types';
import { fetchUsers, addUser, updateUser, deleteUser } from '../services/usersAPI';

// Define the initial state for users
interface UsersState {
    users: TeamMember[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

// Async thunks for API calls
export const fetchUsersThunk = createAsyncThunk(
    'users/fetchUsers',
    async (role: string, { rejectWithValue }) => {
        const response = await fetchUsers(role);
        if (response.data) {
            return response.data;
        }
        return rejectWithValue(response.message);
    }
);

export const addUserThunk = createAsyncThunk(
    'users/addUser',
    async ({ newUser, role }: { newUser: TeamMember; role: string }, { rejectWithValue }) => {
        const response = await addUser(newUser, role);
        if (response.message === "User added successfully") {
            return newUser;
        }
        return rejectWithValue(response.message);
    }
);

export const updateUserThunk = createAsyncThunk(
    'users/updateUser',
    async ({ updatedUser, role }: { updatedUser: TeamMember; role: string }, { rejectWithValue }) => {
        const response = await updateUser(updatedUser, role);
        if (response.message === "User updated successfully") {
            return updatedUser;
        }
        return rejectWithValue(response.message);
    }
);

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async ({ email, role }: { email: string; role: string }, { rejectWithValue }) => {
        const response = await deleteUser(email, role);
        if (response.message === "User deleted successfully") {
            return email;
        }
        return rejectWithValue(response.message);
    }
);

// Create the users slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch users
            .addCase(fetchUsersThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersThunk.fulfilled, (state, action: PayloadAction<TeamMember[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Add user
            .addCase(addUserThunk.fulfilled, (state, action: PayloadAction<TeamMember>) => {
                state.users.push(action.payload);
            })
            .addCase(addUserThunk.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            // Update user
            .addCase(updateUserThunk.fulfilled, (state, action: PayloadAction<TeamMember>) => {
                const index = state.users.findIndex((user) => user.email === action.payload.email);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(updateUserThunk.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            // Delete user
            .addCase(deleteUserThunk.fulfilled, (state, action: PayloadAction<string>) => {
                state.users = state.users.filter((user) => user.email !== action.payload);
            })
            .addCase(deleteUserThunk.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export default usersSlice.reducer;
