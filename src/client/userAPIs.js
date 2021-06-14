
export const getUsers = () =>
    fetch('http://localhost:3000/users').then((res) => res.json());

export const getHobbies =() => 
    fetch('http://localhost:3000/hobbies').then((res) => res.json());

export const getListOfAge = (newTodo) =>
    fetch('http://localhost:3000/users/age', {
        method: 'GET',
        body: JSON.stringify(newTodo),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json());
