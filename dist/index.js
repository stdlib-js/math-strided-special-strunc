"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(z,s){
var j=require('@stdlib/strided-base-smap/dist'),x=require('@stdlib/math-base-special-truncf/dist');function l(e,r,a,t,i){return j(e,r,a,t,i,x)}s.exports=l
});var q=u(function(A,c){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-truncf/dist');function E(e,r,a,t,i,m,y){return R(e,r,a,t,i,m,y,_)}c.exports=E
});var f=u(function(B,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),b=q();O(o,"ndarray",b);p.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=f(),n,d=h(g(__dirname,"./native.js"));d instanceof Error?n=k:n=d;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
