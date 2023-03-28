
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div>
                        <h1>SnapShot</h1>
                        <form class="search-form">
                            <input type="text" name="search" placeholder="Search..." value="" />
                            <button type="submit" class="search-button null" disabled="">
                            </button>
                        </form>
                        <nav className="main-nav">
                            <ul>
                                <li><NavLink to="/mountain">Mountain</NavLink></li>
                                <li><NavLink to="/beaches">Beaches</NavLink></li>
                                <li><NavLink to="/birds">Birds</NavLink></li>
                                <li><NavLink to="/foods">Food</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}



export default Navigation;
