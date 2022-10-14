import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts, getProductsById, updateProductDetails } from './services/ProductServices'
import { useParams } from 'react-router-dom'
export default function EditAndUpdate() {
    let {id} = useParams();
    let [dataPayload, setDataPayload] = useState({})
    let [viewData, setViewData] = useState({})
    const navigation = useNavigate()
    const dataHanler = (event) => {
        const { name, value } = event.target
        setDataPayload({ ...dataPayload, [name]: value })
    }

    const postData = (event) => {
        event.preventDefault();
        updateProductDetails(id,dataPayload).then(res => {
            console.log(res.data)
            if (res.data) {
                alert("New products was added")
                navigation("/")
            }
        })
    }
    useEffect(() => {
        getProductsById(id).then(response => {
            console.log(" result   : ", response.data)
            setViewData(response.data)
        })
    }, [])
    return (
        <div>
            <h2> Edit product details here</h2>
            <form onSubmit={dataHanler}></form>
            <div className='form-group'>
                <label > Product Name</label>
                <input type={"text"} name='productName' className='form-control' value={viewData.productName} onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Price </label>
                <input type={"text"} name='price' className='form-control' value={viewData.price} onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Quantity </label>
                <input type={"text"} name='quantity' className='form-control' value={viewData.quantity} onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Product Image URL</label>
                <input type={"text"} name='productImage' className='form-control' value={viewData.productImage} onChange={dataHanler}></input>
            </div>
            <input type={"submit"} name="sumbit" className='btn btn-success' value={"Update product Details"} onClick={postData}></input>
        </div>
    )
}
