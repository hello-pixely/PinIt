var globalThis=this;function __skpm_run(e,t){globalThis.context=t;var n=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("sketch")},function(e,n,o){"use strict";o.r(n);var r=o(0),i=o.n(r);i.a.selectedDocument;t.selection.forEach(function(e){e.hasFixedLeft=!1,e.hasFixedRight=!1,e.hasFixedTop=!1,e.hasFixedBottom=!1,e.hasFixedWidth=!1,e.hasFixedHeight=!1,e.hasFixedLeft=!1,e.hasFixedRight=!1,e.hasFixedTop=!0,e.hasFixedBottom=!1,e.hasFixedWidth=!0,e.hasFixedHeight=!0}),n.default=function(){i.a.UI.message("Pin Top")}}]);if("default"===e&&"function"==typeof n)n(t);else{if("function"!=typeof n[e])throw new Error('Missing export named "'+e+'". Your command should contain something like `export function " + key +"() {}`.');n[e](t)}}globalThis.onRun=__skpm_run.bind(this,"default");