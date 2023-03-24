import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

const addUserhandler = (uName, uAge) => {
setUsersList((prevUsersList) => {
return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() }];
});
console.log(uName, uAge);
};


  return (
    <div>
<AddUser onAddUser={addUserhandler} />
<UsersList users={usersList} />
    </div>
  );
}

export default App;
