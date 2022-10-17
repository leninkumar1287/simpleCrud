import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts, getProductsById, updateProductDetails } from './services/ProductServices'
import { useParams } from 'react-router-dom'
export default function EditAndUpdate() {
    let { id } = useParams();
    let [viewData, setViewData] = useState({ productName: '', price: "", quantity: "", productImage: "" })
    const navigation = useNavigate()

    useEffect(() => {
        getProductsById(id).then(response => {
            console.log(" result   : ", response.data)
            setViewData(response.data)
        })
    }, [])

    const dataHanler = (event) => {
        const { name, value } = event.target
        setViewData({ ...viewData, [name]: value })
    }

    const postData = (event) => {
        event.preventDefault();
        updateProductDetails(id, viewData).then(res => {
            console.log(res.data)
            if (res.data) {
                alert(" products Details updated")
                navigation("/")
            }
        })
    }

    return (
        <div>
            <h2> Edit product details here</h2>
            <form onSubmit={dataHanler}></form>
            <div className='form-group'>
                <label > Product Name</label>
                <input type="text" name='productName' className='form-control' value={viewData.productName} onChange={dataHanler}></input>
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
