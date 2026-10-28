(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const df="186",Ip=0,su=1,Lp=2,vo=1,Dp=2,mo=3,qa=0,Un=1,ni=2,Ji=0,Mo=1,lu=2,cu=3,fu=4,Np=5,Cr=100,Up=101,Op=102,Fp=103,Bp=104,zp=200,Gp=201,Vp=202,kp=203,Gd=204,Vd=205,Hp=206,Wp=207,Xp=208,qp=209,Yp=210,$p=211,Jp=212,Zp=213,Kp=214,dc=0,hc=1,pc=2,Ao=3,mc=4,gc=5,xc=6,vc=7,kd=0,Qp=1,jp=2,Ii=0,Hd=1,Wd=2,Xd=3,qd=4,Yd=5,$d=6,Jd=7,Zd=300,Ya=301,Br=302,_l=303,Sl=304,al=306,Vs=1e3,qi=1001,Mc=1002,on=1003,e0=1004,jo=1005,mn=1006,yl=1007,ka=1008,Dn=1009,Kd=1010,Qd=1011,To=1012,hf=1013,Di=1014,Ci=1015,Ni=1016,pf=1017,mf=1018,wo=1020,jd=35902,eh=35899,th=1021,nh=1022,ai=1023,Ki=1026,Ha=1027,ih=1028,gf=1029,$a=1030,xf=1031,vf=1033,Ns=33776,Us=33777,Os=33778,Fs=33779,_c=35840,Sc=35841,yc=35842,bc=35843,Ec=36196,Ac=37492,Tc=37496,wc=37488,Rc=37489,ks=37490,Cc=37491,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Oc=37814,Fc=37815,Bc=37816,zc=37817,Gc=37818,Vc=37819,kc=37820,Hc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,$c=36284,Hs=36285,Jc=36286,t0=3200,Zc=0,n0=1,_a="",Gn="srgb",Ws="srgb-linear",Xs="linear",Ht="srgb",bl=7680,i0=519,a0=512,r0=513,o0=514,Mf=515,s0=516,l0=517,_f=518,c0=519,ah=35044,uu="300 es",Pi=2e3,Ro=2001;function f0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u0(){const n=Co("canvas");return n.style.display="block",n}const du={};function qs(...n){const e="THREE."+n.shift();console.log(e,...n)}function rh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function mt(...n){n=rh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Dt(...n){n=rh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Nr(...n){const e=n.join(" ");e in du||(du[e]=!0,mt(...n))}function d0(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const h0={[dc]:hc,[pc]:xc,[mc]:vc,[Ao]:gc,[hc]:dc,[xc]:pc,[vc]:mc,[gc]:Ao};class Ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hu=1234567;const _o=Math.PI/180,Po=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Sf(n,e){return(n%e+e)%e}function p0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function m0(n,e,t){return n!==e?(t-n)/(e-n):0}function So(n,e,t){return(1-t)*n+t*e}function g0(n,e,t,i){return So(n,e,1-Math.exp(-t*i))}function x0(n,e=1){return e-Math.abs(Sf(n,e*2)-e)}function v0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function S0(n,e){return n+Math.random()*(e-n)}function y0(n){return n*(.5-Math.random())}function b0(n){n!==void 0&&(hu=n);let e=hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E0(n){return n*_o}function A0(n){return n*Po}function T0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function w0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function R0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function C0(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),f=s(t/2),c=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,f*h,f*d,o*c);break;case"YZY":n.set(f*d,o*u,f*h,o*c);break;case"ZXZ":n.set(f*h,f*d,o*u,o*c);break;case"XZX":n.set(o*u,f*m,f*p,o*c);break;case"YXY":n.set(f*p,o*u,f*m,o*c);break;case"ZYZ":n.set(f*m,f*p,o*u,o*c);break;default:mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const P0={DEG2RAD:_o,RAD2DEG:Po,generateUUID:Li,clamp:Ct,euclideanModulo:Sf,mapLinear:p0,inverseLerp:m0,lerp:So,damp:g0,pingpong:x0,smoothstep:v0,smootherstep:M0,randInt:_0,randFloat:S0,randFloatSpread:y0,seededRandom:b0,degToRad:E0,radToDeg:A0,isPowerOfTwo:T0,ceilPowerOfTwo:w0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:C0,normalize:Wt,denormalize:mi},Wf=class Wf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wf.prototype.isVector2=!0;let Ne=Wf;class gi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let f=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],E=r[s+3];if(h!==E||f!==d||c!==p||u!==m){let v=f*d+c*p+u*m+h*E;v<0&&(d=-d,p=-p,m=-m,E=-E,v=-v);let x=1-o;if(v<.9995){const A=Math.acos(v),P=Math.sin(A);x=Math.sin(x*A)/P,o=Math.sin(o*A)/P,f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+E*o}else{f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+E*o;const A=1/Math.sqrt(f*f+c*c+u*u+h*h);f*=A,c*=A,u*=A,h*=A}}e[t]=f,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],f=i[a+1],c=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+f*p-c*d,e[t+1]=f*m+u*d+c*h-o*p,e[t+2]=c*m+u*p+o*d-f*h,e[t+3]=u*m-o*h-f*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,f=Math.sin,c=o(i/2),u=o(a/2),h=o(r/2),d=f(i/2),p=f(a/2),m=f(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],f=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-f)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-f)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(f+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(f+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,f=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*f,this._y=a*u+s*f+r*o-i*c,this._z=r*u+s*c+i*f-a*o,this._w=s*u-i*o-a*f-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let f=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);f=Math.sin(f*c)/u,t=Math.sin(t*c)/u,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xf=class Xf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,f=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+f*c+s*h-o*u,this.y=i+f*u+o*c-r*h,this.z=a+f*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,f=t.z;return this.x=a*f-r*o,this.y=r*s-i*f,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xf.prototype.isVector3=!0;let G=Xf;const El=new G,pu=new gi,qf=class qf{constructor(e,t,i,a,r,s,o,f,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c)}set(e,t,i,a,r,s,o,f,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],f=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],E=a[0],v=a[3],x=a[6],A=a[1],P=a[4],y=a[7],S=a[2],T=a[5],I=a[8];return r[0]=s*E+o*A+f*S,r[3]=s*v+o*P+f*T,r[6]=s*x+o*y+f*I,r[1]=c*E+u*A+h*S,r[4]=c*v+u*P+h*T,r[7]=c*x+u*y+h*I,r[2]=d*E+p*A+m*S,r[5]=d*v+p*P+m*T,r[8]=d*x+p*y+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*f+a*r*c-a*s*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*f-u*r,p=c*r-s*f,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return e[0]=h*E,e[1]=(a*c-u*i)*E,e[2]=(o*i-a*s)*E,e[3]=d*E,e[4]=(u*t-a*f)*E,e[5]=(a*r-o*t)*E,e[6]=p*E,e[7]=(i*f-c*t)*E,e[8]=(s*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const f=Math.cos(r),c=Math.sin(r);return this.set(i*f,i*c,-i*(f*s+c*o)+s+e,-a*c,a*f,-a*(-c*s+f*o)+o+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qf.prototype.isMatrix3=!0;let St=qf;const Al=new St,mu=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){const n={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ht&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ht&&(a.r=Ur(a.r),a.g=Ur(a.g),a.b=Ur(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_a?Xs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ws]:{primaries:e,whitePoint:i,transfer:Xs,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),n}const Lt=I0();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rr;class L0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rr===void 0&&(rr=Co("canvas")),rr.width=e.width,rr.height=e.height;const a=rr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Zi(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D0=0;class yf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Tl(a[s].image)):r.push(Tl(a[s]))}else r=Tl(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?L0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let N0=0;const wl=new G;class gn extends Ka{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=qi,a=qi,r=mn,s=ka,o=ai,f=Dn,c=gn.DEFAULT_ANISOTROPY,u=_a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Li(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Zd;gn.DEFAULT_ANISOTROPY=1;const Yf=class Yf{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,c=f[0],u=f[4],h=f[8],d=f[1],p=f[5],m=f[9],E=f[2],v=f[6],x=f[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,y=(p+1)/2,S=(x+1)/2,T=(u+d)/4,I=(h+E)/4,_=(m+v)/4;return P>y&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=T/i,r=I/i):y>S?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=_/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=I/r,a=_/r),this.set(i,a,r,t),this}let A=Math.sqrt((v-m)*(v-m)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(v-m)/A,this.y=(h-E)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;let nn=Yf;class U0 extends Ka{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new gn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new yf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends U0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class oh extends gn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends gn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const il=class il{constructor(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v)}set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=r,x[5]=s,x[9]=o,x[13]=f,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=m,x[11]=E,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new il().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),s=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),f=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=-f*h,t[8]=c,t[1]=p+m*c,t[5]=d-E*c,t[9]=-o*f,t[2]=E-d*c,t[6]=m+p*c,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,p=f*h,m=c*u,E=c*h;t[0]=d+E*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=E+d*o,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,p=f*h,m=c*u,E=c*h;t[0]=d-E*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=E-d*o,t[2]=-s*c,t[6]=o,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=m*c-p,t[8]=d*c+E,t[1]=f*h,t[5]=E*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,p=s*c,m=o*f,E=o*c;t[0]=f*u,t[4]=E-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-E*h}else if(e.order==="XZY"){const d=s*f,p=s*c,m=o*f,E=o*c;t[0]=f*u,t[4]=-h,t[8]=c*u,t[1]=d*h+E,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F0,e,B0)}lookAt(e,t,i){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ra.crossVectors(i,Wn),ra.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ra.crossVectors(i,Wn)),ra.normalize(),es.crossVectors(Wn,ra),a[0]=ra.x,a[4]=es.x,a[8]=Wn.x,a[1]=ra.y,a[5]=es.y,a[9]=Wn.y,a[2]=ra.z,a[6]=es.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],f=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],E=i[6],v=i[10],x=i[14],A=i[3],P=i[7],y=i[11],S=i[15],T=a[0],I=a[4],_=a[8],w=a[12],L=a[1],U=a[5],V=a[9],q=a[13],z=a[2],J=a[6],re=a[10],W=a[14],ve=a[3],se=a[7],ie=a[11],de=a[15];return r[0]=s*T+o*L+f*z+c*ve,r[4]=s*I+o*U+f*J+c*se,r[8]=s*_+o*V+f*re+c*ie,r[12]=s*w+o*q+f*W+c*de,r[1]=u*T+h*L+d*z+p*ve,r[5]=u*I+h*U+d*J+p*se,r[9]=u*_+h*V+d*re+p*ie,r[13]=u*w+h*q+d*W+p*de,r[2]=m*T+E*L+v*z+x*ve,r[6]=m*I+E*U+v*J+x*se,r[10]=m*_+E*V+v*re+x*ie,r[14]=m*w+E*q+v*W+x*de,r[3]=A*T+P*L+y*z+S*ve,r[7]=A*I+P*U+y*J+S*se,r[11]=A*_+P*V+y*re+S*ie,r[15]=A*w+P*q+y*W+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],f=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],E=e[7],v=e[11],x=e[15],A=f*p-c*d,P=o*p-c*h,y=o*d-f*h,S=s*p-c*u,T=s*d-f*u,I=s*h-o*u;return t*(E*A-v*P+x*y)-i*(m*A-v*S+x*T)+a*(m*P-E*S+x*I)-r*(m*y-E*T+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],f=e[2],c=e[6],u=e[10];return t*(s*u-o*c)-i*(r*u-o*f)+a*(r*c-s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],E=e[13],v=e[14],x=e[15],A=t*o-i*s,P=t*f-a*s,y=t*c-r*s,S=i*f-a*o,T=i*c-r*o,I=a*c-r*f,_=u*E-h*m,w=u*v-d*m,L=u*x-p*m,U=h*v-d*E,V=h*x-p*E,q=d*x-p*v,z=A*q-P*V+y*U+S*L-T*w+I*_;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/z;return e[0]=(o*q-f*V+c*U)*J,e[1]=(a*V-i*q-r*U)*J,e[2]=(E*I-v*T+x*S)*J,e[3]=(d*T-h*I-p*S)*J,e[4]=(f*L-s*q-c*w)*J,e[5]=(t*q-a*L+r*w)*J,e[6]=(v*y-m*I-x*P)*J,e[7]=(u*I-d*y+p*P)*J,e[8]=(s*V-o*L+c*_)*J,e[9]=(i*L-t*V-r*_)*J,e[10]=(m*T-E*y+x*A)*J,e[11]=(h*y-u*T-p*A)*J,e[12]=(o*w-s*U-f*_)*J,e[13]=(t*U-i*w+a*_)*J,e[14]=(E*P-m*S-v*A)*J,e[15]=(u*S-h*P+d*A)*J,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,f=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*f,c*f+a*o,0,c*o+a*f,u*o+i,u*f-a*s,0,c*f-a*o,u*f+a*s,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,f=t._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,m=r*h,E=s*u,v=s*h,x=o*h,A=f*c,P=f*u,y=f*h,S=i.x,T=i.y,I=i.z;return a[0]=(1-(E+x))*S,a[1]=(p+y)*S,a[2]=(m-P)*S,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(d+x))*T,a[6]=(v+A)*T,a[7]=0,a[8]=(m+P)*I,a[9]=(v-A)*I,a[10]=(1-(d+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=or.set(a[0],a[1],a[2]).length();const o=or.set(a[4],a[5],a[6]).length(),f=or.set(a[8],a[9],a[10]).length();r<0&&(s=-s),ci.copy(this);const c=1/s,u=1/o,h=1/f;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=f,this}makePerspective(e,t,i,a,r,s,o=Pi,f=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,E;if(f)m=r/(s-r),E=s*r/(s-r);else if(o===Pi)m=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(o===Ro)m=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Pi,f=!1){const c=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,E;if(f)m=1/(s-r),E=s/(s-r);else if(o===Pi)m=-2/(s-r),E=-(s+r)/(s-r);else if(o===Ro)m=-1/(s-r),E=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};il.prototype.isMatrix4=!0;let Jt=il;const or=new G,ci=new Jt,F0=new G(0,0,0),B0=new G(1,1,1),ra=new G,es=new G,Wn=new G,xu=new Jt,vu=new gi;class Ta{constructor(e=0,t=0,i=0,a=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],f=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(f,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const Mu=new G,sr=new gi,Oi=new Jt,ts=new G,eo=new G,G0=new G,V0=new gi,_u=new G(1,0,0),Su=new G(0,1,0),yu=new G(0,0,1),bu={type:"added"},k0={type:"removed"},lr={type:"childadded",child:null},Rl={type:"childremoved",child:null};class Yt extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new G,t=new Ta,i=new gi,a=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Jt},normalMatrix:{value:new St}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ts.copy(e):ts.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(eo,ts,this.up):Oi.lookAt(ts,eo,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),sr.setFromRotationMatrix(Oi),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),lr.child=e,this.dispatchEvent(lr),lr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let c=0,u=f.length;c<u;c++){const h=f[c];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,c=this.material.length;f<c;f++)o.push(r(e.materials,this.material[f]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];a.animations.push(r(e.animations,f))}}if(t){const o=s(e.geometries),f=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const f=[];for(const c in o){const u=o[c];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.DEFAULT_UP=new G(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qt extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,f=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),x=this._getHandJoint(c,E);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return o!==null&&(o.visible=a!==null),f!==null&&(f.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oa={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Lt.workingColorSpace){if(e=Sf(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Pl(s,r,e+1/3),this.g=Pl(s,r,e),this.b=Pl(s,r,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=Gn){function i(r){r!==void 0&&parseFloat(r)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Lt.workingToColorSpace(_n.copy(this),e),Math.round(Ct(_n.r*255,0,255))*65536+Math.round(Ct(_n.g*255,0,255))*256+Math.round(Ct(_n.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(_n.copy(this),t);const i=_n.r,a=_n.g,r=_n.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let f,c;const u=(o+s)/2;if(o===s)f=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:f=(a-r)/h+(a<r?6:0);break;case a:f=(r-i)/h+2;break;case r:f=(i-a)/h+4;break}f/=6}return e.h=f,e.s=c,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Gn){Lt.workingToColorSpace(_n.copy(this),e);const t=_n.r,i=_n.g,a=_n.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(oa),this.setHSL(oa.h+e,oa.s+t,oa.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oa),e.getHSL(ns);const i=So(oa.h,ns.h,t),a=So(oa.s,ns.s,t),r=So(oa.l,ns.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new vt;vt.NAMES=lh;class ch extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fi=new G,Fi=new G,Il=new G,Bi=new G,cr=new G,fr=new G,Eu=new G,Ll=new G,Dl=new G,Nl=new G,Ul=new nn,Ol=new nn,Fl=new nn;class ii{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),fi.subVectors(e,t),a.cross(fi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){fi.subVectors(a,t),Fi.subVectors(i,t),Il.subVectors(e,t);const s=fi.dot(fi),o=fi.dot(Fi),f=fi.dot(Il),c=Fi.dot(Fi),u=Fi.dot(Il),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*f-o*u)*d,m=(s*u-o*f)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,a,r,s,o,f){return this.getBarycoord(e,t,i,a,Bi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,Bi.x),f.addScaledVector(s,Bi.y),f.addScaledVector(o,Bi.z),f)}static getInterpolatedAttribute(e,t,i,a,r,s){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ul,r.x),s.addScaledVector(Ol,r.y),s.addScaledVector(Fl,r.z),s}static isFrontFacing(e,t,i,a){return fi.subVectors(i,t),Fi.subVectors(e,t),fi.cross(Fi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),fi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;cr.subVectors(a,i),fr.subVectors(r,i),Ll.subVectors(e,i);const f=cr.dot(Ll),c=fr.dot(Ll);if(f<=0&&c<=0)return t.copy(i);Dl.subVectors(e,a);const u=cr.dot(Dl),h=fr.dot(Dl);if(u>=0&&h<=u)return t.copy(a);const d=f*h-u*c;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(i).addScaledVector(cr,s);Nl.subVectors(e,r);const p=cr.dot(Nl),m=fr.dot(Nl);if(m>=0&&p<=m)return t.copy(r);const E=p*c-f*m;if(E<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(fr,o);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return Eu.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(Eu,o);const x=1/(v+E+d);return s=E*x,o=d*x,t.copy(i).addScaledVector(cr,s).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ko{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ui):ui.fromBufferAttribute(r,s),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),as.subVectors(this.max,to),ur.subVectors(e.a,to),dr.subVectors(e.b,to),hr.subVectors(e.c,to),sa.subVectors(dr,ur),la.subVectors(hr,dr),Da.subVectors(ur,hr);let t=[0,-sa.z,sa.y,0,-la.z,la.y,0,-Da.z,Da.y,sa.z,0,-sa.x,la.z,0,-la.x,Da.z,0,-Da.x,-sa.y,sa.x,0,-la.y,la.x,0,-Da.y,Da.x,0];return!Bl(t,ur,dr,hr,as)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,ur,dr,hr,as))?!1:(rs.crossVectors(sa,la),t=[rs.x,rs.y,rs.z],Bl(t,ur,dr,hr,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new G,new G,new G,new G,new G,new G,new G,new G],ui=new G,is=new ko,ur=new G,dr=new G,hr=new G,sa=new G,la=new G,Da=new G,to=new G,as=new G,rs=new G,Na=new G;function Bl(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){Na.fromArray(n,r);const o=a.x*Math.abs(Na.x)+a.y*Math.abs(Na.y)+a.z*Math.abs(Na.z),f=e.dot(Na),c=t.dot(Na),u=i.dot(Na);if(Math.max(-Math.max(f,c,u),Math.min(f,c,u))>o)return!1}return!0}const cn=new G,os=new Ne;let W0=0;class xi extends Ka{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),a=Wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),a=Wt(a,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uh extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const X0=new ko,no=new G,zl=new G;class rl{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):X0.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(no,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(zl)),this.expandByPoint(no.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q0=0;const ei=new Jt,Gl=new Yt,pr=new G,Xn=new ko,io=new ko,hn=new G;class vn extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f0(e)?uh:fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new St().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];io.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Xn.min,io.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,io.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(io.min),Xn.expandByPoint(io.max))}Xn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)hn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(hn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],f=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),f&&(pr.fromBufferAttribute(e,c),hn.add(pr)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],f=[];for(let _=0;_<i.count;_++)o[_]=new G,f[_]=new G;const c=new G,u=new G,h=new G,d=new Ne,p=new Ne,m=new Ne,E=new G,v=new G;function x(_,w,L){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,L),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(E.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(E),o[w].add(E),o[L].add(E),f[_].add(v),f[w].add(v),f[L].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let q=U,z=U+V;q<z;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new G,y=new G,S=new G,T=new G;function I(_){S.fromBufferAttribute(a,_),T.copy(S);const w=o[_];P.copy(w),P.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);const U=y.dot(f[_])<0?-1:1;s.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let q=U,z=U+V;q<z;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new G,r=new G,s=new G,o=new G,f=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,v),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),f.fromBufferAttribute(i,E),c.fromBufferAttribute(i,v),o.add(u),f.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,f){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(f.length*u);let p=0,m=0;for(let E=0,v=f.length;E<v;E++){o.isInterleavedBufferAttribute?p=f[E]*o.data.stride+o.offset:p=f[E]*u;for(let x=0;x<u;x++)d[m++]=c[p++]}return new xi(d,u,h)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,a=this.attributes;for(const o in a){const f=a[o],c=e(f,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const f=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);f.push(p)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,f=s.length;o<f;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const c in f)f[c]!==void 0&&(e[c]=f[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const c=i[f];e.data.attributes[f]=c.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const c=this.morphAttributes[f],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Y0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Cn=new G;class Ys{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),a=Wt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),a=Wt(a,this.array),r=Wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new xi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vl=new G,$0=new G,J0=new St;class xa{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Vl.subVectors(i,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Vl),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J0.getNormalMatrix(e),a=this.coplanarPoint(Vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Z0=0;class Qa extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Mo,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bl,this.stencilZFail=bl,this.stencilZPass=bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const f=r[o];delete f.metadata,s.push(f)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bf extends Qa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mr;const ao=new G,gr=new G,xr=new G,vr=new Ne,ro=new Ne,dh=new Jt,ss=new G,oo=new G,ls=new G,Au=new Ne,kl=new Ne,Tu=new Ne;class hh extends Yt{constructor(e=new bf){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new vn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Y0(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Ys(i,3,0,!1)),mr.setAttribute("uv",new Ys(i,2,3,!1))}this.geometry=mr,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),dh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;cs(ss.set(-.5,-.5,0),xr,s,gr,a,r),cs(oo.set(.5,-.5,0),xr,s,gr,a,r),cs(ls.set(.5,.5,0),xr,s,gr,a,r),Au.set(0,0),kl.set(1,0),Tu.set(1,1);let o=e.ray.intersectTriangle(ss,oo,ls,!1,ao);if(o===null&&(cs(oo.set(-.5,.5,0),xr,s,gr,a,r),kl.set(0,1),o=e.ray.intersectTriangle(ss,ls,oo,!1,ao),o===null))return;const f=e.ray.origin.distanceTo(ao);f<e.near||f>e.far||t.push({distance:f,point:ao.clone(),uv:ii.getInterpolation(ao,ss,oo,ls,Au,kl,Tu,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cs(n,e,t,i,a,r){vr.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(ro.x=r*vr.x-a*vr.y,ro.y=a*vr.x+r*vr.y):ro.copy(vr),n.copy(e),n.x+=ro.x,n.y+=ro.y,n.applyMatrix4(dh)}const Gi=new G,Hl=new G,fs=new G,us=new G;class ph{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Hl.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Hl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(fs),o=us.dot(this.direction),f=-us.dot(fs),c=us.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*f-o,d=s*o-f,m=r*u,h>=0)if(d>=-m)if(d<=m){const E=1/u;h*=E,d*=E,p=h*(h+s*d+2*o)+d*(s*h+d+2*f)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-f),r),p=d*(d+2*f)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Hl).addScaledVector(fs,d),p}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),a=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,f=i+s;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,f;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,f=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,f=(e.min.z-d.z)*h),i>f||o>a)||((o>i||i!==i)&&(i=o),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,f=o.x,c=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,E=t.y-s.y,v=t.z-s.z,x=i.x-s.x,A=i.y-s.y,P=i.z-s.z,y=Math.abs(f),S=Math.abs(c),T=Math.abs(u);let I,_,w,L,U,V,q,z,J,re,W,ve;if(y>=S&&y>=T?(w=f,V=h,J=m,ve=x,f>=0?(I=c,_=u,L=d,U=p,q=E,z=v,re=A,W=P):(I=u,_=c,L=p,U=d,q=v,z=E,re=P,W=A)):S>=T?(w=c,V=d,J=E,ve=A,c>=0?(I=u,_=f,L=p,U=h,q=v,z=m,re=P,W=x):(I=f,_=u,L=h,U=p,q=m,z=v,re=x,W=P)):(w=u,V=p,J=v,ve=P,u>=0?(I=f,_=c,L=h,U=d,q=m,z=E,re=x,W=A):(I=c,_=f,L=d,U=h,q=E,z=m,re=A,W=x)),w===0)return null;const se=I/w,ie=_/w,de=1/w,je=L-se*V,Ve=U-ie*V,_t=q-se*J,ht=z-ie*J,gt=re-se*ve,ce=W-ie*ve,he=gt*ht-ce*_t,Ce=je*ce-Ve*gt,st=_t*Ve-ht*je;if(a){if(he<0||Ce<0||st<0)return null}else if((he<0||Ce<0||st<0)&&(he>0||Ce>0||st>0))return null;const Xe=he+Ce+st;if(Xe===0)return null;const Pe=de*(he*V+Ce*J+st*ve);return(Xe>0?Pe<0:Pe>0)?null:this.at(Pe/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ji extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wu=new Jt,Ua=new ph,ds=new rl,Ru=new G,hs=new G,ps=new G,ms=new G,Wl=new G,gs=new G,Cu=new G,xs=new G;class At extends Yt{constructor(e=new vn,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let f=0,c=r.length;f<c;f++){const u=o[f],h=r[f];u!==0&&(Wl.fromBufferAttribute(h,e),s?gs.addScaledVector(Wl,u):gs.addScaledVector(Wl.sub(t),u))}t.add(gs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere),ds.applyMatrix4(r),Ua.copy(e.ray).recast(e.near),!(ds.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(ds,Ru)===null||Ua.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(wu.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(wu),!(i.boundingBox!==null&&Ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ua)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,f=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],x=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);a=vs(this,x,e,i,c,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let v=m,x=E;v<x;v+=3){const A=o.getX(v),P=o.getX(v+1),y=o.getX(v+2);a=vs(this,s,e,i,c,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],x=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(f.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=y,I=y+1,_=y+2;a=vs(this,x,e,i,c,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(f.count,p.start+p.count);for(let v=m,x=E;v<x;v+=3){const A=v,P=v+1,y=v+2;a=vs(this,s,e,i,c,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function K0(n,e,t,i,a,r,s,o){let f;if(e.side===Un?f=i.intersectTriangle(s,r,a,!0,o):f=i.intersectTriangle(a,r,s,e.side===qa,o),f===null)return null;xs.copy(o),xs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:n}}function vs(n,e,t,i,a,r,s,o,f,c){n.getVertexPosition(o,hs),n.getVertexPosition(f,ps),n.getVertexPosition(c,ms);const u=K0(n,e,t,i,hs,ps,ms,Cu);if(u){const h=new G;ii.getBarycoord(Cu,hs,ps,ms,h),a&&(u.uv=ii.getInterpolatedAttribute(a,o,f,c,h,new Ne)),r&&(u.uv1=ii.getInterpolatedAttribute(r,o,f,c,h,new Ne)),s&&(u.normal=ii.getInterpolatedAttribute(s,o,f,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:f,c,normal:new G,materialIndex:0};ii.getNormal(hs,ps,ms,d.normal),u.face=d,u.barycoord=h}return u}class mh extends gn{constructor(e=null,t=1,i=1,a,r,s,o,f,c=on,u=on,h,d){super(null,s,o,f,c,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oa=new rl,Q0=new Ne(.5,.5),Ms=new G;class Ef{constructor(e=new xa,t=new xa,i=new xa,a=new xa,r=new xa,s=new xa){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],f=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],E=r[9],v=r[10],x=r[11],A=r[12],P=r[13],y=r[14],S=r[15];if(a[0].setComponents(c-s,p-u,x-m,S-A).normalize(),a[1].setComponents(c+s,p+u,x+m,S+A).normalize(),a[2].setComponents(c+o,p+h,x+E,S+P).normalize(),a[3].setComponents(c-o,p-h,x-E,S-P).normalize(),i)a[4].setComponents(f,d,v,y).normalize(),a[5].setComponents(c-f,p-d,x-v,S-y).normalize();else if(a[4].setComponents(c-f,p-d,x-v,S-y).normalize(),t===Pi)a[5].setComponents(c+f,p+d,x+v,S+y).normalize();else if(t===Ro)a[5].setComponents(f,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oa)}intersectsSprite(e){Oa.center.set(0,0,0);const t=Q0.distanceTo(e.center);return Oa.radius=.7071067811865476+t,Oa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oa)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ms.x=a.normal.x>0?e.max.x:e.min.x,Ms.y=a.normal.y>0?e.max.y:e.min.y,Ms.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gh extends Qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new Jt,Kc=new ph,_s=new rl,Ss=new G;class j0 extends Yt{constructor(e=new vn,t=new gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(a),_s.radius+=r,e.ray.intersectsSphere(_s)===!1)return;Pu.copy(a).invert(),Kc.copy(e.ray).applyMatrix4(Pu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,E=p;m<E;m++){const v=c.getX(m);Ss.fromBufferAttribute(h,v),Iu(Ss,v,f,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,E=p;m<E;m++)Ss.fromBufferAttribute(h,m),Iu(Ss,m,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Iu(n,e,t,i,a,r,s){const o=Kc.distanceSqToPoint(n);if(o<t){const f=new G;Kc.closestPointToPoint(n,f),f.applyMatrix4(i);const c=a.ray.origin.distanceTo(f);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class xh extends gn{constructor(e=[],t=Ya,i,a,r,s,o,f,c,u){super(e,t,i,a,r,s,o,f,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Io extends gn{constructor(e,t,i,a,r,s,o,f,c){super(e,t,i,a,r,s,o,f,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zr extends gn{constructor(e,t,i=Di,a,r,s,o=on,f=on,c,u=Ki,h=1){if(u!==Ki&&u!==Ha)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,f,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class em extends zr{constructor(e,t=Di,i=Ya,a,r,s=on,o=on,f,c=Ki){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,f,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vh extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends vn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const f=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function m(E,v,x,A,P,y,S,T,I,_,w){const L=y/I,U=S/_,V=y/2,q=S/2,z=T/2,J=I+1,re=_+1;let W=0,ve=0;const se=new G;for(let ie=0;ie<re;ie++){const de=ie*U-q;for(let je=0;je<J;je++){const Ve=je*L-V;se[E]=Ve*A,se[v]=de*P,se[x]=z,c.push(se.x,se.y,se.z),se[E]=0,se[v]=0,se[x]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(je/I),h.push(1-ie/_),W+=1}}for(let ie=0;ie<_;ie++)for(let de=0;de<I;de++){const je=d+de+J*ie,Ve=d+de+J*(ie+1),_t=d+(de+1)+J*(ie+1),ht=d+(de+1)+J*ie;f.push(je,Ve,ht),f.push(Ve,_t,ht),ve+=6}o.addGroup(p,ve,w),p+=ve,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class En extends vn{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:f};const c=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const E=[],v=i/2;let x=0;A(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function A(){const y=new G,S=new G;let T=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const w=[],L=_/r,U=L*(t-e)+e;for(let V=0;V<=a;V++){const q=V/a,z=q*f+o,J=Math.sin(z),re=Math.cos(z);S.x=U*J,S.y=-L*i+v,S.z=U*re,h.push(S.x,S.y,S.z),y.set(J,I,re).normalize(),d.push(y.x,y.y,y.z),p.push(q,1-L),w.push(m++)}E.push(w)}for(let _=0;_<a;_++)for(let w=0;w<r;w++){const L=E[w][_],U=E[w+1][_],V=E[w+1][_+1],q=E[w][_+1];(e>0||w!==0)&&(u.push(L,U,q),T+=3),(t>0||w!==r-1)&&(u.push(U,V,q),T+=3)}c.addGroup(x,T,0),x+=T}function P(y){const S=m,T=new Ne,I=new G;let _=0;const w=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let V=0;V<=a;V++){const z=V/a*f+o,J=Math.cos(z),re=Math.sin(z);I.x=w*re,I.y=v*L,I.z=w*J,h.push(I.x,I.y,I.z),d.push(0,L,0),T.x=J*.5+.5,T.y=re*.5*L+.5,p.push(T.x,T.y),m++}for(let V=0;V<a;V++){const q=S+V,z=U+V;y===!0?u.push(z,z+1,q):u.push(z+1,z,q),_+=3}c.addGroup(x,_,y===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ya extends En{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new ya(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends vn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),c(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const P=new G,y=new G,S=new G;for(let T=0;T<t.length;T+=3)p(t[T+0],P),p(t[T+1],y),p(t[T+2],S),f(P,y,S,A)}function f(A,P,y,S){const T=S+1,I=[];for(let _=0;_<=T;_++){I[_]=[];const w=A.clone().lerp(y,_/T),L=P.clone().lerp(y,_/T),U=T-_;for(let V=0;V<=U;V++)V===0&&_===T?I[_][V]=w:I[_][V]=w.clone().lerp(L,V/U)}for(let _=0;_<T;_++)for(let w=0;w<2*(T-_)-1;w++){const L=Math.floor(w/2);w%2===0?(d(I[_][L+1]),d(I[_+1][L]),d(I[_][L])):(d(I[_][L+1]),d(I[_+1][L+1]),d(I[_+1][L]))}}function c(A){const P=new G;for(let y=0;y<r.length;y+=3)P.x=r[y+0],P.y=r[y+1],P.z=r[y+2],P.normalize().multiplyScalar(A),r[y+0]=P.x,r[y+1]=P.y,r[y+2]=P.z}function u(){const A=new G;for(let P=0;P<r.length;P+=3){A.x=r[P+0],A.y=r[P+1],A.z=r[P+2];const y=v(A)/2/Math.PI+.5,S=x(A)/Math.PI+.5;s.push(y,1-S)}m(),h()}function h(){for(let A=0;A<s.length;A+=6){const P=s[A+0],y=s[A+2],S=s[A+4],T=Math.max(P,y,S),I=Math.min(P,y,S);T>.9&&I<.1&&(P<.2&&(s[A+0]+=1),y<.2&&(s[A+2]+=1),S<.2&&(s[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,P){const y=A*3;P.x=e[y+0],P.y=e[y+1],P.z=e[y+2]}function m(){const A=new G,P=new G,y=new G,S=new G,T=new Ne,I=new Ne,_=new Ne;for(let w=0,L=0;w<r.length;w+=9,L+=6){A.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(A).add(P).add(y).divideScalar(3);const U=v(S);E(T,L+0,A,U),E(I,L+2,P,U),E(_,L+4,y,U)}}function E(A,P,y,S){S<0&&A.x===1&&(s[P]=A.x-1),y.x===0&&y.z===0&&(s[P]=S/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.vertices,e.indices,e.radius,e.detail)}}class Af extends ol{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Af(e.radius,e.detail)}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,f=r-1,c;for(;o<=f;)if(a=Math.floor(o+(f-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)f=a-1;else{f=a;break}if(a=f,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),f=t||(s.isVector2?new Ne:new G);return f.copy(o).sub(s).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new G,a=[],r=[],s=[],o=new G,f=new Jt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new G)}r[0]=new G,s[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ct(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(f.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Ct(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(f.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tf extends Ui{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=f}getPoint(e,t=new Ne){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=f-this.aX,p=c-this.aY;f=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(f,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tm extends Tf{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let n=0,e=0,t=0,i=0;function a(r,s,o,f){n=r,e=o,t=-3*r+3*s-2*o-f,i=2*r-2*s+o+f}return{initCatmullRom:function(r,s,o,f,c){a(s,o,c*(o-r),c*(f-s))},initNonuniformCatmullRom:function(r,s,o,f,c,u,h){let d=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(f-s)/(u+h)+(f-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const Lu=new G,Du=new G,Xl=new wf,ql=new wf,Yl=new wf;class nm extends Ui{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new G){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),f=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:f===0&&o===r-1&&(o=r-2,f=1);let c,u;this.closed||o>0?c=a[(o-1)%r]:(Du.subVectors(a[0],a[1]).add(a[0]),c=Du);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(Lu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=Lu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),m<1e-4&&(m=E),v<1e-4&&(v=E),Xl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,E,v),ql.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,E,v),Yl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,E,v)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ql.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Yl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Xl.calc(f),ql.calc(f),Yl.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new G().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nu(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,f=n*o;return(2*t-2*i+r+s)*f+(-3*t+3*i-2*r-s)*o+r*n+t}function im(n,e){const t=1-n;return t*t*e}function am(n,e){return 2*(1-n)*n*e}function rm(n,e){return n*n*e}function yo(n,e,t,i){return im(n,e)+am(n,t)+rm(n,i)}function om(n,e){const t=1-n;return t*t*t*e}function sm(n,e){const t=1-n;return 3*t*t*n*e}function lm(n,e){return 3*(1-n)*n*n*e}function cm(n,e){return n*n*n*e}function bo(n,e,t,i,a){return om(n,e)+sm(n,t)+lm(n,i)+cm(n,a)}class Mh extends Ui{constructor(e=new Ne,t=new Ne,i=new Ne,a=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(bo(e,a.x,r.x,s.x,o.x),bo(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fm extends Ui{constructor(e=new G,t=new G,i=new G,a=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(bo(e,a.x,r.x,s.x,o.x),bo(e,a.y,r.y,s.y,o.y),bo(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _h extends Ui{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends Ui{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends Ui{constructor(e=new Ne,t=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(yo(e,a.x,r.x,s.x),yo(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends Ui{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(yo(e,a.x,r.x,s.x),yo(e,a.y,r.y,s.y),yo(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,f=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(Nu(o,f.x,c.x,u.x,h.x),Nu(o,f.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ne().fromArray(a))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:tm,CatmullRomCurve3:nm,CubicBezierCurve:Mh,CubicBezierCurve3:fm,EllipseCurve:Tf,LineCurve:_h,LineCurve3:um,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:dm,SplineCurve:yh});class hm extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],f=o.getLength(),c=f===0?0:1-s/f;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,f=s.getPoints(o);for(let c=0;c<f.length;c++){const u=f[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new Qc[a.type]().fromJSON(a))}return this}}class Uu extends hm{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new _h(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new Sh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new Mh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a),new Ne(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new yh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+o,t+f,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,f){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,r,s,o,f),this}absellipse(e,t,i,a,r,s,o,f){const c=new Tf(e,t,i,a,r,s,o,f);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Rf extends Uu{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Uu().fromJSON(a))}return this}}function pm(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=bh(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,f,c;if(i&&(r=Mm(n,e,r,t)),n.length>80*t){o=n[0],f=n[1];let u=o,h=f;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<f&&(f=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-o,h-f),c=c!==0?32767/c:0}return Lo(r,s,t,o,f,c,0),s}function bh(n,e,t,i,a){let r;if(a===Pm(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=Ou(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=Ou(s/i|0,n[s],n[s+1],r);return r&&Gr(r,r.next)&&(No(r),r=r.next),r}function Ja(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gr(t,t.next)||an(t.prev,t,t.next)===0)){if(No(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Lo(n,e,t,i,a,r,s){if(!n)return;!s&&r&&Em(n,i,a,r);let o=n;for(;n.prev!==n.next;){const f=n.prev,c=n.next;if(r?gm(n,i,a,r):mm(n)){e.push(f.i,n.i,c.i),No(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=xm(Ja(n),e),Lo(n,e,t,i,a,r,2)):s===2&&vm(n,e,t,i,a,r):Lo(Ja(n),e,t,i,a,r,1);break}}}function mm(n){const e=n.prev,t=n,i=n.next;if(an(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,f=t.y,c=i.y,u=Math.min(a,r,s),h=Math.min(o,f,c),d=Math.max(a,r,s),p=Math.max(o,f,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&go(a,o,r,f,s,c,m.x,m.y)&&an(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gm(n,e,t,i){const a=n.prev,r=n,s=n.next;if(an(a,r,s)>=0)return!1;const o=a.x,f=r.x,c=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,f,c),m=Math.min(u,h,d),E=Math.max(o,f,c),v=Math.max(u,h,d),x=jc(p,m,e,t,i),A=jc(E,v,e,t,i);let P=n.prevZ,y=n.nextZ;for(;P&&P.z>=x&&y&&y.z<=A;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&go(o,u,f,h,c,d,P.x,P.y)&&an(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&go(o,u,f,h,c,d,y.x,y.y)&&an(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=x;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&go(o,u,f,h,c,d,P.x,P.y)&&an(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&go(o,u,f,h,c,d,y.x,y.y)&&an(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xm(n,e){let t=n;do{const i=t.prev,a=t.next.next;!Gr(i,a)&&Ah(i,t,t.next,a)&&Do(i,a)&&Do(a,i)&&(e.push(i.i,t.i,a.i),No(t),No(t.next),t=n=a),t=t.next}while(t!==n);return Ja(t)}function vm(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&wm(s,o)){let f=Th(s,o);s=Ja(s,s.next),f=Ja(f,f.next),Lo(s,e,t,i,a,r,0),Lo(f,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function Mm(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,f=r<s-1?e[r+1]*i:n.length,c=bh(n,o,f,i,!1);c===c.next&&(c.steiner=!0),a.push(Tm(c))}a.sort(_m);for(let r=0;r<a.length;r++)t=Sm(a[r],t);return t}function _m(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function Sm(n,e){const t=ym(n,e);if(!t)return e;const i=Th(t,n);return Ja(i,i.next),Ja(t,t.next)}function ym(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(Gr(n,t))return t;do{if(Gr(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,f=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=f&&i!==t.x&&Eh(a<c?i:r,a,f,c,a<c?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);Do(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&bm(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function bm(n,e){return an(n.prev,n,e.prev)<0&&an(e.next,n,n.next)<0}function Em(n,e,t,i){let a=n;do a.z===0&&(a.z=jc(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,Am(a)}function Am(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let f=t;for(;o>0||f>0&&s;)o!==0&&(f===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,f--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function jc(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Tm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Eh(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function go(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&Eh(n,e,t,i,a,r,s,o)}function wm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rm(n,e)&&(Do(n,e)&&Do(e,n)&&Cm(n,e)&&(an(n.prev,n,e.prev)||an(n,e.prev,e))||Gr(n,e)&&an(n.prev,n,n.next)>0&&an(e.prev,e,e.next)>0)}function an(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gr(n,e){return n.x===e.x&&n.y===e.y}function Ah(n,e,t,i){const a=bs(an(n,e,t)),r=bs(an(n,e,i)),s=bs(an(t,i,n)),o=bs(an(t,i,e));return!!(a!==r&&s!==o||a===0&&ys(n,t,e)||r===0&&ys(n,i,e)||s===0&&ys(t,n,i)||o===0&&ys(t,e,i))}function ys(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bs(n){return n>0?1:n<0?-1:0}function Rm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ah(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Do(n,e){return an(n.prev,n,n.next)<0?an(n,e,n.next)>=0&&an(n,n.prev,e)>=0:an(n,e,n.prev)<0||an(n,n.next,e)<0}function Cm(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Th(n,e){const t=ef(n.i,n.x,n.y),i=ef(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ou(n,e,t,i){const a=ef(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function No(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ef(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class Im{static triangulate(e,t,i=2){return pm(e,t,i)}}class Ir{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return Ir.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];Fu(e),Bu(i,e);let s=e.length;t.forEach(Fu);for(let f=0;f<t.length;f++)a.push(s),s+=t[f].length,Bu(i,t[f]);const o=Im.triangulate(i,a);for(let f=0;f<o.length;f+=3)r.push(o.slice(f,f+3));return r}}function Fu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class $s extends vn{constructor(e=new Rf([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,f=e.length;o<f;o++){const c=e[o];s(c)}this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function s(o){const f=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Lm;let P,y=!1,S,T,I,_;if(x){P=x.getSpacedPoints(u),y=!0,d=!1;const fe=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(u,fe),T=new G,I=new G,_=new G}d||(v=0,p=0,m=0,E=0);const w=o.extractPoints(c);let L=w.shape;const U=w.holes;if(!Ir.isClockWise(L)){L=L.reverse();for(let fe=0,Me=U.length;fe<Me;fe++){const Ae=U[fe];Ir.isClockWise(Ae)&&(U[fe]=Ae.reverse())}}function q(fe){const Ae=10000000000000001e-36;let we=fe[0];for(let Se=1;Se<=fe.length;Se++){const R=Se%fe.length,K=fe[R],Re=K.x-we.x,Ie=K.y-we.y,F=Re*Re+Ie*Ie,rt=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(we.x),Math.abs(we.y)),He=Ae*rt*rt;if(F<=He){fe.splice(R,1),Se--;continue}we=K}}q(L),U.forEach(q);const z=U.length,J=L;for(let fe=0;fe<z;fe++){const Me=U[fe];L=L.concat(Me)}function re(fe,Me,Ae){return Me||Dt("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(Me,Ae)}const W=L.length;function ve(fe,Me,Ae){let we,Se,R;const K=fe.x-Me.x,Re=fe.y-Me.y,Ie=Ae.x-fe.x,F=Ae.y-fe.y,rt=K*K+Re*Re,He=K*F-Re*Ie;if(Math.abs(He)>Number.EPSILON){const D=Math.sqrt(rt),b=Math.sqrt(Ie*Ie+F*F),Y=Me.x-Re/D,Z=Me.y+K/D,le=Ae.x-F/b,_e=Ae.y+Ie/b,be=((le-Y)*F-(_e-Z)*Ie)/(K*F-Re*Ie);we=Y+K*be-fe.x,Se=Z+Re*be-fe.y;const ne=we*we+Se*Se;if(ne<=2)return new Ne(we,Se);R=Math.sqrt(ne/2)}else{let D=!1;K>Number.EPSILON?Ie>Number.EPSILON&&(D=!0):K<-Number.EPSILON?Ie<-Number.EPSILON&&(D=!0):Math.sign(Re)===Math.sign(F)&&(D=!0),D?(we=-Re,Se=K,R=Math.sqrt(rt)):(we=K,Se=Re,R=Math.sqrt(rt/2))}return new Ne(we/R,Se/R)}const se=[];for(let fe=0,Me=J.length,Ae=Me-1,we=fe+1;fe<Me;fe++,Ae++,we++)Ae===Me&&(Ae=0),we===Me&&(we=0),se[fe]=ve(J[fe],J[Ae],J[we]);const ie=[];let de,je=se.concat();for(let fe=0,Me=z;fe<Me;fe++){const Ae=U[fe];de=[];for(let we=0,Se=Ae.length,R=Se-1,K=we+1;we<Se;we++,R++,K++)R===Se&&(R=0),K===Se&&(K=0),de[we]=ve(Ae[we],Ae[R],Ae[K]);ie.push(de),je=je.concat(de)}let Ve;if(v===0)Ve=Ir.triangulateShape(J,U);else{const fe=[],Me=[];for(let Ae=0;Ae<v;Ae++){const we=Ae/v,Se=p*Math.cos(we*Math.PI/2),R=m*Math.sin(we*Math.PI/2)+E;for(let K=0,Re=J.length;K<Re;K++){const Ie=re(J[K],se[K],R);Ce(Ie.x,Ie.y,-Se),we===0&&fe.push(Ie)}for(let K=0,Re=z;K<Re;K++){const Ie=U[K];de=ie[K];const F=[];for(let rt=0,He=Ie.length;rt<He;rt++){const D=re(Ie[rt],de[rt],R);Ce(D.x,D.y,-Se),we===0&&F.push(D)}we===0&&Me.push(F)}}Ve=Ir.triangulateShape(fe,Me)}const _t=Ve.length,ht=m+E;for(let fe=0;fe<W;fe++){const Me=d?re(L[fe],je[fe],ht):L[fe];y?(I.copy(S.normals[0]).multiplyScalar(Me.x),T.copy(S.binormals[0]).multiplyScalar(Me.y),_.copy(P[0]).add(I).add(T),Ce(_.x,_.y,_.z)):Ce(Me.x,Me.y,0)}for(let fe=1;fe<=u;fe++)for(let Me=0;Me<W;Me++){const Ae=d?re(L[Me],je[Me],ht):L[Me];y?(I.copy(S.normals[fe]).multiplyScalar(Ae.x),T.copy(S.binormals[fe]).multiplyScalar(Ae.y),_.copy(P[fe]).add(I).add(T),Ce(_.x,_.y,_.z)):Ce(Ae.x,Ae.y,h/u*fe)}for(let fe=v-1;fe>=0;fe--){const Me=fe/v,Ae=p*Math.cos(Me*Math.PI/2),we=m*Math.sin(Me*Math.PI/2)+E;for(let Se=0,R=J.length;Se<R;Se++){const K=re(J[Se],se[Se],we);Ce(K.x,K.y,h+Ae)}for(let Se=0,R=U.length;Se<R;Se++){const K=U[Se];de=ie[Se];for(let Re=0,Ie=K.length;Re<Ie;Re++){const F=re(K[Re],de[Re],we);y?Ce(F.x,F.y+P[u-1].y,P[u-1].x+Ae):Ce(F.x,F.y,h+Ae)}}}gt(),ce();function gt(){const fe=a.length/3;if(d){let Me=0,Ae=W*Me;for(let we=0;we<_t;we++){const Se=Ve[we];st(Se[2]+Ae,Se[1]+Ae,Se[0]+Ae)}Me=u+v*2,Ae=W*Me;for(let we=0;we<_t;we++){const Se=Ve[we];st(Se[0]+Ae,Se[1]+Ae,Se[2]+Ae)}}else{for(let Me=0;Me<_t;Me++){const Ae=Ve[Me];st(Ae[2],Ae[1],Ae[0])}for(let Me=0;Me<_t;Me++){const Ae=Ve[Me];st(Ae[0]+W*u,Ae[1]+W*u,Ae[2]+W*u)}}i.addGroup(fe,a.length/3-fe,0)}function ce(){const fe=a.length/3;let Me=0;he(J,Me),Me+=J.length;for(let Ae=0,we=U.length;Ae<we;Ae++){const Se=U[Ae];he(Se,Me),Me+=Se.length}i.addGroup(fe,a.length/3-fe,1)}function he(fe,Me){let Ae=fe.length;for(;--Ae>=0;){const we=Ae;let Se=Ae-1;Se<0&&(Se=fe.length-1);for(let R=0,K=u+v*2;R<K;R++){const Re=W*R,Ie=W*(R+1),F=Me+we+Re,rt=Me+Se+Re,He=Me+Se+Ie,D=Me+we+Ie;Xe(F,rt,He,D)}}}function Ce(fe,Me,Ae){f.push(fe),f.push(Me),f.push(Ae)}function st(fe,Me,Ae){Pe(fe),Pe(Me),Pe(Ae);const we=a.length/3,Se=A.generateTopUV(i,a,we-3,we-2,we-1);ft(Se[0]),ft(Se[1]),ft(Se[2])}function Xe(fe,Me,Ae,we){Pe(fe),Pe(Me),Pe(we),Pe(Me),Pe(Ae),Pe(we);const Se=a.length/3,R=A.generateSideWallUV(i,a,Se-6,Se-3,Se-2,Se-1);ft(R[0]),ft(R[1]),ft(R[3]),ft(R[1]),ft(R[2]),ft(R[3])}function Pe(fe){a.push(f[fe*3+0]),a.push(f[fe*3+1]),a.push(f[fe*3+2])}function ft(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Dm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Qc[a.type]().fromJSON(a)),new $s(i,e.options)}}const Lm={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],f=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new Ne(r,s),new Ne(o,f),new Ne(c,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],f=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],E=e[r*3],v=e[r*3+1],x=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new Ne(s,1-f),new Ne(c,1-h),new Ne(d,1-m),new Ne(E,1-x)]:[new Ne(o,1-f),new Ne(u,1-h),new Ne(p,1-m),new Ne(v,1-x)]}};function Dm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sl extends ol{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sl(e.radius,e.detail)}}class ea extends vn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),f=Math.floor(a),c=o+1,u=f+1,h=e/o,d=t/f,p=[],m=[],E=[],v=[];for(let x=0;x<u;x++){const A=x*d-s;for(let P=0;P<c;P++){const y=P*h-r;m.push(y,-A,0),E.push(0,0,1),v.push(P/o),v.push(1-x/f)}}for(let x=0;x<f;x++)for(let A=0;A<o;A++){const P=A+c*x,y=A+c*(x+1),S=A+1+c*(x+1),T=A+1+c*x;p.push(P,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jn extends vn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(s+o,Math.PI);let c=0;const u=[],h=new G,d=new G,p=[],m=[],E=[],v=[];for(let x=0;x<=i;x++){const A=[],P=x/i,y=s+P*o,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S);let I=0;x===0&&s===0?I=.5/t:x===i&&f===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){const w=_/t,L=a+w*r;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),v.push(w+I,1-P),A.push(c++)}u.push(A)}for(let x=0;x<i;x++)for(let A=0;A<t;A++){const P=u[x][A+1],y=u[x][A],S=u[x+1][A],T=u[x+1][A+1];(x!==0||s>0)&&p.push(P,y,T),(x!==i-1||f<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(E,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Or extends vn{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const f=[],c=[],u=[],h=[],d=new G,p=new G,m=new G;for(let E=0;E<=i;E++){const v=s+E/i*o;for(let x=0;x<=a;x++){const A=x/a*r;p.x=(e+t*Math.cos(v))*Math.cos(A),p.y=(e+t*Math.cos(v))*Math.sin(A),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/a),h.push(E/i)}}for(let E=1;E<=i;E++)for(let v=1;v<=a;v++){const x=(a+1)*E+v-1,A=(a+1)*(E-1)+v-1,P=(a+1)*(E-1)+v,y=(a+1)*E+v;f.push(x,A,y),f.push(A,P,y)}this.setIndex(f),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Vr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(zu(a))a.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(zu(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Ln(n){const e={};for(let t=0;t<n.length;t++){const i=Vr(n[t]);for(const a in i)e[a]=i[a]}return e}function zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const Um={clone:Vr,merge:Ln};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(a.value);break;case"v3":this.uniforms[i].value=new G().fromArray(a.value);break;case"v4":this.uniforms[i].value=new nn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new St().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Jt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bm extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mi extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zm extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gm extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $l={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Gu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Gu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Gu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vm{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,f;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const km=new Vm;class Cf{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Cf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mr=new WeakMap;class Hm extends Cf{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=$l.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Mr.get(s);h===void 0&&(h=[],Mr.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=Co("img");function f(){u(),t&&t(this);const h=Mr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Mr.delete(this),r.manager.itemEnd(e)}function c(h){u(),a&&a(h),$l.remove(`image:${e}`);const d=Mr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}Mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",f,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$l.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Wm extends Cf{constructor(e){super(e)}load(e,t,i,a){const r=new gn,s=new Hm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class Rh extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Xm extends Rh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Jl=new Jt,Vu=new G,ku=new G;class qm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Jl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,f=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Ro||e.reversedDepth?t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Es=new G,As=new gi,bi=new G;class Ch extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Es,As,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,As,bi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Es,As,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,As,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ca=new G,Hu=new Ne,Wu=new Ne;class ti extends Ch{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ca.x,ca.y).multiplyScalar(-e/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ca.x,ca.y).multiplyScalar(-e/ca.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Wu),t.subVectors(Wu,Hu)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/f,t-=s.offsetY*i/c,a*=s.width/f,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ll extends Ch{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,f=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ym extends qm{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $m extends Rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Ym}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const _r=-90,Sr=1;class Jm extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(_r,Sr,e,t);a.layers=this.layers,this.add(a);const r=new ti(_r,Sr,e,t);r.layers=this.layers,this.add(r);const s=new ti(_r,Sr,e,t);s.layers=this.layers,this.add(s);const o=new ti(_r,Sr,e,t);o.layers=this.layers,this.add(o);const f=new ti(_r,Sr,e,t);f.layers=this.layers,this.add(f);const c=new ti(_r,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,f]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,f,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Zm extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $f=class $f{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};$f.prototype.isMatrix2=!0;let Xu=$f;function qu(n,e,t,i){const a=Km(i);switch(t){case th:return n*e;case ih:return n*e/a.components*a.byteLength;case gf:return n*e/a.components*a.byteLength;case $a:return n*e*2/a.components*a.byteLength;case xf:return n*e*2/a.components*a.byteLength;case nh:return n*e*3/a.components*a.byteLength;case ai:return n*e*4/a.components*a.byteLength;case vf:return n*e*4/a.components*a.byteLength;case Ns:case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Os:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:case bc:return Math.max(n,16)*Math.max(e,8)/4;case _c:case yc:return Math.max(n,8)*Math.max(e,8)/2;case Ec:case Ac:case wc:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tc:case ks:case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yc:case $c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hs:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(n){switch(n){case Dn:case Kd:return{byteLength:1,components:1};case To:case Qd:case Ni:return{byteLength:2,components:1};case pf:case mf:return{byteLength:2,components:4};case Di:case hf:case Ci:return{byteLength:4,components:1};case jd:case eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);function Ph(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qm(n){const e=new WeakMap;function t(o,f){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,f,c){const u=f.array,h=f.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],E=h[p];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const E=h[p];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(n.deleteBuffer(f.buffer),e.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,f));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,f),c.version=o.version}}return{get:a,remove:r,update:s}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:jm,alphahash_pars_fragment:eg,alphamap_fragment:tg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:ag,aomap_fragment:rg,aomap_pars_fragment:og,batching_pars_vertex:sg,batching_vertex:lg,begin_vertex:cg,beginnormal_vertex:fg,bsdfs:ug,iridescence_fragment:dg,bumpmap_pars_fragment:hg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:xg,color_fragment:vg,color_pars_fragment:Mg,color_pars_vertex:_g,color_vertex:Sg,common:yg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Tg,emissivemap_fragment:wg,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Pg,envmap_fragment:Ig,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:Xg,envmap_vertex:Ug,fog_vertex:Og,fog_pars_vertex:Fg,fog_fragment:Bg,fog_pars_fragment:zg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Vg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Wg,lights_toon_fragment:qg,lights_toon_pars_fragment:Yg,lights_phong_fragment:$g,lights_phong_pars_fragment:Jg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Kg,lights_fragment_begin:Qg,lights_fragment_maps:jg,lights_fragment_end:ex,lightprobes_pars_fragment:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:sx,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:hx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:xx,normal_fragment_maps:vx,normal_pars_fragment:Mx,normal_pars_vertex:_x,normal_vertex:Sx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Tx,opaque_fragment:wx,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Px,dithering_fragment:Ix,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Ox,shadowmap_vertex:Fx,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:Gx,skinning_vertex:Vx,skinnormal_vertex:kx,specularmap_fragment:Hx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:$x,uv_pars_fragment:Jx,uv_pars_vertex:Zx,uv_vertex:Kx,worldpos_vertex:Qx,background_vert:jx,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:a1,depth_vert:r1,depth_frag:o1,distance_vert:s1,distance_frag:l1,equirect_vert:c1,equirect_frag:f1,linedashed_vert:u1,linedashed_frag:d1,meshbasic_vert:h1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:x1,meshmatcap_frag:v1,meshnormal_vert:M1,meshnormal_frag:_1,meshphong_vert:S1,meshphong_frag:y1,meshphysical_vert:b1,meshphysical_frag:E1,meshtoon_vert:A1,meshtoon_frag:T1,points_vert:w1,points_frag:R1,shadow_vert:C1,shadow_frag:P1,sprite_vert:I1,sprite_frag:L1},Je={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Ti={basic:{uniforms:Ln([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Ln([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Ln([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Ln([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Ln([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new vt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Ln([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Ln([Je.points,Je.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Ln([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Ln([Je.common,Je.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Ln([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Ln([Je.sprite,Je.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Ln([Je.common,Je.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Ln([Je.lights,Je.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ti.physical={uniforms:Ln([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Ts={r:0,b:0,g:0},D1=new Jt,Ih=new St;Ih.set(-1,0,0,0,1,0,0,0,1);function N1(n,e,t,i,a,r){const s=new vt(0);let o=a===!0?0:1,f,c,u=null,h=0,d=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function m(A){let P=!1;const y=p(A);y===null?v(s,o):y&&y.isColor&&(v(y,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(A,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===al)?(c===void 0&&(c=new At(new wa(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Vr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ih),c.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Ht,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new At(new ea(2,2),new vi({name:"BackgroundMaterial",uniforms:Vr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function v(A,P){A.getRGB(Ts,wh(n)),t.buffers.color.setClear(Ts.r,Ts.g,Ts.b,P,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,P=1){s.set(A),o=P,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,v(s,o)},render:m,addToRenderList:E,dispose:x}}function U1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(U,V,q,z,J){let re=!1;const W=h(U,z,q,V);r!==W&&(r=W,c(r.object)),re=p(U,z,q,J),re&&m(U,z,q,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,y(U,V,q,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,V,q,z){const J=z.wireframe===!0;let re=i[V.id];re===void 0&&(re={},i[V.id]=re);const W=U.isInstancedMesh===!0?U.id:0;let ve=re[W];ve===void 0&&(ve={},re[W]=ve);let se=ve[q.id];se===void 0&&(se={},ve[q.id]=se);let ie=se[J];return ie===void 0&&(ie=d(f()),se[J]=ie),ie}function d(U){const V=[],q=[],z=[];for(let J=0;J<t;J++)V[J]=0,q[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:z,object:U,attributes:{},index:null}}function p(U,V,q,z){const J=r.attributes,re=V.attributes;let W=0;const ve=q.getAttributes();for(const se in ve)if(ve[se].location>=0){const de=J[se];let je=re[se];if(je===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(je=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(je=U.instanceColor)),de===void 0||de.attribute!==je||je&&de.data!==je.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(U,V,q,z){const J={},re=V.attributes;let W=0;const ve=q.getAttributes();for(const se in ve)if(ve[se].location>=0){let de=re[se];de===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(de=U.instanceColor));const je={};je.attribute=de,de&&de.data&&(je.data=de.data),J[se]=je,W++}r.attributes=J,r.attributesNum=W,r.index=z}function E(){const U=r.newAttributes;for(let V=0,q=U.length;V<q;V++)U[V]=0}function v(U){x(U,0)}function x(U,V){const q=r.newAttributes,z=r.enabledAttributes,J=r.attributeDivisors;q[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),J[U]!==V&&(n.vertexAttribDivisor(U,V),J[U]=V)}function A(){const U=r.newAttributes,V=r.enabledAttributes;for(let q=0,z=V.length;q<z;q++)V[q]!==U[q]&&(n.disableVertexAttribArray(q),V[q]=0)}function P(U,V,q,z,J,re,W){W===!0?n.vertexAttribIPointer(U,V,q,J,re):n.vertexAttribPointer(U,V,q,z,J,re)}function y(U,V,q,z){E();const J=z.attributes,re=q.getAttributes(),W=V.defaultAttributeValues;for(const ve in re){const se=re[ve];if(se.location>=0){let ie=J[ve];if(ie===void 0&&(ve==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ve==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){const de=ie.normalized,je=ie.itemSize,Ve=e.get(ie);if(Ve===void 0)continue;const _t=Ve.buffer,ht=Ve.type,gt=Ve.bytesPerElement,ce=ht===n.INT||ht===n.UNSIGNED_INT||ie.gpuType===hf;if(ie.isInterleavedBufferAttribute){const he=ie.data,Ce=he.stride,st=ie.offset;if(he.isInstancedInterleavedBuffer){for(let Xe=0;Xe<se.locationSize;Xe++)x(se.location+Xe,he.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Xe=0;Xe<se.locationSize;Xe++)v(se.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Xe=0;Xe<se.locationSize;Xe++)P(se.location+Xe,je/se.locationSize,ht,de,Ce*gt,(st+je/se.locationSize*Xe)*gt,ce)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)x(se.location+he,ie.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<se.locationSize;he++)v(se.location+he);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let he=0;he<se.locationSize;he++)P(se.location+he,je/se.locationSize,ht,de,je*gt,je/se.locationSize*he*gt,ce)}}else if(W!==void 0){const de=W[ve];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(se.location,de);break;case 3:n.vertexAttrib3fv(se.location,de);break;case 4:n.vertexAttrib4fv(se.location,de);break;default:n.vertexAttrib1fv(se.location,de)}}}}A()}function S(){w();for(const U in i){const V=i[U];for(const q in V){const z=V[q];for(const J in z){const re=z[J];for(const W in re)u(re[W].object),delete re[W];delete z[J]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const q in V){const z=V[q];for(const J in z){const re=z[J];for(const W in re)u(re[W].object),delete re[W];delete z[J]}}delete i[U.id]}function I(U){for(const V in i){const q=i[V];for(const z in q){const J=q[z];if(J[U.id]===void 0)continue;const re=J[U.id];for(const W in re)u(re[W].object),delete re[W];delete J[U.id]}}}function _(U){for(const V in i){const q=i[V],z=U.isInstancedMesh===!0?U.id:0,J=q[z];if(J!==void 0){for(const re in J){const W=J[re];for(const ve in W)u(W[ve].object),delete W[ve];delete J[re]}delete q[z],Object.keys(q).length===0&&delete i[V]}}}function w(){L(),s=!0,r!==a&&(r=a,c(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:A}}function O1(n,e,t){let i;function a(f){i=f}function r(f,c){n.drawArrays(i,f,c),t.update(c,i,1)}function s(f,c,u){u!==0&&(n.drawArraysInstanced(i,f,c,u),t.update(c,i,u))}function o(f,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function F1(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==ai&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const _=I===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Dn&&I!==Ci&&!_&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=f(c);u!==c&&(mt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:T}}function B1(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new xa,o=new St,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,x=n.get(h);if(!a||m===null||m.length===0||r&&!v)r?u(null):c();else{const A=r?0:i,P=A*4;let y=x.clippingState||null;f.value=y,y=u(m,d,P,p);for(let S=0;S!==P;++S)y[S]=t[S];x.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=f.value,m!==!0||v===null){const x=p+E*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(v===null||v.length<x)&&(v=new Float32Array(x));for(let P=0,y=p;P!==E;++P,y+=4)s.copy(h[P]).applyMatrix4(A,o),s.normal.toArray(v,y),v[y+3]=s.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const Lr=4,z1=6,G1=20,V1=256,so=new ll,Yu=new vt;let Zl=null,Kl=0,Ql=0,jl=!1;const k1=new G,Fa=new G;class $u{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=k1}=r;Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,Kl,Ql),this._renderer.xr.enabled=jl,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ya||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ni,format:ai,colorSpace:Ws,depthBuffer:!1},a=Ju(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=H1(r)),this._blurMaterial=X1(r,e,t),this._ggxMaterial=W1(r,e,t)}return a}_compileMaterial(e){const t=new At(new vn,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,a,r){const f=new ti(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new wa,new ji({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let x=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,x=!0):(v.color.copy(Yu),x=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[P],r.y,r.z)):y===1?(f.up.set(0,0,c[P]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[P],r.z)):(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[P]));const S=this._cubeSize;yr(a,y*S,P>2?S:0,S,S),h.setRenderTarget(a),x&&h.render(E,f),h.render(e,f)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ya||e.mapping===Br;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const f=this._cubeSize;yr(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,so)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const f=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,E=this._sizeLods[i],v=3*E*(i>m-Lr?i-m+Lr:0),x=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=p,f.mipInt.value=m-t,yr(r,v,x,3*E,2*E),a.setRenderTarget(r),a.render(o,so),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-i,yr(e,v,x,3*E,2*E),a.setRenderTarget(e),a.render(o,so)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,f=this._lodMeshes[a];f.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-Lr?a-this._lodMax+Lr:0),d=4*(this._cubeSize-u);yr(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(f,so)}}function H1(n){const e=[],t=[];let i=n;const a=n-Lr+1+z1;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),f=-o,c=1+o,u=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),E=new Float32Array(p*d*h);for(let x=0;x<h;x++){const A=x%3*2/3-1,P=x>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(y,p*d*x);for(let S=0;S<d;S++){const T=u[S*2]*2-1,I=u[S*2+1]*2-1;x===0?Fa.set(1,I,T):x===1?Fa.set(-T,1,-I):x===2?Fa.set(-T,I,1):x===3?Fa.set(-1,I,-T):x===4?Fa.set(-T,-1,I):Fa.set(T,I,-1),Fa.toArray(E,(x*d+S)*p)}}const v=new vn;v.setAttribute("position",new xi(m,p)),v.setAttribute("outputDirection",new xi(E,p)),t.push(new At(v,null)),i>Lr&&i--}return{lodMeshes:t,sizeLods:e}}function Ju(n,e,t){const i=new ri(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function W1(n,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function X1(n,e,t){return new vi({name:"SphericalGaussianBlur",defines:{SAMPLES:G1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Zu(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Ku(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lh extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new xh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new wa(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:Ji});r.uniforms.tEquirect.value=t;const s=new At(a,r),o=t.minFilter;return t.minFilter===ka&&(t.minFilter=mn),new Jm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function q1(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===_l||p===Sl)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const E=new Lh(m.height);return E.fromEquirectangularTexture(n,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===_l||p===Sl,E=p===Ya||p===Br;if(m||E){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new $u(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const A=d.image;return m&&A&&A.height>0||E&&A&&f(A)?(i===null&&(i=new $u(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,p){return p===_l?d.mapping=Ya:p===Sl&&(d.mapping=Br),d}function f(d){let p=0;const m=6;for(let E=0;E<m;E++)d[E]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function Y1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Nr("WebGLRenderer: "+i+" extension not supported."),a}}}function $1(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function f(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let E=0;if(m===void 0)return;if(p!==null){const A=p.array;E=p.version;for(let P=0,y=A.length;P<y;P+=3){const S=A[P+0],T=A[P+1],I=A[P+2];d.push(S,T,T,I,I,S)}}else{const A=m.array;E=m.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const S=P+0,T=P+1,I=P+2;d.push(S,T,T,I,I,S)}}const v=new(m.count>=65535?uh:fh)(d,1);v.version=E;const x=r.get(h);x&&e.remove(x),r.set(h,v)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:f,getWireframeAttribute:u}}function J1(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function f(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let E=0;for(let v=0;v<p;v++)E+=d[v];t.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=f,this.renderInstances=c,this.renderMultiDraw=u}function Z1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function K1(n,e,t){const i=new WeakMap,a=new nn;function r(s,o,f){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),E===!0&&(y=2),v===!0&&(y=3);let S=o.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*T*4*h),_=new oh(I,S,T,h);_.type=Ci,_.needsUpdate=!0;const w=y*4;for(let U=0;U<h;U++){const V=x[U],q=A[U],z=P[U],J=S*T*4*U;for(let re=0;re<V.count;re++){const W=re*w;m===!0&&(a.fromBufferAttribute(V,re),I[J+W+0]=a.x,I[J+W+1]=a.y,I[J+W+2]=a.z,I[J+W+3]=0),E===!0&&(a.fromBufferAttribute(q,re),I[J+W+4]=a.x,I[J+W+5]=a.y,I[J+W+6]=a.z,I[J+W+7]=0),v===!0&&(a.fromBufferAttribute(z,re),I[J+W+8]=a.x,I[J+W+9]=a.y,I[J+W+10]=a.z,I[J+W+11]=z.itemSize===4?a.w:1)}}d={count:h,texture:_,size:new Ne(S,T)},i.set(o,d),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const E=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",c)}f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Q1(n,e,t,i,a){let r=new WeakMap;function s(c){const u=a.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",f)===!1&&c.addEventListener("dispose",f),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function f(c){const u=c.target;u.removeEventListener("dispose",f),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const j1={[Hd]:"LINEAR_TONE_MAPPING",[Wd]:"REINHARD_TONE_MAPPING",[Xd]:"CINEON_TONE_MAPPING",[qd]:"ACES_FILMIC_TONE_MAPPING",[$d]:"AGX_TONE_MAPPING",[Jd]:"NEUTRAL_TONE_MAPPING",[Yd]:"CUSTOM_TONE_MAPPING"};function ev(n,e,t,i,a,r){const s=new ri(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,f=null;const c=new vn;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));const u=new Bm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new At(c,u),d=new ll(-1,1,1,-1,0,1);let p=null,m=null,E=!1,v,x=null,A=[],P=!1;this.setSize=function(y,S){s.setSize(y,S),o!==null&&o.setSize(y,S),f!==null&&f.setSize(y,S);for(let T=0;T<A.length;T++){const I=A[T];I.setSize&&I.setSize(y,S)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const S=s.width,T=s.height;A.length>0&&o===null&&(o=new ri(S,T,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),f=new ri(S,T,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<A.length;I++){const _=A[I];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(E||y.toneMapping===Ii&&A.length===0)return!1;if(x=S,S!==null){const T=S.width,I=S.height;(s.width!==T||s.height!==I)&&this.setSize(T,I)}return P===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=Ii,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=v,E=!0;let T=s,I=o;for(let _=0;_<A.length;_++){const w=A[_];w.enabled!==!1&&(w.render(y,I,T,S),w.needsSwap!==!1&&(T=I,I=I===o?f:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,u.defines={},Lt.getTransfer(p)===Ht&&(u.defines.SRGB_TRANSFER="");const _=j1[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(x),y.render(h,d),x=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),f!==null&&f.dispose(),c.dispose(),u.dispose()}}const Dh=new gn,tf=new zr(1,1),Nh=new oh,Uh=new O0,Oh=new xh,Qu=[],ju=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=Qu[a];if(r===void 0&&(r=new Float32Array(a),Qu[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),un(t,i)}}function ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;td.set(i),n.uniformMatrix3fv(this.addr,!1,td),un(t,i)}}function sv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),un(t,i)}}function lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function gv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(tf.compareFunction=t.isReversedDepthBuffer()?_f:Mf,r=tf):r=Dh,t.setTexture2D(e||r,a)}function xv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Uh,a)}function vv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Oh,a)}function Mv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Nh,a)}function _v(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return av;case 35674:return rv;case 35675:return ov;case 35676:return sv;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return fv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return hv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Sv(n,e){n.uniform1fv(this.addr,e)}function yv(n,e){const t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function bv(n,e){const t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ev(n,e){const t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Av(n,e){const t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tv(n,e){const t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wv(n,e){const t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rv(n,e){n.uniform1iv(this.addr,e)}function Cv(n,e){n.uniform2iv(this.addr,e)}function Pv(n,e){n.uniform3iv(this.addr,e)}function Iv(n,e){n.uniform4iv(this.addr,e)}function Lv(n,e){n.uniform1uiv(this.addr,e)}function Dv(n,e){n.uniform2uiv(this.addr,e)}function Nv(n,e){n.uniform3uiv(this.addr,e)}function Uv(n,e){n.uniform4uiv(this.addr,e)}function Ov(n,e,t){const i=this.cache,a=e.length,r=fl(t,a);fn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=tf:s=Dh;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function Fv(n,e,t){const i=this.cache,a=e.length,r=fl(t,a);fn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Uh,r[s])}function Bv(n,e,t){const i=this.cache,a=e.length,r=fl(t,a);fn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Oh,r[s])}function zv(n,e,t){const i=this.cache,a=e.length,r=fl(t,a);fn(i,r)||(n.uniform1iv(this.addr,r),un(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Nh,r[s])}function Gv(n){switch(n){case 5126:return Sv;case 35664:return yv;case 35665:return bv;case 35666:return Ev;case 35674:return Av;case 35675:return Tv;case 35676:return wv;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}class Vv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}}class Hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const ec=/(\w+)(\])?(\[|\.)?/g;function id(n,e){n.seq.push(e),n.map[e.id]=e}function Wv(n,e,t){const i=n.name,a=i.length;for(ec.lastIndex=0;;){const r=ec.exec(i),s=ec.lastIndex;let o=r[1];const f=r[2]==="]",c=r[3];if(f&&(o=o|0),c===void 0||c==="["&&s+2===a){id(t,c===void 0?new Vv(o,n,e):new kv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Hv(o),id(t,h)),t=h}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);Wv(o,f,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Xv=37297;let qv=0;function Yv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const rd=new St;function $v(n){Lt._getMatrix(rd,Lt.workingColorSpace,n);const e=`mat3( ${rd.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(n)){case Xs:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Yv(n.getShaderSource(e),o)}else return r}function Jv(n,e){const t=$v(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zv={[Hd]:"Linear",[Wd]:"Reinhard",[Xd]:"Cineon",[qd]:"ACESFilmic",[$d]:"AgX",[Jd]:"Neutral",[Yd]:"Custom"};function Kv(n,e){const t=Zv[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ws=new G;function Qv(){Lt.getLuminanceCoefficients(ws);const n=ws.x.toFixed(4),e=ws.y.toFixed(4),t=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function eM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function xo(n){return n!==""}function sd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(n){return n.replace(nM,aM)}const iM=new Map;function aM(n,e){let t=Tt[e];if(t===void 0){const i=iM.get(e);if(i!==void 0)t=Tt[i],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(t)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(rM,oM)}function oM(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function fd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sM={[vo]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function lM(n){return sM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cM={[Ya]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE_UV"};function fM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const uM={[Br]:"ENVMAP_MODE_REFRACTION"};function dM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hM={[kd]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[jp]:"ENVMAP_BLENDING_ADD"};function pM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hM[n.combine]||"ENVMAP_BLENDING_NONE"}function mM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gM(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=lM(t),c=fM(t),u=dM(t),h=pM(t),d=mM(t),p=jv(t),m=eM(r),E=a.createProgram();let v,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),x.length>0&&(x+=`
`)):(v=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),x=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Jv("linearToOutputTexel",t.outputColorSpace),Qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),s=nf(s),s=sd(s,t),s=ld(s,t),o=nf(o),o=sd(o,t),o=ld(o,t),s=cd(s),o=cd(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=A+v+s,y=A+x+o,S=ad(a,a.VERTEX_SHADER,P),T=ad(a,a.FRAGMENT_SHADER,y);a.attachShader(E,S),a.attachShader(E,T),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(U){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(E)||"",q=a.getShaderInfoLog(S)||"",z=a.getShaderInfoLog(T)||"",J=V.trim(),re=q.trim(),W=z.trim();let ve=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ve=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,S,T);else{const ie=od(a,S,"vertex"),de=od(a,T,"fragment");Dt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+ie+`
`+de)}else J!==""?mt("WebGLProgram: Program Info Log:",J):(re===""||W==="")&&(se=!1);se&&(U.diagnostics={runnable:ve,programLog:J,vertexShader:{log:re,prefix:v},fragmentShader:{log:W,prefix:x}})}a.deleteShader(S),a.deleteShader(T),_=new Bs(a,E),w=tM(a,E)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(E,Xv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=T,this}let xM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MM(e),t.set(e,i)),i}}class MM{constructor(e){this.id=xM++,this.code=e,this.usedTimes=0}}function _M(n){return n===$a||n===ks||n===Hs}function SM(n,e,t,i,a,r){const s=new sh,o=new vM,f=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return f.add(_),_===0?"uv":`uv${_}`}function E(_,w,L,U,V,q){const z=U.fog,J=V.geometry,re=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ve=e.get(_.envMap||re,W),se=ve&&ve.mapping===al?ve.image.height:null,ie=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&mt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,je=de!==void 0?de.length:0;let Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let _t,ht,gt,ce;if(ie){const Ft=Ti[ie];_t=Ft.vertexShader,ht=Ft.fragmentShader}else{_t=_.vertexShader,ht=_.fragmentShader;const Ft=o.getVertexShaderStage(_),Et=o.getFragmentShaderStage(_);o.update(_,Ft,Et),gt=Ft.id,ce=Et.id}const he=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),st=V.isInstancedMesh===!0,Xe=V.isBatchedMesh===!0,Pe=!!_.map,ft=!!_.matcap,fe=!!ve,Me=!!_.aoMap,Ae=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,R=!!_.displacementMap,K=!!_.emissiveMap,Re=!!_.metalnessMap,Ie=!!_.roughnessMap,F=_.anisotropy>0,rt=_.clearcoat>0,He=_.dispersion>0,D=_.retroreflectivity>0,b=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,le=F&&!!_.anisotropyMap,_e=rt&&!!_.clearcoatMap,be=rt&&!!_.clearcoatNormalMap,ne=rt&&!!_.clearcoatRoughnessMap,me=b&&!!_.iridescenceMap,Ge=b&&!!_.iridescenceThicknessMap,Ke=Y&&!!_.sheenColorMap,Le=Y&&!!_.sheenRoughnessMap,Fe=!!_.specularMap,We=!!_.specularColorMap,tt=!!_.specularIntensityMap,ze=Z&&!!_.transmissionMap,X=Z&&!!_.thicknessMap,Be=!!_.gradientMap,ge=!!_.alphaMap,l=_.alphaTest>0,Ue=!!_.alphaHash,ue=!!_.extensions;let ut=Ii;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Ze={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:ht,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Xe,batchingColor:Xe&&V._colorsTexture!==null,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:ft,envMap:fe,envMapMode:fe&&ve.mapping,envMapCubeUVHeight:se,aoMap:Me,lightMap:Ae,bumpMap:we,normalMap:Se,displacementMap:R,emissiveMap:K,normalMapObjectSpace:Se&&_.normalMapType===n0,normalMapTangentSpace:Se&&_.normalMapType===Zc,packedNormalMap:Se&&_.normalMapType===Zc&&_M(_.normalMap.format),metalnessMap:Re,roughnessMap:Ie,anisotropy:F,anisotropyMap:le,clearcoat:rt,clearcoatMap:_e,clearcoatNormalMap:be,clearcoatRoughnessMap:ne,dispersion:He,retroreflection:D,iridescence:b,iridescenceMap:me,iridescenceThicknessMap:Ge,sheen:Y,sheenColorMap:Ke,sheenRoughnessMap:Le,specularMap:Fe,specularColorMap:We,specularIntensityMap:tt,transmission:Z,transmissionMap:ze,thicknessMap:X,gradientMap:Be,opaque:_.transparent===!1&&_.blending===Mo&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:l,alphaHash:Ue,combine:_.combine,mapUv:Pe&&m(_.map.channel),aoMapUv:Me&&m(_.aoMap.channel),lightMapUv:Ae&&m(_.lightMap.channel),bumpMapUv:we&&m(_.bumpMap.channel),normalMapUv:Se&&m(_.normalMap.channel),displacementMapUv:R&&m(_.displacementMap.channel),emissiveMapUv:K&&m(_.emissiveMap.channel),metalnessMapUv:Re&&m(_.metalnessMap.channel),roughnessMapUv:Ie&&m(_.roughnessMap.channel),anisotropyMapUv:le&&m(_.anisotropyMap.channel),clearcoatMapUv:_e&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&m(_.sheenRoughnessMap.channel),specularMapUv:Fe&&m(_.specularMap.channel),specularColorMapUv:We&&m(_.specularColorMap.channel),specularIntensityMapUv:tt&&m(_.specularIntensityMap.channel),transmissionMapUv:ze&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:ge&&m(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Se||F),vertexNormals:!!J.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(Pe||ge),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||J.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:Ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Ht,decodeVideoTextureEmissive:K&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ni,flipSided:_.side===Un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=f.has(1),Ze.vertexUv2s=f.has(2),Ze.vertexUv3s=f.has(3),f.clear(),Ze}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(w,_),A(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function A(_,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function P(_){const w=p[_.type];let L;if(w){const U=Ti[w];L=Um.clone(U.uniforms)}else L=_.uniforms;return L}function y(_,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new gM(n,w,_,a),c.push(L),u.set(w,L)),L}function S(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:I}}function yM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,f){n.get(s)[o]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dd(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,E,v,x){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:E,renderOrder:d.renderOrder,z:v,group:x},n[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=m,A.materialVariant=s(d),A.groupOrder=E,A.renderOrder=d.renderOrder,A.z=v,A.group=x),e++,A}function f(d,p,m,E,v,x,A){A.reversedDepth===!0&&(v=-v);const P=o(d,p,m,E,v,x);m.transmission>0?i.push(P):m.transparent===!0?a.push(P):t.push(P)}function c(d,p,m,E,v,x){const A=o(d,p,m,E,v,x);m.transmission>0?i.unshift(A):m.transparent===!0?a.unshift(A):t.unshift(A)}function u(d,p){t.length>1&&t.sort(d||bM),i.length>1&&i.sort(p||ud),a.length>1&&a.sort(p||ud)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:c,finish:h,sort:u}}function EM(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new dd,n.set(i,[s])):a>=r.length?(s=new dd,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function AM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new vt};break;case"SpotLight":t={position:new G,direction:new G,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function TM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wM=0;function RM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CM(n){const e=new AM,t=TM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const a=new G,r=new Jt,s=new Jt;function o(c){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,E=0,v=0,x=0,A=0,P=0,y=0,S=0,T=0,I=0,_=0,w=0,L=0;c.sort(RM);for(let V=0,q=c.length;V<q;V++){const z=c[V],J=z.color,re=z.intensity,W=z.distance;let ve=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===$a?ve=z.shadow.map.texture:ve=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=J.r*re,h+=J.g*re,d+=J.b*re;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],re);L++}else if(z.isSunLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ie=z.shadow,de=t.get(z);de.shadowIntensity=ie.intensity,de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[m]=de,i.sunShadowMap[m]=ve;const je=ie.getViewportCount();for(let Ve=0;Ve<je;Ve++)i.sunShadowMatrix[E+Ve]=ie.getMatrix(Ve),i.sunShadowCascade[E+Ve]=ie._cascadeData[Ve];E+=je,m++}i.sun[p]=se,p++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ie=z.shadow,de=t.get(z);de.shadowIntensity=ie.intensity,de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,i.directionalShadow[v]=de,i.directionalShadowMap[v]=ve,i.directionalShadowMatrix[v]=z.shadow.matrix,S++}i.directional[v]=se,v++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(J).multiplyScalar(re),se.distance=W,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[A]=se;const ie=z.shadow;if(z.map&&(i.spotLightMap[_]=z.map,_++,ie.updateMatrices(z),z.castShadow&&w++),i.spotLightMatrix[A]=ie.matrix,z.castShadow){const de=t.get(z);de.shadowIntensity=ie.intensity,de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,i.spotShadow[A]=de,i.spotShadowMap[A]=ve,I++}A++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(J).multiplyScalar(re),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[P]=se,P++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const ie=z.shadow,de=t.get(z);de.shadowIntensity=ie.intensity,de.shadowBias=ie.bias,de.shadowNormalBias=ie.normalBias,de.shadowRadius=ie.radius,de.shadowMapSize=ie.mapSize,de.shadowCameraNear=ie.camera.near,de.shadowCameraFar=ie.camera.far,i.pointShadow[x]=de,i.pointShadowMap[x]=ve,i.pointShadowMatrix[x]=z.shadow.matrix,T++}i.point[x]=se,x++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(re),se.groundColor.copy(z.groundColor).multiplyScalar(re),i.hemi[y]=se,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==v||U.pointLength!==x||U.spotLength!==A||U.rectAreaLength!==P||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==I||U.numSpotMaps!==_||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=A,i.rectArea.length=P,i.point.length=x,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,U.sunLength=p,U.directionalLength=v,U.pointLength=x,U.spotLength=A,U.rectAreaLength=P,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=I,U.numSpotMaps=_,U.numLightProbes=L,i.version=wM++)}function f(c,u){let h=0,d=0,p=0,m=0,E=0,v=0;const x=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){const y=c[A];if(y.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),h++}else if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),d++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),m++}else if(y.isRectAreaLight){const S=i.rectArea[E];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),s.identity(),r.copy(y.matrixWorld),r.premultiply(x),s.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),E++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),v++}}}return{setup:o,setupView:f,state:i}}function hd(n){const e=new CM(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function f(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:f}}function PM(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new hd(n),e.set(a,[o])):r>=s.length?(o=new hd(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],NM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],pd=new Jt,lo=new G,tc=new G;function UM(n,e,t){let i=new Ef;const a=new Ne,r=new Ne,s=new nn,o=new zm,f=new Gm,c={},u=t.maxTextureSize,h={[qa]:Un,[Un]:qa,[ni]:ni},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:IM,fragmentShader:LM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new vn;m.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new At(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let x=this.type;this.render=function(T,I,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Dp&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vo);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ji),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=x!==this.type;q&&I.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(J=>J.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,J=T.length;z<J;z++){const re=T[z],W=re.shadow;if(W===void 0){mt("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ve=W.getFrameExtents();a.multiply(ve),r.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ve.x),a.x=r.x*ve.x,W.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ve.y),a.y=r.y*ve.y,W.mapSize.y=r.y));const se=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===mo){if(re.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ri(a.x,a.y,{format:$a,type:Ni,minFilter:mn,magFilter:mn,generateMipmaps:!1}),W.map.texture.name=re.name+".shadowMap",W.map.depthTexture=new zr(a.x,a.y,Ci),W.map.depthTexture.name=re.name+".shadowMapDepth",W.map.depthTexture.format=Ki,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on}else re.isPointLight?(W.map=new Lh(a.x),W.map.depthTexture=new em(a.x,Di)):(W.map=new ri(a.x,a.y),W.map.depthTexture=new zr(a.x,a.y,Di)),W.map.depthTexture.name=re.name+".shadowMap",W.map.depthTexture.format=Ki,this.type===vo?(W.map.depthTexture.compareFunction=se?_f:Mf,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=on,W.map.depthTexture.magFilter=on);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);const ie=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();re.isPointLight!==!0&&W.updateMatrices(re,_);for(let de=0;de<ie;de++){const je=W.getCamera(de);if(re.isPointLight){const Ve=W.camera,_t=W.matrix,ht=re.distance||Ve.far;ht!==Ve.far&&(Ve.far=ht,Ve.updateProjectionMatrix()),lo.setFromMatrixPosition(re.matrixWorld),Ve.position.copy(lo),tc.copy(Ve.position),tc.add(DM[de]),Ve.up.copy(NM[de]),Ve.lookAt(tc),Ve.updateMatrixWorld(),_t.makeTranslation(-lo.x,-lo.y,-lo.z),pd.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(pd,Ve.coordinateSystem,Ve.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,de),n.clear();else{de===0&&(n.setRenderTarget(W.map),n.clear());const Ve=W.getViewport(de);s.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),V.viewport(s)}i=W.getFrustum(de),y(I,_,je,re,this.type)}W.isPointLightShadow!==!0&&this.type===mo&&A(W,_),W.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(w,L,U)};function A(T,I){const _=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new ri(a.x,a.y,{format:$a,type:Ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,_,d,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,_,p,E,null)}function P(T,I,_,w){let L=null;const U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?f:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=L.uuid,q=I.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let J=z[q];J===void 0&&(J=L.clone(),z[q]=J,I.addEventListener("dispose",S)),L=J}if(L.visible=I.visible,L.wireframe=I.wireframe,w===mo?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=n.properties.get(L);V.light=_}return L}function y(T,I,_,w,L){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===mo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const q=e.update(T),z=T.material;if(Array.isArray(z)){const J=q.groups;for(let re=0,W=J.length;re<W;re++){const ve=J[re],se=z[ve.materialIndex];if(se&&se.visible){const ie=P(T,se,w,L);T.onBeforeShadow(n,T,I,_,q,ie,ve),n.renderBufferDirect(_,null,q,ie,T,ve),T.onAfterShadow(n,T,I,_,q,ie,ve)}}}else if(z.visible){const J=P(T,z,w,L);T.onBeforeShadow(n,T,I,_,q,J,null),n.renderBufferDirect(_,null,q,J,T,null),T.onAfterShadow(n,T,I,_,q,J,null)}}const V=T.children;for(let q=0,z=V.length;q<z;q++)y(V[q],I,_,w,L)}function S(T){T.target.removeEventListener("dispose",S);for(const _ in c){const w=c[_],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function OM(n,e){function t(){let X=!1;const Be=new nn;let ge=null;const l=new nn(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!X&&(n.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,ue,ut,Ze,Ft){Ft===!0&&(Ue*=Ze,ue*=Ze,ut*=Ze),Be.set(Ue,ue,ut,Ze),l.equals(Be)===!1&&(n.clearColor(Ue,ue,ut,Ze),l.copy(Be))},reset:function(){X=!1,ge=null,l.set(-1,0,0,0)}}}function i(){let X=!1,Be=!1,ge=null,l=null,Ue=null;return{setReversed:function(ue){if(Be!==ue){const ut=e.get("EXT_clip_control");ue?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Be=ue;const Ze=Ue;Ue=null,this.setClear(Ze)}},getReversed:function(){return Be},setTest:function(ue){ue?he(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ue){ge!==ue&&!X&&(n.depthMask(ue),ge=ue)},setFunc:function(ue){if(Be&&(ue=h0[ue]),l!==ue){switch(ue){case dc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case xc:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}l=ue}},setLocked:function(ue){X=ue},setClear:function(ue){Ue!==ue&&(Ue=ue,Be&&(ue=1-ue),n.clearDepth(ue))},reset:function(){X=!1,ge=null,l=null,Ue=null,Be=!1}}}function a(){let X=!1,Be=null,ge=null,l=null,Ue=null,ue=null,ut=null,Ze=null,Ft=null;return{setTest:function(Et){X||(Et?he(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Et){Be!==Et&&!X&&(n.stencilMask(Et),Be=Et)},setFunc:function(Et,kn,On){(ge!==Et||l!==kn||Ue!==On)&&(n.stencilFunc(Et,kn,On),ge=Et,l=kn,Ue=On)},setOp:function(Et,kn,On){(ue!==Et||ut!==kn||Ze!==On)&&(n.stencilOp(Et,kn,On),ue=Et,ut=kn,Ze=On)},setLocked:function(Et){X=Et},setClear:function(Et){Ft!==Et&&(n.clearStencil(Et),Ft=Et)},reset:function(){X=!1,Be=null,ge=null,l=null,Ue=null,ue=null,ut=null,Ze=null,Ft=null}}}const r=new t,s=new i,o=new a,f=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],E=null,v=!1,x=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new vt(0,0,0),w=0,L=!1,U=null,V=null,q=null,z=null,J=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ve=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(se)[1]),W=ve>=1):se.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),W=ve>=2);let ie=null,de={};const je=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),_t=new nn().fromArray(je),ht=new nn().fromArray(Ve);function gt(X,Be,ge,l){const Ue=new Uint8Array(4),ue=n.createTexture();n.bindTexture(X,ue),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<ge;ut++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,l,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Be+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ue}const ce={};ce[n.TEXTURE_2D]=gt(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(Ao),we(!1),Se(su),he(n.CULL_FACE),Me(Ji);function he(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Ce(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function st(X,Be){return d[X]!==Be?(n.bindFramebuffer(X,Be),d[X]=Be,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Be),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function Xe(X,Be){let ge=m,l=!1;if(X){ge=p.get(Be),ge===void 0&&(ge=[],p.set(Be,ge));const Ue=X.textures;if(ge.length!==Ue.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ut=Ue.length;ue<ut;ue++)ge[ue]=n.COLOR_ATTACHMENT0+ue;ge.length=Ue.length,l=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,l=!0);l&&n.drawBuffers(ge)}function Pe(X){return E!==X?(n.useProgram(X),E=X,!0):!1}const ft={[Cr]:n.FUNC_ADD,[Up]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};ft[Fp]=n.MIN,ft[Bp]=n.MAX;const fe={[zp]:n.ZERO,[Gp]:n.ONE,[Vp]:n.SRC_COLOR,[Gd]:n.SRC_ALPHA,[Yp]:n.SRC_ALPHA_SATURATE,[Xp]:n.DST_COLOR,[Hp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[qp]:n.ONE_MINUS_DST_COLOR,[Wp]:n.ONE_MINUS_DST_ALPHA,[$p]:n.CONSTANT_COLOR,[Jp]:n.ONE_MINUS_CONSTANT_COLOR,[Zp]:n.CONSTANT_ALPHA,[Kp]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(X,Be,ge,l,Ue,ue,ut,Ze,Ft,Et){if(X===Ji){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),X!==Np){if(X!==x||Et!==L){if((A!==Cr||S!==Cr)&&(n.blendEquation(n.FUNC_ADD),A=Cr,S=Cr),Et)switch(X){case Mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",X);break}else switch(X){case Mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cu:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fu:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",X);break}P=null,y=null,T=null,I=null,_.set(0,0,0),w=0,x=X,L=Et}return}Ue=Ue||Be,ue=ue||ge,ut=ut||l,(Be!==A||Ue!==S)&&(n.blendEquationSeparate(ft[Be],ft[Ue]),A=Be,S=Ue),(ge!==P||l!==y||ue!==T||ut!==I)&&(n.blendFuncSeparate(fe[ge],fe[l],fe[ue],fe[ut]),P=ge,y=l,T=ue,I=ut),(Ze.equals(_)===!1||Ft!==w)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Ft),_.copy(Ze),w=Ft),x=X,L=!1}function Ae(X,Be){X.side===ni?Ce(n.CULL_FACE):he(n.CULL_FACE);let ge=X.side===Un;Be&&(ge=!ge),we(ge),X.blending===Mo&&X.transparent===!1?Me(Ji):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const l=X.stencilWrite;o.setTest(l),l&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),K(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(X){U!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),U=X)}function Se(X){X!==Ip?(he(n.CULL_FACE),X!==V&&(X===su?n.cullFace(n.BACK):X===Lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),V=X}function R(X){X!==q&&(W&&n.lineWidth(X),q=X)}function K(X,Be,ge){X?(he(n.POLYGON_OFFSET_FILL),(z!==Be||J!==ge)&&(z=Be,J=ge,s.getReversed()&&(Be=-Be),n.polygonOffset(Be,ge))):Ce(n.POLYGON_OFFSET_FILL)}function Re(X){X?he(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ie(X){X===void 0&&(X=n.TEXTURE0+re-1),ie!==X&&(n.activeTexture(X),ie=X)}function F(X,Be,ge){ge===void 0&&(ie===null?ge=n.TEXTURE0+re-1:ge=ie);let l=de[ge];l===void 0&&(l={type:void 0,texture:void 0},de[ge]=l),(l.type!==X||l.texture!==Be)&&(ie!==ge&&(n.activeTexture(ge),ie=ge),n.bindTexture(X,Be||ce[X]),l.type=X,l.texture=Be)}function rt(){const X=de[ie];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function He(){try{n.compressedTexImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function b(){try{n.texSubImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function Y(){try{n.texSubImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function _e(){try{n.texStorage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function be(){try{n.texStorage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function ne(){try{n.texImage2D(...arguments)}catch(X){Dt("WebGLState:",X)}}function me(){try{n.texImage3D(...arguments)}catch(X){Dt("WebGLState:",X)}}function Ge(X){return h[X]!==void 0?h[X]:n.getParameter(X)}function Ke(X,Be){h[X]!==Be&&(n.pixelStorei(X,Be),h[X]=Be)}function Le(X){_t.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Fe(X){ht.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ht.copy(X))}function We(X,Be){let ge=c.get(Be);ge===void 0&&(ge=new WeakMap,c.set(Be,ge));let l=ge.get(X);l===void 0&&(l=n.getUniformBlockIndex(Be,X.name),ge.set(X,l))}function tt(X,Be){const l=c.get(Be).get(X);f.get(Be)!==l&&(n.uniformBlockBinding(Be,l,X.__bindingPointIndex),f.set(Be,l))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ie=null,de={},d={},p=new WeakMap,m=[],E=null,v=!1,x=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new vt(0,0,0),w=0,L=!1,U=null,V=null,q=null,z=null,J=null,_t.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:Ce,bindFramebuffer:st,drawBuffers:Xe,useProgram:Pe,setBlending:Me,setMaterial:Ae,setFlipSided:we,setCullFace:Se,setLineWidth:R,setPolygonOffset:K,setScissorTest:Re,activeTexture:Ie,bindTexture:F,unbindTexture:rt,compressedTexImage2D:He,compressedTexImage3D:D,texImage2D:ne,texImage3D:me,pixelStorei:Ke,getParameter:Ge,updateUBOMapping:We,uniformBlockBinding:tt,texStorage2D:_e,texStorage3D:be,texSubImage2D:b,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:le,scissor:Le,viewport:Fe,reset:ze}}function FM(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return m?new OffscreenCanvas(D,b):Co("canvas")}function v(D,b,Y){let Z=1;const le=He(D);if((le.width>Y||le.height>Y)&&(Z=Y/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const _e=Math.floor(Z*le.width),be=Math.floor(Z*le.height);d===void 0&&(d=E(_e,be));const ne=b?E(_e,be):d;return ne.width=_e,ne.height=be,ne.getContext("2d").drawImage(D,0,0,_e,be),mt("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+_e+"x"+be+")."),ne}else return"data"in D&&mt("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function x(D){return D.generateMipmaps}function A(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,b,Y,Z,le,_e=!1){if(D!==null){if(n[D]!==void 0)return n[D];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let be;Z&&(be=e.get("EXT_texture_norm16"),be||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===n.RED&&(Y===n.FLOAT&&(ne=n.R32F),Y===n.HALF_FLOAT&&(ne=n.R16F),Y===n.UNSIGNED_BYTE&&(ne=n.R8),Y===n.UNSIGNED_SHORT&&be&&(ne=be.R16_EXT),Y===n.SHORT&&be&&(ne=be.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.R8UI),Y===n.UNSIGNED_SHORT&&(ne=n.R16UI),Y===n.UNSIGNED_INT&&(ne=n.R32UI),Y===n.BYTE&&(ne=n.R8I),Y===n.SHORT&&(ne=n.R16I),Y===n.INT&&(ne=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(ne=n.RG32F),Y===n.HALF_FLOAT&&(ne=n.RG16F),Y===n.UNSIGNED_BYTE&&(ne=n.RG8),Y===n.UNSIGNED_SHORT&&be&&(ne=be.RG16_EXT),Y===n.SHORT&&be&&(ne=be.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Y===n.UNSIGNED_INT&&(ne=n.RG32UI),Y===n.BYTE&&(ne=n.RG8I),Y===n.SHORT&&(ne=n.RG16I),Y===n.INT&&(ne=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),Y===n.UNSIGNED_INT&&(ne=n.RGB32UI),Y===n.BYTE&&(ne=n.RGB8I),Y===n.SHORT&&(ne=n.RGB16I),Y===n.INT&&(ne=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ne=n.RGBA32UI),Y===n.BYTE&&(ne=n.RGBA8I),Y===n.SHORT&&(ne=n.RGBA16I),Y===n.INT&&(ne=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_SHORT&&be&&(ne=be.RGB16_EXT),Y===n.SHORT&&be&&(ne=be.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),b===n.RGBA){const me=_e?Xs:Lt.getTransfer(le);Y===n.FLOAT&&(ne=n.RGBA32F),Y===n.HALF_FLOAT&&(ne=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ne=me===Ht?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&be&&(ne=be.RGBA16_EXT),Y===n.SHORT&&be&&(ne=be.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(D,b){let Y;return D?b===null||b===Di||b===wo?Y=n.DEPTH24_STENCIL8:b===Ci?Y=n.DEPTH32F_STENCIL8:b===To&&(Y=n.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===wo?Y=n.DEPTH_COMPONENT24:b===Ci?Y=n.DEPTH_COMPONENT32F:b===To&&(Y=n.DEPTH_COMPONENT16),Y}function T(D,b){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==on&&D.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),w(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),U(b)}function w(D){const b=i.get(D);if(b.__webglInit===void 0)return;const Y=D.source,Z=p.get(Y);if(Z){const le=Z[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(D),Object.keys(Z).length===0&&p.delete(Y)}i.remove(D)}function L(D){const b=i.get(D);n.deleteTexture(b.__webglTexture);const Y=D.source,Z=p.get(Y);delete Z[b.__cacheKey],s.memory.textures--}function U(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let le=0;le<b.__webglFramebuffer[Z].length;le++)n.deleteFramebuffer(b.__webglFramebuffer[Z][le]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=D.textures;for(let Z=0,le=Y.length;Z<le;Z++){const _e=i.get(Y[Z]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(Y[Z])}i.remove(D)}let V=0;function q(){V=0}function z(){return V}function J(D){V=D}function re(){const D=V;return D>=a.maxTextures&&mt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function W(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ve(D,b){const Y=i.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const Z=D.image;if(Z===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Y,D,b);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function se(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ce(Y,D,b);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function ie(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ce(Y,D,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function de(D,b){const Y=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){st(Y,D,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const je={[Vs]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Mc]:n.MIRRORED_REPEAT},Ve={[on]:n.NEAREST,[e0]:n.NEAREST_MIPMAP_NEAREST,[jo]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[yl]:n.LINEAR_MIPMAP_NEAREST,[ka]:n.LINEAR_MIPMAP_LINEAR},_t={[a0]:n.NEVER,[c0]:n.ALWAYS,[r0]:n.LESS,[Mf]:n.LEQUAL,[o0]:n.EQUAL,[_f]:n.GEQUAL,[s0]:n.GREATER,[l0]:n.NOTEQUAL};function ht(D,b){if(b.type===Ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===yl||b.magFilter===jo||b.magFilter===ka||b.minFilter===mn||b.minFilter===yl||b.minFilter===jo||b.minFilter===ka)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,je[b.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,je[b.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,je[b.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Ve[b.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Ve[b.minFilter]),b.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==jo&&b.minFilter!==ka||b.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function gt(D,b){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let le=p.get(Z);le===void 0&&(le={},p.set(Z,le));const _e=W(b);if(_e!==D.__cacheKey){le[_e]===void 0&&(le[_e]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),le[_e].usedTimes++;const be=le[D.__cacheKey];be!==void 0&&(le[D.__cacheKey].usedTimes--,be.usedTimes===0&&L(b)),D.__cacheKey=_e,D.__webglTexture=le[_e].texture}return Y}function ce(D,b,Y){return Math.floor(Math.floor(D/Y)/b)}function he(D,b,Y,Z){const _e=D.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,Z,b.data);else{_e.sort((Ke,Le)=>Ke.start-Le.start);let be=0;for(let Ke=1;Ke<_e.length;Ke++){const Le=_e[be],Fe=_e[Ke],We=Le.start+Le.count,tt=ce(Fe.start,b.width,4),ze=ce(Le.start,b.width,4);Fe.start<=We+1&&tt===ze&&ce(Fe.start+Fe.count-1,b.width,4)===tt?Le.count=Math.max(Le.count,Fe.start+Fe.count-Le.start):(++be,_e[be]=Fe)}_e.length=be+1;const ne=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ke=0,Le=_e.length;Ke<Le;Ke++){const Fe=_e[Ke],We=Math.floor(Fe.start/4),tt=Math.ceil(Fe.count/4),ze=We%b.width,X=Math.floor(We/b.width),Be=tt,ge=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,ze,X,Be,ge,Y,Z,b.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge)}}function Ce(D,b,Y){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const le=gt(D,b),_e=b.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+Y);const be=i.get(_e);if(_e.version!==be.__version||le===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Lt.getPrimaries(Lt.workingColorSpace),l=b.colorSpace===_a?null:Lt.getPrimaries(b.colorSpace),Ue=b.colorSpace===_a||ge===l?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let me=v(b.image,!1,a.maxTextureSize);me=rt(b,me);const Ge=r.convert(b.format,b.colorSpace),Ke=r.convert(b.type);let Le=y(b.internalFormat,Ge,Ke,b.normalized,b.colorSpace,b.isVideoTexture);ht(Z,b);let Fe;const We=b.mipmaps,tt=b.isVideoTexture!==!0,ze=be.__version===void 0||le===!0,X=_e.dataReady,Be=T(b,me);if(b.isDepthTexture)Le=S(b.format===Ha,b.type),ze&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Ge,Ke,null));else if(b.isDataTexture)if(We.length>0){tt&&ze&&t.texStorage2D(n.TEXTURE_2D,Be,Le,We[0].width,We[0].height);for(let ge=0,l=We.length;ge<l;ge++)Fe=We[ge],tt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ge,Ke,Fe.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Fe.width,Fe.height,0,Ge,Ke,Fe.data);b.generateMipmaps=!1}else tt?(ze&&t.texStorage2D(n.TEXTURE_2D,Be,Le,me.width,me.height),X&&he(b,me,Ge,Ke)):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Ge,Ke,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Le,We[0].width,We[0].height,me.depth);for(let ge=0,l=We.length;ge<l;ge++)if(Fe=We[ge],b.format!==ai)if(Ge!==null)if(tt){if(X)if(b.layerUpdates.size>0){const Ue=qu(Fe.width,Fe.height,b.format,b.type);for(const ue of b.layerUpdates){const ut=Fe.data.subarray(ue*Ue/Fe.data.BYTES_PER_ELEMENT,(ue+1)*Ue/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ue,Fe.width,Fe.height,1,Ge,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,me.depth,Ge,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Fe.width,Fe.height,me.depth,0,Fe.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Fe.width,Fe.height,me.depth,Ge,Ke,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Le,Fe.width,Fe.height,me.depth,0,Ge,Ke,Fe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{tt&&ze&&t.texStorage2D(n.TEXTURE_2D,Be,Le,We[0].width,We[0].height);for(let ge=0,l=We.length;ge<l;ge++)Fe=We[ge],b.format!==ai?Ge!==null?tt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ge,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Le,Fe.width,Fe.height,0,Fe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Fe.width,Fe.height,Ge,Ke,Fe.data):t.texImage2D(n.TEXTURE_2D,ge,Le,Fe.width,Fe.height,0,Ge,Ke,Fe.data)}else if(b.isDataArrayTexture)if(tt){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,Le,me.width,me.height,me.depth),X)if(b.layerUpdates.size>0){const ge=qu(me.width,me.height,b.format,b.type);for(const l of b.layerUpdates){const Ue=me.data.subarray(l*ge/me.data.BYTES_PER_ELEMENT,(l+1)*ge/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,l,me.width,me.height,1,Ge,Ke,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ge,Ke,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Ge,Ke,me.data);else if(b.isData3DTexture)tt?(ze&&t.texStorage3D(n.TEXTURE_3D,Be,Le,me.width,me.height,me.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ge,Ke,me.data)):t.texImage3D(n.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Ge,Ke,me.data);else if(b.isFramebufferTexture){if(ze)if(tt)t.texStorage2D(n.TEXTURE_2D,Be,Le,me.width,me.height);else{let ge=me.width,l=me.height;for(let Ue=0;Ue<Be;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Le,ge,l,0,Ge,Ke,null),ge>>=1,l>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const ge=n.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),h.add(b),ge.onpaint=l=>{const Ue=l.changedElements;for(const ue of h)Ue.includes(ue.image)&&(ue.needsUpdate=!0)},ge.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Ue=n.RGBA,ue=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ue,ue,ut,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(tt&&ze){const ge=He(We[0]);t.texStorage2D(n.TEXTURE_2D,Be,Le,ge.width,ge.height)}for(let ge=0,l=We.length;ge<l;ge++)Fe=We[ge],tt?X&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ge,Ke,Fe):t.texImage2D(n.TEXTURE_2D,ge,Le,Ge,Ke,Fe);b.generateMipmaps=!1}else if(tt){if(ze){const ge=He(me);t.texStorage2D(n.TEXTURE_2D,Be,Le,ge.width,ge.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Ke,me)}else t.texImage2D(n.TEXTURE_2D,0,Le,Ge,Ke,me);x(b)&&A(Z),be.__version=_e.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function st(D,b,Y){if(b.image.length!==6)return;const Z=gt(D,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const _e=i.get(le);if(le.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const be=Lt.getPrimaries(Lt.workingColorSpace),ne=b.colorSpace===_a?null:Lt.getPrimaries(b.colorSpace),me=b.colorSpace===_a||be===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ge=b.isCompressedTexture||b.image[0].isCompressedTexture,Ke=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let ue=0;ue<6;ue++)!Ge&&!Ke?Le[ue]=v(b.image[ue],!0,a.maxCubemapSize):Le[ue]=Ke?b.image[ue].image:b.image[ue],Le[ue]=rt(b,Le[ue]);const Fe=Le[0],We=r.convert(b.format,b.colorSpace),tt=r.convert(b.type),ze=y(b.internalFormat,We,tt,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Be=_e.__version===void 0||Z===!0,ge=le.dataReady;let l=T(b,Fe);ht(n.TEXTURE_CUBE_MAP,b);let Ue;if(Ge){X&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,l,ze,Fe.width,Fe.height);for(let ue=0;ue<6;ue++){Ue=Le[ue].mipmaps;for(let ut=0;ut<Ue.length;ut++){const Ze=Ue[ut];b.format!==ai?We!==null?X?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut,0,0,Ze.width,Ze.height,We,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut,ze,Ze.width,Ze.height,0,Ze.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut,0,0,Ze.width,Ze.height,We,tt,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut,ze,Ze.width,Ze.height,0,We,tt,Ze.data)}}}else{if(Ue=b.mipmaps,X&&Be){Ue.length>0&&l++;const ue=He(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,l,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ke){X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le[ue].width,Le[ue].height,We,tt,Le[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Le[ue].width,Le[ue].height,0,We,tt,Le[ue].data);for(let ut=0;ut<Ue.length;ut++){const Ft=Ue[ut].image[ue].image;X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut+1,0,0,Ft.width,Ft.height,We,tt,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut+1,ze,Ft.width,Ft.height,0,We,tt,Ft.data)}}else{X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,We,tt,Le[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,We,tt,Le[ue]);for(let ut=0;ut<Ue.length;ut++){const Ze=Ue[ut];X?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut+1,0,0,We,tt,Ze.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ut+1,ze,We,tt,Ze.image[ue])}}}x(b)&&A(n.TEXTURE_CUBE_MAP),_e.__version=le.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Xe(D,b,Y,Z,le,_e){const be=r.convert(Y.format,Y.colorSpace),ne=r.convert(Y.type),me=y(Y.internalFormat,be,ne,Y.normalized,Y.colorSpace),Ge=i.get(b),Ke=i.get(Y);if(Ke.__renderTarget=b,!Ge.__hasExternalTextures){const Le=Math.max(1,b.width>>_e),Fe=Math.max(1,b.height>>_e);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,_e,me,Le,Fe,b.depth,0,be,ne,null):t.texImage2D(le,_e,me,Le,Fe,0,be,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ie(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,le,Ke.__webglTexture,0,Re(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,le,Ke.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(D,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),b.depthBuffer){const Z=b.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,_e=S(b.stencilBuffer,le),be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(b),_e,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(b),_e,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,D)}else{const Z=b.textures;for(let le=0;le<Z.length;le++){const _e=Z[le],be=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),me=y(_e.internalFormat,be,ne,_e.normalized,_e.colorSpace);Ie(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(b),me,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(b),me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,me,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(D,b,Y){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ht(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ge=r.convert(b.depthTexture.format),Ke=r.convert(b.depthTexture.type);let Le;b.depthTexture.format===Ki?Le=n.DEPTH_COMPONENT24:b.depthTexture.format===Ha&&(Le=n.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Le,b.width,b.height,0,Ge,Ke,null)}}else ve(b.depthTexture,0);const _e=le.__webglTexture,be=Re(b),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,me=b.depthTexture.format===Ha?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ki)Ie(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ne,_e,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,me,ne,_e,0);else if(b.depthTexture.format===Ha)Ie(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ne,_e,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,me,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(D){const b=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=Z}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)ft(b.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?ft(b.__webglFramebuffer[0],D,0):ft(b.__webglFramebuffer,D,0)}else if(Y){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Pe(b.__webglDepthbuffer[Z],D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Pe(b.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(D,b,Y){const Z=i.get(D);b!==void 0&&Xe(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&fe(D)}function Ae(D){const b=D.texture,Y=i.get(D),Z=i.get(b);D.addEventListener("dispose",_);const le=D.textures,_e=D.isWebGLCubeRenderTarget===!0,be=le.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,s.memory.textures++),_e){Y.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[ne]=[];for(let me=0;me<b.mipmaps.length;me++)Y.__webglFramebuffer[ne][me]=n.createFramebuffer()}else Y.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)Y.__webglFramebuffer[ne]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(be)for(let ne=0,me=le.length;ne<me;ne++){const Ge=i.get(le[ne]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Ie(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){const me=le[ne];Y.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ne]);const Ge=r.convert(me.format,me.colorSpace),Ke=r.convert(me.type),Le=y(me.internalFormat,Ge,Ke,me.normalized,me.colorSpace,D.isXRRenderTarget===!0),Fe=Re(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Le,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ht(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Xe(Y.__webglFramebuffer[ne][me],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me);else Xe(Y.__webglFramebuffer[ne],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);x(b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,me=le.length;ne<me;ne++){const Ge=le[ne],Ke=i.get(Ge);let Le=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ke.__webglTexture),ht(Le,Ge),Xe(Y.__webglFramebuffer,D,Ge,n.COLOR_ATTACHMENT0+ne,Le,0),x(Ge)&&A(Le)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ne=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),ht(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Xe(Y.__webglFramebuffer[me],D,b,n.COLOR_ATTACHMENT0,ne,me);else Xe(Y.__webglFramebuffer,D,b,n.COLOR_ATTACHMENT0,ne,0);x(b)&&A(ne),t.unbindTexture()}D.depthBuffer&&fe(D)}function we(D){const b=D.textures;for(let Y=0,Z=b.length;Y<Z;Y++){const le=b[Y];if(x(le)){const _e=P(D),be=i.get(le).__webglTexture;t.bindTexture(_e,be),A(_e),t.unbindTexture()}}}const Se=[],R=[];function K(D){if(D.samples>0){if(Ie(D)===!1){const b=D.textures,Y=D.width,Z=D.height;let le=n.COLOR_BUFFER_BIT;const _e=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(D),ne=b.length>1;if(ne)for(let Ge=0;Ge<b.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const me=D.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ge=0;Ge<b.length;Ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ge]);const Ke=i.get(b[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,le,n.NEAREST),f===!0&&(Se.length=0,R.length=0,Se.push(n.COLOR_ATTACHMENT0+Ge),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Se.push(_e),R.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ge=0;Ge<b.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ge]);const Ke=i.get(b[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const b=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Re(D){return Math.min(a.maxSamples,D.samples)}function Ie(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=s.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function rt(D,b){const Y=D.colorSpace,Z=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Ws&&Y!==_a&&(Lt.getTransfer(Y)===Ht?(Z!==ai||le!==Dn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Y)),b}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.getTextureUnits=z,this.setTextureUnits=J,this.setTexture2D=ve,this.setTexture2DArray=se,this.setTexture3D=ie,this.setTextureCube=de,this.rebindTextures=Me,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BM(n,e){function t(i,a=_a){let r;const s=Lt.getTransfer(a);if(i===Dn)return n.UNSIGNED_BYTE;if(i===pf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===eh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kd)return n.BYTE;if(i===Qd)return n.SHORT;if(i===To)return n.UNSIGNED_SHORT;if(i===hf)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===nh)return n.RGB;if(i===ai)return n.RGBA;if(i===Ki)return n.DEPTH_COMPONENT;if(i===Ha)return n.DEPTH_STENCIL;if(i===ih)return n.RED;if(i===gf)return n.RED_INTEGER;if(i===$a)return n.RG;if(i===xf)return n.RG_INTEGER;if(i===vf)return n.RGBA_INTEGER;if(i===Ns||i===Us||i===Os||i===Fs)if(s===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_c||i===Sc||i===yc||i===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ec||i===Ac||i===Tc||i===wc||i===Rc||i===ks||i===Cc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ec||i===Ac)return s===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wc)return r.COMPRESSED_R11_EAC;if(i===Rc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ks)return r.COMPRESSED_RG11_EAC;if(i===Cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===Gc||i===Vc||i===kc||i===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hc)return s===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wc||i===Xc||i===qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wc)return s===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yc||i===$c||i===Hs||i===Jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vi({vertexShader:zM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Ka{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",f=1,c=null,u=null,h=null,d=null,p=null,m=null;const E=typeof XRWebGLBinding<"u",v=new VM,x={},A=t.getContextAttributes();let P=null,y=null;const S=[],T=[],I=new Ne;let _=null,w=null;const L=new ti;L.viewport=new nn;const U=new ti;U.viewport=new nn;const V=[L,U],q=new Zm;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let he=S[ce];return he===void 0&&(he=new Cl,S[ce]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ce){let he=S[ce];return he===void 0&&(he=new Cl,S[ce]=he),he.getGripSpace()},this.getHand=function(ce){let he=S[ce];return he===void 0&&(he=new Cl,S[ce]=he),he.getHandSpace()};function re(ce){const he=T.indexOf(ce.inputSource);if(he===-1)return;const Ce=S[he];Ce!==void 0&&(Ce.update(ce.inputSource,ce.frame,c||s),Ce.dispatchEvent({type:ce.type,data:ce.inputSource}))}function W(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ve);for(let ce=0;ce<S.length;ce++){const he=T[ce];he!==null&&(T[ce]=null,S[ce].disconnect(he))}z=null,J=null,v.reset();for(const ce in x)delete x[ce];if(e.setRenderTarget(P),p=null,d=null,h=null,a=null,y=null,gt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),w!==null){const ce=w.camera;ce.fov=w.fov,ce.zoom=w.zoom,ce.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,i.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ve),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,st=null,Xe=null;A.depth&&(Xe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=A.stencil?Ha:Ki,st=A.stencil?wo:Di);const Pe={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ri(d.textureWidth,d.textureHeight,{format:ai,type:Dn,depthTexture:new zr(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Ce),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ri(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(f),c=null,s=await a.requestReferenceSpace(o),gt.setContext(a),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ve(ce){for(let he=0;he<ce.removed.length;he++){const Ce=ce.removed[he],st=T.indexOf(Ce);st>=0&&(T[st]=null,S[st].disconnect(Ce))}for(let he=0;he<ce.added.length;he++){const Ce=ce.added[he];let st=T.indexOf(Ce);if(st===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=T.length){T.push(Ce),st=Pe;break}else if(T[Pe]===null){T[Pe]=Ce,st=Pe;break}if(st===-1)break}const Xe=S[st];Xe&&Xe.connect(Ce)}}const se=new G,ie=new G;function de(ce,he,Ce){se.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(Ce.matrixWorld);const st=se.distanceTo(ie),Xe=he.projectionMatrix.elements,Pe=Ce.projectionMatrix.elements,ft=Xe[14]/(Xe[10]-1),fe=Xe[14]/(Xe[10]+1),Me=(Xe[9]+1)/Xe[5],Ae=(Xe[9]-1)/Xe[5],we=(Xe[8]-1)/Xe[0],Se=(Pe[8]+1)/Pe[0],R=ft*we,K=ft*Se,Re=st/(-we+Se),Ie=Re*-we;if(he.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ie),ce.translateZ(Re),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Xe[10]===-1)ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const F=ft+Re,rt=fe+Re,He=R-Ie,D=K+(st-Ie),b=Me*fe/rt*F,Y=Ae*fe/rt*F;ce.projectionMatrix.makePerspective(He,D,b,Y,F,rt),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function je(ce,he){he===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(he.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let he=ce.near,Ce=ce.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),q.near=U.near=L.near=he,q.far=U.far=L.far=Ce,(z!==q.near||J!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),z=q.near,J=q.far),q.layers.mask=ce.layers.mask|6,L.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;const st=ce.parent,Xe=q.cameras;je(q,st);for(let Pe=0;Pe<Xe.length;Pe++)je(Xe[Pe],st);Xe.length===2?de(q,L,U):q.projectionMatrix.copy(L.projectionMatrix),w===null&&ce.isPerspectiveCamera&&(w={camera:ce,fov:ce.fov,zoom:ce.zoom}),Ve(ce,q,st)};function Ve(ce,he,Ce){Ce===null?ce.matrix.copy(he.matrixWorld):(ce.matrix.copy(Ce.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(he.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Po*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return f},this.setFoveation=function(ce){f=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(q)},this.getCameraTexture=function(ce){return x[ce]};let _t=null;function ht(ce,he){if(u=he.getViewerPose(c||s),m=he,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let st=!1;Ce.length!==q.cameras.length&&(q.cameras.length=0,st=!0);for(let fe=0;fe<Ce.length;fe++){const Me=Ce[fe];let Ae=null;if(p!==null)Ae=p.getViewport(Me);else{const Se=h.getViewSubImage(d,Me);Ae=Se.viewport,fe===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let we=V[fe];we===void 0&&(we=new ti,we.layers.enable(fe),we.viewport=new nn,V[fe]=we),we.matrix.fromArray(Me.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Me.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(q.matrix.copy(we.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),st===!0&&q.cameras.push(we)}const Xe=a.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const fe=h.getDepthInformation(Ce[0]);fe&&fe.isValid&&fe.texture&&v.init(fe,a.renderState)}if(Xe&&Xe.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<Ce.length;fe++){const Me=Ce[fe].camera;if(Me){let Ae=x[Me];Ae||(Ae=new vh,x[Me]=Ae);const we=h.getCameraImage(Me);Ae.sourceTexture=we}}}}for(let Ce=0;Ce<S.length;Ce++){const st=T[Ce],Xe=S[Ce];st!==null&&Xe!==void 0&&Xe.update(st,he,c||s)}_t&&_t(ce,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}const gt=new Ph;gt.setAnimationLoop(ht),this.setAnimationLoop=function(ce){_t=ce},this.dispose=function(){}}}const HM=new Jt,Fh=new St;Fh.set(-1,0,0,0,1,0,0,0,1);function WM(n,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function i(v,x){x.color.getRGB(v.fogColor.value,wh(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function a(v,x,A,P,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(v,x):x.isMeshLambertMaterial?(r(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(v,x),h(v,x)):x.isMeshPhongMaterial?(r(v,x),u(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(v,x),d(v,x),x.isMeshPhysicalMaterial&&p(v,x,y)):x.isMeshMatcapMaterial?(r(v,x),m(v,x)):x.isMeshDepthMaterial?r(v,x):x.isMeshDistanceMaterial?(r(v,x),E(v,x)):x.isMeshNormalMaterial?r(v,x):x.isLineBasicMaterial?(s(v,x),x.isLineDashedMaterial&&o(v,x)):x.isPointsMaterial?f(v,x,A,P):x.isSpriteMaterial?c(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Un&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Un&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const A=e.get(x),P=A.envMap,y=A.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Fh),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function s(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function o(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function f(v,x,A,P){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*A,v.scale.value=P*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function u(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function h(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function d(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function p(v,x,A){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,x){x.matcap&&(v.matcap.value=x.matcap)}function E(v,x){const A=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function XM(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=a[y.id];T===void 0&&(v(y),T=u(y),a[y.id]=T,y.addEventListener("dispose",A));const I=S.program;i.updateUBOMapping(y,I);const _=e.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function u(y){const S=h();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=a[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,w=T.length;_<w;_++){const L=T[_];if(Array.isArray(L))for(let U=0,V=L.length;U<V;U++)p(L[U],_,U,I);else p(L,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,I){if(E(y,S,T,I)===!0){const _=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let U=0;U<w.length;U++){const V=w[U],q=x(V);m(V,y.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function E(y,S,T,I){const _=y.value,w=S+"_"+T;if(I[w]===void 0)return typeof _=="number"||typeof _=="boolean"?I[w]=_:ArrayBuffer.isView(_)?I[w]=_.slice():I[w]=_.clone(),!0;{const L=I[w];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function v(y){const S=y.uniforms;let T=0;const I=16;for(let w=0,L=S.length;w<L;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let V=0,q=U.length;V<q;V++){const z=U[V],J=Array.isArray(z.value)?z.value:[z.value];for(let re=0,W=J.length;re<W;re++){const ve=J[re],se=x(ve),ie=T%I,de=ie%se.boundary,je=ie+de;T+=de,je!==0&&I-je<se.storage&&(T+=I-je),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=se.storage}}}const _=T%I;return _>0&&(T+=I-_),y.__size=T,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){const S=y.target;S.removeEventListener("dispose",A);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const y in a)n.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:f,update:c,dispose:P}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function YM(){return Ei===null&&(Ei=new mh(qM,16,16,$a,Ni),Ei.name="DFG_LUT",Ei.minFilter=mn,Ei.magFilter=mn,Ei.wrapS=qi,Ei.wrapT=qi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class $M{constructor(e={}){const{canvas:t=u0(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const E=p,v=new Set([vf,xf,gf]),x=new Set([Dn,Di,To,wo,pf,mf]),A=new Uint32Array(4),P=new Int32Array(4),y=new G;let S=null,T=null;const I=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,V=null,q=null,z=null,J=null;this._outputColorSpace=Gn;let re=0,W=0,ve=null,se=-1,ie=null;const de=new nn,je=new nn;let Ve=null;const _t=new vt(0);let ht=0,gt=t.width,ce=t.height,he=1,Ce=null,st=null;const Xe=new nn(0,0,gt,ce),Pe=new nn(0,0,gt,ce);let ft=!1;const fe=new Ef;let Me=!1,Ae=!1;const we=new Jt,Se=new G,R=new nn,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ie(){return ve===null?he:1}let F=i;function rt(C,H){return t.getContext(C,H)}let He,D,b,Y,Z,le,_e,be,ne,me,Ge,Ke,Le,Fe,We,tt,ze,X,Be,ge,l,Ue,ue;try{const C={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",kn,!1),F===null){const H="webgl2";if(F=rt(H,C),F===null)throw rt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(C){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Dt("WebGLRenderer: "+C.message),C}function ut(){He=new Y1(F),He.init(),l=new BM(F,He),D=new F1(F,He,e,l),b=new OM(F,He),D.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),q=F.createFramebuffer(),z=F.createFramebuffer(),J=F.createFramebuffer(),Y=new Z1(F),Z=new yM,le=new FM(F,He,b,Z,D,l,Y),_e=new q1(L),be=new Qm(F),Ue=new U1(F,be),ne=new $1(F,be,Y,Ue),me=new Q1(F,ne,be,Ue,Y),X=new K1(F,D,le),We=new B1(Z),Ge=new SM(L,_e,He,D,Ue,We),Ke=new WM(L,Z),Le=new EM,Fe=new PM(He),ze=new N1(L,_e,b,me,m,f),tt=new UM(L,me,D),ue=new XM(F,Y,D,b),Be=new O1(F,He,Y),ge=new J1(F,He,Y),Y.programs=Ge.programs,L.capabilities=D,L.extensions=He,L.properties=Z,L.renderLists=Le,L.shadowMap=tt,L.state=b,L.info=Y}E!==Dn&&(w=new ev(E,t.width,t.height,o,a,r));const Ze=new kM(L,F);this.xr=Ze,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=He.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=He.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(gt,ce,!1))},this.getSize=function(C){return C.set(gt,ce)},this.setSize=function(C,H,oe=!0){if(Ze.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=C,ce=H,t.width=Math.floor(C*he),t.height=Math.floor(H*he),oe===!0&&(t.style.width=C+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(gt*he,ce*he).floor()},this.setDrawingBufferSize=function(C,H,oe){gt=C,ce=H,he=oe,t.width=Math.floor(C*oe),t.height=Math.floor(H*oe),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(E===Dn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(de)},this.getViewport=function(C){return C.copy(Xe)},this.setViewport=function(C,H,oe,Q){C.isVector4?Xe.set(C.x,C.y,C.z,C.w):Xe.set(C,H,oe,Q),b.viewport(de.copy(Xe).multiplyScalar(he).round())},this.getScissor=function(C){return C.copy(Pe)},this.setScissor=function(C,H,oe,Q){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,H,oe,Q),b.scissor(je.copy(Pe).multiplyScalar(he).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){b.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){st=C},this.getClearColor=function(C){return C.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,oe=!0){let Q=0;if(C){let j=!1;if(ve!==null){const qe=ve.texture.format;j=v.has(qe)}if(j){const qe=ve.texture.type,et=x.has(qe),Ye=ze.getClearColor(),nt=ze.getClearAlpha(),lt=Ye.r,bt=Ye.g,Rt=Ye.b;et?(A[0]=lt,A[1]=bt,A[2]=Rt,A[3]=nt,F.clearBufferuiv(F.COLOR,0,A)):(P[0]=lt,P[1]=bt,P[2]=Rt,P[3]=nt,F.clearBufferiv(F.COLOR,0,P))}else Q|=F.COLOR_BUFFER_BIT}H&&(Q|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(Q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&F.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),ze.dispose(),Le.dispose(),Fe.dispose(),Z.dispose(),_e.dispose(),me.dispose(),Ue.dispose(),ue.dispose(),Ge.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",er),Ze.removeEventListener("sessionend",na),si.stop()};function Ft(C){C.preventDefault(),qs("WebGLRenderer: Context Lost."),U=!0}function Et(){qs("WebGLRenderer: Context Restored."),U=!1;const C=Y.autoReset,H=tt.enabled,oe=tt.autoUpdate,Q=tt.needsUpdate,j=tt.type;ut(),Y.autoReset=C,tt.enabled=H,tt.autoUpdate=oe,tt.needsUpdate=Q,tt.type=j}function kn(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function On(C){const H=C.target;H.removeEventListener("dispose",On),pl(H)}function pl(C){ta(C),Z.remove(C)}function ta(C){const H=Z.get(C).programs;H!==void 0&&(H.forEach(function(oe){Ge.releaseProgram(oe)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,oe,Q,j,qe){H===null&&(H=K);const et=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ye=nr(C,H,oe,Q,j);b.setMaterial(Q,et);let nt=oe.index,lt=1;if(Q.wireframe===!0){if(nt=ne.getWireframeAttribute(oe),nt===void 0)return;lt=2}const bt=oe.drawRange,Rt=oe.attributes.position;let it=bt.start*lt,Ut=(bt.start+bt.count)*lt;qe!==null&&(it=Math.max(it,qe.start*lt),Ut=Math.min(Ut,(qe.start+qe.count)*lt)),nt!==null?(it=Math.max(it,0),Ut=Math.min(Ut,nt.count)):Rt!=null&&(it=Math.max(it,0),Ut=Math.min(Ut,Rt.count));const rn=Ut-it;if(rn<0||rn===1/0)return;Ue.setup(j,Q,Ye,oe,nt);let Xt,Vt=Be;if(nt!==null&&(Xt=be.get(nt),Vt=ge,Vt.setIndex(Xt)),j.isMesh)Q.wireframe===!0?(b.setLineWidth(Q.wireframeLinewidth*Ie()),Vt.setMode(F.LINES)):Vt.setMode(F.TRIANGLES);else if(j.isLine){let dn=Q.linewidth;dn===void 0&&(dn=1),b.setLineWidth(dn*Ie()),j.isLineSegments?Vt.setMode(F.LINES):j.isLineLoop?Vt.setMode(F.LINE_LOOP):Vt.setMode(F.LINE_STRIP)}else j.isPoints?Vt.setMode(F.POINTS):j.isSprite&&Vt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const dn=j._multiDrawStarts,Qe=j._multiDrawCounts,pn=j._multiDrawCount,Pt=nt?be.get(nt).bytesPerElement:1,Tn=Z.get(Q).currentProgram.getUniforms();for(let Hn=0;Hn<pn;Hn++)Tn.setValue(F,"_gl_DrawID",Hn),Vt.render(dn[Hn]/Pt,Qe[Hn])}else if(j.isInstancedMesh)Vt.renderInstances(it,rn,j.count);else if(oe.isInstancedBufferGeometry){const dn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Qe=Math.min(oe.instanceCount,dn);Vt.renderInstances(it,rn,Qe)}else Vt.render(it,rn)};function Xo(C,H,oe,Q){V!==null&&C.isNodeMaterial&&V.setObject(Q,C),Me===!0&&We.setState(C,oe,!1),C.transparent===!0&&C.side===ni&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,tr(C,H,Q),C.side=qa,C.needsUpdate=!0,tr(C,H,Q),C.side=ni):tr(C,H,Q)}this.compile=function(C,H,oe=null){oe===null&&(oe=C),V!==null&&V.renderStart(C,H,oe),T=Fe.get(oe),T.init(H),_.push(T),oe.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),C!==oe&&C.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Ae=this.localClippingEnabled,Me=We.init(this.clippingPlanes,Ae),Me===!0&&We.setGlobalState(this.clippingPlanes,H),V!==null&&tt.render(T.state.shadowsArray,oe,H);const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const qe=j.material;if(qe)if(Array.isArray(qe))for(let et=0;et<qe.length;et++){const Ye=qe[et];Xo(Ye,oe,H,j),Q.add(Ye)}else Xo(qe,oe,H,j),Q.add(qe)}),T=_.pop(),V!==null&&V.renderEnd(),Q},this.compileAsync=function(C,H,oe=null){const Q=this.compile(C,H,oe);return new Promise(j=>{function qe(){if(Q.forEach(function(et){const nt=Z.get(et).currentProgram;(nt===void 0||nt.isReady())&&Q.delete(et)}),Q.size===0){j(C);return}setTimeout(qe,10)}He.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let ja=null;function $r(C){ja&&ja(C)}function er(){si.stop()}function na(){si.start()}const si=new Ph;si.setAnimationLoop($r),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(C){ja=C,Ze.setAnimationLoop(C),C===null?si.stop():si.start()},Ze.addEventListener("sessionstart",er),Ze.addEventListener("sessionend",na),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(C,H);const oe=Ze.enabled===!0&&Ze.isPresenting===!0,Q=w!==null&&(ve===null||oe)&&w.begin(L,ve);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(H),H=Ze.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,H,ve),T=Fe.get(C,_.length),T.init(H),T.state.textureUnits=le.getTextureUnits(),_.push(T),we.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),fe.setFromProjectionMatrix(we,Pi,H.reversedDepth),Ae=this.localClippingEnabled,Me=We.init(this.clippingPlanes,Ae),S=Le.get(C,I.length),S.init(),I.push(S),Ze.enabled===!0&&Ze.isPresenting===!0){const et=L.xr.getDepthSensingMesh();et!==null&&Jr(et,H,-1/0,L.sortObjects)}Jr(C,H,0,L.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Ce,st),Re=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Re&&ze.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&We.beginShadows();const j=T.state.shadowsArray;if(tt.render(j,C,H),Me===!0&&We.endShadows(),(Q&&w.hasRenderPass())===!1){const et=S.opaque,Ye=S.transmissive;if(T.setupLights(),H.isArrayCamera){const nt=H.cameras;if(Ye.length>0)for(let lt=0,bt=nt.length;lt<bt;lt++){const Rt=nt[lt];$t(et,Ye,C,Rt)}Re&&ze.render(C);for(let lt=0,bt=nt.length;lt<bt;lt++){const Rt=nt[lt];qo(S,C,Rt,Rt.viewport)}}else Ye.length>0&&$t(et,Ye,C,H),Re&&ze.render(C),qo(S,C,H)}ve!==null&&W===0&&(le.updateMultisampleRenderTarget(ve),le.updateRenderTargetMipmap(ve)),Q&&w.end(L),C.isScene===!0&&C.onAfterRender(L,C,H),Ue.resetDefaultState(),se=-1,ie=null,_.pop(),_.length>0?(T=_[_.length-1],le.setTextureUnits(T.state.textureUnits),Me===!0&&We.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,V!==null&&V.renderEnd()};function Jr(C,H,oe,Q){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(fe)){Q&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const et=me.update(C),Ye=C.material;Ye.visible&&S.push(C,et,Ye,oe,R.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(fe))){const et=me.update(C),Ye=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),R.copy(C.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),R.copy(et.boundingSphere.center)),R.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Ye)){const nt=et.groups;for(let lt=0,bt=nt.length;lt<bt;lt++){const Rt=nt[lt],it=Ye[Rt.materialIndex];it&&it.visible&&S.push(C,et,it,oe,R.z,Rt,H)}}else Ye.visible&&S.push(C,et,Ye,oe,R.z,null,H)}}const qe=C.children;for(let et=0,Ye=qe.length;et<Ye;et++)Jr(qe[et],H,oe,Q)}function qo(C,H,oe,Q){const{opaque:j,transmissive:qe,transparent:et}=C;T.setupLightsView(oe),Me===!0&&We.setGlobalState(L.clippingPlanes,oe),Q&&b.viewport(de.copy(Q)),j.length>0&&Zt(j,H,oe),qe.length>0&&Zt(qe,H,oe),et.length>0&&Zt(et,H,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function $t(C,H,oe,Q){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const it=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new ri(1,1,{generateMipmaps:!0,type:it?Ni:Dn,minFilter:ka,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const qe=T.state.transmissionRenderTarget[Q.id],et=Q.viewport||de;qe.setSize(et.z*L.transmissionResolutionScale,et.w*L.transmissionResolutionScale);const Ye=L.getRenderTarget(),nt=L.getActiveCubeFace(),lt=L.getActiveMipmapLevel();L.setRenderTarget(qe),L.getClearColor(_t),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),Re&&ze.render(oe);const bt=L.toneMapping;L.toneMapping=Ii;const Rt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),Me===!0&&We.setGlobalState(L.clippingPlanes,Q),Zt(C,oe,Q),le.updateMultisampleRenderTarget(qe),le.updateRenderTargetMipmap(qe),He.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ut=0,rn=H.length;Ut<rn;Ut++){const Xt=H[Ut],{object:Vt,geometry:dn,material:Qe,group:pn}=Xt;if(Qe.side===ni&&Vt.layers.test(Q.layers)){const Pt=Qe.side;Qe.side=Un,Qe.needsUpdate=!0,Yo(Vt,oe,Q,dn,Qe,pn),Qe.side=Pt,Qe.needsUpdate=!0,it=!0}}it===!0&&(le.updateMultisampleRenderTarget(qe),le.updateRenderTargetMipmap(qe))}L.setRenderTarget(Ye,nt,lt),L.setClearColor(_t,ht),Rt!==void 0&&(Q.viewport=Rt),L.toneMapping=bt}function Zt(C,H,oe){const Q=H.isScene===!0?H.overrideMaterial:null;for(let j=0,qe=C.length;j<qe;j++){const et=C[j],{object:Ye,geometry:nt,group:lt}=et;let bt=et.material;bt.allowOverride===!0&&Q!==null&&(bt=Q),Ye.layers.test(oe.layers)&&Yo(Ye,H,oe,nt,bt,lt)}}function Yo(C,H,oe,Q,j,qe){V!==null&&j.isNodeMaterial&&V.setObject(C,j),C.onBeforeRender(L,H,oe,Q,j,qe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(L,H,oe,Q,C,qe),j.transparent===!0&&j.side===ni&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,L.renderBufferDirect(oe,H,Q,j,C,qe),j.side=qa,j.needsUpdate=!0,L.renderBufferDirect(oe,H,Q,j,C,qe),j.side=ni):L.renderBufferDirect(oe,H,Q,j,C,qe),C.onAfterRender(L,H,oe,Q,j,qe)}function tr(C,H,oe){H.isScene!==!0&&(H=K);const Q=Z.get(C),j=T.state.lights,qe=T.state.shadowsArray,et=j.state.version,Ye=Ge.getParameters(C,j.state,qe,H,oe,T.state.lightProbeGridArray),nt=Ge.getProgramCacheKey(Ye);let lt=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;const bt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=_e.get(C.envMap||Q.environment,bt),Q.envMapRotation=Q.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,lt===void 0&&(C.addEventListener("dispose",On),lt=new Map,Q.programs=lt);let Rt=lt.get(nt);if(Rt!==void 0){if(Q.currentProgram===Rt&&Q.lightsStateVersion===et)return Ia(C,Ye),Rt}else Ye.uniforms=Ge.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,oe,Ye),C.onBeforeCompile(Ye,L),Rt=Ge.acquireProgram(Ye,nt),lt.set(nt,Rt),Q.uniforms=Ye.uniforms;const it=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=We.uniform),Ia(C,Ye),Q.needsLights=ia(C),Q.lightsStateVersion=et,Q.needsLights&&(it.ambientLightColor.value=j.state.ambient,it.lightProbe.value=j.state.probe,it.sunLights.value=j.state.sun,it.sunLightShadows.value=j.state.sunShadow,it.directionalLights.value=j.state.directional,it.directionalLightShadows.value=j.state.directionalShadow,it.spotLights.value=j.state.spot,it.spotLightShadows.value=j.state.spotShadow,it.rectAreaLights.value=j.state.rectArea,it.ltc_1.value=j.state.rectAreaLTC1,it.ltc_2.value=j.state.rectAreaLTC2,it.pointLights.value=j.state.point,it.pointLightShadows.value=j.state.pointShadow,it.hemisphereLights.value=j.state.hemi,it.sunShadowMatrix.value=j.state.sunShadowMatrix,it.sunShadowCascade.value=j.state.sunShadowCascade,it.directionalShadowMatrix.value=j.state.directionalShadowMatrix,it.spotLightMatrix.value=j.state.spotLightMatrix,it.spotLightMap.value=j.state.spotLightMap,it.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=T.state.lightProbeGridArray.length>0,Q.currentProgram=Rt,Q.uniformsList=null,Rt}function $o(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Bs.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Ia(C,H){const oe=Z.get(C);oe.outputColorSpace=H.outputColorSpace,oe.batching=H.batching,oe.batchingColor=H.batchingColor,oe.instancing=H.instancing,oe.instancingColor=H.instancingColor,oe.instancingMorph=H.instancingMorph,oe.skinning=H.skinning,oe.morphTargets=H.morphTargets,oe.morphNormals=H.morphNormals,oe.morphColors=H.morphColors,oe.morphTargetsCount=H.morphTargetsCount,oe.numClippingPlanes=H.numClippingPlanes,oe.numIntersection=H.numClipIntersection,oe.vertexAlphas=H.vertexAlphas,oe.vertexTangents=H.vertexTangents,oe.toneMapping=H.toneMapping}function An(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let oe=0,Q=C.length;oe<Q;oe++){const j=C[oe];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function nr(C,H,oe,Q,j){H.isScene!==!0&&(H=K),le.resetTextureUnits();const qe=H.fog,et=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?H.environment:null,Ye=ve===null?L.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Lt.workingColorSpace,nt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,lt=_e.get(Q.envMap||et,nt),bt=Q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Rt=!!oe.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),it=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,rn=!!oe.morphAttributes.color;let Xt=Ii;Q.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Xt=L.toneMapping);const Vt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dn=Vt!==void 0?Vt.length:0,Qe=Z.get(Q),pn=T.state.lights;if(Me===!0&&(Ae===!0||C!==ie)){const qt=C===ie&&Q.id===se;We.setState(Q,C,qt)}let Pt=!1;Q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==pn.state.version||Qe.outputColorSpace!==Ye||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==lt||Q.fog===!0&&Qe.fog!==qe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==We.numPlanes||Qe.numIntersection!==We.numIntersection)||Qe.vertexAlphas!==bt||Qe.vertexTangents!==Rt||Qe.morphTargets!==it||Qe.morphNormals!==Ut||Qe.morphColors!==rn||Qe.toneMapping!==Xt||Qe.morphTargetsCount!==dn||!!Qe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Qe.__version=Q.version);let Tn=Qe.currentProgram;Pt===!0&&(Tn=tr(Q,H,j),V&&Q.isNodeMaterial&&V.onUpdateProgram(Q,Tn,Qe));let Hn=!1,li=!1,aa=!1;const zt=Tn.getUniforms(),en=Qe.uniforms;if(b.useProgram(Tn.program)&&(Hn=!0,li=!0,aa=!0),Q.id!==se&&(se=Q.id,li=!0),Qe.needsLights){const qt=An(T.state.lightProbeGridArray,j);Qe.lightProbeGrid!==qt&&(Qe.lightProbeGrid=qt,li=!0)}if(Hn||ie!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(F,"projectionMatrix",C.projectionMatrix),zt.setValue(F,"viewMatrix",C.matrixWorldInverse);const yi=zt.map.cameraPosition;yi!==void 0&&yi.setValue(F,Se.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&zt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,li=!0,aa=!0)}if(Qe.needsLights&&(pn.state.sunShadowMap.length>0&&zt.setValue(F,"sunShadowMap",pn.state.sunShadowMap,le),pn.state.directionalShadowMap.length>0&&zt.setValue(F,"directionalShadowMap",pn.state.directionalShadowMap,le),pn.state.spotShadowMap.length>0&&zt.setValue(F,"spotShadowMap",pn.state.spotShadowMap,le),pn.state.pointShadowMap.length>0&&zt.setValue(F,"pointShadowMap",pn.state.pointShadowMap,le)),j.isSkinnedMesh){zt.setOptional(F,j,"bindMatrix"),zt.setOptional(F,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),zt.setValue(F,"boneTexture",qt.boneTexture,le))}j.isBatchedMesh&&(zt.setOptional(F,j,"batchingTexture"),zt.setValue(F,"batchingTexture",j._matricesTexture,le),zt.setOptional(F,j,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",j._indirectTexture,le),zt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",j._colorsTexture,le));const Si=oe.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&X.update(j,oe,Tn),(li||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,zt.setValue(F,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&H.environment!==null&&(en.envMapIntensity.value=H.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=YM()),li){if(zt.setValue(F,"toneMappingExposure",L.toneMappingExposure),Qe.needsLights&&La(en,aa),qe&&Q.fog===!0&&Ke.refreshFogUniforms(en,qe),Ke.refreshMaterialUniforms(en,Q,he,ce,T.state.transmissionRenderTarget[C.id]),Qe.needsLights&&Qe.lightProbeGrid){const qt=Qe.lightProbeGrid;en.probesSH.value=qt.texture,en.probesMin.value.copy(qt.boundingBox.min),en.probesMax.value.copy(qt.boundingBox.max),en.probesResolution.value.copy(qt.resolution)}Bs.upload(F,$o(Qe),en,le)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Bs.upload(F,$o(Qe),en,le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&zt.setValue(F,"center",j.center),zt.setValue(F,"modelViewMatrix",j.modelViewMatrix),zt.setValue(F,"normalMatrix",j.normalMatrix),zt.setValue(F,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const qt=Q.uniformsGroups;for(let yi=0,jn=qt.length;yi<jn;yi++){const Zr=qt[yi];ue.update(Zr,Tn),ue.bind(Zr,Tn)}}return Tn}function La(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function ia(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(C,H,oe){const Q=Z.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=H,Z.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:oe,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const oe=Z.get(C);oe.__webglFramebuffer=H,oe.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,oe=0){ve=C,re=H,W=oe;let Q=null,j=!1,qe=!1;if(C){const Ye=Z.get(C);if(Ye.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Ye.__webglFramebuffer),de.copy(C.viewport),je.copy(C.scissor),Ve=C.scissorTest,b.viewport(de),b.scissor(je),b.setScissorTest(Ve),se=-1;return}else if(Ye.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Ye.__hasExternalTextures)le.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const bt=C.depthTexture;if(Ye.__boundDepthTexture!==bt){if(bt!==null&&Z.has(bt)&&(C.width!==bt.image.width||C.height!==bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(qe=!0);const lt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[H])?Q=lt[H][oe]:Q=lt[H],j=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?Q=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?Q=lt[oe]:Q=lt,de.copy(C.viewport),je.copy(C.scissor),Ve=C.scissorTest}else de.copy(Xe).multiplyScalar(he).floor(),je.copy(Pe).multiplyScalar(he).floor(),Ve=ft;if(oe!==0&&(Q=q),b.bindFramebuffer(F.FRAMEBUFFER,Q)&&b.drawBuffers(C,Q),b.viewport(de),b.scissor(je),b.setScissorTest(Ve),j){const Ye=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ye.__webglTexture,oe)}else if(qe){const Ye=H;for(let nt=0;nt<C.textures.length;nt++){const lt=Z.get(C.textures[nt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+nt,lt.__webglTexture,oe,Ye)}}else if(C!==null&&oe!==0){const Ye=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,oe)}se=-1};function Jo(C){const H=Z.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=D.textureFormatReadable(C.format),H.__typeReadable=D.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,oe,Q,j,qe,et,Ye=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt){b.bindFramebuffer(F.FRAMEBUFFER,nt);try{const lt=C.textures[Ye],bt=lt.format,Rt=lt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ye);const it=Jo(lt);if(it.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Q&&oe>=0&&oe<=C.height-j&&F.readPixels(H,oe,Q,j,l.convert(bt),l.convert(Rt),qe)}finally{const lt=ve!==null?Z.get(ve).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(C,H,oe,Q,j,qe,et,Ye=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt)if(H>=0&&H<=C.width-Q&&oe>=0&&oe<=C.height-j){b.bindFramebuffer(F.FRAMEBUFFER,nt);const lt=C.textures[Ye],bt=lt.format,Rt=lt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ye);const it=Jo(lt);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.bufferData(F.PIXEL_PACK_BUFFER,qe.byteLength,F.STREAM_READ),F.readPixels(H,oe,Q,j,l.convert(bt),l.convert(Rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const rn=ve!==null?Z.get(ve).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,rn);const Xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await d0(F,Xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,qe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ut),F.deleteSync(Xt),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,oe=0){const Q=Math.pow(2,-oe),j=Math.floor(C.image.width*Q),qe=Math.floor(C.image.height*Q),et=H!==null?H.x:0,Ye=H!==null?H.y:0;le.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,et,Ye,j,qe),b.unbindTexture()},this.copyTextureToTexture=function(C,H,oe=null,Q=null,j=0,qe=0){let et,Ye,nt,lt,bt,Rt,it,Ut,rn;const Xt=C.isCompressedTexture?C.mipmaps[qe]:C.image;if(oe!==null)et=oe.max.x-oe.min.x,Ye=oe.max.y-oe.min.y,nt=oe.isBox3?oe.max.z-oe.min.z:1,lt=oe.min.x,bt=oe.min.y,Rt=oe.isBox3?oe.min.z:0;else{const en=Math.pow(2,-j);et=Math.floor(Xt.width*en),Ye=Math.floor(Xt.height*en),C.isDataArrayTexture?nt=Xt.depth:C.isData3DTexture?nt=Math.floor(Xt.depth*en):nt=1,lt=0,bt=0,Rt=0}Q!==null?(it=Q.x,Ut=Q.y,rn=Q.z):(it=0,Ut=0,rn=0);const Vt=l.convert(H.format),dn=l.convert(H.type);let Qe;H.isData3DTexture?(le.setTexture3D(H,0),Qe=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Qe=F.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Qe=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const pn=b.getParameter(F.UNPACK_ROW_LENGTH),Pt=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=b.getParameter(F.UNPACK_SKIP_PIXELS),Hn=b.getParameter(F.UNPACK_SKIP_ROWS),li=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),b.pixelStorei(F.UNPACK_SKIP_ROWS,bt),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const aa=C.isDataArrayTexture||C.isData3DTexture,zt=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const en=Z.get(C),Si=Z.get(H),qt=Z.get(en.__renderTarget),yi=Z.get(Si.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let jn=0;jn<nt;jn++)aa&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,j,Rt+jn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,qe,rn+jn)),F.blitFramebuffer(lt,bt,et,Ye,it,Ut,et,Ye,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Z.has(C)){const en=Z.get(C),Si=Z.get(H);b.bindFramebuffer(F.READ_FRAMEBUFFER,z),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let qt=0;qt<nt;qt++)aa?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,j,Rt+qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,j),zt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Si.__webglTexture,qe,rn+qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Si.__webglTexture,qe),j!==0?F.blitFramebuffer(lt,bt,et,Ye,it,Ut,et,Ye,F.COLOR_BUFFER_BIT,F.NEAREST):zt?F.copyTexSubImage3D(Qe,qe,it,Ut,rn+qt,lt,bt,et,Ye):F.copyTexSubImage2D(Qe,qe,it,Ut,lt,bt,et,Ye);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Qe,qe,it,Ut,rn,et,Ye,nt,Vt,dn,Xt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Qe,qe,it,Ut,rn,et,Ye,nt,Vt,Xt.data):F.texSubImage3D(Qe,qe,it,Ut,rn,et,Ye,nt,Vt,dn,Xt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,qe,it,Ut,et,Ye,Vt,dn,Xt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,qe,it,Ut,Xt.width,Xt.height,Vt,Xt.data):F.texSubImage2D(F.TEXTURE_2D,qe,it,Ut,et,Ye,Vt,dn,Xt);b.pixelStorei(F.UNPACK_ROW_LENGTH,pn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Hn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,li),qe===0&&H.generateMipmaps&&F.generateMipmap(Qe),b.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){re=0,W=0,ve=null,b.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const md={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},va={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},xn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais compram melhorias permanentes na Oficina da nave."}]}],Js=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],co={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},br=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),Er=(n,e,t)=>({copa:[n,e],copa2:t}),fo=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Uo=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:br(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:br(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:br(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:br(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:br(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:br(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:Er(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:Er(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:Er(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:Er(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:Er(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:Er(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:fo(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:fo(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:fo(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:fo(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:fo(2755082,16769162,16756843)}],Eo=n=>Uo.find(e=>e.id===n),JM=n=>Uo.find(e=>e.cat===n&&e.padrao),ZM=n=>"#"+n.toString(16).padStart(6,"0"),Bh="curriculo-cassino-v1",uo=10,KM=100,gd=50,af=9,Yn=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],zh=5,QM=["comum","rara","epica","lendaria"];function jM(){const n={};for(const e of Js)n[e.id]=JM(e.id).id;return{fichas:KM,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function e_(){const n=jM();try{const e=JSON.parse(localStorage.getItem(Bh));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>Eo(a)):[],i={...n.equipadas};for(const a of Js){const r=e.equipadas?.[a.id],s=r&&Eo(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function t_(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,E)=>{i(E),t.fillRect(p,m,1,1)},r=(p,m,E,v)=>{i(v);for(let x=-E-1;x<=E+1;x++)for(let A=-E-1;A<=E+1;A++)A*A+x*x<=E*E+.5&&t.fillRect(p+A,m+x,1,1)},s=(p,m,E,v,x)=>{i(x);for(let A=0;A<16;A++)for(let P=0;P<16;P++){const y=(P+.5-p)/E,S=(A+.5-m)/v;y*y+S*S<=1&&t.fillRect(P,A,1,1)}},o=(p,m)=>{i(m);for(let E=0;E<16;E++)for(let v=0;v<16;v++){const x=v+.5,A=E+.5;let P=!1;for(let y=0,S=p.length-1;y<p.length;S=y++){const[T,I]=p[y],[_,w]=p[S];I>A!=w>A&&x<(_-T)*(A-I)/(w-I)+T&&(P=!P)}P&&t.fillRect(v,E,1,1)}},f=(p,m,E,v,x)=>{i(x);const A=Math.max(Math.abs(E-p),Math.abs(v-m));for(let P=0;P<=A;P++)t.fillRect(Math.round(p+(E-p)*P/A),Math.round(m+(v-m)*P/A),1,1)};switch(n){case"cereja":f(5,9,9,3,"#4f8a3a"),f(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const E=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(E)*v,8.5+Math.sin(E)*v])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const c=t.getImageData(0,0,16,16),u=c.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let Rs=null,Cs=null;function ul(){return Rs??=new(window.AudioContext||window.webkitAudioContext),Rs.state==="suspended"&&Rs.resume(),Rs}function Ai(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{const s=ul(),o=s.currentTime+r,f=s.createOscillator(),c=s.createGain();f.type=i,f.frequency.value=e,c.gain.setValueAtTime(a,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),f.connect(c).connect(s.destination),f.start(o),f.stop(o+t+.02)}catch{}}function Ar(n,e,t=.03,i=.07,a=0){if(n.som)try{const r=ul();if(!Cs){Cs=r.createBuffer(1,Math.floor(r.sampleRate*.4),r.sampleRate);const u=Cs.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=r.currentTime+a,o=r.createBufferSource(),f=r.createBiquadFilter(),c=r.createGain();o.buffer=Cs,f.type="bandpass",f.frequency.value=e,f.Q.value=1.4,c.gain.setValueAtTime(i,s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(c).connect(r.destination),o.start(s,Math.random()*.3),o.stop(s+t+.02)}catch{}}function nc(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const r=ul(),s=r.currentTime+a,o=r.createOscillator(),f=r.createGain();o.type="sine",o.frequency.setValueAtTime(e,s),o.frequency.exponentialRampToValueAtTime(e*.4,s+t),f.gain.setValueAtTime(i,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(r.destination),o.start(s),o.stop(s+t+.02)}catch{}}function n_(n){if(!n.som)return null;try{const e=ul(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),r=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(r).connect(e.destination),i.start(t),{sair(s=.4){const o=e.currentTime;r.gain.cancelScheduledValues(o),r.gain.setValueAtTime(.045,o),r.gain.linearRampToValueAtTime(1e-4,o+s),i.frequency.cancelScheduledValues(o),i.frequency.setValueAtTime(84,o),i.frequency.linearRampToValueAtTime(40,o+s),i.stop(o+s+.05)}}}catch{return null}}const Vi=()=>Yn[Math.floor(Math.random()*Yn.length)],ic=()=>{let n=Math.random()*Yn.reduce((e,t)=>e+t.peso,0);for(const e of Yn)if(n-=e.peso,n<=0)return e;return Yn[0]},Gh=(n,e)=>Uo.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function i_(n){for(const e of QM)if(Gh(n,e).length){const t=Yn.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function a_(n){let e=[ic(),ic(),ic()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=af){const a=i_(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=Gh(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=zh);return i}function r_({aoMudarSkins:n,aoMudarFichas:e}){const t=e_(),i=()=>{try{localStorage.setItem(Bh,JSON.stringify(t))}catch{}},a=(K,Re,Ie)=>{const F=document.createElement(K);return Re&&(F.className=Re),Ie!=null&&(F.textContent=Ie),F},r=Object.fromEntries(Yn.map(K=>[K.id,t_(K.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),f=a("button","cas-x","X");f.title="Fechar (Esc)";const c=a("div","cas-letreiro"),u=a("div","lampadas"),h=(K,Re)=>{const Ie=a("i",K);return Ie.style.setProperty("--i",Re),Ie};for(let K=0;K<9;K++)u.append(h("lampada",K));c.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),E=m.map(K=>{const Re=document.createElement("canvas");return Re.width=16,Re.height=48,K.append(Re),p.append(K),Re});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),x=a("div","cas-lcd"),A=a("div","cas-msg","PUXE A ALAVANCA!"),P=a("div","cas-fichas"),y=a("b");P.append(a("i","moeda"),y,a("span",null,"FICHAS")),x.append(A,P);const S=a("div","cas-premio");S.hidden=!0;const T=a("div","cas-botoes"),I=(K,Re,Ie,F=!1)=>{const rt=a("div","cas-bw"+(F?" grande":"")),He=a("i","led"),D=a("button",`cas-b3d ${Re}${F?" grande":""}`,K);return D.title=Ie,rt.append(He,D),T.append(rt),{b:D,led:He}},{b:_,led:w}=I("?","azul","Tabela de prêmios"),{b:L,led:U}=I("SKINS","rosa","Coleção de skins (C)"),{b:V,led:q}=I("GIRAR","vermelho",`Girar (-${uo} fichas) · Espaço`,!0),{b:z,led:J}=I("SOM","amarelo","Ligar ou desligar o som");U.classList.add("on");const re=a("button","cas-b3d verde largo",`+${gd} FICHAS DE CORTESIA`);re.hidden=!0,T.append(re);const W=a("div","cas-luzes");for(let K=0;K<14;K++)W.append(h("",K));v.append(x,S,T,W);const ve=a("button","cas-alavanca");ve.title="Puxar a alavanca · Espaço";const se=a("i","braco");se.append(a("i","haste"),a("i","bola")),ve.append(a("i","suporte"),se);const ie=a("div","cas-bandeja");ie.append(a("i","fenda"));const de=a("div","cas-tabela");de.hidden=!0;for(const K of Yn){const Re=a("div","cas-linha"),Ie=r[K.id].cloneNode();Ie.getContext("2d").drawImage(r[K.id],0,0),Re.append(Ie,a("span",null,`x3 = ${K.premio}`),a("small",null,co[K.tier].nome.toLowerCase())),de.append(Re)}de.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${zh} · a cada ${af+1} giros sem trio, o próximo é garantido`)),o.append(f,c,d,v,ve,ie,de,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const je=a("div","cas-colecao-caixa");je.hidden=!0;const Ve=a("div","cas-colecao");je.append(Ve),s.append(o,je),document.body.append(s);let _t=!1,ht=!1,gt=!1;function ce(K,Re,Ie){const F=E[K].getContext("2d");F.clearRect(0,0,16,48);const rt=Math.floor(Ie),He=Ie-rt;for(let D=0;D<4;D++){const b=Re[rt+D];b&&F.drawImage(r[b.id],0,Math.round((D-He)*16))}}const he=(K,Re)=>ce(K,Re,0);function Ce(){y.textContent=String(t.fichas),e?.(t.fichas);const K=t.fichas<uo;V.disabled=ht||K,ve.disabled=ht||K,re.hidden=!K||ht,z.classList.toggle("apagado",!t.som),J.classList.toggle("on",t.som),q.classList.toggle("on",!ht&&!K),w.classList.toggle("on",!de.hidden),o.classList.toggle("girando",ht),o.classList.toggle("pronto",!ht&&!K),o.classList.toggle("sem-ficha",K)}function st(K,Re=""){A.textContent=K,A.className="cas-msg "+Re}function Xe(){Ve.replaceChildren();const K=a("div","cas-cabecalho"),Re=Uo.filter(F=>!F.padrao).length,Ie=a("button","cas-btn","VOLTAR");Ie.onclick=()=>ft(!1),K.append(a("h3",null,`SKINS (${t.skins.length}/${Re})`),Ie),Ve.append(K);for(const F of Js){Ve.append(a("h4",null,F.nome.toUpperCase()));const rt=a("div","cas-grade");for(const He of Uo.filter(D=>D.cat===F.id)){const D=He.padrao||t.skins.includes(He.id),b=t.equipadas[F.id]===He.id,Y=a("div","cas-card"+(b?" equipada":"")+(D?"":" bloqueada"));Y.style.setProperty("--r",co[He.raridade].cor);const Z=a("div","amostra"),le=F.id==="planeta"?[He.cores.marFundo,He.cores.marRaso,He.cores.areia,He.cores.grama0,He.cores.grama2]:F.id==="arvores"?[He.cores.copa[0],He.cores.copa[1],He.cores.copa2]:[He.cores.fundo,He.cores.estrelas,He.cores.nuvens];for(const be of le){const ne=a("i");ne.style.background=D?ZM(be):"#2a2440",Z.append(ne)}Y.append(Z,a("b",null,D?He.nome:"???"),a("small",null,co[He.raridade].nome));const _e=a("button","cas-btn pequeno",b?"EQUIPADA":D?"EQUIPAR":"TRAVADA");_e.disabled=!D||b,_e.onclick=()=>Pe(He),Y.append(_e),rt.append(Y)}Ve.append(rt)}}function Pe(K){t.equipadas[K.cat]=K.id,i(),n({...t.equipadas}),Ai(t,660,.06),gt&&Xe()}function ft(K){gt=K,o.hidden=K,je.hidden=!K,K?Xe():V.focus()}function fe(K=0){if(!_t||ht||t.fichas<uo)return;t.fichas-=uo,t.giros+=1;const Re=a_(t);ht=!0,S.hidden=!0,p.classList.remove("vitoria"),o.classList.remove("vitoria"),st("GIRANDO..."),Ce();const Ie=[Vi(),Vi(),Vi()],F=[Vi(),Vi(),Vi()];for(const _e of[Ie,F])_e[0]===_e[1]&&_e[1]===_e[2]&&(_e[2]=Yn[(Yn.indexOf(_e[2])+1)%Yn.length]);const rt=14,He=450,D=[1100,1600,2100],b=D.map(_e=>Math.round(rt*(_e-He)/1e3)+3),Y=Re.simbolos.map((_e,be)=>{const ne=[Ie[be],_e,F[be]];for(;ne.length<b[be]+3;)ne.push(Vi());return ne}),Z=(_e,be)=>{const ne=D[_e]-He;return be<ne?b[_e]-rt*be/1e3:3*(1-Math.min(1,(be-ne)/He))**3},le=()=>{const _e=performance.now(),be=[!1,!1,!1],ne=[-1,-1,-1];let me=!1;const Ge=n_(t);for(const Le of m)Le.classList.add("girando");const Ke=Le=>{const Fe=Math.max(0,Le-_e);for(let We=0;We<3;We++)if(!be[We])if(Fe>=D[We])be[We]=!0,m[We].classList.remove("girando"),ce(We,Y[We],0),nc(t,150-We*12,.13,.11),Ar(t,1100+We*350,.06,.09),Ai(t,330+We*110,.1,"square",.025);else{const tt=Z(We,Fe);ce(We,Y[We],tt);const ze=Math.floor(tt);ze!==ne[We]&&(ne[We]>=0&&Ar(t,1500+We*450,.022,.05),ne[We]=ze)}!me&&Fe>=D[2]-He&&(me=!0,Ge?.sair(He/1e3+.1)),be.every(Boolean)?Ae(Re):requestAnimationFrame(Ke)};requestAnimationFrame(Ke)};K>0?setTimeout(le,K):le()}function Me(K){const Re=Math.min(10,Math.max(2,Math.ceil(K/25)));for(let Ie=0;Ie<Re;Ie++){const F=a("i","moeda caindo");F.style.left=`${14+Math.random()*68}%`,F.style.animationDelay=`${Ie*.09}s`,F.addEventListener("animationend",()=>F.remove()),ie.append(F),Ar(t,3400+Math.random()*900,.04,.05,.55+Ie*.09)}}function Ae(K){if(ht=!1,t.fichas+=K.fichas,t.semTrio=K.tipo==="trio"?0:t.semTrio+1,K.skin&&t.skins.push(K.skin.id),i(),K.fichas>0&&Me(K.fichas),K.tipo==="trio"?(st(`TRIO! +${K.fichas}`,"ganhou"),p.classList.add("vitoria"),o.classList.add("vitoria"),[523,659,784,1047].forEach((Re,Ie)=>Ai(t,Re,.14,"square",.05,Ie*.11))):K.tipo==="par"?(st(`PAR! +${K.fichas}`,"par"),Ai(t,523,.1),Ai(t,659,.1,"square",.04,.1)):st(t.semTrio>=af?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),K.skin){S.replaceChildren(),S.style.setProperty("--r",co[K.skin.raridade].cor);const Re=Js.find(F=>F.id===K.skin.cat).nome;S.append(a("b",null,"NOVA SKIN!"),a("span",null,`${Re}: ${K.skin.nome} (${co[K.skin.raridade].nome})`));const Ie=a("button","cas-mini","EQUIPAR");Ie.onclick=()=>{Pe(K.skin),Ie.disabled=!0,Ie.textContent="OK"},S.append(Ie),S.hidden=!1,[784,988,1175,1568].forEach((F,rt)=>Ai(t,F,.18,"triangle",.06,.5+rt*.12))}Ce()}function we(){if(!(!_t||ht||t.fichas<uo)){ve.classList.add("puxada"),o.classList.add("puxando"),setTimeout(()=>{ve.classList.remove("puxada"),o.classList.remove("puxando")},1150);for(let K=0;K<5;K++)Ar(t,2600-K*150,.03,.07,.07+K*.045);nc(t,95,.2,.15,.34),Ar(t,900,.07,.1,.34),nc(t,330,.1,.05,.76),Ar(t,2200,.05,.06,.9),fe(360)}}function Se(){_t||(_t=!0,s.classList.add("aberto"),de.hidden=!0,ft(!1),Ce(),V.focus())}function R(){!_t||ht||(_t=!1,s.classList.remove("aberto"))}V.onclick=()=>fe(),ve.onclick=we,_.onclick=()=>{de.hidden=!de.hidden,Ce()},L.onclick=()=>ft(!0),f.onclick=R,re.onclick=()=>{t.fichas+=gd,i(),Ce(),st("FICHAS DE CORTESIA!"),Ai(t,880,.1)},z.onclick=()=>{t.som=!t.som,i(),Ce(),Ai(t,660,.06)},s.addEventListener("pointerdown",K=>{K.target===s&&R()}),window.addEventListener("keydown",K=>{_t&&(K.code==="Escape"?(K.preventDefault(),gt?ft(!1):R()):K.code==="Space"&&!gt&&![L,_,z,re,f].includes(document.activeElement)?(K.preventDefault(),we()):K.code==="KeyC"&&(K.preventDefault(),ft(!gt)))},!0);for(let K=0;K<3;K++)he(K,[Vi(),Yn[K*2%Yn.length],Vi()]);return Ce(),n({...t.equipadas}),{abrir:Se,fechar:R,estaAberto:()=>_t,adicionarFichas:K=>{t.fichas+=K,i(),Ce()},bip:(...K)=>Ai(t,...K),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Ce(),t.som&&Ai(t,660,.06),t.som)}}function bn(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,f,c){a(c),i.fillRect(r,s,o,f)},disco(r,s,o,f){a(f);for(let c=-o-1;c<=o+1;c++)for(let u=-o-1;u<=o+1;u++)u*u+c*c<=o*o+.5&&i.fillRect(r+u,s+c,1,1)},elipse(r,s,o,f,c){a(c);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/f;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=f+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,E]=r[d],[v,x]=r[p];E>u!=x>u&&c<(v-m)*(u-E)/(x-E)+m&&(h=!h)}h&&i.fillRect(f,o,1,1)}},linha(r,s,o,f,c){a(c);const u=Math.max(Math.abs(o-r),Math.abs(f-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(f-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,f=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,c=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!f(h,u)&&(f(h+1,u)||f(h-1,u)||f(h,u+1)||f(h,u-1))&&c.push([h,u]);a(r);for(const[u,h]of c)i.fillRect(u,h,1,1);return this}}}function Pf(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function Ot(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const xd=n=>n*n*(3-2*n);function Zn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=xd(n-i),s=xd(e-a),o=Ot(i,a,t),f=Ot(i+1,a,t),c=Ot(i,a+1,t),u=Ot(i+1,a+1,t);return o+(f-o)*r+(c-o)*s+(o-f-c+u)*r*s}const If=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Vh=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function o_(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=bn(a,r),o=a/2,f=r/2,c=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(f+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};c(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(Ot(d,e,1)-.5)*1.3,y:(Ot(d,e,2)-.5)*1.3,r:.12+Ot(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-f)/t,E=p*p+m*m;if(E>1)continue;const v=Math.sqrt(1-E),A=p*-.5+m*-.55+v*.67+(If[h%4*4+d%4]-.5)*.24;let P=A<.1?0:A<.4?1:A<.68?2:3,y=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+Zn(p*1.6+e,m*3,5)*2.2)>.15&&(y=n.palB),n.terra&&Zn(p*2.4+e,m*2.4,7)>.52&&(y=n.palB);let S;n.nuvens&&Zn(p*3+e,m*3,9)>.62&&(S=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][P]),u.some(T=>(p-T.x)**2+(m-T.y)**2<T.r*T.r)&&(P=Math.max(0,P-1)),n.lava&&Math.abs(Zn(p*3.2+e,m*3.2,11)-.5)<.035&&(S=P>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,S||y[P])}return c(!0),s.contorno("#0b1026").c}const s_=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],l_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],c_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],Sn=(n,e,t)=>(Zn(n,e,t)*.5+Zn(n*2,e*2,t+1)*.25+Zn(n*4,e*4,t+2)*.125+Zn(n*8,e*8,t+3)*.0625)/.9375;function qn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=t(f,o,(f+.5)/n*2-1,(o+.5)/e*2-1);if(!c)continue;const u=Math.min(f,n-1-f,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<If[o%4*4+f%4])continue;const h=(o*n+f)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=c[3]}return a.putImageData(r,0,0),i}const yn=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(If[t%4*4+e%4]-.5)*.9+.5))),Pn=(n,e,t)=>[...n[t-1],e[t-1]];function di(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function ac(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(Ot(r,t,1)*n.width),Math.floor(Ot(r,t,2)*n.height),1,1)}function f_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[f,c]=n[r];o>t!=c>t&&e<(f-s)*(t-o)/(c-o)+s&&(i=!i)}return i}const u_={orion(){const n=qn(150,112,(e,t,i,a)=>{const r=i*1.18+(Sn(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(Sn(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),f=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),c=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=Sn(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=yn(Math.min(1,(o*.9+f+c)*(.3+u*1.2)+h),e,t,5);return d?Pn([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});ac(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])di(n,e,t,1);return di(n,.2,.2,3,"#bcd0ff"),di(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=qn(130,124,(t,i,a,r)=>{for(let c=0;c<n.length;c++){const u=n[c],h=(Sn(r*2.5+c*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(Sn(a*6+c,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const E=(u.cx+h+d-a)/(2*d),v=Sn(a*9,r*9,70),x=E<.14+v*.12?[235,160,70]:E<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[x[0],x[1],x[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const E=yn((.16-m)/.16*.9,t,i,3);if(E)return Pn([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],E)}}const s=Sn(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),f=yn(o,t,i,3);return f?Pn(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],f):null});return ac(e,25,9),di(e,.49,.13,2,"#bff6ff"),di(e,.24,.4,1,"#ffe0b0"),di(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=qn(110,104,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(o/.92,f/.74);if(c>1||c>.78&&Zn(o*9,f*9,93)<(c-.78)*4.5)return null;const u=1-Math.abs(Zn(o*8+3,f*8,90)-.5)*2,h=1-Math.abs(Zn(o*14,f*14+5,91)-.5)*2;if(u>.85&&c>.3)return[255,130,55,240];if(h>.92&&c>.2)return[120,200,255,220];const d=yn((1-c)*.7*(.4+Sn(o*3,f*3,92)),i,a,3);return d?Pn([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return di(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=qn(112,112,(t,i,a,r)=>{if(f_(n,t+.5,i+.5))return[10,5,18,255];const s=Sn(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),f=yn(o,t,i,4);return f?Pn([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],f):null});return ac(e,30,13),di(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return qn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,f=Math.hypot(s,o),c=Math.atan2(o,s),u=.5+.5*Math.sin(2*c-f*10),h=Math.max(0,1-f)*(.25+.75*u)*(.5+Sn(s*4,o*4,110)),d=Math.abs(f-.55)<.06?.5*Zn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-f*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=yn(p,t,i,5);return m?Pn([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return qn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*Zn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=yn(a*1.1+r+s,n,e,5);return o?Pn([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=qn(110,100,(t,i,a,r)=>{let s=0;for(const[f,c,u]of n)s+=Math.exp(-Math.hypot((t/110-f)*1.1,i/100-c)/.14*(7-u*.4));const o=yn(Math.min(1,s*(.4+Sn(a*3,r*3,125))),t,i,4);return o?Pn([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)di(e,t,i,a,"#cfe0ff");return e},helice(){const n=qn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*Sn(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*Sn(i*6,a*6,121),f=Math.exp(-(((r-.62)/.13)**2)),c=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=yn(Math.min(1,(f+c+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return di(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=qn(150,100,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(r,s),u=Math.exp(-((f/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*Sn(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-c*9),m=yn(Math.min(1,p+u+h+d),i,a,5);return m?Pn([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return di(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(qn(180,110,(s,o)=>{const f=s+.5-90,c=o+.5-55,u=Math.hypot(f,c);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=Sn(f*.06-r*.18,c*.4,140);let d=0;const p=5.5*(1-Math.abs(f)/95);if(Math.abs(f)>17&&Math.abs(f)<90&&Math.abs(c)<p&&(d=1-Math.abs(c)/p),u>19.5&&u<36&&c<0&&Math.abs(c)>Math.abs(f)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&c>0&&c>Math.abs(f)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=yn(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return v?Pn([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-f/95),E=yn(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return E?Pn([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],E):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),f=Math.cos(.5),c=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,E,v,x])=>{let A=m*s-x*o;const P=m*o+x*s;let y=E*f-v*c,S=E*c+v*f;const T=A*u+S*h;S=-A*h+S*u,A=T;const I=2.6/(2.6-P*.9),_=3.6/(3.6-S*I*.7);return{x:124/2+A*I*_*19,y:124/2+y*I*_*19,w:P}}),p=bn(124,124);for(const[m,E]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${E})`);for(const[m,E]of i){const v=(d[m].w+d[E].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[E].x),Math.round(d[E].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),f=Math.sin(s);a.push(qn(150,150,(c,u)=>{const h=c+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*f,E=-h*f+d*o,v=1.1+.07*Math.abs(m),x=Math.abs(m)<70?Math.exp(-((E/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,A=Math.exp(-p/11)*.8,P=Math.abs(p-34)<.8?.35:0,y=yn(Math.min(1,x+A+P),c,u,5);return y?Pn([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],y):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(qn(120,120,(s,o)=>{const f=s+.5-60,c=o+.5-60,u=Math.hypot(f,c),h=Math.atan2(c,f);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const E=yn(Math.exp(-(u-47.5)/3)*.55,s,o,2);return E?Pn([[120,90,220],[190,160,255]],[60,110],E):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=yn(Math.min(1,p),s,o,4);return Pn([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+Ot(s,150,1)*146,10+Ot(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,f],[c,u])=>{const h=c-o,d=u-f,p=Math.max(0,Math.min(1,((r-o)*h+(s-f)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(f+d*p))};return qn(170,124,(r,s,o,f)=>{let c=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);c+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+Sn(r*.2,s*.2,151))}for(const[h,d]of t)c+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=yn(Math.min(1,c),r,s,4);return u?Pn([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},d_={},h_=n=>d_[n]??=u_[n](),Fr=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let p_=null;const kh=()=>p_??=Vh.map((n,e)=>o_(n,e*13+3));function m_(n,e){const t=kh(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,f=-1,c=1;function u(m){if(c<1&&(c=Math.min(1,c+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const E=.35+Math.random()*.3,v=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(E)*v,vy:Math.sin(E)*v,vida:0,max:1.4})}for(const E of r)E.x+=E.vx*m,E.y+=E.vy*m,E.vida+=m;r=r.filter(E=>E.vida<E.max&&E.x<n+20&&E.y<e+20)}function h(m,E,v,x,A,P){const y=m*v,S=E*v,T=Math.floor((y-n/2-A)/x),I=Math.floor((y+n/2+A)/x),_=Math.floor((S-e/2-A)/x),w=Math.floor((S+e/2+A)/x);for(let L=_;L<=w;L++)for(let U=T;U<=I;U++)P(U,L,U*x-y+n/2,L*x-S+e/2)}function d(m,E,v,x,A){const P=Fr[A%Fr.length],y=A%Fr.length;m.fillStyle=P.base,m.fillRect(0,0,n,e),h(E,v,.06,400,160,(S,T,I,_)=>{if(Ot(S,T,90+y)>.7)return;const w=70+Ot(S,T,91)*80,L=P.nebulosas[Math.floor(Ot(S,T,92)*P.nebulosas.length)],U=I+Ot(S,T,93)*400,V=_+Ot(S,T,94)*400;for(let q=0;q<5;q++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(U),Math.round(V),Math.max(0,w*(1-q*.18)),0,Math.PI*2),m.fill()}),h(E,v,.1,360,170,(S,T,I,_)=>{if(Ot(S,T,200+y*3)>.8)return;const w=h_(P.objetos[Math.floor(Ot(S,T,201)*P.objetos.length)]),L=Array.isArray(w)?w[Math.floor(x*w.fps+Ot(S,T,204)*w.length)%w.length]:w,U=I+(.1+Ot(S,T,202)*.6)*360,V=_+(.1+Ot(S,T,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(U-L.width/2),Math.round(V-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${P.tom}, 0.05)`,m.fillRect(0,0,n,e),l_.forEach((S,T)=>{m.globalAlpha=S.alfa,h(E,v,S.f,S.cel,130,(I,_,w,L)=>{if(Ot(I,_,S.semente)>S.prob*(P.planetas??1))return;const U=Math.floor(Ot(I,_,S.semente+1)*t.length),V=S.escalaMax>1&&Vh[U].r<=15&&Ot(I,_,S.semente+2)<.4?2:1,q=t[U],z=w+(.15+Ot(I,_,S.semente+3)*.7)*S.cel,J=L+(.15+Ot(I,_,S.semente+4)*.7)*S.cel;m.drawImage(q,Math.round(z-q.width*V/2),Math.round(J-q.height*V/2),q.width*V,q.height*V)});for(const I of c_){if(I.camada!==T)continue;const _=t[I.tipo],w=I.x-E*S.f+n/2,L=I.y-v*S.f+e/2;m.drawImage(_,Math.round(w-_.width*I.escala/2),Math.round(L-_.height*I.escala/2),_.width*I.escala,_.height*I.escala)}m.globalAlpha=1});for(const S of s_)h(E,v,S.f,S.cel,4,(T,I,_,w)=>{for(let L=0;L<S.n;L++){const U=Math.round(_+Ot(T,I,L*7+1)*S.cel),V=Math.round(w+Ot(T,I,L*7+2)*S.cel);if(U<-2||U>n+2||V<-2||V>e+2)continue;const q=S.cores[Math.floor(Ot(T,I,L*7+3)*S.cores.length)],z=Ot(T,I,L*7+4)*6.28,J=1+Ot(T,I,L*7+5)*2.2;(!S.pisca||Math.sin(x*J+z)>-.35)&&(m.fillStyle=q,m.fillRect(U,V,1,1),S.grande&&Ot(T,I,L*7+6)<S.grande&&(m.fillRect(U-1,V,3,1),m.fillRect(U,V-1,1,3)))}})}function p(m,E,v,x,A=0){A!==o&&(f=o,o=A,c=f<0?1:0),c<1&&f>=0?(d(m,E,v,x,f),d(a,E,v,x,o),m.globalAlpha=c,m.drawImage(i,0,0),m.globalAlpha=1):d(m,E,v,x,o);for(const P of r){const y=1-P.vida/P.max;for(let S=0;S<12;S++){const T=Math.round(P.x-P.vx*S*.011),I=Math.round(P.y-P.vy*S*.011);m.globalAlpha=Math.max(0,y*(1-S/12)),m.fillStyle=S<2?"#ffffff":"#8bd3ff",m.fillRect(T,I,S<2?2:1,S<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const Bn=520,Ba=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function g_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const E=m.getContext("2d");return E.drawImage(p,0,0),E.globalCompositeOperation="source-atop",E.fillStyle="rgba(70, 40, 110, 0.55)",E.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},E=P=>Ba(d,p,300+P),v=d*Bn,x=p*Bn;if(E(1)>=.5)return m;const A=E(2);if(A<.22){const P=kh(),y=Math.floor(E(3)*P.length),S=P[y],T=(S.height-2)/2,I=T>=13?2:3,_=v+90+E(4)*(Bn-180),w=x+90+E(5)*(Bn-180);if(r(_,w,70)){const L=T*I*.92;m.planetas.push({x:_,y:w,spr:S,esc:I}),m.circ.push({x:_,y:w,r:L})}}else if(A<.62){const P=E(5)*Math.PI*2,y=150+E(6)*130,S=(E(7)-.5)*70,T=v+120+E(8)*(Bn-240),I=x+120+E(9)*(Bn-240),_=(.2+.6*E(10))*y,w=E(11)<.5?(_/y+.4)%1*y:-999,L=Math.floor(y/13);for(let U=0;U<=L;U++){const V=U/L,q=V*y;if(Math.abs(q-_)<24||Math.abs(q-w)<24)continue;const z=Math.sin(V*Math.PI)*S,J=T+Math.cos(P)*q-Math.sin(P)*z,re=I+Math.sin(P)*q+Math.cos(P)*z;if(!r(J,re,10))continue;const W=Ba(d*31+U,p,330)<.6?0:1,ve=[8,10][W];m.rochas.push({x:J,y:re,tam:W}),m.circ.push({x:J,y:re,r:ve*.85})}}else{const P=70+E(11)*50,y=v+P+E(12)*(Bn-2*P),S=x+P+E(13)*(Bn-2*P);if(r(y,S,P)){const T=Array.from({length:34},(I,_)=>{const w=Ba(d,p,400+_)*Math.PI*2,L=Math.sqrt(Ba(d,p,440+_))*P*.95;return{dx:Math.cos(w)*L,dy:Math.sin(w)*L,tam:1+Math.floor(Ba(d,p,480+_)*3),cor:Ba(d,p,520+_)<.5?"#9a8a7a":"#6a5a50",fase:Ba(d,p,560+_)*6.28}});m.zonas.push({x:y,y:S,r:P,pedrinhas:T})}}return m}const o=(d,p)=>{const m=d+","+p;let E=i.get(m);return E||(E=s(d,p),i.set(m,E)),E};function f(d,p,m){const E=Math.floor(d/Bn),v=Math.floor(p/Bn);for(let x=-1;x<=1;x++)for(let A=-1;A<=1;A++)m(o(E+A,v+x))}function c(d,p){let m=1;return f(d,p,E=>{for(const v of E.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,E=0){let v=!1;return f(d.x,d.y,x=>{for(const A of x.circ){const P=d.x-A.x,y=d.y-A.y,S=A.r+p;if(Math.abs(P)>S||Math.abs(y)>S)continue;const T=Math.hypot(P,y)||.001;if(T>=S)continue;const I=P/T,_=y/T;if(d.x=A.x+I*S,d.y=A.y+_*S,v=!0,m&&E>0){const w=-_,L=I,U=Math.sign((m.x-d.x)*w+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=w*U*E,d.y+=L*U*E}}}),v}function h(d,p,m,E,v,x){const A=Math.floor((p-200)/Bn),P=Math.floor((p+E+200)/Bn),y=Math.floor((m-200)/Bn),S=Math.floor((m+v+200)/Bn),T=(I,_,w)=>I>p-w&&I<p+E+w&&_>m-w&&_<m+v+w;for(let I=y-1;I<=S+1;I++)for(let _=A-1;_<=P+1;_++){const w=o(_,I);for(const L of w.zonas)if(T(L.x,L.y,L.r+10)){for(let U=0;U<4;U++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-U*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const U of L.pedrinhas)d.fillStyle=U.cor,d.fillRect(Math.round(L.x+U.dx+Math.sin(x*.6+U.fase)*2),Math.round(L.y+U.dy+Math.cos(x*.5+U.fase)*2),U.tam,U.tam)}for(const L of w.planetas)T(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of w.rochas){if(!T(L.x,L.y,20))continue;const U=a[L.tam];d.drawImage(U,Math.round(L.x-U.width/2),Math.round(L.y-U.height/2))}}}return{fatorLento:c,empurrar:u,desenhar:h,celula:o}}const wi="#0b1026",Zs=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],Ma=n=>({quadros:n,brancos:n.map(Pf)});function x_(n){const e=Zs[n%Zs.length],t=(c,u,h,d)=>{c.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),c.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=Ma([0,1].map(c=>{const u=bn(16,16),h=c?10:9.5;if(u.elipse(8,h,c?6.5:6,c?3.6:4.3,e.slime[0]),u.elipse(8,c?11:10.8,c?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,c?7:6,e.slime[1]);return e.chifres&&t(u,4,10,c?3:2),u.retangulo(4,c?8:7,2,2,e.olho),u.retangulo(9,c?8:7,2,2,e.olho),u.pixel(5,c?9:8,"#1b1020"),u.pixel(10,c?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,c?6:5,2,2,e.olho),u.pixel(8,c?7:6,"#1b1020")),u.contorno(wi).c})),a=Ma([0,1].map(c=>{const u=bn(18,16),h=c?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(wi).c})),r=Ma([0,1].map(c=>{const u=bn(20,20);u.disco(10,12+c,7,e.ogro[0]),u.disco(10,13+c,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+c],[5,1+c],[7,7+c]],h),u.poligono([[13,7+c],[15,1+c],[17,7+c]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+c,e.ogro[1]);return u.retangulo(5,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+c,"#1b1020"),u.pixel(11,11+c,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+c,2,2,e.olho),u.pixel(10,9+c,"#1b1020")),u.retangulo(7,15+c,6,2,"#1b1020"),u.pixel(8,15+c,"#ffffff"),u.pixel(11,15+c,"#ffffff"),u.contorno(wi).c})),s=Ma([0,1].map(c=>{const u=bn(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+c)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(wi).c})),o=Ma([0,1].map(c=>{const u=bn(16,17);return u.pixel(8,0,c?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(wi).c})),f=Ma([0,1].map(c=>{const u=bn(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=c?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(wi).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:f}}function v_(n){const e=Zs[n%Zs.length];return Ma([0,1].map(t=>{const i=bn(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(wi).c}))}function M_(){return Ma([0,1].map(n=>{const e=bn(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(wi).c}))}function rc(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function __(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,f)=>{const c=f/11*Math.PI*2,u=n*(.8+rc(e*7+1,f)*.35);return[i+Math.cos(c)*u,a+Math.sin(c)*u]}),s=(o,f,c)=>r.map(([u,h])=>[i+(u-i)*o+f,a+(h-a)*o+c]);return{r:n,quadros:[0,1,2].map(o=>{const f=bn(t,t);f.poligono(r,"#5a606c"),f.poligono(s(.88,-.7,-.7),"#7a808d"),f.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let c=0;c<3+e;c++)f.disco(Math.round(i+(rc(e,c+20)-.5)*n*1.2),Math.round(a+(rc(e,c+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(f.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),f.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(f.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),f.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),f.contorno(wi).c})}})}function S_(){const n=t=>{const i=bn(12,12);return t(i),i.contorno(wi).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,f=s%2?a:i;return[6+Math.cos(o)*f,6+Math.sin(o)*f]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function y_(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let f=-r;f<=r;f++)for(let c=-r;c<=r;c++){const u=Math.hypot(c,f);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(f,c)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+c,o+f,1,1)}n.globalAlpha=1}const rf="#0b1026",b_=n=>({quadros:n,brancos:n.map(Pf)}),Mt=(n,e,t)=>b_([0,1].map(i=>{const a=bn(n,e);return t(a,i),a.contorno(rf).c})),E_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((f,c)=>{const u=t[f];u&&n.retangulo(a+c*i,r+o*i,i,i,u)})),ma=(n,e,t,i,a,r=1,s=0,o=0)=>Mt(n,e,(f,c)=>E_(f,c?i:t,a,r,s,o)),Ra=(n,e)=>n.map(([t,i])=>[e-1-t,i]),Hh=(n,e,t,i)=>e.forEach(([a,r,s,o],f)=>n.linha(a,r,s+((f+t)%2?1:0),o,i)),vd=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],Md=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function A_(){const n=f=>({x:f,y:"#ffffff"}),e=ma(16,12,vd,Md,n("#5be37a"),1,2,2),t=ma(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=ma(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=ma(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=ma(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=ma(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=ma(56,38,vd,Md,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function T_(){const n=ma(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=Mt(18,14,(o,f)=>{const c=f?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=f?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(c,"#a56bff"),o.poligono(Ra(c,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(Ra(u,18),"#d1b0ff"),o.disco(f?4:3,f?10:4,1,"#ffe14a"),o.disco(f?13:14,f?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=Mt(20,18,(o,f)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const c of[0,1,2]){const u=8+c*3;o.linha(3,u,1,u+1+(f?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(f?0:2),"#1b2a2a")}}),i=Mt(14,17,(o,f)=>{const c=f?1:0;o.elipse(3,6+c,3,1.6,"#bfe6ff"),o.elipse(10,6+c,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=Mt(16,17,(o,f)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,f?"#ff3b4a":"#ffd23f"),o.pixel(10,2,f?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,rf),o.pixel(13,7,rf),Hh(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],f,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=Mt(12,10,(o,f)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const c=f?4:1;o.elipse(2.5,c+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,c+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=Mt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*6;o.linha(10,u,2,u+6+(f?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(f?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(f?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(f?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,f?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,f?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function w_(){const n=Mt(16,16,(o,f)=>{const c=f?0:1;o.disco(8,10+c,6,"#f4efe0"),o.disco(8,10+c,4,"#ff9a3a"),o.disco(8,10+c,2,"#f4efe0"),o.pixel(4,8+c,"#ff9a3a"),o.disco(9,3+c,3,"#f4efe0"),o.pixel(10,3+c,"#1b1020"),o.pixel(10,4+c,"#1b1020"),o.retangulo(7,2+c,4,1,"#8b93a8"),o.linha(8,0+c,8,1+c,"#8b93a8")}),e=Mt(18,16,(o,f)=>{const c=f?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-c/2],[1,7-c/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-c/2],[17,7-c/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+c/2],[1,11+c/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+c/2],[17,11+c/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-c/2],[16,5-c/2],[1,10+c/2],[16,10+c/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=Mt(20,20,(o,f)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const c of[7,14]){const u=f?1:-1;o.retangulo(c,10,2,5,"#aab3c8"),o.retangulo(c+u,15,2,4,"#8b93a8"),o.retangulo(c+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=Mt(14,17,(o,f)=>{const c=f?1:0;o.disco(7+c,6,5,"#f4f4fa"),o.poligono([[3+c,5],[6+c,5],[5+c,8],[3+c,7]],"#1b1020"),o.poligono([[11+c,5],[8+c,5],[9+c,8],[11+c,7]],"#1b1020"),o.retangulo(6+c,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=Mt(16,17,(o,f)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+f,"#ffd23f"),o.retangulo(12,14,2,2+f,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,f?"#ff3b4a":"#ffd23f")}),r=Mt(12,11,(o,f)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,f?"#8bd3ff":"#ffffff")}),s=Mt(56,38,(o,f)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let c=12;c<44;c+=4)o.pixel(c,22,"#5a6176"),o.pixel(c+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,f?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[c,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(c,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,f?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function R_(){const n=Mt(16,14,(o,f)=>{for(let c=0;c<5;c++)o.disco(3+c*2,9+Math.round(Math.sin(c*1.2+f*2.4)*2),2,c%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=Mt(18,16,(o,f)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const c=f?0:1;o.retangulo(8+c,0,1,2,"#ffffff"),o.retangulo(8+c,14,1,2,"#ffffff"),o.retangulo(0,8-c,2,1,"#ffffff"),o.retangulo(16,8-c,2,1,"#ffffff")}),t=Mt(22,18,(o,f)=>{Hh(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],f,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,f?5:6,0,"#4a2a10"),o.linha(13,2,f?17:16,0,"#4a2a10")}),i=Mt(14,17,(o,f)=>{const c=f?1:0;o.elipse(7,6+c,5.5,6,"#a8b0b8"),o.elipse(7,4+c,4,3,"#c0c8d0"),o.poligono([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],"#0b1026"),o.poligono(Ra([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],14),"#0b1026"),o.retangulo(6,14+c,2,3,"#8a929a"),o.retangulo(4,12+c,6,2,"#8a929a"),o.pixel(3,6+c,"#ffffff"),o.pixel(10,6+c,"#ffffff")}),a=Mt(16,17,(o,f)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,f?"#ffffff":"#8bd3ff"),o.pixel(14,7,f?"#8bd3ff":"#ffffff")}),r=Mt(12,8,(o,f)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const c of[3,5,7])o.pixel(c+(f?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=Mt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*5;o.linha(12,u,2,u+8+(f?3:0),"#3a2008"),o.linha(44,u,54,u+8+(f?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(f?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(f?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,f?12:16,0,"#4a2a10"),o.linha(32,3,f?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function C_(){const n=Mt(14,16,(o,f)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const c=f?3:1;o.poligono([[2,6],[4,6-c],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-c],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-c],[9,5]],"#a09060"),f&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=Mt(18,10,(o,f)=>{for(let c=0;c<6;c++)o.disco(15-c*2.5,5+Math.round(Math.sin(c*1.4+f*3)*2),c===0?2:1,c===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=Mt(20,20,(o,f)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const c of[4,6,13,15])o.linha(c,3,c+(c<10?-2:2),11+(f?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,f?"#ff3b4a":"#7a1f2a")}),i=Mt(14,17,(o,f)=>{const c=f?1:0;o.poligono([[10,0+c],[13,4+c],[6,9+c],[3,6+c]],"#1f2a3a"),o.poligono([[10,1+c],[12,4+c],[8,4+c]],"#4a6a8a"),o.poligono([[3,6+c],[6,9+c],[5,11+c],[2,9+c]],"#2a3a4a"),o.pixel(3,9+c,"#ffffff"),o.pixel(5,10+c,"#ffffff"),o.pixel(7,10+c,"#ffffff"),o.retangulo(5,11+c,5,5,"#1f2a3a"),o.linha(10,11+c,13,15,"#1f2a3a")}),a=Mt(16,17,(o,f)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,f?"#7dff3a":"#3a9a1f");for(const c of[5,7,9])o.pixel(c,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(f?7:8,14,"#7dff3a"),o.pixel(f?8:7,15,"#7dff3a")}),r=Mt(12,10,(o,f)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const c of[1,3,8,10])o.linha(c,3,c<6?c-1:c+1,8+(f?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=Mt(56,38,(o,f)=>{for(const c of[8,14,42,48])o.linha(c<28?c+6:c-6,20,c,34+(f?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const c of[18,24,32,38])o.linha(c,4,c+(c<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let c=21;c<36;c+=2)o.pixel(c,20,"#ffffff"),o.pixel(c,24,"#ffffff");o.retangulo(25,22,6,2,f?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function P_(){const n=Mt(16,14,(o,f)=>{const c=f?0:1;o.disco(8,8+c,6,"#ffe14a"),o.disco(7,7+c,3,"#fff08a"),o.pixel(5,6+c,"#1b1020"),o.pixel(10,6+c,"#1b1020"),o.poligono([[7,8+c],[9,8+c],[8,10+c]],"#ff9a3a"),o.pixel(8,2+c,"#ffe14a"),o.pixel(9,1+c,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=Mt(18,14,(o,f)=>{const c=f?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(c,"#2a2a3a"),o.poligono(Ra(c,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=Mt(20,20,(o,f)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const c of[7,10,13])o.pixel(c,14+(f?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=Mt(14,17,(o,f)=>{const c=f?3:0;o.poligono([[7,3],[0,8-c],[3,10],[7,9]],"#ff7a2a"),o.poligono(Ra([[7,3],[0,8-c],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=Mt(16,17,(o,f)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,f?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=Mt(12,9,(o,f)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const c=f?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(c,"#7a4a2a")}),s=Mt(56,38,(o,f)=>{const c=f?0:8;o.poligono([[28,14],[2,4+c],[10,14+c],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+c],[46,14+c],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+c],[16,17+c],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+c],[40,17+c],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const Hi=[{nome:"SLIMES",criar:()=>({m:x_(0),chefe:v_(0)})},{nome:"INVASORES",criar:A_},{nome:"BICHARADA",criar:T_},{nome:"GALÁXIA",criar:w_},{nome:"AGENTES",criar:R_},{nome:"XENO",criar:C_},{nome:"REVOADA",criar:P_}],Wh=(n,e,t,i,a,r,s,o=1.5)=>{let f=e,c=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(f,c,d,p,r),n.linha(f+1,c,d+1,p,r),f=d,c=p}return[f,c]},I_=()=>Mt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=Wh(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),L_=()=>Mt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),D_=()=>Mt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),N_=()=>Mt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),U_=()=>Mt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),O_=()=>Mt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=Wh(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),Tr=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:M_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:I_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:L_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:D_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:N_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:U_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:O_}],F_=()=>Mt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),B_=()=>Mt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),z_=()=>Mt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(Ra([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),G_=()=>Mt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(Ra([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(Ra([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),V_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],za=[...Hi.map((n,e)=>({nome:V_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:F_},{nome:"DISCO-MÃE",criar:B_},{nome:"NAVE-CAVEIRA",criar:z_},{nome:"CRISTAL VIVO",criar:G_}],Bt=320,Gt=180,In=Bt/2,fa=Gt/2,ua=6,Xh="curriculo-arcade-v1",k_=12,pt={x0:10,x1:Bt-10,y0:26,y1:Gt-10},hi={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Ps=70,H_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},Ks={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},W_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{Wi(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{Wi(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{Wi(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{Wi(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{Wi(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{Wi(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{Wi(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{Wi(n,"drift")}},{id:"a_normal",grupo:"ARMA · CANHÃO",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Canhão · evolução",desc:"Melhora o calibre e o impacto exclusivos do canhão principal.",max:4,peso:1.3,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA · LASER",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta alcance, bateria e eficiência próprios do laser.",max:4,peso:1.5,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA · MÍSSIL",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores e um míssil extra nos níveis avançados.",max:4,peso:1.5,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA · ORBES",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas e rotação própria mais rápida.",max:4,peso:1.5,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA · TURBO",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Aumenta a autonomia e a força exclusiva do hiperpropulsor.",max:4,peso:1.5,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA · CURA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Aumenta o reparo e reduz a espera do nanorreparo.",max:4,peso:1.5,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA · ESCUDO",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração própria da barreira de fase.",max:4,peso:1.5,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA · SALTO",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e carrega a ruptura mais rápido.",max:4,peso:1.5,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA · DRIFT",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Aumenta a arrancada e a trilha de fogo próprias do drift.",max:4,peso:1.5,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"NAVE · DANO",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Ponto de dano",desc:"+12% de dano para TODO o arsenal da nave.",max:6,peso:4.4,aplicar:n=>{n.danoGlobal*=1.12}},{id:"reparo",grupo:"NAVE · VIDA",raridade:"COMUM",icone:"♥",cor:"#ff6b7a",nome:"Ponto de vida",desc:"+1 de vida máxima e recupera 1 ponto agora.",max:6,peso:4.4,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"armadura",grupo:"NAVE · ARMADURA",raridade:"INCOMUM",icone:"⬢",cor:"#c9cdf5",nome:"Ponto de armadura",desc:"-6% de dano recebido pela nave inteira, até o limite de 50%.",max:6,peso:4.2,aplicar:n=>{n.armadura+=1}},{id:"motor",grupo:"NAVE · VELOCIDADE",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Ponto de velocidade",desc:"+10% de velocidade e resposta da nave.",max:6,peso:4.4,aplicar:n=>{n.velNave*=1.1}},{id:"recarga_geral",grupo:"NAVE · RECARGA",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Ponto de recarga",desc:"+10% de cadência e recarga para TODAS as armas e sistemas.",max:6,peso:4.2,aplicar:n=>{n.recargaGlobal*=1.1}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:2.1,aplicar:n=>{n.raioIma*=1.45}},{id:"coletor",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:2.3,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:2.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"NAVE · REPARO",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:2.2,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}}],qh=Object.fromEntries(Object.entries(Ks).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),X_=Object.fromEntries(Object.entries(Ks).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function Wi(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${qh[e]}!`,n.aviso=3.6,!0)}const Lf=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga para todas as armas e sistemas",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Amplificador bélico",desc:"+0,25 de dano base para todo o arsenal",max:5,custo:n=>8+n*6},{parte:"NÚCLEO DE ENERGIA",id:"cadencia",nome:"Computador de recarga",desc:"+8% de cadência e recarga global",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"CASCO",id:"armadura",nome:"Blindagem",desc:"-6% de dano recebido por ponto",max:5,custo:n=>8+n*5},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],ga={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},q_=Object.entries(ga).map(([n,e])=>[n,e.peso]),Y_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],$_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Lf.map(n=>[n.id,0]))});function _d(){const n=$_();try{const e=JSON.parse(localStorage.getItem(Xh));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Lf)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function J_(){const n=(t,i,a)=>{const r=bn(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function Sd(n){const e=bn(20,20),t=2,i=(a,r,s,o,f)=>e.retangulo(a+t,r+t,s,o,f);if(i(1,7,3,2,"#ff7a59"),i(12,7,3,2,"#ff7a59"),i(7,1,2,3,"#ff7a59"),i(7,12,2,3,"#ff7a59"),n.motor>=2&&(i(2,11,2,3,"#8b93a8"),i(12,11,2,3,"#8b93a8"),e.pixel(3+t,14+t,"#ffa23a"),e.pixel(12+t,14+t,"#ffa23a")),n.motor>=4&&(i(1,4,2,3,"#8b93a8"),i(13,4,2,3,"#8b93a8")),e.disco(8+t,8+t,5,"#4aa8ff"),e.disco(8+t,8+t,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?"#7dff9a":"#8bd3ff"),e.disco(8+t,8+t,1,"#ffffff"),n.casco>=1)for(const[a,r]of[[2,2],[12,2],[2,12],[12,12]])i(a,r,2,2,"#aab3c8"),n.casco>=3&&e.pixel(a+t,r+t,"#e6e8ff");return n.ima>=1&&(e.pixel(8+t,t-1,"#ff3b4a"),n.ima>=3&&i(10,0,2,1,"#c9cdd8")),e.contorno(n.casco>=5?"#ffd23f":n.casco>=3?"#8bd3ff":"#0b1026"),{c:e.c,branca:Pf(e.c)}}function Z_({bip:n,somAtivo:e}){const t=Symbol("arcade");window.__curriculoArcadeGeracao=t,document.getElementById("arcade")?.remove();const i=(M,g,N)=>{const k=document.createElement(M);return g&&(k.className=g),N!=null&&(k.textContent=N),k},a=J_(),r=__(),s=S_(),o=g_({inicioX:In,inicioY:fa,rochasSpr:r}),f=new Map,c=new Map,u=M=>(f.has(M)||f.set(M,Tr[M].criar()),f.get(M)),h=M=>(c.has(M)||c.set(M,za[M].criar()),c.get(M)),d=new Map,p=M=>{const g=(M%Hi.length+Hi.length)%Hi.length;return d.has(g)||d.set(g,Hi[g].criar()),d.get(g)},m=.3,E=M=>{const g=new Audio("./"+M);return g.loop=!0,g.volume=m,g.preload="none",g},v=E("audio/arcade.mp3"),x=E("audio/chefe.mp3"),A=E("audio/gameover.mp3"),P={normal:v,chefe:x,fim:A};let y="normal",S=!1;function T(){if(S)return;S=!0;const M=()=>{S=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),tt&&I()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const I=()=>{e&&!e()||P[y].play().catch(T)},_=()=>{v.pause(),x.pause(),A.pause()};function w(M){if(y!==M){y=M;for(const[g,N]of Object.entries(P))g!==M&&N.pause();M!=="normal"&&(P[M].currentTime=0),I()}}let L=!1;function U(){if(!L){L=!0;for(const M of[x,A])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,L=!1})}}const V=m_(Bt,Gt);let q=Sd({casco:0,motor:0,nucleo:0,ima:0}),z=_d();const J={},re=(M,g,N)=>{const k=performance.now();k-(J[M]||0)<g||(J[M]=k,N())};function W(M){const g=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";re("acerto"+(g?"G":""),g?70:40,()=>g?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function ve(M){re("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const se=()=>{try{localStorage.setItem(Xh,JSON.stringify(z))}catch{}},ie=i("div");ie.id="arcade";const de=i("div","arc-caixa"),je=i("div","arc-topo"),Ve=document.createElement("canvas");Ve.width=Ve.height=20,Ve.className="arc-icone",Ve.getContext("2d").drawImage(q.c,0,0);const _t=i("h2",null,"NAVE ARCADE"),ht=i("div","arc-hud"),gt=i("span","arc-vidas");gt.setAttribute("role","status");const ce=i("span","arc-nivel"),he=i("span","arc-xp"),Ce=i("i");he.append(Ce),he.setAttribute("role","progressbar"),he.setAttribute("aria-label","Experiência"),he.setAttribute("aria-valuemin","0");const st=i("span"),Xe=i("span","arc-onda"),Pe=i("span","arc-efeitos"),ft=i("span","arc-moedas"),fe=i("span");ht.append(gt,ce,he,st,Xe,Pe,ft,fe);const Me=i("button","arc-pausa","II");Me.title="Pausar (Esc)",Me.setAttribute("aria-label","Pausar jogo"),Me.hidden=!0;const Ae=i("button","arc-x","X");Ae.title="Sair (Esc)",Ae.setAttribute("aria-label","Sair do jogo"),je.append(Ve,_t,ht,Me,Ae);const we=i("div","arc-tela"),Se=document.createElement("canvas");Se.width=Bt,Se.height=Gt,Se.setAttribute("role","img"),Se.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const R=Se.getContext("2d");R.imageSmoothingEnabled=!1;const K=i("div","arc-joystick");K.hidden=!0;const Re=i("i");K.append(Re);const Ie=i("div","arc-aviso");Ie.hidden=!0;const F=i("div","arc-sobre"),rt=i("div","arc-painel arc-inicio"),He=i("button","arc-btn","COMEÇAR [ESPAÇO]"),D=i("button","arc-btn sec"),b=i("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),Y=i("div","arc-objetivos");for(const[M,g,N]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const k=i("div");k.append(i("b",null,M),i("strong",null,g),i("small",null,N)),Y.append(k)}const Z=i("details","arc-regras"),le=i("summary",null,"COMO JOGAR");Z.append(le,i("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),i("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const _e=i("p","arc-recordes");rt.append(i("h3",null,"PRONTO PARA DECOLAR?"),b,Y,Z,_e,He,D);const be=i("div","arc-painel");be.hidden=!0;const ne=i("div","arc-painel");ne.hidden=!0;const me=i("button","arc-btn","CONTINUAR [ESC]"),Ge=i("button","arc-btn sec","SAIR");ne.append(i("h3",null,"PAUSADO"),me,Ge);const Ke=i("div","arc-painel");Ke.hidden=!0;const Le=i("div","of-raiz");Le.hidden=!0,F.append(rt,be,ne,Ke),we.append(Se,Ie,K,F);const Fe=i("div","arc-armas"),We=[];for(let M=1;M<=4;M++){const g=i("button","arc-arma"),N=i("b"),k=i("i");g.append(i("small",null,String(M)),N,k),g.onmousedown=ee=>ee.preventDefault(),g.onclick=()=>Hn(M),We.push({b:g,nm:N,barra:k}),Fe.append(g)}de.append(je,we,Fe,i("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),ie.append(de,Le),ie.setAttribute("role","dialog"),ie.setAttribute("aria-modal","true"),ie.setAttribute("aria-label","Nave Arcade"),document.body.append(ie);let tt=!1,ze="inicio",X=0,Be=0,ge="inicio",l=null;const Ue=new Set,ue={ativo:!1,x:In,y:fa,toque:!1,dx:0,dy:0,origemX:0,origemY:0},ut=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],Ze=M=>Math.abs(M.x-l.cx)<Bt/2+4&&Math.abs(M.y-l.cy)<Gt/2+4,Ft=M=>{let g=Math.random()*M.reduce((N,k)=>N+k[1],0);for(const[N,k]of M)if(g-=k,g<=0)return N;return M[0][0]},Et=(M,g=2.6)=>{l.avisoTxt=M,l.aviso=g};function kn(){const M=z.oficina,g=l?l.niveis:{};return{casco:M.casco+M.armadura+(g.reparo|0)+(g.armadura|0),motor:M.motor+(g.motor|0),nucleo:M.nucleo+(g.recarga_geral|0),armas:M.dano+M.lente+(g.dano_geral|0),ima:M.ima+(g.ima|0)}}function On(){const M=kn();q=Sd(M),l&&(l.tiers=M);const g=Ve.getContext("2d");g.clearRect(0,0,20,20),g.drawImage(q.c,0,0)}const pl=()=>{if(l.regiaoForcada!=null)return l.regiaoForcada;const M=Math.min(2,Math.floor((l.fase-1)/2)),g=Fr.map((N,k)=>k).filter(N=>Fr[N].nivel===M);return g[(l.fundoBase+l.fase)%g.length]},ta=M=>{const g=[...M];for(let N=g.length-1;N>0;N--){const k=Math.floor(Math.random()*(N+1));[g[N],g[k]]=[g[k],g[N]]}return g};function Xo(){const M=ta(["slime","inseto","morcego","fantasma","ogro"]).slice(0,3),g=ta(["atirador","sentinela"]).slice(0,1),N=ta(["bombardeiro","fulminante"]).slice(0,1),k=ta(["curandeiro","amplificador"]).slice(0,1);return[...M,...g,...N,...k]}function ja(){const M=z.oficina,g=Xo(),N=ta(Array.from({length:Hi.length},(ae,Te)=>Te)),k=Object.fromEntries(g.map((ae,Te)=>[ae,N[Te%N.length]])),ee=Object.fromEntries(g.map((ae,Te)=>[ae,Te<2?1:Te<4?2:Te===4?4:5]));l={t:0,ta:0,nx:In,ny:fa,cx:In,cy:fa,velNave:75*(1+.08*M.motor),cristais:[],raioIma:26*(1+.25*M.ima),raioPegar:8,bonusXp:1+.1*M.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,ondaFila:0,ondaSpawnT:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+M.casco,maxHp:6+M.casco,armadura:M.armadura,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*M.dano,danoGlobal:1,recargaGlobal:(1+.08*M.cadencia)*(1+.12*M.nucleo),cadencia:2.6,projeteis:1+M.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*za.length),alienIdx:Math.floor(Math.random()*Tr.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*Hi.length),elencoRun:g,entradaRun:ee,skinsRun:k,fundoBase:Math.floor(Math.random()*Fr.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:M.escudo>0?1+(M.escudo>=4?1:0):0,barreira:M.escudo>0?1+(M.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*M.escudo},On()}const $r=()=>Math.max(1,l.onda);function er(){const M=$r(),g={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let N=l.elencoRun.filter(k=>M>=l.entradaRun[k]).map(k=>[k,g[k]+Math.max(0,M-l.entradaRun[k])*(k==="atirador"||k==="sentinela"?.45:.2)]);return N.length||(N=[[l.elencoRun[0],1]]),Ft(N)}function na(M,g,N){const k=hi[M],ee=Math.max(0,$r()-1),ae=Math.max(1,Math.round(k.hp*(1+(k.hp===1?.1:.15)*ee)*(1+l.t/300))),Te=k.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*ee))*(1+Math.min(.5,l.t/600)),De={tipo:M,x:g,y:N,hp:ae,hpMax:ae,vel:Te,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(l.skinsRun[M]??l.skinBase)+l.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return l.inimigos.push(De),De}function si(M=99,g=null){const N=er(),k=1+Math.min(3,Math.floor(Math.max(0,l.onda-1)/3)),ee=Math.max(1,Math.min(M,N==="inseto"?1+Math.floor(Math.random()*(k+1)):Math.round(k*(.75+Math.random()*.35)))),ae=g==null?Math.random()*Math.PI*2:g+(Math.random()-.5)*1.8,Te=215+(Math.random()<.35?Math.random()*230:Math.random()*60),De=l.nx+Math.cos(ae)*Te,$=l.ny+Math.sin(ae)*Te;for(let xe=0;xe<ee;xe++)na(N,De+(Math.random()-.5)*30,$+(Math.random()-.5)*30);return ee}function Jr(M){for(let g=0;g<M;g++)si(1)}function qo(M){const g=[[l.cx-Bt/2-16,l.cy-Gt/2-16],[l.cx+Bt/2+16,l.cy-Gt/2-16],[l.cx-Bt/2-16,l.cy+Gt/2+16],[l.cx+Bt/2+16,l.cy+Gt/2+16]],[N,k]=g[Math.floor(Math.random()*g.length)];for(let ee=0;ee<M;ee++)na(er(),N+(Math.random()-.5)*22,k+(Math.random()-.5)*22)}function $t(M,g,N,k,ee=50){if(!(l.parts.length>400))for(let ae=0;ae<N;ae++){const Te=Math.random()*Math.PI*2,De=(.3+Math.random())*ee;l.parts.push({x:M,y:g,vx:Math.cos(Te)*De,vy:Math.sin(Te)*De,vida:.3+Math.random()*.3,cor:k[ae%k.length]})}}const Zt=(M,g,N,k="#ffffff")=>l.textos.push({x:M,y:g,txt:N,cor:k,vida:1.1});function Yo(){l.onda+=1;const M=1+Math.floor((l.onda-1)/3),g=l.onda%5===0;l.ondaDur=l.ondaT=13+Math.min(9,l.onda*1.1),l.ondaFila=g?5+l.onda:Math.min(34,6+l.onda*3),l.ondaSpawnT=.35,l.proxOnda=Math.max(25,34-Math.min(9,l.onda*.5))+Math.random()*4,l.ondaEstado=g||l.chefe?"chefe":"ativa",l.tremor=.25,M>l.fase&&(l.fase=M),g||(Et("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),g&&!l.chefe&&et()}function tr(){l.chefe||(l.ondaEstado=l.ondaT>0?"ativa":"calma")}function $o(M){const g=Math.atan2(M.y-l.ny,M.x-l.nx);l.mira=g;const N=l.armasNivel.normal,k=l.projeteis,ee=.16;for(let ae=0;ae<k;ae++){const Te=g+(ae-(k-1)/2)*ee,De=l.velTiro*(1+.12*(N-1)),$=Math.random()<l.critico;l.tiros.push({x:l.nx+Math.cos(Te)*7,y:l.ny+Math.sin(Te)*7,vx:Math.cos(Te)*De,vy:Math.sin(Te)*De,dano:l.dano*l.danoGlobal*(1+.28*(N-1))*($?2:1),perf:l.perfura,critico:$,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const Ia=()=>1+Math.floor(l.t/420);function An(M,g,N,k,ee=Ia()){l.tirosInimigos.push({x:M,y:g,vx:Math.cos(N)*k,vy:Math.sin(N)*k,dano:ee,vida:7})}function nr(M,g,N){const k=Math.random()*Math.PI*2,ee=16+Math.random()*22,ae={x:M,y:g,v:N,vx:Math.cos(k)*ee,vy:Math.sin(k)*ee,fase:Math.random()*6};l.cristais.push(ae),l.cristais.length>220&&(ae.v+=l.cristais.shift().v)}function La(M){if(l.invul>0||l.escudoT>0)return!1;if(l.barreira>0)return l.barreira-=1,l.invul=.7,l.ondas.push({x:l.nx,y:l.ny,r:0,max:28,v:90,cor:"#7dff9a"}),Zt(l.nx,l.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0;const g=Math.min(.5,l.armadura*.06),N=Math.max(.25,M*(1-g));return l.hp=Math.max(0,l.hp-N),l.invul=.7,l.tremor=.2,l.combo>=3&&Zt(l.nx,l.ny-14,"COMBO PERDIDO","#ff7a8a"),l.combo=0,l.comboT=0,n(110,.18,"sawtooth",.05),!0}function ia(M,g){M.sumido>0||M.morto||(M.hp-=g,M.piscar=.08,M.hp>0&&W(M),M.hp<=0&&(M.morto=!0,Jo(M)))}function Jo(M){if(M.tipo==="chefe"){lt(M);return}if(M.tipo==="alien"){l.pendente="vitoria",$t(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),l.flash=.35;return}const g=hi[M.tipo];l.kills+=1,l.alien||(l.combo+=1,l.comboT=1.8,l.melhorCombo=Math.max(l.melhorCombo,l.combo),[10,25,50,100].includes(l.combo)&&(Zt(l.nx,l.ny-22,`COMBO x${l.combo}!`,"#ffe14a"),n(700+l.combo*4,.08,"square",.04),n(900+l.combo*4,.1,"square",.04,.08))),nr(M.x,M.y,g.xp),$t(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),ve(M.tipo);const N={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<N&&(l.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),Zt(M.x,M.y-8,"◆","#6fe8ff"));const k=l.inimigos.indexOf(M);k>=0&&l.inimigos.splice(k,1)}function C(){const M=Math.random()*Math.PI*2,g=230+Math.random()*120,N=Math.floor(Math.random()*3),k=[4,6,9][N];l.rochas.push({x:l.nx+Math.cos(M)*g,y:l.ny+Math.sin(M)*g,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:N,r:[8,10,13][N],hp:k,hpMax:k,piscar:0})}function H(M){M.hp-=1,M.piscar=.08,$t(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&oe(M)}function oe(M){$t(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const g=l.rochas.indexOf(M);g>=0&&l.rochas.splice(g,1),Math.random()<.9?l.itens.push({tipo:Ft(Y_),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):nr(M.x,M.y,3)}function Q(M){const g=M.tipo;if(g==="ima")l.imaT=3,Zt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");else if(g==="explosao")j(),Zt(l.nx,l.ny-12,"BOOM!","#ffd23f");else if(g==="coracao")l.hp=Math.min(l.maxHp,l.hp+2),Zt(l.nx,l.ny-12,"+VIDA","#ff7a8a");else if(g==="escudo")l.escudoT=6,Zt(l.nx,l.ny-12,"ESCUDO!","#8bd3ff");else if(g==="turbo")l.turboT=8,Zt(l.nx,l.ny-12,"TURBO!","#ffe14a");else if(ga[g]){const N=ga[g];g==="estrelaVermelha"?(l.buffDanoT<=0&&(l.danoGlobal*=1.5),l.buffDanoT=N.tempo):g==="estrelaAmarela"?l.buffVelT=N.tempo:g==="estrelaAzul"?l.escudoT=Math.max(l.escudoT,N.tempo):g==="estrelaRoxa"&&(l.buffXpT=N.tempo),Zt(l.nx,l.ny-12,N.nome,N.cor),$t(l.nx,l.ny,14,[N.cor,"#ffffff"],70),l.ondas.push({x:l.nx,y:l.ny,r:0,max:40,v:110,cor:N.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else g==="moedaEsp"&&(z.moedas+=1,l.moedasRun+=1,se(),Zt(l.nx,l.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function j(){l.flash=.28,l.tremor=.35,l.ondas.push({x:l.nx,y:l.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+l.dano*3;for(const g of[...l.inimigos])Ze(g)&&(ia(g,g.tipo==="chefe"||g.tipo==="alien"?14:M),$t(g.x,g.y,4,["#ffd23f","#ff7a3a"],60));l.tirosInimigos=l.tirosInimigos.filter(g=>!Ze(g)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function qe(M,g,N,k=1.4){for(let ee=0;ee<N;ee++){const ae=Math.random()*Math.PI*2,Te=ee===0?Math.random()*14:28+Math.random()*55;let De=l.nx+Math.cos(ae)*Te,$=l.ny+Math.sin(ae)*Te;l.alien&&(De=Math.max(pt.x0+10,Math.min(pt.x1-10,De)),$=Math.max(pt.y0+10,Math.min(pt.y1-10,$))),l.campos.push({x:De,y:$,r:26,aviso:k+ee*.15,avisoMax:k+ee*.15,vida:4,tick:0,ox:M,oy:g})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function et(){l.chefeIdx=(l.chefeIdx+1+Math.floor(Math.random()*(za.length-1)))%za.length;const M=Math.random()<.5?-1:1,g=Math.round(150*(1+(l.fase-1)*.4+l.chefesVencidos*.35)*(1+l.t/300)),N=ta(["raios","investida","drift","minhoca"]).slice(0,2),k={tipo:"chefe",x:l.cx+M*(Bt/2+40),y:l.cy-30,hp:g,hpMax:g,vel:30,fase:0,piscar:0,v:l.fase-1+l.skinBase,b:l.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:N,rot:0};l.inimigos.push(k),l.chefe=k,w("chefe"),Et(`${za[l.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function Ye(M,g){const N=l.nx-M.x,k=l.ny-M.y,ee=Math.hypot(N,k)||1;if(M.fase+=g,M.movEsp){const O=M.movEsp;if(O.carga>0){if(O.carga-=g,M.piscar=Math.max(M.piscar,.04),O.carga<=0)if(O.tipo==="minhoca"){const te=M.x,ye=M.y,ot=Math.random()*Math.PI*2,kt=58+Math.random()*24;M.x=l.nx+Math.cos(ot)*kt,M.y=l.ny+Math.sin(ot)*kt,l.ondas.push({x:te,y:ye,r:0,max:32,v:130,cor:"#a56bff"}),l.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),$t(te,ye,18,["#a56bff","#070a1a","#ffffff"],90),$t(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),l.tremor=.28,M.movEsp=null}else O.ativo=O.tipo==="drift"?1.15:.72}else if(O.ativo>0){const te=O.tipo==="drift"?175:235;M.x+=O.dx*te*g,M.y+=O.dy*te*g,O.ativo-=g,O.acc-=g,$t(M.x-O.dx*15,M.y-O.dy*15,O.tipo==="drift"?2:1,O.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),O.tipo==="drift"&&O.acc<=0&&(O.acc=.16,l.campos.push({x:M.x-O.dx*12,y:M.y-O.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),O.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const ae=-k/ee,Te=N/ee,De=Math.sin(l.ta*.8)*.3,$=M.vel+l.fase*3+Math.min(45,l.t/10);if(M.x+=(N/ee+ae*De)*$*g,M.y+=(k/ee+Te*De)*$*g,ee>300)return;const xe=1+Math.min(1,l.t/400);if(M.cdRajada-=g*xe,M.cdMira-=g*xe,M.cdBomba-=g*xe,M.cdRajada<=0){const O=12+Math.min(8,l.fase*2);for(let te=0;te<O;te++)An(M.x,M.y,M.rot+te*Math.PI*2/O,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-l.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const O=Math.atan2(k,N),te=3+Math.min(2,l.fase-1);for(let ye=0;ye<te;ye++)An(M.x,M.y,O+(ye-(te-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const O=1+(Math.random()<.5?1:0)+(l.fase>=2&&Math.random()<.4?1:0);qe(M.x,M.y,O),M.cdBomba=Math.max(3,4.6-l.fase*.2)}const pe=nt.filter(O=>O.assinatura?M.kit.includes(O.id):l.t>=O.t);if(M.esp){const O=M.esp;if(O.t-=g,O.acc-=g,O.tipo==="espiral"&&O.acc<=0){O.acc=.09,O.ang+=.4;for(let te=0;te<2;te++)An(M.x,M.y,O.ang+te*Math.PI,62)}else if(O.tipo==="aneis"&&O.acc<=0){O.acc=.5;const te=Math.random()*Math.PI*2;for(let ye=0;ye<24;ye++){const ot=ye*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(ot-te),Math.cos(ot-te)))>.45&&An(M.x,M.y,ot,58)}}O.t<=0&&(M.esp=null)}else if(pe.length&&(M.cdEsp-=g*xe,M.cdEsp<=0)){const O=pe[Math.floor(Math.random()*pe.length)];if(Zt(M.x,M.y-28,O.nome,"#ff7ab8"),O.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(O.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(O.id==="raios"){const te=Math.atan2(k,N),ye=3+Math.min(2,pe.length-2);for(let ot=0;ot<ye;ot++)l.raios.push({x:M.x,y:M.y,ang:te+(ot-(ye-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(O.id==="investida"||O.id==="drift")M.movEsp={tipo:O.id,carga:O.id==="drift"?.7:.5,ativo:0,dx:N/ee,dy:k/ee,acc:0};else if(O.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(O.id==="invocar"){for(let te=0;te<4;te++)na(er(),M.x+(te-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-l.t/100)}}const nt=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function lt(M){l.kills+=5,l.chefe=null,l.chefesVencidos+=1,w("normal");const g=l.inimigos.indexOf(M);g>=0&&l.inimigos.splice(g,1),$t(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),l.flash=.3,l.tremor=.5;const N=4+Math.min(4,l.chefesVencidos);for(let k=0;k<N;k++)l.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let k=0;k<6;k++)nr(M.x,M.y,6);l.tirosInimigos=[],l.campos=[],l.ondaEstado==="chefe"&&tr(),Et("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function bt(){const M=Math.random()*Math.PI*2,g=100+Math.random()*40;l.buraco={x:l.nx+Math.cos(M)*g,y:l.ny+Math.sin(M)*g,vida:28,r:22},Et("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function Rt(M){const g=l.buraco;g.vida-=M;const N=g.x-l.nx,k=g.y-l.ny,ee=Math.hypot(N,k)||1;if(ee<70){const ae=38*(1-ee/70);l.nx+=N/ee*ae*M,l.ny+=k/ee*ae*M}if(ee<9){it();return}g.vida<=0&&(l.buraco=null,l.proxBuraco=l.t+50+Math.random()*40)}function it(){w("chefe"),l.alienIdx=(l.alienIdx+1+Math.floor(Math.random()*(Tr.length-1)))%Tr.length,l.mundoSalvo={nx:l.nx,ny:l.ny,cx:l.cx,cy:l.cy,inimigos:l.inimigos,tirosInimigos:l.tirosInimigos,campos:l.campos,hp:l.hp,buraco:l.buraco,chefe:l.chefe};const M=Math.round(95*(1+l.aliensVencidos*.6+(l.fase-1)*.25)*(1+l.t/300)),g={tipo:"alien",x:In,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:l.alienIdx,cd:1.7,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null,vx:0,vy:0,orbita:Math.random()<.5?-1:1,mudaOrbita:2+Math.random()*2,memoria:[],plano:[],leituraT:0};l.hp=l.maxHp,l.invul=1,l.inimigos=[g],l.tirosInimigos=[],l.campos=[],l.raios=[],l.tiros=[],l.misseis=[],l.chefe=null,l.alien=g,l.nx=In,l.ny=Gt-40,l.cx=In,l.cy=fa,l.flash=.5,Et(`${Tr[l.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function Ut(M){const g=l.mundoSalvo;if(l.nx=g.nx,l.ny=g.ny,l.cx=g.cx,l.cy=g.cy,l.inimigos=g.inimigos,l.tirosInimigos=g.tirosInimigos,l.campos=g.campos,l.chefe=g.chefe,l.hp=g.hp,l.tiros=[],l.raios=[],l.misseis=[],l.alien=null,l.mundoSalvo=null,l.buraco=null,w(l.chefe?"chefe":"normal"),l.invul=2,l.proxBuraco=l.t+60+Math.random()*40,l.flash=.4,M){l.aliensVencidos+=1,l.imaT=Math.max(l.imaT,3),Zt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");for(let k=0;k<6;k++)nr(l.nx+(Math.random()-.5)*40,l.ny+(Math.random()-.5)*40,6);const N=Object.keys(qh).filter(k=>!l.poderes[k]);if(N.length&&l.slots.includes(null))Wi(l,N[Math.floor(Math.random()*N.length)]);else{const k=Object.keys(l.armasNivel).filter(ee=>l.armasNivel[ee]>0&&l.armasNivel[ee]<4);if(k.length){const ee=k[Math.floor(Math.random()*k.length)];l.armasNivel[ee]+=1,Et(`${Ks[ee].nome} EVOLUIU PARA N${l.armasNivel[ee]}!`,3.2)}else l.hp=l.maxHp,Et("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else Et("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const rn={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},Xt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},Vt=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function dn(M){const g=l.alien,N=g.hp<g.hpMax*.5,k=g.hp<g.hpMax*.25,ee=1+Math.min(.6,l.t/500),ae=(k?2:N?1.6:1.25)*ee,Te=(k?1.5:N?1.35:1.2)*(1+(ee-1)*.6),De=Ee=>Ee*Te;g.ta+=M*(k?2:N?1.7:1.3)*ee,g.fase+=M,g.sumido=Math.max(0,g.sumido-M),N&&!g.furiaDita&&(g.furiaDita=!0,Et("!! FÚRIA !!",1.6),l.flash=.2,n(80,.4,"sawtooth",.06)),k&&!g.desesperoDito&&(g.desesperoDito=!0,Et("!! DESESPERO !!",1.6),l.flash=.25,n(60,.5,"sawtooth",.07));const $=l.nx-g.x,xe=l.ny-g.y,pe=Math.hypot($,xe)||1,O=$/pe,te=xe/pe,ye=-te,ot=O,kt=k?55:N?68:82,dt=(Ee,ke)=>[Math.max(pt.x0+6,Math.min(pt.x1-6,Ee)),Math.max(pt.y0+6,Math.min(pt.y1-6,ke))],xt=()=>dt(l.nx-O*kt+ye*g.orbita*28,l.ny)[0],Nt=()=>dt(l.nx,l.ny-te*kt+ot*g.orbita*28)[1];if((g.estado==="espera"||g.estado==="carga"||g.estado==="salvas"||g.estado==="padrao")&&g.sumido<=0){g.mudaOrbita-=M,g.mudaOrbita<=0&&(g.mudaOrbita=2.2+Math.random()*2.8,Math.random()<.45&&(g.orbita*=-1));const Ee=pe>kt+13?1:pe<kt-16?-.7:.12,ke=Math.sin(g.ta*1.7+g.fase*.4)*.22,at=(k?92:N?78:64)*ee*(g.estado==="carga"?.58:1),ct=(O*Ee+ye*(g.orbita*.58+ke))*at,Kt=(te*Ee+ot*(g.orbita*.58+ke))*at,ln=Math.min(1,M*(k?5.5:3.6));g.vx+=(ct-g.vx)*ln,g.vy+=(Kt-g.vy)*ln,g.x+=g.vx*M,g.y+=g.vy*M;const[It,Fn]=dt(g.x,g.y);(It!==g.x||Fn!==g.y)&&(g.orbita*=-1,g.vx*=-.35,g.vy*=-.35),g.x=It,g.y=Fn}const Rn=()=>{const Ee=l.movendo?k?34:N?27:20:0,ke=l.nx+l.dirX*Ee,at=l.ny+l.dirY*Ee,ct=ke-g.x,Kt=at-g.y,ln=Math.hypot(ct,Kt)||1;g.dirX=ct/ln,g.dirY=Kt/ln,g.dashMax=.75,g.estado="aviso",g.carga=k?.38:N?.52:.72},B=()=>{const Ee=l.nx<In;g.x=Ee?pt.x1-4:pt.x0+4,g.y=dt(0,l.ny)[1],g.dirX=Ee?-1:1,g.dirY=0,g.dashMax=1.15,g.estado="aviso",g.carga=k?.34:N?.48:.68},Oe=Ee=>{const ke=l.movendo?l.dirX:O,at=l.movendo?l.dirY:te,ct=-at,Kt=ke;for(let ln=0;ln<Ee;ln++){const It=Math.floor(ln/2)+1,Fn=ln%2?1:-1,au=20+It*14,ru=18+It*7,[Cp,Pp]=dt(l.nx+ke*au+ct*ru*Fn,l.ny+at*au+Kt*ru*Fn),ou=1+ln*.08;l.campos.push({x:Cp,y:Pp,r:23,aviso:ou,avisoMax:ou,vida:4.2,tick:0,ox:g.x,oy:g.y})}if(N){const[ln,It]=dt(l.nx+ke*50,l.ny+at*50);l.campos.push({x:ln,y:It,r:25,aviso:1.25,avisoMax:1.25,vida:4.2,tick:0,ox:g.x,oy:g.y})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)},$e=()=>{if(g.plano.length){const It=g.plano.shift();return g.memoria.push(It),g.memoria.length>4&&g.memoria.shift(),It}const Ee=Tr[g.v].pesos,ke=([It,,Fn])=>l.t>=Fn||(Ee[It]||0)>0||k||N&&Fn<=210,at=new Set(Vt.filter(ke).map(([It])=>It));let ct;pe<62?ct=["tentaculos","varredura","rajada","psiquico","investida","teleporte","corte","olhar"]:pe>125?ct=["bombas","psiquico","cerco","chuva","investida","mira","raio","corte","foice","ovnis","invocar"]:ct=["mira","raio","investida","espiral","aneis","olhar","rajada","psiquico"];for(const It of Object.keys(Ee))at.has(It)&&!ct.includes(It)&&ct.push(It);l.campos.length>=7&&(ct=ct.filter(It=>It!=="bombas"&&It!=="psiquico")),l.tirosInimigos.length>=85&&(ct=ct.filter(It=>!["rajada","espiral","chuva","aneis","cerco"].includes(It))),ct=ct.filter(It=>at.has(It)&&!g.memoria.slice(-2).includes(It)),ct.length||(ct=[...at].filter(It=>!g.memoria.slice(-1).includes(It))),ct.length||(ct=["investida"]);const Kt=ct.map(It=>{let Fn=1+(Ee[It]||0);return pe<62&&["tentaculos","varredura","rajada","psiquico"].includes(It)&&(Fn+=3),pe>125&&["bombas","cerco","investida","corte"].includes(It)&&(Fn+=3),N&&["investida","foice","olhar","raio"].includes(It)&&(Fn+=2),k&&["foice","corte","varredura","tentaculos"].includes(It)&&(Fn+=3),[It,Fn]}),ln=Ft(Kt);return pe>125&&["bombas","psiquico","cerco"].includes(ln)?g.plano.push(Math.random()<.55?"investida":"mira"):pe<62&&["rajada","tentaculos"].includes(ln)&&g.plano.push(Math.random()<.5?"teleporte":"corte"),g.memoria.push(ln),g.memoria.length>4&&g.memoria.shift(),ln};if(g.estado==="espera")g.cd-=M*ae,g.cd<=0&&(g.ataque=$e(),g.estado="carga",g.carga=k?.2:N?.3:.46,Zt(g.x,Math.max(12,g.y-24),rn[g.ataque]||"","#ff7ab8"));else if(g.estado==="carga"){if(g.carga-=M,g.carga<=0){const Ee=g.ataque;if(Ee==="rajada"){const ke=k?30:N?24:18,at=Math.random()*6;for(let ct=0;ct<ke;ct++)An(g.x,g.y,at+ct*Math.PI*2/ke,De(62));g.estado="espera",g.cd=2}else if(Ee==="mira")g.salvas=k?6:N?5:4,g.cdSalva=0,g.estado="salvas";else if(Ee==="teleporte")g.sumido=.6,g.estado="teleporte",g.carga=.6;else if(Ee==="invocar"){const ke=l.inimigos.filter(at=>at.tipo==="inseto").length;for(let at=0;at<4&&ke+at<10;at++)na("inseto",g.x+(at-1.5)*12,g.y+14);g.estado="espera",g.cd=1.8,n(300,.2,"triangle",.05)}else if(Ee==="ovnis"){const ke=l.inimigos.filter(at=>at.tipo==="atirador").length;for(let at=0;at<2&&ke+at<3;at++)na("atirador",g.x+(at?16:-16),g.y+14);g.estado="espera",g.cd=2,n(300,.25,"triangle",.05)}else if(Ee==="investida")g.combo=k?1:0,g.modo="investida",Rn();else if(Ee==="foice")g.combo=k?3:N?2:1,g.modo="investida",Rn();else if(Ee==="corte")g.combo=k?2:N?1:0,g.modo="corte",B();else if(Ee==="raio"){const ke=Math.atan2(l.ny-g.y,l.nx-g.x),at=k?[ke-.7,ke-.35,ke,ke+.35,ke+.7]:N?[ke-.5,ke,ke+.5]:[ke];for(const ct of at)l.raios.push({x:g.x,y:g.y+8,ang:ct,aviso:.9,vida:.55,tick:0,ligou:!1});g.estado="espera",g.cd=2.2,n(500,.3,"sine",.05)}else if(Ee==="olhar"){const ke=Math.atan2(l.ny-g.y,l.nx-g.x),at=k?7:N?6:5;for(let ct=0;ct<at;ct++)l.raios.push({x:g.x,y:g.y+8,ang:ke+(ct-(at-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});g.estado="espera",g.cd=2.4,n(520,.3,"sine",.05)}else if(Ee==="varredura"){const ke=Math.random()<.5?1:-1,at=Math.atan2(l.ny-g.y,l.nx-g.x)-1*ke;for(let ct=0;ct<(N?2:1);ct++)l.raios.push({x:g.x,y:g.y+8,ang:at+ct*Math.PI,giro:1.15*ke*(k?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});g.estado="espera",g.cd=2.6,n(480,.3,"sine",.05)}else if(Ee==="tentaculos"){const ke=Math.random()*6.28,at=Math.random()<.5?1:-1,ct=N?6:4;for(let Kt=0;Kt<ct;Kt++)l.raios.push({x:g.x,y:g.y+8,ang:ke+Kt*Math.PI*2/ct,giro:.9*at,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});g.estado="espera",g.cd=3,n(420,.3,"sine",.05)}else if(Ee==="bombas")Oe(k?7:N?6:4),g.estado="espera",g.cd=k?.75:N?1.1:1.7;else if(Ee==="psiquico"){const ke=Math.random()*6.28,at=N?6:5;for(let ct=0;ct<at;ct++){const[Kt,ln]=dt(l.nx+Math.cos(ke+ct*Math.PI*2/at)*40,l.ny+Math.sin(ke+ct*Math.PI*2/at)*40);l.campos.push({x:Kt,y:ln,r:24,aviso:1.1+ct*.08,avisoMax:1.1+ct*.08,vida:3.5,tick:0,ox:g.x,oy:g.y})}l.campos.push({x:l.nx,y:l.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:g.x,oy:g.y}),g.estado="espera",g.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else Xt[Ee]?(g.padrao={tipo:Ee,t:Xt[Ee]*(N?1.25:1),acc:0,ang:Math.random()*6.28},g.estado="padrao"):g.estado="espera";n(220,.12,"square",.05)}}else if(g.estado==="padrao"){const Ee=g.padrao;if(Ee.t-=M,Ee.acc-=M,Ee.acc<=0){if(Ee.tipo==="espiral"){Ee.acc=.075,Ee.ang+=.38;const ke=k?4:N?3:2;for(let at=0;at<ke;at++)An(g.x,g.y+6,Ee.ang+at*Math.PI*2/ke,De(58));re("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(Ee.tipo==="chuva"){Ee.acc=k?.45:.6;const ke=[pt.x0+24+Math.random()*(pt.x1-pt.x0-48)];N&&ke.push(pt.x0+24+Math.random()*(pt.x1-pt.x0-48));for(let at=pt.x0+4;at<=pt.x1-4;at+=13)ke.every(ct=>Math.abs(at-ct)>19)&&An(at,pt.y0,Math.PI/2,De(58));n(240,.08,"square",.03)}else if(Ee.tipo==="aneis"){Ee.acc=.55;const ke=24,at=Math.random()*Math.PI*2;for(let ct=0;ct<ke;ct++){const Kt=ct*Math.PI*2/ke;Math.abs(Math.atan2(Math.sin(Kt-at),Math.cos(Kt-at)))>.42&&An(g.x,g.y,Kt,De(55))}n(280,.08,"triangle",.03)}else if(Ee.tipo==="cerco"){Ee.acc=k?.08:.12;const ke=Math.random()<.5?pt.x0:pt.x1,at=pt.y0+Math.random()*(pt.y1-pt.y0);An(ke,at,Math.atan2(l.ny-at,l.nx-ke)+(Math.random()-.5)*.3,De(72)),re("cerco",90,()=>n(360,.04,"square",.02))}}Ee.t<=0&&(g.estado="espera",g.cd=1.8)}else if(g.estado==="salvas"){if(g.cdSalva-=M,g.cdSalva<=0){const Ee=Math.atan2(l.ny-g.y,l.nx-g.x);for(let ke=-1;ke<=1;ke++)An(g.x,g.y+12,Ee+ke*.22,De(95));g.salvas-=1,g.cdSalva=.26,n(260,.06,"square",.04),g.salvas<=0&&(g.estado="espera",g.cd=1.6)}}else if(g.estado==="aviso")g.carga-=M,g.x+=(Math.random()-.5)*1.6,g.y+=(Math.random()-.5)*1.6,g.carga<=0&&(g.estado="investida",g.dashT=g.dashMax*(N?1.1:1),n(150,.25,"sawtooth",.06));else if(g.estado==="investida"){const Ee=k?400:N?350:310;g.x+=g.dirX*Ee*M,g.y+=g.dirY*Ee*M,g.dashT-=M;const ke=g.x<pt.x0||g.x>pt.x1||g.y<pt.y0||g.y>pt.y1;g.x=Math.max(pt.x0,Math.min(pt.x1,g.x)),g.y=Math.max(pt.y0-10,Math.min(pt.y1,g.y)),(g.dashT<=0||ke)&&(l.tremor=Math.max(l.tremor,ke?.2:0),g.combo>0?(g.combo-=1,g.modo==="corte"?B():Rn(),g.carga=.4):g.estado="volta")}else if(g.estado==="volta"){const Ee=xt(),ke=Nt(),at=Ee-g.x,ct=ke-g.y,Kt=Math.hypot(at,ct)||1;g.x+=at/Kt*Math.min(Kt,260*M),g.y+=ct/Kt*Math.min(Kt,260*M),Kt<5&&(g.estado="espera",g.cd=1.2)}else if(g.estado==="teleporte"&&(g.carga-=M,g.carga<=0)){const Ee=Math.atan2(g.y-l.ny,g.x-l.nx)+Math.PI+(Math.random()-.5)*1.2,ke=pe<70?105:72;[g.x,g.y]=dt(l.nx+Math.cos(Ee)*ke,l.ny+Math.sin(Ee)*ke),g.sumido=0,g.vx=g.vy=0;const at=k?16:12;for(let ct=0;ct<at;ct++)An(g.x,g.y,ct*Math.PI*2/at,De(70));g.estado="espera",g.cd=1.3,n(440,.1,"square",.05)}}function Qe(M){let g=(Ue.has("ArrowRight")||Ue.has("KeyD")?1:0)-(Ue.has("ArrowLeft")||Ue.has("KeyA")?1:0),N=(Ue.has("ArrowDown")||Ue.has("KeyS")?1:0)-(Ue.has("ArrowUp")||Ue.has("KeyW")?1:0);if(!g&&!N&&ue.ativo)if(ue.toque)g=ue.dx/18,N=ue.dy/18;else{const ee=ue.x-(l.nx-l.cx+Bt/2),ae=ue.y-(l.ny-l.cy+Gt/2),Te=Math.hypot(ee,ae);Te>3&&(g=ee/Te,N=ae/Te)}const k=Math.hypot(g,N);if(l.movendo=k>.08,k>.08){l.dirX=g/k,l.dirY=N/k;const ee=l.arma>=2?l.slots[l.arma-2]:"normal",ae=l.armasNivel.turbo||1,Te=l.armasNivel.drift||1,De=ee==="turbo"&&l.boostE>0?1.55+.18*(ae-1):1,$=l.driftT>0?1.75+.15*(Te-1):1,xe=ee==="salto"&&l.saltoCarga>0?.32:1,pe=l.turboT>0?1.35:1,O=Math.min(1,k),te=l.velNave*De*$*xe*pe*(l.buffVelT>0?1.5:1)*(l.alien?1:l.lentidao||1);l.nx+=l.dirX*te*M*O,l.ny+=l.dirY*te*M*O}if(l.alien)l.nx=Math.max(pt.x0,Math.min(pt.x1,l.nx)),l.ny=Math.max(pt.y0,Math.min(pt.y1,l.ny)),l.cx=In,l.cy=fa;else{const ee=Math.min(1,M*5);l.cx+=(l.nx-l.cx)*ee,l.cy+=(l.ny-l.cy)*ee}}function pn(M){l.proxOnda-=M,l.proxOnda<=0&&l.ondaFila<=0&&Yo(),l.ondaT=Math.max(0,l.ondaT-M),l.ondaEstado=l.chefe?"chefe":l.ondaT>0||l.ondaFila>0?"ativa":"calma";const g=Math.min(54,12+3*$r());if(l.ondaFila>0&&(l.ondaSpawnT-=M,l.ondaSpawnT<=0)){const $=Math.min(l.ondaFila,Math.min(4,1+Math.floor((l.onda-1)/2)),Math.max(0,g-l.inimigos.length));$>0&&(qo($),l.ondaFila-=$),l.ondaSpawnT=$>0?Math.max(.72,1.45-l.onda*.045)+Math.random()*.38:.5}const N=.24+Math.min(.72,l.t*.0014)+.015*l.nivel;l.spawnAcc+=M*N*(l.ondaEstado==="chefe"?.45:1),(!Number.isFinite(l.spawnAcc)||l.spawnAcc<0)&&(l.spawnAcc=0);let k=0;for(;l.spawnAcc>=1&&k<3;)l.spawnAcc-=1,k+=1,l.inimigos.length<g&&si(2);l.ultX==null&&(l.ultX=l.nx,l.ultY=l.ny,l.andou=0,l.angAndar=0);const ee=l.nx-l.ultX,ae=l.ny-l.ultY,Te=Math.hypot(ee,ae);for(l.ultX=l.nx,l.ultY=l.ny,Te>0&&Te<60&&(l.andou+=Te,l.angAndar=Math.atan2(ae,ee));l.andou>=170;)l.andou-=170,l.inimigos.length<g&&si(99,l.angAndar);if(l.ondaT<=0&&!l.chefe&&!l.buraco&&l.t>=l.proxBuraco&&bt(),l.proxEstrela-=M,l.proxEstrela<=0&&(l.proxEstrela=16+Math.random()*14,l.itens.filter($=>ga[$.tipo]).length<2)){const $=Math.random()*Math.PI*2,xe=70+Math.random()*90;l.itens.push({tipo:Ft(q_),x:l.nx+Math.cos($)*xe,y:l.ny+Math.sin($)*xe,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(l.buraco&&(Rt(M),l.alien))return;l.rochas.length<3&&Math.random()<M*.12&&C();for(let $=l.rochas.length-1;$>=0;$--){const xe=l.rochas[$];xe.x+=xe.vx*M,xe.y+=xe.vy*M,xe.piscar=Math.max(0,xe.piscar-M);const pe=l.nx-xe.x,O=l.ny-xe.y,te=Math.hypot(pe,O)||1;if(te>650){l.rochas.splice($,1);continue}te<xe.r+ua&&(l.nx+=pe/te*(xe.r+ua-te),l.ny+=O/te*(xe.r+ua-te))}for(const $ of[...l.inimigos]){if($.tipo==="chefe"){Ye($,M),o.empurrar($,hi.chefe.raio,{x:l.nx,y:l.ny},30*M);continue}$.buffT=Math.max(0,($.buffT||0)-M),$.suporteFx=Math.max(0,($.suporteFx||0)-M);const xe=l.nx-$.x,pe=l.ny-$.y,O=Math.hypot(xe,pe)||1,te=$.buffT>0?1.35:1;let ye=xe/O*$.vel*te,ot=pe/O*$.vel*te;if($.tipo==="morcego"){const dt=Math.sin(l.ta*5+$.fase)*28;ye+=-pe/O*dt,ot+=xe/O*dt}else if($.tipo==="inseto"){const dt=Math.sin(l.ta*9+$.fase)*22;ye+=-pe/O*dt,ot+=xe/O*dt}else if($.tipo==="atirador"){const dt=O>92?1:.22,xt=Math.sin(l.ta*1.2+$.fase)*.35;ye=(xe/O*dt+-pe/O*xt)*$.vel*te,ot=(pe/O*dt+xe/O*xt)*$.vel*te,$.cd-=M*te,$.cd<=0&&Ze($)&&(An($.x,$.y,Math.atan2(pe,xe),74,Ia()*($.buffT>0?1.5:1)),$.cd=1.8+Math.random()*.9)}else if($.tipo==="sentinela"){const dt=O>105?1:.2,xt=Math.atan2(pe,xe);if(ye=(xe/O*dt+-pe/O*Math.sin(l.ta+$.fase)*.28)*$.vel*te,ot=(pe/O*dt+xe/O*Math.sin(l.ta+$.fase)*.28)*$.vel*te,$.cd-=M*te,$.cd<=0&&Ze($)){for(const Nt of[-.18,0,.18])An($.x,$.y,xt+Nt,82,Ia()*($.buffT>0?1.5:1));$.cd=2.5+Math.random()*.8}}else if($.tipo==="bombardeiro"){const dt=O>120?.9:.18;ye=xe/O*dt*$.vel*te,ot=pe/O*dt*$.vel*te,$.cd-=M*te,$.cd<=0&&Ze($)&&(qe($.x,$.y,$.buffT>0?2:1,1.15),$.cd=4+Math.random()*1.2)}else if($.tipo==="fulminante"){const dt=O>125?.9:.18,xt=Math.atan2(pe,xe);ye=(xe/O*dt+-pe/O*Math.sin(l.ta*1.7+$.fase)*.28)*$.vel*te,ot=(pe/O*dt+xe/O*Math.sin(l.ta*1.7+$.fase)*.28)*$.vel*te,$.cd-=M*te,$.cd<=0&&Ze($)&&(l.raios.push({x:$.x,y:$.y,ang:xt,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:Ia(),dono:$}),$.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if($.tipo==="curandeiro"){const dt=l.inimigos.filter(xt=>xt!==$&&!xt.morto&&xt.hp<xt.hpMax&&xt.tipo!=="chefe").sort((xt,Nt)=>Math.hypot(xt.x-$.x,xt.y-$.y)-Math.hypot(Nt.x-$.x,Nt.y-$.y))[0];if(ye=xe/O*$.vel*.68,ot=pe/O*$.vel*.68,dt){const xt=dt.x-$.x,Nt=dt.y-$.y,wn=Math.hypot(xt,Nt)||1;ye+=xt/wn*$.vel*.32,ot+=Nt/wn*$.vel*.32}if($.cd-=M,$.cd<=0&&dt&&Math.hypot(dt.x-$.x,dt.y-$.y)<Ps){const xt=Math.max(1,Math.ceil(dt.hpMax*.22));dt.hp=Math.min(dt.hpMax,dt.hp+xt),dt.suporteFx=.8,$.suporteFx=.8,Zt(dt.x,dt.y-8,`+${xt}`,"#7dff9a"),$t(dt.x,dt.y,5,["#7dff9a","#ffffff"],35),$.cd=2.7+Math.random()*.8}}else if($.tipo==="amplificador"){const dt=l.inimigos.filter(Nt=>Nt!==$&&!Nt.morto&&Nt.tipo!=="chefe"&&Math.hypot(Nt.x-$.x,Nt.y-$.y)<Ps);for(const Nt of dt)Nt.buffT=Math.max(Nt.buffT||0,.4);dt.length&&($.suporteFx=.25);const xt=O>85?.72:.2;ye=xe/O*xt*$.vel,ot=pe/O*xt*$.vel}const kt=o.fatorLento($.x,$.y);$.x+=ye*M*kt,$.y+=ot*M*kt,o.empurrar($,hi[$.tipo].raio,{x:l.nx,y:l.ny},$.vel*M*.9),$.piscar=Math.max(0,$.piscar-M)}l.inimigos=l.inimigos.filter($=>$.tipo==="chefe"||Math.hypot($.x-l.nx,$.y-l.ny)<520);const De={x:l.nx,y:l.ny};o.empurrar(De,ua),l.nx=De.x,l.ny=De.y,l.lentidao=o.fatorLento(l.nx,l.ny);for(let $=l.itens.length-1;$>=0;$--){const xe=l.itens[$];xe.vida-=M;const pe=l.nx-xe.x,O=l.ny-xe.y,te=Math.hypot(pe,O)||1;if(xe.tipo==="moedaEsp"&&te<l.raioIma*1.3&&(xe.x+=pe/te*90*M,xe.y+=O/te*90*M),te<ua+8){Q(xe),l.itens.splice($,1);continue}xe.vida<=0&&l.itens.splice($,1)}for(let $=l.cristais.length-1;$>=0;$--){const xe=l.cristais[$];xe.x+=xe.vx*M,xe.y+=xe.vy*M;const pe=Math.pow(.05,M);xe.vx*=pe,xe.vy*=pe;const O=l.nx-xe.x,te=l.ny-xe.y,ye=Math.hypot(O,te)||1;if(l.imaT>0)xe.x+=O/ye*280*M,xe.y+=te/ye*280*M;else if(ye<l.raioIma){const ot=70+(l.raioIma-ye)*4;xe.x+=O/ye*ot*M,xe.y+=te/ye*ot*M}ye<ua+l.raioPegar&&(l.xp+=xe.v*l.bonusXp*(l.buffXpT>0?2:1),l.cristais.splice($,1),$t(xe.x,xe.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(xe.v,6)*60,.05,"square",.03))}}function Pt(){let M=null,g=1/0;for(const ee of l.inimigos){if(ee.sumido>0||!Ze(ee))continue;const ae=Math.hypot(ee.x-l.nx,ee.y-l.ny);ae<g&&(g=ae,M=ee)}let N=null,k=120;for(const ee of l.rochas){if(!Ze(ee))continue;const ae=Math.hypot(ee.x-l.nx,ee.y-l.ny);ae<k&&(k=ae,N=ee)}return N&&(!M||g>45)?N:M}const Tn=M=>M.r||hi[M.tipo].raio;function Hn(M){ze!=="jogando"||!l||M>=2&&!l.slots[M-2]||l.arma!==M&&(l.arma=M,n(M===2?440:600,.05,"square",.03))}function li(){if(l.arma<2||l.slots[l.arma-2]!=="orbes")return[];const M=1+l.armasNivel.orbes,g=20+M*1.5;return Array.from({length:M},(N,k)=>({x:l.nx+Math.cos(l.orbeAng+k*Math.PI*2/M)*g,y:l.ny+Math.sin(l.orbeAng+k*Math.PI*2/M)*g}))}function aa(M,g){const N=l.armasNivel.missil,k=24*(1+.16*(N-1)),ee=(5+l.dano*2)*l.danoGlobal*(1+.32*(N-1));l.ondas.push({x:M,y:g,r:0,max:k,v:170,cor:"#ff9a3a"}),$t(M,g,14,["#ffd23f","#ff7a3a","#ffffff"],80),l.tremor=Math.max(l.tremor,.1);for(const ae of[...l.inimigos])!(ae.sumido>0)&&Math.hypot(ae.x-M,ae.y-g)<k+hi[ae.tipo].raio&&ia(ae,ee);for(const ae of[...l.rochas])if(Math.hypot(ae.x-M,ae.y-g)<k+ae.r)for(let Te=0;Te<3&&l.rochas.includes(ae);Te++)H(ae);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function zt(M){const g=l.arma>=2?l.slots[l.arma-2]:"normal",N=l.recM*l.recargaGlobal;l.laser=null;let k=!1;if(g==="laser"&&!l.laserQuente){const pe=l.armasNivel.laser,O=Pt(),te=l.laserAlc*(1+.18*(pe-1));if(O&&Math.hypot(O.x-l.nx,O.y-l.ny)<te+Tn(O)){k=!0;const ye=Math.atan2(O.y-l.ny,O.x-l.nx),ot=Math.cos(ye),kt=Math.sin(ye);if(l.mira=ye,l.laser={ang:ye,len:te},l.laserE-=M*1.15,l.laserE<=0&&(l.laserE=0,l.laserQuente=!0,n(180,.2,"sawtooth",.04)),l.laserTick-=M,l.laserTick<=0){l.laserTick=.1,l.laserN+=1;const dt=l.laserDano*(.5+.5*l.dano)*l.danoGlobal*(1+.3*(pe-1))*.1;for(const xt of[...l.inimigos]){const Nt=xt.x-l.nx,wn=xt.y-l.ny,Rn=Nt*ot+wn*kt,B=Math.abs(-Nt*kt+wn*ot),Oe=hi[xt.tipo].raio;!(xt.sumido>0)&&Rn>0&&Rn<te+Oe&&B<Oe+3&&(ia(xt,dt),Math.random()<.4&&$t(xt.x,xt.y,1,["#8bd3ff","#ffffff"],40))}if(l.laserN%3===0)for(const xt of[...l.rochas]){const Nt=xt.x-l.nx,wn=xt.y-l.ny,Rn=Nt*ot+wn*kt,B=Math.abs(-Nt*kt+wn*ot);Rn>0&&Rn<te+xt.r&&B<xt.r+2&&H(xt)}re("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!k){const pe=Math.max(1,l.armasNivel.laser),O=l.laserMax*(1+.18*(pe-1));l.laserE=Math.min(O,l.laserE+M*O*.13*N*(1+.18*(pe-1))),l.laserQuente&&l.laserE>=l.laserMax*.6&&(l.laserQuente=!1)}if(g==="missil"&&(l.missilT-=M,l.missilT<=0)){const pe=[...l.inimigos.filter(O=>!(O.sumido>0)&&Ze(O)),...l.rochas.filter(Ze)].map(O=>({o:O,d:Math.hypot(O.x-l.nx,O.y-l.ny)})).filter(O=>O.d<135).sort((O,te)=>O.d-te.d);if(pe.length){const O=l.armasNivel.missil,te=1+(O>=3?1:0)+(O>=4?1:0);for(let ye=0;ye<te;ye++){const ot=pe[ye%pe.length].o;l.misseis.push({x:l.nx,y:l.ny,ang:Math.atan2(ot.y-l.ny,ot.x-l.nx)+(ye-(te-1)/2)*.9,alvo:ot,vida:2,v:70})}l.missilMax=3.6/(N*(1+.22*(O-1))),l.missilT=l.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else l.missilT=0}for(let pe=l.misseis.length-1;pe>=0;pe--){const O=l.misseis[pe],te=O.alvo,ye=te&&te.hp>0&&!te.morto&&(l.inimigos.includes(te)||l.rochas.includes(te));if(ye){let kt=Math.atan2(te.y-O.y,te.x-O.x)-O.ang;kt=Math.atan2(Math.sin(kt),Math.cos(kt)),O.ang+=Math.max(-6*M,Math.min(6*M,kt))}O.v=Math.min(150,O.v+160*M),O.x+=Math.cos(O.ang)*O.v*M,O.y+=Math.sin(O.ang)*O.v*M,O.vida-=M,Math.random()<.6&&l.parts.push({x:O.x,y:O.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(ye&&Math.hypot(te.x-O.x,te.y-O.y)<Tn(te)+3||O.vida<=0)&&(l.misseis.splice(pe,1),aa(O.x,O.y))}if(g==="orbes"){const pe=l.armasNivel.orbes;l.orbeAng+=M*3.2*(1+.18*(pe-1))*l.recargaGlobal;const O=(2+l.dano*.5)*l.danoGlobal*(1+.32*(pe-1));for(const te of li()){for(const ye of[...l.inimigos])ye.sumido>0||(ye.cdOrbe=(ye.cdOrbe||0)-M,ye.cdOrbe<=0&&Math.hypot(te.x-ye.x,te.y-ye.y)<hi[ye.tipo].raio+4&&(ia(ye,O),ye.cdOrbe=.35,$t(ye.x,ye.y,2,["#ff3bd4","#ffffff"],40)));for(const ye of[...l.rochas])ye.cdOrbe=(ye.cdOrbe||0)-M,ye.cdOrbe<=0&&Math.hypot(te.x-ye.x,te.y-ye.y)<ye.r+4&&(H(ye),ye.cdOrbe=.5)}}const ee=Math.max(1,l.armasNivel.turbo),ae=3+.75*(ee-1);l.boostMax=ae,g==="turbo"&&l.movendo&&l.boostE>0?(l.boostE=Math.max(0,l.boostE-M),Math.random()<.45&&l.parts.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vx:-l.dirX*20,vy:-l.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):l.boostE=Math.min(ae,l.boostE+M*.5*N*(1+.12*(ee-1)));const Te=Math.max(1,l.armasNivel.cura);if(l.curaMax=Math.max(4.5,(11-1.6*(Te-1))/N),l.curaCd=Math.max(0,l.curaCd-M),g==="cura"&&l.curaCd<=0&&l.hp<l.maxHp){const pe=1+(Te>=3?1:0)+(Te>=4?1:0);l.hp=Math.min(l.maxHp,l.hp+pe),l.curaCd=l.curaMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:30,v:80,cor:"#7dff9a"}),$t(l.nx,l.ny,12,["#7dff9a","#ffffff"],45),Zt(l.nx,l.ny-13,`+${pe} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const De=Math.max(1,l.armasNivel.escudo);l.escudoMax=Math.max(6,(13-1.3*(De-1))/N),l.escudoCd=Math.max(0,l.escudoCd-M),g==="escudo"&&l.escudoCd<=0&&l.escudoT<=0&&(l.escudoT=2.4+.75*(De-1),l.escudoCd=l.escudoMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),Zt(l.nx,l.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const $=Math.max(1,l.armasNivel.salto);if(l.saltoMax=Math.max(3.5,(8-.85*($-1))/N),l.saltoCd=Math.max(0,l.saltoCd-M),l.saltoCargaMax=Math.max(.42,.82-.1*($-1)),g!=="salto"||!l.movendo?l.saltoCarga=0:l.saltoCd<=0&&l.saltoCarga<=0&&(l.saltoCarga=l.saltoCargaMax,n(180,.16,"sine",.04)),g==="salto"&&l.saltoCarga>0&&(l.saltoCarga-=M,Math.random()<.55&&l.parts.push({x:l.nx+(Math.random()-.5)*18,y:l.ny+(Math.random()-.5)*18,vx:-l.dirX*8,vy:-l.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),l.saltoCarga<=0)){const pe=l.nx,O=l.ny,te=58+18*$;l.nx+=l.dirX*te,l.ny+=l.dirY*te,l.alien&&(l.nx=Math.max(pt.x0,Math.min(pt.x1,l.nx)),l.ny=Math.max(pt.y0,Math.min(pt.y1,l.ny))),l.saltoCd=l.saltoMax,l.invul=Math.max(l.invul,.35),l.ondas.push({x:pe,y:O,r:0,max:24,v:120,cor:"#a56bff"}),l.ondas.push({x:l.nx,y:l.ny,r:0,max:24,v:120,cor:"#a56bff"}),$t(pe,O,14,["#a56bff","#ffffff"],60),$t(l.nx,l.ny,14,["#a56bff","#ffffff"],60),l.flash=Math.max(l.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const xe=Math.max(1,l.armasNivel.drift);l.driftMax=Math.max(3.2,(7-.7*(xe-1))/N),l.driftCd=Math.max(0,l.driftCd-M),l.driftT=Math.max(0,l.driftT-M),g==="drift"&&l.driftCd<=0&&l.movendo&&l.driftT<=0&&(l.driftT=.75+.22*xe,l.driftCd=l.driftMax,l.driftAcc=0,l.tremor=Math.max(l.tremor,.12),n(130,.22,"sawtooth",.05)),l.driftT>0&&l.movendo&&(l.driftAcc-=M,l.driftAcc<=0&&(l.driftAcc=.055,l.trilhasFogo.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vida:1+.12*xe,max:1+.12*xe,nv:xe})));for(const pe of l.inimigos)pe.cdFogo=Math.max(0,(pe.cdFogo||0)-M);for(let pe=l.trilhasFogo.length-1;pe>=0;pe--){const O=l.trilhasFogo[pe];O.vida-=M;for(const te of[...l.inimigos])!(te.sumido>0)&&te.cdFogo<=0&&Math.hypot(te.x-O.x,te.y-O.y)<hi[te.tipo].raio+7&&(ia(te,(1.2+O.nv*.75)*l.danoGlobal),te.cdFogo=.22);O.vida<=0&&l.trilhasFogo.splice(pe,1)}}function en(M){for(let g=l.tiros.length-1;g>=0;g--){const N=l.tiros[g];if(N.x+=N.vx*M,N.y+=N.vy*M,Math.hypot(N.x-l.nx,N.y-l.ny)>260){l.tiros.splice(g,1);continue}let k=!1;for(const ee of[...l.inimigos])if(!(N.acertou.has(ee)||ee.sumido>0)&&Math.hypot(N.x-ee.x,N.y-ee.y)<hi[ee.tipo].raio+2)if(N.acertou.add(ee),$t(N.x,N.y,2,["#ffe14a","#ffffff"],40),ia(ee,N.dano),N.perf>0)N.perf-=1;else{k=!0;break}if(!k){for(const ee of[...l.rochas])if(!N.acertou.has(ee)&&Math.hypot(N.x-ee.x,N.y-ee.y)<ee.r+2)if(N.acertou.add(ee),H(ee),N.perf>0)N.perf-=1;else{k=!0;break}}k&&l.tiros.splice(g,1)}}function Si(M){for(let g=l.tirosInimigos.length-1;g>=0;g--){const N=l.tirosInimigos[g];if(N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0||Math.hypot(N.x-l.nx,N.y-l.ny)>420||l.alien&&(N.x<pt.x0-40||N.x>pt.x1+40||N.y<pt.y0-40||N.y>pt.y1+40)){l.tirosInimigos.splice(g,1);continue}Math.hypot(N.x-l.nx,N.y-l.ny)<ua+1.5&&(La(N.dano),$t(N.x,N.y,4,["#ff5a8a","#ffffff"],50),l.tirosInimigos.splice(g,1))}for(let g=l.raios.length-1;g>=0;g--){const N=l.raios[g];if(N.dono){if(N.dono.morto){l.raios.splice(g,1);continue}N.x=N.dono.x,N.y=N.dono.y}if(N.aviso>0){N.aviso-=M;continue}N.ligou||(N.ligou=!0,l.tremor=Math.max(l.tremor,.2),n(110,.4,"sawtooth",.06)),N.vida-=M,N.tick-=M,N.giro&&(N.ang+=N.giro*M),N.seg&&l.alien&&(N.x=l.alien.x,N.y=l.alien.y+8);const k=l.nx-N.x,ee=l.ny-N.y,ae=k*Math.cos(N.ang)+ee*Math.sin(N.ang),Te=Math.abs(-k*Math.sin(N.ang)+ee*Math.cos(N.ang));ae>0&&ae<400&&Te<8&&N.tick<=0&&(La(N.dano||1),N.tick=.3),N.vida<=0&&l.raios.splice(g,1)}for(let g=l.campos.length-1;g>=0;g--){const N=l.campos[g];if(N.aviso>0){N.aviso-=M,N.aviso<=0&&(l.tremor=Math.max(l.tremor,.15),n(100,.2,"sawtooth",.05));continue}N.vida-=M,N.tick-=M,Math.hypot(l.nx-N.x,l.ny-N.y)<N.r+3&&N.tick<=0&&(La(1),N.tick=.5),N.vida<=0&&l.campos.splice(g,1)}}function qt(){for(const M of[...l.inimigos]){const g=hi[M.tipo];if(Math.hypot(M.x-l.nx,M.y-l.ny)>=g.raio+ua||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(La(g.dano)){const ee=l.nx-M.x,ae=l.ny-M.y,Te=Math.hypot(ee,ae)||1;l.nx+=ee/Te*18,l.ny+=ae/Te*18}continue}if(g.dano<=0){const ee=M.x-l.nx,ae=M.y-l.ny,Te=Math.hypot(ee,ae)||1;M.x+=ee/Te*8,M.y+=ae/Te*8;continue}$t(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const k=l.inimigos.indexOf(M);k>=0&&l.inimigos.splice(k,1),La(g.dano)}}function yi(M){if(l.ta+=M,l.alien||(l.t+=M),l.invul=Math.max(0,l.invul-M),l.tremor=Math.max(0,l.tremor-M),l.flash=Math.max(0,l.flash-M),l.imaT=Math.max(0,l.imaT-M),l.turboT=Math.max(0,l.turboT-M),l.escudoT=Math.max(0,l.escudoT-M),l.buffVelT=Math.max(0,l.buffVelT-M),l.buffXpT=Math.max(0,l.buffXpT-M),l.buffDanoT>0&&(l.buffDanoT-=M,l.buffDanoT<=0&&(l.buffDanoT=0,l.danoGlobal/=1.5)),l.aviso=Math.max(0,l.aviso-M),l.comboT>0&&(l.comboT-=M,l.comboT<=0&&(l.combo=0)),l.upgFx&&(l.upgFx.t-=M,l.upgFx.t<=0&&(l.upgFx=null)),Qe(M),l.alien?dn(M):pn(M),l.recarga-=M,l.arma===1&&l.recarga<=0){const g=Pt();g?($o(g),l.recarga=1/(l.cadencia*l.recargaGlobal*(l.turboT>0?2:1))):l.recarga=.05}l.barreira<l.barreiraMax&&(l.barreiraT+=M,l.barreiraT>=l.tempoBarreira&&(l.barreira+=1,l.barreiraT=0,Zt(l.nx,l.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),zt(M),en(M),Si(M),qt();for(const g of l.ondas)g.r+=g.v*M;l.ondas=l.ondas.filter(g=>g.r<g.max);for(let g=l.parts.length-1;g>=0;g--){const N=l.parts[g];N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0&&l.parts.splice(g,1)}for(let g=l.textos.length-1;g>=0;g--){const N=l.textos[g];N.y-=14*M,N.vida-=M,N.vida<=0&&l.textos.splice(g,1)}for(const g of l.inimigos)g.piscar=Math.max(0,(g.piscar||0)-M);if(l.hp<=0&&!l.pendente)if(l.alien)l.pendente="expulso";else{Sp();return}if(l.pendente){const g=l.pendente;l.pendente=null,Ut(g==="vitoria");return}l.xp>=l.xpProx&&vp()}let jn=[];const Zr=M=>M.nivel?M.nivel(l):l.niveis[M.id]|0;function xp(M,g=3){const N=[...M],k=[],ee=De=>{const $=O=>(typeof O.peso=="function"?O.peso(l):O.peso)||1,xe=De.reduce((O,te)=>O+$(te),0);let pe=Math.random()*xe;for(const O of De)if(pe-=$(O),pe<=0)return O;return De[De.length-1]},ae=new Set(["dano_geral","reparo","armadura","motor","recarga_geral"]),Te=N.filter(De=>ae.has(De.id));if(Te.length&&g>0){const De=ee(Te),$=N.indexOf(De);k.push(De),N.splice($,1)}for(;N.length&&k.length<g;){const De=O=>(typeof O.peso=="function"?O.peso(l):O.peso)||1,$=N.reduce((O,te)=>O+De(te),0);let xe=Math.random()*$,pe=0;for(let O=0;O<N.length;O++)if(xe-=De(N[O]),xe<=0){pe=O;break}k.push(N.splice(pe,1)[0])}return k}function vp(){l.xp-=l.xpProx,l.nivel+=1,l.xpProx=Math.round(l.xpProx*1.3+2);const M=W_.filter(Te=>Zr(Te)<Te.max&&(!Te.requer||Te.requer(l)));if(jn=xp(M),!jn.length)return;ze="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),be.className="arc-painel arc-upgrade";const g=i("div","arc-up-topo"),N=i("div");N.append(i("small",null,`SUBIU PARA O NÍVEL ${l.nivel}`),i("h3",null,"ESCOLHA UM UPGRADE"));const k=i("div","arc-arsenal arc-atributos"),ee=l.niveis;for(const Te of[`✦ DANO ${ee.dano_geral|0}`,`♥ VIDA ${ee.reparo|0}`,`⬢ ARM ${l.armadura}`,`➤ VEL ${ee.motor|0}`,`↻ REC ${ee.recarga_geral|0}`])k.append(i("span","on",Te));g.append(N,k);const ae=i("div","arc-cartas");jn.forEach((Te,De)=>{const $=Zr(Te),xe=i("button","arc-carta");xe.style.setProperty("--cor",Te.cor||"#4aa8ff");const pe=i("span","arc-carta-topo");pe.append(i("i",null,Te.icone||"▲"),i("small",null,Te.grupo||"UPGRADE"),i("em",null,(typeof Te.raridade=="function"?Te.raridade(l):Te.raridade)||"COMUM"));const O=i("span","arc-up-pips");for(let te=1;te<=Te.max;te++)O.append(i("i",te<=$?"on":te===$+1?"prox":""));xe.append(pe,i("b",null,Te.nome),i("span","arc-desc",Te.desc),O,i("strong",null,`[${De+1}] ESCOLHER · N${$} → N${$+1}`)),xe.onclick=()=>Jf(De),ae.append(xe)}),be.replaceChildren(g,ae,i("p","arc-up-dica","Dano, vida, armadura, velocidade e recarga afetam a nave inteira. Evoluções de arma continuam específicas.")),be.hidden=!1}function Jf(M){if(ze!=="escolha"||!jn[M])return;const g=jn[M];g.aplicar(l),g.nivel||(l.niveis[g.id]=(l.niveis[g.id]|0)+1),On(),l.upgFx={t:1,max:1},$t(l.nx,l.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),Zt(l.nx,l.ny-16,`▲ ${g.nome}`,"#ffe14a"),be.hidden=!0,ze="jogando",Be=performance.now(),n(660,.08,"triangle",.05)}const ml=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","cadencia","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Vida, blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco","armadura"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Amplificador global e módulos específicos",lado:"dir",ancora:[.88,.42],ids:["dano","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],ir=document.createElement("canvas");ir.width=ir.height=128,ir.className="of-nave";const tn=ir.getContext("2d");tn.imageSmoothingEnabled=!1;let gl=null,Kr=null;function Mp(M){const g=bn(128,128),N="#2e7de0",k="#8b93a8",ee="#5a6176",ae="#c9cdd8",Te="#171b2c",De="#ff7a3a",$="#e2533a";for(const[O,te]of[[44,34],[82,92]]){for(let ye=0;ye<3;ye++)g.linha(O+ye,92,te+ye,118,ye===1?k:ee);g.retangulo(te-5,118,13,3,ae)}g.retangulo(0,122,128,6,"#12172b");for(let O=0;O<128;O+=8)g.retangulo(O,123,4,4,"#ffd23f");g.disco(62,60,38,N),g.disco(65,62,33,Te),g.elipse(46,30,7,3,"#cfe9ff"),g.elipse(40,36,3,2,"#9cc9ff");for(const[O,te,ye,ot]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])g.retangulo(O,te,ye,ot,ee),g.retangulo(O,te,ye,1,k),g.retangulo(O+2,te+3,ye-4,2,"#2d3348");for(const[O,te,ye,ot]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])g.linha(O,te,ye,ot,De),g.linha(O+1,te+1,ye+1,ot+1,"#b34a1e");for(const[O,te,ye]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])g.pixel(O,te,ye);g.disco(65,62,14,k),g.disco(65,62,12,"#10131f");for(const[O,te]of[[50,47],[79,47],[50,76],[79,76]])g.retangulo(O,te,3,3,ae);for(let O=0;O<M.bateria;O++)g.retangulo(51+O*5,85,4,6,"#10131f"),g.retangulo(52+O*5,86,2,4,"#7dff9a");g.disco(80,34,5,ae),g.disco(80,34,4,"#8bd3ff"),g.retangulo(77,33,6,1,"#ffffff");for(let O=0;O<M.casco;O++){const te=2.6+O*.5,ye=Math.round(62+Math.cos(te)*35),ot=Math.round(60+Math.sin(te)*35);g.retangulo(ye-2,ot-2,5,5,ee),g.retangulo(ye-1,ot-1,3,3,ae)}const xe=1+M.projetil,pe=18+Math.floor(M.dano*1.6);for(let O=0;O<xe;O++){const te=48+O*9;g.retangulo(88,te-2,8,9,k),g.retangulo(90,te,pe,5,$),g.retangulo(90,te,pe,1,"#ff9a6a"),g.retangulo(90+pe,te-1,3,7,ae),M.lente>0&&g.disco(90+pe+5,te+2,2,"#7be3ff");for(let ye=0;ye<M.cadencia;ye++)g.retangulo(92+ye*4,te+1,1,3,"#ffd23f")}g.retangulo(16,50,24,22,k);for(const O of[20,26,32])g.retangulo(O,50,2,22,ee);g.poligono([[16,50],[8,44],[8,78],[16,72]],ee),g.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(g.retangulo(18,76,14,6,k),g.retangulo(14,76,4,6,ee)),M.motor>=2&&(g.poligono([[28,50],[32,41],[36,50]],De),g.poligono([[28,72],[32,81],[36,72]],De)),g.retangulo(63,10,3,14,k),g.disco(64,8,4,"#e2243a"),g.pixel(63,6,"#ffb3ba");for(let O=0;O<Math.min(4,M.ima);O++)g.elipse(72+O*5,17-O*2,4,2,O%2?k:ae);return M.xp>0&&(g.retangulo(55,14,2,8,k),g.disco(56,13,2,"#7dff9a")),g.contorno("#070a1a"),g.c}const Qr=(M,g,N,k)=>{tn.fillStyle=k;for(let ee=-N;ee<=N;ee++)for(let ae=-N;ae<=N;ae++)ae*ae+ee*ee<=N*N+.5&&tn.fillRect(M+ae,g+ee,1,1)};function Zf(M){const g=z.oficina,N=Kr&&M-Kr.t0<1.2?{i:Kr.i,u:(M-Kr.t0)/1.2}:null;tn.clearRect(0,0,128,128),gl&&tn.drawImage(gl,0,0);const k=g.nucleo>=4?["#ff7a2a","#ffc14a"]:g.nucleo>=2?["#22b85a","#7dff9a"]:["#2f8cff","#8bd3ff"],ee=Math.sin(M*4)>0?1:0;Qr(65,62,9+ee,k[0]),Qr(65,62,6,k[1]),Qr(65,62,3,"#ffffff"),tn.fillStyle=k[1];for(let xe=0;xe<6;xe++){const pe=M*2+xe*Math.PI/3;tn.fillRect(Math.round(65+Math.cos(pe)*12),Math.round(62+Math.sin(pe)*12),1,1)}const ae=xe=>{const pe=Math.round((8+g.motor*3+Math.floor(Math.random()*4))*(N&&N.i===1?1+1.5*(1-N.u):1));for(let O=0;O<pe;O++){const te=Math.max(1,Math.round((1-O/pe)*12));tn.fillStyle=O<pe*.35?"#fff0a0":O<pe*.7?"#ffc83d":"#ff7a3a",tn.fillRect(7-O,xe-(te>>1),1,te)}};ae(61),g.motor>=3&&ae(79),Math.floor(M*2)%2&&(tn.fillStyle="#ff9aa6",tn.fillRect(63,6,2,2));const Te=1+g.projetil,De=18+Math.floor(g.dano*1.6);if(Math.floor(M*3)%2)for(let xe=0;xe<Te;xe++)tn.fillStyle="#ffe14a",tn.fillRect(90+De+3,48+xe*9+2,2,1);const $=g.escudo>0?.35+.13*g.escudo:.12;tn.globalAlpha=Math.min(1,$),tn.fillStyle="#7dff9a";for(const[xe,pe]of[[48,!0],[51,g.escudo>=4]])if(pe)for(let O=0;O<72;O+=2){const te=O*Math.PI*2/72+M*.4;tn.fillRect(Math.round(62+Math.cos(te)*xe),Math.round(60+Math.sin(te)*xe),2,2)}tn.globalAlpha=1,N&&_p(N,g)}function _p(M,g){const N=ml[M.i],k=Math.round(N.ancora[0]*128),ee=Math.round(N.ancora[1]*128),ae=M.u,Te=(De,$,xe,pe,O=28)=>{tn.fillStyle=pe;for(let te=0;te<O;te++){const ye=te*Math.PI*2/O;tn.fillRect(Math.round(De+Math.cos(ye)*xe),Math.round($+Math.sin(ye)*xe),2,2)}};tn.globalAlpha=1-ae,Te(k,ee,4+ae*26,"#ffe14a"),tn.fillStyle="#ffffff";for(let De=0;De<10;De++){const $=De*.63+1,xe=ae*34;tn.fillRect(Math.round(k+Math.cos($)*xe),Math.round(ee+Math.sin($)*xe-ae*6),2,2)}if(M.i===0)Qr(65,62,12+Math.round(ae*8),"#ffffff");else if(M.i===2)Te(62,60,39,"#ffffff",64);else if(M.i===3)Te(64,8,ae*42,"#8bd3ff",36),Te(64,8,ae*24,"#ffffff",24);else if(M.i===4){const De=18+Math.floor(g.dano*1.6);for(let $=0;$<1+g.projetil;$++)Qr(90+De+6,50+$*9,4,"#ffe14a")}else M.i===5&&Te(62,60,48+ae*6,"#ffffff",72);tn.globalAlpha=1}function xl(){const M=Le.querySelector(".of-corpo");if(!M)return;const g=M.querySelector("svg");if(g.replaceChildren(),getComputedStyle(g).display==="none")return;const N=M.getBoundingClientRect(),k=ir.getBoundingClientRect(),ee="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(ae=>{const Te=ml[Number(ae.dataset.i)],De=ae.getBoundingClientRect(),$=(Te.lado==="esq"?De.right:De.left)-N.left,xe=(De.top+De.bottom)/2-N.top,pe=k.left+Te.ancora[0]*k.width-N.left,O=k.top+Te.ancora[1]*k.height-N.top,te=$+(Te.lado==="esq"?18:-18),ye=document.createElementNS(ee,"path");ye.setAttribute("d",`M${$} ${xe} L${te} ${xe} L${pe} ${O}`),ye.setAttribute("class","of-linha");const ot=document.createElementNS(ee,"circle");ot.setAttribute("cx",pe),ot.setAttribute("cy",O),ot.setAttribute("r",4),ot.setAttribute("class","of-ponto"),g.append(ye,ot)})}window.addEventListener("resize",()=>{ze==="oficina"&&xl()});function Kf(M=-1,g=""){const N=z.oficina;gl=Mp(N);const k=i("div","of-topo"),ee=i("button","arc-btn","VOLTAR [ESC]");ee.onclick=jf,k.append(i("h3",null,"OFICINA · ENGENHARIA DA NAVE"),i("span","of-moedas",`◆ ${z.moedas}`),ee);const ae=i("div","of-corpo"),Te=i("div","of-col"),De=i("div","of-col"),$=i("div","of-centro");$.append(ir,i("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),ml.forEach((O,te)=>{const ye=i("div",te===M?"of-parte upgradiada":"of-parte");ye.dataset.i=String(te),te===M&&ye.append(i("span","of-selo","▲ UPGRADE!")),ye.append(i("h4",null,O.nome),i("p","sub",O.sub));for(const ot of O.ids){const kt=Lf.find($e=>$e.id===ot),dt=N[ot],xt=dt>=kt.max,Nt=kt.custo(dt),wn=i("div",te===M&&ot===g?"of-melhoria upg":"of-melhoria"),Rn=i("div","info"),B=i("span","pips");for(let $e=0;$e<kt.max;$e++)B.append(i("i",$e<dt?$e===dt-1&&te===M&&ot===g?"on nova":"on":""));Rn.append(i("b",null,kt.nome),i("small",null,kt.desc),B);const Oe=i("button","arc-btn pequeno",xt?"MÁX":`◆${Nt}`);Oe.disabled=xt||z.moedas<Nt,Oe.onclick=()=>{z.moedas>=Nt&&!xt&&(z.moedas-=Nt,z.oficina[ot]+=1,se(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),Kr={i:te,t0:performance.now()/1e3},On(),Kf(te,ot),vl())},wn.append(Rn,Oe),ye.append(wn)}(O.lado==="esq"?Te:De).append(ye)});const xe=document.createElementNS("http://www.w3.org/2000/svg","svg");xe.setAttribute("class","of-svg"),ae.append(Te,$,De,xe);const pe=i("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");Le.replaceChildren(k,ae,pe),Zf(performance.now()/1e3),requestAnimationFrame(xl)}function vl(){D.textContent=`OFICINA (◆${z.moedas})`}function Qf(){ge=ze==="fim"?"fim":"inicio",ze="oficina",rt.hidden=!0,Ke.hidden=!0,Kf(),Le.hidden=!1,requestAnimationFrame(xl)}function jf(){ze==="oficina"&&(ze=ge,Le.hidden=!0,(ge==="fim"?Ke:rt).hidden=!1,vl())}function Sp(){ze="fim",w("fim");const M=Math.min(k_,Math.floor(l.kills/30)+Math.floor(l.nivel/3)),g=Math.floor(l.t),N=g>z.tempo||l.kills>z.kills||l.onda>z.onda;z.tempo=Math.max(z.tempo,g),z.kills=Math.max(z.kills,l.kills),z.onda=Math.max(z.onda,l.onda),z.skin=(z.skin+1+Math.floor(Math.random()*(Hi.length-1)))%Hi.length,z.moedas+=M,se(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),Ke.replaceChildren(i("h3",null,"FIM DE JOGO"),i("p",null,`Tempo: ${Zo(g)} · Monstros: ${l.kills} · Nível: ${l.nivel} · Onda: ${l.onda} · Melhor combo: x${l.melhorCombo}`),i("p","ganhou",`+${M+l.moedasRun} ◆ MOEDAS ESPACIAIS`),i("p","dica",`${l.moedasRun} coletadas + ${M} de bônus · Recorde: ${Zo(z.tempo)} · ${z.kills} monstros · ${z.onda} ondas${N?" · NOVO RECORDE!":""}`));const k=i("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");k.onclick=Ml;const ee=i("button","arc-btn sec",`OFICINA (◆${z.moedas})`);ee.onclick=Qf;const ae=i("button","arc-btn sec","SAIR");ae.onclick=ar,Ke.append(k,ee,ae),Ke.hidden=!1}const Zo=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,eu=M=>M>=6?a.cristais[6]:M>=3?a.cristais[3]:M>=2?a.cristais[2]:a.cristais[1],tu=(M,g,N,k,ee)=>{R.fillStyle="#070a1a",R.fillRect(M-1,g-1,N+2,6),R.fillStyle="#3a2030",R.fillRect(M,g,N,4),R.fillStyle=ee,R.fillRect(M,g,Math.max(0,Math.round(N*k)),4)};function yp(M){R.fillStyle="#0a0614",R.fillRect(0,0,Bt,Gt);for(let g=0;g<6;g++){const N=10+(M*22+g*40)%240;R.strokeStyle=`rgba(138, 92, 255, ${.28*(1-N/250)})`,R.lineWidth=1,R.beginPath(),R.arc(In,fa,N,0,Math.PI*2),R.stroke()}for(let g=0;g<40;g++)R.fillStyle=Math.sin(M*2+g)>0?"#9a86c0":"#3a2f60",R.fillRect(g*53%Bt,g*31%Gt,1,1);R.strokeStyle="#8a5cff",R.lineWidth=2,R.strokeRect(pt.x0-3,pt.y0-3,pt.x1-pt.x0+6,pt.y1-pt.y0+6)}function Ko(M,g,N,k,ee,ae="",Te=!1){const De=M-(N+Bt/2),$=g-(k+Gt/2),xe=Math.min((Bt/2-10)/(Math.abs(De)||1e-6),(Gt/2-10)/(Math.abs($)||1e-6)),pe=Math.round(Bt/2+De*xe),O=Math.round(Gt/2+$*xe);if(!(Te&&Math.floor(l.ta*6)%2===0)&&(R.fillStyle="#070a1a",R.fillRect(pe-3,O-3,7,7),R.fillStyle=ee,R.fillRect(pe-2,O-2,5,5),R.fillStyle="#ffffff",R.fillRect(pe-1,O-1,3,3),ae)){const te=pe<Bt/2;R.font="bold 8px monospace",R.textAlign=te?"left":"right";const ye=pe+(te?7:-7),ot=Math.max(10,Math.min(Gt-4,O+3));R.fillStyle="#070a1a",R.fillText(ae,ye+1,ot+1),R.fillStyle=Te?"#ff9aa6":ee,R.fillText(ae,ye,ot)}}function bp(){const M=performance.now()/1e3,g=l?l.cx:In,N=l?l.cy:fa;if(R.save(),l&&l.alien?yp(M):V.desenhar(R,g,N,M,pl()),!l){R.restore();return}const k=Math.round(g-Bt/2),ee=Math.round(N-Gt/2),ae=(B,Oe,$e=16)=>B>k-$e&&B<k+Bt+$e&&Oe>ee-$e&&Oe<ee+Gt+$e,Te=!l.alien;R.save(),l.tremor>0&&R.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),R.translate(-k,-ee),R.strokeStyle="rgba(74, 168, 255, 0.12)",R.lineWidth=1;for(const B of[30,62])R.beginPath(),R.arc(Math.round(l.nx),Math.round(l.ny),B,0,Math.PI*2),R.stroke();for(const B of l.campos){if(!ae(B.x,B.y,40))continue;const Oe=Math.round(B.x),$e=Math.round(B.y);if(B.aviso>0){const Ee=Math.floor(l.ta*8)%2===0;R.strokeStyle=Ee?"#ff3b4a":"#ffb3ba",R.lineWidth=1,R.setLineDash([3,3]),R.beginPath(),R.arc(Oe,$e,B.r,0,Math.PI*2),R.stroke(),R.setLineDash([]),R.fillStyle="rgba(255, 59, 74, 0.12)",R.beginPath(),R.arc(Oe,$e,Math.max(0,B.r*(1-B.aviso/(B.avisoMax||1.4))),0,Math.PI*2),R.fill()}else{R.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(l.ta*10)})`,R.beginPath(),R.arc(Oe,$e,B.r,0,Math.PI*2),R.fill(),R.strokeStyle="#ff8a3a",R.lineWidth=2,R.beginPath(),R.arc(Oe,$e,B.r,0,Math.PI*2),R.stroke();for(let Ee=0;Ee<6;Ee++){const ke=l.ta*3+Ee*1.05;R.fillStyle="#ffd23f",R.fillRect(Math.round(Oe+Math.cos(ke)*B.r*.6),Math.round($e+Math.sin(ke)*B.r*.6),2,2)}}}for(const B of l.campos)if(B.aviso>0&&B.ox!==void 0){const Oe=(B.avisoMax-B.aviso)/.45;if(Oe>=0&&Oe<1){const $e=Math.round(B.ox+(B.x-B.ox)*Oe),Ee=Math.round(B.oy+(B.y-B.oy)*Oe-Math.sin(Math.PI*Oe)*24);R.fillStyle="#070a1a",R.fillRect($e-3,Ee-3,6,6),R.fillStyle="#ff7a3a",R.fillRect($e-2,Ee-2,4,4),R.fillStyle="#ffffff",R.fillRect($e-1,Ee-2,2,1)}}if(Te){if(o.desenhar(R,k,ee,Bt,Gt,M),l.buraco&&ae(l.buraco.x,l.buraco.y,30)){y_(R,l.buraco.x,l.buraco.y,l.ta,Math.min(1,l.buraco.vida/3));const B=`${Math.ceil(l.buraco.vida)}s`,Oe=Math.round(l.buraco.x),$e=Math.round(l.buraco.y)-28;R.save(),R.font="bold 8px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(B,Oe+1,$e+1),R.fillStyle=l.buraco.vida<8&&Math.floor(l.ta*6)%2===0?"#ff9aa6":"#d9a8ff",R.fillText(B,Oe,$e),R.restore()}for(const B of l.rochas){if(!ae(B.x,B.y,20))continue;const Oe=B.hp<=B.hpMax*.34?2:B.hp<=B.hpMax*.67?1:0,$e=r[B.tam].quadros[Oe];B.piscar>0&&(R.globalAlpha=.6),R.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),R.globalAlpha=1}for(const B of l.itens)!ae(B.x,B.y)||B.vida<4&&B.tipo!=="moedaEsp"&&Math.floor(l.ta*8)%2===0||(ga[B.tipo]&&(R.save(),R.globalAlpha=.22+.14*Math.sin(l.ta*6+B.fase),R.fillStyle=ga[B.tipo].cor,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),10,0,Math.PI*2),R.fill(),R.restore()),R.drawImage(s[B.tipo],Math.round(B.x-6),Math.round(B.y-6+Math.sin(l.ta*4+B.fase))));for(const B of l.cristais)ae(B.x,B.y)&&R.drawImage(eu(B.v),Math.round(B.x-3.5),Math.round(B.y-4.5+Math.sin(l.ta*4+B.fase)))}for(const B of l.trilhasFogo){if(!ae(B.x,B.y,12))continue;const Oe=Math.max(0,B.vida/B.max),$e=1+Math.floor(Math.sin(l.ta*18+B.x)*1.5);R.globalAlpha=Math.max(.18,Oe),R.fillStyle="#8f1d20",R.fillRect(Math.round(B.x)-5,Math.round(B.y)-2,10,5),R.fillStyle="#ff5a2a",R.fillRect(Math.round(B.x)-3,Math.round(B.y)-4-$e,7,7+$e),R.fillStyle="#ffe14a",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-3-$e,3,4+$e),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x),Math.round(B.y)-3-$e,1,2),R.globalAlpha=1}for(const B of l.inimigos){if(!ae(B.x,B.y,40))continue;const Oe=Math.floor(l.ta*6+B.fase)%2;let $e;if(B.tipo==="alien"){const Ee=u(B.v);$e=(B.piscar>0?Ee.brancos:Ee.quadros)[Math.floor(l.ta*3)%2],R.globalAlpha=B.sumido>0?.25:B.estado==="carga"&&Math.floor(l.ta*16)%2===0?.6:1}else if(B.tipo==="chefe"){const Ee=h(B.b);$e=(B.piscar>0?Ee.brancos:Ee.quadros)[Math.floor(l.ta*4)%2];const ke=25+Math.sin(l.ta*4)*3;R.fillStyle="rgba(5, 0, 12, .72)",R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),ke,0,Math.PI*2),R.fill(),R.strokeStyle=Math.floor(l.ta*8)%2?"#ff233f":"#6c1230",R.lineWidth=2,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),ke+3,0,Math.PI*2),R.stroke()}else{const Ee=H_[B.tipo]||B.tipo,ke=p(B.v).m[Ee];$e=(B.piscar>0?ke.brancos:ke.quadros)[Oe],B.tipo==="fantasma"&&(R.globalAlpha=.85)}if(R.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),R.globalAlpha=1,B.tipo==="chefe")R.fillStyle="#ff233f",R.fillRect(Math.round(B.x)-7,Math.round(B.y)-5,4,2),R.fillRect(Math.round(B.x)+4,Math.round(B.y)-5,4,2),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x)-6,Math.round(B.y)-5,1,1),R.fillRect(Math.round(B.x)+5,Math.round(B.y)-5,1,1),B.movEsp&&B.movEsp.carga>0&&(R.strokeStyle=B.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",R.lineWidth=2,R.setLineDash([3,3]),R.beginPath(),B.movEsp.tipo==="minhoca"?R.arc(Math.round(B.x),Math.round(B.y),20+Math.sin(l.ta*12)*4,0,Math.PI*2):(R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(B.x+B.movEsp.dx*240),Math.round(B.y+B.movEsp.dy*240))),R.stroke(),R.setLineDash([]));else if(B.tipo==="curandeiro"){R.save(),R.globalAlpha=.3,R.strokeStyle="#7dff9a",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Ps,0,Math.PI*2),R.stroke(),R.restore();const Ee=9+Math.sin(l.ta*6+B.fase)*2;R.strokeStyle="#7dff9a",R.lineWidth=1,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Ee,0,Math.PI*2),R.stroke(),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-10,3,7),R.fillRect(Math.round(B.x)-3,Math.round(B.y)-8,7,3)}else if(B.tipo==="amplificador"){R.save(),R.globalAlpha=.3,R.strokeStyle="#ff7ab8",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Ps,0,Math.PI*2),R.stroke(),R.restore();const Ee=11+(l.ta*8+B.fase)%5;R.strokeStyle=`rgba(255, 122, 184, ${.9-(Ee-11)*.12})`,R.lineWidth=2,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Ee,0,Math.PI*2),R.stroke(),R.fillStyle="#ff7ab8";for(const ke of[-4,0,4])R.fillRect(Math.round(B.x+ke),Math.round(B.y-10-Math.abs(ke)/2),2,4)}else B.tipo==="fulminante"&&(R.strokeStyle="#38c8ff",R.lineWidth=1,R.beginPath(),R.moveTo(Math.round(B.x)-8,Math.round(B.y)-7),R.lineTo(Math.round(B.x)-3,Math.round(B.y)-12),R.lineTo(Math.round(B.x),Math.round(B.y)-8),R.lineTo(Math.round(B.x)+5,Math.round(B.y)-13),R.stroke());if(B.buffT>0){R.fillStyle="#ffe14a";for(const Ee of[-5,3])R.fillRect(Math.round(B.x+Ee),Math.round(B.y-13),3,1),R.fillRect(Math.round(B.x+Ee+1),Math.round(B.y-14),1,1)}}for(const B of l.tirosInimigos)ae(B.x,B.y,4)&&(R.fillStyle="#ff5a8a",R.fillRect(Math.round(B.x)-2,Math.round(B.y)-2,4,4),R.fillStyle="#ffd0e0",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-1,2,2));if(l.alien&&l.alien.estado==="aviso"){const B=l.alien;R.strokeStyle=Math.floor(l.ta*14)%2?"#ff3b4a":"#ffb3ba",R.lineWidth=2,R.setLineDash([4,4]),R.beginPath(),R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(B.x+B.dirX*300),Math.round(B.y+B.dirY*300)),R.stroke(),R.setLineDash([])}for(const B of l.raios){const Oe=B.x+Math.cos(B.ang)*400,$e=B.y+Math.sin(B.ang)*400;R.beginPath(),R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(Oe),Math.round($e));const Ee=B.cor||"#ff3bd4";B.aviso>0?(R.strokeStyle=Math.floor(l.ta*16)%2?Ee:"#ffffff",R.lineWidth=1,R.setLineDash([3,3]),R.stroke(),R.setLineDash([])):(R.strokeStyle=Ee,R.lineWidth=7,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=3,R.stroke())}for(const B of l.tiros)R.fillStyle=B.critico?"#ff5a2a":"#ffe14a",R.fillRect(Math.round(B.x)-(B.critico?2:1),Math.round(B.y)-(B.critico?2:1),B.critico?4:3,B.critico?4:3),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x),Math.round(B.y),1,1);if(l.laser){const B=Math.cos(l.laser.ang),Oe=Math.sin(l.laser.ang),$e=l.nx+B*l.laser.len,Ee=l.ny+Oe*l.laser.len;R.beginPath(),R.moveTo(Math.round(l.nx+B*7),Math.round(l.ny+Oe*7)),R.lineTo(Math.round($e),Math.round(Ee)),R.strokeStyle=Math.floor(l.ta*24)%2?"#38c8ff":"#8bd3ff",R.lineWidth=4,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1.5,R.stroke()}for(const B of l.misseis){const Oe=Math.cos(B.ang),$e=Math.sin(B.ang);R.fillStyle="#070a1a",R.fillRect(Math.round(B.x)-3,Math.round(B.y)-3,6,6),R.fillStyle="#ff9a3a",R.fillRect(Math.round(B.x+Oe*1)-2,Math.round(B.y+$e*1)-2,4,4),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x+Oe*2),Math.round(B.y+$e*2),1,1)}const De=l.invul>0&&Math.floor(l.ta*14)%2===0,$=Math.PI/8,xe=Math.round(l.mira/$)*$,pe=Math.round(l.nx),O=Math.round(l.ny),te=l.tiers||{motor:0,armas:0},ye=(B,Oe,$e)=>{for(let Ee=0;Ee<$e;Ee++)R.fillStyle=Ee<$e*.35?"#fff0a0":Ee<$e*.7?"#ffc83d":"#ff7a3a",R.fillRect(B-(Ee<$e*.6?1:0),Oe+Ee,Ee<$e*.6?2:1,1)},ot=l.arma>=2?l.slots[l.arma-2]:"normal",kt=ot==="turbo"&&l.boostE>0,dt=2+te.motor+(l.movendo?3:0)+(l.turboT>0||kt?3:0)+(l.driftT>0?5:0)+Math.floor(Math.random()*2);ye(pe,O+8,dt),te.motor>=2&&(ye(pe-5,O+7,Math.max(2,dt-3)),ye(pe+4,O+7,Math.max(2,dt-3))),R.fillStyle=l.driftT>0?"#ffffff":l.turboT>0||kt?"#ff7a3a":"#ffd23f";const xt=Math.min(4,l.projeteis),Nt=5+Math.min(4,Math.floor(te.armas/2)),wn=-Math.sin(xe),Rn=Math.cos(xe);for(let B=0;B<xt;B++){const Oe=(B-(xt-1)/2)*2.4;for(let $e=4;$e<=4+Nt;$e++)R.fillRect(Math.round(pe+Math.cos(xe)*$e+wn*Oe)-1,Math.round(O+Math.sin(xe)*$e+Rn*Oe)-1,2,2);z.oficina.lente>0&&(R.fillStyle="#7be3ff",R.fillRect(Math.round(pe+Math.cos(xe)*(5+Nt)+wn*Oe)-1,Math.round(O+Math.sin(xe)*(5+Nt)+Rn*Oe)-1,2,2),R.fillStyle=l.turboT>0?"#ff7a3a":"#ffd23f")}if(R.drawImage(De?q.branca:q.c,pe-10,O-10),l.upgFx){const B=1-l.upgFx.t/l.upgFx.max;R.globalAlpha=.7*(1-B),R.drawImage(q.branca,pe-10,O-10),R.globalAlpha=1-B,R.strokeStyle="#ffe14a",R.lineWidth=2,R.beginPath(),R.arc(pe,O,Math.max(0,8+B*22),0,Math.PI*2),R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1,R.beginPath(),R.arc(pe,O,Math.max(0,5+B*14),0,Math.PI*2),R.stroke(),R.globalAlpha=1}for(const[B,Oe,$e]of[[l.buffDanoT,"#ff3b4a",14],[l.buffVelT,"#ffd23f",16],[l.buffXpT,"#a56bff",18]])B>0&&(B>2.5||Math.floor(l.ta*8)%2===0)&&(R.save(),R.globalAlpha=.55,R.strokeStyle=Oe,R.lineWidth=1,R.setLineDash([2,3]),R.beginPath(),R.arc(pe,O,$e+Math.sin(l.ta*8)*1.2,0,Math.PI*2),R.stroke(),R.restore());l.escudoT>0&&(l.escudoT>1.5||Math.floor(l.ta*10)%2===0)&&(R.strokeStyle="#8bd3ff",R.lineWidth=2,R.beginPath(),R.arc(pe,O,11,0,Math.PI*2),R.stroke()),l.barreira>0&&(R.strokeStyle="#7dff9a",R.lineWidth=1,R.globalAlpha=.7,R.beginPath(),R.arc(pe,O,12+(l.barreira>1?2:0),0,Math.PI*2),R.stroke(),R.globalAlpha=1);for(const B of li()){const Oe=Math.round(B.x),$e=Math.round(B.y);R.fillStyle="#070a1a",R.fillRect(Oe-3,$e-3,7,7),R.fillStyle="#ff3bd4",R.fillRect(Oe-2,$e-2,5,5),R.fillStyle="#ffffff",R.fillRect(Oe-1,$e-1,2,2)}for(const B of l.parts)ae(B.x,B.y,4)&&(R.fillStyle=B.cor,R.fillRect(Math.round(B.x),Math.round(B.y),2,2));for(const B of l.ondas)R.strokeStyle=B.cor,R.lineWidth=2,R.globalAlpha=Math.max(0,1-B.r/B.max),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Math.max(0,B.r),0,Math.PI*2),R.stroke(),R.globalAlpha=1;R.font="bold 8px monospace",R.textAlign="center";for(const B of l.textos)R.globalAlpha=Math.min(1,B.vida*2),R.fillStyle="#070a1a",R.fillText(B.txt,Math.round(B.x)+1,Math.round(B.y)+1),R.fillStyle=B.cor,R.fillText(B.txt,Math.round(B.x),Math.round(B.y)),R.globalAlpha=1;if(R.restore(),Te){const B=l.cristais.filter(Oe=>!ae(Oe.x,Oe.y,2)).map(Oe=>({c:Oe,d:Math.hypot(Oe.x-l.nx,Oe.y-l.ny)})).filter(Oe=>Oe.d<620).sort((Oe,$e)=>Oe.d-$e.d).slice(0,6);R.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:Oe}of B){const $e=Oe.x-(k+Bt/2),Ee=Oe.y-(ee+Gt/2),ke=Math.min((Bt/2-10)/(Math.abs($e)||1e-6),(Gt/2-10)/(Math.abs(Ee)||1e-6));R.drawImage(eu(Oe.v),Math.round(Bt/2+$e*ke-3.5),Math.round(Gt/2+Ee*ke-4.5))}R.globalAlpha=1,l.buraco&&!ae(l.buraco.x,l.buraco.y,2)&&Ko(l.buraco.x,l.buraco.y,k,ee,"#c43fff",`${Math.ceil(l.buraco.vida)}s`,l.buraco.vida<8),l.chefe&&!ae(l.chefe.x,l.chefe.y,2)&&Ko(l.chefe.x,l.chefe.y,k,ee,"#ff3b4a");for(const Oe of l.itens)Oe.tipo==="moedaEsp"&&!ae(Oe.x,Oe.y,2)&&Ko(Oe.x,Oe.y,k,ee,"#38c8ff");for(const Oe of l.itens)ga[Oe.tipo]&&!ae(Oe.x,Oe.y,2)&&Ko(Oe.x,Oe.y,k,ee,ga[Oe.tipo].cor,`${Math.ceil(Oe.vida)}s`,Oe.vida<5)}if(!l.alien){const B=(Oe,$e,Ee,ke,at="center")=>{R.font="bold 8px monospace",R.textAlign=at,R.fillStyle="#070a1a",R.fillText(Oe,$e+1,Ee+1),R.fillStyle=ke,R.fillText(Oe,$e,Ee)};l.combo>=3&&B(`COMBO x${l.combo}`,Bt-8,22,l.combo>=50?"#ff7ab8":l.combo>=25?"#ff9a3a":l.combo>=10?"#ffe14a":"#ffffff","right")}l.chefe&&(R.fillStyle="rgba(40, 0, 15, .34)",R.fillRect(0,0,Bt,5),R.fillRect(0,Gt-5,Bt,5),R.fillRect(0,0,5,Gt),R.fillRect(Bt-5,0,5,Gt),R.font="bold 7px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(za[l.chefe.b].nome,In+1,8),R.fillStyle="#ff7084",R.fillText(za[l.chefe.b].nome,In,7),tu(In-60,11,120,l.chefe.hp/l.chefe.hpMax,"#ff3b4a")),l.alien&&tu(In-60,8,120,l.alien.hp/l.alien.hpMax,"#ff3bd4"),l.flash>0&&(R.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,l.flash*2.5)})`,R.fillRect(0,0,Bt,Gt)),R.restore()}let Qo="";function Ep(){if(!l)return;const M=l.arma>=2?l.slots[l.arma-2]:"normal",g=[l.buffDanoT>0?`DANO+ ${Math.ceil(l.buffDanoT)}`:"",l.buffVelT>0?`VELOC+ ${Math.ceil(l.buffVelT)}`:"",l.buffXpT>0?`XP×2 ${Math.ceil(l.buffXpT)}`:"",l.lentidao<1?"DETRITOS: LENTO":"",l.imaT>0?"ÍMÃ":"",l.escudoT>0?`ESCUDO ${Math.ceil(l.escudoT)}`:"",l.turboT>0?`TURBO ${Math.ceil(l.turboT)}`:"",M==="turbo"&&l.boostE>0?"HIPERPROPULSOR":"",l.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),N=`${l.hp}/${l.maxHp}|${l.nivel}|${Math.floor(l.xp)}|${l.xpProx}|${l.kills}|${Math.floor(l.t)}|${l.onda}|${l.fase}|${l.aviso>0}|${l.avisoTxt}|${g}|${z.moedas}|${!!l.alien}`;if(N===Qo)return;Qo=N,gt.replaceChildren(...Array.from({length:l.maxHp},(ee,ae)=>i("i",ae+1<=l.hp?"cheia":ae<l.hp?"meia":"vazia")));const k=Math.max(0,Math.round(l.hp*10)/10);gt.setAttribute("aria-label",`${k} de ${l.maxHp} pontos de vida · ${Math.round(Math.min(.5,l.armadura*.06)*100)}% de redução por armadura`),ce.textContent=`NV ${l.nivel}`,Ce.style.width=`${Math.min(100,l.xp/l.xpProx*100)}%`,he.setAttribute("aria-valuenow",String(Math.floor(l.xp))),he.setAttribute("aria-valuemax",String(l.xpProx)),st.textContent=`☠ ${l.kills}`,Xe.textContent=l.alien?"BURACO NEGRO":l.onda>0?`F${l.fase} · ONDA ${l.onda}${l.ondaFila>0?` · ${l.ondaFila} A CAMINHO`:""}`:"",Xe.classList.toggle("alerta",!!l.alien||l.ondaEstado==="chefe"),Pe.textContent=g,ft.textContent=`◆ ${z.moedas}`,Ie.hidden=!(l.aviso>0),Ie.textContent=l.avisoTxt,fe.textContent=Zo(Math.floor(l.t))}function Ap(){const M=l&&(ze==="jogando"||ze==="escolha"||ze==="pausa");if(Fe.style.visibility=M?"visible":"hidden",!!M)for(let g=1;g<=4;g++){const{b:N,nm:k,barra:ee}=We[g-1],ae=g===1?"normal":l.slots[g-2];let Te="VAZIO",De=-1;ae&&(Te=`${X_[ae]||Ks[ae].curto} · N${l.armasNivel[ae]}`,ae==="laser"?De=l.laserE/(l.laserMax*(1+.18*(l.armasNivel.laser-1))):ae==="missil"?De=1-Math.max(0,l.missilT)/l.missilMax:ae==="turbo"?De=l.boostE/l.boostMax:ae==="cura"?De=1-l.curaCd/l.curaMax:ae==="escudo"?De=l.escudoT>0?1:1-l.escudoCd/l.escudoMax:ae==="salto"?De=l.saltoCarga>0?1-l.saltoCarga/l.saltoCargaMax:1-l.saltoCd/l.saltoMax:ae==="drift"&&(De=l.driftT>0?1:1-l.driftCd/l.driftMax)),k.textContent!==Te&&(k.textContent=Te),ee.style.display=De<0?"none":"block",ee.style.width=`${Math.round(Math.max(0,Math.min(1,De))*100)}%`,N.classList.toggle("ativa",l.arma===g),N.classList.toggle("vazio",g>=2&&!ae),N.classList.toggle("quente",ae==="laser"&&l.laserQuente),N.disabled=g>=2&&!ae,N.setAttribute("aria-pressed",String(l.arma===g)),N.setAttribute("aria-label",`Arma ${g}: ${Te}${ae==="laser"&&l.laserQuente?", superaquecida":""}`)}}function Tp(){const M=ze==="jogando"||ze==="pausa";if(Me.hidden=!M,!M)return;const g=ze==="pausa";Me.textContent=g?"▶":"II",Me.title=g?"Continuar (Esc)":"Pausar (Esc)",Me.setAttribute("aria-label",g?"Continuar jogo":"Pausar jogo")}function nu(M){if(window.__curriculoArcadeGeracao!==t){tt=!1,cancelAnimationFrame(X);return}if(!tt)return;const g=Math.min((M-Be)/1e3,.05);Be=M,ze==="jogando"&&yi(g),ze==="oficina"&&Zf(M/1e3),V.passo(g),bp(),Ep(),Ap(),Tp(),X=requestAnimationFrame(nu)}function Ml(){Ue.clear(),ue.ativo=!1,K.hidden=!0,U(),y="normal",x.pause(),A.pause(),v.currentTime=0,I(),ja(),Jr(4),Qo="",rt.hidden=!0,Ke.hidden=!0,be.hidden=!0,ne.hidden=!0,Le.hidden=!0,ze="jogando",Be=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function jr(M){M&&ze==="jogando"?(ze="pausa",Ue.clear(),ue.ativo=!1,K.hidden=!0,ne.hidden=!1,_()):!M&&ze==="pausa"&&(ze="jogando",ne.hidden=!0,Be=performance.now(),I())}function wp(){tt||(tt=!0,ie.classList.add("aberto"),y="normal",x.pause(),A.pause(),I(),U(),z=_d(),_e.textContent=z.tempo||z.kills||z.onda?`RECORDE  ${Zo(z.tempo)}  ·  ${z.kills} MONSTROS  ·  ONDA ${z.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",l=null,ze="inicio",Qo="",ja(),rt.hidden=!1,Ke.hidden=!0,be.hidden=!0,ne.hidden=!0,Le.hidden=!0,gt.replaceChildren(),ce.textContent="",st.textContent="",fe.textContent="",Xe.textContent="",Pe.textContent="",ft.textContent=`◆ ${z.moedas}`,Ce.style.width="0",vl(),Be=performance.now(),X=requestAnimationFrame(nu),He.focus({preventScroll:!0}))}function ar(){tt&&(tt=!1,Ue.clear(),ue.ativo=!1,K.hidden=!0,ie.classList.remove("aberto"),_(),cancelAnimationFrame(X))}He.onclick=Ml,D.onclick=Qf,me.onclick=()=>jr(!1),Ge.onclick=ar,Me.onclick=()=>jr(ze==="jogando"),Ae.onclick=ar,ie.addEventListener("pointerdown",M=>{M.target===ie&&ze!=="jogando"&&ze!=="escolha"&&ar()}),window.addEventListener("visibilitychange",()=>{document.hidden&&jr(!0)});const iu=M=>{const g=Se.getBoundingClientRect();ue.x=(M.clientX-g.left)/g.width*Bt,ue.y=(M.clientY-g.top)/g.height*Gt},Rp=M=>{const g=Se.getBoundingClientRect(),N=(M.clientX-g.left)/g.width*Bt,k=(M.clientY-g.top)/g.height*Gt;ue.dx=N-ue.origemX,ue.dy=k-ue.origemY;const ee=ue.dx*(g.width/Bt),ae=ue.dy*(g.height/Gt),Te=Math.hypot(ee,ae)||1,$=Math.min(1,28/Te);Re.style.transform=`translate(calc(-50% + ${Math.round(ee*$)}px), calc(-50% + ${Math.round(ae*$)}px))`};Se.addEventListener("pointerdown",M=>{if(ze==="jogando"){if(ue.ativo=!0,ue.toque=M.pointerType!=="mouse",iu(M),ue.toque){const g=Se.getBoundingClientRect();ue.origemX=ue.x,ue.origemY=ue.y,ue.dx=ue.dy=0,K.style.left=`${Math.round(M.clientX-g.left)}px`,K.style.top=`${Math.round(M.clientY-g.top)}px`,Re.style.transform="translate(-50%, -50%)",K.hidden=!1}Se.setPointerCapture?.(M.pointerId)}}),Se.addEventListener("pointermove",M=>{ue.ativo&&(ue.toque?Rp(M):iu(M))});for(const M of["pointerup","pointercancel"])Se.addEventListener(M,()=>{ue.ativo=!1,ue.toque=!1,ue.dx=ue.dy=0,K.hidden=!0});return window.addEventListener("keyup",M=>Ue.delete(M.code)),window.addEventListener("blur",()=>Ue.clear()),window.addEventListener("keydown",M=>{if(tt){if(ut.includes(M.code)){M.preventDefault(),ze==="jogando"&&Ue.add(M.code);return}if(M.code==="Escape")M.preventDefault(),ze==="jogando"?jr(!0):ze==="pausa"?jr(!1):ze==="oficina"?jf():(ze==="inicio"||ze==="fim")&&ar();else if(M.code==="Space"||M.code==="Enter")(ze==="inicio"||ze==="fim")&&(M.preventDefault(),Ml());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const g=Number(M.code.slice(-1));ze==="escolha"?Jf(g-1):Hn(g)}}},!0),{abrir:wp,fechar:ar,estaAberto:()=>tt}}const yt=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},yd={mailto:()=>`mailto:${va.email}`,tel:()=>`tel:${va.telefoneTel}`,github:()=>va.github,linkedin:()=>va.linkedin,portfolio:()=>va.portfolio,repo:()=>va.repo},Df=n=>yd[n]?yd[n]():n,K_={email:()=>va.email,telefone:()=>va.telefone};function Nf(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function of(n){const e=yt("div","etiquetas");for(const t of n)e.append(yt("span","etq",t));return e}function Q_(n){const e=yt("a","btn");return e.href=Df(n.url),Nf(e),e.append(yt("span","ic",n.icone||"↗"),yt("span","tx",n.rotulo)),e}function j_(n){const e=yt("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=K_[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const e2=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function bd(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function t2(n){const e=yt("div","numeros jogo"),t=(i,a)=>{const r=yt("div","num");r.append(yt("b",null,String(i)),yt("span",null,a)),e.append(r)};if(n==="cassino"){const i=bd("curriculo-cassino-v1");if(!i)return yt("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=bd("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return yt("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t(e2(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function n2(n){const e=yt("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=yt("summary"),i=yt("span","tit");i.append(yt("b",null,n.titulo)),n.local&&i.append(yt("i",null,n.local)),t.append(i,yt("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=yt("div","corpo");if(n.texto&&a.append(yt("p",null,n.texto)),n.tags&&a.append(of(n.tags)),n.links){const r=yt("div","links");for(const s of n.links)r.append(Q_(s));a.append(r)}return e.append(t,a),e}const Ed={destaque:n=>yt("p","destaque",n.texto),texto:n=>yt("p",null,n.texto),dica:n=>yt("p","dica",n.texto),numeros:n=>{const e=yt("div","numeros");for(const t of n.itens){const i=yt("div","num");i.append(yt("b",null,t.v),yt("span",null,t.r)),e.append(i)}return e},etiquetas:n=>of(n.itens),grupo:n=>{const e=yt("div","grupo");return e.append(yt("h3",null,n.titulo),of(n.itens)),e},cartao:n2,estatisticas:n=>t2(n.fonte),links:n=>{const e=yt("div","contatos");for(const t of n.itens){const i=yt("div","contato"),a=yt("a","ln");a.href=Df(t.url),Nf(a);const r=yt("span","tx");r.append(yt("small",null,t.rotulo),yt("b",null,t.valor)),a.append(yt("span","ic",t.icone||"↗"),r),i.append(a),t.copiar&&i.append(j_(t.copiar)),e.append(i)}return e}};function i2(n,e){const t=yt("div","rodape"),i=yt("span","prog"),a=yt("span","pts");for(const r of e.zonas)a.append(yt("i",e.visitadas.has(r.id)?"vis":""));if(i.append(a,yt("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(yt("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const r=yt("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");r.href=Df("mailto"),Nf(r),t.append(r)}return t}function a2(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(r=>({tipo:"texto",texto:r})))t.push((Ed[a.tipo]??Ed.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const r of i)r!==a&&(r.open=!1)});return t.push(i2(n,e)),t}const r2=.32,Ad=.7;function o2({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const r=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,r,{passive:!0});return{atualizar(s,o){const f=t&&n()&&!o&&!document.hidden?r2:0;a+=Math.max(-s*Ad,Math.min(s*Ad,f-a)),e.volume=Math.max(0,Math.min(1,a)),f>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):f===0&&a<=.001&&!e.paused&&e.pause()}}}const Yh="curriculo-carinhos-v1";function s2(){try{const n=JSON.parse(localStorage.getItem(Yh));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function l2(n){try{localStorage.setItem(Yh,JSON.stringify(n))}catch{}}const c2=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let Td=null;function f2(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,r)=>{e.fillStyle=r,c2.forEach((s,o)=>[...s].forEach((f,c)=>{f==="X"&&e.fillRect(c+i,o+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let wd=null;function u2(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(o,f)=>o<=7&&f<=i[o];for(let o=-7;o<=7;o++)for(let f=-7;f<=7;f++)(a(Math.abs(o),Math.abs(f))||a(Math.abs(f),Math.abs(o)))&&(t.fillStyle=f+o>4?"#b01820":f+o<-4?"#ff5a5f":"#e3262d",t.fillRect(8+f,8+o,1,1));const r=t.getImageData(0,0,17,17).data,s=(o,f)=>o>=0&&f>=0&&o<17&&f<17&&r[(f*17+o)*4+3]>0;t.fillStyle="#3a0d12";for(let o=0;o<17;o++)for(let f=0;f<17;f++)!s(f,o)&&(s(f+1,o)||s(f-1,o)||s(f,o+1)||s(f,o-1))&&t.fillRect(f,o,1,1);return e.toDataURL()}function $h(n,e,t,i,a,r,s){for(let o=0;o<s;o++){const f=document.createElement("i"),c=i[Math.floor(Math.random()*i.length)];f.className="coracao",f.style.cssText=`background-image:url(${n});width:${e*c}px;height:${t*c}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(r)}px;animation-delay:${(o*.09).toFixed(2)}s;`,f.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),f.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),f.addEventListener("animationend",()=>f.remove()),document.body.append(f)}}function d2(n,e,t=5){Td??=f2(),$h(Td,9,8,[2,2,3],n,e,t)}function h2(n,e,t=6){wd??=u2(),$h(wd,17,17,[2,3,3],n,e,t)}function p2(n){const e=new Qt,t=new Qt;e.add(t);const i=n(3120732),a=n(2325061),r=new Mi({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:ni}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),o=new Mi({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),f=new Jn(1,6,4),c=new Jn(1,6,4),u=new En(1,1,1,5),h=(S,T,I,_,w,L)=>{const U=new G(S,0,T),V=new G(I,_,w),q=V.clone().sub(U),z=new At(u,a);z.scale.set(L,q.length(),L),z.position.copy(U).addScaledVector(q,.5),z.quaternion.setFromUnitVectors(new G(0,1,0),q.normalize()),t.add(z)},d=(S,T,I,_,w)=>{for(const L of[-1,1]){const U=new At(c,i);U.scale.set(.13*w,.025*w,.065*w),U.position.set(S+Math.cos(_)*.1*w*L,T,I+Math.sin(_)*.1*w*L),U.rotation.set(0,-_,L*.35),t.add(U)}},p=(S,T,I,_)=>{const w=new Qt;w.position.set(S,T,I),w.rotation.x=.95;for(let U=0;U<5;U++){const V=U/5*Math.PI*2,q=new At(f,r);q.scale.set(.075*_,.022*_,.15*_),q.position.set(Math.sin(V)*.1*_,0,Math.cos(V)*.1*_),q.rotation.y=V,w.add(q)}const L=new At(f,s);return L.scale.setScalar(.045*_),L.position.y=.025*_,w.add(L),t.add(w),w},m=(S,T,I)=>{const _=new At(f,o);_.scale.set(.04,.065,.04),_.position.set(S,T,I),t.add(_)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const E=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),x=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const A=new Yt;A.position.set(0,.85,.05),e.add(A);const P=new Yt;P.position.set(0,1.05,0),e.add(P);let y=0;return{raiz:e,cabeca:A,topo:P,carinho(){y=1},atualizar(S,T){y=Math.max(0,y-T*2.2);const I=Math.sin(y*Math.PI);t.rotation.z=Math.sin(S*1.3)*.045+Math.sin(y*18)*.12*y,t.rotation.x=Math.sin(S*.9+1)*.03,t.scale.setScalar(1+I*.22),E.rotation.y=Math.sin(S*.8)*.15,v.rotation.y=Math.sin(S*.7+2)*.2,x.rotation.y=Math.sin(S*.75+4)*.2}}}const Is={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Pr=32,Dr=24,m2=3,Jh=1,g2=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],x2={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function v2({cauda:n,olhos:e}){const t=g2.map(f=>[...f,...[...f].reverse()]),i=(f,c,u)=>{t[f][c]=u,t[f][23-c]=u};if(e==="piscando")for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"K"),i(9,f,"G");if(e==="feliz"){for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"G"),i(9,f,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Pr,a.height=Dr;const r=a.getContext("2d");t.forEach((f,c)=>f.forEach((u,h)=>{u!=="."&&(r.fillStyle=Is[u],r.fillRect(h+m2,c+Jh,1,1))})),x2[n].forEach(([f,c],u)=>{r.fillStyle=u%3===2?Is.D:Is.G,r.fillRect(f-1,c,2,1)});const s=r.getImageData(0,0,Pr,Dr).data,o=(f,c)=>f>=0&&c>=0&&f<Pr&&c<Dr&&s[(c*Pr+f)*4+3]>0;r.fillStyle=Is.K;for(let f=0;f<Dr;f++)for(let c=0;c<Pr;c++)!o(c,f)&&(o(c+1,f)||o(c-1,f)||o(c,f+1)||o(c,f-1))&&r.fillRect(c,f,1,1);return a}const Rd=1;function M2(){const n={},e=(d,p)=>{if(!n[d]){const m=new Io(v2(p));m.colorSpace=Gn,m.magFilter=m.minFilter=on,m.generateMipmaps=!1,n[d]=new bf({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Qt,i=new hh(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,Jh/Dr),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const r=a.getContext("2d"),s=r.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,32,32);const o=new At(new ea(.75,.5),new ji({map:new Io(a),transparent:!0,opacity:.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03;const f=new Yt;f.position.y=.55;const c=new Yt;c.position.y=.8,t.add(o,i,f,c);let u=0,h=0;return{raiz:t,cabeca:f,topo:c,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const E=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${E}-${v}`,{cauda:E,olhos:v});const x=1+Math.sin(d*2.2)*.012;i.scale.set(Pr*m*Rd,Dr*m*Rd*x,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const Zh="curriculo-futebol-v1",sf=.25,_2=.085,S2=1.6,pi=1.8,ki=.9,zn=.6,ho=new G(0,1,0),y2=new G(0,.4,.92).normalize();function b2(){try{return JSON.parse(localStorage.getItem(Zh))?.gols|0}catch{return 0}}function E2(n){try{localStorage.setItem(Zh,JSON.stringify({gols:n}))}catch{}}function A2(){const n=new sl(sf,2),e=(1+Math.sqrt(5))/2,t=[];for(const o of[-1,1])for(const f of[-e,e])t.push([0,o,f],[o,f,0],[f,0,o]);const i=t.map(o=>new G(...o).normalize()),a=n.attributes.position,r=new Float32Array(a.count*3),s=new G;for(let o=0;o<a.count;o+=3){s.set(0,0,0);for(let c=0;c<3;c++)s.add(new G(a.getX(o+c),a.getY(o+c),a.getZ(o+c)));s.normalize();const f=i.some(c=>s.dot(c)>Math.cos(.36));for(let c=0;c<3;c++)r.set(f?[.07,.07,.1]:[.97,.97,.97],(o+c)*3)}return n.setAttribute("color",new xi(r,3)),new At(n,new Mi({vertexColors:!0,flatShading:!0,roughness:.55}))}function T2(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Io(n);return t.wrapS=t.wrapT=Vs,t.magFilter=t.minFilter=on,t.generateMipmaps=!1,t}function w2(){const n=new Qt,e=new Mi({color:16119285,roughness:.5,flatShading:!0}),t=o=>new En(.045,.045,o,6),i=(o,f,c,u,h)=>{const d=new At(t(o),e);d.position.set(f,c,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const o of[-pi/2,pi/2])for(const f of[0,-zn])i(ki,o,ki/2,f,"y");for(const o of[0,-zn])i(pi+.09,0,ki,o,"x"),i(pi+.09,0,.04,o,"x");for(const o of[-pi/2,pi/2])i(zn,o,ki,-zn/2,"z"),i(zn,o,.04,-zn/2,"z");const a=(o,f)=>{const c=T2();return c.repeat.set(o/.15,f/.15),new At(new ea(o,f),new ji({map:c,transparent:!0,alphaTest:.3,side:ni,depthWrite:!1}))},r=a(pi,ki);r.position.set(0,ki/2,-zn);const s=a(pi,zn);s.rotation.x=Math.PI/2,s.position.set(0,ki,-zn/2),n.add(r,s);for(const o of[-pi/2,pi/2]){const f=a(zn,ki);f.rotation.y=Math.PI/2,f.position.set(o,ki/2,-zn/2),n.add(f)}return n.traverse(o=>{o.isMesh&&o.material===e&&(o.castShadow=!0)}),n}function R2(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new At(new ea(n*2,n*2),new ji({map:new Io(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function C2({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:r,dirsZonas:s,raioBloqueio:o,obstaculos:f,dirsSitios:c,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=b2(),E=0,v="jogando",x=0,A=-1;const P=new gi,y=new gi,S=new gi,T=new gi,I=new G,_=new G,w=new G,L=new G,U=new G,V=new G,q=new Qt,z=A2(),J=R2(.35);z.position.y=sf,z.castShadow=!0;const re=new Yt;re.position.y=.85,q.add(J,z,re);const W={d:new G(0,1,0),ue:0,un:0,escala:1,piv:null};W.piv=e(q,W.d.clone(),0);const ve=w2(),se=new Yt;se.position.set(0,1.5,-zn/2),ve.add(se);const ie={d:new G(0,1,0),ex:new G,ez:new G,escala:1,piv:null};ie.piv=e(ve,ie.d.clone(),0);const de=Pe=>{const ft=document.createElement("div");return ft.className="rotulo pet",ft.textContent=Pe,h.append(ft),ft},je=de("bola"),Ve=de("gol"),_t=()=>m?`gol · ${m}`:"gol";function ht(Pe,ft,fe){if(!fe){Pe.style.opacity="0";return}ft.getWorldPosition(w).project(u),Pe.style.transform=`translate(${Math.round((w.x*.5+.5)*window.innerWidth)}px, ${Math.round((-w.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Pe.style.opacity="1"}const gt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Pe=>new G(...Pe));function ce({folga:Pe,jogadorMin:ft=0,jogadorMax:fe=Math.PI,visivel:Me=-1,longe:Ae=[],tentativas:we=400}){V.copy(ho).applyQuaternion(P.copy(i).invert());const Se=new G;for(let R=0;R<we;R++){Se.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const K=Se.angleTo(V);if(!(K<ft||K>fe)&&!(Me>-1&&w.copy(Se).applyQuaternion(i).dot(y2)<Me)&&!(a(Se)<r+.1)&&!gt.some(Re=>a(w.copy(Se).addScaledVector(Re,.07).normalize())<r+.03)&&!Ae.some(({d:Re,min:Ie})=>Se.angleTo(Re)<Ie)&&!s.some((Re,Ie)=>Se.angleTo(Re)<o[Ie]+Pe+.1)&&!f.some(Re=>Se.angleTo(Re.d)<Re.r+Pe)&&!Object.values(c).some(Re=>Se.angleTo(Re)<.25+Pe))return Se.clone()}return null}function he(Pe,ft){ie.d.copy(Pe),ie.piv.quaternion.setFromUnitVectors(ho,Pe),ve.rotation.y=ft,T.copy(ie.piv.quaternion).multiply(y.setFromAxisAngle(ho,ft)),ie.ex.set(1,0,0).applyQuaternion(T),ie.ez.set(0,0,1).applyQuaternion(T),ie.escala=.01}function Ce(Pe){W.d.copy(Pe),W.piv.quaternion.setFromUnitVectors(ho,Pe),W.ue=W.un=0,W.escala=.01}function st(Pe){const ft=ce({folga:.3,jogadorMin:.9,jogadorMax:Pe?1.7:Math.PI,visivel:Pe?.3:-1})??ce({folga:.2,jogadorMin:.7,jogadorMax:Pe?1.9:Math.PI,visivel:Pe?.1:-1,tentativas:800})??ce({folga:.1,tentativas:800})??ie.d.clone();he(ft,Math.random()*Math.PI*2);const fe=ce({folga:.12,jogadorMin:.55,jogadorMax:Pe?1:Math.PI,visivel:Pe?.5:-1,longe:[{d:ft,min:.9}]})??ce({folga:.06,jogadorMin:.4,tentativas:800})??W.d.clone();Ce(fe)}st(!0);function Xe(){v="comemorando",x=E+1,m+=1,E2(m),Ve.textContent=_t(),se.getWorldPosition(w).project(u);const Pe=(w.x*.5+.5)*window.innerWidth,ft=(-w.y*.5+.5)*window.innerHeight;h2(Pe,ft+40,6);const fe=document.createElement("div");fe.className="popup",fe.textContent="GOL!",fe.style.left=`${Math.round(Pe)}px`,fe.style.top=`${Math.round(ft)}px`,fe.style.fontSize="30px",document.body.append(fe),setTimeout(()=>fe.remove(),1e3),[523,659,784,1047,1319].forEach((Me,Ae)=>p(Me,Ae===4?.4:.11,"square",.05,Ae*.09))}return{teste:{bola:W,gol:ie,colocarBola:Ce,colocarGol:he,golsAtuais:()=>m},atualizar(Pe,{vLeste:ft,vNorte:fe,VEL:Me,pulando:Ae,pausado:we}){if(we)return;E+=Pe,P.copy(i).invert();const Se=v==="comemorando";U.copy(W.d),I.copy(W.d).applyQuaternion(i);const R=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!Se&&!Ae&&R<_2){const F=I.x,rt=-I.z,He=Math.hypot(F,rt)||1,D=ft*Me,b=fe*Me,Y=Math.hypot(D,b);let Z,le,_e;Y>.12&&(D*F+b*rt)/(Y*He)>-.2?(Z=D/Y*.75+F/He*.65,le=b/Y*.75+rt/He*.65,_e=Math.max(Math.hypot(W.ue,W.un),Y*1.5+.25)):(Z=F/He,le=rt/He,_e=.5);const be=Math.hypot(Z,le)||1;W.ue=Z/be*_e,W.un=le/be*_e,Y>.12&&E-A>.22&&(A=E,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const K=Math.exp(-(Se?5:S2)*Pe);W.ue*=K,W.un*=K;const Re=Math.hypot(W.ue,W.un);Re<.01?W.ue=W.un=0:(L.set(-W.un,0,-W.ue).normalize(),y.setFromAxisAngle(L,Re*Pe),I.applyQuaternion(y),W.d.copy(I).applyQuaternion(P).normalize());const Ie=(F,rt)=>{const He=Math.cos(rt);W.d.dot(F)<=He||(L.crossVectors(F,W.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),W.d.applyQuaternion(y.setFromAxisAngle(L,rt-Math.acos(Math.min(1,W.d.dot(F))))).normalize(),W.ue*=.3,W.un*=.3)};s.forEach((F,rt)=>Ie(F,o[rt]+.03));for(const F of f)Ie(F.d,F.r+.03);if(W.piv.quaternion.premultiply(y.setFromUnitVectors(U,W.d)),Re>=.01&&(w.set(W.ue,0,-W.un).normalize().applyQuaternion(P).applyQuaternion(T.copy(W.piv.quaternion).invert()),L.crossVectors(ho,w),L.lengthSq()>1e-9&&z.quaternion.premultiply(S.setFromAxisAngle(L.normalize(),Re*t*Pe/sf))),W.escala=W.escala+(1-W.escala)*(1-Math.exp(-6*Pe)),q.scale.setScalar(W.escala),ie.escala=ie.escala+(1-ie.escala)*(1-Math.exp(-6*Pe)),ve.scale.setScalar(ie.escala*(Se?1+Math.sin((E-x)*20)*.06:1)),Se)E>=x&&(v="jogando",st(!1));else{w.copy(W.d).sub(ie.d);const F=w.dot(ie.ex)*t,rt=w.dot(ie.ez)*t+zn/2;Math.abs(F)<pi/2-.12&&Math.abs(rt)<zn/2-.02&&Math.abs(w.dot(ie.d))<.2&&Xe()}_.copy(ie.d).applyQuaternion(i),ht(je,re,I.dot(d)>.2),ht(Ve,se,_.dot(d)>.2)}}}const Kn=5,Ea=6.5/Kn,lf=.7,Qs=new G(0,1,0),P2=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function cf(n,e){const t=e*Math.PI/180;return new G(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const I2=n=>cf(...P2[n]??[1.2+n%3*.5,n*137.5]),oi=xn.map((n,e)=>I2(e)),Qi={jasmim:cf(.4,180),mazzy:cf(.5,295)},Kh=(n,e)=>Object.values(Qi).some(t=>n.angleTo(t)<e),L2=.6,Qh=n=>n.escala??L2,Ho=xn.map(n=>1.85*Qh(n)/Kn+.03),D2=Ho.map(n=>n+.22),N2=(n,e,t)=>n+(e-n)*t,Xr=(n,e,t)=>Math.max(e,Math.min(t,n)),zs=(n,e,t,i)=>N2(n,e,1-Math.exp(-t*i));function Uf(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function U2(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function oc(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,f=t-r,c=m=>m*m*(3-2*m),u=c(s),h=c(o),d=c(f);let p=0;for(let m=0;m<2;m++)for(let E=0;E<2;E++)for(let v=0;v<2;v++){const x=(m?u:1-u)*(E?h:1-h)*(v?d:1-d);p+=x*U2(i+m,a+E,r+v)}return p}const Cd=Math.cos(.5);function dl(n){const e=oc(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+oc(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+oc(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>Cd&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of oi){const a=n.dot(i);a>Cd&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const hl=.5,O2=window.matchMedia?.("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<900,F2=Number(navigator.deviceMemory||8)<=4,Oo=O2||F2,$n=new $M({antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});$n.setPixelRatio(Math.min(window.devicePixelRatio||1,Oo?1:2));$n.shadowMap.enabled=!0;$n.shadowMap.type=vo;document.body.appendChild($n.domElement);const Qn=new ch;Qn.background=new vt(725030);const sn=new ti(42,1,.1,200);Qn.add(new Xm(12374271,2366541,1));const Ca=new $m(16773332,1.9);Ca.position.set(7,Kn+9,9);Ca.target.position.set(0,2,0);Ca.castShadow=!0;Ca.shadow.mapSize.set(Oo?1024:2048,Oo?1024:2048);Object.assign(Ca.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});Ca.shadow.bias=-4e-4;Qn.add(Ca,Ca.target);const jh=new gh({color:16777215,size:.42,sizeAttenuation:!0,fog:!1}),ep=new Mi({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),tp=[],np=[],ip={uMarRaso:{value:new vt(5685998)},uMarMedio:{value:new vt(3112924)},uMarFundo:{value:new vt(1922744)},uEspuma:{value:new vt(13955580)},uAreia:{value:new vt(15981987)},uGrama0:{value:new vt(7327594)},uGrama1:{value:new vt(5027680)},uGrama2:{value:new vt(3117141)}};{const n=Uf(3),e=[];for(let a=0;a<900;a++){const r=new G(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new vn;t.setAttribute("position",new jt(e,3)),Qn.add(new j0(t,jh));const i=new At(new Jn(4,32,32),new ji({color:16773577,fog:!1}));i.position.set(24,16,-62),Qn.add(i)}const qr=new Qt;Qn.add(qr);{const i=new Uint8Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new G,s=255;for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const E=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const x=(v+.5-2)/320*2-1,[A,P,y]=a[h](x,E);r.set(A,P,y).normalize();const S=((p+m)*3*324+d+v)*4;i[S]=Math.round(Xr(dl(r),0,1)*255),i[S+3]=s}}}const o=new mh(i,3*324,2*324,ai,Dn);o.minFilter=o.magFilter=mn,o.generateMipmaps=!1,o.needsUpdate=!0;const f=new Mi({roughness:.9});f.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:hl}},ip),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObj = position;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vObj;
        uniform sampler2D uAltura; uniform float uN, uP, uM, uNivel;
        uniform vec3 uMarRaso, uMarMedio, uMarFundo, uEspuma, uAreia, uGrama0, uGrama1, uGrama2;
        float hash31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float vnoise(vec3 x) {
          vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(hash31(i), hash31(i + vec3(1, 0, 0)), f.x), mix(hash31(i + vec3(0, 1, 0)), hash31(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(hash31(i + vec3(0, 0, 1)), hash31(i + vec3(1, 0, 1)), f.x), mix(hash31(i + vec3(0, 1, 1)), hash31(i + vec3(1, 1, 1)), f.x), f.y), f.z);
        }
        float alturaTex(vec3 d) {
          vec3 a = abs(d); float m, u, v, face;
          if (a.x >= a.y && a.x >= a.z) { m = a.x; if (d.x > 0.0) { face = 0.0; u = -d.z; v = d.y; } else { face = 1.0; u = d.z; v = d.y; } }
          else if (a.y >= a.z) { m = a.y; if (d.y > 0.0) { face = 2.0; u = d.x; v = -d.z; } else { face = 3.0; u = d.x; v = d.z; } }
          else { m = a.z; if (d.z > 0.0) { face = 4.0; u = d.x; v = d.y; } else { face = 5.0; u = -d.x; v = d.y; } }
          vec2 px = (vec2(u, v) / m * 0.5 + 0.5) * uN + uP;
          vec2 cel = vec2(mod(face, 3.0), floor(face / 3.0));
          return texture2D(uAltura, (cel * uM + px) / vec2(3.0 * uM, 2.0 * uM)).r;
        }
        // degrau com borda de 1 pixel (sem serrilhado)
        float degrau(float x, float w) { return smoothstep(-w, w, x); }
        vec3 corTerreno(vec3 d) {
          // detalhe fino do litoral calculado por pixel: a costa fica recortada em qualquer zoom
          float h = alturaTex(d) + (vnoise(d * 26.0) - 0.5) * 0.04 + (vnoise(d * 60.0) - 0.5) * 0.016;
          float c = h - uNivel;
          float w = 2e-4; // borda dura: pixel art
          // água em faixas (fundo, médio, raso) e espuma na beira
          vec3 agua = mix(uMarFundo, uMarMedio, degrau(c + 0.2, w));
          agua = mix(agua, uMarRaso, degrau(c + 0.07, w));
          agua = mix(agua, uEspuma, degrau(c + 0.014, w * 0.6));
          // terra: areia, grama em duas tonalidades (manchas) e mata mais escura nas partes altas
          float mancha = degrau(vnoise(d * 11.0) + 0.4 * vnoise(d * 29.0) - 0.7, w * 6.0);
          vec3 grama = mix(uGrama0, uGrama1, mancha);
          grama = mix(grama, uGrama2, degrau(c - 0.5, w * 2.0));
          vec3 terra = mix(uAreia, grama, degrau(c - 0.03, w));
          vec3 col = mix(agua, terra, degrau(c, w));
          float fino = vnoise(d * 120.0);
          return col * (0.97 + 0.06 * fino);
        }`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const c=new At(new Jn(Kn,128,96),f);c.receiveShadow=!0,qr.add(c);const u=new At(new Jn(Kn*1.06,48,48),new ji({color:6990079,transparent:!0,opacity:.1,side:Un,depthWrite:!1}));Qn.add(u)}function kr(n,e,t=0){const i=new Qt;return i.quaternion.setFromUnitVectors(new G(0,1,0),e),n.position.y=Kn,n.rotation.y=t,i.add(n),qr.add(i),i}const wt=(n,e={})=>new Mi({color:n,roughness:.8,flatShading:!0,...e});function Fo(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const Hr=[];{const n=Uf(77),e=new G,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(Qs)<.3*Ea)&&!oi.some((a,r)=>e.angleTo(a)<Ho[r]+.2)&&!Kh(e,.2)&&!(dl(e)<hl+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Qt,s=.5+n()*.45,o=new At(new En(.1,.14,.6,6),wt(8014379));o.position.y=.3;const f=n()>.5?0:1,c=new At(new ya(.5,1.2,7),wt(f===0?3120732:2460238));tp.push({m:c.material,v:f}),c.position.y=1.1;const u=new At(new ya(.38,.9,7),wt(3453032));np.push(u.material),u.position.y=1.7,r.add(o,c,u),r.scale.setScalar(s),kr(Fo(r),a,n()*6),Hr.push({d:a,r:(.05*s+.02)*Ea})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new At(new Af(.22+n()*.25,0),wt(9278376));r.position.y=.1;const s=new Qt;s.add(r),kr(Fo(s),a,n()*6),Hr.push({d:a,r:.045*Ea,baixo:!0})}}const Of=new Qt;Qn.add(Of);{const n=Uf(5),e=ep;for(let t=0;t<10;t++){const i=new G(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Qt;for(let s=0;s<4;s++){const o=new At(new sl(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=Kn+4+n()*2.5;const r=new Qt;r.quaternion.setFromUnitVectors(new G(0,1,0),i),r.add(a),Of.add(r),Fo(a)}}function B2(n){const e=new Rf;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function z2(n,e){const t=new Qt,i=new vt(e),a=wt(e,{emissive:e,emissiveIntensity:.1}),r=wt(i.clone().multiplyScalar(.78)),s=wt(i.clone().multiplyScalar(.5)),o=wt(10133684),f=wt(5922936),c=wt(10119740),u=wt(5913122),h=wt(15856635),d=wt(13225432),p=wt(1776942),m=wt(14693962),E=wt(16762941),v=new Mi({color:16774856,emissive:16771488,emissiveIntensity:1.2}),x=(S,T,I=0,_=0,w=0)=>{const L=new At(S,T);return L.position.set(I,_,w),t.add(L),L},A=(S,T,I,_,w,L,U)=>x(new wa(S,T,I),_,w,L,U),P=(S,T,I,_,w,L,U,V=12)=>x(new En(S,T,I,V),_,w,L,U),y=(S,T,I,_,w)=>x(new Jn(S,10,8),T,I,_,w);switch(n){case"casa":{A(2.5,.22,2,o,0,.11,0),A(2.2,1.25,1.7,a,0,.84,0);for(const T of[-1,1]){const I=A(2.5,.12,1.15,s,0,1.78,T*.5);I.rotation.x=T*.62}A(2.56,.14,.16,wt(i.clone().multiplyScalar(.35)),0,2.13,0);const S=new Rf;S.moveTo(-.85,0),S.lineTo(.85,0),S.lineTo(0,.62),S.closePath();for(const T of[-1,1]){const I=x(new $s(S,{depth:.06,bevelEnabled:!1}),a,T*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}A(.3,.8,.3,f,.65,2,-.28),A(.4,.08,.4,o,.65,2.42,-.28),A(.62,1,.04,h,0,.72,.86),A(.5,.9,.06,u,0,.67,.88),y(.04,d,.16,.65,.93),A(.9,.12,.4,o,0,.1,1.2);for(const T of[-.72,.72]){A(.55,.55,.05,h,T,.98,.86),A(.42,.42,.06,v,T,.98,.88),A(.04,.42,.07,h,T,.98,.89),A(.42,.04,.07,h,T,.98,.89);for(const I of[-1,1])A(.14,.5,.04,r,T+I*.38,.98,.88)}for(const T of[-1,1])A(.05,.5,.5,h,T*1.11,.95,.1),A(.06,.38,.38,v,T*1.12,.95,.1);y(.07,v,.5,1.2,.92),P(.04,.04,.5,c,1.55,.45,1.1,6),A(.32,.22,.22,m,1.55,.8,1.1),A(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,E],[-.7,wt(16747216)],[-.55,m]].forEach(([T,I])=>y(.07,I,T,.4,1.2));break}case"predio":{A(2.4,.2,2.2,f,0,.1,0),A(2,.7,1.8,s,0,.55,0),A(1.7,2.6,1.5,a,0,2.15,0),A(1.2,.5,1.05,r,0,3.7,0);for(let S=0;S<5;S++)for(let T=0;T<3;T++)A(.34,.36,.05,(S*2+T)%5===0?s:v,-.5+T*.5,1.2+S*.5,.77);for(let S=0;S<5;S++)for(const T of[-1,1])for(let I=0;I<2;I++)A(.05,.36,.34,(S+I)%3===0?s:v,T*.86,1.2+S*.5,-.3+I*.6);for(const S of[1,3.45])A(1.78,.07,1.58,s,0,S,0);A(.7,.55,.05,v,0,.45,.93),A(.04,.55,.06,s,0,.45,.94),A(1.2,.08,.55,m,0,.86,1.12);for(const S of[-1,1])P(.03,.03,.62,d,S*.55,.55,1.36,6);A(.9,.14,.05,v,0,3.7,.54),P(.22,.22,.5,c,.3,4.2,.1),x(new ya(.26,.2,10),u,.3,4.55,.1),A(.3,.2,.3,o,-.3,4.05,.25),P(.025,.025,.9,d,-.3,4.4,-.2,6),y(.07,wt(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{A(2.4,.16,2.4,f,0,.08,0);for(let S=0;S<9;S++)A(.26,.05,.12,S%2?p:E,-1.04+S*.26,.18,1.12);P(.5,.56,2.3,h,0,1.9,0,16),x(new ya(.5,1,16),a,0,3.55,0),P(.52,.52,.16,m,0,2.95,0,16),P(.58,.58,.1,s,0,.8,0,16),x(new Or(.21,.045,8,18),d,0,2.4,.5),y(.18,wt(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let S=0;S<3;S++){const T=A(.08,.9,.7,a,0,1,0),I=new Qt;I.rotation.y=S/3*Math.PI*2+.5,T.position.set(.62,1,0),T.parent.remove(T),I.add(T),t.add(I)}x(new ya(.34,.8,10),wt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const S of[-.35,.35])A(.1,3.5,.1,d,1.1,1.9,S);for(const S of[.7,1.5,2.3,3.1])A(.08,.08,.7,d,1.1,S,0);A(.75,.1,.12,d,.75,2.6,0),y(.07,v,1.1,3.7,0),x(new En(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const S of[-1.3,-.7])A(.08,.2,.3,d,S,.25,.7);break}case"estrela":{P(1.15,1.3,.2,o,0,.1,0,20),P(.8,.95,.22,f,0,.31,0,20),P(.16,.22,1.5,d,0,1.15,0),P(.3,.3,.1,d,0,1.95,0);const S=new Qt;S.name="gira",S.position.y=2.85,t.add(S);const T=new At(new $s(B2(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),wt(e,{emissive:e,emissiveIntensity:.55}));T.position.z=-.15,S.add(T);const I=new At(new Or(1.25,.03,8,40),wt(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,S.add(I),[0,2.1,4.2].forEach((_,w)=>{const L=new At(new Jn(.1,10,8),wt([16735631,5822207,16769354][w],{emissive:[16735631,5822207,16769354][w],emissiveIntensity:.7}));L.position.set(Math.cos(_)*1.25,0,Math.sin(_)*1.25),S.add(L)});break}case"cassino":{const S=wt(13620959,{emissive:3818064,emissiveIntensity:.25}),T=(I,_)=>A(.36,.5,.06,wt(_,{emissive:_,emissiveIntensity:.7}),I,2.05,.66);P(1.3,1.4,.16,f,0,.08,0,20),A(2.2,.3,1.6,s,0,.3,0),A(1.8,2.7,1.3,S,0,1.8,0),A(2,.55,1.4,s,0,3.35,0),A(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)y(.06,I%2?v:m,-.96+I*.24,3.66,.68);A(1.45,.75,.1,wt(1381675),0,2.2,.62),T(-.46,16726858),T(0,16769354),T(.46,5822207);for(const[I,_]of[[-.45,16726858],[0,5822090],[.45,5810431]])P(.1,.1,.08,wt(_,{emissive:_,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;A(.5,.06,.04,p,0,1.3,.66),A(1.2,.28,.45,s,0,.95,.8),P(.06,.06,1.1,d,1.12,2.1,0,8),y(.2,wt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const S=wt(4892927,{emissive:1922744,emissiveIntensity:.4}),T=wt(9163775,{emissive:4892927,emissiveIntensity:.6}),I=wt(16743001,{emissive:9058848,emissiveIntensity:.3});x(new Jn(.95,16,12),S,0,1.85,0).scale.set(1,.85,1),x(new Or(.92,.05,8,28),d,0,1.85,0).rotation.x=Math.PI/2,x(new Jn(.58,14,10),T,0,2.15,.35),x(new Jn(.2,8,8),wt(16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let _=0;_<4;_++){const w=_*Math.PI/2,L=x(new wa(.55,.14,.95),I,Math.cos(w)*1.05,1.7,Math.sin(w)*1.05);L.rotation.y=-w}for(let _=0;_<3;_++){const w=_*Math.PI*2/3+.4,L=x(new En(.05,.07,1,8),d,Math.cos(w)*.62,.62,Math.sin(w)*.62);L.rotation.z=Math.cos(w)*.3,L.rotation.x=-Math.sin(w)*.3,x(new En(.16,.16,.05,8),d,Math.cos(w)*.78,.12,Math.sin(w)*.78)}x(new ya(.3,.55,10),wt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,P(.03,.03,.6,d,0,2.95,0,6),y(.1,wt(16726858,{emissive:16726858,emissiveIntensity:.8}),0,3.28,0);break}case"carta":{P(.26,.32,.4,o,0,.2,0,10),P(.12,.15,1,d,0,.9,0,8),A(1.7,.9,.9,a,0,1.85,0);const S=x(new En(.45,.45,1.7,16,1,!1,0,Math.PI),wt(e,{emissive:e,emissiveIntensity:.1,side:ni}),0,2.3,0);S.rotation.z=Math.PI/2,A(1,.07,.05,p,0,2.02,.46),A(1.5,.5,.04,r,0,1.62,.46),A(.4,.26,.03,h,-.42,1.62,.49),y(.05,m,-.42,1.62,.52),P(.025,.025,.7,d,.9,2,0,6),A(.32,.22,.04,m,1.05,2.28,0),P(.035,.045,1.9,d,-1.2,.95,.5,6),y(.1,v,-1.2,1.95,.5),A(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const G2={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},V2=new Mi({color:16774856,emissive:16771488,emissiveIntensity:1.3}),ap=xn.map((n,e)=>{const t=new Qt,i=new Qt,a=new At(new En(1.85,1.95,.12,28),wt(3883096));a.position.y=.04;const r=new At(new En(1.55,1.65,.14,28),wt(new vt(n.cor).multiplyScalar(.45)));r.position.y=.1,i.add(a,r);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new At(new En(.035,.045,.55,6),wt(13225432));m.position.set(d,.38,p);const E=new At(new Jn(.08,8,6),V2);E.position.set(d,.7,p),i.add(m,E)}const s=new At(new Or(2.08,.07,8,48),new ji({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const o=z2(n.icone,n.cor);o.position.y=.17;const f=new Yt;f.position.y=G2[n.icone]??4.5,t.add(i,s,o,f),Fo(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar(Qh(n)),kr(t,oi[e],0);const c=o.getObjectByName("gira");return{raiz:t,anel:s,icone:o,topo:f,gira:c,giraY:c?c.position.y:0}}),Ff=p2(wt),Bf=M2();kr(Ff.raiz,Qi.jasmim,.4);kr(Bf.raiz,Qi.mazzy,0);Hr.push({d:Qi.jasmim,r:.035*Ea},{d:Qi.mazzy,r:.055*Ea});const Gs={parado:4,andar:5,correr:5,pular:5},k2=["direita","esquerda","norte","sul"],Pd=[0,1,2,3,2,1],rp=84,Bo=182,H2=168,W2=new Wm,Sa={};for(const[n,e]of Object.entries(Gs)){Sa[n]={};for(const t of k2)Sa[n][t]=Array.from({length:e},(i,a)=>{const r=W2.load(`./avatar/${n}-${t}-${a}.png`);return r.colorSpace=Gn,r.magFilter=r.minFilter=on,r.generateMipmaps=!1,new bf({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Wo=3.6,zf=Wo*(rp/Bo);const Aa=new hh(Sa.parado.sul[0]);Aa.center.set(.5,(Bo-H2)/Bo);Aa.scale.set(zf,Wo,1);Aa.position.y=Kn;Qn.add(Aa);const Id=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new At(new ea(1.7,1.7),new ji({map:new Io(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=Kn+.04,Qn.add(i),i})(),Pa=n=>document.querySelector(n);Pa("#nome").textContent=`${md.nome} · ${md.titulo}`;const op=Pa("#pontos"),X2=Pa("#fichas-hud b");xn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),op.appendChild(e)});const po=Pa("#painel"),sp=Pa("#acao");let Ld=-2,Xa=-1;const lp="curriculo-visitadas-v1",Wa=new Set;try{for(const n of JSON.parse(localStorage.getItem(lp))||[])xn.some(e=>e.id===n)&&Wa.add(n)}catch{}const q2=["↑","↗","→","↘","↓","↙","←","↖"];function Y2(n){let e=-1,t=1/0;if(xn.forEach((s,o)=>{if(o===n||Wa.has(s.id))return;const f=oi[n].angleTo(oi[o]);f<t&&(t=f,e=o)}),e<0)return null;const i=new G().copy(oi[e]).applyQuaternion(_i),a=Math.atan2(i.x,-i.z),r=Math.acos(Xr(i.y,-1,1));return{id:xn[e].id,seta:q2[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(r/lf))}}function cp(n){[...op.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",Wa.has(xn[t].id))})}cp(-1);function $2(n){if(n!==Ld){if(Ld=n,n<0)po.classList.remove("on");else{const e=xn[n];if(!Wa.has(e.id)){Wa.add(e.id);try{localStorage.setItem(lp,JSON.stringify([...Wa]))}catch{}}po.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),po.querySelector("h2").textContent=e.titulo,Pa("#texto").replaceChildren(...a2(e,{zonas:xn,visitadas:Wa,proxima:Y2(n)})),po.scrollTop=0,sp.hidden=!e.jogo,po.classList.add("on")}cp(n)}}const Ri=new Set;window.addEventListener("keydown",n=>{if(!(Nn.estaAberto()||kf.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&Xa>=0&&xn[Xa].jogo){Ri.clear(),mp(xn[Xa].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&ba){pp(ba);return}Ri.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>Ri.delete(n.code));window.addEventListener("blur",()=>Ri.clear());const Yi={x:0,y:0,pulo:!1},zo=new Map;function Gf(){Yi.x=0,Yi.y=0;const n=zo.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;Yi.x=e*a,Yi.y=-t*a}}const Vf=$n.domElement;Vf.addEventListener("pointerdown",n=>{zo.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),Gf()});Vf.addEventListener("pointermove",n=>{const e=zo.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,Gf())});for(const n of["pointerup","pointercancel","pointerleave"])Vf.addEventListener(n,e=>{const t=zo.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(Yi.pulo=!0,setTimeout(()=>{Yi.pulo=!1},120)),zo.delete(e.pointerId),Gf()});const J2=Oo?420:640,fp=19,Go=new ri(2,2,{minFilter:on,magFilter:on,type:Dn,samples:0});Go.depthTexture=new zr(2,2);const up=new ch,Z2=new ll(-1,1,1,-1,0,1),dp=new vi({uniforms:{tCor:{value:Go.texture},tProf:{value:Go.depthTexture},uPixel:{value:new Ne(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:sn.near},uFar:{value:sn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    uniform sampler2D tCor, tProf; uniform vec2 uPixel; uniform float uNear, uFar, uBorda;
    varying vec2 vUv;
    #include <packing>
    float profund(vec2 uv) { return -perspectiveDepthToViewZ(texture2D(tProf, uv).x, uNear, uFar); }
    float bayer4(vec2 p) {
      int x = int(mod(p.x, 4.0)), y = int(mod(p.y, 4.0));
      float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
      return (m[x + 4 * y] + 0.5) / 16.0;
    }
    void main() {
      vec2 px = floor(vUv / uPixel);
      vec2 uv = (px + 0.5) * uPixel;
      vec4 cor = texture2D(tCor, uv);
      // contorno: pixel de objeto que tem um vizinho muito mais longe (céu ou outro objeto atrás) vira linha escura.
      // Só desenha em pixels de objeto, nunca no céu, para não sujar o fundo.
      float z = profund(uv);
      float borda = 0.0;
      vec2 viz[4] = vec2[4](vec2(uPixel.x, 0.0), vec2(-uPixel.x, 0.0), vec2(0.0, uPixel.y), vec2(0.0, -uPixel.y));
      if (z < 0.98 * uFar) {
        for (int i = 0; i < 4; i++) { if (profund(uv + viz[i]) - z > 0.035 * z) borda = 1.0; }
      }
      gl_FragColor = vec4(cor.rgb, 1.0);
      #include <colorspace_fragment>
      // paleta limitada com dithering ordenado leve
      float niveis = 14.0;
      vec3 q = floor(gl_FragColor.rgb * niveis + 0.5 + (bayer4(px) - 0.5) * 0.55) / niveis;
      gl_FragColor.rgb = mix(q, vec3(0.03, 0.04, 0.10), borda * uBorda);
    }`,depthTest:!1,depthWrite:!1});up.add(new At(new ea(2,2),dp));function hp(){const n=window.innerWidth,e=window.innerHeight;$n.setSize(n,e),sn.aspect=n/e,sn.userData.afasta=1/Xr(sn.aspect/1.1,.5,1),sn.updateProjectionMatrix();const t=Math.min(J2,e),i=Math.max(2,Math.round(t*sn.aspect));Go.setSize(i,t),dp.uniforms.uPixel.value.set(1/i,1/t);const a=2*fp*sn.userData.afasta*Math.tan(P0.degToRad(sn.fov/2))/t;Wo=Bo*a,zf=rp*a}window.addEventListener("resize",hp);hp();const _i=qr.quaternion,Dd=new URLSearchParams(location.search).get("zona");if(Dd!==null){const n=Xr(Math.round(Number(Dd))||0,0,xn.length-1);_i.setFromUnitVectors(oi[n],new G(.25,1,-.2).normalize())}const K2=2*7.2/20;let da=0,ha=0,Ga=0,Ls=0,wr=!0,sc=0,Nd=!1,Vn=0,pa="sul",lc=0;const Va=new G,js=new gi,$i=new G,el=n=>Math.acos(Xr($i.copy(n).applyQuaternion(_i).y,-1,1));function Ud(n,e){if($i.copy(n).applyQuaternion(_i),$i.y<.8)return;const t=Math.acos(Math.min(1,$i.y));t>=e||(Va.crossVectors(Qs,$i),Va.lengthSq()<1e-10&&Va.set(0,0,1),Va.normalize(),js.setFromAxisAngle(Va,e-t),_i.premultiply(js))}const Yr=document.createElement("div");Yr.id="rotulos";document.body.append(Yr);const Q2=xn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,Yr.append(e),e}),tl=new G,cc=new G;function j2(n){tl.copy(sn.position).normalize(),xn.forEach((e,t)=>{const i=Q2[t];if($i.copy(oi[t]).applyQuaternion(_i),t===n||$i.dot(tl)<.2){i.style.opacity="0";return}ap[t].topo.getWorldPosition(cc).project(sn),i.style.transform=`translate(${Math.round((cc.x*.5+.5)*window.innerWidth)}px, ${Math.round((-cc.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const eS=.2,nl=s2(),Rr=(n,e,t="triangle",i=.05,a=0)=>Nn.bip(n,e,t,i,a),ff=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:Qi.jasmim,modelo:Ff,livre:0,som:()=>{Rr(1047,.12,"sine"),Rr(1319,.12,"sine",.05,.09),Rr(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:Qi.mazzy,modelo:Bf,livre:0,som:()=>{Rr(680,.09),Rr(930,.1,"triangle",.05,.07),Rr(620,.2,"triangle",.045,.15)}}],Za=document.createElement("button");Za.id="carinho";Za.hidden=!0;document.body.append(Za);const tS=ff.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",Yr.append(n),n}),Vo=document.createElement("div");Vo.className="rotulo frase";Vo.textContent="♥ a flor mais bela do meu mundo todo";const nS=new G(0,-7.7,0);let fc=0;Yr.append(Vo);let ba=null,Od="";const Xi=new G;function pp(n){Vn<n.livre||(n.livre=Vn+.5,n.modelo.carinho(),nl[n.id]+=1,l2(nl),n.modelo.cabeca.getWorldPosition(Xi).project(sn),d2((Xi.x*.5+.5)*window.innerWidth,(-Xi.y*.5+.5)*window.innerHeight,5),n.som())}Za.addEventListener("click",()=>{ba&&pp(ba),Za.blur()});function iS(n,e){let t=null,i=1/0;for(const o of ff){const f=el(o.d);f<eS&&f<i&&(i=f,t=o)}ba=e?null:t;const a=ba?`♥ ${ba.frase} [E]`:"";a!==Od&&(Od=a,Za.textContent=a.toUpperCase(),Za.hidden=!a);const r=Wo/Bo;Ff.atualizar(Vn,n),Bf.atualizar(Vn,n,r),ff.forEach((o,f)=>{const c=tS[f];if($i.copy(o.d).applyQuaternion(_i),o===ba||$i.dot(tl)<.2){c.style.opacity="0";return}o.modelo.topo.getWorldPosition(Xi).project(sn),c.textContent=nl[o.id]?`${o.nome} ♥ ${nl[o.id]}`:o.nome,c.style.transform=`translate(${Math.round((Xi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Xi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,c.style.opacity="1"});const s=Xr((.42-el(Qi.jasmim))/.22,0,1);fc=zs(fc,.8*s,3,n),Xi.copy(nS).project(sn),Vo.style.transform=`translate(${Math.round((Xi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Xi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,Vo.style.opacity=fc.toFixed(2)}const aS={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function rS(n){const e=Eo(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries(aS))ip[r].value.set(e[a]);const t=Eo(n.arvores)?.cores;if(t){for(const{m:a,v:r}of tp)a.color.set(t.copa[r%t.copa.length]);for(const a of np)a.color.set(t.copa2)}const i=Eo(n.ceu)?.cores;i&&(Qn.background.set(i.fundo),jh.color.set(i.estrelas),ep.color.set(i.nuvens))}const Nn=r_({aoMudarSkins:rS,aoMudarFichas:n=>{X2.textContent=String(n)}}),kf=Z_({bip:(...n)=>Nn.bip(...n),somAtivo:()=>Nn.somAtivo()}),oS=C2({planeta:qr,fincar:kr,R:Kn,q:_i,altura:dl,NIVEL_MAR:hl,dirsZonas:oi,raioBloqueio:Ho,obstaculos:Hr,dirsSitios:Qi,camera:sn,rotulosEl:Yr,camDir:tl,bip:(...n)=>Nn.bip(...n)}),sS=o2({somAtivo:()=>Nn.somAtivo()}),uf=Pa("#som");let uc=null;uf.addEventListener("click",()=>{Nn.alternarSom(),uf.blur()});function mp(n){n==="arcade"?kf.abrir():Nn.abrir()}sp.addEventListener("click",()=>{Xa>=0&&xn[Xa].jogo&&(Ri.clear(),mp(xn[Xa].jogo))});const lS=4,Fd=5,cS=.2*Ea,fS=new Mi({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),Bd=new Mi({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),Hf=[],uS=new G;function gp(n){const e=new G;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(dl(e)<hl+.06)&&!(uS.copy(e).applyQuaternion(_i).angleTo(Qs)<.45*Ea)&&!(oi.some((i,a)=>e.angleTo(i)<Ho[a]+.2)||Kh(e,.25))&&!Hr.some(i=>e.angleTo(i.d)<i.r+.09*Ea)&&!Hf.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(Qs,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=Vn+2}for(let n=0;n<lS;n++){const e=new Qt,t=new Qt,i=new At(new En(.3,.3,.08,12),fS),a=new At(new En(.2,.2,.1,12),Bd);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,f=new At(new wa(.1,.14,.1),Bd);f.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),f.rotation.x=o,t.add(f)}t.position.y=Kn+.7,e.add(t),Fo(e),qr.add(e);const r={d:new G,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};Hf.push(r),gp(r)}const Ds=new G;function dS(n){Aa.getWorldPosition(Ds),Ds.project(sn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((Ds.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-Ds.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function hS(n){for(const e of Hf){if(!e.ativa){Vn>=e.volta&&gp(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=Kn+.7+Math.sin(Vn*3+e.fase)*.08,el(e.d)<cS&&(e.ativa=!1,e.raiz.visible=!1,e.volta=Vn+25+Math.random()*25,Nn.adicionarFichas(Fd),dS("+"+Fd),Nn.bip(988,.07,"square",.07),Nn.bip(1319,.22,"square",.07,.08),Nn.bip(1976,.3,"triangle",.05,.08))}}let zd=performance.now();$n.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-zd)/1e3,.05);zd=n,Vn+=e;const t=(y,S)=>Ri.has(y)||Ri.has(S)?1:0,i=Nn.estaAberto()||kf.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||Yi.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||Yi.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(Ri.has("ShiftLeft")||Ri.has("ShiftRight"))&&(a*=1.7,r*=1.7),da=zs(da,a,9,e),ha=zs(ha,r,9,e);const f=Math.hypot(da,ha);f>.003&&(Va.set(ha,0,da).normalize(),js.setFromAxisAngle(Va,f*lf*e),_i.premultiply(js),Nd=!0),oi.forEach((y,S)=>Ud(y,Ho[S]));for(const y of Hr)y.baixo&&Ga>.5||Ud(y.d,y.r);_i.normalize(),Nd&&Pa("#dica").classList.add("some"),!i&&(Ri.has("Space")||Yi.pulo)&&wr&&(Ls=7.2,wr=!1,lc=0),wr||(Ls-=20*e,lc+=e,Ga+=Ls*e,Ga<=0&&(Ga=0,Ls=0,wr=!0));const u=Math.min(1.7,f);if(f>.08){const y=Math.abs(da)>Math.abs(ha)*1.1,S=Math.abs(ha)>Math.abs(da)*1.1;y?pa=da>0?"direita":"esquerda":S&&(pa=ha>0?"norte":"sul")}sc+=u*e*9;let h;if(wr)f>1.2?h=Sa.correr[pa][Math.floor(sc)%Gs.correr]:f>.08?h=Sa.andar[pa][Math.floor(sc)%Gs.andar]:h=pa==="sul"?Sa.parado.sul[Pd[Math.floor(Vn*4)%Pd.length]]:Sa.parado[pa][0];else{const y=Math.min(.999,lc/K2);h=Sa.pular[pa][Math.floor(y*Gs.pular)]}Aa.material=h;const d=wr&&f<=.08&&pa!=="sul"?Math.sin(Vn*2.4)*.012:0;Aa.scale.set(zf*(1-d*.5),Wo*(1+d),1),Aa.position.y=Kn+Ga;const p=Math.min(Ga,1.5);Id.scale.setScalar(1-p*.2),Id.material.opacity=.55-p*.2;const m=sn.userData.afasta,E=fp*m,v=.42,x=1.5;sn.position.set(0,x+Math.sin(v)*E,Math.cos(v)*E),sn.lookAt(0,x,0),Of.rotation.y=Math.sin(Vn*.1)*.4;let A=-1,P=1/0;oi.forEach((y,S)=>{const T=el(y);T<D2[S]&&T<P&&(P=T,A=S)}),ap.forEach((y,S)=>{const T=S===A;y.anel.material.opacity=zs(y.anel.material.opacity,T?.55+Math.sin(Vn*4)*.25:0,8,e),y.gira&&(y.gira.rotation.y+=e*(T?2.4:.8),y.gira.position.y=y.giraY+Math.sin(Vn*1.6+S)*(T?.12:.06))}),Xa=A,$2(A),j2(A),hS(e),iS(e,i),oS.atualizar(e,{vLeste:da,vNorte:ha,VEL:lf,pulando:Ga>.4,pausado:i}),sS.atualizar(e,i),Nn.somAtivo()!==uc&&(uc=Nn.somAtivo(),uf.classList.toggle("mudo",!uc)),Oo?($n.setRenderTarget(null),$n.render(Qn,sn)):($n.setRenderTarget(Go),$n.render(Qn,sn),$n.setRenderTarget(null),$n.render(up,Z2))});
