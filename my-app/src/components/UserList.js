import React from 'react';
import UserCard from './UserCard';

const UserList = props => {
    console.log(props);
    return (
<div className="user-list">
    {props.user.map(info => {
        return <UserCard key={info.id} info={info} />
    })}
</div>
    )
}

export default UserList; 
