import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import SearchForm from './components/SearchForm';

const Navbar = (props) => {



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">BS App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/results">Listings</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link"  to="/list">Sell</NavLink>
                            </li> */}
                        </ul>
                        {
                            props.isAuth 
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                                </li>
                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/signup">Create Account</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to="/login">Login</NavLink>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Category
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Clothing</a>
                                {/* <button type="submit" name="category" onClick={() => props.currentCat({category: "clothing"})} value="clothing">Clothing</button> */}
                                <span name="category" onClick={props.currentCat} value="clothing">Clothing</span>
                                <a className="dropdown-item" href="#">Electronics</a>
                                <a className="dropdown-item" href="#">Furniture</a>
                                <a className="dropdown-item" href="#">Movies, books, and music</a>
                                <a className="dropdown-item" href="#">Sports</a>
                                <a className="dropdown-item" href="#">Tools</a>
                                <a className="dropdown-item" href="#">Other</a>
                            </div>
                            {/* <App category={category.value} /> */}
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Items</button>
                    </form>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;