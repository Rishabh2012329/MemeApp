(this.webpackJsonpmeme=this.webpackJsonpmeme||[]).push([[0],{190:function(e,t,a){e.exports=a(400)},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(70),l=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(43),o=a(11),r=a(12),m=a(14),u=a(13),d=(a(195),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{style:{alignItems:"center"},className:"navb"},i.a.createElement("div",{className:"brand"}," ",i.a.createElement("span",null,"Meme")),i.a.createElement("div",{className:"nav1"},i.a.createElement("div",{onClick:this.props.set,className:"navi"},"Home"),i.a.createElement("div",{onClick:this.props.setsave,className:"navi"},"SavedMemes")),i.a.createElement("div",{style:{right:"2vw",position:"absolute"},className:"nav2"},i.a.createElement("div",{className:"navi"},i.a.createElement("a",{className:"navl "}," ",i.a.createElement("i",{style:{padding:"4px"},className:"fa fa-user"})," ",this.props.name.providerData[0].uid)),i.a.createElement("div",{style:{marginLeft:"2%"},className:"navi"},i.a.createElement("a",{className:"navl ",onClick:this.props.logout}," ",i.a.createElement("i",{style:{padding:"4px"},className:"fa fa-sign-out"})," logout")))))}}]),a}(n.Component)),h=(a(196),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("div",{className:"container"},"Meme Generator")))}}]),a}(n.Component)),g=(a(197),a(44)),p=a(108),f=a.n(p),v=(a(214),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={index:0,index1:1,index2:2,img:[]},e.next=function(){var t=e.state,a=t.index,n=t.index1,i=t.index2;e.setState({index:a+1,index1:n+1,index2:i+1})},e.prev=function(){var t=e.state,a=t.index,n=t.index1,i=t.index2;0!==a&&e.setState({index:a-1,index1:n-1,index2:i-1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({img:this.props.img})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{style:{textAlign:"center",fontSize:"3vw"}},"Choose a Templete"),i.a.createElement("i",{className:"fa fa-chevron-circle-left fa-2x ",style:{float:"left",marginTop:"10%",left:"10%",position:"absolute"},onClick:this.prev}),i.a.createElement("i",{style:{float:"right",marginTop:"10%"},className:"fa fa-chevron-circle-right fa-2x",onClick:this.next}),0!==this.state.img.length?i.a.createElement("div",{className:"rit"},i.a.createElement("div",{style:{width:"50%"},className:"container"},i.a.createElement("img",{id:"0",src:this.state.img[this.state.index].url,style:{width:"100%"},onClick:this.props.dispatch.bind(this,this.state.img[this.state.index])}),i.a.createElement("img",{id:"1",src:this.state.img[this.state.index1].url,style:{width:"100%"},onClick:this.props.dispatch.bind(this,this.state.img[this.state.index1])}),i.a.createElement("img",{id:"2",src:this.state.img[this.state.index2].url,style:{width:"100%"},onClick:this.props.dispatch.bind(this,this.state.img[this.state.index2])}))):null)}}]),a}(n.Component)),b=(a(215),a(6)),y=a.n(b),E=(a(225),a(112));a(226);function x(e){var t=e.url,a=e.back,s=e.imgs,l=Object(n.useState)(0),c=Object(E.a)(l,2),o=c[0],r=c[1],m=Object(n.useState)(t),u=Object(E.a)(m,2),d=u[0],h=u[1];return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("i",{onClick:a,class:"fa fa-arrow-left fa-2x"})),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10%"}},i.a.createElement("i",{style:{left:"1%",position:"absolute"},onClick:function(){o+1<s.length&&(r(o+1),h(s[o])),o==s.length-1&&(r(0),h(s[o]))},class:"fa fa-chevron-circle-left fa-2x","aria-hidden":"true"}),i.a.createElement("i",{style:{right:"1%",position:"absolute"},onClick:function(){0<o&&(r(o-1),h(s[o])),0==o&&(r(s.length-1),h(s[o]))},class:"fa fa-chevron-circle-right fa-2x","aria-hidden":"true"}),i.a.createElement("img",{src:d,style:{width:"100%",height:"auto"}})))}var w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:[],imageview:!1,url:""},e.set=function(t){e.setState({images:t})},e.setim=function(t){e.setState({imageview:!1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.auth().onAuthStateChanged((function(t){t&&y.a.database().ref("images/"+t.uid+"//").on("value",(function(t){var a=t.val();e.set(Object.values(a))}))}))}},{key:"seti",value:function(e){this.setState({imageview:!0,url:e.target.src})}},{key:"render",value:function(){var e=this,t=this.state.images.map((function(e){return e.img})),a=t.filter((function(e,a){return t.indexOf(e)===a})),n=i.a.createElement("div",null,i.a.createElement("div",{className:"cont"},i.a.createElement("div",{className:"container"},a?a.map((function(t){return i.a.createElement("img",{src:t,onClick:e.seti.bind(e),className:"grid-item"})})):null)));return i.a.createElement("div",null,this.state.imageview?i.a.createElement(x,{back:this.setim,url:this.state.url,imgs:t}):n)}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={img:"",oldimg:"",allimg:[],text0:"",text1:"",text2:"",text3:"",text4:"",i:0},e.dispatch=function(t){if(e.setState({img:t,oldimg:t,text0:"",text1:"",text2:"",text3:"",text4:"",i:1}),console.log(t),1===e.state.i)for(var a=0;a<e.state.oldimg.box_count;a+=1)document.getElementsByTagName("input")[a].value=""},e.onchange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value),(function(){console.log(e.state.color)}))},e.onsub=function(){var t=e.state.oldimg.id,a=0,n=e.state,i=n.text0,s=n.text1,l=n.text2,c=n.text3,o=n.text4,r=(n.color,[i,s,l,c,o]),m="";for(a=0;a<e.state.oldimg.box_count;a+=1)m+="&boxes[".concat(a,"][text]=").concat(r[a]||"");console.log(m),f.a.post("https://api.imgflip.com/caption_image?template_id=".concat(t,"&username=").concat("RishabhBaid","&password=").concat("death123").concat(m)).then((function(t){console.log(t.data),e.setState({img:t.data.data.url})}))},e.dispatch.bind(Object(g.a)(e)),e.onchange.bind(Object(g.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.imgflip.com/get_memes").then((function(t){e.setState({allimg:t.data.data.memes})})).catch((function(e){console.log(e)}))}},{key:"save",value:function(){var e=this.props.uid;y.a.database().ref("images/"+e).push({img:this.state.img.url||this.state.img})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.oldimg.box_count;t+=1)e.push(i.a.createElement("div",{style:{display:"inline-flex"}},i.a.createElement("input",Object(c.a)({type:"text",style:{width:"100%"},className:"form-control",name:"text".concat(t),value:this.state.text,onChange:this.onchange,placeholder:"text..."},"style",{margin:"2%"}))));var a=i.a.createElement("div",null,this.state.img?i.a.createElement("div",{className:"card",style:{width:"40%",margin:"auto"}},e,i.a.createElement("button",{className:"btn btn-dark",style:{margin:"2%",fontSize:"1.5vw"},onClick:this.onsub},"Submit")):null,this.state.img?i.a.createElement("div",{className:"meme"},i.a.createElement("img",{src:this.state.img.url||this.state.img,style:{width:"50%",marginTop:"3%"}}),i.a.createElement("button",{style:{fontSize:"1.5vw"},onClick:this.save.bind(this),className:"btn btn-dark"},"Save")):null,0!==this.state.allimg.length?i.a.createElement(v,{img:this.state.allimg,dispatch:this.dispatch}):null);return i.a.createElement("div",null,this.props.saved?i.a.createElement(w,null):a)}}]),a}(n.Component),C=a(189),N=(a(232),a(45)),S=a(111);y.a.initializeApp({apiKey:"AIzaSyCzzJpK-ziTTHgUHZltaG6gvlWdkJGbQ7Q",authDomain:"socialapp-2f6b4.firebaseapp.com",databaseURL:"https://socialapp-2f6b4.firebaseio.com",projectId:"socialapp-2f6b4",storageBucket:"socialapp-2f6b4.appspot.com",messagingSenderId:"389314608979",appId:"1:389314608979:web:934c3a82f60c8eabeaeba6",measurementId:"G-FLSE4QJYTC"});y.a.database();var j=Object(N.b)({firebase:S.firebaseReducer}),O=Object(N.c)(j,{}),T={firebase:y.a,config:{userProfile:"users"},dispatch:O.dispatch},A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={signup:"",email:"",password:"",confpass:"",meme:!1,user:null,save:!1},e.log=function(t){"log"===t.target.id?e.setState({signup:!1}):"sign"===t.target.id?e.setState({signup:!0}):"back"===t.target.id&&e.setState({signup:null}),e.setState({email:"",password:"",confpass:""})},e.login=function(){var t=e.state,a=t.email,n=t.password;y.a.auth().signInWithEmailAndPassword(a,n).then((function(){y.a.auth().onAuthStateChanged((function(t){t.emailVerified?e.setState({meme:!0}):alert("you haven't verified your email yet")}))})).catch((function(e){alert(e.message)}))},e.logout=function(){y.a.auth().signOut(),e.setState({meme:!1})},e.sign=function(t){var a=e.state,n=a.email,i=a.password;i===a.confpass?y.a.auth().createUserWithEmailAndPassword(n,i).then((function(){return y.a.auth().currentUser.sendEmailVerification().then((function(){alert("an email has been sent to email address please verify that it's you")})).catch((function(e){alert(e.message)})),y.a.auth().onAuthStateChanged((function(t){t?console.log(t.emailVerified):console.log(e.state.meme)}))})).catch((function(e){alert(e.message)})):alert("confirm password is not equal to password")},e.onchange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.meme=function(t){e.setState({meme:!0,user:t})},e.setmeme=function(){e.setState({signup:null})},e.show=function(e){"fa fa-eye"===e.target.className?(e.target.className="fa fa-eye-slash",document.getElementById("pass").type="text"):(e.target.className="fa fa-eye",document.getElementById("pass").type="password")},e.setsave=function(){e.setState({save:!0})},e.sethome=function(){e.setState({save:!1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.auth().onAuthStateChanged((function(t){t?t.emailVerified&&e.meme(t):e.setmeme()}))}},{key:"render",value:function(){var e=i.a.createElement("div",null,""!==this.state.signup?i.a.createElement("div",null,null===this.state.signup?null:i.a.createElement("i",{id:"back",onClick:this.log,className:"fa fa-arrow-left fa-1x"}),i.a.createElement("div",{className:"card",style:{width:"40%",margin:"auto",marginTop:"10%",padding:"1%"}},!0===this.state.signup?i.a.createElement("div",null,i.a.createElement("input",{type:"email",name:"email",style:{width:"96%"},onChange:this.onchange,className:"form-control",placeholder:"email..."}),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("input",{id:"pass",type:"password",name:"password",className:"form-control",style:{marginTop:"2%"},onChange:this.onchange,autoComplete:"off",placeholder:"password..."}),i.a.createElement("i",{id:"ey",onClick:this.show,className:"fa fa-eye"})),i.a.createElement("input",{type:"password",name:"confpass",className:"form-control",style:{width:"96%",marginTop:"2%"},onChange:this.onchange,placeholder:"confirm password..."}),i.a.createElement("button",{id:"sign",className:"btn btn-dark form-control",style:{marginTop:"2%"},onClick:this.sign},"Signup")):null,!1===this.state.signup?i.a.createElement("div",null,i.a.createElement("input",{type:"email",style:{width:"96%"},name:"email",value:this.state.email,className:"form-control",onChange:this.onchange,placeholder:"email..."}),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("input",{type:"password",id:"pass",value:this.state.password,name:"password",className:"form-control",autoComplete:"off",onChange:this.onchange,style:{marginTop:"2%"},placeholder:"password..."}),i.a.createElement("i",{id:"ey",style:{marginTop:"4%"},onClick:this.show,className:"fa fa-eye"})),i.a.createElement("button",{id:"log",className:"btn btn-dark form-control",style:{marginTop:"2%"},onClick:this.login},"Login")):null,null===this.state.signup?i.a.createElement("div",null,i.a.createElement("button",{id:"log",className:"btn btn-dark form-control",style:{marginTop:"2%"},onClick:this.log},"Login"),i.a.createElement("button",{id:"sign",className:"btn btn-dark form-control",style:{marginTop:"2%"},onClick:this.log},"Signup")):null)):null);return i.a.createElement(C.a,{store:O},i.a.createElement(S.ReactReduxFirebaseProvider,T,this.state.meme?i.a.createElement("div",null,i.a.createElement(d,{set:this.sethome,setsave:this.setsave,name:y.a.auth().currentUser,logout:this.logout}),i.a.createElement(h,null),i.a.createElement(k,{saved:this.state.save,uid:this.state.user.uid||null})):e))}}]),a}(n.Component);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.7e4a6108.chunk.js.map