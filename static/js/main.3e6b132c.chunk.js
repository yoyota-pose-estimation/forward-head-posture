(this["webpackJsonpforward-head-posture"]=this["webpackJsonpforward-head-posture"]||[]).push([[0],{111:function(e,t,n){e.exports=n(224)},122:function(e,t){},124:function(e,t){},154:function(e,t){},155:function(e,t){},213:function(e,t){},215:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(105),c=n.n(r),l=n(21),i=n(106),u=n.n(i),s=n(107),m=n.n(s),f=n(227),h=n(226),d=n(109),g=function(e){var t=e.label,n=e.value,a=e.onChange;return o.a.createElement(f.a,null,o.a.createElement(f.a.Group,{as:h.a,className:"d-flex"},o.a.createElement(f.a.Label,{column:!0,sm:"2"},t),o.a.createElement(d.a,{sm:"10"},o.a.createElement(f.a.Control,{type:"text",placeholder:"Enter ".concat(t),value:n,onChange:a}))))},p=function(e){var t=e.label,n=function(e){var t=Object(a.useState)(localStorage.getItem(e)||""),n=Object(l.a)(t,2),o=n[0],r=n[1];return[o,function(t){r(t.target.value),localStorage.setItem(e,t.target.value)}]}(m()(t,{lower:!0})),r=Object(l.a)(n,2),c=r[0],i=r[1];return o.a.createElement(g,{label:t,value:c,onChange:i})},v=n(110),w=n.n(v),E=localStorage.getItem("influxdb-url"),b={writePoints:function(){}};try{b=new w.a.InfluxDB(E)}catch(B){console.error(B)}var x=600,y=500,C={architecture:"ResNet50",outputStride:16,inputResolution:{width:x,height:y},quantBytes:4};function I(e,t){1===e.length&&function(e,t){b.writePoints([{fields:e,measurement:"pose",timestamp:t}])}(function(e){return e.keypoints.reduce((function(e,t){var n=t.part,a=t.position,o=t.score,r=n.toLowerCase(),c=a.x,l=a.y;return e["".concat(r,"_x")]=c/x,e["".concat(r,"_y")]=l/y,e["".concat(r,"_score")]=o,e}),{})}(Object(l.a)(e,1)[0]),t)}var k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{label:"InfluxDB URL"}),o.a.createElement(u.a,{className:"vh-100",frameRate:1,modelConfig:C,onEstimate:I,width:x,height:y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.3e6b132c.chunk.js.map