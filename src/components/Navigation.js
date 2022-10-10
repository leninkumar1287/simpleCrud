import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Shopping 🛒</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/cart">Cart</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
