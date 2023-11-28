import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleOnClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  const fetchUsers = async () => {
    try{
      const response = await axios.get('http://localhost:3000/api/users');

    }catch(error){

    }
  };

  return (
    <div className="container">
      UserTable
    </div>
  );
};

export default UserTable;


