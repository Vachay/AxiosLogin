import React from 'react'
import { Link } from 'react-router-dom';


export default function Dashboard() {
    return (
        <div className='container dashboard'>
            <div className='header-main'>
                <a href='#' className='logo float-left'> <img src={require("./asset/images/logo.jpg")} alt='logo'></img></a>

                <div className='float-right menu'>
                    <ul style={{ display: 'none' }}>
                        <li className='nav-link'><Link to='/home'>Home</Link></li>
                        <li className='nav-link'><Link to='/new-articles'><span><i className="fas fa-edit"></i></span>New articles</Link></li>
                        <li className='nav-link'><Link to='/setting'><span><i className="fas fa-cog"></i></span>Setting</Link></li>

                    </ul >
                    <ul style={{ display: 'inherit' }}>
                        <li className='nav-link'><Link to='/home'>Home</Link></li>
                        <li className='nav-link'><Link to='/new-articles'><span><i className="fas fa-edit"></i></span>New articles</Link></li>
                        <li className='nav-link'><Link to='/setting'><span><i className="fas fa-cog"></i></span>Setting</Link></li>
                        <li className='nav-link'><Link to='/setting'><span><i className="fas fa-user"></i></span>User</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
