import React,{useState} from 'react'
import '../layout/imav.css'

export default function Imav({url,back,imgs}){
    
    const [index,setindex]=useState(0);
    const [url1,seturl]=useState(url)
    const change=()=>{
        if(index+1<imgs.length){
            setindex(index+1)
            seturl(imgs[index])
        }
        if(index==imgs.length-1){
            setindex(0)
            seturl(imgs[index])
        }
    }
    const changeR=()=>{
        if(0<index){
            setindex(index-1)
            seturl(imgs[index])
        }
        if(index==0){
            setindex(imgs.length-1)
            seturl(imgs[index])
        }
    }

    return (
    <div>
        <div><i onClick={back} class="fa fa-arrow-left fa-2x"></i></div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10%"}}>
        <i style={{left:"1%",position:"absolute"}} onClick={change} class="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
        <i style={{right:"1%",position:"absolute"}} onClick={changeR} class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>
            <img src={url1} style={{width:"100%",height:"auto"}}></img >
        </div>
    </div>
        
    )
}