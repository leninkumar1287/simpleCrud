import axios from 'axios'

const API = "http://localhost:3001/products"

function getProducts() {
    return axios.get(`${API}`)
}

function getProductsById(id) {
    console.log("id : ", id)
    return axios.get(`${API}/${id}`)
}

function addNewProducts(data) {
    return axios.post(`${API}`,data)
}

function updateProductDetails(id,data) {
    return axios.put(`${API}${id}`,data)
}

function deleteProduct(id) {
    return axios.delete(`${API}${id}`)
}

export { getProducts, getProductsById, updateProductDetails, deleteProduct, addNewProducts}