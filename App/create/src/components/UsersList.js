import React from 'react';
const UsersList = (props) => {
  console.log(props.users);
  const users = props.users.map((user) => (
    <li key={user.login.md5}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>{`${user.name.first} ${user.name.last}`}</h4>
      <p>{user.location.city}</p>
    </li>
  ));
  return <ul className="users">{users}</ul>;
};

export default UsersList;
