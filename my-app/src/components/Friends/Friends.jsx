import React from 'react'
import PropTypes from "prop-types"
import { Friendslist, Status, Photo, Text, Friend } from "./Friends.styled"


function Friends({ friends}) {
    return (
        <Friendslist>{
            friends.map(({avatar, name, isOnline, id})=>(
                <Friend key={id}>
                    <Status isOnline={isOnline}></Status>
                    <Photo src={avatar}></Photo>
                    <Text>{name}</Text>
                </Friend>
            ))
      } </Friendslist>
    )
}

Friends.propTypes = {
    key: PropTypes.number,
    src: PropTypes.string,
    type: PropTypes.bool,
}
export default Friends
