
// this is a file of dummy roles used in this project

import { Role } from "../types";

export const generateFakeRoles = (): Role[] => ([
    {
        name: 'Admin',
        color: 'red',
        permissions: {
            create: true,
            read: true,
            update: true,
            delete: true
        }
    },
    {
        name: 'Manager',
        color: 'blue',
        permissions: {
            create: true,
            read: true,
            update: true,
            delete: false
        }
    },
    {
        name: 'Editor',
        color: 'green',
        permissions: {
            create: false,
            read: true,
            update: true,
            delete: false
        }
    },
    {
        name: 'Guest',
        color: 'gray',
        permissions: {
            create: false,
            read: true,
            update: false,
            delete: false
        }
    }
])


// Function to check if a user has a particular permission
export const hasPermission = (role: string, action: string): boolean => {
    // Check if the role exists in fakeRoles
    const foundRole = generateFakeRoles().find(r => r.name === role);

    // If the role is not found, return false
    if (!foundRole) return false;

    // Check if the action is a valid CRUD action and if the role has the permission
    switch (action) {
        case 'create':
            return foundRole.permissions.create;
        case 'read':
            return foundRole.permissions.read;
        case 'update':
            return foundRole.permissions.update;
        case 'delete':
            return foundRole.permissions.delete;
        default:
            return false;
    }
};

