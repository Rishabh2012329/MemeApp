import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
              <nav style={{alignItems:"center"}} className="navb">
              <div  className="brand"> <span>Meme</span></div>
                  <div  className="nav1"><div onClick={this.props.set} className="navi">Home</div>
                  <div onClick={this.props.setsave} className="navi">SavedMemes</div>
                  </div>
                  
                  <div style={{right:"2vw",position:"absolute"}} className="nav2">
                  <div className="navi">
                   <a  className="navl "> <i style={{padding:"4px"}} className="fa fa-user"></i> {this.props.name.providerData[0].uid}</a>
                  </div>
                  <div style={{marginLeft:"2%"}} className="navi">
                   <a   className="navl " onClick={this.props.logout}> <i style={{padding:"4px"}} className="fa fa-sign-out"></i> logout</a>
                  </div>
                  </div>
                 
              </nav>
            </div>
        )
    }
}
