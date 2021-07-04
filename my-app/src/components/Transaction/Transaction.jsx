import React from 'react';
import PropTypes from "prop-types"
import {Table, TableHead, TableBody, Tablerow, Thead, Tdtype, Tdamount, Tdcurrency} from "./Transaction.styled";
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
                    <Tdtype>{type}</Tdtype>
                    <Tdamount>{amount}</Tdamount>
                    <Tdcurrency>{currency}</Tdcurrency>
                    </Tablerow>
                ))}</TableBody>
        </Table>
    )
}

Transaction.propTypes = {
    key: PropTypes.string,
}
export default Transaction
