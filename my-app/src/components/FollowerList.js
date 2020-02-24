import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = props => {
    console.log(props);
    return (
        <div className="followers">
            {props.followers.map(follower => {
                return <FollowerCard key={follower.id} follower={follower} />
            })}
        </div>
    )
}

export default FollowerList;