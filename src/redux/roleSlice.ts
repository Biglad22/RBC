import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../types';
import { fetchRoles, addRole, updateRole, deleteRole } from '../services/rolesAPI';

interface RolesState {
    roles: Role[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: RolesState = {
    roles: [],
    loading: false,
    error: null
};

// Thunks (async actions)
export const fetchRolesThunk = createAsyncThunk('roles/fetchRoles', async () => {
    const roles = await fetchRoles();
    return roles;
});

export const addRoleThunk = createAsyncThunk('roles/addRole', async (role: Role) => {
    const newRole = await addRole(role);
    return newRole;
});

export const updateRoleThunk = createAsyncThunk('roles/updateRole', async (role: Role) => {
    const updatedRole = await updateRole(role);
    return updatedRole;
});

export const deleteRoleThunk = createAsyncThunk('roles/deleteRole', async (roleName: string) => {
    const message = await deleteRole(roleName);
    return message;
});

// Redux slice
const rolesSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch roles
        builder.addCase(fetchRolesThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRolesThunk.fulfilled, (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchRolesThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch roles';
        });

        // Add role
        builder.addCase(addRoleThunk.fulfilled, (state, action: PayloadAction<Role>) => {
            state.roles.push(action.payload);
        });

        // Update role
        builder.addCase(updateRoleThunk.fulfilled, (state, action: PayloadAction<Role>) => {
            const index = state.roles.findIndex(role => role.name === action.payload.name);
            if (index !== -1) {
                state.roles[index] = action.payload;
            }
        });

        // Delete role
        builder.addCase(deleteRoleThunk.fulfilled, (state, action: PayloadAction<string>) => {
            state.roles = state.roles.filter(role => role.name !== action.payload);
        });
    }
});

// Export actions and reducer
export default rolesSlice.reducer;
