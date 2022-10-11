import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewProducts } from './services/ProductServices'

export default function AddNewProducts() {
    let [dataPayload, setDataPayload] = useState({ productName: '', price: "", quantity: "", productImage: "" })
    const navigation = useNavigate()
    const dataHanler = (event) => {
        const { name, value } = event.target
        setDataPayload({ ...dataPayload, [name]: value })
    }

    const postData = (event) => {
        event.preventDefault();
        addNewProducts(dataPayload).then(res=>{
            console.log(res.data)
            if(res.data){
                alert("New products was added")
                navigation("/")
            }
        })

    }
    return (
        <div>
            <form onSubmit={dataHanler}></form>
            <div className='form-group'>
                <label > Product Name</label>
                <input type={"text"} name='productName' className='form-control' onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Price </label>
                <input type={"text"} name='price' className='form-control' onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Quantity </label>
                <input type={"text"} name='quantity' className='form-control' onChange={dataHanler}></input>
            </div>
            <div className='form-group'>
                <label> Product Image URL</label>
                <input type={"text"} name='productImage' className='form-control' onChange={dataHanler}></input>
            </div>
            <input type={"submit"} name="sumbit" className='btn btn-success' value={"Add product"} onClick={postData}></input>
        </div>
    )
}
