export declare type Sidebar = {
    title: string;
    icon?: any;
    routeLink: string;
    children?: SidebarType[]
}

export declare type Auth = {
    email: string;
    password: string;
    confirmPassword?: string;
    firstName?: string;
    lastName?: string;
}

export declare type User = {
    _id: string;
    email: string;
    firstName: string;
    lastName?: string;
    createdAt?: string;
    role?: string;
    status?: number;
    posts?: string[]
    comments?: string[]
};

export declare type Post = {
    _id?: string;
    category: string,
    title: string;
    description: string;
    userId: string;
    likes?: number;
    comments?: string[];
    createdAt?: string;
};

export declare type LoginDetails = {
    userDetails: {
        message: string,
        user: User
    },
    token: string
}

export declare type Global = {
    users: User[],
    posts: Post[]
}