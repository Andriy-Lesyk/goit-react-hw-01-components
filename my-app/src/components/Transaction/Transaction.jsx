import React from 'react';
import {Table, TableHead, TableBody, Tablerow, Thead, Tdata} from "./Transaction.styled";
import Transact from "../data/transaction.json"

function Transaction() {
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
                Transact.map(({id, type, amount, currency})=>(
                <Tablerow key={id}>
                    <Tdata>{type}</Tdata>
                    <Tdata>{amount}</Tdata>
                    <Tdata>{currency}</Tdata>
                    </Tablerow>
                ))}</TableBody>
        </Table>
    )
}

export default Transaction
