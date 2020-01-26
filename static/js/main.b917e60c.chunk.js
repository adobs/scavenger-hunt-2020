(this.webpackJsonpenigma=this.webpackJsonpenigma||[]).push([[0],{13:function(e,t,n){e.exports={Link:"nav_Link__3wgIB",Nav:"nav_Nav__3Nx4E"}},14:function(e,t,n){e.exports={Li:"menu_Li__2wBrj",Menu:"menu_Menu__2w_-8",Highlight:"menu_Highlight__2Yefb"}},15:function(e,t,n){e.exports={Backdrop:"modal_Backdrop__BqL4j",Modal:"modal_Modal__1ZWId",Close:"modal_Close__2DPeg"}},16:function(e,t,n){e.exports={SorenBtn:"enigma_SorenBtn__NtJGL",SorenLink:"enigma_SorenLink__2juJu",HintBtn:"enigma_HintBtn__1UW33"}},20:function(e,t,n){e.exports={Container:"tooltip_Container__3LUtW",Tooltip:"tooltip_Tooltip__OYBfV"}},26:function(e,t,n){e.exports={EncryptedText:"encryptedText_EncryptedText__pF3M-"}},28:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),s=n.n(r),l=(n(33),n(11)),c=n(9),i=n(13),u=n.n(i),m={color:"black",fontWeight:"bold"};var h=function(){return o.a.createElement("nav",{className:u.a.Nav},o.a.createElement(l.b,{activeStyle:m,exact:!0,to:"/scavenger-hunt-2020",className:u.a.Link},"Hints"),o.a.createElement(l.b,{activeStyle:m,to:"/scavenger-hunt-2020/solved",className:u.a.Link},"Solved"))},p=n(4),d=n(5),v=n(7),E=n(6),f=n(8),g=n(26),C=n.n(g),O={1:"GQBYA YVYWF VJTIL EAGNE X",2:"FOLYJ KDGHK RUOKN LUPKV SOLSU OTSWD EXRVV",3:"MBYGQ FBGNN JFMZY WCQQM BGXNQ SBAUI MUHUJ A",4:"HKQPF EJBIY DNLUN GXPYP TWBDN IDKXY",5:"MHUCC WOZWU UVBFU UVKVB",6:"HGEKZ COXHP ZEKVG R",7:"EGVYS RIHZD DYDCU RTBYE CEOHY WKEYZ NOECD IZIKQ OZ",8:"BGMDW XYQYP OFPSY WQCHB",9:"NYWXJ EVVUU GTNIF LJHDJ AVJLR Z",10:"STKYR LAWVW SOAQM JASYW BD"};function _(e){var t=e.selectedText;return o.a.createElement("div",null,o.a.createElement("p",{className:C.a.EncryptedText},O[t]))}_.defaultProps={selectedText:1};var b=_,k=n(27),S=n(14),y=n.n(S),x=n(20),N=n.n(x),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).mouseOver=function(){n.setState({hovering:!0})},n.mouseOut=function(){n.setState({hovering:!1})},n.state={hovering:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}]),t}(o.a.Component);var w=function(e){var t=e.text,n=e.children;return o.a.createElement(T,null,(function(e){return o.a.createElement("div",{className:N.a.Container},!0===e&&o.a.createElement("div",{className:N.a.Tooltip},t),n)}))};var H=function(e){var t=e.onClickHandler,n=e.selectedText,a=Object(k.a)(Array(10).keys()).map((function(e){var a=e+1;return o.a.createElement("li",{className:y.a.Li,key:e},o.a.createElement(w,{text:"Day ".concat(a)},o.a.createElement("button",{className:n===a?y.a.Highlight:null,onClick:function(e){return t(a,e)}},a)))}));return o.a.createElement("ul",{className:y.a.Menu},a)},j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).onInputChange=function(e){var t=e.target.value;n.setState({guess:t,validation:""})},n.onSubmit=function(e){e.preventDefault();var t=n.state.guess,a={num:n.props.selectedText,guess:t.toLowerCase(),type:n.props.type};fetch("https://scavenger-hunt-api.herokuapp.com/hint",{method:"POST",body:JSON.stringify(a),mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"application/json","Access-Control-Request-Method":"POST","Access-Control-Request-Headers":"Content-Type"},redirect:"follow"}).then((function(e){return e.json()})).then((function(e){var t=e.validation;n.setState({validation:t})})).catch((function(e){return console.log("err ",e)}))},n.state={validation:"",guess:""},n.input=o.a.createRef(),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.type;"who"!==e&&"solved"!==e||this.input.current.focus()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("label",null,this.props.question),o.a.createElement("div",null,o.a.createElement("input",{ref:this.input,onChange:this.onInputChange,type:"text",value:this.state.guess}),o.a.createElement("button",{type:"submit",disabled:!this.state.guess,onClick:this.onSubmit},"Submit")),this.state.validation&&o.a.createElement("p",null,this.state.validation))}}]),t}(o.a.Component),B=n(12),L=n(15),A=n.n(L),Y=function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.show?o.a.createElement("div",{className:A.a.Backdrop},o.a.createElement("div",{className:A.a.Modal},o.a.createElement("button",{className:A.a.Close,onClick:this.props.onClose},o.a.createElement(B.b,{size:22})),this.props.children)):null}}]),t}(o.a.Component),W=o.a.createContext(1);var M=function(e){var t=e.onClose;return o.a.createElement(Y,{onClose:t,show:!0},o.a.createElement(W.Consumer,null,(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Hint for #".concat(e)),o.a.createElement("form",null,o.a.createElement(j,{selectedText:e,question:"What/ who is this hint about?",type:"who"}),o.a.createElement(j,{selectedText:e,question:"After you've done the action, what does the hint translate to?",type:"translate"})))})))},U=n(16),D=n.n(U),J=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).menuClickHandler=function(e,t){n.setState({selectedText:e})},n.openEnigmaLink=function(){window.open("https://py-enigma.readthedocs.io/en/latest/guide.html")},n.state={selectedText:1,showHint:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(W.Provider,{value:this.state.selectedText},o.a.createElement("h1",{className:D.a.SorenBtn,onClick:this.openEnigmaLink},o.a.createElement("a",{className:D.a.SorenLink,href:"https://adobs.github.io/scavenger-hunt-2020/key_sheet.txt",download:!0,target:"_blank"},"Soren's Scavenger Hunt 2020")),o.a.createElement(H,{onClickHandler:this.menuClickHandler,selectedText:this.state.selectedText}),o.a.createElement(b,{selectedText:this.state.selectedText}),0!==this.state.selectedText&&o.a.createElement("button",{onClick:function(){return e.setState({showHint:!0})},className:D.a.HintBtn},o.a.createElement(B.a,{size:30})),this.state.showHint&&o.a.createElement(M,{onClose:function(){return e.setState({showHint:!1})}})))}}]),t}(o.a.Component);var V=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"So, you've solved the puzzle?"),o.a.createElement(j,{type:"solved",question:"What phrase does the entire thing simplify to?",selectedText:1}))};n(39);var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,null,o.a.createElement(h,null),o.a.createElement(c.a,{exact:!0,path:"/",component:J}),o.a.createElement(c.a,{path:"/solved",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b917e60c.chunk.js.map