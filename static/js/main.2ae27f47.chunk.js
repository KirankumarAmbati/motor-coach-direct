(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(23),c=a.n(r),o=(a(74),a(17)),s=a(18),l=a(20),u=a(19),p=a(21),d=a(63),h=a.n(d),m=(a(76),a(68)),v=a(64),S=a.n(v),f=a(66),k=a.n(f),b=a(67),w=a.n(b),E=a(25),O=a.n(E),g=a(24),y=a.n(g);var j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={activeStep:0,skipped:new Set},a.isStepOptional=function(e){return!1},a.handleNext=function(){var e=a.state.activeStep,t=a.state.skipped;a.isStepSkipped(e)&&(t=new Set(t.values())).delete(e),a.setState({activeStep:e+1,skipped:t})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleSkip=function(){var e=a.state.activeStep;if(!a.isStepOptional(e))throw new Error("You can't skip a step that isn't optional.");a.setState(function(t){var a=new Set(t.skipped.values());return a.add(e),{activeStep:t.activeStep+1,skipped:a}})},a.handleReset=function(){a.setState({activeStep:0})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=["Select New or Pre-Order","Choose Gas or Desiel","Which Manufacturer","Select your Model","Customize your RV"],n=this.state.activeStep;return i.a.createElement("div",{className:t.root},i.a.createElement(S.a,{activeStep:n},a.map(function(t,a){var n={},r={};return e.isStepOptional(a)&&(r.optional=i.a.createElement(y.a,{variant:"caption"},"Optional")),e.isStepSkipped(a)&&(n.completed=!1),i.a.createElement(k.a,Object.assign({key:t},n),i.a.createElement(w.a,r,t))})),i.a.createElement("div",null,n===a.length?i.a.createElement("div",null,i.a.createElement(y.a,{className:t.instructions},"All steps completed - you're finished"),i.a.createElement(O.a,{onClick:this.handleReset,className:t.button},"Reset")):i.a.createElement("div",null,i.a.createElement(y.a,{className:t.instructions},function(e){switch(e){case 0:return"Select new or pre-order...";case 1:return"Choose Gas or Desiel?";case 2:return"Which Manufacturer?";case 3:return"Select your Model...";default:return"Customize your RV"}}(n)),i.a.createElement("div",null,i.a.createElement(O.a,{disabled:0===n,onClick:this.handleBack,className:t.button},"Back"),this.isStepOptional(n)&&i.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:t.button},"Skip"),i.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:t.button},n===a.length-1?"Finish":"Next")))))}}]),t}(i.a.Component),N=Object(m.withStyles)(function(e){return{root:{width:"90%"},button:{marginRight:e.spacing.unit},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(j),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N,null))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),i.a.createElement(C,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,a){e.exports=a.p+"static/media/white-logo.05c454ef.png"},69:function(e,t,a){e.exports=a(178)},74:function(e,t,a){},76:function(e,t,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.2ae27f47.chunk.js.map