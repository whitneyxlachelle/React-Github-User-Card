import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
  

const UserCard = props => {
    //console.log(props);
    return (
        <div>
            <Card>
            <CardImg top width="20%" src={props.user.avatar_url}  alt="User Avatar" />
            <CardBody>
            <CardTitle>Name: {props.user.name}</CardTitle>
            <CardSubtitle>Type: {props.user.type}</CardSubtitle>
            <CardText>Repositories: {props.user.public_repos}</CardText>
            </CardBody>
        </Card>
        </div>
        
    )
}

export default UserCard; 