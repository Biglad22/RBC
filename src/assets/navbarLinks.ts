import { LinkType } from "../types";

// custom array of objects of navBar routes and their titles 
// this is are the links used in the navBar 
export const navBarLinks : Array<LinkType & {icon : string} > = [
    {
        title : 'project overview',
        to :'/project-overview',
        icon : 'home'
    },
    {
        title : 'roadmap',
        to :'/roadmap',
        icon : 'slider'
    },
    {
        title : 'dashboard',
        to :'/dashboard',
        icon: 'category'
    },
    {
        title : 'documents',
        to :'/documents',
        icon: 'spreadsheet'
    },
    {
        title : 'members',
        to :'/members',
        icon: 'group'
    },
    {
        title : 'settings',
        to :'/settings',
        icon: 'cog'
    }
]

// links to members route children routes
export const TeamSubLinks : [LinkType, LinkType]=[
    {
        title : 'team',
        to : '/'
    },
    {
        title : 'roles',
        to : '/roles'
    }
]