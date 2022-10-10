import axios from 'axios'

const API = ""

function getProducts() {
    return axios.get(`${API}`)
}

function getProductsById(id) {
    return axios.get(`${API}${id}`)
}

function updateProductDetails(data) {
    return axios.put(`${API}`, data)
}

function deleteProduct(id) {
    return axios.delete(`${API}${id}`)
}

export { getProducts, getProductsById, updateProductDetails, deleteProduct }