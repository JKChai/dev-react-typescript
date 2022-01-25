// Props Tip 2: create type files if there are a lot of types

// Props Tip 3: types can be reused
export type Name = {
    first: string;
    last: string;
};

export type PersonProps = {
    name: Name;
};