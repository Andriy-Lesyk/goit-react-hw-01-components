import React from "react";
import Statlist from "../Statlist/Statlist";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import {Container} from "./Statistics.styles"

const Statistics=()=>{
    return (
        <Container>
            <Title/>
            <Statlist></Statlist>
        </Container>
    )

}
Statlist.propTypes={
   label: PropTypes.string.isRequired,
   percentage: PropTypes.string.isRequired, 
}
export default Statistics;
