import React from 'react';
import Statistical from "../data/statistical.json";
import {Item, Menu, Text} from "./Statlist.styled"

function Statlist() {
    return (
        <Menu>
            {
                Statistical.map(({id,label,percentage})=>(
                 <Item key={id}>
                    <Text>{label}</Text>
                    <Text>{percentage}</Text>
                 </Item>   
                )
                )}
        </Menu>
    )
}

export default Statlist
