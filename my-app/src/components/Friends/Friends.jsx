import React from 'react'
import FriendsInfo from "../data/friends.json"
import {Friendslist, Status, Photo, Text, Friend} from "./Friends.styled"

function Friends() {
    return (
        <Friendslist>{
            FriendsInfo.map(({avatar, name, isOnline, id})=>(
                <Friend key={id}>
                    <Status type={isOnline}></Status>
                    <Photo src={avatar}></Photo>
                    <Text>{name}</Text>
                </Friend>
            ))
      } </Friendslist>
    )
}

export default Friends
