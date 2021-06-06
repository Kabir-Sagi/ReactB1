import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">My Company</a>
              <ul className="nav">
                  <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
                  <li className="nav-item"><Link to="/react" className="nav-link text-white">React</Link></li>
                  <li className="nav-item"><Link to="/angular" className="nav-link text-white">Angular</Link></li>
                  <li className="nav-item"><Link to="/python" className="nav-link text-white">Python</Link></li>
              </ul>
            </nav>
        </div>
    }
}

export default Navbar