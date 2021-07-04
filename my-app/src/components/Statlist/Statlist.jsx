import React from 'react';
import Statistical from "../data/statistical.json";
import {Item, Menu, Label, Percent} from "./Statlist.styled"

function Statlist() {
    return (
        <Menu>
            {
                Statistical.map(({id,label,percentage})=>(
                 <Item key={id}>
                    <Label>{label}</Label>
                    <Percent>{percentage}</Percent>
                 </Item>   
                ) 
                )}
        </Menu>
    )
}

export default Statlist
