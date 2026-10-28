(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const $f="186",b0=0,Xu=1,E0=2,Dr=1,A0=2,Ir=3,ao=0,kn=1,fi=2,sa=0,Ur=1,qu=2,$u=3,Yu=4,T0=5,$o=100,w0=101,R0=102,C0=103,P0=104,I0=200,L0=201,N0=202,D0=203,Ch=204,Ph=205,U0=206,O0=207,F0=208,B0=209,z0=210,G0=211,k0=212,V0=213,H0=214,Ol=0,Fl=1,Bl=2,Vr=3,zl=4,Gl=5,kl=6,Vl=7,Ih=0,W0=1,X0=2,zi=0,Lh=1,Nh=2,Dh=3,Uh=4,Oh=5,Fh=6,Bh=7,zh=300,oo=301,tr=302,Vc=303,Hc=304,Ac=306,sc=1e3,aa=1001,Hl=1002,ln=1003,q0=1004,vs=1005,Tn=1006,Wc=1007,Qa=1008,zn=1009,Gh=1010,kh=1011,Hr=1012,Yf=1013,ki=1014,Fi=1015,Vi=1016,Jf=1017,Zf=1018,Wr=1020,Vh=35902,Hh=35899,Wh=1021,Xh=1022,di=1023,fa=1026,eo=1027,qh=1028,Kf=1029,ro=1030,jf=1031,Qf=1033,ec=33776,tc=33777,nc=33778,ic=33779,Wl=35840,Xl=35841,ql=35842,$l=35843,Yl=36196,Jl=37492,Zl=37496,Kl=37488,jl=37489,cc=37490,Ql=37491,ef=37808,tf=37809,nf=37810,af=37811,of=37812,rf=37813,sf=37814,cf=37815,lf=37816,ff=37817,uf=37818,df=37819,hf=37820,pf=37821,mf=36492,gf=36494,xf=36495,vf=36283,Mf=36284,lc=36285,_f=36286,$0=3200,Sf=0,Y0=1,Pa="",qn="srgb",fc="srgb-linear",uc="linear",Xt="srgb",Xc=7680,J0=519,Z0=512,K0=513,j0=514,eu=515,Q0=516,em=517,tu=518,tm=519,$h=35044,Ju="300 es",Bi=2e3,Xr=2001;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function im(){const n=qr("canvas");return n.style.display="block",n}const Zu={};function dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Yh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function St(...n){n=Yh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ut(...n){n=Yh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function jo(...n){const e=n.join(" ");e in Zu||(Zu[e]=!0,St(...n))}function am(n,e,t){return new Promise(function(i,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const om={[Ol]:Fl,[Bl]:kl,[zl]:Vl,[Vr]:Gl,[Fl]:Ol,[kl]:Bl,[Vl]:zl,[Gl]:Vr};class uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,s=a.length;o<s;o++)a[o].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ku=1234567;const Or=Math.PI/180,$r=180/Math.PI;function Gi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function nu(n,e){return(n%e+e)%e}function rm(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function sm(n,e,t){return n!==e?(t-n)/(e-n):0}function Fr(n,e,t){return(1-t)*n+t*e}function cm(n,e,t,i){return Fr(n,e,1-Math.exp(-t*i))}function lm(n,e=1){return e-Math.abs(nu(n,e*2)-e)}function fm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function um(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function dm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hm(n,e){return n+Math.random()*(e-n)}function pm(n){return n*(.5-Math.random())}function mm(n){n!==void 0&&(Ku=n);let e=Ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gm(n){return n*Or}function xm(n){return n*$r}function vm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Mm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _m(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sm(n,e,t,i,a){const o=Math.cos,s=Math.sin,r=o(t/2),l=s(t/2),c=o((e+i)/2),u=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(r*u,l*h,l*d,r*c);break;case"YZY":n.set(l*d,r*u,l*h,r*c);break;case"ZXZ":n.set(l*h,l*d,r*u,r*c);break;case"XZX":n.set(r*u,l*m,l*p,r*c);break;case"YXY":n.set(l*p,r*u,l*m,r*c);break;case"ZYZ":n.set(l*m,l*p,r*u,r*c);break;default:St("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ym={DEG2RAD:Or,RAD2DEG:$r,generateUUID:Gi,clamp:It,euclideanModulo:nu,mapLinear:rm,inverseLerp:sm,lerp:Fr,damp:cm,pingpong:lm,smoothstep:fm,smootherstep:um,randInt:dm,randFloat:hm,randFloatSpread:pm,seededRandom:mm,degToRad:gm,radToDeg:xm,isPowerOfTwo:vm,ceilPowerOfTwo:Mm,floorPowerOfTwo:_m,setQuaternionFromProperEuler:Sm,normalize:qt,denormalize:yi},Ru=class Ru{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*a+e.x,this.y=o*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ru.prototype.isVector2=!0;let We=Ru;class bi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,s,r){let l=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=o[s+0],p=o[s+1],m=o[s+2],_=o[s+3];if(h!==_||l!==d||c!==p||u!==m){let v=l*d+c*p+u*m+h*_;v<0&&(d=-d,p=-p,m=-m,_=-_,v=-v);let x=1-r;if(v<.9995){const b=Math.acos(v),w=Math.sin(b);x=Math.sin(x*b)/w,r=Math.sin(r*b)/w,l=l*x+d*r,c=c*x+p*r,u=u*x+m*r,h=h*x+_*r}else{l=l*x+d*r,c=c*x+p*r,u=u*x+m*r,h=h*x+_*r;const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,o,s){const r=i[a],l=i[a+1],c=i[a+2],u=i[a+3],h=o[s],d=o[s+1],p=o[s+2],m=o[s+3];return e[t]=r*m+u*h+l*p-c*d,e[t+1]=l*m+u*d+c*h-r*p,e[t+2]=c*m+u*p+r*d-l*h,e[t+3]=u*m-r*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,s=e._order,r=Math.cos,l=Math.sin,c=r(i/2),u=r(a/2),h=r(o/2),d=l(i/2),p=l(a/2),m=l(o/2);switch(s){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],s=t[1],r=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+r+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-a)*p}else if(i>r&&i>h){const p=2*Math.sqrt(1+i-r-h);this._w=(u-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(o+c)/p}else if(r>h){const p=2*Math.sqrt(1+r-i-h);this._w=(o-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-r);this._w=(s-a)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,s=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*r+a*c-o*l,this._y=a*u+s*l+o*r-i*c,this._z=o*u+s*c+i*l-a*r,this._w=s*u-i*r-a*l-o*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,s=e._w,r=this.dot(e);r<0&&(i=-i,a=-a,o=-o,s=-s,r=-r);let l=1-t;if(r<.9995){const c=Math.acos(r),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+a*t,this._z=this._z*l+o*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cu=class Cu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,s=e.y,r=e.z,l=e.w,c=2*(s*a-r*i),u=2*(r*t-o*a),h=2*(o*i-s*t);return this.x=t+l*c+s*h-r*u,this.y=i+l*u+r*c-o*h,this.z=a+l*h+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,s=t.x,r=t.y,l=t.z;return this.x=a*l-o*r,this.y=o*s-i*l,this.z=i*r-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cu.prototype.isVector3=!0;let z=Cu;const qc=new z,ju=new bi,Pu=class Pu{constructor(e,t,i,a,o,s,r,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,s,r,l,c)}set(e,t,i,a,o,s,r,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=r,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,s=i[0],r=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],_=a[0],v=a[3],x=a[6],b=a[1],w=a[4],E=a[7],y=a[2],T=a[5],I=a[8];return o[0]=s*_+r*b+l*y,o[3]=s*v+r*w+l*T,o[6]=s*x+r*E+l*I,o[1]=c*_+u*b+h*y,o[4]=c*v+u*w+h*T,o[7]=c*x+u*E+h*I,o[2]=d*_+p*b+m*y,o[5]=d*v+p*w+m*T,o[8]=d*x+p*E+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*r*c-i*o*u+i*r*l+a*o*c-a*s*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=u*s-r*c,d=r*l-u*o,p=c*o-s*l,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(a*c-u*i)*_,e[2]=(r*i-a*s)*_,e[3]=d*_,e[4]=(u*t-a*l)*_,e[5]=(a*o-r*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,s,r){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*r)+s+e,-a*c,a*l,-a*(-c*s+l*r)+r+t,0,0,1),this}scale(e,t){return jo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return jo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return jo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pu.prototype.isMatrix3=!0;let Tt=Pu;const $c=new Tt,Qu=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){const n={enabled:!0,workingColorSpace:fc,spaces:{},convert:function(a,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Xt&&(a.r=ca(a.r),a.g=ca(a.g),a.b=ca(a.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Xt&&(a.r=Qo(a.r),a.g=Qo(a.g),a.b=Qo(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Pa?uc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,s){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fc]:{primaries:e,whitePoint:i,transfer:uc,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:Qu,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),n}const Dt=bm();function ca(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bo;class Em{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bo===void 0&&(bo=qr("canvas")),bo.width=e.width,bo.height=e.height;const a=bo.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=bo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let s=0;s<o.length;s++)o[s]=ca(o[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ca(t[i]/255)*255):t[i]=ca(t[i]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Am=0;class iu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let s=0,r=a.length;s<r;s++)a[s].isDataTexture?o.push(Yc(a[s].image)):o.push(Yc(a[s]))}else o=Yc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Em.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let Tm=0;const Jc=new z;class wn extends uo{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,i=aa,a=aa,o=Tn,s=Qa,r=di,l=zn,c=wn.DEFAULT_ANISOTROPY,u=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Gi(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case aa:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case aa:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=zh;wn.DEFAULT_ANISOTROPY=1;const Iu=class Iu{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],m=l[9],_=l[2],v=l[6],x=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,E=(p+1)/2,y=(x+1)/2,T=(u+d)/4,I=(h+_)/4,S=(m+v)/4;return w>E&&w>y?w<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(w),a=T/i,o=I/i):E>y?E<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(E),i=T/a,o=S/a):y<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(y),i=I/o,a=S/o),this.set(i,a,o,t),this}let b=Math.sqrt((v-m)*(v-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Iu.prototype.isVector4=!0;let on=Iu;class wm extends uo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new wn(a),s=i.count;for(let r=0;r<s;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new iu(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends wm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rm extends wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ec=class Ec{constructor(e,t,i,a,o,s,r,l,c,u,h,d,p,m,_,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,s,r,l,c,u,h,d,p,m,_,v)}set(e,t,i,a,o,s,r,l,c,u,h,d,p,m,_,v){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=o,x[5]=s,x[9]=r,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=m,x[11]=_,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Eo.setFromMatrixColumn(e,0).length(),o=1/Eo.setFromMatrixColumn(e,1).length(),s=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,s=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*h,m=r*u,_=r*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-r*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,m=c*u,_=c*h;t[0]=d+_*r,t[4]=m*r-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-r,t[2]=p*r-m,t[6]=_+d*r,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,m=c*u,_=c*h;t[0]=d-_*r,t[4]=-s*h,t[8]=m+p*r,t[1]=p+m*r,t[5]=s*u,t[9]=_-d*r,t[2]=-s*c,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=r*u,_=r*h;t[0]=l*u,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,m=r*l,_=r*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-r*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=s*l,p=s*c,m=r*l,_=r*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=r*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cm,e,Pm)}lookAt(e,t,i){const a=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ma.crossVectors(i,Kn),ma.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ma.crossVectors(i,Kn)),ma.normalize(),Ms.crossVectors(Kn,ma),a[0]=ma.x,a[4]=Ms.x,a[8]=Kn.x,a[1]=ma.y,a[5]=Ms.y,a[9]=Kn.y,a[2]=ma.z,a[6]=Ms.z,a[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,s=i[0],r=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],_=i[6],v=i[10],x=i[14],b=i[3],w=i[7],E=i[11],y=i[15],T=a[0],I=a[4],S=a[8],R=a[12],L=a[1],O=a[5],V=a[9],Y=a[13],H=a[2],Z=a[6],ae=a[10],k=a[14],ue=a[3],U=a[7],X=a[11],j=a[15];return o[0]=s*T+r*L+l*H+c*ue,o[4]=s*I+r*O+l*Z+c*U,o[8]=s*S+r*V+l*ae+c*X,o[12]=s*R+r*Y+l*k+c*j,o[1]=u*T+h*L+d*H+p*ue,o[5]=u*I+h*O+d*Z+p*U,o[9]=u*S+h*V+d*ae+p*X,o[13]=u*R+h*Y+d*k+p*j,o[2]=m*T+_*L+v*H+x*ue,o[6]=m*I+_*O+v*Z+x*U,o[10]=m*S+_*V+v*ae+x*X,o[14]=m*R+_*Y+v*k+x*j,o[3]=b*T+w*L+E*H+y*ue,o[7]=b*I+w*O+E*Z+y*U,o[11]=b*S+w*V+E*ae+y*X,o[15]=b*R+w*Y+E*k+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],s=e[1],r=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],_=e[7],v=e[11],x=e[15],b=l*p-c*d,w=r*p-c*h,E=r*d-l*h,y=s*p-c*u,T=s*d-l*u,I=s*h-r*u;return t*(_*b-v*w+x*E)-i*(m*b-v*y+x*T)+a*(m*w-_*y+x*I)-o*(m*E-_*T+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],s=e[5],r=e[9],l=e[2],c=e[6],u=e[10];return t*(s*u-r*c)-i*(o*u-r*l)+a*(o*c-s*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],_=e[13],v=e[14],x=e[15],b=t*r-i*s,w=t*l-a*s,E=t*c-o*s,y=i*l-a*r,T=i*c-o*r,I=a*c-o*l,S=u*_-h*m,R=u*v-d*m,L=u*x-p*m,O=h*v-d*_,V=h*x-p*_,Y=d*x-p*v,H=b*Y-w*V+E*O+y*L-T*R+I*S;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/H;return e[0]=(r*Y-l*V+c*O)*Z,e[1]=(a*V-i*Y-o*O)*Z,e[2]=(_*I-v*T+x*y)*Z,e[3]=(d*T-h*I-p*y)*Z,e[4]=(l*L-s*Y-c*R)*Z,e[5]=(t*Y-a*L+o*R)*Z,e[6]=(v*E-m*I-x*w)*Z,e[7]=(u*I-d*E+p*w)*Z,e[8]=(s*V-r*L+c*S)*Z,e[9]=(i*L-t*V-o*S)*Z,e[10]=(m*T-_*E+x*b)*Z,e[11]=(h*E-u*T-p*b)*Z,e[12]=(r*R-s*O-l*S)*Z,e[13]=(t*O-i*R+a*S)*Z,e[14]=(_*w-m*y-v*b)*Z,e[15]=(u*y-h*w+d*b)*Z,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,s=e.x,r=e.y,l=e.z,c=o*s,u=o*r;return this.set(c*s+i,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+i,u*l-a*s,0,c*l-a*r,u*l+a*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,s){return this.set(1,i,o,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,s=t._y,r=t._z,l=t._w,c=o+o,u=s+s,h=r+r,d=o*c,p=o*u,m=o*h,_=s*u,v=s*h,x=r*h,b=l*c,w=l*u,E=l*h,y=i.x,T=i.y,I=i.z;return a[0]=(1-(_+x))*y,a[1]=(p+E)*y,a[2]=(m-w)*y,a[3]=0,a[4]=(p-E)*T,a[5]=(1-(d+x))*T,a[6]=(v+b)*T,a[7]=0,a[8]=(m+w)*I,a[9]=(v-b)*I,a[10]=(1-(d+_))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let s=Eo.set(a[0],a[1],a[2]).length();const r=Eo.set(a[4],a[5],a[6]).length(),l=Eo.set(a[8],a[9],a[10]).length();o<0&&(s=-s),gi.copy(this);const c=1/s,u=1/r,h=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),i.x=s,i.y=r,i.z=l,this}makePerspective(e,t,i,a,o,s,r=Bi,l=!1){const c=this.elements,u=2*o/(t-e),h=2*o/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,_;if(l)m=o/(s-o),_=s*o/(s-o);else if(r===Bi)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(r===Xr)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,o,s,r=Bi,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,_;if(l)m=1/(s-o),_=s/(s-o);else if(r===Bi)m=-2/(s-o),_=-(s+o)/(s-o);else if(r===Xr)m=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ec.prototype.isMatrix4=!0;let Qt=Ec;const Eo=new z,gi=new Qt,Cm=new z(0,0,0),Pm=new z(1,1,1),ma=new z,Ms=new z,Kn=new z,td=new Qt,nd=new bi;class Fa{constructor(e=0,t=0,i=0,a=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],s=a[4],r=a[8],l=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(It(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Im=0;const id=new z,Ao=new bi,$i=new Qt,_s=new z,xr=new z,Lm=new z,Nm=new bi,ad=new z(1,0,0),od=new z(0,1,0),rd=new z(0,0,1),sd={type:"added"},Dm={type:"removed"},To={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Kt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new z,t=new Fa,i=new bi,a=new z(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Tt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(xr,_s,this.up):$i.lookAt(_s,xr,this.up),this.quaternion.setFromRotationMatrix($i),a&&($i.extractRotation(a.matrixWorld),Ao.setFromRotationMatrix($i),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),To.child=e,this.dispatchEvent(To),To.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));a.material=r}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(o(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new z(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yt extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Um={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,s=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),x=this._getHandJoint(c,_);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ga={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function jc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Dt.workingColorSpace){if(e=nu(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=jc(s,o,e+1/3),this.g=jc(s,o,e),this.b=jc(s,o,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,t=qn){function i(o){o!==void 0&&parseFloat(o)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=a[1],r=a[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const i=Kh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Dt.workingToColorSpace(Pn.copy(this),e),Math.round(It(Pn.r*255,0,255))*65536+Math.round(It(Pn.g*255,0,255))*256+Math.round(It(Pn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,a=Pn.g,o=Pn.b,s=Math.max(i,a,o),r=Math.min(i,a,o);let l,c;const u=(r+s)/2;if(r===s)l=0,c=0;else{const h=s-r;switch(c=u<=.5?h/(s+r):h/(2-s-r),s){case i:l=(a-o)/h+(a<o?6:0);break;case a:l=(o-i)/h+2;break;case o:l=(i-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=qn){Dt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,a=Pn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ga),this.setHSL(ga.h+e,ga.s+t,ga.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ga),e.getHSL(Ss);const i=Fr(ga.h,Ss.h,t),a=Fr(ga.s,Ss.s,t),o=Fr(ga.l,Ss.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new yt;yt.NAMES=Kh;class jh extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fa,this.environmentIntensity=1,this.environmentRotation=new Fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new z,Yi=new z,Qc=new z,Ji=new z,wo=new z,Ro=new z,cd=new z,el=new z,tl=new z,nl=new z,il=new on,al=new on,ol=new on;class ui{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),xi.subVectors(e,t),a.cross(xi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){xi.subVectors(a,t),Yi.subVectors(i,t),Qc.subVectors(e,t);const s=xi.dot(xi),r=xi.dot(Yi),l=xi.dot(Qc),c=Yi.dot(Yi),u=Yi.dot(Qc),h=s*c-r*r;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(c*l-r*u)*d,m=(s*u-r*l)*d;return o.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,a,o,s,r,l){return this.getBarycoord(e,t,i,a,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ji.x),l.addScaledVector(s,Ji.y),l.addScaledVector(r,Ji.z),l)}static getInterpolatedAttribute(e,t,i,a,o,s){return il.setScalar(0),al.setScalar(0),ol.setScalar(0),il.fromBufferAttribute(e,t),al.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(il,o.x),s.addScaledVector(al,o.y),s.addScaledVector(ol,o.z),s}static isFrontFacing(e,t,i,a){return xi.subVectors(i,t),Yi.subVectors(e,t),xi.cross(Yi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let s,r;wo.subVectors(a,i),Ro.subVectors(o,i),el.subVectors(e,i);const l=wo.dot(el),c=Ro.dot(el);if(l<=0&&c<=0)return t.copy(i);tl.subVectors(e,a);const u=wo.dot(tl),h=Ro.dot(tl);if(u>=0&&h<=u)return t.copy(a);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(wo,s);nl.subVectors(e,o);const p=wo.dot(nl),m=Ro.dot(nl);if(m>=0&&p<=m)return t.copy(o);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return r=c/(c-m),t.copy(i).addScaledVector(Ro,r);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return cd.subVectors(o,a),r=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(cd,r);const x=1/(v+_+d);return s=_*x,r=d*x,t.copy(i).addScaledVector(wo,s).addScaledVector(Ro,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,r=o.count;s<r;s++)e.isMesh===!0?e.getVertexPosition(s,vi):vi.fromBufferAttribute(o,s),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const a=e.children;for(let o=0,s=a.length;o<s;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),bs.subVectors(this.max,vr),Co.subVectors(e.a,vr),Po.subVectors(e.b,vr),Io.subVectors(e.c,vr),xa.subVectors(Po,Co),va.subVectors(Io,Po),Wa.subVectors(Co,Io);let t=[0,-xa.z,xa.y,0,-va.z,va.y,0,-Wa.z,Wa.y,xa.z,0,-xa.x,va.z,0,-va.x,Wa.z,0,-Wa.x,-xa.y,xa.x,0,-va.y,va.x,0,-Wa.y,Wa.x,0];return!rl(t,Co,Po,Io,bs)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Co,Po,Io,bs))?!1:(Es.crossVectors(xa,va),t=[Es.x,Es.y,Es.z],rl(t,Co,Po,Io,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new z,new z,new z,new z,new z,new z,new z,new z],vi=new z,ys=new rs,Co=new z,Po=new z,Io=new z,xa=new z,va=new z,Wa=new z,vr=new z,bs=new z,Es=new z,Xa=new z;function rl(n,e,t,i,a){for(let o=0,s=n.length-3;o<=s;o+=3){Xa.fromArray(n,o);const r=a.x*Math.abs(Xa.x)+a.y*Math.abs(Xa.y)+a.z*Math.abs(Xa.z),l=e.dot(Xa),c=t.dot(Xa),u=i.dot(Xa);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const pn=new z,As=new We;let Om=0;class Ei extends uo{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$h,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),a=qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),a=qt(a,this.array),o=qt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Qh extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ep extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Fm=new rs,Mr=new z,sl=new z;class Tc{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fm.setFromPoints(e).getCenter(i);let a=0;for(let o=0,s=e.length;o<s;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Mr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(sl)),this.expandByPoint(Mr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bm=0;const ci=new Qt,cl=new Kt,Lo=new z,jn=new rs,_r=new rs,yn=new z;class Rn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?ep:Qh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Tt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];jn.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];_r.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(jn.min,_r.min),jn.expandByPoint(yn),yn.addVectors(jn.max,_r.max),jn.expandByPoint(yn)):(jn.expandByPoint(_r.min),jn.expandByPoint(_r.max))}jn.getCenter(i);let a=0;for(let o=0,s=e.count;o<s;o++)yn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(yn));if(t)for(let o=0,s=t.length;o<s;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)yn.fromBufferAttribute(r,c),l&&(Lo.fromBufferAttribute(e,c),yn.add(Lo)),a=Math.max(a,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const r=[],l=[];for(let S=0;S<i.count;S++)r[S]=new z,l[S]=new z;const c=new z,u=new z,h=new z,d=new We,p=new We,m=new We,_=new z,v=new z;function x(S,R,L){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,L),d.fromBufferAttribute(o,S),p.fromBufferAttribute(o,R),m.fromBufferAttribute(o,L),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const O=1/(p.x*m.y-m.x*p.y);isFinite(O)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(O),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(O),r[S].add(_),r[R].add(_),r[L].add(_),l[S].add(v),l[R].add(v),l[L].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let S=0,R=b.length;S<R;++S){const L=b[S],O=L.start,V=L.count;for(let Y=O,H=O+V;Y<H;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new z,E=new z,y=new z,T=new z;function I(S){y.fromBufferAttribute(a,S),T.copy(y);const R=r[S];w.copy(R),w.sub(y.multiplyScalar(y.dot(R))).normalize(),E.crossVectors(T,R);const O=E.dot(l[S])<0?-1:1;s.setXYZW(S,w.x,w.y,w.z,O)}for(let S=0,R=b.length;S<R;++S){const L=b[S],O=L.start,V=L.count;for(let Y=O,H=O+V;Y<H;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new z,o=new z,s=new z,r=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),u.subVectors(s,o),h.subVectors(a,o),u.cross(h),r.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),r.add(u),l.add(u),c.add(u),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),h.subVectors(a,o),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(r,l){const c=r.array,u=r.itemSize,h=r.normalized,d=new c.constructor(l.length*u);let p=0,m=0;for(let _=0,v=l.length;_<v;_++){r.isInterleavedBufferAttribute?p=l[_]*r.data.stride+r.offset:p=l[_]*u;for(let x=0;x<u;x++)d[m++]=c[p++]}return new Ei(d,u,h)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,i);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const c=s[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(a[l]=u,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Un=new z;class hc{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),a=qt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),a=qt(a,this.array),o=qt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ll=new z,Gm=new z,km=new Tt;class wa{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=ll.subVectors(i,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(ll),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||km.getNormalMatrix(e),a=this.coplanarPoint(ll).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vm=0;class ho extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ur,this.side=ao,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=$o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xc,this.stencilZFail=Xc,this.stencilZPass=Xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const s=[];for(const r in o){const l=o[r];delete l.metadata,s.push(l)}return s}if(t){const o=a(e.textures),s=a(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new wa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class au extends ho{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let No;const Sr=new z,Do=new z,Uo=new z,Oo=new We,yr=new We,tp=new Qt,Ts=new z,br=new z,ws=new z,ld=new We,fl=new We,fd=new We;class np extends Kt{constructor(e=new au){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new Rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zm(t,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new hc(i,3,0,!1)),No.setAttribute("uv",new hc(i,2,3,!1))}this.geometry=No,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Do.setFromMatrixScale(this.matrixWorld),tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-Uo.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const s=this.center;Rs(Ts.set(-.5,-.5,0),Uo,s,Do,a,o),Rs(br.set(.5,-.5,0),Uo,s,Do,a,o),Rs(ws.set(.5,.5,0),Uo,s,Do,a,o),ld.set(0,0),fl.set(1,0),fd.set(1,1);let r=e.ray.intersectTriangle(Ts,br,ws,!1,Sr);if(r===null&&(Rs(br.set(-.5,.5,0),Uo,s,Do,a,o),fl.set(0,1),r=e.ray.intersectTriangle(Ts,ws,br,!1,Sr),r===null))return;const l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:ui.getInterpolation(Sr,Ts,br,ws,ld,fl,fd,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rs(n,e,t,i,a,o){Oo.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(yr.x=o*Oo.x-a*Oo.y,yr.y=a*Oo.x+o*Oo.y):yr.copy(Oo),n.copy(e),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(tp)}const Ki=new z,ul=new z,Cs=new z,Ps=new z;class ip{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ul.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(ul);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Cs),r=Ps.dot(this.direction),l=-Ps.dot(Cs),c=Ps.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*l-r,d=s*r-l,m=o*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,p=h*(h+s*d+2*r)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+r)),p=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+r)),p=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-s*o+r)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(h=Math.max(0,-(s*o+r)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+r)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(ul).addScaledVector(Cs,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),a=Ki.dot(Ki)-i*i,o=e.radius*e.radius;if(a>o)return null;const s=Math.sqrt(o-a),r=i-s,l=i+s;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,s,r,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>a||((o>i||isNaN(i))&&(i=o),(s<a||isNaN(a))&&(a=s),h>=0?(r=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(r=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,a,o){const s=this.origin,r=this.direction,l=r.x,c=r.y,u=r.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,_=t.y-s.y,v=t.z-s.z,x=i.x-s.x,b=i.y-s.y,w=i.z-s.z,E=Math.abs(l),y=Math.abs(c),T=Math.abs(u);let I,S,R,L,O,V,Y,H,Z,ae,k,ue;if(E>=y&&E>=T?(R=l,V=h,Z=m,ue=x,l>=0?(I=c,S=u,L=d,O=p,Y=_,H=v,ae=b,k=w):(I=u,S=c,L=p,O=d,Y=v,H=_,ae=w,k=b)):y>=T?(R=c,V=d,Z=_,ue=b,c>=0?(I=u,S=l,L=p,O=h,Y=v,H=m,ae=w,k=x):(I=l,S=u,L=h,O=p,Y=m,H=v,ae=x,k=w)):(R=u,V=p,Z=v,ue=w,u>=0?(I=l,S=c,L=h,O=d,Y=m,H=_,ae=x,k=b):(I=c,S=l,L=d,O=h,Y=_,H=m,ae=b,k=x)),R===0)return null;const U=I/R,X=S/R,j=1/R,be=L-U*V,Ee=O-X*V,$e=Y-U*Z,ke=H-X*Z,st=ae-U*ue,oe=k-X*ue,de=st*ke-oe*$e,Le=be*oe-Ee*st,Qe=$e*Ee-ke*be;if(a){if(de<0||Le<0||Qe<0)return null}else if((de<0||Le<0||Qe<0)&&(de>0||Le>0||Qe>0))return null;const Fe=de+Le+Qe;if(Fe===0)return null;const Oe=j*(de*V+Le*Z+Qe*ue);return(Fe>0?Oe<0:Oe>0)?null:this.at(Oe/Fe,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hi extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ud=new Qt,qa=new ip,Is=new Tc,dd=new z,Ls=new z,Ns=new z,Ds=new z,dl=new z,Us=new z,hd=new z,Os=new z;class _t extends Kt{constructor(e=new Rn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(o&&r){Us.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=r[l],h=o[l];u!==0&&(dl.fromBufferAttribute(h,e),s?Us.addScaledVector(dl,u):Us.addScaledVector(dl.sub(t),u))}t.add(Us)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(o),qa.copy(e.ray).recast(e.near),!(Is.containsPoint(qa.origin)===!1&&(qa.intersectSphere(Is,dd)===null||qa.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(ud.copy(o).invert(),qa.copy(e.ray).applyMatrix4(ud),!(i.boundingBox!==null&&qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}_computeIntersections(e,t,i){let a;const o=this.geometry,s=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(r!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const v=d[m],x=s[v.materialIndex],b=Math.max(v.start,p.start),w=Math.min(r.count,Math.min(v.start+v.count,p.start+p.count));for(let E=b,y=w;E<y;E+=3){const T=r.getX(E),I=r.getX(E+1),S=r.getX(E+2);a=Fs(this,x,e,i,c,u,h,T,I,S),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),_=Math.min(r.count,p.start+p.count);for(let v=m,x=_;v<x;v+=3){const b=r.getX(v),w=r.getX(v+1),E=r.getX(v+2);a=Fs(this,s,e,i,c,u,h,b,w,E),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const v=d[m],x=s[v.materialIndex],b=Math.max(v.start,p.start),w=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let E=b,y=w;E<y;E+=3){const T=E,I=E+1,S=E+2;a=Fs(this,x,e,i,c,u,h,T,I,S),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let v=m,x=_;v<x;v+=3){const b=v,w=v+1,E=v+2;a=Fs(this,s,e,i,c,u,h,b,w,E),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function Hm(n,e,t,i,a,o,s,r){let l;if(e.side===kn?l=i.intersectTriangle(s,o,a,!0,r):l=i.intersectTriangle(a,o,s,e.side===ao,r),l===null)return null;Os.copy(r),Os.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:n}}function Fs(n,e,t,i,a,o,s,r,l,c){n.getVertexPosition(r,Ls),n.getVertexPosition(l,Ns),n.getVertexPosition(c,Ds);const u=Hm(n,e,t,i,Ls,Ns,Ds,hd);if(u){const h=new z;ui.getBarycoord(hd,Ls,Ns,Ds,h),a&&(u.uv=ui.getInterpolatedAttribute(a,r,l,c,h,new We)),o&&(u.uv1=ui.getInterpolatedAttribute(o,r,l,c,h,new We)),s&&(u.normal=ui.getInterpolatedAttribute(s,r,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new z,materialIndex:0};ui.getNormal(Ls,Ns,Ds,d.normal),u.face=d,u.barycoord=h}return u}class ap extends wn{constructor(e=null,t=1,i=1,a,o,s,r,l,c=ln,u=ln,h,d){super(null,s,r,l,c,u,a,o,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new Tc,Wm=new We(.5,.5),Bs=new z;class ou{constructor(e=new wa,t=new wa,i=new wa,a=new wa,o=new wa,s=new wa){this.planes=[e,t,i,a,o,s]}set(e,t,i,a,o,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(o),r[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){const a=this.planes,o=e.elements,s=o[0],r=o[1],l=o[2],c=o[3],u=o[4],h=o[5],d=o[6],p=o[7],m=o[8],_=o[9],v=o[10],x=o[11],b=o[12],w=o[13],E=o[14],y=o[15];if(a[0].setComponents(c-s,p-u,x-m,y-b).normalize(),a[1].setComponents(c+s,p+u,x+m,y+b).normalize(),a[2].setComponents(c+r,p+h,x+_,y+w).normalize(),a[3].setComponents(c-r,p-h,x-_,y-w).normalize(),i)a[4].setComponents(l,d,v,E).normalize(),a[5].setComponents(c-l,p-d,x-v,y-E).normalize();else if(a[4].setComponents(c-l,p-d,x-v,y-E).normalize(),t===Bi)a[5].setComponents(c+l,p+d,x+v,y+E).normalize();else if(t===Xr)a[5].setComponents(l,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$a.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){$a.center.set(0,0,0);const t=Wm.distanceTo(e.center);return $a.radius=.7071067811865476+t,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Bs.x=a.normal.x>0?e.max.x:e.min.x,Bs.y=a.normal.y>0?e.max.y:e.min.y,Bs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class op extends ho{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new Qt,yf=new ip,zs=new Tc,Gs=new z;class Xm extends Kt{constructor(e=new Rn,t=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(a),zs.radius+=o,e.ray.intersectsSphere(zs)===!1)return;pd.copy(a).invert(),yf.copy(e.ray).applyMatrix4(pd);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,_=p;m<_;m++){const v=c.getX(m);Gs.fromBufferAttribute(h,v),md(Gs,v,l,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,_=p;m<_;m++)Gs.fromBufferAttribute(h,m),md(Gs,m,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function md(n,e,t,i,a,o,s){const r=yf.distanceSqToPoint(n);if(r<t){const l=new z;yf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class rp extends wn{constructor(e=[],t=oo,i,a,o,s,r,l,c,u){super(e,t,i,a,o,s,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends wn{constructor(e,t,i,a,o,s,r,l,c){super(e,t,i,a,o,s,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends wn{constructor(e,t,i=ki,a,o,s,r=ln,l=ln,c,u=fa,h=1){if(u!==fa&&u!==eo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,o,s,r,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new iu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class qm extends nr{constructor(e,t=ki,i=oo,a,o,s=ln,r=ln,l,c=fa){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,o,s,r,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sp extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class un extends Rn{constructor(e=1,t=1,i=1,a=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:s};const r=this;a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,o,0),m("z","y","x",1,-1,i,t,-e,s,o,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,o,4),m("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function m(_,v,x,b,w,E,y,T,I,S,R){const L=E/I,O=y/S,V=E/2,Y=y/2,H=T/2,Z=I+1,ae=S+1;let k=0,ue=0;const U=new z;for(let X=0;X<ae;X++){const j=X*O-Y;for(let be=0;be<Z;be++){const Ee=be*L-V;U[_]=Ee*b,U[v]=j*w,U[x]=H,c.push(U.x,U.y,U.z),U[_]=0,U[v]=0,U[x]=T>0?1:-1,u.push(U.x,U.y,U.z),h.push(be/I),h.push(1-X/S),k+=1}}for(let X=0;X<S;X++)for(let j=0;j<I;j++){const be=d+j+Z*X,Ee=d+j+Z*(X+1),$e=d+(j+1)+Z*(X+1),ke=d+(j+1)+Z*X;l.push(be,Ee,ke),l.push(Ee,$e,ke),ue+=6}r.addGroup(p,ue,R),p+=ue,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zt extends Rn{constructor(e=1,t=1,i=1,a=32,o=1,s=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),o=Math.floor(o);const u=[],h=[],d=[],p=[];let m=0;const _=[],v=i/2;let x=0;b(),s===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(d,3)),this.setAttribute("uv",new nn(p,2));function b(){const E=new z,y=new z;let T=0;const I=(t-e)/i;for(let S=0;S<=o;S++){const R=[],L=S/o,O=L*(t-e)+e;for(let V=0;V<=a;V++){const Y=V/a,H=Y*l+r,Z=Math.sin(H),ae=Math.cos(H);y.x=O*Z,y.y=-L*i+v,y.z=O*ae,h.push(y.x,y.y,y.z),E.set(Z,I,ae).normalize(),d.push(E.x,E.y,E.z),p.push(Y,1-L),R.push(m++)}_.push(R)}for(let S=0;S<a;S++)for(let R=0;R<o;R++){const L=_[R][S],O=_[R+1][S],V=_[R+1][S+1],Y=_[R][S+1];(e>0||R!==0)&&(u.push(L,O,Y),T+=3),(t>0||R!==o-1)&&(u.push(O,V,Y),T+=3)}c.addGroup(x,T,0),x+=T}function w(E){const y=m,T=new We,I=new z;let S=0;const R=E===!0?e:t,L=E===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const O=m;for(let V=0;V<=a;V++){const H=V/a*l+r,Z=Math.cos(H),ae=Math.sin(H);I.x=R*ae,I.y=v*L,I.z=R*Z,h.push(I.x,I.y,I.z),d.push(0,L,0),T.x=Z*.5+.5,T.y=ae*.5*L+.5,p.push(T.x,T.y),m++}for(let V=0;V<a;V++){const Y=y+V,H=O+V;E===!0?u.push(H,H+1,Y):u.push(H+1,H,Y),S+=3}c.addGroup(x,S,E===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yn extends Zt{constructor(e=1,t=1,i=32,a=1,o=!1,s=0,r=Math.PI*2){super(0,e,t,i,a,o,s,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:r}}static fromJSON(e){return new Yn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ss extends Rn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],s=[];r(a),c(i),u(),this.setAttribute("position",new nn(o,3)),this.setAttribute("normal",new nn(o.slice(),3)),this.setAttribute("uv",new nn(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function r(b){const w=new z,E=new z,y=new z;for(let T=0;T<t.length;T+=3)p(t[T+0],w),p(t[T+1],E),p(t[T+2],y),l(w,E,y,b)}function l(b,w,E,y){const T=y+1,I=[];for(let S=0;S<=T;S++){I[S]=[];const R=b.clone().lerp(E,S/T),L=w.clone().lerp(E,S/T),O=T-S;for(let V=0;V<=O;V++)V===0&&S===T?I[S][V]=R:I[S][V]=R.clone().lerp(L,V/O)}for(let S=0;S<T;S++)for(let R=0;R<2*(T-S)-1;R++){const L=Math.floor(R/2);R%2===0?(d(I[S][L+1]),d(I[S+1][L]),d(I[S][L])):(d(I[S][L+1]),d(I[S+1][L+1]),d(I[S+1][L]))}}function c(b){const w=new z;for(let E=0;E<o.length;E+=3)w.x=o[E+0],w.y=o[E+1],w.z=o[E+2],w.normalize().multiplyScalar(b),o[E+0]=w.x,o[E+1]=w.y,o[E+2]=w.z}function u(){const b=new z;for(let w=0;w<o.length;w+=3){b.x=o[w+0],b.y=o[w+1],b.z=o[w+2];const E=v(b)/2/Math.PI+.5,y=x(b)/Math.PI+.5;s.push(E,1-y)}m(),h()}function h(){for(let b=0;b<s.length;b+=6){const w=s[b+0],E=s[b+2],y=s[b+4],T=Math.max(w,E,y),I=Math.min(w,E,y);T>.9&&I<.1&&(w<.2&&(s[b+0]+=1),E<.2&&(s[b+2]+=1),y<.2&&(s[b+4]+=1))}}function d(b){o.push(b.x,b.y,b.z)}function p(b,w){const E=b*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function m(){const b=new z,w=new z,E=new z,y=new z,T=new We,I=new We,S=new We;for(let R=0,L=0;R<o.length;R+=9,L+=6){b.set(o[R+0],o[R+1],o[R+2]),w.set(o[R+3],o[R+4],o[R+5]),E.set(o[R+6],o[R+7],o[R+8]),T.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),S.set(s[L+4],s[L+5]),y.copy(b).add(w).add(E).divideScalar(3);const O=v(y);_(T,L+0,b,O),_(I,L+2,w,O),_(S,L+4,E,O)}}function _(b,w,E,y){y<0&&b.x===1&&(s[w]=b.x-1),E.x===0&&E.z===0&&(s[w]=y/2/Math.PI+.5)}function v(b){return Math.atan2(b.z,-b.x)}function x(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.vertices,e.indices,e.radius,e.detail)}}class ru extends ss{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ru(e.radius,e.detail)}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){St("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const o=i.length;let s;t?s=t:s=e*i[o-1];let r=0,l=o-1,c;for(;r<=l;)if(a=Math.floor(r+(l-r)/2),c=i[a]-s,c<0)r=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===s)return a/(o-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const s=this.getPoint(a),r=this.getPoint(o),l=t||(s.isVector2?new We:new z);return l.copy(r).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,a=[],o=[],s=[],r=new z,l=new Qt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new z)}o[0]=new z,s[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),r.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],r),s[0].crossVectors(a[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),r.crossVectors(a[p-1],a[p]),r.length()>Number.EPSILON){r.normalize();const m=Math.acos(It(a[p-1].dot(a[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(r,m))}s[p].crossVectors(a[p],o[p])}if(t===!0){let p=Math.acos(It(o[0].dot(o[e]),-1,1));p/=e,a[0].dot(r.crossVectors(o[0],o[e]))>0&&(p=-p);for(let m=1;m<=e;m++)o[m].applyMatrix4(l.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],o[m])}return{tangents:a,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class su extends Wi{constructor(e=0,t=0,i=1,a=1,o=0,s=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=r,this.aRotation=l}getPoint(e,t=new We){const i=t,a=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=a;for(;o>a;)o-=a;o<Number.EPSILON&&(s?o=0:o=a),this.aClockwise===!0&&!s&&(o===a?o=-a:o=o-a);const r=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $m extends su{constructor(e,t,i,a,o,s){super(e,t,i,i,a,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let n=0,e=0,t=0,i=0;function a(o,s,r,l){n=o,e=r,t=-3*o+3*s-2*r-l,i=2*o-2*s+r+l}return{initCatmullRom:function(o,s,r,l,c){a(s,r,c*(r-o),c*(l-s))},initNonuniformCatmullRom:function(o,s,r,l,c,u,h){let d=(s-o)/c-(r-o)/(c+u)+(r-s)/u,p=(r-s)/u-(l-s)/(u+h)+(l-r)/h;d*=u,p*=u,a(s,r,d,p)},calc:function(o){const s=o*o,r=s*o;return n+e*o+t*s+i*r}}}const gd=new z,xd=new z,hl=new cu,pl=new cu,ml=new cu;class Ym extends Wi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new z){const i=t,a=this.points,o=a.length,s=(o-(this.closed?0:1))*e;let r=Math.floor(s),l=s-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let c,u;this.closed||r>0?c=a[(r-1)%o]:(xd.subVectors(a[0],a[1]).add(a[0]),c=xd);const h=a[r%o],d=a[(r+1)%o];if(this.closed||r+2<o?u=a[(r+2)%o]:(gd.subVectors(a[o-1],a[o-2]).add(a[o-1]),u=gd),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),m<1e-4&&(m=_),v<1e-4&&(v=_),hl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,v),pl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,v),ml.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,v)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),pl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ml.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(hl.calc(l),pl.calc(l),ml.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new z().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vd(n,e,t,i,a){const o=(i-e)*.5,s=(a-t)*.5,r=n*n,l=n*r;return(2*t-2*i+o+s)*l+(-3*t+3*i-2*o-s)*r+o*n+t}function Jm(n,e){const t=1-n;return t*t*e}function Zm(n,e){return 2*(1-n)*n*e}function Km(n,e){return n*n*e}function Br(n,e,t,i){return Jm(n,e)+Zm(n,t)+Km(n,i)}function jm(n,e){const t=1-n;return t*t*t*e}function Qm(n,e){const t=1-n;return 3*t*t*n*e}function e1(n,e){return 3*(1-n)*n*n*e}function t1(n,e){return n*n*n*e}function zr(n,e,t,i,a){return jm(n,e)+Qm(n,t)+e1(n,i)+t1(n,a)}class cp extends Wi{constructor(e=new We,t=new We,i=new We,a=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new We){const i=t,a=this.v0,o=this.v1,s=this.v2,r=this.v3;return i.set(zr(e,a.x,o.x,s.x,r.x),zr(e,a.y,o.y,s.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n1 extends Wi{constructor(e=new z,t=new z,i=new z,a=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new z){const i=t,a=this.v0,o=this.v1,s=this.v2,r=this.v3;return i.set(zr(e,a.x,o.x,s.x,r.x),zr(e,a.y,o.y,s.y,r.y),zr(e,a.z,o.z,s.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lp extends Wi{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i1 extends Wi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fp extends Wi{constructor(e=new We,t=new We,i=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new We){const i=t,a=this.v0,o=this.v1,s=this.v2;return i.set(Br(e,a.x,o.x,s.x),Br(e,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a1 extends Wi{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,a=this.v0,o=this.v1,s=this.v2;return i.set(Br(e,a.x,o.x,s.x),Br(e,a.y,o.y,s.y),Br(e,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class up extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const i=t,a=this.points,o=(a.length-1)*e,s=Math.floor(o),r=o-s,l=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(vd(r,l.x,c.x,u.x,h.x),vd(r,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new We().fromArray(a))}return this}}var bf=Object.freeze({__proto__:null,ArcCurve:$m,CatmullRomCurve3:Ym,CubicBezierCurve:cp,CubicBezierCurve3:n1,EllipseCurve:su,LineCurve:lp,LineCurve3:i1,QuadraticBezierCurve:fp,QuadraticBezierCurve3:a1,SplineCurve:up});class o1 extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let o=0;for(;o<a.length;){if(a[o]>=i){const s=a[o]-i,r=this.curves[o],l=r.getLength(),c=l===0?0:1-s/l;return r.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,o=this.curves;a<o.length;a++){const s=o[a],r=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(r);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new bf[a.type]().fromJSON(a))}return this}}class Md extends o1{constructor(e){super(),this.type="Path",this.currentPoint=new We,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new lp(this.currentPoint.clone(),new We(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const o=new fp(this.currentPoint.clone(),new We(e,t),new We(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,o,s){const r=new cp(this.currentPoint.clone(),new We(e,t),new We(i,a),new We(o,s));return this.curves.push(r),this.currentPoint.set(o,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new up(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,o,s){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,i,a,o,s),this}absarc(e,t,i,a,o,s){return this.absellipse(e,t,i,i,a,o,s),this}ellipse(e,t,i,a,o,s,r,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,o,s,r,l),this}absellipse(e,t,i,a,o,s,r,l){const c=new su(e,t,i,a,o,s,r,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class lu extends Md{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Md().fromJSON(a))}return this}}function r1(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let o=dp(n,0,a,t,!0);const s=[];if(!o||o.next===o.prev)return s;let r,l,c;if(i&&(o=u1(n,e,o,t)),n.length>80*t){r=n[0],l=n[1];let u=r,h=l;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<r&&(r=p),m<l&&(l=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-r,h-l),c=c!==0?32767/c:0}return Jr(o,s,t,r,l,c,0),s}function dp(n,e,t,i,a){let o;if(a===y1(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=_d(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=_d(s/i|0,n[s],n[s+1],o);return o&&ir(o,o.next)&&(Kr(o),o=o.next),o}function so(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ir(t,t.next)||rn(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Jr(n,e,t,i,a,o,s){if(!n)return;!s&&o&&g1(n,i,a,o);let r=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(o?c1(n,i,a,o):s1(n)){e.push(l.i,n.i,c.i),Kr(n),n=c.next,r=c.next;continue}if(n=c,n===r){s?s===1?(n=l1(so(n),e),Jr(n,e,t,i,a,o,2)):s===2&&f1(n,e,t,i,a,o):Jr(so(n),e,t,i,a,o,1);break}}}function s1(n){const e=n.prev,t=n,i=n.next;if(rn(e,t,i)>=0)return!1;const a=e.x,o=t.x,s=i.x,r=e.y,l=t.y,c=i.y,u=Math.min(a,o,s),h=Math.min(r,l,c),d=Math.max(a,o,s),p=Math.max(r,l,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&Lr(a,r,o,l,s,c,m.x,m.y)&&rn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c1(n,e,t,i){const a=n.prev,o=n,s=n.next;if(rn(a,o,s)>=0)return!1;const r=a.x,l=o.x,c=s.x,u=a.y,h=o.y,d=s.y,p=Math.min(r,l,c),m=Math.min(u,h,d),_=Math.max(r,l,c),v=Math.max(u,h,d),x=Ef(p,m,e,t,i),b=Ef(_,v,e,t,i);let w=n.prevZ,E=n.nextZ;for(;w&&w.z>=x&&E&&E.z<=b;){if(w.x>=p&&w.x<=_&&w.y>=m&&w.y<=v&&w!==a&&w!==s&&Lr(r,u,l,h,c,d,w.x,w.y)&&rn(w.prev,w,w.next)>=0||(w=w.prevZ,E.x>=p&&E.x<=_&&E.y>=m&&E.y<=v&&E!==a&&E!==s&&Lr(r,u,l,h,c,d,E.x,E.y)&&rn(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;w&&w.z>=x;){if(w.x>=p&&w.x<=_&&w.y>=m&&w.y<=v&&w!==a&&w!==s&&Lr(r,u,l,h,c,d,w.x,w.y)&&rn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;E&&E.z<=b;){if(E.x>=p&&E.x<=_&&E.y>=m&&E.y<=v&&E!==a&&E!==s&&Lr(r,u,l,h,c,d,E.x,E.y)&&rn(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function l1(n,e){let t=n;do{const i=t.prev,a=t.next.next;!ir(i,a)&&pp(i,t,t.next,a)&&Zr(i,a)&&Zr(a,i)&&(e.push(i.i,t.i,a.i),Kr(t),Kr(t.next),t=n=a),t=t.next}while(t!==n);return so(t)}function f1(n,e,t,i,a,o){let s=n;do{let r=s.next.next;for(;r!==s.prev;){if(s.i!==r.i&&M1(s,r)){let l=mp(s,r);s=so(s,s.next),l=so(l,l.next),Jr(s,e,t,i,a,o,0),Jr(l,e,t,i,a,o,0);return}r=r.next}s=s.next}while(s!==n)}function u1(n,e,t,i){const a=[];for(let o=0,s=e.length;o<s;o++){const r=e[o]*i,l=o<s-1?e[o+1]*i:n.length,c=dp(n,r,l,i,!1);c===c.next&&(c.steiner=!0),a.push(v1(c))}a.sort(d1);for(let o=0;o<a.length;o++)t=h1(a[o],t);return t}function d1(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function h1(n,e){const t=p1(n,e);if(!t)return e;const i=mp(t,n);return so(i,i.next),so(t,t.next)}function p1(n,e){let t=e;const i=n.x,a=n.y;let o=-1/0,s;if(ir(n,t))return t;do{if(ir(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const r=s,l=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&hp(a<c?i:o,a,l,c,a<c?o:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);Zr(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&m1(s,t)))&&(s=t,u=h)}t=t.next}while(t!==r);return s}function m1(n,e){return rn(n.prev,n,e.prev)<0&&rn(e.next,n,n.next)<0}function g1(n,e,t,i){let a=n;do a.z===0&&(a.z=Ef(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,x1(a)}function x1(n){let e,t=1;do{let i=n,a;n=null;let o=null;for(e=0;i;){e++;let s=i,r=0;for(let c=0;c<t&&(r++,s=s.nextZ,!!s);c++);let l=t;for(;r>0||l>0&&s;)r!==0&&(l===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,r--):(a=s,s=s.nextZ,l--),o?o.nextZ=a:n=a,a.prevZ=o,o=a;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Ef(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function v1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hp(n,e,t,i,a,o,s,r){return(a-s)*(e-r)>=(n-s)*(o-r)&&(n-s)*(i-r)>=(t-s)*(e-r)&&(t-s)*(o-r)>=(a-s)*(i-r)}function Lr(n,e,t,i,a,o,s,r){return!(n===s&&e===r)&&hp(n,e,t,i,a,o,s,r)}function M1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_1(n,e)&&(Zr(n,e)&&Zr(e,n)&&S1(n,e)&&(rn(n.prev,n,e.prev)||rn(n,e.prev,e))||ir(n,e)&&rn(n.prev,n,n.next)>0&&rn(e.prev,e,e.next)>0)}function rn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ir(n,e){return n.x===e.x&&n.y===e.y}function pp(n,e,t,i){const a=Vs(rn(n,e,t)),o=Vs(rn(n,e,i)),s=Vs(rn(t,i,n)),r=Vs(rn(t,i,e));return!!(a!==o&&s!==r||a===0&&ks(n,t,e)||o===0&&ks(n,i,e)||s===0&&ks(t,n,i)||r===0&&ks(t,e,i))}function ks(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vs(n){return n>0?1:n<0?-1:0}function _1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&pp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zr(n,e){return rn(n.prev,n,n.next)<0?rn(n,e,n.next)>=0&&rn(n,n.prev,e)>=0:rn(n,e,n.prev)<0||rn(n,n.next,e)<0}function S1(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&a<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mp(n,e){const t=Af(n.i,n.x,n.y),i=Af(e.i,e.x,e.y),a=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function _d(n,e,t,i){const a=Af(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Af(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y1(n,e,t,i){let a=0;for(let o=e,s=t-i;o<t;o+=i)a+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return a}class b1{static triangulate(e,t,i=2){return r1(e,t,i)}}class Jo{static area(e){const t=e.length;let i=0;for(let a=t-1,o=0;o<t;a=o++)i+=e[a].x*e[o].y-e[o].x*e[a].y;return i*.5}static isClockWise(e){return Jo.area(e)<0}static triangulateShape(e,t){const i=[],a=[],o=[];Sd(e),yd(i,e);let s=e.length;t.forEach(Sd);for(let l=0;l<t.length;l++)a.push(s),s+=t[l].length,yd(i,t[l]);const r=b1.triangulate(i,a);for(let l=0;l<r.length;l+=3)o.push(r.slice(l,l+3));return o}}function Sd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pc extends Rn{constructor(e=new lu([new We(.5,.5),new We(-.5,.5),new We(-.5,-.5),new We(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],o=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];s(c)}this.setAttribute("position",new nn(a,3)),this.setAttribute("uv",new nn(o,2)),this.computeVertexNormals();function s(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:E1;let w,E=!1,y,T,I,S;if(x){w=x.getSpacedPoints(u),E=!0,d=!1;const fe=x.isCatmullRomCurve3?x.closed:!1;y=x.computeFrenetFrames(u,fe),T=new z,I=new z,S=new z}d||(v=0,p=0,m=0,_=0);const R=r.extractPoints(c);let L=R.shape;const O=R.holes;if(!Jo.isClockWise(L)){L=L.reverse();for(let fe=0,ye=O.length;fe<ye;fe++){const Ce=O[fe];Jo.isClockWise(Ce)&&(O[fe]=Ce.reverse())}}function Y(fe){const Ce=10000000000000001e-36;let ge=fe[0];for(let Pe=1;Pe<=fe.length;Pe++){const ot=Pe%fe.length,ee=fe[ot],Ie=ee.x-ge.x,Xe=ee.y-ge.y,F=Ie*Ie+Xe*Xe,P=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(ge.x),Math.abs(ge.y)),qe=Ce*P*P;if(F<=qe){fe.splice(ot,1),Pe--;continue}ge=ee}}Y(L),O.forEach(Y);const H=O.length,Z=L;for(let fe=0;fe<H;fe++){const ye=O[fe];L=L.concat(ye)}function ae(fe,ye,Ce){return ye||Ut("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(ye,Ce)}const k=L.length;function ue(fe,ye,Ce){let ge,Pe,ot;const ee=fe.x-ye.x,Ie=fe.y-ye.y,Xe=Ce.x-fe.x,F=Ce.y-fe.y,P=ee*ee+Ie*Ie,qe=ee*F-Ie*Xe;if(Math.abs(qe)>Number.EPSILON){const N=Math.sqrt(P),A=Math.sqrt(Xe*Xe+F*F),J=ye.x-Ie/N,Q=ye.y+ee/N,le=Ce.x-F/A,_e=Ce.y+Xe/A,Ue=((le-J)*F-(_e-Q)*Xe)/(ee*F-Ie*Xe);ge=J+ee*Ue-fe.x,Pe=Q+Ie*Ue-fe.y;const ce=ge*ge+Pe*Pe;if(ce<=2)return new We(ge,Pe);ot=Math.sqrt(ce/2)}else{let N=!1;ee>Number.EPSILON?Xe>Number.EPSILON&&(N=!0):ee<-Number.EPSILON?Xe<-Number.EPSILON&&(N=!0):Math.sign(Ie)===Math.sign(F)&&(N=!0),N?(ge=-Ie,Pe=ee,ot=Math.sqrt(P)):(ge=ee,Pe=Ie,ot=Math.sqrt(P/2))}return new We(ge/ot,Pe/ot)}const U=[];for(let fe=0,ye=Z.length,Ce=ye-1,ge=fe+1;fe<ye;fe++,Ce++,ge++)Ce===ye&&(Ce=0),ge===ye&&(ge=0),U[fe]=ue(Z[fe],Z[Ce],Z[ge]);const X=[];let j,be=U.concat();for(let fe=0,ye=H;fe<ye;fe++){const Ce=O[fe];j=[];for(let ge=0,Pe=Ce.length,ot=Pe-1,ee=ge+1;ge<Pe;ge++,ot++,ee++)ot===Pe&&(ot=0),ee===Pe&&(ee=0),j[ge]=ue(Ce[ge],Ce[ot],Ce[ee]);X.push(j),be=be.concat(j)}let Ee;if(v===0)Ee=Jo.triangulateShape(Z,O);else{const fe=[],ye=[];for(let Ce=0;Ce<v;Ce++){const ge=Ce/v,Pe=p*Math.cos(ge*Math.PI/2),ot=m*Math.sin(ge*Math.PI/2)+_;for(let ee=0,Ie=Z.length;ee<Ie;ee++){const Xe=ae(Z[ee],U[ee],ot);Le(Xe.x,Xe.y,-Pe),ge===0&&fe.push(Xe)}for(let ee=0,Ie=H;ee<Ie;ee++){const Xe=O[ee];j=X[ee];const F=[];for(let P=0,qe=Xe.length;P<qe;P++){const N=ae(Xe[P],j[P],ot);Le(N.x,N.y,-Pe),ge===0&&F.push(N)}ge===0&&ye.push(F)}}Ee=Jo.triangulateShape(fe,ye)}const $e=Ee.length,ke=m+_;for(let fe=0;fe<k;fe++){const ye=d?ae(L[fe],be[fe],ke):L[fe];E?(I.copy(y.normals[0]).multiplyScalar(ye.x),T.copy(y.binormals[0]).multiplyScalar(ye.y),S.copy(w[0]).add(I).add(T),Le(S.x,S.y,S.z)):Le(ye.x,ye.y,0)}for(let fe=1;fe<=u;fe++)for(let ye=0;ye<k;ye++){const Ce=d?ae(L[ye],be[ye],ke):L[ye];E?(I.copy(y.normals[fe]).multiplyScalar(Ce.x),T.copy(y.binormals[fe]).multiplyScalar(Ce.y),S.copy(w[fe]).add(I).add(T),Le(S.x,S.y,S.z)):Le(Ce.x,Ce.y,h/u*fe)}for(let fe=v-1;fe>=0;fe--){const ye=fe/v,Ce=p*Math.cos(ye*Math.PI/2),ge=m*Math.sin(ye*Math.PI/2)+_;for(let Pe=0,ot=Z.length;Pe<ot;Pe++){const ee=ae(Z[Pe],U[Pe],ge);Le(ee.x,ee.y,h+Ce)}for(let Pe=0,ot=O.length;Pe<ot;Pe++){const ee=O[Pe];j=X[Pe];for(let Ie=0,Xe=ee.length;Ie<Xe;Ie++){const F=ae(ee[Ie],j[Ie],ge);E?Le(F.x,F.y+w[u-1].y,w[u-1].x+Ce):Le(F.x,F.y,h+Ce)}}}st(),oe();function st(){const fe=a.length/3;if(d){let ye=0,Ce=k*ye;for(let ge=0;ge<$e;ge++){const Pe=Ee[ge];Qe(Pe[2]+Ce,Pe[1]+Ce,Pe[0]+Ce)}ye=u+v*2,Ce=k*ye;for(let ge=0;ge<$e;ge++){const Pe=Ee[ge];Qe(Pe[0]+Ce,Pe[1]+Ce,Pe[2]+Ce)}}else{for(let ye=0;ye<$e;ye++){const Ce=Ee[ye];Qe(Ce[2],Ce[1],Ce[0])}for(let ye=0;ye<$e;ye++){const Ce=Ee[ye];Qe(Ce[0]+k*u,Ce[1]+k*u,Ce[2]+k*u)}}i.addGroup(fe,a.length/3-fe,0)}function oe(){const fe=a.length/3;let ye=0;de(Z,ye),ye+=Z.length;for(let Ce=0,ge=O.length;Ce<ge;Ce++){const Pe=O[Ce];de(Pe,ye),ye+=Pe.length}i.addGroup(fe,a.length/3-fe,1)}function de(fe,ye){let Ce=fe.length;for(;--Ce>=0;){const ge=Ce;let Pe=Ce-1;Pe<0&&(Pe=fe.length-1);for(let ot=0,ee=u+v*2;ot<ee;ot++){const Ie=k*ot,Xe=k*(ot+1),F=ye+ge+Ie,P=ye+Pe+Ie,qe=ye+Pe+Xe,N=ye+ge+Xe;Fe(F,P,qe,N)}}}function Le(fe,ye,Ce){l.push(fe),l.push(ye),l.push(Ce)}function Qe(fe,ye,Ce){Oe(fe),Oe(ye),Oe(Ce);const ge=a.length/3,Pe=b.generateTopUV(i,a,ge-3,ge-2,ge-1);rt(Pe[0]),rt(Pe[1]),rt(Pe[2])}function Fe(fe,ye,Ce,ge){Oe(fe),Oe(ye),Oe(ge),Oe(ye),Oe(Ce),Oe(ge);const Pe=a.length/3,ot=b.generateSideWallUV(i,a,Pe-6,Pe-3,Pe-2,Pe-1);rt(ot[0]),rt(ot[1]),rt(ot[3]),rt(ot[1]),rt(ot[2]),rt(ot[3])}function Oe(fe){a.push(l[fe*3+0]),a.push(l[fe*3+1]),a.push(l[fe*3+2])}function rt(fe){o.push(fe.x),o.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return A1(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const r=t[e.shapes[o]];i.push(r)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new bf[a.type]().fromJSON(a)),new pc(i,e.options)}}const E1={generateTopUV:function(n,e,t,i,a){const o=e[t*3],s=e[t*3+1],r=e[i*3],l=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new We(o,s),new We(r,l),new We(c,u)]},generateSideWallUV:function(n,e,t,i,a,o){const s=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],_=e[o*3],v=e[o*3+1],x=e[o*3+2];return Math.abs(r-u)<Math.abs(s-c)?[new We(s,1-l),new We(c,1-h),new We(d,1-m),new We(_,1-x)]:[new We(r,1-l),new We(u,1-h),new We(p,1-m),new We(v,1-x)]}};function A1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class co extends ss{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new co(e.radius,e.detail)}}class jr extends ss{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jr(e.radius,e.detail)}}class da extends Rn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,s=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,u=l+1,h=e/r,d=t/l,p=[],m=[],_=[],v=[];for(let x=0;x<u;x++){const b=x*d-s;for(let w=0;w<c;w++){const E=w*h-o;m.push(E,-b,0),_.push(0,0,1),v.push(w/r),v.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<r;b++){const w=b+c*x,E=b+c*(x+1),y=b+1+c*(x+1),T=b+1+c*x;p.push(w,E,T),p.push(E,y,T)}this.setIndex(p),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class xn extends Rn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,s=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:s,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+r,Math.PI);let c=0;const u=[],h=new z,d=new z,p=[],m=[],_=[],v=[];for(let x=0;x<=i;x++){const b=[],w=x/i,E=s+w*r,y=e*Math.cos(E),T=Math.sqrt(e*e-y*y);let I=0;x===0&&s===0?I=.5/t:x===i&&l===Math.PI&&(I=-.5/t);for(let S=0;S<=t;S++){const R=S/t,L=a+R*o;h.x=-T*Math.cos(L),h.y=y,h.z=T*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),v.push(R+I,1-w),b.push(c++)}u.push(b)}for(let x=0;x<i;x++)for(let b=0;b<t;b++){const w=u[x][b+1],E=u[x][b],y=u[x+1][b],T=u[x+1][b+1];(x!==0||s>0)&&p.push(w,E,T),(x!==i-1||l<Math.PI)&&p.push(E,y,T)}this.setIndex(p),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nn extends Rn{constructor(e=1,t=.4,i=12,a=48,o=Math.PI*2,s=0,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:o,thetaStart:s,thetaLength:r},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],u=[],h=[],d=new z,p=new z,m=new z;for(let _=0;_<=i;_++){const v=s+_/i*r;for(let x=0;x<=a;x++){const b=x/a*o;p.x=(e+t*Math.cos(v))*Math.cos(b),p.y=(e+t*Math.cos(v))*Math.sin(b),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/a),h.push(_/i)}}for(let _=1;_<=i;_++)for(let v=1;v<=a;v++){const x=(a+1)*_+v-1,b=(a+1)*(_-1)+v-1,w=(a+1)*(_-1)+v,E=(a+1)*_+v;l.push(x,b,E),l.push(b,w,E)}this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(bd(a))a.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(bd(a[0])){const o=[];for(let s=0,r=a.length;s<r;s++)o[s]=a[s].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const a in i)e[a]=i[a]}return e}function bd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function T1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const w1={clone:ar,merge:Bn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new yt().setHex(a.value);break;case"v2":this.uniforms[i].value=new We().fromArray(a.value);break;case"v3":this.uniforms[i].value=new z().fromArray(a.value);break;case"v4":this.uniforms[i].value=new on().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Tt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Qt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class P1 extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ti extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I1 extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L1 extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ed(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ed(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ed(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class N1{constructor(e,t,i){const a=this;let o=!1,s=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){r++,o===!1&&a.onStart!==void 0&&a.onStart(u,s,r),o=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,r),s===r&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const D1=new N1;class fu{constructor(e){this.manager=e!==void 0?e:D1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fo=new WeakMap;class U1 extends fu{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=gl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let h=Fo.get(s);h===void 0&&(h=[],Fo.set(s,h)),h.push({onLoad:t,onError:a})}return s}const r=qr("img");function l(){u(),t&&t(this);const h=Fo.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Fo.delete(this),o.manager.itemEnd(e)}function c(h){u(),a&&a(h),gl.remove(`image:${e}`);const d=Fo.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}Fo.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),gl.add(`image:${e}`,r),o.manager.itemStart(e),r.src=e,r}}class O1 extends fu{constructor(e){super(e)}load(e,t,i,a){const o=new wn,s=new U1(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(r){o.image=r,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class xp extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class F1 extends xp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xl=new Qt,Ad=new z,Td=new z;class B1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xl,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,s=a?a.z/o.x:1,r=a?a.w/o.y:1,l=a?a.x/o.x:0,c=a?a.y/o.y:0;e.coordinateSystem===Xr||e.reversedDepth?t.set(.5*s,0,0,.5*s+l,0,.5*r,0,.5*r+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+l,0,.5*r,0,.5*r+c,0,0,.5,.5,0,0,0,1),t.multiply(xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hs=new z,Ws=new bi,Ii=new z;class vp extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Ws,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Hs,Ws,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ma=new z,wd=new We,Rd=new We;class li extends vp{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ma.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z),Ma.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ma.x,Ma.y).multiplyScalar(-e/Ma.z)}getViewSize(e,t){return this.getViewBounds(e,wd,Rd),t.subVectors(Rd,wd)}setViewOffset(e,t,i,a,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*a/l,t-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wc extends vp{constructor(e=-1,t=1,i=1,a=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,s=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class z1 extends B1{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G1 extends xp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new z1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bo=-90,zo=1;class k1 extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(Bo,zo,e,t);a.layers=this.layers,this.add(a);const o=new li(Bo,zo,e,t);o.layers=this.layers,this.add(o);const s=new li(Bo,zo,e,t);s.layers=this.layers,this.add(s);const r=new li(Bo,zo,e,t);r.layers=this.layers,this.add(r);const l=new li(Bo,zo,e,t);l.layers=this.layers,this.add(l);const c=new li(Bo,zo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,s,r,l]=t;for(const c of t)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,r,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class V1 extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lu=class Lu{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Lu.prototype.isMatrix2=!0;let Cd=Lu;function Pd(n,e,t,i){const a=H1(i);switch(t){case Wh:return n*e;case qh:return n*e/a.components*a.byteLength;case Kf:return n*e/a.components*a.byteLength;case ro:return n*e*2/a.components*a.byteLength;case jf:return n*e*2/a.components*a.byteLength;case Xh:return n*e*3/a.components*a.byteLength;case di:return n*e*4/a.components*a.byteLength;case Qf:return n*e*4/a.components*a.byteLength;case ec:case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:case $l:return Math.max(n,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case Jl:case Kl:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:case cc:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case af:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case of:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case rf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ff:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mf:case gf:case xf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vf:case Mf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case _f:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H1(n){switch(n){case zn:case Gh:return{byteLength:1,components:1};case Hr:case kh:case Vi:return{byteLength:2,components:1};case Jf:case Zf:return{byteLength:2,components:4};case ki:case Yf:case Fi:return{byteLength:4,components:1};case Vh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);function Mp(){let n=null,e=!1,t=null,i=null;function a(o,s){i=n.requestAnimationFrame(a),t(o,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function W1(n){const e=new WeakMap;function t(r,l){const c=r.array,u=r.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),r.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:h}}function i(r,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,r),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function s(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const u=e.get(r);(!u||u.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:a,remove:o,update:s}}var X1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q1=`#ifdef USE_ALPHAHASH
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
#endif`,$1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
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
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Hg=`uniform sampler2D dfgLUT;
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
}`,Wg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Px=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,rv=`uniform vec3 diffuse;
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
}`,sv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,uv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,pv=`#define PHONG
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,xv=`#define TOON
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
}`,vv=`#define TOON
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
}`,Mv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:X1,alphahash_pars_fragment:q1,alphamap_fragment:$1,alphamap_pars_fragment:Y1,alphatest_fragment:J1,alphatest_pars_fragment:Z1,aomap_fragment:K1,aomap_pars_fragment:j1,batching_pars_vertex:Q1,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:rg,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:fg,color_pars_fragment:ug,color_pars_vertex:dg,color_vertex:hg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:xg,displacementmap_vertex:vg,emissivemap_fragment:Mg,emissivemap_pars_fragment:_g,colorspace_fragment:Sg,colorspace_pars_fragment:yg,envmap_fragment:bg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Ag,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:wg,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Og,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:Gg,lights_phong_pars_fragment:kg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:qg,lightprobes_pars_fragment:$g,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:Jg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Kg,map_fragment:jg,map_pars_fragment:Qg,map_particle_fragment:ex,map_particle_pars_fragment:tx,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:ax,morphcolor_vertex:ox,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:fx,normal_pars_fragment:ux,normal_pars_vertex:dx,normal_vertex:hx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:vx,opaque_fragment:Mx,packing:_x,premultiplied_alpha_fragment:Sx,project_vertex:yx,dithering_fragment:bx,dithering_pars_fragment:Ex,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Px,skinbase_vertex:Ix,skinning_pars_vertex:Lx,skinning_vertex:Nx,skinnormal_vertex:Dx,specularmap_fragment:Ux,specularmap_pars_fragment:Ox,tonemapping_fragment:Fx,tonemapping_pars_fragment:Bx,transmission_fragment:zx,transmission_pars_fragment:Gx,uv_pars_fragment:kx,uv_pars_vertex:Vx,uv_vertex:Hx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:$x,backgroundCube_frag:Yx,cube_vert:Jx,cube_frag:Zx,depth_vert:Kx,depth_frag:jx,distance_vert:Qx,distance_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:av,meshbasic_vert:ov,meshbasic_frag:rv,meshlambert_vert:sv,meshlambert_frag:cv,meshmatcap_vert:lv,meshmatcap_frag:fv,meshnormal_vert:uv,meshnormal_frag:dv,meshphong_vert:hv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:xv,meshtoon_frag:vv,points_vert:Mv,points_frag:_v,shadow_vert:Sv,shadow_frag:yv,sprite_vert:bv,sprite_frag:Ev},nt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Bn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Bn([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Bn([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Bn([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Bn([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Bn([nt.points,nt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Bn([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Bn([nt.common,nt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Bn([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Bn([nt.sprite,nt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Bn([nt.common,nt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Bn([nt.lights,nt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Xs={r:0,b:0,g:0},Av=new Qt,_p=new Tt;_p.set(-1,0,0,0,1,0,0,0,1);function Tv(n,e,t,i,a,o){const s=new yt(0);let r=a===!0?0:1,l,c,u=null,h=0,d=null;function p(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const E=b.backgroundBlurriness>0;w=e.get(w,E)}return w}function m(b){let w=!1;const E=p(b);E===null?v(s,r):E&&E.isColor&&(v(E,1),w=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,w){const E=p(w);E&&(E.isCubeTexture||E.mapping===Ac)?(c===void 0&&(c=new _t(new un(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ar(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_p),c.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Xt,(u!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new _t(new da(2,2),new Ai({name:"BackgroundMaterial",uniforms:ar(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ao,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Dt.getTransfer(E.colorSpace)!==Xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function v(b,w){b.getRGB(Xs,gp(n)),t.buffers.color.setClear(Xs.r,Xs.g,Xs.b,w,o)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,w=1){s.set(b),r=w,v(s,r)},getClearAlpha:function(){return r},setClearAlpha:function(b){r=b,v(s,r)},render:m,addToRenderList:_,dispose:x}}function wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let o=a,s=!1;function r(O,V,Y,H,Z){let ae=!1;const k=h(O,H,Y,V);o!==k&&(o=k,c(o.object)),ae=p(O,H,Y,Z),ae&&m(O,H,Y,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,E(O,V,Y,H),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function h(O,V,Y,H){const Z=H.wireframe===!0;let ae=i[V.id];ae===void 0&&(ae={},i[V.id]=ae);const k=O.isInstancedMesh===!0?O.id:0;let ue=ae[k];ue===void 0&&(ue={},ae[k]=ue);let U=ue[Y.id];U===void 0&&(U={},ue[Y.id]=U);let X=U[Z];return X===void 0&&(X=d(l()),U[Z]=X),X}function d(O){const V=[],Y=[],H=[];for(let Z=0;Z<t;Z++)V[Z]=0,Y[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:H,object:O,attributes:{},index:null}}function p(O,V,Y,H){const Z=o.attributes,ae=V.attributes;let k=0;const ue=Y.getAttributes();for(const U in ue)if(ue[U].location>=0){const j=Z[U];let be=ae[U];if(be===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(be=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(be=O.instanceColor)),j===void 0||j.attribute!==be||be&&j.data!==be.data)return!0;k++}return o.attributesNum!==k||o.index!==H}function m(O,V,Y,H){const Z={},ae=V.attributes;let k=0;const ue=Y.getAttributes();for(const U in ue)if(ue[U].location>=0){let j=ae[U];j===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const be={};be.attribute=j,j&&j.data&&(be.data=j.data),Z[U]=be,k++}o.attributes=Z,o.attributesNum=k,o.index=H}function _(){const O=o.newAttributes;for(let V=0,Y=O.length;V<Y;V++)O[V]=0}function v(O){x(O,0)}function x(O,V){const Y=o.newAttributes,H=o.enabledAttributes,Z=o.attributeDivisors;Y[O]=1,H[O]===0&&(n.enableVertexAttribArray(O),H[O]=1),Z[O]!==V&&(n.vertexAttribDivisor(O,V),Z[O]=V)}function b(){const O=o.newAttributes,V=o.enabledAttributes;for(let Y=0,H=V.length;Y<H;Y++)V[Y]!==O[Y]&&(n.disableVertexAttribArray(Y),V[Y]=0)}function w(O,V,Y,H,Z,ae,k){k===!0?n.vertexAttribIPointer(O,V,Y,Z,ae):n.vertexAttribPointer(O,V,Y,H,Z,ae)}function E(O,V,Y,H){_();const Z=H.attributes,ae=Y.getAttributes(),k=V.defaultAttributeValues;for(const ue in ae){const U=ae[ue];if(U.location>=0){let X=Z[ue];if(X===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),X!==void 0){const j=X.normalized,be=X.itemSize,Ee=e.get(X);if(Ee===void 0)continue;const $e=Ee.buffer,ke=Ee.type,st=Ee.bytesPerElement,oe=ke===n.INT||ke===n.UNSIGNED_INT||X.gpuType===Yf;if(X.isInterleavedBufferAttribute){const de=X.data,Le=de.stride,Qe=X.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<U.locationSize;Fe++)x(U.location+Fe,de.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)v(U.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Fe=0;Fe<U.locationSize;Fe++)w(U.location+Fe,be/U.locationSize,ke,j,Le*st,(Qe+be/U.locationSize*Fe)*st,oe)}else{if(X.isInstancedBufferAttribute){for(let de=0;de<U.locationSize;de++)x(U.location+de,X.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let de=0;de<U.locationSize;de++)v(U.location+de);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let de=0;de<U.locationSize;de++)w(U.location+de,be/U.locationSize,ke,j,be*st,be/U.locationSize*de*st,oe)}}else if(k!==void 0){const j=k[ue];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(U.location,j);break;case 3:n.vertexAttrib3fv(U.location,j);break;case 4:n.vertexAttrib4fv(U.location,j);break;default:n.vertexAttrib1fv(U.location,j)}}}}b()}function y(){R();for(const O in i){const V=i[O];for(const Y in V){const H=V[Y];for(const Z in H){const ae=H[Z];for(const k in ae)u(ae[k].object),delete ae[k];delete H[Z]}}delete i[O]}}function T(O){if(i[O.id]===void 0)return;const V=i[O.id];for(const Y in V){const H=V[Y];for(const Z in H){const ae=H[Z];for(const k in ae)u(ae[k].object),delete ae[k];delete H[Z]}}delete i[O.id]}function I(O){for(const V in i){const Y=i[V];for(const H in Y){const Z=Y[H];if(Z[O.id]===void 0)continue;const ae=Z[O.id];for(const k in ae)u(ae[k].object),delete ae[k];delete Z[O.id]}}}function S(O){for(const V in i){const Y=i[V],H=O.isInstancedMesh===!0?O.id:0,Z=Y[H];if(Z!==void 0){for(const ae in Z){const k=Z[ae];for(const ue in k)u(k[ue].object),delete k[ue];delete Z[ae]}delete Y[H],Object.keys(Y).length===0&&delete i[V]}}}function R(){L(),s=!0,o!==a&&(o=a,c(o.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:R,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function Rv(n,e,t){let i;function a(l){i=l}function o(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function r(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=r}function Cv(n,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==di&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(I){const S=I===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==zn&&I!==Fi&&!S&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(St("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:E,maxSamples:y,samples:T}}function Pv(n){const e=this;let t=null,i=0,a=!1,o=!1;const s=new wa,r=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,x=n.get(h);if(!a||m===null||m.length===0||o&&!v)o?u(null):c();else{const b=o?0:i,w=b*4;let E=x.clippingState||null;l.value=E,E=u(m,d,w,p);for(let y=0;y!==w;++y)E[y]=t[y];x.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=l.value,m!==!0||v===null){const x=p+_*4,b=d.matrixWorldInverse;r.getNormalMatrix(b),(v===null||v.length<x)&&(v=new Float32Array(x));for(let w=0,E=p;w!==_;++w,E+=4)s.copy(h[w]).applyMatrix4(b,r),s.normal.toArray(v,E),v[E+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}const Zo=4,Iv=6,Lv=20,Nv=256,Er=new wc,Id=new yt;let vl=null,Ml=0,_l=0,Sl=!1;const Dv=new z,Ya=new z;class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:s=256,position:r=Dv}=o;vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,Ml,_l),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Vi,format:di,colorSpace:fc,depthBuffer:!1},a=Nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Uv(o)),this._blurMaterial=Fv(o,e,t),this._ggxMaterial=Ov(o,e,t)}return a}_compileMaterial(e){const t=new _t(new Rn,e);this._renderer.compile(t,Er)}_sceneToCubeUV(e,t,i,a,o){const l=new li(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Id),h.toneMapping=zi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new un,new Hi({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,v=_.material;let x=!1;const b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,x=!0):(v.color.copy(Id),x=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[w],o.y,o.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[w],o.z)):(l.up.set(0,c[w],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[w]));const y=this._cubeSize;Go(a,E*y,w>2?y:0,y,y),h.setRenderTarget(a),x&&h.render(_,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===oo||e.mapping===tr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dd());const o=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;Go(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,r=this._lodMeshes[i];r.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,_=this._sizeLods[i],v=3*_*(i>m-Zo?i-m+Zo:0),x=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Go(o,v,x,3*_,2*_),a.setRenderTarget(o),a.render(r,Er),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-i,Go(e,v,x,3*_,2*_),a.setRenderTarget(e),a.render(r,Er)}_blur(e,t,i,a){const o=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,s),this._blurPass(o,e,i,i,s)}_blurPass(e,t,i,a,o){const s=this._renderer,r=this._blurMaterial,l=this._lodMeshes[a];l.material=r;const c=r.uniforms;c.envMap.value=e.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-Zo?a-this._lodMax+Zo:0),d=4*(this._cubeSize-u);Go(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(l,Er)}}function Uv(n){const e=[],t=[];let i=n;const a=n-Zo+1+Iv;for(let o=0;o<a;o++){const s=Math.pow(2,i);e.push(s);const r=1/(s-2),l=-r,c=1+r,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),_=new Float32Array(p*d*h);for(let x=0;x<h;x++){const b=x%3*2/3-1,w=x>2?0:-1,E=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];m.set(E,p*d*x);for(let y=0;y<d;y++){const T=u[y*2]*2-1,I=u[y*2+1]*2-1;x===0?Ya.set(1,I,T):x===1?Ya.set(-T,1,-I):x===2?Ya.set(-T,I,1):x===3?Ya.set(-1,I,-T):x===4?Ya.set(-T,-1,I):Ya.set(T,I,-1),Ya.toArray(_,(x*d+y)*p)}}const v=new Rn;v.setAttribute("position",new Ei(m,p)),v.setAttribute("outputDirection",new Ei(_,p)),t.push(new _t(v,null)),i>Zo&&i--}return{lodMeshes:t,sizeLods:e}}function Nd(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Ov(n,e,t){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Fv(n,e,t){return new Ai({name:"SphericalGaussianBlur",defines:{SAMPLES:Lv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Dd(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Ud(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sa,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sp extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new rp(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new un(5,5,5),o=new Ai({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:sa});o.uniforms.tEquirect.value=t;const s=new _t(a,o),r=t.minFilter;return t.minFilter===Qa&&(t.minFilter=Tn),new k1(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(o)}}function Bv(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):o(d)}function o(d){if(d&&d.isTexture){const p=d.mapping;if(p===Vc||p===Hc)if(e.has(d)){const m=e.get(d).texture;return r(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Sp(m.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),r(_.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Vc||p===Hc,_=p===oo||p===tr;if(m||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Ld(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const b=d.image;return m&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new Ld(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function r(d,p){return p===Vc?d.mapping=oo:p===Hc&&(d.mapping=tr),d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function zv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&jo("WebGLRenderer: "+i+" extension not supported."),a}}}function Gv(n,e,t,i){const a={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(p!==null){const b=p.array;_=p.version;for(let w=0,E=b.length;w<E;w+=3){const y=b[w+0],T=b[w+1],I=b[w+2];d.push(y,T,T,I,I,y)}}else{const b=m.array;_=m.version;for(let w=0,E=b.length/3-1;w<E;w+=3){const y=w+0,T=w+1,I=w+2;d.push(y,T,T,I,I,y)}}const v=new(m.count>=65535?ep:Qh)(d,1);v.version=_;const x=o.get(h);x&&e.remove(x),o.set(h,v)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:r,update:l,getWireframeAttribute:u}}function kv(n,e,t){let i;function a(h){i=h}let o,s;function r(h){o=h.type,s=h.bytesPerElement}function l(h,d){n.drawElements(i,d,o,h*s),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,o,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,h,0,p);let _=0;for(let v=0;v<p;v++)_+=d[v];t.update(_,i,1)}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Vv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,r){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=r*(o/3);break;case n.LINES:t.lines+=r*(o/2);break;case n.LINE_STRIP:t.lines+=r*(o-1);break;case n.LINE_LOOP:t.lines+=r*o;break;case n.POINTS:t.points+=r*o;break;default:Ut("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Hv(n,e,t){const i=new WeakMap,a=new on;function o(s,r,l){const c=s.morphTargetInfluences,u=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(r);if(d===void 0||d.count!==h){let L=function(){S.dispose(),i.delete(r),r.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=r.morphAttributes.position!==void 0,_=r.morphAttributes.normal!==void 0,v=r.morphAttributes.color!==void 0,x=r.morphAttributes.position||[],b=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let E=0;m===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let y=r.attributes.position.count*E,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*T*4*h),S=new Jh(I,y,T,h);S.type=Fi,S.needsUpdate=!0;const R=E*4;for(let O=0;O<h;O++){const V=x[O],Y=b[O],H=w[O],Z=y*T*4*O;for(let ae=0;ae<V.count;ae++){const k=ae*R;m===!0&&(a.fromBufferAttribute(V,ae),I[Z+k+0]=a.x,I[Z+k+1]=a.y,I[Z+k+2]=a.z,I[Z+k+3]=0),_===!0&&(a.fromBufferAttribute(Y,ae),I[Z+k+4]=a.x,I[Z+k+5]=a.y,I[Z+k+6]=a.z,I[Z+k+7]=0),v===!0&&(a.fromBufferAttribute(H,ae),I[Z+k+8]=a.x,I[Z+k+9]=a.y,I[Z+k+10]=a.z,I[Z+k+11]=H.itemSize===4?a.w:1)}}d={count:h,texture:S,size:new We(y,T)},i.set(r,d),r.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const _=r.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function Wv(n,e,t,i,a){let o=new WeakMap;function s(c){const u=a.render.frame,h=c.geometry,d=e.get(c,h);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;o.get(p)!==u&&(p.update(),o.set(p,u))}return d}function r(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:r}}const Xv={[Lh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Dh]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[Fh]:"AGX_TONE_MAPPING",[Bh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function qv(n,e,t,i,a,o){const s=new hi(e,t,{type:n,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let r=null,l=null;const c=new Rn;c.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nn([0,2,0,0,2,0],2));const u=new P1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new _t(c,u),d=new wc(-1,1,1,-1,0,1);let p=null,m=null,_=!1,v,x=null,b=[],w=!1;this.setSize=function(E,y){s.setSize(E,y),r!==null&&r.setSize(E,y),l!==null&&l.setSize(E,y);for(let T=0;T<b.length;T++){const I=b[T];I.setSize&&I.setSize(E,y)}},this.setEffects=function(E){b=E,w=b.length>0&&b[0].isRenderPass===!0;const y=s.width,T=s.height;b.length>0&&r===null&&(r=new hi(y,T,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new hi(y,T,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<b.length;I++){const S=b[I];S.setSize&&S.setSize(y,T)}},this.begin=function(E,y){if(_||E.toneMapping===zi&&b.length===0)return!1;if(x=y,y!==null){const T=y.width,I=y.height;(s.width!==T||s.height!==I)&&this.setSize(T,I)}return w===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=zi,!0},this.hasRenderPass=function(){return w},this.end=function(E,y){E.toneMapping=v,_=!0;let T=s,I=r;for(let S=0;S<b.length;S++){const R=b[S];R.enabled!==!1&&(R.render(E,I,T,y),R.needsSwap!==!1&&(T=I,I=I===r?l:r))}if(p!==E.outputColorSpace||m!==E.toneMapping){p=E.outputColorSpace,m=E.toneMapping,u.defines={},Dt.getTransfer(p)===Xt&&(u.defines.SRGB_TRANSFER="");const S=Xv[m];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(x),E.render(h,d),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),r!==null&&r.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const yp=new wn,Tf=new nr(1,1),bp=new Jh,Ep=new Rm,Ap=new rp,Od=[],Fd=[],Bd=new Float32Array(16),zd=new Float32Array(9),Gd=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let o=Od[a];if(o===void 0&&(o=new Float32Array(a),Od[a]=o),e!==0){i.toArray(o,0);for(let s=1,r=0;s!==e;++s)r+=t,n[s].toArray(o,r)}return o}function Mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cc(n,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(Mn(t,i))return;Gd.set(i),n.uniformMatrix2fv(this.addr,!1,Gd),_n(t,i)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(Mn(t,i))return;zd.set(i),n.uniformMatrix3fv(this.addr,!1,zd),_n(t,i)}}function Qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(Mn(t,i))return;Bd.set(i),n.uniformMatrix4fv(this.addr,!1,Bd),_n(t,i)}}function e2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function n2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function i2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function a2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function r2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function s2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function c2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?(Tf.compareFunction=t.isReversedDepthBuffer()?tu:eu,o=Tf):o=yp,t.setTexture2D(e||o,a)}function l2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Ep,a)}function f2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ap,a)}function u2(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||bp,a)}function d2(n){switch(n){case 5126:return $v;case 35664:return Yv;case 35665:return Jv;case 35666:return Zv;case 35674:return Kv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return a2;case 36294:return o2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return l2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return u2}}function h2(n,e){n.uniform1fv(this.addr,e)}function p2(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function m2(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function g2(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function x2(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v2(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M2(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _2(n,e){n.uniform1iv(this.addr,e)}function S2(n,e){n.uniform2iv(this.addr,e)}function y2(n,e){n.uniform3iv(this.addr,e)}function b2(n,e){n.uniform4iv(this.addr,e)}function E2(n,e){n.uniform1uiv(this.addr,e)}function A2(n,e){n.uniform2uiv(this.addr,e)}function T2(n,e){n.uniform3uiv(this.addr,e)}function w2(n,e){n.uniform4uiv(this.addr,e)}function R2(n,e,t){const i=this.cache,a=e.length,o=Cc(t,a);Mn(i,o)||(n.uniform1iv(this.addr,o),_n(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=Tf:s=yp;for(let r=0;r!==a;++r)t.setTexture2D(e[r]||s,o[r])}function C2(n,e,t){const i=this.cache,a=e.length,o=Cc(t,a);Mn(i,o)||(n.uniform1iv(this.addr,o),_n(i,o));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Ep,o[s])}function P2(n,e,t){const i=this.cache,a=e.length,o=Cc(t,a);Mn(i,o)||(n.uniform1iv(this.addr,o),_n(i,o));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ap,o[s])}function I2(n,e,t){const i=this.cache,a=e.length,o=Cc(t,a);Mn(i,o)||(n.uniform1iv(this.addr,o),_n(i,o));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||bp,o[s])}function L2(n){switch(n){case 5126:return h2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return x2;case 35675:return v2;case 35676:return M2;case 5124:case 35670:return _2;case 35667:case 35671:return S2;case 35668:case 35672:return y2;case 35669:case 35673:return b2;case 5125:return E2;case 36294:return A2;case 36295:return T2;case 36296:return w2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}class N2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d2(t.type)}}class D2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L2(t.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,s=a.length;o!==s;++o){const r=a[o];r.setValue(e,t[r.id],i)}}}const yl=/(\w+)(\])?(\[|\.)?/g;function kd(n,e){n.seq.push(e),n.map[e.id]=e}function O2(n,e,t){const i=n.name,a=i.length;for(yl.lastIndex=0;;){const o=yl.exec(i),s=yl.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&s+2===a){kd(t,c===void 0?new N2(r,n,e):new D2(r,n,e));break}else{let h=t.map[r];h===void 0&&(h=new U2(r),kd(t,h)),t=h}}}class ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),l=e.getUniformLocation(t,r.name);O2(r,l,this)}const a=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):o.push(s);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,s=t.length;o!==s;++o){const r=t[o],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function Vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const F2=37297;let B2=0;function z2(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=a;s<o;s++){const r=s+1;i.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return i.join(`
`)}const Hd=new Tt;function G2(n){Dt._getMatrix(Hd,Dt.workingColorSpace,n);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(n)){case uc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+z2(n.getShaderSource(e),r)}else return o}function k2(n,e){const t=G2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const V2={[Lh]:"Linear",[Nh]:"Reinhard",[Dh]:"Cineon",[Uh]:"ACESFilmic",[Fh]:"AgX",[Bh]:"Neutral",[Oh]:"Custom"};function H2(n,e){const t=V2[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new z;function W2(){Dt.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function q2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=n.getActiveAttrib(e,a),s=o.name;let r=1;o.type===n.FLOAT_MAT2&&(r=2),o.type===n.FLOAT_MAT3&&(r=3),o.type===n.FLOAT_MAT4&&(r=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:r}}return t}function Nr(n){return n!==""}function Xd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(n){return n.replace(Y2,Z2)}const J2=new Map;function Z2(n,e){let t=Ct[e];if(t===void 0){const i=J2.get(e);if(i!==void 0)t=Ct[i],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wf(t)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(n){return n.replace(K2,j2)}function j2(n,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Yd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Q2={[Dr]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function eM(n){return Q2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tM={[oo]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function nM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":tM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const iM={[tr]:"ENVMAP_MODE_REFRACTION"};function aM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oM={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function rM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oM[n.combine]||"ENVMAP_BLENDING_NONE"}function sM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function cM(n,e,t,i){const a=n.getContext(),o=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=eM(t),c=nM(t),u=aM(t),h=rM(t),d=sM(t),p=X2(t),m=q2(o),_=a.createProgram();let v,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),x.length>0&&(x+=`
`)):(v=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),x=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Ct.tonemapping_pars_fragment:"",t.toneMapping!==zi?H2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,k2("linearToOutputTexel",t.outputColorSpace),W2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),s=wf(s),s=Xd(s,t),s=qd(s,t),r=wf(r),r=Xd(r,t),r=qd(r,t),s=$d(s),r=$d(r),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=b+v+s,E=b+x+r,y=Vd(a,a.VERTEX_SHADER,w),T=Vd(a,a.FRAGMENT_SHADER,E);a.attachShader(_,y),a.attachShader(_,T),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function I(O){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(_)||"",Y=a.getShaderInfoLog(y)||"",H=a.getShaderInfoLog(T)||"",Z=V.trim(),ae=Y.trim(),k=H.trim();let ue=!0,U=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,_,y,T);else{const X=Wd(a,y,"vertex"),j=Wd(a,T,"fragment");Ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+X+`
`+j)}else Z!==""?St("WebGLProgram: Program Info Log:",Z):(ae===""||k==="")&&(U=!1);U&&(O.diagnostics={runnable:ue,programLog:Z,vertexShader:{log:ae,prefix:v},fragmentShader:{log:k,prefix:x}})}a.deleteShader(y),a.deleteShader(T),S=new ac(a,_),R=$2(a,_)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(_,F2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let lM=0;class fM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uM(e),t.set(e,i)),i}}class uM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function dM(n){return n===ro||n===cc||n===lc}function hM(n,e,t,i,a,o){const s=new Zh,r=new fM,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,R,L,O,V,Y){const H=O.fog,Z=V.geometry,ae=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ue=e.get(S.envMap||ae,k),U=ue&&ue.mapping===Ac?ue.image.height:null,X=p[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&St("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const j=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,be=j!==void 0?j.length:0;let Ee=0;Z.morphAttributes.position!==void 0&&(Ee=1),Z.morphAttributes.normal!==void 0&&(Ee=2),Z.morphAttributes.color!==void 0&&(Ee=3);let $e,ke,st,oe;if(X){const f=Di[X];$e=f.vertexShader,ke=f.fragmentShader}else{$e=S.vertexShader,ke=S.fragmentShader;const f=r.getVertexShaderStage(S),bt=r.getFragmentShaderStage(S);r.update(S,f,bt),st=f.id,oe=bt.id}const de=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Qe=V.isInstancedMesh===!0,Fe=V.isBatchedMesh===!0,Oe=!!S.map,rt=!!S.matcap,fe=!!ue,ye=!!S.aoMap,Ce=!!S.lightMap,ge=!!S.bumpMap&&S.wireframe===!1,Pe=!!S.normalMap,ot=!!S.displacementMap,ee=!!S.emissiveMap,Ie=!!S.metalnessMap,Xe=!!S.roughnessMap,F=S.anisotropy>0,P=S.clearcoat>0,qe=S.dispersion>0,N=S.retroreflectivity>0,A=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,le=F&&!!S.anisotropyMap,_e=P&&!!S.clearcoatMap,Ue=P&&!!S.clearcoatNormalMap,ce=P&&!!S.clearcoatRoughnessMap,xe=A&&!!S.iridescenceMap,Ze=A&&!!S.iridescenceThicknessMap,ut=J&&!!S.sheenColorMap,Ge=J&&!!S.sheenRoughnessMap,ze=!!S.specularMap,je=!!S.specularColorMap,xt=!!S.specularIntensityMap,vt=Q&&!!S.transmissionMap,q=Q&&!!S.thicknessMap,Ke=!!S.gradientMap,ve=!!S.alphaMap,Ve=S.alphaTest>0,we=!!S.alphaHash,Te=!!S.extensions;let dt=zi;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(dt=n.toneMapping);const ct={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:ke,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&V._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&V.instanceColor!==null,instancingMorph:Qe&&V.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Oe,matcap:rt,envMap:fe,envMapMode:fe&&ue.mapping,envMapCubeUVHeight:U,aoMap:ye,lightMap:Ce,bumpMap:ge,normalMap:Pe,displacementMap:ot,emissiveMap:ee,normalMapObjectSpace:Pe&&S.normalMapType===Y0,normalMapTangentSpace:Pe&&S.normalMapType===Sf,packedNormalMap:Pe&&S.normalMapType===Sf&&dM(S.normalMap.format),metalnessMap:Ie,roughnessMap:Xe,anisotropy:F,anisotropyMap:le,clearcoat:P,clearcoatMap:_e,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ce,dispersion:qe,retroreflection:N,iridescence:A,iridescenceMap:xe,iridescenceThicknessMap:Ze,sheen:J,sheenColorMap:ut,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:je,specularIntensityMap:xt,transmission:Q,transmissionMap:vt,thicknessMap:q,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===Ur&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ve,alphaHash:we,combine:S.combine,mapUv:Oe&&m(S.map.channel),aoMapUv:ye&&m(S.aoMap.channel),lightMapUv:Ce&&m(S.lightMap.channel),bumpMapUv:ge&&m(S.bumpMap.channel),normalMapUv:Pe&&m(S.normalMap.channel),displacementMapUv:ot&&m(S.displacementMap.channel),emissiveMapUv:ee&&m(S.emissiveMap.channel),metalnessMapUv:Ie&&m(S.metalnessMap.channel),roughnessMapUv:Xe&&m(S.roughnessMap.channel),anisotropyMapUv:le&&m(S.anisotropyMap.channel),clearcoatMapUv:_e&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(S.sheenRoughnessMap.channel),specularMapUv:ze&&m(S.specularMap.channel),specularColorMapUv:je&&m(S.specularColorMap.channel),specularIntensityMapUv:xt&&m(S.specularIntensityMap.channel),transmissionMapUv:vt&&m(S.transmissionMap.channel),thicknessMapUv:q&&m(S.thicknessMap.channel),alphaMapUv:ve&&m(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Pe||F),vertexNormals:!!Z.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Oe||ve),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Z.attributes.normal===void 0&&Pe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Le,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ee,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&Dt.getTransfer(S.map.colorSpace)===Xt,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(S.emissiveMap.colorSpace)===Xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fi,flipSided:S.side===kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function v(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)R.push(L),R.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(R,S),b(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numSunLights),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numSunLightShadows),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function b(S,R){s.disableAll(),R.instancing&&s.enable(0),R.instancingColor&&s.enable(1),R.instancingMorph&&s.enable(2),R.matcap&&s.enable(3),R.envMap&&s.enable(4),R.normalMapObjectSpace&&s.enable(5),R.normalMapTangentSpace&&s.enable(6),R.clearcoat&&s.enable(7),R.iridescence&&s.enable(8),R.alphaTest&&s.enable(9),R.vertexColors&&s.enable(10),R.vertexAlphas&&s.enable(11),R.vertexUv1s&&s.enable(12),R.vertexUv2s&&s.enable(13),R.vertexUv3s&&s.enable(14),R.vertexTangents&&s.enable(15),R.anisotropy&&s.enable(16),R.alphaHash&&s.enable(17),R.batching&&s.enable(18),R.dispersion&&s.enable(19),R.retroreflection&&s.enable(24),R.batchingColor&&s.enable(20),R.gradientMap&&s.enable(21),R.packedNormalMap&&s.enable(22),R.vertexNormals&&s.enable(23),S.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.reversedDepthBuffer&&s.enable(4),R.skinning&&s.enable(5),R.morphTargets&&s.enable(6),R.morphNormals&&s.enable(7),R.morphColors&&s.enable(8),R.premultipliedAlpha&&s.enable(9),R.shadowMapEnabled&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),R.decodeVideoTextureEmissive&&s.enable(20),R.alphaToCoverage&&s.enable(21),R.numLightProbeGrids>0&&s.enable(22),R.hasPositionAttribute&&s.enable(23),S.push(s.mask)}function w(S){const R=p[S.type];let L;if(R){const O=Di[R];L=w1.clone(O.uniforms)}else L=S.uniforms;return L}function E(S,R){let L=u.get(R);return L!==void 0?++L.usedTimes:(L=new cM(n,R,S,a),c.push(L),u.set(R,L)),L}function y(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){r.remove(S)}function I(){r.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:w,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:I}}function pM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let r=n.get(s);return r===void 0&&(r={},n.set(s,r)),r}function i(s){n.delete(s)}function a(s,r,l){n.get(s)[r]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function mM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zd(){const n=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function r(d,p,m,_,v,x){let b=n[e];return b===void 0?(b={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:_,renderOrder:d.renderOrder,z:v,group:x},n[e]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=m,b.materialVariant=s(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=v,b.group=x),e++,b}function l(d,p,m,_,v,x,b){b.reversedDepth===!0&&(v=-v);const w=r(d,p,m,_,v,x);m.transmission>0?i.push(w):m.transparent===!0?a.push(w):t.push(w)}function c(d,p,m,_,v,x){const b=r(d,p,m,_,v,x);m.transmission>0?i.unshift(b):m.transparent===!0?a.unshift(b):t.unshift(b)}function u(d,p){t.length>1&&t.sort(d||mM),i.length>1&&i.sort(p||Jd),a.length>1&&a.sort(p||Jd)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:l,unshift:c,finish:h,sort:u}}function gM(){let n=new WeakMap;function e(i,a){const o=n.get(i);let s;return o===void 0?(s=new Zd,n.set(i,[s])):a>=o.length?(s=new Zd,o.push(s)):s=o[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function xM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new yt};break;case"SpotLight":t={position:new z,direction:new z,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function vM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MM=0;function _M(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SM(n){const e=new xM,t=vM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const a=new z,o=new Qt,s=new Qt;function r(c){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,_=0,v=0,x=0,b=0,w=0,E=0,y=0,T=0,I=0,S=0,R=0,L=0;c.sort(_M);for(let V=0,Y=c.length;V<Y;V++){const H=c[V],Z=H.color,ae=H.intensity,k=H.distance;let ue=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ro?ue=H.shadow.map.texture:ue=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=Z.r*ae,h+=Z.g*ae,d+=Z.b*ae;else if(H.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(H.sh.coefficients[U],ae);L++}else if(H.isSunLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,j=t.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=j,i.sunShadowMap[m]=ue;const be=X.getViewportCount();for(let Ee=0;Ee<be;Ee++)i.sunShadowMatrix[_+Ee]=X.getMatrix(Ee),i.sunShadowCascade[_+Ee]=X._cascadeData[Ee];_+=be,m++}i.sun[p]=U,p++}else if(H.isDirectionalLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,j=t.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.directionalShadow[v]=j,i.directionalShadowMap[v]=ue,i.directionalShadowMatrix[v]=H.shadow.matrix,y++}i.directional[v]=U,v++}else if(H.isSpotLight){const U=e.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(Z).multiplyScalar(ae),U.distance=k,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,i.spot[b]=U;const X=H.shadow;if(H.map&&(i.spotLightMap[S]=H.map,S++,X.updateMatrices(H),H.castShadow&&R++),i.spotLightMatrix[b]=X.matrix,H.castShadow){const j=t.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=ue,I++}b++}else if(H.isRectAreaLight){const U=e.get(H);U.color.copy(Z).multiplyScalar(ae),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),i.rectArea[w]=U,w++}else if(H.isPointLight){const U=e.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const X=H.shadow,j=t.get(H);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,i.pointShadow[x]=j,i.pointShadowMap[x]=ue,i.pointShadowMatrix[x]=H.shadow.matrix,T++}i.point[x]=U,x++}else if(H.isHemisphereLight){const U=e.get(H);U.skyColor.copy(H.color).multiplyScalar(ae),U.groundColor.copy(H.groundColor).multiplyScalar(ae),i.hemi[E]=U,E++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const O=i.hash;(O.sunLength!==p||O.directionalLength!==v||O.pointLength!==x||O.spotLength!==b||O.rectAreaLength!==w||O.hemiLength!==E||O.numSunShadows!==m||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==I||O.numSpotMaps!==S||O.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=b,i.rectArea.length=w,i.point.length=x,i.hemi.length=E,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+S-R,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,O.sunLength=p,O.directionalLength=v,O.pointLength=x,O.spotLength=b,O.rectAreaLength=w,O.hemiLength=E,O.numSunShadows=m,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=I,O.numSpotMaps=S,O.numLightProbes=L,i.version=MM++)}function l(c,u){let h=0,d=0,p=0,m=0,_=0,v=0;const x=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){const E=c[b];if(E.isSunLight){const y=i.sun[h];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(x),h++}else if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(x),d++}else if(E.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(x),m++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(x),s.identity(),o.copy(E.matrixWorld),o.premultiply(x),s.extractRotation(o),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(x),v++}}}return{setup:r,setupView:l,state:i}}function Kd(n){const e=new SM(n),t=[],i=[],a=[];function o(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function r(d){i.push(d)}function l(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:r,pushLightProbeGrid:l}}function yM(n){let e=new WeakMap;function t(a,o=0){const s=e.get(a);let r;return s===void 0?(r=new Kd(n),e.set(a,[r])):o>=s.length?(r=new Kd(n),s.push(r)):r=s[o],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EM=`uniform sampler2D shadow_pass;
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
}`,AM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],TM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],jd=new Qt,Ar=new z,bl=new z;function wM(n,e,t){let i=new ou;const a=new We,o=new We,s=new on,r=new I1,l=new L1,c={},u=t.maxTextureSize,h={[ao]:kn,[kn]:ao,[fi]:fi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:bM,fragmentShader:EM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Rn;m.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let x=this.type;this.render=function(T,I,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===A0&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);const R=n.getRenderTarget(),L=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(sa),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=x!==this.type;Y&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(Z=>Z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,Z=T.length;H<Z;H++){const ae=T[H],k=ae.shadow;if(k===void 0){St("WebGLShadowMap:",ae,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ue=k.getFrameExtents();a.multiply(ue),o.copy(k.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(o.x=Math.floor(u/ue.x),a.x=o.x*ue.x,k.mapSize.x=o.x),a.y>u&&(o.y=Math.floor(u/ue.y),a.y=o.y*ue.y,k.mapSize.y=o.y));const U=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=U,k.map===null||Y===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ir){if(ae.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new hi(a.x,a.y,{format:ro,type:Vi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),k.map.texture.name=ae.name+".shadowMap",k.map.depthTexture=new nr(a.x,a.y,Fi),k.map.depthTexture.name=ae.name+".shadowMapDepth",k.map.depthTexture.format=fa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln}else ae.isPointLight?(k.map=new Sp(a.x),k.map.depthTexture=new qm(a.x,ki)):(k.map=new hi(a.x,a.y),k.map.depthTexture=new nr(a.x,a.y,ki)),k.map.depthTexture.name=ae.name+".shadowMap",k.map.depthTexture.format=fa,this.type===Dr?(k.map.depthTexture.compareFunction=U?tu:eu,k.map.depthTexture.minFilter=Tn,k.map.depthTexture.magFilter=Tn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==a.x||k.map.height!==a.y)&&k.map.setSize(a.x,a.y);const X=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();ae.isPointLight!==!0&&k.updateMatrices(ae,S);for(let j=0;j<X;j++){const be=k.getCamera(j);if(ae.isPointLight){const Ee=k.camera,$e=k.matrix,ke=ae.distance||Ee.far;ke!==Ee.far&&(Ee.far=ke,Ee.updateProjectionMatrix()),Ar.setFromMatrixPosition(ae.matrixWorld),Ee.position.copy(Ar),bl.copy(Ee.position),bl.add(AM[j]),Ee.up.copy(TM[j]),Ee.lookAt(bl),Ee.updateMatrixWorld(),$e.makeTranslation(-Ar.x,-Ar.y,-Ar.z),jd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(jd,Ee.coordinateSystem,Ee.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,j),n.clear();else{j===0&&(n.setRenderTarget(k.map),n.clear());const Ee=k.getViewport(j);s.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),V.viewport(s)}i=k.getFrustum(j),E(I,S,be,ae,this.type)}k.isPointLightShadow!==!0&&this.type===Ir&&b(k,S),k.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(R,L,O)};function b(T,I){const S=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new hi(a.x,a.y,{format:ro,type:Vi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,S,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,S,p,_,null)}function w(T,I,S,R){let L=null;const O=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)L=O;else if(L=S.isPointLight===!0?l:r,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=L.uuid,Y=I.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let Z=H[Y];Z===void 0&&(Z=L.clone(),H[Y]=Z,I.addEventListener("dispose",y)),L=Z}if(L.visible=I.visible,L.wireframe=I.wireframe,R===Ir?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=n.properties.get(L);V.light=S}return L}function E(T,I,S,R,L){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Ir)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),H=T.material;if(Array.isArray(H)){const Z=Y.groups;for(let ae=0,k=Z.length;ae<k;ae++){const ue=Z[ae],U=H[ue.materialIndex];if(U&&U.visible){const X=w(T,U,R,L);T.onBeforeShadow(n,T,I,S,Y,X,ue),n.renderBufferDirect(S,null,Y,X,T,ue),T.onAfterShadow(n,T,I,S,Y,X,ue)}}}else if(H.visible){const Z=w(T,H,R,L);T.onBeforeShadow(n,T,I,S,Y,Z,null),n.renderBufferDirect(S,null,Y,Z,T,null),T.onAfterShadow(n,T,I,S,Y,Z,null)}}const V=T.children;for(let Y=0,H=V.length;Y<H;Y++)E(V[Y],I,S,R,L)}function y(T){T.target.removeEventListener("dispose",y);for(const S in c){const R=c[S],L=T.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function RM(n,e){function t(){let q=!1;const Ke=new on;let ve=null;const Ve=new on(0,0,0,0);return{setMask:function(we){ve!==we&&!q&&(n.colorMask(we,we,we,we),ve=we)},setLocked:function(we){q=we},setClear:function(we,Te,dt,ct,f){f===!0&&(we*=ct,Te*=ct,dt*=ct),Ke.set(we,Te,dt,ct),Ve.equals(Ke)===!1&&(n.clearColor(we,Te,dt,ct),Ve.copy(Ke))},reset:function(){q=!1,ve=null,Ve.set(-1,0,0,0)}}}function i(){let q=!1,Ke=!1,ve=null,Ve=null,we=null;return{setReversed:function(Te){if(Ke!==Te){const dt=e.get("EXT_clip_control");Te?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Ke=Te;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return Ke},setTest:function(Te){Te?de(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Te){ve!==Te&&!q&&(n.depthMask(Te),ve=Te)},setFunc:function(Te){if(Ke&&(Te=om[Te]),Ve!==Te){switch(Te){case Ol:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Vr:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ve=Te}},setLocked:function(Te){q=Te},setClear:function(Te){we!==Te&&(we=Te,Ke&&(Te=1-Te),n.clearDepth(Te))},reset:function(){q=!1,ve=null,Ve=null,we=null,Ke=!1}}}function a(){let q=!1,Ke=null,ve=null,Ve=null,we=null,Te=null,dt=null,ct=null,f=null;return{setTest:function(bt){q||(bt?de(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(bt){Ke!==bt&&!q&&(n.stencilMask(bt),Ke=bt)},setFunc:function(bt,At,ai){(ve!==bt||Ve!==At||we!==ai)&&(n.stencilFunc(bt,At,ai),ve=bt,Ve=At,we=ai)},setOp:function(bt,At,ai){(Te!==bt||dt!==At||ct!==ai)&&(n.stencilOp(bt,At,ai),Te=bt,dt=At,ct=ai)},setLocked:function(bt){q=bt},setClear:function(bt){f!==bt&&(n.clearStencil(bt),f=bt)},reset:function(){q=!1,Ke=null,ve=null,Ve=null,we=null,Te=null,dt=null,ct=null,f=null}}}const o=new t,s=new i,r=new a,l=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],_=null,v=!1,x=null,b=null,w=null,E=null,y=null,T=null,I=null,S=new yt(0,0,0),R=0,L=!1,O=null,V=null,Y=null,H=null,Z=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ue=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=ue>=1):U.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=ue>=2);let X=null,j={};const be=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),$e=new on().fromArray(be),ke=new on().fromArray(Ee);function st(q,Ke,ve,Ve){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(q,Te),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<ve;dt++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ke,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ke+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const oe={};oe[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),r.setClear(0),de(n.DEPTH_TEST),s.setFunc(Vr),ge(!1),Pe(Xu),de(n.CULL_FACE),ye(sa);function de(q){u[q]!==!0&&(n.enable(q),u[q]=!0)}function Le(q){u[q]!==!1&&(n.disable(q),u[q]=!1)}function Qe(q,Ke){return d[q]!==Ke?(n.bindFramebuffer(q,Ke),d[q]=Ke,q===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ke),q===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ke),!0):!1}function Fe(q,Ke){let ve=m,Ve=!1;if(q){ve=p.get(Ke),ve===void 0&&(ve=[],p.set(Ke,ve));const we=q.textures;if(ve.length!==we.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,dt=we.length;Te<dt;Te++)ve[Te]=n.COLOR_ATTACHMENT0+Te;ve.length=we.length,Ve=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ve=!0);Ve&&n.drawBuffers(ve)}function Oe(q){return _!==q?(n.useProgram(q),_=q,!0):!1}const rt={[$o]:n.FUNC_ADD,[w0]:n.FUNC_SUBTRACT,[R0]:n.FUNC_REVERSE_SUBTRACT};rt[C0]=n.MIN,rt[P0]=n.MAX;const fe={[I0]:n.ZERO,[L0]:n.ONE,[N0]:n.SRC_COLOR,[Ch]:n.SRC_ALPHA,[z0]:n.SRC_ALPHA_SATURATE,[F0]:n.DST_COLOR,[U0]:n.DST_ALPHA,[D0]:n.ONE_MINUS_SRC_COLOR,[Ph]:n.ONE_MINUS_SRC_ALPHA,[B0]:n.ONE_MINUS_DST_COLOR,[O0]:n.ONE_MINUS_DST_ALPHA,[G0]:n.CONSTANT_COLOR,[k0]:n.ONE_MINUS_CONSTANT_COLOR,[V0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(q,Ke,ve,Ve,we,Te,dt,ct,f,bt){if(q===sa){v===!0&&(Le(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),q!==T0){if(q!==x||bt!==L){if((b!==$o||y!==$o)&&(n.blendEquation(n.FUNC_ADD),b=$o,y=$o),bt)switch(q){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qu:n.blendFunc(n.ONE,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ut("WebGLState: Invalid blending: ",q);break}else switch(q){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $u:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",q);break}w=null,E=null,T=null,I=null,S.set(0,0,0),R=0,x=q,L=bt}return}we=we||Ke,Te=Te||ve,dt=dt||Ve,(Ke!==b||we!==y)&&(n.blendEquationSeparate(rt[Ke],rt[we]),b=Ke,y=we),(ve!==w||Ve!==E||Te!==T||dt!==I)&&(n.blendFuncSeparate(fe[ve],fe[Ve],fe[Te],fe[dt]),w=ve,E=Ve,T=Te,I=dt),(ct.equals(S)===!1||f!==R)&&(n.blendColor(ct.r,ct.g,ct.b,f),S.copy(ct),R=f),x=q,L=!1}function Ce(q,Ke){q.side===fi?Le(n.CULL_FACE):de(n.CULL_FACE);let ve=q.side===kn;Ke&&(ve=!ve),ge(ve),q.blending===Ur&&q.transparent===!1?ye(sa):ye(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),s.setFunc(q.depthFunc),s.setTest(q.depthTest),s.setMask(q.depthWrite),o.setMask(q.colorWrite);const Ve=q.stencilWrite;r.setTest(Ve),Ve&&(r.setMask(q.stencilWriteMask),r.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),r.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ee(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ge(q){O!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),O=q)}function Pe(q){q!==b0?(de(n.CULL_FACE),q!==V&&(q===Xu?n.cullFace(n.BACK):q===E0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),V=q}function ot(q){q!==Y&&(k&&n.lineWidth(q),Y=q)}function ee(q,Ke,ve){q?(de(n.POLYGON_OFFSET_FILL),(H!==Ke||Z!==ve)&&(H=Ke,Z=ve,s.getReversed()&&(Ke=-Ke),n.polygonOffset(Ke,ve))):Le(n.POLYGON_OFFSET_FILL)}function Ie(q){q?de(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function Xe(q){q===void 0&&(q=n.TEXTURE0+ae-1),X!==q&&(n.activeTexture(q),X=q)}function F(q,Ke,ve){ve===void 0&&(X===null?ve=n.TEXTURE0+ae-1:ve=X);let Ve=j[ve];Ve===void 0&&(Ve={type:void 0,texture:void 0},j[ve]=Ve),(Ve.type!==q||Ve.texture!==Ke)&&(X!==ve&&(n.activeTexture(ve),X=ve),n.bindTexture(q,Ke||oe[q]),Ve.type=q,Ve.texture=Ke)}function P(){const q=j[X];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function qe(){try{n.compressedTexImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function A(){try{n.texSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function J(){try{n.texSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function _e(){try{n.texStorage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ue(){try{n.texStorage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function ce(){try{n.texImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function xe(){try{n.texImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ze(q){return h[q]!==void 0?h[q]:n.getParameter(q)}function ut(q,Ke){h[q]!==Ke&&(n.pixelStorei(q,Ke),h[q]=Ke)}function Ge(q){$e.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),$e.copy(q))}function ze(q){ke.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),ke.copy(q))}function je(q,Ke){let ve=c.get(Ke);ve===void 0&&(ve=new WeakMap,c.set(Ke,ve));let Ve=ve.get(q);Ve===void 0&&(Ve=n.getUniformBlockIndex(Ke,q.name),ve.set(q,Ve))}function xt(q,Ke){const Ve=c.get(Ke).get(q);l.get(Ke)!==Ve&&(n.uniformBlockBinding(Ke,Ve,q.__bindingPointIndex),l.set(Ke,Ve))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},X=null,j={},d={},p=new WeakMap,m=[],_=null,v=!1,x=null,b=null,w=null,E=null,y=null,T=null,I=null,S=new yt(0,0,0),R=0,L=!1,O=null,V=null,Y=null,H=null,Z=null,$e.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),r.reset()}return{buffers:{color:o,depth:s,stencil:r},enable:de,disable:Le,bindFramebuffer:Qe,drawBuffers:Fe,useProgram:Oe,setBlending:ye,setMaterial:Ce,setFlipSided:ge,setCullFace:Pe,setLineWidth:ot,setPolygonOffset:ee,setScissorTest:Ie,activeTexture:Xe,bindTexture:F,unbindTexture:P,compressedTexImage2D:qe,compressedTexImage3D:N,texImage2D:ce,texImage3D:xe,pixelStorei:ut,getParameter:Ze,updateUBOMapping:je,uniformBlockBinding:xt,texStorage2D:_e,texStorage3D:Ue,texSubImage2D:A,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:le,scissor:Ge,viewport:ze,reset:vt}}function CM(n,e,t,i,a,o,s){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,A){return m?new OffscreenCanvas(N,A):qr("canvas")}function v(N,A,J){let Q=1;const le=qe(N);if((le.width>J||le.height>J)&&(Q=J/Math.max(le.width,le.height)),Q<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _e=Math.floor(Q*le.width),Ue=Math.floor(Q*le.height);d===void 0&&(d=_(_e,Ue));const ce=A?_(_e,Ue):d;return ce.width=_e,ce.height=Ue,ce.getContext("2d").drawImage(N,0,0,_e,Ue),St("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+_e+"x"+Ue+")."),ce}else return"data"in N&&St("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),N;return N}function x(N){return N.generateMipmaps}function b(N){n.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(N,A,J,Q,le,_e=!1){if(N!==null){if(n[N]!==void 0)return n[N];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ue;Q&&(Ue=e.get("EXT_texture_norm16"),Ue||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=A;if(A===n.RED&&(J===n.FLOAT&&(ce=n.R32F),J===n.HALF_FLOAT&&(ce=n.R16F),J===n.UNSIGNED_BYTE&&(ce=n.R8),J===n.UNSIGNED_SHORT&&Ue&&(ce=Ue.R16_EXT),J===n.SHORT&&Ue&&(ce=Ue.R16_SNORM_EXT)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ce=n.R8UI),J===n.UNSIGNED_SHORT&&(ce=n.R16UI),J===n.UNSIGNED_INT&&(ce=n.R32UI),J===n.BYTE&&(ce=n.R8I),J===n.SHORT&&(ce=n.R16I),J===n.INT&&(ce=n.R32I)),A===n.RG&&(J===n.FLOAT&&(ce=n.RG32F),J===n.HALF_FLOAT&&(ce=n.RG16F),J===n.UNSIGNED_BYTE&&(ce=n.RG8),J===n.UNSIGNED_SHORT&&Ue&&(ce=Ue.RG16_EXT),J===n.SHORT&&Ue&&(ce=Ue.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(J===n.UNSIGNED_BYTE&&(ce=n.RG8UI),J===n.UNSIGNED_SHORT&&(ce=n.RG16UI),J===n.UNSIGNED_INT&&(ce=n.RG32UI),J===n.BYTE&&(ce=n.RG8I),J===n.SHORT&&(ce=n.RG16I),J===n.INT&&(ce=n.RG32I)),A===n.RGB_INTEGER&&(J===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),J===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),J===n.UNSIGNED_INT&&(ce=n.RGB32UI),J===n.BYTE&&(ce=n.RGB8I),J===n.SHORT&&(ce=n.RGB16I),J===n.INT&&(ce=n.RGB32I)),A===n.RGBA_INTEGER&&(J===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),J===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),J===n.UNSIGNED_INT&&(ce=n.RGBA32UI),J===n.BYTE&&(ce=n.RGBA8I),J===n.SHORT&&(ce=n.RGBA16I),J===n.INT&&(ce=n.RGBA32I)),A===n.RGB&&(J===n.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGB16_EXT),J===n.SHORT&&Ue&&(ce=Ue.RGB16_SNORM_EXT),J===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),J===n.UNSIGNED_INT_10F_11F_11F_REV&&(ce=n.R11F_G11F_B10F)),A===n.RGBA){const xe=_e?uc:Dt.getTransfer(le);J===n.FLOAT&&(ce=n.RGBA32F),J===n.HALF_FLOAT&&(ce=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ce=xe===Xt?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT&&Ue&&(ce=Ue.RGBA16_EXT),J===n.SHORT&&Ue&&(ce=Ue.RGBA16_SNORM_EXT),J===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(N,A){let J;return N?A===null||A===ki||A===Wr?J=n.DEPTH24_STENCIL8:A===Fi?J=n.DEPTH32F_STENCIL8:A===Hr&&(J=n.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ki||A===Wr?J=n.DEPTH_COMPONENT24:A===Fi?J=n.DEPTH_COMPONENT32F:A===Hr&&(J=n.DEPTH_COMPONENT16),J}function T(N,A){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==Tn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function I(N){const A=N.target;A.removeEventListener("dispose",I),R(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function S(N){const A=N.target;A.removeEventListener("dispose",S),O(A)}function R(N){const A=i.get(N);if(A.__webglInit===void 0)return;const J=N.source,Q=p.get(J);if(Q){const le=Q[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(N),Object.keys(Q).length===0&&p.delete(J)}i.remove(N)}function L(N){const A=i.get(N);n.deleteTexture(A.__webglTexture);const J=N.source,Q=p.get(J);delete Q[A.__cacheKey],s.memory.textures--}function O(N){const A=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let le=0;le<A.__webglFramebuffer[Q].length;le++)n.deleteFramebuffer(A.__webglFramebuffer[Q][le]);else n.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)n.deleteFramebuffer(A.__webglFramebuffer[Q]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=N.textures;for(let Q=0,le=J.length;Q<le;Q++){const _e=i.get(J[Q]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove(J[Q])}i.remove(N)}let V=0;function Y(){V=0}function H(){return V}function Z(N){V=N}function ae(){const N=V;return N>=a.maxTextures&&St("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,N}function k(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function ue(N,A){const J=i.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){const Q=N.image;if(Q===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(J,N,A);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function U(N,A){const J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Le(J,N,A);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function X(N,A){const J=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Le(J,N,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function j(N,A){const J=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&J.__version!==N.version){Qe(J,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}const be={[sc]:n.REPEAT,[aa]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},Ee={[ln]:n.NEAREST,[q0]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Wc]:n.LINEAR_MIPMAP_NEAREST,[Qa]:n.LINEAR_MIPMAP_LINEAR},$e={[Z0]:n.NEVER,[tm]:n.ALWAYS,[K0]:n.LESS,[eu]:n.LEQUAL,[j0]:n.EQUAL,[tu]:n.GEQUAL,[Q0]:n.GREATER,[em]:n.NOTEQUAL};function ke(N,A){if(A.type===Fi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Tn||A.magFilter===Wc||A.magFilter===vs||A.magFilter===Qa||A.minFilter===Tn||A.minFilter===Wc||A.minFilter===vs||A.minFilter===Qa)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,be[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,be[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,be[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ee[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ee[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,$e[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ln||A.minFilter!==vs&&A.minFilter!==Qa||A.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function st(N,A){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",I));const Q=A.source;let le=p.get(Q);le===void 0&&(le={},p.set(Q,le));const _e=k(A);if(_e!==N.__cacheKey){le[_e]===void 0&&(le[_e]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,J=!0),le[_e].usedTimes++;const Ue=le[N.__cacheKey];Ue!==void 0&&(le[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&L(A)),N.__cacheKey=_e,N.__webglTexture=le[_e].texture}return J}function oe(N,A,J){return Math.floor(Math.floor(N/J)/A)}function de(N,A,J,Q){const _e=N.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,J,Q,A.data);else{_e.sort((ut,Ge)=>ut.start-Ge.start);let Ue=0;for(let ut=1;ut<_e.length;ut++){const Ge=_e[Ue],ze=_e[ut],je=Ge.start+Ge.count,xt=oe(ze.start,A.width,4),vt=oe(Ge.start,A.width,4);ze.start<=je+1&&xt===vt&&oe(ze.start+ze.count-1,A.width,4)===xt?Ge.count=Math.max(Ge.count,ze.start+ze.count-Ge.start):(++Ue,_e[Ue]=ze)}_e.length=Ue+1;const ce=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let ut=0,Ge=_e.length;ut<Ge;ut++){const ze=_e[ut],je=Math.floor(ze.start/4),xt=Math.ceil(ze.count/4),vt=je%A.width,q=Math.floor(je/A.width),Ke=xt,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(n.UNPACK_SKIP_ROWS,q),t.texSubImage2D(n.TEXTURE_2D,0,vt,q,Ke,ve,J,Q,A.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ce),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ze)}}function Le(N,A,J){let Q=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=n.TEXTURE_3D);const le=st(N,A),_e=A.source;t.bindTexture(Q,N.__webglTexture,n.TEXTURE0+J);const Ue=i.get(_e);if(_e.version!==Ue.__version||le===!0){if(t.activeTexture(n.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ve=Dt.getPrimaries(Dt.workingColorSpace),Ve=A.colorSpace===Pa?null:Dt.getPrimaries(A.colorSpace),we=A.colorSpace===Pa||ve===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let xe=v(A.image,!1,a.maxTextureSize);xe=P(A,xe);const Ze=o.convert(A.format,A.colorSpace),ut=o.convert(A.type);let Ge=E(A.internalFormat,Ze,ut,A.normalized,A.colorSpace,A.isVideoTexture);ke(Q,A);let ze;const je=A.mipmaps,xt=A.isVideoTexture!==!0,vt=Ue.__version===void 0||le===!0,q=_e.dataReady,Ke=T(A,xe);if(A.isDepthTexture)Ge=y(A.format===eo,A.type),vt&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ze,ut,null));else if(A.isDataTexture)if(je.length>0){xt&&vt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ge,je[0].width,je[0].height);for(let ve=0,Ve=je.length;ve<Ve;ve++)ze=je[ve],xt?q&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ze.width,ze.height,Ze,ut,ze.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,ze.width,ze.height,0,Ze,ut,ze.data);A.generateMipmaps=!1}else xt?(vt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ge,xe.width,xe.height),q&&de(A,xe,Ze,ut)):t.texImage2D(n.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ze,ut,xe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ge,je[0].width,je[0].height,xe.depth);for(let ve=0,Ve=je.length;ve<Ve;ve++)if(ze=je[ve],A.format!==di)if(Ze!==null)if(xt){if(q)if(A.layerUpdates.size>0){const we=Pd(ze.width,ze.height,A.format,A.type);for(const Te of A.layerUpdates){const dt=ze.data.subarray(Te*we/ze.data.BYTES_PER_ELEMENT,(Te+1)*we/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Te,ze.width,ze.height,1,Ze,dt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,xe.depth,Ze,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,ze.width,ze.height,xe.depth,0,ze.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?q&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,xe.depth,Ze,ut,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ge,ze.width,ze.height,xe.depth,0,Ze,ut,ze.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{xt&&vt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ge,je[0].width,je[0].height);for(let ve=0,Ve=je.length;ve<Ve;ve++)ze=je[ve],A.format!==di?Ze!==null?xt?q&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,ze.width,ze.height,Ze,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ge,ze.width,ze.height,0,ze.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?q&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ze.width,ze.height,Ze,ut,ze.data):t.texImage2D(n.TEXTURE_2D,ve,Ge,ze.width,ze.height,0,Ze,ut,ze.data)}else if(A.isDataArrayTexture)if(xt){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ge,xe.width,xe.height,xe.depth),q)if(A.layerUpdates.size>0){const ve=Pd(xe.width,xe.height,A.format,A.type);for(const Ve of A.layerUpdates){const we=xe.data.subarray(Ve*ve/xe.data.BYTES_PER_ELEMENT,(Ve+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,xe.width,xe.height,1,Ze,ut,we)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ze,ut,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,Ze,ut,xe.data);else if(A.isData3DTexture)xt?(vt&&t.texStorage3D(n.TEXTURE_3D,Ke,Ge,xe.width,xe.height,xe.depth),q&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ze,ut,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,Ze,ut,xe.data);else if(A.isFramebufferTexture){if(vt)if(xt)t.texStorage2D(n.TEXTURE_2D,Ke,Ge,xe.width,xe.height);else{let ve=xe.width,Ve=xe.height;for(let we=0;we<Ke;we++)t.texImage2D(n.TEXTURE_2D,we,Ge,ve,Ve,0,Ze,ut,null),ve>>=1,Ve>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),xe.parentNode!==ve){ve.appendChild(xe),h.add(A),ve.onpaint=Ve=>{const we=Ve.changedElements;for(const Te of h)we.includes(Te.image)&&(Te.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const we=n.RGBA,Te=n.RGBA,dt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,Te,dt,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(je.length>0){if(xt&&vt){const ve=qe(je[0]);t.texStorage2D(n.TEXTURE_2D,Ke,Ge,ve.width,ve.height)}for(let ve=0,Ve=je.length;ve<Ve;ve++)ze=je[ve],xt?q&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ze,ut,ze):t.texImage2D(n.TEXTURE_2D,ve,Ge,Ze,ut,ze);A.generateMipmaps=!1}else if(xt){if(vt){const ve=qe(xe);t.texStorage2D(n.TEXTURE_2D,Ke,Ge,ve.width,ve.height)}q&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ze,ut,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ge,Ze,ut,xe);x(A)&&b(Q),Ue.__version=_e.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Qe(N,A,J){if(A.image.length!==6)return;const Q=st(N,A),le=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+J);const _e=i.get(le);if(le.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+J);const Ue=Dt.getPrimaries(Dt.workingColorSpace),ce=A.colorSpace===Pa?null:Dt.getPrimaries(A.colorSpace),xe=A.colorSpace===Pa||Ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,Ge=[];for(let Te=0;Te<6;Te++)!Ze&&!ut?Ge[Te]=v(A.image[Te],!0,a.maxCubemapSize):Ge[Te]=ut?A.image[Te].image:A.image[Te],Ge[Te]=P(A,Ge[Te]);const ze=Ge[0],je=o.convert(A.format,A.colorSpace),xt=o.convert(A.type),vt=E(A.internalFormat,je,xt,A.normalized,A.colorSpace),q=A.isVideoTexture!==!0,Ke=_e.__version===void 0||Q===!0,ve=le.dataReady;let Ve=T(A,ze);ke(n.TEXTURE_CUBE_MAP,A);let we;if(Ze){q&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,vt,ze.width,ze.height);for(let Te=0;Te<6;Te++){we=Ge[Te].mipmaps;for(let dt=0;dt<we.length;dt++){const ct=we[dt];A.format!==di?je!==null?q?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,ct.width,ct.height,je,ct.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,vt,ct.width,ct.height,0,ct.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,0,0,ct.width,ct.height,je,xt,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt,vt,ct.width,ct.height,0,je,xt,ct.data)}}}else{if(we=A.mipmaps,q&&Ke){we.length>0&&Ve++;const Te=qe(Ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,vt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ut){q?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ge[Te].width,Ge[Te].height,je,xt,Ge[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,vt,Ge[Te].width,Ge[Te].height,0,je,xt,Ge[Te].data);for(let dt=0;dt<we.length;dt++){const f=we[dt].image[Te].image;q?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,f.width,f.height,je,xt,f.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,vt,f.width,f.height,0,je,xt,f.data)}}else{q?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,je,xt,Ge[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,vt,je,xt,Ge[Te]);for(let dt=0;dt<we.length;dt++){const ct=we[dt];q?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,0,0,je,xt,ct.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,dt+1,vt,je,xt,ct.image[Te])}}}x(A)&&b(n.TEXTURE_CUBE_MAP),_e.__version=le.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Fe(N,A,J,Q,le,_e){const Ue=o.convert(J.format,J.colorSpace),ce=o.convert(J.type),xe=E(J.internalFormat,Ue,ce,J.normalized,J.colorSpace),Ze=i.get(A),ut=i.get(J);if(ut.__renderTarget=A,!Ze.__hasExternalTextures){const Ge=Math.max(1,A.width>>_e),ze=Math.max(1,A.height>>_e);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,_e,xe,Ge,ze,A.depth,0,Ue,ce,null):t.texImage2D(le,_e,xe,Ge,ze,0,Ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Xe(A)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,le,ut.__webglTexture,0,Ie(A)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,le,ut.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(N,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){const Q=A.depthTexture,le=Q&&Q.isDepthTexture?Q.type:null,_e=y(A.stencilBuffer,le),Ue=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(A)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(A),_e,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(A),_e,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,_e,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,N)}else{const Q=A.textures;for(let le=0;le<Q.length;le++){const _e=Q[le],Ue=o.convert(_e.format,_e.colorSpace),ce=o.convert(_e.type),xe=E(_e.internalFormat,Ue,ce,_e.normalized,_e.colorSpace);Xe(A)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie(A),xe,A.width,A.height):J?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie(A),xe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,xe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(N,A,J){const Q=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(A.depthTexture);if(le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q){if(le.__webglInit===void 0&&(le.__webglInit=!0,A.depthTexture.addEventListener("dispose",I)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ke(n.TEXTURE_CUBE_MAP,A.depthTexture);const Ze=o.convert(A.depthTexture.format),ut=o.convert(A.depthTexture.type);let Ge;A.depthTexture.format===fa?Ge=n.DEPTH_COMPONENT24:A.depthTexture.format===eo&&(Ge=n.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ge,A.width,A.height,0,Ze,ut,null)}}else ue(A.depthTexture,0);const _e=le.__webglTexture,Ue=Ie(A),ce=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+J:n.TEXTURE_2D,xe=A.depthTexture.format===eo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===fa)Xe(A)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ce,_e,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ce,_e,0);else if(A.depthTexture.format===eo)Xe(A)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ce,_e,0,Ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ce,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(N){const A=i.get(N),J=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const Q=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",le)};Q.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=Q}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let Q=0;Q<6;Q++)rt(A.__webglFramebuffer[Q],N,Q);else{const Q=N.texture.mipmaps;Q&&Q.length>0?rt(A.__webglFramebuffer[0],N,0):rt(A.__webglFramebuffer,N,0)}else if(J){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=n.createRenderbuffer(),Oe(A.__webglDepthbuffer[Q],N,!1);else{const le=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}else{const Q=N.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Oe(A.__webglDepthbuffer,N,!1);else{const le=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(N,A,J){const Q=i.get(N);A!==void 0&&Fe(Q.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&fe(N)}function Ce(N){const A=N.texture,J=i.get(N),Q=i.get(A);N.addEventListener("dispose",S);const le=N.textures,_e=N.isWebGLCubeRenderTarget===!0,Ue=le.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=A.version,s.memory.textures++),_e){J.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[ce]=[];for(let xe=0;xe<A.mipmaps.length;xe++)J.__webglFramebuffer[ce][xe]=n.createFramebuffer()}else J.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)J.__webglFramebuffer[ce]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let ce=0,xe=le.length;ce<xe;ce++){const Ze=i.get(le[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(N.samples>0&&Xe(N)===!1){J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ce=0;ce<le.length;ce++){const xe=le[ce];J.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const Ze=o.convert(xe.format,xe.colorSpace),ut=o.convert(xe.type),Ge=E(xe.internalFormat,Ze,ut,xe.normalized,xe.colorSpace,N.isXRRenderTarget===!0),ze=Ie(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ge,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,J.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ke(n.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)Fe(J.__webglFramebuffer[ce][xe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else Fe(J.__webglFramebuffer[ce],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(A)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ce=0,xe=le.length;ce<xe;ce++){const Ze=le[ce],ut=i.get(Ze);let Ge=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ge=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ge,ut.__webglTexture),ke(Ge,Ze),Fe(J.__webglFramebuffer,N,Ze,n.COLOR_ATTACHMENT0+ce,Ge,0),x(Ze)&&b(Ge)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ke(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)Fe(J.__webglFramebuffer[xe],N,A,n.COLOR_ATTACHMENT0,ce,xe);else Fe(J.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,ce,0);x(A)&&b(ce),t.unbindTexture()}N.depthBuffer&&fe(N)}function ge(N){const A=N.textures;for(let J=0,Q=A.length;J<Q;J++){const le=A[J];if(x(le)){const _e=w(N),Ue=i.get(le).__webglTexture;t.bindTexture(_e,Ue),b(_e),t.unbindTexture()}}}const Pe=[],ot=[];function ee(N){if(N.samples>0){if(Xe(N)===!1){const A=N.textures,J=N.width,Q=N.height;let le=n.COLOR_BUFFER_BIT;const _e=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(N),ce=A.length>1;if(ce)for(let Ze=0;Ze<A.length;Ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const xe=N.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ze]);const ut=i.get(A[Ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,J,Q,0,0,J,Q,le,n.NEAREST),l===!0&&(Pe.length=0,ot.length=0,Pe.push(n.COLOR_ATTACHMENT0+Ze),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Pe.push(_e),ot.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Ze=0;Ze<A.length;Ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ze]);const ut=i.get(A[Ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ie(N){return Math.min(a.maxSamples,N.samples)}function Xe(N){const A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function F(N){const A=s.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function P(N,A){const J=N.colorSpace,Q=N.format,le=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==fc&&J!==Pa&&(Dt.getTransfer(J)===Xt?(Q!==di||le!==zn)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",J)),A}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=Y,this.getTextureUnits=H,this.setTextureUnits=Z,this.setTexture2D=ue,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=ye,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PM(n,e){function t(i,a=Pa){let o;const s=Dt.getTransfer(a);if(i===zn)return n.UNSIGNED_BYTE;if(i===Jf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===kh)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===Yf)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===Vi)return n.HALF_FLOAT;if(i===Wh)return n.ALPHA;if(i===Xh)return n.RGB;if(i===di)return n.RGBA;if(i===fa)return n.DEPTH_COMPONENT;if(i===eo)return n.DEPTH_STENCIL;if(i===qh)return n.RED;if(i===Kf)return n.RED_INTEGER;if(i===ro)return n.RG;if(i===jf)return n.RG_INTEGER;if(i===Qf)return n.RGBA_INTEGER;if(i===ec||i===tc||i===nc||i===ic)if(s===Xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wl||i===Xl||i===ql||i===$l)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===Jl||i===Zl||i===Kl||i===jl||i===cc||i===Ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Yl||i===Jl)return s===Xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Zl)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kl)return o.COMPRESSED_R11_EAC;if(i===jl)return o.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return o.COMPRESSED_RG11_EAC;if(i===Ql)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ef||i===tf||i===nf||i===af||i===of||i===rf||i===sf||i===cf||i===lf||i===ff||i===uf||i===df||i===hf||i===pf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ef)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===af)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===of)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ff)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pf)return s===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mf||i===gf||i===xf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===mf)return s===Xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vf||i===Mf||i===lc||i===_f)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===vf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Mf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_f)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new sp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:IM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends uo{constructor(e,t){super();const i=this;let a=null,o=1,s=null,r="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",v=new NM,x={},b=t.getContextAttributes();let w=null,E=null;const y=[],T=[],I=new We;let S=null,R=null;const L=new li;L.viewport=new on;const O=new li;O.viewport=new on;const V=[L,O],Y=new V1;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=y[oe];return de===void 0&&(de=new Kc,y[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=y[oe];return de===void 0&&(de=new Kc,y[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=y[oe];return de===void 0&&(de=new Kc,y[oe]=de),de.getHandSpace()};function ae(oe){const de=T.indexOf(oe.inputSource);if(de===-1)return;const Le=y[de];Le!==void 0&&(Le.update(oe.inputSource,oe.frame,c||s),Le.dispatchEvent({type:oe.type,data:oe.inputSource}))}function k(){a.removeEventListener("select",ae),a.removeEventListener("selectstart",ae),a.removeEventListener("selectend",ae),a.removeEventListener("squeeze",ae),a.removeEventListener("squeezestart",ae),a.removeEventListener("squeezeend",ae),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",ue);for(let oe=0;oe<y.length;oe++){const de=T[oe];de!==null&&(T[oe]=null,y[oe].disconnect(de))}H=null,Z=null,v.reset();for(const oe in x)delete x[oe];if(e.setRenderTarget(w),p=null,d=null,h=null,a=null,E=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),R!==null){const oe=R.camera;oe.fov=R.fov,oe.zoom=R.zoom,oe.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){r=oe,i.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",ae),a.addEventListener("selectstart",ae),a.addEventListener("selectend",ae),a.addEventListener("squeeze",ae),a.addEventListener("squeezestart",ae),a.addEventListener("squeezeend",ae),a.addEventListener("end",k),a.addEventListener("inputsourceschange",ue),b.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Qe=null,Fe=null;b.depth&&(Fe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=b.stencil?eo:fa,Qe=b.stencil?Wr:ki);const Oe={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(Oe),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new hi(d.textureWidth,d.textureHeight,{format:di,type:zn,depthTexture:new nr(d.textureWidth,d.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(a,t,Le),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new hi(p.framebufferWidth,p.framebufferHeight,{format:di,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(r),st.setContext(a),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ue(oe){for(let de=0;de<oe.removed.length;de++){const Le=oe.removed[de],Qe=T.indexOf(Le);Qe>=0&&(T[Qe]=null,y[Qe].disconnect(Le))}for(let de=0;de<oe.added.length;de++){const Le=oe.added[de];let Qe=T.indexOf(Le);if(Qe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=T.length){T.push(Le),Qe=Oe;break}else if(T[Oe]===null){T[Oe]=Le,Qe=Oe;break}if(Qe===-1)break}const Fe=y[Qe];Fe&&Fe.connect(Le)}}const U=new z,X=new z;function j(oe,de,Le){U.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(Le.matrixWorld);const Qe=U.distanceTo(X),Fe=de.projectionMatrix.elements,Oe=Le.projectionMatrix.elements,rt=Fe[14]/(Fe[10]-1),fe=Fe[14]/(Fe[10]+1),ye=(Fe[9]+1)/Fe[5],Ce=(Fe[9]-1)/Fe[5],ge=(Fe[8]-1)/Fe[0],Pe=(Oe[8]+1)/Oe[0],ot=rt*ge,ee=rt*Pe,Ie=Qe/(-ge+Pe),Xe=Ie*-ge;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Xe),oe.translateZ(Ie),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const F=rt+Ie,P=fe+Ie,qe=ot-Xe,N=ee+(Qe-Xe),A=ye*fe/P*F,J=Ce*fe/P*F;oe.projectionMatrix.makePerspective(qe,N,A,J,F,P),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function be(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let de=oe.near,Le=oe.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Le=v.depthFar)),Y.near=O.near=L.near=de,Y.far=O.far=L.far=Le,(H!==Y.near||Z!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),H=Y.near,Z=Y.far),Y.layers.mask=oe.layers.mask|6,L.layers.mask=Y.layers.mask&-5,O.layers.mask=Y.layers.mask&-3;const Qe=oe.parent,Fe=Y.cameras;be(Y,Qe);for(let Oe=0;Oe<Fe.length;Oe++)be(Fe[Oe],Qe);Fe.length===2?j(Y,L,O):Y.projectionMatrix.copy(L.projectionMatrix),R===null&&oe.isPerspectiveCamera&&(R={camera:oe,fov:oe.fov,zoom:oe.zoom}),Ee(oe,Y,Qe)};function Ee(oe,de,Le){Le===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(Le.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=$r*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(oe){return x[oe]};let $e=null;function ke(oe,de){if(u=de.getViewerPose(c||s),m=de,u!==null){const Le=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Qe=!1;Le.length!==Y.cameras.length&&(Y.cameras.length=0,Qe=!0);for(let fe=0;fe<Le.length;fe++){const ye=Le[fe];let Ce=null;if(p!==null)Ce=p.getViewport(ye);else{const Pe=h.getViewSubImage(d,ye);Ce=Pe.viewport,fe===0&&(e.setRenderTargetTextures(E,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(E))}let ge=V[fe];ge===void 0&&(ge=new li,ge.layers.enable(fe),ge.viewport=new on,V[fe]=ge),ge.matrix.fromArray(ye.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ye.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),fe===0&&(Y.matrix.copy(ge.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Qe===!0&&Y.cameras.push(ge)}const Fe=a.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const fe=h.getDepthInformation(Le[0]);fe&&fe.isValid&&fe.texture&&v.init(fe,a.renderState)}if(Fe&&Fe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<Le.length;fe++){const ye=Le[fe].camera;if(ye){let Ce=x[ye];Ce||(Ce=new sp,x[ye]=Ce);const ge=h.getCameraImage(ye);Ce.sourceTexture=ge}}}}for(let Le=0;Le<y.length;Le++){const Qe=T[Le],Fe=y[Le];Qe!==null&&Fe!==void 0&&Fe.update(Qe,de,c||s)}$e&&$e(oe,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),m=null}const st=new Mp;st.setAnimationLoop(ke),this.setAnimationLoop=function(oe){$e=oe},this.dispose=function(){}}}const UM=new Qt,Tp=new Tt;Tp.set(-1,0,0,0,1,0,0,0,1);function OM(n,e){function t(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function i(v,x){x.color.getRGB(v.fogColor.value,gp(n)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function a(v,x,b,w,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?o(v,x):x.isMeshLambertMaterial?(o(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(o(v,x),h(v,x)):x.isMeshPhongMaterial?(o(v,x),u(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(o(v,x),d(v,x),x.isMeshPhysicalMaterial&&p(v,x,E)):x.isMeshMatcapMaterial?(o(v,x),m(v,x)):x.isMeshDepthMaterial?o(v,x):x.isMeshDistanceMaterial?(o(v,x),_(v,x)):x.isMeshNormalMaterial?o(v,x):x.isLineBasicMaterial?(s(v,x),x.isLineDashedMaterial&&r(v,x)):x.isPointsMaterial?l(v,x,b,w):x.isSpriteMaterial?c(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,t(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===kn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,t(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===kn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,t(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,t(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const b=e.get(x),w=b.envMap,E=b.envMapRotation;w&&(v.envMap.value=w,v.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Tp),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,v.aoMapTransform))}function s(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform))}function r(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function l(v,x,b,w){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*b,v.scale.value=w*.5,x.map&&(v.map.value=x.map,t(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,t(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,t(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function u(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function h(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function d(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function p(v,x,b){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.retroreflectivity>0&&(v.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,x){x.matcap&&(v.matcap.value=x.matcap)}function _(v,x){const b=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function FM(n,e,t,i){let a={},o={},s=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const T=y.program;i.uniformBlockBinding(E,T)}function c(E,y){let T=a[E.id];T===void 0&&(v(E),T=u(E),a[E.id]=T,E.addEventListener("dispose",b));const I=y.program;i.updateUBOMapping(E,I);const S=e.render.frame;o[E.id]!==S&&(d(E),o[E.id]=S)}function u(E){const y=h();E.__bindingPointIndex=y;const T=n.createBuffer(),I=E.__size,S=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function h(){for(let E=0;E<r;E++)if(s.indexOf(E)===-1)return s.push(E),E;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=a[E.id],T=E.uniforms,I=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,R=T.length;S<R;S++){const L=T[S];if(Array.isArray(L))for(let O=0,V=L.length;O<V;O++)p(L[O],S,O,I);else p(L,S,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,y,T,I){if(_(E,y,T,I)===!0){const S=E.__offset,R=E.value;if(Array.isArray(R)){let L=0;for(let O=0;O<R.length;O++){const V=R[O],Y=x(V);m(V,E.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,E.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,E.__data)}}function m(E,y,T){typeof E=="number"||typeof E=="boolean"?y[0]=E:E.isMatrix3?(y[0]=E.elements[0],y[1]=E.elements[1],y[2]=E.elements[2],y[3]=0,y[4]=E.elements[3],y[5]=E.elements[4],y[6]=E.elements[5],y[7]=0,y[8]=E.elements[6],y[9]=E.elements[7],y[10]=E.elements[8],y[11]=0):ArrayBuffer.isView(E)?y.set(new E.constructor(E.buffer,E.byteOffset,y.length)):E.toArray(y,T)}function _(E,y,T,I){const S=E.value,R=y+"_"+T;if(I[R]===void 0)return typeof S=="number"||typeof S=="boolean"?I[R]=S:ArrayBuffer.isView(S)?I[R]=S.slice():I[R]=S.clone(),!0;{const L=I[R];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return I[R]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function v(E){const y=E.uniforms;let T=0;const I=16;for(let R=0,L=y.length;R<L;R++){const O=Array.isArray(y[R])?y[R]:[y[R]];for(let V=0,Y=O.length;V<Y;V++){const H=O[V],Z=Array.isArray(H.value)?H.value:[H.value];for(let ae=0,k=Z.length;ae<k;ae++){const ue=Z[ae],U=x(ue),X=T%I,j=X%U.boundary,be=X+j;T+=j,be!==0&&I-be<U.storage&&(T+=I-be),H.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=U.storage}}}const S=T%I;return S>0&&(T+=I-S),E.__size=T,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(y.boundary=16,y.storage=E.byteLength):St("WebGLRenderer: Unsupported uniform value type.",E),y}function b(E){const y=E.target;y.removeEventListener("dispose",b);const T=s.indexOf(y.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[y.id]),delete a[y.id],delete o[y.id]}function w(){for(const E in a)n.deleteBuffer(a[E]);s=[],a={},o={}}return{bind:l,update:c,dispose:w}}const BM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function zM(){return Li===null&&(Li=new ap(BM,16,16,ro,Vi),Li.name="DFG_LUT",Li.minFilter=Tn,Li.magFilter=Tn,Li.wrapS=aa,Li.wrapT=aa,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class GM{constructor(e={}){const{canvas:t=im(),context:i=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const _=p,v=new Set([Qf,jf,Kf]),x=new Set([zn,ki,Hr,Wr,Jf,Zf]),b=new Uint32Array(4),w=new Int32Array(4),E=new z;let y=null,T=null;const I=[],S=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1,V=null,Y=null,H=null,Z=null;this._outputColorSpace=qn;let ae=0,k=0,ue=null,U=-1,X=null;const j=new on,be=new on;let Ee=null;const $e=new yt(0);let ke=0,st=t.width,oe=t.height,de=1,Le=null,Qe=null;const Fe=new on(0,0,st,oe),Oe=new on(0,0,st,oe);let rt=!1;const fe=new ou;let ye=!1,Ce=!1;const ge=new Qt,Pe=new z,ot=new on,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Xe(){return ue===null?de:1}let F=i;function P(C,$){return t.getContext(C,$)}let qe,N,A,J,Q,le,_e,Ue,ce,xe,Ze,ut,Ge,ze,je,xt,vt,q,Ke,ve,Ve,we,Te;try{const C={alpha:!0,depth:a,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$f}`),t.addEventListener("webglcontextlost",f,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",At,!1),F===null){const $="webgl2";if(F=P($,C),F===null)throw P($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(C){throw t.removeEventListener("webglcontextlost",f,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Ut("WebGLRenderer: "+C.message),C}function dt(){qe=new zv(F),qe.init(),Ve=new PM(F,qe),N=new Cv(F,qe,e,Ve),A=new RM(F,qe),N.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),Y=F.createFramebuffer(),H=F.createFramebuffer(),Z=F.createFramebuffer(),J=new Vv(F),Q=new pM,le=new CM(F,qe,A,Q,N,Ve,J),_e=new Bv(L),Ue=new W1(F),we=new wv(F,Ue),ce=new Gv(F,Ue,J,we),xe=new Wv(F,ce,Ue,we,J),q=new Hv(F,N,le),je=new Pv(Q),Ze=new hM(L,_e,qe,N,we,je),ut=new OM(L,Q),Ge=new gM,ze=new yM(qe),vt=new Tv(L,_e,A,xe,m,l),xt=new wM(L,xe,N),Te=new FM(F,J,N,A),Ke=new Rv(F,qe,J),ve=new kv(F,qe,J),J.programs=Ze.programs,L.capabilities=N,L.extensions=qe,L.properties=Q,L.renderLists=Ge,L.shadowMap=xt,L.state=A,L.info=J}_!==zn&&(R=new qv(_,t.width,t.height,r,a,o));const ct=new DM(L,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(st,oe,!1))},this.getSize=function(C){return C.set(st,oe)},this.setSize=function(C,$,se=!0){if(ct.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}st=C,oe=$,t.width=Math.floor(C*de),t.height=Math.floor($*de),se===!0&&(t.style.width=C+"px",t.style.height=$+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(st*de,oe*de).floor()},this.setDrawingBufferSize=function(C,$,se){st=C,oe=$,de=se,t.width=Math.floor(C*se),t.height=Math.floor($*se),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(_===zn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(Fe)},this.setViewport=function(C,$,se,te){C.isVector4?Fe.set(C.x,C.y,C.z,C.w):Fe.set(C,$,se,te),A.viewport(j.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,$,se,te){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,$,se,te),A.scissor(be.copy(Oe).multiplyScalar(de).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){A.setScissorTest(rt=C)},this.setOpaqueSort=function(C){Le=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,se=!0){let te=0;if(C){let ne=!1;if(ue!==null){const tt=ue.texture.format;ne=v.has(tt)}if(ne){const tt=ue.texture.type,it=x.has(tt),et=vt.getClearColor(),lt=vt.getClearAlpha(),pt=et.r,Rt=et.g,Pt=et.b;it?(b[0]=pt,b[1]=Rt,b[2]=Pt,b[3]=lt,F.clearBufferuiv(F.COLOR,0,b)):(w[0]=pt,w[1]=Rt,w[2]=Pt,w[3]=lt,F.clearBufferiv(F.COLOR,0,w))}else te|=F.COLOR_BUFFER_BIT}$&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",f,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),vt.dispose(),Ge.dispose(),ze.dispose(),Q.dispose(),_e.dispose(),xe.dispose(),we.dispose(),Te.dispose(),Ze.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",fs),ct.removeEventListener("sessionend",Xi),qi.stop()};function f(C){C.preventDefault(),dc("WebGLRenderer: Context Lost."),O=!0}function bt(){dc("WebGLRenderer: Context Restored."),O=!1;const C=J.autoReset,$=xt.enabled,se=xt.autoUpdate,te=xt.needsUpdate,ne=xt.type;dt(),J.autoReset=C,xt.enabled=$,xt.autoUpdate=se,xt.needsUpdate=te,xt.type=ne}function At(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ai(C){const $=C.target;$.removeEventListener("dispose",ai),oi($)}function oi(C){mo(C),Q.remove(C)}function mo(C){const $=Q.get(C).programs;$!==void 0&&($.forEach(function(se){Ze.releaseProgram(se)}),C.isShaderMaterial&&Ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,se,te,ne,tt){$===null&&($=ee);const it=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,et=Dc(C,$,se,te,ne);A.setMaterial(te,it);let lt=se.index,pt=1;if(te.wireframe===!0){if(lt=ce.getWireframeAttribute(se),lt===void 0)return;pt=2}const Rt=se.drawRange,Pt=se.attributes.position;let ft=Rt.start*pt,Ft=(Rt.start+Rt.count)*pt;tt!==null&&(ft=Math.max(ft,tt.start*pt),Ft=Math.min(Ft,(tt.start+tt.count)*pt)),lt!==null?(ft=Math.max(ft,0),Ft=Math.min(Ft,lt.count)):Pt!=null&&(ft=Math.max(ft,0),Ft=Math.min(Ft,Pt.count));const sn=Ft-ft;if(sn<0||sn===1/0)return;we.setup(ne,te,et,se,lt);let Jt,Ht=Ke;if(lt!==null&&(Jt=Ue.get(lt),Ht=ve,Ht.setIndex(Jt)),ne.isMesh)te.wireframe===!0?(A.setLineWidth(te.wireframeLinewidth*Xe()),Ht.setMode(F.LINES)):Ht.setMode(F.TRIANGLES);else if(ne.isLine){let Sn=te.linewidth;Sn===void 0&&(Sn=1),A.setLineWidth(Sn*Xe()),ne.isLineSegments?Ht.setMode(F.LINES):ne.isLineLoop?Ht.setMode(F.LINE_LOOP):Ht.setMode(F.LINE_STRIP)}else ne.isPoints?Ht.setMode(F.POINTS):ne.isSprite&&Ht.setMode(F.TRIANGLES);if(ne.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Sn=ne._multiDrawStarts,at=ne._multiDrawCounts,En=ne._multiDrawCount,Lt=lt?Ue.get(lt).bytesPerElement:1,Vn=Q.get(te).currentProgram.getUniforms();for(let ri=0;ri<En;ri++)Vn.setValue(F,"_gl_DrawID",ri),Ht.render(Sn[ri]/Lt,at[ri])}else if(ne.isInstancedMesh)Ht.renderInstances(ft,sn,ne.count);else if(se.isInstancedBufferGeometry){const Sn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,at=Math.min(se.instanceCount,Sn);Ht.renderInstances(ft,sn,at)}else Ht.render(ft,sn)};function Zn(C,$,se,te){V!==null&&C.isNodeMaterial&&V.setObject(te,C),ye===!0&&je.setState(C,se,!1),C.transparent===!0&&C.side===fi&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,_o(C,$,te),C.side=ao,C.needsUpdate=!0,_o(C,$,te),C.side=fi):_o(C,$,te)}this.compile=function(C,$,se=null){se===null&&(se=C),V!==null&&V.renderStart(C,$,se),T=ze.get(se),T.init($),S.push(T),se.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(T.pushLight(ne),ne.castShadow&&T.pushShadow(ne))}),C!==se&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(T.pushLight(ne),ne.castShadow&&T.pushShadow(ne))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Ce=this.localClippingEnabled,ye=je.init(this.clippingPlanes,Ce),ye===!0&&je.setGlobalState(this.clippingPlanes,$),V!==null&&xt.render(T.state.shadowsArray,se,$);const te=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const tt=ne.material;if(tt)if(Array.isArray(tt))for(let it=0;it<tt.length;it++){const et=tt[it];Zn(et,se,$,ne),te.add(et)}else Zn(tt,se,$,ne),te.add(tt)}),T=S.pop(),V!==null&&V.renderEnd(),te},this.compileAsync=function(C,$,se=null){const te=this.compile(C,$,se);return new Promise(ne=>{function tt(){if(te.forEach(function(it){const lt=Q.get(it).currentProgram;(lt===void 0||lt.isReady())&&te.delete(it)}),te.size===0){ne(C);return}setTimeout(tt,10)}qe.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let fr=null;function Va(C){fr&&fr(C)}function fs(){qi.stop()}function Xi(){qi.start()}const qi=new Mp;qi.setAnimationLoop(Va),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(C){fr=C,ct.setAnimationLoop(C),C===null?qi.stop():qi.start()},ct.addEventListener("sessionstart",fs),ct.addEventListener("sessionend",Xi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(C,$);const se=ct.enabled===!0&&ct.isPresenting===!0,te=R!==null&&(ue===null||se)&&R.begin(L,ue);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera($),$=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,$,ue),T=ze.get(C,S.length),T.init($),T.state.textureUnits=le.getTextureUnits(),S.push(T),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),fe.setFromProjectionMatrix(ge,Bi,$.reversedDepth),Ce=this.localClippingEnabled,ye=je.init(this.clippingPlanes,Ce),y=Ge.get(C,I.length),y.init(),I.push(y),ct.enabled===!0&&ct.isPresenting===!0){const it=L.xr.getDepthSensingMesh();it!==null&&go(it,$,-1/0,L.sortObjects)}go(C,$,0,L.sortObjects),y.finish(),V!==null&&V.updateLights(T.state.lightsArray),L.sortObjects===!0&&y.sort(Le,Qe),Ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ie&&vt.addToRenderList(y,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&je.beginShadows();const ne=T.state.shadowsArray;if(xt.render(ne,C,$),ye===!0&&je.endShadows(),(te&&R.hasRenderPass())===!1){const it=y.opaque,et=y.transmissive;if(T.setupLights(),$.isArrayCamera){const lt=$.cameras;if(et.length>0)for(let pt=0,Rt=lt.length;pt<Rt;pt++){const Pt=lt[pt];vo(it,et,C,Pt)}Ie&&vt.render(C);for(let pt=0,Rt=lt.length;pt<Rt;pt++){const Pt=lt[pt];xo(y,C,Pt,Pt.viewport)}}else et.length>0&&vo(it,et,C,$),Ie&&vt.render(C),xo(y,C,$)}ue!==null&&k===0&&(le.updateMultisampleRenderTarget(ue),le.updateRenderTargetMipmap(ue)),te&&R.end(L),C.isScene===!0&&C.onAfterRender(L,C,$),we.resetDefaultState(),U=-1,X=null,S.pop(),S.length>0?(T=S[S.length-1],le.setTextureUnits(T.state.textureUnits),ye===!0&&je.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?y=I[I.length-1]:y=null,V!==null&&V.renderEnd()};function go(C,$,se,te){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(fe)){te&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const it=xe.update(C),et=C.material;et.visible&&y.push(C,it,et,se,ot.z,null,$)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(fe))){const it=xe.update(C),et=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),ot.copy(it.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(et)){const lt=it.groups;for(let pt=0,Rt=lt.length;pt<Rt;pt++){const Pt=lt[pt],ft=et[Pt.materialIndex];ft&&ft.visible&&y.push(C,it,ft,se,ot.z,Pt,$)}}else et.visible&&y.push(C,it,et,se,ot.z,null,$)}}const tt=C.children;for(let it=0,et=tt.length;it<et;it++)go(tt[it],$,se,te)}function xo(C,$,se,te){const{opaque:ne,transmissive:tt,transparent:it}=C;T.setupLightsView(se),ye===!0&&je.setGlobalState(L.clippingPlanes,se),te&&A.viewport(j.copy(te)),ne.length>0&&Ri(ne,$,se),tt.length>0&&Ri(tt,$,se),it.length>0&&Ri(it,$,se),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function vo(C,$,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[te.id]===void 0){const ft=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[te.id]=new hi(1,1,{generateMipmaps:!0,type:ft?Vi:zn,minFilter:Qa,samples:Math.max(4,N.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const tt=T.state.transmissionRenderTarget[te.id],it=te.viewport||j;tt.setSize(it.z*L.transmissionResolutionScale,it.w*L.transmissionResolutionScale);const et=L.getRenderTarget(),lt=L.getActiveCubeFace(),pt=L.getActiveMipmapLevel();L.setRenderTarget(tt),L.getClearColor($e),ke=L.getClearAlpha(),ke<1&&L.setClearColor(16777215,.5),L.clear(),Ie&&vt.render(se);const Rt=L.toneMapping;L.toneMapping=zi;const Pt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),T.setupLightsView(te),ye===!0&&je.setGlobalState(L.clippingPlanes,te),Ri(C,se,te),le.updateMultisampleRenderTarget(tt),le.updateRenderTargetMipmap(tt),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Ft=0,sn=$.length;Ft<sn;Ft++){const Jt=$[Ft],{object:Ht,geometry:Sn,material:at,group:En}=Jt;if(at.side===fi&&Ht.layers.test(te.layers)){const Lt=at.side;at.side=kn,at.needsUpdate=!0,Mo(Ht,se,te,Sn,at,En),at.side=Lt,at.needsUpdate=!0,ft=!0}}ft===!0&&(le.updateMultisampleRenderTarget(tt),le.updateRenderTargetMipmap(tt))}L.setRenderTarget(et,lt,pt),L.setClearColor($e,ke),Pt!==void 0&&(te.viewport=Pt),L.toneMapping=Rt}function Ri(C,$,se){const te=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,tt=C.length;ne<tt;ne++){const it=C[ne],{object:et,geometry:lt,group:pt}=it;let Rt=it.material;Rt.allowOverride===!0&&te!==null&&(Rt=te),et.layers.test(se.layers)&&Mo(et,$,se,lt,Rt,pt)}}function Mo(C,$,se,te,ne,tt){V!==null&&ne.isNodeMaterial&&V.setObject(C,ne),C.onBeforeRender(L,$,se,te,ne,tt),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(L,$,se,te,C,tt),ne.transparent===!0&&ne.side===fi&&ne.forceSinglePass===!1?(ne.side=kn,ne.needsUpdate=!0,L.renderBufferDirect(se,$,te,ne,C,tt),ne.side=ao,ne.needsUpdate=!0,L.renderBufferDirect(se,$,te,ne,C,tt),ne.side=fi):L.renderBufferDirect(se,$,te,ne,C,tt),C.onAfterRender(L,$,se,te,ne,tt)}function _o(C,$,se){$.isScene!==!0&&($=ee);const te=Q.get(C),ne=T.state.lights,tt=T.state.shadowsArray,it=ne.state.version,et=Ze.getParameters(C,ne.state,tt,$,se,T.state.lightProbeGridArray),lt=Ze.getProgramCacheKey(et);let pt=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,te.fog=$.fog;const Rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=_e.get(C.envMap||te.environment,Rt),te.envMapRotation=te.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,pt===void 0&&(C.addEventListener("dispose",ai),pt=new Map,te.programs=pt);let Pt=pt.get(lt);if(Pt!==void 0){if(te.currentProgram===Pt&&te.lightsStateVersion===it)return jt(C,et),Pt}else et.uniforms=Ze.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,se,et),C.onBeforeCompile(et,L),Pt=Ze.acquireProgram(et,lt),pt.set(lt,Pt),te.uniforms=et.uniforms;const ft=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ft.clippingPlanes=je.uniform),jt(C,et),te.needsLights=Oc(C),te.lightsStateVersion=it,te.needsLights&&(ft.ambientLightColor.value=ne.state.ambient,ft.lightProbe.value=ne.state.probe,ft.sunLights.value=ne.state.sun,ft.sunLightShadows.value=ne.state.sunShadow,ft.directionalLights.value=ne.state.directional,ft.directionalLightShadows.value=ne.state.directionalShadow,ft.spotLights.value=ne.state.spot,ft.spotLightShadows.value=ne.state.spotShadow,ft.rectAreaLights.value=ne.state.rectArea,ft.ltc_1.value=ne.state.rectAreaLTC1,ft.ltc_2.value=ne.state.rectAreaLTC2,ft.pointLights.value=ne.state.point,ft.pointLightShadows.value=ne.state.pointShadow,ft.hemisphereLights.value=ne.state.hemi,ft.sunShadowMatrix.value=ne.state.sunShadowMatrix,ft.sunShadowCascade.value=ne.state.sunShadowCascade,ft.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ft.spotLightMatrix.value=ne.state.spotLightMatrix,ft.spotLightMap.value=ne.state.spotLightMap,ft.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=T.state.lightProbeGridArray.length>0,te.currentProgram=Pt,te.uniformsList=null,Pt}function us(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=ac.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function jt(C,$){const se=Q.get(C);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function fn(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;E.setFromMatrixPosition($.matrixWorld);for(let se=0,te=C.length;se<te;se++){const ne=C[se];if(ne.texture!==null&&ne.boundingBox.containsPoint(E))return ne}return null}function Dc(C,$,se,te,ne){$.isScene!==!0&&($=ee),le.resetTextureUnits();const tt=$.fog,it=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?$.environment:null,et=ue===null?L.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Dt.workingColorSpace,lt=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,pt=_e.get(te.envMap||it,lt),Rt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Pt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ft=!!se.morphAttributes.position,Ft=!!se.morphAttributes.normal,sn=!!se.morphAttributes.color;let Jt=zi;te.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Jt=L.toneMapping);const Ht=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Sn=Ht!==void 0?Ht.length:0,at=Q.get(te),En=T.state.lights;if(ye===!0&&(Ce===!0||C!==X)){const Wt=C===X&&te.id===U;je.setState(te,C,Wt)}let Lt=!1;te.version===at.__version?(at.needsLights&&at.lightsStateVersion!==En.state.version||at.outputColorSpace!==et||ne.isBatchedMesh&&at.batching===!1||!ne.isBatchedMesh&&at.batching===!0||ne.isBatchedMesh&&at.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&at.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&at.instancing===!1||!ne.isInstancedMesh&&at.instancing===!0||ne.isSkinnedMesh&&at.skinning===!1||!ne.isSkinnedMesh&&at.skinning===!0||ne.isInstancedMesh&&at.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&at.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&at.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&at.instancingMorph===!1&&ne.morphTexture!==null||at.envMap!==pt||te.fog===!0&&at.fog!==tt||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==je.numPlanes||at.numIntersection!==je.numIntersection)||at.vertexAlphas!==Rt||at.vertexTangents!==Pt||at.morphTargets!==ft||at.morphNormals!==Ft||at.morphColors!==sn||at.toneMapping!==Jt||at.morphTargetsCount!==Sn||!!at.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,at.__version=te.version);let Vn=at.currentProgram;Lt===!0&&(Vn=_o(te,$,ne),V&&te.isNodeMaterial&&V.onUpdateProgram(te,Vn,at));let ri=!1,Ci=!1,ha=!1;const Gt=Vn.getUniforms(),en=at.uniforms;if(A.useProgram(Vn.program)&&(ri=!0,Ci=!0,ha=!0),te.id!==U&&(U=te.id,Ci=!0),at.needsLights){const Wt=fn(T.state.lightProbeGridArray,ne);at.lightProbeGrid!==Wt&&(at.lightProbeGrid=Wt,Ci=!0)}if(ri||X!==C){A.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(F,"projectionMatrix",C.projectionMatrix),Gt.setValue(F,"viewMatrix",C.matrixWorldInverse);const Pi=Gt.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,Pe.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Gt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Gt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,Ci=!0,ha=!0)}if(at.needsLights&&(En.state.sunShadowMap.length>0&&Gt.setValue(F,"sunShadowMap",En.state.sunShadowMap,le),En.state.directionalShadowMap.length>0&&Gt.setValue(F,"directionalShadowMap",En.state.directionalShadowMap,le),En.state.spotShadowMap.length>0&&Gt.setValue(F,"spotShadowMap",En.state.spotShadowMap,le),En.state.pointShadowMap.length>0&&Gt.setValue(F,"pointShadowMap",En.state.pointShadowMap,le)),ne.isSkinnedMesh){Gt.setOptional(F,ne,"bindMatrix"),Gt.setOptional(F,ne,"bindMatrixInverse");const Wt=ne.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Gt.setValue(F,"boneTexture",Wt.boneTexture,le))}ne.isBatchedMesh&&(Gt.setOptional(F,ne,"batchingTexture"),Gt.setValue(F,"batchingTexture",ne._matricesTexture,le),Gt.setOptional(F,ne,"batchingIdTexture"),Gt.setValue(F,"batchingIdTexture",ne._indirectTexture,le),Gt.setOptional(F,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Gt.setValue(F,"batchingColorTexture",ne._colorsTexture,le));const mi=se.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&q.update(ne,se,Vn),(Ci||at.receiveShadow!==ne.receiveShadow)&&(at.receiveShadow=ne.receiveShadow,Gt.setValue(F,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&$.environment!==null&&(en.envMapIntensity.value=$.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=zM()),Ci){if(Gt.setValue(F,"toneMappingExposure",L.toneMappingExposure),at.needsLights&&Uc(en,ha),tt&&te.fog===!0&&ut.refreshFogUniforms(en,tt),ut.refreshMaterialUniforms(en,te,de,oe,T.state.transmissionRenderTarget[C.id]),at.needsLights&&at.lightProbeGrid){const Wt=at.lightProbeGrid;en.probesSH.value=Wt.texture,en.probesMin.value.copy(Wt.boundingBox.min),en.probesMax.value.copy(Wt.boundingBox.max),en.probesResolution.value.copy(Wt.resolution)}ac.upload(F,us(at),en,le)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ac.upload(F,us(at),en,le),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Gt.setValue(F,"center",ne.center),Gt.setValue(F,"modelViewMatrix",ne.modelViewMatrix),Gt.setValue(F,"normalMatrix",ne.normalMatrix),Gt.setValue(F,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Wt=te.uniformsGroups;for(let Pi=0,pa=Wt.length;Pi<pa;Pi++){const ds=Wt[Pi];Te.update(ds,Vn),Te.bind(ds,Vn)}}return Vn}function Uc(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.sunLights.needsUpdate=$,C.sunLightShadows.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Oc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(C,$,se){const te=Q.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Q.get(C.texture).__webglTexture=$,Q.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const se=Q.get(C);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,se=0){ue=C,ae=$,k=se;let te=null,ne=!1,tt=!1;if(C){const et=Q.get(C);if(et.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(F.FRAMEBUFFER,et.__webglFramebuffer),j.copy(C.viewport),be.copy(C.scissor),Ee=C.scissorTest,A.viewport(j),A.scissor(be),A.setScissorTest(Ee),U=-1;return}else if(et.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(et.__hasExternalTextures)le.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Rt=C.depthTexture;if(et.__boundDepthTexture!==Rt){if(Rt!==null&&Q.has(Rt)&&(C.width!==Rt.image.width||C.height!==Rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(tt=!0);const pt=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(pt[$])?te=pt[$][se]:te=pt[$],ne=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?te=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(pt)?te=pt[se]:te=pt,j.copy(C.viewport),be.copy(C.scissor),Ee=C.scissorTest}else j.copy(Fe).multiplyScalar(de).floor(),be.copy(Oe).multiplyScalar(de).floor(),Ee=rt;if(se!==0&&(te=Y),A.bindFramebuffer(F.FRAMEBUFFER,te)&&A.drawBuffers(C,te),A.viewport(j),A.scissor(be),A.setScissorTest(Ee),ne){const et=Q.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+$,et.__webglTexture,se)}else if(tt){const et=$;for(let lt=0;lt<C.textures.length;lt++){const pt=Q.get(C.textures[lt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+lt,pt.__webglTexture,se,et)}}else if(C!==null&&se!==0){const et=Q.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,et.__webglTexture,se)}U=-1};function Ha(C){const $=Q.get(C);return($.__readFormat!==C.format||$.__readType!==C.type)&&($.__readFormat=C.format,$.__readType=C.type,$.__formatReadable=N.textureFormatReadable(C.format),$.__typeReadable=N.textureTypeReadable(C.type)),$}this.readRenderTargetPixels=function(C,$,se,te,ne,tt,it,et=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(lt=lt[it]),lt){A.bindFramebuffer(F.FRAMEBUFFER,lt);try{const pt=C.textures[et],Rt=pt.format,Pt=pt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+et);const ft=Ha(pt);if(ft.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ft.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-te&&se>=0&&se<=C.height-ne&&F.readPixels($,se,te,ne,Ve.convert(Rt),Ve.convert(Pt),tt)}finally{const pt=ue!==null?Q.get(ue).__webglFramebuffer:null;A.bindFramebuffer(F.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(C,$,se,te,ne,tt,it,et=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&it!==void 0&&(lt=lt[it]),lt)if($>=0&&$<=C.width-te&&se>=0&&se<=C.height-ne){A.bindFramebuffer(F.FRAMEBUFFER,lt);const pt=C.textures[et],Rt=pt.format,Pt=pt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+et);const ft=Ha(pt);if(ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.bufferData(F.PIXEL_PACK_BUFFER,tt.byteLength,F.STREAM_READ),F.readPixels($,se,te,ne,Ve.convert(Rt),Ve.convert(Pt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const sn=ue!==null?Q.get(ue).__webglFramebuffer:null;A.bindFramebuffer(F.FRAMEBUFFER,sn);const Jt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await am(F,Jt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ft),F.deleteSync(Jt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,se=0){const te=Math.pow(2,-se),ne=Math.floor(C.image.width*te),tt=Math.floor(C.image.height*te),it=$!==null?$.x:0,et=$!==null?$.y:0;le.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,it,et,ne,tt),A.unbindTexture()},this.copyTextureToTexture=function(C,$,se=null,te=null,ne=0,tt=0){let it,et,lt,pt,Rt,Pt,ft,Ft,sn;const Jt=C.isCompressedTexture?C.mipmaps[tt]:C.image;if(se!==null)it=se.max.x-se.min.x,et=se.max.y-se.min.y,lt=se.isBox3?se.max.z-se.min.z:1,pt=se.min.x,Rt=se.min.y,Pt=se.isBox3?se.min.z:0;else{const en=Math.pow(2,-ne);it=Math.floor(Jt.width*en),et=Math.floor(Jt.height*en),C.isDataArrayTexture?lt=Jt.depth:C.isData3DTexture?lt=Math.floor(Jt.depth*en):lt=1,pt=0,Rt=0,Pt=0}te!==null?(ft=te.x,Ft=te.y,sn=te.z):(ft=0,Ft=0,sn=0);const Ht=Ve.convert($.format),Sn=Ve.convert($.type);let at;$.isData3DTexture?(le.setTexture3D($,0),at=F.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(le.setTexture2DArray($,0),at=F.TEXTURE_2D_ARRAY):(le.setTexture2D($,0),at=F.TEXTURE_2D),A.activeTexture(F.TEXTURE0),A.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(F.UNPACK_ALIGNMENT,$.unpackAlignment);const En=A.getParameter(F.UNPACK_ROW_LENGTH),Lt=A.getParameter(F.UNPACK_IMAGE_HEIGHT),Vn=A.getParameter(F.UNPACK_SKIP_PIXELS),ri=A.getParameter(F.UNPACK_SKIP_ROWS),Ci=A.getParameter(F.UNPACK_SKIP_IMAGES);A.pixelStorei(F.UNPACK_ROW_LENGTH,Jt.width),A.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt.height),A.pixelStorei(F.UNPACK_SKIP_PIXELS,pt),A.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),A.pixelStorei(F.UNPACK_SKIP_IMAGES,Pt);const ha=C.isDataArrayTexture||C.isData3DTexture,Gt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const en=Q.get(C),mi=Q.get($),Wt=Q.get(en.__renderTarget),Pi=Q.get(mi.__renderTarget);A.bindFramebuffer(F.READ_FRAMEBUFFER,Wt.__webglFramebuffer),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let pa=0;pa<lt;pa++)ha&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,ne,Pt+pa),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get($).__webglTexture,tt,sn+pa)),F.blitFramebuffer(pt,Rt,it,et,ft,Ft,it,et,F.DEPTH_BUFFER_BIT,F.NEAREST);A.bindFramebuffer(F.READ_FRAMEBUFFER,null),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||Q.has(C)){const en=Q.get(C),mi=Q.get($);A.bindFramebuffer(F.READ_FRAMEBUFFER,H),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,Z);for(let Wt=0;Wt<lt;Wt++)ha?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,en.__webglTexture,ne,Pt+Wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,en.__webglTexture,ne),Gt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mi.__webglTexture,tt,sn+Wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mi.__webglTexture,tt),ne!==0?F.blitFramebuffer(pt,Rt,it,et,ft,Ft,it,et,F.COLOR_BUFFER_BIT,F.NEAREST):Gt?F.copyTexSubImage3D(at,tt,ft,Ft,sn+Wt,pt,Rt,it,et):F.copyTexSubImage2D(at,tt,ft,Ft,pt,Rt,it,et);A.bindFramebuffer(F.READ_FRAMEBUFFER,null),A.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Gt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(at,tt,ft,Ft,sn,it,et,lt,Ht,Sn,Jt.data):$.isCompressedArrayTexture?F.compressedTexSubImage3D(at,tt,ft,Ft,sn,it,et,lt,Ht,Jt.data):F.texSubImage3D(at,tt,ft,Ft,sn,it,et,lt,Ht,Sn,Jt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,tt,ft,Ft,it,et,Ht,Sn,Jt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,tt,ft,Ft,Jt.width,Jt.height,Ht,Jt.data):F.texSubImage2D(F.TEXTURE_2D,tt,ft,Ft,it,et,Ht,Sn,Jt);A.pixelStorei(F.UNPACK_ROW_LENGTH,En),A.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt),A.pixelStorei(F.UNPACK_SKIP_PIXELS,Vn),A.pixelStorei(F.UNPACK_SKIP_ROWS,ri),A.pixelStorei(F.UNPACK_SKIP_IMAGES,Ci),tt===0&&$.generateMipmaps&&F.generateMipmap(at),A.unbindTexture()},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),A.unbindTexture()},this.resetState=function(){ae=0,k=0,ue=null,A.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const Qd={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},Ra={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},bn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais fabricam chassis, armas, propulsores, reatores e placas eletrônicas. A montagem aparece na nave do planeta e dentro do arcade."}]}],mc=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],Tr={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},ko=(n,e,t,i,a,o,s,r)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:o,grama1:s,grama2:r}),Vo=(n,e,t)=>({copa:[n,e],copa2:t}),wr=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Qr=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:ko(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:ko(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:ko(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:ko(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:ko(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:ko(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:Vo(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:Vo(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:Vo(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:Vo(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:Vo(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:Vo(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:wr(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:wr(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:wr(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:wr(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:wr(2755082,16769162,16756843)}],Gr=n=>Qr.find(e=>e.id===n),kM=n=>Qr.find(e=>e.cat===n&&e.padrao),VM=n=>"#"+n.toString(16).padStart(6,"0"),wp="curriculo-cassino-v1",Rr=10,HM=100,eh=50,Rf=9,ei=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],Rp=5,WM=["comum","rara","epica","lendaria"];function XM(){const n={};for(const e of mc)n[e.id]=kM(e.id).id;return{fichas:HM,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function qM(){const n=XM();try{const e=JSON.parse(localStorage.getItem(wp));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>Gr(a)):[],i={...n.equipadas};for(const a of mc){const o=e.equipadas?.[a.id],s=o&&Gr(o);s&&s.cat===a.id&&(s.padrao||t.includes(o))&&(i[a.id]=o)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function $M(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,_)=>{i(_),t.fillRect(p,m,1,1)},o=(p,m,_,v)=>{i(v);for(let x=-_-1;x<=_+1;x++)for(let b=-_-1;b<=_+1;b++)b*b+x*x<=_*_+.5&&t.fillRect(p+b,m+x,1,1)},s=(p,m,_,v,x)=>{i(x);for(let b=0;b<16;b++)for(let w=0;w<16;w++){const E=(w+.5-p)/_,y=(b+.5-m)/v;E*E+y*y<=1&&t.fillRect(w,b,1,1)}},r=(p,m)=>{i(m);for(let _=0;_<16;_++)for(let v=0;v<16;v++){const x=v+.5,b=_+.5;let w=!1;for(let E=0,y=p.length-1;E<p.length;y=E++){const[T,I]=p[E],[S,R]=p[y];I>b!=R>b&&x<(S-T)*(b-I)/(R-I)+T&&(w=!w)}w&&t.fillRect(v,_,1,1)}},l=(p,m,_,v,x)=>{i(x);const b=Math.max(Math.abs(_-p),Math.abs(v-m));for(let w=0;w<=b;w++)t.fillRect(Math.round(p+(_-p)*w/b),Math.round(m+(v-m)*w/b),1,1)};switch(n){case"cereja":l(5,9,9,3,"#4f8a3a"),l(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),o(5,11,3,"#e63946"),o(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":r([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),r([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),o(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const _=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(_)*v,8.5+Math.sin(_)*v])}r(p,"#ffe14a"),r([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":r([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),r([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),r([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":r([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),r([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const c=t.getImageData(0,0,16,16),u=c.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let $s=null,Ys=null;function Pc(){return $s??=new(window.AudioContext||window.webkitAudioContext),$s.state==="suspended"&&$s.resume(),$s}function Ni(n,e,t=.09,i="square",a=.04,o=0){if(n.som)try{const s=Pc(),r=s.currentTime+o,l=s.createOscillator(),c=s.createGain();l.type=i,l.frequency.value=e,c.gain.setValueAtTime(a,r),c.gain.exponentialRampToValueAtTime(1e-4,r+t),l.connect(c).connect(s.destination),l.start(r),l.stop(r+t+.02)}catch{}}function Ho(n,e,t=.03,i=.07,a=0){if(n.som)try{const o=Pc();if(!Ys){Ys=o.createBuffer(1,Math.floor(o.sampleRate*.4),o.sampleRate);const u=Ys.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=o.currentTime+a,r=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();r.buffer=Ys,l.type="bandpass",l.frequency.value=e,l.Q.value=1.4,c.gain.setValueAtTime(i,s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(l).connect(c).connect(o.destination),r.start(s,Math.random()*.3),r.stop(s+t+.02)}catch{}}function El(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const o=Pc(),s=o.currentTime+a,r=o.createOscillator(),l=o.createGain();r.type="sine",r.frequency.setValueAtTime(e,s),r.frequency.exponentialRampToValueAtTime(e*.4,s+t),l.gain.setValueAtTime(i,s),l.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(l).connect(o.destination),r.start(s),r.stop(s+t+.02)}catch{}}function YM(n){if(!n.som)return null;try{const e=Pc(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(o).connect(e.destination),i.start(t),{sair(s=.4){const r=e.currentTime;o.gain.cancelScheduledValues(r),o.gain.setValueAtTime(.045,r),o.gain.linearRampToValueAtTime(1e-4,r+s),i.frequency.cancelScheduledValues(r),i.frequency.setValueAtTime(84,r),i.frequency.linearRampToValueAtTime(40,r+s),i.stop(r+s+.05)}}}catch{return null}}const ji=()=>ei[Math.floor(Math.random()*ei.length)],Al=()=>{let n=Math.random()*ei.reduce((e,t)=>e+t.peso,0);for(const e of ei)if(n-=e.peso,n<=0)return e;return ei[0]},Cp=(n,e)=>Qr.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function JM(n){for(const e of WM)if(Cp(n,e).length){const t=ei.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function ZM(n){let e=[Al(),Al(),Al()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=Rf){const a=JM(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const o=Cp(n,a.tier);o.length?i.skin=o[Math.floor(Math.random()*o.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=Rp);return i}function KM({aoMudarSkins:n,aoMudarFichas:e}){const t=qM(),i=()=>{try{localStorage.setItem(wp,JSON.stringify(t))}catch{}},a=(ee,Ie,Xe)=>{const F=document.createElement(ee);return Ie&&(F.className=Ie),Xe!=null&&(F.textContent=Xe),F},o=Object.fromEntries(ei.map(ee=>[ee.id,$M(ee.id)])),s=a("div");s.id="cassino";const r=a("div","cas-maq"),l=a("button","cas-x","X");l.title="Fechar (Esc)";const c=a("div","cas-letreiro"),u=a("div","lampadas"),h=(ee,Ie)=>{const Xe=a("i",ee);return Xe.style.setProperty("--i",Ie),Xe};for(let ee=0;ee<9;ee++)u.append(h("lampada",ee));c.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),_=m.map(ee=>{const Ie=document.createElement("canvas");return Ie.width=16,Ie.height=48,ee.append(Ie),p.append(ee),Ie});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),x=a("div","cas-lcd"),b=a("div","cas-msg","PUXE A ALAVANCA!"),w=a("div","cas-fichas"),E=a("b");w.append(a("i","moeda"),E,a("span",null,"FICHAS")),x.append(b,w);const y=a("div","cas-premio");y.hidden=!0;const T=a("div","cas-botoes"),I=(ee,Ie,Xe,F=!1)=>{const P=a("div","cas-bw"+(F?" grande":"")),qe=a("i","led"),N=a("button",`cas-b3d ${Ie}${F?" grande":""}`,ee);return N.title=Xe,P.append(qe,N),T.append(P),{b:N,led:qe}},{b:S,led:R}=I("?","azul","Tabela de prêmios"),{b:L,led:O}=I("SKINS","rosa","Coleção de skins (C)"),{b:V,led:Y}=I("GIRAR","vermelho",`Girar (-${Rr} fichas) · Espaço`,!0),{b:H,led:Z}=I("SOM","amarelo","Ligar ou desligar o som");O.classList.add("on");const ae=a("button","cas-b3d verde largo",`+${eh} FICHAS DE CORTESIA`);ae.hidden=!0,T.append(ae);const k=a("div","cas-luzes");for(let ee=0;ee<14;ee++)k.append(h("",ee));v.append(x,y,T,k);const ue=a("button","cas-alavanca");ue.title="Puxar a alavanca · Espaço";const U=a("i","braco");U.append(a("i","haste"),a("i","bola")),ue.append(a("i","suporte"),U);const X=a("div","cas-bandeja");X.append(a("i","fenda"));const j=a("div","cas-tabela");j.hidden=!0;for(const ee of ei){const Ie=a("div","cas-linha"),Xe=o[ee.id].cloneNode();Xe.getContext("2d").drawImage(o[ee.id],0,0),Ie.append(Xe,a("span",null,`x3 = ${ee.premio}`),a("small",null,Tr[ee.tier].nome.toLowerCase())),j.append(Ie)}j.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${Rp} · a cada ${Rf+1} giros sem trio, o próximo é garantido`)),r.append(l,c,d,v,ue,X,j,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const be=a("div","cas-colecao-caixa");be.hidden=!0;const Ee=a("div","cas-colecao");be.append(Ee),s.append(r,be),document.body.append(s);let $e=!1,ke=!1,st=!1;function oe(ee,Ie,Xe){const F=_[ee].getContext("2d");F.clearRect(0,0,16,48);const P=Math.floor(Xe),qe=Xe-P;for(let N=0;N<4;N++){const A=Ie[P+N];A&&F.drawImage(o[A.id],0,Math.round((N-qe)*16))}}const de=(ee,Ie)=>oe(ee,Ie,0);function Le(){E.textContent=String(t.fichas),e?.(t.fichas);const ee=t.fichas<Rr;V.disabled=ke||ee,ue.disabled=ke||ee,ae.hidden=!ee||ke,H.classList.toggle("apagado",!t.som),Z.classList.toggle("on",t.som),Y.classList.toggle("on",!ke&&!ee),R.classList.toggle("on",!j.hidden),r.classList.toggle("girando",ke),r.classList.toggle("pronto",!ke&&!ee),r.classList.toggle("sem-ficha",ee)}function Qe(ee,Ie=""){b.textContent=ee,b.className="cas-msg "+Ie}function Fe(){Ee.replaceChildren();const ee=a("div","cas-cabecalho"),Ie=Qr.filter(F=>!F.padrao).length,Xe=a("button","cas-btn","VOLTAR");Xe.onclick=()=>rt(!1),ee.append(a("h3",null,`SKINS (${t.skins.length}/${Ie})`),Xe),Ee.append(ee);for(const F of mc){Ee.append(a("h4",null,F.nome.toUpperCase()));const P=a("div","cas-grade");for(const qe of Qr.filter(N=>N.cat===F.id)){const N=qe.padrao||t.skins.includes(qe.id),A=t.equipadas[F.id]===qe.id,J=a("div","cas-card"+(A?" equipada":"")+(N?"":" bloqueada"));J.style.setProperty("--r",Tr[qe.raridade].cor);const Q=a("div","amostra"),le=F.id==="planeta"?[qe.cores.marFundo,qe.cores.marRaso,qe.cores.areia,qe.cores.grama0,qe.cores.grama2]:F.id==="arvores"?[qe.cores.copa[0],qe.cores.copa[1],qe.cores.copa2]:[qe.cores.fundo,qe.cores.estrelas,qe.cores.nuvens];for(const Ue of le){const ce=a("i");ce.style.background=N?VM(Ue):"#2a2440",Q.append(ce)}J.append(Q,a("b",null,N?qe.nome:"???"),a("small",null,Tr[qe.raridade].nome));const _e=a("button","cas-btn pequeno",A?"EQUIPADA":N?"EQUIPAR":"TRAVADA");_e.disabled=!N||A,_e.onclick=()=>Oe(qe),J.append(_e),P.append(J)}Ee.append(P)}}function Oe(ee){t.equipadas[ee.cat]=ee.id,i(),n({...t.equipadas}),Ni(t,660,.06),st&&Fe()}function rt(ee){st=ee,r.hidden=ee,be.hidden=!ee,ee?Fe():V.focus()}function fe(ee=0){if(!$e||ke||t.fichas<Rr)return;t.fichas-=Rr,t.giros+=1;const Ie=ZM(t);ke=!0,y.hidden=!0,p.classList.remove("vitoria"),r.classList.remove("vitoria"),Qe("GIRANDO..."),Le();const Xe=[ji(),ji(),ji()],F=[ji(),ji(),ji()];for(const _e of[Xe,F])_e[0]===_e[1]&&_e[1]===_e[2]&&(_e[2]=ei[(ei.indexOf(_e[2])+1)%ei.length]);const P=14,qe=450,N=[1100,1600,2100],A=N.map(_e=>Math.round(P*(_e-qe)/1e3)+3),J=Ie.simbolos.map((_e,Ue)=>{const ce=[Xe[Ue],_e,F[Ue]];for(;ce.length<A[Ue]+3;)ce.push(ji());return ce}),Q=(_e,Ue)=>{const ce=N[_e]-qe;return Ue<ce?A[_e]-P*Ue/1e3:3*(1-Math.min(1,(Ue-ce)/qe))**3},le=()=>{const _e=performance.now(),Ue=[!1,!1,!1],ce=[-1,-1,-1];let xe=!1;const Ze=YM(t);for(const Ge of m)Ge.classList.add("girando");const ut=Ge=>{const ze=Math.max(0,Ge-_e);for(let je=0;je<3;je++)if(!Ue[je])if(ze>=N[je])Ue[je]=!0,m[je].classList.remove("girando"),oe(je,J[je],0),El(t,150-je*12,.13,.11),Ho(t,1100+je*350,.06,.09),Ni(t,330+je*110,.1,"square",.025);else{const xt=Q(je,ze);oe(je,J[je],xt);const vt=Math.floor(xt);vt!==ce[je]&&(ce[je]>=0&&Ho(t,1500+je*450,.022,.05),ce[je]=vt)}!xe&&ze>=N[2]-qe&&(xe=!0,Ze?.sair(qe/1e3+.1)),Ue.every(Boolean)?Ce(Ie):requestAnimationFrame(ut)};requestAnimationFrame(ut)};ee>0?setTimeout(le,ee):le()}function ye(ee){const Ie=Math.min(10,Math.max(2,Math.ceil(ee/25)));for(let Xe=0;Xe<Ie;Xe++){const F=a("i","moeda caindo");F.style.left=`${14+Math.random()*68}%`,F.style.animationDelay=`${Xe*.09}s`,F.addEventListener("animationend",()=>F.remove()),X.append(F),Ho(t,3400+Math.random()*900,.04,.05,.55+Xe*.09)}}function Ce(ee){if(ke=!1,t.fichas+=ee.fichas,t.semTrio=ee.tipo==="trio"?0:t.semTrio+1,ee.skin&&t.skins.push(ee.skin.id),i(),ee.fichas>0&&ye(ee.fichas),ee.tipo==="trio"?(Qe(`TRIO! +${ee.fichas}`,"ganhou"),p.classList.add("vitoria"),r.classList.add("vitoria"),[523,659,784,1047].forEach((Ie,Xe)=>Ni(t,Ie,.14,"square",.05,Xe*.11))):ee.tipo==="par"?(Qe(`PAR! +${ee.fichas}`,"par"),Ni(t,523,.1),Ni(t,659,.1,"square",.04,.1)):Qe(t.semTrio>=Rf?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),ee.skin){y.replaceChildren(),y.style.setProperty("--r",Tr[ee.skin.raridade].cor);const Ie=mc.find(F=>F.id===ee.skin.cat).nome;y.append(a("b",null,"NOVA SKIN!"),a("span",null,`${Ie}: ${ee.skin.nome} (${Tr[ee.skin.raridade].nome})`));const Xe=a("button","cas-mini","EQUIPAR");Xe.onclick=()=>{Oe(ee.skin),Xe.disabled=!0,Xe.textContent="OK"},y.append(Xe),y.hidden=!1,[784,988,1175,1568].forEach((F,P)=>Ni(t,F,.18,"triangle",.06,.5+P*.12))}Le()}function ge(){if(!(!$e||ke||t.fichas<Rr)){ue.classList.add("puxada"),r.classList.add("puxando"),setTimeout(()=>{ue.classList.remove("puxada"),r.classList.remove("puxando")},1150);for(let ee=0;ee<5;ee++)Ho(t,2600-ee*150,.03,.07,.07+ee*.045);El(t,95,.2,.15,.34),Ho(t,900,.07,.1,.34),El(t,330,.1,.05,.76),Ho(t,2200,.05,.06,.9),fe(360)}}function Pe(){$e||($e=!0,s.classList.add("aberto"),j.hidden=!0,rt(!1),Le(),V.focus())}function ot(){!$e||ke||($e=!1,s.classList.remove("aberto"))}V.onclick=()=>fe(),ue.onclick=ge,S.onclick=()=>{j.hidden=!j.hidden,Le()},L.onclick=()=>rt(!0),l.onclick=ot,ae.onclick=()=>{t.fichas+=eh,i(),Le(),Qe("FICHAS DE CORTESIA!"),Ni(t,880,.1)},H.onclick=()=>{t.som=!t.som,i(),Le(),Ni(t,660,.06)},s.addEventListener("pointerdown",ee=>{ee.target===s&&ot()}),window.addEventListener("keydown",ee=>{$e&&(ee.code==="Escape"?(ee.preventDefault(),st?rt(!1):ot()):ee.code==="Space"&&!st&&![L,S,H,ae,l].includes(document.activeElement)?(ee.preventDefault(),ge()):ee.code==="KeyC"&&(ee.preventDefault(),rt(!st)))},!0);for(let ee=0;ee<3;ee++)de(ee,[ji(),ei[ee*2%ei.length],ji()]);return Le(),n({...t.equipadas}),{abrir:Pe,fechar:ot,estaAberto:()=>$e,adicionarFichas:ee=>{t.fichas+=ee,i(),Le()},bip:(...ee)=>Ni(t,...ee),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Le(),t.som&&Ni(t,660,.06),t.som)}}function vn(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=o=>{i.fillStyle=o};return{c:t,pixel(o,s,r){a(r),i.fillRect(o,s,1,1)},retangulo(o,s,r,l,c){a(c),i.fillRect(o,s,r,l)},disco(o,s,r,l){a(l);for(let c=-r-1;c<=r+1;c++)for(let u=-r-1;u<=r+1;u++)u*u+c*c<=r*r+.5&&i.fillRect(o+u,s+c,1,1)},elipse(o,s,r,l,c){a(c);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-o)/r,p=(u+.5-s)/l;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(o,s){a(s);for(let r=0;r<e;r++)for(let l=0;l<n;l++){const c=l+.5,u=r+.5;let h=!1;for(let d=0,p=o.length-1;d<o.length;p=d++){const[m,_]=o[d],[v,x]=o[p];_>u!=x>u&&c<(v-m)*(u-_)/(x-_)+m&&(h=!h)}h&&i.fillRect(l,r,1,1)}},linha(o,s,r,l,c){a(c);const u=Math.max(Math.abs(r-o),Math.abs(l-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(o+(r-o)*h/u),Math.round(s+(l-s)*h/u),1,1)},contorno(o){const s=i.getImageData(0,0,n,e),r=s.data,l=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&r[(h*n+u)*4+3]>0,c=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!l(h,u)&&(l(h+1,u)||l(h-1,u)||l(h,u+1)||l(h,u-1))&&c.push([h,u]);a(o);for(const[u,h]of c)i.fillRect(u,h,1,1);return this}}}function uu(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function zt(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const th=n=>n*n*(3-2*n);function ni(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),o=th(n-i),s=th(e-a),r=zt(i,a,t),l=zt(i+1,a,t),c=zt(i,a+1,t),u=zt(i+1,a+1,t);return r+(l-r)*o+(c-r)*s+(r-l-c+u)*o*s}const du=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Pp=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function jM(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,o=t*2+2,s=vn(a,o),r=a/2,l=o/2,c=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(r+Math.cos(d)*m),Math.round(l+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};c(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(zt(d,e,1)-.5)*1.3,y:(zt(d,e,2)-.5)*1.3,r:.12+zt(d,e,3)*.15}));for(let h=0;h<o;h++)for(let d=0;d<a;d++){const p=(d+.5-r)/t,m=(h+.5-l)/t,_=p*p+m*m;if(_>1)continue;const v=Math.sqrt(1-_),b=p*-.5+m*-.55+v*.67+(du[h%4*4+d%4]-.5)*.24;let w=b<.1?0:b<.4?1:b<.68?2:3,E=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+ni(p*1.6+e,m*3,5)*2.2)>.15&&(E=n.palB),n.terra&&ni(p*2.4+e,m*2.4,7)>.52&&(E=n.palB);let y;n.nuvens&&ni(p*3+e,m*3,9)>.62&&(y=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][w]),u.some(T=>(p-T.x)**2+(m-T.y)**2<T.r*T.r)&&(w=Math.max(0,w-1)),n.lava&&Math.abs(ni(p*3.2+e,m*3.2,11)-.5)<.035&&(y=w>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,y||E[w])}return c(!0),s.contorno("#0b1026").c}const QM=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],e_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],t_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],In=(n,e,t)=>(ni(n,e,t)*.5+ni(n*2,e*2,t+1)*.25+ni(n*4,e*4,t+2)*.125+ni(n*8,e*8,t+3)*.0625)/.9375;function Qn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),o=a.createImageData(n,e),s=o.data;for(let r=0;r<e;r++)for(let l=0;l<n;l++){const c=t(l,r,(l+.5)/n*2-1,(r+.5)/e*2-1);if(!c)continue;const u=Math.min(l,n-1-l,r,e-1-r)/(.2*Math.min(n,e));if(u<1&&u<du[r%4*4+l%4])continue;const h=(r*n+l)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=c[3]}return a.putImageData(o,0,0),i}const Ln=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(du[t%4*4+e%4]-.5)*.9+.5))),On=(n,e,t)=>[...n[t-1],e[t-1]];function Mi(n,e,t,i,a="#ffffff"){const o=n.getContext("2d"),s=Math.round(e*n.width),r=Math.round(t*n.height);o.fillStyle=a,o.globalAlpha=.5,o.fillRect(s-i,r,i*2+1,1),o.fillRect(s,r-i,1,i*2+1),o.globalAlpha=1,o.fillRect(s-1,r-1,2,2),o.fillStyle="#ffffff",o.fillRect(s,r,1,1)}function Tl(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let o=0;o<e;o++)a.fillStyle=i[o%i.length],a.fillRect(Math.floor(zt(o,t,1)*n.width),Math.floor(zt(o,t,2)*n.height),1,1)}function n_(n,e,t){let i=!1;for(let a=0,o=n.length-1;a<n.length;o=a++){const[s,r]=n[a],[l,c]=n[o];r>t!=c>t&&e<(l-s)*(t-r)/(c-r)+s&&(i=!i)}return i}const i_={orion(){const n=Qn(150,112,(e,t,i,a)=>{const o=i*1.18+(In(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(In(i*2,a*2+3,42)-.5)*.7,r=Math.max(0,1-Math.hypot(o*.95,(s+.05)*1.25)),l=Math.max(0,1-Math.hypot((o+.5)*1.3,(s-.25)*2.4)),c=Math.max(0,1-Math.hypot((o-.55)*1.3,(s+.15)*2.6))*.8,u=In(o*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(o*1.1+.05,s*1.3-.05)*3),d=Ln(Math.min(1,(r*.9+l+c)*(.3+u*1.2)+h),e,t,5);return d?On([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});Tl(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])Mi(n,e,t,1);return Mi(n,.2,.2,3,"#bcd0ff"),Mi(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=Qn(130,124,(t,i,a,o)=>{for(let c=0;c<n.length;c++){const u=n[c],h=(In(o*2.5+c*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(o+1)/2),p=u.top+(In(a*6+c,1.1,60)-.5)*.16;if(o>p&&Math.abs(a-u.cx-h)<d){const _=(u.cx+h+d-a)/(2*d),v=In(a*9,o*9,70),x=_<.14+v*.12?[235,160,70]:_<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[x[0],x[1],x[2],255]}const m=Math.hypot(a-u.cx,o-p);if(m<.16&&o<p){const _=Ln((.16-m)/.16*.9,t,i,3);if(_)return On([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],_)}}const s=In(a*2.4+9,o*2.4,80),r=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,o*.85)),l=Ln(r,t,i,3);return l?On(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],l):null});return Tl(e,25,9),Mi(e,.49,.13,2,"#bff6ff"),Mi(e,.24,.4,1,"#ffe0b0"),Mi(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=Qn(110,104,(i,a,o,s)=>{const r=o*n+s*e,l=-o*e+s*n,c=Math.hypot(r/.92,l/.74);if(c>1||c>.78&&ni(r*9,l*9,93)<(c-.78)*4.5)return null;const u=1-Math.abs(ni(r*8+3,l*8,90)-.5)*2,h=1-Math.abs(ni(r*14,l*14+5,91)-.5)*2;if(u>.85&&c>.3)return[255,130,55,240];if(h>.92&&c>.2)return[120,200,255,220];const d=Ln((1-c)*.7*(.4+In(r*3,l*3,92)),i,a,3);return d?On([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return Mi(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=Qn(112,112,(t,i,a,o)=>{if(n_(n,t+.5,i+.5))return[10,5,18,255];const s=In(a*2.5,o*2.5,100),r=Math.max(0,1-Math.hypot(a*.9,o*.8))*(.35+s*1.1),l=Ln(r,t,i,4);return l?On([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],l):null});return Tl(e,30,13),Mi(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return Qn(160,84,(t,i,a,o)=>{const s=a*n+o*e,r=(-a*e+o*n)/.3,l=Math.hypot(s,r),c=Math.atan2(r,s),u=.5+.5*Math.sin(2*c-l*10),h=Math.max(0,1-l)*(.25+.75*u)*(.5+In(s*4,r*4,110)),d=Math.abs(l-.55)<.06?.5*ni(s*9,r*9,111):0;let p=Math.min(1,Math.exp(-l*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(o-.55)*10)*1.5)*.9);const m=Ln(p,t,i,5);return m?On([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return Qn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*ni(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),o=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,r=Ln(a*1.1+o+s,n,e,5);return r?On([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],r):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=Qn(110,100,(t,i,a,o)=>{let s=0;for(const[l,c,u]of n)s+=Math.exp(-Math.hypot((t/110-l)*1.1,i/100-c)/.14*(7-u*.4));const r=Ln(Math.min(1,s*(.4+In(a*3,o*3,125))),t,i,4);return r?On([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],r):null});for(const[t,i,a]of n)Mi(e,t,i,a,"#cfe0ff");return e},helice(){const n=Qn(100,100,(e,t,i,a)=>{const o=Math.hypot(i,a);if(o>.98)return null;const s=Math.atan2(a,i),r=.5+.8*In(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*In(i*6,a*6,121),l=Math.exp(-(((o-.62)/.13)**2)),c=o<.6?.28*(1-o):0,u=o>.7?.4*Math.exp(-(((o-.8)/.13)**2)):0,h=Ln(Math.min(1,(l+c+u)*r),e,t,4);return h?[...o<.55?[60,230,235]:o<.66?[190,235,120]:o<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return Mi(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=Qn(150,100,(i,a,o,s)=>{const r=o*n+s*e,l=-o*e+s*n,c=Math.hypot(o,s),u=Math.exp(-((l/.035)**2))*Math.max(0,1-Math.abs(r)*.95)*(.5+.5*In(r*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((o/.45)**2))*.8,d=Math.exp(-Math.hypot(o,s*1.2)*3.2)*.55,p=Math.exp(-c*9),m=Ln(Math.min(1,p+u+h+d),i,a,5);return m?On([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return Mi(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let o=0;o<8;o++)a.push(Qn(180,110,(s,r)=>{const l=s+.5-90,c=r+.5-55,u=Math.hypot(l,c);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=In(l*.06-o*.18,c*.4,140);let d=0;const p=5.5*(1-Math.abs(l)/95);if(Math.abs(l)>17&&Math.abs(l)<90&&Math.abs(c)<p&&(d=1-Math.abs(c)/p),u>19.5&&u<36&&c<0&&Math.abs(c)>Math.abs(l)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&c>0&&c>Math.abs(l)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=Ln(Math.exp(-(u-19)/16)*.4*(.4+h),s,r,2);return v?On([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-l/95),_=Ln(Math.min(1,d*(.55+h*.7)*m*1.25),s,r,4);return _?On([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],_):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let o=a+1;o<16;o++){const s=a^o;(s===1||s===2||s===4||s===8)&&i.push([a,o])}for(let a=0;a<16;a++){const o=a/16*(Math.PI/2),s=Math.cos(o),r=Math.sin(o),l=Math.cos(.5),c=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,_,v,x])=>{let b=m*s-x*r;const w=m*r+x*s;let E=_*l-v*c,y=_*c+v*l;const T=b*u+y*h;y=-b*h+y*u,b=T;const I=2.6/(2.6-w*.9),S=3.6/(3.6-y*I*.7);return{x:124/2+b*I*S*19,y:124/2+E*I*S*19,w}}),p=vn(124,124);for(const[m,_]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${_})`);for(const[m,_]of i){const v=(d[m].w+d[_].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[_].x),Math.round(d[_].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let o=0;o<16;o++){const s=o/16*Math.PI,r=Math.cos(s),l=Math.sin(s);a.push(Qn(150,150,(c,u)=>{const h=c+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*r+d*l,_=-h*l+d*r,v=1.1+.07*Math.abs(m),x=Math.abs(m)<70?Math.exp(-((_/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,b=Math.exp(-p/11)*.8,w=Math.abs(p-34)<.8?.35:0,E=Ln(Math.min(1,x+b+w),c,u,5);return E?On([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],E):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const o=a/12*Math.PI*2;i.push(Qn(120,120,(s,r)=>{const l=s+.5-60,c=r+.5-60,u=Math.hypot(l,c),h=Math.atan2(c,l);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const _=Ln(Math.exp(-(u-47.5)/3)*.55,s,r,2);return _?On([[120,90,220],[190,160,255]],[60,110],_):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-o))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=Ln(Math.min(1,p),s,r,4);return On([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(o,s)=>[12+zt(s,150,1)*146,10+zt(s,150,2)*104]),i=[];for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++){const r=Math.hypot(t[o][0]-t[s][0],t[o][1]-t[s][1]);r<58&&i.push([o,s,r])}const a=(o,s,[r,l],[c,u])=>{const h=c-r,d=u-l,p=Math.max(0,Math.min(1,((o-r)*h+(s-l)*d)/(h*h+d*d)));return Math.hypot(o-(r+h*p),s-(l+d*p))};return Qn(170,124,(o,s,r,l)=>{let c=0;for(const[h,d,p]of i){const m=a(o+.5,s+.5,t[h],t[d]);c+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+In(o*.2,s*.2,151))}for(const[h,d]of t)c+=Math.exp(-((Math.hypot(o-h,s-d)/3.4)**2))*1.2;const u=Ln(Math.min(1,c),o,s,4);return u?On([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},a_={},o_=n=>a_[n]??=i_[n](),er=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let r_=null;const Ip=()=>r_??=Pp.map((n,e)=>jM(n,e*13+3));function s_(n,e){const t=Ip(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let o=[],s=2,r=-1,l=-1,c=1;function u(m){if(c<1&&(c=Math.min(1,c+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const _=.35+Math.random()*.3,v=190+Math.random()*90;o.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(_)*v,vy:Math.sin(_)*v,vida:0,max:1.4})}for(const _ of o)_.x+=_.vx*m,_.y+=_.vy*m,_.vida+=m;o=o.filter(_=>_.vida<_.max&&_.x<n+20&&_.y<e+20)}function h(m,_,v,x,b,w){const E=m*v,y=_*v,T=Math.floor((E-n/2-b)/x),I=Math.floor((E+n/2+b)/x),S=Math.floor((y-e/2-b)/x),R=Math.floor((y+e/2+b)/x);for(let L=S;L<=R;L++)for(let O=T;O<=I;O++)w(O,L,O*x-E+n/2,L*x-y+e/2)}function d(m,_,v,x,b){const w=er[b%er.length],E=b%er.length;m.fillStyle=w.base,m.fillRect(0,0,n,e),h(_,v,.06,400,160,(y,T,I,S)=>{if(zt(y,T,90+E)>.7)return;const R=70+zt(y,T,91)*80,L=w.nebulosas[Math.floor(zt(y,T,92)*w.nebulosas.length)],O=I+zt(y,T,93)*400,V=S+zt(y,T,94)*400;for(let Y=0;Y<5;Y++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(O),Math.round(V),Math.max(0,R*(1-Y*.18)),0,Math.PI*2),m.fill()}),h(_,v,.1,360,170,(y,T,I,S)=>{if(zt(y,T,200+E*3)>.8)return;const R=o_(w.objetos[Math.floor(zt(y,T,201)*w.objetos.length)]),L=Array.isArray(R)?R[Math.floor(x*R.fps+zt(y,T,204)*R.length)%R.length]:R,O=I+(.1+zt(y,T,202)*.6)*360,V=S+(.1+zt(y,T,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(O-L.width/2),Math.round(V-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${w.tom}, 0.05)`,m.fillRect(0,0,n,e),e_.forEach((y,T)=>{m.globalAlpha=y.alfa,h(_,v,y.f,y.cel,130,(I,S,R,L)=>{if(zt(I,S,y.semente)>y.prob*(w.planetas??1))return;const O=Math.floor(zt(I,S,y.semente+1)*t.length),V=y.escalaMax>1&&Pp[O].r<=15&&zt(I,S,y.semente+2)<.4?2:1,Y=t[O],H=R+(.15+zt(I,S,y.semente+3)*.7)*y.cel,Z=L+(.15+zt(I,S,y.semente+4)*.7)*y.cel;m.drawImage(Y,Math.round(H-Y.width*V/2),Math.round(Z-Y.height*V/2),Y.width*V,Y.height*V)});for(const I of t_){if(I.camada!==T)continue;const S=t[I.tipo],R=I.x-_*y.f+n/2,L=I.y-v*y.f+e/2;m.drawImage(S,Math.round(R-S.width*I.escala/2),Math.round(L-S.height*I.escala/2),S.width*I.escala,S.height*I.escala)}m.globalAlpha=1});for(const y of QM)h(_,v,y.f,y.cel,4,(T,I,S,R)=>{for(let L=0;L<y.n;L++){const O=Math.round(S+zt(T,I,L*7+1)*y.cel),V=Math.round(R+zt(T,I,L*7+2)*y.cel);if(O<-2||O>n+2||V<-2||V>e+2)continue;const Y=y.cores[Math.floor(zt(T,I,L*7+3)*y.cores.length)],H=zt(T,I,L*7+4)*6.28,Z=1+zt(T,I,L*7+5)*2.2;(!y.pisca||Math.sin(x*Z+H)>-.35)&&(m.fillStyle=Y,m.fillRect(O,V,1,1),y.grande&&zt(T,I,L*7+6)<y.grande&&(m.fillRect(O-1,V,3,1),m.fillRect(O,V-1,1,3)))}})}function p(m,_,v,x,b=0){b!==r&&(l=r,r=b,c=l<0?1:0),c<1&&l>=0?(d(m,_,v,x,l),d(a,_,v,x,r),m.globalAlpha=c,m.drawImage(i,0,0),m.globalAlpha=1):d(m,_,v,x,r);for(const w of o){const E=1-w.vida/w.max;for(let y=0;y<12;y++){const T=Math.round(w.x-w.vx*y*.011),I=Math.round(w.y-w.vy*y*.011);m.globalAlpha=Math.max(0,E*(1-y/12)),m.fillStyle=y<2?"#ffffff":"#8bd3ff",m.fillRect(T,I,y<2?2:1,y<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const Wn=520,Ja=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function c_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const _=m.getContext("2d");return _.drawImage(p,0,0),_.globalCompositeOperation="source-atop",_.fillStyle="rgba(70, 40, 110, 0.55)",_.fillRect(0,0,m.width,m.height),m}),o=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},_=w=>Ja(d,p,300+w),v=d*Wn,x=p*Wn;if(_(1)>=.5)return m;const b=_(2);if(b<.22){const w=Ip(),E=Math.floor(_(3)*w.length),y=w[E],T=(y.height-2)/2,I=T>=13?2:3,S=v+90+_(4)*(Wn-180),R=x+90+_(5)*(Wn-180);if(o(S,R,70)){const L=T*I*.92;m.planetas.push({x:S,y:R,spr:y,esc:I}),m.circ.push({x:S,y:R,r:L})}}else if(b<.62){const w=_(5)*Math.PI*2,E=150+_(6)*130,y=(_(7)-.5)*70,T=v+120+_(8)*(Wn-240),I=x+120+_(9)*(Wn-240),S=(.2+.6*_(10))*E,R=_(11)<.5?(S/E+.4)%1*E:-999,L=Math.floor(E/13);for(let O=0;O<=L;O++){const V=O/L,Y=V*E;if(Math.abs(Y-S)<24||Math.abs(Y-R)<24)continue;const H=Math.sin(V*Math.PI)*y,Z=T+Math.cos(w)*Y-Math.sin(w)*H,ae=I+Math.sin(w)*Y+Math.cos(w)*H;if(!o(Z,ae,10))continue;const k=Ja(d*31+O,p,330)<.6?0:1,ue=[8,10][k];m.rochas.push({x:Z,y:ae,tam:k}),m.circ.push({x:Z,y:ae,r:ue*.85})}}else{const w=70+_(11)*50,E=v+w+_(12)*(Wn-2*w),y=x+w+_(13)*(Wn-2*w);if(o(E,y,w)){const T=Array.from({length:34},(I,S)=>{const R=Ja(d,p,400+S)*Math.PI*2,L=Math.sqrt(Ja(d,p,440+S))*w*.95;return{dx:Math.cos(R)*L,dy:Math.sin(R)*L,tam:1+Math.floor(Ja(d,p,480+S)*3),cor:Ja(d,p,520+S)<.5?"#9a8a7a":"#6a5a50",fase:Ja(d,p,560+S)*6.28}});m.zonas.push({x:E,y,r:w,pedrinhas:T})}}return m}const r=(d,p)=>{const m=d+","+p;let _=i.get(m);return _||(_=s(d,p),i.set(m,_)),_};function l(d,p,m){const _=Math.floor(d/Wn),v=Math.floor(p/Wn);for(let x=-1;x<=1;x++)for(let b=-1;b<=1;b++)m(r(_+b,v+x))}function c(d,p){let m=1;return l(d,p,_=>{for(const v of _.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,_=0){let v=!1;return l(d.x,d.y,x=>{for(const b of x.circ){const w=d.x-b.x,E=d.y-b.y,y=b.r+p;if(Math.abs(w)>y||Math.abs(E)>y)continue;const T=Math.hypot(w,E)||.001;if(T>=y)continue;const I=w/T,S=E/T;if(d.x=b.x+I*y,d.y=b.y+S*y,v=!0,m&&_>0){const R=-S,L=I,O=Math.sign((m.x-d.x)*R+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=R*O*_,d.y+=L*O*_}}}),v}function h(d,p,m,_,v,x){const b=Math.floor((p-200)/Wn),w=Math.floor((p+_+200)/Wn),E=Math.floor((m-200)/Wn),y=Math.floor((m+v+200)/Wn),T=(I,S,R)=>I>p-R&&I<p+_+R&&S>m-R&&S<m+v+R;for(let I=E-1;I<=y+1;I++)for(let S=b-1;S<=w+1;S++){const R=r(S,I);for(const L of R.zonas)if(T(L.x,L.y,L.r+10)){for(let O=0;O<4;O++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-O*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const O of L.pedrinhas)d.fillStyle=O.cor,d.fillRect(Math.round(L.x+O.dx+Math.sin(x*.6+O.fase)*2),Math.round(L.y+O.dy+Math.cos(x*.5+O.fase)*2),O.tam,O.tam)}for(const L of R.planetas)T(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of R.rochas){if(!T(L.x,L.y,20))continue;const O=a[L.tam];d.drawImage(O,Math.round(L.x-O.width/2),Math.round(L.y-O.height/2))}}}return{fatorLento:c,empurrar:u,desenhar:h,celula:r}}const Ui="#0b1026",gc=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],Ca=n=>({quadros:n,brancos:n.map(uu)});function l_(n){const e=gc[n%gc.length],t=(c,u,h,d)=>{c.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),c.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=Ca([0,1].map(c=>{const u=vn(16,16),h=c?10:9.5;if(u.elipse(8,h,c?6.5:6,c?3.6:4.3,e.slime[0]),u.elipse(8,c?11:10.8,c?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,c?7:6,e.slime[1]);return e.chifres&&t(u,4,10,c?3:2),u.retangulo(4,c?8:7,2,2,e.olho),u.retangulo(9,c?8:7,2,2,e.olho),u.pixel(5,c?9:8,"#1b1020"),u.pixel(10,c?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,c?6:5,2,2,e.olho),u.pixel(8,c?7:6,"#1b1020")),u.contorno(Ui).c})),a=Ca([0,1].map(c=>{const u=vn(18,16),h=c?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(Ui).c})),o=Ca([0,1].map(c=>{const u=vn(20,20);u.disco(10,12+c,7,e.ogro[0]),u.disco(10,13+c,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+c],[5,1+c],[7,7+c]],h),u.poligono([[13,7+c],[15,1+c],[17,7+c]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+c,e.ogro[1]);return u.retangulo(5,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+c,"#1b1020"),u.pixel(11,11+c,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+c,2,2,e.olho),u.pixel(10,9+c,"#1b1020")),u.retangulo(7,15+c,6,2,"#1b1020"),u.pixel(8,15+c,"#ffffff"),u.pixel(11,15+c,"#ffffff"),u.contorno(Ui).c})),s=Ca([0,1].map(c=>{const u=vn(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+c)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(Ui).c})),r=Ca([0,1].map(c=>{const u=vn(16,17);return u.pixel(8,0,c?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(Ui).c})),l=Ca([0,1].map(c=>{const u=vn(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=c?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(Ui).c}));return{slime:i,morcego:a,ogro:o,fantasma:s,atirador:r,inseto:l}}function f_(n){const e=gc[n%gc.length];return Ca([0,1].map(t=>{const i=vn(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(Ui).c}))}function u_(){return Ca([0,1].map(n=>{const e=vn(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(Ui).c}))}function wl(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function d_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,o=Array.from({length:11},(r,l)=>{const c=l/11*Math.PI*2,u=n*(.8+wl(e*7+1,l)*.35);return[i+Math.cos(c)*u,a+Math.sin(c)*u]}),s=(r,l,c)=>o.map(([u,h])=>[i+(u-i)*r+l,a+(h-a)*r+c]);return{r:n,quadros:[0,1,2].map(r=>{const l=vn(t,t);l.poligono(o,"#5a606c"),l.poligono(s(.88,-.7,-.7),"#7a808d"),l.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let c=0;c<3+e;c++)l.disco(Math.round(i+(wl(e,c+20)-.5)*n*1.2),Math.round(a+(wl(e,c+40)-.5)*n*1.2),1,"#4a4f5a");return r>=1&&(l.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),l.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),r>=2&&(l.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),l.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),l.contorno(Ui).c})}})}function h_(){const n=t=>{const i=vn(12,12);return t(i),i.contorno(Ui).c},e=(t,i,a)=>Array.from({length:t*2},(o,s)=>{const r=Math.PI/t*s-Math.PI/2,l=s%2?a:i;return[6+Math.cos(r)*l,6+Math.sin(r)*l]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(o=>{o.poligono(e(5,5.6,2.4),i),o.poligono(e(5,3.4,1.5),a),o.pixel(6,6,"#ffffff")})]))}}function p_(n,e,t,i,a=1,o=22){n.globalAlpha=a;const s=Math.round(e),r=Math.round(t);for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){const u=Math.hypot(c,l);if(u>o)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(l,c)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+c,r+l,1,1)}n.globalAlpha=1}const Cf="#0b1026",m_=n=>({quadros:n,brancos:n.map(uu)}),Et=(n,e,t)=>m_([0,1].map(i=>{const a=vn(n,e);return t(a,i),a.contorno(Cf).c})),g_=(n,e,t,i=1,a=0,o=0)=>e.forEach((s,r)=>[...s].forEach((l,c)=>{const u=t[l];u&&n.retangulo(a+c*i,o+r*i,i,i,u)})),Aa=(n,e,t,i,a,o=1,s=0,r=0)=>Et(n,e,(l,c)=>g_(l,c?i:t,a,o,s,r)),Ba=(n,e)=>n.map(([t,i])=>[e-1-t,i]),Lp=(n,e,t,i)=>e.forEach(([a,o,s,r],l)=>n.linha(a,o,s+((l+t)%2?1:0),r,i)),nh=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],ih=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function x_(){const n=l=>({x:l,y:"#ffffff"}),e=Aa(16,12,nh,ih,n("#5be37a"),1,2,2),t=Aa(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=Aa(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=Aa(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),o=Aa(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=Aa(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),r=Aa(56,38,nh,ih,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:o,inseto:s},chefe:r}}function v_(){const n=Aa(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=Et(18,14,(r,l)=>{const c=l?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=l?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];r.poligono(c,"#a56bff"),r.poligono(Ba(c,18),"#a56bff"),r.poligono(u,"#d1b0ff"),r.poligono(Ba(u,18),"#d1b0ff"),r.disco(l?4:3,l?10:4,1,"#ffe14a"),r.disco(l?13:14,l?10:4,1,"#ffe14a"),r.elipse(9,8,1.6,4.5,"#2a1a3a"),r.pixel(8,3,"#2a1a3a"),r.pixel(10,3,"#2a1a3a"),r.pixel(8,4,"#ff3b4a"),r.pixel(10,4,"#ff3b4a")}),t=Et(20,18,(r,l)=>{r.elipse(10,11,8,6.5,"#2a6a4a"),r.elipse(8,9,5,3,"#4ab87a"),r.linha(10,5,10,17,"#14301f"),r.disco(10,5,3,"#1b2a2a"),r.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),r.pixel(8,5,"#ff3b4a"),r.pixel(12,5,"#ff3b4a");for(const c of[0,1,2]){const u=8+c*3;r.linha(3,u,1,u+1+(l?2:0),"#1b2a2a"),r.linha(17,u,19,u+1+(l?0:2),"#1b2a2a")}}),i=Et(14,17,(r,l)=>{const c=l?1:0;r.elipse(3,6+c,3,1.6,"#bfe6ff"),r.elipse(10,6+c,3,1.6,"#bfe6ff"),r.elipse(7,12,3,4,"#ffd23f"),r.retangulo(4,10,7,1,"#1b1020"),r.retangulo(4,13,7,1,"#1b1020"),r.retangulo(7,15,1,2,"#cfd6e0"),r.disco(7,6,3,"#1b1020"),r.disco(7,3,2,"#ffd23f"),r.pixel(6,3,"#ff3b4a"),r.pixel(8,3,"#ff3b4a")}),a=Et(16,17,(r,l)=>{r.elipse(8,12,4,3,"#c9771a"),r.elipse(8,11,3,2,"#e0933a"),r.linha(8,9,11,6,"#c9771a"),r.linha(11,6,10,3,"#c9771a"),r.linha(10,3,9,2,"#c9771a"),r.pixel(9,1,l?"#ff3b4a":"#ffd23f"),r.pixel(10,2,l?"#ff3b4a":"#ffd23f"),r.disco(3,8,2,"#e0933a"),r.disco(13,8,2,"#e0933a"),r.pixel(3,7,Cf),r.pixel(13,7,Cf),Lp(r,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],l,"#8a4a10"),r.pixel(7,10,"#ff3b4a"),r.pixel(9,10,"#ff3b4a")}),o=Et(12,10,(r,l)=>{r.disco(6,6,2,"#2a3a2a"),r.disco(6,3,2,"#3a5a3a"),r.pixel(5,3,"#ff3b4a"),r.pixel(7,3,"#ff3b4a");const c=l?4:1;r.elipse(2.5,c+1,2.5,1.3,"#bfe6ff"),r.elipse(9.5,c+1,2.5,1.3,"#bfe6ff"),r.pixel(5,8,"#1b2a1a"),r.pixel(7,8,"#1b2a1a")}),s=Et(56,38,(r,l)=>{for(const c of[0,1,2]){const u=20+c*6;r.linha(10,u,2,u+6+(l?3:0),"#1b2a2a"),r.linha(46,u,54,u+6+(l?0:3),"#1b2a2a"),r.linha(11,u+1,3,u+7+(l?3:0),"#1b2a2a"),r.linha(45,u+1,53,u+7+(l?0:3),"#1b2a2a")}r.elipse(28,22,22,14,"#2a6a4a"),r.elipse(22,17,13,7,"#4ab87a"),r.linha(28,10,28,36,"#14301f"),r.disco(28,8,8,"#1b2a2a"),r.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),r.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),r.disco(25,8,2,"#ff3b4a"),r.disco(31,8,2,"#ff3b4a"),r.pixel(25,8,"#ffffff"),r.pixel(31,8,"#ffffff"),r.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),r.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),r.retangulo(10,33,6,3,l?"#ffd23f":"#ff7a3a"),r.retangulo(40,33,6,3,l?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:o},chefe:s}}function M_(){const n=Et(16,16,(r,l)=>{const c=l?0:1;r.disco(8,10+c,6,"#f4efe0"),r.disco(8,10+c,4,"#ff9a3a"),r.disco(8,10+c,2,"#f4efe0"),r.pixel(4,8+c,"#ff9a3a"),r.disco(9,3+c,3,"#f4efe0"),r.pixel(10,3+c,"#1b1020"),r.pixel(10,4+c,"#1b1020"),r.retangulo(7,2+c,4,1,"#8b93a8"),r.linha(8,0+c,8,1+c,"#8b93a8")}),e=Et(18,16,(r,l)=>{const c=l?5:2;r.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),r.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),r.pixel(9,6,"#8bd3ff"),r.poligono([[7,5],[1,5-c/2],[1,7-c/2],[7,8]],"#c9cdd8"),r.poligono([[11,5],[17,5-c/2],[17,7-c/2],[11,8]],"#c9cdd8"),r.poligono([[7,9],[1,9+c/2],[1,11+c/2],[7,12]],"#c9cdd8"),r.poligono([[11,9],[17,9+c/2],[17,11+c/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-c/2],[16,5-c/2],[1,10+c/2],[16,10+c/2]])r.pixel(u,Math.round(h),"#ff3b4a")}),t=Et(20,20,(r,l)=>{r.retangulo(5,4,12,6,"#c9cdd8"),r.retangulo(5,8,12,2,"#8b93a8"),r.retangulo(7,2,8,2,"#aab3c8"),r.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),r.pixel(2,7,"#ff3b4a"),r.retangulo(0,8,3,1,"#5a6176");for(const c of[7,14]){const u=l?1:-1;r.retangulo(c,10,2,5,"#aab3c8"),r.retangulo(c+u,15,2,4,"#8b93a8"),r.retangulo(c+u-1,19,4,1,"#5a6176")}r.retangulo(9,6,5,1,"#5a6176")}),i=Et(14,17,(r,l)=>{const c=l?1:0;r.disco(7+c,6,5,"#f4f4fa"),r.poligono([[3+c,5],[6+c,5],[5+c,8],[3+c,7]],"#1b1020"),r.poligono([[11+c,5],[8+c,5],[9+c,8],[11+c,7]],"#1b1020"),r.retangulo(6+c,9,2,2,"#1b1020"),r.retangulo(3,12,8,5,"#f4f4fa"),r.retangulo(3,12,8,1,"#c9cdd8"),r.retangulo(6,13,2,2,"#1b1020")}),a=Et(16,17,(r,l)=>{r.retangulo(2,9,2,5,"#8b93a8"),r.retangulo(12,9,2,5,"#8b93a8"),r.retangulo(2,14,2,2+l,"#ffd23f"),r.retangulo(12,14,2,2+l,"#ffd23f"),r.disco(8,5,4,"#3a8a5a"),r.retangulo(5,4,6,1,"#1b1020"),r.retangulo(7,4,2,4,"#1b1020"),r.retangulo(4,9,8,6,"#3a8a5a"),r.retangulo(4,12,8,1,"#2a6a4a"),r.retangulo(12,10,4,2,"#5a6176"),r.pixel(15,10,l?"#ff3b4a":"#ffd23f")}),o=Et(12,11,(r,l)=>{r.retangulo(0,0,2,11,"#8b93a8"),r.retangulo(10,0,2,11,"#8b93a8"),r.retangulo(0,5,2,1,"#5a6176"),r.retangulo(10,5,2,1,"#5a6176"),r.retangulo(2,5,8,1,"#5a6176"),r.disco(6,5,2,"#5a6176"),r.pixel(6,5,l?"#8bd3ff":"#ffffff")}),s=Et(56,38,(r,l)=>{r.disco(28,19,18,"#8b93a8"),r.disco(27,18,16,"#aab3c8"),r.retangulo(10,19,36,2,"#5a6176");for(let c=12;c<44;c+=4)r.pixel(c,22,"#5a6176"),r.pixel(c+2,16,"#5a6176");r.disco(37,11,6,"#5a6176"),r.disco(37,11,4,"#3a4156"),r.disco(37,11,2,l?"#7dff9a":"#2f8a4a"),r.pixel(37,11,"#ffffff");for(const[c,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])r.retangulo(c,u,2,1,"#e8f0ff");r.retangulo(10,19,36,1,l?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:o},chefe:s}}function __(){const n=Et(16,14,(r,l)=>{for(let c=0;c<5;c++)r.disco(3+c*2,9+Math.round(Math.sin(c*1.2+l*2.4)*2),2,c%2?"#7ad84a":"#5ab83a");r.disco(13,7,3,"#7ad84a"),r.retangulo(12,5,2,2,"#ffffff"),r.retangulo(14,5,2,2,"#ffffff"),r.pixel(13,6,"#0b1026"),r.pixel(15,6,"#0b1026")}),e=Et(18,16,(r,l)=>{r.disco(9,8,7,"#3a5aff"),r.disco(9,8,5,"#6ab0ff"),r.disco(9,8,3,"#cfe9ff"),r.pixel(9,8,"#ffffff");const c=l?0:1;r.retangulo(8+c,0,1,2,"#ffffff"),r.retangulo(8+c,14,1,2,"#ffffff"),r.retangulo(0,8-c,2,1,"#ffffff"),r.retangulo(16,8-c,2,1,"#ffffff")}),t=Et(22,18,(r,l)=>{Lp(r,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],l,"#3a2008"),r.elipse(11,10,8,6,"#6a3a1a"),r.elipse(11,10,5.5,4,"#8a5a2a"),r.linha(11,5,11,15,"#4a2a10"),r.disco(11,4,3,"#4a2a10"),r.pixel(10,4,"#ff3b4a"),r.pixel(12,4,"#ff3b4a"),r.linha(9,2,l?5:6,0,"#4a2a10"),r.linha(13,2,l?17:16,0,"#4a2a10")}),i=Et(14,17,(r,l)=>{const c=l?1:0;r.elipse(7,6+c,5.5,6,"#a8b0b8"),r.elipse(7,4+c,4,3,"#c0c8d0"),r.poligono([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],"#0b1026"),r.poligono(Ba([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],14),"#0b1026"),r.retangulo(6,14+c,2,3,"#8a929a"),r.retangulo(4,12+c,6,2,"#8a929a"),r.pixel(3,6+c,"#ffffff"),r.pixel(10,6+c,"#ffffff")}),a=Et(16,17,(r,l)=>{r.disco(8,4,3,"#f1c9a0"),r.retangulo(5,1,6,2,"#2a1a10"),r.retangulo(5,3,6,2,"#0b1026"),r.pixel(6,3,"#4a5a8a"),r.retangulo(4,8,8,8,"#14141c"),r.poligono([[7,8],[9,8],[8,12]],"#ffffff"),r.retangulo(8,9,1,4,"#14141c"),r.retangulo(2,9,2,5,"#14141c"),r.retangulo(12,9,2,3,"#14141c"),r.retangulo(13,8,3,2,"#c9cdd8"),r.pixel(15,8,l?"#ffffff":"#8bd3ff"),r.pixel(14,7,l?"#8bd3ff":"#ffffff")}),o=Et(12,8,(r,l)=>{r.elipse(6,4,4.5,2.5,"#6a3a1a"),r.elipse(5,3.5,2.5,1.2,"#8a5a2a"),r.disco(10,4,1,"#4a2a10");for(const c of[3,5,7])r.pixel(c+(l?1:0),7,"#3a2008");r.pixel(11,2,"#4a2a10"),r.pixel(11,6,"#4a2a10")}),s=Et(56,38,(r,l)=>{for(const c of[0,1,2]){const u=20+c*5;r.linha(12,u,2,u+8+(l?3:0),"#3a2008"),r.linha(44,u,54,u+8+(l?0:3),"#3a2008"),r.linha(13,u+1,3,u+9+(l?3:0),"#3a2008"),r.linha(43,u+1,53,u+9+(l?0:3),"#3a2008")}r.elipse(28,22,20,14,"#6a3a1a"),r.elipse(24,19,12,8,"#8a5a2a"),r.linha(28,9,28,36,"#4a2a10"),r.disco(28,9,8,"#4a2a10"),r.pixel(24,9,"#ff3b4a"),r.retangulo(22,7,12,3,"#0b1026"),r.retangulo(23,7,4,1,"#4a5a8a"),r.retangulo(29,7,4,1,"#4a5a8a"),r.linha(24,3,l?12:16,0,"#4a2a10"),r.linha(32,3,l?44:40,0,"#4a2a10"),r.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:o},chefe:s}}function S_(){const n=Et(14,16,(r,l)=>{r.elipse(7,11,5,5,"#8a7a4a"),r.elipse(6,10,3,3,"#b0a070"),r.retangulo(2,13,10,3,"#6a5a30");const c=l?3:1;r.poligono([[2,6],[4,6-c],[6,7]],"#a09060"),r.poligono([[12,6],[10,6-c],[8,7]],"#a09060"),r.poligono([[5,5],[7,4-c],[9,5]],"#a09060"),l&&(r.retangulo(6,3,2,2,"#d9c9a0"),r.pixel(6,2,"#d9c9a0"),r.pixel(8,2,"#d9c9a0"))}),e=Et(18,10,(r,l)=>{for(let c=0;c<6;c++)r.disco(15-c*2.5,5+Math.round(Math.sin(c*1.4+l*3)*2),c===0?2:1,c===0?"#d9b0a0":"#c49a8a");r.pixel(16,4,"#ff3b4a"),r.retangulo(16,6,2,1,"#ffffff"),r.pixel(17,5,"#1b1020")}),t=Et(20,20,(r,l)=>{r.retangulo(6,9,8,7,"#6a5a3a"),r.retangulo(6,11,8,1,"#3a3020"),r.retangulo(7,16,2,4,"#8a7a4a"),r.retangulo(11,16,2,4,"#8a7a4a"),r.retangulo(3,9,3,6,"#8a7a4a"),r.retangulo(14,9,3,6,"#8a7a4a"),r.disco(10,5,4,"#a8b0a0"),r.retangulo(7,4,6,2,"#ff9a3a"),r.pixel(8,4,"#ffffff"),r.pixel(11,4,"#ffffff"),r.retangulo(8,7,4,3,"#4a4a3a"),r.pixel(7,9,"#a8b0a0"),r.pixel(12,9,"#a8b0a0");for(const c of[4,6,13,15])r.linha(c,3,c+(c<10?-2:2),11+(l?1:0),"#2a2010");r.retangulo(14,6,5,2,"#5a6176"),r.pixel(18,6,l?"#ff3b4a":"#7a1f2a")}),i=Et(14,17,(r,l)=>{const c=l?1:0;r.poligono([[10,0+c],[13,4+c],[6,9+c],[3,6+c]],"#1f2a3a"),r.poligono([[10,1+c],[12,4+c],[8,4+c]],"#4a6a8a"),r.poligono([[3,6+c],[6,9+c],[5,11+c],[2,9+c]],"#2a3a4a"),r.pixel(3,9+c,"#ffffff"),r.pixel(5,10+c,"#ffffff"),r.pixel(7,10+c,"#ffffff"),r.retangulo(5,11+c,5,5,"#1f2a3a"),r.linha(10,11+c,13,15,"#1f2a3a")}),a=Et(16,17,(r,l)=>{r.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),r.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),r.retangulo(4,8,8,4,"#2a3a4a"),r.retangulo(5,9,6,2,l?"#7dff3a":"#3a9a1f");for(const c of[5,7,9])r.pixel(c,8,"#ffffff");r.retangulo(6,12,4,5,"#1f2a3a"),r.pixel(l?7:8,14,"#7dff3a"),r.pixel(l?8:7,15,"#7dff3a")}),o=Et(12,10,(r,l)=>{r.elipse(6,4,3.5,2.5,"#d9c9a0"),r.retangulo(5,5,2,1,"#8a7a4a");for(const c of[1,3,8,10])r.linha(c,3,c<6?c-1:c+1,8+(l?1:0),"#b0a070");r.linha(6,6,6,9,"#b0a070"),r.pixel(6,9,"#8a7a4a")}),s=Et(56,38,(r,l)=>{for(const c of[8,14,42,48])r.linha(c<28?c+6:c-6,20,c,34+(l?1:0),"#1f2a3a");r.elipse(28,24,14,12,"#1f2a3a"),r.elipse(28,26,8,8,"#2a3a4a"),r.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),r.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const c of[18,24,32,38])r.linha(c,4,c+(c<28?-4:4),1,"#4a6a8a");r.retangulo(20,20,16,5,"#0b1026");for(let c=21;c<36;c+=2)r.pixel(c,20,"#ffffff"),r.pixel(c,24,"#ffffff");r.retangulo(25,22,6,2,l?"#7dff3a":"#3a9a1f"),r.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),r.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:o},chefe:s}}function y_(){const n=Et(16,14,(r,l)=>{const c=l?0:1;r.disco(8,8+c,6,"#ffe14a"),r.disco(7,7+c,3,"#fff08a"),r.pixel(5,6+c,"#1b1020"),r.pixel(10,6+c,"#1b1020"),r.poligono([[7,8+c],[9,8+c],[8,10+c]],"#ff9a3a"),r.pixel(8,2+c,"#ffe14a"),r.pixel(9,1+c,"#ffe14a"),r.retangulo(5,13,2,1,"#ff9a3a"),r.retangulo(9,13,2,1,"#ff9a3a")}),e=Et(18,14,(r,l)=>{const c=l?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];r.poligono(c,"#2a2a3a"),r.poligono(Ba(c,18),"#2a2a3a"),r.elipse(9,8,3,3.6,"#3a3a4a"),r.disco(9,4,2,"#3a3a4a"),r.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),r.pixel(8,3,"#ffffff"),r.pixel(10,3,"#ffffff"),r.pixel(9,12,"#2a2a3a")}),t=Et(20,20,(r,l)=>{r.elipse(10,12,7.5,7,"#8a5a2a"),r.elipse(10,14,5,4.5,"#d9b88a"),r.disco(10,7,6,"#8a5a2a"),r.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),r.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),r.disco(7,7,2,"#ffe14a"),r.disco(13,7,2,"#ffe14a"),r.pixel(7,7,"#0b1026"),r.pixel(13,7,"#0b1026"),r.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const c of[7,10,13])r.pixel(c,14+(l?1:0),"#8a5a2a");r.retangulo(7,19,2,1,"#ff9a3a"),r.retangulo(11,19,2,1,"#ff9a3a")}),i=Et(14,17,(r,l)=>{const c=l?3:0;r.poligono([[7,3],[0,8-c],[3,10],[7,9]],"#ff7a2a"),r.poligono(Ba([[7,3],[0,8-c],[3,10],[7,9]],14),"#ff7a2a"),r.elipse(7,8,2.5,4,"#ffb02e"),r.disco(7,4,2,"#ffd23f"),r.pixel(6,3,"#1b1020"),r.pixel(8,3,"#1b1020"),r.pixel(7,1,"#ff3b4a"),r.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),r.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),r.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=Et(16,17,(r,l)=>{r.elipse(7,11,4.5,4.5,"#1b1020"),r.elipse(7,12,3,3,"#ffffff"),r.disco(6,6,3,"#1b1020"),r.pixel(5,5,"#ffffff"),r.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),r.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),r.pixel(15,8,l?"#ff3b4a":"#ffd23f"),r.retangulo(5,15,2,2,"#ff9a3a"),r.retangulo(8,15,2,2,"#ff9a3a"),r.retangulo(1,11,3,2,"#1b1020")}),o=Et(12,9,(r,l)=>{r.elipse(6,5,3.5,2.5,"#a8744a"),r.disco(9,3,1,"#a8744a"),r.pixel(10,3,"#0b1026"),r.pixel(11,4,"#ffb02e");const c=l?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];r.poligono(c,"#7a4a2a")}),s=Et(56,38,(r,l)=>{const c=l?0:8;r.poligono([[28,14],[2,4+c],[10,14+c],[24,24]],"#5a3a7a"),r.poligono([[28,14],[54,4+c],[46,14+c],[32,24]],"#5a3a7a"),r.poligono([[28,16],[10,10+c],[16,17+c],[26,24]],"#8a6aaa"),r.poligono([[28,16],[46,10+c],[40,17+c],[30,24]],"#8a6aaa"),r.elipse(28,24,7,10,"#3a2a5a"),r.elipse(28,26,4,7,"#d9b88a"),r.disco(28,12,5,"#3a2a5a"),r.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),r.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),r.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),r.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),r.pixel(26,13,"#0b1026"),r.pixel(30,13,"#0b1026"),r.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:o},chefe:s}}const ea=[{nome:"SLIMES",criar:()=>({m:l_(0),chefe:f_(0)})},{nome:"INVASORES",criar:x_},{nome:"BICHARADA",criar:v_},{nome:"GALÁXIA",criar:M_},{nome:"AGENTES",criar:__},{nome:"XENO",criar:S_},{nome:"REVOADA",criar:y_}],Np=(n,e,t,i,a,o,s,r=1.5)=>{let l=e,c=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*r*h*2,p=t+(a-t)*h;n.linha(l,c,d,p,o),n.linha(l+1,c,d+1,p,o),l=d,c=p}return[l,c]},b_=()=>Et(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,o]=Np(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(o),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),E_=()=>Et(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),A_=()=>Et(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),T_=()=>Et(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,o,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,o+t,s,"#6a3a8a"),n.linha(i+1,a,o+1+t,s,"#6a3a8a"),n.disco(o+t,s,2,"#ffe14a"),n.pixel(o+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,o,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,o,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),w_=()=>Et(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),R_=()=>Et(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,o]=Np(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(o),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),Wo=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:u_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:b_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:E_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:A_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:T_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:w_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:R_}],C_=()=>Et(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),P_=()=>Et(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),I_=()=>Et(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(Ba([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),L_=()=>Et(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(Ba([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(Ba([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),N_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],Za=[...ea.map((n,e)=>({nome:N_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:C_},{nome:"DISCO-MÃE",criar:P_},{nome:"NAVE-CAVEIRA",criar:I_},{nome:"CRISTAL VIVO",criar:L_}],Rl={arma:{nome:"ARMA",cor:"#ff7a59",icone:"⌁",plural:"ARMAS"},motor:{nome:"MOTOR",cor:"#38c8ff",icone:"»",plural:"MOTORES"},reator:{nome:"REATOR",cor:"#7dff9a",icone:"◉",plural:"REATOR"},placa:{nome:"PLACA",cor:"#ffd23f",icone:"⌘",plural:"PLACAS"},modulo:{nome:"MÓDULO",cor:"#c58bff",icone:"⬡",plural:"MÓDULOS"}},po=[{id:"explorador",nome:"Explorador M-1",custo:0,massa:40,dissipacao:22,bonus:{},resumo:"Equilibrado e fácil de reparar.",encaixes:[{tipo:"arma",x:12,y:8},{tipo:"motor",x:12,y:17},{tipo:"reator",x:12,y:12},{tipo:"placa",x:8,y:11},{tipo:"modulo",x:17,y:14}]},{id:"interceptor",nome:"Interceptor Flecha",custo:8,massa:34,dissipacao:20,bonus:{velocidade:.14,dano:.08,vida:-1},resumo:"Leve, afilado e agressivo: duas armas e dois motores, mas sem espaço para módulos.",encaixes:[{tipo:"arma",x:8,y:8},{tipo:"arma",x:16,y:8},{tipo:"motor",x:8,y:17},{tipo:"motor",x:16,y:17},{tipo:"reator",x:12,y:12},{tipo:"placa",x:12,y:8}]},{id:"blindado",nome:"Couraçado Tatu",custo:12,massa:62,dissipacao:26,bonus:{vida:3,armadura:2,velocidade:-.1},resumo:"Placas grossas e estrutura pesada: duas armas, dois módulos e muita resistência.",encaixes:[{tipo:"arma",x:7,y:8},{tipo:"arma",x:17,y:8},{tipo:"motor",x:12,y:18},{tipo:"reator",x:12,y:12},{tipo:"placa",x:12,y:8},{tipo:"modulo",x:6,y:15},{tipo:"modulo",x:18,y:15}]},{id:"modular",nome:"Chassi Colmeia",custo:18,massa:48,dissipacao:30,bonus:{vida:1,recarga:.12,xp:.12},resumo:"Baias e conectores experimentais: três placas, dois módulos e dois motores.",encaixes:[{tipo:"arma",x:12,y:8},{tipo:"motor",x:8,y:17},{tipo:"motor",x:16,y:17},{tipo:"reator",x:12,y:12},{tipo:"placa",x:8,y:9},{tipo:"placa",x:16,y:9},{tipo:"placa",x:12,y:16},{tipo:"modulo",x:5,y:12},{tipo:"modulo",x:19,y:12}]}],Ic=[{id:"canhao",tipo:"arma",nome:"Canhão de Pulso",custo:0,massa:6,consumo:4,calor:3,proj:1,resumo:"Bobina simples e eletroímã de disparo: confiável."},{id:"duplo",tipo:"arma",nome:"Canhão Geminado",custo:8,massa:10,consumo:7,calor:5,proj:2,bonus:{dano:-.06},resumo:"Dois eletroímãs sincronizados por um relé."},{id:"rail",tipo:"arma",nome:"Railgun Linear",custo:14,massa:14,consumo:12,calor:8,proj:1,bonus:{dano:.35,perfura:2,cadencia:-.18},resumo:"Dois trilhos de cobre e um banco de capacitores aceleram o projétil."},{id:"dispersor",tipo:"arma",nome:"Dispersor Tridente",custo:16,massa:12,consumo:9,calor:6,proj:3,bonus:{cadencia:.08,dano:-.18},resumo:"Três bocas cobrem uma área maior."},{id:"bobina",tipo:"arma",nome:"Bobina Tesla",custo:15,massa:9,consumo:10,calor:4,proj:1,bonus:{critico:.1,perfura:1},resumo:"Arco elétrico que salta entre eletrodos e atravessa alvos."},{id:"quimico",tipo:"motor",nome:"Foguete Químico",custo:0,massa:8,consumo:0,calor:5,resumo:"Robusto, quente e sem eletrônica: funciona até sem energia."},{id:"ionico",tipo:"motor",nome:"Matriz Iônica",custo:6,massa:6,consumo:4,calor:1,bonus:{velocidade:.12},resumo:"Jatos frios de íons, aceleração suave e precisa."},{id:"plasma",tipo:"motor",nome:"Turbina de Plasma",custo:12,massa:11,consumo:9,calor:6,bonus:{velocidade:.22,recarga:.08},resumo:"Empuxo violeta de altíssima energia."},{id:"vetorial",tipo:"motor",nome:"Bocal Vetorial",custo:18,massa:9,consumo:6,calor:3,bonus:{velocidade:.16,armadura:1,giro:.35},resumo:"Microatuadores giram o bocal e corrigem a trajetória."},{id:"capacitor",tipo:"reator",nome:"Banco de Capacitores",custo:0,massa:6,potencia:14,calor:4,resumo:"Células simples de descarga rápida."},{id:"fusao",tipo:"reator",nome:"Microfusão",custo:8,massa:10,potencia:26,calor:9,bonus:{recarga:.15},resumo:"Plasma confinado num anel magnético."},{id:"quantico",tipo:"reator",nome:"Núcleo Quântico",custo:15,massa:12,potencia:34,calor:12,bonus:{recarga:.25,escudo:1},resumo:"Energia instável dobrada no espaço."},{id:"solar",tipo:"reator",nome:"Reator Fotônico",custo:12,massa:7,potencia:20,calor:2,bonus:{recarga:.08,xp:.18,ima:.2},resumo:"Converte luz e cristais em energia, quase sem calor."},{id:"analogica",tipo:"placa",nome:"Computador Analógico",custo:0,massa:2,consumo:2,calor:1,resumo:"Poucos chips, nenhuma surpresa."},{id:"mira",tipo:"placa",nome:"Coprocessador de Mira",custo:7,massa:3,consumo:4,calor:2,bonus:{dano:.08,critico:.08},resumo:"Prevê o movimento dos alvos e corrige os disparos."},{id:"coletor",tipo:"placa",nome:"LIDAR Coletor",custo:7,massa:3,consumo:4,calor:1,bonus:{xp:.15,ima:.45},resumo:"Varre cristais e rotas de aproximação."},{id:"overclock",tipo:"placa",nome:"Placa Overclock",custo:16,massa:4,consumo:8,calor:5,bonus:{dano:.16,recarga:.18,vida:-1},resumo:"Clock brutal com refrigeração improvisada."},{id:"giroscopio",tipo:"placa",nome:"Giroscópio MEMS",custo:9,massa:3,consumo:5,calor:1,bonus:{giro:.5,velocidade:.04},resumo:"Sensor de rotação: a nave vira muito mais rápido."},{id:"dissipador",tipo:"modulo",nome:"Dissipador de Calor",custo:6,massa:4,consumo:1,calor:0,dissipacao:10,resumo:"Aletas de cobre e uma ventoinha minúscula."},{id:"barreira",tipo:"modulo",nome:"Gerador de Barreira",custo:14,massa:6,consumo:7,calor:3,bonus:{escudo:1},resumo:"Projeta uma barreira que absorve um golpe."},{id:"blindagem",tipo:"modulo",nome:"Placa Balística",custo:10,massa:10,consumo:0,calor:1,bonus:{armadura:2,vida:1},resumo:"Cerâmica e liga de titânio: pesada e resistente."},{id:"bateria",tipo:"modulo",nome:"Banco de Baterias",custo:8,massa:7,consumo:0,calor:1,potencia:10,resumo:"Células extras de lítio para o reator respirar."},{id:"ima",tipo:"modulo",nome:"Bobina de Atração",custo:7,massa:3,consumo:3,calor:1,bonus:{ima:.4},resumo:"Eletroímã que puxa cristais de longe."}],es=[{nome:"ORIGINAL",casco:null,aleta:null,mostra:["#4aa8ff","#ff7a59"]},{nome:"CORRIDA",casco:"#d9363e",aleta:"#ffd23f",mostra:["#d9363e","#ffd23f"]},{nome:"MILITAR",casco:"#4f7a4a",aleta:"#c9cdd8",mostra:["#4f7a4a","#c9cdd8"]},{nome:"NEON",casco:"#7b4dff",aleta:"#38e8ff",mostra:["#7b4dff","#38e8ff"]},{nome:"FOSCO",casco:"#2b2f45",aleta:"#ff3bd4",mostra:["#2b2f45","#ff3bd4"]},{nome:"OURO",casco:"#d9a93a",aleta:"#8b93a8",mostra:["#d9a93a","#8b93a8"]}],Pf={clock:{nome:"CLOCK DA ELETRÔNICA",curto:"CLOCK",dica:"Mais clock = mais dano e cadência, mais consumo e calor.",passos:[{nome:"ECO",consumo:.85,calor:.8,desempenho:.94},{nome:"NORMAL",consumo:1,calor:1,desempenho:1},{nome:"TURBO",consumo:1.15,calor:1.3,desempenho:1.08},{nome:"OVERCLOCK",consumo:1.32,calor:1.7,desempenho:1.16}]},tensao:{nome:"TENSÃO DO REATOR",curto:"TENSÃO",dica:"Mais tensão = mais potência, mais calor.",passos:[{nome:"ECO",producao:.85,calor:.8},{nome:"NORMAL",producao:1,calor:1},{nome:"ALTA",producao:1.18,calor:1.3},{nome:"CRÍTICA",producao:1.38,calor:1.75}]}},D_=new Map(Ic.map(n=>[n.id,n])),za=n=>D_.get(n)||null,la=n=>po.find(e=>e.id===n)||null,U_=n=>Ic.filter(e=>e.tipo===n),If={arma:"canhao",motor:"quimico",reator:"capacitor"},O_={...If,placa:"analogica"};function xc(){const n=po[0];return{chassi:n.id,pecas:n.encaixes.map(e=>O_[e.tipo]||null),clock:1,tensao:1,pintura:0}}function mn(n){const e=la(n?.chassi)||po[0];let t;if(Array.isArray(n?.pecas))t=n.pecas.map(za);else{const r={arma:n?.arma,motor:n?.propulsor,reator:n?.reator,placa:n?.eletronica},l={};t=e.encaixes.map(c=>l[c.tipo]||!r[c.tipo]?null:(l[c.tipo]=!0,za(r[c.tipo])))}const i=e.encaixes.map(()=>null),a=[];t.forEach((r,l)=>{r&&(e.encaixes[l]?.tipo===r.tipo?i[l]=r.id:a.push(r))});for(const r of a){const l=e.encaixes.findIndex((c,u)=>c.tipo===r.tipo&&!i[u]);l>=0&&(i[l]=r.id)}for(const r of Object.keys(If)){const l=e.encaixes.map((c,u)=>c.tipo===r?u:-1).filter(c=>c>=0);l.length&&!l.some(c=>i[c])&&(i[l[0]]=If[r])}const o=r=>Math.max(0,Math.min(3,Number.isFinite(r)?Math.round(r):1)),s=Number.isInteger(n?.pintura)&&n.pintura>=0&&n.pintura<es.length?n.pintura:0;return{chassi:e.id,pecas:i,clock:o(n?.clock??1),tensao:o(n?.tensao??1),pintura:s}}function Dp(){return[...po.filter(n=>n.custo===0).map(n=>n.id),...Ic.filter(n=>n.custo===0).map(n=>n.id)]}function F_(n=[]){const e=new Set([...po.map(t=>t.id),...Ic.map(t=>t.id)]);return[...new Set([...Dp(),...Array.isArray(n)?n:[]])].filter(t=>e.has(t))}function ia(n){const e=mn(n);return la(e.chassi).encaixes.map((i,a)=>({...i,i:a,peca:za(e.pecas[a])}))}const Ia=(n,e)=>n.reduce((t,i)=>t+(e(i)||0),0),ah=(()=>{const n=xc();return po[0].massa+Ia(n.pecas.map(za).filter(Boolean),t=>t.massa)})();function Up(n){const e=mn(n),t=la(e.chassi),i=e.pecas.map(za).filter(Boolean),a=Pf.clock.passos[e.clock],o=Pf.tensao.passos[e.tensao],s=i.find(x=>x.tipo==="reator"),r=t.massa+Ia(i,x=>x.massa),l=Ia(i,x=>x.consumo)*a.consumo,c=(s?.potencia||0)*o.producao+Ia(i.filter(x=>x.tipo!=="reator"),x=>x.potencia),u=Ia(i.filter(x=>x.tipo!=="reator"),x=>x.calor)*a.calor+(s?.calor||0)*o.calor,h=t.dissipacao+Ia(i,x=>x.dissipacao),d=l<=c?1:Math.max(.55,c/l),p=u/Math.max(1,h),m=p<=1?1:Math.max(.55,1-.65*(p-1)),_=Math.max(.72,Math.min(1.3,Math.sqrt(ah/r))),v=[];return d<1&&v.push({tipo:"energia",texto:`SUBTENSÃO: faltam ${Math.ceil(l-c)} W. Cadência e recarga caem ${Math.round((1-(.5+.5*d))*100)}%.`}),m<1&&v.push({tipo:"calor",texto:`SUPERAQUECIMENTO: ${Math.round((p-1)*100)}% acima do limite. Dano e cadência caem ${Math.round((1-m)*100)}%.`}),!v.length&&p>.88&&v.push({tipo:"aviso",texto:"Calor perto do limite: não dá para ligar mais nada quente."}),{massa:r,massaRef:ah,consumo:l,producao:c,calor:u,dissipacao:h,razaoCalor:p,fatorEnergia:d,fatorCalor:m,fatorMassa:_,razaoEnergia:c>0?l/c:9,alertas:v,clock:a,tensao:o,status:d<1&&m<1?"critico":d<1?"subtensao":m<1?"superaquecimento":"estavel"}}function Op(n){const e=mn(n),t=la(e.chassi),i=e.pecas.map(za).filter(Boolean),a=Up(e),o=u=>(t.bonus[u]||0)+Ia(i,h=>h.bonus?.[u]),s=i.filter(u=>u.tipo==="arma"),r=Math.max(1,Ia(s,u=>u.proj)),l=.5+.5*a.fatorEnergia,c=a.clock.desempenho;return{velocidade:Math.max(.35,(1+o("velocidade"))*a.fatorMassa*(.6+.4*a.fatorEnergia)),dano:Math.max(.3,(1+o("dano"))*c*a.fatorCalor),cadencia:Math.max(.3,(1+o("cadencia"))*c*a.fatorCalor),recarga:Math.max(.3,(1+o("recarga"))*l),xp:1+o("xp"),ima:1+o("ima"),giro:Math.max(.4,1+o("giro")),vida:o("vida"),armadura:o("armadura"),projeteis:r-1,perfura:o("perfura"),critico:o("critico"),escudo:o("escudo"),diagnostico:a}}const Fp=n=>`${n>0?"+":""}${Math.round(n*100)}%`;function B_(n){const e=n.bonus||{},t=[],i=(a,o,s=Fp)=>{e[a]&&t.push(`${s(e[a])} ${o}`)};return n.proj>1&&t.push(`${n.proj} projéteis`),i("dano","dano"),i("cadencia","cadência"),i("perfura","perfuração",a=>`${a>0?"+":""}${a}`),i("critico","crítico"),i("velocidade","velocidade"),i("giro","giro"),i("recarga","recarga"),i("xp","XP"),i("ima","ímã"),i("vida","vida",a=>`${a>0?"+":""}${a}`),i("armadura","armadura",a=>`${a>0?"+":""}${a}`),i("escudo","escudo",a=>`${a>0?"+":""}${a}`),n.potencia&&t.push(`+${n.potencia} W`),n.dissipacao&&t.push(`+${n.dissipacao} °C resfriados`),t.length?t.join(" · "):"Sem modificadores."}function oh(n){const e=n.bonus,t=[],i=(a,o,s=Fp)=>{e[a]&&t.push(`${s(e[a])} ${o}`)};return i("velocidade","velocidade"),i("dano","dano"),i("recarga","recarga"),i("xp","XP"),i("vida","vida",a=>`${a>0?"+":""}${a}`),i("armadura","armadura",a=>`${a>0?"+":""}${a}`),t.length?t.join(" · "):"Sem modificadores."}function z_(n){const e=[],t=(a,o)=>{Math.abs(o-1)>.005&&e.push({nome:a,valor:`${o>1?"+":""}${Math.round((o-1)*100)}%`,bom:o>1})};t("VEL",n.velocidade),t("DANO",n.dano),t("CAD",n.cadencia),t("REC",n.recarga),t("XP",n.xp),t("ÍMÃ",n.ima),t("GIRO",n.giro);const i=(a,o,s="+")=>{o&&e.push({nome:a,valor:`${o>0?s:""}${o}`,bom:o>0})};return i("VIDA",n.vida),i("ARM",n.armadura),i("TIROS",n.projeteis),i("PERF",n.perfura),i("ESCUDO",n.escudo),n.critico&&e.push({nome:"CRÍT",valor:`+${Math.round(n.critico*100)}%`,bom:!0}),e}function G_(n){const e=mn(n),t=la(e.chassi),i=e.pecas.map(za).filter(Boolean),a=i.find(s=>s.tipo==="arma"),o=i.find(s=>s.tipo==="motor");return`${t.nome} · ${a?.nome||"sem arma"} · ${o?.nome||"sem motor"}`}function rh(n){const e=mn(n),t={chassi:e.chassi};return e.pecas.forEach((i,a)=>{const o=la(e.chassi).encaixes[a].tipo;i&&!t[o]&&(t[o]=i)}),t}const gn=24,sh={padrao:{aleta:"#ff7a59",metal:"#8b93a8",metal2:"#c9cdd8",metalEscuro:"#5a6176",casco:"#4aa8ff",nucleo:"#8bd3ff",nucleo2:"#7dff9a",brilho:"#ffffff",alerta:"#ff3b4a",contorno:"#0b1026",realce:"#8bd3ff",ouro:"#ffd23f"},yas:{aleta:"#b7683f",metal:"#b9a58b",metal2:"#e8d5b8",metalEscuro:"#76513d",casco:"#496044",nucleo:"#f2d7ae",nucleo2:"#e5b85c",brilho:"#fff1d7",alerta:"#d88b55",contorno:"#241b17",realce:"#d8b68e",ouro:"#ffd23f"},fer:{aleta:"#6c5cff",metal:"#91a0c8",metal2:"#b8c8ef",metalEscuro:"#354582",casco:"#172b59",nucleo:"#55e2e0",nucleo2:"#8b6cff",brilho:"#d6fbff",alerta:"#4fe7ff",contorno:"#050817",realce:"#55e2e0",ouro:"#ffd23f"}},hu=n=>sh[n]||sh.padrao,Lf={quimico:["#fff0a0","#ffc83d","#ff7a3a"],ionico:["#ffffff","#d6fbff","#55e2e0"],plasma:["#ffffff","#d6a4ff","#6c5cff"],vetorial:["#ffffff","#b8ffd0","#7dff9a"]},Bp={capacitor:["#8bd3ff","#2f8cff"],fusao:["#ffc14a","#ff5a2a"],quantico:["#d6a4ff","#6c5cff"],solar:["#fff3a0","#e5b85c"]};function zp(n,e,t){const i=(a,o,s,r,l)=>n.retangulo(a,o,s,r,l);if(e==="interceptor")n.poligono([[9,9],[2,20],[9,17]],t.aleta),n.poligono([[15,9],[22,20],[15,17]],t.aleta),n.poligono([[9,11],[4,17],[9,16]],t.metalEscuro),n.poligono([[15,11],[20,17],[15,16]],t.metalEscuro),n.elipse(12,12.5,4.2,8,t.casco),i(11,2,2,4,t.metal2),n.pixel(11,2,t.brilho);else if(e==="blindado"){i(11,17,2,4,t.aleta),n.disco(12,12,6,t.casco);for(const[a,o,s,r]of[[3,5,4,6],[17,5,4,6],[3,13,4,6],[17,13,4,6]])i(a,o,s,r,t.metal),i(a+1,o+1,s-2,r-2,t.metalEscuro),i(a,o,s,1,t.metal2);i(7,11,10,2,t.metalEscuro)}else if(e==="modular"){n.poligono([[12,5.5],[18.5,9],[18.5,15.5],[12,19],[5.5,15.5],[5.5,9]],t.casco);for(const[a,o]of[[4,8],[20,8],[4,16],[20,16]])n.disco(a,o,2,t.metal),n.pixel(a,o,t.nucleo2);for(const[a,o,s,r]of[[6,9,5,8],[18,9,19,8],[6,15,5,16],[18,15,19,16]])n.linha(a,o,s,r,t.metalEscuro);i(6,12,12,1,t.metalEscuro)}else i(5,11,3,2,t.aleta),i(16,11,3,2,t.aleta),i(11,5,2,3,t.aleta),i(11,16,2,3,t.aleta),n.disco(12,12,5,t.casco)}function kr(n,e,t,i,a){const o=(l,c,u,h,d)=>n.retangulo(t+l,i+c,u,h,d),s=(l,c,u)=>n.pixel(t+l,i+c,u),r=(l,c,u,h)=>n.disco(t+l,i+c,u,h);switch(e.id){case"canhao":o(-2,-1,4,3,a.metal),o(-1,-4,2,3,a.metal2),o(-1,-5,2,1,"#ffe14a");break;case"duplo":o(-3,-1,6,3,a.metal),o(-3,-4,2,3,a.metal2),o(1,-4,2,3,a.metal2),o(-3,-5,2,1,"#ffe14a"),o(1,-5,2,1,"#ffe14a");break;case"rail":o(-2,-1,4,3,a.metal),o(-2,-7,1,6,a.metal2),o(1,-7,1,6,a.metal2),o(-1,-7,2,6,"#38c8ff"),s(-2,-8,a.brilho),s(1,-8,a.brilho);break;case"dispersor":o(-4,-1,8,3,a.metal),o(-4,-3,1,2,a.metal2),o(-1,-4,2,3,a.metal2),o(3,-3,1,2,a.metal2),s(-4,-4,"#ffe14a"),o(-1,-5,2,1,"#ffe14a"),s(3,-4,"#ffe14a");break;case"bobina":o(-2,-1,4,3,a.metal),o(-1,-4,2,3,"#a56bff"),s(-1,-3,"#e6d2ff"),s(0,-2,"#e6d2ff"),r(0,-6,1,"#e6d2ff"),s(0,-7,"#ffffff");break;case"quimico":o(-2,-2,4,4,a.metal),o(-2,-2,4,1,a.metal2),o(-1,2,2,1,"#2d3348"),s(0,1,"#ffa23a");break;case"ionico":o(-2,-2,4,3,a.metal),o(-2,1,4,1,"#55e2e0"),o(-1,2,2,1,"#d6fbff");break;case"plasma":r(0,0,2,"#6c5cff"),r(0,0,1,"#d6fbff"),o(-2,2,4,1,"#a56bff");break;case"vetorial":o(-3,-1,1,3,a.metal),o(-1,-2,2,4,a.metal2),o(2,-1,1,3,a.metal),s(-3,2,"#7dff9a"),o(-1,2,2,1,"#7dff9a"),s(2,2,"#7dff9a");break;case"capacitor":r(0,0,3,"#2f6fb0"),r(0,0,2,Bp.capacitor[0]),s(-3,0,a.metalEscuro),s(3,0,a.metalEscuro),s(0,0,a.brilho);break;case"fusao":r(0,0,3,"#ff5a2a"),r(0,0,2,"#ffc14a");for(const[l,c]of[[-3,-3],[3,-3],[-3,3],[3,3]])s(l,c,"#ffd23f");s(0,0,a.brilho);break;case"quantico":r(0,0,3,"#6c5cff"),r(0,0,2,"#d6a4ff");for(const[l,c]of[[0,-4],[4,0],[0,4],[-4,0]])s(l,c,"#e6d2ff");s(0,0,a.brilho);break;case"solar":o(-7,-1,3,3,"#3755a8"),o(5,-1,3,3,"#3755a8"),s(-6,0,"#7da6ff"),s(6,0,"#7da6ff"),r(0,0,3,"#e5b85c"),r(0,0,2,"#fff3a0"),s(0,0,a.brilho);break;case"analogica":o(-1,-1,3,3,"#3b4a45"),s(0,0,"#8bd3ff");break;case"mira":o(-1,-1,3,3,"#1f6b4a"),s(1,-1,"#ff3b4a"),s(0,0,"#ff3b4a"),s(-1,1,a.metal2);break;case"coletor":o(-1,-1,3,3,"#1f6b4a"),o(-1,-2,3,1,"#55e2e0"),s(0,0,"#d6fbff");break;case"overclock":o(-1,-1,3,3,"#1f6b4a"),s(-1,-1,"#7dff9a"),s(1,1,"#7dff9a"),s(0,0,"#ff7a3a"),s(1,-1,"#ffd23f");break;case"giroscopio":r(0,0,2,a.metal2),s(0,0,"#38c8ff"),s(-2,0,a.metalEscuro),s(2,0,a.metalEscuro);break;case"dissipador":o(-2,-2,4,4,a.metal2),o(-1,-2,1,4,"#8bd3ff"),o(1,-2,1,4,"#8bd3ff");break;case"barreira":r(0,0,2,"#2f8cff"),r(0,0,1,"#d6fbff"),s(-3,0,"#38c8ff"),s(3,0,"#38c8ff"),s(0,-3,"#38c8ff"),s(0,3,"#38c8ff");break;case"blindagem":o(-2,-3,4,6,a.metalEscuro),o(-2,-3,4,1,a.metal2),s(-1,-1,a.metal2),s(0,1,a.metal2);break;case"bateria":o(-2,-2,4,4,"#10131f"),o(-1,-1,1,2,"#7dff9a"),o(1,-1,1,2,"#7dff9a"),s(0,-2,"#ffd23f");break;case"ima":o(-2,-2,1,4,"#ff3b4a"),o(1,-2,1,4,"#3f8cff"),o(-2,1,4,1,a.metal2);break}}function Nf(n){return ia(n).filter(e=>e.tipo==="motor"&&e.peca).map(e=>({x:e.x,y:e.y+3,tipo:e.peca.id,cores:Lf[e.peca.id]||Lf.quimico}))}function Cl(n,e,t){const i=vn(gn,gn);e(i),i.contorno(t),n.c.getContext("2d").drawImage(i.c,0,0)}function Df(n,e="padrao",t){const i=mn(t),a={...hu(e)},o=vn(gn,gn),s=es[i.pintura];s?.casco&&(a.casco=s.casco,a.aleta=s.aleta);const r=e==="yas",l=e==="fer";zp(o,i.chassi,a);const c=ia(i);for(const h of c)h.peca&&(h.tipo==="motor"||h.tipo==="modulo"||h.tipo==="placa")&&Cl(o,d=>kr(d,h.peca,h.x,h.y,a),a.contorno);const u=c.find(h=>h.tipo==="reator");if(u?.peca){const h=n.nucleo>=4&&u.peca.id==="capacitor"?"#ffc14a":null;Cl(o,d=>kr(d,u.peca,u.x,u.y,a),a.contorno),h&&o.disco(u.x,u.y,2,h)}if(r){for(const[h,d]of[[10,10],[14,10],[10,14],[14,14]])o.pixel(h,d,"#91a56b");o.pixel(12,9,"#e5b85c")}if(l){for(const[h,d]of[[9,10],[9,11],[9,12],[10,12],[11,12]])o.pixel(h,d,"#9daaff");o.pixel(11,8,"#55e2e0"),o.pixel(12,7,"#d6fbff")}for(const h of c)h.peca&&h.tipo==="arma"&&Cl(o,d=>kr(d,h.peca,h.x,h.y,a),a.contorno);if(n.motor>=2&&(o.retangulo(4,15,2,3,a.metal),o.retangulo(18,15,2,3,a.metal),o.pixel(4,18,"#ffa23a"),o.pixel(19,18,"#ffa23a")),n.casco>=1)for(const[h,d]of[[4,4],[18,4],[4,19],[18,19]])o.retangulo(h,d,2,2,a.metal),n.casco>=3&&o.pixel(h,d,a.brilho);return n.ima>=1&&(o.pixel(12,1,a.alerta),n.ima>=3&&o.retangulo(14,1,2,1,a.metal2)),o.contorno(n.casco>=5?"#ffd23f":n.casco>=3?a.realce:a.contorno),{c:o.c,branca:uu(o.c)}}function k_(n,e="padrao"){const t=hu(e),i=vn(16,16),a={arma:[8,11],motor:[8,7],reator:[8,8],placa:[8,8],modulo:[8,8]},[o,s]=a[n.tipo]||[8,8];return n.id==="solar"?kr(i,n,8,8,t):kr(i,n,o,s,t),i.contorno(t.contorno),i.c}function V_(n,e="padrao"){const t=hu(e),i=vn(gn,gn);return zp(i,n,t),i.disco(12,12,2,t.nucleo),i.contorno(t.contorno),i.c}function H_(n,e,t,i,a={}){const{escala:o=11,tema:s="padrao",selecionado:r=-1,previa:l=-1,teste:c=0,calor:u=0}=a,h=o,d=gn*h;n.imageSmoothingEnabled=!1,n.clearRect(0,0,d,d),n.fillStyle="rgba(111, 232, 255, 0.07)";for(let _=0;_<=gn;_+=2)n.fillRect(_*h,0,1,d),n.fillRect(0,_*h,d,1);n.strokeStyle="rgba(111, 232, 255, 0.22)",n.lineWidth=2,n.beginPath(),n.arc(d/2,d/2,d*.46,0,Math.PI*2),n.stroke();const p=ia(t);for(const _ of Nf(t)){const v=c?1.8:1,x=Math.round((3+Math.floor((Math.sin(i*22+_.x)+1)*1.5))*v*(_.tipo==="plasma"?1.5:1));for(let b=0;b<x;b++){n.fillStyle=b<x*.35?_.cores[0]:b<x*.7?_.cores[1]:_.cores[2];const w=b<x*.6?2:1;n.fillRect((_.x-(w===2?1:0))*h,(_.y+b)*h,w*h,h)}}n.drawImage(e,0,0,gn,gn,0,0,d,d);const m=p.find(_=>_.tipo==="reator");if(m?.peca){const _=Bp[m.peca.id]?.[0]||"#8bd3ff",v=.25+.25*(.5+.5*Math.sin(i*4))+(c?.25:0);n.globalAlpha=v,n.fillStyle=_,n.beginPath(),n.arc((m.x+.5)*h,(m.y+.5)*h,h*3.4,0,Math.PI*2),n.fill(),n.globalAlpha=1}if(c){for(const _ of p)if(_.tipo==="arma"&&_.peca&&Math.floor(i*9+_.x)%2){const v=_.peca.proj||1,x=_.peca.id==="rail"?"#38c8ff":_.peca.id==="bobina"?"#d6a4ff":"#ffe14a";for(let b=0;b<v;b++){const w=(b-(v-1)/2)*2;n.fillStyle=x,n.fillRect((_.x+w)*h,(_.y-9-i*40%8)*h,h,h*3)}}}u>0&&(n.globalAlpha=Math.min(.22,u*.12)*(.6+.4*Math.sin(i*14)),n.fillStyle="#ff5a2a",n.beginPath(),n.arc(d/2,d/2,d*.4,0,Math.PI*2),n.fill(),n.globalAlpha=1);for(const _ of p){const v=_.x*h+h/2,x=_.y*h+h/2,b=h*2.6,w=_.i===r,E=_.i===l;n.strokeStyle=w?"#ffe14a":E?"#ffb347":_.peca?"rgba(111, 232, 255, 0.35)":"rgba(255, 255, 255, 0.55)",n.lineWidth=2,!_.peca||w?n.setLineDash(w?[]:[4,4]):n.setLineDash([2,5]),n.strokeRect(v-b,x-b,b*2,b*2),n.setLineDash([])}}const Js=11,W_={estavel:["ok","● SISTEMA ESTÁVEL"],subtensao:["ruim","▲ SUBTENSÃO"],superaquecimento:["ruim","▲ SUPERAQUECIMENTO"],critico:["ruim","▲ SUBTENSÃO E SUPERAQUECIMENTO"]};function X_({el:n,obterDados:e,tema:t,bip:i,aoMudar:a}){let o=0,s=null,r=0,l=null,c="";const u=n("div","gar"),h=document.createElement("canvas");h.width=h.height=gn*Js,h.className="gar-canvas";const d=h.getContext("2d"),p=()=>e(),m=U=>p().pecasLiberadas.includes(U);let _=null,v="";function x(){const U=mn(p().projeto);if(!s)return U;if(s.chassi)return mn({...U,chassi:s.chassi});const X=[...U.pecas];return X[s.slot]=s.peca,mn({...U,pecas:X})}function b(U){const X=JSON.stringify(U);X!==v&&(v=X,_=Df({casco:0,motor:0,nucleo:0,ima:0},t,U).c)}const w=U=>{p().projeto=mn(U),a()};function E(U,X){return m(U)?!0:p().moedas<X?!1:(p().moedas-=X,p().pecasLiberadas.push(U),!0)}const y=()=>{i(520,.06,"square",.045),i(880,.1,"triangle",.05,.07),i(1320,.16,"sine",.045,.15)};function T(U,X){const j=za(X);if(!E(X,j.custo))return;const be=mn(p().projeto);be.pecas[U]=X,s=null,l={slot:U,t0:performance.now()/1e3},y(),w(be),ue()}function I(U){const X=mn(p().projeto);X.pecas[U]=null,s=null,l={slot:U,t0:performance.now()/1e3},i(300,.06,"square",.04),i(200,.1,"square",.04,.06),w(X),ue()}function S(U){const X=la(U);E(U,X.custo)&&(s=null,o=0,l={slot:-1,t0:performance.now()/1e3},y(),w({...mn(p().projeto),chassi:U}),ue())}function R(U,X){const j=mn(p().projeto);j[U]=X,U==="pintura"?(i(700+X*90,.05,"triangle",.045),i(1e3+X*60,.07,"sine",.04,.05)):(i(400+X*140,.05,"square",.04),i(200+X*70,.04,"sawtooth",.03,.03)),w(j),ue()}function L(){r=performance.now()/1e3+2.6;const U=mn(p().projeto),X=ia(U).filter(j=>j.tipo==="motor"&&j.peca).length;for(let j=0;j<10;j++)i(70+j*9+X*12,.28,"sawtooth",.025,j*.24);ia(U).filter(j=>j.tipo==="arma"&&j.peca).forEach((j,be)=>{const Ee={canhao:520,duplo:600,rail:900,dispersor:700,bobina:1100}[j.peca.id]||600;for(let $e=0;$e<7;$e++)i(Ee-$e*8,.05,j.peca.id==="rail"?"sawtooth":"square",.03,.2+$e*.3+be*.1)}),c="TESTE NA BANCADA: ligando motores, reator e armas.",ue()}function O(U,X,j,be,Ee=1.6,$e=!0){const ke=j>0?X/j:9,st=ke>1?"ruim":ke>.85?"aviso":"ok",oe=n("div","gar-medidor"),de=n("div",`gar-barra ${st}`),Le=n("i");if(Le.style.width=`${Math.min(100,ke/Ee*100)}%`,de.append(Le),$e){const Qe=n("b");Qe.style.left=`${100/Ee}%`,de.append(Qe)}return oe.append(n("span","gar-nome",U),de,n("span",`gar-valor ${st}`,be)),oe}function V(U,X,j){const be=n("div","gar-topo"),Ee=n("div","gar-nome-projeto");Ee.append(n("small",null,s?"PRÉVIA (NADA FOI INSTALADO)":"PROJETO ATUAL"),n("b",null,G_(U)));const $e=n("div","gar-chips"),ke=z_(j);ke.length||$e.append(n("span","gar-chip","CONFIGURAÇÃO EQUILIBRADA"));for(const st of ke){const oe=n("span",`gar-chip ${st.bom?"bom":"ruim"}`);oe.append(n("em",null,st.nome),document.createTextNode(` ${st.valor}`)),$e.append(oe)}return be.append(Ee,$e),be}function Y(U){const X=n("div","gar-banca");X.append(h);for(const j of ia(U)){const be=Rl[j.tipo],Ee=n("button",`gar-slot${j.i===o?" sel":""}${j.peca?"":" vazio"}${s&&s.slot===j.i?" previa":""}`);Ee.style.left=`${(j.x+.5)/gn*100}%`,Ee.style.top=`${(j.y+.5)/gn*100}%`,Ee.style.setProperty("--c",be.cor),Ee.title=`${be.nome}: ${j.peca?j.peca.nome:"vazio"}`,Ee.append(n("span","gar-slot-tipo",j.peca?"":be.nome)),Ee.onclick=()=>{o=j.i,s=null,ue()},X.append(Ee)}return X}function H(U,X){const j=Pf[U],be=n("div","gar-ajuste"),Ee=n("button","gar-knob");Ee.title="Girar o seletor";const $e=n("i");$e.style.transform=`rotate(${-135+X*90}deg)`,Ee.append($e),Ee.onclick=()=>R(U,(X+1)%4);const ke=n("div","gar-ajuste-texto");ke.append(n("b",null,j.curto),n("small",null,j.dica));const st=n("div","gar-passos");return j.passos.forEach((oe,de)=>{const Le=n("button",`gar-passo${de===X?" on":""}${de===3?" max":""}`,oe.nome);Le.onclick=()=>R(U,de),st.append(Le)}),be.append(Ee,ke,st),be}function Z(U){const X=n("div","gar-pintura");X.append(n("b",null,"PINTURA"));const j=n("div","gar-cores");return es.forEach((be,Ee)=>{const $e=n("button",`gar-cor${Ee===U?" on":""}`);$e.title=be.nome,$e.style.background=`linear-gradient(135deg, ${be.mostra[0]} 55%, ${be.mostra[1]} 55%)`,$e.onclick=()=>R("pintura",Ee),j.append($e)}),X.append(j,n("small",null,es[U].nome)),X}function ae(U,X){const j=mn(p().projeto).chassi===U.id,be=s?.chassi===U.id,Ee=n("article",`gar-chassi${j?" instalado":""}${be?" em-previa":""}`),$e=V_(U.id,t);$e.className="gar-icone-chassi";const ke=m(U.id);return Ee.append($e,n("b",null,U.nome),n("small",null,ke?j?"INSTALADO":"NA BANCADA":`PROJETO ◆${U.custo}`)),Ee.title=`${U.resumo}
${oh(U)}
Encaixes: ${U.encaixes.map(st=>Rl[st.tipo].nome).join(", ")}`,Ee.onclick=()=>{s=j?null:{chassi:U.id},o=Math.min(o,la(U.id).encaixes.length-1),ue()},Ee}function k(U,X){const be=mn(p().projeto).pecas[X.i]===U.id,Ee=s?.peca===U.id&&s.slot===X.i,$e=m(U.id),ke=n("article",`gar-peca${be?" instalado":""}${Ee?" em-previa":""}${$e?"":" bloqueada"}${l&&l.slot===X.i&&be?" novo":""}`),st=k_(U,t);st.className="gar-icone";const oe=n("div","gar-peca-cab");oe.append(st);const de=n("div");de.append(n("b",null,U.nome),n("small",null,U.resumo)),oe.append(de);const Le=n("div","gar-stats");Le.append(n("span","m",`${U.massa} kg`)),U.potencia&&Le.append(n("span","p",`+${U.potencia} W`)),U.consumo&&Le.append(n("span","w",`-${U.consumo} W`)),U.calor&&Le.append(n("span","c",`+${U.calor} °C`)),U.dissipacao&&Le.append(n("span","f",`-${U.dissipacao} °C`)),ke.append(oe,n("p","gar-efeito",B_(U)),Le);const Qe=n("button","arc-btn pequeno");if(be)Qe.textContent="INSTALADA",Qe.disabled=!0;else if($e)Qe.textContent="INSTALAR",Qe.onclick=Fe=>{Fe.stopPropagation(),T(X.i,U.id)};else{const Fe=U.custo-p().moedas;Qe.textContent=Fe>0?`FABRICAR ◆${U.custo}`:`FABRICAR E INSTALAR ◆${U.custo}`,Qe.disabled=Fe>0,Qe.title=Fe>0?`Faltam ${Fe} moedas espaciais`:"",Qe.onclick=Oe=>{Oe.stopPropagation(),T(X.i,U.id)}}return ke.append(Qe),ke.onclick=()=>{s=be?null:{slot:X.i,peca:U.id},ue()},ke}function ue(){const U=x(),X=mn(p().projeto);b(U);const j=Op(U),be=j.diagnostico,Ee=ia(X);o=Math.max(0,Math.min(o,Ee.length-1));const $e=Ee[o],ke=n("div","gar-esq");ke.append(Y(U));const st=n("div","gar-medidores");st.append(O("POTÊNCIA",be.consumo,be.producao,`${Math.round(be.consumo)} / ${Math.round(be.producao)} W`),O("CALOR",be.calor,be.dissipacao,`${Math.round(be.calor)} / ${Math.round(be.dissipacao)} °C`),O("MASSA",be.massa,be.massaRef,`${be.massa} kg · VEL ×${be.fatorMassa.toFixed(2)}`,1.8));const[oe,de]=W_[be.status],Le=n("div",`gar-status ${oe}`,de);st.append(Le);for(const ge of be.alertas)st.append(n("p",`gar-alerta ${ge.tipo}`,ge.texto));ke.append(st,H("clock",U.clock),H("tensao",U.tensao),Z(U.pintura));const Qe=n("button","arc-btn gar-teste","TESTE NA BANCADA ▶");Qe.onclick=L,ke.append(Qe);const Fe=n("div","gar-dir"),Oe=n("div","gar-chassis");for(const ge of po)Oe.append(ae(ge));if(Fe.append(n("h4","gar-titulo","CHASSI · BASE DA NAVE"),Oe),s?.chassi){const ge=la(s.chassi),Pe=m(ge.id),ot=ge.custo-p().moedas,ee=n("div","gar-faixa");ee.append(n("span",null,`${ge.nome}: ${ge.resumo} ${oh(ge)}`));const Ie=n("button","arc-btn pequeno",Pe?"TROCAR DE CHASSI":`FABRICAR ◆${ge.custo}`);Ie.disabled=!Pe&&ot>0,Ie.onclick=()=>S(ge.id),ee.append(Ie),Fe.append(ee)}const rt=Rl[$e.tipo],fe=Ee.filter(ge=>ge.tipo===$e.tipo);Fe.append(n("h4","gar-titulo",`ENCAIXE ${rt.nome}${fe.length>1?` ${fe.findIndex(ge=>ge.i===$e.i)+1}/${fe.length}`:""} · ESCOLHA A PEÇA`));const ye=n("div","gar-pecas");for(const ge of U_($e.tipo))ye.append(k(ge,$e));Fe.append(ye);const Ce=["arma","motor","reator"].includes($e.tipo)&&fe.filter(ge=>ge.peca).length<=1;if($e.peca){const ge=n("button","arc-btn sec pequeno",Ce?"ESTE ENCAIXE É OBRIGATÓRIO":"RETIRAR PEÇA DESTE ENCAIXE");ge.disabled=Ce,ge.onclick=()=>I($e.i),Fe.append(ge)}c&&Fe.append(n("p","gar-dica",c)),u.replaceChildren(V(U,be,j),n("div","gar-corpo",null)),u.querySelector(".gar-corpo").append(ke,Fe)}return ue(),{raiz:u,render:ue,animar(U){const X=x(),j=Up(X);b(X);const be=performance.now()/1e3<r?1:0;if(H_(d,_,X,U,{escala:Js,tema:t,selecionado:o,previa:s&&s.slot!==void 0?s.slot:-1,teste:be,calor:Math.max(0,j.razaoCalor-1)}),l&&U-l.t0<.9){const Ee=(U-l.t0)/.9,$e=l.slot>=0?ia(X)[l.slot]:{x:12,y:12};$e&&(d.globalAlpha=1-Ee,d.strokeStyle="#7dff9a",d.lineWidth=3,d.beginPath(),d.arc(($e.x+.5)*Js,($e.y+.5)*Js,12+Ee*60,0,Math.PI*2),d.stroke(),d.globalAlpha=1)}},ao_abrir(){s=null,c="",ue()}}}const kt=320,Vt=180,Fn=kt/2,_a=Vt/2,Sa=6,Gp="curriculo-arcade-v1",q_=12,Mt={x0:10,x1:kt-10,y0:26,y1:Vt-10},_i={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Zs=70,$_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},vc={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},Y_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{ta(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{ta(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{ta(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{ta(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{ta(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{ta(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{ta(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{ta(n,"drift")}},{id:"a_normal",grupo:"ARMA · CANHÃO",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Canhão · evolução",desc:"Melhora o calibre e o impacto exclusivos do canhão principal.",max:4,peso:1.3,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA · LASER",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta alcance, bateria e eficiência próprios do laser.",max:4,peso:1.5,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA · MÍSSIL",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores e um míssil extra nos níveis avançados.",max:4,peso:1.5,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA · ORBES",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas e rotação própria mais rápida.",max:4,peso:1.5,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA · TURBO",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Aumenta a autonomia e a força exclusiva do hiperpropulsor.",max:4,peso:1.5,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA · CURA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Aumenta o reparo e reduz a espera do nanorreparo.",max:4,peso:1.5,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA · ESCUDO",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração própria da barreira de fase.",max:4,peso:1.5,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA · SALTO",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e carrega a ruptura mais rápido.",max:4,peso:1.5,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA · DRIFT",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Aumenta a arrancada e a trilha de fogo próprias do drift.",max:4,peso:1.5,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"NAVE · DANO",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Ponto de dano",desc:"+12% de dano para TODO o arsenal da nave.",max:6,peso:4.4,aplicar:n=>{n.danoGlobal*=1.12}},{id:"reparo",grupo:"NAVE · VIDA",raridade:"COMUM",icone:"♥",cor:"#ff6b7a",nome:"Ponto de vida",desc:"+1 de vida máxima e recupera 1 ponto agora.",max:6,peso:4.4,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"armadura",grupo:"NAVE · ARMADURA",raridade:"INCOMUM",icone:"⬢",cor:"#c9cdf5",nome:"Ponto de armadura",desc:"-6% de dano recebido pela nave inteira, até o limite de 50%.",max:6,peso:4.2,aplicar:n=>{n.armadura+=1}},{id:"motor",grupo:"NAVE · VELOCIDADE",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Ponto de velocidade",desc:"+10% de velocidade e resposta da nave.",max:6,peso:4.4,aplicar:n=>{n.velNave*=1.1}},{id:"recarga_geral",grupo:"NAVE · RECARGA",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Ponto de recarga",desc:"+10% de cadência e recarga para TODAS as armas e sistemas.",max:6,peso:4.2,aplicar:n=>{n.recargaGlobal*=1.1}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:2.1,aplicar:n=>{n.raioIma*=1.45}},{id:"coletor",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:2.3,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"NAVE · SENSORES",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:2.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"NAVE · REPARO",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:2.2,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}}],kp=Object.fromEntries(Object.entries(vc).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),J_=Object.fromEntries(Object.entries(vc).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function ta(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${kp[e]}!`,n.aviso=3.6,!0)}const pu=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga para todas as armas e sistemas",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Amplificador bélico",desc:"+0,25 de dano base para todo o arsenal",max:5,custo:n=>8+n*6},{parte:"NÚCLEO DE ENERGIA",id:"cadencia",nome:"Computador de recarga",desc:"+8% de cadência e recarga global",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"CASCO",id:"armadura",nome:"Blindagem",desc:"-6% de dano recebido por ponto",max:5,custo:n=>8+n*5},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],Ta={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},Z_=Object.entries(Ta).map(([n,e])=>[n,e.peso]),K_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],j_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(pu.map(n=>[n.id,0])),projeto:xc(),pecasLiberadas:Dp()});function ch(){const n=j_();try{const e=JSON.parse(localStorage.getItem(Gp));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of pu)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0));n.projeto=mn(e.projeto||e.modulos),n.pecasLiberadas=F_([...e.pecasLiberadas||[],...e.modulosDesbloqueados||[]]);for(const t of[n.projeto.chassi,...n.projeto.pecas])t&&!n.pecasLiberadas.includes(t)&&n.pecasLiberadas.push(t)}}catch{}return n}function Q_(){const n=(t,i,a)=>{const o=vn(7,9);return o.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),o.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),o.pixel(2,3,a),o.pixel(2,2,a),o.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function eS({bip:n,somAtivo:e,tema:t="padrao",aoMudarNave:i}){const a=t==="yas",o=t==="fer",s=Symbol("arcade");window.__curriculoArcadeGeracao=s,document.getElementById("arcade")?.remove();const r=(M,g,D)=>{const G=document.createElement(M);return g&&(G.className=g),D!=null&&(G.textContent=D),G},l=Q_(),c=d_(),u=h_(),h=c_({inicioX:Fn,inicioY:_a,rochasSpr:c}),d=new Map,p=new Map,m=M=>(d.has(M)||d.set(M,Wo[M].criar()),d.get(M)),_=M=>(p.has(M)||p.set(M,Za[M].criar()),p.get(M)),v=new Map,x=M=>{const g=(M%ea.length+ea.length)%ea.length;return v.has(g)||v.set(g,ea[g].criar()),v.get(g)},b=.3,w=M=>{const g=new Audio("./"+M);return g.loop=!0,g.volume=b,g.preload="none",g},E=w("audio/arcade.mp3"),y=w("audio/chefe.mp3"),T=w("audio/gameover.mp3"),I={normal:E,chefe:y,fim:T};let S="normal",R=!1;function L(){if(R)return;R=!0;const M=()=>{R=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),Ve&&O()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const O=()=>{e&&!e()||I[S].play().catch(L)},V=()=>{E.pause(),y.pause(),T.pause()};function Y(M){if(S!==M){S=M;for(const[g,D]of Object.entries(I))g!==M&&D.pause();M!=="normal"&&(I[M].currentTime=0),O()}}let H=!1;function Z(){if(!H){H=!0;for(const M of[y,T])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,H=!1})}}const ae=s_(kt,Vt);let k=Df({casco:0,motor:0,nucleo:0,ima:0},t,xc()),ue=Nf(xc()),U=ch();const X={},j=(M,g,D)=>{const G=performance.now();G-(X[M]||0)<g||(X[M]=G,D())};function be(M){const g=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";j("acerto"+(g?"G":""),g?70:40,()=>g?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function Ee(M){j("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const $e=()=>{try{localStorage.setItem(Gp,JSON.stringify(U))}catch{}i?.(JSON.parse(JSON.stringify(U.projeto)))},ke=r("div");ke.id="arcade",ke.classList.toggle("tema-yas",a),ke.classList.toggle("tema-fer",o);const st=r("div","arc-caixa"),oe=r("div","arc-topo"),de=document.createElement("canvas");de.width=de.height=gn,de.className="arc-icone",de.getContext("2d").drawImage(k.c,0,0);const Le=r("h2",null,a?"NAVE VIAJANTE":o?"NAVE ABISSAL":"NAVE ARCADE"),Qe=r("div","arc-hud"),Fe=r("span","arc-vidas");Fe.setAttribute("role","status");const Oe=r("span","arc-nivel"),rt=r("span","arc-xp"),fe=r("i");rt.append(fe),rt.setAttribute("role","progressbar"),rt.setAttribute("aria-label","Experiência"),rt.setAttribute("aria-valuemin","0");const ye=r("span"),Ce=r("span","arc-onda"),ge=r("span","arc-efeitos"),Pe=r("span","arc-moedas"),ot=r("span");Qe.append(Fe,Oe,rt,ye,Ce,ge,Pe,ot);const ee=r("button","arc-pausa","II");ee.title="Pausar (Esc)",ee.setAttribute("aria-label","Pausar jogo"),ee.hidden=!0;const Ie=r("button","arc-x","X");Ie.title="Sair (Esc)",Ie.setAttribute("aria-label","Sair do jogo"),oe.append(de,Le,Qe,ee,Ie);const Xe=r("div","arc-tela"),F=document.createElement("canvas");F.width=kt,F.height=Vt,F.setAttribute("role","img"),F.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const P=F.getContext("2d");P.imageSmoothingEnabled=!1;const qe=r("div","arc-joystick");qe.hidden=!0;const N=r("i");qe.append(N);const A=r("div","arc-aviso");A.hidden=!0;const J=r("div","arc-sobre"),Q=r("div","arc-painel arc-inicio"),le=r("button","arc-btn","COMEÇAR [ESPAÇO]"),_e=r("button","arc-btn sec"),Ue=r("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),ce=r("div","arc-objetivos");for(const[M,g,D]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const G=r("div");G.append(r("b",null,M),r("strong",null,g),r("small",null,D)),ce.append(G)}const xe=r("details","arc-regras"),Ze=r("summary",null,"COMO JOGAR");xe.append(Ze,r("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),r("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const ut=r("p","arc-recordes");Q.append(r("h3",null,"PRONTO PARA DECOLAR?"),Ue,ce,xe,ut,le,_e);const Ge=r("div","arc-painel");Ge.hidden=!0;const ze=r("div","arc-painel");ze.hidden=!0;const je=r("button","arc-btn","CONTINUAR [ESC]"),xt=r("button","arc-btn sec","SAIR");ze.append(r("h3",null,"PAUSADO"),je,xt);const vt=r("div","arc-painel");vt.hidden=!0;const q=r("div","of-raiz");q.hidden=!0,J.append(Q,Ge,ze,vt),Xe.append(F,A,qe,J);const Ke=r("div","arc-armas"),ve=[];for(let M=1;M<=4;M++){const g=r("button","arc-arma"),D=r("b"),G=r("i");g.append(r("small",null,String(M)),D,G),g.onmousedown=ie=>ie.preventDefault(),g.onclick=()=>mi(M),ve.push({b:g,nm:D,barra:G}),Ke.append(g)}st.append(oe,Xe,Ke,r("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),ke.append(st,q),ke.setAttribute("role","dialog"),ke.setAttribute("aria-modal","true"),ke.setAttribute("aria-label","Nave Arcade"),document.body.append(ke);let Ve=!1,we="inicio",Te=0,dt=0,ct="inicio",f=null;const bt=new Set,At={ativo:!1,x:Fn,y:_a,toque:!1,dx:0,dy:0,origemX:0,origemY:0},ai=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],oi=M=>Math.abs(M.x-f.cx)<kt/2+4&&Math.abs(M.y-f.cy)<Vt/2+4,mo=M=>{let g=Math.random()*M.reduce((D,G)=>D+G[1],0);for(const[D,G]of M)if(g-=G,g<=0)return D;return M[0][0]},Zn=(M,g=2.6)=>{f.avisoTxt=M,f.aviso=g};function fr(){const M=U.oficina,g=f?f.niveis:{};return{casco:M.casco+M.armadura+(g.reparo|0)+(g.armadura|0),motor:M.motor+(g.motor|0),nucleo:M.nucleo+(g.recarga_geral|0),armas:M.dano+M.lente+(g.dano_geral|0),ima:M.ima+(g.ima|0)}}function Va(){const M=fr();k=Df(M,t,U.projeto),ue=Nf(U.projeto),f&&(f.tiers=M);const g=de.getContext("2d");g.clearRect(0,0,gn,gn),g.drawImage(k.c,0,0),i?.(JSON.parse(JSON.stringify(U.projeto)))}Va();const fs=()=>{if(f.regiaoForcada!=null)return f.regiaoForcada;const M=Math.min(2,Math.floor((f.fase-1)/2)),g=er.map((D,G)=>G).filter(D=>er[D].nivel===M);return g[(f.fundoBase+f.fase)%g.length]},Xi=M=>{const g=[...M];for(let D=g.length-1;D>0;D--){const G=Math.floor(Math.random()*(D+1));[g[D],g[G]]=[g[G],g[D]]}return g};function qi(){const M=Xi(["slime","inseto","morcego","fantasma","ogro"]).slice(0,3),g=Xi(["atirador","sentinela"]).slice(0,1),D=Xi(["bombardeiro","fulminante"]).slice(0,1),G=Xi(["curandeiro","amplificador"]).slice(0,1);return[...M,...g,...D,...G]}function go(){const M=U.oficina,g=Op(U.projeto),D=qi(),G=Xi(Array.from({length:ea.length},(Re,De)=>De)),ie=Object.fromEntries(D.map((Re,De)=>[Re,G[De%G.length]])),re=Object.fromEntries(D.map((Re,De)=>[Re,De<2?1:De<4?2:De===4?4:5]));f={t:0,ta:0,nx:Fn,ny:_a,cx:Fn,cy:_a,velNave:75*(1+.08*M.motor)*g.velocidade,cristais:[],raioIma:26*(1+.25*M.ima)*g.ima,raioPegar:8,bonusXp:(1+.1*M.xp)*g.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,ondaFila:0,ondaSpawnT:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:Math.max(3,6+M.casco+g.vida),maxHp:Math.max(3,6+M.casco+g.vida),armadura:M.armadura+g.armadura,nivel:1,xp:0,xpProx:5,kills:0,dano:(1+.25*M.dano)*g.dano,danoGlobal:1,recargaGlobal:(1+.08*M.cadencia)*(1+.12*M.nucleo)*g.recarga,cadencia:2.6*g.cadencia,projeteis:Math.min(4,1+M.projetil+g.projeteis),perfura:g.perfura,velTiro:160,critico:g.critico,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*Za.length),alienIdx:Math.floor(Math.random()*Wo.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*ea.length),elencoRun:D,entradaRun:re,skinsRun:ie,fundoBase:Math.floor(Math.random()*er.length),movendo:!1,angNave:0,giro:g.giro,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:(M.escudo>0?1+(M.escudo>=4?1:0):0)+g.escudo,barreira:(M.escudo>0?1+(M.escudo>=4?1:0):0)+g.escudo,barreiraT:0,tempoBarreira:45-6*M.escudo},Va()}const xo=()=>Math.max(1,f.onda);function vo(){const M=xo(),g={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let D=f.elencoRun.filter(G=>M>=f.entradaRun[G]).map(G=>[G,g[G]+Math.max(0,M-f.entradaRun[G])*(G==="atirador"||G==="sentinela"?.45:.2)]);return D.length||(D=[[f.elencoRun[0],1]]),mo(D)}function Ri(M,g,D){const G=_i[M],ie=Math.max(0,xo()-1),re=Math.max(1,Math.round(G.hp*(1+(G.hp===1?.1:.15)*ie)*(1+f.t/300))),Re=G.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*ie))*(1+Math.min(.5,f.t/600)),De={tipo:M,x:g,y:D,hp:re,hpMax:re,vel:Re,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(f.skinsRun[M]??f.skinBase)+f.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return f.inimigos.push(De),De}function Mo(M=99,g=null){const D=vo(),G=1+Math.min(3,Math.floor(Math.max(0,f.onda-1)/3)),ie=Math.max(1,Math.min(M,D==="inseto"?1+Math.floor(Math.random()*(G+1)):Math.round(G*(.75+Math.random()*.35)))),re=g==null?Math.random()*Math.PI*2:g+(Math.random()-.5)*1.8,Re=215+(Math.random()<.35?Math.random()*230:Math.random()*60),De=f.nx+Math.cos(re)*Re,K=f.ny+Math.sin(re)*Re;for(let Me=0;Me<ie;Me++)Ri(D,De+(Math.random()-.5)*30,K+(Math.random()-.5)*30);return ie}function _o(M){for(let g=0;g<M;g++)Mo(1)}function us(M){const g=[[f.cx-kt/2-16,f.cy-Vt/2-16],[f.cx+kt/2+16,f.cy-Vt/2-16],[f.cx-kt/2-16,f.cy+Vt/2+16],[f.cx+kt/2+16,f.cy+Vt/2+16]],[D,G]=g[Math.floor(Math.random()*g.length)];for(let ie=0;ie<M;ie++)Ri(vo(),D+(Math.random()-.5)*22,G+(Math.random()-.5)*22)}function jt(M,g,D,G,ie=50){if(!(f.parts.length>400))for(let re=0;re<D;re++){const Re=Math.random()*Math.PI*2,De=(.3+Math.random())*ie;f.parts.push({x:M,y:g,vx:Math.cos(Re)*De,vy:Math.sin(Re)*De,vida:.3+Math.random()*.3,cor:G[re%G.length]})}}const fn=(M,g,D,G="#ffffff")=>f.textos.push({x:M,y:g,txt:D,cor:G,vida:1.1});function Dc(){f.onda+=1;const M=1+Math.floor((f.onda-1)/3),g=f.onda%5===0;f.ondaDur=f.ondaT=13+Math.min(9,f.onda*1.1),f.ondaFila=g?5+f.onda:Math.min(34,6+f.onda*3),f.ondaSpawnT=.35,f.proxOnda=Math.max(25,34-Math.min(9,f.onda*.5))+Math.random()*4,f.ondaEstado=g||f.chefe?"chefe":"ativa",f.tremor=.25,M>f.fase&&(f.fase=M),g||(Zn("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),g&&!f.chefe&&Pt()}function Uc(){f.chefe||(f.ondaEstado=f.ondaT>0?"ativa":"calma")}function Oc(M){const g=Math.atan2(M.y-f.ny,M.x-f.nx);f.mira=g;const D=f.armasNivel.normal,G=f.projeteis,ie=.16;for(let re=0;re<G;re++){const Re=g+(re-(G-1)/2)*ie,De=f.velTiro*(1+.12*(D-1)),K=Math.random()<f.critico;f.tiros.push({x:f.nx+Math.cos(Re)*7,y:f.ny+Math.sin(Re)*7,vx:Math.cos(Re)*De,vy:Math.sin(Re)*De,dano:f.dano*f.danoGlobal*(1+.28*(D-1))*(K?2:1),perf:f.perfura,critico:K,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const Ha=()=>1+Math.floor(f.t/420);function C(M,g,D,G,ie=Ha()){f.tirosInimigos.push({x:M,y:g,vx:Math.cos(D)*G,vy:Math.sin(D)*G,dano:ie,vida:7})}function $(M,g,D){const G=Math.random()*Math.PI*2,ie=16+Math.random()*22,re={x:M,y:g,v:D,vx:Math.cos(G)*ie,vy:Math.sin(G)*ie,fase:Math.random()*6};f.cristais.push(re),f.cristais.length>220&&(re.v+=f.cristais.shift().v)}function se(M){if(f.invul>0||f.escudoT>0)return!1;if(f.barreira>0)return f.barreira-=1,f.invul=.7,f.ondas.push({x:f.nx,y:f.ny,r:0,max:28,v:90,cor:"#7dff9a"}),fn(f.nx,f.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0;const g=Math.min(.5,f.armadura*.06),D=Math.max(.25,M*(1-g));return f.hp=Math.max(0,f.hp-D),f.invul=.7,f.tremor=.2,f.combo>=3&&fn(f.nx,f.ny-14,"COMBO PERDIDO","#ff7a8a"),f.combo=0,f.comboT=0,n(110,.18,"sawtooth",.05),!0}function te(M,g){M.sumido>0||M.morto||(M.hp-=g,M.piscar=.08,M.hp>0&&be(M),M.hp<=0&&(M.morto=!0,ne(M)))}function ne(M){if(M.tipo==="chefe"){sn(M);return}if(M.tipo==="alien"){f.pendente="vitoria",jt(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),f.flash=.35;return}const g=_i[M.tipo];f.kills+=1,f.alien||(f.combo+=1,f.comboT=1.8,f.melhorCombo=Math.max(f.melhorCombo,f.combo),[10,25,50,100].includes(f.combo)&&(fn(f.nx,f.ny-22,`COMBO x${f.combo}!`,"#ffe14a"),n(700+f.combo*4,.08,"square",.04),n(900+f.combo*4,.1,"square",.04,.08))),$(M.x,M.y,g.xp),jt(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),Ee(M.tipo);const D={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<D&&(f.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),fn(M.x,M.y-8,"◆","#6fe8ff"));const G=f.inimigos.indexOf(M);G>=0&&f.inimigos.splice(G,1)}function tt(){const M=Math.random()*Math.PI*2,g=230+Math.random()*120,D=Math.floor(Math.random()*3),G=[4,6,9][D];f.rochas.push({x:f.nx+Math.cos(M)*g,y:f.ny+Math.sin(M)*g,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:D,r:[8,10,13][D],hp:G,hpMax:G,piscar:0})}function it(M){M.hp-=1,M.piscar=.08,jt(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&et(M)}function et(M){jt(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const g=f.rochas.indexOf(M);g>=0&&f.rochas.splice(g,1),Math.random()<.9?f.itens.push({tipo:mo(K_),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):$(M.x,M.y,3)}function lt(M){const g=M.tipo;if(g==="ima")f.imaT=3,fn(f.nx,f.ny-12,"ÍMÃ!","#8be6ff");else if(g==="explosao")pt(),fn(f.nx,f.ny-12,"BOOM!","#ffd23f");else if(g==="coracao")f.hp=Math.min(f.maxHp,f.hp+2),fn(f.nx,f.ny-12,"+VIDA","#ff7a8a");else if(g==="escudo")f.escudoT=6,fn(f.nx,f.ny-12,"ESCUDO!","#8bd3ff");else if(g==="turbo")f.turboT=8,fn(f.nx,f.ny-12,"TURBO!","#ffe14a");else if(Ta[g]){const D=Ta[g];g==="estrelaVermelha"?(f.buffDanoT<=0&&(f.danoGlobal*=1.5),f.buffDanoT=D.tempo):g==="estrelaAmarela"?f.buffVelT=D.tempo:g==="estrelaAzul"?f.escudoT=Math.max(f.escudoT,D.tempo):g==="estrelaRoxa"&&(f.buffXpT=D.tempo),fn(f.nx,f.ny-12,D.nome,D.cor),jt(f.nx,f.ny,14,[D.cor,"#ffffff"],70),f.ondas.push({x:f.nx,y:f.ny,r:0,max:40,v:110,cor:D.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else g==="moedaEsp"&&(U.moedas+=1,f.moedasRun+=1,$e(),fn(f.nx,f.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function pt(){f.flash=.28,f.tremor=.35,f.ondas.push({x:f.nx,y:f.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+f.dano*3;for(const g of[...f.inimigos])oi(g)&&(te(g,g.tipo==="chefe"||g.tipo==="alien"?14:M),jt(g.x,g.y,4,["#ffd23f","#ff7a3a"],60));f.tirosInimigos=f.tirosInimigos.filter(g=>!oi(g)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function Rt(M,g,D,G=1.4){for(let ie=0;ie<D;ie++){const re=Math.random()*Math.PI*2,Re=ie===0?Math.random()*14:28+Math.random()*55;let De=f.nx+Math.cos(re)*Re,K=f.ny+Math.sin(re)*Re;f.alien&&(De=Math.max(Mt.x0+10,Math.min(Mt.x1-10,De)),K=Math.max(Mt.y0+10,Math.min(Mt.y1-10,K))),f.campos.push({x:De,y:K,r:26,aviso:G+ie*.15,avisoMax:G+ie*.15,vida:4,tick:0,ox:M,oy:g})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function Pt(){f.chefeIdx=(f.chefeIdx+1+Math.floor(Math.random()*(Za.length-1)))%Za.length;const M=Math.random()<.5?-1:1,g=Math.round(150*(1+(f.fase-1)*.4+f.chefesVencidos*.35)*(1+f.t/300)),D=Xi(["raios","investida","drift","minhoca"]).slice(0,2),G={tipo:"chefe",x:f.cx+M*(kt/2+40),y:f.cy-30,hp:g,hpMax:g,vel:30,fase:0,piscar:0,v:f.fase-1+f.skinBase,b:f.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:D,rot:0};f.inimigos.push(G),f.chefe=G,Y("chefe"),Zn(`${Za[f.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function ft(M,g){const D=f.nx-M.x,G=f.ny-M.y,ie=Math.hypot(D,G)||1;if(M.fase+=g,M.movEsp){const W=M.movEsp;if(W.carga>0){if(W.carga-=g,M.piscar=Math.max(M.piscar,.04),W.carga<=0)if(W.tipo==="minhoca"){const he=M.x,Se=M.y,me=Math.random()*Math.PI*2,Je=58+Math.random()*24;M.x=f.nx+Math.cos(me)*Je,M.y=f.ny+Math.sin(me)*Je,f.ondas.push({x:he,y:Se,r:0,max:32,v:130,cor:"#a56bff"}),f.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),jt(he,Se,18,["#a56bff","#070a1a","#ffffff"],90),jt(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),f.tremor=.28,M.movEsp=null}else W.ativo=W.tipo==="drift"?1.15:.72}else if(W.ativo>0){const he=W.tipo==="drift"?175:235;M.x+=W.dx*he*g,M.y+=W.dy*he*g,W.ativo-=g,W.acc-=g,jt(M.x-W.dx*15,M.y-W.dy*15,W.tipo==="drift"?2:1,W.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),W.tipo==="drift"&&W.acc<=0&&(W.acc=.16,f.campos.push({x:M.x-W.dx*12,y:M.y-W.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),W.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const re=-G/ie,Re=D/ie,De=Math.sin(f.ta*.8)*.3,K=M.vel+f.fase*3+Math.min(45,f.t/10);if(M.x+=(D/ie+re*De)*K*g,M.y+=(G/ie+Re*De)*K*g,ie>300)return;const Me=1+Math.min(1,f.t/400);if(M.cdRajada-=g*Me,M.cdMira-=g*Me,M.cdBomba-=g*Me,M.cdRajada<=0){const W=12+Math.min(8,f.fase*2);for(let he=0;he<W;he++)C(M.x,M.y,M.rot+he*Math.PI*2/W,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-f.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const W=Math.atan2(G,D),he=3+Math.min(2,f.fase-1);for(let Se=0;Se<he;Se++)C(M.x,M.y,W+(Se-(he-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const W=1+(Math.random()<.5?1:0)+(f.fase>=2&&Math.random()<.4?1:0);Rt(M.x,M.y,W),M.cdBomba=Math.max(3,4.6-f.fase*.2)}const Ae=Ft.filter(W=>W.assinatura?M.kit.includes(W.id):f.t>=W.t);if(M.esp){const W=M.esp;if(W.t-=g,W.acc-=g,W.tipo==="espiral"&&W.acc<=0){W.acc=.09,W.ang+=.4;for(let he=0;he<2;he++)C(M.x,M.y,W.ang+he*Math.PI,62)}else if(W.tipo==="aneis"&&W.acc<=0){W.acc=.5;const he=Math.random()*Math.PI*2;for(let Se=0;Se<24;Se++){const me=Se*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(me-he),Math.cos(me-he)))>.45&&C(M.x,M.y,me,58)}}W.t<=0&&(M.esp=null)}else if(Ae.length&&(M.cdEsp-=g*Me,M.cdEsp<=0)){const W=Ae[Math.floor(Math.random()*Ae.length)];if(fn(M.x,M.y-28,W.nome,"#ff7ab8"),W.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(W.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(W.id==="raios"){const he=Math.atan2(G,D),Se=3+Math.min(2,Ae.length-2);for(let me=0;me<Se;me++)f.raios.push({x:M.x,y:M.y,ang:he+(me-(Se-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(W.id==="investida"||W.id==="drift")M.movEsp={tipo:W.id,carga:W.id==="drift"?.7:.5,ativo:0,dx:D/ie,dy:G/ie,acc:0};else if(W.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(W.id==="invocar"){for(let he=0;he<4;he++)Ri(vo(),M.x+(he-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-f.t/100)}}const Ft=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function sn(M){f.kills+=5,f.chefe=null,f.chefesVencidos+=1,Y("normal");const g=f.inimigos.indexOf(M);g>=0&&f.inimigos.splice(g,1),jt(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),f.flash=.3,f.tremor=.5;const D=4+Math.min(4,f.chefesVencidos);for(let G=0;G<D;G++)f.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let G=0;G<6;G++)$(M.x,M.y,6);f.tirosInimigos=[],f.campos=[],f.ondaEstado==="chefe"&&Uc(),Zn("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function Jt(){const M=Math.random()*Math.PI*2,g=100+Math.random()*40;f.buraco={x:f.nx+Math.cos(M)*g,y:f.ny+Math.sin(M)*g,vida:28,r:22},Zn("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function Ht(M){const g=f.buraco;g.vida-=M;const D=g.x-f.nx,G=g.y-f.ny,ie=Math.hypot(D,G)||1;if(ie<70){const re=38*(1-ie/70);f.nx+=D/ie*re*M,f.ny+=G/ie*re*M}if(ie<9){Sn();return}g.vida<=0&&(f.buraco=null,f.proxBuraco=f.t+50+Math.random()*40)}function Sn(){Y("chefe"),f.alienIdx=(f.alienIdx+1+Math.floor(Math.random()*(Wo.length-1)))%Wo.length,f.mundoSalvo={nx:f.nx,ny:f.ny,cx:f.cx,cy:f.cy,inimigos:f.inimigos,tirosInimigos:f.tirosInimigos,campos:f.campos,hp:f.hp,buraco:f.buraco,chefe:f.chefe};const M=Math.round(95*(1+f.aliensVencidos*.6+(f.fase-1)*.25)*(1+f.t/300)),g={tipo:"alien",x:Fn,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:f.alienIdx,cd:1.7,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null,vx:0,vy:0,orbita:Math.random()<.5?-1:1,mudaOrbita:2+Math.random()*2,memoria:[],plano:[],leituraT:0};f.hp=f.maxHp,f.invul=1,f.inimigos=[g],f.tirosInimigos=[],f.campos=[],f.raios=[],f.tiros=[],f.misseis=[],f.chefe=null,f.alien=g,f.nx=Fn,f.ny=Vt-40,f.cx=Fn,f.cy=_a,f.flash=.5,Zn(`${Wo[f.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function at(M){const g=f.mundoSalvo;if(f.nx=g.nx,f.ny=g.ny,f.cx=g.cx,f.cy=g.cy,f.inimigos=g.inimigos,f.tirosInimigos=g.tirosInimigos,f.campos=g.campos,f.chefe=g.chefe,f.hp=g.hp,f.tiros=[],f.raios=[],f.misseis=[],f.alien=null,f.mundoSalvo=null,f.buraco=null,Y(f.chefe?"chefe":"normal"),f.invul=2,f.proxBuraco=f.t+60+Math.random()*40,f.flash=.4,M){f.aliensVencidos+=1,f.imaT=Math.max(f.imaT,3),fn(f.nx,f.ny-12,"ÍMÃ!","#8be6ff");for(let G=0;G<6;G++)$(f.nx+(Math.random()-.5)*40,f.ny+(Math.random()-.5)*40,6);const D=Object.keys(kp).filter(G=>!f.poderes[G]);if(D.length&&f.slots.includes(null))ta(f,D[Math.floor(Math.random()*D.length)]);else{const G=Object.keys(f.armasNivel).filter(ie=>f.armasNivel[ie]>0&&f.armasNivel[ie]<4);if(G.length){const ie=G[Math.floor(Math.random()*G.length)];f.armasNivel[ie]+=1,Zn(`${vc[ie].nome} EVOLUIU PARA N${f.armasNivel[ie]}!`,3.2)}else f.hp=f.maxHp,Zn("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else Zn("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const En={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},Lt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},Vn=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function ri(M){const g=f.alien,D=g.hp<g.hpMax*.5,G=g.hp<g.hpMax*.25,ie=1+Math.min(.6,f.t/500),re=(G?2:D?1.6:1.25)*ie,Re=(G?1.5:D?1.35:1.2)*(1+(ie-1)*.6),De=pe=>pe*Re;g.ta+=M*(G?2:D?1.7:1.3)*ie,g.fase+=M,g.sumido=Math.max(0,g.sumido-M),D&&!g.furiaDita&&(g.furiaDita=!0,Zn("!! FÚRIA !!",1.6),f.flash=.2,n(80,.4,"sawtooth",.06)),G&&!g.desesperoDito&&(g.desesperoDito=!0,Zn("!! DESESPERO !!",1.6),f.flash=.25,n(60,.5,"sawtooth",.07));const K=f.nx-g.x,Me=f.ny-g.y,Ae=Math.hypot(K,Me)||1,W=K/Ae,he=Me/Ae,Se=-he,me=W,Je=G?55:D?68:82,Be=(pe,Ne)=>[Math.max(Mt.x0+6,Math.min(Mt.x1-6,pe)),Math.max(Mt.y0+6,Math.min(Mt.y1-6,Ne))],gt=()=>Be(f.nx-W*Je+Se*g.orbita*28,f.ny)[0],Bt=()=>Be(f.nx,f.ny-he*Je+me*g.orbita*28)[1];if((g.estado==="espera"||g.estado==="carga"||g.estado==="salvas"||g.estado==="padrao")&&g.sumido<=0){g.mudaOrbita-=M,g.mudaOrbita<=0&&(g.mudaOrbita=2.2+Math.random()*2.8,Math.random()<.45&&(g.orbita*=-1));const pe=Ae>Je+13?1:Ae<Je-16?-.7:.12,Ne=Math.sin(g.ta*1.7+g.fase*.4)*.22,He=(G?92:D?78:64)*ie*(g.estado==="carga"?.58:1),ht=(W*pe+Se*(g.orbita*.58+Ne))*He,tn=(he*pe+me*(g.orbita*.58+Ne))*He,hn=Math.min(1,M*(G?5.5:3.6));g.vx+=(ht-g.vx)*hn,g.vy+=(tn-g.vy)*hn,g.x+=g.vx*M,g.y+=g.vy*M;const[Nt,Hn]=Be(g.x,g.y);(Nt!==g.x||Hn!==g.y)&&(g.orbita*=-1,g.vx*=-.35,g.vy*=-.35),g.x=Nt,g.y=Hn}const Dn=()=>{const pe=f.movendo?G?34:D?27:20:0,Ne=f.nx+f.dirX*pe,He=f.ny+f.dirY*pe,ht=Ne-g.x,tn=He-g.y,hn=Math.hypot(ht,tn)||1;g.dirX=ht/hn,g.dirY=tn/hn,g.dashMax=.75,g.estado="aviso",g.carga=G?.38:D?.52:.72},si=()=>{const pe=f.nx<Fn;g.x=pe?Mt.x1-4:Mt.x0+4,g.y=Be(0,f.ny)[1],g.dirX=pe?-1:1,g.dirY=0,g.dashMax=1.15,g.estado="aviso",g.carga=G?.34:D?.48:.68},B=pe=>{const Ne=f.movendo?f.dirX:W,He=f.movendo?f.dirY:he,ht=-He,tn=Ne;for(let hn=0;hn<pe;hn++){const Nt=Math.floor(hn/2)+1,Hn=hn%2?1:-1,Vu=20+Nt*14,Hu=18+Nt*7,[S0,y0]=Be(f.nx+Ne*Vu+ht*Hu*Hn,f.ny+He*Vu+tn*Hu*Hn),Wu=1+hn*.08;f.campos.push({x:S0,y:y0,r:23,aviso:Wu,avisoMax:Wu,vida:4.2,tick:0,ox:g.x,oy:g.y})}if(D){const[hn,Nt]=Be(f.nx+Ne*50,f.ny+He*50);f.campos.push({x:hn,y:Nt,r:25,aviso:1.25,avisoMax:1.25,vida:4.2,tick:0,ox:g.x,oy:g.y})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)},Ye=()=>{if(g.plano.length){const Nt=g.plano.shift();return g.memoria.push(Nt),g.memoria.length>4&&g.memoria.shift(),Nt}const pe=Wo[g.v].pesos,Ne=([Nt,,Hn])=>f.t>=Hn||(pe[Nt]||0)>0||G||D&&Hn<=210,He=new Set(Vn.filter(Ne).map(([Nt])=>Nt));let ht;Ae<62?ht=["tentaculos","varredura","rajada","psiquico","investida","teleporte","corte","olhar"]:Ae>125?ht=["bombas","psiquico","cerco","chuva","investida","mira","raio","corte","foice","ovnis","invocar"]:ht=["mira","raio","investida","espiral","aneis","olhar","rajada","psiquico"];for(const Nt of Object.keys(pe))He.has(Nt)&&!ht.includes(Nt)&&ht.push(Nt);f.campos.length>=7&&(ht=ht.filter(Nt=>Nt!=="bombas"&&Nt!=="psiquico")),f.tirosInimigos.length>=85&&(ht=ht.filter(Nt=>!["rajada","espiral","chuva","aneis","cerco"].includes(Nt))),ht=ht.filter(Nt=>He.has(Nt)&&!g.memoria.slice(-2).includes(Nt)),ht.length||(ht=[...He].filter(Nt=>!g.memoria.slice(-1).includes(Nt))),ht.length||(ht=["investida"]);const tn=ht.map(Nt=>{let Hn=1+(pe[Nt]||0);return Ae<62&&["tentaculos","varredura","rajada","psiquico"].includes(Nt)&&(Hn+=3),Ae>125&&["bombas","cerco","investida","corte"].includes(Nt)&&(Hn+=3),D&&["investida","foice","olhar","raio"].includes(Nt)&&(Hn+=2),G&&["foice","corte","varredura","tentaculos"].includes(Nt)&&(Hn+=3),[Nt,Hn]}),hn=mo(tn);return Ae>125&&["bombas","psiquico","cerco"].includes(hn)?g.plano.push(Math.random()<.55?"investida":"mira"):Ae<62&&["rajada","tentaculos"].includes(hn)&&g.plano.push(Math.random()<.5?"teleporte":"corte"),g.memoria.push(hn),g.memoria.length>4&&g.memoria.shift(),hn};if(g.estado==="espera")g.cd-=M*re,g.cd<=0&&(g.ataque=Ye(),g.estado="carga",g.carga=G?.2:D?.3:.46,fn(g.x,Math.max(12,g.y-24),En[g.ataque]||"","#ff7ab8"));else if(g.estado==="carga"){if(g.carga-=M,g.carga<=0){const pe=g.ataque;if(pe==="rajada"){const Ne=G?30:D?24:18,He=Math.random()*6;for(let ht=0;ht<Ne;ht++)C(g.x,g.y,He+ht*Math.PI*2/Ne,De(62));g.estado="espera",g.cd=2}else if(pe==="mira")g.salvas=G?6:D?5:4,g.cdSalva=0,g.estado="salvas";else if(pe==="teleporte")g.sumido=.6,g.estado="teleporte",g.carga=.6;else if(pe==="invocar"){const Ne=f.inimigos.filter(He=>He.tipo==="inseto").length;for(let He=0;He<4&&Ne+He<10;He++)Ri("inseto",g.x+(He-1.5)*12,g.y+14);g.estado="espera",g.cd=1.8,n(300,.2,"triangle",.05)}else if(pe==="ovnis"){const Ne=f.inimigos.filter(He=>He.tipo==="atirador").length;for(let He=0;He<2&&Ne+He<3;He++)Ri("atirador",g.x+(He?16:-16),g.y+14);g.estado="espera",g.cd=2,n(300,.25,"triangle",.05)}else if(pe==="investida")g.combo=G?1:0,g.modo="investida",Dn();else if(pe==="foice")g.combo=G?3:D?2:1,g.modo="investida",Dn();else if(pe==="corte")g.combo=G?2:D?1:0,g.modo="corte",si();else if(pe==="raio"){const Ne=Math.atan2(f.ny-g.y,f.nx-g.x),He=G?[Ne-.7,Ne-.35,Ne,Ne+.35,Ne+.7]:D?[Ne-.5,Ne,Ne+.5]:[Ne];for(const ht of He)f.raios.push({x:g.x,y:g.y+8,ang:ht,aviso:.9,vida:.55,tick:0,ligou:!1});g.estado="espera",g.cd=2.2,n(500,.3,"sine",.05)}else if(pe==="olhar"){const Ne=Math.atan2(f.ny-g.y,f.nx-g.x),He=G?7:D?6:5;for(let ht=0;ht<He;ht++)f.raios.push({x:g.x,y:g.y+8,ang:Ne+(ht-(He-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});g.estado="espera",g.cd=2.4,n(520,.3,"sine",.05)}else if(pe==="varredura"){const Ne=Math.random()<.5?1:-1,He=Math.atan2(f.ny-g.y,f.nx-g.x)-1*Ne;for(let ht=0;ht<(D?2:1);ht++)f.raios.push({x:g.x,y:g.y+8,ang:He+ht*Math.PI,giro:1.15*Ne*(G?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});g.estado="espera",g.cd=2.6,n(480,.3,"sine",.05)}else if(pe==="tentaculos"){const Ne=Math.random()*6.28,He=Math.random()<.5?1:-1,ht=D?6:4;for(let tn=0;tn<ht;tn++)f.raios.push({x:g.x,y:g.y+8,ang:Ne+tn*Math.PI*2/ht,giro:.9*He,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});g.estado="espera",g.cd=3,n(420,.3,"sine",.05)}else if(pe==="bombas")B(G?7:D?6:4),g.estado="espera",g.cd=G?.75:D?1.1:1.7;else if(pe==="psiquico"){const Ne=Math.random()*6.28,He=D?6:5;for(let ht=0;ht<He;ht++){const[tn,hn]=Be(f.nx+Math.cos(Ne+ht*Math.PI*2/He)*40,f.ny+Math.sin(Ne+ht*Math.PI*2/He)*40);f.campos.push({x:tn,y:hn,r:24,aviso:1.1+ht*.08,avisoMax:1.1+ht*.08,vida:3.5,tick:0,ox:g.x,oy:g.y})}f.campos.push({x:f.nx,y:f.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:g.x,oy:g.y}),g.estado="espera",g.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else Lt[pe]?(g.padrao={tipo:pe,t:Lt[pe]*(D?1.25:1),acc:0,ang:Math.random()*6.28},g.estado="padrao"):g.estado="espera";n(220,.12,"square",.05)}}else if(g.estado==="padrao"){const pe=g.padrao;if(pe.t-=M,pe.acc-=M,pe.acc<=0){if(pe.tipo==="espiral"){pe.acc=.075,pe.ang+=.38;const Ne=G?4:D?3:2;for(let He=0;He<Ne;He++)C(g.x,g.y+6,pe.ang+He*Math.PI*2/Ne,De(58));j("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(pe.tipo==="chuva"){pe.acc=G?.45:.6;const Ne=[Mt.x0+24+Math.random()*(Mt.x1-Mt.x0-48)];D&&Ne.push(Mt.x0+24+Math.random()*(Mt.x1-Mt.x0-48));for(let He=Mt.x0+4;He<=Mt.x1-4;He+=13)Ne.every(ht=>Math.abs(He-ht)>19)&&C(He,Mt.y0,Math.PI/2,De(58));n(240,.08,"square",.03)}else if(pe.tipo==="aneis"){pe.acc=.55;const Ne=24,He=Math.random()*Math.PI*2;for(let ht=0;ht<Ne;ht++){const tn=ht*Math.PI*2/Ne;Math.abs(Math.atan2(Math.sin(tn-He),Math.cos(tn-He)))>.42&&C(g.x,g.y,tn,De(55))}n(280,.08,"triangle",.03)}else if(pe.tipo==="cerco"){pe.acc=G?.08:.12;const Ne=Math.random()<.5?Mt.x0:Mt.x1,He=Mt.y0+Math.random()*(Mt.y1-Mt.y0);C(Ne,He,Math.atan2(f.ny-He,f.nx-Ne)+(Math.random()-.5)*.3,De(72)),j("cerco",90,()=>n(360,.04,"square",.02))}}pe.t<=0&&(g.estado="espera",g.cd=1.8)}else if(g.estado==="salvas"){if(g.cdSalva-=M,g.cdSalva<=0){const pe=Math.atan2(f.ny-g.y,f.nx-g.x);for(let Ne=-1;Ne<=1;Ne++)C(g.x,g.y+12,pe+Ne*.22,De(95));g.salvas-=1,g.cdSalva=.26,n(260,.06,"square",.04),g.salvas<=0&&(g.estado="espera",g.cd=1.6)}}else if(g.estado==="aviso")g.carga-=M,g.x+=(Math.random()-.5)*1.6,g.y+=(Math.random()-.5)*1.6,g.carga<=0&&(g.estado="investida",g.dashT=g.dashMax*(D?1.1:1),n(150,.25,"sawtooth",.06));else if(g.estado==="investida"){const pe=G?400:D?350:310;g.x+=g.dirX*pe*M,g.y+=g.dirY*pe*M,g.dashT-=M;const Ne=g.x<Mt.x0||g.x>Mt.x1||g.y<Mt.y0||g.y>Mt.y1;g.x=Math.max(Mt.x0,Math.min(Mt.x1,g.x)),g.y=Math.max(Mt.y0-10,Math.min(Mt.y1,g.y)),(g.dashT<=0||Ne)&&(f.tremor=Math.max(f.tremor,Ne?.2:0),g.combo>0?(g.combo-=1,g.modo==="corte"?si():Dn(),g.carga=.4):g.estado="volta")}else if(g.estado==="volta"){const pe=gt(),Ne=Bt(),He=pe-g.x,ht=Ne-g.y,tn=Math.hypot(He,ht)||1;g.x+=He/tn*Math.min(tn,260*M),g.y+=ht/tn*Math.min(tn,260*M),tn<5&&(g.estado="espera",g.cd=1.2)}else if(g.estado==="teleporte"&&(g.carga-=M,g.carga<=0)){const pe=Math.atan2(g.y-f.ny,g.x-f.nx)+Math.PI+(Math.random()-.5)*1.2,Ne=Ae<70?105:72;[g.x,g.y]=Be(f.nx+Math.cos(pe)*Ne,f.ny+Math.sin(pe)*Ne),g.sumido=0,g.vx=g.vy=0;const He=G?16:12;for(let ht=0;ht<He;ht++)C(g.x,g.y,ht*Math.PI*2/He,De(70));g.estado="espera",g.cd=1.3,n(440,.1,"square",.05)}}function Ci(M){let g=(bt.has("ArrowRight")||bt.has("KeyD")?1:0)-(bt.has("ArrowLeft")||bt.has("KeyA")?1:0),D=(bt.has("ArrowDown")||bt.has("KeyS")?1:0)-(bt.has("ArrowUp")||bt.has("KeyW")?1:0);if(!g&&!D&&At.ativo)if(At.toque)g=At.dx/18,D=At.dy/18;else{const ie=At.x-(f.nx-f.cx+kt/2),re=At.y-(f.ny-f.cy+Vt/2),Re=Math.hypot(ie,re);Re>3&&(g=ie/Re,D=re/Re)}const G=Math.hypot(g,D);if(f.movendo=G>.08,G>.08){f.dirX=g/G,f.dirY=D/G;const ie=Math.atan2(f.dirY,f.dirX)+Math.PI/2,re=Math.atan2(Math.sin(ie-f.angNave),Math.cos(ie-f.angNave));f.angNave+=re*Math.min(1,M*9*(f.giro||1));const Re=f.arma>=2?f.slots[f.arma-2]:"normal",De=f.armasNivel.turbo||1,K=f.armasNivel.drift||1,Me=Re==="turbo"&&f.boostE>0?1.55+.18*(De-1):1,Ae=f.driftT>0?1.75+.15*(K-1):1,W=Re==="salto"&&f.saltoCarga>0?.32:1,he=f.turboT>0?1.35:1,Se=Math.min(1,G),me=f.velNave*Me*Ae*W*he*(f.buffVelT>0?1.5:1)*(f.alien?1:f.lentidao||1);f.nx+=f.dirX*me*M*Se,f.ny+=f.dirY*me*M*Se}if(f.alien)f.nx=Math.max(Mt.x0,Math.min(Mt.x1,f.nx)),f.ny=Math.max(Mt.y0,Math.min(Mt.y1,f.ny)),f.cx=Fn,f.cy=_a;else{const ie=Math.min(1,M*5);f.cx+=(f.nx-f.cx)*ie,f.cy+=(f.ny-f.cy)*ie}}function ha(M){f.proxOnda-=M,f.proxOnda<=0&&f.ondaFila<=0&&Dc(),f.ondaT=Math.max(0,f.ondaT-M),f.ondaEstado=f.chefe?"chefe":f.ondaT>0||f.ondaFila>0?"ativa":"calma";const g=Math.min(54,12+3*xo());if(f.ondaFila>0&&(f.ondaSpawnT-=M,f.ondaSpawnT<=0)){const K=Math.min(f.ondaFila,Math.min(4,1+Math.floor((f.onda-1)/2)),Math.max(0,g-f.inimigos.length));K>0&&(us(K),f.ondaFila-=K),f.ondaSpawnT=K>0?Math.max(.72,1.45-f.onda*.045)+Math.random()*.38:.5}const D=.24+Math.min(.72,f.t*.0014)+.015*f.nivel;f.spawnAcc+=M*D*(f.ondaEstado==="chefe"?.45:1),(!Number.isFinite(f.spawnAcc)||f.spawnAcc<0)&&(f.spawnAcc=0);let G=0;for(;f.spawnAcc>=1&&G<3;)f.spawnAcc-=1,G+=1,f.inimigos.length<g&&Mo(2);f.ultX==null&&(f.ultX=f.nx,f.ultY=f.ny,f.andou=0,f.angAndar=0);const ie=f.nx-f.ultX,re=f.ny-f.ultY,Re=Math.hypot(ie,re);for(f.ultX=f.nx,f.ultY=f.ny,Re>0&&Re<60&&(f.andou+=Re,f.angAndar=Math.atan2(re,ie));f.andou>=170;)f.andou-=170,f.inimigos.length<g&&Mo(99,f.angAndar);if(f.ondaT<=0&&!f.chefe&&!f.buraco&&f.t>=f.proxBuraco&&Jt(),f.proxEstrela-=M,f.proxEstrela<=0&&(f.proxEstrela=16+Math.random()*14,f.itens.filter(K=>Ta[K.tipo]).length<2)){const K=Math.random()*Math.PI*2,Me=70+Math.random()*90;f.itens.push({tipo:mo(Z_),x:f.nx+Math.cos(K)*Me,y:f.ny+Math.sin(K)*Me,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(f.buraco&&(Ht(M),f.alien))return;f.rochas.length<3&&Math.random()<M*.12&&tt();for(let K=f.rochas.length-1;K>=0;K--){const Me=f.rochas[K];Me.x+=Me.vx*M,Me.y+=Me.vy*M,Me.piscar=Math.max(0,Me.piscar-M);const Ae=f.nx-Me.x,W=f.ny-Me.y,he=Math.hypot(Ae,W)||1;if(he>650){f.rochas.splice(K,1);continue}he<Me.r+Sa&&(f.nx+=Ae/he*(Me.r+Sa-he),f.ny+=W/he*(Me.r+Sa-he))}for(const K of[...f.inimigos]){if(K.tipo==="chefe"){ft(K,M),h.empurrar(K,_i.chefe.raio,{x:f.nx,y:f.ny},30*M);continue}K.buffT=Math.max(0,(K.buffT||0)-M),K.suporteFx=Math.max(0,(K.suporteFx||0)-M);const Me=f.nx-K.x,Ae=f.ny-K.y,W=Math.hypot(Me,Ae)||1,he=K.buffT>0?1.35:1;let Se=Me/W*K.vel*he,me=Ae/W*K.vel*he;if(K.tipo==="morcego"){const Be=Math.sin(f.ta*5+K.fase)*28;Se+=-Ae/W*Be,me+=Me/W*Be}else if(K.tipo==="inseto"){const Be=Math.sin(f.ta*9+K.fase)*22;Se+=-Ae/W*Be,me+=Me/W*Be}else if(K.tipo==="atirador"){const Be=W>92?1:.22,gt=Math.sin(f.ta*1.2+K.fase)*.35;Se=(Me/W*Be+-Ae/W*gt)*K.vel*he,me=(Ae/W*Be+Me/W*gt)*K.vel*he,K.cd-=M*he,K.cd<=0&&oi(K)&&(C(K.x,K.y,Math.atan2(Ae,Me),74,Ha()*(K.buffT>0?1.5:1)),K.cd=1.8+Math.random()*.9)}else if(K.tipo==="sentinela"){const Be=W>105?1:.2,gt=Math.atan2(Ae,Me);if(Se=(Me/W*Be+-Ae/W*Math.sin(f.ta+K.fase)*.28)*K.vel*he,me=(Ae/W*Be+Me/W*Math.sin(f.ta+K.fase)*.28)*K.vel*he,K.cd-=M*he,K.cd<=0&&oi(K)){for(const Bt of[-.18,0,.18])C(K.x,K.y,gt+Bt,82,Ha()*(K.buffT>0?1.5:1));K.cd=2.5+Math.random()*.8}}else if(K.tipo==="bombardeiro"){const Be=W>120?.9:.18;Se=Me/W*Be*K.vel*he,me=Ae/W*Be*K.vel*he,K.cd-=M*he,K.cd<=0&&oi(K)&&(Rt(K.x,K.y,K.buffT>0?2:1,1.15),K.cd=4+Math.random()*1.2)}else if(K.tipo==="fulminante"){const Be=W>125?.9:.18,gt=Math.atan2(Ae,Me);Se=(Me/W*Be+-Ae/W*Math.sin(f.ta*1.7+K.fase)*.28)*K.vel*he,me=(Ae/W*Be+Me/W*Math.sin(f.ta*1.7+K.fase)*.28)*K.vel*he,K.cd-=M*he,K.cd<=0&&oi(K)&&(f.raios.push({x:K.x,y:K.y,ang:gt,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:Ha(),dono:K}),K.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if(K.tipo==="curandeiro"){const Be=f.inimigos.filter(gt=>gt!==K&&!gt.morto&&gt.hp<gt.hpMax&&gt.tipo!=="chefe").sort((gt,Bt)=>Math.hypot(gt.x-K.x,gt.y-K.y)-Math.hypot(Bt.x-K.x,Bt.y-K.y))[0];if(Se=Me/W*K.vel*.68,me=Ae/W*K.vel*.68,Be){const gt=Be.x-K.x,Bt=Be.y-K.y,An=Math.hypot(gt,Bt)||1;Se+=gt/An*K.vel*.32,me+=Bt/An*K.vel*.32}if(K.cd-=M,K.cd<=0&&Be&&Math.hypot(Be.x-K.x,Be.y-K.y)<Zs){const gt=Math.max(1,Math.ceil(Be.hpMax*.22));Be.hp=Math.min(Be.hpMax,Be.hp+gt),Be.suporteFx=.8,K.suporteFx=.8,fn(Be.x,Be.y-8,`+${gt}`,"#7dff9a"),jt(Be.x,Be.y,5,["#7dff9a","#ffffff"],35),K.cd=2.7+Math.random()*.8}}else if(K.tipo==="amplificador"){const Be=f.inimigos.filter(Bt=>Bt!==K&&!Bt.morto&&Bt.tipo!=="chefe"&&Math.hypot(Bt.x-K.x,Bt.y-K.y)<Zs);for(const Bt of Be)Bt.buffT=Math.max(Bt.buffT||0,.4);Be.length&&(K.suporteFx=.25);const gt=W>85?.72:.2;Se=Me/W*gt*K.vel,me=Ae/W*gt*K.vel}const Je=h.fatorLento(K.x,K.y);K.x+=Se*M*Je,K.y+=me*M*Je,h.empurrar(K,_i[K.tipo].raio,{x:f.nx,y:f.ny},K.vel*M*.9),K.piscar=Math.max(0,K.piscar-M)}f.inimigos=f.inimigos.filter(K=>K.tipo==="chefe"||Math.hypot(K.x-f.nx,K.y-f.ny)<520);const De={x:f.nx,y:f.ny};h.empurrar(De,Sa),f.nx=De.x,f.ny=De.y,f.lentidao=h.fatorLento(f.nx,f.ny);for(let K=f.itens.length-1;K>=0;K--){const Me=f.itens[K];Me.vida-=M;const Ae=f.nx-Me.x,W=f.ny-Me.y,he=Math.hypot(Ae,W)||1;if(Me.tipo==="moedaEsp"&&he<f.raioIma*1.3&&(Me.x+=Ae/he*90*M,Me.y+=W/he*90*M),he<Sa+8){lt(Me),f.itens.splice(K,1);continue}Me.vida<=0&&f.itens.splice(K,1)}for(let K=f.cristais.length-1;K>=0;K--){const Me=f.cristais[K];Me.x+=Me.vx*M,Me.y+=Me.vy*M;const Ae=Math.pow(.05,M);Me.vx*=Ae,Me.vy*=Ae;const W=f.nx-Me.x,he=f.ny-Me.y,Se=Math.hypot(W,he)||1;if(f.imaT>0)Me.x+=W/Se*280*M,Me.y+=he/Se*280*M;else if(Se<f.raioIma){const me=70+(f.raioIma-Se)*4;Me.x+=W/Se*me*M,Me.y+=he/Se*me*M}Se<Sa+f.raioPegar&&(f.xp+=Me.v*f.bonusXp*(f.buffXpT>0?2:1),f.cristais.splice(K,1),jt(Me.x,Me.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(Me.v,6)*60,.05,"square",.03))}}function Gt(){let M=null,g=1/0;for(const ie of f.inimigos){if(ie.sumido>0||!oi(ie))continue;const re=Math.hypot(ie.x-f.nx,ie.y-f.ny);re<g&&(g=re,M=ie)}let D=null,G=120;for(const ie of f.rochas){if(!oi(ie))continue;const re=Math.hypot(ie.x-f.nx,ie.y-f.ny);re<G&&(G=re,D=ie)}return D&&(!M||g>45)?D:M}const en=M=>M.r||_i[M.tipo].raio;function mi(M){we!=="jogando"||!f||M>=2&&!f.slots[M-2]||f.arma!==M&&(f.arma=M,n(M===2?440:600,.05,"square",.03))}function Wt(){if(f.arma<2||f.slots[f.arma-2]!=="orbes")return[];const M=1+f.armasNivel.orbes,g=20+M*1.5;return Array.from({length:M},(D,G)=>({x:f.nx+Math.cos(f.orbeAng+G*Math.PI*2/M)*g,y:f.ny+Math.sin(f.orbeAng+G*Math.PI*2/M)*g}))}function Pi(M,g){const D=f.armasNivel.missil,G=24*(1+.16*(D-1)),ie=(5+f.dano*2)*f.danoGlobal*(1+.32*(D-1));f.ondas.push({x:M,y:g,r:0,max:G,v:170,cor:"#ff9a3a"}),jt(M,g,14,["#ffd23f","#ff7a3a","#ffffff"],80),f.tremor=Math.max(f.tremor,.1);for(const re of[...f.inimigos])!(re.sumido>0)&&Math.hypot(re.x-M,re.y-g)<G+_i[re.tipo].raio&&te(re,ie);for(const re of[...f.rochas])if(Math.hypot(re.x-M,re.y-g)<G+re.r)for(let Re=0;Re<3&&f.rochas.includes(re);Re++)it(re);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function pa(M){const g=f.arma>=2?f.slots[f.arma-2]:"normal",D=f.recM*f.recargaGlobal;f.laser=null;let G=!1;if(g==="laser"&&!f.laserQuente){const Ae=f.armasNivel.laser,W=Gt(),he=f.laserAlc*(1+.18*(Ae-1));if(W&&Math.hypot(W.x-f.nx,W.y-f.ny)<he+en(W)){G=!0;const Se=Math.atan2(W.y-f.ny,W.x-f.nx),me=Math.cos(Se),Je=Math.sin(Se);if(f.mira=Se,f.laser={ang:Se,len:he},f.laserE-=M*1.15,f.laserE<=0&&(f.laserE=0,f.laserQuente=!0,n(180,.2,"sawtooth",.04)),f.laserTick-=M,f.laserTick<=0){f.laserTick=.1,f.laserN+=1;const Be=f.laserDano*(.5+.5*f.dano)*f.danoGlobal*(1+.3*(Ae-1))*.1;for(const gt of[...f.inimigos]){const Bt=gt.x-f.nx,An=gt.y-f.ny,Dn=Bt*me+An*Je,si=Math.abs(-Bt*Je+An*me),B=_i[gt.tipo].raio;!(gt.sumido>0)&&Dn>0&&Dn<he+B&&si<B+3&&(te(gt,Be),Math.random()<.4&&jt(gt.x,gt.y,1,["#8bd3ff","#ffffff"],40))}if(f.laserN%3===0)for(const gt of[...f.rochas]){const Bt=gt.x-f.nx,An=gt.y-f.ny,Dn=Bt*me+An*Je,si=Math.abs(-Bt*Je+An*me);Dn>0&&Dn<he+gt.r&&si<gt.r+2&&it(gt)}j("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!G){const Ae=Math.max(1,f.armasNivel.laser),W=f.laserMax*(1+.18*(Ae-1));f.laserE=Math.min(W,f.laserE+M*W*.13*D*(1+.18*(Ae-1))),f.laserQuente&&f.laserE>=f.laserMax*.6&&(f.laserQuente=!1)}if(g==="missil"&&(f.missilT-=M,f.missilT<=0)){const Ae=[...f.inimigos.filter(W=>!(W.sumido>0)&&oi(W)),...f.rochas.filter(oi)].map(W=>({o:W,d:Math.hypot(W.x-f.nx,W.y-f.ny)})).filter(W=>W.d<135).sort((W,he)=>W.d-he.d);if(Ae.length){const W=f.armasNivel.missil,he=1+(W>=3?1:0)+(W>=4?1:0);for(let Se=0;Se<he;Se++){const me=Ae[Se%Ae.length].o;f.misseis.push({x:f.nx,y:f.ny,ang:Math.atan2(me.y-f.ny,me.x-f.nx)+(Se-(he-1)/2)*.9,alvo:me,vida:2,v:70})}f.missilMax=3.6/(D*(1+.22*(W-1))),f.missilT=f.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else f.missilT=0}for(let Ae=f.misseis.length-1;Ae>=0;Ae--){const W=f.misseis[Ae],he=W.alvo,Se=he&&he.hp>0&&!he.morto&&(f.inimigos.includes(he)||f.rochas.includes(he));if(Se){let Je=Math.atan2(he.y-W.y,he.x-W.x)-W.ang;Je=Math.atan2(Math.sin(Je),Math.cos(Je)),W.ang+=Math.max(-6*M,Math.min(6*M,Je))}W.v=Math.min(150,W.v+160*M),W.x+=Math.cos(W.ang)*W.v*M,W.y+=Math.sin(W.ang)*W.v*M,W.vida-=M,Math.random()<.6&&f.parts.push({x:W.x,y:W.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(Se&&Math.hypot(he.x-W.x,he.y-W.y)<en(he)+3||W.vida<=0)&&(f.misseis.splice(Ae,1),Pi(W.x,W.y))}if(g==="orbes"){const Ae=f.armasNivel.orbes;f.orbeAng+=M*3.2*(1+.18*(Ae-1))*f.recargaGlobal;const W=(2+f.dano*.5)*f.danoGlobal*(1+.32*(Ae-1));for(const he of Wt()){for(const Se of[...f.inimigos])Se.sumido>0||(Se.cdOrbe=(Se.cdOrbe||0)-M,Se.cdOrbe<=0&&Math.hypot(he.x-Se.x,he.y-Se.y)<_i[Se.tipo].raio+4&&(te(Se,W),Se.cdOrbe=.35,jt(Se.x,Se.y,2,["#ff3bd4","#ffffff"],40)));for(const Se of[...f.rochas])Se.cdOrbe=(Se.cdOrbe||0)-M,Se.cdOrbe<=0&&Math.hypot(he.x-Se.x,he.y-Se.y)<Se.r+4&&(it(Se),Se.cdOrbe=.5)}}const ie=Math.max(1,f.armasNivel.turbo),re=3+.75*(ie-1);f.boostMax=re,g==="turbo"&&f.movendo&&f.boostE>0?(f.boostE=Math.max(0,f.boostE-M),Math.random()<.45&&f.parts.push({x:f.nx-f.dirX*7,y:f.ny-f.dirY*7,vx:-f.dirX*20,vy:-f.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):f.boostE=Math.min(re,f.boostE+M*.5*D*(1+.12*(ie-1)));const Re=Math.max(1,f.armasNivel.cura);if(f.curaMax=Math.max(4.5,(11-1.6*(Re-1))/D),f.curaCd=Math.max(0,f.curaCd-M),g==="cura"&&f.curaCd<=0&&f.hp<f.maxHp){const Ae=1+(Re>=3?1:0)+(Re>=4?1:0);f.hp=Math.min(f.maxHp,f.hp+Ae),f.curaCd=f.curaMax,f.ondas.push({x:f.nx,y:f.ny,r:0,max:30,v:80,cor:"#7dff9a"}),jt(f.nx,f.ny,12,["#7dff9a","#ffffff"],45),fn(f.nx,f.ny-13,`+${Ae} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const De=Math.max(1,f.armasNivel.escudo);f.escudoMax=Math.max(6,(13-1.3*(De-1))/D),f.escudoCd=Math.max(0,f.escudoCd-M),g==="escudo"&&f.escudoCd<=0&&f.escudoT<=0&&(f.escudoT=2.4+.75*(De-1),f.escudoCd=f.escudoMax,f.ondas.push({x:f.nx,y:f.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),fn(f.nx,f.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const K=Math.max(1,f.armasNivel.salto);if(f.saltoMax=Math.max(3.5,(8-.85*(K-1))/D),f.saltoCd=Math.max(0,f.saltoCd-M),f.saltoCargaMax=Math.max(.42,.82-.1*(K-1)),g!=="salto"||!f.movendo?f.saltoCarga=0:f.saltoCd<=0&&f.saltoCarga<=0&&(f.saltoCarga=f.saltoCargaMax,n(180,.16,"sine",.04)),g==="salto"&&f.saltoCarga>0&&(f.saltoCarga-=M,Math.random()<.55&&f.parts.push({x:f.nx+(Math.random()-.5)*18,y:f.ny+(Math.random()-.5)*18,vx:-f.dirX*8,vy:-f.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),f.saltoCarga<=0)){const Ae=f.nx,W=f.ny,he=58+18*K;f.nx+=f.dirX*he,f.ny+=f.dirY*he,f.alien&&(f.nx=Math.max(Mt.x0,Math.min(Mt.x1,f.nx)),f.ny=Math.max(Mt.y0,Math.min(Mt.y1,f.ny))),f.saltoCd=f.saltoMax,f.invul=Math.max(f.invul,.35),f.ondas.push({x:Ae,y:W,r:0,max:24,v:120,cor:"#a56bff"}),f.ondas.push({x:f.nx,y:f.ny,r:0,max:24,v:120,cor:"#a56bff"}),jt(Ae,W,14,["#a56bff","#ffffff"],60),jt(f.nx,f.ny,14,["#a56bff","#ffffff"],60),f.flash=Math.max(f.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const Me=Math.max(1,f.armasNivel.drift);f.driftMax=Math.max(3.2,(7-.7*(Me-1))/D),f.driftCd=Math.max(0,f.driftCd-M),f.driftT=Math.max(0,f.driftT-M),g==="drift"&&f.driftCd<=0&&f.movendo&&f.driftT<=0&&(f.driftT=.75+.22*Me,f.driftCd=f.driftMax,f.driftAcc=0,f.tremor=Math.max(f.tremor,.12),n(130,.22,"sawtooth",.05)),f.driftT>0&&f.movendo&&(f.driftAcc-=M,f.driftAcc<=0&&(f.driftAcc=.055,f.trilhasFogo.push({x:f.nx-f.dirX*7,y:f.ny-f.dirY*7,vida:1+.12*Me,max:1+.12*Me,nv:Me})));for(const Ae of f.inimigos)Ae.cdFogo=Math.max(0,(Ae.cdFogo||0)-M);for(let Ae=f.trilhasFogo.length-1;Ae>=0;Ae--){const W=f.trilhasFogo[Ae];W.vida-=M;for(const he of[...f.inimigos])!(he.sumido>0)&&he.cdFogo<=0&&Math.hypot(he.x-W.x,he.y-W.y)<_i[he.tipo].raio+7&&(te(he,(1.2+W.nv*.75)*f.danoGlobal),he.cdFogo=.22);W.vida<=0&&f.trilhasFogo.splice(Ae,1)}}function ds(M){for(let g=f.tiros.length-1;g>=0;g--){const D=f.tiros[g];if(D.x+=D.vx*M,D.y+=D.vy*M,Math.hypot(D.x-f.nx,D.y-f.ny)>260){f.tiros.splice(g,1);continue}let G=!1;for(const ie of[...f.inimigos])if(!(D.acertou.has(ie)||ie.sumido>0)&&Math.hypot(D.x-ie.x,D.y-ie.y)<_i[ie.tipo].raio+2)if(D.acertou.add(ie),jt(D.x,D.y,2,["#ffe14a","#ffffff"],40),te(ie,D.dano),D.perf>0)D.perf-=1;else{G=!0;break}if(!G){for(const ie of[...f.rochas])if(!D.acertou.has(ie)&&Math.hypot(D.x-ie.x,D.y-ie.y)<ie.r+2)if(D.acertou.add(ie),it(ie),D.perf>0)D.perf-=1;else{G=!0;break}}G&&f.tiros.splice(g,1)}}function r0(M){for(let g=f.tirosInimigos.length-1;g>=0;g--){const D=f.tirosInimigos[g];if(D.x+=D.vx*M,D.y+=D.vy*M,D.vida-=M,D.vida<=0||Math.hypot(D.x-f.nx,D.y-f.ny)>420||f.alien&&(D.x<Mt.x0-40||D.x>Mt.x1+40||D.y<Mt.y0-40||D.y>Mt.y1+40)){f.tirosInimigos.splice(g,1);continue}Math.hypot(D.x-f.nx,D.y-f.ny)<Sa+1.5&&(se(D.dano),jt(D.x,D.y,4,["#ff5a8a","#ffffff"],50),f.tirosInimigos.splice(g,1))}for(let g=f.raios.length-1;g>=0;g--){const D=f.raios[g];if(D.dono){if(D.dono.morto){f.raios.splice(g,1);continue}D.x=D.dono.x,D.y=D.dono.y}if(D.aviso>0){D.aviso-=M;continue}D.ligou||(D.ligou=!0,f.tremor=Math.max(f.tremor,.2),n(110,.4,"sawtooth",.06)),D.vida-=M,D.tick-=M,D.giro&&(D.ang+=D.giro*M),D.seg&&f.alien&&(D.x=f.alien.x,D.y=f.alien.y+8);const G=f.nx-D.x,ie=f.ny-D.y,re=G*Math.cos(D.ang)+ie*Math.sin(D.ang),Re=Math.abs(-G*Math.sin(D.ang)+ie*Math.cos(D.ang));re>0&&re<400&&Re<8&&D.tick<=0&&(se(D.dano||1),D.tick=.3),D.vida<=0&&f.raios.splice(g,1)}for(let g=f.campos.length-1;g>=0;g--){const D=f.campos[g];if(D.aviso>0){D.aviso-=M,D.aviso<=0&&(f.tremor=Math.max(f.tremor,.15),n(100,.2,"sawtooth",.05));continue}D.vida-=M,D.tick-=M,Math.hypot(f.nx-D.x,f.ny-D.y)<D.r+3&&D.tick<=0&&(se(1),D.tick=.5),D.vida<=0&&f.campos.splice(g,1)}}function s0(){for(const M of[...f.inimigos]){const g=_i[M.tipo];if(Math.hypot(M.x-f.nx,M.y-f.ny)>=g.raio+Sa||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(se(g.dano)){const ie=f.nx-M.x,re=f.ny-M.y,Re=Math.hypot(ie,re)||1;f.nx+=ie/Re*18,f.ny+=re/Re*18}continue}if(g.dano<=0){const ie=M.x-f.nx,re=M.y-f.ny,Re=Math.hypot(ie,re)||1;M.x+=ie/Re*8,M.y+=re/Re*8;continue}jt(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const G=f.inimigos.indexOf(M);G>=0&&f.inimigos.splice(G,1),se(g.dano)}}function c0(M){if(f.ta+=M,f.alien||(f.t+=M),f.invul=Math.max(0,f.invul-M),f.tremor=Math.max(0,f.tremor-M),f.flash=Math.max(0,f.flash-M),f.imaT=Math.max(0,f.imaT-M),f.turboT=Math.max(0,f.turboT-M),f.escudoT=Math.max(0,f.escudoT-M),f.buffVelT=Math.max(0,f.buffVelT-M),f.buffXpT=Math.max(0,f.buffXpT-M),f.buffDanoT>0&&(f.buffDanoT-=M,f.buffDanoT<=0&&(f.buffDanoT=0,f.danoGlobal/=1.5)),f.aviso=Math.max(0,f.aviso-M),f.comboT>0&&(f.comboT-=M,f.comboT<=0&&(f.combo=0)),f.upgFx&&(f.upgFx.t-=M,f.upgFx.t<=0&&(f.upgFx=null)),Ci(M),f.alien?ri(M):ha(M),f.recarga-=M,f.arma===1&&f.recarga<=0){const g=Gt();g?(Oc(g),f.recarga=1/(f.cadencia*f.recargaGlobal*(f.turboT>0?2:1))):f.recarga=.05}f.barreira<f.barreiraMax&&(f.barreiraT+=M,f.barreiraT>=f.tempoBarreira&&(f.barreira+=1,f.barreiraT=0,fn(f.nx,f.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),pa(M),ds(M),r0(M),s0();for(const g of f.ondas)g.r+=g.v*M;f.ondas=f.ondas.filter(g=>g.r<g.max);for(let g=f.parts.length-1;g>=0;g--){const D=f.parts[g];D.x+=D.vx*M,D.y+=D.vy*M,D.vida-=M,D.vida<=0&&f.parts.splice(g,1)}for(let g=f.textos.length-1;g>=0;g--){const D=f.textos[g];D.y-=14*M,D.vida-=M,D.vida<=0&&f.textos.splice(g,1)}for(const g of f.inimigos)g.piscar=Math.max(0,(g.piscar||0)-M);if(f.hp<=0&&!f.pendente)if(f.alien)f.pendente="expulso";else{h0();return}if(f.pendente){const g=f.pendente;f.pendente=null,at(g==="vitoria");return}f.xp>=f.xpProx&&f0()}let ur=[];const Nu=M=>M.nivel?M.nivel(f):f.niveis[M.id]|0;function l0(M,g=3){const D=[...M],G=[],ie=De=>{const K=W=>(typeof W.peso=="function"?W.peso(f):W.peso)||1,Me=De.reduce((W,he)=>W+K(he),0);let Ae=Math.random()*Me;for(const W of De)if(Ae-=K(W),Ae<=0)return W;return De[De.length-1]},re=new Set(["dano_geral","reparo","armadura","motor","recarga_geral"]),Re=D.filter(De=>re.has(De.id));if(Re.length&&g>0){const De=ie(Re),K=D.indexOf(De);G.push(De),D.splice(K,1)}for(;D.length&&G.length<g;){const De=W=>(typeof W.peso=="function"?W.peso(f):W.peso)||1,K=D.reduce((W,he)=>W+De(he),0);let Me=Math.random()*K,Ae=0;for(let W=0;W<D.length;W++)if(Me-=De(D[W]),Me<=0){Ae=W;break}G.push(D.splice(Ae,1)[0])}return G}function f0(){f.xp-=f.xpProx,f.nivel+=1,f.xpProx=Math.round(f.xpProx*1.3+2);const M=Y_.filter(Re=>Nu(Re)<Re.max&&(!Re.requer||Re.requer(f)));if(ur=l0(M),!ur.length)return;we="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),Ge.className="arc-painel arc-upgrade";const g=r("div","arc-up-topo"),D=r("div");D.append(r("small",null,`SUBIU PARA O NÍVEL ${f.nivel}`),r("h3",null,"ESCOLHA UM UPGRADE"));const G=r("div","arc-arsenal arc-atributos"),ie=f.niveis;for(const Re of[`✦ DANO ${ie.dano_geral|0}`,`♥ VIDA ${ie.reparo|0}`,`⬢ ARM ${f.armadura}`,`➤ VEL ${ie.motor|0}`,`↻ REC ${ie.recarga_geral|0}`])G.append(r("span","on",Re));g.append(D,G);const re=r("div","arc-cartas");ur.forEach((Re,De)=>{const K=Nu(Re),Me=r("button","arc-carta");Me.style.setProperty("--cor",Re.cor||"#4aa8ff");const Ae=r("span","arc-carta-topo");Ae.append(r("i",null,Re.icone||"▲"),r("small",null,Re.grupo||"UPGRADE"),r("em",null,(typeof Re.raridade=="function"?Re.raridade(f):Re.raridade)||"COMUM"));const W=r("span","arc-up-pips");for(let he=1;he<=Re.max;he++)W.append(r("i",he<=K?"on":he===K+1?"prox":""));Me.append(Ae,r("b",null,Re.nome),r("span","arc-desc",Re.desc),W,r("strong",null,`[${De+1}] ESCOLHER · N${K} → N${K+1}`)),Me.onclick=()=>Du(De),re.append(Me)}),Ge.replaceChildren(g,re,r("p","arc-up-dica","Dano, vida, armadura, velocidade e recarga afetam a nave inteira. Evoluções de arma continuam específicas.")),Ge.hidden=!1}function Du(M){if(we!=="escolha"||!ur[M])return;const g=ur[M];g.aplicar(f),g.nivel||(f.niveis[g.id]=(f.niveis[g.id]|0)+1),Va(),f.upgFx={t:1,max:1},jt(f.nx,f.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),fn(f.nx,f.ny-16,`▲ ${g.nome}`,"#ffe14a"),Ge.hidden=!0,we="jogando",dt=performance.now(),n(660,.08,"triangle",.05)}const Fc=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","cadencia","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Vida, blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco","armadura"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Amplificador global e módulos específicos",lado:"dir",ancora:[.88,.42],ids:["dano","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],So=document.createElement("canvas");So.width=So.height=128,So.className="of-nave";const $t=So.getContext("2d");$t.imageSmoothingEnabled=!1;let Bc=null,dr=null;function u0(M){const g=vn(128,128),D=rh(U.projeto),G={chassi:D.chassi,arma:D.arma,propulsor:D.motor,reator:D.reator,eletronica:D.placa},ie=a?"#496044":o?"#172b59":"#2e7de0",re=a?"#b9a58b":o?"#91a0c8":"#8b93a8",Re=a?"#76513d":o?"#354582":"#5a6176",De=a?"#e8d5b8":o?"#b8c8ef":"#c9cdd8",K=a?"#28241f":o?"#090d24":"#171b2c",Me=a?"#d88b55":o?"#6c5cff":"#ff7a3a",Ae=a?"#b7683f":o?"#2d7fc7":"#e2533a";for(const[me,Je]of[[44,34],[82,92]]){for(let Be=0;Be<3;Be++)g.linha(me+Be,92,Je+Be,118,Be===1?re:Re);g.retangulo(Je-5,118,13,3,De)}g.retangulo(0,122,128,6,a?"#332b24":o?"#090d24":"#12172b");for(let me=0;me<128;me+=8)g.retangulo(me,123,4,4,a?"#d8b68e":o?"#55e2e0":"#ffd23f");if(g.disco(62,60,38,ie),G.chassi==="interceptor")g.poligono([[58,21],[94,48],[103,60],[94,72],[58,99]],ie),g.poligono([[35,31],[55,43],[45,49]],Me),g.poligono([[35,89],[55,77],[45,71]],Me);else if(G.chassi==="blindado")for(const[me,Je,Be,gt]of[[29,33,16,12],[29,76,16,12],[77,30,17,13],[78,77,17,13]])g.retangulo(me,Je,Be,gt,re),g.retangulo(me+2,Je+2,Be-4,gt-4,Re);else if(G.chassi==="modular")for(const[me,Je]of[[34,34],[88,34],[34,85],[88,85]])g.disco(me,Je,5,re),g.disco(me,Je,2,o?"#55e2e0":"#7dff9a");g.disco(65,62,33,K),g.elipse(46,30,7,3,a?"#fff1d7":o?"#d6fbff":"#cfe9ff"),g.elipse(40,36,3,2,a?"#d8b68e":o?"#8faeff":"#9cc9ff");for(const[me,Je,Be,gt]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])g.retangulo(me,Je,Be,gt,Re),g.retangulo(me,Je,Be,1,re),g.retangulo(me+2,Je+3,Be-4,2,"#2d3348");for(const[me,Je,Be,gt]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])g.linha(me,Je,Be,gt,Me),g.linha(me+1,Je+1,Be+1,gt+1,"#b34a1e");for(const[me,Je,Be]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])g.pixel(me,Je,Be);g.disco(65,62,14,re),g.disco(65,62,12,"#10131f");for(const[me,Je]of[[50,47],[79,47],[50,76],[79,76]])g.retangulo(me,Je,3,3,De);for(let me=0;me<M.bateria;me++)g.retangulo(51+me*5,85,4,6,"#10131f"),g.retangulo(52+me*5,86,2,4,"#7dff9a");if(g.disco(80,34,5,De),g.disco(80,34,4,a?"#f2d7ae":o?"#55e2e0":"#8bd3ff"),g.retangulo(77,33,6,1,a?"#fff1d7":o?"#d6fbff":"#ffffff"),a){for(const[me,Je]of[[30,28],[34,25],[38,28],[34,31]])g.disco(me,Je,2,"#91a56b");g.disco(34,28,2,"#e5b85c"),g.retangulo(22,82,10,4,"#e8d5b8"),g.retangulo(24,83,6,2,"#c96f45")}o&&(g.disco(32,29,6,"#55e2e0"),g.disco(35,27,6,ie),g.poligono([[24,82],[28,76],[32,82],[28,88]],"#6c5cff"),g.poligono([[32,84],[35,79],[38,84],[35,89]],"#55e2e0"),g.linha(43,27,48,27,"#d6fbff"),g.linha(46,24,46,30,"#d6fbff"));for(let me=0;me<M.casco;me++){const Je=2.6+me*.5,Be=Math.round(62+Math.cos(Je)*35),gt=Math.round(60+Math.sin(Je)*35);g.retangulo(Be-2,gt-2,5,5,Re),g.retangulo(Be-1,gt-1,3,3,De)}const W=G.arma==="duplo"?1:G.arma==="dispersor"?2:0,he=Math.min(4,1+M.projetil+W),Se=(G.arma==="rail"?28:18)+Math.floor(M.dano*1.6);for(let me=0;me<he;me++){const Je=48+me*(he>3?7:9);g.retangulo(88,Je-2,8,9,re),g.retangulo(90,Je,Se,5,Ae),g.retangulo(90,Je,Se,1,"#ff9a6a"),g.retangulo(90+Se,Je-1,3,7,De),M.lente>0&&g.disco(90+Se+5,Je+2,2,"#7be3ff");for(let Be=0;Be<M.cadencia;Be++)g.retangulo(92+Be*4,Je+1,1,3,"#ffd23f")}g.retangulo(16,50,24,22,re);for(const me of[20,26,32])g.retangulo(me,50,2,22,Re);if(g.poligono([[16,50],[8,44],[8,78],[16,72]],Re),g.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(g.retangulo(18,76,14,6,re),g.retangulo(14,76,4,6,Re)),M.motor>=2&&(g.poligono([[28,50],[32,41],[36,50]],Me),g.poligono([[28,72],[32,81],[36,72]],Me)),G.propulsor==="ionico")g.retangulo(10,48,8,8,re),g.retangulo(10,67,8,8,re),g.retangulo(7,50,4,4,"#55e2e0"),g.retangulo(7,69,4,4,"#55e2e0");else if(G.propulsor==="plasma")g.disco(12,61,8,"#6c5cff"),g.disco(12,61,4,"#d6fbff");else if(G.propulsor==="vetorial")for(const me of[48,61,74])g.retangulo(8,me,9,6,Re),g.retangulo(5,me+1,4,4,"#7dff9a");g.retangulo(63,10,3,14,re),g.disco(64,8,4,a?"#d88b55":o?"#55e2e0":"#e2243a"),g.pixel(63,6,a?"#fff1d7":o?"#d6fbff":"#ffb3ba");for(let me=0;me<Math.min(4,M.ima);me++)g.elipse(72+me*5,17-me*2,4,2,me%2?re:De);if(M.xp>0&&(g.retangulo(55,14,2,8,re),g.disco(56,13,2,"#7dff9a")),G.eletronica==="mira")g.linha(72,20,82,12,"#ff3b4a"),g.disco(83,11,3,"#ff3b4a");else if(G.eletronica==="coletor")g.elipse(48,14,11,4,"#55e2e0"),g.linha(48,14,55,23,De);else if(G.eletronica==="overclock")for(const[me,Je]of[[45,45],[83,45],[45,78],[83,78]])g.retangulo(me,Je,4,4,"#7dff9a"),g.pixel(me+1,Je+1,"#ffffff");return g.contorno(a?"#241b17":o?"#050817":"#070a1a"),g.c}const hr=(M,g,D,G)=>{$t.fillStyle=G;for(let ie=-D;ie<=D;ie++)for(let re=-D;re<=D;re++)re*re+ie*ie<=D*D+.5&&$t.fillRect(M+re,g+ie,1,1)};function Uu(M){const g=U.oficina,D=dr&&M-dr.t0<1.2?{i:dr.i,u:(M-dr.t0)/1.2}:null;$t.clearRect(0,0,128,128),Bc&&$t.drawImage(Bc,0,0);const G=rh(U.projeto),ie=G.reator,re=ie==="fusao"?["#ff5a2a","#ffc14a"]:ie==="quantico"?["#6c5cff","#d6a4ff"]:ie==="solar"?["#e5b85c","#fff3a0"]:g.nucleo>=4?["#ff7a2a","#ffc14a"]:g.nucleo>=2?["#22b85a","#7dff9a"]:a?["#b7683f","#f2d7ae"]:o?["#2f72ff","#55e2e0"]:["#2f8cff","#8bd3ff"],Re=Math.sin(M*4)>0?1:0;hr(65,62,9+Re,re[0]),hr(65,62,6,re[1]),hr(65,62,3,"#ffffff"),$t.fillStyle=re[1];for(let Se=0;Se<6;Se++){const me=M*2+Se*Math.PI/3;$t.fillRect(Math.round(65+Math.cos(me)*12),Math.round(62+Math.sin(me)*12),1,1)}const De=Se=>{const me=Math.round((8+g.motor*3+Math.floor(Math.random()*4))*(D&&D.i===1?1+1.5*(1-D.u):1));for(let Je=0;Je<me;Je++){const Be=Math.max(1,Math.round((1-Je/me)*12));$t.fillStyle=G.motor==="ionico"?Je<me*.55?"#d6fbff":"#55e2e0":G.motor==="plasma"?Je<me*.55?"#d6a4ff":"#6c5cff":Je<me*.35?"#fff0a0":Je<me*.7?"#ffc83d":"#ff7a3a",$t.fillRect(7-Je,Se-(Be>>1),1,Be)}};De(61),(g.motor>=3||G.motor!=="quimico")&&De(79),Math.floor(M*2)%2&&($t.fillStyle="#ff9aa6",$t.fillRect(63,6,2,2));const K=G.arma==="duplo"?1:G.arma==="dispersor"?2:0,Me=Math.min(4,1+g.projetil+K),Ae=(G.arma==="rail"?28:18)+Math.floor(g.dano*1.6);if(Math.floor(M*3)%2)for(let Se=0;Se<Me;Se++)$t.fillStyle="#ffe14a",$t.fillRect(90+Ae+3,48+Se*(Me>3?7:9)+2,2,1);const W=G.reator==="quantico"?1:0,he=g.escudo>0||W?.35+.13*(g.escudo+W):.12;$t.globalAlpha=Math.min(1,he),$t.fillStyle="#7dff9a";for(const[Se,me]of[[48,!0],[51,g.escudo>=4]])if(me)for(let Je=0;Je<72;Je+=2){const Be=Je*Math.PI*2/72+M*.4;$t.fillRect(Math.round(62+Math.cos(Be)*Se),Math.round(60+Math.sin(Be)*Se),2,2)}if($t.globalAlpha=1,D&&D.i>=0)d0(D,g);else if(D){const Se=D.u;$t.globalAlpha=1-Se,$t.strokeStyle="#55e2e0";const me=42+Math.round(Se*18);for(let Je=0;Je<64;Je+=2){const Be=Je*Math.PI*2/64;$t.fillStyle=Je%4?"#55e2e0":"#ffffff",$t.fillRect(Math.round(62+Math.cos(Be)*me),Math.round(60+Math.sin(Be)*me),2,2)}$t.globalAlpha=1}}function d0(M,g){const D=Fc[M.i],G=Math.round(D.ancora[0]*128),ie=Math.round(D.ancora[1]*128),re=M.u,Re=(De,K,Me,Ae,W=28)=>{$t.fillStyle=Ae;for(let he=0;he<W;he++){const Se=he*Math.PI*2/W;$t.fillRect(Math.round(De+Math.cos(Se)*Me),Math.round(K+Math.sin(Se)*Me),2,2)}};$t.globalAlpha=1-re,Re(G,ie,4+re*26,"#ffe14a"),$t.fillStyle="#ffffff";for(let De=0;De<10;De++){const K=De*.63+1,Me=re*34;$t.fillRect(Math.round(G+Math.cos(K)*Me),Math.round(ie+Math.sin(K)*Me-re*6),2,2)}if(M.i===0)hr(65,62,12+Math.round(re*8),"#ffffff");else if(M.i===2)Re(62,60,39,"#ffffff",64);else if(M.i===3)Re(64,8,re*42,"#8bd3ff",36),Re(64,8,re*24,"#ffffff",24);else if(M.i===4){const De=18+Math.floor(g.dano*1.6);for(let K=0;K<1+g.projetil;K++)hr(90+De+6,50+K*9,4,"#ffe14a")}else M.i===5&&Re(62,60,48+re*6,"#ffffff",72);$t.globalAlpha=1}function zc(){const M=q.querySelector(".of-corpo");if(!M)return;const g=M.querySelector("svg");if(g.replaceChildren(),getComputedStyle(g).display==="none")return;const D=M.getBoundingClientRect(),G=So.getBoundingClientRect(),ie="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(re=>{const Re=Fc[Number(re.dataset.i)],De=re.getBoundingClientRect(),K=(Re.lado==="esq"?De.right:De.left)-D.left,Me=(De.top+De.bottom)/2-D.top,Ae=G.left+Re.ancora[0]*G.width-D.left,W=G.top+Re.ancora[1]*G.height-D.top,he=K+(Re.lado==="esq"?18:-18),Se=document.createElementNS(ie,"path");Se.setAttribute("d",`M${K} ${Me} L${he} ${Me} L${Ae} ${W}`),Se.setAttribute("class","of-linha");const me=document.createElementNS(ie,"circle");me.setAttribute("cx",Ae),me.setAttribute("cy",W),me.setAttribute("r",4),me.setAttribute("class","of-ponto"),g.append(Se,me)})}window.addEventListener("resize",()=>{we==="oficina"&&zc()});let pr="montagem",hs=null;const mr=X_({el:r,obterDados:()=>U,tema:t,bip:n,aoMudar:()=>{$e(),Va(),ps(),hs&&(hs.textContent=`◆ ${U.moedas}`),mr.render()}});function Gc(M=-1,g=""){const D=U.oficina;Bc=u0(D);const G=r("div","of-topo"),ie=r("button","arc-btn","VOLTAR [ESC]");ie.onclick=Fu,hs=r("span","of-moedas",`◆ ${U.moedas}`),G.append(r("h3",null,"OFICINA · GARAGEM MECATRÔNICA"),hs,ie);const re=r("div","of-abas");for(const[he,Se]of[["montagem","MONTAGEM DA NAVE"],["ajuste","AJUSTE FINO · UPGRADES"]]){const me=r("button",`of-aba${pr===he?" on":""}`,Se);me.onclick=()=>{pr=he,Gc()},re.append(me)}const Re=r("div","of-corpo"),De=r("div","of-col"),K=r("div","of-col"),Me=r("div","of-centro");Me.append(So,r("p",null,"Melhorias permanentes por subsistema: elas somam com as peças montadas na aba MONTAGEM.")),Fc.forEach((he,Se)=>{const me=r("div",Se===M?"of-parte upgradiada":"of-parte");me.dataset.i=String(Se),Se===M&&me.append(r("span","of-selo","▲ UPGRADE!")),me.append(r("h4",null,he.nome),r("p","sub",he.sub));for(const Je of he.ids){const Be=pu.find(pe=>pe.id===Je),gt=D[Je],Bt=gt>=Be.max,An=Be.custo(gt),Dn=r("div",Se===M&&Je===g?"of-melhoria upg":"of-melhoria"),si=r("div","info"),B=r("span","pips");for(let pe=0;pe<Be.max;pe++)B.append(r("i",pe<gt?pe===gt-1&&Se===M&&Je===g?"on nova":"on":""));si.append(r("b",null,Be.nome),r("small",null,Be.desc),B);const Ye=r("button","arc-btn pequeno",Bt?"MÁX":`◆${An}`);Ye.disabled=Bt||U.moedas<An,Ye.onclick=()=>{U.moedas>=An&&!Bt&&(U.moedas-=An,U.oficina[Je]+=1,$e(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),dr={i:Se,t0:performance.now()/1e3},Va(),Gc(Se,Je),ps())},Dn.append(si,Ye),me.append(Dn)}(he.lado==="esq"?De:K).append(me)});const Ae=document.createElementNS("http://www.w3.org/2000/svg","svg");Ae.setAttribute("class","of-svg"),Re.append(De,Me,K,Ae);const W=r("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");pr==="montagem"?(mr.render(),q.replaceChildren(G,re,mr.raiz,r("p","of-rodape","Clique num encaixe da nave, escolha a peça e acompanhe energia, calor e massa. Peças bloqueadas podem ser testadas em prévia sem gastar nada; fabricar custa moedas espaciais (uma vez só). A nave montada aparece no jogo e no planeta."))):(q.replaceChildren(G,re,Re,W),Uu(performance.now()/1e3),requestAnimationFrame(zc))}function ps(){_e.textContent=`OFICINA (◆${U.moedas})`}function Ou(){ct=we==="fim"?"fim":"inicio",we="oficina",Q.hidden=!0,vt.hidden=!0,pr="montagem",mr.ao_abrir(),Gc(),q.hidden=!1,requestAnimationFrame(zc)}function Fu(){we==="oficina"&&(we=ct,q.hidden=!0,(ct==="fim"?vt:Q).hidden=!1,ps())}function h0(){we="fim",Y("fim");const M=Math.min(q_,Math.floor(f.kills/30)+Math.floor(f.nivel/3)),g=Math.floor(f.t),D=g>U.tempo||f.kills>U.kills||f.onda>U.onda;U.tempo=Math.max(U.tempo,g),U.kills=Math.max(U.kills,f.kills),U.onda=Math.max(U.onda,f.onda),U.skin=(U.skin+1+Math.floor(Math.random()*(ea.length-1)))%ea.length,U.moedas+=M,$e(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),vt.replaceChildren(r("h3",null,"FIM DE JOGO"),r("p",null,`Tempo: ${ms(g)} · Monstros: ${f.kills} · Nível: ${f.nivel} · Onda: ${f.onda} · Melhor combo: x${f.melhorCombo}`),r("p","ganhou",`+${M+f.moedasRun} ◆ MOEDAS ESPACIAIS`),r("p","dica",`${f.moedasRun} coletadas + ${M} de bônus · Recorde: ${ms(U.tempo)} · ${U.kills} monstros · ${U.onda} ondas${D?" · NOVO RECORDE!":""}`));const G=r("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");G.onclick=kc;const ie=r("button","arc-btn sec",`OFICINA (◆${U.moedas})`);ie.onclick=Ou;const re=r("button","arc-btn sec","SAIR");re.onclick=yo,vt.append(G,ie,re),vt.hidden=!1}const ms=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,Bu=M=>M>=6?l.cristais[6]:M>=3?l.cristais[3]:M>=2?l.cristais[2]:l.cristais[1],zu=(M,g,D,G,ie)=>{P.fillStyle="#070a1a",P.fillRect(M-1,g-1,D+2,6),P.fillStyle="#3a2030",P.fillRect(M,g,D,4),P.fillStyle=ie,P.fillRect(M,g,Math.max(0,Math.round(D*G)),4)};function p0(M){P.fillStyle="#0a0614",P.fillRect(0,0,kt,Vt);for(let g=0;g<6;g++){const D=10+(M*22+g*40)%240;P.strokeStyle=`rgba(138, 92, 255, ${.28*(1-D/250)})`,P.lineWidth=1,P.beginPath(),P.arc(Fn,_a,D,0,Math.PI*2),P.stroke()}for(let g=0;g<40;g++)P.fillStyle=Math.sin(M*2+g)>0?"#9a86c0":"#3a2f60",P.fillRect(g*53%kt,g*31%Vt,1,1);P.strokeStyle="#8a5cff",P.lineWidth=2,P.strokeRect(Mt.x0-3,Mt.y0-3,Mt.x1-Mt.x0+6,Mt.y1-Mt.y0+6)}function gs(M,g,D,G,ie,re="",Re=!1){const De=M-(D+kt/2),K=g-(G+Vt/2),Me=Math.min((kt/2-10)/(Math.abs(De)||1e-6),(Vt/2-10)/(Math.abs(K)||1e-6)),Ae=Math.round(kt/2+De*Me),W=Math.round(Vt/2+K*Me);if(!(Re&&Math.floor(f.ta*6)%2===0)&&(P.fillStyle="#070a1a",P.fillRect(Ae-3,W-3,7,7),P.fillStyle=ie,P.fillRect(Ae-2,W-2,5,5),P.fillStyle="#ffffff",P.fillRect(Ae-1,W-1,3,3),re)){const he=Ae<kt/2;P.font="bold 8px monospace",P.textAlign=he?"left":"right";const Se=Ae+(he?7:-7),me=Math.max(10,Math.min(Vt-4,W+3));P.fillStyle="#070a1a",P.fillText(re,Se+1,me+1),P.fillStyle=Re?"#ff9aa6":ie,P.fillText(re,Se,me)}}function m0(){const M=performance.now()/1e3,g=f?f.cx:Fn,D=f?f.cy:_a;if(P.save(),f&&f.alien?p0(M):ae.desenhar(P,g,D,M,fs()),!f){P.restore();return}const G=Math.round(g-kt/2),ie=Math.round(D-Vt/2),re=(B,Ye,pe=16)=>B>G-pe&&B<G+kt+pe&&Ye>ie-pe&&Ye<ie+Vt+pe,Re=!f.alien;P.save(),f.tremor>0&&P.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),P.translate(-G,-ie),P.strokeStyle="rgba(74, 168, 255, 0.12)",P.lineWidth=1;for(const B of[30,62])P.beginPath(),P.arc(Math.round(f.nx),Math.round(f.ny),B,0,Math.PI*2),P.stroke();for(const B of f.campos){if(!re(B.x,B.y,40))continue;const Ye=Math.round(B.x),pe=Math.round(B.y);if(B.aviso>0){const Ne=Math.floor(f.ta*8)%2===0;P.strokeStyle=Ne?"#ff3b4a":"#ffb3ba",P.lineWidth=1,P.setLineDash([3,3]),P.beginPath(),P.arc(Ye,pe,B.r,0,Math.PI*2),P.stroke(),P.setLineDash([]),P.fillStyle="rgba(255, 59, 74, 0.12)",P.beginPath(),P.arc(Ye,pe,Math.max(0,B.r*(1-B.aviso/(B.avisoMax||1.4))),0,Math.PI*2),P.fill()}else{P.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(f.ta*10)})`,P.beginPath(),P.arc(Ye,pe,B.r,0,Math.PI*2),P.fill(),P.strokeStyle="#ff8a3a",P.lineWidth=2,P.beginPath(),P.arc(Ye,pe,B.r,0,Math.PI*2),P.stroke();for(let Ne=0;Ne<6;Ne++){const He=f.ta*3+Ne*1.05;P.fillStyle="#ffd23f",P.fillRect(Math.round(Ye+Math.cos(He)*B.r*.6),Math.round(pe+Math.sin(He)*B.r*.6),2,2)}}}for(const B of f.campos)if(B.aviso>0&&B.ox!==void 0){const Ye=(B.avisoMax-B.aviso)/.45;if(Ye>=0&&Ye<1){const pe=Math.round(B.ox+(B.x-B.ox)*Ye),Ne=Math.round(B.oy+(B.y-B.oy)*Ye-Math.sin(Math.PI*Ye)*24);P.fillStyle="#070a1a",P.fillRect(pe-3,Ne-3,6,6),P.fillStyle="#ff7a3a",P.fillRect(pe-2,Ne-2,4,4),P.fillStyle="#ffffff",P.fillRect(pe-1,Ne-2,2,1)}}if(Re){if(h.desenhar(P,G,ie,kt,Vt,M),f.buraco&&re(f.buraco.x,f.buraco.y,30)){p_(P,f.buraco.x,f.buraco.y,f.ta,Math.min(1,f.buraco.vida/3));const B=`${Math.ceil(f.buraco.vida)}s`,Ye=Math.round(f.buraco.x),pe=Math.round(f.buraco.y)-28;P.save(),P.font="bold 8px monospace",P.textAlign="center",P.fillStyle="#070a1a",P.fillText(B,Ye+1,pe+1),P.fillStyle=f.buraco.vida<8&&Math.floor(f.ta*6)%2===0?"#ff9aa6":"#d9a8ff",P.fillText(B,Ye,pe),P.restore()}for(const B of f.rochas){if(!re(B.x,B.y,20))continue;const Ye=B.hp<=B.hpMax*.34?2:B.hp<=B.hpMax*.67?1:0,pe=c[B.tam].quadros[Ye];B.piscar>0&&(P.globalAlpha=.6),P.drawImage(pe,Math.round(B.x-pe.width/2),Math.round(B.y-pe.height/2)),P.globalAlpha=1}for(const B of f.itens)!re(B.x,B.y)||B.vida<4&&B.tipo!=="moedaEsp"&&Math.floor(f.ta*8)%2===0||(Ta[B.tipo]&&(P.save(),P.globalAlpha=.22+.14*Math.sin(f.ta*6+B.fase),P.fillStyle=Ta[B.tipo].cor,P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),10,0,Math.PI*2),P.fill(),P.restore()),P.drawImage(u[B.tipo],Math.round(B.x-6),Math.round(B.y-6+Math.sin(f.ta*4+B.fase))));for(const B of f.cristais)re(B.x,B.y)&&P.drawImage(Bu(B.v),Math.round(B.x-3.5),Math.round(B.y-4.5+Math.sin(f.ta*4+B.fase)))}for(const B of f.trilhasFogo){if(!re(B.x,B.y,12))continue;const Ye=Math.max(0,B.vida/B.max),pe=1+Math.floor(Math.sin(f.ta*18+B.x)*1.5);P.globalAlpha=Math.max(.18,Ye),P.fillStyle="#8f1d20",P.fillRect(Math.round(B.x)-5,Math.round(B.y)-2,10,5),P.fillStyle="#ff5a2a",P.fillRect(Math.round(B.x)-3,Math.round(B.y)-4-pe,7,7+pe),P.fillStyle="#ffe14a",P.fillRect(Math.round(B.x)-1,Math.round(B.y)-3-pe,3,4+pe),P.fillStyle="#ffffff",P.fillRect(Math.round(B.x),Math.round(B.y)-3-pe,1,2),P.globalAlpha=1}for(const B of f.inimigos){if(!re(B.x,B.y,40))continue;const Ye=Math.floor(f.ta*6+B.fase)%2;let pe;if(B.tipo==="alien"){const Ne=m(B.v);pe=(B.piscar>0?Ne.brancos:Ne.quadros)[Math.floor(f.ta*3)%2],P.globalAlpha=B.sumido>0?.25:B.estado==="carga"&&Math.floor(f.ta*16)%2===0?.6:1}else if(B.tipo==="chefe"){const Ne=_(B.b);pe=(B.piscar>0?Ne.brancos:Ne.quadros)[Math.floor(f.ta*4)%2];const He=25+Math.sin(f.ta*4)*3;P.fillStyle="rgba(5, 0, 12, .72)",P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),He,0,Math.PI*2),P.fill(),P.strokeStyle=Math.floor(f.ta*8)%2?"#ff233f":"#6c1230",P.lineWidth=2,P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),He+3,0,Math.PI*2),P.stroke()}else{const Ne=$_[B.tipo]||B.tipo,He=x(B.v).m[Ne];pe=(B.piscar>0?He.brancos:He.quadros)[Ye],B.tipo==="fantasma"&&(P.globalAlpha=.85)}if(P.drawImage(pe,Math.round(B.x-pe.width/2),Math.round(B.y-pe.height/2)),P.globalAlpha=1,B.tipo==="chefe")P.fillStyle="#ff233f",P.fillRect(Math.round(B.x)-7,Math.round(B.y)-5,4,2),P.fillRect(Math.round(B.x)+4,Math.round(B.y)-5,4,2),P.fillStyle="#ffffff",P.fillRect(Math.round(B.x)-6,Math.round(B.y)-5,1,1),P.fillRect(Math.round(B.x)+5,Math.round(B.y)-5,1,1),B.movEsp&&B.movEsp.carga>0&&(P.strokeStyle=B.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",P.lineWidth=2,P.setLineDash([3,3]),P.beginPath(),B.movEsp.tipo==="minhoca"?P.arc(Math.round(B.x),Math.round(B.y),20+Math.sin(f.ta*12)*4,0,Math.PI*2):(P.moveTo(Math.round(B.x),Math.round(B.y)),P.lineTo(Math.round(B.x+B.movEsp.dx*240),Math.round(B.y+B.movEsp.dy*240))),P.stroke(),P.setLineDash([]));else if(B.tipo==="curandeiro"){P.save(),P.globalAlpha=.3,P.strokeStyle="#7dff9a",P.lineWidth=1,P.setLineDash([2,4]),P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),Zs,0,Math.PI*2),P.stroke(),P.restore();const Ne=9+Math.sin(f.ta*6+B.fase)*2;P.strokeStyle="#7dff9a",P.lineWidth=1,P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),Ne,0,Math.PI*2),P.stroke(),P.fillStyle="#ffffff",P.fillRect(Math.round(B.x)-1,Math.round(B.y)-10,3,7),P.fillRect(Math.round(B.x)-3,Math.round(B.y)-8,7,3)}else if(B.tipo==="amplificador"){P.save(),P.globalAlpha=.3,P.strokeStyle="#ff7ab8",P.lineWidth=1,P.setLineDash([2,4]),P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),Zs,0,Math.PI*2),P.stroke(),P.restore();const Ne=11+(f.ta*8+B.fase)%5;P.strokeStyle=`rgba(255, 122, 184, ${.9-(Ne-11)*.12})`,P.lineWidth=2,P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),Ne,0,Math.PI*2),P.stroke(),P.fillStyle="#ff7ab8";for(const He of[-4,0,4])P.fillRect(Math.round(B.x+He),Math.round(B.y-10-Math.abs(He)/2),2,4)}else B.tipo==="fulminante"&&(P.strokeStyle="#38c8ff",P.lineWidth=1,P.beginPath(),P.moveTo(Math.round(B.x)-8,Math.round(B.y)-7),P.lineTo(Math.round(B.x)-3,Math.round(B.y)-12),P.lineTo(Math.round(B.x),Math.round(B.y)-8),P.lineTo(Math.round(B.x)+5,Math.round(B.y)-13),P.stroke());if(B.buffT>0){P.fillStyle="#ffe14a";for(const Ne of[-5,3])P.fillRect(Math.round(B.x+Ne),Math.round(B.y-13),3,1),P.fillRect(Math.round(B.x+Ne+1),Math.round(B.y-14),1,1)}}for(const B of f.tirosInimigos)re(B.x,B.y,4)&&(P.fillStyle="#ff5a8a",P.fillRect(Math.round(B.x)-2,Math.round(B.y)-2,4,4),P.fillStyle="#ffd0e0",P.fillRect(Math.round(B.x)-1,Math.round(B.y)-1,2,2));if(f.alien&&f.alien.estado==="aviso"){const B=f.alien;P.strokeStyle=Math.floor(f.ta*14)%2?"#ff3b4a":"#ffb3ba",P.lineWidth=2,P.setLineDash([4,4]),P.beginPath(),P.moveTo(Math.round(B.x),Math.round(B.y)),P.lineTo(Math.round(B.x+B.dirX*300),Math.round(B.y+B.dirY*300)),P.stroke(),P.setLineDash([])}for(const B of f.raios){const Ye=B.x+Math.cos(B.ang)*400,pe=B.y+Math.sin(B.ang)*400;P.beginPath(),P.moveTo(Math.round(B.x),Math.round(B.y)),P.lineTo(Math.round(Ye),Math.round(pe));const Ne=B.cor||"#ff3bd4";B.aviso>0?(P.strokeStyle=Math.floor(f.ta*16)%2?Ne:"#ffffff",P.lineWidth=1,P.setLineDash([3,3]),P.stroke(),P.setLineDash([])):(P.strokeStyle=Ne,P.lineWidth=7,P.stroke(),P.strokeStyle="#ffffff",P.lineWidth=3,P.stroke())}for(const B of f.tiros)P.fillStyle=B.critico?"#ff5a2a":"#ffe14a",P.fillRect(Math.round(B.x)-(B.critico?2:1),Math.round(B.y)-(B.critico?2:1),B.critico?4:3,B.critico?4:3),P.fillStyle="#ffffff",P.fillRect(Math.round(B.x),Math.round(B.y),1,1);if(f.laser){const B=Math.cos(f.laser.ang),Ye=Math.sin(f.laser.ang),pe=f.nx+B*f.laser.len,Ne=f.ny+Ye*f.laser.len;P.beginPath(),P.moveTo(Math.round(f.nx+B*7),Math.round(f.ny+Ye*7)),P.lineTo(Math.round(pe),Math.round(Ne)),P.strokeStyle=Math.floor(f.ta*24)%2?"#38c8ff":"#8bd3ff",P.lineWidth=4,P.stroke(),P.strokeStyle="#ffffff",P.lineWidth=1.5,P.stroke()}for(const B of f.misseis){const Ye=Math.cos(B.ang),pe=Math.sin(B.ang);P.fillStyle="#070a1a",P.fillRect(Math.round(B.x)-3,Math.round(B.y)-3,6,6),P.fillStyle="#ff9a3a",P.fillRect(Math.round(B.x+Ye*1)-2,Math.round(B.y+pe*1)-2,4,4),P.fillStyle="#ffffff",P.fillRect(Math.round(B.x+Ye*2),Math.round(B.y+pe*2),1,1)}const De=f.invul>0&&Math.floor(f.ta*14)%2===0,K=Math.PI/8,Me=Math.round(f.mira/K)*K,Ae=Math.round(f.nx),W=Math.round(f.ny),he=f.tiers||{motor:0,armas:0},Se=(B,Ye,pe,Ne)=>{for(let He=0;He<pe;He++)P.fillStyle=He<pe*.35?Ne[0]:He<pe*.7?Ne[1]:Ne[2],P.fillRect(B-(He<pe*.6?1:0),Ye+He,He<pe*.6?2:1,1)},me=f.arma>=2?f.slots[f.arma-2]:"normal",Je=me==="turbo"&&f.boostE>0,Be=2+he.motor+(f.movendo?3:0)+(f.turboT>0||Je?3:0)+(f.driftT>0?5:0)+Math.floor(Math.random()*2);P.save(),P.translate(Ae,W),P.rotate(f.angNave||0);for(const B of ue)Se(B.x-gn/2,B.y-gn/2,B.tipo==="plasma"?Be+2:Be,B.cores);if(he.motor>=2)for(const B of[-7,7])Se(B,7,Math.max(2,Be-3),["#fff0a0","#ffc83d","#ff7a3a"]);P.restore(),P.fillStyle=f.driftT>0?"#ffffff":f.turboT>0||Je?"#ff7a3a":"#ffd23f";const gt=Math.min(4,f.projeteis),Bt=5+Math.min(4,Math.floor(he.armas/2)),An=-Math.sin(Me),Dn=Math.cos(Me);for(let B=0;B<gt;B++){const Ye=(B-(gt-1)/2)*2.4;for(let pe=4;pe<=4+Bt;pe++)P.fillRect(Math.round(Ae+Math.cos(Me)*pe+An*Ye)-1,Math.round(W+Math.sin(Me)*pe+Dn*Ye)-1,2,2);U.oficina.lente>0&&(P.fillStyle="#7be3ff",P.fillRect(Math.round(Ae+Math.cos(Me)*(5+Bt)+An*Ye)-1,Math.round(W+Math.sin(Me)*(5+Bt)+Dn*Ye)-1,2,2),P.fillStyle=f.turboT>0?"#ff7a3a":"#ffd23f")}const si=(B,Ye=1)=>{P.save(),P.globalAlpha*=Ye,P.translate(Ae,W),P.rotate(f.angNave||0),P.drawImage(B,-gn/2,-gn/2),P.restore()};if(si(De?k.branca:k.c),f.upgFx){const B=1-f.upgFx.t/f.upgFx.max;si(k.branca,.7*(1-B)),P.globalAlpha=1-B,P.strokeStyle="#ffe14a",P.lineWidth=2,P.beginPath(),P.arc(Ae,W,Math.max(0,8+B*22),0,Math.PI*2),P.stroke(),P.strokeStyle="#ffffff",P.lineWidth=1,P.beginPath(),P.arc(Ae,W,Math.max(0,5+B*14),0,Math.PI*2),P.stroke(),P.globalAlpha=1}for(const[B,Ye,pe]of[[f.buffDanoT,"#ff3b4a",14],[f.buffVelT,"#ffd23f",16],[f.buffXpT,"#a56bff",18]])B>0&&(B>2.5||Math.floor(f.ta*8)%2===0)&&(P.save(),P.globalAlpha=.55,P.strokeStyle=Ye,P.lineWidth=1,P.setLineDash([2,3]),P.beginPath(),P.arc(Ae,W,pe+Math.sin(f.ta*8)*1.2,0,Math.PI*2),P.stroke(),P.restore());f.escudoT>0&&(f.escudoT>1.5||Math.floor(f.ta*10)%2===0)&&(P.strokeStyle="#8bd3ff",P.lineWidth=2,P.beginPath(),P.arc(Ae,W,11,0,Math.PI*2),P.stroke()),f.barreira>0&&(P.strokeStyle="#7dff9a",P.lineWidth=1,P.globalAlpha=.7,P.beginPath(),P.arc(Ae,W,12+(f.barreira>1?2:0),0,Math.PI*2),P.stroke(),P.globalAlpha=1);for(const B of Wt()){const Ye=Math.round(B.x),pe=Math.round(B.y);P.fillStyle="#070a1a",P.fillRect(Ye-3,pe-3,7,7),P.fillStyle="#ff3bd4",P.fillRect(Ye-2,pe-2,5,5),P.fillStyle="#ffffff",P.fillRect(Ye-1,pe-1,2,2)}for(const B of f.parts)re(B.x,B.y,4)&&(P.fillStyle=B.cor,P.fillRect(Math.round(B.x),Math.round(B.y),2,2));for(const B of f.ondas)P.strokeStyle=B.cor,P.lineWidth=2,P.globalAlpha=Math.max(0,1-B.r/B.max),P.beginPath(),P.arc(Math.round(B.x),Math.round(B.y),Math.max(0,B.r),0,Math.PI*2),P.stroke(),P.globalAlpha=1;P.font="bold 8px monospace",P.textAlign="center";for(const B of f.textos)P.globalAlpha=Math.min(1,B.vida*2),P.fillStyle="#070a1a",P.fillText(B.txt,Math.round(B.x)+1,Math.round(B.y)+1),P.fillStyle=B.cor,P.fillText(B.txt,Math.round(B.x),Math.round(B.y)),P.globalAlpha=1;if(P.restore(),Re){const B=f.cristais.filter(Ye=>!re(Ye.x,Ye.y,2)).map(Ye=>({c:Ye,d:Math.hypot(Ye.x-f.nx,Ye.y-f.ny)})).filter(Ye=>Ye.d<620).sort((Ye,pe)=>Ye.d-pe.d).slice(0,6);P.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:Ye}of B){const pe=Ye.x-(G+kt/2),Ne=Ye.y-(ie+Vt/2),He=Math.min((kt/2-10)/(Math.abs(pe)||1e-6),(Vt/2-10)/(Math.abs(Ne)||1e-6));P.drawImage(Bu(Ye.v),Math.round(kt/2+pe*He-3.5),Math.round(Vt/2+Ne*He-4.5))}P.globalAlpha=1,f.buraco&&!re(f.buraco.x,f.buraco.y,2)&&gs(f.buraco.x,f.buraco.y,G,ie,"#c43fff",`${Math.ceil(f.buraco.vida)}s`,f.buraco.vida<8),f.chefe&&!re(f.chefe.x,f.chefe.y,2)&&gs(f.chefe.x,f.chefe.y,G,ie,"#ff3b4a");for(const Ye of f.itens)Ye.tipo==="moedaEsp"&&!re(Ye.x,Ye.y,2)&&gs(Ye.x,Ye.y,G,ie,"#38c8ff");for(const Ye of f.itens)Ta[Ye.tipo]&&!re(Ye.x,Ye.y,2)&&gs(Ye.x,Ye.y,G,ie,Ta[Ye.tipo].cor,`${Math.ceil(Ye.vida)}s`,Ye.vida<5)}if(!f.alien){const B=(Ye,pe,Ne,He,ht="center")=>{P.font="bold 8px monospace",P.textAlign=ht,P.fillStyle="#070a1a",P.fillText(Ye,pe+1,Ne+1),P.fillStyle=He,P.fillText(Ye,pe,Ne)};f.combo>=3&&B(`COMBO x${f.combo}`,kt-8,22,f.combo>=50?"#ff7ab8":f.combo>=25?"#ff9a3a":f.combo>=10?"#ffe14a":"#ffffff","right")}f.chefe&&(P.fillStyle="rgba(40, 0, 15, .34)",P.fillRect(0,0,kt,5),P.fillRect(0,Vt-5,kt,5),P.fillRect(0,0,5,Vt),P.fillRect(kt-5,0,5,Vt),P.font="bold 7px monospace",P.textAlign="center",P.fillStyle="#070a1a",P.fillText(Za[f.chefe.b].nome,Fn+1,8),P.fillStyle="#ff7084",P.fillText(Za[f.chefe.b].nome,Fn,7),zu(Fn-60,11,120,f.chefe.hp/f.chefe.hpMax,"#ff3b4a")),f.alien&&zu(Fn-60,8,120,f.alien.hp/f.alien.hpMax,"#ff3bd4"),f.flash>0&&(P.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,f.flash*2.5)})`,P.fillRect(0,0,kt,Vt)),P.restore()}let xs="";function g0(){if(!f)return;const M=f.arma>=2?f.slots[f.arma-2]:"normal",g=[f.buffDanoT>0?`DANO+ ${Math.ceil(f.buffDanoT)}`:"",f.buffVelT>0?`VELOC+ ${Math.ceil(f.buffVelT)}`:"",f.buffXpT>0?`XP×2 ${Math.ceil(f.buffXpT)}`:"",f.lentidao<1?"DETRITOS: LENTO":"",f.imaT>0?"ÍMÃ":"",f.escudoT>0?`ESCUDO ${Math.ceil(f.escudoT)}`:"",f.turboT>0?`TURBO ${Math.ceil(f.turboT)}`:"",M==="turbo"&&f.boostE>0?"HIPERPROPULSOR":"",f.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),D=`${f.hp}/${f.maxHp}|${f.nivel}|${Math.floor(f.xp)}|${f.xpProx}|${f.kills}|${Math.floor(f.t)}|${f.onda}|${f.fase}|${f.aviso>0}|${f.avisoTxt}|${g}|${U.moedas}|${!!f.alien}`;if(D===xs)return;xs=D,Fe.replaceChildren(...Array.from({length:f.maxHp},(ie,re)=>r("i",re+1<=f.hp?"cheia":re<f.hp?"meia":"vazia")));const G=Math.max(0,Math.round(f.hp*10)/10);Fe.setAttribute("aria-label",`${G} de ${f.maxHp} pontos de vida · ${Math.round(Math.min(.5,f.armadura*.06)*100)}% de redução por armadura`),Oe.textContent=`NV ${f.nivel}`,fe.style.width=`${Math.min(100,f.xp/f.xpProx*100)}%`,rt.setAttribute("aria-valuenow",String(Math.floor(f.xp))),rt.setAttribute("aria-valuemax",String(f.xpProx)),ye.textContent=`☠ ${f.kills}`,Ce.textContent=f.alien?"BURACO NEGRO":f.onda>0?`F${f.fase} · ONDA ${f.onda}${f.ondaFila>0?` · ${f.ondaFila} A CAMINHO`:""}`:"",Ce.classList.toggle("alerta",!!f.alien||f.ondaEstado==="chefe"),ge.textContent=g,Pe.textContent=`◆ ${U.moedas}`,A.hidden=!(f.aviso>0),A.textContent=f.avisoTxt,ot.textContent=ms(Math.floor(f.t))}function x0(){const M=f&&(we==="jogando"||we==="escolha"||we==="pausa");if(Ke.style.visibility=M?"visible":"hidden",!!M)for(let g=1;g<=4;g++){const{b:D,nm:G,barra:ie}=ve[g-1],re=g===1?"normal":f.slots[g-2];let Re="VAZIO",De=-1;re&&(Re=`${J_[re]||vc[re].curto} · N${f.armasNivel[re]}`,re==="laser"?De=f.laserE/(f.laserMax*(1+.18*(f.armasNivel.laser-1))):re==="missil"?De=1-Math.max(0,f.missilT)/f.missilMax:re==="turbo"?De=f.boostE/f.boostMax:re==="cura"?De=1-f.curaCd/f.curaMax:re==="escudo"?De=f.escudoT>0?1:1-f.escudoCd/f.escudoMax:re==="salto"?De=f.saltoCarga>0?1-f.saltoCarga/f.saltoCargaMax:1-f.saltoCd/f.saltoMax:re==="drift"&&(De=f.driftT>0?1:1-f.driftCd/f.driftMax)),G.textContent!==Re&&(G.textContent=Re),ie.style.display=De<0?"none":"block",ie.style.width=`${Math.round(Math.max(0,Math.min(1,De))*100)}%`,D.classList.toggle("ativa",f.arma===g),D.classList.toggle("vazio",g>=2&&!re),D.classList.toggle("quente",re==="laser"&&f.laserQuente),D.disabled=g>=2&&!re,D.setAttribute("aria-pressed",String(f.arma===g)),D.setAttribute("aria-label",`Arma ${g}: ${Re}${re==="laser"&&f.laserQuente?", superaquecida":""}`)}}function v0(){const M=we==="jogando"||we==="pausa";if(ee.hidden=!M,!M)return;const g=we==="pausa";ee.textContent=g?"▶":"II",ee.title=g?"Continuar (Esc)":"Pausar (Esc)",ee.setAttribute("aria-label",g?"Continuar jogo":"Pausar jogo")}function Gu(M){if(window.__curriculoArcadeGeracao!==s){Ve=!1,cancelAnimationFrame(Te);return}if(!Ve)return;const g=Math.min((M-dt)/1e3,.05);dt=M,we==="jogando"&&c0(g),we==="oficina"&&(pr==="montagem"?mr.animar(M/1e3):Uu(M/1e3)),ae.passo(g),m0(),g0(),x0(),v0(),Te=requestAnimationFrame(Gu)}function kc(){bt.clear(),At.ativo=!1,qe.hidden=!0,Z(),S="normal",y.pause(),T.pause(),E.currentTime=0,O(),go(),_o(4),xs="",Q.hidden=!0,vt.hidden=!0,Ge.hidden=!0,ze.hidden=!0,q.hidden=!0,we="jogando",dt=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function gr(M){M&&we==="jogando"?(we="pausa",bt.clear(),At.ativo=!1,qe.hidden=!0,ze.hidden=!1,V()):!M&&we==="pausa"&&(we="jogando",ze.hidden=!0,dt=performance.now(),O())}function M0(){Ve||(Ve=!0,ke.classList.add("aberto"),S="normal",y.pause(),T.pause(),O(),Z(),U=ch(),ut.textContent=U.tempo||U.kills||U.onda?`RECORDE  ${ms(U.tempo)}  ·  ${U.kills} MONSTROS  ·  ONDA ${U.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",f=null,we="inicio",xs="",go(),Q.hidden=!1,vt.hidden=!0,Ge.hidden=!0,ze.hidden=!0,q.hidden=!0,Fe.replaceChildren(),Oe.textContent="",ye.textContent="",ot.textContent="",Ce.textContent="",ge.textContent="",Pe.textContent=`◆ ${U.moedas}`,fe.style.width="0",ps(),dt=performance.now(),Te=requestAnimationFrame(Gu),le.focus({preventScroll:!0}))}function yo(){Ve&&(Ve=!1,bt.clear(),At.ativo=!1,qe.hidden=!0,ke.classList.remove("aberto"),V(),cancelAnimationFrame(Te))}le.onclick=kc,_e.onclick=Ou,je.onclick=()=>gr(!1),xt.onclick=yo,ee.onclick=()=>gr(we==="jogando"),Ie.onclick=yo,ke.addEventListener("pointerdown",M=>{M.target===ke&&we!=="jogando"&&we!=="escolha"&&yo()}),window.addEventListener("visibilitychange",()=>{document.hidden&&gr(!0)});const ku=M=>{const g=F.getBoundingClientRect();At.x=(M.clientX-g.left)/g.width*kt,At.y=(M.clientY-g.top)/g.height*Vt},_0=M=>{const g=F.getBoundingClientRect(),D=(M.clientX-g.left)/g.width*kt,G=(M.clientY-g.top)/g.height*Vt;At.dx=D-At.origemX,At.dy=G-At.origemY;const ie=At.dx*(g.width/kt),re=At.dy*(g.height/Vt),Re=Math.hypot(ie,re)||1,K=Math.min(1,28/Re);N.style.transform=`translate(calc(-50% + ${Math.round(ie*K)}px), calc(-50% + ${Math.round(re*K)}px))`};F.addEventListener("pointerdown",M=>{if(we==="jogando"){if(At.ativo=!0,At.toque=M.pointerType!=="mouse",ku(M),At.toque){const g=F.getBoundingClientRect();At.origemX=At.x,At.origemY=At.y,At.dx=At.dy=0,qe.style.left=`${Math.round(M.clientX-g.left)}px`,qe.style.top=`${Math.round(M.clientY-g.top)}px`,N.style.transform="translate(-50%, -50%)",qe.hidden=!1}F.setPointerCapture?.(M.pointerId)}}),F.addEventListener("pointermove",M=>{At.ativo&&(At.toque?_0(M):ku(M))});for(const M of["pointerup","pointercancel"])F.addEventListener(M,()=>{At.ativo=!1,At.toque=!1,At.dx=At.dy=0,qe.hidden=!0});return window.addEventListener("keyup",M=>bt.delete(M.code)),window.addEventListener("blur",()=>bt.clear()),window.addEventListener("keydown",M=>{if(Ve){if(ai.includes(M.code)){M.preventDefault(),we==="jogando"&&bt.add(M.code);return}if(M.code==="Escape")M.preventDefault(),we==="jogando"?gr(!0):we==="pausa"?gr(!1):we==="oficina"?Fu():(we==="inicio"||we==="fim")&&yo();else if(M.code==="Space"||M.code==="Enter")(we==="inicio"||we==="fim")&&(M.preventDefault(),kc());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const g=Number(M.code.slice(-1));we==="escolha"?Du(g-1):mi(g)}}},!0),{abrir:M0,fechar:yo,estaAberto:()=>Ve}}const wt=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},lh={mailto:()=>`mailto:${Ra.email}`,tel:()=>`tel:${Ra.telefoneTel}`,github:()=>Ra.github,linkedin:()=>Ra.linkedin,portfolio:()=>Ra.portfolio,repo:()=>Ra.repo},mu=n=>lh[n]?lh[n]():n,tS={email:()=>Ra.email,telefone:()=>Ra.telefone};function gu(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function Uf(n){const e=wt("div","etiquetas");for(const t of n)e.append(wt("span","etq",t));return e}function nS(n){const e=wt("a","btn");return e.href=mu(n.url),gu(e),e.append(wt("span","ic",n.icone||"↗"),wt("span","tx",n.rotulo)),e}function iS(n){const e=wt("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=tS[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const aS=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function fh(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function oS(n){const e=wt("div","numeros jogo"),t=(i,a)=>{const o=wt("div","num");o.append(wt("b",null,String(i)),wt("span",null,a)),e.append(o)};if(n==="cassino"){const i=fh("curriculo-cassino-v1");if(!i)return wt("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=fh("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return wt("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t(aS(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function rS(n){const e=wt("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=wt("summary"),i=wt("span","tit");i.append(wt("b",null,n.titulo)),n.local&&i.append(wt("i",null,n.local)),t.append(i,wt("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=wt("div","corpo");if(n.texto&&a.append(wt("p",null,n.texto)),n.tags&&a.append(Uf(n.tags)),n.links){const o=wt("div","links");for(const s of n.links)o.append(nS(s));a.append(o)}return e.append(t,a),e}const uh={destaque:n=>wt("p","destaque",n.texto),texto:n=>wt("p",null,n.texto),dica:n=>wt("p","dica",n.texto),numeros:n=>{const e=wt("div","numeros");for(const t of n.itens){const i=wt("div","num");i.append(wt("b",null,t.v),wt("span",null,t.r)),e.append(i)}return e},etiquetas:n=>Uf(n.itens),grupo:n=>{const e=wt("div","grupo");return e.append(wt("h3",null,n.titulo),Uf(n.itens)),e},cartao:rS,estatisticas:n=>oS(n.fonte),links:n=>{const e=wt("div","contatos");for(const t of n.itens){const i=wt("div","contato"),a=wt("a","ln");a.href=mu(t.url),gu(a);const o=wt("span","tx");o.append(wt("small",null,t.rotulo),wt("b",null,t.valor)),a.append(wt("span","ic",t.icone||"↗"),o),i.append(a),t.copiar&&i.append(iS(t.copiar)),e.append(i)}return e}};function sS(n,e){const t=wt("div","rodape"),i=wt("span","prog"),a=wt("span","pts");for(const o of e.zonas)a.append(wt("i",e.visitadas.has(o.id)?"vis":""));if(i.append(a,wt("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(wt("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const o=wt("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");o.href=mu("mailto"),gu(o),t.append(o)}return t}function cS(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(o=>({tipo:"texto",texto:o})))t.push((uh[a.tipo]??uh.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const o of i)o!==a&&(o.open=!1)});return t.push(sS(n,e)),t}const lS=.32,dh=.7;function fS({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const o=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,o,{passive:!0});return{atualizar(s,r){const l=t&&n()&&!r&&!document.hidden?lS:0;a+=Math.max(-s*dh,Math.min(s*dh,l-a)),e.volume=Math.max(0,Math.min(1,a)),l>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):l===0&&a<=.001&&!e.paused&&e.pause()}}}const Vp="curriculo-carinhos-v1";function uS(){try{const n=JSON.parse(localStorage.getItem(Vp));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function dS(n){try{localStorage.setItem(Vp,JSON.stringify(n))}catch{}}const hS=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let hh=null;function pS(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,o)=>{e.fillStyle=o,hS.forEach((s,r)=>[...s].forEach((l,c)=>{l==="X"&&e.fillRect(c+i,r+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let ph=null;function mS(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(r,l)=>r<=7&&l<=i[r];for(let r=-7;r<=7;r++)for(let l=-7;l<=7;l++)(a(Math.abs(r),Math.abs(l))||a(Math.abs(l),Math.abs(r)))&&(t.fillStyle=l+r>4?"#b01820":l+r<-4?"#ff5a5f":"#e3262d",t.fillRect(8+l,8+r,1,1));const o=t.getImageData(0,0,17,17).data,s=(r,l)=>r>=0&&l>=0&&r<17&&l<17&&o[(l*17+r)*4+3]>0;t.fillStyle="#3a0d12";for(let r=0;r<17;r++)for(let l=0;l<17;l++)!s(l,r)&&(s(l+1,r)||s(l-1,r)||s(l,r+1)||s(l,r-1))&&t.fillRect(l,r,1,1);return e.toDataURL()}function Hp(n,e,t,i,a,o,s){for(let r=0;r<s;r++){const l=document.createElement("i"),c=i[Math.floor(Math.random()*i.length)];l.className="coracao",l.style.cssText=`background-image:url(${n});width:${e*c}px;height:${t*c}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(o)}px;animation-delay:${(r*.09).toFixed(2)}s;`,l.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),l.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),l.addEventListener("animationend",()=>l.remove()),document.body.append(l)}}function gS(n,e,t=5){hh??=pS(),Hp(hh,9,8,[2,2,3],n,e,t)}function xS(n,e,t=6){ph??=mS(),Hp(ph,17,17,[2,3,3],n,e,t)}function vS(n){const e=new Yt,t=new Yt;e.add(t);const i=n(3120732),a=n(2325061),o=new Ti({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:fi}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),r=new Ti({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),l=new xn(1,6,4),c=new xn(1,6,4),u=new Zt(1,1,1,5),h=(y,T,I,S,R,L)=>{const O=new z(y,0,T),V=new z(I,S,R),Y=V.clone().sub(O),H=new _t(u,a);H.scale.set(L,Y.length(),L),H.position.copy(O).addScaledVector(Y,.5),H.quaternion.setFromUnitVectors(new z(0,1,0),Y.normalize()),t.add(H)},d=(y,T,I,S,R)=>{for(const L of[-1,1]){const O=new _t(c,i);O.scale.set(.13*R,.025*R,.065*R),O.position.set(y+Math.cos(S)*.1*R*L,T,I+Math.sin(S)*.1*R*L),O.rotation.set(0,-S,L*.35),t.add(O)}},p=(y,T,I,S)=>{const R=new Yt;R.position.set(y,T,I),R.rotation.x=.95;for(let O=0;O<5;O++){const V=O/5*Math.PI*2,Y=new _t(l,o);Y.scale.set(.075*S,.022*S,.15*S),Y.position.set(Math.sin(V)*.1*S,0,Math.cos(V)*.1*S),Y.rotation.y=V,R.add(Y)}const L=new _t(l,s);return L.scale.setScalar(.045*S),L.position.y=.025*S,R.add(L),t.add(R),R},m=(y,T,I)=>{const S=new _t(l,r);S.scale.set(.04,.065,.04),S.position.set(y,T,I),t.add(S)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const _=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),x=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)});const b=new Kt;b.position.set(0,.85,.05),e.add(b);const w=new Kt;w.position.set(0,1.05,0),e.add(w);let E=0;return{raiz:e,cabeca:b,topo:w,carinho(){E=1},atualizar(y,T){E=Math.max(0,E-T*2.2);const I=Math.sin(E*Math.PI);t.rotation.z=Math.sin(y*1.3)*.045+Math.sin(E*18)*.12*E,t.rotation.x=Math.sin(y*.9+1)*.03,t.scale.setScalar(1+I*.22),_.rotation.y=Math.sin(y*.8)*.15,v.rotation.y=Math.sin(y*.7+2)*.2,x.rotation.y=Math.sin(y*.75+4)*.2}}}const Ks={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Yo=32,Ko=24,MS=3,Wp=1,_S=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],SS={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function yS({cauda:n,olhos:e}){const t=_S.map(l=>[...l,...[...l].reverse()]),i=(l,c,u)=>{t[l][c]=u,t[l][23-c]=u};if(e==="piscando")for(let l=3;l<=5;l++)i(7,l,"G"),i(8,l,"K"),i(9,l,"G");if(e==="feliz"){for(let l=3;l<=5;l++)i(7,l,"G"),i(8,l,"G"),i(9,l,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Yo,a.height=Ko;const o=a.getContext("2d");t.forEach((l,c)=>l.forEach((u,h)=>{u!=="."&&(o.fillStyle=Ks[u],o.fillRect(h+MS,c+Wp,1,1))})),SS[n].forEach(([l,c],u)=>{o.fillStyle=u%3===2?Ks.D:Ks.G,o.fillRect(l-1,c,2,1)});const s=o.getImageData(0,0,Yo,Ko).data,r=(l,c)=>l>=0&&c>=0&&l<Yo&&c<Ko&&s[(c*Yo+l)*4+3]>0;o.fillStyle=Ks.K;for(let l=0;l<Ko;l++)for(let c=0;c<Yo;c++)!r(c,l)&&(r(c+1,l)||r(c-1,l)||r(c,l+1)||r(c,l-1))&&o.fillRect(c,l,1,1);return a}const mh=1;function bS(){const n={},e=(d,p)=>{if(!n[d]){const m=new Yr(yS(p));m.colorSpace=qn,m.magFilter=m.minFilter=ln,m.generateMipmaps=!1,n[d]=new au({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Yt,i=new np(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,Wp/Ko),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const o=a.getContext("2d"),s=o.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=s,o.fillRect(0,0,32,32);const r=new _t(new da(.75,.5),new Hi({map:new Yr(a),transparent:!0,opacity:.5,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.03;const l=new Kt;l.position.y=.55;const c=new Kt;c.position.y=.8,t.add(r,i,l,c);let u=0,h=0;return{raiz:t,cabeca:l,topo:c,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const _=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${_}-${v}`,{cauda:_,olhos:v});const x=1+Math.sin(d*2.2)*.012;i.scale.set(Yo*m*mh,Ko*m*mh*x,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const Xp="curriculo-futebol-v1",Of=.25,ES=.085,AS=1.6,Si=1.8,Qi=.9,Xn=.6,Cr=new z(0,1,0),TS=new z(0,.4,.92).normalize();function wS(){try{return JSON.parse(localStorage.getItem(Xp))?.gols|0}catch{return 0}}function RS(n){try{localStorage.setItem(Xp,JSON.stringify({gols:n}))}catch{}}function CS(){const n=new co(Of,2),e=(1+Math.sqrt(5))/2,t=[];for(const r of[-1,1])for(const l of[-e,e])t.push([0,r,l],[r,l,0],[l,0,r]);const i=t.map(r=>new z(...r).normalize()),a=n.attributes.position,o=new Float32Array(a.count*3),s=new z;for(let r=0;r<a.count;r+=3){s.set(0,0,0);for(let c=0;c<3;c++)s.add(new z(a.getX(r+c),a.getY(r+c),a.getZ(r+c)));s.normalize();const l=i.some(c=>s.dot(c)>Math.cos(.36));for(let c=0;c<3;c++)o.set(l?[.07,.07,.1]:[.97,.97,.97],(r+c)*3)}return n.setAttribute("color",new Ei(o,3)),new _t(n,new Ti({vertexColors:!0,flatShading:!0,roughness:.55}))}function PS(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Yr(n);return t.wrapS=t.wrapT=sc,t.magFilter=t.minFilter=ln,t.generateMipmaps=!1,t}function IS(){const n=new Yt,e=new Ti({color:16119285,roughness:.5,flatShading:!0}),t=r=>new Zt(.045,.045,r,6),i=(r,l,c,u,h)=>{const d=new _t(t(r),e);d.position.set(l,c,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const r of[-Si/2,Si/2])for(const l of[0,-Xn])i(Qi,r,Qi/2,l,"y");for(const r of[0,-Xn])i(Si+.09,0,Qi,r,"x"),i(Si+.09,0,.04,r,"x");for(const r of[-Si/2,Si/2])i(Xn,r,Qi,-Xn/2,"z"),i(Xn,r,.04,-Xn/2,"z");const a=(r,l)=>{const c=PS();return c.repeat.set(r/.15,l/.15),new _t(new da(r,l),new Hi({map:c,transparent:!0,alphaTest:.3,side:fi,depthWrite:!1}))},o=a(Si,Qi);o.position.set(0,Qi/2,-Xn);const s=a(Si,Xn);s.rotation.x=Math.PI/2,s.position.set(0,Qi,-Xn/2),n.add(o,s);for(const r of[-Si/2,Si/2]){const l=a(Xn,Qi);l.rotation.y=Math.PI/2,l.position.set(r,Qi/2,-Xn/2),n.add(l)}return n.traverse(r=>{r.isMesh&&r.material===e&&(r.castShadow=!0)}),n}function LS(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new _t(new da(n*2,n*2),new Hi({map:new Yr(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function NS({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:o,dirsZonas:s,raioBloqueio:r,obstaculos:l,dirsSitios:c,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=wS(),_=0,v="jogando",x=0,b=-1;const w=new bi,E=new bi,y=new bi,T=new bi,I=new z,S=new z,R=new z,L=new z,O=new z,V=new z,Y=new Yt,H=CS(),Z=LS(.35);H.position.y=Of,H.castShadow=!0;const ae=new Kt;ae.position.y=.85,Y.add(Z,H,ae);const k={d:new z(0,1,0),ue:0,un:0,escala:1,piv:null};k.piv=e(Y,k.d.clone(),0);const ue=IS(),U=new Kt;U.position.set(0,1.5,-Xn/2),ue.add(U);const X={d:new z(0,1,0),ex:new z,ez:new z,escala:1,piv:null};X.piv=e(ue,X.d.clone(),0);const j=Oe=>{const rt=document.createElement("div");return rt.className="rotulo pet",rt.textContent=Oe,h.append(rt),rt},be=j("bola"),Ee=j("gol"),$e=()=>m?`gol · ${m}`:"gol";function ke(Oe,rt,fe){if(!fe){Oe.style.opacity="0";return}rt.getWorldPosition(R).project(u),Oe.style.transform=`translate(${Math.round((R.x*.5+.5)*window.innerWidth)}px, ${Math.round((-R.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Oe.style.opacity="1"}const st=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Oe=>new z(...Oe));function oe({folga:Oe,jogadorMin:rt=0,jogadorMax:fe=Math.PI,visivel:ye=-1,longe:Ce=[],tentativas:ge=400}){V.copy(Cr).applyQuaternion(w.copy(i).invert());const Pe=new z;for(let ot=0;ot<ge;ot++){Pe.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const ee=Pe.angleTo(V);if(!(ee<rt||ee>fe)&&!(ye>-1&&R.copy(Pe).applyQuaternion(i).dot(TS)<ye)&&!(a(Pe)<o+.1)&&!st.some(Ie=>a(R.copy(Pe).addScaledVector(Ie,.07).normalize())<o+.03)&&!Ce.some(({d:Ie,min:Xe})=>Pe.angleTo(Ie)<Xe)&&!s.some((Ie,Xe)=>Pe.angleTo(Ie)<r[Xe]+Oe+.1)&&!l.some(Ie=>Pe.angleTo(Ie.d)<Ie.r+Oe)&&!Object.values(c).some(Ie=>Pe.angleTo(Ie)<.25+Oe))return Pe.clone()}return null}function de(Oe,rt){X.d.copy(Oe),X.piv.quaternion.setFromUnitVectors(Cr,Oe),ue.rotation.y=rt,T.copy(X.piv.quaternion).multiply(E.setFromAxisAngle(Cr,rt)),X.ex.set(1,0,0).applyQuaternion(T),X.ez.set(0,0,1).applyQuaternion(T),X.escala=.01}function Le(Oe){k.d.copy(Oe),k.piv.quaternion.setFromUnitVectors(Cr,Oe),k.ue=k.un=0,k.escala=.01}function Qe(Oe){const rt=oe({folga:.3,jogadorMin:.9,jogadorMax:Oe?1.7:Math.PI,visivel:Oe?.3:-1})??oe({folga:.2,jogadorMin:.7,jogadorMax:Oe?1.9:Math.PI,visivel:Oe?.1:-1,tentativas:800})??oe({folga:.1,tentativas:800})??X.d.clone();de(rt,Math.random()*Math.PI*2);const fe=oe({folga:.12,jogadorMin:.55,jogadorMax:Oe?1:Math.PI,visivel:Oe?.5:-1,longe:[{d:rt,min:.9}]})??oe({folga:.06,jogadorMin:.4,tentativas:800})??k.d.clone();Le(fe)}Qe(!0);function Fe(){v="comemorando",x=_+1,m+=1,RS(m),Ee.textContent=$e(),U.getWorldPosition(R).project(u);const Oe=(R.x*.5+.5)*window.innerWidth,rt=(-R.y*.5+.5)*window.innerHeight;xS(Oe,rt+40,6);const fe=document.createElement("div");fe.className="popup",fe.textContent="GOL!",fe.style.left=`${Math.round(Oe)}px`,fe.style.top=`${Math.round(rt)}px`,fe.style.fontSize="30px",document.body.append(fe),setTimeout(()=>fe.remove(),1e3),[523,659,784,1047,1319].forEach((ye,Ce)=>p(ye,Ce===4?.4:.11,"square",.05,Ce*.09))}return{teste:{bola:k,gol:X,colocarBola:Le,colocarGol:de,golsAtuais:()=>m},atualizar(Oe,{vLeste:rt,vNorte:fe,VEL:ye,pulando:Ce,pausado:ge}){if(ge)return;_+=Oe,w.copy(i).invert();const Pe=v==="comemorando";O.copy(k.d),I.copy(k.d).applyQuaternion(i);const ot=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!Pe&&!Ce&&ot<ES){const F=I.x,P=-I.z,qe=Math.hypot(F,P)||1,N=rt*ye,A=fe*ye,J=Math.hypot(N,A);let Q,le,_e;J>.12&&(N*F+A*P)/(J*qe)>-.2?(Q=N/J*.75+F/qe*.65,le=A/J*.75+P/qe*.65,_e=Math.max(Math.hypot(k.ue,k.un),J*1.5+.25)):(Q=F/qe,le=P/qe,_e=.5);const Ue=Math.hypot(Q,le)||1;k.ue=Q/Ue*_e,k.un=le/Ue*_e,J>.12&&_-b>.22&&(b=_,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const ee=Math.exp(-(Pe?5:AS)*Oe);k.ue*=ee,k.un*=ee;const Ie=Math.hypot(k.ue,k.un);Ie<.01?k.ue=k.un=0:(L.set(-k.un,0,-k.ue).normalize(),E.setFromAxisAngle(L,Ie*Oe),I.applyQuaternion(E),k.d.copy(I).applyQuaternion(w).normalize());const Xe=(F,P)=>{const qe=Math.cos(P);k.d.dot(F)<=qe||(L.crossVectors(F,k.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),k.d.applyQuaternion(E.setFromAxisAngle(L,P-Math.acos(Math.min(1,k.d.dot(F))))).normalize(),k.ue*=.3,k.un*=.3)};s.forEach((F,P)=>Xe(F,r[P]+.03));for(const F of l)Xe(F.d,F.r+.03);if(k.piv.quaternion.premultiply(E.setFromUnitVectors(O,k.d)),Ie>=.01&&(R.set(k.ue,0,-k.un).normalize().applyQuaternion(w).applyQuaternion(T.copy(k.piv.quaternion).invert()),L.crossVectors(Cr,R),L.lengthSq()>1e-9&&H.quaternion.premultiply(y.setFromAxisAngle(L.normalize(),Ie*t*Oe/Of))),k.escala=k.escala+(1-k.escala)*(1-Math.exp(-6*Oe)),Y.scale.setScalar(k.escala),X.escala=X.escala+(1-X.escala)*(1-Math.exp(-6*Oe)),ue.scale.setScalar(X.escala*(Pe?1+Math.sin((_-x)*20)*.06:1)),Pe)_>=x&&(v="jogando",Qe(!1));else{R.copy(k.d).sub(X.d);const F=R.dot(X.ex)*t,P=R.dot(X.ez)*t+Xn/2;Math.abs(F)<Si/2-.12&&Math.abs(P)<Xn/2-.02&&Math.abs(R.dot(X.d))<.2&&Fe()}S.copy(X.d).applyQuaternion(i),ke(be,ae,I.dot(d)>.2),ke(Ee,U,S.dot(d)>.2)}}}const gh=n=>parseInt(n.slice(1),16);function DS(n,{mat:e,metal:t}){const i=mn(n),a=new Yt,o=(m,_=.9)=>e(m,{emissive:m,emissiveIntensity:_}),s=e(5628640,{emissive:1670300,emissiveIntensity:.8}),r=e(7101695,{emissive:3154048,emissiveIntensity:.7}),l=e(8257434,{emissive:1736767,emissiveIntensity:.7}),c=e(16734809,{emissive:10231840,emissiveIntensity:.7}),u=e(2962248),h=e(13225432),d=(m,_,v,x,b,w=0,E=0,y=0)=>{const T=new _t(m,_);return T.position.set(v,x,b),T.rotation.set(w,E,y),T.castShadow=!0,a.add(T),T},p=(m,_,v,x=8)=>new Zt(m,_,v,x);for(const m of ia(i)){if(!m.peca)continue;const _=(m.x-12)/12,v=(m.y-12)/12;switch(m.peca.id){case"canhao":{const x=_*1.4;d(p(.09,.13,.9),t,x,2,.8,Math.PI/2),d(p(.06,.06,.12),o(16769354),x,2,1.28,Math.PI/2);break}case"duplo":{const x=_*1.4;for(const b of[-.2,.2])d(p(.08,.11,1.1),t,x+b,2,.82,Math.PI/2),d(p(.05,.05,.1),o(16769354),x+b,2,1.36,Math.PI/2);break}case"rail":{const x=_*1.4;d(new un(.22,.2,1.8),t,x,2.05,.8),d(new un(.07,.08,1.9),s,x,2.17,.82);break}case"dispersor":{const x=_*1.4;for(const b of[-1,0,1])d(p(.07,.1,.95),b===0?s:t,x+b*.3,2,.76,Math.PI/2,0,b*.5);break}case"bobina":{const x=_*1.4;for(let b=0;b<4;b++)d(new Nn(.13,.04,6,10),b%2?r:h,x,2,.55+b*.2);d(new xn(.13,8,8),o(15127295,1.2),x,2,1.4);break}case"quimico":case"ionico":case"plasma":case"vetorial":{const x=_*1.7,b=-.05,w=Lf[m.peca.id],E=m.peca.id==="plasma"?1.2:.9;if(m.peca.id==="plasma")d(new Nn(.4,.1,8,20),r,x,1.08,b,Math.PI/2);else if(m.peca.id==="vetorial")for(let y=0;y<3;y++){const T=y*Math.PI*2/3,I=d(new Yn(.13,.5,8),l,x+Math.cos(T)*.3,.95,b+Math.sin(T)*.3,Math.PI);I.rotation.z+=Math.cos(T)*.3,I.rotation.x+=Math.sin(T)*.3}else d(p(.17,.24,.45,10),t,x,1.08,b);d(new Yn(m.peca.id==="plasma"?.34:.2,.7*E,10),o(gh(w[1]),1.1),x,.66,b,Math.PI),d(new Yn(m.peca.id==="plasma"?.2:.11,.45*E,8),o(gh(w[0]),1.3),x,.78,b,Math.PI);break}case"fusao":d(new Nn(1,.08,8,28),o(16742954,1.1),0,1.87,0,Math.PI/2);break;case"quantico":d(new co(1.2,1),new Hi({color:10841087,wireframe:!0,transparent:!0,opacity:.6}),0,1.86,0);break;case"solar":for(const x of[-1,1])d(new un(.8,.05,.6),e(3626408,{emissive:1517663,emissiveIntensity:.5}),x*1.3,1.85,0,0,0,x*.12),d(new un(.1,.05,.1),t,x*.98,1.85,0);break;case"capacitor":for(const x of[-1,1])d(p(.1,.1,.4,8),e(3116287,{emissive:1392517,emissiveIntensity:.6}),x*.98,1.85,-.2);break;case"analogica":d(new un(.34,.1,.34),e(3885637),_*1.2,2.62,.1+v*.3);break;case"mira":{const x=_*1.2,b=.1+v*.3;d(new un(.34,.1,.34),e(2059082),x,2.62,b),d(new xn(.09,8,6),c,x,2.74,b);break}case"coletor":{const x=_*1.2,b=.1+v*.3;d(p(.3,.3,.05,18),s,x,2.8,b,.35,0,.2),d(p(.025,.025,.4,6),t,x,2.65,b);break}case"overclock":{const x=_*1.2,b=.1+v*.3;d(new un(.3,.1,.3),e(2059082),x,2.62,b);for(const[w,E]of[[-.1,-.1],[.1,.1]])d(new un(.1,.14,.1),l,x+w,2.74,b+E);break}case"giroscopio":d(new Nn(.17,.04,6,14),h,_*1.2,2.7,.1+v*.3);break;case"dissipador":{const x=_*1.35;for(let b=-1;b<=1;b++)d(new un(.06,.5,.5),b===0?s:h,x+b*.14,1.75,v*.5);break}case"barreira":{const x=_*1.3;d(new xn(.22,10,8),o(3721471,1),x,1.75,v*.5),d(new Nn(.34,.03,6,20),h,x,1.75,v*.5,Math.PI/2);break}case"blindagem":d(new un(.22,.75,.55),e(5923190),_*1.38,1.8,v*.5);break;case"bateria":d(p(.2,.2,.6,10),u,_*1.32,1.75,v*.5),d(p(.21,.21,.12,10),o(8257434,.9),_*1.32,1.9,v*.5);break;case"ima":{const x=_*1.32;d(new Nn(.26,.07,6,14,Math.PI),c,x,1.75,v*.5,0,0,Math.PI);break}}}if(i.chassi==="interceptor"){d(new Yn(.28,1.1,6),t,0,1.84,1.2,Math.PI/2);for(const m of[-1,1])d(new un(.9,.08,.5),e(16742970),m*1,1.72,.2,0,0,m*-.25)}else if(i.chassi==="blindado")for(const[m,_]of[[-.85,-.55],[.85,-.55],[-.85,.55],[.85,.55]])d(new un(.5,.35,.68),t,m,1.84,_,0,0,m*.12);else if(i.chassi==="modular")for(let m=0;m<6;m++){const _=m*Math.PI/3;d(new jr(.16,0),m%2?s:r,Math.cos(_)*1.06,1.86,Math.sin(_)*1.06)}return a}function US(n){return{interceptor:{casco:[1,.7,1.18],anel:.96},blindado:{casco:[1.14,.98,1.14],anel:1.12},modular:{casco:[1.06,.82,1.06],anel:1.06}}[n]||{casco:[1,.85,1],anel:1}}const xu=location.pathname.match(/(?:^|\/)(yas|fer)\/?$/i)?.[1]?.toLowerCase()||"padrao",cn=xu==="yas",an=xu==="fer";document.documentElement.classList.toggle("tema-yas",cn);document.documentElement.classList.toggle("tema-fer",an);const OS={ceu:2366231,estrelas:16766627,nuvens:16179144,atmosfera:14252357,luzCeu:16766376,luzSolo:3352095,sol:16760952,lua:16760179,marRaso:9091234,marMedio:5209968,marFundo:2706502,espuma:16181976,areia:14202510,grama0:7439195,grama1:5401421,grama2:3427388,tronco:7754045,copa:[4743236,6058573],copa2:8228187,pedra:9271144},Ff={ceu:329751,estrelas:9431807,nuvens:7440061,atmosfera:3109631,luzCeu:9551871,luzSolo:1120053,sol:10213375,lua:9411839,marRaso:5628640,marMedio:2522790,marFundo:1321820,espuma:14089215,areia:7964337,grama0:3491202,grama1:2635373,grama2:1515339,tronco:2107727,copa:[3234444,4217760],copa2:6650832,pedra:4937855},Ot=cn?OS:an?Ff:null,ii=5,Ua=6.5/ii,Bf=.7,Mc=new z(0,1,0),FS=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function zf(n,e){const t=e*Math.PI/180;return new z(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const BS=n=>zf(...FS[n]??[1.2+n%3*.5,n*137.5]),pi=bn.map((n,e)=>BS(e)),ua={jasmim:zf(.4,180),mazzy:zf(.5,295)},qp=(n,e)=>Object.values(ua).some(t=>n.angleTo(t)<e),zS=.6,$p=n=>n.escala??zS,cs=bn.map(n=>1.85*$p(n)/ii+.03),GS=cs.map(n=>n+.22),kS=(n,e,t)=>n+(e-n)*t,sr=(n,e,t)=>Math.max(e,Math.min(t,n)),oc=(n,e,t,i)=>kS(n,e,1-Math.exp(-t*i));function vu(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function VS(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function Pl(n,e,t){const i=Math.floor(n),a=Math.floor(e),o=Math.floor(t),s=n-i,r=e-a,l=t-o,c=m=>m*m*(3-2*m),u=c(s),h=c(r),d=c(l);let p=0;for(let m=0;m<2;m++)for(let _=0;_<2;_++)for(let v=0;v<2;v++){const x=(m?u:1-u)*(_?h:1-h)*(v?d:1-d);p+=x*VS(i+m,a+_,o+v)}return p}const xh=Math.cos(.5);function Lc(n){const e=Pl(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+Pl(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+Pl(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>xh&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of pi){const a=n.dot(i);a>xh&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const Nc=.5,HS=window.matchMedia?.("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<900,WS=Number(navigator.deviceMemory||8)<=4,ts=HS||WS,ti=new GM({antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});ti.setPixelRatio(Math.min(window.devicePixelRatio||1,ts?1:2));ti.shadowMap.enabled=!0;ti.shadowMap.type=Dr;document.body.appendChild(ti.domElement);const Jn=new jh;Jn.background=new yt(Ot?.ceu??725030);const dn=new li(42,1,.1,200);Jn.add(new F1(Ot?.luzCeu??12374271,Ot?.luzSolo??2366541,Ot?1.25:1));const Ga=new G1(Ot?.sol??16773332,Ot?2.15:1.9);Ga.position.set(7,ii+9,9);Ga.target.position.set(0,2,0);Ga.castShadow=!0;Ga.shadow.mapSize.set(ts?1024:2048,ts?1024:2048);Object.assign(Ga.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});Ga.shadow.bias=-4e-4;Jn.add(Ga,Ga.target);const Gf=new op({color:Ot?.estrelas??16777215,size:Ot?.48:.42,sizeAttenuation:!0,fog:!1}),kf=new Ti({color:Ot?.nuvens??16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),Vf=[],Hf=[],Wf={uMarRaso:{value:new yt(Ot?.marRaso??5685998)},uMarMedio:{value:new yt(Ot?.marMedio??3112924)},uMarFundo:{value:new yt(Ot?.marFundo??1922744)},uEspuma:{value:new yt(Ot?.espuma??13955580)},uAreia:{value:new yt(Ot?.areia??15981987)},uGrama0:{value:new yt(Ot?.grama0??7327594)},uGrama1:{value:new yt(Ot?.grama1??5027680)},uGrama2:{value:new yt(Ot?.grama2??3117141)}};{const n=vu(3),e=[];for(let a=0;a<900;a++){const o=new z(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(o.x,o.y,o.z)}const t=new Rn;t.setAttribute("position",new nn(e,3)),Jn.add(new Xm(t,Gf));const i=new _t(new xn(4,32,32),new Hi({color:Ot?.lua??16773577,fog:!1}));i.position.set(24,16,-62),Jn.add(i)}const cr=new Yt;Jn.add(cr);{const i=new Uint8Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],o=new z,s=255;for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const _=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const x=(v+.5-2)/320*2-1,[b,w,E]=a[h](x,_);o.set(b,w,E).normalize();const y=((p+m)*3*324+d+v)*4;i[y]=Math.round(sr(Lc(o),0,1)*255),i[y+3]=s}}}const r=new ap(i,3*324,2*324,di,zn);r.minFilter=r.magFilter=Tn,r.generateMipmaps=!1,r.needsUpdate=!0;const l=new Ti({roughness:.9});l.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:r},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:Nc}},Wf),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const c=new _t(new xn(ii,128,96),l);c.receiveShadow=!0,cr.add(c);const u=new _t(new xn(ii*1.06,48,48),new Hi({color:Ot?.atmosfera??6990079,transparent:!0,opacity:Ot?.16:.1,side:kn,depthWrite:!1}));Jn.add(u)}function Na(n,e,t=0){const i=new Yt;return i.quaternion.setFromUnitVectors(new z(0,1,0),e),n.position.y=ii,n.rotation.y=t,i.add(n),cr.add(i),i}const mt=(n,e={})=>new Ti({color:n,roughness:.8,flatShading:!0,...e});function to(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const or=[];{const n=vu(77),e=new z,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(Mc)<.3*Ua)&&!pi.some((a,o)=>e.angleTo(a)<cs[o]+.2)&&!qp(e,.2)&&!(Lc(e)<Nc+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const o=new Yt,s=.5+n()*.45,r=new _t(new Zt(.1,.14,.6,6),mt(Ot?.tronco??8014379));r.position.y=.3;const l=n()>.5?0:1,c=new _t(cn?new co(.62,1):an?new jr(.62,0):new Yn(.5,1.2,7),mt(Ot?Ot.copa[l]:l===0?3120732:2460238,an?{emissive:Ff.copa[l],emissiveIntensity:.16}:{}));Vf.push({m:c.material,v:l}),c.position.y=cn?1.05:an?1.18:1.1,cn&&c.scale.set(1.15,.86,1.05),an&&c.scale.set(.78,1.2,.78);const u=new _t(cn?new co(.48,1):an?new jr(.43,0):new Yn(.38,.9,7),mt(Ot?.copa2??3453032,an?{emissive:Ff.copa2,emissiveIntensity:.2}:{}));Hf.push(u.material),u.position.set(cn?.18:0,cn?1.48:an?1.75:1.7,0),cn&&u.scale.set(1.1,.8,1),an&&u.scale.set(.78,1.15,.78),o.add(r,c,u),o.scale.setScalar(s),Na(to(o),a,n()*6),or.push({d:a,r:(.05*s+.02)*Ua})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const o=new _t(new ru(.22+n()*.25,0),mt(Ot?.pedra??9278376));o.position.y=.1;const s=new Yt;s.add(o),Na(to(s),a,n()*6),or.push({d:a,r:.045*Ua,baixo:!0})}if(cn)for(let i=0;i<24;i++){const a=t();if(!a)continue;const o=new Yt,s=i%5,r=(c,u,h,d,p,m,_)=>{const v=new _t(new un(c,u,h),mt(d));return v.position.set(p,m,_),o.add(v),v},l=(c,u,h,d,p)=>{const m=new _t(new xn(c,8,6),mt(u));return m.position.set(h,d,p),o.add(m),m};if(s===0){const c=new _t(new Zt(.18,.25,.35,8),mt(11034428));c.position.y=.18,o.add(c),r(.04,.55,.04,4808772,0,.58,0);for(const[u,h,d,p]of[[-.2,.62,0,.17],[.18,.72,.05,.16],[-.12,.88,-.03,.15],[.2,.98,0,.13]])l(p,h>.8?8228187:5401421,u,h,d).scale.set(1.2,.65,.8)}else if(s===1)[[6108456,0,.07],[13732439,.05,.18],[4216904,-.03,.29]].forEach(([c,u,h],d)=>{const p=r(.65-d*.06,.11,.42,c,u,h,0);p.rotation.y=(d-1)*.14,r(.5-d*.05,.02,.43,15391687,u,h,.01)});else if(s===2){r(.62,.62,.06,13940112,0,.36,0);const c=new _t(new Zt(.25,.25,.035,18),mt(1512723));c.rotation.x=Math.PI/2,c.position.set(.08,.38,.05),o.add(c);const u=new _t(new Zt(.07,.07,.04,12),mt(13201221));u.rotation.x=Math.PI/2,u.position.set(.08,.38,.08),o.add(u)}else if(s===3){l(.26,10116663,0,.3,0).scale.set(.85,1.1,.34),l(.18,12088132,0,.55,0).scale.set(.8,1,.32),r(.09,.65,.07,6635564,0,.92,0),r(.24,.12,.08,6635564,0,1.25,0);const h=l(.065,2366231,0,.38,.09);h.scale.z=.18}else{r(.58,.38,.26,2828581,0,.28,0),r(.22,.08,.2,7754045,-.12,.51,0);const c=new _t(new Zt(.15,.15,.18,12),mt(1514265));c.rotation.x=Math.PI/2,c.position.set(.1,.3,.2),o.add(c);const u=new _t(new Zt(.08,.08,.19,12),mt(9091234,{emissive:2706502,emissiveIntensity:.45}));u.rotation.x=Math.PI/2,u.position.set(.1,.3,.22),o.add(u)}o.scale.setScalar(.65+n()*.25),Na(to(o),a,n()*Math.PI*2)}if(an)for(let i=0;i<24;i++){const a=t();if(!a)continue;const o=new Yt,s=i%5,r=(c,u=.55)=>mt(c,{emissive:c,emissiveIntensity:u}),l=(c,u,h,d,p)=>{const m=new _t(c,u);return m.position.set(h,d,p),o.add(m),m};if(s===0)for(const[c,u,h]of[[-.2,.75,4315135],[.08,1.05,6913023],[.28,.58,9133311]]){const d=l(new Yn(.13,u,5),r(h),c,u/2,0);d.rotation.z=c*.6}else if(s===1)for(const[c,u,h]of[[-.22,.42,5433087],[.12,.62,8228095],[.32,.33,11824383]])l(new Zt(.035,.05,u,6),mt(10135502),c,u/2,0),l(new xn(.16,8,5),r(h,.7),c,u,0).scale.set(1,.45,1);else if(s===2){l(new xn(.17,10,8),r(5825791,.8),0,.55,0);const c=l(new Nn(.38,.025,6,24),r(8886015,.5),0,.55,0);c.rotation.x=Math.PI/2.7,c.rotation.z=.35,l(new Zt(.12,.18,.25,8),mt(2635373),0,.13,0)}else if(s===3){const c=l(new Nn(.3,.09,8,20,Math.PI*1.45),r(11122175,.45),0,.5,0);c.rotation.z=-.55,l(new Zt(.035,.05,.55,6),mt(4937855),0,.2,0)}else{l(new Zt(.035,.06,.72,6),mt(8227245),0,.36,0),l(new xn(.11,8,6),r(5628640,.9),0,.78,0);for(const c of[0,.9,1.8]){const u=l(new Nn(.19+c*.08,.018,6,18),r(c>1?9133311:4315135,.5),0,.78,0);u.rotation.x=Math.PI/2,u.rotation.z=c}}o.scale.setScalar(.65+n()*.28),Na(to(o),a,n()*Math.PI*2)}}const Mu=new Yt;Jn.add(Mu);{const n=vu(5),e=kf;for(let t=0;t<10;t++){const i=new z(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Yt;for(let s=0;s<4;s++){const r=new _t(new co(.45+n()*.4,1),e);r.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(r)}a.position.y=ii+4+n()*2.5;const o=new Yt;o.quaternion.setFromUnitVectors(new z(0,1,0),i),o.add(a),Mu.add(o),to(a)}}function XS(n){const e=new lu;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function qS(n,e){const t=new Yt,i=new yt(e),a=mt(e,{emissive:e,emissiveIntensity:.1}),o=mt(i.clone().multiplyScalar(.78)),s=mt(i.clone().multiplyScalar(.5)),r=mt(10133684),l=mt(5922936),c=mt(10119740),u=mt(5913122),h=mt(15856635),d=mt(13225432),p=mt(1776942),m=mt(14693962),_=mt(16762941),v=new Ti({color:16774856,emissive:16771488,emissiveIntensity:1.2}),x=(y,T,I=0,S=0,R=0)=>{const L=new _t(y,T);return L.position.set(I,S,R),t.add(L),L},b=(y,T,I,S,R,L,O)=>x(new un(y,T,I),S,R,L,O),w=(y,T,I,S,R,L,O,V=12)=>x(new Zt(y,T,I,V),S,R,L,O),E=(y,T,I,S,R)=>x(new xn(y,10,8),T,I,S,R);switch(n){case"casa":{b(2.5,.22,2,r,0,.11,0),b(2.2,1.25,1.7,a,0,.84,0);for(const T of[-1,1]){const I=b(2.5,.12,1.15,s,0,1.78,T*.5);I.rotation.x=T*.62}b(2.56,.14,.16,mt(i.clone().multiplyScalar(.35)),0,2.13,0);const y=new lu;y.moveTo(-.85,0),y.lineTo(.85,0),y.lineTo(0,.62),y.closePath();for(const T of[-1,1]){const I=x(new pc(y,{depth:.06,bevelEnabled:!1}),a,T*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}b(.3,.8,.3,l,.65,2,-.28),b(.4,.08,.4,r,.65,2.42,-.28),b(.62,1,.04,h,0,.72,.86),b(.5,.9,.06,u,0,.67,.88),E(.04,d,.16,.65,.93),b(.9,.12,.4,r,0,.1,1.2);for(const T of[-.72,.72]){b(.55,.55,.05,h,T,.98,.86),b(.42,.42,.06,v,T,.98,.88),b(.04,.42,.07,h,T,.98,.89),b(.42,.04,.07,h,T,.98,.89);for(const I of[-1,1])b(.14,.5,.04,o,T+I*.38,.98,.88)}for(const T of[-1,1])b(.05,.5,.5,h,T*1.11,.95,.1),b(.06,.38,.38,v,T*1.12,.95,.1);E(.07,v,.5,1.2,.92),w(.04,.04,.5,c,1.55,.45,1.1,6),b(.32,.22,.22,m,1.55,.8,1.1),b(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,_],[-.7,mt(16747216)],[-.55,m]].forEach(([T,I])=>E(.07,I,T,.4,1.2));break}case"predio":{b(2.4,.2,2.2,l,0,.1,0),b(2,.7,1.8,s,0,.55,0),b(1.7,2.6,1.5,a,0,2.15,0),b(1.2,.5,1.05,o,0,3.7,0);for(let y=0;y<5;y++)for(let T=0;T<3;T++)b(.34,.36,.05,(y*2+T)%5===0?s:v,-.5+T*.5,1.2+y*.5,.77);for(let y=0;y<5;y++)for(const T of[-1,1])for(let I=0;I<2;I++)b(.05,.36,.34,(y+I)%3===0?s:v,T*.86,1.2+y*.5,-.3+I*.6);for(const y of[1,3.45])b(1.78,.07,1.58,s,0,y,0);b(.7,.55,.05,v,0,.45,.93),b(.04,.55,.06,s,0,.45,.94),b(1.2,.08,.55,m,0,.86,1.12);for(const y of[-1,1])w(.03,.03,.62,d,y*.55,.55,1.36,6);b(.9,.14,.05,v,0,3.7,.54),w(.22,.22,.5,c,.3,4.2,.1),x(new Yn(.26,.2,10),u,.3,4.55,.1),b(.3,.2,.3,r,-.3,4.05,.25),w(.025,.025,.9,d,-.3,4.4,-.2,6),E(.07,mt(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{b(2.4,.16,2.4,l,0,.08,0);for(let y=0;y<9;y++)b(.26,.05,.12,y%2?p:_,-1.04+y*.26,.18,1.12);w(.5,.56,2.3,h,0,1.9,0,16),x(new Yn(.5,1,16),a,0,3.55,0),w(.52,.52,.16,m,0,2.95,0,16),w(.58,.58,.1,s,0,.8,0,16),x(new Nn(.21,.045,8,18),d,0,2.4,.5),E(.18,mt(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let y=0;y<3;y++){const T=b(.08,.9,.7,a,0,1,0),I=new Yt;I.rotation.y=y/3*Math.PI*2+.5,T.position.set(.62,1,0),T.parent.remove(T),I.add(T),t.add(I)}x(new Yn(.34,.8,10),mt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const y of[-.35,.35])b(.1,3.5,.1,d,1.1,1.9,y);for(const y of[.7,1.5,2.3,3.1])b(.08,.08,.7,d,1.1,y,0);b(.75,.1,.12,d,.75,2.6,0),E(.07,v,1.1,3.7,0),x(new Zt(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const y of[-1.3,-.7])b(.08,.2,.3,d,y,.25,.7);break}case"estrela":{w(1.15,1.3,.2,r,0,.1,0,20),w(.8,.95,.22,l,0,.31,0,20),w(.16,.22,1.5,d,0,1.15,0),w(.3,.3,.1,d,0,1.95,0);const y=new Yt;y.name="gira",y.position.y=2.85,t.add(y);const T=new _t(new pc(XS(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),mt(e,{emissive:e,emissiveIntensity:.55}));T.position.z=-.15,y.add(T);const I=new _t(new Nn(1.25,.03,8,40),mt(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,y.add(I),[0,2.1,4.2].forEach((S,R)=>{const L=new _t(new xn(.1,10,8),mt([16735631,5822207,16769354][R],{emissive:[16735631,5822207,16769354][R],emissiveIntensity:.7}));L.position.set(Math.cos(S)*1.25,0,Math.sin(S)*1.25),y.add(L)});break}case"cassino":{const y=mt(13620959,{emissive:3818064,emissiveIntensity:.25}),T=(I,S)=>b(.36,.5,.06,mt(S,{emissive:S,emissiveIntensity:.7}),I,2.05,.66);w(1.3,1.4,.16,l,0,.08,0,20),b(2.2,.3,1.6,s,0,.3,0),b(1.8,2.7,1.3,y,0,1.8,0),b(2,.55,1.4,s,0,3.35,0),b(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)E(.06,I%2?v:m,-.96+I*.24,3.66,.68);b(1.45,.75,.1,mt(1381675),0,2.2,.62),T(-.46,16726858),T(0,16769354),T(.46,5822207);for(const[I,S]of[[-.45,16726858],[0,5822090],[.45,5810431]])w(.1,.1,.08,mt(S,{emissive:S,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;b(.5,.06,.04,p,0,1.3,.66),b(1.2,.28,.45,s,0,.95,.8),w(.06,.06,1.1,d,1.12,2.1,0,8),E(.2,mt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const y=cn?4808772:an?1518425:4892927,T=cn?15914926:an?5891583:9163775,I=cn?12019775:an?7101695:16743001,S=mt(y,{emissive:cn?2505778:an?924226:1922744,emissiveIntensity:.4}),R=mt(T,{emissive:cn?12019775:an?1339296:4892927,emissiveIntensity:.6}),L=mt(I,{emissive:cn?7287846:an?3416696:9058848,emissiveIntensity:.3}),O=cn?mt(12166539):an?mt(9543880):d,V=x(new xn(.95,16,12),S,0,1.85,0);V.scale.set(1,.85,1),V.name="nave-casco-base";const Y=x(new Nn(.92,.05,8,28),O,0,1.85,0);Y.rotation.x=Math.PI/2,Y.name="nave-anel-base",x(new xn(.58,14,10),R,0,2.15,.35),x(new xn(.2,8,8),mt(cn?16773591:an?14089215:16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let ae=0;ae<4;ae++){const k=ae*Math.PI/2,ue=x(new un(.55,.14,.95),L,Math.cos(k)*1.05,1.7,Math.sin(k)*1.05);ue.rotation.y=-k}for(let ae=0;ae<3;ae++){const k=ae*Math.PI*2/3+.4,ue=x(new Zt(.05,.07,1,8),O,Math.cos(k)*.62,.62,Math.sin(k)*.62);ue.rotation.z=Math.cos(k)*.3,ue.rotation.x=-Math.sin(k)*.3,x(new Zt(.16,.16,.05,8),O,Math.cos(k)*.78,.12,Math.sin(k)*.78)}const H=x(new Yn(.3,.55,10),mt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0);if(H.rotation.x=Math.PI,H.name="nave-chama-base",w(.03,.03,.6,O,0,2.95,0,6),E(.1,mt(cn?14191445:an?5628640:16726858,{emissive:cn?12019775:an?3109631:16726858,emissiveIntensity:.8}),0,3.28,0),cn){const ae=mt(9545067,{emissive:3427388,emissiveIntensity:.2});for(const[k,ue,U]of[[-.2,1.92,-.55],[.2,1.92,.55]]){const X=E(.12,ae,k,ue,.86);X.scale.set(.45,1,.35),X.rotation.z=U}E(.055,mt(15054940),0,1.92,.94),b(.3,.08,.04,mt(15259064),-.47,1.56,.82),b(.18,.07,.045,mt(13201221),.52,1.68,.83)}if(an){const ae=mt(10332927,{emissive:5467391,emissiveIntensity:.55}),k=x(new Nn(.18,.05,7,20,Math.PI*1.45),ae,0,1.93,.91);k.rotation.z=-.65;for(const[ue,U,X]of[[-.5,1.62,5628640],[.5,1.7,9137407]]){const j=x(new Yn(.075,.28,5),mt(X,{emissive:X,emissiveIntensity:.7}),ue,U,.83);j.rotation.z=ue*.4}}const Z=new Yt;Z.name="nave-pecas",Z.userData.ctx={mat:mt,metal:O,casco:S,aleta:L,cascoOriginal:S.color.getHex(),aletaOriginal:L.color.getHex()},t.add(Z);break}case"carta":{w(.26,.32,.4,r,0,.2,0,10),w(.12,.15,1,d,0,.9,0,8),b(1.7,.9,.9,a,0,1.85,0);const y=x(new Zt(.45,.45,1.7,16,1,!1,0,Math.PI),mt(e,{emissive:e,emissiveIntensity:.1,side:fi}),0,2.3,0);y.rotation.z=Math.PI/2,b(1,.07,.05,p,0,2.02,.46),b(1.5,.5,.04,o,0,1.62,.46),b(.4,.26,.03,h,-.42,1.62,.49),E(.05,m,-.42,1.62,.52),w(.025,.025,.7,d,.9,2,0,6),b(.32,.22,.04,m,1.05,2.28,0),w(.035,.045,1.9,d,-1.2,.95,.5,6),E(.1,v,-1.2,1.95,.5),b(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const $S={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},YS=new Ti({color:16774856,emissive:16771488,emissiveIntensity:1.3}),_u=bn.map((n,e)=>{const t=new Yt,i=new Yt,a=new _t(new Zt(1.85,1.95,.12,28),mt(3883096));a.position.y=.04;const o=new _t(new Zt(1.55,1.65,.14,28),mt(new yt(n.cor).multiplyScalar(.45)));o.position.y=.1,i.add(a,o);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new _t(new Zt(.035,.045,.55,6),mt(13225432));m.position.set(d,.38,p);const _=new _t(new xn(.08,8,6),YS);_.position.set(d,.7,p),i.add(m,_)}const s=new _t(new Nn(2.08,.07,8,48),new Hi({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const r=qS(n.icone,n.cor);r.position.y=.17;const l=new Kt;l.position.y=$S[n.icone]??4.5,t.add(i,s,r,l),to(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar($p(n)),Na(t,pi[e],0);const c=r.getObjectByName("gira");return{raiz:t,anel:s,icone:r,topo:l,gira:c,giraY:c?c.position.y:0}}),JS=bn.findIndex(n=>n.id==="nave");function ZS(n){const e=_u[JS]?.icone,t=e?.getObjectByName("nave-pecas");if(!t)return;for(const l of[...t.children])t.remove(l),l.traverse(c=>{c.geometry?.dispose()});const i=DS(n,t.userData.ctx);t.add(i);const a=t.userData.ctx,o=es[n?.pintura|0];a.casco.color.set(o?.casco??a.cascoOriginal),a.aleta.color.set(o?.aleta??a.aletaOriginal);const s=US(n?.chassi);e.getObjectByName("nave-casco-base")?.scale.set(...s.casco),e.getObjectByName("nave-anel-base")?.scale.setScalar(s.anel);const r=e.getObjectByName("nave-chama-base");r&&(r.visible=!1)}const Su=vS(mt),yu=bS();Na(Su.raiz,ua.jasmim,.4);Na(yu.raiz,ua.mazzy,0);or.push({d:ua.jasmim,r:.035*Ua},{d:ua.mazzy,r:.055*Ua});const lo=cn?{pasta:"avatar-yas",frames:{parado:5,andar:6,correr:5,pular:5},largura:168,altura:332,pesY:292,escala:.55}:an?{pasta:"avatar-fer",frames:{parado:5,andar:5,correr:4,pular:5},largura:128,altura:176,pesY:164,escala:1}:{pasta:"avatar",frames:{parado:4,andar:5,correr:5,pular:5},largura:84,altura:182,pesY:168,escala:1},rc=lo.frames,KS=["direita","esquerda","norte","sul"],vh=Ot?[0,1,2,3,4,3,2,1]:[0,1,2,3,2,1],Yp=lo.largura,ns=lo.altura,jS=lo.pesY,QS="./",ey=new O1,La={};for(const[n,e]of Object.entries(rc)){La[n]={};for(const t of KS)La[n][t]=Array.from({length:e},(i,a)=>{const o=ey.load(`${QS}${lo.pasta}/${n}-${t}-${a}.png`);return o.colorSpace=qn,o.magFilter=o.minFilter=ln,o.generateMipmaps=!1,new au({map:o,transparent:!0,toneMapped:!1,alphaTest:.5})})}let ls=3.6,bu=ls*(Yp/ns);const Oa=new np(La.parado.sul[0]);Oa.center.set(.5,(ns-jS)/ns);Oa.scale.set(bu,ls,1);Oa.position.y=ii;Jn.add(Oa);const Mh=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new _t(new da(1.7,1.7),new Hi({map:new Yr(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=ii+.04,Jn.add(i),i})(),ka=n=>document.querySelector(n);ka("#nome").textContent=`${Qd.nome} · ${Qd.titulo}`;const Jp=ka("#pontos"),ty=ka("#fichas-hud b");bn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),Jp.appendChild(e)});const Pr=ka("#painel"),Zp=ka("#acao");let _h=-2,io=-1;const Kp="curriculo-visitadas-v1",no=new Set;try{for(const n of JSON.parse(localStorage.getItem(Kp))||[])bn.some(e=>e.id===n)&&no.add(n)}catch{}const ny=["↑","↗","→","↘","↓","↙","←","↖"];function iy(n){let e=-1,t=1/0;if(bn.forEach((s,r)=>{if(r===n||no.has(s.id))return;const l=pi[n].angleTo(pi[r]);l<t&&(t=l,e=r)}),e<0)return null;const i=new z().copy(pi[e]).applyQuaternion(wi),a=Math.atan2(i.x,-i.z),o=Math.acos(sr(i.y,-1,1));return{id:bn[e].id,seta:ny[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(o/Bf))}}function jp(n){[...Jp.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",no.has(bn[t].id))})}jp(-1);function ay(n){if(n!==_h){if(_h=n,n<0)Pr.classList.remove("on");else{const e=bn[n];if(!no.has(e.id)){no.add(e.id);try{localStorage.setItem(Kp,JSON.stringify([...no]))}catch{}}Pr.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),Pr.querySelector("h2").textContent=e.titulo,ka("#texto").replaceChildren(...cS(e,{zonas:bn,visitadas:no,proxima:iy(n)})),Pr.scrollTop=0,Zp.hidden=!e.jogo,Pr.classList.add("on")}jp(n)}}const Oi=new Set;window.addEventListener("keydown",n=>{if(!(Gn.estaAberto()||Tu.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&io>=0&&bn[io].jogo){Oi.clear(),a0(bn[io].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&Da){i0(Da);return}Oi.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>Oi.delete(n.code));window.addEventListener("blur",()=>Oi.clear());const oa={x:0,y:0,pulo:!1},is=new Map;function Eu(){oa.x=0,oa.y=0;const n=is.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;oa.x=e*a,oa.y=-t*a}}const Au=ti.domElement;Au.addEventListener("pointerdown",n=>{is.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),Eu()});Au.addEventListener("pointermove",n=>{const e=is.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,Eu())});for(const n of["pointerup","pointercancel","pointerleave"])Au.addEventListener(n,e=>{const t=is.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(oa.pulo=!0,setTimeout(()=>{oa.pulo=!1},120)),is.delete(e.pointerId),Eu()});const oy=ts?420:640,Qp=19,as=new hi(2,2,{minFilter:ln,magFilter:ln,type:zn,samples:0});as.depthTexture=new nr(2,2);const e0=new jh,ry=new wc(-1,1,1,-1,0,1),t0=new Ai({uniforms:{tCor:{value:as.texture},tProf:{value:as.depthTexture},uPixel:{value:new We(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:dn.near},uFar:{value:dn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});e0.add(new _t(new da(2,2),t0));function n0(){const n=window.innerWidth,e=window.innerHeight;ti.setSize(n,e),dn.aspect=n/e,dn.userData.afasta=1/sr(dn.aspect/1.1,.5,1),dn.updateProjectionMatrix();const t=Math.min(oy,e),i=Math.max(2,Math.round(t*dn.aspect));as.setSize(i,t),t0.uniforms.uPixel.value.set(1/i,1/t);const a=2*Qp*dn.userData.afasta*Math.tan(ym.degToRad(dn.fov/2))/t;ls=ns*a*lo.escala,bu=Yp*a*lo.escala}window.addEventListener("resize",n0);n0();const wi=cr.quaternion,Sh=new URLSearchParams(location.search).get("zona");if(Sh!==null){const n=sr(Math.round(Number(Sh))||0,0,bn.length-1);wi.setFromUnitVectors(pi[n],new z(.25,1,-.2).normalize())}const sy=2*7.2/20;let ya=0,ba=0,Ka=0,js=0,Xo=!0,Il=0,yh=!1,$n=0,Ea="sul",Ll=0;const ja=new z,_c=new bi,ra=new z,Sc=n=>Math.acos(sr(ra.copy(n).applyQuaternion(wi).y,-1,1));function bh(n,e){if(ra.copy(n).applyQuaternion(wi),ra.y<.8)return;const t=Math.acos(Math.min(1,ra.y));t>=e||(ja.crossVectors(Mc,ra),ja.lengthSq()<1e-10&&ja.set(0,0,1),ja.normalize(),_c.setFromAxisAngle(ja,e-t),wi.premultiply(_c))}const lr=document.createElement("div");lr.id="rotulos";document.body.append(lr);const cy=bn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,lr.append(e),e}),yc=new z,Nl=new z;function ly(n){yc.copy(dn.position).normalize(),bn.forEach((e,t)=>{const i=cy[t];if(ra.copy(pi[t]).applyQuaternion(wi),t===n||ra.dot(yc)<.2){i.style.opacity="0";return}_u[t].topo.getWorldPosition(Nl).project(dn),i.style.transform=`translate(${Math.round((Nl.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Nl.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const fy=.2,bc=uS(),qo=(n,e,t="triangle",i=.05,a=0)=>Gn.bip(n,e,t,i,a),Xf=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:ua.jasmim,modelo:Su,livre:0,som:()=>{qo(1047,.12,"sine"),qo(1319,.12,"sine",.05,.09),qo(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:ua.mazzy,modelo:yu,livre:0,som:()=>{qo(680,.09),qo(930,.1,"triangle",.05,.07),qo(620,.2,"triangle",.045,.15)}}],fo=document.createElement("button");fo.id="carinho";fo.hidden=!0;document.body.append(fo);const uy=Xf.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",lr.append(n),n}),os=document.createElement("div");os.className="rotulo frase";os.textContent="♥ a flor mais bela do meu mundo todo";const dy=new z(0,-7.7,0);let Dl=0;lr.append(os);let Da=null,Eh="";const na=new z;function i0(n){$n<n.livre||(n.livre=$n+.5,n.modelo.carinho(),bc[n.id]+=1,dS(bc),n.modelo.cabeca.getWorldPosition(na).project(dn),gS((na.x*.5+.5)*window.innerWidth,(-na.y*.5+.5)*window.innerHeight,5),n.som())}fo.addEventListener("click",()=>{Da&&i0(Da),fo.blur()});function hy(n,e){let t=null,i=1/0;for(const r of Xf){const l=Sc(r.d);l<fy&&l<i&&(i=l,t=r)}Da=e?null:t;const a=Da?`♥ ${Da.frase} [E]`:"";a!==Eh&&(Eh=a,fo.textContent=a.toUpperCase(),fo.hidden=!a);const o=ls/ns;Su.atualizar($n,n),yu.atualizar($n,n,o),Xf.forEach((r,l)=>{const c=uy[l];if(ra.copy(r.d).applyQuaternion(wi),r===Da||ra.dot(yc)<.2){c.style.opacity="0";return}r.modelo.topo.getWorldPosition(na).project(dn),c.textContent=bc[r.id]?`${r.nome} ♥ ${bc[r.id]}`:r.nome,c.style.transform=`translate(${Math.round((na.x*.5+.5)*window.innerWidth)}px, ${Math.round((-na.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,c.style.opacity="1"});const s=sr((.42-Sc(ua.jasmim))/.22,0,1);Dl=oc(Dl,.8*s,3,n),na.copy(dy).project(dn),os.style.transform=`translate(${Math.round((na.x*.5+.5)*window.innerWidth)}px, ${Math.round((-na.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,os.style.opacity=Dl.toFixed(2)}const Ah={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function py(n){if(Ot){for(const[a,o]of Object.entries(Ah))Wf[o].value.set(Ot[a]);for(const{m:a,v:o}of Vf)a.color.set(Ot.copa[o%Ot.copa.length]);for(const a of Hf)a.color.set(Ot.copa2);Jn.background.set(Ot.ceu),Gf.color.set(Ot.estrelas),kf.color.set(Ot.nuvens);return}const e=Gr(n.planeta)?.cores;if(e)for(const[a,o]of Object.entries(Ah))Wf[o].value.set(e[a]);const t=Gr(n.arvores)?.cores;if(t){for(const{m:a,v:o}of Vf)a.color.set(t.copa[o%t.copa.length]);for(const a of Hf)a.color.set(t.copa2)}const i=Gr(n.ceu)?.cores;i&&(Jn.background.set(i.fundo),Gf.color.set(i.estrelas),kf.color.set(i.nuvens))}const Gn=KM({aoMudarSkins:py,aoMudarFichas:n=>{ty.textContent=String(n)}}),Tu=eS({bip:(...n)=>Gn.bip(...n),somAtivo:()=>Gn.somAtivo(),tema:xu,aoMudarNave:ZS}),my=NS({planeta:cr,fincar:Na,R:ii,q:wi,altura:Lc,NIVEL_MAR:Nc,dirsZonas:pi,raioBloqueio:cs,obstaculos:or,dirsSitios:ua,camera:dn,rotulosEl:lr,camDir:yc,bip:(...n)=>Gn.bip(...n)}),gy=fS({somAtivo:()=>Gn.somAtivo()}),qf=ka("#som");let Ul=null;qf.addEventListener("click",()=>{Gn.alternarSom(),qf.blur()});function a0(n){n==="arcade"?Tu.abrir():Gn.abrir()}Zp.addEventListener("click",()=>{io>=0&&bn[io].jogo&&(Oi.clear(),a0(bn[io].jogo))});const xy=4,Th=5,vy=.2*Ua,My=new Ti({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),wh=new Ti({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),wu=[],_y=new z;function o0(n){const e=new z;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(Lc(e)<Nc+.06)&&!(_y.copy(e).applyQuaternion(wi).angleTo(Mc)<.45*Ua)&&!(pi.some((i,a)=>e.angleTo(i)<cs[a]+.2)||qp(e,.25))&&!or.some(i=>e.angleTo(i.d)<i.r+.09*Ua)&&!wu.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(Mc,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=$n+2}for(let n=0;n<xy;n++){const e=new Yt,t=new Yt,i=new _t(new Zt(.3,.3,.08,12),My),a=new _t(new Zt(.2,.2,.1,12),wh);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const r=s*Math.PI/4,l=new _t(new un(.1,.14,.1),wh);l.position.set(0,Math.sin(r)*.3,Math.cos(r)*.3),l.rotation.x=r,t.add(l)}t.position.y=ii+.7,e.add(t),to(e),cr.add(e);const o={d:new z,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};wu.push(o),o0(o)}const Qs=new z;function Sy(n){Oa.getWorldPosition(Qs),Qs.project(dn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((Qs.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-Qs.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function yy(n){for(const e of wu){if(!e.ativa){$n>=e.volta&&o0(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=ii+.7+Math.sin($n*3+e.fase)*.08,Sc(e.d)<vy&&(e.ativa=!1,e.raiz.visible=!1,e.volta=$n+25+Math.random()*25,Gn.adicionarFichas(Th),Sy("+"+Th),Gn.bip(988,.07,"square",.07),Gn.bip(1319,.22,"square",.07,.08),Gn.bip(1976,.3,"triangle",.05,.08))}}let Rh=performance.now();ti.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-Rh)/1e3,.05);Rh=n,$n+=e;const t=(E,y)=>Oi.has(E)||Oi.has(y)?1:0,i=Gn.estaAberto()||Tu.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||oa.x,o=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||oa.y;const s=Math.hypot(a,o);s>1&&(a/=s,o/=s),(Oi.has("ShiftLeft")||Oi.has("ShiftRight"))&&(a*=1.7,o*=1.7),ya=oc(ya,a,9,e),ba=oc(ba,o,9,e);const l=Math.hypot(ya,ba);l>.003&&(ja.set(ba,0,ya).normalize(),_c.setFromAxisAngle(ja,l*Bf*e),wi.premultiply(_c),yh=!0),pi.forEach((E,y)=>bh(E,cs[y]));for(const E of or)E.baixo&&Ka>.5||bh(E.d,E.r);wi.normalize(),yh&&ka("#dica").classList.add("some"),!i&&(Oi.has("Space")||oa.pulo)&&Xo&&(js=7.2,Xo=!1,Ll=0),Xo||(js-=20*e,Ll+=e,Ka+=js*e,Ka<=0&&(Ka=0,js=0,Xo=!0));const u=Math.min(1.7,l);if(l>.08){const E=Math.abs(ya)>Math.abs(ba)*1.1,y=Math.abs(ba)>Math.abs(ya)*1.1;E?Ea=ya>0?"direita":"esquerda":y&&(Ea=ba>0?"norte":"sul")}Il+=u*e*9;let h;if(Xo)l>1.2?h=La.correr[Ea][Math.floor(Il)%rc.correr]:l>.08?h=La.andar[Ea][Math.floor(Il)%rc.andar]:h=Ea==="sul"?La.parado.sul[vh[Math.floor($n*4)%vh.length]]:La.parado[Ea][0];else{const E=Math.min(.999,Ll/sy);h=La.pular[Ea][Math.floor(E*rc.pular)]}Oa.material=h;const d=Xo&&l<=.08&&Ea!=="sul"?Math.sin($n*2.4)*.012:0;Oa.scale.set(bu*(1-d*.5),ls*(1+d),1),Oa.position.y=ii+Ka;const p=Math.min(Ka,1.5);Mh.scale.setScalar(1-p*.2),Mh.material.opacity=.55-p*.2;const m=dn.userData.afasta,_=Qp*m,v=.42,x=1.5;dn.position.set(0,x+Math.sin(v)*_,Math.cos(v)*_),dn.lookAt(0,x,0),Mu.rotation.y=Math.sin($n*.1)*.4;let b=-1,w=1/0;pi.forEach((E,y)=>{const T=Sc(E);T<GS[y]&&T<w&&(w=T,b=y)}),_u.forEach((E,y)=>{const T=y===b;E.anel.material.opacity=oc(E.anel.material.opacity,T?.55+Math.sin($n*4)*.25:0,8,e),E.gira&&(E.gira.rotation.y+=e*(T?2.4:.8),E.gira.position.y=E.giraY+Math.sin($n*1.6+y)*(T?.12:.06))}),io=b,ay(b),ly(b),yy(e),hy(e,i),my.atualizar(e,{vLeste:ya,vNorte:ba,VEL:Bf,pulando:Ka>.4,pausado:i}),gy.atualizar(e,i),Gn.somAtivo()!==Ul&&(Ul=Gn.somAtivo(),qf.classList.toggle("mudo",!Ul)),ts?(ti.setRenderTarget(null),ti.render(Jn,dn)):(ti.setRenderTarget(as),ti.render(Jn,dn),ti.setRenderTarget(null),ti.render(e0,ry))});
