import React from "react";
import Statlist from "../Statlist/Statlist";
import PropTypes from "prop-types";
import {Container, Name} from "./Statistics.styles"

const Statistics=()=>{
    return (
        <Container>
            <Name>upload stats</Name>
            <Statlist></Statlist>
        </Container>
    )

}

export default Statistics;
