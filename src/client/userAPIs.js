
export const getUsers = () =>
    fetch('http://localhost:3001/users').then((res) => res.json());

export const getHobbies =() => 
    fetch('http://localhost:3001/hobbies').then((res) => res.json());

export const getListOfAge = (hobby) =>
    fetch('http://localhost:3001/users/age', {
        method: 'GET',
        body: JSON.stringify(hobby),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json());
