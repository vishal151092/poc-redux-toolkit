import React, { useCallback } from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { faker } from '@faker-js/faker';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../store/slices/UserSlice';

const UserDetails = () => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.users);


    const addNewUserHandler = useCallback(() => {
        let user = createNewUser();
        dispatch(addUser(user));
    }, []);

    const createNewUser = () => {
        return {
            _id: faker.datatype.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            gender: faker.person.gender(),

        }
    };

    const deleteUserHandler = (userId)=>{
        dispatch(deleteUser(userId));
    }
    return (
        <>

            <div className='content'>
                <div className='user-table'>
                    <div className='user-heading' >List of Users</div>
                    <button onClick={addNewUserHandler} >Add New User</button>

                </div>

                <div className='user-list-wrapper'>
                    <ul className='user-list'>
                        {
                            userList.map((user) => {
                                return (
                                    <li key={user._id}><span className='user-name'>{user.firstName} {user.lastName}</span> <span className='user-gender'>({user.gender})</span><span className='user-delete-icon'><button onClick={() => deleteUserHandler(user._id)}>X</button></span></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <hr />

                <DeleteAllUsers />

            </div>

        </>
    )
}

export default UserDetails