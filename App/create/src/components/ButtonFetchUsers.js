import React from 'react';

const ButtonFetchUsers = (props) => {
  return (
    <button
      style={{ padding: '10px 20px', border: '2px solid black', margin: 20 }}
      onClick={props.click}
      type=""
    >
      Add user
    </button>
  );
};

export default ButtonFetchUsers;
