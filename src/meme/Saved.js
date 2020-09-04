import React, { Component } from 'react';
import firebase from 'firebase';
import '../layout/saved.css';
import Imav from './Imav'

export default class Saved extends Component {
    state={
        images:[],
        imageview:false,
        url:''
    }
    set=(obj)=>{
    this.setState({images:obj})
    }
    componentDidMount(){
        //let images=firebase.database().ref('images/'+uid)
        //images.on('value',(image)=>{
       //     console.log(image)
        //})
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                let images=firebase.database().ref('images/'+user.uid+'//')
           images.on('value',(image)=>{
            const img=image.val()
            this.set(Object.values(img));
            
        })
            }
        })

    }
    seti(e){
        this.setState({imageview:true,url:e.target.src})
    }
    setim=(e)=>{
        this.setState({imageview:false})
    }
    render() {
        const images= this.state.images.map(a=>(
            a.img
        ));
        const fm=images.filter((a, b) => images.indexOf(a) === b)
        const Saved=<div>
            <div className="cont"> 
            <div className="container">
            {
              fm?fm.map((a)=>(
                  
                     <img src={a} onClick={this.seti.bind(this)} className="grid-item"></img>
                 
              )):null
            }
            </div>
            
             </div>
        </div>
        return (
           <div>
               {this.state.imageview?<Imav back={this.setim} url={this.state.url} imgs={images}/>:Saved}
           </div>
        )
    }
}
