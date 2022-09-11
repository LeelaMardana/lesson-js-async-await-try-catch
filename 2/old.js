const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(USERS_URL)
  .then(response => response.json())
  .then(users => {
    const firstUserId = users[0]?.id;
    fetch(`${TODOS_URL}?userId=${firstUserId}`).then(response =>
      response.json().then(data => console.log(data))
    );
  })
  .catch(error => console.log(error));
