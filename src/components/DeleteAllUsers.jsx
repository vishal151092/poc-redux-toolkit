import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAllUsers } from '../store/slices/UserSlice';

const DeleteAllUsers = () => {

  const dispatch = useDispatch();
    const deleteAllUsersHandler= useCallback(()=>{
        dispatch(deleteAllUsers())
    }, []);

  return (
    <button onClick={deleteAllUsersHandler}>Delete All Users</button>
  )
}

export default DeleteAllUsers