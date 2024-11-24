// api.ts

import { TeamMember } from '../types';
import { hasPermission } from './fakeRoles';
import { generateRandomTeamMembers } from './fakeUsers'; // Import generated team members


///team members
let teamMembers = generateRandomTeamMembers(10);

// Simulate API Call to fetch all users (Admin only)
export const fetchUsers = async (role: string) => {    
    if (!hasPermission(role, "read")) {
        return { message: "Access Denied: You do not have permission to view the users." };
    }
    return { data: teamMembers };
};

// Simulate API Call to add a new team member (Admin only)
export const addUser = async (newMember: TeamMember, role: string) => {
    if (!hasPermission(role, "create")) {
        return { message: "Access Denied: You do not have permission to create a user." };
    }
    teamMembers.push(newMember);
    return { message: "User added successfully" };
};

// Simulate API Call to update a user (Admin and User can update their own profile)
export const updateUser = async (updatedMember: TeamMember, role: string) => {
    if (!hasPermission(role, "update")) {
        return { message: "Access Denied: You do not have permission to update this user." };
    }
    
    const index = teamMembers.findIndex((user) => user.email === updatedMember.email);
    if (index !== -1) {
        teamMembers[index] = updatedMember;
        return { message: "User updated successfully" };
    }
    return { message: "User not found" };
};

// Simulate API Call to delete a user (Admin only)
export const deleteUser = async (email: string, role: string) => {
    if (!hasPermission(role, "delete")) {
        return { message: "Access Denied: You do not have permission to delete this user." };
    }
    
    teamMembers = teamMembers.filter(memb => memb.email !== email);
    return { message: "User deleted successfully" };
};
