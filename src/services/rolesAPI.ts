import { Role } from "../types";
import { generateFakeRoles } from "./fakeRoles";

let fakeRoles:Role[] = generateFakeRoles();

// Simulating fetching roles from an API
export const fetchRoles = async (): Promise<Role[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeRoles);
        }, 1000);
    });
};

// Simulating adding a new role
export const addRole = async (role: Role): Promise<Role> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            fakeRoles.push(role); // This will modify the fakeRoles array
            resolve(role);
        }, 1000);
    });
};

// Simulating updating an existing role
export const updateRole = async (updatedRole: Role): Promise<Role> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = fakeRoles.findIndex(role => role.name === updatedRole.name);
            if (index !== -1) {
                fakeRoles[index] = updatedRole; // Update the role
                resolve(updatedRole);
            } else {
                throw new Error('Role not found');
            }
        }, 1000);
    });
};

// Simulating deleting a role
export const deleteRole = async (roleName: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = fakeRoles.findIndex(role => role.name === roleName);
            if (index !== -1) {
                fakeRoles.splice(index, 1); // Remove the role from the array
                resolve(`Role ${roleName} deleted successfully`);
            } else {
                reject(`Role ${roleName} not found`);
            }
        }, 1000);
    });
};
