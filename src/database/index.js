'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getHobbies = () => {
  const dataAccessMethod = () => {
    let hobbies = []
    _.map(db.hobbiesOfUserByUsername, (hobbiesList) => {
      hobbiesList.forEach(hobby => {
        if (!hobbies.includes(hobby)) {
          hobbies.push(hobby)
        }
      })
    })
    return hobbies
    //fill me in :) should return an array of hobbies without duplicate value.
    //return ['this is a hobby', 'this is another hobby'];
  };
  return mockDBCall(dataAccessMethod);
};

const getAgeByName = (name) => {
  let age = 0;
  _.map(db.usersById, (userInfo) => {
    // console.log(userInfo)
    if (userInfo.username === name) {
      age = userInfo.age;
    }
  });
  return age;
};

const getNameListByHobby = (hobby) => {
  let list = [];
  _.map(db.hobbiesOfUserByUsername, (userInfo, user) => {
    if (userInfo.includes(hobby)) {
      list.push(user);
    }
  });
  return list;
};

const mapAgesByName = (names) => {
  let hashMap = new Map();
  names.forEach(name => {
    let age = getAgeByName(name);
    if (hashMap.has(age)) {
      hashMap.set(age, hashMap.get(age) + 1);
    } else {
      hashMap.set(age, 1);
    }
  })
  return hashMap;
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    // return [
    //   { age: 18, count: 2 },
    //   { age: 12, count: 1 },
    // ];
    const nameList = getNameListByHobby(hobby);
    let map = mapAgesByName(nameList);
    let result = [];
    for (let [key, value] of map) {
      result.push({ age: key, count: value });
    }
    return result;
  };
  return mockDBCall(dataAccessMethod);
};

const getHobbiesByUsername = (username) => {
  const dataAccessMethod = () => {
    let hobbies
    _.map(db.hobbiesOfUserByUsername, (userHobbies, user) => {
      if (user === username) {
        hobbies = userHobbies;
      }
    });
    return hobbies
  }
  return mockDBCall(dataAccessMethod)
}

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
  getHobbiesByUsername
};
