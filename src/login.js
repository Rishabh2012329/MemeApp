import React, { Component } from 'react';
import Nav from './layout/Nav';
import Header from './layout/Header';
import './layout/login.css';
import Meme from './meme/meme';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyCzzJpK-ziTTHgUHZltaG6gvlWdkJGbQ7Q",
    authDomain: "socialapp-2f6b4.firebaseapp.com",
    databaseURL: "https://socialapp-2f6b4.firebaseio.com",
    projectId: "socialapp-2f6b4",
    storageBucket: "socialapp-2f6b4.appspot.com",
    messagingSenderId: "389314608979",
    appId: "1:389314608979:web:934c3a82f60c8eabeaeba6",
    measurementId: "G-FLSE4QJYTC"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}


export default class Login extends Component {
    state={
        signup:null,
        email:"",
        password:"",
        confpass:"",
        meme:false
    }
    log=(e)=>{

        if(e.target.id==="log")
          this.setState({signup:false})
        else if(e.target.id==="sign")
          this.setState({signup:true})
        else if(e.target.id==="back")
          this.setState({signup:null})
        this.setState({email:"",password:"",confpass:""})
    }

    login=()=>{
        const {email,password}=this.state
        firebase.auth().signInWithEmailAndPassword(
            email,password
        ).then(()=>{
            this.setState({meme:true})
        }).catch((err)=>{
            alert(err.message)
        })
    }
    logout=()=>{
        firebase.auth().signOut();
        this.setState({meme:false})
    }
    sign=(e)=>{
        const {email,password,confpass}=this.state;
        const auth={
            email:email,
            password:password
        }
        if(password===confpass)
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>(
            firebase.auth().currentUser.sendEmailVerification().then(()=>{
                alert("an email has been sent to email address please verify that it's you")
            }).catch(err=>{
                alert(err.message)
            }) , 
            
            firebase.auth().currentUser.emailVerified?this.setState({meme:true}):null
        )).catch(err=>{
            alert(err.message)
        })  
        else
          alert("confirm password is not equal to password")  
        
    }
    
    onchange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    meme=()=>{
        this.setState({meme:true})
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
              this.meme();
            } 
          });     
    }
    show=(e)=>{
     if(e.target.className==="fa fa-eye"){
         e.target.className="fa fa-eye-slash"
         document.getElementById("pass").type="text"
     }
     else{
        e.target.className="fa fa-eye"   
        document.getElementById("pass").type="password"
     }
    }
    
    render() {
        
        const logi=(<div>
        {
            this.state.signup===null?null:<i id="back" onClick={this.log} className="fa fa-arrow-left fa-1x"></i>
        }
        <div className="card" style={{width:"40%",margin:"auto",marginTop:"10%",padding:"1%"}}>
            {this.state.signup===true?<div><input type="email" name="email" style={{width:"96%"}} onChange={this.onchange} className="form-control" placeholder="email..."></input>
            <div style={{display:"flex",}}><input id="pass" type="password" name="password"  className="form-control" style={{marginTop:"2%"}} onChange={this.onchange} placeholder="password..."></input><i style={{marginTop:"4%"}} onClick={this.show} className="fa fa-eye"></i></div>
            <input type="password" name="confpass"  className="form-control" style={{width:"96%",marginTop:"2%"}} onChange={this.onchange} placeholder="confirm password..."></input>
            <button id="sign" className="btn btn-dark form-control" style={{marginTop:"2%"}} onClick={this.sign}>Signup</button>
            </div>:null
            }
             {this.state.signup===false?<div><input type="email" style={{width:"96%"}} name="email" value={this.state.email} className="form-control" onChange={this.onchange} placeholder="email..." ></input>
             <div style={{display:"flex",}}><input type="password" id="pass" value={this.state.password} name="password" className="form-control" onChange={this.onchange} style={{marginTop:"2%"}} placeholder="password..."></input><i style={{marginTop:"4%"}} onClick={this.show} className="fa fa-eye"></i></div>
            <button id="log" className="btn btn-dark form-control" style={{marginTop:"2%"}} onClick={this.login}>Login</button>
           </div>:null
            }           
            {
                this.state.signup===null?
                <div>
                    <button id="log" className="btn btn-dark form-control" style={{marginTop:"2%"}} onClick={this.log}>Login</button>
                    <button id="sign" className="btn btn-dark form-control" style={{marginTop:"2%"}} onClick={this.log}>Signup</button>
                </div>
                :null
            }
            
            
        </div>
    </div>)
        return (
            <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                   
                    {
                        this.state.meme? <div><Nav name={firebase.auth().currentUser} logout={this.logout}/>
                        <Header/>
                        <Meme /></div>:logi
                    }
                
                </ReactReduxFirebaseProvider>
            </Provider>
           
        )
    }
}
