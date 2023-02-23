// import React, { Component } from 'react'
import {Link} from "react-router-dom"
// export class NavBar extends Component {
//   render() {
  const NavBar = (props)=>{
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">NewsInFo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active text-light" aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/technology">Technology</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link active text-light" to="/entertainment">Entertainment</Link></li>
            </ul>
            <div className='d-flex'>
              <div className="form-check form-switch">
                <input className="form-check-input mx-1"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label mx-2 text-light" htmlFor="flexSwitchCheckDefault">DarkMode</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  // }
// }

export default NavBar
