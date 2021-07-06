import React from "react";
import {Container, Name, Menu, Item, Label, Percent} from "./Statistics.styles"

const Statistics = ({ title, stats})=>{
    return (
        <Container>
            <Name>{ title}</Name>
            <Menu>
                {
                    stats.map(({ id, label, percentage }) => (
                        <Item key={id}>
                            <Label>{label}</Label>
                            <Percent>{percentage}</Percent>
                        </Item>
                    )
                    )}
            </Menu>
        </Container>
    )

}

export default Statistics;
