import React, { useState } from 'react'
import { getProducts } from "./services/ProductServices";
export default function Home() {
  const [payload, setPayload] = useState(0)
  getProducts().then(res => {
    console.log("res.data : ", res.data)    
  })
  return (
    <div> <h5>All the available products</h5> </div>
  )
}
