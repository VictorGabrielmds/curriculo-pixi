(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const of="186",bp=0,Qf=1,Ep=2,uo=1,Ap=2,lo=3,Va=0,Cn=1,Jn=2,Xi=0,ho=1,jf=2,eu=3,tu=4,Tp=5,Er=100,wp=101,Rp=102,Cp=103,Pp=104,Ip=200,Lp=201,Dp=202,Np=203,Dd=204,Nd=205,Up=206,Op=207,Fp=208,Bp=209,zp=210,Gp=211,Vp=212,kp=213,Hp=214,oc=0,sc=1,lc=2,Mo=3,cc=4,fc=5,uc=6,dc=7,Ud=0,Wp=1,Xp=2,wi=0,Od=1,Fd=2,Bd=3,zd=4,Gd=5,Vd=6,kd=7,Hd=300,ka=301,Dr=302,pl=303,ml=304,Qs=306,Us=1e3,ki=1001,hc=1002,nn=1003,qp=1004,Yo=1005,dn=1006,gl=1007,Fa=1008,Vn=1009,Wd=1010,Xd=1011,_o=1012,sf=1013,Ci=1014,Ai=1015,ei=1016,lf=1017,cf=1018,So=1020,qd=35902,Yd=35899,$d=1021,Jd=1022,Kn=1023,Yi=1026,Ba=1027,Zd=1028,ff=1029,Ha=1030,uf=1031,df=1033,Rs=33776,Cs=33777,Ps=33778,Is=33779,pc=35840,mc=35841,gc=35842,xc=35843,vc=36196,Mc=37492,_c=37496,Sc=37488,yc=37489,Os=37490,bc=37491,Ec=37808,Ac=37809,Tc=37810,wc=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Lc=37816,Dc=37817,Nc=37818,Uc=37819,Oc=37820,Fc=37821,Bc=36492,zc=36494,Gc=36495,Vc=36283,kc=36284,Fs=36285,Hc=36286,Yp=3200,Wc=0,$p=1,ma="",Dn="srgb",Bs="srgb-linear",zs="linear",Gt="srgb",xl=7680,Jp=519,Zp=512,Kp=513,Qp=514,hf=515,jp=516,e0=517,pf=518,t0=519,Kd=35044,nu="300 es",Ti=2e3,yo=2001;function n0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i0(){const n=bo("canvas");return n.style.display="block",n}const iu={};function Gs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Qd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function pt(...n){n=Qd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Lt(...n){n=Qd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cr(...n){const e=n.join(" ");e in iu||(iu[e]=!0,pt(...n))}function a0(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const r0={[oc]:sc,[lc]:uc,[cc]:dc,[Mo]:fc,[sc]:oc,[uc]:lc,[dc]:cc,[fc]:Mo};class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const po=Math.PI/180,Eo=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function mf(n,e){return(n%e+e)%e}function o0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function s0(n,e,t){return n!==e?(t-n)/(e-n):0}function mo(n,e,t){return(1-t)*n+t*e}function l0(n,e,t,i){return mo(n,e,1-Math.exp(-t*i))}function c0(n,e=1){return e-Math.abs(mf(n,e*2)-e)}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function u0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function d0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function h0(n,e){return n+Math.random()*(e-n)}function p0(n){return n*(.5-Math.random())}function m0(n){n!==void 0&&(au=n);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(n){return n*po}function x0(n){return n*Eo}function v0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function M0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),c=s(t/2),f=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,c*h,c*d,o*f);break;case"YZY":n.set(c*d,o*u,c*h,o*f);break;case"ZXZ":n.set(c*h,c*d,o*u,o*f);break;case"XZX":n.set(o*u,c*m,c*p,o*f);break;case"YXY":n.set(c*p,o*u,c*m,o*f);break;case"ZYZ":n.set(c*m,c*p,o*u,o*f);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const y0={DEG2RAD:po,RAD2DEG:Eo,generateUUID:Ri,clamp:Ct,euclideanModulo:mf,mapLinear:o0,inverseLerp:s0,lerp:mo,damp:l0,pingpong:c0,smoothstep:f0,smootherstep:u0,randInt:d0,randFloat:h0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:x0,isPowerOfTwo:v0,ceilPowerOfTwo:M0,floorPowerOfTwo:_0,setQuaternionFromProperEuler:S0,normalize:Vt,denormalize:fi},Bf=class Bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bf.prototype.isVector2=!0;let De=Bf;class di{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let c=i[a+0],f=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],E=r[s+3];if(h!==E||c!==d||f!==p||u!==m){let v=c*d+f*p+u*m+h*E;v<0&&(d=-d,p=-p,m=-m,E=-E,v=-v);let g=1-o;if(v<.9995){const A=Math.acos(v),P=Math.sin(A);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P,c=c*g+d*o,f=f*g+p*o,u=u*g+m*o,h=h*g+E*o}else{c=c*g+d*o,f=f*g+p*o,u=u*g+m*o,h=h*g+E*o;const A=1/Math.sqrt(c*c+f*f+u*u+h*h);c*=A,f*=A,u*=A,h*=A}}e[t]=c,e[t+1]=f,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],c=i[a+1],f=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+c*p-f*d,e[t+1]=c*m+u*d+f*h-o*p,e[t+2]=f*m+u*p+o*d-c*h,e[t+3]=u*m-o*h-c*d-f*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,f=o(i/2),u=o(a/2),h=o(r/2),d=c(i/2),p=c(a/2),m=c(r/2);switch(s){case"XYZ":this._x=d*u*h+f*p*m,this._y=f*p*h-d*u*m,this._z=f*u*m+d*p*h,this._w=f*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+f*p*m,this._y=f*p*h-d*u*m,this._z=f*u*m-d*p*h,this._w=f*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-f*p*m,this._y=f*p*h+d*u*m,this._z=f*u*m+d*p*h,this._w=f*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-f*p*m,this._y=f*p*h+d*u*m,this._z=f*u*m-d*p*h,this._w=f*u*h+d*p*m;break;case"YZX":this._x=d*u*h+f*p*m,this._y=f*p*h+d*u*m,this._z=f*u*m-d*p*h,this._w=f*u*h-d*p*m;break;case"XZY":this._x=d*u*h-f*p*m,this._y=f*p*h-d*u*m,this._z=f*u*m+d*p*h,this._w=f*u*h+d*p*m;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],f=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-f)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+f)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-f)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+f)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,f=t._z,u=t._w;return this._x=i*u+s*o+a*f-r*c,this._y=a*u+s*c+r*o-i*f,this._z=r*u+s*f+i*c-a*o,this._w=s*u-i*o-a*c-r*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let c=1-t;if(o<.9995){const f=Math.acos(o),u=Math.sin(f);c=Math.sin(c*f)/u,t=Math.sin(t*f)/u,this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+a*t,this._z=this._z*c+r*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zf=class zf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,f=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+c*f+s*h-o*u,this.y=i+c*u+o*f-r*h,this.z=a+c*h+r*u-s*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-i*c,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zf.prototype.isVector3=!0;let G=zf;const vl=new G,ru=new di,Gf=class Gf{constructor(e,t,i,a,r,s,o,c,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,c,f)}set(e,t,i,a,r,s,o,c,f){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=s,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],c=i[6],f=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],E=a[0],v=a[3],g=a[6],A=a[1],P=a[4],y=a[7],S=a[2],T=a[5],I=a[8];return r[0]=s*E+o*A+c*S,r[3]=s*v+o*P+c*T,r[6]=s*g+o*y+c*I,r[1]=f*E+u*A+h*S,r[4]=f*v+u*P+h*T,r[7]=f*g+u*y+h*I,r[2]=d*E+p*A+m*S,r[5]=d*v+p*P+m*T,r[8]=d*g+p*y+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],f=e[7],u=e[8];return t*s*u-t*o*f-i*r*u+i*o*c+a*r*f-a*s*c}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],f=e[7],u=e[8],h=u*s-o*f,d=o*c-u*r,p=f*r-s*c,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return e[0]=h*E,e[1]=(a*f-u*i)*E,e[2]=(o*i-a*s)*E,e[3]=d*E,e[4]=(u*t-a*c)*E,e[5]=(a*r-o*t)*E,e[6]=p*E,e[7]=(i*c-f*t)*E,e[8]=(s*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const c=Math.cos(r),f=Math.sin(r);return this.set(i*c,i*f,-i*(c*s+f*o)+s+e,-a*f,a*c,-a*(-f*s+c*o)+o+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let _t=Gf;const Ml=new _t,ou=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Gt&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Gt&&(a.r=Pr(a.r),a.g=Pr(a.g),a.b=Pr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ma?zs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:ou,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Gt,toXYZ:ou,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const It=b0();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let er;class E0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{er===void 0&&(er=bo("canvas")),er.width=e.width,er.height=e.height;const a=er.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=qi(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class gf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(_l(a[s].image)):r.push(_l(a[s]))}else r=_l(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?E0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let T0=0;const Sl=new G;class hn extends qa{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=ki,a=ki,r=dn,s=Fa,o=Kn,c=Vn,f=hn.DEFAULT_ANISOTROPY,u=ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ri(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hd;hn.DEFAULT_ANISOTROPY=1;const Vf=class Vf{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const c=e.elements,f=c[0],u=c[4],h=c[8],d=c[1],p=c[5],m=c[9],E=c[2],v=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(m+v)<.1&&Math.abs(f+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,y=(p+1)/2,S=(g+1)/2,T=(u+d)/4,I=(h+E)/4,_=(m+v)/4;return P>y&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=T/i,r=I/i):y>S?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=_/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=I/r,a=_/r),this.set(i,a,r,t),this}let A=Math.sqrt((v-m)*(v-m)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(v-m)/A,this.y=(h-E)/A,this.z=(d-u)/A,this.w=Math.acos((f+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vf.prototype.isVector4=!0;let jt=Vf;class w0 extends qa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new hn(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new gf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends w0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jd extends hn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=nn,this.minFilter=nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends hn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=nn,this.minFilter=nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ks=class Ks{constructor(e,t,i,a,r,s,o,c,f,u,h,d,p,m,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,c,f,u,h,d,p,m,E,v)}set(e,t,i,a,r,s,o,c,f,u,h,d,p,m,E,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=r,g[5]=s,g[9]=o,g[13]=c,g[2]=f,g[6]=u,g[10]=h,g[14]=d,g[3]=p,g[7]=m,g[11]=E,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ks().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),s=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(a),f=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=c*u,t[4]=-c*h,t[8]=f,t[1]=p+m*f,t[5]=d-E*f,t[9]=-o*c,t[2]=E-d*f,t[6]=m+p*f,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,m=f*u,E=f*h;t[0]=d+E*o,t[4]=m*o-p,t[8]=s*f,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=E+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,m=f*u,E=f*h;t[0]=d-E*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=E-d*o,t[2]=-s*f,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=c*u,t[4]=m*f-p,t[8]=d*f+E,t[1]=c*h,t[5]=E*f+d,t[9]=p*f-m,t[2]=-f,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*f,m=o*c,E=o*f;t[0]=c*u,t[4]=E-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-f*u,t[6]=p*h+m,t[10]=d-E*h}else if(e.order==="XZY"){const d=s*c,p=s*f,m=o*c,E=o*f;t[0]=c*u,t[4]=-h,t[8]=f*u,t[1]=d*h+E,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,i){const a=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ea.crossVectors(i,Fn),ea.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ea.crossVectors(i,Fn)),ea.normalize(),$o.crossVectors(Fn,ea),a[0]=ea.x,a[4]=$o.x,a[8]=Fn.x,a[1]=ea.y,a[5]=$o.y,a[9]=Fn.y,a[2]=ea.z,a[6]=$o.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],c=i[8],f=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],E=i[6],v=i[10],g=i[14],A=i[3],P=i[7],y=i[11],S=i[15],T=a[0],I=a[4],_=a[8],w=a[12],L=a[1],U=a[5],V=a[9],Y=a[13],z=a[2],J=a[6],ae=a[10],W=a[14],ve=a[3],se=a[7],ie=a[11],pe=a[15];return r[0]=s*T+o*L+c*z+f*ve,r[4]=s*I+o*U+c*J+f*se,r[8]=s*_+o*V+c*ae+f*ie,r[12]=s*w+o*Y+c*W+f*pe,r[1]=u*T+h*L+d*z+p*ve,r[5]=u*I+h*U+d*J+p*se,r[9]=u*_+h*V+d*ae+p*ie,r[13]=u*w+h*Y+d*W+p*pe,r[2]=m*T+E*L+v*z+g*ve,r[6]=m*I+E*U+v*J+g*se,r[10]=m*_+E*V+v*ae+g*ie,r[14]=m*w+E*Y+v*W+g*pe,r[3]=A*T+P*L+y*z+S*ve,r[7]=A*I+P*U+y*J+S*se,r[11]=A*_+P*V+y*ae+S*ie,r[15]=A*w+P*Y+y*W+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],f=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],E=e[7],v=e[11],g=e[15],A=c*p-f*d,P=o*p-f*h,y=o*d-c*h,S=s*p-f*u,T=s*d-c*u,I=s*h-o*u;return t*(E*A-v*P+g*y)-i*(m*A-v*S+g*T)+a*(m*P-E*S+g*I)-r*(m*y-E*T+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],c=e[2],f=e[6],u=e[10];return t*(s*u-o*f)-i*(r*u-o*c)+a*(r*f-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],f=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],E=e[13],v=e[14],g=e[15],A=t*o-i*s,P=t*c-a*s,y=t*f-r*s,S=i*c-a*o,T=i*f-r*o,I=a*f-r*c,_=u*E-h*m,w=u*v-d*m,L=u*g-p*m,U=h*v-d*E,V=h*g-p*E,Y=d*g-p*v,z=A*Y-P*V+y*U+S*L-T*w+I*_;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/z;return e[0]=(o*Y-c*V+f*U)*J,e[1]=(a*V-i*Y-r*U)*J,e[2]=(E*I-v*T+g*S)*J,e[3]=(d*T-h*I-p*S)*J,e[4]=(c*L-s*Y-f*w)*J,e[5]=(t*Y-a*L+r*w)*J,e[6]=(v*y-m*I-g*P)*J,e[7]=(u*I-d*y+p*P)*J,e[8]=(s*V-o*L+f*_)*J,e[9]=(i*L-t*V-r*_)*J,e[10]=(m*T-E*y+g*A)*J,e[11]=(h*y-u*T-p*A)*J,e[12]=(o*w-s*U-c*_)*J,e[13]=(t*U-i*w+a*_)*J,e[14]=(E*P-m*S-v*A)*J,e[15]=(u*S-h*P+d*A)*J,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,c=e.z,f=r*s,u=r*o;return this.set(f*s+i,f*o-a*c,f*c+a*o,0,f*o+a*c,u*o+i,u*c-a*s,0,f*c-a*o,u*c+a*s,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,f=r+r,u=s+s,h=o+o,d=r*f,p=r*u,m=r*h,E=s*u,v=s*h,g=o*h,A=c*f,P=c*u,y=c*h,S=i.x,T=i.y,I=i.z;return a[0]=(1-(E+g))*S,a[1]=(p+y)*S,a[2]=(m-P)*S,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(d+g))*T,a[6]=(v+A)*T,a[7]=0,a[8]=(m+P)*I,a[9]=(v-A)*I,a[10]=(1-(d+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=tr.set(a[0],a[1],a[2]).length();const o=tr.set(a[4],a[5],a[6]).length(),c=tr.set(a[8],a[9],a[10]).length();r<0&&(s=-s),ri.copy(this);const f=1/s,u=1/o,h=1/c;return ri.elements[0]*=f,ri.elements[1]*=f,ri.elements[2]*=f,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=c,this}makePerspective(e,t,i,a,r,s,o=Ti,c=!1){const f=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,E;if(c)m=r/(s-r),E=s*r/(s-r);else if(o===Ti)m=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(o===yo)m=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return f[0]=u,f[4]=0,f[8]=d,f[12]=0,f[1]=0,f[5]=h,f[9]=p,f[13]=0,f[2]=0,f[6]=0,f[10]=m,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Ti,c=!1){const f=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,E;if(c)m=1/(s-r),E=s/(s-r);else if(o===Ti)m=-2/(s-r),E=-(s+r)/(s-r);else if(o===yo)m=-1/(s-r),E=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return f[0]=u,f[4]=0,f[8]=0,f[12]=d,f[1]=0,f[5]=h,f[9]=0,f[13]=p,f[2]=0,f[6]=0,f[10]=m,f[14]=E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ks.prototype.isMatrix4=!0;let Yt=Ks;const tr=new G,ri=new Yt,C0=new G(0,0,0),P0=new G(1,1,1),ea=new G,$o=new G,Fn=new G,lu=new Yt,cu=new di;class Sa{constructor(e=0,t=0,i=0,a=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],f=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const fu=new G,nr=new di,Ii=new Yt,Jo=new G,$r=new G,L0=new G,D0=new di,uu=new G(1,0,0),du=new G(0,1,0),hu=new G(0,0,1),pu={type:"added"},N0={type:"removed"},ir={type:"childadded",child:null},yl={type:"childremoved",child:null};class Xt extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new G,t=new Sa,i=new di,a=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new _t}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt($r,Jo,this.up):Ii.lookAt(Jo,$r,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),nr.setFromRotationMatrix(Ii),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),ir.child=e,this.dispatchEvent(ir),ir.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let f=0,u=c.length;f<u;f++){const h=c[f];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,f=this.material.length;c<f;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),f=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),f.length>0&&(i.textures=f),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const c=[];for(const f in o){const u=o[f];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xt.DEFAULT_UP=new G(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jt extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U0={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){s=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),g=this._getHandJoint(f,E);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const u=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;f.inputState.pinching&&d>p+m?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=p-m&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),f!==null&&(f.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ta={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=It.workingColorSpace){if(e=mf(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=El(s,r,e+1/3),this.g=El(s,r,e),this.b=El(s,r,e-1/3)}return It.colorSpaceToWorking(this,a),this}setStyle(e,t=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return It.workingToColorSpace(vn.copy(this),e),Math.round(Ct(vn.r*255,0,255))*65536+Math.round(Ct(vn.g*255,0,255))*256+Math.round(Ct(vn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(vn.copy(this),t);const i=vn.r,a=vn.g,r=vn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let c,f;const u=(o+s)/2;if(o===s)c=0,f=0;else{const h=s-o;switch(f=u<=.5?h/(s+o):h/(2-s-o),s){case i:c=(a-r)/h+(a<r?6:0);break;case a:c=(r-i)/h+2;break;case r:c=(i-a)/h+4;break}c/=6}return e.h=c,e.s=f,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Dn){It.workingToColorSpace(vn.copy(this),e);const t=vn.r,i=vn.g,a=vn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ta),this.setHSL(ta.h+e,ta.s+t,ta.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ta),e.getHSL(Zo);const i=mo(ta.h,Zo.h,t),a=mo(ta.s,Zo.s,t),r=mo(ta.l,Zo.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new gt;gt.NAMES=th;class nh extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oi=new G,Li=new G,Al=new G,Di=new G,ar=new G,rr=new G,mu=new G,Tl=new G,wl=new G,Rl=new G,Cl=new jt,Pl=new jt,Il=new jt;class Zn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),oi.subVectors(e,t),a.cross(oi);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){oi.subVectors(a,t),Li.subVectors(i,t),Al.subVectors(e,t);const s=oi.dot(oi),o=oi.dot(Li),c=oi.dot(Al),f=Li.dot(Li),u=Li.dot(Al),h=s*f-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(f*c-o*u)*d,m=(s*u-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,a,r,s,o,c){return this.getBarycoord(e,t,i,a,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(s,Di.y),c.addScaledVector(o,Di.z),c)}static getInterpolatedAttribute(e,t,i,a,r,s){return Cl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Cl,r.x),s.addScaledVector(Pl,r.y),s.addScaledVector(Il,r.z),s}static isFrontFacing(e,t,i,a){return oi.subVectors(i,t),Li.subVectors(e,t),oi.cross(Li).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;ar.subVectors(a,i),rr.subVectors(r,i),Tl.subVectors(e,i);const c=ar.dot(Tl),f=rr.dot(Tl);if(c<=0&&f<=0)return t.copy(i);wl.subVectors(e,a);const u=ar.dot(wl),h=rr.dot(wl);if(u>=0&&h<=u)return t.copy(a);const d=c*h-u*f;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(ar,s);Rl.subVectors(e,r);const p=ar.dot(Rl),m=rr.dot(Rl);if(m>=0&&p<=m)return t.copy(r);const E=p*f-c*m;if(E<=0&&f>=0&&m<=0)return o=f/(f-m),t.copy(i).addScaledVector(rr,o);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return mu.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(mu,o);const g=1/(v+E+d);return s=E*g,o=d*g,t.copy(i).addScaledVector(ar,s).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Uo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,si):si.fromBufferAttribute(r,s),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Qo.subVectors(this.max,Jr),or.subVectors(e.a,Jr),sr.subVectors(e.b,Jr),lr.subVectors(e.c,Jr),na.subVectors(sr,or),ia.subVectors(lr,sr),Ra.subVectors(or,lr);let t=[0,-na.z,na.y,0,-ia.z,ia.y,0,-Ra.z,Ra.y,na.z,0,-na.x,ia.z,0,-ia.x,Ra.z,0,-Ra.x,-na.y,na.x,0,-ia.y,ia.x,0,-Ra.y,Ra.x,0];return!Ll(t,or,sr,lr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,or,sr,lr,Qo))?!1:(jo.crossVectors(na,ia),t=[jo.x,jo.y,jo.z],Ll(t,or,sr,lr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,Ko=new Uo,or=new G,sr=new G,lr=new G,na=new G,ia=new G,Ra=new G,Jr=new G,Qo=new G,jo=new G,Ca=new G;function Ll(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){Ca.fromArray(n,r);const o=a.x*Math.abs(Ca.x)+a.y*Math.abs(Ca.y)+a.z*Math.abs(Ca.z),c=e.dot(Ca),f=t.dot(Ca),u=i.dot(Ca);if(Math.max(-Math.max(c,f,u),Math.min(c,f,u))>o)return!1}return!0}const Vi=O0();function O0(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),a=new Uint32Array(512);for(let c=0;c<256;++c){const f=c-127;f<-27?(i[c]=0,i[c|256]=32768,a[c]=24,a[c|256]=24):f<-14?(i[c]=1024>>-f-14,i[c|256]=1024>>-f-14|32768,a[c]=-f-1,a[c|256]=-f-1):f<=15?(i[c]=f+15<<10,i[c|256]=f+15<<10|32768,a[c]=13,a[c|256]=13):f<128?(i[c]=31744,i[c|256]=64512,a[c]=24,a[c|256]=24):(i[c]=31744,i[c|256]=64512,a[c]=13,a[c|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let f=c<<13,u=0;for(;(f&8388608)===0;)f<<=1,u-=8388608;f&=-8388609,u+=947912704,r[c]=f|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:r,exponentTable:s,offsetTable:o}}function F0(n){Math.abs(n)>65504&&pt("DataUtils.toHalfFloat(): Value out of range."),n=Ct(n,-65504,65504),Vi.floatView[0]=n;const e=Vi.uint32View[0],t=e>>23&511;return Vi.baseTable[t]+((e&8388607)>>Vi.shiftTable[t])}function B0(n){const e=n>>10;return Vi.uint32View[0]=Vi.mantissaTable[Vi.offsetTable[e]+(n&1023)]+Vi.exponentTable[e],Vi.floatView[0]}class gu{static toHalfFloat(e){return F0(e)}static fromHalfFloat(e){return B0(e)}}const an=new G,es=new De;let z0=0;class hi extends qa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ih extends hi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ah extends hi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends hi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const G0=new Uo,Zr=new G,Dl=new G;class js{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):G0.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Zr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Dl)),this.expandByPoint(Zr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V0=0;const qn=new Yt,Nl=new Xt,cr=new G,Bn=new Uo,Kr=new Uo,cn=new G;class mn extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?ah:ih)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new _t().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Bn.min,Kr.min),Bn.expandByPoint(cn),cn.addVectors(Bn.max,Kr.max),Bn.expandByPoint(cn)):(Bn.expandByPoint(Kr.min),Bn.expandByPoint(Kr.max))}Bn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)cn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(cn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let f=0,u=o.count;f<u;f++)cn.fromBufferAttribute(o,f),c&&(cr.fromBufferAttribute(e,f),cn.add(cr)),a=Math.max(a,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new hi(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new G,c[_]=new G;const f=new G,u=new G,h=new G,d=new De,p=new De,m=new De,E=new G,v=new G;function g(_,w,L){f.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,L),u.sub(f),h.sub(f),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(E.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(E),o[w].add(E),o[L].add(E),c[_].add(v),c[w].add(v),c[L].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let Y=U,z=U+V;Y<z;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new G,y=new G,S=new G,T=new G;function I(_){S.fromBufferAttribute(a,_),T.copy(S);const w=o[_];P.copy(w),P.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);const U=y.dot(c[_])<0?-1:1;s.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let Y=U,z=U+V;Y<z;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new G,r=new G,s=new G,o=new G,c=new G,f=new G,u=new G,h=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,v),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,v),o.add(u),c.add(u),f.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,c){const f=o.array,u=o.itemSize,h=o.normalized,d=new f.constructor(c.length*u);let p=0,m=0;for(let E=0,v=c.length;E<v;E++){o.isInterleavedBufferAttribute?p=c[E]*o.data.stride+o.offset:p=c[E]*u;for(let g=0;g<u;g++)d[m++]=f[p++]}return new hi(d,u,h)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,a=this.attributes;for(const o in a){const c=a[o],f=e(c,i);t.setAttribute(o,f)}const r=this.morphAttributes;for(const o in r){const c=[],f=r[o];for(let u=0,h=f.length;u<h;u++){const d=f[u],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const f=s[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const f=i[c];e.data.attributes[c]=f.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],u=[];for(let h=0,d=f.length;h<d;h++){const p=f[h];u.push(p.toJSON(e.data))}u.length>0&&(a[c]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const f in a){const u=a[f];this.setAttribute(f,u.clone(t))}const r=e.morphAttributes;for(const f in r){const u=[],h=r[f];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let f=0,u=s.length;f<u;f++){const h=s[f];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const An=new G;class Vs{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ul=new G,H0=new G,W0=new _t;class da{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ul.subVectors(i,t).cross(H0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Ul),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W0.getNormalMatrix(e),a=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X0=0;class Ya extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ho,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new da().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xf extends Ya{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fr;const Qr=new G,ur=new G,dr=new G,hr=new De,jr=new De,rh=new Yt,ts=new G,eo=new G,ns=new G,xu=new De,Ol=new De,vu=new De;class oh extends Xt{constructor(e=new xf){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new k0(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new Vs(i,3,0,!1)),fr.setAttribute("uv",new Vs(i,2,3,!1))}this.geometry=fr,this.material=e,this.center=new De(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;is(ts.set(-.5,-.5,0),dr,s,ur,a,r),is(eo.set(.5,-.5,0),dr,s,ur,a,r),is(ns.set(.5,.5,0),dr,s,ur,a,r),xu.set(0,0),Ol.set(1,0),vu.set(1,1);let o=e.ray.intersectTriangle(ts,eo,ns,!1,Qr);if(o===null&&(is(eo.set(-.5,.5,0),dr,s,ur,a,r),Ol.set(0,1),o=e.ray.intersectTriangle(ts,ns,eo,!1,Qr),o===null))return;const c=e.ray.origin.distanceTo(Qr);c<e.near||c>e.far||t.push({distance:c,point:Qr.clone(),uv:Zn.getInterpolation(Qr,ts,eo,ns,xu,Ol,vu,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function is(n,e,t,i,a,r){hr.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(jr.x=r*hr.x-a*hr.y,jr.y=a*hr.x+r*hr.y):jr.copy(hr),n.copy(e),n.x+=jr.x,n.y+=jr.y,n.applyMatrix4(rh)}const Ui=new G,Fl=new G,as=new G,rs=new G;class sh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Fl.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Fl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(as),o=rs.dot(this.direction),c=-rs.dot(as),f=rs.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*c-o,d=s*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const E=1/u;h*=E,d*=E,p=h*(h+s*d+2*o)+d*(s*h+d+2*c)+f}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+f;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+f;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+f):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+f):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+f);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Fl).addScaledVector(as,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),a=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,c;const f=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return f>=0?(i=(e.min.x-d.x)*f,a=(e.max.x-d.x)*f):(i=(e.max.x-d.x)*f,a=(e.min.x-d.x)*f),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>a)||((o>i||i!==i)&&(i=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,c=o.x,f=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,E=t.y-s.y,v=t.z-s.z,g=i.x-s.x,A=i.y-s.y,P=i.z-s.z,y=Math.abs(c),S=Math.abs(f),T=Math.abs(u);let I,_,w,L,U,V,Y,z,J,ae,W,ve;if(y>=S&&y>=T?(w=c,V=h,J=m,ve=g,c>=0?(I=f,_=u,L=d,U=p,Y=E,z=v,ae=A,W=P):(I=u,_=f,L=p,U=d,Y=v,z=E,ae=P,W=A)):S>=T?(w=f,V=d,J=E,ve=A,f>=0?(I=u,_=c,L=p,U=h,Y=v,z=m,ae=P,W=g):(I=c,_=u,L=h,U=p,Y=m,z=v,ae=g,W=P)):(w=u,V=p,J=v,ve=P,u>=0?(I=c,_=f,L=h,U=d,Y=m,z=E,ae=g,W=A):(I=f,_=c,L=d,U=h,Y=E,z=m,ae=A,W=g)),w===0)return null;const se=I/w,ie=_/w,pe=1/w,Qe=L-se*V,Ve=U-ie*V,vt=Y-se*J,dt=z-ie*J,mt=ae-se*ve,ce=W-ie*ve,me=mt*dt-ce*vt,Re=Qe*ce-Ve*mt,st=vt*Ve-dt*Qe;if(a){if(me<0||Re<0||st<0)return null}else if((me<0||Re<0||st<0)&&(me>0||Re>0||st>0))return null;const We=me+Re+st;if(We===0)return null;const Ce=pe*(me*V+Re*J+st*ve);return(We>0?Ce<0:Ce>0)?null:this.at(Ce/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ji extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mu=new Yt,Pa=new sh,os=new js,_u=new G,ss=new G,ls=new G,cs=new G,Bl=new G,fs=new G,Su=new G,us=new G;class At extends Xt{constructor(e=new mn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let c=0,f=r.length;c<f;c++){const u=o[c],h=r[c];u!==0&&(Bl.fromBufferAttribute(h,e),s?fs.addScaledVector(Bl,u):fs.addScaledVector(Bl.sub(t),u))}t.add(fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),Pa.copy(e.ray).recast(e.near),!(os.containsPoint(Pa.origin)===!1&&(Pa.intersectSphere(os,_u)===null||Pa.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(Mu),!(i.boundingBox!==null&&Pa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,f=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],g=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);a=ds(this,g,e,i,f,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let v=m,g=E;v<g;v+=3){const A=o.getX(v),P=o.getX(v+1),y=o.getX(v+2);a=ds(this,s,e,i,f,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],g=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=y,I=y+1,_=y+2;a=ds(this,g,e,i,f,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(c.count,p.start+p.count);for(let v=m,g=E;v<g;v+=3){const A=v,P=v+1,y=v+2;a=ds(this,s,e,i,f,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function q0(n,e,t,i,a,r,s,o){let c;if(e.side===Cn?c=i.intersectTriangle(s,r,a,!0,o):c=i.intersectTriangle(a,r,s,e.side===Va,o),c===null)return null;us.copy(o),us.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(us);return f<t.near||f>t.far?null:{distance:f,point:us.clone(),object:n}}function ds(n,e,t,i,a,r,s,o,c,f){n.getVertexPosition(o,ss),n.getVertexPosition(c,ls),n.getVertexPosition(f,cs);const u=q0(n,e,t,i,ss,ls,cs,Su);if(u){const h=new G;Zn.getBarycoord(Su,ss,ls,cs,h),a&&(u.uv=Zn.getInterpolatedAttribute(a,o,c,f,h,new De)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,o,c,f,h,new De)),s&&(u.normal=Zn.getInterpolatedAttribute(s,o,c,f,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:f,normal:new G,materialIndex:0};Zn.getNormal(ss,ls,cs,d.normal),u.face=d,u.barycoord=h}return u}class lh extends hn{constructor(e=null,t=1,i=1,a,r,s,o,c,f=nn,u=nn,h,d){super(null,s,o,c,f,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ia=new js,Y0=new De(.5,.5),hs=new G;class vf{constructor(e=new da,t=new da,i=new da,a=new da,r=new da,s=new da){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],f=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],E=r[9],v=r[10],g=r[11],A=r[12],P=r[13],y=r[14],S=r[15];if(a[0].setComponents(f-s,p-u,g-m,S-A).normalize(),a[1].setComponents(f+s,p+u,g+m,S+A).normalize(),a[2].setComponents(f+o,p+h,g+E,S+P).normalize(),a[3].setComponents(f-o,p-h,g-E,S-P).normalize(),i)a[4].setComponents(c,d,v,y).normalize(),a[5].setComponents(f-c,p-d,g-v,S-y).normalize();else if(a[4].setComponents(f-c,p-d,g-v,S-y).normalize(),t===Ti)a[5].setComponents(f+c,p+d,g+v,S+y).normalize();else if(t===yo)a[5].setComponents(c,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ia.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ia.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ia)}intersectsSprite(e){Ia.center.set(0,0,0);const t=Y0.distanceTo(e.center);return Ia.radius=.7071067811865476+t,Ia.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ia)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(hs.x=a.normal.x>0?e.max.x:e.min.x,hs.y=a.normal.y>0?e.max.y:e.min.y,hs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends Ya{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yu=new Yt,Xc=new sh,ps=new js,ms=new G;class $0 extends Xt{constructor(e=new mn,t=new ch){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(a),ps.radius+=r,e.ray.intersectsSphere(ps)===!1)return;yu.copy(a).invert(),Xc.copy(e.ray).applyMatrix4(yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,f=i.index,h=i.attributes.position;if(f!==null){const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let m=d,E=p;m<E;m++){const v=f.getX(m);ms.fromBufferAttribute(h,v),bu(ms,v,c,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,E=p;m<E;m++)ms.fromBufferAttribute(h,m),bu(ms,m,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bu(n,e,t,i,a,r,s){const o=Xc.distanceSqToPoint(n);if(o<t){const c=new G;Xc.closestPointToPoint(n,c),c.applyMatrix4(i);const f=a.ray.origin.distanceTo(c);if(f<a.near||f>a.far)return;r.push({distance:f,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class fh extends hn{constructor(e=[],t=ka,i,a,r,s,o,c,f,u){super(e,t,i,a,r,s,o,c,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends hn{constructor(e,t,i,a,r,s,o,c,f){super(e,t,i,a,r,s,o,c,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nr extends hn{constructor(e,t,i=Ci,a,r,s,o=nn,c=nn,f,u=Yi,h=1){if(u!==Yi&&u!==Ba)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,c,u,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class J0 extends Nr{constructor(e,t=Ci,i=ka,a,r,s=nn,o=nn,c,f=Yi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,c,f),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uh extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ya extends mn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],f=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(c),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function m(E,v,g,A,P,y,S,T,I,_,w){const L=y/I,U=S/_,V=y/2,Y=S/2,z=T/2,J=I+1,ae=_+1;let W=0,ve=0;const se=new G;for(let ie=0;ie<ae;ie++){const pe=ie*U-Y;for(let Qe=0;Qe<J;Qe++){const Ve=Qe*L-V;se[E]=Ve*A,se[v]=pe*P,se[g]=z,f.push(se.x,se.y,se.z),se[E]=0,se[v]=0,se[g]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(Qe/I),h.push(1-ie/_),W+=1}}for(let ie=0;ie<_;ie++)for(let pe=0;pe<I;pe++){const Qe=d+pe+J*ie,Ve=d+pe+J*(ie+1),vt=d+(pe+1)+J*(ie+1),dt=d+(pe+1)+J*ie;c.push(Qe,Ve,dt),c.push(Ve,vt,dt),ve+=6}o.addGroup(p,ve,w),p+=ve,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yn extends mn{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c};const f=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const E=[],v=i/2;let g=0;A(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function A(){const y=new G,S=new G;let T=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const w=[],L=_/r,U=L*(t-e)+e;for(let V=0;V<=a;V++){const Y=V/a,z=Y*c+o,J=Math.sin(z),ae=Math.cos(z);S.x=U*J,S.y=-L*i+v,S.z=U*ae,h.push(S.x,S.y,S.z),y.set(J,I,ae).normalize(),d.push(y.x,y.y,y.z),p.push(Y,1-L),w.push(m++)}E.push(w)}for(let _=0;_<a;_++)for(let w=0;w<r;w++){const L=E[w][_],U=E[w+1][_],V=E[w+1][_+1],Y=E[w][_+1];(e>0||w!==0)&&(u.push(L,U,Y),T+=3),(t>0||w!==r-1)&&(u.push(U,V,Y),T+=3)}f.addGroup(g,T,0),g+=T}function P(y){const S=m,T=new De,I=new G;let _=0;const w=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let V=0;V<=a;V++){const z=V/a*c+o,J=Math.cos(z),ae=Math.sin(z);I.x=w*ae,I.y=v*L,I.z=w*J,h.push(I.x,I.y,I.z),d.push(0,L,0),T.x=J*.5+.5,T.y=ae*.5*L+.5,p.push(T.x,T.y),m++}for(let V=0;V<a;V++){const Y=S+V,z=U+V;y===!0?u.push(z,z+1,Y):u.push(z+1,z,Y),_+=3}f.addGroup(g,_,y===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends yn{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new xa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends mn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),f(i),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const P=new G,y=new G,S=new G;for(let T=0;T<t.length;T+=3)p(t[T+0],P),p(t[T+1],y),p(t[T+2],S),c(P,y,S,A)}function c(A,P,y,S){const T=S+1,I=[];for(let _=0;_<=T;_++){I[_]=[];const w=A.clone().lerp(y,_/T),L=P.clone().lerp(y,_/T),U=T-_;for(let V=0;V<=U;V++)V===0&&_===T?I[_][V]=w:I[_][V]=w.clone().lerp(L,V/U)}for(let _=0;_<T;_++)for(let w=0;w<2*(T-_)-1;w++){const L=Math.floor(w/2);w%2===0?(d(I[_][L+1]),d(I[_+1][L]),d(I[_][L])):(d(I[_][L+1]),d(I[_+1][L+1]),d(I[_+1][L]))}}function f(A){const P=new G;for(let y=0;y<r.length;y+=3)P.x=r[y+0],P.y=r[y+1],P.z=r[y+2],P.normalize().multiplyScalar(A),r[y+0]=P.x,r[y+1]=P.y,r[y+2]=P.z}function u(){const A=new G;for(let P=0;P<r.length;P+=3){A.x=r[P+0],A.y=r[P+1],A.z=r[P+2];const y=v(A)/2/Math.PI+.5,S=g(A)/Math.PI+.5;s.push(y,1-S)}m(),h()}function h(){for(let A=0;A<s.length;A+=6){const P=s[A+0],y=s[A+2],S=s[A+4],T=Math.max(P,y,S),I=Math.min(P,y,S);T>.9&&I<.1&&(P<.2&&(s[A+0]+=1),y<.2&&(s[A+2]+=1),S<.2&&(s[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,P){const y=A*3;P.x=e[y+0],P.y=e[y+1],P.z=e[y+2]}function m(){const A=new G,P=new G,y=new G,S=new G,T=new De,I=new De,_=new De;for(let w=0,L=0;w<r.length;w+=9,L+=6){A.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(A).add(P).add(y).divideScalar(3);const U=v(S);E(T,L+0,A,U),E(I,L+2,P,U),E(_,L+4,y,U)}}function E(A,P,y,S){S<0&&A.x===1&&(s[P]=A.x-1),y.x===0&&y.z===0&&(s[P]=S/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function g(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.vertices,e.indices,e.radius,e.detail)}}class Mf extends el{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mf(e.radius,e.detail)}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,c=r-1,f;for(;o<=c;)if(a=Math.floor(o+(c-o)/2),f=i[a]-s,f<0)o=a+1;else if(f>0)c=a-1;else{c=a;break}if(a=c,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),c=t||(s.isVector2?new De:new G);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new G,a=[],r=[],s=[],o=new G,c=new Yt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new G)}r[0]=new G,s[0]=new G;let f=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=f&&(f=u,i.set(1,0,0)),h<=f&&(f=h,i.set(0,1,0)),d<=f&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ct(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Ct(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _f extends Pi{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new De){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),f=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=f-this.aY;c=d*u-p*h+this.aX,f=d*h+p*u+this.aY}return i.set(c,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Z0 extends _f{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Sf(){let n=0,e=0,t=0,i=0;function a(r,s,o,c){n=r,e=o,t=-3*r+3*s-2*o-c,i=2*r-2*s+o+c}return{initCatmullRom:function(r,s,o,c,f){a(s,o,f*(o-r),f*(c-s))},initNonuniformCatmullRom:function(r,s,o,c,f,u,h){let d=(s-r)/f-(o-r)/(f+u)+(o-s)/u,p=(o-s)/u-(c-s)/(u+h)+(c-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const Eu=new G,Au=new G,zl=new Sf,Gl=new Sf,Vl=new Sf;class K0 extends Pi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new G){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let f,u;this.closed||o>0?f=a[(o-1)%r]:(Au.subVectors(a[0],a[1]).add(a[0]),f=Au);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(Eu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=Eu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(f.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),m<1e-4&&(m=E),v<1e-4&&(v=E),zl.initNonuniformCatmullRom(f.x,h.x,d.x,u.x,m,E,v),Gl.initNonuniformCatmullRom(f.y,h.y,d.y,u.y,m,E,v),Vl.initNonuniformCatmullRom(f.z,h.z,d.z,u.z,m,E,v)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(f.x,h.x,d.x,u.x,this.tension),Gl.initCatmullRom(f.y,h.y,d.y,u.y,this.tension),Vl.initCatmullRom(f.z,h.z,d.z,u.z,this.tension));return i.set(zl.calc(c),Gl.calc(c),Vl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new G().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tu(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+s)*c+(-3*t+3*i-2*r-s)*o+r*n+t}function Q0(n,e){const t=1-n;return t*t*e}function j0(n,e){return 2*(1-n)*n*e}function em(n,e){return n*n*e}function go(n,e,t,i){return Q0(n,e)+j0(n,t)+em(n,i)}function tm(n,e){const t=1-n;return t*t*t*e}function nm(n,e){const t=1-n;return 3*t*t*n*e}function im(n,e){return 3*(1-n)*n*n*e}function am(n,e){return n*n*n*e}function xo(n,e,t,i,a){return tm(n,e)+nm(n,t)+im(n,i)+am(n,a)}class dh extends Pi{constructor(e=new De,t=new De,i=new De,a=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new De){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(xo(e,a.x,r.x,s.x,o.x),xo(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rm extends Pi{constructor(e=new G,t=new G,i=new G,a=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(xo(e,a.x,r.x,s.x,o.x),xo(e,a.y,r.y,s.y,o.y),xo(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hh extends Pi{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends Pi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Pi{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(go(e,a.x,r.x,s.x),go(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sm extends Pi{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(go(e,a.x,r.x,s.x),go(e,a.y,r.y,s.y),go(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,c=a[s===0?s:s-1],f=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(Tu(o,c.x,f.x,u.x,h.x),Tu(o,c.y,f.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new De().fromArray(a))}return this}}var qc=Object.freeze({__proto__:null,ArcCurve:Z0,CatmullRomCurve3:K0,CubicBezierCurve:dh,CubicBezierCurve3:rm,EllipseCurve:_f,LineCurve:hh,LineCurve3:om,QuadraticBezierCurve:ph,QuadraticBezierCurve3:sm,SplineCurve:mh});class lm extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],c=o.getLength(),f=c===0?0:1-s/c;return o.getPointAt(f,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let f=0;f<c.length;f++){const u=c[f];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new qc[a.type]().fromJSON(a))}return this}}class wu extends lm{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hh(this.currentPoint.clone(),new De(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new ph(this.currentPoint.clone(),new De(e,t),new De(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new dh(this.currentPoint.clone(),new De(e,t),new De(i,a),new De(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,c){const f=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+f,t+u,i,a,r,s,o,c),this}absellipse(e,t,i,a,r,s,o,c){const f=new _f(e,t,i,a,r,s,o,c);if(this.curves.length>0){const h=f.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(f);const u=f.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yf extends wu{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new wu().fromJSON(a))}return this}}function cm(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=gh(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,c,f;if(i&&(r=pm(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let u=o,h=c;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<c&&(c=m),p>u&&(u=p),m>h&&(h=m)}f=Math.max(u-o,h-c),f=f!==0?32767/f:0}return To(r,s,t,o,c,f,0),s}function gh(n,e,t,i,a){let r;if(a===Am(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=Ru(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=Ru(s/i|0,n[s],n[s+1],r);return r&&Ur(r,r.next)&&(Ro(r),r=r.next),r}function Wa(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ur(t,t.next)||en(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function To(n,e,t,i,a,r,s){if(!n)return;!s&&r&&Mm(n,i,a,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,f=n.next;if(r?um(n,i,a,r):fm(n)){e.push(c.i,n.i,f.i),Ro(n),n=f.next,o=f.next;continue}if(n=f,n===o){s?s===1?(n=dm(Wa(n),e),To(n,e,t,i,a,r,2)):s===2&&hm(n,e,t,i,a,r):To(Wa(n),e,t,i,a,r,1);break}}}function fm(n){const e=n.prev,t=n,i=n.next;if(en(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,c=t.y,f=i.y,u=Math.min(a,r,s),h=Math.min(o,c,f),d=Math.max(a,r,s),p=Math.max(o,c,f);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&co(a,o,r,c,s,f,m.x,m.y)&&en(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function um(n,e,t,i){const a=n.prev,r=n,s=n.next;if(en(a,r,s)>=0)return!1;const o=a.x,c=r.x,f=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,c,f),m=Math.min(u,h,d),E=Math.max(o,c,f),v=Math.max(u,h,d),g=Yc(p,m,e,t,i),A=Yc(E,v,e,t,i);let P=n.prevZ,y=n.nextZ;for(;P&&P.z>=g&&y&&y.z<=A;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&co(o,u,c,h,f,d,P.x,P.y)&&en(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&co(o,u,c,h,f,d,y.x,y.y)&&en(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=g;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&co(o,u,c,h,f,d,P.x,P.y)&&en(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&co(o,u,c,h,f,d,y.x,y.y)&&en(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dm(n,e){let t=n;do{const i=t.prev,a=t.next.next;!Ur(i,a)&&vh(i,t,t.next,a)&&wo(i,a)&&wo(a,i)&&(e.push(i.i,t.i,a.i),Ro(t),Ro(t.next),t=n=a),t=t.next}while(t!==n);return Wa(t)}function hm(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&ym(s,o)){let c=Mh(s,o);s=Wa(s,s.next),c=Wa(c,c.next),To(s,e,t,i,a,r,0),To(c,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function pm(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,c=r<s-1?e[r+1]*i:n.length,f=gh(n,o,c,i,!1);f===f.next&&(f.steiner=!0),a.push(Sm(f))}a.sort(mm);for(let r=0;r<a.length;r++)t=gm(a[r],t);return t}function mm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function gm(n,e){const t=xm(n,e);if(!t)return e;const i=Mh(t,n);return Wa(i,i.next),Wa(t,t.next)}function xm(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(Ur(n,t))return t;do{if(Ur(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,f=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&xh(a<f?i:r,a,c,f,a<f?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);wo(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&vm(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function vm(n,e){return en(n.prev,n,e.prev)<0&&en(e.next,n,n.next)<0}function Mm(n,e,t,i){let a=n;do a.z===0&&(a.z=Yc(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,_m(a)}function _m(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let f=0;f<t&&(o++,s=s.nextZ,!!s);f++);let c=t;for(;o>0||c>0&&s;)o!==0&&(c===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,c--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function Yc(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Sm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xh(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function co(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&xh(n,e,t,i,a,r,s,o)}function ym(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!bm(n,e)&&(wo(n,e)&&wo(e,n)&&Em(n,e)&&(en(n.prev,n,e.prev)||en(n,e.prev,e))||Ur(n,e)&&en(n.prev,n,n.next)>0&&en(e.prev,e,e.next)>0)}function en(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ur(n,e){return n.x===e.x&&n.y===e.y}function vh(n,e,t,i){const a=xs(en(n,e,t)),r=xs(en(n,e,i)),s=xs(en(t,i,n)),o=xs(en(t,i,e));return!!(a!==r&&s!==o||a===0&&gs(n,t,e)||r===0&&gs(n,i,e)||s===0&&gs(t,n,i)||o===0&&gs(t,e,i))}function gs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xs(n){return n>0?1:n<0?-1:0}function bm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wo(n,e){return en(n.prev,n,n.next)<0?en(n,e,n.next)>=0&&en(n,n.prev,e)>=0:en(n,e,n.prev)<0||en(n,n.next,e)<0}function Em(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mh(n,e){const t=$c(n.i,n.x,n.y),i=$c(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ru(n,e,t,i){const a=$c(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Am(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class Tm{static triangulate(e,t,i=2){return cm(e,t,i)}}class Tr{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return Tr.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];Cu(e),Pu(i,e);let s=e.length;t.forEach(Cu);for(let c=0;c<t.length;c++)a.push(s),s+=t[c].length,Pu(i,t[c]);const o=Tm.triangulate(i,a);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Cu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Pu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ks extends mn{constructor(e=new yf([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];s(f)}this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function s(o){const c=[],f=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:wm;let P,y=!1,S,T,I,_;if(g){P=g.getSpacedPoints(u),y=!0,d=!1;const ue=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,ue),T=new G,I=new G,_=new G}d||(v=0,p=0,m=0,E=0);const w=o.extractPoints(f);let L=w.shape;const U=w.holes;if(!Tr.isClockWise(L)){L=L.reverse();for(let ue=0,Me=U.length;ue<Me;ue++){const be=U[ue];Tr.isClockWise(be)&&(U[ue]=be.reverse())}}function Y(ue){const be=10000000000000001e-36;let Ae=ue[0];for(let Se=1;Se<=ue.length;Se++){const R=Se%ue.length,Q=ue[R],Te=Q.x-Ae.x,Pe=Q.y-Ae.y,F=Te*Te+Pe*Pe,ot=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(Ae.x),Math.abs(Ae.y)),ke=be*ot*ot;if(F<=ke){ue.splice(R,1),Se--;continue}Ae=Q}}Y(L),U.forEach(Y);const z=U.length,J=L;for(let ue=0;ue<z;ue++){const Me=U[ue];L=L.concat(Me)}function ae(ue,Me,be){return Me||Lt("ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(Me,be)}const W=L.length;function ve(ue,Me,be){let Ae,Se,R;const Q=ue.x-Me.x,Te=ue.y-Me.y,Pe=be.x-ue.x,F=be.y-ue.y,ot=Q*Q+Te*Te,ke=Q*F-Te*Pe;if(Math.abs(ke)>Number.EPSILON){const D=Math.sqrt(ot),b=Math.sqrt(Pe*Pe+F*F),$=Me.x-Te/D,Z=Me.y+Q/D,le=be.x-F/b,_e=be.y+Pe/b,ye=((le-$)*F-(_e-Z)*Pe)/(Q*F-Te*Pe);Ae=$+Q*ye-ue.x,Se=Z+Te*ye-ue.y;const ne=Ae*Ae+Se*Se;if(ne<=2)return new De(Ae,Se);R=Math.sqrt(ne/2)}else{let D=!1;Q>Number.EPSILON?Pe>Number.EPSILON&&(D=!0):Q<-Number.EPSILON?Pe<-Number.EPSILON&&(D=!0):Math.sign(Te)===Math.sign(F)&&(D=!0),D?(Ae=-Te,Se=Q,R=Math.sqrt(ot)):(Ae=Q,Se=Te,R=Math.sqrt(ot/2))}return new De(Ae/R,Se/R)}const se=[];for(let ue=0,Me=J.length,be=Me-1,Ae=ue+1;ue<Me;ue++,be++,Ae++)be===Me&&(be=0),Ae===Me&&(Ae=0),se[ue]=ve(J[ue],J[be],J[Ae]);const ie=[];let pe,Qe=se.concat();for(let ue=0,Me=z;ue<Me;ue++){const be=U[ue];pe=[];for(let Ae=0,Se=be.length,R=Se-1,Q=Ae+1;Ae<Se;Ae++,R++,Q++)R===Se&&(R=0),Q===Se&&(Q=0),pe[Ae]=ve(be[Ae],be[R],be[Q]);ie.push(pe),Qe=Qe.concat(pe)}let Ve;if(v===0)Ve=Tr.triangulateShape(J,U);else{const ue=[],Me=[];for(let be=0;be<v;be++){const Ae=be/v,Se=p*Math.cos(Ae*Math.PI/2),R=m*Math.sin(Ae*Math.PI/2)+E;for(let Q=0,Te=J.length;Q<Te;Q++){const Pe=ae(J[Q],se[Q],R);Re(Pe.x,Pe.y,-Se),Ae===0&&ue.push(Pe)}for(let Q=0,Te=z;Q<Te;Q++){const Pe=U[Q];pe=ie[Q];const F=[];for(let ot=0,ke=Pe.length;ot<ke;ot++){const D=ae(Pe[ot],pe[ot],R);Re(D.x,D.y,-Se),Ae===0&&F.push(D)}Ae===0&&Me.push(F)}}Ve=Tr.triangulateShape(ue,Me)}const vt=Ve.length,dt=m+E;for(let ue=0;ue<W;ue++){const Me=d?ae(L[ue],Qe[ue],dt):L[ue];y?(I.copy(S.normals[0]).multiplyScalar(Me.x),T.copy(S.binormals[0]).multiplyScalar(Me.y),_.copy(P[0]).add(I).add(T),Re(_.x,_.y,_.z)):Re(Me.x,Me.y,0)}for(let ue=1;ue<=u;ue++)for(let Me=0;Me<W;Me++){const be=d?ae(L[Me],Qe[Me],dt):L[Me];y?(I.copy(S.normals[ue]).multiplyScalar(be.x),T.copy(S.binormals[ue]).multiplyScalar(be.y),_.copy(P[ue]).add(I).add(T),Re(_.x,_.y,_.z)):Re(be.x,be.y,h/u*ue)}for(let ue=v-1;ue>=0;ue--){const Me=ue/v,be=p*Math.cos(Me*Math.PI/2),Ae=m*Math.sin(Me*Math.PI/2)+E;for(let Se=0,R=J.length;Se<R;Se++){const Q=ae(J[Se],se[Se],Ae);Re(Q.x,Q.y,h+be)}for(let Se=0,R=U.length;Se<R;Se++){const Q=U[Se];pe=ie[Se];for(let Te=0,Pe=Q.length;Te<Pe;Te++){const F=ae(Q[Te],pe[Te],Ae);y?Re(F.x,F.y+P[u-1].y,P[u-1].x+be):Re(F.x,F.y,h+be)}}}mt(),ce();function mt(){const ue=a.length/3;if(d){let Me=0,be=W*Me;for(let Ae=0;Ae<vt;Ae++){const Se=Ve[Ae];st(Se[2]+be,Se[1]+be,Se[0]+be)}Me=u+v*2,be=W*Me;for(let Ae=0;Ae<vt;Ae++){const Se=Ve[Ae];st(Se[0]+be,Se[1]+be,Se[2]+be)}}else{for(let Me=0;Me<vt;Me++){const be=Ve[Me];st(be[2],be[1],be[0])}for(let Me=0;Me<vt;Me++){const be=Ve[Me];st(be[0]+W*u,be[1]+W*u,be[2]+W*u)}}i.addGroup(ue,a.length/3-ue,0)}function ce(){const ue=a.length/3;let Me=0;me(J,Me),Me+=J.length;for(let be=0,Ae=U.length;be<Ae;be++){const Se=U[be];me(Se,Me),Me+=Se.length}i.addGroup(ue,a.length/3-ue,1)}function me(ue,Me){let be=ue.length;for(;--be>=0;){const Ae=be;let Se=be-1;Se<0&&(Se=ue.length-1);for(let R=0,Q=u+v*2;R<Q;R++){const Te=W*R,Pe=W*(R+1),F=Me+Ae+Te,ot=Me+Se+Te,ke=Me+Se+Pe,D=Me+Ae+Pe;We(F,ot,ke,D)}}}function Re(ue,Me,be){c.push(ue),c.push(Me),c.push(be)}function st(ue,Me,be){Ce(ue),Ce(Me),Ce(be);const Ae=a.length/3,Se=A.generateTopUV(i,a,Ae-3,Ae-2,Ae-1);ft(Se[0]),ft(Se[1]),ft(Se[2])}function We(ue,Me,be,Ae){Ce(ue),Ce(Me),Ce(Ae),Ce(Me),Ce(be),Ce(Ae);const Se=a.length/3,R=A.generateSideWallUV(i,a,Se-6,Se-3,Se-2,Se-1);ft(R[0]),ft(R[1]),ft(R[3]),ft(R[1]),ft(R[2]),ft(R[3])}function Ce(ue){a.push(c[ue*3+0]),a.push(c[ue*3+1]),a.push(c[ue*3+2])}function ft(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Rm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new qc[a.type]().fromJSON(a)),new ks(i,e.options)}}const wm={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],c=e[i*3+1],f=e[a*3],u=e[a*3+1];return[new De(r,s),new De(o,c),new De(f,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],c=e[t*3+2],f=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],E=e[r*3],v=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(s-f)?[new De(s,1-c),new De(f,1-h),new De(d,1-m),new De(E,1-g)]:[new De(o,1-c),new De(u,1-h),new De(p,1-m),new De(v,1-g)]}};function Rm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tl extends el{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tl(e.radius,e.detail)}}class Zi extends mn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),c=Math.floor(a),f=o+1,u=c+1,h=e/o,d=t/c,p=[],m=[],E=[],v=[];for(let g=0;g<u;g++){const A=g*d-s;for(let P=0;P<f;P++){const y=P*h-r;m.push(y,-A,0),E.push(0,0,1),v.push(P/o),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let A=0;A<o;A++){const P=A+f*g,y=A+f*(g+1),S=A+1+f*(g+1),T=A+1+f*g;p.push(P,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class kn extends mn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+o,Math.PI);let f=0;const u=[],h=new G,d=new G,p=[],m=[],E=[],v=[];for(let g=0;g<=i;g++){const A=[],P=g/i,y=s+P*o,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S);let I=0;g===0&&s===0?I=.5/t:g===i&&c===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){const w=_/t,L=a+w*r;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),v.push(w+I,1-P),A.push(f++)}u.push(A)}for(let g=0;g<i;g++)for(let A=0;A<t;A++){const P=u[g][A+1],y=u[g][A],S=u[g+1][A],T=u[g+1][A+1];(g!==0||s>0)&&p.push(P,y,T),(g!==i-1||c<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends mn{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const c=[],f=[],u=[],h=[],d=new G,p=new G,m=new G;for(let E=0;E<=i;E++){const v=s+E/i*o;for(let g=0;g<=a;g++){const A=g/a*r;p.x=(e+t*Math.cos(v))*Math.cos(A),p.y=(e+t*Math.cos(v))*Math.sin(A),p.z=t*Math.sin(v),f.push(p.x,p.y,p.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(g/a),h.push(E/i)}}for(let E=1;E<=i;E++)for(let v=1;v<=a;v++){const g=(a+1)*E+v-1,A=(a+1)*(E-1)+v-1,P=(a+1)*(E-1)+v,y=(a+1)*E+v;c.push(g,A,y),c.push(A,P,y)}this.setIndex(c),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(Iu(a))a.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Iu(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function wn(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const a in i)e[a]=i[a]}return e}function Iu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _h(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Pm={clone:Or,merge:wn};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(a.value);break;case"v2":this.uniforms[i].value=new De().fromArray(a.value);break;case"v3":this.uniforms[i].value=new G().fromArray(a.value);break;case"v4":this.uniforms[i].value=new jt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Dm extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mi extends Ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nm extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Lu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Lu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Lu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Om{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return f.push(u,h),this},this.removeHandler=function(u){const h=f.indexOf(u);return h!==-1&&f.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=f.length;h<d;h+=2){const p=f[h],m=f[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fm=new Om;class bf{constructor(e){this.manager=e!==void 0?e:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bf.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr=new WeakMap;class Bm extends bf{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=kl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=pr.get(s);h===void 0&&(h=[],pr.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=bo("img");function c(){u(),t&&t(this);const h=pr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}pr.delete(this),r.manager.itemEnd(e)}function f(h){u(),a&&a(h),kl.remove(`image:${e}`);const d=pr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}pr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",f,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zm extends bf{constructor(e){super(e)}load(e,t,i,a){const r=new hn,s=new Bm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class Sh extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gm extends Sh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hl=new Yt,Du=new G,Nu=new G;class Vm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,c=a?a.x/r.x:0,f=a?a.y/r.y:0;e.coordinateSystem===yo||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+f,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+f,0,0,.5,.5,0,0,0,1),t.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vs=new G,Ms=new di,Mi=new G;class yh extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vs,Ms,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ms,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vs,Ms,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ms,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const aa=new G,Uu=new De,Ou=new De;class $n extends yh{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(aa.x,aa.y).multiplyScalar(-e/aa.z),aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(aa.x,aa.y).multiplyScalar(-e/aa.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Ou),t.subVectors(Ou,Uu)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,f=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*i/f,a*=s.width/c,i*=s.height/f}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nl extends yh{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,s=r+f*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class km extends Vm{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hm extends Sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new km}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const mr=-90,gr=1;class Wm extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(mr,gr,e,t);a.layers=this.layers,this.add(a);const r=new $n(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new $n(mr,gr,e,t);s.layers=this.layers,this.add(s);const o=new $n(mr,gr,e,t);o.layers=this.layers,this.add(o);const c=new $n(mr,gr,e,t);c.layers=this.layers,this.add(c);const f=new $n(mr,gr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,c]=t;for(const f of t)this.remove(f);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,f,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Xm extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kf=class kf{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};kf.prototype.isMatrix2=!0;let Fu=kf;function Bu(n,e,t,i){const a=qm(i);switch(t){case $d:return n*e;case Zd:return n*e/a.components*a.byteLength;case ff:return n*e/a.components*a.byteLength;case Ha:return n*e*2/a.components*a.byteLength;case uf:return n*e*2/a.components*a.byteLength;case Jd:return n*e*3/a.components*a.byteLength;case Kn:return n*e*4/a.components*a.byteLength;case df:return n*e*4/a.components*a.byteLength;case Rs:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:case xc:return Math.max(n,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(e,8)/2;case vc:case Mc:case Sc:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _c:case Os:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bc:case zc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fs:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(n){switch(n){case Vn:case Wd:return{byteLength:1,components:1};case _o:case Xd:case ei:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case Ci:case sf:case Ai:return{byteLength:4,components:1};case qd:case Yd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);function bh(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ym(n){const e=new WeakMap;function t(o,c){const f=o.array,u=o.usage,h=f.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,f,u),o.onUploadCallback();let p;if(f instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)p=n.HALF_FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=n.SHORT;else if(f instanceof Uint32Array)p=n.UNSIGNED_INT;else if(f instanceof Int32Array)p=n.INT;else if(f instanceof Int8Array)p=n.BYTE;else if(f instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,f){const u=c.array,h=c.updateRanges;if(n.bindBuffer(f,o),h.length===0)n.bufferSubData(f,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],E=h[p];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const E=h[p];n.bufferSubData(f,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=e.get(o);if(f===void 0)e.set(o,t(o,c));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,c),f.version=o.version}}return{get:a,remove:r,update:s}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
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
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
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
#endif`,qg=`uniform sampler2D dfgLUT;
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
}`,Yg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dx=`float getShadowMask() {
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
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
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
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,n1=`#define DISTANCE
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
}`,i1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,d1=`#define MATCAP
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
}`,h1=`#define MATCAP
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
}`,p1=`#define NORMAL
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
}`,m1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,x1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,S1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:$m,alphahash_pars_fragment:Jm,alphamap_fragment:Zm,alphamap_pars_fragment:Km,alphatest_fragment:Qm,alphatest_pars_fragment:jm,aomap_fragment:eg,aomap_pars_fragment:tg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:ag,beginnormal_vertex:rg,bsdfs:og,iridescence_fragment:sg,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:dg,color_fragment:hg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:gg,common:xg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:_g,displacementmap_vertex:Sg,emissivemap_fragment:yg,emissivemap_pars_fragment:bg,colorspace_fragment:Eg,colorspace_pars_fragment:Ag,envmap_fragment:Tg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Rg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Gg,envmap_vertex:Pg,fog_vertex:Ig,fog_pars_vertex:Lg,fog_fragment:Dg,fog_pars_fragment:Ng,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Og,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Vg,lights_toon_pars_fragment:kg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Xg,lights_physical_pars_fragment:qg,lights_fragment_begin:Yg,lights_fragment_maps:$g,lights_fragment_end:Jg,lightprobes_pars_fragment:Zg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:ax,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ox,morphinstance_vertex:sx,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:fx,morphtarget_vertex:ux,normal_fragment_begin:dx,normal_fragment_maps:hx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:Sx,opaque_fragment:yx,packing:bx,premultiplied_alpha_fragment:Ex,project_vertex:Ax,dithering_fragment:Tx,dithering_pars_fragment:wx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Ix,shadowmap_vertex:Lx,shadowmask_pars_fragment:Dx,skinbase_vertex:Nx,skinning_pars_vertex:Ux,skinning_vertex:Ox,skinnormal_vertex:Fx,specularmap_fragment:Bx,specularmap_pars_fragment:zx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Vx,transmission_fragment:kx,transmission_pars_fragment:Hx,uv_pars_fragment:Wx,uv_pars_vertex:Xx,uv_vertex:qx,worldpos_vertex:Yx,background_vert:$x,background_frag:Jx,backgroundCube_vert:Zx,backgroundCube_frag:Kx,cube_vert:Qx,cube_frag:jx,depth_vert:e1,depth_frag:t1,distance_vert:n1,distance_frag:i1,equirect_vert:a1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:s1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:f1,meshlambert_frag:u1,meshmatcap_vert:d1,meshmatcap_frag:h1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:x1,meshphysical_vert:v1,meshphysical_frag:M1,meshtoon_vert:_1,meshtoon_frag:S1,points_vert:y1,points_frag:b1,shadow_vert:E1,shadow_frag:A1,sprite_vert:T1,sprite_frag:w1},Ye={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},yi={basic:{uniforms:wn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:wn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:wn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:wn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:wn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new gt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:wn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:wn([Ye.points,Ye.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:wn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:wn([Ye.common,Ye.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:wn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:wn([Ye.sprite,Ye.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:wn([Ye.common,Ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:wn([Ye.lights,Ye.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};yi.physical={uniforms:wn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const _s={r:0,b:0,g:0},R1=new Yt,Eh=new _t;Eh.set(-1,0,0,0,1,0,0,0,1);function C1(n,e,t,i,a,r){const s=new gt(0);let o=a===!0?0:1,c,f,u=null,h=0,d=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function m(A){let P=!1;const y=p(A);y===null?v(s,o):y&&y.isColor&&(v(y,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(A,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===Qs)?(f===void 0&&(f=new At(new ya(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Or(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(S,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Eh),f.material.toneMapped=It.getTransfer(y.colorSpace)!==Gt,(u!==y||h!==y.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new At(new Zi(2,2),new pi({name:"BackgroundMaterial",uniforms:Or(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=It.getTransfer(y.colorSpace)!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function v(A,P){A.getRGB(_s,_h(n)),t.buffers.color.setClear(_s.r,_s.g,_s.b,P,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,P=1){s.set(A),o=P,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,v(s,o)},render:m,addToRenderList:E,dispose:g}}function P1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(U,V,Y,z,J){let ae=!1;const W=h(U,z,Y,V);r!==W&&(r=W,f(r.object)),ae=p(U,z,Y,J),ae&&m(U,z,Y,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ae||s)&&(s=!1,y(U,V,Y,z),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function f(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,V,Y,z){const J=z.wireframe===!0;let ae=i[V.id];ae===void 0&&(ae={},i[V.id]=ae);const W=U.isInstancedMesh===!0?U.id:0;let ve=ae[W];ve===void 0&&(ve={},ae[W]=ve);let se=ve[Y.id];se===void 0&&(se={},ve[Y.id]=se);let ie=se[J];return ie===void 0&&(ie=d(c()),se[J]=ie),ie}function d(U){const V=[],Y=[],z=[];for(let J=0;J<t;J++)V[J]=0,Y[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:z,object:U,attributes:{},index:null}}function p(U,V,Y,z){const J=r.attributes,ae=V.attributes;let W=0;const ve=Y.getAttributes();for(const se in ve)if(ve[se].location>=0){const pe=J[se];let Qe=ae[se];if(Qe===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Qe=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Qe=U.instanceColor)),pe===void 0||pe.attribute!==Qe||Qe&&pe.data!==Qe.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(U,V,Y,z){const J={},ae=V.attributes;let W=0;const ve=Y.getAttributes();for(const se in ve)if(ve[se].location>=0){let pe=ae[se];pe===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(pe=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(pe=U.instanceColor));const Qe={};Qe.attribute=pe,pe&&pe.data&&(Qe.data=pe.data),J[se]=Qe,W++}r.attributes=J,r.attributesNum=W,r.index=z}function E(){const U=r.newAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]=0}function v(U){g(U,0)}function g(U,V){const Y=r.newAttributes,z=r.enabledAttributes,J=r.attributeDivisors;Y[U]=1,z[U]===0&&(n.enableVertexAttribArray(U),z[U]=1),J[U]!==V&&(n.vertexAttribDivisor(U,V),J[U]=V)}function A(){const U=r.newAttributes,V=r.enabledAttributes;for(let Y=0,z=V.length;Y<z;Y++)V[Y]!==U[Y]&&(n.disableVertexAttribArray(Y),V[Y]=0)}function P(U,V,Y,z,J,ae,W){W===!0?n.vertexAttribIPointer(U,V,Y,J,ae):n.vertexAttribPointer(U,V,Y,z,J,ae)}function y(U,V,Y,z){E();const J=z.attributes,ae=Y.getAttributes(),W=V.defaultAttributeValues;for(const ve in ae){const se=ae[ve];if(se.location>=0){let ie=J[ve];if(ie===void 0&&(ve==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ve==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){const pe=ie.normalized,Qe=ie.itemSize,Ve=e.get(ie);if(Ve===void 0)continue;const vt=Ve.buffer,dt=Ve.type,mt=Ve.bytesPerElement,ce=dt===n.INT||dt===n.UNSIGNED_INT||ie.gpuType===sf;if(ie.isInterleavedBufferAttribute){const me=ie.data,Re=me.stride,st=ie.offset;if(me.isInstancedInterleavedBuffer){for(let We=0;We<se.locationSize;We++)g(se.location+We,me.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let We=0;We<se.locationSize;We++)v(se.location+We);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let We=0;We<se.locationSize;We++)P(se.location+We,Qe/se.locationSize,dt,pe,Re*mt,(st+Qe/se.locationSize*We)*mt,ce)}else{if(ie.isInstancedBufferAttribute){for(let me=0;me<se.locationSize;me++)g(se.location+me,ie.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let me=0;me<se.locationSize;me++)v(se.location+me);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let me=0;me<se.locationSize;me++)P(se.location+me,Qe/se.locationSize,dt,pe,Qe*mt,Qe/se.locationSize*me*mt,ce)}}else if(W!==void 0){const pe=W[ve];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(se.location,pe);break;case 3:n.vertexAttrib3fv(se.location,pe);break;case 4:n.vertexAttrib4fv(se.location,pe);break;default:n.vertexAttrib1fv(se.location,pe)}}}}A()}function S(){w();for(const U in i){const V=i[U];for(const Y in V){const z=V[Y];for(const J in z){const ae=z[J];for(const W in ae)u(ae[W].object),delete ae[W];delete z[J]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const Y in V){const z=V[Y];for(const J in z){const ae=z[J];for(const W in ae)u(ae[W].object),delete ae[W];delete z[J]}}delete i[U.id]}function I(U){for(const V in i){const Y=i[V];for(const z in Y){const J=Y[z];if(J[U.id]===void 0)continue;const ae=J[U.id];for(const W in ae)u(ae[W].object),delete ae[W];delete J[U.id]}}}function _(U){for(const V in i){const Y=i[V],z=U.isInstancedMesh===!0?U.id:0,J=Y[z];if(J!==void 0){for(const ae in J){const W=J[ae];for(const ve in W)u(W[ve].object),delete W[ve];delete J[ae]}delete Y[z],Object.keys(Y).length===0&&delete i[V]}}}function w(){L(),s=!0,r!==a&&(r=a,f(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:A}}function I1(n,e,t){let i;function a(c){i=c}function r(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function s(c,f,u){u!==0&&(n.drawArraysInstanced(i,c,f,u),t.update(f,i,u))}function o(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let d=0;for(let p=0;p<u;p++)d+=f[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function L1(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==Kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const _=I===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Vn&&I!==Ai&&!_&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const u=c(f);u!==f&&(pt("WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:T}}function D1(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new da,o=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,g=n.get(h);if(!a||m===null||m.length===0||r&&!v)r?u(null):f();else{const A=r?0:i,P=A*4;let y=g.clippingState||null;c.value=y,y=u(m,d,P,p);for(let S=0;S!==P;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=c.value,m!==!0||v===null){const g=p+E*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,y=p;P!==E;++P,y+=4)s.copy(h[P]).applyMatrix4(A,o),s.normal.toArray(v,y),v[y+3]=s.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const wr=4,N1=6,U1=20,O1=256,to=new nl,zu=new gt;let Wl=null,Xl=0,ql=0,Yl=!1;const F1=new G,La=new G;class Gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=F1}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ka||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ei,format:Kn,colorSpace:Bs,depthBuffer:!1},a=Vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B1(r)),this._blurMaterial=G1(r,e,t),this._ggxMaterial=z1(r,e,t)}return a}_compileMaterial(e){const t=new At(new mn,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,i,a,r){const c=new $n(90,1,t,i),f=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(zu),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new ya,new Ji({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let g=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,g=!0):(v.color.copy(zu),g=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(c.up.set(0,f[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[P],r.y,r.z)):y===1?(c.up.set(0,0,f[P]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[P],r.z)):(c.up.set(0,f[P],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[P]));const S=this._cubeSize;xr(a,y*S,P>2?S:0,S,S),h.setRenderTarget(a),g&&h.render(E,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===ka||e.mapping===Dr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,to)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const c=s.uniforms,f=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(f*f-u*u),d=f*1.25,p=h*d,{_lodMax:m}=this,E=this._sizeLods[i],v=3*E*(i>m-wr?i-m+wr:0),g=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,xr(r,v,g,3*E,2*E),a.setRenderTarget(r),a.render(o,to),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,xr(e,v,g,3*E,2*E),a.setRenderTarget(e),a.render(o,to)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[a];c.material=o;const f=o.uniforms;f.envMap.value=e.texture,f.sigma.value=r,f.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-wr?a-this._lodMax+wr:0),d=4*(this._cubeSize-u);xr(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(c,to)}}function B1(n){const e=[],t=[];let i=n;const a=n-wr+1+N1;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),c=-o,f=1+o,u=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,d=6,p=3,m=new Float32Array(p*d*h),E=new Float32Array(p*d*h);for(let g=0;g<h;g++){const A=g%3*2/3-1,P=g>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(y,p*d*g);for(let S=0;S<d;S++){const T=u[S*2]*2-1,I=u[S*2+1]*2-1;g===0?La.set(1,I,T):g===1?La.set(-T,1,-I):g===2?La.set(-T,I,1):g===3?La.set(-1,I,-T):g===4?La.set(-T,-1,I):La.set(T,I,-1),La.toArray(E,(g*d+S)*p)}}const v=new mn;v.setAttribute("position",new hi(m,p)),v.setAttribute("outputDirection",new hi(E,p)),t.push(new At(v,null)),i>wr&&i--}return{lodMeshes:t,sizeLods:e}}function Vu(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function z1(n,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function G1(n,e,t){return new pi({name:"SphericalGaussianBlur",defines:{SAMPLES:U1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ku(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Hu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ah extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new fh(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ya(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Xi});r.uniforms.tEquirect.value=t;const s=new At(a,r),o=t.minFilter;return t.minFilter===Fa&&(t.minFilter=dn),new Wm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function V1(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===pl||p===ml)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const E=new Ah(m.height);return E.fromEquirectangularTexture(n,d),e.set(d,E),d.addEventListener("dispose",f),o(E.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===pl||p===ml,E=p===ka||p===Dr;if(m||E){let v=t.get(d);const g=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Gu(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const A=d.image;return m&&A&&A.height>0||E&&A&&c(A)?(i===null&&(i=new Gu(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,p){return p===pl?d.mapping=ka:p===ml&&(d.mapping=Dr),d}function c(d){let p=0;const m=6;for(let E=0;E<m;E++)d[E]!==void 0&&p++;return p===m}function f(d){const p=d.target;p.removeEventListener("dispose",f);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function k1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Cr("WebGLRenderer: "+i+" extension not supported."),a}}}function H1(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function f(h){const d=[],p=h.index,m=h.attributes.position;let E=0;if(m===void 0)return;if(p!==null){const A=p.array;E=p.version;for(let P=0,y=A.length;P<y;P+=3){const S=A[P+0],T=A[P+1],I=A[P+2];d.push(S,T,T,I,I,S)}}else{const A=m.array;E=m.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const S=P+0,T=P+1,I=P+2;d.push(S,T,T,I,I,S)}}const v=new(m.count>=65535?ah:ih)(d,1);v.version=E;const g=r.get(h);g&&e.remove(g),r.set(h,v)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&f(h)}else f(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function W1(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function f(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let E=0;for(let v=0;v<p;v++)E+=d[v];t.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=u}function X1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function q1(n,e,t){const i=new WeakMap,a=new jt;function r(s,o,c){const f=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),E===!0&&(y=2),v===!0&&(y=3);let S=o.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*T*4*h),_=new jd(I,S,T,h);_.type=Ai,_.needsUpdate=!0;const w=y*4;for(let U=0;U<h;U++){const V=g[U],Y=A[U],z=P[U],J=S*T*4*U;for(let ae=0;ae<V.count;ae++){const W=ae*w;m===!0&&(a.fromBufferAttribute(V,ae),I[J+W+0]=a.x,I[J+W+1]=a.y,I[J+W+2]=a.z,I[J+W+3]=0),E===!0&&(a.fromBufferAttribute(Y,ae),I[J+W+4]=a.x,I[J+W+5]=a.y,I[J+W+6]=a.z,I[J+W+7]=0),v===!0&&(a.fromBufferAttribute(z,ae),I[J+W+8]=a.x,I[J+W+9]=a.y,I[J+W+10]=a.z,I[J+W+11]=z.itemSize===4?a.w:1)}}d={count:h,texture:_,size:new De(S,T)},i.set(o,d),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<f.length;v++)m+=f[v];const E=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",f)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Y1(n,e,t,i,a){let r=new WeakMap;function s(f){const u=a.render.frame,h=f.geometry,d=e.get(f,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==u&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),r.set(f,u))),f.isSkinnedMesh){const p=f.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function c(f){const u=f.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const $1={[Od]:"LINEAR_TONE_MAPPING",[Fd]:"REINHARD_TONE_MAPPING",[Bd]:"CINEON_TONE_MAPPING",[zd]:"ACES_FILMIC_TONE_MAPPING",[Vd]:"AGX_TONE_MAPPING",[kd]:"NEUTRAL_TONE_MAPPING",[Gd]:"CUSTOM_TONE_MAPPING"};function J1(n,e,t,i,a,r){const s=new Qn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const f=new mn;f.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const u=new Dm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new At(f,u),d=new nl(-1,1,1,-1,0,1);let p=null,m=null,E=!1,v,g=null,A=[],P=!1;this.setSize=function(y,S){s.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let T=0;T<A.length;T++){const I=A[T];I.setSize&&I.setSize(y,S)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const S=s.width,T=s.height;A.length>0&&o===null&&(o=new Qn(S,T,{type:ei,depthBuffer:!1,stencilBuffer:!1}),c=new Qn(S,T,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<A.length;I++){const _=A[I];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(E||y.toneMapping===wi&&A.length===0)return!1;if(g=S,S!==null){const T=S.width,I=S.height;(s.width!==T||s.height!==I)&&this.setSize(T,I)}return P===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=v,E=!0;let T=s,I=o;for(let _=0;_<A.length;_++){const w=A[_];w.enabled!==!1&&(w.render(y,I,T,S),w.needsSwap!==!1&&(T=I,I=I===o?c:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,u.defines={},It.getTransfer(p)===Gt&&(u.defines.SRGB_TRANSFER="");const _=$1[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(h,d),g=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),f.dispose(),u.dispose()}}const Th=new hn,Jc=new Nr(1,1),wh=new jd,Rh=new R0,Ch=new fh,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),$u=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=Wu[a];if(r===void 0&&(r=new Float32Array(a),Wu[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(on(t,i))return;$u.set(i),n.uniformMatrix2fv(this.addr,!1,$u),sn(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(on(t,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),sn(t,i)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(on(t,i))return;qu.set(i),n.uniformMatrix4fv(this.addr,!1,qu),sn(t,i)}}function iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function uv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?pf:hf,r=Jc):r=Th,t.setTexture2D(e||r,a)}function dv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Rh,a)}function hv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ch,a)}function pv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||wh,a)}function mv(n){switch(n){case 5126:return Z1;case 35664:return K1;case 35665:return Q1;case 35666:return j1;case 35674:return ev;case 35675:return tv;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return av;case 35668:case 35672:return rv;case 35669:case 35673:return ov;case 5125:return sv;case 36294:return lv;case 36295:return cv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return pv}}function gv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function vv(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function Mv(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sv(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yv(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bv(n,e){n.uniform1iv(this.addr,e)}function Ev(n,e){n.uniform2iv(this.addr,e)}function Av(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function wv(n,e){n.uniform1uiv(this.addr,e)}function Rv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Pv(n,e){n.uniform4uiv(this.addr,e)}function Iv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Jc:s=Th;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function Lv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Rh,r[s])}function Dv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ch,r[s])}function Nv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);on(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||wh,r[s])}function Uv(n){switch(n){case 5126:return gv;case 35664:return xv;case 35665:return vv;case 35666:return Mv;case 35674:return _v;case 35675:return Sv;case 35676:return yv;case 5124:case 35670:return bv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Rv;case 36295:return Cv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Ov{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}}class Bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Ju(n,e){n.seq.push(e),n.map[e.id]=e}function zv(n,e,t){const i=n.name,a=i.length;for($l.lastIndex=0;;){const r=$l.exec(i),s=$l.lastIndex;let o=r[1];const c=r[2]==="]",f=r[3];if(c&&(o=o|0),f===void 0||f==="["&&s+2===a){Ju(t,f===void 0?new Ov(o,n,e):new Fv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Bv(o),Ju(t,h)),t=h}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);zv(o,c,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function Zu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Gv=37297;let Vv=0;function kv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Ku=new _t;function Hv(n){It._getMatrix(Ku,It.workingColorSpace,n);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kv(n.getShaderSource(e),o)}else return r}function Wv(n,e){const t=Hv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Xv={[Od]:"Linear",[Fd]:"Reinhard",[Bd]:"Cineon",[zd]:"ACESFilmic",[Vd]:"AgX",[kd]:"Neutral",[Gd]:"Custom"};function qv(n,e){const t=Xv[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new G;function Yv(){It.getLuminanceCoefficients(Ss);const n=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $v(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Jv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function fo(n){return n!==""}function ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(Kv,jv)}const Qv=new Map;function jv(n,e){let t=Tt[e];if(t===void 0){const i=Qv.get(e);if(i!==void 0)t=Tt[i],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zc(t)}const eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(n){return n.replace(eM,tM)}function tM(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function nd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const nM={[uo]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function iM(n){return nM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aM={[ka]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function rM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":aM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const oM={[Dr]:"ENVMAP_MODE_REFRACTION"};function sM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lM={[Ud]:"ENVMAP_BLENDING_MULTIPLY",[Wp]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};function cM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":lM[n.combine]||"ENVMAP_BLENDING_NONE"}function fM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uM(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=iM(t),f=rM(t),u=sM(t),h=cM(t),d=fM(t),p=$v(t),m=Jv(r),E=a.createProgram();let v,g,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fo).join(`
`),g.length>0&&(g+=`
`)):(v=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),g=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==wi?qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),s=Zc(s),s=ju(s,t),s=ed(s,t),o=Zc(o),o=ju(o,t),o=ed(o,t),s=td(s),o=td(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=A+v+s,y=A+g+o,S=Zu(a,a.VERTEX_SHADER,P),T=Zu(a,a.FRAGMENT_SHADER,y);a.attachShader(E,S),a.attachShader(E,T),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(U){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(E)||"",Y=a.getShaderInfoLog(S)||"",z=a.getShaderInfoLog(T)||"",J=V.trim(),ae=Y.trim(),W=z.trim();let ve=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ve=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,S,T);else{const ie=Qu(a,S,"vertex"),pe=Qu(a,T,"fragment");Lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+ie+`
`+pe)}else J!==""?pt("WebGLProgram: Program Info Log:",J):(ae===""||W==="")&&(se=!1);se&&(U.diagnostics={runnable:ve,programLog:J,vertexShader:{log:ae,prefix:v},fragmentShader:{log:W,prefix:g}})}a.deleteShader(S),a.deleteShader(T),_=new Ls(a,E),w=Zv(a,E)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(E,Gv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=T,this}let dM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pM(e),t.set(e,i)),i}}class pM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function mM(n){return n===Ha||n===Os||n===Fs}function gM(n,e,t,i,a,r){const s=new eh,o=new hM,c=new Set,f=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function E(_,w,L,U,V,Y){const z=U.fog,J=V.geometry,ae=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ve=e.get(_.envMap||ae,W),se=ve&&ve.mapping===Qs?ve.image.height:null,ie=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&pt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Qe=pe!==void 0?pe.length:0;let Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let vt,dt,mt,ce;if(ie){const Ut=yi[ie];vt=Ut.vertexShader,dt=Ut.fragmentShader}else{vt=_.vertexShader,dt=_.fragmentShader;const Ut=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Ut,bt),mt=Ut.id,ce=bt.id}const me=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),st=V.isInstancedMesh===!0,We=V.isBatchedMesh===!0,Ce=!!_.map,ft=!!_.matcap,ue=!!ve,Me=!!_.aoMap,be=!!_.lightMap,Ae=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,R=!!_.displacementMap,Q=!!_.emissiveMap,Te=!!_.metalnessMap,Pe=!!_.roughnessMap,F=_.anisotropy>0,ot=_.clearcoat>0,ke=_.dispersion>0,D=_.retroreflectivity>0,b=_.iridescence>0,$=_.sheen>0,Z=_.transmission>0,le=F&&!!_.anisotropyMap,_e=ot&&!!_.clearcoatMap,ye=ot&&!!_.clearcoatNormalMap,ne=ot&&!!_.clearcoatRoughnessMap,ge=b&&!!_.iridescenceMap,ze=b&&!!_.iridescenceThicknessMap,Ze=$&&!!_.sheenColorMap,Ie=$&&!!_.sheenRoughnessMap,Ue=!!_.specularMap,He=!!_.specularColorMap,nt=!!_.specularIntensityMap,Be=Z&&!!_.transmissionMap,X=Z&&!!_.thicknessMap,Oe=!!_.gradientMap,xe=!!_.alphaMap,l=_.alphaTest>0,Ne=!!_.alphaHash,de=!!_.extensions;let ut=wi;_.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Je={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:dt,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:We,batchingColor:We&&V._colorsTexture!==null,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ce,matcap:ft,envMap:ue,envMapMode:ue&&ve.mapping,envMapCubeUVHeight:se,aoMap:Me,lightMap:be,bumpMap:Ae,normalMap:Se,displacementMap:R,emissiveMap:Q,normalMapObjectSpace:Se&&_.normalMapType===$p,normalMapTangentSpace:Se&&_.normalMapType===Wc,packedNormalMap:Se&&_.normalMapType===Wc&&mM(_.normalMap.format),metalnessMap:Te,roughnessMap:Pe,anisotropy:F,anisotropyMap:le,clearcoat:ot,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:ne,dispersion:ke,retroreflection:D,iridescence:b,iridescenceMap:ge,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Ze,sheenRoughnessMap:Ie,specularMap:Ue,specularColorMap:He,specularIntensityMap:nt,transmission:Z,transmissionMap:Be,thicknessMap:X,gradientMap:Oe,opaque:_.transparent===!1&&_.blending===ho&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:l,alphaHash:Ne,combine:_.combine,mapUv:Ce&&m(_.map.channel),aoMapUv:Me&&m(_.aoMap.channel),lightMapUv:be&&m(_.lightMap.channel),bumpMapUv:Ae&&m(_.bumpMap.channel),normalMapUv:Se&&m(_.normalMap.channel),displacementMapUv:R&&m(_.displacementMap.channel),emissiveMapUv:Q&&m(_.emissiveMap.channel),metalnessMapUv:Te&&m(_.metalnessMap.channel),roughnessMapUv:Pe&&m(_.roughnessMap.channel),anisotropyMapUv:le&&m(_.anisotropyMap.channel),clearcoatMapUv:_e&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(_.sheenRoughnessMap.channel),specularMapUv:Ue&&m(_.specularMap.channel),specularColorMapUv:He&&m(_.specularColorMap.channel),specularIntensityMapUv:nt&&m(_.specularIntensityMap.channel),transmissionMapUv:Be&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:xe&&m(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Se||F),vertexNormals:!!J.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(Ce||xe),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||J.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:Ve,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ce&&_.map.isVideoTexture===!0&&It.getTransfer(_.map.colorSpace)===Gt,decodeVideoTextureEmissive:Q&&_.emissiveMap.isVideoTexture===!0&&It.getTransfer(_.emissiveMap.colorSpace)===Gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jn,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(w,_),A(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function A(_,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function P(_){const w=p[_.type];let L;if(w){const U=yi[w];L=Pm.clone(U.uniforms)}else L=_.uniforms;return L}function y(_,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new uM(n,w,_,a),f.push(L),u.set(w,L)),L}function S(_){if(--_.usedTimes===0){const w=f.indexOf(_);f[w]=f[f.length-1],f.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:f,dispose:I}}function xM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,c){n.get(s)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ad(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,E,v,g){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:E,renderOrder:d.renderOrder,z:v,group:g},n[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=m,A.materialVariant=s(d),A.groupOrder=E,A.renderOrder=d.renderOrder,A.z=v,A.group=g),e++,A}function c(d,p,m,E,v,g,A){A.reversedDepth===!0&&(v=-v);const P=o(d,p,m,E,v,g);m.transmission>0?i.push(P):m.transparent===!0?a.push(P):t.push(P)}function f(d,p,m,E,v,g){const A=o(d,p,m,E,v,g);m.transmission>0?i.unshift(A):m.transparent===!0?a.unshift(A):t.unshift(A)}function u(d,p){t.length>1&&t.sort(d||vM),i.length>1&&i.sort(p||id),a.length>1&&a.sort(p||id)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:c,unshift:f,finish:h,sort:u}}function MM(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new ad,n.set(i,[s])):a>=r.length?(s=new ad,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function _M(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new gt};break;case"SpotLight":t={position:new G,direction:new G,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yM=0;function bM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function EM(n){const e=new _M,t=SM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new G);const a=new G,r=new Yt,s=new Yt;function o(f){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,E=0,v=0,g=0,A=0,P=0,y=0,S=0,T=0,I=0,_=0,w=0,L=0;f.sort(bM);for(let V=0,Y=f.length;V<Y;V++){const z=f[V],J=z.color,ae=z.intensity,W=z.distance;let ve=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ha?ve=z.shadow.map.texture:ve=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=J.r*ae,h+=J.g*ae,d+=J.b*ae;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],ae);L++}else if(z.isSunLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ie=z.shadow,pe=t.get(z);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[m]=pe,i.sunShadowMap[m]=ve;const Qe=ie.getViewportCount();for(let Ve=0;Ve<Qe;Ve++)i.sunShadowMatrix[E+Ve]=ie.getMatrix(Ve),i.sunShadowCascade[E+Ve]=ie._cascadeData[Ve];E+=Qe,m++}i.sun[p]=se,p++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ie=z.shadow,pe=t.get(z);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,i.directionalShadow[v]=pe,i.directionalShadowMap[v]=ve,i.directionalShadowMatrix[v]=z.shadow.matrix,S++}i.directional[v]=se,v++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(J).multiplyScalar(ae),se.distance=W,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[A]=se;const ie=z.shadow;if(z.map&&(i.spotLightMap[_]=z.map,_++,ie.updateMatrices(z),z.castShadow&&w++),i.spotLightMatrix[A]=ie.matrix,z.castShadow){const pe=t.get(z);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,i.spotShadow[A]=pe,i.spotShadowMap[A]=ve,I++}A++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(J).multiplyScalar(ae),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[P]=se,P++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const ie=z.shadow,pe=t.get(z);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,pe.shadowCameraNear=ie.camera.near,pe.shadowCameraFar=ie.camera.far,i.pointShadow[g]=pe,i.pointShadowMap[g]=ve,i.pointShadowMatrix[g]=z.shadow.matrix,T++}i.point[g]=se,g++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(ae),se.groundColor.copy(z.groundColor).multiplyScalar(ae),i.hemi[y]=se,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ye.LTC_FLOAT_1,i.rectAreaLTC2=Ye.LTC_FLOAT_2):(i.rectAreaLTC1=Ye.LTC_HALF_1,i.rectAreaLTC2=Ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==v||U.pointLength!==g||U.spotLength!==A||U.rectAreaLength!==P||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==I||U.numSpotMaps!==_||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=A,i.rectArea.length=P,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,U.sunLength=p,U.directionalLength=v,U.pointLength=g,U.spotLength=A,U.rectAreaLength=P,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=I,U.numSpotMaps=_,U.numLightProbes=L,i.version=yM++)}function c(f,u){let h=0,d=0,p=0,m=0,E=0,v=0;const g=u.matrixWorldInverse;for(let A=0,P=f.length;A<P;A++){const y=f[A];if(y.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),h++}else if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=i.rectArea[E];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),s.identity(),r.copy(y.matrixWorld),r.premultiply(g),s.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),E++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:i}}function rd(n){const e=new EM(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function c(d){a.push(d)}function f(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:f,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function AM(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new rd(n),e.set(a,[o])):r>=s.length?(o=new rd(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`,RM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],CM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],od=new Yt,no=new G,Jl=new G;function PM(n,e,t){let i=new vf;const a=new De,r=new De,s=new jt,o=new Nm,c=new Um,f={},u=t.maxTextureSize,h={[Va]:Cn,[Cn]:Va,[Jn]:Jn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:TM,fragmentShader:wM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new mn;m.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new At(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let g=this.type;this.render=function(T,I,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Ap&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Xi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=g!==this.type;Y&&I.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(J=>J.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,J=T.length;z<J;z++){const ae=T[z],W=ae.shadow;if(W===void 0){pt("WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ve=W.getFrameExtents();a.multiply(ve),r.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ve.x),a.x=r.x*ve.x,W.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ve.y),a.y=r.y*ve.y,W.mapSize.y=r.y));const se=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||Y===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===lo){if(ae.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qn(a.x,a.y,{format:Ha,type:ei,minFilter:dn,magFilter:dn,generateMipmaps:!1}),W.map.texture.name=ae.name+".shadowMap",W.map.depthTexture=new Nr(a.x,a.y,Ai),W.map.depthTexture.name=ae.name+".shadowMapDepth",W.map.depthTexture.format=Yi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn}else ae.isPointLight?(W.map=new Ah(a.x),W.map.depthTexture=new J0(a.x,Ci)):(W.map=new Qn(a.x,a.y),W.map.depthTexture=new Nr(a.x,a.y,Ci)),W.map.depthTexture.name=ae.name+".shadowMap",W.map.depthTexture.format=Yi,this.type===uo?(W.map.depthTexture.compareFunction=se?pf:hf,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);const ie=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ae.isPointLight!==!0&&W.updateMatrices(ae,_);for(let pe=0;pe<ie;pe++){const Qe=W.getCamera(pe);if(ae.isPointLight){const Ve=W.camera,vt=W.matrix,dt=ae.distance||Ve.far;dt!==Ve.far&&(Ve.far=dt,Ve.updateProjectionMatrix()),no.setFromMatrixPosition(ae.matrixWorld),Ve.position.copy(no),Jl.copy(Ve.position),Jl.add(RM[pe]),Ve.up.copy(CM[pe]),Ve.lookAt(Jl),Ve.updateMatrixWorld(),vt.makeTranslation(-no.x,-no.y,-no.z),od.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),W._frustum.setFromProjectionMatrix(od,Ve.coordinateSystem,Ve.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(W.map),n.clear());const Ve=W.getViewport(pe);s.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),V.viewport(s)}i=W.getFrustum(pe),y(I,_,Qe,ae,this.type)}W.isPointLightShadow!==!0&&this.type===lo&&A(W,_),W.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(w,L,U)};function A(T,I){const _=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qn(a.x,a.y,{format:Ha,type:ei}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,_,d,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,_,p,E,null)}function P(T,I,_,w){let L=null;const U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=L.uuid,Y=I.uuid;let z=f[V];z===void 0&&(z={},f[V]=z);let J=z[Y];J===void 0&&(J=L.clone(),z[Y]=J,I.addEventListener("dispose",S)),L=J}if(L.visible=I.visible,L.wireframe=I.wireframe,w===lo?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=n.properties.get(L);V.light=_}return L}function y(T,I,_,w,L){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===lo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),z=T.material;if(Array.isArray(z)){const J=Y.groups;for(let ae=0,W=J.length;ae<W;ae++){const ve=J[ae],se=z[ve.materialIndex];if(se&&se.visible){const ie=P(T,se,w,L);T.onBeforeShadow(n,T,I,_,Y,ie,ve),n.renderBufferDirect(_,null,Y,ie,T,ve),T.onAfterShadow(n,T,I,_,Y,ie,ve)}}}else if(z.visible){const J=P(T,z,w,L);T.onBeforeShadow(n,T,I,_,Y,J,null),n.renderBufferDirect(_,null,Y,J,T,null),T.onAfterShadow(n,T,I,_,Y,J,null)}}const V=T.children;for(let Y=0,z=V.length;Y<z;Y++)y(V[Y],I,_,w,L)}function S(T){T.target.removeEventListener("dispose",S);for(const _ in f){const w=f[_],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function IM(n,e){function t(){let X=!1;const Oe=new jt;let xe=null;const l=new jt(0,0,0,0);return{setMask:function(Ne){xe!==Ne&&!X&&(n.colorMask(Ne,Ne,Ne,Ne),xe=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,de,ut,Je,Ut){Ut===!0&&(Ne*=Je,de*=Je,ut*=Je),Oe.set(Ne,de,ut,Je),l.equals(Oe)===!1&&(n.clearColor(Ne,de,ut,Je),l.copy(Oe))},reset:function(){X=!1,xe=null,l.set(-1,0,0,0)}}}function i(){let X=!1,Oe=!1,xe=null,l=null,Ne=null;return{setReversed:function(de){if(Oe!==de){const ut=e.get("EXT_clip_control");de?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Oe=de;const Je=Ne;Ne=null,this.setClear(Je)}},getReversed:function(){return Oe},setTest:function(de){de?me(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(de){xe!==de&&!X&&(n.depthMask(de),xe=de)},setFunc:function(de){if(Oe&&(de=r0[de]),l!==de){switch(de){case oc:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}l=de}},setLocked:function(de){X=de},setClear:function(de){Ne!==de&&(Ne=de,Oe&&(de=1-de),n.clearDepth(de))},reset:function(){X=!1,xe=null,l=null,Ne=null,Oe=!1}}}function a(){let X=!1,Oe=null,xe=null,l=null,Ne=null,de=null,ut=null,Je=null,Ut=null;return{setTest:function(bt){X||(bt?me(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(bt){Oe!==bt&&!X&&(n.stencilMask(bt),Oe=bt)},setFunc:function(bt,Un,Pn){(xe!==bt||l!==Un||Ne!==Pn)&&(n.stencilFunc(bt,Un,Pn),xe=bt,l=Un,Ne=Pn)},setOp:function(bt,Un,Pn){(de!==bt||ut!==Un||Je!==Pn)&&(n.stencilOp(bt,Un,Pn),de=bt,ut=Un,Je=Pn)},setLocked:function(bt){X=bt},setClear:function(bt){Ut!==bt&&(n.clearStencil(bt),Ut=bt)},reset:function(){X=!1,Oe=null,xe=null,l=null,Ne=null,de=null,ut=null,Je=null,Ut=null}}}const r=new t,s=new i,o=new a,c=new WeakMap,f=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],E=null,v=!1,g=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new gt(0,0,0),w=0,L=!1,U=null,V=null,Y=null,z=null,J=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ve=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(se)[1]),W=ve>=1):se.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),W=ve>=2);let ie=null,pe={};const Qe=n.getParameter(n.SCISSOR_BOX),Ve=n.getParameter(n.VIEWPORT),vt=new jt().fromArray(Qe),dt=new jt().fromArray(Ve);function mt(X,Oe,xe,l){const Ne=new Uint8Array(4),de=n.createTexture();n.bindTexture(X,de),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<xe;ut++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Oe,0,n.RGBA,1,1,l,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Oe+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return de}const ce={};ce[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Mo),Ae(!1),Se(Qf),me(n.CULL_FACE),Me(Xi);function me(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Re(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function st(X,Oe){return d[X]!==Oe?(n.bindFramebuffer(X,Oe),d[X]=Oe,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Oe),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Oe),!0):!1}function We(X,Oe){let xe=m,l=!1;if(X){xe=p.get(Oe),xe===void 0&&(xe=[],p.set(Oe,xe));const Ne=X.textures;if(xe.length!==Ne.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let de=0,ut=Ne.length;de<ut;de++)xe[de]=n.COLOR_ATTACHMENT0+de;xe.length=Ne.length,l=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,l=!0);l&&n.drawBuffers(xe)}function Ce(X){return E!==X?(n.useProgram(X),E=X,!0):!1}const ft={[Er]:n.FUNC_ADD,[wp]:n.FUNC_SUBTRACT,[Rp]:n.FUNC_REVERSE_SUBTRACT};ft[Cp]=n.MIN,ft[Pp]=n.MAX;const ue={[Ip]:n.ZERO,[Lp]:n.ONE,[Dp]:n.SRC_COLOR,[Dd]:n.SRC_ALPHA,[zp]:n.SRC_ALPHA_SATURATE,[Fp]:n.DST_COLOR,[Up]:n.DST_ALPHA,[Np]:n.ONE_MINUS_SRC_COLOR,[Nd]:n.ONE_MINUS_SRC_ALPHA,[Bp]:n.ONE_MINUS_DST_COLOR,[Op]:n.ONE_MINUS_DST_ALPHA,[Gp]:n.CONSTANT_COLOR,[Vp]:n.ONE_MINUS_CONSTANT_COLOR,[kp]:n.CONSTANT_ALPHA,[Hp]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(X,Oe,xe,l,Ne,de,ut,Je,Ut,bt){if(X===Xi){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(me(n.BLEND),v=!0),X!==Tp){if(X!==g||bt!==L){if((A!==Er||S!==Er)&&(n.blendEquation(n.FUNC_ADD),A=Er,S=Er),bt)switch(X){case ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",X);break}else switch(X){case ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eu:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",X);break}P=null,y=null,T=null,I=null,_.set(0,0,0),w=0,g=X,L=bt}return}Ne=Ne||Oe,de=de||xe,ut=ut||l,(Oe!==A||Ne!==S)&&(n.blendEquationSeparate(ft[Oe],ft[Ne]),A=Oe,S=Ne),(xe!==P||l!==y||de!==T||ut!==I)&&(n.blendFuncSeparate(ue[xe],ue[l],ue[de],ue[ut]),P=xe,y=l,T=de,I=ut),(Je.equals(_)===!1||Ut!==w)&&(n.blendColor(Je.r,Je.g,Je.b,Ut),_.copy(Je),w=Ut),g=X,L=!1}function be(X,Oe){X.side===Jn?Re(n.CULL_FACE):me(n.CULL_FACE);let xe=X.side===Cn;Oe&&(xe=!xe),Ae(xe),X.blending===ho&&X.transparent===!1?Me(Xi):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const l=X.stencilWrite;o.setTest(l),l&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(X){U!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),U=X)}function Se(X){X!==bp?(me(n.CULL_FACE),X!==V&&(X===Qf?n.cullFace(n.BACK):X===Ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),V=X}function R(X){X!==Y&&(W&&n.lineWidth(X),Y=X)}function Q(X,Oe,xe){X?(me(n.POLYGON_OFFSET_FILL),(z!==Oe||J!==xe)&&(z=Oe,J=xe,s.getReversed()&&(Oe=-Oe),n.polygonOffset(Oe,xe))):Re(n.POLYGON_OFFSET_FILL)}function Te(X){X?me(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Pe(X){X===void 0&&(X=n.TEXTURE0+ae-1),ie!==X&&(n.activeTexture(X),ie=X)}function F(X,Oe,xe){xe===void 0&&(ie===null?xe=n.TEXTURE0+ae-1:xe=ie);let l=pe[xe];l===void 0&&(l={type:void 0,texture:void 0},pe[xe]=l),(l.type!==X||l.texture!==Oe)&&(ie!==xe&&(n.activeTexture(xe),ie=xe),n.bindTexture(X,Oe||ce[X]),l.type=X,l.texture=Oe)}function ot(){const X=pe[ie];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ke(){try{n.compressedTexImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function b(){try{n.texSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function $(){try{n.texSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function _e(){try{n.texStorage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ye(){try{n.texStorage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ne(){try{n.texImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ge(){try{n.texImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ze(X){return h[X]!==void 0?h[X]:n.getParameter(X)}function Ze(X,Oe){h[X]!==Oe&&(n.pixelStorei(X,Oe),h[X]=Oe)}function Ie(X){vt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function Ue(X){dt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),dt.copy(X))}function He(X,Oe){let xe=f.get(Oe);xe===void 0&&(xe=new WeakMap,f.set(Oe,xe));let l=xe.get(X);l===void 0&&(l=n.getUniformBlockIndex(Oe,X.name),xe.set(X,l))}function nt(X,Oe){const l=f.get(Oe).get(X);c.get(Oe)!==l&&(n.uniformBlockBinding(Oe,l,X.__bindingPointIndex),c.set(Oe,l))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ie=null,pe={},d={},p=new WeakMap,m=[],E=null,v=!1,g=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new gt(0,0,0),w=0,L=!1,U=null,V=null,Y=null,z=null,J=null,vt.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:Re,bindFramebuffer:st,drawBuffers:We,useProgram:Ce,setBlending:Me,setMaterial:be,setFlipSided:Ae,setCullFace:Se,setLineWidth:R,setPolygonOffset:Q,setScissorTest:Te,activeTexture:Pe,bindTexture:F,unbindTexture:ot,compressedTexImage2D:ke,compressedTexImage3D:D,texImage2D:ne,texImage3D:ge,pixelStorei:Ze,getParameter:ze,updateUBOMapping:He,uniformBlockBinding:nt,texStorage2D:_e,texStorage3D:ye,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:Z,compressedTexSubImage3D:le,scissor:Ie,viewport:Ue,reset:Be}}function LM(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new De,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return m?new OffscreenCanvas(D,b):bo("canvas")}function v(D,b,$){let Z=1;const le=ke(D);if((le.width>$||le.height>$)&&(Z=$/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const _e=Math.floor(Z*le.width),ye=Math.floor(Z*le.height);d===void 0&&(d=E(_e,ye));const ne=b?E(_e,ye):d;return ne.width=_e,ne.height=ye,ne.getContext("2d").drawImage(D,0,0,_e,ye),pt("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+_e+"x"+ye+")."),ne}else return"data"in D&&pt("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function g(D){return D.generateMipmaps}function A(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,b,$,Z,le,_e=!1){if(D!==null){if(n[D]!==void 0)return n[D];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ye;Z&&(ye=e.get("EXT_texture_norm16"),ye||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===n.RED&&($===n.FLOAT&&(ne=n.R32F),$===n.HALF_FLOAT&&(ne=n.R16F),$===n.UNSIGNED_BYTE&&(ne=n.R8),$===n.UNSIGNED_SHORT&&ye&&(ne=ye.R16_EXT),$===n.SHORT&&ye&&(ne=ye.R16_SNORM_EXT)),b===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.R8UI),$===n.UNSIGNED_SHORT&&(ne=n.R16UI),$===n.UNSIGNED_INT&&(ne=n.R32UI),$===n.BYTE&&(ne=n.R8I),$===n.SHORT&&(ne=n.R16I),$===n.INT&&(ne=n.R32I)),b===n.RG&&($===n.FLOAT&&(ne=n.RG32F),$===n.HALF_FLOAT&&(ne=n.RG16F),$===n.UNSIGNED_BYTE&&(ne=n.RG8),$===n.UNSIGNED_SHORT&&ye&&(ne=ye.RG16_EXT),$===n.SHORT&&ye&&(ne=ye.RG16_SNORM_EXT)),b===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RG8UI),$===n.UNSIGNED_SHORT&&(ne=n.RG16UI),$===n.UNSIGNED_INT&&(ne=n.RG32UI),$===n.BYTE&&(ne=n.RG8I),$===n.SHORT&&(ne=n.RG16I),$===n.INT&&(ne=n.RG32I)),b===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),$===n.UNSIGNED_INT&&(ne=n.RGB32UI),$===n.BYTE&&(ne=n.RGB8I),$===n.SHORT&&(ne=n.RGB16I),$===n.INT&&(ne=n.RGB32I)),b===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),$===n.UNSIGNED_INT&&(ne=n.RGBA32UI),$===n.BYTE&&(ne=n.RGBA8I),$===n.SHORT&&(ne=n.RGBA16I),$===n.INT&&(ne=n.RGBA32I)),b===n.RGB&&($===n.UNSIGNED_SHORT&&ye&&(ne=ye.RGB16_EXT),$===n.SHORT&&ye&&(ne=ye.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),b===n.RGBA){const ge=_e?zs:It.getTransfer(le);$===n.FLOAT&&(ne=n.RGBA32F),$===n.HALF_FLOAT&&(ne=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ne=ge===Gt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&ye&&(ne=ye.RGBA16_EXT),$===n.SHORT&&ye&&(ne=ye.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(D,b){let $;return D?b===null||b===Ci||b===So?$=n.DEPTH24_STENCIL8:b===Ai?$=n.DEPTH32F_STENCIL8:b===_o&&($=n.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ci||b===So?$=n.DEPTH_COMPONENT24:b===Ai?$=n.DEPTH_COMPONENT32F:b===_o&&($=n.DEPTH_COMPONENT16),$}function T(D,b){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==nn&&D.minFilter!==dn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),w(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),U(b)}function w(D){const b=i.get(D);if(b.__webglInit===void 0)return;const $=D.source,Z=p.get($);if(Z){const le=Z[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(D),Object.keys(Z).length===0&&p.delete($)}i.remove(D)}function L(D){const b=i.get(D);n.deleteTexture(b.__webglTexture);const $=D.source,Z=p.get($);delete Z[b.__cacheKey],s.memory.textures--}function U(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let le=0;le<b.__webglFramebuffer[Z].length;le++)n.deleteFramebuffer(b.__webglFramebuffer[Z][le]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=D.textures;for(let Z=0,le=$.length;Z<le;Z++){const _e=i.get($[Z]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),s.memory.textures--),i.remove($[Z])}i.remove(D)}let V=0;function Y(){V=0}function z(){return V}function J(D){V=D}function ae(){const D=V;return D>=a.maxTextures&&pt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function W(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ve(D,b){const $=i.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const Z=D.image;if(Z===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re($,D,b);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+b)}function se(D,b){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Re($,D,b);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+b)}function ie(D,b){const $=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Re($,D,b);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+b)}function pe(D,b){const $=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){st($,D,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+b)}const Qe={[Us]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},Ve={[nn]:n.NEAREST,[qp]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[Fa]:n.LINEAR_MIPMAP_LINEAR},vt={[Zp]:n.NEVER,[t0]:n.ALWAYS,[Kp]:n.LESS,[hf]:n.LEQUAL,[Qp]:n.EQUAL,[pf]:n.GEQUAL,[jp]:n.GREATER,[e0]:n.NOTEQUAL};function dt(D,b){if(b.type===Ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===dn||b.magFilter===gl||b.magFilter===Yo||b.magFilter===Fa||b.minFilter===dn||b.minFilter===gl||b.minFilter===Yo||b.minFilter===Fa)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Qe[b.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Qe[b.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Qe[b.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Ve[b.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Ve[b.minFilter]),b.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==Yo&&b.minFilter!==Fa||b.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function mt(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let le=p.get(Z);le===void 0&&(le={},p.set(Z,le));const _e=W(b);if(_e!==D.__cacheKey){le[_e]===void 0&&(le[_e]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,$=!0),le[_e].usedTimes++;const ye=le[D.__cacheKey];ye!==void 0&&(le[D.__cacheKey].usedTimes--,ye.usedTimes===0&&L(b)),D.__cacheKey=_e,D.__webglTexture=le[_e].texture}return $}function ce(D,b,$){return Math.floor(Math.floor(D/$)/b)}function me(D,b,$,Z){const _e=D.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,$,Z,b.data);else{_e.sort((Ze,Ie)=>Ze.start-Ie.start);let ye=0;for(let Ze=1;Ze<_e.length;Ze++){const Ie=_e[ye],Ue=_e[Ze],He=Ie.start+Ie.count,nt=ce(Ue.start,b.width,4),Be=ce(Ie.start,b.width,4);Ue.start<=He+1&&nt===Be&&ce(Ue.start+Ue.count-1,b.width,4)===nt?Ie.count=Math.max(Ie.count,Ue.start+Ue.count-Ie.start):(++ye,_e[ye]=Ue)}_e.length=ye+1;const ne=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ze=0,Ie=_e.length;Ze<Ie;Ze++){const Ue=_e[Ze],He=Math.floor(Ue.start/4),nt=Math.ceil(Ue.count/4),Be=He%b.width,X=Math.floor(He/b.width),Oe=nt,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,Be,X,Oe,xe,$,Z,b.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function Re(D,b,$){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const le=mt(D,b),_e=b.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+$);const ye=i.get(_e);if(_e.version!==ye.__version||le===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const xe=It.getPrimaries(It.workingColorSpace),l=b.colorSpace===ma?null:It.getPrimaries(b.colorSpace),Ne=b.colorSpace===ma||xe===l?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=v(b.image,!1,a.maxTextureSize);ge=ot(b,ge);const ze=r.convert(b.format,b.colorSpace),Ze=r.convert(b.type);let Ie=y(b.internalFormat,ze,Ze,b.normalized,b.colorSpace,b.isVideoTexture);dt(Z,b);let Ue;const He=b.mipmaps,nt=b.isVideoTexture!==!0,Be=ye.__version===void 0||le===!0,X=_e.dataReady,Oe=T(b,ge);if(b.isDepthTexture)Ie=S(b.format===Ba,b.type),Be&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ge.width,ge.height,0,ze,Ze,null));else if(b.isDataTexture)if(He.length>0){nt&&Be&&t.texStorage2D(n.TEXTURE_2D,Oe,Ie,He[0].width,He[0].height);for(let xe=0,l=He.length;xe<l;xe++)Ue=He[xe],nt?X&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,ze,Ze,Ue.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ue.width,Ue.height,0,ze,Ze,Ue.data);b.generateMipmaps=!1}else nt?(Be&&t.texStorage2D(n.TEXTURE_2D,Oe,Ie,ge.width,ge.height),X&&me(b,ge,ze,Ze)):t.texImage2D(n.TEXTURE_2D,0,Ie,ge.width,ge.height,0,ze,Ze,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ie,He[0].width,He[0].height,ge.depth);for(let xe=0,l=He.length;xe<l;xe++)if(Ue=He[xe],b.format!==Kn)if(ze!==null)if(nt){if(X)if(b.layerUpdates.size>0){const Ne=Bu(Ue.width,Ue.height,b.format,b.type);for(const de of b.layerUpdates){const ut=Ue.data.subarray(de*Ne/Ue.data.BYTES_PER_ELEMENT,(de+1)*Ne/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,de,Ue.width,Ue.height,1,ze,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,ge.depth,ze,Ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ue.width,Ue.height,ge.depth,ze,Ze,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ie,Ue.width,Ue.height,ge.depth,0,ze,Ze,Ue.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{nt&&Be&&t.texStorage2D(n.TEXTURE_2D,Oe,Ie,He[0].width,He[0].height);for(let xe=0,l=He.length;xe<l;xe++)Ue=He[xe],b.format!==Kn?ze!==null?nt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ie,Ue.width,Ue.height,0,Ue.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ue.width,Ue.height,ze,Ze,Ue.data):t.texImage2D(n.TEXTURE_2D,xe,Ie,Ue.width,Ue.height,0,ze,Ze,Ue.data)}else if(b.isDataArrayTexture)if(nt){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Ie,ge.width,ge.height,ge.depth),X)if(b.layerUpdates.size>0){const xe=Bu(ge.width,ge.height,b.format,b.type);for(const l of b.layerUpdates){const Ne=ge.data.subarray(l*xe/ge.data.BYTES_PER_ELEMENT,(l+1)*xe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,l,ge.width,ge.height,1,ze,Ze,Ne)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ze,Ze,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,ze,Ze,ge.data);else if(b.isData3DTexture)nt?(Be&&t.texStorage3D(n.TEXTURE_3D,Oe,Ie,ge.width,ge.height,ge.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ze,Ze,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,ze,Ze,ge.data);else if(b.isFramebufferTexture){if(Be)if(nt)t.texStorage2D(n.TEXTURE_2D,Oe,Ie,ge.width,ge.height);else{let xe=ge.width,l=ge.height;for(let Ne=0;Ne<Oe;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Ie,xe,l,0,ze,Ze,null),xe>>=1,l>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ge.parentNode!==xe){xe.appendChild(ge),h.add(b),xe.onpaint=l=>{const Ne=l.changedElements;for(const de of h)Ne.includes(de.image)&&(de.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Ne=n.RGBA,de=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,de,ut,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(nt&&Be){const xe=ke(He[0]);t.texStorage2D(n.TEXTURE_2D,Oe,Ie,xe.width,xe.height)}for(let xe=0,l=He.length;xe<l;xe++)Ue=He[xe],nt?X&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ze,Ze,Ue):t.texImage2D(n.TEXTURE_2D,xe,Ie,ze,Ze,Ue);b.generateMipmaps=!1}else if(nt){if(Be){const xe=ke(ge);t.texStorage2D(n.TEXTURE_2D,Oe,Ie,xe.width,xe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,Ze,ge)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ze,Ze,ge);g(b)&&A(Z),ye.__version=_e.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function st(D,b,$){if(b.image.length!==6)return;const Z=mt(D,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const _e=i.get(le);if(le.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+$);const ye=It.getPrimaries(It.workingColorSpace),ne=b.colorSpace===ma?null:It.getPrimaries(b.colorSpace),ge=b.colorSpace===ma||ye===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Ze=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!ze&&!Ze?Ie[de]=v(b.image[de],!0,a.maxCubemapSize):Ie[de]=Ze?b.image[de].image:b.image[de],Ie[de]=ot(b,Ie[de]);const Ue=Ie[0],He=r.convert(b.format,b.colorSpace),nt=r.convert(b.type),Be=y(b.internalFormat,He,nt,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Oe=_e.__version===void 0||Z===!0,xe=le.dataReady;let l=T(b,Ue);dt(n.TEXTURE_CUBE_MAP,b);let Ne;if(ze){X&&Oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Be,Ue.width,Ue.height);for(let de=0;de<6;de++){Ne=Ie[de].mipmaps;for(let ut=0;ut<Ne.length;ut++){const Je=Ne[ut];b.format!==Kn?He!==null?X?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut,0,0,Je.width,Je.height,He,Je.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut,Be,Je.width,Je.height,0,Je.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut,0,0,Je.width,Je.height,He,nt,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut,Be,Je.width,Je.height,0,He,nt,Je.data)}}}else{if(Ne=b.mipmaps,X&&Oe){Ne.length>0&&l++;const de=ke(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Be,de.width,de.height)}for(let de=0;de<6;de++)if(Ze){X?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,He,nt,Ie[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Be,Ie[de].width,Ie[de].height,0,He,nt,Ie[de].data);for(let ut=0;ut<Ne.length;ut++){const Ut=Ne[ut].image[de].image;X?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut+1,0,0,Ut.width,Ut.height,He,nt,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut+1,Be,Ut.width,Ut.height,0,He,nt,Ut.data)}}else{X?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,He,nt,Ie[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Be,He,nt,Ie[de]);for(let ut=0;ut<Ne.length;ut++){const Je=Ne[ut];X?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut+1,0,0,He,nt,Je.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ut+1,Be,He,nt,Je.image[de])}}}g(b)&&A(n.TEXTURE_CUBE_MAP),_e.__version=le.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function We(D,b,$,Z,le,_e){const ye=r.convert($.format,$.colorSpace),ne=r.convert($.type),ge=y($.internalFormat,ye,ne,$.normalized,$.colorSpace),ze=i.get(b),Ze=i.get($);if(Ze.__renderTarget=b,!ze.__hasExternalTextures){const Ie=Math.max(1,b.width>>_e),Ue=Math.max(1,b.height>>_e);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,_e,ge,Ie,Ue,b.depth,0,ye,ne,null):t.texImage2D(le,_e,ge,Ie,Ue,0,ye,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,le,Ze.__webglTexture,0,Te(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,le,Ze.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,b,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),b.depthBuffer){const Z=b.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,_e=S(b.stencilBuffer,le),ye=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(b),_e,b.width,b.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(b),_e,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_e,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,D)}else{const Z=b.textures;for(let le=0;le<Z.length;le++){const _e=Z[le],ye=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),ge=y(_e.internalFormat,ye,ne,_e.normalized,_e.colorSpace);Pe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te(b),ge,b.width,b.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te(b),ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ge,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(D,b,$){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),dt(n.TEXTURE_CUBE_MAP,b.depthTexture);const ze=r.convert(b.depthTexture.format),Ze=r.convert(b.depthTexture.type);let Ie;b.depthTexture.format===Yi?Ie=n.DEPTH_COMPONENT24:b.depthTexture.format===Ba&&(Ie=n.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ie,b.width,b.height,0,ze,Ze,null)}}else ve(b.depthTexture,0);const _e=le.__webglTexture,ye=Te(b),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,ge=b.depthTexture.format===Ba?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Yi)Pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ne,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ne,_e,0);else if(b.depthTexture.format===Ba)Pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ne,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(D){const b=i.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=Z}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let Z=0;Z<6;Z++)ft(b.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?ft(b.__webglFramebuffer[0],D,0):ft(b.__webglFramebuffer,D,0)}else if($){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ce(b.__webglDepthbuffer[Z],D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ce(b.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(D,b,$){const Z=i.get(D);b!==void 0&&We(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&ue(D)}function be(D){const b=D.texture,$=i.get(D),Z=i.get(b);D.addEventListener("dispose",_);const le=D.textures,_e=D.isWebGLCubeRenderTarget===!0,ye=le.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,s.memory.textures++),_e){$.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ne]=[];for(let ge=0;ge<b.mipmaps.length;ge++)$.__webglFramebuffer[ne][ge]=n.createFramebuffer()}else $.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)$.__webglFramebuffer[ne]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ne=0,ge=le.length;ne<ge;ne++){const ze=i.get(le[ne]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Pe(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){const ge=le[ne];$.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ne]);const ze=r.convert(ge.format,ge.colorSpace),Ze=r.convert(ge.type),Ie=y(ge.internalFormat,ze,Ze,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),Ue=Te(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ie,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,$.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)We($.__webglFramebuffer[ne][ge],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge);else We($.__webglFramebuffer[ne],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ne=0,ge=le.length;ne<ge;ne++){const ze=le[ne],Ze=i.get(ze);let Ie=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ze.__webglTexture),dt(Ie,ze),We($.__webglFramebuffer,D,ze,n.COLOR_ATTACHMENT0+ne,Ie,0),g(ze)&&A(Ie)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ne=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),dt(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)We($.__webglFramebuffer[ge],D,b,n.COLOR_ATTACHMENT0,ne,ge);else We($.__webglFramebuffer,D,b,n.COLOR_ATTACHMENT0,ne,0);g(b)&&A(ne),t.unbindTexture()}D.depthBuffer&&ue(D)}function Ae(D){const b=D.textures;for(let $=0,Z=b.length;$<Z;$++){const le=b[$];if(g(le)){const _e=P(D),ye=i.get(le).__webglTexture;t.bindTexture(_e,ye),A(_e),t.unbindTexture()}}}const Se=[],R=[];function Q(D){if(D.samples>0){if(Pe(D)===!1){const b=D.textures,$=D.width,Z=D.height;let le=n.COLOR_BUFFER_BIT;const _e=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(D),ne=b.length>1;if(ne)for(let ze=0;ze<b.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ze]);const Ze=i.get(b[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,$,Z,0,0,$,Z,le,n.NEAREST),c===!0&&(Se.length=0,R.length=0,Se.push(n.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Se.push(_e),R.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let ze=0;ze<b.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ze]);const Ze=i.get(b[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){const b=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Te(D){return Math.min(a.maxSamples,D.samples)}function Pe(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=s.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function ot(D,b){const $=D.colorSpace,Z=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Bs&&$!==ma&&(It.getTransfer($)===Gt?(Z!==Kn||le!==Vn)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",$)),b}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=ae,this.resetTextureUnits=Y,this.getTextureUnits=z,this.setTextureUnits=J,this.setTexture2D=ve,this.setTexture2DArray=se,this.setTexture3D=ie,this.setTextureCube=pe,this.rebindTextures=Me,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DM(n,e){function t(i,a=ma){let r;const s=It.getTransfer(a);if(i===Vn)return n.UNSIGNED_BYTE;if(i===lf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wd)return n.BYTE;if(i===Xd)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===sf)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Ai)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===$d)return n.ALPHA;if(i===Jd)return n.RGB;if(i===Kn)return n.RGBA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===Ba)return n.DEPTH_STENCIL;if(i===Zd)return n.RED;if(i===ff)return n.RED_INTEGER;if(i===Ha)return n.RG;if(i===uf)return n.RG_INTEGER;if(i===df)return n.RGBA_INTEGER;if(i===Rs||i===Cs||i===Ps||i===Is)if(s===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===Mc||i===_c||i===Sc||i===yc||i===Os||i===bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===Mc)return s===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sc)return r.COMPRESSED_R11_EAC;if(i===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Os)return r.COMPRESSED_RG11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ec||i===Ac||i===Tc||i===wc||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return s===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bc||i===zc||i===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bc)return s===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===kc||i===Fs||i===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
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

}`;class OM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new uh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pi({vertexShader:NM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends qa{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",c=1,f=null,u=null,h=null,d=null,p=null,m=null;const E=typeof XRWebGLBinding<"u",v=new OM,g={},A=t.getContextAttributes();let P=null,y=null;const S=[],T=[],I=new De;let _=null,w=null;const L=new $n;L.viewport=new jt;const U=new $n;U.viewport=new jt;const V=[L,U],Y=new Xm;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let me=S[ce];return me===void 0&&(me=new bl,S[ce]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ce){let me=S[ce];return me===void 0&&(me=new bl,S[ce]=me),me.getGripSpace()},this.getHand=function(ce){let me=S[ce];return me===void 0&&(me=new bl,S[ce]=me),me.getHandSpace()};function ae(ce){const me=T.indexOf(ce.inputSource);if(me===-1)return;const Re=S[me];Re!==void 0&&(Re.update(ce.inputSource,ce.frame,f||s),Re.dispatchEvent({type:ce.type,data:ce.inputSource}))}function W(){a.removeEventListener("select",ae),a.removeEventListener("selectstart",ae),a.removeEventListener("selectend",ae),a.removeEventListener("squeeze",ae),a.removeEventListener("squeezestart",ae),a.removeEventListener("squeezeend",ae),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ve);for(let ce=0;ce<S.length;ce++){const me=T[ce];me!==null&&(T[ce]=null,S[ce].disconnect(me))}z=null,J=null,v.reset();for(const ce in g)delete g[ce];if(e.setRenderTarget(P),p=null,d=null,h=null,a=null,y=null,mt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),w!==null){const ce=w.camera;ce.fov=w.fov,ce.zoom=w.zoom,ce.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,i.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(ce){f=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",ae),a.addEventListener("selectstart",ae),a.addEventListener("selectend",ae),a.addEventListener("squeeze",ae),a.addEventListener("squeezestart",ae),a.addEventListener("squeezeend",ae),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ve),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,st=null,We=null;A.depth&&(We=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=A.stencil?Ba:Yi,st=A.stencil?So:Ci);const Ce={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ce),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Qn(d.textureWidth,d.textureHeight,{format:Kn,type:Vn,depthTexture:new Nr(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Re),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),f=null,s=await a.requestReferenceSpace(o),mt.setContext(a),mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ve(ce){for(let me=0;me<ce.removed.length;me++){const Re=ce.removed[me],st=T.indexOf(Re);st>=0&&(T[st]=null,S[st].disconnect(Re))}for(let me=0;me<ce.added.length;me++){const Re=ce.added[me];let st=T.indexOf(Re);if(st===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=T.length){T.push(Re),st=Ce;break}else if(T[Ce]===null){T[Ce]=Re,st=Ce;break}if(st===-1)break}const We=S[st];We&&We.connect(Re)}}const se=new G,ie=new G;function pe(ce,me,Re){se.setFromMatrixPosition(me.matrixWorld),ie.setFromMatrixPosition(Re.matrixWorld);const st=se.distanceTo(ie),We=me.projectionMatrix.elements,Ce=Re.projectionMatrix.elements,ft=We[14]/(We[10]-1),ue=We[14]/(We[10]+1),Me=(We[9]+1)/We[5],be=(We[9]-1)/We[5],Ae=(We[8]-1)/We[0],Se=(Ce[8]+1)/Ce[0],R=ft*Ae,Q=ft*Se,Te=st/(-Ae+Se),Pe=Te*-Ae;if(me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Pe),ce.translateZ(Te),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),We[10]===-1)ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const F=ft+Te,ot=ue+Te,ke=R-Pe,D=Q+(st-Pe),b=Me*ue/ot*F,$=be*ue/ot*F;ce.projectionMatrix.makePerspective(ke,D,b,$,F,ot),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Qe(ce,me){me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let me=ce.near,Re=ce.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(Re=v.depthFar)),Y.near=U.near=L.near=me,Y.far=U.far=L.far=Re,(z!==Y.near||J!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),z=Y.near,J=Y.far),Y.layers.mask=ce.layers.mask|6,L.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;const st=ce.parent,We=Y.cameras;Qe(Y,st);for(let Ce=0;Ce<We.length;Ce++)Qe(We[Ce],st);We.length===2?pe(Y,L,U):Y.projectionMatrix.copy(L.projectionMatrix),w===null&&ce.isPerspectiveCamera&&(w={camera:ce,fov:ce.fov,zoom:ce.zoom}),Ve(ce,Y,st)};function Ve(ce,me,Re){Re===null?ce.matrix.copy(me.matrixWorld):(ce.matrix.copy(Re.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(me.projectionMatrix),ce.projectionMatrixInverse.copy(me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Eo*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ce){c=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(ce){return g[ce]};let vt=null;function dt(ce,me){if(u=me.getViewerPose(f||s),m=me,u!==null){const Re=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let st=!1;Re.length!==Y.cameras.length&&(Y.cameras.length=0,st=!0);for(let ue=0;ue<Re.length;ue++){const Me=Re[ue];let be=null;if(p!==null)be=p.getViewport(Me);else{const Se=h.getViewSubImage(d,Me);be=Se.viewport,ue===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let Ae=V[ue];Ae===void 0&&(Ae=new $n,Ae.layers.enable(ue),Ae.viewport=new jt,V[ue]=Ae),Ae.matrix.fromArray(Me.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Me.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(be.x,be.y,be.width,be.height),ue===0&&(Y.matrix.copy(Ae.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),st===!0&&Y.cameras.push(Ae)}const We=a.enabledFeatures;if(We&&We.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const ue=h.getDepthInformation(Re[0]);ue&&ue.isValid&&ue.texture&&v.init(ue,a.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let ue=0;ue<Re.length;ue++){const Me=Re[ue].camera;if(Me){let be=g[Me];be||(be=new uh,g[Me]=be);const Ae=h.getCameraImage(Me);be.sourceTexture=Ae}}}}for(let Re=0;Re<S.length;Re++){const st=T[Re],We=S[Re];st!==null&&We!==void 0&&We.update(st,me,f||s)}vt&&vt(ce,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),m=null}const mt=new bh;mt.setAnimationLoop(dt),this.setAnimationLoop=function(ce){vt=ce},this.dispose=function(){}}}const BM=new Yt,Ph=new _t;Ph.set(-1,0,0,0,1,0,0,0,1);function zM(n,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,_h(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,A,P,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(v,g):g.isMeshLambertMaterial?(r(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(v,g),h(v,g)):g.isMeshPhongMaterial?(r(v,g),u(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(v,g),d(v,g),g.isMeshPhysicalMaterial&&p(v,g,y)):g.isMeshMatcapMaterial?(r(v,g),m(v,g)):g.isMeshDepthMaterial?r(v,g):g.isMeshDistanceMaterial?(r(v,g),E(v,g)):g.isMeshNormalMaterial?r(v,g):g.isLineBasicMaterial?(s(v,g),g.isLineDashedMaterial&&o(v,g)):g.isPointsMaterial?c(v,g,A,P):g.isSpriteMaterial?f(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Cn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Cn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const A=e.get(g),P=A.envMap,y=A.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Ph),v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function s(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function o(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,A,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*A,v.scale.value=P*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function u(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function h(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function d(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function p(v,g,A){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.retroreflectivity>0&&(v.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,g){g.matcap&&(v.matcap.value=g.matcap)}function E(v,g){const A=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function GM(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function f(y,S){let T=a[y.id];T===void 0&&(v(y),T=u(y),a[y.id]=T,y.addEventListener("dispose",A));const I=S.program;i.updateUBOMapping(y,I);const _=e.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function u(y){const S=h();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=a[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,w=T.length;_<w;_++){const L=T[_];if(Array.isArray(L))for(let U=0,V=L.length;U<V;U++)p(L[U],_,U,I);else p(L,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,I){if(E(y,S,T,I)===!0){const _=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let U=0;U<w.length;U++){const V=w[U],Y=g(V);m(V,y.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function E(y,S,T,I){const _=y.value,w=S+"_"+T;if(I[w]===void 0)return typeof _=="number"||typeof _=="boolean"?I[w]=_:ArrayBuffer.isView(_)?I[w]=_.slice():I[w]=_.clone(),!0;{const L=I[w];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function v(y){const S=y.uniforms;let T=0;const I=16;for(let w=0,L=S.length;w<L;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let V=0,Y=U.length;V<Y;V++){const z=U[V],J=Array.isArray(z.value)?z.value:[z.value];for(let ae=0,W=J.length;ae<W;ae++){const ve=J[ae],se=g(ve),ie=T%I,pe=ie%se.boundary,Qe=ie+pe;T+=pe,Qe!==0&&I-Qe<se.storage&&(T+=I-Qe),z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=se.storage}}}const _=T%I;return _>0&&(T+=I-_),y.__size=T,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){const S=y.target;S.removeEventListener("dispose",A);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const y in a)n.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:c,update:f,dispose:P}}const VM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function kM(){return _i===null&&(_i=new lh(VM,16,16,Ha,ei),_i.name="DFG_LUT",_i.minFilter=dn,_i.magFilter=dn,_i.wrapS=ki,_i.wrapT=ki,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class HM{constructor(e={}){const{canvas:t=i0(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Vn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const E=p,v=new Set([df,uf,ff]),g=new Set([Vn,Ci,_o,So,lf,cf]),A=new Uint32Array(4),P=new Int32Array(4),y=new G;let S=null,T=null;const I=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,V=null,Y=null,z=null,J=null;this._outputColorSpace=Dn;let ae=0,W=0,ve=null,se=-1,ie=null;const pe=new jt,Qe=new jt;let Ve=null;const vt=new gt(0);let dt=0,mt=t.width,ce=t.height,me=1,Re=null,st=null;const We=new jt(0,0,mt,ce),Ce=new jt(0,0,mt,ce);let ft=!1;const ue=new vf;let Me=!1,be=!1;const Ae=new Yt,Se=new G,R=new jt,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Pe(){return ve===null?me:1}let F=i;function ot(C,H){return t.getContext(C,H)}let ke,D,b,$,Z,le,_e,ye,ne,ge,ze,Ze,Ie,Ue,He,nt,Be,X,Oe,xe,l,Ne,de;try{const C={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),F===null){const H="webgl2";if(F=ot(H,C),F===null)throw ot(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(C){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Lt("WebGLRenderer: "+C.message),C}function ut(){ke=new k1(F),ke.init(),l=new DM(F,ke),D=new L1(F,ke,e,l),b=new IM(F,ke),D.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),Y=F.createFramebuffer(),z=F.createFramebuffer(),J=F.createFramebuffer(),$=new X1(F),Z=new xM,le=new LM(F,ke,b,Z,D,l,$),_e=new V1(L),ye=new Ym(F),Ne=new P1(F,ye),ne=new H1(F,ye,$,Ne),ge=new Y1(F,ne,ye,Ne,$),X=new q1(F,D,le),He=new D1(Z),ze=new gM(L,_e,ke,D,Ne,He),Ze=new zM(L,Z),Ie=new MM,Ue=new AM(ke),Be=new C1(L,_e,b,ge,m,c),nt=new PM(L,ge,D),de=new GM(F,$,D,b),Oe=new I1(F,ke,$),xe=new W1(F,ke,$),$.programs=ze.programs,L.capabilities=D,L.extensions=ke,L.properties=Z,L.renderLists=Ie,L.shadowMap=nt,L.state=b,L.info=$}E!==Vn&&(w=new J1(E,t.width,t.height,o,a,r));const Je=new FM(L,F);this.xr=Je,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(mt,ce,!1))},this.getSize=function(C){return C.set(mt,ce)},this.setSize=function(C,H,re=!0){if(Je.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=C,ce=H,t.width=Math.floor(C*me),t.height=Math.floor(H*me),re===!0&&(t.style.width=C+"px",t.style.height=H+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(mt*me,ce*me).floor()},this.setDrawingBufferSize=function(C,H,re){mt=C,ce=H,me=re,t.width=Math.floor(C*re),t.height=Math.floor(H*re),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(E===Vn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(pe)},this.getViewport=function(C){return C.copy(We)},this.setViewport=function(C,H,re,ee){C.isVector4?We.set(C.x,C.y,C.z,C.w):We.set(C,H,re,ee),b.viewport(pe.copy(We).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,H,re,ee){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,H,re,ee),b.scissor(Qe.copy(Ce).multiplyScalar(me).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){b.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){st=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,re=!0){let ee=0;if(C){let te=!1;if(ve!==null){const Xe=ve.texture.format;te=v.has(Xe)}if(te){const Xe=ve.texture.type,je=g.has(Xe),qe=Be.getClearColor(),it=Be.getClearAlpha(),lt=qe.r,yt=qe.g,Rt=qe.b;je?(A[0]=lt,A[1]=yt,A[2]=Rt,A[3]=it,F.clearBufferuiv(F.COLOR,0,A)):(P[0]=lt,P[1]=yt,P[2]=Rt,P[3]=it,F.clearBufferiv(F.COLOR,0,P))}else ee|=F.COLOR_BUFFER_BIT}H&&(ee|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Be.dispose(),Ie.dispose(),Ue.dispose(),Z.dispose(),_e.dispose(),ge.dispose(),Ne.dispose(),de.dispose(),ze.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",kr),Je.removeEventListener("sessionend",Ki),ii.stop()};function Ut(C){C.preventDefault(),Gs("WebGLRenderer: Context Lost."),U=!0}function bt(){Gs("WebGLRenderer: Context Restored."),U=!1;const C=$.autoReset,H=nt.enabled,re=nt.autoUpdate,ee=nt.needsUpdate,te=nt.type;ut(),$.autoReset=C,nt.enabled=H,nt.autoUpdate=re,nt.needsUpdate=ee,nt.type=te}function Un(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const H=C.target;H.removeEventListener("dispose",Pn),ll(H)}function ll(C){ni(C),Z.remove(C)}function ni(C){const H=Z.get(C).programs;H!==void 0&&(H.forEach(function(re){ze.releaseProgram(re)}),C.isShaderMaterial&&ze.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,re,ee,te,Xe){H===null&&(H=Q);const je=te.isMesh&&te.matrixWorld.determinantAffine()<0,qe=Ka(C,H,re,ee,te);b.setMaterial(ee,je);let it=re.index,lt=1;if(ee.wireframe===!0){if(it=ne.getWireframeAttribute(re),it===void 0)return;lt=2}const yt=re.drawRange,Rt=re.attributes.position;let at=yt.start*lt,Dt=(yt.start+yt.count)*lt;Xe!==null&&(at=Math.max(at,Xe.start*lt),Dt=Math.min(Dt,(Xe.start+Xe.count)*lt)),it!==null?(at=Math.max(at,0),Dt=Math.min(Dt,it.count)):Rt!=null&&(at=Math.max(at,0),Dt=Math.min(Dt,Rt.count));const tn=Dt-at;if(tn<0||tn===1/0)return;Ne.setup(te,ee,qe,re,it);let kt,zt=Oe;if(it!==null&&(kt=ye.get(it),zt=xe,zt.setIndex(kt)),te.isMesh)ee.wireframe===!0?(b.setLineWidth(ee.wireframeLinewidth*Pe()),zt.setMode(F.LINES)):zt.setMode(F.TRIANGLES);else if(te.isLine){let ln=ee.linewidth;ln===void 0&&(ln=1),b.setLineWidth(ln*Pe()),te.isLineSegments?zt.setMode(F.LINES):te.isLineLoop?zt.setMode(F.LINE_LOOP):zt.setMode(F.LINE_STRIP)}else te.isPoints?zt.setMode(F.POINTS):te.isSprite&&zt.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))zt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ln=te._multiDrawStarts,Ke=te._multiDrawCounts,fn=te._multiDrawCount,Pt=it?ye.get(it).bytesPerElement:1,En=Z.get(ee).currentProgram.getUniforms();for(let On=0;On<fn;On++)En.setValue(F,"_gl_DrawID",On),zt.render(ln[On]/Pt,Ke[On])}else if(te.isInstancedMesh)zt.renderInstances(at,tn,te.count);else if(re.isInstancedBufferGeometry){const ln=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ke=Math.min(re.instanceCount,ln);zt.renderInstances(at,tn,Ke)}else zt.render(at,tn)};function zo(C,H,re,ee){V!==null&&C.isNodeMaterial&&V.setObject(ee,C),Me===!0&&He.setState(C,re,!1),C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Za(C,H,ee),C.side=Va,C.needsUpdate=!0,Za(C,H,ee),C.side=Jn):Za(C,H,ee)}this.compile=function(C,H,re=null){re===null&&(re=C),V!==null&&V.renderStart(C,H,re),T=Ue.get(re),T.init(H),_.push(T),re.traverseVisible(function(te){te.isLight&&te.layers.test(H.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),C!==re&&C.traverseVisible(function(te){te.isLight&&te.layers.test(H.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),be=this.localClippingEnabled,Me=He.init(this.clippingPlanes,be),Me===!0&&He.setGlobalState(this.clippingPlanes,H),V!==null&&nt.render(T.state.shadowsArray,re,H);const ee=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Xe=te.material;if(Xe)if(Array.isArray(Xe))for(let je=0;je<Xe.length;je++){const qe=Xe[je];zo(qe,re,H,te),ee.add(qe)}else zo(Xe,re,H,te),ee.add(Xe)}),T=_.pop(),V!==null&&V.renderEnd(),ee},this.compileAsync=function(C,H,re=null){const ee=this.compile(C,H,re);return new Promise(te=>{function Xe(){if(ee.forEach(function(je){const it=Z.get(je).currentProgram;(it===void 0||it.isReady())&&ee.delete(je)}),ee.size===0){te(C);return}setTimeout(Xe,10)}ke.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let $a=null;function Ja(C){$a&&$a(C)}function kr(){ii.stop()}function Ki(){ii.start()}const ii=new bh;ii.setAnimationLoop(Ja),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(C){$a=C,Je.setAnimationLoop(C),C===null?ii.stop():ii.start()},Je.addEventListener("sessionstart",kr),Je.addEventListener("sessionend",Ki),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(C,H);const re=Je.enabled===!0&&Je.isPresenting===!0,ee=w!==null&&(ve===null||re)&&w.begin(L,ve);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(H),H=Je.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,H,ve),T=Ue.get(C,_.length),T.init(H),T.state.textureUnits=le.getTextureUnits(),_.push(T),Ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ue.setFromProjectionMatrix(Ae,Ti,H.reversedDepth),be=this.localClippingEnabled,Me=He.init(this.clippingPlanes,be),S=Ie.get(C,I.length),S.init(),I.push(S),Je.enabled===!0&&Je.isPresenting===!0){const je=L.xr.getDepthSensingMesh();je!==null&&Hr(je,H,-1/0,L.sortObjects)}Hr(C,H,0,L.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Re,st),Te=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,Te&&Be.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&He.beginShadows();const te=T.state.shadowsArray;if(nt.render(te,C,H),Me===!0&&He.endShadows(),(ee&&w.hasRenderPass())===!1){const je=S.opaque,qe=S.transmissive;if(T.setupLights(),H.isArrayCamera){const it=H.cameras;if(qe.length>0)for(let lt=0,yt=it.length;lt<yt;lt++){const Rt=it[lt];qt(je,qe,C,Rt)}Te&&Be.render(C);for(let lt=0,yt=it.length;lt<yt;lt++){const Rt=it[lt];Go(S,C,Rt,Rt.viewport)}}else qe.length>0&&qt(je,qe,C,H),Te&&Be.render(C),Go(S,C,H)}ve!==null&&W===0&&(le.updateMultisampleRenderTarget(ve),le.updateRenderTargetMipmap(ve)),ee&&w.end(L),C.isScene===!0&&C.onAfterRender(L,C,H),Ne.resetDefaultState(),se=-1,ie=null,_.pop(),_.length>0?(T=_[_.length-1],le.setTextureUnits(T.state.textureUnits),Me===!0&&He.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,V!==null&&V.renderEnd()};function Hr(C,H,re,ee){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ue)){ee&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const je=ge.update(C),qe=C.material;qe.visible&&S.push(C,je,qe,re,R.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ue))){const je=ge.update(C),qe=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),R.copy(C.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),R.copy(je.boundingSphere.center)),R.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(qe)){const it=je.groups;for(let lt=0,yt=it.length;lt<yt;lt++){const Rt=it[lt],at=qe[Rt.materialIndex];at&&at.visible&&S.push(C,je,at,re,R.z,Rt,H)}}else qe.visible&&S.push(C,je,qe,re,R.z,null,H)}}const Xe=C.children;for(let je=0,qe=Xe.length;je<qe;je++)Hr(Xe[je],H,re,ee)}function Go(C,H,re,ee){const{opaque:te,transmissive:Xe,transparent:je}=C;T.setupLightsView(re),Me===!0&&He.setGlobalState(L.clippingPlanes,re),ee&&b.viewport(pe.copy(ee)),te.length>0&&$t(te,H,re),Xe.length>0&&$t(Xe,H,re),je.length>0&&$t(je,H,re),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function qt(C,H,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const at=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new Qn(1,1,{generateMipmaps:!0,type:at?ei:Vn,minFilter:Fa,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Xe=T.state.transmissionRenderTarget[ee.id],je=ee.viewport||pe;Xe.setSize(je.z*L.transmissionResolutionScale,je.w*L.transmissionResolutionScale);const qe=L.getRenderTarget(),it=L.getActiveCubeFace(),lt=L.getActiveMipmapLevel();L.setRenderTarget(Xe),L.getClearColor(vt),dt=L.getClearAlpha(),dt<1&&L.setClearColor(16777215,.5),L.clear(),Te&&Be.render(re);const yt=L.toneMapping;L.toneMapping=wi;const Rt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),Me===!0&&He.setGlobalState(L.clippingPlanes,ee),$t(C,re,ee),le.updateMultisampleRenderTarget(Xe),le.updateRenderTargetMipmap(Xe),ke.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Dt=0,tn=H.length;Dt<tn;Dt++){const kt=H[Dt],{object:zt,geometry:ln,material:Ke,group:fn}=kt;if(Ke.side===Jn&&zt.layers.test(ee.layers)){const Pt=Ke.side;Ke.side=Cn,Ke.needsUpdate=!0,Vo(zt,re,ee,ln,Ke,fn),Ke.side=Pt,Ke.needsUpdate=!0,at=!0}}at===!0&&(le.updateMultisampleRenderTarget(Xe),le.updateRenderTargetMipmap(Xe))}L.setRenderTarget(qe,it,lt),L.setClearColor(vt,dt),Rt!==void 0&&(ee.viewport=Rt),L.toneMapping=yt}function $t(C,H,re){const ee=H.isScene===!0?H.overrideMaterial:null;for(let te=0,Xe=C.length;te<Xe;te++){const je=C[te],{object:qe,geometry:it,group:lt}=je;let yt=je.material;yt.allowOverride===!0&&ee!==null&&(yt=ee),qe.layers.test(re.layers)&&Vo(qe,H,re,it,yt,lt)}}function Vo(C,H,re,ee,te,Xe){V!==null&&te.isNodeMaterial&&V.setObject(C,te),C.onBeforeRender(L,H,re,ee,te,Xe),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(L,H,re,ee,C,Xe),te.transparent===!0&&te.side===Jn&&te.forceSinglePass===!1?(te.side=Cn,te.needsUpdate=!0,L.renderBufferDirect(re,H,ee,te,C,Xe),te.side=Va,te.needsUpdate=!0,L.renderBufferDirect(re,H,ee,te,C,Xe),te.side=Jn):L.renderBufferDirect(re,H,ee,te,C,Xe),C.onAfterRender(L,H,re,ee,te,Xe)}function Za(C,H,re){H.isScene!==!0&&(H=Q);const ee=Z.get(C),te=T.state.lights,Xe=T.state.shadowsArray,je=te.state.version,qe=ze.getParameters(C,te.state,Xe,H,re,T.state.lightProbeGridArray),it=ze.getProgramCacheKey(qe);let lt=ee.programs;ee.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,ee.fog=H.fog;const yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ee.envMap=_e.get(C.envMap||ee.environment,yt),ee.envMapRotation=ee.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,lt===void 0&&(C.addEventListener("dispose",Pn),lt=new Map,ee.programs=lt);let Rt=lt.get(it);if(Rt!==void 0){if(ee.currentProgram===Rt&&ee.lightsStateVersion===je)return Ta(C,qe),Rt}else qe.uniforms=ze.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,re,qe),C.onBeforeCompile(qe,L),Rt=ze.acquireProgram(qe,it),lt.set(it,Rt),ee.uniforms=qe.uniforms;const at=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=He.uniform),Ta(C,qe),ee.needsLights=Qi(C),ee.lightsStateVersion=je,ee.needsLights&&(at.ambientLightColor.value=te.state.ambient,at.lightProbe.value=te.state.probe,at.sunLights.value=te.state.sun,at.sunLightShadows.value=te.state.sunShadow,at.directionalLights.value=te.state.directional,at.directionalLightShadows.value=te.state.directionalShadow,at.spotLights.value=te.state.spot,at.spotLightShadows.value=te.state.spotShadow,at.rectAreaLights.value=te.state.rectArea,at.ltc_1.value=te.state.rectAreaLTC1,at.ltc_2.value=te.state.rectAreaLTC2,at.pointLights.value=te.state.point,at.pointLightShadows.value=te.state.pointShadow,at.hemisphereLights.value=te.state.hemi,at.sunShadowMatrix.value=te.state.sunShadowMatrix,at.sunShadowCascade.value=te.state.sunShadowCascade,at.directionalShadowMatrix.value=te.state.directionalShadowMatrix,at.spotLightMatrix.value=te.state.spotLightMatrix,at.spotLightMap.value=te.state.spotLightMap,at.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=T.state.lightProbeGridArray.length>0,ee.currentProgram=Rt,ee.uniformsList=null,Rt}function ko(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Ls.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Ta(C,H){const re=Z.get(C);re.outputColorSpace=H.outputColorSpace,re.batching=H.batching,re.batchingColor=H.batchingColor,re.instancing=H.instancing,re.instancingColor=H.instancingColor,re.instancingMorph=H.instancingMorph,re.skinning=H.skinning,re.morphTargets=H.morphTargets,re.morphNormals=H.morphNormals,re.morphColors=H.morphColors,re.morphTargetsCount=H.morphTargetsCount,re.numClippingPlanes=H.numClippingPlanes,re.numIntersection=H.numClipIntersection,re.vertexAlphas=H.vertexAlphas,re.vertexTangents=H.vertexTangents,re.toneMapping=H.toneMapping}function bn(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let re=0,ee=C.length;re<ee;re++){const te=C[re];if(te.texture!==null&&te.boundingBox.containsPoint(y))return te}return null}function Ka(C,H,re,ee,te){H.isScene!==!0&&(H=Q),le.resetTextureUnits();const Xe=H.fog,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?H.environment:null,qe=ve===null?L.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:It.workingColorSpace,it=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,lt=_e.get(ee.envMap||je,it),yt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Rt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),at=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,tn=!!re.morphAttributes.color;let kt=wi;ee.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(kt=L.toneMapping);const zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ln=zt!==void 0?zt.length:0,Ke=Z.get(ee),fn=T.state.lights;if(Me===!0&&(be===!0||C!==ie)){const Ht=C===ie&&ee.id===se;He.setState(ee,C,Ht)}let Pt=!1;ee.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==fn.state.version||Ke.outputColorSpace!==qe||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isBatchedMesh&&Ke.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ke.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==lt||ee.fog===!0&&Ke.fog!==Xe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==He.numPlanes||Ke.numIntersection!==He.numIntersection)||Ke.vertexAlphas!==yt||Ke.vertexTangents!==Rt||Ke.morphTargets!==at||Ke.morphNormals!==Dt||Ke.morphColors!==tn||Ke.toneMapping!==kt||Ke.morphTargetsCount!==ln||!!Ke.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ke.__version=ee.version);let En=Ke.currentProgram;Pt===!0&&(En=Za(ee,H,te),V&&ee.isNodeMaterial&&V.onUpdateProgram(ee,En,Ke));let On=!1,ai=!1,ji=!1;const Ft=En.getUniforms(),Kt=Ke.uniforms;if(b.useProgram(En.program)&&(On=!0,ai=!0,ji=!0),ee.id!==se&&(se=ee.id,ai=!0),Ke.needsLights){const Ht=bn(T.state.lightProbeGridArray,te);Ke.lightProbeGrid!==Ht&&(Ke.lightProbeGrid=Ht,ai=!0)}if(On||ie!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ft.setValue(F,"projectionMatrix",C.projectionMatrix),Ft.setValue(F,"viewMatrix",C.matrixWorldInverse);const vi=Ft.map.cameraPosition;vi!==void 0&&vi.setValue(F,Se.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,ai=!0,ji=!0)}if(Ke.needsLights&&(fn.state.sunShadowMap.length>0&&Ft.setValue(F,"sunShadowMap",fn.state.sunShadowMap,le),fn.state.directionalShadowMap.length>0&&Ft.setValue(F,"directionalShadowMap",fn.state.directionalShadowMap,le),fn.state.spotShadowMap.length>0&&Ft.setValue(F,"spotShadowMap",fn.state.spotShadowMap,le),fn.state.pointShadowMap.length>0&&Ft.setValue(F,"pointShadowMap",fn.state.pointShadowMap,le)),te.isSkinnedMesh){Ft.setOptional(F,te,"bindMatrix"),Ft.setOptional(F,te,"bindMatrixInverse");const Ht=te.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ft.setValue(F,"boneTexture",Ht.boneTexture,le))}te.isBatchedMesh&&(Ft.setOptional(F,te,"batchingTexture"),Ft.setValue(F,"batchingTexture",te._matricesTexture,le),Ft.setOptional(F,te,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",te._indirectTexture,le),Ft.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",te._colorsTexture,le));const xi=re.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&X.update(te,re,En),(ai||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,Ft.setValue(F,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=kM()),ai){if(Ft.setValue(F,"toneMappingExposure",L.toneMappingExposure),Ke.needsLights&&wa(Kt,ji),Xe&&ee.fog===!0&&Ze.refreshFogUniforms(Kt,Xe),Ze.refreshMaterialUniforms(Kt,ee,me,ce,T.state.transmissionRenderTarget[C.id]),Ke.needsLights&&Ke.lightProbeGrid){const Ht=Ke.lightProbeGrid;Kt.probesSH.value=Ht.texture,Kt.probesMin.value.copy(Ht.boundingBox.min),Kt.probesMax.value.copy(Ht.boundingBox.max),Kt.probesResolution.value.copy(Ht.resolution)}Ls.upload(F,ko(Ke),Kt,le)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ls.upload(F,ko(Ke),Kt,le),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ft.setValue(F,"center",te.center),Ft.setValue(F,"modelViewMatrix",te.modelViewMatrix),Ft.setValue(F,"normalMatrix",te.normalMatrix),Ft.setValue(F,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const Ht=ee.uniformsGroups;for(let vi=0,Xn=Ht.length;vi<Xn;vi++){const Wr=Ht[vi];de.update(Wr,En),de.bind(Wr,En)}}return En}function wa(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Qi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(C,H,re){const ee=Z.get(C);ee.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=H,Z.get(C.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const re=Z.get(C);re.__webglFramebuffer=H,re.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,re=0){ve=C,ae=H,W=re;let ee=null,te=!1,Xe=!1;if(C){const qe=Z.get(C);if(qe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,qe.__webglFramebuffer),pe.copy(C.viewport),Qe.copy(C.scissor),Ve=C.scissorTest,b.viewport(pe),b.scissor(Qe),b.setScissorTest(Ve),se=-1;return}else if(qe.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(qe.__hasExternalTextures)le.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const yt=C.depthTexture;if(qe.__boundDepthTexture!==yt){if(yt!==null&&Z.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Xe=!0);const lt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[H])?ee=lt[H][re]:ee=lt[H],te=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?ee=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?ee=lt[re]:ee=lt,pe.copy(C.viewport),Qe.copy(C.scissor),Ve=C.scissorTest}else pe.copy(We).multiplyScalar(me).floor(),Qe.copy(Ce).multiplyScalar(me).floor(),Ve=ft;if(re!==0&&(ee=Y),b.bindFramebuffer(F.FRAMEBUFFER,ee)&&b.drawBuffers(C,ee),b.viewport(pe),b.scissor(Qe),b.setScissorTest(Ve),te){const qe=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,qe.__webglTexture,re)}else if(Xe){const qe=H;for(let it=0;it<C.textures.length;it++){const lt=Z.get(C.textures[it]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+it,lt.__webglTexture,re,qe)}}else if(C!==null&&re!==0){const qe=Z.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,re)}se=-1};function Ho(C){const H=Z.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=D.textureFormatReadable(C.format),H.__typeReadable=D.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,re,ee,te,Xe,je,qe=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(it=it[je]),it){b.bindFramebuffer(F.FRAMEBUFFER,it);try{const lt=C.textures[qe],yt=lt.format,Rt=lt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+qe);const at=Ho(lt);if(at.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(at.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-ee&&re>=0&&re<=C.height-te&&F.readPixels(H,re,ee,te,l.convert(yt),l.convert(Rt),Xe)}finally{const lt=ve!==null?Z.get(ve).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(C,H,re,ee,te,Xe,je,qe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(it=it[je]),it)if(H>=0&&H<=C.width-ee&&re>=0&&re<=C.height-te){b.bindFramebuffer(F.FRAMEBUFFER,it);const lt=C.textures[qe],yt=lt.format,Rt=lt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+qe);const at=Ho(lt);if(at.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(at.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.bufferData(F.PIXEL_PACK_BUFFER,Xe.byteLength,F.STREAM_READ),F.readPixels(H,re,ee,te,l.convert(yt),l.convert(Rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const tn=ve!==null?Z.get(ve).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,tn);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await a0(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Xe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Dt),F.deleteSync(kt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,re=0){const ee=Math.pow(2,-re),te=Math.floor(C.image.width*ee),Xe=Math.floor(C.image.height*ee),je=H!==null?H.x:0,qe=H!==null?H.y:0;le.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,je,qe,te,Xe),b.unbindTexture()},this.copyTextureToTexture=function(C,H,re=null,ee=null,te=0,Xe=0){let je,qe,it,lt,yt,Rt,at,Dt,tn;const kt=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(re!==null)je=re.max.x-re.min.x,qe=re.max.y-re.min.y,it=re.isBox3?re.max.z-re.min.z:1,lt=re.min.x,yt=re.min.y,Rt=re.isBox3?re.min.z:0;else{const Kt=Math.pow(2,-te);je=Math.floor(kt.width*Kt),qe=Math.floor(kt.height*Kt),C.isDataArrayTexture?it=kt.depth:C.isData3DTexture?it=Math.floor(kt.depth*Kt):it=1,lt=0,yt=0,Rt=0}ee!==null?(at=ee.x,Dt=ee.y,tn=ee.z):(at=0,Dt=0,tn=0);const zt=l.convert(H.format),ln=l.convert(H.type);let Ke;H.isData3DTexture?(le.setTexture3D(H,0),Ke=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(le.setTexture2DArray(H,0),Ke=F.TEXTURE_2D_ARRAY):(le.setTexture2D(H,0),Ke=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const fn=b.getParameter(F.UNPACK_ROW_LENGTH),Pt=b.getParameter(F.UNPACK_IMAGE_HEIGHT),En=b.getParameter(F.UNPACK_SKIP_PIXELS),On=b.getParameter(F.UNPACK_SKIP_ROWS),ai=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,kt.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),b.pixelStorei(F.UNPACK_SKIP_ROWS,yt),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const ji=C.isDataArrayTexture||C.isData3DTexture,Ft=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const Kt=Z.get(C),xi=Z.get(H),Ht=Z.get(Kt.__renderTarget),vi=Z.get(xi.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Ht.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Xn=0;Xn<it;Xn++)ji&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,te,Rt+Xn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,Xe,tn+Xn)),F.blitFramebuffer(lt,yt,je,qe,at,Dt,je,qe,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||Z.has(C)){const Kt=Z.get(C),xi=Z.get(H);b.bindFramebuffer(F.READ_FRAMEBUFFER,z),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let Ht=0;Ht<it;Ht++)ji?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,te,Rt+Ht):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,te),Ft?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xi.__webglTexture,Xe,tn+Ht):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xi.__webglTexture,Xe),te!==0?F.blitFramebuffer(lt,yt,je,qe,at,Dt,je,qe,F.COLOR_BUFFER_BIT,F.NEAREST):Ft?F.copyTexSubImage3D(Ke,Xe,at,Dt,tn+Ht,lt,yt,je,qe):F.copyTexSubImage2D(Ke,Xe,at,Dt,lt,yt,je,qe);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ft?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ke,Xe,at,Dt,tn,je,qe,it,zt,ln,kt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Ke,Xe,at,Dt,tn,je,qe,it,zt,kt.data):F.texSubImage3D(Ke,Xe,at,Dt,tn,je,qe,it,zt,ln,kt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Xe,at,Dt,je,qe,zt,ln,kt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Xe,at,Dt,kt.width,kt.height,zt,kt.data):F.texSubImage2D(F.TEXTURE_2D,Xe,at,Dt,je,qe,zt,ln,kt);b.pixelStorei(F.UNPACK_ROW_LENGTH,fn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(F.UNPACK_SKIP_PIXELS,En),b.pixelStorei(F.UNPACK_SKIP_ROWS,On),b.pixelStorei(F.UNPACK_SKIP_IMAGES,ai),Xe===0&&H.generateMipmaps&&F.generateMipmap(Ke),b.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){ae=0,W=0,ve=null,b.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const sd={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},ha={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},pn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais compram melhorias permanentes na Oficina da nave."}]}],Hs=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],io={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},vr=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),Mr=(n,e,t)=>({copa:[n,e],copa2:t}),ao=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Co=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:vr(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:vr(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:vr(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:vr(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:vr(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:vr(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:Mr(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:Mr(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:Mr(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:Mr(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:Mr(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:Mr(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:ao(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:ao(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:ao(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:ao(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:ao(2755082,16769162,16756843)}],vo=n=>Co.find(e=>e.id===n),WM=n=>Co.find(e=>e.cat===n&&e.padrao),XM=n=>"#"+n.toString(16).padStart(6,"0"),Ih="curriculo-cassino-v1",ro=10,qM=100,ld=50,Kc=9,Gn=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],Lh=5,YM=["comum","rara","epica","lendaria"];function $M(){const n={};for(const e of Hs)n[e.id]=WM(e.id).id;return{fichas:qM,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function JM(){const n=$M();try{const e=JSON.parse(localStorage.getItem(Ih));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>vo(a)):[],i={...n.equipadas};for(const a of Hs){const r=e.equipadas?.[a.id],s=r&&vo(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function ZM(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,E)=>{i(E),t.fillRect(p,m,1,1)},r=(p,m,E,v)=>{i(v);for(let g=-E-1;g<=E+1;g++)for(let A=-E-1;A<=E+1;A++)A*A+g*g<=E*E+.5&&t.fillRect(p+A,m+g,1,1)},s=(p,m,E,v,g)=>{i(g);for(let A=0;A<16;A++)for(let P=0;P<16;P++){const y=(P+.5-p)/E,S=(A+.5-m)/v;y*y+S*S<=1&&t.fillRect(P,A,1,1)}},o=(p,m)=>{i(m);for(let E=0;E<16;E++)for(let v=0;v<16;v++){const g=v+.5,A=E+.5;let P=!1;for(let y=0,S=p.length-1;y<p.length;S=y++){const[T,I]=p[y],[_,w]=p[S];I>A!=w>A&&g<(_-T)*(A-I)/(w-I)+T&&(P=!P)}P&&t.fillRect(v,E,1,1)}},c=(p,m,E,v,g)=>{i(g);const A=Math.max(Math.abs(E-p),Math.abs(v-m));for(let P=0;P<=A;P++)t.fillRect(Math.round(p+(E-p)*P/A),Math.round(m+(v-m)*P/A),1,1)};switch(n){case"cereja":c(5,9,9,3,"#4f8a3a"),c(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const E=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(E)*v,8.5+Math.sin(E)*v])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const f=t.getImageData(0,0,16,16),u=f.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let ys=null,bs=null;function rl(){return ys??=new(window.AudioContext||window.webkitAudioContext),ys.state==="suspended"&&ys.resume(),ys}function Si(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{const s=rl(),o=s.currentTime+r,c=s.createOscillator(),f=s.createGain();c.type=i,c.frequency.value=e,f.gain.setValueAtTime(a,o),f.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(f).connect(s.destination),c.start(o),c.stop(o+t+.02)}catch{}}function _r(n,e,t=.03,i=.07,a=0){if(n.som)try{const r=rl();if(!bs){bs=r.createBuffer(1,Math.floor(r.sampleRate*.4),r.sampleRate);const u=bs.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=r.currentTime+a,o=r.createBufferSource(),c=r.createBiquadFilter(),f=r.createGain();o.buffer=bs,c.type="bandpass",c.frequency.value=e,c.Q.value=1.4,f.gain.setValueAtTime(i,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(c).connect(f).connect(r.destination),o.start(s,Math.random()*.3),o.stop(s+t+.02)}catch{}}function Zl(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const r=rl(),s=r.currentTime+a,o=r.createOscillator(),c=r.createGain();o.type="sine",o.frequency.setValueAtTime(e,s),o.frequency.exponentialRampToValueAtTime(e*.4,s+t),c.gain.setValueAtTime(i,s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(c).connect(r.destination),o.start(s),o.stop(s+t+.02)}catch{}}function KM(n){if(!n.som)return null;try{const e=rl(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),r=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(r).connect(e.destination),i.start(t),{sair(s=.4){const o=e.currentTime;r.gain.cancelScheduledValues(o),r.gain.setValueAtTime(.045,o),r.gain.linearRampToValueAtTime(1e-4,o+s),i.frequency.cancelScheduledValues(o),i.frequency.setValueAtTime(84,o),i.frequency.linearRampToValueAtTime(40,o+s),i.stop(o+s+.05)}}}catch{return null}}const Oi=()=>Gn[Math.floor(Math.random()*Gn.length)],Kl=()=>{let n=Math.random()*Gn.reduce((e,t)=>e+t.peso,0);for(const e of Gn)if(n-=e.peso,n<=0)return e;return Gn[0]},Dh=(n,e)=>Co.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function QM(n){for(const e of YM)if(Dh(n,e).length){const t=Gn.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function jM(n){let e=[Kl(),Kl(),Kl()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=Kc){const a=QM(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=Dh(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=Lh);return i}function e_({aoMudarSkins:n,aoMudarFichas:e}){const t=JM(),i=()=>{try{localStorage.setItem(Ih,JSON.stringify(t))}catch{}},a=(Q,Te,Pe)=>{const F=document.createElement(Q);return Te&&(F.className=Te),Pe!=null&&(F.textContent=Pe),F},r=Object.fromEntries(Gn.map(Q=>[Q.id,ZM(Q.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),c=a("button","cas-x","X");c.title="Fechar (Esc)";const f=a("div","cas-letreiro"),u=a("div","lampadas"),h=(Q,Te)=>{const Pe=a("i",Q);return Pe.style.setProperty("--i",Te),Pe};for(let Q=0;Q<9;Q++)u.append(h("lampada",Q));f.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),E=m.map(Q=>{const Te=document.createElement("canvas");return Te.width=16,Te.height=48,Q.append(Te),p.append(Q),Te});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),g=a("div","cas-lcd"),A=a("div","cas-msg","PUXE A ALAVANCA!"),P=a("div","cas-fichas"),y=a("b");P.append(a("i","moeda"),y,a("span",null,"FICHAS")),g.append(A,P);const S=a("div","cas-premio");S.hidden=!0;const T=a("div","cas-botoes"),I=(Q,Te,Pe,F=!1)=>{const ot=a("div","cas-bw"+(F?" grande":"")),ke=a("i","led"),D=a("button",`cas-b3d ${Te}${F?" grande":""}`,Q);return D.title=Pe,ot.append(ke,D),T.append(ot),{b:D,led:ke}},{b:_,led:w}=I("?","azul","Tabela de prêmios"),{b:L,led:U}=I("SKINS","rosa","Coleção de skins (C)"),{b:V,led:Y}=I("GIRAR","vermelho",`Girar (-${ro} fichas) · Espaço`,!0),{b:z,led:J}=I("SOM","amarelo","Ligar ou desligar o som");U.classList.add("on");const ae=a("button","cas-b3d verde largo",`+${ld} FICHAS DE CORTESIA`);ae.hidden=!0,T.append(ae);const W=a("div","cas-luzes");for(let Q=0;Q<14;Q++)W.append(h("",Q));v.append(g,S,T,W);const ve=a("button","cas-alavanca");ve.title="Puxar a alavanca · Espaço";const se=a("i","braco");se.append(a("i","haste"),a("i","bola")),ve.append(a("i","suporte"),se);const ie=a("div","cas-bandeja");ie.append(a("i","fenda"));const pe=a("div","cas-tabela");pe.hidden=!0;for(const Q of Gn){const Te=a("div","cas-linha"),Pe=r[Q.id].cloneNode();Pe.getContext("2d").drawImage(r[Q.id],0,0),Te.append(Pe,a("span",null,`x3 = ${Q.premio}`),a("small",null,io[Q.tier].nome.toLowerCase())),pe.append(Te)}pe.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${Lh} · a cada ${Kc+1} giros sem trio, o próximo é garantido`)),o.append(c,f,d,v,ve,ie,pe,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const Qe=a("div","cas-colecao-caixa");Qe.hidden=!0;const Ve=a("div","cas-colecao");Qe.append(Ve),s.append(o,Qe),document.body.append(s);let vt=!1,dt=!1,mt=!1;function ce(Q,Te,Pe){const F=E[Q].getContext("2d");F.clearRect(0,0,16,48);const ot=Math.floor(Pe),ke=Pe-ot;for(let D=0;D<4;D++){const b=Te[ot+D];b&&F.drawImage(r[b.id],0,Math.round((D-ke)*16))}}const me=(Q,Te)=>ce(Q,Te,0);function Re(){y.textContent=String(t.fichas),e?.(t.fichas);const Q=t.fichas<ro;V.disabled=dt||Q,ve.disabled=dt||Q,ae.hidden=!Q||dt,z.classList.toggle("apagado",!t.som),J.classList.toggle("on",t.som),Y.classList.toggle("on",!dt&&!Q),w.classList.toggle("on",!pe.hidden),o.classList.toggle("girando",dt),o.classList.toggle("pronto",!dt&&!Q),o.classList.toggle("sem-ficha",Q)}function st(Q,Te=""){A.textContent=Q,A.className="cas-msg "+Te}function We(){Ve.replaceChildren();const Q=a("div","cas-cabecalho"),Te=Co.filter(F=>!F.padrao).length,Pe=a("button","cas-btn","VOLTAR");Pe.onclick=()=>ft(!1),Q.append(a("h3",null,`SKINS (${t.skins.length}/${Te})`),Pe),Ve.append(Q);for(const F of Hs){Ve.append(a("h4",null,F.nome.toUpperCase()));const ot=a("div","cas-grade");for(const ke of Co.filter(D=>D.cat===F.id)){const D=ke.padrao||t.skins.includes(ke.id),b=t.equipadas[F.id]===ke.id,$=a("div","cas-card"+(b?" equipada":"")+(D?"":" bloqueada"));$.style.setProperty("--r",io[ke.raridade].cor);const Z=a("div","amostra"),le=F.id==="planeta"?[ke.cores.marFundo,ke.cores.marRaso,ke.cores.areia,ke.cores.grama0,ke.cores.grama2]:F.id==="arvores"?[ke.cores.copa[0],ke.cores.copa[1],ke.cores.copa2]:[ke.cores.fundo,ke.cores.estrelas,ke.cores.nuvens];for(const ye of le){const ne=a("i");ne.style.background=D?XM(ye):"#2a2440",Z.append(ne)}$.append(Z,a("b",null,D?ke.nome:"???"),a("small",null,io[ke.raridade].nome));const _e=a("button","cas-btn pequeno",b?"EQUIPADA":D?"EQUIPAR":"TRAVADA");_e.disabled=!D||b,_e.onclick=()=>Ce(ke),$.append(_e),ot.append($)}Ve.append(ot)}}function Ce(Q){t.equipadas[Q.cat]=Q.id,i(),n({...t.equipadas}),Si(t,660,.06),mt&&We()}function ft(Q){mt=Q,o.hidden=Q,Qe.hidden=!Q,Q?We():V.focus()}function ue(Q=0){if(!vt||dt||t.fichas<ro)return;t.fichas-=ro,t.giros+=1;const Te=jM(t);dt=!0,S.hidden=!0,p.classList.remove("vitoria"),o.classList.remove("vitoria"),st("GIRANDO..."),Re();const Pe=[Oi(),Oi(),Oi()],F=[Oi(),Oi(),Oi()];for(const _e of[Pe,F])_e[0]===_e[1]&&_e[1]===_e[2]&&(_e[2]=Gn[(Gn.indexOf(_e[2])+1)%Gn.length]);const ot=14,ke=450,D=[1100,1600,2100],b=D.map(_e=>Math.round(ot*(_e-ke)/1e3)+3),$=Te.simbolos.map((_e,ye)=>{const ne=[Pe[ye],_e,F[ye]];for(;ne.length<b[ye]+3;)ne.push(Oi());return ne}),Z=(_e,ye)=>{const ne=D[_e]-ke;return ye<ne?b[_e]-ot*ye/1e3:3*(1-Math.min(1,(ye-ne)/ke))**3},le=()=>{const _e=performance.now(),ye=[!1,!1,!1],ne=[-1,-1,-1];let ge=!1;const ze=KM(t);for(const Ie of m)Ie.classList.add("girando");const Ze=Ie=>{const Ue=Math.max(0,Ie-_e);for(let He=0;He<3;He++)if(!ye[He])if(Ue>=D[He])ye[He]=!0,m[He].classList.remove("girando"),ce(He,$[He],0),Zl(t,150-He*12,.13,.11),_r(t,1100+He*350,.06,.09),Si(t,330+He*110,.1,"square",.025);else{const nt=Z(He,Ue);ce(He,$[He],nt);const Be=Math.floor(nt);Be!==ne[He]&&(ne[He]>=0&&_r(t,1500+He*450,.022,.05),ne[He]=Be)}!ge&&Ue>=D[2]-ke&&(ge=!0,ze?.sair(ke/1e3+.1)),ye.every(Boolean)?be(Te):requestAnimationFrame(Ze)};requestAnimationFrame(Ze)};Q>0?setTimeout(le,Q):le()}function Me(Q){const Te=Math.min(10,Math.max(2,Math.ceil(Q/25)));for(let Pe=0;Pe<Te;Pe++){const F=a("i","moeda caindo");F.style.left=`${14+Math.random()*68}%`,F.style.animationDelay=`${Pe*.09}s`,F.addEventListener("animationend",()=>F.remove()),ie.append(F),_r(t,3400+Math.random()*900,.04,.05,.55+Pe*.09)}}function be(Q){if(dt=!1,t.fichas+=Q.fichas,t.semTrio=Q.tipo==="trio"?0:t.semTrio+1,Q.skin&&t.skins.push(Q.skin.id),i(),Q.fichas>0&&Me(Q.fichas),Q.tipo==="trio"?(st(`TRIO! +${Q.fichas}`,"ganhou"),p.classList.add("vitoria"),o.classList.add("vitoria"),[523,659,784,1047].forEach((Te,Pe)=>Si(t,Te,.14,"square",.05,Pe*.11))):Q.tipo==="par"?(st(`PAR! +${Q.fichas}`,"par"),Si(t,523,.1),Si(t,659,.1,"square",.04,.1)):st(t.semTrio>=Kc?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),Q.skin){S.replaceChildren(),S.style.setProperty("--r",io[Q.skin.raridade].cor);const Te=Hs.find(F=>F.id===Q.skin.cat).nome;S.append(a("b",null,"NOVA SKIN!"),a("span",null,`${Te}: ${Q.skin.nome} (${io[Q.skin.raridade].nome})`));const Pe=a("button","cas-mini","EQUIPAR");Pe.onclick=()=>{Ce(Q.skin),Pe.disabled=!0,Pe.textContent="OK"},S.append(Pe),S.hidden=!1,[784,988,1175,1568].forEach((F,ot)=>Si(t,F,.18,"triangle",.06,.5+ot*.12))}Re()}function Ae(){if(!(!vt||dt||t.fichas<ro)){ve.classList.add("puxada"),o.classList.add("puxando"),setTimeout(()=>{ve.classList.remove("puxada"),o.classList.remove("puxando")},1150);for(let Q=0;Q<5;Q++)_r(t,2600-Q*150,.03,.07,.07+Q*.045);Zl(t,95,.2,.15,.34),_r(t,900,.07,.1,.34),Zl(t,330,.1,.05,.76),_r(t,2200,.05,.06,.9),ue(360)}}function Se(){vt||(vt=!0,s.classList.add("aberto"),pe.hidden=!0,ft(!1),Re(),V.focus())}function R(){!vt||dt||(vt=!1,s.classList.remove("aberto"))}V.onclick=()=>ue(),ve.onclick=Ae,_.onclick=()=>{pe.hidden=!pe.hidden,Re()},L.onclick=()=>ft(!0),c.onclick=R,ae.onclick=()=>{t.fichas+=ld,i(),Re(),st("FICHAS DE CORTESIA!"),Si(t,880,.1)},z.onclick=()=>{t.som=!t.som,i(),Re(),Si(t,660,.06)},s.addEventListener("pointerdown",Q=>{Q.target===s&&R()}),window.addEventListener("keydown",Q=>{vt&&(Q.code==="Escape"?(Q.preventDefault(),mt?ft(!1):R()):Q.code==="Space"&&!mt&&![L,_,z,ae,c].includes(document.activeElement)?(Q.preventDefault(),Ae()):Q.code==="KeyC"&&(Q.preventDefault(),ft(!mt)))},!0);for(let Q=0;Q<3;Q++)me(Q,[Oi(),Gn[Q*2%Gn.length],Oi()]);return Re(),n({...t.equipadas}),{abrir:Se,fechar:R,estaAberto:()=>vt,adicionarFichas:Q=>{t.fichas+=Q,i(),Re()},bip:(...Q)=>Si(t,...Q),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Re(),t.som&&Si(t,660,.06),t.som)}}function Sn(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,c,f){a(f),i.fillRect(r,s,o,c)},disco(r,s,o,c){a(c);for(let f=-o-1;f<=o+1;f++)for(let u=-o-1;u<=o+1;u++)u*u+f*f<=o*o+.5&&i.fillRect(r+u,s+f,1,1)},elipse(r,s,o,c,f){a(f);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/c;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let c=0;c<n;c++){const f=c+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,E]=r[d],[v,g]=r[p];E>u!=g>u&&f<(v-m)*(u-E)/(g-E)+m&&(h=!h)}h&&i.fillRect(c,o,1,1)}},linha(r,s,o,c,f){a(f);const u=Math.max(Math.abs(o-r),Math.abs(c-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(c-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,c=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,f=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!c(h,u)&&(c(h+1,u)||c(h-1,u)||c(h,u+1)||c(h,u-1))&&f.push([h,u]);a(r);for(const[u,h]of f)i.fillRect(u,h,1,1);return this}}}function Ef(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function Nt(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const cd=n=>n*n*(3-2*n);function Hn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=cd(n-i),s=cd(e-a),o=Nt(i,a,t),c=Nt(i+1,a,t),f=Nt(i,a+1,t),u=Nt(i+1,a+1,t);return o+(c-o)*r+(f-o)*s+(o-c-f+u)*r*s}const Af=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Nh=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function t_(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=Sn(a,r),o=a/2,c=r/2,f=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(c+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};f(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(Nt(d,e,1)-.5)*1.3,y:(Nt(d,e,2)-.5)*1.3,r:.12+Nt(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-c)/t,E=p*p+m*m;if(E>1)continue;const v=Math.sqrt(1-E),A=p*-.5+m*-.55+v*.67+(Af[h%4*4+d%4]-.5)*.24;let P=A<.1?0:A<.4?1:A<.68?2:3,y=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+Hn(p*1.6+e,m*3,5)*2.2)>.15&&(y=n.palB),n.terra&&Hn(p*2.4+e,m*2.4,7)>.52&&(y=n.palB);let S;n.nuvens&&Hn(p*3+e,m*3,9)>.62&&(S=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][P]),u.some(T=>(p-T.x)**2+(m-T.y)**2<T.r*T.r)&&(P=Math.max(0,P-1)),n.lava&&Math.abs(Hn(p*3.2+e,m*3.2,11)-.5)<.035&&(S=P>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,S||y[P])}return f(!0),s.contorno("#0b1026").c}const n_=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],i_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],a_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],Mn=(n,e,t)=>(Hn(n,e,t)*.5+Hn(n*2,e*2,t+1)*.25+Hn(n*4,e*4,t+2)*.125+Hn(n*8,e*8,t+3)*.0625)/.9375;function zn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let c=0;c<n;c++){const f=t(c,o,(c+.5)/n*2-1,(o+.5)/e*2-1);if(!f)continue;const u=Math.min(c,n-1-c,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<Af[o%4*4+c%4])continue;const h=(o*n+c)*4;s[h]=f[0],s[h+1]=f[1],s[h+2]=f[2],s[h+3]=f[3]}return a.putImageData(r,0,0),i}const _n=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(Af[t%4*4+e%4]-.5)*.9+.5))),Tn=(n,e,t)=>[...n[t-1],e[t-1]];function li(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function Ql(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(Nt(r,t,1)*n.width),Math.floor(Nt(r,t,2)*n.height),1,1)}function r_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[c,f]=n[r];o>t!=f>t&&e<(c-s)*(t-o)/(f-o)+s&&(i=!i)}return i}const o_={orion(){const n=zn(150,112,(e,t,i,a)=>{const r=i*1.18+(Mn(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(Mn(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),c=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),f=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=Mn(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=_n(Math.min(1,(o*.9+c+f)*(.3+u*1.2)+h),e,t,5);return d?Tn([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});Ql(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])li(n,e,t,1);return li(n,.2,.2,3,"#bcd0ff"),li(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=zn(130,124,(t,i,a,r)=>{for(let f=0;f<n.length;f++){const u=n[f],h=(Mn(r*2.5+f*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(Mn(a*6+f,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const E=(u.cx+h+d-a)/(2*d),v=Mn(a*9,r*9,70),g=E<.14+v*.12?[235,160,70]:E<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[g[0],g[1],g[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const E=_n((.16-m)/.16*.9,t,i,3);if(E)return Tn([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],E)}}const s=Mn(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),c=_n(o,t,i,3);return c?Tn(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],c):null});return Ql(e,25,9),li(e,.49,.13,2,"#bff6ff"),li(e,.24,.4,1,"#ffe0b0"),li(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=zn(110,104,(i,a,r,s)=>{const o=r*n+s*e,c=-r*e+s*n,f=Math.hypot(o/.92,c/.74);if(f>1||f>.78&&Hn(o*9,c*9,93)<(f-.78)*4.5)return null;const u=1-Math.abs(Hn(o*8+3,c*8,90)-.5)*2,h=1-Math.abs(Hn(o*14,c*14+5,91)-.5)*2;if(u>.85&&f>.3)return[255,130,55,240];if(h>.92&&f>.2)return[120,200,255,220];const d=_n((1-f)*.7*(.4+Mn(o*3,c*3,92)),i,a,3);return d?Tn([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return li(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=zn(112,112,(t,i,a,r)=>{if(r_(n,t+.5,i+.5))return[10,5,18,255];const s=Mn(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),c=_n(o,t,i,4);return c?Tn([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],c):null});return Ql(e,30,13),li(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return zn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,c=Math.hypot(s,o),f=Math.atan2(o,s),u=.5+.5*Math.sin(2*f-c*10),h=Math.max(0,1-c)*(.25+.75*u)*(.5+Mn(s*4,o*4,110)),d=Math.abs(c-.55)<.06?.5*Hn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-c*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=_n(p,t,i,5);return m?Tn([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return zn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*Hn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=_n(a*1.1+r+s,n,e,5);return o?Tn([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=zn(110,100,(t,i,a,r)=>{let s=0;for(const[c,f,u]of n)s+=Math.exp(-Math.hypot((t/110-c)*1.1,i/100-f)/.14*(7-u*.4));const o=_n(Math.min(1,s*(.4+Mn(a*3,r*3,125))),t,i,4);return o?Tn([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)li(e,t,i,a,"#cfe0ff");return e},helice(){const n=zn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*Mn(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*Mn(i*6,a*6,121),c=Math.exp(-(((r-.62)/.13)**2)),f=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=_n(Math.min(1,(c+f+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return li(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=zn(150,100,(i,a,r,s)=>{const o=r*n+s*e,c=-r*e+s*n,f=Math.hypot(r,s),u=Math.exp(-((c/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*Mn(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-f*9),m=_n(Math.min(1,p+u+h+d),i,a,5);return m?Tn([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return li(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(zn(180,110,(s,o)=>{const c=s+.5-90,f=o+.5-55,u=Math.hypot(c,f);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=Mn(c*.06-r*.18,f*.4,140);let d=0;const p=5.5*(1-Math.abs(c)/95);if(Math.abs(c)>17&&Math.abs(c)<90&&Math.abs(f)<p&&(d=1-Math.abs(f)/p),u>19.5&&u<36&&f<0&&Math.abs(f)>Math.abs(c)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&f>0&&f>Math.abs(c)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=_n(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return v?Tn([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-c/95),E=_n(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return E?Tn([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],E):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),c=Math.cos(.5),f=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,E,v,g])=>{let A=m*s-g*o;const P=m*o+g*s;let y=E*c-v*f,S=E*f+v*c;const T=A*u+S*h;S=-A*h+S*u,A=T;const I=2.6/(2.6-P*.9),_=3.6/(3.6-S*I*.7);return{x:124/2+A*I*_*19,y:124/2+y*I*_*19,w:P}}),p=Sn(124,124);for(const[m,E]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${E})`);for(const[m,E]of i){const v=(d[m].w+d[E].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[E].x),Math.round(d[E].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),c=Math.sin(s);a.push(zn(150,150,(f,u)=>{const h=f+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*c,E=-h*c+d*o,v=1.1+.07*Math.abs(m),g=Math.abs(m)<70?Math.exp(-((E/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,A=Math.exp(-p/11)*.8,P=Math.abs(p-34)<.8?.35:0,y=_n(Math.min(1,g+A+P),f,u,5);return y?Tn([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],y):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(zn(120,120,(s,o)=>{const c=s+.5-60,f=o+.5-60,u=Math.hypot(c,f),h=Math.atan2(f,c);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const E=_n(Math.exp(-(u-47.5)/3)*.55,s,o,2);return E?Tn([[120,90,220],[190,160,255]],[60,110],E):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=_n(Math.min(1,p),s,o,4);return Tn([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+Nt(s,150,1)*146,10+Nt(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,c],[f,u])=>{const h=f-o,d=u-c,p=Math.max(0,Math.min(1,((r-o)*h+(s-c)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(c+d*p))};return zn(170,124,(r,s,o,c)=>{let f=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);f+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+Mn(r*.2,s*.2,151))}for(const[h,d]of t)f+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=_n(Math.min(1,f),r,s,4);return u?Tn([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},s_={},l_=n=>s_[n]??=o_[n](),Lr=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let c_=null;const Uh=()=>c_??=Nh.map((n,e)=>t_(n,e*13+3));function f_(n,e){const t=Uh(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,c=-1,f=1;function u(m){if(f<1&&(f=Math.min(1,f+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const E=.35+Math.random()*.3,v=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(E)*v,vy:Math.sin(E)*v,vida:0,max:1.4})}for(const E of r)E.x+=E.vx*m,E.y+=E.vy*m,E.vida+=m;r=r.filter(E=>E.vida<E.max&&E.x<n+20&&E.y<e+20)}function h(m,E,v,g,A,P){const y=m*v,S=E*v,T=Math.floor((y-n/2-A)/g),I=Math.floor((y+n/2+A)/g),_=Math.floor((S-e/2-A)/g),w=Math.floor((S+e/2+A)/g);for(let L=_;L<=w;L++)for(let U=T;U<=I;U++)P(U,L,U*g-y+n/2,L*g-S+e/2)}function d(m,E,v,g,A){const P=Lr[A%Lr.length],y=A%Lr.length;m.fillStyle=P.base,m.fillRect(0,0,n,e),h(E,v,.06,400,160,(S,T,I,_)=>{if(Nt(S,T,90+y)>.7)return;const w=70+Nt(S,T,91)*80,L=P.nebulosas[Math.floor(Nt(S,T,92)*P.nebulosas.length)],U=I+Nt(S,T,93)*400,V=_+Nt(S,T,94)*400;for(let Y=0;Y<5;Y++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(U),Math.round(V),Math.max(0,w*(1-Y*.18)),0,Math.PI*2),m.fill()}),h(E,v,.1,360,170,(S,T,I,_)=>{if(Nt(S,T,200+y*3)>.8)return;const w=l_(P.objetos[Math.floor(Nt(S,T,201)*P.objetos.length)]),L=Array.isArray(w)?w[Math.floor(g*w.fps+Nt(S,T,204)*w.length)%w.length]:w,U=I+(.1+Nt(S,T,202)*.6)*360,V=_+(.1+Nt(S,T,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(U-L.width/2),Math.round(V-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${P.tom}, 0.05)`,m.fillRect(0,0,n,e),i_.forEach((S,T)=>{m.globalAlpha=S.alfa,h(E,v,S.f,S.cel,130,(I,_,w,L)=>{if(Nt(I,_,S.semente)>S.prob*(P.planetas??1))return;const U=Math.floor(Nt(I,_,S.semente+1)*t.length),V=S.escalaMax>1&&Nh[U].r<=15&&Nt(I,_,S.semente+2)<.4?2:1,Y=t[U],z=w+(.15+Nt(I,_,S.semente+3)*.7)*S.cel,J=L+(.15+Nt(I,_,S.semente+4)*.7)*S.cel;m.drawImage(Y,Math.round(z-Y.width*V/2),Math.round(J-Y.height*V/2),Y.width*V,Y.height*V)});for(const I of a_){if(I.camada!==T)continue;const _=t[I.tipo],w=I.x-E*S.f+n/2,L=I.y-v*S.f+e/2;m.drawImage(_,Math.round(w-_.width*I.escala/2),Math.round(L-_.height*I.escala/2),_.width*I.escala,_.height*I.escala)}m.globalAlpha=1});for(const S of n_)h(E,v,S.f,S.cel,4,(T,I,_,w)=>{for(let L=0;L<S.n;L++){const U=Math.round(_+Nt(T,I,L*7+1)*S.cel),V=Math.round(w+Nt(T,I,L*7+2)*S.cel);if(U<-2||U>n+2||V<-2||V>e+2)continue;const Y=S.cores[Math.floor(Nt(T,I,L*7+3)*S.cores.length)],z=Nt(T,I,L*7+4)*6.28,J=1+Nt(T,I,L*7+5)*2.2;(!S.pisca||Math.sin(g*J+z)>-.35)&&(m.fillStyle=Y,m.fillRect(U,V,1,1),S.grande&&Nt(T,I,L*7+6)<S.grande&&(m.fillRect(U-1,V,3,1),m.fillRect(U,V-1,1,3)))}})}function p(m,E,v,g,A=0){A!==o&&(c=o,o=A,f=c<0?1:0),f<1&&c>=0?(d(m,E,v,g,c),d(a,E,v,g,o),m.globalAlpha=f,m.drawImage(i,0,0),m.globalAlpha=1):d(m,E,v,g,o);for(const P of r){const y=1-P.vida/P.max;for(let S=0;S<12;S++){const T=Math.round(P.x-P.vx*S*.011),I=Math.round(P.y-P.vy*S*.011);m.globalAlpha=Math.max(0,y*(1-S/12)),m.fillStyle=S<2?"#ffffff":"#8bd3ff",m.fillRect(T,I,S<2?2:1,S<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const In=520,Da=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function u_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const E=m.getContext("2d");return E.drawImage(p,0,0),E.globalCompositeOperation="source-atop",E.fillStyle="rgba(70, 40, 110, 0.55)",E.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},E=P=>Da(d,p,300+P),v=d*In,g=p*In;if(E(1)>=.5)return m;const A=E(2);if(A<.22){const P=Uh(),y=Math.floor(E(3)*P.length),S=P[y],T=(S.height-2)/2,I=T>=13?2:3,_=v+90+E(4)*(In-180),w=g+90+E(5)*(In-180);if(r(_,w,70)){const L=T*I*.92;m.planetas.push({x:_,y:w,spr:S,esc:I}),m.circ.push({x:_,y:w,r:L})}}else if(A<.62){const P=E(5)*Math.PI*2,y=150+E(6)*130,S=(E(7)-.5)*70,T=v+120+E(8)*(In-240),I=g+120+E(9)*(In-240),_=(.2+.6*E(10))*y,w=E(11)<.5?(_/y+.4)%1*y:-999,L=Math.floor(y/13);for(let U=0;U<=L;U++){const V=U/L,Y=V*y;if(Math.abs(Y-_)<24||Math.abs(Y-w)<24)continue;const z=Math.sin(V*Math.PI)*S,J=T+Math.cos(P)*Y-Math.sin(P)*z,ae=I+Math.sin(P)*Y+Math.cos(P)*z;if(!r(J,ae,10))continue;const W=Da(d*31+U,p,330)<.6?0:1,ve=[8,10][W];m.rochas.push({x:J,y:ae,tam:W}),m.circ.push({x:J,y:ae,r:ve*.85})}}else{const P=70+E(11)*50,y=v+P+E(12)*(In-2*P),S=g+P+E(13)*(In-2*P);if(r(y,S,P)){const T=Array.from({length:34},(I,_)=>{const w=Da(d,p,400+_)*Math.PI*2,L=Math.sqrt(Da(d,p,440+_))*P*.95;return{dx:Math.cos(w)*L,dy:Math.sin(w)*L,tam:1+Math.floor(Da(d,p,480+_)*3),cor:Da(d,p,520+_)<.5?"#9a8a7a":"#6a5a50",fase:Da(d,p,560+_)*6.28}});m.zonas.push({x:y,y:S,r:P,pedrinhas:T})}}return m}const o=(d,p)=>{const m=d+","+p;let E=i.get(m);return E||(E=s(d,p),i.set(m,E)),E};function c(d,p,m){const E=Math.floor(d/In),v=Math.floor(p/In);for(let g=-1;g<=1;g++)for(let A=-1;A<=1;A++)m(o(E+A,v+g))}function f(d,p){let m=1;return c(d,p,E=>{for(const v of E.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,E=0){let v=!1;return c(d.x,d.y,g=>{for(const A of g.circ){const P=d.x-A.x,y=d.y-A.y,S=A.r+p;if(Math.abs(P)>S||Math.abs(y)>S)continue;const T=Math.hypot(P,y)||.001;if(T>=S)continue;const I=P/T,_=y/T;if(d.x=A.x+I*S,d.y=A.y+_*S,v=!0,m&&E>0){const w=-_,L=I,U=Math.sign((m.x-d.x)*w+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=w*U*E,d.y+=L*U*E}}}),v}function h(d,p,m,E,v,g){const A=Math.floor((p-200)/In),P=Math.floor((p+E+200)/In),y=Math.floor((m-200)/In),S=Math.floor((m+v+200)/In),T=(I,_,w)=>I>p-w&&I<p+E+w&&_>m-w&&_<m+v+w;for(let I=y-1;I<=S+1;I++)for(let _=A-1;_<=P+1;_++){const w=o(_,I);for(const L of w.zonas)if(T(L.x,L.y,L.r+10)){for(let U=0;U<4;U++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-U*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const U of L.pedrinhas)d.fillStyle=U.cor,d.fillRect(Math.round(L.x+U.dx+Math.sin(g*.6+U.fase)*2),Math.round(L.y+U.dy+Math.cos(g*.5+U.fase)*2),U.tam,U.tam)}for(const L of w.planetas)T(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of w.rochas){if(!T(L.x,L.y,20))continue;const U=a[L.tam];d.drawImage(U,Math.round(L.x-U.width/2),Math.round(L.y-U.height/2))}}}return{fatorLento:f,empurrar:u,desenhar:h,celula:o}}const bi="#0b1026",Ws=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],pa=n=>({quadros:n,brancos:n.map(Ef)});function d_(n){const e=Ws[n%Ws.length],t=(f,u,h,d)=>{f.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),f.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=pa([0,1].map(f=>{const u=Sn(16,16),h=f?10:9.5;if(u.elipse(8,h,f?6.5:6,f?3.6:4.3,e.slime[0]),u.elipse(8,f?11:10.8,f?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,f?7:6,e.slime[1]);return e.chifres&&t(u,4,10,f?3:2),u.retangulo(4,f?8:7,2,2,e.olho),u.retangulo(9,f?8:7,2,2,e.olho),u.pixel(5,f?9:8,"#1b1020"),u.pixel(10,f?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,f?6:5,2,2,e.olho),u.pixel(8,f?7:6,"#1b1020")),u.contorno(bi).c})),a=pa([0,1].map(f=>{const u=Sn(18,16),h=f?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(bi).c})),r=pa([0,1].map(f=>{const u=Sn(20,20);u.disco(10,12+f,7,e.ogro[0]),u.disco(10,13+f,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+f],[5,1+f],[7,7+f]],h),u.poligono([[13,7+f],[15,1+f],[17,7+f]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+f,e.ogro[1]);return u.retangulo(5,10+f,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+f,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+f,"#1b1020"),u.pixel(11,11+f,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+f,2,2,e.olho),u.pixel(10,9+f,"#1b1020")),u.retangulo(7,15+f,6,2,"#1b1020"),u.pixel(8,15+f,"#ffffff"),u.pixel(11,15+f,"#ffffff"),u.contorno(bi).c})),s=pa([0,1].map(f=>{const u=Sn(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+f)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(bi).c})),o=pa([0,1].map(f=>{const u=Sn(16,17);return u.pixel(8,0,f?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(bi).c})),c=pa([0,1].map(f=>{const u=Sn(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=f?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(bi).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:c}}function h_(n){const e=Ws[n%Ws.length];return pa([0,1].map(t=>{const i=Sn(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(bi).c}))}function p_(){return pa([0,1].map(n=>{const e=Sn(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(bi).c}))}function jl(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function m_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,c)=>{const f=c/11*Math.PI*2,u=n*(.8+jl(e*7+1,c)*.35);return[i+Math.cos(f)*u,a+Math.sin(f)*u]}),s=(o,c,f)=>r.map(([u,h])=>[i+(u-i)*o+c,a+(h-a)*o+f]);return{r:n,quadros:[0,1,2].map(o=>{const c=Sn(t,t);c.poligono(r,"#5a606c"),c.poligono(s(.88,-.7,-.7),"#7a808d"),c.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let f=0;f<3+e;f++)c.disco(Math.round(i+(jl(e,f+20)-.5)*n*1.2),Math.round(a+(jl(e,f+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(c.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),c.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(c.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),c.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),c.contorno(bi).c})}})}function g_(){const n=t=>{const i=Sn(12,12);return t(i),i.contorno(bi).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,c=s%2?a:i;return[6+Math.cos(o)*c,6+Math.sin(o)*c]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function x_(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let c=-r;c<=r;c++)for(let f=-r;f<=r;f++){const u=Math.hypot(f,c);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(c,f)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+f,o+c,1,1)}n.globalAlpha=1}const Qc="#0b1026",v_=n=>({quadros:n,brancos:n.map(Ef)}),xt=(n,e,t)=>v_([0,1].map(i=>{const a=Sn(n,e);return t(a,i),a.contorno(Qc).c})),M_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((c,f)=>{const u=t[c];u&&n.retangulo(a+f*i,r+o*i,i,i,u)})),fa=(n,e,t,i,a,r=1,s=0,o=0)=>xt(n,e,(c,f)=>M_(c,f?i:t,a,r,s,o)),ba=(n,e)=>n.map(([t,i])=>[e-1-t,i]),Oh=(n,e,t,i)=>e.forEach(([a,r,s,o],c)=>n.linha(a,r,s+((c+t)%2?1:0),o,i)),fd=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],ud=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function __(){const n=c=>({x:c,y:"#ffffff"}),e=fa(16,12,fd,ud,n("#5be37a"),1,2,2),t=fa(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=fa(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=fa(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=fa(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=fa(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=fa(56,38,fd,ud,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function S_(){const n=fa(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=xt(18,14,(o,c)=>{const f=c?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=c?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(f,"#a56bff"),o.poligono(ba(f,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(ba(u,18),"#d1b0ff"),o.disco(c?4:3,c?10:4,1,"#ffe14a"),o.disco(c?13:14,c?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=xt(20,18,(o,c)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const f of[0,1,2]){const u=8+f*3;o.linha(3,u,1,u+1+(c?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(c?0:2),"#1b2a2a")}}),i=xt(14,17,(o,c)=>{const f=c?1:0;o.elipse(3,6+f,3,1.6,"#bfe6ff"),o.elipse(10,6+f,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=xt(16,17,(o,c)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,c?"#ff3b4a":"#ffd23f"),o.pixel(10,2,c?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,Qc),o.pixel(13,7,Qc),Oh(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],c,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=xt(12,10,(o,c)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const f=c?4:1;o.elipse(2.5,f+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,f+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=xt(56,38,(o,c)=>{for(const f of[0,1,2]){const u=20+f*6;o.linha(10,u,2,u+6+(c?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(c?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(c?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(c?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,c?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,c?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function y_(){const n=xt(16,16,(o,c)=>{const f=c?0:1;o.disco(8,10+f,6,"#f4efe0"),o.disco(8,10+f,4,"#ff9a3a"),o.disco(8,10+f,2,"#f4efe0"),o.pixel(4,8+f,"#ff9a3a"),o.disco(9,3+f,3,"#f4efe0"),o.pixel(10,3+f,"#1b1020"),o.pixel(10,4+f,"#1b1020"),o.retangulo(7,2+f,4,1,"#8b93a8"),o.linha(8,0+f,8,1+f,"#8b93a8")}),e=xt(18,16,(o,c)=>{const f=c?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-f/2],[1,7-f/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-f/2],[17,7-f/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+f/2],[1,11+f/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+f/2],[17,11+f/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-f/2],[16,5-f/2],[1,10+f/2],[16,10+f/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=xt(20,20,(o,c)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const f of[7,14]){const u=c?1:-1;o.retangulo(f,10,2,5,"#aab3c8"),o.retangulo(f+u,15,2,4,"#8b93a8"),o.retangulo(f+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=xt(14,17,(o,c)=>{const f=c?1:0;o.disco(7+f,6,5,"#f4f4fa"),o.poligono([[3+f,5],[6+f,5],[5+f,8],[3+f,7]],"#1b1020"),o.poligono([[11+f,5],[8+f,5],[9+f,8],[11+f,7]],"#1b1020"),o.retangulo(6+f,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=xt(16,17,(o,c)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+c,"#ffd23f"),o.retangulo(12,14,2,2+c,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,c?"#ff3b4a":"#ffd23f")}),r=xt(12,11,(o,c)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,c?"#8bd3ff":"#ffffff")}),s=xt(56,38,(o,c)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let f=12;f<44;f+=4)o.pixel(f,22,"#5a6176"),o.pixel(f+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,c?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[f,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(f,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,c?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function b_(){const n=xt(16,14,(o,c)=>{for(let f=0;f<5;f++)o.disco(3+f*2,9+Math.round(Math.sin(f*1.2+c*2.4)*2),2,f%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=xt(18,16,(o,c)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const f=c?0:1;o.retangulo(8+f,0,1,2,"#ffffff"),o.retangulo(8+f,14,1,2,"#ffffff"),o.retangulo(0,8-f,2,1,"#ffffff"),o.retangulo(16,8-f,2,1,"#ffffff")}),t=xt(22,18,(o,c)=>{Oh(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],c,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,c?5:6,0,"#4a2a10"),o.linha(13,2,c?17:16,0,"#4a2a10")}),i=xt(14,17,(o,c)=>{const f=c?1:0;o.elipse(7,6+f,5.5,6,"#a8b0b8"),o.elipse(7,4+f,4,3,"#c0c8d0"),o.poligono([[2,5+f],[6,7+f],[5,9+f],[2,8+f]],"#0b1026"),o.poligono(ba([[2,5+f],[6,7+f],[5,9+f],[2,8+f]],14),"#0b1026"),o.retangulo(6,14+f,2,3,"#8a929a"),o.retangulo(4,12+f,6,2,"#8a929a"),o.pixel(3,6+f,"#ffffff"),o.pixel(10,6+f,"#ffffff")}),a=xt(16,17,(o,c)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,c?"#ffffff":"#8bd3ff"),o.pixel(14,7,c?"#8bd3ff":"#ffffff")}),r=xt(12,8,(o,c)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const f of[3,5,7])o.pixel(f+(c?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=xt(56,38,(o,c)=>{for(const f of[0,1,2]){const u=20+f*5;o.linha(12,u,2,u+8+(c?3:0),"#3a2008"),o.linha(44,u,54,u+8+(c?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(c?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(c?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,c?12:16,0,"#4a2a10"),o.linha(32,3,c?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function E_(){const n=xt(14,16,(o,c)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const f=c?3:1;o.poligono([[2,6],[4,6-f],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-f],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-f],[9,5]],"#a09060"),c&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=xt(18,10,(o,c)=>{for(let f=0;f<6;f++)o.disco(15-f*2.5,5+Math.round(Math.sin(f*1.4+c*3)*2),f===0?2:1,f===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=xt(20,20,(o,c)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const f of[4,6,13,15])o.linha(f,3,f+(f<10?-2:2),11+(c?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,c?"#ff3b4a":"#7a1f2a")}),i=xt(14,17,(o,c)=>{const f=c?1:0;o.poligono([[10,0+f],[13,4+f],[6,9+f],[3,6+f]],"#1f2a3a"),o.poligono([[10,1+f],[12,4+f],[8,4+f]],"#4a6a8a"),o.poligono([[3,6+f],[6,9+f],[5,11+f],[2,9+f]],"#2a3a4a"),o.pixel(3,9+f,"#ffffff"),o.pixel(5,10+f,"#ffffff"),o.pixel(7,10+f,"#ffffff"),o.retangulo(5,11+f,5,5,"#1f2a3a"),o.linha(10,11+f,13,15,"#1f2a3a")}),a=xt(16,17,(o,c)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,c?"#7dff3a":"#3a9a1f");for(const f of[5,7,9])o.pixel(f,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(c?7:8,14,"#7dff3a"),o.pixel(c?8:7,15,"#7dff3a")}),r=xt(12,10,(o,c)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const f of[1,3,8,10])o.linha(f,3,f<6?f-1:f+1,8+(c?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=xt(56,38,(o,c)=>{for(const f of[8,14,42,48])o.linha(f<28?f+6:f-6,20,f,34+(c?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const f of[18,24,32,38])o.linha(f,4,f+(f<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let f=21;f<36;f+=2)o.pixel(f,20,"#ffffff"),o.pixel(f,24,"#ffffff");o.retangulo(25,22,6,2,c?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function A_(){const n=xt(16,14,(o,c)=>{const f=c?0:1;o.disco(8,8+f,6,"#ffe14a"),o.disco(7,7+f,3,"#fff08a"),o.pixel(5,6+f,"#1b1020"),o.pixel(10,6+f,"#1b1020"),o.poligono([[7,8+f],[9,8+f],[8,10+f]],"#ff9a3a"),o.pixel(8,2+f,"#ffe14a"),o.pixel(9,1+f,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=xt(18,14,(o,c)=>{const f=c?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(f,"#2a2a3a"),o.poligono(ba(f,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=xt(20,20,(o,c)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const f of[7,10,13])o.pixel(f,14+(c?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=xt(14,17,(o,c)=>{const f=c?3:0;o.poligono([[7,3],[0,8-f],[3,10],[7,9]],"#ff7a2a"),o.poligono(ba([[7,3],[0,8-f],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=xt(16,17,(o,c)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,c?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=xt(12,9,(o,c)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const f=c?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(f,"#7a4a2a")}),s=xt(56,38,(o,c)=>{const f=c?0:8;o.poligono([[28,14],[2,4+f],[10,14+f],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+f],[46,14+f],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+f],[16,17+f],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+f],[40,17+f],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const Bi=[{nome:"SLIMES",criar:()=>({m:d_(0),chefe:h_(0)})},{nome:"INVASORES",criar:__},{nome:"BICHARADA",criar:S_},{nome:"GALÁXIA",criar:y_},{nome:"AGENTES",criar:b_},{nome:"XENO",criar:E_},{nome:"REVOADA",criar:A_}],Fh=(n,e,t,i,a,r,s,o=1.5)=>{let c=e,f=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(c,f,d,p,r),n.linha(c+1,f,d+1,p,r),c=d,f=p}return[c,f]},T_=()=>xt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=Fh(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),w_=()=>xt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),R_=()=>xt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),C_=()=>xt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),P_=()=>xt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),I_=()=>xt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=Fh(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),Sr=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:p_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:T_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:w_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:R_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:C_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:P_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:I_}],L_=()=>xt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),D_=()=>xt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),N_=()=>xt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(ba([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),U_=()=>xt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(ba([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(ba([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),O_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],Na=[...Bi.map((n,e)=>({nome:O_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:L_},{nome:"DISCO-MÃE",criar:D_},{nome:"NAVE-CAVEIRA",criar:N_},{nome:"CRISTAL VIVO",criar:U_}],Ot=320,Bt=180,un=Ot/2,ra=Bt/2,oa=6,Bh="curriculo-arcade-v1",F_=12,ht={x0:10,x1:Ot-10,y0:26,y1:Bt-10},Yn={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Es=70,B_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},Xs={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},z_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{zi(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{zi(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{zi(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{zi(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{zi(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{zi(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{zi(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{zi(n,"drift")}},{id:"a_normal",grupo:"CANHÃO [1]",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Calibre reforçado",desc:"+28% de dano exclusivo do canhão.",max:4,peso:2.4,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta dano, alcance, bateria e velocidade de recarga.",max:4,peso:3,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores, mais dano e um míssil extra no nível 3.",max:4,peso:3,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas, rotação mais rápida e dano de contato maior.",max:4,peso:3,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Mais velocidade, autonomia e recarga do propulsor.",max:4,peso:3,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Repara mais vida e reduz o tempo entre ativações.",max:4,peso:3,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração da barreira e acelera sua recarga.",max:4,peso:3,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e recarrega o buraco de minhoca mais rápido.",max:4,peso:3,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Arrancada mais longa com uma trilha de fogo mais forte.",max:4,peso:3,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Amplificador de dano",desc:"+15% de dano para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.danoGlobal*=1.15}},{id:"recarga_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Sincronizador de recarga",desc:"+12% de cadência e recarga para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.recargaGlobal*=1.12}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"SISTEMA",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:1.7,aplicar:n=>{n.raioIma*=1.45}},{id:"motor",grupo:"SISTEMA",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Propulsores",desc:"+16% de velocidade e resposta da nave.",max:4,peso:1.7,aplicar:n=>{n.velNave*=1.16}},{id:"reparo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Casco autorreparável",desc:"+1 de vida máxima e cura 2 pontos.",max:4,peso:1.7,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+2)}},{id:"coletor",grupo:"SISTEMA",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:3.5,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"SISTEMA",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:3.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:3.6,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"micropropulsor",grupo:"SISTEMA",raridade:"COMUM",icone:"›",cor:"#8bd3ff",nome:"Micropropulsor",desc:"+6% de velocidade da nave.",max:6,peso:3.4,aplicar:n=>{n.velNave*=1.06}},{id:"dissipador",grupo:"SISTEMA",raridade:"COMUM",icone:"~",cor:"#7dff9a",nome:"Dissipador pequeno",desc:"+5% de recarga geral das armas e sistemas.",max:6,peso:3.1,aplicar:n=>{n.recargaGlobal*=1.05}}],zh=Object.fromEntries(Object.entries(Xs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),dd=Object.fromEntries(Object.entries(Xs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function zi(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${zh[e]}!`,n.aviso=3.6,!0)}const Tf=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga do laser e do míssil",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Munição pesada",desc:"+0,25 de dano base",max:5,custo:n=>8+n*6},{parte:"ARMAS",id:"cadencia",nome:"Canhão rápido",desc:"+10% de cadência inicial",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],ua={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},G_=Object.entries(ua).map(([n,e])=>[n,e.peso]),V_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],k_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Tf.map(n=>[n.id,0]))});function hd(){const n=k_();try{const e=JSON.parse(localStorage.getItem(Bh));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Tf)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function H_(){const n=(t,i,a)=>{const r=Sn(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function pd(n){const e=Sn(20,20),t=2,i=(a,r,s,o,c)=>e.retangulo(a+t,r+t,s,o,c);if(i(1,7,3,2,"#ff7a59"),i(12,7,3,2,"#ff7a59"),i(7,1,2,3,"#ff7a59"),i(7,12,2,3,"#ff7a59"),n.motor>=2&&(i(2,11,2,3,"#8b93a8"),i(12,11,2,3,"#8b93a8"),e.pixel(3+t,14+t,"#ffa23a"),e.pixel(12+t,14+t,"#ffa23a")),n.motor>=4&&(i(1,4,2,3,"#8b93a8"),i(13,4,2,3,"#8b93a8")),e.disco(8+t,8+t,5,"#4aa8ff"),e.disco(8+t,8+t,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?"#7dff9a":"#8bd3ff"),e.disco(8+t,8+t,1,"#ffffff"),n.casco>=1)for(const[a,r]of[[2,2],[12,2],[2,12],[12,12]])i(a,r,2,2,"#aab3c8"),n.casco>=3&&e.pixel(a+t,r+t,"#e6e8ff");return n.ima>=1&&(e.pixel(8+t,t-1,"#ff3b4a"),n.ima>=3&&i(10,0,2,1,"#c9cdd8")),e.contorno(n.casco>=5?"#ffd23f":n.casco>=3?"#8bd3ff":"#0b1026"),{c:e.c,branca:Ef(e.c)}}function W_({bip:n,somAtivo:e}){const t=Symbol("arcade");window.__curriculoArcadeGeracao=t,document.getElementById("arcade")?.remove();const i=(M,x,N)=>{const q=document.createElement(M);return x&&(q.className=x),N!=null&&(q.textContent=N),q},a=H_(),r=m_(),s=g_(),o=u_({inicioX:un,inicioY:ra,rochasSpr:r}),c=new Map,f=new Map,u=M=>(c.has(M)||c.set(M,Sr[M].criar()),c.get(M)),h=M=>(f.has(M)||f.set(M,Na[M].criar()),f.get(M)),d=new Map,p=M=>{const x=(M%Bi.length+Bi.length)%Bi.length;return d.has(x)||d.set(x,Bi[x].criar()),d.get(x)},m=.3,E=M=>{const x=new Audio("./"+M);return x.loop=!0,x.volume=m,x.preload="none",x},v=E("audio/arcade.mp3"),g=E("audio/chefe.mp3"),A=E("audio/gameover.mp3"),P={normal:v,chefe:g,fim:A};let y="normal",S=!1;function T(){if(S)return;S=!0;const M=()=>{S=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),nt&&I()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const I=()=>{e&&!e()||P[y].play().catch(T)},_=()=>{v.pause(),g.pause(),A.pause()};function w(M){if(y!==M){y=M;for(const[x,N]of Object.entries(P))x!==M&&N.pause();M!=="normal"&&(P[M].currentTime=0),I()}}let L=!1;function U(){if(!L){L=!0;for(const M of[g,A])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,L=!1})}}const V=f_(Ot,Bt);let Y=pd({casco:0,motor:0,nucleo:0,ima:0}),z=hd();const J={},ae=(M,x,N)=>{const q=performance.now();q-(J[M]||0)<x||(J[M]=q,N())};function W(M){const x=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";ae("acerto"+(x?"G":""),x?70:40,()=>x?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function ve(M){ae("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const se=()=>{try{localStorage.setItem(Bh,JSON.stringify(z))}catch{}},ie=i("div");ie.id="arcade";const pe=i("div","arc-caixa"),Qe=i("div","arc-topo"),Ve=document.createElement("canvas");Ve.width=Ve.height=20,Ve.className="arc-icone",Ve.getContext("2d").drawImage(Y.c,0,0);const vt=i("h2",null,"NAVE ARCADE"),dt=i("div","arc-hud"),mt=i("span","arc-vidas");mt.setAttribute("role","status");const ce=i("span","arc-nivel"),me=i("span","arc-xp"),Re=i("i");me.append(Re),me.setAttribute("role","progressbar"),me.setAttribute("aria-label","Experiência"),me.setAttribute("aria-valuemin","0");const st=i("span"),We=i("span","arc-onda"),Ce=i("span","arc-efeitos"),ft=i("span","arc-moedas"),ue=i("span");dt.append(mt,ce,me,st,We,Ce,ft,ue);const Me=i("button","arc-pausa","II");Me.title="Pausar (Esc)",Me.setAttribute("aria-label","Pausar jogo"),Me.hidden=!0;const be=i("button","arc-x","X");be.title="Sair (Esc)",be.setAttribute("aria-label","Sair do jogo"),Qe.append(Ve,vt,dt,Me,be);const Ae=i("div","arc-tela"),Se=document.createElement("canvas");Se.width=Ot,Se.height=Bt,Se.setAttribute("role","img"),Se.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const R=Se.getContext("2d");R.imageSmoothingEnabled=!1;const Q=i("div","arc-joystick");Q.hidden=!0;const Te=i("i");Q.append(Te);const Pe=i("div","arc-aviso");Pe.hidden=!0;const F=i("div","arc-sobre"),ot=i("div","arc-painel arc-inicio"),ke=i("button","arc-btn","COMEÇAR [ESPAÇO]"),D=i("button","arc-btn sec"),b=i("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),$=i("div","arc-objetivos");for(const[M,x,N]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const q=i("div");q.append(i("b",null,M),i("strong",null,x),i("small",null,N)),$.append(q)}const Z=i("details","arc-regras"),le=i("summary",null,"COMO JOGAR");Z.append(le,i("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),i("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const _e=i("p","arc-recordes");ot.append(i("h3",null,"PRONTO PARA DECOLAR?"),b,$,Z,_e,ke,D);const ye=i("div","arc-painel");ye.hidden=!0;const ne=i("div","arc-painel");ne.hidden=!0;const ge=i("button","arc-btn","CONTINUAR [ESC]"),ze=i("button","arc-btn sec","SAIR");ne.append(i("h3",null,"PAUSADO"),ge,ze);const Ze=i("div","arc-painel");Ze.hidden=!0;const Ie=i("div","of-raiz");Ie.hidden=!0,F.append(ot,ye,ne,Ze),Ae.append(Se,Pe,Q,F);const Ue=i("div","arc-armas"),He=[];for(let M=1;M<=4;M++){const x=i("button","arc-arma"),N=i("b"),q=i("i");x.append(i("small",null,String(M)),N,q),x.onmousedown=j=>j.preventDefault(),x.onclick=()=>On(M),He.push({b:x,nm:N,barra:q}),Ue.append(x)}pe.append(Qe,Ae,Ue,i("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),ie.append(pe,Ie),ie.setAttribute("role","dialog"),ie.setAttribute("aria-modal","true"),ie.setAttribute("aria-label","Nave Arcade"),document.body.append(ie);let nt=!1,Be="inicio",X=0,Oe=0,xe="inicio",l=null;const Ne=new Set,de={ativo:!1,x:un,y:ra,toque:!1,dx:0,dy:0,origemX:0,origemY:0},ut=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],Je=M=>Math.abs(M.x-l.cx)<Ot/2+4&&Math.abs(M.y-l.cy)<Bt/2+4,Ut=M=>{let x=Math.random()*M.reduce((N,q)=>N+q[1],0);for(const[N,q]of M)if(x-=q,x<=0)return N;return M[0][0]},bt=(M,x=2.6)=>{l.avisoTxt=M,l.aviso=x};function Un(){const M=z.oficina,x=l?l.niveis:{};return{casco:M.casco+(x.reparo|0),motor:M.motor+(x.motor|0),nucleo:M.nucleo+(x.recarga_geral|0),armas:M.dano+M.lente+(x.dano_geral|0),ima:M.ima+(x.ima|0)}}function Pn(){const M=Un();Y=pd(M),l&&(l.tiers=M);const x=Ve.getContext("2d");x.clearRect(0,0,20,20),x.drawImage(Y.c,0,0)}const ll=()=>{if(l.regiaoForcada!=null)return l.regiaoForcada;const M=Math.min(2,Math.floor((l.fase-1)/2)),x=Lr.map((N,q)=>q).filter(N=>Lr[N].nivel===M);return x[(l.fundoBase+l.fase)%x.length]},ni=M=>{const x=[...M];for(let N=x.length-1;N>0;N--){const q=Math.floor(Math.random()*(N+1));[x[N],x[q]]=[x[q],x[N]]}return x};function zo(){const M=new Set([...ni(["slime","inseto"]).slice(0,1),...ni(["morcego","fantasma"]).slice(0,1),...ni(["ogro","slime"]).slice(0,1),...ni(["atirador","sentinela","bombardeiro","fulminante"]).slice(0,2),...ni(["curandeiro","amplificador"]).slice(0,1)]);for(const x of ni(Object.keys(Yn).filter(N=>!["chefe","alien"].includes(N)))){if(M.size>=6)break;M.add(x)}return[...M]}function $a(){const M=z.oficina,x=zo(),N=ni(Array.from({length:Bi.length},(K,we)=>we)),q=Object.fromEntries(x.map((K,we)=>[K,N[we%N.length]])),j=Object.fromEntries(x.map((K,we)=>[K,we===0||we===1||we===3?1:we===5?3:2]));l={t:0,ta:0,nx:un,ny:ra,cx:un,cy:ra,velNave:75*(1+.08*M.motor),cristais:[],raioIma:26*(1+.25*M.ima),raioPegar:8,bonusXp:1+.1*M.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+M.casco,maxHp:6+M.casco,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*M.dano,danoGlobal:1,recargaGlobal:1,cadencia:2.6*(1+.1*M.cadencia),projeteis:1+M.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*Na.length),alienIdx:Math.floor(Math.random()*Sr.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*Bi.length),elencoRun:x,entradaRun:j,skinsRun:q,fundoBase:Math.floor(Math.random()*Lr.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1+.12*M.nucleo,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:M.escudo>0?1+(M.escudo>=4?1:0):0,barreira:M.escudo>0?1+(M.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*M.escudo},Pn()}const Ja=()=>Math.max(l.onda,1+Math.floor(l.t/45));function kr(){const M=Ja(),x={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let N=l.elencoRun.filter(q=>M>=l.entradaRun[q]).map(q=>[q,x[q]+Math.max(0,M-l.entradaRun[q])*(q==="atirador"||q==="sentinela"?.45:.2)]);return N.length||(N=[[l.elencoRun[0],1]]),Ut(N)}function Ki(M,x,N){const q=Yn[M],j=Math.max(0,Ja()-1),K=Math.max(1,Math.round(q.hp*(1+(q.hp===1?.1:.15)*j)*(1+l.t/300))),we=q.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*j))*(1+Math.min(.5,l.t/600)),Ge={tipo:M,x,y:N,hp:K,hpMax:K,vel:we,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(l.skinsRun[M]??l.skinBase)+l.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return l.inimigos.push(Ge),Ge}function ii(M=99,x=null){const N=kr(),q=1+Math.min(6,Math.floor(l.t/80)),j=Math.max(1,Math.min(M,N==="inseto"?4+Math.floor(Math.random()*3):Math.round(q*(.7+Math.random()*.6)))),K=x==null?Math.random()*Math.PI*2:x+(Math.random()-.5)*1.8,we=215+(Math.random()<.35?Math.random()*230:Math.random()*60),Ge=l.nx+Math.cos(K)*we,et=l.ny+Math.sin(K)*we;for(let rt=0;rt<j;rt++)Ki(N,Ge+(Math.random()-.5)*30,et+(Math.random()-.5)*30);return j}function Hr(M){for(let x=0;x<M;x++)ii(1)}function Go(M){const x=l.elencoRun.filter(j=>Ja()>=l.entradaRun[j]),N=ni(x.length?x:[l.elencoRun[0]]),q=[[l.cx-Ot/2-12,l.cy-Bt/2-12],[l.cx+Ot/2+12,l.cy-Bt/2-12],[l.cx-Ot/2-12,l.cy+Bt/2+12],[l.cx+Ot/2+12,l.cy+Bt/2+12]];for(let j=0;j<M;j++){const[K,we]=q[j%4],Ge=N[j%N.length];Ki(Ge,K+(Math.random()-.5)*24,we+(Math.random()-.5)*24)}}function qt(M,x,N,q,j=50){if(!(l.parts.length>400))for(let K=0;K<N;K++){const we=Math.random()*Math.PI*2,Ge=(.3+Math.random())*j;l.parts.push({x:M,y:x,vx:Math.cos(we)*Ge,vy:Math.sin(we)*Ge,vida:.3+Math.random()*.3,cor:q[K%q.length]})}}const $t=(M,x,N,q="#ffffff")=>l.textos.push({x:M,y:x,txt:N,cor:q,vida:1.1});function Vo(){l.onda+=1;const M=1+Math.floor((l.onda-1)/3),x=l.onda%3===0;l.ondaDur=l.ondaT=10,l.proxOnda=Math.max(14,25-Math.min(8,l.onda*.45))+Math.random()*4,l.ondaEstado=x||l.chefe?"chefe":"ativa",l.spawnAcc=3,l.tremor=.25,Go(x?Math.min(24,10+l.onda*2):Math.min(36,16+l.onda*4)),M>l.fase&&(l.fase=M),x||(bt("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),x&&!l.chefe&&je()}function Za(){l.chefe||(l.ondaEstado=l.ondaT>0?"ativa":"calma")}function ko(M){const x=Math.atan2(M.y-l.ny,M.x-l.nx);l.mira=x;const N=l.armasNivel.normal,q=l.projeteis,j=.16;for(let K=0;K<q;K++){const we=x+(K-(q-1)/2)*j,Ge=l.velTiro*(1+.12*(N-1)),et=Math.random()<l.critico;l.tiros.push({x:l.nx+Math.cos(we)*7,y:l.ny+Math.sin(we)*7,vx:Math.cos(we)*Ge,vy:Math.sin(we)*Ge,dano:l.dano*l.danoGlobal*(1+.28*(N-1))*(et?2:1),perf:l.perfura,critico:et,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const Ta=()=>1+Math.floor(l.t/420);function bn(M,x,N,q,j=Ta()){l.tirosInimigos.push({x:M,y:x,vx:Math.cos(N)*q,vy:Math.sin(N)*q,dano:j,vida:7})}function Ka(M,x,N){const q=Math.random()*Math.PI*2,j=16+Math.random()*22,K={x:M,y:x,v:N,vx:Math.cos(q)*j,vy:Math.sin(q)*j,fase:Math.random()*6};l.cristais.push(K),l.cristais.length>220&&(K.v+=l.cristais.shift().v)}function wa(M){return l.invul>0||l.escudoT>0?!1:l.barreira>0?(l.barreira-=1,l.invul=.7,l.ondas.push({x:l.nx,y:l.ny,r:0,max:28,v:90,cor:"#7dff9a"}),$t(l.nx,l.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0):(l.hp-=M,l.invul=.7,l.tremor=.2,l.combo>=3&&$t(l.nx,l.ny-14,"COMBO PERDIDO","#ff7a8a"),l.combo=0,l.comboT=0,n(110,.18,"sawtooth",.05),!0)}function Qi(M,x){M.sumido>0||M.morto||(M.hp-=x,M.piscar=.08,M.hp>0&&W(M),M.hp<=0&&(M.morto=!0,Ho(M)))}function Ho(M){if(M.tipo==="chefe"){lt(M);return}if(M.tipo==="alien"){l.pendente="vitoria",qt(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),l.flash=.35;return}const x=Yn[M.tipo];l.kills+=1,l.alien||(l.combo+=1,l.comboT=1.8,l.melhorCombo=Math.max(l.melhorCombo,l.combo),[10,25,50,100].includes(l.combo)&&($t(l.nx,l.ny-22,`COMBO x${l.combo}!`,"#ffe14a"),n(700+l.combo*4,.08,"square",.04),n(900+l.combo*4,.1,"square",.04,.08))),Ka(M.x,M.y,x.xp),qt(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),ve(M.tipo);const N={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<N&&(l.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),$t(M.x,M.y-8,"◆","#6fe8ff"));const q=l.inimigos.indexOf(M);q>=0&&l.inimigos.splice(q,1)}function C(){const M=Math.random()*Math.PI*2,x=230+Math.random()*120,N=Math.floor(Math.random()*3),q=[4,6,9][N];l.rochas.push({x:l.nx+Math.cos(M)*x,y:l.ny+Math.sin(M)*x,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:N,r:[8,10,13][N],hp:q,hpMax:q,piscar:0})}function H(M){M.hp-=1,M.piscar=.08,qt(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&re(M)}function re(M){qt(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const x=l.rochas.indexOf(M);x>=0&&l.rochas.splice(x,1),Math.random()<.9?l.itens.push({tipo:Ut(V_),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):Ka(M.x,M.y,3)}function ee(M){const x=M.tipo;if(x==="ima")l.imaT=3,$t(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");else if(x==="explosao")te(),$t(l.nx,l.ny-12,"BOOM!","#ffd23f");else if(x==="coracao")l.hp=Math.min(l.maxHp,l.hp+2),$t(l.nx,l.ny-12,"+VIDA","#ff7a8a");else if(x==="escudo")l.escudoT=6,$t(l.nx,l.ny-12,"ESCUDO!","#8bd3ff");else if(x==="turbo")l.turboT=8,$t(l.nx,l.ny-12,"TURBO!","#ffe14a");else if(ua[x]){const N=ua[x];x==="estrelaVermelha"?(l.buffDanoT<=0&&(l.danoGlobal*=1.5),l.buffDanoT=N.tempo):x==="estrelaAmarela"?l.buffVelT=N.tempo:x==="estrelaAzul"?l.escudoT=Math.max(l.escudoT,N.tempo):x==="estrelaRoxa"&&(l.buffXpT=N.tempo),$t(l.nx,l.ny-12,N.nome,N.cor),qt(l.nx,l.ny,14,[N.cor,"#ffffff"],70),l.ondas.push({x:l.nx,y:l.ny,r:0,max:40,v:110,cor:N.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else x==="moedaEsp"&&(z.moedas+=1,l.moedasRun+=1,se(),$t(l.nx,l.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function te(){l.flash=.28,l.tremor=.35,l.ondas.push({x:l.nx,y:l.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+l.dano*3;for(const x of[...l.inimigos])Je(x)&&(Qi(x,x.tipo==="chefe"||x.tipo==="alien"?14:M),qt(x.x,x.y,4,["#ffd23f","#ff7a3a"],60));l.tirosInimigos=l.tirosInimigos.filter(x=>!Je(x)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function Xe(M,x,N,q=1.4){for(let j=0;j<N;j++){const K=Math.random()*Math.PI*2,we=j===0?Math.random()*14:28+Math.random()*55;let Ge=l.nx+Math.cos(K)*we,et=l.ny+Math.sin(K)*we;l.alien&&(Ge=Math.max(ht.x0+10,Math.min(ht.x1-10,Ge)),et=Math.max(ht.y0+10,Math.min(ht.y1-10,et))),l.campos.push({x:Ge,y:et,r:26,aviso:q+j*.15,avisoMax:q+j*.15,vida:4,tick:0,ox:M,oy:x})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function je(){l.chefeIdx=(l.chefeIdx+1+Math.floor(Math.random()*(Na.length-1)))%Na.length;const M=Math.random()<.5?-1:1,x=Math.round(150*(1+(l.fase-1)*.4+l.chefesVencidos*.35)*(1+l.t/300)),N=ni(["raios","investida","drift","minhoca"]).slice(0,2),q={tipo:"chefe",x:l.cx+M*(Ot/2+40),y:l.cy-30,hp:x,hpMax:x,vel:30,fase:0,piscar:0,v:l.fase-1+l.skinBase,b:l.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:N,rot:0};l.inimigos.push(q),l.chefe=q,w("chefe"),bt(`${Na[l.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function qe(M,x){const N=l.nx-M.x,q=l.ny-M.y,j=Math.hypot(N,q)||1;if(M.fase+=x,M.movEsp){const O=M.movEsp;if(O.carga>0){if(O.carga-=x,M.piscar=Math.max(M.piscar,.04),O.carga<=0)if(O.tipo==="minhoca"){const oe=M.x,fe=M.y,he=Math.random()*Math.PI*2,Ee=58+Math.random()*24;M.x=l.nx+Math.cos(he)*Ee,M.y=l.ny+Math.sin(he)*Ee,l.ondas.push({x:oe,y:fe,r:0,max:32,v:130,cor:"#a56bff"}),l.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),qt(oe,fe,18,["#a56bff","#070a1a","#ffffff"],90),qt(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),l.tremor=.28,M.movEsp=null}else O.ativo=O.tipo==="drift"?1.15:.72}else if(O.ativo>0){const oe=O.tipo==="drift"?175:235;M.x+=O.dx*oe*x,M.y+=O.dy*oe*x,O.ativo-=x,O.acc-=x,qt(M.x-O.dx*15,M.y-O.dy*15,O.tipo==="drift"?2:1,O.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),O.tipo==="drift"&&O.acc<=0&&(O.acc=.16,l.campos.push({x:M.x-O.dx*12,y:M.y-O.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),O.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const K=-q/j,we=N/j,Ge=Math.sin(l.ta*.8)*.3,et=M.vel+l.fase*3+Math.min(45,l.t/10);if(M.x+=(N/j+K*Ge)*et*x,M.y+=(q/j+we*Ge)*et*x,j>300)return;const rt=1+Math.min(1,l.t/400);if(M.cdRajada-=x*rt,M.cdMira-=x*rt,M.cdBomba-=x*rt,M.cdRajada<=0){const O=12+Math.min(8,l.fase*2);for(let oe=0;oe<O;oe++)bn(M.x,M.y,M.rot+oe*Math.PI*2/O,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-l.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const O=Math.atan2(q,N),oe=3+Math.min(2,l.fase-1);for(let fe=0;fe<oe;fe++)bn(M.x,M.y,O+(fe-(oe-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const O=1+(Math.random()<.5?1:0)+(l.fase>=2&&Math.random()<.4?1:0);Xe(M.x,M.y,O),M.cdBomba=Math.max(3,4.6-l.fase*.2)}const k=it.filter(O=>O.assinatura?M.kit.includes(O.id):l.t>=O.t);if(M.esp){const O=M.esp;if(O.t-=x,O.acc-=x,O.tipo==="espiral"&&O.acc<=0){O.acc=.09,O.ang+=.4;for(let oe=0;oe<2;oe++)bn(M.x,M.y,O.ang+oe*Math.PI,62)}else if(O.tipo==="aneis"&&O.acc<=0){O.acc=.5;const oe=Math.random()*Math.PI*2;for(let fe=0;fe<24;fe++){const he=fe*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(he-oe),Math.cos(he-oe)))>.45&&bn(M.x,M.y,he,58)}}O.t<=0&&(M.esp=null)}else if(k.length&&(M.cdEsp-=x*rt,M.cdEsp<=0)){const O=k[Math.floor(Math.random()*k.length)];if($t(M.x,M.y-28,O.nome,"#ff7ab8"),O.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(O.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(O.id==="raios"){const oe=Math.atan2(q,N),fe=3+Math.min(2,k.length-2);for(let he=0;he<fe;he++)l.raios.push({x:M.x,y:M.y,ang:oe+(he-(fe-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(O.id==="investida"||O.id==="drift")M.movEsp={tipo:O.id,carga:O.id==="drift"?.7:.5,ativo:0,dx:N/j,dy:q/j,acc:0};else if(O.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(O.id==="invocar"){for(let oe=0;oe<4;oe++)Ki(kr(),M.x+(oe-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-l.t/100)}}const it=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function lt(M){l.kills+=5,l.chefe=null,l.chefesVencidos+=1,w("normal");const x=l.inimigos.indexOf(M);x>=0&&l.inimigos.splice(x,1),qt(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),l.flash=.3,l.tremor=.5;const N=4+Math.min(4,l.chefesVencidos);for(let q=0;q<N;q++)l.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let q=0;q<6;q++)Ka(M.x,M.y,6);l.tirosInimigos=[],l.campos=[],l.ondaEstado==="chefe"&&Za(),bt("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function yt(){const M=Math.random()*Math.PI*2,x=100+Math.random()*40;l.buraco={x:l.nx+Math.cos(M)*x,y:l.ny+Math.sin(M)*x,vida:28,r:22},bt("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function Rt(M){const x=l.buraco;x.vida-=M;const N=x.x-l.nx,q=x.y-l.ny,j=Math.hypot(N,q)||1;if(j<70){const K=38*(1-j/70);l.nx+=N/j*K*M,l.ny+=q/j*K*M}if(j<9){at();return}x.vida<=0&&(l.buraco=null,l.proxBuraco=l.t+50+Math.random()*40)}function at(){w("chefe"),l.alienIdx=(l.alienIdx+1+Math.floor(Math.random()*(Sr.length-1)))%Sr.length,l.mundoSalvo={nx:l.nx,ny:l.ny,cx:l.cx,cy:l.cy,inimigos:l.inimigos,tirosInimigos:l.tirosInimigos,campos:l.campos,hp:l.hp,buraco:l.buraco,chefe:l.chefe};const M=Math.round(95*(1+l.aliensVencidos*.6+(l.fase-1)*.25)*(1+l.t/300)),x={tipo:"alien",x:un,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:l.alienIdx,cd:2,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null};l.hp=l.maxHp,l.invul=1,l.inimigos=[x],l.tirosInimigos=[],l.campos=[],l.raios=[],l.tiros=[],l.misseis=[],l.chefe=null,l.alien=x,l.nx=un,l.ny=Bt-40,l.cx=un,l.cy=ra,l.flash=.5,bt(`${Sr[l.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function Dt(M){const x=l.mundoSalvo;if(l.nx=x.nx,l.ny=x.ny,l.cx=x.cx,l.cy=x.cy,l.inimigos=x.inimigos,l.tirosInimigos=x.tirosInimigos,l.campos=x.campos,l.chefe=x.chefe,l.hp=x.hp,l.tiros=[],l.raios=[],l.misseis=[],l.alien=null,l.mundoSalvo=null,l.buraco=null,w(l.chefe?"chefe":"normal"),l.invul=2,l.proxBuraco=l.t+60+Math.random()*40,l.flash=.4,M){l.aliensVencidos+=1,l.imaT=Math.max(l.imaT,3),$t(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");for(let q=0;q<6;q++)Ka(l.nx+(Math.random()-.5)*40,l.ny+(Math.random()-.5)*40,6);const N=Object.keys(zh).filter(q=>!l.poderes[q]);if(N.length&&l.slots.includes(null))zi(l,N[Math.floor(Math.random()*N.length)]);else{const q=Object.keys(l.armasNivel).filter(j=>l.armasNivel[j]>0&&l.armasNivel[j]<4);if(q.length){const j=q[Math.floor(Math.random()*q.length)];l.armasNivel[j]+=1,bt(`${Xs[j].nome} EVOLUIU PARA N${l.armasNivel[j]}!`,3.2)}else l.hp=l.maxHp,bt("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else bt("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const tn={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},kt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},zt=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function ln(M){const x=l.alien,N=x.hp<x.hpMax*.5,q=x.hp<x.hpMax*.25,j=1+Math.min(.6,l.t/500),K=(q?2:N?1.6:1.25)*j,we=(q?1.5:N?1.35:1.2)*(1+(j-1)*.6),Ge=he=>he*we;x.ta+=M*(q?2:N?1.7:1.3)*j,x.fase+=M,x.sumido=Math.max(0,x.sumido-M),N&&!x.furiaDita&&(x.furiaDita=!0,bt("!! FÚRIA !!",1.6),l.flash=.2,n(80,.4,"sawtooth",.06)),q&&!x.desesperoDito&&(x.desesperoDito=!0,bt("!! DESESPERO !!",1.6),l.flash=.25,n(60,.5,"sawtooth",.07));const et=()=>un+Math.sin(x.ta*.7)*95,rt=()=>48+Math.sin(x.ta*1.3)*12;(x.estado==="espera"||x.estado==="carga"||x.estado==="salvas"||x.estado==="padrao")&&x.sumido<=0&&(x.x=et(),x.y=rt());const O=(he,Ee)=>[Math.max(ht.x0+6,Math.min(ht.x1-6,he)),Math.max(ht.y0+6,Math.min(ht.y1-6,Ee))],oe=()=>{const he=l.nx-x.x,Ee=l.ny-x.y,Le=Math.hypot(he,Ee)||1;x.dirX=he/Le,x.dirY=Ee/Le,x.dashMax=.75,x.estado="aviso",x.carga=.8},fe=()=>{const he=l.nx<un;x.x=he?ht.x1-4:ht.x0+4,x.y=O(0,l.ny)[1],x.dirX=he?-1:1,x.dirY=0,x.dashMax=1.15,x.estado="aviso",x.carga=.75};if(x.estado==="espera"){if(x.cd-=M*K,x.cd<=0){const he=Sr[x.v].pesos,Ee=Le=>Le==="rajada"||Le==="mira"||Le==="investida";x.ataque=Ut(zt.filter(([,,Le])=>l.t>=Le).map(([Le,ct])=>[Le,(ct+(he[Le]||0))*(Ee(Le)?1:.3)]).filter(([Le,ct])=>ct>0&&!(x.ultimoPoder&&!Ee(Le)))),x.ultimoPoder=!Ee(x.ataque),x.estado="carga",x.carga=.5,$t(x.x,Math.max(12,x.y-24),tn[x.ataque]||"","#ff7ab8")}}else if(x.estado==="carga"){if(x.carga-=M,x.carga<=0){const he=x.ataque;if(he==="rajada"){const Ee=q?30:N?24:18,Le=Math.random()*6;for(let ct=0;ct<Ee;ct++)bn(x.x,x.y,Le+ct*Math.PI*2/Ee,Ge(62));x.estado="espera",x.cd=2}else if(he==="mira")x.salvas=q?6:N?5:4,x.cdSalva=0,x.estado="salvas";else if(he==="teleporte")x.sumido=.6,x.estado="teleporte",x.carga=.6;else if(he==="invocar"){const Ee=l.inimigos.filter(Le=>Le.tipo==="inseto").length;for(let Le=0;Le<4&&Ee+Le<10;Le++)Ki("inseto",x.x+(Le-1.5)*12,x.y+14);x.estado="espera",x.cd=1.8,n(300,.2,"triangle",.05)}else if(he==="ovnis"){const Ee=l.inimigos.filter(Le=>Le.tipo==="atirador").length;for(let Le=0;Le<2&&Ee+Le<3;Le++)Ki("atirador",x.x+(Le?16:-16),x.y+14);x.estado="espera",x.cd=2,n(300,.25,"triangle",.05)}else if(he==="investida")x.combo=q?1:0,x.modo="investida",oe();else if(he==="foice")x.combo=q?3:N?2:1,x.modo="investida",oe();else if(he==="corte")x.combo=q?2:N?1:0,x.modo="corte",fe();else if(he==="raio"){const Ee=Math.atan2(l.ny-x.y,l.nx-x.x),Le=q?[Ee-.7,Ee-.35,Ee,Ee+.35,Ee+.7]:N?[Ee-.5,Ee,Ee+.5]:[Ee];for(const ct of Le)l.raios.push({x:x.x,y:x.y+8,ang:ct,aviso:.9,vida:.55,tick:0,ligou:!1});x.estado="espera",x.cd=2.2,n(500,.3,"sine",.05)}else if(he==="olhar"){const Ee=Math.atan2(l.ny-x.y,l.nx-x.x),Le=q?7:N?6:5;for(let ct=0;ct<Le;ct++)l.raios.push({x:x.x,y:x.y+8,ang:Ee+(ct-(Le-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});x.estado="espera",x.cd=2.4,n(520,.3,"sine",.05)}else if(he==="varredura"){const Ee=Math.random()<.5?1:-1,Le=Math.atan2(l.ny-x.y,l.nx-x.x)-1*Ee;for(let ct=0;ct<(N?2:1);ct++)l.raios.push({x:x.x,y:x.y+8,ang:Le+ct*Math.PI,giro:1.15*Ee*(q?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});x.estado="espera",x.cd=2.6,n(480,.3,"sine",.05)}else if(he==="tentaculos"){const Ee=Math.random()*6.28,Le=Math.random()<.5?1:-1,ct=N?6:4;for(let tt=0;tt<ct;tt++)l.raios.push({x:x.x,y:x.y+8,ang:Ee+tt*Math.PI*2/ct,giro:.9*Le,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});x.estado="espera",x.cd=3,n(420,.3,"sine",.05)}else if(he==="bombas")Xe(x.x,x.y,q?6:N?5:4,1.1),x.estado="espera",x.cd=2;else if(he==="psiquico"){const Ee=Math.random()*6.28,Le=N?6:5;for(let ct=0;ct<Le;ct++){const[tt,Et]=O(l.nx+Math.cos(Ee+ct*Math.PI*2/Le)*40,l.ny+Math.sin(Ee+ct*Math.PI*2/Le)*40);l.campos.push({x:tt,y:Et,r:24,aviso:1.1+ct*.08,avisoMax:1.1+ct*.08,vida:3.5,tick:0,ox:x.x,oy:x.y})}l.campos.push({x:l.nx,y:l.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:x.x,oy:x.y}),x.estado="espera",x.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else kt[he]?(x.padrao={tipo:he,t:kt[he]*(N?1.25:1),acc:0,ang:Math.random()*6.28},x.estado="padrao"):x.estado="espera";n(220,.12,"square",.05)}}else if(x.estado==="padrao"){const he=x.padrao;if(he.t-=M,he.acc-=M,he.acc<=0){if(he.tipo==="espiral"){he.acc=.075,he.ang+=.38;const Ee=q?4:N?3:2;for(let Le=0;Le<Ee;Le++)bn(x.x,x.y+6,he.ang+Le*Math.PI*2/Ee,Ge(58));ae("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(he.tipo==="chuva"){he.acc=q?.45:.6;const Ee=[ht.x0+24+Math.random()*(ht.x1-ht.x0-48)];N&&Ee.push(ht.x0+24+Math.random()*(ht.x1-ht.x0-48));for(let Le=ht.x0+4;Le<=ht.x1-4;Le+=13)Ee.every(ct=>Math.abs(Le-ct)>19)&&bn(Le,ht.y0,Math.PI/2,Ge(58));n(240,.08,"square",.03)}else if(he.tipo==="aneis"){he.acc=.55;const Ee=24,Le=Math.random()*Math.PI*2;for(let ct=0;ct<Ee;ct++){const tt=ct*Math.PI*2/Ee;Math.abs(Math.atan2(Math.sin(tt-Le),Math.cos(tt-Le)))>.42&&bn(x.x,x.y,tt,Ge(55))}n(280,.08,"triangle",.03)}else if(he.tipo==="cerco"){he.acc=q?.08:.12;const Ee=Math.random()<.5?ht.x0:ht.x1,Le=ht.y0+Math.random()*(ht.y1-ht.y0);bn(Ee,Le,Math.atan2(l.ny-Le,l.nx-Ee)+(Math.random()-.5)*.3,Ge(72)),ae("cerco",90,()=>n(360,.04,"square",.02))}}he.t<=0&&(x.estado="espera",x.cd=1.8)}else if(x.estado==="salvas"){if(x.cdSalva-=M,x.cdSalva<=0){const he=Math.atan2(l.ny-x.y,l.nx-x.x);for(let Ee=-1;Ee<=1;Ee++)bn(x.x,x.y+12,he+Ee*.22,Ge(95));x.salvas-=1,x.cdSalva=.26,n(260,.06,"square",.04),x.salvas<=0&&(x.estado="espera",x.cd=1.6)}}else if(x.estado==="aviso")x.carga-=M,x.x+=(Math.random()-.5)*1.6,x.y+=(Math.random()-.5)*1.6,x.carga<=0&&(x.estado="investida",x.dashT=x.dashMax*(N?1.1:1),n(150,.25,"sawtooth",.06));else if(x.estado==="investida"){const he=q?400:N?350:310;x.x+=x.dirX*he*M,x.y+=x.dirY*he*M,x.dashT-=M;const Ee=x.x<ht.x0||x.x>ht.x1||x.y<ht.y0||x.y>ht.y1;x.x=Math.max(ht.x0,Math.min(ht.x1,x.x)),x.y=Math.max(ht.y0-10,Math.min(ht.y1,x.y)),(x.dashT<=0||Ee)&&(l.tremor=Math.max(l.tremor,Ee?.2:0),x.combo>0?(x.combo-=1,x.modo==="corte"?fe():oe(),x.carga=.4):x.estado="volta")}else if(x.estado==="volta"){const he=et(),Ee=rt(),Le=he-x.x,ct=Ee-x.y,tt=Math.hypot(Le,ct)||1;x.x+=Le/tt*Math.min(tt,260*M),x.y+=ct/tt*Math.min(tt,260*M),tt<5&&(x.estado="espera",x.cd=1.2)}else if(x.estado==="teleporte"&&(x.carga-=M,x.carga<=0)){x.x=ht.x0+20+Math.random()*(ht.x1-ht.x0-40),x.y=ht.y0+10+Math.random()*40,x.sumido=0;const he=q?16:12;for(let Ee=0;Ee<he;Ee++)bn(x.x,x.y,Ee*Math.PI*2/he,Ge(70));x.ta=Math.asin(Math.max(-1,Math.min(1,(x.x-un)/95)))/.7,x.estado="espera",x.cd=1.3,n(440,.1,"square",.05)}}function Ke(M){let x=(Ne.has("ArrowRight")||Ne.has("KeyD")?1:0)-(Ne.has("ArrowLeft")||Ne.has("KeyA")?1:0),N=(Ne.has("ArrowDown")||Ne.has("KeyS")?1:0)-(Ne.has("ArrowUp")||Ne.has("KeyW")?1:0);if(!x&&!N&&de.ativo)if(de.toque)x=de.dx/18,N=de.dy/18;else{const j=de.x-(l.nx-l.cx+Ot/2),K=de.y-(l.ny-l.cy+Bt/2),we=Math.hypot(j,K);we>3&&(x=j/we,N=K/we)}const q=Math.hypot(x,N);if(l.movendo=q>.08,q>.08){l.dirX=x/q,l.dirY=N/q;const j=l.arma>=2?l.slots[l.arma-2]:"normal",K=l.armasNivel.turbo||1,we=l.armasNivel.drift||1,Ge=j==="turbo"&&l.boostE>0?1.55+.18*(K-1):1,et=l.driftT>0?1.75+.15*(we-1):1,rt=j==="salto"&&l.saltoCarga>0?.32:1,k=l.turboT>0?1.35:1,O=Math.min(1,q),oe=l.velNave*Ge*et*rt*k*(l.buffVelT>0?1.5:1)*(l.alien?1:l.lentidao||1);l.nx+=l.dirX*oe*M*O,l.ny+=l.dirY*oe*M*O}if(l.alien)l.nx=Math.max(ht.x0,Math.min(ht.x1,l.nx)),l.ny=Math.max(ht.y0,Math.min(ht.y1,l.ny)),l.cx=un,l.cy=ra;else{const j=Math.min(1,M*5);l.cx+=(l.nx-l.cx)*j,l.cy+=(l.ny-l.cy)*j}}function fn(M){l.proxOnda-=M,l.proxOnda<=0&&Vo(),l.ondaT=Math.max(0,l.ondaT-M),l.ondaEstado=l.chefe?"chefe":l.ondaT>0?"ativa":"calma";const x=l.ondaT>0?.75+.55*(1-l.ondaT/l.ondaDur):0,N=l.ondaT>0?(.9+.2*l.onda)*x:0,q=.6+Math.min(1.4,l.t*.005)+.03*l.nivel;l.spawnAcc+=M*(q+N)*(l.ondaEstado==="chefe"?.6:1),(!Number.isFinite(l.spawnAcc)||l.spawnAcc<0)&&(l.spawnAcc=0);const j=Math.min(60,14+3*Ja());let K=0;for(;l.spawnAcc>=1&&K<8;)l.spawnAcc-=1,K+=1,l.inimigos.length<j&&ii();l.ultX==null&&(l.ultX=l.nx,l.ultY=l.ny,l.andou=0,l.angAndar=0);const we=l.nx-l.ultX,Ge=l.ny-l.ultY,et=Math.hypot(we,Ge);for(l.ultX=l.nx,l.ultY=l.ny,et>0&&et<60&&(l.andou+=et,l.angAndar=Math.atan2(Ge,we));l.andou>=170;)l.andou-=170,l.inimigos.length<j&&ii(99,l.angAndar);if(l.ondaT<=0&&!l.chefe&&!l.buraco&&l.t>=l.proxBuraco&&yt(),l.proxEstrela-=M,l.proxEstrela<=0&&(l.proxEstrela=16+Math.random()*14,l.itens.filter(k=>ua[k.tipo]).length<2)){const k=Math.random()*Math.PI*2,O=70+Math.random()*90;l.itens.push({tipo:Ut(G_),x:l.nx+Math.cos(k)*O,y:l.ny+Math.sin(k)*O,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(l.buraco&&(Rt(M),l.alien))return;l.rochas.length<3&&Math.random()<M*.12&&C();for(let k=l.rochas.length-1;k>=0;k--){const O=l.rochas[k];O.x+=O.vx*M,O.y+=O.vy*M,O.piscar=Math.max(0,O.piscar-M);const oe=l.nx-O.x,fe=l.ny-O.y,he=Math.hypot(oe,fe)||1;if(he>650){l.rochas.splice(k,1);continue}he<O.r+oa&&(l.nx+=oe/he*(O.r+oa-he),l.ny+=fe/he*(O.r+oa-he))}for(const k of[...l.inimigos]){if(k.tipo==="chefe"){qe(k,M),o.empurrar(k,Yn.chefe.raio,{x:l.nx,y:l.ny},30*M);continue}k.buffT=Math.max(0,(k.buffT||0)-M),k.suporteFx=Math.max(0,(k.suporteFx||0)-M);const O=l.nx-k.x,oe=l.ny-k.y,fe=Math.hypot(O,oe)||1,he=k.buffT>0?1.35:1;let Ee=O/fe*k.vel*he,Le=oe/fe*k.vel*he;if(k.tipo==="morcego"){const tt=Math.sin(l.ta*5+k.fase)*28;Ee+=-oe/fe*tt,Le+=O/fe*tt}else if(k.tipo==="inseto"){const tt=Math.sin(l.ta*9+k.fase)*22;Ee+=-oe/fe*tt,Le+=O/fe*tt}else if(k.tipo==="atirador"){const tt=fe>110?1:fe<80?-.8:0,Et=Math.sin(l.ta*1.2+k.fase)*.5;Ee=(O/fe*tt+-oe/fe*Et)*k.vel*he,Le=(oe/fe*tt+O/fe*Et)*k.vel*he,k.cd-=M*he,k.cd<=0&&Je(k)&&(bn(k.x,k.y,Math.atan2(oe,O),74,Ta()*(k.buffT>0?1.5:1)),k.cd=1.8+Math.random()*.9)}else if(k.tipo==="sentinela"){const tt=fe>125?1:fe<92?-.9:0,Et=Math.atan2(oe,O);if(Ee=(O/fe*tt+-oe/fe*Math.sin(l.ta+k.fase)*.35)*k.vel*he,Le=(oe/fe*tt+O/fe*Math.sin(l.ta+k.fase)*.35)*k.vel*he,k.cd-=M*he,k.cd<=0&&Je(k)){for(const Wt of[-.18,0,.18])bn(k.x,k.y,Et+Wt,82,Ta()*(k.buffT>0?1.5:1));k.cd=2.5+Math.random()*.8}}else if(k.tipo==="bombardeiro"){const tt=fe>145?1:fe<110?-.8:0;Ee=O/fe*tt*k.vel*he,Le=oe/fe*tt*k.vel*he,k.cd-=M*he,k.cd<=0&&Je(k)&&(Xe(k.x,k.y,k.buffT>0?2:1,1.15),k.cd=4+Math.random()*1.2)}else if(k.tipo==="fulminante"){const tt=fe>145?.9:fe<105?-.9:0,Et=Math.atan2(oe,O);Ee=(O/fe*tt+-oe/fe*Math.sin(l.ta*1.7+k.fase)*.28)*k.vel*he,Le=(oe/fe*tt+O/fe*Math.sin(l.ta*1.7+k.fase)*.28)*k.vel*he,k.cd-=M*he,k.cd<=0&&Je(k)&&(l.raios.push({x:k.x,y:k.y,ang:Et,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:Ta(),dono:k}),k.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if(k.tipo==="curandeiro"){const tt=l.inimigos.filter(Et=>Et!==k&&!Et.morto&&Et.hp<Et.hpMax&&Et.tipo!=="chefe").sort((Et,Wt)=>Math.hypot(Et.x-k.x,Et.y-k.y)-Math.hypot(Wt.x-k.x,Wt.y-k.y))[0];if(tt){const Et=tt.x-k.x,Wt=tt.y-k.y,B=Math.hypot(Et,Wt)||1;B>42?(Ee=Et/B*k.vel,Le=Wt/B*k.vel):Ee=Le=0}else{const Et=fe<95?-.8:fe>140?.45:0;Ee=O/fe*Et*k.vel,Le=oe/fe*Et*k.vel}if(k.cd-=M,k.cd<=0&&tt&&Math.hypot(tt.x-k.x,tt.y-k.y)<Es){const Et=Math.max(1,Math.ceil(tt.hpMax*.22));tt.hp=Math.min(tt.hpMax,tt.hp+Et),tt.suporteFx=.8,k.suporteFx=.8,$t(tt.x,tt.y-8,`+${Et}`,"#7dff9a"),qt(tt.x,tt.y,5,["#7dff9a","#ffffff"],35),k.cd=2.7+Math.random()*.8}}else if(k.tipo==="amplificador"){const tt=l.inimigos.filter(Wt=>Wt!==k&&!Wt.morto&&Wt.tipo!=="chefe"&&Math.hypot(Wt.x-k.x,Wt.y-k.y)<Es);for(const Wt of tt)Wt.buffT=Math.max(Wt.buffT||0,.4);tt.length&&(k.suporteFx=.25);const Et=fe<100?-.7:fe>150?.4:0;Ee=O/fe*Et*k.vel,Le=oe/fe*Et*k.vel}const ct=o.fatorLento(k.x,k.y);k.x+=Ee*M*ct,k.y+=Le*M*ct,o.empurrar(k,Yn[k.tipo].raio,{x:l.nx,y:l.ny},k.vel*M*.9),k.piscar=Math.max(0,k.piscar-M)}l.inimigos=l.inimigos.filter(k=>k.tipo==="chefe"||Math.hypot(k.x-l.nx,k.y-l.ny)<520);const rt={x:l.nx,y:l.ny};o.empurrar(rt,oa),l.nx=rt.x,l.ny=rt.y,l.lentidao=o.fatorLento(l.nx,l.ny);for(let k=l.itens.length-1;k>=0;k--){const O=l.itens[k];O.vida-=M;const oe=l.nx-O.x,fe=l.ny-O.y,he=Math.hypot(oe,fe)||1;if(O.tipo==="moedaEsp"&&he<l.raioIma*1.3&&(O.x+=oe/he*90*M,O.y+=fe/he*90*M),he<oa+8){ee(O),l.itens.splice(k,1);continue}O.vida<=0&&l.itens.splice(k,1)}for(let k=l.cristais.length-1;k>=0;k--){const O=l.cristais[k];O.x+=O.vx*M,O.y+=O.vy*M;const oe=Math.pow(.05,M);O.vx*=oe,O.vy*=oe;const fe=l.nx-O.x,he=l.ny-O.y,Ee=Math.hypot(fe,he)||1;if(l.imaT>0)O.x+=fe/Ee*280*M,O.y+=he/Ee*280*M;else if(Ee<l.raioIma){const Le=70+(l.raioIma-Ee)*4;O.x+=fe/Ee*Le*M,O.y+=he/Ee*Le*M}Ee<oa+l.raioPegar&&(l.xp+=O.v*l.bonusXp*(l.buffXpT>0?2:1),l.cristais.splice(k,1),qt(O.x,O.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(O.v,6)*60,.05,"square",.03))}}function Pt(){let M=null,x=1/0;for(const j of l.inimigos){if(j.sumido>0||!Je(j))continue;const K=Math.hypot(j.x-l.nx,j.y-l.ny);K<x&&(x=K,M=j)}let N=null,q=120;for(const j of l.rochas){if(!Je(j))continue;const K=Math.hypot(j.x-l.nx,j.y-l.ny);K<q&&(q=K,N=j)}return N&&(!M||x>45)?N:M}const En=M=>M.r||Yn[M.tipo].raio;function On(M){Be!=="jogando"||!l||M>=2&&!l.slots[M-2]||l.arma!==M&&(l.arma=M,n(M===2?440:600,.05,"square",.03))}function ai(){if(l.arma<2||l.slots[l.arma-2]!=="orbes")return[];const M=1+l.armasNivel.orbes,x=20+M*1.5;return Array.from({length:M},(N,q)=>({x:l.nx+Math.cos(l.orbeAng+q*Math.PI*2/M)*x,y:l.ny+Math.sin(l.orbeAng+q*Math.PI*2/M)*x}))}function ji(M,x){const N=l.armasNivel.missil,q=24*(1+.16*(N-1)),j=(5+l.dano*2)*l.danoGlobal*(1+.32*(N-1));l.ondas.push({x:M,y:x,r:0,max:q,v:170,cor:"#ff9a3a"}),qt(M,x,14,["#ffd23f","#ff7a3a","#ffffff"],80),l.tremor=Math.max(l.tremor,.1);for(const K of[...l.inimigos])!(K.sumido>0)&&Math.hypot(K.x-M,K.y-x)<q+Yn[K.tipo].raio&&Qi(K,j);for(const K of[...l.rochas])if(Math.hypot(K.x-M,K.y-x)<q+K.r)for(let we=0;we<3&&l.rochas.includes(K);we++)H(K);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function Ft(M){const x=l.arma>=2?l.slots[l.arma-2]:"normal",N=l.recM*l.recargaGlobal;l.laser=null;let q=!1;if(x==="laser"&&!l.laserQuente){const k=l.armasNivel.laser,O=Pt(),oe=l.laserAlc*(1+.18*(k-1));if(O&&Math.hypot(O.x-l.nx,O.y-l.ny)<oe+En(O)){q=!0;const fe=Math.atan2(O.y-l.ny,O.x-l.nx),he=Math.cos(fe),Ee=Math.sin(fe);if(l.mira=fe,l.laser={ang:fe,len:oe},l.laserE-=M*1.15,l.laserE<=0&&(l.laserE=0,l.laserQuente=!0,n(180,.2,"sawtooth",.04)),l.laserTick-=M,l.laserTick<=0){l.laserTick=.1,l.laserN+=1;const Le=l.laserDano*(.5+.5*l.dano)*l.danoGlobal*(1+.3*(k-1))*.1;for(const ct of[...l.inimigos]){const tt=ct.x-l.nx,Et=ct.y-l.ny,Wt=tt*he+Et*Ee,B=Math.abs(-tt*Ee+Et*he),Fe=Yn[ct.tipo].raio;!(ct.sumido>0)&&Wt>0&&Wt<oe+Fe&&B<Fe+3&&(Qi(ct,Le),Math.random()<.4&&qt(ct.x,ct.y,1,["#8bd3ff","#ffffff"],40))}if(l.laserN%3===0)for(const ct of[...l.rochas]){const tt=ct.x-l.nx,Et=ct.y-l.ny,Wt=tt*he+Et*Ee,B=Math.abs(-tt*Ee+Et*he);Wt>0&&Wt<oe+ct.r&&B<ct.r+2&&H(ct)}ae("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!q){const k=Math.max(1,l.armasNivel.laser),O=l.laserMax*(1+.18*(k-1));l.laserE=Math.min(O,l.laserE+M*O*.13*N*(1+.18*(k-1))),l.laserQuente&&l.laserE>=l.laserMax*.6&&(l.laserQuente=!1)}if(x==="missil"&&(l.missilT-=M,l.missilT<=0)){const k=[...l.inimigos.filter(O=>!(O.sumido>0)&&Je(O)),...l.rochas.filter(Je)].map(O=>({o:O,d:Math.hypot(O.x-l.nx,O.y-l.ny)})).filter(O=>O.d<135).sort((O,oe)=>O.d-oe.d);if(k.length){const O=l.armasNivel.missil,oe=1+(O>=3?1:0)+(O>=4?1:0);for(let fe=0;fe<oe;fe++){const he=k[fe%k.length].o;l.misseis.push({x:l.nx,y:l.ny,ang:Math.atan2(he.y-l.ny,he.x-l.nx)+(fe-(oe-1)/2)*.9,alvo:he,vida:2,v:70})}l.missilMax=3.6/(N*(1+.22*(O-1))),l.missilT=l.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else l.missilT=0}for(let k=l.misseis.length-1;k>=0;k--){const O=l.misseis[k],oe=O.alvo,fe=oe&&oe.hp>0&&!oe.morto&&(l.inimigos.includes(oe)||l.rochas.includes(oe));if(fe){let Ee=Math.atan2(oe.y-O.y,oe.x-O.x)-O.ang;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee)),O.ang+=Math.max(-6*M,Math.min(6*M,Ee))}O.v=Math.min(150,O.v+160*M),O.x+=Math.cos(O.ang)*O.v*M,O.y+=Math.sin(O.ang)*O.v*M,O.vida-=M,Math.random()<.6&&l.parts.push({x:O.x,y:O.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(fe&&Math.hypot(oe.x-O.x,oe.y-O.y)<En(oe)+3||O.vida<=0)&&(l.misseis.splice(k,1),ji(O.x,O.y))}if(x==="orbes"){const k=l.armasNivel.orbes;l.orbeAng+=M*3.2*(1+.18*(k-1))*l.recargaGlobal;const O=(2+l.dano*.5)*l.danoGlobal*(1+.32*(k-1));for(const oe of ai()){for(const fe of[...l.inimigos])fe.sumido>0||(fe.cdOrbe=(fe.cdOrbe||0)-M,fe.cdOrbe<=0&&Math.hypot(oe.x-fe.x,oe.y-fe.y)<Yn[fe.tipo].raio+4&&(Qi(fe,O),fe.cdOrbe=.35,qt(fe.x,fe.y,2,["#ff3bd4","#ffffff"],40)));for(const fe of[...l.rochas])fe.cdOrbe=(fe.cdOrbe||0)-M,fe.cdOrbe<=0&&Math.hypot(oe.x-fe.x,oe.y-fe.y)<fe.r+4&&(H(fe),fe.cdOrbe=.5)}}const j=Math.max(1,l.armasNivel.turbo),K=3+.75*(j-1);l.boostMax=K,x==="turbo"&&l.movendo&&l.boostE>0?(l.boostE=Math.max(0,l.boostE-M),Math.random()<.45&&l.parts.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vx:-l.dirX*20,vy:-l.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):l.boostE=Math.min(K,l.boostE+M*.5*N*(1+.12*(j-1)));const we=Math.max(1,l.armasNivel.cura);if(l.curaMax=Math.max(4.5,(11-1.6*(we-1))/N),l.curaCd=Math.max(0,l.curaCd-M),x==="cura"&&l.curaCd<=0&&l.hp<l.maxHp){const k=1+(we>=3?1:0)+(we>=4?1:0);l.hp=Math.min(l.maxHp,l.hp+k),l.curaCd=l.curaMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:30,v:80,cor:"#7dff9a"}),qt(l.nx,l.ny,12,["#7dff9a","#ffffff"],45),$t(l.nx,l.ny-13,`+${k} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const Ge=Math.max(1,l.armasNivel.escudo);l.escudoMax=Math.max(6,(13-1.3*(Ge-1))/N),l.escudoCd=Math.max(0,l.escudoCd-M),x==="escudo"&&l.escudoCd<=0&&l.escudoT<=0&&(l.escudoT=2.4+.75*(Ge-1),l.escudoCd=l.escudoMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),$t(l.nx,l.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const et=Math.max(1,l.armasNivel.salto);if(l.saltoMax=Math.max(3.5,(8-.85*(et-1))/N),l.saltoCd=Math.max(0,l.saltoCd-M),l.saltoCargaMax=Math.max(.42,.82-.1*(et-1)),x!=="salto"||!l.movendo?l.saltoCarga=0:l.saltoCd<=0&&l.saltoCarga<=0&&(l.saltoCarga=l.saltoCargaMax,n(180,.16,"sine",.04)),x==="salto"&&l.saltoCarga>0&&(l.saltoCarga-=M,Math.random()<.55&&l.parts.push({x:l.nx+(Math.random()-.5)*18,y:l.ny+(Math.random()-.5)*18,vx:-l.dirX*8,vy:-l.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),l.saltoCarga<=0)){const k=l.nx,O=l.ny,oe=58+18*et;l.nx+=l.dirX*oe,l.ny+=l.dirY*oe,l.alien&&(l.nx=Math.max(ht.x0,Math.min(ht.x1,l.nx)),l.ny=Math.max(ht.y0,Math.min(ht.y1,l.ny))),l.saltoCd=l.saltoMax,l.invul=Math.max(l.invul,.35),l.ondas.push({x:k,y:O,r:0,max:24,v:120,cor:"#a56bff"}),l.ondas.push({x:l.nx,y:l.ny,r:0,max:24,v:120,cor:"#a56bff"}),qt(k,O,14,["#a56bff","#ffffff"],60),qt(l.nx,l.ny,14,["#a56bff","#ffffff"],60),l.flash=Math.max(l.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const rt=Math.max(1,l.armasNivel.drift);l.driftMax=Math.max(3.2,(7-.7*(rt-1))/N),l.driftCd=Math.max(0,l.driftCd-M),l.driftT=Math.max(0,l.driftT-M),x==="drift"&&l.driftCd<=0&&l.movendo&&l.driftT<=0&&(l.driftT=.75+.22*rt,l.driftCd=l.driftMax,l.driftAcc=0,l.tremor=Math.max(l.tremor,.12),n(130,.22,"sawtooth",.05)),l.driftT>0&&l.movendo&&(l.driftAcc-=M,l.driftAcc<=0&&(l.driftAcc=.055,l.trilhasFogo.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vida:1+.12*rt,max:1+.12*rt,nv:rt})));for(const k of l.inimigos)k.cdFogo=Math.max(0,(k.cdFogo||0)-M);for(let k=l.trilhasFogo.length-1;k>=0;k--){const O=l.trilhasFogo[k];O.vida-=M;for(const oe of[...l.inimigos])!(oe.sumido>0)&&oe.cdFogo<=0&&Math.hypot(oe.x-O.x,oe.y-O.y)<Yn[oe.tipo].raio+7&&(Qi(oe,(1.2+O.nv*.75)*l.danoGlobal),oe.cdFogo=.22);O.vida<=0&&l.trilhasFogo.splice(k,1)}}function Kt(M){for(let x=l.tiros.length-1;x>=0;x--){const N=l.tiros[x];if(N.x+=N.vx*M,N.y+=N.vy*M,Math.hypot(N.x-l.nx,N.y-l.ny)>260){l.tiros.splice(x,1);continue}let q=!1;for(const j of[...l.inimigos])if(!(N.acertou.has(j)||j.sumido>0)&&Math.hypot(N.x-j.x,N.y-j.y)<Yn[j.tipo].raio+2)if(N.acertou.add(j),qt(N.x,N.y,2,["#ffe14a","#ffffff"],40),Qi(j,N.dano),N.perf>0)N.perf-=1;else{q=!0;break}if(!q){for(const j of[...l.rochas])if(!N.acertou.has(j)&&Math.hypot(N.x-j.x,N.y-j.y)<j.r+2)if(N.acertou.add(j),H(j),N.perf>0)N.perf-=1;else{q=!0;break}}q&&l.tiros.splice(x,1)}}function xi(M){for(let x=l.tirosInimigos.length-1;x>=0;x--){const N=l.tirosInimigos[x];if(N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0||Math.hypot(N.x-l.nx,N.y-l.ny)>420||l.alien&&(N.x<ht.x0-40||N.x>ht.x1+40||N.y<ht.y0-40||N.y>ht.y1+40)){l.tirosInimigos.splice(x,1);continue}Math.hypot(N.x-l.nx,N.y-l.ny)<oa+1.5&&(wa(N.dano),qt(N.x,N.y,4,["#ff5a8a","#ffffff"],50),l.tirosInimigos.splice(x,1))}for(let x=l.raios.length-1;x>=0;x--){const N=l.raios[x];if(N.dono){if(N.dono.morto){l.raios.splice(x,1);continue}N.x=N.dono.x,N.y=N.dono.y}if(N.aviso>0){N.aviso-=M;continue}N.ligou||(N.ligou=!0,l.tremor=Math.max(l.tremor,.2),n(110,.4,"sawtooth",.06)),N.vida-=M,N.tick-=M,N.giro&&(N.ang+=N.giro*M),N.seg&&l.alien&&(N.x=l.alien.x,N.y=l.alien.y+8);const q=l.nx-N.x,j=l.ny-N.y,K=q*Math.cos(N.ang)+j*Math.sin(N.ang),we=Math.abs(-q*Math.sin(N.ang)+j*Math.cos(N.ang));K>0&&K<400&&we<8&&N.tick<=0&&(wa(N.dano||1),N.tick=.3),N.vida<=0&&l.raios.splice(x,1)}for(let x=l.campos.length-1;x>=0;x--){const N=l.campos[x];if(N.aviso>0){N.aviso-=M,N.aviso<=0&&(l.tremor=Math.max(l.tremor,.15),n(100,.2,"sawtooth",.05));continue}N.vida-=M,N.tick-=M,Math.hypot(l.nx-N.x,l.ny-N.y)<N.r+3&&N.tick<=0&&(wa(1),N.tick=.5),N.vida<=0&&l.campos.splice(x,1)}}function Ht(){for(const M of[...l.inimigos]){const x=Yn[M.tipo];if(Math.hypot(M.x-l.nx,M.y-l.ny)>=x.raio+oa||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(wa(x.dano)){const j=l.nx-M.x,K=l.ny-M.y,we=Math.hypot(j,K)||1;l.nx+=j/we*18,l.ny+=K/we*18}continue}if(x.dano<=0){const j=M.x-l.nx,K=M.y-l.ny,we=Math.hypot(j,K)||1;M.x+=j/we*8,M.y+=K/we*8;continue}qt(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const q=l.inimigos.indexOf(M);q>=0&&l.inimigos.splice(q,1),wa(x.dano)}}function vi(M){if(l.ta+=M,l.alien||(l.t+=M),l.invul=Math.max(0,l.invul-M),l.tremor=Math.max(0,l.tremor-M),l.flash=Math.max(0,l.flash-M),l.imaT=Math.max(0,l.imaT-M),l.turboT=Math.max(0,l.turboT-M),l.escudoT=Math.max(0,l.escudoT-M),l.buffVelT=Math.max(0,l.buffVelT-M),l.buffXpT=Math.max(0,l.buffXpT-M),l.buffDanoT>0&&(l.buffDanoT-=M,l.buffDanoT<=0&&(l.buffDanoT=0,l.danoGlobal/=1.5)),l.aviso=Math.max(0,l.aviso-M),l.comboT>0&&(l.comboT-=M,l.comboT<=0&&(l.combo=0)),l.upgFx&&(l.upgFx.t-=M,l.upgFx.t<=0&&(l.upgFx=null)),Ke(M),l.alien?ln(M):fn(M),l.recarga-=M,l.arma===1&&l.recarga<=0){const x=Pt();x?(ko(x),l.recarga=1/(l.cadencia*l.recargaGlobal*(l.turboT>0?2:1))):l.recarga=.05}l.barreira<l.barreiraMax&&(l.barreiraT+=M,l.barreiraT>=l.tempoBarreira&&(l.barreira+=1,l.barreiraT=0,$t(l.nx,l.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),Ft(M),Kt(M),xi(M),Ht();for(const x of l.ondas)x.r+=x.v*M;l.ondas=l.ondas.filter(x=>x.r<x.max);for(let x=l.parts.length-1;x>=0;x--){const N=l.parts[x];N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0&&l.parts.splice(x,1)}for(let x=l.textos.length-1;x>=0;x--){const N=l.textos[x];N.y-=14*M,N.vida-=M,N.vida<=0&&l.textos.splice(x,1)}for(const x of l.inimigos)x.piscar=Math.max(0,(x.piscar||0)-M);if(l.hp<=0&&!l.pendente)if(l.alien)l.pendente="expulso";else{pp();return}if(l.pendente){const x=l.pendente;l.pendente=null,Dt(x==="vitoria");return}l.xp>=l.xpProx&&up()}let Xn=[];const Wr=M=>M.nivel?M.nivel(l):l.niveis[M.id]|0;function fp(M,x=3){const N=[...M],q=[];for(;N.length&&q.length<x;){const j=et=>(typeof et.peso=="function"?et.peso(l):et.peso)||1,K=N.reduce((et,rt)=>et+j(rt),0);let we=Math.random()*K,Ge=0;for(let et=0;et<N.length;et++)if(we-=j(N[et]),we<=0){Ge=et;break}q.push(N.splice(Ge,1)[0])}return q}function up(){l.xp-=l.xpProx,l.nivel+=1,l.xpProx=Math.round(l.xpProx*1.3+2);const M=z_.filter(K=>Wr(K)<K.max&&(!K.requer||K.requer(l)));if(Xn=fp(M),!Xn.length)return;Be="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),ye.className="arc-painel arc-upgrade";const x=i("div","arc-up-topo"),N=i("div");N.append(i("small",null,`SUBIU PARA O NÍVEL ${l.nivel}`),i("h3",null,"ESCOLHA UM UPGRADE"));const q=i("div","arc-arsenal");l.slots.forEach((K,we)=>q.append(i("span",K?"on":"",K?`${we+2} ${dd[K]} · N${l.armasNivel[K]}`:`${we+2} VAZIO`))),x.append(N,q);const j=i("div","arc-cartas");Xn.forEach((K,we)=>{const Ge=Wr(K),et=i("button","arc-carta");et.style.setProperty("--cor",K.cor||"#4aa8ff");const rt=i("span","arc-carta-topo");rt.append(i("i",null,K.icone||"▲"),i("small",null,K.grupo||"UPGRADE"),i("em",null,(typeof K.raridade=="function"?K.raridade(l):K.raridade)||"COMUM"));const k=i("span","arc-up-pips");for(let O=1;O<=K.max;O++)k.append(i("i",O<=Ge?"on":O===Ge+1?"prox":""));et.append(rt,i("b",null,K.nome),i("span","arc-desc",K.desc),k,i("strong",null,`[${we+1}] ESCOLHER · N${Ge} → N${Ge+1}`)),et.onclick=()=>Hf(we),j.append(et)}),ye.replaceChildren(x,j,i("p","arc-up-dica","A partida fica pausada enquanto você decide. Cada arma chega no máximo ao nível 4.")),ye.hidden=!1}function Hf(M){if(Be!=="escolha"||!Xn[M])return;const x=Xn[M];x.aplicar(l),x.nivel||(l.niveis[x.id]=(l.niveis[x.id]|0)+1),Pn(),l.upgFx={t:1,max:1},qt(l.nx,l.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),$t(l.nx,l.ny-16,`▲ ${x.nome}`,"#ffe14a"),ye.hidden=!0,Be="jogando",Oe=performance.now(),n(660,.08,"triangle",.05)}const cl=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Canhões e lente do laser",lado:"dir",ancora:[.88,.42],ids:["dano","cadencia","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],Qa=document.createElement("canvas");Qa.width=Qa.height=128,Qa.className="of-nave";const Qt=Qa.getContext("2d");Qt.imageSmoothingEnabled=!1;let fl=null,Xr=null;function dp(M){const x=Sn(128,128),N="#2e7de0",q="#8b93a8",j="#5a6176",K="#c9cdd8",we="#171b2c",Ge="#ff7a3a",et="#e2533a";for(const[O,oe]of[[44,34],[82,92]]){for(let fe=0;fe<3;fe++)x.linha(O+fe,92,oe+fe,118,fe===1?q:j);x.retangulo(oe-5,118,13,3,K)}x.retangulo(0,122,128,6,"#12172b");for(let O=0;O<128;O+=8)x.retangulo(O,123,4,4,"#ffd23f");x.disco(62,60,38,N),x.disco(65,62,33,we),x.elipse(46,30,7,3,"#cfe9ff"),x.elipse(40,36,3,2,"#9cc9ff");for(const[O,oe,fe,he]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])x.retangulo(O,oe,fe,he,j),x.retangulo(O,oe,fe,1,q),x.retangulo(O+2,oe+3,fe-4,2,"#2d3348");for(const[O,oe,fe,he]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])x.linha(O,oe,fe,he,Ge),x.linha(O+1,oe+1,fe+1,he+1,"#b34a1e");for(const[O,oe,fe]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])x.pixel(O,oe,fe);x.disco(65,62,14,q),x.disco(65,62,12,"#10131f");for(const[O,oe]of[[50,47],[79,47],[50,76],[79,76]])x.retangulo(O,oe,3,3,K);for(let O=0;O<M.bateria;O++)x.retangulo(51+O*5,85,4,6,"#10131f"),x.retangulo(52+O*5,86,2,4,"#7dff9a");x.disco(80,34,5,K),x.disco(80,34,4,"#8bd3ff"),x.retangulo(77,33,6,1,"#ffffff");for(let O=0;O<M.casco;O++){const oe=2.6+O*.5,fe=Math.round(62+Math.cos(oe)*35),he=Math.round(60+Math.sin(oe)*35);x.retangulo(fe-2,he-2,5,5,j),x.retangulo(fe-1,he-1,3,3,K)}const rt=1+M.projetil,k=18+Math.floor(M.dano*1.6);for(let O=0;O<rt;O++){const oe=48+O*9;x.retangulo(88,oe-2,8,9,q),x.retangulo(90,oe,k,5,et),x.retangulo(90,oe,k,1,"#ff9a6a"),x.retangulo(90+k,oe-1,3,7,K),M.lente>0&&x.disco(90+k+5,oe+2,2,"#7be3ff");for(let fe=0;fe<M.cadencia;fe++)x.retangulo(92+fe*4,oe+1,1,3,"#ffd23f")}x.retangulo(16,50,24,22,q);for(const O of[20,26,32])x.retangulo(O,50,2,22,j);x.poligono([[16,50],[8,44],[8,78],[16,72]],j),x.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(x.retangulo(18,76,14,6,q),x.retangulo(14,76,4,6,j)),M.motor>=2&&(x.poligono([[28,50],[32,41],[36,50]],Ge),x.poligono([[28,72],[32,81],[36,72]],Ge)),x.retangulo(63,10,3,14,q),x.disco(64,8,4,"#e2243a"),x.pixel(63,6,"#ffb3ba");for(let O=0;O<Math.min(4,M.ima);O++)x.elipse(72+O*5,17-O*2,4,2,O%2?q:K);return M.xp>0&&(x.retangulo(55,14,2,8,q),x.disco(56,13,2,"#7dff9a")),x.contorno("#070a1a"),x.c}const qr=(M,x,N,q)=>{Qt.fillStyle=q;for(let j=-N;j<=N;j++)for(let K=-N;K<=N;K++)K*K+j*j<=N*N+.5&&Qt.fillRect(M+K,x+j,1,1)};function Wf(M){const x=z.oficina,N=Xr&&M-Xr.t0<1.2?{i:Xr.i,u:(M-Xr.t0)/1.2}:null;Qt.clearRect(0,0,128,128),fl&&Qt.drawImage(fl,0,0);const q=x.nucleo>=4?["#ff7a2a","#ffc14a"]:x.nucleo>=2?["#22b85a","#7dff9a"]:["#2f8cff","#8bd3ff"],j=Math.sin(M*4)>0?1:0;qr(65,62,9+j,q[0]),qr(65,62,6,q[1]),qr(65,62,3,"#ffffff"),Qt.fillStyle=q[1];for(let rt=0;rt<6;rt++){const k=M*2+rt*Math.PI/3;Qt.fillRect(Math.round(65+Math.cos(k)*12),Math.round(62+Math.sin(k)*12),1,1)}const K=rt=>{const k=Math.round((8+x.motor*3+Math.floor(Math.random()*4))*(N&&N.i===1?1+1.5*(1-N.u):1));for(let O=0;O<k;O++){const oe=Math.max(1,Math.round((1-O/k)*12));Qt.fillStyle=O<k*.35?"#fff0a0":O<k*.7?"#ffc83d":"#ff7a3a",Qt.fillRect(7-O,rt-(oe>>1),1,oe)}};K(61),x.motor>=3&&K(79),Math.floor(M*2)%2&&(Qt.fillStyle="#ff9aa6",Qt.fillRect(63,6,2,2));const we=1+x.projetil,Ge=18+Math.floor(x.dano*1.6);if(Math.floor(M*3)%2)for(let rt=0;rt<we;rt++)Qt.fillStyle="#ffe14a",Qt.fillRect(90+Ge+3,48+rt*9+2,2,1);const et=x.escudo>0?.35+.13*x.escudo:.12;Qt.globalAlpha=Math.min(1,et),Qt.fillStyle="#7dff9a";for(const[rt,k]of[[48,!0],[51,x.escudo>=4]])if(k)for(let O=0;O<72;O+=2){const oe=O*Math.PI*2/72+M*.4;Qt.fillRect(Math.round(62+Math.cos(oe)*rt),Math.round(60+Math.sin(oe)*rt),2,2)}Qt.globalAlpha=1,N&&hp(N,x)}function hp(M,x){const N=cl[M.i],q=Math.round(N.ancora[0]*128),j=Math.round(N.ancora[1]*128),K=M.u,we=(Ge,et,rt,k,O=28)=>{Qt.fillStyle=k;for(let oe=0;oe<O;oe++){const fe=oe*Math.PI*2/O;Qt.fillRect(Math.round(Ge+Math.cos(fe)*rt),Math.round(et+Math.sin(fe)*rt),2,2)}};Qt.globalAlpha=1-K,we(q,j,4+K*26,"#ffe14a"),Qt.fillStyle="#ffffff";for(let Ge=0;Ge<10;Ge++){const et=Ge*.63+1,rt=K*34;Qt.fillRect(Math.round(q+Math.cos(et)*rt),Math.round(j+Math.sin(et)*rt-K*6),2,2)}if(M.i===0)qr(65,62,12+Math.round(K*8),"#ffffff");else if(M.i===2)we(62,60,39,"#ffffff",64);else if(M.i===3)we(64,8,K*42,"#8bd3ff",36),we(64,8,K*24,"#ffffff",24);else if(M.i===4){const Ge=18+Math.floor(x.dano*1.6);for(let et=0;et<1+x.projetil;et++)qr(90+Ge+6,50+et*9,4,"#ffe14a")}else M.i===5&&we(62,60,48+K*6,"#ffffff",72);Qt.globalAlpha=1}function ul(){const M=Ie.querySelector(".of-corpo");if(!M)return;const x=M.querySelector("svg");if(x.replaceChildren(),getComputedStyle(x).display==="none")return;const N=M.getBoundingClientRect(),q=Qa.getBoundingClientRect(),j="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(K=>{const we=cl[Number(K.dataset.i)],Ge=K.getBoundingClientRect(),et=(we.lado==="esq"?Ge.right:Ge.left)-N.left,rt=(Ge.top+Ge.bottom)/2-N.top,k=q.left+we.ancora[0]*q.width-N.left,O=q.top+we.ancora[1]*q.height-N.top,oe=et+(we.lado==="esq"?18:-18),fe=document.createElementNS(j,"path");fe.setAttribute("d",`M${et} ${rt} L${oe} ${rt} L${k} ${O}`),fe.setAttribute("class","of-linha");const he=document.createElementNS(j,"circle");he.setAttribute("cx",k),he.setAttribute("cy",O),he.setAttribute("r",4),he.setAttribute("class","of-ponto"),x.append(fe,he)})}window.addEventListener("resize",()=>{Be==="oficina"&&ul()});function Xf(M=-1,x=""){const N=z.oficina;fl=dp(N);const q=i("div","of-topo"),j=i("button","arc-btn","VOLTAR [ESC]");j.onclick=Yf,q.append(i("h3",null,"OFICINA · ENGENHARIA DA NAVE"),i("span","of-moedas",`◆ ${z.moedas}`),j);const K=i("div","of-corpo"),we=i("div","of-col"),Ge=i("div","of-col"),et=i("div","of-centro");et.append(Qa,i("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),cl.forEach((O,oe)=>{const fe=i("div",oe===M?"of-parte upgradiada":"of-parte");fe.dataset.i=String(oe),oe===M&&fe.append(i("span","of-selo","▲ UPGRADE!")),fe.append(i("h4",null,O.nome),i("p","sub",O.sub));for(const he of O.ids){const Ee=Tf.find($e=>$e.id===he),Le=N[he],ct=Le>=Ee.max,tt=Ee.custo(Le),Et=i("div",oe===M&&he===x?"of-melhoria upg":"of-melhoria"),Wt=i("div","info"),B=i("span","pips");for(let $e=0;$e<Ee.max;$e++)B.append(i("i",$e<Le?$e===Le-1&&oe===M&&he===x?"on nova":"on":""));Wt.append(i("b",null,Ee.nome),i("small",null,Ee.desc),B);const Fe=i("button","arc-btn pequeno",ct?"MÁX":`◆${tt}`);Fe.disabled=ct||z.moedas<tt,Fe.onclick=()=>{z.moedas>=tt&&!ct&&(z.moedas-=tt,z.oficina[he]+=1,se(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),Xr={i:oe,t0:performance.now()/1e3},Pn(),Xf(oe,he),dl())},Et.append(Wt,Fe),fe.append(Et)}(O.lado==="esq"?we:Ge).append(fe)});const rt=document.createElementNS("http://www.w3.org/2000/svg","svg");rt.setAttribute("class","of-svg"),K.append(we,et,Ge,rt);const k=i("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");Ie.replaceChildren(q,K,k),Wf(performance.now()/1e3),requestAnimationFrame(ul)}function dl(){D.textContent=`OFICINA (◆${z.moedas})`}function qf(){xe=Be==="fim"?"fim":"inicio",Be="oficina",ot.hidden=!0,Ze.hidden=!0,Xf(),Ie.hidden=!1,requestAnimationFrame(ul)}function Yf(){Be==="oficina"&&(Be=xe,Ie.hidden=!0,(xe==="fim"?Ze:ot).hidden=!1,dl())}function pp(){Be="fim",w("fim");const M=Math.min(F_,Math.floor(l.kills/30)+Math.floor(l.nivel/3)),x=Math.floor(l.t),N=x>z.tempo||l.kills>z.kills||l.onda>z.onda;z.tempo=Math.max(z.tempo,x),z.kills=Math.max(z.kills,l.kills),z.onda=Math.max(z.onda,l.onda),z.skin=(z.skin+1+Math.floor(Math.random()*(Bi.length-1)))%Bi.length,z.moedas+=M,se(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),Ze.replaceChildren(i("h3",null,"FIM DE JOGO"),i("p",null,`Tempo: ${Wo(x)} · Monstros: ${l.kills} · Nível: ${l.nivel} · Onda: ${l.onda} · Melhor combo: x${l.melhorCombo}`),i("p","ganhou",`+${M+l.moedasRun} ◆ MOEDAS ESPACIAIS`),i("p","dica",`${l.moedasRun} coletadas + ${M} de bônus · Recorde: ${Wo(z.tempo)} · ${z.kills} monstros · ${z.onda} ondas${N?" · NOVO RECORDE!":""}`));const q=i("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");q.onclick=hl;const j=i("button","arc-btn sec",`OFICINA (◆${z.moedas})`);j.onclick=qf;const K=i("button","arc-btn sec","SAIR");K.onclick=ja,Ze.append(q,j,K),Ze.hidden=!1}const Wo=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,$f=M=>M>=6?a.cristais[6]:M>=3?a.cristais[3]:M>=2?a.cristais[2]:a.cristais[1],Jf=(M,x,N,q,j)=>{R.fillStyle="#070a1a",R.fillRect(M-1,x-1,N+2,6),R.fillStyle="#3a2030",R.fillRect(M,x,N,4),R.fillStyle=j,R.fillRect(M,x,Math.max(0,Math.round(N*q)),4)};function mp(M){R.fillStyle="#0a0614",R.fillRect(0,0,Ot,Bt);for(let x=0;x<6;x++){const N=10+(M*22+x*40)%240;R.strokeStyle=`rgba(138, 92, 255, ${.28*(1-N/250)})`,R.lineWidth=1,R.beginPath(),R.arc(un,ra,N,0,Math.PI*2),R.stroke()}for(let x=0;x<40;x++)R.fillStyle=Math.sin(M*2+x)>0?"#9a86c0":"#3a2f60",R.fillRect(x*53%Ot,x*31%Bt,1,1);R.strokeStyle="#8a5cff",R.lineWidth=2,R.strokeRect(ht.x0-3,ht.y0-3,ht.x1-ht.x0+6,ht.y1-ht.y0+6)}function Xo(M,x,N,q,j,K="",we=!1){const Ge=M-(N+Ot/2),et=x-(q+Bt/2),rt=Math.min((Ot/2-10)/(Math.abs(Ge)||1e-6),(Bt/2-10)/(Math.abs(et)||1e-6)),k=Math.round(Ot/2+Ge*rt),O=Math.round(Bt/2+et*rt);if(!(we&&Math.floor(l.ta*6)%2===0)&&(R.fillStyle="#070a1a",R.fillRect(k-3,O-3,7,7),R.fillStyle=j,R.fillRect(k-2,O-2,5,5),R.fillStyle="#ffffff",R.fillRect(k-1,O-1,3,3),K)){const oe=k<Ot/2;R.font="bold 8px monospace",R.textAlign=oe?"left":"right";const fe=k+(oe?7:-7),he=Math.max(10,Math.min(Bt-4,O+3));R.fillStyle="#070a1a",R.fillText(K,fe+1,he+1),R.fillStyle=we?"#ff9aa6":j,R.fillText(K,fe,he)}}function gp(){const M=performance.now()/1e3,x=l?l.cx:un,N=l?l.cy:ra;if(R.save(),l&&l.alien?mp(M):V.desenhar(R,x,N,M,ll()),!l){R.restore();return}const q=Math.round(x-Ot/2),j=Math.round(N-Bt/2),K=(B,Fe,$e=16)=>B>q-$e&&B<q+Ot+$e&&Fe>j-$e&&Fe<j+Bt+$e,we=!l.alien;R.save(),l.tremor>0&&R.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),R.translate(-q,-j),R.strokeStyle="rgba(74, 168, 255, 0.12)",R.lineWidth=1;for(const B of[30,62])R.beginPath(),R.arc(Math.round(l.nx),Math.round(l.ny),B,0,Math.PI*2),R.stroke();for(const B of l.campos){if(!K(B.x,B.y,40))continue;const Fe=Math.round(B.x),$e=Math.round(B.y);if(B.aviso>0){const Mt=Math.floor(l.ta*8)%2===0;R.strokeStyle=Mt?"#ff3b4a":"#ffb3ba",R.lineWidth=1,R.setLineDash([3,3]),R.beginPath(),R.arc(Fe,$e,B.r,0,Math.PI*2),R.stroke(),R.setLineDash([]),R.fillStyle="rgba(255, 59, 74, 0.12)",R.beginPath(),R.arc(Fe,$e,Math.max(0,B.r*(1-B.aviso/(B.avisoMax||1.4))),0,Math.PI*2),R.fill()}else{R.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(l.ta*10)})`,R.beginPath(),R.arc(Fe,$e,B.r,0,Math.PI*2),R.fill(),R.strokeStyle="#ff8a3a",R.lineWidth=2,R.beginPath(),R.arc(Fe,$e,B.r,0,Math.PI*2),R.stroke();for(let Mt=0;Mt<6;Mt++){const gn=l.ta*3+Mt*1.05;R.fillStyle="#ffd23f",R.fillRect(Math.round(Fe+Math.cos(gn)*B.r*.6),Math.round($e+Math.sin(gn)*B.r*.6),2,2)}}}for(const B of l.campos)if(B.aviso>0&&B.ox!==void 0){const Fe=(B.avisoMax-B.aviso)/.45;if(Fe>=0&&Fe<1){const $e=Math.round(B.ox+(B.x-B.ox)*Fe),Mt=Math.round(B.oy+(B.y-B.oy)*Fe-Math.sin(Math.PI*Fe)*24);R.fillStyle="#070a1a",R.fillRect($e-3,Mt-3,6,6),R.fillStyle="#ff7a3a",R.fillRect($e-2,Mt-2,4,4),R.fillStyle="#ffffff",R.fillRect($e-1,Mt-2,2,1)}}if(we){if(o.desenhar(R,q,j,Ot,Bt,M),l.buraco&&K(l.buraco.x,l.buraco.y,30)){x_(R,l.buraco.x,l.buraco.y,l.ta,Math.min(1,l.buraco.vida/3));const B=`${Math.ceil(l.buraco.vida)}s`,Fe=Math.round(l.buraco.x),$e=Math.round(l.buraco.y)-28;R.save(),R.font="bold 8px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(B,Fe+1,$e+1),R.fillStyle=l.buraco.vida<8&&Math.floor(l.ta*6)%2===0?"#ff9aa6":"#d9a8ff",R.fillText(B,Fe,$e),R.restore()}for(const B of l.rochas){if(!K(B.x,B.y,20))continue;const Fe=B.hp<=B.hpMax*.34?2:B.hp<=B.hpMax*.67?1:0,$e=r[B.tam].quadros[Fe];B.piscar>0&&(R.globalAlpha=.6),R.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),R.globalAlpha=1}for(const B of l.itens)!K(B.x,B.y)||B.vida<4&&B.tipo!=="moedaEsp"&&Math.floor(l.ta*8)%2===0||(ua[B.tipo]&&(R.save(),R.globalAlpha=.22+.14*Math.sin(l.ta*6+B.fase),R.fillStyle=ua[B.tipo].cor,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),10,0,Math.PI*2),R.fill(),R.restore()),R.drawImage(s[B.tipo],Math.round(B.x-6),Math.round(B.y-6+Math.sin(l.ta*4+B.fase))));for(const B of l.cristais)K(B.x,B.y)&&R.drawImage($f(B.v),Math.round(B.x-3.5),Math.round(B.y-4.5+Math.sin(l.ta*4+B.fase)))}for(const B of l.trilhasFogo){if(!K(B.x,B.y,12))continue;const Fe=Math.max(0,B.vida/B.max),$e=1+Math.floor(Math.sin(l.ta*18+B.x)*1.5);R.globalAlpha=Math.max(.18,Fe),R.fillStyle="#8f1d20",R.fillRect(Math.round(B.x)-5,Math.round(B.y)-2,10,5),R.fillStyle="#ff5a2a",R.fillRect(Math.round(B.x)-3,Math.round(B.y)-4-$e,7,7+$e),R.fillStyle="#ffe14a",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-3-$e,3,4+$e),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x),Math.round(B.y)-3-$e,1,2),R.globalAlpha=1}for(const B of l.inimigos){if(!K(B.x,B.y,40))continue;const Fe=Math.floor(l.ta*6+B.fase)%2;let $e;if(B.tipo==="alien"){const Mt=u(B.v);$e=(B.piscar>0?Mt.brancos:Mt.quadros)[Math.floor(l.ta*3)%2],R.globalAlpha=B.sumido>0?.25:B.estado==="carga"&&Math.floor(l.ta*16)%2===0?.6:1}else if(B.tipo==="chefe"){const Mt=h(B.b);$e=(B.piscar>0?Mt.brancos:Mt.quadros)[Math.floor(l.ta*4)%2];const gn=25+Math.sin(l.ta*4)*3;R.fillStyle="rgba(5, 0, 12, .72)",R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),gn,0,Math.PI*2),R.fill(),R.strokeStyle=Math.floor(l.ta*8)%2?"#ff233f":"#6c1230",R.lineWidth=2,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),gn+3,0,Math.PI*2),R.stroke()}else{const Mt=B_[B.tipo]||B.tipo,gn=p(B.v).m[Mt];$e=(B.piscar>0?gn.brancos:gn.quadros)[Fe],B.tipo==="fantasma"&&(R.globalAlpha=.85)}if(R.drawImage($e,Math.round(B.x-$e.width/2),Math.round(B.y-$e.height/2)),R.globalAlpha=1,B.tipo==="chefe")R.fillStyle="#ff233f",R.fillRect(Math.round(B.x)-7,Math.round(B.y)-5,4,2),R.fillRect(Math.round(B.x)+4,Math.round(B.y)-5,4,2),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x)-6,Math.round(B.y)-5,1,1),R.fillRect(Math.round(B.x)+5,Math.round(B.y)-5,1,1),B.movEsp&&B.movEsp.carga>0&&(R.strokeStyle=B.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",R.lineWidth=2,R.setLineDash([3,3]),R.beginPath(),B.movEsp.tipo==="minhoca"?R.arc(Math.round(B.x),Math.round(B.y),20+Math.sin(l.ta*12)*4,0,Math.PI*2):(R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(B.x+B.movEsp.dx*240),Math.round(B.y+B.movEsp.dy*240))),R.stroke(),R.setLineDash([]));else if(B.tipo==="curandeiro"){R.save(),R.globalAlpha=.3,R.strokeStyle="#7dff9a",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Es,0,Math.PI*2),R.stroke(),R.restore();const Mt=9+Math.sin(l.ta*6+B.fase)*2;R.strokeStyle="#7dff9a",R.lineWidth=1,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Mt,0,Math.PI*2),R.stroke(),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-10,3,7),R.fillRect(Math.round(B.x)-3,Math.round(B.y)-8,7,3)}else if(B.tipo==="amplificador"){R.save(),R.globalAlpha=.3,R.strokeStyle="#ff7ab8",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Es,0,Math.PI*2),R.stroke(),R.restore();const Mt=11+(l.ta*8+B.fase)%5;R.strokeStyle=`rgba(255, 122, 184, ${.9-(Mt-11)*.12})`,R.lineWidth=2,R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Mt,0,Math.PI*2),R.stroke(),R.fillStyle="#ff7ab8";for(const gn of[-4,0,4])R.fillRect(Math.round(B.x+gn),Math.round(B.y-10-Math.abs(gn)/2),2,4)}else B.tipo==="fulminante"&&(R.strokeStyle="#38c8ff",R.lineWidth=1,R.beginPath(),R.moveTo(Math.round(B.x)-8,Math.round(B.y)-7),R.lineTo(Math.round(B.x)-3,Math.round(B.y)-12),R.lineTo(Math.round(B.x),Math.round(B.y)-8),R.lineTo(Math.round(B.x)+5,Math.round(B.y)-13),R.stroke());if(B.buffT>0){R.fillStyle="#ffe14a";for(const Mt of[-5,3])R.fillRect(Math.round(B.x+Mt),Math.round(B.y-13),3,1),R.fillRect(Math.round(B.x+Mt+1),Math.round(B.y-14),1,1)}}for(const B of l.tirosInimigos)K(B.x,B.y,4)&&(R.fillStyle="#ff5a8a",R.fillRect(Math.round(B.x)-2,Math.round(B.y)-2,4,4),R.fillStyle="#ffd0e0",R.fillRect(Math.round(B.x)-1,Math.round(B.y)-1,2,2));if(l.alien&&l.alien.estado==="aviso"){const B=l.alien;R.strokeStyle=Math.floor(l.ta*14)%2?"#ff3b4a":"#ffb3ba",R.lineWidth=2,R.setLineDash([4,4]),R.beginPath(),R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(B.x+B.dirX*300),Math.round(B.y+B.dirY*300)),R.stroke(),R.setLineDash([])}for(const B of l.raios){const Fe=B.x+Math.cos(B.ang)*400,$e=B.y+Math.sin(B.ang)*400;R.beginPath(),R.moveTo(Math.round(B.x),Math.round(B.y)),R.lineTo(Math.round(Fe),Math.round($e));const Mt=B.cor||"#ff3bd4";B.aviso>0?(R.strokeStyle=Math.floor(l.ta*16)%2?Mt:"#ffffff",R.lineWidth=1,R.setLineDash([3,3]),R.stroke(),R.setLineDash([])):(R.strokeStyle=Mt,R.lineWidth=7,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=3,R.stroke())}for(const B of l.tiros)R.fillStyle=B.critico?"#ff5a2a":"#ffe14a",R.fillRect(Math.round(B.x)-(B.critico?2:1),Math.round(B.y)-(B.critico?2:1),B.critico?4:3,B.critico?4:3),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x),Math.round(B.y),1,1);if(l.laser){const B=Math.cos(l.laser.ang),Fe=Math.sin(l.laser.ang),$e=l.nx+B*l.laser.len,Mt=l.ny+Fe*l.laser.len;R.beginPath(),R.moveTo(Math.round(l.nx+B*7),Math.round(l.ny+Fe*7)),R.lineTo(Math.round($e),Math.round(Mt)),R.strokeStyle=Math.floor(l.ta*24)%2?"#38c8ff":"#8bd3ff",R.lineWidth=4,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1.5,R.stroke()}for(const B of l.misseis){const Fe=Math.cos(B.ang),$e=Math.sin(B.ang);R.fillStyle="#070a1a",R.fillRect(Math.round(B.x)-3,Math.round(B.y)-3,6,6),R.fillStyle="#ff9a3a",R.fillRect(Math.round(B.x+Fe*1)-2,Math.round(B.y+$e*1)-2,4,4),R.fillStyle="#ffffff",R.fillRect(Math.round(B.x+Fe*2),Math.round(B.y+$e*2),1,1)}const Ge=l.invul>0&&Math.floor(l.ta*14)%2===0,et=Math.PI/8,rt=Math.round(l.mira/et)*et,k=Math.round(l.nx),O=Math.round(l.ny),oe=l.tiers||{motor:0,armas:0},fe=(B,Fe,$e)=>{for(let Mt=0;Mt<$e;Mt++)R.fillStyle=Mt<$e*.35?"#fff0a0":Mt<$e*.7?"#ffc83d":"#ff7a3a",R.fillRect(B-(Mt<$e*.6?1:0),Fe+Mt,Mt<$e*.6?2:1,1)},he=l.arma>=2?l.slots[l.arma-2]:"normal",Ee=he==="turbo"&&l.boostE>0,Le=2+oe.motor+(l.movendo?3:0)+(l.turboT>0||Ee?3:0)+(l.driftT>0?5:0)+Math.floor(Math.random()*2);fe(k,O+8,Le),oe.motor>=2&&(fe(k-5,O+7,Math.max(2,Le-3)),fe(k+4,O+7,Math.max(2,Le-3))),R.fillStyle=l.driftT>0?"#ffffff":l.turboT>0||Ee?"#ff7a3a":"#ffd23f";const ct=Math.min(4,l.projeteis),tt=5+Math.min(4,Math.floor(oe.armas/2)),Et=-Math.sin(rt),Wt=Math.cos(rt);for(let B=0;B<ct;B++){const Fe=(B-(ct-1)/2)*2.4;for(let $e=4;$e<=4+tt;$e++)R.fillRect(Math.round(k+Math.cos(rt)*$e+Et*Fe)-1,Math.round(O+Math.sin(rt)*$e+Wt*Fe)-1,2,2);z.oficina.lente>0&&(R.fillStyle="#7be3ff",R.fillRect(Math.round(k+Math.cos(rt)*(5+tt)+Et*Fe)-1,Math.round(O+Math.sin(rt)*(5+tt)+Wt*Fe)-1,2,2),R.fillStyle=l.turboT>0?"#ff7a3a":"#ffd23f")}if(R.drawImage(Ge?Y.branca:Y.c,k-10,O-10),l.upgFx){const B=1-l.upgFx.t/l.upgFx.max;R.globalAlpha=.7*(1-B),R.drawImage(Y.branca,k-10,O-10),R.globalAlpha=1-B,R.strokeStyle="#ffe14a",R.lineWidth=2,R.beginPath(),R.arc(k,O,Math.max(0,8+B*22),0,Math.PI*2),R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1,R.beginPath(),R.arc(k,O,Math.max(0,5+B*14),0,Math.PI*2),R.stroke(),R.globalAlpha=1}for(const[B,Fe,$e]of[[l.buffDanoT,"#ff3b4a",14],[l.buffVelT,"#ffd23f",16],[l.buffXpT,"#a56bff",18]])B>0&&(B>2.5||Math.floor(l.ta*8)%2===0)&&(R.save(),R.globalAlpha=.55,R.strokeStyle=Fe,R.lineWidth=1,R.setLineDash([2,3]),R.beginPath(),R.arc(k,O,$e+Math.sin(l.ta*8)*1.2,0,Math.PI*2),R.stroke(),R.restore());l.escudoT>0&&(l.escudoT>1.5||Math.floor(l.ta*10)%2===0)&&(R.strokeStyle="#8bd3ff",R.lineWidth=2,R.beginPath(),R.arc(k,O,11,0,Math.PI*2),R.stroke()),l.barreira>0&&(R.strokeStyle="#7dff9a",R.lineWidth=1,R.globalAlpha=.7,R.beginPath(),R.arc(k,O,12+(l.barreira>1?2:0),0,Math.PI*2),R.stroke(),R.globalAlpha=1);for(const B of ai()){const Fe=Math.round(B.x),$e=Math.round(B.y);R.fillStyle="#070a1a",R.fillRect(Fe-3,$e-3,7,7),R.fillStyle="#ff3bd4",R.fillRect(Fe-2,$e-2,5,5),R.fillStyle="#ffffff",R.fillRect(Fe-1,$e-1,2,2)}for(const B of l.parts)K(B.x,B.y,4)&&(R.fillStyle=B.cor,R.fillRect(Math.round(B.x),Math.round(B.y),2,2));for(const B of l.ondas)R.strokeStyle=B.cor,R.lineWidth=2,R.globalAlpha=Math.max(0,1-B.r/B.max),R.beginPath(),R.arc(Math.round(B.x),Math.round(B.y),Math.max(0,B.r),0,Math.PI*2),R.stroke(),R.globalAlpha=1;R.font="bold 8px monospace",R.textAlign="center";for(const B of l.textos)R.globalAlpha=Math.min(1,B.vida*2),R.fillStyle="#070a1a",R.fillText(B.txt,Math.round(B.x)+1,Math.round(B.y)+1),R.fillStyle=B.cor,R.fillText(B.txt,Math.round(B.x),Math.round(B.y)),R.globalAlpha=1;if(R.restore(),we){const B=l.cristais.filter(Fe=>!K(Fe.x,Fe.y,2)).map(Fe=>({c:Fe,d:Math.hypot(Fe.x-l.nx,Fe.y-l.ny)})).filter(Fe=>Fe.d<620).sort((Fe,$e)=>Fe.d-$e.d).slice(0,6);R.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:Fe}of B){const $e=Fe.x-(q+Ot/2),Mt=Fe.y-(j+Bt/2),gn=Math.min((Ot/2-10)/(Math.abs($e)||1e-6),(Bt/2-10)/(Math.abs(Mt)||1e-6));R.drawImage($f(Fe.v),Math.round(Ot/2+$e*gn-3.5),Math.round(Bt/2+Mt*gn-4.5))}R.globalAlpha=1,l.buraco&&!K(l.buraco.x,l.buraco.y,2)&&Xo(l.buraco.x,l.buraco.y,q,j,"#c43fff",`${Math.ceil(l.buraco.vida)}s`,l.buraco.vida<8),l.chefe&&!K(l.chefe.x,l.chefe.y,2)&&Xo(l.chefe.x,l.chefe.y,q,j,"#ff3b4a");for(const Fe of l.itens)Fe.tipo==="moedaEsp"&&!K(Fe.x,Fe.y,2)&&Xo(Fe.x,Fe.y,q,j,"#38c8ff");for(const Fe of l.itens)ua[Fe.tipo]&&!K(Fe.x,Fe.y,2)&&Xo(Fe.x,Fe.y,q,j,ua[Fe.tipo].cor,`${Math.ceil(Fe.vida)}s`,Fe.vida<5)}if(!l.alien){const B=(Fe,$e,Mt,gn,yp="center")=>{R.font="bold 8px monospace",R.textAlign=yp,R.fillStyle="#070a1a",R.fillText(Fe,$e+1,Mt+1),R.fillStyle=gn,R.fillText(Fe,$e,Mt)};l.combo>=3&&B(`COMBO x${l.combo}`,Ot-8,22,l.combo>=50?"#ff7ab8":l.combo>=25?"#ff9a3a":l.combo>=10?"#ffe14a":"#ffffff","right")}l.chefe&&(R.fillStyle="rgba(40, 0, 15, .34)",R.fillRect(0,0,Ot,5),R.fillRect(0,Bt-5,Ot,5),R.fillRect(0,0,5,Bt),R.fillRect(Ot-5,0,5,Bt),R.font="bold 7px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(Na[l.chefe.b].nome,un+1,8),R.fillStyle="#ff7084",R.fillText(Na[l.chefe.b].nome,un,7),Jf(un-60,11,120,l.chefe.hp/l.chefe.hpMax,"#ff3b4a")),l.alien&&Jf(un-60,8,120,l.alien.hp/l.alien.hpMax,"#ff3bd4"),l.flash>0&&(R.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,l.flash*2.5)})`,R.fillRect(0,0,Ot,Bt)),R.restore()}let qo="";function xp(){if(!l)return;const M=l.arma>=2?l.slots[l.arma-2]:"normal",x=[l.buffDanoT>0?`DANO+ ${Math.ceil(l.buffDanoT)}`:"",l.buffVelT>0?`VELOC+ ${Math.ceil(l.buffVelT)}`:"",l.buffXpT>0?`XP×2 ${Math.ceil(l.buffXpT)}`:"",l.lentidao<1?"DETRITOS: LENTO":"",l.imaT>0?"ÍMÃ":"",l.escudoT>0?`ESCUDO ${Math.ceil(l.escudoT)}`:"",l.turboT>0?`TURBO ${Math.ceil(l.turboT)}`:"",M==="turbo"&&l.boostE>0?"HIPERPROPULSOR":"",l.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),N=`${l.hp}/${l.maxHp}|${l.nivel}|${Math.floor(l.xp)}|${l.xpProx}|${l.kills}|${Math.floor(l.t)}|${l.onda}|${l.fase}|${l.aviso>0}|${l.avisoTxt}|${x}|${z.moedas}|${!!l.alien}`;N!==qo&&(qo=N,mt.replaceChildren(...Array.from({length:l.maxHp},(q,j)=>i("i",j<l.hp?"cheia":"vazia"))),mt.setAttribute("aria-label",`${Math.max(0,l.hp)} de ${l.maxHp} pontos de vida`),ce.textContent=`NV ${l.nivel}`,Re.style.width=`${Math.min(100,l.xp/l.xpProx*100)}%`,me.setAttribute("aria-valuenow",String(Math.floor(l.xp))),me.setAttribute("aria-valuemax",String(l.xpProx)),st.textContent=`☠ ${l.kills}`,We.textContent=l.alien?"BURACO NEGRO":l.onda>0?`F${l.fase} · ONDA ${l.onda}`:"",We.classList.toggle("alerta",!!l.alien||l.ondaEstado==="chefe"),Ce.textContent=x,ft.textContent=`◆ ${z.moedas}`,Pe.hidden=!(l.aviso>0),Pe.textContent=l.avisoTxt,ue.textContent=Wo(Math.floor(l.t)))}function vp(){const M=l&&(Be==="jogando"||Be==="escolha"||Be==="pausa");if(Ue.style.visibility=M?"visible":"hidden",!!M)for(let x=1;x<=4;x++){const{b:N,nm:q,barra:j}=He[x-1],K=x===1?"normal":l.slots[x-2];let we="VAZIO",Ge=-1;K&&(we=`${dd[K]||Xs[K].curto} · N${l.armasNivel[K]}`,K==="laser"?Ge=l.laserE/(l.laserMax*(1+.18*(l.armasNivel.laser-1))):K==="missil"?Ge=1-Math.max(0,l.missilT)/l.missilMax:K==="turbo"?Ge=l.boostE/l.boostMax:K==="cura"?Ge=1-l.curaCd/l.curaMax:K==="escudo"?Ge=l.escudoT>0?1:1-l.escudoCd/l.escudoMax:K==="salto"?Ge=l.saltoCarga>0?1-l.saltoCarga/l.saltoCargaMax:1-l.saltoCd/l.saltoMax:K==="drift"&&(Ge=l.driftT>0?1:1-l.driftCd/l.driftMax)),q.textContent!==we&&(q.textContent=we),j.style.display=Ge<0?"none":"block",j.style.width=`${Math.round(Math.max(0,Math.min(1,Ge))*100)}%`,N.classList.toggle("ativa",l.arma===x),N.classList.toggle("vazio",x>=2&&!K),N.classList.toggle("quente",K==="laser"&&l.laserQuente),N.disabled=x>=2&&!K,N.setAttribute("aria-pressed",String(l.arma===x)),N.setAttribute("aria-label",`Arma ${x}: ${we}${K==="laser"&&l.laserQuente?", superaquecida":""}`)}}function Mp(){const M=Be==="jogando"||Be==="pausa";if(Me.hidden=!M,!M)return;const x=Be==="pausa";Me.textContent=x?"▶":"II",Me.title=x?"Continuar (Esc)":"Pausar (Esc)",Me.setAttribute("aria-label",x?"Continuar jogo":"Pausar jogo")}function Zf(M){if(window.__curriculoArcadeGeracao!==t){nt=!1,cancelAnimationFrame(X);return}if(!nt)return;const x=Math.min((M-Oe)/1e3,.05);Oe=M,Be==="jogando"&&vi(x),Be==="oficina"&&Wf(M/1e3),V.passo(x),gp(),xp(),vp(),Mp(),X=requestAnimationFrame(Zf)}function hl(){Ne.clear(),de.ativo=!1,Q.hidden=!0,U(),y="normal",g.pause(),A.pause(),v.currentTime=0,I(),$a(),Hr(12),qo="",ot.hidden=!0,Ze.hidden=!0,ye.hidden=!0,ne.hidden=!0,Ie.hidden=!0,Be="jogando",Oe=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function Yr(M){M&&Be==="jogando"?(Be="pausa",Ne.clear(),de.ativo=!1,Q.hidden=!0,ne.hidden=!1,_()):!M&&Be==="pausa"&&(Be="jogando",ne.hidden=!0,Oe=performance.now(),I())}function _p(){nt||(nt=!0,ie.classList.add("aberto"),y="normal",g.pause(),A.pause(),I(),U(),z=hd(),_e.textContent=z.tempo||z.kills||z.onda?`RECORDE  ${Wo(z.tempo)}  ·  ${z.kills} MONSTROS  ·  ONDA ${z.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",l=null,Be="inicio",qo="",$a(),ot.hidden=!1,Ze.hidden=!0,ye.hidden=!0,ne.hidden=!0,Ie.hidden=!0,mt.replaceChildren(),ce.textContent="",st.textContent="",ue.textContent="",We.textContent="",Ce.textContent="",ft.textContent=`◆ ${z.moedas}`,Re.style.width="0",dl(),Oe=performance.now(),X=requestAnimationFrame(Zf),ke.focus({preventScroll:!0}))}function ja(){nt&&(nt=!1,Ne.clear(),de.ativo=!1,Q.hidden=!0,ie.classList.remove("aberto"),_(),cancelAnimationFrame(X))}ke.onclick=hl,D.onclick=qf,ge.onclick=()=>Yr(!1),ze.onclick=ja,Me.onclick=()=>Yr(Be==="jogando"),be.onclick=ja,ie.addEventListener("pointerdown",M=>{M.target===ie&&Be!=="jogando"&&Be!=="escolha"&&ja()}),window.addEventListener("visibilitychange",()=>{document.hidden&&Yr(!0)});const Kf=M=>{const x=Se.getBoundingClientRect();de.x=(M.clientX-x.left)/x.width*Ot,de.y=(M.clientY-x.top)/x.height*Bt},Sp=M=>{const x=Se.getBoundingClientRect(),N=(M.clientX-x.left)/x.width*Ot,q=(M.clientY-x.top)/x.height*Bt;de.dx=N-de.origemX,de.dy=q-de.origemY;const j=de.dx*(x.width/Ot),K=de.dy*(x.height/Bt),we=Math.hypot(j,K)||1,et=Math.min(1,28/we);Te.style.transform=`translate(calc(-50% + ${Math.round(j*et)}px), calc(-50% + ${Math.round(K*et)}px))`};Se.addEventListener("pointerdown",M=>{if(Be==="jogando"){if(de.ativo=!0,de.toque=M.pointerType!=="mouse",Kf(M),de.toque){const x=Se.getBoundingClientRect();de.origemX=de.x,de.origemY=de.y,de.dx=de.dy=0,Q.style.left=`${Math.round(M.clientX-x.left)}px`,Q.style.top=`${Math.round(M.clientY-x.top)}px`,Te.style.transform="translate(-50%, -50%)",Q.hidden=!1}Se.setPointerCapture?.(M.pointerId)}}),Se.addEventListener("pointermove",M=>{de.ativo&&(de.toque?Sp(M):Kf(M))});for(const M of["pointerup","pointercancel"])Se.addEventListener(M,()=>{de.ativo=!1,de.toque=!1,de.dx=de.dy=0,Q.hidden=!0});return window.addEventListener("keyup",M=>Ne.delete(M.code)),window.addEventListener("blur",()=>Ne.clear()),window.addEventListener("keydown",M=>{if(nt){if(ut.includes(M.code)){M.preventDefault(),Be==="jogando"&&Ne.add(M.code);return}if(M.code==="Escape")M.preventDefault(),Be==="jogando"?Yr(!0):Be==="pausa"?Yr(!1):Be==="oficina"?Yf():(Be==="inicio"||Be==="fim")&&ja();else if(M.code==="Space"||M.code==="Enter")(Be==="inicio"||Be==="fim")&&(M.preventDefault(),hl());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const x=Number(M.code.slice(-1));Be==="escolha"?Hf(x-1):On(x)}}},!0),{abrir:_p,fechar:ja,estaAberto:()=>nt}}const St=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},md={mailto:()=>`mailto:${ha.email}`,tel:()=>`tel:${ha.telefoneTel}`,github:()=>ha.github,linkedin:()=>ha.linkedin,portfolio:()=>ha.portfolio,repo:()=>ha.repo},wf=n=>md[n]?md[n]():n,X_={email:()=>ha.email,telefone:()=>ha.telefone};function Rf(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function jc(n){const e=St("div","etiquetas");for(const t of n)e.append(St("span","etq",t));return e}function q_(n){const e=St("a","btn");return e.href=wf(n.url),Rf(e),e.append(St("span","ic",n.icone||"↗"),St("span","tx",n.rotulo)),e}function Y_(n){const e=St("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=X_[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const $_=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function gd(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function J_(n){const e=St("div","numeros jogo"),t=(i,a)=>{const r=St("div","num");r.append(St("b",null,String(i)),St("span",null,a)),e.append(r)};if(n==="cassino"){const i=gd("curriculo-cassino-v1");if(!i)return St("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=gd("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return St("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t($_(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function Z_(n){const e=St("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=St("summary"),i=St("span","tit");i.append(St("b",null,n.titulo)),n.local&&i.append(St("i",null,n.local)),t.append(i,St("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=St("div","corpo");if(n.texto&&a.append(St("p",null,n.texto)),n.tags&&a.append(jc(n.tags)),n.links){const r=St("div","links");for(const s of n.links)r.append(q_(s));a.append(r)}return e.append(t,a),e}const xd={destaque:n=>St("p","destaque",n.texto),texto:n=>St("p",null,n.texto),dica:n=>St("p","dica",n.texto),numeros:n=>{const e=St("div","numeros");for(const t of n.itens){const i=St("div","num");i.append(St("b",null,t.v),St("span",null,t.r)),e.append(i)}return e},etiquetas:n=>jc(n.itens),grupo:n=>{const e=St("div","grupo");return e.append(St("h3",null,n.titulo),jc(n.itens)),e},cartao:Z_,estatisticas:n=>J_(n.fonte),links:n=>{const e=St("div","contatos");for(const t of n.itens){const i=St("div","contato"),a=St("a","ln");a.href=wf(t.url),Rf(a);const r=St("span","tx");r.append(St("small",null,t.rotulo),St("b",null,t.valor)),a.append(St("span","ic",t.icone||"↗"),r),i.append(a),t.copiar&&i.append(Y_(t.copiar)),e.append(i)}return e}};function K_(n,e){const t=St("div","rodape"),i=St("span","prog"),a=St("span","pts");for(const r of e.zonas)a.append(St("i",e.visitadas.has(r.id)?"vis":""));if(i.append(a,St("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(St("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const r=St("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");r.href=wf("mailto"),Rf(r),t.append(r)}return t}function Q_(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(r=>({tipo:"texto",texto:r})))t.push((xd[a.tipo]??xd.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const r of i)r!==a&&(r.open=!1)});return t.push(K_(n,e)),t}const j_=.32,vd=.7;function e2({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const r=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,r,{passive:!0});return{atualizar(s,o){const c=t&&n()&&!o&&!document.hidden?j_:0;a+=Math.max(-s*vd,Math.min(s*vd,c-a)),e.volume=Math.max(0,Math.min(1,a)),c>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):c===0&&a<=.001&&!e.paused&&e.pause()}}}const Gh="curriculo-carinhos-v1";function t2(){try{const n=JSON.parse(localStorage.getItem(Gh));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function n2(n){try{localStorage.setItem(Gh,JSON.stringify(n))}catch{}}const i2=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let Md=null;function a2(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,r)=>{e.fillStyle=r,i2.forEach((s,o)=>[...s].forEach((c,f)=>{c==="X"&&e.fillRect(f+i,o+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let _d=null;function r2(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(o,c)=>o<=7&&c<=i[o];for(let o=-7;o<=7;o++)for(let c=-7;c<=7;c++)(a(Math.abs(o),Math.abs(c))||a(Math.abs(c),Math.abs(o)))&&(t.fillStyle=c+o>4?"#b01820":c+o<-4?"#ff5a5f":"#e3262d",t.fillRect(8+c,8+o,1,1));const r=t.getImageData(0,0,17,17).data,s=(o,c)=>o>=0&&c>=0&&o<17&&c<17&&r[(c*17+o)*4+3]>0;t.fillStyle="#3a0d12";for(let o=0;o<17;o++)for(let c=0;c<17;c++)!s(c,o)&&(s(c+1,o)||s(c-1,o)||s(c,o+1)||s(c,o-1))&&t.fillRect(c,o,1,1);return e.toDataURL()}function Vh(n,e,t,i,a,r,s){for(let o=0;o<s;o++){const c=document.createElement("i"),f=i[Math.floor(Math.random()*i.length)];c.className="coracao",c.style.cssText=`background-image:url(${n});width:${e*f}px;height:${t*f}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(r)}px;animation-delay:${(o*.09).toFixed(2)}s;`,c.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),c.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),c.addEventListener("animationend",()=>c.remove()),document.body.append(c)}}function o2(n,e,t=5){Md??=a2(),Vh(Md,9,8,[2,2,3],n,e,t)}function s2(n,e,t=6){_d??=r2(),Vh(_d,17,17,[2,3,3],n,e,t)}function l2(n){const e=new Jt,t=new Jt;e.add(t);const i=n(3120732),a=n(2325061),r=new mi({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:Jn}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),o=new mi({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),c=new kn(1,6,4),f=new kn(1,6,4),u=new yn(1,1,1,5),h=(S,T,I,_,w,L)=>{const U=new G(S,0,T),V=new G(I,_,w),Y=V.clone().sub(U),z=new At(u,a);z.scale.set(L,Y.length(),L),z.position.copy(U).addScaledVector(Y,.5),z.quaternion.setFromUnitVectors(new G(0,1,0),Y.normalize()),t.add(z)},d=(S,T,I,_,w)=>{for(const L of[-1,1]){const U=new At(f,i);U.scale.set(.13*w,.025*w,.065*w),U.position.set(S+Math.cos(_)*.1*w*L,T,I+Math.sin(_)*.1*w*L),U.rotation.set(0,-_,L*.35),t.add(U)}},p=(S,T,I,_)=>{const w=new Jt;w.position.set(S,T,I),w.rotation.x=.95;for(let U=0;U<5;U++){const V=U/5*Math.PI*2,Y=new At(c,r);Y.scale.set(.075*_,.022*_,.15*_),Y.position.set(Math.sin(V)*.1*_,0,Math.cos(V)*.1*_),Y.rotation.y=V,w.add(Y)}const L=new At(c,s);return L.scale.setScalar(.045*_),L.position.y=.025*_,w.add(L),t.add(w),w},m=(S,T,I)=>{const _=new At(c,o);_.scale.set(.04,.065,.04),_.position.set(S,T,I),t.add(_)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const E=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),g=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const A=new Xt;A.position.set(0,.85,.05),e.add(A);const P=new Xt;P.position.set(0,1.05,0),e.add(P);let y=0;return{raiz:e,cabeca:A,topo:P,carinho(){y=1},atualizar(S,T){y=Math.max(0,y-T*2.2);const I=Math.sin(y*Math.PI);t.rotation.z=Math.sin(S*1.3)*.045+Math.sin(y*18)*.12*y,t.rotation.x=Math.sin(S*.9+1)*.03,t.scale.setScalar(1+I*.22),E.rotation.y=Math.sin(S*.8)*.15,v.rotation.y=Math.sin(S*.7+2)*.2,g.rotation.y=Math.sin(S*.75+4)*.2}}}const As={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Ar=32,Rr=24,c2=3,kh=1,f2=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],u2={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function d2({cauda:n,olhos:e}){const t=f2.map(c=>[...c,...[...c].reverse()]),i=(c,f,u)=>{t[c][f]=u,t[c][23-f]=u};if(e==="piscando")for(let c=3;c<=5;c++)i(7,c,"G"),i(8,c,"K"),i(9,c,"G");if(e==="feliz"){for(let c=3;c<=5;c++)i(7,c,"G"),i(8,c,"G"),i(9,c,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Ar,a.height=Rr;const r=a.getContext("2d");t.forEach((c,f)=>c.forEach((u,h)=>{u!=="."&&(r.fillStyle=As[u],r.fillRect(h+c2,f+kh,1,1))})),u2[n].forEach(([c,f],u)=>{r.fillStyle=u%3===2?As.D:As.G,r.fillRect(c-1,f,2,1)});const s=r.getImageData(0,0,Ar,Rr).data,o=(c,f)=>c>=0&&f>=0&&c<Ar&&f<Rr&&s[(f*Ar+c)*4+3]>0;r.fillStyle=As.K;for(let c=0;c<Rr;c++)for(let f=0;f<Ar;f++)!o(f,c)&&(o(f+1,c)||o(f-1,c)||o(f,c+1)||o(f,c-1))&&r.fillRect(f,c,1,1);return a}const Sd=1;function h2(){const n={},e=(d,p)=>{if(!n[d]){const m=new Ao(d2(p));m.colorSpace=Dn,m.magFilter=m.minFilter=nn,m.generateMipmaps=!1,n[d]=new xf({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Jt,i=new oh(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,kh/Rr),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const r=a.getContext("2d"),s=r.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,32,32);const o=new At(new Zi(.75,.5),new Ji({map:new Ao(a),transparent:!0,opacity:.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03;const c=new Xt;c.position.y=.55;const f=new Xt;f.position.y=.8,t.add(o,i,c,f);let u=0,h=0;return{raiz:t,cabeca:c,topo:f,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const E=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${E}-${v}`,{cauda:E,olhos:v});const g=1+Math.sin(d*2.2)*.012;i.scale.set(Ar*m*Sd,Rr*m*Sd*g,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const Hh="curriculo-futebol-v1",ef=.25,p2=.085,m2=1.6,ci=1.8,Fi=.9,Ln=.6,oo=new G(0,1,0),g2=new G(0,.4,.92).normalize();function x2(){try{return JSON.parse(localStorage.getItem(Hh))?.gols|0}catch{return 0}}function v2(n){try{localStorage.setItem(Hh,JSON.stringify({gols:n}))}catch{}}function M2(){const n=new tl(ef,2),e=(1+Math.sqrt(5))/2,t=[];for(const o of[-1,1])for(const c of[-e,e])t.push([0,o,c],[o,c,0],[c,0,o]);const i=t.map(o=>new G(...o).normalize()),a=n.attributes.position,r=new Float32Array(a.count*3),s=new G;for(let o=0;o<a.count;o+=3){s.set(0,0,0);for(let f=0;f<3;f++)s.add(new G(a.getX(o+f),a.getY(o+f),a.getZ(o+f)));s.normalize();const c=i.some(f=>s.dot(f)>Math.cos(.36));for(let f=0;f<3;f++)r.set(c?[.07,.07,.1]:[.97,.97,.97],(o+f)*3)}return n.setAttribute("color",new hi(r,3)),new At(n,new mi({vertexColors:!0,flatShading:!0,roughness:.55}))}function _2(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Ao(n);return t.wrapS=t.wrapT=Us,t.magFilter=t.minFilter=nn,t.generateMipmaps=!1,t}function S2(){const n=new Jt,e=new mi({color:16119285,roughness:.5,flatShading:!0}),t=o=>new yn(.045,.045,o,6),i=(o,c,f,u,h)=>{const d=new At(t(o),e);d.position.set(c,f,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const o of[-ci/2,ci/2])for(const c of[0,-Ln])i(Fi,o,Fi/2,c,"y");for(const o of[0,-Ln])i(ci+.09,0,Fi,o,"x"),i(ci+.09,0,.04,o,"x");for(const o of[-ci/2,ci/2])i(Ln,o,Fi,-Ln/2,"z"),i(Ln,o,.04,-Ln/2,"z");const a=(o,c)=>{const f=_2();return f.repeat.set(o/.15,c/.15),new At(new Zi(o,c),new Ji({map:f,transparent:!0,alphaTest:.3,side:Jn,depthWrite:!1}))},r=a(ci,Fi);r.position.set(0,Fi/2,-Ln);const s=a(ci,Ln);s.rotation.x=Math.PI/2,s.position.set(0,Fi,-Ln/2),n.add(r,s);for(const o of[-ci/2,ci/2]){const c=a(Ln,Fi);c.rotation.y=Math.PI/2,c.position.set(o,Fi/2,-Ln/2),n.add(c)}return n.traverse(o=>{o.isMesh&&o.material===e&&(o.castShadow=!0)}),n}function y2(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new At(new Zi(n*2,n*2),new Ji({map:new Ao(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function b2({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:r,dirsZonas:s,raioBloqueio:o,obstaculos:c,dirsSitios:f,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=x2(),E=0,v="jogando",g=0,A=-1;const P=new di,y=new di,S=new di,T=new di,I=new G,_=new G,w=new G,L=new G,U=new G,V=new G,Y=new Jt,z=M2(),J=y2(.35);z.position.y=ef,z.castShadow=!0;const ae=new Xt;ae.position.y=.85,Y.add(J,z,ae);const W={d:new G(0,1,0),ue:0,un:0,escala:1,piv:null};W.piv=e(Y,W.d.clone(),0);const ve=S2(),se=new Xt;se.position.set(0,1.5,-Ln/2),ve.add(se);const ie={d:new G(0,1,0),ex:new G,ez:new G,escala:1,piv:null};ie.piv=e(ve,ie.d.clone(),0);const pe=Ce=>{const ft=document.createElement("div");return ft.className="rotulo pet",ft.textContent=Ce,h.append(ft),ft},Qe=pe("bola"),Ve=pe("gol"),vt=()=>m?`gol · ${m}`:"gol";function dt(Ce,ft,ue){if(!ue){Ce.style.opacity="0";return}ft.getWorldPosition(w).project(u),Ce.style.transform=`translate(${Math.round((w.x*.5+.5)*window.innerWidth)}px, ${Math.round((-w.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Ce.style.opacity="1"}const mt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Ce=>new G(...Ce));function ce({folga:Ce,jogadorMin:ft=0,jogadorMax:ue=Math.PI,visivel:Me=-1,longe:be=[],tentativas:Ae=400}){V.copy(oo).applyQuaternion(P.copy(i).invert());const Se=new G;for(let R=0;R<Ae;R++){Se.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const Q=Se.angleTo(V);if(!(Q<ft||Q>ue)&&!(Me>-1&&w.copy(Se).applyQuaternion(i).dot(g2)<Me)&&!(a(Se)<r+.1)&&!mt.some(Te=>a(w.copy(Se).addScaledVector(Te,.07).normalize())<r+.03)&&!be.some(({d:Te,min:Pe})=>Se.angleTo(Te)<Pe)&&!s.some((Te,Pe)=>Se.angleTo(Te)<o[Pe]+Ce+.1)&&!c.some(Te=>Se.angleTo(Te.d)<Te.r+Ce)&&!Object.values(f).some(Te=>Se.angleTo(Te)<.25+Ce))return Se.clone()}return null}function me(Ce,ft){ie.d.copy(Ce),ie.piv.quaternion.setFromUnitVectors(oo,Ce),ve.rotation.y=ft,T.copy(ie.piv.quaternion).multiply(y.setFromAxisAngle(oo,ft)),ie.ex.set(1,0,0).applyQuaternion(T),ie.ez.set(0,0,1).applyQuaternion(T),ie.escala=.01}function Re(Ce){W.d.copy(Ce),W.piv.quaternion.setFromUnitVectors(oo,Ce),W.ue=W.un=0,W.escala=.01}function st(Ce){const ft=ce({folga:.3,jogadorMin:.9,jogadorMax:Ce?1.7:Math.PI,visivel:Ce?.3:-1})??ce({folga:.2,jogadorMin:.7,jogadorMax:Ce?1.9:Math.PI,visivel:Ce?.1:-1,tentativas:800})??ce({folga:.1,tentativas:800})??ie.d.clone();me(ft,Math.random()*Math.PI*2);const ue=ce({folga:.12,jogadorMin:.55,jogadorMax:Ce?1:Math.PI,visivel:Ce?.5:-1,longe:[{d:ft,min:.9}]})??ce({folga:.06,jogadorMin:.4,tentativas:800})??W.d.clone();Re(ue)}st(!0);function We(){v="comemorando",g=E+1,m+=1,v2(m),Ve.textContent=vt(),se.getWorldPosition(w).project(u);const Ce=(w.x*.5+.5)*window.innerWidth,ft=(-w.y*.5+.5)*window.innerHeight;s2(Ce,ft+40,6);const ue=document.createElement("div");ue.className="popup",ue.textContent="GOL!",ue.style.left=`${Math.round(Ce)}px`,ue.style.top=`${Math.round(ft)}px`,ue.style.fontSize="30px",document.body.append(ue),setTimeout(()=>ue.remove(),1e3),[523,659,784,1047,1319].forEach((Me,be)=>p(Me,be===4?.4:.11,"square",.05,be*.09))}return{teste:{bola:W,gol:ie,colocarBola:Re,colocarGol:me,golsAtuais:()=>m},atualizar(Ce,{vLeste:ft,vNorte:ue,VEL:Me,pulando:be,pausado:Ae}){if(Ae)return;E+=Ce,P.copy(i).invert();const Se=v==="comemorando";U.copy(W.d),I.copy(W.d).applyQuaternion(i);const R=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!Se&&!be&&R<p2){const F=I.x,ot=-I.z,ke=Math.hypot(F,ot)||1,D=ft*Me,b=ue*Me,$=Math.hypot(D,b);let Z,le,_e;$>.12&&(D*F+b*ot)/($*ke)>-.2?(Z=D/$*.75+F/ke*.65,le=b/$*.75+ot/ke*.65,_e=Math.max(Math.hypot(W.ue,W.un),$*1.5+.25)):(Z=F/ke,le=ot/ke,_e=.5);const ye=Math.hypot(Z,le)||1;W.ue=Z/ye*_e,W.un=le/ye*_e,$>.12&&E-A>.22&&(A=E,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const Q=Math.exp(-(Se?5:m2)*Ce);W.ue*=Q,W.un*=Q;const Te=Math.hypot(W.ue,W.un);Te<.01?W.ue=W.un=0:(L.set(-W.un,0,-W.ue).normalize(),y.setFromAxisAngle(L,Te*Ce),I.applyQuaternion(y),W.d.copy(I).applyQuaternion(P).normalize());const Pe=(F,ot)=>{const ke=Math.cos(ot);W.d.dot(F)<=ke||(L.crossVectors(F,W.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),W.d.applyQuaternion(y.setFromAxisAngle(L,ot-Math.acos(Math.min(1,W.d.dot(F))))).normalize(),W.ue*=.3,W.un*=.3)};s.forEach((F,ot)=>Pe(F,o[ot]+.03));for(const F of c)Pe(F.d,F.r+.03);if(W.piv.quaternion.premultiply(y.setFromUnitVectors(U,W.d)),Te>=.01&&(w.set(W.ue,0,-W.un).normalize().applyQuaternion(P).applyQuaternion(T.copy(W.piv.quaternion).invert()),L.crossVectors(oo,w),L.lengthSq()>1e-9&&z.quaternion.premultiply(S.setFromAxisAngle(L.normalize(),Te*t*Ce/ef))),W.escala=W.escala+(1-W.escala)*(1-Math.exp(-6*Ce)),Y.scale.setScalar(W.escala),ie.escala=ie.escala+(1-ie.escala)*(1-Math.exp(-6*Ce)),ve.scale.setScalar(ie.escala*(Se?1+Math.sin((E-g)*20)*.06:1)),Se)E>=g&&(v="jogando",st(!1));else{w.copy(W.d).sub(ie.d);const F=w.dot(ie.ex)*t,ot=w.dot(ie.ez)*t+Ln/2;Math.abs(F)<ci/2-.12&&Math.abs(ot)<Ln/2-.02&&Math.abs(w.dot(ie.d))<.2&&We()}_.copy(ie.d).applyQuaternion(i),dt(Qe,ae,I.dot(d)>.2),dt(Ve,se,_.dot(d)>.2)}}}const Wn=5,Ma=6.5/Wn,tf=.7,qs=new G(0,1,0),E2=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function nf(n,e){const t=e*Math.PI/180;return new G(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const A2=n=>nf(...E2[n]??[1.2+n%3*.5,n*137.5]),jn=pn.map((n,e)=>A2(e)),$i={jasmim:nf(.4,180),mazzy:nf(.5,295)},Wh=(n,e)=>Object.values($i).some(t=>n.angleTo(t)<e),T2=.6,Xh=n=>n.escala??T2,Oo=pn.map(n=>1.85*Xh(n)/Wn+.03),w2=Oo.map(n=>n+.22),R2=(n,e,t)=>n+(e-n)*t,Fo=(n,e,t)=>Math.max(e,Math.min(t,n)),Ds=(n,e,t,i)=>R2(n,e,1-Math.exp(-t*i));function Cf(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function C2(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function ec(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,c=t-r,f=m=>m*m*(3-2*m),u=f(s),h=f(o),d=f(c);let p=0;for(let m=0;m<2;m++)for(let E=0;E<2;E++)for(let v=0;v<2;v++){const g=(m?u:1-u)*(E?h:1-h)*(v?d:1-d);p+=g*C2(i+m,a+E,r+v)}return p}const yd=Math.cos(.5);function ol(n){const e=ec(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+ec(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+ec(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>yd&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of jn){const a=n.dot(i);a>yd&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const sl=.5,ui=new HM({antialias:!1});ui.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ui.shadowMap.enabled=!0;ui.shadowMap.type=uo;document.body.appendChild(ui.domElement);const ti=new nh;ti.background=new gt(725030);const rn=new $n(42,1,.1,200);ti.add(new Gm(12374271,2366541,1));const Ea=new Hm(16773332,1.9);Ea.position.set(7,Wn+9,9);Ea.target.position.set(0,2,0);Ea.castShadow=!0;Ea.shadow.mapSize.set(2048,2048);Object.assign(Ea.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});Ea.shadow.bias=-4e-4;ti.add(Ea,Ea.target);const qh=new ch({color:16777215,size:.42,sizeAttenuation:!0,fog:!1}),Yh=new mi({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),$h=[],Jh=[],Zh={uMarRaso:{value:new gt(5685998)},uMarMedio:{value:new gt(3112924)},uMarFundo:{value:new gt(1922744)},uEspuma:{value:new gt(13955580)},uAreia:{value:new gt(15981987)},uGrama0:{value:new gt(7327594)},uGrama1:{value:new gt(5027680)},uGrama2:{value:new gt(3117141)}};{const n=Cf(3),e=[];for(let a=0;a<900;a++){const r=new G(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new mn;t.setAttribute("position",new Zt(e,3)),ti.add(new $0(t,qh));const i=new At(new kn(4,32,32),new Ji({color:16773577,fog:!1}));i.position.set(24,16,-62),ti.add(i)}const Gr=new Jt;ti.add(Gr);{const i=new Uint16Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new G,s=gu.toHalfFloat(1);for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const E=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const g=(v+.5-2)/320*2-1,[A,P,y]=a[h](g,E);r.set(A,P,y).normalize();const S=((p+m)*3*324+d+v)*4;i[S]=gu.toHalfFloat(ol(r)),i[S+3]=s}}}const o=new lh(i,3*324,2*324,Kn,ei);o.minFilter=o.magFilter=dn,o.generateMipmaps=!1,o.needsUpdate=!0;const c=new mi({roughness:.9});c.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:sl}},Zh),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const f=new At(new kn(Wn,128,96),c);f.receiveShadow=!0,Gr.add(f);const u=new At(new kn(Wn*1.06,48,48),new Ji({color:6990079,transparent:!0,opacity:.1,side:Cn,depthWrite:!1}));ti.add(u)}function Fr(n,e,t=0){const i=new Jt;return i.quaternion.setFromUnitVectors(new G(0,1,0),e),n.position.y=Wn,n.rotation.y=t,i.add(n),Gr.add(i),i}const wt=(n,e={})=>new mi({color:n,roughness:.8,flatShading:!0,...e});function Po(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const Br=[];{const n=Cf(77),e=new G,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(qs)<.3*Ma)&&!jn.some((a,r)=>e.angleTo(a)<Oo[r]+.2)&&!Wh(e,.2)&&!(ol(e)<sl+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Jt,s=.5+n()*.45,o=new At(new yn(.1,.14,.6,6),wt(8014379));o.position.y=.3;const c=n()>.5?0:1,f=new At(new xa(.5,1.2,7),wt(c===0?3120732:2460238));$h.push({m:f.material,v:c}),f.position.y=1.1;const u=new At(new xa(.38,.9,7),wt(3453032));Jh.push(u.material),u.position.y=1.7,r.add(o,f,u),r.scale.setScalar(s),Fr(Po(r),a,n()*6),Br.push({d:a,r:(.05*s+.02)*Ma})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new At(new Mf(.22+n()*.25,0),wt(9278376));r.position.y=.1;const s=new Jt;s.add(r),Fr(Po(s),a,n()*6),Br.push({d:a,r:.045*Ma,baixo:!0})}}const Pf=new Jt;ti.add(Pf);{const n=Cf(5),e=Yh;for(let t=0;t<10;t++){const i=new G(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Jt;for(let s=0;s<4;s++){const o=new At(new tl(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=Wn+4+n()*2.5;const r=new Jt;r.quaternion.setFromUnitVectors(new G(0,1,0),i),r.add(a),Pf.add(r),Po(a)}}function P2(n){const e=new yf;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function I2(n,e){const t=new Jt,i=new gt(e),a=wt(e,{emissive:e,emissiveIntensity:.1}),r=wt(i.clone().multiplyScalar(.78)),s=wt(i.clone().multiplyScalar(.5)),o=wt(10133684),c=wt(5922936),f=wt(10119740),u=wt(5913122),h=wt(15856635),d=wt(13225432),p=wt(1776942),m=wt(14693962),E=wt(16762941),v=new mi({color:16774856,emissive:16771488,emissiveIntensity:1.2}),g=(S,T,I=0,_=0,w=0)=>{const L=new At(S,T);return L.position.set(I,_,w),t.add(L),L},A=(S,T,I,_,w,L,U)=>g(new ya(S,T,I),_,w,L,U),P=(S,T,I,_,w,L,U,V=12)=>g(new yn(S,T,I,V),_,w,L,U),y=(S,T,I,_,w)=>g(new kn(S,10,8),T,I,_,w);switch(n){case"casa":{A(2.5,.22,2,o,0,.11,0),A(2.2,1.25,1.7,a,0,.84,0);for(const T of[-1,1]){const I=A(2.5,.12,1.15,s,0,1.78,T*.5);I.rotation.x=T*.62}A(2.56,.14,.16,wt(i.clone().multiplyScalar(.35)),0,2.13,0);const S=new yf;S.moveTo(-.85,0),S.lineTo(.85,0),S.lineTo(0,.62),S.closePath();for(const T of[-1,1]){const I=g(new ks(S,{depth:.06,bevelEnabled:!1}),a,T*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}A(.3,.8,.3,c,.65,2,-.28),A(.4,.08,.4,o,.65,2.42,-.28),A(.62,1,.04,h,0,.72,.86),A(.5,.9,.06,u,0,.67,.88),y(.04,d,.16,.65,.93),A(.9,.12,.4,o,0,.1,1.2);for(const T of[-.72,.72]){A(.55,.55,.05,h,T,.98,.86),A(.42,.42,.06,v,T,.98,.88),A(.04,.42,.07,h,T,.98,.89),A(.42,.04,.07,h,T,.98,.89);for(const I of[-1,1])A(.14,.5,.04,r,T+I*.38,.98,.88)}for(const T of[-1,1])A(.05,.5,.5,h,T*1.11,.95,.1),A(.06,.38,.38,v,T*1.12,.95,.1);y(.07,v,.5,1.2,.92),P(.04,.04,.5,f,1.55,.45,1.1,6),A(.32,.22,.22,m,1.55,.8,1.1),A(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,E],[-.7,wt(16747216)],[-.55,m]].forEach(([T,I])=>y(.07,I,T,.4,1.2));break}case"predio":{A(2.4,.2,2.2,c,0,.1,0),A(2,.7,1.8,s,0,.55,0),A(1.7,2.6,1.5,a,0,2.15,0),A(1.2,.5,1.05,r,0,3.7,0);for(let S=0;S<5;S++)for(let T=0;T<3;T++)A(.34,.36,.05,(S*2+T)%5===0?s:v,-.5+T*.5,1.2+S*.5,.77);for(let S=0;S<5;S++)for(const T of[-1,1])for(let I=0;I<2;I++)A(.05,.36,.34,(S+I)%3===0?s:v,T*.86,1.2+S*.5,-.3+I*.6);for(const S of[1,3.45])A(1.78,.07,1.58,s,0,S,0);A(.7,.55,.05,v,0,.45,.93),A(.04,.55,.06,s,0,.45,.94),A(1.2,.08,.55,m,0,.86,1.12);for(const S of[-1,1])P(.03,.03,.62,d,S*.55,.55,1.36,6);A(.9,.14,.05,v,0,3.7,.54),P(.22,.22,.5,f,.3,4.2,.1),g(new xa(.26,.2,10),u,.3,4.55,.1),A(.3,.2,.3,o,-.3,4.05,.25),P(.025,.025,.9,d,-.3,4.4,-.2,6),y(.07,wt(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{A(2.4,.16,2.4,c,0,.08,0);for(let S=0;S<9;S++)A(.26,.05,.12,S%2?p:E,-1.04+S*.26,.18,1.12);P(.5,.56,2.3,h,0,1.9,0,16),g(new xa(.5,1,16),a,0,3.55,0),P(.52,.52,.16,m,0,2.95,0,16),P(.58,.58,.1,s,0,.8,0,16),g(new Ir(.21,.045,8,18),d,0,2.4,.5),y(.18,wt(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let S=0;S<3;S++){const T=A(.08,.9,.7,a,0,1,0),I=new Jt;I.rotation.y=S/3*Math.PI*2+.5,T.position.set(.62,1,0),T.parent.remove(T),I.add(T),t.add(I)}g(new xa(.34,.8,10),wt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const S of[-.35,.35])A(.1,3.5,.1,d,1.1,1.9,S);for(const S of[.7,1.5,2.3,3.1])A(.08,.08,.7,d,1.1,S,0);A(.75,.1,.12,d,.75,2.6,0),y(.07,v,1.1,3.7,0),g(new yn(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const S of[-1.3,-.7])A(.08,.2,.3,d,S,.25,.7);break}case"estrela":{P(1.15,1.3,.2,o,0,.1,0,20),P(.8,.95,.22,c,0,.31,0,20),P(.16,.22,1.5,d,0,1.15,0),P(.3,.3,.1,d,0,1.95,0);const S=new Jt;S.name="gira",S.position.y=2.85,t.add(S);const T=new At(new ks(P2(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),wt(e,{emissive:e,emissiveIntensity:.55}));T.position.z=-.15,S.add(T);const I=new At(new Ir(1.25,.03,8,40),wt(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,S.add(I),[0,2.1,4.2].forEach((_,w)=>{const L=new At(new kn(.1,10,8),wt([16735631,5822207,16769354][w],{emissive:[16735631,5822207,16769354][w],emissiveIntensity:.7}));L.position.set(Math.cos(_)*1.25,0,Math.sin(_)*1.25),S.add(L)});break}case"cassino":{const S=wt(13620959,{emissive:3818064,emissiveIntensity:.25}),T=(I,_)=>A(.36,.5,.06,wt(_,{emissive:_,emissiveIntensity:.7}),I,2.05,.66);P(1.3,1.4,.16,c,0,.08,0,20),A(2.2,.3,1.6,s,0,.3,0),A(1.8,2.7,1.3,S,0,1.8,0),A(2,.55,1.4,s,0,3.35,0),A(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)y(.06,I%2?v:m,-.96+I*.24,3.66,.68);A(1.45,.75,.1,wt(1381675),0,2.2,.62),T(-.46,16726858),T(0,16769354),T(.46,5822207);for(const[I,_]of[[-.45,16726858],[0,5822090],[.45,5810431]])P(.1,.1,.08,wt(_,{emissive:_,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;A(.5,.06,.04,p,0,1.3,.66),A(1.2,.28,.45,s,0,.95,.8),P(.06,.06,1.1,d,1.12,2.1,0,8),y(.2,wt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const S=wt(4892927,{emissive:1922744,emissiveIntensity:.4}),T=wt(9163775,{emissive:4892927,emissiveIntensity:.6}),I=wt(16743001,{emissive:9058848,emissiveIntensity:.3});g(new kn(.95,16,12),S,0,1.85,0).scale.set(1,.85,1),g(new Ir(.92,.05,8,28),d,0,1.85,0).rotation.x=Math.PI/2,g(new kn(.58,14,10),T,0,2.15,.35),g(new kn(.2,8,8),wt(16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let _=0;_<4;_++){const w=_*Math.PI/2,L=g(new ya(.55,.14,.95),I,Math.cos(w)*1.05,1.7,Math.sin(w)*1.05);L.rotation.y=-w}for(let _=0;_<3;_++){const w=_*Math.PI*2/3+.4,L=g(new yn(.05,.07,1,8),d,Math.cos(w)*.62,.62,Math.sin(w)*.62);L.rotation.z=Math.cos(w)*.3,L.rotation.x=-Math.sin(w)*.3,g(new yn(.16,.16,.05,8),d,Math.cos(w)*.78,.12,Math.sin(w)*.78)}g(new xa(.3,.55,10),wt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,P(.03,.03,.6,d,0,2.95,0,6),y(.1,wt(16726858,{emissive:16726858,emissiveIntensity:.8}),0,3.28,0);break}case"carta":{P(.26,.32,.4,o,0,.2,0,10),P(.12,.15,1,d,0,.9,0,8),A(1.7,.9,.9,a,0,1.85,0);const S=g(new yn(.45,.45,1.7,16,1,!1,0,Math.PI),wt(e,{emissive:e,emissiveIntensity:.1,side:Jn}),0,2.3,0);S.rotation.z=Math.PI/2,A(1,.07,.05,p,0,2.02,.46),A(1.5,.5,.04,r,0,1.62,.46),A(.4,.26,.03,h,-.42,1.62,.49),y(.05,m,-.42,1.62,.52),P(.025,.025,.7,d,.9,2,0,6),A(.32,.22,.04,m,1.05,2.28,0),P(.035,.045,1.9,d,-1.2,.95,.5,6),y(.1,v,-1.2,1.95,.5),A(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const L2={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},D2=new mi({color:16774856,emissive:16771488,emissiveIntensity:1.3}),Kh=pn.map((n,e)=>{const t=new Jt,i=new Jt,a=new At(new yn(1.85,1.95,.12,28),wt(3883096));a.position.y=.04;const r=new At(new yn(1.55,1.65,.14,28),wt(new gt(n.cor).multiplyScalar(.45)));r.position.y=.1,i.add(a,r);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new At(new yn(.035,.045,.55,6),wt(13225432));m.position.set(d,.38,p);const E=new At(new kn(.08,8,6),D2);E.position.set(d,.7,p),i.add(m,E)}const s=new At(new Ir(2.08,.07,8,48),new Ji({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const o=I2(n.icone,n.cor);o.position.y=.17;const c=new Xt;c.position.y=L2[n.icone]??4.5,t.add(i,s,o,c),Po(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar(Xh(n)),Fr(t,jn[e],0);const f=o.getObjectByName("gira");return{raiz:t,anel:s,icone:o,topo:c,gira:f,giraY:f?f.position.y:0}}),If=l2(wt),Lf=h2();Fr(If.raiz,$i.jasmim,.4);Fr(Lf.raiz,$i.mazzy,0);Br.push({d:$i.jasmim,r:.035*Ma},{d:$i.mazzy,r:.055*Ma});const Ns={parado:4,andar:5,correr:5,pular:5},N2=["direita","esquerda","norte","sul"],bd=[0,1,2,3,2,1],Qh=84,Io=182,U2=168,O2=new zm,ga={};for(const[n,e]of Object.entries(Ns)){ga[n]={};for(const t of N2)ga[n][t]=Array.from({length:e},(i,a)=>{const r=O2.load(`./avatar/${n}-${t}-${a}.png`);return r.colorSpace=Dn,r.magFilter=r.minFilter=nn,r.generateMipmaps=!1,new xf({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Bo=3.6,Df=Bo*(Qh/Io);const _a=new oh(ga.parado.sul[0]);_a.center.set(.5,(Io-U2)/Io);_a.scale.set(Df,Bo,1);_a.position.y=Wn;ti.add(_a);const Ed=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new At(new Zi(1.7,1.7),new Ji({map:new Ao(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=Wn+.04,ti.add(i),i})(),Aa=n=>document.querySelector(n);Aa("#nome").textContent=`${sd.nome} · ${sd.titulo}`;const jh=Aa("#pontos"),F2=Aa("#fichas-hud b");pn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),jh.appendChild(e)});const so=Aa("#painel"),ep=Aa("#acao");let Ad=-2,Ga=-1;const tp="curriculo-visitadas-v1",za=new Set;try{for(const n of JSON.parse(localStorage.getItem(tp))||[])pn.some(e=>e.id===n)&&za.add(n)}catch{}const B2=["↑","↗","→","↘","↓","↙","←","↖"];function z2(n){let e=-1,t=1/0;if(pn.forEach((s,o)=>{if(o===n||za.has(s.id))return;const c=jn[n].angleTo(jn[o]);c<t&&(t=c,e=o)}),e<0)return null;const i=new G().copy(jn[e]).applyQuaternion(gi),a=Math.atan2(i.x,-i.z),r=Math.acos(Fo(i.y,-1,1));return{id:pn[e].id,seta:B2[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(r/tf))}}function np(n){[...jh.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",za.has(pn[t].id))})}np(-1);function G2(n){if(n!==Ad){if(Ad=n,n<0)so.classList.remove("on");else{const e=pn[n];if(!za.has(e.id)){za.add(e.id);try{localStorage.setItem(tp,JSON.stringify([...za]))}catch{}}so.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),so.querySelector("h2").textContent=e.titulo,Aa("#texto").replaceChildren(...Q_(e,{zonas:pn,visitadas:za,proxima:z2(n)})),so.scrollTop=0,ep.hidden=!e.jogo,so.classList.add("on")}np(n)}}const Ei=new Set;window.addEventListener("keydown",n=>{if(!(Rn.estaAberto()||Of.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&Ga>=0&&pn[Ga].jogo){Ei.clear(),lp(pn[Ga].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&va){sp(va);return}Ei.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>Ei.delete(n.code));window.addEventListener("blur",()=>Ei.clear());const Hi={x:0,y:0,pulo:!1},Lo=new Map;function Nf(){Hi.x=0,Hi.y=0;const n=Lo.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;Hi.x=e*a,Hi.y=-t*a}}const Uf=ui.domElement;Uf.addEventListener("pointerdown",n=>{Lo.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),Nf()});Uf.addEventListener("pointermove",n=>{const e=Lo.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,Nf())});for(const n of["pointerup","pointercancel","pointerleave"])Uf.addEventListener(n,e=>{const t=Lo.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(Hi.pulo=!0,setTimeout(()=>{Hi.pulo=!1},120)),Lo.delete(e.pointerId),Nf()});const V2=640,ip=19,Do=new Qn(2,2,{minFilter:nn,magFilter:nn,type:ei,samples:0});Do.depthTexture=new Nr(2,2);const ap=new nh,k2=new nl(-1,1,1,-1,0,1),rp=new pi({uniforms:{tCor:{value:Do.texture},tProf:{value:Do.depthTexture},uPixel:{value:new De(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:rn.near},uFar:{value:rn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});ap.add(new At(new Zi(2,2),rp));function op(){const n=window.innerWidth,e=window.innerHeight;ui.setSize(n,e),rn.aspect=n/e,rn.userData.afasta=1/Fo(rn.aspect/1.1,.5,1),rn.updateProjectionMatrix();const t=Math.min(V2,e),i=Math.max(2,Math.round(t*rn.aspect));Do.setSize(i,t),rp.uniforms.uPixel.value.set(1/i,1/t);const a=2*ip*rn.userData.afasta*Math.tan(y0.degToRad(rn.fov/2))/t;Bo=Io*a,Df=Qh*a}window.addEventListener("resize",op);op();const gi=Gr.quaternion,Td=new URLSearchParams(location.search).get("zona");if(Td!==null){const n=Fo(Math.round(Number(Td))||0,0,pn.length-1);gi.setFromUnitVectors(jn[n],new G(.25,1,-.2).normalize())}const H2=2*7.2/20;let sa=0,la=0,Ua=0,Ts=0,yr=!0,tc=0,wd=!1,Nn=0,ca="sul",nc=0;const Oa=new G,Ys=new di,Wi=new G,$s=n=>Math.acos(Fo(Wi.copy(n).applyQuaternion(gi).y,-1,1));function Rd(n,e){if(Wi.copy(n).applyQuaternion(gi),Wi.y<.8)return;const t=Math.acos(Math.min(1,Wi.y));t>=e||(Oa.crossVectors(qs,Wi),Oa.lengthSq()<1e-10&&Oa.set(0,0,1),Oa.normalize(),Ys.setFromAxisAngle(Oa,e-t),gi.premultiply(Ys))}const Vr=document.createElement("div");Vr.id="rotulos";document.body.append(Vr);const W2=pn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,Vr.append(e),e}),Js=new G,ic=new G;function X2(n){Js.copy(rn.position).normalize(),pn.forEach((e,t)=>{const i=W2[t];if(Wi.copy(jn[t]).applyQuaternion(gi),t===n||Wi.dot(Js)<.2){i.style.opacity="0";return}Kh[t].topo.getWorldPosition(ic).project(rn),i.style.transform=`translate(${Math.round((ic.x*.5+.5)*window.innerWidth)}px, ${Math.round((-ic.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const q2=.2,Zs=t2(),br=(n,e,t="triangle",i=.05,a=0)=>Rn.bip(n,e,t,i,a),af=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:$i.jasmim,modelo:If,livre:0,som:()=>{br(1047,.12,"sine"),br(1319,.12,"sine",.05,.09),br(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:$i.mazzy,modelo:Lf,livre:0,som:()=>{br(680,.09),br(930,.1,"triangle",.05,.07),br(620,.2,"triangle",.045,.15)}}],Xa=document.createElement("button");Xa.id="carinho";Xa.hidden=!0;document.body.append(Xa);const Y2=af.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",Vr.append(n),n}),No=document.createElement("div");No.className="rotulo frase";No.textContent="♥ a flor mais bela do meu mundo todo";const $2=new G(0,-7.7,0);let ac=0;Vr.append(No);let va=null,Cd="";const Gi=new G;function sp(n){Nn<n.livre||(n.livre=Nn+.5,n.modelo.carinho(),Zs[n.id]+=1,n2(Zs),n.modelo.cabeca.getWorldPosition(Gi).project(rn),o2((Gi.x*.5+.5)*window.innerWidth,(-Gi.y*.5+.5)*window.innerHeight,5),n.som())}Xa.addEventListener("click",()=>{va&&sp(va),Xa.blur()});function J2(n,e){let t=null,i=1/0;for(const o of af){const c=$s(o.d);c<q2&&c<i&&(i=c,t=o)}va=e?null:t;const a=va?`♥ ${va.frase} [E]`:"";a!==Cd&&(Cd=a,Xa.textContent=a.toUpperCase(),Xa.hidden=!a);const r=Bo/Io;If.atualizar(Nn,n),Lf.atualizar(Nn,n,r),af.forEach((o,c)=>{const f=Y2[c];if(Wi.copy(o.d).applyQuaternion(gi),o===va||Wi.dot(Js)<.2){f.style.opacity="0";return}o.modelo.topo.getWorldPosition(Gi).project(rn),f.textContent=Zs[o.id]?`${o.nome} ♥ ${Zs[o.id]}`:o.nome,f.style.transform=`translate(${Math.round((Gi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Gi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,f.style.opacity="1"});const s=Fo((.42-$s($i.jasmim))/.22,0,1);ac=Ds(ac,.8*s,3,n),Gi.copy($2).project(rn),No.style.transform=`translate(${Math.round((Gi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-Gi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,No.style.opacity=ac.toFixed(2)}const Z2={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function K2(n){const e=vo(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries(Z2))Zh[r].value.set(e[a]);const t=vo(n.arvores)?.cores;if(t){for(const{m:a,v:r}of $h)a.color.set(t.copa[r%t.copa.length]);for(const a of Jh)a.color.set(t.copa2)}const i=vo(n.ceu)?.cores;i&&(ti.background.set(i.fundo),qh.color.set(i.estrelas),Yh.color.set(i.nuvens))}const Rn=e_({aoMudarSkins:K2,aoMudarFichas:n=>{F2.textContent=String(n)}}),Of=W_({bip:(...n)=>Rn.bip(...n),somAtivo:()=>Rn.somAtivo()}),Q2=b2({planeta:Gr,fincar:Fr,R:Wn,q:gi,altura:ol,NIVEL_MAR:sl,dirsZonas:jn,raioBloqueio:Oo,obstaculos:Br,dirsSitios:$i,camera:rn,rotulosEl:Vr,camDir:Js,bip:(...n)=>Rn.bip(...n)}),j2=e2({somAtivo:()=>Rn.somAtivo()}),rf=Aa("#som");let rc=null;rf.addEventListener("click",()=>{Rn.alternarSom(),rf.blur()});function lp(n){n==="arcade"?Of.abrir():Rn.abrir()}ep.addEventListener("click",()=>{Ga>=0&&pn[Ga].jogo&&(Ei.clear(),lp(pn[Ga].jogo))});const eS=4,Pd=5,tS=.2*Ma,nS=new mi({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),Id=new mi({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),Ff=[],iS=new G;function cp(n){const e=new G;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(ol(e)<sl+.06)&&!(iS.copy(e).applyQuaternion(gi).angleTo(qs)<.45*Ma)&&!(jn.some((i,a)=>e.angleTo(i)<Oo[a]+.2)||Wh(e,.25))&&!Br.some(i=>e.angleTo(i.d)<i.r+.09*Ma)&&!Ff.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(qs,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=Nn+2}for(let n=0;n<eS;n++){const e=new Jt,t=new Jt,i=new At(new yn(.3,.3,.08,12),nS),a=new At(new yn(.2,.2,.1,12),Id);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,c=new At(new ya(.1,.14,.1),Id);c.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),c.rotation.x=o,t.add(c)}t.position.y=Wn+.7,e.add(t),Po(e),Gr.add(e);const r={d:new G,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};Ff.push(r),cp(r)}const ws=new G;function aS(n){_a.getWorldPosition(ws),ws.project(rn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((ws.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-ws.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function rS(n){for(const e of Ff){if(!e.ativa){Nn>=e.volta&&cp(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=Wn+.7+Math.sin(Nn*3+e.fase)*.08,$s(e.d)<tS&&(e.ativa=!1,e.raiz.visible=!1,e.volta=Nn+25+Math.random()*25,Rn.adicionarFichas(Pd),aS("+"+Pd),Rn.bip(988,.07,"square",.07),Rn.bip(1319,.22,"square",.07,.08),Rn.bip(1976,.3,"triangle",.05,.08))}}let Ld=performance.now();ui.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-Ld)/1e3,.05);Ld=n,Nn+=e;const t=(y,S)=>Ei.has(y)||Ei.has(S)?1:0,i=Rn.estaAberto()||Of.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||Hi.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||Hi.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(Ei.has("ShiftLeft")||Ei.has("ShiftRight"))&&(a*=1.7,r*=1.7),sa=Ds(sa,a,9,e),la=Ds(la,r,9,e);const c=Math.hypot(sa,la);c>.003&&(Oa.set(la,0,sa).normalize(),Ys.setFromAxisAngle(Oa,c*tf*e),gi.premultiply(Ys),wd=!0),jn.forEach((y,S)=>Rd(y,Oo[S]));for(const y of Br)y.baixo&&Ua>.5||Rd(y.d,y.r);gi.normalize(),wd&&Aa("#dica").classList.add("some"),!i&&(Ei.has("Space")||Hi.pulo)&&yr&&(Ts=7.2,yr=!1,nc=0),yr||(Ts-=20*e,nc+=e,Ua+=Ts*e,Ua<=0&&(Ua=0,Ts=0,yr=!0));const u=Math.min(1.7,c);if(c>.08){const y=Math.abs(sa)>Math.abs(la)*1.1,S=Math.abs(la)>Math.abs(sa)*1.1;y?ca=sa>0?"direita":"esquerda":S&&(ca=la>0?"norte":"sul")}tc+=u*e*9;let h;if(yr)c>1.2?h=ga.correr[ca][Math.floor(tc)%Ns.correr]:c>.08?h=ga.andar[ca][Math.floor(tc)%Ns.andar]:h=ca==="sul"?ga.parado.sul[bd[Math.floor(Nn*4)%bd.length]]:ga.parado[ca][0];else{const y=Math.min(.999,nc/H2);h=ga.pular[ca][Math.floor(y*Ns.pular)]}_a.material=h;const d=yr&&c<=.08&&ca!=="sul"?Math.sin(Nn*2.4)*.012:0;_a.scale.set(Df*(1-d*.5),Bo*(1+d),1),_a.position.y=Wn+Ua;const p=Math.min(Ua,1.5);Ed.scale.setScalar(1-p*.2),Ed.material.opacity=.55-p*.2;const m=rn.userData.afasta,E=ip*m,v=.42,g=1.5;rn.position.set(0,g+Math.sin(v)*E,Math.cos(v)*E),rn.lookAt(0,g,0),Pf.rotation.y=Math.sin(Nn*.1)*.4;let A=-1,P=1/0;jn.forEach((y,S)=>{const T=$s(y);T<w2[S]&&T<P&&(P=T,A=S)}),Kh.forEach((y,S)=>{const T=S===A;y.anel.material.opacity=Ds(y.anel.material.opacity,T?.55+Math.sin(Nn*4)*.25:0,8,e),y.gira&&(y.gira.rotation.y+=e*(T?2.4:.8),y.gira.position.y=y.giraY+Math.sin(Nn*1.6+S)*(T?.12:.06))}),Ga=A,G2(A),X2(A),rS(e),J2(e,i),Q2.atualizar(e,{vLeste:sa,vNorte:la,VEL:tf,pulando:Ua>.4,pausado:i}),j2.atualizar(e,i),Rn.somAtivo()!==rc&&(rc=Rn.somAtivo(),rf.classList.toggle("mudo",!rc)),ui.setRenderTarget(Do),ui.render(ti,rn),ui.setRenderTarget(null),ui.render(ap,k2)});
