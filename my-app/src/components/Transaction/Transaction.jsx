import React from 'react';
import {Table, TableHead, TableBody, Tablerow, Thead, Tdtype, Tdamount, Tdcurrency} from "./Transaction.styled";


function Transaction({ transacts }) {
    return (
        <Table>
            <TableHead>
                <Tablerow>
                    <Thead>Type</Thead>
                    <Thead>Amount</Thead>
                    <Thead>Currency</Thead>
                    </Tablerow>
            </TableHead>
            <TableBody>{
                transacts.map(({id, type, amount, currency})=>(
                <Tablerow key={id}>
                    <Tdtype>{type}</Tdtype>
                    <Tdamount>{amount}</Tdamount>
                    <Tdcurrency>{currency}</Tdcurrency>
                </Tablerow>
                )
            )}</TableBody>
        </Table>
    )
}


export default Transaction
