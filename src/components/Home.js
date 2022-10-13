import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getProducts } from "./services/ProductServices";
export default function Home() {
  const [payLoad, setPayload] = useState([])
  useEffect(() => {
    getProducts().then(response => {
      console.log(response)
      setPayload(response.data)
    })
  }, [])
  return (
    <div>
      <Link to="/addproduct" className="btn btn-primary"> Add Product</Link>
      <div>
        <h2>These all are available products</h2>
        <div className='row'> {payLoad?.map((product, index) =>
          <div key={index} className="col-sm-4 card" style={{ width: '18rem' }}>
            <img src={product.productImage} className="card-img-top" alt="SuperImages" width={200} height={150} />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">Price : {"💲" + product.price} <br />
                id : {product.id} <br />
                Quantity : {product.quantity} </p>
            </div>
            <Link className='btn btn-primary' to={`/edit/${product.id}`}> update</Link>
          </div>
        )}</div>
      </div>
    </div>)
}
