import React from "react";

const FollowerCard = props => {
    console.log(props);
    return (
        <div>
            <img src={props.follower.avatar_url} alt="Follower Avatar" /> 
            <h1>{props.follower.type}</h1>
        </div>
    )
}

export default FollowerCard;