import React from "react";
import {Container, Description, Photo, Name, Tag, Location, StatsItems, StItem } from "./Profile.styles";


const Profile = ({ avatar, name, tag, location, statis}) => {
    return (
    <Container>
            <Description>
                <Photo src={avatar} />
                <Name >{name}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>
                <StatsItems>
                <StItem>
                    <span class="label">Followers</span>
                    <span class="quantity">{statis.followers}</span>
                </StItem>
                <StItem>
                    <span class="label">Views</span>
                    <span class="quantity">{statis.views}</span>
                </StItem>
                <StItem>
                    <span class="label">Likes</span>
                    <span class="quantity">{statis.likes}</span>
                </StItem>
                </StatsItems>
            
    </Container>
    )
}

export default Profile;