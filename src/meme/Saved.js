import React, { Component } from 'react';
import firebase from 'firebase';
import '../layout/saved.css'

export default class Saved extends Component {
    state={
        images:[]
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
    render() {
        const images= this.state.images.map(a=>(
            a.img
        ));
        const fm=images.filter((a, b) => images.indexOf(a) === b)
        return (
            <div>
                <div className="cont"> 
                <div className="container">
                {
                  fm?fm.map((a)=>(
                      
                         <img src={a} className="grid-item"></img>
                     
                  )):null
                }
                </div>
                
                 </div>
            </div>
        )
    }
}
