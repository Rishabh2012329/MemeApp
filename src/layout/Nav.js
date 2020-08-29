import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <div className="navbar-brand active"> Meme</div>
                  <div className="navbar-nav"><div onClick={this.props.set} className="nav-item"><span className="nav-link">Home</span></div>
                  <div onClick={this.props.setsave} className="nav-item"><span className="nav-link">SavedMemes</span></div>
                  </div>
                  <ul style={{marginLeft:"auto"}} className="navbar-nav ">
                  <li className="nav-item">
                   <a style={{display:"flex"}} className="nav-link "> <i style={{padding:"4px"}} className="fa fa-user"></i> {this.props.name.providerData[0].uid}</a>
                  </li>
                  <li className="nav-item">
                   <a style={{display:"flex"}} className="nav-link " onClick={this.props.logout}> <i style={{padding:"4px"}} className="fa fa-sign-out"></i> logout</a>
                  </li>
                  </ul>
                 

              </nav>
            </div>
        )
    }
}
