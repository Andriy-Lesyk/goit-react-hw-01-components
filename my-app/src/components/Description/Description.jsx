import React from 'react';
import {Description , Photo , Name , Tag, Location} from "./Description.styled"
import user from "../data/user.json"

function Descript() {
    return (
        <Description >
            <Photo src={user.avatar}/>
            <Name>{user.name}</Name>
            <Tag>{user.tag}</Tag>
            <Location>{user.location}</Location>
        </Description>
    )
}

export default Descript
