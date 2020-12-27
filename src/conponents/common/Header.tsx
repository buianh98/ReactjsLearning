import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <p className="navbar-brand" >Navbar</p>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" >Link</p>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                            </p>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <p className="dropdown-item" >Action</p>
                                    <p className="dropdown-item" >Another action</p>
                                    <div className="dropdown-divider" />
                                    <p className="dropdown-item" >Something else here</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link disabled" >Disabled</p>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>  <div>&nbsp;</div><div>&nbsp;</div>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="modal" data-target="#modelId">List Cart</button>

                        </form>
                    </div>
                </div>

            </nav>

        )
    }
}
