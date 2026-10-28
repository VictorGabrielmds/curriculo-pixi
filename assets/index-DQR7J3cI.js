(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const of="186",yp=0,Qf=1,bp=2,uo=1,Ep=2,lo=3,Ga=0,Cn=1,Jn=2,Hi=0,ho=1,jf=2,eu=3,tu=4,Ap=5,br=100,Tp=101,wp=102,Rp=103,Cp=104,Pp=200,Ip=201,Lp=202,Dp=203,Ld=204,Dd=205,Np=206,Up=207,Op=208,Fp=209,Bp=210,zp=211,Gp=212,Vp=213,kp=214,oc=0,sc=1,lc=2,Mo=3,cc=4,fc=5,uc=6,dc=7,Nd=0,Hp=1,Wp=2,Ai=0,Ud=1,Od=2,Fd=3,Bd=4,zd=5,Gd=6,Vd=7,kd=300,Va=301,Lr=302,pl=303,ml=304,Qs=306,Us=1e3,Gi=1001,hc=1002,en=1003,Xp=1004,Yo=1005,fn=1006,gl=1007,Oa=1008,wn=1009,Hd=1010,Wd=1011,_o=1012,sf=1013,wi=1014,bi=1015,Ri=1016,lf=1017,cf=1018,So=1020,Xd=35902,qd=35899,Yd=1021,$d=1022,Kn=1023,Xi=1026,Fa=1027,Jd=1028,ff=1029,ka=1030,uf=1031,df=1033,Rs=33776,Cs=33777,Ps=33778,Is=33779,pc=35840,mc=35841,gc=35842,xc=35843,vc=36196,Mc=37492,_c=37496,Sc=37488,yc=37489,Os=37490,bc=37491,Ec=37808,Ac=37809,Tc=37810,wc=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Lc=37816,Dc=37817,Nc=37818,Uc=37819,Oc=37820,Fc=37821,Bc=36492,zc=36494,Gc=36495,Vc=36283,kc=36284,Fs=36285,Hc=36286,qp=3200,Wc=0,Yp=1,pa="",Dn="srgb",Bs="srgb-linear",zs="linear",zt="srgb",xl=7680,$p=519,Jp=512,Zp=513,Kp=514,hf=515,Qp=516,jp=517,pf=518,e0=519,Zd=35044,nu="300 es",Ei=2e3,yo=2001;function t0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n0(){const n=bo("canvas");return n.style.display="block",n}const iu={};function Gs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Kd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ht(...n){n=Kd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function It(...n){n=Kd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rr(...n){const e=n.join(" ");e in iu||(iu[e]=!0,ht(...n))}function i0(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const a0={[oc]:sc,[lc]:uc,[cc]:dc,[Mo]:fc,[sc]:oc,[uc]:lc,[dc]:cc,[fc]:Mo};class Xa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const po=Math.PI/180,Eo=180/Math.PI;function Ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function mf(n,e){return(n%e+e)%e}function r0(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function o0(n,e,t){return n!==e?(t-n)/(e-n):0}function mo(n,e,t){return(1-t)*n+t*e}function s0(n,e,t,i){return mo(n,e,1-Math.exp(-t*i))}function l0(n,e=1){return e-Math.abs(mf(n,e*2)-e)}function c0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function u0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function d0(n,e){return n+Math.random()*(e-n)}function h0(n){return n*(.5-Math.random())}function p0(n){n!==void 0&&(au=n);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(n){return n*po}function g0(n){return n*Eo}function x0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function v0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _0(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),f=s(t/2),c=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,f*h,f*d,o*c);break;case"YZY":n.set(f*d,o*u,f*h,o*c);break;case"ZXZ":n.set(f*h,f*d,o*u,o*c);break;case"XZX":n.set(o*u,f*m,f*p,o*c);break;case"YXY":n.set(f*p,o*u,f*m,o*c);break;case"ZYZ":n.set(f*m,f*p,o*u,o*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const S0={DEG2RAD:po,RAD2DEG:Eo,generateUUID:Ti,clamp:Rt,euclideanModulo:mf,mapLinear:r0,inverseLerp:o0,lerp:mo,damp:s0,pingpong:l0,smoothstep:c0,smootherstep:f0,randInt:u0,randFloat:d0,randFloatSpread:h0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:x0,ceilPowerOfTwo:v0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:_0,normalize:Gt,denormalize:ci},Bf=class Bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bf.prototype.isVector2=!0;let Ne=Bf;class fi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let f=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],E=r[s+3];if(h!==E||f!==d||c!==p||u!==m){let v=f*d+c*p+u*m+h*E;v<0&&(d=-d,p=-p,m=-m,E=-E,v=-v);let g=1-o;if(v<.9995){const A=Math.acos(v),P=Math.sin(A);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P,f=f*g+d*o,c=c*g+p*o,u=u*g+m*o,h=h*g+E*o}else{f=f*g+d*o,c=c*g+p*o,u=u*g+m*o,h=h*g+E*o;const A=1/Math.sqrt(f*f+c*c+u*u+h*h);f*=A,c*=A,u*=A,h*=A}}e[t]=f,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],f=i[a+1],c=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+f*p-c*d,e[t+1]=f*m+u*d+c*h-o*p,e[t+2]=c*m+u*p+o*d-f*h,e[t+3]=u*m-o*h-f*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,f=Math.sin,c=o(i/2),u=o(a/2),h=o(r/2),d=f(i/2),p=f(a/2),m=f(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],f=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-f)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-f)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(f+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(f+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,f=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*f,this._y=a*u+s*f+r*o-i*c,this._z=r*u+s*c+i*f-a*o,this._w=s*u-i*o-a*f-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let f=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);f=Math.sin(f*c)/u,t=Math.sin(t*c)/u,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zf=class zf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,f=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+f*c+s*h-o*u,this.y=i+f*u+o*c-r*h,this.z=a+f*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,f=t.z;return this.x=a*f-r*o,this.y=r*s-i*f,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zf.prototype.isVector3=!0;let G=zf;const vl=new G,ru=new fi,Gf=class Gf{constructor(e,t,i,a,r,s,o,f,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c)}set(e,t,i,a,r,s,o,f,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],f=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],E=a[0],v=a[3],g=a[6],A=a[1],P=a[4],y=a[7],S=a[2],T=a[5],I=a[8];return r[0]=s*E+o*A+f*S,r[3]=s*v+o*P+f*T,r[6]=s*g+o*y+f*I,r[1]=c*E+u*A+h*S,r[4]=c*v+u*P+h*T,r[7]=c*g+u*y+h*I,r[2]=d*E+p*A+m*S,r[5]=d*v+p*P+m*T,r[8]=d*g+p*y+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*f+a*r*c-a*s*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*f-u*r,p=c*r-s*f,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/m;return e[0]=h*E,e[1]=(a*c-u*i)*E,e[2]=(o*i-a*s)*E,e[3]=d*E,e[4]=(u*t-a*f)*E,e[5]=(a*r-o*t)*E,e[6]=p*E,e[7]=(i*f-c*t)*E,e[8]=(s*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const f=Math.cos(r),c=Math.sin(r);return this.set(i*f,i*c,-i*(f*s+c*o)+s+e,-a*c,a*f,-a*(-c*s+f*o)+o+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let _t=Gf;const Ml=new _t,ou=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){const n={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===zt&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===zt&&(a.r=Cr(a.r),a.g=Cr(a.g),a.b=Cr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===pa?zs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bs]:{primaries:e,whitePoint:i,transfer:zs,toXYZ:ou,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:zt,toXYZ:ou,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}const Pt=y0();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ja;class b0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ja===void 0&&(ja=bo("canvas")),ja.width=e.width,ja.height=e.height;const a=ja.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ja}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Wi(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class gf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(_l(a[s].image)):r.push(_l(a[s]))}else r=_l(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let A0=0;const Sl=new G;class un extends Xa{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Gi,a=Gi,r=fn,s=Oa,o=Kn,f=wn,c=un.DEFAULT_ANISOTROPY,u=pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ti(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=kd;un.DEFAULT_ANISOTROPY=1;const Vf=class Vf{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,c=f[0],u=f[4],h=f[8],d=f[1],p=f[5],m=f[9],E=f[2],v=f[6],g=f[10];if(Math.abs(u-d)<.01&&Math.abs(h-E)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+E)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,y=(p+1)/2,S=(g+1)/2,T=(u+d)/4,I=(h+E)/4,_=(m+v)/4;return P>y&&P>S?P<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(P),a=T/i,r=I/i):y>S?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=T/a,r=_/a):S<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(S),i=I/r,a=_/r),this.set(i,a,r,t),this}let A=Math.sqrt((v-m)*(v-m)+(h-E)*(h-E)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(v-m)/A,this.y=(h-E)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vf.prototype.isVector4=!0;let Kt=Vf;class T0 extends Xa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new un(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new gf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends T0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qd extends un{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=en,this.minFilter=en,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w0 extends un{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=en,this.minFilter=en,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ks=class Ks{constructor(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v)}set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,E,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=r,g[5]=s,g[9]=o,g[13]=f,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=p,g[7]=m,g[11]=E,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ks().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),s=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),f=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=-f*h,t[8]=c,t[1]=p+m*c,t[5]=d-E*c,t[9]=-o*f,t[2]=E-d*c,t[6]=m+p*c,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,p=f*h,m=c*u,E=c*h;t[0]=d+E*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=E+d*o,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,p=f*h,m=c*u,E=c*h;t[0]=d-E*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=E-d*o,t[2]=-s*c,t[6]=o,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,E=o*h;t[0]=f*u,t[4]=m*c-p,t[8]=d*c+E,t[1]=f*h,t[5]=E*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,p=s*c,m=o*f,E=o*c;t[0]=f*u,t[4]=E-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-E*h}else if(e.order==="XZY"){const d=s*f,p=s*c,m=o*f,E=o*c;t[0]=f*u,t[4]=-h,t[8]=c*u,t[1]=d*h+E,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=E*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,C0)}lookAt(e,t,i){const a=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ji.crossVectors(i,Fn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ji.crossVectors(i,Fn)),ji.normalize(),$o.crossVectors(Fn,ji),a[0]=ji.x,a[4]=$o.x,a[8]=Fn.x,a[1]=ji.y,a[5]=$o.y,a[9]=Fn.y,a[2]=ji.z,a[6]=$o.z,a[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],f=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],E=i[6],v=i[10],g=i[14],A=i[3],P=i[7],y=i[11],S=i[15],T=a[0],I=a[4],_=a[8],w=a[12],L=a[1],U=a[5],V=a[9],q=a[13],B=a[2],J=a[6],re=a[10],W=a[14],ge=a[3],se=a[7],ae=a[11],de=a[15];return r[0]=s*T+o*L+f*B+c*ge,r[4]=s*I+o*U+f*J+c*se,r[8]=s*_+o*V+f*re+c*ae,r[12]=s*w+o*q+f*W+c*de,r[1]=u*T+h*L+d*B+p*ge,r[5]=u*I+h*U+d*J+p*se,r[9]=u*_+h*V+d*re+p*ae,r[13]=u*w+h*q+d*W+p*de,r[2]=m*T+E*L+v*B+g*ge,r[6]=m*I+E*U+v*J+g*se,r[10]=m*_+E*V+v*re+g*ae,r[14]=m*w+E*q+v*W+g*de,r[3]=A*T+P*L+y*B+S*ge,r[7]=A*I+P*U+y*J+S*se,r[11]=A*_+P*V+y*re+S*ae,r[15]=A*w+P*q+y*W+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],f=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],E=e[7],v=e[11],g=e[15],A=f*p-c*d,P=o*p-c*h,y=o*d-f*h,S=s*p-c*u,T=s*d-f*u,I=s*h-o*u;return t*(E*A-v*P+g*y)-i*(m*A-v*S+g*T)+a*(m*P-E*S+g*I)-r*(m*y-E*T+v*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],f=e[2],c=e[6],u=e[10];return t*(s*u-o*c)-i*(r*u-o*f)+a*(r*c-s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],E=e[13],v=e[14],g=e[15],A=t*o-i*s,P=t*f-a*s,y=t*c-r*s,S=i*f-a*o,T=i*c-r*o,I=a*c-r*f,_=u*E-h*m,w=u*v-d*m,L=u*g-p*m,U=h*v-d*E,V=h*g-p*E,q=d*g-p*v,B=A*q-P*V+y*U+S*L-T*w+I*_;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/B;return e[0]=(o*q-f*V+c*U)*J,e[1]=(a*V-i*q-r*U)*J,e[2]=(E*I-v*T+g*S)*J,e[3]=(d*T-h*I-p*S)*J,e[4]=(f*L-s*q-c*w)*J,e[5]=(t*q-a*L+r*w)*J,e[6]=(v*y-m*I-g*P)*J,e[7]=(u*I-d*y+p*P)*J,e[8]=(s*V-o*L+c*_)*J,e[9]=(i*L-t*V-r*_)*J,e[10]=(m*T-E*y+g*A)*J,e[11]=(h*y-u*T-p*A)*J,e[12]=(o*w-s*U-f*_)*J,e[13]=(t*U-i*w+a*_)*J,e[14]=(E*P-m*S-v*A)*J,e[15]=(u*S-h*P+d*A)*J,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,f=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*f,c*f+a*o,0,c*o+a*f,u*o+i,u*f-a*s,0,c*f-a*o,u*f+a*s,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,f=t._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,m=r*h,E=s*u,v=s*h,g=o*h,A=f*c,P=f*u,y=f*h,S=i.x,T=i.y,I=i.z;return a[0]=(1-(E+g))*S,a[1]=(p+y)*S,a[2]=(m-P)*S,a[3]=0,a[4]=(p-y)*T,a[5]=(1-(d+g))*T,a[6]=(v+A)*T,a[7]=0,a[8]=(m+P)*I,a[9]=(v-A)*I,a[10]=(1-(d+E))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=er.set(a[0],a[1],a[2]).length();const o=er.set(a[4],a[5],a[6]).length(),f=er.set(a[8],a[9],a[10]).length();r<0&&(s=-s),ii.copy(this);const c=1/s,u=1/o,h=1/f;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=f,this}makePerspective(e,t,i,a,r,s,o=Ei,f=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,E;if(f)m=r/(s-r),E=s*r/(s-r);else if(o===Ei)m=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(o===yo)m=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=Ei,f=!1){const c=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,E;if(f)m=1/(s-r),E=s/(s-r);else if(o===Ei)m=-2/(s-r),E=-(s+r)/(s-r);else if(o===yo)m=-1/(s-r),E=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ks.prototype.isMatrix4=!0;let Xt=Ks;const er=new G,ii=new Xt,R0=new G(0,0,0),C0=new G(1,1,1),ji=new G,$o=new G,Fn=new G,lu=new Xt,cu=new fi;class _a{constructor(e=0,t=0,i=0,a=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],f=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(f,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const fu=new G,tr=new fi,Pi=new Xt,Jo=new G,$r=new G,I0=new G,L0=new fi,uu=new G(1,0,0),du=new G(0,1,0),hu=new G(0,0,1),pu={type:"added"},D0={type:"removed"},nr={type:"childadded",child:null},yl={type:"childremoved",child:null};class Ht extends Xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new _a,i=new fi,a=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new _t}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt($r,Jo,this.up):Pi.lookAt(Jo,$r,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),tr.setFromRotationMatrix(Pi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),nr.child=e,this.dispatchEvent(nr),nr.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,I0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,L0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let c=0,u=f.length;c<u;c++){const h=f[c];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,c=this.material.length;f<c;f++)o.push(r(e.materials,this.material[f]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];a.animations.push(r(e.animations,f))}}if(t){const o=s(e.geometries),f=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const f=[];for(const c in o){const u=o[c];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yt extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N0={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,f=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,i),g=this._getHandJoint(c,E);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N0)))}return o!==null&&(o.visible=a!==null),f!==null&&(f.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ea={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function El(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Pt.workingColorSpace){if(e=mf(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=El(s,r,e+1/3),this.g=El(s,r,e),this.b=El(s,r,e-1/3)}return Pt.colorSpaceToWorking(this,a),this}setStyle(e,t=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=eh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Pt.workingToColorSpace(xn.copy(this),e),Math.round(Rt(xn.r*255,0,255))*65536+Math.round(Rt(xn.g*255,0,255))*256+Math.round(Rt(xn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(xn.copy(this),t);const i=xn.r,a=xn.g,r=xn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let f,c;const u=(o+s)/2;if(o===s)f=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:f=(a-r)/h+(a<r?6:0);break;case a:f=(r-i)/h+2;break;case r:f=(i-a)/h+4;break}f/=6}return e.h=f,e.s=c,e.l=u,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Dn){Pt.workingToColorSpace(xn.copy(this),e);const t=xn.r,i=xn.g,a=xn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ea),this.setHSL(ea.h+e,ea.s+t,ea.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ea),e.getHSL(Zo);const i=mo(ea.h,Zo.h,t),a=mo(ea.s,Zo.s,t),r=mo(ea.l,Zo.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new gt;gt.NAMES=eh;class th extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ai=new G,Ii=new G,Al=new G,Li=new G,ir=new G,ar=new G,mu=new G,Tl=new G,wl=new G,Rl=new G,Cl=new Kt,Pl=new Kt,Il=new Kt;class Zn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ai.subVectors(e,t),a.cross(ai);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){ai.subVectors(a,t),Ii.subVectors(i,t),Al.subVectors(e,t);const s=ai.dot(ai),o=ai.dot(Ii),f=ai.dot(Al),c=Ii.dot(Ii),u=Ii.dot(Al),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*f-o*u)*d,m=(s*u-o*f)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,a,r,s,o,f){return this.getBarycoord(e,t,i,a,Li)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,Li.x),f.addScaledVector(s,Li.y),f.addScaledVector(o,Li.z),f)}static getInterpolatedAttribute(e,t,i,a,r,s){return Cl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Cl,r.x),s.addScaledVector(Pl,r.y),s.addScaledVector(Il,r.z),s}static isFrontFacing(e,t,i,a){return ai.subVectors(i,t),Ii.subVectors(e,t),ai.cross(Ii).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;ir.subVectors(a,i),ar.subVectors(r,i),Tl.subVectors(e,i);const f=ir.dot(Tl),c=ar.dot(Tl);if(f<=0&&c<=0)return t.copy(i);wl.subVectors(e,a);const u=ir.dot(wl),h=ar.dot(wl);if(u>=0&&h<=u)return t.copy(a);const d=f*h-u*c;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(i).addScaledVector(ir,s);Rl.subVectors(e,r);const p=ir.dot(Rl),m=ar.dot(Rl);if(m>=0&&p<=m)return t.copy(r);const E=p*c-f*m;if(E<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(ar,o);const v=u*m-p*h;if(v<=0&&h-u>=0&&p-m>=0)return mu.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(mu,o);const g=1/(v+E+d);return s=E*g,o=d*g,t.copy(i).addScaledVector(ir,s).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ri):ri.fromBufferAttribute(r,s),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Qo.subVectors(this.max,Jr),rr.subVectors(e.a,Jr),or.subVectors(e.b,Jr),sr.subVectors(e.c,Jr),ta.subVectors(or,rr),na.subVectors(sr,or),wa.subVectors(rr,sr);let t=[0,-ta.z,ta.y,0,-na.z,na.y,0,-wa.z,wa.y,ta.z,0,-ta.x,na.z,0,-na.x,wa.z,0,-wa.x,-ta.y,ta.x,0,-na.y,na.x,0,-wa.y,wa.x,0];return!Ll(t,rr,or,sr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,rr,or,sr,Qo))?!1:(jo.crossVectors(ta,na),t=[jo.x,jo.y,jo.z],Ll(t,rr,or,sr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new G,new G,new G,new G,new G,new G,new G,new G],ri=new G,Ko=new Oo,rr=new G,or=new G,sr=new G,ta=new G,na=new G,wa=new G,Jr=new G,Qo=new G,jo=new G,Ra=new G;function Ll(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){Ra.fromArray(n,r);const o=a.x*Math.abs(Ra.x)+a.y*Math.abs(Ra.y)+a.z*Math.abs(Ra.z),f=e.dot(Ra),c=t.dot(Ra),u=i.dot(Ra);if(Math.max(-Math.max(f,c,u),Math.min(f,c,u))>o)return!1}return!0}const nn=new G,es=new Ne;let U0=0;class ui extends Xa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),a=Gt(a,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class nh extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ih extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}const O0=new Oo,Zr=new G,Dl=new G;class js{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):O0.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Zr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Dl)),this.expandByPoint(Zr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let F0=0;const Yn=new Xt,Nl=new Ht,lr=new G,Bn=new Oo,Kr=new Oo,sn=new G;class hn extends Xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?ih:nh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new _t().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Bn.min,Kr.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,Kr.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(Kr.min),Bn.expandByPoint(Kr.max))}Bn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)sn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(sn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],f=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),f&&(lr.fromBufferAttribute(e,c),sn.add(lr)),a=Math.max(a,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],f=[];for(let _=0;_<i.count;_++)o[_]=new G,f[_]=new G;const c=new G,u=new G,h=new G,d=new Ne,p=new Ne,m=new Ne,E=new G,v=new G;function g(_,w,L){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,L),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,L),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(E.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(U),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(U),o[_].add(E),o[w].add(E),o[L].add(E),f[_].add(v),f[w].add(v),f[L].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let q=U,B=U+V;q<B;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new G,y=new G,S=new G,T=new G;function I(_){S.fromBufferAttribute(a,_),T.copy(S);const w=o[_];P.copy(w),P.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(T,w);const U=y.dot(f[_])<0?-1:1;s.setXYZW(_,P.x,P.y,P.z,U)}for(let _=0,w=A.length;_<w;++_){const L=A[_],U=L.start,V=L.count;for(let q=U,B=U+V;q<B;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new G,r=new G,s=new G,o=new G,f=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),E=e.getX(d+1),v=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,v),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),f.fromBufferAttribute(i,E),c.fromBufferAttribute(i,v),o.add(u),f.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,f){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(f.length*u);let p=0,m=0;for(let E=0,v=f.length;E<v;E++){o.isInterleavedBufferAttribute?p=f[E]*o.data.stride+o.offset:p=f[E]*u;for(let g=0;g<u;g++)d[m++]=c[p++]}return new ui(d,u,h)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,a=this.attributes;for(const o in a){const f=a[o],c=e(f,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const f=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);f.push(p)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,f=s.length;o<f;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const c in f)f[c]!==void 0&&(e[c]=f[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const c=i[f];e.data.attributes[f]=c.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const c=this.morphAttributes[f],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class B0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zd,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const En=new G;class Vs{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),a=Gt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),a=Gt(a,this.array),r=Gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Gs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ul=new G,z0=new G,G0=new _t;class ua{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Ul.subVectors(i,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Ul),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||G0.getNormalMatrix(e),a=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let V0=0;class qa extends Xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ho,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const f=r[o];delete f.metadata,s.push(f)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ua().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ne().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xf extends qa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cr;const Qr=new G,fr=new G,ur=new G,dr=new Ne,jr=new Ne,ah=new Xt,ts=new G,eo=new G,ns=new G,gu=new Ne,Ol=new Ne,xu=new Ne;class rh extends Ht{constructor(e=new xf){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new B0(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Vs(i,3,0,!1)),cr.setAttribute("uv",new Vs(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),ah.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-ur.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;is(ts.set(-.5,-.5,0),ur,s,fr,a,r),is(eo.set(.5,-.5,0),ur,s,fr,a,r),is(ns.set(.5,.5,0),ur,s,fr,a,r),gu.set(0,0),Ol.set(1,0),xu.set(1,1);let o=e.ray.intersectTriangle(ts,eo,ns,!1,Qr);if(o===null&&(is(eo.set(-.5,.5,0),ur,s,fr,a,r),Ol.set(0,1),o=e.ray.intersectTriangle(ts,ns,eo,!1,Qr),o===null))return;const f=e.ray.origin.distanceTo(Qr);f<e.near||f>e.far||t.push({distance:f,point:Qr.clone(),uv:Zn.getInterpolation(Qr,ts,eo,ns,gu,Ol,xu,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function is(n,e,t,i,a,r){dr.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(jr.x=r*dr.x-a*dr.y,jr.y=a*dr.x+r*dr.y):jr.copy(dr),n.copy(e),n.x+=jr.x,n.y+=jr.y,n.applyMatrix4(ah)}const Ni=new G,Fl=new G,as=new G,rs=new G;class oh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Fl.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Fl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(as),o=rs.dot(this.direction),f=-rs.dot(as),c=rs.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*f-o,d=s*o-f,m=r*u,h>=0)if(d>=-m)if(d<=m){const E=1/u;h*=E,d*=E,p=h*(h+s*d+2*o)+d*(s*h+d+2*f)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-f),r),p=d*(d+2*f)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Fl).addScaledVector(as,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),a=Ni.dot(Ni)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,f=i+s;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,f;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,f=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,f=(e.min.z-d.z)*h),i>f||o>a)||((o>i||i!==i)&&(i=o),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,f=o.x,c=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,E=t.y-s.y,v=t.z-s.z,g=i.x-s.x,A=i.y-s.y,P=i.z-s.z,y=Math.abs(f),S=Math.abs(c),T=Math.abs(u);let I,_,w,L,U,V,q,B,J,re,W,ge;if(y>=S&&y>=T?(w=f,V=h,J=m,ge=g,f>=0?(I=c,_=u,L=d,U=p,q=E,B=v,re=A,W=P):(I=u,_=c,L=p,U=d,q=v,B=E,re=P,W=A)):S>=T?(w=c,V=d,J=E,ge=A,c>=0?(I=u,_=f,L=p,U=h,q=v,B=m,re=P,W=g):(I=f,_=u,L=h,U=p,q=m,B=v,re=g,W=P)):(w=u,V=p,J=v,ge=P,u>=0?(I=f,_=c,L=h,U=d,q=m,B=E,re=g,W=A):(I=c,_=f,L=d,U=h,q=E,B=m,re=A,W=g)),w===0)return null;const se=I/w,ae=_/w,de=1/w,tt=L-se*V,He=U-ae*V,vt=q-se*J,ut=B-ae*J,pt=re-se*ge,ce=W-ae*ge,he=pt*ut-ce*vt,Pe=tt*ce-He*pt,st=vt*He-ut*tt;if(a){if(he<0||Pe<0||st<0)return null}else if((he<0||Pe<0||st<0)&&(he>0||Pe>0||st>0))return null;const Ye=he+Pe+st;if(Ye===0)return null;const Ie=de*(he*V+Pe*J+st*ge);return(Ye>0?Ie<0:Ie>0)?null:this.at(Ie/Ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yi extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vu=new Xt,Ca=new oh,os=new js,Mu=new G,ss=new G,ls=new G,cs=new G,Bl=new G,fs=new G,_u=new G,us=new G;class Et extends Ht{constructor(e=new hn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let f=0,c=r.length;f<c;f++){const u=o[f],h=r[f];u!==0&&(Bl.fromBufferAttribute(h,e),s?fs.addScaledVector(Bl,u):fs.addScaledVector(Bl.sub(t),u))}t.add(fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),Ca.copy(e.ray).recast(e.near),!(os.containsPoint(Ca.origin)===!1&&(Ca.intersectSphere(os,Mu)===null||Ca.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&Ca.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ca)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,f=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],g=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=o.getX(y),I=o.getX(y+1),_=o.getX(y+2);a=ds(this,g,e,i,c,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let v=m,g=E;v<g;v+=3){const A=o.getX(v),P=o.getX(v+1),y=o.getX(v+2);a=ds(this,s,e,i,c,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(s))for(let m=0,E=d.length;m<E;m++){const v=d[m],g=s[v.materialIndex],A=Math.max(v.start,p.start),P=Math.min(f.count,Math.min(v.start+v.count,p.start+p.count));for(let y=A,S=P;y<S;y+=3){const T=y,I=y+1,_=y+2;a=ds(this,g,e,i,c,u,h,T,I,_),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),E=Math.min(f.count,p.start+p.count);for(let v=m,g=E;v<g;v+=3){const A=v,P=v+1,y=v+2;a=ds(this,s,e,i,c,u,h,A,P,y),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function k0(n,e,t,i,a,r,s,o){let f;if(e.side===Cn?f=i.intersectTriangle(s,r,a,!0,o):f=i.intersectTriangle(a,r,s,e.side===Ga,o),f===null)return null;us.copy(o),us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(us);return c<t.near||c>t.far?null:{distance:c,point:us.clone(),object:n}}function ds(n,e,t,i,a,r,s,o,f,c){n.getVertexPosition(o,ss),n.getVertexPosition(f,ls),n.getVertexPosition(c,cs);const u=k0(n,e,t,i,ss,ls,cs,_u);if(u){const h=new G;Zn.getBarycoord(_u,ss,ls,cs,h),a&&(u.uv=Zn.getInterpolatedAttribute(a,o,f,c,h,new Ne)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,o,f,c,h,new Ne)),s&&(u.normal=Zn.getInterpolatedAttribute(s,o,f,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:f,c,normal:new G,materialIndex:0};Zn.getNormal(ss,ls,cs,d.normal),u.face=d,u.barycoord=h}return u}class sh extends un{constructor(e=null,t=1,i=1,a,r,s,o,f,c=en,u=en,h,d){super(null,s,o,f,c,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new js,H0=new Ne(.5,.5),hs=new G;class vf{constructor(e=new ua,t=new ua,i=new ua,a=new ua,r=new ua,s=new ua){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],f=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],E=r[9],v=r[10],g=r[11],A=r[12],P=r[13],y=r[14],S=r[15];if(a[0].setComponents(c-s,p-u,g-m,S-A).normalize(),a[1].setComponents(c+s,p+u,g+m,S+A).normalize(),a[2].setComponents(c+o,p+h,g+E,S+P).normalize(),a[3].setComponents(c-o,p-h,g-E,S-P).normalize(),i)a[4].setComponents(f,d,v,y).normalize(),a[5].setComponents(c-f,p-d,g-v,S-y).normalize();else if(a[4].setComponents(c-f,p-d,g-v,S-y).normalize(),t===Ei)a[5].setComponents(c+f,p+d,g+v,S+y).normalize();else if(t===yo)a[5].setComponents(f,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(e){Pa.center.set(0,0,0);const t=H0.distanceTo(e.center);return Pa.radius=.7071067811865476+t,Pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(hs.x=a.normal.x>0?e.max.x:e.min.x,hs.y=a.normal.y>0?e.max.y:e.min.y,hs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lh extends qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Su=new Xt,Xc=new oh,ps=new js,ms=new G;class W0 extends Ht{constructor(e=new hn,t=new lh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(a),ps.radius+=r,e.ray.intersectsSphere(ps)===!1)return;Su.copy(a).invert(),Xc.copy(e.ray).applyMatrix4(Su);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,E=p;m<E;m++){const v=c.getX(m);ms.fromBufferAttribute(h,v),yu(ms,v,f,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,E=p;m<E;m++)ms.fromBufferAttribute(h,m),yu(ms,m,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yu(n,e,t,i,a,r,s){const o=Xc.distanceSqToPoint(n);if(o<t){const f=new G;Xc.closestPointToPoint(n,f),f.applyMatrix4(i);const c=a.ray.origin.distanceTo(f);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ch extends un{constructor(e=[],t=Va,i,a,r,s,o,f,c,u){super(e,t,i,a,r,s,o,f,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends un{constructor(e,t,i,a,r,s,o,f,c){super(e,t,i,a,r,s,o,f,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dr extends un{constructor(e,t,i=wi,a,r,s,o=en,f=en,c,u=Xi,h=1){if(u!==Xi&&u!==Fa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,f,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class X0 extends Dr{constructor(e,t=wi,i=Va,a,r,s=en,o=en,f,c=Xi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,f,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fh extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sa extends hn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const f=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function m(E,v,g,A,P,y,S,T,I,_,w){const L=y/I,U=S/_,V=y/2,q=S/2,B=T/2,J=I+1,re=_+1;let W=0,ge=0;const se=new G;for(let ae=0;ae<re;ae++){const de=ae*U-q;for(let tt=0;tt<J;tt++){const He=tt*L-V;se[E]=He*A,se[v]=de*P,se[g]=B,c.push(se.x,se.y,se.z),se[E]=0,se[v]=0,se[g]=T>0?1:-1,u.push(se.x,se.y,se.z),h.push(tt/I),h.push(1-ae/_),W+=1}}for(let ae=0;ae<_;ae++)for(let de=0;de<I;de++){const tt=d+de+J*ae,He=d+de+J*(ae+1),vt=d+(de+1)+J*(ae+1),ut=d+(de+1)+J*ae;f.push(tt,He,ut),f.push(He,vt,ut),ge+=6}o.addGroup(p,ge,w),p+=ge,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sn extends hn{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:f};const c=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const E=[],v=i/2;let g=0;A(),s===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function A(){const y=new G,S=new G;let T=0;const I=(t-e)/i;for(let _=0;_<=r;_++){const w=[],L=_/r,U=L*(t-e)+e;for(let V=0;V<=a;V++){const q=V/a,B=q*f+o,J=Math.sin(B),re=Math.cos(B);S.x=U*J,S.y=-L*i+v,S.z=U*re,h.push(S.x,S.y,S.z),y.set(J,I,re).normalize(),d.push(y.x,y.y,y.z),p.push(q,1-L),w.push(m++)}E.push(w)}for(let _=0;_<a;_++)for(let w=0;w<r;w++){const L=E[w][_],U=E[w+1][_],V=E[w+1][_+1],q=E[w][_+1];(e>0||w!==0)&&(u.push(L,U,q),T+=3),(t>0||w!==r-1)&&(u.push(U,V,q),T+=3)}c.addGroup(g,T,0),g+=T}function P(y){const S=m,T=new Ne,I=new G;let _=0;const w=y===!0?e:t,L=y===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,v*L,0),d.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let V=0;V<=a;V++){const B=V/a*f+o,J=Math.cos(B),re=Math.sin(B);I.x=w*re,I.y=v*L,I.z=w*J,h.push(I.x,I.y,I.z),d.push(0,L,0),T.x=J*.5+.5,T.y=re*.5*L+.5,p.push(T.x,T.y),m++}for(let V=0;V<a;V++){const q=S+V,B=U+V;y===!0?u.push(B,B+1,q):u.push(B+1,B,q),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends Sn{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends hn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),c(i),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const P=new G,y=new G,S=new G;for(let T=0;T<t.length;T+=3)p(t[T+0],P),p(t[T+1],y),p(t[T+2],S),f(P,y,S,A)}function f(A,P,y,S){const T=S+1,I=[];for(let _=0;_<=T;_++){I[_]=[];const w=A.clone().lerp(y,_/T),L=P.clone().lerp(y,_/T),U=T-_;for(let V=0;V<=U;V++)V===0&&_===T?I[_][V]=w:I[_][V]=w.clone().lerp(L,V/U)}for(let _=0;_<T;_++)for(let w=0;w<2*(T-_)-1;w++){const L=Math.floor(w/2);w%2===0?(d(I[_][L+1]),d(I[_+1][L]),d(I[_][L])):(d(I[_][L+1]),d(I[_+1][L+1]),d(I[_+1][L]))}}function c(A){const P=new G;for(let y=0;y<r.length;y+=3)P.x=r[y+0],P.y=r[y+1],P.z=r[y+2],P.normalize().multiplyScalar(A),r[y+0]=P.x,r[y+1]=P.y,r[y+2]=P.z}function u(){const A=new G;for(let P=0;P<r.length;P+=3){A.x=r[P+0],A.y=r[P+1],A.z=r[P+2];const y=v(A)/2/Math.PI+.5,S=g(A)/Math.PI+.5;s.push(y,1-S)}m(),h()}function h(){for(let A=0;A<s.length;A+=6){const P=s[A+0],y=s[A+2],S=s[A+4],T=Math.max(P,y,S),I=Math.min(P,y,S);T>.9&&I<.1&&(P<.2&&(s[A+0]+=1),y<.2&&(s[A+2]+=1),S<.2&&(s[A+4]+=1))}}function d(A){r.push(A.x,A.y,A.z)}function p(A,P){const y=A*3;P.x=e[y+0],P.y=e[y+1],P.z=e[y+2]}function m(){const A=new G,P=new G,y=new G,S=new G,T=new Ne,I=new Ne,_=new Ne;for(let w=0,L=0;w<r.length;w+=9,L+=6){A.set(r[w+0],r[w+1],r[w+2]),P.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(s[L+0],s[L+1]),I.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(A).add(P).add(y).divideScalar(3);const U=v(S);E(T,L+0,A,U),E(I,L+2,P,U),E(_,L+4,y,U)}}function E(A,P,y,S){S<0&&A.x===1&&(s[P]=A.x-1),y.x===0&&y.z===0&&(s[P]=S/2/Math.PI+.5)}function v(A){return Math.atan2(A.z,-A.x)}function g(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.vertices,e.indices,e.radius,e.detail)}}class Mf extends el{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mf(e.radius,e.detail)}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,f=r-1,c;for(;o<=f;)if(a=Math.floor(o+(f-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)f=a-1;else{f=a;break}if(a=f,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),f=t||(s.isVector2?new Ne:new G);return f.copy(o).sub(s).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new G,a=[],r=[],s=[],o=new G,f=new Xt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new G)}r[0]=new G,s[0]=new G;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Rt(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(f.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(f.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _f extends Ci{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=f}getPoint(e,t=new Ne){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=f-this.aX,p=c-this.aY;f=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(f,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class q0 extends _f{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Sf(){let n=0,e=0,t=0,i=0;function a(r,s,o,f){n=r,e=o,t=-3*r+3*s-2*o-f,i=2*r-2*s+o+f}return{initCatmullRom:function(r,s,o,f,c){a(s,o,c*(o-r),c*(f-s))},initNonuniformCatmullRom:function(r,s,o,f,c,u,h){let d=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(f-s)/(u+h)+(f-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const bu=new G,Eu=new G,zl=new Sf,Gl=new Sf,Vl=new Sf;class Y0 extends Ci{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new G){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),f=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:f===0&&o===r-1&&(o=r-2,f=1);let c,u;this.closed||o>0?c=a[(o-1)%r]:(Eu.subVectors(a[0],a[1]).add(a[0]),c=Eu);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(bu.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=bu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),E=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);E<1e-4&&(E=1),m<1e-4&&(m=E),v<1e-4&&(v=E),zl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,E,v),Gl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,E,v),Vl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,E,v)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Gl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Vl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(zl.calc(f),Gl.calc(f),Vl.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new G().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Au(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,f=n*o;return(2*t-2*i+r+s)*f+(-3*t+3*i-2*r-s)*o+r*n+t}function $0(n,e){const t=1-n;return t*t*e}function J0(n,e){return 2*(1-n)*n*e}function Z0(n,e){return n*n*e}function go(n,e,t,i){return $0(n,e)+J0(n,t)+Z0(n,i)}function K0(n,e){const t=1-n;return t*t*t*e}function Q0(n,e){const t=1-n;return 3*t*t*n*e}function j0(n,e){return 3*(1-n)*n*n*e}function em(n,e){return n*n*n*e}function xo(n,e,t,i,a){return K0(n,e)+Q0(n,t)+j0(n,i)+em(n,a)}class uh extends Ci{constructor(e=new Ne,t=new Ne,i=new Ne,a=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(xo(e,a.x,r.x,s.x,o.x),xo(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tm extends Ci{constructor(e=new G,t=new G,i=new G,a=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(xo(e,a.x,r.x,s.x,o.x),xo(e,a.y,r.y,s.y,o.y),xo(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dh extends Ci{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nm extends Ci{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends Ci{constructor(e=new Ne,t=new Ne,i=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ne){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(go(e,a.x,r.x,s.x),go(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class im extends Ci{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(go(e,a.x,r.x,s.x),go(e,a.y,r.y,s.y),go(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,f=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(Au(o,f.x,c.x,u.x,h.x),Au(o,f.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ne().fromArray(a))}return this}}var qc=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:Y0,CubicBezierCurve:uh,CubicBezierCurve3:tm,EllipseCurve:_f,LineCurve:dh,LineCurve3:nm,QuadraticBezierCurve:hh,QuadraticBezierCurve3:im,SplineCurve:ph});class am extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],f=o.getLength(),c=f===0?0:1-s/f;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,f=s.getPoints(o);for(let c=0;c<f.length;c++){const u=f[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new qc[a.type]().fromJSON(a))}return this}}class Tu extends am{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dh(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new hh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new uh(this.currentPoint.clone(),new Ne(e,t),new Ne(i,a),new Ne(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ph(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+o,t+f,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,f){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,r,s,o,f),this}absellipse(e,t,i,a,r,s,o,f){const c=new _f(e,t,i,a,r,s,o,f);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yf extends Tu{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Tu().fromJSON(a))}return this}}function rm(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=mh(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,f,c;if(i&&(r=fm(n,e,r,t)),n.length>80*t){o=n[0],f=n[1];let u=o,h=f;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<f&&(f=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-o,h-f),c=c!==0?32767/c:0}return To(r,s,t,o,f,c,0),s}function mh(n,e,t,i,a){let r;if(a===Sm(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=wu(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=wu(s/i|0,n[s],n[s+1],r);return r&&Nr(r,r.next)&&(Ro(r),r=r.next),r}function Ha(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Nr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function To(n,e,t,i,a,r,s){if(!n)return;!s&&r&&mm(n,i,a,r);let o=n;for(;n.prev!==n.next;){const f=n.prev,c=n.next;if(r?sm(n,i,a,r):om(n)){e.push(f.i,n.i,c.i),Ro(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=lm(Ha(n),e),To(n,e,t,i,a,r,2)):s===2&&cm(n,e,t,i,a,r):To(Ha(n),e,t,i,a,r,1);break}}}function om(n){const e=n.prev,t=n,i=n.next;if(Qt(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,f=t.y,c=i.y,u=Math.min(a,r,s),h=Math.min(o,f,c),d=Math.max(a,r,s),p=Math.max(o,f,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&co(a,o,r,f,s,c,m.x,m.y)&&Qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sm(n,e,t,i){const a=n.prev,r=n,s=n.next;if(Qt(a,r,s)>=0)return!1;const o=a.x,f=r.x,c=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,f,c),m=Math.min(u,h,d),E=Math.max(o,f,c),v=Math.max(u,h,d),g=Yc(p,m,e,t,i),A=Yc(E,v,e,t,i);let P=n.prevZ,y=n.nextZ;for(;P&&P.z>=g&&y&&y.z<=A;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&co(o,u,f,h,c,d,P.x,P.y)&&Qt(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&co(o,u,f,h,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=g;){if(P.x>=p&&P.x<=E&&P.y>=m&&P.y<=v&&P!==a&&P!==s&&co(o,u,f,h,c,d,P.x,P.y)&&Qt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=A;){if(y.x>=p&&y.x<=E&&y.y>=m&&y.y<=v&&y!==a&&y!==s&&co(o,u,f,h,c,d,y.x,y.y)&&Qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lm(n,e){let t=n;do{const i=t.prev,a=t.next.next;!Nr(i,a)&&xh(i,t,t.next,a)&&wo(i,a)&&wo(a,i)&&(e.push(i.i,t.i,a.i),Ro(t),Ro(t.next),t=n=a),t=t.next}while(t!==n);return Ha(t)}function cm(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&vm(s,o)){let f=vh(s,o);s=Ha(s,s.next),f=Ha(f,f.next),To(s,e,t,i,a,r,0),To(f,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function fm(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,f=r<s-1?e[r+1]*i:n.length,c=mh(n,o,f,i,!1);c===c.next&&(c.steiner=!0),a.push(xm(c))}a.sort(um);for(let r=0;r<a.length;r++)t=dm(a[r],t);return t}function um(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function dm(n,e){const t=hm(n,e);if(!t)return e;const i=vh(t,n);return Ha(i,i.next),Ha(t,t.next)}function hm(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(Nr(n,t))return t;do{if(Nr(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,f=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=f&&i!==t.x&&gh(a<c?i:r,a,f,c,a<c?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);wo(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&pm(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function pm(n,e){return Qt(n.prev,n,e.prev)<0&&Qt(e.next,n,n.next)<0}function mm(n,e,t,i){let a=n;do a.z===0&&(a.z=Yc(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,gm(a)}function gm(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let f=t;for(;o>0||f>0&&s;)o!==0&&(f===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,f--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function Yc(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function xm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gh(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function co(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&gh(n,e,t,i,a,r,s,o)}function vm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Mm(n,e)&&(wo(n,e)&&wo(e,n)&&_m(n,e)&&(Qt(n.prev,n,e.prev)||Qt(n,e.prev,e))||Nr(n,e)&&Qt(n.prev,n,n.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Nr(n,e){return n.x===e.x&&n.y===e.y}function xh(n,e,t,i){const a=xs(Qt(n,e,t)),r=xs(Qt(n,e,i)),s=xs(Qt(t,i,n)),o=xs(Qt(t,i,e));return!!(a!==r&&s!==o||a===0&&gs(n,t,e)||r===0&&gs(n,i,e)||s===0&&gs(t,n,i)||o===0&&gs(t,e,i))}function gs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xs(n){return n>0?1:n<0?-1:0}function Mm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&xh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wo(n,e){return Qt(n.prev,n,n.next)<0?Qt(n,e,n.next)>=0&&Qt(n,n.prev,e)>=0:Qt(n,e,n.prev)<0||Qt(n,n.next,e)<0}function _m(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function vh(n,e){const t=$c(n.i,n.x,n.y),i=$c(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function wu(n,e,t,i){const a=$c(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Ro(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sm(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class ym{static triangulate(e,t,i=2){return rm(e,t,i)}}class Ar{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return Ar.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];Ru(e),Cu(i,e);let s=e.length;t.forEach(Ru);for(let f=0;f<t.length;f++)a.push(s),s+=t[f].length,Cu(i,t[f]);const o=ym.triangulate(i,a);for(let f=0;f<o.length;f+=3)r.push(o.slice(f,f+3));return r}}function Ru(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ks extends hn{constructor(e=new yf([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,f=e.length;o<f;o++){const c=e[o];s(c)}this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function s(o){const f=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:bm;let P,y=!1,S,T,I,_;if(g){P=g.getSpacedPoints(u),y=!0,d=!1;const fe=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,fe),T=new G,I=new G,_=new G}d||(v=0,p=0,m=0,E=0);const w=o.extractPoints(c);let L=w.shape;const U=w.holes;if(!Ar.isClockWise(L)){L=L.reverse();for(let fe=0,xe=U.length;fe<xe;fe++){const Te=U[fe];Ar.isClockWise(Te)&&(U[fe]=Te.reverse())}}function q(fe){const Te=10000000000000001e-36;let we=fe[0];for(let Se=1;Se<=fe.length;Se++){const R=Se%fe.length,K=fe[R],Re=K.x-we.x,Le=K.y-we.y,O=Re*Re+Le*Le,ot=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(we.x),Math.abs(we.y)),Xe=Te*ot*ot;if(O<=Xe){fe.splice(R,1),Se--;continue}we=K}}q(L),U.forEach(q);const B=U.length,J=L;for(let fe=0;fe<B;fe++){const xe=U[fe];L=L.concat(xe)}function re(fe,xe,Te){return xe||It("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(xe,Te)}const W=L.length;function ge(fe,xe,Te){let we,Se,R;const K=fe.x-xe.x,Re=fe.y-xe.y,Le=Te.x-fe.x,O=Te.y-fe.y,ot=K*K+Re*Re,Xe=K*O-Re*Le;if(Math.abs(Xe)>Number.EPSILON){const D=Math.sqrt(ot),b=Math.sqrt(Le*Le+O*O),Y=xe.x-Re/D,Z=xe.y+K/D,le=Te.x-O/b,Me=Te.y+Le/b,Ae=((le-Y)*O-(Me-Z)*Le)/(K*O-Re*Le);we=Y+K*Ae-fe.x,Se=Z+Re*Ae-fe.y;const ne=we*we+Se*Se;if(ne<=2)return new Ne(we,Se);R=Math.sqrt(ne/2)}else{let D=!1;K>Number.EPSILON?Le>Number.EPSILON&&(D=!0):K<-Number.EPSILON?Le<-Number.EPSILON&&(D=!0):Math.sign(Re)===Math.sign(O)&&(D=!0),D?(we=-Re,Se=K,R=Math.sqrt(ot)):(we=K,Se=Re,R=Math.sqrt(ot/2))}return new Ne(we/R,Se/R)}const se=[];for(let fe=0,xe=J.length,Te=xe-1,we=fe+1;fe<xe;fe++,Te++,we++)Te===xe&&(Te=0),we===xe&&(we=0),se[fe]=ge(J[fe],J[Te],J[we]);const ae=[];let de,tt=se.concat();for(let fe=0,xe=B;fe<xe;fe++){const Te=U[fe];de=[];for(let we=0,Se=Te.length,R=Se-1,K=we+1;we<Se;we++,R++,K++)R===Se&&(R=0),K===Se&&(K=0),de[we]=ge(Te[we],Te[R],Te[K]);ae.push(de),tt=tt.concat(de)}let He;if(v===0)He=Ar.triangulateShape(J,U);else{const fe=[],xe=[];for(let Te=0;Te<v;Te++){const we=Te/v,Se=p*Math.cos(we*Math.PI/2),R=m*Math.sin(we*Math.PI/2)+E;for(let K=0,Re=J.length;K<Re;K++){const Le=re(J[K],se[K],R);Pe(Le.x,Le.y,-Se),we===0&&fe.push(Le)}for(let K=0,Re=B;K<Re;K++){const Le=U[K];de=ae[K];const O=[];for(let ot=0,Xe=Le.length;ot<Xe;ot++){const D=re(Le[ot],de[ot],R);Pe(D.x,D.y,-Se),we===0&&O.push(D)}we===0&&xe.push(O)}}He=Ar.triangulateShape(fe,xe)}const vt=He.length,ut=m+E;for(let fe=0;fe<W;fe++){const xe=d?re(L[fe],tt[fe],ut):L[fe];y?(I.copy(S.normals[0]).multiplyScalar(xe.x),T.copy(S.binormals[0]).multiplyScalar(xe.y),_.copy(P[0]).add(I).add(T),Pe(_.x,_.y,_.z)):Pe(xe.x,xe.y,0)}for(let fe=1;fe<=u;fe++)for(let xe=0;xe<W;xe++){const Te=d?re(L[xe],tt[xe],ut):L[xe];y?(I.copy(S.normals[fe]).multiplyScalar(Te.x),T.copy(S.binormals[fe]).multiplyScalar(Te.y),_.copy(P[fe]).add(I).add(T),Pe(_.x,_.y,_.z)):Pe(Te.x,Te.y,h/u*fe)}for(let fe=v-1;fe>=0;fe--){const xe=fe/v,Te=p*Math.cos(xe*Math.PI/2),we=m*Math.sin(xe*Math.PI/2)+E;for(let Se=0,R=J.length;Se<R;Se++){const K=re(J[Se],se[Se],we);Pe(K.x,K.y,h+Te)}for(let Se=0,R=U.length;Se<R;Se++){const K=U[Se];de=ae[Se];for(let Re=0,Le=K.length;Re<Le;Re++){const O=re(K[Re],de[Re],we);y?Pe(O.x,O.y+P[u-1].y,P[u-1].x+Te):Pe(O.x,O.y,h+Te)}}}pt(),ce();function pt(){const fe=a.length/3;if(d){let xe=0,Te=W*xe;for(let we=0;we<vt;we++){const Se=He[we];st(Se[2]+Te,Se[1]+Te,Se[0]+Te)}xe=u+v*2,Te=W*xe;for(let we=0;we<vt;we++){const Se=He[we];st(Se[0]+Te,Se[1]+Te,Se[2]+Te)}}else{for(let xe=0;xe<vt;xe++){const Te=He[xe];st(Te[2],Te[1],Te[0])}for(let xe=0;xe<vt;xe++){const Te=He[xe];st(Te[0]+W*u,Te[1]+W*u,Te[2]+W*u)}}i.addGroup(fe,a.length/3-fe,0)}function ce(){const fe=a.length/3;let xe=0;he(J,xe),xe+=J.length;for(let Te=0,we=U.length;Te<we;Te++){const Se=U[Te];he(Se,xe),xe+=Se.length}i.addGroup(fe,a.length/3-fe,1)}function he(fe,xe){let Te=fe.length;for(;--Te>=0;){const we=Te;let Se=Te-1;Se<0&&(Se=fe.length-1);for(let R=0,K=u+v*2;R<K;R++){const Re=W*R,Le=W*(R+1),O=xe+we+Re,ot=xe+Se+Re,Xe=xe+Se+Le,D=xe+we+Le;Ye(O,ot,Xe,D)}}}function Pe(fe,xe,Te){f.push(fe),f.push(xe),f.push(Te)}function st(fe,xe,Te){Ie(fe),Ie(xe),Ie(Te);const we=a.length/3,Se=A.generateTopUV(i,a,we-3,we-2,we-1);ct(Se[0]),ct(Se[1]),ct(Se[2])}function Ye(fe,xe,Te,we){Ie(fe),Ie(xe),Ie(we),Ie(xe),Ie(Te),Ie(we);const Se=a.length/3,R=A.generateSideWallUV(i,a,Se-6,Se-3,Se-2,Se-1);ct(R[0]),ct(R[1]),ct(R[3]),ct(R[1]),ct(R[2]),ct(R[3])}function Ie(fe){a.push(f[fe*3+0]),a.push(f[fe*3+1]),a.push(f[fe*3+2])}function ct(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Em(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new qc[a.type]().fromJSON(a)),new ks(i,e.options)}}const bm={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],f=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new Ne(r,s),new Ne(o,f),new Ne(c,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],f=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],E=e[r*3],v=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new Ne(s,1-f),new Ne(c,1-h),new Ne(d,1-m),new Ne(E,1-g)]:[new Ne(o,1-f),new Ne(u,1-h),new Ne(p,1-m),new Ne(v,1-g)]}};function Em(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tl extends el{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tl(e.radius,e.detail)}}class $i extends hn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),f=Math.floor(a),c=o+1,u=f+1,h=e/o,d=t/f,p=[],m=[],E=[],v=[];for(let g=0;g<u;g++){const A=g*d-s;for(let P=0;P<c;P++){const y=P*h-r;m.push(y,-A,0),E.push(0,0,1),v.push(P/o),v.push(1-g/f)}}for(let g=0;g<f;g++)for(let A=0;A<o;A++){const P=A+c*g,y=A+c*(g+1),S=A+1+c*(g+1),T=A+1+c*g;p.push(P,y,T),p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}class kn extends hn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(s+o,Math.PI);let c=0;const u=[],h=new G,d=new G,p=[],m=[],E=[],v=[];for(let g=0;g<=i;g++){const A=[],P=g/i,y=s+P*o,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S);let I=0;g===0&&s===0?I=.5/t:g===i&&f===Math.PI&&(I=-.5/t);for(let _=0;_<=t;_++){const w=_/t,L=a+w*r;h.x=-T*Math.cos(L),h.y=S,h.z=T*Math.sin(L),m.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),v.push(w+I,1-P),A.push(c++)}u.push(A)}for(let g=0;g<i;g++)for(let A=0;A<t;A++){const P=u[g][A+1],y=u[g][A],S=u[g+1][A],T=u[g+1][A+1];(g!==0||s>0)&&p.push(P,y,T),(g!==i-1||f<Math.PI)&&p.push(y,S,T)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(E,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pr extends hn{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const f=[],c=[],u=[],h=[],d=new G,p=new G,m=new G;for(let E=0;E<=i;E++){const v=s+E/i*o;for(let g=0;g<=a;g++){const A=g/a*r;p.x=(e+t*Math.cos(v))*Math.cos(A),p.y=(e+t*Math.cos(v))*Math.sin(A),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),d.x=e*Math.cos(A),d.y=e*Math.sin(A),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(g/a),h.push(E/i)}}for(let E=1;E<=i;E++)for(let v=1;v<=a;v++){const g=(a+1)*E+v-1,A=(a+1)*(E-1)+v-1,P=(a+1)*(E-1)+v,y=(a+1)*E+v;f.push(g,A,y),f.push(A,P,y)}this.setIndex(f),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(Pu(a))a.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Pu(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=Ur(n[t]);for(const a in i)e[a]=i[a]}return e}function Pu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Tm={clone:Ur,merge:Tn};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ne().fromArray(a.value);break;case"v3":this.uniforms[i].value=new G().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Kt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Xt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cm extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hi extends qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Im extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Iu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Iu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Iu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Lm{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,f;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dm=new Lm;class bf{constructor(e){this.manager=e!==void 0?e:Dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bf.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr=new WeakMap;class Nm extends bf{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=kl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=hr.get(s);h===void 0&&(h=[],hr.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=bo("img");function f(){u(),t&&t(this);const h=hr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function c(h){u(),a&&a(h),kl.remove(`image:${e}`);const d=hr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",f,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Um extends bf{constructor(e){super(e)}load(e,t,i,a){const r=new un,s=new Nm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class _h extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Om extends _h{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hl=new Xt,Lu=new G,Du=new G;class Fm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,f=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===yo||e.reversedDepth?t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vs=new G,Ms=new fi,xi=new G;class Sh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vs,Ms,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ms,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(vs,Ms,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ms,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ia=new G,Nu=new Ne,Uu=new Ne;class $n extends Sh{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ia.x,ia.y).multiplyScalar(-e/ia.z),ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ia.x,ia.y).multiplyScalar(-e/ia.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Uu),t.subVectors(Uu,Nu)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/f,t-=s.offsetY*i/c,a*=s.width/f,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nl extends Sh{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,f=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bm extends Fm{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zm extends _h{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Bm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const pr=-90,mr=1;class Gm extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(pr,mr,e,t);a.layers=this.layers,this.add(a);const r=new $n(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new $n(pr,mr,e,t);s.layers=this.layers,this.add(s);const o=new $n(pr,mr,e,t);o.layers=this.layers,this.add(o);const f=new $n(pr,mr,e,t);f.layers=this.layers,this.add(f);const c=new $n(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,f]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,f,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Vm extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kf=class kf{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};kf.prototype.isMatrix2=!0;let Ou=kf;function Fu(n,e,t,i){const a=km(i);switch(t){case Yd:return n*e;case Jd:return n*e/a.components*a.byteLength;case ff:return n*e/a.components*a.byteLength;case ka:return n*e*2/a.components*a.byteLength;case uf:return n*e*2/a.components*a.byteLength;case $d:return n*e*3/a.components*a.byteLength;case Kn:return n*e*4/a.components*a.byteLength;case df:return n*e*4/a.components*a.byteLength;case Rs:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:case xc:return Math.max(n,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(e,8)/2;case vc:case Mc:case Sc:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _c:case Os:case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bc:case zc:case Gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vc:case kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fs:case Hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function km(n){switch(n){case wn:case Hd:return{byteLength:1,components:1};case _o:case Wd:case Ri:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case wi:case sf:case bi:return{byteLength:4,components:1};case Xd:case qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);function yh(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hm(n){const e=new WeakMap;function t(o,f){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,f,c){const u=f.array,h=f.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],E=h[p];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const E=h[p];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(n.deleteBuffer(f.buffer),e.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,f));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,f),c.version=o.version}}return{get:a,remove:r,update:s}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hg=`#define PI 3.141592653589793
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
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
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Og=`#ifdef USE_ENVMAP
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#endif`,kg=`uniform sampler2D dfgLUT;
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
}`,Hg=`
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
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
#endif`,ox=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cx=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Kx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
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
}`,i1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,l1=`#define MATCAP
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
}`,c1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,d1=`#define PHONG
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
}`,h1=`#define PHONG
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
}`,p1=`#define STANDARD
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
}`,m1=`#define STANDARD
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
}`,g1=`#define TOON
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
}`,x1=`#define TOON
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
}`,v1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,S1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:Zm,aomap_pars_fragment:Km,batching_pars_vertex:Qm,batching_vertex:jm,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:ag,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:sg,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:fg,color_pars_vertex:ug,color_vertex:dg,common:hg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:_g,colorspace_pars_fragment:Sg,envmap_fragment:yg,envmap_common_pars_fragment:bg,envmap_pars_fragment:Eg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:Tg,fog_vertex:wg,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Ug,lights_toon_fragment:Fg,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:kg,lights_fragment_begin:Hg,lights_fragment_maps:Wg,lights_fragment_end:Xg,lightprobes_pars_fragment:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:Zg,map_fragment:Kg,map_pars_fragment:Qg,map_particle_fragment:jg,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:ax,morphnormal_vertex:rx,morphtarget_pars_vertex:ox,morphtarget_vertex:sx,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:fx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:xx,opaque_fragment:vx,packing:Mx,premultiplied_alpha_fragment:_x,project_vertex:Sx,dithering_fragment:yx,dithering_pars_fragment:bx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:wx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:Ox,tonemapping_pars_fragment:Fx,transmission_fragment:Bx,transmission_pars_fragment:zx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:kx,worldpos_vertex:Hx,background_vert:Wx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Yx,cube_vert:$x,cube_frag:Jx,depth_vert:Zx,depth_frag:Kx,distance_vert:Qx,distance_frag:jx,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:a1,meshbasic_frag:r1,meshlambert_vert:o1,meshlambert_frag:s1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:f1,meshnormal_frag:u1,meshphong_vert:d1,meshphong_frag:h1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:x1,points_vert:v1,points_frag:M1,shadow_vert:_1,shadow_frag:S1,sprite_vert:y1,sprite_frag:b1},Ze={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Tn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Tn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Tn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Tn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new gt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Tn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Tn([Ze.points,Ze.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Tn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Tn([Ze.common,Ze.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Tn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Tn([Ze.sprite,Ze.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Tn([Ze.common,Ze.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Tn([Ze.lights,Ze.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const _s={r:0,b:0,g:0},E1=new Xt,bh=new _t;bh.set(-1,0,0,0,1,0,0,0,1);function A1(n,e,t,i,a,r){const s=new gt(0);let o=a===!0?0:1,f,c,u=null,h=0,d=null;function p(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function m(A){let P=!1;const y=p(A);y===null?v(s,o):y&&y.isColor&&(v(y,1),P=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(A,P){const y=p(P);y&&(y.isCubeTexture||y.mapping===Qs)?(c===void 0&&(c=new Et(new Sa(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ur(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bh),c.material.toneMapped=Pt.getTransfer(y.colorSpace)!==zt,(u!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new Et(new $i(2,2),new di({name:"BackgroundMaterial",uniforms:Ur(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Pt.getTransfer(y.colorSpace)!==zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=n.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function v(A,P){A.getRGB(_s,Mh(n)),t.buffers.color.setClear(_s.r,_s.g,_s.b,P,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,P=1){s.set(A),o=P,v(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,v(s,o)},render:m,addToRenderList:E,dispose:g}}function T1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(U,V,q,B,J){let re=!1;const W=h(U,B,q,V);r!==W&&(r=W,c(r.object)),re=p(U,B,q,J),re&&m(U,B,q,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,y(U,V,q,B),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,V,q,B){const J=B.wireframe===!0;let re=i[V.id];re===void 0&&(re={},i[V.id]=re);const W=U.isInstancedMesh===!0?U.id:0;let ge=re[W];ge===void 0&&(ge={},re[W]=ge);let se=ge[q.id];se===void 0&&(se={},ge[q.id]=se);let ae=se[J];return ae===void 0&&(ae=d(f()),se[J]=ae),ae}function d(U){const V=[],q=[],B=[];for(let J=0;J<t;J++)V[J]=0,q[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:B,object:U,attributes:{},index:null}}function p(U,V,q,B){const J=r.attributes,re=V.attributes;let W=0;const ge=q.getAttributes();for(const se in ge)if(ge[se].location>=0){const de=J[se];let tt=re[se];if(tt===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),de===void 0||de.attribute!==tt||tt&&de.data!==tt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function m(U,V,q,B){const J={},re=V.attributes;let W=0;const ge=q.getAttributes();for(const se in ge)if(ge[se].location>=0){let de=re[se];de===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(de=U.instanceColor));const tt={};tt.attribute=de,de&&de.data&&(tt.data=de.data),J[se]=tt,W++}r.attributes=J,r.attributesNum=W,r.index=B}function E(){const U=r.newAttributes;for(let V=0,q=U.length;V<q;V++)U[V]=0}function v(U){g(U,0)}function g(U,V){const q=r.newAttributes,B=r.enabledAttributes,J=r.attributeDivisors;q[U]=1,B[U]===0&&(n.enableVertexAttribArray(U),B[U]=1),J[U]!==V&&(n.vertexAttribDivisor(U,V),J[U]=V)}function A(){const U=r.newAttributes,V=r.enabledAttributes;for(let q=0,B=V.length;q<B;q++)V[q]!==U[q]&&(n.disableVertexAttribArray(q),V[q]=0)}function P(U,V,q,B,J,re,W){W===!0?n.vertexAttribIPointer(U,V,q,J,re):n.vertexAttribPointer(U,V,q,B,J,re)}function y(U,V,q,B){E();const J=B.attributes,re=q.getAttributes(),W=V.defaultAttributeValues;for(const ge in re){const se=re[ge];if(se.location>=0){let ae=J[ge];if(ae===void 0&&(ge==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),ge==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),ae!==void 0){const de=ae.normalized,tt=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const vt=He.buffer,ut=He.type,pt=He.bytesPerElement,ce=ut===n.INT||ut===n.UNSIGNED_INT||ae.gpuType===sf;if(ae.isInterleavedBufferAttribute){const he=ae.data,Pe=he.stride,st=ae.offset;if(he.isInstancedInterleavedBuffer){for(let Ye=0;Ye<se.locationSize;Ye++)g(se.location+Ye,he.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ye=0;Ye<se.locationSize;Ye++)v(se.location+Ye);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Ye=0;Ye<se.locationSize;Ye++)P(se.location+Ye,tt/se.locationSize,ut,de,Pe*pt,(st+tt/se.locationSize*Ye)*pt,ce)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<se.locationSize;he++)g(se.location+he,ae.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<se.locationSize;he++)v(se.location+he);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let he=0;he<se.locationSize;he++)P(se.location+he,tt/se.locationSize,ut,de,tt*pt,tt/se.locationSize*he*pt,ce)}}else if(W!==void 0){const de=W[ge];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(se.location,de);break;case 3:n.vertexAttrib3fv(se.location,de);break;case 4:n.vertexAttrib4fv(se.location,de);break;default:n.vertexAttrib1fv(se.location,de)}}}}A()}function S(){w();for(const U in i){const V=i[U];for(const q in V){const B=V[q];for(const J in B){const re=B[J];for(const W in re)u(re[W].object),delete re[W];delete B[J]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const q in V){const B=V[q];for(const J in B){const re=B[J];for(const W in re)u(re[W].object),delete re[W];delete B[J]}}delete i[U.id]}function I(U){for(const V in i){const q=i[V];for(const B in q){const J=q[B];if(J[U.id]===void 0)continue;const re=J[U.id];for(const W in re)u(re[W].object),delete re[W];delete J[U.id]}}}function _(U){for(const V in i){const q=i[V],B=U.isInstancedMesh===!0?U.id:0,J=q[B];if(J!==void 0){for(const re in J){const W=J[re];for(const ge in W)u(W[ge].object),delete W[ge];delete J[re]}delete q[B],Object.keys(q).length===0&&delete i[V]}}}function w(){L(),s=!0,r!==a&&(r=a,c(r.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:v,disableUnusedAttributes:A}}function w1(n,e,t){let i;function a(f){i=f}function r(f,c){n.drawArrays(i,f,c),t.update(c,i,1)}function s(f,c,u){u!==0&&(n.drawArraysInstanced(i,f,c,u),t.update(c,i,u))}function o(f,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function R1(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(I){return!(I!==Kn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const _=I===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==wn&&I!==bi&&!_&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=f(c);u!==c&&(ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:S,samples:T}}function C1(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new ua,o=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,E=h.clipIntersection,v=h.clipShadows,g=n.get(h);if(!a||m===null||m.length===0||r&&!v)r?u(null):c();else{const A=r?0:i,P=A*4;let y=g.clippingState||null;f.value=y,y=u(m,d,P,p);for(let S=0;S!==P;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const E=h!==null?h.length:0;let v=null;if(E!==0){if(v=f.value,m!==!0||v===null){const g=p+E*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,y=p;P!==E;++P,y+=4)s.copy(h[P]).applyMatrix4(A,o),s.normal.toArray(v,y),v[y+3]=s.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}const Tr=4,P1=6,I1=20,L1=256,to=new nl,Bu=new gt;let Wl=null,Xl=0,ql=0,Yl=!1;const D1=new G,Ia=new G;class zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=D1}=r;Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),this._renderer.xr.enabled=Yl,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ri,format:Kn,colorSpace:Bs,depthBuffer:!1},a=Gu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N1(r)),this._blurMaterial=O1(r,e,t),this._ggxMaterial=U1(r,e,t)}return a}_compileMaterial(e){const t=new Et(new hn,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,i,a,r){const f=new $n(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Bu),h.toneMapping=Ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Sa,new Yi({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let g=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,g=!0):(v.color.copy(Bu),g=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[P],r.y,r.z)):y===1?(f.up.set(0,0,c[P]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[P],r.z)):(f.up.set(0,c[P],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[P]));const S=this._cubeSize;gr(a,y*S,P>2?S:0,S,S),h.setRenderTarget(a),g&&h.render(E,f),h.render(e,f)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Va||e.mapping===Lr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const f=this._cubeSize;gr(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,to)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const f=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,E=this._sizeLods[i],v=3*E*(i>m-Tr?i-m+Tr:0),g=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=p,f.mipInt.value=m-t,gr(r,v,g,3*E,2*E),a.setRenderTarget(r),a.render(o,to),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-i,gr(e,v,g,3*E,2*E),a.setRenderTarget(e),a.render(o,to)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,f=this._lodMeshes[a];f.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-Tr?a-this._lodMax+Tr:0),d=4*(this._cubeSize-u);gr(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(f,to)}}function N1(n){const e=[],t=[];let i=n;const a=n-Tr+1+P1;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),f=-o,c=1+o,u=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),E=new Float32Array(p*d*h);for(let g=0;g<h;g++){const A=g%3*2/3-1,P=g>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(y,p*d*g);for(let S=0;S<d;S++){const T=u[S*2]*2-1,I=u[S*2+1]*2-1;g===0?Ia.set(1,I,T):g===1?Ia.set(-T,1,-I):g===2?Ia.set(-T,I,1):g===3?Ia.set(-1,I,-T):g===4?Ia.set(-T,-1,I):Ia.set(T,I,-1),Ia.toArray(E,(g*d+S)*p)}}const v=new hn;v.setAttribute("position",new ui(m,p)),v.setAttribute("outputDirection",new ui(E,p)),t.push(new Et(v,null)),i>Tr&&i--}return{lodMeshes:t,sizeLods:e}}function Gu(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gr(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function U1(n,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function O1(n,e,t){return new di({name:"SphericalGaussianBlur",defines:{SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Vu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ku(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eh extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new ch(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Sa(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Hi});r.uniforms.tEquirect.value=t;const s=new Et(a,r),o=t.minFilter;return t.minFilter===Oa&&(t.minFilter=fn),new Gm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function F1(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===pl||p===ml)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const E=new Eh(m.height);return E.fromEquirectangularTexture(n,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===pl||p===ml,E=p===Va||p===Lr;if(m||E){let v=t.get(d);const g=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new zu(n)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const A=d.image;return m&&A&&A.height>0||E&&A&&f(A)?(i===null&&(i=new zu(n)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function o(d,p){return p===pl?d.mapping=Va:p===ml&&(d.mapping=Lr),d}function f(d){let p=0;const m=6;for(let E=0;E<m;E++)d[E]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function B1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Rr("WebGLRenderer: "+i+" extension not supported."),a}}}function z1(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function f(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let E=0;if(m===void 0)return;if(p!==null){const A=p.array;E=p.version;for(let P=0,y=A.length;P<y;P+=3){const S=A[P+0],T=A[P+1],I=A[P+2];d.push(S,T,T,I,I,S)}}else{const A=m.array;E=m.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const S=P+0,T=P+1,I=P+2;d.push(S,T,T,I,I,S)}}const v=new(m.count>=65535?ih:nh)(d,1);v.version=E;const g=r.get(h);g&&e.remove(g),r.set(h,v)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:f,getWireframeAttribute:u}}function G1(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function f(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let E=0;for(let v=0;v<p;v++)E+=d[v];t.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=f,this.renderInstances=c,this.renderMultiDraw=u}function V1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function k1(n,e,t){const i=new WeakMap,a=new Kt;function r(s,o,f){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),E===!0&&(y=2),v===!0&&(y=3);let S=o.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*T*4*h),_=new Qd(I,S,T,h);_.type=bi,_.needsUpdate=!0;const w=y*4;for(let U=0;U<h;U++){const V=g[U],q=A[U],B=P[U],J=S*T*4*U;for(let re=0;re<V.count;re++){const W=re*w;m===!0&&(a.fromBufferAttribute(V,re),I[J+W+0]=a.x,I[J+W+1]=a.y,I[J+W+2]=a.z,I[J+W+3]=0),E===!0&&(a.fromBufferAttribute(q,re),I[J+W+4]=a.x,I[J+W+5]=a.y,I[J+W+6]=a.z,I[J+W+7]=0),v===!0&&(a.fromBufferAttribute(B,re),I[J+W+8]=a.x,I[J+W+9]=a.y,I[J+W+10]=a.z,I[J+W+11]=B.itemSize===4?a.w:1)}}d={count:h,texture:_,size:new Ne(S,T)},i.set(o,d),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const E=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",c)}f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function H1(n,e,t,i,a){let r=new WeakMap;function s(c){const u=a.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",f)===!1&&c.addEventListener("dispose",f),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function f(c){const u=c.target;u.removeEventListener("dispose",f),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const W1={[Ud]:"LINEAR_TONE_MAPPING",[Od]:"REINHARD_TONE_MAPPING",[Fd]:"CINEON_TONE_MAPPING",[Bd]:"ACES_FILMIC_TONE_MAPPING",[Gd]:"AGX_TONE_MAPPING",[Vd]:"NEUTRAL_TONE_MAPPING",[zd]:"CUSTOM_TONE_MAPPING"};function X1(n,e,t,i,a,r){const s=new Qn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,f=null;const c=new hn;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const u=new Cm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Et(c,u),d=new nl(-1,1,1,-1,0,1);let p=null,m=null,E=!1,v,g=null,A=[],P=!1;this.setSize=function(y,S){s.setSize(y,S),o!==null&&o.setSize(y,S),f!==null&&f.setSize(y,S);for(let T=0;T<A.length;T++){const I=A[T];I.setSize&&I.setSize(y,S)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const S=s.width,T=s.height;A.length>0&&o===null&&(o=new Qn(S,T,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),f=new Qn(S,T,{type:Ri,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<A.length;I++){const _=A[I];_.setSize&&_.setSize(S,T)}},this.begin=function(y,S){if(E||y.toneMapping===Ai&&A.length===0)return!1;if(g=S,S!==null){const T=S.width,I=S.height;(s.width!==T||s.height!==I)&&this.setSize(T,I)}return P===!1&&y.setRenderTarget(s),v=y.toneMapping,y.toneMapping=Ai,!0},this.hasRenderPass=function(){return P},this.end=function(y,S){y.toneMapping=v,E=!0;let T=s,I=o;for(let _=0;_<A.length;_++){const w=A[_];w.enabled!==!1&&(w.render(y,I,T,S),w.needsSwap!==!1&&(T=I,I=I===o?f:o))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,u.defines={},Pt.getTransfer(p)===zt&&(u.defines.SRGB_TRANSFER="");const _=W1[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(h,d),g=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),f!==null&&f.dispose(),c.dispose(),u.dispose()}}const Ah=new un,Jc=new Dr(1,1),Th=new Qd,wh=new w0,Rh=new ch,Hu=[],Wu=[],Xu=new Float32Array(16),qu=new Float32Array(9),Yu=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=Hu[a];if(r===void 0&&(r=new Float32Array(a),Hu[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function q1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function $1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function Z1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;Yu.set(i),n.uniformMatrix2fv(this.addr,!1,Yu),rn(t,i)}}function K1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;qu.set(i),n.uniformMatrix3fv(this.addr,!1,qu),rn(t,i)}}function Q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;Xu.set(i),n.uniformMatrix4fv(this.addr,!1,Xu),rn(t,i)}}function j1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function iv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function sv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?pf:hf,r=Jc):r=Ah,t.setTexture2D(e||r,a)}function lv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||wh,a)}function cv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Rh,a)}function fv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Th,a)}function uv(n){switch(n){case 5126:return q1;case 35664:return Y1;case 35665:return $1;case 35666:return J1;case 35674:return Z1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return j1;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return av;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return fv}}function dv(n,e){n.uniform1fv(this.addr,e)}function hv(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function pv(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function mv(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function gv(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xv(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vv(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Mv(n,e){n.uniform1iv(this.addr,e)}function _v(n,e){n.uniform2iv(this.addr,e)}function Sv(n,e){n.uniform3iv(this.addr,e)}function yv(n,e){n.uniform4iv(this.addr,e)}function bv(n,e){n.uniform1uiv(this.addr,e)}function Ev(n,e){n.uniform2uiv(this.addr,e)}function Av(n,e){n.uniform3uiv(this.addr,e)}function Tv(n,e){n.uniform4uiv(this.addr,e)}function wv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Jc:s=Ah;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function Rv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||wh,r[s])}function Cv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Rh,r[s])}function Pv(n,e,t){const i=this.cache,a=e.length,r=al(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Th,r[s])}function Iv(n){switch(n){case 5126:return dv;case 35664:return hv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return _v;case 35668:case 35672:return Sv;case 35669:case 35673:return yv;case 5125:return bv;case 36294:return Ev;case 36295:return Av;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Lv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uv(t.type)}}class Dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iv(t.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function $u(n,e){n.seq.push(e),n.map[e.id]=e}function Uv(n,e,t){const i=n.name,a=i.length;for($l.lastIndex=0;;){const r=$l.exec(i),s=$l.lastIndex;let o=r[1];const f=r[2]==="]",c=r[3];if(f&&(o=o|0),c===void 0||c==="["&&s+2===a){$u(t,c===void 0?new Lv(o,n,e):new Dv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Nv(o),$u(t,h)),t=h}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);Uv(o,f,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function Ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ov=37297;let Fv=0;function Bv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Zu=new _t;function zv(n){Pt._getMatrix(Zu,Pt.workingColorSpace,n);const e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(n)){case zs:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bv(n.getShaderSource(e),o)}else return r}function Gv(n,e){const t=zv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Vv={[Ud]:"Linear",[Od]:"Reinhard",[Fd]:"Cineon",[Bd]:"ACESFilmic",[Gd]:"AgX",[Vd]:"Neutral",[zd]:"Custom"};function kv(n,e){const t=Vv[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new G;function Hv(){Pt.getLuminanceCoefficients(Ss);const n=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function Xv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function fo(n){return n!==""}function Qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(n){return n.replace(Yv,Jv)}const $v=new Map;function Jv(n,e){let t=At[e];if(t===void 0){const i=$v.get(e);if(i!==void 0)t=At[i],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zc(t)}const Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(n){return n.replace(Zv,Kv)}function Kv(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Qv={[uo]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function jv(n){return Qv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eM={[Va]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function tM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const nM={[Lr]:"ENVMAP_MODE_REFRACTION"};function iM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aM={[Nd]:"ENVMAP_BLENDING_MULTIPLY",[Hp]:"ENVMAP_BLENDING_MIX",[Wp]:"ENVMAP_BLENDING_ADD"};function rM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":aM[n.combine]||"ENVMAP_BLENDING_NONE"}function oM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sM(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=jv(t),c=tM(t),u=iM(t),h=rM(t),d=oM(t),p=Wv(t),m=Xv(r),E=a.createProgram();let v,g,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fo).join(`
`),g.length>0&&(g+=`
`)):(v=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),g=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?At.tonemapping_pars_fragment:"",t.toneMapping!==Ai?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,Gv("linearToOutputTexel",t.outputColorSpace),Hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),s=Zc(s),s=Qu(s,t),s=ju(s,t),o=Zc(o),o=Qu(o,t),o=ju(o,t),s=ed(s),o=ed(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=A+v+s,y=A+g+o,S=Ju(a,a.VERTEX_SHADER,P),T=Ju(a,a.FRAGMENT_SHADER,y);a.attachShader(E,S),a.attachShader(E,T),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function I(U){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(E)||"",q=a.getShaderInfoLog(S)||"",B=a.getShaderInfoLog(T)||"",J=V.trim(),re=q.trim(),W=B.trim();let ge=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ge=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,E,S,T);else{const ae=Ku(a,S,"vertex"),de=Ku(a,T,"fragment");It("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+J+`
`+ae+`
`+de)}else J!==""?ht("WebGLProgram: Program Info Log:",J):(re===""||W==="")&&(se=!1);se&&(U.diagnostics={runnable:ge,programLog:J,vertexShader:{log:re,prefix:v},fragmentShader:{log:W,prefix:g}})}a.deleteShader(S),a.deleteShader(T),_=new Ls(a,E),w=qv(a,E)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(E,Ov)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=S,this.fragmentShader=T,this}let lM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fM(e),t.set(e,i)),i}}class fM{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}}function uM(n){return n===ka||n===Os||n===Fs}function dM(n,e,t,i,a,r){const s=new jd,o=new cM,f=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return f.add(_),_===0?"uv":`uv${_}`}function E(_,w,L,U,V,q){const B=U.fog,J=V.geometry,re=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ge=e.get(_.envMap||re,W),se=ge&&ge.mapping===Qs?ge.image.height:null,ae=p[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&ht("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const de=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tt=de!==void 0?de.length:0;let He=0;J.morphAttributes.position!==void 0&&(He=1),J.morphAttributes.normal!==void 0&&(He=2),J.morphAttributes.color!==void 0&&(He=3);let vt,ut,pt,ce;if(ae){const Nt=_i[ae];vt=Nt.vertexShader,ut=Nt.fragmentShader}else{vt=_.vertexShader,ut=_.fragmentShader;const Nt=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Nt,bt),pt=Nt.id,ce=bt.id}const he=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),st=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,Ie=!!_.map,ct=!!_.matcap,fe=!!ge,xe=!!_.aoMap,Te=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,R=!!_.displacementMap,K=!!_.emissiveMap,Re=!!_.metalnessMap,Le=!!_.roughnessMap,O=_.anisotropy>0,ot=_.clearcoat>0,Xe=_.dispersion>0,D=_.retroreflectivity>0,b=_.iridescence>0,Y=_.sheen>0,Z=_.transmission>0,le=O&&!!_.anisotropyMap,Me=ot&&!!_.clearcoatMap,Ae=ot&&!!_.clearcoatNormalMap,ne=ot&&!!_.clearcoatRoughnessMap,pe=b&&!!_.iridescenceMap,Ve=b&&!!_.iridescenceThicknessMap,je=Y&&!!_.sheenColorMap,De=Y&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,qe=!!_.specularColorMap,it=!!_.specularIntensityMap,Ge=Z&&!!_.transmissionMap,X=Z&&!!_.thicknessMap,Be=!!_.gradientMap,me=!!_.alphaMap,l=_.alphaTest>0,Ue=!!_.alphaHash,ue=!!_.extensions;let ft=Ai;_.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Qe={shaderID:ae,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:ut,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:st,instancingColor:st&&V.instanceColor!==null,instancingMorph:st&&V.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:ct,envMap:fe,envMapMode:fe&&ge.mapping,envMapCubeUVHeight:se,aoMap:xe,lightMap:Te,bumpMap:we,normalMap:Se,displacementMap:R,emissiveMap:K,normalMapObjectSpace:Se&&_.normalMapType===Yp,normalMapTangentSpace:Se&&_.normalMapType===Wc,packedNormalMap:Se&&_.normalMapType===Wc&&uM(_.normalMap.format),metalnessMap:Re,roughnessMap:Le,anisotropy:O,anisotropyMap:le,clearcoat:ot,clearcoatMap:Me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ne,dispersion:Xe,retroreflection:D,iridescence:b,iridescenceMap:pe,iridescenceThicknessMap:Ve,sheen:Y,sheenColorMap:je,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:qe,specularIntensityMap:it,transmission:Z,transmissionMap:Ge,thicknessMap:X,gradientMap:Be,opaque:_.transparent===!1&&_.blending===ho&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:l,alphaHash:Ue,combine:_.combine,mapUv:Ie&&m(_.map.channel),aoMapUv:xe&&m(_.aoMap.channel),lightMapUv:Te&&m(_.lightMap.channel),bumpMapUv:we&&m(_.bumpMap.channel),normalMapUv:Se&&m(_.normalMap.channel),displacementMapUv:R&&m(_.displacementMap.channel),emissiveMapUv:K&&m(_.emissiveMap.channel),metalnessMapUv:Re&&m(_.metalnessMap.channel),roughnessMapUv:Le&&m(_.roughnessMap.channel),anisotropyMapUv:le&&m(_.anisotropyMap.channel),clearcoatMapUv:Me&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:je&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(_.sheenRoughnessMap.channel),specularMapUv:Oe&&m(_.specularMap.channel),specularColorMapUv:qe&&m(_.specularColorMap.channel),specularIntensityMapUv:it&&m(_.specularIntensityMap.channel),transmissionMapUv:Ge&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:me&&m(_.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Se||O),vertexNormals:!!J.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(Ie||me),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||J.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Pe,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:He,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&Pt.getTransfer(_.map.colorSpace)===zt,decodeVideoTextureEmissive:K&&_.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(_.emissiveMap.colorSpace)===zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jn,flipSided:_.side===Cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=f.has(1),Qe.vertexUv2s=f.has(2),Qe.vertexUv3s=f.has(3),f.clear(),Qe}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)w.push(L),w.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(w,_),A(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function A(_,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function P(_){const w=p[_.type];let L;if(w){const U=_i[w];L=Tm.clone(U.uniforms)}else L=_.uniforms;return L}function y(_,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new sM(n,w,_,a),c.push(L),u.set(w,L)),L}function S(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:v,getUniforms:P,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:I}}function hM(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,f){n.get(s)[o]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function pM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function nd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function id(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,E,v,g){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:E,renderOrder:d.renderOrder,z:v,group:g},n[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=m,A.materialVariant=s(d),A.groupOrder=E,A.renderOrder=d.renderOrder,A.z=v,A.group=g),e++,A}function f(d,p,m,E,v,g,A){A.reversedDepth===!0&&(v=-v);const P=o(d,p,m,E,v,g);m.transmission>0?i.push(P):m.transparent===!0?a.push(P):t.push(P)}function c(d,p,m,E,v,g){const A=o(d,p,m,E,v,g);m.transmission>0?i.unshift(A):m.transparent===!0?a.unshift(A):t.unshift(A)}function u(d,p){t.length>1&&t.sort(d||pM),i.length>1&&i.sort(p||nd),a.length>1&&a.sort(p||nd)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:c,finish:h,sort:u}}function mM(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new id,n.set(i,[s])):a>=r.length?(s=new id,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function gM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new gt};break;case"SpotLight":t={position:new G,direction:new G,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function xM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vM=0;function MM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _M(n){const e=new gM,t=xM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const a=new G,r=new Xt,s=new Xt;function o(c){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,E=0,v=0,g=0,A=0,P=0,y=0,S=0,T=0,I=0,_=0,w=0,L=0;c.sort(MM);for(let V=0,q=c.length;V<q;V++){const B=c[V],J=B.color,re=B.intensity,W=B.distance;let ge=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ka?ge=B.shadow.map.texture:ge=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=J.r*re,h+=J.g*re,d+=J.b*re;else if(B.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(B.sh.coefficients[se],re);L++}else if(B.isSunLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[m]=de,i.sunShadowMap[m]=ge;const tt=ae.getViewportCount();for(let He=0;He<tt;He++)i.sunShadowMatrix[E+He]=ae.getMatrix(He),i.sunShadowCascade[E+He]=ae._cascadeData[He];E+=tt,m++}i.sun[p]=se,p++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.directionalShadow[v]=de,i.directionalShadowMap[v]=ge,i.directionalShadowMatrix[v]=B.shadow.matrix,S++}i.directional[v]=se,v++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(J).multiplyScalar(re),se.distance=W,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,i.spot[A]=se;const ae=B.shadow;if(B.map&&(i.spotLightMap[_]=B.map,_++,ae.updateMatrices(B),B.castShadow&&w++),i.spotLightMatrix[A]=ae.matrix,B.castShadow){const de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.spotShadow[A]=de,i.spotShadowMap[A]=ge,I++}A++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(J).multiplyScalar(re),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),i.rectArea[P]=se,P++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const ae=B.shadow,de=t.get(B);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,i.pointShadow[g]=de,i.pointShadowMap[g]=ge,i.pointShadowMatrix[g]=B.shadow.matrix,T++}i.point[g]=se,g++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(re),se.groundColor.copy(B.groundColor).multiplyScalar(re),i.hemi[y]=se,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==p||U.directionalLength!==v||U.pointLength!==g||U.spotLength!==A||U.rectAreaLength!==P||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==S||U.numPointShadows!==T||U.numSpotShadows!==I||U.numSpotMaps!==_||U.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=v,i.spot.length=A,i.rectArea.length=P,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=L,U.sunLength=p,U.directionalLength=v,U.pointLength=g,U.spotLength=A,U.rectAreaLength=P,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=S,U.numPointShadows=T,U.numSpotShadows=I,U.numSpotMaps=_,U.numLightProbes=L,i.version=vM++)}function f(c,u){let h=0,d=0,p=0,m=0,E=0,v=0;const g=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){const y=c[A];if(y.isSunLight){const S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),h++}else if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const S=i.rectArea[E];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),s.identity(),r.copy(y.matrixWorld),r.premultiply(g),s.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),E++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:o,setupView:f,state:i}}function ad(n){const e=new _M(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function f(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:f}}function SM(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new ad(n),e.set(a,[o])):r>=s.length?(o=new ad(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`,EM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],AM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],rd=new Xt,no=new G,Jl=new G;function TM(n,e,t){let i=new vf;const a=new Ne,r=new Ne,s=new Kt,o=new Pm,f=new Im,c={},u=t.maxTextureSize,h={[Ga]:Cn,[Cn]:Ga,[Jn]:Jn},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yM,fragmentShader:bM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new hn;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Et(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let g=this.type;this.render=function(T,I,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;this.type===Ep&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);const w=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Hi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=g!==this.type;q&&I.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(J=>J.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,J=T.length;B<J;B++){const re=T[B],W=re.shadow;if(W===void 0){ht("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ge=W.getFrameExtents();a.multiply(ge),r.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ge.x),a.x=r.x*ge.x,W.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ge.y),a.y=r.y*ge.y,W.mapSize.y=r.y));const se=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=se,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===lo){if(re.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qn(a.x,a.y,{format:ka,type:Ri,minFilter:fn,magFilter:fn,generateMipmaps:!1}),W.map.texture.name=re.name+".shadowMap",W.map.depthTexture=new Dr(a.x,a.y,bi),W.map.depthTexture.name=re.name+".shadowMapDepth",W.map.depthTexture.format=Xi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en}else re.isPointLight?(W.map=new Eh(a.x),W.map.depthTexture=new X0(a.x,wi)):(W.map=new Qn(a.x,a.y),W.map.depthTexture=new Dr(a.x,a.y,wi)),W.map.depthTexture.name=re.name+".shadowMap",W.map.depthTexture.format=Xi,this.type===uo?(W.map.depthTexture.compareFunction=se?pf:hf,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=en,W.map.depthTexture.magFilter=en);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);const ae=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();re.isPointLight!==!0&&W.updateMatrices(re,_);for(let de=0;de<ae;de++){const tt=W.getCamera(de);if(re.isPointLight){const He=W.camera,vt=W.matrix,ut=re.distance||He.far;ut!==He.far&&(He.far=ut,He.updateProjectionMatrix()),no.setFromMatrixPosition(re.matrixWorld),He.position.copy(no),Jl.copy(He.position),Jl.add(EM[de]),He.up.copy(AM[de]),He.lookAt(Jl),He.updateMatrixWorld(),vt.makeTranslation(-no.x,-no.y,-no.z),rd.multiplyMatrices(He.projectionMatrix,He.matrixWorldInverse),W._frustum.setFromProjectionMatrix(rd,He.coordinateSystem,He.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,de),n.clear();else{de===0&&(n.setRenderTarget(W.map),n.clear());const He=W.getViewport(de);s.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),V.viewport(s)}i=W.getFrustum(de),y(I,_,tt,re,this.type)}W.isPointLightShadow!==!0&&this.type===lo&&A(W,_),W.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(w,L,U)};function A(T,I){const _=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qn(a.x,a.y,{format:ka,type:Ri}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,_,d,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,_,p,E,null)}function P(T,I,_,w){let L=null;const U=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)L=U;else if(L=_.isPointLight===!0?f:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=L.uuid,q=I.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let J=B[q];J===void 0&&(J=L.clone(),B[q]=J,I.addEventListener("dispose",S)),L=J}if(L.visible=I.visible,L.wireframe=I.wireframe,w===lo?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:h[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const V=n.properties.get(L);V.light=_}return L}function y(T,I,_,w,L){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===lo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const q=e.update(T),B=T.material;if(Array.isArray(B)){const J=q.groups;for(let re=0,W=J.length;re<W;re++){const ge=J[re],se=B[ge.materialIndex];if(se&&se.visible){const ae=P(T,se,w,L);T.onBeforeShadow(n,T,I,_,q,ae,ge),n.renderBufferDirect(_,null,q,ae,T,ge),T.onAfterShadow(n,T,I,_,q,ae,ge)}}}else if(B.visible){const J=P(T,B,w,L);T.onBeforeShadow(n,T,I,_,q,J,null),n.renderBufferDirect(_,null,q,J,T,null),T.onAfterShadow(n,T,I,_,q,J,null)}}const V=T.children;for(let q=0,B=V.length;q<B;q++)y(V[q],I,_,w,L)}function S(T){T.target.removeEventListener("dispose",S);for(const _ in c){const w=c[_],L=T.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function wM(n,e){function t(){let X=!1;const Be=new Kt;let me=null;const l=new Kt(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!X&&(n.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,ue,ft,Qe,Nt){Nt===!0&&(Ue*=Qe,ue*=Qe,ft*=Qe),Be.set(Ue,ue,ft,Qe),l.equals(Be)===!1&&(n.clearColor(Ue,ue,ft,Qe),l.copy(Be))},reset:function(){X=!1,me=null,l.set(-1,0,0,0)}}}function i(){let X=!1,Be=!1,me=null,l=null,Ue=null;return{setReversed:function(ue){if(Be!==ue){const ft=e.get("EXT_clip_control");ue?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),Be=ue;const Qe=Ue;Ue=null,this.setClear(Qe)}},getReversed:function(){return Be},setTest:function(ue){ue?he(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ue){me!==ue&&!X&&(n.depthMask(ue),me=ue)},setFunc:function(ue){if(Be&&(ue=a0[ue]),l!==ue){switch(ue){case oc:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case cc:n.depthFunc(n.EQUAL);break;case fc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}l=ue}},setLocked:function(ue){X=ue},setClear:function(ue){Ue!==ue&&(Ue=ue,Be&&(ue=1-ue),n.clearDepth(ue))},reset:function(){X=!1,me=null,l=null,Ue=null,Be=!1}}}function a(){let X=!1,Be=null,me=null,l=null,Ue=null,ue=null,ft=null,Qe=null,Nt=null;return{setTest:function(bt){X||(bt?he(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(bt){Be!==bt&&!X&&(n.stencilMask(bt),Be=bt)},setFunc:function(bt,Un,Pn){(me!==bt||l!==Un||Ue!==Pn)&&(n.stencilFunc(bt,Un,Pn),me=bt,l=Un,Ue=Pn)},setOp:function(bt,Un,Pn){(ue!==bt||ft!==Un||Qe!==Pn)&&(n.stencilOp(bt,Un,Pn),ue=bt,ft=Un,Qe=Pn)},setLocked:function(bt){X=bt},setClear:function(bt){Nt!==bt&&(n.clearStencil(bt),Nt=bt)},reset:function(){X=!1,Be=null,me=null,l=null,Ue=null,ue=null,ft=null,Qe=null,Nt=null}}}const r=new t,s=new i,o=new a,f=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],E=null,v=!1,g=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new gt(0,0,0),w=0,L=!1,U=null,V=null,q=null,B=null,J=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ge=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(se)[1]),W=ge>=1):se.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),W=ge>=2);let ae=null,de={};const tt=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),vt=new Kt().fromArray(tt),ut=new Kt().fromArray(He);function pt(X,Be,me,l){const Ue=new Uint8Array(4),ue=n.createTexture();n.bindTexture(X,ue),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<me;ft++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Be,0,n.RGBA,1,1,l,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Be+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return ue}const ce={};ce[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(Mo),we(!1),Se(Qf),he(n.CULL_FACE),xe(Hi);function he(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Pe(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function st(X,Be){return d[X]!==Be?(n.bindFramebuffer(X,Be),d[X]=Be,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Be),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Be),!0):!1}function Ye(X,Be){let me=m,l=!1;if(X){me=p.get(Be),me===void 0&&(me=[],p.set(Be,me));const Ue=X.textures;if(me.length!==Ue.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ft=Ue.length;ue<ft;ue++)me[ue]=n.COLOR_ATTACHMENT0+ue;me.length=Ue.length,l=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,l=!0);l&&n.drawBuffers(me)}function Ie(X){return E!==X?(n.useProgram(X),E=X,!0):!1}const ct={[br]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};ct[Rp]=n.MIN,ct[Cp]=n.MAX;const fe={[Pp]:n.ZERO,[Ip]:n.ONE,[Lp]:n.SRC_COLOR,[Ld]:n.SRC_ALPHA,[Bp]:n.SRC_ALPHA_SATURATE,[Op]:n.DST_COLOR,[Np]:n.DST_ALPHA,[Dp]:n.ONE_MINUS_SRC_COLOR,[Dd]:n.ONE_MINUS_SRC_ALPHA,[Fp]:n.ONE_MINUS_DST_COLOR,[Up]:n.ONE_MINUS_DST_ALPHA,[zp]:n.CONSTANT_COLOR,[Gp]:n.ONE_MINUS_CONSTANT_COLOR,[Vp]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(X,Be,me,l,Ue,ue,ft,Qe,Nt,bt){if(X===Hi){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(he(n.BLEND),v=!0),X!==Ap){if(X!==g||bt!==L){if((A!==br||S!==br)&&(n.blendEquation(n.FUNC_ADD),A=br,S=br),bt)switch(X){case ho:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case ho:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eu:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}P=null,y=null,T=null,I=null,_.set(0,0,0),w=0,g=X,L=bt}return}Ue=Ue||Be,ue=ue||me,ft=ft||l,(Be!==A||Ue!==S)&&(n.blendEquationSeparate(ct[Be],ct[Ue]),A=Be,S=Ue),(me!==P||l!==y||ue!==T||ft!==I)&&(n.blendFuncSeparate(fe[me],fe[l],fe[ue],fe[ft]),P=me,y=l,T=ue,I=ft),(Qe.equals(_)===!1||Nt!==w)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Nt),_.copy(Qe),w=Nt),g=X,L=!1}function Te(X,Be){X.side===Jn?Pe(n.CULL_FACE):he(n.CULL_FACE);let me=X.side===Cn;Be&&(me=!me),we(me),X.blending===ho&&X.transparent===!1?xe(Hi):xe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const l=X.stencilWrite;o.setTest(l),l&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),K(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(X){U!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),U=X)}function Se(X){X!==yp?(he(n.CULL_FACE),X!==V&&(X===Qf?n.cullFace(n.BACK):X===bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),V=X}function R(X){X!==q&&(W&&n.lineWidth(X),q=X)}function K(X,Be,me){X?(he(n.POLYGON_OFFSET_FILL),(B!==Be||J!==me)&&(B=Be,J=me,s.getReversed()&&(Be=-Be),n.polygonOffset(Be,me))):Pe(n.POLYGON_OFFSET_FILL)}function Re(X){X?he(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function Le(X){X===void 0&&(X=n.TEXTURE0+re-1),ae!==X&&(n.activeTexture(X),ae=X)}function O(X,Be,me){me===void 0&&(ae===null?me=n.TEXTURE0+re-1:me=ae);let l=de[me];l===void 0&&(l={type:void 0,texture:void 0},de[me]=l),(l.type!==X||l.texture!==Be)&&(ae!==me&&(n.activeTexture(me),ae=me),n.bindTexture(X,Be||ce[X]),l.type=X,l.texture=Be)}function ot(){const X=de[ae];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Xe(){try{n.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function b(){try{n.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Y(){try{n.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Me(){try{n.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Ae(){try{n.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function ne(){try{n.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function pe(){try{n.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Ve(X){return h[X]!==void 0?h[X]:n.getParameter(X)}function je(X,Be){h[X]!==Be&&(n.pixelStorei(X,Be),h[X]=Be)}function De(X){vt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function Oe(X){ut.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ut.copy(X))}function qe(X,Be){let me=c.get(Be);me===void 0&&(me=new WeakMap,c.set(Be,me));let l=me.get(X);l===void 0&&(l=n.getUniformBlockIndex(Be,X.name),me.set(X,l))}function it(X,Be){const l=c.get(Be).get(X);f.get(Be)!==l&&(n.uniformBlockBinding(Be,l,X.__bindingPointIndex),f.set(Be,l))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ae=null,de={},d={},p=new WeakMap,m=[],E=null,v=!1,g=null,A=null,P=null,y=null,S=null,T=null,I=null,_=new gt(0,0,0),w=0,L=!1,U=null,V=null,q=null,B=null,J=null,vt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:Pe,bindFramebuffer:st,drawBuffers:Ye,useProgram:Ie,setBlending:xe,setMaterial:Te,setFlipSided:we,setCullFace:Se,setLineWidth:R,setPolygonOffset:K,setScissorTest:Re,activeTexture:Le,bindTexture:O,unbindTexture:ot,compressedTexImage2D:Xe,compressedTexImage3D:D,texImage2D:ne,texImage3D:pe,pixelStorei:je,getParameter:Ve,updateUBOMapping:qe,uniformBlockBinding:it,texStorage2D:Me,texStorage3D:Ae,texSubImage2D:b,texSubImage3D:Y,compressedTexSubImage2D:Z,compressedTexSubImage3D:le,scissor:De,viewport:Oe,reset:Ge}}function RM(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return m?new OffscreenCanvas(D,b):bo("canvas")}function v(D,b,Y){let Z=1;const le=Xe(D);if((le.width>Y||le.height>Y)&&(Z=Y/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(Z*le.width),Ae=Math.floor(Z*le.height);d===void 0&&(d=E(Me,Ae));const ne=b?E(Me,Ae):d;return ne.width=Me,ne.height=Ae,ne.getContext("2d").drawImage(D,0,0,Me,Ae),ht("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Me+"x"+Ae+")."),ne}else return"data"in D&&ht("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function g(D){return D.generateMipmaps}function A(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,b,Y,Z,le,Me=!1){if(D!==null){if(n[D]!==void 0)return n[D];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ae;Z&&(Ae=e.get("EXT_texture_norm16"),Ae||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===n.RED&&(Y===n.FLOAT&&(ne=n.R32F),Y===n.HALF_FLOAT&&(ne=n.R16F),Y===n.UNSIGNED_BYTE&&(ne=n.R8),Y===n.UNSIGNED_SHORT&&Ae&&(ne=Ae.R16_EXT),Y===n.SHORT&&Ae&&(ne=Ae.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.R8UI),Y===n.UNSIGNED_SHORT&&(ne=n.R16UI),Y===n.UNSIGNED_INT&&(ne=n.R32UI),Y===n.BYTE&&(ne=n.R8I),Y===n.SHORT&&(ne=n.R16I),Y===n.INT&&(ne=n.R32I)),b===n.RG&&(Y===n.FLOAT&&(ne=n.RG32F),Y===n.HALF_FLOAT&&(ne=n.RG16F),Y===n.UNSIGNED_BYTE&&(ne=n.RG8),Y===n.UNSIGNED_SHORT&&Ae&&(ne=Ae.RG16_EXT),Y===n.SHORT&&Ae&&(ne=Ae.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Y===n.UNSIGNED_INT&&(ne=n.RG32UI),Y===n.BYTE&&(ne=n.RG8I),Y===n.SHORT&&(ne=n.RG16I),Y===n.INT&&(ne=n.RG32I)),b===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),Y===n.UNSIGNED_INT&&(ne=n.RGB32UI),Y===n.BYTE&&(ne=n.RGB8I),Y===n.SHORT&&(ne=n.RGB16I),Y===n.INT&&(ne=n.RGB32I)),b===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ne=n.RGBA32UI),Y===n.BYTE&&(ne=n.RGBA8I),Y===n.SHORT&&(ne=n.RGBA16I),Y===n.INT&&(ne=n.RGBA32I)),b===n.RGB&&(Y===n.UNSIGNED_SHORT&&Ae&&(ne=Ae.RGB16_EXT),Y===n.SHORT&&Ae&&(ne=Ae.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),b===n.RGBA){const pe=Me?zs:Pt.getTransfer(le);Y===n.FLOAT&&(ne=n.RGBA32F),Y===n.HALF_FLOAT&&(ne=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ne=pe===zt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Ae&&(ne=Ae.RGBA16_EXT),Y===n.SHORT&&Ae&&(ne=Ae.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(D,b){let Y;return D?b===null||b===wi||b===So?Y=n.DEPTH24_STENCIL8:b===bi?Y=n.DEPTH32F_STENCIL8:b===_o&&(Y=n.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wi||b===So?Y=n.DEPTH_COMPONENT24:b===bi?Y=n.DEPTH_COMPONENT32F:b===_o&&(Y=n.DEPTH_COMPONENT16),Y}function T(D,b){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==en&&D.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),w(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),U(b)}function w(D){const b=i.get(D);if(b.__webglInit===void 0)return;const Y=D.source,Z=p.get(Y);if(Z){const le=Z[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(D),Object.keys(Z).length===0&&p.delete(Y)}i.remove(D)}function L(D){const b=i.get(D);n.deleteTexture(b.__webglTexture);const Y=D.source,Z=p.get(Y);delete Z[b.__cacheKey],s.memory.textures--}function U(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let le=0;le<b.__webglFramebuffer[Z].length;le++)n.deleteFramebuffer(b.__webglFramebuffer[Z][le]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=D.textures;for(let Z=0,le=Y.length;Z<le;Z++){const Me=i.get(Y[Z]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),s.memory.textures--),i.remove(Y[Z])}i.remove(D)}let V=0;function q(){V=0}function B(){return V}function J(D){V=D}function re(){const D=V;return D>=a.maxTextures&&ht("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function W(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ge(D,b){const Y=i.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const Z=D.image;if(Z===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Y,D,b);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+b)}function se(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Pe(Y,D,b);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+b)}function ae(D,b){const Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Pe(Y,D,b);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+b)}function de(D,b){const Y=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){st(Y,D,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+b)}const tt={[Us]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},He={[en]:n.NEAREST,[Xp]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[Oa]:n.LINEAR_MIPMAP_LINEAR},vt={[Jp]:n.NEVER,[e0]:n.ALWAYS,[Zp]:n.LESS,[hf]:n.LEQUAL,[Kp]:n.EQUAL,[pf]:n.GEQUAL,[Qp]:n.GREATER,[jp]:n.NOTEQUAL};function ut(D,b){if(b.type===bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===gl||b.magFilter===Yo||b.magFilter===Oa||b.minFilter===fn||b.minFilter===gl||b.minFilter===Yo||b.minFilter===Oa)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,tt[b.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,tt[b.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,tt[b.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,He[b.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,He[b.minFilter]),b.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==Yo&&b.minFilter!==Oa||b.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function pt(D,b){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let le=p.get(Z);le===void 0&&(le={},p.set(Z,le));const Me=W(b);if(Me!==D.__cacheKey){le[Me]===void 0&&(le[Me]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),le[Me].usedTimes++;const Ae=le[D.__cacheKey];Ae!==void 0&&(le[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&L(b)),D.__cacheKey=Me,D.__webglTexture=le[Me].texture}return Y}function ce(D,b,Y){return Math.floor(Math.floor(D/Y)/b)}function he(D,b,Y,Z){const Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Y,Z,b.data);else{Me.sort((je,De)=>je.start-De.start);let Ae=0;for(let je=1;je<Me.length;je++){const De=Me[Ae],Oe=Me[je],qe=De.start+De.count,it=ce(Oe.start,b.width,4),Ge=ce(De.start,b.width,4);Oe.start<=qe+1&&it===Ge&&ce(Oe.start+Oe.count-1,b.width,4)===it?De.count=Math.max(De.count,Oe.start+Oe.count-De.start):(++Ae,Me[Ae]=Oe)}Me.length=Ae+1;const ne=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let je=0,De=Me.length;je<De;je++){const Oe=Me[je],qe=Math.floor(Oe.start/4),it=Math.ceil(Oe.count/4),Ge=qe%b.width,X=Math.floor(qe/b.width),Be=it,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,Ge,X,Be,me,Y,Z,b.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function Pe(D,b,Y){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const le=pt(D,b),Me=b.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+Y);const Ae=i.get(Me);if(Me.version!==Ae.__version||le===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Pt.getPrimaries(Pt.workingColorSpace),l=b.colorSpace===pa?null:Pt.getPrimaries(b.colorSpace),Ue=b.colorSpace===pa||me===l?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let pe=v(b.image,!1,a.maxTextureSize);pe=ot(b,pe);const Ve=r.convert(b.format,b.colorSpace),je=r.convert(b.type);let De=y(b.internalFormat,Ve,je,b.normalized,b.colorSpace,b.isVideoTexture);ut(Z,b);let Oe;const qe=b.mipmaps,it=b.isVideoTexture!==!0,Ge=Ae.__version===void 0||le===!0,X=Me.dataReady,Be=T(b,pe);if(b.isDepthTexture)De=S(b.format===Fa,b.type),Ge&&(it?t.texStorage2D(n.TEXTURE_2D,1,De,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,De,pe.width,pe.height,0,Ve,je,null));else if(b.isDataTexture)if(qe.length>0){it&&Ge&&t.texStorage2D(n.TEXTURE_2D,Be,De,qe[0].width,qe[0].height);for(let me=0,l=qe.length;me<l;me++)Oe=qe[me],it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ve,je,Oe.data):t.texImage2D(n.TEXTURE_2D,me,De,Oe.width,Oe.height,0,Ve,je,Oe.data);b.generateMipmaps=!1}else it?(Ge&&t.texStorage2D(n.TEXTURE_2D,Be,De,pe.width,pe.height),X&&he(b,pe,Ve,je)):t.texImage2D(n.TEXTURE_2D,0,De,pe.width,pe.height,0,Ve,je,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,De,qe[0].width,qe[0].height,pe.depth);for(let me=0,l=qe.length;me<l;me++)if(Oe=qe[me],b.format!==Kn)if(Ve!==null)if(it){if(X)if(b.layerUpdates.size>0){const Ue=Fu(Oe.width,Oe.height,b.format,b.type);for(const ue of b.layerUpdates){const ft=Oe.data.subarray(ue*Ue/Oe.data.BYTES_PER_ELEMENT,(ue+1)*Ue/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ue,Oe.width,Oe.height,1,Ve,ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,pe.depth,Ve,Oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,Oe.width,Oe.height,pe.depth,0,Oe.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Oe.width,Oe.height,pe.depth,Ve,je,Oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,Oe.width,Oe.height,pe.depth,0,Ve,je,Oe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{it&&Ge&&t.texStorage2D(n.TEXTURE_2D,Be,De,qe[0].width,qe[0].height);for(let me=0,l=qe.length;me<l;me++)Oe=qe[me],b.format!==Kn?Ve!==null?it?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ve,Oe.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,Oe.width,Oe.height,0,Oe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Oe.width,Oe.height,Ve,je,Oe.data):t.texImage2D(n.TEXTURE_2D,me,De,Oe.width,Oe.height,0,Ve,je,Oe.data)}else if(b.isDataArrayTexture)if(it){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,De,pe.width,pe.height,pe.depth),X)if(b.layerUpdates.size>0){const me=Fu(pe.width,pe.height,b.format,b.type);for(const l of b.layerUpdates){const Ue=pe.data.subarray(l*me/pe.data.BYTES_PER_ELEMENT,(l+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,l,pe.width,pe.height,1,Ve,je,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ve,je,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,Ve,je,pe.data);else if(b.isData3DTexture)it?(Ge&&t.texStorage3D(n.TEXTURE_3D,Be,De,pe.width,pe.height,pe.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ve,je,pe.data)):t.texImage3D(n.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,Ve,je,pe.data);else if(b.isFramebufferTexture){if(Ge)if(it)t.texStorage2D(n.TEXTURE_2D,Be,De,pe.width,pe.height);else{let me=pe.width,l=pe.height;for(let Ue=0;Ue<Be;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,De,me,l,0,Ve,je,null),me>>=1,l>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),h.add(b),me.onpaint=l=>{const Ue=l.changedElements;for(const ue of h)Ue.includes(ue.image)&&(ue.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{const Ue=n.RGBA,ue=n.RGBA,ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ue,ue,ft,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(qe.length>0){if(it&&Ge){const me=Xe(qe[0]);t.texStorage2D(n.TEXTURE_2D,Be,De,me.width,me.height)}for(let me=0,l=qe.length;me<l;me++)Oe=qe[me],it?X&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ve,je,Oe):t.texImage2D(n.TEXTURE_2D,me,De,Ve,je,Oe);b.generateMipmaps=!1}else if(it){if(Ge){const me=Xe(pe);t.texStorage2D(n.TEXTURE_2D,Be,De,me.width,me.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,je,pe)}else t.texImage2D(n.TEXTURE_2D,0,De,Ve,je,pe);g(b)&&A(Z),Ae.__version=Me.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function st(D,b,Y){if(b.image.length!==6)return;const Z=pt(D,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);const Me=i.get(le);if(le.version!==Me.__version||Z===!0){t.activeTexture(n.TEXTURE0+Y);const Ae=Pt.getPrimaries(Pt.workingColorSpace),ne=b.colorSpace===pa?null:Pt.getPrimaries(b.colorSpace),pe=b.colorSpace===pa||Ae===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=b.isCompressedTexture||b.image[0].isCompressedTexture,je=b.image[0]&&b.image[0].isDataTexture,De=[];for(let ue=0;ue<6;ue++)!Ve&&!je?De[ue]=v(b.image[ue],!0,a.maxCubemapSize):De[ue]=je?b.image[ue].image:b.image[ue],De[ue]=ot(b,De[ue]);const Oe=De[0],qe=r.convert(b.format,b.colorSpace),it=r.convert(b.type),Ge=y(b.internalFormat,qe,it,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Be=Me.__version===void 0||Z===!0,me=le.dataReady;let l=T(b,Oe);ut(n.TEXTURE_CUBE_MAP,b);let Ue;if(Ve){X&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Ge,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){Ue=De[ue].mipmaps;for(let ft=0;ft<Ue.length;ft++){const Qe=Ue[ft];b.format!==Kn?qe!==null?X?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft,0,0,Qe.width,Qe.height,qe,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft,Ge,Qe.width,Qe.height,0,Qe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft,0,0,Qe.width,Qe.height,qe,it,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft,Ge,Qe.width,Qe.height,0,qe,it,Qe.data)}}}else{if(Ue=b.mipmaps,X&&Be){Ue.length>0&&l++;const ue=Xe(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Ge,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(je){X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,De[ue].width,De[ue].height,qe,it,De[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,De[ue].width,De[ue].height,0,qe,it,De[ue].data);for(let ft=0;ft<Ue.length;ft++){const Nt=Ue[ft].image[ue].image;X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft+1,0,0,Nt.width,Nt.height,qe,it,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft+1,Ge,Nt.width,Nt.height,0,qe,it,Nt.data)}}else{X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qe,it,De[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ge,qe,it,De[ue]);for(let ft=0;ft<Ue.length;ft++){const Qe=Ue[ft];X?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft+1,0,0,qe,it,Qe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ft+1,Ge,qe,it,Qe.image[ue])}}}g(b)&&A(n.TEXTURE_CUBE_MAP),Me.__version=le.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ye(D,b,Y,Z,le,Me){const Ae=r.convert(Y.format,Y.colorSpace),ne=r.convert(Y.type),pe=y(Y.internalFormat,Ae,ne,Y.normalized,Y.colorSpace),Ve=i.get(b),je=i.get(Y);if(je.__renderTarget=b,!Ve.__hasExternalTextures){const De=Math.max(1,b.width>>Me),Oe=Math.max(1,b.height>>Me);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,Me,pe,De,Oe,b.depth,0,Ae,ne,null):t.texImage2D(le,Me,pe,De,Oe,0,Ae,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Le(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,le,je.__webglTexture,0,Re(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,le,je.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(D,b,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),b.depthBuffer){const Z=b.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,Me=S(b.stencilBuffer,le),Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Le(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(b),Me,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(b),Me,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,D)}else{const Z=b.textures;for(let le=0;le<Z.length;le++){const Me=Z[le],Ae=r.convert(Me.format,Me.colorSpace),ne=r.convert(Me.type),pe=y(Me.internalFormat,Ae,ne,Me.normalized,Me.colorSpace);Le(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re(b),pe,b.width,b.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re(b),pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(D,b,Y){const Z=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ut(n.TEXTURE_CUBE_MAP,b.depthTexture);const Ve=r.convert(b.depthTexture.format),je=r.convert(b.depthTexture.type);let De;b.depthTexture.format===Xi?De=n.DEPTH_COMPONENT24:b.depthTexture.format===Fa&&(De=n.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,b.width,b.height,0,Ve,je,null)}}else ge(b.depthTexture,0);const Me=le.__webglTexture,Ae=Re(b),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,pe=b.depthTexture.format===Fa?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xi)Le(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ne,Me,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ne,Me,0);else if(b.depthTexture.format===Fa)Le(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ne,Me,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ne,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(D){const b=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=Z}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Y)for(let Z=0;Z<6;Z++)ct(b.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?ct(b.__webglFramebuffer[0],D,0):ct(b.__webglFramebuffer,D,0)}else if(Y){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ie(b.__webglDepthbuffer[Z],D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Me)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ie(b.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,b,Y){const Z=i.get(D);b!==void 0&&Ye(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&fe(D)}function Te(D){const b=D.texture,Y=i.get(D),Z=i.get(b);D.addEventListener("dispose",_);const le=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Ae=le.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,s.memory.textures++),Me){Y.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[ne]=[];for(let pe=0;pe<b.mipmaps.length;pe++)Y.__webglFramebuffer[ne][pe]=n.createFramebuffer()}else Y.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)Y.__webglFramebuffer[ne]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ne=0,pe=le.length;ne<pe;ne++){const Ve=i.get(le[ne]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),s.memory.textures++)}if(D.samples>0&&Le(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){const pe=le[ne];Y.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[ne]);const Ve=r.convert(pe.format,pe.colorSpace),je=r.convert(pe.type),De=y(pe.internalFormat,Ve,je,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Oe=Re(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,De,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ut(n.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ye(Y.__webglFramebuffer[ne][pe],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe);else Ye(Y.__webglFramebuffer[ne],D,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(b)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ne=0,pe=le.length;ne<pe;ne++){const Ve=le[ne],je=i.get(Ve);let De=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,je.__webglTexture),ut(De,Ve),Ye(Y.__webglFramebuffer,D,Ve,n.COLOR_ATTACHMENT0+ne,De,0),g(Ve)&&A(De)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ne=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),ut(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ye(Y.__webglFramebuffer[pe],D,b,n.COLOR_ATTACHMENT0,ne,pe);else Ye(Y.__webglFramebuffer,D,b,n.COLOR_ATTACHMENT0,ne,0);g(b)&&A(ne),t.unbindTexture()}D.depthBuffer&&fe(D)}function we(D){const b=D.textures;for(let Y=0,Z=b.length;Y<Z;Y++){const le=b[Y];if(g(le)){const Me=P(D),Ae=i.get(le).__webglTexture;t.bindTexture(Me,Ae),A(Me),t.unbindTexture()}}}const Se=[],R=[];function K(D){if(D.samples>0){if(Le(D)===!1){const b=D.textures,Y=D.width,Z=D.height;let le=n.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(D),ne=b.length>1;if(ne)for(let Ve=0;Ve<b.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ve=0;Ve<b.length;Ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ve]);const je=i.get(b[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,le,n.NEAREST),f===!0&&(Se.length=0,R.length=0,Se.push(n.COLOR_ATTACHMENT0+Ve),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Se.push(Me),R.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Ve=0;Ve<b.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ve]);const je=i.get(b[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&f){const b=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Re(D){return Math.min(a.maxSamples,D.samples)}function Le(D){const b=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(D){const b=s.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function ot(D,b){const Y=D.colorSpace,Z=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Bs&&Y!==pa&&(Pt.getTransfer(Y)===zt?(Z!==Kn||le!==wn)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",Y)),b}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=J,this.setTexture2D=ge,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=de,this.rebindTextures=xe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function CM(n,e){function t(i,a=pa){let r;const s=Pt.getTransfer(a);if(i===wn)return n.UNSIGNED_BYTE;if(i===lf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hd)return n.BYTE;if(i===Wd)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===sf)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Ri)return n.HALF_FLOAT;if(i===Yd)return n.ALPHA;if(i===$d)return n.RGB;if(i===Kn)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Fa)return n.DEPTH_STENCIL;if(i===Jd)return n.RED;if(i===ff)return n.RED_INTEGER;if(i===ka)return n.RG;if(i===uf)return n.RG_INTEGER;if(i===df)return n.RGBA_INTEGER;if(i===Rs||i===Cs||i===Ps||i===Is)if(s===zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===Mc||i===_c||i===Sc||i===yc||i===Os||i===bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===Mc)return s===zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sc)return r.COMPRESSED_R11_EAC;if(i===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Os)return r.COMPRESSED_RG11_EAC;if(i===bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ec||i===Ac||i===Tc||i===wc||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ec)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ac)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ic)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return s===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bc||i===zc||i===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bc)return s===zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===kc||i===Fs||i===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
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

}`;class LM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:PM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends Xa{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",f=1,c=null,u=null,h=null,d=null,p=null,m=null;const E=typeof XRWebGLBinding<"u",v=new LM,g={},A=t.getContextAttributes();let P=null,y=null;const S=[],T=[],I=new Ne;let _=null,w=null;const L=new $n;L.viewport=new Kt;const U=new $n;U.viewport=new Kt;const V=[L,U],q=new Vm;let B=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let he=S[ce];return he===void 0&&(he=new bl,S[ce]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ce){let he=S[ce];return he===void 0&&(he=new bl,S[ce]=he),he.getGripSpace()},this.getHand=function(ce){let he=S[ce];return he===void 0&&(he=new bl,S[ce]=he),he.getHandSpace()};function re(ce){const he=T.indexOf(ce.inputSource);if(he===-1)return;const Pe=S[he];Pe!==void 0&&(Pe.update(ce.inputSource,ce.frame,c||s),Pe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function W(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",ge);for(let ce=0;ce<S.length;ce++){const he=T[ce];he!==null&&(T[ce]=null,S[ce].disconnect(he))}B=null,J=null,v.reset();for(const ce in g)delete g[ce];if(e.setRenderTarget(P),p=null,d=null,h=null,a=null,y=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),w!==null){const ce=w.camera;ce.fov=w.fov,ce.zoom=w.zoom,ce.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(ce){if(a=ce,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",W),a.addEventListener("inputsourceschange",ge),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,st=null,Ye=null;A.depth&&(Ye=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=A.stencil?Fa:Xi,st=A.stencil?So:wi);const Ie={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ie),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Qn(d.textureWidth,d.textureHeight,{format:Kn,type:wn,depthTexture:new Dr(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Pe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Pe),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(f),c=null,s=await a.requestReferenceSpace(o),pt.setContext(a),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ge(ce){for(let he=0;he<ce.removed.length;he++){const Pe=ce.removed[he],st=T.indexOf(Pe);st>=0&&(T[st]=null,S[st].disconnect(Pe))}for(let he=0;he<ce.added.length;he++){const Pe=ce.added[he];let st=T.indexOf(Pe);if(st===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=T.length){T.push(Pe),st=Ie;break}else if(T[Ie]===null){T[Ie]=Pe,st=Ie;break}if(st===-1)break}const Ye=S[st];Ye&&Ye.connect(Pe)}}const se=new G,ae=new G;function de(ce,he,Pe){se.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(Pe.matrixWorld);const st=se.distanceTo(ae),Ye=he.projectionMatrix.elements,Ie=Pe.projectionMatrix.elements,ct=Ye[14]/(Ye[10]-1),fe=Ye[14]/(Ye[10]+1),xe=(Ye[9]+1)/Ye[5],Te=(Ye[9]-1)/Ye[5],we=(Ye[8]-1)/Ye[0],Se=(Ie[8]+1)/Ie[0],R=ct*we,K=ct*Se,Re=st/(-we+Se),Le=Re*-we;if(he.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Le),ce.translateZ(Re),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ye[10]===-1)ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const O=ct+Re,ot=fe+Re,Xe=R-Le,D=K+(st-Le),b=xe*fe/ot*O,Y=Te*fe/ot*O;ce.projectionMatrix.makePerspective(Xe,D,b,Y,O,ot),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function tt(ce,he){he===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(he.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(a===null)return;let he=ce.near,Pe=ce.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(Pe=v.depthFar)),q.near=U.near=L.near=he,q.far=U.far=L.far=Pe,(B!==q.near||J!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,J=q.far),q.layers.mask=ce.layers.mask|6,L.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;const st=ce.parent,Ye=q.cameras;tt(q,st);for(let Ie=0;Ie<Ye.length;Ie++)tt(Ye[Ie],st);Ye.length===2?de(q,L,U):q.projectionMatrix.copy(L.projectionMatrix),w===null&&ce.isPerspectiveCamera&&(w={camera:ce,fov:ce.fov,zoom:ce.zoom}),He(ce,q,st)};function He(ce,he,Pe){Pe===null?ce.matrix.copy(he.matrixWorld):(ce.matrix.copy(Pe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(he.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Eo*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return f},this.setFoveation=function(ce){f=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(q)},this.getCameraTexture=function(ce){return g[ce]};let vt=null;function ut(ce,he){if(u=he.getViewerPose(c||s),m=he,u!==null){const Pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let st=!1;Pe.length!==q.cameras.length&&(q.cameras.length=0,st=!0);for(let fe=0;fe<Pe.length;fe++){const xe=Pe[fe];let Te=null;if(p!==null)Te=p.getViewport(xe);else{const Se=h.getViewSubImage(d,xe);Te=Se.viewport,fe===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let we=V[fe];we===void 0&&(we=new $n,we.layers.enable(fe),we.viewport=new Kt,V[fe]=we),we.matrix.fromArray(xe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(xe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Te.x,Te.y,Te.width,Te.height),fe===0&&(q.matrix.copy(we.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),st===!0&&q.cameras.push(we)}const Ye=a.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const fe=h.getDepthInformation(Pe[0]);fe&&fe.isValid&&fe.texture&&v.init(fe,a.renderState)}if(Ye&&Ye.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<Pe.length;fe++){const xe=Pe[fe].camera;if(xe){let Te=g[xe];Te||(Te=new fh,g[xe]=Te);const we=h.getCameraImage(xe);Te.sourceTexture=we}}}}for(let Pe=0;Pe<S.length;Pe++){const st=T[Pe],Ye=S[Pe];st!==null&&Ye!==void 0&&Ye.update(st,he,c||s)}vt&&vt(ce,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}const pt=new yh;pt.setAnimationLoop(ut),this.setAnimationLoop=function(ce){vt=ce},this.dispose=function(){}}}const NM=new Xt,Ch=new _t;Ch.set(-1,0,0,0,1,0,0,0,1);function UM(n,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,Mh(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,A,P,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(v,g):g.isMeshLambertMaterial?(r(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(v,g),h(v,g)):g.isMeshPhongMaterial?(r(v,g),u(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(v,g),d(v,g),g.isMeshPhysicalMaterial&&p(v,g,y)):g.isMeshMatcapMaterial?(r(v,g),m(v,g)):g.isMeshDepthMaterial?r(v,g):g.isMeshDistanceMaterial?(r(v,g),E(v,g)):g.isMeshNormalMaterial?r(v,g):g.isLineBasicMaterial?(s(v,g),g.isLineDashedMaterial&&o(v,g)):g.isPointsMaterial?f(v,g,A,P):g.isSpriteMaterial?c(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Cn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Cn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const A=e.get(g),P=A.envMap,y=A.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Ch),v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function s(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function o(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function f(v,g,A,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*A,v.scale.value=P*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function c(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function u(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function h(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function d(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function p(v,g,A){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.retroreflectivity>0&&(v.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,g){g.matcap&&(v.matcap.value=g.matcap)}function E(v,g){const A=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function OM(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(y,S){const T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=a[y.id];T===void 0&&(v(y),T=u(y),a[y.id]=T,y.addEventListener("dispose",A));const I=S.program;i.updateUBOMapping(y,I);const _=e.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function u(y){const S=h();y.__bindingPointIndex=S;const T=n.createBuffer(),I=y.__size,_=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=a[y.id],T=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let _=0,w=T.length;_<w;_++){const L=T[_];if(Array.isArray(L))for(let U=0,V=L.length;U<V;U++)p(L[U],_,U,I);else p(L,_,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,T,I){if(E(y,S,T,I)===!0){const _=y.__offset,w=y.value;if(Array.isArray(w)){let L=0;for(let U=0;U<w.length;U++){const V=w[U],q=g(V);m(V,y.__data,L),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,y.__data)}}function m(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function E(y,S,T,I){const _=y.value,w=S+"_"+T;if(I[w]===void 0)return typeof _=="number"||typeof _=="boolean"?I[w]=_:ArrayBuffer.isView(_)?I[w]=_.slice():I[w]=_.clone(),!0;{const L=I[w];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return I[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function v(y){const S=y.uniforms;let T=0;const I=16;for(let w=0,L=S.length;w<L;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let V=0,q=U.length;V<q;V++){const B=U[V],J=Array.isArray(B.value)?B.value:[B.value];for(let re=0,W=J.length;re<W;re++){const ge=J[re],se=g(ge),ae=T%I,de=ae%se.boundary,tt=ae+de;T+=de,tt!==0&&I-tt<se.storage&&(T+=I-tt),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=se.storage}}}const _=T%I;return _>0&&(T+=I-_),y.__size=T,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",y),S}function A(y){const S=y.target;S.removeEventListener("dispose",A);const T=s.indexOf(S.__bindingPointIndex);s.splice(T,1),n.deleteBuffer(a[S.id]),delete a[S.id],delete r[S.id]}function P(){for(const y in a)n.deleteBuffer(a[y]);s=[],a={},r={}}return{bind:f,update:c,dispose:P}}const FM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function BM(){return vi===null&&(vi=new sh(FM,16,16,ka,Ri),vi.name="DFG_LUT",vi.minFilter=fn,vi.magFilter=fn,vi.wrapS=Gi,vi.wrapT=Gi,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class zM{constructor(e={}){const{canvas:t=n0(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const E=p,v=new Set([df,uf,ff]),g=new Set([wn,wi,_o,So,lf,cf]),A=new Uint32Array(4),P=new Int32Array(4),y=new G;let S=null,T=null;const I=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,V=null,q=null,B=null,J=null;this._outputColorSpace=Dn;let re=0,W=0,ge=null,se=-1,ae=null;const de=new Kt,tt=new Kt;let He=null;const vt=new gt(0);let ut=0,pt=t.width,ce=t.height,he=1,Pe=null,st=null;const Ye=new Kt(0,0,pt,ce),Ie=new Kt(0,0,pt,ce);let ct=!1;const fe=new vf;let xe=!1,Te=!1;const we=new Xt,Se=new G,R=new Kt,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Le(){return ge===null?he:1}let O=i;function ot(C,k){return t.getContext(C,k)}let Xe,D,b,Y,Z,le,Me,Ae,ne,pe,Ve,je,De,Oe,qe,it,Ge,X,Be,me,l,Ue,ue;try{const C={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",Nt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),O===null){const k="webgl2";if(O=ot(k,C),O===null)throw ot(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(C){throw t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),It("WebGLRenderer: "+C.message),C}function ft(){Xe=new B1(O),Xe.init(),l=new CM(O,Xe),D=new R1(O,Xe,e,l),b=new wM(O,Xe),D.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),q=O.createFramebuffer(),B=O.createFramebuffer(),J=O.createFramebuffer(),Y=new V1(O),Z=new hM,le=new RM(O,Xe,b,Z,D,l,Y),Me=new F1(L),Ae=new Hm(O),Ue=new T1(O,Ae),ne=new z1(O,Ae,Y,Ue),pe=new H1(O,ne,Ae,Ue,Y),X=new k1(O,D,le),qe=new C1(Z),Ve=new dM(L,Me,Xe,D,Ue,qe),je=new UM(L,Z),De=new mM,Oe=new SM(Xe),Ge=new A1(L,Me,b,pe,m,f),it=new TM(L,pe,D),ue=new OM(O,Y,D,b),Be=new w1(O,Xe,Y),me=new G1(O,Xe,Y),Y.programs=Ve.programs,L.capabilities=D,L.extensions=Xe,L.properties=Z,L.renderLists=De,L.shadowMap=it,L.state=b,L.info=Y}E!==wn&&(w=new X1(E,t.width,t.height,o,a,r));const Qe=new DM(L,O);this.xr=Qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(C){C!==void 0&&(he=C,this.setSize(pt,ce,!1))},this.getSize=function(C){return C.set(pt,ce)},this.setSize=function(C,k,oe=!0){if(Qe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=C,ce=k,t.width=Math.floor(C*he),t.height=Math.floor(k*he),oe===!0&&(t.style.width=C+"px",t.style.height=k+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(pt*he,ce*he).floor()},this.setDrawingBufferSize=function(C,k,oe){pt=C,ce=k,he=oe,t.width=Math.floor(C*oe),t.height=Math.floor(k*oe),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(E===wn){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(de)},this.getViewport=function(C){return C.copy(Ye)},this.setViewport=function(C,k,oe,j){C.isVector4?Ye.set(C.x,C.y,C.z,C.w):Ye.set(C,k,oe,j),b.viewport(de.copy(Ye).multiplyScalar(he).round())},this.getScissor=function(C){return C.copy(Ie)},this.setScissor=function(C,k,oe,j){C.isVector4?Ie.set(C.x,C.y,C.z,C.w):Ie.set(C,k,oe,j),b.scissor(tt.copy(Ie).multiplyScalar(he).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(C){b.setScissorTest(ct=C)},this.setOpaqueSort=function(C){Pe=C},this.setTransparentSort=function(C){st=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,oe=!0){let j=0;if(C){let ee=!1;if(ge!==null){const $e=ge.texture.format;ee=v.has($e)}if(ee){const $e=ge.texture.type,nt=g.has($e),Je=Ge.getClearColor(),at=Ge.getClearAlpha(),lt=Je.r,yt=Je.g,wt=Je.b;nt?(A[0]=lt,A[1]=yt,A[2]=wt,A[3]=at,O.clearBufferuiv(O.COLOR,0,A)):(P[0]=lt,P[1]=yt,P[2]=wt,P[3]=at,O.clearBufferiv(O.COLOR,0,P))}else j|=O.COLOR_BUFFER_BIT}k&&(j|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),V=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Nt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Ge.dispose(),De.dispose(),Oe.dispose(),Z.dispose(),Me.dispose(),pe.dispose(),Ue.dispose(),ue.dispose(),Ve.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",$a),Qe.removeEventListener("sessionend",Zi),ei.stop()};function Nt(C){C.preventDefault(),Gs("WebGLRenderer: Context Lost."),U=!0}function bt(){Gs("WebGLRenderer: Context Restored."),U=!1;const C=Y.autoReset,k=it.enabled,oe=it.autoUpdate,j=it.needsUpdate,ee=it.type;ft(),Y.autoReset=C,it.enabled=k,it.autoUpdate=oe,it.needsUpdate=j,it.type=ee}function Un(C){It("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const k=C.target;k.removeEventListener("dispose",Pn),ll(k)}function ll(C){Ji(C),Z.remove(C)}function Ji(C){const k=Z.get(C).programs;k!==void 0&&(k.forEach(function(oe){Ve.releaseProgram(oe)}),C.isShaderMaterial&&Ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,oe,j,ee,$e){k===null&&(k=K);const nt=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Je=Za(C,k,oe,j,ee);b.setMaterial(j,nt);let at=oe.index,lt=1;if(j.wireframe===!0){if(at=ne.getWireframeAttribute(oe),at===void 0)return;lt=2}const yt=oe.drawRange,wt=oe.attributes.position;let rt=yt.start*lt,Lt=(yt.start+yt.count)*lt;$e!==null&&(rt=Math.max(rt,$e.start*lt),Lt=Math.min(Lt,($e.start+$e.count)*lt)),at!==null?(rt=Math.max(rt,0),Lt=Math.min(Lt,at.count)):wt!=null&&(rt=Math.max(rt,0),Lt=Math.min(Lt,wt.count));const jt=Lt-rt;if(jt<0||jt===1/0)return;Ue.setup(ee,j,Je,oe,at);let Vt,Bt=Be;if(at!==null&&(Vt=Ae.get(at),Bt=me,Bt.setIndex(Vt)),ee.isMesh)j.wireframe===!0?(b.setLineWidth(j.wireframeLinewidth*Le()),Bt.setMode(O.LINES)):Bt.setMode(O.TRIANGLES);else if(ee.isLine){let on=j.linewidth;on===void 0&&(on=1),b.setLineWidth(on*Le()),ee.isLineSegments?Bt.setMode(O.LINES):ee.isLineLoop?Bt.setMode(O.LINE_LOOP):Bt.setMode(O.LINE_STRIP)}else ee.isPoints?Bt.setMode(O.POINTS):ee.isSprite&&Bt.setMode(O.TRIANGLES);if(ee.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const on=ee._multiDrawStarts,et=ee._multiDrawCounts,ln=ee._multiDrawCount,Ct=at?Ae.get(at).bytesPerElement:1,bn=Z.get(j).currentProgram.getUniforms();for(let On=0;On<ln;On++)bn.setValue(O,"_gl_DrawID",On),Bt.render(on[On]/Ct,et[On])}else if(ee.isInstancedMesh)Bt.renderInstances(rt,jt,ee.count);else if(oe.isInstancedBufferGeometry){const on=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,et=Math.min(oe.instanceCount,on);Bt.renderInstances(rt,jt,et)}else Bt.render(rt,jt)};function zo(C,k,oe,j){V!==null&&C.isNodeMaterial&&V.setObject(j,C),xe===!0&&qe.setState(C,oe,!1),C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=Cn,C.needsUpdate=!0,Ja(C,k,j),C.side=Ga,C.needsUpdate=!0,Ja(C,k,j),C.side=Jn):Ja(C,k,j)}this.compile=function(C,k,oe=null){oe===null&&(oe=C),V!==null&&V.renderStart(C,k,oe),T=Oe.get(oe),T.init(k),_.push(T),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),C!==oe&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(k.layers)&&(T.pushLight(ee),ee.castShadow&&T.pushShadow(ee))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Te=this.localClippingEnabled,xe=qe.init(this.clippingPlanes,Te),xe===!0&&qe.setGlobalState(this.clippingPlanes,k),V!==null&&it.render(T.state.shadowsArray,oe,k);const j=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const $e=ee.material;if($e)if(Array.isArray($e))for(let nt=0;nt<$e.length;nt++){const Je=$e[nt];zo(Je,oe,k,ee),j.add(Je)}else zo($e,oe,k,ee),j.add($e)}),T=_.pop(),V!==null&&V.renderEnd(),j},this.compileAsync=function(C,k,oe=null){const j=this.compile(C,k,oe);return new Promise(ee=>{function $e(){if(j.forEach(function(nt){const at=Z.get(nt).currentProgram;(at===void 0||at.isReady())&&j.delete(nt)}),j.size===0){ee(C);return}setTimeout($e,10)}Xe.get("KHR_parallel_shader_compile")!==null?$e():setTimeout($e,10)})};let Ya=null;function kr(C){Ya&&Ya(C)}function $a(){ei.stop()}function Zi(){ei.start()}const ei=new yh;ei.setAnimationLoop(kr),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(C){Ya=C,Qe.setAnimationLoop(C),C===null?ei.stop():ei.start()},Qe.addEventListener("sessionstart",$a),Qe.addEventListener("sessionend",Zi),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(C,k);const oe=Qe.enabled===!0&&Qe.isPresenting===!0,j=w!==null&&(ge===null||oe)&&w.begin(L,ge);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(k),k=Qe.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,k,ge),T=Oe.get(C,_.length),T.init(k),T.state.textureUnits=le.getTextureUnits(),_.push(T),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),fe.setFromProjectionMatrix(we,Ei,k.reversedDepth),Te=this.localClippingEnabled,xe=qe.init(this.clippingPlanes,Te),S=De.get(C,I.length),S.init(),I.push(S),Qe.enabled===!0&&Qe.isPresenting===!0){const nt=L.xr.getDepthSensingMesh();nt!==null&&Hr(nt,k,-1/0,L.sortObjects)}Hr(C,k,0,L.sortObjects),S.finish(),V!==null&&V.updateLights(T.state.lightsArray),L.sortObjects===!0&&S.sort(Pe,st),Re=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,Re&&Ge.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&qe.beginShadows();const ee=T.state.shadowsArray;if(it.render(ee,C,k),xe===!0&&qe.endShadows(),(j&&w.hasRenderPass())===!1){const nt=S.opaque,Je=S.transmissive;if(T.setupLights(),k.isArrayCamera){const at=k.cameras;if(Je.length>0)for(let lt=0,yt=at.length;lt<yt;lt++){const wt=at[lt];Wt(nt,Je,C,wt)}Re&&Ge.render(C);for(let lt=0,yt=at.length;lt<yt;lt++){const wt=at[lt];Go(S,C,wt,wt.viewport)}}else Je.length>0&&Wt(nt,Je,C,k),Re&&Ge.render(C),Go(S,C,k)}ge!==null&&W===0&&(le.updateMultisampleRenderTarget(ge),le.updateRenderTargetMipmap(ge)),j&&w.end(L),C.isScene===!0&&C.onAfterRender(L,C,k),Ue.resetDefaultState(),se=-1,ae=null,_.pop(),_.length>0?(T=_[_.length-1],le.setTextureUnits(T.state.textureUnits),xe===!0&&qe.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,V!==null&&V.renderEnd()};function Hr(C,k,oe,j){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(fe)){j&&R.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const nt=pe.update(C),Je=C.material;Je.visible&&S.push(C,nt,Je,oe,R.z,null,k)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(fe))){const nt=pe.update(C),Je=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),R.copy(C.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),R.copy(nt.boundingSphere.center)),R.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Je)){const at=nt.groups;for(let lt=0,yt=at.length;lt<yt;lt++){const wt=at[lt],rt=Je[wt.materialIndex];rt&&rt.visible&&S.push(C,nt,rt,oe,R.z,wt,k)}}else Je.visible&&S.push(C,nt,Je,oe,R.z,null,k)}}const $e=C.children;for(let nt=0,Je=$e.length;nt<Je;nt++)Hr($e[nt],k,oe,j)}function Go(C,k,oe,j){const{opaque:ee,transmissive:$e,transparent:nt}=C;T.setupLightsView(oe),xe===!0&&qe.setGlobalState(L.clippingPlanes,oe),j&&b.viewport(de.copy(j)),ee.length>0&&qt(ee,k,oe),$e.length>0&&qt($e,k,oe),nt.length>0&&qt(nt,k,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Wt(C,k,oe,j){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const rt=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new Qn(1,1,{generateMipmaps:!0,type:rt?Ri:wn,minFilter:Oa,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const $e=T.state.transmissionRenderTarget[j.id],nt=j.viewport||de;$e.setSize(nt.z*L.transmissionResolutionScale,nt.w*L.transmissionResolutionScale);const Je=L.getRenderTarget(),at=L.getActiveCubeFace(),lt=L.getActiveMipmapLevel();L.setRenderTarget($e),L.getClearColor(vt),ut=L.getClearAlpha(),ut<1&&L.setClearColor(16777215,.5),L.clear(),Re&&Ge.render(oe);const yt=L.toneMapping;L.toneMapping=Ai;const wt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),xe===!0&&qe.setGlobalState(L.clippingPlanes,j),qt(C,oe,j),le.updateMultisampleRenderTarget($e),le.updateRenderTargetMipmap($e),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Lt=0,jt=k.length;Lt<jt;Lt++){const Vt=k[Lt],{object:Bt,geometry:on,material:et,group:ln}=Vt;if(et.side===Jn&&Bt.layers.test(j.layers)){const Ct=et.side;et.side=Cn,et.needsUpdate=!0,Vo(Bt,oe,j,on,et,ln),et.side=Ct,et.needsUpdate=!0,rt=!0}}rt===!0&&(le.updateMultisampleRenderTarget($e),le.updateRenderTargetMipmap($e))}L.setRenderTarget(Je,at,lt),L.setClearColor(vt,ut),wt!==void 0&&(j.viewport=wt),L.toneMapping=yt}function qt(C,k,oe){const j=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,$e=C.length;ee<$e;ee++){const nt=C[ee],{object:Je,geometry:at,group:lt}=nt;let yt=nt.material;yt.allowOverride===!0&&j!==null&&(yt=j),Je.layers.test(oe.layers)&&Vo(Je,k,oe,at,yt,lt)}}function Vo(C,k,oe,j,ee,$e){V!==null&&ee.isNodeMaterial&&V.setObject(C,ee),C.onBeforeRender(L,k,oe,j,ee,$e),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(L,k,oe,j,C,$e),ee.transparent===!0&&ee.side===Jn&&ee.forceSinglePass===!1?(ee.side=Cn,ee.needsUpdate=!0,L.renderBufferDirect(oe,k,j,ee,C,$e),ee.side=Ga,ee.needsUpdate=!0,L.renderBufferDirect(oe,k,j,ee,C,$e),ee.side=Jn):L.renderBufferDirect(oe,k,j,ee,C,$e),C.onAfterRender(L,k,oe,j,ee,$e)}function Ja(C,k,oe){k.isScene!==!0&&(k=K);const j=Z.get(C),ee=T.state.lights,$e=T.state.shadowsArray,nt=ee.state.version,Je=Ve.getParameters(C,ee.state,$e,k,oe,T.state.lightProbeGridArray),at=Ve.getProgramCacheKey(Je);let lt=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;const yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=Me.get(C.envMap||j.environment,yt),j.envMapRotation=j.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,lt===void 0&&(C.addEventListener("dispose",Pn),lt=new Map,j.programs=lt);let wt=lt.get(at);if(wt!==void 0){if(j.currentProgram===wt&&j.lightsStateVersion===nt)return Aa(C,Je),wt}else Je.uniforms=Ve.getUniforms(C),V!==null&&C.isNodeMaterial&&V.build(C,oe,Je),C.onBeforeCompile(Je,L),wt=Ve.acquireProgram(Je,at),lt.set(at,wt),j.uniforms=Je.uniforms;const rt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=qe.uniform),Aa(C,Je),j.needsLights=Ki(C),j.lightsStateVersion=nt,j.needsLights&&(rt.ambientLightColor.value=ee.state.ambient,rt.lightProbe.value=ee.state.probe,rt.sunLights.value=ee.state.sun,rt.sunLightShadows.value=ee.state.sunShadow,rt.directionalLights.value=ee.state.directional,rt.directionalLightShadows.value=ee.state.directionalShadow,rt.spotLights.value=ee.state.spot,rt.spotLightShadows.value=ee.state.spotShadow,rt.rectAreaLights.value=ee.state.rectArea,rt.ltc_1.value=ee.state.rectAreaLTC1,rt.ltc_2.value=ee.state.rectAreaLTC2,rt.pointLights.value=ee.state.point,rt.pointLightShadows.value=ee.state.pointShadow,rt.hemisphereLights.value=ee.state.hemi,rt.sunShadowMatrix.value=ee.state.sunShadowMatrix,rt.sunShadowCascade.value=ee.state.sunShadowCascade,rt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,rt.spotLightMatrix.value=ee.state.spotLightMatrix,rt.spotLightMap.value=ee.state.spotLightMap,rt.pointShadowMatrix.value=ee.state.pointShadowMatrix),j.lightProbeGrid=T.state.lightProbeGridArray.length>0,j.currentProgram=wt,j.uniformsList=null,wt}function ko(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ls.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Aa(C,k){const oe=Z.get(C);oe.outputColorSpace=k.outputColorSpace,oe.batching=k.batching,oe.batchingColor=k.batchingColor,oe.instancing=k.instancing,oe.instancingColor=k.instancingColor,oe.instancingMorph=k.instancingMorph,oe.skinning=k.skinning,oe.morphTargets=k.morphTargets,oe.morphNormals=k.morphNormals,oe.morphColors=k.morphColors,oe.morphTargetsCount=k.morphTargetsCount,oe.numClippingPlanes=k.numClippingPlanes,oe.numIntersection=k.numClipIntersection,oe.vertexAlphas=k.vertexAlphas,oe.vertexTangents=k.vertexTangents,oe.toneMapping=k.toneMapping}function yn(C,k){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let oe=0,j=C.length;oe<j;oe++){const ee=C[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(y))return ee}return null}function Za(C,k,oe,j,ee){k.isScene!==!0&&(k=K),le.resetTextureUnits();const $e=k.fog,nt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,Je=ge===null?L.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Pt.workingColorSpace,at=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,lt=Me.get(j.envMap||nt,at),yt=j.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,wt=!!oe.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),rt=!!oe.morphAttributes.position,Lt=!!oe.morphAttributes.normal,jt=!!oe.morphAttributes.color;let Vt=Ai;j.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Vt=L.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,on=Bt!==void 0?Bt.length:0,et=Z.get(j),ln=T.state.lights;if(xe===!0&&(Te===!0||C!==ae)){const kt=C===ae&&j.id===se;qe.setState(j,C,kt)}let Ct=!1;j.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ln.state.version||et.outputColorSpace!==Je||ee.isBatchedMesh&&et.batching===!1||!ee.isBatchedMesh&&et.batching===!0||ee.isBatchedMesh&&et.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&et.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&et.instancing===!1||!ee.isInstancedMesh&&et.instancing===!0||ee.isSkinnedMesh&&et.skinning===!1||!ee.isSkinnedMesh&&et.skinning===!0||ee.isInstancedMesh&&et.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&et.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&et.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&et.instancingMorph===!1&&ee.morphTexture!==null||et.envMap!==lt||j.fog===!0&&et.fog!==$e||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==qe.numPlanes||et.numIntersection!==qe.numIntersection)||et.vertexAlphas!==yt||et.vertexTangents!==wt||et.morphTargets!==rt||et.morphNormals!==Lt||et.morphColors!==jt||et.toneMapping!==Vt||et.morphTargetsCount!==on||!!et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,et.__version=j.version);let bn=et.currentProgram;Ct===!0&&(bn=Ja(j,k,ee),V&&j.isNodeMaterial&&V.onUpdateProgram(j,bn,et));let On=!1,ti=!1,Qi=!1;const Ot=bn.getUniforms(),Jt=et.uniforms;if(b.useProgram(bn.program)&&(On=!0,ti=!0,Qi=!0),j.id!==se&&(se=j.id,ti=!0),et.needsLights){const kt=yn(T.state.lightProbeGridArray,ee);et.lightProbeGrid!==kt&&(et.lightProbeGrid=kt,ti=!0)}if(On||ae!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ot.setValue(O,"projectionMatrix",C.projectionMatrix),Ot.setValue(O,"viewMatrix",C.matrixWorldInverse);const gi=Ot.map.cameraPosition;gi!==void 0&&gi.setValue(O,Se.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),ae!==C&&(ae=C,ti=!0,Qi=!0)}if(et.needsLights&&(ln.state.sunShadowMap.length>0&&Ot.setValue(O,"sunShadowMap",ln.state.sunShadowMap,le),ln.state.directionalShadowMap.length>0&&Ot.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,le),ln.state.spotShadowMap.length>0&&Ot.setValue(O,"spotShadowMap",ln.state.spotShadowMap,le),ln.state.pointShadowMap.length>0&&Ot.setValue(O,"pointShadowMap",ln.state.pointShadowMap,le)),ee.isSkinnedMesh){Ot.setOptional(O,ee,"bindMatrix"),Ot.setOptional(O,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ot.setValue(O,"boneTexture",kt.boneTexture,le))}ee.isBatchedMesh&&(Ot.setOptional(O,ee,"batchingTexture"),Ot.setValue(O,"batchingTexture",ee._matricesTexture,le),Ot.setOptional(O,ee,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",ee._indirectTexture,le),Ot.setOptional(O,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",ee._colorsTexture,le));const mi=oe.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&X.update(ee,oe,bn),(ti||et.receiveShadow!==ee.receiveShadow)&&(et.receiveShadow=ee.receiveShadow,Ot.setValue(O,"receiveShadow",ee.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=BM()),ti){if(Ot.setValue(O,"toneMappingExposure",L.toneMappingExposure),et.needsLights&&Ta(Jt,Qi),$e&&j.fog===!0&&je.refreshFogUniforms(Jt,$e),je.refreshMaterialUniforms(Jt,j,he,ce,T.state.transmissionRenderTarget[C.id]),et.needsLights&&et.lightProbeGrid){const kt=et.lightProbeGrid;Jt.probesSH.value=kt.texture,Jt.probesMin.value.copy(kt.boundingBox.min),Jt.probesMax.value.copy(kt.boundingBox.max),Jt.probesResolution.value.copy(kt.resolution)}Ls.upload(O,ko(et),Jt,le)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ls.upload(O,ko(et),Jt,le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(O,"center",ee.center),Ot.setValue(O,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(O,"normalMatrix",ee.normalMatrix),Ot.setValue(O,"modelMatrix",ee.matrixWorld),j.uniformsGroups!==void 0){const kt=j.uniformsGroups;for(let gi=0,qn=kt.length;gi<qn;gi++){const Wr=kt[gi];ue.update(Wr,bn),ue.bind(Wr,bn)}}return bn}function Ta(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ki(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ge},this.setRenderTargetTextures=function(C,k,oe){const j=Z.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=k,Z.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:oe,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const oe=Z.get(C);oe.__webglFramebuffer=k,oe.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,oe=0){ge=C,re=k,W=oe;let j=null,ee=!1,$e=!1;if(C){const Je=Z.get(C);if(Je.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(O.FRAMEBUFFER,Je.__webglFramebuffer),de.copy(C.viewport),tt.copy(C.scissor),He=C.scissorTest,b.viewport(de),b.scissor(tt),b.setScissorTest(He),se=-1;return}else if(Je.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Je.__hasExternalTextures)le.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const yt=C.depthTexture;if(Je.__boundDepthTexture!==yt){if(yt!==null&&Z.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&($e=!0);const lt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[k])?j=lt[k][oe]:j=lt[k],ee=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?j=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?j=lt[oe]:j=lt,de.copy(C.viewport),tt.copy(C.scissor),He=C.scissorTest}else de.copy(Ye).multiplyScalar(he).floor(),tt.copy(Ie).multiplyScalar(he).floor(),He=ct;if(oe!==0&&(j=q),b.bindFramebuffer(O.FRAMEBUFFER,j)&&b.drawBuffers(C,j),b.viewport(de),b.scissor(tt),b.setScissorTest(He),ee){const Je=Z.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Je.__webglTexture,oe)}else if($e){const Je=k;for(let at=0;at<C.textures.length;at++){const lt=Z.get(C.textures[at]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+at,lt.__webglTexture,oe,Je)}}else if(C!==null&&oe!==0){const Je=Z.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Je.__webglTexture,oe)}se=-1};function Ho(C){const k=Z.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=D.textureFormatReadable(C.format),k.__typeReadable=D.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,oe,j,ee,$e,nt,Je=0){if(!(C&&C.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){b.bindFramebuffer(O.FRAMEBUFFER,at);try{const lt=C.textures[Je],yt=lt.format,wt=lt.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Je);const rt=Ho(lt);if(rt.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(rt.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-j&&oe>=0&&oe<=C.height-ee&&O.readPixels(k,oe,j,ee,l.convert(yt),l.convert(wt),$e)}finally{const lt=ge!==null?Z.get(ge).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(C,k,oe,j,ee,$e,nt,Je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at)if(k>=0&&k<=C.width-j&&oe>=0&&oe<=C.height-ee){b.bindFramebuffer(O.FRAMEBUFFER,at);const lt=C.textures[Je],yt=lt.format,wt=lt.type;C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Je);const rt=Ho(lt);if(rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,$e.byteLength,O.STREAM_READ),O.readPixels(k,oe,j,ee,l.convert(yt),l.convert(wt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const jt=ge!==null?Z.get(ge).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,jt);const Vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await i0(O,Vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,$e),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Lt),O.deleteSync(Vt),$e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,oe=0){const j=Math.pow(2,-oe),ee=Math.floor(C.image.width*j),$e=Math.floor(C.image.height*j),nt=k!==null?k.x:0,Je=k!==null?k.y:0;le.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,nt,Je,ee,$e),b.unbindTexture()},this.copyTextureToTexture=function(C,k,oe=null,j=null,ee=0,$e=0){let nt,Je,at,lt,yt,wt,rt,Lt,jt;const Vt=C.isCompressedTexture?C.mipmaps[$e]:C.image;if(oe!==null)nt=oe.max.x-oe.min.x,Je=oe.max.y-oe.min.y,at=oe.isBox3?oe.max.z-oe.min.z:1,lt=oe.min.x,yt=oe.min.y,wt=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-ee);nt=Math.floor(Vt.width*Jt),Je=Math.floor(Vt.height*Jt),C.isDataArrayTexture?at=Vt.depth:C.isData3DTexture?at=Math.floor(Vt.depth*Jt):at=1,lt=0,yt=0,wt=0}j!==null?(rt=j.x,Lt=j.y,jt=j.z):(rt=0,Lt=0,jt=0);const Bt=l.convert(k.format),on=l.convert(k.type);let et;k.isData3DTexture?(le.setTexture3D(k,0),et=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(le.setTexture2DArray(k,0),et=O.TEXTURE_2D_ARRAY):(le.setTexture2D(k,0),et=O.TEXTURE_2D),b.activeTexture(O.TEXTURE0),b.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const ln=b.getParameter(O.UNPACK_ROW_LENGTH),Ct=b.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=b.getParameter(O.UNPACK_SKIP_PIXELS),On=b.getParameter(O.UNPACK_SKIP_ROWS),ti=b.getParameter(O.UNPACK_SKIP_IMAGES);b.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),b.pixelStorei(O.UNPACK_SKIP_PIXELS,lt),b.pixelStorei(O.UNPACK_SKIP_ROWS,yt),b.pixelStorei(O.UNPACK_SKIP_IMAGES,wt);const Qi=C.isDataArrayTexture||C.isData3DTexture,Ot=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Jt=Z.get(C),mi=Z.get(k),kt=Z.get(Jt.__renderTarget),gi=Z.get(mi.__renderTarget);b.bindFramebuffer(O.READ_FRAMEBUFFER,kt.__webglFramebuffer),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let qn=0;qn<at;qn++)Qi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,ee,wt+qn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,$e,jt+qn)),O.blitFramebuffer(lt,yt,nt,Je,rt,Lt,nt,Je,O.DEPTH_BUFFER_BIT,O.NEAREST);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||Z.has(C)){const Jt=Z.get(C),mi=Z.get(k);b.bindFramebuffer(O.READ_FRAMEBUFFER,B),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,J);for(let kt=0;kt<at;kt++)Qi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,ee,wt+kt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,ee),Ot?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mi.__webglTexture,$e,jt+kt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mi.__webglTexture,$e),ee!==0?O.blitFramebuffer(lt,yt,nt,Je,rt,Lt,nt,Je,O.COLOR_BUFFER_BIT,O.NEAREST):Ot?O.copyTexSubImage3D(et,$e,rt,Lt,jt+kt,lt,yt,nt,Je):O.copyTexSubImage2D(et,$e,rt,Lt,lt,yt,nt,Je);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ot?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(et,$e,rt,Lt,jt,nt,Je,at,Bt,on,Vt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(et,$e,rt,Lt,jt,nt,Je,at,Bt,Vt.data):O.texSubImage3D(et,$e,rt,Lt,jt,nt,Je,at,Bt,on,Vt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$e,rt,Lt,nt,Je,Bt,on,Vt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$e,rt,Lt,Vt.width,Vt.height,Bt,Vt.data):O.texSubImage2D(O.TEXTURE_2D,$e,rt,Lt,nt,Je,Bt,on,Vt);b.pixelStorei(O.UNPACK_ROW_LENGTH,ln),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct),b.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),b.pixelStorei(O.UNPACK_SKIP_ROWS,On),b.pixelStorei(O.UNPACK_SKIP_IMAGES,ti),$e===0&&k.generateMipmaps&&O.generateMipmap(et),b.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){re=0,W=0,ge=null,b.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const od={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},da={email:"mds.victorgabriel@gmail.com",telefone:"(98) 98752-7469",telefoneTel:"+5598987527469",github:"https://github.com/VictorGabrielmds",linkedin:"https://www.linkedin.com/in/VictorGabrielmds",portfolio:"https://victorgabrielmds.github.io/victor-portfolio-dfe/",repo:"https://github.com/VictorGabrielmds/curriculo-pixi"},dn=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",blocos:[{tipo:"destaque",texto:"Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais."},{tipo:"texto",texto:"Curioso e proativo, gosto de transformar problemas reais em ferramentas úteis. Uso IA (Gemini, Claude Code, Codex) para acelerar o código e estruturar a lógica."},{tipo:"numeros",itens:[{v:"4+",r:"anos de experiência"},{v:"5",r:"empresas e projetos"},{v:"2024",r:"analista na SVT"}]},{tipo:"etiquetas",itens:["Front-end","UI/UX","Node.js e PHP","Automação (n8n)","WordPress"]},{tipo:"dica",texto:"Ande com as setas (ou WASD), pule com ESPAÇO e visite cada estação."}]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",blocos:[{tipo:"cartao",aberto:!0,atual:!0,titulo:"Analista de Sistemas",local:"SVT Faculdade",periodo:"Jun 2024 – hoje",texto:"SAMA, sistema de ajuda em tempo real entre professores e monitores; emissão automática de declarações de autenticidade de certificados; manutenção de sites em PHP e conformidade com o MEC (nota 5 no setor).",tags:["React","Vite","Firebase","TypeScript","Node.js"]},{tipo:"cartao",atual:!0,titulo:"Desenvolvedor Web Freelancer",local:"Autônomo",periodo:"Set 2024 – hoje",texto:"PWA interativo para doutorado, com mapa histórico da vinda da corte portuguesa ao Brasil: modo offline, atualizações em tempo real por websocket e acessibilidade para cegos e Libras. Wireframes e design system.",tags:["React","Vite","TypeScript","Firebase","Leaflet","Figma"]},{tipo:"cartao",titulo:"Designer UI/UX e Front-end",local:"Kanagawa Inc",periodo:"Jan – Jul 2023",texto:"Criei o design system Kanagawa Nami no Figma, prototipei interfaces mobile e as implementei em React Native, além da trilha de usuário dos produtos.",tags:["Figma","React Native","Scrum","Notion"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Clínica IMMA",periodo:"Abr 2022 – Jun 2023",texto:"Manutenção de sites em PHP, interfaces responsivas prototipadas no Figma e implementadas em HTML e Bootstrap, e assets visuais para a identidade da clínica.",tags:["HTML","Bootstrap","PHP","Figma"]},{tipo:"cartao",titulo:"Desenvolvedor Front-end",local:"Cartão Saúde",periodo:"Out 2021 – Jun 2023",texto:"Sistema web de gestão de parceiros que substituiu um processo manual e agilizou o acesso à rede credenciada; manutenção e modernização de sites.",tags:["React","Firebase","Bootstrap","Git","Figma"]}]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",blocos:[{tipo:"cartao",aberto:!0,titulo:"Este currículo jogável",local:"pessoal",periodo:"2026",texto:"Um planeta em 3D e pixel art com cassino, jogo de nave com chefões, upgrades e trilha sonora. Você está dentro dele agora.",tags:["Three.js","Vite","WebAudio"],links:[{rotulo:"Ver o código",url:"repo"}]},{tipo:"cartao",titulo:"SAMA",local:"SVT Faculdade",periodo:"2024",texto:"Pedidos de ajuda entre professores e monitores em tempo real, que agilizaram a comunicação da faculdade.",tags:["React","Firebase","WebPack","TypeScript","Git"]},{tipo:"cartao",titulo:"Declarações de autenticidade",local:"SVT Faculdade",periodo:"2024",texto:"Emissão automática de declarações de autenticidade de certificados para os alunos, reduzindo o trabalho manual.",tags:["React.js","Firebase","TypeScript","Node.js"]},{tipo:"cartao",titulo:"PWA da corte portuguesa",local:"doutorado",periodo:"2024 – hoje",texto:"Mapa histórico interativo que funciona offline, com atualizações em tempo real, gestão de usuários e acessibilidade (cegos e Libras).",tags:["Vite","Leaflet","Firebase","TypeScript","Figma"]},{tipo:"cartao",titulo:"Portal interno da faculdade",local:"SVT Faculdade",periodo:"2024 – hoje",texto:"Gestão de TI e demandas: Gantt, calendário, regras do Firestore, funções na nuvem e um agente de telemetria dos computadores.",tags:["React","Firebase","Cloud Functions","Node.js"]},{tipo:"cartao",titulo:"Kanagawa Nami",local:"design system",periodo:"2023",texto:"Biblioteca de componentes no Figma que acelerou a prototipação e as entregas da startup.",tags:["Figma","React Native"]},{tipo:"links",itens:[{rotulo:"Portfólio",valor:"mais projetos e estudos",url:"portfolio",icone:"↗"}]}]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",blocos:[{tipo:"grupo",titulo:"Front-end",itens:["JavaScript","TypeScript","React","React Native","HTML","CSS","Bootstrap"]},{tipo:"grupo",titulo:"Back-end e dados",itens:["Node.js","PHP","APIs REST","JSON","Firebase"]},{tipo:"grupo",titulo:"Ferramentas",itens:["Git/GitHub","Webpack","Vite","VS Code","WordPress","HostGator","n8n"]},{tipo:"grupo",titulo:"Design e IA",itens:["Figma","UI","UX","Gemini","Claude Code","Codex"]},{tipo:"grupo",titulo:"Pessoas",itens:["Trabalho em equipe","Criatividade","Proatividade","Organização","Perseverança","Responsabilidade"]},{tipo:"cartao",titulo:"Formação e destaques",local:"",periodo:"2016 – 2019",texto:"Ensino Médio Técnico no IFMA (Campus Monte Castelo), finalista da 16ª FEBRACE (2018) e palestrante no EPIDE (2019).",tags:["IFMA","FEBRACE 2018","EPIDE 2019"]}]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",blocos:[{tipo:"texto",texto:"Estou aberto a boas conversas, projetos e oportunidades. O jeito mais rápido é por e-mail ou telefone."},{tipo:"links",itens:[{rotulo:"E-mail",valor:"mds.victorgabriel@gmail.com",url:"mailto",icone:"✉",copiar:"email"},{rotulo:"Telefone",valor:"(98) 98752-7469",url:"tel",icone:"☎",copiar:"telefone"},{rotulo:"GitHub",valor:"VictorGabrielmds",url:"github",icone:"↗"},{rotulo:"LinkedIn",valor:"VictorGabrielmds",url:"linkedin",icone:"↗"},{rotulo:"Portfólio",valor:"victorgabrielmds.github.io",url:"portfolio",icone:"↗"}]}]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.54,titulo:"Cassino da Sorte",blocos:[{tipo:"texto",texto:"Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade. Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito."},{tipo:"estatisticas",fonte:"cassino"},{tipo:"dica",texto:"Dica: pegue as fichas espalhadas pelo planeta para ganhar mais giros."}]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.54,titulo:"Nave Arcade",blocos:[{tipo:"texto",texto:"A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam de todos os lados. Cada um solta cristais de XP; tem rochas com itens, estrelas de poder, buracos negros com um alienígena e chefões."},{tipo:"estatisticas",fonte:"arcade"},{tipo:"dica",texto:"As moedas espaciais compram melhorias permanentes na Oficina da nave."}]}],Hs=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],io={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},xr=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),vr=(n,e,t)=>({copa:[n,e],copa2:t}),ao=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),Co=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:xr(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:xr(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:xr(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:xr(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:xr(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:xr(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:vr(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:vr(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:vr(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:vr(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:vr(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:vr(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:ao(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:ao(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:ao(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:ao(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:ao(2755082,16769162,16756843)}],vo=n=>Co.find(e=>e.id===n),GM=n=>Co.find(e=>e.cat===n&&e.padrao),VM=n=>"#"+n.toString(16).padStart(6,"0"),Ph="curriculo-cassino-v1",ro=10,kM=100,sd=50,Kc=9,Gn=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],Ih=5,HM=["comum","rara","epica","lendaria"];function WM(){const n={};for(const e of Hs)n[e.id]=GM(e.id).id;return{fichas:kM,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function XM(){const n=WM();try{const e=JSON.parse(localStorage.getItem(Ph));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>vo(a)):[],i={...n.equipadas};for(const a of Hs){const r=e.equipadas?.[a.id],s=r&&vo(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function qM(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,E)=>{i(E),t.fillRect(p,m,1,1)},r=(p,m,E,v)=>{i(v);for(let g=-E-1;g<=E+1;g++)for(let A=-E-1;A<=E+1;A++)A*A+g*g<=E*E+.5&&t.fillRect(p+A,m+g,1,1)},s=(p,m,E,v,g)=>{i(g);for(let A=0;A<16;A++)for(let P=0;P<16;P++){const y=(P+.5-p)/E,S=(A+.5-m)/v;y*y+S*S<=1&&t.fillRect(P,A,1,1)}},o=(p,m)=>{i(m);for(let E=0;E<16;E++)for(let v=0;v<16;v++){const g=v+.5,A=E+.5;let P=!1;for(let y=0,S=p.length-1;y<p.length;S=y++){const[T,I]=p[y],[_,w]=p[S];I>A!=w>A&&g<(_-T)*(A-I)/(w-I)+T&&(P=!P)}P&&t.fillRect(v,E,1,1)}},f=(p,m,E,v,g)=>{i(g);const A=Math.max(Math.abs(E-p),Math.abs(v-m));for(let P=0;P<=A;P++)t.fillRect(Math.round(p+(E-p)*P/A),Math.round(m+(v-m)*P/A),1,1)};switch(n){case"cereja":f(5,9,9,3,"#4f8a3a"),f(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const E=Math.PI/5*m-Math.PI/2,v=m%2===0?7:3;p.push([8+Math.cos(E)*v,8.5+Math.sin(E)*v])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const c=t.getImageData(0,0,16,16),u=c.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let ys=null,bs=null;function rl(){return ys??=new(window.AudioContext||window.webkitAudioContext),ys.state==="suspended"&&ys.resume(),ys}function Mi(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{const s=rl(),o=s.currentTime+r,f=s.createOscillator(),c=s.createGain();f.type=i,f.frequency.value=e,c.gain.setValueAtTime(a,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),f.connect(c).connect(s.destination),f.start(o),f.stop(o+t+.02)}catch{}}function Mr(n,e,t=.03,i=.07,a=0){if(n.som)try{const r=rl();if(!bs){bs=r.createBuffer(1,Math.floor(r.sampleRate*.4),r.sampleRate);const u=bs.getChannelData(0);for(let h=0;h<u.length;h++)u[h]=Math.random()*2-1}const s=r.currentTime+a,o=r.createBufferSource(),f=r.createBiquadFilter(),c=r.createGain();o.buffer=bs,f.type="bandpass",f.frequency.value=e,f.Q.value=1.4,c.gain.setValueAtTime(i,s),c.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(c).connect(r.destination),o.start(s,Math.random()*.3),o.stop(s+t+.02)}catch{}}function Zl(n,e=140,t=.14,i=.12,a=0){if(n.som)try{const r=rl(),s=r.currentTime+a,o=r.createOscillator(),f=r.createGain();o.type="sine",o.frequency.setValueAtTime(e,s),o.frequency.exponentialRampToValueAtTime(e*.4,s+t),f.gain.setValueAtTime(i,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(r.destination),o.start(s),o.stop(s+t+.02)}catch{}}function YM(n){if(!n.som)return null;try{const e=rl(),t=e.currentTime,i=e.createOscillator(),a=e.createBiquadFilter(),r=e.createGain();return i.type="sawtooth",i.frequency.setValueAtTime(46,t),i.frequency.linearRampToValueAtTime(84,t+.45),a.type="lowpass",a.frequency.value=240,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.045,t+.12),i.connect(a).connect(r).connect(e.destination),i.start(t),{sair(s=.4){const o=e.currentTime;r.gain.cancelScheduledValues(o),r.gain.setValueAtTime(.045,o),r.gain.linearRampToValueAtTime(1e-4,o+s),i.frequency.cancelScheduledValues(o),i.frequency.setValueAtTime(84,o),i.frequency.linearRampToValueAtTime(40,o+s),i.stop(o+s+.05)}}}catch{return null}}const Ui=()=>Gn[Math.floor(Math.random()*Gn.length)],Kl=()=>{let n=Math.random()*Gn.reduce((e,t)=>e+t.peso,0);for(const e of Gn)if(n-=e.peso,n<=0)return e;return Gn[0]},Lh=(n,e)=>Co.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function $M(n){for(const e of HM)if(Lh(n,e).length){const t=Gn.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function JM(n){let e=[Kl(),Kl(),Kl()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=Kc){const a=$M(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=Lh(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=Ih);return i}function ZM({aoMudarSkins:n,aoMudarFichas:e}){const t=XM(),i=()=>{try{localStorage.setItem(Ph,JSON.stringify(t))}catch{}},a=(K,Re,Le)=>{const O=document.createElement(K);return Re&&(O.className=Re),Le!=null&&(O.textContent=Le),O},r=Object.fromEntries(Gn.map(K=>[K.id,qM(K.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),f=a("button","cas-x","X");f.title="Fechar (Esc)";const c=a("div","cas-letreiro"),u=a("div","lampadas"),h=(K,Re)=>{const Le=a("i",K);return Le.style.setProperty("--i",Re),Le};for(let K=0;K<9;K++)u.append(h("lampada",K));c.append(u,a("h2",null,"CASSINO"),a("div","cas-sub","★ DA SORTE ★"));const d=a("div","cas-tela"),p=a("div","cas-janela"),m=[0,1,2].map(()=>a("div","rolo")),E=m.map(K=>{const Re=document.createElement("canvas");return Re.width=16,Re.height=48,K.append(Re),p.append(K),Re});p.append(a("i","linha-premio")),d.append(p,a("i","cas-vidro"));const v=a("div","cas-painel"),g=a("div","cas-lcd"),A=a("div","cas-msg","PUXE A ALAVANCA!"),P=a("div","cas-fichas"),y=a("b");P.append(a("i","moeda"),y,a("span",null,"FICHAS")),g.append(A,P);const S=a("div","cas-premio");S.hidden=!0;const T=a("div","cas-botoes"),I=(K,Re,Le,O=!1)=>{const ot=a("div","cas-bw"+(O?" grande":"")),Xe=a("i","led"),D=a("button",`cas-b3d ${Re}${O?" grande":""}`,K);return D.title=Le,ot.append(Xe,D),T.append(ot),{b:D,led:Xe}},{b:_,led:w}=I("?","azul","Tabela de prêmios"),{b:L,led:U}=I("SKINS","rosa","Coleção de skins (C)"),{b:V,led:q}=I("GIRAR","vermelho",`Girar (-${ro} fichas) · Espaço`,!0),{b:B,led:J}=I("SOM","amarelo","Ligar ou desligar o som");U.classList.add("on");const re=a("button","cas-b3d verde largo",`+${sd} FICHAS DE CORTESIA`);re.hidden=!0,T.append(re);const W=a("div","cas-luzes");for(let K=0;K<14;K++)W.append(h("",K));v.append(g,S,T,W);const ge=a("button","cas-alavanca");ge.title="Puxar a alavanca · Espaço";const se=a("i","braco");se.append(a("i","haste"),a("i","bola")),ge.append(a("i","suporte"),se);const ae=a("div","cas-bandeja");ae.append(a("i","fenda"));const de=a("div","cas-tabela");de.hidden=!0;for(const K of Gn){const Re=a("div","cas-linha"),Le=r[K.id].cloneNode();Le.getContext("2d").drawImage(r[K.id],0,0),Re.append(Le,a("span",null,`x3 = ${K.premio}`),a("small",null,io[K.tier].nome.toLowerCase())),de.append(Re)}de.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${Ih} · a cada ${Kc+1} giros sem trio, o próximo é garantido`)),o.append(f,c,d,v,ge,ae,de,a("p","cas-nota","ganhe skins para o planeta, as árvores e o céu"));const tt=a("div","cas-colecao-caixa");tt.hidden=!0;const He=a("div","cas-colecao");tt.append(He),s.append(o,tt),document.body.append(s);let vt=!1,ut=!1,pt=!1;function ce(K,Re,Le){const O=E[K].getContext("2d");O.clearRect(0,0,16,48);const ot=Math.floor(Le),Xe=Le-ot;for(let D=0;D<4;D++){const b=Re[ot+D];b&&O.drawImage(r[b.id],0,Math.round((D-Xe)*16))}}const he=(K,Re)=>ce(K,Re,0);function Pe(){y.textContent=String(t.fichas),e?.(t.fichas);const K=t.fichas<ro;V.disabled=ut||K,ge.disabled=ut||K,re.hidden=!K||ut,B.classList.toggle("apagado",!t.som),J.classList.toggle("on",t.som),q.classList.toggle("on",!ut&&!K),w.classList.toggle("on",!de.hidden),o.classList.toggle("girando",ut),o.classList.toggle("pronto",!ut&&!K),o.classList.toggle("sem-ficha",K)}function st(K,Re=""){A.textContent=K,A.className="cas-msg "+Re}function Ye(){He.replaceChildren();const K=a("div","cas-cabecalho"),Re=Co.filter(O=>!O.padrao).length,Le=a("button","cas-btn","VOLTAR");Le.onclick=()=>ct(!1),K.append(a("h3",null,`SKINS (${t.skins.length}/${Re})`),Le),He.append(K);for(const O of Hs){He.append(a("h4",null,O.nome.toUpperCase()));const ot=a("div","cas-grade");for(const Xe of Co.filter(D=>D.cat===O.id)){const D=Xe.padrao||t.skins.includes(Xe.id),b=t.equipadas[O.id]===Xe.id,Y=a("div","cas-card"+(b?" equipada":"")+(D?"":" bloqueada"));Y.style.setProperty("--r",io[Xe.raridade].cor);const Z=a("div","amostra"),le=O.id==="planeta"?[Xe.cores.marFundo,Xe.cores.marRaso,Xe.cores.areia,Xe.cores.grama0,Xe.cores.grama2]:O.id==="arvores"?[Xe.cores.copa[0],Xe.cores.copa[1],Xe.cores.copa2]:[Xe.cores.fundo,Xe.cores.estrelas,Xe.cores.nuvens];for(const Ae of le){const ne=a("i");ne.style.background=D?VM(Ae):"#2a2440",Z.append(ne)}Y.append(Z,a("b",null,D?Xe.nome:"???"),a("small",null,io[Xe.raridade].nome));const Me=a("button","cas-btn pequeno",b?"EQUIPADA":D?"EQUIPAR":"TRAVADA");Me.disabled=!D||b,Me.onclick=()=>Ie(Xe),Y.append(Me),ot.append(Y)}He.append(ot)}}function Ie(K){t.equipadas[K.cat]=K.id,i(),n({...t.equipadas}),Mi(t,660,.06),pt&&Ye()}function ct(K){pt=K,o.hidden=K,tt.hidden=!K,K?Ye():V.focus()}function fe(K=0){if(!vt||ut||t.fichas<ro)return;t.fichas-=ro,t.giros+=1;const Re=JM(t);ut=!0,S.hidden=!0,p.classList.remove("vitoria"),o.classList.remove("vitoria"),st("GIRANDO..."),Pe();const Le=[Ui(),Ui(),Ui()],O=[Ui(),Ui(),Ui()];for(const Me of[Le,O])Me[0]===Me[1]&&Me[1]===Me[2]&&(Me[2]=Gn[(Gn.indexOf(Me[2])+1)%Gn.length]);const ot=14,Xe=450,D=[1100,1600,2100],b=D.map(Me=>Math.round(ot*(Me-Xe)/1e3)+3),Y=Re.simbolos.map((Me,Ae)=>{const ne=[Le[Ae],Me,O[Ae]];for(;ne.length<b[Ae]+3;)ne.push(Ui());return ne}),Z=(Me,Ae)=>{const ne=D[Me]-Xe;return Ae<ne?b[Me]-ot*Ae/1e3:3*(1-Math.min(1,(Ae-ne)/Xe))**3},le=()=>{const Me=performance.now(),Ae=[!1,!1,!1],ne=[-1,-1,-1];let pe=!1;const Ve=YM(t);for(const De of m)De.classList.add("girando");const je=De=>{const Oe=Math.max(0,De-Me);for(let qe=0;qe<3;qe++)if(!Ae[qe])if(Oe>=D[qe])Ae[qe]=!0,m[qe].classList.remove("girando"),ce(qe,Y[qe],0),Zl(t,150-qe*12,.13,.11),Mr(t,1100+qe*350,.06,.09),Mi(t,330+qe*110,.1,"square",.025);else{const it=Z(qe,Oe);ce(qe,Y[qe],it);const Ge=Math.floor(it);Ge!==ne[qe]&&(ne[qe]>=0&&Mr(t,1500+qe*450,.022,.05),ne[qe]=Ge)}!pe&&Oe>=D[2]-Xe&&(pe=!0,Ve?.sair(Xe/1e3+.1)),Ae.every(Boolean)?Te(Re):requestAnimationFrame(je)};requestAnimationFrame(je)};K>0?setTimeout(le,K):le()}function xe(K){const Re=Math.min(10,Math.max(2,Math.ceil(K/25)));for(let Le=0;Le<Re;Le++){const O=a("i","moeda caindo");O.style.left=`${14+Math.random()*68}%`,O.style.animationDelay=`${Le*.09}s`,O.addEventListener("animationend",()=>O.remove()),ae.append(O),Mr(t,3400+Math.random()*900,.04,.05,.55+Le*.09)}}function Te(K){if(ut=!1,t.fichas+=K.fichas,t.semTrio=K.tipo==="trio"?0:t.semTrio+1,K.skin&&t.skins.push(K.skin.id),i(),K.fichas>0&&xe(K.fichas),K.tipo==="trio"?(st(`TRIO! +${K.fichas}`,"ganhou"),p.classList.add("vitoria"),o.classList.add("vitoria"),[523,659,784,1047].forEach((Re,Le)=>Mi(t,Re,.14,"square",.05,Le*.11))):K.tipo==="par"?(st(`PAR! +${K.fichas}`,"par"),Mi(t,523,.1),Mi(t,659,.1,"square",.04,.1)):st(t.semTrio>=Kc?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),K.skin){S.replaceChildren(),S.style.setProperty("--r",io[K.skin.raridade].cor);const Re=Hs.find(O=>O.id===K.skin.cat).nome;S.append(a("b",null,"NOVA SKIN!"),a("span",null,`${Re}: ${K.skin.nome} (${io[K.skin.raridade].nome})`));const Le=a("button","cas-mini","EQUIPAR");Le.onclick=()=>{Ie(K.skin),Le.disabled=!0,Le.textContent="OK"},S.append(Le),S.hidden=!1,[784,988,1175,1568].forEach((O,ot)=>Mi(t,O,.18,"triangle",.06,.5+ot*.12))}Pe()}function we(){if(!(!vt||ut||t.fichas<ro)){ge.classList.add("puxada"),o.classList.add("puxando"),setTimeout(()=>{ge.classList.remove("puxada"),o.classList.remove("puxando")},1150);for(let K=0;K<5;K++)Mr(t,2600-K*150,.03,.07,.07+K*.045);Zl(t,95,.2,.15,.34),Mr(t,900,.07,.1,.34),Zl(t,330,.1,.05,.76),Mr(t,2200,.05,.06,.9),fe(360)}}function Se(){vt||(vt=!0,s.classList.add("aberto"),de.hidden=!0,ct(!1),Pe(),V.focus())}function R(){!vt||ut||(vt=!1,s.classList.remove("aberto"))}V.onclick=()=>fe(),ge.onclick=we,_.onclick=()=>{de.hidden=!de.hidden,Pe()},L.onclick=()=>ct(!0),f.onclick=R,re.onclick=()=>{t.fichas+=sd,i(),Pe(),st("FICHAS DE CORTESIA!"),Mi(t,880,.1)},B.onclick=()=>{t.som=!t.som,i(),Pe(),Mi(t,660,.06)},s.addEventListener("pointerdown",K=>{K.target===s&&R()}),window.addEventListener("keydown",K=>{vt&&(K.code==="Escape"?(K.preventDefault(),pt?ct(!1):R()):K.code==="Space"&&!pt&&![L,_,B,re,f].includes(document.activeElement)?(K.preventDefault(),we()):K.code==="KeyC"&&(K.preventDefault(),ct(!pt)))},!0);for(let K=0;K<3;K++)he(K,[Ui(),Gn[K*2%Gn.length],Ui()]);return Pe(),n({...t.equipadas}),{abrir:Se,fechar:R,estaAberto:()=>vt,adicionarFichas:K=>{t.fichas+=K,i(),Pe()},bip:(...K)=>Mi(t,...K),somAtivo:()=>t.som,alternarSom:()=>(t.som=!t.som,i(),Pe(),t.som&&Mi(t,660,.06),t.som)}}function _n(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,f,c){a(c),i.fillRect(r,s,o,f)},disco(r,s,o,f){a(f);for(let c=-o-1;c<=o+1;c++)for(let u=-o-1;u<=o+1;u++)u*u+c*c<=o*o+.5&&i.fillRect(r+u,s+c,1,1)},elipse(r,s,o,f,c){a(c);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/f;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=f+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,E]=r[d],[v,g]=r[p];E>u!=g>u&&c<(v-m)*(u-E)/(g-E)+m&&(h=!h)}h&&i.fillRect(f,o,1,1)}},linha(r,s,o,f,c){a(c);const u=Math.max(Math.abs(o-r),Math.abs(f-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(f-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,f=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,c=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!f(h,u)&&(f(h+1,u)||f(h-1,u)||f(h,u+1)||f(h,u-1))&&c.push([h,u]);a(r);for(const[u,h]of c)i.fillRect(u,h,1,1);return this}}}function Ef(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function Dt(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const ld=n=>n*n*(3-2*n);function Hn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=ld(n-i),s=ld(e-a),o=Dt(i,a,t),f=Dt(i+1,a,t),c=Dt(i,a+1,t),u=Dt(i+1,a+1,t);return o+(f-o)*r+(c-o)*s+(o-f-c+u)*r*s}const Af=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Dh=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function KM(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=_n(a,r),o=a/2,f=r/2,c=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(f+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};c(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(Dt(d,e,1)-.5)*1.3,y:(Dt(d,e,2)-.5)*1.3,r:.12+Dt(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-f)/t,E=p*p+m*m;if(E>1)continue;const v=Math.sqrt(1-E),A=p*-.5+m*-.55+v*.67+(Af[h%4*4+d%4]-.5)*.24;let P=A<.1?0:A<.4?1:A<.68?2:3,y=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+Hn(p*1.6+e,m*3,5)*2.2)>.15&&(y=n.palB),n.terra&&Hn(p*2.4+e,m*2.4,7)>.52&&(y=n.palB);let S;n.nuvens&&Hn(p*3+e,m*3,9)>.62&&(S=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][P]),u.some(T=>(p-T.x)**2+(m-T.y)**2<T.r*T.r)&&(P=Math.max(0,P-1)),n.lava&&Math.abs(Hn(p*3.2+e,m*3.2,11)-.5)<.035&&(S=P>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,S||y[P])}return c(!0),s.contorno("#0b1026").c}const QM=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],jM=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],e_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],vn=(n,e,t)=>(Hn(n,e,t)*.5+Hn(n*2,e*2,t+1)*.25+Hn(n*4,e*4,t+2)*.125+Hn(n*8,e*8,t+3)*.0625)/.9375;function zn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=t(f,o,(f+.5)/n*2-1,(o+.5)/e*2-1);if(!c)continue;const u=Math.min(f,n-1-f,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<Af[o%4*4+f%4])continue;const h=(o*n+f)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=c[3]}return a.putImageData(r,0,0),i}const Mn=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(Af[t%4*4+e%4]-.5)*.9+.5))),An=(n,e,t)=>[...n[t-1],e[t-1]];function oi(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function Ql(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(Dt(r,t,1)*n.width),Math.floor(Dt(r,t,2)*n.height),1,1)}function t_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[f,c]=n[r];o>t!=c>t&&e<(f-s)*(t-o)/(c-o)+s&&(i=!i)}return i}const n_={orion(){const n=zn(150,112,(e,t,i,a)=>{const r=i*1.18+(vn(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(vn(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),f=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),c=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=vn(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=Mn(Math.min(1,(o*.9+f+c)*(.3+u*1.2)+h),e,t,5);return d?An([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});Ql(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])oi(n,e,t,1);return oi(n,.2,.2,3,"#bcd0ff"),oi(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=zn(130,124,(t,i,a,r)=>{for(let c=0;c<n.length;c++){const u=n[c],h=(vn(r*2.5+c*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(vn(a*6+c,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const E=(u.cx+h+d-a)/(2*d),v=vn(a*9,r*9,70),g=E<.14+v*.12?[235,160,70]:E<.32+v*.12?[160,85,50]:[58+v*30,30+v*16,26+v*10];return[g[0],g[1],g[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const E=Mn((.16-m)/.16*.9,t,i,3);if(E)return An([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],E)}}const s=vn(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),f=Mn(o,t,i,3);return f?An(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],f):null});return Ql(e,25,9),oi(e,.49,.13,2,"#bff6ff"),oi(e,.24,.4,1,"#ffe0b0"),oi(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=zn(110,104,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(o/.92,f/.74);if(c>1||c>.78&&Hn(o*9,f*9,93)<(c-.78)*4.5)return null;const u=1-Math.abs(Hn(o*8+3,f*8,90)-.5)*2,h=1-Math.abs(Hn(o*14,f*14+5,91)-.5)*2;if(u>.85&&c>.3)return[255,130,55,240];if(h>.92&&c>.2)return[120,200,255,220];const d=Mn((1-c)*.7*(.4+vn(o*3,f*3,92)),i,a,3);return d?An([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return oi(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=zn(112,112,(t,i,a,r)=>{if(t_(n,t+.5,i+.5))return[10,5,18,255];const s=vn(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),f=Mn(o,t,i,4);return f?An([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],f):null});return Ql(e,30,13),oi(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return zn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,f=Math.hypot(s,o),c=Math.atan2(o,s),u=.5+.5*Math.sin(2*c-f*10),h=Math.max(0,1-f)*(.25+.75*u)*(.5+vn(s*4,o*4,110)),d=Math.abs(f-.55)<.06?.5*Hn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-f*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=Mn(p,t,i,5);return m?An([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return zn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*Hn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=Mn(a*1.1+r+s,n,e,5);return o?An([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=zn(110,100,(t,i,a,r)=>{let s=0;for(const[f,c,u]of n)s+=Math.exp(-Math.hypot((t/110-f)*1.1,i/100-c)/.14*(7-u*.4));const o=Mn(Math.min(1,s*(.4+vn(a*3,r*3,125))),t,i,4);return o?An([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)oi(e,t,i,a,"#cfe0ff");return e},helice(){const n=zn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*vn(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*vn(i*6,a*6,121),f=Math.exp(-(((r-.62)/.13)**2)),c=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=Mn(Math.min(1,(f+c+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return oi(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=zn(150,100,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(r,s),u=Math.exp(-((f/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*vn(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-c*9),m=Mn(Math.min(1,p+u+h+d),i,a,5);return m?An([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return oi(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(zn(180,110,(s,o)=>{const f=s+.5-90,c=o+.5-55,u=Math.hypot(f,c);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=vn(f*.06-r*.18,c*.4,140);let d=0;const p=5.5*(1-Math.abs(f)/95);if(Math.abs(f)>17&&Math.abs(f)<90&&Math.abs(c)<p&&(d=1-Math.abs(c)/p),u>19.5&&u<36&&c<0&&Math.abs(c)>Math.abs(f)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&c>0&&c>Math.abs(f)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const v=Mn(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return v?An([[90,30,15],[150,60,25]],[40,70],v):null}const m=.55+.45*(-f/95),E=Mn(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return E?An([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],E):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),f=Math.cos(.5),c=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,E,v,g])=>{let A=m*s-g*o;const P=m*o+g*s;let y=E*f-v*c,S=E*c+v*f;const T=A*u+S*h;S=-A*h+S*u,A=T;const I=2.6/(2.6-P*.9),_=3.6/(3.6-S*I*.7);return{x:124/2+A*I*_*19,y:124/2+y*I*_*19,w:P}}),p=_n(124,124);for(const[m,E]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${E})`);for(const[m,E]of i){const v=(d[m].w+d[E].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[E].x),Math.round(d[E].y),v>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),f=Math.sin(s);a.push(zn(150,150,(c,u)=>{const h=c+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*f,E=-h*f+d*o,v=1.1+.07*Math.abs(m),g=Math.abs(m)<70?Math.exp(-((E/v)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,A=Math.exp(-p/11)*.8,P=Math.abs(p-34)<.8?.35:0,y=Mn(Math.min(1,g+A+P),c,u,5);return y?An([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],y):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(zn(120,120,(s,o)=>{const f=s+.5-60,c=o+.5-60,u=Math.hypot(f,c),h=Math.atan2(c,f);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const E=Mn(Math.exp(-(u-47.5)/3)*.55,s,o,2);return E?An([[120,90,220],[190,160,255]],[60,110],E):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=Mn(Math.min(1,p),s,o,4);return An([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+Dt(s,150,1)*146,10+Dt(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,f],[c,u])=>{const h=c-o,d=u-f,p=Math.max(0,Math.min(1,((r-o)*h+(s-f)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(f+d*p))};return zn(170,124,(r,s,o,f)=>{let c=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);c+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+vn(r*.2,s*.2,151))}for(const[h,d]of t)c+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=Mn(Math.min(1,c),r,s,4);return u?An([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},i_={},a_=n=>i_[n]??=n_[n](),Ir=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let r_=null;const Nh=()=>r_??=Dh.map((n,e)=>KM(n,e*13+3));function o_(n,e){const t=Nh(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,f=-1,c=1;function u(m){if(c<1&&(c=Math.min(1,c+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const E=.35+Math.random()*.3,v=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(E)*v,vy:Math.sin(E)*v,vida:0,max:1.4})}for(const E of r)E.x+=E.vx*m,E.y+=E.vy*m,E.vida+=m;r=r.filter(E=>E.vida<E.max&&E.x<n+20&&E.y<e+20)}function h(m,E,v,g,A,P){const y=m*v,S=E*v,T=Math.floor((y-n/2-A)/g),I=Math.floor((y+n/2+A)/g),_=Math.floor((S-e/2-A)/g),w=Math.floor((S+e/2+A)/g);for(let L=_;L<=w;L++)for(let U=T;U<=I;U++)P(U,L,U*g-y+n/2,L*g-S+e/2)}function d(m,E,v,g,A){const P=Ir[A%Ir.length],y=A%Ir.length;m.fillStyle=P.base,m.fillRect(0,0,n,e),h(E,v,.06,400,160,(S,T,I,_)=>{if(Dt(S,T,90+y)>.7)return;const w=70+Dt(S,T,91)*80,L=P.nebulosas[Math.floor(Dt(S,T,92)*P.nebulosas.length)],U=I+Dt(S,T,93)*400,V=_+Dt(S,T,94)*400;for(let q=0;q<5;q++)m.fillStyle=`rgba(${L}, 0.07)`,m.beginPath(),m.arc(Math.round(U),Math.round(V),Math.max(0,w*(1-q*.18)),0,Math.PI*2),m.fill()}),h(E,v,.1,360,170,(S,T,I,_)=>{if(Dt(S,T,200+y*3)>.8)return;const w=a_(P.objetos[Math.floor(Dt(S,T,201)*P.objetos.length)]),L=Array.isArray(w)?w[Math.floor(g*w.fps+Dt(S,T,204)*w.length)%w.length]:w,U=I+(.1+Dt(S,T,202)*.6)*360,V=_+(.1+Dt(S,T,203)*.6)*360;m.globalAlpha=.92,m.drawImage(L,Math.round(U-L.width/2),Math.round(V-L.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${P.tom}, 0.05)`,m.fillRect(0,0,n,e),jM.forEach((S,T)=>{m.globalAlpha=S.alfa,h(E,v,S.f,S.cel,130,(I,_,w,L)=>{if(Dt(I,_,S.semente)>S.prob*(P.planetas??1))return;const U=Math.floor(Dt(I,_,S.semente+1)*t.length),V=S.escalaMax>1&&Dh[U].r<=15&&Dt(I,_,S.semente+2)<.4?2:1,q=t[U],B=w+(.15+Dt(I,_,S.semente+3)*.7)*S.cel,J=L+(.15+Dt(I,_,S.semente+4)*.7)*S.cel;m.drawImage(q,Math.round(B-q.width*V/2),Math.round(J-q.height*V/2),q.width*V,q.height*V)});for(const I of e_){if(I.camada!==T)continue;const _=t[I.tipo],w=I.x-E*S.f+n/2,L=I.y-v*S.f+e/2;m.drawImage(_,Math.round(w-_.width*I.escala/2),Math.round(L-_.height*I.escala/2),_.width*I.escala,_.height*I.escala)}m.globalAlpha=1});for(const S of QM)h(E,v,S.f,S.cel,4,(T,I,_,w)=>{for(let L=0;L<S.n;L++){const U=Math.round(_+Dt(T,I,L*7+1)*S.cel),V=Math.round(w+Dt(T,I,L*7+2)*S.cel);if(U<-2||U>n+2||V<-2||V>e+2)continue;const q=S.cores[Math.floor(Dt(T,I,L*7+3)*S.cores.length)],B=Dt(T,I,L*7+4)*6.28,J=1+Dt(T,I,L*7+5)*2.2;(!S.pisca||Math.sin(g*J+B)>-.35)&&(m.fillStyle=q,m.fillRect(U,V,1,1),S.grande&&Dt(T,I,L*7+6)<S.grande&&(m.fillRect(U-1,V,3,1),m.fillRect(U,V-1,1,3)))}})}function p(m,E,v,g,A=0){A!==o&&(f=o,o=A,c=f<0?1:0),c<1&&f>=0?(d(m,E,v,g,f),d(a,E,v,g,o),m.globalAlpha=c,m.drawImage(i,0,0),m.globalAlpha=1):d(m,E,v,g,o);for(const P of r){const y=1-P.vida/P.max;for(let S=0;S<12;S++){const T=Math.round(P.x-P.vx*S*.011),I=Math.round(P.y-P.vy*S*.011);m.globalAlpha=Math.max(0,y*(1-S/12)),m.fillStyle=S<2?"#ffffff":"#8bd3ff",m.fillRect(T,I,S<2?2:1,S<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const In=520,La=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function s_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const E=m.getContext("2d");return E.drawImage(p,0,0),E.globalCompositeOperation="source-atop",E.fillStyle="rgba(70, 40, 110, 0.55)",E.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},E=P=>La(d,p,300+P),v=d*In,g=p*In;if(E(1)>=.5)return m;const A=E(2);if(A<.22){const P=Nh(),y=Math.floor(E(3)*P.length),S=P[y],T=(S.height-2)/2,I=T>=13?2:3,_=v+90+E(4)*(In-180),w=g+90+E(5)*(In-180);if(r(_,w,70)){const L=T*I*.92;m.planetas.push({x:_,y:w,spr:S,esc:I}),m.circ.push({x:_,y:w,r:L})}}else if(A<.62){const P=E(5)*Math.PI*2,y=150+E(6)*130,S=(E(7)-.5)*70,T=v+120+E(8)*(In-240),I=g+120+E(9)*(In-240),_=(.2+.6*E(10))*y,w=E(11)<.5?(_/y+.4)%1*y:-999,L=Math.floor(y/13);for(let U=0;U<=L;U++){const V=U/L,q=V*y;if(Math.abs(q-_)<24||Math.abs(q-w)<24)continue;const B=Math.sin(V*Math.PI)*S,J=T+Math.cos(P)*q-Math.sin(P)*B,re=I+Math.sin(P)*q+Math.cos(P)*B;if(!r(J,re,10))continue;const W=La(d*31+U,p,330)<.6?0:1,ge=[8,10][W];m.rochas.push({x:J,y:re,tam:W}),m.circ.push({x:J,y:re,r:ge*.85})}}else{const P=70+E(11)*50,y=v+P+E(12)*(In-2*P),S=g+P+E(13)*(In-2*P);if(r(y,S,P)){const T=Array.from({length:34},(I,_)=>{const w=La(d,p,400+_)*Math.PI*2,L=Math.sqrt(La(d,p,440+_))*P*.95;return{dx:Math.cos(w)*L,dy:Math.sin(w)*L,tam:1+Math.floor(La(d,p,480+_)*3),cor:La(d,p,520+_)<.5?"#9a8a7a":"#6a5a50",fase:La(d,p,560+_)*6.28}});m.zonas.push({x:y,y:S,r:P,pedrinhas:T})}}return m}const o=(d,p)=>{const m=d+","+p;let E=i.get(m);return E||(E=s(d,p),i.set(m,E)),E};function f(d,p,m){const E=Math.floor(d/In),v=Math.floor(p/In);for(let g=-1;g<=1;g++)for(let A=-1;A<=1;A++)m(o(E+A,v+g))}function c(d,p){let m=1;return f(d,p,E=>{for(const v of E.zonas)Math.hypot(d-v.x,p-v.y)<v.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,E=0){let v=!1;return f(d.x,d.y,g=>{for(const A of g.circ){const P=d.x-A.x,y=d.y-A.y,S=A.r+p;if(Math.abs(P)>S||Math.abs(y)>S)continue;const T=Math.hypot(P,y)||.001;if(T>=S)continue;const I=P/T,_=y/T;if(d.x=A.x+I*S,d.y=A.y+_*S,v=!0,m&&E>0){const w=-_,L=I,U=Math.sign((m.x-d.x)*w+(m.y-d.y)*L)||((d.fase||0)>3?1:-1);d.x+=w*U*E,d.y+=L*U*E}}}),v}function h(d,p,m,E,v,g){const A=Math.floor((p-200)/In),P=Math.floor((p+E+200)/In),y=Math.floor((m-200)/In),S=Math.floor((m+v+200)/In),T=(I,_,w)=>I>p-w&&I<p+E+w&&_>m-w&&_<m+v+w;for(let I=y-1;I<=S+1;I++)for(let _=A-1;_<=P+1;_++){const w=o(_,I);for(const L of w.zonas)if(T(L.x,L.y,L.r+10)){for(let U=0;U<4;U++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r*(1-U*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),L.r,0,Math.PI*2),d.stroke(),d.restore();for(const U of L.pedrinhas)d.fillStyle=U.cor,d.fillRect(Math.round(L.x+U.dx+Math.sin(g*.6+U.fase)*2),Math.round(L.y+U.dy+Math.cos(g*.5+U.fase)*2),U.tam,U.tam)}for(const L of w.planetas)T(L.x,L.y,L.spr.width*L.esc)&&(d.drawImage(L.spr,Math.round(L.x-L.spr.width*L.esc/2),Math.round(L.y-L.spr.height*L.esc/2),L.spr.width*L.esc,L.spr.height*L.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(L.x),Math.round(L.y),(L.spr.height-2)/2*L.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const L of w.rochas){if(!T(L.x,L.y,20))continue;const U=a[L.tam];d.drawImage(U,Math.round(L.x-U.width/2),Math.round(L.y-U.height/2))}}}return{fatorLento:c,empurrar:u,desenhar:h,celula:o}}const Si="#0b1026",Ws=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],ha=n=>({quadros:n,brancos:n.map(Ef)});function l_(n){const e=Ws[n%Ws.length],t=(c,u,h,d)=>{c.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),c.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=ha([0,1].map(c=>{const u=_n(16,16),h=c?10:9.5;if(u.elipse(8,h,c?6.5:6,c?3.6:4.3,e.slime[0]),u.elipse(8,c?11:10.8,c?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,c?7:6,e.slime[1]);return e.chifres&&t(u,4,10,c?3:2),u.retangulo(4,c?8:7,2,2,e.olho),u.retangulo(9,c?8:7,2,2,e.olho),u.pixel(5,c?9:8,"#1b1020"),u.pixel(10,c?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,c?6:5,2,2,e.olho),u.pixel(8,c?7:6,"#1b1020")),u.contorno(Si).c})),a=ha([0,1].map(c=>{const u=_n(18,16),h=c?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(Si).c})),r=ha([0,1].map(c=>{const u=_n(20,20);u.disco(10,12+c,7,e.ogro[0]),u.disco(10,13+c,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+c],[5,1+c],[7,7+c]],h),u.poligono([[13,7+c],[15,1+c],[17,7+c]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+c,e.ogro[1]);return u.retangulo(5,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+c,"#1b1020"),u.pixel(11,11+c,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+c,2,2,e.olho),u.pixel(10,9+c,"#1b1020")),u.retangulo(7,15+c,6,2,"#1b1020"),u.pixel(8,15+c,"#ffffff"),u.pixel(11,15+c,"#ffffff"),u.contorno(Si).c})),s=ha([0,1].map(c=>{const u=_n(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+c)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(Si).c})),o=ha([0,1].map(c=>{const u=_n(16,17);return u.pixel(8,0,c?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(Si).c})),f=ha([0,1].map(c=>{const u=_n(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=c?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(Si).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:f}}function c_(n){const e=Ws[n%Ws.length];return ha([0,1].map(t=>{const i=_n(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(Si).c}))}function f_(){return ha([0,1].map(n=>{const e=_n(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(Si).c}))}function jl(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function u_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,f)=>{const c=f/11*Math.PI*2,u=n*(.8+jl(e*7+1,f)*.35);return[i+Math.cos(c)*u,a+Math.sin(c)*u]}),s=(o,f,c)=>r.map(([u,h])=>[i+(u-i)*o+f,a+(h-a)*o+c]);return{r:n,quadros:[0,1,2].map(o=>{const f=_n(t,t);f.poligono(r,"#5a606c"),f.poligono(s(.88,-.7,-.7),"#7a808d"),f.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let c=0;c<3+e;c++)f.disco(Math.round(i+(jl(e,c+20)-.5)*n*1.2),Math.round(a+(jl(e,c+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(f.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),f.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(f.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),f.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),f.contorno(Si).c})}})}function d_(){const n=t=>{const i=_n(12,12);return t(i),i.contorno(Si).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,f=s%2?a:i;return[6+Math.cos(o)*f,6+Math.sin(o)*f]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function h_(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let f=-r;f<=r;f++)for(let c=-r;c<=r;c++){const u=Math.hypot(c,f);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(f,c)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+c,o+f,1,1)}n.globalAlpha=1}const Qc="#0b1026",p_=n=>({quadros:n,brancos:n.map(Ef)}),xt=(n,e,t)=>p_([0,1].map(i=>{const a=_n(n,e);return t(a,i),a.contorno(Qc).c})),m_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((f,c)=>{const u=t[f];u&&n.retangulo(a+c*i,r+o*i,i,i,u)})),ca=(n,e,t,i,a,r=1,s=0,o=0)=>xt(n,e,(f,c)=>m_(f,c?i:t,a,r,s,o)),ya=(n,e)=>n.map(([t,i])=>[e-1-t,i]),Uh=(n,e,t,i)=>e.forEach(([a,r,s,o],f)=>n.linha(a,r,s+((f+t)%2?1:0),o,i)),cd=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],fd=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function g_(){const n=f=>({x:f,y:"#ffffff"}),e=ca(16,12,cd,fd,n("#5be37a"),1,2,2),t=ca(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=ca(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=ca(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=ca(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=ca(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=ca(56,38,cd,fd,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function x_(){const n=ca(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=xt(18,14,(o,f)=>{const c=f?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=f?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(c,"#a56bff"),o.poligono(ya(c,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(ya(u,18),"#d1b0ff"),o.disco(f?4:3,f?10:4,1,"#ffe14a"),o.disco(f?13:14,f?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=xt(20,18,(o,f)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const c of[0,1,2]){const u=8+c*3;o.linha(3,u,1,u+1+(f?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(f?0:2),"#1b2a2a")}}),i=xt(14,17,(o,f)=>{const c=f?1:0;o.elipse(3,6+c,3,1.6,"#bfe6ff"),o.elipse(10,6+c,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=xt(16,17,(o,f)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,f?"#ff3b4a":"#ffd23f"),o.pixel(10,2,f?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,Qc),o.pixel(13,7,Qc),Uh(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],f,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=xt(12,10,(o,f)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const c=f?4:1;o.elipse(2.5,c+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,c+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=xt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*6;o.linha(10,u,2,u+6+(f?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(f?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(f?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(f?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,f?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,f?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function v_(){const n=xt(16,16,(o,f)=>{const c=f?0:1;o.disco(8,10+c,6,"#f4efe0"),o.disco(8,10+c,4,"#ff9a3a"),o.disco(8,10+c,2,"#f4efe0"),o.pixel(4,8+c,"#ff9a3a"),o.disco(9,3+c,3,"#f4efe0"),o.pixel(10,3+c,"#1b1020"),o.pixel(10,4+c,"#1b1020"),o.retangulo(7,2+c,4,1,"#8b93a8"),o.linha(8,0+c,8,1+c,"#8b93a8")}),e=xt(18,16,(o,f)=>{const c=f?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-c/2],[1,7-c/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-c/2],[17,7-c/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+c/2],[1,11+c/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+c/2],[17,11+c/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-c/2],[16,5-c/2],[1,10+c/2],[16,10+c/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=xt(20,20,(o,f)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const c of[7,14]){const u=f?1:-1;o.retangulo(c,10,2,5,"#aab3c8"),o.retangulo(c+u,15,2,4,"#8b93a8"),o.retangulo(c+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=xt(14,17,(o,f)=>{const c=f?1:0;o.disco(7+c,6,5,"#f4f4fa"),o.poligono([[3+c,5],[6+c,5],[5+c,8],[3+c,7]],"#1b1020"),o.poligono([[11+c,5],[8+c,5],[9+c,8],[11+c,7]],"#1b1020"),o.retangulo(6+c,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=xt(16,17,(o,f)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+f,"#ffd23f"),o.retangulo(12,14,2,2+f,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,f?"#ff3b4a":"#ffd23f")}),r=xt(12,11,(o,f)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,f?"#8bd3ff":"#ffffff")}),s=xt(56,38,(o,f)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let c=12;c<44;c+=4)o.pixel(c,22,"#5a6176"),o.pixel(c+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,f?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[c,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(c,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,f?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function M_(){const n=xt(16,14,(o,f)=>{for(let c=0;c<5;c++)o.disco(3+c*2,9+Math.round(Math.sin(c*1.2+f*2.4)*2),2,c%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=xt(18,16,(o,f)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const c=f?0:1;o.retangulo(8+c,0,1,2,"#ffffff"),o.retangulo(8+c,14,1,2,"#ffffff"),o.retangulo(0,8-c,2,1,"#ffffff"),o.retangulo(16,8-c,2,1,"#ffffff")}),t=xt(22,18,(o,f)=>{Uh(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],f,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,f?5:6,0,"#4a2a10"),o.linha(13,2,f?17:16,0,"#4a2a10")}),i=xt(14,17,(o,f)=>{const c=f?1:0;o.elipse(7,6+c,5.5,6,"#a8b0b8"),o.elipse(7,4+c,4,3,"#c0c8d0"),o.poligono([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],"#0b1026"),o.poligono(ya([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],14),"#0b1026"),o.retangulo(6,14+c,2,3,"#8a929a"),o.retangulo(4,12+c,6,2,"#8a929a"),o.pixel(3,6+c,"#ffffff"),o.pixel(10,6+c,"#ffffff")}),a=xt(16,17,(o,f)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,f?"#ffffff":"#8bd3ff"),o.pixel(14,7,f?"#8bd3ff":"#ffffff")}),r=xt(12,8,(o,f)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const c of[3,5,7])o.pixel(c+(f?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=xt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*5;o.linha(12,u,2,u+8+(f?3:0),"#3a2008"),o.linha(44,u,54,u+8+(f?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(f?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(f?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,f?12:16,0,"#4a2a10"),o.linha(32,3,f?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function __(){const n=xt(14,16,(o,f)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const c=f?3:1;o.poligono([[2,6],[4,6-c],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-c],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-c],[9,5]],"#a09060"),f&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=xt(18,10,(o,f)=>{for(let c=0;c<6;c++)o.disco(15-c*2.5,5+Math.round(Math.sin(c*1.4+f*3)*2),c===0?2:1,c===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=xt(20,20,(o,f)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const c of[4,6,13,15])o.linha(c,3,c+(c<10?-2:2),11+(f?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,f?"#ff3b4a":"#7a1f2a")}),i=xt(14,17,(o,f)=>{const c=f?1:0;o.poligono([[10,0+c],[13,4+c],[6,9+c],[3,6+c]],"#1f2a3a"),o.poligono([[10,1+c],[12,4+c],[8,4+c]],"#4a6a8a"),o.poligono([[3,6+c],[6,9+c],[5,11+c],[2,9+c]],"#2a3a4a"),o.pixel(3,9+c,"#ffffff"),o.pixel(5,10+c,"#ffffff"),o.pixel(7,10+c,"#ffffff"),o.retangulo(5,11+c,5,5,"#1f2a3a"),o.linha(10,11+c,13,15,"#1f2a3a")}),a=xt(16,17,(o,f)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,f?"#7dff3a":"#3a9a1f");for(const c of[5,7,9])o.pixel(c,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(f?7:8,14,"#7dff3a"),o.pixel(f?8:7,15,"#7dff3a")}),r=xt(12,10,(o,f)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const c of[1,3,8,10])o.linha(c,3,c<6?c-1:c+1,8+(f?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=xt(56,38,(o,f)=>{for(const c of[8,14,42,48])o.linha(c<28?c+6:c-6,20,c,34+(f?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const c of[18,24,32,38])o.linha(c,4,c+(c<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let c=21;c<36;c+=2)o.pixel(c,20,"#ffffff"),o.pixel(c,24,"#ffffff");o.retangulo(25,22,6,2,f?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function S_(){const n=xt(16,14,(o,f)=>{const c=f?0:1;o.disco(8,8+c,6,"#ffe14a"),o.disco(7,7+c,3,"#fff08a"),o.pixel(5,6+c,"#1b1020"),o.pixel(10,6+c,"#1b1020"),o.poligono([[7,8+c],[9,8+c],[8,10+c]],"#ff9a3a"),o.pixel(8,2+c,"#ffe14a"),o.pixel(9,1+c,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=xt(18,14,(o,f)=>{const c=f?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(c,"#2a2a3a"),o.poligono(ya(c,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=xt(20,20,(o,f)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const c of[7,10,13])o.pixel(c,14+(f?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=xt(14,17,(o,f)=>{const c=f?3:0;o.poligono([[7,3],[0,8-c],[3,10],[7,9]],"#ff7a2a"),o.poligono(ya([[7,3],[0,8-c],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=xt(16,17,(o,f)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,f?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=xt(12,9,(o,f)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const c=f?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(c,"#7a4a2a")}),s=xt(56,38,(o,f)=>{const c=f?0:8;o.poligono([[28,14],[2,4+c],[10,14+c],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+c],[46,14+c],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+c],[16,17+c],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+c],[40,17+c],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const Fi=[{nome:"SLIMES",criar:()=>({m:l_(0),chefe:c_(0)})},{nome:"INVASORES",criar:g_},{nome:"BICHARADA",criar:x_},{nome:"GALÁXIA",criar:v_},{nome:"AGENTES",criar:M_},{nome:"XENO",criar:__},{nome:"REVOADA",criar:S_}],Oh=(n,e,t,i,a,r,s,o=1.5)=>{let f=e,c=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(f,c,d,p,r),n.linha(f+1,c,d+1,p,r),f=d,c=p}return[f,c]},y_=()=>xt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=Oh(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),b_=()=>xt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),E_=()=>xt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),A_=()=>xt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),T_=()=>xt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),w_=()=>xt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=Oh(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),_r=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:f_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:y_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:b_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:E_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:A_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:T_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:w_}],R_=()=>xt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),C_=()=>xt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),P_=()=>xt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(ya([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),I_=()=>xt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(ya([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(ya([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),L_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],Da=[...Fi.map((n,e)=>({nome:L_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:R_},{nome:"DISCO-MÃE",criar:C_},{nome:"NAVE-CAVEIRA",criar:P_},{nome:"CRISTAL VIVO",criar:I_}],Ut=320,Ft=180,cn=Ut/2,aa=Ft/2,ra=6,Fh="curriculo-arcade-v1",D_=12,dt={x0:10,x1:Ut-10,y0:26,y1:Ft-10},si={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Es=70,N_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},Xs={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},U_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{Bi(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{Bi(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{Bi(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{Bi(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{Bi(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{Bi(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{Bi(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{Bi(n,"drift")}},{id:"a_normal",grupo:"CANHÃO [1]",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Calibre reforçado",desc:"+28% de dano exclusivo do canhão.",max:4,peso:2.4,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta dano, alcance, bateria e velocidade de recarga.",max:4,peso:3,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores, mais dano e um míssil extra no nível 3.",max:4,peso:3,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas, rotação mais rápida e dano de contato maior.",max:4,peso:3,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Mais velocidade, autonomia e recarga do propulsor.",max:4,peso:3,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Repara mais vida e reduz o tempo entre ativações.",max:4,peso:3,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração da barreira e acelera sua recarga.",max:4,peso:3,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e recarrega o buraco de minhoca mais rápido.",max:4,peso:3,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Arrancada mais longa com uma trilha de fogo mais forte.",max:4,peso:3,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Amplificador de dano",desc:"+15% de dano para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.danoGlobal*=1.15}},{id:"recarga_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Sincronizador de recarga",desc:"+12% de cadência e recarga para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.recargaGlobal*=1.12}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"SISTEMA",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:1.7,aplicar:n=>{n.raioIma*=1.45}},{id:"motor",grupo:"SISTEMA",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Propulsores",desc:"+16% de velocidade e resposta da nave.",max:4,peso:1.7,aplicar:n=>{n.velNave*=1.16}},{id:"reparo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Casco autorreparável",desc:"+1 de vida máxima e cura 2 pontos.",max:4,peso:1.7,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+2)}},{id:"coletor",grupo:"SISTEMA",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:3.5,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"SISTEMA",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:3.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:3.6,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"micropropulsor",grupo:"SISTEMA",raridade:"COMUM",icone:"›",cor:"#8bd3ff",nome:"Micropropulsor",desc:"+6% de velocidade da nave.",max:6,peso:3.4,aplicar:n=>{n.velNave*=1.06}},{id:"dissipador",grupo:"SISTEMA",raridade:"COMUM",icone:"~",cor:"#7dff9a",nome:"Dissipador pequeno",desc:"+5% de recarga geral das armas e sistemas.",max:6,peso:3.1,aplicar:n=>{n.recargaGlobal*=1.05}}],Bh=Object.fromEntries(Object.entries(Xs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),ud=Object.fromEntries(Object.entries(Xs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function Bi(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${Bh[e]}!`,n.aviso=3.6,!0)}const Tf=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga do laser e do míssil",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Munição pesada",desc:"+0,25 de dano base",max:5,custo:n=>8+n*6},{parte:"ARMAS",id:"cadencia",nome:"Canhão rápido",desc:"+10% de cadência inicial",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],fa={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},O_=Object.entries(fa).map(([n,e])=>[n,e.peso]),F_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],B_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Tf.map(n=>[n.id,0]))});function dd(){const n=B_();try{const e=JSON.parse(localStorage.getItem(Fh));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Tf)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function z_(){const n=(t,i,a)=>{const r=_n(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function hd(n){const e=_n(20,20),t=2,i=(a,r,s,o,f)=>e.retangulo(a+t,r+t,s,o,f);if(i(1,7,3,2,"#ff7a59"),i(12,7,3,2,"#ff7a59"),i(7,1,2,3,"#ff7a59"),i(7,12,2,3,"#ff7a59"),n.motor>=2&&(i(2,11,2,3,"#8b93a8"),i(12,11,2,3,"#8b93a8"),e.pixel(3+t,14+t,"#ffa23a"),e.pixel(12+t,14+t,"#ffa23a")),n.motor>=4&&(i(1,4,2,3,"#8b93a8"),i(13,4,2,3,"#8b93a8")),e.disco(8+t,8+t,5,"#4aa8ff"),e.disco(8+t,8+t,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?"#7dff9a":"#8bd3ff"),e.disco(8+t,8+t,1,"#ffffff"),n.casco>=1)for(const[a,r]of[[2,2],[12,2],[2,12],[12,12]])i(a,r,2,2,"#aab3c8"),n.casco>=3&&e.pixel(a+t,r+t,"#e6e8ff");return n.ima>=1&&(e.pixel(8+t,t-1,"#ff3b4a"),n.ima>=3&&i(10,0,2,1,"#c9cdd8")),e.contorno(n.casco>=5?"#ffd23f":n.casco>=3?"#8bd3ff":"#0b1026"),{c:e.c,branca:Ef(e.c)}}function G_({bip:n,somAtivo:e}){const t=Symbol("arcade");window.__curriculoArcadeGeracao=t,document.getElementById("arcade")?.remove();const i=(M,x,N)=>{const H=document.createElement(M);return x&&(H.className=x),N!=null&&(H.textContent=N),H},a=z_(),r=u_(),s=d_(),o=s_({inicioX:cn,inicioY:aa,rochasSpr:r}),f=new Map,c=new Map,u=M=>(f.has(M)||f.set(M,_r[M].criar()),f.get(M)),h=M=>(c.has(M)||c.set(M,Da[M].criar()),c.get(M)),d=new Map,p=M=>{const x=(M%Fi.length+Fi.length)%Fi.length;return d.has(x)||d.set(x,Fi[x].criar()),d.get(x)},m=.3,E=M=>{const x=new Audio("./"+M);return x.loop=!0,x.volume=m,x.preload="none",x},v=E("audio/arcade.mp3"),g=E("audio/chefe.mp3"),A=E("audio/gameover.mp3"),P={normal:v,chefe:g,fim:A};let y="normal",S=!1;function T(){if(S)return;S=!0;const M=()=>{S=!1,window.removeEventListener("pointerdown",M,!0),window.removeEventListener("keydown",M,!0),it&&I()};window.addEventListener("pointerdown",M,!0),window.addEventListener("keydown",M,!0)}const I=()=>{e&&!e()||P[y].play().catch(T)},_=()=>{v.pause(),g.pause(),A.pause()};function w(M){if(y!==M){y=M;for(const[x,N]of Object.entries(P))x!==M&&N.pause();M!=="normal"&&(P[M].currentTime=0),I()}}let L=!1;function U(){if(!L){L=!0;for(const M of[g,A])M.muted=!0,M.play().then(()=>{M.pause(),M.currentTime=0,M.muted=!1}).catch(()=>{M.muted=!1,L=!1})}}const V=o_(Ut,Ft);let q=hd({casco:0,motor:0,nucleo:0,ima:0}),B=dd();const J={},re=(M,x,N)=>{const H=performance.now();H-(J[M]||0)<x||(J[M]=H,N())};function W(M){const x=M.tipo==="ogro"||M.tipo==="chefe"||M.tipo==="alien";re("acerto"+(x?"G":""),x?70:40,()=>x?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function ge(M){re("morte",30,()=>{M==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):M==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):M==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):M==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):M==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const se=()=>{try{localStorage.setItem(Fh,JSON.stringify(B))}catch{}},ae=i("div");ae.id="arcade";const de=i("div","arc-caixa"),tt=i("div","arc-topo"),He=document.createElement("canvas");He.width=He.height=20,He.className="arc-icone",He.getContext("2d").drawImage(q.c,0,0);const vt=i("h2",null,"NAVE ARCADE"),ut=i("div","arc-hud"),pt=i("span","arc-vidas");pt.setAttribute("role","status");const ce=i("span","arc-nivel"),he=i("span","arc-xp"),Pe=i("i");he.append(Pe),he.setAttribute("role","progressbar"),he.setAttribute("aria-label","Experiência"),he.setAttribute("aria-valuemin","0");const st=i("span"),Ye=i("span","arc-onda"),Ie=i("span","arc-efeitos"),ct=i("span","arc-moedas"),fe=i("span");ut.append(pt,ce,he,st,Ye,Ie,ct,fe);const xe=i("button","arc-pausa","II");xe.title="Pausar (Esc)",xe.setAttribute("aria-label","Pausar jogo"),xe.hidden=!0;const Te=i("button","arc-x","X");Te.title="Sair (Esc)",Te.setAttribute("aria-label","Sair do jogo"),tt.append(He,vt,ut,xe,Te);const we=i("div","arc-tela"),Se=document.createElement("canvas");Se.width=Ut,Se.height=Ft,Se.setAttribute("role","img"),Se.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const R=Se.getContext("2d");R.imageSmoothingEnabled=!1;const K=i("div","arc-joystick");K.hidden=!0;const Re=i("i");K.append(Re);const Le=i("div","arc-aviso");Le.hidden=!0;const O=i("div","arc-sobre"),ot=i("div","arc-painel arc-inicio"),Xe=i("button","arc-btn","COMEÇAR [ESPAÇO]"),D=i("button","arc-btn sec"),b=i("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),Y=i("div","arc-objetivos");for(const[M,x,N]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const H=i("div");H.append(i("b",null,M),i("strong",null,x),i("small",null,N)),Y.append(H)}const Z=i("details","arc-regras"),le=i("summary",null,"COMO JOGAR");Z.append(le,i("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),i("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const Me=i("p","arc-recordes");ot.append(i("h3",null,"PRONTO PARA DECOLAR?"),b,Y,Z,Me,Xe,D);const Ae=i("div","arc-painel");Ae.hidden=!0;const ne=i("div","arc-painel");ne.hidden=!0;const pe=i("button","arc-btn","CONTINUAR [ESC]"),Ve=i("button","arc-btn sec","SAIR");ne.append(i("h3",null,"PAUSADO"),pe,Ve);const je=i("div","arc-painel");je.hidden=!0;const De=i("div","of-raiz");De.hidden=!0,O.append(ot,Ae,ne,je),we.append(Se,Le,K,O);const Oe=i("div","arc-armas"),qe=[];for(let M=1;M<=4;M++){const x=i("button","arc-arma"),N=i("b"),H=i("i");x.append(i("small",null,String(M)),N,H),x.onmousedown=te=>te.preventDefault(),x.onclick=()=>On(M),qe.push({b:x,nm:N,barra:H}),Oe.append(x)}de.append(tt,we,Oe,i("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),ae.append(de,De),ae.setAttribute("role","dialog"),ae.setAttribute("aria-modal","true"),ae.setAttribute("aria-label","Nave Arcade"),document.body.append(ae);let it=!1,Ge="inicio",X=0,Be=0,me="inicio",l=null;const Ue=new Set,ue={ativo:!1,x:cn,y:aa,toque:!1,dx:0,dy:0,origemX:0,origemY:0},ft=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],Qe=M=>Math.abs(M.x-l.cx)<Ut/2+4&&Math.abs(M.y-l.cy)<Ft/2+4,Nt=M=>{let x=Math.random()*M.reduce((N,H)=>N+H[1],0);for(const[N,H]of M)if(x-=H,x<=0)return N;return M[0][0]},bt=(M,x=2.6)=>{l.avisoTxt=M,l.aviso=x};function Un(){const M=B.oficina,x=l?l.niveis:{};return{casco:M.casco+(x.reparo|0),motor:M.motor+(x.motor|0),nucleo:M.nucleo+(x.recarga_geral|0),armas:M.dano+M.lente+(x.dano_geral|0),ima:M.ima+(x.ima|0)}}function Pn(){const M=Un();q=hd(M),l&&(l.tiers=M);const x=He.getContext("2d");x.clearRect(0,0,20,20),x.drawImage(q.c,0,0)}const ll=()=>{if(l.regiaoForcada!=null)return l.regiaoForcada;const M=Math.min(2,Math.floor((l.fase-1)/2)),x=Ir.map((N,H)=>H).filter(N=>Ir[N].nivel===M);return x[(l.fundoBase+l.fase)%x.length]},Ji=M=>{const x=[...M];for(let N=x.length-1;N>0;N--){const H=Math.floor(Math.random()*(N+1));[x[N],x[H]]=[x[H],x[N]]}return x};function zo(){const M=Ji(["slime","inseto","morcego","fantasma","ogro"]).slice(0,3),x=Ji(["atirador","sentinela"]).slice(0,1),N=Ji(["bombardeiro","fulminante"]).slice(0,1),H=Ji(["curandeiro","amplificador"]).slice(0,1);return[...M,...x,...N,...H]}function Ya(){const M=B.oficina,x=zo(),N=Ji(Array.from({length:Fi.length},(Q,Ce)=>Ce)),H=Object.fromEntries(x.map((Q,Ce)=>[Q,N[Ce%N.length]])),te=Object.fromEntries(x.map((Q,Ce)=>[Q,Ce<2?1:Ce<4?2:Ce===4?4:5]));l={t:0,ta:0,nx:cn,ny:aa,cx:cn,cy:aa,velNave:75*(1+.08*M.motor),cristais:[],raioIma:26*(1+.25*M.ima),raioPegar:8,bonusXp:1+.1*M.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,ondaFila:0,ondaSpawnT:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+M.casco,maxHp:6+M.casco,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*M.dano,danoGlobal:1,recargaGlobal:1,cadencia:2.6*(1+.1*M.cadencia),projeteis:1+M.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*Da.length),alienIdx:Math.floor(Math.random()*_r.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*Fi.length),elencoRun:x,entradaRun:te,skinsRun:H,fundoBase:Math.floor(Math.random()*Ir.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*M.bateria,laserE:2+.5*M.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*M.lente),laserAlc:66*(1+.1*M.lente),recM:1+.12*M.nucleo,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:M.escudo>0?1+(M.escudo>=4?1:0):0,barreira:M.escudo>0?1+(M.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*M.escudo},Pn()}const kr=()=>Math.max(1,l.onda);function $a(){const M=kr(),x={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let N=l.elencoRun.filter(H=>M>=l.entradaRun[H]).map(H=>[H,x[H]+Math.max(0,M-l.entradaRun[H])*(H==="atirador"||H==="sentinela"?.45:.2)]);return N.length||(N=[[l.elencoRun[0],1]]),Nt(N)}function Zi(M,x,N){const H=si[M],te=Math.max(0,kr()-1),Q=Math.max(1,Math.round(H.hp*(1+(H.hp===1?.1:.15)*te)*(1+l.t/300))),Ce=H.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*te))*(1+Math.min(.5,l.t/600)),We={tipo:M,x,y:N,hp:Q,hpMax:Q,vel:Ce,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(l.skinsRun[M]??l.skinBase)+l.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return l.inimigos.push(We),We}function ei(M=99,x=null){const N=$a(),H=1+Math.min(3,Math.floor(Math.max(0,l.onda-1)/3)),te=Math.max(1,Math.min(M,N==="inseto"?1+Math.floor(Math.random()*(H+1)):Math.round(H*(.75+Math.random()*.35)))),Q=x==null?Math.random()*Math.PI*2:x+(Math.random()-.5)*1.8,Ce=215+(Math.random()<.35?Math.random()*230:Math.random()*60),We=l.nx+Math.cos(Q)*Ce,$=l.ny+Math.sin(Q)*Ce;for(let ve=0;ve<te;ve++)Zi(N,We+(Math.random()-.5)*30,$+(Math.random()-.5)*30);return te}function Hr(M){for(let x=0;x<M;x++)ei(1)}function Go(M){const x=[[l.cx-Ut/2-16,l.cy-Ft/2-16],[l.cx+Ut/2+16,l.cy-Ft/2-16],[l.cx-Ut/2-16,l.cy+Ft/2+16],[l.cx+Ut/2+16,l.cy+Ft/2+16]],[N,H]=x[Math.floor(Math.random()*x.length)];for(let te=0;te<M;te++)Zi($a(),N+(Math.random()-.5)*22,H+(Math.random()-.5)*22)}function Wt(M,x,N,H,te=50){if(!(l.parts.length>400))for(let Q=0;Q<N;Q++){const Ce=Math.random()*Math.PI*2,We=(.3+Math.random())*te;l.parts.push({x:M,y:x,vx:Math.cos(Ce)*We,vy:Math.sin(Ce)*We,vida:.3+Math.random()*.3,cor:H[Q%H.length]})}}const qt=(M,x,N,H="#ffffff")=>l.textos.push({x:M,y:x,txt:N,cor:H,vida:1.1});function Vo(){l.onda+=1;const M=1+Math.floor((l.onda-1)/3),x=l.onda%5===0;l.ondaDur=l.ondaT=13+Math.min(9,l.onda*1.1),l.ondaFila=x?5+l.onda:Math.min(34,6+l.onda*3),l.ondaSpawnT=.35,l.proxOnda=Math.max(25,34-Math.min(9,l.onda*.5))+Math.random()*4,l.ondaEstado=x||l.chefe?"chefe":"ativa",l.tremor=.25,M>l.fase&&(l.fase=M),x||(bt("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),x&&!l.chefe&&nt()}function Ja(){l.chefe||(l.ondaEstado=l.ondaT>0?"ativa":"calma")}function ko(M){const x=Math.atan2(M.y-l.ny,M.x-l.nx);l.mira=x;const N=l.armasNivel.normal,H=l.projeteis,te=.16;for(let Q=0;Q<H;Q++){const Ce=x+(Q-(H-1)/2)*te,We=l.velTiro*(1+.12*(N-1)),$=Math.random()<l.critico;l.tiros.push({x:l.nx+Math.cos(Ce)*7,y:l.ny+Math.sin(Ce)*7,vx:Math.cos(Ce)*We,vy:Math.sin(Ce)*We,dano:l.dano*l.danoGlobal*(1+.28*(N-1))*($?2:1),perf:l.perfura,critico:$,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const Aa=()=>1+Math.floor(l.t/420);function yn(M,x,N,H,te=Aa()){l.tirosInimigos.push({x:M,y:x,vx:Math.cos(N)*H,vy:Math.sin(N)*H,dano:te,vida:7})}function Za(M,x,N){const H=Math.random()*Math.PI*2,te=16+Math.random()*22,Q={x:M,y:x,v:N,vx:Math.cos(H)*te,vy:Math.sin(H)*te,fase:Math.random()*6};l.cristais.push(Q),l.cristais.length>220&&(Q.v+=l.cristais.shift().v)}function Ta(M){return l.invul>0||l.escudoT>0?!1:l.barreira>0?(l.barreira-=1,l.invul=.7,l.ondas.push({x:l.nx,y:l.ny,r:0,max:28,v:90,cor:"#7dff9a"}),qt(l.nx,l.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0):(l.hp-=M,l.invul=.7,l.tremor=.2,l.combo>=3&&qt(l.nx,l.ny-14,"COMBO PERDIDO","#ff7a8a"),l.combo=0,l.comboT=0,n(110,.18,"sawtooth",.05),!0)}function Ki(M,x){M.sumido>0||M.morto||(M.hp-=x,M.piscar=.08,M.hp>0&&W(M),M.hp<=0&&(M.morto=!0,Ho(M)))}function Ho(M){if(M.tipo==="chefe"){lt(M);return}if(M.tipo==="alien"){l.pendente="vitoria",Wt(M.x,M.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),l.flash=.35;return}const x=si[M.tipo];l.kills+=1,l.alien||(l.combo+=1,l.comboT=1.8,l.melhorCombo=Math.max(l.melhorCombo,l.combo),[10,25,50,100].includes(l.combo)&&(qt(l.nx,l.ny-22,`COMBO x${l.combo}!`,"#ffe14a"),n(700+l.combo*4,.08,"square",.04),n(900+l.combo*4,.1,"square",.04,.08))),Za(M.x,M.y,x.xp),Wt(M.x,M.y,8,["#ffe14a","#ffffff","#ff7a59"],60),ge(M.tipo);const N={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[M.tipo]||0;Math.random()<N&&(l.itens.push({tipo:"moedaEsp",x:M.x,y:M.y,vida:40,fase:Math.random()*6}),qt(M.x,M.y-8,"◆","#6fe8ff"));const H=l.inimigos.indexOf(M);H>=0&&l.inimigos.splice(H,1)}function C(){const M=Math.random()*Math.PI*2,x=230+Math.random()*120,N=Math.floor(Math.random()*3),H=[4,6,9][N];l.rochas.push({x:l.nx+Math.cos(M)*x,y:l.ny+Math.sin(M)*x,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:N,r:[8,10,13][N],hp:H,hpMax:H,piscar:0})}function k(M){M.hp-=1,M.piscar=.08,Wt(M.x,M.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),M.hp<=0&&oe(M)}function oe(M){Wt(M.x,M.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const x=l.rochas.indexOf(M);x>=0&&l.rochas.splice(x,1),Math.random()<.9?l.itens.push({tipo:Nt(F_),x:M.x,y:M.y,vida:16,fase:Math.random()*6}):Za(M.x,M.y,3)}function j(M){const x=M.tipo;if(x==="ima")l.imaT=3,qt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");else if(x==="explosao")ee(),qt(l.nx,l.ny-12,"BOOM!","#ffd23f");else if(x==="coracao")l.hp=Math.min(l.maxHp,l.hp+2),qt(l.nx,l.ny-12,"+VIDA","#ff7a8a");else if(x==="escudo")l.escudoT=6,qt(l.nx,l.ny-12,"ESCUDO!","#8bd3ff");else if(x==="turbo")l.turboT=8,qt(l.nx,l.ny-12,"TURBO!","#ffe14a");else if(fa[x]){const N=fa[x];x==="estrelaVermelha"?(l.buffDanoT<=0&&(l.danoGlobal*=1.5),l.buffDanoT=N.tempo):x==="estrelaAmarela"?l.buffVelT=N.tempo:x==="estrelaAzul"?l.escudoT=Math.max(l.escudoT,N.tempo):x==="estrelaRoxa"&&(l.buffXpT=N.tempo),qt(l.nx,l.ny-12,N.nome,N.cor),Wt(l.nx,l.ny,14,[N.cor,"#ffffff"],70),l.ondas.push({x:l.nx,y:l.ny,r:0,max:40,v:110,cor:N.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else x==="moedaEsp"&&(B.moedas+=1,l.moedasRun+=1,se(),qt(l.nx,l.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function ee(){l.flash=.28,l.tremor=.35,l.ondas.push({x:l.nx,y:l.ny,r:0,max:210,v:420,cor:"#ffd23f"});const M=8+l.dano*3;for(const x of[...l.inimigos])Qe(x)&&(Ki(x,x.tipo==="chefe"||x.tipo==="alien"?14:M),Wt(x.x,x.y,4,["#ffd23f","#ff7a3a"],60));l.tirosInimigos=l.tirosInimigos.filter(x=>!Qe(x)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function $e(M,x,N,H=1.4){for(let te=0;te<N;te++){const Q=Math.random()*Math.PI*2,Ce=te===0?Math.random()*14:28+Math.random()*55;let We=l.nx+Math.cos(Q)*Ce,$=l.ny+Math.sin(Q)*Ce;l.alien&&(We=Math.max(dt.x0+10,Math.min(dt.x1-10,We)),$=Math.max(dt.y0+10,Math.min(dt.y1-10,$))),l.campos.push({x:We,y:$,r:26,aviso:H+te*.15,avisoMax:H+te*.15,vida:4,tick:0,ox:M,oy:x})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function nt(){l.chefeIdx=(l.chefeIdx+1+Math.floor(Math.random()*(Da.length-1)))%Da.length;const M=Math.random()<.5?-1:1,x=Math.round(150*(1+(l.fase-1)*.4+l.chefesVencidos*.35)*(1+l.t/300)),N=Ji(["raios","investida","drift","minhoca"]).slice(0,2),H={tipo:"chefe",x:l.cx+M*(Ut/2+40),y:l.cy-30,hp:x,hpMax:x,vel:30,fase:0,piscar:0,v:l.fase-1+l.skinBase,b:l.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:N,rot:0};l.inimigos.push(H),l.chefe=H,w("chefe"),bt(`${Da[l.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function Je(M,x){const N=l.nx-M.x,H=l.ny-M.y,te=Math.hypot(N,H)||1;if(M.fase+=x,M.movEsp){const z=M.movEsp;if(z.carga>0){if(z.carga-=x,M.piscar=Math.max(M.piscar,.04),z.carga<=0)if(z.tipo==="minhoca"){const ie=M.x,ye=M.y,_e=Math.random()*Math.PI*2,Fe=58+Math.random()*24;M.x=l.nx+Math.cos(_e)*Fe,M.y=l.ny+Math.sin(_e)*Fe,l.ondas.push({x:ie,y:ye,r:0,max:32,v:130,cor:"#a56bff"}),l.ondas.push({x:M.x,y:M.y,r:0,max:32,v:130,cor:"#ff3b4a"}),Wt(ie,ye,18,["#a56bff","#070a1a","#ffffff"],90),Wt(M.x,M.y,18,["#ff3b4a","#070a1a","#ffffff"],90),l.tremor=.28,M.movEsp=null}else z.ativo=z.tipo==="drift"?1.15:.72}else if(z.ativo>0){const ie=z.tipo==="drift"?175:235;M.x+=z.dx*ie*x,M.y+=z.dy*ie*x,z.ativo-=x,z.acc-=x,Wt(M.x-z.dx*15,M.y-z.dy*15,z.tipo==="drift"?2:1,z.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),z.tipo==="drift"&&z.acc<=0&&(z.acc=.16,l.campos.push({x:M.x-z.dx*12,y:M.y-z.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),z.ativo<=0&&(M.movEsp=null)}if(M.movEsp)return}const Q=-H/te,Ce=N/te,We=Math.sin(l.ta*.8)*.3,$=M.vel+l.fase*3+Math.min(45,l.t/10);if(M.x+=(N/te+Q*We)*$*x,M.y+=(H/te+Ce*We)*$*x,te>300)return;const ve=1+Math.min(1,l.t/400);if(M.cdRajada-=x*ve,M.cdMira-=x*ve,M.cdBomba-=x*ve,M.cdRajada<=0){const z=12+Math.min(8,l.fase*2);for(let ie=0;ie<z;ie++)yn(M.x,M.y,M.rot+ie*Math.PI*2/z,55);M.rot+=.27,M.cdRajada=Math.max(1.8,3.2-l.fase*.15),n(180,.12,"square",.04)}if(M.cdMira<=0){const z=Math.atan2(H,N),ie=3+Math.min(2,l.fase-1);for(let ye=0;ye<ie;ye++)yn(M.x,M.y,z+(ye-(ie-1)/2)*.2,90);M.cdMira=1.7}if(M.cdBomba<=0){const z=1+(Math.random()<.5?1:0)+(l.fase>=2&&Math.random()<.4?1:0);$e(M.x,M.y,z),M.cdBomba=Math.max(3,4.6-l.fase*.2)}const be=at.filter(z=>z.assinatura?M.kit.includes(z.id):l.t>=z.t);if(M.esp){const z=M.esp;if(z.t-=x,z.acc-=x,z.tipo==="espiral"&&z.acc<=0){z.acc=.09,z.ang+=.4;for(let ie=0;ie<2;ie++)yn(M.x,M.y,z.ang+ie*Math.PI,62)}else if(z.tipo==="aneis"&&z.acc<=0){z.acc=.5;const ie=Math.random()*Math.PI*2;for(let ye=0;ye<24;ye++){const _e=ye*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(_e-ie),Math.cos(_e-ie)))>.45&&yn(M.x,M.y,_e,58)}}z.t<=0&&(M.esp=null)}else if(be.length&&(M.cdEsp-=x*ve,M.cdEsp<=0)){const z=be[Math.floor(Math.random()*be.length)];if(qt(M.x,M.y-28,z.nome,"#ff7ab8"),z.id==="espiral")M.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(z.id==="aneis")M.esp={tipo:"aneis",t:1.6,acc:0};else if(z.id==="raios"){const ie=Math.atan2(H,N),ye=3+Math.min(2,be.length-2);for(let _e=0;_e<ye;_e++)l.raios.push({x:M.x,y:M.y,ang:ie+(_e-(ye-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(z.id==="investida"||z.id==="drift")M.movEsp={tipo:z.id,carga:z.id==="drift"?.7:.5,ativo:0,dx:N/te,dy:H/te,acc:0};else if(z.id==="minhoca")M.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(z.id==="invocar"){for(let ie=0;ie<4;ie++)Zi($a(),M.x+(ie-1.5)*12,M.y+22);n(300,.2,"triangle",.05)}M.cdEsp=Math.max(3.5,7.5-l.t/100)}}const at=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function lt(M){l.kills+=5,l.chefe=null,l.chefesVencidos+=1,w("normal");const x=l.inimigos.indexOf(M);x>=0&&l.inimigos.splice(x,1),Wt(M.x,M.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),l.flash=.3,l.tremor=.5;const N=4+Math.min(4,l.chefesVencidos);for(let H=0;H<N;H++)l.itens.push({tipo:"moedaEsp",x:M.x+(Math.random()-.5)*46,y:M.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let H=0;H<6;H++)Za(M.x,M.y,6);l.tirosInimigos=[],l.campos=[],l.ondaEstado==="chefe"&&Ja(),bt("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function yt(){const M=Math.random()*Math.PI*2,x=100+Math.random()*40;l.buraco={x:l.nx+Math.cos(M)*x,y:l.ny+Math.sin(M)*x,vida:28,r:22},bt("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function wt(M){const x=l.buraco;x.vida-=M;const N=x.x-l.nx,H=x.y-l.ny,te=Math.hypot(N,H)||1;if(te<70){const Q=38*(1-te/70);l.nx+=N/te*Q*M,l.ny+=H/te*Q*M}if(te<9){rt();return}x.vida<=0&&(l.buraco=null,l.proxBuraco=l.t+50+Math.random()*40)}function rt(){w("chefe"),l.alienIdx=(l.alienIdx+1+Math.floor(Math.random()*(_r.length-1)))%_r.length,l.mundoSalvo={nx:l.nx,ny:l.ny,cx:l.cx,cy:l.cy,inimigos:l.inimigos,tirosInimigos:l.tirosInimigos,campos:l.campos,hp:l.hp,buraco:l.buraco,chefe:l.chefe};const M=Math.round(95*(1+l.aliensVencidos*.6+(l.fase-1)*.25)*(1+l.t/300)),x={tipo:"alien",x:cn,y:50,hp:M,hpMax:M,piscar:0,fase:0,v:l.alienIdx,cd:2,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null};l.hp=l.maxHp,l.invul=1,l.inimigos=[x],l.tirosInimigos=[],l.campos=[],l.raios=[],l.tiros=[],l.misseis=[],l.chefe=null,l.alien=x,l.nx=cn,l.ny=Ft-40,l.cx=cn,l.cy=aa,l.flash=.5,bt(`${_r[l.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function Lt(M){const x=l.mundoSalvo;if(l.nx=x.nx,l.ny=x.ny,l.cx=x.cx,l.cy=x.cy,l.inimigos=x.inimigos,l.tirosInimigos=x.tirosInimigos,l.campos=x.campos,l.chefe=x.chefe,l.hp=x.hp,l.tiros=[],l.raios=[],l.misseis=[],l.alien=null,l.mundoSalvo=null,l.buraco=null,w(l.chefe?"chefe":"normal"),l.invul=2,l.proxBuraco=l.t+60+Math.random()*40,l.flash=.4,M){l.aliensVencidos+=1,l.imaT=Math.max(l.imaT,3),qt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");for(let H=0;H<6;H++)Za(l.nx+(Math.random()-.5)*40,l.ny+(Math.random()-.5)*40,6);const N=Object.keys(Bh).filter(H=>!l.poderes[H]);if(N.length&&l.slots.includes(null))Bi(l,N[Math.floor(Math.random()*N.length)]);else{const H=Object.keys(l.armasNivel).filter(te=>l.armasNivel[te]>0&&l.armasNivel[te]<4);if(H.length){const te=H[Math.floor(Math.random()*H.length)];l.armasNivel[te]+=1,bt(`${Xs[te].nome} EVOLUIU PARA N${l.armasNivel[te]}!`,3.2)}else l.hp=l.maxHp,bt("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else bt("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const jt={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},Vt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},Bt=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function on(M){const x=l.alien,N=x.hp<x.hpMax*.5,H=x.hp<x.hpMax*.25,te=1+Math.min(.6,l.t/500),Q=(H?2:N?1.6:1.25)*te,Ce=(H?1.5:N?1.35:1.2)*(1+(te-1)*.6),We=_e=>_e*Ce;x.ta+=M*(H?2:N?1.7:1.3)*te,x.fase+=M,x.sumido=Math.max(0,x.sumido-M),N&&!x.furiaDita&&(x.furiaDita=!0,bt("!! FÚRIA !!",1.6),l.flash=.2,n(80,.4,"sawtooth",.06)),H&&!x.desesperoDito&&(x.desesperoDito=!0,bt("!! DESESPERO !!",1.6),l.flash=.25,n(60,.5,"sawtooth",.07));const $=()=>cn+Math.sin(x.ta*.7)*95,ve=()=>48+Math.sin(x.ta*1.3)*12;(x.estado==="espera"||x.estado==="carga"||x.estado==="salvas"||x.estado==="padrao")&&x.sumido<=0&&(x.x=$(),x.y=ve());const z=(_e,Fe)=>[Math.max(dt.x0+6,Math.min(dt.x1-6,_e)),Math.max(dt.y0+6,Math.min(dt.y1-6,Fe))],ie=()=>{const _e=l.nx-x.x,Fe=l.ny-x.y,Ee=Math.hypot(_e,Fe)||1;x.dirX=_e/Ee,x.dirY=Fe/Ee,x.dashMax=.75,x.estado="aviso",x.carga=.8},ye=()=>{const _e=l.nx<cn;x.x=_e?dt.x1-4:dt.x0+4,x.y=z(0,l.ny)[1],x.dirX=_e?-1:1,x.dirY=0,x.dashMax=1.15,x.estado="aviso",x.carga=.75};if(x.estado==="espera"){if(x.cd-=M*Q,x.cd<=0){const _e=_r[x.v].pesos,Fe=Ee=>Ee==="rajada"||Ee==="mira"||Ee==="investida";x.ataque=Nt(Bt.filter(([,,Ee])=>l.t>=Ee).map(([Ee,ke])=>[Ee,(ke+(_e[Ee]||0))*(Fe(Ee)?1:.3)]).filter(([Ee,ke])=>ke>0&&!(x.ultimoPoder&&!Fe(Ee)))),x.ultimoPoder=!Fe(x.ataque),x.estado="carga",x.carga=.5,qt(x.x,Math.max(12,x.y-24),jt[x.ataque]||"","#ff7ab8")}}else if(x.estado==="carga"){if(x.carga-=M,x.carga<=0){const _e=x.ataque;if(_e==="rajada"){const Fe=H?30:N?24:18,Ee=Math.random()*6;for(let ke=0;ke<Fe;ke++)yn(x.x,x.y,Ee+ke*Math.PI*2/Fe,We(62));x.estado="espera",x.cd=2}else if(_e==="mira")x.salvas=H?6:N?5:4,x.cdSalva=0,x.estado="salvas";else if(_e==="teleporte")x.sumido=.6,x.estado="teleporte",x.carga=.6;else if(_e==="invocar"){const Fe=l.inimigos.filter(Ee=>Ee.tipo==="inseto").length;for(let Ee=0;Ee<4&&Fe+Ee<10;Ee++)Zi("inseto",x.x+(Ee-1.5)*12,x.y+14);x.estado="espera",x.cd=1.8,n(300,.2,"triangle",.05)}else if(_e==="ovnis"){const Fe=l.inimigos.filter(Ee=>Ee.tipo==="atirador").length;for(let Ee=0;Ee<2&&Fe+Ee<3;Ee++)Zi("atirador",x.x+(Ee?16:-16),x.y+14);x.estado="espera",x.cd=2,n(300,.25,"triangle",.05)}else if(_e==="investida")x.combo=H?1:0,x.modo="investida",ie();else if(_e==="foice")x.combo=H?3:N?2:1,x.modo="investida",ie();else if(_e==="corte")x.combo=H?2:N?1:0,x.modo="corte",ye();else if(_e==="raio"){const Fe=Math.atan2(l.ny-x.y,l.nx-x.x),Ee=H?[Fe-.7,Fe-.35,Fe,Fe+.35,Fe+.7]:N?[Fe-.5,Fe,Fe+.5]:[Fe];for(const ke of Ee)l.raios.push({x:x.x,y:x.y+8,ang:ke,aviso:.9,vida:.55,tick:0,ligou:!1});x.estado="espera",x.cd=2.2,n(500,.3,"sine",.05)}else if(_e==="olhar"){const Fe=Math.atan2(l.ny-x.y,l.nx-x.x),Ee=H?7:N?6:5;for(let ke=0;ke<Ee;ke++)l.raios.push({x:x.x,y:x.y+8,ang:Fe+(ke-(Ee-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});x.estado="espera",x.cd=2.4,n(520,.3,"sine",.05)}else if(_e==="varredura"){const Fe=Math.random()<.5?1:-1,Ee=Math.atan2(l.ny-x.y,l.nx-x.x)-1*Fe;for(let ke=0;ke<(N?2:1);ke++)l.raios.push({x:x.x,y:x.y+8,ang:Ee+ke*Math.PI,giro:1.15*Fe*(H?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});x.estado="espera",x.cd=2.6,n(480,.3,"sine",.05)}else if(_e==="tentaculos"){const Fe=Math.random()*6.28,Ee=Math.random()<.5?1:-1,ke=N?6:4;for(let mt=0;mt<ke;mt++)l.raios.push({x:x.x,y:x.y+8,ang:Fe+mt*Math.PI*2/ke,giro:.9*Ee,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});x.estado="espera",x.cd=3,n(420,.3,"sine",.05)}else if(_e==="bombas")$e(x.x,x.y,H?6:N?5:4,1.1),x.estado="espera",x.cd=2;else if(_e==="psiquico"){const Fe=Math.random()*6.28,Ee=N?6:5;for(let ke=0;ke<Ee;ke++){const[mt,pn]=z(l.nx+Math.cos(Fe+ke*Math.PI*2/Ee)*40,l.ny+Math.sin(Fe+ke*Math.PI*2/Ee)*40);l.campos.push({x:mt,y:pn,r:24,aviso:1.1+ke*.08,avisoMax:1.1+ke*.08,vida:3.5,tick:0,ox:x.x,oy:x.y})}l.campos.push({x:l.nx,y:l.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:x.x,oy:x.y}),x.estado="espera",x.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else Vt[_e]?(x.padrao={tipo:_e,t:Vt[_e]*(N?1.25:1),acc:0,ang:Math.random()*6.28},x.estado="padrao"):x.estado="espera";n(220,.12,"square",.05)}}else if(x.estado==="padrao"){const _e=x.padrao;if(_e.t-=M,_e.acc-=M,_e.acc<=0){if(_e.tipo==="espiral"){_e.acc=.075,_e.ang+=.38;const Fe=H?4:N?3:2;for(let Ee=0;Ee<Fe;Ee++)yn(x.x,x.y+6,_e.ang+Ee*Math.PI*2/Fe,We(58));re("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(_e.tipo==="chuva"){_e.acc=H?.45:.6;const Fe=[dt.x0+24+Math.random()*(dt.x1-dt.x0-48)];N&&Fe.push(dt.x0+24+Math.random()*(dt.x1-dt.x0-48));for(let Ee=dt.x0+4;Ee<=dt.x1-4;Ee+=13)Fe.every(ke=>Math.abs(Ee-ke)>19)&&yn(Ee,dt.y0,Math.PI/2,We(58));n(240,.08,"square",.03)}else if(_e.tipo==="aneis"){_e.acc=.55;const Fe=24,Ee=Math.random()*Math.PI*2;for(let ke=0;ke<Fe;ke++){const mt=ke*Math.PI*2/Fe;Math.abs(Math.atan2(Math.sin(mt-Ee),Math.cos(mt-Ee)))>.42&&yn(x.x,x.y,mt,We(55))}n(280,.08,"triangle",.03)}else if(_e.tipo==="cerco"){_e.acc=H?.08:.12;const Fe=Math.random()<.5?dt.x0:dt.x1,Ee=dt.y0+Math.random()*(dt.y1-dt.y0);yn(Fe,Ee,Math.atan2(l.ny-Ee,l.nx-Fe)+(Math.random()-.5)*.3,We(72)),re("cerco",90,()=>n(360,.04,"square",.02))}}_e.t<=0&&(x.estado="espera",x.cd=1.8)}else if(x.estado==="salvas"){if(x.cdSalva-=M,x.cdSalva<=0){const _e=Math.atan2(l.ny-x.y,l.nx-x.x);for(let Fe=-1;Fe<=1;Fe++)yn(x.x,x.y+12,_e+Fe*.22,We(95));x.salvas-=1,x.cdSalva=.26,n(260,.06,"square",.04),x.salvas<=0&&(x.estado="espera",x.cd=1.6)}}else if(x.estado==="aviso")x.carga-=M,x.x+=(Math.random()-.5)*1.6,x.y+=(Math.random()-.5)*1.6,x.carga<=0&&(x.estado="investida",x.dashT=x.dashMax*(N?1.1:1),n(150,.25,"sawtooth",.06));else if(x.estado==="investida"){const _e=H?400:N?350:310;x.x+=x.dirX*_e*M,x.y+=x.dirY*_e*M,x.dashT-=M;const Fe=x.x<dt.x0||x.x>dt.x1||x.y<dt.y0||x.y>dt.y1;x.x=Math.max(dt.x0,Math.min(dt.x1,x.x)),x.y=Math.max(dt.y0-10,Math.min(dt.y1,x.y)),(x.dashT<=0||Fe)&&(l.tremor=Math.max(l.tremor,Fe?.2:0),x.combo>0?(x.combo-=1,x.modo==="corte"?ye():ie(),x.carga=.4):x.estado="volta")}else if(x.estado==="volta"){const _e=$(),Fe=ve(),Ee=_e-x.x,ke=Fe-x.y,mt=Math.hypot(Ee,ke)||1;x.x+=Ee/mt*Math.min(mt,260*M),x.y+=ke/mt*Math.min(mt,260*M),mt<5&&(x.estado="espera",x.cd=1.2)}else if(x.estado==="teleporte"&&(x.carga-=M,x.carga<=0)){x.x=dt.x0+20+Math.random()*(dt.x1-dt.x0-40),x.y=dt.y0+10+Math.random()*40,x.sumido=0;const _e=H?16:12;for(let Fe=0;Fe<_e;Fe++)yn(x.x,x.y,Fe*Math.PI*2/_e,We(70));x.ta=Math.asin(Math.max(-1,Math.min(1,(x.x-cn)/95)))/.7,x.estado="espera",x.cd=1.3,n(440,.1,"square",.05)}}function et(M){let x=(Ue.has("ArrowRight")||Ue.has("KeyD")?1:0)-(Ue.has("ArrowLeft")||Ue.has("KeyA")?1:0),N=(Ue.has("ArrowDown")||Ue.has("KeyS")?1:0)-(Ue.has("ArrowUp")||Ue.has("KeyW")?1:0);if(!x&&!N&&ue.ativo)if(ue.toque)x=ue.dx/18,N=ue.dy/18;else{const te=ue.x-(l.nx-l.cx+Ut/2),Q=ue.y-(l.ny-l.cy+Ft/2),Ce=Math.hypot(te,Q);Ce>3&&(x=te/Ce,N=Q/Ce)}const H=Math.hypot(x,N);if(l.movendo=H>.08,H>.08){l.dirX=x/H,l.dirY=N/H;const te=l.arma>=2?l.slots[l.arma-2]:"normal",Q=l.armasNivel.turbo||1,Ce=l.armasNivel.drift||1,We=te==="turbo"&&l.boostE>0?1.55+.18*(Q-1):1,$=l.driftT>0?1.75+.15*(Ce-1):1,ve=te==="salto"&&l.saltoCarga>0?.32:1,be=l.turboT>0?1.35:1,z=Math.min(1,H),ie=l.velNave*We*$*ve*be*(l.buffVelT>0?1.5:1)*(l.alien?1:l.lentidao||1);l.nx+=l.dirX*ie*M*z,l.ny+=l.dirY*ie*M*z}if(l.alien)l.nx=Math.max(dt.x0,Math.min(dt.x1,l.nx)),l.ny=Math.max(dt.y0,Math.min(dt.y1,l.ny)),l.cx=cn,l.cy=aa;else{const te=Math.min(1,M*5);l.cx+=(l.nx-l.cx)*te,l.cy+=(l.ny-l.cy)*te}}function ln(M){l.proxOnda-=M,l.proxOnda<=0&&l.ondaFila<=0&&Vo(),l.ondaT=Math.max(0,l.ondaT-M),l.ondaEstado=l.chefe?"chefe":l.ondaT>0||l.ondaFila>0?"ativa":"calma";const x=Math.min(54,12+3*kr());if(l.ondaFila>0&&(l.ondaSpawnT-=M,l.ondaSpawnT<=0)){const $=Math.min(l.ondaFila,Math.min(4,1+Math.floor((l.onda-1)/2)),Math.max(0,x-l.inimigos.length));$>0&&(Go($),l.ondaFila-=$),l.ondaSpawnT=$>0?Math.max(.72,1.45-l.onda*.045)+Math.random()*.38:.5}const N=.24+Math.min(.72,l.t*.0014)+.015*l.nivel;l.spawnAcc+=M*N*(l.ondaEstado==="chefe"?.45:1),(!Number.isFinite(l.spawnAcc)||l.spawnAcc<0)&&(l.spawnAcc=0);let H=0;for(;l.spawnAcc>=1&&H<3;)l.spawnAcc-=1,H+=1,l.inimigos.length<x&&ei(2);l.ultX==null&&(l.ultX=l.nx,l.ultY=l.ny,l.andou=0,l.angAndar=0);const te=l.nx-l.ultX,Q=l.ny-l.ultY,Ce=Math.hypot(te,Q);for(l.ultX=l.nx,l.ultY=l.ny,Ce>0&&Ce<60&&(l.andou+=Ce,l.angAndar=Math.atan2(Q,te));l.andou>=170;)l.andou-=170,l.inimigos.length<x&&ei(99,l.angAndar);if(l.ondaT<=0&&!l.chefe&&!l.buraco&&l.t>=l.proxBuraco&&yt(),l.proxEstrela-=M,l.proxEstrela<=0&&(l.proxEstrela=16+Math.random()*14,l.itens.filter($=>fa[$.tipo]).length<2)){const $=Math.random()*Math.PI*2,ve=70+Math.random()*90;l.itens.push({tipo:Nt(O_),x:l.nx+Math.cos($)*ve,y:l.ny+Math.sin($)*ve,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(l.buraco&&(wt(M),l.alien))return;l.rochas.length<3&&Math.random()<M*.12&&C();for(let $=l.rochas.length-1;$>=0;$--){const ve=l.rochas[$];ve.x+=ve.vx*M,ve.y+=ve.vy*M,ve.piscar=Math.max(0,ve.piscar-M);const be=l.nx-ve.x,z=l.ny-ve.y,ie=Math.hypot(be,z)||1;if(ie>650){l.rochas.splice($,1);continue}ie<ve.r+ra&&(l.nx+=be/ie*(ve.r+ra-ie),l.ny+=z/ie*(ve.r+ra-ie))}for(const $ of[...l.inimigos]){if($.tipo==="chefe"){Je($,M),o.empurrar($,si.chefe.raio,{x:l.nx,y:l.ny},30*M);continue}$.buffT=Math.max(0,($.buffT||0)-M),$.suporteFx=Math.max(0,($.suporteFx||0)-M);const ve=l.nx-$.x,be=l.ny-$.y,z=Math.hypot(ve,be)||1,ie=$.buffT>0?1.35:1;let ye=ve/z*$.vel*ie,_e=be/z*$.vel*ie;if($.tipo==="morcego"){const Ee=Math.sin(l.ta*5+$.fase)*28;ye+=-be/z*Ee,_e+=ve/z*Ee}else if($.tipo==="inseto"){const Ee=Math.sin(l.ta*9+$.fase)*22;ye+=-be/z*Ee,_e+=ve/z*Ee}else if($.tipo==="atirador"){const Ee=z>92?1:.22,ke=Math.sin(l.ta*1.2+$.fase)*.35;ye=(ve/z*Ee+-be/z*ke)*$.vel*ie,_e=(be/z*Ee+ve/z*ke)*$.vel*ie,$.cd-=M*ie,$.cd<=0&&Qe($)&&(yn($.x,$.y,Math.atan2(be,ve),74,Aa()*($.buffT>0?1.5:1)),$.cd=1.8+Math.random()*.9)}else if($.tipo==="sentinela"){const Ee=z>105?1:.2,ke=Math.atan2(be,ve);if(ye=(ve/z*Ee+-be/z*Math.sin(l.ta+$.fase)*.28)*$.vel*ie,_e=(be/z*Ee+ve/z*Math.sin(l.ta+$.fase)*.28)*$.vel*ie,$.cd-=M*ie,$.cd<=0&&Qe($)){for(const mt of[-.18,0,.18])yn($.x,$.y,ke+mt,82,Aa()*($.buffT>0?1.5:1));$.cd=2.5+Math.random()*.8}}else if($.tipo==="bombardeiro"){const Ee=z>120?.9:.18;ye=ve/z*Ee*$.vel*ie,_e=be/z*Ee*$.vel*ie,$.cd-=M*ie,$.cd<=0&&Qe($)&&($e($.x,$.y,$.buffT>0?2:1,1.15),$.cd=4+Math.random()*1.2)}else if($.tipo==="fulminante"){const Ee=z>125?.9:.18,ke=Math.atan2(be,ve);ye=(ve/z*Ee+-be/z*Math.sin(l.ta*1.7+$.fase)*.28)*$.vel*ie,_e=(be/z*Ee+ve/z*Math.sin(l.ta*1.7+$.fase)*.28)*$.vel*ie,$.cd-=M*ie,$.cd<=0&&Qe($)&&(l.raios.push({x:$.x,y:$.y,ang:ke,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:Aa(),dono:$}),$.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if($.tipo==="curandeiro"){const Ee=l.inimigos.filter(ke=>ke!==$&&!ke.morto&&ke.hp<ke.hpMax&&ke.tipo!=="chefe").sort((ke,mt)=>Math.hypot(ke.x-$.x,ke.y-$.y)-Math.hypot(mt.x-$.x,mt.y-$.y))[0];if(ye=ve/z*$.vel*.68,_e=be/z*$.vel*.68,Ee){const ke=Ee.x-$.x,mt=Ee.y-$.y,pn=Math.hypot(ke,mt)||1;ye+=ke/pn*$.vel*.32,_e+=mt/pn*$.vel*.32}if($.cd-=M,$.cd<=0&&Ee&&Math.hypot(Ee.x-$.x,Ee.y-$.y)<Es){const ke=Math.max(1,Math.ceil(Ee.hpMax*.22));Ee.hp=Math.min(Ee.hpMax,Ee.hp+ke),Ee.suporteFx=.8,$.suporteFx=.8,qt(Ee.x,Ee.y-8,`+${ke}`,"#7dff9a"),Wt(Ee.x,Ee.y,5,["#7dff9a","#ffffff"],35),$.cd=2.7+Math.random()*.8}}else if($.tipo==="amplificador"){const Ee=l.inimigos.filter(mt=>mt!==$&&!mt.morto&&mt.tipo!=="chefe"&&Math.hypot(mt.x-$.x,mt.y-$.y)<Es);for(const mt of Ee)mt.buffT=Math.max(mt.buffT||0,.4);Ee.length&&($.suporteFx=.25);const ke=z>85?.72:.2;ye=ve/z*ke*$.vel,_e=be/z*ke*$.vel}const Fe=o.fatorLento($.x,$.y);$.x+=ye*M*Fe,$.y+=_e*M*Fe,o.empurrar($,si[$.tipo].raio,{x:l.nx,y:l.ny},$.vel*M*.9),$.piscar=Math.max(0,$.piscar-M)}l.inimigos=l.inimigos.filter($=>$.tipo==="chefe"||Math.hypot($.x-l.nx,$.y-l.ny)<520);const We={x:l.nx,y:l.ny};o.empurrar(We,ra),l.nx=We.x,l.ny=We.y,l.lentidao=o.fatorLento(l.nx,l.ny);for(let $=l.itens.length-1;$>=0;$--){const ve=l.itens[$];ve.vida-=M;const be=l.nx-ve.x,z=l.ny-ve.y,ie=Math.hypot(be,z)||1;if(ve.tipo==="moedaEsp"&&ie<l.raioIma*1.3&&(ve.x+=be/ie*90*M,ve.y+=z/ie*90*M),ie<ra+8){j(ve),l.itens.splice($,1);continue}ve.vida<=0&&l.itens.splice($,1)}for(let $=l.cristais.length-1;$>=0;$--){const ve=l.cristais[$];ve.x+=ve.vx*M,ve.y+=ve.vy*M;const be=Math.pow(.05,M);ve.vx*=be,ve.vy*=be;const z=l.nx-ve.x,ie=l.ny-ve.y,ye=Math.hypot(z,ie)||1;if(l.imaT>0)ve.x+=z/ye*280*M,ve.y+=ie/ye*280*M;else if(ye<l.raioIma){const _e=70+(l.raioIma-ye)*4;ve.x+=z/ye*_e*M,ve.y+=ie/ye*_e*M}ye<ra+l.raioPegar&&(l.xp+=ve.v*l.bonusXp*(l.buffXpT>0?2:1),l.cristais.splice($,1),Wt(ve.x,ve.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(ve.v,6)*60,.05,"square",.03))}}function Ct(){let M=null,x=1/0;for(const te of l.inimigos){if(te.sumido>0||!Qe(te))continue;const Q=Math.hypot(te.x-l.nx,te.y-l.ny);Q<x&&(x=Q,M=te)}let N=null,H=120;for(const te of l.rochas){if(!Qe(te))continue;const Q=Math.hypot(te.x-l.nx,te.y-l.ny);Q<H&&(H=Q,N=te)}return N&&(!M||x>45)?N:M}const bn=M=>M.r||si[M.tipo].raio;function On(M){Ge!=="jogando"||!l||M>=2&&!l.slots[M-2]||l.arma!==M&&(l.arma=M,n(M===2?440:600,.05,"square",.03))}function ti(){if(l.arma<2||l.slots[l.arma-2]!=="orbes")return[];const M=1+l.armasNivel.orbes,x=20+M*1.5;return Array.from({length:M},(N,H)=>({x:l.nx+Math.cos(l.orbeAng+H*Math.PI*2/M)*x,y:l.ny+Math.sin(l.orbeAng+H*Math.PI*2/M)*x}))}function Qi(M,x){const N=l.armasNivel.missil,H=24*(1+.16*(N-1)),te=(5+l.dano*2)*l.danoGlobal*(1+.32*(N-1));l.ondas.push({x:M,y:x,r:0,max:H,v:170,cor:"#ff9a3a"}),Wt(M,x,14,["#ffd23f","#ff7a3a","#ffffff"],80),l.tremor=Math.max(l.tremor,.1);for(const Q of[...l.inimigos])!(Q.sumido>0)&&Math.hypot(Q.x-M,Q.y-x)<H+si[Q.tipo].raio&&Ki(Q,te);for(const Q of[...l.rochas])if(Math.hypot(Q.x-M,Q.y-x)<H+Q.r)for(let Ce=0;Ce<3&&l.rochas.includes(Q);Ce++)k(Q);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function Ot(M){const x=l.arma>=2?l.slots[l.arma-2]:"normal",N=l.recM*l.recargaGlobal;l.laser=null;let H=!1;if(x==="laser"&&!l.laserQuente){const be=l.armasNivel.laser,z=Ct(),ie=l.laserAlc*(1+.18*(be-1));if(z&&Math.hypot(z.x-l.nx,z.y-l.ny)<ie+bn(z)){H=!0;const ye=Math.atan2(z.y-l.ny,z.x-l.nx),_e=Math.cos(ye),Fe=Math.sin(ye);if(l.mira=ye,l.laser={ang:ye,len:ie},l.laserE-=M*1.15,l.laserE<=0&&(l.laserE=0,l.laserQuente=!0,n(180,.2,"sawtooth",.04)),l.laserTick-=M,l.laserTick<=0){l.laserTick=.1,l.laserN+=1;const Ee=l.laserDano*(.5+.5*l.dano)*l.danoGlobal*(1+.3*(be-1))*.1;for(const ke of[...l.inimigos]){const mt=ke.x-l.nx,pn=ke.y-l.ny,ni=mt*_e+pn*Fe,F=Math.abs(-mt*Fe+pn*_e),ze=si[ke.tipo].raio;!(ke.sumido>0)&&ni>0&&ni<ie+ze&&F<ze+3&&(Ki(ke,Ee),Math.random()<.4&&Wt(ke.x,ke.y,1,["#8bd3ff","#ffffff"],40))}if(l.laserN%3===0)for(const ke of[...l.rochas]){const mt=ke.x-l.nx,pn=ke.y-l.ny,ni=mt*_e+pn*Fe,F=Math.abs(-mt*Fe+pn*_e);ni>0&&ni<ie+ke.r&&F<ke.r+2&&k(ke)}re("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!H){const be=Math.max(1,l.armasNivel.laser),z=l.laserMax*(1+.18*(be-1));l.laserE=Math.min(z,l.laserE+M*z*.13*N*(1+.18*(be-1))),l.laserQuente&&l.laserE>=l.laserMax*.6&&(l.laserQuente=!1)}if(x==="missil"&&(l.missilT-=M,l.missilT<=0)){const be=[...l.inimigos.filter(z=>!(z.sumido>0)&&Qe(z)),...l.rochas.filter(Qe)].map(z=>({o:z,d:Math.hypot(z.x-l.nx,z.y-l.ny)})).filter(z=>z.d<135).sort((z,ie)=>z.d-ie.d);if(be.length){const z=l.armasNivel.missil,ie=1+(z>=3?1:0)+(z>=4?1:0);for(let ye=0;ye<ie;ye++){const _e=be[ye%be.length].o;l.misseis.push({x:l.nx,y:l.ny,ang:Math.atan2(_e.y-l.ny,_e.x-l.nx)+(ye-(ie-1)/2)*.9,alvo:_e,vida:2,v:70})}l.missilMax=3.6/(N*(1+.22*(z-1))),l.missilT=l.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else l.missilT=0}for(let be=l.misseis.length-1;be>=0;be--){const z=l.misseis[be],ie=z.alvo,ye=ie&&ie.hp>0&&!ie.morto&&(l.inimigos.includes(ie)||l.rochas.includes(ie));if(ye){let Fe=Math.atan2(ie.y-z.y,ie.x-z.x)-z.ang;Fe=Math.atan2(Math.sin(Fe),Math.cos(Fe)),z.ang+=Math.max(-6*M,Math.min(6*M,Fe))}z.v=Math.min(150,z.v+160*M),z.x+=Math.cos(z.ang)*z.v*M,z.y+=Math.sin(z.ang)*z.v*M,z.vida-=M,Math.random()<.6&&l.parts.push({x:z.x,y:z.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(ye&&Math.hypot(ie.x-z.x,ie.y-z.y)<bn(ie)+3||z.vida<=0)&&(l.misseis.splice(be,1),Qi(z.x,z.y))}if(x==="orbes"){const be=l.armasNivel.orbes;l.orbeAng+=M*3.2*(1+.18*(be-1))*l.recargaGlobal;const z=(2+l.dano*.5)*l.danoGlobal*(1+.32*(be-1));for(const ie of ti()){for(const ye of[...l.inimigos])ye.sumido>0||(ye.cdOrbe=(ye.cdOrbe||0)-M,ye.cdOrbe<=0&&Math.hypot(ie.x-ye.x,ie.y-ye.y)<si[ye.tipo].raio+4&&(Ki(ye,z),ye.cdOrbe=.35,Wt(ye.x,ye.y,2,["#ff3bd4","#ffffff"],40)));for(const ye of[...l.rochas])ye.cdOrbe=(ye.cdOrbe||0)-M,ye.cdOrbe<=0&&Math.hypot(ie.x-ye.x,ie.y-ye.y)<ye.r+4&&(k(ye),ye.cdOrbe=.5)}}const te=Math.max(1,l.armasNivel.turbo),Q=3+.75*(te-1);l.boostMax=Q,x==="turbo"&&l.movendo&&l.boostE>0?(l.boostE=Math.max(0,l.boostE-M),Math.random()<.45&&l.parts.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vx:-l.dirX*20,vy:-l.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):l.boostE=Math.min(Q,l.boostE+M*.5*N*(1+.12*(te-1)));const Ce=Math.max(1,l.armasNivel.cura);if(l.curaMax=Math.max(4.5,(11-1.6*(Ce-1))/N),l.curaCd=Math.max(0,l.curaCd-M),x==="cura"&&l.curaCd<=0&&l.hp<l.maxHp){const be=1+(Ce>=3?1:0)+(Ce>=4?1:0);l.hp=Math.min(l.maxHp,l.hp+be),l.curaCd=l.curaMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:30,v:80,cor:"#7dff9a"}),Wt(l.nx,l.ny,12,["#7dff9a","#ffffff"],45),qt(l.nx,l.ny-13,`+${be} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const We=Math.max(1,l.armasNivel.escudo);l.escudoMax=Math.max(6,(13-1.3*(We-1))/N),l.escudoCd=Math.max(0,l.escudoCd-M),x==="escudo"&&l.escudoCd<=0&&l.escudoT<=0&&(l.escudoT=2.4+.75*(We-1),l.escudoCd=l.escudoMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),qt(l.nx,l.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const $=Math.max(1,l.armasNivel.salto);if(l.saltoMax=Math.max(3.5,(8-.85*($-1))/N),l.saltoCd=Math.max(0,l.saltoCd-M),l.saltoCargaMax=Math.max(.42,.82-.1*($-1)),x!=="salto"||!l.movendo?l.saltoCarga=0:l.saltoCd<=0&&l.saltoCarga<=0&&(l.saltoCarga=l.saltoCargaMax,n(180,.16,"sine",.04)),x==="salto"&&l.saltoCarga>0&&(l.saltoCarga-=M,Math.random()<.55&&l.parts.push({x:l.nx+(Math.random()-.5)*18,y:l.ny+(Math.random()-.5)*18,vx:-l.dirX*8,vy:-l.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),l.saltoCarga<=0)){const be=l.nx,z=l.ny,ie=58+18*$;l.nx+=l.dirX*ie,l.ny+=l.dirY*ie,l.alien&&(l.nx=Math.max(dt.x0,Math.min(dt.x1,l.nx)),l.ny=Math.max(dt.y0,Math.min(dt.y1,l.ny))),l.saltoCd=l.saltoMax,l.invul=Math.max(l.invul,.35),l.ondas.push({x:be,y:z,r:0,max:24,v:120,cor:"#a56bff"}),l.ondas.push({x:l.nx,y:l.ny,r:0,max:24,v:120,cor:"#a56bff"}),Wt(be,z,14,["#a56bff","#ffffff"],60),Wt(l.nx,l.ny,14,["#a56bff","#ffffff"],60),l.flash=Math.max(l.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const ve=Math.max(1,l.armasNivel.drift);l.driftMax=Math.max(3.2,(7-.7*(ve-1))/N),l.driftCd=Math.max(0,l.driftCd-M),l.driftT=Math.max(0,l.driftT-M),x==="drift"&&l.driftCd<=0&&l.movendo&&l.driftT<=0&&(l.driftT=.75+.22*ve,l.driftCd=l.driftMax,l.driftAcc=0,l.tremor=Math.max(l.tremor,.12),n(130,.22,"sawtooth",.05)),l.driftT>0&&l.movendo&&(l.driftAcc-=M,l.driftAcc<=0&&(l.driftAcc=.055,l.trilhasFogo.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vida:1+.12*ve,max:1+.12*ve,nv:ve})));for(const be of l.inimigos)be.cdFogo=Math.max(0,(be.cdFogo||0)-M);for(let be=l.trilhasFogo.length-1;be>=0;be--){const z=l.trilhasFogo[be];z.vida-=M;for(const ie of[...l.inimigos])!(ie.sumido>0)&&ie.cdFogo<=0&&Math.hypot(ie.x-z.x,ie.y-z.y)<si[ie.tipo].raio+7&&(Ki(ie,(1.2+z.nv*.75)*l.danoGlobal),ie.cdFogo=.22);z.vida<=0&&l.trilhasFogo.splice(be,1)}}function Jt(M){for(let x=l.tiros.length-1;x>=0;x--){const N=l.tiros[x];if(N.x+=N.vx*M,N.y+=N.vy*M,Math.hypot(N.x-l.nx,N.y-l.ny)>260){l.tiros.splice(x,1);continue}let H=!1;for(const te of[...l.inimigos])if(!(N.acertou.has(te)||te.sumido>0)&&Math.hypot(N.x-te.x,N.y-te.y)<si[te.tipo].raio+2)if(N.acertou.add(te),Wt(N.x,N.y,2,["#ffe14a","#ffffff"],40),Ki(te,N.dano),N.perf>0)N.perf-=1;else{H=!0;break}if(!H){for(const te of[...l.rochas])if(!N.acertou.has(te)&&Math.hypot(N.x-te.x,N.y-te.y)<te.r+2)if(N.acertou.add(te),k(te),N.perf>0)N.perf-=1;else{H=!0;break}}H&&l.tiros.splice(x,1)}}function mi(M){for(let x=l.tirosInimigos.length-1;x>=0;x--){const N=l.tirosInimigos[x];if(N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0||Math.hypot(N.x-l.nx,N.y-l.ny)>420||l.alien&&(N.x<dt.x0-40||N.x>dt.x1+40||N.y<dt.y0-40||N.y>dt.y1+40)){l.tirosInimigos.splice(x,1);continue}Math.hypot(N.x-l.nx,N.y-l.ny)<ra+1.5&&(Ta(N.dano),Wt(N.x,N.y,4,["#ff5a8a","#ffffff"],50),l.tirosInimigos.splice(x,1))}for(let x=l.raios.length-1;x>=0;x--){const N=l.raios[x];if(N.dono){if(N.dono.morto){l.raios.splice(x,1);continue}N.x=N.dono.x,N.y=N.dono.y}if(N.aviso>0){N.aviso-=M;continue}N.ligou||(N.ligou=!0,l.tremor=Math.max(l.tremor,.2),n(110,.4,"sawtooth",.06)),N.vida-=M,N.tick-=M,N.giro&&(N.ang+=N.giro*M),N.seg&&l.alien&&(N.x=l.alien.x,N.y=l.alien.y+8);const H=l.nx-N.x,te=l.ny-N.y,Q=H*Math.cos(N.ang)+te*Math.sin(N.ang),Ce=Math.abs(-H*Math.sin(N.ang)+te*Math.cos(N.ang));Q>0&&Q<400&&Ce<8&&N.tick<=0&&(Ta(N.dano||1),N.tick=.3),N.vida<=0&&l.raios.splice(x,1)}for(let x=l.campos.length-1;x>=0;x--){const N=l.campos[x];if(N.aviso>0){N.aviso-=M,N.aviso<=0&&(l.tremor=Math.max(l.tremor,.15),n(100,.2,"sawtooth",.05));continue}N.vida-=M,N.tick-=M,Math.hypot(l.nx-N.x,l.ny-N.y)<N.r+3&&N.tick<=0&&(Ta(1),N.tick=.5),N.vida<=0&&l.campos.splice(x,1)}}function kt(){for(const M of[...l.inimigos]){const x=si[M.tipo];if(Math.hypot(M.x-l.nx,M.y-l.ny)>=x.raio+ra||M.sumido>0)continue;if(M.tipo==="chefe"||M.tipo==="alien"){if(Ta(x.dano)){const te=l.nx-M.x,Q=l.ny-M.y,Ce=Math.hypot(te,Q)||1;l.nx+=te/Ce*18,l.ny+=Q/Ce*18}continue}if(x.dano<=0){const te=M.x-l.nx,Q=M.y-l.ny,Ce=Math.hypot(te,Q)||1;M.x+=te/Ce*8,M.y+=Q/Ce*8;continue}Wt(M.x,M.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const H=l.inimigos.indexOf(M);H>=0&&l.inimigos.splice(H,1),Ta(x.dano)}}function gi(M){if(l.ta+=M,l.alien||(l.t+=M),l.invul=Math.max(0,l.invul-M),l.tremor=Math.max(0,l.tremor-M),l.flash=Math.max(0,l.flash-M),l.imaT=Math.max(0,l.imaT-M),l.turboT=Math.max(0,l.turboT-M),l.escudoT=Math.max(0,l.escudoT-M),l.buffVelT=Math.max(0,l.buffVelT-M),l.buffXpT=Math.max(0,l.buffXpT-M),l.buffDanoT>0&&(l.buffDanoT-=M,l.buffDanoT<=0&&(l.buffDanoT=0,l.danoGlobal/=1.5)),l.aviso=Math.max(0,l.aviso-M),l.comboT>0&&(l.comboT-=M,l.comboT<=0&&(l.combo=0)),l.upgFx&&(l.upgFx.t-=M,l.upgFx.t<=0&&(l.upgFx=null)),et(M),l.alien?on(M):ln(M),l.recarga-=M,l.arma===1&&l.recarga<=0){const x=Ct();x?(ko(x),l.recarga=1/(l.cadencia*l.recargaGlobal*(l.turboT>0?2:1))):l.recarga=.05}l.barreira<l.barreiraMax&&(l.barreiraT+=M,l.barreiraT>=l.tempoBarreira&&(l.barreira+=1,l.barreiraT=0,qt(l.nx,l.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),Ot(M),Jt(M),mi(M),kt();for(const x of l.ondas)x.r+=x.v*M;l.ondas=l.ondas.filter(x=>x.r<x.max);for(let x=l.parts.length-1;x>=0;x--){const N=l.parts[x];N.x+=N.vx*M,N.y+=N.vy*M,N.vida-=M,N.vida<=0&&l.parts.splice(x,1)}for(let x=l.textos.length-1;x>=0;x--){const N=l.textos[x];N.y-=14*M,N.vida-=M,N.vida<=0&&l.textos.splice(x,1)}for(const x of l.inimigos)x.piscar=Math.max(0,(x.piscar||0)-M);if(l.hp<=0&&!l.pendente)if(l.alien)l.pendente="expulso";else{hp();return}if(l.pendente){const x=l.pendente;l.pendente=null,Lt(x==="vitoria");return}l.xp>=l.xpProx&&fp()}let qn=[];const Wr=M=>M.nivel?M.nivel(l):l.niveis[M.id]|0;function cp(M,x=3){const N=[...M],H=[];for(;N.length&&H.length<x;){const te=$=>(typeof $.peso=="function"?$.peso(l):$.peso)||1,Q=N.reduce(($,ve)=>$+te(ve),0);let Ce=Math.random()*Q,We=0;for(let $=0;$<N.length;$++)if(Ce-=te(N[$]),Ce<=0){We=$;break}H.push(N.splice(We,1)[0])}return H}function fp(){l.xp-=l.xpProx,l.nivel+=1,l.xpProx=Math.round(l.xpProx*1.3+2);const M=U_.filter(Q=>Wr(Q)<Q.max&&(!Q.requer||Q.requer(l)));if(qn=cp(M),!qn.length)return;Ge="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),Ae.className="arc-painel arc-upgrade";const x=i("div","arc-up-topo"),N=i("div");N.append(i("small",null,`SUBIU PARA O NÍVEL ${l.nivel}`),i("h3",null,"ESCOLHA UM UPGRADE"));const H=i("div","arc-arsenal");l.slots.forEach((Q,Ce)=>H.append(i("span",Q?"on":"",Q?`${Ce+2} ${ud[Q]} · N${l.armasNivel[Q]}`:`${Ce+2} VAZIO`))),x.append(N,H);const te=i("div","arc-cartas");qn.forEach((Q,Ce)=>{const We=Wr(Q),$=i("button","arc-carta");$.style.setProperty("--cor",Q.cor||"#4aa8ff");const ve=i("span","arc-carta-topo");ve.append(i("i",null,Q.icone||"▲"),i("small",null,Q.grupo||"UPGRADE"),i("em",null,(typeof Q.raridade=="function"?Q.raridade(l):Q.raridade)||"COMUM"));const be=i("span","arc-up-pips");for(let z=1;z<=Q.max;z++)be.append(i("i",z<=We?"on":z===We+1?"prox":""));$.append(ve,i("b",null,Q.nome),i("span","arc-desc",Q.desc),be,i("strong",null,`[${Ce+1}] ESCOLHER · N${We} → N${We+1}`)),$.onclick=()=>Hf(Ce),te.append($)}),Ae.replaceChildren(x,te,i("p","arc-up-dica","A partida fica pausada enquanto você decide. Cada arma chega no máximo ao nível 4.")),Ae.hidden=!1}function Hf(M){if(Ge!=="escolha"||!qn[M])return;const x=qn[M];x.aplicar(l),x.nivel||(l.niveis[x.id]=(l.niveis[x.id]|0)+1),Pn(),l.upgFx={t:1,max:1},Wt(l.nx,l.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),qt(l.nx,l.ny-16,`▲ ${x.nome}`,"#ffe14a"),Ae.hidden=!0,Ge="jogando",Be=performance.now(),n(660,.08,"triangle",.05)}const cl=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Canhões e lente do laser",lado:"dir",ancora:[.88,.42],ids:["dano","cadencia","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],Ka=document.createElement("canvas");Ka.width=Ka.height=128,Ka.className="of-nave";const Zt=Ka.getContext("2d");Zt.imageSmoothingEnabled=!1;let fl=null,Xr=null;function up(M){const x=_n(128,128),N="#2e7de0",H="#8b93a8",te="#5a6176",Q="#c9cdd8",Ce="#171b2c",We="#ff7a3a",$="#e2533a";for(const[z,ie]of[[44,34],[82,92]]){for(let ye=0;ye<3;ye++)x.linha(z+ye,92,ie+ye,118,ye===1?H:te);x.retangulo(ie-5,118,13,3,Q)}x.retangulo(0,122,128,6,"#12172b");for(let z=0;z<128;z+=8)x.retangulo(z,123,4,4,"#ffd23f");x.disco(62,60,38,N),x.disco(65,62,33,Ce),x.elipse(46,30,7,3,"#cfe9ff"),x.elipse(40,36,3,2,"#9cc9ff");for(const[z,ie,ye,_e]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])x.retangulo(z,ie,ye,_e,te),x.retangulo(z,ie,ye,1,H),x.retangulo(z+2,ie+3,ye-4,2,"#2d3348");for(const[z,ie,ye,_e]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])x.linha(z,ie,ye,_e,We),x.linha(z+1,ie+1,ye+1,_e+1,"#b34a1e");for(const[z,ie,ye]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])x.pixel(z,ie,ye);x.disco(65,62,14,H),x.disco(65,62,12,"#10131f");for(const[z,ie]of[[50,47],[79,47],[50,76],[79,76]])x.retangulo(z,ie,3,3,Q);for(let z=0;z<M.bateria;z++)x.retangulo(51+z*5,85,4,6,"#10131f"),x.retangulo(52+z*5,86,2,4,"#7dff9a");x.disco(80,34,5,Q),x.disco(80,34,4,"#8bd3ff"),x.retangulo(77,33,6,1,"#ffffff");for(let z=0;z<M.casco;z++){const ie=2.6+z*.5,ye=Math.round(62+Math.cos(ie)*35),_e=Math.round(60+Math.sin(ie)*35);x.retangulo(ye-2,_e-2,5,5,te),x.retangulo(ye-1,_e-1,3,3,Q)}const ve=1+M.projetil,be=18+Math.floor(M.dano*1.6);for(let z=0;z<ve;z++){const ie=48+z*9;x.retangulo(88,ie-2,8,9,H),x.retangulo(90,ie,be,5,$),x.retangulo(90,ie,be,1,"#ff9a6a"),x.retangulo(90+be,ie-1,3,7,Q),M.lente>0&&x.disco(90+be+5,ie+2,2,"#7be3ff");for(let ye=0;ye<M.cadencia;ye++)x.retangulo(92+ye*4,ie+1,1,3,"#ffd23f")}x.retangulo(16,50,24,22,H);for(const z of[20,26,32])x.retangulo(z,50,2,22,te);x.poligono([[16,50],[8,44],[8,78],[16,72]],te),x.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),M.motor>=3&&(x.retangulo(18,76,14,6,H),x.retangulo(14,76,4,6,te)),M.motor>=2&&(x.poligono([[28,50],[32,41],[36,50]],We),x.poligono([[28,72],[32,81],[36,72]],We)),x.retangulo(63,10,3,14,H),x.disco(64,8,4,"#e2243a"),x.pixel(63,6,"#ffb3ba");for(let z=0;z<Math.min(4,M.ima);z++)x.elipse(72+z*5,17-z*2,4,2,z%2?H:Q);return M.xp>0&&(x.retangulo(55,14,2,8,H),x.disco(56,13,2,"#7dff9a")),x.contorno("#070a1a"),x.c}const qr=(M,x,N,H)=>{Zt.fillStyle=H;for(let te=-N;te<=N;te++)for(let Q=-N;Q<=N;Q++)Q*Q+te*te<=N*N+.5&&Zt.fillRect(M+Q,x+te,1,1)};function Wf(M){const x=B.oficina,N=Xr&&M-Xr.t0<1.2?{i:Xr.i,u:(M-Xr.t0)/1.2}:null;Zt.clearRect(0,0,128,128),fl&&Zt.drawImage(fl,0,0);const H=x.nucleo>=4?["#ff7a2a","#ffc14a"]:x.nucleo>=2?["#22b85a","#7dff9a"]:["#2f8cff","#8bd3ff"],te=Math.sin(M*4)>0?1:0;qr(65,62,9+te,H[0]),qr(65,62,6,H[1]),qr(65,62,3,"#ffffff"),Zt.fillStyle=H[1];for(let ve=0;ve<6;ve++){const be=M*2+ve*Math.PI/3;Zt.fillRect(Math.round(65+Math.cos(be)*12),Math.round(62+Math.sin(be)*12),1,1)}const Q=ve=>{const be=Math.round((8+x.motor*3+Math.floor(Math.random()*4))*(N&&N.i===1?1+1.5*(1-N.u):1));for(let z=0;z<be;z++){const ie=Math.max(1,Math.round((1-z/be)*12));Zt.fillStyle=z<be*.35?"#fff0a0":z<be*.7?"#ffc83d":"#ff7a3a",Zt.fillRect(7-z,ve-(ie>>1),1,ie)}};Q(61),x.motor>=3&&Q(79),Math.floor(M*2)%2&&(Zt.fillStyle="#ff9aa6",Zt.fillRect(63,6,2,2));const Ce=1+x.projetil,We=18+Math.floor(x.dano*1.6);if(Math.floor(M*3)%2)for(let ve=0;ve<Ce;ve++)Zt.fillStyle="#ffe14a",Zt.fillRect(90+We+3,48+ve*9+2,2,1);const $=x.escudo>0?.35+.13*x.escudo:.12;Zt.globalAlpha=Math.min(1,$),Zt.fillStyle="#7dff9a";for(const[ve,be]of[[48,!0],[51,x.escudo>=4]])if(be)for(let z=0;z<72;z+=2){const ie=z*Math.PI*2/72+M*.4;Zt.fillRect(Math.round(62+Math.cos(ie)*ve),Math.round(60+Math.sin(ie)*ve),2,2)}Zt.globalAlpha=1,N&&dp(N,x)}function dp(M,x){const N=cl[M.i],H=Math.round(N.ancora[0]*128),te=Math.round(N.ancora[1]*128),Q=M.u,Ce=(We,$,ve,be,z=28)=>{Zt.fillStyle=be;for(let ie=0;ie<z;ie++){const ye=ie*Math.PI*2/z;Zt.fillRect(Math.round(We+Math.cos(ye)*ve),Math.round($+Math.sin(ye)*ve),2,2)}};Zt.globalAlpha=1-Q,Ce(H,te,4+Q*26,"#ffe14a"),Zt.fillStyle="#ffffff";for(let We=0;We<10;We++){const $=We*.63+1,ve=Q*34;Zt.fillRect(Math.round(H+Math.cos($)*ve),Math.round(te+Math.sin($)*ve-Q*6),2,2)}if(M.i===0)qr(65,62,12+Math.round(Q*8),"#ffffff");else if(M.i===2)Ce(62,60,39,"#ffffff",64);else if(M.i===3)Ce(64,8,Q*42,"#8bd3ff",36),Ce(64,8,Q*24,"#ffffff",24);else if(M.i===4){const We=18+Math.floor(x.dano*1.6);for(let $=0;$<1+x.projetil;$++)qr(90+We+6,50+$*9,4,"#ffe14a")}else M.i===5&&Ce(62,60,48+Q*6,"#ffffff",72);Zt.globalAlpha=1}function ul(){const M=De.querySelector(".of-corpo");if(!M)return;const x=M.querySelector("svg");if(x.replaceChildren(),getComputedStyle(x).display==="none")return;const N=M.getBoundingClientRect(),H=Ka.getBoundingClientRect(),te="http://www.w3.org/2000/svg";M.querySelectorAll(".of-parte").forEach(Q=>{const Ce=cl[Number(Q.dataset.i)],We=Q.getBoundingClientRect(),$=(Ce.lado==="esq"?We.right:We.left)-N.left,ve=(We.top+We.bottom)/2-N.top,be=H.left+Ce.ancora[0]*H.width-N.left,z=H.top+Ce.ancora[1]*H.height-N.top,ie=$+(Ce.lado==="esq"?18:-18),ye=document.createElementNS(te,"path");ye.setAttribute("d",`M${$} ${ve} L${ie} ${ve} L${be} ${z}`),ye.setAttribute("class","of-linha");const _e=document.createElementNS(te,"circle");_e.setAttribute("cx",be),_e.setAttribute("cy",z),_e.setAttribute("r",4),_e.setAttribute("class","of-ponto"),x.append(ye,_e)})}window.addEventListener("resize",()=>{Ge==="oficina"&&ul()});function Xf(M=-1,x=""){const N=B.oficina;fl=up(N);const H=i("div","of-topo"),te=i("button","arc-btn","VOLTAR [ESC]");te.onclick=Yf,H.append(i("h3",null,"OFICINA · ENGENHARIA DA NAVE"),i("span","of-moedas",`◆ ${B.moedas}`),te);const Q=i("div","of-corpo"),Ce=i("div","of-col"),We=i("div","of-col"),$=i("div","of-centro");$.append(Ka,i("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),cl.forEach((z,ie)=>{const ye=i("div",ie===M?"of-parte upgradiada":"of-parte");ye.dataset.i=String(ie),ie===M&&ye.append(i("span","of-selo","▲ UPGRADE!")),ye.append(i("h4",null,z.nome),i("p","sub",z.sub));for(const _e of z.ids){const Fe=Tf.find(Ke=>Ke.id===_e),Ee=N[_e],ke=Ee>=Fe.max,mt=Fe.custo(Ee),pn=i("div",ie===M&&_e===x?"of-melhoria upg":"of-melhoria"),ni=i("div","info"),F=i("span","pips");for(let Ke=0;Ke<Fe.max;Ke++)F.append(i("i",Ke<Ee?Ke===Ee-1&&ie===M&&_e===x?"on nova":"on":""));ni.append(i("b",null,Fe.nome),i("small",null,Fe.desc),F);const ze=i("button","arc-btn pequeno",ke?"MÁX":`◆${mt}`);ze.disabled=ke||B.moedas<mt,ze.onclick=()=>{B.moedas>=mt&&!ke&&(B.moedas-=mt,B.oficina[_e]+=1,se(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),Xr={i:ie,t0:performance.now()/1e3},Pn(),Xf(ie,_e),dl())},pn.append(ni,ze),ye.append(pn)}(z.lado==="esq"?Ce:We).append(ye)});const ve=document.createElementNS("http://www.w3.org/2000/svg","svg");ve.setAttribute("class","of-svg"),Q.append(Ce,$,We,ve);const be=i("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");De.replaceChildren(H,Q,be),Wf(performance.now()/1e3),requestAnimationFrame(ul)}function dl(){D.textContent=`OFICINA (◆${B.moedas})`}function qf(){me=Ge==="fim"?"fim":"inicio",Ge="oficina",ot.hidden=!0,je.hidden=!0,Xf(),De.hidden=!1,requestAnimationFrame(ul)}function Yf(){Ge==="oficina"&&(Ge=me,De.hidden=!0,(me==="fim"?je:ot).hidden=!1,dl())}function hp(){Ge="fim",w("fim");const M=Math.min(D_,Math.floor(l.kills/30)+Math.floor(l.nivel/3)),x=Math.floor(l.t),N=x>B.tempo||l.kills>B.kills||l.onda>B.onda;B.tempo=Math.max(B.tempo,x),B.kills=Math.max(B.kills,l.kills),B.onda=Math.max(B.onda,l.onda),B.skin=(B.skin+1+Math.floor(Math.random()*(Fi.length-1)))%Fi.length,B.moedas+=M,se(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),je.replaceChildren(i("h3",null,"FIM DE JOGO"),i("p",null,`Tempo: ${Wo(x)} · Monstros: ${l.kills} · Nível: ${l.nivel} · Onda: ${l.onda} · Melhor combo: x${l.melhorCombo}`),i("p","ganhou",`+${M+l.moedasRun} ◆ MOEDAS ESPACIAIS`),i("p","dica",`${l.moedasRun} coletadas + ${M} de bônus · Recorde: ${Wo(B.tempo)} · ${B.kills} monstros · ${B.onda} ondas${N?" · NOVO RECORDE!":""}`));const H=i("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");H.onclick=hl;const te=i("button","arc-btn sec",`OFICINA (◆${B.moedas})`);te.onclick=qf;const Q=i("button","arc-btn sec","SAIR");Q.onclick=Qa,je.append(H,te,Q),je.hidden=!1}const Wo=M=>`${Math.floor(M/60)}:${String(M%60).padStart(2,"0")}`,$f=M=>M>=6?a.cristais[6]:M>=3?a.cristais[3]:M>=2?a.cristais[2]:a.cristais[1],Jf=(M,x,N,H,te)=>{R.fillStyle="#070a1a",R.fillRect(M-1,x-1,N+2,6),R.fillStyle="#3a2030",R.fillRect(M,x,N,4),R.fillStyle=te,R.fillRect(M,x,Math.max(0,Math.round(N*H)),4)};function pp(M){R.fillStyle="#0a0614",R.fillRect(0,0,Ut,Ft);for(let x=0;x<6;x++){const N=10+(M*22+x*40)%240;R.strokeStyle=`rgba(138, 92, 255, ${.28*(1-N/250)})`,R.lineWidth=1,R.beginPath(),R.arc(cn,aa,N,0,Math.PI*2),R.stroke()}for(let x=0;x<40;x++)R.fillStyle=Math.sin(M*2+x)>0?"#9a86c0":"#3a2f60",R.fillRect(x*53%Ut,x*31%Ft,1,1);R.strokeStyle="#8a5cff",R.lineWidth=2,R.strokeRect(dt.x0-3,dt.y0-3,dt.x1-dt.x0+6,dt.y1-dt.y0+6)}function Xo(M,x,N,H,te,Q="",Ce=!1){const We=M-(N+Ut/2),$=x-(H+Ft/2),ve=Math.min((Ut/2-10)/(Math.abs(We)||1e-6),(Ft/2-10)/(Math.abs($)||1e-6)),be=Math.round(Ut/2+We*ve),z=Math.round(Ft/2+$*ve);if(!(Ce&&Math.floor(l.ta*6)%2===0)&&(R.fillStyle="#070a1a",R.fillRect(be-3,z-3,7,7),R.fillStyle=te,R.fillRect(be-2,z-2,5,5),R.fillStyle="#ffffff",R.fillRect(be-1,z-1,3,3),Q)){const ie=be<Ut/2;R.font="bold 8px monospace",R.textAlign=ie?"left":"right";const ye=be+(ie?7:-7),_e=Math.max(10,Math.min(Ft-4,z+3));R.fillStyle="#070a1a",R.fillText(Q,ye+1,_e+1),R.fillStyle=Ce?"#ff9aa6":te,R.fillText(Q,ye,_e)}}function mp(){const M=performance.now()/1e3,x=l?l.cx:cn,N=l?l.cy:aa;if(R.save(),l&&l.alien?pp(M):V.desenhar(R,x,N,M,ll()),!l){R.restore();return}const H=Math.round(x-Ut/2),te=Math.round(N-Ft/2),Q=(F,ze,Ke=16)=>F>H-Ke&&F<H+Ut+Ke&&ze>te-Ke&&ze<te+Ft+Ke,Ce=!l.alien;R.save(),l.tremor>0&&R.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),R.translate(-H,-te),R.strokeStyle="rgba(74, 168, 255, 0.12)",R.lineWidth=1;for(const F of[30,62])R.beginPath(),R.arc(Math.round(l.nx),Math.round(l.ny),F,0,Math.PI*2),R.stroke();for(const F of l.campos){if(!Q(F.x,F.y,40))continue;const ze=Math.round(F.x),Ke=Math.round(F.y);if(F.aviso>0){const Mt=Math.floor(l.ta*8)%2===0;R.strokeStyle=Mt?"#ff3b4a":"#ffb3ba",R.lineWidth=1,R.setLineDash([3,3]),R.beginPath(),R.arc(ze,Ke,F.r,0,Math.PI*2),R.stroke(),R.setLineDash([]),R.fillStyle="rgba(255, 59, 74, 0.12)",R.beginPath(),R.arc(ze,Ke,Math.max(0,F.r*(1-F.aviso/(F.avisoMax||1.4))),0,Math.PI*2),R.fill()}else{R.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(l.ta*10)})`,R.beginPath(),R.arc(ze,Ke,F.r,0,Math.PI*2),R.fill(),R.strokeStyle="#ff8a3a",R.lineWidth=2,R.beginPath(),R.arc(ze,Ke,F.r,0,Math.PI*2),R.stroke();for(let Mt=0;Mt<6;Mt++){const mn=l.ta*3+Mt*1.05;R.fillStyle="#ffd23f",R.fillRect(Math.round(ze+Math.cos(mn)*F.r*.6),Math.round(Ke+Math.sin(mn)*F.r*.6),2,2)}}}for(const F of l.campos)if(F.aviso>0&&F.ox!==void 0){const ze=(F.avisoMax-F.aviso)/.45;if(ze>=0&&ze<1){const Ke=Math.round(F.ox+(F.x-F.ox)*ze),Mt=Math.round(F.oy+(F.y-F.oy)*ze-Math.sin(Math.PI*ze)*24);R.fillStyle="#070a1a",R.fillRect(Ke-3,Mt-3,6,6),R.fillStyle="#ff7a3a",R.fillRect(Ke-2,Mt-2,4,4),R.fillStyle="#ffffff",R.fillRect(Ke-1,Mt-2,2,1)}}if(Ce){if(o.desenhar(R,H,te,Ut,Ft,M),l.buraco&&Q(l.buraco.x,l.buraco.y,30)){h_(R,l.buraco.x,l.buraco.y,l.ta,Math.min(1,l.buraco.vida/3));const F=`${Math.ceil(l.buraco.vida)}s`,ze=Math.round(l.buraco.x),Ke=Math.round(l.buraco.y)-28;R.save(),R.font="bold 8px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(F,ze+1,Ke+1),R.fillStyle=l.buraco.vida<8&&Math.floor(l.ta*6)%2===0?"#ff9aa6":"#d9a8ff",R.fillText(F,ze,Ke),R.restore()}for(const F of l.rochas){if(!Q(F.x,F.y,20))continue;const ze=F.hp<=F.hpMax*.34?2:F.hp<=F.hpMax*.67?1:0,Ke=r[F.tam].quadros[ze];F.piscar>0&&(R.globalAlpha=.6),R.drawImage(Ke,Math.round(F.x-Ke.width/2),Math.round(F.y-Ke.height/2)),R.globalAlpha=1}for(const F of l.itens)!Q(F.x,F.y)||F.vida<4&&F.tipo!=="moedaEsp"&&Math.floor(l.ta*8)%2===0||(fa[F.tipo]&&(R.save(),R.globalAlpha=.22+.14*Math.sin(l.ta*6+F.fase),R.fillStyle=fa[F.tipo].cor,R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),10,0,Math.PI*2),R.fill(),R.restore()),R.drawImage(s[F.tipo],Math.round(F.x-6),Math.round(F.y-6+Math.sin(l.ta*4+F.fase))));for(const F of l.cristais)Q(F.x,F.y)&&R.drawImage($f(F.v),Math.round(F.x-3.5),Math.round(F.y-4.5+Math.sin(l.ta*4+F.fase)))}for(const F of l.trilhasFogo){if(!Q(F.x,F.y,12))continue;const ze=Math.max(0,F.vida/F.max),Ke=1+Math.floor(Math.sin(l.ta*18+F.x)*1.5);R.globalAlpha=Math.max(.18,ze),R.fillStyle="#8f1d20",R.fillRect(Math.round(F.x)-5,Math.round(F.y)-2,10,5),R.fillStyle="#ff5a2a",R.fillRect(Math.round(F.x)-3,Math.round(F.y)-4-Ke,7,7+Ke),R.fillStyle="#ffe14a",R.fillRect(Math.round(F.x)-1,Math.round(F.y)-3-Ke,3,4+Ke),R.fillStyle="#ffffff",R.fillRect(Math.round(F.x),Math.round(F.y)-3-Ke,1,2),R.globalAlpha=1}for(const F of l.inimigos){if(!Q(F.x,F.y,40))continue;const ze=Math.floor(l.ta*6+F.fase)%2;let Ke;if(F.tipo==="alien"){const Mt=u(F.v);Ke=(F.piscar>0?Mt.brancos:Mt.quadros)[Math.floor(l.ta*3)%2],R.globalAlpha=F.sumido>0?.25:F.estado==="carga"&&Math.floor(l.ta*16)%2===0?.6:1}else if(F.tipo==="chefe"){const Mt=h(F.b);Ke=(F.piscar>0?Mt.brancos:Mt.quadros)[Math.floor(l.ta*4)%2];const mn=25+Math.sin(l.ta*4)*3;R.fillStyle="rgba(5, 0, 12, .72)",R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),mn,0,Math.PI*2),R.fill(),R.strokeStyle=Math.floor(l.ta*8)%2?"#ff233f":"#6c1230",R.lineWidth=2,R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),mn+3,0,Math.PI*2),R.stroke()}else{const Mt=N_[F.tipo]||F.tipo,mn=p(F.v).m[Mt];Ke=(F.piscar>0?mn.brancos:mn.quadros)[ze],F.tipo==="fantasma"&&(R.globalAlpha=.85)}if(R.drawImage(Ke,Math.round(F.x-Ke.width/2),Math.round(F.y-Ke.height/2)),R.globalAlpha=1,F.tipo==="chefe")R.fillStyle="#ff233f",R.fillRect(Math.round(F.x)-7,Math.round(F.y)-5,4,2),R.fillRect(Math.round(F.x)+4,Math.round(F.y)-5,4,2),R.fillStyle="#ffffff",R.fillRect(Math.round(F.x)-6,Math.round(F.y)-5,1,1),R.fillRect(Math.round(F.x)+5,Math.round(F.y)-5,1,1),F.movEsp&&F.movEsp.carga>0&&(R.strokeStyle=F.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",R.lineWidth=2,R.setLineDash([3,3]),R.beginPath(),F.movEsp.tipo==="minhoca"?R.arc(Math.round(F.x),Math.round(F.y),20+Math.sin(l.ta*12)*4,0,Math.PI*2):(R.moveTo(Math.round(F.x),Math.round(F.y)),R.lineTo(Math.round(F.x+F.movEsp.dx*240),Math.round(F.y+F.movEsp.dy*240))),R.stroke(),R.setLineDash([]));else if(F.tipo==="curandeiro"){R.save(),R.globalAlpha=.3,R.strokeStyle="#7dff9a",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),Es,0,Math.PI*2),R.stroke(),R.restore();const Mt=9+Math.sin(l.ta*6+F.fase)*2;R.strokeStyle="#7dff9a",R.lineWidth=1,R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),Mt,0,Math.PI*2),R.stroke(),R.fillStyle="#ffffff",R.fillRect(Math.round(F.x)-1,Math.round(F.y)-10,3,7),R.fillRect(Math.round(F.x)-3,Math.round(F.y)-8,7,3)}else if(F.tipo==="amplificador"){R.save(),R.globalAlpha=.3,R.strokeStyle="#ff7ab8",R.lineWidth=1,R.setLineDash([2,4]),R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),Es,0,Math.PI*2),R.stroke(),R.restore();const Mt=11+(l.ta*8+F.fase)%5;R.strokeStyle=`rgba(255, 122, 184, ${.9-(Mt-11)*.12})`,R.lineWidth=2,R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),Mt,0,Math.PI*2),R.stroke(),R.fillStyle="#ff7ab8";for(const mn of[-4,0,4])R.fillRect(Math.round(F.x+mn),Math.round(F.y-10-Math.abs(mn)/2),2,4)}else F.tipo==="fulminante"&&(R.strokeStyle="#38c8ff",R.lineWidth=1,R.beginPath(),R.moveTo(Math.round(F.x)-8,Math.round(F.y)-7),R.lineTo(Math.round(F.x)-3,Math.round(F.y)-12),R.lineTo(Math.round(F.x),Math.round(F.y)-8),R.lineTo(Math.round(F.x)+5,Math.round(F.y)-13),R.stroke());if(F.buffT>0){R.fillStyle="#ffe14a";for(const Mt of[-5,3])R.fillRect(Math.round(F.x+Mt),Math.round(F.y-13),3,1),R.fillRect(Math.round(F.x+Mt+1),Math.round(F.y-14),1,1)}}for(const F of l.tirosInimigos)Q(F.x,F.y,4)&&(R.fillStyle="#ff5a8a",R.fillRect(Math.round(F.x)-2,Math.round(F.y)-2,4,4),R.fillStyle="#ffd0e0",R.fillRect(Math.round(F.x)-1,Math.round(F.y)-1,2,2));if(l.alien&&l.alien.estado==="aviso"){const F=l.alien;R.strokeStyle=Math.floor(l.ta*14)%2?"#ff3b4a":"#ffb3ba",R.lineWidth=2,R.setLineDash([4,4]),R.beginPath(),R.moveTo(Math.round(F.x),Math.round(F.y)),R.lineTo(Math.round(F.x+F.dirX*300),Math.round(F.y+F.dirY*300)),R.stroke(),R.setLineDash([])}for(const F of l.raios){const ze=F.x+Math.cos(F.ang)*400,Ke=F.y+Math.sin(F.ang)*400;R.beginPath(),R.moveTo(Math.round(F.x),Math.round(F.y)),R.lineTo(Math.round(ze),Math.round(Ke));const Mt=F.cor||"#ff3bd4";F.aviso>0?(R.strokeStyle=Math.floor(l.ta*16)%2?Mt:"#ffffff",R.lineWidth=1,R.setLineDash([3,3]),R.stroke(),R.setLineDash([])):(R.strokeStyle=Mt,R.lineWidth=7,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=3,R.stroke())}for(const F of l.tiros)R.fillStyle=F.critico?"#ff5a2a":"#ffe14a",R.fillRect(Math.round(F.x)-(F.critico?2:1),Math.round(F.y)-(F.critico?2:1),F.critico?4:3,F.critico?4:3),R.fillStyle="#ffffff",R.fillRect(Math.round(F.x),Math.round(F.y),1,1);if(l.laser){const F=Math.cos(l.laser.ang),ze=Math.sin(l.laser.ang),Ke=l.nx+F*l.laser.len,Mt=l.ny+ze*l.laser.len;R.beginPath(),R.moveTo(Math.round(l.nx+F*7),Math.round(l.ny+ze*7)),R.lineTo(Math.round(Ke),Math.round(Mt)),R.strokeStyle=Math.floor(l.ta*24)%2?"#38c8ff":"#8bd3ff",R.lineWidth=4,R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1.5,R.stroke()}for(const F of l.misseis){const ze=Math.cos(F.ang),Ke=Math.sin(F.ang);R.fillStyle="#070a1a",R.fillRect(Math.round(F.x)-3,Math.round(F.y)-3,6,6),R.fillStyle="#ff9a3a",R.fillRect(Math.round(F.x+ze*1)-2,Math.round(F.y+Ke*1)-2,4,4),R.fillStyle="#ffffff",R.fillRect(Math.round(F.x+ze*2),Math.round(F.y+Ke*2),1,1)}const We=l.invul>0&&Math.floor(l.ta*14)%2===0,$=Math.PI/8,ve=Math.round(l.mira/$)*$,be=Math.round(l.nx),z=Math.round(l.ny),ie=l.tiers||{motor:0,armas:0},ye=(F,ze,Ke)=>{for(let Mt=0;Mt<Ke;Mt++)R.fillStyle=Mt<Ke*.35?"#fff0a0":Mt<Ke*.7?"#ffc83d":"#ff7a3a",R.fillRect(F-(Mt<Ke*.6?1:0),ze+Mt,Mt<Ke*.6?2:1,1)},_e=l.arma>=2?l.slots[l.arma-2]:"normal",Fe=_e==="turbo"&&l.boostE>0,Ee=2+ie.motor+(l.movendo?3:0)+(l.turboT>0||Fe?3:0)+(l.driftT>0?5:0)+Math.floor(Math.random()*2);ye(be,z+8,Ee),ie.motor>=2&&(ye(be-5,z+7,Math.max(2,Ee-3)),ye(be+4,z+7,Math.max(2,Ee-3))),R.fillStyle=l.driftT>0?"#ffffff":l.turboT>0||Fe?"#ff7a3a":"#ffd23f";const ke=Math.min(4,l.projeteis),mt=5+Math.min(4,Math.floor(ie.armas/2)),pn=-Math.sin(ve),ni=Math.cos(ve);for(let F=0;F<ke;F++){const ze=(F-(ke-1)/2)*2.4;for(let Ke=4;Ke<=4+mt;Ke++)R.fillRect(Math.round(be+Math.cos(ve)*Ke+pn*ze)-1,Math.round(z+Math.sin(ve)*Ke+ni*ze)-1,2,2);B.oficina.lente>0&&(R.fillStyle="#7be3ff",R.fillRect(Math.round(be+Math.cos(ve)*(5+mt)+pn*ze)-1,Math.round(z+Math.sin(ve)*(5+mt)+ni*ze)-1,2,2),R.fillStyle=l.turboT>0?"#ff7a3a":"#ffd23f")}if(R.drawImage(We?q.branca:q.c,be-10,z-10),l.upgFx){const F=1-l.upgFx.t/l.upgFx.max;R.globalAlpha=.7*(1-F),R.drawImage(q.branca,be-10,z-10),R.globalAlpha=1-F,R.strokeStyle="#ffe14a",R.lineWidth=2,R.beginPath(),R.arc(be,z,Math.max(0,8+F*22),0,Math.PI*2),R.stroke(),R.strokeStyle="#ffffff",R.lineWidth=1,R.beginPath(),R.arc(be,z,Math.max(0,5+F*14),0,Math.PI*2),R.stroke(),R.globalAlpha=1}for(const[F,ze,Ke]of[[l.buffDanoT,"#ff3b4a",14],[l.buffVelT,"#ffd23f",16],[l.buffXpT,"#a56bff",18]])F>0&&(F>2.5||Math.floor(l.ta*8)%2===0)&&(R.save(),R.globalAlpha=.55,R.strokeStyle=ze,R.lineWidth=1,R.setLineDash([2,3]),R.beginPath(),R.arc(be,z,Ke+Math.sin(l.ta*8)*1.2,0,Math.PI*2),R.stroke(),R.restore());l.escudoT>0&&(l.escudoT>1.5||Math.floor(l.ta*10)%2===0)&&(R.strokeStyle="#8bd3ff",R.lineWidth=2,R.beginPath(),R.arc(be,z,11,0,Math.PI*2),R.stroke()),l.barreira>0&&(R.strokeStyle="#7dff9a",R.lineWidth=1,R.globalAlpha=.7,R.beginPath(),R.arc(be,z,12+(l.barreira>1?2:0),0,Math.PI*2),R.stroke(),R.globalAlpha=1);for(const F of ti()){const ze=Math.round(F.x),Ke=Math.round(F.y);R.fillStyle="#070a1a",R.fillRect(ze-3,Ke-3,7,7),R.fillStyle="#ff3bd4",R.fillRect(ze-2,Ke-2,5,5),R.fillStyle="#ffffff",R.fillRect(ze-1,Ke-1,2,2)}for(const F of l.parts)Q(F.x,F.y,4)&&(R.fillStyle=F.cor,R.fillRect(Math.round(F.x),Math.round(F.y),2,2));for(const F of l.ondas)R.strokeStyle=F.cor,R.lineWidth=2,R.globalAlpha=Math.max(0,1-F.r/F.max),R.beginPath(),R.arc(Math.round(F.x),Math.round(F.y),Math.max(0,F.r),0,Math.PI*2),R.stroke(),R.globalAlpha=1;R.font="bold 8px monospace",R.textAlign="center";for(const F of l.textos)R.globalAlpha=Math.min(1,F.vida*2),R.fillStyle="#070a1a",R.fillText(F.txt,Math.round(F.x)+1,Math.round(F.y)+1),R.fillStyle=F.cor,R.fillText(F.txt,Math.round(F.x),Math.round(F.y)),R.globalAlpha=1;if(R.restore(),Ce){const F=l.cristais.filter(ze=>!Q(ze.x,ze.y,2)).map(ze=>({c:ze,d:Math.hypot(ze.x-l.nx,ze.y-l.ny)})).filter(ze=>ze.d<620).sort((ze,Ke)=>ze.d-Ke.d).slice(0,6);R.globalAlpha=.55+.35*Math.sin(M*6);for(const{c:ze}of F){const Ke=ze.x-(H+Ut/2),Mt=ze.y-(te+Ft/2),mn=Math.min((Ut/2-10)/(Math.abs(Ke)||1e-6),(Ft/2-10)/(Math.abs(Mt)||1e-6));R.drawImage($f(ze.v),Math.round(Ut/2+Ke*mn-3.5),Math.round(Ft/2+Mt*mn-4.5))}R.globalAlpha=1,l.buraco&&!Q(l.buraco.x,l.buraco.y,2)&&Xo(l.buraco.x,l.buraco.y,H,te,"#c43fff",`${Math.ceil(l.buraco.vida)}s`,l.buraco.vida<8),l.chefe&&!Q(l.chefe.x,l.chefe.y,2)&&Xo(l.chefe.x,l.chefe.y,H,te,"#ff3b4a");for(const ze of l.itens)ze.tipo==="moedaEsp"&&!Q(ze.x,ze.y,2)&&Xo(ze.x,ze.y,H,te,"#38c8ff");for(const ze of l.itens)fa[ze.tipo]&&!Q(ze.x,ze.y,2)&&Xo(ze.x,ze.y,H,te,fa[ze.tipo].cor,`${Math.ceil(ze.vida)}s`,ze.vida<5)}if(!l.alien){const F=(ze,Ke,Mt,mn,Sp="center")=>{R.font="bold 8px monospace",R.textAlign=Sp,R.fillStyle="#070a1a",R.fillText(ze,Ke+1,Mt+1),R.fillStyle=mn,R.fillText(ze,Ke,Mt)};l.combo>=3&&F(`COMBO x${l.combo}`,Ut-8,22,l.combo>=50?"#ff7ab8":l.combo>=25?"#ff9a3a":l.combo>=10?"#ffe14a":"#ffffff","right")}l.chefe&&(R.fillStyle="rgba(40, 0, 15, .34)",R.fillRect(0,0,Ut,5),R.fillRect(0,Ft-5,Ut,5),R.fillRect(0,0,5,Ft),R.fillRect(Ut-5,0,5,Ft),R.font="bold 7px monospace",R.textAlign="center",R.fillStyle="#070a1a",R.fillText(Da[l.chefe.b].nome,cn+1,8),R.fillStyle="#ff7084",R.fillText(Da[l.chefe.b].nome,cn,7),Jf(cn-60,11,120,l.chefe.hp/l.chefe.hpMax,"#ff3b4a")),l.alien&&Jf(cn-60,8,120,l.alien.hp/l.alien.hpMax,"#ff3bd4"),l.flash>0&&(R.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,l.flash*2.5)})`,R.fillRect(0,0,Ut,Ft)),R.restore()}let qo="";function gp(){if(!l)return;const M=l.arma>=2?l.slots[l.arma-2]:"normal",x=[l.buffDanoT>0?`DANO+ ${Math.ceil(l.buffDanoT)}`:"",l.buffVelT>0?`VELOC+ ${Math.ceil(l.buffVelT)}`:"",l.buffXpT>0?`XP×2 ${Math.ceil(l.buffXpT)}`:"",l.lentidao<1?"DETRITOS: LENTO":"",l.imaT>0?"ÍMÃ":"",l.escudoT>0?`ESCUDO ${Math.ceil(l.escudoT)}`:"",l.turboT>0?`TURBO ${Math.ceil(l.turboT)}`:"",M==="turbo"&&l.boostE>0?"HIPERPROPULSOR":"",l.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),N=`${l.hp}/${l.maxHp}|${l.nivel}|${Math.floor(l.xp)}|${l.xpProx}|${l.kills}|${Math.floor(l.t)}|${l.onda}|${l.fase}|${l.aviso>0}|${l.avisoTxt}|${x}|${B.moedas}|${!!l.alien}`;N!==qo&&(qo=N,pt.replaceChildren(...Array.from({length:l.maxHp},(H,te)=>i("i",te<l.hp?"cheia":"vazia"))),pt.setAttribute("aria-label",`${Math.max(0,l.hp)} de ${l.maxHp} pontos de vida`),ce.textContent=`NV ${l.nivel}`,Pe.style.width=`${Math.min(100,l.xp/l.xpProx*100)}%`,he.setAttribute("aria-valuenow",String(Math.floor(l.xp))),he.setAttribute("aria-valuemax",String(l.xpProx)),st.textContent=`☠ ${l.kills}`,Ye.textContent=l.alien?"BURACO NEGRO":l.onda>0?`F${l.fase} · ONDA ${l.onda}${l.ondaFila>0?` · ${l.ondaFila} A CAMINHO`:""}`:"",Ye.classList.toggle("alerta",!!l.alien||l.ondaEstado==="chefe"),Ie.textContent=x,ct.textContent=`◆ ${B.moedas}`,Le.hidden=!(l.aviso>0),Le.textContent=l.avisoTxt,fe.textContent=Wo(Math.floor(l.t)))}function xp(){const M=l&&(Ge==="jogando"||Ge==="escolha"||Ge==="pausa");if(Oe.style.visibility=M?"visible":"hidden",!!M)for(let x=1;x<=4;x++){const{b:N,nm:H,barra:te}=qe[x-1],Q=x===1?"normal":l.slots[x-2];let Ce="VAZIO",We=-1;Q&&(Ce=`${ud[Q]||Xs[Q].curto} · N${l.armasNivel[Q]}`,Q==="laser"?We=l.laserE/(l.laserMax*(1+.18*(l.armasNivel.laser-1))):Q==="missil"?We=1-Math.max(0,l.missilT)/l.missilMax:Q==="turbo"?We=l.boostE/l.boostMax:Q==="cura"?We=1-l.curaCd/l.curaMax:Q==="escudo"?We=l.escudoT>0?1:1-l.escudoCd/l.escudoMax:Q==="salto"?We=l.saltoCarga>0?1-l.saltoCarga/l.saltoCargaMax:1-l.saltoCd/l.saltoMax:Q==="drift"&&(We=l.driftT>0?1:1-l.driftCd/l.driftMax)),H.textContent!==Ce&&(H.textContent=Ce),te.style.display=We<0?"none":"block",te.style.width=`${Math.round(Math.max(0,Math.min(1,We))*100)}%`,N.classList.toggle("ativa",l.arma===x),N.classList.toggle("vazio",x>=2&&!Q),N.classList.toggle("quente",Q==="laser"&&l.laserQuente),N.disabled=x>=2&&!Q,N.setAttribute("aria-pressed",String(l.arma===x)),N.setAttribute("aria-label",`Arma ${x}: ${Ce}${Q==="laser"&&l.laserQuente?", superaquecida":""}`)}}function vp(){const M=Ge==="jogando"||Ge==="pausa";if(xe.hidden=!M,!M)return;const x=Ge==="pausa";xe.textContent=x?"▶":"II",xe.title=x?"Continuar (Esc)":"Pausar (Esc)",xe.setAttribute("aria-label",x?"Continuar jogo":"Pausar jogo")}function Zf(M){if(window.__curriculoArcadeGeracao!==t){it=!1,cancelAnimationFrame(X);return}if(!it)return;const x=Math.min((M-Be)/1e3,.05);Be=M,Ge==="jogando"&&gi(x),Ge==="oficina"&&Wf(M/1e3),V.passo(x),mp(),gp(),xp(),vp(),X=requestAnimationFrame(Zf)}function hl(){Ue.clear(),ue.ativo=!1,K.hidden=!0,U(),y="normal",g.pause(),A.pause(),v.currentTime=0,I(),Ya(),Hr(4),qo="",ot.hidden=!0,je.hidden=!0,Ae.hidden=!0,ne.hidden=!0,De.hidden=!0,Ge="jogando",Be=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function Yr(M){M&&Ge==="jogando"?(Ge="pausa",Ue.clear(),ue.ativo=!1,K.hidden=!0,ne.hidden=!1,_()):!M&&Ge==="pausa"&&(Ge="jogando",ne.hidden=!0,Be=performance.now(),I())}function Mp(){it||(it=!0,ae.classList.add("aberto"),y="normal",g.pause(),A.pause(),I(),U(),B=dd(),Me.textContent=B.tempo||B.kills||B.onda?`RECORDE  ${Wo(B.tempo)}  ·  ${B.kills} MONSTROS  ·  ONDA ${B.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",l=null,Ge="inicio",qo="",Ya(),ot.hidden=!1,je.hidden=!0,Ae.hidden=!0,ne.hidden=!0,De.hidden=!0,pt.replaceChildren(),ce.textContent="",st.textContent="",fe.textContent="",Ye.textContent="",Ie.textContent="",ct.textContent=`◆ ${B.moedas}`,Pe.style.width="0",dl(),Be=performance.now(),X=requestAnimationFrame(Zf),Xe.focus({preventScroll:!0}))}function Qa(){it&&(it=!1,Ue.clear(),ue.ativo=!1,K.hidden=!0,ae.classList.remove("aberto"),_(),cancelAnimationFrame(X))}Xe.onclick=hl,D.onclick=qf,pe.onclick=()=>Yr(!1),Ve.onclick=Qa,xe.onclick=()=>Yr(Ge==="jogando"),Te.onclick=Qa,ae.addEventListener("pointerdown",M=>{M.target===ae&&Ge!=="jogando"&&Ge!=="escolha"&&Qa()}),window.addEventListener("visibilitychange",()=>{document.hidden&&Yr(!0)});const Kf=M=>{const x=Se.getBoundingClientRect();ue.x=(M.clientX-x.left)/x.width*Ut,ue.y=(M.clientY-x.top)/x.height*Ft},_p=M=>{const x=Se.getBoundingClientRect(),N=(M.clientX-x.left)/x.width*Ut,H=(M.clientY-x.top)/x.height*Ft;ue.dx=N-ue.origemX,ue.dy=H-ue.origemY;const te=ue.dx*(x.width/Ut),Q=ue.dy*(x.height/Ft),Ce=Math.hypot(te,Q)||1,$=Math.min(1,28/Ce);Re.style.transform=`translate(calc(-50% + ${Math.round(te*$)}px), calc(-50% + ${Math.round(Q*$)}px))`};Se.addEventListener("pointerdown",M=>{if(Ge==="jogando"){if(ue.ativo=!0,ue.toque=M.pointerType!=="mouse",Kf(M),ue.toque){const x=Se.getBoundingClientRect();ue.origemX=ue.x,ue.origemY=ue.y,ue.dx=ue.dy=0,K.style.left=`${Math.round(M.clientX-x.left)}px`,K.style.top=`${Math.round(M.clientY-x.top)}px`,Re.style.transform="translate(-50%, -50%)",K.hidden=!1}Se.setPointerCapture?.(M.pointerId)}}),Se.addEventListener("pointermove",M=>{ue.ativo&&(ue.toque?_p(M):Kf(M))});for(const M of["pointerup","pointercancel"])Se.addEventListener(M,()=>{ue.ativo=!1,ue.toque=!1,ue.dx=ue.dy=0,K.hidden=!0});return window.addEventListener("keyup",M=>Ue.delete(M.code)),window.addEventListener("blur",()=>Ue.clear()),window.addEventListener("keydown",M=>{if(it){if(ft.includes(M.code)){M.preventDefault(),Ge==="jogando"&&Ue.add(M.code);return}if(M.code==="Escape")M.preventDefault(),Ge==="jogando"?Yr(!0):Ge==="pausa"?Yr(!1):Ge==="oficina"?Yf():(Ge==="inicio"||Ge==="fim")&&Qa();else if(M.code==="Space"||M.code==="Enter")(Ge==="inicio"||Ge==="fim")&&(M.preventDefault(),hl());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(M.code)){M.preventDefault();const x=Number(M.code.slice(-1));Ge==="escolha"?Hf(x-1):On(x)}}},!0),{abrir:Mp,fechar:Qa,estaAberto:()=>it}}const St=(n,e,t)=>{const i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.textContent=t),i},pd={mailto:()=>`mailto:${da.email}`,tel:()=>`tel:${da.telefoneTel}`,github:()=>da.github,linkedin:()=>da.linkedin,portfolio:()=>da.portfolio,repo:()=>da.repo},wf=n=>pd[n]?pd[n]():n,V_={email:()=>da.email,telefone:()=>da.telefone};function Rf(n){return/^(mailto|tel):/.test(n.href)||(n.target="_blank",n.rel="noopener noreferrer"),n.addEventListener("click",()=>setTimeout(()=>n.blur(),0)),n}function jc(n){const e=St("div","etiquetas");for(const t of n)e.append(St("span","etq",t));return e}function k_(n){const e=St("a","btn");return e.href=wf(n.url),Rf(e),e.append(St("span","ic",n.icone||"↗"),St("span","tx",n.rotulo)),e}function H_(n){const e=St("button","copiar","COPIAR");return e.type="button",e.title="Copiar para a área de transferência",e.addEventListener("click",async()=>{const t=V_[n]();let i=!1;try{await navigator.clipboard.writeText(t),i=!0}catch{}if(!i){const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;left:-999px;top:0;opacity:0",document.body.append(a),a.select();try{i=document.execCommand("copy")}catch{i=!1}a.remove()}e.textContent=i?"COPIADO!":"COPIE À MÃO",e.blur(),setTimeout(()=>{e.textContent="COPIAR"},1700)}),e}const W_=n=>`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;function md(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function X_(n){const e=St("div","numeros jogo"),t=(i,a)=>{const r=St("div","num");r.append(St("b",null,String(i)),St("span",null,a)),e.append(r)};if(n==="cassino"){const i=md("curriculo-cassino-v1");if(!i)return St("p","dica","Você ainda não girou nenhuma vez: comece pelas fichas de cortesia!");t(i.fichas|0,"fichas"),t((i.skins||[]).length,"skins ganhas"),t(i.giros|0,"giros dados")}else{const i=md("curriculo-arcade-v1");if(!i||!(i.tempo||i.kills))return St("p","dica","Nenhum recorde ainda: seja o primeiro a deixar a sua marca!");t(W_(i.tempo|0),"melhor tempo"),t(i.kills|0,"monstros"),t(i.onda|0,"onda mais alta"),t(`◆ ${i.moedas|0}`,"moedas espaciais")}return e}function q_(n){const e=St("details","cartao"+(n.atual?" atual":""));n.aberto&&(e.open=!0);const t=St("summary"),i=St("span","tit");i.append(St("b",null,n.titulo)),n.local&&i.append(St("i",null,n.local)),t.append(i,St("span","per",n.periodo+(n.atual?" · ATUAL":"")));const a=St("div","corpo");if(n.texto&&a.append(St("p",null,n.texto)),n.tags&&a.append(jc(n.tags)),n.links){const r=St("div","links");for(const s of n.links)r.append(k_(s));a.append(r)}return e.append(t,a),e}const gd={destaque:n=>St("p","destaque",n.texto),texto:n=>St("p",null,n.texto),dica:n=>St("p","dica",n.texto),numeros:n=>{const e=St("div","numeros");for(const t of n.itens){const i=St("div","num");i.append(St("b",null,t.v),St("span",null,t.r)),e.append(i)}return e},etiquetas:n=>jc(n.itens),grupo:n=>{const e=St("div","grupo");return e.append(St("h3",null,n.titulo),jc(n.itens)),e},cartao:q_,estatisticas:n=>X_(n.fonte),links:n=>{const e=St("div","contatos");for(const t of n.itens){const i=St("div","contato"),a=St("a","ln");a.href=wf(t.url),Rf(a);const r=St("span","tx");r.append(St("small",null,t.rotulo),St("b",null,t.valor)),a.append(St("span","ic",t.icone||"↗"),r),i.append(a),t.copiar&&i.append(H_(t.copiar)),e.append(i)}return e}};function Y_(n,e){const t=St("div","rodape"),i=St("span","prog"),a=St("span","pts");for(const r of e.zonas)a.append(St("i",e.visitadas.has(r.id)?"vis":""));if(i.append(a,St("span",null,`${e.visitadas.size}/${e.zonas.length} visitadas`)),t.append(i),e.proxima)t.append(St("span","prox",`PRÓXIMA: ${e.proxima.id.toUpperCase()} ${e.proxima.seta} ~${e.proxima.seg} s`));else if(e.visitadas.size>=e.zonas.length){const r=St("a","prox fim","VISITOU TUDO! MANDE UM OI ✉");r.href=wf("mailto"),Rf(r),t.append(r)}return t}function $_(n,e){const t=[];for(const a of n.blocos??(n.linhas||[]).map(r=>({tipo:"texto",texto:r})))t.push((gd[a.tipo]??gd.texto)(a));const i=t.filter(a=>a.tagName==="DETAILS");for(const a of i)a.addEventListener("toggle",()=>{if(a.open)for(const r of i)r!==a&&(r.open=!1)});return t.push(Y_(n,e)),t}const J_=.32,xd=.7;function Z_({somAtivo:n}){const e=new Audio("./audio/ambiente.mp3");e.loop=!0,e.preload="auto",e.volume=0;let t=!1,i=!1,a=0;const r=()=>{t=!0};for(const s of["pointerdown","keydown","touchstart"])window.addEventListener(s,r,{passive:!0});return{atualizar(s,o){const f=t&&n()&&!o&&!document.hidden?J_:0;a+=Math.max(-s*xd,Math.min(s*xd,f-a)),e.volume=Math.max(0,Math.min(1,a)),f>0&&e.paused&&!i?(i=!0,e.play().then(()=>{i=!1}).catch(()=>{i=!1,t=!1})):f===0&&a<=.001&&!e.paused&&e.pause()}}}const zh="curriculo-carinhos-v1";function K_(){try{const n=JSON.parse(localStorage.getItem(zh));return{jasmim:n?.jasmim|0,mazzy:n?.mazzy|0}}catch{return{jasmim:0,mazzy:0}}}function Q_(n){try{localStorage.setItem(zh,JSON.stringify(n))}catch{}}const j_=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."];let vd=null;function e2(){const n=document.createElement("canvas");n.width=9,n.height=8;const e=n.getContext("2d"),t=(i,a,r)=>{e.fillStyle=r,j_.forEach((s,o)=>[...s].forEach((f,c)=>{f==="X"&&e.fillRect(c+i,o+a,1,1)}))};for(const[i,a]of[[0,1],[2,1],[1,0],[1,2]])t(i,a,"#3a1030");return t(1,1,"#ff4f87"),e.fillStyle="#ffd0e0",e.fillRect(2,2,2,1),e.fillRect(2,3,1,1),n.toDataURL()}let Md=null;function t2(){const e=document.createElement("canvas");e.width=e.height=17;const t=e.getContext("2d"),i=[1,1,1,1,2,2,3,3],a=(o,f)=>o<=7&&f<=i[o];for(let o=-7;o<=7;o++)for(let f=-7;f<=7;f++)(a(Math.abs(o),Math.abs(f))||a(Math.abs(f),Math.abs(o)))&&(t.fillStyle=f+o>4?"#b01820":f+o<-4?"#ff5a5f":"#e3262d",t.fillRect(8+f,8+o,1,1));const r=t.getImageData(0,0,17,17).data,s=(o,f)=>o>=0&&f>=0&&o<17&&f<17&&r[(f*17+o)*4+3]>0;t.fillStyle="#3a0d12";for(let o=0;o<17;o++)for(let f=0;f<17;f++)!s(f,o)&&(s(f+1,o)||s(f-1,o)||s(f,o+1)||s(f,o-1))&&t.fillRect(f,o,1,1);return e.toDataURL()}function Gh(n,e,t,i,a,r,s){for(let o=0;o<s;o++){const f=document.createElement("i"),c=i[Math.floor(Math.random()*i.length)];f.className="coracao",f.style.cssText=`background-image:url(${n});width:${e*c}px;height:${t*c}px;left:${Math.round(a+(Math.random()-.5)*30)}px;top:${Math.round(r)}px;animation-delay:${(o*.09).toFixed(2)}s;`,f.style.setProperty("--dx",`${Math.round((Math.random()-.5)*80)}px`),f.style.setProperty("--sobe",`${70+Math.round(Math.random()*60)}px`),f.addEventListener("animationend",()=>f.remove()),document.body.append(f)}}function n2(n,e,t=5){vd??=e2(),Gh(vd,9,8,[2,2,3],n,e,t)}function i2(n,e,t=6){Md??=t2(),Gh(Md,17,17,[2,3,3],n,e,t)}function a2(n){const e=new Yt,t=new Yt;e.add(t);const i=n(3120732),a=n(2325061),r=new hi({color:16777202,emissive:6974037,emissiveIntensity:.5,roughness:.7,flatShading:!0,side:Jn}),s=n(16764730,{emissive:9069568,emissiveIntensity:.7}),o=new hi({color:16769260,emissive:8015968,emissiveIntensity:.4,roughness:.7,flatShading:!0}),f=new kn(1,6,4),c=new kn(1,6,4),u=new Sn(1,1,1,5),h=(S,T,I,_,w,L)=>{const U=new G(S,0,T),V=new G(I,_,w),q=V.clone().sub(U),B=new Et(u,a);B.scale.set(L,q.length(),L),B.position.copy(U).addScaledVector(q,.5),B.quaternion.setFromUnitVectors(new G(0,1,0),q.normalize()),t.add(B)},d=(S,T,I,_,w)=>{for(const L of[-1,1]){const U=new Et(c,i);U.scale.set(.13*w,.025*w,.065*w),U.position.set(S+Math.cos(_)*.1*w*L,T,I+Math.sin(_)*.1*w*L),U.rotation.set(0,-_,L*.35),t.add(U)}},p=(S,T,I,_)=>{const w=new Yt;w.position.set(S,T,I),w.rotation.x=.95;for(let U=0;U<5;U++){const V=U/5*Math.PI*2,q=new Et(f,r);q.scale.set(.075*_,.022*_,.15*_),q.position.set(Math.sin(V)*.1*_,0,Math.cos(V)*.1*_),q.rotation.y=V,w.add(q)}const L=new Et(f,s);return L.scale.setScalar(.045*_),L.position.y=.025*_,w.add(L),t.add(w),w},m=(S,T,I)=>{const _=new Et(f,o);_.scale.set(.04,.065,.04),_.position.set(S,T,I),t.add(_)};h(0,0,.02,.62,.03,.022),h(0,0,-.2,.34,.02,.016),h(0,0,.21,.4,-.01,.016),d(.01,.2,.01,0,1.05),d(.01,.38,.02,Math.PI/2,.9),d(-.1,.19,.02,.3,.8),d(.1,.23,0,-.3,.8);const E=p(.02,.66,.05,1.25),v=p(-.21,.38,.06,.95),g=p(.22,.44,.04,.9);m(-.08,.5,0),m(.1,.58,-.02),m(0,.8,-.02),e.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)});const A=new Ht;A.position.set(0,.85,.05),e.add(A);const P=new Ht;P.position.set(0,1.05,0),e.add(P);let y=0;return{raiz:e,cabeca:A,topo:P,carinho(){y=1},atualizar(S,T){y=Math.max(0,y-T*2.2);const I=Math.sin(y*Math.PI);t.rotation.z=Math.sin(S*1.3)*.045+Math.sin(y*18)*.12*y,t.rotation.x=Math.sin(S*.9+1)*.03,t.scale.setScalar(1+I*.22),E.rotation.y=Math.sin(S*.8)*.15,v.rotation.y=Math.sin(S*.7+2)*.2,g.rotation.y=Math.sin(S*.75+4)*.2}}}const As={G:"#8a8f9e",D:"#5b6070",W:"#f4f4f6",S:"#cdd0da",P:"#f29bb0",Y:"#d8d24c",B:"#1a1a22",E:"#ffffff",K:"#2a2a36"},Er=32,wr=24,r2=3,Vh=1,o2=["..GG........","..GGG.......","..GPGG......","..GPGGGGGGGG",".GGGGGGGGGGG",".GGGGGGGGDGG",".GGGGGDGGGDD",".GGEYYGGGGWW",".GGYBYGGGWWW",".GGYBYGGWWWW",".GGGGGGWWWWP",".GGGGGWWWWSW","..GGGGWWWWWW","...GGGGGWWWW","...GGDGGWWWW","..GGGGGDGWWW","..GGDGGGGWWW","..GGGGGDGGWW","..GGGGGGGGWW","..GGWWWWWWWS","..GWWWWWWWSS","..WWWWWWWSSS"],s2={cima:[[25,20],[26,20],[27,19],[28,18],[28,17],[28,16],[27,15],[27,14]],baixo:[[25,21],[26,21],[27,21],[28,20],[29,19],[29,18]]};function l2({cauda:n,olhos:e}){const t=o2.map(f=>[...f,...[...f].reverse()]),i=(f,c,u)=>{t[f][c]=u,t[f][23-c]=u};if(e==="piscando")for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"K"),i(9,f,"G");if(e==="feliz"){for(let f=3;f<=5;f++)i(7,f,"G"),i(8,f,"G"),i(9,f,"G");i(8,3,"K"),i(7,4,"K"),i(8,5,"K"),i(9,2,"P"),i(9,7,"P")}const a=document.createElement("canvas");a.width=Er,a.height=wr;const r=a.getContext("2d");t.forEach((f,c)=>f.forEach((u,h)=>{u!=="."&&(r.fillStyle=As[u],r.fillRect(h+r2,c+Vh,1,1))})),s2[n].forEach(([f,c],u)=>{r.fillStyle=u%3===2?As.D:As.G,r.fillRect(f-1,c,2,1)});const s=r.getImageData(0,0,Er,wr).data,o=(f,c)=>f>=0&&c>=0&&f<Er&&c<wr&&s[(c*Er+f)*4+3]>0;r.fillStyle=As.K;for(let f=0;f<wr;f++)for(let c=0;c<Er;c++)!o(c,f)&&(o(c+1,f)||o(c-1,f)||o(c,f+1)||o(c,f-1))&&r.fillRect(c,f,1,1);return a}const _d=1;function c2(){const n={},e=(d,p)=>{if(!n[d]){const m=new Ao(l2(p));m.colorSpace=Dn,m.magFilter=m.minFilter=en,m.generateMipmaps=!1,n[d]=new xf({map:m,transparent:!0,toneMapped:!1,alphaTest:.5})}return n[d]},t=new Yt,i=new rh(e("cima-abertos",{cauda:"cima",olhos:"abertos"}));i.center.set(.5,Vh/wr),i.position.y=.02;const a=document.createElement("canvas");a.width=a.height=32;const r=a.getContext("2d"),s=r.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(0,0,0,0.8)"),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,32,32);const o=new Et(new $i(.75,.5),new Yi({map:new Ao(a),transparent:!0,opacity:.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.03;const f=new Ht;f.position.y=.55;const c=new Ht;c.position.y=.8,t.add(o,i,f,c);let u=0,h=0;return{raiz:t,cabeca:f,topo:c,carinho(){u=1.6,h=1},atualizar(d,p,m){u=Math.max(0,u-p),h=Math.max(0,h-p*2.5);const E=Math.floor(d*(u>0?4:1.6))%2?"cima":"baixo";let v="abertos";u>0?v="feliz":(d+1.3)%4.1<.13&&(v="piscando"),i.material=e(`${E}-${v}`,{cauda:E,olhos:v});const g=1+Math.sin(d*2.2)*.012;i.scale.set(Er*m*_d,wr*m*_d*g,1),i.position.y=.02+Math.abs(Math.sin(h*Math.PI))*.12*h}}}const kh="curriculo-futebol-v1",ef=.25,f2=.085,u2=1.6,li=1.8,Oi=.9,Ln=.6,oo=new G(0,1,0),d2=new G(0,.4,.92).normalize();function h2(){try{return JSON.parse(localStorage.getItem(kh))?.gols|0}catch{return 0}}function p2(n){try{localStorage.setItem(kh,JSON.stringify({gols:n}))}catch{}}function m2(){const n=new tl(ef,2),e=(1+Math.sqrt(5))/2,t=[];for(const o of[-1,1])for(const f of[-e,e])t.push([0,o,f],[o,f,0],[f,0,o]);const i=t.map(o=>new G(...o).normalize()),a=n.attributes.position,r=new Float32Array(a.count*3),s=new G;for(let o=0;o<a.count;o+=3){s.set(0,0,0);for(let c=0;c<3;c++)s.add(new G(a.getX(o+c),a.getY(o+c),a.getZ(o+c)));s.normalize();const f=i.some(c=>s.dot(c)>Math.cos(.36));for(let c=0;c<3;c++)r.set(f?[.07,.07,.1]:[.97,.97,.97],(o+c)*3)}return n.setAttribute("color",new ui(r,3)),new Et(n,new hi({vertexColors:!0,flatShading:!0,roughness:.55}))}function g2(){const n=document.createElement("canvas");n.width=n.height=8;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,0.9)",e.fillRect(0,0,8,1),e.fillRect(0,0,1,8);const t=new Ao(n);return t.wrapS=t.wrapT=Us,t.magFilter=t.minFilter=en,t.generateMipmaps=!1,t}function x2(){const n=new Yt,e=new hi({color:16119285,roughness:.5,flatShading:!0}),t=o=>new Sn(.045,.045,o,6),i=(o,f,c,u,h)=>{const d=new Et(t(o),e);d.position.set(f,c,u),h==="x"?d.rotation.z=Math.PI/2:h==="z"&&(d.rotation.x=Math.PI/2),n.add(d)};for(const o of[-li/2,li/2])for(const f of[0,-Ln])i(Oi,o,Oi/2,f,"y");for(const o of[0,-Ln])i(li+.09,0,Oi,o,"x"),i(li+.09,0,.04,o,"x");for(const o of[-li/2,li/2])i(Ln,o,Oi,-Ln/2,"z"),i(Ln,o,.04,-Ln/2,"z");const a=(o,f)=>{const c=g2();return c.repeat.set(o/.15,f/.15),new Et(new $i(o,f),new Yi({map:c,transparent:!0,alphaTest:.3,side:Jn,depthWrite:!1}))},r=a(li,Oi);r.position.set(0,Oi/2,-Ln);const s=a(li,Ln);s.rotation.x=Math.PI/2,s.position.set(0,Oi,-Ln/2),n.add(r,s);for(const o of[-li/2,li/2]){const f=a(Ln,Oi);f.rotation.y=Math.PI/2,f.position.set(o,Oi/2,-Ln/2),n.add(f)}return n.traverse(o=>{o.isMesh&&o.material===e&&(o.castShadow=!0)}),n}function v2(n){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,1,16,16,15);i.addColorStop(0,"rgba(0,0,0,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32);const a=new Et(new $i(n*2,n*2),new Yi({map:new Ao(e),transparent:!0,opacity:.5,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.03,a}function M2({planeta:n,fincar:e,R:t,q:i,altura:a,NIVEL_MAR:r,dirsZonas:s,raioBloqueio:o,obstaculos:f,dirsSitios:c,camera:u,rotulosEl:h,camDir:d,bip:p}){let m=h2(),E=0,v="jogando",g=0,A=-1;const P=new fi,y=new fi,S=new fi,T=new fi,I=new G,_=new G,w=new G,L=new G,U=new G,V=new G,q=new Yt,B=m2(),J=v2(.35);B.position.y=ef,B.castShadow=!0;const re=new Ht;re.position.y=.85,q.add(J,B,re);const W={d:new G(0,1,0),ue:0,un:0,escala:1,piv:null};W.piv=e(q,W.d.clone(),0);const ge=x2(),se=new Ht;se.position.set(0,1.5,-Ln/2),ge.add(se);const ae={d:new G(0,1,0),ex:new G,ez:new G,escala:1,piv:null};ae.piv=e(ge,ae.d.clone(),0);const de=Ie=>{const ct=document.createElement("div");return ct.className="rotulo pet",ct.textContent=Ie,h.append(ct),ct},tt=de("bola"),He=de("gol"),vt=()=>m?`gol · ${m}`:"gol";function ut(Ie,ct,fe){if(!fe){Ie.style.opacity="0";return}ct.getWorldPosition(w).project(u),Ie.style.transform=`translate(${Math.round((w.x*.5+.5)*window.innerWidth)}px, ${Math.round((-w.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,Ie.style.opacity="1"}const pt=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].map(Ie=>new G(...Ie));function ce({folga:Ie,jogadorMin:ct=0,jogadorMax:fe=Math.PI,visivel:xe=-1,longe:Te=[],tentativas:we=400}){V.copy(oo).applyQuaternion(P.copy(i).invert());const Se=new G;for(let R=0;R<we;R++){Se.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();const K=Se.angleTo(V);if(!(K<ct||K>fe)&&!(xe>-1&&w.copy(Se).applyQuaternion(i).dot(d2)<xe)&&!(a(Se)<r+.1)&&!pt.some(Re=>a(w.copy(Se).addScaledVector(Re,.07).normalize())<r+.03)&&!Te.some(({d:Re,min:Le})=>Se.angleTo(Re)<Le)&&!s.some((Re,Le)=>Se.angleTo(Re)<o[Le]+Ie+.1)&&!f.some(Re=>Se.angleTo(Re.d)<Re.r+Ie)&&!Object.values(c).some(Re=>Se.angleTo(Re)<.25+Ie))return Se.clone()}return null}function he(Ie,ct){ae.d.copy(Ie),ae.piv.quaternion.setFromUnitVectors(oo,Ie),ge.rotation.y=ct,T.copy(ae.piv.quaternion).multiply(y.setFromAxisAngle(oo,ct)),ae.ex.set(1,0,0).applyQuaternion(T),ae.ez.set(0,0,1).applyQuaternion(T),ae.escala=.01}function Pe(Ie){W.d.copy(Ie),W.piv.quaternion.setFromUnitVectors(oo,Ie),W.ue=W.un=0,W.escala=.01}function st(Ie){const ct=ce({folga:.3,jogadorMin:.9,jogadorMax:Ie?1.7:Math.PI,visivel:Ie?.3:-1})??ce({folga:.2,jogadorMin:.7,jogadorMax:Ie?1.9:Math.PI,visivel:Ie?.1:-1,tentativas:800})??ce({folga:.1,tentativas:800})??ae.d.clone();he(ct,Math.random()*Math.PI*2);const fe=ce({folga:.12,jogadorMin:.55,jogadorMax:Ie?1:Math.PI,visivel:Ie?.5:-1,longe:[{d:ct,min:.9}]})??ce({folga:.06,jogadorMin:.4,tentativas:800})??W.d.clone();Pe(fe)}st(!0);function Ye(){v="comemorando",g=E+1,m+=1,p2(m),He.textContent=vt(),se.getWorldPosition(w).project(u);const Ie=(w.x*.5+.5)*window.innerWidth,ct=(-w.y*.5+.5)*window.innerHeight;i2(Ie,ct+40,6);const fe=document.createElement("div");fe.className="popup",fe.textContent="GOL!",fe.style.left=`${Math.round(Ie)}px`,fe.style.top=`${Math.round(ct)}px`,fe.style.fontSize="30px",document.body.append(fe),setTimeout(()=>fe.remove(),1e3),[523,659,784,1047,1319].forEach((xe,Te)=>p(xe,Te===4?.4:.11,"square",.05,Te*.09))}return{teste:{bola:W,gol:ae,colocarBola:Pe,colocarGol:he,golsAtuais:()=>m},atualizar(Ie,{vLeste:ct,vNorte:fe,VEL:xe,pulando:Te,pausado:we}){if(we)return;E+=Ie,P.copy(i).invert();const Se=v==="comemorando";U.copy(W.d),I.copy(W.d).applyQuaternion(i);const R=Math.acos(Math.min(1,Math.max(-1,I.y)));if(!Se&&!Te&&R<f2){const O=I.x,ot=-I.z,Xe=Math.hypot(O,ot)||1,D=ct*xe,b=fe*xe,Y=Math.hypot(D,b);let Z,le,Me;Y>.12&&(D*O+b*ot)/(Y*Xe)>-.2?(Z=D/Y*.75+O/Xe*.65,le=b/Y*.75+ot/Xe*.65,Me=Math.max(Math.hypot(W.ue,W.un),Y*1.5+.25)):(Z=O/Xe,le=ot/Xe,Me=.5);const Ae=Math.hypot(Z,le)||1;W.ue=Z/Ae*Me,W.un=le/Ae*Me,Y>.12&&E-A>.22&&(A=E,p(170,.06,"sine",.08),p(95,.08,"sine",.06,.02))}const K=Math.exp(-(Se?5:u2)*Ie);W.ue*=K,W.un*=K;const Re=Math.hypot(W.ue,W.un);Re<.01?W.ue=W.un=0:(L.set(-W.un,0,-W.ue).normalize(),y.setFromAxisAngle(L,Re*Ie),I.applyQuaternion(y),W.d.copy(I).applyQuaternion(P).normalize());const Le=(O,ot)=>{const Xe=Math.cos(ot);W.d.dot(O)<=Xe||(L.crossVectors(O,W.d),L.lengthSq()<1e-9&&L.set(1,0,0),L.normalize(),W.d.applyQuaternion(y.setFromAxisAngle(L,ot-Math.acos(Math.min(1,W.d.dot(O))))).normalize(),W.ue*=.3,W.un*=.3)};s.forEach((O,ot)=>Le(O,o[ot]+.03));for(const O of f)Le(O.d,O.r+.03);if(W.piv.quaternion.premultiply(y.setFromUnitVectors(U,W.d)),Re>=.01&&(w.set(W.ue,0,-W.un).normalize().applyQuaternion(P).applyQuaternion(T.copy(W.piv.quaternion).invert()),L.crossVectors(oo,w),L.lengthSq()>1e-9&&B.quaternion.premultiply(S.setFromAxisAngle(L.normalize(),Re*t*Ie/ef))),W.escala=W.escala+(1-W.escala)*(1-Math.exp(-6*Ie)),q.scale.setScalar(W.escala),ae.escala=ae.escala+(1-ae.escala)*(1-Math.exp(-6*Ie)),ge.scale.setScalar(ae.escala*(Se?1+Math.sin((E-g)*20)*.06:1)),Se)E>=g&&(v="jogando",st(!1));else{w.copy(W.d).sub(ae.d);const O=w.dot(ae.ex)*t,ot=w.dot(ae.ez)*t+Ln/2;Math.abs(O)<li/2-.12&&Math.abs(ot)<Ln/2-.02&&Math.abs(w.dot(ae.d))<.2&&Ye()}_.copy(ae.d).applyQuaternion(i),ut(tt,re,I.dot(d)>.2),ut(He,se,_.dot(d)>.2)}}}const Wn=5,va=6.5/Wn,tf=.7,qs=new G(0,1,0),_2=[[.95,30],[1.1,120],[1.1,210],[1.1,300],[2.15,75],[2.15,195],[2.15,315]];function nf(n,e){const t=e*Math.PI/180;return new G(Math.sin(n)*Math.cos(t),Math.cos(n),-Math.sin(n)*Math.sin(t))}const S2=n=>nf(..._2[n]??[1.2+n%3*.5,n*137.5]),jn=dn.map((n,e)=>S2(e)),qi={jasmim:nf(.4,180),mazzy:nf(.5,295)},Hh=(n,e)=>Object.values(qi).some(t=>n.angleTo(t)<e),y2=.6,Wh=n=>n.escala??y2,Fo=dn.map(n=>1.85*Wh(n)/Wn+.03),b2=Fo.map(n=>n+.22),E2=(n,e,t)=>n+(e-n)*t,zr=(n,e,t)=>Math.max(e,Math.min(t,n)),Ds=(n,e,t,i)=>E2(n,e,1-Math.exp(-t*i));function Cf(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function A2(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function ec(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,f=t-r,c=m=>m*m*(3-2*m),u=c(s),h=c(o),d=c(f);let p=0;for(let m=0;m<2;m++)for(let E=0;E<2;E++)for(let v=0;v<2;v++){const g=(m?u:1-u)*(E?h:1-h)*(v?d:1-d);p+=g*A2(i+m,a+E,r+v)}return p}const Sd=Math.cos(.5);function ol(n){const e=ec(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+ec(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+ec(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>Sd&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of jn){const a=n.dot(i);a>Sd&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const sl=.5,T2=window.matchMedia?.("(pointer: coarse)").matches&&Math.min(window.innerWidth,window.innerHeight)<900,w2=Number(navigator.deviceMemory||8)<=4,Po=T2||w2,Vn=new zM({antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});Vn.setPixelRatio(Math.min(window.devicePixelRatio||1,Po?1:2));Vn.shadowMap.enabled=!0;Vn.shadowMap.type=uo;document.body.appendChild(Vn.domElement);const Xn=new th;Xn.background=new gt(725030);const tn=new $n(42,1,.1,200);Xn.add(new Om(12374271,2366541,1));const ba=new zm(16773332,1.9);ba.position.set(7,Wn+9,9);ba.target.position.set(0,2,0);ba.castShadow=!0;ba.shadow.mapSize.set(Po?1024:2048,Po?1024:2048);Object.assign(ba.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});ba.shadow.bias=-4e-4;Xn.add(ba,ba.target);const Xh=new lh({color:16777215,size:.42,sizeAttenuation:!0,fog:!1}),qh=new hi({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),Yh=[],$h=[],Jh={uMarRaso:{value:new gt(5685998)},uMarMedio:{value:new gt(3112924)},uMarFundo:{value:new gt(1922744)},uEspuma:{value:new gt(13955580)},uAreia:{value:new gt(15981987)},uGrama0:{value:new gt(7327594)},uGrama1:{value:new gt(5027680)},uGrama2:{value:new gt(3117141)}};{const n=Cf(3),e=[];for(let a=0;a<900;a++){const r=new G(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new hn;t.setAttribute("position",new $t(e,3)),Xn.add(new W0(t,Xh));const i=new Et(new kn(4,32,32),new Yi({color:16773577,fog:!1}));i.position.set(24,16,-62),Xn.add(i)}const Gr=new Yt;Xn.add(Gr);{const i=new Uint8Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new G,s=255;for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const E=(m+.5-2)/320*2-1;for(let v=0;v<324;v++){const g=(v+.5-2)/320*2-1,[A,P,y]=a[h](g,E);r.set(A,P,y).normalize();const S=((p+m)*3*324+d+v)*4;i[S]=Math.round(zr(ol(r),0,1)*255),i[S+3]=s}}}const o=new sh(i,3*324,2*324,Kn,wn);o.minFilter=o.magFilter=fn,o.generateMipmaps=!1,o.needsUpdate=!0;const f=new hi({roughness:.9});f.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:sl}},Jh),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const c=new Et(new kn(Wn,128,96),f);c.receiveShadow=!0,Gr.add(c);const u=new Et(new kn(Wn*1.06,48,48),new Yi({color:6990079,transparent:!0,opacity:.1,side:Cn,depthWrite:!1}));Xn.add(u)}function Or(n,e,t=0){const i=new Yt;return i.quaternion.setFromUnitVectors(new G(0,1,0),e),n.position.y=Wn,n.rotation.y=t,i.add(n),Gr.add(i),i}const Tt=(n,e={})=>new hi({color:n,roughness:.8,flatShading:!0,...e});function Io(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const Fr=[];{const n=Cf(77),e=new G,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(qs)<.3*va)&&!jn.some((a,r)=>e.angleTo(a)<Fo[r]+.2)&&!Hh(e,.2)&&!(ol(e)<sl+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Yt,s=.5+n()*.45,o=new Et(new Sn(.1,.14,.6,6),Tt(8014379));o.position.y=.3;const f=n()>.5?0:1,c=new Et(new ga(.5,1.2,7),Tt(f===0?3120732:2460238));Yh.push({m:c.material,v:f}),c.position.y=1.1;const u=new Et(new ga(.38,.9,7),Tt(3453032));$h.push(u.material),u.position.y=1.7,r.add(o,c,u),r.scale.setScalar(s),Or(Io(r),a,n()*6),Fr.push({d:a,r:(.05*s+.02)*va})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new Et(new Mf(.22+n()*.25,0),Tt(9278376));r.position.y=.1;const s=new Yt;s.add(r),Or(Io(s),a,n()*6),Fr.push({d:a,r:.045*va,baixo:!0})}}const Pf=new Yt;Xn.add(Pf);{const n=Cf(5),e=qh;for(let t=0;t<10;t++){const i=new G(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Yt;for(let s=0;s<4;s++){const o=new Et(new tl(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=Wn+4+n()*2.5;const r=new Yt;r.quaternion.setFromUnitVectors(new G(0,1,0),i),r.add(a),Pf.add(r),Io(a)}}function R2(n){const e=new yf;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function C2(n,e){const t=new Yt,i=new gt(e),a=Tt(e,{emissive:e,emissiveIntensity:.1}),r=Tt(i.clone().multiplyScalar(.78)),s=Tt(i.clone().multiplyScalar(.5)),o=Tt(10133684),f=Tt(5922936),c=Tt(10119740),u=Tt(5913122),h=Tt(15856635),d=Tt(13225432),p=Tt(1776942),m=Tt(14693962),E=Tt(16762941),v=new hi({color:16774856,emissive:16771488,emissiveIntensity:1.2}),g=(S,T,I=0,_=0,w=0)=>{const L=new Et(S,T);return L.position.set(I,_,w),t.add(L),L},A=(S,T,I,_,w,L,U)=>g(new Sa(S,T,I),_,w,L,U),P=(S,T,I,_,w,L,U,V=12)=>g(new Sn(S,T,I,V),_,w,L,U),y=(S,T,I,_,w)=>g(new kn(S,10,8),T,I,_,w);switch(n){case"casa":{A(2.5,.22,2,o,0,.11,0),A(2.2,1.25,1.7,a,0,.84,0);for(const T of[-1,1]){const I=A(2.5,.12,1.15,s,0,1.78,T*.5);I.rotation.x=T*.62}A(2.56,.14,.16,Tt(i.clone().multiplyScalar(.35)),0,2.13,0);const S=new yf;S.moveTo(-.85,0),S.lineTo(.85,0),S.lineTo(0,.62),S.closePath();for(const T of[-1,1]){const I=g(new ks(S,{depth:.06,bevelEnabled:!1}),a,T*1.1-.03,1.46,0);I.rotation.y=Math.PI/2}A(.3,.8,.3,f,.65,2,-.28),A(.4,.08,.4,o,.65,2.42,-.28),A(.62,1,.04,h,0,.72,.86),A(.5,.9,.06,u,0,.67,.88),y(.04,d,.16,.65,.93),A(.9,.12,.4,o,0,.1,1.2);for(const T of[-.72,.72]){A(.55,.55,.05,h,T,.98,.86),A(.42,.42,.06,v,T,.98,.88),A(.04,.42,.07,h,T,.98,.89),A(.42,.04,.07,h,T,.98,.89);for(const I of[-1,1])A(.14,.5,.04,r,T+I*.38,.98,.88)}for(const T of[-1,1])A(.05,.5,.5,h,T*1.11,.95,.1),A(.06,.38,.38,v,T*1.12,.95,.1);y(.07,v,.5,1.2,.92),P(.04,.04,.5,c,1.55,.45,1.1,6),A(.32,.22,.22,m,1.55,.8,1.1),A(.7,.12,.22,u,-.85,.28,1.2),[[-1.1,m],[-.9,E],[-.7,Tt(16747216)],[-.55,m]].forEach(([T,I])=>y(.07,I,T,.4,1.2));break}case"predio":{A(2.4,.2,2.2,f,0,.1,0),A(2,.7,1.8,s,0,.55,0),A(1.7,2.6,1.5,a,0,2.15,0),A(1.2,.5,1.05,r,0,3.7,0);for(let S=0;S<5;S++)for(let T=0;T<3;T++)A(.34,.36,.05,(S*2+T)%5===0?s:v,-.5+T*.5,1.2+S*.5,.77);for(let S=0;S<5;S++)for(const T of[-1,1])for(let I=0;I<2;I++)A(.05,.36,.34,(S+I)%3===0?s:v,T*.86,1.2+S*.5,-.3+I*.6);for(const S of[1,3.45])A(1.78,.07,1.58,s,0,S,0);A(.7,.55,.05,v,0,.45,.93),A(.04,.55,.06,s,0,.45,.94),A(1.2,.08,.55,m,0,.86,1.12);for(const S of[-1,1])P(.03,.03,.62,d,S*.55,.55,1.36,6);A(.9,.14,.05,v,0,3.7,.54),P(.22,.22,.5,c,.3,4.2,.1),g(new ga(.26,.2,10),u,.3,4.55,.1),A(.3,.2,.3,o,-.3,4.05,.25),P(.025,.025,.9,d,-.3,4.4,-.2,6),y(.07,Tt(16726858,{emissive:16726858,emissiveIntensity:.9}),-.3,4.88,-.2);break}case"foguete":{A(2.4,.16,2.4,f,0,.08,0);for(let S=0;S<9;S++)A(.26,.05,.12,S%2?p:E,-1.04+S*.26,.18,1.12);P(.5,.56,2.3,h,0,1.9,0,16),g(new ga(.5,1,16),a,0,3.55,0),P(.52,.52,.16,m,0,2.95,0,16),P(.58,.58,.1,s,0,.8,0,16),g(new Pr(.21,.045,8,18),d,0,2.4,.5),y(.18,Tt(4892927,{emissive:2914512,emissiveIntensity:.7}),0,2.4,.5);for(let S=0;S<3;S++){const T=A(.08,.9,.7,a,0,1,0),I=new Yt;I.rotation.y=S/3*Math.PI*2+.5,T.position.set(.62,1,0),T.parent.remove(T),I.add(T),t.add(I)}g(new ga(.34,.8,10),Tt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.5,0).rotation.x=Math.PI;for(const S of[-.35,.35])A(.1,3.5,.1,d,1.1,1.9,S);for(const S of[.7,1.5,2.3,3.1])A(.08,.08,.7,d,1.1,S,0);A(.75,.1,.12,d,.75,2.6,0),y(.07,v,1.1,3.7,0),g(new Sn(.22,.22,.9,12),h,-1,.4,.7).rotation.z=Math.PI/2;for(const S of[-1.3,-.7])A(.08,.2,.3,d,S,.25,.7);break}case"estrela":{P(1.15,1.3,.2,o,0,.1,0,20),P(.8,.95,.22,f,0,.31,0,20),P(.16,.22,1.5,d,0,1.15,0),P(.3,.3,.1,d,0,1.95,0);const S=new Yt;S.name="gira",S.position.y=2.85,t.add(S);const T=new Et(new ks(R2(.95),{depth:.3,bevelEnabled:!0,bevelSize:.07,bevelThickness:.07,bevelSegments:1}),Tt(e,{emissive:e,emissiveIntensity:.55}));T.position.z=-.15,S.add(T);const I=new Et(new Pr(1.25,.03,8,40),Tt(e,{emissive:e,emissiveIntensity:.6}));I.rotation.x=Math.PI/2,S.add(I),[0,2.1,4.2].forEach((_,w)=>{const L=new Et(new kn(.1,10,8),Tt([16735631,5822207,16769354][w],{emissive:[16735631,5822207,16769354][w],emissiveIntensity:.7}));L.position.set(Math.cos(_)*1.25,0,Math.sin(_)*1.25),S.add(L)});break}case"cassino":{const S=Tt(13620959,{emissive:3818064,emissiveIntensity:.25}),T=(I,_)=>A(.36,.5,.06,Tt(_,{emissive:_,emissiveIntensity:.7}),I,2.05,.66);P(1.3,1.4,.16,f,0,.08,0,20),A(2.2,.3,1.6,s,0,.3,0),A(1.8,2.7,1.3,S,0,1.8,0),A(2,.55,1.4,s,0,3.35,0),A(1.6,.3,.08,v,0,3.35,.72);for(let I=0;I<9;I++)y(.06,I%2?v:m,-.96+I*.24,3.66,.68);A(1.45,.75,.1,Tt(1381675),0,2.2,.62),T(-.46,16726858),T(0,16769354),T(.46,5822207);for(const[I,_]of[[-.45,16726858],[0,5822090],[.45,5810431]])P(.1,.1,.08,Tt(_,{emissive:_,emissiveIntensity:.5}),I,1.55,.68,10).rotation.x=Math.PI/2;A(.5,.06,.04,p,0,1.3,.66),A(1.2,.28,.45,s,0,.95,.8),P(.06,.06,1.1,d,1.12,2.1,0,8),y(.2,Tt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.12,2.75,0);break}case"nave":{const S=Tt(4892927,{emissive:1922744,emissiveIntensity:.4}),T=Tt(9163775,{emissive:4892927,emissiveIntensity:.6}),I=Tt(16743001,{emissive:9058848,emissiveIntensity:.3});g(new kn(.95,16,12),S,0,1.85,0).scale.set(1,.85,1),g(new Pr(.92,.05,8,28),d,0,1.85,0).rotation.x=Math.PI/2,g(new kn(.58,14,10),T,0,2.15,.35),g(new kn(.2,8,8),Tt(16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let _=0;_<4;_++){const w=_*Math.PI/2,L=g(new Sa(.55,.14,.95),I,Math.cos(w)*1.05,1.7,Math.sin(w)*1.05);L.rotation.y=-w}for(let _=0;_<3;_++){const w=_*Math.PI*2/3+.4,L=g(new Sn(.05,.07,1,8),d,Math.cos(w)*.62,.62,Math.sin(w)*.62);L.rotation.z=Math.cos(w)*.3,L.rotation.x=-Math.sin(w)*.3,g(new Sn(.16,.16,.05,8),d,Math.cos(w)*.78,.12,Math.sin(w)*.78)}g(new ga(.3,.55,10),Tt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,P(.03,.03,.6,d,0,2.95,0,6),y(.1,Tt(16726858,{emissive:16726858,emissiveIntensity:.8}),0,3.28,0);break}case"carta":{P(.26,.32,.4,o,0,.2,0,10),P(.12,.15,1,d,0,.9,0,8),A(1.7,.9,.9,a,0,1.85,0);const S=g(new Sn(.45,.45,1.7,16,1,!1,0,Math.PI),Tt(e,{emissive:e,emissiveIntensity:.1,side:Jn}),0,2.3,0);S.rotation.z=Math.PI/2,A(1,.07,.05,p,0,2.02,.46),A(1.5,.5,.04,r,0,1.62,.46),A(.4,.26,.03,h,-.42,1.62,.49),y(.05,m,-.42,1.62,.52),P(.025,.025,.7,d,.9,2,0,6),A(.32,.22,.04,m,1.05,2.28,0),P(.035,.045,1.9,d,-1.2,.95,.5,6),y(.1,v,-1.2,1.95,.5),A(.3,.04,.04,d,-1.08,1.9,.5);break}}return t}const P2={casa:3.5,predio:5,foguete:4.9,estrela:4.7,cassino:4.4,nave:3.9,carta:3.5},I2=new hi({color:16774856,emissive:16771488,emissiveIntensity:1.3}),Zh=dn.map((n,e)=>{const t=new Yt,i=new Yt,a=new Et(new Sn(1.85,1.95,.12,28),Tt(3883096));a.position.y=.04;const r=new Et(new Sn(1.55,1.65,.14,28),Tt(new gt(n.cor).multiplyScalar(.45)));r.position.y=.1,i.add(a,r);for(let u=0;u<6;u++){const h=u/6*Math.PI*2+.5,d=Math.cos(h)*1.74,p=Math.sin(h)*1.74,m=new Et(new Sn(.035,.045,.55,6),Tt(13225432));m.position.set(d,.38,p);const E=new Et(new kn(.08,8,6),I2);E.position.set(d,.7,p),i.add(m,E)}const s=new Et(new Pr(2.08,.07,8,48),new Yi({color:n.cor,transparent:!0,opacity:0}));s.rotation.x=Math.PI/2,s.position.y=.1;const o=C2(n.icone,n.cor);o.position.y=.17;const f=new Ht;f.position.y=P2[n.icone]??4.5,t.add(i,s,o,f),Io(t),i.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),t.scale.setScalar(Wh(n)),Or(t,jn[e],0);const c=o.getObjectByName("gira");return{raiz:t,anel:s,icone:o,topo:f,gira:c,giraY:c?c.position.y:0}}),If=a2(Tt),Lf=c2();Or(If.raiz,qi.jasmim,.4);Or(Lf.raiz,qi.mazzy,0);Fr.push({d:qi.jasmim,r:.035*va},{d:qi.mazzy,r:.055*va});const Ns={parado:4,andar:5,correr:5,pular:5},L2=["direita","esquerda","norte","sul"],yd=[0,1,2,3,2,1],Kh=84,Lo=182,D2=168,N2=new Um,ma={};for(const[n,e]of Object.entries(Ns)){ma[n]={};for(const t of L2)ma[n][t]=Array.from({length:e},(i,a)=>{const r=N2.load(`./avatar/${n}-${t}-${a}.png`);return r.colorSpace=Dn,r.magFilter=r.minFilter=en,r.generateMipmaps=!1,new xf({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Bo=3.6,Df=Bo*(Kh/Lo);const Ma=new rh(ma.parado.sul[0]);Ma.center.set(.5,(Lo-D2)/Lo);Ma.scale.set(Df,Bo,1);Ma.position.y=Wn;Xn.add(Ma);const bd=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new Et(new $i(1.7,1.7),new Yi({map:new Ao(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=Wn+.04,Xn.add(i),i})(),Ea=n=>document.querySelector(n);Ea("#nome").textContent=`${od.nome} · ${od.titulo}`;const Qh=Ea("#pontos"),U2=Ea("#fichas-hud b");dn.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),Qh.appendChild(e)});const so=Ea("#painel"),jh=Ea("#acao");let Ed=-2,za=-1;const ep="curriculo-visitadas-v1",Ba=new Set;try{for(const n of JSON.parse(localStorage.getItem(ep))||[])dn.some(e=>e.id===n)&&Ba.add(n)}catch{}const O2=["↑","↗","→","↘","↓","↙","←","↖"];function F2(n){let e=-1,t=1/0;if(dn.forEach((s,o)=>{if(o===n||Ba.has(s.id))return;const f=jn[n].angleTo(jn[o]);f<t&&(t=f,e=o)}),e<0)return null;const i=new G().copy(jn[e]).applyQuaternion(pi),a=Math.atan2(i.x,-i.z),r=Math.acos(zr(i.y,-1,1));return{id:dn[e].id,seta:O2[(Math.round(a/(Math.PI/4))%8+8)%8],seg:Math.max(1,Math.round(r/tf))}}function tp(n){[...Qh.children].forEach((e,t)=>{e.classList.toggle("on",t===n),e.classList.toggle("vis",Ba.has(dn[t].id))})}tp(-1);function B2(n){if(n!==Ed){if(Ed=n,n<0)so.classList.remove("on");else{const e=dn[n];if(!Ba.has(e.id)){Ba.add(e.id);try{localStorage.setItem(ep,JSON.stringify([...Ba]))}catch{}}so.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),so.querySelector("h2").textContent=e.titulo,Ea("#texto").replaceChildren(...$_(e,{zonas:dn,visitadas:Ba,proxima:F2(n)})),so.scrollTop=0,jh.hidden=!e.jogo,so.classList.add("on")}tp(n)}}const yi=new Set;window.addEventListener("keydown",n=>{if(!(Rn.estaAberto()||Of.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&za>=0&&dn[za].jogo){yi.clear(),sp(dn[za].jogo);return}if((n.code==="KeyE"||n.code==="Enter")&&xa){op(xa);return}yi.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>yi.delete(n.code));window.addEventListener("blur",()=>yi.clear());const Vi={x:0,y:0,pulo:!1},Do=new Map;function Nf(){Vi.x=0,Vi.y=0;const n=Do.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;Vi.x=e*a,Vi.y=-t*a}}const Uf=Vn.domElement;Uf.addEventListener("pointerdown",n=>{Do.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),Nf()});Uf.addEventListener("pointermove",n=>{const e=Do.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,Nf())});for(const n of["pointerup","pointercancel","pointerleave"])Uf.addEventListener(n,e=>{const t=Do.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(Vi.pulo=!0,setTimeout(()=>{Vi.pulo=!1},120)),Do.delete(e.pointerId),Nf()});const z2=Po?420:640,np=19,No=new Qn(2,2,{minFilter:en,magFilter:en,type:wn,samples:0});No.depthTexture=new Dr(2,2);const ip=new th,G2=new nl(-1,1,1,-1,0,1),ap=new di({uniforms:{tCor:{value:No.texture},tProf:{value:No.depthTexture},uPixel:{value:new Ne(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:tn.near},uFar:{value:tn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});ip.add(new Et(new $i(2,2),ap));function rp(){const n=window.innerWidth,e=window.innerHeight;Vn.setSize(n,e),tn.aspect=n/e,tn.userData.afasta=1/zr(tn.aspect/1.1,.5,1),tn.updateProjectionMatrix();const t=Math.min(z2,e),i=Math.max(2,Math.round(t*tn.aspect));No.setSize(i,t),ap.uniforms.uPixel.value.set(1/i,1/t);const a=2*np*tn.userData.afasta*Math.tan(S0.degToRad(tn.fov/2))/t;Bo=Lo*a,Df=Kh*a}window.addEventListener("resize",rp);rp();const pi=Gr.quaternion,Ad=new URLSearchParams(location.search).get("zona");if(Ad!==null){const n=zr(Math.round(Number(Ad))||0,0,dn.length-1);pi.setFromUnitVectors(jn[n],new G(.25,1,-.2).normalize())}const V2=2*7.2/20;let oa=0,sa=0,Na=0,Ts=0,Sr=!0,tc=0,Td=!1,Nn=0,la="sul",nc=0;const Ua=new G,Ys=new fi,ki=new G,$s=n=>Math.acos(zr(ki.copy(n).applyQuaternion(pi).y,-1,1));function wd(n,e){if(ki.copy(n).applyQuaternion(pi),ki.y<.8)return;const t=Math.acos(Math.min(1,ki.y));t>=e||(Ua.crossVectors(qs,ki),Ua.lengthSq()<1e-10&&Ua.set(0,0,1),Ua.normalize(),Ys.setFromAxisAngle(Ua,e-t),pi.premultiply(Ys))}const Vr=document.createElement("div");Vr.id="rotulos";document.body.append(Vr);const k2=dn.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,Vr.append(e),e}),Js=new G,ic=new G;function H2(n){Js.copy(tn.position).normalize(),dn.forEach((e,t)=>{const i=k2[t];if(ki.copy(jn[t]).applyQuaternion(pi),t===n||ki.dot(Js)<.2){i.style.opacity="0";return}Zh[t].topo.getWorldPosition(ic).project(tn),i.style.transform=`translate(${Math.round((ic.x*.5+.5)*window.innerWidth)}px, ${Math.round((-ic.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const W2=.2,Zs=K_(),yr=(n,e,t="triangle",i=.05,a=0)=>Rn.bip(n,e,t,i,a),af=[{id:"jasmim",nome:"jasmim",frase:"dar carinho na Jasmim",d:qi.jasmim,modelo:If,livre:0,som:()=>{yr(1047,.12,"sine"),yr(1319,.12,"sine",.05,.09),yr(1568,.28,"sine",.05,.18)}},{id:"mazzy",nome:"mazzy",frase:"fazer carinho na Mazzy",d:qi.mazzy,modelo:Lf,livre:0,som:()=>{yr(680,.09),yr(930,.1,"triangle",.05,.07),yr(620,.2,"triangle",.045,.15)}}],Wa=document.createElement("button");Wa.id="carinho";Wa.hidden=!0;document.body.append(Wa);const X2=af.map(()=>{const n=document.createElement("div");return n.className="rotulo pet",Vr.append(n),n}),Uo=document.createElement("div");Uo.className="rotulo frase";Uo.textContent="♥ a flor mais bela do meu mundo todo";const q2=new G(0,-7.7,0);let ac=0;Vr.append(Uo);let xa=null,Rd="";const zi=new G;function op(n){Nn<n.livre||(n.livre=Nn+.5,n.modelo.carinho(),Zs[n.id]+=1,Q_(Zs),n.modelo.cabeca.getWorldPosition(zi).project(tn),n2((zi.x*.5+.5)*window.innerWidth,(-zi.y*.5+.5)*window.innerHeight,5),n.som())}Wa.addEventListener("click",()=>{xa&&op(xa),Wa.blur()});function Y2(n,e){let t=null,i=1/0;for(const o of af){const f=$s(o.d);f<W2&&f<i&&(i=f,t=o)}xa=e?null:t;const a=xa?`♥ ${xa.frase} [E]`:"";a!==Rd&&(Rd=a,Wa.textContent=a.toUpperCase(),Wa.hidden=!a);const r=Bo/Lo;If.atualizar(Nn,n),Lf.atualizar(Nn,n,r),af.forEach((o,f)=>{const c=X2[f];if(ki.copy(o.d).applyQuaternion(pi),o===xa||ki.dot(Js)<.2){c.style.opacity="0";return}o.modelo.topo.getWorldPosition(zi).project(tn),c.textContent=Zs[o.id]?`${o.nome} ♥ ${Zs[o.id]}`:o.nome,c.style.transform=`translate(${Math.round((zi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-zi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,c.style.opacity="1"});const s=zr((.42-$s(qi.jasmim))/.22,0,1);ac=Ds(ac,.8*s,3,n),zi.copy(q2).project(tn),Uo.style.transform=`translate(${Math.round((zi.x*.5+.5)*window.innerWidth)}px, ${Math.round((-zi.y*.5+.5)*window.innerHeight)}px) translate(-50%, -50%)`,Uo.style.opacity=ac.toFixed(2)}const $2={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function J2(n){const e=vo(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries($2))Jh[r].value.set(e[a]);const t=vo(n.arvores)?.cores;if(t){for(const{m:a,v:r}of Yh)a.color.set(t.copa[r%t.copa.length]);for(const a of $h)a.color.set(t.copa2)}const i=vo(n.ceu)?.cores;i&&(Xn.background.set(i.fundo),Xh.color.set(i.estrelas),qh.color.set(i.nuvens))}const Rn=ZM({aoMudarSkins:J2,aoMudarFichas:n=>{U2.textContent=String(n)}}),Of=G_({bip:(...n)=>Rn.bip(...n),somAtivo:()=>Rn.somAtivo()}),Z2=M2({planeta:Gr,fincar:Or,R:Wn,q:pi,altura:ol,NIVEL_MAR:sl,dirsZonas:jn,raioBloqueio:Fo,obstaculos:Fr,dirsSitios:qi,camera:tn,rotulosEl:Vr,camDir:Js,bip:(...n)=>Rn.bip(...n)}),K2=Z_({somAtivo:()=>Rn.somAtivo()}),rf=Ea("#som");let rc=null;rf.addEventListener("click",()=>{Rn.alternarSom(),rf.blur()});function sp(n){n==="arcade"?Of.abrir():Rn.abrir()}jh.addEventListener("click",()=>{za>=0&&dn[za].jogo&&(yi.clear(),sp(dn[za].jogo))});const Q2=4,Cd=5,j2=.2*va,eS=new hi({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),Pd=new hi({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),Ff=[],tS=new G;function lp(n){const e=new G;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(ol(e)<sl+.06)&&!(tS.copy(e).applyQuaternion(pi).angleTo(qs)<.45*va)&&!(jn.some((i,a)=>e.angleTo(i)<Fo[a]+.2)||Hh(e,.25))&&!Fr.some(i=>e.angleTo(i.d)<i.r+.09*va)&&!Ff.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(qs,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=Nn+2}for(let n=0;n<Q2;n++){const e=new Yt,t=new Yt,i=new Et(new Sn(.3,.3,.08,12),eS),a=new Et(new Sn(.2,.2,.1,12),Pd);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,f=new Et(new Sa(.1,.14,.1),Pd);f.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),f.rotation.x=o,t.add(f)}t.position.y=Wn+.7,e.add(t),Io(e),Gr.add(e);const r={d:new G,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};Ff.push(r),lp(r)}const ws=new G;function nS(n){Ma.getWorldPosition(ws),ws.project(tn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((ws.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-ws.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function iS(n){for(const e of Ff){if(!e.ativa){Nn>=e.volta&&lp(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=Wn+.7+Math.sin(Nn*3+e.fase)*.08,$s(e.d)<j2&&(e.ativa=!1,e.raiz.visible=!1,e.volta=Nn+25+Math.random()*25,Rn.adicionarFichas(Cd),nS("+"+Cd),Rn.bip(988,.07,"square",.07),Rn.bip(1319,.22,"square",.07,.08),Rn.bip(1976,.3,"triangle",.05,.08))}}let Id=performance.now();Vn.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-Id)/1e3,.05);Id=n,Nn+=e;const t=(y,S)=>yi.has(y)||yi.has(S)?1:0,i=Rn.estaAberto()||Of.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||Vi.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||Vi.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(yi.has("ShiftLeft")||yi.has("ShiftRight"))&&(a*=1.7,r*=1.7),oa=Ds(oa,a,9,e),sa=Ds(sa,r,9,e);const f=Math.hypot(oa,sa);f>.003&&(Ua.set(sa,0,oa).normalize(),Ys.setFromAxisAngle(Ua,f*tf*e),pi.premultiply(Ys),Td=!0),jn.forEach((y,S)=>wd(y,Fo[S]));for(const y of Fr)y.baixo&&Na>.5||wd(y.d,y.r);pi.normalize(),Td&&Ea("#dica").classList.add("some"),!i&&(yi.has("Space")||Vi.pulo)&&Sr&&(Ts=7.2,Sr=!1,nc=0),Sr||(Ts-=20*e,nc+=e,Na+=Ts*e,Na<=0&&(Na=0,Ts=0,Sr=!0));const u=Math.min(1.7,f);if(f>.08){const y=Math.abs(oa)>Math.abs(sa)*1.1,S=Math.abs(sa)>Math.abs(oa)*1.1;y?la=oa>0?"direita":"esquerda":S&&(la=sa>0?"norte":"sul")}tc+=u*e*9;let h;if(Sr)f>1.2?h=ma.correr[la][Math.floor(tc)%Ns.correr]:f>.08?h=ma.andar[la][Math.floor(tc)%Ns.andar]:h=la==="sul"?ma.parado.sul[yd[Math.floor(Nn*4)%yd.length]]:ma.parado[la][0];else{const y=Math.min(.999,nc/V2);h=ma.pular[la][Math.floor(y*Ns.pular)]}Ma.material=h;const d=Sr&&f<=.08&&la!=="sul"?Math.sin(Nn*2.4)*.012:0;Ma.scale.set(Df*(1-d*.5),Bo*(1+d),1),Ma.position.y=Wn+Na;const p=Math.min(Na,1.5);bd.scale.setScalar(1-p*.2),bd.material.opacity=.55-p*.2;const m=tn.userData.afasta,E=np*m,v=.42,g=1.5;tn.position.set(0,g+Math.sin(v)*E,Math.cos(v)*E),tn.lookAt(0,g,0),Pf.rotation.y=Math.sin(Nn*.1)*.4;let A=-1,P=1/0;jn.forEach((y,S)=>{const T=$s(y);T<b2[S]&&T<P&&(P=T,A=S)}),Zh.forEach((y,S)=>{const T=S===A;y.anel.material.opacity=Ds(y.anel.material.opacity,T?.55+Math.sin(Nn*4)*.25:0,8,e),y.gira&&(y.gira.rotation.y+=e*(T?2.4:.8),y.gira.position.y=y.giraY+Math.sin(Nn*1.6+S)*(T?.12:.06))}),za=A,B2(A),H2(A),iS(e),Y2(e,i),Z2.atualizar(e,{vLeste:oa,vNorte:sa,VEL:tf,pulando:Na>.4,pausado:i}),K2.atualizar(e,i),Rn.somAtivo()!==rc&&(rc=Rn.somAtivo(),rf.classList.toggle("mudo",!rc)),Po?(Vn.setRenderTarget(null),Vn.render(Xn,tn)):(Vn.setRenderTarget(No),Vn.render(Xn,tn),Vn.setRenderTarget(null),Vn.render(ip,G2))});
