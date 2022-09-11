// const getData = () => {
//   return fetch('./db/users.json').then(response => response.json());
// };

// getData().then(users => {
//   fetch(`./db/${users[0].id}.json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// });

//2

// const getDate = async () => {
//   return 'Alex';
// };

// getDate().then(data => console.log(data));

//3

// const getDate = async id => {
//   const responseUsers = await fetch('./db/users.json');
//   const users = await responseUsers.json();
//   const responseUser = await fetch(`./db/${users[id].id}.json`);

//   return await responseUser.json();
// };

// getDate(0)
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

//4

const getDate = async id => {
  try {
    const responseUsers = await fetch('./db/users.json');
    const users = await responseUsers.json();
    const responseUser = await fetch(`./db/${users[id].id}.json`);

    return await responseUser.json();
  } catch (error) {
    throw new Error(`Какая-то ошибка с обьектом ${id}`);
  }
};

getDate(1)
  .then(data => console.log(data))
  .catch(error => {
    console.log(error.message);
  });
