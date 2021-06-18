const baseUrl = 'http://localhost:3005'

export const getUsers = () =>
    fetch([baseUrl, 'users'].join("/")).then((res) => res.json());

export const getHobbies =() => 
    fetch([baseUrl, 'hobbies'].join("/")).then((res) => res.json());

export const getListOfAge =(hobby) => 
    fetch([baseUrl, 'users', `age?hobby=${hobby}`].join("/")).then((res) => res.json());

export const getHobbiesByUsername =(username) => 
    fetch([baseUrl, 'users', `hobbies?username=${username}`].join("/")).then((res) => res.json());