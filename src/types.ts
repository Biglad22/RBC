//  custom type for team member information 
export interface TeamMember {
    img : string,
    fullName : string,
    email:string,
    role : string,
    accessExpires : AccessExpiryType
}

//  custom type for access expiry time and date  of team members
export type AccessExpiryType ={
    time : string,
    date : string
}

//  LinkType is used for anchor tags
export type LinkType = {
    title: string, // title of anchor tag
    to: string  // the link of the tag 
}

//  custom type for dropDown props 
export type CustomDropdownProps = {
    options: string[];
    topic? : string; //topic is the support label, that tells users what drop down is used 
    label?: string;
    onSelect?: (option: string) => void;
  }

export interface Role {
    name: string;
    color: string;
    permissions: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
}
