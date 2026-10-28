(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const _f="186",Op=0,gu=1,Fp=2,bo=1,Bp=2,_o=3,Ja=0,Bn=1,ai=2,ji=0,Eo=1,xu=2,vu=3,Mu=4,zp=5,Nr=100,Gp=101,Vp=102,kp=103,Hp=104,Wp=200,Xp=201,qp=202,$p=203,Zd=204,Kd=205,Yp=206,Jp=207,Zp=208,Kp=209,Qp=210,jp=211,e0=212,t0=213,n0=214,mc=0,gc=1,xc=2,Po=3,vc=4,Mc=5,_c=6,Sc=7,Qd=0,i0=1,a0=2,Li=0,jd=1,eh=2,th=3,nh=4,ih=5,ah=6,rh=7,oh=300,Za=301,Wr=302,bl=303,El=304,ll=306,Xs=1e3,Zi=1001,yc=1002,cn=1003,r0=1004,is=1005,Mn=1006,Al=1007,Wa=1008,On=1009,sh=1010,lh=1011,Io=1012,Sf=1013,Ni=1014,Pi=1015,Ui=1016,yf=1017,bf=1018,Lo=1020,ch=35902,fh=35899,uh=1021,dh=1022,oi=1023,ta=1026,Xa=1027,hh=1028,Ef=1029,Ka=1030,Af=1031,Tf=1033,Bs=33776,zs=33777,Gs=33778,Vs=33779,bc=35840,Ec=35841,Ac=35842,Tc=35843,wc=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,qs=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Oc=37811,Fc=37812,Bc=37813,zc=37814,Gc=37815,Vc=37816,kc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,$c=36492,Yc=36494,Jc=36495,Zc=36283,Kc=36284,$s=36285,Qc=36286,o0=3200,jc=0,s0=1,ba="",kn="srgb",Ys="srgb-linear",Js="linear",Wt="srgb",Tl=7680,l0=519,c0=512,f0=513,u0=514,wf=515,d0=516,h0=517,Rf=518,p0=519,ph=35044,_u="300 es",Ii=2e3,Do=2001;function m0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function g0(){const n=No("canvas");return n.style.display="block",n}const Su={};function Zs(...n){const e="THREE."+n.shift();console.log(e,...n)}function mh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function xt(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ut(...n){n=mh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function zr(...n){const e=n.join(" ");e in Su||(Su[e]=!0,xt(...n))}function x0(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const v0={[mc]:gc,[xc]:_c,[vc]:Sc,[Po]:Mc,[gc]:mc,[_c]:xc,[Sc]:vc,[Mc]:Po};class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const Ao=Math.PI/180,Uo=180/Math.PI;function Di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Cf(n,e){return(n%e+e)%e}function M0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function _0(n,e,t){return n!==e?(t-n)/(e-n):0}function To(n,e,t){return(1-t)*n+t*e}function S0(n,e,t,i){return To(n,e,1-Math.exp(-t*i))}function y0(n,e=1){return e-Math.abs(Cf(n,e*2)-e)}function b0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function E0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function A0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T0(n,e){return n+Math.random()*(e-n)}function w0(n){return n*(.5-Math.random())}function R0(n){n!==void 0&&(yu=n);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(n){return n*Ao}function P0(n){return n*Uo}function I0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function L0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function D0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N0(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),f=s(t/2),c=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,f*h,f*d,o*c);break;case"YZY":n.set(f*d,o*u,f*h,o*c);break;case"ZXZ":n.set(f*h,f*d,o*u,o*c);break;case"XZX":n.set(o*u,f*m,f*p,o*c);break;case"YXY":n.set(f*p,o*u,f*m,o*c);break;case"ZYZ":n.set(f*m,f*p,o*u,o*c);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const U0={DEG2RAD:Ao,RAD2DEG:Uo,generateUUID:Di,clamp:Ct,euclideanModulo:Cf,mapLinear:M0,inverseLerp:_0,lerp:To,damp:S0,pingpong:y0,smoothstep:b0,smootherstep:E0,randInt:A0,randFloat:T0,randFloatSpread:w0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:I0,ceilPowerOfTwo:L0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:N0,normalize:Xt,denormalize:gi},Qf=class Qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qf.prototype.isVector2=!0;let Ue=Qf;class xi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let f=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],A=r[s+3];if(h!==A||f!==d||c!==p||u!==m){let v=f*d+c*p+u*m+h*A;v<0&&(d=-d,p=-p,m=-m,A=-A,v=-v);let x=1-o;if(v<.9995){const T=Math.acos(v),P=Math.sin(T);x=Math.sin(x*T)/P,o=Math.sin(o*T)/P,f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+A*o}else{f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+A*o;const T=1/Math.sqrt(f*f+c*c+u*u+h*h);f*=T,c*=T,u*=T,h*=T}}e[t]=f,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],f=i[a+1],c=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+f*p-c*d,e[t+1]=f*m+u*d+c*h-o*p,e[t+2]=c*m+u*p+o*d-f*h,e[t+3]=u*m-o*h-f*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,f=Math.sin,c=o(i/2),u=o(a/2),h=o(r/2),d=f(i/2),p=f(a/2),m=f(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],f=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-f)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-f)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(f+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(f+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,f=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*f,this._y=a*u+s*f+r*o-i*c,this._z=r*u+s*c+i*f-a*o,this._w=s*u-i*o-a*f-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let f=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);f=Math.sin(f*c)/u,t=Math.sin(t*c)/u,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const jf=class jf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,f=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+f*c+s*h-o*u,this.y=i+f*u+o*c-r*h,this.z=a+f*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,f=t.z;return this.x=a*f-r*o,this.y=r*s-i*f,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jf.prototype.isVector3=!0;let z=jf;const wl=new z,bu=new xi,eu=class eu{constructor(e,t,i,a,r,s,o,f,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c)}set(e,t,i,a,r,s,o,f,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],f=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],A=a[0],v=a[3],x=a[6],T=a[1],P=a[4],b=a[7],S=a[2],w=a[5],I=a[8];return r[0]=s*A+o*T+f*S,r[3]=s*v+o*P+f*w,r[6]=s*x+o*b+f*I,r[1]=c*A+u*T+h*S,r[4]=c*v+u*P+h*w,r[7]=c*x+u*b+h*I,r[2]=d*A+p*T+m*S,r[5]=d*v+p*P+m*w,r[8]=d*x+p*b+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*f+a*r*c-a*s*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*f-u*r,p=c*r-s*f,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/m;return e[0]=h*A,e[1]=(a*c-u*i)*A,e[2]=(o*i-a*s)*A,e[3]=d*A,e[4]=(u*t-a*f)*A,e[5]=(a*r-o*t)*A,e[6]=p*A,e[7]=(i*f-c*t)*A,e[8]=(s*t-i*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const f=Math.cos(r),c=Math.sin(r);return this.set(i*f,i*c,-i*(f*s+c*o)+s+e,-a*c,a*f,-a*(-c*s+f*o)+o+t,0,0,1),this}scale(e,t){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eu.prototype.isMatrix3=!0;let Et=eu;const Rl=new Et,Eu=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){const n={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Wt&&(a.r=ea(a.r),a.g=ea(a.g),a.b=ea(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Wt&&(a.r=Gr(a.r),a.g=Gr(a.g),a.b=Gr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?Js:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ys]:{primaries:e,whitePoint:i,transfer:Js,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),n}const Nt=O0();function ea(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class F0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fr===void 0&&(fr=No("canvas")),fr.width=e.width,fr.height=e.height;const a=fr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ea(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class Pf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Cl(a[s].image)):r.push(Cl(a[s]))}else r=Cl(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?F0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let z0=0;const Pl=new z;class _n extends tr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Zi,a=Zi,r=Mn,s=Wa,o=oi,f=On,c=_n.DEFAULT_ANISOTROPY,u=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Di(),this.name="",this.source=new Pf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=oh;_n.DEFAULT_ANISOTROPY=1;const tu=class tu{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,c=f[0],u=f[4],h=f[8],d=f[1],p=f[5],m=f[9],A=f[2],v=f[6],x=f[10];if(Math.abs(u-d)<.01&&Math.abs(h-A)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+A)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,b=(p+1)/2,S=(x+1)/2,w=(u+d)/4,I=(h+A)/4,_=(m+v)/4;return P>b&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=w/i,r=I/i):b>S?b<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),i=w/a,r=_/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=I/r,a=_/r),this.set(i,a,r,t),this}let T=Math.sqrt((v-m)*(v-m)+(h-A)*(h-A)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(v-m)/T,this.y=(h-A)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tu.prototype.isVector4=!0;let an=tu;class G0 extends tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new _n(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Pf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends G0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends _n{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V0 extends _n{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sl=class sl{constructor(e,t,i,a,r,s,o,f,c,u,h,d,p,m,A,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,A,v)}set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,A,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=r,x[5]=s,x[9]=o,x[13]=f,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=m,x[11]=A,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),s=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),f=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,A=o*h;t[0]=f*u,t[4]=-f*h,t[8]=c,t[1]=p+m*c,t[5]=d-A*c,t[9]=-o*f,t[2]=A-d*c,t[6]=m+p*c,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,p=f*h,m=c*u,A=c*h;t[0]=d+A*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=A+d*o,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,p=f*h,m=c*u,A=c*h;t[0]=d-A*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=A-d*o,t[2]=-s*c,t[6]=o,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,A=o*h;t[0]=f*u,t[4]=m*c-p,t[8]=d*c+A,t[1]=f*h,t[5]=A*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,p=s*c,m=o*f,A=o*c;t[0]=f*u,t[4]=A-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-A*h}else if(e.order==="XZY"){const d=s*f,p=s*c,m=o*f,A=o*c;t[0]=f*u,t[4]=-h,t[8]=c*u,t[1]=d*h+A,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=A*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,H0)}lookAt(e,t,i){const a=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),la.crossVectors(i,Yn),la.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),la.crossVectors(i,Yn)),la.normalize(),as.crossVectors(Yn,la),a[0]=la.x,a[4]=as.x,a[8]=Yn.x,a[1]=la.y,a[5]=as.y,a[9]=Yn.y,a[2]=la.z,a[6]=as.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],f=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],A=i[6],v=i[10],x=i[14],T=i[3],P=i[7],b=i[11],S=i[15],w=a[0],I=a[4],_=a[8],R=a[12],L=a[1],U=a[5],k=a[9],$=a[13],H=a[2],V=a[6],ae=a[10],X=a[14],xe=a[3],se=a[7],le=a[11],fe=a[15];return r[0]=s*w+o*L+f*H+c*xe,r[4]=s*I+o*U+f*V+c*se,r[8]=s*_+o*k+f*ae+c*le,r[12]=s*R+o*$+f*X+c*fe,r[1]=u*w+h*L+d*H+p*xe,r[5]=u*I+h*U+d*V+p*se,r[9]=u*_+h*k+d*ae+p*le,r[13]=u*R+h*$+d*X+p*fe,r[2]=m*w+A*L+v*H+x*xe,r[6]=m*I+A*U+v*V+x*se,r[10]=m*_+A*k+v*ae+x*le,r[14]=m*R+A*$+v*X+x*fe,r[3]=T*w+P*L+b*H+S*xe,r[7]=T*I+P*U+b*V+S*se,r[11]=T*_+P*k+b*ae+S*le,r[15]=T*R+P*$+b*X+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],f=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],A=e[7],v=e[11],x=e[15],T=f*p-c*d,P=o*p-c*h,b=o*d-f*h,S=s*p-c*u,w=s*d-f*u,I=s*h-o*u;return t*(A*T-v*P+x*b)-i*(m*T-v*S+x*w)+a*(m*P-A*S+x*I)-r*(m*b-A*w+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],f=e[2],c=e[6],u=e[10];return t*(s*u-o*c)-i*(r*u-o*f)+a*(r*c-s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],A=e[13],v=e[14],x=e[15],T=t*o-i*s,P=t*f-a*s,b=t*c-r*s,S=i*f-a*o,w=i*c-r*o,I=a*c-r*f,_=u*A-h*m,R=u*v-d*m,L=u*x-p*m,U=h*v-d*A,k=h*x-p*A,$=d*x-p*v,H=T*$-P*k+b*U+S*L-w*R+I*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/H;return e[0]=(o*$-f*k+c*U)*V,e[1]=(a*k-i*$-r*U)*V,e[2]=(A*I-v*w+x*S)*V,e[3]=(d*w-h*I-p*S)*V,e[4]=(f*L-s*$-c*R)*V,e[5]=(t*$-a*L+r*R)*V,e[6]=(v*b-m*I-x*P)*V,e[7]=(u*I-d*b+p*P)*V,e[8]=(s*k-o*L+c*_)*V,e[9]=(i*L-t*k-r*_)*V,e[10]=(m*w-A*b+x*T)*V,e[11]=(h*b-u*w-p*T)*V,e[12]=(o*R-s*U-f*_)*V,e[13]=(t*U-i*R+a*_)*V,e[14]=(A*P-m*S-v*T)*V,e[15]=(u*S-h*P+d*T)*V,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,f=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*f,c*f+a*o,0,c*o+a*f,u*o+i,u*f-a*s,0,c*f-a*o,u*f+a*s,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,f=t._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,m=r*h,A=s*u,v=s*h,x=o*h,T=f*c,P=f*u,b=f*h,S=i.x,w=i.y,I=i.z;return a[0]=(1-(A+x))*S,a[1]=(p+b)*S,a[2]=(m-P)*S,a[3]=0,a[4]=(p-b)*w,a[5]=(1-(d+x))*w,a[6]=(v+T)*w,a[7]=0,a[8]=(m+P)*I,a[9]=(v-T)*I,a[10]=(1-(d+A))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=ur.set(a[0],a[1],a[2]).length();const o=ur.set(a[4],a[5],a[6]).length(),f=ur.set(a[8],a[9],a[10]).length();r<0&&(s=-s),fi.copy(this);const c=1/s,u=1/o,h=1/f;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=f,this}makePerspective(e,t,i,a,r,s,o=Ii,f=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,A;if(f)m=r/(s-r),A=s*r/(s-r);else if(o===Ii)m=-(s+r)/(s-r),A=-2*s*r/(s-r);else if(o===Do)m=-s/(s-r),A=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Ii,f=!1){const c=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,A;if(f)m=1/(s-r),A=s/(s-r);else if(o===Ii)m=-2/(s-r),A=-(s+r)/(s-r);else if(o===Do)m=-1/(s-r),A=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sl.prototype.isMatrix4=!0;let Kt=sl;const ur=new z,fi=new Kt,k0=new z(0,0,0),H0=new z(1,1,1),la=new z,as=new z,Yn=new z,Tu=new Kt,wu=new xi;class Ca{constructor(e=0,t=0,i=0,a=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],f=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(f,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const Ru=new z,dr=new xi,Gi=new Kt,rs=new z,ro=new z,X0=new z,q0=new xi,Cu=new z(1,0,0),Pu=new z(0,1,0),Iu=new z(0,0,1),Lu={type:"added"},$0={type:"removed"},hr={type:"childadded",child:null},Il={type:"childremoved",child:null};class Jt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new z,t=new Ca,i=new xi,a=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Et}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ro,rs,this.up):Gi.lookAt(rs,ro,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),dr.setFromRotationMatrix(Gi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),hr.child=e,this.dispatchEvent(hr),hr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let c=0,u=f.length;c<u;c++){const h=f[c];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,c=this.material.length;f<c;f++)o.push(r(e.materials,this.material[f]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];a.animations.push(r(e.animations,f))}}if(t){const o=s(e.geometries),f=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const f=[];for(const c in o){const u=o[c];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zt extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y0={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,f=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const A of e.hand.values()){const v=t.getJointPose(A,i),x=this._getHandJoint(c,A);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=a!==null),f!==null&&(f.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ca={h:0,s:0,l:0},os={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Nt.workingColorSpace){if(e=Cf(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Dl(s,r,e+1/3),this.g=Dl(s,r,e),this.b=Dl(s,r,e-1/3)}return Nt.colorSpaceToWorking(this,a),this}setStyle(e,t=kn){function i(r){r!==void 0&&parseFloat(r)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Nt.workingToColorSpace(En.copy(this),e),Math.round(Ct(En.r*255,0,255))*65536+Math.round(Ct(En.g*255,0,255))*256+Math.round(Ct(En.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(En.copy(this),t);const i=En.r,a=En.g,r=En.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let f,c;const u=(o+s)/2;if(o===s)f=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:f=(a-r)/h+(a<r?6:0);break;case a:f=(r-i)/h+2;break;case r:f=(i-a)/h+4;break}f/=6}return e.h=f,e.s=c,e.l=u,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=kn){Nt.workingToColorSpace(En.copy(this),e);const t=En.r,i=En.g,a=En.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ca),this.setHSL(ca.h+e,ca.s+t,ca.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ca),e.getHSL(os);const i=To(ca.h,os.h,t),a=To(ca.s,os.s,t),r=To(ca.l,os.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new St;St.NAMES=vh;class Mh extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ui=new z,Vi=new z,Nl=new z,ki=new z,pr=new z,mr=new z,Du=new z,Ul=new z,Ol=new z,Fl=new z,Bl=new an,zl=new an,Gl=new an;class ri{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ui.subVectors(e,t),a.cross(ui);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){ui.subVectors(a,t),Vi.subVectors(i,t),Nl.subVectors(e,t);const s=ui.dot(ui),o=ui.dot(Vi),f=ui.dot(Nl),c=Vi.dot(Vi),u=Vi.dot(Nl),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*f-o*u)*d,m=(s*u-o*f)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,a,r,s,o,f){return this.getBarycoord(e,t,i,a,ki)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,ki.x),f.addScaledVector(s,ki.y),f.addScaledVector(o,ki.z),f)}static getInterpolatedAttribute(e,t,i,a,r,s){return Bl.setScalar(0),zl.setScalar(0),Gl.setScalar(0),Bl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Bl,r.x),s.addScaledVector(zl,r.y),s.addScaledVector(Gl,r.z),s}static isFrontFacing(e,t,i,a){return ui.subVectors(i,t),Vi.subVectors(e,t),ui.cross(Vi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ui.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;pr.subVectors(a,i),mr.subVectors(r,i),Ul.subVectors(e,i);const f=pr.dot(Ul),c=mr.dot(Ul);if(f<=0&&c<=0)return t.copy(i);Ol.subVectors(e,a);const u=pr.dot(Ol),h=mr.dot(Ol);if(u>=0&&h<=u)return t.copy(a);const d=f*h-u*c;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(i).addScaledVector(pr,s);Fl.subVectors(e,r);const p=pr.dot(Fl),m=mr.dot(Fl);if(m>=0&&p<=m)return t.copy(r);const A=p*c-f*m;if(A<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(mr,o);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return Du.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(Du,o);const x=1/(v+A+d);return s=A*x,o=d*x,t.copy(i).addScaledVector(pr,s).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,di):di.fromBufferAttribute(r,s),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ss.copy(i.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ls.subVectors(this.max,oo),gr.subVectors(e.a,oo),xr.subVectors(e.b,oo),vr.subVectors(e.c,oo),fa.subVectors(xr,gr),ua.subVectors(vr,xr),Ua.subVectors(gr,vr);let t=[0,-fa.z,fa.y,0,-ua.z,ua.y,0,-Ua.z,Ua.y,fa.z,0,-fa.x,ua.z,0,-ua.x,Ua.z,0,-Ua.x,-fa.y,fa.x,0,-ua.y,ua.x,0,-Ua.y,Ua.x,0];return!Vl(t,gr,xr,vr,ls)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,gr,xr,vr,ls))?!1:(cs.crossVectors(fa,ua),t=[cs.x,cs.y,cs.z],Vl(t,gr,xr,vr,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new z,new z,new z,new z,new z,new z,new z,new z],di=new z,ss=new qo,gr=new z,xr=new z,vr=new z,fa=new z,ua=new z,Ua=new z,oo=new z,ls=new z,cs=new z,Oa=new z;function Vl(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){Oa.fromArray(n,r);const o=a.x*Math.abs(Oa.x)+a.y*Math.abs(Oa.y)+a.z*Math.abs(Oa.z),f=e.dot(Oa),c=t.dot(Oa),u=i.dot(Oa);if(Math.max(-Math.max(f,c,u),Math.min(f,c,u))>o)return!1}return!0}const hn=new z,fs=new Ue;let J0=0;class vi extends tr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class _h extends vi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sh extends vi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends vi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Z0=new qo,so=new z,kl=new z;class cl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Z0.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(so,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(kl)),this.expandByPoint(so.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K0=0;const ni=new Kt,Hl=new Jt,Mr=new z,Jn=new qo,lo=new qo,xn=new z;class yn extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m0(e)?Sh:_h)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];lo.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Jn.min,lo.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,lo.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(lo.min),Jn.expandByPoint(lo.max))}Jn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)xn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(xn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],f=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xn.fromBufferAttribute(o,c),f&&(Mr.fromBufferAttribute(e,c),xn.add(Mr)),a=Math.max(a,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],f=[];for(let _=0;_<i.count;_++)o[_]=new z,f[_]=new z;const c=new z,u=new z,h=new z,d=new Ue,p=new Ue,m=new Ue,A=new z,v=new z;function x(_,R,L){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,L),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(A.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(A),o[R].add(A),o[L].add(A),f[_].add(v),f[R].add(v),f[L].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,R=T.length;_<R;++_){const L=T[_],U=L.start,k=L.count;for(let $=U,H=U+k;$<H;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const P=new z,b=new z,S=new z,w=new z;function I(_){S.fromBufferAttribute(a,_),w.copy(S);const R=o[_];P.copy(R),P.sub(S.multiplyScalar(S.dot(R))).normalize(),b.crossVectors(w,R);const U=b.dot(f[_])<0?-1:1;s.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,R=T.length;_<R;++_){const L=T[_],U=L.start,k=L.count;for(let $=U,H=U+k;$<H;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new z,r=new z,s=new z,o=new z,f=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),A=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,A),s.fromBufferAttribute(t,v),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),f.fromBufferAttribute(i,A),c.fromBufferAttribute(i,v),o.add(u),f.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,f){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(f.length*u);let p=0,m=0;for(let A=0,v=f.length;A<v;A++){o.isInterleavedBufferAttribute?p=f[A]*o.data.stride+o.offset:p=f[A]*u;for(let x=0;x<u;x++)d[m++]=c[p++]}return new vi(d,u,h)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,a=this.attributes;for(const o in a){const f=a[o],c=e(f,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const f=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);f.push(p)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,f=s.length;o<f;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const c in f)f[c]!==void 0&&(e[c]=f[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const c=i[f];e.data.attributes[f]=c.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const c=this.morphAttributes[f],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Ln=new z;class Ks{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wl=new z,j0=new z,em=new Et;class _a{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Wl.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Wl),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||em.getNormalMatrix(e),a=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let tm=0;class nr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Eo,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tl,this.stencilZFail=Tl,this.stencilZPass=Tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const f=r[o];delete f.metadata,s.push(f)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new _a().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class If extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _r;const co=new z,Sr=new z,yr=new z,br=new Ue,fo=new Ue,yh=new Kt,us=new z,uo=new z,ds=new z,Nu=new Ue,Xl=new Ue,Uu=new Ue;class bh extends Jt{constructor(e=new If){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Q0(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new Ks(i,3,0,!1)),_r.setAttribute("uv",new Ks(i,2,3,!1))}this.geometry=_r,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-yr.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;hs(us.set(-.5,-.5,0),yr,s,Sr,a,r),hs(uo.set(.5,-.5,0),yr,s,Sr,a,r),hs(ds.set(.5,.5,0),yr,s,Sr,a,r),Nu.set(0,0),Xl.set(1,0),Uu.set(1,1);let o=e.ray.intersectTriangle(us,uo,ds,!1,co);if(o===null&&(hs(uo.set(-.5,.5,0),yr,s,Sr,a,r),Xl.set(0,1),o=e.ray.intersectTriangle(us,ds,uo,!1,co),o===null))return;const f=e.ray.origin.distanceTo(co);f<e.near||f>e.far||t.push({distance:f,point:co.clone(),uv:ri.getInterpolation(co,us,uo,ds,Nu,Xl,Uu,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hs(n,e,t,i,a,r){br.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(fo.x=r*br.x-a*br.y,fo.y=a*br.x+r*br.y):fo.copy(br),n.copy(e),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(yh)}const Wi=new z,ql=new z,ps=new z,ms=new z;class Eh{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ql.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(ql);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ps),o=ms.dot(this.direction),f=-ms.dot(ps),c=ms.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*f-o,d=s*o-f,m=r*u,h>=0)if(d>=-m)if(d<=m){const A=1/u;h*=A,d*=A,p=h*(h+s*d+2*o)+d*(s*h+d+2*f)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-f),r),p=d*(d+2*f)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(ql).addScaledVector(ps,d),p}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),a=Wi.dot(Wi)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,f=i+s;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,f;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,f=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,f=(e.min.z-d.z)*h),i>f||o>a)||((o>i||i!==i)&&(i=o),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,f=o.x,c=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,A=t.y-s.y,v=t.z-s.z,x=i.x-s.x,T=i.y-s.y,P=i.z-s.z,b=Math.abs(f),S=Math.abs(c),w=Math.abs(u);let I,_,R,L,U,k,$,H,V,ae,X,xe;if(b>=S&&b>=w?(R=f,k=h,V=m,xe=x,f>=0?(I=c,_=u,L=d,U=p,$=A,H=v,ae=T,X=P):(I=u,_=c,L=p,U=d,$=v,H=A,ae=P,X=T)):S>=w?(R=c,k=d,V=A,xe=T,c>=0?(I=u,_=f,L=p,U=h,$=v,H=m,ae=P,X=x):(I=f,_=u,L=h,U=p,$=m,H=v,ae=x,X=P)):(R=u,k=p,V=v,xe=P,u>=0?(I=f,_=c,L=h,U=d,$=m,H=A,ae=x,X=T):(I=c,_=f,L=d,U=h,$=A,H=m,ae=T,X=x)),R===0)return null;const se=I/R,le=_/R,fe=1/R,Qe=L-se*k,We=U-le*k,gt=$-se*V,ht=H-le*V,bt=ae-se*xe,re=X-le*xe,pe=bt*ht-re*gt,Re=Qe*re-We*bt,at=gt*We-ht*Qe;if(a){if(pe<0||Re<0||at<0)return null}else if((pe<0||Re<0||at<0)&&(pe>0||Re>0||at>0))return null;const He=pe+Re+at;if(He===0)return null;const Ce=fe*(pe*k+Re*V+at*xe);return(He>0?Ce<0:Ce>0)?null:this.at(Ce/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class aa extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ou=new Kt,Fa=new Eh,gs=new cl,Fu=new z,xs=new z,vs=new z,Ms=new z,$l=new z,_s=new z,Bu=new z,Ss=new z;class Mt extends Jt{constructor(e=new yn,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let f=0,c=r.length;f<c;f++){const u=o[f],h=r[f];u!==0&&($l.fromBufferAttribute(h,e),s?_s.addScaledVector($l,u):_s.addScaledVector($l.sub(t),u))}t.add(_s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(r),Fa.copy(e.ray).recast(e.near),!(gs.containsPoint(Fa.origin)===!1&&(Fa.intersectSphere(gs,Fu)===null||Fa.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Ou.copy(r).invert(),Fa.copy(e.ray).applyMatrix4(Ou),!(i.boundingBox!==null&&Fa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,f=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,A=d.length;m<A;m++){const v=d[m],x=s[v.materialIndex],T=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let b=T,S=P;b<S;b+=3){const w=o.getX(b),I=o.getX(b+1),_=o.getX(b+2);a=ys(this,x,e,i,c,u,h,w,I,_),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),A=Math.min(o.count,p.start+p.count);for(let v=m,x=A;v<x;v+=3){const T=o.getX(v),P=o.getX(v+1),b=o.getX(v+2);a=ys(this,s,e,i,c,u,h,T,P,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(s))for(let m=0,A=d.length;m<A;m++){const v=d[m],x=s[v.materialIndex],T=Math.max(v.start,p.start),P=Math.min(f.count,Math.min(v.start+v.count,p.start+p.count));for(let b=T,S=P;b<S;b+=3){const w=b,I=b+1,_=b+2;a=ys(this,x,e,i,c,u,h,w,I,_),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),A=Math.min(f.count,p.start+p.count);for(let v=m,x=A;v<x;v+=3){const T=v,P=v+1,b=v+2;a=ys(this,s,e,i,c,u,h,T,P,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function nm(n,e,t,i,a,r,s,o){let f;if(e.side===Bn?f=i.intersectTriangle(s,r,a,!0,o):f=i.intersectTriangle(a,r,s,e.side===Ja,o),f===null)return null;Ss.copy(o),Ss.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:n}}function ys(n,e,t,i,a,r,s,o,f,c){n.getVertexPosition(o,xs),n.getVertexPosition(f,vs),n.getVertexPosition(c,Ms);const u=nm(n,e,t,i,xs,vs,Ms,Bu);if(u){const h=new z;ri.getBarycoord(Bu,xs,vs,Ms,h),a&&(u.uv=ri.getInterpolatedAttribute(a,o,f,c,h,new Ue)),r&&(u.uv1=ri.getInterpolatedAttribute(r,o,f,c,h,new Ue)),s&&(u.normal=ri.getInterpolatedAttribute(s,o,f,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:f,c,normal:new z,materialIndex:0};ri.getNormal(xs,vs,Ms,d.normal),u.face=d,u.barycoord=h}return u}class Ah extends _n{constructor(e=null,t=1,i=1,a,r,s,o,f,c=cn,u=cn,h,d){super(null,s,o,f,c,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new cl,im=new Ue(.5,.5),bs=new z;class Lf{constructor(e=new _a,t=new _a,i=new _a,a=new _a,r=new _a,s=new _a){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],f=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],A=r[9],v=r[10],x=r[11],T=r[12],P=r[13],b=r[14],S=r[15];if(a[0].setComponents(c-s,p-u,x-m,S-T).normalize(),a[1].setComponents(c+s,p+u,x+m,S+T).normalize(),a[2].setComponents(c+o,p+h,x+A,S+P).normalize(),a[3].setComponents(c-o,p-h,x-A,S-P).normalize(),i)a[4].setComponents(f,d,v,b).normalize(),a[5].setComponents(c-f,p-d,x-v,S-b).normalize();else if(a[4].setComponents(c-f,p-d,x-v,S-b).normalize(),t===Ii)a[5].setComponents(c+f,p+d,x+v,S+b).normalize();else if(t===Do)a[5].setComponents(f,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ba.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ba.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ba)}intersectsSprite(e){Ba.center.set(0,0,0);const t=im.distanceTo(e.center);return Ba.radius=.7071067811865476+t,Ba.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ba)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(bs.x=a.normal.x>0?e.max.x:e.min.x,bs.y=a.normal.y>0?e.max.y:e.min.y,bs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Th extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new Kt,ef=new Eh,Es=new cl,As=new z;class am extends Jt{constructor(e=new yn,t=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(a),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;zu.copy(a).invert(),ef.copy(e.ray).applyMatrix4(zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,A=p;m<A;m++){const v=c.getX(m);As.fromBufferAttribute(h,v),Gu(As,v,f,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,A=p;m<A;m++)As.fromBufferAttribute(h,m),Gu(As,m,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gu(n,e,t,i,a,r,s){const o=ef.distanceSqToPoint(n);if(o<t){const f=new z;ef.closestPointToPoint(n,f),f.applyMatrix4(i);const c=a.ray.origin.distanceTo(f);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class wh extends _n{constructor(e=[],t=Za,i,a,r,s,o,f,c,u){super(e,t,i,a,r,s,o,f,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oo extends _n{constructor(e,t,i,a,r,s,o,f,c){super(e,t,i,a,r,s,o,f,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends _n{constructor(e,t,i=Ni,a,r,s,o=cn,f=cn,c,u=ta,h=1){if(u!==ta&&u!==Xa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,f,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class rm extends Xr{constructor(e,t=Ni,i=Za,a,r,s=cn,o=cn,f,c=ta){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,f,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rh extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class na extends yn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const f=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function m(A,v,x,T,P,b,S,w,I,_,R){const L=b/I,U=S/_,k=b/2,$=S/2,H=w/2,V=I+1,ae=_+1;let X=0,xe=0;const se=new z;for(let le=0;le<ae;le++){const fe=le*U-$;for(let Qe=0;Qe<V;Qe++){const We=Qe*L-k;se[A]=We*T,se[v]=fe*P,se[x]=H,c.push(se.x,se.y,se.z),se[A]=0,se[v]=0,se[x]=w>0?1:-1,u.push(se.x,se.y,se.z),h.push(Qe/I),h.push(1-le/_),X+=1}}for(let le=0;le<_;le++)for(let fe=0;fe<I;fe++){const Qe=d+fe+V*le,We=d+fe+V*(le+1),gt=d+(fe+1)+V*(le+1),ht=d+(fe+1)+V*le;f.push(Qe,We,ht),f.push(We,gt,ht),xe+=6}o.addGroup(p,xe,R),p+=xe,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class un extends yn{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:f};const c=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const A=[],v=i/2;let x=0;T(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(p,2));function T(){const b=new z,S=new z;let w=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const R=[],L=_/r,U=L*(t-e)+e;for(let k=0;k<=a;k++){const $=k/a,H=$*f+o,V=Math.sin(H),ae=Math.cos(H);S.x=U*V,S.y=-L*i+v,S.z=U*ae,h.push(S.x,S.y,S.z),b.set(V,I,ae).normalize(),d.push(b.x,b.y,b.z),p.push($,1-L),R.push(m++)}A.push(R)}for(let _=0;_<a;_++)for(let R=0;R<r;R++){const L=A[R][_],U=A[R+1][_],k=A[R+1][_+1],$=A[R][_+1];(e>0||R!==0)&&(u.push(L,U,$),w+=3),(t>0||R!==r-1)&&(u.push(U,k,$),w+=3)}c.addGroup(x,w,0),x+=w}function P(b){const S=m,w=new Ue,I=new z;let _=0;const R=b===!0?e:t,L=b===!0?1:-1;for(let k=1;k<=a;k++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let k=0;k<=a;k++){const H=k/a*f+o,V=Math.cos(H),ae=Math.sin(H);I.x=R*ae,I.y=v*L,I.z=R*V,h.push(I.x,I.y,I.z),d.push(0,L,0),w.x=V*.5+.5,w.y=ae*.5*L+.5,p.push(w.x,w.y),m++}for(let k=0;k<a;k++){const $=S+k,H=U+k;b===!0?u.push(H,H+1,$):u.push(H+1,H,$),_+=3}c.addGroup(x,_,b===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Aa extends un{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Aa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fl extends yn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),c(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const P=new z,b=new z,S=new z;for(let w=0;w<t.length;w+=3)p(t[w+0],P),p(t[w+1],b),p(t[w+2],S),f(P,b,S,T)}function f(T,P,b,S){const w=S+1,I=[];for(let _=0;_<=w;_++){I[_]=[];const R=T.clone().lerp(b,_/w),L=P.clone().lerp(b,_/w),U=w-_;for(let k=0;k<=U;k++)k===0&&_===w?I[_][k]=R:I[_][k]=R.clone().lerp(L,k/U)}for(let _=0;_<w;_++)for(let R=0;R<2*(w-_)-1;R++){const L=Math.floor(R/2);R%2===0?(d(I[_][L+1]),d(I[_+1][L]),d(I[_][L])):(d(I[_][L+1]),d(I[_+1][L+1]),d(I[_+1][L]))}}function c(T){const P=new z;for(let b=0;b<r.length;b+=3)P.x=r[b+0],P.y=r[b+1],P.z=r[b+2],P.normalize().multiplyScalar(T),r[b+0]=P.x,r[b+1]=P.y,r[b+2]=P.z}function u(){const T=new z;for(let P=0;P<r.length;P+=3){T.x=r[P+0],T.y=r[P+1],T.z=r[P+2];const b=v(T)/2/Math.PI+.5,S=x(T)/Math.PI+.5;s.push(b,1-S)}m(),h()}function h(){for(let T=0;T<s.length;T+=6){const P=s[T+0],b=s[T+2],S=s[T+4],w=Math.max(P,b,S),I=Math.min(P,b,S);w>.9&&I<.1&&(P<.2&&(s[T+0]+=1),b<.2&&(s[T+2]+=1),S<.2&&(s[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,P){const b=T*3;P.x=e[b+0],P.y=e[b+1],P.z=e[b+2]}function m(){const T=new z,P=new z,b=new z,S=new z,w=new Ue,I=new Ue,_=new Ue;for(let R=0,L=0;R<r.length;R+=9,L+=6){T.set(r[R+0],r[R+1],r[R+2]),P.set(r[R+3],r[R+4],r[R+5]),b.set(r[R+6],r[R+7],r[R+8]),w.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(T).add(P).add(b).divideScalar(3);const U=v(S);A(w,L+0,T,U),A(I,L+2,P,U),A(_,L+4,b,U)}}function A(T,P,b,S){S<0&&T.x===1&&(s[P]=T.x-1),b.x===0&&b.z===0&&(s[P]=S/2/Math.PI+.5)}function v(T){return Math.atan2(T.z,-T.x)}function x(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.vertices,e.indices,e.radius,e.detail)}}class Df extends fl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Df(e.radius,e.detail)}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,f=r-1,c;for(;o<=f;)if(a=Math.floor(o+(f-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)f=a-1;else{f=a;break}if(a=f,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),f=t||(s.isVector2?new Ue:new z);return f.copy(o).sub(s).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,a=[],r=[],s=[],o=new z,f=new Kt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new z)}r[0]=new z,s[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ct(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(f.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Ct(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(f.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nf extends Oi{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=f}getPoint(e,t=new Ue){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=f-this.aX,p=c-this.aY;f=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(f,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class om extends Nf{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let n=0,e=0,t=0,i=0;function a(r,s,o,f){n=r,e=o,t=-3*r+3*s-2*o-f,i=2*r-2*s+o+f}return{initCatmullRom:function(r,s,o,f,c){a(s,o,c*(o-r),c*(f-s))},initNonuniformCatmullRom:function(r,s,o,f,c,u,h){let d=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(f-s)/(u+h)+(f-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const Vu=new z,ku=new z,Yl=new Uf,Jl=new Uf,Zl=new Uf;class sm extends Oi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new z){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),f=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:f===0&&o===r-1&&(o=r-2,f=1);let c,u;this.closed||o>0?c=a[(o-1)%r]:(ku.subVectors(a[0],a[1]).add(a[0]),c=ku);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(Vu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),A=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);A<1e-4&&(A=1),m<1e-4&&(m=A),v<1e-4&&(v=A),Yl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,A,v),Jl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,A,v),Zl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,A,v)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Jl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Zl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Yl.calc(f),Jl.calc(f),Zl.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new z().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hu(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,f=n*o;return(2*t-2*i+r+s)*f+(-3*t+3*i-2*r-s)*o+r*n+t}function lm(n,e){const t=1-n;return t*t*e}function cm(n,e){return 2*(1-n)*n*e}function fm(n,e){return n*n*e}function wo(n,e,t,i){return lm(n,e)+cm(n,t)+fm(n,i)}function um(n,e){const t=1-n;return t*t*t*e}function dm(n,e){const t=1-n;return 3*t*t*n*e}function hm(n,e){return 3*(1-n)*n*n*e}function pm(n,e){return n*n*n*e}function Ro(n,e,t,i,a){return um(n,e)+dm(n,t)+hm(n,i)+pm(n,a)}class Ch extends Oi{constructor(e=new Ue,t=new Ue,i=new Ue,a=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ue){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Ro(e,a.x,r.x,s.x,o.x),Ro(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mm extends Oi{constructor(e=new z,t=new z,i=new z,a=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new z){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Ro(e,a.x,r.x,s.x,o.x),Ro(e,a.y,r.y,s.y,o.y),Ro(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ph extends Oi{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gm extends Oi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends Oi{constructor(e=new Ue,t=new Ue,i=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ue){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(wo(e,a.x,r.x,s.x),wo(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xm extends Oi{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(wo(e,a.x,r.x,s.x),wo(e,a.y,r.y,s.y),wo(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lh extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,f=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(Hu(o,f.x,c.x,u.x,h.x),Hu(o,f.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ue().fromArray(a))}return this}}var tf=Object.freeze({__proto__:null,ArcCurve:om,CatmullRomCurve3:sm,CubicBezierCurve:Ch,CubicBezierCurve3:mm,EllipseCurve:Nf,LineCurve:Ph,LineCurve3:gm,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:xm,SplineCurve:Lh});class vm extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],f=o.getLength(),c=f===0?0:1-s/f;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,f=s.getPoints(o);for(let c=0;c<f.length;c++){const u=f[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new tf[a.type]().fromJSON(a))}return this}}class Wu extends vm{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ph(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new Ih(this.currentPoint.clone(),new Ue(e,t),new Ue(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new Ch(this.currentPoint.clone(),new Ue(e,t),new Ue(i,a),new Ue(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Lh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+o,t+f,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,f){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,r,s,o,f),this}absellipse(e,t,i,a,r,s,o,f){const c=new Nf(e,t,i,a,r,s,o,f);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Of extends Wu{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Wu().fromJSON(a))}return this}}function Mm(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=Dh(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,f,c;if(i&&(r=Em(n,e,r,t)),n.length>80*t){o=n[0],f=n[1];let u=o,h=f;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<f&&(f=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-o,h-f),c=c!==0?32767/c:0}return Fo(r,s,t,o,f,c,0),s}function Dh(n,e,t,i,a){let r;if(a===Um(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=Xu(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=Xu(s/i|0,n[s],n[s+1],r);return r&&qr(r,r.next)&&(zo(r),r=r.next),r}function Qa(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qr(t,t.next)||rn(t.prev,t,t.next)===0)){if(zo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fo(n,e,t,i,a,r,s){if(!n)return;!s&&r&&Cm(n,i,a,r);let o=n;for(;n.prev!==n.next;){const f=n.prev,c=n.next;if(r?Sm(n,i,a,r):_m(n)){e.push(f.i,n.i,c.i),zo(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=ym(Qa(n),e),Fo(n,e,t,i,a,r,2)):s===2&&bm(n,e,t,i,a,r):Fo(Qa(n),e,t,i,a,r,1);break}}}function _m(n){const e=n.prev,t=n,i=n.next;if(rn(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,f=t.y,c=i.y,u=Math.min(a,r,s),h=Math.min(o,f,c),d=Math.max(a,r,s),p=Math.max(o,f,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&So(a,o,r,f,s,c,m.x,m.y)&&rn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sm(n,e,t,i){const a=n.prev,r=n,s=n.next;if(rn(a,r,s)>=0)return!1;const o=a.x,f=r.x,c=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,f,c),m=Math.min(u,h,d),A=Math.max(o,f,c),v=Math.max(u,h,d),x=nf(p,m,e,t,i),T=nf(A,v,e,t,i);let P=n.prevZ,b=n.nextZ;for(;P&&P.z>=x&&b&&b.z<=T;){if(P.x>=p&&P.x<=A&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&So(o,u,f,h,c,d,P.x,P.y)&&rn(P.prev,P,P.next)>=0||(P=P.prevZ,b.x>=p&&b.x<=A&&b.y>=m&&b.y<=v&&b!==a&&b!==s&&So(o,u,f,h,c,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;P&&P.z>=x;){if(P.x>=p&&P.x<=A&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&So(o,u,f,h,c,d,P.x,P.y)&&rn(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;b&&b.z<=T;){if(b.x>=p&&b.x<=A&&b.y>=m&&b.y<=v&&b!==a&&b!==s&&So(o,u,f,h,c,d,b.x,b.y)&&rn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ym(n,e){let t=n;do{const i=t.prev,a=t.next.next;!qr(i,a)&&Uh(i,t,t.next,a)&&Bo(i,a)&&Bo(a,i)&&(e.push(i.i,t.i,a.i),zo(t),zo(t.next),t=n=a),t=t.next}while(t!==n);return Qa(t)}function bm(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Lm(s,o)){let f=Oh(s,o);s=Qa(s,s.next),f=Qa(f,f.next),Fo(s,e,t,i,a,r,0),Fo(f,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function Em(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,f=r<s-1?e[r+1]*i:n.length,c=Dh(n,o,f,i,!1);c===c.next&&(c.steiner=!0),a.push(Im(c))}a.sort(Am);for(let r=0;r<a.length;r++)t=Tm(a[r],t);return t}function Am(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function Tm(n,e){const t=wm(n,e);if(!t)return e;const i=Oh(t,n);return Qa(i,i.next),Qa(t,t.next)}function wm(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(qr(n,t))return t;do{if(qr(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,f=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=f&&i!==t.x&&Nh(a<c?i:r,a,f,c,a<c?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);Bo(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Rm(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function Rm(n,e){return rn(n.prev,n,e.prev)<0&&rn(e.next,n,n.next)<0}function Cm(n,e,t,i){let a=n;do a.z===0&&(a.z=nf(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,Pm(a)}function Pm(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let f=t;for(;o>0||f>0&&s;)o!==0&&(f===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,f--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function nf(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Im(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Nh(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function So(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&Nh(n,e,t,i,a,r,s,o)}function Lm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dm(n,e)&&(Bo(n,e)&&Bo(e,n)&&Nm(n,e)&&(rn(n.prev,n,e.prev)||rn(n,e.prev,e))||qr(n,e)&&rn(n.prev,n,n.next)>0&&rn(e.prev,e,e.next)>0)}function rn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qr(n,e){return n.x===e.x&&n.y===e.y}function Uh(n,e,t,i){const a=ws(rn(n,e,t)),r=ws(rn(n,e,i)),s=ws(rn(t,i,n)),o=ws(rn(t,i,e));return!!(a!==r&&s!==o||a===0&&Ts(n,t,e)||r===0&&Ts(n,i,e)||s===0&&Ts(t,n,i)||o===0&&Ts(t,e,i))}function Ts(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ws(n){return n>0?1:n<0?-1:0}function Dm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Bo(n,e){return rn(n.prev,n,n.next)<0?rn(n,e,n.next)>=0&&rn(n,n.prev,e)>=0:rn(n,e,n.prev)<0||rn(n,n.next,e)<0}function Nm(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Oh(n,e){const t=af(n.i,n.x,n.y),i=af(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xu(n,e,t,i){const a=af(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function zo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function af(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class Om{static triangulate(e,t,i=2){return Mm(e,t,i)}}class Or{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return Or.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];qu(e),$u(i,e);let s=e.length;t.forEach(qu);for(let f=0;f<t.length;f++)a.push(s),s+=t[f].length,$u(i,t[f]);const o=Om.triangulate(i,a);for(let f=0;f<o.length;f+=3)r.push(o.slice(f,f+3));return r}}function qu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $u(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Qs extends yn{constructor(e=new Of([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,f=e.length;o<f;o++){const c=e[o];s(c)}this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function s(o){const f=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Fm;let P,b=!1,S,w,I,_;if(x){P=x.getSpacedPoints(u),b=!0,d=!1;const ce=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(u,ce),w=new z,I=new z,_=new z}d||(v=0,p=0,m=0,A=0);const R=o.extractPoints(c);let L=R.shape;const U=R.holes;if(!Or.isClockWise(L)){L=L.reverse();for(let ce=0,Me=U.length;ce<Me;ce++){const Se=U[ce];Or.isClockWise(Se)&&(U[ce]=Se.reverse())}}function $(ce){const Se=10000000000000001e-36;let Ae=ce[0];for(let Te=1;Te<=ce.length;Te++){const qe=Te%ce.length,y=ce[qe],ye=y.x-Ae.x,Ne=y.y-Ae.y,F=ye*ye+Ne*Ne,ct=Math.max(Math.abs(y.x),Math.abs(y.y),Math.abs(Ae.x),Math.abs(Ae.y)),Fe=Se*ct*ct;if(F<=Fe){ce.splice(qe,1),Te--;continue}Ae=y}}$(L),U.forEach($);const H=U.length,V=L;for(let ce=0;ce<H;ce++){const Me=U[ce];L=L.concat(Me)}function ae(ce,Me,Se){return Me||Ut("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(Me,Se)}const X=L.length;function xe(ce,Me,Se){let Ae,Te,qe;const y=ce.x-Me.x,ye=ce.y-Me.y,Ne=Se.x-ce.x,F=Se.y-ce.y,ct=y*y+ye*ye,Fe=y*F-ye*Ne;if(Math.abs(Fe)>Number.EPSILON){const D=Math.sqrt(ct),E=Math.sqrt(Ne*Ne+F*F),Y=Me.x-ye/D,Z=Me.y+y/D,oe=Se.x-F/E,ve=Se.y+Ne/E,we=((oe-Y)*F-(ve-Z)*Ne)/(y*F-ye*Ne);Ae=Y+y*we-ce.x,Te=Z+ye*we-ce.y;const te=Ae*Ae+Te*Te;if(te<=2)return new Ue(Ae,Te);qe=Math.sqrt(te/2)}else{let D=!1;y>Number.EPSILON?Ne>Number.EPSILON&&(D=!0):y<-Number.EPSILON?Ne<-Number.EPSILON&&(D=!0):Math.sign(ye)===Math.sign(F)&&(D=!0),D?(Ae=-ye,Te=y,qe=Math.sqrt(ct)):(Ae=y,Te=ye,qe=Math.sqrt(ct/2))}return new Ue(Ae/qe,Te/qe)}const se=[];for(let ce=0,Me=V.length,Se=Me-1,Ae=ce+1;ce<Me;ce++,Se++,Ae++)Se===Me&&(Se=0),Ae===Me&&(Ae=0),se[ce]=xe(V[ce],V[Se],V[Ae]);const le=[];let fe,Qe=se.concat();for(let ce=0,Me=H;ce<Me;ce++){const Se=U[ce];fe=[];for(let Ae=0,Te=Se.length,qe=Te-1,y=Ae+1;Ae<Te;Ae++,qe++,y++)qe===Te&&(qe=0),y===Te&&(y=0),fe[Ae]=xe(Se[Ae],Se[qe],Se[y]);le.push(fe),Qe=Qe.concat(fe)}let We;if(v===0)We=Or.triangulateShape(V,U);else{const ce=[],Me=[];for(let Se=0;Se<v;Se++){const Ae=Se/v,Te=p*Math.cos(Ae*Math.PI/2),qe=m*Math.sin(Ae*Math.PI/2)+A;for(let y=0,ye=V.length;y<ye;y++){const Ne=ae(V[y],se[y],qe);Re(Ne.x,Ne.y,-Te),Ae===0&&ce.push(Ne)}for(let y=0,ye=H;y<ye;y++){const Ne=U[y];fe=le[y];const F=[];for(let ct=0,Fe=Ne.length;ct<Fe;ct++){const D=ae(Ne[ct],fe[ct],qe);Re(D.x,D.y,-Te),Ae===0&&F.push(D)}Ae===0&&Me.push(F)}}We=Or.triangulateShape(ce,Me)}const gt=We.length,ht=m+A;for(let ce=0;ce<X;ce++){const Me=d?ae(L[ce],Qe[ce],ht):L[ce];b?(I.copy(S.normals[0]).multiplyScalar(Me.x),w.copy(S.binormals[0]).multiplyScalar(Me.y),_.copy(P[0]).add(I).add(w),Re(_.x,_.y,_.z)):Re(Me.x,Me.y,0)}for(let ce=1;ce<=u;ce++)for(let Me=0;Me<X;Me++){const Se=d?ae(L[Me],Qe[Me],ht):L[Me];b?(I.copy(S.normals[ce]).multiplyScalar(Se.x),w.copy(S.binormals[ce]).multiplyScalar(Se.y),_.copy(P[ce]).add(I).add(w),Re(_.x,_.y,_.z)):Re(Se.x,Se.y,h/u*ce)}for(let ce=v-1;ce>=0;ce--){const Me=ce/v,Se=p*Math.cos(Me*Math.PI/2),Ae=m*Math.sin(Me*Math.PI/2)+A;for(let Te=0,qe=V.length;Te<qe;Te++){const y=ae(V[Te],se[Te],Ae);Re(y.x,y.y,h+Se)}for(let Te=0,qe=U.length;Te<qe;Te++){const y=U[Te];fe=le[Te];for(let ye=0,Ne=y.length;ye<Ne;ye++){const F=ae(y[ye],fe[ye],Ae);b?Re(F.x,F.y+P[u-1].y,P[u-1].x+Se):Re(F.x,F.y,h+Se)}}}bt(),re();function bt(){const ce=a.length/3;if(d){let Me=0,Se=X*Me;for(let Ae=0;Ae<gt;Ae++){const Te=We[Ae];at(Te[2]+Se,Te[1]+Se,Te[0]+Se)}Me=u+v*2,Se=X*Me;for(let Ae=0;Ae<gt;Ae++){const Te=We[Ae];at(Te[0]+Se,Te[1]+Se,Te[2]+Se)}}else{for(let Me=0;Me<gt;Me++){const Se=We[Me];at(Se[2],Se[1],Se[0])}for(let Me=0;Me<gt;Me++){const Se=We[Me];at(Se[0]+X*u,Se[1]+X*u,Se[2]+X*u)}}i.addGroup(ce,a.length/3-ce,0)}function re(){const ce=a.length/3;let Me=0;pe(V,Me),Me+=V.length;for(let Se=0,Ae=U.length;Se<Ae;Se++){const Te=U[Se];pe(Te,Me),Me+=Te.length}i.addGroup(ce,a.length/3-ce,1)}function pe(ce,Me){let Se=ce.length;for(;--Se>=0;){const Ae=Se;let Te=Se-1;Te<0&&(Te=ce.length-1);for(let qe=0,y=u+v*2;qe<y;qe++){const ye=X*qe,Ne=X*(qe+1),F=Me+Ae+ye,ct=Me+Te+ye,Fe=Me+Te+Ne,D=Me+Ae+Ne;He(F,ct,Fe,D)}}}function Re(ce,Me,Se){f.push(ce),f.push(Me),f.push(Se)}function at(ce,Me,Se){Ce(ce),Ce(Me),Ce(Se);const Ae=a.length/3,Te=T.generateTopUV(i,a,Ae-3,Ae-2,Ae-1);lt(Te[0]),lt(Te[1]),lt(Te[2])}function He(ce,Me,Se,Ae){Ce(ce),Ce(Me),Ce(Ae),Ce(Me),Ce(Se),Ce(Ae);const Te=a.length/3,qe=T.generateSideWallUV(i,a,Te-6,Te-3,Te-2,Te-1);lt(qe[0]),lt(qe[1]),lt(qe[3]),lt(qe[1]),lt(qe[2]),lt(qe[3])}function Ce(ce){a.push(f[ce*3+0]),a.push(f[ce*3+1]),a.push(f[ce*3+2])}function lt(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Bm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new tf[a.type]().fromJSON(a)),new Qs(i,e.options)}}const Fm={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],f=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new Ue(r,s),new Ue(o,f),new Ue(c,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],f=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],A=e[r*3],v=e[r*3+1],x=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new Ue(s,1-f),new Ue(c,1-h),new Ue(d,1-m),new Ue(A,1-x)]:[new Ue(o,1-f),new Ue(u,1-h),new Ue(p,1-m),new Ue(v,1-x)]}};function Bm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class $r extends fl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $r(e.radius,e.detail)}}class ra extends yn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),f=Math.floor(a),c=o+1,u=f+1,h=e/o,d=t/f,p=[],m=[],A=[],v=[];for(let x=0;x<u;x++){const T=x*d-s;for(let P=0;P<c;P++){const b=P*h-r;m.push(b,-T,0),A.push(0,0,1),v.push(P/o),v.push(1-x/f)}}for(let x=0;x<f;x++)for(let T=0;T<o;T++){const P=T+c*x,b=T+c*(x+1),S=T+1+c*(x+1),w=T+1+c*x;p.push(P,b,w),p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wn extends yn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(s+o,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],m=[],A=[],v=[];for(let x=0;x<=i;x++){const T=[],P=x/i,b=s+P*o,S=e*Math.cos(b),w=Math.sqrt(e*e-S*S);let I=0;x===0&&s===0?I=.5/t:x===i&&f===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){const R=_/t,L=a+R*r;h.x=-w*Math.cos(L),h.y=S,h.z=w*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),A.push(d.x,d.y,d.z),v.push(R+I,1-P),T.push(c++)}u.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const P=u[x][T+1],b=u[x][T],S=u[x+1][T],w=u[x+1][T+1];(x!==0||s>0)&&p.push(P,b,w),(x!==i-1||f<Math.PI)&&p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vr extends yn{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const f=[],c=[],u=[],h=[],d=new z,p=new z,m=new z;for(let A=0;A<=i;A++){const v=s+A/i*o;for(let x=0;x<=a;x++){const T=x/a*r;p.x=(e+t*Math.cos(v))*Math.cos(T),p.y=(e+t*Math.cos(v))*Math.sin(T),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),d.x=e*Math.cos(T),d.y=e*Math.sin(T),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/a),h.push(A/i)}}for(let A=1;A<=i;A++)for(let v=1;v<=a;v++){const x=(a+1)*A+v-1,T=(a+1)*(A-1)+v-1,P=(a+1)*(A-1)+v,b=(a+1)*A+v;f.push(x,T,b),f.push(T,P,b)}this.setIndex(f),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(Yu(a))a.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Yu(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=Yr(n[t]);for(const a in i)e[a]=i[a]}return e}function Yu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Gm={clone:Yr,merge:Un};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ue().fromArray(a.value);break;case"v3":this.uniforms[i].value=new z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new an().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Et().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hm extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _i extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wm extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ju(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ju(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ju(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class qm{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,f;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $m=new qm;class Ff{constructor(e){this.manager=e!==void 0?e:$m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ff.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er=new WeakMap;class Ym extends Ff{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Kl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Er.get(s);h===void 0&&(h=[],Er.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=No("img");function f(){u(),t&&t(this);const h=Er.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(h){u(),a&&a(h),Kl.remove(`image:${e}`);const d=Er.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",f,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Jm extends Ff{constructor(e){super(e)}load(e,t,i,a){const r=new _n,s=new Ym(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class Bh extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zm extends Bh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ql=new Kt,Zu=new z,Ku=new z;class Km{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lf,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ql,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,f=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===Do||e.reversedDepth?t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rs=new z,Cs=new xi,Ei=new z;class zh extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rs,Cs,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Cs,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Rs,Cs,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Cs,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const da=new z,Qu=new Ue,ju=new Ue;class ii extends zh{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(da.x,da.y).multiplyScalar(-e/da.z),da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(da.x,da.y).multiplyScalar(-e/da.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,ju),t.subVectors(ju,Qu)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/f,t-=s.offsetY*i/c,a*=s.width/f,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ul extends zh{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,f=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qm extends Km{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends Bh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Qm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ar=-90,Tr=1;class eg extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(Ar,Tr,e,t);a.layers=this.layers,this.add(a);const r=new ii(Ar,Tr,e,t);r.layers=this.layers,this.add(r);const s=new ii(Ar,Tr,e,t);s.layers=this.layers,this.add(s);const o=new ii(Ar,Tr,e,t);o.layers=this.layers,this.add(o);const f=new ii(Ar,Tr,e,t);f.layers=this.layers,this.add(f);const c=new ii(Ar,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,f]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,f,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class tg extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nu=class nu{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};nu.prototype.isMatrix2=!0;let ed=nu;function td(n,e,t,i){const a=ng(i);switch(t){case uh:return n*e;case hh:return n*e/a.components*a.byteLength;case Ef:return n*e/a.components*a.byteLength;case Ka:return n*e*2/a.components*a.byteLength;case Af:return n*e*2/a.components*a.byteLength;case dh:return n*e*3/a.components*a.byteLength;case oi:return n*e*4/a.components*a.byteLength;case Tf:return n*e*4/a.components*a.byteLength;case Bs:case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:case Tc:return Math.max(n,16)*Math.max(e,8)/4;case bc:case Ac:return Math.max(n,8)*Math.max(e,8)/2;case wc:case Rc:case Pc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cc:case qs:case Lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $c:case Yc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zc:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $s:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(n){switch(n){case On:case sh:return{byteLength:1,components:1};case Io:case lh:case Ui:return{byteLength:2,components:1};case yf:case bf:return{byteLength:2,components:4};case Ni:case Sf:case Pi:return{byteLength:4,components:1};case ch:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);function Gh(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ig(n){const e=new WeakMap;function t(o,f){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,f,c){const u=f.array,h=f.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],A=h[p];A.start<=m.start+m.count+1?m.count=Math.max(m.count,A.start+A.count-m.start):(++d,h[d]=A)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const A=h[p];n.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(n.deleteBuffer(f.buffer),e.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,f));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,f),c.version=o.version}}return{get:a,remove:r,update:s}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xg=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cg=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
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
#endif`,nx=`uniform sampler2D dfgLUT;
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
}`,ix=`
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,px=`#if defined( USE_POINTS_UV )
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
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wx=`#ifdef USE_NORMALMAP
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
#endif`,Rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`#include <common>
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
}`,u1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,M1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,S1=`#define LAMBERT
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
}`,y1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,E1=`#define NORMAL
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
}`,A1=`#define NORMAL
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
}`,T1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,R1=`#define STANDARD
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
}`,C1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,I1=`#define TOON
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
}`,L1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:ag,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:sg,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:fg,aomap_pars_fragment:ug,batching_pars_vertex:dg,batching_vertex:hg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:xg,bumpmap_pars_fragment:vg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:yg,color_fragment:bg,color_pars_fragment:Eg,color_pars_vertex:Ag,color_vertex:Tg,common:wg,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Ig,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Bg,envmap_pars_vertex:zg,envmap_physical_pars_fragment:Zg,envmap_vertex:Gg,fog_vertex:Vg,fog_pars_vertex:kg,fog_fragment:Hg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Yg,lights_pars_begin:Jg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Qg,lights_phong_fragment:jg,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:ax,lights_fragment_end:rx,lightprobes_pars_fragment:ox,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:fx,map_fragment:ux,map_pars_fragment:dx,map_particle_fragment:hx,map_particle_pars_fragment:px,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:xx,morphcolor_vertex:vx,morphnormal_vertex:Mx,morphtarget_pars_vertex:_x,morphtarget_vertex:Sx,normal_fragment_begin:yx,normal_fragment_maps:bx,normal_pars_fragment:Ex,normal_pars_vertex:Ax,normal_vertex:Tx,normalmap_pars_fragment:wx,clearcoat_normal_fragment_begin:Rx,clearcoat_normal_fragment_maps:Cx,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Ix,opaque_fragment:Lx,packing:Dx,premultiplied_alpha_fragment:Nx,project_vertex:Ux,dithering_fragment:Ox,dithering_pars_fragment:Fx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Vx,shadowmap_vertex:kx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:$x,specularmap_fragment:Yx,specularmap_pars_fragment:Jx,tonemapping_fragment:Zx,tonemapping_pars_fragment:Kx,transmission_fragment:Qx,transmission_pars_fragment:jx,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:a1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:s1,cube_vert:l1,cube_frag:c1,depth_vert:f1,depth_frag:u1,distance_vert:d1,distance_frag:h1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:x1,meshbasic_vert:v1,meshbasic_frag:M1,meshlambert_vert:_1,meshlambert_frag:S1,meshmatcap_vert:y1,meshmatcap_frag:b1,meshnormal_vert:E1,meshnormal_frag:A1,meshphong_vert:T1,meshphong_frag:w1,meshphysical_vert:R1,meshphysical_frag:C1,meshtoon_vert:P1,meshtoon_frag:I1,points_vert:L1,points_frag:D1,shadow_vert:N1,shadow_frag:U1,sprite_vert:O1,sprite_frag:F1},Je={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},wi={basic:{uniforms:Un([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Un([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Un([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Un([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Un([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new St(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Un([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Un([Je.points,Je.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Un([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Un([Je.common,Je.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Un([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Un([Je.sprite,Je.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Un([Je.common,Je.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Un([Je.lights,Je.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};wi.physical={uniforms:Un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Ps={r:0,b:0,g:0},B1=new Kt,Vh=new Et;Vh.set(-1,0,0,0,1,0,0,0,1);function z1(n,e,t,i,a,r){const s=new St(0);let o=a===!0?0:1,f,c,u=null,h=0,d=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const b=T.backgroundBlurriness>0;P=e.get(P,b)}return P}function m(T){let P=!1;const b=p(T);b===null?v(s,o):b&&b.isColor&&(v(b,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(T,P){const b=p(P);b&&(b.isCubeTexture||b.mapping===ll)?(c===void 0&&(c=new Mt(new na(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Yr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(P.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vh),c.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Wt,(u!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new Mt(new ra(2,2),new Mi({name:"BackgroundMaterial",uniforms:Yr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=b,h=b.version,d=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function v(T,P){T.getRGB(Ps,Fh(n)),t.buffers.color.setClear(Ps.r,Ps.g,Ps.b,P,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,P=1){s.set(T),o=P,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,v(s,o)},render:m,addToRenderList:A,dispose:x}}function G1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(U,k,$,H,V){let ae=!1;const X=h(U,H,$,k);r!==X&&(r=X,c(r.object)),ae=p(U,H,$,V),ae&&m(U,H,$,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,b(U,k,$,H),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,k,$,H){const V=H.wireframe===!0;let ae=i[k.id];ae===void 0&&(ae={},i[k.id]=ae);const X=U.isInstancedMesh===!0?U.id:0;let xe=ae[X];xe===void 0&&(xe={},ae[X]=xe);let se=xe[$.id];se===void 0&&(se={},xe[$.id]=se);let le=se[V];return le===void 0&&(le=d(f()),se[V]=le),le}function d(U){const k=[],$=[],H=[];for(let V=0;V<t;V++)k[V]=0,$[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,k,$,H){const V=r.attributes,ae=k.attributes;let X=0;const xe=$.getAttributes();for(const se in xe)if(xe[se].location>=0){const fe=V[se];let Qe=ae[se];if(Qe===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Qe=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Qe=U.instanceColor)),fe===void 0||fe.attribute!==Qe||Qe&&fe.data!==Qe.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function m(U,k,$,H){const V={},ae=k.attributes;let X=0;const xe=$.getAttributes();for(const se in xe)if(xe[se].location>=0){let fe=ae[se];fe===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(fe=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(fe=U.instanceColor));const Qe={};Qe.attribute=fe,fe&&fe.data&&(Qe.data=fe.data),V[se]=Qe,X++}r.attributes=V,r.attributesNum=X,r.index=H}function A(){const U=r.newAttributes;for(let k=0,$=U.length;k<$;k++)U[k]=0}function v(U){x(U,0)}function x(U,k){const $=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;$[U]=1,H[U]===0&&(n.enableVertexAttribArray(U),H[U]=1),V[U]!==k&&(n.vertexAttribDivisor(U,k),V[U]=k)}function T(){const U=r.newAttributes,k=r.enabledAttributes;for(let $=0,H=k.length;$<H;$++)k[$]!==U[$]&&(n.disableVertexAttribArray($),k[$]=0)}function P(U,k,$,H,V,ae,X){X===!0?n.vertexAttribIPointer(U,k,$,V,ae):n.vertexAttribPointer(U,k,$,H,V,ae)}function b(U,k,$,H){A();const V=H.attributes,ae=$.getAttributes(),X=k.defaultAttributeValues;for(const xe in ae){const se=ae[xe];if(se.location>=0){let le=V[xe];if(le===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){const fe=le.normalized,Qe=le.itemSize,We=e.get(le);if(We===void 0)continue;const gt=We.buffer,ht=We.type,bt=We.bytesPerElement,re=ht===n.INT||ht===n.UNSIGNED_INT||le.gpuType===Sf;if(le.isInterleavedBufferAttribute){const pe=le.data,Re=pe.stride,at=le.offset;if(pe.isInstancedInterleavedBuffer){for(let He=0;He<se.locationSize;He++)x(se.location+He,pe.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let He=0;He<se.locationSize;He++)v(se.location+He);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let He=0;He<se.locationSize;He++)P(se.location+He,Qe/se.locationSize,ht,fe,Re*bt,(at+Qe/se.locationSize*He)*bt,re)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<se.locationSize;pe++)x(se.location+pe,le.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<se.locationSize;pe++)v(se.location+pe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let pe=0;pe<se.locationSize;pe++)P(se.location+pe,Qe/se.locationSize,ht,fe,Qe*bt,Qe/se.locationSize*pe*bt,re)}}else if(X!==void 0){const fe=X[xe];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(se.location,fe);break;case 3:n.vertexAttrib3fv(se.location,fe);break;case 4:n.vertexAttrib4fv(se.location,fe);break;default:n.vertexAttrib1fv(se.location,fe)}}}}T()}function S(){R();for(const U in i){const k=i[U];for(const $ in k){const H=k[$];for(const V in H){const ae=H[V];for(const X in ae)u(ae[X].object),delete ae[X];delete H[V]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const k=i[U.id];for(const $ in k){const H=k[$];for(const V in H){const ae=H[V];for(const X in ae)u(ae[X].object),delete ae[X];delete H[V]}}delete i[U.id]}function I(U){for(const k in i){const $=i[k];for(const H in $){const V=$[H];if(V[U.id]===void 0)continue;const ae=V[U.id];for(const X in ae)u(ae[X].object),delete ae[X];delete V[U.id]}}}function _(U){for(const k in i){const $=i[k],H=U.isInstancedMesh===!0?U.id:0,V=$[H];if(V!==void 0){for(const ae in V){const X=V[ae];for(const xe in X)u(X[xe].object),delete X[xe];delete V[ae]}delete $[H],Object.keys($).length===0&&delete i[k]}}}function R(){L(),s=!0,r!==a&&(r=a,c(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:v,disableUnusedAttributes:T}}function V1(n,e,t){let i;function a(f){i=f}function r(f,c){n.drawArrays(i,f,c),t.update(c,i,1)}function s(f,c,u){u!==0&&(n.drawArraysInstanced(i,f,c,u),t.update(c,i,u))}function o(f,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function k1(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==oi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const _=I===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==On&&I!==Pi&&!_&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=f(c);u!==c&&(xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:A,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:b,maxSamples:S,samples:w}}function H1(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new _a,o=new Et,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,A=h.clipIntersection,v=h.clipShadows,x=n.get(h);if(!a||m===null||m.length===0||r&&!v)r?u(null):c();else{const T=r?0:i,P=T*4;let b=x.clippingState||null;f.value=b,b=u(m,d,P,p);for(let S=0;S!==P;++S)b[S]=t[S];x.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=T}};function c(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const A=h!==null?h.length:0;let v=null;if(A!==0){if(v=f.value,m!==!0||v===null){const x=p+A*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(v===null||v.length<x)&&(v=new Float32Array(x));for(let P=0,b=p;P!==A;++P,b+=4)s.copy(h[P]).applyMatrix4(T,o),s.normal.toArray(v,b),v[b+3]=s.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}const Fr=4,W1=6,X1=20,q1=256,ho=new ul,nd=new St;let jl=null,ec=0,tc=0,nc=!1;const $1=new z,za=new z;class id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=$1}=r;jl=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Za||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ui,format:oi,colorSpace:Ys,depthBuffer:!1},a=ad(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y1(r)),this._blurMaterial=Z1(r,e,t),this._ggxMaterial=J1(r,e,t)}return a}_compileMaterial(e){const t=new Mt(new yn,e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,i,a,r){const f=new ii(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(nd),h.toneMapping=Li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new na,new aa({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,v=A.material;let x=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,x=!0):(v.color.copy(nd),x=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[P],r.y,r.z)):b===1?(f.up.set(0,0,c[P]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[P],r.z)):(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[P]));const S=this._cubeSize;wr(a,b*S,P>2?S:0,S,S),h.setRenderTarget(a),x&&h.render(A,f),h.render(e,f)}h.toneMapping=p,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Za||e.mapping===Wr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const f=this._cubeSize;wr(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const f=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,A=this._sizeLods[i],v=3*A*(i>m-Fr?i-m+Fr:0),x=4*(this._cubeSize-A);f.envMap.value=e.texture,f.roughness.value=p,f.mipInt.value=m-t,wr(r,v,x,3*A,2*A),a.setRenderTarget(r),a.render(o,ho),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-i,wr(e,v,x,3*A,2*A),a.setRenderTarget(e),a.render(o,ho)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,f=this._lodMeshes[a];f.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-Fr?a-this._lodMax+Fr:0),d=4*(this._cubeSize-u);wr(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(f,ho)}}function Y1(n){const e=[],t=[];let i=n;const a=n-Fr+1+W1;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),f=-o,c=1+o,u=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),A=new Float32Array(p*d*h);for(let x=0;x<h;x++){const T=x%3*2/3-1,P=x>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];m.set(b,p*d*x);for(let S=0;S<d;S++){const w=u[S*2]*2-1,I=u[S*2+1]*2-1;x===0?za.set(1,I,w):x===1?za.set(-w,1,-I):x===2?za.set(-w,I,1):x===3?za.set(-1,I,-w):x===4?za.set(-w,-1,I):za.set(w,I,-1),za.toArray(A,(x*d+S)*p)}}const v=new yn;v.setAttribute("position",new vi(m,p)),v.setAttribute("outputDirection",new vi(A,p)),t.push(new Mt(v,null)),i>Fr&&i--}return{lodMeshes:t,sizeLods:e}}function ad(n,e,t){const i=new si(n,e,t);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function J1(n,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Z1(n,e,t){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rd(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function od(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kh extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new wh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new na(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:ji});r.uniforms.tEquirect.value=t;const s=new Mt(a,r),o=t.minFilter;return t.minFilter===Wa&&(t.minFilter=Mn),new eg(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function K1(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===bl||p===El)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const A=new kh(m.height);return A.fromEquirectangularTexture(n,d),e.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===bl||p===El,A=p===Za||p===Wr;if(m||A){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new id(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const T=d.image;return m&&T&&T.height>0||A&&T&&f(T)?(i===null&&(i=new id(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,p){return p===bl?d.mapping=Za:p===El&&(d.mapping=Wr),d}function f(d){let p=0;const m=6;for(let A=0;A<m;A++)d[A]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function Q1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&zr("WebGLRenderer: "+i+" extension not supported."),a}}}function j1(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function f(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let A=0;if(m===void 0)return;if(p!==null){const T=p.array;A=p.version;for(let P=0,b=T.length;P<b;P+=3){const S=T[P+0],w=T[P+1],I=T[P+2];d.push(S,w,w,I,I,S)}}else{const T=m.array;A=m.version;for(let P=0,b=T.length/3-1;P<b;P+=3){const S=P+0,w=P+1,I=P+2;d.push(S,w,w,I,I,S)}}const v=new(m.count>=65535?Sh:_h)(d,1);v.version=A;const x=r.get(h);x&&e.remove(x),r.set(h,v)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:f,getWireframeAttribute:u}}function ev(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function f(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let A=0;for(let v=0;v<p;v++)A+=d[v];t.update(A,i,1)}this.setMode=a,this.setIndex=o,this.render=f,this.renderInstances=c,this.renderMultiDraw=u}function tv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function nv(n,e,t){const i=new WeakMap,a=new an;function r(s,o,f){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),A===!0&&(b=2),v===!0&&(b=3);let S=o.attributes.position.count*b,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*w*4*h),_=new gh(I,S,w,h);_.type=Pi,_.needsUpdate=!0;const R=b*4;for(let U=0;U<h;U++){const k=x[U],$=T[U],H=P[U],V=S*w*4*U;for(let ae=0;ae<k.count;ae++){const X=ae*R;m===!0&&(a.fromBufferAttribute(k,ae),I[V+X+0]=a.x,I[V+X+1]=a.y,I[V+X+2]=a.z,I[V+X+3]=0),A===!0&&(a.fromBufferAttribute($,ae),I[V+X+4]=a.x,I[V+X+5]=a.y,I[V+X+6]=a.z,I[V+X+7]=0),v===!0&&(a.fromBufferAttribute(H,ae),I[V+X+8]=a.x,I[V+X+9]=a.y,I[V+X+10]=a.z,I[V+X+11]=H.itemSize===4?a.w:1)}}d={count:h,texture:_,size:new Ue(S,w)},i.set(o,d),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const A=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",c)}f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function iv(n,e,t,i,a){let r=new WeakMap;function s(c){const u=a.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",f)===!1&&c.addEventListener("dispose",f),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function f(c){const u=c.target;u.removeEventListener("dispose",f),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const av={[jd]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function rv(n,e,t,i,a,r){const s=new si(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,f=null;const c=new yn;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));const u=new Hm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Mt(c,u),d=new ul(-1,1,1,-1,0,1);let p=null,m=null,A=!1,v,x=null,T=[],P=!1;this.setSize=function(b,S){s.setSize(b,S),o!==null&&o.setSize(b,S),f!==null&&f.setSize(b,S);for(let w=0;w<T.length;w++){const I=T[w];I.setSize&&I.setSize(b,S)}},this.setEffects=function(b){T=b,P=T.length>0&&T[0].isRenderPass===!0;const S=s.width,w=s.height;T.length>0&&o===null&&(o=new si(S,w,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),f=new si(S,w,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<T.length;I++){const _=T[I];_.setSize&&_.setSize(S,w)}},this.begin=function(b,S){if(A||b.toneMapping===Li&&T.length===0)return!1;if(x=S,S!==null){const w=S.width,I=S.height;(s.width!==w||s.height!==I)&&this.setSize(w,I)}return P===!1&&b.setRenderTarget(s),v=b.toneMapping,b.toneMapping=Li,!0},this.hasRenderPass=function(){return P},this.end=function(b,S){b.toneMapping=v,A=!0;let w=s,I=o;for(let _=0;_<T.length;_++){const R=T[_];R.enabled!==!1&&(R.render(b,I,w,S),R.needsSwap!==!1&&(w=I,I=I===o?f:o))}if(p!==b.outputColorSpace||m!==b.toneMapping){p=b.outputColorSpace,m=b.toneMapping,u.defines={},Nt.getTransfer(p)===Wt&&(u.defines.SRGB_TRANSFER="");const _=av[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(x),b.render(h,d),x=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),f!==null&&f.dispose(),c.dispose(),u.dispose()}}const Hh=new _n,rf=new Xr(1,1),Wh=new gh,Xh=new V0,qh=new wh,sd=[],ld=[],cd=new Float32Array(16),fd=new Float32Array(9),ud=new Float32Array(4);function Zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=sd[a];if(r===void 0&&(r=new Float32Array(a),sd[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function fv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),mn(t,i)}}function uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),mn(t,i)}}function dv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),mn(t,i)}}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function Sv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?Rf:wf,r=rf):r=Hh,t.setTexture2D(e||r,a)}function yv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Xh,a)}function bv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||qh,a)}function Ev(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Wh,a)}function Av(n){switch(n){case 5126:return ov;case 35664:return sv;case 35665:return lv;case 35666:return cv;case 35674:return fv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return hv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return xv;case 36294:return vv;case 36295:return Mv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Tv(n,e){n.uniform1fv(this.addr,e)}function wv(n,e){const t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rv(n,e){const t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function Cv(n,e){const t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function Pv(n,e){const t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iv(n,e){const t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lv(n,e){const t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dv(n,e){n.uniform1iv(this.addr,e)}function Nv(n,e){n.uniform2iv(this.addr,e)}function Uv(n,e){n.uniform3iv(this.addr,e)}function Ov(n,e){n.uniform4iv(this.addr,e)}function Fv(n,e){n.uniform1uiv(this.addr,e)}function Bv(n,e){n.uniform2uiv(this.addr,e)}function zv(n,e){n.uniform3uiv(this.addr,e)}function Gv(n,e){n.uniform4uiv(this.addr,e)}function Vv(n,e,t){const i=this.cache,a=e.length,r=hl(t,a);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=rf:s=Hh;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function kv(n,e,t){const i=this.cache,a=e.length,r=hl(t,a);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Xh,r[s])}function Hv(n,e,t){const i=this.cache,a=e.length,r=hl(t,a);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||qh,r[s])}function Wv(n,e,t){const i=this.cache,a=e.length,r=hl(t,a);pn(i,r)||(n.uniform1iv(this.addr,r),mn(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Wh,r[s])}function Xv(n){switch(n){case 5126:return Tv;case 35664:return wv;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return zv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Wv}}class qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}}class $v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}}class Yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function Jv(n,e,t){const i=n.name,a=i.length;for(ic.lastIndex=0;;){const r=ic.exec(i),s=ic.lastIndex;let o=r[1];const f=r[2]==="]",c=r[3];if(f&&(o=o|0),c===void 0||c==="["&&s+2===a){dd(t,c===void 0?new qv(o,n,e):new $v(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Yv(o),dd(t,h)),t=h}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);Jv(o,f,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zv=37297;let Kv=0;function Qv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const pd=new Et;function jv(n){Nt._getMatrix(pd,Nt.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(n)){case Js:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Qv(n.getShaderSource(e),o)}else return r}function eM(n,e){const t=jv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tM={[jd]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[nh]:"ACESFilmic",[ah]:"AgX",[rh]:"Neutral",[ih]:"Custom"};function nM(n,e){const t=tM[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new z;function iM(){Nt.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function rM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function yo(n){return n!==""}function gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(n){return n.replace(sM,cM)}const lM=new Map;function cM(n,e){let t=wt[e];if(t===void 0){const i=lM.get(e);if(i!==void 0)t=wt[i],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return of(t)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(fM,uM)}function uM(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Md(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const dM={[bo]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function hM(n){return dM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pM={[Za]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function mM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const gM={[Wr]:"ENVMAP_MODE_REFRACTION"};function xM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vM={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[i0]:"ENVMAP_BLENDING_MIX",[a0]:"ENVMAP_BLENDING_ADD"};function MM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vM[n.combine]||"ENVMAP_BLENDING_NONE"}function _M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SM(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=hM(t),c=mM(t),u=xM(t),h=MM(t),d=_M(t),p=aM(t),m=rM(r),A=a.createProgram();let v,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yo).join(`
`),x.length>0&&(x+=`
`)):(v=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),x=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?wt.tonemapping_pars_fragment:"",t.toneMapping!==Li?nM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),iM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),s=of(s),s=gd(s,t),s=xd(s,t),o=of(o),o=gd(o,t),o=xd(o,t),s=vd(s),o=vd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=T+v+s,b=T+x+o,S=hd(a,a.VERTEX_SHADER,P),w=hd(a,a.FRAGMENT_SHADER,b);a.attachShader(A,S),a.attachShader(A,w),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function I(U){if(n.debug.checkShaderErrors){const k=a.getProgramInfoLog(A)||"",$=a.getShaderInfoLog(S)||"",H=a.getShaderInfoLog(w)||"",V=k.trim(),ae=$.trim(),X=H.trim();let xe=!0,se=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(xe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,A,S,w);else{const le=md(a,S,"vertex"),fe=md(a,w,"fragment");Ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+le+`
`+fe)}else V!==""?xt("WebGLProgram: Program Info Log:",V):(ae===""||X==="")&&(se=!1);se&&(U.diagnostics={runnable:xe,programLog:V,vertexShader:{log:ae,prefix:v},fragmentShader:{log:X,prefix:x}})}a.deleteShader(S),a.deleteShader(w),_=new ks(a,A),R=oM(a,A)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(A,Zv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=S,this.fragmentShader=w,this}let yM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EM(e),t.set(e,i)),i}}class EM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function AM(n){return n===Ka||n===qs||n===$s}function TM(n,e,t,i,a,r){const s=new xh,o=new bM,f=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return f.add(_),_===0?"uv":`uv${_}`}function A(_,R,L,U,k,$){const H=U.fog,V=k.geometry,ae=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,xe=e.get(_.envMap||ae,X),se=xe&&xe.mapping===ll?xe.image.height:null,le=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&xt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=fe!==void 0?fe.length:0;let We=0;V.morphAttributes.position!==void 0&&(We=1),V.morphAttributes.normal!==void 0&&(We=2),V.morphAttributes.color!==void 0&&(We=3);let gt,ht,bt,re;if(le){const Pt=wi[le];gt=Pt.vertexShader,ht=Pt.fragmentShader}else{gt=_.vertexShader,ht=_.fragmentShader;const Pt=o.getVertexShaderStage(_),It=o.getFragmentShaderStage(_);o.update(_,Pt,It),bt=Pt.id,re=It.id}const pe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),at=k.isInstancedMesh===!0,He=k.isBatchedMesh===!0,Ce=!!_.map,lt=!!_.matcap,ce=!!xe,Me=!!_.aoMap,Se=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,Te=!!_.normalMap,qe=!!_.displacementMap,y=!!_.emissiveMap,ye=!!_.metalnessMap,Ne=!!_.roughnessMap,F=_.anisotropy>0,ct=_.clearcoat>0,Fe=_.dispersion>0,D=_.retroreflectivity>0,E=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,oe=F&&!!_.anisotropyMap,ve=ct&&!!_.clearcoatMap,we=ct&&!!_.clearcoatNormalMap,te=ct&&!!_.clearcoatRoughnessMap,ue=E&&!!_.iridescenceMap,Be=E&&!!_.iridescenceThicknessMap,nt=Y&&!!_.sheenColorMap,Ie=Y&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Ve=!!_.specularColorMap,ft=!!_.specularIntensityMap,dt=Z&&!!_.transmissionMap,G=Z&&!!_.thicknessMap,ze=!!_.gradientMap,de=!!_.alphaMap,Ge=_.alphaTest>0,l=!!_.alphaHash,ge=!!_.extensions;let Le=Li;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Le=n.toneMapping);const rt={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:gt,fragmentShader:ht,defines:_.defines,customVertexShaderID:bt,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:He,batchingColor:He&&k._colorsTexture!==null,instancing:at,instancingColor:at&&k.instanceColor!==null,instancingMorph:at&&k.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:lt,envMap:ce,envMapMode:ce&&xe.mapping,envMapCubeUVHeight:se,aoMap:Me,lightMap:Se,bumpMap:Ae,normalMap:Te,displacementMap:qe,emissiveMap:y,normalMapObjectSpace:Te&&_.normalMapType===s0,normalMapTangentSpace:Te&&_.normalMapType===jc,packedNormalMap:Te&&_.normalMapType===jc&&AM(_.normalMap.format),metalnessMap:ye,roughnessMap:Ne,anisotropy:F,anisotropyMap:oe,clearcoat:ct,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:te,dispersion:Fe,retroreflection:D,iridescence:E,iridescenceMap:ue,iridescenceThicknessMap:Be,sheen:Y,sheenColorMap:nt,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:Ve,specularIntensityMap:ft,transmission:Z,transmissionMap:dt,thicknessMap:G,gradientMap:ze,opaque:_.transparent===!1&&_.blending===Eo&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:Ge,alphaHash:l,combine:_.combine,mapUv:Ce&&m(_.map.channel),aoMapUv:Me&&m(_.aoMap.channel),lightMapUv:Se&&m(_.lightMap.channel),bumpMapUv:Ae&&m(_.bumpMap.channel),normalMapUv:Te&&m(_.normalMap.channel),displacementMapUv:qe&&m(_.displacementMap.channel),emissiveMapUv:y&&m(_.emissiveMap.channel),metalnessMapUv:ye&&m(_.metalnessMap.channel),roughnessMapUv:Ne&&m(_.roughnessMap.channel),anisotropyMapUv:oe&&m(_.anisotropyMap.channel),clearcoatMapUv:ve&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(_.sheenRoughnessMap.channel),specularMapUv:Pe&&m(_.specularMap.channel),specularColorMapUv:Ve&&m(_.specularColorMap.channel),specularIntensityMapUv:ft&&m(_.specularIntensityMap.channel),transmissionMapUv:dt&&m(_.transmissionMap.channel),thicknessMapUv:G&&m(_.thicknessMap.channel),alphaMapUv:de&&m(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Te||F),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Ce||de),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:We,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&Nt.getTransfer(_.map.colorSpace)===Wt,decodeVideoTextureEmissive:y&&_.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(_.emissiveMap.colorSpace)===Wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ai,flipSided:_.side===Bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=f.has(1),rt.vertexUv2s=f.has(2),rt.vertexUv3s=f.has(3),f.clear(),rt}function v(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)R.push(L),R.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(R,_),T(R,_),R.push(n.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function x(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function T(_,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.retroreflection&&s.enable(24),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function P(_){const R=p[_.type];let L;if(R){const U=wi[R];L=Gm.clone(U.uniforms)}else L=_.uniforms;return L}function b(_,R){let L=u.get(R);return L!==void 0?++L.usedTimes:(L=new SM(n,R,_,a),c.push(L),u.set(R,L)),L}function S(_){if(--_.usedTimes===0){const R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function I(){o.dispose()}return{getParameters:A,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:I}}function wM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,f){n.get(s)[o]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function RM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sd(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,A,v,x){let T=n[e];return T===void 0?(T={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:A,renderOrder:d.renderOrder,z:v,group:x},n[e]=T):(T.id=d.id,T.object=d,T.geometry=p,T.material=m,T.materialVariant=s(d),T.groupOrder=A,T.renderOrder=d.renderOrder,T.z=v,T.group=x),e++,T}function f(d,p,m,A,v,x,T){T.reversedDepth===!0&&(v=-v);const P=o(d,p,m,A,v,x);m.transmission>0?i.push(P):m.transparent===!0?a.push(P):t.push(P)}function c(d,p,m,A,v,x){const T=o(d,p,m,A,v,x);m.transmission>0?i.unshift(T):m.transparent===!0?a.unshift(T):t.unshift(T)}function u(d,p){t.length>1&&t.sort(d||RM),i.length>1&&i.sort(p||_d),a.length>1&&a.sort(p||_d)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:c,finish:h,sort:u}}function CM(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Sd,n.set(i,[s])):a>=r.length?(s=new Sd,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function PM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new St};break;case"SpotLight":t={position:new z,direction:new z,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function IM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LM=0;function DM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NM(n){const e=new PM,t=IM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,r=new Kt,s=new Kt;function o(c){let u=0,h=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,m=0,A=0,v=0,x=0,T=0,P=0,b=0,S=0,w=0,I=0,_=0,R=0,L=0;c.sort(DM);for(let k=0,$=c.length;k<$;k++){const H=c[k],V=H.color,ae=H.intensity,X=H.distance;let xe=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ka?xe=H.shadow.map.texture:xe=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=V.r*ae,h+=V.g*ae,d+=V.b*ae;else if(H.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(H.sh.coefficients[se],ae);L++}else if(H.isSunLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,fe=t.get(H);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[m]=fe,i.sunShadowMap[m]=xe;const Qe=le.getViewportCount();for(let We=0;We<Qe;We++)i.sunShadowMatrix[A+We]=le.getMatrix(We),i.sunShadowCascade[A+We]=le._cascadeData[We];A+=Qe,m++}i.sun[p]=se,p++}else if(H.isDirectionalLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,fe=t.get(H);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.directionalShadow[v]=fe,i.directionalShadowMap[v]=xe,i.directionalShadowMatrix[v]=H.shadow.matrix,S++}i.directional[v]=se,v++}else if(H.isSpotLight){const se=e.get(H);se.position.setFromMatrixPosition(H.matrixWorld),se.color.copy(V).multiplyScalar(ae),se.distance=X,se.coneCos=Math.cos(H.angle),se.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),se.decay=H.decay,i.spot[T]=se;const le=H.shadow;if(H.map&&(i.spotLightMap[_]=H.map,_++,le.updateMatrices(H),H.castShadow&&R++),i.spotLightMatrix[T]=le.matrix,H.castShadow){const fe=t.get(H);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.spotShadow[T]=fe,i.spotShadowMap[T]=xe,I++}T++}else if(H.isRectAreaLight){const se=e.get(H);se.color.copy(V).multiplyScalar(ae),se.halfWidth.set(H.width*.5,0,0),se.halfHeight.set(0,H.height*.5,0),i.rectArea[P]=se,P++}else if(H.isPointLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),se.distance=H.distance,se.decay=H.decay,H.castShadow){const le=H.shadow,fe=t.get(H);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,fe.shadowCameraNear=le.camera.near,fe.shadowCameraFar=le.camera.far,i.pointShadow[x]=fe,i.pointShadowMap[x]=xe,i.pointShadowMatrix[x]=H.shadow.matrix,w++}i.point[x]=se,x++}else if(H.isHemisphereLight){const se=e.get(H);se.skyColor.copy(H.color).multiplyScalar(ae),se.groundColor.copy(H.groundColor).multiplyScalar(ae),i.hemi[b]=se,b++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==v||U.pointLength!==x||U.spotLength!==T||U.rectAreaLength!==P||U.hemiLength!==b||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==w||U.numSpotShadows!==I||U.numSpotMaps!==_||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=T,i.rectArea.length=P,i.point.length=x,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=A,i.sunShadowCascade.length=A,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,U.sunLength=p,U.directionalLength=v,U.pointLength=x,U.spotLength=T,U.rectAreaLength=P,U.hemiLength=b,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=w,U.numSpotShadows=I,U.numSpotMaps=_,U.numLightProbes=L,i.version=LM++)}function f(c,u){let h=0,d=0,p=0,m=0,A=0,v=0;const x=u.matrixWorldInverse;for(let T=0,P=c.length;T<P;T++){const b=c[T];if(b.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),h++}else if(b.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),d++}else if(b.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),m++}else if(b.isRectAreaLight){const S=i.rectArea[A];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),s.identity(),r.copy(b.matrixWorld),r.premultiply(x),s.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),A++}else if(b.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),p++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),v++}}}return{setup:o,setupView:f,state:i}}function yd(n){const e=new NM(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function f(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:f}}function UM(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new yd(n),e.set(a,[o])):r>=s.length?(o=new yd(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`,BM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],zM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],bd=new Kt,po=new z,ac=new z;function GM(n,e,t){let i=new Lf;const a=new Ue,r=new Ue,s=new an,o=new Wm,f=new Xm,c={},u=t.maxTextureSize,h={[Ja]:Bn,[Bn]:Ja,[ai]:ai},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new yn;m.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let x=this.type;this.render=function(w,I,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;this.type===Bp&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);const R=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ji),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const $=x!==this.type;$&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=w.length;H<V;H++){const ae=w[H],X=ae.shadow;if(X===void 0){xt("WebGLShadowMap:",ae,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const xe=X.getFrameExtents();a.multiply(xe),r.copy(X.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/xe.x),a.x=r.x*xe.x,X.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/xe.y),a.y=r.y*xe.y,X.mapSize.y=r.y));const se=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=se,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===_o){if(ae.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new si(a.x,a.y,{format:Ka,type:Ui,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),X.map.texture.name=ae.name+".shadowMap",X.map.depthTexture=new Xr(a.x,a.y,Pi),X.map.depthTexture.name=ae.name+".shadowMapDepth",X.map.depthTexture.format=ta,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn}else ae.isPointLight?(X.map=new kh(a.x),X.map.depthTexture=new rm(a.x,Ni)):(X.map=new si(a.x,a.y),X.map.depthTexture=new Xr(a.x,a.y,Ni)),X.map.depthTexture.name=ae.name+".shadowMap",X.map.depthTexture.format=ta,this.type===bo?(X.map.depthTexture.compareFunction=se?Rf:wf,X.map.depthTexture.minFilter=Mn,X.map.depthTexture.magFilter=Mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);const le=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();ae.isPointLight!==!0&&X.updateMatrices(ae,_);for(let fe=0;fe<le;fe++){const Qe=X.getCamera(fe);if(ae.isPointLight){const We=X.camera,gt=X.matrix,ht=ae.distance||We.far;ht!==We.far&&(We.far=ht,We.updateProjectionMatrix()),po.setFromMatrixPosition(ae.matrixWorld),We.position.copy(po),ac.copy(We.position),ac.add(BM[fe]),We.up.copy(zM[fe]),We.lookAt(ac),We.updateMatrixWorld(),gt.makeTranslation(-po.x,-po.y,-po.z),bd.multiplyMatrices(We.projectionMatrix,We.matrixWorldInverse),X._frustum.setFromProjectionMatrix(bd,We.coordinateSystem,We.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(X.map),n.clear());const We=X.getViewport(fe);s.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),k.viewport(s)}i=X.getFrustum(fe),b(I,_,Qe,ae,this.type)}X.isPointLightShadow!==!0&&this.type===_o&&T(X,_),X.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(R,L,U)};function T(w,I){const _=e.update(A);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new si(a.x,a.y,{format:Ka,type:Ui}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,_,d,A,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,_,p,A,null)}function P(w,I,_,R){let L=null;const U=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?f:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=L.uuid,$=I.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let V=H[$];V===void 0&&(V=L.clone(),H[$]=V,I.addEventListener("dispose",S)),L=V}if(L.visible=I.visible,L.wireframe=I.wireframe,R===_o?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const k=n.properties.get(L);k.light=_}return L}function b(w,I,_,R,L){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===_o)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const $=e.update(w),H=w.material;if(Array.isArray(H)){const V=$.groups;for(let ae=0,X=V.length;ae<X;ae++){const xe=V[ae],se=H[xe.materialIndex];if(se&&se.visible){const le=P(w,se,R,L);w.onBeforeShadow(n,w,I,_,$,le,xe),n.renderBufferDirect(_,null,$,le,w,xe),w.onAfterShadow(n,w,I,_,$,le,xe)}}}else if(H.visible){const V=P(w,H,R,L);w.onBeforeShadow(n,w,I,_,$,V,null),n.renderBufferDirect(_,null,$,V,w,null),w.onAfterShadow(n,w,I,_,$,V,null)}}const k=w.children;for(let $=0,H=k.length;$<H;$++)b(k[$],I,_,R,L)}function S(w){w.target.removeEventListener("dispose",S);for(const _ in c){const R=c[_],L=w.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function VM(n,e){function t(){let G=!1;const ze=new an;let de=null;const Ge=new an(0,0,0,0);return{setMask:function(l){de!==l&&!G&&(n.colorMask(l,l,l,l),de=l)},setLocked:function(l){G=l},setClear:function(l,ge,Le,rt,Pt){Pt===!0&&(l*=rt,ge*=rt,Le*=rt),ze.set(l,ge,Le,rt),Ge.equals(ze)===!1&&(n.clearColor(l,ge,Le,rt),Ge.copy(ze))},reset:function(){G=!1,de=null,Ge.set(-1,0,0,0)}}}function i(){let G=!1,ze=!1,de=null,Ge=null,l=null;return{setReversed:function(ge){if(ze!==ge){const Le=e.get("EXT_clip_control");ge?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ze=ge;const rt=l;l=null,this.setClear(rt)}},getReversed:function(){return ze},setTest:function(ge){ge?pe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ge){de!==ge&&!G&&(n.depthMask(ge),de=ge)},setFunc:function(ge){if(ze&&(ge=v0[ge]),Ge!==ge){switch(ge){case mc:n.depthFunc(n.NEVER);break;case gc:n.depthFunc(n.ALWAYS);break;case xc:n.depthFunc(n.LESS);break;case Po:n.depthFunc(n.LEQUAL);break;case vc:n.depthFunc(n.EQUAL);break;case Mc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case Sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=ge}},setLocked:function(ge){G=ge},setClear:function(ge){l!==ge&&(l=ge,ze&&(ge=1-ge),n.clearDepth(ge))},reset:function(){G=!1,de=null,Ge=null,l=null,ze=!1}}}function a(){let G=!1,ze=null,de=null,Ge=null,l=null,ge=null,Le=null,rt=null,Pt=null;return{setTest:function(It){G||(It?pe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(It){ze!==It&&!G&&(n.stencilMask(It),ze=It)},setFunc:function(It,on,ti){(de!==It||Ge!==on||l!==ti)&&(n.stencilFunc(It,on,ti),de=It,Ge=on,l=ti)},setOp:function(It,on,ti){(ge!==It||Le!==on||rt!==ti)&&(n.stencilOp(It,on,ti),ge=It,Le=on,rt=ti)},setLocked:function(It){G=It},setClear:function(It){Pt!==It&&(n.clearStencil(It),Pt=It)},reset:function(){G=!1,ze=null,de=null,Ge=null,l=null,ge=null,Le=null,rt=null,Pt=null}}}const r=new t,s=new i,o=new a,f=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],A=null,v=!1,x=null,T=null,P=null,b=null,S=null,w=null,I=null,_=new St(0,0,0),R=0,L=!1,U=null,k=null,$=null,H=null,V=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,xe=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(se)[1]),X=xe>=1):se.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),X=xe>=2);let le=null,fe={};const Qe=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),gt=new an().fromArray(Qe),ht=new an().fromArray(We);function bt(G,ze,de,Ge){const l=new Uint8Array(4),ge=n.createTexture();n.bindTexture(G,ge),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<de;Le++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ze,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,l):n.texImage2D(ze+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,l);return ge}const re={};re[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(n.DEPTH_TEST),s.setFunc(Po),Ae(!1),Te(gu),pe(n.CULL_FACE),Me(ji);function pe(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Re(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function at(G,ze){return d[G]!==ze?(n.bindFramebuffer(G,ze),d[G]=ze,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ze),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ze),!0):!1}function He(G,ze){let de=m,Ge=!1;if(G){de=p.get(ze),de===void 0&&(de=[],p.set(ze,de));const l=G.textures;if(de.length!==l.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Le=l.length;ge<Le;ge++)de[ge]=n.COLOR_ATTACHMENT0+ge;de.length=l.length,Ge=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(de)}function Ce(G){return A!==G?(n.useProgram(G),A=G,!0):!1}const lt={[Nr]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[Vp]:n.FUNC_REVERSE_SUBTRACT};lt[kp]=n.MIN,lt[Hp]=n.MAX;const ce={[Wp]:n.ZERO,[Xp]:n.ONE,[qp]:n.SRC_COLOR,[Zd]:n.SRC_ALPHA,[Qp]:n.SRC_ALPHA_SATURATE,[Zp]:n.DST_COLOR,[Yp]:n.DST_ALPHA,[$p]:n.ONE_MINUS_SRC_COLOR,[Kd]:n.ONE_MINUS_SRC_ALPHA,[Kp]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[jp]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[t0]:n.CONSTANT_ALPHA,[n0]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(G,ze,de,Ge,l,ge,Le,rt,Pt,It){if(G===ji){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),G!==zp){if(G!==x||It!==L){if((T!==Nr||S!==Nr)&&(n.blendEquation(n.FUNC_ADD),T=Nr,S=Nr),It)switch(G){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xu:n.blendFunc(n.ONE,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ut("WebGLState: Invalid blending: ",G);break}else switch(G){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vu:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mu:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",G);break}P=null,b=null,w=null,I=null,_.set(0,0,0),R=0,x=G,L=It}return}l=l||ze,ge=ge||de,Le=Le||Ge,(ze!==T||l!==S)&&(n.blendEquationSeparate(lt[ze],lt[l]),T=ze,S=l),(de!==P||Ge!==b||ge!==w||Le!==I)&&(n.blendFuncSeparate(ce[de],ce[Ge],ce[ge],ce[Le]),P=de,b=Ge,w=ge,I=Le),(rt.equals(_)===!1||Pt!==R)&&(n.blendColor(rt.r,rt.g,rt.b,Pt),_.copy(rt),R=Pt),x=G,L=!1}function Se(G,ze){G.side===ai?Re(n.CULL_FACE):pe(n.CULL_FACE);let de=G.side===Bn;ze&&(de=!de),Ae(de),G.blending===Eo&&G.transparent===!1?Me(ji):Me(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const Ge=G.stencilWrite;o.setTest(Ge),Ge&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),y(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(G){U!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),U=G)}function Te(G){G!==Op?(pe(n.CULL_FACE),G!==k&&(G===gu?n.cullFace(n.BACK):G===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),k=G}function qe(G){G!==$&&(X&&n.lineWidth(G),$=G)}function y(G,ze,de){G?(pe(n.POLYGON_OFFSET_FILL),(H!==ze||V!==de)&&(H=ze,V=de,s.getReversed()&&(ze=-ze),n.polygonOffset(ze,de))):Re(n.POLYGON_OFFSET_FILL)}function ye(G){G?pe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Ne(G){G===void 0&&(G=n.TEXTURE0+ae-1),le!==G&&(n.activeTexture(G),le=G)}function F(G,ze,de){de===void 0&&(le===null?de=n.TEXTURE0+ae-1:de=le);let Ge=fe[de];Ge===void 0&&(Ge={type:void 0,texture:void 0},fe[de]=Ge),(Ge.type!==G||Ge.texture!==ze)&&(le!==de&&(n.activeTexture(de),le=de),n.bindTexture(G,ze||re[G]),Ge.type=G,Ge.texture=ze)}function ct(){const G=fe[le];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Fe(){try{n.compressedTexImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function E(){try{n.texSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Y(){try{n.texSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function oe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ve(){try{n.texStorage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function we(){try{n.texStorage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function te(){try{n.texImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ue(){try{n.texImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Be(G){return h[G]!==void 0?h[G]:n.getParameter(G)}function nt(G,ze){h[G]!==ze&&(n.pixelStorei(G,ze),h[G]=ze)}function Ie(G){gt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),gt.copy(G))}function Pe(G){ht.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ht.copy(G))}function Ve(G,ze){let de=c.get(ze);de===void 0&&(de=new WeakMap,c.set(ze,de));let Ge=de.get(G);Ge===void 0&&(Ge=n.getUniformBlockIndex(ze,G.name),de.set(G,Ge))}function ft(G,ze){const Ge=c.get(ze).get(G);f.get(ze)!==Ge&&(n.uniformBlockBinding(ze,Ge,G.__bindingPointIndex),f.set(ze,Ge))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,fe={},d={},p=new WeakMap,m=[],A=null,v=!1,x=null,T=null,P=null,b=null,S=null,w=null,I=null,_=new St(0,0,0),R=0,L=!1,U=null,k=null,$=null,H=null,V=null,gt.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pe,disable:Re,bindFramebuffer:at,drawBuffers:He,useProgram:Ce,setBlending:Me,setMaterial:Se,setFlipSided:Ae,setCullFace:Te,setLineWidth:qe,setPolygonOffset:y,setScissorTest:ye,activeTexture:Ne,bindTexture:F,unbindTexture:ct,compressedTexImage2D:Fe,compressedTexImage3D:D,texImage2D:te,texImage3D:ue,pixelStorei:nt,getParameter:Be,updateUBOMapping:Ve,uniformBlockBinding:ft,texStorage2D:ve,texStorage3D:we,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:oe,scissor:Ie,viewport:Pe,reset:dt}}function kM(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,E){return m?new OffscreenCanvas(D,E):No("canvas")}function v(D,E,Y){let Z=1;const oe=Fe(D);if((oe.width>Y||oe.height>Y)&&(Z=Y/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ve=Math.floor(Z*oe.width),we=Math.floor(Z*oe.height);d===void 0&&(d=A(ve,we));const te=E?A(ve,we):d;return te.width=ve,te.height=we,te.getContext("2d").drawImage(D,0,0,ve,we),xt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ve+"x"+we+")."),te}else return"data"in D&&xt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),D;return D}function x(D){return D.generateMipmaps}function T(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,E,Y,Z,oe,ve=!1){if(D!==null){if(n[D]!==void 0)return n[D];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let we;Z&&(we=e.get("EXT_texture_norm16"),we||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===n.RED&&(Y===n.FLOAT&&(te=n.R32F),Y===n.HALF_FLOAT&&(te=n.R16F),Y===n.UNSIGNED_BYTE&&(te=n.R8),Y===n.UNSIGNED_SHORT&&we&&(te=we.R16_EXT),Y===n.SHORT&&we&&(te=we.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.R8UI),Y===n.UNSIGNED_SHORT&&(te=n.R16UI),Y===n.UNSIGNED_INT&&(te=n.R32UI),Y===n.BYTE&&(te=n.R8I),Y===n.SHORT&&(te=n.R16I),Y===n.INT&&(te=n.R32I)),E===n.RG&&(Y===n.FLOAT&&(te=n.RG32F),Y===n.HALF_FLOAT&&(te=n.RG16F),Y===n.UNSIGNED_BYTE&&(te=n.RG8),Y===n.UNSIGNED_SHORT&&we&&(te=we.RG16_EXT),Y===n.SHORT&&we&&(te=we.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RG8UI),Y===n.UNSIGNED_SHORT&&(te=n.RG16UI),Y===n.UNSIGNED_INT&&(te=n.RG32UI),Y===n.BYTE&&(te=n.RG8I),Y===n.SHORT&&(te=n.RG16I),Y===n.INT&&(te=n.RG32I)),E===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGB16UI),Y===n.UNSIGNED_INT&&(te=n.RGB32UI),Y===n.BYTE&&(te=n.RGB8I),Y===n.SHORT&&(te=n.RGB16I),Y===n.INT&&(te=n.RGB32I)),E===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),Y===n.UNSIGNED_INT&&(te=n.RGBA32UI),Y===n.BYTE&&(te=n.RGBA8I),Y===n.SHORT&&(te=n.RGBA16I),Y===n.INT&&(te=n.RGBA32I)),E===n.RGB&&(Y===n.UNSIGNED_SHORT&&we&&(te=we.RGB16_EXT),Y===n.SHORT&&we&&(te=we.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),E===n.RGBA){const ue=ve?Js:Nt.getTransfer(oe);Y===n.FLOAT&&(te=n.RGBA32F),Y===n.HALF_FLOAT&&(te=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(te=ue===Wt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&we&&(te=we.RGBA16_EXT),Y===n.SHORT&&we&&(te=we.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(D,E){let Y;return D?E===null||E===Ni||E===Lo?Y=n.DEPTH24_STENCIL8:E===Pi?Y=n.DEPTH32F_STENCIL8:E===Io&&(Y=n.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===Lo?Y=n.DEPTH_COMPONENT24:E===Pi?Y=n.DEPTH_COMPONENT32F:E===Io&&(Y=n.DEPTH_COMPONENT16),Y}function w(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==Mn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),R(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function _(D){const E=D.target;E.removeEventListener("dispose",_),U(E)}function R(D){const E=i.get(D);if(E.__webglInit===void 0)return;const Y=D.source,Z=p.get(Y);if(Z){const oe=Z[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&L(D),Object.keys(Z).length===0&&p.delete(Y)}i.remove(D)}function L(D){const E=i.get(D);n.deleteTexture(E.__webglTexture);const Y=D.source,Z=p.get(Y);delete Z[E.__cacheKey],s.memory.textures--}function U(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let oe=0;oe<E.__webglFramebuffer[Z].length;oe++)n.deleteFramebuffer(E.__webglFramebuffer[Z][oe]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=D.textures;for(let Z=0,oe=Y.length;Z<oe;Z++){const ve=i.get(Y[Z]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(Y[Z])}i.remove(D)}let k=0;function $(){k=0}function H(){return k}function V(D){k=D}function ae(){const D=k;return D>=a.maxTextures&&xt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),k+=1,D}function X(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function xe(D,E){const Y=i.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const Z=D.image;if(Z===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,D,E);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+E)}function se(D,E){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Re(Y,D,E);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+E)}function le(D,E){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Re(Y,D,E);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+E)}function fe(D,E){const Y=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){at(Y,D,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+E)}const Qe={[Xs]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[yc]:n.MIRRORED_REPEAT},We={[cn]:n.NEAREST,[r0]:n.NEAREST_MIPMAP_NEAREST,[is]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[Wa]:n.LINEAR_MIPMAP_LINEAR},gt={[c0]:n.NEVER,[p0]:n.ALWAYS,[f0]:n.LESS,[wf]:n.LEQUAL,[u0]:n.EQUAL,[Rf]:n.GEQUAL,[d0]:n.GREATER,[h0]:n.NOTEQUAL};function ht(D,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mn||E.magFilter===Al||E.magFilter===is||E.magFilter===Wa||E.minFilter===Mn||E.minFilter===Al||E.minFilter===is||E.minFilter===Wa)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Qe[E.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Qe[E.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Qe[E.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,We[E.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,We[E.minFilter]),E.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==is&&E.minFilter!==Wa||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function bt(D,E){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const Z=E.source;let oe=p.get(Z);oe===void 0&&(oe={},p.set(Z,oe));const ve=X(E);if(ve!==D.__cacheKey){oe[ve]===void 0&&(oe[ve]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),oe[ve].usedTimes++;const we=oe[D.__cacheKey];we!==void 0&&(oe[D.__cacheKey].usedTimes--,we.usedTimes===0&&L(E)),D.__cacheKey=ve,D.__webglTexture=oe[ve].texture}return Y}function re(D,E,Y){return Math.floor(Math.floor(D/Y)/E)}function pe(D,E,Y,Z){const ve=D.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Y,Z,E.data);else{ve.sort((nt,Ie)=>nt.start-Ie.start);let we=0;for(let nt=1;nt<ve.length;nt++){const Ie=ve[we],Pe=ve[nt],Ve=Ie.start+Ie.count,ft=re(Pe.start,E.width,4),dt=re(Ie.start,E.width,4);Pe.start<=Ve+1&&ft===dt&&re(Pe.start+Pe.count-1,E.width,4)===ft?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++we,ve[we]=Pe)}ve.length=we+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),ue=t.getParameter(n.UNPACK_SKIP_PIXELS),Be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let nt=0,Ie=ve.length;nt<Ie;nt++){const Pe=ve[nt],Ve=Math.floor(Pe.start/4),ft=Math.ceil(Pe.count/4),dt=Ve%E.width,G=Math.floor(Ve/E.width),ze=ft,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,dt,G,ze,de,Y,Z,E.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Be)}}function Re(D,E,Y){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const oe=bt(D,E),ve=E.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+Y);const we=i.get(ve);if(ve.version!==we.__version||oe===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=Nt.getPrimaries(Nt.workingColorSpace),Ge=E.colorSpace===ba?null:Nt.getPrimaries(E.colorSpace),l=E.colorSpace===ba||de===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,l)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ue=v(E.image,!1,a.maxTextureSize);ue=ct(E,ue);const Be=r.convert(E.format,E.colorSpace),nt=r.convert(E.type);let Ie=b(E.internalFormat,Be,nt,E.normalized,E.colorSpace,E.isVideoTexture);ht(Z,E);let Pe;const Ve=E.mipmaps,ft=E.isVideoTexture!==!0,dt=we.__version===void 0||oe===!0,G=ve.dataReady,ze=w(E,ue);if(E.isDepthTexture)Ie=S(E.format===Xa,E.type),dt&&(ft?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Be,nt,null));else if(E.isDataTexture)if(Ve.length>0){ft&&dt&&t.texStorage2D(n.TEXTURE_2D,ze,Ie,Ve[0].width,Ve[0].height);for(let de=0,Ge=Ve.length;de<Ge;de++)Pe=Ve[de],ft?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Pe.width,Pe.height,Be,nt,Pe.data):t.texImage2D(n.TEXTURE_2D,de,Ie,Pe.width,Pe.height,0,Be,nt,Pe.data);E.generateMipmaps=!1}else ft?(dt&&t.texStorage2D(n.TEXTURE_2D,ze,Ie,ue.width,ue.height),G&&pe(E,ue,Be,nt)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Be,nt,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ie,Ve[0].width,Ve[0].height,ue.depth);for(let de=0,Ge=Ve.length;de<Ge;de++)if(Pe=Ve[de],E.format!==oi)if(Be!==null)if(ft){if(G)if(E.layerUpdates.size>0){const l=td(Pe.width,Pe.height,E.format,E.type);for(const ge of E.layerUpdates){const Le=Pe.data.subarray(ge*l/Pe.data.BYTES_PER_ELEMENT,(ge+1)*l/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ge,Pe.width,Pe.height,1,Be,Le)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,ue.depth,Be,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ie,Pe.width,Pe.height,ue.depth,0,Pe.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Pe.width,Pe.height,ue.depth,Be,nt,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ie,Pe.width,Pe.height,ue.depth,0,Be,nt,Pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ft&&dt&&t.texStorage2D(n.TEXTURE_2D,ze,Ie,Ve[0].width,Ve[0].height);for(let de=0,Ge=Ve.length;de<Ge;de++)Pe=Ve[de],E.format!==oi?Be!==null?ft?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ie,Pe.width,Pe.height,0,Pe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Pe.width,Pe.height,Be,nt,Pe.data):t.texImage2D(n.TEXTURE_2D,de,Ie,Pe.width,Pe.height,0,Be,nt,Pe.data)}else if(E.isDataArrayTexture)if(ft){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,Ie,ue.width,ue.height,ue.depth),G)if(E.layerUpdates.size>0){const de=td(ue.width,ue.height,E.format,E.type);for(const Ge of E.layerUpdates){const l=ue.data.subarray(Ge*de/ue.data.BYTES_PER_ELEMENT,(Ge+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,ue.width,ue.height,1,Be,nt,l)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Be,nt,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Be,nt,ue.data);else if(E.isData3DTexture)ft?(dt&&t.texStorage3D(n.TEXTURE_3D,ze,Ie,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Be,nt,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Be,nt,ue.data);else if(E.isFramebufferTexture){if(dt)if(ft)t.texStorage2D(n.TEXTURE_2D,ze,Ie,ue.width,ue.height);else{let de=ue.width,Ge=ue.height;for(let l=0;l<ze;l++)t.texImage2D(n.TEXTURE_2D,l,Ie,de,Ge,0,Be,nt,null),de>>=1,Ge>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ue.parentNode!==de){de.appendChild(ue),h.add(E),de.onpaint=Ge=>{const l=Ge.changedElements;for(const ge of h)l.includes(ge.image)&&(ge.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ue);else{const l=n.RGBA,ge=n.RGBA,Le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,l,ge,Le,ue)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(ft&&dt){const de=Fe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ze,Ie,de.width,de.height)}for(let de=0,Ge=Ve.length;de<Ge;de++)Pe=Ve[de],ft?G&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Be,nt,Pe):t.texImage2D(n.TEXTURE_2D,de,Ie,Be,nt,Pe);E.generateMipmaps=!1}else if(ft){if(dt){const de=Fe(ue);t.texStorage2D(n.TEXTURE_2D,ze,Ie,de.width,de.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,nt,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Be,nt,ue);x(E)&&T(Z),we.__version=ve.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function at(D,E,Y){if(E.image.length!==6)return;const Z=bt(D,E),oe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const ve=i.get(oe);if(oe.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const we=Nt.getPrimaries(Nt.workingColorSpace),te=E.colorSpace===ba?null:Nt.getPrimaries(E.colorSpace),ue=E.colorSpace===ba||we===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!Be&&!nt?Ie[ge]=v(E.image[ge],!0,a.maxCubemapSize):Ie[ge]=nt?E.image[ge].image:E.image[ge],Ie[ge]=ct(E,Ie[ge]);const Pe=Ie[0],Ve=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),dt=b(E.internalFormat,Ve,ft,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,ze=ve.__version===void 0||Z===!0,de=oe.dataReady;let Ge=w(E,Pe);ht(n.TEXTURE_CUBE_MAP,E);let l;if(Be){G&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,dt,Pe.width,Pe.height);for(let ge=0;ge<6;ge++){l=Ie[ge].mipmaps;for(let Le=0;Le<l.length;Le++){const rt=l[Le];E.format!==oi?Ve!==null?G?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,rt.width,rt.height,Ve,rt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,dt,rt.width,rt.height,0,rt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,rt.width,rt.height,Ve,ft,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,dt,rt.width,rt.height,0,Ve,ft,rt.data)}}}else{if(l=E.mipmaps,G&&ze){l.length>0&&Ge++;const ge=Fe(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,dt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(nt){G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,Ve,ft,Ie[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,dt,Ie[ge].width,Ie[ge].height,0,Ve,ft,Ie[ge].data);for(let Le=0;Le<l.length;Le++){const Pt=l[Le].image[ge].image;G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,Pt.width,Pt.height,Ve,ft,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,dt,Pt.width,Pt.height,0,Ve,ft,Pt.data)}}else{G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,ft,Ie[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,dt,Ve,ft,Ie[ge]);for(let Le=0;Le<l.length;Le++){const rt=l[Le];G?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,Ve,ft,rt.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,dt,Ve,ft,rt.image[ge])}}}x(E)&&T(n.TEXTURE_CUBE_MAP),ve.__version=oe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function He(D,E,Y,Z,oe,ve){const we=r.convert(Y.format,Y.colorSpace),te=r.convert(Y.type),ue=b(Y.internalFormat,we,te,Y.normalized,Y.colorSpace),Be=i.get(E),nt=i.get(Y);if(nt.__renderTarget=E,!Be.__hasExternalTextures){const Ie=Math.max(1,E.width>>ve),Pe=Math.max(1,E.height>>ve);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ve,ue,Ie,Pe,E.depth,0,we,te,null):t.texImage2D(oe,ve,ue,Ie,Pe,0,we,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,oe,nt.__webglTexture,0,ye(E)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,oe,nt.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,E,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),E.depthBuffer){const Z=E.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,ve=S(E.stencilBuffer,oe),we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ne(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),ve,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),ve,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ve,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,D)}else{const Z=E.textures;for(let oe=0;oe<Z.length;oe++){const ve=Z[oe],we=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),ue=b(ve.internalFormat,we,te,ve.normalized,ve.colorSpace);Ne(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye(E),ue,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye(E),ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(D,E,Y){const Z=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const oe=i.get(E.depthTexture);if(oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),ht(n.TEXTURE_CUBE_MAP,E.depthTexture);const Be=r.convert(E.depthTexture.format),nt=r.convert(E.depthTexture.type);let Ie;E.depthTexture.format===ta?Ie=n.DEPTH_COMPONENT24:E.depthTexture.format===Xa&&(Ie=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,E.width,E.height,0,Be,nt,null)}}else xe(E.depthTexture,0);const ve=oe.__webglTexture,we=ye(E),te=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ue=E.depthTexture.format===Xa?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===ta)Ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,ve,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,ve,0);else if(E.depthTexture.format===Xa)Ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,te,ve,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,ue,te,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(D){const E=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=Z}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)lt(E.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?lt(E.__webglFramebuffer[0],D,0):lt(E.__webglFramebuffer,D,0)}else if(Y){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[Z],D,!1);else{const oe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(D,E,Y){const Z=i.get(D);E!==void 0&&He(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ce(D)}function Se(D){const E=D.texture,Y=i.get(D),Z=i.get(E);D.addEventListener("dispose",_);const oe=D.textures,ve=D.isWebGLCubeRenderTarget===!0,we=oe.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,s.memory.textures++),ve){Y.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[te]=[];for(let ue=0;ue<E.mipmaps.length;ue++)Y.__webglFramebuffer[te][ue]=n.createFramebuffer()}else Y.__webglFramebuffer[te]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)Y.__webglFramebuffer[te]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(we)for(let te=0,ue=oe.length;te<ue;te++){const Be=i.get(oe[te]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Ne(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let te=0;te<oe.length;te++){const ue=oe[te];Y.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[te]);const Be=r.convert(ue.format,ue.colorSpace),nt=r.convert(ue.type),Ie=b(ue.internalFormat,Be,nt,ue.normalized,ue.colorSpace,D.isXRRenderTarget===!0),Pe=ye(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ie,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Y.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ht(n.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)He(Y.__webglFramebuffer[te][ue],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue);else He(Y.__webglFramebuffer[te],D,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);x(E)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let te=0,ue=oe.length;te<ue;te++){const Be=oe[te],nt=i.get(Be);let Ie=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,nt.__webglTexture),ht(Ie,Be),He(Y.__webglFramebuffer,D,Be,n.COLOR_ATTACHMENT0+te,Ie,0),x(Be)&&T(Ie)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(te=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Z.__webglTexture),ht(te,E),E.mipmaps&&E.mipmaps.length>0)for(let ue=0;ue<E.mipmaps.length;ue++)He(Y.__webglFramebuffer[ue],D,E,n.COLOR_ATTACHMENT0,te,ue);else He(Y.__webglFramebuffer,D,E,n.COLOR_ATTACHMENT0,te,0);x(E)&&T(te),t.unbindTexture()}D.depthBuffer&&ce(D)}function Ae(D){const E=D.textures;for(let Y=0,Z=E.length;Y<Z;Y++){const oe=E[Y];if(x(oe)){const ve=P(D),we=i.get(oe).__webglTexture;t.bindTexture(ve,we),T(ve),t.unbindTexture()}}}const Te=[],qe=[];function y(D){if(D.samples>0){if(Ne(D)===!1){const E=D.textures,Y=D.width,Z=D.height;let oe=n.COLOR_BUFFER_BIT;const ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(D),te=E.length>1;if(te)for(let Be=0;Be<E.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ue=D.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Be=0;Be<E.length;Be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Be]);const nt=i.get(E[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,oe,n.NEAREST),f===!0&&(Te.length=0,qe.length=0,Te.push(n.COLOR_ATTACHMENT0+Be),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Te.push(ve),qe.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let Be=0;Be<E.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,we.__webglColorRenderbuffer[Be]);const nt=i.get(E[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const E=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ye(D){return Math.min(a.maxSamples,D.samples)}function Ne(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function F(D){const E=s.render.frame;u.get(D)!==E&&(u.set(D,E),D.update())}function ct(D,E){const Y=D.colorSpace,Z=D.format,oe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Ys&&Y!==ba&&(Nt.getTransfer(Y)===Wt?(Z!==oi||oe!==On)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",Y)),E}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=$,this.getTextureUnits=H,this.setTextureUnits=V,this.setTexture2D=xe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=fe,this.rebindTextures=Me,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=y,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HM(n,e){function t(i,a=ba){let r;const s=Nt.getTransfer(a);if(i===On)return n.UNSIGNED_BYTE;if(i===yf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sh)return n.BYTE;if(i===lh)return n.SHORT;if(i===Io)return n.UNSIGNED_SHORT;if(i===Sf)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===dh)return n.RGB;if(i===oi)return n.RGBA;if(i===ta)return n.DEPTH_COMPONENT;if(i===Xa)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===Ef)return n.RED_INTEGER;if(i===Ka)return n.RG;if(i===Af)return n.RG_INTEGER;if(i===Tf)return n.RGBA_INTEGER;if(i===Bs||i===zs||i===Gs||i===Vs)if(s===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Ec||i===Ac||i===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Rc||i===Cc||i===Pc||i===Ic||i===qs||i===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wc||i===Rc)return s===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return r.COMPRESSED_R11_EAC;if(i===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qs)return r.COMPRESSED_RG11_EAC;if(i===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===Gc||i===Vc||i===kc||i===Hc||i===Wc||i===Xc||i===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$c||i===Yc||i===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$c)return s===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zc||i===Kc||i===$s||i===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const WM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
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

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:WM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends tr{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",f=1,c=null,u=null,h=null,d=null,p=null,m=null;const A=typeof XRWebGLBinding<"u",v=new qM,x={},T=t.getContextAttributes();let P=null,b=null;const S=[],w=[],I=new Ue;let _=null,R=null;const L=new ii;L.viewport=new an;const U=new ii;U.viewport=new an;const k=[L,U],$=new tg;let H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=S[re];return pe===void 0&&(pe=new Ll,S[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=S[re];return pe===void 0&&(pe=new Ll,S[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=S[re];return pe===void 0&&(pe=new Ll,S[re]=pe),pe.getHandSpace()};function ae(re){const pe=w.indexOf(re.inputSource);if(pe===-1)return;const Re=S[pe];Re!==void 0&&(Re.update(re.inputSource,re.frame,c||s),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){a.removeEventListener("select",ae),a.removeEventListener("selectstart",ae),a.removeEventListener("selectend",ae),a.removeEventListener("squeeze",ae),a.removeEventListener("squeezestart",ae),a.removeEventListener("squeezeend",ae),a.removeEventListener("end",X),a.removeEventListener("inputsourceschange",xe);for(let re=0;re<S.length;re++){const pe=w[re];pe!==null&&(w[re]=null,S[re].disconnect(pe))}H=null,V=null,v.reset();for(const re in x)delete x[re];if(e.setRenderTarget(P),p=null,d=null,h=null,a=null,b=null,bt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),R!==null){const re=R.camera;re.fov=R.fov,re.zoom=R.zoom,re.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&A&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(re){if(a=re,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",ae),a.addEventListener("selectstart",ae),a.addEventListener("selectend",ae),a.addEventListener("squeeze",ae),a.addEventListener("squeezestart",ae),a.addEventListener("squeezeend",ae),a.addEventListener("end",X),a.addEventListener("inputsourceschange",xe),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,at=null,He=null;T.depth&&(He=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=T.stencil?Xa:ta,at=T.stencil?Lo:Ni);const Ce={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ce),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:oi,type:On,depthTexture:new Xr(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Re),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new si(p.framebufferWidth,p.framebufferHeight,{format:oi,type:On,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),c=null,s=await a.requestReferenceSpace(o),bt.setContext(a),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function xe(re){for(let pe=0;pe<re.removed.length;pe++){const Re=re.removed[pe],at=w.indexOf(Re);at>=0&&(w[at]=null,S[at].disconnect(Re))}for(let pe=0;pe<re.added.length;pe++){const Re=re.added[pe];let at=w.indexOf(Re);if(at===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=w.length){w.push(Re),at=Ce;break}else if(w[Ce]===null){w[Ce]=Re,at=Ce;break}if(at===-1)break}const He=S[at];He&&He.connect(Re)}}const se=new z,le=new z;function fe(re,pe,Re){se.setFromMatrixPosition(pe.matrixWorld),le.setFromMatrixPosition(Re.matrixWorld);const at=se.distanceTo(le),He=pe.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,lt=He[14]/(He[10]-1),ce=He[14]/(He[10]+1),Me=(He[9]+1)/He[5],Se=(He[9]-1)/He[5],Ae=(He[8]-1)/He[0],Te=(Ce[8]+1)/Ce[0],qe=lt*Ae,y=lt*Te,ye=at/(-Ae+Te),Ne=ye*-Ae;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ne),re.translateZ(ye),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),He[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const F=lt+ye,ct=ce+ye,Fe=qe-Ne,D=y+(at-Ne),E=Me*ce/ct*F,Y=Se*ce/ct*F;re.projectionMatrix.makePerspective(Fe,D,E,Y,F,ct),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Qe(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(a===null)return;let pe=re.near,Re=re.far;v.texture!==null&&(v.depthNear>0&&(pe=v.depthNear),v.depthFar>0&&(Re=v.depthFar)),$.near=U.near=L.near=pe,$.far=U.far=L.far=Re,(H!==$.near||V!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),H=$.near,V=$.far),$.layers.mask=re.layers.mask|6,L.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;const at=re.parent,He=$.cameras;Qe($,at);for(let Ce=0;Ce<He.length;Ce++)Qe(He[Ce],at);He.length===2?fe($,L,U):$.projectionMatrix.copy(L.projectionMatrix),R===null&&re.isPerspectiveCamera&&(R={camera:re,fov:re.fov,zoom:re.zoom}),We(re,$,at)};function We(re,pe,Re){Re===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Uo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&p===null))return f},this.setFoveation=function(re){f=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh($)},this.getCameraTexture=function(re){return x[re]};let gt=null;function ht(re,pe){if(u=pe.getViewerPose(c||s),m=pe,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let at=!1;Re.length!==$.cameras.length&&($.cameras.length=0,at=!0);for(let ce=0;ce<Re.length;ce++){const Me=Re[ce];let Se=null;if(p!==null)Se=p.getViewport(Me);else{const Te=h.getViewSubImage(d,Me);Se=Te.viewport,ce===0&&(e.setRenderTargetTextures(b,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(b))}let Ae=k[ce];Ae===void 0&&(Ae=new ii,Ae.layers.enable(ce),Ae.viewport=new an,k[ce]=Ae),Ae.matrix.fromArray(Me.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Me.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Se.x,Se.y,Se.width,Se.height),ce===0&&($.matrix.copy(Ae.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),at===!0&&$.cameras.push(Ae)}const He=a.enabledFeatures;if(He&&He.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){h=i.getBinding();const ce=h.getDepthInformation(Re[0]);ce&&ce.isValid&&ce.texture&&v.init(ce,a.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),h=i.getBinding();for(let ce=0;ce<Re.length;ce++){const Me=Re[ce].camera;if(Me){let Se=x[Me];Se||(Se=new Rh,x[Me]=Se);const Ae=h.getCameraImage(Me);Se.sourceTexture=Ae}}}}for(let Re=0;Re<S.length;Re++){const at=w[Re],He=S[Re];at!==null&&He!==void 0&&He.update(at,pe,c||s)}gt&&gt(re,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),m=null}const bt=new Gh;bt.setAnimationLoop(ht),this.setAnimationLoop=function(re){gt=re},this.dispose=function(){}}}const YM=new Kt,$h=new Et;$h.set(-1,0,0,0,1,0,0,0,1);function JM(n,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function i(v,x){x.color.getRGB(v.fogColor.value,Fh(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function a(v,x,T,P,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(v,x):x.isMeshLambertMaterial?(r(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(v,x),h(v,x)):x.isMeshPhongMaterial?(r(v,x),u(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(v,x),d(v,x),x.isMeshPhysicalMaterial&&p(v,x,b)):x.isMeshMatcapMaterial?(r(v,x),m(v,x)):x.isMeshDepthMaterial?r(v,x):x.isMeshDistanceMaterial?(r(v,x),A(v,x)):x.isMeshNormalMaterial?r(v,x):x.isLineBasicMaterial?(s(v,x),x.isLineDashedMaterial&&o(v,x)):x.isPointsMaterial?f(v,x,T,P):x.isSpriteMaterial?c(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Bn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Bn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const T=e.get(x),P=T.envMap,b=T.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(b)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply($h),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function s(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function o(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function f(v,x,T,P){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*T,v.scale.value=P*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function u(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function h(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function d(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function p(v,x,T){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,x){x.matcap&&(v.matcap.value=x.matcap)}function A(v,x){const T=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function ZM(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function c(b,S){let w=a[b.id];w===void 0&&(v(b),w=u(b),a[b.id]=w,b.addEventListener("dispose",T));const I=S.program;i.updateUBOMapping(b,I);const _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function u(b){const S=h();b.__bindingPointIndex=S;const w=n.createBuffer(),I=b.__size,_=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function h(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=a[b.id],w=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,R=w.length;_<R;_++){const L=w[_];if(Array.isArray(L))for(let U=0,k=L.length;U<k;U++)p(L[U],_,U,I);else p(L,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,w,I){if(A(b,S,w,I)===!0){const _=b.__offset,R=b.value;if(Array.isArray(R)){let L=0;for(let U=0;U<R.length;U++){const k=R[U],$=x(k);m(k,b.__data,L),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,b.__data)}}function m(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function A(b,S,w,I){const _=b.value,R=S+"_"+w;if(I[R]===void 0)return typeof _=="number"||typeof _=="boolean"?I[R]=_:ArrayBuffer.isView(_)?I[R]=_.slice():I[R]=_.clone(),!0;{const L=I[R];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function v(b){const S=b.uniforms;let w=0;const I=16;for(let R=0,L=S.length;R<L;R++){const U=Array.isArray(S[R])?S[R]:[S[R]];for(let k=0,$=U.length;k<$;k++){const H=U[k],V=Array.isArray(H.value)?H.value:[H.value];for(let ae=0,X=V.length;ae<X;ae++){const xe=V[ae],se=x(xe),le=w%I,fe=le%se.boundary,Qe=le+fe;w+=fe,Qe!==0&&I-Qe<se.storage&&(w+=I-Qe),H.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=se.storage}}}const _=w%I;return _>0&&(w+=I-_),b.__size=w,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",b),S}function T(b){const S=b.target;S.removeEventListener("dispose",T);const w=s.indexOf(S.__bindingPointIndex);s.splice(w,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const b in a)n.deleteBuffer(a[b]);s=[],a={},r={}}return{bind:f,update:c,dispose:P}}const KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function QM(){return Ai===null&&(Ai=new Ah(KM,16,16,Ka,Ui),Ai.name="DFG_LUT",Ai.minFilter=Mn,Ai.magFilter=Mn,Ai.wrapS=Zi,Ai.wrapT=Zi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class jM{constructor(e={}){const{canvas:t=g0(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=On}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const A=p,v=new Set([Tf,Af,Ef]),x=new Set([On,Ni,Io,Lo,yf,bf]),T=new Uint32Array(4),P=new Int32Array(4),b=new z;let S=null,w=null;const I=[],_=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,k=null,$=null,H=null,V=null;this._outputColorSpace=kn;let ae=0,X=0,xe=null,se=-1,le=null;const fe=new an,Qe=new an;let We=null;const gt=new St(0);let ht=0,bt=t.width,re=t.height,pe=1,Re=null,at=null;const He=new an(0,0,bt,re),Ce=new an(0,0,bt,re);let lt=!1;const ce=new Lf;let Me=!1,Se=!1;const Ae=new Kt,Te=new z,qe=new an,y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ne(){return xe===null?pe:1}let F=i;function ct(C,q){return t.getContext(C,q)}let Fe,D,E,Y,Z,oe,ve,we,te,ue,Be,nt,Ie,Pe,Ve,ft,dt,G,ze,de,Ge,l,ge;try{const C={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",on,!1),F===null){const q="webgl2";if(F=ct(q,C),F===null)throw ct(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(C){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ut("WebGLRenderer: "+C.message),C}function Le(){Fe=new Q1(F),Fe.init(),Ge=new HM(F,Fe),D=new k1(F,Fe,e,Ge),E=new VM(F,Fe),D.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),$=F.createFramebuffer(),H=F.createFramebuffer(),V=F.createFramebuffer(),Y=new tv(F),Z=new wM,oe=new kM(F,Fe,E,Z,D,Ge,Y),ve=new K1(L),we=new ig(F),l=new G1(F,we),te=new j1(F,we,Y,l),ue=new iv(F,te,we,l,Y),G=new nv(F,D,oe),Ve=new H1(Z),Be=new TM(L,ve,Fe,D,l,Ve),nt=new JM(L,Z),Ie=new CM,Pe=new UM(Fe),dt=new z1(L,ve,E,ue,m,f),ft=new GM(L,ue,D),ge=new ZM(F,Y,D,E),ze=new V1(F,Fe,Y),de=new ev(F,Fe,Y),Y.programs=Be.programs,L.capabilities=D,L.extensions=Fe,L.properties=Z,L.renderLists=Ie,L.shadowMap=ft,L.state=E,L.info=Y}A!==On&&(R=new rv(A,t.width,t.height,o,a,r));const rt=new $M(L,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(bt,re,!1))},this.getSize=function(C){return C.set(bt,re)},this.setSize=function(C,q,ne=!0){if(rt.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=C,re=q,t.width=Math.floor(C*pe),t.height=Math.floor(q*pe),ne===!0&&(t.style.width=C+"px",t.style.height=q+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(bt*pe,re*pe).floor()},this.setDrawingBufferSize=function(C,q,ne){bt=C,re=q,pe=ne,t.width=Math.floor(C*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===On){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(fe)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,q,ne,Q){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,q,ne,Q),E.viewport(fe.copy(He).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,q,ne,Q){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,q,ne,Q),E.scissor(Qe.copy(Ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(C){E.setScissorTest(lt=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ne=!0){let Q=0;if(C){let j=!1;if(xe!==null){const $e=xe.texture.format;j=v.has($e)}if(j){const $e=xe.texture.type,Ze=x.has($e),Xe=dt.getClearColor(),je=dt.getClearAlpha(),ot=Xe.r,Tt=Xe.g,Rt=Xe.b;Ze?(T[0]=ot,T[1]=Tt,T[2]=Rt,T[3]=je,F.clearBufferuiv(F.COLOR,0,T)):(P[0]=ot,P[1]=Tt,P[2]=Rt,P[3]=je,F.clearBufferiv(F.COLOR,0,P))}else Q|=F.COLOR_BUFFER_BIT}q&&(Q|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&F.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),k=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",on,!1),dt.dispose(),Ie.dispose(),Pe.dispose(),Z.dispose(),ve.dispose(),ue.dispose(),l.dispose(),ge.dispose(),Be.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ir),rt.removeEventListener("sessionend",ar),qn.stop()};function Pt(C){C.preventDefault(),Zs("WebGLRenderer: Context Lost."),U=!0}function It(){Zs("WebGLRenderer: Context Restored."),U=!1;const C=Y.autoReset,q=ft.enabled,ne=ft.autoUpdate,Q=ft.needsUpdate,j=ft.type;Le(),Y.autoReset=C,ft.enabled=q,ft.autoUpdate=ne,ft.needsUpdate=Q,ft.type=j}function on(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ti(C){const q=C.target;q.removeEventListener("dispose",ti),eo(q)}function eo(C){xl(C),Z.remove(C)}function xl(C){const q=Z.get(C).programs;q!==void 0&&(q.forEach(function(ne){Be.releaseProgram(ne)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ne,Q,j,$e){q===null&&(q=y);const Ze=j.isMesh&&j.matrixWorld.determinantAffine()<0,Xe=Rn(C,q,ne,Q,j);E.setMaterial(Q,Ze);let je=ne.index,ot=1;if(Q.wireframe===!0){if(je=te.getWireframeAttribute(ne),je===void 0)return;ot=2}const Tt=ne.drawRange,Rt=ne.attributes.position;let et=Tt.start*ot,Ft=(Tt.start+Tt.count)*ot;$e!==null&&(et=Math.max(et,$e.start*ot),Ft=Math.min(Ft,($e.start+$e.count)*ot)),je!==null?(et=Math.max(et,0),Ft=Math.min(Ft,je.count)):Rt!=null&&(et=Math.max(et,0),Ft=Math.min(Ft,Rt.count));const ln=Ft-et;if(ln<0||ln===1/0)return;l.setup(j,Q,Xe,ne,je);let Yt,Gt=ze;if(je!==null&&(Yt=we.get(je),Gt=de,Gt.setIndex(Yt)),j.isMesh)Q.wireframe===!0?(E.setLineWidth(Q.wireframeLinewidth*Ne()),Gt.setMode(F.LINES)):Gt.setMode(F.TRIANGLES);else if(j.isLine){let gn=Q.linewidth;gn===void 0&&(gn=1),E.setLineWidth(gn*Ne()),j.isLineSegments?Gt.setMode(F.LINES):j.isLineLoop?Gt.setMode(F.LINE_LOOP):Gt.setMode(F.LINE_STRIP)}else j.isPoints?Gt.setMode(F.POINTS):j.isSprite&&Gt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))Gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const gn=j._multiDrawStarts,Ke=j._multiDrawCounts,vn=j._multiDrawCount,Lt=je?we.get(je).bytesPerElement:1,Cn=Z.get(Q).currentProgram.getUniforms();for(let $n=0;$n<vn;$n++)Cn.setValue(F,"_gl_DrawID",$n),Gt.render(gn[$n]/Lt,Ke[$n])}else if(j.isInstancedMesh)Gt.renderInstances(et,ln,j.count);else if(ne.isInstancedBufferGeometry){const gn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ke=Math.min(ne.instanceCount,gn);Gt.renderInstances(et,ln,Ke)}else Gt.render(et,ln)};function Fi(C,q,ne,Q){k!==null&&C.isNodeMaterial&&k.setObject(Q,C),Me===!0&&Ve.setState(C,ne,!1),C.transparent===!0&&C.side===ai&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,rr(C,q,Q),C.side=Ja,C.needsUpdate=!0,rr(C,q,Q),C.side=ai):rr(C,q,Q)}this.compile=function(C,q,ne=null){ne===null&&(ne=C),k!==null&&k.renderStart(C,q,ne),w=Pe.get(ne),w.init(q),_.push(w),ne.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),C!==ne&&C.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),Se=this.localClippingEnabled,Me=Ve.init(this.clippingPlanes,Se),Me===!0&&Ve.setGlobalState(this.clippingPlanes,q),k!==null&&ft.render(w.state.shadowsArray,ne,q);const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const $e=j.material;if($e)if(Array.isArray($e))for(let Ze=0;Ze<$e.length;Ze++){const Xe=$e[Ze];Fi(Xe,ne,q,j),Q.add(Xe)}else Fi($e,ne,q,j),Q.add($e)}),w=_.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(C,q,ne=null){const Q=this.compile(C,q,ne);return new Promise(j=>{function $e(){if(Q.forEach(function(Ze){const je=Z.get(Ze).currentProgram;(je===void 0||je.isReady())&&Q.delete(Ze)}),Q.size===0){j(C);return}setTimeout($e,10)}Fe.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let to=null;function Jo(C){to&&to(C)}function ir(){qn.stop()}function ar(){qn.start()}const qn=new Gh;qn.setAnimationLoop(Jo),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(C){to=C,rt.setAnimationLoop(C),C===null?qn.stop():qn.start()},rt.addEventListener("sessionstart",ir),rt.addEventListener("sessionend",ar),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(C,q);const ne=rt.enabled===!0&&rt.isPresenting===!0,Q=R!==null&&(xe===null||ne)&&R.begin(L,xe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(q),q=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,q,xe),w=Pe.get(C,_.length),w.init(q),w.state.textureUnits=oe.getTextureUnits(),_.push(w),Ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ce.setFromProjectionMatrix(Ae,Ii,q.reversedDepth),Se=this.localClippingEnabled,Me=Ve.init(this.clippingPlanes,Se),S=Ie.get(C,I.length),S.init(),I.push(S),rt.enabled===!0&&rt.isPresenting===!0){const Ze=L.xr.getDepthSensingMesh();Ze!==null&&Da(Ze,q,-1/0,L.sortObjects)}Da(C,q,0,L.sortObjects),S.finish(),k!==null&&k.updateLights(w.state.lightsArray),L.sortObjects===!0&&S.sort(Re,at),ye=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ye&&dt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&Ve.beginShadows();const j=w.state.shadowsArray;if(ft.render(j,C,q),Me===!0&&Ve.endShadows(),(Q&&R.hasRenderPass())===!1){const Ze=S.opaque,Xe=S.transmissive;if(w.setupLights(),q.isArrayCamera){const je=q.cameras;if(Xe.length>0)for(let ot=0,Tt=je.length;ot<Tt;ot++){const Rt=je[ot];Ko(Ze,Xe,C,Rt)}ye&&dt.render(C);for(let ot=0,Tt=je.length;ot<Tt;ot++){const Rt=je[ot];Zo(S,C,Rt,Rt.viewport)}}else Xe.length>0&&Ko(Ze,Xe,C,q),ye&&dt.render(C),Zo(S,C,q)}xe!==null&&X===0&&(oe.updateMultisampleRenderTarget(xe),oe.updateRenderTargetMipmap(xe)),Q&&R.end(L),C.isScene===!0&&C.onAfterRender(L,C,q),l.resetDefaultState(),se=-1,le=null,_.pop(),_.length>0?(w=_[_.length-1],oe.setTextureUnits(w.state.textureUnits),Me===!0&&Ve.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,k!==null&&k.renderEnd()};function Da(C,q,ne,Q){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)w.pushLightProbeGrid(C);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ce)){Q&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Ze=ue.update(C),Xe=C.material;Xe.visible&&S.push(C,Ze,Xe,ne,qe.z,null,q)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ce))){const Ze=ue.update(C),Xe=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),qe.copy(Ze.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const je=Ze.groups;for(let ot=0,Tt=je.length;ot<Tt;ot++){const Rt=je[ot],et=Xe[Rt.materialIndex];et&&et.visible&&S.push(C,Ze,et,ne,qe.z,Rt,q)}}else Xe.visible&&S.push(C,Ze,Xe,ne,qe.z,null,q)}}const $e=C.children;for(let Ze=0,Xe=$e.length;Ze<Xe;Ze++)Da($e[Ze],q,ne,Q)}function Zo(C,q,ne,Q){const{opaque:j,transmissive:$e,transparent:Ze}=C;w.setupLightsView(ne),Me===!0&&Ve.setGlobalState(L.clippingPlanes,ne),Q&&E.viewport(fe.copy(Q)),j.length>0&&$t(j,q,ne),$e.length>0&&$t($e,q,ne),Ze.length>0&&$t(Ze,q,ne),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ko(C,q,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){const et=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new si(1,1,{generateMipmaps:!0,type:et?Ui:On,minFilter:Wa,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const $e=w.state.transmissionRenderTarget[Q.id],Ze=Q.viewport||fe;$e.setSize(Ze.z*L.transmissionResolutionScale,Ze.w*L.transmissionResolutionScale);const Xe=L.getRenderTarget(),je=L.getActiveCubeFace(),ot=L.getActiveMipmapLevel();L.setRenderTarget($e),L.getClearColor(gt),ht=L.getClearAlpha(),ht<1&&L.setClearColor(16777215,.5),L.clear(),ye&&dt.render(ne);const Tt=L.toneMapping;L.toneMapping=Li;const Rt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),Me===!0&&Ve.setGlobalState(L.clippingPlanes,Q),$t(C,ne,Q),oe.updateMultisampleRenderTarget($e),oe.updateRenderTargetMipmap($e),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ft=0,ln=q.length;Ft<ln;Ft++){const Yt=q[Ft],{object:Gt,geometry:gn,material:Ke,group:vn}=Yt;if(Ke.side===ai&&Gt.layers.test(Q.layers)){const Lt=Ke.side;Ke.side=Bn,Ke.needsUpdate=!0,sn(Gt,ne,Q,gn,Ke,vn),Ke.side=Lt,Ke.needsUpdate=!0,et=!0}}et===!0&&(oe.updateMultisampleRenderTarget($e),oe.updateRenderTargetMipmap($e))}L.setRenderTarget(Xe,je,ot),L.setClearColor(gt,ht),Rt!==void 0&&(Q.viewport=Rt),L.toneMapping=Tt}function $t(C,q,ne){const Q=q.isScene===!0?q.overrideMaterial:null;for(let j=0,$e=C.length;j<$e;j++){const Ze=C[j],{object:Xe,geometry:je,group:ot}=Ze;let Tt=Ze.material;Tt.allowOverride===!0&&Q!==null&&(Tt=Q),Xe.layers.test(ne.layers)&&sn(Xe,q,ne,je,Tt,ot)}}function sn(C,q,ne,Q,j,$e){k!==null&&j.isNodeMaterial&&k.setObject(C,j),C.onBeforeRender(L,q,ne,Q,j,$e),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(L,q,ne,Q,C,$e),j.transparent===!0&&j.side===ai&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,L.renderBufferDirect(ne,q,Q,j,C,$e),j.side=Ja,j.needsUpdate=!0,L.renderBufferDirect(ne,q,Q,j,C,$e),j.side=ai):L.renderBufferDirect(ne,q,Q,j,C,$e),C.onAfterRender(L,q,ne,Q,j,$e)}function rr(C,q,ne){q.isScene!==!0&&(q=y);const Q=Z.get(C),j=w.state.lights,$e=w.state.shadowsArray,Ze=j.state.version,Xe=Be.getParameters(C,j.state,$e,q,ne,w.state.lightProbeGridArray),je=Be.getProgramCacheKey(Xe);let ot=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;const Tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=ve.get(C.envMap||Q.environment,Tt),Q.envMapRotation=Q.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ot===void 0&&(C.addEventListener("dispose",ti),ot=new Map,Q.programs=ot);let Rt=ot.get(je);if(Rt!==void 0){if(Q.currentProgram===Rt&&Q.lightsStateVersion===Ze)return jo(C,Xe),Rt}else Xe.uniforms=Be.getUniforms(C),k!==null&&C.isNodeMaterial&&k.build(C,ne,Xe),C.onBeforeCompile(Xe,L),Rt=Be.acquireProgram(Xe,je),ot.set(je,Rt),Q.uniforms=Xe.uniforms;const et=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ve.uniform),jo(C,Xe),Q.needsLights=Na(C),Q.lightsStateVersion=Ze,Q.needsLights&&(et.ambientLightColor.value=j.state.ambient,et.lightProbe.value=j.state.probe,et.sunLights.value=j.state.sun,et.sunLightShadows.value=j.state.sunShadow,et.directionalLights.value=j.state.directional,et.directionalLightShadows.value=j.state.directionalShadow,et.spotLights.value=j.state.spot,et.spotLightShadows.value=j.state.spotShadow,et.rectAreaLights.value=j.state.rectArea,et.ltc_1.value=j.state.rectAreaLTC1,et.ltc_2.value=j.state.rectAreaLTC2,et.pointLights.value=j.state.point,et.pointLightShadows.value=j.state.pointShadow,et.hemisphereLights.value=j.state.hemi,et.sunShadowMatrix.value=j.state.sunShadowMatrix,et.sunShadowCascade.value=j.state.sunShadowCascade,et.directionalShadowMatrix.value=j.state.directionalShadowMatrix,et.spotLightMatrix.value=j.state.spotLightMatrix,et.spotLightMap.value=j.state.spotLightMap,et.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=Rt,Q.uniformsList=null,Rt}function Qo(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=ks.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function jo(C,q){const ne=Z.get(C);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function or(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(q.matrixWorld);for(let ne=0,Q=C.length;ne<Q;ne++){const j=C[ne];if(j.texture!==null&&j.boundingBox.containsPoint(b))return j}return null}function Rn(C,q,ne,Q,j){q.isScene!==!0&&(q=y),oe.resetTextureUnits();const $e=q.fog,Ze=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?q.environment:null,Xe=xe===null?L.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Nt.workingColorSpace,je=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,ot=ve.get(Q.envMap||Ze,je),Tt=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Rt=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),et=!!ne.morphAttributes.position,Ft=!!ne.morphAttributes.normal,ln=!!ne.morphAttributes.color;let Yt=Li;Q.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Yt=L.toneMapping);const Gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,gn=Gt!==void 0?Gt.length:0,Ke=Z.get(Q),vn=w.state.lights;if(Me===!0&&(Se===!0||C!==le)){const qt=C===le&&Q.id===se;Ve.setState(Q,C,qt)}let Lt=!1;Q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==vn.state.version||Ke.outputColorSpace!==Xe||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isBatchedMesh&&Ke.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ke.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ke.instancingMorph===!1&&j.morphTexture!==null||Ke.envMap!==ot||Q.fog===!0&&Ke.fog!==$e||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ve.numPlanes||Ke.numIntersection!==Ve.numIntersection)||Ke.vertexAlphas!==Tt||Ke.vertexTangents!==Rt||Ke.morphTargets!==et||Ke.morphNormals!==Ft||Ke.morphColors!==ln||Ke.toneMapping!==Yt||Ke.morphTargetsCount!==gn||!!Ke.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Ke.__version=Q.version);let Cn=Ke.currentProgram;Lt===!0&&(Cn=rr(Q,q,j),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,Cn,Ke));let $n=!1,ci=!1,zi=!1;const Vt=Cn.getUniforms(),en=Ke.uniforms;if(E.useProgram(Cn.program)&&($n=!0,ci=!0,zi=!0),Q.id!==se&&(se=Q.id,ci=!0),Ke.needsLights){const qt=or(w.state.lightProbeGridArray,j);Ke.lightProbeGrid!==qt&&(Ke.lightProbeGrid=qt,ci=!0)}if($n||le!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(F,"projectionMatrix",C.projectionMatrix),Vt.setValue(F,"viewMatrix",C.matrixWorldInverse);const bi=Vt.map.cameraPosition;bi!==void 0&&bi.setValue(F,Te.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&Vt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Vt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,ci=!0,zi=!0)}if(Ke.needsLights&&(vn.state.sunShadowMap.length>0&&Vt.setValue(F,"sunShadowMap",vn.state.sunShadowMap,oe),vn.state.directionalShadowMap.length>0&&Vt.setValue(F,"directionalShadowMap",vn.state.directionalShadowMap,oe),vn.state.spotShadowMap.length>0&&Vt.setValue(F,"spotShadowMap",vn.state.spotShadowMap,oe),vn.state.pointShadowMap.length>0&&Vt.setValue(F,"pointShadowMap",vn.state.pointShadowMap,oe)),j.isSkinnedMesh){Vt.setOptional(F,j,"bindMatrix"),Vt.setOptional(F,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Vt.setValue(F,"boneTexture",qt.boneTexture,oe))}j.isBatchedMesh&&(Vt.setOptional(F,j,"batchingTexture"),Vt.setValue(F,"batchingTexture",j._matricesTexture,oe),Vt.setOptional(F,j,"batchingIdTexture"),Vt.setValue(F,"batchingIdTexture",j._indirectTexture,oe),Vt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Vt.setValue(F,"batchingColorTexture",j._colorsTexture,oe));const yi=ne.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&G.update(j,ne,Cn),(ci||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,Vt.setValue(F,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&q.environment!==null&&(en.envMapIntensity.value=q.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=QM()),ci){if(Vt.setValue(F,"toneMappingExposure",L.toneMappingExposure),Ke.needsLights&&sr(en,zi),$e&&Q.fog===!0&&nt.refreshFogUniforms(en,$e),nt.refreshMaterialUniforms(en,Q,pe,re,w.state.transmissionRenderTarget[C.id]),Ke.needsLights&&Ke.lightProbeGrid){const qt=Ke.lightProbeGrid;en.probesSH.value=qt.texture,en.probesMin.value.copy(qt.boundingBox.min),en.probesMax.value.copy(qt.boundingBox.max),en.probesResolution.value.copy(qt.resolution)}ks.upload(F,Qo(Ke),en,oe)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ks.upload(F,Qo(Ke),en,oe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Vt.setValue(F,"center",j.center),Vt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(F,"normalMatrix",j.normalMatrix),Vt.setValue(F,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const qt=Q.uniformsGroups;for(let bi=0,oa=qt.length;bi<oa;bi++){const sa=qt[bi];ge.update(sa,Cn),ge.bind(sa,Cn)}}return Cn}function sr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.sunLights.needsUpdate=q,C.sunLightShadows.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Na(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(C,q,ne){const Q=Z.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=q,Z.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ne=Z.get(C);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ne=0){xe=C,ae=q,X=ne;let Q=null,j=!1,$e=!1;if(C){const Xe=Z.get(C);if(Xe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(F.FRAMEBUFFER,Xe.__webglFramebuffer),fe.copy(C.viewport),Qe.copy(C.scissor),We=C.scissorTest,E.viewport(fe),E.scissor(Qe),E.setScissorTest(We),se=-1;return}else if(Xe.__webglFramebuffer===void 0)oe.setupRenderTarget(C);else if(Xe.__hasExternalTextures)oe.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Tt=C.depthTexture;if(Xe.__boundDepthTexture!==Tt){if(Tt!==null&&Z.has(Tt)&&(C.width!==Tt.image.width||C.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&($e=!0);const ot=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?Q=ot[q][ne]:Q=ot[q],j=!0):C.samples>0&&oe.useMultisampledRTT(C)===!1?Q=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?Q=ot[ne]:Q=ot,fe.copy(C.viewport),Qe.copy(C.scissor),We=C.scissorTest}else fe.copy(He).multiplyScalar(pe).floor(),Qe.copy(Ce).multiplyScalar(pe).floor(),We=lt;if(ne!==0&&(Q=$),E.bindFramebuffer(F.FRAMEBUFFER,Q)&&E.drawBuffers(C,Q),E.viewport(fe),E.scissor(Qe),E.setScissorTest(We),j){const Xe=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,ne)}else if($e){const Xe=q;for(let je=0;je<C.textures.length;je++){const ot=Z.get(C.textures[je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+je,ot.__webglTexture,ne,Xe)}}else if(C!==null&&ne!==0){const Xe=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,ne)}se=-1};function Bi(C){const q=Z.get(C);return(q.__readFormat!==C.format||q.__readType!==C.type)&&(q.__readFormat=C.format,q.__readType=C.type,q.__formatReadable=D.textureFormatReadable(C.format),q.__typeReadable=D.textureTypeReadable(C.type)),q}this.readRenderTargetPixels=function(C,q,ne,Q,j,$e,Ze,Xe=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(je=je[Ze]),je){E.bindFramebuffer(F.FRAMEBUFFER,je);try{const ot=C.textures[Xe],Tt=ot.format,Rt=ot.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe);const et=Bi(ot);if(et.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-Q&&ne>=0&&ne<=C.height-j&&F.readPixels(q,ne,Q,j,Ge.convert(Tt),Ge.convert(Rt),$e)}finally{const ot=xe!==null?Z.get(xe).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(C,q,ne,Q,j,$e,Ze,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(je=je[Ze]),je)if(q>=0&&q<=C.width-Q&&ne>=0&&ne<=C.height-j){E.bindFramebuffer(F.FRAMEBUFFER,je);const ot=C.textures[Xe],Tt=ot.format,Rt=ot.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xe);const et=Bi(ot);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.bufferData(F.PIXEL_PACK_BUFFER,$e.byteLength,F.STREAM_READ),F.readPixels(q,ne,Q,j,Ge.convert(Tt),Ge.convert(Rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const ln=xe!==null?Z.get(xe).__webglFramebuffer:null;E.bindFramebuffer(F.FRAMEBUFFER,ln);const Yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await x0(F,Yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,$e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ft),F.deleteSync(Yt),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ne=0){const Q=Math.pow(2,-ne),j=Math.floor(C.image.width*Q),$e=Math.floor(C.image.height*Q),Ze=q!==null?q.x:0,Xe=q!==null?q.y:0;oe.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,Ze,Xe,j,$e),E.unbindTexture()},this.copyTextureToTexture=function(C,q,ne=null,Q=null,j=0,$e=0){let Ze,Xe,je,ot,Tt,Rt,et,Ft,ln;const Yt=C.isCompressedTexture?C.mipmaps[$e]:C.image;if(ne!==null)Ze=ne.max.x-ne.min.x,Xe=ne.max.y-ne.min.y,je=ne.isBox3?ne.max.z-ne.min.z:1,ot=ne.min.x,Tt=ne.min.y,Rt=ne.isBox3?ne.min.z:0;else{const en=Math.pow(2,-j);Ze=Math.floor(Yt.width*en),Xe=Math.floor(Yt.height*en),C.isDataArrayTexture?je=Yt.depth:C.isData3DTexture?je=Math.floor(Yt.depth*en):je=1,ot=0,Tt=0,Rt=0}Q!==null?(et=Q.x,Ft=Q.y,ln=Q.z):(et=0,Ft=0,ln=0);const Gt=Ge.convert(q.format),gn=Ge.convert(q.type);let Ke;q.isData3DTexture?(oe.setTexture3D(q,0),Ke=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(oe.setTexture2DArray(q,0),Ke=F.TEXTURE_2D_ARRAY):(oe.setTexture2D(q,0),Ke=F.TEXTURE_2D),E.activeTexture(F.TEXTURE0),E.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const vn=E.getParameter(F.UNPACK_ROW_LENGTH),Lt=E.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=E.getParameter(F.UNPACK_SKIP_PIXELS),$n=E.getParameter(F.UNPACK_SKIP_ROWS),ci=E.getParameter(F.UNPACK_SKIP_IMAGES);E.pixelStorei(F.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),E.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),E.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const zi=C.isDataArrayTexture||C.isData3DTexture,Vt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const en=Z.get(C),yi=Z.get(q),qt=Z.get(en.__renderTarget),bi=Z.get(yi.__renderTarget);E.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let oa=0;oa<je;oa++)zi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,j,Rt+oa),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(q).__webglTexture,$e,ln+oa)),F.blitFramebuffer(ot,Tt,Ze,Xe,et,Ft,Ze,Xe,F.DEPTH_BUFFER_BIT,F.NEAREST);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||Z.has(C)){const en=Z.get(C),yi=Z.get(q);E.bindFramebuffer(F.READ_FRAMEBUFFER,H),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let qt=0;qt<je;qt++)zi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,j,Rt+qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,j),Vt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yi.__webglTexture,$e,ln+qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yi.__webglTexture,$e),j!==0?F.blitFramebuffer(ot,Tt,Ze,Xe,et,Ft,Ze,Xe,F.COLOR_BUFFER_BIT,F.NEAREST):Vt?F.copyTexSubImage3D(Ke,$e,et,Ft,ln+qt,ot,Tt,Ze,Xe):F.copyTexSubImage2D(Ke,$e,et,Ft,ot,Tt,Ze,Xe);E.bindFramebuffer(F.READ_FRAMEBUFFER,null),E.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ke,$e,et,Ft,ln,Ze,Xe,je,Gt,gn,Yt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ke,$e,et,Ft,ln,Ze,Xe,je,Gt,Yt.data):F.texSubImage3D(Ke,$e,et,Ft,ln,Ze,Xe,je,Gt,gn,Yt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,$e,et,Ft,Ze,Xe,Gt,gn,Yt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,$e,et,Ft,Yt.width,Yt.height,Gt,Yt.data):F.texSubImage2D(F.TEXTURE_2D,$e,et,Ft,Ze,Xe,Gt,gn,Yt);E.pixelStorei(F.UNPACK_ROW_LENGTH,vn),E.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt),E.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),E.pixelStorei(F.UNPACK_SKIP_ROWS,$n),E.pixelStorei(F.UNPACK_SKIP_IMAGES,ci),$e===0&&q.generateMipmaps&&F.generateMipmap(Ke),E.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&oe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?oe.setTextureCube(C,0):C.isData3DTexture?oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?oe.setTexture2DArray(C,0):oe.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){ae=0,X=0,xe=null,E.reset(),l.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const Ed={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},Sa={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},Sn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais compram melhorias permanentes na Oficina da nave."}]}],js=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],mo={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},Rr=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),Cr=(n,e,t)=>({copa:[n,e],copa2:t}),go=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Go=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:Rr(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:Rr(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:Rr(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:Rr(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:Rr(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:Rr(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:Cr(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:Cr(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:Cr(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:Cr(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:Cr(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:Cr(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:go(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:go(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:go(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:go(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:go(2755082,16769162,16756843)}],Co=n=>Go.find(e=>e.id===n),e_=n=>Go.find(e=>e.cat===n&&e.padrao),t_=n=>"#"+n.toString(16).padStart(6,"0"),Yh="curriculo-cassino-v1",xo=10,n_=100,Ad=50,sf=9,Kn=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],Jh=5,i_=["comum","rara","epica","lendaria"];function a_(){const n={};for(const e of js)n[e.id]=e_(e.id).id;return{fichas:n_,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function r_(){const n=a_();try{const e=JSON.parse(localStorage.getItem(Yh));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>Co(a)):[],i={...n.equipadas};for(const a of js){const r=e.equipadas?.[a.id],s=r&&Co(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function o_(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,A)=>{i(A),t.fillRect(p,m,1,1)},r=(p,m,A,v)=>{i(v);for(let x=-A-1;x<=A+1;x++)for(let T=-A-1;T<=A+1;T++)T*T+x*x<=A*A+.5&&t.fillRect(p+T,m+x,1,1)},s=(p,m,A,v,x)=>{i(x);for(let T=0;T<16;T++)for(let P=0;P<16;P++){const b=(P+.5-p)/A,S=(T+.5-m)/v;b*b+S*S<=1&&t.fillRect(P,T,1,1)}},o=(p,m)=>{i(m);for(let A=0;A<16;A++)for(let v=0;v<16;v++){const x=v+.5,T=A+.5;let P=!1;for(let b=0,S=p.length-1;b<p.length;S=b++){const[w,I]=p[b],[_,R]=p[S];I>T!=R>T&&x<(_-w)*(T-I)/(R-I)+w&&(P=!P)}P&&t.fillRect(v,A,1,1)}},f=(p,m,A,v,x)=>{i(x);const T=Math.max(Math.abs(A-p),Math.abs(v-m));for(let P=0;P<=T;P++)t.fillRect(Math.round(p+(A-p)*P/T),Math.round(m+(v-m)*P/T),1,1)};switch(n){case"cereja":f(5,9,9,3,"#4f8a3a"),f(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const A=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(A)*v,8.5+Math.sin(A)*v])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const c=t.getImageData(0,0,16,16),u=c.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let Ls=null,Ds=null;function pl(){return Ls??=new(window.AudioContext||window.webkitAudioContext),Ls.state==="suspended"&&Ls.resume(),Ls}function Ti(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{const s=pl(),o=s.currentTime+r,f=s.createOscillator(),c=s.createGain();f.type=i,f.frequency.value=e,c.gain.setValueAtTime(a,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),f.connect(c).connect(s.destination),f.start(o),f.stop(o+t+.02)}catch{}}function Pr(n,e,t=.03,i=.07,a=0){if(n.som)try{const r=pl();if(!Ds){Ds=r.createBuffer(1,Math.floor(r.sampleRate*.4),r.sampleRate);const u=Ds.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=r.currentTime+a,o=r.createBufferSource(),f=r.createBiquadFilter(),c=r.createGain();o.buffer=Ds,f.type="bandpass",f.frequency.value=e,f.Q.value=1.4,c.gain.setValueAtTime(i,s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(c).connect(r.destination),o.start(s,Math.random()*.3),o.stop(s+t+.02)}catch{}}function rc(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const r=pl(),s=r.currentTime+a,o=r.createOscillator(),f=r.createGain();o.type="sine",o.frequency.setValueAtTime(e,s),o.frequency.exponentialRampToValueAtTime(e*.4,s+t),f.gain.setValueAtTime(i,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(r.destination),o.start(s),o.stop(s+t+.02)}catch{}}function s_(n){if(!n.som)return null;try{const e=pl(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),r=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(r).connect(e.destination),i.start(t),{sair(s=.4){const o=e.currentTime;r.gain.cancelScheduledValues(o),r.gain.setValueAtTime(.045,o),r.gain.linearRampToValueAtTime(1e-4,o+s),i.frequency.cancelScheduledValues(o),i.frequency.setValueAtTime(84,o),i.frequency.linearRampToValueAtTime(40,o+s),i.stop(o+s+.05)}}}catch{return null}}const Xi=()=>Kn[Math.floor(Math.random()*Kn.length)],oc=()=>{let n=Math.random()*Kn.reduce((e,t)=>e+t.peso,0);for(const e of Kn)if(n-=e.peso,n<=0)return e;return Kn[0]},Zh=(n,e)=>Go.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function l_(n){for(const e of i_)if(Zh(n,e).length){const t=Kn.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function c_(n){let e=[oc(),oc(),oc()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=sf){const a=l_(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=Zh(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=Jh);return i}function f_({aoMudarSkins:n,aoMudarFichas:e}){const t=r_(),i=()=>{try{localStorage.setItem(Yh,JSON.stringify(t))}catch{}},a=(y,ye,Ne)=>{const F=document.createElement(y);return ye&&(F.className=ye),Ne!=null&&(F.textContent=Ne),F},r=Object.fromEntries(Kn.map(y=>[y.id,o_(y.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),f=a("button","cas-x","X");f.title="Fechar (Esc)";const c=a("div","cas-letreiro"),u=a("div","lampadas"),h=(y,ye)=>{const Ne=a("i",y);return Ne.style.setProperty("--i",ye),Ne};for(let y=0;y<9;y++)u.append(h("lampada",y));c.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),A=m.map(y=>{const ye=document.createElement("canvas");return ye.width=16,ye.height=48,y.append(ye),p.append(y),ye});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),x=a("div","cas-lcd"),T=a("div","cas-msg","PUXE A ALAVANCA!"),P=a("div","cas-fichas"),b=a("b");P.append(a("i","moeda"),b,a("span",null,"FICHAS")),x.append(T,P);const S=a("div","cas-premio");S.hidden=!0;const w=a("div","cas-botoes"),I=(y,ye,Ne,F=!1)=>{const ct=a("div","cas-bw"+(F?" grande":"")),Fe=a("i","led"),D=a("button",`cas-b3d ${ye}${F?" grande":""}`,y);return D.title=Ne,ct.append(Fe,D),w.append(ct),{b:D,led:Fe}},{b:_,led:R}=I("?","azul","Tabela de prêmios"),{b:L,led:U}=I("SKINS","rosa","Coleção de skins (C)"),{b:k,led:$}=I("GIRAR","vermelho",`Girar (-${xo} fichas) · Espaço`,!0),{b:H,led:V}=I("SOM","amarelo","Ligar ou desligar o som");U.classList.add("on");const ae=a("button","cas-b3d verde largo",`+${Ad} FICHAS DE CORTESIA`);ae.hidden=!0,w.append(ae);const X=a("div","cas-luzes");for(let y=0;y<14;y++)X.append(h("",y));v.append(x,S,w,X);const xe=a("button","cas-alavanca");xe.title="Puxar a alavanca · Espaço";const se=a("i","braco");se.append(a("i","haste"),a("i","bola")),xe.append(a("i","suporte"),se);const le=a("div","cas-bandeja");le.append(a("i","fenda"));const fe=a("div","cas-tabela");fe.hidden=!0;for(const y of Kn){const ye=a("div","cas-linha"),Ne=r[y.id].cloneNode();Ne.getContext("2d").drawImage(r[y.id],0,0),ye.append(Ne,a("span",null,`x3 = ${y.premio}`),a("small",null,mo[y.tier].nome.toLowerCase())),fe.append(ye)}fe.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${Jh} · a cada ${sf+1} giros sem trio, o próximo é garantido`)),o.append(f,c,d,v,xe,le,fe,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const Qe=a("div","cas-colecao-caixa");Qe.hidden=!0;const We=a("div","cas-colecao");Qe.append(We),s.append(o,Qe),document.body.append(s);let gt=!1,ht=!1,bt=!1;function re(y,ye,Ne){const F=A[y].getContext("2d");F.clearRect(0,0,16,48);const ct=Math.floor(Ne),Fe=Ne-ct;for(let D=0;D<4;D++){const E=ye[ct+D];E&&F.drawImage(r[E.id],0,Math.round((D-Fe)*16))}}const pe=(y,ye)=>re(y,ye,0);function Re(){b.textContent=String(t.fichas),e?.(t.fichas);const y=t.fichas<xo;k.disabled=ht||y,xe.disabled=ht||y,ae.hidden=!y||ht,H.classList.toggle("apagado",!t.som),V.classList.toggle("on",t.som),$.classList.toggle("on",!ht&&!y),R.classList.toggle("on",!fe.hidden),o.classList.toggle("girando",ht),o.classList.toggle("pronto",!ht&&!y),o.classList.toggle("sem-ficha",y)}function at(y,ye=""){T.textContent=y,T.className="cas-msg "+ye}function He(){We.replaceChildren();const y=a("div","cas-cabecalho"),ye=Go.filter(F=>!F.padrao).length,Ne=a("button","cas-btn","VOLTAR");Ne.onclick=()=>lt(!1),y.append(a("h3",null,`SKINS (${t.skins.length}/${ye})`),Ne),We.append(y);for(const F of js){We.append(a("h4",null,F.nome.toUpperCase()));const ct=a("div","cas-grade");for(const Fe of Go.filter(D=>D.cat===F.id)){const D=Fe.padrao||t.skins.includes(Fe.id),E=t.equipadas[F.id]===Fe.id,Y=a("div","cas-card"+(E?" equipada":"")+(D?"":" bloqueada"));Y.style.setProperty("--r",mo[Fe.raridade].cor);const Z=a("div","amostra"),oe=F.id==="planeta"?[Fe.cores.marFundo,Fe.cores.marRaso,Fe.cores.areia,Fe.cores.grama0,Fe.cores.grama2]:F.id==="arvores"?[Fe.cores.copa[0],Fe.cores.copa[1],Fe.cores.copa2]:[Fe.cores.fundo,Fe.cores.estrelas,Fe.cores.nuvens];for(const we of oe){const te=a("i");te.style.background=D?t_(we):"#2a2440",Z.append(te)}Y.append(Z,a("b",null,D?Fe.nome:"???"),a("small",null,mo[Fe.raridade].nome));const ve=a("button","cas-btn pequeno",E?"EQUIPADA":D?"EQUIPAR":"TRAVADA");ve.disabled=!D||E,ve.onclick=()=>Ce(Fe),Y.append(ve),ct.append(Y)}We.append(ct)}}function Ce(y){t.equipadas[y.cat]=y.id,i(),n({...t.equipadas}),Ti(t,660,.06),bt&&He()}function lt(y){bt=y,o.hidden=y,Qe.hidden=!y,y?He():k.focus()}function ce(y=0){if(!gt||ht||t.fichas<xo)return;t.fichas-=xo,t.giros+=1;const ye=c_(t);ht=!0,S.hidden=!0,p.classList.remove("vitoria"),o.classList.remove("vitoria"),at("GIRANDO..."),Re();const Ne=[Xi(),Xi(),Xi()],F=[Xi(),Xi(),Xi()];for(const ve of[Ne,F])ve[0]===ve[1]&&ve[1]===ve[2]&&(ve[2]=Kn[(Kn.indexOf(ve[2])+1)%Kn.length]);const ct=14,Fe=450,D=[1100,1600,2100],E=D.map(ve=>Math.round(ct*(ve-Fe)/1e3)+3),Y=ye.simbolos.map((ve,we)=>{const te=[Ne[we],ve,F[we]];for(;te.length<E[we]+3;)te.push(Xi());return te}),Z=(ve,we)=>{const te=D[ve]-Fe;return we<te?E[ve]-ct*we/1e3:3*(1-Math.min(1,(we-te)/Fe))**3},oe=()=>{const ve=performance.now(),we=[!1,!1,!1],te=[-1,-1,-1];let ue=!1;const Be=s_(t);for(const Ie of m)Ie.classList.add("girando");const nt=Ie=>{const Pe=Math.max(0,Ie-ve);for(let Ve=0;Ve<3;Ve++)if(!we[Ve])if(Pe>=D[Ve])we[Ve]=!0,m[Ve].classList.remove("girando"),re(Ve,Y[Ve],0),rc(t,150-Ve*12,.13,.11),Pr(t,1100+Ve*350,.06,.09),Ti(t,330+Ve*110,.1,"square",.025);else{const ft=Z(Ve,Pe);re(Ve,Y[Ve],ft);const dt=Math.floor(ft);dt!==te[Ve]&&(te[Ve]>=0&&Pr(t,1500+Ve*450,.022,.05),te[Ve]=dt)}!ue&&Pe>=D[2]-Fe&&(ue=!0,Be?.sair(Fe/1e3+.1)),we.every(Boolean)?Se(ye):requestAnimationFrame(nt)};requestAnimationFrame(nt)};y>0?setTimeout(oe,y):oe()}function Me(y){const ye=Math.min(10,Math.max(2,Math.ceil(y/25)));for(let Ne=0;Ne<ye;Ne++){const F=a("i","moeda caindo");F.style.left=`${14+Math.random()*68}%`,F.style.animationDelay=`${Ne*.09}s`,F.addEventListener("animationend",()=>F.remove()),le.append(F),Pr(t,3400+Math.random()*900,.04,.05,.55+Ne*.09)}}function Se(y){if(ht=!1,t.fichas+=y.fichas,t.semTrio=y.tipo==="trio"?0:t.semTrio+1,y.skin&&t.skins.push(y.skin.id),i(),y.fichas>0&&Me(y.fichas),y.tipo==="trio"?(at(`TRIO! +${y.fichas}`,"ganhou"),p.classList.add("vitoria"),o.classList.add("vitoria"),[523,659,784,1047].forEach((ye,Ne)=>Ti(t,ye,.14,"square",.05,Ne*.11))):y.tipo==="par"?(at(`PAR! +${y.fichas}`,"par"),Ti(t,523,.1),Ti(t,659,.1,"square",.04,.1)):at(t.semTrio>=sf?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),y.skin){S.replaceChildren(),S.style.setProperty("--r",mo[y.skin.raridade].cor);const ye=js.find(F=>F.id===y.skin.cat).nome;S.append(a("b",null,"NOVA SKIN!"),a("span",null,`${ye}: ${y.skin.nome} (${mo[y.skin.raridade].nome})`));const Ne=a("button","cas-mini","EQUIPAR");Ne.onclick=()=>{Ce(y.skin),Ne.disabled=!0,Ne.textContent="OK"},S.append(Ne),S.hidden=!1,[784,988,1175,1568].forEach((F,ct)=>Ti(t,F,.18,"triangle",.06,.5+ct*.12))}Re()}function Ae(){if(!(!gt||ht||t.fichas<xo)){xe.classList.add("puxada"),o.classList.add("puxando"),setTimeout(()=>{xe.classList.remove("puxada"),o.classList.remove("puxando")},1150);for(let y=0;y<5;y++)Pr(t,2600-y*150,.03,.07,.07+y*.045);rc(t,95,.2,.15,.34),Pr(t,900,.07,.1,.34),rc(t,330,.1,.05,.76),Pr(t,2200,.05,.06,.9),ce(360)}}function Te(){gt||(gt=!0,s.classList.add("aberto"),fe.hidden=!0,lt(!1),Re(),k.focus())}function qe(){!gt||ht||(gt=!1,s.classList.remove("aberto"))}k.onclick=()=>ce(),xe.onclick=Ae,_.onclick=()=>{fe.hidden=!fe.hidden,Re()},L.onclick=()=>lt(!0),f.onclick=qe,ae.onclick=()=>{t.fichas+=Ad,i(),Re(),at("FICHAS DE CORTESIA!"),Ti(t,880,.1)},H.onclick=()=>{t.som=!t.som,i(),Re(),Ti(t,660,.06)},s.addEventListener("pointerdown",y=>{y.target===s&&qe()}),window.addEventListener("keydown",y=>{gt&&(y.code==="Escape"?(y.preventDefault(),bt?lt(!1):qe()):y.code==="Space"&&!bt&&![L,_,H,ae,f].includes(document.activeElement)?(y.preventDefault(),Ae()):y.code==="KeyC"&&(y.preventDefault(),lt(!bt)))},!0);for(let y=0;y<3;y++)pe(y,[Xi(),Kn[y*2%Kn.length],Xi()]);return Re(),n({...t.equipadas}),{abrir:Te,fechar:qe,estaAberto:()=>gt,adicionarFichas:y=>{t.fichas+=y,i(),Re()},bip:(...y)=>Ti(t,...y),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Re(),t.som&&Ti(t,660,.06),t.som)}}function wn(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,f,c){a(c),i.fillRect(r,s,o,f)},disco(r,s,o,f){a(f);for(let c=-o-1;c<=o+1;c++)for(let u=-o-1;u<=o+1;u++)u*u+c*c<=o*o+.5&&i.fillRect(r+u,s+c,1,1)},elipse(r,s,o,f,c){a(c);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/f;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=f+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,A]=r[d],[v,x]=r[p];A>u!=x>u&&c<(v-m)*(u-A)/(x-A)+m&&(h=!h)}h&&i.fillRect(f,o,1,1)}},linha(r,s,o,f,c){a(c);const u=Math.max(Math.abs(o-r),Math.abs(f-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(f-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,f=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,c=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!f(h,u)&&(f(h+1,u)||f(h-1,u)||f(h,u+1)||f(h,u-1))&&c.push([h,u]);a(r);for(const[u,h]of c)i.fillRect(u,h,1,1);return this}}}function Bf(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function Bt(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const Td=n=>n*n*(3-2*n);function jn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=Td(n-i),s=Td(e-a),o=Bt(i,a,t),f=Bt(i+1,a,t),c=Bt(i,a+1,t),u=Bt(i+1,a+1,t);return o+(f-o)*r+(c-o)*s+(o-f-c+u)*r*s}const zf=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Kh=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function u_(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=wn(a,r),o=a/2,f=r/2,c=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(f+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};c(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(Bt(d,e,1)-.5)*1.3,y:(Bt(d,e,2)-.5)*1.3,r:.12+Bt(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-f)/t,A=p*p+m*m;if(A>1)continue;const v=Math.sqrt(1-A),T=p*-.5+m*-.55+v*.67+(zf[h%4*4+d%4]-.5)*.24;let P=T<.1?0:T<.4?1:T<.68?2:3,b=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+jn(p*1.6+e,m*3,5)*2.2)>.15&&(b=n.palB),n.terra&&jn(p*2.4+e,m*2.4,7)>.52&&(b=n.palB);let S;n.nuvens&&jn(p*3+e,m*3,9)>.62&&(S=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][P]),u.some(w=>(p-w.x)**2+(m-w.y)**2<w.r*w.r)&&(P=Math.max(0,P-1)),n.lava&&Math.abs(jn(p*3.2+e,m*3.2,11)-.5)<.035&&(S=P>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,S||b[P])}return c(!0),s.contorno("#0b1026").c}const d_=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],h_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],p_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],An=(n,e,t)=>(jn(n,e,t)*.5+jn(n*2,e*2,t+1)*.25+jn(n*4,e*4,t+2)*.125+jn(n*8,e*8,t+3)*.0625)/.9375;function Zn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=t(f,o,(f+.5)/n*2-1,(o+.5)/e*2-1);if(!c)continue;const u=Math.min(f,n-1-f,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<zf[o%4*4+f%4])continue;const h=(o*n+f)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=c[3]}return a.putImageData(r,0,0),i}const Tn=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(zf[t%4*4+e%4]-.5)*.9+.5))),Dn=(n,e,t)=>[...n[t-1],e[t-1]];function hi(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function sc(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(Bt(r,t,1)*n.width),Math.floor(Bt(r,t,2)*n.height),1,1)}function m_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[f,c]=n[r];o>t!=c>t&&e<(f-s)*(t-o)/(c-o)+s&&(i=!i)}return i}const g_={orion(){const n=Zn(150,112,(e,t,i,a)=>{const r=i*1.18+(An(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(An(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),f=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),c=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=An(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=Tn(Math.min(1,(o*.9+f+c)*(.3+u*1.2)+h),e,t,5);return d?Dn([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});sc(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])hi(n,e,t,1);return hi(n,.2,.2,3,"#bcd0ff"),hi(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=Zn(130,124,(t,i,a,r)=>{for(let c=0;c<n.length;c++){const u=n[c],h=(An(r*2.5+c*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(An(a*6+c,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const A=(u.cx+h+d-a)/(2*d),v=An(a*9,r*9,70),x=A<.14+v*.12?[235,160,70]:A<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[x[0],x[1],x[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const A=Tn((.16-m)/.16*.9,t,i,3);if(A)return Dn([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],A)}}const s=An(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),f=Tn(o,t,i,3);return f?Dn(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],f):null});return sc(e,25,9),hi(e,.49,.13,2,"#bff6ff"),hi(e,.24,.4,1,"#ffe0b0"),hi(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=Zn(110,104,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(o/.92,f/.74);if(c>1||c>.78&&jn(o*9,f*9,93)<(c-.78)*4.5)return null;const u=1-Math.abs(jn(o*8+3,f*8,90)-.5)*2,h=1-Math.abs(jn(o*14,f*14+5,91)-.5)*2;if(u>.85&&c>.3)return[255,130,55,240];if(h>.92&&c>.2)return[120,200,255,220];const d=Tn((1-c)*.7*(.4+An(o*3,f*3,92)),i,a,3);return d?Dn([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return hi(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=Zn(112,112,(t,i,a,r)=>{if(m_(n,t+.5,i+.5))return[10,5,18,255];const s=An(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),f=Tn(o,t,i,4);return f?Dn([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],f):null});return sc(e,30,13),hi(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return Zn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,f=Math.hypot(s,o),c=Math.atan2(o,s),u=.5+.5*Math.sin(2*c-f*10),h=Math.max(0,1-f)*(.25+.75*u)*(.5+An(s*4,o*4,110)),d=Math.abs(f-.55)<.06?.5*jn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-f*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=Tn(p,t,i,5);return m?Dn([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return Zn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*jn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=Tn(a*1.1+r+s,n,e,5);return o?Dn([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=Zn(110,100,(t,i,a,r)=>{let s=0;for(const[f,c,u]of n)s+=Math.exp(-Math.hypot((t/110-f)*1.1,i/100-c)/.14*(7-u*.4));const o=Tn(Math.min(1,s*(.4+An(a*3,r*3,125))),t,i,4);return o?Dn([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)hi(e,t,i,a,"#cfe0ff");return e},helice(){const n=Zn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*An(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*An(i*6,a*6,121),f=Math.exp(-(((r-.62)/.13)**2)),c=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=Tn(Math.min(1,(f+c+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return hi(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=Zn(150,100,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(r,s),u=Math.exp(-((f/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*An(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-c*9),m=Tn(Math.min(1,p+u+h+d),i,a,5);return m?Dn([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return hi(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(Zn(180,110,(s,o)=>{const f=s+.5-90,c=o+.5-55,u=Math.hypot(f,c);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=An(f*.06-r*.18,c*.4,140);let d=0;const p=5.5*(1-Math.abs(f)/95);if(Math.abs(f)>17&&Math.abs(f)<90&&Math.abs(c)<p&&(d=1-Math.abs(c)/p),u>19.5&&u<36&&c<0&&Math.abs(c)>Math.abs(f)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&c>0&&c>Math.abs(f)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=Tn(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return v?Dn([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-f/95),A=Tn(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return A?Dn([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],A):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),f=Math.cos(.5),c=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,A,v,x])=>{let T=m*s-x*o;const P=m*o+x*s;let b=A*f-v*c,S=A*c+v*f;const w=T*u+S*h;S=-T*h+S*u,T=w;const I=2.6/(2.6-P*.9),_=3.6/(3.6-S*I*.7);return{x:124/2+T*I*_*19,y:124/2+b*I*_*19,w:P}}),p=wn(124,124);for(const[m,A]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${A})`);for(const[m,A]of i){const v=(d[m].w+d[A].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[A].x),Math.round(d[A].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),f=Math.sin(s);a.push(Zn(150,150,(c,u)=>{const h=c+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*f,A=-h*f+d*o,v=1.1+.07*Math.abs(m),x=Math.abs(m)<70?Math.exp(-((A/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,T=Math.exp(-p/11)*.8,P=Math.abs(p-34)<.8?.35:0,b=Tn(Math.min(1,x+T+P),c,u,5);return b?Dn([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],b):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(Zn(120,120,(s,o)=>{const f=s+.5-60,c=o+.5-60,u=Math.hypot(f,c),h=Math.atan2(c,f);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const A=Tn(Math.exp(-(u-47.5)/3)*.55,s,o,2);return A?Dn([[120,90,220],[190,160,255]],[60,110],A):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=Tn(Math.min(1,p),s,o,4);return Dn([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+Bt(s,150,1)*146,10+Bt(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,f],[c,u])=>{const h=c-o,d=u-f,p=Math.max(0,Math.min(1,((r-o)*h+(s-f)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(f+d*p))};return Zn(170,124,(r,s,o,f)=>{let c=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);c+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+An(r*.2,s*.2,151))}for(const[h,d]of t)c+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=Tn(Math.min(1,c),r,s,4);return u?Dn([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},x_={},v_=n=>x_[n]??=g_[n](),kr=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let M_=null;const Qh=()=>M_??=Kh.map((n,e)=>u_(n,e*13+3));function __(n,e){const t=Qh(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,f=-1,c=1;function u(m){if(c<1&&(c=Math.min(1,c+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const A=.35+Math.random()*.3,v=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(A)*v,vy:Math.sin(A)*v,vida:0,max:1.4})}for(const A of r)A.x+=A.vx*m,A.y+=A.vy*m,A.vida+=m;r=r.filter(A=>A.vida<A.max&&A.x<n+20&&A.y<e+20)}function h(m,A,v,x,T,P){const b=m*v,S=A*v,w=Math.floor((b-n/2-T)/x),I=Math.floor((b+n/2+T)/x),_=Math.floor((S-e/2-T)/x),R=Math.floor((S+e/2+T)/x);for(let L=_;L<=R;L++)for(let U=w;U<=I;U++)P(U,L,U*x-b+n/2,L*x-S+e/2)}function d(m,A,v,x,T){const P=kr[T%kr.length],b=T%kr.length;m.fillStyle=P.base,m.fillRect(0,0,n,e),h(A,v,.06,400,160,(S,w,I,_)=>{if(Bt(S,w,90+b)>.7)return;const R=70+Bt(S,w,91)*80,L=P.nebulosas[Math.floor(Bt(S,w,92)*P.nebulosas.length)],U=I+Bt(S,w,93)*400,k=_+Bt(S,w,94)*400;for(let $=0;$<5;$++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(U),Math.round(k),Math.max(0,R*(1-$*.18)),0,Math.PI*2),m.fill()}),h(A,v,.1,360,170,(S,w,I,_)=>{if(Bt(S,w,200+b*3)>.8)return;const R=v_(P.objetos[Math.floor(Bt(S,w,201)*P.objetos.length)]),L=Array.isArray(R)?R[Math.floor(x*R.fps+Bt(S,w,204)*R.length)%R.length]:R,U=I+(.1+Bt(S,w,202)*.6)*360,k=_+(.1+Bt(S,w,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(U-L.width/2),Math.round(k-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${P.tom}, 0.05)`,m.fillRect(0,0,n,e),h_.forEach((S,w)=>{m.globalAlpha=S.alfa,h(A,v,S.f,S.cel,130,(I,_,R,L)=>{if(Bt(I,_,S.semente)>S.prob*(P.planetas??1))return;const U=Math.floor(Bt(I,_,S.semente+1)*t.length),k=S.escalaMax>1&&Kh[U].r<=15&&Bt(I,_,S.semente+2)<.4?2:1,$=t[U],H=R+(.15+Bt(I,_,S.semente+3)*.7)*S.cel,V=L+(.15+Bt(I,_,S.semente+4)*.7)*S.cel;m.drawImage($,Math.round(H-$.width*k/2),Math.round(V-$.height*k/2),$.width*k,$.height*k)});for(const I of p_){if(I.camada!==w)continue;const _=t[I.tipo],R=I.x-A*S.f+n/2,L=I.y-v*S.f+e/2;m.drawImage(_,Math.round(R-_.width*I.escala/2),Math.round(L-_.height*I.escala/2),_.width*I.escala,_.height*I.escala)}m.globalAlpha=1});for(const S of d_)h(A,v,S.f,S.cel,4,(w,I,_,R)=>{for(let L=0;L<S.n;L++){const U=Math.round(_+Bt(w,I,L*7+1)*S.cel),k=Math.round(R+Bt(w,I,L*7+2)*S.cel);if(U<-2||U>n+2||k<-2||k>e+2)continue;const $=S.cores[Math.floor(Bt(w,I,L*7+3)*S.cores.length)],H=Bt(w,I,L*7+4)*6.28,V=1+Bt(w,I,L*7+5)*2.2;(!S.pisca||Math.sin(x*V+H)>-.35)&&(m.fillStyle=$,m.fillRect(U,k,1,1),S.grande&&Bt(w,I,L*7+6)<S.grande&&(m.fillRect(U-1,k,3,1),m.fillRect(U,k-1,1,3)))}})}function p(m,A,v,x,T=0){T!==o&&(f=o,o=T,c=f<0?1:0),c<1&&f>=0?(d(m,A,v,x,f),d(a,A,v,x,o),m.globalAlpha=c,m.drawImage(i,0,0),m.globalAlpha=1):d(m,A,v,x,o);for(const P of r){const b=1-P.vida/P.max;for(let S=0;S<12;S++){const w=Math.round(P.x-P.vx*S*.011),I=Math.round(P.y-P.vy*S*.011);m.globalAlpha=Math.max(0,b*(1-S/12)),m.fillStyle=S<2?"#ffffff":"#8bd3ff",m.fillRect(w,I,S<2?2:1,S<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const Gn=520,Ga=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function S_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const A=m.getContext("2d");return A.drawImage(p,0,0),A.globalCompositeOperation="source-atop",A.fillStyle="rgba(70, 40, 110, 0.55)",A.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},A=P=>Ga(d,p,300+P),v=d*Gn,x=p*Gn;if(A(1)>=.5)return m;const T=A(2);if(T<.22){const P=Qh(),b=Math.floor(A(3)*P.length),S=P[b],w=(S.height-2)/2,I=w>=13?2:3,_=v+90+A(4)*(Gn-180),R=x+90+A(5)*(Gn-180);if(r(_,R,70)){const L=w*I*.92;m.planetas.push({x:_,y:R,spr:S,esc:I}),m.circ.push({x:_,y:R,r:L})}}else if(T<.62){const P=A(5)*Math.PI*2,b=150+A(6)*130,S=(A(7)-.5)*70,w=v+120+A(8)*(Gn-240),I=x+120+A(9)*(Gn-240),_=(.2+.6*A(10))*b,R=A(11)<.5?(_/b+.4)%1*b:-999,L=Math.floor(b/13);for(let U=0;U<=L;U++){const k=U/L,$=k*b;if(Math.abs($-_)<24||Math.abs($-R)<24)continue;const H=Math.sin(k*Math.PI)*S,V=w+Math.cos(P)*$-Math.sin(P)*H,ae=I+Math.sin(P)*$+Math.cos(P)*H;if(!r(V,ae,10))continue;const X=Ga(d*31+U,p,330)<.6?0:1,xe=[8,10][X];m.rochas.push({x:V,y:ae,tam:X}),m.circ.push({x:V,y:ae,r:xe*.85})}}else{const P=70+A(11)*50,b=v+P+A(12)*(Gn-2*P),S=x+P+A(13)*(Gn-2*P);if(r(b,S,P)){const w=Array.from({length:34},(I,_)=>{const R=Ga(d,p,400+_)*Math.PI*2,L=Math.sqrt(Ga(d,p,440+_))*P*.95;return{dx:Math.cos(R)*L,dy:Math.sin(R)*L,tam:1+Math.floor(Ga(d,p,480+_)*3),cor:Ga(d,p,520+_)<.5?"#9a8a7a":"#6a5a50",fase:Ga(d,p,560+_)*6.28}});m.zonas.push({x:b,y:S,r:P,pedrinhas:w})}}return m}const o=(d,p)=>{const m=d+","+p;let A=i.get(m);return A||(A=s(d,p),i.set(m,A)),A};function f(d,p,m){const A=Math.floor(d/Gn),v=Math.floor(p/Gn);for(let x=-1;x<=1;x++)for(let T=-1;T<=1;T++)m(o(A+T,v+x))}function c(d,p){let m=1;return f(d,p,A=>{for(const v of A.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,A=0){let v=!1;return f(d.x,d.y,x=>{for(const T of x.circ){const P=d.x-T.x,b=d.y-T.y,S=T.r+p;if(Math.abs(P)>S||Math.abs(b)>S)continue;const w=Math.hypot(P,b)||.001;if(w>=S)continue;const I=P/w,_=b/w;if(d.x=T.x+I*S,d.y=T.y+_*S,v=!0,m&&A>0){const R=-_,L=I,U=Math.sign((m.x-d.x)*R+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=R*U*A,d.y+=L*U*A}}}),v}function h(d,p,m,A,v,x){const T=Math.floor((p-200)/Gn),P=Math.floor((p+A+200)/Gn),b=Math.floor((m-200)/Gn),S=Math.floor((m+v+200)/Gn),w=(I,_,R)=>I>p-R&&I<p+A+R&&_>m-R&&_<m+v+R;for(let I=b-1;I<=S+1;I++)for(let _=T-1;_<=P+1;_++){const R=o(_,I);for(const L of R.zonas)if(w(L.x,L.y,L.r+10)){for(let U=0;U<4;U++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-U*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const U of L.pedrinhas)d.fillStyle=U.cor,d.fillRect(Math.round(L.x+U.dx+Math.sin(x*.6+U.fase)*2),Math.round(L.y+U.dy+Math.cos(x*.5+U.fase)*2),U.tam,U.tam)}for(const L of R.planetas)w(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of R.rochas){if(!w(L.x,L.y,20))continue;const U=a[L.tam];d.drawImage(U,Math.round(L.x-U.width/2),Math.round(L.y-U.height/2))}}}return{fatorLento:c,empurrar:u,desenhar:h,celula:o}}const Ri="#0b1026",el=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],ya=n=>({quadros:n,brancos:n.map(Bf)});function y_(n){const e=el[n%el.length],t=(c,u,h,d)=>{c.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),c.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=ya([0,1].map(c=>{const u=wn(16,16),h=c?10:9.5;if(u.elipse(8,h,c?6.5:6,c?3.6:4.3,e.slime[0]),u.elipse(8,c?11:10.8,c?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,c?7:6,e.slime[1]);return e.chifres&&t(u,4,10,c?3:2),u.retangulo(4,c?8:7,2,2,e.olho),u.retangulo(9,c?8:7,2,2,e.olho),u.pixel(5,c?9:8,"#1b1020"),u.pixel(10,c?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,c?6:5,2,2,e.olho),u.pixel(8,c?7:6,"#1b1020")),u.contorno(Ri).c})),a=ya([0,1].map(c=>{const u=wn(18,16),h=c?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(Ri).c})),r=ya([0,1].map(c=>{const u=wn(20,20);u.disco(10,12+c,7,e.ogro[0]),u.disco(10,13+c,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+c],[5,1+c],[7,7+c]],h),u.poligono([[13,7+c],[15,1+c],[17,7+c]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+c,e.ogro[1]);return u.retangulo(5,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+c,"#1b1020"),u.pixel(11,11+c,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+c,2,2,e.olho),u.pixel(10,9+c,"#1b1020")),u.retangulo(7,15+c,6,2,"#1b1020"),u.pixel(8,15+c,"#ffffff"),u.pixel(11,15+c,"#ffffff"),u.contorno(Ri).c})),s=ya([0,1].map(c=>{const u=wn(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+c)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(Ri).c})),o=ya([0,1].map(c=>{const u=wn(16,17);return u.pixel(8,0,c?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(Ri).c})),f=ya([0,1].map(c=>{const u=wn(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=c?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(Ri).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:f}}function b_(n){const e=el[n%el.length];return ya([0,1].map(t=>{const i=wn(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(Ri).c}))}function E_(){return ya([0,1].map(n=>{const e=wn(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(Ri).c}))}function lc(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function A_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,f)=>{const c=f/11*Math.PI*2,u=n*(.8+lc(e*7+1,f)*.35);return[i+Math.cos(c)*u,a+Math.sin(c)*u]}),s=(o,f,c)=>r.map(([u,h])=>[i+(u-i)*o+f,a+(h-a)*o+c]);return{r:n,quadros:[0,1,2].map(o=>{const f=wn(t,t);f.poligono(r,"#5a606c"),f.poligono(s(.88,-.7,-.7),"#7a808d"),f.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let c=0;c<3+e;c++)f.disco(Math.round(i+(lc(e,c+20)-.5)*n*1.2),Math.round(a+(lc(e,c+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(f.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),f.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(f.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),f.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),f.contorno(Ri).c})}})}function T_(){const n=t=>{const i=wn(12,12);return t(i),i.contorno(Ri).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,f=s%2?a:i;return[6+Math.cos(o)*f,6+Math.sin(o)*f]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function w_(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let f=-r;f<=r;f++)for(let c=-r;c<=r;c++){const u=Math.hypot(c,f);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(f,c)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+c,o+f,1,1)}n.globalAlpha=1}const lf="#0b1026",R_=n=>({quadros:n,brancos:n.map(Bf)}),yt=(n,e,t)=>R_([0,1].map(i=>{const a=wn(n,e);return t(a,i),a.contorno(lf).c})),C_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((f,c)=>{const u=t[f];u&&n.retangulo(a+c*i,r+o*i,i,i,u)})),va=(n,e,t,i,a,r=1,s=0,o=0)=>yt(n,e,(f,c)=>C_(f,c?i:t,a,r,s,o)),Pa=(n,e)=>n.map(([t,i])=>[e-1-t,i]),jh=(n,e,t,i)=>e.forEach(([a,r,s,o],f)=>n.linha(a,r,s+((f+t)%2?1:0),o,i)),wd=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],Rd=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function P_(){const n=f=>({x:f,y:"#ffffff"}),e=va(16,12,wd,Rd,n("#5be37a"),1,2,2),t=va(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=va(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=va(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=va(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=va(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=va(56,38,wd,Rd,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function I_(){const n=va(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=yt(18,14,(o,f)=>{const c=f?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=f?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(c,"#a56bff"),o.poligono(Pa(c,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(Pa(u,18),"#d1b0ff"),o.disco(f?4:3,f?10:4,1,"#ffe14a"),o.disco(f?13:14,f?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=yt(20,18,(o,f)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const c of[0,1,2]){const u=8+c*3;o.linha(3,u,1,u+1+(f?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(f?0:2),"#1b2a2a")}}),i=yt(14,17,(o,f)=>{const c=f?1:0;o.elipse(3,6+c,3,1.6,"#bfe6ff"),o.elipse(10,6+c,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=yt(16,17,(o,f)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,f?"#ff3b4a":"#ffd23f"),o.pixel(10,2,f?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,lf),o.pixel(13,7,lf),jh(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],f,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=yt(12,10,(o,f)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const c=f?4:1;o.elipse(2.5,c+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,c+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=yt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*6;o.linha(10,u,2,u+6+(f?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(f?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(f?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(f?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,f?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,f?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function L_(){const n=yt(16,16,(o,f)=>{const c=f?0:1;o.disco(8,10+c,6,"#f4efe0"),o.disco(8,10+c,4,"#ff9a3a"),o.disco(8,10+c,2,"#f4efe0"),o.pixel(4,8+c,"#ff9a3a"),o.disco(9,3+c,3,"#f4efe0"),o.pixel(10,3+c,"#1b1020"),o.pixel(10,4+c,"#1b1020"),o.retangulo(7,2+c,4,1,"#8b93a8"),o.linha(8,0+c,8,1+c,"#8b93a8")}),e=yt(18,16,(o,f)=>{const c=f?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-c/2],[1,7-c/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-c/2],[17,7-c/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+c/2],[1,11+c/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+c/2],[17,11+c/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-c/2],[16,5-c/2],[1,10+c/2],[16,10+c/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=yt(20,20,(o,f)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const c of[7,14]){const u=f?1:-1;o.retangulo(c,10,2,5,"#aab3c8"),o.retangulo(c+u,15,2,4,"#8b93a8"),o.retangulo(c+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=yt(14,17,(o,f)=>{const c=f?1:0;o.disco(7+c,6,5,"#f4f4fa"),o.poligono([[3+c,5],[6+c,5],[5+c,8],[3+c,7]],"#1b1020"),o.poligono([[11+c,5],[8+c,5],[9+c,8],[11+c,7]],"#1b1020"),o.retangulo(6+c,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=yt(16,17,(o,f)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+f,"#ffd23f"),o.retangulo(12,14,2,2+f,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,f?"#ff3b4a":"#ffd23f")}),r=yt(12,11,(o,f)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,f?"#8bd3ff":"#ffffff")}),s=yt(56,38,(o,f)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let c=12;c<44;c+=4)o.pixel(c,22,"#5a6176"),o.pixel(c+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,f?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[c,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(c,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,f?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function D_(){const n=yt(16,14,(o,f)=>{for(let c=0;c<5;c++)o.disco(3+c*2,9+Math.round(Math.sin(c*1.2+f*2.4)*2),2,c%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=yt(18,16,(o,f)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const c=f?0:1;o.retangulo(8+c,0,1,2,"#ffffff"),o.retangulo(8+c,14,1,2,"#ffffff"),o.retangulo(0,8-c,2,1,"#ffffff"),o.retangulo(16,8-c,2,1,"#ffffff")}),t=yt(22,18,(o,f)=>{jh(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],f,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,f?5:6,0,"#4a2a10"),o.linha(13,2,f?17:16,0,"#4a2a10")}),i=yt(14,17,(o,f)=>{const c=f?1:0;o.elipse(7,6+c,5.5,6,"#a8b0b8"),o.elipse(7,4+c,4,3,"#c0c8d0"),o.poligono([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],"#0b1026"),o.poligono(Pa([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],14),"#0b1026"),o.retangulo(6,14+c,2,3,"#8a929a"),o.retangulo(4,12+c,6,2,"#8a929a"),o.pixel(3,6+c,"#ffffff"),o.pixel(10,6+c,"#ffffff")}),a=yt(16,17,(o,f)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,f?"#ffffff":"#8bd3ff"),o.pixel(14,7,f?"#8bd3ff":"#ffffff")}),r=yt(12,8,(o,f)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const c of[3,5,7])o.pixel(c+(f?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=yt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*5;o.linha(12,u,2,u+8+(f?3:0),"#3a2008"),o.linha(44,u,54,u+8+(f?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(f?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(f?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,f?12:16,0,"#4a2a10"),o.linha(32,3,f?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function N_(){const n=yt(14,16,(o,f)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const c=f?3:1;o.poligono([[2,6],[4,6-c],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-c],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-c],[9,5]],"#a09060"),f&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=yt(18,10,(o,f)=>{for(let c=0;c<6;c++)o.disco(15-c*2.5,5+Math.round(Math.sin(c*1.4+f*3)*2),c===0?2:1,c===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=yt(20,20,(o,f)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const c of[4,6,13,15])o.linha(c,3,c+(c<10?-2:2),11+(f?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,f?"#ff3b4a":"#7a1f2a")}),i=yt(14,17,(o,f)=>{const c=f?1:0;o.poligono([[10,0+c],[13,4+c],[6,9+c],[3,6+c]],"#1f2a3a"),o.poligono([[10,1+c],[12,4+c],[8,4+c]],"#4a6a8a"),o.poligono([[3,6+c],[6,9+c],[5,11+c],[2,9+c]],"#2a3a4a"),o.pixel(3,9+c,"#ffffff"),o.pixel(5,10+c,"#ffffff"),o.pixel(7,10+c,"#ffffff"),o.retangulo(5,11+c,5,5,"#1f2a3a"),o.linha(10,11+c,13,15,"#1f2a3a")}),a=yt(16,17,(o,f)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,f?"#7dff3a":"#3a9a1f");for(const c of[5,7,9])o.pixel(c,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(f?7:8,14,"#7dff3a"),o.pixel(f?8:7,15,"#7dff3a")}),r=yt(12,10,(o,f)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const c of[1,3,8,10])o.linha(c,3,c<6?c-1:c+1,8+(f?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=yt(56,38,(o,f)=>{for(const c of[8,14,42,48])o.linha(c<28?c+6:c-6,20,c,34+(f?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const c of[18,24,32,38])o.linha(c,4,c+(c<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let c=21;c<36;c+=2)o.pixel(c,20,"#ffffff"),o.pixel(c,24,"#ffffff");o.retangulo(25,22,6,2,f?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function U_(){const n=yt(16,14,(o,f)=>{const c=f?0:1;o.disco(8,8+c,6,"#ffe14a"),o.disco(7,7+c,3,"#fff08a"),o.pixel(5,6+c,"#1b1020"),o.pixel(10,6+c,"#1b1020"),o.poligono([[7,8+c],[9,8+c],[8,10+c]],"#ff9a3a"),o.pixel(8,2+c,"#ffe14a"),o.pixel(9,1+c,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=yt(18,14,(o,f)=>{const c=f?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(c,"#2a2a3a"),o.poligono(Pa(c,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=yt(20,20,(o,f)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const c of[7,10,13])o.pixel(c,14+(f?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=yt(14,17,(o,f)=>{const c=f?3:0;o.poligono([[7,3],[0,8-c],[3,10],[7,9]],"#ff7a2a"),o.poligono(Pa([[7,3],[0,8-c],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=yt(16,17,(o,f)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,f?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=yt(12,9,(o,f)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const c=f?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(c,"#7a4a2a")}),s=yt(56,38,(o,f)=>{const c=f?0:8;o.poligono([[28,14],[2,4+c],[10,14+c],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+c],[46,14+c],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+c],[16,17+c],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+c],[40,17+c],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const $i=[{nome:"SLIMES",criar:()=>({m:y_(0),chefe:b_(0)})},{nome:"INVASORES",criar:P_},{nome:"BICHARADA",criar:I_},{nome:"GALÁXIA",criar:L_},{nome:"AGENTES",criar:D_},{nome:"XENO",criar:N_},{nome:"REVOADA",criar:U_}],ep=(n,e,t,i,a,r,s,o=1.5)=>{let f=e,c=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(f,c,d,p,r),n.linha(f+1,c,d+1,p,r),f=d,c=p}return[f,c]},O_=()=>yt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=ep(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),F_=()=>yt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),B_=()=>yt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),z_=()=>yt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),G_=()=>yt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),V_=()=>yt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=ep(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),Ir=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:E_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:O_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:F_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:B_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:z_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:G_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:V_}],k_=()=>yt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),H_=()=>yt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),W_=()=>yt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(Pa([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),X_=()=>yt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(Pa([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(Pa([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),q_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],Va=[...$i.map((n,e)=>({nome:q_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:k_},{nome:"DISCO-MÃE",criar:H_},{nome:"NAVE-CAVEIRA",criar:W_},{nome:"CRISTAL VIVO",criar:X_}],zt=320,kt=180,Nn=zt/2,ha=kt/2,pa=6,tp="curriculo-arcade-v1",$_=12,mt={x0:10,x1:zt-10,y0:26,y1:kt-10},pi={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Ns=70,Y_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},tl={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},J_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{Yi(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{Yi(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{Yi(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{Yi(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{Yi(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{Yi(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{Yi(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{Yi(n,"drift")}},{id:"a_normal",grupo:"ARMA · CANHÃO",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Canhão · evolução",desc:"Melhora o calibre e o impacto exclusivos do canhão principal.",max:4,peso:1.3,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA · LASER",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta alcance, bateria e eficiência próprios do laser.",max:4,peso:1.5,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA · MÍSSIL",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores e um míssil extra nos níveis avançados.",max:4,peso:1.5,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA · ORBES",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas e rotação própria mais rápida.",max:4,peso:1.5,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA · TURBO",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Aumenta a autonomia e a força exclusiva do hiperpropulsor.",max:4,peso:1.5,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA · CURA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Aumenta o reparo e reduz a espera do nanorreparo.",max:4,peso:1.5,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA · ESCUDO",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração própria da barreira de fase.",max:4,peso:1.5,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA · SALTO",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e carrega a ruptura mais rápido.",max:4,peso:1.5,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA · DRIFT",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Aumenta a arrancada e a trilha de fogo próprias do drift.",max:4,peso:1.5,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"NAVE · DANO",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Ponto de dano",desc:"+12% de dano para TODO o arsenal da nave.",max:6,peso:4.4,aplicar:n=>{n.danoGlobal*=1.12}},{id:"reparo",grupo:"NAVE · VIDA",raridade:"COMUM",icone:"♥",cor:"#ff6b7a",nome:"Ponto de vida",desc:"+1 de vida máxima e recupera 1 ponto agora.",max:6,peso:4.4,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"armadura",grupo:"NAVE · ARMADURA",raridade:"INCOMUM",icone:"⬢",cor:"#c9cdf5",nome:"Ponto de armadura",desc:"-6% de dano recebido pela nave inteira, até o limite de 50%.",max:6,peso:4.2,aplicar:n=>{n.armadura+=1}},{id:"motor",grupo:"NAVE · VELOCIDADE",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Ponto de velocidade",desc:"+10% de velocidade e resposta da nave.",max:6,peso:4.4,aplicar:n=>{n.velNave*=1.1}},{id:"recarga_geral",grupo:"NAVE · RECARGA",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Ponto de recarga",desc:"+10% de cadência e recarga para TODAS as armas e sistemas.",max:6,peso:4.2,aplicar:n=>{n.recargaGlobal*=1.1}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:2.1,aplicar:n=>{n.raioIma*=1.45}},{id:"coletor",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:2.3,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:2.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"NAVE · REPARO",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:2.2,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}}],np=Object.fromEntries(Object.entries(tl).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),Z_=Object.fromEntries(Object.entries(tl).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function Yi(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${np[e]}!`,n.aviso=3.6,!0)}const Gf=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga para todas as armas e sistemas",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Amplificador bélico",desc:"+0,25 de dano base para todo o arsenal",max:5,custo:n=>8+n*6},{parte:"NÚCLEO DE ENERGIA",id:"cadencia",nome:"Computador de recarga",desc:"+8% de cadência e recarga global",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"CASCO",id:"armadura",nome:"Blindagem",desc:"-6% de dano recebido por ponto",max:5,custo:n=>8+n*5},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],Ma={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},K_=Object.entries(Ma).map(([n,e])=>[n,e.peso]),Q_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],j_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Gf.map(n=>[n.id,0]))});function Cd(){const n=j_();try{const e=JSON.parse(localStorage.getItem(tp));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Gf)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function e2(){const n=(t,i,a)=>{const r=wn(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function Pd(n,e=!1){const t=wn(20,20),i=2,a=(s,o,f,c,u)=>t.retangulo(s+i,o+i,f,c,u),r=e?{aleta:"#b7683f",metal:"#b9a58b",casco:"#496044",nucleo:"#f2d7ae",nucleo2:"#e5b85c",brilho:"#fff1d7",alerta:"#d88b55",contorno:"#241b17"}:{aleta:"#ff7a59",metal:"#8b93a8",casco:"#4aa8ff",nucleo:"#8bd3ff",nucleo2:"#7dff9a",brilho:"#ffffff",alerta:"#ff3b4a",contorno:"#0b1026"};if(a(1,7,3,2,r.aleta),a(12,7,3,2,r.aleta),a(7,1,2,3,r.aleta),a(7,12,2,3,r.aleta),n.motor>=2&&(a(2,11,2,3,r.metal),a(12,11,2,3,r.metal),t.pixel(3+i,14+i,"#ffa23a"),t.pixel(12+i,14+i,"#ffa23a")),n.motor>=4&&(a(1,4,2,3,r.metal),a(13,4,2,3,r.metal)),t.disco(8+i,8+i,5,r.casco),t.disco(8+i,8+i,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?r.nucleo2:r.nucleo),t.disco(8+i,8+i,1,r.brilho),e){for(const[s,o]of[[7,6],[9,6],[7,8],[9,8]])t.pixel(s+i,o+i,"#91a56b");t.pixel(8+i,7+i,"#e5b85c")}if(n.casco>=1)for(const[s,o]of[[2,2],[12,2],[2,12],[12,12]])a(s,o,2,2,r.metal),n.casco>=3&&t.pixel(s+i,o+i,r.brilho);return n.ima>=1&&(t.pixel(8+i,i-1,r.alerta),n.ima>=3&&a(10,0,2,1,e?"#e8d5b8":"#c9cdd8")),t.contorno(n.casco>=5?"#ffd23f":n.casco>=3?e?"#d8b68e":"#8bd3ff":r.contorno),{c:t.c,branca:Bf(t.c)}}function t2({bip:n,somAtivo:e,temaYas:t=!1}){const i=Symbol("arcade");window.__curriculoArcadeGeracao=i,document.getElementById("arcade")?.remove();const a=(M,g,N)=>{const W=document.createElement(M);return g&&(W.className=g),N!=null&&(W.textContent=N),W},r=e2(),s=A_(),o=T_(),f=S_({inicioX:Nn,inicioY:ha,rochasSpr:s}),c=new Map,u=new Map,h=M=>(c.has(M)||c.set(M,Ir[M].criar()),c.get(M)),d=M=>(u.has(M)||u.set(M,Va[M].criar()),u.get(M)),p=new Map,m=M=>{const g=(M%$i.length+$i.length)%$i.length;return p.has(g)||p.set(g,$i[g].criar()),p.get(g)},A=.3,v=M=>{const g=new Audio("./"+M);return g.loop=!0,g.volume=A,g.preload="none",g},x=v("audio/arcade.mp3"),T=v("audio/chefe.mp3"),P=v("audio/gameover.mp3"),b={normal:x,chefe:T,fim:P};let S="normal",w=!1;function I(){if(w)return;w=!0;const M=()=>{w=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),dt&&_()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const _=()=>{e&&!e()||b[S].play().catch(I)},R=()=>{x.pause(),T.pause(),P.pause()};function L(M){if(S!==M){S=M;for(const[g,N]of Object.entries(b))g!==M&&N.pause();M!=="normal"&&(b[M].currentTime=0),_()}}let U=!1;function k(){if(!U){U=!0;for(const M of[T,P])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,U=!1})}}const $=__(zt,kt);let H=Pd({casco:0,motor:0,nucleo:0,ima:0},t),V=Cd();const ae={},X=(M,g,N)=>{const W=performance.now();W-(ae[M]||0)<g||(ae[M]=W,N())};function xe(M){const g=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";X("acerto"+(g?"G":""),g?70:40,()=>g?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function se(M){X("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const le=()=>{try{localStorage.setItem(tp,JSON.stringify(V))}catch{}},fe=a("div");fe.id="arcade",fe.classList.toggle("tema-yas",t);const Qe=a("div","arc-caixa"),We=a("div","arc-topo"),gt=document.createElement("canvas");gt.width=gt.height=20,gt.className="arc-icone",gt.getContext("2d").drawImage(H.c,0,0);const ht=a("h2",null,t?"NAVE VIAJANTE":"NAVE ARCADE"),bt=a("div","arc-hud"),re=a("span","arc-vidas");re.setAttribute("role","status");const pe=a("span","arc-nivel"),Re=a("span","arc-xp"),at=a("i");Re.append(at),Re.setAttribute("role","progressbar"),Re.setAttribute("aria-label","Experiência"),Re.setAttribute("aria-valuemin","0");const He=a("span"),Ce=a("span","arc-onda"),lt=a("span","arc-efeitos"),ce=a("span","arc-moedas"),Me=a("span");bt.append(re,pe,Re,He,Ce,lt,ce,Me);const Se=a("button","arc-pausa","II");Se.title="Pausar (Esc)",Se.setAttribute("aria-label","Pausar jogo"),Se.hidden=!0;const Ae=a("button","arc-x","X");Ae.title="Sair (Esc)",Ae.setAttribute("aria-label","Sair do jogo"),We.append(gt,ht,bt,Se,Ae);const Te=a("div","arc-tela"),qe=document.createElement("canvas");qe.width=zt,qe.height=kt,qe.setAttribute("role","img"),qe.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const y=qe.getContext("2d");y.imageSmoothingEnabled=!1;const ye=a("div","arc-joystick");ye.hidden=!0;const Ne=a("i");ye.append(Ne);const F=a("div","arc-aviso");F.hidden=!0;const ct=a("div","arc-sobre"),Fe=a("div","arc-painel arc-inicio"),D=a("button","arc-btn","COMEÇAR [ESPAÇO]"),E=a("button","arc-btn sec"),Y=a("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),Z=a("div","arc-objetivos");for(const[M,g,N]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const W=a("div");W.append(a("b",null,M),a("strong",null,g),a("small",null,N)),Z.append(W)}const oe=a("details","arc-regras"),ve=a("summary",null,"COMO JOGAR");oe.append(ve,a("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),a("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const we=a("p","arc-recordes");Fe.append(a("h3",null,"PRONTO PARA DECOLAR?"),Y,Z,oe,we,D,E);const te=a("div","arc-painel");te.hidden=!0;const ue=a("div","arc-painel");ue.hidden=!0;const Be=a("button","arc-btn","CONTINUAR [ESC]"),nt=a("button","arc-btn sec","SAIR");ue.append(a("h3",null,"PAUSADO"),Be,nt);const Ie=a("div","arc-painel");Ie.hidden=!0;const Pe=a("div","of-raiz");Pe.hidden=!0,ct.append(Fe,te,ue,Ie),Te.append(qe,F,ye,ct);const Ve=a("div","arc-armas"),ft=[];for(let M=1;M<=4;M++){const g=a("button","arc-arma"),N=a("b"),W=a("i");g.append(a("small",null,String(M)),N,W),g.onmousedown=ee=>ee.preventDefault(),g.onclick=()=>ci(M),ft.push({b:g,nm:N,barra:W}),Ve.append(g)}Qe.append(We,Te,Ve,a("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),fe.append(Qe,Pe),fe.setAttribute("role","dialog"),fe.setAttribute("aria-modal","true"),fe.setAttribute("aria-label","Nave Arcade"),document.body.append(fe);let dt=!1,G="inicio",ze=0,de=0,Ge="inicio",l=null;const ge=new Set,Le={ativo:!1,x:Nn,y:ha,toque:!1,dx:0,dy:0,origemX:0,origemY:0},rt=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],Pt=M=>Math.abs(M.x-l.cx)<zt/2+4&&Math.abs(M.y-l.cy)<kt/2+4,It=M=>{let g=Math.random()*M.reduce((N,W)=>N+W[1],0);for(const[N,W]of M)if(g-=W,g<=0)return N;return M[0][0]},on=(M,g=2.6)=>{l.avisoTxt=M,l.aviso=g};function ti(){const M=V.oficina,g=l?l.niveis:{};return{casco:M.casco+M.armadura+(g.reparo|0)+(g.armadura|0),motor:M.motor+(g.motor|0),nucleo:M.nucleo+(g.recarga_geral|0),armas:M.dano+M.lente+(g.dano_geral|0),ima:M.ima+(g.ima|0)}}function eo(){const M=ti();H=Pd(M,t),l&&(l.tiers=M);const g=gt.getContext("2d");g.clearRect(0,0,20,20),g.drawImage(H.c,0,0)}const xl=()=>{if(l.regiaoForcada!=null)return l.regiaoForcada;const M=Math.min(2,Math.floor((l.fase-1)/2)),g=kr.map((N,W)=>W).filter(N=>kr[N].nivel===M);return g[(l.fundoBase+l.fase)%g.length]},Fi=M=>{const g=[...M];for(let N=g.length-1;N>0;N--){const W=Math.floor(Math.random()*(N+1));[g[N],g[W]]=[g[W],g[N]]}return g};function to(){const M=Fi(["slime","inseto","morcego","fantasma","ogro"]).slice(0,3),g=Fi(["atirador","sentinela"]).slice(0,1),N=Fi(["bombardeiro","fulminante"]).slice(0,1),W=Fi(["curandeiro","amplificador"]).slice(0,1);return[...M,...g,...N,...W]}function Jo(){const M=V.oficina,g=to(),N=Fi(Array.from({length:$i.length},(ie,Ee)=>Ee)),W=Object.fromEntries(g.map((ie,Ee)=>[ie,N[Ee%N.length]])),ee=Object.fromEntries(g.map((ie,Ee)=>[ie,Ee<2?1:Ee<4?2:Ee===4?4:5]));l={t:0,ta:0,nx:Nn,ny:ha,cx:Nn,cy:ha,velNave:75*(1+.08*M.motor),cristais:[],raioIma:26*(1+.25*M.ima),raioPegar:8,bonusXp:1+.1*M.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,ondaFila:0,ondaSpawnT:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+M.casco,maxHp:6+M.casco,armadura:M.armadura,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*M.dano,danoGlobal:1,recargaGlobal:(1+.08*M.cadencia)*(1+.12*M.nucleo),cadencia:2.6,projeteis:1+M.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*Va.length),alienIdx:Math.floor(Math.random()*Ir.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*$i.length),elencoRun:g,entradaRun:ee,skinsRun:W,fundoBase:Math.floor(Math.random()*kr.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:M.escudo>0?1+(M.escudo>=4?1:0):0,barreira:M.escudo>0?1+(M.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*M.escudo},eo()}const ir=()=>Math.max(1,l.onda);function ar(){const M=ir(),g={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let N=l.elencoRun.filter(W=>M>=l.entradaRun[W]).map(W=>[W,g[W]+Math.max(0,M-l.entradaRun[W])*(W==="atirador"||W==="sentinela"?.45:.2)]);return N.length||(N=[[l.elencoRun[0],1]]),It(N)}function qn(M,g,N){const W=pi[M],ee=Math.max(0,ir()-1),ie=Math.max(1,Math.round(W.hp*(1+(W.hp===1?.1:.15)*ee)*(1+l.t/300))),Ee=W.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*ee))*(1+Math.min(.5,l.t/600)),De={tipo:M,x:g,y:N,hp:ie,hpMax:ie,vel:Ee,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(l.skinsRun[M]??l.skinBase)+l.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return l.inimigos.push(De),De}function Da(M=99,g=null){const N=ar(),W=1+Math.min(3,Math.floor(Math.max(0,l.onda-1)/3)),ee=Math.max(1,Math.min(M,N==="inseto"?1+Math.floor(Math.random()*(W+1)):Math.round(W*(.75+Math.random()*.35)))),ie=g==null?Math.random()*Math.PI*2:g+(Math.random()-.5)*1.8,Ee=215+(Math.random()<.35?Math.random()*230:Math.random()*60),De=l.nx+Math.cos(ie)*Ee,J=l.ny+Math.sin(ie)*Ee;for(let me=0;me<ee;me++)qn(N,De+(Math.random()-.5)*30,J+(Math.random()-.5)*30);return ee}function Zo(M){for(let g=0;g<M;g++)Da(1)}function Ko(M){const g=[[l.cx-zt/2-16,l.cy-kt/2-16],[l.cx+zt/2+16,l.cy-kt/2-16],[l.cx-zt/2-16,l.cy+kt/2+16],[l.cx+zt/2+16,l.cy+kt/2+16]],[N,W]=g[Math.floor(Math.random()*g.length)];for(let ee=0;ee<M;ee++)qn(ar(),N+(Math.random()-.5)*22,W+(Math.random()-.5)*22)}function $t(M,g,N,W,ee=50){if(!(l.parts.length>400))for(let ie=0;ie<N;ie++){const Ee=Math.random()*Math.PI*2,De=(.3+Math.random())*ee;l.parts.push({x:M,y:g,vx:Math.cos(Ee)*De,vy:Math.sin(Ee)*De,vida:.3+Math.random()*.3,cor:W[ie%W.length]})}}const sn=(M,g,N,W="#ffffff")=>l.textos.push({x:M,y:g,txt:N,cor:W,vida:1.1});function rr(){l.onda+=1;const M=1+Math.floor((l.onda-1)/3),g=l.onda%5===0;l.ondaDur=l.ondaT=13+Math.min(9,l.onda*1.1),l.ondaFila=g?5+l.onda:Math.min(34,6+l.onda*3),l.ondaSpawnT=.35,l.proxOnda=Math.max(25,34-Math.min(9,l.onda*.5))+Math.random()*4,l.ondaEstado=g||l.chefe?"chefe":"ativa",l.tremor=.25,M>l.fase&&(l.fase=M),g||(on("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),g&&!l.chefe&&Xe()}function Qo(){l.chefe||(l.ondaEstado=l.ondaT>0?"ativa":"calma")}function jo(M){const g=Math.atan2(M.y-l.ny,M.x-l.nx);l.mira=g;const N=l.armasNivel.normal,W=l.projeteis,ee=.16;for(let ie=0;ie<W;ie++){const Ee=g+(ie-(W-1)/2)*ee,De=l.velTiro*(1+.12*(N-1)),J=Math.random()<l.critico;l.tiros.push({x:l.nx+Math.cos(Ee)*7,y:l.ny+Math.sin(Ee)*7,vx:Math.cos(Ee)*De,vy:Math.sin(Ee)*De,dano:l.dano*l.danoGlobal*(1+.28*(N-1))*(J?2:1),perf:l.perfura,critico:J,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const or=()=>1+Math.floor(l.t/420);function Rn(M,g,N,W,ee=or()){l.tirosInimigos.push({x:M,y:g,vx:Math.cos(N)*W,vy:Math.sin(N)*W,dano:ee,vida:7})}function sr(M,g,N){const W=Math.random()*Math.PI*2,ee=16+Math.random()*22,ie={x:M,y:g,v:N,vx:Math.cos(W)*ee,vy:Math.sin(W)*ee,fase:Math.random()*6};l.cristais.push(ie),l.cristais.length>220&&(ie.v+=l.cristais.shift().v)}function Na(M){if(l.invul>0||l.escudoT>0)return!1;if(l.barreira>0)return l.barreira-=1,l.invul=.7,l.ondas.push({x:l.nx,y:l.ny,r:0,max:28,v:90,cor:"#7dff9a"}),sn(l.nx,l.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0;const g=Math.min(.5,l.armadura*.06),N=Math.max(.25,M*(1-g));return l.hp=Math.max(0,l.hp-N),l.invul=.7,l.tremor=.2,l.combo>=3&&sn(l.nx,l.ny-14,"COMBO PERDIDO","#ff7a8a"),l.combo=0,l.comboT=0,n(110,.18,"sawtooth",.05),!0}function Bi(M,g){M.sumido>0||M.morto||(M.hp-=g,M.piscar=.08,M.hp>0&&xe(M),M.hp<=0&&(M.morto=!0,C(M)))}function C(M){if(M.tipo==="chefe"){Tt(M);return}if(M.tipo==="alien"){l.pendente="vitoria",$t(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),l.flash=.35;return}const g=pi[M.tipo];l.kills+=1,l.alien||(l.combo+=1,l.comboT=1.8,l.melhorCombo=Math.max(l.melhorCombo,l.combo),[10,25,50,100].includes(l.combo)&&(sn(l.nx,l.ny-22,`COMBO x${l.combo}!`,"#ffe14a"),n(700+l.combo*4,.08,"square",.04),n(900+l.combo*4,.1,"square",.04,.08))),sr(M.x,M.y,g.xp),$t(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),se(M.tipo);const N={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<N&&(l.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),sn(M.x,M.y-8,"◆","#6fe8ff"));const W=l.inimigos.indexOf(M);W>=0&&l.inimigos.splice(W,1)}function q(){const M=Math.random()*Math.PI*2,g=230+Math.random()*120,N=Math.floor(Math.random()*3),W=[4,6,9][N];l.rochas.push({x:l.nx+Math.cos(M)*g,y:l.ny+Math.sin(M)*g,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:N,r:[8,10,13][N],hp:W,hpMax:W,piscar:0})}function ne(M){M.hp-=1,M.piscar=.08,$t(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&Q(M)}function Q(M){$t(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const g=l.rochas.indexOf(M);g>=0&&l.rochas.splice(g,1),Math.random()<.9?l.itens.push({tipo:It(Q_),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):sr(M.x,M.y,3)}function j(M){const g=M.tipo;if(g==="ima")l.imaT=3,sn(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");else if(g==="explosao")$e(),sn(l.nx,l.ny-12,"BOOM!","#ffd23f");else if(g==="coracao")l.hp=Math.min(l.maxHp,l.hp+2),sn(l.nx,l.ny-12,"+VIDA","#ff7a8a");else if(g==="escudo")l.escudoT=6,sn(l.nx,l.ny-12,"ESCUDO!","#8bd3ff");else if(g==="turbo")l.turboT=8,sn(l.nx,l.ny-12,"TURBO!","#ffe14a");else if(Ma[g]){const N=Ma[g];g==="estrelaVermelha"?(l.buffDanoT<=0&&(l.danoGlobal*=1.5),l.buffDanoT=N.tempo):g==="estrelaAmarela"?l.buffVelT=N.tempo:g==="estrelaAzul"?l.escudoT=Math.max(l.escudoT,N.tempo):g==="estrelaRoxa"&&(l.buffXpT=N.tempo),sn(l.nx,l.ny-12,N.nome,N.cor),$t(l.nx,l.ny,14,[N.cor,"#ffffff"],70),l.ondas.push({x:l.nx,y:l.ny,r:0,max:40,v:110,cor:N.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else g==="moedaEsp"&&(V.moedas+=1,l.moedasRun+=1,le(),sn(l.nx,l.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function $e(){l.flash=.28,l.tremor=.35,l.ondas.push({x:l.nx,y:l.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+l.dano*3;for(const g of[...l.inimigos])Pt(g)&&(Bi(g,g.tipo==="chefe"||g.tipo==="alien"?14:M),$t(g.x,g.y,4,["#ffd23f","#ff7a3a"],60));l.tirosInimigos=l.tirosInimigos.filter(g=>!Pt(g)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function Ze(M,g,N,W=1.4){for(let ee=0;ee<N;ee++){const ie=Math.random()*Math.PI*2,Ee=ee===0?Math.random()*14:28+Math.random()*55;let De=l.nx+Math.cos(ie)*Ee,J=l.ny+Math.sin(ie)*Ee;l.alien&&(De=Math.max(mt.x0+10,Math.min(mt.x1-10,De)),J=Math.max(mt.y0+10,Math.min(mt.y1-10,J))),l.campos.push({x:De,y:J,r:26,aviso:W+ee*.15,avisoMax:W+ee*.15,vida:4,tick:0,ox:M,oy:g})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function Xe(){l.chefeIdx=(l.chefeIdx+1+Math.floor(Math.random()*(Va.length-1)))%Va.length;const M=Math.random()<.5?-1:1,g=Math.round(150*(1+(l.fase-1)*.4+l.chefesVencidos*.35)*(1+l.t/300)),N=Fi(["raios","investida","drift","minhoca"]).slice(0,2),W={tipo:"chefe",x:l.cx+M*(zt/2+40),y:l.cy-30,hp:g,hpMax:g,vel:30,fase:0,piscar:0,v:l.fase-1+l.skinBase,b:l.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:N,rot:0};l.inimigos.push(W),l.chefe=W,L("chefe"),on(`${Va[l.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function je(M,g){const N=l.nx-M.x,W=l.ny-M.y,ee=Math.hypot(N,W)||1;if(M.fase+=g,M.movEsp){const O=M.movEsp;if(O.carga>0){if(O.carga-=g,M.piscar=Math.max(M.piscar,.04),O.carga<=0)if(O.tipo==="minhoca"){const K=M.x,_e=M.y,it=Math.random()*Math.PI*2,Ht=58+Math.random()*24;M.x=l.nx+Math.cos(it)*Ht,M.y=l.ny+Math.sin(it)*Ht,l.ondas.push({x:K,y:_e,r:0,max:32,v:130,cor:"#a56bff"}),l.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),$t(K,_e,18,["#a56bff","#070a1a","#ffffff"],90),$t(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),l.tremor=.28,M.movEsp=null}else O.ativo=O.tipo==="drift"?1.15:.72}else if(O.ativo>0){const K=O.tipo==="drift"?175:235;M.x+=O.dx*K*g,M.y+=O.dy*K*g,O.ativo-=g,O.acc-=g,$t(M.x-O.dx*15,M.y-O.dy*15,O.tipo==="drift"?2:1,O.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),O.tipo==="drift"&&O.acc<=0&&(O.acc=.16,l.campos.push({x:M.x-O.dx*12,y:M.y-O.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),O.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const ie=-W/ee,Ee=N/ee,De=Math.sin(l.ta*.8)*.3,J=M.vel+l.fase*3+Math.min(45,l.t/10);if(M.x+=(N/ee+ie*De)*J*g,M.y+=(W/ee+Ee*De)*J*g,ee>300)return;const me=1+Math.min(1,l.t/400);if(M.cdRajada-=g*me,M.cdMira-=g*me,M.cdBomba-=g*me,M.cdRajada<=0){const O=12+Math.min(8,l.fase*2);for(let K=0;K<O;K++)Rn(M.x,M.y,M.rot+K*Math.PI*2/O,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-l.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const O=Math.atan2(W,N),K=3+Math.min(2,l.fase-1);for(let _e=0;_e<K;_e++)Rn(M.x,M.y,O+(_e-(K-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const O=1+(Math.random()<.5?1:0)+(l.fase>=2&&Math.random()<.4?1:0);Ze(M.x,M.y,O),M.cdBomba=Math.max(3,4.6-l.fase*.2)}const he=ot.filter(O=>O.assinatura?M.kit.includes(O.id):l.t>=O.t);if(M.esp){const O=M.esp;if(O.t-=g,O.acc-=g,O.tipo==="espiral"&&O.acc<=0){O.acc=.09,O.ang+=.4;for(let K=0;K<2;K++)Rn(M.x,M.y,O.ang+K*Math.PI,62)}else if(O.tipo==="aneis"&&O.acc<=0){O.acc=.5;const K=Math.random()*Math.PI*2;for(let _e=0;_e<24;_e++){const it=_e*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(it-K),Math.cos(it-K)))>.45&&Rn(M.x,M.y,it,58)}}O.t<=0&&(M.esp=null)}else if(he.length&&(M.cdEsp-=g*me,M.cdEsp<=0)){const O=he[Math.floor(Math.random()*he.length)];if(sn(M.x,M.y-28,O.nome,"#ff7ab8"),O.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(O.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(O.id==="raios"){const K=Math.atan2(W,N),_e=3+Math.min(2,he.length-2);for(let it=0;it<_e;it++)l.raios.push({x:M.x,y:M.y,ang:K+(it-(_e-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(O.id==="investida"||O.id==="drift")M.movEsp={tipo:O.id,carga:O.id==="drift"?.7:.5,ativo:0,dx:N/ee,dy:W/ee,acc:0};else if(O.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(O.id==="invocar"){for(let K=0;K<4;K++)qn(ar(),M.x+(K-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-l.t/100)}}const ot=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function Tt(M){l.kills+=5,l.chefe=null,l.chefesVencidos+=1,L("normal");const g=l.inimigos.indexOf(M);g>=0&&l.inimigos.splice(g,1),$t(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),l.flash=.3,l.tremor=.5;const N=4+Math.min(4,l.chefesVencidos);for(let W=0;W<N;W++)l.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let W=0;W<6;W++)sr(M.x,M.y,6);l.tirosInimigos=[],l.campos=[],l.ondaEstado==="chefe"&&Qo(),on("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function Rt(){const M=Math.random()*Math.PI*2,g=100+Math.random()*40;l.buraco={x:l.nx+Math.cos(M)*g,y:l.ny+Math.sin(M)*g,vida:28,r:22},on("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function et(M){const g=l.buraco;g.vida-=M;const N=g.x-l.nx,W=g.y-l.ny,ee=Math.hypot(N,W)||1;if(ee<70){const ie=38*(1-ee/70);l.nx+=N/ee*ie*M,l.ny+=W/ee*ie*M}if(ee<9){Ft();return}g.vida<=0&&(l.buraco=null,l.proxBuraco=l.t+50+Math.random()*40)}function Ft(){L("chefe"),l.alienIdx=(l.alienIdx+1+Math.floor(Math.random()*(Ir.length-1)))%Ir.length,l.mundoSalvo={nx:l.nx,ny:l.ny,cx:l.cx,cy:l.cy,inimigos:l.inimigos,tirosInimigos:l.tirosInimigos,campos:l.campos,hp:l.hp,buraco:l.buraco,chefe:l.chefe};const M=Math.round(95*(1+l.aliensVencidos*.6+(l.fase-1)*.25)*(1+l.t/300)),g={tipo:"alien",x:Nn,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:l.alienIdx,cd:1.7,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null,vx:0,vy:0,orbita:Math.random()<.5?-1:1,mudaOrbita:2+Math.random()*2,memoria:[],plano:[],leituraT:0};l.hp=l.maxHp,l.invul=1,l.inimigos=[g],l.tirosInimigos=[],l.campos=[],l.raios=[],l.tiros=[],l.misseis=[],l.chefe=null,l.alien=g,l.nx=Nn,l.ny=kt-40,l.cx=Nn,l.cy=ha,l.flash=.5,on(`${Ir[l.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function ln(M){const g=l.mundoSalvo;if(l.nx=g.nx,l.ny=g.ny,l.cx=g.cx,l.cy=g.cy,l.inimigos=g.inimigos,l.tirosInimigos=g.tirosInimigos,l.campos=g.campos,l.chefe=g.chefe,l.hp=g.hp,l.tiros=[],l.raios=[],l.misseis=[],l.alien=null,l.mundoSalvo=null,l.buraco=null,L(l.chefe?"chefe":"normal"),l.invul=2,l.proxBuraco=l.t+60+Math.random()*40,l.flash=.4,M){l.aliensVencidos+=1,l.imaT=Math.max(l.imaT,3),sn(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");for(let W=0;W<6;W++)sr(l.nx+(Math.random()-.5)*40,l.ny+(Math.random()-.5)*40,6);const N=Object.keys(np).filter(W=>!l.poderes[W]);if(N.length&&l.slots.includes(null))Yi(l,N[Math.floor(Math.random()*N.length)]);else{const W=Object.keys(l.armasNivel).filter(ee=>l.armasNivel[ee]>0&&l.armasNivel[ee]<4);if(W.length){const ee=W[Math.floor(Math.random()*W.length)];l.armasNivel[ee]+=1,on(`${tl[ee].nome} EVOLUIU PARA N${l.armasNivel[ee]}!`,3.2)}else l.hp=l.maxHp,on("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else on("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const Yt={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},Gt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},gn=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function Ke(M){const g=l.alien,N=g.hp<g.hpMax*.5,W=g.hp<g.hpMax*.25,ee=1+Math.min(.6,l.t/500),ie=(W?2:N?1.6:1.25)*ee,Ee=(W?1.5:N?1.35:1.2)*(1+(ee-1)*.6),De=be=>be*Ee;g.ta+=M*(W?2:N?1.7:1.3)*ee,g.fase+=M,g.sumido=Math.max(0,g.sumido-M),N&&!g.furiaDita&&(g.furiaDita=!0,on("!! FÚRIA !!",1.6),l.flash=.2,n(80,.4,"sawtooth",.06)),W&&!g.desesperoDito&&(g.desesperoDito=!0,on("!! DESESPERO !!",1.6),l.flash=.25,n(60,.5,"sawtooth",.07));const J=l.nx-g.x,me=l.ny-g.y,he=Math.hypot(J,me)||1,O=J/he,K=me/he,_e=-K,it=O,Ht=W?55:N?68:82,ut=(be,ke)=>[Math.max(mt.x0+6,Math.min(mt.x1-6,be)),Math.max(mt.y0+6,Math.min(mt.y1-6,ke))],_t=()=>ut(l.nx-O*Ht+_e*g.orbita*28,l.ny)[0],Ot=()=>ut(l.nx,l.ny-K*Ht+it*g.orbita*28)[1];if((g.estado==="espera"||g.estado==="carga"||g.estado==="salvas"||g.estado==="padrao")&&g.sumido<=0){g.mudaOrbita-=M,g.mudaOrbita<=0&&(g.mudaOrbita=2.2+Math.random()*2.8,Math.random()<.45&&(g.orbita*=-1));const be=he>Ht+13?1:he<Ht-16?-.7:.12,ke=Math.sin(g.ta*1.7+g.fase*.4)*.22,tt=(W?92:N?78:64)*ee*(g.estado==="carga"?.58:1),st=(O*be+_e*(g.orbita*.58+ke))*tt,Qt=(K*be+it*(g.orbita*.58+ke))*tt,dn=Math.min(1,M*(W?5.5:3.6));g.vx+=(st-g.vx)*dn,g.vy+=(Qt-g.vy)*dn,g.x+=g.vx*M,g.y+=g.vy*M;const[Dt,zn]=ut(g.x,g.y);(Dt!==g.x||zn!==g.y)&&(g.orbita*=-1,g.vx*=-.35,g.vy*=-.35),g.x=Dt,g.y=zn}const In=()=>{const be=l.movendo?W?34:N?27:20:0,ke=l.nx+l.dirX*be,tt=l.ny+l.dirY*be,st=ke-g.x,Qt=tt-g.y,dn=Math.hypot(st,Qt)||1;g.dirX=st/dn,g.dirY=Qt/dn,g.dashMax=.75,g.estado="aviso",g.carga=W?.38:N?.52:.72},B=()=>{const be=l.nx<Nn;g.x=be?mt.x1-4:mt.x0+4,g.y=ut(0,l.ny)[1],g.dirX=be?-1:1,g.dirY=0,g.dashMax=1.15,g.estado="aviso",g.carga=W?.34:N?.48:.68},Oe=be=>{const ke=l.movendo?l.dirX:O,tt=l.movendo?l.dirY:K,st=-tt,Qt=ke;for(let dn=0;dn<be;dn++){const Dt=Math.floor(dn/2)+1,zn=dn%2?1:-1,hu=20+Dt*14,pu=18+Dt*7,[Np,Up]=ut(l.nx+ke*hu+st*pu*zn,l.ny+tt*hu+Qt*pu*zn),mu=1+dn*.08;l.campos.push({x:Np,y:Up,r:23,aviso:mu,avisoMax:mu,vida:4.2,tick:0,ox:g.x,oy:g.y})}if(N){const[dn,Dt]=ut(l.nx+ke*50,l.ny+tt*50);l.campos.push({x:dn,y:Dt,r:25,aviso:1.25,avisoMax:1.25,vida:4.2,tick:0,ox:g.x,oy:g.y})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)},Ye=()=>{if(g.plano.length){const Dt=g.plano.shift();return g.memoria.push(Dt),g.memoria.length>4&&g.memoria.shift(),Dt}const be=Ir[g.v].pesos,ke=([Dt,,zn])=>l.t>=zn||(be[Dt]||0)>0||W||N&&zn<=210,tt=new Set(gn.filter(ke).map(([Dt])=>Dt));let st;he<62?st=["tentaculos","varredura","rajada","psiquico","investida","teleporte","corte","olhar"]:he>125?st=["bombas","psiquico","cerco","chuva","investida","mira","raio","corte","foice","ovnis","invocar"]:st=["mira","raio","investida","espiral","aneis","olhar","rajada","psiquico"];for(const Dt of Object.keys(be))tt.has(Dt)&&!st.includes(Dt)&&st.push(Dt);l.campos.length>=7&&(st=st.filter(Dt=>Dt!=="bombas"&&Dt!=="psiquico")),l.tirosInimigos.length>=85&&(st=st.filter(Dt=>!["rajada","espiral","chuva","aneis","cerco"].includes(Dt))),st=st.filter(Dt=>tt.has(Dt)&&!g.memoria.slice(-2).includes(Dt)),st.length||(st=[...tt].filter(Dt=>!g.memoria.slice(-1).includes(Dt))),st.length||(st=["investida"]);const Qt=st.map(Dt=>{let zn=1+(be[Dt]||0);return he<62&&["tentaculos","varredura","rajada","psiquico"].includes(Dt)&&(zn+=3),he>125&&["bombas","cerco","investida","corte"].includes(Dt)&&(zn+=3),N&&["investida","foice","olhar","raio"].includes(Dt)&&(zn+=2),W&&["foice","corte","varredura","tentaculos"].includes(Dt)&&(zn+=3),[Dt,zn]}),dn=It(Qt);return he>125&&["bombas","psiquico","cerco"].includes(dn)?g.plano.push(Math.random()<.55?"investida":"mira"):he<62&&["rajada","tentaculos"].includes(dn)&&g.plano.push(Math.random()<.5?"teleporte":"corte"),g.memoria.push(dn),g.memoria.length>4&&g.memoria.shift(),dn};if(g.estado==="espera")g.cd-=M*ie,g.cd<=0&&(g.ataque=Ye(),g.estado="carga",g.carga=W?.2:N?.3:.46,sn(g.x,Math.max(12,g.y-24),Yt[g.ataque]||"","#ff7ab8"));else if(g.estado==="carga"){if(g.carga-=M,g.carga<=0){const be=g.ataque;if(be==="rajada"){const ke=W?30:N?24:18,tt=Math.random()*6;for(let st=0;st<ke;st++)Rn(g.x,g.y,tt+st*Math.PI*2/ke,De(62));g.estado="espera",g.cd=2}else if(be==="mira")g.salvas=W?6:N?5:4,g.cdSalva=0,g.estado="salvas";else if(be==="teleporte")g.sumido=.6,g.estado="teleporte",g.carga=.6;else if(be==="invocar"){const ke=l.inimigos.filter(tt=>tt.tipo==="inseto").length;for(let tt=0;tt<4&&ke+tt<10;tt++)qn("inseto",g.x+(tt-1.5)*12,g.y+14);g.estado="espera",g.cd=1.8,n(300,.2,"triangle",.05)}else if(be==="ovnis"){const ke=l.inimigos.filter(tt=>tt.tipo==="atirador").length;for(let tt=0;tt<2&&ke+tt<3;tt++)qn("atirador",g.x+(tt?16:-16),g.y+14);g.estado="espera",g.cd=2,n(300,.25,"triangle",.05)}else if(be==="investida")g.combo=W?1:0,g.modo="investida",In();else if(be==="foice")g.combo=W?3:N?2:1,g.modo="investida",In();else if(be==="corte")g.combo=W?2:N?1:0,g.modo="corte",B();else if(be==="raio"){const ke=Math.atan2(l.ny-g.y,l.nx-g.x),tt=W?[ke-.7,ke-.35,ke,ke+.35,ke+.7]:N?[ke-.5,ke,ke+.5]:[ke];for(const st of tt)l.raios.push({x:g.x,y:g.y+8,ang:st,aviso:.9,vida:.55,tick:0,ligou:!1});g.estado="espera",g.cd=2.2,n(500,.3,"sine",.05)}else if(be==="olhar"){const ke=Math.atan2(l.ny-g.y,l.nx-g.x),tt=W?7:N?6:5;for(let st=0;st<tt;st++)l.raios.push({x:g.x,y:g.y+8,ang:ke+(st-(tt-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});g.estado="espera",g.cd=2.4,n(520,.3,"sine",.05)}else if(be==="varredura"){const ke=Math.random()<.5?1:-1,tt=Math.atan2(l.ny-g.y,l.nx-g.x)-1*ke;for(let st=0;st<(N?2:1);st++)l.raios.push({x:g.x,y:g.y+8,ang:tt+st*Math.PI,giro:1.15*ke*(W?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});g.estado="espera",g.cd=2.6,n(480,.3,"sine",.05)}else if(be==="tentaculos"){const ke=Math.random()*6.28,tt=Math.random()<.5?1:-1,st=N?6:4;for(let Qt=0;Qt<st;Qt++)l.raios.push({x:g.x,y:g.y+8,ang:ke+Qt*Math.PI*2/st,giro:.9*tt,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});g.estado="espera",g.cd=3,n(420,.3,"sine",.05)}else if(be==="bombas")Oe(W?7:N?6:4),g.estado="espera",g.cd=W?.75:N?1.1:1.7;else if(be==="psiquico"){const ke=Math.random()*6.28,tt=N?6:5;for(let st=0;st<tt;st++){const[Qt,dn]=ut(l.nx+Math.cos(ke+st*Math.PI*2/tt)*40,l.ny+Math.sin(ke+st*Math.PI*2/tt)*40);l.campos.push({x:Qt,y:dn,r:24,aviso:1.1+st*.08,avisoMax:1.1+st*.08,vida:3.5,tick:0,ox:g.x,oy:g.y})}l.campos.push({x:l.nx,y:l.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:g.x,oy:g.y}),g.estado="espera",g.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else Gt[be]?(g.padrao={tipo:be,t:Gt[be]*(N?1.25:1),acc:0,ang:Math.random()*6.28},g.estado="padrao"):g.estado="espera";n(220,.12,"square",.05)}}else if(g.estado==="padrao"){const be=g.padrao;if(be.t-=M,be.acc-=M,be.acc<=0){if(be.tipo==="espiral"){be.acc=.075,be.ang+=.38;const ke=W?4:N?3:2;for(let tt=0;tt<ke;tt++)Rn(g.x,g.y+6,be.ang+tt*Math.PI*2/ke,De(58));X("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(be.tipo==="chuva"){be.acc=W?.45:.6;const ke=[mt.x0+24+Math.random()*(mt.x1-mt.x0-48)];N&&ke.push(mt.x0+24+Math.random()*(mt.x1-mt.x0-48));for(let tt=mt.x0+4;tt<=mt.x1-4;tt+=13)ke.every(st=>Math.abs(tt-st)>19)&&Rn(tt,mt.y0,Math.PI/2,De(58));n(240,.08,"square",.03)}else if(be.tipo==="aneis"){be.acc=.55;const ke=24,tt=Math.random()*Math.PI*2;for(let st=0;st<ke;st++){const Qt=st*Math.PI*2/ke;Math.abs(Math.atan2(Math.sin(Qt-tt),Math.cos(Qt-tt)))>.42&&Rn(g.x,g.y,Qt,De(55))}n(280,.08,"triangle",.03)}else if(be.tipo==="cerco"){be.acc=W?.08:.12;const ke=Math.random()<.5?mt.x0:mt.x1,tt=mt.y0+Math.random()*(mt.y1-mt.y0);Rn(ke,tt,Math.atan2(l.ny-tt,l.nx-ke)+(Math.random()-.5)*.3,De(72)),X("cerco",90,()=>n(360,.04,"square",.02))}}be.t<=0&&(g.estado="espera",g.cd=1.8)}else if(g.estado==="salvas"){if(g.cdSalva-=M,g.cdSalva<=0){const be=Math.atan2(l.ny-g.y,l.nx-g.x);for(let ke=-1;ke<=1;ke++)Rn(g.x,g.y+12,be+ke*.22,De(95));g.salvas-=1,g.cdSalva=.26,n(260,.06,"square",.04),g.salvas<=0&&(g.estado="espera",g.cd=1.6)}}else if(g.estado==="aviso")g.carga-=M,g.x+=(Math.random()-.5)*1.6,g.y+=(Math.random()-.5)*1.6,g.carga<=0&&(g.estado="investida",g.dashT=g.dashMax*(N?1.1:1),n(150,.25,"sawtooth",.06));else if(g.estado==="investida"){const be=W?400:N?350:310;g.x+=g.dirX*be*M,g.y+=g.dirY*be*M,g.dashT-=M;const ke=g.x<mt.x0||g.x>mt.x1||g.y<mt.y0||g.y>mt.y1;g.x=Math.max(mt.x0,Math.min(mt.x1,g.x)),g.y=Math.max(mt.y0-10,Math.min(mt.y1,g.y)),(g.dashT<=0||ke)&&(l.tremor=Math.max(l.tremor,ke?.2:0),g.combo>0?(g.combo-=1,g.modo==="corte"?B():In(),g.carga=.4):g.estado="volta")}else if(g.estado==="volta"){const be=_t(),ke=Ot(),tt=be-g.x,st=ke-g.y,Qt=Math.hypot(tt,st)||1;g.x+=tt/Qt*Math.min(Qt,260*M),g.y+=st/Qt*Math.min(Qt,260*M),Qt<5&&(g.estado="espera",g.cd=1.2)}else if(g.estado==="teleporte"&&(g.carga-=M,g.carga<=0)){const be=Math.atan2(g.y-l.ny,g.x-l.nx)+Math.PI+(Math.random()-.5)*1.2,ke=he<70?105:72;[g.x,g.y]=ut(l.nx+Math.cos(be)*ke,l.ny+Math.sin(be)*ke),g.sumido=0,g.vx=g.vy=0;const tt=W?16:12;for(let st=0;st<tt;st++)Rn(g.x,g.y,st*Math.PI*2/tt,De(70));g.estado="espera",g.cd=1.3,n(440,.1,"square",.05)}}function vn(M){let g=(ge.has("ArrowRight")||ge.has("KeyD")?1:0)-(ge.has("ArrowLeft")||ge.has("KeyA")?1:0),N=(ge.has("ArrowDown")||ge.has("KeyS")?1:0)-(ge.has("ArrowUp")||ge.has("KeyW")?1:0);if(!g&&!N&&Le.ativo)if(Le.toque)g=Le.dx/18,N=Le.dy/18;else{const ee=Le.x-(l.nx-l.cx+zt/2),ie=Le.y-(l.ny-l.cy+kt/2),Ee=Math.hypot(ee,ie);Ee>3&&(g=ee/Ee,N=ie/Ee)}const W=Math.hypot(g,N);if(l.movendo=W>.08,W>.08){l.dirX=g/W,l.dirY=N/W;const ee=l.arma>=2?l.slots[l.arma-2]:"normal",ie=l.armasNivel.turbo||1,Ee=l.armasNivel.drift||1,De=ee==="turbo"&&l.boostE>0?1.55+.18*(ie-1):1,J=l.driftT>0?1.75+.15*(Ee-1):1,me=ee==="salto"&&l.saltoCarga>0?.32:1,he=l.turboT>0?1.35:1,O=Math.min(1,W),K=l.velNave*De*J*me*he*(l.buffVelT>0?1.5:1)*(l.alien?1:l.lentidao||1);l.nx+=l.dirX*K*M*O,l.ny+=l.dirY*K*M*O}if(l.alien)l.nx=Math.max(mt.x0,Math.min(mt.x1,l.nx)),l.ny=Math.max(mt.y0,Math.min(mt.y1,l.ny)),l.cx=Nn,l.cy=ha;else{const ee=Math.min(1,M*5);l.cx+=(l.nx-l.cx)*ee,l.cy+=(l.ny-l.cy)*ee}}function Lt(M){l.proxOnda-=M,l.proxOnda<=0&&l.ondaFila<=0&&rr(),l.ondaT=Math.max(0,l.ondaT-M),l.ondaEstado=l.chefe?"chefe":l.ondaT>0||l.ondaFila>0?"ativa":"calma";const g=Math.min(54,12+3*ir());if(l.ondaFila>0&&(l.ondaSpawnT-=M,l.ondaSpawnT<=0)){const J=Math.min(l.ondaFila,Math.min(4,1+Math.floor((l.onda-1)/2)),Math.max(0,g-l.inimigos.length));J>0&&(Ko(J),l.ondaFila-=J),l.ondaSpawnT=J>0?Math.max(.72,1.45-l.onda*.045)+Math.random()*.38:.5}const N=.24+Math.min(.72,l.t*.0014)+.015*l.nivel;l.spawnAcc+=M*N*(l.ondaEstado==="chefe"?.45:1),(!Number.isFinite(l.spawnAcc)||l.spawnAcc<0)&&(l.spawnAcc=0);let W=0;for(;l.spawnAcc>=1&&W<3;)l.spawnAcc-=1,W+=1,l.inimigos.length<g&&Da(2);l.ultX==null&&(l.ultX=l.nx,l.ultY=l.ny,l.andou=0,l.angAndar=0);const ee=l.nx-l.ultX,ie=l.ny-l.ultY,Ee=Math.hypot(ee,ie);for(l.ultX=l.nx,l.ultY=l.ny,Ee>0&&Ee<60&&(l.andou+=Ee,l.angAndar=Math.atan2(ie,ee));l.andou>=170;)l.andou-=170,l.inimigos.length<g&&Da(99,l.angAndar);if(l.ondaT<=0&&!l.chefe&&!l.buraco&&l.t>=l.proxBuraco&&Rt(),l.proxEstrela-=M,l.proxEstrela<=0&&(l.proxEstrela=16+Math.random()*14,l.itens.filter(J=>Ma[J.tipo]).length<2)){const J=Math.random()*Math.PI*2,me=70+Math.random()*90;l.itens.push({tipo:It(K_),x:l.nx+Math.cos(J)*me,y:l.ny+Math.sin(J)*me,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(l.buraco&&(et(M),l.alien))return;l.rochas.length<3&&Math.random()<M*.12&&q();for(let J=l.rochas.length-1;J>=0;J--){const me=l.rochas[J];me.x+=me.vx*M,me.y+=me.vy*M,me.piscar=Math.max(0,me.piscar-M);const he=l.nx-me.x,O=l.ny-me.y,K=Math.hypot(he,O)||1;if(K>650){l.rochas.splice(J,1);continue}K<me.r+pa&&(l.nx+=he/K*(me.r+pa-K),l.ny+=O/K*(me.r+pa-K))}for(const J of[...l.inimigos]){if(J.tipo==="chefe"){je(J,M),f.empurrar(J,pi.chefe.raio,{x:l.nx,y:l.ny},30*M);continue}J.buffT=Math.max(0,(J.buffT||0)-M),J.suporteFx=Math.max(0,(J.suporteFx||0)-M);const me=l.nx-J.x,he=l.ny-J.y,O=Math.hypot(me,he)||1,K=J.buffT>0?1.35:1;let _e=me/O*J.vel*K,it=he/O*J.vel*K;if(J.tipo==="morcego"){const ut=Math.sin(l.ta*5+J.fase)*28;_e+=-he/O*ut,it+=me/O*ut}else if(J.tipo==="inseto"){const ut=Math.sin(l.ta*9+J.fase)*22;_e+=-he/O*ut,it+=me/O*ut}else if(J.tipo==="atirador"){const ut=O>92?1:.22,_t=Math.sin(l.ta*1.2+J.fase)*.35;_e=(me/O*ut+-he/O*_t)*J.vel*K,it=(he/O*ut+me/O*_t)*J.vel*K,J.cd-=M*K,J.cd<=0&&Pt(J)&&(Rn(J.x,J.y,Math.atan2(he,me),74,or()*(J.buffT>0?1.5:1)),J.cd=1.8+Math.random()*.9)}else if(J.tipo==="sentinela"){const ut=O>105?1:.2,_t=Math.atan2(he,me);if(_e=(me/O*ut+-he/O*Math.sin(l.ta+J.fase)*.28)*J.vel*K,it=(he/O*ut+me/O*Math.sin(l.ta+J.fase)*.28)*J.vel*K,J.cd-=M*K,J.cd<=0&&Pt(J)){for(const Ot of[-.18,0,.18])Rn(J.x,J.y,_t+Ot,82,or()*(J.buffT>0?1.5:1));J.cd=2.5+Math.random()*.8}}else if(J.tipo==="bombardeiro"){const ut=O>120?.9:.18;_e=me/O*ut*J.vel*K,it=he/O*ut*J.vel*K,J.cd-=M*K,J.cd<=0&&Pt(J)&&(Ze(J.x,J.y,J.buffT>0?2:1,1.15),J.cd=4+Math.random()*1.2)}else if(J.tipo==="fulminante"){const ut=O>125?.9:.18,_t=Math.atan2(he,me);_e=(me/O*ut+-he/O*Math.sin(l.ta*1.7+J.fase)*.28)*J.vel*K,it=(he/O*ut+me/O*Math.sin(l.ta*1.7+J.fase)*.28)*J.vel*K,J.cd-=M*K,J.cd<=0&&Pt(J)&&(l.raios.push({x:J.x,y:J.y,ang:_t,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:or(),dono:J}),J.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if(J.tipo==="curandeiro"){const ut=l.inimigos.filter(_t=>_t!==J&&!_t.morto&&_t.hp<_t.hpMax&&_t.tipo!=="chefe").sort((_t,Ot)=>Math.hypot(_t.x-J.x,_t.y-J.y)-Math.hypot(Ot.x-J.x,Ot.y-J.y))[0];if(_e=me/O*J.vel*.68,it=he/O*J.vel*.68,ut){const _t=ut.x-J.x,Ot=ut.y-J.y,Pn=Math.hypot(_t,Ot)||1;_e+=_t/Pn*J.vel*.32,it+=Ot/Pn*J.vel*.32}if(J.cd-=M,J.cd<=0&&ut&&Math.hypot(ut.x-J.x,ut.y-J.y)<Ns){const _t=Math.max(1,Math.ceil(ut.hpMax*.22));ut.hp=Math.min(ut.hpMax,ut.hp+_t),ut.suporteFx=.8,J.suporteFx=.8,sn(ut.x,ut.y-8,`+${_t}`,"#7dff9a"),$t(ut.x,ut.y,5,["#7dff9a","#ffffff"],35),J.cd=2.7+Math.random()*.8}}else if(J.tipo==="amplificador"){const ut=l.inimigos.filter(Ot=>Ot!==J&&!Ot.morto&&Ot.tipo!=="chefe"&&Math.hypot(Ot.x-J.x,Ot.y-J.y)<Ns);for(const Ot of ut)Ot.buffT=Math.max(Ot.buffT||0,.4);ut.length&&(J.suporteFx=.25);const _t=O>85?.72:.2;_e=me/O*_t*J.vel,it=he/O*_t*J.vel}const Ht=f.fatorLento(J.x,J.y);J.x+=_e*M*Ht,J.y+=it*M*Ht,f.empurrar(J,pi[J.tipo].raio,{x:l.nx,y:l.ny},J.vel*M*.9),J.piscar=Math.max(0,J.piscar-M)}l.inimigos=l.inimigos.filter(J=>J.tipo==="chefe"||Math.hypot(J.x-l.nx,J.y-l.ny)<520);const De={x:l.nx,y:l.ny};f.empurrar(De,pa),l.nx=De.x,l.ny=De.y,l.lentidao=f.fatorLento(l.nx,l.ny);for(let J=l.itens.length-1;J>=0;J--){const me=l.itens[J];me.vida-=M;const he=l.nx-me.x,O=l.ny-me.y,K=Math.hypot(he,O)||1;if(me.tipo==="moedaEsp"&&K<l.raioIma*1.3&&(me.x+=he/K*90*M,me.y+=O/K*90*M),K<pa+8){j(me),l.itens.splice(J,1);continue}me.vida<=0&&l.itens.splice(J,1)}for(let J=l.cristais.length-1;J>=0;J--){const me=l.cristais[J];me.x+=me.vx*M,me.y+=me.vy*M;const he=Math.pow(.05,M);me.vx*=he,me.vy*=he;const O=l.nx-me.x,K=l.ny-me.y,_e=Math.hypot(O,K)||1;if(l.imaT>0)me.x+=O/_e*280*M,me.y+=K/_e*280*M;else if(_e<l.raioIma){const it=70+(l.raioIma-_e)*4;me.x+=O/_e*it*M,me.y+=K/_e*it*M}_e<pa+l.raioPegar&&(l.xp+=me.v*l.bonusXp*(l.buffXpT>0?2:1),l.cristais.splice(J,1),$t(me.x,me.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(me.v,6)*60,.05,"square",.03))}}function Cn(){let M=null,g=1/0;for(const ee of l.inimigos){if(ee.sumido>0||!Pt(ee))continue;const ie=Math.hypot(ee.x-l.nx,ee.y-l.ny);ie<g&&(g=ie,M=ee)}let N=null,W=120;for(const ee of l.rochas){if(!Pt(ee))continue;const ie=Math.hypot(ee.x-l.nx,ee.y-l.ny);ie<W&&(W=ie,N=ee)}return N&&(!M||g>45)?N:M}const $n=M=>M.r||pi[M.tipo].raio;function ci(M){G!=="jogando"||!l||M>=2&&!l.slots[M-2]||l.arma!==M&&(l.arma=M,n(M===2?440:600,.05,"square",.03))}function zi(){if(l.arma<2||l.slots[l.arma-2]!=="orbes")return[];const M=1+l.armasNivel.orbes,g=20+M*1.5;return Array.from({length:M},(N,W)=>({x:l.nx+Math.cos(l.orbeAng+W*Math.PI*2/M)*g,y:l.ny+Math.sin(l.orbeAng+W*Math.PI*2/M)*g}))}function Vt(M,g){const N=l.armasNivel.missil,W=24*(1+.16*(N-1)),ee=(5+l.dano*2)*l.danoGlobal*(1+.32*(N-1));l.ondas.push({x:M,y:g,r:0,max:W,v:170,cor:"#ff9a3a"}),$t(M,g,14,["#ffd23f","#ff7a3a","#ffffff"],80),l.tremor=Math.max(l.tremor,.1);for(const ie of[...l.inimigos])!(ie.sumido>0)&&Math.hypot(ie.x-M,ie.y-g)<W+pi[ie.tipo].raio&&Bi(ie,ee);for(const ie of[...l.rochas])if(Math.hypot(ie.x-M,ie.y-g)<W+ie.r)for(let Ee=0;Ee<3&&l.rochas.includes(ie);Ee++)ne(ie);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function en(M){const g=l.arma>=2?l.slots[l.arma-2]:"normal",N=l.recM*l.recargaGlobal;l.laser=null;let W=!1;if(g==="laser"&&!l.laserQuente){const he=l.armasNivel.laser,O=Cn(),K=l.laserAlc*(1+.18*(he-1));if(O&&Math.hypot(O.x-l.nx,O.y-l.ny)<K+$n(O)){W=!0;const _e=Math.atan2(O.y-l.ny,O.x-l.nx),it=Math.cos(_e),Ht=Math.sin(_e);if(l.mira=_e,l.laser={ang:_e,len:K},l.laserE-=M*1.15,l.laserE<=0&&(l.laserE=0,l.laserQuente=!0,n(180,.2,"sawtooth",.04)),l.laserTick-=M,l.laserTick<=0){l.laserTick=.1,l.laserN+=1;const ut=l.laserDano*(.5+.5*l.dano)*l.danoGlobal*(1+.3*(he-1))*.1;for(const _t of[...l.inimigos]){const Ot=_t.x-l.nx,Pn=_t.y-l.ny,In=Ot*it+Pn*Ht,B=Math.abs(-Ot*Ht+Pn*it),Oe=pi[_t.tipo].raio;!(_t.sumido>0)&&In>0&&In<K+Oe&&B<Oe+3&&(Bi(_t,ut),Math.random()<.4&&$t(_t.x,_t.y,1,["#8bd3ff","#ffffff"],40))}if(l.laserN%3===0)for(const _t of[...l.rochas]){const Ot=_t.x-l.nx,Pn=_t.y-l.ny,In=Ot*it+Pn*Ht,B=Math.abs(-Ot*Ht+Pn*it);In>0&&In<K+_t.r&&B<_t.r+2&&ne(_t)}X("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!W){const he=Math.max(1,l.armasNivel.laser),O=l.laserMax*(1+.18*(he-1));l.laserE=Math.min(O,l.laserE+M*O*.13*N*(1+.18*(he-1))),l.laserQuente&&l.laserE>=l.laserMax*.6&&(l.laserQuente=!1)}if(g==="missil"&&(l.missilT-=M,l.missilT<=0)){const he=[...l.inimigos.filter(O=>!(O.sumido>0)&&Pt(O)),...l.rochas.filter(Pt)].map(O=>({o:O,d:Math.hypot(O.x-l.nx,O.y-l.ny)})).filter(O=>O.d<135).sort((O,K)=>O.d-K.d);if(he.length){const O=l.armasNivel.missil,K=1+(O>=3?1:0)+(O>=4?1:0);for(let _e=0;_e<K;_e++){const it=he[_e%he.length].o;l.misseis.push({x:l.nx,y:l.ny,ang:Math.atan2(it.y-l.ny,it.x-l.nx)+(_e-(K-1)/2)*.9,alvo:it,vida:2,v:70})}l.missilMax=3.6/(N*(1+.22*(O-1))),l.missilT=l.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else l.missilT=0}for(let he=l.misseis.length-1;he>=0;he--){const O=l.misseis[he],K=O.alvo,_e=K&&K.hp>0&&!K.morto&&(l.inimigos.includes(K)||l.rochas.includes(K));if(_e){let Ht=Math.atan2(K.y-O.y,K.x-O.x)-O.ang;Ht=Math.atan2(Math.sin(Ht),Math.cos(Ht)),O.ang+=Math.max(-6*M,Math.min(6*M,Ht))}O.v=Math.min(150,O.v+160*M),O.x+=Math.cos(O.ang)*O.v*M,O.y+=Math.sin(O.ang)*O.v*M,O.vida-=M,Math.random()<.6&&l.parts.push({x:O.x,y:O.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(_e&&Math.hypot(K.x-O.x,K.y-O.y)<$n(K)+3||O.vida<=0)&&(l.misseis.splice(he,1),Vt(O.x,O.y))}if(g==="orbes"){const he=l.armasNivel.orbes;l.orbeAng+=M*3.2*(1+.18*(he-1))*l.recargaGlobal;const O=(2+l.dano*.5)*l.danoGlobal*(1+.32*(he-1));for(const K of zi()){for(const _e of[...l.inimigos])_e.sumido>0||(_e.cdOrbe=(_e.cdOrbe||0)-M,_e.cdOrbe<=0&&Math.hypot(K.x-_e.x,K.y-_e.y)<pi[_e.tipo].raio+4&&(Bi(_e,O),_e.cdOrbe=.35,$t(_e.x,_e.y,2,["#ff3bd4","#ffffff"],40)));for(const _e of[...l.rochas])_e.cdOrbe=(_e.cdOrbe||0)-M,_e.cdOrbe<=0&&Math.hypot(K.x-_e.x,K.y-_e.y)<_e.r+4&&(ne(_e),_e.cdOrbe=.5)}}const ee=Math.max(1,l.armasNivel.turbo),ie=3+.75*(ee-1);l.boostMax=ie,g==="turbo"&&l.movendo&&l.boostE>0?(l.boostE=Math.max(0,l.boostE-M),Math.random()<.45&&l.parts.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vx:-l.dirX*20,vy:-l.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):l.boostE=Math.min(ie,l.boostE+M*.5*N*(1+.12*(ee-1)));const Ee=Math.max(1,l.armasNivel.cura);if(l.curaMax=Math.max(4.5,(11-1.6*(Ee-1))/N),l.curaCd=Math.max(0,l.curaCd-M),g==="cura"&&l.curaCd<=0&&l.hp<l.maxHp){const he=1+(Ee>=3?1:0)+(Ee>=4?1:0);l.hp=Math.min(l.maxHp,l.hp+he),l.curaCd=l.curaMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:30,v:80,cor:"#7dff9a"}),$t(l.nx,l.ny,12,["#7dff9a","#ffffff"],45),sn(l.nx,l.ny-13,`+${he} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const De=Math.max(1,l.armasNivel.escudo);l.escudoMax=Math.max(6,(13-1.3*(De-1))/N),l.escudoCd=Math.max(0,l.escudoCd-M),g==="escudo"&&l.escudoCd<=0&&l.escudoT<=0&&(l.escudoT=2.4+.75*(De-1),l.escudoCd=l.escudoMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),sn(l.nx,l.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const J=Math.max(1,l.armasNivel.salto);if(l.saltoMax=Math.max(3.5,(8-.85*(J-1))/N),l.saltoCd=Math.max(0,l.saltoCd-M),l.saltoCargaMax=Math.max(.42,.82-.1*(J-1)),g!=="salto"||!l.movendo?l.saltoCarga=0:l.saltoCd<=0&&l.saltoCarga<=0&&(l.saltoCarga=l.saltoCargaMax,n(180,.16,"sine",.04)),g==="salto"&&l.saltoCarga>0&&(l.saltoCarga-=M,Math.random()<.55&&l.parts.push({x:l.nx+(Math.random()-.5)*18,y:l.ny+(Math.random()-.5)*18,vx:-l.dirX*8,vy:-l.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),l.saltoCarga<=0)){const he=l.nx,O=l.ny,K=58+18*J;l.nx+=l.dirX*K,l.ny+=l.dirY*K,l.alien&&(l.nx=Math.max(mt.x0,Math.min(mt.x1,l.nx)),l.ny=Math.max(mt.y0,Math.min(mt.y1,l.ny))),l.saltoCd=l.saltoMax,l.invul=Math.max(l.invul,.35),l.ondas.push({x:he,y:O,r:0,max:24,v:120,cor:"#a56bff"}),l.ondas.push({x:l.nx,y:l.ny,r:0,max:24,v:120,cor:"#a56bff"}),$t(he,O,14,["#a56bff","#ffffff"],60),$t(l.nx,l.ny,14,["#a56bff","#ffffff"],60),l.flash=Math.max(l.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const me=Math.max(1,l.armasNivel.drift);l.driftMax=Math.max(3.2,(7-.7*(me-1))/N),l.driftCd=Math.max(0,l.driftCd-M),l.driftT=Math.max(0,l.driftT-M),g==="drift"&&l.driftCd<=0&&l.movendo&&l.driftT<=0&&(l.driftT=.75+.22*me,l.driftCd=l.driftMax,l.driftAcc=0,l.tremor=Math.max(l.tremor,.12),n(130,.22,"sawtooth",.05)),l.driftT>0&&l.movendo&&(l.driftAcc-=M,l.driftAcc<=0&&(l.driftAcc=.055,l.trilhasFogo.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vida:1+.12*me,max:1+.12*me,nv:me})));for(const he of l.inimigos)he.cdFogo=Math.max(0,(he.cdFogo||0)-M);for(let he=l.trilhasFogo.length-1;he>=0;he--){const O=l.trilhasFogo[he];O.vida-=M;for(const K of[...l.inimigos])!(K.sumido>0)&&K.cdFogo<=0&&Math.hypot(K.x-O.x,K.y-O.y)<pi[K.tipo].raio+7&&(Bi(K,(1.2+O.nv*.75)*l.danoGlobal),K.cdFogo=.22);O.vida<=0&&l.trilhasFogo.splice(he,1)}}function yi(M){for(let g=l.tiros.length-1;g>=0;g--){const N=l.tiros[g];if(N.x+=N.vx*M,N.y+=N.vy*M,Math.hypot(N.x-l.nx,N.y-l.ny)>260){l.tiros.splice(g,1);continue}let W=!1;for(const ee of[...l.inimigos])if(!(N.acertou.has(ee)||ee.sumido>0)&&Math.hypot(N.x-ee.x,N.y-ee.y)<pi[ee.tipo].raio+2)if(N.acertou.add(ee),$t(N.x,N.y,2,["#ffe14a","#ffffff"],40),Bi(ee,N.dano),N.perf>0)N.perf-=1;else{W=!0;break}if(!W){for(const ee of[...l.rochas])if(!N.acertou.has(ee)&&Math.hypot(N.x-ee.x,N.y-ee.y)<ee.r+2)if(N.acertou.add(ee),ne(ee),N.perf>0)N.perf-=1;else{W=!0;break}}W&&l.tiros.splice(g,1)}}function qt(M){for(let g=l.tirosInimigos.length-1;g>=0;g--){const N=l.tirosInimigos[g];if(N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0||Math.hypot(N.x-l.nx,N.y-l.ny)>420||l.alien&&(N.x<mt.x0-40||N.x>mt.x1+40||N.y<mt.y0-40||N.y>mt.y1+40)){l.tirosInimigos.splice(g,1);continue}Math.hypot(N.x-l.nx,N.y-l.ny)<pa+1.5&&(Na(N.dano),$t(N.x,N.y,4,["#ff5a8a","#ffffff"],50),l.tirosInimigos.splice(g,1))}for(let g=l.raios.length-1;g>=0;g--){const N=l.raios[g];if(N.dono){if(N.dono.morto){l.raios.splice(g,1);continue}N.x=N.dono.x,N.y=N.dono.y}if(N.aviso>0){N.aviso-=M;continue}N.ligou||(N.ligou=!0,l.tremor=Math.max(l.tremor,.2),n(110,.4,"sawtooth",.06)),N.vida-=M,N.tick-=M,N.giro&&(N.ang+=N.giro*M),N.seg&&l.alien&&(N.x=l.alien.x,N.y=l.alien.y+8);const W=l.nx-N.x,ee=l.ny-N.y,ie=W*Math.cos(N.ang)+ee*Math.sin(N.ang),Ee=Math.abs(-W*Math.sin(N.ang)+ee*Math.cos(N.ang));ie>0&&ie<400&&Ee<8&&N.tick<=0&&(Na(N.dano||1),N.tick=.3),N.vida<=0&&l.raios.splice(g,1)}for(let g=l.campos.length-1;g>=0;g--){const N=l.campos[g];if(N.aviso>0){N.aviso-=M,N.aviso<=0&&(l.tremor=Math.max(l.tremor,.15),n(100,.2,"sawtooth",.05));continue}N.vida-=M,N.tick-=M,Math.hypot(l.nx-N.x,l.ny-N.y)<N.r+3&&N.tick<=0&&(Na(1),N.tick=.5),N.vida<=0&&l.campos.splice(g,1)}}function bi(){for(const M of[...l.inimigos]){const g=pi[M.tipo];if(Math.hypot(M.x-l.nx,M.y-l.ny)>=g.raio+pa||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(Na(g.dano)){const ee=l.nx-M.x,ie=l.ny-M.y,Ee=Math.hypot(ee,ie)||1;l.nx+=ee/Ee*18,l.ny+=ie/Ee*18}continue}if(g.dano<=0){const ee=M.x-l.nx,ie=M.y-l.ny,Ee=Math.hypot(ee,ie)||1;M.x+=ee/Ee*8,M.y+=ie/Ee*8;continue}$t(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const W=l.inimigos.indexOf(M);W>=0&&l.inimigos.splice(W,1),Na(g.dano)}}function oa(M){if(l.ta+=M,l.alien||(l.t+=M),l.invul=Math.max(0,l.invul-M),l.tremor=Math.max(0,l.tremor-M),l.flash=Math.max(0,l.flash-M),l.imaT=Math.max(0,l.imaT-M),l.turboT=Math.max(0,l.turboT-M),l.escudoT=Math.max(0,l.escudoT-M),l.buffVelT=Math.max(0,l.buffVelT-M),l.buffXpT=Math.max(0,l.buffXpT-M),l.buffDanoT>0&&(l.buffDanoT-=M,l.buffDanoT<=0&&(l.buffDanoT=0,l.danoGlobal/=1.5)),l.aviso=Math.max(0,l.aviso-M),l.comboT>0&&(l.comboT-=M,l.comboT<=0&&(l.combo=0)),l.upgFx&&(l.upgFx.t-=M,l.upgFx.t<=0&&(l.upgFx=null)),vn(M),l.alien?Ke(M):Lt(M),l.recarga-=M,l.arma===1&&l.recarga<=0){const g=Cn();g?(jo(g),l.recarga=1/(l.cadencia*l.recargaGlobal*(l.turboT>0?2:1))):l.recarga=.05}l.barreira<l.barreiraMax&&(l.barreiraT+=M,l.barreiraT>=l.tempoBarreira&&(l.barreira+=1,l.barreiraT=0,sn(l.nx,l.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),en(M),yi(M),qt(M),bi();for(const g of l.ondas)g.r+=g.v*M;l.ondas=l.ondas.filter(g=>g.r<g.max);for(let g=l.parts.length-1;g>=0;g--){const N=l.parts[g];N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0&&l.parts.splice(g,1)}for(let g=l.textos.length-1;g>=0;g--){const N=l.textos[g];N.y-=14*M,N.vida-=M,N.vida<=0&&l.textos.splice(g,1)}for(const g of l.inimigos)g.piscar=Math.max(0,(g.piscar||0)-M);if(l.hp<=0&&!l.pendente)if(l.alien)l.pendente="expulso";else{Tp();return}if(l.pendente){const g=l.pendente;l.pendente=null,ln(g==="vitoria");return}l.xp>=l.xpProx&&bp()}let sa=[];const iu=M=>M.nivel?M.nivel(l):l.niveis[M.id]|0;function yp(M,g=3){const N=[...M],W=[],ee=De=>{const J=O=>(typeof O.peso=="function"?O.peso(l):O.peso)||1,me=De.reduce((O,K)=>O+J(K),0);let he=Math.random()*me;for(const O of De)if(he-=J(O),he<=0)return O;return De[De.length-1]},ie=new Set(["dano_geral","reparo","armadura","motor","recarga_geral"]),Ee=N.filter(De=>ie.has(De.id));if(Ee.length&&g>0){const De=ee(Ee),J=N.indexOf(De);W.push(De),N.splice(J,1)}for(;N.length&&W.length<g;){const De=O=>(typeof O.peso=="function"?O.peso(l):O.peso)||1,J=N.reduce((O,K)=>O+De(K),0);let me=Math.random()*J,he=0;for(let O=0;O<N.length;O++)if(me-=De(N[O]),me<=0){he=O;break}W.push(N.splice(he,1)[0])}return W}function bp(){l.xp-=l.xpProx,l.nivel+=1,l.xpProx=Math.round(l.xpProx*1.3+2);const M=J_.filter(Ee=>iu(Ee)<Ee.max&&(!Ee.requer||Ee.requer(l)));if(sa=yp(M),!sa.length)return;G="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),te.className="arc-painel arc-upgrade";const g=a("div","arc-up-topo"),N=a("div");N.append(a("small",null,`SUBIU PARA O NÍVEL ${l.nivel}`),a("h3",null,"ESCOLHA UM UPGRADE"));const W=a("div","arc-arsenal arc-atributos"),ee=l.niveis;for(const Ee of[`✦ DANO ${ee.dano_geral|0}`,`♥ VIDA ${ee.reparo|0}`,`⬢ ARM ${l.armadura}`,`➤ VEL ${ee.motor|0}`,`↻ REC ${ee.recarga_geral|0}`])W.append(a("span","on",Ee));g.append(N,W);const ie=a("div","arc-cartas");sa.forEach((Ee,De)=>{const J=iu(Ee),me=a("button","arc-carta");me.style.setProperty("--cor",Ee.cor||"#4aa8ff");const he=a("span","arc-carta-topo");he.append(a("i",null,Ee.icone||"▲"),a("small",null,Ee.grupo||"UPGRADE"),a("em",null,(typeof Ee.raridade=="function"?Ee.raridade(l):Ee.raridade)||"COMUM"));const O=a("span","arc-up-pips");for(let K=1;K<=Ee.max;K++)O.append(a("i",K<=J?"on":K===J+1?"prox":""));me.append(he,a("b",null,Ee.nome),a("span","arc-desc",Ee.desc),O,a("strong",null,`[${De+1}] ESCOLHER · N${J} → N${J+1}`)),me.onclick=()=>au(De),ie.append(me)}),te.replaceChildren(g,ie,a("p","arc-up-dica","Dano, vida, armadura, velocidade e recarga afetam a nave inteira. Evoluções de arma continuam específicas.")),te.hidden=!1}function au(M){if(G!=="escolha"||!sa[M])return;const g=sa[M];g.aplicar(l),g.nivel||(l.niveis[g.id]=(l.niveis[g.id]|0)+1),eo(),l.upgFx={t:1,max:1},$t(l.nx,l.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),sn(l.nx,l.ny-16,`▲ ${g.nome}`,"#ffe14a"),te.hidden=!0,G="jogando",de=performance.now(),n(660,.08,"triangle",.05)}const vl=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","cadencia","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Vida, blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco","armadura"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Amplificador global e módulos específicos",lado:"dir",ancora:[.88,.42],ids:["dano","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],lr=document.createElement("canvas");lr.width=lr.height=128,lr.className="of-nave";const tn=lr.getContext("2d");tn.imageSmoothingEnabled=!1;let Ml=null,no=null;function Ep(M){const g=wn(128,128),N=t?"#496044":"#2e7de0",W=t?"#b9a58b":"#8b93a8",ee=t?"#76513d":"#5a6176",ie=t?"#e8d5b8":"#c9cdd8",Ee=t?"#28241f":"#171b2c",De=t?"#d88b55":"#ff7a3a",J=t?"#b7683f":"#e2533a";for(const[O,K]of[[44,34],[82,92]]){for(let _e=0;_e<3;_e++)g.linha(O+_e,92,K+_e,118,_e===1?W:ee);g.retangulo(K-5,118,13,3,ie)}g.retangulo(0,122,128,6,t?"#332b24":"#12172b");for(let O=0;O<128;O+=8)g.retangulo(O,123,4,4,t?"#d8b68e":"#ffd23f");g.disco(62,60,38,N),g.disco(65,62,33,Ee),g.elipse(46,30,7,3,t?"#fff1d7":"#cfe9ff"),g.elipse(40,36,3,2,t?"#d8b68e":"#9cc9ff");for(const[O,K,_e,it]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])g.retangulo(O,K,_e,it,ee),g.retangulo(O,K,_e,1,W),g.retangulo(O+2,K+3,_e-4,2,"#2d3348");for(const[O,K,_e,it]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])g.linha(O,K,_e,it,De),g.linha(O+1,K+1,_e+1,it+1,"#b34a1e");for(const[O,K,_e]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])g.pixel(O,K,_e);g.disco(65,62,14,W),g.disco(65,62,12,"#10131f");for(const[O,K]of[[50,47],[79,47],[50,76],[79,76]])g.retangulo(O,K,3,3,ie);for(let O=0;O<M.bateria;O++)g.retangulo(51+O*5,85,4,6,"#10131f"),g.retangulo(52+O*5,86,2,4,"#7dff9a");if(g.disco(80,34,5,ie),g.disco(80,34,4,t?"#f2d7ae":"#8bd3ff"),g.retangulo(77,33,6,1,t?"#fff1d7":"#ffffff"),t){for(const[O,K]of[[30,28],[34,25],[38,28],[34,31]])g.disco(O,K,2,"#91a56b");g.disco(34,28,2,"#e5b85c"),g.retangulo(22,82,10,4,"#e8d5b8"),g.retangulo(24,83,6,2,"#c96f45")}for(let O=0;O<M.casco;O++){const K=2.6+O*.5,_e=Math.round(62+Math.cos(K)*35),it=Math.round(60+Math.sin(K)*35);g.retangulo(_e-2,it-2,5,5,ee),g.retangulo(_e-1,it-1,3,3,ie)}const me=1+M.projetil,he=18+Math.floor(M.dano*1.6);for(let O=0;O<me;O++){const K=48+O*9;g.retangulo(88,K-2,8,9,W),g.retangulo(90,K,he,5,J),g.retangulo(90,K,he,1,"#ff9a6a"),g.retangulo(90+he,K-1,3,7,ie),M.lente>0&&g.disco(90+he+5,K+2,2,"#7be3ff");for(let _e=0;_e<M.cadencia;_e++)g.retangulo(92+_e*4,K+1,1,3,"#ffd23f")}g.retangulo(16,50,24,22,W);for(const O of[20,26,32])g.retangulo(O,50,2,22,ee);g.poligono([[16,50],[8,44],[8,78],[16,72]],ee),g.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(g.retangulo(18,76,14,6,W),g.retangulo(14,76,4,6,ee)),M.motor>=2&&(g.poligono([[28,50],[32,41],[36,50]],De),g.poligono([[28,72],[32,81],[36,72]],De)),g.retangulo(63,10,3,14,W),g.disco(64,8,4,t?"#d88b55":"#e2243a"),g.pixel(63,6,t?"#fff1d7":"#ffb3ba");for(let O=0;O<Math.min(4,M.ima);O++)g.elipse(72+O*5,17-O*2,4,2,O%2?W:ie);return M.xp>0&&(g.retangulo(55,14,2,8,W),g.disco(56,13,2,"#7dff9a")),g.contorno(t?"#241b17":"#070a1a"),g.c}const io=(M,g,N,W)=>{tn.fillStyle=W;for(let ee=-N;ee<=N;ee++)for(let ie=-N;ie<=N;ie++)ie*ie+ee*ee<=N*N+.5&&tn.fillRect(M+ie,g+ee,1,1)};function ru(M){const g=V.oficina,N=no&&M-no.t0<1.2?{i:no.i,u:(M-no.t0)/1.2}:null;tn.clearRect(0,0,128,128),Ml&&tn.drawImage(Ml,0,0);const W=g.nucleo>=4?["#ff7a2a","#ffc14a"]:g.nucleo>=2?["#22b85a","#7dff9a"]:t?["#b7683f","#f2d7ae"]:["#2f8cff","#8bd3ff"],ee=Math.sin(M*4)>0?1:0;io(65,62,9+ee,W[0]),io(65,62,6,W[1]),io(65,62,3,"#ffffff"),tn.fillStyle=W[1];for(let me=0;me<6;me++){const he=M*2+me*Math.PI/3;tn.fillRect(Math.round(65+Math.cos(he)*12),Math.round(62+Math.sin(he)*12),1,1)}const ie=me=>{const he=Math.round((8+g.motor*3+Math.floor(Math.random()*4))*(N&&N.i===1?1+1.5*(1-N.u):1));for(let O=0;O<he;O++){const K=Math.max(1,Math.round((1-O/he)*12));tn.fillStyle=O<he*.35?"#fff0a0":O<he*.7?"#ffc83d":"#ff7a3a",tn.fillRect(7-O,me-(K>>1),1,K)}};ie(61),g.motor>=3&&ie(79),Math.floor(M*2)%2&&(tn.fillStyle="#ff9aa6",tn.fillRect(63,6,2,2));const Ee=1+g.projetil,De=18+Math.floor(g.dano*1.6);if(Math.floor(M*3)%2)for(let me=0;me<Ee;me++)tn.fillStyle="#ffe14a",tn.fillRect(90+De+3,48+me*9+2,2,1);const J=g.escudo>0?.35+.13*g.escudo:.12;tn.globalAlpha=Math.min(1,J),tn.fillStyle="#7dff9a";for(const[me,he]of[[48,!0],[51,g.escudo>=4]])if(he)for(let O=0;O<72;O+=2){const K=O*Math.PI*2/72+M*.4;tn.fillRect(Math.round(62+Math.cos(K)*me),Math.round(60+Math.sin(K)*me),2,2)}tn.globalAlpha=1,N&&Ap(N,g)}function Ap(M,g){const N=vl[M.i],W=Math.round(N.ancora[0]*128),ee=Math.round(N.ancora[1]*128),ie=M.u,Ee=(De,J,me,he,O=28)=>{tn.fillStyle=he;for(let K=0;K<O;K++){const _e=K*Math.PI*2/O;tn.fillRect(Math.round(De+Math.cos(_e)*me),Math.round(J+Math.sin(_e)*me),2,2)}};tn.globalAlpha=1-ie,Ee(W,ee,4+ie*26,"#ffe14a"),tn.fillStyle="#ffffff";for(let De=0;De<10;De++){const J=De*.63+1,me=ie*34;tn.fillRect(Math.round(W+Math.cos(J)*me),Math.round(ee+Math.sin(J)*me-ie*6),2,2)}if(M.i===0)io(65,62,12+Math.round(ie*8),"#ffffff");else if(M.i===2)Ee(62,60,39,"#ffffff",64);else if(M.i===3)Ee(64,8,ie*42,"#8bd3ff",36),Ee(64,8,ie*24,"#ffffff",24);else if(M.i===4){const De=18+Math.floor(g.dano*1.6);for(let J=0;J<1+g.projetil;J++)io(90+De+6,50+J*9,4,"#ffe14a")}else M.i===5&&Ee(62,60,48+ie*6,"#ffffff",72);tn.globalAlpha=1}function _l(){const M=Pe.querySelector(".of-corpo");if(!M)return;const g=M.querySelector("svg");if(g.replaceChildren(),getComputedStyle(g).display==="none")return;const N=M.getBoundingClientRect(),W=lr.getBoundingClientRect(),ee="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(ie=>{const Ee=vl[Number(ie.dataset.i)],De=ie.getBoundingClientRect(),J=(Ee.lado==="esq"?De.right:De.left)-N.left,me=(De.top+De.bottom)/2-N.top,he=W.left+Ee.ancora[0]*W.width-N.left,O=W.top+Ee.ancora[1]*W.height-N.top,K=J+(Ee.lado==="esq"?18:-18),_e=document.createElementNS(ee,"path");_e.setAttribute("d",`M${J} ${me} L${K} ${me} L${he} ${O}`),_e.setAttribute("class","of-linha");const it=document.createElementNS(ee,"circle");it.setAttribute("cx",he),it.setAttribute("cy",O),it.setAttribute("r",4),it.setAttribute("class","of-ponto"),g.append(_e,it)})}window.addEventListener("resize",()=>{G==="oficina"&&_l()});function ou(M=-1,g=""){const N=V.oficina;Ml=Ep(N);const W=a("div","of-topo"),ee=a("button","arc-btn","VOLTAR [ESC]");ee.onclick=lu,W.append(a("h3",null,"OFICINA · ENGENHARIA DA NAVE"),a("span","of-moedas",`◆ ${V.moedas}`),ee);const ie=a("div","of-corpo"),Ee=a("div","of-col"),De=a("div","of-col"),J=a("div","of-centro");J.append(lr,a("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),vl.forEach((O,K)=>{const _e=a("div",K===M?"of-parte upgradiada":"of-parte");_e.dataset.i=String(K),K===M&&_e.append(a("span","of-selo","▲ UPGRADE!")),_e.append(a("h4",null,O.nome),a("p","sub",O.sub));for(const it of O.ids){const Ht=Gf.find(Ye=>Ye.id===it),ut=N[it],_t=ut>=Ht.max,Ot=Ht.custo(ut),Pn=a("div",K===M&&it===g?"of-melhoria upg":"of-melhoria"),In=a("div","info"),B=a("span","pips");for(let Ye=0;Ye<Ht.max;Ye++)B.append(a("i",Ye<ut?Ye===ut-1&&K===M&&it===g?"on nova":"on":""));In.append(a("b",null,Ht.nome),a("small",null,Ht.desc),B);const Oe=a("button","arc-btn pequeno",_t?"MÁX":`◆${Ot}`);Oe.disabled=_t||V.moedas<Ot,Oe.onclick=()=>{V.moedas>=Ot&&!_t&&(V.moedas-=Ot,V.oficina[it]+=1,le(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),no={i:K,t0:performance.now()/1e3},eo(),ou(K,it),Sl())},Pn.append(In,Oe),_e.append(Pn)}(O.lado==="esq"?Ee:De).append(_e)});const me=document.createElementNS("http://www.w3.org/2000/svg","svg");me.setAttribute("class","of-svg"),ie.append(Ee,J,De,me);const he=a("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");Pe.replaceChildren(W,ie,he),ru(performance.now()/1e3),requestAnimationFrame(_l)}function Sl(){E.textContent=`OFICINA (◆${V.moedas})`}function su(){Ge=G==="fim"?"fim":"inicio",G="oficina",Fe.hidden=!0,Ie.hidden=!0,ou(),Pe.hidden=!1,requestAnimationFrame(_l)}function lu(){G==="oficina"&&(G=Ge,Pe.hidden=!0,(Ge==="fim"?Ie:Fe).hidden=!1,Sl())}function Tp(){G="fim",L("fim");const M=Math.min($_,Math.floor(l.kills/30)+Math.floor(l.nivel/3)),g=Math.floor(l.t),N=g>V.tempo||l.kills>V.kills||l.onda>V.onda;V.tempo=Math.max(V.tempo,g),V.kills=Math.max(V.kills,l.kills),V.onda=Math.max(V.onda,l.onda),V.skin=(V.skin+1+Math.floor(Math.random()*($i.length-1)))%$i.length,V.moedas+=M,le(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),Ie.replaceChildren(a("h3",null,"FIM DE JOGO"),a("p",null,`Tempo: ${es(g)} · Monstros: ${l.kills} · Nível: ${l.nivel} · Onda: ${l.onda} · Melhor combo: x${l.melhorCombo}`),a("p","ganhou",`+${M+l.moedasRun} ◆ MOEDAS ESPACIAIS`),a("p","dica",`${l.moedasRun} coletadas + ${M} de bônus · Recorde: ${es(V.tempo)} · ${V.kills} monstros · ${V.onda} ondas${N?" · NOVO RECORDE!":""}`));const W=a("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");W.onclick=yl;const ee=a("button","arc-btn sec",`OFICINA (◆${V.moedas})`);ee.onclick=su;const ie=a("button","arc-btn sec","SAIR");ie.onclick=cr,Ie.append(W,ee,ie),Ie.hidden=!1}const es=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,cu=M=>M>=6?r.cristais[6]:M>=3?r.cristais[3]:M>=2?r.cristais[2]:r.cristais[1],fu=(M,g,N,W,ee)=>{y.fillStyle="#070a1a",y.fillRect(M-1,g-1,N+2,6),y.fillStyle="#3a2030",y.fillRect(M,g,N,4),y.fillStyle=ee,y.fillRect(M,g,Math.max(0,Math.round(N*W)),4)};function wp(M){y.fillStyle="#0a0614",y.fillRect(0,0,zt,kt);for(let g=0;g<6;g++){const N=10+(M*22+g*40)%240;y.strokeStyle=`rgba(138, 92, 255, ${.28*(1-N/250)})`,y.lineWidth=1,y.beginPath(),y.arc(Nn,ha,N,0,Math.PI*2),y.stroke()}for(let g=0;g<40;g++)y.fillStyle=Math.sin(M*2+g)>0?"#9a86c0":"#3a2f60",y.fillRect(g*53%zt,g*31%kt,1,1);y.strokeStyle="#8a5cff",y.lineWidth=2,y.strokeRect(mt.x0-3,mt.y0-3,mt.x1-mt.x0+6,mt.y1-mt.y0+6)}function ts(M,g,N,W,ee,ie="",Ee=!1){const De=M-(N+zt/2),J=g-(W+kt/2),me=Math.min((zt/2-10)/(Math.abs(De)||1e-6),(kt/2-10)/(Math.abs(J)||1e-6)),he=Math.round(zt/2+De*me),O=Math.round(kt/2+J*me);if(!(Ee&&Math.floor(l.ta*6)%2===0)&&(y.fillStyle="#070a1a",y.fillRect(he-3,O-3,7,7),y.fillStyle=ee,y.fillRect(he-2,O-2,5,5),y.fillStyle="#ffffff",y.fillRect(he-1,O-1,3,3),ie)){const K=he<zt/2;y.font="bold 8px monospace",y.textAlign=K?"left":"right";const _e=he+(K?7:-7),it=Math.max(10,Math.min(kt-4,O+3));y.fillStyle="#070a1a",y.fillText(ie,_e+1,it+1),y.fillStyle=Ee?"#ff9aa6":ee,y.fillText(ie,_e,it)}}function Rp(){const M=performance.now()/1e3,g=l?l.cx:Nn,N=l?l.cy:ha;if(y.save(),l&&l.alien?wp(M):$.desenhar(y,g,N,M,xl()),!l){y.restore();return}const W=Math.round(g-zt/2),ee=Math.round(N-kt/2),ie=(B,Oe,Ye=16)=>B>W-Ye&&B<W+zt+Ye&&Oe>ee-Ye&&Oe<ee+kt+Ye,Ee=!l.alien;y.save(),l.tremor>0&&y.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),y.translate(-W,-ee),y.strokeStyle="rgba(74, 168, 255, 0.12)",y.lineWidth=1;for(const B of[30,62])y.beginPath(),y.arc(Math.round(l.nx),Math.round(l.ny),B,0,Math.PI*2),y.stroke();for(const B of l.campos){if(!ie(B.x,B.y,40))continue;const Oe=Math.round(B.x),Ye=Math.round(B.y);if(B.aviso>0){const be=Math.floor(l.ta*8)%2===0;y.strokeStyle=be?"#ff3b4a":"#ffb3ba",y.lineWidth=1,y.setLineDash([3,3]),y.beginPath(),y.arc(Oe,Ye,B.r,0,Math.PI*2),y.stroke(),y.setLineDash([]),y.fillStyle="rgba(255, 59, 74, 0.12)",y.beginPath(),y.arc(Oe,Ye,Math.max(0,B.r*(1-B.aviso/(B.avisoMax||1.4))),0,Math.PI*2),y.fill()}else{y.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(l.ta*10)})`,y.beginPath(),y.arc(Oe,Ye,B.r,0,Math.PI*2),y.fill(),y.strokeStyle="#ff8a3a",y.lineWidth=2,y.beginPath(),y.arc(Oe,Ye,B.r,0,Math.PI*2),y.stroke();for(let be=0;be<6;be++){const ke=l.ta*3+be*1.05;y.fillStyle="#ffd23f",y.fillRect(Math.round(Oe+Math.cos(ke)*B.r*.6),Math.round(Ye+Math.sin(ke)*B.r*.6),2,2)}}}for(const B of l.campos)if(B.aviso>0&&B.ox!==void 0){const Oe=(B.avisoMax-B.aviso)/.45;if(Oe>=0&&Oe<1){const Ye=Math.round(B.ox+(B.x-B.ox)*Oe),be=Math.round(B.oy+(B.y-B.oy)*Oe-Math.sin(Math.PI*Oe)*24);y.fillStyle="#070a1a",y.fillRect(Ye-3,be-3,6,6),y.fillStyle="#ff7a3a",y.fillRect(Ye-2,be-2,4,4),y.fillStyle="#ffffff",y.fillRect(Ye-1,be-2,2,1)}}if(Ee){if(f.desenhar(y,W,ee,zt,kt,M),l.buraco&&ie(l.buraco.x,l.buraco.y,30)){w_(y,l.buraco.x,l.buraco.y,l.ta,Math.min(1,l.buraco.vida/3));const B=`${Math.ceil(l.buraco.vida)}s`,Oe=Math.round(l.buraco.x),Ye=Math.round(l.buraco.y)-28;y.save(),y.font="bold 8px monospace",y.textAlign="center",y.fillStyle="#070a1a",y.fillText(B,Oe+1,Ye+1),y.fillStyle=l.buraco.vida<8&&Math.floor(l.ta*6)%2===0?"#ff9aa6":"#d9a8ff",y.fillText(B,Oe,Ye),y.restore()}for(const B of l.rochas){if(!ie(B.x,B.y,20))continue;const Oe=B.hp<=B.hpMax*.34?2:B.hp<=B.hpMax*.67?1:0,Ye=s[B.tam].quadros[Oe];B.piscar>0&&(y.globalAlpha=.6),y.drawImage(Ye,Math.round(B.x-Ye.width/2),Math.round(B.y-Ye.height/2)),y.globalAlpha=1}for(const B of l.itens)!ie(B.x,B.y)||B.vida<4&&B.tipo!=="moedaEsp"&&Math.floor(l.ta*8)%2===0||(Ma[B.tipo]&&(y.save(),y.globalAlpha=.22+.14*Math.sin(l.ta*6+B.fase),y.fillStyle=Ma[B.tipo].cor,y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),10,0,Math.PI*2),y.fill(),y.restore()),y.drawImage(o[B.tipo],Math.round(B.x-6),Math.round(B.y-6+Math.sin(l.ta*4+B.fase))));for(const B of l.cristais)ie(B.x,B.y)&&y.drawImage(cu(B.v),Math.round(B.x-3.5),Math.round(B.y-4.5+Math.sin(l.ta*4+B.fase)))}for(const B of l.trilhasFogo){if(!ie(B.x,B.y,12))continue;const Oe=Math.max(0,B.vida/B.max),Ye=1+Math.floor(Math.sin(l.ta*18+B.x)*1.5);y.globalAlpha=Math.max(.18,Oe),y.fillStyle="#8f1d20",y.fillRect(Math.round(B.x)-5,Math.round(B.y)-2,10,5),y.fillStyle="#ff5a2a",y.fillRect(Math.round(B.x)-3,Math.round(B.y)-4-Ye,7,7+Ye),y.fillStyle="#ffe14a",y.fillRect(Math.round(B.x)-1,Math.round(B.y)-3-Ye,3,4+Ye),y.fillStyle="#ffffff",y.fillRect(Math.round(B.x),Math.round(B.y)-3-Ye,1,2),y.globalAlpha=1}for(const B of l.inimigos){if(!ie(B.x,B.y,40))continue;const Oe=Math.floor(l.ta*6+B.fase)%2;let Ye;if(B.tipo==="alien"){const be=h(B.v);Ye=(B.piscar>0?be.brancos:be.quadros)[Math.floor(l.ta*3)%2],y.globalAlpha=B.sumido>0?.25:B.estado==="carga"&&Math.floor(l.ta*16)%2===0?.6:1}else if(B.tipo==="chefe"){const be=d(B.b);Ye=(B.piscar>0?be.brancos:be.quadros)[Math.floor(l.ta*4)%2];const ke=25+Math.sin(l.ta*4)*3;y.fillStyle="rgba(5, 0, 12, .72)",y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),ke,0,Math.PI*2),y.fill(),y.strokeStyle=Math.floor(l.ta*8)%2?"#ff233f":"#6c1230",y.lineWidth=2,y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),ke+3,0,Math.PI*2),y.stroke()}else{const be=Y_[B.tipo]||B.tipo,ke=m(B.v).m[be];Ye=(B.piscar>0?ke.brancos:ke.quadros)[Oe],B.tipo==="fantasma"&&(y.globalAlpha=.85)}if(y.drawImage(Ye,Math.round(B.x-Ye.width/2),Math.round(B.y-Ye.height/2)),y.globalAlpha=1,B.tipo==="chefe")y.fillStyle="#ff233f",y.fillRect(Math.round(B.x)-7,Math.round(B.y)-5,4,2),y.fillRect(Math.round(B.x)+4,Math.round(B.y)-5,4,2),y.fillStyle="#ffffff",y.fillRect(Math.round(B.x)-6,Math.round(B.y)-5,1,1),y.fillRect(Math.round(B.x)+5,Math.round(B.y)-5,1,1),B.movEsp&&B.movEsp.carga>0&&(y.strokeStyle=B.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",y.lineWidth=2,y.setLineDash([3,3]),y.beginPath(),B.movEsp.tipo==="minhoca"?y.arc(Math.round(B.x),Math.round(B.y),20+Math.sin(l.ta*12)*4,0,Math.PI*2):(y.moveTo(Math.round(B.x),Math.round(B.y)),y.lineTo(Math.round(B.x+B.movEsp.dx*240),Math.round(B.y+B.movEsp.dy*240))),y.stroke(),y.setLineDash([]));else if(B.tipo==="curandeiro"){y.save(),y.globalAlpha=.3,y.strokeStyle="#7dff9a",y.lineWidth=1,y.setLineDash([2,4]),y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),Ns,0,Math.PI*2),y.stroke(),y.restore();const be=9+Math.sin(l.ta*6+B.fase)*2;y.strokeStyle="#7dff9a",y.lineWidth=1,y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),be,0,Math.PI*2),y.stroke(),y.fillStyle="#ffffff",y.fillRect(Math.round(B.x)-1,Math.round(B.y)-10,3,7),y.fillRect(Math.round(B.x)-3,Math.round(B.y)-8,7,3)}else if(B.tipo==="amplificador"){y.save(),y.globalAlpha=.3,y.strokeStyle="#ff7ab8",y.lineWidth=1,y.setLineDash([2,4]),y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),Ns,0,Math.PI*2),y.stroke(),y.restore();const be=11+(l.ta*8+B.fase)%5;y.strokeStyle=`rgba(255, 122, 184, ${.9-(be-11)*.12})`,y.lineWidth=2,y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),be,0,Math.PI*2),y.stroke(),y.fillStyle="#ff7ab8";for(const ke of[-4,0,4])y.fillRect(Math.round(B.x+ke),Math.round(B.y-10-Math.abs(ke)/2),2,4)}else B.tipo==="fulminante"&&(y.strokeStyle="#38c8ff",y.lineWidth=1,y.beginPath(),y.moveTo(Math.round(B.x)-8,Math.round(B.y)-7),y.lineTo(Math.round(B.x)-3,Math.round(B.y)-12),y.lineTo(Math.round(B.x),Math.round(B.y)-8),y.lineTo(Math.round(B.x)+5,Math.round(B.y)-13),y.stroke());if(B.buffT>0){y.fillStyle="#ffe14a";for(const be of[-5,3])y.fillRect(Math.round(B.x+be),Math.round(B.y-13),3,1),y.fillRect(Math.round(B.x+be+1),Math.round(B.y-14),1,1)}}for(const B of l.tirosInimigos)ie(B.x,B.y,4)&&(y.fillStyle="#ff5a8a",y.fillRect(Math.round(B.x)-2,Math.round(B.y)-2,4,4),y.fillStyle="#ffd0e0",y.fillRect(Math.round(B.x)-1,Math.round(B.y)-1,2,2));if(l.alien&&l.alien.estado==="aviso"){const B=l.alien;y.strokeStyle=Math.floor(l.ta*14)%2?"#ff3b4a":"#ffb3ba",y.lineWidth=2,y.setLineDash([4,4]),y.beginPath(),y.moveTo(Math.round(B.x),Math.round(B.y)),y.lineTo(Math.round(B.x+B.dirX*300),Math.round(B.y+B.dirY*300)),y.stroke(),y.setLineDash([])}for(const B of l.raios){const Oe=B.x+Math.cos(B.ang)*400,Ye=B.y+Math.sin(B.ang)*400;y.beginPath(),y.moveTo(Math.round(B.x),Math.round(B.y)),y.lineTo(Math.round(Oe),Math.round(Ye));const be=B.cor||"#ff3bd4";B.aviso>0?(y.strokeStyle=Math.floor(l.ta*16)%2?be:"#ffffff",y.lineWidth=1,y.setLineDash([3,3]),y.stroke(),y.setLineDash([])):(y.strokeStyle=be,y.lineWidth=7,y.stroke(),y.strokeStyle="#ffffff",y.lineWidth=3,y.stroke())}for(const B of l.tiros)y.fillStyle=B.critico?"#ff5a2a":"#ffe14a",y.fillRect(Math.round(B.x)-(B.critico?2:1),Math.round(B.y)-(B.critico?2:1),B.critico?4:3,B.critico?4:3),y.fillStyle="#ffffff",y.fillRect(Math.round(B.x),Math.round(B.y),1,1);if(l.laser){const B=Math.cos(l.laser.ang),Oe=Math.sin(l.laser.ang),Ye=l.nx+B*l.laser.len,be=l.ny+Oe*l.laser.len;y.beginPath(),y.moveTo(Math.round(l.nx+B*7),Math.round(l.ny+Oe*7)),y.lineTo(Math.round(Ye),Math.round(be)),y.strokeStyle=Math.floor(l.ta*24)%2?"#38c8ff":"#8bd3ff",y.lineWidth=4,y.stroke(),y.strokeStyle="#ffffff",y.lineWidth=1.5,y.stroke()}for(const B of l.misseis){const Oe=Math.cos(B.ang),Ye=Math.sin(B.ang);y.fillStyle="#070a1a",y.fillRect(Math.round(B.x)-3,Math.round(B.y)-3,6,6),y.fillStyle="#ff9a3a",y.fillRect(Math.round(B.x+Oe*1)-2,Math.round(B.y+Ye*1)-2,4,4),y.fillStyle="#ffffff",y.fillRect(Math.round(B.x+Oe*2),Math.round(B.y+Ye*2),1,1)}const De=l.invul>0&&Math.floor(l.ta*14)%2===0,J=Math.PI/8,me=Math.round(l.mira/J)*J,he=Math.round(l.nx),O=Math.round(l.ny),K=l.tiers||{motor:0,armas:0},_e=(B,Oe,Ye)=>{for(let be=0;be<Ye;be++)y.fillStyle=be<Ye*.35?"#fff0a0":be<Ye*.7?"#ffc83d":"#ff7a3a",y.fillRect(B-(be<Ye*.6?1:0),Oe+be,be<Ye*.6?2:1,1)},it=l.arma>=2?l.slots[l.arma-2]:"normal",Ht=it==="turbo"&&l.boostE>0,ut=2+K.motor+(l.movendo?3:0)+(l.turboT>0||Ht?3:0)+(l.driftT>0?5:0)+Math.floor(Math.random()*2);_e(he,O+8,ut),K.motor>=2&&(_e(he-5,O+7,Math.max(2,ut-3)),_e(he+4,O+7,Math.max(2,ut-3))),y.fillStyle=l.driftT>0?"#ffffff":l.turboT>0||Ht?"#ff7a3a":"#ffd23f";const _t=Math.min(4,l.projeteis),Ot=5+Math.min(4,Math.floor(K.armas/2)),Pn=-Math.sin(me),In=Math.cos(me);for(let B=0;B<_t;B++){const Oe=(B-(_t-1)/2)*2.4;for(let Ye=4;Ye<=4+Ot;Ye++)y.fillRect(Math.round(he+Math.cos(me)*Ye+Pn*Oe)-1,Math.round(O+Math.sin(me)*Ye+In*Oe)-1,2,2);V.oficina.lente>0&&(y.fillStyle="#7be3ff",y.fillRect(Math.round(he+Math.cos(me)*(5+Ot)+Pn*Oe)-1,Math.round(O+Math.sin(me)*(5+Ot)+In*Oe)-1,2,2),y.fillStyle=l.turboT>0?"#ff7a3a":"#ffd23f")}if(y.drawImage(De?H.branca:H.c,he-10,O-10),l.upgFx){const B=1-l.upgFx.t/l.upgFx.max;y.globalAlpha=.7*(1-B),y.drawImage(H.branca,he-10,O-10),y.globalAlpha=1-B,y.strokeStyle="#ffe14a",y.lineWidth=2,y.beginPath(),y.arc(he,O,Math.max(0,8+B*22),0,Math.PI*2),y.stroke(),y.strokeStyle="#ffffff",y.lineWidth=1,y.beginPath(),y.arc(he,O,Math.max(0,5+B*14),0,Math.PI*2),y.stroke(),y.globalAlpha=1}for(const[B,Oe,Ye]of[[l.buffDanoT,"#ff3b4a",14],[l.buffVelT,"#ffd23f",16],[l.buffXpT,"#a56bff",18]])B>0&&(B>2.5||Math.floor(l.ta*8)%2===0)&&(y.save(),y.globalAlpha=.55,y.strokeStyle=Oe,y.lineWidth=1,y.setLineDash([2,3]),y.beginPath(),y.arc(he,O,Ye+Math.sin(l.ta*8)*1.2,0,Math.PI*2),y.stroke(),y.restore());l.escudoT>0&&(l.escudoT>1.5||Math.floor(l.ta*10)%2===0)&&(y.strokeStyle="#8bd3ff",y.lineWidth=2,y.beginPath(),y.arc(he,O,11,0,Math.PI*2),y.stroke()),l.barreira>0&&(y.strokeStyle="#7dff9a",y.lineWidth=1,y.globalAlpha=.7,y.beginPath(),y.arc(he,O,12+(l.barreira>1?2:0),0,Math.PI*2),y.stroke(),y.globalAlpha=1);for(const B of zi()){const Oe=Math.round(B.x),Ye=Math.round(B.y);y.fillStyle="#070a1a",y.fillRect(Oe-3,Ye-3,7,7),y.fillStyle="#ff3bd4",y.fillRect(Oe-2,Ye-2,5,5),y.fillStyle="#ffffff",y.fillRect(Oe-1,Ye-1,2,2)}for(const B of l.parts)ie(B.x,B.y,4)&&(y.fillStyle=B.cor,y.fillRect(Math.round(B.x),Math.round(B.y),2,2));for(const B of l.ondas)y.strokeStyle=B.cor,y.lineWidth=2,y.globalAlpha=Math.max(0,1-B.r/B.max),y.beginPath(),y.arc(Math.round(B.x),Math.round(B.y),Math.max(0,B.r),0,Math.PI*2),y.stroke(),y.globalAlpha=1;y.font="bold 8px monospace",y.textAlign="center";for(const B of l.textos)y.globalAlpha=Math.min(1,B.vida*2),y.fillStyle="#070a1a",y.fillText(B.txt,Math.round(B.x)+1,Math.round(B.y)+1),y.fillStyle=B.cor,y.fillText(B.txt,Math.round(B.x),Math.round(B.y)),y.globalAlpha=1;if(y.restore(),Ee){const B=l.cristais.filter(Oe=>!ie(Oe.x,Oe.y,2)).map(Oe=>({c:Oe,d:Math.hypot(Oe.x-l.nx,Oe.y-l.ny)})).filter(Oe=>Oe.d<620).sort((Oe,Ye)=>Oe.d-Ye.d).slice(0,6);y.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:Oe}of B){const Ye=Oe.x-(W+zt/2),be=Oe.y-(ee+kt/2),ke=Math.min((zt/2-10)/(Math.abs(Ye)||1e-6),(kt/2-10)/(Math.abs(be)||1e-6));y.drawImage(cu(Oe.v),Math.round(zt/2+Ye*ke-3.5),Math.round(kt/2+be*ke-4.5))}y.globalAlpha=1,l.buraco&&!ie(l.buraco.x,l.buraco.y,2)&&ts(l.buraco.x,l.buraco.y,W,ee,"#c43fff",`${Math.ceil(l.buraco.vida)}s`,l.buraco.vida<8),l.chefe&&!ie(l.chefe.x,l.chefe.y,2)&&ts(l.chefe.x,l.chefe.y,W,ee,"#ff3b4a");for(const Oe of l.itens)Oe.tipo==="moedaEsp"&&!ie(Oe.x,Oe.y,2)&&ts(Oe.x,Oe.y,W,ee,"#38c8ff");for(const Oe of l.itens)Ma[Oe.tipo]&&!ie(Oe.x,Oe.y,2)&&ts(Oe.x,Oe.y,W,ee,Ma[Oe.tipo].cor,`${Math.ceil(Oe.vida)}s`,Oe.vida<5)}if(!l.alien){const B=(Oe,Ye,be,ke,tt="center")=>{y.font="bold 8px monospace",y.textAlign=tt,y.fillStyle="#070a1a",y.fillText(Oe,Ye+1,be+1),y.fillStyle=ke,y.fillText(Oe,Ye,be)};l.combo>=3&&B(`COMBO x${l.combo}`,zt-8,22,l.combo>=50?"#ff7ab8":l.combo>=25?"#ff9a3a":l.combo>=10?"#ffe14a":"#ffffff","right")}l.chefe&&(y.fillStyle="rgba(40, 0, 15, .34)",y.fillRect(0,0,zt,5),y.fillRect(0,kt-5,zt,5),y.fillRect(0,0,5,kt),y.fillRect(zt-5,0,5,kt),y.font="bold 7px monospace",y.textAlign="center",y.fillStyle="#070a1a",y.fillText(Va[l.chefe.b].nome,Nn+1,8),y.fillStyle="#ff7084",y.fillText(Va[l.chefe.b].nome,Nn,7),fu(Nn-60,11,120,l.chefe.hp/l.chefe.hpMax,"#ff3b4a")),l.alien&&fu(Nn-60,8,120,l.alien.hp/l.alien.hpMax,"#ff3bd4"),l.flash>0&&(y.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,l.flash*2.5)})`,y.fillRect(0,0,zt,kt)),y.restore()}let ns="";function Cp(){if(!l)return;const M=l.arma>=2?l.slots[l.arma-2]:"normal",g=[l.buffDanoT>0?`DANO+ ${Math.ceil(l.buffDanoT)}`:"",l.buffVelT>0?`VELOC+ ${Math.ceil(l.buffVelT)}`:"",l.buffXpT>0?`XP×2 ${Math.ceil(l.buffXpT)}`:"",l.lentidao<1?"DETRITOS: LENTO":"",l.imaT>0?"ÍMÃ":"",l.escudoT>0?`ESCUDO ${Math.ceil(l.escudoT)}`:"",l.turboT>0?`TURBO ${Math.ceil(l.turboT)}`:"",M==="turbo"&&l.boostE>0?"HIPERPROPULSOR":"",l.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),N=`${l.hp}/${l.maxHp}|${l.nivel}|${Math.floor(l.xp)}|${l.xpProx}|${l.kills}|${Math.floor(l.t)}|${l.onda}|${l.fase}|${l.aviso>0}|${l.avisoTxt}|${g}|${V.moedas}|${!!l.alien}`;if(N===ns)return;ns=N,re.replaceChildren(...Array.from({length:l.maxHp},(ee,ie)=>a("i",ie+1<=l.hp?"cheia":ie<l.hp?"meia":"vazia")));const W=Math.max(0,Math.round(l.hp*10)/10);re.setAttribute("aria-label",`${W} de ${l.maxHp} pontos de vida · ${Math.round(Math.min(.5,l.armadura*.06)*100)}% de redução por armadura`),pe.textContent=`NV ${l.nivel}`,at.style.width=`${Math.min(100,l.xp/l.xpProx*100)}%`,Re.setAttribute("aria-valuenow",String(Math.floor(l.xp))),Re.setAttribute("aria-valuemax",String(l.xpProx)),He.textContent=`☠ ${l.kills}`,Ce.textContent=l.alien?"BURACO NEGRO":l.onda>0?`F${l.fase} · ONDA ${l.onda}${l.ondaFila>0?` · ${l.ondaFila} A CAMINHO`:""}`:"",Ce.classList.toggle("alerta",!!l.alien||l.ondaEstado==="chefe"),lt.textContent=g,ce.textContent=`◆ ${V.moedas}`,F.hidden=!(l.aviso>0),F.textContent=l.avisoTxt,Me.textContent=es(Math.floor(l.t))}function Pp(){const M=l&&(G==="jogando"||G==="escolha"||G==="pausa");if(Ve.style.visibility=M?"visible":"hidden",!!M)for(let g=1;g<=4;g++){const{b:N,nm:W,barra:ee}=ft[g-1],ie=g===1?"normal":l.slots[g-2];let Ee="VAZIO",De=-1;ie&&(Ee=`${Z_[ie]||tl[ie].curto} · N${l.armasNivel[ie]}`,ie==="laser"?De=l.laserE/(l.laserMax*(1+.18*(l.armasNivel.laser-1))):ie==="missil"?De=1-Math.max(0,l.missilT)/l.missilMax:ie==="turbo"?De=l.boostE/l.boostMax:ie==="cura"?De=1-l.curaCd/l.curaMax:ie==="escudo"?De=l.escudoT>0?1:1-l.escudoCd/l.escudoMax:ie==="salto"?De=l.saltoCarga>0?1-l.saltoCarga/l.saltoCargaMax:1-l.saltoCd/l.saltoMax:ie==="drift"&&(De=l.driftT>0?1:1-l.driftCd/l.driftMax)),W.textContent!==Ee&&(W.textContent=Ee),ee.style.display=De<0?"none":"block",ee.style.width=`${Math.round(Math.max(0,Math.min(1,De))*100)}%`,N.classList.toggle("ativa",l.arma===g),N.classList.toggle("vazio",g>=2&&!ie),N.classList.toggle("quente",ie==="laser"&&l.laserQuente),N.disabled=g>=2&&!ie,N.setAttribute("aria-pressed",String(l.arma===g)),N.setAttribute("aria-label",`Arma ${g}: ${Ee}${ie==="laser"&&l.laserQuente?", superaquecida":""}`)}}function Ip(){const M=G==="jogando"||G==="pausa";if(Se.hidden=!M,!M)return;const g=G==="pausa";Se.textContent=g?"▶":"II",Se.title=g?"Continuar (Esc)":"Pausar (Esc)",Se.setAttribute("aria-label",g?"Continuar jogo":"Pausar jogo")}function uu(M){if(window.__curriculoArcadeGeracao!==i){dt=!1,cancelAnimationFrame(ze);return}if(!dt)return;const g=Math.min((M-de)/1e3,.05);de=M,G==="jogando"&&oa(g),G==="oficina"&&ru(M/1e3),$.passo(g),Rp(),Cp(),Pp(),Ip(),ze=requestAnimationFrame(uu)}function yl(){ge.clear(),Le.ativo=!1,ye.hidden=!0,k(),S="normal",T.pause(),P.pause(),x.currentTime=0,_(),Jo(),Zo(4),ns="",Fe.hidden=!0,Ie.hidden=!0,te.hidden=!0,ue.hidden=!0,Pe.hidden=!0,G="jogando",de=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function ao(M){M&&G==="jogando"?(G="pausa",ge.clear(),Le.ativo=!1,ye.hidden=!0,ue.hidden=!1,R()):!M&&G==="pausa"&&(G="jogando",ue.hidden=!0,de=performance.now(),_())}function Lp(){dt||(dt=!0,fe.classList.add("aberto"),S="normal",T.pause(),P.pause(),_(),k(),V=Cd(),we.textContent=V.tempo||V.kills||V.onda?`RECORDE  ${es(V.tempo)}  ·  ${V.kills} MONSTROS  ·  ONDA ${V.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",l=null,G="inicio",ns="",Jo(),Fe.hidden=!1,Ie.hidden=!0,te.hidden=!0,ue.hidden=!0,Pe.hidden=!0,re.replaceChildren(),pe.textContent="",He.textContent="",Me.textContent="",Ce.textContent="",lt.textContent="",ce.textContent=`◆ ${V.moedas}`,at.style.width="0",Sl(),de=performance.now(),ze=requestAnimationFrame(uu),D.focus({preventScroll:!0}))}function cr(){dt&&(dt=!1,ge.clear(),Le.ativo=!1,ye.hidden=!0,fe.classList.remove("aberto"),R(),cancelAnimationFrame(ze))}D.onclick=yl,E.onclick=su,Be.onclick=()=>ao(!1),nt.onclick=cr,Se.onclick=()=>ao(G==="jogando"),Ae.onclick=cr,fe.addEventListener("pointerdown",M=>{M.target===fe&&G!=="jogando"&&G!=="escolha"&&cr()}),window.addEventListener("visibilitychange",()=>{document.hidden&&ao(!0)});const du=M=>{const g=qe.getBoundingClientRect();Le.x=(M.clientX-g.left)/g.width*zt,Le.y=(M.clientY-g.top)/g.height*kt},Dp=M=>{const g=qe.getBoundingClientRect(),N=(M.clientX-g.left)/g.width*zt,W=(M.clientY-g.top)/g.height*kt;Le.dx=N-Le.origemX,Le.dy=W-Le.origemY;const ee=Le.dx*(g.width/zt),ie=Le.dy*(g.height/kt),Ee=Math.hypot(ee,ie)||1,J=Math.min(1,28/Ee);Ne.style.transform=`translate(calc(-50% + ${Math.round(ee*J)}px), calc(-50% + ${Math.round(ie*J)}px))`};qe.addEventListener("pointerdown",M=>{if(G==="jogando"){if(Le.ativo=!0,Le.toque=M.pointerType!=="mouse",du(M),Le.toque){const g=qe.getBoundingClientRect();Le.origemX=Le.x,Le.origemY=Le.y,Le.dx=Le.dy=0,ye.style.left=`${Math.round(M.clientX-g.left)}px`,ye.style.top=`${Math.round(M.clientY-g.top)}px`,Ne.style.transform="translate(-50%, -50%)",ye.hidden=!1}qe.setPointerCapture?.(M.pointerId)}}),qe.addEventListener("pointermove",M=>{Le.ativo&&(Le.toque?Dp(M):du(M))});for(const M of["pointerup","pointercancel"])qe.addEventListener(M,()=>{Le.ativo=!1,Le.toque=!1,Le.dx=Le.dy=0,ye.hidden=!0});return window.addEventListener("keyup",M=>ge.delete(M.code)),window.addEventListener("blur",()=>ge.clear()),window.addEventListener("keydown",M=>{if(dt){if(rt.includes(M.code)){M.preventDefault(),G==="jogando"&&ge.add(M.code);return}if(M.code==="Escape")M.preventDefault(),G==="jogando"?ao(!0):G==="pausa"?ao(!1):G==="oficina"?lu():(G==="inicio"||G==="fim")&&cr();else if(M.code==="Space"||M.code==="Enter")(G==="inicio"||G==="fim")&&(M.preventDefault(),yl());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const g=Number(M.code.slice(-1));G==="escolha"?au(g-1):ci(g)}}},!0),{abrir:Lp,fechar:cr,estaAberto:()=>dt}}const At=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},Id={mailto:()=>`mailto:${Sa.email}`,tel:()=>`tel:${Sa.telefoneTel}`,github:()=>Sa.github,linkedin:()=>Sa.linkedin,portfolio:()=>Sa.portfolio,repo:()=>Sa.repo},Vf=n=>Id[n]?Id[n]():n,n2={email:()=>Sa.email,telefone:()=>Sa.telefone};function kf(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function cf(n){const e=At("div","etiquetas");for(const t of n)e.append(At("span","etq",t));return e}function i2(n){const e=At("a","btn");return e.href=Vf(n.url),kf(e),e.append(At("span","ic",n.icone||"↗"),At("span","tx",n.rotulo)),e}function a2(n){const e=At("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=n2[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const r2=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function Ld(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function o2(n){const e=At("div","numeros jogo"),t=(i,a)=>{const r=At("div","num");r.append(At("b",null,String(i)),At("span",null,a)),e.append(r)};if(n==="cassino"){const i=Ld("curriculo-cassino-v1");if(!i)return At("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=Ld("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return At("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t(r2(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function s2(n){const e=At("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=At("summary"),i=At("span","tit");i.append(At("b",null,n.titulo)),n.local&&i.append(At("i",null,n.local)),t.append(i,At("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=At("div","corpo");if(n.texto&&a.append(At("p",null,n.texto)),n.tags&&a.append(cf(n.tags)),n.links){const r=At("div","links");for(const s of n.links)r.append(i2(s));a.append(r)}return e.append(t,a),e}const Dd={destaque:n=>At("p","destaque",n.texto),texto:n=>At("p",null,n.texto),dica:n=>At("p","dica",n.texto),numeros:n=>{const e=At("div","numeros");for(const t of n.itens){const i=At("div","num");i.append(At("b",null,t.v),At("span",null,t.r)),e.append(i)}return e},etiquetas:n=>cf(n.itens),grupo:n=>{const e=At("div","grupo");return e.append(At("h3",null,n.titulo),cf(n.itens)),e},cartao:s2,estatisticas:n=>o2(n.fonte),links:n=>{const e=At("div","contatos");for(const t of n.itens){const i=At("div","contato"),a=At("a","ln");a.href=Vf(t.url),kf(a);const r=At("span","tx");r.append(At("small",null,t.rotulo),At("b",null,t.valor)),a.append(At("span","ic",t.icone||"↗"),r),i.append(a),t.copiar&&i.append(a2(t.copiar)),e.append(i)}return e}};function l2(n,e){const t=At("div","rodape"),i=At("span","prog"),a=At("span","pts");for(const r of e.zonas)a.append(At("i",e.visitadas.has(r.id)?"vis":""));if(i.append(a,At("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(At("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const r=At("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");r.href=Vf("mailto"),kf(r),t.append(r)}return t}function c2(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(r=>({tipo:"texto",texto:r})))t.push((Dd[a.tipo]??Dd.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const r of i)r!==a&&(r.open=!1)});return t.push(l2(n,e)),t}const f2=.32,Nd=.7;function u2({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const r=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,r,{passive:!0});return{atualizar(s,o){const f=t&&n()&&!o&&!document.hidden?f2:0;a+=Math.max(-s*Nd,Math.min(s*Nd,f-a)),e.volume=Math.max(0,Math.min(1,a)),f>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):f===0&&a<=.001&&!e.paused&&e.pause()}}}const ip="curriculo-carinhos-v1";function d2(){try{const n=JSON.parse(localStorage.getItem(ip));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function h2(n){try{localStorage.setItem(ip,JSON.stringify(n))}catch{}}const p2=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let Ud=null;function m2(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,r)=>{e.fillStyle=r,p2.forEach((s,o)=>[...s].forEach((f,c)=>{f==="X"&&e.fillRect(c+i,o+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let Od=null;function g2(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(o,f)=>o<=7&&f<=i[o];for(let o=-7;o<=7;o++)for(let f=-7;f<=7;f++)(a(Math.abs(o),Math.abs(f))||a(Math.abs(f),Math.abs(o)))&&(t.fillStyle=f+o>4?"#b01820":f+o<-4?"#ff5a5f":"#e3262d",t.fillRect(8+f,8+o,1,1));const r=t.getImageData(0,0,17,17).data,s=(o,f)=>o>=0&&f>=0&&o<17&&f<17&&r[(f*17+o)*4+3]>0;t.fillStyle="#3a0d12";for(let o=0;o<17;o++)for(let f=0;f<17;f++)!s(f,o)&&(s(f+1,o)||s(f-1,o)||s(f,o+1)||s(f,o-1))&&t.fillRect(f,o,1,1);return e.toDataURL()}function ap(n,e,t,i,a,r,s){for(let o=0;o<s;o++){const f=document.createElement("i"),c=i[Math.floor(Math.random()*i.length)];f.className="coracao",f.style.cssText=`background-image:url(${n});width:${e*c}px;height:${t*c}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(r)}px;animation-delay:${(o*.09).toFixed(2)}s;`,f.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),f.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),f.addEventListener("animationend",()=>f.remove()),document.body.append(f)}}function x2(n,e,t=5){Ud??=m2(),ap(Ud,9,8,[2,2,3],n,e,t)}function v2(n,e,t=6){Od??=g2(),ap(Od,17,17,[2,3,3],n,e,t)}function M2(n){const e=new Zt,t=new Zt;e.add(t);const i=n(3120732),a=n(2325061),r=new _i({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:ai}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),o=new _i({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),f=new Wn(1,6,4),c=new Wn(1,6,4),u=new un(1,1,1,5),h=(S,w,I,_,R,L)=>{const U=new z(S,0,w),k=new z(I,_,R),$=k.clone().sub(U),H=new Mt(u,a);H.scale.set(L,$.length(),L),H.position.copy(U).addScaledVector($,.5),H.quaternion.setFromUnitVectors(new z(0,1,0),$.normalize()),t.add(H)},d=(S,w,I,_,R)=>{for(const L of[-1,1]){const U=new Mt(c,i);U.scale.set(.13*R,.025*R,.065*R),U.position.set(S+Math.cos(_)*.1*R*L,w,I+Math.sin(_)*.1*R*L),U.rotation.set(0,-_,L*.35),t.add(U)}},p=(S,w,I,_)=>{const R=new Zt;R.position.set(S,w,I),R.rotation.x=.95;for(let U=0;U<5;U++){const k=U/5*Math.PI*2,$=new Mt(f,r);$.scale.set(.075*_,.022*_,.15*_),$.position.set(Math.sin(k)*.1*_,0,Math.cos(k)*.1*_),$.rotation.y=k,R.add($)}const L=new Mt(f,s);return L.scale.setScalar(.045*_),L.position.y=.025*_,R.add(L),t.add(R),R},m=(S,w,I)=>{const _=new Mt(f,o);_.scale.set(.04,.065,.04),_.position.set(S,w,I),t.add(_)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const A=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),x=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const T=new Jt;T.position.set(0,.85,.05),e.add(T);const P=new Jt;P.position.set(0,1.05,0),e.add(P);let b=0;return{raiz:e,cabeca:T,topo:P,carinho(){b=1},atualizar(S,w){b=Math.max(0,b-w*2.2);const I=Math.sin(b*Math.PI);t.rotation.z=Math.sin(S*1.3)*.045+Math.sin(b*18)*.12*b,t.rotation.x=Math.sin(S*.9+1)*.03,t.scale.setScalar(1+I*.22),A.rotation.y=Math.sin(S*.8)*.15,v.rotation.y=Math.sin(S*.7+2)*.2,x.rotation.y=Math.sin(S*.75+4)*.2}}}const Us={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Ur=32,Br=24,_2=3,rp=1,S2=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],y2={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function b2({cauda:n,olhos:e}){const t=S2.map(f=>[...f,...[...f].reverse()]),i=(f,c,u)=>{t[f][c]=u,t[f][23-c]=u};if(e==="piscando")for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"K"),i(9,f,"G");if(e==="feliz"){for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"G"),i(9,f,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Ur,a.height=Br;const r=a.getContext("2d");t.forEach((f,c)=>f.forEach((u,h)=>{u!=="."&&(r.fillStyle=Us[u],r.fillRect(h+_2,c+rp,1,1))})),y2[n].forEach(([f,c],u)=>{r.fillStyle=u%3===2?Us.D:Us.G,r.fillRect(f-1,c,2,1)});const s=r.getImageData(0,0,Ur,Br).data,o=(f,c)=>f>=0&&c>=0&&f<Ur&&c<Br&&s[(c*Ur+f)*4+3]>0;r.fillStyle=Us.K;for(let f=0;f<Br;f++)for(let c=0;c<Ur;c++)!o(c,f)&&(o(c+1,f)||o(c-1,f)||o(c,f+1)||o(c,f-1))&&r.fillRect(c,f,1,1);return a}const Fd=1;function E2(){const n={},e=(d,p)=>{if(!n[d]){const m=new Oo(b2(p));m.colorSpace=kn,m.magFilter=m.minFilter=cn,m.generateMipmaps=!1,n[d]=new If({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Zt,i=new bh(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,rp/Br),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const r=a.getContext("2d"),s=r.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,32,32);const o=new Mt(new ra(.75,.5),new aa({map:new Oo(a),transparent:!0,opacity:.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03;const f=new Jt;f.position.y=.55;const c=new Jt;c.position.y=.8,t.add(o,i,f,c);let u=0,h=0;return{raiz:t,cabeca:f,topo:c,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const A=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${A}-${v}`,{cauda:A,olhos:v});const x=1+Math.sin(d*2.2)*.012;i.scale.set(Ur*m*Fd,Br*m*Fd*x,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const op="curriculo-futebol-v1",ff=.25,A2=.085,T2=1.6,mi=1.8,qi=.9,Vn=.6,vo=new z(0,1,0),w2=new z(0,.4,.92).normalize();function R2(){try{return JSON.parse(localStorage.getItem(op))?.gols|0}catch{return 0}}function C2(n){try{localStorage.setItem(op,JSON.stringify({gols:n}))}catch{}}function P2(){const n=new $r(ff,2),e=(1+Math.sqrt(5))/2,t=[];for(const o of[-1,1])for(const f of[-e,e])t.push([0,o,f],[o,f,0],[f,0,o]);const i=t.map(o=>new z(...o).normalize()),a=n.attributes.position,r=new Float32Array(a.count*3),s=new z;for(let o=0;o<a.count;o+=3){s.set(0,0,0);for(let c=0;c<3;c++)s.add(new z(a.getX(o+c),a.getY(o+c),a.getZ(o+c)));s.normalize();const f=i.some(c=>s.dot(c)>Math.cos(.36));for(let c=0;c<3;c++)r.set(f?[.07,.07,.1]:[.97,.97,.97],(o+c)*3)}return n.setAttribute("color",new vi(r,3)),new Mt(n,new _i({vertexColors:!0,flatShading:!0,roughness:.55}))}function I2(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Oo(n);return t.wrapS=t.wrapT=Xs,t.magFilter=t.minFilter=cn,t.generateMipmaps=!1,t}function L2(){const n=new Zt,e=new _i({color:16119285,roughness:.5,flatShading:!0}),t=o=>new un(.045,.045,o,6),i=(o,f,c,u,h)=>{const d=new Mt(t(o),e);d.position.set(f,c,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const o of[-mi/2,mi/2])for(const f of[0,-Vn])i(qi,o,qi/2,f,"y");for(const o of[0,-Vn])i(mi+.09,0,qi,o,"x"),i(mi+.09,0,.04,o,"x");for(const o of[-mi/2,mi/2])i(Vn,o,qi,-Vn/2,"z"),i(Vn,o,.04,-Vn/2,"z");const a=(o,f)=>{const c=I2();return c.repeat.set(o/.15,f/.15),new Mt(new ra(o,f),new aa({map:c,transparent:!0,alphaTest:.3,side:ai,depthWrite:!1}))},r=a(mi,qi);r.position.set(0,qi/2,-Vn);const s=a(mi,Vn);s.rotation.x=Math.PI/2,s.position.set(0,qi,-Vn/2),n.add(r,s);for(const o of[-mi/2,mi/2]){const f=a(Vn,qi);f.rotation.y=Math.PI/2,f.position.set(o,qi/2,-Vn/2),n.add(f)}return n.traverse(o=>{o.isMesh&&o.material===e&&(o.castShadow=!0)}),n}function D2(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new Mt(new ra(n*2,n*2),new aa({map:new Oo(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function N2({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:r,dirsZonas:s,raioBloqueio:o,obstaculos:f,dirsSitios:c,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=R2(),A=0,v="jogando",x=0,T=-1;const P=new xi,b=new xi,S=new xi,w=new xi,I=new z,_=new z,R=new z,L=new z,U=new z,k=new z,$=new Zt,H=P2(),V=D2(.35);H.position.y=ff,H.castShadow=!0;const ae=new Jt;ae.position.y=.85,$.add(V,H,ae);const X={d:new z(0,1,0),ue:0,un:0,escala:1,piv:null};X.piv=e($,X.d.clone(),0);const xe=L2(),se=new Jt;se.position.set(0,1.5,-Vn/2),xe.add(se);const le={d:new z(0,1,0),ex:new z,ez:new z,escala:1,piv:null};le.piv=e(xe,le.d.clone(),0);const fe=Ce=>{const lt=document.createElement("div");return lt.className="rotulo pet",lt.textContent=Ce,h.append(lt),lt},Qe=fe("bola"),We=fe("gol"),gt=()=>m?`gol · ${m}`:"gol";function ht(Ce,lt,ce){if(!ce){Ce.style.opacity="0";return}lt.getWorldPosition(R).project(u),Ce.style.transform=`translate(${Math.round((R.x*.5+.5)*window.innerWidth)}px, ${Math.round((-R.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Ce.style.opacity="1"}const bt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Ce=>new z(...Ce));function re({folga:Ce,jogadorMin:lt=0,jogadorMax:ce=Math.PI,visivel:Me=-1,longe:Se=[],tentativas:Ae=400}){k.copy(vo).applyQuaternion(P.copy(i).invert());const Te=new z;for(let qe=0;qe<Ae;qe++){Te.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const y=Te.angleTo(k);if(!(y<lt||y>ce)&&!(Me>-1&&R.copy(Te).applyQuaternion(i).dot(w2)<Me)&&!(a(Te)<r+.1)&&!bt.some(ye=>a(R.copy(Te).addScaledVector(ye,.07).normalize())<r+.03)&&!Se.some(({d:ye,min:Ne})=>Te.angleTo(ye)<Ne)&&!s.some((ye,Ne)=>Te.angleTo(ye)<o[Ne]+Ce+.1)&&!f.some(ye=>Te.angleTo(ye.d)<ye.r+Ce)&&!Object.values(c).some(ye=>Te.angleTo(ye)<.25+Ce))return Te.clone()}return null}function pe(Ce,lt){le.d.copy(Ce),le.piv.quaternion.setFromUnitVectors(vo,Ce),xe.rotation.y=lt,w.copy(le.piv.quaternion).multiply(b.setFromAxisAngle(vo,lt)),le.ex.set(1,0,0).applyQuaternion(w),le.ez.set(0,0,1).applyQuaternion(w),le.escala=.01}function Re(Ce){X.d.copy(Ce),X.piv.quaternion.setFromUnitVectors(vo,Ce),X.ue=X.un=0,X.escala=.01}function at(Ce){const lt=re({folga:.3,jogadorMin:.9,jogadorMax:Ce?1.7:Math.PI,visivel:Ce?.3:-1})??re({folga:.2,jogadorMin:.7,jogadorMax:Ce?1.9:Math.PI,visivel:Ce?.1:-1,tentativas:800})??re({folga:.1,tentativas:800})??le.d.clone();pe(lt,Math.random()*Math.PI*2);const ce=re({folga:.12,jogadorMin:.55,jogadorMax:Ce?1:Math.PI,visivel:Ce?.5:-1,longe:[{d:lt,min:.9}]})??re({folga:.06,jogadorMin:.4,tentativas:800})??X.d.clone();Re(ce)}at(!0);function He(){v="comemorando",x=A+1,m+=1,C2(m),We.textContent=gt(),se.getWorldPosition(R).project(u);const Ce=(R.x*.5+.5)*window.innerWidth,lt=(-R.y*.5+.5)*window.innerHeight;v2(Ce,lt+40,6);const ce=document.createElement("div");ce.className="popup",ce.textContent="GOL!",ce.style.left=`${Math.round(Ce)}px`,ce.style.top=`${Math.round(lt)}px`,ce.style.fontSize="30px",document.body.append(ce),setTimeout(()=>ce.remove(),1e3),[523,659,784,1047,1319].forEach((Me,Se)=>p(Me,Se===4?.4:.11,"square",.05,Se*.09))}return{teste:{bola:X,gol:le,colocarBola:Re,colocarGol:pe,golsAtuais:()=>m},atualizar(Ce,{vLeste:lt,vNorte:ce,VEL:Me,pulando:Se,pausado:Ae}){if(Ae)return;A+=Ce,P.copy(i).invert();const Te=v==="comemorando";U.copy(X.d),I.copy(X.d).applyQuaternion(i);const qe=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!Te&&!Se&&qe<A2){const F=I.x,ct=-I.z,Fe=Math.hypot(F,ct)||1,D=lt*Me,E=ce*Me,Y=Math.hypot(D,E);let Z,oe,ve;Y>.12&&(D*F+E*ct)/(Y*Fe)>-.2?(Z=D/Y*.75+F/Fe*.65,oe=E/Y*.75+ct/Fe*.65,ve=Math.max(Math.hypot(X.ue,X.un),Y*1.5+.25)):(Z=F/Fe,oe=ct/Fe,ve=.5);const we=Math.hypot(Z,oe)||1;X.ue=Z/we*ve,X.un=oe/we*ve,Y>.12&&A-T>.22&&(T=A,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const y=Math.exp(-(Te?5:T2)*Ce);X.ue*=y,X.un*=y;const ye=Math.hypot(X.ue,X.un);ye<.01?X.ue=X.un=0:(L.set(-X.un,0,-X.ue).normalize(),b.setFromAxisAngle(L,ye*Ce),I.applyQuaternion(b),X.d.copy(I).applyQuaternion(P).normalize());const Ne=(F,ct)=>{const Fe=Math.cos(ct);X.d.dot(F)<=Fe||(L.crossVectors(F,X.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),X.d.applyQuaternion(b.setFromAxisAngle(L,ct-Math.acos(Math.min(1,X.d.dot(F))))).normalize(),X.ue*=.3,X.un*=.3)};s.forEach((F,ct)=>Ne(F,o[ct]+.03));for(const F of f)Ne(F.d,F.r+.03);if(X.piv.quaternion.premultiply(b.setFromUnitVectors(U,X.d)),ye>=.01&&(R.set(X.ue,0,-X.un).normalize().applyQuaternion(P).applyQuaternion(w.copy(X.piv.quaternion).invert()),L.crossVectors(vo,R),L.lengthSq()>1e-9&&H.quaternion.premultiply(S.setFromAxisAngle(L.normalize(),ye*t*Ce/ff))),X.escala=X.escala+(1-X.escala)*(1-Math.exp(-6*Ce)),$.scale.setScalar(X.escala),le.escala=le.escala+(1-le.escala)*(1-Math.exp(-6*Ce)),xe.scale.setScalar(le.escala*(Te?1+Math.sin((A-x)*20)*.06:1)),Te)A>=x&&(v="jogando",at(!1));else{R.copy(X.d).sub(le.d);const F=R.dot(le.ex)*t,ct=R.dot(le.ez)*t+Vn/2;Math.abs(F)<mi/2-.12&&Math.abs(ct)<Vn/2-.02&&Math.abs(R.dot(le.d))<.2&&He()}_.copy(le.d).applyQuaternion(i),ht(Qe,ae,I.dot(d)>.2),ht(We,se,_.dot(d)>.2)}}}const vt=/(?:^|\/)yas\/?$/i.test(location.pathname);document.documentElement.classList.toggle("tema-yas",vt);const nn={ceu:2366231,estrelas:16766627,nuvens:16179144,atmosfera:14252357,marRaso:9091234,marMedio:5209968,marFundo:2706502,espuma:16181976,areia:14202510,grama0:7439195,grama1:5401421,grama2:3427388,tronco:7754045,copa:[4743236,6058573],copa2:8228187,pedra:9271144},ei=5,wa=6.5/ei,uf=.7,nl=new z(0,1,0),U2=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function df(n,e){const t=e*Math.PI/180;return new z(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const O2=n=>df(...U2[n]??[1.2+n%3*.5,n*137.5]),li=Sn.map((n,e)=>O2(e)),ia={jasmim:df(.4,180),mazzy:df(.5,295)},sp=(n,e)=>Object.values(ia).some(t=>n.angleTo(t)<e),F2=.6,lp=n=>n.escala??F2,$o=Sn.map(n=>1.85*lp(n)/ei+.03),B2=$o.map(n=>n+.22),z2=(n,e,t)=>n+(e-n)*t,Kr=(n,e,t)=>Math.max(e,Math.min(t,n)),Hs=(n,e,t,i)=>z2(n,e,1-Math.exp(-t*i));function Hf(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function G2(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function cc(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,f=t-r,c=m=>m*m*(3-2*m),u=c(s),h=c(o),d=c(f);let p=0;for(let m=0;m<2;m++)for(let A=0;A<2;A++)for(let v=0;v<2;v++){const x=(m?u:1-u)*(A?h:1-h)*(v?d:1-d);p+=x*G2(i+m,a+A,r+v)}return p}const Bd=Math.cos(.5);function ml(n){const e=cc(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+cc(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+cc(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>Bd&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of li){const a=n.dot(i);a>Bd&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const gl=.5,V2=window.matchMedia?.("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<900,k2=Number(navigator.deviceMemory||8)<=4,Vo=V2||k2,Qn=new jM({antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});Qn.setPixelRatio(Math.min(window.devicePixelRatio||1,Vo?1:2));Qn.shadowMap.enabled=!0;Qn.shadowMap.type=bo;document.body.appendChild(Qn.domElement);const Xn=new Mh;Xn.background=new St(vt?nn.ceu:725030);const fn=new ii(42,1,.1,200);Xn.add(new Zm(vt?16766376:12374271,vt?3352095:2366541,vt?1.25:1));const Ia=new jm(vt?16760952:16773332,vt?2.15:1.9);Ia.position.set(7,ei+9,9);Ia.target.position.set(0,2,0);Ia.castShadow=!0;Ia.shadow.mapSize.set(Vo?1024:2048,Vo?1024:2048);Object.assign(Ia.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});Ia.shadow.bias=-4e-4;Xn.add(Ia,Ia.target);const hf=new Th({color:vt?nn.estrelas:16777215,size:vt?.48:.42,sizeAttenuation:!0,fog:!1}),pf=new _i({color:vt?nn.nuvens:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),mf=[],gf=[],xf={uMarRaso:{value:new St(vt?nn.marRaso:5685998)},uMarMedio:{value:new St(vt?nn.marMedio:3112924)},uMarFundo:{value:new St(vt?nn.marFundo:1922744)},uEspuma:{value:new St(vt?nn.espuma:13955580)},uAreia:{value:new St(vt?nn.areia:15981987)},uGrama0:{value:new St(vt?nn.grama0:7327594)},uGrama1:{value:new St(vt?nn.grama1:5027680)},uGrama2:{value:new St(vt?nn.grama2:3117141)}};{const n=Hf(3),e=[];for(let a=0;a<900;a++){const r=new z(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new yn;t.setAttribute("position",new jt(e,3)),Xn.add(new am(t,hf));const i=new Mt(new Wn(4,32,32),new aa({color:vt?16760179:16773577,fog:!1}));i.position.set(24,16,-62),Xn.add(i)}const Qr=new Zt;Xn.add(Qr);{const i=new Uint8Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new z,s=255;for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const A=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const x=(v+.5-2)/320*2-1,[T,P,b]=a[h](x,A);r.set(T,P,b).normalize();const S=((p+m)*3*324+d+v)*4;i[S]=Math.round(Kr(ml(r),0,1)*255),i[S+3]=s}}}const o=new Ah(i,3*324,2*324,oi,On);o.minFilter=o.magFilter=Mn,o.generateMipmaps=!1,o.needsUpdate=!0;const f=new _i({roughness:.9});f.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:gl}},xf),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const c=new Mt(new Wn(ei,128,96),f);c.receiveShadow=!0,Qr.add(c);const u=new Mt(new Wn(ei*1.06,48,48),new aa({color:vt?nn.atmosfera:6990079,transparent:!0,opacity:vt?.16:.1,side:Bn,depthWrite:!1}));Xn.add(u)}function $a(n,e,t=0){const i=new Zt;return i.quaternion.setFromUnitVectors(new z(0,1,0),e),n.position.y=ei,n.rotation.y=t,i.add(n),Qr.add(i),i}const pt=(n,e={})=>new _i({color:n,roughness:.8,flatShading:!0,...e});function Hr(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const Jr=[];{const n=Hf(77),e=new z,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(nl)<.3*wa)&&!li.some((a,r)=>e.angleTo(a)<$o[r]+.2)&&!sp(e,.2)&&!(ml(e)<gl+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Zt,s=.5+n()*.45,o=new Mt(new un(.1,.14,.6,6),pt(vt?nn.tronco:8014379));o.position.y=.3;const f=n()>.5?0:1,c=new Mt(vt?new $r(.62,1):new Aa(.5,1.2,7),pt(vt?nn.copa[f]:f===0?3120732:2460238));mf.push({m:c.material,v:f}),c.position.y=vt?1.05:1.1,vt&&c.scale.set(1.15,.86,1.05);const u=new Mt(vt?new $r(.48,1):new Aa(.38,.9,7),pt(vt?nn.copa2:3453032));gf.push(u.material),u.position.set(vt?.18:0,vt?1.48:1.7,0),vt&&u.scale.set(1.1,.8,1),r.add(o,c,u),r.scale.setScalar(s),$a(Hr(r),a,n()*6),Jr.push({d:a,r:(.05*s+.02)*wa})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new Mt(new Df(.22+n()*.25,0),pt(vt?nn.pedra:9278376));r.position.y=.1;const s=new Zt;s.add(r),$a(Hr(s),a,n()*6),Jr.push({d:a,r:.045*wa,baixo:!0})}if(vt)for(let i=0;i<24;i++){const a=t();if(!a)continue;const r=new Zt,s=i%5,o=(c,u,h,d,p,m,A)=>{const v=new Mt(new na(c,u,h),pt(d));return v.position.set(p,m,A),r.add(v),v},f=(c,u,h,d,p)=>{const m=new Mt(new Wn(c,8,6),pt(u));return m.position.set(h,d,p),r.add(m),m};if(s===0){const c=new Mt(new un(.18,.25,.35,8),pt(11034428));c.position.y=.18,r.add(c),o(.04,.55,.04,4808772,0,.58,0);for(const[u,h,d,p]of[[-.2,.62,0,.17],[.18,.72,.05,.16],[-.12,.88,-.03,.15],[.2,.98,0,.13]])f(p,h>.8?8228187:5401421,u,h,d).scale.set(1.2,.65,.8)}else if(s===1)[[6108456,0,.07],[13732439,.05,.18],[4216904,-.03,.29]].forEach(([c,u,h],d)=>{const p=o(.65-d*.06,.11,.42,c,u,h,0);p.rotation.y=(d-1)*.14,o(.5-d*.05,.02,.43,15391687,u,h,.01)});else if(s===2){o(.62,.62,.06,13940112,0,.36,0);const c=new Mt(new un(.25,.25,.035,18),pt(1512723));c.rotation.x=Math.PI/2,c.position.set(.08,.38,.05),r.add(c);const u=new Mt(new un(.07,.07,.04,12),pt(13201221));u.rotation.x=Math.PI/2,u.position.set(.08,.38,.08),r.add(u)}else if(s===3){f(.26,10116663,0,.3,0).scale.set(.85,1.1,.34),f(.18,12088132,0,.55,0).scale.set(.8,1,.32),o(.09,.65,.07,6635564,0,.92,0),o(.24,.12,.08,6635564,0,1.25,0);const h=f(.065,2366231,0,.38,.09);h.scale.z=.18}else{o(.58,.38,.26,2828581,0,.28,0),o(.22,.08,.2,7754045,-.12,.51,0);const c=new Mt(new un(.15,.15,.18,12),pt(1514265));c.rotation.x=Math.PI/2,c.position.set(.1,.3,.2),r.add(c);const u=new Mt(new un(.08,.08,.19,12),pt(9091234,{emissive:2706502,emissiveIntensity:.45}));u.rotation.x=Math.PI/2,u.position.set(.1,.3,.22),r.add(u)}r.scale.setScalar(.65+n()*.25),$a(Hr(r),a,n()*Math.PI*2)}}const Wf=new Zt;Xn.add(Wf);{const n=Hf(5),e=pf;for(let t=0;t<10;t++){const i=new z(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Zt;for(let s=0;s<4;s++){const o=new Mt(new $r(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=ei+4+n()*2.5;const r=new Zt;r.quaternion.setFromUnitVectors(new z(0,1,0),i),r.add(a),Wf.add(r),Hr(a)}}function H2(n){const e=new Of;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function W2(n,e){const t=new Zt,i=new St(e),a=pt(e,{emissive:e,emissiveIntensity:.1}),r=pt(i.clone().multiplyScalar(.78)),s=pt(i.clone().multiplyScalar(.5)),o=pt(10133684),f=pt(5922936),c=pt(10119740),u=pt(5913122),h=pt(15856635),d=pt(13225432),p=pt(1776942),m=pt(14693962),A=pt(16762941),v=new _i({color:16774856,emissive:16771488,emissiveIntensity:1.2}),x=(S,w,I=0,_=0,R=0)=>{const L=new Mt(S,w);return L.position.set(I,_,R),t.add(L),L},T=(S,w,I,_,R,L,U)=>x(new na(S,w,I),_,R,L,U),P=(S,w,I,_,R,L,U,k=12)=>x(new un(S,w,I,k),_,R,L,U),b=(S,w,I,_,R)=>x(new Wn(S,10,8),w,I,_,R);switch(n){case"casa":{T(2.5,.22,2,o,0,.11,0),T(2.2,1.25,1.7,a,0,.84,0);for(const w of[-1,1]){const I=T(2.5,.12,1.15,s,0,1.78,w*.5);I.rotation.x=w*.62}T(2.56,.14,.16,pt(i.clone().multiplyScalar(.35)),0,2.13,0);const S=new Of;S.moveTo(-.85,0),S.lineTo(.85,0),S.lineTo(0,.62),S.closePath();for(const w of[-1,1]){const I=x(new Qs(S,{depth:.06,bevelEnabled:!1}),a,w*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}T(.3,.8,.3,f,.65,2,-.28),T(.4,.08,.4,o,.65,2.42,-.28),T(.62,1,.04,h,0,.72,.86),T(.5,.9,.06,u,0,.67,.88),b(.04,d,.16,.65,.93),T(.9,.12,.4,o,0,.1,1.2);for(const w of[-.72,.72]){T(.55,.55,.05,h,w,.98,.86),T(.42,.42,.06,v,w,.98,.88),T(.04,.42,.07,h,w,.98,.89),T(.42,.04,.07,h,w,.98,.89);for(const I of[-1,1])T(.14,.5,.04,r,w+I*.38,.98,.88)}for(const w of[-1,1])T(.05,.5,.5,h,w*1.11,.95,.1),T(.06,.38,.38,v,w*1.12,.95,.1);b(.07,v,.5,1.2,.92),P(.04,.04,.5,c,1.55,.45,1.1,6),T(.32,.22,.22,m,1.55,.8,1.1),T(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,A],[-.7,pt(16747216)],[-.55,m]].forEach(([w,I])=>b(.07,I,w,.4,1.2));break}case"predio":{T(2.4,.2,2.2,f,0,.1,0),T(2,.7,1.8,s,0,.55,0),T(1.7,2.6,1.5,a,0,2.15,0),T(1.2,.5,1.05,r,0,3.7,0);for(let S=0;S<5;S++)for(let w=0;w<3;w++)T(.34,.36,.05,(S*2+w)%5===0?s:v,-.5+w*.5,1.2+S*.5,.77);for(let S=0;S<5;S++)for(const w of[-1,1])for(let I=0;I<2;I++)T(.05,.36,.34,(S+I)%3===0?s:v,w*.86,1.2+S*.5,-.3+I*.6);for(const S of[1,3.45])T(1.78,.07,1.58,s,0,S,0);T(.7,.55,.05,v,0,.45,.93),T(.04,.55,.06,s,0,.45,.94),T(1.2,.08,.55,m,0,.86,1.12);for(const S of[-1,1])P(.03,.03,.62,d,S*.55,.55,1.36,6);T(.9,.14,.05,v,0,3.7,.54),P(.22,.22,.5,c,.3,4.2,.1),x(new Aa(.26,.2,10),u,.3,4.55,.1),T(.3,.2,.3,o,-.3,4.05,.25),P(.025,.025,.9,d,-.3,4.4,-.2,6),b(.07,pt(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{T(2.4,.16,2.4,f,0,.08,0);for(let S=0;S<9;S++)T(.26,.05,.12,S%2?p:A,-1.04+S*.26,.18,1.12);P(.5,.56,2.3,h,0,1.9,0,16),x(new Aa(.5,1,16),a,0,3.55,0),P(.52,.52,.16,m,0,2.95,0,16),P(.58,.58,.1,s,0,.8,0,16),x(new Vr(.21,.045,8,18),d,0,2.4,.5),b(.18,pt(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let S=0;S<3;S++){const w=T(.08,.9,.7,a,0,1,0),I=new Zt;I.rotation.y=S/3*Math.PI*2+.5,w.position.set(.62,1,0),w.parent.remove(w),I.add(w),t.add(I)}x(new Aa(.34,.8,10),pt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const S of[-.35,.35])T(.1,3.5,.1,d,1.1,1.9,S);for(const S of[.7,1.5,2.3,3.1])T(.08,.08,.7,d,1.1,S,0);T(.75,.1,.12,d,.75,2.6,0),b(.07,v,1.1,3.7,0),x(new un(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const S of[-1.3,-.7])T(.08,.2,.3,d,S,.25,.7);break}case"estrela":{P(1.15,1.3,.2,o,0,.1,0,20),P(.8,.95,.22,f,0,.31,0,20),P(.16,.22,1.5,d,0,1.15,0),P(.3,.3,.1,d,0,1.95,0);const S=new Zt;S.name="gira",S.position.y=2.85,t.add(S);const w=new Mt(new Qs(H2(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),pt(e,{emissive:e,emissiveIntensity:.55}));w.position.z=-.15,S.add(w);const I=new Mt(new Vr(1.25,.03,8,40),pt(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,S.add(I),[0,2.1,4.2].forEach((_,R)=>{const L=new Mt(new Wn(.1,10,8),pt([16735631,5822207,16769354][R],{emissive:[16735631,5822207,16769354][R],emissiveIntensity:.7}));L.position.set(Math.cos(_)*1.25,0,Math.sin(_)*1.25),S.add(L)});break}case"cassino":{const S=pt(13620959,{emissive:3818064,emissiveIntensity:.25}),w=(I,_)=>T(.36,.5,.06,pt(_,{emissive:_,emissiveIntensity:.7}),I,2.05,.66);P(1.3,1.4,.16,f,0,.08,0,20),T(2.2,.3,1.6,s,0,.3,0),T(1.8,2.7,1.3,S,0,1.8,0),T(2,.55,1.4,s,0,3.35,0),T(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)b(.06,I%2?v:m,-.96+I*.24,3.66,.68);T(1.45,.75,.1,pt(1381675),0,2.2,.62),w(-.46,16726858),w(0,16769354),w(.46,5822207);for(const[I,_]of[[-.45,16726858],[0,5822090],[.45,5810431]])P(.1,.1,.08,pt(_,{emissive:_,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;T(.5,.06,.04,p,0,1.3,.66),T(1.2,.28,.45,s,0,.95,.8),P(.06,.06,1.1,d,1.12,2.1,0,8),b(.2,pt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const S=pt(vt?4808772:4892927,{emissive:vt?2505778:1922744,emissiveIntensity:.4}),w=pt(vt?15914926:9163775,{emissive:vt?12019775:4892927,emissiveIntensity:.6}),I=pt(vt?12019775:16743001,{emissive:vt?7287846:9058848,emissiveIntensity:.3}),_=vt?pt(12166539):d;x(new Wn(.95,16,12),S,0,1.85,0).scale.set(1,.85,1),x(new Vr(.92,.05,8,28),_,0,1.85,0).rotation.x=Math.PI/2,x(new Wn(.58,14,10),w,0,2.15,.35),x(new Wn(.2,8,8),pt(vt?16773591:16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let R=0;R<4;R++){const L=R*Math.PI/2,U=x(new na(.55,.14,.95),I,Math.cos(L)*1.05,1.7,Math.sin(L)*1.05);U.rotation.y=-L}for(let R=0;R<3;R++){const L=R*Math.PI*2/3+.4,U=x(new un(.05,.07,1,8),_,Math.cos(L)*.62,.62,Math.sin(L)*.62);U.rotation.z=Math.cos(L)*.3,U.rotation.x=-Math.sin(L)*.3,x(new un(.16,.16,.05,8),_,Math.cos(L)*.78,.12,Math.sin(L)*.78)}if(x(new Aa(.3,.55,10),pt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,P(.03,.03,.6,_,0,2.95,0,6),b(.1,pt(vt?14191445:16726858,{emissive:vt?12019775:16726858,emissiveIntensity:.8}),0,3.28,0),vt){const R=pt(9545067,{emissive:3427388,emissiveIntensity:.2});for(const[L,U,k]of[[-.2,1.92,-.55],[.2,1.92,.55]]){const $=b(.12,R,L,U,.86);$.scale.set(.45,1,.35),$.rotation.z=k}b(.055,pt(15054940),0,1.92,.94),T(.3,.08,.04,pt(15259064),-.47,1.56,.82),T(.18,.07,.045,pt(13201221),.52,1.68,.83)}break}case"carta":{P(.26,.32,.4,o,0,.2,0,10),P(.12,.15,1,d,0,.9,0,8),T(1.7,.9,.9,a,0,1.85,0);const S=x(new un(.45,.45,1.7,16,1,!1,0,Math.PI),pt(e,{emissive:e,emissiveIntensity:.1,side:ai}),0,2.3,0);S.rotation.z=Math.PI/2,T(1,.07,.05,p,0,2.02,.46),T(1.5,.5,.04,r,0,1.62,.46),T(.4,.26,.03,h,-.42,1.62,.49),b(.05,m,-.42,1.62,.52),P(.025,.025,.7,d,.9,2,0,6),T(.32,.22,.04,m,1.05,2.28,0),P(.035,.045,1.9,d,-1.2,.95,.5,6),b(.1,v,-1.2,1.95,.5),T(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const X2={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},q2=new _i({color:16774856,emissive:16771488,emissiveIntensity:1.3}),cp=Sn.map((n,e)=>{const t=new Zt,i=new Zt,a=new Mt(new un(1.85,1.95,.12,28),pt(3883096));a.position.y=.04;const r=new Mt(new un(1.55,1.65,.14,28),pt(new St(n.cor).multiplyScalar(.45)));r.position.y=.1,i.add(a,r);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new Mt(new un(.035,.045,.55,6),pt(13225432));m.position.set(d,.38,p);const A=new Mt(new Wn(.08,8,6),q2);A.position.set(d,.7,p),i.add(m,A)}const s=new Mt(new Vr(2.08,.07,8,48),new aa({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const o=W2(n.icone,n.cor);o.position.y=.17;const f=new Jt;f.position.y=X2[n.icone]??4.5,t.add(i,s,o,f),Hr(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar(lp(n)),$a(t,li[e],0);const c=o.getObjectByName("gira");return{raiz:t,anel:s,icone:o,topo:f,gira:c,giraY:c?c.position.y:0}}),Xf=M2(pt),qf=E2();$a(Xf.raiz,ia.jasmim,.4);$a(qf.raiz,ia.mazzy,0);Jr.push({d:ia.jasmim,r:.035*wa},{d:ia.mazzy,r:.055*wa});const ja=vt?{pasta:"avatar-yas",frames:{parado:5,andar:6,correr:5,pular:5},largura:168,altura:332,pesY:292,escala:.55}:{pasta:"avatar",frames:{parado:4,andar:5,correr:5,pular:5},largura:84,altura:182,pesY:168,escala:1},Ws=ja.frames,$2=["direita","esquerda","norte","sul"],zd=vt?[0,1,2,3,4,3,2,1]:[0,1,2,3,2,1],fp=ja.largura,ko=ja.altura,Y2=ja.pesY,J2="./",Z2=new Jm,Ea={};for(const[n,e]of Object.entries(Ws)){Ea[n]={};for(const t of $2)Ea[n][t]=Array.from({length:e},(i,a)=>{const r=Z2.load(`${J2}${ja.pasta}/${n}-${t}-${a}.png`);return r.colorSpace=kn,r.magFilter=r.minFilter=cn,r.generateMipmaps=!1,new If({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Yo=3.6,$f=Yo*(fp/ko);const Ra=new bh(Ea.parado.sul[0]);Ra.center.set(.5,(ko-Y2)/ko);Ra.scale.set($f,Yo,1);Ra.position.y=ei;Xn.add(Ra);const Gd=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new Mt(new ra(1.7,1.7),new aa({map:new Oo(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=ei+.04,Xn.add(i),i})(),La=n=>document.querySelector(n);La("#nome").textContent=`${Ed.nome} · ${Ed.titulo}`;const up=La("#pontos"),K2=La("#fichas-hud b");Sn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),up.appendChild(e)});const Mo=La("#painel"),dp=La("#acao");let Vd=-2,Ya=-1;const hp="curriculo-visitadas-v1",qa=new Set;try{for(const n of JSON.parse(localStorage.getItem(hp))||[])Sn.some(e=>e.id===n)&&qa.add(n)}catch{}const Q2=["↑","↗","→","↘","↓","↙","←","↖"];function j2(n){let e=-1,t=1/0;if(Sn.forEach((s,o)=>{if(o===n||qa.has(s.id))return;const f=li[n].angleTo(li[o]);f<t&&(t=f,e=o)}),e<0)return null;const i=new z().copy(li[e]).applyQuaternion(Si),a=Math.atan2(i.x,-i.z),r=Math.acos(Kr(i.y,-1,1));return{id:Sn[e].id,seta:Q2[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(r/uf))}}function pp(n){[...up.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",qa.has(Sn[t].id))})}pp(-1);function eS(n){if(n!==Vd){if(Vd=n,n<0)Mo.classList.remove("on");else{const e=Sn[n];if(!qa.has(e.id)){qa.add(e.id);try{localStorage.setItem(hp,JSON.stringify([...qa]))}catch{}}Mo.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),Mo.querySelector("h2").textContent=e.titulo,La("#texto").replaceChildren(...c2(e,{zonas:Sn,visitadas:qa,proxima:j2(n)})),Mo.scrollTop=0,dp.hidden=!e.jogo,Mo.classList.add("on")}pp(n)}}const Ci=new Set;window.addEventListener("keydown",n=>{if(!(Fn.estaAberto()||Zf.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&Ya>=0&&Sn[Ya].jogo){Ci.clear(),_p(Sn[Ya].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&Ta){Mp(Ta);return}Ci.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>Ci.delete(n.code));window.addEventListener("blur",()=>Ci.clear());const Ki={x:0,y:0,pulo:!1},Ho=new Map;function Yf(){Ki.x=0,Ki.y=0;const n=Ho.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;Ki.x=e*a,Ki.y=-t*a}}const Jf=Qn.domElement;Jf.addEventListener("pointerdown",n=>{Ho.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),Yf()});Jf.addEventListener("pointermove",n=>{const e=Ho.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,Yf())});for(const n of["pointerup","pointercancel","pointerleave"])Jf.addEventListener(n,e=>{const t=Ho.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(Ki.pulo=!0,setTimeout(()=>{Ki.pulo=!1},120)),Ho.delete(e.pointerId),Yf()});const tS=Vo?420:640,mp=19,Wo=new si(2,2,{minFilter:cn,magFilter:cn,type:On,samples:0});Wo.depthTexture=new Xr(2,2);const gp=new Mh,nS=new ul(-1,1,1,-1,0,1),xp=new Mi({uniforms:{tCor:{value:Wo.texture},tProf:{value:Wo.depthTexture},uPixel:{value:new Ue(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:fn.near},uFar:{value:fn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});gp.add(new Mt(new ra(2,2),xp));function vp(){const n=window.innerWidth,e=window.innerHeight;Qn.setSize(n,e),fn.aspect=n/e,fn.userData.afasta=1/Kr(fn.aspect/1.1,.5,1),fn.updateProjectionMatrix();const t=Math.min(tS,e),i=Math.max(2,Math.round(t*fn.aspect));Wo.setSize(i,t),xp.uniforms.uPixel.value.set(1/i,1/t);const a=2*mp*fn.userData.afasta*Math.tan(U0.degToRad(fn.fov/2))/t;Yo=ko*a*ja.escala,$f=fp*a*ja.escala}window.addEventListener("resize",vp);vp();const Si=Qr.quaternion,kd=new URLSearchParams(location.search).get("zona");if(kd!==null){const n=Kr(Math.round(Number(kd))||0,0,Sn.length-1);Si.setFromUnitVectors(li[n],new z(.25,1,-.2).normalize())}const iS=2*7.2/20;let ma=0,ga=0,ka=0,Os=0,Lr=!0,fc=0,Hd=!1,Hn=0,xa="sul",uc=0;const Ha=new z,il=new xi,Qi=new z,al=n=>Math.acos(Kr(Qi.copy(n).applyQuaternion(Si).y,-1,1));function Wd(n,e){if(Qi.copy(n).applyQuaternion(Si),Qi.y<.8)return;const t=Math.acos(Math.min(1,Qi.y));t>=e||(Ha.crossVectors(nl,Qi),Ha.lengthSq()<1e-10&&Ha.set(0,0,1),Ha.normalize(),il.setFromAxisAngle(Ha,e-t),Si.premultiply(il))}const jr=document.createElement("div");jr.id="rotulos";document.body.append(jr);const aS=Sn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,jr.append(e),e}),rl=new z,dc=new z;function rS(n){rl.copy(fn.position).normalize(),Sn.forEach((e,t)=>{const i=aS[t];if(Qi.copy(li[t]).applyQuaternion(Si),t===n||Qi.dot(rl)<.2){i.style.opacity="0";return}cp[t].topo.getWorldPosition(dc).project(fn),i.style.transform=`translate(${Math.round((dc.x*.5+.5)*window.innerWidth)}px, ${Math.round((-dc.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const oS=.2,ol=d2(),Dr=(n,e,t="triangle",i=.05,a=0)=>Fn.bip(n,e,t,i,a),vf=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:ia.jasmim,modelo:Xf,livre:0,som:()=>{Dr(1047,.12,"sine"),Dr(1319,.12,"sine",.05,.09),Dr(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:ia.mazzy,modelo:qf,livre:0,som:()=>{Dr(680,.09),Dr(930,.1,"triangle",.05,.07),Dr(620,.2,"triangle",.045,.15)}}],er=document.createElement("button");er.id="carinho";er.hidden=!0;document.body.append(er);const sS=vf.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",jr.append(n),n}),Xo=document.createElement("div");Xo.className="rotulo frase";Xo.textContent="♥ a flor mais bela do meu mundo todo";const lS=new z(0,-7.7,0);let hc=0;jr.append(Xo);let Ta=null,Xd="";const Ji=new z;function Mp(n){Hn<n.livre||(n.livre=Hn+.5,n.modelo.carinho(),ol[n.id]+=1,h2(ol),n.modelo.cabeca.getWorldPosition(Ji).project(fn),x2((Ji.x*.5+.5)*window.innerWidth,(-Ji.y*.5+.5)*window.innerHeight,5),n.som())}er.addEventListener("click",()=>{Ta&&Mp(Ta),er.blur()});function cS(n,e){let t=null,i=1/0;for(const o of vf){const f=al(o.d);f<oS&&f<i&&(i=f,t=o)}Ta=e?null:t;const a=Ta?`♥ ${Ta.frase} [E]`:"";a!==Xd&&(Xd=a,er.textContent=a.toUpperCase(),er.hidden=!a);const r=Yo/ko;Xf.atualizar(Hn,n),qf.atualizar(Hn,n,r),vf.forEach((o,f)=>{const c=sS[f];if(Qi.copy(o.d).applyQuaternion(Si),o===Ta||Qi.dot(rl)<.2){c.style.opacity="0";return}o.modelo.topo.getWorldPosition(Ji).project(fn),c.textContent=ol[o.id]?`${o.nome} ♥ ${ol[o.id]}`:o.nome,c.style.transform=`translate(${Math.round((Ji.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Ji.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,c.style.opacity="1"});const s=Kr((.42-al(ia.jasmim))/.22,0,1);hc=Hs(hc,.8*s,3,n),Ji.copy(lS).project(fn),Xo.style.transform=`translate(${Math.round((Ji.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Ji.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,Xo.style.opacity=hc.toFixed(2)}const qd={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function fS(n){if(vt){for(const[a,r]of Object.entries(qd))xf[r].value.set(nn[a]);for(const{m:a,v:r}of mf)a.color.set(nn.copa[r%nn.copa.length]);for(const a of gf)a.color.set(nn.copa2);Xn.background.set(nn.ceu),hf.color.set(nn.estrelas),pf.color.set(nn.nuvens);return}const e=Co(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries(qd))xf[r].value.set(e[a]);const t=Co(n.arvores)?.cores;if(t){for(const{m:a,v:r}of mf)a.color.set(t.copa[r%t.copa.length]);for(const a of gf)a.color.set(t.copa2)}const i=Co(n.ceu)?.cores;i&&(Xn.background.set(i.fundo),hf.color.set(i.estrelas),pf.color.set(i.nuvens))}const Fn=f_({aoMudarSkins:fS,aoMudarFichas:n=>{K2.textContent=String(n)}}),Zf=t2({bip:(...n)=>Fn.bip(...n),somAtivo:()=>Fn.somAtivo(),temaYas:vt}),uS=N2({planeta:Qr,fincar:$a,R:ei,q:Si,altura:ml,NIVEL_MAR:gl,dirsZonas:li,raioBloqueio:$o,obstaculos:Jr,dirsSitios:ia,camera:fn,rotulosEl:jr,camDir:rl,bip:(...n)=>Fn.bip(...n)}),dS=u2({somAtivo:()=>Fn.somAtivo()}),Mf=La("#som");let pc=null;Mf.addEventListener("click",()=>{Fn.alternarSom(),Mf.blur()});function _p(n){n==="arcade"?Zf.abrir():Fn.abrir()}dp.addEventListener("click",()=>{Ya>=0&&Sn[Ya].jogo&&(Ci.clear(),_p(Sn[Ya].jogo))});const hS=4,$d=5,pS=.2*wa,mS=new _i({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),Yd=new _i({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),Kf=[],gS=new z;function Sp(n){const e=new z;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(ml(e)<gl+.06)&&!(gS.copy(e).applyQuaternion(Si).angleTo(nl)<.45*wa)&&!(li.some((i,a)=>e.angleTo(i)<$o[a]+.2)||sp(e,.25))&&!Jr.some(i=>e.angleTo(i.d)<i.r+.09*wa)&&!Kf.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(nl,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=Hn+2}for(let n=0;n<hS;n++){const e=new Zt,t=new Zt,i=new Mt(new un(.3,.3,.08,12),mS),a=new Mt(new un(.2,.2,.1,12),Yd);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,f=new Mt(new na(.1,.14,.1),Yd);f.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),f.rotation.x=o,t.add(f)}t.position.y=ei+.7,e.add(t),Hr(e),Qr.add(e);const r={d:new z,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};Kf.push(r),Sp(r)}const Fs=new z;function xS(n){Ra.getWorldPosition(Fs),Fs.project(fn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((Fs.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-Fs.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function vS(n){for(const e of Kf){if(!e.ativa){Hn>=e.volta&&Sp(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=ei+.7+Math.sin(Hn*3+e.fase)*.08,al(e.d)<pS&&(e.ativa=!1,e.raiz.visible=!1,e.volta=Hn+25+Math.random()*25,Fn.adicionarFichas($d),xS("+"+$d),Fn.bip(988,.07,"square",.07),Fn.bip(1319,.22,"square",.07,.08),Fn.bip(1976,.3,"triangle",.05,.08))}}let Jd=performance.now();Qn.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-Jd)/1e3,.05);Jd=n,Hn+=e;const t=(b,S)=>Ci.has(b)||Ci.has(S)?1:0,i=Fn.estaAberto()||Zf.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||Ki.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||Ki.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(Ci.has("ShiftLeft")||Ci.has("ShiftRight"))&&(a*=1.7,r*=1.7),ma=Hs(ma,a,9,e),ga=Hs(ga,r,9,e);const f=Math.hypot(ma,ga);f>.003&&(Ha.set(ga,0,ma).normalize(),il.setFromAxisAngle(Ha,f*uf*e),Si.premultiply(il),Hd=!0),li.forEach((b,S)=>Wd(b,$o[S]));for(const b of Jr)b.baixo&&ka>.5||Wd(b.d,b.r);Si.normalize(),Hd&&La("#dica").classList.add("some"),!i&&(Ci.has("Space")||Ki.pulo)&&Lr&&(Os=7.2,Lr=!1,uc=0),Lr||(Os-=20*e,uc+=e,ka+=Os*e,ka<=0&&(ka=0,Os=0,Lr=!0));const u=Math.min(1.7,f);if(f>.08){const b=Math.abs(ma)>Math.abs(ga)*1.1,S=Math.abs(ga)>Math.abs(ma)*1.1;b?xa=ma>0?"direita":"esquerda":S&&(xa=ga>0?"norte":"sul")}fc+=u*e*9;let h;if(Lr)f>1.2?h=Ea.correr[xa][Math.floor(fc)%Ws.correr]:f>.08?h=Ea.andar[xa][Math.floor(fc)%Ws.andar]:h=xa==="sul"?Ea.parado.sul[zd[Math.floor(Hn*4)%zd.length]]:Ea.parado[xa][0];else{const b=Math.min(.999,uc/iS);h=Ea.pular[xa][Math.floor(b*Ws.pular)]}Ra.material=h;const d=Lr&&f<=.08&&xa!=="sul"?Math.sin(Hn*2.4)*.012:0;Ra.scale.set($f*(1-d*.5),Yo*(1+d),1),Ra.position.y=ei+ka;const p=Math.min(ka,1.5);Gd.scale.setScalar(1-p*.2),Gd.material.opacity=.55-p*.2;const m=fn.userData.afasta,A=mp*m,v=.42,x=1.5;fn.position.set(0,x+Math.sin(v)*A,Math.cos(v)*A),fn.lookAt(0,x,0),Wf.rotation.y=Math.sin(Hn*.1)*.4;let T=-1,P=1/0;li.forEach((b,S)=>{const w=al(b);w<B2[S]&&w<P&&(P=w,T=S)}),cp.forEach((b,S)=>{const w=S===T;b.anel.material.opacity=Hs(b.anel.material.opacity,w?.55+Math.sin(Hn*4)*.25:0,8,e),b.gira&&(b.gira.rotation.y+=e*(w?2.4:.8),b.gira.position.y=b.giraY+Math.sin(Hn*1.6+S)*(w?.12:.06))}),Ya=T,eS(T),rS(T),vS(e),cS(e,i),uS.atualizar(e,{vLeste:ma,vNorte:ga,VEL:uf,pulando:ka>.4,pausado:i}),dS.atualizar(e,i),Fn.somAtivo()!==pc&&(pc=Fn.somAtivo(),Mf.classList.toggle("mudo",!pc)),Vo?(Qn.setRenderTarget(null),Qn.render(Xn,fn)):(Qn.setRenderTarget(Wo),Qn.render(Xn,fn),Qn.setRenderTarget(null),Qn.render(gp,nS))});
