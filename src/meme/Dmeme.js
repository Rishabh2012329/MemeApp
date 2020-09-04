import React, { Component } from 'react';
import '../layout/Dmeme.css'

export default class Dmeme extends Component {
    state={
        index:0,
        index1:1,
        index2:2,
        img:[],
    }
    componentDidMount(){
        this.setState({img:this.props.img})
       
    }
    next=()=>{
        const {index,index1,index2}=this.state
        this.setState({index:index+1,index1:index1+1,index2:index2+1})

    }
    prev=()=>{
        const {index,index1,index2}=this.state
        if(index!==0)
        this.setState({index:index-1,index1:index1-1,index2:index2-1})
    }
    render() {
        return (
            <div>
                <h2 style={{textAlign:"center",fontSize:"3vw"}}>Choose a Templete</h2>
              <i className="fa fa-chevron-circle-left fa-2x " style={{float:"left",marginTop:"10%"}} onClick={this.prev}></i>
              <i style={{float:"right",marginTop:"10%"}} className="fa fa-chevron-circle-right fa-2x" onClick={this.next}></i>
                  {   this.state.img.length!==0?<div className="rit">
                        <div style={{width:"50%",}} className="container">
                      <img id="0" src={this.state.img[this.state.index].url}  style={{width:"100%"}} onClick={this.props.dispatch.bind(this,this.state.img[this.state.index])} ></img> 
                      <img id="1" src={this.state.img[this.state.index1].url}  style={{width:"100%"}} onClick={this.props.dispatch.bind(this,this.state.img[this.state.index1])}></img>
                      <img id="2" src={this.state.img[this.state.index2].url}  style={{width:"100%"}} onClick={this.props.dispatch.bind(this,this.state.img[this.state.index2])}></img>
                      </div>
                      </div>:null
                  }                    
            </div>
        )
    }
}
