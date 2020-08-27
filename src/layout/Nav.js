import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <div className="navbar-brand active"> Meme</div>
                  <ul style={{marginLeft:"auto"}} className="navbar-nav ">
                  <li className="nav-item">
                   <a style={{display:"flex"}} className="nav-link disaled"> <i style={{padding:"4px"}} className="fa fa-user"></i> {this.props.name.providerData[0].uid}</a>
                  </li>
                  <li className="nav-item">
                   <a style={{display:"flex"}} className="nav-link disaled" onClick={this.props.logout}> <i style={{padding:"4px"}} className="fa fa-sign-out"></i> logout</a>
                  </li>
                  </ul>
                 

              </nav>
            </div>
        )
    }
}
