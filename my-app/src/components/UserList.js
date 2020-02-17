import React from 'react';
import User from './User';

const UserList = props => {
    console.log(props);
    return (
<div className="user-list">
    {props.user.map(info => {
        return <User key={info.id} info={info} />
    })}
</div>
    )
}

export default UserList; 
