import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ paddingTop: '0.0rem' }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingTop: '0rem', paddingBottom:'0rem' }} >
                    <div className="container-fluid" style={{ backgroundImage: "linear-gradient(to right,black , #053f5c)" }}>

                        <img src="dev.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
                        <Link className="navbar-brand" to="/" style={{ color: 'white' , marginLeft:'10px' ,marginRight:'250px'}}><b>The Enquirer Times</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" to="/general" style={{ color: 'white' ,marginRight:'10px'}}>   General</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/business" style={{ color: 'white',marginRight:'10px' }}>| Business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/entertainment" style={{ color: 'white',marginRight:'10px' }}>| Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/health" style={{ color: 'white',marginRight:'10px' }}>| Health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/science" style={{ color: 'white',marginRight:'10px' }}>| Science</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/sports" style={{ color: 'white',marginRight:'10px' }}>| Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/technology" style={{ color: 'white',marginRight:'10px' }}>| Technology</Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
