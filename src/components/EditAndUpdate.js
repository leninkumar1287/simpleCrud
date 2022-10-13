import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById, updateProductDetails } from './services/ProductServices'

export default function EditAndUpdate() {
    let [stateData, setStateData] = useState({})
    const [dataPayload, setDataPayload] = useState({})
    let { id } = useParams();

    useEffect(() => {
        getProductsById(id).then(response => {
            console.log("state Data : ", response)
        })
    })
    // const dataHanler = (event) => {
    //     const { name, value } = event.target
    //     setDataPayload({ ...dataPayload, [name]: value })
    // }
    // const update =
    //     useEffect(() => {
    //         getProductsById(productId).then(response => {
    //             updateProductDetails(productId, dataPayload)
    //                 .then(response => {
    //                     if (response.data) {
    //                         setDataPayload(response.data)
    //                         console.log(" data  updated :", dataPayload)
    //                     }
    //                     else alert("Data's not updated")
    //                 })
    //         })
    //     })

    return (
        <div>
            <h2>Product update portal</h2>
            {/* <form onSubmit={dataHanler}></form> */}
            <div className='form-group'>
                <label > Product Name</label>
                <input type={"text"} name='productName' value={dataPayload.productName} className='form-control' ></input>
            </div>
            <div className='form-group'>
                <label> Price </label>
                <input type={"text"} name='price' className='form-control' ></input>
            </div>
            <div className='form-group'>
                <label> Quantity </label>
                <input type={"text"} name='quantity' className='form-control' ></input>
            </div>
            <div className='form-group'>
                <label> Product Image URL</label>
                <input type={"text"} name='productImage' className='form-control' ></input>
            </div>
            <input type={"submit"} name="sumbit" className='btn btn-success' value={"Add product"} ></input>
        </div>
    )
}
