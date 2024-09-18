import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { TableContainer, Table } from '@mui/material';
import axios from 'axios';

 export const Product = () => {
   var[product, setProduct]=useState([])
       useEffect(()=>{
        axios.get("https://localhost:7142/api")
        .then((responsevariable)=>{console.log(responsevariable)
            setProduct(responsevariable.data)
        })
        .catch((error)=>{console.log(error)}
        )
       },[])

    return (
    <div><TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
{ product.map((val,i)=>{
    return(
        <TableRow>
            <TableCell>{val.Id}</TableCell>
            <TableCell>{val.Name}</TableCell>
            <TableCell>{val.Price}</TableCell>
        </TableRow>
    )
    })
}

        </TableBody>
        </Table></TableContainer></div>
  )
}

export default Product;