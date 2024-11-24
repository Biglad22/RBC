// userGenerator.ts
import { TeamMember, AccessExpiryType } from '../types';

// Function to generate random date
const generateRandomDate = () => {
    const start = new Date(2024, 0, 1); // Start date: Jan 1, 2024
    const end = new Date(2024, 11, 31); // End date: Dec 31, 2024
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const formattedDate = randomDate.toISOString().split('T')[0]; // Format YYYY-MM-DD

    return formattedDate;
};

// Function to generate random time
const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

// Function to generate random access expiry time
const generateAccessExpiry = (): AccessExpiryType => {
    return {
        time: generateRandomTime(),
        date: generateRandomDate(),
    };
};

// Function to generate random team member
export const generateRandomTeamMember = (role: string): TeamMember => {
    const randomNames = ["John",'Doe', "Jane", "Smith", "Alice", "Johnson", "Bob", "Brown", "Charlie", "Green"];
    
    const randomName = `${randomNames[Math.floor(Math.random() * randomNames.length)]}  ${randomNames[Math.floor(Math.random() * randomNames.length)]}`;
    const randomEmail = `${randomName.split(' ').join('')}${Math.ceil(Math.random() *100)}@email.com`;

    return {
        img: "https://via.placeholder.com/150",
        fullName: randomName,
        email: randomEmail,
        role,
        accessExpires: generateAccessExpiry(),
    };
};

// Function to generate a list of random users with different roles
export const generateRandomTeamMembers = (num: number): TeamMember[] => {
    const roles = ["Admin", 'Manager', "Editor", "Guest"];
    const teamMembers: TeamMember[] = [];

    for (let i = 0; i < num; i++) {
        const role = roles[Math.floor(Math.random() * roles.length)];
        teamMembers.push(generateRandomTeamMember(role));
    }

    return teamMembers;
};
