import React, { Component } from 'react';
import axios from 'axios';
import Dmeme from './Dmeme';
import '../layout/meme.css';
import firebase from 'firebase';
import Saved from './Saved';

export default class Meme extends Component {
    constructor(){
        super();
        this.dispatch.bind(this)
        this.onchange.bind(this)
    }
    state={
        img:"",
        oldimg:"",
        allimg:[],
        text0:"",
        text1:"",
        text2:"",
        text3:"",
        text4:"",
        i:0,
    }
    
    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`).then((res)=>{
            this.setState({allimg:res.data.data.memes})
        }).catch((err)=>{
            console.log(err)
        })
    }
    dispatch=(img)=>{
        this.setState({img:img,oldimg:img,text0:"",text1:"",text2:"",
        text3:"",
        text4:"",
        i:1});
       
        console.log(img);
        if(this.state.i===1)
        for(let i=0;i<this.state.oldimg.box_count;i+=1)
       document.getElementsByTagName("input")[i].value=""

    }
   
    onchange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value},()=>{console.log(this.state.color)})
        
        
        }   
        onsub=()=>{
            let template_id=this.state.oldimg.id
            let username="RishabhBaid"
            let password="death123"
            let i=0;
            const {text0,text1,text2,text3,text4}=this.state;
            let boxes=[text0,text1,text2,text3,text4]
            let box="";
            for(i=0;i<this.state.oldimg.box_count;i+=1){
              box+=`&boxes[${i}][text]=${boxes[i]||""}`
            }
            console.log(box)
          axios.post(`https://api.imgflip.com/caption_image?template_id=${template_id}&username=${username}&password=${password}${box}`).then((val)=>{
                 console.log(val.data)
                 this.setState({img:val.data.data.url})
             }).then(()=>{
                 alert("image saved successfully")
             })
              
        }
        
          save(){
              const {uid} =this.props;
            var images=firebase.database().ref('images/'+uid);
            images.push({
                img:this.state.img.url||this.state.img
            })
        }
    
    render() {
        let input=[];
        for(let i=0;i<this.state.oldimg.box_count;i+=1){
                   input.push( <div style={{display:"inline-flex"}}><input type="text" style={{width:"100%"}} className="form-control" name={`text${i}`} value={this.state.text} onChange={this.onchange} placeholder="text..." style={{margin:"2%"}}></input>
                   </div>)         
        }
       
        const meme=<div>
               
            {
                this.state.img?
            <div className="card" style={{width:"40%",margin:"auto"}}> 
                    {input} 
            <button className="btn btn-dark" style={{margin:"2%",fontSize:"1.5vw"}} onClick={this.onsub}>Submit</button>                  
            </div>:null
         }
             {
                this.state.img?
                <div className="meme">
                    <img src={this.state.img.url||this.state.img} style={{width:"50%",marginTop:"3%"}}></img>
                    <button style={{fontSize:"1.5vw"}} onClick={this.save.bind(this)} className="btn btn-dark">Save</button>
                 </div>   
                :null
            }
            {
               this.state.allimg.length!==0?
                 <Dmeme img={this.state.allimg} dispatch={this.dispatch}/>:null 
            }
           
        </div>

        return (
            <div>
                {this.props.saved?<Saved/>:meme}
            </div>
        )
    }
}
