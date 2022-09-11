const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// try
// catch
// finnaly

// try {
// } catch (error) {
//   console.log('error', error);
// } finally {
//   console.log(error);
// }

const getTodosWithUserData = async () => {
  try {
    const response = await fetch(USERS_URL);
    if (!response.ok) {
      throw new Error(`Ошибка с получением данных`);
    }
    const users = await response.json();
    const todosResponse = await fetch(`${TODOS_URL}?userId=${users[0]?.id}`);
    if (!todosResponse.ok) {
      throw new Error(`Ошибка с получением данных`);
    }
    const todos = await todosResponse.json();
    console.log(users);
    console.log(todos);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('finally');
  }
};
const promise = getTodosWithUserData();
