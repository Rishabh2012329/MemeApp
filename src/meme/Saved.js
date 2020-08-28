import React, { Component } from 'react';
import firebase from 'firebase';

export default class Saved extends Component {
    state={
        images:[]
    }
    componentDidMount(){
        //let images=firebase.database().ref('images/'+uid)
        //images.on('value',(image)=>{
       //     console.log(image)
        //})
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                let images=firebase.database().ref('images/'+user.uid)
        images.on('value',(image)=>{
            const img=image.val()
            console.log(img)
        })
            }
        })
    }
    render() {
        return (
            <div>
                <h2>hi</h2>
            </div>
        )
    }
}
