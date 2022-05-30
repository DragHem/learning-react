import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevState) => [
      ...prevState,
      { name, age, id: new Date().valueOf() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 ? <UserList users={usersList} /> : null}
    </>
  );
};

export default App;
