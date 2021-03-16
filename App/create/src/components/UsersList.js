import React from 'react';
const UsersList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <div key={user.login.md5}>
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.location.city}</p>
    </div>
  ));
  return <ul>{users}</ul>;
};

export default UsersList;
