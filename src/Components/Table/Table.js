import React, { useState,useEffect} from "react"
import styled from 'styled-components'
import GetInfo from "../../Services/GetInfo"
import Button from "../Button/Button"

function Table({data,handleFAvorites}) {
    const Table = styled.table`
    width:100%;
    padding:20px;
`
const THEAD = styled.thead`
height:100px;
padding:8px 20px;
border:3px solid black;
margin:20px;

`
const TBODY = styled.tbody`
height:100px;
padding:8px 20px;
border:3px solid black;
margin:20px;

`
const TH = styled.th`
padding:20px;
margin:20px;
`
const TD = styled.td`
text-align:center;
padding:20px;
margin:20px;

`
    const TR = styled.tr`
display:flex;
align-items:center;
border-bottom:1px solid #645f5f;
padding:20px;
margin:20px;

`

    return (
        <div className="">
            <Table>
                <THEAD>
                    <TR>
                    <TH>#</TH>
                        <TH>Name</TH>
                        <TH>Price</TH>
                        <TH>1h%</TH>
                        <TH>24h%</TH>
                        <TH>7d%</TH>
                        <TH>Market Cap%</TH>
                        <TH>Volume(24h)</TH>

                    </TR>
                </THEAD>
                <TBODY>
                    {data != null && data.length > 0 ? data.map((item, index) => {
                        return (
                            <TR key={item.Id}>
                                <div onClick={() => { handleFAvorites(item.Id) }} >
                               
                                <i className="fas  fa-star " ></i>

                                </div>
                                
 

                                <TD>{item.Id}</TD>
                                <TD>{`${item.LatinName + "   " + item.Symbol}  `}</TD>
                                <TD>{ }</TD>
                            </TR>
                        )
                    }):null}
        
                </TBODY>

            </Table>
      </div>  
    )
}
export default Table