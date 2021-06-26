import React from "react";
import {Container} from "./Profile.styles";
import Descript from "../Description/Description";
import Stats from "../Stats/Stats"

const Profile = () => {
    return (
    <Container>
        <Descript></Descript>
        <Stats></Stats>
    </Container>
    )
}

export default Profile;