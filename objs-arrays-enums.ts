enum Role {ADMIN, READ_ONLY, AUTHOR}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
} = {
    name: 'gecec',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];

console.log(person.name);