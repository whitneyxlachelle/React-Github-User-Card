import React from "react";

const UserCard = props => {
    console.log(props);
    return (
        <div>
            <h1>Name: {props.user.name}</h1>
            <h2>Followers: {props.user.followers}</h2>
        </div>
    )
}

export default UserCard; 