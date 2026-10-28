(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Ef="186",kp=0,Su=1,Hp=2,Eo=1,Wp=2,So=3,Qa=0,Gn=1,ri=2,ta=0,Ao=1,yu=2,bu=3,Eu=4,Xp=5,Or=100,qp=101,Yp=102,$p=103,Jp=104,Zp=200,Kp=201,Qp=202,jp=203,th=204,nh=205,e0=206,t0=207,n0=208,i0=209,a0=210,r0=211,o0=212,s0=213,c0=214,vl=0,Ml=1,_l=2,Io=3,Sl=4,yl=5,bl=6,El=7,ih=0,l0=1,f0=2,Oi=0,ah=1,rh=2,oh=3,sh=4,ch=5,lh=6,fh=7,uh=300,ja=301,Wr=302,Tc=303,wc=304,fc=306,qs=1e3,Qi=1001,Al=1002,un=1003,u0=1004,as=1005,Sn=1006,Rc=1007,Ya=1008,Bn=1009,dh=1010,hh=1011,Lo=1012,Af=1013,Bi=1014,Di=1015,zi=1016,Tf=1017,wf=1018,Do=1020,ph=35902,mh=35899,gh=1021,xh=1022,si=1023,ia=1026,$a=1027,vh=1028,Rf=1029,er=1030,Cf=1031,Pf=1033,zs=33776,Gs=33777,Vs=33778,ks=33779,Tl=35840,wl=35841,Rl=35842,Cl=35843,Pl=36196,Il=37492,Ll=37496,Dl=37488,Nl=37489,Ys=37490,Ul=37491,Ol=37808,Fl=37809,Bl=37810,zl=37811,Gl=37812,Vl=37813,kl=37814,Hl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,$l=37820,Jl=37821,Zl=36492,Kl=36494,Ql=36495,jl=36283,ef=36284,$s=36285,tf=36286,d0=3200,nf=0,h0=1,Ta="",Xn="srgb",Js="srgb-linear",Zs="linear",Wt="srgb",Cc=7680,p0=519,m0=512,g0=513,x0=514,If=515,v0=516,M0=517,Lf=518,_0=519,Mh=35044,Au="300 es",Ni=2e3,No=2001;function S0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y0(){const n=Uo("canvas");return n.style.display="block",n}const Tu={};function Ks(...n){const e="THREE."+n.shift();console.log(e,...n)}function _h(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Mt(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Dt(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vr(...n){const e=n.join(" ");e in Tu||(Tu[e]=!0,Mt(...n))}function b0(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const E0={[vl]:Ml,[_l]:bl,[Sl]:El,[Io]:yl,[Ml]:vl,[bl]:_l,[El]:Sl,[yl]:Io};class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const To=Math.PI/180,Oo=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Df(n,e){return(n%e+e)%e}function A0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function T0(n,e,t){return n!==e?(t-n)/(e-n):0}function wo(n,e,t){return(1-t)*n+t*e}function w0(n,e,t,i){return wo(n,e,1-Math.exp(-t*i))}function R0(n,e=1){return e-Math.abs(Df(n,e*2)-e)}function C0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function P0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function I0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function L0(n,e){return n+Math.random()*(e-n)}function D0(n){return n*(.5-Math.random())}function N0(n){n!==void 0&&(wu=n);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function U0(n){return n*To}function O0(n){return n*Oo}function F0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function B0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function z0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function G0(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),f=s(t/2),l=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,f*h,f*d,o*l);break;case"YZY":n.set(f*d,o*u,f*h,o*l);break;case"ZXZ":n.set(f*h,f*d,o*u,o*l);break;case"XZX":n.set(o*u,f*m,f*p,o*l);break;case"YXY":n.set(f*p,o*u,f*m,o*l);break;case"ZYZ":n.set(f*m,f*p,o*u,o*l);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const V0={DEG2RAD:To,RAD2DEG:Oo,generateUUID:Fi,clamp:Ct,euclideanModulo:Df,mapLinear:A0,inverseLerp:T0,lerp:wo,damp:w0,pingpong:R0,smoothstep:C0,smootherstep:P0,randInt:I0,randFloat:L0,randFloatSpread:D0,seededRandom:N0,degToRad:U0,radToDeg:O0,isPowerOfTwo:F0,ceilPowerOfTwo:B0,floorPowerOfTwo:z0,setQuaternionFromProperEuler:G0,normalize:Xt,denormalize:vi},iu=class iu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};iu.prototype.isVector2=!0;let Ne=iu;class Mi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let f=i[a+0],l=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],E=r[s+3];if(h!==E||f!==d||l!==p||u!==m){let v=f*d+l*p+u*m+h*E;v<0&&(d=-d,p=-p,m=-m,E=-E,v=-v);let x=1-o;if(v<.9995){const A=Math.acos(v),P=Math.sin(A);x=Math.sin(x*A)/P,o=Math.sin(o*A)/P,f=f*x+d*o,l=l*x+p*o,u=u*x+m*o,h=h*x+E*o}else{f=f*x+d*o,l=l*x+p*o,u=u*x+m*o,h=h*x+E*o;const A=1/Math.sqrt(f*f+l*l+u*u+h*h);f*=A,l*=A,u*=A,h*=A}}e[t]=f,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],f=i[a+1],l=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+f*p-l*d,e[t+1]=f*m+u*d+l*h-o*p,e[t+2]=l*m+u*p+o*d-f*h,e[t+3]=u*m-o*h-f*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,f=Math.sin,l=o(i/2),u=o(a/2),h=o(r/2),d=f(i/2),p=f(a/2),m=f(r/2);switch(s){case"XYZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"YZX":this._x=d*u*h+l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h-d*p*m;break;case"XZY":this._x=d*u*h-l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h+d*p*m;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],f=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-f)*p,this._y=(r-l)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-f)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-l)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(f+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+l)/p,this._y=(f+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,f=t._y,l=t._z,u=t._w;return this._x=i*u+s*o+a*l-r*f,this._y=a*u+s*f+r*o-i*l,this._z=r*u+s*l+i*f-a*o,this._w=s*u-i*o-a*f-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let f=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);f=Math.sin(f*l)/u,t=Math.sin(t*l)/u,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const au=class au{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,f=e.w,l=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+f*l+s*h-o*u,this.y=i+f*u+o*l-r*h,this.z=a+f*h+r*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,f=t.z;return this.x=a*f-r*o,this.y=r*s-i*f,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};au.prototype.isVector3=!0;let z=au;const Pc=new z,Ru=new Mi,ru=class ru{constructor(e,t,i,a,r,s,o,f,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,l)}set(e,t,i,a,r,s,o,f,l){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],f=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],E=a[0],v=a[3],x=a[6],A=a[1],P=a[4],y=a[7],S=a[2],T=a[5],I=a[8];return r[0]=s*E+o*A+f*S,r[3]=s*v+o*P+f*T,r[6]=s*x+o*y+f*I,r[1]=l*E+u*A+h*S,r[4]=l*v+u*P+h*T,r[7]=l*x+u*y+h*I,r[2]=d*E+p*A+m*S,r[5]=d*v+p*P+m*T,r[8]=d*x+p*y+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-i*r*u+i*o*f+a*r*l-a*s*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],l=e[7],u=e[8],h=u*s-o*l,d=o*f-u*r,p=l*r-s*f,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return e[0]=h*E,e[1]=(a*l-u*i)*E,e[2]=(o*i-a*s)*E,e[3]=d*E,e[4]=(u*t-a*f)*E,e[5]=(a*r-o*t)*E,e[6]=p*E,e[7]=(i*f-l*t)*E,e[8]=(s*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const f=Math.cos(r),l=Math.sin(r);return this.set(i*f,i*l,-i*(f*s+l*o)+s+e,-a*l,a*f,-a*(-l*s+f*o)+o+t,0,0,1),this}scale(e,t){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ru.prototype.isMatrix3=!0;let Et=ru;const Ic=new Et,Cu=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Wt&&(a.r=na(a.r),a.g=na(a.g),a.b=na(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Wt&&(a.r=kr(a.r),a.g=kr(a.g),a.b=kr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ta?Zs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Zs,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:Cu,fromXYZ:Pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}const Lt=k0();function na(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let dr;class H0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=Uo("canvas")),dr.width=e.width,dr.height=e.height;const a=dr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=na(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(na(t[i]/255)*255):t[i]=na(t[i]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W0=0;class Nf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Lc(a[s].image)):r.push(Lc(a[s]))}else r=Lc(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let X0=0;const Dc=new z;class yn extends ar{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=Qi,a=Qi,r=Sn,s=Ya,o=si,f=Bn,l=yn.DEFAULT_ANISOTROPY,u=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Fi(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=uh;yn.DEFAULT_ANISOTROPY=1;const ou=class ou{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,l=f[0],u=f[4],h=f[8],d=f[1],p=f[5],m=f[9],E=f[2],v=f[6],x=f[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(m+v)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,y=(p+1)/2,S=(x+1)/2,T=(u+d)/4,I=(h+E)/4,_=(m+v)/4;return P>y&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=T/i,r=I/i):y>S?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=_/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=I/r,a=_/r),this.set(i,a,r,t),this}let A=Math.sqrt((v-m)*(v-m)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(v-m)/A,this.y=(h-E)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;let rn=ou;class q0 extends ar{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new yn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Nf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends q0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sh extends yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=un,this.minFilter=un,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const lc=class lc{constructor(e,t,i,a,r,s,o,f,l,u,h,d,p,m,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,l,u,h,d,p,m,E,v)}set(e,t,i,a,r,s,o,f,l,u,h,d,p,m,E,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=r,x[5]=s,x[9]=o,x[13]=f,x[2]=l,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=m,x[11]=E,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),s=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),f=Math.cos(a),l=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=-f*h,t[8]=l,t[1]=p+m*l,t[5]=d-E*l,t[9]=-o*f,t[2]=E-d*l,t[6]=m+p*l,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,p=f*h,m=l*u,E=l*h;t[0]=d+E*o,t[4]=m*o-p,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=E+d*o,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,p=f*h,m=l*u,E=l*h;t[0]=d-E*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=E-d*o,t[2]=-s*l,t[6]=o,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=m*l-p,t[8]=d*l+E,t[1]=f*h,t[5]=E*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,p=s*l,m=o*f,E=o*l;t[0]=f*u,t[4]=E-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+m,t[10]=d-E*h}else if(e.order==="XZY"){const d=s*f,p=s*l,m=o*f,E=o*l;t[0]=f*u,t[4]=-h,t[8]=l*u,t[1]=d*h+E,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,J0)}lookAt(e,t,i){const a=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ua.crossVectors(i,$n),ua.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ua.crossVectors(i,$n)),ua.normalize(),rs.crossVectors($n,ua),a[0]=ua.x,a[4]=rs.x,a[8]=$n.x,a[1]=ua.y,a[5]=rs.y,a[9]=$n.y,a[2]=ua.z,a[6]=rs.z,a[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],f=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],E=i[6],v=i[10],x=i[14],A=i[3],P=i[7],y=i[11],S=i[15],T=a[0],I=a[4],_=a[8],R=a[12],L=a[1],U=a[5],V=a[9],X=a[13],k=a[2],$=a[6],ie=a[10],G=a[14],xe=a[3],re=a[7],le=a[11],de=a[15];return r[0]=s*T+o*L+f*k+l*xe,r[4]=s*I+o*U+f*$+l*re,r[8]=s*_+o*V+f*ie+l*le,r[12]=s*R+o*X+f*G+l*de,r[1]=u*T+h*L+d*k+p*xe,r[5]=u*I+h*U+d*$+p*re,r[9]=u*_+h*V+d*ie+p*le,r[13]=u*R+h*X+d*G+p*de,r[2]=m*T+E*L+v*k+x*xe,r[6]=m*I+E*U+v*$+x*re,r[10]=m*_+E*V+v*ie+x*le,r[14]=m*R+E*X+v*G+x*de,r[3]=A*T+P*L+y*k+S*xe,r[7]=A*I+P*U+y*$+S*re,r[11]=A*_+P*V+y*ie+S*le,r[15]=A*R+P*X+y*G+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],f=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],E=e[7],v=e[11],x=e[15],A=f*p-l*d,P=o*p-l*h,y=o*d-f*h,S=s*p-l*u,T=s*d-f*u,I=s*h-o*u;return t*(E*A-v*P+x*y)-i*(m*A-v*S+x*T)+a*(m*P-E*S+x*I)-r*(m*y-E*T+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],f=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-i*(r*u-o*f)+a*(r*l-s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],E=e[13],v=e[14],x=e[15],A=t*o-i*s,P=t*f-a*s,y=t*l-r*s,S=i*f-a*o,T=i*l-r*o,I=a*l-r*f,_=u*E-h*m,R=u*v-d*m,L=u*x-p*m,U=h*v-d*E,V=h*x-p*E,X=d*x-p*v,k=A*X-P*V+y*U+S*L-T*R+I*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/k;return e[0]=(o*X-f*V+l*U)*$,e[1]=(a*V-i*X-r*U)*$,e[2]=(E*I-v*T+x*S)*$,e[3]=(d*T-h*I-p*S)*$,e[4]=(f*L-s*X-l*R)*$,e[5]=(t*X-a*L+r*R)*$,e[6]=(v*y-m*I-x*P)*$,e[7]=(u*I-d*y+p*P)*$,e[8]=(s*V-o*L+l*_)*$,e[9]=(i*L-t*V-r*_)*$,e[10]=(m*T-E*y+x*A)*$,e[11]=(h*y-u*T-p*A)*$,e[12]=(o*R-s*U-f*_)*$,e[13]=(t*U-i*R+a*_)*$,e[14]=(E*P-m*S-v*A)*$,e[15]=(u*S-h*P+d*A)*$,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,f=e.z,l=r*s,u=r*o;return this.set(l*s+i,l*o-a*f,l*f+a*o,0,l*o+a*f,u*o+i,u*f-a*s,0,l*f-a*o,u*f+a*s,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,f=t._w,l=r+r,u=s+s,h=o+o,d=r*l,p=r*u,m=r*h,E=s*u,v=s*h,x=o*h,A=f*l,P=f*u,y=f*h,S=i.x,T=i.y,I=i.z;return a[0]=(1-(E+x))*S,a[1]=(p+y)*S,a[2]=(m-P)*S,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(d+x))*T,a[6]=(v+A)*T,a[7]=0,a[8]=(m+P)*I,a[9]=(v-A)*I,a[10]=(1-(d+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=hr.set(a[0],a[1],a[2]).length();const o=hr.set(a[4],a[5],a[6]).length(),f=hr.set(a[8],a[9],a[10]).length();r<0&&(s=-s),di.copy(this);const l=1/s,u=1/o,h=1/f;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,t.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=f,this}makePerspective(e,t,i,a,r,s,o=Ni,f=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,E;if(f)m=r/(s-r),E=s*r/(s-r);else if(o===Ni)m=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(o===No)m=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Ni,f=!1){const l=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,E;if(f)m=1/(s-r),E=s/(s-r);else if(o===Ni)m=-2/(s-r),E=-(s+r)/(s-r);else if(o===No)m=-1/(s-r),E=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};lc.prototype.isMatrix4=!0;let Qt=lc;const hr=new z,di=new Qt,$0=new z(0,0,0),J0=new z(1,1,1),ua=new z,rs=new z,$n=new z,Iu=new Qt,Lu=new Mi;class La{constructor(e=0,t=0,i=0,a=La.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],f=a[1],l=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(f,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z0=0;const Du=new z,pr=new Mi,ki=new Qt,os=new z,oo=new z,K0=new z,Q0=new Mi,Nu=new z(1,0,0),Uu=new z(0,1,0),Ou=new z(0,0,1),Fu={type:"added"},j0={type:"removed"},mr={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Zt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new z,t=new La,i=new Mi,a=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Et}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(oo,os,this.up):ki.lookAt(os,oo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),pr.setFromRotationMatrix(ki),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),mr.child=e,this.dispatchEvent(mr),mr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let l=0,u=f.length;l<u;l++){const h=f[l];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,l=this.material.length;f<l;f++)o.push(r(e.materials,this.material[f]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];a.animations.push(r(e.animations,f))}}if(t){const o=s(e.geometries),f=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const f=[];for(const l in o){const u=o[l];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,f=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),x=this._getHandJoint(l,E);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=a!==null),f!==null&&(f.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Oc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Lt.workingColorSpace){if(e=Df(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Oc(s,r,e+1/3),this.g=Oc(s,r,e),this.b=Oc(s,r,e-1/3)}return Lt.colorSpaceToWorking(this,a),this}setStyle(e,t=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const i=bh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Lt.workingToColorSpace(Tn.copy(this),e),Math.round(Ct(Tn.r*255,0,255))*65536+Math.round(Ct(Tn.g*255,0,255))*256+Math.round(Ct(Tn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,a=Tn.g,r=Tn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let f,l;const u=(o+s)/2;if(o===s)f=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case i:f=(a-r)/h+(a<r?6:0);break;case a:f=(r-i)/h+2;break;case r:f=(i-a)/h+4;break}f/=6}return e.h=f,e.s=l,e.l=u,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Xn){Lt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,a=Tn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(da),this.setHSL(da.h+e,da.s+t,da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(da),e.getHSL(ss);const i=wo(da.h,ss.h,t),a=wo(da.s,ss.s,t),r=wo(da.l,ss.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new St;St.NAMES=bh;class Eh extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new La,this.environmentIntensity=1,this.environmentRotation=new La,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new z,Hi=new z,Fc=new z,Wi=new z,gr=new z,xr=new z,Bu=new z,Bc=new z,zc=new z,Gc=new z,Vc=new rn,kc=new rn,Hc=new rn;class oi{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hi.subVectors(e,t),a.cross(hi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){hi.subVectors(a,t),Hi.subVectors(i,t),Fc.subVectors(e,t);const s=hi.dot(hi),o=hi.dot(Hi),f=hi.dot(Fc),l=Hi.dot(Hi),u=Hi.dot(Fc),h=s*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*f-o*u)*d,m=(s*u-o*f)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,i,a,r,s,o,f){return this.getBarycoord(e,t,i,a,Wi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,Wi.x),f.addScaledVector(s,Wi.y),f.addScaledVector(o,Wi.z),f)}static getInterpolatedAttribute(e,t,i,a,r,s){return Vc.setScalar(0),kc.setScalar(0),Hc.setScalar(0),Vc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Vc,r.x),s.addScaledVector(kc,r.y),s.addScaledVector(Hc,r.z),s}static isFrontFacing(e,t,i,a){return hi.subVectors(i,t),Hi.subVectors(e,t),hi.cross(Hi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;gr.subVectors(a,i),xr.subVectors(r,i),Bc.subVectors(e,i);const f=gr.dot(Bc),l=xr.dot(Bc);if(f<=0&&l<=0)return t.copy(i);zc.subVectors(e,a);const u=gr.dot(zc),h=xr.dot(zc);if(u>=0&&h<=u)return t.copy(a);const d=f*h-u*l;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(i).addScaledVector(gr,s);Gc.subVectors(e,r);const p=gr.dot(Gc),m=xr.dot(Gc);if(m>=0&&p<=m)return t.copy(r);const E=p*l-f*m;if(E<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(xr,o);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return Bu.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(Bu,o);const x=1/(v+E+d);return s=E*x,o=d*x,t.copy(i).addScaledVector(gr,s).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,pi):pi.fromBufferAttribute(r,s),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),ls.subVectors(this.max,so),vr.subVectors(e.a,so),Mr.subVectors(e.b,so),_r.subVectors(e.c,so),ha.subVectors(Mr,vr),pa.subVectors(_r,Mr),Ba.subVectors(vr,_r);let t=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-Ba.z,Ba.y,ha.z,0,-ha.x,pa.z,0,-pa.x,Ba.z,0,-Ba.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-Ba.y,Ba.x,0];return!Wc(t,vr,Mr,_r,ls)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,vr,Mr,_r,ls))?!1:(fs.crossVectors(ha,pa),t=[fs.x,fs.y,fs.z],Wc(t,vr,Mr,_r,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new z,new z,new z,new z,new z,new z,new z,new z],pi=new z,cs=new Yo,vr=new z,Mr=new z,_r=new z,ha=new z,pa=new z,Ba=new z,so=new z,ls=new z,fs=new z,za=new z;function Wc(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){za.fromArray(n,r);const o=a.x*Math.abs(za.x)+a.y*Math.abs(za.y)+a.z*Math.abs(za.z),f=e.dot(za),l=t.dot(za),u=i.dot(za);if(Math.max(-Math.max(f,l,u),Math.min(f,l,u))>o)return!1}return!0}const pn=new z,us=new Ne;let tm=0;class _i extends ar{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ah extends _i{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Th extends _i{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends _i{constructor(e,t,i){super(new Float32Array(e),t,i)}}const nm=new Yo,co=new z,Xc=new z;class uc{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nm.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(co,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Xc)),this.expandByPoint(co.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let im=0;const ii=new Qt,qc=new Zt,Sr=new z,Jn=new Yo,lo=new Yo,vn=new z;class En extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?Th:Ah)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];lo.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(Jn.min,lo.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,lo.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(lo.min),Jn.expandByPoint(lo.max))}Jn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)vn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(vn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],f=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vn.fromBufferAttribute(o,l),f&&(Sr.fromBufferAttribute(e,l),vn.add(Sr)),a=Math.max(a,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new _i(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],f=[];for(let _=0;_<i.count;_++)o[_]=new z,f[_]=new z;const l=new z,u=new z,h=new z,d=new Ne,p=new Ne,m=new Ne,E=new z,v=new z;function x(_,R,L){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,L),u.sub(l),h.sub(l),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(E.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(E),o[R].add(E),o[L].add(E),f[_].add(v),f[R].add(v),f[L].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,R=A.length;_<R;++_){const L=A[_],U=L.start,V=L.count;for(let X=U,k=U+V;X<k;X+=3)x(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const P=new z,y=new z,S=new z,T=new z;function I(_){S.fromBufferAttribute(a,_),T.copy(S);const R=o[_];P.copy(R),P.sub(S.multiplyScalar(S.dot(R))).normalize(),y.crossVectors(T,R);const U=y.dot(f[_])<0?-1:1;s.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,R=A.length;_<R;++_){const L=A[_],U=L.start,V=L.count;for(let X=U,k=U+V;X<k;X+=3)I(e.getX(X+0)),I(e.getX(X+1)),I(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new z,r=new z,s=new z,o=new z,f=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,v),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),f.fromBufferAttribute(i,E),l.fromBufferAttribute(i,v),o.add(u),f.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(o,f){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(f.length*u);let p=0,m=0;for(let E=0,v=f.length;E<v;E++){o.isInterleavedBufferAttribute?p=f[E]*o.data.stride+o.offset:p=f[E]*u;for(let x=0;x<u;x++)d[m++]=l[p++]}return new _i(d,u,h)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,a=this.attributes;for(const o in a){const f=a[o],l=e(f,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const f=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);f.push(p)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,f=s.length;o<f;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const l in f)f[l]!==void 0&&(e[l]=f[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const l=i[f];e.data.attributes[f]=l.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const l=this.morphAttributes[f],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const l in a){const u=a[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class am{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Nn=new z;class Qs{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),a=Xt(a,this.array),r=Xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ks("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new _i(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ks("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yc=new z,rm=new z,om=new Et;class ba{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Yc.subVectors(i,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Yc),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||om.getNormalMatrix(e),a=this.coplanarPoint(Yc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sm=0;class rr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ao,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cc,this.stencilZFail=Cc,this.stencilZPass=Cc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const f=r[o];delete f.metadata,s.push(f)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ba().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uf extends rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yr;const fo=new z,br=new z,Er=new z,Ar=new Ne,uo=new Ne,wh=new Qt,ds=new z,ho=new z,hs=new z,zu=new Ne,$c=new Ne,Gu=new Ne;class Rh extends Zt{constructor(e=new Uf){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new En;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new am(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Qs(i,3,0,!1)),yr.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=yr,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;ps(ds.set(-.5,-.5,0),Er,s,br,a,r),ps(ho.set(.5,-.5,0),Er,s,br,a,r),ps(hs.set(.5,.5,0),Er,s,br,a,r),zu.set(0,0),$c.set(1,0),Gu.set(1,1);let o=e.ray.intersectTriangle(ds,ho,hs,!1,fo);if(o===null&&(ps(ho.set(-.5,.5,0),Er,s,br,a,r),$c.set(0,1),o=e.ray.intersectTriangle(ds,hs,ho,!1,fo),o===null))return;const f=e.ray.origin.distanceTo(fo);f<e.near||f>e.far||t.push({distance:f,point:fo.clone(),uv:oi.getInterpolation(fo,ds,ho,hs,zu,$c,Gu,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ps(n,e,t,i,a,r){Ar.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(uo.x=r*Ar.x-a*Ar.y,uo.y=a*Ar.x+r*Ar.y):uo.copy(Ar),n.copy(e),n.x+=uo.x,n.y+=uo.y,n.applyMatrix4(wh)}const qi=new z,Jc=new z,ms=new z,gs=new z;class Ch{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Jc.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Jc);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ms),o=gs.dot(this.direction),f=-gs.dot(ms),l=gs.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*f-o,d=s*o-f,m=r*u,h>=0)if(d>=-m)if(d<=m){const E=1/u;h*=E,d*=E,p=h*(h+s*d+2*o)+d*(s*h+d+2*f)+l}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+l;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+l;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-f),r),p=d*(d+2*f)+l):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Jc).addScaledVector(ms,d),p}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const i=qi.dot(this.direction),a=qi.dot(qi)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,f=i+s;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,f;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,a=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,a=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,f=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,f=(e.min.z-d.z)*h),i>f||o>a)||((o>i||i!==i)&&(i=o),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,f=o.x,l=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,E=t.y-s.y,v=t.z-s.z,x=i.x-s.x,A=i.y-s.y,P=i.z-s.z,y=Math.abs(f),S=Math.abs(l),T=Math.abs(u);let I,_,R,L,U,V,X,k,$,ie,G,xe;if(y>=S&&y>=T?(R=f,V=h,$=m,xe=x,f>=0?(I=l,_=u,L=d,U=p,X=E,k=v,ie=A,G=P):(I=u,_=l,L=p,U=d,X=v,k=E,ie=P,G=A)):S>=T?(R=l,V=d,$=E,xe=A,l>=0?(I=u,_=f,L=p,U=h,X=v,k=m,ie=P,G=x):(I=f,_=u,L=h,U=p,X=m,k=v,ie=x,G=P)):(R=u,V=p,$=v,xe=P,u>=0?(I=f,_=l,L=h,U=d,X=m,k=E,ie=x,G=A):(I=l,_=f,L=d,U=h,X=E,k=m,ie=A,G=x)),R===0)return null;const re=I/R,le=_/R,de=1/R,Ke=L-re*V,Ue=U-le*V,yt=X-re*$,pt=k-le*$,vt=ie-re*xe,fe=G-le*xe,me=vt*pt-fe*yt,Ce=Ke*fe-Ue*vt,ot=yt*Ue-pt*Ke;if(a){if(me<0||Ce<0||ot<0)return null}else if((me<0||Ce<0||ot<0)&&(me>0||Ce>0||ot>0))return null;const Ve=me+Ce+ot;if(Ve===0)return null;const Pe=de*(me*V+Ce*$+ot*xe);return(Ve>0?Pe<0:Pe>0)?null:this.at(Pe/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oa extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vu=new Qt,Ga=new Ch,xs=new uc,ku=new z,vs=new z,Ms=new z,_s=new z,Zc=new z,Ss=new z,Hu=new z,ys=new z;class xt extends Zt{constructor(e=new En,t=new oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let f=0,l=r.length;f<l;f++){const u=o[f],h=r[f];u!==0&&(Zc.fromBufferAttribute(h,e),s?Ss.addScaledVector(Zc,u):Ss.addScaledVector(Zc.sub(t),u))}t.add(Ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(r),Ga.copy(e.ray).recast(e.near),!(xs.containsPoint(Ga.origin)===!1&&(Ga.intersectSphere(xs,ku)===null||Ga.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(Vu),!(i.boundingBox!==null&&Ga.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ga)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,f=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],x=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);a=bs(this,x,e,i,l,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let v=m,x=E;v<x;v+=3){const A=o.getX(v),P=o.getX(v+1),y=o.getX(v+2);a=bs(this,s,e,i,l,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],x=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(f.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=y,I=y+1,_=y+2;a=bs(this,x,e,i,l,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(f.count,p.start+p.count);for(let v=m,x=E;v<x;v+=3){const A=v,P=v+1,y=v+2;a=bs(this,s,e,i,l,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function cm(n,e,t,i,a,r,s,o){let f;if(e.side===Gn?f=i.intersectTriangle(s,r,a,!0,o):f=i.intersectTriangle(a,r,s,e.side===Qa,o),f===null)return null;ys.copy(o),ys.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ys);return l<t.near||l>t.far?null:{distance:l,point:ys.clone(),object:n}}function bs(n,e,t,i,a,r,s,o,f,l){n.getVertexPosition(o,vs),n.getVertexPosition(f,Ms),n.getVertexPosition(l,_s);const u=cm(n,e,t,i,vs,Ms,_s,Hu);if(u){const h=new z;oi.getBarycoord(Hu,vs,Ms,_s,h),a&&(u.uv=oi.getInterpolatedAttribute(a,o,f,l,h,new Ne)),r&&(u.uv1=oi.getInterpolatedAttribute(r,o,f,l,h,new Ne)),s&&(u.normal=oi.getInterpolatedAttribute(s,o,f,l,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:f,c:l,normal:new z,materialIndex:0};oi.getNormal(vs,Ms,_s,d.normal),u.face=d,u.barycoord=h}return u}class Ph extends yn{constructor(e=null,t=1,i=1,a,r,s,o,f,l=un,u=un,h,d){super(null,s,o,f,l,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new uc,lm=new Ne(.5,.5),Es=new z;class Of{constructor(e=new ba,t=new ba,i=new ba,a=new ba,r=new ba,s=new ba){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],f=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],E=r[9],v=r[10],x=r[11],A=r[12],P=r[13],y=r[14],S=r[15];if(a[0].setComponents(l-s,p-u,x-m,S-A).normalize(),a[1].setComponents(l+s,p+u,x+m,S+A).normalize(),a[2].setComponents(l+o,p+h,x+E,S+P).normalize(),a[3].setComponents(l-o,p-h,x-E,S-P).normalize(),i)a[4].setComponents(f,d,v,y).normalize(),a[5].setComponents(l-f,p-d,x-v,S-y).normalize();else if(a[4].setComponents(l-f,p-d,x-v,S-y).normalize(),t===Ni)a[5].setComponents(l+f,p+d,x+v,S+y).normalize();else if(t===No)a[5].setComponents(f,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Va.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Va.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Va)}intersectsSprite(e){Va.center.set(0,0,0);const t=lm.distanceTo(e.center);return Va.radius=.7071067811865476+t,Va.applyMatrix4(e.matrixWorld),this.intersectsSphere(Va)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Es.x=a.normal.x>0?e.max.x:e.min.x,Es.y=a.normal.y>0?e.max.y:e.min.y,Es.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ih extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new Qt,af=new Ch,As=new uc,Ts=new z;class fm extends Zt{constructor(e=new En,t=new Ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(a),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;Wu.copy(a).invert(),af.copy(e.ray).applyMatrix4(Wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let m=d,E=p;m<E;m++){const v=l.getX(m);Ts.fromBufferAttribute(h,v),Xu(Ts,v,f,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,E=p;m<E;m++)Ts.fromBufferAttribute(h,m),Xu(Ts,m,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xu(n,e,t,i,a,r,s){const o=af.distanceSqToPoint(n);if(o<t){const f=new z;af.closestPointToPoint(n,f),f.applyMatrix4(i);const l=a.ray.origin.distanceTo(f);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Lh extends yn{constructor(e=[],t=ja,i,a,r,s,o,f,l,u){super(e,t,i,a,r,s,o,f,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fo extends yn{constructor(e,t,i,a,r,s,o,f,l){super(e,t,i,a,r,s,o,f,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xr extends yn{constructor(e,t,i=Bi,a,r,s,o=un,f=un,l,u=ia,h=1){if(u!==ia&&u!==$a)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,f,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class um extends Xr{constructor(e,t=Bi,i=ja,a,r,s=un,o=un,f,l=ia){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,f,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dh extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class aa extends En{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const f=[],l=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2));function m(E,v,x,A,P,y,S,T,I,_,R){const L=y/I,U=S/_,V=y/2,X=S/2,k=T/2,$=I+1,ie=_+1;let G=0,xe=0;const re=new z;for(let le=0;le<ie;le++){const de=le*U-X;for(let Ke=0;Ke<$;Ke++){const Ue=Ke*L-V;re[E]=Ue*A,re[v]=de*P,re[x]=k,l.push(re.x,re.y,re.z),re[E]=0,re[v]=0,re[x]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ke/I),h.push(1-le/_),G+=1}}for(let le=0;le<_;le++)for(let de=0;de<I;de++){const Ke=d+de+$*le,Ue=d+de+$*(le+1),yt=d+(de+1)+$*(le+1),pt=d+(de+1)+$*le;f.push(Ke,Ue,pt),f.push(Ue,yt,pt),xe+=6}o.addGroup(p,xe,R),p+=xe,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kt extends En{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:f};const l=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const E=[],v=i/2;let x=0;A(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new tn(h,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(p,2));function A(){const y=new z,S=new z;let T=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const R=[],L=_/r,U=L*(t-e)+e;for(let V=0;V<=a;V++){const X=V/a,k=X*f+o,$=Math.sin(k),ie=Math.cos(k);S.x=U*$,S.y=-L*i+v,S.z=U*ie,h.push(S.x,S.y,S.z),y.set($,I,ie).normalize(),d.push(y.x,y.y,y.z),p.push(X,1-L),R.push(m++)}E.push(R)}for(let _=0;_<a;_++)for(let R=0;R<r;R++){const L=E[R][_],U=E[R+1][_],V=E[R+1][_+1],X=E[R][_+1];(e>0||R!==0)&&(u.push(L,U,X),T+=3),(t>0||R!==r-1)&&(u.push(U,V,X),T+=3)}l.addGroup(x,T,0),x+=T}function P(y){const S=m,T=new Ne,I=new z;let _=0;const R=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let V=0;V<=a;V++){const k=V/a*f+o,$=Math.cos(k),ie=Math.sin(k);I.x=R*ie,I.y=v*L,I.z=R*$,h.push(I.x,I.y,I.z),d.push(0,L,0),T.x=$*.5+.5,T.y=ie*.5*L+.5,p.push(T.x,T.y),m++}for(let V=0;V<a;V++){const X=S+V,k=U+V;y===!0?u.push(k,k+1,X):u.push(k+1,k,X),_+=3}l.addGroup(x,_,y===!0?1:2),x+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends Kt{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends En{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),l(i),u(),this.setAttribute("position",new tn(r,3)),this.setAttribute("normal",new tn(r.slice(),3)),this.setAttribute("uv",new tn(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const P=new z,y=new z,S=new z;for(let T=0;T<t.length;T+=3)p(t[T+0],P),p(t[T+1],y),p(t[T+2],S),f(P,y,S,A)}function f(A,P,y,S){const T=S+1,I=[];for(let _=0;_<=T;_++){I[_]=[];const R=A.clone().lerp(y,_/T),L=P.clone().lerp(y,_/T),U=T-_;for(let V=0;V<=U;V++)V===0&&_===T?I[_][V]=R:I[_][V]=R.clone().lerp(L,V/U)}for(let _=0;_<T;_++)for(let R=0;R<2*(T-_)-1;R++){const L=Math.floor(R/2);R%2===0?(d(I[_][L+1]),d(I[_+1][L]),d(I[_][L])):(d(I[_][L+1]),d(I[_+1][L+1]),d(I[_+1][L]))}}function l(A){const P=new z;for(let y=0;y<r.length;y+=3)P.x=r[y+0],P.y=r[y+1],P.z=r[y+2],P.normalize().multiplyScalar(A),r[y+0]=P.x,r[y+1]=P.y,r[y+2]=P.z}function u(){const A=new z;for(let P=0;P<r.length;P+=3){A.x=r[P+0],A.y=r[P+1],A.z=r[P+2];const y=v(A)/2/Math.PI+.5,S=x(A)/Math.PI+.5;s.push(y,1-S)}m(),h()}function h(){for(let A=0;A<s.length;A+=6){const P=s[A+0],y=s[A+2],S=s[A+4],T=Math.max(P,y,S),I=Math.min(P,y,S);T>.9&&I<.1&&(P<.2&&(s[A+0]+=1),y<.2&&(s[A+2]+=1),S<.2&&(s[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,P){const y=A*3;P.x=e[y+0],P.y=e[y+1],P.z=e[y+2]}function m(){const A=new z,P=new z,y=new z,S=new z,T=new Ne,I=new Ne,_=new Ne;for(let R=0,L=0;R<r.length;R+=9,L+=6){A.set(r[R+0],r[R+1],r[R+2]),P.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),T.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(A).add(P).add(y).divideScalar(3);const U=v(S);E(T,L+0,A,U),E(I,L+2,P,U),E(_,L+4,y,U)}}function E(A,P,y,S){S<0&&A.x===1&&(s[P]=A.x-1),y.x===0&&y.z===0&&(s[P]=S/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.vertices,e.indices,e.radius,e.detail)}}class Ff extends $o{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ff(e.radius,e.detail)}}class Gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,f=r-1,l;for(;o<=f;)if(a=Math.floor(o+(f-o)/2),l=i[a]-s,l<0)o=a+1;else if(l>0)f=a-1;else{f=a;break}if(a=f,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),f=t||(s.isVector2?new Ne:new z);return f.copy(o).sub(s).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,a=[],r=[],s=[],o=new z,f=new Qt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new z)}r[0]=new z,s[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ct(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(f.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Ct(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(f.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bf extends Gi{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=f}getPoint(e,t=new Ne){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=f-this.aX,p=l-this.aY;f=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return i.set(f,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dm extends Bf{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function zf(){let n=0,e=0,t=0,i=0;function a(r,s,o,f){n=r,e=o,t=-3*r+3*s-2*o-f,i=2*r-2*s+o+f}return{initCatmullRom:function(r,s,o,f,l){a(s,o,l*(o-r),l*(f-s))},initNonuniformCatmullRom:function(r,s,o,f,l,u,h){let d=(s-r)/l-(o-r)/(l+u)+(o-s)/u,p=(o-s)/u-(f-s)/(u+h)+(f-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const qu=new z,Yu=new z,Kc=new zf,Qc=new zf,jc=new zf;class hm extends Gi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new z){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),f=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:f===0&&o===r-1&&(o=r-2,f=1);let l,u;this.closed||o>0?l=a[(o-1)%r]:(Yu.subVectors(a[0],a[1]).add(a[0]),l=Yu);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(qu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=qu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),m<1e-4&&(m=E),v<1e-4&&(v=E),Kc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,E,v),Qc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,E,v),jc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,E,v)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Qc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),jc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Kc.calc(f),Qc.calc(f),jc.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new z().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $u(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,f=n*o;return(2*t-2*i+r+s)*f+(-3*t+3*i-2*r-s)*o+r*n+t}function pm(n,e){const t=1-n;return t*t*e}function mm(n,e){return 2*(1-n)*n*e}function gm(n,e){return n*n*e}function Ro(n,e,t,i){return pm(n,e)+mm(n,t)+gm(n,i)}function xm(n,e){const t=1-n;return t*t*t*e}function vm(n,e){const t=1-n;return 3*t*t*n*e}function Mm(n,e){return 3*(1-n)*n*n*e}function _m(n,e){return n*n*n*e}function Co(n,e,t,i,a){return xm(n,e)+vm(n,t)+Mm(n,i)+_m(n,a)}class Nh extends Gi{constructor(e=new Ne,t=new Ne,i=new Ne,a=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Co(e,a.x,r.x,s.x,o.x),Co(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sm extends Gi{constructor(e=new z,t=new z,i=new z,a=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new z){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Co(e,a.x,r.x,s.x,o.x),Co(e,a.y,r.y,s.y,o.y),Co(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uh extends Gi{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ym extends Gi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends Gi{constructor(e=new Ne,t=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(Ro(e,a.x,r.x,s.x),Ro(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bm extends Gi{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(Ro(e,a.x,r.x,s.x),Ro(e,a.y,r.y,s.y),Ro(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,f=a[s===0?s:s-1],l=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set($u(o,f.x,l.x,u.x,h.x),$u(o,f.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ne().fromArray(a))}return this}}var rf=Object.freeze({__proto__:null,ArcCurve:dm,CatmullRomCurve3:hm,CubicBezierCurve:Nh,CubicBezierCurve3:Sm,EllipseCurve:Bf,LineCurve:Uh,LineCurve3:ym,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:bm,SplineCurve:Fh});class Em extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],f=o.getLength(),l=f===0?0:1-s/f;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,f=s.getPoints(o);for(let l=0;l<f.length;l++){const u=f[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new rf[a.type]().fromJSON(a))}return this}}class Ju extends Em{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Uh(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new Oh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new Nh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a),new Ne(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Fh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+o,t+f,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,f){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,a,r,s,o,f),this}absellipse(e,t,i,a,r,s,o,f){const l=new Bf(e,t,i,a,r,s,o,f);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gf extends Ju{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Ju().fromJSON(a))}return this}}function Am(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=Bh(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,f,l;if(i&&(r=Pm(n,e,r,t)),n.length>80*t){o=n[0],f=n[1];let u=o,h=f;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<f&&(f=m),p>u&&(u=p),m>h&&(h=m)}l=Math.max(u-o,h-f),l=l!==0?32767/l:0}return Bo(r,s,t,o,f,l,0),s}function Bh(n,e,t,i,a){let r;if(a===Vm(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=Zu(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=Zu(s/i|0,n[s],n[s+1],r);return r&&qr(r,r.next)&&(Go(r),r=r.next),r}function tr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(qr(t,t.next)||on(t.prev,t,t.next)===0)){if(Go(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Bo(n,e,t,i,a,r,s){if(!n)return;!s&&r&&Um(n,i,a,r);let o=n;for(;n.prev!==n.next;){const f=n.prev,l=n.next;if(r?wm(n,i,a,r):Tm(n)){e.push(f.i,n.i,l.i),Go(n),n=l.next,o=l.next;continue}if(n=l,n===o){s?s===1?(n=Rm(tr(n),e),Bo(n,e,t,i,a,r,2)):s===2&&Cm(n,e,t,i,a,r):Bo(tr(n),e,t,i,a,r,1);break}}}function Tm(n){const e=n.prev,t=n,i=n.next;if(on(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,f=t.y,l=i.y,u=Math.min(a,r,s),h=Math.min(o,f,l),d=Math.max(a,r,s),p=Math.max(o,f,l);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&yo(a,o,r,f,s,l,m.x,m.y)&&on(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wm(n,e,t,i){const a=n.prev,r=n,s=n.next;if(on(a,r,s)>=0)return!1;const o=a.x,f=r.x,l=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,f,l),m=Math.min(u,h,d),E=Math.max(o,f,l),v=Math.max(u,h,d),x=of(p,m,e,t,i),A=of(E,v,e,t,i);let P=n.prevZ,y=n.nextZ;for(;P&&P.z>=x&&y&&y.z<=A;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&yo(o,u,f,h,l,d,P.x,P.y)&&on(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&yo(o,u,f,h,l,d,y.x,y.y)&&on(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=x;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&yo(o,u,f,h,l,d,P.x,P.y)&&on(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&yo(o,u,f,h,l,d,y.x,y.y)&&on(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rm(n,e){let t=n;do{const i=t.prev,a=t.next.next;!qr(i,a)&&Gh(i,t,t.next,a)&&zo(i,a)&&zo(a,i)&&(e.push(i.i,t.i,a.i),Go(t),Go(t.next),t=n=a),t=t.next}while(t!==n);return tr(t)}function Cm(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Bm(s,o)){let f=Vh(s,o);s=tr(s,s.next),f=tr(f,f.next),Bo(s,e,t,i,a,r,0),Bo(f,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function Pm(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,f=r<s-1?e[r+1]*i:n.length,l=Bh(n,o,f,i,!1);l===l.next&&(l.steiner=!0),a.push(Fm(l))}a.sort(Im);for(let r=0;r<a.length;r++)t=Lm(a[r],t);return t}function Im(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function Lm(n,e){const t=Dm(n,e);if(!t)return e;const i=Vh(t,n);return tr(i,i.next),tr(t,t.next)}function Dm(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(qr(n,t))return t;do{if(qr(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,f=s.x,l=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=f&&i!==t.x&&zh(a<l?i:r,a,f,l,a<l?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);zo(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Nm(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function Nm(n,e){return on(n.prev,n,e.prev)<0&&on(e.next,n,n.next)<0}function Um(n,e,t,i){let a=n;do a.z===0&&(a.z=of(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,Om(a)}function Om(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let l=0;l<t&&(o++,s=s.nextZ,!!s);l++);let f=t;for(;o>0||f>0&&s;)o!==0&&(f===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,f--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function of(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Fm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function zh(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function yo(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&zh(n,e,t,i,a,r,s,o)}function Bm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!zm(n,e)&&(zo(n,e)&&zo(e,n)&&Gm(n,e)&&(on(n.prev,n,e.prev)||on(n,e.prev,e))||qr(n,e)&&on(n.prev,n,n.next)>0&&on(e.prev,e,e.next)>0)}function on(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function qr(n,e){return n.x===e.x&&n.y===e.y}function Gh(n,e,t,i){const a=Rs(on(n,e,t)),r=Rs(on(n,e,i)),s=Rs(on(t,i,n)),o=Rs(on(t,i,e));return!!(a!==r&&s!==o||a===0&&ws(n,t,e)||r===0&&ws(n,i,e)||s===0&&ws(t,n,i)||o===0&&ws(t,e,i))}function ws(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rs(n){return n>0?1:n<0?-1:0}function zm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function zo(n,e){return on(n.prev,n,n.next)<0?on(n,e,n.next)>=0&&on(n,n.prev,e)>=0:on(n,e,n.prev)<0||on(n,n.next,e)<0}function Gm(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vh(n,e){const t=sf(n.i,n.x,n.y),i=sf(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Zu(n,e,t,i){const a=sf(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vm(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class km{static triangulate(e,t,i=2){return Am(e,t,i)}}class Br{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return Br.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];Ku(e),Qu(i,e);let s=e.length;t.forEach(Ku);for(let f=0;f<t.length;f++)a.push(s),s+=t[f].length,Qu(i,t[f]);const o=km.triangulate(i,a);for(let f=0;f<o.length;f+=3)r.push(o.slice(f,f+3));return r}}function Ku(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class js extends En{constructor(e=new Gf([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,f=e.length;o<f;o++){const l=e[o];s(l)}this.setAttribute("position",new tn(a,3)),this.setAttribute("uv",new tn(r,2)),this.computeVertexNormals();function s(o){const f=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Hm;let P,y=!1,S,T,I,_;if(x){P=x.getSpacedPoints(u),y=!0,d=!1;const ue=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(u,ue),T=new z,I=new z,_=new z}d||(v=0,p=0,m=0,E=0);const R=o.extractPoints(l);let L=R.shape;const U=R.holes;if(!Br.isClockWise(L)){L=L.reverse();for(let ue=0,Me=U.length;ue<Me;ue++){const Ae=U[ue];Br.isClockWise(Ae)&&(U[ue]=Ae.reverse())}}function X(ue){const Ae=10000000000000001e-36;let we=ue[0];for(let be=1;be<=ue.length;be++){const et=be%ue.length,ne=ue[et],Se=ne.x-we.x,w=ne.y-we.y,O=Se*Se+w*w,ct=Math.max(Math.abs(ne.x),Math.abs(ne.y),Math.abs(we.x),Math.abs(we.y)),ke=Ae*ct*ct;if(O<=ke){ue.splice(et,1),be--;continue}we=ne}}X(L),U.forEach(X);const k=U.length,$=L;for(let ue=0;ue<k;ue++){const Me=U[ue];L=L.concat(Me)}function ie(ue,Me,Ae){return Me||Dt("ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(Me,Ae)}const G=L.length;function xe(ue,Me,Ae){let we,be,et;const ne=ue.x-Me.x,Se=ue.y-Me.y,w=Ae.x-ue.x,O=Ae.y-ue.y,ct=ne*ne+Se*Se,ke=ne*O-Se*w;if(Math.abs(ke)>Number.EPSILON){const D=Math.sqrt(ct),b=Math.sqrt(w*w+O*O),Y=Me.x-Se/D,Z=Me.y+ne/D,ce=Ae.x-O/b,ve=Ae.y+w/b,Re=((ce-Y)*O-(ve-Z)*w)/(ne*O-Se*w);we=Y+ne*Re-ue.x,be=Z+Se*Re-ue.y;const se=we*we+be*be;if(se<=2)return new Ne(we,be);et=Math.sqrt(se/2)}else{let D=!1;ne>Number.EPSILON?w>Number.EPSILON&&(D=!0):ne<-Number.EPSILON?w<-Number.EPSILON&&(D=!0):Math.sign(Se)===Math.sign(O)&&(D=!0),D?(we=-Se,be=ne,et=Math.sqrt(ct)):(we=ne,be=Se,et=Math.sqrt(ct/2))}return new Ne(we/et,be/et)}const re=[];for(let ue=0,Me=$.length,Ae=Me-1,we=ue+1;ue<Me;ue++,Ae++,we++)Ae===Me&&(Ae=0),we===Me&&(we=0),re[ue]=xe($[ue],$[Ae],$[we]);const le=[];let de,Ke=re.concat();for(let ue=0,Me=k;ue<Me;ue++){const Ae=U[ue];de=[];for(let we=0,be=Ae.length,et=be-1,ne=we+1;we<be;we++,et++,ne++)et===be&&(et=0),ne===be&&(ne=0),de[we]=xe(Ae[we],Ae[et],Ae[ne]);le.push(de),Ke=Ke.concat(de)}let Ue;if(v===0)Ue=Br.triangulateShape($,U);else{const ue=[],Me=[];for(let Ae=0;Ae<v;Ae++){const we=Ae/v,be=p*Math.cos(we*Math.PI/2),et=m*Math.sin(we*Math.PI/2)+E;for(let ne=0,Se=$.length;ne<Se;ne++){const w=ie($[ne],re[ne],et);Ce(w.x,w.y,-be),we===0&&ue.push(w)}for(let ne=0,Se=k;ne<Se;ne++){const w=U[ne];de=le[ne];const O=[];for(let ct=0,ke=w.length;ct<ke;ct++){const D=ie(w[ct],de[ct],et);Ce(D.x,D.y,-be),we===0&&O.push(D)}we===0&&Me.push(O)}}Ue=Br.triangulateShape(ue,Me)}const yt=Ue.length,pt=m+E;for(let ue=0;ue<G;ue++){const Me=d?ie(L[ue],Ke[ue],pt):L[ue];y?(I.copy(S.normals[0]).multiplyScalar(Me.x),T.copy(S.binormals[0]).multiplyScalar(Me.y),_.copy(P[0]).add(I).add(T),Ce(_.x,_.y,_.z)):Ce(Me.x,Me.y,0)}for(let ue=1;ue<=u;ue++)for(let Me=0;Me<G;Me++){const Ae=d?ie(L[Me],Ke[Me],pt):L[Me];y?(I.copy(S.normals[ue]).multiplyScalar(Ae.x),T.copy(S.binormals[ue]).multiplyScalar(Ae.y),_.copy(P[ue]).add(I).add(T),Ce(_.x,_.y,_.z)):Ce(Ae.x,Ae.y,h/u*ue)}for(let ue=v-1;ue>=0;ue--){const Me=ue/v,Ae=p*Math.cos(Me*Math.PI/2),we=m*Math.sin(Me*Math.PI/2)+E;for(let be=0,et=$.length;be<et;be++){const ne=ie($[be],re[be],we);Ce(ne.x,ne.y,h+Ae)}for(let be=0,et=U.length;be<et;be++){const ne=U[be];de=le[be];for(let Se=0,w=ne.length;Se<w;Se++){const O=ie(ne[Se],de[Se],we);y?Ce(O.x,O.y+P[u-1].y,P[u-1].x+Ae):Ce(O.x,O.y,h+Ae)}}}vt(),fe();function vt(){const ue=a.length/3;if(d){let Me=0,Ae=G*Me;for(let we=0;we<yt;we++){const be=Ue[we];ot(be[2]+Ae,be[1]+Ae,be[0]+Ae)}Me=u+v*2,Ae=G*Me;for(let we=0;we<yt;we++){const be=Ue[we];ot(be[0]+Ae,be[1]+Ae,be[2]+Ae)}}else{for(let Me=0;Me<yt;Me++){const Ae=Ue[Me];ot(Ae[2],Ae[1],Ae[0])}for(let Me=0;Me<yt;Me++){const Ae=Ue[Me];ot(Ae[0]+G*u,Ae[1]+G*u,Ae[2]+G*u)}}i.addGroup(ue,a.length/3-ue,0)}function fe(){const ue=a.length/3;let Me=0;me($,Me),Me+=$.length;for(let Ae=0,we=U.length;Ae<we;Ae++){const be=U[Ae];me(be,Me),Me+=be.length}i.addGroup(ue,a.length/3-ue,1)}function me(ue,Me){let Ae=ue.length;for(;--Ae>=0;){const we=Ae;let be=Ae-1;be<0&&(be=ue.length-1);for(let et=0,ne=u+v*2;et<ne;et++){const Se=G*et,w=G*(et+1),O=Me+we+Se,ct=Me+be+Se,ke=Me+be+w,D=Me+we+w;Ve(O,ct,ke,D)}}}function Ce(ue,Me,Ae){f.push(ue),f.push(Me),f.push(Ae)}function ot(ue,Me,Ae){Pe(ue),Pe(Me),Pe(Ae);const we=a.length/3,be=A.generateTopUV(i,a,we-3,we-2,we-1);ut(be[0]),ut(be[1]),ut(be[2])}function Ve(ue,Me,Ae,we){Pe(ue),Pe(Me),Pe(we),Pe(Me),Pe(Ae),Pe(we);const be=a.length/3,et=A.generateSideWallUV(i,a,be-6,be-3,be-2,be-1);ut(et[0]),ut(et[1]),ut(et[3]),ut(et[1]),ut(et[2]),ut(et[3])}function Pe(ue){a.push(f[ue*3+0]),a.push(f[ue*3+1]),a.push(f[ue*3+2])}function ut(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Wm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new rf[a.type]().fromJSON(a)),new js(i,e.options)}}const Hm={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],f=e[i*3+1],l=e[a*3],u=e[a*3+1];return[new Ne(r,s),new Ne(o,f),new Ne(l,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],f=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],E=e[r*3],v=e[r*3+1],x=e[r*3+2];return Math.abs(o-u)<Math.abs(s-l)?[new Ne(s,1-f),new Ne(l,1-h),new Ne(d,1-m),new Ne(E,1-x)]:[new Ne(o,1-f),new Ne(u,1-h),new Ne(p,1-m),new Ne(v,1-x)]}};function Wm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Yr extends $o{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yr(e.radius,e.detail)}}class ec extends $o{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class sa extends En{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),f=Math.floor(a),l=o+1,u=f+1,h=e/o,d=t/f,p=[],m=[],E=[],v=[];for(let x=0;x<u;x++){const A=x*d-s;for(let P=0;P<l;P++){const y=P*h-r;m.push(y,-A,0),E.push(0,0,1),v.push(P/o),v.push(1-x/f)}}for(let x=0;x<f;x++)for(let A=0;A<o;A++){const P=A+l*x,y=A+l*(x+1),S=A+1+l*(x+1),T=A+1+l*x;p.push(P,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(E,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}class _n extends En{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(s+o,Math.PI);let l=0;const u=[],h=new z,d=new z,p=[],m=[],E=[],v=[];for(let x=0;x<=i;x++){const A=[],P=x/i,y=s+P*o,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S);let I=0;x===0&&s===0?I=.5/t:x===i&&f===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){const R=_/t,L=a+R*r;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),v.push(R+I,1-P),A.push(l++)}u.push(A)}for(let x=0;x<i;x++)for(let A=0;A<t;A++){const P=u[x][A+1],y=u[x][A],S=u[x+1][A],T=u[x+1][A+1];(x!==0||s>0)&&p.push(P,y,T),(x!==i-1||f<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(E,3)),this.setAttribute("uv",new tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ui extends En{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const f=[],l=[],u=[],h=[],d=new z,p=new z,m=new z;for(let E=0;E<=i;E++){const v=s+E/i*o;for(let x=0;x<=a;x++){const A=x/a*r;p.x=(e+t*Math.cos(v))*Math.cos(A),p.y=(e+t*Math.cos(v))*Math.sin(A),p.z=t*Math.sin(v),l.push(p.x,p.y,p.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/a),h.push(E/i)}}for(let E=1;E<=i;E++)for(let v=1;v<=a;v++){const x=(a+1)*E+v-1,A=(a+1)*(E-1)+v-1,P=(a+1)*(E-1)+v,y=(a+1)*E+v;f.push(x,A,y),f.push(A,P,y)}this.setIndex(f),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function $r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(ju(a))a.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(ju(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=$r(n[t]);for(const a in i)e[a]=i[a]}return e}function ju(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const qm={clone:$r,merge:Fn};var Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(a.value);break;case"v3":this.uniforms[i].value=new z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Et().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Qt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jm extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yi extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new La,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Km extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const el={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ed(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ed(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ed(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Qm{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,f;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jm=new Qm;class Vf{constructor(e){this.manager=e!==void 0?e:jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr=new WeakMap;class eg extends Vf{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=el.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Tr.get(s);h===void 0&&(h=[],Tr.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=Uo("img");function f(){u(),t&&t(this);const h=Tr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Tr.delete(this),r.manager.itemEnd(e)}function l(h){u(),a&&a(h),el.remove(`image:${e}`);const d=Tr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}Tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",f,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),el.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class tg extends Vf{constructor(e){super(e)}load(e,t,i,a){const r=new yn,s=new eg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class Hh extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ng extends Hh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const tl=new Qt,td=new z,nd=new z;class ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Of,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,f=a?a.x/r.x:0,l=a?a.y/r.y:0;e.coordinateSystem===No||e.reversedDepth?t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cs=new z,Ps=new Mi,Ti=new z;class Wh extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cs,Ps,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Ps,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Cs,Ps,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cs,Ps,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ma=new z,id=new Ne,ad=new Ne;class ai extends Wh{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ma.x,ma.y).multiplyScalar(-e/ma.z),ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ma.x,ma.y).multiplyScalar(-e/ma.z)}getViewSize(e,t){return this.getViewBounds(e,id,ad),t.subVectors(ad,id)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/f,t-=s.offsetY*i/l,a*=s.width/f,i*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dc extends Wh{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=u*this.view.offsetY,f=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ag extends ig{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends Hh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new ag}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const wr=-90,Rr=1;class og extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ai(wr,Rr,e,t);a.layers=this.layers,this.add(a);const r=new ai(wr,Rr,e,t);r.layers=this.layers,this.add(r);const s=new ai(wr,Rr,e,t);s.layers=this.layers,this.add(s);const o=new ai(wr,Rr,e,t);o.layers=this.layers,this.add(o);const f=new ai(wr,Rr,e,t);f.layers=this.layers,this.add(f);const l=new ai(wr,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,f]=t;for(const l of t)this.remove(l);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===No)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,f,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class sg extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const su=class su{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};su.prototype.isMatrix2=!0;let rd=su;function od(n,e,t,i){const a=cg(i);switch(t){case gh:return n*e;case vh:return n*e/a.components*a.byteLength;case Rf:return n*e/a.components*a.byteLength;case er:return n*e*2/a.components*a.byteLength;case Cf:return n*e*2/a.components*a.byteLength;case xh:return n*e*3/a.components*a.byteLength;case si:return n*e*4/a.components*a.byteLength;case Pf:return n*e*4/a.components*a.byteLength;case zs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:case ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case Cl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Rl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Il:case Dl:case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Ys:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zl:case Kl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jl:case ef:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $s:case tf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cg(n){switch(n){case Bn:case dh:return{byteLength:1,components:1};case Lo:case hh:case zi:return{byteLength:2,components:1};case Tf:case wf:return{byteLength:2,components:4};case Bi:case Af:case Di:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);function Xh(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lg(n){const e=new WeakMap;function t(o,f){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,f,l){const u=f.array,h=f.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],E=h[p];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const E=h[p];n.bufferSubData(l,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(n.deleteBuffer(f.buffer),e.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,f));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,f),l.version=o.version}}return{get:a,remove:r,update:s}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ug=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,c1=`uniform sampler2D dfgLUT;
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
}`,l1=`
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,vx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Nx=`#define STANDARD
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
}`,Ux=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Fx=`#define TOON
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
}`,Bx=`uniform float size;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Vx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:fg,alphahash_pars_fragment:ug,alphamap_fragment:dg,alphamap_pars_fragment:hg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:vg,batching_vertex:Mg,begin_vertex:_g,beginnormal_vertex:Sg,bsdfs:yg,iridescence_fragment:bg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Og,displacementmap_vertex:Fg,emissivemap_fragment:Bg,emissivemap_pars_fragment:zg,colorspace_fragment:Gg,colorspace_pars_fragment:Vg,envmap_fragment:kg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:n1,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:$g,fog_fragment:Jg,fog_pars_fragment:Zg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Qg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:a1,lights_phong_fragment:r1,lights_phong_pars_fragment:o1,lights_physical_fragment:s1,lights_physical_pars_fragment:c1,lights_fragment_begin:l1,lights_fragment_maps:f1,lights_fragment_end:u1,lightprobes_pars_fragment:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:x1,map_pars_fragment:v1,map_particle_fragment:M1,map_particle_pars_fragment:_1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:y1,morphinstance_vertex:b1,morphcolor_vertex:E1,morphnormal_vertex:A1,morphtarget_pars_vertex:T1,morphtarget_vertex:w1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:P1,normal_pars_vertex:I1,normal_vertex:L1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:F1,opaque_fragment:B1,packing:z1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:k1,dithering_pars_fragment:H1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:Y1,shadowmap_vertex:$1,shadowmask_pars_fragment:J1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:j1,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:ax,transmission_pars_fragment:rx,uv_pars_fragment:ox,uv_pars_vertex:sx,uv_vertex:cx,worldpos_vertex:lx,background_vert:fx,background_frag:ux,backgroundCube_vert:dx,backgroundCube_frag:hx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distance_vert:vx,distance_frag:Mx,equirect_vert:_x,equirect_frag:Sx,linedashed_vert:yx,linedashed_frag:bx,meshbasic_vert:Ex,meshbasic_frag:Ax,meshlambert_vert:Tx,meshlambert_frag:wx,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Lx,meshphong_frag:Dx,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:Ox,meshtoon_frag:Fx,points_vert:Bx,points_frag:zx,shadow_vert:Gx,shadow_frag:Vx,sprite_vert:kx,sprite_frag:Hx},Je={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ci={basic:{uniforms:Fn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Fn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Fn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Fn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Fn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new St(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Fn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Fn([Je.points,Je.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Fn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Fn([Je.common,Je.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Fn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Fn([Je.sprite,Je.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Fn([Je.common,Je.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Fn([Je.lights,Je.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ci.physical={uniforms:Fn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Is={r:0,b:0,g:0},Wx=new Qt,qh=new Et;qh.set(-1,0,0,0,1,0,0,0,1);function Xx(n,e,t,i,a,r){const s=new St(0);let o=a===!0?0:1,f,l,u=null,h=0,d=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function m(A){let P=!1;const y=p(A);y===null?v(s,o):y&&y.isColor&&(v(y,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(A,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===fc)?(l===void 0&&(l=new xt(new aa(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:$r(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qh),l.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Wt,(u!==y||h!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new xt(new sa(2,2),new Si({name:"BackgroundMaterial",uniforms:$r(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function v(A,P){A.getRGB(Is,kh(n)),t.buffers.color.setClear(Is.r,Is.g,Is.b,P,r)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,P=1){s.set(A),o=P,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,v(s,o)},render:m,addToRenderList:E,dispose:x}}function qx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(U,V,X,k,$){let ie=!1;const G=h(U,k,X,V);r!==G&&(r=G,l(r.object)),ie=p(U,k,X,$),ie&&m(U,k,X,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ie||s)&&(s=!1,y(U,V,X,k),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function f(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,V,X,k){const $=k.wireframe===!0;let ie=i[V.id];ie===void 0&&(ie={},i[V.id]=ie);const G=U.isInstancedMesh===!0?U.id:0;let xe=ie[G];xe===void 0&&(xe={},ie[G]=xe);let re=xe[X.id];re===void 0&&(re={},xe[X.id]=re);let le=re[$];return le===void 0&&(le=d(f()),re[$]=le),le}function d(U){const V=[],X=[],k=[];for(let $=0;$<t;$++)V[$]=0,X[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:k,object:U,attributes:{},index:null}}function p(U,V,X,k){const $=r.attributes,ie=V.attributes;let G=0;const xe=X.getAttributes();for(const re in xe)if(xe[re].location>=0){const de=$[re];let Ke=ie[re];if(Ke===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(Ke=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(Ke=U.instanceColor)),de===void 0||de.attribute!==Ke||Ke&&de.data!==Ke.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function m(U,V,X,k){const $={},ie=V.attributes;let G=0;const xe=X.getAttributes();for(const re in xe)if(xe[re].location>=0){let de=ie[re];de===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(de=U.instanceColor));const Ke={};Ke.attribute=de,de&&de.data&&(Ke.data=de.data),$[re]=Ke,G++}r.attributes=$,r.attributesNum=G,r.index=k}function E(){const U=r.newAttributes;for(let V=0,X=U.length;V<X;V++)U[V]=0}function v(U){x(U,0)}function x(U,V){const X=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;X[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),$[U]!==V&&(n.vertexAttribDivisor(U,V),$[U]=V)}function A(){const U=r.newAttributes,V=r.enabledAttributes;for(let X=0,k=V.length;X<k;X++)V[X]!==U[X]&&(n.disableVertexAttribArray(X),V[X]=0)}function P(U,V,X,k,$,ie,G){G===!0?n.vertexAttribIPointer(U,V,X,$,ie):n.vertexAttribPointer(U,V,X,k,$,ie)}function y(U,V,X,k){E();const $=k.attributes,ie=X.getAttributes(),G=V.defaultAttributeValues;for(const xe in ie){const re=ie[xe];if(re.location>=0){let le=$[xe];if(le===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){const de=le.normalized,Ke=le.itemSize,Ue=e.get(le);if(Ue===void 0)continue;const yt=Ue.buffer,pt=Ue.type,vt=Ue.bytesPerElement,fe=pt===n.INT||pt===n.UNSIGNED_INT||le.gpuType===Af;if(le.isInterleavedBufferAttribute){const me=le.data,Ce=me.stride,ot=le.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<re.locationSize;Ve++)x(re.location+Ve,me.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<re.locationSize;Ve++)v(re.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let Ve=0;Ve<re.locationSize;Ve++)P(re.location+Ve,Ke/re.locationSize,pt,de,Ce*vt,(ot+Ke/re.locationSize*Ve)*vt,fe)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)x(re.location+me,le.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<re.locationSize;me++)v(re.location+me);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let me=0;me<re.locationSize;me++)P(re.location+me,Ke/re.locationSize,pt,de,Ke*vt,Ke/re.locationSize*me*vt,fe)}}else if(G!==void 0){const de=G[xe];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(re.location,de);break;case 3:n.vertexAttrib3fv(re.location,de);break;case 4:n.vertexAttrib4fv(re.location,de);break;default:n.vertexAttrib1fv(re.location,de)}}}}A()}function S(){R();for(const U in i){const V=i[U];for(const X in V){const k=V[X];for(const $ in k){const ie=k[$];for(const G in ie)u(ie[G].object),delete ie[G];delete k[$]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const X in V){const k=V[X];for(const $ in k){const ie=k[$];for(const G in ie)u(ie[G].object),delete ie[G];delete k[$]}}delete i[U.id]}function I(U){for(const V in i){const X=i[V];for(const k in X){const $=X[k];if($[U.id]===void 0)continue;const ie=$[U.id];for(const G in ie)u(ie[G].object),delete ie[G];delete $[U.id]}}}function _(U){for(const V in i){const X=i[V],k=U.isInstancedMesh===!0?U.id:0,$=X[k];if($!==void 0){for(const ie in $){const G=$[ie];for(const xe in G)u(G[xe].object),delete G[xe];delete $[ie]}delete X[k],Object.keys(X).length===0&&delete i[V]}}}function R(){L(),s=!0,r!==a&&(r=a,l(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:A}}function Yx(n,e,t){let i;function a(f){i=f}function r(f,l){n.drawArrays(i,f,l),t.update(l,i,1)}function s(f,l,u){u!==0&&(n.drawArraysInstanced(i,f,l,u),t.update(l,i,u))}function o(f,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function $x(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==si&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const _=I===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Bn&&I!==Di&&!_&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=f(l);u!==l&&(Mt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:T}}function Jx(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new ba,o=new Et,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,x=n.get(h);if(!a||m===null||m.length===0||r&&!v)r?u(null):l();else{const A=r?0:i,P=A*4;let y=x.clippingState||null;f.value=y,y=u(m,d,P,p);for(let S=0;S!==P;++S)y[S]=t[S];x.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function l(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=f.value,m!==!0||v===null){const x=p+E*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(v===null||v.length<x)&&(v=new Float32Array(x));for(let P=0,y=p;P!==E;++P,y+=4)s.copy(h[P]).applyMatrix4(A,o),s.normal.toArray(v,y),v[y+3]=s.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const zr=4,Zx=6,Kx=20,Qx=256,po=new dc,sd=new St;let nl=null,il=0,al=0,rl=!1;const jx=new z,ka=new z;class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=jx}=r;nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nl,il,al),this._renderer.xr.enabled=rl,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ja||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:zi,format:si,colorSpace:Js,depthBuffer:!1},a=ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ev(r)),this._blurMaterial=nv(r,e,t),this._ggxMaterial=tv(r,e,t)}return a}_compileMaterial(e){const t=new xt(new En,e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,i,a,r){const f=new ai(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(sd),h.toneMapping=Oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new aa,new oa({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let x=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,x=!0):(v.color.copy(sd),x=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(f.up.set(0,l[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[P],r.y,r.z)):y===1?(f.up.set(0,0,l[P]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[P],r.z)):(f.up.set(0,l[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[P]));const S=this._cubeSize;Cr(a,y*S,P>2?S:0,S,S),h.setRenderTarget(a),x&&h.render(E,f),h.render(e,f)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ja||e.mapping===Wr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const f=this._cubeSize;Cr(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const f=s.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,p=h*d,{_lodMax:m}=this,E=this._sizeLods[i],v=3*E*(i>m-zr?i-m+zr:0),x=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=p,f.mipInt.value=m-t,Cr(r,v,x,3*E,2*E),a.setRenderTarget(r),a.render(o,po),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-i,Cr(e,v,x,3*E,2*E),a.setRenderTarget(e),a.render(o,po)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,f=this._lodMeshes[a];f.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-zr?a-this._lodMax+zr:0),d=4*(this._cubeSize-u);Cr(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(f,po)}}function ev(n){const e=[],t=[];let i=n;const a=n-zr+1+Zx;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),f=-o,l=1+o,u=[f,f,l,f,l,l,f,f,l,l,f,l],h=6,d=6,p=3,m=new Float32Array(p*d*h),E=new Float32Array(p*d*h);for(let x=0;x<h;x++){const A=x%3*2/3-1,P=x>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(y,p*d*x);for(let S=0;S<d;S++){const T=u[S*2]*2-1,I=u[S*2+1]*2-1;x===0?ka.set(1,I,T):x===1?ka.set(-T,1,-I):x===2?ka.set(-T,I,1):x===3?ka.set(-1,I,-T):x===4?ka.set(-T,-1,I):ka.set(T,I,-1),ka.toArray(E,(x*d+S)*p)}}const v=new En;v.setAttribute("position",new _i(m,p)),v.setAttribute("outputDirection",new _i(E,p)),t.push(new xt(v,null)),i>zr&&i--}return{lodMeshes:t,sizeLods:e}}function ld(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function tv(n,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function nv(n,e,t){return new Si({name:"SphericalGaussianBlur",defines:{SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function fd(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function ud(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yh extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Lh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new aa(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:ta});r.uniforms.tEquirect.value=t;const s=new xt(a,r),o=t.minFilter;return t.minFilter===Ya&&(t.minFilter=Sn),new og(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function iv(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Tc||p===wc)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const E=new Yh(m.height);return E.fromEquirectangularTexture(n,d),e.set(d,E),d.addEventListener("dispose",l),o(E.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Tc||p===wc,E=p===ja||p===Wr;if(m||E){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new cd(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const A=d.image;return m&&A&&A.height>0||E&&A&&f(A)?(i===null&&(i=new cd(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,p){return p===Tc?d.mapping=ja:p===wc&&(d.mapping=Wr),d}function f(d){let p=0;const m=6;for(let E=0;E<m;E++)d[E]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function av(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Vr("WebGLRenderer: "+i+" extension not supported."),a}}}function rv(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function f(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,m=h.attributes.position;let E=0;if(m===void 0)return;if(p!==null){const A=p.array;E=p.version;for(let P=0,y=A.length;P<y;P+=3){const S=A[P+0],T=A[P+1],I=A[P+2];d.push(S,T,T,I,I,S)}}else{const A=m.array;E=m.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const S=P+0,T=P+1,I=P+2;d.push(S,T,T,I,I,S)}}const v=new(m.count>=65535?Th:Ah)(d,1);v.version=E;const x=r.get(h);x&&e.remove(x),r.set(h,v)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:f,getWireframeAttribute:u}}function ov(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function f(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function l(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let E=0;for(let v=0;v<p;v++)E+=d[v];t.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=f,this.renderInstances=l,this.renderMultiDraw=u}function sv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function cv(n,e,t){const i=new WeakMap,a=new rn;function r(s,o,f){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),E===!0&&(y=2),v===!0&&(y=3);let S=o.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*T*4*h),_=new Sh(I,S,T,h);_.type=Di,_.needsUpdate=!0;const R=y*4;for(let U=0;U<h;U++){const V=x[U],X=A[U],k=P[U],$=S*T*4*U;for(let ie=0;ie<V.count;ie++){const G=ie*R;m===!0&&(a.fromBufferAttribute(V,ie),I[$+G+0]=a.x,I[$+G+1]=a.y,I[$+G+2]=a.z,I[$+G+3]=0),E===!0&&(a.fromBufferAttribute(X,ie),I[$+G+4]=a.x,I[$+G+5]=a.y,I[$+G+6]=a.z,I[$+G+7]=0),v===!0&&(a.fromBufferAttribute(k,ie),I[$+G+8]=a.x,I[$+G+9]=a.y,I[$+G+10]=a.z,I[$+G+11]=k.itemSize===4?a.w:1)}}d={count:h,texture:_,size:new Ne(S,T)},i.set(o,d),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const E=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",l)}f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(n,e,t,i,a){let r=new WeakMap;function s(l){const u=a.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",f)===!1&&l.addEventListener("dispose",f),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function f(l){const u=l.target;u.removeEventListener("dispose",f),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const fv={[ah]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function uv(n,e,t,i,a,r){const s=new ci(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,f=null;const l=new En;l.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tn([0,2,0,0,2,0],2));const u=new Jm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new xt(l,u),d=new dc(-1,1,1,-1,0,1);let p=null,m=null,E=!1,v,x=null,A=[],P=!1;this.setSize=function(y,S){s.setSize(y,S),o!==null&&o.setSize(y,S),f!==null&&f.setSize(y,S);for(let T=0;T<A.length;T++){const I=A[T];I.setSize&&I.setSize(y,S)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const S=s.width,T=s.height;A.length>0&&o===null&&(o=new ci(S,T,{type:zi,depthBuffer:!1,stencilBuffer:!1}),f=new ci(S,T,{type:zi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<A.length;I++){const _=A[I];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(E||y.toneMapping===Oi&&A.length===0)return!1;if(x=S,S!==null){const T=S.width,I=S.height;(s.width!==T||s.height!==I)&&this.setSize(T,I)}return P===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=Oi,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=v,E=!0;let T=s,I=o;for(let _=0;_<A.length;_++){const R=A[_];R.enabled!==!1&&(R.render(y,I,T,S),R.needsSwap!==!1&&(T=I,I=I===o?f:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,u.defines={},Lt.getTransfer(p)===Wt&&(u.defines.SRGB_TRANSFER="");const _=fv[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(x),y.render(h,d),x=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),f!==null&&f.dispose(),l.dispose(),u.dispose()}}const $h=new yn,cf=new Xr(1,1),Jh=new Sh,Zh=new Y0,Kh=new Lh,dd=[],hd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=dd[a];if(r===void 0&&(r=new Float32Array(a),dd[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;gd.set(i),n.uniformMatrix2fv(this.addr,!1,gd),gn(t,i)}}function xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;md.set(i),n.uniformMatrix3fv(this.addr,!1,md),gn(t,i)}}function vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,i))return;pd.set(i),n.uniformMatrix4fv(this.addr,!1,pd),gn(t,i)}}function Mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function bv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function wv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(cf.compareFunction=t.isReversedDepthBuffer()?Lf:If,r=cf):r=$h,t.setTexture2D(e||r,a)}function Rv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Zh,a)}function Cv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Kh,a)}function Pv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Jh,a)}function Iv(n){switch(n){case 5126:return dv;case 35664:return hv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return _v;case 35668:case 35672:return Sv;case 35669:case 35673:return yv;case 5125:return bv;case 36294:return Ev;case 36295:return Av;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(n,e){n.uniform1fv(this.addr,e)}function Dv(n,e){const t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function Nv(n,e){const t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function Uv(n,e){const t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ov(n,e){const t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fv(n,e){const t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bv(n,e){const t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Vv(n,e){n.uniform3iv(this.addr,e)}function kv(n,e){n.uniform4iv(this.addr,e)}function Hv(n,e){n.uniform1uiv(this.addr,e)}function Wv(n,e){n.uniform2uiv(this.addr,e)}function Xv(n,e){n.uniform3uiv(this.addr,e)}function qv(n,e){n.uniform4uiv(this.addr,e)}function Yv(n,e,t){const i=this.cache,a=e.length,r=pc(t,a);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=cf:s=$h;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function $v(n,e,t){const i=this.cache,a=e.length,r=pc(t,a);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Zh,r[s])}function Jv(n,e,t){const i=this.cache,a=e.length,r=pc(t,a);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Kh,r[s])}function Zv(n,e,t){const i=this.cache,a=e.length,r=pc(t,a);mn(i,r)||(n.uniform1iv(this.addr,r),gn(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Jh,r[s])}function Kv(n){switch(n){case 5126:return Lv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}}class jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function xd(n,e){n.seq.push(e),n.map[e.id]=e}function tM(n,e,t){const i=n.name,a=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),s=ol.lastIndex;let o=r[1];const f=r[2]==="]",l=r[3];if(f&&(o=o|0),l===void 0||l==="["&&s+2===a){xd(t,l===void 0?new Qv(o,n,e):new jv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new eM(o),xd(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);tM(o,f,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nM=37297;let iM=0;function aM(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Md=new Et;function rM(n){Lt._getMatrix(Md,Lt.workingColorSpace,n);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(n)){case Zs:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _d(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aM(n.getShaderSource(e),o)}else return r}function oM(n,e){const t=rM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sM={[ah]:"Linear",[rh]:"Reinhard",[oh]:"Cineon",[sh]:"ACESFilmic",[lh]:"AgX",[fh]:"Neutral",[ch]:"Custom"};function cM(n,e){const t=sM[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new z;function lM(){Lt.getLuminanceCoefficients(Ls);const n=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function uM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function bo(n){return n!==""}function Sd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(n){return n.replace(hM,mM)}const pM=new Map;function mM(n,e){let t=wt[e];if(t===void 0){const i=pM.get(e);if(i!==void 0)t=wt[i],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lf(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace(gM,xM)}function xM(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ed(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const vM={[Eo]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function MM(n){return vM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _M={[ja]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function SM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_M[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yM={[Wr]:"ENVMAP_MODE_REFRACTION"};function bM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EM={[ih]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[f0]:"ENVMAP_BLENDING_ADD"};function AM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":EM[n.combine]||"ENVMAP_BLENDING_NONE"}function TM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wM(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=MM(t),l=SM(t),u=bM(t),h=AM(t),d=TM(t),p=fM(t),m=uM(r),E=a.createProgram();let v,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),x.length>0&&(x+=`
`)):(v=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),x=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?wt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,oM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),s=lf(s),s=Sd(s,t),s=yd(s,t),o=lf(o),o=Sd(o,t),o=yd(o,t),s=bd(s),o=bd(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=A+v+s,y=A+x+o,S=vd(a,a.VERTEX_SHADER,P),T=vd(a,a.FRAGMENT_SHADER,y);a.attachShader(E,S),a.attachShader(E,T),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(U){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(E)||"",X=a.getShaderInfoLog(S)||"",k=a.getShaderInfoLog(T)||"",$=V.trim(),ie=X.trim(),G=k.trim();let xe=!0,re=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(xe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,S,T);else{const le=_d(a,S,"vertex"),de=_d(a,T,"fragment");Dt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+le+`
`+de)}else $!==""?Mt("WebGLProgram: Program Info Log:",$):(ie===""||G==="")&&(re=!1);re&&(U.diagnostics={runnable:xe,programLog:$,vertexShader:{log:ie,prefix:v},fragmentShader:{log:G,prefix:x}})}a.deleteShader(S),a.deleteShader(T),_=new Hs(a,E),R=dM(a,E)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(E,nM)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=T,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PM(e),t.set(e,i)),i}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function IM(n){return n===er||n===Ys||n===$s}function LM(n,e,t,i,a,r){const s=new yh,o=new CM,f=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return f.add(_),_===0?"uv":`uv${_}`}function E(_,R,L,U,V,X){const k=U.fog,$=V.geometry,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,xe=e.get(_.envMap||ie,G),re=xe&&xe.mapping===fc?xe.image.height:null,le=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Mt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=de!==void 0?de.length:0;let Ue=0;$.morphAttributes.position!==void 0&&(Ue=1),$.morphAttributes.normal!==void 0&&(Ue=2),$.morphAttributes.color!==void 0&&(Ue=3);let yt,pt,vt,fe;if(le){const dt=Ci[le];yt=dt.vertexShader,pt=dt.fragmentShader}else{yt=_.vertexShader,pt=_.fragmentShader;const dt=o.getVertexShaderStage(_),Ot=o.getFragmentShaderStage(_);o.update(_,dt,Ot),vt=dt.id,fe=Ot.id}const me=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ot=V.isInstancedMesh===!0,Ve=V.isBatchedMesh===!0,Pe=!!_.map,ut=!!_.matcap,ue=!!xe,Me=!!_.aoMap,Ae=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,be=!!_.normalMap,et=!!_.displacementMap,ne=!!_.emissiveMap,Se=!!_.metalnessMap,w=!!_.roughnessMap,O=_.anisotropy>0,ct=_.clearcoat>0,ke=_.dispersion>0,D=_.retroreflectivity>0,b=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,ce=O&&!!_.anisotropyMap,ve=ct&&!!_.clearcoatMap,Re=ct&&!!_.clearcoatNormalMap,se=ct&&!!_.clearcoatRoughnessMap,pe=b&&!!_.iridescenceMap,Ie=b&&!!_.iridescenceThicknessMap,Qe=Y&&!!_.sheenColorMap,ze=Y&&!!_.sheenRoughnessMap,Be=!!_.specularMap,Oe=!!_.specularColorMap,at=!!_.specularIntensityMap,gt=Z&&!!_.transmissionMap,q=Z&&!!_.thicknessMap,De=!!_.gradientMap,te=!!_.alphaMap,Ge=_.alphaTest>0,We=!!_.alphaHash,ye=!!_.extensions;let c=Oi;_.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(c=n.toneMapping);const qe={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:yt,fragmentShader:pt,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&V._colorsTexture!==null,instancing:ot,instancingColor:ot&&V.instanceColor!==null,instancingMorph:ot&&V.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:ut,envMap:ue,envMapMode:ue&&xe.mapping,envMapCubeUVHeight:re,aoMap:Me,lightMap:Ae,bumpMap:we,normalMap:be,displacementMap:et,emissiveMap:ne,normalMapObjectSpace:be&&_.normalMapType===h0,normalMapTangentSpace:be&&_.normalMapType===nf,packedNormalMap:be&&_.normalMapType===nf&&IM(_.normalMap.format),metalnessMap:Se,roughnessMap:w,anisotropy:O,anisotropyMap:ce,clearcoat:ct,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:se,dispersion:ke,retroreflection:D,iridescence:b,iridescenceMap:pe,iridescenceThicknessMap:Ie,sheen:Y,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:Be,specularColorMap:Oe,specularIntensityMap:at,transmission:Z,transmissionMap:gt,thicknessMap:q,gradientMap:De,opaque:_.transparent===!1&&_.blending===Ao&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:Ge,alphaHash:We,combine:_.combine,mapUv:Pe&&m(_.map.channel),aoMapUv:Me&&m(_.aoMap.channel),lightMapUv:Ae&&m(_.lightMap.channel),bumpMapUv:we&&m(_.bumpMap.channel),normalMapUv:be&&m(_.normalMap.channel),displacementMapUv:et&&m(_.displacementMap.channel),emissiveMapUv:ne&&m(_.emissiveMap.channel),metalnessMapUv:Se&&m(_.metalnessMap.channel),roughnessMapUv:w&&m(_.roughnessMap.channel),anisotropyMapUv:ce&&m(_.anisotropyMap.channel),clearcoatMapUv:ve&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:Re&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(_.sheenRoughnessMap.channel),specularMapUv:Be&&m(_.specularMap.channel),specularColorMapUv:Oe&&m(_.specularColorMap.channel),specularIntensityMapUv:at&&m(_.specularIntensityMap.channel),transmissionMapUv:gt&&m(_.transmissionMap.channel),thicknessMapUv:q&&m(_.thicknessMap.channel),alphaMapUv:te&&m(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(be||O),vertexNormals:!!$.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Pe||te),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||$.attributes.normal===void 0&&be===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:Ue,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:c,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Lt.getTransfer(_.map.colorSpace)===Wt,decodeVideoTextureEmissive:ne&&_.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(_.emissiveMap.colorSpace)===Wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ri,flipSided:_.side===Gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=f.has(1),qe.vertexUv2s=f.has(2),qe.vertexUv3s=f.has(3),f.clear(),qe}function v(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)R.push(L),R.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(R,_),A(R,_),R.push(n.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function x(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function A(_,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.retroreflection&&s.enable(24),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function P(_){const R=p[_.type];let L;if(R){const U=Ci[R];L=qm.clone(U.uniforms)}else L=_.uniforms;return L}function y(_,R){let L=u.get(R);return L!==void 0?++L.usedTimes:(L=new wM(n,R,_,a),l.push(L),u.set(R,L)),L}function S(_){if(--_.usedTimes===0){const R=l.indexOf(_);l[R]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:I}}function DM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,f){n.get(s)[o]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function NM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Td(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,E,v,x){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:E,renderOrder:d.renderOrder,z:v,group:x},n[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=m,A.materialVariant=s(d),A.groupOrder=E,A.renderOrder=d.renderOrder,A.z=v,A.group=x),e++,A}function f(d,p,m,E,v,x,A){A.reversedDepth===!0&&(v=-v);const P=o(d,p,m,E,v,x);m.transmission>0?i.push(P):m.transparent===!0?a.push(P):t.push(P)}function l(d,p,m,E,v,x){const A=o(d,p,m,E,v,x);m.transmission>0?i.unshift(A):m.transparent===!0?a.unshift(A):t.unshift(A)}function u(d,p){t.length>1&&t.sort(d||NM),i.length>1&&i.sort(p||Ad),a.length>1&&a.sort(p||Ad)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:l,finish:h,sort:u}}function UM(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Td,n.set(i,[s])):a>=r.length?(s=new Td,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function OM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new St};break;case"SpotLight":t={position:new z,direction:new z,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BM=0;function zM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GM(n){const e=new OM,t=FM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const a=new z,r=new Qt,s=new Qt;function o(l){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,E=0,v=0,x=0,A=0,P=0,y=0,S=0,T=0,I=0,_=0,R=0,L=0;l.sort(zM);for(let V=0,X=l.length;V<X;V++){const k=l[V],$=k.color,ie=k.intensity,G=k.distance;let xe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===er?xe=k.shadow.map.texture:xe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=$.r*ie,h+=$.g*ie,d+=$.b*ie;else if(k.isLightProbe){for(let re=0;re<9;re++)i.probe[re].addScaledVector(k.sh.coefficients[re],ie);L++}else if(k.isSunLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[m]=de,i.sunShadowMap[m]=xe;const Ke=le.getViewportCount();for(let Ue=0;Ue<Ke;Ue++)i.sunShadowMatrix[E+Ue]=le.getMatrix(Ue),i.sunShadowCascade[E+Ue]=le._cascadeData[Ue];E+=Ke,m++}i.sun[p]=re,p++}else if(k.isDirectionalLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.directionalShadow[v]=de,i.directionalShadowMap[v]=xe,i.directionalShadowMatrix[v]=k.shadow.matrix,S++}i.directional[v]=re,v++}else if(k.isSpotLight){const re=e.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy($).multiplyScalar(ie),re.distance=G,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,i.spot[A]=re;const le=k.shadow;if(k.map&&(i.spotLightMap[_]=k.map,_++,le.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[A]=le.matrix,k.castShadow){const de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.spotShadow[A]=de,i.spotShadowMap[A]=xe,I++}A++}else if(k.isRectAreaLight){const re=e.get(k);re.color.copy($).multiplyScalar(ie),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),i.rectArea[P]=re,P++}else if(k.isPointLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),re.distance=k.distance,re.decay=k.decay,k.castShadow){const le=k.shadow,de=t.get(k);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,i.pointShadow[x]=de,i.pointShadowMap[x]=xe,i.pointShadowMatrix[x]=k.shadow.matrix,T++}i.point[x]=re,x++}else if(k.isHemisphereLight){const re=e.get(k);re.skyColor.copy(k.color).multiplyScalar(ie),re.groundColor.copy(k.groundColor).multiplyScalar(ie),i.hemi[y]=re,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==v||U.pointLength!==x||U.spotLength!==A||U.rectAreaLength!==P||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==I||U.numSpotMaps!==_||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=A,i.rectArea.length=P,i.point.length=x,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+_-R,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,U.sunLength=p,U.directionalLength=v,U.pointLength=x,U.spotLength=A,U.rectAreaLength=P,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=I,U.numSpotMaps=_,U.numLightProbes=L,i.version=BM++)}function f(l,u){let h=0,d=0,p=0,m=0,E=0,v=0;const x=u.matrixWorldInverse;for(let A=0,P=l.length;A<P;A++){const y=l[A];if(y.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),h++}else if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),d++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(x),m++}else if(y.isRectAreaLight){const S=i.rectArea[E];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),s.identity(),r.copy(y.matrixWorld),r.premultiply(x),s.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),E++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),v++}}}return{setup:o,setupView:f,state:i}}function wd(n){const e=new GM(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function f(d){a.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:f}}function VM(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new wd(n),e.set(a,[o])):r>=s.length?(o=new wd(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`,WM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],XM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Rd=new Qt,mo=new z,sl=new z;function qM(n,e,t){let i=new Of;const a=new Ne,r=new Ne,s=new rn,o=new Zm,f=new Km,l={},u=t.maxTextureSize,h={[Qa]:Gn,[Gn]:Qa,[ri]:ri},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:kM,fragmentShader:HM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new En;m.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let x=this.type;this.render=function(T,I,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Wp&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);const R=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ta),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=x!==this.type;X&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach($=>$.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,$=T.length;k<$;k++){const ie=T[k],G=ie.shadow;if(G===void 0){Mt("WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const xe=G.getFrameExtents();a.multiply(xe),r.copy(G.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/xe.x),a.x=r.x*xe.x,G.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/xe.y),a.y=r.y*xe.y,G.mapSize.y=r.y));const re=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=re,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===So){if(ie.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ci(a.x,a.y,{format:er,type:zi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),G.map.texture.name=ie.name+".shadowMap",G.map.depthTexture=new Xr(a.x,a.y,Di),G.map.depthTexture.name=ie.name+".shadowMapDepth",G.map.depthTexture.format=ia,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un}else ie.isPointLight?(G.map=new Yh(a.x),G.map.depthTexture=new um(a.x,Bi)):(G.map=new ci(a.x,a.y),G.map.depthTexture=new Xr(a.x,a.y,Bi)),G.map.depthTexture.name=ie.name+".shadowMap",G.map.depthTexture.format=ia,this.type===Eo?(G.map.depthTexture.compareFunction=re?Lf:If,G.map.depthTexture.minFilter=Sn,G.map.depthTexture.magFilter=Sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);const le=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ie.isPointLight!==!0&&G.updateMatrices(ie,_);for(let de=0;de<le;de++){const Ke=G.getCamera(de);if(ie.isPointLight){const Ue=G.camera,yt=G.matrix,pt=ie.distance||Ue.far;pt!==Ue.far&&(Ue.far=pt,Ue.updateProjectionMatrix()),mo.setFromMatrixPosition(ie.matrixWorld),Ue.position.copy(mo),sl.copy(Ue.position),sl.add(WM[de]),Ue.up.copy(XM[de]),Ue.lookAt(sl),Ue.updateMatrixWorld(),yt.makeTranslation(-mo.x,-mo.y,-mo.z),Rd.multiplyMatrices(Ue.projectionMatrix,Ue.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Rd,Ue.coordinateSystem,Ue.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,de),n.clear();else{de===0&&(n.setRenderTarget(G.map),n.clear());const Ue=G.getViewport(de);s.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),V.viewport(s)}i=G.getFrustum(de),y(I,_,Ke,ie,this.type)}G.isPointLightShadow!==!0&&this.type===So&&A(G,_),G.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(R,L,U)};function A(T,I){const _=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new ci(a.x,a.y,{format:er,type:zi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,_,d,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,_,p,E,null)}function P(T,I,_,R){let L=null;const U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?f:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=L.uuid,X=I.uuid;let k=l[V];k===void 0&&(k={},l[V]=k);let $=k[X];$===void 0&&($=L.clone(),k[X]=$,I.addEventListener("dispose",S)),L=$}if(L.visible=I.visible,L.wireframe=I.wireframe,R===So?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=n.properties.get(L);V.light=_}return L}function y(T,I,_,R,L){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===So)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const X=e.update(T),k=T.material;if(Array.isArray(k)){const $=X.groups;for(let ie=0,G=$.length;ie<G;ie++){const xe=$[ie],re=k[xe.materialIndex];if(re&&re.visible){const le=P(T,re,R,L);T.onBeforeShadow(n,T,I,_,X,le,xe),n.renderBufferDirect(_,null,X,le,T,xe),T.onAfterShadow(n,T,I,_,X,le,xe)}}}else if(k.visible){const $=P(T,k,R,L);T.onBeforeShadow(n,T,I,_,X,$,null),n.renderBufferDirect(_,null,X,$,T,null),T.onAfterShadow(n,T,I,_,X,$,null)}}const V=T.children;for(let X=0,k=V.length;X<k;X++)y(V[X],I,_,R,L)}function S(T){T.target.removeEventListener("dispose",S);for(const _ in l){const R=l[_],L=T.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function YM(n,e){function t(){let q=!1;const De=new rn;let te=null;const Ge=new rn(0,0,0,0);return{setMask:function(We){te!==We&&!q&&(n.colorMask(We,We,We,We),te=We)},setLocked:function(We){q=We},setClear:function(We,ye,c,qe,dt){dt===!0&&(We*=qe,ye*=qe,c*=qe),De.set(We,ye,c,qe),Ge.equals(De)===!1&&(n.clearColor(We,ye,c,qe),Ge.copy(De))},reset:function(){q=!1,te=null,Ge.set(-1,0,0,0)}}}function i(){let q=!1,De=!1,te=null,Ge=null,We=null;return{setReversed:function(ye){if(De!==ye){const c=e.get("EXT_clip_control");ye?c.clipControlEXT(c.LOWER_LEFT_EXT,c.ZERO_TO_ONE_EXT):c.clipControlEXT(c.LOWER_LEFT_EXT,c.NEGATIVE_ONE_TO_ONE_EXT),De=ye;const qe=We;We=null,this.setClear(qe)}},getReversed:function(){return De},setTest:function(ye){ye?me(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ye){te!==ye&&!q&&(n.depthMask(ye),te=ye)},setFunc:function(ye){if(De&&(ye=E0[ye]),Ge!==ye){switch(ye){case vl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case Sl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=ye}},setLocked:function(ye){q=ye},setClear:function(ye){We!==ye&&(We=ye,De&&(ye=1-ye),n.clearDepth(ye))},reset:function(){q=!1,te=null,Ge=null,We=null,De=!1}}}function a(){let q=!1,De=null,te=null,Ge=null,We=null,ye=null,c=null,qe=null,dt=null;return{setTest:function(Ot){q||(Ot?me(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Ot){De!==Ot&&!q&&(n.stencilMask(Ot),De=Ot)},setFunc:function(Ot,sn,Pn){(te!==Ot||Ge!==sn||We!==Pn)&&(n.stencilFunc(Ot,sn,Pn),te=Ot,Ge=sn,We=Pn)},setOp:function(Ot,sn,Pn){(ye!==Ot||c!==sn||qe!==Pn)&&(n.stencilOp(Ot,sn,Pn),ye=Ot,c=sn,qe=Pn)},setLocked:function(Ot){q=Ot},setClear:function(Ot){dt!==Ot&&(n.clearStencil(Ot),dt=Ot)},reset:function(){q=!1,De=null,te=null,Ge=null,We=null,ye=null,c=null,qe=null,dt=null}}}const r=new t,s=new i,o=new a,f=new WeakMap,l=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],E=null,v=!1,x=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new St(0,0,0),R=0,L=!1,U=null,V=null,X=null,k=null,$=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,xe=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(re)[1]),G=xe>=1):re.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),G=xe>=2);let le=null,de={};const Ke=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),yt=new rn().fromArray(Ke),pt=new rn().fromArray(Ue);function vt(q,De,te,Ge){const We=new Uint8Array(4),ye=n.createTexture();n.bindTexture(q,ye),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let c=0;c<te;c++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,We):n.texImage2D(De+c,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,We);return ye}const fe={};fe[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Io),we(!1),be(Su),me(n.CULL_FACE),Me(ta);function me(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function Ce(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function ot(q,De){return d[q]!==De?(n.bindFramebuffer(q,De),d[q]=De,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=De),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=De),!0):!1}function Ve(q,De){let te=m,Ge=!1;if(q){te=p.get(De),te===void 0&&(te=[],p.set(De,te));const We=q.textures;if(te.length!==We.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,c=We.length;ye<c;ye++)te[ye]=n.COLOR_ATTACHMENT0+ye;te.length=We.length,Ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(te)}function Pe(q){return E!==q?(n.useProgram(q),E=q,!0):!1}const ut={[Or]:n.FUNC_ADD,[qp]:n.FUNC_SUBTRACT,[Yp]:n.FUNC_REVERSE_SUBTRACT};ut[$p]=n.MIN,ut[Jp]=n.MAX;const ue={[Zp]:n.ZERO,[Kp]:n.ONE,[Qp]:n.SRC_COLOR,[th]:n.SRC_ALPHA,[a0]:n.SRC_ALPHA_SATURATE,[n0]:n.DST_COLOR,[e0]:n.DST_ALPHA,[jp]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[i0]:n.ONE_MINUS_DST_COLOR,[t0]:n.ONE_MINUS_DST_ALPHA,[r0]:n.CONSTANT_COLOR,[o0]:n.ONE_MINUS_CONSTANT_COLOR,[s0]:n.CONSTANT_ALPHA,[c0]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(q,De,te,Ge,We,ye,c,qe,dt,Ot){if(q===ta){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(me(n.BLEND),v=!0),q!==Xp){if(q!==x||Ot!==L){if((A!==Or||S!==Or)&&(n.blendEquation(n.FUNC_ADD),A=Or,S=Or),Ot)switch(q){case Ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",q);break}else switch(q){case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bu:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eu:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",q);break}P=null,y=null,T=null,I=null,_.set(0,0,0),R=0,x=q,L=Ot}return}We=We||De,ye=ye||te,c=c||Ge,(De!==A||We!==S)&&(n.blendEquationSeparate(ut[De],ut[We]),A=De,S=We),(te!==P||Ge!==y||ye!==T||c!==I)&&(n.blendFuncSeparate(ue[te],ue[Ge],ue[ye],ue[c]),P=te,y=Ge,T=ye,I=c),(qe.equals(_)===!1||dt!==R)&&(n.blendColor(qe.r,qe.g,qe.b,dt),_.copy(qe),R=dt),x=q,L=!1}function Ae(q,De){q.side===ri?Ce(n.CULL_FACE):me(n.CULL_FACE);let te=q.side===Gn;De&&(te=!te),we(te),q.blending===Ao&&q.transparent===!1?Me(ta):Me(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),s.setFunc(q.depthFunc),s.setTest(q.depthTest),s.setMask(q.depthWrite),r.setMask(q.colorWrite);const Ge=q.stencilWrite;o.setTest(Ge),Ge&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ne(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(q){U!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),U=q)}function be(q){q!==kp?(me(n.CULL_FACE),q!==V&&(q===Su?n.cullFace(n.BACK):q===Hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),V=q}function et(q){q!==X&&(G&&n.lineWidth(q),X=q)}function ne(q,De,te){q?(me(n.POLYGON_OFFSET_FILL),(k!==De||$!==te)&&(k=De,$=te,s.getReversed()&&(De=-De),n.polygonOffset(De,te))):Ce(n.POLYGON_OFFSET_FILL)}function Se(q){q?me(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function w(q){q===void 0&&(q=n.TEXTURE0+ie-1),le!==q&&(n.activeTexture(q),le=q)}function O(q,De,te){te===void 0&&(le===null?te=n.TEXTURE0+ie-1:te=le);let Ge=de[te];Ge===void 0&&(Ge={type:void 0,texture:void 0},de[te]=Ge),(Ge.type!==q||Ge.texture!==De)&&(le!==te&&(n.activeTexture(te),le=te),n.bindTexture(q,De||fe[q]),Ge.type=q,Ge.texture=De)}function ct(){const q=de[le];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ke(){try{n.compressedTexImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function b(){try{n.texSubImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Y(){try{n.texSubImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function ve(){try{n.texStorage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Re(){try{n.texStorage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function se(){try{n.texImage2D(...arguments)}catch(q){Dt("WebGLState:",q)}}function pe(){try{n.texImage3D(...arguments)}catch(q){Dt("WebGLState:",q)}}function Ie(q){return h[q]!==void 0?h[q]:n.getParameter(q)}function Qe(q,De){h[q]!==De&&(n.pixelStorei(q,De),h[q]=De)}function ze(q){yt.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),yt.copy(q))}function Be(q){pt.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),pt.copy(q))}function Oe(q,De){let te=l.get(De);te===void 0&&(te=new WeakMap,l.set(De,te));let Ge=te.get(q);Ge===void 0&&(Ge=n.getUniformBlockIndex(De,q.name),te.set(q,Ge))}function at(q,De){const Ge=l.get(De).get(q);f.get(De)!==Ge&&(n.uniformBlockBinding(De,Ge,q.__bindingPointIndex),f.set(De,Ge))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,de={},d={},p=new WeakMap,m=[],E=null,v=!1,x=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new St(0,0,0),R=0,L=!1,U=null,V=null,X=null,k=null,$=null,yt.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:Ce,bindFramebuffer:ot,drawBuffers:Ve,useProgram:Pe,setBlending:Me,setMaterial:Ae,setFlipSided:we,setCullFace:be,setLineWidth:et,setPolygonOffset:ne,setScissorTest:Se,activeTexture:w,bindTexture:O,unbindTexture:ct,compressedTexImage2D:ke,compressedTexImage3D:D,texImage2D:se,texImage3D:pe,pixelStorei:Qe,getParameter:Ie,updateUBOMapping:Oe,uniformBlockBinding:at,texStorage2D:ve,texStorage3D:Re,texSubImage2D:b,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:ce,scissor:ze,viewport:Be,reset:gt}}function $M(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return m?new OffscreenCanvas(D,b):Uo("canvas")}function v(D,b,Y){let Z=1;const ce=ke(D);if((ce.width>Y||ce.height>Y)&&(Z=Y/Math.max(ce.width,ce.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ve=Math.floor(Z*ce.width),Re=Math.floor(Z*ce.height);d===void 0&&(d=E(ve,Re));const se=b?E(ve,Re):d;return se.width=ve,se.height=Re,se.getContext("2d").drawImage(D,0,0,ve,Re),Mt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ve+"x"+Re+")."),se}else return"data"in D&&Mt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function x(D){return D.generateMipmaps}function A(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,b,Y,Z,ce,ve=!1){if(D!==null){if(n[D]!==void 0)return n[D];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Re;Z&&(Re=e.get("EXT_texture_norm16"),Re||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=b;if(b===n.RED&&(Y===n.FLOAT&&(se=n.R32F),Y===n.HALF_FLOAT&&(se=n.R16F),Y===n.UNSIGNED_BYTE&&(se=n.R8),Y===n.UNSIGNED_SHORT&&Re&&(se=Re.R16_EXT),Y===n.SHORT&&Re&&(se=Re.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.R8UI),Y===n.UNSIGNED_SHORT&&(se=n.R16UI),Y===n.UNSIGNED_INT&&(se=n.R32UI),Y===n.BYTE&&(se=n.R8I),Y===n.SHORT&&(se=n.R16I),Y===n.INT&&(se=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(se=n.RG32F),Y===n.HALF_FLOAT&&(se=n.RG16F),Y===n.UNSIGNED_BYTE&&(se=n.RG8),Y===n.UNSIGNED_SHORT&&Re&&(se=Re.RG16_EXT),Y===n.SHORT&&Re&&(se=Re.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RG8UI),Y===n.UNSIGNED_SHORT&&(se=n.RG16UI),Y===n.UNSIGNED_INT&&(se=n.RG32UI),Y===n.BYTE&&(se=n.RG8I),Y===n.SHORT&&(se=n.RG16I),Y===n.INT&&(se=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(se=n.RGB16UI),Y===n.UNSIGNED_INT&&(se=n.RGB32UI),Y===n.BYTE&&(se=n.RGB8I),Y===n.SHORT&&(se=n.RGB16I),Y===n.INT&&(se=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),Y===n.UNSIGNED_INT&&(se=n.RGBA32UI),Y===n.BYTE&&(se=n.RGBA8I),Y===n.SHORT&&(se=n.RGBA16I),Y===n.INT&&(se=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_SHORT&&Re&&(se=Re.RGB16_EXT),Y===n.SHORT&&Re&&(se=Re.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),b===n.RGBA){const pe=ve?Zs:Lt.getTransfer(ce);Y===n.FLOAT&&(se=n.RGBA32F),Y===n.HALF_FLOAT&&(se=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(se=pe===Wt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Re&&(se=Re.RGBA16_EXT),Y===n.SHORT&&Re&&(se=Re.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(D,b){let Y;return D?b===null||b===Bi||b===Do?Y=n.DEPTH24_STENCIL8:b===Di?Y=n.DEPTH32F_STENCIL8:b===Lo&&(Y=n.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Bi||b===Do?Y=n.DEPTH_COMPONENT24:b===Di?Y=n.DEPTH_COMPONENT32F:b===Lo&&(Y=n.DEPTH_COMPONENT16),Y}function T(D,b){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==un&&D.minFilter!==Sn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),R(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),U(b)}function R(D){const b=i.get(D);if(b.__webglInit===void 0)return;const Y=D.source,Z=p.get(Y);if(Z){const ce=Z[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&L(D),Object.keys(Z).length===0&&p.delete(Y)}i.remove(D)}function L(D){const b=i.get(D);n.deleteTexture(b.__webglTexture);const Y=D.source,Z=p.get(Y);delete Z[b.__cacheKey],s.memory.textures--}function U(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ce=0;ce<b.__webglFramebuffer[Z].length;ce++)n.deleteFramebuffer(b.__webglFramebuffer[Z][ce]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=D.textures;for(let Z=0,ce=Y.length;Z<ce;Z++){const ve=i.get(Y[Z]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(Y[Z])}i.remove(D)}let V=0;function X(){V=0}function k(){return V}function $(D){V=D}function ie(){const D=V;return D>=a.maxTextures&&Mt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function G(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function xe(D,b){const Y=i.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const Z=D.image;if(Z===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(Y,D,b);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function re(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ce(Y,D,b);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function le(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ce(Y,D,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function de(D,b){const Y=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){ot(Y,D,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const Ke={[qs]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},Ue={[un]:n.NEAREST,[u0]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Rc]:n.LINEAR_MIPMAP_NEAREST,[Ya]:n.LINEAR_MIPMAP_LINEAR},yt={[m0]:n.NEVER,[_0]:n.ALWAYS,[g0]:n.LESS,[If]:n.LEQUAL,[x0]:n.EQUAL,[Lf]:n.GEQUAL,[v0]:n.GREATER,[M0]:n.NOTEQUAL};function pt(D,b){if(b.type===Di&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Sn||b.magFilter===Rc||b.magFilter===as||b.magFilter===Ya||b.minFilter===Sn||b.minFilter===Rc||b.minFilter===as||b.minFilter===Ya)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Ke[b.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Ke[b.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Ke[b.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Ue[b.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Ue[b.minFilter]),b.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==as&&b.minFilter!==Ya||b.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function vt(D,b){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let ce=p.get(Z);ce===void 0&&(ce={},p.set(Z,ce));const ve=G(b);if(ve!==D.__cacheKey){ce[ve]===void 0&&(ce[ve]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),ce[ve].usedTimes++;const Re=ce[D.__cacheKey];Re!==void 0&&(ce[D.__cacheKey].usedTimes--,Re.usedTimes===0&&L(b)),D.__cacheKey=ve,D.__webglTexture=ce[ve].texture}return Y}function fe(D,b,Y){return Math.floor(Math.floor(D/Y)/b)}function me(D,b,Y,Z){const ve=D.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,Z,b.data);else{ve.sort((Qe,ze)=>Qe.start-ze.start);let Re=0;for(let Qe=1;Qe<ve.length;Qe++){const ze=ve[Re],Be=ve[Qe],Oe=ze.start+ze.count,at=fe(Be.start,b.width,4),gt=fe(ze.start,b.width,4);Be.start<=Oe+1&&at===gt&&fe(Be.start+Be.count-1,b.width,4)===at?ze.count=Math.max(ze.count,Be.start+Be.count-ze.start):(++Re,ve[Re]=Be)}ve.length=Re+1;const se=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ie=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Qe=0,ze=ve.length;Qe<ze;Qe++){const Be=ve[Qe],Oe=Math.floor(Be.start/4),at=Math.ceil(Be.count/4),gt=Oe%b.width,q=Math.floor(Oe/b.width),De=at,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,gt,q,De,te,Y,Z,b.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Ce(D,b,Y){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const ce=vt(D,b),ve=b.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+Y);const Re=i.get(ve);if(ve.version!==Re.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const te=Lt.getPrimaries(Lt.workingColorSpace),Ge=b.colorSpace===Ta?null:Lt.getPrimaries(b.colorSpace),We=b.colorSpace===Ta||te===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let pe=v(b.image,!1,a.maxTextureSize);pe=ct(b,pe);const Ie=r.convert(b.format,b.colorSpace),Qe=r.convert(b.type);let ze=y(b.internalFormat,Ie,Qe,b.normalized,b.colorSpace,b.isVideoTexture);pt(Z,b);let Be;const Oe=b.mipmaps,at=b.isVideoTexture!==!0,gt=Re.__version===void 0||ce===!0,q=ve.dataReady,De=T(b,pe);if(b.isDepthTexture)ze=S(b.format===$a,b.type),gt&&(at?t.texStorage2D(n.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ie,Qe,null));else if(b.isDataTexture)if(Oe.length>0){at&&gt&&t.texStorage2D(n.TEXTURE_2D,De,ze,Oe[0].width,Oe[0].height);for(let te=0,Ge=Oe.length;te<Ge;te++)Be=Oe[te],at?q&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Be.width,Be.height,Ie,Qe,Be.data):t.texImage2D(n.TEXTURE_2D,te,ze,Be.width,Be.height,0,Ie,Qe,Be.data);b.generateMipmaps=!1}else at?(gt&&t.texStorage2D(n.TEXTURE_2D,De,ze,pe.width,pe.height),q&&me(b,pe,Ie,Qe)):t.texImage2D(n.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ie,Qe,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,Oe[0].width,Oe[0].height,pe.depth);for(let te=0,Ge=Oe.length;te<Ge;te++)if(Be=Oe[te],b.format!==si)if(Ie!==null)if(at){if(q)if(b.layerUpdates.size>0){const We=od(Be.width,Be.height,b.format,b.type);for(const ye of b.layerUpdates){const c=Be.data.subarray(ye*We/Be.data.BYTES_PER_ELEMENT,(ye+1)*We/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ye,Be.width,Be.height,1,Ie,c)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Be.width,Be.height,pe.depth,Ie,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ze,Be.width,Be.height,pe.depth,0,Be.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Be.width,Be.height,pe.depth,Ie,Qe,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ze,Be.width,Be.height,pe.depth,0,Ie,Qe,Be.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{at&&gt&&t.texStorage2D(n.TEXTURE_2D,De,ze,Oe[0].width,Oe[0].height);for(let te=0,Ge=Oe.length;te<Ge;te++)Be=Oe[te],b.format!==si?Ie!==null?at?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Be.width,Be.height,Ie,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ze,Be.width,Be.height,0,Be.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?q&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Be.width,Be.height,Ie,Qe,Be.data):t.texImage2D(n.TEXTURE_2D,te,ze,Be.width,Be.height,0,Ie,Qe,Be.data)}else if(b.isDataArrayTexture)if(at){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,ze,pe.width,pe.height,pe.depth),q)if(b.layerUpdates.size>0){const te=od(pe.width,pe.height,b.format,b.type);for(const Ge of b.layerUpdates){const We=pe.data.subarray(Ge*te/pe.data.BYTES_PER_ELEMENT,(Ge+1)*te/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,pe.width,pe.height,1,Ie,Qe,We)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ie,Qe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Ie,Qe,pe.data);else if(b.isData3DTexture)at?(gt&&t.texStorage3D(n.TEXTURE_3D,De,ze,pe.width,pe.height,pe.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ie,Qe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Ie,Qe,pe.data);else if(b.isFramebufferTexture){if(gt)if(at)t.texStorage2D(n.TEXTURE_2D,De,ze,pe.width,pe.height);else{let te=pe.width,Ge=pe.height;for(let We=0;We<De;We++)t.texImage2D(n.TEXTURE_2D,We,ze,te,Ge,0,Ie,Qe,null),te>>=1,Ge>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),pe.parentNode!==te){te.appendChild(pe),h.add(b),te.onpaint=Ge=>{const We=Ge.changedElements;for(const ye of h)We.includes(ye.image)&&(ye.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{const We=n.RGBA,ye=n.RGBA,c=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ye,c,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(at&&gt){const te=ke(Oe[0]);t.texStorage2D(n.TEXTURE_2D,De,ze,te.width,te.height)}for(let te=0,Ge=Oe.length;te<Ge;te++)Be=Oe[te],at?q&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ie,Qe,Be):t.texImage2D(n.TEXTURE_2D,te,ze,Ie,Qe,Be);b.generateMipmaps=!1}else if(at){if(gt){const te=ke(pe);t.texStorage2D(n.TEXTURE_2D,De,ze,te.width,te.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,Qe,pe)}else t.texImage2D(n.TEXTURE_2D,0,ze,Ie,Qe,pe);x(b)&&A(Z),Re.__version=ve.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ot(D,b,Y){if(b.image.length!==6)return;const Z=vt(D,b),ce=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const ve=i.get(ce);if(ce.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const Re=Lt.getPrimaries(Lt.workingColorSpace),se=b.colorSpace===Ta?null:Lt.getPrimaries(b.colorSpace),pe=b.colorSpace===Ta||Re===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,Qe=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let ye=0;ye<6;ye++)!Ie&&!Qe?ze[ye]=v(b.image[ye],!0,a.maxCubemapSize):ze[ye]=Qe?b.image[ye].image:b.image[ye],ze[ye]=ct(b,ze[ye]);const Be=ze[0],Oe=r.convert(b.format,b.colorSpace),at=r.convert(b.type),gt=y(b.internalFormat,Oe,at,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,De=ve.__version===void 0||Z===!0,te=ce.dataReady;let Ge=T(b,Be);pt(n.TEXTURE_CUBE_MAP,b);let We;if(Ie){q&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,gt,Be.width,Be.height);for(let ye=0;ye<6;ye++){We=ze[ye].mipmaps;for(let c=0;c<We.length;c++){const qe=We[c];b.format!==si?Oe!==null?q?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c,0,0,qe.width,qe.height,Oe,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c,gt,qe.width,qe.height,0,qe.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c,0,0,qe.width,qe.height,Oe,at,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c,gt,qe.width,qe.height,0,Oe,at,qe.data)}}}else{if(We=b.mipmaps,q&&De){We.length>0&&Ge++;const ye=ke(ze[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,gt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Qe){q?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ze[ye].width,ze[ye].height,Oe,at,ze[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,ze[ye].width,ze[ye].height,0,Oe,at,ze[ye].data);for(let c=0;c<We.length;c++){const dt=We[c].image[ye].image;q?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c+1,0,0,dt.width,dt.height,Oe,at,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c+1,gt,dt.width,dt.height,0,Oe,at,dt.data)}}else{q?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe,at,ze[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,gt,Oe,at,ze[ye]);for(let c=0;c<We.length;c++){const qe=We[c];q?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c+1,0,0,Oe,at,qe.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,c+1,gt,Oe,at,qe.image[ye])}}}x(b)&&A(n.TEXTURE_CUBE_MAP),ve.__version=ce.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ve(D,b,Y,Z,ce,ve){const Re=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),pe=y(Y.internalFormat,Re,se,Y.normalized,Y.colorSpace),Ie=i.get(b),Qe=i.get(Y);if(Qe.__renderTarget=b,!Ie.__hasExternalTextures){const ze=Math.max(1,b.width>>ve),Be=Math.max(1,b.height>>ve);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ve,pe,ze,Be,b.depth,0,Re,se,null):t.texImage2D(ce,ve,pe,ze,Be,0,Re,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),w(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ce,Qe.__webglTexture,0,Se(b)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ce,Qe.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(D,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),b.depthBuffer){const Z=b.depthTexture,ce=Z&&Z.isDepthTexture?Z.type:null,ve=S(b.stencilBuffer,ce),Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;w(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(b),ve,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(b),ve,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,D)}else{const Z=b.textures;for(let ce=0;ce<Z.length;ce++){const ve=Z[ce],Re=r.convert(ve.format,ve.colorSpace),se=r.convert(ve.type),pe=y(ve.internalFormat,Re,se,ve.normalized,ve.colorSpace);w(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(b),pe,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(b),pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(D,b,Y){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(b.depthTexture);if(ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),pt(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ie=r.convert(b.depthTexture.format),Qe=r.convert(b.depthTexture.type);let ze;b.depthTexture.format===ia?ze=n.DEPTH_COMPONENT24:b.depthTexture.format===$a&&(ze=n.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ze,b.width,b.height,0,Ie,Qe,null)}}else xe(b.depthTexture,0);const ve=ce.__webglTexture,Re=Se(b),se=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,pe=b.depthTexture.format===$a?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ia)w(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,se,ve,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,pe,se,ve,0);else if(b.depthTexture.format===$a)w(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,se,ve,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,pe,se,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(D){const b=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ce)};Z.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=Z}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)ut(b.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?ut(b.__webglFramebuffer[0],D,0):ut(b.__webglFramebuffer,D,0)}else if(Y){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Pe(b.__webglDepthbuffer[Z],D,!1);else{const ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ve)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Pe(b.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(D,b,Y){const Z=i.get(D);b!==void 0&&Ve(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&ue(D)}function Ae(D){const b=D.texture,Y=i.get(D),Z=i.get(b);D.addEventListener("dispose",_);const ce=D.textures,ve=D.isWebGLCubeRenderTarget===!0,Re=ce.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,s.memory.textures++),ve){Y.__webglFramebuffer=[];for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[se]=[];for(let pe=0;pe<b.mipmaps.length;pe++)Y.__webglFramebuffer[se][pe]=n.createFramebuffer()}else Y.__webglFramebuffer[se]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)Y.__webglFramebuffer[se]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Re)for(let se=0,pe=ce.length;se<pe;se++){const Ie=i.get(ce[se]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&w(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let se=0;se<ce.length;se++){const pe=ce[se];Y.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[se]);const Ie=r.convert(pe.format,pe.colorSpace),Qe=r.convert(pe.type),ze=y(pe.internalFormat,Ie,Qe,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Be=Se(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,ze,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,Y.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),pt(n.TEXTURE_CUBE_MAP,b);for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ve(Y.__webglFramebuffer[se][pe],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe);else Ve(Y.__webglFramebuffer[se],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);x(b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let se=0,pe=ce.length;se<pe;se++){const Ie=ce[se],Qe=i.get(Ie);let ze=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ze=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ze,Qe.__webglTexture),pt(ze,Ie),Ve(Y.__webglFramebuffer,D,Ie,n.COLOR_ATTACHMENT0+se,ze,0),x(Ie)&&A(ze)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),pt(se,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ve(Y.__webglFramebuffer[pe],D,b,n.COLOR_ATTACHMENT0,se,pe);else Ve(Y.__webglFramebuffer,D,b,n.COLOR_ATTACHMENT0,se,0);x(b)&&A(se),t.unbindTexture()}D.depthBuffer&&ue(D)}function we(D){const b=D.textures;for(let Y=0,Z=b.length;Y<Z;Y++){const ce=b[Y];if(x(ce)){const ve=P(D),Re=i.get(ce).__webglTexture;t.bindTexture(ve,Re),A(ve),t.unbindTexture()}}}const be=[],et=[];function ne(D){if(D.samples>0){if(w(D)===!1){const b=D.textures,Y=D.width,Z=D.height;let ce=n.COLOR_BUFFER_BIT;const ve=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(D),se=b.length>1;if(se)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Qe=i.get(b[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,ce,n.NEAREST),f===!0&&(be.length=0,et.length=0,be.push(n.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(be.push(ve),et.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Qe=i.get(b[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const b=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Se(D){return Math.min(a.maxSamples,D.samples)}function w(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(D){const b=s.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function ct(D,b){const Y=D.colorSpace,Z=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Js&&Y!==Ta&&(Lt.getTransfer(Y)===Wt?(Z!==si||ce!==Bn)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Y)),b}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=X,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=xe,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=de,this.rebindTextures=Me,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=w,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JM(n,e){function t(i,a=Ta){let r;const s=Lt.getTransfer(a);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Tf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return n.BYTE;if(i===hh)return n.SHORT;if(i===Lo)return n.UNSIGNED_SHORT;if(i===Af)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===gh)return n.ALPHA;if(i===xh)return n.RGB;if(i===si)return n.RGBA;if(i===ia)return n.DEPTH_COMPONENT;if(i===$a)return n.DEPTH_STENCIL;if(i===vh)return n.RED;if(i===Rf)return n.RED_INTEGER;if(i===er)return n.RG;if(i===Cf)return n.RG_INTEGER;if(i===Pf)return n.RGBA_INTEGER;if(i===zs||i===Gs||i===Vs||i===ks)if(s===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===wl||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ys||i===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return s===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dl)return r.COMPRESSED_R11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ys)return r.COMPRESSED_RG11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Fl||i===Bl||i===zl||i===Gl||i===Vl||i===kl||i===Hl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return s===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Kl||i===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return s===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jl||i===ef||i===$s||i===tf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ef)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Do?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class QM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:ZM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new sa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jM extends ar{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",f=1,l=null,u=null,h=null,d=null,p=null,m=null;const E=typeof XRWebGLBinding<"u",v=new QM,x={},A=t.getContextAttributes();let P=null,y=null;const S=[],T=[],I=new Ne;let _=null,R=null;const L=new ai;L.viewport=new rn;const U=new ai;U.viewport=new rn;const V=[L,U],X=new sg;let k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let me=S[fe];return me===void 0&&(me=new Uc,S[fe]=me),me.getTargetRaySpace()},this.getControllerGrip=function(fe){let me=S[fe];return me===void 0&&(me=new Uc,S[fe]=me),me.getGripSpace()},this.getHand=function(fe){let me=S[fe];return me===void 0&&(me=new Uc,S[fe]=me),me.getHandSpace()};function ie(fe){const me=T.indexOf(fe.inputSource);if(me===-1)return;const Ce=S[me];Ce!==void 0&&(Ce.update(fe.inputSource,fe.frame,l||s),Ce.dispatchEvent({type:fe.type,data:fe.inputSource}))}function G(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",xe);for(let fe=0;fe<S.length;fe++){const me=T[fe];me!==null&&(T[fe]=null,S[fe].disconnect(me))}k=null,$=null,v.reset();for(const fe in x)delete x[fe];if(e.setRenderTarget(P),p=null,d=null,h=null,a=null,y=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),R!==null){const fe=R.camera;fe.fov=R.fov,fe.zoom=R.zoom,fe.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){r=fe,i.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){o=fe,i.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(fe){l=fe},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(fe){if(a=fe,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",G),a.addEventListener("inputsourceschange",xe),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ot=null,Ve=null;A.depth&&(Ve=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=A.stencil?$a:ia,ot=A.stencil?Do:Bi);const Pe={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ci(d.textureWidth,d.textureHeight,{format:si,type:Bn,depthTexture:new Xr(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Ce),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ci(p.framebufferWidth,p.framebufferHeight,{format:si,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(f),l=null,s=await a.requestReferenceSpace(o),vt.setContext(a),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function xe(fe){for(let me=0;me<fe.removed.length;me++){const Ce=fe.removed[me],ot=T.indexOf(Ce);ot>=0&&(T[ot]=null,S[ot].disconnect(Ce))}for(let me=0;me<fe.added.length;me++){const Ce=fe.added[me];let ot=T.indexOf(Ce);if(ot===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=T.length){T.push(Ce),ot=Pe;break}else if(T[Pe]===null){T[Pe]=Ce,ot=Pe;break}if(ot===-1)break}const Ve=S[ot];Ve&&Ve.connect(Ce)}}const re=new z,le=new z;function de(fe,me,Ce){re.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(Ce.matrixWorld);const ot=re.distanceTo(le),Ve=me.projectionMatrix.elements,Pe=Ce.projectionMatrix.elements,ut=Ve[14]/(Ve[10]-1),ue=Ve[14]/(Ve[10]+1),Me=(Ve[9]+1)/Ve[5],Ae=(Ve[9]-1)/Ve[5],we=(Ve[8]-1)/Ve[0],be=(Pe[8]+1)/Pe[0],et=ut*we,ne=ut*be,Se=ot/(-we+be),w=Se*-we;if(me.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(w),fe.translateZ(Se),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),Ve[10]===-1)fe.projectionMatrix.copy(me.projectionMatrix),fe.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const O=ut+Se,ct=ue+Se,ke=et-w,D=ne+(ot-w),b=Me*ue/ct*O,Y=Ae*ue/ct*O;fe.projectionMatrix.makePerspective(ke,D,b,Y,O,ct),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function Ke(fe,me){me===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(me.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(a===null)return;let me=fe.near,Ce=fe.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),X.near=U.near=L.near=me,X.far=U.far=L.far=Ce,(k!==X.near||$!==X.far)&&(a.updateRenderState({depthNear:X.near,depthFar:X.far}),k=X.near,$=X.far),X.layers.mask=fe.layers.mask|6,L.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;const ot=fe.parent,Ve=X.cameras;Ke(X,ot);for(let Pe=0;Pe<Ve.length;Pe++)Ke(Ve[Pe],ot);Ve.length===2?de(X,L,U):X.projectionMatrix.copy(L.projectionMatrix),R===null&&fe.isPerspectiveCamera&&(R={camera:fe,fov:fe.fov,zoom:fe.zoom}),Ue(fe,X,ot)};function Ue(fe,me,Ce){Ce===null?fe.matrix.copy(me.matrixWorld):(fe.matrix.copy(Ce.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(me.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(me.projectionMatrix),fe.projectionMatrixInverse.copy(me.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Oo*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&p===null))return f},this.setFoveation=function(fe){f=fe,d!==null&&(d.fixedFoveation=fe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=fe)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(fe){return x[fe]};let yt=null;function pt(fe,me){if(u=me.getViewerPose(l||s),m=me,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ot=!1;Ce.length!==X.cameras.length&&(X.cameras.length=0,ot=!0);for(let ue=0;ue<Ce.length;ue++){const Me=Ce[ue];let Ae=null;if(p!==null)Ae=p.getViewport(Me);else{const be=h.getViewSubImage(d,Me);Ae=be.viewport,ue===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let we=V[ue];we===void 0&&(we=new ai,we.layers.enable(ue),we.viewport=new rn,V[ue]=we),we.matrix.fromArray(Me.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Me.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ue===0&&(X.matrix.copy(we.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ot===!0&&X.cameras.push(we)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const ue=h.getDepthInformation(Ce[0]);ue&&ue.isValid&&ue.texture&&v.init(ue,a.renderState)}if(Ve&&Ve.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let ue=0;ue<Ce.length;ue++){const Me=Ce[ue].camera;if(Me){let Ae=x[Me];Ae||(Ae=new Dh,x[Me]=Ae);const we=h.getCameraImage(Me);Ae.sourceTexture=we}}}}for(let Ce=0;Ce<S.length;Ce++){const ot=T[Ce],Ve=S[Ce];ot!==null&&Ve!==void 0&&Ve.update(ot,me,l||s)}yt&&yt(fe,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}const vt=new Xh;vt.setAnimationLoop(pt),this.setAnimationLoop=function(fe){yt=fe},this.dispose=function(){}}}const e_=new Qt,Qh=new Et;Qh.set(-1,0,0,0,1,0,0,0,1);function t_(n,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function i(v,x){x.color.getRGB(v.fogColor.value,kh(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function a(v,x,A,P,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(v,x):x.isMeshLambertMaterial?(r(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(v,x),h(v,x)):x.isMeshPhongMaterial?(r(v,x),u(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(v,x),d(v,x),x.isMeshPhysicalMaterial&&p(v,x,y)):x.isMeshMatcapMaterial?(r(v,x),m(v,x)):x.isMeshDepthMaterial?r(v,x):x.isMeshDistanceMaterial?(r(v,x),E(v,x)):x.isMeshNormalMaterial?r(v,x):x.isLineBasicMaterial?(s(v,x),x.isLineDashedMaterial&&o(v,x)):x.isPointsMaterial?f(v,x,A,P):x.isSpriteMaterial?l(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Gn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Gn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const A=e.get(x),P=A.envMap,y=A.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Qh),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function s(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function o(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function f(v,x,A,P){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*A,v.scale.value=P*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function l(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function u(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function h(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function d(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function p(v,x,A){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,x){x.matcap&&(v.matcap.value=x.matcap)}function E(v,x){const A=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function n_(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function l(y,S){let T=a[y.id];T===void 0&&(v(y),T=u(y),a[y.id]=T,y.addEventListener("dispose",A));const I=S.program;i.updateUBOMapping(y,I);const _=e.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function u(y){const S=h();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=a[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,R=T.length;_<R;_++){const L=T[_];if(Array.isArray(L))for(let U=0,V=L.length;U<V;U++)p(L[U],_,U,I);else p(L,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,I){if(E(y,S,T,I)===!0){const _=y.__offset,R=y.value;if(Array.isArray(R)){let L=0;for(let U=0;U<R.length;U++){const V=R[U],X=x(V);m(V,y.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function E(y,S,T,I){const _=y.value,R=S+"_"+T;if(I[R]===void 0)return typeof _=="number"||typeof _=="boolean"?I[R]=_:ArrayBuffer.isView(_)?I[R]=_.slice():I[R]=_.clone(),!0;{const L=I[R];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function v(y){const S=y.uniforms;let T=0;const I=16;for(let R=0,L=S.length;R<L;R++){const U=Array.isArray(S[R])?S[R]:[S[R]];for(let V=0,X=U.length;V<X;V++){const k=U[V],$=Array.isArray(k.value)?k.value:[k.value];for(let ie=0,G=$.length;ie<G;ie++){const xe=$[ie],re=x(xe),le=T%I,de=le%re.boundary,Ke=le+de;T+=de,Ke!==0&&I-Ke<re.storage&&(T+=I-Ke),k.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=re.storage}}}const _=T%I;return _>0&&(T+=I-_),y.__size=T,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){const S=y.target;S.removeEventListener("dispose",A);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const y in a)n.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:f,update:l,dispose:P}}const i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function a_(){return wi===null&&(wi=new Ph(i_,16,16,er,zi),wi.name="DFG_LUT",wi.minFilter=Sn,wi.magFilter=Sn,wi.wrapS=Qi,wi.wrapT=Qi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class r_{constructor(e={}){const{canvas:t=y0(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Bn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const E=p,v=new Set([Pf,Cf,Rf]),x=new Set([Bn,Bi,Lo,Do,Tf,wf]),A=new Uint32Array(4),P=new Int32Array(4),y=new z;let S=null,T=null;const I=[],_=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,V=null,X=null,k=null,$=null;this._outputColorSpace=Xn;let ie=0,G=0,xe=null,re=-1,le=null;const de=new rn,Ke=new rn;let Ue=null;const yt=new St(0);let pt=0,vt=t.width,fe=t.height,me=1,Ce=null,ot=null;const Ve=new rn(0,0,vt,fe),Pe=new rn(0,0,vt,fe);let ut=!1;const ue=new Of;let Me=!1,Ae=!1;const we=new Qt,be=new z,et=new rn,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function w(){return xe===null?me:1}let O=i;function ct(C,W){return t.getContext(C,W)}let ke,D,b,Y,Z,ce,ve,Re,se,pe,Ie,Qe,ze,Be,Oe,at,gt,q,De,te,Ge,We,ye;try{const C={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",sn,!1),O===null){const W="webgl2";if(O=ct(W,C),O===null)throw ct(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}c()}catch(C){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Dt("WebGLRenderer: "+C.message),C}function c(){ke=new av(O),ke.init(),Ge=new JM(O,ke),D=new $x(O,ke,e,Ge),b=new YM(O,ke),D.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),X=O.createFramebuffer(),k=O.createFramebuffer(),$=O.createFramebuffer(),Y=new sv(O),Z=new DM,ce=new $M(O,ke,b,Z,D,Ge,Y),ve=new iv(L),Re=new lg(O),We=new qx(O,Re),se=new rv(O,Re,Y,We),pe=new lv(O,se,Re,We,Y),q=new cv(O,D,ce),Oe=new Jx(Z),Ie=new LM(L,ve,ke,D,We,Oe),Qe=new t_(L,Z),ze=new UM,Be=new VM(ke),gt=new Xx(L,ve,b,pe,m,f),at=new qM(L,pe,D),ye=new n_(O,Y,D,b),De=new Yx(O,ke,Y),te=new ov(O,ke,Y),Y.programs=Ie.programs,L.capabilities=D,L.extensions=ke,L.properties=Z,L.renderLists=ze,L.shadowMap=at,L.state=b,L.info=Y}E!==Bn&&(R=new uv(E,t.width,t.height,o,a,r));const qe=new jM(L,O);this.xr=qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(vt,fe,!1))},this.getSize=function(C){return C.set(vt,fe)},this.setSize=function(C,W,oe=!0){if(qe.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=C,fe=W,t.width=Math.floor(C*me),t.height=Math.floor(W*me),oe===!0&&(t.style.width=C+"px",t.style.height=W+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(vt*me,fe*me).floor()},this.setDrawingBufferSize=function(C,W,oe){vt=C,fe=W,me=oe,t.width=Math.floor(C*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(E===Bn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){Mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(de)},this.getViewport=function(C){return C.copy(Ve)},this.setViewport=function(C,W,oe,j){C.isVector4?Ve.set(C.x,C.y,C.z,C.w):Ve.set(C,W,oe,j),b.viewport(de.copy(Ve).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Pe)},this.setScissor=function(C,W,oe,j){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,W,oe,j),b.scissor(Ke.copy(Pe).multiplyScalar(me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){b.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,oe=!0){let j=0;if(C){let K=!1;if(xe!==null){const Ye=xe.texture.format;K=v.has(Ye)}if(K){const Ye=xe.texture.type,je=x.has(Ye),Xe=gt.getClearColor(),tt=gt.getClearAlpha(),st=Xe.r,Tt=Xe.g,Rt=Xe.b;je?(A[0]=st,A[1]=Tt,A[2]=Rt,A[3]=tt,O.clearBufferuiv(O.COLOR,0,A)):(P[0]=st,P[1]=Tt,P[2]=Rt,P[3]=tt,O.clearBufferiv(O.COLOR,0,P))}else j|=O.COLOR_BUFFER_BIT}W&&(j|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),gt.dispose(),ze.dispose(),Be.dispose(),Z.dispose(),ve.dispose(),pe.dispose(),We.dispose(),ye.dispose(),Ie.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ko),qe.removeEventListener("sessionend",to),fi.stop()};function dt(C){C.preventDefault(),Ks("WebGLRenderer: Context Lost."),U=!0}function Ot(){Ks("WebGLRenderer: Context Restored."),U=!1;const C=Y.autoReset,W=at.enabled,oe=at.autoUpdate,j=at.needsUpdate,K=at.type;c(),Y.autoReset=C,at.enabled=W,at.autoUpdate=oe,at.needsUpdate=j,at.type=K}function sn(C){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const W=C.target;W.removeEventListener("dispose",Pn),ti(W)}function ti(C){vc(C),Z.remove(C)}function vc(C){const W=Z.get(C).programs;W!==void 0&&(W.forEach(function(oe){Ie.releaseProgram(oe)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,oe,j,K,Ye){W===null&&(W=ne);const je=K.isMesh&&K.matrixWorld.determinantAffine()<0,Xe=_c(C,W,oe,j,K);b.setMaterial(j,je);let tt=oe.index,st=1;if(j.wireframe===!0){if(tt=se.getWireframeAttribute(oe),tt===void 0)return;st=2}const Tt=oe.drawRange,Rt=oe.attributes.position;let nt=Tt.start*st,Ft=(Tt.start+Tt.count)*st;Ye!==null&&(nt=Math.max(nt,Ye.start*st),Ft=Math.min(Ft,(Ye.start+Ye.count)*st)),tt!==null?(nt=Math.max(nt,0),Ft=Math.min(Ft,tt.count)):Rt!=null&&(nt=Math.max(nt,0),Ft=Math.min(Ft,Rt.count));const ln=Ft-nt;if(ln<0||ln===1/0)return;We.setup(K,j,Xe,oe,tt);let $t,kt=De;if(tt!==null&&($t=Re.get(tt),kt=te,kt.setIndex($t)),K.isMesh)j.wireframe===!0?(b.setLineWidth(j.wireframeLinewidth*w()),kt.setMode(O.LINES)):kt.setMode(O.TRIANGLES);else if(K.isLine){let xn=j.linewidth;xn===void 0&&(xn=1),b.setLineWidth(xn*w()),K.isLineSegments?kt.setMode(O.LINES):K.isLineLoop?kt.setMode(O.LINE_LOOP):kt.setMode(O.LINE_STRIP)}else K.isPoints?kt.setMode(O.POINTS):K.isSprite&&kt.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))kt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const xn=K._multiDrawStarts,Ze=K._multiDrawCounts,Mn=K._multiDrawCount,Pt=tt?Re.get(tt).bytesPerElement:1,Vn=Z.get(j).currentProgram.getUniforms();for(let ni=0;ni<Mn;ni++)Vn.setValue(O,"_gl_DrawID",ni),kt.render(xn[ni]/Pt,Ze[ni])}else if(K.isInstancedMesh)kt.renderInstances(nt,ln,K.count);else if(oe.isInstancedBufferGeometry){const xn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ze=Math.min(oe.instanceCount,xn);kt.renderInstances(nt,ln,Ze)}else kt.render(nt,ln)};function or(C,W,oe,j){V!==null&&C.isNodeMaterial&&V.setObject(j,C),Me===!0&&Oe.setState(C,oe,!1),C.transparent===!0&&C.side===ri&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,Yt(C,W,j),C.side=Qa,C.needsUpdate=!0,Yt(C,W,j),C.side=ri):Yt(C,W,j)}this.compile=function(C,W,oe=null){oe===null&&(oe=C),V!==null&&V.renderStart(C,W,oe),T=Be.get(oe),T.init(W),_.push(T),oe.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),C!==oe&&C.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Ae=this.localClippingEnabled,Me=Oe.init(this.clippingPlanes,Ae),Me===!0&&Oe.setGlobalState(this.clippingPlanes,W),V!==null&&at.render(T.state.shadowsArray,oe,W);const j=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ye=K.material;if(Ye)if(Array.isArray(Ye))for(let je=0;je<Ye.length;je++){const Xe=Ye[je];or(Xe,oe,W,K),j.add(Xe)}else or(Ye,oe,W,K),j.add(Ye)}),T=_.pop(),V!==null&&V.renderEnd(),j},this.compileAsync=function(C,W,oe=null){const j=this.compile(C,W,oe);return new Promise(K=>{function Ye(){if(j.forEach(function(je){const tt=Z.get(je).currentProgram;(tt===void 0||tt.isReady())&&j.delete(je)}),j.size===0){K(C);return}setTimeout(Ye,10)}ke.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let eo=null;function ca(C){eo&&eo(C)}function Ko(){fi.stop()}function to(){fi.start()}const fi=new Xh;fi.setAnimationLoop(ca),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(C){eo=C,qe.setAnimationLoop(C),C===null?fi.stop():fi.start()},qe.addEventListener("sessionstart",Ko),qe.addEventListener("sessionend",to),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(C,W);const oe=qe.enabled===!0&&qe.isPresenting===!0,j=R!==null&&(xe===null||oe)&&R.begin(L,xe);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(W),W=qe.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,W,xe),T=Be.get(C,_.length),T.init(W),T.state.textureUnits=ce.getTextureUnits(),_.push(T),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ue.setFromProjectionMatrix(we,Ni,W.reversedDepth),Ae=this.localClippingEnabled,Me=Oe.init(this.clippingPlanes,Ae),S=ze.get(C,I.length),S.init(),I.push(S),qe.enabled===!0&&qe.isPresenting===!0){const je=L.xr.getDepthSensingMesh();je!==null&&Oa(je,W,-1/0,L.sortObjects)}Oa(C,W,0,L.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Ce,ot),Se=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Se&&gt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&Oe.beginShadows();const K=T.state.shadowsArray;if(at.render(K,C,W),Me===!0&&Oe.endShadows(),(j&&R.hasRenderPass())===!1){const je=S.opaque,Xe=S.transmissive;if(T.setupLights(),W.isArrayCamera){const tt=W.cameras;if(Xe.length>0)for(let st=0,Tt=tt.length;st<Tt;st++){const Rt=tt[st];sr(je,Xe,C,Rt)}Se&&gt.render(C);for(let st=0,Tt=tt.length;st<Tt;st++){const Rt=tt[st];la(S,C,Rt,Rt.viewport)}}else Xe.length>0&&sr(je,Xe,C,W),Se&&gt.render(C),la(S,C,W)}xe!==null&&G===0&&(ce.updateMultisampleRenderTarget(xe),ce.updateRenderTargetMipmap(xe)),j&&R.end(L),C.isScene===!0&&C.onAfterRender(L,C,W),We.resetDefaultState(),re=-1,le=null,_.pop(),_.length>0?(T=_[_.length-1],ce.setTextureUnits(T.state.textureUnits),Me===!0&&Oe.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,V!==null&&V.renderEnd()};function Oa(C,W,oe,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ue)){j&&et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const je=pe.update(C),Xe=C.material;Xe.visible&&S.push(C,je,Xe,oe,et.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ue))){const je=pe.update(C),Xe=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),et.copy(C.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),et.copy(je.boundingSphere.center)),et.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Xe)){const tt=je.groups;for(let st=0,Tt=tt.length;st<Tt;st++){const Rt=tt[st],nt=Xe[Rt.materialIndex];nt&&nt.visible&&S.push(C,je,nt,oe,et.z,Rt,W)}}else Xe.visible&&S.push(C,je,Xe,oe,et.z,null,W)}}const Ye=C.children;for(let je=0,Xe=Ye.length;je<Xe;je++)Oa(Ye[je],W,oe,j)}function la(C,W,oe,j){const{opaque:K,transmissive:Ye,transparent:je}=C;T.setupLightsView(oe),Me===!0&&Oe.setGlobalState(L.clippingPlanes,oe),j&&b.viewport(de.copy(j)),K.length>0&&cr(K,W,oe),Ye.length>0&&cr(Ye,W,oe),je.length>0&&cr(je,W,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function sr(C,W,oe,j){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const nt=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:nt?zi:Bn,minFilter:Ya,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ye=T.state.transmissionRenderTarget[j.id],je=j.viewport||de;Ye.setSize(je.z*L.transmissionResolutionScale,je.w*L.transmissionResolutionScale);const Xe=L.getRenderTarget(),tt=L.getActiveCubeFace(),st=L.getActiveMipmapLevel();L.setRenderTarget(Ye),L.getClearColor(yt),pt=L.getClearAlpha(),pt<1&&L.setClearColor(16777215,.5),L.clear(),Se&&gt.render(oe);const Tt=L.toneMapping;L.toneMapping=Oi;const Rt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),Me===!0&&Oe.setGlobalState(L.clippingPlanes,j),cr(C,oe,j),ce.updateMultisampleRenderTarget(Ye),ce.updateRenderTargetMipmap(Ye),ke.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ft=0,ln=W.length;Ft<ln;Ft++){const $t=W[Ft],{object:kt,geometry:xn,material:Ze,group:Mn}=$t;if(Ze.side===ri&&kt.layers.test(j.layers)){const Pt=Ze.side;Ze.side=Gn,Ze.needsUpdate=!0,Qo(kt,oe,j,xn,Ze,Mn),Ze.side=Pt,Ze.needsUpdate=!0,nt=!0}}nt===!0&&(ce.updateMultisampleRenderTarget(Ye),ce.updateRenderTargetMipmap(Ye))}L.setRenderTarget(Xe,tt,st),L.setClearColor(yt,pt),Rt!==void 0&&(j.viewport=Rt),L.toneMapping=Tt}function cr(C,W,oe){const j=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ye=C.length;K<Ye;K++){const je=C[K],{object:Xe,geometry:tt,group:st}=je;let Tt=je.material;Tt.allowOverride===!0&&j!==null&&(Tt=j),Xe.layers.test(oe.layers)&&Qo(Xe,W,oe,tt,Tt,st)}}function Qo(C,W,oe,j,K,Ye){V!==null&&K.isNodeMaterial&&V.setObject(C,K),C.onBeforeRender(L,W,oe,j,K,Ye),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(L,W,oe,j,C,Ye),K.transparent===!0&&K.side===ri&&K.forceSinglePass===!1?(K.side=Gn,K.needsUpdate=!0,L.renderBufferDirect(oe,W,j,K,C,Ye),K.side=Qa,K.needsUpdate=!0,L.renderBufferDirect(oe,W,j,K,C,Ye),K.side=ri):L.renderBufferDirect(oe,W,j,K,C,Ye),C.onAfterRender(L,W,oe,j,K,Ye)}function Yt(C,W,oe){W.isScene!==!0&&(W=ne);const j=Z.get(C),K=T.state.lights,Ye=T.state.shadowsArray,je=K.state.version,Xe=Ie.getParameters(C,K.state,Ye,W,oe,T.state.lightProbeGridArray),tt=Ie.getProgramCacheKey(Xe);let st=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;const Tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=ve.get(C.envMap||j.environment,Tt),j.envMapRotation=j.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",Pn),st=new Map,j.programs=st);let Rt=st.get(tt);if(Rt!==void 0){if(j.currentProgram===Rt&&j.lightsStateVersion===je)return jo(C,Xe),Rt}else Xe.uniforms=Ie.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,oe,Xe),C.onBeforeCompile(Xe,L),Rt=Ie.acquireProgram(Xe,tt),st.set(tt,Rt),j.uniforms=Xe.uniforms;const nt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=Oe.uniform),jo(C,Xe),j.needsLights=In(C),j.lightsStateVersion=je,j.needsLights&&(nt.ambientLightColor.value=K.state.ambient,nt.lightProbe.value=K.state.probe,nt.sunLights.value=K.state.sun,nt.sunLightShadows.value=K.state.sunShadow,nt.directionalLights.value=K.state.directional,nt.directionalLightShadows.value=K.state.directionalShadow,nt.spotLights.value=K.state.spot,nt.spotLightShadows.value=K.state.spotShadow,nt.rectAreaLights.value=K.state.rectArea,nt.ltc_1.value=K.state.rectAreaLTC1,nt.ltc_2.value=K.state.rectAreaLTC2,nt.pointLights.value=K.state.point,nt.pointLightShadows.value=K.state.pointShadow,nt.hemisphereLights.value=K.state.hemi,nt.sunShadowMatrix.value=K.state.sunShadowMatrix,nt.sunShadowCascade.value=K.state.sunShadowCascade,nt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,nt.spotLightMatrix.value=K.state.spotLightMatrix,nt.spotLightMap.value=K.state.spotLightMap,nt.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=Rt,j.uniformsList=null,Rt}function cn(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Hs.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function jo(C,W){const oe=Z.get(C);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function Mc(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(W.matrixWorld);for(let oe=0,j=C.length;oe<j;oe++){const K=C[oe];if(K.texture!==null&&K.boundingBox.containsPoint(y))return K}return null}function _c(C,W,oe,j,K){W.isScene!==!0&&(W=ne),ce.resetTextureUnits();const Ye=W.fog,je=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Xe=xe===null?L.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Lt.workingColorSpace,tt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,st=ve.get(j.envMap||je,tt),Tt=j.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Rt=!!oe.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),nt=!!oe.morphAttributes.position,Ft=!!oe.morphAttributes.normal,ln=!!oe.morphAttributes.color;let $t=Oi;j.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&($t=L.toneMapping);const kt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,xn=kt!==void 0?kt.length:0,Ze=Z.get(j),Mn=T.state.lights;if(Me===!0&&(Ae===!0||C!==le)){const qt=C===le&&j.id===re;Oe.setState(j,C,qt)}let Pt=!1;j.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Mn.state.version||Ze.outputColorSpace!==Xe||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==st||j.fog===!0&&Ze.fog!==Ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Oe.numPlanes||Ze.numIntersection!==Oe.numIntersection)||Ze.vertexAlphas!==Tt||Ze.vertexTangents!==Rt||Ze.morphTargets!==nt||Ze.morphNormals!==Ft||Ze.morphColors!==ln||Ze.toneMapping!==$t||Ze.morphTargetsCount!==xn||!!Ze.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ze.__version=j.version);let Vn=Ze.currentProgram;Pt===!0&&(Vn=Yt(j,W,K),V&&j.isNodeMaterial&&V.onUpdateProgram(j,Vn,Ze));let ni=!1,ui=!1,Vi=!1;const zt=Vn.getUniforms(),jt=Ze.uniforms;if(b.useProgram(Vn.program)&&(ni=!0,ui=!0,Vi=!0),j.id!==re&&(re=j.id,ui=!0),Ze.needsLights){const qt=Mc(T.state.lightProbeGridArray,K);Ze.lightProbeGrid!==qt&&(Ze.lightProbeGrid=qt,ui=!0)}if(ni||le!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(O,"projectionMatrix",C.projectionMatrix),zt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Ai=zt.map.cameraPosition;Ai!==void 0&&Ai.setValue(O,be.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&zt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&zt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,ui=!0,Vi=!0)}if(Ze.needsLights&&(Mn.state.sunShadowMap.length>0&&zt.setValue(O,"sunShadowMap",Mn.state.sunShadowMap,ce),Mn.state.directionalShadowMap.length>0&&zt.setValue(O,"directionalShadowMap",Mn.state.directionalShadowMap,ce),Mn.state.spotShadowMap.length>0&&zt.setValue(O,"spotShadowMap",Mn.state.spotShadowMap,ce),Mn.state.pointShadowMap.length>0&&zt.setValue(O,"pointShadowMap",Mn.state.pointShadowMap,ce)),K.isSkinnedMesh){zt.setOptional(O,K,"bindMatrix"),zt.setOptional(O,K,"bindMatrixInverse");const qt=K.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),zt.setValue(O,"boneTexture",qt.boneTexture,ce))}K.isBatchedMesh&&(zt.setOptional(O,K,"batchingTexture"),zt.setValue(O,"batchingTexture",K._matricesTexture,ce),zt.setOptional(O,K,"batchingIdTexture"),zt.setValue(O,"batchingIdTexture",K._indirectTexture,ce),zt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(O,"batchingColorTexture",K._colorsTexture,ce));const Ei=oe.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&q.update(K,oe,Vn),(ui||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,zt.setValue(O,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(jt.envMapIntensity.value=W.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=a_()),ui){if(zt.setValue(O,"toneMappingExposure",L.toneMappingExposure),Ze.needsLights&&lr(jt,Vi),Ye&&j.fog===!0&&Qe.refreshFogUniforms(jt,Ye),Qe.refreshMaterialUniforms(jt,j,me,fe,T.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.lightProbeGrid){const qt=Ze.lightProbeGrid;jt.probesSH.value=qt.texture,jt.probesMin.value.copy(qt.boundingBox.min),jt.probesMax.value.copy(qt.boundingBox.max),jt.probesResolution.value.copy(qt.resolution)}Hs.upload(O,cn(Ze),jt,ce)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Hs.upload(O,cn(Ze),jt,ce),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&zt.setValue(O,"center",K.center),zt.setValue(O,"modelViewMatrix",K.modelViewMatrix),zt.setValue(O,"normalMatrix",K.normalMatrix),zt.setValue(O,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){const qt=j.uniformsGroups;for(let Ai=0,fa=qt.length;Ai<fa;Ai++){const es=qt[Ai];ye.update(es,Vn),ye.bind(es,Vn)}}return Vn}function lr(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function In(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return xe},this.setRenderTargetTextures=function(C,W,oe){const j=Z.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=W,Z.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:oe,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const oe=Z.get(C);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,oe=0){xe=C,ie=W,G=oe;let j=null,K=!1,Ye=!1;if(C){const Xe=Z.get(C);if(Xe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(O.FRAMEBUFFER,Xe.__webglFramebuffer),de.copy(C.viewport),Ke.copy(C.scissor),Ue=C.scissorTest,b.viewport(de),b.scissor(Ke),b.setScissorTest(Ue),re=-1;return}else if(Xe.__webglFramebuffer===void 0)ce.setupRenderTarget(C);else if(Xe.__hasExternalTextures)ce.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Tt=C.depthTexture;if(Xe.__boundDepthTexture!==Tt){if(Tt!==null&&Z.has(Tt)&&(C.width!==Tt.image.width||C.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ye=!0);const st=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[W])?j=st[W][oe]:j=st[W],K=!0):C.samples>0&&ce.useMultisampledRTT(C)===!1?j=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[oe]:j=st,de.copy(C.viewport),Ke.copy(C.scissor),Ue=C.scissorTest}else de.copy(Ve).multiplyScalar(me).floor(),Ke.copy(Pe).multiplyScalar(me).floor(),Ue=ut;if(oe!==0&&(j=X),b.bindFramebuffer(O.FRAMEBUFFER,j)&&b.drawBuffers(C,j),b.viewport(de),b.scissor(Ke),b.setScissorTest(Ue),K){const Xe=Z.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xe.__webglTexture,oe)}else if(Ye){const Xe=W;for(let tt=0;tt<C.textures.length;tt++){const st=Z.get(C.textures[tt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+tt,st.__webglTexture,oe,Xe)}}else if(C!==null&&oe!==0){const Xe=Z.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xe.__webglTexture,oe)}re=-1};function Fa(C){const W=Z.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=D.textureFormatReadable(C.format),W.__typeReadable=D.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,oe,j,K,Ye,je,Xe=0){if(!(C&&C.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt){b.bindFramebuffer(O.FRAMEBUFFER,tt);try{const st=C.textures[Xe],Tt=st.format,Rt=st.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xe);const nt=Fa(st);if(nt.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&oe>=0&&oe<=C.height-K&&O.readPixels(W,oe,j,K,Ge.convert(Tt),Ge.convert(Rt),Ye)}finally{const st=xe!==null?Z.get(xe).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,W,oe,j,K,Ye,je,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(tt=tt[je]),tt)if(W>=0&&W<=C.width-j&&oe>=0&&oe<=C.height-K){b.bindFramebuffer(O.FRAMEBUFFER,tt);const st=C.textures[Xe],Tt=st.format,Rt=st.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xe);const nt=Fa(st);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ft),O.bufferData(O.PIXEL_PACK_BUFFER,Ye.byteLength,O.STREAM_READ),O.readPixels(W,oe,j,K,Ge.convert(Tt),Ge.convert(Rt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const ln=xe!==null?Z.get(xe).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,ln);const $t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await b0(O,$t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ye),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ft),O.deleteSync($t),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,oe=0){const j=Math.pow(2,-oe),K=Math.floor(C.image.width*j),Ye=Math.floor(C.image.height*j),je=W!==null?W.x:0,Xe=W!==null?W.y:0;ce.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,je,Xe,K,Ye),b.unbindTexture()},this.copyTextureToTexture=function(C,W,oe=null,j=null,K=0,Ye=0){let je,Xe,tt,st,Tt,Rt,nt,Ft,ln;const $t=C.isCompressedTexture?C.mipmaps[Ye]:C.image;if(oe!==null)je=oe.max.x-oe.min.x,Xe=oe.max.y-oe.min.y,tt=oe.isBox3?oe.max.z-oe.min.z:1,st=oe.min.x,Tt=oe.min.y,Rt=oe.isBox3?oe.min.z:0;else{const jt=Math.pow(2,-K);je=Math.floor($t.width*jt),Xe=Math.floor($t.height*jt),C.isDataArrayTexture?tt=$t.depth:C.isData3DTexture?tt=Math.floor($t.depth*jt):tt=1,st=0,Tt=0,Rt=0}j!==null?(nt=j.x,Ft=j.y,ln=j.z):(nt=0,Ft=0,ln=0);const kt=Ge.convert(W.format),xn=Ge.convert(W.type);let Ze;W.isData3DTexture?(ce.setTexture3D(W,0),Ze=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),Ze=O.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),Ze=O.TEXTURE_2D),b.activeTexture(O.TEXTURE0),b.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),b.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),b.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Mn=b.getParameter(O.UNPACK_ROW_LENGTH),Pt=b.getParameter(O.UNPACK_IMAGE_HEIGHT),Vn=b.getParameter(O.UNPACK_SKIP_PIXELS),ni=b.getParameter(O.UNPACK_SKIP_ROWS),ui=b.getParameter(O.UNPACK_SKIP_IMAGES);b.pixelStorei(O.UNPACK_ROW_LENGTH,$t.width),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$t.height),b.pixelStorei(O.UNPACK_SKIP_PIXELS,st),b.pixelStorei(O.UNPACK_SKIP_ROWS,Tt),b.pixelStorei(O.UNPACK_SKIP_IMAGES,Rt);const Vi=C.isDataArrayTexture||C.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const jt=Z.get(C),Ei=Z.get(W),qt=Z.get(jt.__renderTarget),Ai=Z.get(Ei.__renderTarget);b.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let fa=0;fa<tt;fa++)Vi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,K,Rt+fa),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(W).__webglTexture,Ye,ln+fa)),O.blitFramebuffer(st,Tt,je,Xe,nt,Ft,je,Xe,O.DEPTH_BUFFER_BIT,O.NEAREST);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Z.has(C)){const jt=Z.get(C),Ei=Z.get(W);b.bindFramebuffer(O.READ_FRAMEBUFFER,k),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,$);for(let qt=0;qt<tt;qt++)Vi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jt.__webglTexture,K,Rt+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jt.__webglTexture,K),zt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ei.__webglTexture,Ye,ln+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ei.__webglTexture,Ye),K!==0?O.blitFramebuffer(st,Tt,je,Xe,nt,Ft,je,Xe,O.COLOR_BUFFER_BIT,O.NEAREST):zt?O.copyTexSubImage3D(Ze,Ye,nt,Ft,ln+qt,st,Tt,je,Xe):O.copyTexSubImage2D(Ze,Ye,nt,Ft,st,Tt,je,Xe);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ze,Ye,nt,Ft,ln,je,Xe,tt,kt,xn,$t.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ze,Ye,nt,Ft,ln,je,Xe,tt,kt,$t.data):O.texSubImage3D(Ze,Ye,nt,Ft,ln,je,Xe,tt,kt,xn,$t):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ye,nt,Ft,je,Xe,kt,xn,$t.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ye,nt,Ft,$t.width,$t.height,kt,$t.data):O.texSubImage2D(O.TEXTURE_2D,Ye,nt,Ft,je,Xe,kt,xn,$t);b.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Vn),b.pixelStorei(O.UNPACK_SKIP_ROWS,ni),b.pixelStorei(O.UNPACK_SKIP_IMAGES,ui),Ye===0&&W.generateMipmaps&&O.generateMipmap(Ze),b.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&ce.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ce.setTextureCube(C,0):C.isData3DTexture?ce.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ce.setTexture2DArray(C,0):ce.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){ie=0,G=0,xe=null,b.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const Cd={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},Ea={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},bn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais compram melhorias permanentes na Oficina da nave."}]}],tc=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],go={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},Pr=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),Ir=(n,e,t)=>({copa:[n,e],copa2:t}),xo=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Vo=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:Pr(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:Pr(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:Pr(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:Pr(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:Pr(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:Pr(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:Ir(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:Ir(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:Ir(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:Ir(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:Ir(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:Ir(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:xo(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:xo(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:xo(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:xo(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:xo(2755082,16769162,16756843)}],Po=n=>Vo.find(e=>e.id===n),o_=n=>Vo.find(e=>e.cat===n&&e.padrao),s_=n=>"#"+n.toString(16).padStart(6,"0"),jh="curriculo-cassino-v1",vo=10,c_=100,Pd=50,ff=9,Kn=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],ep=5,l_=["comum","rara","epica","lendaria"];function f_(){const n={};for(const e of tc)n[e.id]=o_(e.id).id;return{fichas:c_,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function u_(){const n=f_();try{const e=JSON.parse(localStorage.getItem(jh));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>Po(a)):[],i={...n.equipadas};for(const a of tc){const r=e.equipadas?.[a.id],s=r&&Po(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function d_(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,E)=>{i(E),t.fillRect(p,m,1,1)},r=(p,m,E,v)=>{i(v);for(let x=-E-1;x<=E+1;x++)for(let A=-E-1;A<=E+1;A++)A*A+x*x<=E*E+.5&&t.fillRect(p+A,m+x,1,1)},s=(p,m,E,v,x)=>{i(x);for(let A=0;A<16;A++)for(let P=0;P<16;P++){const y=(P+.5-p)/E,S=(A+.5-m)/v;y*y+S*S<=1&&t.fillRect(P,A,1,1)}},o=(p,m)=>{i(m);for(let E=0;E<16;E++)for(let v=0;v<16;v++){const x=v+.5,A=E+.5;let P=!1;for(let y=0,S=p.length-1;y<p.length;S=y++){const[T,I]=p[y],[_,R]=p[S];I>A!=R>A&&x<(_-T)*(A-I)/(R-I)+T&&(P=!P)}P&&t.fillRect(v,E,1,1)}},f=(p,m,E,v,x)=>{i(x);const A=Math.max(Math.abs(E-p),Math.abs(v-m));for(let P=0;P<=A;P++)t.fillRect(Math.round(p+(E-p)*P/A),Math.round(m+(v-m)*P/A),1,1)};switch(n){case"cereja":f(5,9,9,3,"#4f8a3a"),f(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const E=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(E)*v,8.5+Math.sin(E)*v])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const l=t.getImageData(0,0,16,16),u=l.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let Ds=null,Ns=null;function mc(){return Ds??=new(window.AudioContext||window.webkitAudioContext),Ds.state==="suspended"&&Ds.resume(),Ds}function Ri(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{const s=mc(),o=s.currentTime+r,f=s.createOscillator(),l=s.createGain();f.type=i,f.frequency.value=e,l.gain.setValueAtTime(a,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),f.connect(l).connect(s.destination),f.start(o),f.stop(o+t+.02)}catch{}}function Lr(n,e,t=.03,i=.07,a=0){if(n.som)try{const r=mc();if(!Ns){Ns=r.createBuffer(1,Math.floor(r.sampleRate*.4),r.sampleRate);const u=Ns.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=r.currentTime+a,o=r.createBufferSource(),f=r.createBiquadFilter(),l=r.createGain();o.buffer=Ns,f.type="bandpass",f.frequency.value=e,f.Q.value=1.4,l.gain.setValueAtTime(i,s),l.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(l).connect(r.destination),o.start(s,Math.random()*.3),o.stop(s+t+.02)}catch{}}function cl(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const r=mc(),s=r.currentTime+a,o=r.createOscillator(),f=r.createGain();o.type="sine",o.frequency.setValueAtTime(e,s),o.frequency.exponentialRampToValueAtTime(e*.4,s+t),f.gain.setValueAtTime(i,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(r.destination),o.start(s),o.stop(s+t+.02)}catch{}}function h_(n){if(!n.som)return null;try{const e=mc(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),r=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(r).connect(e.destination),i.start(t),{sair(s=.4){const o=e.currentTime;r.gain.cancelScheduledValues(o),r.gain.setValueAtTime(.045,o),r.gain.linearRampToValueAtTime(1e-4,o+s),i.frequency.cancelScheduledValues(o),i.frequency.setValueAtTime(84,o),i.frequency.linearRampToValueAtTime(40,o+s),i.stop(o+s+.05)}}}catch{return null}}const Yi=()=>Kn[Math.floor(Math.random()*Kn.length)],ll=()=>{let n=Math.random()*Kn.reduce((e,t)=>e+t.peso,0);for(const e of Kn)if(n-=e.peso,n<=0)return e;return Kn[0]},tp=(n,e)=>Vo.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function p_(n){for(const e of l_)if(tp(n,e).length){const t=Kn.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function m_(n){let e=[ll(),ll(),ll()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=ff){const a=p_(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=tp(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=ep);return i}function g_({aoMudarSkins:n,aoMudarFichas:e}){const t=u_(),i=()=>{try{localStorage.setItem(jh,JSON.stringify(t))}catch{}},a=(ne,Se,w)=>{const O=document.createElement(ne);return Se&&(O.className=Se),w!=null&&(O.textContent=w),O},r=Object.fromEntries(Kn.map(ne=>[ne.id,d_(ne.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),f=a("button","cas-x","X");f.title="Fechar (Esc)";const l=a("div","cas-letreiro"),u=a("div","lampadas"),h=(ne,Se)=>{const w=a("i",ne);return w.style.setProperty("--i",Se),w};for(let ne=0;ne<9;ne++)u.append(h("lampada",ne));l.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),E=m.map(ne=>{const Se=document.createElement("canvas");return Se.width=16,Se.height=48,ne.append(Se),p.append(ne),Se});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),x=a("div","cas-lcd"),A=a("div","cas-msg","PUXE A ALAVANCA!"),P=a("div","cas-fichas"),y=a("b");P.append(a("i","moeda"),y,a("span",null,"FICHAS")),x.append(A,P);const S=a("div","cas-premio");S.hidden=!0;const T=a("div","cas-botoes"),I=(ne,Se,w,O=!1)=>{const ct=a("div","cas-bw"+(O?" grande":"")),ke=a("i","led"),D=a("button",`cas-b3d ${Se}${O?" grande":""}`,ne);return D.title=w,ct.append(ke,D),T.append(ct),{b:D,led:ke}},{b:_,led:R}=I("?","azul","Tabela de prêmios"),{b:L,led:U}=I("SKINS","rosa","Coleção de skins (C)"),{b:V,led:X}=I("GIRAR","vermelho",`Girar (-${vo} fichas) · Espaço`,!0),{b:k,led:$}=I("SOM","amarelo","Ligar ou desligar o som");U.classList.add("on");const ie=a("button","cas-b3d verde largo",`+${Pd} FICHAS DE CORTESIA`);ie.hidden=!0,T.append(ie);const G=a("div","cas-luzes");for(let ne=0;ne<14;ne++)G.append(h("",ne));v.append(x,S,T,G);const xe=a("button","cas-alavanca");xe.title="Puxar a alavanca · Espaço";const re=a("i","braco");re.append(a("i","haste"),a("i","bola")),xe.append(a("i","suporte"),re);const le=a("div","cas-bandeja");le.append(a("i","fenda"));const de=a("div","cas-tabela");de.hidden=!0;for(const ne of Kn){const Se=a("div","cas-linha"),w=r[ne.id].cloneNode();w.getContext("2d").drawImage(r[ne.id],0,0),Se.append(w,a("span",null,`x3 = ${ne.premio}`),a("small",null,go[ne.tier].nome.toLowerCase())),de.append(Se)}de.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${ep} · a cada ${ff+1} giros sem trio, o próximo é garantido`)),o.append(f,l,d,v,xe,le,de,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const Ke=a("div","cas-colecao-caixa");Ke.hidden=!0;const Ue=a("div","cas-colecao");Ke.append(Ue),s.append(o,Ke),document.body.append(s);let yt=!1,pt=!1,vt=!1;function fe(ne,Se,w){const O=E[ne].getContext("2d");O.clearRect(0,0,16,48);const ct=Math.floor(w),ke=w-ct;for(let D=0;D<4;D++){const b=Se[ct+D];b&&O.drawImage(r[b.id],0,Math.round((D-ke)*16))}}const me=(ne,Se)=>fe(ne,Se,0);function Ce(){y.textContent=String(t.fichas),e?.(t.fichas);const ne=t.fichas<vo;V.disabled=pt||ne,xe.disabled=pt||ne,ie.hidden=!ne||pt,k.classList.toggle("apagado",!t.som),$.classList.toggle("on",t.som),X.classList.toggle("on",!pt&&!ne),R.classList.toggle("on",!de.hidden),o.classList.toggle("girando",pt),o.classList.toggle("pronto",!pt&&!ne),o.classList.toggle("sem-ficha",ne)}function ot(ne,Se=""){A.textContent=ne,A.className="cas-msg "+Se}function Ve(){Ue.replaceChildren();const ne=a("div","cas-cabecalho"),Se=Vo.filter(O=>!O.padrao).length,w=a("button","cas-btn","VOLTAR");w.onclick=()=>ut(!1),ne.append(a("h3",null,`SKINS (${t.skins.length}/${Se})`),w),Ue.append(ne);for(const O of tc){Ue.append(a("h4",null,O.nome.toUpperCase()));const ct=a("div","cas-grade");for(const ke of Vo.filter(D=>D.cat===O.id)){const D=ke.padrao||t.skins.includes(ke.id),b=t.equipadas[O.id]===ke.id,Y=a("div","cas-card"+(b?" equipada":"")+(D?"":" bloqueada"));Y.style.setProperty("--r",go[ke.raridade].cor);const Z=a("div","amostra"),ce=O.id==="planeta"?[ke.cores.marFundo,ke.cores.marRaso,ke.cores.areia,ke.cores.grama0,ke.cores.grama2]:O.id==="arvores"?[ke.cores.copa[0],ke.cores.copa[1],ke.cores.copa2]:[ke.cores.fundo,ke.cores.estrelas,ke.cores.nuvens];for(const Re of ce){const se=a("i");se.style.background=D?s_(Re):"#2a2440",Z.append(se)}Y.append(Z,a("b",null,D?ke.nome:"???"),a("small",null,go[ke.raridade].nome));const ve=a("button","cas-btn pequeno",b?"EQUIPADA":D?"EQUIPAR":"TRAVADA");ve.disabled=!D||b,ve.onclick=()=>Pe(ke),Y.append(ve),ct.append(Y)}Ue.append(ct)}}function Pe(ne){t.equipadas[ne.cat]=ne.id,i(),n({...t.equipadas}),Ri(t,660,.06),vt&&Ve()}function ut(ne){vt=ne,o.hidden=ne,Ke.hidden=!ne,ne?Ve():V.focus()}function ue(ne=0){if(!yt||pt||t.fichas<vo)return;t.fichas-=vo,t.giros+=1;const Se=m_(t);pt=!0,S.hidden=!0,p.classList.remove("vitoria"),o.classList.remove("vitoria"),ot("GIRANDO..."),Ce();const w=[Yi(),Yi(),Yi()],O=[Yi(),Yi(),Yi()];for(const ve of[w,O])ve[0]===ve[1]&&ve[1]===ve[2]&&(ve[2]=Kn[(Kn.indexOf(ve[2])+1)%Kn.length]);const ct=14,ke=450,D=[1100,1600,2100],b=D.map(ve=>Math.round(ct*(ve-ke)/1e3)+3),Y=Se.simbolos.map((ve,Re)=>{const se=[w[Re],ve,O[Re]];for(;se.length<b[Re]+3;)se.push(Yi());return se}),Z=(ve,Re)=>{const se=D[ve]-ke;return Re<se?b[ve]-ct*Re/1e3:3*(1-Math.min(1,(Re-se)/ke))**3},ce=()=>{const ve=performance.now(),Re=[!1,!1,!1],se=[-1,-1,-1];let pe=!1;const Ie=h_(t);for(const ze of m)ze.classList.add("girando");const Qe=ze=>{const Be=Math.max(0,ze-ve);for(let Oe=0;Oe<3;Oe++)if(!Re[Oe])if(Be>=D[Oe])Re[Oe]=!0,m[Oe].classList.remove("girando"),fe(Oe,Y[Oe],0),cl(t,150-Oe*12,.13,.11),Lr(t,1100+Oe*350,.06,.09),Ri(t,330+Oe*110,.1,"square",.025);else{const at=Z(Oe,Be);fe(Oe,Y[Oe],at);const gt=Math.floor(at);gt!==se[Oe]&&(se[Oe]>=0&&Lr(t,1500+Oe*450,.022,.05),se[Oe]=gt)}!pe&&Be>=D[2]-ke&&(pe=!0,Ie?.sair(ke/1e3+.1)),Re.every(Boolean)?Ae(Se):requestAnimationFrame(Qe)};requestAnimationFrame(Qe)};ne>0?setTimeout(ce,ne):ce()}function Me(ne){const Se=Math.min(10,Math.max(2,Math.ceil(ne/25)));for(let w=0;w<Se;w++){const O=a("i","moeda caindo");O.style.left=`${14+Math.random()*68}%`,O.style.animationDelay=`${w*.09}s`,O.addEventListener("animationend",()=>O.remove()),le.append(O),Lr(t,3400+Math.random()*900,.04,.05,.55+w*.09)}}function Ae(ne){if(pt=!1,t.fichas+=ne.fichas,t.semTrio=ne.tipo==="trio"?0:t.semTrio+1,ne.skin&&t.skins.push(ne.skin.id),i(),ne.fichas>0&&Me(ne.fichas),ne.tipo==="trio"?(ot(`TRIO! +${ne.fichas}`,"ganhou"),p.classList.add("vitoria"),o.classList.add("vitoria"),[523,659,784,1047].forEach((Se,w)=>Ri(t,Se,.14,"square",.05,w*.11))):ne.tipo==="par"?(ot(`PAR! +${ne.fichas}`,"par"),Ri(t,523,.1),Ri(t,659,.1,"square",.04,.1)):ot(t.semTrio>=ff?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),ne.skin){S.replaceChildren(),S.style.setProperty("--r",go[ne.skin.raridade].cor);const Se=tc.find(O=>O.id===ne.skin.cat).nome;S.append(a("b",null,"NOVA SKIN!"),a("span",null,`${Se}: ${ne.skin.nome} (${go[ne.skin.raridade].nome})`));const w=a("button","cas-mini","EQUIPAR");w.onclick=()=>{Pe(ne.skin),w.disabled=!0,w.textContent="OK"},S.append(w),S.hidden=!1,[784,988,1175,1568].forEach((O,ct)=>Ri(t,O,.18,"triangle",.06,.5+ct*.12))}Ce()}function we(){if(!(!yt||pt||t.fichas<vo)){xe.classList.add("puxada"),o.classList.add("puxando"),setTimeout(()=>{xe.classList.remove("puxada"),o.classList.remove("puxando")},1150);for(let ne=0;ne<5;ne++)Lr(t,2600-ne*150,.03,.07,.07+ne*.045);cl(t,95,.2,.15,.34),Lr(t,900,.07,.1,.34),cl(t,330,.1,.05,.76),Lr(t,2200,.05,.06,.9),ue(360)}}function be(){yt||(yt=!0,s.classList.add("aberto"),de.hidden=!0,ut(!1),Ce(),V.focus())}function et(){!yt||pt||(yt=!1,s.classList.remove("aberto"))}V.onclick=()=>ue(),xe.onclick=we,_.onclick=()=>{de.hidden=!de.hidden,Ce()},L.onclick=()=>ut(!0),f.onclick=et,ie.onclick=()=>{t.fichas+=Pd,i(),Ce(),ot("FICHAS DE CORTESIA!"),Ri(t,880,.1)},k.onclick=()=>{t.som=!t.som,i(),Ce(),Ri(t,660,.06)},s.addEventListener("pointerdown",ne=>{ne.target===s&&et()}),window.addEventListener("keydown",ne=>{yt&&(ne.code==="Escape"?(ne.preventDefault(),vt?ut(!1):et()):ne.code==="Space"&&!vt&&![L,_,k,ie,f].includes(document.activeElement)?(ne.preventDefault(),we()):ne.code==="KeyC"&&(ne.preventDefault(),ut(!vt)))},!0);for(let ne=0;ne<3;ne++)me(ne,[Yi(),Kn[ne*2%Kn.length],Yi()]);return Ce(),n({...t.equipadas}),{abrir:be,fechar:et,estaAberto:()=>yt,adicionarFichas:ne=>{t.fichas+=ne,i(),Ce()},bip:(...ne)=>Ri(t,...ne),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Ce(),t.som&&Ri(t,660,.06),t.som)}}function Cn(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,f,l){a(l),i.fillRect(r,s,o,f)},disco(r,s,o,f){a(f);for(let l=-o-1;l<=o+1;l++)for(let u=-o-1;u<=o+1;u++)u*u+l*l<=o*o+.5&&i.fillRect(r+u,s+l,1,1)},elipse(r,s,o,f,l){a(l);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/f;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const l=f+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,E]=r[d],[v,x]=r[p];E>u!=x>u&&l<(v-m)*(u-E)/(x-E)+m&&(h=!h)}h&&i.fillRect(f,o,1,1)}},linha(r,s,o,f,l){a(l);const u=Math.max(Math.abs(o-r),Math.abs(f-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(f-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,f=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,l=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!f(h,u)&&(f(h+1,u)||f(h-1,u)||f(h,u+1)||f(h,u-1))&&l.push([h,u]);a(r);for(const[u,h]of l)i.fillRect(u,h,1,1);return this}}}function kf(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function Bt(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const Id=n=>n*n*(3-2*n);function jn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=Id(n-i),s=Id(e-a),o=Bt(i,a,t),f=Bt(i+1,a,t),l=Bt(i,a+1,t),u=Bt(i+1,a+1,t);return o+(f-o)*r+(l-o)*s+(o-f-l+u)*r*s}const Hf=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),np=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function x_(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=Cn(a,r),o=a/2,f=r/2,l=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(f+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};l(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(Bt(d,e,1)-.5)*1.3,y:(Bt(d,e,2)-.5)*1.3,r:.12+Bt(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-f)/t,E=p*p+m*m;if(E>1)continue;const v=Math.sqrt(1-E),A=p*-.5+m*-.55+v*.67+(Hf[h%4*4+d%4]-.5)*.24;let P=A<.1?0:A<.4?1:A<.68?2:3,y=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+jn(p*1.6+e,m*3,5)*2.2)>.15&&(y=n.palB),n.terra&&jn(p*2.4+e,m*2.4,7)>.52&&(y=n.palB);let S;n.nuvens&&jn(p*3+e,m*3,9)>.62&&(S=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][P]),u.some(T=>(p-T.x)**2+(m-T.y)**2<T.r*T.r)&&(P=Math.max(0,P-1)),n.lava&&Math.abs(jn(p*3.2+e,m*3.2,11)-.5)<.035&&(S=P>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,S||y[P])}return l(!0),s.contorno("#0b1026").c}const v_=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],M_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],__=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],wn=(n,e,t)=>(jn(n,e,t)*.5+jn(n*2,e*2,t+1)*.25+jn(n*4,e*4,t+2)*.125+jn(n*8,e*8,t+3)*.0625)/.9375;function Zn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let f=0;f<n;f++){const l=t(f,o,(f+.5)/n*2-1,(o+.5)/e*2-1);if(!l)continue;const u=Math.min(f,n-1-f,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<Hf[o%4*4+f%4])continue;const h=(o*n+f)*4;s[h]=l[0],s[h+1]=l[1],s[h+2]=l[2],s[h+3]=l[3]}return a.putImageData(r,0,0),i}const Rn=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(Hf[t%4*4+e%4]-.5)*.9+.5))),Un=(n,e,t)=>[...n[t-1],e[t-1]];function mi(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function fl(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(Bt(r,t,1)*n.width),Math.floor(Bt(r,t,2)*n.height),1,1)}function S_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[f,l]=n[r];o>t!=l>t&&e<(f-s)*(t-o)/(l-o)+s&&(i=!i)}return i}const y_={orion(){const n=Zn(150,112,(e,t,i,a)=>{const r=i*1.18+(wn(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(wn(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),f=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),l=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=wn(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=Rn(Math.min(1,(o*.9+f+l)*(.3+u*1.2)+h),e,t,5);return d?Un([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});fl(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])mi(n,e,t,1);return mi(n,.2,.2,3,"#bcd0ff"),mi(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=Zn(130,124,(t,i,a,r)=>{for(let l=0;l<n.length;l++){const u=n[l],h=(wn(r*2.5+l*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(wn(a*6+l,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const E=(u.cx+h+d-a)/(2*d),v=wn(a*9,r*9,70),x=E<.14+v*.12?[235,160,70]:E<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[x[0],x[1],x[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const E=Rn((.16-m)/.16*.9,t,i,3);if(E)return Un([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],E)}}const s=wn(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),f=Rn(o,t,i,3);return f?Un(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],f):null});return fl(e,25,9),mi(e,.49,.13,2,"#bff6ff"),mi(e,.24,.4,1,"#ffe0b0"),mi(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=Zn(110,104,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,l=Math.hypot(o/.92,f/.74);if(l>1||l>.78&&jn(o*9,f*9,93)<(l-.78)*4.5)return null;const u=1-Math.abs(jn(o*8+3,f*8,90)-.5)*2,h=1-Math.abs(jn(o*14,f*14+5,91)-.5)*2;if(u>.85&&l>.3)return[255,130,55,240];if(h>.92&&l>.2)return[120,200,255,220];const d=Rn((1-l)*.7*(.4+wn(o*3,f*3,92)),i,a,3);return d?Un([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return mi(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=Zn(112,112,(t,i,a,r)=>{if(S_(n,t+.5,i+.5))return[10,5,18,255];const s=wn(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),f=Rn(o,t,i,4);return f?Un([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],f):null});return fl(e,30,13),mi(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return Zn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,f=Math.hypot(s,o),l=Math.atan2(o,s),u=.5+.5*Math.sin(2*l-f*10),h=Math.max(0,1-f)*(.25+.75*u)*(.5+wn(s*4,o*4,110)),d=Math.abs(f-.55)<.06?.5*jn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-f*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=Rn(p,t,i,5);return m?Un([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return Zn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*jn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=Rn(a*1.1+r+s,n,e,5);return o?Un([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=Zn(110,100,(t,i,a,r)=>{let s=0;for(const[f,l,u]of n)s+=Math.exp(-Math.hypot((t/110-f)*1.1,i/100-l)/.14*(7-u*.4));const o=Rn(Math.min(1,s*(.4+wn(a*3,r*3,125))),t,i,4);return o?Un([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)mi(e,t,i,a,"#cfe0ff");return e},helice(){const n=Zn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*wn(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*wn(i*6,a*6,121),f=Math.exp(-(((r-.62)/.13)**2)),l=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=Rn(Math.min(1,(f+l+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return mi(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=Zn(150,100,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,l=Math.hypot(r,s),u=Math.exp(-((f/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*wn(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-l*9),m=Rn(Math.min(1,p+u+h+d),i,a,5);return m?Un([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return mi(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(Zn(180,110,(s,o)=>{const f=s+.5-90,l=o+.5-55,u=Math.hypot(f,l);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=wn(f*.06-r*.18,l*.4,140);let d=0;const p=5.5*(1-Math.abs(f)/95);if(Math.abs(f)>17&&Math.abs(f)<90&&Math.abs(l)<p&&(d=1-Math.abs(l)/p),u>19.5&&u<36&&l<0&&Math.abs(l)>Math.abs(f)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&l>0&&l>Math.abs(f)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=Rn(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return v?Un([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-f/95),E=Rn(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return E?Un([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],E):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),f=Math.cos(.5),l=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,E,v,x])=>{let A=m*s-x*o;const P=m*o+x*s;let y=E*f-v*l,S=E*l+v*f;const T=A*u+S*h;S=-A*h+S*u,A=T;const I=2.6/(2.6-P*.9),_=3.6/(3.6-S*I*.7);return{x:124/2+A*I*_*19,y:124/2+y*I*_*19,w:P}}),p=Cn(124,124);for(const[m,E]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${E})`);for(const[m,E]of i){const v=(d[m].w+d[E].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[E].x),Math.round(d[E].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),f=Math.sin(s);a.push(Zn(150,150,(l,u)=>{const h=l+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*f,E=-h*f+d*o,v=1.1+.07*Math.abs(m),x=Math.abs(m)<70?Math.exp(-((E/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,A=Math.exp(-p/11)*.8,P=Math.abs(p-34)<.8?.35:0,y=Rn(Math.min(1,x+A+P),l,u,5);return y?Un([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],y):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(Zn(120,120,(s,o)=>{const f=s+.5-60,l=o+.5-60,u=Math.hypot(f,l),h=Math.atan2(l,f);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const E=Rn(Math.exp(-(u-47.5)/3)*.55,s,o,2);return E?Un([[120,90,220],[190,160,255]],[60,110],E):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=Rn(Math.min(1,p),s,o,4);return Un([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+Bt(s,150,1)*146,10+Bt(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,f],[l,u])=>{const h=l-o,d=u-f,p=Math.max(0,Math.min(1,((r-o)*h+(s-f)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(f+d*p))};return Zn(170,124,(r,s,o,f)=>{let l=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);l+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+wn(r*.2,s*.2,151))}for(const[h,d]of t)l+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=Rn(Math.min(1,l),r,s,4);return u?Un([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},b_={},E_=n=>b_[n]??=y_[n](),Hr=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let A_=null;const ip=()=>A_??=np.map((n,e)=>x_(n,e*13+3));function T_(n,e){const t=ip(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,f=-1,l=1;function u(m){if(l<1&&(l=Math.min(1,l+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const E=.35+Math.random()*.3,v=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(E)*v,vy:Math.sin(E)*v,vida:0,max:1.4})}for(const E of r)E.x+=E.vx*m,E.y+=E.vy*m,E.vida+=m;r=r.filter(E=>E.vida<E.max&&E.x<n+20&&E.y<e+20)}function h(m,E,v,x,A,P){const y=m*v,S=E*v,T=Math.floor((y-n/2-A)/x),I=Math.floor((y+n/2+A)/x),_=Math.floor((S-e/2-A)/x),R=Math.floor((S+e/2+A)/x);for(let L=_;L<=R;L++)for(let U=T;U<=I;U++)P(U,L,U*x-y+n/2,L*x-S+e/2)}function d(m,E,v,x,A){const P=Hr[A%Hr.length],y=A%Hr.length;m.fillStyle=P.base,m.fillRect(0,0,n,e),h(E,v,.06,400,160,(S,T,I,_)=>{if(Bt(S,T,90+y)>.7)return;const R=70+Bt(S,T,91)*80,L=P.nebulosas[Math.floor(Bt(S,T,92)*P.nebulosas.length)],U=I+Bt(S,T,93)*400,V=_+Bt(S,T,94)*400;for(let X=0;X<5;X++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(U),Math.round(V),Math.max(0,R*(1-X*.18)),0,Math.PI*2),m.fill()}),h(E,v,.1,360,170,(S,T,I,_)=>{if(Bt(S,T,200+y*3)>.8)return;const R=E_(P.objetos[Math.floor(Bt(S,T,201)*P.objetos.length)]),L=Array.isArray(R)?R[Math.floor(x*R.fps+Bt(S,T,204)*R.length)%R.length]:R,U=I+(.1+Bt(S,T,202)*.6)*360,V=_+(.1+Bt(S,T,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(U-L.width/2),Math.round(V-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${P.tom}, 0.05)`,m.fillRect(0,0,n,e),M_.forEach((S,T)=>{m.globalAlpha=S.alfa,h(E,v,S.f,S.cel,130,(I,_,R,L)=>{if(Bt(I,_,S.semente)>S.prob*(P.planetas??1))return;const U=Math.floor(Bt(I,_,S.semente+1)*t.length),V=S.escalaMax>1&&np[U].r<=15&&Bt(I,_,S.semente+2)<.4?2:1,X=t[U],k=R+(.15+Bt(I,_,S.semente+3)*.7)*S.cel,$=L+(.15+Bt(I,_,S.semente+4)*.7)*S.cel;m.drawImage(X,Math.round(k-X.width*V/2),Math.round($-X.height*V/2),X.width*V,X.height*V)});for(const I of __){if(I.camada!==T)continue;const _=t[I.tipo],R=I.x-E*S.f+n/2,L=I.y-v*S.f+e/2;m.drawImage(_,Math.round(R-_.width*I.escala/2),Math.round(L-_.height*I.escala/2),_.width*I.escala,_.height*I.escala)}m.globalAlpha=1});for(const S of v_)h(E,v,S.f,S.cel,4,(T,I,_,R)=>{for(let L=0;L<S.n;L++){const U=Math.round(_+Bt(T,I,L*7+1)*S.cel),V=Math.round(R+Bt(T,I,L*7+2)*S.cel);if(U<-2||U>n+2||V<-2||V>e+2)continue;const X=S.cores[Math.floor(Bt(T,I,L*7+3)*S.cores.length)],k=Bt(T,I,L*7+4)*6.28,$=1+Bt(T,I,L*7+5)*2.2;(!S.pisca||Math.sin(x*$+k)>-.35)&&(m.fillStyle=X,m.fillRect(U,V,1,1),S.grande&&Bt(T,I,L*7+6)<S.grande&&(m.fillRect(U-1,V,3,1),m.fillRect(U,V-1,1,3)))}})}function p(m,E,v,x,A=0){A!==o&&(f=o,o=A,l=f<0?1:0),l<1&&f>=0?(d(m,E,v,x,f),d(a,E,v,x,o),m.globalAlpha=l,m.drawImage(i,0,0),m.globalAlpha=1):d(m,E,v,x,o);for(const P of r){const y=1-P.vida/P.max;for(let S=0;S<12;S++){const T=Math.round(P.x-P.vx*S*.011),I=Math.round(P.y-P.vy*S*.011);m.globalAlpha=Math.max(0,y*(1-S/12)),m.fillStyle=S<2?"#ffffff":"#8bd3ff",m.fillRect(T,I,S<2?2:1,S<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const Hn=520,Ha=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function w_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const E=m.getContext("2d");return E.drawImage(p,0,0),E.globalCompositeOperation="source-atop",E.fillStyle="rgba(70, 40, 110, 0.55)",E.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},E=P=>Ha(d,p,300+P),v=d*Hn,x=p*Hn;if(E(1)>=.5)return m;const A=E(2);if(A<.22){const P=ip(),y=Math.floor(E(3)*P.length),S=P[y],T=(S.height-2)/2,I=T>=13?2:3,_=v+90+E(4)*(Hn-180),R=x+90+E(5)*(Hn-180);if(r(_,R,70)){const L=T*I*.92;m.planetas.push({x:_,y:R,spr:S,esc:I}),m.circ.push({x:_,y:R,r:L})}}else if(A<.62){const P=E(5)*Math.PI*2,y=150+E(6)*130,S=(E(7)-.5)*70,T=v+120+E(8)*(Hn-240),I=x+120+E(9)*(Hn-240),_=(.2+.6*E(10))*y,R=E(11)<.5?(_/y+.4)%1*y:-999,L=Math.floor(y/13);for(let U=0;U<=L;U++){const V=U/L,X=V*y;if(Math.abs(X-_)<24||Math.abs(X-R)<24)continue;const k=Math.sin(V*Math.PI)*S,$=T+Math.cos(P)*X-Math.sin(P)*k,ie=I+Math.sin(P)*X+Math.cos(P)*k;if(!r($,ie,10))continue;const G=Ha(d*31+U,p,330)<.6?0:1,xe=[8,10][G];m.rochas.push({x:$,y:ie,tam:G}),m.circ.push({x:$,y:ie,r:xe*.85})}}else{const P=70+E(11)*50,y=v+P+E(12)*(Hn-2*P),S=x+P+E(13)*(Hn-2*P);if(r(y,S,P)){const T=Array.from({length:34},(I,_)=>{const R=Ha(d,p,400+_)*Math.PI*2,L=Math.sqrt(Ha(d,p,440+_))*P*.95;return{dx:Math.cos(R)*L,dy:Math.sin(R)*L,tam:1+Math.floor(Ha(d,p,480+_)*3),cor:Ha(d,p,520+_)<.5?"#9a8a7a":"#6a5a50",fase:Ha(d,p,560+_)*6.28}});m.zonas.push({x:y,y:S,r:P,pedrinhas:T})}}return m}const o=(d,p)=>{const m=d+","+p;let E=i.get(m);return E||(E=s(d,p),i.set(m,E)),E};function f(d,p,m){const E=Math.floor(d/Hn),v=Math.floor(p/Hn);for(let x=-1;x<=1;x++)for(let A=-1;A<=1;A++)m(o(E+A,v+x))}function l(d,p){let m=1;return f(d,p,E=>{for(const v of E.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,E=0){let v=!1;return f(d.x,d.y,x=>{for(const A of x.circ){const P=d.x-A.x,y=d.y-A.y,S=A.r+p;if(Math.abs(P)>S||Math.abs(y)>S)continue;const T=Math.hypot(P,y)||.001;if(T>=S)continue;const I=P/T,_=y/T;if(d.x=A.x+I*S,d.y=A.y+_*S,v=!0,m&&E>0){const R=-_,L=I,U=Math.sign((m.x-d.x)*R+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=R*U*E,d.y+=L*U*E}}}),v}function h(d,p,m,E,v,x){const A=Math.floor((p-200)/Hn),P=Math.floor((p+E+200)/Hn),y=Math.floor((m-200)/Hn),S=Math.floor((m+v+200)/Hn),T=(I,_,R)=>I>p-R&&I<p+E+R&&_>m-R&&_<m+v+R;for(let I=y-1;I<=S+1;I++)for(let _=A-1;_<=P+1;_++){const R=o(_,I);for(const L of R.zonas)if(T(L.x,L.y,L.r+10)){for(let U=0;U<4;U++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-U*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const U of L.pedrinhas)d.fillStyle=U.cor,d.fillRect(Math.round(L.x+U.dx+Math.sin(x*.6+U.fase)*2),Math.round(L.y+U.dy+Math.cos(x*.5+U.fase)*2),U.tam,U.tam)}for(const L of R.planetas)T(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of R.rochas){if(!T(L.x,L.y,20))continue;const U=a[L.tam];d.drawImage(U,Math.round(L.x-U.width/2),Math.round(L.y-U.height/2))}}}return{fatorLento:l,empurrar:u,desenhar:h,celula:o}}const Pi="#0b1026",nc=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],Aa=n=>({quadros:n,brancos:n.map(kf)});function R_(n){const e=nc[n%nc.length],t=(l,u,h,d)=>{l.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),l.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=Aa([0,1].map(l=>{const u=Cn(16,16),h=l?10:9.5;if(u.elipse(8,h,l?6.5:6,l?3.6:4.3,e.slime[0]),u.elipse(8,l?11:10.8,l?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,l?7:6,e.slime[1]);return e.chifres&&t(u,4,10,l?3:2),u.retangulo(4,l?8:7,2,2,e.olho),u.retangulo(9,l?8:7,2,2,e.olho),u.pixel(5,l?9:8,"#1b1020"),u.pixel(10,l?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,l?6:5,2,2,e.olho),u.pixel(8,l?7:6,"#1b1020")),u.contorno(Pi).c})),a=Aa([0,1].map(l=>{const u=Cn(18,16),h=l?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(Pi).c})),r=Aa([0,1].map(l=>{const u=Cn(20,20);u.disco(10,12+l,7,e.ogro[0]),u.disco(10,13+l,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+l],[5,1+l],[7,7+l]],h),u.poligono([[13,7+l],[15,1+l],[17,7+l]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+l,e.ogro[1]);return u.retangulo(5,10+l,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+l,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+l,"#1b1020"),u.pixel(11,11+l,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+l,2,2,e.olho),u.pixel(10,9+l,"#1b1020")),u.retangulo(7,15+l,6,2,"#1b1020"),u.pixel(8,15+l,"#ffffff"),u.pixel(11,15+l,"#ffffff"),u.contorno(Pi).c})),s=Aa([0,1].map(l=>{const u=Cn(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+l)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(Pi).c})),o=Aa([0,1].map(l=>{const u=Cn(16,17);return u.pixel(8,0,l?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(Pi).c})),f=Aa([0,1].map(l=>{const u=Cn(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=l?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(Pi).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:f}}function C_(n){const e=nc[n%nc.length];return Aa([0,1].map(t=>{const i=Cn(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(Pi).c}))}function P_(){return Aa([0,1].map(n=>{const e=Cn(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(Pi).c}))}function ul(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function I_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,f)=>{const l=f/11*Math.PI*2,u=n*(.8+ul(e*7+1,f)*.35);return[i+Math.cos(l)*u,a+Math.sin(l)*u]}),s=(o,f,l)=>r.map(([u,h])=>[i+(u-i)*o+f,a+(h-a)*o+l]);return{r:n,quadros:[0,1,2].map(o=>{const f=Cn(t,t);f.poligono(r,"#5a606c"),f.poligono(s(.88,-.7,-.7),"#7a808d"),f.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let l=0;l<3+e;l++)f.disco(Math.round(i+(ul(e,l+20)-.5)*n*1.2),Math.round(a+(ul(e,l+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(f.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),f.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(f.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),f.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),f.contorno(Pi).c})}})}function L_(){const n=t=>{const i=Cn(12,12);return t(i),i.contorno(Pi).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,f=s%2?a:i;return[6+Math.cos(o)*f,6+Math.sin(o)*f]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function D_(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let f=-r;f<=r;f++)for(let l=-r;l<=r;l++){const u=Math.hypot(l,f);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(f,l)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+l,o+f,1,1)}n.globalAlpha=1}const uf="#0b1026",N_=n=>({quadros:n,brancos:n.map(kf)}),bt=(n,e,t)=>N_([0,1].map(i=>{const a=Cn(n,e);return t(a,i),a.contorno(uf).c})),U_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((f,l)=>{const u=t[f];u&&n.retangulo(a+l*i,r+o*i,i,i,u)})),Sa=(n,e,t,i,a,r=1,s=0,o=0)=>bt(n,e,(f,l)=>U_(f,l?i:t,a,r,s,o)),Da=(n,e)=>n.map(([t,i])=>[e-1-t,i]),ap=(n,e,t,i)=>e.forEach(([a,r,s,o],f)=>n.linha(a,r,s+((f+t)%2?1:0),o,i)),Ld=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],Dd=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function O_(){const n=f=>({x:f,y:"#ffffff"}),e=Sa(16,12,Ld,Dd,n("#5be37a"),1,2,2),t=Sa(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=Sa(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=Sa(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=Sa(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=Sa(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=Sa(56,38,Ld,Dd,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function F_(){const n=Sa(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=bt(18,14,(o,f)=>{const l=f?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=f?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(l,"#a56bff"),o.poligono(Da(l,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(Da(u,18),"#d1b0ff"),o.disco(f?4:3,f?10:4,1,"#ffe14a"),o.disco(f?13:14,f?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=bt(20,18,(o,f)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const l of[0,1,2]){const u=8+l*3;o.linha(3,u,1,u+1+(f?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(f?0:2),"#1b2a2a")}}),i=bt(14,17,(o,f)=>{const l=f?1:0;o.elipse(3,6+l,3,1.6,"#bfe6ff"),o.elipse(10,6+l,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=bt(16,17,(o,f)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,f?"#ff3b4a":"#ffd23f"),o.pixel(10,2,f?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,uf),o.pixel(13,7,uf),ap(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],f,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=bt(12,10,(o,f)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const l=f?4:1;o.elipse(2.5,l+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,l+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=bt(56,38,(o,f)=>{for(const l of[0,1,2]){const u=20+l*6;o.linha(10,u,2,u+6+(f?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(f?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(f?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(f?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,f?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,f?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function B_(){const n=bt(16,16,(o,f)=>{const l=f?0:1;o.disco(8,10+l,6,"#f4efe0"),o.disco(8,10+l,4,"#ff9a3a"),o.disco(8,10+l,2,"#f4efe0"),o.pixel(4,8+l,"#ff9a3a"),o.disco(9,3+l,3,"#f4efe0"),o.pixel(10,3+l,"#1b1020"),o.pixel(10,4+l,"#1b1020"),o.retangulo(7,2+l,4,1,"#8b93a8"),o.linha(8,0+l,8,1+l,"#8b93a8")}),e=bt(18,16,(o,f)=>{const l=f?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-l/2],[1,7-l/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-l/2],[17,7-l/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+l/2],[1,11+l/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+l/2],[17,11+l/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-l/2],[16,5-l/2],[1,10+l/2],[16,10+l/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=bt(20,20,(o,f)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const l of[7,14]){const u=f?1:-1;o.retangulo(l,10,2,5,"#aab3c8"),o.retangulo(l+u,15,2,4,"#8b93a8"),o.retangulo(l+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=bt(14,17,(o,f)=>{const l=f?1:0;o.disco(7+l,6,5,"#f4f4fa"),o.poligono([[3+l,5],[6+l,5],[5+l,8],[3+l,7]],"#1b1020"),o.poligono([[11+l,5],[8+l,5],[9+l,8],[11+l,7]],"#1b1020"),o.retangulo(6+l,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=bt(16,17,(o,f)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+f,"#ffd23f"),o.retangulo(12,14,2,2+f,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,f?"#ff3b4a":"#ffd23f")}),r=bt(12,11,(o,f)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,f?"#8bd3ff":"#ffffff")}),s=bt(56,38,(o,f)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let l=12;l<44;l+=4)o.pixel(l,22,"#5a6176"),o.pixel(l+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,f?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[l,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(l,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,f?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function z_(){const n=bt(16,14,(o,f)=>{for(let l=0;l<5;l++)o.disco(3+l*2,9+Math.round(Math.sin(l*1.2+f*2.4)*2),2,l%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=bt(18,16,(o,f)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const l=f?0:1;o.retangulo(8+l,0,1,2,"#ffffff"),o.retangulo(8+l,14,1,2,"#ffffff"),o.retangulo(0,8-l,2,1,"#ffffff"),o.retangulo(16,8-l,2,1,"#ffffff")}),t=bt(22,18,(o,f)=>{ap(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],f,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,f?5:6,0,"#4a2a10"),o.linha(13,2,f?17:16,0,"#4a2a10")}),i=bt(14,17,(o,f)=>{const l=f?1:0;o.elipse(7,6+l,5.5,6,"#a8b0b8"),o.elipse(7,4+l,4,3,"#c0c8d0"),o.poligono([[2,5+l],[6,7+l],[5,9+l],[2,8+l]],"#0b1026"),o.poligono(Da([[2,5+l],[6,7+l],[5,9+l],[2,8+l]],14),"#0b1026"),o.retangulo(6,14+l,2,3,"#8a929a"),o.retangulo(4,12+l,6,2,"#8a929a"),o.pixel(3,6+l,"#ffffff"),o.pixel(10,6+l,"#ffffff")}),a=bt(16,17,(o,f)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,f?"#ffffff":"#8bd3ff"),o.pixel(14,7,f?"#8bd3ff":"#ffffff")}),r=bt(12,8,(o,f)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const l of[3,5,7])o.pixel(l+(f?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=bt(56,38,(o,f)=>{for(const l of[0,1,2]){const u=20+l*5;o.linha(12,u,2,u+8+(f?3:0),"#3a2008"),o.linha(44,u,54,u+8+(f?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(f?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(f?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,f?12:16,0,"#4a2a10"),o.linha(32,3,f?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function G_(){const n=bt(14,16,(o,f)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const l=f?3:1;o.poligono([[2,6],[4,6-l],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-l],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-l],[9,5]],"#a09060"),f&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=bt(18,10,(o,f)=>{for(let l=0;l<6;l++)o.disco(15-l*2.5,5+Math.round(Math.sin(l*1.4+f*3)*2),l===0?2:1,l===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=bt(20,20,(o,f)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const l of[4,6,13,15])o.linha(l,3,l+(l<10?-2:2),11+(f?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,f?"#ff3b4a":"#7a1f2a")}),i=bt(14,17,(o,f)=>{const l=f?1:0;o.poligono([[10,0+l],[13,4+l],[6,9+l],[3,6+l]],"#1f2a3a"),o.poligono([[10,1+l],[12,4+l],[8,4+l]],"#4a6a8a"),o.poligono([[3,6+l],[6,9+l],[5,11+l],[2,9+l]],"#2a3a4a"),o.pixel(3,9+l,"#ffffff"),o.pixel(5,10+l,"#ffffff"),o.pixel(7,10+l,"#ffffff"),o.retangulo(5,11+l,5,5,"#1f2a3a"),o.linha(10,11+l,13,15,"#1f2a3a")}),a=bt(16,17,(o,f)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,f?"#7dff3a":"#3a9a1f");for(const l of[5,7,9])o.pixel(l,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(f?7:8,14,"#7dff3a"),o.pixel(f?8:7,15,"#7dff3a")}),r=bt(12,10,(o,f)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const l of[1,3,8,10])o.linha(l,3,l<6?l-1:l+1,8+(f?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=bt(56,38,(o,f)=>{for(const l of[8,14,42,48])o.linha(l<28?l+6:l-6,20,l,34+(f?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const l of[18,24,32,38])o.linha(l,4,l+(l<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let l=21;l<36;l+=2)o.pixel(l,20,"#ffffff"),o.pixel(l,24,"#ffffff");o.retangulo(25,22,6,2,f?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function V_(){const n=bt(16,14,(o,f)=>{const l=f?0:1;o.disco(8,8+l,6,"#ffe14a"),o.disco(7,7+l,3,"#fff08a"),o.pixel(5,6+l,"#1b1020"),o.pixel(10,6+l,"#1b1020"),o.poligono([[7,8+l],[9,8+l],[8,10+l]],"#ff9a3a"),o.pixel(8,2+l,"#ffe14a"),o.pixel(9,1+l,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=bt(18,14,(o,f)=>{const l=f?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(l,"#2a2a3a"),o.poligono(Da(l,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=bt(20,20,(o,f)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const l of[7,10,13])o.pixel(l,14+(f?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=bt(14,17,(o,f)=>{const l=f?3:0;o.poligono([[7,3],[0,8-l],[3,10],[7,9]],"#ff7a2a"),o.poligono(Da([[7,3],[0,8-l],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=bt(16,17,(o,f)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,f?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=bt(12,9,(o,f)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const l=f?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(l,"#7a4a2a")}),s=bt(56,38,(o,f)=>{const l=f?0:8;o.poligono([[28,14],[2,4+l],[10,14+l],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+l],[46,14+l],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+l],[16,17+l],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+l],[40,17+l],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const Ji=[{nome:"SLIMES",criar:()=>({m:R_(0),chefe:C_(0)})},{nome:"INVASORES",criar:O_},{nome:"BICHARADA",criar:F_},{nome:"GALÁXIA",criar:B_},{nome:"AGENTES",criar:z_},{nome:"XENO",criar:G_},{nome:"REVOADA",criar:V_}],rp=(n,e,t,i,a,r,s,o=1.5)=>{let f=e,l=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(f,l,d,p,r),n.linha(f+1,l,d+1,p,r),f=d,l=p}return[f,l]},k_=()=>bt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=rp(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),H_=()=>bt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),W_=()=>bt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),X_=()=>bt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),q_=()=>bt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),Y_=()=>bt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=rp(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),Dr=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:P_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:k_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:H_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:W_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:X_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:q_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:Y_}],$_=()=>bt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),J_=()=>bt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),Z_=()=>bt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(Da([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),K_=()=>bt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(Da([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(Da([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),Q_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],Wa=[...Ji.map((n,e)=>({nome:Q_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:$_},{nome:"DISCO-MÃE",criar:J_},{nome:"NAVE-CAVEIRA",criar:Z_},{nome:"CRISTAL VIVO",criar:K_}],Gt=320,Vt=180,On=Gt/2,ga=Vt/2,xa=6,op="curriculo-arcade-v1",j_=12,mt={x0:10,x1:Gt-10,y0:26,y1:Vt-10},gi={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Us=70,e2={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},ic={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},t2=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{Zi(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{Zi(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{Zi(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{Zi(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{Zi(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{Zi(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{Zi(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{Zi(n,"drift")}},{id:"a_normal",grupo:"ARMA · CANHÃO",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Canhão · evolução",desc:"Melhora o calibre e o impacto exclusivos do canhão principal.",max:4,peso:1.3,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA · LASER",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta alcance, bateria e eficiência próprios do laser.",max:4,peso:1.5,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA · MÍSSIL",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores e um míssil extra nos níveis avançados.",max:4,peso:1.5,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA · ORBES",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas e rotação própria mais rápida.",max:4,peso:1.5,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA · TURBO",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Aumenta a autonomia e a força exclusiva do hiperpropulsor.",max:4,peso:1.5,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA · CURA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Aumenta o reparo e reduz a espera do nanorreparo.",max:4,peso:1.5,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA · ESCUDO",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração própria da barreira de fase.",max:4,peso:1.5,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA · SALTO",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e carrega a ruptura mais rápido.",max:4,peso:1.5,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA · DRIFT",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Aumenta a arrancada e a trilha de fogo próprias do drift.",max:4,peso:1.5,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"NAVE · DANO",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Ponto de dano",desc:"+12% de dano para TODO o arsenal da nave.",max:6,peso:4.4,aplicar:n=>{n.danoGlobal*=1.12}},{id:"reparo",grupo:"NAVE · VIDA",raridade:"COMUM",icone:"♥",cor:"#ff6b7a",nome:"Ponto de vida",desc:"+1 de vida máxima e recupera 1 ponto agora.",max:6,peso:4.4,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"armadura",grupo:"NAVE · ARMADURA",raridade:"INCOMUM",icone:"⬢",cor:"#c9cdf5",nome:"Ponto de armadura",desc:"-6% de dano recebido pela nave inteira, até o limite de 50%.",max:6,peso:4.2,aplicar:n=>{n.armadura+=1}},{id:"motor",grupo:"NAVE · VELOCIDADE",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Ponto de velocidade",desc:"+10% de velocidade e resposta da nave.",max:6,peso:4.4,aplicar:n=>{n.velNave*=1.1}},{id:"recarga_geral",grupo:"NAVE · RECARGA",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Ponto de recarga",desc:"+10% de cadência e recarga para TODAS as armas e sistemas.",max:6,peso:4.2,aplicar:n=>{n.recargaGlobal*=1.1}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:2.1,aplicar:n=>{n.raioIma*=1.45}},{id:"coletor",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:2.3,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:2.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"NAVE · REPARO",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:2.2,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}}],sp=Object.fromEntries(Object.entries(ic).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),n2=Object.fromEntries(Object.entries(ic).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function Zi(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${sp[e]}!`,n.aviso=3.6,!0)}const Wf=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga para todas as armas e sistemas",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Amplificador bélico",desc:"+0,25 de dano base para todo o arsenal",max:5,custo:n=>8+n*6},{parte:"NÚCLEO DE ENERGIA",id:"cadencia",nome:"Computador de recarga",desc:"+8% de cadência e recarga global",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"CASCO",id:"armadura",nome:"Blindagem",desc:"-6% de dano recebido por ponto",max:5,custo:n=>8+n*5},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],ya={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},i2=Object.entries(ya).map(([n,e])=>[n,e.peso]),a2=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],r2=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Wf.map(n=>[n.id,0]))});function Nd(){const n=r2();try{const e=JSON.parse(localStorage.getItem(op));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Wf)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function o2(){const n=(t,i,a)=>{const r=Cn(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function Ud(n,e="padrao"){const t=Cn(20,20),i=2,a=(f,l,u,h,d)=>t.retangulo(f+i,l+i,u,h,d),r=e==="yas",s=e==="fer",o=r?{aleta:"#b7683f",metal:"#b9a58b",casco:"#496044",nucleo:"#f2d7ae",nucleo2:"#e5b85c",brilho:"#fff1d7",alerta:"#d88b55",contorno:"#241b17"}:s?{aleta:"#6c5cff",metal:"#91a0c8",casco:"#172b59",nucleo:"#55e2e0",nucleo2:"#8b6cff",brilho:"#d6fbff",alerta:"#4fe7ff",contorno:"#050817"}:{aleta:"#ff7a59",metal:"#8b93a8",casco:"#4aa8ff",nucleo:"#8bd3ff",nucleo2:"#7dff9a",brilho:"#ffffff",alerta:"#ff3b4a",contorno:"#0b1026"};if(a(1,7,3,2,o.aleta),a(12,7,3,2,o.aleta),a(7,1,2,3,o.aleta),a(7,12,2,3,o.aleta),n.motor>=2&&(a(2,11,2,3,o.metal),a(12,11,2,3,o.metal),t.pixel(3+i,14+i,"#ffa23a"),t.pixel(12+i,14+i,"#ffa23a")),n.motor>=4&&(a(1,4,2,3,o.metal),a(13,4,2,3,o.metal)),t.disco(8+i,8+i,5,o.casco),t.disco(8+i,8+i,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?o.nucleo2:o.nucleo),t.disco(8+i,8+i,1,o.brilho),r){for(const[f,l]of[[7,6],[9,6],[7,8],[9,8]])t.pixel(f+i,l+i,"#91a56b");t.pixel(8+i,7+i,"#e5b85c")}if(s){for(const[f,l]of[[7,6],[7,7],[7,8],[8,8],[9,8]])t.pixel(f+i,l+i,"#9daaff");t.pixel(9+i,6+i,"#55e2e0"),t.pixel(10+i,5+i,"#d6fbff")}if(n.casco>=1)for(const[f,l]of[[2,2],[12,2],[2,12],[12,12]])a(f,l,2,2,o.metal),n.casco>=3&&t.pixel(f+i,l+i,o.brilho);return n.ima>=1&&(t.pixel(8+i,i-1,o.alerta),n.ima>=3&&a(10,0,2,1,r?"#e8d5b8":s?"#aab6df":"#c9cdd8")),t.contorno(n.casco>=5?"#ffd23f":n.casco>=3?r?"#d8b68e":s?"#55e2e0":"#8bd3ff":o.contorno),{c:t.c,branca:kf(t.c)}}function s2({bip:n,somAtivo:e,tema:t="padrao"}){const i=t==="yas",a=t==="fer",r=Symbol("arcade");window.__curriculoArcadeGeracao=r,document.getElementById("arcade")?.remove();const s=(M,g,N)=>{const H=document.createElement(M);return g&&(H.className=g),N!=null&&(H.textContent=N),H},o=o2(),f=I_(),l=L_(),u=w_({inicioX:On,inicioY:ga,rochasSpr:f}),h=new Map,d=new Map,p=M=>(h.has(M)||h.set(M,Dr[M].criar()),h.get(M)),m=M=>(d.has(M)||d.set(M,Wa[M].criar()),d.get(M)),E=new Map,v=M=>{const g=(M%Ji.length+Ji.length)%Ji.length;return E.has(g)||E.set(g,Ji[g].criar()),E.get(g)},x=.3,A=M=>{const g=new Audio("./"+M);return g.loop=!0,g.volume=x,g.preload="none",g},P=A("audio/arcade.mp3"),y=A("audio/chefe.mp3"),S=A("audio/gameover.mp3"),T={normal:P,chefe:y,fim:S};let I="normal",_=!1;function R(){if(_)return;_=!0;const M=()=>{_=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),De&&L()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const L=()=>{e&&!e()||T[I].play().catch(R)},U=()=>{P.pause(),y.pause(),S.pause()};function V(M){if(I!==M){I=M;for(const[g,N]of Object.entries(T))g!==M&&N.pause();M!=="normal"&&(T[M].currentTime=0),L()}}let X=!1;function k(){if(!X){X=!0;for(const M of[y,S])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,X=!1})}}const $=T_(Gt,Vt);let ie=Ud({casco:0,motor:0,nucleo:0,ima:0},t),G=Nd();const xe={},re=(M,g,N)=>{const H=performance.now();H-(xe[M]||0)<g||(xe[M]=H,N())};function le(M){const g=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";re("acerto"+(g?"G":""),g?70:40,()=>g?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function de(M){re("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const Ke=()=>{try{localStorage.setItem(op,JSON.stringify(G))}catch{}},Ue=s("div");Ue.id="arcade",Ue.classList.toggle("tema-yas",i),Ue.classList.toggle("tema-fer",a);const yt=s("div","arc-caixa"),pt=s("div","arc-topo"),vt=document.createElement("canvas");vt.width=vt.height=20,vt.className="arc-icone",vt.getContext("2d").drawImage(ie.c,0,0);const fe=s("h2",null,i?"NAVE VIAJANTE":a?"NAVE ABISSAL":"NAVE ARCADE"),me=s("div","arc-hud"),Ce=s("span","arc-vidas");Ce.setAttribute("role","status");const ot=s("span","arc-nivel"),Ve=s("span","arc-xp"),Pe=s("i");Ve.append(Pe),Ve.setAttribute("role","progressbar"),Ve.setAttribute("aria-label","Experiência"),Ve.setAttribute("aria-valuemin","0");const ut=s("span"),ue=s("span","arc-onda"),Me=s("span","arc-efeitos"),Ae=s("span","arc-moedas"),we=s("span");me.append(Ce,ot,Ve,ut,ue,Me,Ae,we);const be=s("button","arc-pausa","II");be.title="Pausar (Esc)",be.setAttribute("aria-label","Pausar jogo"),be.hidden=!0;const et=s("button","arc-x","X");et.title="Sair (Esc)",et.setAttribute("aria-label","Sair do jogo"),pt.append(vt,fe,me,be,et);const ne=s("div","arc-tela"),Se=document.createElement("canvas");Se.width=Gt,Se.height=Vt,Se.setAttribute("role","img"),Se.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const w=Se.getContext("2d");w.imageSmoothingEnabled=!1;const O=s("div","arc-joystick");O.hidden=!0;const ct=s("i");O.append(ct);const ke=s("div","arc-aviso");ke.hidden=!0;const D=s("div","arc-sobre"),b=s("div","arc-painel arc-inicio"),Y=s("button","arc-btn","COMEÇAR [ESPAÇO]"),Z=s("button","arc-btn sec"),ce=s("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),ve=s("div","arc-objetivos");for(const[M,g,N]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const H=s("div");H.append(s("b",null,M),s("strong",null,g),s("small",null,N)),ve.append(H)}const Re=s("details","arc-regras"),se=s("summary",null,"COMO JOGAR");Re.append(se,s("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),s("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const pe=s("p","arc-recordes");b.append(s("h3",null,"PRONTO PARA DECOLAR?"),ce,ve,Re,pe,Y,Z);const Ie=s("div","arc-painel");Ie.hidden=!0;const Qe=s("div","arc-painel");Qe.hidden=!0;const ze=s("button","arc-btn","CONTINUAR [ESC]"),Be=s("button","arc-btn sec","SAIR");Qe.append(s("h3",null,"PAUSADO"),ze,Be);const Oe=s("div","arc-painel");Oe.hidden=!0;const at=s("div","of-raiz");at.hidden=!0,D.append(b,Ie,Qe,Oe),ne.append(Se,ke,O,D);const gt=s("div","arc-armas"),q=[];for(let M=1;M<=4;M++){const g=s("button","arc-arma"),N=s("b"),H=s("i");g.append(s("small",null,String(M)),N,H),g.onmousedown=ee=>ee.preventDefault(),g.onclick=()=>zt(M),q.push({b:g,nm:N,barra:H}),gt.append(g)}yt.append(pt,ne,gt,s("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),Ue.append(yt,at),Ue.setAttribute("role","dialog"),Ue.setAttribute("aria-modal","true"),Ue.setAttribute("aria-label","Nave Arcade"),document.body.append(Ue);let De=!1,te="inicio",Ge=0,We=0,ye="inicio",c=null;const qe=new Set,dt={ativo:!1,x:On,y:ga,toque:!1,dx:0,dy:0,origemX:0,origemY:0},Ot=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],sn=M=>Math.abs(M.x-c.cx)<Gt/2+4&&Math.abs(M.y-c.cy)<Vt/2+4,Pn=M=>{let g=Math.random()*M.reduce((N,H)=>N+H[1],0);for(const[N,H]of M)if(g-=H,g<=0)return N;return M[0][0]},ti=(M,g=2.6)=>{c.avisoTxt=M,c.aviso=g};function vc(){const M=G.oficina,g=c?c.niveis:{};return{casco:M.casco+M.armadura+(g.reparo|0)+(g.armadura|0),motor:M.motor+(g.motor|0),nucleo:M.nucleo+(g.recarga_geral|0),armas:M.dano+M.lente+(g.dano_geral|0),ima:M.ima+(g.ima|0)}}function or(){const M=vc();ie=Ud(M,t),c&&(c.tiers=M);const g=vt.getContext("2d");g.clearRect(0,0,20,20),g.drawImage(ie.c,0,0)}const eo=()=>{if(c.regiaoForcada!=null)return c.regiaoForcada;const M=Math.min(2,Math.floor((c.fase-1)/2)),g=Hr.map((N,H)=>H).filter(N=>Hr[N].nivel===M);return g[(c.fundoBase+c.fase)%g.length]},ca=M=>{const g=[...M];for(let N=g.length-1;N>0;N--){const H=Math.floor(Math.random()*(N+1));[g[N],g[H]]=[g[H],g[N]]}return g};function Ko(){const M=ca(["slime","inseto","morcego","fantasma","ogro"]).slice(0,3),g=ca(["atirador","sentinela"]).slice(0,1),N=ca(["bombardeiro","fulminante"]).slice(0,1),H=ca(["curandeiro","amplificador"]).slice(0,1);return[...M,...g,...N,...H]}function to(){const M=G.oficina,g=Ko(),N=ca(Array.from({length:Ji.length},(ae,Te)=>Te)),H=Object.fromEntries(g.map((ae,Te)=>[ae,N[Te%N.length]])),ee=Object.fromEntries(g.map((ae,Te)=>[ae,Te<2?1:Te<4?2:Te===4?4:5]));c={t:0,ta:0,nx:On,ny:ga,cx:On,cy:ga,velNave:75*(1+.08*M.motor),cristais:[],raioIma:26*(1+.25*M.ima),raioPegar:8,bonusXp:1+.1*M.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,ondaFila:0,ondaSpawnT:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+M.casco,maxHp:6+M.casco,armadura:M.armadura,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*M.dano,danoGlobal:1,recargaGlobal:(1+.08*M.cadencia)*(1+.12*M.nucleo),cadencia:2.6,projeteis:1+M.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*Wa.length),alienIdx:Math.floor(Math.random()*Dr.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*Ji.length),elencoRun:g,entradaRun:ee,skinsRun:H,fundoBase:Math.floor(Math.random()*Hr.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:M.escudo>0?1+(M.escudo>=4?1:0):0,barreira:M.escudo>0?1+(M.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*M.escudo},or()}const fi=()=>Math.max(1,c.onda);function Oa(){const M=fi(),g={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let N=c.elencoRun.filter(H=>M>=c.entradaRun[H]).map(H=>[H,g[H]+Math.max(0,M-c.entradaRun[H])*(H==="atirador"||H==="sentinela"?.45:.2)]);return N.length||(N=[[c.elencoRun[0],1]]),Pn(N)}function la(M,g,N){const H=gi[M],ee=Math.max(0,fi()-1),ae=Math.max(1,Math.round(H.hp*(1+(H.hp===1?.1:.15)*ee)*(1+c.t/300))),Te=H.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*ee))*(1+Math.min(.5,c.t/600)),Le={tipo:M,x:g,y:N,hp:ae,hpMax:ae,vel:Te,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(c.skinsRun[M]??c.skinBase)+c.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return c.inimigos.push(Le),Le}function sr(M=99,g=null){const N=Oa(),H=1+Math.min(3,Math.floor(Math.max(0,c.onda-1)/3)),ee=Math.max(1,Math.min(M,N==="inseto"?1+Math.floor(Math.random()*(H+1)):Math.round(H*(.75+Math.random()*.35)))),ae=g==null?Math.random()*Math.PI*2:g+(Math.random()-.5)*1.8,Te=215+(Math.random()<.35?Math.random()*230:Math.random()*60),Le=c.nx+Math.cos(ae)*Te,J=c.ny+Math.sin(ae)*Te;for(let ge=0;ge<ee;ge++)la(N,Le+(Math.random()-.5)*30,J+(Math.random()-.5)*30);return ee}function cr(M){for(let g=0;g<M;g++)sr(1)}function Qo(M){const g=[[c.cx-Gt/2-16,c.cy-Vt/2-16],[c.cx+Gt/2+16,c.cy-Vt/2-16],[c.cx-Gt/2-16,c.cy+Vt/2+16],[c.cx+Gt/2+16,c.cy+Vt/2+16]],[N,H]=g[Math.floor(Math.random()*g.length)];for(let ee=0;ee<M;ee++)la(Oa(),N+(Math.random()-.5)*22,H+(Math.random()-.5)*22)}function Yt(M,g,N,H,ee=50){if(!(c.parts.length>400))for(let ae=0;ae<N;ae++){const Te=Math.random()*Math.PI*2,Le=(.3+Math.random())*ee;c.parts.push({x:M,y:g,vx:Math.cos(Te)*Le,vy:Math.sin(Te)*Le,vida:.3+Math.random()*.3,cor:H[ae%H.length]})}}const cn=(M,g,N,H="#ffffff")=>c.textos.push({x:M,y:g,txt:N,cor:H,vida:1.1});function jo(){c.onda+=1;const M=1+Math.floor((c.onda-1)/3),g=c.onda%5===0;c.ondaDur=c.ondaT=13+Math.min(9,c.onda*1.1),c.ondaFila=g?5+c.onda:Math.min(34,6+c.onda*3),c.ondaSpawnT=.35,c.proxOnda=Math.max(25,34-Math.min(9,c.onda*.5))+Math.random()*4,c.ondaEstado=g||c.chefe?"chefe":"ativa",c.tremor=.25,M>c.fase&&(c.fase=M),g||(ti("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),g&&!c.chefe&&st()}function Mc(){c.chefe||(c.ondaEstado=c.ondaT>0?"ativa":"calma")}function _c(M){const g=Math.atan2(M.y-c.ny,M.x-c.nx);c.mira=g;const N=c.armasNivel.normal,H=c.projeteis,ee=.16;for(let ae=0;ae<H;ae++){const Te=g+(ae-(H-1)/2)*ee,Le=c.velTiro*(1+.12*(N-1)),J=Math.random()<c.critico;c.tiros.push({x:c.nx+Math.cos(Te)*7,y:c.ny+Math.sin(Te)*7,vx:Math.cos(Te)*Le,vy:Math.sin(Te)*Le,dano:c.dano*c.danoGlobal*(1+.28*(N-1))*(J?2:1),perf:c.perfura,critico:J,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const lr=()=>1+Math.floor(c.t/420);function In(M,g,N,H,ee=lr()){c.tirosInimigos.push({x:M,y:g,vx:Math.cos(N)*H,vy:Math.sin(N)*H,dano:ee,vida:7})}function Fa(M,g,N){const H=Math.random()*Math.PI*2,ee=16+Math.random()*22,ae={x:M,y:g,v:N,vx:Math.cos(H)*ee,vy:Math.sin(H)*ee,fase:Math.random()*6};c.cristais.push(ae),c.cristais.length>220&&(ae.v+=c.cristais.shift().v)}function C(M){if(c.invul>0||c.escudoT>0)return!1;if(c.barreira>0)return c.barreira-=1,c.invul=.7,c.ondas.push({x:c.nx,y:c.ny,r:0,max:28,v:90,cor:"#7dff9a"}),cn(c.nx,c.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0;const g=Math.min(.5,c.armadura*.06),N=Math.max(.25,M*(1-g));return c.hp=Math.max(0,c.hp-N),c.invul=.7,c.tremor=.2,c.combo>=3&&cn(c.nx,c.ny-14,"COMBO PERDIDO","#ff7a8a"),c.combo=0,c.comboT=0,n(110,.18,"sawtooth",.05),!0}function W(M,g){M.sumido>0||M.morto||(M.hp-=g,M.piscar=.08,M.hp>0&&le(M),M.hp<=0&&(M.morto=!0,oe(M)))}function oe(M){if(M.tipo==="chefe"){nt(M);return}if(M.tipo==="alien"){c.pendente="vitoria",Yt(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),c.flash=.35;return}const g=gi[M.tipo];c.kills+=1,c.alien||(c.combo+=1,c.comboT=1.8,c.melhorCombo=Math.max(c.melhorCombo,c.combo),[10,25,50,100].includes(c.combo)&&(cn(c.nx,c.ny-22,`COMBO x${c.combo}!`,"#ffe14a"),n(700+c.combo*4,.08,"square",.04),n(900+c.combo*4,.1,"square",.04,.08))),Fa(M.x,M.y,g.xp),Yt(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),de(M.tipo);const N={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<N&&(c.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),cn(M.x,M.y-8,"◆","#6fe8ff"));const H=c.inimigos.indexOf(M);H>=0&&c.inimigos.splice(H,1)}function j(){const M=Math.random()*Math.PI*2,g=230+Math.random()*120,N=Math.floor(Math.random()*3),H=[4,6,9][N];c.rochas.push({x:c.nx+Math.cos(M)*g,y:c.ny+Math.sin(M)*g,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:N,r:[8,10,13][N],hp:H,hpMax:H,piscar:0})}function K(M){M.hp-=1,M.piscar=.08,Yt(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&Ye(M)}function Ye(M){Yt(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const g=c.rochas.indexOf(M);g>=0&&c.rochas.splice(g,1),Math.random()<.9?c.itens.push({tipo:Pn(a2),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):Fa(M.x,M.y,3)}function je(M){const g=M.tipo;if(g==="ima")c.imaT=3,cn(c.nx,c.ny-12,"ÍMÃ!","#8be6ff");else if(g==="explosao")Xe(),cn(c.nx,c.ny-12,"BOOM!","#ffd23f");else if(g==="coracao")c.hp=Math.min(c.maxHp,c.hp+2),cn(c.nx,c.ny-12,"+VIDA","#ff7a8a");else if(g==="escudo")c.escudoT=6,cn(c.nx,c.ny-12,"ESCUDO!","#8bd3ff");else if(g==="turbo")c.turboT=8,cn(c.nx,c.ny-12,"TURBO!","#ffe14a");else if(ya[g]){const N=ya[g];g==="estrelaVermelha"?(c.buffDanoT<=0&&(c.danoGlobal*=1.5),c.buffDanoT=N.tempo):g==="estrelaAmarela"?c.buffVelT=N.tempo:g==="estrelaAzul"?c.escudoT=Math.max(c.escudoT,N.tempo):g==="estrelaRoxa"&&(c.buffXpT=N.tempo),cn(c.nx,c.ny-12,N.nome,N.cor),Yt(c.nx,c.ny,14,[N.cor,"#ffffff"],70),c.ondas.push({x:c.nx,y:c.ny,r:0,max:40,v:110,cor:N.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else g==="moedaEsp"&&(G.moedas+=1,c.moedasRun+=1,Ke(),cn(c.nx,c.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function Xe(){c.flash=.28,c.tremor=.35,c.ondas.push({x:c.nx,y:c.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+c.dano*3;for(const g of[...c.inimigos])sn(g)&&(W(g,g.tipo==="chefe"||g.tipo==="alien"?14:M),Yt(g.x,g.y,4,["#ffd23f","#ff7a3a"],60));c.tirosInimigos=c.tirosInimigos.filter(g=>!sn(g)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function tt(M,g,N,H=1.4){for(let ee=0;ee<N;ee++){const ae=Math.random()*Math.PI*2,Te=ee===0?Math.random()*14:28+Math.random()*55;let Le=c.nx+Math.cos(ae)*Te,J=c.ny+Math.sin(ae)*Te;c.alien&&(Le=Math.max(mt.x0+10,Math.min(mt.x1-10,Le)),J=Math.max(mt.y0+10,Math.min(mt.y1-10,J))),c.campos.push({x:Le,y:J,r:26,aviso:H+ee*.15,avisoMax:H+ee*.15,vida:4,tick:0,ox:M,oy:g})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function st(){c.chefeIdx=(c.chefeIdx+1+Math.floor(Math.random()*(Wa.length-1)))%Wa.length;const M=Math.random()<.5?-1:1,g=Math.round(150*(1+(c.fase-1)*.4+c.chefesVencidos*.35)*(1+c.t/300)),N=ca(["raios","investida","drift","minhoca"]).slice(0,2),H={tipo:"chefe",x:c.cx+M*(Gt/2+40),y:c.cy-30,hp:g,hpMax:g,vel:30,fase:0,piscar:0,v:c.fase-1+c.skinBase,b:c.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:N,rot:0};c.inimigos.push(H),c.chefe=H,V("chefe"),ti(`${Wa[c.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function Tt(M,g){const N=c.nx-M.x,H=c.ny-M.y,ee=Math.hypot(N,H)||1;if(M.fase+=g,M.movEsp){const F=M.movEsp;if(F.carga>0){if(F.carga-=g,M.piscar=Math.max(M.piscar,.04),F.carga<=0)if(F.tipo==="minhoca"){const Q=M.x,_e=M.y,rt=Math.random()*Math.PI*2,Ht=58+Math.random()*24;M.x=c.nx+Math.cos(rt)*Ht,M.y=c.ny+Math.sin(rt)*Ht,c.ondas.push({x:Q,y:_e,r:0,max:32,v:130,cor:"#a56bff"}),c.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),Yt(Q,_e,18,["#a56bff","#070a1a","#ffffff"],90),Yt(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),c.tremor=.28,M.movEsp=null}else F.ativo=F.tipo==="drift"?1.15:.72}else if(F.ativo>0){const Q=F.tipo==="drift"?175:235;M.x+=F.dx*Q*g,M.y+=F.dy*Q*g,F.ativo-=g,F.acc-=g,Yt(M.x-F.dx*15,M.y-F.dy*15,F.tipo==="drift"?2:1,F.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),F.tipo==="drift"&&F.acc<=0&&(F.acc=.16,c.campos.push({x:M.x-F.dx*12,y:M.y-F.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),F.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const ae=-H/ee,Te=N/ee,Le=Math.sin(c.ta*.8)*.3,J=M.vel+c.fase*3+Math.min(45,c.t/10);if(M.x+=(N/ee+ae*Le)*J*g,M.y+=(H/ee+Te*Le)*J*g,ee>300)return;const ge=1+Math.min(1,c.t/400);if(M.cdRajada-=g*ge,M.cdMira-=g*ge,M.cdBomba-=g*ge,M.cdRajada<=0){const F=12+Math.min(8,c.fase*2);for(let Q=0;Q<F;Q++)In(M.x,M.y,M.rot+Q*Math.PI*2/F,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-c.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const F=Math.atan2(H,N),Q=3+Math.min(2,c.fase-1);for(let _e=0;_e<Q;_e++)In(M.x,M.y,F+(_e-(Q-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const F=1+(Math.random()<.5?1:0)+(c.fase>=2&&Math.random()<.4?1:0);tt(M.x,M.y,F),M.cdBomba=Math.max(3,4.6-c.fase*.2)}const he=Rt.filter(F=>F.assinatura?M.kit.includes(F.id):c.t>=F.t);if(M.esp){const F=M.esp;if(F.t-=g,F.acc-=g,F.tipo==="espiral"&&F.acc<=0){F.acc=.09,F.ang+=.4;for(let Q=0;Q<2;Q++)In(M.x,M.y,F.ang+Q*Math.PI,62)}else if(F.tipo==="aneis"&&F.acc<=0){F.acc=.5;const Q=Math.random()*Math.PI*2;for(let _e=0;_e<24;_e++){const rt=_e*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(rt-Q),Math.cos(rt-Q)))>.45&&In(M.x,M.y,rt,58)}}F.t<=0&&(M.esp=null)}else if(he.length&&(M.cdEsp-=g*ge,M.cdEsp<=0)){const F=he[Math.floor(Math.random()*he.length)];if(cn(M.x,M.y-28,F.nome,"#ff7ab8"),F.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(F.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(F.id==="raios"){const Q=Math.atan2(H,N),_e=3+Math.min(2,he.length-2);for(let rt=0;rt<_e;rt++)c.raios.push({x:M.x,y:M.y,ang:Q+(rt-(_e-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(F.id==="investida"||F.id==="drift")M.movEsp={tipo:F.id,carga:F.id==="drift"?.7:.5,ativo:0,dx:N/ee,dy:H/ee,acc:0};else if(F.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(F.id==="invocar"){for(let Q=0;Q<4;Q++)la(Oa(),M.x+(Q-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-c.t/100)}}const Rt=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function nt(M){c.kills+=5,c.chefe=null,c.chefesVencidos+=1,V("normal");const g=c.inimigos.indexOf(M);g>=0&&c.inimigos.splice(g,1),Yt(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),c.flash=.3,c.tremor=.5;const N=4+Math.min(4,c.chefesVencidos);for(let H=0;H<N;H++)c.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let H=0;H<6;H++)Fa(M.x,M.y,6);c.tirosInimigos=[],c.campos=[],c.ondaEstado==="chefe"&&Mc(),ti("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function Ft(){const M=Math.random()*Math.PI*2,g=100+Math.random()*40;c.buraco={x:c.nx+Math.cos(M)*g,y:c.ny+Math.sin(M)*g,vida:28,r:22},ti("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function ln(M){const g=c.buraco;g.vida-=M;const N=g.x-c.nx,H=g.y-c.ny,ee=Math.hypot(N,H)||1;if(ee<70){const ae=38*(1-ee/70);c.nx+=N/ee*ae*M,c.ny+=H/ee*ae*M}if(ee<9){$t();return}g.vida<=0&&(c.buraco=null,c.proxBuraco=c.t+50+Math.random()*40)}function $t(){V("chefe"),c.alienIdx=(c.alienIdx+1+Math.floor(Math.random()*(Dr.length-1)))%Dr.length,c.mundoSalvo={nx:c.nx,ny:c.ny,cx:c.cx,cy:c.cy,inimigos:c.inimigos,tirosInimigos:c.tirosInimigos,campos:c.campos,hp:c.hp,buraco:c.buraco,chefe:c.chefe};const M=Math.round(95*(1+c.aliensVencidos*.6+(c.fase-1)*.25)*(1+c.t/300)),g={tipo:"alien",x:On,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:c.alienIdx,cd:1.7,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null,vx:0,vy:0,orbita:Math.random()<.5?-1:1,mudaOrbita:2+Math.random()*2,memoria:[],plano:[],leituraT:0};c.hp=c.maxHp,c.invul=1,c.inimigos=[g],c.tirosInimigos=[],c.campos=[],c.raios=[],c.tiros=[],c.misseis=[],c.chefe=null,c.alien=g,c.nx=On,c.ny=Vt-40,c.cx=On,c.cy=ga,c.flash=.5,ti(`${Dr[c.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function kt(M){const g=c.mundoSalvo;if(c.nx=g.nx,c.ny=g.ny,c.cx=g.cx,c.cy=g.cy,c.inimigos=g.inimigos,c.tirosInimigos=g.tirosInimigos,c.campos=g.campos,c.chefe=g.chefe,c.hp=g.hp,c.tiros=[],c.raios=[],c.misseis=[],c.alien=null,c.mundoSalvo=null,c.buraco=null,V(c.chefe?"chefe":"normal"),c.invul=2,c.proxBuraco=c.t+60+Math.random()*40,c.flash=.4,M){c.aliensVencidos+=1,c.imaT=Math.max(c.imaT,3),cn(c.nx,c.ny-12,"ÍMÃ!","#8be6ff");for(let H=0;H<6;H++)Fa(c.nx+(Math.random()-.5)*40,c.ny+(Math.random()-.5)*40,6);const N=Object.keys(sp).filter(H=>!c.poderes[H]);if(N.length&&c.slots.includes(null))Zi(c,N[Math.floor(Math.random()*N.length)]);else{const H=Object.keys(c.armasNivel).filter(ee=>c.armasNivel[ee]>0&&c.armasNivel[ee]<4);if(H.length){const ee=H[Math.floor(Math.random()*H.length)];c.armasNivel[ee]+=1,ti(`${ic[ee].nome} EVOLUIU PARA N${c.armasNivel[ee]}!`,3.2)}else c.hp=c.maxHp,ti("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else ti("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const xn={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},Ze={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},Mn=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function Pt(M){const g=c.alien,N=g.hp<g.hpMax*.5,H=g.hp<g.hpMax*.25,ee=1+Math.min(.6,c.t/500),ae=(H?2:N?1.6:1.25)*ee,Te=(H?1.5:N?1.35:1.2)*(1+(ee-1)*.6),Le=Ee=>Ee*Te;g.ta+=M*(H?2:N?1.7:1.3)*ee,g.fase+=M,g.sumido=Math.max(0,g.sumido-M),N&&!g.furiaDita&&(g.furiaDita=!0,ti("!! FÚRIA !!",1.6),c.flash=.2,n(80,.4,"sawtooth",.06)),H&&!g.desesperoDito&&(g.desesperoDito=!0,ti("!! DESESPERO !!",1.6),c.flash=.25,n(60,.5,"sawtooth",.07));const J=c.nx-g.x,ge=c.ny-g.y,he=Math.hypot(J,ge)||1,F=J/he,Q=ge/he,_e=-Q,rt=F,Ht=H?55:N?68:82,ht=(Ee,He)=>[Math.max(mt.x0+6,Math.min(mt.x1-6,Ee)),Math.max(mt.y0+6,Math.min(mt.y1-6,He))],_t=()=>ht(c.nx-F*Ht+_e*g.orbita*28,c.ny)[0],Ut=()=>ht(c.nx,c.ny-Q*Ht+rt*g.orbita*28)[1];if((g.estado==="espera"||g.estado==="carga"||g.estado==="salvas"||g.estado==="padrao")&&g.sumido<=0){g.mudaOrbita-=M,g.mudaOrbita<=0&&(g.mudaOrbita=2.2+Math.random()*2.8,Math.random()<.45&&(g.orbita*=-1));const Ee=he>Ht+13?1:he<Ht-16?-.7:.12,He=Math.sin(g.ta*1.7+g.fase*.4)*.22,it=(H?92:N?78:64)*ee*(g.estado==="carga"?.58:1),lt=(F*Ee+_e*(g.orbita*.58+He))*it,en=(Q*Ee+rt*(g.orbita*.58+He))*it,hn=Math.min(1,M*(H?5.5:3.6));g.vx+=(lt-g.vx)*hn,g.vy+=(en-g.vy)*hn,g.x+=g.vx*M,g.y+=g.vy*M;const[It,kn]=ht(g.x,g.y);(It!==g.x||kn!==g.y)&&(g.orbita*=-1,g.vx*=-.35,g.vy*=-.35),g.x=It,g.y=kn}const Dn=()=>{const Ee=c.movendo?H?34:N?27:20:0,He=c.nx+c.dirX*Ee,it=c.ny+c.dirY*Ee,lt=He-g.x,en=it-g.y,hn=Math.hypot(lt,en)||1;g.dirX=lt/hn,g.dirY=en/hn,g.dashMax=.75,g.estado="aviso",g.carga=H?.38:N?.52:.72},B=()=>{const Ee=c.nx<On;g.x=Ee?mt.x1-4:mt.x0+4,g.y=ht(0,c.ny)[1],g.dirX=Ee?-1:1,g.dirY=0,g.dashMax=1.15,g.estado="aviso",g.carga=H?.34:N?.48:.68},Fe=Ee=>{const He=c.movendo?c.dirX:F,it=c.movendo?c.dirY:Q,lt=-it,en=He;for(let hn=0;hn<Ee;hn++){const It=Math.floor(hn/2)+1,kn=hn%2?1:-1,vu=20+It*14,Mu=18+It*7,[Gp,Vp]=ht(c.nx+He*vu+lt*Mu*kn,c.ny+it*vu+en*Mu*kn),_u=1+hn*.08;c.campos.push({x:Gp,y:Vp,r:23,aviso:_u,avisoMax:_u,vida:4.2,tick:0,ox:g.x,oy:g.y})}if(N){const[hn,It]=ht(c.nx+He*50,c.ny+it*50);c.campos.push({x:hn,y:It,r:25,aviso:1.25,avisoMax:1.25,vida:4.2,tick:0,ox:g.x,oy:g.y})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)},$e=()=>{if(g.plano.length){const It=g.plano.shift();return g.memoria.push(It),g.memoria.length>4&&g.memoria.shift(),It}const Ee=Dr[g.v].pesos,He=([It,,kn])=>c.t>=kn||(Ee[It]||0)>0||H||N&&kn<=210,it=new Set(Mn.filter(He).map(([It])=>It));let lt;he<62?lt=["tentaculos","varredura","rajada","psiquico","investida","teleporte","corte","olhar"]:he>125?lt=["bombas","psiquico","cerco","chuva","investida","mira","raio","corte","foice","ovnis","invocar"]:lt=["mira","raio","investida","espiral","aneis","olhar","rajada","psiquico"];for(const It of Object.keys(Ee))it.has(It)&&!lt.includes(It)&&lt.push(It);c.campos.length>=7&&(lt=lt.filter(It=>It!=="bombas"&&It!=="psiquico")),c.tirosInimigos.length>=85&&(lt=lt.filter(It=>!["rajada","espiral","chuva","aneis","cerco"].includes(It))),lt=lt.filter(It=>it.has(It)&&!g.memoria.slice(-2).includes(It)),lt.length||(lt=[...it].filter(It=>!g.memoria.slice(-1).includes(It))),lt.length||(lt=["investida"]);const en=lt.map(It=>{let kn=1+(Ee[It]||0);return he<62&&["tentaculos","varredura","rajada","psiquico"].includes(It)&&(kn+=3),he>125&&["bombas","cerco","investida","corte"].includes(It)&&(kn+=3),N&&["investida","foice","olhar","raio"].includes(It)&&(kn+=2),H&&["foice","corte","varredura","tentaculos"].includes(It)&&(kn+=3),[It,kn]}),hn=Pn(en);return he>125&&["bombas","psiquico","cerco"].includes(hn)?g.plano.push(Math.random()<.55?"investida":"mira"):he<62&&["rajada","tentaculos"].includes(hn)&&g.plano.push(Math.random()<.5?"teleporte":"corte"),g.memoria.push(hn),g.memoria.length>4&&g.memoria.shift(),hn};if(g.estado==="espera")g.cd-=M*ae,g.cd<=0&&(g.ataque=$e(),g.estado="carga",g.carga=H?.2:N?.3:.46,cn(g.x,Math.max(12,g.y-24),xn[g.ataque]||"","#ff7ab8"));else if(g.estado==="carga"){if(g.carga-=M,g.carga<=0){const Ee=g.ataque;if(Ee==="rajada"){const He=H?30:N?24:18,it=Math.random()*6;for(let lt=0;lt<He;lt++)In(g.x,g.y,it+lt*Math.PI*2/He,Le(62));g.estado="espera",g.cd=2}else if(Ee==="mira")g.salvas=H?6:N?5:4,g.cdSalva=0,g.estado="salvas";else if(Ee==="teleporte")g.sumido=.6,g.estado="teleporte",g.carga=.6;else if(Ee==="invocar"){const He=c.inimigos.filter(it=>it.tipo==="inseto").length;for(let it=0;it<4&&He+it<10;it++)la("inseto",g.x+(it-1.5)*12,g.y+14);g.estado="espera",g.cd=1.8,n(300,.2,"triangle",.05)}else if(Ee==="ovnis"){const He=c.inimigos.filter(it=>it.tipo==="atirador").length;for(let it=0;it<2&&He+it<3;it++)la("atirador",g.x+(it?16:-16),g.y+14);g.estado="espera",g.cd=2,n(300,.25,"triangle",.05)}else if(Ee==="investida")g.combo=H?1:0,g.modo="investida",Dn();else if(Ee==="foice")g.combo=H?3:N?2:1,g.modo="investida",Dn();else if(Ee==="corte")g.combo=H?2:N?1:0,g.modo="corte",B();else if(Ee==="raio"){const He=Math.atan2(c.ny-g.y,c.nx-g.x),it=H?[He-.7,He-.35,He,He+.35,He+.7]:N?[He-.5,He,He+.5]:[He];for(const lt of it)c.raios.push({x:g.x,y:g.y+8,ang:lt,aviso:.9,vida:.55,tick:0,ligou:!1});g.estado="espera",g.cd=2.2,n(500,.3,"sine",.05)}else if(Ee==="olhar"){const He=Math.atan2(c.ny-g.y,c.nx-g.x),it=H?7:N?6:5;for(let lt=0;lt<it;lt++)c.raios.push({x:g.x,y:g.y+8,ang:He+(lt-(it-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});g.estado="espera",g.cd=2.4,n(520,.3,"sine",.05)}else if(Ee==="varredura"){const He=Math.random()<.5?1:-1,it=Math.atan2(c.ny-g.y,c.nx-g.x)-1*He;for(let lt=0;lt<(N?2:1);lt++)c.raios.push({x:g.x,y:g.y+8,ang:it+lt*Math.PI,giro:1.15*He*(H?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});g.estado="espera",g.cd=2.6,n(480,.3,"sine",.05)}else if(Ee==="tentaculos"){const He=Math.random()*6.28,it=Math.random()<.5?1:-1,lt=N?6:4;for(let en=0;en<lt;en++)c.raios.push({x:g.x,y:g.y+8,ang:He+en*Math.PI*2/lt,giro:.9*it,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});g.estado="espera",g.cd=3,n(420,.3,"sine",.05)}else if(Ee==="bombas")Fe(H?7:N?6:4),g.estado="espera",g.cd=H?.75:N?1.1:1.7;else if(Ee==="psiquico"){const He=Math.random()*6.28,it=N?6:5;for(let lt=0;lt<it;lt++){const[en,hn]=ht(c.nx+Math.cos(He+lt*Math.PI*2/it)*40,c.ny+Math.sin(He+lt*Math.PI*2/it)*40);c.campos.push({x:en,y:hn,r:24,aviso:1.1+lt*.08,avisoMax:1.1+lt*.08,vida:3.5,tick:0,ox:g.x,oy:g.y})}c.campos.push({x:c.nx,y:c.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:g.x,oy:g.y}),g.estado="espera",g.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else Ze[Ee]?(g.padrao={tipo:Ee,t:Ze[Ee]*(N?1.25:1),acc:0,ang:Math.random()*6.28},g.estado="padrao"):g.estado="espera";n(220,.12,"square",.05)}}else if(g.estado==="padrao"){const Ee=g.padrao;if(Ee.t-=M,Ee.acc-=M,Ee.acc<=0){if(Ee.tipo==="espiral"){Ee.acc=.075,Ee.ang+=.38;const He=H?4:N?3:2;for(let it=0;it<He;it++)In(g.x,g.y+6,Ee.ang+it*Math.PI*2/He,Le(58));re("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(Ee.tipo==="chuva"){Ee.acc=H?.45:.6;const He=[mt.x0+24+Math.random()*(mt.x1-mt.x0-48)];N&&He.push(mt.x0+24+Math.random()*(mt.x1-mt.x0-48));for(let it=mt.x0+4;it<=mt.x1-4;it+=13)He.every(lt=>Math.abs(it-lt)>19)&&In(it,mt.y0,Math.PI/2,Le(58));n(240,.08,"square",.03)}else if(Ee.tipo==="aneis"){Ee.acc=.55;const He=24,it=Math.random()*Math.PI*2;for(let lt=0;lt<He;lt++){const en=lt*Math.PI*2/He;Math.abs(Math.atan2(Math.sin(en-it),Math.cos(en-it)))>.42&&In(g.x,g.y,en,Le(55))}n(280,.08,"triangle",.03)}else if(Ee.tipo==="cerco"){Ee.acc=H?.08:.12;const He=Math.random()<.5?mt.x0:mt.x1,it=mt.y0+Math.random()*(mt.y1-mt.y0);In(He,it,Math.atan2(c.ny-it,c.nx-He)+(Math.random()-.5)*.3,Le(72)),re("cerco",90,()=>n(360,.04,"square",.02))}}Ee.t<=0&&(g.estado="espera",g.cd=1.8)}else if(g.estado==="salvas"){if(g.cdSalva-=M,g.cdSalva<=0){const Ee=Math.atan2(c.ny-g.y,c.nx-g.x);for(let He=-1;He<=1;He++)In(g.x,g.y+12,Ee+He*.22,Le(95));g.salvas-=1,g.cdSalva=.26,n(260,.06,"square",.04),g.salvas<=0&&(g.estado="espera",g.cd=1.6)}}else if(g.estado==="aviso")g.carga-=M,g.x+=(Math.random()-.5)*1.6,g.y+=(Math.random()-.5)*1.6,g.carga<=0&&(g.estado="investida",g.dashT=g.dashMax*(N?1.1:1),n(150,.25,"sawtooth",.06));else if(g.estado==="investida"){const Ee=H?400:N?350:310;g.x+=g.dirX*Ee*M,g.y+=g.dirY*Ee*M,g.dashT-=M;const He=g.x<mt.x0||g.x>mt.x1||g.y<mt.y0||g.y>mt.y1;g.x=Math.max(mt.x0,Math.min(mt.x1,g.x)),g.y=Math.max(mt.y0-10,Math.min(mt.y1,g.y)),(g.dashT<=0||He)&&(c.tremor=Math.max(c.tremor,He?.2:0),g.combo>0?(g.combo-=1,g.modo==="corte"?B():Dn(),g.carga=.4):g.estado="volta")}else if(g.estado==="volta"){const Ee=_t(),He=Ut(),it=Ee-g.x,lt=He-g.y,en=Math.hypot(it,lt)||1;g.x+=it/en*Math.min(en,260*M),g.y+=lt/en*Math.min(en,260*M),en<5&&(g.estado="espera",g.cd=1.2)}else if(g.estado==="teleporte"&&(g.carga-=M,g.carga<=0)){const Ee=Math.atan2(g.y-c.ny,g.x-c.nx)+Math.PI+(Math.random()-.5)*1.2,He=he<70?105:72;[g.x,g.y]=ht(c.nx+Math.cos(Ee)*He,c.ny+Math.sin(Ee)*He),g.sumido=0,g.vx=g.vy=0;const it=H?16:12;for(let lt=0;lt<it;lt++)In(g.x,g.y,lt*Math.PI*2/it,Le(70));g.estado="espera",g.cd=1.3,n(440,.1,"square",.05)}}function Vn(M){let g=(qe.has("ArrowRight")||qe.has("KeyD")?1:0)-(qe.has("ArrowLeft")||qe.has("KeyA")?1:0),N=(qe.has("ArrowDown")||qe.has("KeyS")?1:0)-(qe.has("ArrowUp")||qe.has("KeyW")?1:0);if(!g&&!N&&dt.ativo)if(dt.toque)g=dt.dx/18,N=dt.dy/18;else{const ee=dt.x-(c.nx-c.cx+Gt/2),ae=dt.y-(c.ny-c.cy+Vt/2),Te=Math.hypot(ee,ae);Te>3&&(g=ee/Te,N=ae/Te)}const H=Math.hypot(g,N);if(c.movendo=H>.08,H>.08){c.dirX=g/H,c.dirY=N/H;const ee=c.arma>=2?c.slots[c.arma-2]:"normal",ae=c.armasNivel.turbo||1,Te=c.armasNivel.drift||1,Le=ee==="turbo"&&c.boostE>0?1.55+.18*(ae-1):1,J=c.driftT>0?1.75+.15*(Te-1):1,ge=ee==="salto"&&c.saltoCarga>0?.32:1,he=c.turboT>0?1.35:1,F=Math.min(1,H),Q=c.velNave*Le*J*ge*he*(c.buffVelT>0?1.5:1)*(c.alien?1:c.lentidao||1);c.nx+=c.dirX*Q*M*F,c.ny+=c.dirY*Q*M*F}if(c.alien)c.nx=Math.max(mt.x0,Math.min(mt.x1,c.nx)),c.ny=Math.max(mt.y0,Math.min(mt.y1,c.ny)),c.cx=On,c.cy=ga;else{const ee=Math.min(1,M*5);c.cx+=(c.nx-c.cx)*ee,c.cy+=(c.ny-c.cy)*ee}}function ni(M){c.proxOnda-=M,c.proxOnda<=0&&c.ondaFila<=0&&jo(),c.ondaT=Math.max(0,c.ondaT-M),c.ondaEstado=c.chefe?"chefe":c.ondaT>0||c.ondaFila>0?"ativa":"calma";const g=Math.min(54,12+3*fi());if(c.ondaFila>0&&(c.ondaSpawnT-=M,c.ondaSpawnT<=0)){const J=Math.min(c.ondaFila,Math.min(4,1+Math.floor((c.onda-1)/2)),Math.max(0,g-c.inimigos.length));J>0&&(Qo(J),c.ondaFila-=J),c.ondaSpawnT=J>0?Math.max(.72,1.45-c.onda*.045)+Math.random()*.38:.5}const N=.24+Math.min(.72,c.t*.0014)+.015*c.nivel;c.spawnAcc+=M*N*(c.ondaEstado==="chefe"?.45:1),(!Number.isFinite(c.spawnAcc)||c.spawnAcc<0)&&(c.spawnAcc=0);let H=0;for(;c.spawnAcc>=1&&H<3;)c.spawnAcc-=1,H+=1,c.inimigos.length<g&&sr(2);c.ultX==null&&(c.ultX=c.nx,c.ultY=c.ny,c.andou=0,c.angAndar=0);const ee=c.nx-c.ultX,ae=c.ny-c.ultY,Te=Math.hypot(ee,ae);for(c.ultX=c.nx,c.ultY=c.ny,Te>0&&Te<60&&(c.andou+=Te,c.angAndar=Math.atan2(ae,ee));c.andou>=170;)c.andou-=170,c.inimigos.length<g&&sr(99,c.angAndar);if(c.ondaT<=0&&!c.chefe&&!c.buraco&&c.t>=c.proxBuraco&&Ft(),c.proxEstrela-=M,c.proxEstrela<=0&&(c.proxEstrela=16+Math.random()*14,c.itens.filter(J=>ya[J.tipo]).length<2)){const J=Math.random()*Math.PI*2,ge=70+Math.random()*90;c.itens.push({tipo:Pn(i2),x:c.nx+Math.cos(J)*ge,y:c.ny+Math.sin(J)*ge,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(c.buraco&&(ln(M),c.alien))return;c.rochas.length<3&&Math.random()<M*.12&&j();for(let J=c.rochas.length-1;J>=0;J--){const ge=c.rochas[J];ge.x+=ge.vx*M,ge.y+=ge.vy*M,ge.piscar=Math.max(0,ge.piscar-M);const he=c.nx-ge.x,F=c.ny-ge.y,Q=Math.hypot(he,F)||1;if(Q>650){c.rochas.splice(J,1);continue}Q<ge.r+xa&&(c.nx+=he/Q*(ge.r+xa-Q),c.ny+=F/Q*(ge.r+xa-Q))}for(const J of[...c.inimigos]){if(J.tipo==="chefe"){Tt(J,M),u.empurrar(J,gi.chefe.raio,{x:c.nx,y:c.ny},30*M);continue}J.buffT=Math.max(0,(J.buffT||0)-M),J.suporteFx=Math.max(0,(J.suporteFx||0)-M);const ge=c.nx-J.x,he=c.ny-J.y,F=Math.hypot(ge,he)||1,Q=J.buffT>0?1.35:1;let _e=ge/F*J.vel*Q,rt=he/F*J.vel*Q;if(J.tipo==="morcego"){const ht=Math.sin(c.ta*5+J.fase)*28;_e+=-he/F*ht,rt+=ge/F*ht}else if(J.tipo==="inseto"){const ht=Math.sin(c.ta*9+J.fase)*22;_e+=-he/F*ht,rt+=ge/F*ht}else if(J.tipo==="atirador"){const ht=F>92?1:.22,_t=Math.sin(c.ta*1.2+J.fase)*.35;_e=(ge/F*ht+-he/F*_t)*J.vel*Q,rt=(he/F*ht+ge/F*_t)*J.vel*Q,J.cd-=M*Q,J.cd<=0&&sn(J)&&(In(J.x,J.y,Math.atan2(he,ge),74,lr()*(J.buffT>0?1.5:1)),J.cd=1.8+Math.random()*.9)}else if(J.tipo==="sentinela"){const ht=F>105?1:.2,_t=Math.atan2(he,ge);if(_e=(ge/F*ht+-he/F*Math.sin(c.ta+J.fase)*.28)*J.vel*Q,rt=(he/F*ht+ge/F*Math.sin(c.ta+J.fase)*.28)*J.vel*Q,J.cd-=M*Q,J.cd<=0&&sn(J)){for(const Ut of[-.18,0,.18])In(J.x,J.y,_t+Ut,82,lr()*(J.buffT>0?1.5:1));J.cd=2.5+Math.random()*.8}}else if(J.tipo==="bombardeiro"){const ht=F>120?.9:.18;_e=ge/F*ht*J.vel*Q,rt=he/F*ht*J.vel*Q,J.cd-=M*Q,J.cd<=0&&sn(J)&&(tt(J.x,J.y,J.buffT>0?2:1,1.15),J.cd=4+Math.random()*1.2)}else if(J.tipo==="fulminante"){const ht=F>125?.9:.18,_t=Math.atan2(he,ge);_e=(ge/F*ht+-he/F*Math.sin(c.ta*1.7+J.fase)*.28)*J.vel*Q,rt=(he/F*ht+ge/F*Math.sin(c.ta*1.7+J.fase)*.28)*J.vel*Q,J.cd-=M*Q,J.cd<=0&&sn(J)&&(c.raios.push({x:J.x,y:J.y,ang:_t,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:lr(),dono:J}),J.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if(J.tipo==="curandeiro"){const ht=c.inimigos.filter(_t=>_t!==J&&!_t.morto&&_t.hp<_t.hpMax&&_t.tipo!=="chefe").sort((_t,Ut)=>Math.hypot(_t.x-J.x,_t.y-J.y)-Math.hypot(Ut.x-J.x,Ut.y-J.y))[0];if(_e=ge/F*J.vel*.68,rt=he/F*J.vel*.68,ht){const _t=ht.x-J.x,Ut=ht.y-J.y,Ln=Math.hypot(_t,Ut)||1;_e+=_t/Ln*J.vel*.32,rt+=Ut/Ln*J.vel*.32}if(J.cd-=M,J.cd<=0&&ht&&Math.hypot(ht.x-J.x,ht.y-J.y)<Us){const _t=Math.max(1,Math.ceil(ht.hpMax*.22));ht.hp=Math.min(ht.hpMax,ht.hp+_t),ht.suporteFx=.8,J.suporteFx=.8,cn(ht.x,ht.y-8,`+${_t}`,"#7dff9a"),Yt(ht.x,ht.y,5,["#7dff9a","#ffffff"],35),J.cd=2.7+Math.random()*.8}}else if(J.tipo==="amplificador"){const ht=c.inimigos.filter(Ut=>Ut!==J&&!Ut.morto&&Ut.tipo!=="chefe"&&Math.hypot(Ut.x-J.x,Ut.y-J.y)<Us);for(const Ut of ht)Ut.buffT=Math.max(Ut.buffT||0,.4);ht.length&&(J.suporteFx=.25);const _t=F>85?.72:.2;_e=ge/F*_t*J.vel,rt=he/F*_t*J.vel}const Ht=u.fatorLento(J.x,J.y);J.x+=_e*M*Ht,J.y+=rt*M*Ht,u.empurrar(J,gi[J.tipo].raio,{x:c.nx,y:c.ny},J.vel*M*.9),J.piscar=Math.max(0,J.piscar-M)}c.inimigos=c.inimigos.filter(J=>J.tipo==="chefe"||Math.hypot(J.x-c.nx,J.y-c.ny)<520);const Le={x:c.nx,y:c.ny};u.empurrar(Le,xa),c.nx=Le.x,c.ny=Le.y,c.lentidao=u.fatorLento(c.nx,c.ny);for(let J=c.itens.length-1;J>=0;J--){const ge=c.itens[J];ge.vida-=M;const he=c.nx-ge.x,F=c.ny-ge.y,Q=Math.hypot(he,F)||1;if(ge.tipo==="moedaEsp"&&Q<c.raioIma*1.3&&(ge.x+=he/Q*90*M,ge.y+=F/Q*90*M),Q<xa+8){je(ge),c.itens.splice(J,1);continue}ge.vida<=0&&c.itens.splice(J,1)}for(let J=c.cristais.length-1;J>=0;J--){const ge=c.cristais[J];ge.x+=ge.vx*M,ge.y+=ge.vy*M;const he=Math.pow(.05,M);ge.vx*=he,ge.vy*=he;const F=c.nx-ge.x,Q=c.ny-ge.y,_e=Math.hypot(F,Q)||1;if(c.imaT>0)ge.x+=F/_e*280*M,ge.y+=Q/_e*280*M;else if(_e<c.raioIma){const rt=70+(c.raioIma-_e)*4;ge.x+=F/_e*rt*M,ge.y+=Q/_e*rt*M}_e<xa+c.raioPegar&&(c.xp+=ge.v*c.bonusXp*(c.buffXpT>0?2:1),c.cristais.splice(J,1),Yt(ge.x,ge.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(ge.v,6)*60,.05,"square",.03))}}function ui(){let M=null,g=1/0;for(const ee of c.inimigos){if(ee.sumido>0||!sn(ee))continue;const ae=Math.hypot(ee.x-c.nx,ee.y-c.ny);ae<g&&(g=ae,M=ee)}let N=null,H=120;for(const ee of c.rochas){if(!sn(ee))continue;const ae=Math.hypot(ee.x-c.nx,ee.y-c.ny);ae<H&&(H=ae,N=ee)}return N&&(!M||g>45)?N:M}const Vi=M=>M.r||gi[M.tipo].raio;function zt(M){te!=="jogando"||!c||M>=2&&!c.slots[M-2]||c.arma!==M&&(c.arma=M,n(M===2?440:600,.05,"square",.03))}function jt(){if(c.arma<2||c.slots[c.arma-2]!=="orbes")return[];const M=1+c.armasNivel.orbes,g=20+M*1.5;return Array.from({length:M},(N,H)=>({x:c.nx+Math.cos(c.orbeAng+H*Math.PI*2/M)*g,y:c.ny+Math.sin(c.orbeAng+H*Math.PI*2/M)*g}))}function Ei(M,g){const N=c.armasNivel.missil,H=24*(1+.16*(N-1)),ee=(5+c.dano*2)*c.danoGlobal*(1+.32*(N-1));c.ondas.push({x:M,y:g,r:0,max:H,v:170,cor:"#ff9a3a"}),Yt(M,g,14,["#ffd23f","#ff7a3a","#ffffff"],80),c.tremor=Math.max(c.tremor,.1);for(const ae of[...c.inimigos])!(ae.sumido>0)&&Math.hypot(ae.x-M,ae.y-g)<H+gi[ae.tipo].raio&&W(ae,ee);for(const ae of[...c.rochas])if(Math.hypot(ae.x-M,ae.y-g)<H+ae.r)for(let Te=0;Te<3&&c.rochas.includes(ae);Te++)K(ae);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function qt(M){const g=c.arma>=2?c.slots[c.arma-2]:"normal",N=c.recM*c.recargaGlobal;c.laser=null;let H=!1;if(g==="laser"&&!c.laserQuente){const he=c.armasNivel.laser,F=ui(),Q=c.laserAlc*(1+.18*(he-1));if(F&&Math.hypot(F.x-c.nx,F.y-c.ny)<Q+Vi(F)){H=!0;const _e=Math.atan2(F.y-c.ny,F.x-c.nx),rt=Math.cos(_e),Ht=Math.sin(_e);if(c.mira=_e,c.laser={ang:_e,len:Q},c.laserE-=M*1.15,c.laserE<=0&&(c.laserE=0,c.laserQuente=!0,n(180,.2,"sawtooth",.04)),c.laserTick-=M,c.laserTick<=0){c.laserTick=.1,c.laserN+=1;const ht=c.laserDano*(.5+.5*c.dano)*c.danoGlobal*(1+.3*(he-1))*.1;for(const _t of[...c.inimigos]){const Ut=_t.x-c.nx,Ln=_t.y-c.ny,Dn=Ut*rt+Ln*Ht,B=Math.abs(-Ut*Ht+Ln*rt),Fe=gi[_t.tipo].raio;!(_t.sumido>0)&&Dn>0&&Dn<Q+Fe&&B<Fe+3&&(W(_t,ht),Math.random()<.4&&Yt(_t.x,_t.y,1,["#8bd3ff","#ffffff"],40))}if(c.laserN%3===0)for(const _t of[...c.rochas]){const Ut=_t.x-c.nx,Ln=_t.y-c.ny,Dn=Ut*rt+Ln*Ht,B=Math.abs(-Ut*Ht+Ln*rt);Dn>0&&Dn<Q+_t.r&&B<_t.r+2&&K(_t)}re("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!H){const he=Math.max(1,c.armasNivel.laser),F=c.laserMax*(1+.18*(he-1));c.laserE=Math.min(F,c.laserE+M*F*.13*N*(1+.18*(he-1))),c.laserQuente&&c.laserE>=c.laserMax*.6&&(c.laserQuente=!1)}if(g==="missil"&&(c.missilT-=M,c.missilT<=0)){const he=[...c.inimigos.filter(F=>!(F.sumido>0)&&sn(F)),...c.rochas.filter(sn)].map(F=>({o:F,d:Math.hypot(F.x-c.nx,F.y-c.ny)})).filter(F=>F.d<135).sort((F,Q)=>F.d-Q.d);if(he.length){const F=c.armasNivel.missil,Q=1+(F>=3?1:0)+(F>=4?1:0);for(let _e=0;_e<Q;_e++){const rt=he[_e%he.length].o;c.misseis.push({x:c.nx,y:c.ny,ang:Math.atan2(rt.y-c.ny,rt.x-c.nx)+(_e-(Q-1)/2)*.9,alvo:rt,vida:2,v:70})}c.missilMax=3.6/(N*(1+.22*(F-1))),c.missilT=c.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else c.missilT=0}for(let he=c.misseis.length-1;he>=0;he--){const F=c.misseis[he],Q=F.alvo,_e=Q&&Q.hp>0&&!Q.morto&&(c.inimigos.includes(Q)||c.rochas.includes(Q));if(_e){let Ht=Math.atan2(Q.y-F.y,Q.x-F.x)-F.ang;Ht=Math.atan2(Math.sin(Ht),Math.cos(Ht)),F.ang+=Math.max(-6*M,Math.min(6*M,Ht))}F.v=Math.min(150,F.v+160*M),F.x+=Math.cos(F.ang)*F.v*M,F.y+=Math.sin(F.ang)*F.v*M,F.vida-=M,Math.random()<.6&&c.parts.push({x:F.x,y:F.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(_e&&Math.hypot(Q.x-F.x,Q.y-F.y)<Vi(Q)+3||F.vida<=0)&&(c.misseis.splice(he,1),Ei(F.x,F.y))}if(g==="orbes"){const he=c.armasNivel.orbes;c.orbeAng+=M*3.2*(1+.18*(he-1))*c.recargaGlobal;const F=(2+c.dano*.5)*c.danoGlobal*(1+.32*(he-1));for(const Q of jt()){for(const _e of[...c.inimigos])_e.sumido>0||(_e.cdOrbe=(_e.cdOrbe||0)-M,_e.cdOrbe<=0&&Math.hypot(Q.x-_e.x,Q.y-_e.y)<gi[_e.tipo].raio+4&&(W(_e,F),_e.cdOrbe=.35,Yt(_e.x,_e.y,2,["#ff3bd4","#ffffff"],40)));for(const _e of[...c.rochas])_e.cdOrbe=(_e.cdOrbe||0)-M,_e.cdOrbe<=0&&Math.hypot(Q.x-_e.x,Q.y-_e.y)<_e.r+4&&(K(_e),_e.cdOrbe=.5)}}const ee=Math.max(1,c.armasNivel.turbo),ae=3+.75*(ee-1);c.boostMax=ae,g==="turbo"&&c.movendo&&c.boostE>0?(c.boostE=Math.max(0,c.boostE-M),Math.random()<.45&&c.parts.push({x:c.nx-c.dirX*7,y:c.ny-c.dirY*7,vx:-c.dirX*20,vy:-c.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):c.boostE=Math.min(ae,c.boostE+M*.5*N*(1+.12*(ee-1)));const Te=Math.max(1,c.armasNivel.cura);if(c.curaMax=Math.max(4.5,(11-1.6*(Te-1))/N),c.curaCd=Math.max(0,c.curaCd-M),g==="cura"&&c.curaCd<=0&&c.hp<c.maxHp){const he=1+(Te>=3?1:0)+(Te>=4?1:0);c.hp=Math.min(c.maxHp,c.hp+he),c.curaCd=c.curaMax,c.ondas.push({x:c.nx,y:c.ny,r:0,max:30,v:80,cor:"#7dff9a"}),Yt(c.nx,c.ny,12,["#7dff9a","#ffffff"],45),cn(c.nx,c.ny-13,`+${he} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const Le=Math.max(1,c.armasNivel.escudo);c.escudoMax=Math.max(6,(13-1.3*(Le-1))/N),c.escudoCd=Math.max(0,c.escudoCd-M),g==="escudo"&&c.escudoCd<=0&&c.escudoT<=0&&(c.escudoT=2.4+.75*(Le-1),c.escudoCd=c.escudoMax,c.ondas.push({x:c.nx,y:c.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),cn(c.nx,c.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const J=Math.max(1,c.armasNivel.salto);if(c.saltoMax=Math.max(3.5,(8-.85*(J-1))/N),c.saltoCd=Math.max(0,c.saltoCd-M),c.saltoCargaMax=Math.max(.42,.82-.1*(J-1)),g!=="salto"||!c.movendo?c.saltoCarga=0:c.saltoCd<=0&&c.saltoCarga<=0&&(c.saltoCarga=c.saltoCargaMax,n(180,.16,"sine",.04)),g==="salto"&&c.saltoCarga>0&&(c.saltoCarga-=M,Math.random()<.55&&c.parts.push({x:c.nx+(Math.random()-.5)*18,y:c.ny+(Math.random()-.5)*18,vx:-c.dirX*8,vy:-c.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),c.saltoCarga<=0)){const he=c.nx,F=c.ny,Q=58+18*J;c.nx+=c.dirX*Q,c.ny+=c.dirY*Q,c.alien&&(c.nx=Math.max(mt.x0,Math.min(mt.x1,c.nx)),c.ny=Math.max(mt.y0,Math.min(mt.y1,c.ny))),c.saltoCd=c.saltoMax,c.invul=Math.max(c.invul,.35),c.ondas.push({x:he,y:F,r:0,max:24,v:120,cor:"#a56bff"}),c.ondas.push({x:c.nx,y:c.ny,r:0,max:24,v:120,cor:"#a56bff"}),Yt(he,F,14,["#a56bff","#ffffff"],60),Yt(c.nx,c.ny,14,["#a56bff","#ffffff"],60),c.flash=Math.max(c.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const ge=Math.max(1,c.armasNivel.drift);c.driftMax=Math.max(3.2,(7-.7*(ge-1))/N),c.driftCd=Math.max(0,c.driftCd-M),c.driftT=Math.max(0,c.driftT-M),g==="drift"&&c.driftCd<=0&&c.movendo&&c.driftT<=0&&(c.driftT=.75+.22*ge,c.driftCd=c.driftMax,c.driftAcc=0,c.tremor=Math.max(c.tremor,.12),n(130,.22,"sawtooth",.05)),c.driftT>0&&c.movendo&&(c.driftAcc-=M,c.driftAcc<=0&&(c.driftAcc=.055,c.trilhasFogo.push({x:c.nx-c.dirX*7,y:c.ny-c.dirY*7,vida:1+.12*ge,max:1+.12*ge,nv:ge})));for(const he of c.inimigos)he.cdFogo=Math.max(0,(he.cdFogo||0)-M);for(let he=c.trilhasFogo.length-1;he>=0;he--){const F=c.trilhasFogo[he];F.vida-=M;for(const Q of[...c.inimigos])!(Q.sumido>0)&&Q.cdFogo<=0&&Math.hypot(Q.x-F.x,Q.y-F.y)<gi[Q.tipo].raio+7&&(W(Q,(1.2+F.nv*.75)*c.danoGlobal),Q.cdFogo=.22);F.vida<=0&&c.trilhasFogo.splice(he,1)}}function Ai(M){for(let g=c.tiros.length-1;g>=0;g--){const N=c.tiros[g];if(N.x+=N.vx*M,N.y+=N.vy*M,Math.hypot(N.x-c.nx,N.y-c.ny)>260){c.tiros.splice(g,1);continue}let H=!1;for(const ee of[...c.inimigos])if(!(N.acertou.has(ee)||ee.sumido>0)&&Math.hypot(N.x-ee.x,N.y-ee.y)<gi[ee.tipo].raio+2)if(N.acertou.add(ee),Yt(N.x,N.y,2,["#ffe14a","#ffffff"],40),W(ee,N.dano),N.perf>0)N.perf-=1;else{H=!0;break}if(!H){for(const ee of[...c.rochas])if(!N.acertou.has(ee)&&Math.hypot(N.x-ee.x,N.y-ee.y)<ee.r+2)if(N.acertou.add(ee),K(ee),N.perf>0)N.perf-=1;else{H=!0;break}}H&&c.tiros.splice(g,1)}}function fa(M){for(let g=c.tirosInimigos.length-1;g>=0;g--){const N=c.tirosInimigos[g];if(N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0||Math.hypot(N.x-c.nx,N.y-c.ny)>420||c.alien&&(N.x<mt.x0-40||N.x>mt.x1+40||N.y<mt.y0-40||N.y>mt.y1+40)){c.tirosInimigos.splice(g,1);continue}Math.hypot(N.x-c.nx,N.y-c.ny)<xa+1.5&&(C(N.dano),Yt(N.x,N.y,4,["#ff5a8a","#ffffff"],50),c.tirosInimigos.splice(g,1))}for(let g=c.raios.length-1;g>=0;g--){const N=c.raios[g];if(N.dono){if(N.dono.morto){c.raios.splice(g,1);continue}N.x=N.dono.x,N.y=N.dono.y}if(N.aviso>0){N.aviso-=M;continue}N.ligou||(N.ligou=!0,c.tremor=Math.max(c.tremor,.2),n(110,.4,"sawtooth",.06)),N.vida-=M,N.tick-=M,N.giro&&(N.ang+=N.giro*M),N.seg&&c.alien&&(N.x=c.alien.x,N.y=c.alien.y+8);const H=c.nx-N.x,ee=c.ny-N.y,ae=H*Math.cos(N.ang)+ee*Math.sin(N.ang),Te=Math.abs(-H*Math.sin(N.ang)+ee*Math.cos(N.ang));ae>0&&ae<400&&Te<8&&N.tick<=0&&(C(N.dano||1),N.tick=.3),N.vida<=0&&c.raios.splice(g,1)}for(let g=c.campos.length-1;g>=0;g--){const N=c.campos[g];if(N.aviso>0){N.aviso-=M,N.aviso<=0&&(c.tremor=Math.max(c.tremor,.15),n(100,.2,"sawtooth",.05));continue}N.vida-=M,N.tick-=M,Math.hypot(c.nx-N.x,c.ny-N.y)<N.r+3&&N.tick<=0&&(C(1),N.tick=.5),N.vida<=0&&c.campos.splice(g,1)}}function es(){for(const M of[...c.inimigos]){const g=gi[M.tipo];if(Math.hypot(M.x-c.nx,M.y-c.ny)>=g.raio+xa||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(C(g.dano)){const ee=c.nx-M.x,ae=c.ny-M.y,Te=Math.hypot(ee,ae)||1;c.nx+=ee/Te*18,c.ny+=ae/Te*18}continue}if(g.dano<=0){const ee=M.x-c.nx,ae=M.y-c.ny,Te=Math.hypot(ee,ae)||1;M.x+=ee/Te*8,M.y+=ae/Te*8;continue}Yt(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const H=c.inimigos.indexOf(M);H>=0&&c.inimigos.splice(H,1),C(g.dano)}}function wp(M){if(c.ta+=M,c.alien||(c.t+=M),c.invul=Math.max(0,c.invul-M),c.tremor=Math.max(0,c.tremor-M),c.flash=Math.max(0,c.flash-M),c.imaT=Math.max(0,c.imaT-M),c.turboT=Math.max(0,c.turboT-M),c.escudoT=Math.max(0,c.escudoT-M),c.buffVelT=Math.max(0,c.buffVelT-M),c.buffXpT=Math.max(0,c.buffXpT-M),c.buffDanoT>0&&(c.buffDanoT-=M,c.buffDanoT<=0&&(c.buffDanoT=0,c.danoGlobal/=1.5)),c.aviso=Math.max(0,c.aviso-M),c.comboT>0&&(c.comboT-=M,c.comboT<=0&&(c.combo=0)),c.upgFx&&(c.upgFx.t-=M,c.upgFx.t<=0&&(c.upgFx=null)),Vn(M),c.alien?Pt(M):ni(M),c.recarga-=M,c.arma===1&&c.recarga<=0){const g=ui();g?(_c(g),c.recarga=1/(c.cadencia*c.recargaGlobal*(c.turboT>0?2:1))):c.recarga=.05}c.barreira<c.barreiraMax&&(c.barreiraT+=M,c.barreiraT>=c.tempoBarreira&&(c.barreira+=1,c.barreiraT=0,cn(c.nx,c.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),qt(M),Ai(M),fa(M),es();for(const g of c.ondas)g.r+=g.v*M;c.ondas=c.ondas.filter(g=>g.r<g.max);for(let g=c.parts.length-1;g>=0;g--){const N=c.parts[g];N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0&&c.parts.splice(g,1)}for(let g=c.textos.length-1;g>=0;g--){const N=c.textos[g];N.y-=14*M,N.vida-=M,N.vida<=0&&c.textos.splice(g,1)}for(const g of c.inimigos)g.piscar=Math.max(0,(g.piscar||0)-M);if(c.hp<=0&&!c.pendente)if(c.alien)c.pendente="expulso";else{Lp();return}if(c.pendente){const g=c.pendente;c.pendente=null,kt(g==="vitoria");return}c.xp>=c.xpProx&&Cp()}let no=[];const cu=M=>M.nivel?M.nivel(c):c.niveis[M.id]|0;function Rp(M,g=3){const N=[...M],H=[],ee=Le=>{const J=F=>(typeof F.peso=="function"?F.peso(c):F.peso)||1,ge=Le.reduce((F,Q)=>F+J(Q),0);let he=Math.random()*ge;for(const F of Le)if(he-=J(F),he<=0)return F;return Le[Le.length-1]},ae=new Set(["dano_geral","reparo","armadura","motor","recarga_geral"]),Te=N.filter(Le=>ae.has(Le.id));if(Te.length&&g>0){const Le=ee(Te),J=N.indexOf(Le);H.push(Le),N.splice(J,1)}for(;N.length&&H.length<g;){const Le=F=>(typeof F.peso=="function"?F.peso(c):F.peso)||1,J=N.reduce((F,Q)=>F+Le(Q),0);let ge=Math.random()*J,he=0;for(let F=0;F<N.length;F++)if(ge-=Le(N[F]),ge<=0){he=F;break}H.push(N.splice(he,1)[0])}return H}function Cp(){c.xp-=c.xpProx,c.nivel+=1,c.xpProx=Math.round(c.xpProx*1.3+2);const M=t2.filter(Te=>cu(Te)<Te.max&&(!Te.requer||Te.requer(c)));if(no=Rp(M),!no.length)return;te="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),Ie.className="arc-painel arc-upgrade";const g=s("div","arc-up-topo"),N=s("div");N.append(s("small",null,`SUBIU PARA O NÍVEL ${c.nivel}`),s("h3",null,"ESCOLHA UM UPGRADE"));const H=s("div","arc-arsenal arc-atributos"),ee=c.niveis;for(const Te of[`✦ DANO ${ee.dano_geral|0}`,`♥ VIDA ${ee.reparo|0}`,`⬢ ARM ${c.armadura}`,`➤ VEL ${ee.motor|0}`,`↻ REC ${ee.recarga_geral|0}`])H.append(s("span","on",Te));g.append(N,H);const ae=s("div","arc-cartas");no.forEach((Te,Le)=>{const J=cu(Te),ge=s("button","arc-carta");ge.style.setProperty("--cor",Te.cor||"#4aa8ff");const he=s("span","arc-carta-topo");he.append(s("i",null,Te.icone||"▲"),s("small",null,Te.grupo||"UPGRADE"),s("em",null,(typeof Te.raridade=="function"?Te.raridade(c):Te.raridade)||"COMUM"));const F=s("span","arc-up-pips");for(let Q=1;Q<=Te.max;Q++)F.append(s("i",Q<=J?"on":Q===J+1?"prox":""));ge.append(he,s("b",null,Te.nome),s("span","arc-desc",Te.desc),F,s("strong",null,`[${Le+1}] ESCOLHER · N${J} → N${J+1}`)),ge.onclick=()=>lu(Le),ae.append(ge)}),Ie.replaceChildren(g,ae,s("p","arc-up-dica","Dano, vida, armadura, velocidade e recarga afetam a nave inteira. Evoluções de arma continuam específicas.")),Ie.hidden=!1}function lu(M){if(te!=="escolha"||!no[M])return;const g=no[M];g.aplicar(c),g.nivel||(c.niveis[g.id]=(c.niveis[g.id]|0)+1),or(),c.upgFx={t:1,max:1},Yt(c.nx,c.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),cn(c.nx,c.ny-16,`▲ ${g.nome}`,"#ffe14a"),Ie.hidden=!0,te="jogando",We=performance.now(),n(660,.08,"triangle",.05)}const Sc=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","cadencia","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Vida, blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco","armadura"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Amplificador global e módulos específicos",lado:"dir",ancora:[.88,.42],ids:["dano","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],fr=document.createElement("canvas");fr.width=fr.height=128,fr.className="of-nave";const nn=fr.getContext("2d");nn.imageSmoothingEnabled=!1;let yc=null,io=null;function Pp(M){const g=Cn(128,128),N=i?"#496044":a?"#172b59":"#2e7de0",H=i?"#b9a58b":a?"#91a0c8":"#8b93a8",ee=i?"#76513d":a?"#354582":"#5a6176",ae=i?"#e8d5b8":a?"#b8c8ef":"#c9cdd8",Te=i?"#28241f":a?"#090d24":"#171b2c",Le=i?"#d88b55":a?"#6c5cff":"#ff7a3a",J=i?"#b7683f":a?"#2d7fc7":"#e2533a";for(const[F,Q]of[[44,34],[82,92]]){for(let _e=0;_e<3;_e++)g.linha(F+_e,92,Q+_e,118,_e===1?H:ee);g.retangulo(Q-5,118,13,3,ae)}g.retangulo(0,122,128,6,i?"#332b24":a?"#090d24":"#12172b");for(let F=0;F<128;F+=8)g.retangulo(F,123,4,4,i?"#d8b68e":a?"#55e2e0":"#ffd23f");g.disco(62,60,38,N),g.disco(65,62,33,Te),g.elipse(46,30,7,3,i?"#fff1d7":a?"#d6fbff":"#cfe9ff"),g.elipse(40,36,3,2,i?"#d8b68e":a?"#8faeff":"#9cc9ff");for(const[F,Q,_e,rt]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])g.retangulo(F,Q,_e,rt,ee),g.retangulo(F,Q,_e,1,H),g.retangulo(F+2,Q+3,_e-4,2,"#2d3348");for(const[F,Q,_e,rt]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])g.linha(F,Q,_e,rt,Le),g.linha(F+1,Q+1,_e+1,rt+1,"#b34a1e");for(const[F,Q,_e]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])g.pixel(F,Q,_e);g.disco(65,62,14,H),g.disco(65,62,12,"#10131f");for(const[F,Q]of[[50,47],[79,47],[50,76],[79,76]])g.retangulo(F,Q,3,3,ae);for(let F=0;F<M.bateria;F++)g.retangulo(51+F*5,85,4,6,"#10131f"),g.retangulo(52+F*5,86,2,4,"#7dff9a");if(g.disco(80,34,5,ae),g.disco(80,34,4,i?"#f2d7ae":a?"#55e2e0":"#8bd3ff"),g.retangulo(77,33,6,1,i?"#fff1d7":a?"#d6fbff":"#ffffff"),i){for(const[F,Q]of[[30,28],[34,25],[38,28],[34,31]])g.disco(F,Q,2,"#91a56b");g.disco(34,28,2,"#e5b85c"),g.retangulo(22,82,10,4,"#e8d5b8"),g.retangulo(24,83,6,2,"#c96f45")}a&&(g.disco(32,29,6,"#55e2e0"),g.disco(35,27,6,N),g.poligono([[24,82],[28,76],[32,82],[28,88]],"#6c5cff"),g.poligono([[32,84],[35,79],[38,84],[35,89]],"#55e2e0"),g.linha(43,27,48,27,"#d6fbff"),g.linha(46,24,46,30,"#d6fbff"));for(let F=0;F<M.casco;F++){const Q=2.6+F*.5,_e=Math.round(62+Math.cos(Q)*35),rt=Math.round(60+Math.sin(Q)*35);g.retangulo(_e-2,rt-2,5,5,ee),g.retangulo(_e-1,rt-1,3,3,ae)}const ge=1+M.projetil,he=18+Math.floor(M.dano*1.6);for(let F=0;F<ge;F++){const Q=48+F*9;g.retangulo(88,Q-2,8,9,H),g.retangulo(90,Q,he,5,J),g.retangulo(90,Q,he,1,"#ff9a6a"),g.retangulo(90+he,Q-1,3,7,ae),M.lente>0&&g.disco(90+he+5,Q+2,2,"#7be3ff");for(let _e=0;_e<M.cadencia;_e++)g.retangulo(92+_e*4,Q+1,1,3,"#ffd23f")}g.retangulo(16,50,24,22,H);for(const F of[20,26,32])g.retangulo(F,50,2,22,ee);g.poligono([[16,50],[8,44],[8,78],[16,72]],ee),g.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(g.retangulo(18,76,14,6,H),g.retangulo(14,76,4,6,ee)),M.motor>=2&&(g.poligono([[28,50],[32,41],[36,50]],Le),g.poligono([[28,72],[32,81],[36,72]],Le)),g.retangulo(63,10,3,14,H),g.disco(64,8,4,i?"#d88b55":a?"#55e2e0":"#e2243a"),g.pixel(63,6,i?"#fff1d7":a?"#d6fbff":"#ffb3ba");for(let F=0;F<Math.min(4,M.ima);F++)g.elipse(72+F*5,17-F*2,4,2,F%2?H:ae);return M.xp>0&&(g.retangulo(55,14,2,8,H),g.disco(56,13,2,"#7dff9a")),g.contorno(i?"#241b17":a?"#050817":"#070a1a"),g.c}const ao=(M,g,N,H)=>{nn.fillStyle=H;for(let ee=-N;ee<=N;ee++)for(let ae=-N;ae<=N;ae++)ae*ae+ee*ee<=N*N+.5&&nn.fillRect(M+ae,g+ee,1,1)};function fu(M){const g=G.oficina,N=io&&M-io.t0<1.2?{i:io.i,u:(M-io.t0)/1.2}:null;nn.clearRect(0,0,128,128),yc&&nn.drawImage(yc,0,0);const H=g.nucleo>=4?["#ff7a2a","#ffc14a"]:g.nucleo>=2?["#22b85a","#7dff9a"]:i?["#b7683f","#f2d7ae"]:a?["#2f72ff","#55e2e0"]:["#2f8cff","#8bd3ff"],ee=Math.sin(M*4)>0?1:0;ao(65,62,9+ee,H[0]),ao(65,62,6,H[1]),ao(65,62,3,"#ffffff"),nn.fillStyle=H[1];for(let ge=0;ge<6;ge++){const he=M*2+ge*Math.PI/3;nn.fillRect(Math.round(65+Math.cos(he)*12),Math.round(62+Math.sin(he)*12),1,1)}const ae=ge=>{const he=Math.round((8+g.motor*3+Math.floor(Math.random()*4))*(N&&N.i===1?1+1.5*(1-N.u):1));for(let F=0;F<he;F++){const Q=Math.max(1,Math.round((1-F/he)*12));nn.fillStyle=F<he*.35?"#fff0a0":F<he*.7?"#ffc83d":"#ff7a3a",nn.fillRect(7-F,ge-(Q>>1),1,Q)}};ae(61),g.motor>=3&&ae(79),Math.floor(M*2)%2&&(nn.fillStyle="#ff9aa6",nn.fillRect(63,6,2,2));const Te=1+g.projetil,Le=18+Math.floor(g.dano*1.6);if(Math.floor(M*3)%2)for(let ge=0;ge<Te;ge++)nn.fillStyle="#ffe14a",nn.fillRect(90+Le+3,48+ge*9+2,2,1);const J=g.escudo>0?.35+.13*g.escudo:.12;nn.globalAlpha=Math.min(1,J),nn.fillStyle="#7dff9a";for(const[ge,he]of[[48,!0],[51,g.escudo>=4]])if(he)for(let F=0;F<72;F+=2){const Q=F*Math.PI*2/72+M*.4;nn.fillRect(Math.round(62+Math.cos(Q)*ge),Math.round(60+Math.sin(Q)*ge),2,2)}nn.globalAlpha=1,N&&Ip(N,g)}function Ip(M,g){const N=Sc[M.i],H=Math.round(N.ancora[0]*128),ee=Math.round(N.ancora[1]*128),ae=M.u,Te=(Le,J,ge,he,F=28)=>{nn.fillStyle=he;for(let Q=0;Q<F;Q++){const _e=Q*Math.PI*2/F;nn.fillRect(Math.round(Le+Math.cos(_e)*ge),Math.round(J+Math.sin(_e)*ge),2,2)}};nn.globalAlpha=1-ae,Te(H,ee,4+ae*26,"#ffe14a"),nn.fillStyle="#ffffff";for(let Le=0;Le<10;Le++){const J=Le*.63+1,ge=ae*34;nn.fillRect(Math.round(H+Math.cos(J)*ge),Math.round(ee+Math.sin(J)*ge-ae*6),2,2)}if(M.i===0)ao(65,62,12+Math.round(ae*8),"#ffffff");else if(M.i===2)Te(62,60,39,"#ffffff",64);else if(M.i===3)Te(64,8,ae*42,"#8bd3ff",36),Te(64,8,ae*24,"#ffffff",24);else if(M.i===4){const Le=18+Math.floor(g.dano*1.6);for(let J=0;J<1+g.projetil;J++)ao(90+Le+6,50+J*9,4,"#ffe14a")}else M.i===5&&Te(62,60,48+ae*6,"#ffffff",72);nn.globalAlpha=1}function bc(){const M=at.querySelector(".of-corpo");if(!M)return;const g=M.querySelector("svg");if(g.replaceChildren(),getComputedStyle(g).display==="none")return;const N=M.getBoundingClientRect(),H=fr.getBoundingClientRect(),ee="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(ae=>{const Te=Sc[Number(ae.dataset.i)],Le=ae.getBoundingClientRect(),J=(Te.lado==="esq"?Le.right:Le.left)-N.left,ge=(Le.top+Le.bottom)/2-N.top,he=H.left+Te.ancora[0]*H.width-N.left,F=H.top+Te.ancora[1]*H.height-N.top,Q=J+(Te.lado==="esq"?18:-18),_e=document.createElementNS(ee,"path");_e.setAttribute("d",`M${J} ${ge} L${Q} ${ge} L${he} ${F}`),_e.setAttribute("class","of-linha");const rt=document.createElementNS(ee,"circle");rt.setAttribute("cx",he),rt.setAttribute("cy",F),rt.setAttribute("r",4),rt.setAttribute("class","of-ponto"),g.append(_e,rt)})}window.addEventListener("resize",()=>{te==="oficina"&&bc()});function uu(M=-1,g=""){const N=G.oficina;yc=Pp(N);const H=s("div","of-topo"),ee=s("button","arc-btn","VOLTAR [ESC]");ee.onclick=hu,H.append(s("h3",null,"OFICINA · ENGENHARIA DA NAVE"),s("span","of-moedas",`◆ ${G.moedas}`),ee);const ae=s("div","of-corpo"),Te=s("div","of-col"),Le=s("div","of-col"),J=s("div","of-centro");J.append(fr,s("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),Sc.forEach((F,Q)=>{const _e=s("div",Q===M?"of-parte upgradiada":"of-parte");_e.dataset.i=String(Q),Q===M&&_e.append(s("span","of-selo","▲ UPGRADE!")),_e.append(s("h4",null,F.nome),s("p","sub",F.sub));for(const rt of F.ids){const Ht=Wf.find($e=>$e.id===rt),ht=N[rt],_t=ht>=Ht.max,Ut=Ht.custo(ht),Ln=s("div",Q===M&&rt===g?"of-melhoria upg":"of-melhoria"),Dn=s("div","info"),B=s("span","pips");for(let $e=0;$e<Ht.max;$e++)B.append(s("i",$e<ht?$e===ht-1&&Q===M&&rt===g?"on nova":"on":""));Dn.append(s("b",null,Ht.nome),s("small",null,Ht.desc),B);const Fe=s("button","arc-btn pequeno",_t?"MÁX":`◆${Ut}`);Fe.disabled=_t||G.moedas<Ut,Fe.onclick=()=>{G.moedas>=Ut&&!_t&&(G.moedas-=Ut,G.oficina[rt]+=1,Ke(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),io={i:Q,t0:performance.now()/1e3},or(),uu(Q,rt),Ec())},Ln.append(Dn,Fe),_e.append(Ln)}(F.lado==="esq"?Te:Le).append(_e)});const ge=document.createElementNS("http://www.w3.org/2000/svg","svg");ge.setAttribute("class","of-svg"),ae.append(Te,J,Le,ge);const he=s("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");at.replaceChildren(H,ae,he),fu(performance.now()/1e3),requestAnimationFrame(bc)}function Ec(){Z.textContent=`OFICINA (◆${G.moedas})`}function du(){ye=te==="fim"?"fim":"inicio",te="oficina",b.hidden=!0,Oe.hidden=!0,uu(),at.hidden=!1,requestAnimationFrame(bc)}function hu(){te==="oficina"&&(te=ye,at.hidden=!0,(ye==="fim"?Oe:b).hidden=!1,Ec())}function Lp(){te="fim",V("fim");const M=Math.min(j_,Math.floor(c.kills/30)+Math.floor(c.nivel/3)),g=Math.floor(c.t),N=g>G.tempo||c.kills>G.kills||c.onda>G.onda;G.tempo=Math.max(G.tempo,g),G.kills=Math.max(G.kills,c.kills),G.onda=Math.max(G.onda,c.onda),G.skin=(G.skin+1+Math.floor(Math.random()*(Ji.length-1)))%Ji.length,G.moedas+=M,Ke(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),Oe.replaceChildren(s("h3",null,"FIM DE JOGO"),s("p",null,`Tempo: ${ts(g)} · Monstros: ${c.kills} · Nível: ${c.nivel} · Onda: ${c.onda} · Melhor combo: x${c.melhorCombo}`),s("p","ganhou",`+${M+c.moedasRun} ◆ MOEDAS ESPACIAIS`),s("p","dica",`${c.moedasRun} coletadas + ${M} de bônus · Recorde: ${ts(G.tempo)} · ${G.kills} monstros · ${G.onda} ondas${N?" · NOVO RECORDE!":""}`));const H=s("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");H.onclick=Ac;const ee=s("button","arc-btn sec",`OFICINA (◆${G.moedas})`);ee.onclick=du;const ae=s("button","arc-btn sec","SAIR");ae.onclick=ur,Oe.append(H,ee,ae),Oe.hidden=!1}const ts=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,pu=M=>M>=6?o.cristais[6]:M>=3?o.cristais[3]:M>=2?o.cristais[2]:o.cristais[1],mu=(M,g,N,H,ee)=>{w.fillStyle="#070a1a",w.fillRect(M-1,g-1,N+2,6),w.fillStyle="#3a2030",w.fillRect(M,g,N,4),w.fillStyle=ee,w.fillRect(M,g,Math.max(0,Math.round(N*H)),4)};function Dp(M){w.fillStyle="#0a0614",w.fillRect(0,0,Gt,Vt);for(let g=0;g<6;g++){const N=10+(M*22+g*40)%240;w.strokeStyle=`rgba(138, 92, 255, ${.28*(1-N/250)})`,w.lineWidth=1,w.beginPath(),w.arc(On,ga,N,0,Math.PI*2),w.stroke()}for(let g=0;g<40;g++)w.fillStyle=Math.sin(M*2+g)>0?"#9a86c0":"#3a2f60",w.fillRect(g*53%Gt,g*31%Vt,1,1);w.strokeStyle="#8a5cff",w.lineWidth=2,w.strokeRect(mt.x0-3,mt.y0-3,mt.x1-mt.x0+6,mt.y1-mt.y0+6)}function ns(M,g,N,H,ee,ae="",Te=!1){const Le=M-(N+Gt/2),J=g-(H+Vt/2),ge=Math.min((Gt/2-10)/(Math.abs(Le)||1e-6),(Vt/2-10)/(Math.abs(J)||1e-6)),he=Math.round(Gt/2+Le*ge),F=Math.round(Vt/2+J*ge);if(!(Te&&Math.floor(c.ta*6)%2===0)&&(w.fillStyle="#070a1a",w.fillRect(he-3,F-3,7,7),w.fillStyle=ee,w.fillRect(he-2,F-2,5,5),w.fillStyle="#ffffff",w.fillRect(he-1,F-1,3,3),ae)){const Q=he<Gt/2;w.font="bold 8px monospace",w.textAlign=Q?"left":"right";const _e=he+(Q?7:-7),rt=Math.max(10,Math.min(Vt-4,F+3));w.fillStyle="#070a1a",w.fillText(ae,_e+1,rt+1),w.fillStyle=Te?"#ff9aa6":ee,w.fillText(ae,_e,rt)}}function Np(){const M=performance.now()/1e3,g=c?c.cx:On,N=c?c.cy:ga;if(w.save(),c&&c.alien?Dp(M):$.desenhar(w,g,N,M,eo()),!c){w.restore();return}const H=Math.round(g-Gt/2),ee=Math.round(N-Vt/2),ae=(B,Fe,$e=16)=>B>H-$e&&B<H+Gt+$e&&Fe>ee-$e&&Fe<ee+Vt+$e,Te=!c.alien;w.save(),c.tremor>0&&w.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),w.translate(-H,-ee),w.strokeStyle="rgba(74, 168, 255, 0.12)",w.lineWidth=1;for(const B of[30,62])w.beginPath(),w.arc(Math.round(c.nx),Math.round(c.ny),B,0,Math.PI*2),w.stroke();for(const B of c.campos){if(!ae(B.x,B.y,40))continue;const Fe=Math.round(B.x),$e=Math.round(B.y);if(B.aviso>0){const Ee=Math.floor(c.ta*8)%2===0;w.strokeStyle=Ee?"#ff3b4a":"#ffb3ba",w.lineWidth=1,w.setLineDash([3,3]),w.beginPath(),w.arc(Fe,$e,B.r,0,Math.PI*2),w.stroke(),w.setLineDash([]),w.fillStyle="rgba(255, 59, 74, 0.12)",w.beginPath(),w.arc(Fe,$e,Math.max(0,B.r*(1-B.aviso/(B.avisoMax||1.4))),0,Math.PI*2),w.fill()}else{w.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(c.ta*10)})`,w.beginPath(),w.arc(Fe,$e,B.r,0,Math.PI*2),w.fill(),w.strokeStyle="#ff8a3a",w.lineWidth=2,w.beginPath(),w.arc(Fe,$e,B.r,0,Math.PI*2),w.stroke();for(let Ee=0;Ee<6;Ee++){const He=c.ta*3+Ee*1.05;w.fillStyle="#ffd23f",w.fillRect(Math.round(Fe+Math.cos(He)*B.r*.6),Math.round($e+Math.sin(He)*B.r*.6),2,2)}}}for(const B of c.campos)if(B.aviso>0&&B.ox!==void 0){const Fe=(B.avisoMax-B.aviso)/.45;if(Fe>=0&&Fe<1){const $e=Math.round(B.ox+(B.x-B.ox)*Fe),Ee=Math.round(B.oy+(B.y-B.oy)*Fe-Math.sin(Math.PI*Fe)*24);w.fillStyle="#070a1a",w.fillRect($e-3,Ee-3,6,6),w.fillStyle="#ff7a3a",w.fillRect($e-2,Ee-2,4,4),w.fillStyle="#ffffff",w.fillRect($e-1,Ee-2,2,1)}}if(Te){if(u.desenhar(w,H,ee,Gt,Vt,M),c.buraco&&ae(c.buraco.x,c.buraco.y,30)){D_(w,c.buraco.x,c.buraco.y,c.ta,Math.min(1,c.buraco.vida/3));const B=`${Math.ceil(c.buraco.vida)}s`,Fe=Math.round(c.buraco.x),$e=Math.round(c.buraco.y)-28;w.save(),w.font="bold 8px monospace",w.textAlign="center",w.fillStyle="#070a1a",w.fillText(B,Fe+1,$e+1),w.fillStyle=c.buraco.vida<8&&Math.floor(c.ta*6)%2===0?"#ff9aa6":"#d9a8ff",w.fillText(B,Fe,$e),w.restore()}for(const B of c.rochas){if(!ae(B.x,B.y,20))continue;const Fe=B.hp<=B.hpMax*.34?2:B.hp<=B.hpMax*.67?1:0,$e=f[B.tam].quadros[Fe];B.piscar>0&&(w.globalAlpha=.6),w.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),w.globalAlpha=1}for(const B of c.itens)!ae(B.x,B.y)||B.vida<4&&B.tipo!=="moedaEsp"&&Math.floor(c.ta*8)%2===0||(ya[B.tipo]&&(w.save(),w.globalAlpha=.22+.14*Math.sin(c.ta*6+B.fase),w.fillStyle=ya[B.tipo].cor,w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),10,0,Math.PI*2),w.fill(),w.restore()),w.drawImage(l[B.tipo],Math.round(B.x-6),Math.round(B.y-6+Math.sin(c.ta*4+B.fase))));for(const B of c.cristais)ae(B.x,B.y)&&w.drawImage(pu(B.v),Math.round(B.x-3.5),Math.round(B.y-4.5+Math.sin(c.ta*4+B.fase)))}for(const B of c.trilhasFogo){if(!ae(B.x,B.y,12))continue;const Fe=Math.max(0,B.vida/B.max),$e=1+Math.floor(Math.sin(c.ta*18+B.x)*1.5);w.globalAlpha=Math.max(.18,Fe),w.fillStyle="#8f1d20",w.fillRect(Math.round(B.x)-5,Math.round(B.y)-2,10,5),w.fillStyle="#ff5a2a",w.fillRect(Math.round(B.x)-3,Math.round(B.y)-4-$e,7,7+$e),w.fillStyle="#ffe14a",w.fillRect(Math.round(B.x)-1,Math.round(B.y)-3-$e,3,4+$e),w.fillStyle="#ffffff",w.fillRect(Math.round(B.x),Math.round(B.y)-3-$e,1,2),w.globalAlpha=1}for(const B of c.inimigos){if(!ae(B.x,B.y,40))continue;const Fe=Math.floor(c.ta*6+B.fase)%2;let $e;if(B.tipo==="alien"){const Ee=p(B.v);$e=(B.piscar>0?Ee.brancos:Ee.quadros)[Math.floor(c.ta*3)%2],w.globalAlpha=B.sumido>0?.25:B.estado==="carga"&&Math.floor(c.ta*16)%2===0?.6:1}else if(B.tipo==="chefe"){const Ee=m(B.b);$e=(B.piscar>0?Ee.brancos:Ee.quadros)[Math.floor(c.ta*4)%2];const He=25+Math.sin(c.ta*4)*3;w.fillStyle="rgba(5, 0, 12, .72)",w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),He,0,Math.PI*2),w.fill(),w.strokeStyle=Math.floor(c.ta*8)%2?"#ff233f":"#6c1230",w.lineWidth=2,w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),He+3,0,Math.PI*2),w.stroke()}else{const Ee=e2[B.tipo]||B.tipo,He=v(B.v).m[Ee];$e=(B.piscar>0?He.brancos:He.quadros)[Fe],B.tipo==="fantasma"&&(w.globalAlpha=.85)}if(w.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),w.globalAlpha=1,B.tipo==="chefe")w.fillStyle="#ff233f",w.fillRect(Math.round(B.x)-7,Math.round(B.y)-5,4,2),w.fillRect(Math.round(B.x)+4,Math.round(B.y)-5,4,2),w.fillStyle="#ffffff",w.fillRect(Math.round(B.x)-6,Math.round(B.y)-5,1,1),w.fillRect(Math.round(B.x)+5,Math.round(B.y)-5,1,1),B.movEsp&&B.movEsp.carga>0&&(w.strokeStyle=B.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",w.lineWidth=2,w.setLineDash([3,3]),w.beginPath(),B.movEsp.tipo==="minhoca"?w.arc(Math.round(B.x),Math.round(B.y),20+Math.sin(c.ta*12)*4,0,Math.PI*2):(w.moveTo(Math.round(B.x),Math.round(B.y)),w.lineTo(Math.round(B.x+B.movEsp.dx*240),Math.round(B.y+B.movEsp.dy*240))),w.stroke(),w.setLineDash([]));else if(B.tipo==="curandeiro"){w.save(),w.globalAlpha=.3,w.strokeStyle="#7dff9a",w.lineWidth=1,w.setLineDash([2,4]),w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),Us,0,Math.PI*2),w.stroke(),w.restore();const Ee=9+Math.sin(c.ta*6+B.fase)*2;w.strokeStyle="#7dff9a",w.lineWidth=1,w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),Ee,0,Math.PI*2),w.stroke(),w.fillStyle="#ffffff",w.fillRect(Math.round(B.x)-1,Math.round(B.y)-10,3,7),w.fillRect(Math.round(B.x)-3,Math.round(B.y)-8,7,3)}else if(B.tipo==="amplificador"){w.save(),w.globalAlpha=.3,w.strokeStyle="#ff7ab8",w.lineWidth=1,w.setLineDash([2,4]),w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),Us,0,Math.PI*2),w.stroke(),w.restore();const Ee=11+(c.ta*8+B.fase)%5;w.strokeStyle=`rgba(255, 122, 184, ${.9-(Ee-11)*.12})`,w.lineWidth=2,w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),Ee,0,Math.PI*2),w.stroke(),w.fillStyle="#ff7ab8";for(const He of[-4,0,4])w.fillRect(Math.round(B.x+He),Math.round(B.y-10-Math.abs(He)/2),2,4)}else B.tipo==="fulminante"&&(w.strokeStyle="#38c8ff",w.lineWidth=1,w.beginPath(),w.moveTo(Math.round(B.x)-8,Math.round(B.y)-7),w.lineTo(Math.round(B.x)-3,Math.round(B.y)-12),w.lineTo(Math.round(B.x),Math.round(B.y)-8),w.lineTo(Math.round(B.x)+5,Math.round(B.y)-13),w.stroke());if(B.buffT>0){w.fillStyle="#ffe14a";for(const Ee of[-5,3])w.fillRect(Math.round(B.x+Ee),Math.round(B.y-13),3,1),w.fillRect(Math.round(B.x+Ee+1),Math.round(B.y-14),1,1)}}for(const B of c.tirosInimigos)ae(B.x,B.y,4)&&(w.fillStyle="#ff5a8a",w.fillRect(Math.round(B.x)-2,Math.round(B.y)-2,4,4),w.fillStyle="#ffd0e0",w.fillRect(Math.round(B.x)-1,Math.round(B.y)-1,2,2));if(c.alien&&c.alien.estado==="aviso"){const B=c.alien;w.strokeStyle=Math.floor(c.ta*14)%2?"#ff3b4a":"#ffb3ba",w.lineWidth=2,w.setLineDash([4,4]),w.beginPath(),w.moveTo(Math.round(B.x),Math.round(B.y)),w.lineTo(Math.round(B.x+B.dirX*300),Math.round(B.y+B.dirY*300)),w.stroke(),w.setLineDash([])}for(const B of c.raios){const Fe=B.x+Math.cos(B.ang)*400,$e=B.y+Math.sin(B.ang)*400;w.beginPath(),w.moveTo(Math.round(B.x),Math.round(B.y)),w.lineTo(Math.round(Fe),Math.round($e));const Ee=B.cor||"#ff3bd4";B.aviso>0?(w.strokeStyle=Math.floor(c.ta*16)%2?Ee:"#ffffff",w.lineWidth=1,w.setLineDash([3,3]),w.stroke(),w.setLineDash([])):(w.strokeStyle=Ee,w.lineWidth=7,w.stroke(),w.strokeStyle="#ffffff",w.lineWidth=3,w.stroke())}for(const B of c.tiros)w.fillStyle=B.critico?"#ff5a2a":"#ffe14a",w.fillRect(Math.round(B.x)-(B.critico?2:1),Math.round(B.y)-(B.critico?2:1),B.critico?4:3,B.critico?4:3),w.fillStyle="#ffffff",w.fillRect(Math.round(B.x),Math.round(B.y),1,1);if(c.laser){const B=Math.cos(c.laser.ang),Fe=Math.sin(c.laser.ang),$e=c.nx+B*c.laser.len,Ee=c.ny+Fe*c.laser.len;w.beginPath(),w.moveTo(Math.round(c.nx+B*7),Math.round(c.ny+Fe*7)),w.lineTo(Math.round($e),Math.round(Ee)),w.strokeStyle=Math.floor(c.ta*24)%2?"#38c8ff":"#8bd3ff",w.lineWidth=4,w.stroke(),w.strokeStyle="#ffffff",w.lineWidth=1.5,w.stroke()}for(const B of c.misseis){const Fe=Math.cos(B.ang),$e=Math.sin(B.ang);w.fillStyle="#070a1a",w.fillRect(Math.round(B.x)-3,Math.round(B.y)-3,6,6),w.fillStyle="#ff9a3a",w.fillRect(Math.round(B.x+Fe*1)-2,Math.round(B.y+$e*1)-2,4,4),w.fillStyle="#ffffff",w.fillRect(Math.round(B.x+Fe*2),Math.round(B.y+$e*2),1,1)}const Le=c.invul>0&&Math.floor(c.ta*14)%2===0,J=Math.PI/8,ge=Math.round(c.mira/J)*J,he=Math.round(c.nx),F=Math.round(c.ny),Q=c.tiers||{motor:0,armas:0},_e=(B,Fe,$e)=>{for(let Ee=0;Ee<$e;Ee++)w.fillStyle=Ee<$e*.35?"#fff0a0":Ee<$e*.7?"#ffc83d":"#ff7a3a",w.fillRect(B-(Ee<$e*.6?1:0),Fe+Ee,Ee<$e*.6?2:1,1)},rt=c.arma>=2?c.slots[c.arma-2]:"normal",Ht=rt==="turbo"&&c.boostE>0,ht=2+Q.motor+(c.movendo?3:0)+(c.turboT>0||Ht?3:0)+(c.driftT>0?5:0)+Math.floor(Math.random()*2);_e(he,F+8,ht),Q.motor>=2&&(_e(he-5,F+7,Math.max(2,ht-3)),_e(he+4,F+7,Math.max(2,ht-3))),w.fillStyle=c.driftT>0?"#ffffff":c.turboT>0||Ht?"#ff7a3a":"#ffd23f";const _t=Math.min(4,c.projeteis),Ut=5+Math.min(4,Math.floor(Q.armas/2)),Ln=-Math.sin(ge),Dn=Math.cos(ge);for(let B=0;B<_t;B++){const Fe=(B-(_t-1)/2)*2.4;for(let $e=4;$e<=4+Ut;$e++)w.fillRect(Math.round(he+Math.cos(ge)*$e+Ln*Fe)-1,Math.round(F+Math.sin(ge)*$e+Dn*Fe)-1,2,2);G.oficina.lente>0&&(w.fillStyle="#7be3ff",w.fillRect(Math.round(he+Math.cos(ge)*(5+Ut)+Ln*Fe)-1,Math.round(F+Math.sin(ge)*(5+Ut)+Dn*Fe)-1,2,2),w.fillStyle=c.turboT>0?"#ff7a3a":"#ffd23f")}if(w.drawImage(Le?ie.branca:ie.c,he-10,F-10),c.upgFx){const B=1-c.upgFx.t/c.upgFx.max;w.globalAlpha=.7*(1-B),w.drawImage(ie.branca,he-10,F-10),w.globalAlpha=1-B,w.strokeStyle="#ffe14a",w.lineWidth=2,w.beginPath(),w.arc(he,F,Math.max(0,8+B*22),0,Math.PI*2),w.stroke(),w.strokeStyle="#ffffff",w.lineWidth=1,w.beginPath(),w.arc(he,F,Math.max(0,5+B*14),0,Math.PI*2),w.stroke(),w.globalAlpha=1}for(const[B,Fe,$e]of[[c.buffDanoT,"#ff3b4a",14],[c.buffVelT,"#ffd23f",16],[c.buffXpT,"#a56bff",18]])B>0&&(B>2.5||Math.floor(c.ta*8)%2===0)&&(w.save(),w.globalAlpha=.55,w.strokeStyle=Fe,w.lineWidth=1,w.setLineDash([2,3]),w.beginPath(),w.arc(he,F,$e+Math.sin(c.ta*8)*1.2,0,Math.PI*2),w.stroke(),w.restore());c.escudoT>0&&(c.escudoT>1.5||Math.floor(c.ta*10)%2===0)&&(w.strokeStyle="#8bd3ff",w.lineWidth=2,w.beginPath(),w.arc(he,F,11,0,Math.PI*2),w.stroke()),c.barreira>0&&(w.strokeStyle="#7dff9a",w.lineWidth=1,w.globalAlpha=.7,w.beginPath(),w.arc(he,F,12+(c.barreira>1?2:0),0,Math.PI*2),w.stroke(),w.globalAlpha=1);for(const B of jt()){const Fe=Math.round(B.x),$e=Math.round(B.y);w.fillStyle="#070a1a",w.fillRect(Fe-3,$e-3,7,7),w.fillStyle="#ff3bd4",w.fillRect(Fe-2,$e-2,5,5),w.fillStyle="#ffffff",w.fillRect(Fe-1,$e-1,2,2)}for(const B of c.parts)ae(B.x,B.y,4)&&(w.fillStyle=B.cor,w.fillRect(Math.round(B.x),Math.round(B.y),2,2));for(const B of c.ondas)w.strokeStyle=B.cor,w.lineWidth=2,w.globalAlpha=Math.max(0,1-B.r/B.max),w.beginPath(),w.arc(Math.round(B.x),Math.round(B.y),Math.max(0,B.r),0,Math.PI*2),w.stroke(),w.globalAlpha=1;w.font="bold 8px monospace",w.textAlign="center";for(const B of c.textos)w.globalAlpha=Math.min(1,B.vida*2),w.fillStyle="#070a1a",w.fillText(B.txt,Math.round(B.x)+1,Math.round(B.y)+1),w.fillStyle=B.cor,w.fillText(B.txt,Math.round(B.x),Math.round(B.y)),w.globalAlpha=1;if(w.restore(),Te){const B=c.cristais.filter(Fe=>!ae(Fe.x,Fe.y,2)).map(Fe=>({c:Fe,d:Math.hypot(Fe.x-c.nx,Fe.y-c.ny)})).filter(Fe=>Fe.d<620).sort((Fe,$e)=>Fe.d-$e.d).slice(0,6);w.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:Fe}of B){const $e=Fe.x-(H+Gt/2),Ee=Fe.y-(ee+Vt/2),He=Math.min((Gt/2-10)/(Math.abs($e)||1e-6),(Vt/2-10)/(Math.abs(Ee)||1e-6));w.drawImage(pu(Fe.v),Math.round(Gt/2+$e*He-3.5),Math.round(Vt/2+Ee*He-4.5))}w.globalAlpha=1,c.buraco&&!ae(c.buraco.x,c.buraco.y,2)&&ns(c.buraco.x,c.buraco.y,H,ee,"#c43fff",`${Math.ceil(c.buraco.vida)}s`,c.buraco.vida<8),c.chefe&&!ae(c.chefe.x,c.chefe.y,2)&&ns(c.chefe.x,c.chefe.y,H,ee,"#ff3b4a");for(const Fe of c.itens)Fe.tipo==="moedaEsp"&&!ae(Fe.x,Fe.y,2)&&ns(Fe.x,Fe.y,H,ee,"#38c8ff");for(const Fe of c.itens)ya[Fe.tipo]&&!ae(Fe.x,Fe.y,2)&&ns(Fe.x,Fe.y,H,ee,ya[Fe.tipo].cor,`${Math.ceil(Fe.vida)}s`,Fe.vida<5)}if(!c.alien){const B=(Fe,$e,Ee,He,it="center")=>{w.font="bold 8px monospace",w.textAlign=it,w.fillStyle="#070a1a",w.fillText(Fe,$e+1,Ee+1),w.fillStyle=He,w.fillText(Fe,$e,Ee)};c.combo>=3&&B(`COMBO x${c.combo}`,Gt-8,22,c.combo>=50?"#ff7ab8":c.combo>=25?"#ff9a3a":c.combo>=10?"#ffe14a":"#ffffff","right")}c.chefe&&(w.fillStyle="rgba(40, 0, 15, .34)",w.fillRect(0,0,Gt,5),w.fillRect(0,Vt-5,Gt,5),w.fillRect(0,0,5,Vt),w.fillRect(Gt-5,0,5,Vt),w.font="bold 7px monospace",w.textAlign="center",w.fillStyle="#070a1a",w.fillText(Wa[c.chefe.b].nome,On+1,8),w.fillStyle="#ff7084",w.fillText(Wa[c.chefe.b].nome,On,7),mu(On-60,11,120,c.chefe.hp/c.chefe.hpMax,"#ff3b4a")),c.alien&&mu(On-60,8,120,c.alien.hp/c.alien.hpMax,"#ff3bd4"),c.flash>0&&(w.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,c.flash*2.5)})`,w.fillRect(0,0,Gt,Vt)),w.restore()}let is="";function Up(){if(!c)return;const M=c.arma>=2?c.slots[c.arma-2]:"normal",g=[c.buffDanoT>0?`DANO+ ${Math.ceil(c.buffDanoT)}`:"",c.buffVelT>0?`VELOC+ ${Math.ceil(c.buffVelT)}`:"",c.buffXpT>0?`XP×2 ${Math.ceil(c.buffXpT)}`:"",c.lentidao<1?"DETRITOS: LENTO":"",c.imaT>0?"ÍMÃ":"",c.escudoT>0?`ESCUDO ${Math.ceil(c.escudoT)}`:"",c.turboT>0?`TURBO ${Math.ceil(c.turboT)}`:"",M==="turbo"&&c.boostE>0?"HIPERPROPULSOR":"",c.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),N=`${c.hp}/${c.maxHp}|${c.nivel}|${Math.floor(c.xp)}|${c.xpProx}|${c.kills}|${Math.floor(c.t)}|${c.onda}|${c.fase}|${c.aviso>0}|${c.avisoTxt}|${g}|${G.moedas}|${!!c.alien}`;if(N===is)return;is=N,Ce.replaceChildren(...Array.from({length:c.maxHp},(ee,ae)=>s("i",ae+1<=c.hp?"cheia":ae<c.hp?"meia":"vazia")));const H=Math.max(0,Math.round(c.hp*10)/10);Ce.setAttribute("aria-label",`${H} de ${c.maxHp} pontos de vida · ${Math.round(Math.min(.5,c.armadura*.06)*100)}% de redução por armadura`),ot.textContent=`NV ${c.nivel}`,Pe.style.width=`${Math.min(100,c.xp/c.xpProx*100)}%`,Ve.setAttribute("aria-valuenow",String(Math.floor(c.xp))),Ve.setAttribute("aria-valuemax",String(c.xpProx)),ut.textContent=`☠ ${c.kills}`,ue.textContent=c.alien?"BURACO NEGRO":c.onda>0?`F${c.fase} · ONDA ${c.onda}${c.ondaFila>0?` · ${c.ondaFila} A CAMINHO`:""}`:"",ue.classList.toggle("alerta",!!c.alien||c.ondaEstado==="chefe"),Me.textContent=g,Ae.textContent=`◆ ${G.moedas}`,ke.hidden=!(c.aviso>0),ke.textContent=c.avisoTxt,we.textContent=ts(Math.floor(c.t))}function Op(){const M=c&&(te==="jogando"||te==="escolha"||te==="pausa");if(gt.style.visibility=M?"visible":"hidden",!!M)for(let g=1;g<=4;g++){const{b:N,nm:H,barra:ee}=q[g-1],ae=g===1?"normal":c.slots[g-2];let Te="VAZIO",Le=-1;ae&&(Te=`${n2[ae]||ic[ae].curto} · N${c.armasNivel[ae]}`,ae==="laser"?Le=c.laserE/(c.laserMax*(1+.18*(c.armasNivel.laser-1))):ae==="missil"?Le=1-Math.max(0,c.missilT)/c.missilMax:ae==="turbo"?Le=c.boostE/c.boostMax:ae==="cura"?Le=1-c.curaCd/c.curaMax:ae==="escudo"?Le=c.escudoT>0?1:1-c.escudoCd/c.escudoMax:ae==="salto"?Le=c.saltoCarga>0?1-c.saltoCarga/c.saltoCargaMax:1-c.saltoCd/c.saltoMax:ae==="drift"&&(Le=c.driftT>0?1:1-c.driftCd/c.driftMax)),H.textContent!==Te&&(H.textContent=Te),ee.style.display=Le<0?"none":"block",ee.style.width=`${Math.round(Math.max(0,Math.min(1,Le))*100)}%`,N.classList.toggle("ativa",c.arma===g),N.classList.toggle("vazio",g>=2&&!ae),N.classList.toggle("quente",ae==="laser"&&c.laserQuente),N.disabled=g>=2&&!ae,N.setAttribute("aria-pressed",String(c.arma===g)),N.setAttribute("aria-label",`Arma ${g}: ${Te}${ae==="laser"&&c.laserQuente?", superaquecida":""}`)}}function Fp(){const M=te==="jogando"||te==="pausa";if(be.hidden=!M,!M)return;const g=te==="pausa";be.textContent=g?"▶":"II",be.title=g?"Continuar (Esc)":"Pausar (Esc)",be.setAttribute("aria-label",g?"Continuar jogo":"Pausar jogo")}function gu(M){if(window.__curriculoArcadeGeracao!==r){De=!1,cancelAnimationFrame(Ge);return}if(!De)return;const g=Math.min((M-We)/1e3,.05);We=M,te==="jogando"&&wp(g),te==="oficina"&&fu(M/1e3),$.passo(g),Np(),Up(),Op(),Fp(),Ge=requestAnimationFrame(gu)}function Ac(){qe.clear(),dt.ativo=!1,O.hidden=!0,k(),I="normal",y.pause(),S.pause(),P.currentTime=0,L(),to(),cr(4),is="",b.hidden=!0,Oe.hidden=!0,Ie.hidden=!0,Qe.hidden=!0,at.hidden=!0,te="jogando",We=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function ro(M){M&&te==="jogando"?(te="pausa",qe.clear(),dt.ativo=!1,O.hidden=!0,Qe.hidden=!1,U()):!M&&te==="pausa"&&(te="jogando",Qe.hidden=!0,We=performance.now(),L())}function Bp(){De||(De=!0,Ue.classList.add("aberto"),I="normal",y.pause(),S.pause(),L(),k(),G=Nd(),pe.textContent=G.tempo||G.kills||G.onda?`RECORDE  ${ts(G.tempo)}  ·  ${G.kills} MONSTROS  ·  ONDA ${G.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",c=null,te="inicio",is="",to(),b.hidden=!1,Oe.hidden=!0,Ie.hidden=!0,Qe.hidden=!0,at.hidden=!0,Ce.replaceChildren(),ot.textContent="",ut.textContent="",we.textContent="",ue.textContent="",Me.textContent="",Ae.textContent=`◆ ${G.moedas}`,Pe.style.width="0",Ec(),We=performance.now(),Ge=requestAnimationFrame(gu),Y.focus({preventScroll:!0}))}function ur(){De&&(De=!1,qe.clear(),dt.ativo=!1,O.hidden=!0,Ue.classList.remove("aberto"),U(),cancelAnimationFrame(Ge))}Y.onclick=Ac,Z.onclick=du,ze.onclick=()=>ro(!1),Be.onclick=ur,be.onclick=()=>ro(te==="jogando"),et.onclick=ur,Ue.addEventListener("pointerdown",M=>{M.target===Ue&&te!=="jogando"&&te!=="escolha"&&ur()}),window.addEventListener("visibilitychange",()=>{document.hidden&&ro(!0)});const xu=M=>{const g=Se.getBoundingClientRect();dt.x=(M.clientX-g.left)/g.width*Gt,dt.y=(M.clientY-g.top)/g.height*Vt},zp=M=>{const g=Se.getBoundingClientRect(),N=(M.clientX-g.left)/g.width*Gt,H=(M.clientY-g.top)/g.height*Vt;dt.dx=N-dt.origemX,dt.dy=H-dt.origemY;const ee=dt.dx*(g.width/Gt),ae=dt.dy*(g.height/Vt),Te=Math.hypot(ee,ae)||1,J=Math.min(1,28/Te);ct.style.transform=`translate(calc(-50% + ${Math.round(ee*J)}px), calc(-50% + ${Math.round(ae*J)}px))`};Se.addEventListener("pointerdown",M=>{if(te==="jogando"){if(dt.ativo=!0,dt.toque=M.pointerType!=="mouse",xu(M),dt.toque){const g=Se.getBoundingClientRect();dt.origemX=dt.x,dt.origemY=dt.y,dt.dx=dt.dy=0,O.style.left=`${Math.round(M.clientX-g.left)}px`,O.style.top=`${Math.round(M.clientY-g.top)}px`,ct.style.transform="translate(-50%, -50%)",O.hidden=!1}Se.setPointerCapture?.(M.pointerId)}}),Se.addEventListener("pointermove",M=>{dt.ativo&&(dt.toque?zp(M):xu(M))});for(const M of["pointerup","pointercancel"])Se.addEventListener(M,()=>{dt.ativo=!1,dt.toque=!1,dt.dx=dt.dy=0,O.hidden=!0});return window.addEventListener("keyup",M=>qe.delete(M.code)),window.addEventListener("blur",()=>qe.clear()),window.addEventListener("keydown",M=>{if(De){if(Ot.includes(M.code)){M.preventDefault(),te==="jogando"&&qe.add(M.code);return}if(M.code==="Escape")M.preventDefault(),te==="jogando"?ro(!0):te==="pausa"?ro(!1):te==="oficina"?hu():(te==="inicio"||te==="fim")&&ur();else if(M.code==="Space"||M.code==="Enter")(te==="inicio"||te==="fim")&&(M.preventDefault(),Ac());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const g=Number(M.code.slice(-1));te==="escolha"?lu(g-1):zt(g)}}},!0),{abrir:Bp,fechar:ur,estaAberto:()=>De}}const At=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},Od={mailto:()=>`mailto:${Ea.email}`,tel:()=>`tel:${Ea.telefoneTel}`,github:()=>Ea.github,linkedin:()=>Ea.linkedin,portfolio:()=>Ea.portfolio,repo:()=>Ea.repo},Xf=n=>Od[n]?Od[n]():n,c2={email:()=>Ea.email,telefone:()=>Ea.telefone};function qf(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function df(n){const e=At("div","etiquetas");for(const t of n)e.append(At("span","etq",t));return e}function l2(n){const e=At("a","btn");return e.href=Xf(n.url),qf(e),e.append(At("span","ic",n.icone||"↗"),At("span","tx",n.rotulo)),e}function f2(n){const e=At("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=c2[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const u2=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function Fd(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function d2(n){const e=At("div","numeros jogo"),t=(i,a)=>{const r=At("div","num");r.append(At("b",null,String(i)),At("span",null,a)),e.append(r)};if(n==="cassino"){const i=Fd("curriculo-cassino-v1");if(!i)return At("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=Fd("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return At("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t(u2(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function h2(n){const e=At("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=At("summary"),i=At("span","tit");i.append(At("b",null,n.titulo)),n.local&&i.append(At("i",null,n.local)),t.append(i,At("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=At("div","corpo");if(n.texto&&a.append(At("p",null,n.texto)),n.tags&&a.append(df(n.tags)),n.links){const r=At("div","links");for(const s of n.links)r.append(l2(s));a.append(r)}return e.append(t,a),e}const Bd={destaque:n=>At("p","destaque",n.texto),texto:n=>At("p",null,n.texto),dica:n=>At("p","dica",n.texto),numeros:n=>{const e=At("div","numeros");for(const t of n.itens){const i=At("div","num");i.append(At("b",null,t.v),At("span",null,t.r)),e.append(i)}return e},etiquetas:n=>df(n.itens),grupo:n=>{const e=At("div","grupo");return e.append(At("h3",null,n.titulo),df(n.itens)),e},cartao:h2,estatisticas:n=>d2(n.fonte),links:n=>{const e=At("div","contatos");for(const t of n.itens){const i=At("div","contato"),a=At("a","ln");a.href=Xf(t.url),qf(a);const r=At("span","tx");r.append(At("small",null,t.rotulo),At("b",null,t.valor)),a.append(At("span","ic",t.icone||"↗"),r),i.append(a),t.copiar&&i.append(f2(t.copiar)),e.append(i)}return e}};function p2(n,e){const t=At("div","rodape"),i=At("span","prog"),a=At("span","pts");for(const r of e.zonas)a.append(At("i",e.visitadas.has(r.id)?"vis":""));if(i.append(a,At("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(At("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const r=At("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");r.href=Xf("mailto"),qf(r),t.append(r)}return t}function m2(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(r=>({tipo:"texto",texto:r})))t.push((Bd[a.tipo]??Bd.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const r of i)r!==a&&(r.open=!1)});return t.push(p2(n,e)),t}const g2=.32,zd=.7;function x2({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const r=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,r,{passive:!0});return{atualizar(s,o){const f=t&&n()&&!o&&!document.hidden?g2:0;a+=Math.max(-s*zd,Math.min(s*zd,f-a)),e.volume=Math.max(0,Math.min(1,a)),f>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):f===0&&a<=.001&&!e.paused&&e.pause()}}}const cp="curriculo-carinhos-v1";function v2(){try{const n=JSON.parse(localStorage.getItem(cp));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function M2(n){try{localStorage.setItem(cp,JSON.stringify(n))}catch{}}const _2=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let Gd=null;function S2(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,r)=>{e.fillStyle=r,_2.forEach((s,o)=>[...s].forEach((f,l)=>{f==="X"&&e.fillRect(l+i,o+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let Vd=null;function y2(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(o,f)=>o<=7&&f<=i[o];for(let o=-7;o<=7;o++)for(let f=-7;f<=7;f++)(a(Math.abs(o),Math.abs(f))||a(Math.abs(f),Math.abs(o)))&&(t.fillStyle=f+o>4?"#b01820":f+o<-4?"#ff5a5f":"#e3262d",t.fillRect(8+f,8+o,1,1));const r=t.getImageData(0,0,17,17).data,s=(o,f)=>o>=0&&f>=0&&o<17&&f<17&&r[(f*17+o)*4+3]>0;t.fillStyle="#3a0d12";for(let o=0;o<17;o++)for(let f=0;f<17;f++)!s(f,o)&&(s(f+1,o)||s(f-1,o)||s(f,o+1)||s(f,o-1))&&t.fillRect(f,o,1,1);return e.toDataURL()}function lp(n,e,t,i,a,r,s){for(let o=0;o<s;o++){const f=document.createElement("i"),l=i[Math.floor(Math.random()*i.length)];f.className="coracao",f.style.cssText=`background-image:url(${n});width:${e*l}px;height:${t*l}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(r)}px;animation-delay:${(o*.09).toFixed(2)}s;`,f.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),f.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),f.addEventListener("animationend",()=>f.remove()),document.body.append(f)}}function b2(n,e,t=5){Gd??=S2(),lp(Gd,9,8,[2,2,3],n,e,t)}function E2(n,e,t=6){Vd??=y2(),lp(Vd,17,17,[2,3,3],n,e,t)}function A2(n){const e=new Jt,t=new Jt;e.add(t);const i=n(3120732),a=n(2325061),r=new yi({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:ri}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),o=new yi({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),f=new _n(1,6,4),l=new _n(1,6,4),u=new Kt(1,1,1,5),h=(S,T,I,_,R,L)=>{const U=new z(S,0,T),V=new z(I,_,R),X=V.clone().sub(U),k=new xt(u,a);k.scale.set(L,X.length(),L),k.position.copy(U).addScaledVector(X,.5),k.quaternion.setFromUnitVectors(new z(0,1,0),X.normalize()),t.add(k)},d=(S,T,I,_,R)=>{for(const L of[-1,1]){const U=new xt(l,i);U.scale.set(.13*R,.025*R,.065*R),U.position.set(S+Math.cos(_)*.1*R*L,T,I+Math.sin(_)*.1*R*L),U.rotation.set(0,-_,L*.35),t.add(U)}},p=(S,T,I,_)=>{const R=new Jt;R.position.set(S,T,I),R.rotation.x=.95;for(let U=0;U<5;U++){const V=U/5*Math.PI*2,X=new xt(f,r);X.scale.set(.075*_,.022*_,.15*_),X.position.set(Math.sin(V)*.1*_,0,Math.cos(V)*.1*_),X.rotation.y=V,R.add(X)}const L=new xt(f,s);return L.scale.setScalar(.045*_),L.position.y=.025*_,R.add(L),t.add(R),R},m=(S,T,I)=>{const _=new xt(f,o);_.scale.set(.04,.065,.04),_.position.set(S,T,I),t.add(_)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const E=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),x=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const A=new Zt;A.position.set(0,.85,.05),e.add(A);const P=new Zt;P.position.set(0,1.05,0),e.add(P);let y=0;return{raiz:e,cabeca:A,topo:P,carinho(){y=1},atualizar(S,T){y=Math.max(0,y-T*2.2);const I=Math.sin(y*Math.PI);t.rotation.z=Math.sin(S*1.3)*.045+Math.sin(y*18)*.12*y,t.rotation.x=Math.sin(S*.9+1)*.03,t.scale.setScalar(1+I*.22),E.rotation.y=Math.sin(S*.8)*.15,v.rotation.y=Math.sin(S*.7+2)*.2,x.rotation.y=Math.sin(S*.75+4)*.2}}}const Os={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Fr=32,Gr=24,T2=3,fp=1,w2=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],R2={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function C2({cauda:n,olhos:e}){const t=w2.map(f=>[...f,...[...f].reverse()]),i=(f,l,u)=>{t[f][l]=u,t[f][23-l]=u};if(e==="piscando")for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"K"),i(9,f,"G");if(e==="feliz"){for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"G"),i(9,f,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Fr,a.height=Gr;const r=a.getContext("2d");t.forEach((f,l)=>f.forEach((u,h)=>{u!=="."&&(r.fillStyle=Os[u],r.fillRect(h+T2,l+fp,1,1))})),R2[n].forEach(([f,l],u)=>{r.fillStyle=u%3===2?Os.D:Os.G,r.fillRect(f-1,l,2,1)});const s=r.getImageData(0,0,Fr,Gr).data,o=(f,l)=>f>=0&&l>=0&&f<Fr&&l<Gr&&s[(l*Fr+f)*4+3]>0;r.fillStyle=Os.K;for(let f=0;f<Gr;f++)for(let l=0;l<Fr;l++)!o(l,f)&&(o(l+1,f)||o(l-1,f)||o(l,f+1)||o(l,f-1))&&r.fillRect(l,f,1,1);return a}const kd=1;function P2(){const n={},e=(d,p)=>{if(!n[d]){const m=new Fo(C2(p));m.colorSpace=Xn,m.magFilter=m.minFilter=un,m.generateMipmaps=!1,n[d]=new Uf({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Jt,i=new Rh(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,fp/Gr),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const r=a.getContext("2d"),s=r.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,32,32);const o=new xt(new sa(.75,.5),new oa({map:new Fo(a),transparent:!0,opacity:.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03;const f=new Zt;f.position.y=.55;const l=new Zt;l.position.y=.8,t.add(o,i,f,l);let u=0,h=0;return{raiz:t,cabeca:f,topo:l,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const E=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${E}-${v}`,{cauda:E,olhos:v});const x=1+Math.sin(d*2.2)*.012;i.scale.set(Fr*m*kd,Gr*m*kd*x,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const up="curriculo-futebol-v1",hf=.25,I2=.085,L2=1.6,xi=1.8,$i=.9,Wn=.6,Mo=new z(0,1,0),D2=new z(0,.4,.92).normalize();function N2(){try{return JSON.parse(localStorage.getItem(up))?.gols|0}catch{return 0}}function U2(n){try{localStorage.setItem(up,JSON.stringify({gols:n}))}catch{}}function O2(){const n=new Yr(hf,2),e=(1+Math.sqrt(5))/2,t=[];for(const o of[-1,1])for(const f of[-e,e])t.push([0,o,f],[o,f,0],[f,0,o]);const i=t.map(o=>new z(...o).normalize()),a=n.attributes.position,r=new Float32Array(a.count*3),s=new z;for(let o=0;o<a.count;o+=3){s.set(0,0,0);for(let l=0;l<3;l++)s.add(new z(a.getX(o+l),a.getY(o+l),a.getZ(o+l)));s.normalize();const f=i.some(l=>s.dot(l)>Math.cos(.36));for(let l=0;l<3;l++)r.set(f?[.07,.07,.1]:[.97,.97,.97],(o+l)*3)}return n.setAttribute("color",new _i(r,3)),new xt(n,new yi({vertexColors:!0,flatShading:!0,roughness:.55}))}function F2(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Fo(n);return t.wrapS=t.wrapT=qs,t.magFilter=t.minFilter=un,t.generateMipmaps=!1,t}function B2(){const n=new Jt,e=new yi({color:16119285,roughness:.5,flatShading:!0}),t=o=>new Kt(.045,.045,o,6),i=(o,f,l,u,h)=>{const d=new xt(t(o),e);d.position.set(f,l,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const o of[-xi/2,xi/2])for(const f of[0,-Wn])i($i,o,$i/2,f,"y");for(const o of[0,-Wn])i(xi+.09,0,$i,o,"x"),i(xi+.09,0,.04,o,"x");for(const o of[-xi/2,xi/2])i(Wn,o,$i,-Wn/2,"z"),i(Wn,o,.04,-Wn/2,"z");const a=(o,f)=>{const l=F2();return l.repeat.set(o/.15,f/.15),new xt(new sa(o,f),new oa({map:l,transparent:!0,alphaTest:.3,side:ri,depthWrite:!1}))},r=a(xi,$i);r.position.set(0,$i/2,-Wn);const s=a(xi,Wn);s.rotation.x=Math.PI/2,s.position.set(0,$i,-Wn/2),n.add(r,s);for(const o of[-xi/2,xi/2]){const f=a(Wn,$i);f.rotation.y=Math.PI/2,f.position.set(o,$i/2,-Wn/2),n.add(f)}return n.traverse(o=>{o.isMesh&&o.material===e&&(o.castShadow=!0)}),n}function z2(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new xt(new sa(n*2,n*2),new oa({map:new Fo(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function G2({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:r,dirsZonas:s,raioBloqueio:o,obstaculos:f,dirsSitios:l,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=N2(),E=0,v="jogando",x=0,A=-1;const P=new Mi,y=new Mi,S=new Mi,T=new Mi,I=new z,_=new z,R=new z,L=new z,U=new z,V=new z,X=new Jt,k=O2(),$=z2(.35);k.position.y=hf,k.castShadow=!0;const ie=new Zt;ie.position.y=.85,X.add($,k,ie);const G={d:new z(0,1,0),ue:0,un:0,escala:1,piv:null};G.piv=e(X,G.d.clone(),0);const xe=B2(),re=new Zt;re.position.set(0,1.5,-Wn/2),xe.add(re);const le={d:new z(0,1,0),ex:new z,ez:new z,escala:1,piv:null};le.piv=e(xe,le.d.clone(),0);const de=Pe=>{const ut=document.createElement("div");return ut.className="rotulo pet",ut.textContent=Pe,h.append(ut),ut},Ke=de("bola"),Ue=de("gol"),yt=()=>m?`gol · ${m}`:"gol";function pt(Pe,ut,ue){if(!ue){Pe.style.opacity="0";return}ut.getWorldPosition(R).project(u),Pe.style.transform=`translate(${Math.round((R.x*.5+.5)*window.innerWidth)}px, ${Math.round((-R.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Pe.style.opacity="1"}const vt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Pe=>new z(...Pe));function fe({folga:Pe,jogadorMin:ut=0,jogadorMax:ue=Math.PI,visivel:Me=-1,longe:Ae=[],tentativas:we=400}){V.copy(Mo).applyQuaternion(P.copy(i).invert());const be=new z;for(let et=0;et<we;et++){be.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const ne=be.angleTo(V);if(!(ne<ut||ne>ue)&&!(Me>-1&&R.copy(be).applyQuaternion(i).dot(D2)<Me)&&!(a(be)<r+.1)&&!vt.some(Se=>a(R.copy(be).addScaledVector(Se,.07).normalize())<r+.03)&&!Ae.some(({d:Se,min:w})=>be.angleTo(Se)<w)&&!s.some((Se,w)=>be.angleTo(Se)<o[w]+Pe+.1)&&!f.some(Se=>be.angleTo(Se.d)<Se.r+Pe)&&!Object.values(l).some(Se=>be.angleTo(Se)<.25+Pe))return be.clone()}return null}function me(Pe,ut){le.d.copy(Pe),le.piv.quaternion.setFromUnitVectors(Mo,Pe),xe.rotation.y=ut,T.copy(le.piv.quaternion).multiply(y.setFromAxisAngle(Mo,ut)),le.ex.set(1,0,0).applyQuaternion(T),le.ez.set(0,0,1).applyQuaternion(T),le.escala=.01}function Ce(Pe){G.d.copy(Pe),G.piv.quaternion.setFromUnitVectors(Mo,Pe),G.ue=G.un=0,G.escala=.01}function ot(Pe){const ut=fe({folga:.3,jogadorMin:.9,jogadorMax:Pe?1.7:Math.PI,visivel:Pe?.3:-1})??fe({folga:.2,jogadorMin:.7,jogadorMax:Pe?1.9:Math.PI,visivel:Pe?.1:-1,tentativas:800})??fe({folga:.1,tentativas:800})??le.d.clone();me(ut,Math.random()*Math.PI*2);const ue=fe({folga:.12,jogadorMin:.55,jogadorMax:Pe?1:Math.PI,visivel:Pe?.5:-1,longe:[{d:ut,min:.9}]})??fe({folga:.06,jogadorMin:.4,tentativas:800})??G.d.clone();Ce(ue)}ot(!0);function Ve(){v="comemorando",x=E+1,m+=1,U2(m),Ue.textContent=yt(),re.getWorldPosition(R).project(u);const Pe=(R.x*.5+.5)*window.innerWidth,ut=(-R.y*.5+.5)*window.innerHeight;E2(Pe,ut+40,6);const ue=document.createElement("div");ue.className="popup",ue.textContent="GOL!",ue.style.left=`${Math.round(Pe)}px`,ue.style.top=`${Math.round(ut)}px`,ue.style.fontSize="30px",document.body.append(ue),setTimeout(()=>ue.remove(),1e3),[523,659,784,1047,1319].forEach((Me,Ae)=>p(Me,Ae===4?.4:.11,"square",.05,Ae*.09))}return{teste:{bola:G,gol:le,colocarBola:Ce,colocarGol:me,golsAtuais:()=>m},atualizar(Pe,{vLeste:ut,vNorte:ue,VEL:Me,pulando:Ae,pausado:we}){if(we)return;E+=Pe,P.copy(i).invert();const be=v==="comemorando";U.copy(G.d),I.copy(G.d).applyQuaternion(i);const et=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!be&&!Ae&&et<I2){const O=I.x,ct=-I.z,ke=Math.hypot(O,ct)||1,D=ut*Me,b=ue*Me,Y=Math.hypot(D,b);let Z,ce,ve;Y>.12&&(D*O+b*ct)/(Y*ke)>-.2?(Z=D/Y*.75+O/ke*.65,ce=b/Y*.75+ct/ke*.65,ve=Math.max(Math.hypot(G.ue,G.un),Y*1.5+.25)):(Z=O/ke,ce=ct/ke,ve=.5);const Re=Math.hypot(Z,ce)||1;G.ue=Z/Re*ve,G.un=ce/Re*ve,Y>.12&&E-A>.22&&(A=E,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const ne=Math.exp(-(be?5:L2)*Pe);G.ue*=ne,G.un*=ne;const Se=Math.hypot(G.ue,G.un);Se<.01?G.ue=G.un=0:(L.set(-G.un,0,-G.ue).normalize(),y.setFromAxisAngle(L,Se*Pe),I.applyQuaternion(y),G.d.copy(I).applyQuaternion(P).normalize());const w=(O,ct)=>{const ke=Math.cos(ct);G.d.dot(O)<=ke||(L.crossVectors(O,G.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),G.d.applyQuaternion(y.setFromAxisAngle(L,ct-Math.acos(Math.min(1,G.d.dot(O))))).normalize(),G.ue*=.3,G.un*=.3)};s.forEach((O,ct)=>w(O,o[ct]+.03));for(const O of f)w(O.d,O.r+.03);if(G.piv.quaternion.premultiply(y.setFromUnitVectors(U,G.d)),Se>=.01&&(R.set(G.ue,0,-G.un).normalize().applyQuaternion(P).applyQuaternion(T.copy(G.piv.quaternion).invert()),L.crossVectors(Mo,R),L.lengthSq()>1e-9&&k.quaternion.premultiply(S.setFromAxisAngle(L.normalize(),Se*t*Pe/hf))),G.escala=G.escala+(1-G.escala)*(1-Math.exp(-6*Pe)),X.scale.setScalar(G.escala),le.escala=le.escala+(1-le.escala)*(1-Math.exp(-6*Pe)),xe.scale.setScalar(le.escala*(be?1+Math.sin((E-x)*20)*.06:1)),be)E>=x&&(v="jogando",ot(!1));else{R.copy(G.d).sub(le.d);const O=R.dot(le.ex)*t,ct=R.dot(le.ez)*t+Wn/2;Math.abs(O)<xi/2-.12&&Math.abs(ct)<Wn/2-.02&&Math.abs(R.dot(le.d))<.2&&Ve()}_.copy(le.d).applyQuaternion(i),pt(Ke,ie,I.dot(d)>.2),pt(Ue,re,_.dot(d)>.2)}}}const Yf=location.pathname.match(/(?:^|\/)(yas|fer)\/?$/i)?.[1]?.toLowerCase()||"padrao",fn=Yf==="yas",an=Yf==="fer";document.documentElement.classList.toggle("tema-yas",fn);document.documentElement.classList.toggle("tema-fer",an);const V2={ceu:2366231,estrelas:16766627,nuvens:16179144,atmosfera:14252357,luzCeu:16766376,luzSolo:3352095,sol:16760952,lua:16760179,marRaso:9091234,marMedio:5209968,marFundo:2706502,espuma:16181976,areia:14202510,grama0:7439195,grama1:5401421,grama2:3427388,tronco:7754045,copa:[4743236,6058573],copa2:8228187,pedra:9271144},pf={ceu:329751,estrelas:9431807,nuvens:7440061,atmosfera:3109631,luzCeu:9551871,luzSolo:1120053,sol:10213375,lua:9411839,marRaso:5628640,marMedio:2522790,marFundo:1321820,espuma:14089215,areia:7964337,grama0:3491202,grama1:2635373,grama2:1515339,tronco:2107727,copa:[3234444,4217760],copa2:6650832,pedra:4937855},Nt=fn?V2:an?pf:null,ei=5,Pa=6.5/ei,mf=.7,ac=new z(0,1,0),k2=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function gf(n,e){const t=e*Math.PI/180;return new z(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const H2=n=>gf(...k2[n]??[1.2+n%3*.5,n*137.5]),li=bn.map((n,e)=>H2(e)),ra={jasmim:gf(.4,180),mazzy:gf(.5,295)},dp=(n,e)=>Object.values(ra).some(t=>n.angleTo(t)<e),W2=.6,hp=n=>n.escala??W2,Jo=bn.map(n=>1.85*hp(n)/ei+.03),X2=Jo.map(n=>n+.22),q2=(n,e,t)=>n+(e-n)*t,Kr=(n,e,t)=>Math.max(e,Math.min(t,n)),Ws=(n,e,t,i)=>q2(n,e,1-Math.exp(-t*i));function $f(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Y2(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function dl(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,f=t-r,l=m=>m*m*(3-2*m),u=l(s),h=l(o),d=l(f);let p=0;for(let m=0;m<2;m++)for(let E=0;E<2;E++)for(let v=0;v<2;v++){const x=(m?u:1-u)*(E?h:1-h)*(v?d:1-d);p+=x*Y2(i+m,a+E,r+v)}return p}const Hd=Math.cos(.5);function gc(n){const e=dl(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+dl(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+dl(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>Hd&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of li){const a=n.dot(i);a>Hd&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const xc=.5,$2=window.matchMedia?.("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<900,J2=Number(navigator.deviceMemory||8)<=4,ko=$2||J2,Qn=new r_({antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});Qn.setPixelRatio(Math.min(window.devicePixelRatio||1,ko?1:2));Qn.shadowMap.enabled=!0;Qn.shadowMap.type=Eo;document.body.appendChild(Qn.domElement);const Yn=new Eh;Yn.background=new St(Nt?.ceu??725030);const dn=new ai(42,1,.1,200);Yn.add(new ng(Nt?.luzCeu??12374271,Nt?.luzSolo??2366541,Nt?1.25:1));const Na=new rg(Nt?.sol??16773332,Nt?2.15:1.9);Na.position.set(7,ei+9,9);Na.target.position.set(0,2,0);Na.castShadow=!0;Na.shadow.mapSize.set(ko?1024:2048,ko?1024:2048);Object.assign(Na.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});Na.shadow.bias=-4e-4;Yn.add(Na,Na.target);const xf=new Ih({color:Nt?.estrelas??16777215,size:Nt?.48:.42,sizeAttenuation:!0,fog:!1}),vf=new yi({color:Nt?.nuvens??16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),Mf=[],_f=[],Sf={uMarRaso:{value:new St(Nt?.marRaso??5685998)},uMarMedio:{value:new St(Nt?.marMedio??3112924)},uMarFundo:{value:new St(Nt?.marFundo??1922744)},uEspuma:{value:new St(Nt?.espuma??13955580)},uAreia:{value:new St(Nt?.areia??15981987)},uGrama0:{value:new St(Nt?.grama0??7327594)},uGrama1:{value:new St(Nt?.grama1??5027680)},uGrama2:{value:new St(Nt?.grama2??3117141)}};{const n=$f(3),e=[];for(let a=0;a<900;a++){const r=new z(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new En;t.setAttribute("position",new tn(e,3)),Yn.add(new fm(t,xf));const i=new xt(new _n(4,32,32),new oa({color:Nt?.lua??16773577,fog:!1}));i.position.set(24,16,-62),Yn.add(i)}const Qr=new Jt;Yn.add(Qr);{const i=new Uint8Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new z,s=255;for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const E=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const x=(v+.5-2)/320*2-1,[A,P,y]=a[h](x,E);r.set(A,P,y).normalize();const S=((p+m)*3*324+d+v)*4;i[S]=Math.round(Kr(gc(r),0,1)*255),i[S+3]=s}}}const o=new Ph(i,3*324,2*324,si,Bn);o.minFilter=o.magFilter=Sn,o.generateMipmaps=!1,o.needsUpdate=!0;const f=new yi({roughness:.9});f.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:xc}},Sf),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const l=new xt(new _n(ei,128,96),f);l.receiveShadow=!0,Qr.add(l);const u=new xt(new _n(ei*1.06,48,48),new oa({color:Nt?.atmosfera??6990079,transparent:!0,opacity:Nt?.16:.1,side:Gn,depthWrite:!1}));Yn.add(u)}function Ra(n,e,t=0){const i=new Jt;return i.quaternion.setFromUnitVectors(new z(0,1,0),e),n.position.y=ei,n.rotation.y=t,i.add(n),Qr.add(i),i}const ft=(n,e={})=>new yi({color:n,roughness:.8,flatShading:!0,...e});function Ja(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const Jr=[];{const n=$f(77),e=new z,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(ac)<.3*Pa)&&!li.some((a,r)=>e.angleTo(a)<Jo[r]+.2)&&!dp(e,.2)&&!(gc(e)<xc+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Jt,s=.5+n()*.45,o=new xt(new Kt(.1,.14,.6,6),ft(Nt?.tronco??8014379));o.position.y=.3;const f=n()>.5?0:1,l=new xt(fn?new Yr(.62,1):an?new ec(.62,0):new Ii(.5,1.2,7),ft(Nt?Nt.copa[f]:f===0?3120732:2460238,an?{emissive:pf.copa[f],emissiveIntensity:.16}:{}));Mf.push({m:l.material,v:f}),l.position.y=fn?1.05:an?1.18:1.1,fn&&l.scale.set(1.15,.86,1.05),an&&l.scale.set(.78,1.2,.78);const u=new xt(fn?new Yr(.48,1):an?new ec(.43,0):new Ii(.38,.9,7),ft(Nt?.copa2??3453032,an?{emissive:pf.copa2,emissiveIntensity:.2}:{}));_f.push(u.material),u.position.set(fn?.18:0,fn?1.48:an?1.75:1.7,0),fn&&u.scale.set(1.1,.8,1),an&&u.scale.set(.78,1.15,.78),r.add(o,l,u),r.scale.setScalar(s),Ra(Ja(r),a,n()*6),Jr.push({d:a,r:(.05*s+.02)*Pa})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new xt(new Ff(.22+n()*.25,0),ft(Nt?.pedra??9278376));r.position.y=.1;const s=new Jt;s.add(r),Ra(Ja(s),a,n()*6),Jr.push({d:a,r:.045*Pa,baixo:!0})}if(fn)for(let i=0;i<24;i++){const a=t();if(!a)continue;const r=new Jt,s=i%5,o=(l,u,h,d,p,m,E)=>{const v=new xt(new aa(l,u,h),ft(d));return v.position.set(p,m,E),r.add(v),v},f=(l,u,h,d,p)=>{const m=new xt(new _n(l,8,6),ft(u));return m.position.set(h,d,p),r.add(m),m};if(s===0){const l=new xt(new Kt(.18,.25,.35,8),ft(11034428));l.position.y=.18,r.add(l),o(.04,.55,.04,4808772,0,.58,0);for(const[u,h,d,p]of[[-.2,.62,0,.17],[.18,.72,.05,.16],[-.12,.88,-.03,.15],[.2,.98,0,.13]])f(p,h>.8?8228187:5401421,u,h,d).scale.set(1.2,.65,.8)}else if(s===1)[[6108456,0,.07],[13732439,.05,.18],[4216904,-.03,.29]].forEach(([l,u,h],d)=>{const p=o(.65-d*.06,.11,.42,l,u,h,0);p.rotation.y=(d-1)*.14,o(.5-d*.05,.02,.43,15391687,u,h,.01)});else if(s===2){o(.62,.62,.06,13940112,0,.36,0);const l=new xt(new Kt(.25,.25,.035,18),ft(1512723));l.rotation.x=Math.PI/2,l.position.set(.08,.38,.05),r.add(l);const u=new xt(new Kt(.07,.07,.04,12),ft(13201221));u.rotation.x=Math.PI/2,u.position.set(.08,.38,.08),r.add(u)}else if(s===3){f(.26,10116663,0,.3,0).scale.set(.85,1.1,.34),f(.18,12088132,0,.55,0).scale.set(.8,1,.32),o(.09,.65,.07,6635564,0,.92,0),o(.24,.12,.08,6635564,0,1.25,0);const h=f(.065,2366231,0,.38,.09);h.scale.z=.18}else{o(.58,.38,.26,2828581,0,.28,0),o(.22,.08,.2,7754045,-.12,.51,0);const l=new xt(new Kt(.15,.15,.18,12),ft(1514265));l.rotation.x=Math.PI/2,l.position.set(.1,.3,.2),r.add(l);const u=new xt(new Kt(.08,.08,.19,12),ft(9091234,{emissive:2706502,emissiveIntensity:.45}));u.rotation.x=Math.PI/2,u.position.set(.1,.3,.22),r.add(u)}r.scale.setScalar(.65+n()*.25),Ra(Ja(r),a,n()*Math.PI*2)}if(an)for(let i=0;i<24;i++){const a=t();if(!a)continue;const r=new Jt,s=i%5,o=(l,u=.55)=>ft(l,{emissive:l,emissiveIntensity:u}),f=(l,u,h,d,p)=>{const m=new xt(l,u);return m.position.set(h,d,p),r.add(m),m};if(s===0)for(const[l,u,h]of[[-.2,.75,4315135],[.08,1.05,6913023],[.28,.58,9133311]]){const d=f(new Ii(.13,u,5),o(h),l,u/2,0);d.rotation.z=l*.6}else if(s===1)for(const[l,u,h]of[[-.22,.42,5433087],[.12,.62,8228095],[.32,.33,11824383]])f(new Kt(.035,.05,u,6),ft(10135502),l,u/2,0),f(new _n(.16,8,5),o(h,.7),l,u,0).scale.set(1,.45,1);else if(s===2){f(new _n(.17,10,8),o(5825791,.8),0,.55,0);const l=f(new Ui(.38,.025,6,24),o(8886015,.5),0,.55,0);l.rotation.x=Math.PI/2.7,l.rotation.z=.35,f(new Kt(.12,.18,.25,8),ft(2635373),0,.13,0)}else if(s===3){const l=f(new Ui(.3,.09,8,20,Math.PI*1.45),o(11122175,.45),0,.5,0);l.rotation.z=-.55,f(new Kt(.035,.05,.55,6),ft(4937855),0,.2,0)}else{f(new Kt(.035,.06,.72,6),ft(8227245),0,.36,0),f(new _n(.11,8,6),o(5628640,.9),0,.78,0);for(const l of[0,.9,1.8]){const u=f(new Ui(.19+l*.08,.018,6,18),o(l>1?9133311:4315135,.5),0,.78,0);u.rotation.x=Math.PI/2,u.rotation.z=l}}r.scale.setScalar(.65+n()*.28),Ra(Ja(r),a,n()*Math.PI*2)}}const Jf=new Jt;Yn.add(Jf);{const n=$f(5),e=vf;for(let t=0;t<10;t++){const i=new z(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Jt;for(let s=0;s<4;s++){const o=new xt(new Yr(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=ei+4+n()*2.5;const r=new Jt;r.quaternion.setFromUnitVectors(new z(0,1,0),i),r.add(a),Jf.add(r),Ja(a)}}function Z2(n){const e=new Gf;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function K2(n,e){const t=new Jt,i=new St(e),a=ft(e,{emissive:e,emissiveIntensity:.1}),r=ft(i.clone().multiplyScalar(.78)),s=ft(i.clone().multiplyScalar(.5)),o=ft(10133684),f=ft(5922936),l=ft(10119740),u=ft(5913122),h=ft(15856635),d=ft(13225432),p=ft(1776942),m=ft(14693962),E=ft(16762941),v=new yi({color:16774856,emissive:16771488,emissiveIntensity:1.2}),x=(S,T,I=0,_=0,R=0)=>{const L=new xt(S,T);return L.position.set(I,_,R),t.add(L),L},A=(S,T,I,_,R,L,U)=>x(new aa(S,T,I),_,R,L,U),P=(S,T,I,_,R,L,U,V=12)=>x(new Kt(S,T,I,V),_,R,L,U),y=(S,T,I,_,R)=>x(new _n(S,10,8),T,I,_,R);switch(n){case"casa":{A(2.5,.22,2,o,0,.11,0),A(2.2,1.25,1.7,a,0,.84,0);for(const T of[-1,1]){const I=A(2.5,.12,1.15,s,0,1.78,T*.5);I.rotation.x=T*.62}A(2.56,.14,.16,ft(i.clone().multiplyScalar(.35)),0,2.13,0);const S=new Gf;S.moveTo(-.85,0),S.lineTo(.85,0),S.lineTo(0,.62),S.closePath();for(const T of[-1,1]){const I=x(new js(S,{depth:.06,bevelEnabled:!1}),a,T*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}A(.3,.8,.3,f,.65,2,-.28),A(.4,.08,.4,o,.65,2.42,-.28),A(.62,1,.04,h,0,.72,.86),A(.5,.9,.06,u,0,.67,.88),y(.04,d,.16,.65,.93),A(.9,.12,.4,o,0,.1,1.2);for(const T of[-.72,.72]){A(.55,.55,.05,h,T,.98,.86),A(.42,.42,.06,v,T,.98,.88),A(.04,.42,.07,h,T,.98,.89),A(.42,.04,.07,h,T,.98,.89);for(const I of[-1,1])A(.14,.5,.04,r,T+I*.38,.98,.88)}for(const T of[-1,1])A(.05,.5,.5,h,T*1.11,.95,.1),A(.06,.38,.38,v,T*1.12,.95,.1);y(.07,v,.5,1.2,.92),P(.04,.04,.5,l,1.55,.45,1.1,6),A(.32,.22,.22,m,1.55,.8,1.1),A(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,E],[-.7,ft(16747216)],[-.55,m]].forEach(([T,I])=>y(.07,I,T,.4,1.2));break}case"predio":{A(2.4,.2,2.2,f,0,.1,0),A(2,.7,1.8,s,0,.55,0),A(1.7,2.6,1.5,a,0,2.15,0),A(1.2,.5,1.05,r,0,3.7,0);for(let S=0;S<5;S++)for(let T=0;T<3;T++)A(.34,.36,.05,(S*2+T)%5===0?s:v,-.5+T*.5,1.2+S*.5,.77);for(let S=0;S<5;S++)for(const T of[-1,1])for(let I=0;I<2;I++)A(.05,.36,.34,(S+I)%3===0?s:v,T*.86,1.2+S*.5,-.3+I*.6);for(const S of[1,3.45])A(1.78,.07,1.58,s,0,S,0);A(.7,.55,.05,v,0,.45,.93),A(.04,.55,.06,s,0,.45,.94),A(1.2,.08,.55,m,0,.86,1.12);for(const S of[-1,1])P(.03,.03,.62,d,S*.55,.55,1.36,6);A(.9,.14,.05,v,0,3.7,.54),P(.22,.22,.5,l,.3,4.2,.1),x(new Ii(.26,.2,10),u,.3,4.55,.1),A(.3,.2,.3,o,-.3,4.05,.25),P(.025,.025,.9,d,-.3,4.4,-.2,6),y(.07,ft(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{A(2.4,.16,2.4,f,0,.08,0);for(let S=0;S<9;S++)A(.26,.05,.12,S%2?p:E,-1.04+S*.26,.18,1.12);P(.5,.56,2.3,h,0,1.9,0,16),x(new Ii(.5,1,16),a,0,3.55,0),P(.52,.52,.16,m,0,2.95,0,16),P(.58,.58,.1,s,0,.8,0,16),x(new Ui(.21,.045,8,18),d,0,2.4,.5),y(.18,ft(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let S=0;S<3;S++){const T=A(.08,.9,.7,a,0,1,0),I=new Jt;I.rotation.y=S/3*Math.PI*2+.5,T.position.set(.62,1,0),T.parent.remove(T),I.add(T),t.add(I)}x(new Ii(.34,.8,10),ft(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const S of[-.35,.35])A(.1,3.5,.1,d,1.1,1.9,S);for(const S of[.7,1.5,2.3,3.1])A(.08,.08,.7,d,1.1,S,0);A(.75,.1,.12,d,.75,2.6,0),y(.07,v,1.1,3.7,0),x(new Kt(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const S of[-1.3,-.7])A(.08,.2,.3,d,S,.25,.7);break}case"estrela":{P(1.15,1.3,.2,o,0,.1,0,20),P(.8,.95,.22,f,0,.31,0,20),P(.16,.22,1.5,d,0,1.15,0),P(.3,.3,.1,d,0,1.95,0);const S=new Jt;S.name="gira",S.position.y=2.85,t.add(S);const T=new xt(new js(Z2(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),ft(e,{emissive:e,emissiveIntensity:.55}));T.position.z=-.15,S.add(T);const I=new xt(new Ui(1.25,.03,8,40),ft(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,S.add(I),[0,2.1,4.2].forEach((_,R)=>{const L=new xt(new _n(.1,10,8),ft([16735631,5822207,16769354][R],{emissive:[16735631,5822207,16769354][R],emissiveIntensity:.7}));L.position.set(Math.cos(_)*1.25,0,Math.sin(_)*1.25),S.add(L)});break}case"cassino":{const S=ft(13620959,{emissive:3818064,emissiveIntensity:.25}),T=(I,_)=>A(.36,.5,.06,ft(_,{emissive:_,emissiveIntensity:.7}),I,2.05,.66);P(1.3,1.4,.16,f,0,.08,0,20),A(2.2,.3,1.6,s,0,.3,0),A(1.8,2.7,1.3,S,0,1.8,0),A(2,.55,1.4,s,0,3.35,0),A(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)y(.06,I%2?v:m,-.96+I*.24,3.66,.68);A(1.45,.75,.1,ft(1381675),0,2.2,.62),T(-.46,16726858),T(0,16769354),T(.46,5822207);for(const[I,_]of[[-.45,16726858],[0,5822090],[.45,5810431]])P(.1,.1,.08,ft(_,{emissive:_,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;A(.5,.06,.04,p,0,1.3,.66),A(1.2,.28,.45,s,0,.95,.8),P(.06,.06,1.1,d,1.12,2.1,0,8),y(.2,ft(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const S=fn?4808772:an?1518425:4892927,T=fn?15914926:an?5891583:9163775,I=fn?12019775:an?7101695:16743001,_=ft(S,{emissive:fn?2505778:an?924226:1922744,emissiveIntensity:.4}),R=ft(T,{emissive:fn?12019775:an?1339296:4892927,emissiveIntensity:.6}),L=ft(I,{emissive:fn?7287846:an?3416696:9058848,emissiveIntensity:.3}),U=fn?ft(12166539):an?ft(9543880):d;x(new _n(.95,16,12),_,0,1.85,0).scale.set(1,.85,1),x(new Ui(.92,.05,8,28),U,0,1.85,0).rotation.x=Math.PI/2,x(new _n(.58,14,10),R,0,2.15,.35),x(new _n(.2,8,8),ft(fn?16773591:an?14089215:16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let V=0;V<4;V++){const X=V*Math.PI/2,k=x(new aa(.55,.14,.95),L,Math.cos(X)*1.05,1.7,Math.sin(X)*1.05);k.rotation.y=-X}for(let V=0;V<3;V++){const X=V*Math.PI*2/3+.4,k=x(new Kt(.05,.07,1,8),U,Math.cos(X)*.62,.62,Math.sin(X)*.62);k.rotation.z=Math.cos(X)*.3,k.rotation.x=-Math.sin(X)*.3,x(new Kt(.16,.16,.05,8),U,Math.cos(X)*.78,.12,Math.sin(X)*.78)}if(x(new Ii(.3,.55,10),ft(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,P(.03,.03,.6,U,0,2.95,0,6),y(.1,ft(fn?14191445:an?5628640:16726858,{emissive:fn?12019775:an?3109631:16726858,emissiveIntensity:.8}),0,3.28,0),fn){const V=ft(9545067,{emissive:3427388,emissiveIntensity:.2});for(const[X,k,$]of[[-.2,1.92,-.55],[.2,1.92,.55]]){const ie=y(.12,V,X,k,.86);ie.scale.set(.45,1,.35),ie.rotation.z=$}y(.055,ft(15054940),0,1.92,.94),A(.3,.08,.04,ft(15259064),-.47,1.56,.82),A(.18,.07,.045,ft(13201221),.52,1.68,.83)}if(an){const V=ft(10332927,{emissive:5467391,emissiveIntensity:.55}),X=x(new Ui(.18,.05,7,20,Math.PI*1.45),V,0,1.93,.91);X.rotation.z=-.65;for(const[k,$,ie]of[[-.5,1.62,5628640],[.5,1.7,9137407]]){const G=x(new Ii(.075,.28,5),ft(ie,{emissive:ie,emissiveIntensity:.7}),k,$,.83);G.rotation.z=k*.4}}break}case"carta":{P(.26,.32,.4,o,0,.2,0,10),P(.12,.15,1,d,0,.9,0,8),A(1.7,.9,.9,a,0,1.85,0);const S=x(new Kt(.45,.45,1.7,16,1,!1,0,Math.PI),ft(e,{emissive:e,emissiveIntensity:.1,side:ri}),0,2.3,0);S.rotation.z=Math.PI/2,A(1,.07,.05,p,0,2.02,.46),A(1.5,.5,.04,r,0,1.62,.46),A(.4,.26,.03,h,-.42,1.62,.49),y(.05,m,-.42,1.62,.52),P(.025,.025,.7,d,.9,2,0,6),A(.32,.22,.04,m,1.05,2.28,0),P(.035,.045,1.9,d,-1.2,.95,.5,6),y(.1,v,-1.2,1.95,.5),A(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const Q2={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},j2=new yi({color:16774856,emissive:16771488,emissiveIntensity:1.3}),pp=bn.map((n,e)=>{const t=new Jt,i=new Jt,a=new xt(new Kt(1.85,1.95,.12,28),ft(3883096));a.position.y=.04;const r=new xt(new Kt(1.55,1.65,.14,28),ft(new St(n.cor).multiplyScalar(.45)));r.position.y=.1,i.add(a,r);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new xt(new Kt(.035,.045,.55,6),ft(13225432));m.position.set(d,.38,p);const E=new xt(new _n(.08,8,6),j2);E.position.set(d,.7,p),i.add(m,E)}const s=new xt(new Ui(2.08,.07,8,48),new oa({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const o=K2(n.icone,n.cor);o.position.y=.17;const f=new Zt;f.position.y=Q2[n.icone]??4.5,t.add(i,s,o,f),Ja(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar(hp(n)),Ra(t,li[e],0);const l=o.getObjectByName("gira");return{raiz:t,anel:s,icone:o,topo:f,gira:l,giraY:l?l.position.y:0}}),Zf=A2(ft),Kf=P2();Ra(Zf.raiz,ra.jasmim,.4);Ra(Kf.raiz,ra.mazzy,0);Jr.push({d:ra.jasmim,r:.035*Pa},{d:ra.mazzy,r:.055*Pa});const nr=fn?{pasta:"avatar-yas",frames:{parado:5,andar:6,correr:5,pular:5},largura:168,altura:332,pesY:292,escala:.55}:an?{pasta:"avatar-fer",frames:{parado:5,andar:5,correr:4,pular:5},largura:128,altura:176,pesY:164,escala:1}:{pasta:"avatar",frames:{parado:4,andar:5,correr:5,pular:5},largura:84,altura:182,pesY:168,escala:1},Xs=nr.frames,eS=["direita","esquerda","norte","sul"],Wd=Nt?[0,1,2,3,4,3,2,1]:[0,1,2,3,2,1],mp=nr.largura,Ho=nr.altura,tS=nr.pesY,nS="./",iS=new tg,wa={};for(const[n,e]of Object.entries(Xs)){wa[n]={};for(const t of eS)wa[n][t]=Array.from({length:e},(i,a)=>{const r=iS.load(`${nS}${nr.pasta}/${n}-${t}-${a}.png`);return r.colorSpace=Xn,r.magFilter=r.minFilter=un,r.generateMipmaps=!1,new Uf({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Zo=3.6,Qf=Zo*(mp/Ho);const Ia=new Rh(wa.parado.sul[0]);Ia.center.set(.5,(Ho-tS)/Ho);Ia.scale.set(Qf,Zo,1);Ia.position.y=ei;Yn.add(Ia);const Xd=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new xt(new sa(1.7,1.7),new oa({map:new Fo(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=ei+.04,Yn.add(i),i})(),Ua=n=>document.querySelector(n);Ua("#nome").textContent=`${Cd.nome} · ${Cd.titulo}`;const gp=Ua("#pontos"),aS=Ua("#fichas-hud b");bn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),gp.appendChild(e)});const _o=Ua("#painel"),xp=Ua("#acao");let qd=-2,Ka=-1;const vp="curriculo-visitadas-v1",Za=new Set;try{for(const n of JSON.parse(localStorage.getItem(vp))||[])bn.some(e=>e.id===n)&&Za.add(n)}catch{}const rS=["↑","↗","→","↘","↓","↙","←","↖"];function oS(n){let e=-1,t=1/0;if(bn.forEach((s,o)=>{if(o===n||Za.has(s.id))return;const f=li[n].angleTo(li[o]);f<t&&(t=f,e=o)}),e<0)return null;const i=new z().copy(li[e]).applyQuaternion(bi),a=Math.atan2(i.x,-i.z),r=Math.acos(Kr(i.y,-1,1));return{id:bn[e].id,seta:rS[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(r/mf))}}function Mp(n){[...gp.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",Za.has(bn[t].id))})}Mp(-1);function sS(n){if(n!==qd){if(qd=n,n<0)_o.classList.remove("on");else{const e=bn[n];if(!Za.has(e.id)){Za.add(e.id);try{localStorage.setItem(vp,JSON.stringify([...Za]))}catch{}}_o.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),_o.querySelector("h2").textContent=e.titulo,Ua("#texto").replaceChildren(...m2(e,{zonas:bn,visitadas:Za,proxima:oS(n)})),_o.scrollTop=0,xp.hidden=!e.jogo,_o.classList.add("on")}Mp(n)}}const Li=new Set;window.addEventListener("keydown",n=>{if(!(zn.estaAberto()||tu.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&Ka>=0&&bn[Ka].jogo){Li.clear(),Ap(bn[Ka].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&Ca){Ep(Ca);return}Li.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>Li.delete(n.code));window.addEventListener("blur",()=>Li.clear());const ji={x:0,y:0,pulo:!1},Wo=new Map;function jf(){ji.x=0,ji.y=0;const n=Wo.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;ji.x=e*a,ji.y=-t*a}}const eu=Qn.domElement;eu.addEventListener("pointerdown",n=>{Wo.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),jf()});eu.addEventListener("pointermove",n=>{const e=Wo.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,jf())});for(const n of["pointerup","pointercancel","pointerleave"])eu.addEventListener(n,e=>{const t=Wo.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(ji.pulo=!0,setTimeout(()=>{ji.pulo=!1},120)),Wo.delete(e.pointerId),jf()});const cS=ko?420:640,_p=19,Xo=new ci(2,2,{minFilter:un,magFilter:un,type:Bn,samples:0});Xo.depthTexture=new Xr(2,2);const Sp=new Eh,lS=new dc(-1,1,1,-1,0,1),yp=new Si({uniforms:{tCor:{value:Xo.texture},tProf:{value:Xo.depthTexture},uPixel:{value:new Ne(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:dn.near},uFar:{value:dn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});Sp.add(new xt(new sa(2,2),yp));function bp(){const n=window.innerWidth,e=window.innerHeight;Qn.setSize(n,e),dn.aspect=n/e,dn.userData.afasta=1/Kr(dn.aspect/1.1,.5,1),dn.updateProjectionMatrix();const t=Math.min(cS,e),i=Math.max(2,Math.round(t*dn.aspect));Xo.setSize(i,t),yp.uniforms.uPixel.value.set(1/i,1/t);const a=2*_p*dn.userData.afasta*Math.tan(V0.degToRad(dn.fov/2))/t;Zo=Ho*a*nr.escala,Qf=mp*a*nr.escala}window.addEventListener("resize",bp);bp();const bi=Qr.quaternion,Yd=new URLSearchParams(location.search).get("zona");if(Yd!==null){const n=Kr(Math.round(Number(Yd))||0,0,bn.length-1);bi.setFromUnitVectors(li[n],new z(.25,1,-.2).normalize())}const fS=2*7.2/20;let va=0,Ma=0,Xa=0,Fs=0,Nr=!0,hl=0,$d=!1,qn=0,_a="sul",pl=0;const qa=new z,rc=new Mi,ea=new z,oc=n=>Math.acos(Kr(ea.copy(n).applyQuaternion(bi).y,-1,1));function Jd(n,e){if(ea.copy(n).applyQuaternion(bi),ea.y<.8)return;const t=Math.acos(Math.min(1,ea.y));t>=e||(qa.crossVectors(ac,ea),qa.lengthSq()<1e-10&&qa.set(0,0,1),qa.normalize(),rc.setFromAxisAngle(qa,e-t),bi.premultiply(rc))}const jr=document.createElement("div");jr.id="rotulos";document.body.append(jr);const uS=bn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,jr.append(e),e}),sc=new z,ml=new z;function dS(n){sc.copy(dn.position).normalize(),bn.forEach((e,t)=>{const i=uS[t];if(ea.copy(li[t]).applyQuaternion(bi),t===n||ea.dot(sc)<.2){i.style.opacity="0";return}pp[t].topo.getWorldPosition(ml).project(dn),i.style.transform=`translate(${Math.round((ml.x*.5+.5)*window.innerWidth)}px, ${Math.round((-ml.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const hS=.2,cc=v2(),Ur=(n,e,t="triangle",i=.05,a=0)=>zn.bip(n,e,t,i,a),yf=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:ra.jasmim,modelo:Zf,livre:0,som:()=>{Ur(1047,.12,"sine"),Ur(1319,.12,"sine",.05,.09),Ur(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:ra.mazzy,modelo:Kf,livre:0,som:()=>{Ur(680,.09),Ur(930,.1,"triangle",.05,.07),Ur(620,.2,"triangle",.045,.15)}}],ir=document.createElement("button");ir.id="carinho";ir.hidden=!0;document.body.append(ir);const pS=yf.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",jr.append(n),n}),qo=document.createElement("div");qo.className="rotulo frase";qo.textContent="♥ a flor mais bela do meu mundo todo";const mS=new z(0,-7.7,0);let gl=0;jr.append(qo);let Ca=null,Zd="";const Ki=new z;function Ep(n){qn<n.livre||(n.livre=qn+.5,n.modelo.carinho(),cc[n.id]+=1,M2(cc),n.modelo.cabeca.getWorldPosition(Ki).project(dn),b2((Ki.x*.5+.5)*window.innerWidth,(-Ki.y*.5+.5)*window.innerHeight,5),n.som())}ir.addEventListener("click",()=>{Ca&&Ep(Ca),ir.blur()});function gS(n,e){let t=null,i=1/0;for(const o of yf){const f=oc(o.d);f<hS&&f<i&&(i=f,t=o)}Ca=e?null:t;const a=Ca?`♥ ${Ca.frase} [E]`:"";a!==Zd&&(Zd=a,ir.textContent=a.toUpperCase(),ir.hidden=!a);const r=Zo/Ho;Zf.atualizar(qn,n),Kf.atualizar(qn,n,r),yf.forEach((o,f)=>{const l=pS[f];if(ea.copy(o.d).applyQuaternion(bi),o===Ca||ea.dot(sc)<.2){l.style.opacity="0";return}o.modelo.topo.getWorldPosition(Ki).project(dn),l.textContent=cc[o.id]?`${o.nome} ♥ ${cc[o.id]}`:o.nome,l.style.transform=`translate(${Math.round((Ki.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Ki.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,l.style.opacity="1"});const s=Kr((.42-oc(ra.jasmim))/.22,0,1);gl=Ws(gl,.8*s,3,n),Ki.copy(mS).project(dn),qo.style.transform=`translate(${Math.round((Ki.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Ki.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,qo.style.opacity=gl.toFixed(2)}const Kd={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function xS(n){if(Nt){for(const[a,r]of Object.entries(Kd))Sf[r].value.set(Nt[a]);for(const{m:a,v:r}of Mf)a.color.set(Nt.copa[r%Nt.copa.length]);for(const a of _f)a.color.set(Nt.copa2);Yn.background.set(Nt.ceu),xf.color.set(Nt.estrelas),vf.color.set(Nt.nuvens);return}const e=Po(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries(Kd))Sf[r].value.set(e[a]);const t=Po(n.arvores)?.cores;if(t){for(const{m:a,v:r}of Mf)a.color.set(t.copa[r%t.copa.length]);for(const a of _f)a.color.set(t.copa2)}const i=Po(n.ceu)?.cores;i&&(Yn.background.set(i.fundo),xf.color.set(i.estrelas),vf.color.set(i.nuvens))}const zn=g_({aoMudarSkins:xS,aoMudarFichas:n=>{aS.textContent=String(n)}}),tu=s2({bip:(...n)=>zn.bip(...n),somAtivo:()=>zn.somAtivo(),tema:Yf}),vS=G2({planeta:Qr,fincar:Ra,R:ei,q:bi,altura:gc,NIVEL_MAR:xc,dirsZonas:li,raioBloqueio:Jo,obstaculos:Jr,dirsSitios:ra,camera:dn,rotulosEl:jr,camDir:sc,bip:(...n)=>zn.bip(...n)}),MS=x2({somAtivo:()=>zn.somAtivo()}),bf=Ua("#som");let xl=null;bf.addEventListener("click",()=>{zn.alternarSom(),bf.blur()});function Ap(n){n==="arcade"?tu.abrir():zn.abrir()}xp.addEventListener("click",()=>{Ka>=0&&bn[Ka].jogo&&(Li.clear(),Ap(bn[Ka].jogo))});const _S=4,Qd=5,SS=.2*Pa,yS=new yi({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),jd=new yi({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),nu=[],bS=new z;function Tp(n){const e=new z;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(gc(e)<xc+.06)&&!(bS.copy(e).applyQuaternion(bi).angleTo(ac)<.45*Pa)&&!(li.some((i,a)=>e.angleTo(i)<Jo[a]+.2)||dp(e,.25))&&!Jr.some(i=>e.angleTo(i.d)<i.r+.09*Pa)&&!nu.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(ac,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=qn+2}for(let n=0;n<_S;n++){const e=new Jt,t=new Jt,i=new xt(new Kt(.3,.3,.08,12),yS),a=new xt(new Kt(.2,.2,.1,12),jd);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,f=new xt(new aa(.1,.14,.1),jd);f.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),f.rotation.x=o,t.add(f)}t.position.y=ei+.7,e.add(t),Ja(e),Qr.add(e);const r={d:new z,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};nu.push(r),Tp(r)}const Bs=new z;function ES(n){Ia.getWorldPosition(Bs),Bs.project(dn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((Bs.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-Bs.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function AS(n){for(const e of nu){if(!e.ativa){qn>=e.volta&&Tp(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=ei+.7+Math.sin(qn*3+e.fase)*.08,oc(e.d)<SS&&(e.ativa=!1,e.raiz.visible=!1,e.volta=qn+25+Math.random()*25,zn.adicionarFichas(Qd),ES("+"+Qd),zn.bip(988,.07,"square",.07),zn.bip(1319,.22,"square",.07,.08),zn.bip(1976,.3,"triangle",.05,.08))}}let eh=performance.now();Qn.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-eh)/1e3,.05);eh=n,qn+=e;const t=(y,S)=>Li.has(y)||Li.has(S)?1:0,i=zn.estaAberto()||tu.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||ji.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||ji.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(Li.has("ShiftLeft")||Li.has("ShiftRight"))&&(a*=1.7,r*=1.7),va=Ws(va,a,9,e),Ma=Ws(Ma,r,9,e);const f=Math.hypot(va,Ma);f>.003&&(qa.set(Ma,0,va).normalize(),rc.setFromAxisAngle(qa,f*mf*e),bi.premultiply(rc),$d=!0),li.forEach((y,S)=>Jd(y,Jo[S]));for(const y of Jr)y.baixo&&Xa>.5||Jd(y.d,y.r);bi.normalize(),$d&&Ua("#dica").classList.add("some"),!i&&(Li.has("Space")||ji.pulo)&&Nr&&(Fs=7.2,Nr=!1,pl=0),Nr||(Fs-=20*e,pl+=e,Xa+=Fs*e,Xa<=0&&(Xa=0,Fs=0,Nr=!0));const u=Math.min(1.7,f);if(f>.08){const y=Math.abs(va)>Math.abs(Ma)*1.1,S=Math.abs(Ma)>Math.abs(va)*1.1;y?_a=va>0?"direita":"esquerda":S&&(_a=Ma>0?"norte":"sul")}hl+=u*e*9;let h;if(Nr)f>1.2?h=wa.correr[_a][Math.floor(hl)%Xs.correr]:f>.08?h=wa.andar[_a][Math.floor(hl)%Xs.andar]:h=_a==="sul"?wa.parado.sul[Wd[Math.floor(qn*4)%Wd.length]]:wa.parado[_a][0];else{const y=Math.min(.999,pl/fS);h=wa.pular[_a][Math.floor(y*Xs.pular)]}Ia.material=h;const d=Nr&&f<=.08&&_a!=="sul"?Math.sin(qn*2.4)*.012:0;Ia.scale.set(Qf*(1-d*.5),Zo*(1+d),1),Ia.position.y=ei+Xa;const p=Math.min(Xa,1.5);Xd.scale.setScalar(1-p*.2),Xd.material.opacity=.55-p*.2;const m=dn.userData.afasta,E=_p*m,v=.42,x=1.5;dn.position.set(0,x+Math.sin(v)*E,Math.cos(v)*E),dn.lookAt(0,x,0),Jf.rotation.y=Math.sin(qn*.1)*.4;let A=-1,P=1/0;li.forEach((y,S)=>{const T=oc(y);T<X2[S]&&T<P&&(P=T,A=S)}),pp.forEach((y,S)=>{const T=S===A;y.anel.material.opacity=Ws(y.anel.material.opacity,T?.55+Math.sin(qn*4)*.25:0,8,e),y.gira&&(y.gira.rotation.y+=e*(T?2.4:.8),y.gira.position.y=y.giraY+Math.sin(qn*1.6+S)*(T?.12:.06))}),Ka=A,sS(A),dS(A),AS(e),gS(e,i),vS.atualizar(e,{vLeste:va,vNorte:Ma,VEL:mf,pulando:Xa>.4,pausado:i}),MS.atualizar(e,i),zn.somAtivo()!==xl&&(xl=zn.somAtivo(),bf.classList.toggle("mudo",!xl)),ko?(Qn.setRenderTarget(null),Qn.render(Yn,dn)):(Qn.setRenderTarget(Xo),Qn.render(Yn,dn),Qn.setRenderTarget(null),Qn.render(Sp,lS))});
