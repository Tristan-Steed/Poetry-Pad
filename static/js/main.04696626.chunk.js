(this["webpackJsonppoetry-pad"]=this["webpackJsonppoetry-pad"]||[]).push([[0],{16:function(A,t,e){},19:function(A,t,e){"use strict";e.r(t);var a=e(1),n=e.n(a),i=e(10),s=e.n(i),c=(e(16),e(3)),o=e(4),d=e(2),k=e(6),l=e(5),g=(e(7),e(0)),r=function(A){Object(k.a)(e,A);var t=Object(l.a)(e);function e(A){var a;return Object(c.a)(this,e),(a=t.call(this,A)).state={suggested:[],selected:-1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.setSelected=a.setSelected.bind(Object(d.a)(a)),a}return Object(o.a)(e,[{key:"componentDidUpdate",value:function(A){var t=this;this.props.lastWord!==A.lastWord&&fetch("https://rhymebrain.com/talk?function=getRhymes&word=".concat(this.props.lastWord)).then((function(A){return A.json()})).then((function(A){return t.setState({suggested:A})}))}},{key:"handleChange",value:function(A){this.setState({value:A.target.value})}},{key:"setSelected",value:function(A,t){this.setState({selected:A}),this.props.setSelectedWord(t)}},{key:"render",value:function(){var A=this;return Object(g.jsx)("ul",{children:this.state.suggested.map((function(t,e){return A.state.selected===e?Object(g.jsx)("li",{onClick:function(){return A.setSelected(e,t.word)},style:{background:"#fafafa",fontWeight:"bold"},id:e,children:t.word}):Object(g.jsx)("li",{onClick:function(){return A.setSelected(e,t.word)},id:e,children:t.word})}))})}}]),e}(n.a.Component),J=e(9),B=e.n(J),S=e(11),h=e.p+"static/media/LoadingBlob.610f3707.svg",C=function(A){Object(k.a)(e,A);var t=Object(l.a)(e);function e(A){return Object(c.a)(this,e),t.call(this,A)}return Object(o.a)(e,[{key:"render",value:function(){return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:"load"==this.props.loadOrStart?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"LoadingBlob",children:Object(g.jsx)("img",{src:h})}),Object(g.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(g.jsx)("br",{}),"Loading"]})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{style:{height:"2em",width:"auto"},src:"data:image/png;base64,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"})}),Object(g.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(g.jsx)("br",{}),"Dictionary"]})]})})}}]),e}(n.a.Component),u=function(A){Object(k.a)(e,A);var t=Object(l.a)(e);function e(A){var a;return Object(c.a)(this,e),(a=t.call(this,A)).state={definition:"",word:"",type:"none",loading:!1},a}return Object(o.a)(e,[{key:"componentDidUpdate",value:function(){var A=Object(S.a)(B.a.mark((function A(t){var e=this;return B.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t.word!==this.props.word&&(this.setState({loading:!0}),fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=".concat(this.props.word),{method:"GET",headers:{"x-rapidapi-key":"e2d0c94a15msh9ede8aff31b4315p1f8806jsnf67c8d0c84c8","x-rapidapi-host":"mashape-community-urban-dictionary.p.rapidapi.com"}}).then((function(A){return e.setState({loading:!1}),A.json()})).then((function(A){return e.setState({definition:A.list[0].definition,word:A.list[0].word})})).catch((function(A){e.setState({loading:!1}),e.setState({definition:A.toString(),word:e.props.word})})));case 1:case"end":return A.stop()}}),A,this)})));return function(t){return A.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:this.state.loading?Object(g.jsx)("div",{className:"dicbox",id:"dicboxLoading",children:Object(g.jsx)(C,{loadOrStart:"load"})}):Object(g.jsxs)("div",{className:"dicBox",style:{overflow:"scroll",overflowX:"hidden",fontSize:"small",boxSizing:"border-box",paddingTop:"0em",padding:"1em",textAlign:"left",border:"solid black thin"},children:[Object(g.jsx)("h1",{children:this.state.word}),Object(g.jsx)("p",{children:this.state.definition})]})})}}]),e}(n.a.Component),w=function(A){Object(k.a)(e,A);var t=Object(l.a)(e);function e(A){var a;return Object(c.a)(this,e),(a=t.call(this,A)).state={showModal:!1},a.closeModal=a.closeModal.bind(Object(d.a)(a)),a}return Object(o.a)(e,[{key:"componentDidUpdate",value:function(A){A.showModal!=this.props.showModal&&this.setState({showModal:!0})}},{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:this.state.showModal&&Object(g.jsx)("div",{className:"modal",children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsx)("p",{children:"The text was saved to local storage. "}),Object(g.jsx)("button",{onClick:this.closeModal,className:"close",children:"\xd7"})]})})})}}]),e}(n.a.Component),Q=function(A){Object(k.a)(e,A);var t=Object(l.a)(e);function e(){var A;return Object(c.a)(this,e),(A=t.call(this)).state={value:"Write Something ...",lastWord:"",selectedWord:"none",showModal:!0,textAreaStyle:{fontColor:"black"}},A.handleChange=A.handleChange.bind(Object(d.a)(A)),A.setSelectedWord=A.setSelectedWord.bind(Object(d.a)(A)),A.saveFile=A.saveFile.bind(Object(d.a)(A)),A}return Object(o.a)(e,[{key:"saveFile",value:function(){" "!==this.state.value.charAt(0)&&null!==this.state.value.charAt(0)&&localStorage.setItem("text",this.state.value),1==this.state.showModal?this.setState({showModal:!1}):this.setState({showModal:!0})}},{key:"setSelectedWord",value:function(A){this.setState({selectedWord:A})}},{key:"handleChange",value:function(A){this.setState({value:A.target.value})}},{key:"componentDidUpdate",value:function(A,t){if(t.value!==this.state.value){var e=this.state.value.split(" "),a=e[e.length-1];""!==a&&this.setState({lastWord:a,textAreaStyle:{fontColor:"black"}})}}},{key:"componentDidMount",value:function(){var A=localStorage.getItem("text");null!=A&&this.setState({value:A})}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",border:"solid",paddingRight:"1em",marginBottom:"20px",backgroundColor:"black"},children:[Object(g.jsx)("h1",{className:"title",style:{color:"white"},children:"Poetry Pad"}),Object(g.jsx)("button",{onClick:this.saveFile,style:{backgroundColor:"white",color:"black",margin:"10px",padding:"auto",borderColor:"black",fontWeight:"bold",fontSize:"1em"},children:"SAVE"})]}),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("textarea",{type:"text",value:this.state.value,style:this.state.textAreaStyle,onChange:this.handleChange}),Object(g.jsx)(u,{word:this.state.selectedWord}),Object(g.jsx)(r,{setSelectedWord:this.setSelectedWord,lastWord:this.state.lastWord}),Object(g.jsx)(w,{showModal:this.state.showModal})]})]})}}]),e}(n.a.Component),b=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(t){var e=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;e(A),a(A),n(A),i(A),s(A)}))};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root")),b()},7:function(A,t,e){}},[[19,1,2]]]);
//# sourceMappingURL=main.04696626.chunk.js.map