(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(4),i=n.n(c),s=(n(14),n(5)),o=n(6),d=n(7),u=n(9),b=n(8),l=(n(15),n(1)),j=n.n(l),h=n(0),p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),n]})};p.protoType={title:j.a.string.isRequired,children:j.a.node};var g=p,v=(n(19),function(e){var t=e.onLeaveFeedback,n=e.options;return Object(h.jsx)(h.Fragment,{children:n.map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:t,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))})});v.protoType={onLeaveFeedback:j.a.func.isRequired,options:j.a.arrayOf(j.a.string.isRequired)};var O=v,f=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",r]}),Object(h.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})};f.protoType={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var k=f,m=function(e){var t=e.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:t})})};m.protoType={message:j.a.string.isRequired};var x=m,F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.incrementFeedback=function(t){e.setState((function(e){return Object(s.a)({},t.target.name,e[t.target.name]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.incrementFeedback})}),Object(h.jsx)(g,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(k,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(x,{message:"No feedback given"})})]})}}]),n}(r.a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2cf5278d.chunk.js.map