import React from 'react';
import {Table, TableHead, TableBody, Tablerow} from "./Transaction.styled";
import Transact from "../data/transaction.json"

function Transaction() {
    return (
        <Table>
            <TableHead>
                <Tablerow>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </Tablerow>
            </TableHead>
            <TableBody>{
                Transact.map(({id, type, amount, currency})=>(
                <Tablerow key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </Tablerow>
                ))}</TableBody>
        </Table>
    )
}

export default Transaction
