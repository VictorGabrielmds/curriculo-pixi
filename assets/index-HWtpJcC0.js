(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Mc="186",Eh=0,pf=1,Ah=2,Xr=1,Th=2,Gr=3,wa=0,Tn=1,Li=2,Fi=0,qr=1,mf=2,gf=3,xf=4,wh=5,fr=100,Rh=101,Ch=102,Ph=103,Ih=104,Lh=200,Dh=201,Nh=202,Uh=203,Gu=204,Hu=205,Oh=206,Fh=207,Bh=208,zh=209,kh=210,Vh=211,Gh=212,Hh=213,Wh=214,Al=0,Tl=1,wl=2,Qr=3,Rl=4,Cl=5,Pl=6,Il=7,Wu=0,Xh=1,qh=2,_i=0,Xu=1,qu=2,Yu=3,$u=4,Zu=5,Ju=6,Ku=7,Qu=300,Ra=301,gr=302,Us=303,Os=304,ys=306,Ll=1e3,Ni=1001,Dl=1002,tn=1003,Yh=1004,yo=1005,fn=1006,Fs=1007,ba=1008,Fn=1009,ju=1010,ed=1011,jr=1012,Sc=1013,yi=1014,gi=1015,Yn=1016,yc=1017,bc=1018,eo=1020,td=35902,nd=35899,id=1021,ad=1022,Xn=1023,zi=1026,Ea=1027,rd=1028,Ec=1029,Ca=1030,Ac=1031,Tc=1033,ts=33776,ns=33777,is=33778,as=33779,Nl=35840,Ul=35841,Ol=35842,Fl=35843,Bl=36196,zl=37492,kl=37496,Vl=37488,Gl=37489,ss=37490,Hl=37491,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,Zl=37813,Jl=37814,Kl=37815,Ql=37816,jl=37817,ec=37818,tc=37819,nc=37820,ic=37821,ac=36492,rc=36494,oc=36495,sc=36283,lc=36284,ls=36285,cc=36286,$h=3200,fc=0,Zh=1,ta="",Un="srgb",cs="srgb-linear",fs="linear",Ft="srgb",Bs=7680,Jh=519,Kh=512,Qh=513,jh=514,wc=515,ep=516,tp=517,Rc=518,np=519,od=35044,vf="300 es",xi=2e3,to=2001;function ip(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ap(){const n=no("canvas");return n.style.display="block",n}const _f={};function us(...n){const e="THREE."+n.shift();console.log(e,...n)}function sd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=sd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=sd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hr(...n){const e=n.join(" ");e in _f||(_f[e]=!0,dt(...n))}function rp(n,e,t){return new Promise(function(i,a){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const op={[Al]:Tl,[wl]:Pl,[Rl]:Il,[Qr]:Cl,[Tl]:Al,[Pl]:wl,[Il]:Rl,[Cl]:Qr};class Ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mf=1234567;const Yr=Math.PI/180,io=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Cc(n,e){return(n%e+e)%e}function sp(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function lp(n,e,t){return n!==e?(t-n)/(e-n):0}function $r(n,e,t){return(1-t)*n+t*e}function cp(n,e,t,i){return $r(n,e,1-Math.exp(-t*i))}function fp(n,e=1){return e-Math.abs(Cc(n,e*2)-e)}function up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pp(n,e){return n+Math.random()*(e-n)}function mp(n){return n*(.5-Math.random())}function gp(n){n!==void 0&&(Mf=n);let e=Mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(n){return n*Yr}function vp(n){return n*io}function _p(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yp(n,e,t,i,a){const r=Math.cos,s=Math.sin,o=r(t/2),f=s(t/2),c=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),d=s((e-i)/2),p=r((i-e)/2),m=s((i-e)/2);switch(a){case"XYX":n.set(o*u,f*h,f*d,o*c);break;case"YZY":n.set(f*d,o*u,f*h,o*c);break;case"ZXZ":n.set(f*h,f*d,o*u,o*c);break;case"XZX":n.set(o*u,f*m,f*p,o*c);break;case"YXY":n.set(f*p,o*u,f*m,o*c);break;case"ZYZ":n.set(f*m,f*p,o*u,o*c);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bp={DEG2RAD:Yr,RAD2DEG:io,generateUUID:Mi,clamp:At,euclideanModulo:Cc,mapLinear:sp,inverseLerp:lp,lerp:$r,damp:cp,pingpong:fp,smoothstep:up,smootherstep:dp,randInt:hp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:xp,radToDeg:vp,isPowerOfTwo:_p,ceilPowerOfTwo:Mp,floorPowerOfTwo:Sp,setQuaternionFromProperEuler:yp,normalize:Bt,denormalize:ni},jc=class jc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;let Ce=jc;class La{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,r,s,o){let f=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3],d=r[s+0],p=r[s+1],m=r[s+2],b=r[s+3];if(h!==b||f!==d||c!==p||u!==m){let _=f*d+c*p+u*m+h*b;_<0&&(d=-d,p=-p,m=-m,b=-b,_=-_);let x=1-o;if(_<.9995){const T=Math.acos(_),C=Math.sin(T);x=Math.sin(x*T)/C,o=Math.sin(o*T)/C,f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+b*o}else{f=f*x+d*o,c=c*x+p*o,u=u*x+m*o,h=h*x+b*o;const T=1/Math.sqrt(f*f+c*c+u*u+h*h);f*=T,c*=T,u*=T,h*=T}}e[t]=f,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,r,s){const o=i[a],f=i[a+1],c=i[a+2],u=i[a+3],h=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return e[t]=o*m+u*h+f*p-c*d,e[t+1]=f*m+u*d+c*h-o*p,e[t+2]=c*m+u*p+o*d-f*h,e[t+3]=u*m-o*h-f*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,f=Math.sin,c=o(i/2),u=o(a/2),h=o(r/2),d=f(i/2),p=f(a/2),m=f(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h+d*p*m;break;case"YZX":this._x=d*u*h+c*p*m,this._y=c*p*h+d*u*m,this._z=c*u*m-d*p*h,this._w=c*u*h-d*p*m;break;case"XZY":this._x=d*u*h-c*p*m,this._y=c*p*h-d*u*m,this._z=c*u*m+d*p*h,this._w=c*u*h+d*p*m;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],r=t[8],s=t[1],o=t[5],f=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-f)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-f)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(f+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(f+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,r=e._z,s=e._w,o=t._x,f=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+a*c-r*f,this._y=a*u+s*f+r*o-i*c,this._z=r*u+s*c+i*f-a*o,this._w=s*u-i*o-a*f-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let f=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);f=Math.sin(f*c)/u,t=Math.sin(t*c)/u,this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+a*t,this._z=this._z*f+r*t,this._w=this._w*f+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ef=class ef{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*a,this.y=r[1]*t+r[4]*i+r[7]*a,this.z=r[2]*t+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,f=e.w,c=2*(s*a-o*i),u=2*(o*t-r*a),h=2*(r*i-s*t);return this.x=t+f*c+s*h-o*u,this.y=i+f*u+o*c-r*h,this.z=a+f*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a,this.y=r[1]*t+r[5]*i+r[9]*a,this.z=r[2]*t+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,r=e.z,s=t.x,o=t.y,f=t.z;return this.x=a*f-r*o,this.y=r*s-i*f,this.z=i*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;let k=ef;const zs=new k,Sf=new La,tf=class tf{constructor(e,t,i,a,r,s,o,f,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c)}set(e,t,i,a,r,s,o,f,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=f,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[3],f=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],m=i[8],b=a[0],_=a[3],x=a[6],T=a[1],C=a[4],S=a[7],E=a[2],R=a[5],L=a[8];return r[0]=s*b+o*T+f*E,r[3]=s*_+o*C+f*R,r[6]=s*x+o*S+f*L,r[1]=c*b+u*T+h*E,r[4]=c*_+u*C+h*R,r[7]=c*x+u*S+h*L,r[2]=d*b+p*T+m*E,r[5]=d*_+p*C+m*R,r[8]=d*x+p*S+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*f+a*r*c-a*s*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=u*s-o*c,d=o*f-u*r,p=c*r-s*f,m=t*h+i*d+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=h*b,e[1]=(a*c-u*i)*b,e[2]=(o*i-a*s)*b,e[3]=d*b,e[4]=(u*t-a*f)*b,e[5]=(a*r-o*t)*b,e[6]=p*b,e[7]=(i*f-c*t)*b,e[8]=(s*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,r,s,o){const f=Math.cos(r),c=Math.sin(r);return this.set(i*f,i*c,-i*(f*s+c*o)+s+e,-a*c,a*f,-a*(-c*s+f*o)+o+t,0,0,1),this}scale(e,t){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ks.makeScale(e,t)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;let gt=tf;const ks=new gt,yf=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){const n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ft&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ft&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ta?fs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:e,whitePoint:i,transfer:fs,toXYZ:yf,fromXYZ:bf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:yf,fromXYZ:bf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),n}const Rt=Ep();function Bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Va;class Ap{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Va===void 0&&(Va=no("canvas")),Va.width=e.width,Va.height=e.height;const a=Va.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Va}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Bi(r[s]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tp=0;class Pc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Vs(a[s].image)):r.push(Vs(a[s]))}else r=Vs(a);i.url=r}return t||(e.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ap.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let wp=0;const Gs=new k;class un extends Ia{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Ni,a=Ni,r=fn,s=ba,o=Xn,f=Fn,c=un.DEFAULT_ANISOTROPY,u=ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Mi(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Qu;un.DEFAULT_ANISOTROPY=1;const nf=class nf{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,r;const f=e.elements,c=f[0],u=f[4],h=f[8],d=f[1],p=f[5],m=f[9],b=f[2],_=f[6],x=f[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(m+_)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,S=(p+1)/2,E=(x+1)/2,R=(u+d)/4,L=(h+b)/4,M=(m+_)/4;return C>S&&C>E?C<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(C),a=R/i,r=L/i):S>E?S<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(S),i=R/a,r=M/a):E<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(E),i=L/r,a=M/r),this.set(i,a,r,t),this}let T=Math.sqrt((_-m)*(_-m)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(_-m)/T,this.y=(h-b)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;let Kt=nf;class Rp extends Ia{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},r=new un(a),s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Pc(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Rp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ld extends un{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cp extends un{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ss=class Ss{constructor(e,t,i,a,r,s,o,f,c,u,h,d,p,m,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,b,_)}set(e,t,i,a,r,s,o,f,c,u,h,d,p,m,b,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=r,x[5]=s,x[9]=o,x[13]=f,x[2]=c,x[6]=u,x[10]=h,x[14]=d,x[3]=p,x[7]=m,x[11]=b,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ss().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Ga.setFromMatrixColumn(e,0).length(),r=1/Ga.setFromMatrixColumn(e,1).length(),s=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),f=Math.cos(a),c=Math.sin(a),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,m=o*u,b=o*h;t[0]=f*u,t[4]=-f*h,t[8]=c,t[1]=p+m*c,t[5]=d-b*c,t[9]=-o*f,t[2]=b-d*c,t[6]=m+p*c,t[10]=s*f}else if(e.order==="YXZ"){const d=f*u,p=f*h,m=c*u,b=c*h;t[0]=d+b*o,t[4]=m*o-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-m,t[6]=b+d*o,t[10]=s*f}else if(e.order==="ZXY"){const d=f*u,p=f*h,m=c*u,b=c*h;t[0]=d-b*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*u,t[9]=b-d*o,t[2]=-s*c,t[6]=o,t[10]=s*f}else if(e.order==="ZYX"){const d=s*u,p=s*h,m=o*u,b=o*h;t[0]=f*u,t[4]=m*c-p,t[8]=d*c+b,t[1]=f*h,t[5]=b*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*f,t[10]=s*f}else if(e.order==="YZX"){const d=s*f,p=s*c,m=o*f,b=o*c;t[0]=f*u,t[4]=b-d*h,t[8]=m*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+m,t[10]=d-b*h}else if(e.order==="XZY"){const d=s*f,p=s*c,m=o*f,b=o*c;t[0]=f*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=s*u,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Ip)}lookAt(e,t,i){const a=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Hi.crossVectors(i,Ln),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Hi.crossVectors(i,Ln)),Hi.normalize(),bo.crossVectors(Ln,Hi),a[0]=Hi.x,a[4]=bo.x,a[8]=Ln.x,a[1]=Hi.y,a[5]=bo.y,a[9]=Ln.y,a[2]=Hi.z,a[6]=bo.z,a[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,r=this.elements,s=i[0],o=i[4],f=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],m=i[2],b=i[6],_=i[10],x=i[14],T=i[3],C=i[7],S=i[11],E=i[15],R=a[0],L=a[4],M=a[8],P=a[12],I=a[1],F=a[5],V=a[9],$=a[13],B=a[2],Y=a[6],re=a[10],te=a[14],ve=a[3],ae=a[7],he=a[11],ge=a[15];return r[0]=s*R+o*I+f*B+c*ve,r[4]=s*L+o*F+f*Y+c*ae,r[8]=s*M+o*V+f*re+c*he,r[12]=s*P+o*$+f*te+c*ge,r[1]=u*R+h*I+d*B+p*ve,r[5]=u*L+h*F+d*Y+p*ae,r[9]=u*M+h*V+d*re+p*he,r[13]=u*P+h*$+d*te+p*ge,r[2]=m*R+b*I+_*B+x*ve,r[6]=m*L+b*F+_*Y+x*ae,r[10]=m*M+b*V+_*re+x*he,r[14]=m*P+b*$+_*te+x*ge,r[3]=T*R+C*I+S*B+E*ve,r[7]=T*L+C*F+S*Y+E*ae,r[11]=T*M+C*V+S*re+E*he,r[15]=T*P+C*$+S*te+E*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],f=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],m=e[3],b=e[7],_=e[11],x=e[15],T=f*p-c*d,C=o*p-c*h,S=o*d-f*h,E=s*p-c*u,R=s*d-f*u,L=s*h-o*u;return t*(b*T-_*C+x*S)-i*(m*T-_*E+x*R)+a*(m*C-b*E+x*L)-r*(m*S-b*R+_*L)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],r=e[1],s=e[5],o=e[9],f=e[2],c=e[6],u=e[10];return t*(s*u-o*c)-i*(r*u-o*f)+a*(r*c-s*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],f=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],m=e[12],b=e[13],_=e[14],x=e[15],T=t*o-i*s,C=t*f-a*s,S=t*c-r*s,E=i*f-a*o,R=i*c-r*o,L=a*c-r*f,M=u*b-h*m,P=u*_-d*m,I=u*x-p*m,F=h*_-d*b,V=h*x-p*b,$=d*x-p*_,B=T*$-C*V+S*F+E*I-R*P+L*M;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/B;return e[0]=(o*$-f*V+c*F)*Y,e[1]=(a*V-i*$-r*F)*Y,e[2]=(b*L-_*R+x*E)*Y,e[3]=(d*R-h*L-p*E)*Y,e[4]=(f*I-s*$-c*P)*Y,e[5]=(t*$-a*I+r*P)*Y,e[6]=(_*S-m*L-x*C)*Y,e[7]=(u*L-d*S+p*C)*Y,e[8]=(s*V-o*I+c*M)*Y,e[9]=(i*I-t*V-r*M)*Y,e[10]=(m*R-b*S+x*T)*Y,e[11]=(h*S-u*R-p*T)*Y,e[12]=(o*P-s*F-f*M)*Y,e[13]=(t*F-i*P+a*M)*Y,e[14]=(b*C-m*E-_*T)*Y,e[15]=(u*E-h*C+d*T)*Y,this}scale(e){const t=this.elements,i=e.x,a=e.y,r=e.z;return t[0]*=i,t[4]*=a,t[8]*=r,t[1]*=i,t[5]*=a,t[9]*=r,t[2]*=i,t[6]*=a,t[10]*=r,t[3]*=i,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),r=1-i,s=e.x,o=e.y,f=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-a*f,c*f+a*o,0,c*o+a*f,u*o+i,u*f-a*s,0,c*f-a*o,u*f+a*s,r*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,r=t._x,s=t._y,o=t._z,f=t._w,c=r+r,u=s+s,h=o+o,d=r*c,p=r*u,m=r*h,b=s*u,_=s*h,x=o*h,T=f*c,C=f*u,S=f*h,E=i.x,R=i.y,L=i.z;return a[0]=(1-(b+x))*E,a[1]=(p+S)*E,a[2]=(m-C)*E,a[3]=0,a[4]=(p-S)*R,a[5]=(1-(d+x))*R,a[6]=(_+T)*R,a[7]=0,a[8]=(m+C)*L,a[9]=(_-T)*L,a[10]=(1-(d+b))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Ga.set(a[0],a[1],a[2]).length();const o=Ga.set(a[4],a[5],a[6]).length(),f=Ga.set(a[8],a[9],a[10]).length();r<0&&(s=-s),Qn.copy(this);const c=1/s,u=1/o,h=1/f;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=f,this}makePerspective(e,t,i,a,r,s,o=xi,f=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-a),d=(t+e)/(t-e),p=(i+a)/(i-a);let m,b;if(f)m=r/(s-r),b=s*r/(s-r);else if(o===xi)m=-(s+r)/(s-r),b=-2*s*r/(s-r);else if(o===to)m=-s/(s-r),b=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,a,r,s,o=xi,f=!1){const c=this.elements,u=2/(t-e),h=2/(i-a),d=-(t+e)/(t-e),p=-(i+a)/(i-a);let m,b;if(f)m=1/(s-r),b=s/(s-r);else if(o===xi)m=-2/(s-r),b=-(s+r)/(s-r);else if(o===to)m=-1/(s-r),b=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ss.prototype.isMatrix4=!0;let qt=Ss;const Ga=new k,Qn=new qt,Pp=new k(0,0,0),Ip=new k(1,1,1),Hi=new k,bo=new k,Ln=new k,Ef=new qt,Af=new La;class ra{constructor(e=0,t=0,i=0,a=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],f=a[1],c=a[5],u=a[9],h=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(f,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(f,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(f,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const Tf=new k,Ha=new La,Ei=new qt,Eo=new k,Pr=new k,Dp=new k,Np=new La,wf=new k(1,0,0),Rf=new k(0,1,0),Cf=new k(0,0,1),Pf={type:"added"},Up={type:"removed"},Wa={type:"childadded",child:null},Hs={type:"childremoved",child:null};class nn extends Ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new k,t=new ra,i=new La,a=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new gt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.multiply(Ha),this}rotateOnWorldAxis(e,t){return Ha.setFromAxisAngle(e,t),this.quaternion.premultiply(Ha),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Eo.copy(e):Eo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Pr,Eo,this.up):Ei.lookAt(Eo,Pr,this.up),this.quaternion.setFromRotationMatrix(Ei),a&&(Ei.extractRotation(a.matrixWorld),Ha.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pf),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pf),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*a,r[13]+=i-r[1]*t-r[5]*i-r[9]*a,r[14]+=a-r[2]*t-r[6]*i-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let c=0,u=f.length;c<u;c++){const h=f[c];r(e.shapes,h)}else r(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,c=this.material.length;f<c;f++)o.push(r(e.materials,this.material[f]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];a.animations.push(r(e.animations,f))}}if(t){const o=s(e.geometries),f=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(i.geometries=o),f.length>0&&(i.materials=f),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=a,i;function s(o){const f=[];for(const c in o){const u=o[c];delete u.metadata,f.push(u)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mn extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,r=null,s=null;const o=this._targetRay,f=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,i),x=this._getHandJoint(c,b);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return o!==null&&(o.visible=a!==null),f!==null&&(f.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Rt.workingColorSpace){if(e=Cc(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Xs(s,r,e+1/3),this.g=Xs(s,r,e),this.b=Xs(s,r,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,t=Un){function i(r){r!==void 0&&parseFloat(r)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const i=fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Rt.workingToColorSpace(mn.copy(this),e),Math.round(At(mn.r*255,0,255))*65536+Math.round(At(mn.g*255,0,255))*256+Math.round(At(mn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(mn.copy(this),t);const i=mn.r,a=mn.g,r=mn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let f,c;const u=(o+s)/2;if(o===s)f=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:f=(a-r)/h+(a<r?6:0);break;case a:f=(r-i)/h+2;break;case r:f=(i-a)/h+4;break}f/=6}return e.h=f,e.s=c,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Un){Rt.workingToColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,a=mn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Ao);const i=$r(Wi.h,Ao.h,t),a=$r(Wi.s,Ao.s,t),r=$r(Wi.l,Ao.l,t);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*a,this.g=r[1]*t+r[4]*i+r[7]*a,this.b=r[2]*t+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ht;ht.NAMES=fd;class ud extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jn=new k,Ai=new k,qs=new k,Ti=new k,Xa=new k,qa=new k,If=new k,Ys=new k,$s=new k,Zs=new k,Js=new Kt,Ks=new Kt,Qs=new Kt;class Wn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),jn.subVectors(e,t),a.cross(jn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,i,a,r){jn.subVectors(a,t),Ai.subVectors(i,t),qs.subVectors(e,t);const s=jn.dot(jn),o=jn.dot(Ai),f=jn.dot(qs),c=Ai.dot(Ai),u=Ai.dot(qs),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*f-o*u)*d,m=(s*u-o*f)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,a,r,s,o,f){return this.getBarycoord(e,t,i,a,Ti)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(r,Ti.x),f.addScaledVector(s,Ti.y),f.addScaledVector(o,Ti.z),f)}static getInterpolatedAttribute(e,t,i,a,r,s){return Js.setScalar(0),Ks.setScalar(0),Qs.setScalar(0),Js.fromBufferAttribute(e,t),Ks.fromBufferAttribute(e,i),Qs.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Js,r.x),s.addScaledVector(Ks,r.y),s.addScaledVector(Qs,r.z),s}static isFrontFacing(e,t,i,a){return jn.subVectors(i,t),Ai.subVectors(e,t),jn.cross(Ai).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,a,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,r=this.c;let s,o;Xa.subVectors(a,i),qa.subVectors(r,i),Ys.subVectors(e,i);const f=Xa.dot(Ys),c=qa.dot(Ys);if(f<=0&&c<=0)return t.copy(i);$s.subVectors(e,a);const u=Xa.dot($s),h=qa.dot($s);if(u>=0&&h<=u)return t.copy(a);const d=f*h-u*c;if(d<=0&&f>=0&&u<=0)return s=f/(f-u),t.copy(i).addScaledVector(Xa,s);Zs.subVectors(e,r);const p=Xa.dot(Zs),m=qa.dot(Zs);if(m>=0&&p<=m)return t.copy(r);const b=p*c-f*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(qa,o);const _=u*m-p*h;if(_<=0&&h-u>=0&&p-m>=0)return If.subVectors(r,a),o=(h-u)/(h-u+(p-m)),t.copy(a).addScaledVector(If,o);const x=1/(_+b+d);return s=b*x,o=d*x,t.copy(i).addScaledVector(Xa,s).addScaledVector(qa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ei):ei.fromBufferAttribute(r,s),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),wo.subVectors(this.max,Ir),Ya.subVectors(e.a,Ir),$a.subVectors(e.b,Ir),Za.subVectors(e.c,Ir),Xi.subVectors($a,Ya),qi.subVectors(Za,$a),da.subVectors(Ya,Za);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-da.z,da.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,da.z,0,-da.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-da.y,da.x,0];return!js(t,Ya,$a,Za,wo)||(t=[1,0,0,0,1,0,0,0,1],!js(t,Ya,$a,Za,wo))?!1:(Ro.crossVectors(Xi,qi),t=[Ro.x,Ro.y,Ro.z],js(t,Ya,$a,Za,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new k,new k,new k,new k,new k,new k,new k,new k],ei=new k,To=new uo,Ya=new k,$a=new k,Za=new k,Xi=new k,qi=new k,da=new k,Ir=new k,wo=new k,Ro=new k,ha=new k;function js(n,e,t,i,a){for(let r=0,s=n.length-3;r<=s;r+=3){ha.fromArray(n,r);const o=a.x*Math.abs(ha.x)+a.y*Math.abs(ha.y)+a.z*Math.abs(ha.z),f=e.dot(ha),c=t.dot(ha),u=i.dot(ha);if(Math.max(-Math.max(f,c,u),Math.min(f,c,u))>o)return!1}return!0}const Di=Fp();function Fp(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),a=new Uint32Array(512);for(let f=0;f<256;++f){const c=f-127;c<-27?(i[f]=0,i[f|256]=32768,a[f]=24,a[f|256]=24):c<-14?(i[f]=1024>>-c-14,i[f|256]=1024>>-c-14|32768,a[f]=-c-1,a[f|256]=-c-1):c<=15?(i[f]=c+15<<10,i[f|256]=c+15<<10|32768,a[f]=13,a[f|256]=13):c<128?(i[f]=31744,i[f|256]=64512,a[f]=24,a[f|256]=24):(i[f]=31744,i[f|256]=64512,a[f]=13,a[f|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let f=1;f<1024;++f){let c=f<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[f]=c|u}for(let f=1024;f<2048;++f)r[f]=939524096+(f-1024<<13);for(let f=1;f<31;++f)s[f]=f<<23;s[31]=1199570944,s[32]=2147483648;for(let f=33;f<63;++f)s[f]=2147483648+(f-32<<23);s[63]=3347054592;for(let f=1;f<64;++f)f!==32&&(o[f]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:a,mantissaTable:r,exponentTable:s,offsetTable:o}}function Bp(n){Math.abs(n)>65504&&dt("DataUtils.toHalfFloat(): Value out of range."),n=At(n,-65504,65504),Di.floatView[0]=n;const e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function zp(n){const e=n>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(n&1023)]+Di.exponentTable[e],Di.floatView[0]}class Lf{static toHalfFloat(e){return Bp(e)}static fromHalfFloat(e){return zp(e)}}const en=new k,Co=new Ce;let kp=0;class Si extends Ia{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=od,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class dd extends Si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends Si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Si{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Vp=new uo,Lr=new k,el=new k;class bs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vp.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Lr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(el)),this.expandByPoint(Lr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gp=0;const kn=new qt,tl=new nn,Ja=new k,Dn=new uo,Dr=new uo,sn=new k;class dn extends Ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?hd:dd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ja).negate(),this.translate(Ja.x,Ja.y,Ja.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Dn.min,Dr.min),Dn.expandByPoint(sn),sn.addVectors(Dn.max,Dr.max),Dn.expandByPoint(sn)):(Dn.expandByPoint(Dr.min),Dn.expandByPoint(Dr.max))}Dn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)sn.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(sn));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],f=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),f&&(Ja.fromBufferAttribute(e,c),sn.add(Ja)),a=Math.max(a,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,r=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new Si(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));const o=[],f=[];for(let M=0;M<i.count;M++)o[M]=new k,f[M]=new k;const c=new k,u=new k,h=new k,d=new Ce,p=new Ce,m=new Ce,b=new k,_=new k;function x(M,P,I){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,I),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,I),u.sub(c),h.sub(c),p.sub(d),m.sub(d);const F=1/(p.x*m.y-m.x*p.y);isFinite(F)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(F),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(F),o[M].add(b),o[P].add(b),o[I].add(b),f[M].add(_),f[P].add(_),f[I].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,P=T.length;M<P;++M){const I=T[M],F=I.start,V=I.count;for(let $=F,B=F+V;$<B;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const C=new k,S=new k,E=new k,R=new k;function L(M){E.fromBufferAttribute(a,M),R.copy(E);const P=o[M];C.copy(P),C.sub(E.multiplyScalar(E.dot(P))).normalize(),S.crossVectors(R,P);const F=S.dot(f[M])<0?-1:1;s.setXYZW(M,C.x,C.y,C.z,F)}for(let M=0,P=T.length;M<P;++M){const I=T[M],F=I.start,V=I.count;for(let $=F,B=F+V;$<B;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new k,r=new k,s=new k,o=new k,f=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),b=e.getX(d+1),_=e.getX(d+2);a.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,_),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),o.fromBufferAttribute(i,m),f.fromBufferAttribute(i,b),c.fromBufferAttribute(i,_),o.add(u),f.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(a,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,f){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(f.length*u);let p=0,m=0;for(let b=0,_=f.length;b<_;b++){o.isInterleavedBufferAttribute?p=f[b]*o.data.stride+o.offset:p=f[b]*u;for(let x=0;x<u;x++)d[m++]=c[p++]}return new Si(d,u,h)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,a=this.attributes;for(const o in a){const f=a[o],c=e(f,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const f=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);f.push(p)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,f=s.length;o<f;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const c in f)f[c]!==void 0&&(e[c]=f[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const c=i[f];e.data.attributes[f]=c.toJSON(e.data)}const a={};let r=!1;for(const f in this.morphAttributes){const c=this.morphAttributes[f],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(a[f]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=od,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const bn=new k;class ds{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),a=Bt(a,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){us("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new Si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){us("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nl=new k,Wp=new k,Xp=new gt;class ji{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=nl.subVectors(i,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(nl),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(a,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xp.getNormalMatrix(e),a=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qp=0;class Da extends Ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=qr,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Hu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const f=r[o];delete f.metadata,s.push(f)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ji().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pd extends Da{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ka;const Nr=new k,Qa=new k,ja=new k,er=new Ce,Ur=new Ce,md=new qt,Po=new k,Or=new k,Io=new k,Df=new Ce,il=new Ce,Nf=new Ce;class Yp extends nn{constructor(e=new pd){if(super(),this.isSprite=!0,this.type="Sprite",Ka===void 0){Ka=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hp(t,5);Ka.setIndex([0,1,2,0,2,3]),Ka.setAttribute("position",new ds(i,3,0,!1)),Ka.setAttribute("uv",new ds(i,2,3,!1))}this.geometry=Ka,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qa.setFromMatrixScale(this.matrixWorld),md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ja.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qa.multiplyScalar(-ja.z);const i=this.material.rotation;let a,r;i!==0&&(r=Math.cos(i),a=Math.sin(i));const s=this.center;Lo(Po.set(-.5,-.5,0),ja,s,Qa,a,r),Lo(Or.set(.5,-.5,0),ja,s,Qa,a,r),Lo(Io.set(.5,.5,0),ja,s,Qa,a,r),Df.set(0,0),il.set(1,0),Nf.set(1,1);let o=e.ray.intersectTriangle(Po,Or,Io,!1,Nr);if(o===null&&(Lo(Or.set(-.5,.5,0),ja,s,Qa,a,r),il.set(0,1),o=e.ray.intersectTriangle(Po,Io,Or,!1,Nr),o===null))return;const f=e.ray.origin.distanceTo(Nr);f<e.near||f>e.far||t.push({distance:f,point:Nr.clone(),uv:Wn.getInterpolation(Nr,Po,Or,Io,Df,il,Nf,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lo(n,e,t,i,a,r){er.subVectors(n,t).addScalar(.5).multiply(i),a!==void 0?(Ur.x=r*er.x-a*er.y,Ur.y=a*er.x+r*er.y):Ur.copy(er),n.copy(e),n.x+=Ur.x,n.y+=Ur.y,n.applyMatrix4(md)}const Ri=new k,al=new k,Do=new k,No=new k;class gd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){al.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),No.copy(this.origin).sub(al);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Do),o=No.dot(this.direction),f=-No.dot(Do),c=No.lengthSq(),u=Math.abs(1-s*s);let h,d,p,m;if(u>0)if(h=s*f-o,d=s*o-f,m=r*u,h>=0)if(d>=-m)if(d<=m){const b=1/u;h*=b,d*=b,p=h*(h+s*d+2*o)+d*(s*h+d+2*f)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;else d<=-m?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-f),r),p=d*(d+2*f)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-f),r),p=-h*h+d*(d+2*f)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*f)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(al).addScaledVector(Do,d),p}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),a=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,f=i+s;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,r,s,o,f;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,a=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,a=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(e.min.z-d.z)*h,f=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,f=(e.min.z-d.z)*h),i>f||o>a)||((o>i||i!==i)&&(i=o),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,a,r){const s=this.origin,o=this.direction,f=o.x,c=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,m=t.x-s.x,b=t.y-s.y,_=t.z-s.z,x=i.x-s.x,T=i.y-s.y,C=i.z-s.z,S=Math.abs(f),E=Math.abs(c),R=Math.abs(u);let L,M,P,I,F,V,$,B,Y,re,te,ve;if(S>=E&&S>=R?(P=f,V=h,Y=m,ve=x,f>=0?(L=c,M=u,I=d,F=p,$=b,B=_,re=T,te=C):(L=u,M=c,I=p,F=d,$=_,B=b,re=C,te=T)):E>=R?(P=c,V=d,Y=b,ve=T,c>=0?(L=u,M=f,I=p,F=h,$=_,B=m,re=C,te=x):(L=f,M=u,I=h,F=p,$=m,B=_,re=x,te=C)):(P=u,V=p,Y=_,ve=C,u>=0?(L=f,M=c,I=h,F=d,$=m,B=b,re=x,te=T):(L=c,M=f,I=d,F=h,$=b,B=m,re=T,te=x)),P===0)return null;const ae=L/P,he=M/P,ge=1/P,Je=I-ae*V,Ge=F-he*V,wt=$-ae*Y,xt=B-he*Y,_t=re-ae*ve,se=te-he*ve,q=_t*xt-se*wt,_e=Je*se-Ge*_t,ke=wt*Ge-xt*Je;if(a){if(q<0||_e<0||ke<0)return null}else if((q<0||_e<0||ke<0)&&(q>0||_e>0||ke>0))return null;const Ee=q+_e+ke;if(Ee===0)return null;const je=ge*(q*V+_e*Y+ke*ve);return(Ee>0?je<0:je>0)?null:this.at(je/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mr extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uf=new qt,pa=new gd,Uo=new bs,Of=new k,Oo=new k,Fo=new k,Bo=new k,rl=new k,zo=new k,Ff=new k,ko=new k;class Ht extends nn{constructor(e=new dn,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){zo.set(0,0,0);for(let f=0,c=r.length;f<c;f++){const u=o[f],h=r[f];u!==0&&(rl.fromBufferAttribute(h,e),s?zo.addScaledVector(rl,u):zo.addScaledVector(rl.sub(t),u))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),pa.copy(e.ray).recast(e.near),!(Uo.containsPoint(pa.origin)===!1&&(pa.intersectSphere(Uo,Of)===null||pa.origin.distanceToSquared(Of)>(e.far-e.near)**2))&&(Uf.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Uf),!(i.boundingBox!==null&&pa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}_computeIntersections(e,t,i){let a;const r=this.geometry,s=this.material,o=r.index,f=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,b=d.length;m<b;m++){const _=d[m],x=s[_.materialIndex],T=Math.max(_.start,p.start),C=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,E=C;S<E;S+=3){const R=o.getX(S),L=o.getX(S+1),M=o.getX(S+2);a=Vo(this,x,e,i,c,u,h,R,L,M),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let _=m,x=b;_<x;_+=3){const T=o.getX(_),C=o.getX(_+1),S=o.getX(_+2);a=Vo(this,s,e,i,c,u,h,T,C,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(s))for(let m=0,b=d.length;m<b;m++){const _=d[m],x=s[_.materialIndex],T=Math.max(_.start,p.start),C=Math.min(f.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,E=C;S<E;S+=3){const R=S,L=S+1,M=S+2;a=Vo(this,x,e,i,c,u,h,R,L,M),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,p.start),b=Math.min(f.count,p.start+p.count);for(let _=m,x=b;_<x;_+=3){const T=_,C=_+1,S=_+2;a=Vo(this,s,e,i,c,u,h,T,C,S),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function $p(n,e,t,i,a,r,s,o){let f;if(e.side===Tn?f=i.intersectTriangle(s,r,a,!0,o):f=i.intersectTriangle(a,r,s,e.side===wa,o),f===null)return null;ko.copy(o),ko.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Vo(n,e,t,i,a,r,s,o,f,c){n.getVertexPosition(o,Oo),n.getVertexPosition(f,Fo),n.getVertexPosition(c,Bo);const u=$p(n,e,t,i,Oo,Fo,Bo,Ff);if(u){const h=new k;Wn.getBarycoord(Ff,Oo,Fo,Bo,h),a&&(u.uv=Wn.getInterpolatedAttribute(a,o,f,c,h,new Ce)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,f,c,h,new Ce)),s&&(u.normal=Wn.getInterpolatedAttribute(s,o,f,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:f,c,normal:new k,materialIndex:0};Wn.getNormal(Oo,Fo,Bo,d.normal),u.face=d,u.barycoord=h}return u}class xd extends un{constructor(e=null,t=1,i=1,a,r,s,o,f,c=tn,u=tn,h,d){super(null,s,o,f,c,u,a,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ma=new bs,Zp=new Ce(.5,.5),Go=new k;class Ic{constructor(e=new ji,t=new ji,i=new ji,a=new ji,r=new ji,s=new ji){this.planes=[e,t,i,a,r,s]}set(e,t,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],f=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],m=r[8],b=r[9],_=r[10],x=r[11],T=r[12],C=r[13],S=r[14],E=r[15];if(a[0].setComponents(c-s,p-u,x-m,E-T).normalize(),a[1].setComponents(c+s,p+u,x+m,E+T).normalize(),a[2].setComponents(c+o,p+h,x+b,E+C).normalize(),a[3].setComponents(c-o,p-h,x-b,E-C).normalize(),i)a[4].setComponents(f,d,_,S).normalize(),a[5].setComponents(c-f,p-d,x-_,E-S).normalize();else if(a[4].setComponents(c-f,p-d,x-_,E-S).normalize(),t===xi)a[5].setComponents(c+f,p+d,x+_,E+S).normalize();else if(t===to)a[5].setComponents(f,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ma)}intersectsSprite(e){ma.center.set(0,0,0);const t=Zp.distanceTo(e.center);return ma.radius=.7071067811865476+t,ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(ma)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Go.x=a.normal.x>0?e.max.x:e.min.x,Go.y=a.normal.y>0?e.max.y:e.min.y,Go.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vd extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bf=new qt,uc=new gd,Ho=new bs,Wo=new k;class Jp extends nn{constructor(e=new dn,t=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(a),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Bf.copy(a).invert(),uc.copy(e.ray).applyMatrix4(Bf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),f=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,b=p;m<b;m++){const _=c.getX(m);Wo.fromBufferAttribute(h,_),zf(Wo,_,f,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let m=d,b=p;m<b;m++)Wo.fromBufferAttribute(h,m),zf(Wo,m,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zf(n,e,t,i,a,r,s){const o=uc.distanceSqToPoint(n);if(o<t){const f=new k;uc.closestPointToPoint(n,f),f.applyMatrix4(i);const c=a.ray.origin.distanceTo(f);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class _d extends un{constructor(e=[],t=Ra,i,a,r,s,o,f,c,u){super(e,t,i,a,r,s,o,f,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kp extends un{constructor(e,t,i,a,r,s,o,f,c){super(e,t,i,a,r,s,o,f,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends un{constructor(e,t,i=yi,a,r,s,o=tn,f=tn,c,u=zi,h=1){if(u!==zi&&u!==Ea)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,a,r,s,o,f,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qp extends xr{constructor(e,t=yi,i=Ra,a,r,s=tn,o=tn,f,c=zi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,a,r,s,o,f,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Md extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xt extends dn{constructor(e=1,t=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const f=[],c=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,t,e,s,r,0),m("z","y","x",1,-1,i,t,-e,s,r,1),m("x","z","y",1,1,e,i,t,a,s,2),m("x","z","y",1,-1,e,i,-t,a,s,3),m("x","y","z",1,-1,e,t,i,a,r,4),m("x","y","z",-1,-1,e,t,-i,a,r,5),this.setIndex(f),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function m(b,_,x,T,C,S,E,R,L,M,P){const I=S/L,F=E/M,V=S/2,$=E/2,B=R/2,Y=L+1,re=M+1;let te=0,ve=0;const ae=new k;for(let he=0;he<re;he++){const ge=he*F-$;for(let Je=0;Je<Y;Je++){const Ge=Je*I-V;ae[b]=Ge*T,ae[_]=ge*C,ae[x]=B,c.push(ae.x,ae.y,ae.z),ae[b]=0,ae[_]=0,ae[x]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Je/L),h.push(1-he/M),te+=1}}for(let he=0;he<M;he++)for(let ge=0;ge<L;ge++){const Je=d+ge+Y*he,Ge=d+ge+Y*(he+1),wt=d+(ge+1)+Y*(he+1),xt=d+(ge+1)+Y*he;f.push(Je,Ge,xt),f.push(Ge,wt,xt),ve+=6}o.addGroup(p,ve,P),p+=ve,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cn extends dn{constructor(e=1,t=1,i=1,a=32,r=1,s=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:f};const c=this;a=Math.floor(a),r=Math.floor(r);const u=[],h=[],d=[],p=[];let m=0;const b=[],_=i/2;let x=0;T(),s===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function T(){const S=new k,E=new k;let R=0;const L=(t-e)/i;for(let M=0;M<=r;M++){const P=[],I=M/r,F=I*(t-e)+e;for(let V=0;V<=a;V++){const $=V/a,B=$*f+o,Y=Math.sin(B),re=Math.cos(B);E.x=F*Y,E.y=-I*i+_,E.z=F*re,h.push(E.x,E.y,E.z),S.set(Y,L,re).normalize(),d.push(S.x,S.y,S.z),p.push($,1-I),P.push(m++)}b.push(P)}for(let M=0;M<a;M++)for(let P=0;P<r;P++){const I=b[P][M],F=b[P+1][M],V=b[P+1][M+1],$=b[P][M+1];(e>0||P!==0)&&(u.push(I,F,$),R+=3),(t>0||P!==r-1)&&(u.push(F,V,$),R+=3)}c.addGroup(x,R,0),x+=R}function C(S){const E=m,R=new Ce,L=new k;let M=0;const P=S===!0?e:t,I=S===!0?1:-1;for(let V=1;V<=a;V++)h.push(0,_*I,0),d.push(0,I,0),p.push(.5,.5),m++;const F=m;for(let V=0;V<=a;V++){const B=V/a*f+o,Y=Math.cos(B),re=Math.sin(B);L.x=P*re,L.y=_*I,L.z=P*Y,h.push(L.x,L.y,L.z),d.push(0,I,0),R.x=Y*.5+.5,R.y=re*.5*I+.5,p.push(R.x,R.y),m++}for(let V=0;V<a;V++){const $=E+V,B=F+V;S===!0?u.push(B,B+1,$):u.push(B+1,B,$),M+=3}c.addGroup(x,M,S===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends Cn{constructor(e=1,t=1,i=32,a=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,i,a,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends dn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const r=[],s=[];o(a),c(i),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const C=new k,S=new k,E=new k;for(let R=0;R<t.length;R+=3)p(t[R+0],C),p(t[R+1],S),p(t[R+2],E),f(C,S,E,T)}function f(T,C,S,E){const R=E+1,L=[];for(let M=0;M<=R;M++){L[M]=[];const P=T.clone().lerp(S,M/R),I=C.clone().lerp(S,M/R),F=R-M;for(let V=0;V<=F;V++)V===0&&M===R?L[M][V]=P:L[M][V]=P.clone().lerp(I,V/F)}for(let M=0;M<R;M++)for(let P=0;P<2*(R-M)-1;P++){const I=Math.floor(P/2);P%2===0?(d(L[M][I+1]),d(L[M+1][I]),d(L[M][I])):(d(L[M][I+1]),d(L[M+1][I+1]),d(L[M+1][I]))}}function c(T){const C=new k;for(let S=0;S<r.length;S+=3)C.x=r[S+0],C.y=r[S+1],C.z=r[S+2],C.normalize().multiplyScalar(T),r[S+0]=C.x,r[S+1]=C.y,r[S+2]=C.z}function u(){const T=new k;for(let C=0;C<r.length;C+=3){T.x=r[C+0],T.y=r[C+1],T.z=r[C+2];const S=_(T)/2/Math.PI+.5,E=x(T)/Math.PI+.5;s.push(S,1-E)}m(),h()}function h(){for(let T=0;T<s.length;T+=6){const C=s[T+0],S=s[T+2],E=s[T+4],R=Math.max(C,S,E),L=Math.min(C,S,E);R>.9&&L<.1&&(C<.2&&(s[T+0]+=1),S<.2&&(s[T+2]+=1),E<.2&&(s[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,C){const S=T*3;C.x=e[S+0],C.y=e[S+1],C.z=e[S+2]}function m(){const T=new k,C=new k,S=new k,E=new k,R=new Ce,L=new Ce,M=new Ce;for(let P=0,I=0;P<r.length;P+=9,I+=6){T.set(r[P+0],r[P+1],r[P+2]),C.set(r[P+3],r[P+4],r[P+5]),S.set(r[P+6],r[P+7],r[P+8]),R.set(s[I+0],s[I+1]),L.set(s[I+2],s[I+3]),M.set(s[I+4],s[I+5]),E.copy(T).add(C).add(S).divideScalar(3);const F=_(E);b(R,I+0,T,F),b(L,I+2,C,F),b(M,I+4,S,F)}}function b(T,C,S,E){E<0&&T.x===1&&(s[C]=T.x-1),S.x===0&&S.z===0&&(s[C]=E/2/Math.PI+.5)}function _(T){return Math.atan2(T.z,-T.x)}function x(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.vertices,e.indices,e.radius,e.detail)}}class Lc extends Es{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lc(e.radius,e.detail)}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(a),t.push(r),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let o=0,f=r-1,c;for(;o<=f;)if(a=Math.floor(o+(f-o)/2),c=i[a]-s,c<0)o=a+1;else if(c>0)f=a-1;else{f=a;break}if(a=f,i[a]===s)return a/(r-1);const u=i[a],d=i[a+1]-u,p=(s-u)/d;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),f=t||(s.isVector2?new Ce:new k);return f.copy(o).sub(s).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,a=[],r=[],s=[],o=new k,f=new qt;for(let p=0;p<=e;p++){const m=p/e;a[p]=this.getTangentAt(m,new k)}r[0]=new k,s[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(a[0].x),h=Math.abs(a[0].y),d=Math.abs(a[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(At(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(f.makeRotationAxis(o,m))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(At(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(f.makeRotationAxis(a[m],p*m)),s[m].crossVectors(a[m],r[m])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dc extends bi{constructor(e=0,t=0,i=1,a=1,r=0,s=Math.PI*2,o=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=f}getPoint(e,t=new Ce){const i=t,a=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(s?r=0:r=a),this.aClockwise===!0&&!s&&(r===a?r=-a:r=r-a);const o=this.aStartAngle+e*r;let f=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=f-this.aX,p=c-this.aY;f=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(f,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jp extends Dc{constructor(e,t,i,a,r,s){super(e,t,i,i,a,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Nc(){let n=0,e=0,t=0,i=0;function a(r,s,o,f){n=r,e=o,t=-3*r+3*s-2*o-f,i=2*r-2*s+o+f}return{initCatmullRom:function(r,s,o,f,c){a(s,o,c*(o-r),c*(f-s))},initNonuniformCatmullRom:function(r,s,o,f,c,u,h){let d=(s-r)/c-(o-r)/(c+u)+(o-s)/u,p=(o-s)/u-(f-s)/(u+h)+(f-o)/h;d*=u,p*=u,a(s,o,d,p)},calc:function(r){const s=r*r,o=s*r;return n+e*r+t*s+i*o}}}const kf=new k,Vf=new k,ol=new Nc,sl=new Nc,ll=new Nc;class e0 extends bi{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new k){const i=t,a=this.points,r=a.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),f=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:f===0&&o===r-1&&(o=r-2,f=1);let c,u;this.closed||o>0?c=a[(o-1)%r]:(Vf.subVectors(a[0],a[1]).add(a[0]),c=Vf);const h=a[o%r],d=a[(o+1)%r];if(this.closed||o+2<r?u=a[(o+2)%r]:(kf.subVectors(a[r-1],a[r-2]).add(a[r-1]),u=kf),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),b=Math.pow(h.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p);b<1e-4&&(b=1),m<1e-4&&(m=b),_<1e-4&&(_=b),ol.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,b,_),sl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,b,_),ll.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,b,_)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ll.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ol.calc(f),sl.calc(f),ll.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new k().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gf(n,e,t,i,a){const r=(i-e)*.5,s=(a-t)*.5,o=n*n,f=n*o;return(2*t-2*i+r+s)*f+(-3*t+3*i-2*r-s)*o+r*n+t}function t0(n,e){const t=1-n;return t*t*e}function n0(n,e){return 2*(1-n)*n*e}function i0(n,e){return n*n*e}function Zr(n,e,t,i){return t0(n,e)+n0(n,t)+i0(n,i)}function a0(n,e){const t=1-n;return t*t*t*e}function r0(n,e){const t=1-n;return 3*t*t*n*e}function o0(n,e){return 3*(1-n)*n*n*e}function s0(n,e){return n*n*n*e}function Jr(n,e,t,i,a){return a0(n,e)+r0(n,t)+o0(n,i)+s0(n,a)}class Sd extends bi{constructor(e=new Ce,t=new Ce,i=new Ce,a=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new Ce){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Jr(e,a.x,r.x,s.x,o.x),Jr(e,a.y,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l0 extends bi{constructor(e=new k,t=new k,i=new k,a=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new k){const i=t,a=this.v0,r=this.v1,s=this.v2,o=this.v3;return i.set(Jr(e,a.x,r.x,s.x,o.x),Jr(e,a.y,r.y,s.y,o.y),Jr(e,a.z,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yd extends bi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c0 extends bi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bd extends bi{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(Zr(e,a.x,r.x,s.x),Zr(e,a.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f0 extends bi{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,a=this.v0,r=this.v1,s=this.v2;return i.set(Zr(e,a.x,r.x,s.x),Zr(e,a.y,r.y,s.y),Zr(e,a.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,a=this.points,r=(a.length-1)*e,s=Math.floor(r),o=r-s,f=a[s===0?s:s-1],c=a[s],u=a[s>a.length-2?a.length-1:s+1],h=a[s>a.length-3?a.length-1:s+2];return i.set(Gf(o,f.x,c.x,u.x,h.x),Gf(o,f.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new Ce().fromArray(a))}return this}}var dc=Object.freeze({__proto__:null,ArcCurve:jp,CatmullRomCurve3:e0,CubicBezierCurve:Sd,CubicBezierCurve3:l0,EllipseCurve:Dc,LineCurve:yd,LineCurve3:c0,QuadraticBezierCurve:bd,QuadraticBezierCurve3:f0,SplineCurve:Ed});class u0 extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let r=0;for(;r<a.length;){if(a[r]>=i){const s=a[r]-i,o=this.curves[r],f=o.getLength(),c=f===0?0:1-s/f;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,r=this.curves;a<r.length;a++){const s=r[a],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,f=s.getPoints(o);for(let c=0;c<f.length;c++){const u=f[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new dc[a.type]().fromJSON(a))}return this}}class Hf extends u0{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new yd(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const r=new bd(this.currentPoint.clone(),new Ce(e,t),new Ce(i,a));return this.curves.push(r),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,r,s){const o=new Sd(this.currentPoint.clone(),new Ce(e,t),new Ce(i,a),new Ce(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ed(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,r,s){const o=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+o,t+f,i,a,r,s),this}absarc(e,t,i,a,r,s){return this.absellipse(e,t,i,i,a,r,s),this}ellipse(e,t,i,a,r,s,o,f){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,a,r,s,o,f),this}absellipse(e,t,i,a,r,s,o,f){const c=new Dc(e,t,i,a,r,s,o,f);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uc extends Hf{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new Hf().fromJSON(a))}return this}}function d0(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let r=Ad(n,0,a,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,f,c;if(i&&(r=x0(n,e,r,t)),n.length>80*t){o=n[0],f=n[1];let u=o,h=f;for(let d=t;d<a;d+=t){const p=n[d],m=n[d+1];p<o&&(o=p),m<f&&(f=m),p>u&&(u=p),m>h&&(h=m)}c=Math.max(u-o,h-f),c=c!==0?32767/c:0}return ao(r,s,t,o,f,c,0),s}function Ad(n,e,t,i,a){let r;if(a===R0(n,e,t,i)>0)for(let s=e;s<t;s+=i)r=Wf(s/i|0,n[s],n[s+1],r);else for(let s=t-i;s>=e;s-=i)r=Wf(s/i|0,n[s],n[s+1],r);return r&&vr(r,r.next)&&(oo(r),r=r.next),r}function Pa(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vr(t,t.next)||Qt(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ao(n,e,t,i,a,r,s){if(!n)return;!s&&r&&y0(n,i,a,r);let o=n;for(;n.prev!==n.next;){const f=n.prev,c=n.next;if(r?p0(n,i,a,r):h0(n)){e.push(f.i,n.i,c.i),oo(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=m0(Pa(n),e),ao(n,e,t,i,a,r,2)):s===2&&g0(n,e,t,i,a,r):ao(Pa(n),e,t,i,a,r,1);break}}}function h0(n){const e=n.prev,t=n,i=n.next;if(Qt(e,t,i)>=0)return!1;const a=e.x,r=t.x,s=i.x,o=e.y,f=t.y,c=i.y,u=Math.min(a,r,s),h=Math.min(o,f,c),d=Math.max(a,r,s),p=Math.max(o,f,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=p&&Hr(a,o,r,f,s,c,m.x,m.y)&&Qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function p0(n,e,t,i){const a=n.prev,r=n,s=n.next;if(Qt(a,r,s)>=0)return!1;const o=a.x,f=r.x,c=s.x,u=a.y,h=r.y,d=s.y,p=Math.min(o,f,c),m=Math.min(u,h,d),b=Math.max(o,f,c),_=Math.max(u,h,d),x=hc(p,m,e,t,i),T=hc(b,_,e,t,i);let C=n.prevZ,S=n.nextZ;for(;C&&C.z>=x&&S&&S.z<=T;){if(C.x>=p&&C.x<=b&&C.y>=m&&C.y<=_&&C!==a&&C!==s&&Hr(o,u,f,h,c,d,C.x,C.y)&&Qt(C.prev,C,C.next)>=0||(C=C.prevZ,S.x>=p&&S.x<=b&&S.y>=m&&S.y<=_&&S!==a&&S!==s&&Hr(o,u,f,h,c,d,S.x,S.y)&&Qt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;C&&C.z>=x;){if(C.x>=p&&C.x<=b&&C.y>=m&&C.y<=_&&C!==a&&C!==s&&Hr(o,u,f,h,c,d,C.x,C.y)&&Qt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;S&&S.z<=T;){if(S.x>=p&&S.x<=b&&S.y>=m&&S.y<=_&&S!==a&&S!==s&&Hr(o,u,f,h,c,d,S.x,S.y)&&Qt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function m0(n,e){let t=n;do{const i=t.prev,a=t.next.next;!vr(i,a)&&wd(i,t,t.next,a)&&ro(i,a)&&ro(a,i)&&(e.push(i.i,t.i,a.i),oo(t),oo(t.next),t=n=a),t=t.next}while(t!==n);return Pa(t)}function g0(n,e,t,i,a,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&A0(s,o)){let f=Rd(s,o);s=Pa(s,s.next),f=Pa(f,f.next),ao(s,e,t,i,a,r,0),ao(f,e,t,i,a,r,0);return}o=o.next}s=s.next}while(s!==n)}function x0(n,e,t,i){const a=[];for(let r=0,s=e.length;r<s;r++){const o=e[r]*i,f=r<s-1?e[r+1]*i:n.length,c=Ad(n,o,f,i,!1);c===c.next&&(c.steiner=!0),a.push(E0(c))}a.sort(v0);for(let r=0;r<a.length;r++)t=_0(a[r],t);return t}function v0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function _0(n,e){const t=M0(n,e);if(!t)return e;const i=Rd(t,n);return Pa(i,i.next),Pa(t,t.next)}function M0(n,e){let t=e;const i=n.x,a=n.y;let r=-1/0,s;if(vr(n,t))return t;do{if(vr(n,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,f=s.x,c=s.y;let u=1/0;t=s;do{if(i>=t.x&&t.x>=f&&i!==t.x&&Td(a<c?i:r,a,f,c,a<c?r:i,a,t.x,t.y)){const h=Math.abs(a-t.y)/(i-t.x);ro(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&S0(s,t)))&&(s=t,u=h)}t=t.next}while(t!==o);return s}function S0(n,e){return Qt(n.prev,n,e.prev)<0&&Qt(e.next,n,n.next)<0}function y0(n,e,t,i){let a=n;do a.z===0&&(a.z=hc(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,b0(a)}function b0(n){let e,t=1;do{let i=n,a;n=null;let r=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let f=t;for(;o>0||f>0&&s;)o!==0&&(f===0||!s||i.z<=s.z)?(a=i,i=i.nextZ,o--):(a=s,s=s.nextZ,f--),r?r.nextZ=a:n=a,a.prevZ=r,r=a;i=s}r.nextZ=null,t*=2}while(e>1);return n}function hc(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Td(n,e,t,i,a,r,s,o){return(a-s)*(e-o)>=(n-s)*(r-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(a-s)*(i-o)}function Hr(n,e,t,i,a,r,s,o){return!(n===s&&e===o)&&Td(n,e,t,i,a,r,s,o)}function A0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!T0(n,e)&&(ro(n,e)&&ro(e,n)&&w0(n,e)&&(Qt(n.prev,n,e.prev)||Qt(n,e.prev,e))||vr(n,e)&&Qt(n.prev,n,n.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vr(n,e){return n.x===e.x&&n.y===e.y}function wd(n,e,t,i){const a=qo(Qt(n,e,t)),r=qo(Qt(n,e,i)),s=qo(Qt(t,i,n)),o=qo(Qt(t,i,e));return!!(a!==r&&s!==o||a===0&&Xo(n,t,e)||r===0&&Xo(n,i,e)||s===0&&Xo(t,n,i)||o===0&&Xo(t,e,i))}function Xo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qo(n){return n>0?1:n<0?-1:0}function T0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&wd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ro(n,e){return Qt(n.prev,n,n.next)<0?Qt(n,e,n.next)>=0&&Qt(n,n.prev,e)>=0:Qt(n,e,n.prev)<0||Qt(n,n.next,e)<0}function w0(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&a<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Rd(n,e){const t=pc(n.i,n.x,n.y),i=pc(e.i,e.x,e.y),a=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wf(n,e,t,i){const a=pc(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(n,e,t,i){let a=0;for(let r=e,s=t-i;r<t;r+=i)a+=(n[s]-n[r])*(n[r+1]+n[s+1]),s=r;return a}class C0{static triangulate(e,t,i=2){return d0(e,t,i)}}class ur{static area(e){const t=e.length;let i=0;for(let a=t-1,r=0;r<t;a=r++)i+=e[a].x*e[r].y-e[r].x*e[a].y;return i*.5}static isClockWise(e){return ur.area(e)<0}static triangulateShape(e,t){const i=[],a=[],r=[];Xf(e),qf(i,e);let s=e.length;t.forEach(Xf);for(let f=0;f<t.length;f++)a.push(s),s+=t[f].length,qf(i,t[f]);const o=C0.triangulate(i,a);for(let f=0;f<o.length;f+=3)r.push(o.slice(f,f+3));return r}}function Xf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function qf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class hs extends dn{constructor(e=new Uc([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],r=[];for(let o=0,f=e.length;o<f;o++){const c=e[o];s(c)}this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function s(o){const f=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:P0;let C,S=!1,E,R,L,M;if(x){C=x.getSpacedPoints(u),S=!0,d=!1;const fe=x.isCatmullRomCurve3?x.closed:!1;E=x.computeFrenetFrames(u,fe),R=new k,L=new k,M=new k}d||(_=0,p=0,m=0,b=0);const P=o.extractPoints(c);let I=P.shape;const F=P.holes;if(!ur.isClockWise(I)){I=I.reverse();for(let fe=0,xe=F.length;fe<xe;fe++){const Me=F[fe];ur.isClockWise(Me)&&(F[fe]=Me.reverse())}}function $(fe){const Me=10000000000000001e-36;let ye=fe[0];for(let be=1;be<=fe.length;be++){const A=be%fe.length,qe=fe[A],We=qe.x-ye.x,it=qe.y-ye.y,z=We*We+it*it,ut=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(ye.x),Math.abs(ye.y)),Mt=Me*ut*ut;if(z<=Mt){fe.splice(A,1),be--;continue}ye=qe}}$(I),F.forEach($);const B=F.length,Y=I;for(let fe=0;fe<B;fe++){const xe=F[fe];I=I.concat(xe)}function re(fe,xe,Me){return xe||Ct("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(xe,Me)}const te=I.length;function ve(fe,xe,Me){let ye,be,A;const qe=fe.x-xe.x,We=fe.y-xe.y,it=Me.x-fe.x,z=Me.y-fe.y,ut=qe*qe+We*We,Mt=qe*z-We*it;if(Math.abs(Mt)>Number.EPSILON){const N=Math.sqrt(ut),y=Math.sqrt(it*it+z*z),Z=xe.x-We/N,ee=xe.y+qe/N,ue=Me.x-z/y,Te=Me.y+it/y,we=((ue-Z)*z-(Te-ee)*it)/(qe*z-We*it);ye=Z+qe*we-fe.x,be=ee+We*we-fe.y;const le=ye*ye+be*be;if(le<=2)return new Ce(ye,be);A=Math.sqrt(le/2)}else{let N=!1;qe>Number.EPSILON?it>Number.EPSILON&&(N=!0):qe<-Number.EPSILON?it<-Number.EPSILON&&(N=!0):Math.sign(We)===Math.sign(z)&&(N=!0),N?(ye=-We,be=qe,A=Math.sqrt(ut)):(ye=qe,be=We,A=Math.sqrt(ut/2))}return new Ce(ye/A,be/A)}const ae=[];for(let fe=0,xe=Y.length,Me=xe-1,ye=fe+1;fe<xe;fe++,Me++,ye++)Me===xe&&(Me=0),ye===xe&&(ye=0),ae[fe]=ve(Y[fe],Y[Me],Y[ye]);const he=[];let ge,Je=ae.concat();for(let fe=0,xe=B;fe<xe;fe++){const Me=F[fe];ge=[];for(let ye=0,be=Me.length,A=be-1,qe=ye+1;ye<be;ye++,A++,qe++)A===be&&(A=0),qe===be&&(qe=0),ge[ye]=ve(Me[ye],Me[A],Me[qe]);he.push(ge),Je=Je.concat(ge)}let Ge;if(_===0)Ge=ur.triangulateShape(Y,F);else{const fe=[],xe=[];for(let Me=0;Me<_;Me++){const ye=Me/_,be=p*Math.cos(ye*Math.PI/2),A=m*Math.sin(ye*Math.PI/2)+b;for(let qe=0,We=Y.length;qe<We;qe++){const it=re(Y[qe],ae[qe],A);_e(it.x,it.y,-be),ye===0&&fe.push(it)}for(let qe=0,We=B;qe<We;qe++){const it=F[qe];ge=he[qe];const z=[];for(let ut=0,Mt=it.length;ut<Mt;ut++){const N=re(it[ut],ge[ut],A);_e(N.x,N.y,-be),ye===0&&z.push(N)}ye===0&&xe.push(z)}}Ge=ur.triangulateShape(fe,xe)}const wt=Ge.length,xt=m+b;for(let fe=0;fe<te;fe++){const xe=d?re(I[fe],Je[fe],xt):I[fe];S?(L.copy(E.normals[0]).multiplyScalar(xe.x),R.copy(E.binormals[0]).multiplyScalar(xe.y),M.copy(C[0]).add(L).add(R),_e(M.x,M.y,M.z)):_e(xe.x,xe.y,0)}for(let fe=1;fe<=u;fe++)for(let xe=0;xe<te;xe++){const Me=d?re(I[xe],Je[xe],xt):I[xe];S?(L.copy(E.normals[fe]).multiplyScalar(Me.x),R.copy(E.binormals[fe]).multiplyScalar(Me.y),M.copy(C[fe]).add(L).add(R),_e(M.x,M.y,M.z)):_e(Me.x,Me.y,h/u*fe)}for(let fe=_-1;fe>=0;fe--){const xe=fe/_,Me=p*Math.cos(xe*Math.PI/2),ye=m*Math.sin(xe*Math.PI/2)+b;for(let be=0,A=Y.length;be<A;be++){const qe=re(Y[be],ae[be],ye);_e(qe.x,qe.y,h+Me)}for(let be=0,A=F.length;be<A;be++){const qe=F[be];ge=he[be];for(let We=0,it=qe.length;We<it;We++){const z=re(qe[We],ge[We],ye);S?_e(z.x,z.y+C[u-1].y,C[u-1].x+Me):_e(z.x,z.y,h+Me)}}}_t(),se();function _t(){const fe=a.length/3;if(d){let xe=0,Me=te*xe;for(let ye=0;ye<wt;ye++){const be=Ge[ye];ke(be[2]+Me,be[1]+Me,be[0]+Me)}xe=u+_*2,Me=te*xe;for(let ye=0;ye<wt;ye++){const be=Ge[ye];ke(be[0]+Me,be[1]+Me,be[2]+Me)}}else{for(let xe=0;xe<wt;xe++){const Me=Ge[xe];ke(Me[2],Me[1],Me[0])}for(let xe=0;xe<wt;xe++){const Me=Ge[xe];ke(Me[0]+te*u,Me[1]+te*u,Me[2]+te*u)}}i.addGroup(fe,a.length/3-fe,0)}function se(){const fe=a.length/3;let xe=0;q(Y,xe),xe+=Y.length;for(let Me=0,ye=F.length;Me<ye;Me++){const be=F[Me];q(be,xe),xe+=be.length}i.addGroup(fe,a.length/3-fe,1)}function q(fe,xe){let Me=fe.length;for(;--Me>=0;){const ye=Me;let be=Me-1;be<0&&(be=fe.length-1);for(let A=0,qe=u+_*2;A<qe;A++){const We=te*A,it=te*(A+1),z=xe+ye+We,ut=xe+be+We,Mt=xe+be+it,N=xe+ye+it;Ee(z,ut,Mt,N)}}}function _e(fe,xe,Me){f.push(fe),f.push(xe),f.push(Me)}function ke(fe,xe,Me){je(fe),je(xe),je(Me);const ye=a.length/3,be=T.generateTopUV(i,a,ye-3,ye-2,ye-1);lt(be[0]),lt(be[1]),lt(be[2])}function Ee(fe,xe,Me,ye){je(fe),je(xe),je(ye),je(xe),je(Me),je(ye);const be=a.length/3,A=T.generateSideWallUV(i,a,be-6,be-3,be-2,be-1);lt(A[0]),lt(A[1]),lt(A[3]),lt(A[1]),lt(A[2]),lt(A[3])}function je(fe){a.push(f[fe*3+0]),a.push(f[fe*3+1]),a.push(f[fe*3+2])}function lt(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return I0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new dc[a.type]().fromJSON(a)),new hs(i,e.options)}}const P0={generateTopUV:function(n,e,t,i,a){const r=e[t*3],s=e[t*3+1],o=e[i*3],f=e[i*3+1],c=e[a*3],u=e[a*3+1];return[new Ce(r,s),new Ce(o,f),new Ce(c,u)]},generateSideWallUV:function(n,e,t,i,a,r){const s=e[t*3],o=e[t*3+1],f=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[a*3],p=e[a*3+1],m=e[a*3+2],b=e[r*3],_=e[r*3+1],x=e[r*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new Ce(s,1-f),new Ce(c,1-h),new Ce(d,1-m),new Ce(b,1-x)]:[new Ce(o,1-f),new Ce(u,1-h),new Ce(p,1-m),new Ce(_,1-x)]}};function I0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Oc extends Es{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oc(e.radius,e.detail)}}class Sr extends dn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(i),f=Math.floor(a),c=o+1,u=f+1,h=e/o,d=t/f,p=[],m=[],b=[],_=[];for(let x=0;x<u;x++){const T=x*d-s;for(let C=0;C<c;C++){const S=C*h-r;m.push(S,-T,0),b.push(0,0,1),_.push(C/o),_.push(1-x/f)}}for(let x=0;x<f;x++)for(let T=0;T<o;T++){const C=T+c*x,S=T+c*(x+1),E=T+1+c*(x+1),R=T+1+c*x;p.push(C,S,R),p.push(S,E,R)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gn extends dn{constructor(e=1,t=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(s+o,Math.PI);let c=0;const u=[],h=new k,d=new k,p=[],m=[],b=[],_=[];for(let x=0;x<=i;x++){const T=[],C=x/i,S=s+C*o,E=e*Math.cos(S),R=Math.sqrt(e*e-E*E);let L=0;x===0&&s===0?L=.5/t:x===i&&f===Math.PI&&(L=-.5/t);for(let M=0;M<=t;M++){const P=M/t,I=a+P*r;h.x=-R*Math.cos(I),h.y=E,h.z=R*Math.sin(I),m.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),_.push(P+L,1-C),T.push(c++)}u.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const C=u[x][T+1],S=u[x][T],E=u[x+1][T],R=u[x+1][T+1];(x!==0||s>0)&&p.push(C,S,R),(x!==i-1||f<Math.PI)&&p.push(S,E,R)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fc extends dn{constructor(e=1,t=.4,i=12,a=48,r=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:r,thetaStart:s,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const f=[],c=[],u=[],h=[],d=new k,p=new k,m=new k;for(let b=0;b<=i;b++){const _=s+b/i*o;for(let x=0;x<=a;x++){const T=x/a*r;p.x=(e+t*Math.cos(_))*Math.cos(T),p.y=(e+t*Math.cos(_))*Math.sin(T),p.z=t*Math.sin(_),c.push(p.x,p.y,p.z),d.x=e*Math.cos(T),d.y=e*Math.sin(T),m.subVectors(p,d).normalize(),u.push(m.x,m.y,m.z),h.push(x/a),h.push(b/i)}}for(let b=1;b<=i;b++)for(let _=1;_<=a;_++){const x=(a+1)*b+_-1,T=(a+1)*(b-1)+_-1,C=(a+1)*(b-1)+_,S=(a+1)*b+_;f.push(x,T,S),f.push(T,C,S)}this.setIndex(f),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];if(Yf(a))a.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Yf(a[0])){const r=[];for(let s=0,o=a.length;s<o;s++)r[s]=a[s].clone();e[t][i]=r}else e[t][i]=a.slice();else e[t][i]=a}}return e}function An(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const a in i)e[a]=i[a]}return e}function Yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function L0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const D0={clone:_r,merge:An};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=L0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new ht().setHex(a.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(a.value);break;case"v3":this.uniforms[i].value=new k().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Kt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new gt().fromArray(a.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class O0 extends ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yr extends Da{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F0 extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B0 extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&($f(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!$f(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function $f(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class z0{constructor(e,t,i){const a=this;let r=!1,s=0,o=0,f;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),f?f(u):u},this.setURLModifier=function(u){return f=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const k0=new z0;class Bc{constructor(e){this.manager=e!==void 0?e:k0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,r){i.load(e,a,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr=new WeakMap;class V0 extends Bc{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=cl.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=tr.get(s);h===void 0&&(h=[],tr.set(s,h)),h.push({onLoad:t,onError:a})}return s}const o=no("img");function f(){u(),t&&t(this);const h=tr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}tr.delete(this),r.manager.itemEnd(e)}function c(h){u(),a&&a(h),cl.remove(`image:${e}`);const d=tr.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];m.onError&&m.onError(h)}tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",f,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),cl.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class G0 extends Bc{constructor(e){super(e)}load(e,t,i,a){const r=new un,s=new V0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,a),r}}class Pd extends nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class H0 extends Pd{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fl=new qt,Zf=new k,Jf=new k;class W0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zf),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,a){fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(fl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=a?a.z/r.x:1,o=a?a.w/r.y:1,f=a?a.x/r.x:0,c=a?a.y/r.y:0;e.coordinateSystem===to||e.reversedDepth?t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+f,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new k,$o=new La,ci=new k;class Id extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Yo,$o,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,$o,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new k,Kf=new Ce,Qf=new Ce;class Hn extends Id{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Kf,Qf),t.subVectors(Qf,Kf)}setViewOffset(e,t,i,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const f=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/f,t-=s.offsetY*i/c,a*=s.width/f,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class As extends Id{constructor(e=-1,t=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,f=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class X0 extends W0{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q0 extends Pd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new X0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const nr=-90,ir=1;class Y0 extends nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(nr,ir,e,t);a.layers=this.layers,this.add(a);const r=new Hn(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new Hn(nr,ir,e,t);s.layers=this.layers,this.add(s);const o=new Hn(nr,ir,e,t);o.layers=this.layers,this.add(o);const f=new Hn(nr,ir,e,t);f.layers=this.layers,this.add(f);const c=new Hn(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,r,s,o,f]=t;for(const c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,f,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class $0 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const af=class af{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=a,this}};af.prototype.isMatrix2=!0;let jf=af;function eu(n,e,t,i){const a=Z0(i);switch(t){case id:return n*e;case rd:return n*e/a.components*a.byteLength;case Ec:return n*e/a.components*a.byteLength;case Ca:return n*e*2/a.components*a.byteLength;case Ac:return n*e*2/a.components*a.byteLength;case ad:return n*e*3/a.components*a.byteLength;case Xn:return n*e*4/a.components*a.byteLength;case Tc:return n*e*4/a.components*a.byteLength;case ts:case ns:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case is:case as:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:case Fl:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case zl:case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kl:case ss:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ac:case rc:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ls:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z0(n){switch(n){case Fn:case ju:return{byteLength:1,components:1};case jr:case ed:case Yn:return{byteLength:2,components:1};case yc:case bc:return{byteLength:2,components:4};case yi:case Sc:case gi:return{byteLength:4,components:1};case td:case nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function Ld(){let n=null,e=!1,t=null,i=null;function a(r,s){i=n.requestAnimationFrame(a),t(r,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function J0(n){const e=new WeakMap;function t(o,f){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(f,d),n.bufferData(f,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,f,c){const u=f.array,h=f.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],b=h[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,h[d]=b)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const b=h[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(n.deleteBuffer(f.buffer),e.delete(o))}function s(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,f));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,f),c.version=o.version}}return{get:a,remove:r,update:s}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fm=`#ifdef USE_IRIDESCENCE
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
#endif`,um=`#ifdef USE_BUMPMAP
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mm=`#define PI 3.141592653589793
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
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bm=`#ifdef USE_GRADIENTMAP
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
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,Zm=`uniform sampler2D dfgLUT;
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
}`,Jm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,ax=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,xx=`#define NORMAL
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
}`,vx=`#define NORMAL
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
}`,_x=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,yx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Cx=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:K0,alphahash_pars_fragment:Q0,alphamap_fragment:j0,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:am,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:sm,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:fm,bumpmap_pars_fragment:um,clipping_planes_fragment:dm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:vm,color_vertex:_m,common:Mm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:ym,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:Am,emissivemap_pars_fragment:Tm,colorspace_fragment:wm,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Hm,envmap_vertex:Dm,fog_vertex:Nm,fog_pars_vertex:Um,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:Bm,lightmap_pars_fragment:zm,lights_lambert_fragment:km,lights_lambert_pars_fragment:Vm,lights_pars_begin:Gm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:$m,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:Km,lights_fragment_end:Qm,lightprobes_pars_fragment:jm,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:ag,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:sg,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:fg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:hg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:xg,normal_pars_vertex:vg,normal_vertex:_g,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:yg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Eg,opaque_fragment:Ag,packing:Tg,premultiplied_alpha_fragment:wg,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:Og,skinbase_vertex:Fg,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:kg,specularmap_fragment:Vg,specularmap_pars_fragment:Gg,tonemapping_fragment:Hg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:$g,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:Kg,background_frag:Qg,backgroundCube_vert:jg,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:ax,distance_vert:rx,distance_frag:ox,equirect_vert:sx,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:fx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:hx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:xx,meshnormal_frag:vx,meshphong_vert:_x,meshphong_frag:Mx,meshphysical_vert:Sx,meshphysical_frag:yx,meshtoon_vert:bx,meshtoon_frag:Ex,points_vert:Ax,points_frag:Tx,shadow_vert:wx,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Px},Ve={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},di={basic:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:An([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:An([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:An([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new ht(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:An([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:An([Ve.points,Ve.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:An([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:An([Ve.common,Ve.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:An([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:An([Ve.sprite,Ve.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:An([Ve.common,Ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:An([Ve.lights,Ve.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};di.physical={uniforms:An([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Zo={r:0,b:0,g:0},Ix=new qt,Dd=new gt;Dd.set(-1,0,0,0,1,0,0,0,1);function Lx(n,e,t,i,a,r){const s=new ht(0);let o=a===!0?0:1,f,c,u=null,h=0,d=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const S=T.backgroundBlurriness>0;C=e.get(C,S)}return C}function m(T){let C=!1;const S=p(T);S===null?_(s,o):S&&S.isColor&&(_(S,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(T,C){const S=p(C);S&&(S.isCubeTexture||S.mapping===ys)?(c===void 0&&(c=new Ht(new Xt(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:_r(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=Rt.getTransfer(S.colorSpace)!==Ft,(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(f===void 0&&(f=new Ht(new Sr(2,2),new ai({name:"BackgroundMaterial",uniforms:_r(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=S,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(S.colorSpace)!==Ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),f.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function _(T,C){T.getRGB(Zo,Cd(n)),t.buffers.color.setClear(Zo.r,Zo.g,Zo.b,C,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,C=1){s.set(T),o=C,_(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,_(s,o)},render:m,addToRenderList:b,dispose:x}}function Dx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(F,V,$,B,Y){let re=!1;const te=h(F,B,$,V);r!==te&&(r=te,c(r.object)),re=p(F,B,$,Y),re&&m(F,B,$,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(re||s)&&(s=!1,S(F,V,$,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function h(F,V,$,B){const Y=B.wireframe===!0;let re=i[V.id];re===void 0&&(re={},i[V.id]=re);const te=F.isInstancedMesh===!0?F.id:0;let ve=re[te];ve===void 0&&(ve={},re[te]=ve);let ae=ve[$.id];ae===void 0&&(ae={},ve[$.id]=ae);let he=ae[Y];return he===void 0&&(he=d(f()),ae[Y]=he),he}function d(F){const V=[],$=[],B=[];for(let Y=0;Y<t;Y++)V[Y]=0,$[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:B,object:F,attributes:{},index:null}}function p(F,V,$,B){const Y=r.attributes,re=V.attributes;let te=0;const ve=$.getAttributes();for(const ae in ve)if(ve[ae].location>=0){const ge=Y[ae];let Je=re[ae];if(Je===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(Je=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(Je=F.instanceColor)),ge===void 0||ge.attribute!==Je||Je&&ge.data!==Je.data)return!0;te++}return r.attributesNum!==te||r.index!==B}function m(F,V,$,B){const Y={},re=V.attributes;let te=0;const ve=$.getAttributes();for(const ae in ve)if(ve[ae].location>=0){let ge=re[ae];ge===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor));const Je={};Je.attribute=ge,ge&&ge.data&&(Je.data=ge.data),Y[ae]=Je,te++}r.attributes=Y,r.attributesNum=te,r.index=B}function b(){const F=r.newAttributes;for(let V=0,$=F.length;V<$;V++)F[V]=0}function _(F){x(F,0)}function x(F,V){const $=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;$[F]=1,B[F]===0&&(n.enableVertexAttribArray(F),B[F]=1),Y[F]!==V&&(n.vertexAttribDivisor(F,V),Y[F]=V)}function T(){const F=r.newAttributes,V=r.enabledAttributes;for(let $=0,B=V.length;$<B;$++)V[$]!==F[$]&&(n.disableVertexAttribArray($),V[$]=0)}function C(F,V,$,B,Y,re,te){te===!0?n.vertexAttribIPointer(F,V,$,Y,re):n.vertexAttribPointer(F,V,$,B,Y,re)}function S(F,V,$,B){b();const Y=B.attributes,re=$.getAttributes(),te=V.defaultAttributeValues;for(const ve in re){const ae=re[ve];if(ae.location>=0){let he=Y[ve];if(he===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const ge=he.normalized,Je=he.itemSize,Ge=e.get(he);if(Ge===void 0)continue;const wt=Ge.buffer,xt=Ge.type,_t=Ge.bytesPerElement,se=xt===n.INT||xt===n.UNSIGNED_INT||he.gpuType===Sc;if(he.isInterleavedBufferAttribute){const q=he.data,_e=q.stride,ke=he.offset;if(q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ae.locationSize;Ee++)x(ae.location+Ee,q.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ee=0;Ee<ae.locationSize;Ee++)_(ae.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let Ee=0;Ee<ae.locationSize;Ee++)C(ae.location+Ee,Je/ae.locationSize,xt,ge,_e*_t,(ke+Je/ae.locationSize*Ee)*_t,se)}else{if(he.isInstancedBufferAttribute){for(let q=0;q<ae.locationSize;q++)x(ae.location+q,he.meshPerAttribute);F.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let q=0;q<ae.locationSize;q++)_(ae.location+q);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let q=0;q<ae.locationSize;q++)C(ae.location+q,Je/ae.locationSize,xt,ge,Je*_t,Je/ae.locationSize*q*_t,se)}}else if(te!==void 0){const ge=te[ve];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(ae.location,ge);break;case 3:n.vertexAttrib3fv(ae.location,ge);break;case 4:n.vertexAttrib4fv(ae.location,ge);break;default:n.vertexAttrib1fv(ae.location,ge)}}}}T()}function E(){P();for(const F in i){const V=i[F];for(const $ in V){const B=V[$];for(const Y in B){const re=B[Y];for(const te in re)u(re[te].object),delete re[te];delete B[Y]}}delete i[F]}}function R(F){if(i[F.id]===void 0)return;const V=i[F.id];for(const $ in V){const B=V[$];for(const Y in B){const re=B[Y];for(const te in re)u(re[te].object),delete re[te];delete B[Y]}}delete i[F.id]}function L(F){for(const V in i){const $=i[V];for(const B in $){const Y=$[B];if(Y[F.id]===void 0)continue;const re=Y[F.id];for(const te in re)u(re[te].object),delete re[te];delete Y[F.id]}}}function M(F){for(const V in i){const $=i[V],B=F.isInstancedMesh===!0?F.id:0,Y=$[B];if(Y!==void 0){for(const re in Y){const te=Y[re];for(const ve in te)u(te[ve].object),delete te[ve];delete Y[re]}delete $[B],Object.keys($).length===0&&delete i[V]}}}function P(){I(),s=!0,r!==a&&(r=a,c(r.object))}function I(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:P,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:b,enableAttribute:_,disableUnusedAttributes:T}}function Nx(n,e,t){let i;function a(f){i=f}function r(f,c){n.drawArrays(i,f,c),t.update(c,i,1)}function s(f,c,u){u!==0&&(n.drawArraysInstanced(i,f,c,u),t.update(c,i,u))}function o(f,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,i,1)}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o}function Ux(n,e,t,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(L){return!(L!==Xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const M=L===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Fn&&L!==gi&&!M&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function f(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=f(c);u!==c&&(dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:f,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:S,maxSamples:E,samples:R}}function Ox(n){const e=this;let t=null,i=0,a=!1,r=!1;const s=new ji,o=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,b=h.clipIntersection,_=h.clipShadows,x=n.get(h);if(!a||m===null||m.length===0||r&&!_)r?u(null):c();else{const T=r?0:i,C=T*4;let S=x.clippingState||null;f.value=S,S=u(m,d,C,p);for(let E=0;E!==C;++E)S[E]=t[E];x.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function c(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,m){const b=h!==null?h.length:0;let _=null;if(b!==0){if(_=f.value,m!==!0||_===null){const x=p+b*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(_===null||_.length<x)&&(_=new Float32Array(x));for(let C=0,S=p;C!==b;++C,S+=4)s.copy(h[C]).applyMatrix4(T,o),s.normal.toArray(_,S),_[S+3]=s.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const dr=4,Fx=6,Bx=20,zx=256,Fr=new As,tu=new ht;let ul=null,dl=0,hl=0,pl=!1;const kx=new k,ga=new k;class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,r={}){const{size:s=256,position:o=kx}=r;ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,dl,hl),this._renderer.xr.enabled=pl,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ra||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Yn,format:Xn,colorSpace:cs,depthBuffer:!1},a=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(r)),this._blurMaterial=Hx(r,e,t),this._ggxMaterial=Gx(r,e,t)}return a}_compileMaterial(e){const t=new Ht(new dn,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,i,a,r){const f=new Hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(tu),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Xt,new Mr({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let x=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,x=!0):(_.color.copy(tu),x=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(f.up.set(0,c[C],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x+u[C],r.y,r.z)):S===1?(f.up.set(0,0,c[C]),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y+u[C],r.z)):(f.up.set(0,c[C],0),f.position.set(r.x,r.y,r.z),f.lookAt(r.x,r.y,r.z+u[C]));const E=this._cubeSize;ar(a,S*E,C>2?E:0,E,E),h.setRenderTarget(a),x&&h.render(b,f),h.render(e,f)}h.toneMapping=p,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ra||e.mapping===gr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const f=this._cubeSize;ar(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(s,Fr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const f=s.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,p=h*d,{_lodMax:m}=this,b=this._sizeLods[i],_=3*b*(i>m-dr?i-m+dr:0),x=4*(this._cubeSize-b);f.envMap.value=e.texture,f.roughness.value=p,f.mipInt.value=m-t,ar(r,_,x,3*b,2*b),a.setRenderTarget(r),a.render(o,Fr),f.envMap.value=r.texture,f.roughness.value=0,f.mipInt.value=m-i,ar(e,_,x,3*b,2*b),a.setRenderTarget(e),a.render(o,Fr)}_blur(e,t,i,a){const r=this._pingPongRenderTarget,s=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,a,r){const s=this._renderer,o=this._blurMaterial,f=this._lodMeshes[a];f.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[a],h=3*u*(a>this._lodMax-dr?a-this._lodMax+dr:0),d=4*(this._cubeSize-u);ar(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(f,Fr)}}function Vx(n){const e=[],t=[];let i=n;const a=n-dr+1+Fx;for(let r=0;r<a;r++){const s=Math.pow(2,i);e.push(s);const o=1/(s-2),f=-o,c=1+o,u=[f,f,c,f,c,c,f,f,c,c,f,c],h=6,d=6,p=3,m=new Float32Array(p*d*h),b=new Float32Array(p*d*h);for(let x=0;x<h;x++){const T=x%3*2/3-1,C=x>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];m.set(S,p*d*x);for(let E=0;E<d;E++){const R=u[E*2]*2-1,L=u[E*2+1]*2-1;x===0?ga.set(1,L,R):x===1?ga.set(-R,1,-L):x===2?ga.set(-R,L,1):x===3?ga.set(-1,L,-R):x===4?ga.set(-R,-1,L):ga.set(R,L,-1),ga.toArray(b,(x*d+E)*p)}}const _=new dn;_.setAttribute("position",new Si(m,p)),_.setAttribute("outputDirection",new Si(b,p)),t.push(new Ht(_,null)),i>dr&&i--}return{lodMeshes:t,sizeLods:e}}function iu(n,e,t){const i=new qn(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Gx(n,e,t){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Hx(n,e,t){return new ai({name:"SphericalGaussianBlur",defines:{SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function au(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ru(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nd extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new _d(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Xt(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Fi});r.uniforms.tEquirect.value=t;const s=new Ht(a,r),o=t.minFilter;return t.minFilter===ba&&(t.minFilter=fn),new Y0(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,a);e.setRenderTarget(r)}}function Wx(n){let e=new WeakMap,t=new WeakMap,i=null;function a(d,p=!1){return d==null?null:p?s(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Us||p===Os)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const b=new Nd(m.height);return b.fromEquirectangularTexture(n,d),e.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Us||p===Os,b=p===Ra||p===gr;if(m||b){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new nu(n)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const T=d.image;return m&&T&&T.height>0||b&&T&&f(T)?(i===null&&(i=new nu(n)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d,p){return p===Us?d.mapping=Ra:p===Os&&(d.mapping=gr),d}function f(d){let p=0;const m=6;for(let b=0;b<m;b++)d[b]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:h}}function Xx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=n.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&hr("WebGLRenderer: "+i+" extension not supported."),a}}}function qx(n,e,t,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function f(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,m=h.attributes.position;let b=0;if(m===void 0)return;if(p!==null){const T=p.array;b=p.version;for(let C=0,S=T.length;C<S;C+=3){const E=T[C+0],R=T[C+1],L=T[C+2];d.push(E,R,R,L,L,E)}}else{const T=m.array;b=m.version;for(let C=0,S=T.length/3-1;C<S;C+=3){const E=C+0,R=C+1,L=C+2;d.push(E,R,R,L,L,E)}}const _=new(m.count>=65535?hd:dd)(d,1);_.version=b;const x=r.get(h);x&&e.remove(x),r.set(h,_)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:f,getWireframeAttribute:u}}function Yx(n,e,t){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function f(h,d){n.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*s,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let b=0;for(let _=0;_<p;_++)b+=d[_];t.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=f,this.renderInstances=c,this.renderMultiDraw=u}function $x(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ct("WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Zx(n,e,t){const i=new WeakMap,a=new Kt;function r(s,o,f){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let I=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var p=I;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),b===!0&&(S=2),_===!0&&(S=3);let E=o.attributes.position.count*S,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const L=new Float32Array(E*R*4*h),M=new ld(L,E,R,h);M.type=gi,M.needsUpdate=!0;const P=S*4;for(let F=0;F<h;F++){const V=x[F],$=T[F],B=C[F],Y=E*R*4*F;for(let re=0;re<V.count;re++){const te=re*P;m===!0&&(a.fromBufferAttribute(V,re),L[Y+te+0]=a.x,L[Y+te+1]=a.y,L[Y+te+2]=a.z,L[Y+te+3]=0),b===!0&&(a.fromBufferAttribute($,re),L[Y+te+4]=a.x,L[Y+te+5]=a.y,L[Y+te+6]=a.z,L[Y+te+7]=0),_===!0&&(a.fromBufferAttribute(B,re),L[Y+te+8]=a.x,L[Y+te+9]=a.y,L[Y+te+10]=a.z,L[Y+te+11]=B.itemSize===4?a.w:1)}}d={count:h,texture:M,size:new Ce(E,R)},i.set(o,d),o.addEventListener("dispose",I)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const b=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",c)}f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Jx(n,e,t,i,a){let r=new WeakMap;function s(c){const u=a.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",f)===!1&&c.addEventListener("dispose",f),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function f(c){const u=c.target;u.removeEventListener("dispose",f),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Kx={[Xu]:"LINEAR_TONE_MAPPING",[qu]:"REINHARD_TONE_MAPPING",[Yu]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function Qx(n,e,t,i,a,r){const s=new qn(e,t,{type:n,depthBuffer:a,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,f=null;const c=new dn;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const u=new O0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ht(c,u),d=new As(-1,1,1,-1,0,1);let p=null,m=null,b=!1,_,x=null,T=[],C=!1;this.setSize=function(S,E){s.setSize(S,E),o!==null&&o.setSize(S,E),f!==null&&f.setSize(S,E);for(let R=0;R<T.length;R++){const L=T[R];L.setSize&&L.setSize(S,E)}},this.setEffects=function(S){T=S,C=T.length>0&&T[0].isRenderPass===!0;const E=s.width,R=s.height;T.length>0&&o===null&&(o=new qn(E,R,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),f=new qn(E,R,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<T.length;L++){const M=T[L];M.setSize&&M.setSize(E,R)}},this.begin=function(S,E){if(b||S.toneMapping===_i&&T.length===0)return!1;if(x=E,E!==null){const R=E.width,L=E.height;(s.width!==R||s.height!==L)&&this.setSize(R,L)}return C===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=_i,!0},this.hasRenderPass=function(){return C},this.end=function(S,E){S.toneMapping=_,b=!0;let R=s,L=o;for(let M=0;M<T.length;M++){const P=T[M];P.enabled!==!1&&(P.render(S,L,R,E),P.needsSwap!==!1&&(R=L,L=L===o?f:o))}if(p!==S.outputColorSpace||m!==S.toneMapping){p=S.outputColorSpace,m=S.toneMapping,u.defines={},Rt.getTransfer(p)===Ft&&(u.defines.SRGB_TRANSFER="");const M=Kx[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,S.setRenderTarget(x),S.render(h,d),x=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),f!==null&&f.dispose(),c.dispose(),u.dispose()}}const Ud=new un,mc=new xr(1,1),Od=new ld,Fd=new Cp,Bd=new _d,ou=[],su=[],lu=new Float32Array(16),cu=new Float32Array(9),fu=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let r=ou[a];if(r===void 0&&(r=new Float32Array(a),ou[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ws(n,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function i1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;fu.set(i),n.uniformMatrix2fv(this.addr,!1,fu),rn(t,i)}}function a1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;cu.set(i),n.uniformMatrix3fv(this.addr,!1,cu),rn(t,i)}}function r1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),rn(t,i)}}function o1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function f1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function p1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let r;this.type===n.SAMPLER_2D_SHADOW?(mc.compareFunction=t.isReversedDepthBuffer()?Rc:wc,r=mc):r=Ud,t.setTexture2D(e||r,a)}function m1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fd,a)}function g1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Bd,a)}function x1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Od,a)}function v1(n){switch(n){case 5126:return jx;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return o1;case 35667:case 35671:return s1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return f1;case 36294:return u1;case 36295:return d1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}function _1(n,e){n.uniform1fv(this.addr,e)}function M1(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function S1(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function y1(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function b1(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function E1(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A1(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T1(n,e){n.uniform1iv(this.addr,e)}function w1(n,e){n.uniform2iv(this.addr,e)}function R1(n,e){n.uniform3iv(this.addr,e)}function C1(n,e){n.uniform4iv(this.addr,e)}function P1(n,e){n.uniform1uiv(this.addr,e)}function I1(n,e){n.uniform2uiv(this.addr,e)}function L1(n,e){n.uniform3uiv(this.addr,e)}function D1(n,e){n.uniform4uiv(this.addr,e)}function N1(n,e,t){const i=this.cache,a=e.length,r=ws(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=mc:s=Ud;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||s,r[o])}function U1(n,e,t){const i=this.cache,a=e.length,r=ws(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Fd,r[s])}function O1(n,e,t){const i=this.cache,a=e.length,r=ws(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Bd,r[s])}function F1(n,e,t){const i=this.cache,a=e.length,r=ws(t,a);an(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Od,r[s])}function B1(n){switch(n){case 5126:return _1;case 35664:return M1;case 35665:return S1;case 35666:return y1;case 35674:return b1;case 35675:return E1;case 35676:return A1;case 5124:case 35670:return T1;case 35667:case 35671:return w1;case 35668:case 35672:return R1;case 35669:case 35673:return C1;case 5125:return P1;case 36294:return I1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return F1}}class z1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class k1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}}class V1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function uu(n,e){n.seq.push(e),n.map[e.id]=e}function G1(n,e,t){const i=n.name,a=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),s=ml.lastIndex;let o=r[1];const f=r[2]==="]",c=r[3];if(f&&(o=o|0),c===void 0||c==="["&&s+2===a){uu(t,c===void 0?new z1(o,n,e):new k1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new V1(o),uu(t,h)),t=h}}}class rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);G1(o,f,this)}const a=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(s):r.push(s);a.length>0&&(this.seq=a.concat(r))}setValue(e,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],f=i[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&i.push(s)}return i}}function du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const H1=37297;let W1=0;function X1(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const hu=new gt;function q1(n){Rt._getMatrix(hu,Rt.workingColorSpace,n);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case fs:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(e),o)}else return r}function Y1(n,e){const t=q1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $1={[Xu]:"Linear",[qu]:"Reinhard",[Yu]:"Cineon",[$u]:"ACESFilmic",[Ju]:"AgX",[Ku]:"Neutral",[Zu]:"Custom"};function Z1(n,e){const t=$1[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new k;function J1(){Rt.getLuminanceCoefficients(Jo);const n=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Q1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function j1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=n.getActiveAttrib(e,a),s=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Wr(n){return n!==""}function mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(ev,nv)}const tv=new Map;function nv(n,e){let t=bt[e];if(t===void 0){const i=tv.get(e);if(i!==void 0)t=bt[i],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gc(t)}const iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(iv,av)}function av(n,e,t,i){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function vu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const rv={[Xr]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function ov(n){return rv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sv={[Ra]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE_UV"};function lv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const cv={[gr]:"ENVMAP_MODE_REFRACTION"};function fv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uv={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[Xh]:"ENVMAP_BLENDING_MIX",[qh]:"ENVMAP_BLENDING_ADD"};function dv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uv[n.combine]||"ENVMAP_BLENDING_NONE"}function hv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pv(n,e,t,i){const a=n.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const f=ov(t),c=lv(t),u=fv(t),h=dv(t),d=hv(t),p=K1(t),m=Q1(r),b=a.createProgram();let _,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wr).join(`
`),x.length>0&&(x+=`
`)):(_=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),x=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?bt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),J1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),s=gc(s),s=mu(s,t),s=gu(s,t),o=gc(o),o=mu(o,t),o=gu(o,t),s=xu(s),o=xu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=T+_+s,S=T+x+o,E=du(a,a.VERTEX_SHADER,C),R=du(a,a.FRAGMENT_SHADER,S);a.attachShader(b,E),a.attachShader(b,R),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function L(F){if(n.debug.checkShaderErrors){const V=a.getProgramInfoLog(b)||"",$=a.getShaderInfoLog(E)||"",B=a.getShaderInfoLog(R)||"",Y=V.trim(),re=$.trim(),te=B.trim();let ve=!0,ae=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ve=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,b,E,R);else{const he=pu(a,E,"vertex"),ge=pu(a,R,"fragment");Ct("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+he+`
`+ge)}else Y!==""?dt("WebGLProgram: Program Info Log:",Y):(re===""||te==="")&&(ae=!1);ae&&(F.diagnostics={runnable:ve,programLog:Y,vertexShader:{log:re,prefix:_},fragmentShader:{log:te,prefix:x}})}a.deleteShader(E),a.deleteShader(R),M=new rs(a,b),P=j1(a,b)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(b,H1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=R,this}let mv=0;class gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xv(e),t.set(e,i)),i}}class xv{constructor(e){this.id=mv++,this.code=e,this.usedTimes=0}}function vv(n){return n===Ca||n===ss||n===ls}function _v(n,e,t,i,a,r){const s=new cd,o=new gv,f=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return f.add(M),M===0?"uv":`uv${M}`}function b(M,P,I,F,V,$){const B=F.fog,Y=V.geometry,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ve=e.get(M.envMap||re,te),ae=ve&&ve.mapping===ys?ve.image.height:null,he=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&dt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Je=ge!==void 0?ge.length:0;let Ge=0;Y.morphAttributes.position!==void 0&&(Ge=1),Y.morphAttributes.normal!==void 0&&(Ge=2),Y.morphAttributes.color!==void 0&&(Ge=3);let wt,xt,_t,se;if(he){const Lt=di[he];wt=Lt.vertexShader,xt=Lt.fragmentShader}else{wt=M.vertexShader,xt=M.fragmentShader;const Lt=o.getVertexShaderStage(M),St=o.getFragmentShaderStage(M);o.update(M,Lt,St),_t=Lt.id,se=St.id}const q=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,Ee=V.isBatchedMesh===!0,je=!!M.map,lt=!!M.matcap,fe=!!ve,xe=!!M.aoMap,Me=!!M.lightMap,ye=!!M.bumpMap&&M.wireframe===!1,be=!!M.normalMap,A=!!M.displacementMap,qe=!!M.emissiveMap,We=!!M.metalnessMap,it=!!M.roughnessMap,z=M.anisotropy>0,ut=M.clearcoat>0,Mt=M.dispersion>0,N=M.retroreflectivity>0,y=M.iridescence>0,Z=M.sheen>0,ee=M.transmission>0,ue=z&&!!M.anisotropyMap,Te=ut&&!!M.clearcoatMap,we=ut&&!!M.clearcoatNormalMap,le=ut&&!!M.clearcoatRoughnessMap,me=y&&!!M.iridescenceMap,Oe=y&&!!M.iridescenceThicknessMap,Ke=Z&&!!M.sheenColorMap,Ie=Z&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,ot=!!M.specularColorMap,at=!!M.specularIntensityMap,Fe=ee&&!!M.transmissionMap,W=ee&&!!M.thicknessMap,Le=!!M.gradientMap,pe=!!M.alphaMap,l=M.alphaTest>0,Pe=!!M.alphaHash,ce=!!M.extensions;let ct=_i;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ct=n.toneMapping);const Xe={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:wt,fragmentShader:xt,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:lt,envMap:fe,envMapMode:fe&&ve.mapping,envMapCubeUVHeight:ae,aoMap:xe,lightMap:Me,bumpMap:ye,normalMap:be,displacementMap:A,emissiveMap:qe,normalMapObjectSpace:be&&M.normalMapType===Zh,normalMapTangentSpace:be&&M.normalMapType===fc,packedNormalMap:be&&M.normalMapType===fc&&vv(M.normalMap.format),metalnessMap:We,roughnessMap:it,anisotropy:z,anisotropyMap:ue,clearcoat:ut,clearcoatMap:Te,clearcoatNormalMap:we,clearcoatRoughnessMap:le,dispersion:Mt,retroreflection:N,iridescence:y,iridescenceMap:me,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:Ke,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:ot,specularIntensityMap:at,transmission:ee,transmissionMap:Fe,thicknessMap:W,gradientMap:Le,opaque:M.transparent===!1&&M.blending===qr&&M.alphaToCoverage===!1,alphaMap:pe,alphaTest:l,alphaHash:Pe,combine:M.combine,mapUv:je&&m(M.map.channel),aoMapUv:xe&&m(M.aoMap.channel),lightMapUv:Me&&m(M.lightMap.channel),bumpMapUv:ye&&m(M.bumpMap.channel),normalMapUv:be&&m(M.normalMap.channel),displacementMapUv:A&&m(M.displacementMap.channel),emissiveMapUv:qe&&m(M.emissiveMap.channel),metalnessMapUv:We&&m(M.metalnessMap.channel),roughnessMapUv:it&&m(M.roughnessMap.channel),anisotropyMapUv:ue&&m(M.anisotropyMap.channel),clearcoatMapUv:Te&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(M.sheenRoughnessMap.channel),specularMapUv:Ne&&m(M.specularMap.channel),specularColorMapUv:ot&&m(M.specularColorMap.channel),specularIntensityMapUv:at&&m(M.specularIntensityMap.channel),transmissionMapUv:Fe&&m(M.transmissionMap.channel),thicknessMapUv:W&&m(M.thicknessMap.channel),alphaMapUv:pe&&m(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(be||z),vertexNormals:!!Y.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(je||pe),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Y.attributes.normal===void 0&&be===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Je,morphTextureStride:Ge,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Rt.getTransfer(M.map.colorSpace)===Ft,decodeVideoTextureEmissive:qe&&M.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(M.emissiveMap.colorSpace)===Ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Li,flipSided:M.side===Tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=f.has(1),Xe.vertexUv2s=f.has(2),Xe.vertexUv3s=f.has(3),f.clear(),Xe}function _(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)P.push(I),P.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(P,M),T(P,M),P.push(n.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function x(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function T(M,P){s.disableAll(),P.instancing&&s.enable(0),P.instancingColor&&s.enable(1),P.instancingMorph&&s.enable(2),P.matcap&&s.enable(3),P.envMap&&s.enable(4),P.normalMapObjectSpace&&s.enable(5),P.normalMapTangentSpace&&s.enable(6),P.clearcoat&&s.enable(7),P.iridescence&&s.enable(8),P.alphaTest&&s.enable(9),P.vertexColors&&s.enable(10),P.vertexAlphas&&s.enable(11),P.vertexUv1s&&s.enable(12),P.vertexUv2s&&s.enable(13),P.vertexUv3s&&s.enable(14),P.vertexTangents&&s.enable(15),P.anisotropy&&s.enable(16),P.alphaHash&&s.enable(17),P.batching&&s.enable(18),P.dispersion&&s.enable(19),P.retroreflection&&s.enable(24),P.batchingColor&&s.enable(20),P.gradientMap&&s.enable(21),P.packedNormalMap&&s.enable(22),P.vertexNormals&&s.enable(23),M.push(s.mask),s.disableAll(),P.fog&&s.enable(0),P.useFog&&s.enable(1),P.flatShading&&s.enable(2),P.logarithmicDepthBuffer&&s.enable(3),P.reversedDepthBuffer&&s.enable(4),P.skinning&&s.enable(5),P.morphTargets&&s.enable(6),P.morphNormals&&s.enable(7),P.morphColors&&s.enable(8),P.premultipliedAlpha&&s.enable(9),P.shadowMapEnabled&&s.enable(10),P.doubleSided&&s.enable(11),P.flipSided&&s.enable(12),P.useDepthPacking&&s.enable(13),P.dithering&&s.enable(14),P.transmission&&s.enable(15),P.sheen&&s.enable(16),P.opaque&&s.enable(17),P.pointsUvs&&s.enable(18),P.decodeVideoTexture&&s.enable(19),P.decodeVideoTextureEmissive&&s.enable(20),P.alphaToCoverage&&s.enable(21),P.numLightProbeGrids>0&&s.enable(22),P.hasPositionAttribute&&s.enable(23),M.push(s.mask)}function C(M){const P=p[M.type];let I;if(P){const F=di[P];I=D0.clone(F.uniforms)}else I=M.uniforms;return I}function S(M,P){let I=u.get(P);return I!==void 0?++I.usedTimes:(I=new pv(n,P,M,a),c.push(I),u.set(P,I)),I}function E(M){if(--M.usedTimes===0){const P=c.indexOf(M);c[P]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){o.remove(M)}function L(){o.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:C,acquireProgram:S,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:L}}function Mv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function a(s,o,f){n.get(s)[o]=f}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:r}}function Sv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],a=[];function r(){e=0,t.length=0,i.length=0,a.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,m,b,_,x){let T=n[e];return T===void 0?(T={id:d.id,object:d,geometry:p,material:m,materialVariant:s(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:x},n[e]=T):(T.id=d.id,T.object=d,T.geometry=p,T.material=m,T.materialVariant=s(d),T.groupOrder=b,T.renderOrder=d.renderOrder,T.z=_,T.group=x),e++,T}function f(d,p,m,b,_,x,T){T.reversedDepth===!0&&(_=-_);const C=o(d,p,m,b,_,x);m.transmission>0?i.push(C):m.transparent===!0?a.push(C):t.push(C)}function c(d,p,m,b,_,x){const T=o(d,p,m,b,_,x);m.transmission>0?i.unshift(T):m.transparent===!0?a.unshift(T):t.unshift(T)}function u(d,p){t.length>1&&t.sort(d||Sv),i.length>1&&i.sort(p||_u),a.length>1&&a.sort(p||_u)}function h(){for(let d=e,p=n.length;d<p;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:c,finish:h,sort:u}}function yv(){let n=new WeakMap;function e(i,a){const r=n.get(i);let s;return r===void 0?(s=new Mu,n.set(i,[s])):a>=r.length?(s=new Mu,r.push(s)):s=r[a],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new ht};break;case"SpotLight":t={position:new k,direction:new k,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Ev(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Av=0;function Tv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wv(n){const e=new bv,t=Ev(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const a=new k,r=new qt,s=new qt;function o(c){let u=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,m=0,b=0,_=0,x=0,T=0,C=0,S=0,E=0,R=0,L=0,M=0,P=0,I=0;c.sort(Tv);for(let V=0,$=c.length;V<$;V++){const B=c[V],Y=B.color,re=B.intensity,te=B.distance;let ve=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ca?ve=B.shadow.map.texture:ve=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=Y.r*re,h+=Y.g*re,d+=Y.b*re;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(B.sh.coefficients[ae],re);I++}else if(B.isSunLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const he=B.shadow,ge=t.get(B);ge.shadowIntensity=he.intensity,ge.shadowBias=he.bias,ge.shadowNormalBias=he.normalBias,ge.shadowRadius=he.radius,ge.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),i.sunShadow[m]=ge,i.sunShadowMap[m]=ve;const Je=he.getViewportCount();for(let Ge=0;Ge<Je;Ge++)i.sunShadowMatrix[b+Ge]=he.getMatrix(Ge),i.sunShadowCascade[b+Ge]=he._cascadeData[Ge];b+=Je,m++}i.sun[p]=ae,p++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const he=B.shadow,ge=t.get(B);ge.shadowIntensity=he.intensity,ge.shadowBias=he.bias,ge.shadowNormalBias=he.normalBias,ge.shadowRadius=he.radius,ge.shadowMapSize=he.mapSize,i.directionalShadow[_]=ge,i.directionalShadowMap[_]=ve,i.directionalShadowMatrix[_]=B.shadow.matrix,E++}i.directional[_]=ae,_++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(Y).multiplyScalar(re),ae.distance=te,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,i.spot[T]=ae;const he=B.shadow;if(B.map&&(i.spotLightMap[M]=B.map,M++,he.updateMatrices(B),B.castShadow&&P++),i.spotLightMatrix[T]=he.matrix,B.castShadow){const ge=t.get(B);ge.shadowIntensity=he.intensity,ge.shadowBias=he.bias,ge.shadowNormalBias=he.normalBias,ge.shadowRadius=he.radius,ge.shadowMapSize=he.mapSize,i.spotShadow[T]=ge,i.spotShadowMap[T]=ve,L++}T++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(Y).multiplyScalar(re),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),i.rectArea[C]=ae,C++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const he=B.shadow,ge=t.get(B);ge.shadowIntensity=he.intensity,ge.shadowBias=he.bias,ge.shadowNormalBias=he.normalBias,ge.shadowRadius=he.radius,ge.shadowMapSize=he.mapSize,ge.shadowCameraNear=he.camera.near,ge.shadowCameraFar=he.camera.far,i.pointShadow[x]=ge,i.pointShadowMap[x]=ve,i.pointShadowMatrix[x]=B.shadow.matrix,R++}i.point[x]=ae,x++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(re),ae.groundColor.copy(B.groundColor).multiplyScalar(re),i.hemi[S]=ae,S++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.sunLength!==p||F.directionalLength!==_||F.pointLength!==x||F.spotLength!==T||F.rectAreaLength!==C||F.hemiLength!==S||F.numSunShadows!==m||F.numDirectionalShadows!==E||F.numPointShadows!==R||F.numSpotShadows!==L||F.numSpotMaps!==M||F.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=_,i.spot.length=T,i.rectArea.length=C,i.point.length=x,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=L,i.spotShadowMap.length=L,i.spotLightMatrix.length=L+M-P,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,F.sunLength=p,F.directionalLength=_,F.pointLength=x,F.spotLength=T,F.rectAreaLength=C,F.hemiLength=S,F.numSunShadows=m,F.numDirectionalShadows=E,F.numPointShadows=R,F.numSpotShadows=L,F.numSpotMaps=M,F.numLightProbes=I,i.version=Av++)}function f(c,u){let h=0,d=0,p=0,m=0,b=0,_=0;const x=u.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){const S=c[T];if(S.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(x),h++}else if(S.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(x),d++}else if(S.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(x),m++}else if(S.isRectAreaLight){const E=i.rectArea[b];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),s.identity(),r.copy(S.matrixWorld),r.premultiply(x),s.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),b++}else if(S.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),p++}else if(S.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(x),_++}}}return{setup:o,setupView:f,state:i}}function Su(n){const e=new wv(n),t=[],i=[],a=[];function r(d){h.camera=d,t.length=0,i.length=0,a.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function f(d){a.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:f}}function Rv(n){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Su(n),e.set(a,[o])):r>=s.length?(o=new Su(n),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
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
}`,Iv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Lv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],yu=new qt,Br=new k,gl=new k;function Dv(n,e,t){let i=new Ic;const a=new Ce,r=new Ce,s=new Kt,o=new F0,f=new B0,c={},u=t.maxTextureSize,h={[wa]:Tn,[Tn]:wa,[Li]:Li},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Cv,fragmentShader:Pv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new dn;m.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ht(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let x=this.type;this.render=function(R,L,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===Th&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);const P=n.getRenderTarget(),I=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Fi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=x!==this.type;$&&L.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(Y=>Y.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,Y=R.length;B<Y;B++){const re=R[B],te=re.shadow;if(te===void 0){dt("WebGLShadowMap:",re,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;a.copy(te.mapSize);const ve=te.getFrameExtents();a.multiply(ve),r.copy(te.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ve.x),a.x=r.x*ve.x,te.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ve.y),a.y=r.y*ve.y,te.mapSize.y=r.y));const ae=n.state.buffers.depth.getReversed();if(te.camera._reversedDepth=ae,te.map===null||$===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Gr){if(re.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new qn(a.x,a.y,{format:Ca,type:Yn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),te.map.texture.name=re.name+".shadowMap",te.map.depthTexture=new xr(a.x,a.y,gi),te.map.depthTexture.name=re.name+".shadowMapDepth",te.map.depthTexture.format=zi,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=tn,te.map.depthTexture.magFilter=tn}else re.isPointLight?(te.map=new Nd(a.x),te.map.depthTexture=new Qp(a.x,yi)):(te.map=new qn(a.x,a.y),te.map.depthTexture=new xr(a.x,a.y,yi)),te.map.depthTexture.name=re.name+".shadowMap",te.map.depthTexture.format=zi,this.type===Xr?(te.map.depthTexture.compareFunction=ae?Rc:wc,te.map.depthTexture.minFilter=fn,te.map.depthTexture.magFilter=fn):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=tn,te.map.depthTexture.magFilter=tn);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==a.x||te.map.height!==a.y)&&te.map.setSize(a.x,a.y);const he=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();re.isPointLight!==!0&&te.updateMatrices(re,M);for(let ge=0;ge<he;ge++){const Je=te.getCamera(ge);if(re.isPointLight){const Ge=te.camera,wt=te.matrix,xt=re.distance||Ge.far;xt!==Ge.far&&(Ge.far=xt,Ge.updateProjectionMatrix()),Br.setFromMatrixPosition(re.matrixWorld),Ge.position.copy(Br),gl.copy(Ge.position),gl.add(Iv[ge]),Ge.up.copy(Lv[ge]),Ge.lookAt(gl),Ge.updateMatrixWorld(),wt.makeTranslation(-Br.x,-Br.y,-Br.z),yu.multiplyMatrices(Ge.projectionMatrix,Ge.matrixWorldInverse),te._frustum.setFromProjectionMatrix(yu,Ge.coordinateSystem,Ge.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)n.setRenderTarget(te.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(te.map),n.clear());const Ge=te.getViewport(ge);s.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),V.viewport(s)}i=te.getFrustum(ge),S(L,M,Je,re,this.type)}te.isPointLightShadow!==!0&&this.type===Gr&&T(te,M),te.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(P,I,F)};function T(R,L){const M=e.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new qn(a.x,a.y,{format:Ca,type:Yn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,M,d,b,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,M,p,b,null)}function C(R,L,M,P){let I=null;const F=M.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)I=F;else if(I=M.isPointLight===!0?f:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=I.uuid,$=L.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let Y=B[$];Y===void 0&&(Y=I.clone(),B[$]=Y,L.addEventListener("dispose",E)),I=Y}if(I.visible=L.visible,I.wireframe=L.wireframe,P===Gr?I.side=L.shadowSide!==null?L.shadowSide:L.side:I.side=L.shadowSide!==null?L.shadowSide:h[L.side],I.alphaMap=L.alphaMap,I.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,I.map=L.map,I.clipShadows=L.clipShadows,I.clippingPlanes=L.clippingPlanes,I.clipIntersection=L.clipIntersection,I.displacementMap=L.displacementMap,I.displacementScale=L.displacementScale,I.displacementBias=L.displacementBias,I.wireframeLinewidth=L.wireframeLinewidth,I.linewidth=L.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const V=n.properties.get(I);V.light=M}return I}function S(R,L,M,P,I){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===Gr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);const $=e.update(R),B=R.material;if(Array.isArray(B)){const Y=$.groups;for(let re=0,te=Y.length;re<te;re++){const ve=Y[re],ae=B[ve.materialIndex];if(ae&&ae.visible){const he=C(R,ae,P,I);R.onBeforeShadow(n,R,L,M,$,he,ve),n.renderBufferDirect(M,null,$,he,R,ve),R.onAfterShadow(n,R,L,M,$,he,ve)}}}else if(B.visible){const Y=C(R,B,P,I);R.onBeforeShadow(n,R,L,M,$,Y,null),n.renderBufferDirect(M,null,$,Y,R,null),R.onAfterShadow(n,R,L,M,$,Y,null)}}const V=R.children;for(let $=0,B=V.length;$<B;$++)S(V[$],L,M,P,I)}function E(R){R.target.removeEventListener("dispose",E);for(const M in c){const P=c[M],I=R.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}function Nv(n,e){function t(){let W=!1;const Le=new Kt;let pe=null;const l=new Kt(0,0,0,0);return{setMask:function(Pe){pe!==Pe&&!W&&(n.colorMask(Pe,Pe,Pe,Pe),pe=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,ce,ct,Xe,Lt){Lt===!0&&(Pe*=Xe,ce*=Xe,ct*=Xe),Le.set(Pe,ce,ct,Xe),l.equals(Le)===!1&&(n.clearColor(Pe,ce,ct,Xe),l.copy(Le))},reset:function(){W=!1,pe=null,l.set(-1,0,0,0)}}}function i(){let W=!1,Le=!1,pe=null,l=null,Pe=null;return{setReversed:function(ce){if(Le!==ce){const ct=e.get("EXT_clip_control");ce?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Le=ce;const Xe=Pe;Pe=null,this.setClear(Xe)}},getReversed:function(){return Le},setTest:function(ce){ce?q(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!W&&(n.depthMask(ce),pe=ce)},setFunc:function(ce){if(Le&&(ce=op[ce]),l!==ce){switch(ce){case Al:n.depthFunc(n.NEVER);break;case Tl:n.depthFunc(n.ALWAYS);break;case wl:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case Rl:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}l=ce}},setLocked:function(ce){W=ce},setClear:function(ce){Pe!==ce&&(Pe=ce,Le&&(ce=1-ce),n.clearDepth(ce))},reset:function(){W=!1,pe=null,l=null,Pe=null,Le=!1}}}function a(){let W=!1,Le=null,pe=null,l=null,Pe=null,ce=null,ct=null,Xe=null,Lt=null;return{setTest:function(St){W||(St?q(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(St){Le!==St&&!W&&(n.stencilMask(St),Le=St)},setFunc:function(St,Pn,wn){(pe!==St||l!==Pn||Pe!==wn)&&(n.stencilFunc(St,Pn,wn),pe=St,l=Pn,Pe=wn)},setOp:function(St,Pn,wn){(ce!==St||ct!==Pn||Xe!==wn)&&(n.stencilOp(St,Pn,wn),ce=St,ct=Pn,Xe=wn)},setLocked:function(St){W=St},setClear:function(St){Lt!==St&&(n.clearStencil(St),Lt=St)},reset:function(){W=!1,Le=null,pe=null,l=null,Pe=null,ce=null,ct=null,Xe=null,Lt=null}}}const r=new t,s=new i,o=new a,f=new WeakMap,c=new WeakMap;let u={},h={},d={},p=new WeakMap,m=[],b=null,_=!1,x=null,T=null,C=null,S=null,E=null,R=null,L=null,M=new ht(0,0,0),P=0,I=!1,F=null,V=null,$=null,B=null,Y=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ve=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(ae)[1]),te=ve>=1):ae.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),te=ve>=2);let he=null,ge={};const Je=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),wt=new Kt().fromArray(Je),xt=new Kt().fromArray(Ge);function _t(W,Le,pe,l){const Pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(W,ce),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<pe;ct++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,l,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Le+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return ce}const se={};se[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),q(n.DEPTH_TEST),s.setFunc(Qr),ye(!1),be(pf),q(n.CULL_FACE),xe(Fi);function q(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function _e(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function ke(W,Le){return d[W]!==Le?(n.bindFramebuffer(W,Le),d[W]=Le,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Le),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ee(W,Le){let pe=m,l=!1;if(W){pe=p.get(Le),pe===void 0&&(pe=[],p.set(Le,pe));const Pe=W.textures;if(pe.length!==Pe.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ct=Pe.length;ce<ct;ce++)pe[ce]=n.COLOR_ATTACHMENT0+ce;pe.length=Pe.length,l=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,l=!0);l&&n.drawBuffers(pe)}function je(W){return b!==W?(n.useProgram(W),b=W,!0):!1}const lt={[fr]:n.FUNC_ADD,[Rh]:n.FUNC_SUBTRACT,[Ch]:n.FUNC_REVERSE_SUBTRACT};lt[Ph]=n.MIN,lt[Ih]=n.MAX;const fe={[Lh]:n.ZERO,[Dh]:n.ONE,[Nh]:n.SRC_COLOR,[Gu]:n.SRC_ALPHA,[kh]:n.SRC_ALPHA_SATURATE,[Bh]:n.DST_COLOR,[Oh]:n.DST_ALPHA,[Uh]:n.ONE_MINUS_SRC_COLOR,[Hu]:n.ONE_MINUS_SRC_ALPHA,[zh]:n.ONE_MINUS_DST_COLOR,[Fh]:n.ONE_MINUS_DST_ALPHA,[Vh]:n.CONSTANT_COLOR,[Gh]:n.ONE_MINUS_CONSTANT_COLOR,[Hh]:n.CONSTANT_ALPHA,[Wh]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(W,Le,pe,l,Pe,ce,ct,Xe,Lt,St){if(W===Fi){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(q(n.BLEND),_=!0),W!==wh){if(W!==x||St!==I){if((T!==fr||E!==fr)&&(n.blendEquation(n.FUNC_ADD),T=fr,E=fr),St)switch(W){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.ONE,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",W);break}else switch(W){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gf:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xf:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",W);break}C=null,S=null,R=null,L=null,M.set(0,0,0),P=0,x=W,I=St}return}Pe=Pe||Le,ce=ce||pe,ct=ct||l,(Le!==T||Pe!==E)&&(n.blendEquationSeparate(lt[Le],lt[Pe]),T=Le,E=Pe),(pe!==C||l!==S||ce!==R||ct!==L)&&(n.blendFuncSeparate(fe[pe],fe[l],fe[ce],fe[ct]),C=pe,S=l,R=ce,L=ct),(Xe.equals(M)===!1||Lt!==P)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Lt),M.copy(Xe),P=Lt),x=W,I=!1}function Me(W,Le){W.side===Li?_e(n.CULL_FACE):q(n.CULL_FACE);let pe=W.side===Tn;Le&&(pe=!pe),ye(pe),W.blending===qr&&W.transparent===!1?xe(Fi):xe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const l=W.stencilWrite;o.setTest(l),l&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(W){F!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),F=W)}function be(W){W!==Eh?(q(n.CULL_FACE),W!==V&&(W===pf?n.cullFace(n.BACK):W===Ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),V=W}function A(W){W!==$&&(te&&n.lineWidth(W),$=W)}function qe(W,Le,pe){W?(q(n.POLYGON_OFFSET_FILL),(B!==Le||Y!==pe)&&(B=Le,Y=pe,s.getReversed()&&(Le=-Le),n.polygonOffset(Le,pe))):_e(n.POLYGON_OFFSET_FILL)}function We(W){W?q(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function it(W){W===void 0&&(W=n.TEXTURE0+re-1),he!==W&&(n.activeTexture(W),he=W)}function z(W,Le,pe){pe===void 0&&(he===null?pe=n.TEXTURE0+re-1:pe=he);let l=ge[pe];l===void 0&&(l={type:void 0,texture:void 0},ge[pe]=l),(l.type!==W||l.texture!==Le)&&(he!==pe&&(n.activeTexture(pe),he=pe),n.bindTexture(W,Le||se[W]),l.type=W,l.texture=Le)}function ut(){const W=ge[he];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Mt(){try{n.compressedTexImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function y(){try{n.texSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Z(){try{n.texSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Te(){try{n.texStorage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function we(){try{n.texStorage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function le(){try{n.texImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function me(){try{n.texImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Oe(W){return h[W]!==void 0?h[W]:n.getParameter(W)}function Ke(W,Le){h[W]!==Le&&(n.pixelStorei(W,Le),h[W]=Le)}function Ie(W){wt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),wt.copy(W))}function Ne(W){xt.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),xt.copy(W))}function ot(W,Le){let pe=c.get(Le);pe===void 0&&(pe=new WeakMap,c.set(Le,pe));let l=pe.get(W);l===void 0&&(l=n.getUniformBlockIndex(Le,W.name),pe.set(W,l))}function at(W,Le){const l=c.get(Le).get(W);f.get(Le)!==l&&(n.uniformBlockBinding(Le,l,W.__bindingPointIndex),f.set(Le,l))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},he=null,ge={},d={},p=new WeakMap,m=[],b=null,_=!1,x=null,T=null,C=null,S=null,E=null,R=null,L=null,M=new ht(0,0,0),P=0,I=!1,F=null,V=null,$=null,B=null,Y=null,wt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:q,disable:_e,bindFramebuffer:ke,drawBuffers:Ee,useProgram:je,setBlending:xe,setMaterial:Me,setFlipSided:ye,setCullFace:be,setLineWidth:A,setPolygonOffset:qe,setScissorTest:We,activeTexture:it,bindTexture:z,unbindTexture:ut,compressedTexImage2D:Mt,compressedTexImage3D:N,texImage2D:le,texImage3D:me,pixelStorei:Ke,getParameter:Oe,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:Te,texStorage3D:we,texSubImage2D:y,texSubImage3D:Z,compressedTexSubImage2D:ee,compressedTexSubImage3D:ue,scissor:Ie,viewport:Ne,reset:Fe}}function Uv(n,e,t,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,y){return m?new OffscreenCanvas(N,y):no("canvas")}function _(N,y,Z){let ee=1;const ue=Mt(N);if((ue.width>Z||ue.height>Z)&&(ee=Z/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Te=Math.floor(ee*ue.width),we=Math.floor(ee*ue.height);d===void 0&&(d=b(Te,we));const le=y?b(Te,we):d;return le.width=Te,le.height=we,le.getContext("2d").drawImage(N,0,0,Te,we),dt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Te+"x"+we+")."),le}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function x(N){return N.generateMipmaps}function T(N){n.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(N,y,Z,ee,ue,Te=!1){if(N!==null){if(n[N]!==void 0)return n[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let we;ee&&(we=e.get("EXT_texture_norm16"),we||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=y;if(y===n.RED&&(Z===n.FLOAT&&(le=n.R32F),Z===n.HALF_FLOAT&&(le=n.R16F),Z===n.UNSIGNED_BYTE&&(le=n.R8),Z===n.UNSIGNED_SHORT&&we&&(le=we.R16_EXT),Z===n.SHORT&&we&&(le=we.R16_SNORM_EXT)),y===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.R8UI),Z===n.UNSIGNED_SHORT&&(le=n.R16UI),Z===n.UNSIGNED_INT&&(le=n.R32UI),Z===n.BYTE&&(le=n.R8I),Z===n.SHORT&&(le=n.R16I),Z===n.INT&&(le=n.R32I)),y===n.RG&&(Z===n.FLOAT&&(le=n.RG32F),Z===n.HALF_FLOAT&&(le=n.RG16F),Z===n.UNSIGNED_BYTE&&(le=n.RG8),Z===n.UNSIGNED_SHORT&&we&&(le=we.RG16_EXT),Z===n.SHORT&&we&&(le=we.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RG8UI),Z===n.UNSIGNED_SHORT&&(le=n.RG16UI),Z===n.UNSIGNED_INT&&(le=n.RG32UI),Z===n.BYTE&&(le=n.RG8I),Z===n.SHORT&&(le=n.RG16I),Z===n.INT&&(le=n.RG32I)),y===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(le=n.RGB16UI),Z===n.UNSIGNED_INT&&(le=n.RGB32UI),Z===n.BYTE&&(le=n.RGB8I),Z===n.SHORT&&(le=n.RGB16I),Z===n.INT&&(le=n.RGB32I)),y===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(le=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(le=n.RGBA16UI),Z===n.UNSIGNED_INT&&(le=n.RGBA32UI),Z===n.BYTE&&(le=n.RGBA8I),Z===n.SHORT&&(le=n.RGBA16I),Z===n.INT&&(le=n.RGBA32I)),y===n.RGB&&(Z===n.UNSIGNED_SHORT&&we&&(le=we.RGB16_EXT),Z===n.SHORT&&we&&(le=we.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(le=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(le=n.R11F_G11F_B10F)),y===n.RGBA){const me=Te?fs:Rt.getTransfer(ue);Z===n.FLOAT&&(le=n.RGBA32F),Z===n.HALF_FLOAT&&(le=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(le=me===Ft?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&we&&(le=we.RGBA16_EXT),Z===n.SHORT&&we&&(le=we.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function E(N,y){let Z;return N?y===null||y===yi||y===eo?Z=n.DEPTH24_STENCIL8:y===gi?Z=n.DEPTH32F_STENCIL8:y===jr&&(Z=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yi||y===eo?Z=n.DEPTH_COMPONENT24:y===gi?Z=n.DEPTH_COMPONENT32F:y===jr&&(Z=n.DEPTH_COMPONENT16),Z}function R(N,y){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==tn&&N.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function L(N){const y=N.target;y.removeEventListener("dispose",L),P(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function M(N){const y=N.target;y.removeEventListener("dispose",M),F(y)}function P(N){const y=i.get(N);if(y.__webglInit===void 0)return;const Z=N.source,ee=p.get(Z);if(ee){const ue=ee[y.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&I(N),Object.keys(ee).length===0&&p.delete(Z)}i.remove(N)}function I(N){const y=i.get(N);n.deleteTexture(y.__webglTexture);const Z=N.source,ee=p.get(Z);delete ee[y.__cacheKey],s.memory.textures--}function F(N){const y=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let ue=0;ue<y.__webglFramebuffer[ee].length;ue++)n.deleteFramebuffer(y.__webglFramebuffer[ee][ue]);else n.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[ee]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=N.textures;for(let ee=0,ue=Z.length;ee<ue;ee++){const Te=i.get(Z[ee]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),s.memory.textures--),i.remove(Z[ee])}i.remove(N)}let V=0;function $(){V=0}function B(){return V}function Y(N){V=N}function re(){const N=V;return N>=a.maxTextures&&dt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+a.maxTextures),V+=1,N}function te(N){const y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function ve(N,y){const Z=i.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const ee=N.image;if(ee===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Z,N,y);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+y)}function ae(N,y){const Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){_e(Z,N,y);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+y)}function he(N,y){const Z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){_e(Z,N,y);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+y)}function ge(N,y){const Z=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){ke(Z,N,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+y)}const Je={[Ll]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},Ge={[tn]:n.NEAREST,[Yh]:n.NEAREST_MIPMAP_NEAREST,[yo]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Fs]:n.LINEAR_MIPMAP_NEAREST,[ba]:n.LINEAR_MIPMAP_LINEAR},wt={[Kh]:n.NEVER,[np]:n.ALWAYS,[Qh]:n.LESS,[wc]:n.LEQUAL,[jh]:n.EQUAL,[Rc]:n.GEQUAL,[ep]:n.GREATER,[tp]:n.NOTEQUAL};function xt(N,y){if(y.type===gi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===Fs||y.magFilter===yo||y.magFilter===ba||y.minFilter===fn||y.minFilter===Fs||y.minFilter===yo||y.minFilter===ba)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Je[y.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Je[y.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Je[y.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ge[y.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ge[y.minFilter]),y.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==yo&&y.minFilter!==ba||y.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _t(N,y){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",L));const ee=y.source;let ue=p.get(ee);ue===void 0&&(ue={},p.set(ee,ue));const Te=te(y);if(Te!==N.__cacheKey){ue[Te]===void 0&&(ue[Te]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),ue[Te].usedTimes++;const we=ue[N.__cacheKey];we!==void 0&&(ue[N.__cacheKey].usedTimes--,we.usedTimes===0&&I(y)),N.__cacheKey=Te,N.__webglTexture=ue[Te].texture}return Z}function se(N,y,Z){return Math.floor(Math.floor(N/Z)/y)}function q(N,y,Z,ee){const Te=N.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,Z,ee,y.data);else{Te.sort((Ke,Ie)=>Ke.start-Ie.start);let we=0;for(let Ke=1;Ke<Te.length;Ke++){const Ie=Te[we],Ne=Te[Ke],ot=Ie.start+Ie.count,at=se(Ne.start,y.width,4),Fe=se(Ie.start,y.width,4);Ne.start<=ot+1&&at===Fe&&se(Ne.start+Ne.count-1,y.width,4)===at?Ie.count=Math.max(Ie.count,Ne.start+Ne.count-Ie.start):(++we,Te[we]=Ne)}Te.length=we+1;const le=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ke=0,Ie=Te.length;Ke<Ie;Ke++){const Ne=Te[Ke],ot=Math.floor(Ne.start/4),at=Math.ceil(Ne.count/4),Fe=ot%y.width,W=Math.floor(ot/y.width),Le=at,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,Fe,W,Le,pe,Z,ee,y.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,le),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function _e(N,y,Z){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);const ue=_t(N,y),Te=y.source;t.bindTexture(ee,N.__webglTexture,n.TEXTURE0+Z);const we=i.get(Te);if(Te.version!==we.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const pe=Rt.getPrimaries(Rt.workingColorSpace),l=y.colorSpace===ta?null:Rt.getPrimaries(y.colorSpace),Pe=y.colorSpace===ta||pe===l?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let me=_(y.image,!1,a.maxTextureSize);me=ut(y,me);const Oe=r.convert(y.format,y.colorSpace),Ke=r.convert(y.type);let Ie=S(y.internalFormat,Oe,Ke,y.normalized,y.colorSpace,y.isVideoTexture);xt(ee,y);let Ne;const ot=y.mipmaps,at=y.isVideoTexture!==!0,Fe=we.__version===void 0||ue===!0,W=Te.dataReady,Le=R(y,me);if(y.isDepthTexture)Ie=E(y.format===Ea,y.type),Fe&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Oe,Ke,null));else if(y.isDataTexture)if(ot.length>0){at&&Fe&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,ot[0].width,ot[0].height);for(let pe=0,l=ot.length;pe<l;pe++)Ne=ot[pe],at?W&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Ke,Ne.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,Ne.width,Ne.height,0,Oe,Ke,Ne.data);y.generateMipmaps=!1}else at?(Fe&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,me.width,me.height),W&&q(y,me,Oe,Ke)):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Oe,Ke,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){at&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ie,ot[0].width,ot[0].height,me.depth);for(let pe=0,l=ot.length;pe<l;pe++)if(Ne=ot[pe],y.format!==Xn)if(Oe!==null)if(at){if(W)if(y.layerUpdates.size>0){const Pe=eu(Ne.width,Ne.height,y.format,y.type);for(const ce of y.layerUpdates){const ct=Ne.data.subarray(ce*Pe/Ne.data.BYTES_PER_ELEMENT,(ce+1)*Pe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,ce,Ne.width,Ne.height,1,Oe,ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,me.depth,Oe,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,me.depth,Oe,Ke,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,Ne.width,Ne.height,me.depth,0,Oe,Ke,Ne.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{at&&Fe&&t.texStorage2D(n.TEXTURE_2D,Le,Ie,ot[0].width,ot[0].height);for(let pe=0,l=ot.length;pe<l;pe++)Ne=ot[pe],y.format!==Xn?Oe!==null?at?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ie,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?W&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Ke,Ne.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,Ne.width,Ne.height,0,Oe,Ke,Ne.data)}else if(y.isDataArrayTexture)if(at){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ie,me.width,me.height,me.depth),W)if(y.layerUpdates.size>0){const pe=eu(me.width,me.height,y.format,y.type);for(const l of y.layerUpdates){const Pe=me.data.subarray(l*pe/me.data.BYTES_PER_ELEMENT,(l+1)*pe/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,l,me.width,me.height,1,Oe,Ke,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Oe,Ke,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Oe,Ke,me.data);else if(y.isData3DTexture)at?(Fe&&t.texStorage3D(n.TEXTURE_3D,Le,Ie,me.width,me.height,me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Oe,Ke,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Oe,Ke,me.data);else if(y.isFramebufferTexture){if(Fe)if(at)t.texStorage2D(n.TEXTURE_2D,Le,Ie,me.width,me.height);else{let pe=me.width,l=me.height;for(let Pe=0;Pe<Le;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ie,pe,l,0,Oe,Ke,null),pe>>=1,l>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),me.parentNode!==pe){pe.appendChild(me),h.add(y),pe.onpaint=l=>{const Pe=l.changedElements;for(const ce of h)Pe.includes(ce.image)&&(ce.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Pe=n.RGBA,ce=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,ce,ct,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(at&&Fe){const pe=Mt(ot[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ie,pe.width,pe.height)}for(let pe=0,l=ot.length;pe<l;pe++)Ne=ot[pe],at?W&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Oe,Ke,Ne):t.texImage2D(n.TEXTURE_2D,pe,Ie,Oe,Ke,Ne);y.generateMipmaps=!1}else if(at){if(Fe){const pe=Mt(me);t.texStorage2D(n.TEXTURE_2D,Le,Ie,pe.width,pe.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Ke,me)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Oe,Ke,me);x(y)&&T(ee),we.__version=Te.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function ke(N,y,Z){if(y.image.length!==6)return;const ee=_t(N,y),ue=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);const Te=i.get(ue);if(ue.version!==Te.__version||ee===!0){t.activeTexture(n.TEXTURE0+Z);const we=Rt.getPrimaries(Rt.workingColorSpace),le=y.colorSpace===ta?null:Rt.getPrimaries(y.colorSpace),me=y.colorSpace===ta||we===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ke=y.image[0]&&y.image[0].isDataTexture,Ie=[];for(let ce=0;ce<6;ce++)!Oe&&!Ke?Ie[ce]=_(y.image[ce],!0,a.maxCubemapSize):Ie[ce]=Ke?y.image[ce].image:y.image[ce],Ie[ce]=ut(y,Ie[ce]);const Ne=Ie[0],ot=r.convert(y.format,y.colorSpace),at=r.convert(y.type),Fe=S(y.internalFormat,ot,at,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Le=Te.__version===void 0||ee===!0,pe=ue.dataReady;let l=R(y,Ne);xt(n.TEXTURE_CUBE_MAP,y);let Pe;if(Oe){W&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Fe,Ne.width,Ne.height);for(let ce=0;ce<6;ce++){Pe=Ie[ce].mipmaps;for(let ct=0;ct<Pe.length;ct++){const Xe=Pe[ct];y.format!==Xn?ot!==null?W?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct,0,0,Xe.width,Xe.height,ot,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct,Fe,Xe.width,Xe.height,0,Xe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct,0,0,Xe.width,Xe.height,ot,at,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct,Fe,Xe.width,Xe.height,0,ot,at,Xe.data)}}}else{if(Pe=y.mipmaps,W&&Le){Pe.length>0&&l++;const ce=Mt(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,l,Fe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ke){W?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ie[ce].width,Ie[ce].height,ot,at,Ie[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Fe,Ie[ce].width,Ie[ce].height,0,ot,at,Ie[ce].data);for(let ct=0;ct<Pe.length;ct++){const Lt=Pe[ct].image[ce].image;W?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct+1,0,0,Lt.width,Lt.height,ot,at,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct+1,Fe,Lt.width,Lt.height,0,ot,at,Lt.data)}}else{W?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ot,at,Ie[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Fe,ot,at,Ie[ce]);for(let ct=0;ct<Pe.length;ct++){const Xe=Pe[ct];W?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct+1,0,0,ot,at,Xe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ct+1,Fe,ot,at,Xe.image[ce])}}}x(y)&&T(n.TEXTURE_CUBE_MAP),Te.__version=ue.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function Ee(N,y,Z,ee,ue,Te){const we=r.convert(Z.format,Z.colorSpace),le=r.convert(Z.type),me=S(Z.internalFormat,we,le,Z.normalized,Z.colorSpace),Oe=i.get(y),Ke=i.get(Z);if(Ke.__renderTarget=y,!Oe.__hasExternalTextures){const Ie=Math.max(1,y.width>>Te),Ne=Math.max(1,y.height>>Te);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Te,me,Ie,Ne,y.depth,0,we,le,null):t.texImage2D(ue,Te,me,Ie,Ne,0,we,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),it(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ue,Ke.__webglTexture,0,We(y)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ue,Ke.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(N,y,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),y.depthBuffer){const ee=y.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,Te=E(y.stencilBuffer,ue),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;it(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(y),Te,y.width,y.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(y),Te,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Te,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,N)}else{const ee=y.textures;for(let ue=0;ue<ee.length;ue++){const Te=ee[ue],we=r.convert(Te.format,Te.colorSpace),le=r.convert(Te.type),me=S(Te.internalFormat,we,le,Te.normalized,Te.colorSpace);it(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(y),me,y.width,y.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(y),me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(N,y,Z){const ee=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=i.get(y.depthTexture);if(ue.__renderTarget=y,(!ue.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,y.depthTexture.addEventListener("dispose",L)),ue.__webglTexture===void 0){ue.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ue.__webglTexture),xt(n.TEXTURE_CUBE_MAP,y.depthTexture);const Oe=r.convert(y.depthTexture.format),Ke=r.convert(y.depthTexture.type);let Ie;y.depthTexture.format===zi?Ie=n.DEPTH_COMPONENT24:y.depthTexture.format===Ea&&(Ie=n.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,y.width,y.height,0,Oe,Ke,null)}}else ve(y.depthTexture,0);const Te=ue.__webglTexture,we=We(y),le=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,me=y.depthTexture.format===Ea?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===zi)it(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else if(y.depthTexture.format===Ea)it(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,le,Te,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,me,le,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(N){const y=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){const ee=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const ue=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),y.__depthDisposeCallback=ue}y.__boundDepthTexture=ee}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(Z)for(let ee=0;ee<6;ee++)lt(y.__webglFramebuffer[ee],N,ee);else{const ee=N.texture.mipmaps;ee&&ee.length>0?lt(y.__webglFramebuffer[0],N,0):lt(y.__webglFramebuffer,N,0)}else if(Z){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=n.createRenderbuffer(),je(y.__webglDepthbuffer[ee],N,!1);else{const ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Te)}}else{const ee=N.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),je(y.__webglDepthbuffer,N,!1);else{const ue=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(N,y,Z){const ee=i.get(N);y!==void 0&&Ee(ee.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&fe(N)}function Me(N){const y=N.texture,Z=i.get(N),ee=i.get(y);N.addEventListener("dispose",M);const ue=N.textures,Te=N.isWebGLCubeRenderTarget===!0,we=ue.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,s.memory.textures++),Te){Z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[le]=[];for(let me=0;me<y.mipmaps.length;me++)Z.__webglFramebuffer[le][me]=n.createFramebuffer()}else Z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)Z.__webglFramebuffer[le]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(we)for(let le=0,me=ue.length;le<me;le++){const Oe=i.get(ue[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),s.memory.textures++)}if(N.samples>0&&it(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let le=0;le<ue.length;le++){const me=ue[le];Z.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[le]);const Oe=r.convert(me.format,me.colorSpace),Ke=r.convert(me.type),Ie=S(me.internalFormat,Oe,Ke,me.normalized,me.colorSpace,N.isXRRenderTarget===!0),Ne=We(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ie,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Z.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),je(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),xt(n.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Ee(Z.__webglFramebuffer[le][me],N,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else Ee(Z.__webglFramebuffer[le],N,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(y)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let le=0,me=ue.length;le<me;le++){const Oe=ue[le],Ke=i.get(Oe);let Ie=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ie=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ke.__webglTexture),xt(Ie,Oe),Ee(Z.__webglFramebuffer,N,Oe,n.COLOR_ATTACHMENT0+le,Ie,0),x(Oe)&&T(Ie)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),xt(le,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Ee(Z.__webglFramebuffer[me],N,y,n.COLOR_ATTACHMENT0,le,me);else Ee(Z.__webglFramebuffer,N,y,n.COLOR_ATTACHMENT0,le,0);x(y)&&T(le),t.unbindTexture()}N.depthBuffer&&fe(N)}function ye(N){const y=N.textures;for(let Z=0,ee=y.length;Z<ee;Z++){const ue=y[Z];if(x(ue)){const Te=C(N),we=i.get(ue).__webglTexture;t.bindTexture(Te,we),T(Te),t.unbindTexture()}}}const be=[],A=[];function qe(N){if(N.samples>0){if(it(N)===!1){const y=N.textures,Z=N.width,ee=N.height;let ue=n.COLOR_BUFFER_BIT;const Te=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(N),le=y.length>1;if(le)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const me=N.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const Ke=i.get(y[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ue,n.NEAREST),f===!0&&(be.length=0,A.length=0,be.push(n.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(be.push(Te),A.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const Ke=i.get(y[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&f){const y=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function We(N){return Math.min(a.maxSamples,N.samples)}function it(N){const y=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(N){const y=s.render.frame;u.get(N)!==y&&(u.set(N,y),N.update())}function ut(N,y){const Z=N.colorSpace,ee=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==cs&&Z!==ta&&(Rt.getTransfer(Z)===Ft?(ee!==Xn||ue!==Fn)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Z)),y}function Mt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=$,this.getTextureUnits=B,this.setTextureUnits=Y,this.setTexture2D=ve,this.setTexture2DArray=ae,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=xe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ov(n,e){function t(i,a=ta){let r;const s=Rt.getTransfer(a);if(i===Fn)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ju)return n.BYTE;if(i===ed)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===Sc)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===ad)return n.RGB;if(i===Xn)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Ea)return n.DEPTH_STENCIL;if(i===rd)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===Ca)return n.RG;if(i===Ac)return n.RG_INTEGER;if(i===Tc)return n.RGBA_INTEGER;if(i===ts||i===ns||i===is||i===as)if(s===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===as)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Ol||i===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===kl||i===Vl||i===Gl||i===ss||i===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===zl)return s===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ss)return r.COMPRESSED_RG11_EAC;if(i===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Zl||i===Jl||i===Kl||i===Ql||i===jl||i===ec||i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return s===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===rc||i===oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return s===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sc||i===lc||i===ls||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ls)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Md(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ai({vertexShader:Fv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends Ia{constructor(e,t){super();const i=this;let a=null,r=1,s=null,o="local-floor",f=1,c=null,u=null,h=null,d=null,p=null,m=null;const b=typeof XRWebGLBinding<"u",_=new zv,x={},T=t.getContextAttributes();let C=null,S=null;const E=[],R=[],L=new Ce;let M=null,P=null;const I=new Hn;I.viewport=new Kt;const F=new Hn;F.viewport=new Kt;const V=[I,F],$=new $0;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let q=E[se];return q===void 0&&(q=new Ws,E[se]=q),q.getTargetRaySpace()},this.getControllerGrip=function(se){let q=E[se];return q===void 0&&(q=new Ws,E[se]=q),q.getGripSpace()},this.getHand=function(se){let q=E[se];return q===void 0&&(q=new Ws,E[se]=q),q.getHandSpace()};function re(se){const q=R.indexOf(se.inputSource);if(q===-1)return;const _e=E[q];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||s),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function te(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",ve);for(let se=0;se<E.length;se++){const q=R[se];q!==null&&(R[se]=null,E[se].disconnect(q))}B=null,Y=null,_.reset();for(const se in x)delete x[se];if(e.setRenderTarget(C),p=null,d=null,h=null,a=null,S=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(L.width,L.height,!1),P!==null){const se=P.camera;se.fov=P.fov,se.zoom=P.zoom,se.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",te),a.addEventListener("inputsourceschange",ve),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(L),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Ea:zi,ke=T.stencil?eo:yi);const je={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(je),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new qn(d.textureWidth,d.textureHeight,{format:Xn,type:Fn,depthTexture:new xr(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,_e),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qn(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(f),c=null,s=await a.requestReferenceSpace(o),_t.setContext(a),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ve(se){for(let q=0;q<se.removed.length;q++){const _e=se.removed[q],ke=R.indexOf(_e);ke>=0&&(R[ke]=null,E[ke].disconnect(_e))}for(let q=0;q<se.added.length;q++){const _e=se.added[q];let ke=R.indexOf(_e);if(ke===-1){for(let je=0;je<E.length;je++)if(je>=R.length){R.push(_e),ke=je;break}else if(R[je]===null){R[je]=_e,ke=je;break}if(ke===-1)break}const Ee=E[ke];Ee&&Ee.connect(_e)}}const ae=new k,he=new k;function ge(se,q,_e){ae.setFromMatrixPosition(q.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const ke=ae.distanceTo(he),Ee=q.projectionMatrix.elements,je=_e.projectionMatrix.elements,lt=Ee[14]/(Ee[10]-1),fe=Ee[14]/(Ee[10]+1),xe=(Ee[9]+1)/Ee[5],Me=(Ee[9]-1)/Ee[5],ye=(Ee[8]-1)/Ee[0],be=(je[8]+1)/je[0],A=lt*ye,qe=lt*be,We=ke/(-ye+be),it=We*-ye;if(q.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(it),se.translateZ(We),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ee[10]===-1)se.projectionMatrix.copy(q.projectionMatrix),se.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const z=lt+We,ut=fe+We,Mt=A-it,N=qe+(ke-it),y=xe*fe/ut*z,Z=Me*fe/ut*z;se.projectionMatrix.makePerspective(Mt,N,y,Z,z,ut),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Je(se,q){q===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(q.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let q=se.near,_e=se.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),$.near=F.near=I.near=q,$.far=F.far=I.far=_e,(B!==$.near||Y!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),B=$.near,Y=$.far),$.layers.mask=se.layers.mask|6,I.layers.mask=$.layers.mask&-5,F.layers.mask=$.layers.mask&-3;const ke=se.parent,Ee=$.cameras;Je($,ke);for(let je=0;je<Ee.length;je++)Je(Ee[je],ke);Ee.length===2?ge($,I,F):$.projectionMatrix.copy(I.projectionMatrix),P===null&&se.isPerspectiveCamera&&(P={camera:se,fov:se.fov,zoom:se.zoom}),Ge(se,$,ke)};function Ge(se,q,_e){_e===null?se.matrix.copy(q.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(q.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(q.projectionMatrix),se.projectionMatrixInverse.copy(q.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=io*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&p===null))return f},this.setFoveation=function(se){f=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh($)},this.getCameraTexture=function(se){return x[se]};let wt=null;function xt(se,q){if(u=q.getViewerPose(c||s),m=q,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ke=!1;_e.length!==$.cameras.length&&($.cameras.length=0,ke=!0);for(let fe=0;fe<_e.length;fe++){const xe=_e[fe];let Me=null;if(p!==null)Me=p.getViewport(xe);else{const be=h.getViewSubImage(d,xe);Me=be.viewport,fe===0&&(e.setRenderTargetTextures(S,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(S))}let ye=V[fe];ye===void 0&&(ye=new Hn,ye.layers.enable(fe),ye.viewport=new Kt,V[fe]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),fe===0&&($.matrix.copy(ye.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ke===!0&&$.cameras.push(ye)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){h=i.getBinding();const fe=h.getDepthInformation(_e[0]);fe&&fe.isValid&&fe.texture&&_.init(fe,a.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<_e.length;fe++){const xe=_e[fe].camera;if(xe){let Me=x[xe];Me||(Me=new Md,x[xe]=Me);const ye=h.getCameraImage(xe);Me.sourceTexture=ye}}}}for(let _e=0;_e<E.length;_e++){const ke=R[_e],Ee=E[_e];ke!==null&&Ee!==void 0&&Ee.update(ke,q,c||s)}wt&&wt(se,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),m=null}const _t=new Ld;_t.setAnimationLoop(xt),this.setAnimationLoop=function(se){wt=se},this.dispose=function(){}}}const Vv=new qt,zd=new gt;zd.set(-1,0,0,0,1,0,0,0,1);function Gv(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,Cd(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function a(_,x,T,C,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(_,x):x.isMeshLambertMaterial?(r(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(_,x),h(_,x)):x.isMeshPhongMaterial?(r(_,x),u(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(_,x),d(_,x),x.isMeshPhysicalMaterial&&p(_,x,S)):x.isMeshMatcapMaterial?(r(_,x),m(_,x)):x.isMeshDepthMaterial?r(_,x):x.isMeshDistanceMaterial?(r(_,x),b(_,x)):x.isMeshNormalMaterial?r(_,x):x.isLineBasicMaterial?(s(_,x),x.isLineDashedMaterial&&o(_,x)):x.isPointsMaterial?f(_,x,T,C):x.isSpriteMaterial?c(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Tn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Tn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const T=e.get(x),C=T.envMap,S=T.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(zd),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function s(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function o(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function f(_,x,T,C){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*T,_.scale.value=C*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function c(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function u(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function h(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function d(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function p(_,x,T){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Tn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.retroreflectivity>0&&(_.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,x){x.matcap&&(_.matcap.value=x.matcap)}function b(_,x){const T=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Hv(n,e,t,i){let a={},r={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(S,E){const R=E.program;i.uniformBlockBinding(S,R)}function c(S,E){let R=a[S.id];R===void 0&&(_(S),R=u(S),a[S.id]=R,S.addEventListener("dispose",T));const L=E.program;i.updateUBOMapping(S,L);const M=e.render.frame;r[S.id]!==M&&(d(S),r[S.id]=M)}function u(S){const E=h();S.__bindingPointIndex=E;const R=n.createBuffer(),L=S.__size,M=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,L,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,R),R}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=a[S.id],R=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let M=0,P=R.length;M<P;M++){const I=R[M];if(Array.isArray(I))for(let F=0,V=I.length;F<V;F++)p(I[F],M,F,L);else p(I,M,0,L)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,E,R,L){if(b(S,E,R,L)===!0){const M=S.__offset,P=S.value;if(Array.isArray(P)){let I=0;for(let F=0;F<P.length;F++){const V=P[F],$=x(V);m(V,S.__data,I),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(P,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,S.__data)}}function m(S,E,R){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,R)}function b(S,E,R,L){const M=S.value,P=E+"_"+R;if(L[P]===void 0)return typeof M=="number"||typeof M=="boolean"?L[P]=M:ArrayBuffer.isView(M)?L[P]=M.slice():L[P]=M.clone(),!0;{const I=L[P];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return L[P]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(I.equals(M)===!1)return I.copy(M),!0}}return!1}function _(S){const E=S.uniforms;let R=0;const L=16;for(let P=0,I=E.length;P<I;P++){const F=Array.isArray(E[P])?E[P]:[E[P]];for(let V=0,$=F.length;V<$;V++){const B=F[V],Y=Array.isArray(B.value)?B.value:[B.value];for(let re=0,te=Y.length;re<te;re++){const ve=Y[re],ae=x(ve),he=R%L,ge=he%ae.boundary,Je=he+ge;R+=ge,Je!==0&&L-Je<ae.storage&&(R+=L-Je),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=R,R+=ae.storage}}}const M=R%L;return M>0&&(R+=L-M),S.__size=R,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",S),E}function T(S){const E=S.target;E.removeEventListener("dispose",T);const R=s.indexOf(E.__bindingPointIndex);s.splice(R,1),n.deleteBuffer(a[E.id]),delete a[E.id],delete r[E.id]}function C(){for(const S in a)n.deleteBuffer(a[S]);s=[],a={},r={}}return{bind:f,update:c,dispose:C}}const Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function Xv(){return fi===null&&(fi=new xd(Wv,16,16,Ca,Yn),fi.name="DFG_LUT",fi.minFilter=fn,fi.magFilter=fn,fi.wrapS=Ni,fi.wrapT=Ni,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class qv{constructor(e={}){const{canvas:t=ap(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Fn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const b=p,_=new Set([Tc,Ac,Ec]),x=new Set([Fn,yi,jr,eo,yc,bc]),T=new Uint32Array(4),C=new Int32Array(4),S=new k;let E=null,R=null;const L=[],M=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let F=!1,V=null,$=null,B=null,Y=null;this._outputColorSpace=Un;let re=0,te=0,ve=null,ae=-1,he=null;const ge=new Kt,Je=new Kt;let Ge=null;const wt=new ht(0);let xt=0,_t=t.width,se=t.height,q=1,_e=null,ke=null;const Ee=new Kt(0,0,_t,se),je=new Kt(0,0,_t,se);let lt=!1;const fe=new Ic;let xe=!1,Me=!1;const ye=new qt,be=new k,A=new Kt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function it(){return ve===null?q:1}let z=i;function ut(w,H){return t.getContext(w,H)}let Mt,N,y,Z,ee,ue,Te,we,le,me,Oe,Ke,Ie,Ne,ot,at,Fe,W,Le,pe,l,Pe,ce;try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",Lt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),z===null){const H="webgl2";if(z=ut(H,w),z===null)throw ut(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(w){throw t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Ct("WebGLRenderer: "+w.message),w}function ct(){Mt=new Xx(z),Mt.init(),l=new Ov(z,Mt),N=new Ux(z,Mt,e,l),y=new Nv(z,Mt),N.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),$=z.createFramebuffer(),B=z.createFramebuffer(),Y=z.createFramebuffer(),Z=new $x(z),ee=new Mv,ue=new Uv(z,Mt,y,ee,N,l,Z),Te=new Wx(I),we=new J0(z),Pe=new Dx(z,we),le=new qx(z,we,Z,Pe),me=new Jx(z,le,we,Pe,Z),W=new Zx(z,N,ue),ot=new Ox(ee),Oe=new _v(I,Te,Mt,N,Pe,ot),Ke=new Gv(I,ee),Ie=new yv,Ne=new Rv(Mt),Fe=new Lx(I,Te,y,me,m,f),at=new Dv(I,me,N),ce=new Hv(z,Z,N,y),Le=new Nx(z,Mt,Z),pe=new Yx(z,Mt,Z),Z.programs=Oe.programs,I.capabilities=N,I.extensions=Mt,I.properties=ee,I.renderLists=Ie,I.shadowMap=at,I.state=y,I.info=Z}b!==Fn&&(P=new Qx(b,t.width,t.height,o,a,r));const Xe=new kv(I,z);this.xr=Xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(_t,se,!1))},this.getSize=function(w){return w.set(_t,se)},this.setSize=function(w,H,ne=!0){if(Xe.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=w,se=H,t.width=Math.floor(w*q),t.height=Math.floor(H*q),ne===!0&&(t.style.width=w+"px",t.style.height=H+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(_t*q,se*q).floor()},this.setDrawingBufferSize=function(w,H,ne){_t=w,se=H,q=ne,t.width=Math.floor(w*ne),t.height=Math.floor(H*ne),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(b===Fn){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ge)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,H,ne,Q){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,H,ne,Q),y.viewport(ge.copy(Ee).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(je)},this.setScissor=function(w,H,ne,Q){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,H,ne,Q),y.scissor(Je.copy(je).multiplyScalar(q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){y.setScissorTest(lt=w)},this.setOpaqueSort=function(w){_e=w},this.setTransparentSort=function(w){ke=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ne=!0){let Q=0;if(w){let j=!1;if(ve!==null){const Be=ve.texture.format;j=_.has(Be)}if(j){const Be=ve.texture.type,$e=x.has(Be),ze=Fe.getClearColor(),et=Fe.getClearAlpha(),rt=ze.r,vt=ze.g,Et=ze.b;$e?(T[0]=rt,T[1]=vt,T[2]=Et,T[3]=et,z.clearBufferuiv(z.COLOR,0,T)):(C[0]=rt,C[1]=vt,C[2]=Et,C[3]=et,z.clearBufferiv(z.COLOR,0,C))}else Q|=z.COLOR_BUFFER_BIT}H&&(Q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Lt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Fe.dispose(),Ie.dispose(),Ne.dispose(),ee.dispose(),Te.dispose(),me.dispose(),Pe.dispose(),ce.dispose(),Oe.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Er),Xe.removeEventListener("sessionend",ki),Jn.stop()};function Lt(w){w.preventDefault(),us("WebGLRenderer: Context Lost."),F=!0}function St(){us("WebGLRenderer: Context Restored."),F=!1;const w=Z.autoReset,H=at.enabled,ne=at.autoUpdate,Q=at.needsUpdate,j=at.type;ct(),Z.autoReset=w,at.enabled=H,at.autoUpdate=ne,at.needsUpdate=Q,at.type=j}function Pn(w){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wn(w){const H=w.target;H.removeEventListener("dispose",wn),Cs(H)}function Cs(w){Zn(w),ee.remove(w)}function Zn(w){const H=ee.get(w).programs;H!==void 0&&(H.forEach(function(ne){Oe.releaseProgram(ne)}),w.isShaderMaterial&&Oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ne,Q,j,Be){H===null&&(H=qe);const $e=j.isMesh&&j.matrixWorld.determinantAffine()<0,ze=Ba(w,H,ne,Q,j);y.setMaterial(Q,$e);let et=ne.index,rt=1;if(Q.wireframe===!0){if(et=le.getWireframeAttribute(ne),et===void 0)return;rt=2}const vt=ne.drawRange,Et=ne.attributes.position;let tt=vt.start*rt,Pt=(vt.start+vt.count)*rt;Be!==null&&(tt=Math.max(tt,Be.start*rt),Pt=Math.min(Pt,(Be.start+Be.count)*rt)),et!==null?(tt=Math.max(tt,0),Pt=Math.min(Pt,et.count)):Et!=null&&(tt=Math.max(tt,0),Pt=Math.min(Pt,Et.count));const jt=Pt-tt;if(jt<0||jt===1/0)return;Pe.setup(j,Q,ze,ne,et);let zt,Ot=Le;if(et!==null&&(zt=we.get(et),Ot=pe,Ot.setIndex(zt)),j.isMesh)Q.wireframe===!0?(y.setLineWidth(Q.wireframeLinewidth*it()),Ot.setMode(z.LINES)):Ot.setMode(z.TRIANGLES);else if(j.isLine){let on=Q.linewidth;on===void 0&&(on=1),y.setLineWidth(on*it()),j.isLineSegments?Ot.setMode(z.LINES):j.isLineLoop?Ot.setMode(z.LINE_LOOP):Ot.setMode(z.LINE_STRIP)}else j.isPoints?Ot.setMode(z.POINTS):j.isSprite&&Ot.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const on=j._multiDrawStarts,Ye=j._multiDrawCounts,ln=j._multiDrawCount,Tt=et?we.get(et).bytesPerElement:1,yn=ee.get(Q).currentProgram.getUniforms();for(let In=0;In<ln;In++)yn.setValue(z,"_gl_DrawID",In),Ot.render(on[In]/Tt,Ye[In])}else if(j.isInstancedMesh)Ot.renderInstances(tt,jt,j.count);else if(ne.isInstancedBufferGeometry){const on=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ye=Math.min(ne.instanceCount,on);Ot.renderInstances(tt,jt,Ye)}else Ot.render(tt,jt)};function po(w,H,ne,Q){V!==null&&w.isNodeMaterial&&V.setObject(Q,w),xe===!0&&ot.setState(w,ne,!1),w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Fa(w,H,Q),w.side=wa,w.needsUpdate=!0,Fa(w,H,Q),w.side=Li):Fa(w,H,Q)}this.compile=function(w,H,ne=null){ne===null&&(ne=w),V!==null&&V.renderStart(w,H,ne),R=Ne.get(ne),R.init(H),M.push(R),ne.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),w!==ne&&w.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),R.setupLights(),V!==null&&V.updateLights(R.state.lightsArray),Me=this.localClippingEnabled,xe=ot.init(this.clippingPlanes,Me),xe===!0&&ot.setGlobalState(this.clippingPlanes,H),V!==null&&at.render(R.state.shadowsArray,ne,H);const Q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Be=j.material;if(Be)if(Array.isArray(Be))for(let $e=0;$e<Be.length;$e++){const ze=Be[$e];po(ze,ne,H,j),Q.add(ze)}else po(Be,ne,H,j),Q.add(Be)}),R=M.pop(),V!==null&&V.renderEnd(),Q},this.compileAsync=function(w,H,ne=null){const Q=this.compile(w,H,ne);return new Promise(j=>{function Be(){if(Q.forEach(function($e){const et=ee.get($e).currentProgram;(et===void 0||et.isReady())&&Q.delete($e)}),Q.size===0){j(w);return}setTimeout(Be,10)}Mt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ua=null;function Oa(w){Ua&&Ua(w)}function Er(){Jn.stop()}function ki(){Jn.start()}const Jn=new Ld;Jn.setAnimationLoop(Oa),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Ua=w,Xe.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},Xe.addEventListener("sessionstart",Er),Xe.addEventListener("sessionend",ki),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(w,H);const ne=Xe.enabled===!0&&Xe.isPresenting===!0,Q=P!==null&&(ve===null||ne)&&P.begin(I,ve);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(H),H=Xe.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,H,ve),R=Ne.get(w,M.length),R.init(H),R.state.textureUnits=ue.getTextureUnits(),M.push(R),ye.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),fe.setFromProjectionMatrix(ye,xi,H.reversedDepth),Me=this.localClippingEnabled,xe=ot.init(this.clippingPlanes,Me),E=Ie.get(w,L.length),E.init(),L.push(E),Xe.enabled===!0&&Xe.isPresenting===!0){const $e=I.xr.getDepthSensingMesh();$e!==null&&Ar($e,H,-1/0,I.sortObjects)}Ar(w,H,0,I.sortObjects),E.finish(),V!==null&&V.updateLights(R.state.lightsArray),I.sortObjects===!0&&E.sort(_e,ke),We=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,We&&Fe.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&ot.beginShadows();const j=R.state.shadowsArray;if(at.render(j,w,H),xe===!0&&ot.endShadows(),(Q&&P.hasRenderPass())===!1){const $e=E.opaque,ze=E.transmissive;if(R.setupLights(),H.isArrayCamera){const et=H.cameras;if(ze.length>0)for(let rt=0,vt=et.length;rt<vt;rt++){const Et=et[rt];Wt($e,ze,w,Et)}We&&Fe.render(w);for(let rt=0,vt=et.length;rt<vt;rt++){const Et=et[rt];mo(E,w,Et,Et.viewport)}}else ze.length>0&&Wt($e,ze,w,H),We&&Fe.render(w),mo(E,w,H)}ve!==null&&te===0&&(ue.updateMultisampleRenderTarget(ve),ue.updateRenderTargetMipmap(ve)),Q&&P.end(I),w.isScene===!0&&w.onAfterRender(I,w,H),Pe.resetDefaultState(),ae=-1,he=null,M.pop(),M.length>0?(R=M[M.length-1],ue.setTextureUnits(R.state.textureUnits),xe===!0&&ot.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,L.pop(),L.length>0?E=L[L.length-1]:E=null,V!==null&&V.renderEnd()};function Ar(w,H,ne,Q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)R.pushLightProbeGrid(w);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(fe)){Q&&A.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const $e=me.update(w),ze=w.material;ze.visible&&E.push(w,$e,ze,ne,A.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(fe))){const $e=me.update(w),ze=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),A.copy(w.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),A.copy($e.boundingSphere.center)),A.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){const et=$e.groups;for(let rt=0,vt=et.length;rt<vt;rt++){const Et=et[rt],tt=ze[Et.materialIndex];tt&&tt.visible&&E.push(w,$e,tt,ne,A.z,Et,H)}}else ze.visible&&E.push(w,$e,ze,ne,A.z,null,H)}}const Be=w.children;for(let $e=0,ze=Be.length;$e<ze;$e++)Ar(Be[$e],H,ne,Q)}function mo(w,H,ne,Q){const{opaque:j,transmissive:Be,transparent:$e}=w;R.setupLightsView(ne),xe===!0&&ot.setGlobalState(I.clippingPlanes,ne),Q&&y.viewport(ge.copy(Q)),j.length>0&&Yt(j,H,ne),Be.length>0&&Yt(Be,H,ne),$e.length>0&&Yt($e,H,ne),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Wt(w,H,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Q.id]===void 0){const tt=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Q.id]=new qn(1,1,{generateMipmaps:!0,type:tt?Yn:Fn,minFilter:ba,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Be=R.state.transmissionRenderTarget[Q.id],$e=Q.viewport||ge;Be.setSize($e.z*I.transmissionResolutionScale,$e.w*I.transmissionResolutionScale);const ze=I.getRenderTarget(),et=I.getActiveCubeFace(),rt=I.getActiveMipmapLevel();I.setRenderTarget(Be),I.getClearColor(wt),xt=I.getClearAlpha(),xt<1&&I.setClearColor(16777215,.5),I.clear(),We&&Fe.render(ne);const vt=I.toneMapping;I.toneMapping=_i;const Et=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),R.setupLightsView(Q),xe===!0&&ot.setGlobalState(I.clippingPlanes,Q),Yt(w,ne,Q),ue.updateMultisampleRenderTarget(Be),ue.updateRenderTargetMipmap(Be),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Pt=0,jt=H.length;Pt<jt;Pt++){const zt=H[Pt],{object:Ot,geometry:on,material:Ye,group:ln}=zt;if(Ye.side===Li&&Ot.layers.test(Q.layers)){const Tt=Ye.side;Ye.side=Tn,Ye.needsUpdate=!0,go(Ot,ne,Q,on,Ye,ln),Ye.side=Tt,Ye.needsUpdate=!0,tt=!0}}tt===!0&&(ue.updateMultisampleRenderTarget(Be),ue.updateRenderTargetMipmap(Be))}I.setRenderTarget(ze,et,rt),I.setClearColor(wt,xt),Et!==void 0&&(Q.viewport=Et),I.toneMapping=vt}function Yt(w,H,ne){const Q=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Be=w.length;j<Be;j++){const $e=w[j],{object:ze,geometry:et,group:rt}=$e;let vt=$e.material;vt.allowOverride===!0&&Q!==null&&(vt=Q),ze.layers.test(ne.layers)&&go(ze,H,ne,et,vt,rt)}}function go(w,H,ne,Q,j,Be){V!==null&&j.isNodeMaterial&&V.setObject(w,j),w.onBeforeRender(I,H,ne,Q,j,Be),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(I,H,ne,Q,w,Be),j.transparent===!0&&j.side===Li&&j.forceSinglePass===!1?(j.side=Tn,j.needsUpdate=!0,I.renderBufferDirect(ne,H,Q,j,w,Be),j.side=wa,j.needsUpdate=!0,I.renderBufferDirect(ne,H,Q,j,w,Be),j.side=Li):I.renderBufferDirect(ne,H,Q,j,w,Be),w.onAfterRender(I,H,ne,Q,j,Be)}function Fa(w,H,ne){H.isScene!==!0&&(H=qe);const Q=ee.get(w),j=R.state.lights,Be=R.state.shadowsArray,$e=j.state.version,ze=Oe.getParameters(w,j.state,Be,H,ne,R.state.lightProbeGridArray),et=Oe.getProgramCacheKey(ze);let rt=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;const vt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=Te.get(w.envMap||Q.environment,vt),Q.envMapRotation=Q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,rt===void 0&&(w.addEventListener("dispose",wn),rt=new Map,Q.programs=rt);let Et=rt.get(et);if(Et!==void 0){if(Q.currentProgram===Et&&Q.lightsStateVersion===$e)return fa(w,ze),Et}else ze.uniforms=Oe.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,ne,ze),w.onBeforeCompile(ze,I),Et=Oe.acquireProgram(ze,et),rt.set(et,Et),Q.uniforms=ze.uniforms;const tt=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=ot.uniform),fa(w,ze),Q.needsLights=Vi(w),Q.lightsStateVersion=$e,Q.needsLights&&(tt.ambientLightColor.value=j.state.ambient,tt.lightProbe.value=j.state.probe,tt.sunLights.value=j.state.sun,tt.sunLightShadows.value=j.state.sunShadow,tt.directionalLights.value=j.state.directional,tt.directionalLightShadows.value=j.state.directionalShadow,tt.spotLights.value=j.state.spot,tt.spotLightShadows.value=j.state.spotShadow,tt.rectAreaLights.value=j.state.rectArea,tt.ltc_1.value=j.state.rectAreaLTC1,tt.ltc_2.value=j.state.rectAreaLTC2,tt.pointLights.value=j.state.point,tt.pointLightShadows.value=j.state.pointShadow,tt.hemisphereLights.value=j.state.hemi,tt.sunShadowMatrix.value=j.state.sunShadowMatrix,tt.sunShadowCascade.value=j.state.sunShadowCascade,tt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,tt.spotLightMatrix.value=j.state.spotLightMatrix,tt.spotLightMap.value=j.state.spotLightMap,tt.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.lightProbeGrid=R.state.lightProbeGridArray.length>0,Q.currentProgram=Et,Q.uniformsList=null,Et}function xo(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=rs.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function fa(w,H){const ne=ee.get(w);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function Sn(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let ne=0,Q=w.length;ne<Q;ne++){const j=w[ne];if(j.texture!==null&&j.boundingBox.containsPoint(S))return j}return null}function Ba(w,H,ne,Q,j){H.isScene!==!0&&(H=qe),ue.resetTextureUnits();const Be=H.fog,$e=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?H.environment:null,ze=ve===null?I.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Rt.workingColorSpace,et=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,rt=Te.get(Q.envMap||$e,et),vt=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Et=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),tt=!!ne.morphAttributes.position,Pt=!!ne.morphAttributes.normal,jt=!!ne.morphAttributes.color;let zt=_i;Q.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(zt=I.toneMapping);const Ot=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,on=Ot!==void 0?Ot.length:0,Ye=ee.get(Q),ln=R.state.lights;if(xe===!0&&(Me===!0||w!==he)){const kt=w===he&&Q.id===ae;ot.setState(Q,w,kt)}let Tt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ln.state.version||Ye.outputColorSpace!==ze||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==rt||Q.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ot.numPlanes||Ye.numIntersection!==ot.numIntersection)||Ye.vertexAlphas!==vt||Ye.vertexTangents!==Et||Ye.morphTargets!==tt||Ye.morphNormals!==Pt||Ye.morphColors!==jt||Ye.toneMapping!==zt||Ye.morphTargetsCount!==on||!!Ye.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Ye.__version=Q.version);let yn=Ye.currentProgram;Tt===!0&&(yn=Fa(Q,H,j),V&&Q.isNodeMaterial&&V.onUpdateProgram(Q,yn,Ye));let In=!1,Kn=!1,Gi=!1;const Nt=yn.getUniforms(),Zt=Ye.uniforms;if(y.useProgram(yn.program)&&(In=!0,Kn=!0,Gi=!0),Q.id!==ae&&(ae=Q.id,Kn=!0),Ye.needsLights){const kt=Sn(R.state.lightProbeGridArray,j);Ye.lightProbeGrid!==kt&&(Ye.lightProbeGrid=kt,Kn=!0)}if(In||he!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(z,"projectionMatrix",w.projectionMatrix),Nt.setValue(z,"viewMatrix",w.matrixWorldInverse);const li=Nt.map.cameraPosition;li!==void 0&&li.setValue(z,be.setFromMatrixPosition(w.matrixWorld)),N.logarithmicDepthBuffer&&Nt.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Nt.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),he!==w&&(he=w,Kn=!0,Gi=!0)}if(Ye.needsLights&&(ln.state.sunShadowMap.length>0&&Nt.setValue(z,"sunShadowMap",ln.state.sunShadowMap,ue),ln.state.directionalShadowMap.length>0&&Nt.setValue(z,"directionalShadowMap",ln.state.directionalShadowMap,ue),ln.state.spotShadowMap.length>0&&Nt.setValue(z,"spotShadowMap",ln.state.spotShadowMap,ue),ln.state.pointShadowMap.length>0&&Nt.setValue(z,"pointShadowMap",ln.state.pointShadowMap,ue)),j.isSkinnedMesh){Nt.setOptional(z,j,"bindMatrix"),Nt.setOptional(z,j,"bindMatrixInverse");const kt=j.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Nt.setValue(z,"boneTexture",kt.boneTexture,ue))}j.isBatchedMesh&&(Nt.setOptional(z,j,"batchingTexture"),Nt.setValue(z,"batchingTexture",j._matricesTexture,ue),Nt.setOptional(z,j,"batchingIdTexture"),Nt.setValue(z,"batchingIdTexture",j._indirectTexture,ue),Nt.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(z,"batchingColorTexture",j._colorsTexture,ue));const si=ne.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&W.update(j,ne,yn),(Kn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Nt.setValue(z,"receiveShadow",j.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&H.environment!==null&&(Zt.envMapIntensity.value=H.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=Xv()),Kn){if(Nt.setValue(z,"toneMappingExposure",I.toneMappingExposure),Ye.needsLights&&ua(Zt,Gi),Be&&Q.fog===!0&&Ke.refreshFogUniforms(Zt,Be),Ke.refreshMaterialUniforms(Zt,Q,q,se,R.state.transmissionRenderTarget[w.id]),Ye.needsLights&&Ye.lightProbeGrid){const kt=Ye.lightProbeGrid;Zt.probesSH.value=kt.texture,Zt.probesMin.value.copy(kt.boundingBox.min),Zt.probesMax.value.copy(kt.boundingBox.max),Zt.probesResolution.value.copy(kt.resolution)}rs.upload(z,xo(Ye),Zt,ue)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(rs.upload(z,xo(Ye),Zt,ue),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Nt.setValue(z,"center",j.center),Nt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(z,"normalMatrix",j.normalMatrix),Nt.setValue(z,"modelMatrix",j.matrixWorld),Q.uniformsGroups!==void 0){const kt=Q.uniformsGroups;for(let li=0,zn=kt.length;li<zn;li++){const Tr=kt[li];ce.update(Tr,yn),ce.bind(Tr,yn)}}return yn}function ua(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Vi(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ve},this.setRenderTargetTextures=function(w,H,ne){const Q=ee.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ee.get(w.texture).__webglTexture=H,ee.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const ne=ee.get(w);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,ne=0){ve=w,re=H,te=ne;let Q=null,j=!1,Be=!1;if(w){const ze=ee.get(w);if(ze.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(z.FRAMEBUFFER,ze.__webglFramebuffer),ge.copy(w.viewport),Je.copy(w.scissor),Ge=w.scissorTest,y.viewport(ge),y.scissor(Je),y.setScissorTest(Ge),ae=-1;return}else if(ze.__webglFramebuffer===void 0)ue.setupRenderTarget(w);else if(ze.__hasExternalTextures)ue.rebindTextures(w,ee.get(w.texture).__webglTexture,ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const vt=w.depthTexture;if(ze.__boundDepthTexture!==vt){if(vt!==null&&ee.has(vt)&&(w.width!==vt.image.width||w.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Be=!0);const rt=ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(rt[H])?Q=rt[H][ne]:Q=rt[H],j=!0):w.samples>0&&ue.useMultisampledRTT(w)===!1?Q=ee.get(w).__webglMultisampledFramebuffer:Array.isArray(rt)?Q=rt[ne]:Q=rt,ge.copy(w.viewport),Je.copy(w.scissor),Ge=w.scissorTest}else ge.copy(Ee).multiplyScalar(q).floor(),Je.copy(je).multiplyScalar(q).floor(),Ge=lt;if(ne!==0&&(Q=$),y.bindFramebuffer(z.FRAMEBUFFER,Q)&&y.drawBuffers(w,Q),y.viewport(ge),y.scissor(Je),y.setScissorTest(Ge),j){const ze=ee.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,ze.__webglTexture,ne)}else if(Be){const ze=H;for(let et=0;et<w.textures.length;et++){const rt=ee.get(w.textures[et]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+et,rt.__webglTexture,ne,ze)}}else if(w!==null&&ne!==0){const ze=ee.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ze.__webglTexture,ne)}ae=-1};function vo(w){const H=ee.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=N.textureFormatReadable(w.format),H.__typeReadable=N.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,ne,Q,j,Be,$e,ze=0){if(!(w&&w.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$e!==void 0&&(et=et[$e]),et){y.bindFramebuffer(z.FRAMEBUFFER,et);try{const rt=w.textures[ze],vt=rt.format,Et=rt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ze);const tt=vo(rt);if(tt.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Q&&ne>=0&&ne<=w.height-j&&z.readPixels(H,ne,Q,j,l.convert(vt),l.convert(Et),Be)}finally{const rt=ve!==null?ee.get(ve).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(w,H,ne,Q,j,Be,$e,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&$e!==void 0&&(et=et[$e]),et)if(H>=0&&H<=w.width-Q&&ne>=0&&ne<=w.height-j){y.bindFramebuffer(z.FRAMEBUFFER,et);const rt=w.textures[ze],vt=rt.format,Et=rt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ze);const tt=vo(rt);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.bufferData(z.PIXEL_PACK_BUFFER,Be.byteLength,z.STREAM_READ),z.readPixels(H,ne,Q,j,l.convert(vt),l.convert(Et),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const jt=ve!==null?ee.get(ve).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,jt);const zt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await rp(z,zt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Be),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Pt),z.deleteSync(zt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ne=0){const Q=Math.pow(2,-ne),j=Math.floor(w.image.width*Q),Be=Math.floor(w.image.height*Q),$e=H!==null?H.x:0,ze=H!==null?H.y:0;ue.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,ne,0,0,$e,ze,j,Be),y.unbindTexture()},this.copyTextureToTexture=function(w,H,ne=null,Q=null,j=0,Be=0){let $e,ze,et,rt,vt,Et,tt,Pt,jt;const zt=w.isCompressedTexture?w.mipmaps[Be]:w.image;if(ne!==null)$e=ne.max.x-ne.min.x,ze=ne.max.y-ne.min.y,et=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,vt=ne.min.y,Et=ne.isBox3?ne.min.z:0;else{const Zt=Math.pow(2,-j);$e=Math.floor(zt.width*Zt),ze=Math.floor(zt.height*Zt),w.isDataArrayTexture?et=zt.depth:w.isData3DTexture?et=Math.floor(zt.depth*Zt):et=1,rt=0,vt=0,Et=0}Q!==null?(tt=Q.x,Pt=Q.y,jt=Q.z):(tt=0,Pt=0,jt=0);const Ot=l.convert(H.format),on=l.convert(H.type);let Ye;H.isData3DTexture?(ue.setTexture3D(H,0),Ye=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ue.setTexture2DArray(H,0),Ye=z.TEXTURE_2D_ARRAY):(ue.setTexture2D(H,0),Ye=z.TEXTURE_2D),y.activeTexture(z.TEXTURE0),y.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const ln=y.getParameter(z.UNPACK_ROW_LENGTH),Tt=y.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=y.getParameter(z.UNPACK_SKIP_PIXELS),In=y.getParameter(z.UNPACK_SKIP_ROWS),Kn=y.getParameter(z.UNPACK_SKIP_IMAGES);y.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),y.pixelStorei(z.UNPACK_SKIP_PIXELS,rt),y.pixelStorei(z.UNPACK_SKIP_ROWS,vt),y.pixelStorei(z.UNPACK_SKIP_IMAGES,Et);const Gi=w.isDataArrayTexture||w.isData3DTexture,Nt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Zt=ee.get(w),si=ee.get(H),kt=ee.get(Zt.__renderTarget),li=ee.get(si.__renderTarget);y.bindFramebuffer(z.READ_FRAMEBUFFER,kt.__webglFramebuffer),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let zn=0;zn<et;zn++)Gi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.get(w).__webglTexture,j,Et+zn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.get(H).__webglTexture,Be,jt+zn)),z.blitFramebuffer(rt,vt,$e,ze,tt,Pt,$e,ze,z.DEPTH_BUFFER_BIT,z.NEAREST);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||ee.has(w)){const Zt=ee.get(w),si=ee.get(H);y.bindFramebuffer(z.READ_FRAMEBUFFER,B),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,Y);for(let kt=0;kt<et;kt++)Gi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Zt.__webglTexture,j,Et+kt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Zt.__webglTexture,j),Nt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,si.__webglTexture,Be,jt+kt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,si.__webglTexture,Be),j!==0?z.blitFramebuffer(rt,vt,$e,ze,tt,Pt,$e,ze,z.COLOR_BUFFER_BIT,z.NEAREST):Nt?z.copyTexSubImage3D(Ye,Be,tt,Pt,jt+kt,rt,vt,$e,ze):z.copyTexSubImage2D(Ye,Be,tt,Pt,rt,vt,$e,ze);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Nt?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Ye,Be,tt,Pt,jt,$e,ze,et,Ot,on,zt.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Be,tt,Pt,jt,$e,ze,et,Ot,zt.data):z.texSubImage3D(Ye,Be,tt,Pt,jt,$e,ze,et,Ot,on,zt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Be,tt,Pt,$e,ze,Ot,on,zt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Be,tt,Pt,zt.width,zt.height,Ot,zt.data):z.texSubImage2D(z.TEXTURE_2D,Be,tt,Pt,$e,ze,Ot,on,zt);y.pixelStorei(z.UNPACK_ROW_LENGTH,ln),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),y.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),y.pixelStorei(z.UNPACK_SKIP_ROWS,In),y.pixelStorei(z.UNPACK_SKIP_IMAGES,Kn),Be===0&&H.generateMipmaps&&z.generateMipmap(Ye),y.unbindTexture()},this.initRenderTarget=function(w){ee.get(w).__webglFramebuffer===void 0&&ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ue.setTextureCube(w,0):w.isData3DTexture?ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ue.setTexture2DArray(w,0):ue.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){re=0,te=0,ve=null,y.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const bu={nome:"Victor Gabriel M. Silva",titulo:"Desenvolvedor Web Front-end"},ri=[{id:"inicio",icone:"casa",cor:8150271,titulo:"Olá, eu sou o Victor!",linhas:["Desenvolvedor Web Front-end com mais de 4 anos criando e mantendo sistemas, sites e portais.","Curioso e proativo, gosto de resolver problemas de verdade e uso IA (Gemini, Claude Code, Codex) para acelerar o código.","Ande com as setas (ou WASD) pelo planeta, pule com ESPAÇO e visite cada estação."]},{id:"experiencia",icone:"predio",cor:3003583,titulo:"Experiência",linhas:["SVT Faculdade · Analista de Sistemas · desde 2024: SAMA (ajuda em tempo real), certificados automáticos e nota 5 no MEC.","Freelancer · desde 2024: PWA para doutorado com mapa histórico, modo offline e acessibilidade (cegos e Libras).","Kanagawa Inc · 2023: design system no Figma e apps em React Native.","Cartão Saúde e Clínica IMMA · 2021–2023: sistema de parceiros (React + Firebase) e sites responsivos."]},{id:"projetos",icone:"foguete",cor:16743001,titulo:"Projetos",linhas:["SAMA: pedidos de ajuda entre professores e monitores em tempo real (React, Firebase, TypeScript).","Declarações de autenticidade: emissão automática de certificados (React, Firebase, Node.js).","PWA da corte portuguesa: mapa histórico com offline, websocket e acessibilidade.","Portal interno da faculdade e este currículo jogável (Three.js + Vite)."]},{id:"skills",icone:"estrela",cor:16765503,titulo:"Habilidades",linhas:["JavaScript · TypeScript · React · React Native · Node.js · PHP","HTML · CSS · Bootstrap · Webpack · Vite · APIs REST · JSON","Firebase · Git/GitHub · WordPress · n8n · Figma (UI/UX)","Formação técnica no IFMA (2016–2019) · finalista da FEBRACE (2018) · palestrante no EPIDE (2019)."]},{id:"contato",icone:"carta",cor:16735631,titulo:"Vamos conversar?",linhas:["E-mail: mds.victorgabriel@gmail.com","Telefone: (98) 98752-7469","GitHub e LinkedIn: VictorGabrielmds","Portfólio: victorgabrielmds.github.io/victor-portfolio-dfe"]},{id:"cassino",icone:"cassino",cor:16762941,jogo:"cassino",escala:.58,titulo:"Cassino da Sorte",linhas:["Um caça-níquel de brincadeira: só fichas virtuais, sem dinheiro de verdade.","Ganhe skins para o planeta, as árvores e o céu e deixe o mundo do seu jeito.","Dica: pegue as fichas espalhadas pelo planeta para ganhar mais."]},{id:"nave",icone:"nave",cor:9067775,jogo:"arcade",escala:.6,titulo:"Nave Arcade",linhas:["A nave atira sozinha e você a pilota pelo espaço enquanto monstrinhos chegam pelos lados.","Cada monstro solta um cristal de XP. Tem rochas com itens, buracos negros com um alienígena e chefões que dão moedas para melhorar a nave."]}],ps=[{id:"planeta",nome:"Planeta"},{id:"arvores",nome:"Árvores"},{id:"ceu",nome:"Céu"}],zr={comum:{nome:"Comum",cor:"#9fb0c8"},rara:{nome:"Rara",cor:"#4aa8ff"},epica:{nome:"Épica",cor:"#c15cff"},lendaria:{nome:"Lendária",cor:"#ffd23f"}},rr=(n,e,t,i,a,r,s,o)=>({marRaso:n,marMedio:e,marFundo:t,espuma:i,areia:a,grama0:r,grama1:s,grama2:o}),or=(n,e,t)=>({copa:[n,e],copa2:t}),kr=(n,e,t)=>({fundo:n,estrelas:e,nuvens:t}),so=[{id:"planeta-padrao",cat:"planeta",nome:"Terra",raridade:"comum",padrao:!0,cores:rr(5685998,3112924,1922744,13955580,15981987,7327594,5027680,3117141)},{id:"planeta-sakura",cat:"planeta",nome:"Sakura",raridade:"comum",cores:rr(9428210,5216992,2842552,16773366,16509148,16233167,15502006,13593246)},{id:"planeta-deserto",cat:"planeta",nome:"Deserto",raridade:"comum",cores:rr(7332048,2335656,1337727,16774876,16176527,15648106,14461259,12618294)},{id:"planeta-gelo",cat:"planeta",nome:"Gelo",raridade:"rara",cores:rr(11857151,6733296,3372996,16777215,15398655,16186623,14282488,12245482)},{id:"planeta-marte",cat:"planeta",nome:"Marte",raridade:"epica",cores:rr(9063e3,6171194,3806246,15251872,14262394,12870202,11028523,9058852)},{id:"planeta-ouro",cat:"planeta",nome:"Ouro",raridade:"lendaria",cores:rr(16769658,14721562,11036682,16776160,16773296,16765498,15774234,13142544)},{id:"arvores-padrao",cat:"arvores",nome:"Pinheiros",raridade:"comum",padrao:!0,cores:or(3120732,2460238,3453032)},{id:"arvores-outono",cat:"arvores",nome:"Outono",raridade:"comum",cores:or(15238970,14248491,15906891)},{id:"arvores-sakura",cat:"arvores",nome:"Cerejeiras",raridade:"comum",cores:or(16095938,15302576,16761564)},{id:"arvores-cristal",cat:"arvores",nome:"Cristal",raridade:"rara",cores:or(5887743,3844328,11071743)},{id:"arvores-neon",cat:"arvores",nome:"Neon",raridade:"epica",cores:or(16726996,8006911,2883536)},{id:"arvores-ouro",cat:"arvores",nome:"Douradas",raridade:"lendaria",cores:or(16765498,15774234,16773280)},{id:"ceu-padrao",cat:"ceu",nome:"Noite",raridade:"comum",padrao:!0,cores:kr(725030,16777215,16777215)},{id:"ceu-crepusculo",cat:"ceu",nome:"Crepúsculo",raridade:"comum",cores:kr(2757174,16766632,16763304)},{id:"ceu-aurora",cat:"ceu",nome:"Aurora",raridade:"rara",cores:kr(401439,12255193,13172712)},{id:"ceu-nebulosa",cat:"ceu",nome:"Nebulosa",raridade:"epica",cores:kr(1706554,16751590,13678847)},{id:"ceu-supernova",cat:"ceu",nome:"Supernova",raridade:"lendaria",cores:kr(2755082,16769162,16756843)}],Kr=n=>so.find(e=>e.id===n),Yv=n=>so.find(e=>e.cat===n&&e.padrao),$v=n=>"#"+n.toString(16).padStart(6,"0"),kd="curriculo-cassino-v1",Vr=10,Zv=100,Eu=50,xc=9,On=[{id:"cereja",nome:"Cereja",peso:28,premio:40,tier:"comum"},{id:"limao",nome:"Limão",peso:26,premio:50,tier:"comum"},{id:"sino",nome:"Sino",peso:18,premio:80,tier:"rara"},{id:"estrela",nome:"Estrela",peso:14,premio:120,tier:"rara"},{id:"diamante",nome:"Diamante",peso:9,premio:250,tier:"epica"},{id:"sete",nome:"Sete",peso:5,premio:777,tier:"lendaria"}],Vd=5,Jv=["comum","rara","epica","lendaria"];function Kv(){const n={};for(const e of ps)n[e.id]=Yv(e.id).id;return{fichas:Zv,giros:0,semTrio:0,skins:[],equipadas:n,som:!0}}function Qv(){const n=Kv();try{const e=JSON.parse(localStorage.getItem(kd));if(e&&typeof e.fichas=="number"){const t=Array.isArray(e.skins)?e.skins.filter(a=>Kr(a)):[],i={...n.equipadas};for(const a of ps){const r=e.equipadas?.[a.id],s=r&&Kr(r);s&&s.cat===a.id&&(s.padrao||t.includes(r))&&(i[a.id]=r)}return{...n,fichas:Math.max(0,Math.floor(e.fichas)),giros:e.giros|0,semTrio:e.semTrio|0,skins:t,equipadas:i,som:e.som!==!1}}}catch{}return n}function jv(n){const e=document.createElement("canvas");e.width=e.height=16;const t=e.getContext("2d"),i=p=>{t.fillStyle=p},a=(p,m,b)=>{i(b),t.fillRect(p,m,1,1)},r=(p,m,b,_)=>{i(_);for(let x=-b-1;x<=b+1;x++)for(let T=-b-1;T<=b+1;T++)T*T+x*x<=b*b+.5&&t.fillRect(p+T,m+x,1,1)},s=(p,m,b,_,x)=>{i(x);for(let T=0;T<16;T++)for(let C=0;C<16;C++){const S=(C+.5-p)/b,E=(T+.5-m)/_;S*S+E*E<=1&&t.fillRect(C,T,1,1)}},o=(p,m)=>{i(m);for(let b=0;b<16;b++)for(let _=0;_<16;_++){const x=_+.5,T=b+.5;let C=!1;for(let S=0,E=p.length-1;S<p.length;E=S++){const[R,L]=p[S],[M,P]=p[E];L>T!=P>T&&x<(M-R)*(T-L)/(P-L)+R&&(C=!C)}C&&t.fillRect(_,b,1,1)}},f=(p,m,b,_,x)=>{i(x);const T=Math.max(Math.abs(b-p),Math.abs(_-m));for(let C=0;C<=T;C++)t.fillRect(Math.round(p+(b-p)*C/T),Math.round(m+(_-m)*C/T),1,1)};switch(n){case"cereja":f(5,9,9,3,"#4f8a3a"),f(11,9,9,3,"#4f8a3a"),a(10,2,"#6fcf4a"),a(11,2,"#6fcf4a"),a(11,3,"#6fcf4a"),r(5,11,3,"#e63946"),r(11,11,3,"#e63946"),a(4,10,"#ffb3ba"),a(10,10,"#ffb3ba"),a(6,13,"#b3202e"),a(12,13,"#b3202e");break;case"limao":s(8,8.5,6.5,4.6,"#ffe14a"),s(8,10.2,5.6,2.6,"#f2c230"),a(2,8,"#ffe14a"),a(13,8,"#ffe14a"),a(5,6,"#fff7a8"),a(6,6,"#fff7a8"),a(7,5,"#fff7a8"),a(11,3,"#6fcf4a"),a(12,3,"#6fcf4a"),a(12,4,"#4f8a3a");break;case"sino":o([[8,1.5],[11,4],[12,9],[14.5,12],[1.5,12],[4,9],[5,4]],"#ffcc33"),o([[8.5,2],[11,4],[12,9],[14.5,12],[9,12]],"#e0a622"),r(8,13,1,"#d99a1a"),a(6,4,"#fff3b0"),a(5,6,"#fff3b0"),a(5,8,"#fff3b0");break;case"estrela":{const p=[];for(let m=0;m<10;m++){const b=Math.PI/5*m-Math.PI/2,_=m%2===0?7:3;p.push([8+Math.cos(b)*_,8.5+Math.sin(b)*_])}o(p,"#ffe14a"),o([[8,5],[10,8],[8,11],[6,8]],"#fff3a0");break}case"diamante":o([[2.5,5.5],[5,2],[11,2],[13.5,5.5],[8,14.5]],"#37b6e8"),o([[2.5,5.5],[5,2],[11,2],[13.5,5.5]],"#8be6ff"),o([[5.5,5.5],[8,14],[10.5,5.5],[8,2.5]],"#58d6ff"),a(5,3,"#ffffff"),a(6,3,"#ffffff"),a(4,4,"#ffffff");break;case"sete":o([[3,3],[13,3],[13,6],[9.5,6],[6.5,14],[3.5,14],[7.5,6],[3,6]],"#ff3b4a"),o([[3,3],[13,3],[13,4.2],[3,4.2]],"#ff8a94");break}const c=t.getImageData(0,0,16,16),u=c.data,h=(p,m)=>p>=0&&m>=0&&p<16&&m<16&&u[(m*16+p)*4+3]>0,d=[];for(let p=0;p<16;p++)for(let m=0;m<16;m++)!h(m,p)&&(h(m+1,p)||h(m-1,p)||h(m,p+1)||h(m,p-1))&&d.push([m,p]);i("#1b1020");for(const[p,m]of d)t.fillRect(p,m,1,1);return e}let xa=null;function ui(n,e,t=.09,i="square",a=.04,r=0){if(n.som)try{xa??=new(window.AudioContext||window.webkitAudioContext),xa.state==="suspended"&&xa.resume();const s=xa.currentTime+r,o=xa.createOscillator(),f=xa.createGain();o.type=i,o.frequency.value=e,f.gain.setValueAtTime(a,s),f.gain.exponentialRampToValueAtTime(1e-4,s+t),o.connect(f).connect(xa.destination),o.start(s),o.stop(s+t+.02)}catch{}}const Ci=()=>On[Math.floor(Math.random()*On.length)],xl=()=>{let n=Math.random()*On.reduce((e,t)=>e+t.peso,0);for(const e of On)if(n-=e.peso,n<=0)return e;return On[0]},Gd=(n,e)=>so.filter(t=>!t.padrao&&t.raridade===e&&!n.skins.includes(t.id));function e_(n){for(const e of Jv)if(Gd(n,e).length){const t=On.filter(i=>i.tier===e);return t[Math.floor(Math.random()*t.length)]}return null}function t_(n){let e=[xl(),xl(),xl()],t=e[0]===e[1]&&e[1]===e[2];if(!t&&n.semTrio>=xc){const a=e_(n);a&&(e=[a,a,a],t=!0)}const i={simbolos:e,tipo:"nada",fichas:0,skin:null};if(t){const a=e[0];i.tipo="trio",i.fichas=a.premio;const r=Gd(n,a.tier);r.length?i.skin=r[Math.floor(Math.random()*r.length)]:i.fichas*=2}else(e[0]===e[1]||e[1]===e[2]||e[0]===e[2])&&(i.tipo="par",i.fichas=Vd);return i}function n_({aoMudarSkins:n,aoMudarFichas:e}){const t=Qv(),i=()=>{try{localStorage.setItem(kd,JSON.stringify(t))}catch{}},a=(q,_e,ke)=>{const Ee=document.createElement(q);return _e&&(Ee.className=_e),ke!=null&&(Ee.textContent=ke),Ee},r=Object.fromEntries(On.map(q=>[q.id,jv(q.id)])),s=a("div");s.id="cassino";const o=a("div","cas-maq"),f=a("button","cas-x","X");f.title="Fechar (Esc)";const c=a("div","cas-letreiro"),u=a("div","lampadas");for(let q=0;q<9;q++)u.append(a("i","lampada"));c.append(u,a("h2",null,"CASSINO"));const h=a("div","cas-janela"),d=[0,1,2].map(()=>{const q=a("div","rolo"),_e=document.createElement("canvas");return _e.width=16,_e.height=48,q.append(_e),h.append(q),_e});h.append(a("i","linha-premio"));const p=a("div","cas-lcd"),m=a("div","cas-msg","PUXE A ALAVANCA!"),b=a("div","cas-fichas"),_=a("b");b.append(a("i","moeda"),_,a("span",null,"FICHAS")),p.append(m,b);const x=a("div","cas-premio");x.hidden=!0;const T=a("div","cas-controles"),C=a("button","cas-mini","?");C.title="Tabela de prêmios";const S=a("button","cas-mini","SKINS");S.title="Coleção de skins (C)";const E=a("button","cas-mini"),R=a("button","cas-girar","GIRAR");R.title=`Girar (-${Vr} fichas) · Espaço`;const L=a("button","cas-mini largo",`+${Eu} FICHAS`);L.hidden=!0,T.append(C,S,E,R,L);const M=a("button","cas-alavanca");M.title="Puxar a alavanca",M.append(a("i","haste"),a("i","bola"));const P=a("div","cas-bandeja"),I=a("div","cas-tabela");I.hidden=!0;for(const q of On){const _e=a("div","cas-linha"),ke=r[q.id].cloneNode();ke.getContext("2d").drawImage(r[q.id],0,0),_e.append(ke,a("span",null,`x3 = ${q.premio}`),a("small",null,zr[q.tier].nome.toLowerCase())),I.append(_e)}I.append(a("div","cas-linha par",`linha do meio · 2 iguais = ${Vd} · a cada ${xc+1} giros sem trio, o próximo é garantido`)),o.append(f,c,h,p,x,T,M,P,I,a("p","cas-nota","de brincadeira: fichas virtuais, sem dinheiro de verdade"));const F=a("div","cas-colecao-caixa");F.hidden=!0;const V=a("div","cas-colecao");F.append(V),s.append(o,F),document.body.append(s);let $=!1,B=!1,Y=!1;function re(q,_e,ke){const Ee=d[q].getContext("2d");Ee.clearRect(0,0,16,48);const je=Math.floor(ke),lt=ke-je;for(let fe=0;fe<4;fe++){const xe=_e[je+fe];xe&&Ee.drawImage(r[xe.id],0,Math.round((fe-lt)*16))}}const te=(q,_e)=>re(q,_e,0);function ve(){_.textContent=String(t.fichas),e?.(t.fichas);const q=t.fichas<Vr;R.disabled=B||q,M.disabled=B||q,L.hidden=!q||B,E.textContent=t.som?"SOM ON":"SOM OFF"}function ae(q,_e=""){m.textContent=q,m.className="cas-msg "+_e}function he(){V.replaceChildren();const q=a("div","cas-cabecalho"),_e=so.filter(Ee=>!Ee.padrao).length,ke=a("button","cas-btn","VOLTAR");ke.onclick=()=>Je(!1),q.append(a("h3",null,`SKINS (${t.skins.length}/${_e})`),ke),V.append(q);for(const Ee of ps){V.append(a("h4",null,Ee.nome.toUpperCase()));const je=a("div","cas-grade");for(const lt of so.filter(fe=>fe.cat===Ee.id)){const fe=lt.padrao||t.skins.includes(lt.id),xe=t.equipadas[Ee.id]===lt.id,Me=a("div","cas-card"+(xe?" equipada":"")+(fe?"":" bloqueada"));Me.style.setProperty("--r",zr[lt.raridade].cor);const ye=a("div","amostra"),be=Ee.id==="planeta"?[lt.cores.marFundo,lt.cores.marRaso,lt.cores.areia,lt.cores.grama0,lt.cores.grama2]:Ee.id==="arvores"?[lt.cores.copa[0],lt.cores.copa[1],lt.cores.copa2]:[lt.cores.fundo,lt.cores.estrelas,lt.cores.nuvens];for(const qe of be){const We=a("i");We.style.background=fe?$v(qe):"#2a2440",ye.append(We)}Me.append(ye,a("b",null,fe?lt.nome:"???"),a("small",null,zr[lt.raridade].nome));const A=a("button","cas-btn pequeno",xe?"EQUIPADA":fe?"EQUIPAR":"TRAVADA");A.disabled=!fe||xe,A.onclick=()=>ge(lt),Me.append(A),je.append(Me)}V.append(je)}}function ge(q){t.equipadas[q.cat]=q.id,i(),n({...t.equipadas}),ui(t,660,.06),Y&&he()}function Je(q){Y=q,o.hidden=q,F.hidden=!q,q?he():R.focus()}function Ge(){if(!$||B||t.fichas<Vr)return;t.fichas-=Vr,t.giros+=1;const q=t_(t);B=!0,x.hidden=!0,h.classList.remove("vitoria"),ae("GIRANDO..."),ve();const _e=[Ci(),Ci(),Ci()],ke=[Ci(),Ci(),Ci()];for(const We of[_e,ke])We[0]===We[1]&&We[1]===We[2]&&(We[2]=On[(On.indexOf(We[2])+1)%On.length]);const Ee=14,je=450,lt=[1100,1600,2100],fe=lt.map(We=>Math.round(Ee*(We-je)/1e3)+3),xe=q.simbolos.map((We,it)=>{const z=[_e[it],We,ke[it]];for(;z.length<fe[it]+3;)z.push(Ci());return z}),Me=performance.now(),ye=[!1,!1,!1];let be=-1;const A=(We,it)=>{const z=lt[We]-je;return it<z?fe[We]-Ee*it/1e3:3*(1-Math.min(1,(it-z)/je))**3},qe=We=>{const it=We-Me;for(let ut=0;ut<3;ut++)ye[ut]||(it>=lt[ut]?(ye[ut]=!0,re(ut,xe[ut],0),ui(t,330+ut*110,.1)):re(ut,xe[ut],A(ut,it)));const z=Math.floor(it/90);z!==be&&!ye[2]&&(be=z,ui(t,170,.025,"square",.012)),ye.every(Boolean)?wt(q):requestAnimationFrame(qe)};requestAnimationFrame(qe)}function wt(q){if(B=!1,t.fichas+=q.fichas,t.semTrio=q.tipo==="trio"?0:t.semTrio+1,q.skin&&t.skins.push(q.skin.id),i(),q.tipo==="trio"?(ae(`TRIO! +${q.fichas}`,"ganhou"),h.classList.add("vitoria"),[523,659,784,1047].forEach((_e,ke)=>ui(t,_e,.14,"square",.05,ke*.11))):q.tipo==="par"?(ae(`PAR! +${q.fichas}`,"par"),ui(t,523,.1),ui(t,659,.1,"square",.04,.1)):ae(t.semTrio>=xc?"QUASE! PRÓXIMO É TRIO":"TENTE DE NOVO"),q.skin){x.replaceChildren(),x.style.setProperty("--r",zr[q.skin.raridade].cor);const _e=ps.find(Ee=>Ee.id===q.skin.cat).nome;x.append(a("b",null,"NOVA SKIN!"),a("span",null,`${_e}: ${q.skin.nome} (${zr[q.skin.raridade].nome})`));const ke=a("button","cas-mini","EQUIPAR");ke.onclick=()=>{ge(q.skin),ke.disabled=!0,ke.textContent="OK"},x.append(ke),x.hidden=!1,[784,988,1175,1568].forEach((Ee,je)=>ui(t,Ee,.18,"triangle",.06,.5+je*.12))}ve()}function xt(){B||t.fichas<Vr||(M.classList.add("puxada"),setTimeout(()=>M.classList.remove("puxada"),450),Ge())}function _t(){$||($=!0,s.classList.add("aberto"),I.hidden=!0,Je(!1),ve(),R.focus())}function se(){!$||B||($=!1,s.classList.remove("aberto"))}R.onclick=Ge,M.onclick=xt,C.onclick=()=>{I.hidden=!I.hidden},S.onclick=()=>Je(!0),f.onclick=se,L.onclick=()=>{t.fichas+=Eu,i(),ve(),ae("FICHAS DE CORTESIA!"),ui(t,880,.1)},E.onclick=()=>{t.som=!t.som,i(),ve(),ui(t,660,.06)},s.addEventListener("pointerdown",q=>{q.target===s&&se()}),window.addEventListener("keydown",q=>{$&&(q.code==="Escape"?(q.preventDefault(),Y?Je(!1):se()):q.code==="Space"&&!Y&&document.activeElement!==S&&document.activeElement!==C?(q.preventDefault(),xt()):q.code==="KeyC"&&(q.preventDefault(),Je(!Y)))},!0);for(let q=0;q<3;q++)te(q,[Ci(),On[q*2%On.length],Ci()]);return ve(),n({...t.equipadas}),{abrir:_t,fechar:se,estaAberto:()=>$,adicionarFichas:q=>{t.fichas+=q,i(),ve()},bip:(...q)=>ui(t,...q),somAtivo:()=>t.som}}function _n(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d"),a=r=>{i.fillStyle=r};return{c:t,pixel(r,s,o){a(o),i.fillRect(r,s,1,1)},retangulo(r,s,o,f,c){a(c),i.fillRect(r,s,o,f)},disco(r,s,o,f){a(f);for(let c=-o-1;c<=o+1;c++)for(let u=-o-1;u<=o+1;u++)u*u+c*c<=o*o+.5&&i.fillRect(r+u,s+c,1,1)},elipse(r,s,o,f,c){a(c);for(let u=0;u<e;u++)for(let h=0;h<n;h++){const d=(h+.5-r)/o,p=(u+.5-s)/f;d*d+p*p<=1&&i.fillRect(h,u,1,1)}},poligono(r,s){a(s);for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=f+.5,u=o+.5;let h=!1;for(let d=0,p=r.length-1;d<r.length;p=d++){const[m,b]=r[d],[_,x]=r[p];b>u!=x>u&&c<(_-m)*(u-b)/(x-b)+m&&(h=!h)}h&&i.fillRect(f,o,1,1)}},linha(r,s,o,f,c){a(c);const u=Math.max(Math.abs(o-r),Math.abs(f-s))||1;for(let h=0;h<=u;h++)i.fillRect(Math.round(r+(o-r)*h/u),Math.round(s+(f-s)*h/u),1,1)},contorno(r){const s=i.getImageData(0,0,n,e),o=s.data,f=(u,h)=>u>=0&&h>=0&&u<n&&h<e&&o[(h*n+u)*4+3]>0,c=[];for(let u=0;u<e;u++)for(let h=0;h<n;h++)!f(h,u)&&(f(h+1,u)||f(h-1,u)||f(h,u+1)||f(h,u-1))&&c.push([h,u]);a(r);for(const[u,h]of c)i.fillRect(u,h,1,1);return this}}}function zc(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d");return t.drawImage(n,0,0),t.globalCompositeOperation="source-in",t.fillStyle="#ffffff",t.fillRect(0,0,e.width,e.height),e}function It(n,e,t=0){let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296}const Au=n=>n*n*(3-2*n);function Bn(n,e,t=0){const i=Math.floor(n),a=Math.floor(e),r=Au(n-i),s=Au(e-a),o=It(i,a,t),f=It(i+1,a,t),c=It(i,a+1,t),u=It(i+1,a+1,t);return o+(f-o)*r+(c-o)*s+(o-f-c+u)*r*s}const kc=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(n=>(n+.5)/16),Hd=[{r:17,pal:["#5a2d1a","#9a4f26","#d4803a","#f2b36b"],palB:["#6b3a22","#b86a30","#e39a52","#f7cf94"],bandas:5},{r:13,pal:["#1f3b66","#3b6cb0","#6fa8e8","#bfe3ff"],nuvens:!0},{r:11,pal:["#4a1a1a","#8a2f26","#c4553a","#e8845f"],crateras:6},{r:15,pal:["#12306a","#1d56b8","#2f7fdc","#56c2ee"],palB:["#1d5a34","#2f9055","#4cb760","#79c96a"],terra:!0},{r:14,pal:["#2a1450","#5a2f9a","#8a5ad0","#c9a8ff"],palB:["#341a60","#6a3fb0","#9a70e0","#dcc4ff"],bandas:3,anel:"#e8d8ff"},{r:12,pal:["#1a0f14","#3a1f26","#5a2f35","#7a4048"],lava:!0},{r:7,pal:["#3a3f4a","#6a7280","#9aa3b2","#cfd6e0"],crateras:4},{r:22,pal:["#6a5a2a","#a8923f","#d8c060","#f5e8a0"],palB:["#7a6a32","#b8a04a","#e6cf6e","#fff4b8"],bandas:7,anel:"#fff1b0"}];function i_(n,e){const t=n.r,a=(n.anel?Math.ceil(t*1.6):t)*2+2,r=t*2+2,s=_n(a,r),o=a/2,f=r/2,c=h=>{if(n.anel)for(let d=0;d<Math.PI*2;d+=.012){const p=Math.sin(d);if(p>=0===h)for(let m=t*1.25;m<=t*1.6;m+=.6)s.pixel(Math.round(o+Math.cos(d)*m),Math.round(f+p*m*.28),m>t*1.5?"#9a86c0":n.anel)}};c(!1);const u=Array.from({length:n.crateras||0},(h,d)=>({x:(It(d,e,1)-.5)*1.3,y:(It(d,e,2)-.5)*1.3,r:.12+It(d,e,3)*.15}));for(let h=0;h<r;h++)for(let d=0;d<a;d++){const p=(d+.5-o)/t,m=(h+.5-f)/t,b=p*p+m*m;if(b>1)continue;const _=Math.sqrt(1-b),T=p*-.5+m*-.55+_*.67+(kc[h%4*4+d%4]-.5)*.24;let C=T<.1?0:T<.4?1:T<.68?2:3,S=n.pal;n.bandas&&Math.sin(m*n.bandas*Math.PI+Bn(p*1.6+e,m*3,5)*2.2)>.15&&(S=n.palB),n.terra&&Bn(p*2.4+e,m*2.4,7)>.52&&(S=n.palB);let E;n.nuvens&&Bn(p*3+e,m*3,9)>.62&&(E=["#9db8e0","#c9dcf5","#e8f2ff","#ffffff"][C]),u.some(R=>(p-R.x)**2+(m-R.y)**2<R.r*R.r)&&(C=Math.max(0,C-1)),n.lava&&Math.abs(Bn(p*3.2+e,m*3.2,11)-.5)<.035&&(E=C>=2?"#ff8a3a":"#c4401f"),s.pixel(d,h,E||S[C])}return c(!0),s.contorno("#0b1026").c}const a_=[{f:.1,cel:80,n:3,cores:["#2a3566","#3a4a8a"],pisca:!1},{f:.25,cel:96,n:3,cores:["#4a5aa0","#6a7ac0","#9aa8e0"],pisca:!0},{f:.5,cel:110,n:2,cores:["#9aa8e0","#c9d3ff","#ffffff","#ffe9a8","#ffb8c8"],pisca:!0,grande:.12},{f:.9,cel:150,n:1,cores:["#26305a"],pisca:!1}],r_=[{f:.18,cel:190,prob:.6,alfa:.8,escalaMax:1,semente:31},{f:.42,cel:330,prob:.5,alfa:1,escalaMax:2,semente:57}],o_=[{camada:1,x:165,y:12,tipo:4,escala:1},{camada:0,x:-78,y:70,tipo:0,escala:1}],gn=(n,e,t)=>(Bn(n,e,t)*.5+Bn(n*2,e*2,t+1)*.25+Bn(n*4,e*4,t+2)*.125+Bn(n*8,e*8,t+3)*.0625)/.9375;function Nn(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d"),r=a.createImageData(n,e),s=r.data;for(let o=0;o<e;o++)for(let f=0;f<n;f++){const c=t(f,o,(f+.5)/n*2-1,(o+.5)/e*2-1);if(!c)continue;const u=Math.min(f,n-1-f,o,e-1-o)/(.2*Math.min(n,e));if(u<1&&u<kc[o%4*4+f%4])continue;const h=(o*n+f)*4;s[h]=c[0],s[h+1]=c[1],s[h+2]=c[2],s[h+3]=c[3]}return a.putImageData(r,0,0),i}const xn=(n,e,t,i)=>Math.max(0,Math.min(i,Math.floor(n*i+(kc[t%4*4+e%4]-.5)*.9+.5))),En=(n,e,t)=>[...n[t-1],e[t-1]];function ti(n,e,t,i,a="#ffffff"){const r=n.getContext("2d"),s=Math.round(e*n.width),o=Math.round(t*n.height);r.fillStyle=a,r.globalAlpha=.5,r.fillRect(s-i,o,i*2+1,1),r.fillRect(s,o-i,1,i*2+1),r.globalAlpha=1,r.fillRect(s-1,o-1,2,2),r.fillStyle="#ffffff",r.fillRect(s,o,1,1)}function vl(n,e,t,i=["#ffffff","#c9d8ff","#ffe9c0"]){const a=n.getContext("2d");for(let r=0;r<e;r++)a.fillStyle=i[r%i.length],a.fillRect(Math.floor(It(r,t,1)*n.width),Math.floor(It(r,t,2)*n.height),1,1)}function s_(n,e,t){let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const[s,o]=n[a],[f,c]=n[r];o>t!=c>t&&e<(f-s)*(t-o)/(c-o)+s&&(i=!i)}return i}const l_={orion(){const n=Nn(150,112,(e,t,i,a)=>{const r=i*1.18+(gn(i*2+1,a*2,41)-.5)*.7,s=a*1.18+(gn(i*2,a*2+3,42)-.5)*.7,o=Math.max(0,1-Math.hypot(r*.95,(s+.05)*1.25)),f=Math.max(0,1-Math.hypot((r+.5)*1.3,(s-.25)*2.4)),c=Math.max(0,1-Math.hypot((r-.55)*1.3,(s+.15)*2.6))*.8,u=gn(r*2.8+4,s*2.8+1,40),h=Math.max(0,1-Math.hypot(r*1.1+.05,s*1.3-.05)*3),d=xn(Math.min(1,(o*.9+f+c)*(.3+u*1.2)+h),e,t,5);return d?En([[60,50,170],[140,50,180],[230,80,150],[255,150,185],[255,238,232]],[64,100,140,190,255],d):null});vl(n,40,5);for(const[e,t]of[[.47,.47],[.53,.5],[.5,.43],[.56,.45]])ti(n,e,t,1);return ti(n,.2,.2,3,"#bcd0ff"),ti(n,.82,.78,2,"#ffd9c0"),n},pilares(){const n=[{cx:-.5,w:.19,top:-.15},{cx:.02,w:.16,top:-.78},{cx:.52,w:.17,top:.05}],e=Nn(130,124,(t,i,a,r)=>{for(let c=0;c<n.length;c++){const u=n[c],h=(gn(r*2.5+c*7,3.3,50)-.5)*.26,d=u.w*(.7+.45*(r+1)/2),p=u.top+(gn(a*6+c,1.1,60)-.5)*.16;if(r>p&&Math.abs(a-u.cx-h)<d){const b=(u.cx+h+d-a)/(2*d),_=gn(a*9,r*9,70),x=b<.14+_*.12?[235,160,70]:b<.32+_*.12?[160,85,50]:[58+_*30,30+_*16,26+_*10];return[x[0],x[1],x[2],255]}const m=Math.hypot(a-u.cx,r-p);if(m<.16&&r<p){const b=xn((.16-m)/.16*.9,t,i,3);if(b)return En([[90,200,210],[170,235,230],[255,250,235]],[90,150,220],b)}}const s=gn(a*2.4+9,r*2.4,80),o=(.15+s*.85)*Math.max(0,1-Math.hypot(a*.95,r*.85)),f=xn(o,t,i,3);return f?En(s>.5?[[200,110,50],[230,140,60],[255,190,100]]:[[40,120,125],[60,160,160],[110,210,200]],[70,110,150],f):null});return vl(e,25,9),ti(e,.49,.13,2,"#bff6ff"),ti(e,.24,.4,1,"#ffe0b0"),ti(e,.76,.52,1,"#ffe0b0"),e},caranguejo(){const n=Math.cos(.5),e=Math.sin(.5),t=Nn(110,104,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(o/.92,f/.74);if(c>1||c>.78&&Bn(o*9,f*9,93)<(c-.78)*4.5)return null;const u=1-Math.abs(Bn(o*8+3,f*8,90)-.5)*2,h=1-Math.abs(Bn(o*14,f*14+5,91)-.5)*2;if(u>.85&&c>.3)return[255,130,55,240];if(h>.92&&c>.2)return[120,200,255,220];const d=xn((1-c)*.7*(.4+gn(o*3,f*3,92)),i,a,3);return d?En([[50,90,200],[70,130,255],[130,180,255]],[50,80,120],d):null});return ti(t,.5,.5,3,"#cfe6ff"),t},cavalo(){const n=[[62,112],[60,80],[58,64],[52,54],[44,50],[34,52],[26,60],[20,66],[14,64],[12,56],[18,46],[26,38],[34,24],[40,14],[44,6],[46,18],[50,24],[58,22],[62,18],[66,26],[72,42],[78,60],[80,80],[84,112]],e=Nn(112,112,(t,i,a,r)=>{if(s_(n,t+.5,i+.5))return[10,5,18,255];const s=gn(a*2.5,r*2.5,100),o=Math.max(0,1-Math.hypot(a*.9,r*.8))*(.35+s*1.1),f=xn(o,t,i,4);return f?En([[120,20,60],[190,40,80],[240,90,110],[255,170,170]],[70,110,160,220],f):null});return vl(e,30,13),ti(e,.3,.2,2,"#ffd0d8"),e},andromeda(){const n=Math.cos(-.45),e=Math.sin(-.45);return Nn(160,84,(t,i,a,r)=>{const s=a*n+r*e,o=(-a*e+r*n)/.3,f=Math.hypot(s,o),c=Math.atan2(o,s),u=.5+.5*Math.sin(2*c-f*10),h=Math.max(0,1-f)*(.25+.75*u)*(.5+gn(s*4,o*4,110)),d=Math.abs(f-.55)<.06?.5*Bn(s*9,o*9,111):0;let p=Math.min(1,Math.exp(-f*6)*1.2+h*.9-d*.8);p=Math.max(p,Math.exp(-Math.hypot((a-.62)*7,(r-.55)*10)*1.5)*.9);const m=xn(p,t,i,5);return m?En([[70,90,200],[110,140,240],[170,185,255],[235,220,210],[255,245,210]],[60,100,150,210,255],m):null})},sombrero(){return Nn(140,64,(n,e,t,i)=>{if(Math.abs(i)<.07&&Math.abs(t)<.92)return[70,40,28,Math.round(235*(.6+.4*Bn(t*20,i*20,115)))];const a=Math.max(0,1-Math.hypot(t/.55,i/.75)),r=Math.abs(i)<.2*(1-Math.abs(t)*.35)&&Math.abs(t)<1?(1-Math.abs(t))*.8:0,s=Math.max(0,1-Math.hypot(t/.9,i/.9))*.3,o=xn(a*1.1+r+s,n,e,5);return o?En([[120,90,70],[190,150,100],[235,200,140],[255,230,175],[255,248,215]],[60,100,160,220,255],o):null})},pleiades(){const n=[[.28,.3,5],[.45,.22,4],[.62,.34,6],[.5,.5,5],[.36,.62,3],[.7,.62,4],[.58,.78,3],[.22,.72,2]],e=Nn(110,100,(t,i,a,r)=>{let s=0;for(const[f,c,u]of n)s+=Math.exp(-Math.hypot((t/110-f)*1.1,i/100-c)/.14*(7-u*.4));const o=xn(Math.min(1,s*(.4+gn(a*3,r*3,125))),t,i,4);return o?En([[40,80,200],[70,130,255],[130,180,255],[200,225,255]],[60,100,150,200],o):null});for(const[t,i,a]of n)ti(e,t,i,a,"#cfe0ff");return e},helice(){const n=Nn(100,100,(e,t,i,a)=>{const r=Math.hypot(i,a);if(r>.98)return null;const s=Math.atan2(a,i),o=.5+.8*gn(Math.cos(s)*2+3,Math.sin(s)*2+3,120)+.4*gn(i*6,a*6,121),f=Math.exp(-(((r-.62)/.13)**2)),c=r<.6?.28*(1-r):0,u=r>.7?.4*Math.exp(-(((r-.8)/.13)**2)):0,h=xn(Math.min(1,(f+c+u)*o),e,t,4);return h?[...r<.55?[60,230,235]:r<.66?[190,235,120]:r<.75?[255,170,60]:[255,70,50],[60,110,170,230][h-1]]:null});return ti(n,.5,.5,2,"#ffffff"),n},quasar(){const n=Math.cos(-.9),e=Math.sin(-.9),t=Nn(150,100,(i,a,r,s)=>{const o=r*n+s*e,f=-r*e+s*n,c=Math.hypot(r,s),u=Math.exp(-((f/.035)**2))*Math.max(0,1-Math.abs(o)*.95)*(.5+.5*gn(o*6,.5,130)),h=Math.exp(-((s/.07)**2))*Math.exp(-((r/.45)**2))*.8,d=Math.exp(-Math.hypot(r,s*1.2)*3.2)*.55,p=Math.exp(-c*9),m=xn(Math.min(1,p+u+h+d),i,a,5);return m?En([[90,50,190],[110,120,240],[100,200,255],[200,240,255],[255,255,255]],[60,100,150,210,255],m):null});return ti(t,.5,.5,4,"#cfeaff"),t},buraconegro(){const a=[];for(let r=0;r<8;r++)a.push(Nn(180,110,(s,o)=>{const f=s+.5-90,c=o+.5-55,u=Math.hypot(f,c);if(u<17)return[2,2,6,255];if(Math.abs(u-19)<1.3)return[255,240,205,255];const h=gn(f*.06-r*.18,c*.4,140);let d=0;const p=5.5*(1-Math.abs(f)/95);if(Math.abs(f)>17&&Math.abs(f)<90&&Math.abs(c)<p&&(d=1-Math.abs(c)/p),u>19.5&&u<36&&c<0&&Math.abs(c)>Math.abs(f)*.2&&(d=Math.max(d,.85*(1-(u-19.5)/16.5))),u>19.5&&u<28&&c>0&&c>Math.abs(f)*.6&&(d=Math.max(d,.6*(1-(u-19.5)/8.5))),!d){const _=xn(Math.exp(-(u-19)/16)*.4*(.4+h),s,o,2);return _?En([[90,30,15],[150,60,25]],[40,70],_):null}const m=.55+.45*(-f/95),b=xn(Math.min(1,d*(.55+h*.7)*m*1.25),s,o,4);return b?En([[110,35,10],[215,95,25],[255,175,75],[255,240,195]],[150,210,245,255],b):null}));return a.fps=6,a},tesseract(){const e=[],t=[];for(let a=0;a<16;a++)t.push([a&1?1:-1,a&2?1:-1,a&4?1:-1,a&8?1:-1]);const i=[];for(let a=0;a<16;a++)for(let r=a+1;r<16;r++){const s=a^r;(s===1||s===2||s===4||s===8)&&i.push([a,r])}for(let a=0;a<16;a++){const r=a/16*(Math.PI/2),s=Math.cos(r),o=Math.sin(r),f=Math.cos(.5),c=Math.sin(.5),u=Math.cos(.4),h=Math.sin(.4),d=t.map(([m,b,_,x])=>{let T=m*s-x*o;const C=m*o+x*s;let S=b*f-_*c,E=b*c+_*f;const R=T*u+E*h;E=-T*h+E*u,T=R;const L=2.6/(2.6-C*.9),M=3.6/(3.6-E*L*.7);return{x:124/2+T*L*M*19,y:124/2+S*L*M*19,w:C}}),p=_n(124,124);for(const[m,b]of[[56,.05],[44,.06],[30,.07]])p.disco(124/2,124/2,m,`rgba(80, 150, 255, ${b})`);for(const[m,b]of i){const _=(d[m].w+d[b].w)/4+.5;p.linha(Math.round(d[m].x),Math.round(d[m].y),Math.round(d[b].x),Math.round(d[b].y),_>.5?"#8be6ff":"#c58bff")}for(const m of d)p.disco(Math.round(m.x),Math.round(m.y),1,"#ffffff");e.push(p.c)}return e.fps=6,e},pulsar(){const a=[];for(let r=0;r<16;r++){const s=r/16*Math.PI,o=Math.cos(s),f=Math.sin(s);a.push(Nn(150,150,(c,u)=>{const h=c+.5-75,d=u+.5-75,p=Math.hypot(h,d);if(p<3.2)return[255,255,255,255];const m=h*o+d*f,b=-h*f+d*o,_=1.1+.07*Math.abs(m),x=Math.abs(m)<70?Math.exp(-((b/_)**2))*Math.pow(1-Math.abs(m)/70,1.2):0,T=Math.exp(-p/11)*.8,C=Math.abs(p-34)<.8?.35:0,S=xn(Math.min(1,x+T+C),c,u,5);return S?En([[60,40,150],[90,100,230],[100,200,255],[200,240,255],[255,255,255]],[60,100,160,215,255],S):null}))}return a.fps=9,a},minhoca(){const i=[];for(let a=0;a<12;a++){const r=a/12*Math.PI*2;i.push(Nn(120,120,(s,o)=>{const f=s+.5-60,c=o+.5-60,u=Math.hypot(f,c),h=Math.atan2(c,f);if(u>56)return null;if(u>44){if(u<47.5)return[255,235,190,255];const b=xn(Math.exp(-(u-47.5)/3)*.55,s,o,2);return b?En([[120,90,220],[190,160,255]],[60,110],b):null}const p=(.5+.5*Math.sin(3*h+.36*(44-u)-r))*(.3+.7*(1-u/44))+Math.exp(-u/6)*.9,m=xn(Math.min(1,p),s,o,4);return En([[20,10,70],[60,40,170],[90,130,240],[190,230,255]],[255,255,255,255],Math.max(1,m))}))}return i.fps=8,i},teia(){const t=Array.from({length:17},(r,s)=>[12+It(s,150,1)*146,10+It(s,150,2)*104]),i=[];for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const o=Math.hypot(t[r][0]-t[s][0],t[r][1]-t[s][1]);o<58&&i.push([r,s,o])}const a=(r,s,[o,f],[c,u])=>{const h=c-o,d=u-f,p=Math.max(0,Math.min(1,((r-o)*h+(s-f)*d)/(h*h+d*d)));return Math.hypot(r-(o+h*p),s-(f+d*p))};return Nn(170,124,(r,s,o,f)=>{let c=0;for(const[h,d,p]of i){const m=a(r+.5,s+.5,t[h],t[d]);c+=Math.exp(-((m/1.1)**2))*(1-p/62)*(.5+gn(r*.2,s*.2,151))}for(const[h,d]of t)c+=Math.exp(-((Math.hypot(r-h,s-d)/3.4)**2))*1.2;const u=xn(Math.min(1,c),r,s,4);return u?En([[50,35,130],[100,80,220],[175,155,255],[255,232,175]],[90,150,210,255],u):null})}},c_={},f_=n=>c_[n]??=l_[n](),mr=[{nivel:0,nome:"NEBULOSA DE ÓRION",base:"#120a24",tom:"200, 60, 140",nebulosas:["150, 40, 120","60, 70, 170","190, 70, 110"],objetos:["orion","pleiades"],planetas:.6},{nivel:0,nome:"PILARES DA CRIAÇÃO",base:"#0b1519",tom:"220, 130, 50",nebulosas:["40, 120, 120","190, 110, 50","60, 100, 60"],objetos:["pilares"],planetas:.5},{nivel:0,nome:"NEBULOSA DO CARANGUEJO",base:"#0a1020",tom:"255, 120, 60",nebulosas:["70, 110, 200","200, 90, 50"],objetos:["caranguejo"],planetas:.7},{nivel:0,nome:"CABEÇA DE CAVALO",base:"#14060f",tom:"200, 40, 70",nebulosas:["170, 30, 70","110, 30, 100"],objetos:["cavalo"],planetas:.5},{nivel:0,nome:"NEBULOSA DA HÉLICE",base:"#07151a",tom:"60, 220, 230",nebulosas:["30, 130, 140","170, 60, 50"],objetos:["helice"],planetas:.6},{nivel:1,nome:"GALÁXIA DE ANDRÔMEDA",base:"#090a1c",tom:"120, 140, 255",nebulosas:["60, 60, 160","100, 50, 150"],objetos:["andromeda","sombrero"],planetas:.8},{nivel:1,nome:"GALÁXIA DO SOMBRERO",base:"#100d14",tom:"255, 200, 140",nebulosas:["150, 100, 60","80, 60, 120"],objetos:["sombrero","andromeda"],planetas:.8},{nivel:1,nome:"QUASAR",base:"#080a18",tom:"140, 200, 255",nebulosas:["40, 60, 180","120, 40, 160"],objetos:["quasar","pleiades"],planetas:.5},{nivel:2,nome:"BURACO NEGRO SUPERMASSIVO",base:"#05040a",tom:"255, 150, 60",nebulosas:["120, 50, 20","60, 30, 90"],objetos:["buraconegro"],planetas:.15},{nivel:2,nome:"TESSERACT",base:"#04060f",tom:"120, 220, 255",nebulosas:["30, 60, 140","100, 40, 160"],objetos:["tesseract"],planetas:.1},{nivel:2,nome:"PULSAR",base:"#060712",tom:"110, 200, 255",nebulosas:["50, 40, 150","20, 80, 140"],objetos:["pulsar"],planetas:.15},{nivel:2,nome:"PONTE DE EINSTEIN-ROSEN",base:"#07041a",tom:"160, 130, 255",nebulosas:["80, 50, 200","30, 100, 200"],objetos:["minhoca"],planetas:.1},{nivel:2,nome:"TEIA CÓSMICA",base:"#05050f",tom:"170, 150, 255",nebulosas:["70, 50, 170","150, 110, 60"],objetos:["teia","buraconegro"],planetas:.1}];let u_=null;const Wd=()=>u_??=Hd.map((n,e)=>i_(n,e*13+3));function d_(n,e){const t=Wd(),i=document.createElement("canvas");i.width=n,i.height=e;const a=i.getContext("2d");a.imageSmoothingEnabled=!1;let r=[],s=2,o=-1,f=-1,c=1;function u(m){if(c<1&&(c=Math.min(1,c+m/1.8)),s-=m,s<=0){s=2.5+Math.random()*4;const b=.35+Math.random()*.3,_=190+Math.random()*90;r.push({x:Math.random()*n*.8,y:-4,vx:Math.cos(b)*_,vy:Math.sin(b)*_,vida:0,max:1.4})}for(const b of r)b.x+=b.vx*m,b.y+=b.vy*m,b.vida+=m;r=r.filter(b=>b.vida<b.max&&b.x<n+20&&b.y<e+20)}function h(m,b,_,x,T,C){const S=m*_,E=b*_,R=Math.floor((S-n/2-T)/x),L=Math.floor((S+n/2+T)/x),M=Math.floor((E-e/2-T)/x),P=Math.floor((E+e/2+T)/x);for(let I=M;I<=P;I++)for(let F=R;F<=L;F++)C(F,I,F*x-S+n/2,I*x-E+e/2)}function d(m,b,_,x,T){const C=mr[T%mr.length],S=T%mr.length;m.fillStyle=C.base,m.fillRect(0,0,n,e),h(b,_,.06,400,160,(E,R,L,M)=>{if(It(E,R,90+S)>.7)return;const P=70+It(E,R,91)*80,I=C.nebulosas[Math.floor(It(E,R,92)*C.nebulosas.length)],F=L+It(E,R,93)*400,V=M+It(E,R,94)*400;for(let $=0;$<5;$++)m.fillStyle=`rgba(${I}, 0.07)`,m.beginPath(),m.arc(Math.round(F),Math.round(V),Math.max(0,P*(1-$*.18)),0,Math.PI*2),m.fill()}),h(b,_,.1,360,170,(E,R,L,M)=>{if(It(E,R,200+S*3)>.8)return;const P=f_(C.objetos[Math.floor(It(E,R,201)*C.objetos.length)]),I=Array.isArray(P)?P[Math.floor(x*P.fps+It(E,R,204)*P.length)%P.length]:P,F=L+(.1+It(E,R,202)*.6)*360,V=M+(.1+It(E,R,203)*.6)*360;m.globalAlpha=.92,m.drawImage(I,Math.round(F-I.width/2),Math.round(V-I.height/2)),m.globalAlpha=1}),m.fillStyle=`rgba(${C.tom}, 0.05)`,m.fillRect(0,0,n,e),r_.forEach((E,R)=>{m.globalAlpha=E.alfa,h(b,_,E.f,E.cel,130,(L,M,P,I)=>{if(It(L,M,E.semente)>E.prob*(C.planetas??1))return;const F=Math.floor(It(L,M,E.semente+1)*t.length),V=E.escalaMax>1&&Hd[F].r<=15&&It(L,M,E.semente+2)<.4?2:1,$=t[F],B=P+(.15+It(L,M,E.semente+3)*.7)*E.cel,Y=I+(.15+It(L,M,E.semente+4)*.7)*E.cel;m.drawImage($,Math.round(B-$.width*V/2),Math.round(Y-$.height*V/2),$.width*V,$.height*V)});for(const L of o_){if(L.camada!==R)continue;const M=t[L.tipo],P=L.x-b*E.f+n/2,I=L.y-_*E.f+e/2;m.drawImage(M,Math.round(P-M.width*L.escala/2),Math.round(I-M.height*L.escala/2),M.width*L.escala,M.height*L.escala)}m.globalAlpha=1});for(const E of a_)h(b,_,E.f,E.cel,4,(R,L,M,P)=>{for(let I=0;I<E.n;I++){const F=Math.round(M+It(R,L,I*7+1)*E.cel),V=Math.round(P+It(R,L,I*7+2)*E.cel);if(F<-2||F>n+2||V<-2||V>e+2)continue;const $=E.cores[Math.floor(It(R,L,I*7+3)*E.cores.length)],B=It(R,L,I*7+4)*6.28,Y=1+It(R,L,I*7+5)*2.2;(!E.pisca||Math.sin(x*Y+B)>-.35)&&(m.fillStyle=$,m.fillRect(F,V,1,1),E.grande&&It(R,L,I*7+6)<E.grande&&(m.fillRect(F-1,V,3,1),m.fillRect(F,V-1,1,3)))}})}function p(m,b,_,x,T=0){T!==o&&(f=o,o=T,c=f<0?1:0),c<1&&f>=0?(d(m,b,_,x,f),d(a,b,_,x,o),m.globalAlpha=c,m.drawImage(i,0,0),m.globalAlpha=1):d(m,b,_,x,o);for(const C of r){const S=1-C.vida/C.max;for(let E=0;E<12;E++){const R=Math.round(C.x-C.vx*E*.011),L=Math.round(C.y-C.vy*E*.011);m.globalAlpha=Math.max(0,S*(1-E/12)),m.fillStyle=E<2?"#ffffff":"#8bd3ff",m.fillRect(R,L,E<2?2:1,E<2?2:1)}m.globalAlpha=1}}return{desenhar:p,passo:u}}const Rn=520,va=(n,e,t=0)=>{let i=Math.imul(n|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1274126177)|0;return i=Math.imul(i^i>>>13,1103515245),i^=i>>>16,(i>>>0)/4294967296};function h_({inicioX:n,inicioY:e,rochasSpr:t}){const i=new Map,a=t.map(d=>{const p=d.quadros[0],m=document.createElement("canvas");m.width=p.width,m.height=p.height;const b=m.getContext("2d");return b.drawImage(p,0,0),b.globalCompositeOperation="source-atop",b.fillStyle="rgba(70, 40, 110, 0.55)",b.fillRect(0,0,m.width,m.height),m}),r=(d,p,m=0)=>Math.hypot(d-n,p-e)>300+m;function s(d,p){const m={circ:[],zonas:[],planetas:[],rochas:[]},b=C=>va(d,p,300+C),_=d*Rn,x=p*Rn;if(b(1)>=.5)return m;const T=b(2);if(T<.22){const C=Wd(),S=Math.floor(b(3)*C.length),E=C[S],R=(E.height-2)/2,L=R>=13?2:3,M=_+90+b(4)*(Rn-180),P=x+90+b(5)*(Rn-180);if(r(M,P,70)){const I=R*L*.92;m.planetas.push({x:M,y:P,spr:E,esc:L}),m.circ.push({x:M,y:P,r:I})}}else if(T<.62){const C=b(5)*Math.PI*2,S=150+b(6)*130,E=(b(7)-.5)*70,R=_+120+b(8)*(Rn-240),L=x+120+b(9)*(Rn-240),M=(.2+.6*b(10))*S,P=b(11)<.5?(M/S+.4)%1*S:-999,I=Math.floor(S/13);for(let F=0;F<=I;F++){const V=F/I,$=V*S;if(Math.abs($-M)<24||Math.abs($-P)<24)continue;const B=Math.sin(V*Math.PI)*E,Y=R+Math.cos(C)*$-Math.sin(C)*B,re=L+Math.sin(C)*$+Math.cos(C)*B;if(!r(Y,re,10))continue;const te=va(d*31+F,p,330)<.6?0:1,ve=[8,10][te];m.rochas.push({x:Y,y:re,tam:te}),m.circ.push({x:Y,y:re,r:ve*.85})}}else{const C=70+b(11)*50,S=_+C+b(12)*(Rn-2*C),E=x+C+b(13)*(Rn-2*C);if(r(S,E,C)){const R=Array.from({length:34},(L,M)=>{const P=va(d,p,400+M)*Math.PI*2,I=Math.sqrt(va(d,p,440+M))*C*.95;return{dx:Math.cos(P)*I,dy:Math.sin(P)*I,tam:1+Math.floor(va(d,p,480+M)*3),cor:va(d,p,520+M)<.5?"#9a8a7a":"#6a5a50",fase:va(d,p,560+M)*6.28}});m.zonas.push({x:S,y:E,r:C,pedrinhas:R})}}return m}const o=(d,p)=>{const m=d+","+p;let b=i.get(m);return b||(b=s(d,p),i.set(m,b)),b};function f(d,p,m){const b=Math.floor(d/Rn),_=Math.floor(p/Rn);for(let x=-1;x<=1;x++)for(let T=-1;T<=1;T++)m(o(b+T,_+x))}function c(d,p){let m=1;return f(d,p,b=>{for(const _ of b.zonas)Math.hypot(d-_.x,p-_.y)<_.r&&(m=Math.min(m,.5))}),m}function u(d,p,m=null,b=0){let _=!1;return f(d.x,d.y,x=>{for(const T of x.circ){const C=d.x-T.x,S=d.y-T.y,E=T.r+p;if(Math.abs(C)>E||Math.abs(S)>E)continue;const R=Math.hypot(C,S)||.001;if(R>=E)continue;const L=C/R,M=S/R;if(d.x=T.x+L*E,d.y=T.y+M*E,_=!0,m&&b>0){const P=-M,I=L,F=Math.sign((m.x-d.x)*P+(m.y-d.y)*I)||((d.fase||0)>3?1:-1);d.x+=P*F*b,d.y+=I*F*b}}}),_}function h(d,p,m,b,_,x){const T=Math.floor((p-200)/Rn),C=Math.floor((p+b+200)/Rn),S=Math.floor((m-200)/Rn),E=Math.floor((m+_+200)/Rn),R=(L,M,P)=>L>p-P&&L<p+b+P&&M>m-P&&M<m+_+P;for(let L=S-1;L<=E+1;L++)for(let M=T-1;M<=C+1;M++){const P=o(M,L);for(const I of P.zonas)if(R(I.x,I.y,I.r+10)){for(let F=0;F<4;F++)d.fillStyle="rgba(150, 115, 80, 0.07)",d.beginPath(),d.arc(Math.round(I.x),Math.round(I.y),I.r*(1-F*.2),0,Math.PI*2),d.fill();d.save(),d.strokeStyle="rgba(200, 160, 110, 0.4)",d.lineWidth=1,d.setLineDash([3,5]),d.beginPath(),d.arc(Math.round(I.x),Math.round(I.y),I.r,0,Math.PI*2),d.stroke(),d.restore();for(const F of I.pedrinhas)d.fillStyle=F.cor,d.fillRect(Math.round(I.x+F.dx+Math.sin(x*.6+F.fase)*2),Math.round(I.y+F.dy+Math.cos(x*.5+F.fase)*2),F.tam,F.tam)}for(const I of P.planetas)R(I.x,I.y,I.spr.width*I.esc)&&(d.drawImage(I.spr,Math.round(I.x-I.spr.width*I.esc/2),Math.round(I.y-I.spr.height*I.esc/2),I.spr.width*I.esc,I.spr.height*I.esc),d.save(),d.strokeStyle="rgba(255, 236, 190, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(Math.round(I.x),Math.round(I.y),(I.spr.height-2)/2*I.esc+4,0,Math.PI*2),d.stroke(),d.restore());for(const I of P.rochas){if(!R(I.x,I.y,20))continue;const F=a[I.tam];d.drawImage(F,Math.round(I.x-F.width/2),Math.round(I.y-F.height/2))}}}return{fatorLento:c,empurrar:u,desenhar:h,celula:o}}const hi="#0b1026",ms=[{nome:"Original",olho:"#ffffff",slime:["#5be37a","#3fb85b"],morcego:["#7c3fd6","#a56bff"],ogro:["#e0483a","#c23326"],fantasma:"#c9d8ff",atirador:["#ffb02e","#c87a10"],inseto:["#8a6a3a","#5a4220"],chefe:["#4a5a8a","#8a9ad0"]},{nome:"Gelo",olho:"#ffffff",slime:["#5bd6ff","#2f9acb"],morcego:["#3f7cd6","#6ba5ff"],ogro:["#3a8ae0","#2a62b0"],fantasma:"#e8f6ff",atirador:["#9be0ff","#5a9ac0"],inseto:["#5a8aa8","#3a6280"],chifres:!0,chefe:["#3a6aa8","#8bd3ff"]},{nome:"Fogo",olho:"#ffff66",slime:["#ff8a3a","#c4551f"],morcego:["#d6403f","#ff6b5a"],ogro:["#ff5a2a","#c43318"],fantasma:"#ffd8b0",atirador:["#ff3b4a","#a01f2a"],inseto:["#c43318","#7a1f0f"],chifres:!0,espinhos:!0,chefe:["#a8402a","#ff8a3a"]},{nome:"Tóxico",olho:"#ff66ff",slime:["#b24bff","#7a2fc4"],morcego:["#3fd66b","#6bff95"],ogro:["#7a2fc4","#5a1f94"],fantasma:"#d8ffc9",atirador:["#7dff3a","#3a9a1f"],inseto:["#4a8a2f","#2f5a1f"],tresOlhos:!0,chefe:["#5a2f94","#7dff3a"]},{nome:"Ouro",olho:"#ff3b4a",slime:["#ffd23f","#c9971a"],morcego:["#c9971a","#ffe27a"],ogro:["#d9a21a","#a8760f"],fantasma:"#fff4c9",atirador:["#fff08a","#c9b03a"],inseto:["#a8760f","#6a4a0a"],chifres:!0,chefe:["#a8760f","#ffe27a"]},{nome:"Sombrio",olho:"#ff2a2a",slime:["#4a4a5a","#2a2a38"],morcego:["#2a2a38","#4a4a5a"],ogro:["#3a3a48","#1f1f2a"],fantasma:"#9a9ab0",atirador:["#6a6a80","#3a3a4a"],inseto:["#2a2a38","#14141c"],chifres:!0,espinhos:!0,tresOlhos:!0,chefe:["#2a2a38","#ff2a2a"]}],ea=n=>({quadros:n,brancos:n.map(zc)});function p_(n){const e=ms[n%ms.length],t=(c,u,h,d)=>{c.poligono([[u,d+3],[u+1,d-1],[u+3,d+3]],"#eef1f5"),c.poligono([[h,d+3],[h+2,d-1],[h+3,d+3]],"#eef1f5")},i=ea([0,1].map(c=>{const u=_n(16,16),h=c?10:9.5;if(u.elipse(8,h,c?6.5:6,c?3.6:4.3,e.slime[0]),u.elipse(8,c?11:10.8,c?5.6:5,2,e.slime[1]),e.espinhos)for(const d of[4,6,8,10,12])u.pixel(d,c?7:6,e.slime[1]);return e.chifres&&t(u,4,10,c?3:2),u.retangulo(4,c?8:7,2,2,e.olho),u.retangulo(9,c?8:7,2,2,e.olho),u.pixel(5,c?9:8,"#1b1020"),u.pixel(10,c?9:8,"#1b1020"),e.tresOlhos&&(u.retangulo(7,c?6:5,2,2,e.olho),u.pixel(8,c?7:6,"#1b1020")),u.contorno(hi).c})),a=ea([0,1].map(c=>{const u=_n(18,16),h=c?[[8,9],[1,14],[4,8]]:[[8,8],[1,4],[4,10]];if(u.poligono(h,e.morcego[0]),u.poligono(h.map(([d,p])=>[17-d,p]),e.morcego[0]),u.disco(8,9,3,e.morcego[1]),u.pixel(7,8,e.olho),u.pixel(10,8,e.olho),u.pixel(6,5,e.morcego[1]),u.pixel(11,5,e.morcego[1]),e.chifres&&(u.poligono([[6,7],[5,3],[8,7]],"#eef1f5"),u.poligono([[11,7],[12,3],[9,7]],"#eef1f5")),e.espinhos)for(const d of[6,8,10])u.pixel(d,5,e.morcego[0]);return u.contorno(hi).c})),r=ea([0,1].map(c=>{const u=_n(20,20);u.disco(10,12+c,7,e.ogro[0]),u.disco(10,13+c,5,e.ogro[1]);const h=e.chifres?"#ffffff":"#cfd6df";if(u.poligono([[3,7+c],[5,1+c],[7,7+c]],h),u.poligono([[13,7+c],[15,1+c],[17,7+c]],h),e.espinhos)for(const d of[7,9,11,13])u.pixel(d,5+c,e.ogro[1]);return u.retangulo(5,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.retangulo(11,10+c,4,2,e.olho==="#ffffff"?"#ffe14a":e.olho),u.pixel(8,11+c,"#1b1020"),u.pixel(11,11+c,"#1b1020"),e.tresOlhos&&(u.retangulo(9,8+c,2,2,e.olho),u.pixel(10,9+c,"#1b1020")),u.retangulo(7,15+c,6,2,"#1b1020"),u.pixel(8,15+c,"#ffffff"),u.pixel(11,15+c,"#ffffff"),u.contorno(hi).c})),s=ea([0,1].map(c=>{const u=_n(14,17);u.disco(7,7,5,e.fantasma),u.retangulo(2,7,11,7,e.fantasma);for(let h=2;h<13;h+=2)((h-2)/2+c)%2===0&&u.retangulo(h,14,2,1,e.fantasma);return e.chifres&&t(u,3,8,1),u.retangulo(4,5,2,3,"#1b1020"),u.retangulo(8,5,2,3,"#1b1020"),u.pixel(4,5,e.olho),u.pixel(8,5,e.olho),u.retangulo(6,10,3,2,"#1b1020"),e.tresOlhos&&u.retangulo(6,3,2,2,"#1b1020"),u.contorno(hi).c})),o=ea([0,1].map(c=>{const u=_n(16,17);return u.pixel(8,0,c?"#ff3b4a":"#ffd23f"),u.retangulo(8,1,1,2,e.atirador[1]),u.disco(8,8,5,e.atirador[0]),u.disco(8,8,3,e.atirador[1]),u.retangulo(5,6,6,5,"#ffffff"),u.retangulo(7,7,3,3,"#ff3b4a"),u.pixel(8,8,"#1b1020"),u.retangulo(6,13,4,3,"#6a6a80"),u.retangulo(7,15,2,1,"#cfd6e0"),e.chifres&&t(u,3,9,1),u.contorno(hi).c})),f=ea([0,1].map(c=>{const u=_n(12,10);u.elipse(6,5.5,4,2.8,e.inseto[0]),u.disco(6,3,2,e.inseto[1]),u.pixel(5,2,e.olho),u.pixel(7,2,e.olho);const h=c?[[1,7],[3,8],[9,8],[11,7]]:[[1,8],[3,7],[9,7],[11,8]];for(const[d,p]of h)u.pixel(d,p,e.inseto[1]);return e.chifres&&(u.pixel(4,0,"#eef1f5"),u.pixel(8,0,"#eef1f5")),u.contorno(hi).c}));return{slime:i,morcego:a,ogro:r,fantasma:s,atirador:o,inseto:f}}function m_(n){const e=ms[n%ms.length];return ea([0,1].map(t=>{const i=_n(56,38);i.poligono([[28,2],[44,10],[54,24],[46,34],[10,34],[2,24],[12,10]],e.chefe[0]),i.poligono([[28,6],[40,12],[28,20],[16,12]],e.chefe[1]),i.poligono([[2,24],[12,10],[14,26]],"#2a2a38"),i.poligono([[54,24],[44,10],[42,26]],"#2a2a38"),i.disco(28,14,6,"#8bd3ff"),i.disco(28,14,3,"#ffffff"),i.pixel(27,13,"#8bd3ff"),i.retangulo(7,26,7,9,"#3a3a48"),i.retangulo(42,26,7,9,"#3a3a48"),i.retangulo(25,28,6,6,"#3a3a48"),i.retangulo(8,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(43,34,5,2,t?"#ffd23f":"#ff7a3a"),i.retangulo(26,34,4,2,t?"#ffd23f":"#ff7a3a");for(const a of[14,22,34,42])i.pixel(a,22,t?"#ff3b4a":"#6a2a2a");return i.contorno(hi).c}))}function g_(){return ea([0,1].map(n=>{const e=_n(34,40);return e.elipse(17,30+n,8,8,"#4a2f94"),e.elipse(17,31+n,6,6,"#6a4fc4"),e.elipse(17,14+n,12,13,"#7ad8a0"),e.elipse(17,17+n,10,9,"#4aa878"),e.elipse(17,13+n,10,10,"#7ad8a0"),e.poligono([[6,12+n],[14,15+n],[14,20+n],[8,19+n]],"#0b1026"),e.poligono([[28,12+n],[20,15+n],[20,20+n],[26,19+n]],"#0b1026"),e.pixel(9,14+n,"#ffffff"),e.pixel(10,14+n,"#ffffff"),e.pixel(24,14+n,"#ffffff"),e.pixel(25,14+n,"#ffffff"),e.retangulo(15,23+n,4,1,"#2a6a4a"),e.pixel(17,1+n,"#ff3bd4"),e.retangulo(17,2+n,1,3,"#7ad8a0"),e.disco(4,30+n,2,n?"#ff3bd4":"#ffd23f"),e.disco(30,30+n,2,n?"#ffd23f":"#ff3bd4"),e.contorno(hi).c}))}function _l(n,e){let t=Math.imul(n,374761393)^Math.imul(e,668265263)|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function x_(){return[8,10,13].map((n,e)=>{const t=n*2+6,i=t/2,a=t/2,r=Array.from({length:11},(o,f)=>{const c=f/11*Math.PI*2,u=n*(.8+_l(e*7+1,f)*.35);return[i+Math.cos(c)*u,a+Math.sin(c)*u]}),s=(o,f,c)=>r.map(([u,h])=>[i+(u-i)*o+f,a+(h-a)*o+c]);return{r:n,quadros:[0,1,2].map(o=>{const f=_n(t,t);f.poligono(r,"#5a606c"),f.poligono(s(.88,-.7,-.7),"#7a808d"),f.poligono(s(.6,-1.6,-1.6),"#9aa0ad");for(let c=0;c<3+e;c++)f.disco(Math.round(i+(_l(e,c+20)-.5)*n*1.2),Math.round(a+(_l(e,c+40)-.5)*n*1.2),1,"#4a4f5a");return o>=1&&(f.linha(i-n*.2,a-n*.8,i+n*.1,a,"#23262e"),f.linha(i+n*.1,a,i-n*.3,a+n*.7,"#23262e")),o>=2&&(f.linha(i+n*.1,a,i+n*.85,a-n*.2,"#23262e"),f.linha(i-n*.5,a+n*.2,i-n*.9,a-n*.1,"#23262e")),f.contorno(hi).c})}})}function v_(){const n=t=>{const i=_n(12,12);return t(i),i.contorno(hi).c},e=(t,i,a)=>Array.from({length:t*2},(r,s)=>{const o=Math.PI/t*s-Math.PI/2,f=s%2?a:i;return[6+Math.cos(o)*f,6+Math.sin(o)*f]});return{ima:n(t=>{t.retangulo(1,1,3,8,"#e63946"),t.retangulo(8,1,3,8,"#4a7cff"),t.retangulo(1,8,10,3,"#c9cdd8"),t.retangulo(1,1,3,2,"#ffffff"),t.retangulo(8,1,3,2,"#ffffff")}),explosao:n(t=>{t.poligono(e(8,5.6,2.8),"#ffd23f"),t.poligono(e(8,3.8,2),"#ff7a3a"),t.disco(6,6,1,"#ffffff")}),coracao:n(t=>{t.disco(4,4,2,"#ff3b4a"),t.disco(8,4,2,"#ff3b4a"),t.poligono([[1.5,5],[10.5,5],[6,10.5]],"#ff3b4a"),t.pixel(3,3,"#ffb3ba")}),escudo:n(t=>{t.poligono([[6,.5],[11,2.5],[10,8],[6,11.5],[2,8],[1,2.5]],"#4aa8ff"),t.poligono([[6,2],[9,3.5],[8.5,7.5],[6,9.5],[3.5,7.5],[3,3.5]],"#8bd3ff")}),turbo:n(t=>{t.poligono([[7,.5],[2.5,6.5],[5.5,6.5],[4.5,11.5],[9.5,5],[6.5,5]],"#ffe14a")}),moedaEsp:n(t=>{t.disco(6,6,5,"#38c8ff"),t.disco(6,6,4,"#ffd23f"),t.disco(6,6,2,"#c9971a"),t.pixel(5,5,"#ffffff")}),...Object.fromEntries([["estrelaVermelha","#ff3b4a","#ff9aa6"],["estrelaAmarela","#ffd23f","#fff4a8"],["estrelaAzul","#3f8cff","#9cc8ff"],["estrelaRoxa","#a56bff","#d9c2ff"]].map(([t,i,a])=>[t,n(r=>{r.poligono(e(5,5.6,2.4),i),r.poligono(e(5,3.4,1.5),a),r.pixel(6,6,"#ffffff")})]))}}function __(n,e,t,i,a=1,r=22){n.globalAlpha=a;const s=Math.round(e),o=Math.round(t);for(let f=-r;f<=r;f++)for(let c=-r;c<=r;c++){const u=Math.hypot(c,f);if(u>r)continue;let h;if(u<7)h="#030308";else{const d=Math.sin(Math.atan2(f,c)*3-u*.5+i*3.2);if(u>11&&d<-.25)continue;h=u<9?"#ffd23f":u<12?"#ff8a3a":u<16?"#c43fff":u<19.5?"#6a2fd0":"#2a1470",d>.7&&u<17&&(h="#ffffff")}n.fillStyle=h,n.fillRect(s+c,o+f,1,1)}n.globalAlpha=1}const vc="#0b1026",M_=n=>({quadros:n,brancos:n.map(zc)}),pt=(n,e,t)=>M_([0,1].map(i=>{const a=_n(n,e);return t(a,i),a.contorno(vc).c})),S_=(n,e,t,i=1,a=0,r=0)=>e.forEach((s,o)=>[...s].forEach((f,c)=>{const u=t[f];u&&n.retangulo(a+c*i,r+o*i,i,i,u)})),Ki=(n,e,t,i,a,r=1,s=0,o=0)=>pt(n,e,(f,c)=>S_(f,c?i:t,a,r,s,o)),oa=(n,e)=>n.map(([t,i])=>[e-1-t,i]),Xd=(n,e,t,i)=>e.forEach(([a,r,s,o],f)=>n.linha(a,r,s+((f+t)%2?1:0),o,i)),Tu=["..x.....x..","...x...x...","..xxxxxxx..",".xxyxxxyxx.","xxxxxxxxxxx","x.xxxxxxx.x","x.x.....x.x","...xx.xx..."],wu=["..x.....x..","x..x...x..x","x.xxxxxxx.x","xxxyxxxyxxx","xxxxxxxxxxx",".xxxxxxxxx.","..x.....x..",".x.......x."];function y_(){const n=f=>({x:f,y:"#ffffff"}),e=Ki(16,12,Tu,wu,n("#5be37a"),1,2,2),t=Ki(18,12,["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx","..x..x..",".x.xx.x.","x.x..x.x"],["...xx...","..xxxx..",".xxxxxx.","xx.xx.xx","xxxxxxxx",".x.xx.x.","x......x",".x....x."],n("#5bd6ff"),1,5,2),i=Ki(20,12,[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".rryrryrryrryrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],[".....rrrrrr.....","...rrrrrrrrrr...","..rrrrrrrrrrrr..",".ryrryrryrryrrr.","rrrrrrrrrrrrrrrr","..rrr..rr..rrr..","...r........r..."],{r:"#ff4a4a",y:"#ffe14a"},1,2,2),a=Ki(16,12,["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","...xx..xx...","..xx.xx.xx..","xx........xx"],["....xxxx....",".xxxxxxxxxx.","xxxxxxxxxxxx","xxx..xx..xxx","xxxxxxxxxxxx","..xxx..xxx..",".xx..xx..xx.","..xx....xx.."],n("#ff6bd0"),1,2,2),r=Ki(16,12,[".......y.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],[".......r.......","......xxx......","......xxx......",".xxxxxxxxxxxxx.","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx"],{x:"#ff9a3a",y:"#ffe14a",r:"#ff3b4a"},1,0,2),s=Ki(12,8,[".x...x.","..xxx..",".xx.xx.","xxxxxxx","x.x.x.x"],[".x...x.","..xxx..",".xx.xx.","xxxxxxx",".x...x."],n("#ffe14a"),1,2,1),o=Ki(56,38,Tu,wu,{x:"#d6293e",y:"#ffe14a"},4,6,3);return{m:{slime:e,morcego:t,ogro:i,fantasma:a,atirador:r,inseto:s},chefe:o}}function b_(){const n=Ki(16,8,["......ssss......",".....sSSSSs.....","....sSssssSs..e.","....sSsSSsSs..b.",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.",".bbbbbbbbbbbb..."],["......ssss......",".....sSSSSs.....","....sSssssSs.e..","....sSsSSsSs.b..",".k..sSssssSs.bb.",".bbbsSSSSSSsbbb.","bbbbbbbbbbbbbbb.","..bbbbbbbbbbb..."],{s:"#b3601a",S:"#ffb84a",b:"#7acb5a",e:"#ff3b4a",k:"#1b1020"},1,0,4),e=pt(18,14,(o,f)=>{const c=f?[[9,8],[1,12],[2,6]]:[[9,6],[1,1],[3,8]],u=f?[[9,8],[3,13],[6,9]]:[[9,7],[4,4],[6,9]];o.poligono(c,"#a56bff"),o.poligono(oa(c,18),"#a56bff"),o.poligono(u,"#d1b0ff"),o.poligono(oa(u,18),"#d1b0ff"),o.disco(f?4:3,f?10:4,1,"#ffe14a"),o.disco(f?13:14,f?10:4,1,"#ffe14a"),o.elipse(9,8,1.6,4.5,"#2a1a3a"),o.pixel(8,3,"#2a1a3a"),o.pixel(10,3,"#2a1a3a"),o.pixel(8,4,"#ff3b4a"),o.pixel(10,4,"#ff3b4a")}),t=pt(20,18,(o,f)=>{o.elipse(10,11,8,6.5,"#2a6a4a"),o.elipse(8,9,5,3,"#4ab87a"),o.linha(10,5,10,17,"#14301f"),o.disco(10,5,3,"#1b2a2a"),o.poligono([[9,3],[10,0],[11,3]],"#e8e0c0"),o.pixel(8,5,"#ff3b4a"),o.pixel(12,5,"#ff3b4a");for(const c of[0,1,2]){const u=8+c*3;o.linha(3,u,1,u+1+(f?2:0),"#1b2a2a"),o.linha(17,u,19,u+1+(f?0:2),"#1b2a2a")}}),i=pt(14,17,(o,f)=>{const c=f?1:0;o.elipse(3,6+c,3,1.6,"#bfe6ff"),o.elipse(10,6+c,3,1.6,"#bfe6ff"),o.elipse(7,12,3,4,"#ffd23f"),o.retangulo(4,10,7,1,"#1b1020"),o.retangulo(4,13,7,1,"#1b1020"),o.retangulo(7,15,1,2,"#cfd6e0"),o.disco(7,6,3,"#1b1020"),o.disco(7,3,2,"#ffd23f"),o.pixel(6,3,"#ff3b4a"),o.pixel(8,3,"#ff3b4a")}),a=pt(16,17,(o,f)=>{o.elipse(8,12,4,3,"#c9771a"),o.elipse(8,11,3,2,"#e0933a"),o.linha(8,9,11,6,"#c9771a"),o.linha(11,6,10,3,"#c9771a"),o.linha(10,3,9,2,"#c9771a"),o.pixel(9,1,f?"#ff3b4a":"#ffd23f"),o.pixel(10,2,f?"#ff3b4a":"#ffd23f"),o.disco(3,8,2,"#e0933a"),o.disco(13,8,2,"#e0933a"),o.pixel(3,7,vc),o.pixel(13,7,vc),Xd(o,[[5,13,2,16],[6,14,4,16],[10,14,12,16],[11,13,14,16]],f,"#8a4a10"),o.pixel(7,10,"#ff3b4a"),o.pixel(9,10,"#ff3b4a")}),r=pt(12,10,(o,f)=>{o.disco(6,6,2,"#2a3a2a"),o.disco(6,3,2,"#3a5a3a"),o.pixel(5,3,"#ff3b4a"),o.pixel(7,3,"#ff3b4a");const c=f?4:1;o.elipse(2.5,c+1,2.5,1.3,"#bfe6ff"),o.elipse(9.5,c+1,2.5,1.3,"#bfe6ff"),o.pixel(5,8,"#1b2a1a"),o.pixel(7,8,"#1b2a1a")}),s=pt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*6;o.linha(10,u,2,u+6+(f?3:0),"#1b2a2a"),o.linha(46,u,54,u+6+(f?0:3),"#1b2a2a"),o.linha(11,u+1,3,u+7+(f?3:0),"#1b2a2a"),o.linha(45,u+1,53,u+7+(f?0:3),"#1b2a2a")}o.elipse(28,22,22,14,"#2a6a4a"),o.elipse(22,17,13,7,"#4ab87a"),o.linha(28,10,28,36,"#14301f"),o.disco(28,8,8,"#1b2a2a"),o.poligono([[24,5],[20,0],[27,3]],"#e8e0c0"),o.poligono([[32,5],[36,0],[29,3]],"#e8e0c0"),o.disco(25,8,2,"#ff3b4a"),o.disco(31,8,2,"#ff3b4a"),o.pixel(25,8,"#ffffff"),o.pixel(31,8,"#ffffff"),o.poligono([[24,13],[26,17],[28,13]],"#e8e0c0"),o.poligono([[28,13],[30,17],[32,13]],"#e8e0c0"),o.retangulo(10,33,6,3,f?"#ffd23f":"#ff7a3a"),o.retangulo(40,33,6,3,f?"#ffd23f":"#ff7a3a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function E_(){const n=pt(16,16,(o,f)=>{const c=f?0:1;o.disco(8,10+c,6,"#f4efe0"),o.disco(8,10+c,4,"#ff9a3a"),o.disco(8,10+c,2,"#f4efe0"),o.pixel(4,8+c,"#ff9a3a"),o.disco(9,3+c,3,"#f4efe0"),o.pixel(10,3+c,"#1b1020"),o.pixel(10,4+c,"#1b1020"),o.retangulo(7,2+c,4,1,"#8b93a8"),o.linha(8,0+c,8,1+c,"#8b93a8")}),e=pt(18,16,(o,f)=>{const c=f?5:2;o.poligono([[9,0],[11,5],[10,14],[8,14],[7,5]],"#e8e8ef"),o.poligono([[9,0],[10,3],[8,3]],"#ff3b4a"),o.pixel(9,6,"#8bd3ff"),o.poligono([[7,5],[1,5-c/2],[1,7-c/2],[7,8]],"#c9cdd8"),o.poligono([[11,5],[17,5-c/2],[17,7-c/2],[11,8]],"#c9cdd8"),o.poligono([[7,9],[1,9+c/2],[1,11+c/2],[7,12]],"#c9cdd8"),o.poligono([[11,9],[17,9+c/2],[17,11+c/2],[11,12]],"#c9cdd8");for(const[u,h]of[[1,5-c/2],[16,5-c/2],[1,10+c/2],[16,10+c/2]])o.pixel(u,Math.round(h),"#ff3b4a")}),t=pt(20,20,(o,f)=>{o.retangulo(5,4,12,6,"#c9cdd8"),o.retangulo(5,8,12,2,"#8b93a8"),o.retangulo(7,2,8,2,"#aab3c8"),o.poligono([[1,5],[6,3],[6,9],[2,9]],"#aab3c8"),o.pixel(2,7,"#ff3b4a"),o.retangulo(0,8,3,1,"#5a6176");for(const c of[7,14]){const u=f?1:-1;o.retangulo(c,10,2,5,"#aab3c8"),o.retangulo(c+u,15,2,4,"#8b93a8"),o.retangulo(c+u-1,19,4,1,"#5a6176")}o.retangulo(9,6,5,1,"#5a6176")}),i=pt(14,17,(o,f)=>{const c=f?1:0;o.disco(7+c,6,5,"#f4f4fa"),o.poligono([[3+c,5],[6+c,5],[5+c,8],[3+c,7]],"#1b1020"),o.poligono([[11+c,5],[8+c,5],[9+c,8],[11+c,7]],"#1b1020"),o.retangulo(6+c,9,2,2,"#1b1020"),o.retangulo(3,12,8,5,"#f4f4fa"),o.retangulo(3,12,8,1,"#c9cdd8"),o.retangulo(6,13,2,2,"#1b1020")}),a=pt(16,17,(o,f)=>{o.retangulo(2,9,2,5,"#8b93a8"),o.retangulo(12,9,2,5,"#8b93a8"),o.retangulo(2,14,2,2+f,"#ffd23f"),o.retangulo(12,14,2,2+f,"#ffd23f"),o.disco(8,5,4,"#3a8a5a"),o.retangulo(5,4,6,1,"#1b1020"),o.retangulo(7,4,2,4,"#1b1020"),o.retangulo(4,9,8,6,"#3a8a5a"),o.retangulo(4,12,8,1,"#2a6a4a"),o.retangulo(12,10,4,2,"#5a6176"),o.pixel(15,10,f?"#ff3b4a":"#ffd23f")}),r=pt(12,11,(o,f)=>{o.retangulo(0,0,2,11,"#8b93a8"),o.retangulo(10,0,2,11,"#8b93a8"),o.retangulo(0,5,2,1,"#5a6176"),o.retangulo(10,5,2,1,"#5a6176"),o.retangulo(2,5,8,1,"#5a6176"),o.disco(6,5,2,"#5a6176"),o.pixel(6,5,f?"#8bd3ff":"#ffffff")}),s=pt(56,38,(o,f)=>{o.disco(28,19,18,"#8b93a8"),o.disco(27,18,16,"#aab3c8"),o.retangulo(10,19,36,2,"#5a6176");for(let c=12;c<44;c+=4)o.pixel(c,22,"#5a6176"),o.pixel(c+2,16,"#5a6176");o.disco(37,11,6,"#5a6176"),o.disco(37,11,4,"#3a4156"),o.disco(37,11,2,f?"#7dff9a":"#2f8a4a"),o.pixel(37,11,"#ffffff");for(const[c,u]of[[16,28],[22,30],[30,30],[20,10],[14,14]])o.retangulo(c,u,2,1,"#e8f0ff");o.retangulo(10,19,36,1,f?"#ffd23f":"#5a6176")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function A_(){const n=pt(16,14,(o,f)=>{for(let c=0;c<5;c++)o.disco(3+c*2,9+Math.round(Math.sin(c*1.2+f*2.4)*2),2,c%2?"#7ad84a":"#5ab83a");o.disco(13,7,3,"#7ad84a"),o.retangulo(12,5,2,2,"#ffffff"),o.retangulo(14,5,2,2,"#ffffff"),o.pixel(13,6,"#0b1026"),o.pixel(15,6,"#0b1026")}),e=pt(18,16,(o,f)=>{o.disco(9,8,7,"#3a5aff"),o.disco(9,8,5,"#6ab0ff"),o.disco(9,8,3,"#cfe9ff"),o.pixel(9,8,"#ffffff");const c=f?0:1;o.retangulo(8+c,0,1,2,"#ffffff"),o.retangulo(8+c,14,1,2,"#ffffff"),o.retangulo(0,8-c,2,1,"#ffffff"),o.retangulo(16,8-c,2,1,"#ffffff")}),t=pt(22,18,(o,f)=>{Xd(o,[[6,9,2,12],[6,11,2,15],[7,13,3,17],[16,9,20,12],[16,11,20,15],[15,13,19,17]],f,"#3a2008"),o.elipse(11,10,8,6,"#6a3a1a"),o.elipse(11,10,5.5,4,"#8a5a2a"),o.linha(11,5,11,15,"#4a2a10"),o.disco(11,4,3,"#4a2a10"),o.pixel(10,4,"#ff3b4a"),o.pixel(12,4,"#ff3b4a"),o.linha(9,2,f?5:6,0,"#4a2a10"),o.linha(13,2,f?17:16,0,"#4a2a10")}),i=pt(14,17,(o,f)=>{const c=f?1:0;o.elipse(7,6+c,5.5,6,"#a8b0b8"),o.elipse(7,4+c,4,3,"#c0c8d0"),o.poligono([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],"#0b1026"),o.poligono(oa([[2,5+c],[6,7+c],[5,9+c],[2,8+c]],14),"#0b1026"),o.retangulo(6,14+c,2,3,"#8a929a"),o.retangulo(4,12+c,6,2,"#8a929a"),o.pixel(3,6+c,"#ffffff"),o.pixel(10,6+c,"#ffffff")}),a=pt(16,17,(o,f)=>{o.disco(8,4,3,"#f1c9a0"),o.retangulo(5,1,6,2,"#2a1a10"),o.retangulo(5,3,6,2,"#0b1026"),o.pixel(6,3,"#4a5a8a"),o.retangulo(4,8,8,8,"#14141c"),o.poligono([[7,8],[9,8],[8,12]],"#ffffff"),o.retangulo(8,9,1,4,"#14141c"),o.retangulo(2,9,2,5,"#14141c"),o.retangulo(12,9,2,3,"#14141c"),o.retangulo(13,8,3,2,"#c9cdd8"),o.pixel(15,8,f?"#ffffff":"#8bd3ff"),o.pixel(14,7,f?"#8bd3ff":"#ffffff")}),r=pt(12,8,(o,f)=>{o.elipse(6,4,4.5,2.5,"#6a3a1a"),o.elipse(5,3.5,2.5,1.2,"#8a5a2a"),o.disco(10,4,1,"#4a2a10");for(const c of[3,5,7])o.pixel(c+(f?1:0),7,"#3a2008");o.pixel(11,2,"#4a2a10"),o.pixel(11,6,"#4a2a10")}),s=pt(56,38,(o,f)=>{for(const c of[0,1,2]){const u=20+c*5;o.linha(12,u,2,u+8+(f?3:0),"#3a2008"),o.linha(44,u,54,u+8+(f?0:3),"#3a2008"),o.linha(13,u+1,3,u+9+(f?3:0),"#3a2008"),o.linha(43,u+1,53,u+9+(f?0:3),"#3a2008")}o.elipse(28,22,20,14,"#6a3a1a"),o.elipse(24,19,12,8,"#8a5a2a"),o.linha(28,9,28,36,"#4a2a10"),o.disco(28,9,8,"#4a2a10"),o.pixel(24,9,"#ff3b4a"),o.retangulo(22,7,12,3,"#0b1026"),o.retangulo(23,7,4,1,"#4a5a8a"),o.retangulo(29,7,4,1,"#4a5a8a"),o.linha(24,3,f?12:16,0,"#4a2a10"),o.linha(32,3,f?44:40,0,"#4a2a10"),o.retangulo(25,14,6,2,"#2a1008")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function T_(){const n=pt(14,16,(o,f)=>{o.elipse(7,11,5,5,"#8a7a4a"),o.elipse(6,10,3,3,"#b0a070"),o.retangulo(2,13,10,3,"#6a5a30");const c=f?3:1;o.poligono([[2,6],[4,6-c],[6,7]],"#a09060"),o.poligono([[12,6],[10,6-c],[8,7]],"#a09060"),o.poligono([[5,5],[7,4-c],[9,5]],"#a09060"),f&&(o.retangulo(6,3,2,2,"#d9c9a0"),o.pixel(6,2,"#d9c9a0"),o.pixel(8,2,"#d9c9a0"))}),e=pt(18,10,(o,f)=>{for(let c=0;c<6;c++)o.disco(15-c*2.5,5+Math.round(Math.sin(c*1.4+f*3)*2),c===0?2:1,c===0?"#d9b0a0":"#c49a8a");o.pixel(16,4,"#ff3b4a"),o.retangulo(16,6,2,1,"#ffffff"),o.pixel(17,5,"#1b1020")}),t=pt(20,20,(o,f)=>{o.retangulo(6,9,8,7,"#6a5a3a"),o.retangulo(6,11,8,1,"#3a3020"),o.retangulo(7,16,2,4,"#8a7a4a"),o.retangulo(11,16,2,4,"#8a7a4a"),o.retangulo(3,9,3,6,"#8a7a4a"),o.retangulo(14,9,3,6,"#8a7a4a"),o.disco(10,5,4,"#a8b0a0"),o.retangulo(7,4,6,2,"#ff9a3a"),o.pixel(8,4,"#ffffff"),o.pixel(11,4,"#ffffff"),o.retangulo(8,7,4,3,"#4a4a3a"),o.pixel(7,9,"#a8b0a0"),o.pixel(12,9,"#a8b0a0");for(const c of[4,6,13,15])o.linha(c,3,c+(c<10?-2:2),11+(f?1:0),"#2a2010");o.retangulo(14,6,5,2,"#5a6176"),o.pixel(18,6,f?"#ff3b4a":"#7a1f2a")}),i=pt(14,17,(o,f)=>{const c=f?1:0;o.poligono([[10,0+c],[13,4+c],[6,9+c],[3,6+c]],"#1f2a3a"),o.poligono([[10,1+c],[12,4+c],[8,4+c]],"#4a6a8a"),o.poligono([[3,6+c],[6,9+c],[5,11+c],[2,9+c]],"#2a3a4a"),o.pixel(3,9+c,"#ffffff"),o.pixel(5,10+c,"#ffffff"),o.pixel(7,10+c,"#ffffff"),o.retangulo(5,11+c,5,5,"#1f2a3a"),o.linha(10,11+c,13,15,"#1f2a3a")}),a=pt(16,17,(o,f)=>{o.poligono([[5,1],[12,3],[11,8],[4,8]],"#1f2a3a"),o.poligono([[6,2],[11,4],[8,4]],"#4a6a8a"),o.retangulo(4,8,8,4,"#2a3a4a"),o.retangulo(5,9,6,2,f?"#7dff3a":"#3a9a1f");for(const c of[5,7,9])o.pixel(c,8,"#ffffff");o.retangulo(6,12,4,5,"#1f2a3a"),o.pixel(f?7:8,14,"#7dff3a"),o.pixel(f?8:7,15,"#7dff3a")}),r=pt(12,10,(o,f)=>{o.elipse(6,4,3.5,2.5,"#d9c9a0"),o.retangulo(5,5,2,1,"#8a7a4a");for(const c of[1,3,8,10])o.linha(c,3,c<6?c-1:c+1,8+(f?1:0),"#b0a070");o.linha(6,6,6,9,"#b0a070"),o.pixel(6,9,"#8a7a4a")}),s=pt(56,38,(o,f)=>{for(const c of[8,14,42,48])o.linha(c<28?c+6:c-6,20,c,34+(f?1:0),"#1f2a3a");o.elipse(28,24,14,12,"#1f2a3a"),o.elipse(28,26,8,8,"#2a3a4a"),o.poligono([[28,0],[40,6],[44,20],[28,24],[12,20],[16,6]],"#1f2a3a"),o.poligono([[28,2],[36,7],[28,12],[20,7]],"#4a6a8a");for(const c of[18,24,32,38])o.linha(c,4,c+(c<28?-4:4),1,"#4a6a8a");o.retangulo(20,20,16,5,"#0b1026");for(let c=21;c<36;c+=2)o.pixel(c,20,"#ffffff"),o.pixel(c,24,"#ffffff");o.retangulo(25,22,6,2,f?"#7dff3a":"#3a9a1f"),o.poligono([[12,20],[2,28],[4,30],[14,26]],"#2a3a4a"),o.poligono([[44,20],[54,28],[52,30],[42,26]],"#2a3a4a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}function w_(){const n=pt(16,14,(o,f)=>{const c=f?0:1;o.disco(8,8+c,6,"#ffe14a"),o.disco(7,7+c,3,"#fff08a"),o.pixel(5,6+c,"#1b1020"),o.pixel(10,6+c,"#1b1020"),o.poligono([[7,8+c],[9,8+c],[8,10+c]],"#ff9a3a"),o.pixel(8,2+c,"#ffe14a"),o.pixel(9,1+c,"#ffe14a"),o.retangulo(5,13,2,1,"#ff9a3a"),o.retangulo(9,13,2,1,"#ff9a3a")}),e=pt(18,14,(o,f)=>{const c=f?[[9,8],[0,13],[3,7]]:[[9,7],[0,2],[4,9]];o.poligono(c,"#2a2a3a"),o.poligono(oa(c,18),"#2a2a3a"),o.elipse(9,8,3,3.6,"#3a3a4a"),o.disco(9,4,2,"#3a3a4a"),o.poligono([[8,5],[9,7],[10,5]],"#ffb02e"),o.pixel(8,3,"#ffffff"),o.pixel(10,3,"#ffffff"),o.pixel(9,12,"#2a2a3a")}),t=pt(20,20,(o,f)=>{o.elipse(10,12,7.5,7,"#8a5a2a"),o.elipse(10,14,5,4.5,"#d9b88a"),o.disco(10,7,6,"#8a5a2a"),o.poligono([[4,5],[5,0],[8,3]],"#8a5a2a"),o.poligono([[16,5],[15,0],[12,3]],"#8a5a2a"),o.disco(7,7,2,"#ffe14a"),o.disco(13,7,2,"#ffe14a"),o.pixel(7,7,"#0b1026"),o.pixel(13,7,"#0b1026"),o.poligono([[9,9],[11,9],[10,11]],"#ff9a3a");for(const c of[7,10,13])o.pixel(c,14+(f?1:0),"#8a5a2a");o.retangulo(7,19,2,1,"#ff9a3a"),o.retangulo(11,19,2,1,"#ff9a3a")}),i=pt(14,17,(o,f)=>{const c=f?3:0;o.poligono([[7,3],[0,8-c],[3,10],[7,9]],"#ff7a2a"),o.poligono(oa([[7,3],[0,8-c],[3,10],[7,9]],14),"#ff7a2a"),o.elipse(7,8,2.5,4,"#ffb02e"),o.disco(7,4,2,"#ffd23f"),o.pixel(6,3,"#1b1020"),o.pixel(8,3,"#1b1020"),o.pixel(7,1,"#ff3b4a"),o.poligono([[5,11],[7,16],[9,11]],"#ff3b4a"),o.poligono([[6,11],[4,15],[7,12]],"#ffd23f"),o.poligono([[8,11],[10,15],[7,12]],"#ffd23f")}),a=pt(16,17,(o,f)=>{o.elipse(7,11,4.5,4.5,"#1b1020"),o.elipse(7,12,3,3,"#ffffff"),o.disco(6,6,3,"#1b1020"),o.pixel(5,5,"#ffffff"),o.poligono([[8,4],[15,6],[14,8],[8,8]],"#ff9a3a"),o.poligono([[9,5],[14,6],[9,6]],"#ffe14a"),o.pixel(15,8,f?"#ff3b4a":"#ffd23f"),o.retangulo(5,15,2,2,"#ff9a3a"),o.retangulo(8,15,2,2,"#ff9a3a"),o.retangulo(1,11,3,2,"#1b1020")}),r=pt(12,9,(o,f)=>{o.elipse(6,5,3.5,2.5,"#a8744a"),o.disco(9,3,1,"#a8744a"),o.pixel(10,3,"#0b1026"),o.pixel(11,4,"#ffb02e");const c=f?[[5,4],[2,0],[8,4]]:[[5,5],[1,7],[8,5]];o.poligono(c,"#7a4a2a")}),s=pt(56,38,(o,f)=>{const c=f?0:8;o.poligono([[28,14],[2,4+c],[10,14+c],[24,24]],"#5a3a7a"),o.poligono([[28,14],[54,4+c],[46,14+c],[32,24]],"#5a3a7a"),o.poligono([[28,16],[10,10+c],[16,17+c],[26,24]],"#8a6aaa"),o.poligono([[28,16],[46,10+c],[40,17+c],[30,24]],"#8a6aaa"),o.elipse(28,24,7,10,"#3a2a5a"),o.elipse(28,26,4,7,"#d9b88a"),o.disco(28,12,5,"#3a2a5a"),o.poligono([[26,10],[28,0],[30,10]],"#ff3b4a"),o.poligono([[22,12],[14,10],[22,15]],"#ffb02e"),o.poligono([[23,11],[27,13],[27,15],[23,14]],"#ffd23f"),o.poligono([[33,11],[29,13],[29,15],[33,14]],"#ffd23f"),o.pixel(26,13,"#0b1026"),o.pixel(30,13,"#0b1026"),o.poligono([[24,32],[28,37],[32,32]],"#3a2a5a")});return{m:{slime:n,morcego:e,ogro:t,fantasma:i,atirador:a,inseto:r},chefe:s}}const Pi=[{nome:"SLIMES",criar:()=>({m:p_(0),chefe:m_(0)})},{nome:"INVASORES",criar:y_},{nome:"BICHARADA",criar:b_},{nome:"GALÁXIA",criar:E_},{nome:"AGENTES",criar:A_},{nome:"XENO",criar:T_},{nome:"REVOADA",criar:w_}],qd=(n,e,t,i,a,r,s,o=1.5)=>{let f=e,c=t;for(let u=1;u<=8;u++){const h=u/8,d=e+(i-e)*h+Math.sin(h*5+s*2.4)*o*h*2,p=t+(a-t)*h;n.linha(f,c,d,p,r),n.linha(f+1,c,d+1,p,r),f=d,c=p}return[f,c]},R_=()=>pt(34,40,(n,e)=>{for(let t=0;t<6;t++){const i=8+t*3.6,[a,r]=qd(n,i,24,i+(t-2.5)*3,38,"#8a3fd6",e,2.5);n.disco(Math.round(a),Math.round(r),1,"#ff7ab8")}n.elipse(17,14+e,12,12,"#a56bff"),n.elipse(17,9+e,9,6,"#c49bff"),n.disco(11,16+e,4,"#ffffff"),n.disco(23,16+e,4,"#ffffff"),n.disco(12,17+e,2,"#0b1026"),n.disco(22,17+e,2,"#0b1026"),n.retangulo(14,24+e,6,2,"#3a1a5a");for(const[t,i]of[[17,4],[12,6],[22,6]])n.disco(t,i+e,1,"#ffe14a")}),C_=()=>pt(34,40,(n,e)=>{n.retangulo(6,24,22,3,"#8b93a8"),n.retangulo(9,27,16,10,"#5a6176"),n.retangulo(9,27,16,2,"#8b93a8"),n.retangulo(10,37,4,3,"#3a4156"),n.retangulo(20,37,4,3,"#3a4156"),n.disco(17,32,2,e?"#ff3b4a":"#7a1f2a"),n.linha(9,28,3,22-e*2,"#8b93a8"),n.linha(25,28,31,22-(1-e)*2,"#8b93a8"),n.disco(3,21-e*2,2,"#c9cdd8"),n.disco(31,21-(1-e)*2,2,"#c9cdd8"),n.disco(17,13,12,"#8bd3ff"),n.disco(17,14,10,"#bff0ff"),n.elipse(17,14+e*.5,8,7,"#ff7ab8"),n.elipse(15,12,4,3,"#ffb3d9"),n.linha(17,8,17,20,"#c4488a"),n.linha(11,12,15,16,"#c4488a"),n.linha(23,12,19,16,"#c4488a"),n.linha(17,1,17,3,"#8b93a8"),n.pixel(17,0,e?"#ffe14a":"#ff3b4a"),e&&(n.pixel(8,8,"#ffe14a"),n.pixel(26,18,"#ffe14a"))}),P_=()=>pt(34,40,(n,e)=>{n.poligono([[17,6],[4,38-e],[30,38-e]],"#2a1f4a");for(let t=4;t<30;t+=4)n.pixel(t,38-e,"#0b1026");n.disco(17,12,9,"#2a1f4a"),n.disco(17,14,6,"#e8e8f0"),n.retangulo(12,13,4,3,"#1b1020"),n.retangulo(19,13,4,3,"#1b1020"),n.pixel(13,14,e?"#ff2a4a":"#ff9aa6"),n.pixel(20,14,e?"#ff2a4a":"#ff9aa6"),n.poligono([[16,17],[18,17],[17,19]],"#1b1020");for(let t=13;t<=21;t+=2)n.retangulo(t,20,1,2,"#1b1020");n.disco(5,27+e,2,"#7dff9a"),n.disco(29,27-e,2,"#7dff9a"),n.linha(30,4,30,37,"#c9a86a"),n.poligono([[30,4],[21,1],[22,8]],"#cfd6e0")}),I_=()=>pt(34,40,(n,e)=>{const t=e?1:-1;for(const[i,a,r,s]of[[8,14,3,4],[13,10,11,1],[22,10,23,1],[27,14,31,4]])n.linha(i,a,r+t,s,"#6a3a8a"),n.linha(i+1,a,r+1+t,s,"#6a3a8a"),n.disco(r+t,s,2,"#ffe14a"),n.pixel(r+t,s,"#0b1026");n.disco(17,25,13,"#f4efe0"),n.disco(17,25,12,"#ffffff");for(const[i,a,r,s]of[[6,20,10,24],[28,20,24,24],[8,32,12,29],[26,32,22,29]])n.linha(i,a,r,s,"#ff9aa6");n.disco(17+t,25,7,"#ff3b4a"),n.disco(17+t,25,5,"#c4182a"),n.disco(17+t,25,3,"#0b1026"),n.pixel(15+t,22,"#ffffff"),n.pixel(16+t,22,"#ffffff")}),L_=()=>pt(34,40,(n,e)=>{n.poligono([[17,18],[2,10+e],[8,30]],"#c9ffc9"),n.poligono([[17,18],[32,10+e],[26,30]],"#c9ffc9"),n.elipse(17,27,5,11,"#3a9a3a"),n.elipse(17,21,4,5,"#4ab84a"),n.retangulo(15,30,4,1,"#2a6a2a"),n.poligono([[17,3],[26,10],[17,15],[8,10]],"#7ae07a"),n.disco(11,9,3,"#ffe14a"),n.disco(23,9,3,"#ffe14a"),n.pixel(11,9,"#0b1026"),n.pixel(23,9,"#0b1026"),n.linha(14,3,11,0,"#3a9a3a"),n.linha(20,3,23,0,"#3a9a3a"),n.retangulo(15,13,4,1,"#2a6a2a");const t=e?4:0;n.linha(13,19,4,14+t,"#4ab84a"),n.linha(4,14+t,6,4+t,"#4ab84a"),n.poligono([[6,4+t],[3,1+t],[9,8+t]],"#cfd6e0"),n.linha(21,19,30,14+t,"#4ab84a"),n.linha(30,14+t,28,4+t,"#4ab84a"),n.poligono([[28,4+t],[31,1+t],[25,8+t]],"#cfd6e0");for(const i of[0,1,2])n.linha(13,30+i*2,6,36+i,"#2a6a2a"),n.linha(21,30+i*2,28,36+i,"#2a6a2a")}),D_=()=>pt(34,40,(n,e)=>{for(let t=0;t<5;t++){const i=8+t*4.5,[a,r]=qd(n,i,22,i+Math.sin(t+e)*4,39,t%2?"#ff7ab8":"#c4488a",e,3);n.pixel(Math.round(a),Math.round(r),"#ffffff")}n.elipse(17,13+e*.5,13,11,"#7ad8ff"),n.elipse(17,11,10,7,"#bff0ff"),n.disco(17,13,4,e?"#ffffff":"#ffe14a");for(const[t,i]of[[9,9],[24,8],[12,17],[22,17],[17,5]])n.pixel(t,i,"#ffffff");for(let t=6;t<30;t+=4)n.disco(t,22+e,1,"#ff7ab8")}),sr=[{nome:"CINZENTO",pesos:{ovnis:4,aneis:1},criar:g_},{nome:"POLVO CÓSMICO",pesos:{tentaculos:4,bombas:2,espiral:1},criar:R_},{nome:"CÉREBRO MECÂNICO",pesos:{psiquico:4,mira:2,cerco:2},criar:C_},{nome:"CEIFADOR",pesos:{foice:4,teleporte:3,aneis:1},criar:P_},{nome:"OLHO MESTRE",pesos:{olhar:4,varredura:2,raio:2},criar:I_},{nome:"LOUVA-A-DEUS",pesos:{corte:4,investida:2,cerco:1},criar:L_},{nome:"MEDUSA ESTELAR",pesos:{chuva:4,espiral:2,rajada:2},criar:D_}],N_=()=>pt(56,38,(n,e)=>{n.poligono([[2,20],[10,12],[46,12],[54,20],[46,30],[10,30]],"#7a2a3a"),n.poligono([[10,12],[46,12],[42,8],[14,8]],"#5a1f2a"),n.retangulo(24,1,8,9,"#9a3a4a"),n.retangulo(26,3,4,2,"#8bd3ff"),n.pixel(28,0,e?"#ff3b4a":"#ffd23f");for(const t of[12,28,44])n.disco(t,12,3,"#3a3a48"),n.retangulo(t-1,14,2,5,"#5a5a6a"),n.pixel(t,19,e?"#ffd23f":"#ff3b4a");for(let t=8;t<50;t+=4)n.pixel(t,24,(t/4+e)%2?"#ffd23f":"#7a5a2a");n.retangulo(2,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(51,16,3,8,e?"#ffd23f":"#ff7a3a"),n.retangulo(14,30,28,3,"#3a1018"),n.retangulo(20,33,4,2,e?"#ffd23f":"#ff7a3a"),n.retangulo(32,33,4,2,e?"#ffd23f":"#ff7a3a")}),U_=()=>pt(56,38,(n,e)=>{n.poligono([[20,30],[36,30],[42,37],[14,37]],e?"#fff08a":"#c9b03a"),n.elipse(28,22,26,9,"#aab3c8"),n.elipse(28,25,25,6,"#7a8298"),n.elipse(28,21,22,6,"#c9cdd8"),n.elipse(28,13,11,10,"#8bd3ff"),n.elipse(25,10,5,4,"#cfeeff"),n.disco(28,14,4,"#7ad8a0"),n.pixel(27,13,"#0b1026"),n.pixel(30,13,"#0b1026");for(let t=0;t<9;t++)n.retangulo(Math.round(6+t*5.5),22,2,2,(t+e)%2?"#ffe14a":"#ff3b4a")}),O_=()=>pt(56,38,(n,e)=>{n.poligono([[12,18],[0,8+e*2],[2,28],[14,26]],"#7a2a3a"),n.poligono(oa([[12,18],[0,8+e*2],[2,28],[14,26]],56),"#7a2a3a"),n.elipse(28,15,18,14,"#e8e0c8"),n.elipse(24,11,9,6,"#f6f0dc"),n.retangulo(18,24,20,9,"#e8e0c8"),n.disco(21,16,5,"#1b1020"),n.disco(35,16,5,"#1b1020"),n.disco(21,16,2,e?"#ff3b4a":"#7a1f2a"),n.disco(35,16,2,e?"#ff3b4a":"#7a1f2a"),n.poligono([[26,21],[30,21],[28,25]],"#1b1020");for(let t=19;t<=37;t+=3)n.retangulo(t,27,1,6,"#1b1020");n.retangulo(18,28,20,1,"#1b1020"),n.retangulo(4,24,5,8,"#3a3a48"),n.retangulo(47,24,5,8,"#3a3a48"),n.retangulo(5,32,3,3,e?"#ffd23f":"#ff7a3a"),n.retangulo(48,32,3,3,e?"#ffd23f":"#ff7a3a")}),F_=()=>pt(56,38,(n,e)=>{n.poligono([[8,14],[14,26],[8,35],[2,24]],"#5ad6ff"),n.poligono(oa([[8,14],[14,26],[8,35],[2,24]],56),"#5ad6ff"),n.poligono([[17,18],[22,28],[17,36],[12,28]],"#38a8d6"),n.poligono(oa([[17,18],[22,28],[17,36],[12,28]],56),"#38a8d6"),n.poligono([[28,0],[40,14],[34,36],[22,36],[16,14]],"#9a5aff"),n.poligono([[28,0],[34,14],[28,36],[22,14]],"#c49bff"),n.disco(28,18,5,e?"#ffffff":"#ffe14a"),n.disco(28,18,3,"#ff7ab8"),n.pixel(e?12:44,12,"#ffffff"),n.pixel(e?46:10,24,"#ffffff"),n.pixel(e?28:30,4,"#ffffff")}),B_=["NAVE-MÃE","CARANGUEJÃO","BESOURÃO","ESFERA DE BATALHA","BARATÃO","RAINHA","ROC"],_a=[...Pi.map((n,e)=>({nome:B_[e],criar:()=>n.criar().chefe})),{nome:"CRUZADOR",criar:N_},{nome:"DISCO-MÃE",criar:U_},{nome:"NAVE-CAVEIRA",criar:O_},{nome:"CRISTAL VIVO",criar:F_}],Dt=320,Ut=180,cn=Dt/2,$i=Ut/2,Zi=6,Yd="curriculo-arcade-v1",z_=12,ft={x0:10,x1:Dt-10,y0:26,y1:Ut-10},Vn={slime:{hp:2,vel:20,raio:5,xp:1,dano:1},morcego:{hp:2,vel:40,raio:4,xp:2,dano:1},ogro:{hp:8,vel:13,raio:7,xp:6,dano:2},fantasma:{hp:3,vel:46,raio:5,xp:3,dano:1},inseto:{hp:2,vel:52,raio:3,xp:1,dano:1},atirador:{hp:4,vel:24,raio:5,xp:4,dano:1},sentinela:{hp:5,vel:21,raio:6,xp:5,dano:1},bombardeiro:{hp:9,vel:17,raio:7,xp:8,dano:2},fulminante:{hp:6,vel:19,raio:6,xp:7,dano:1},curandeiro:{hp:7,vel:24,raio:6,xp:7,dano:0},amplificador:{hp:8,vel:20,raio:7,xp:8,dano:0},chefe:{hp:150,vel:28,raio:20,xp:0,dano:2},alien:{hp:70,vel:0,raio:14,xp:0,dano:2}},Ko=70,k_={sentinela:"atirador",bombardeiro:"ogro",fulminante:"atirador",curandeiro:"fantasma",amplificador:"slime"},gs={normal:{nome:"CANHÃO",curto:"TIRO",cor:"#ffe14a",icone:"•"},laser:{nome:"LASER PRISMÁTICO",curto:"LASER",cor:"#38c8ff",icone:"━"},missil:{nome:"MÍSSEIS",curto:"MÍSSIL",cor:"#ff9a3a",icone:"▲"},orbes:{nome:"ORBES DE ENERGIA",curto:"ORBES",cor:"#ff3bd4",icone:"●"},turbo:{nome:"HIPERPROPULSOR",curto:"TURBO",cor:"#7dff9a",icone:"»"},cura:{nome:"NANORREPARO",curto:"CURA",cor:"#ff6b7a",icone:"+"},escudo:{nome:"ESCUDO DE FASE",curto:"ESCUDO",cor:"#8bd3ff",icone:"⬡"},salto:{nome:"BURACO DE MINHOCA",curto:"SALTO",cor:"#a56bff",icone:"◎"},drift:{nome:"DRIFT ÍGNEO",curto:"DRIFT",cor:"#ff7a3a",icone:"≈"}},V_=[{id:"p_laser",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"━",cor:"#38c8ff",nome:"Laser prismático",desc:"Desbloqueia um feixe contínuo de curto alcance no próximo slot.",max:1,peso:1.35,nivel:n=>n.poderes.laser?1:0,requer:n=>!n.poderes.laser&&n.slots.includes(null),aplicar:n=>{Ii(n,"laser")}},{id:"p_missil",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"▲",cor:"#ff9a3a",nome:"Lançador de mísseis",desc:"Desbloqueia projéteis teleguiados com explosão em área.",max:1,peso:1.35,nivel:n=>n.poderes.missil?1:0,requer:n=>!n.poderes.missil&&n.slots.includes(null),aplicar:n=>{Ii(n,"missil")}},{id:"p_orbes",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"●",cor:"#ff3bd4",nome:"Orbital de energia",desc:"Desbloqueia esferas que giram e destroem inimigos por contato.",max:1,peso:1.35,nivel:n=>n.poderes.orbes?1:0,requer:n=>!n.poderes.orbes&&n.slots.includes(null),aplicar:n=>{Ii(n,"orbes")}},{id:"p_turbo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"»",cor:"#7dff9a",nome:"Hiperpropulsor",desc:"Enquanto selecionado, gasta energia para deixar a nave muito mais rápida.",max:1,peso:1.15,nivel:n=>n.poderes.turbo?1:0,requer:n=>!n.poderes.turbo&&n.slots.includes(null),aplicar:n=>{Ii(n,"turbo")}},{id:"p_cura",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"+",cor:"#ff6b7a",nome:"Nanorreparo",desc:"Carrega e recupera vida automaticamente enquanto estiver selecionado.",max:1,peso:1,nivel:n=>n.poderes.cura?1:0,requer:n=>!n.poderes.cura&&n.slots.includes(null),aplicar:n=>{Ii(n,"cura")}},{id:"p_escudo",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo de fase",desc:"Carrega uma barreira temporária que bloqueia todo dano recebido.",max:1,peso:1.1,nivel:n=>n.poderes.escudo?1:0,requer:n=>!n.poderes.escudo&&n.slots.includes(null),aplicar:n=>{Ii(n,"escudo")}},{id:"p_salto",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"◎",cor:"#a56bff",nome:"Buraco de minhoca",desc:"A nave desacelera para carregar e então dá um salto enorme.",max:1,peso:1,nivel:n=>n.poderes.salto?1:0,requer:n=>!n.poderes.salto&&n.slots.includes(null),aplicar:n=>{Ii(n,"salto")}},{id:"p_drift",grupo:"NOVA ARMA",raridade:"LENDÁRIO",icone:"≈",cor:"#ff7a3a",nome:"Drift ígneo",desc:"Carrega uma arrancada que espalha fogo do propulsor e queima perseguidores.",max:1,peso:1.1,nivel:n=>n.poderes.drift?1:0,requer:n=>!n.poderes.drift&&n.slots.includes(null),aplicar:n=>{Ii(n,"drift")}},{id:"a_normal",grupo:"CANHÃO [1]",raridade:"RARO",icone:"●",cor:"#ffe14a",nome:"Calibre reforçado",desc:"+28% de dano exclusivo do canhão.",max:4,peso:2.4,nivel:n=>n.armasNivel.normal,aplicar:n=>{n.armasNivel.normal+=1}},{id:"a_laser",grupo:"ARMA",raridade:"RARO",icone:"━",cor:"#38c8ff",nome:"Laser · evolução",desc:"Aumenta dano, alcance, bateria e velocidade de recarga.",max:4,peso:3,nivel:n=>n.armasNivel.laser,requer:n=>n.poderes.laser,aplicar:n=>{n.armasNivel.laser+=1}},{id:"a_missil",grupo:"ARMA",raridade:"RARO",icone:"▲",cor:"#ff9a3a",nome:"Mísseis · evolução",desc:"Explosões maiores, mais dano e um míssil extra no nível 3.",max:4,peso:3,nivel:n=>n.armasNivel.missil,requer:n=>n.poderes.missil,aplicar:n=>{n.armasNivel.missil+=1}},{id:"a_orbes",grupo:"ARMA",raridade:"RARO",icone:"●",cor:"#ff3bd4",nome:"Orbes · evolução",desc:"Mais esferas, rotação mais rápida e dano de contato maior.",max:4,peso:3,nivel:n=>n.armasNivel.orbes,requer:n=>n.poderes.orbes,aplicar:n=>{n.armasNivel.orbes+=1}},{id:"a_turbo",grupo:"ARMA",raridade:"RARO",icone:"»",cor:"#7dff9a",nome:"Turbo · evolução",desc:"Mais velocidade, autonomia e recarga do propulsor.",max:4,peso:3,nivel:n=>n.armasNivel.turbo,requer:n=>n.poderes.turbo,aplicar:n=>{n.armasNivel.turbo+=1}},{id:"a_cura",grupo:"ARMA",raridade:"RARO",icone:"+",cor:"#ff6b7a",nome:"Cura · evolução",desc:"Repara mais vida e reduz o tempo entre ativações.",max:4,peso:3,nivel:n=>n.armasNivel.cura,requer:n=>n.poderes.cura,aplicar:n=>{n.armasNivel.cura+=1}},{id:"a_escudo",grupo:"ARMA",raridade:"RARO",icone:"⬡",cor:"#8bd3ff",nome:"Escudo · evolução",desc:"Aumenta a duração da barreira e acelera sua recarga.",max:4,peso:3,nivel:n=>n.armasNivel.escudo,requer:n=>n.poderes.escudo,aplicar:n=>{n.armasNivel.escudo+=1}},{id:"a_salto",grupo:"ARMA",raridade:"RARO",icone:"◎",cor:"#a56bff",nome:"Salto · evolução",desc:"Salta mais longe e recarrega o buraco de minhoca mais rápido.",max:4,peso:3,nivel:n=>n.armasNivel.salto,requer:n=>n.poderes.salto,aplicar:n=>{n.armasNivel.salto+=1}},{id:"a_drift",grupo:"ARMA",raridade:"RARO",icone:"≈",cor:"#ff7a3a",nome:"Drift · evolução",desc:"Arrancada mais longa com uma trilha de fogo mais forte.",max:4,peso:3,nivel:n=>n.armasNivel.drift,requer:n=>n.poderes.drift,aplicar:n=>{n.armasNivel.drift+=1}},{id:"dano_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"✦",cor:"#ff7a59",nome:"Amplificador de dano",desc:"+15% de dano para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.danoGlobal*=1.15}},{id:"recarga_geral",grupo:"ARSENAL",raridade:"INCOMUM",icone:"↻",cor:"#7dff9a",nome:"Sincronizador de recarga",desc:"+12% de cadência e recarga para TODAS as armas.",max:4,peso:2.2,aplicar:n=>{n.recargaGlobal*=1.12}},{id:"cadencia_canhao",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"↻",cor:"#ffe14a",nome:"Alimentador rápido",desc:"+13% de cadência exclusiva do canhão.",max:5,peso:2.4,aplicar:n=>{n.cadencia*=1.13}},{id:"perfurar",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"»",cor:"#c9cdf5",nome:"Munição perfurante",desc:"Os tiros do canhão atravessam +1 inimigo.",max:3,peso:2.5,aplicar:n=>{n.perfura+=1}},{id:"proj_canhao",grupo:"CANHÃO [1]",raridade:n=>(n.niveis.proj_canhao|0)===0?"RARO":"LENDÁRIO",icone:"⁝",cor:"#ffe14a",nome:"Cano adicional",desc:"+1 projétil por disparo do canhão (o primeiro é comum; o segundo é raro).",max:2,peso:n=>[2.6,.6][n.niveis.proj_canhao|0]??.6,requer:n=>n.projeteis<3,aplicar:n=>{n.projeteis+=1}},{id:"proj_quad_cad",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#ff7a59",nome:"Cano quádruplo · Aceleração",desc:"+1 projétil (chega a 4 por disparo) e +30% de cadência do canhão.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.cadencia*=1.3}},{id:"proj_quad_perf",grupo:"CANHÃO [1]",raridade:"LENDÁRIO",icone:"⁞",cor:"#c9cdf5",nome:"Cano quádruplo · Perfuração",desc:"+1 projétil (chega a 4 por disparo) e os tiros atravessam +2 inimigos.",max:1,peso:.45,requer:n=>n.projeteis===3,aplicar:n=>{n.projeteis+=1,n.perfura+=2}},{id:"vel_tiro",grupo:"CANHÃO [1]",raridade:"COMUM",icone:"›",cor:"#c9cdf5",nome:"Pólvora estável",desc:"+10% de velocidade dos projéteis. É útil, mas não faz milagres.",max:5,peso:3.2,aplicar:n=>{n.velTiro*=1.1}},{id:"critico",grupo:"CANHÃO [1]",raridade:"INCOMUM",icone:"✹",cor:"#ff9a3a",nome:"Mira oportunista",desc:"+4% de chance de um tiro causar dano dobrado.",max:4,peso:1.8,aplicar:n=>{n.critico+=.04}},{id:"ima",grupo:"SISTEMA",raridade:"COMUM",icone:"⌁",cor:"#6fe8ff",nome:"Ímã de cristais",desc:"+45% de alcance para atrair cristais de XP.",max:4,peso:1.7,aplicar:n=>{n.raioIma*=1.45}},{id:"motor",grupo:"SISTEMA",raridade:"COMUM",icone:"➤",cor:"#8bd3ff",nome:"Propulsores",desc:"+16% de velocidade e resposta da nave.",max:4,peso:1.7,aplicar:n=>{n.velNave*=1.16}},{id:"reparo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Casco autorreparável",desc:"+1 de vida máxima e cura 2 pontos.",max:4,peso:1.7,aplicar:n=>{n.maxHp+=1,n.hp=Math.min(n.maxHp,n.hp+2)}},{id:"coletor",grupo:"SISTEMA",raridade:"COMUM",icone:"·",cor:"#6fe8ff",nome:"Coletor auxiliar",desc:"+18% de alcance do ímã. Pequeno, mas ajuda.",max:6,peso:3.5,aplicar:n=>{n.raioIma*=1.18}},{id:"polimento",grupo:"SISTEMA",raridade:"COMUM",icone:"◇",cor:"#a56bff",nome:"Polimento de cristal",desc:"+7% de XP recebido dos cristais.",max:6,peso:3.2,aplicar:n=>{n.bonusXp*=1.07}},{id:"remendo",grupo:"SISTEMA",raridade:"COMUM",icone:"+",cor:"#ff6b7a",nome:"Remendo de emergência",desc:"Recupera somente 1 ponto de vida agora.",max:5,peso:3.6,requer:n=>n.hp<n.maxHp,aplicar:n=>{n.hp=Math.min(n.maxHp,n.hp+1)}},{id:"micropropulsor",grupo:"SISTEMA",raridade:"COMUM",icone:"›",cor:"#8bd3ff",nome:"Micropropulsor",desc:"+6% de velocidade da nave.",max:6,peso:3.4,aplicar:n=>{n.velNave*=1.06}},{id:"dissipador",grupo:"SISTEMA",raridade:"COMUM",icone:"~",cor:"#7dff9a",nome:"Dissipador pequeno",desc:"+5% de recarga geral das armas e sistemas.",max:6,peso:3.1,aplicar:n=>{n.recargaGlobal*=1.05}}],$d=Object.fromEntries(Object.entries(gs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.nome])),Ru=Object.fromEntries(Object.entries(gs).filter(([n])=>n!=="normal").map(([n,e])=>[n,e.curto]));function Ii(n,e){const t=n.slots.indexOf(null);return n.poderes[e]||t<0?!1:(n.slots[t]=e,n.poderes[e]=!0,n.armasNivel[e]=1,n.arma=t+2,n.avisoTxt=`NOVA ARMA [${t+2}]: ${$d[e]}!`,n.aviso=3.6,!0)}const Vc=[{parte:"MOTOR",id:"motor",nome:"Propulsores",desc:"+8% de velocidade da nave",max:5,custo:n=>6+n*4},{parte:"NÚCLEO DE ENERGIA",id:"nucleo",nome:"Núcleo de energia",desc:"+12% de recarga do laser e do míssil",max:5,custo:n=>8+n*5},{parte:"NÚCLEO DE ENERGIA",id:"bateria",nome:"Bateria do laser",desc:"+0,6 s de laser contínuo",max:4,custo:n=>6+n*4},{parte:"ARMAS",id:"dano",nome:"Munição pesada",desc:"+0,25 de dano base",max:5,custo:n=>8+n*6},{parte:"ARMAS",id:"cadencia",nome:"Canhão rápido",desc:"+10% de cadência inicial",max:5,custo:n=>6+n*4},{parte:"ARMAS",id:"projetil",nome:"Canhão duplo",desc:"+1 projétil inicial",max:2,custo:n=>24+n*20},{parte:"ARMAS",id:"lente",nome:"Lente do laser",desc:"+10% de dano e de alcance do laser",max:5,custo:n=>8+n*6},{parte:"ESCUDO",id:"escudo",nome:"Escudo regenerativo",desc:"Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)",max:5,custo:n=>10+n*6},{parte:"CASCO",id:"casco",nome:"Casco reforçado",desc:"+1 vida inicial",max:5,custo:n=>6+n*4},{parte:"SENSORES",id:"ima",nome:"Ímã inicial",desc:"+25% de alcance do ímã",max:4,custo:n=>6+n*5},{parte:"SENSORES",id:"xp",nome:"Cristais ricos",desc:"+10% de XP dos cristais",max:5,custo:n=>8+n*6}],Qi={estrelaVermelha:{cor:"#ff3b4a",nome:"DANO +50%",tempo:12,peso:3},estrelaAmarela:{cor:"#ffd23f",nome:"VELOCIDADE +50%",tempo:12,peso:3},estrelaAzul:{cor:"#3f8cff",nome:"ESCUDO",tempo:9,peso:2.5},estrelaRoxa:{cor:"#a56bff",nome:"XP EM DOBRO",tempo:15,peso:2}},G_=Object.entries(Qi).map(([n,e])=>[n,e.peso]),H_=[["ima",.25],["explosao",.2],["coracao",.2],["escudo",.15],["turbo",.2]],W_=()=>({tempo:0,kills:0,moedas:0,skin:0,onda:0,oficina:Object.fromEntries(Vc.map(n=>[n.id,0]))});function Cu(){const n=W_();try{const e=JSON.parse(localStorage.getItem(Yd));if(e){n.tempo=e.tempo|0,n.kills=e.kills|0,n.moedas=Math.max(0,e.moedas|0),n.skin=Math.max(0,e.skin|0),n.onda=Math.max(0,e.onda|0);for(const t of Vc)n.oficina[t.id]=Math.max(0,Math.min(t.max,(e.oficina&&e.oficina[t.id])|0))}}catch{}return n}function X_(){const n=(t,i,a)=>{const r=_n(7,9);return r.poligono([[3.5,.5],[6.5,3.5],[3.5,8.5],[.5,3.5]],t),r.poligono([[3.5,.5],[6.5,3.5],[3.5,4.5]],i),r.pixel(2,3,a),r.pixel(2,2,a),r.contorno("#0b1026").c};return{cristais:{1:n("#38c8ff","#8be6ff","#ffffff"),2:n("#3fd96a","#9bffb4","#ffffff"),3:n("#a56bff","#d1b0ff","#ffffff"),6:n("#ffc83d","#fff0a0","#ffffff")}}}function Pu(n){const e=_n(20,20),t=2,i=(a,r,s,o,f)=>e.retangulo(a+t,r+t,s,o,f);if(i(1,7,3,2,"#ff7a59"),i(12,7,3,2,"#ff7a59"),i(7,1,2,3,"#ff7a59"),i(7,12,2,3,"#ff7a59"),n.motor>=2&&(i(2,11,2,3,"#8b93a8"),i(12,11,2,3,"#8b93a8"),e.pixel(3+t,14+t,"#ffa23a"),e.pixel(12+t,14+t,"#ffa23a")),n.motor>=4&&(i(1,4,2,3,"#8b93a8"),i(13,4,2,3,"#8b93a8")),e.disco(8+t,8+t,5,"#4aa8ff"),e.disco(8+t,8+t,3,n.nucleo>=4?"#ffc14a":n.nucleo>=2?"#7dff9a":"#8bd3ff"),e.disco(8+t,8+t,1,"#ffffff"),n.casco>=1)for(const[a,r]of[[2,2],[12,2],[2,12],[12,12]])i(a,r,2,2,"#aab3c8"),n.casco>=3&&e.pixel(a+t,r+t,"#e6e8ff");return n.ima>=1&&(e.pixel(8+t,t-1,"#ff3b4a"),n.ima>=3&&i(10,0,2,1,"#c9cdd8")),e.contorno(n.casco>=5?"#ffd23f":n.casco>=3?"#8bd3ff":"#0b1026"),{c:e.c,branca:zc(e.c)}}function q_({bip:n,somAtivo:e}){const t=Symbol("arcade");window.__curriculoArcadeGeracao=t,document.getElementById("arcade")?.remove();const i=(v,g,D)=>{const X=document.createElement(v);return g&&(X.className=g),D!=null&&(X.textContent=D),X},a=X_(),r=x_(),s=v_(),o=h_({inicioX:cn,inicioY:$i,rochasSpr:r}),f=new Map,c=new Map,u=v=>(f.has(v)||f.set(v,sr[v].criar()),f.get(v)),h=v=>(c.has(v)||c.set(v,_a[v].criar()),c.get(v)),d=new Map,p=v=>{const g=(v%Pi.length+Pi.length)%Pi.length;return d.has(g)||d.set(g,Pi[g].criar()),d.get(g)},m=.3,b=v=>{const g=new Audio("./"+v);return g.loop=!0,g.volume=m,g.preload="none",g},_=b("audio/arcade.mp3"),x=b("audio/chefe.mp3"),T=b("audio/gameover.mp3"),C={normal:_,chefe:x,fim:T};let S="normal",E=!1;function R(){if(E)return;E=!0;const v=()=>{E=!1,window.removeEventListener("pointerdown",v,!0),window.removeEventListener("keydown",v,!0),at&&L()};window.addEventListener("pointerdown",v,!0),window.addEventListener("keydown",v,!0)}const L=()=>{e&&!e()||C[S].play().catch(R)},M=()=>{_.pause(),x.pause(),T.pause()};function P(v){if(S!==v){S=v;for(const[g,D]of Object.entries(C))g!==v&&D.pause();v!=="normal"&&(C[v].currentTime=0),L()}}let I=!1;function F(){if(!I){I=!0;for(const v of[x,T])v.muted=!0,v.play().then(()=>{v.pause(),v.currentTime=0,v.muted=!1}).catch(()=>{v.muted=!1,I=!1})}}const V=d_(Dt,Ut);let $=Pu({casco:0,motor:0,nucleo:0,ima:0}),B=Cu();const Y={},re=(v,g,D)=>{const X=performance.now();X-(Y[v]||0)<g||(Y[v]=X,D())};function te(v){const g=v.tipo==="ogro"||v.tipo==="chefe"||v.tipo==="alien";re("acerto"+(g?"G":""),g?70:40,()=>g?n(90+Math.random()*25,.07,"sawtooth",.035):n(170+Math.random()*80,.03,"square",.02))}function ve(v){re("morte",30,()=>{v==="slime"?(n(330,.05,"triangle",.045),n(200,.09,"triangle",.045,.05)):v==="morcego"?(n(950,.04,"square",.03),n(620,.05,"square",.03,.04),n(380,.07,"square",.03,.09)):v==="ogro"?(n(120,.16,"sawtooth",.06),n(70,.22,"sawtooth",.06,.09)):v==="fantasma"?(n(700,.06,"sine",.05),n(500,.08,"sine",.05,.06),n(300,.12,"sine",.05,.12)):v==="atirador"?(n(520,.04,"sawtooth",.04),n(260,.06,"sawtooth",.04,.04),n(130,.1,"sawtooth",.04,.09)):n(1e3,.03,"square",.025)})}const ae=()=>{try{localStorage.setItem(Yd,JSON.stringify(B))}catch{}},he=i("div");he.id="arcade";const ge=i("div","arc-caixa"),Je=i("div","arc-topo"),Ge=document.createElement("canvas");Ge.width=Ge.height=20,Ge.className="arc-icone",Ge.getContext("2d").drawImage($.c,0,0);const wt=i("h2",null,"NAVE ARCADE"),xt=i("div","arc-hud"),_t=i("span","arc-vidas");_t.setAttribute("role","status");const se=i("span","arc-nivel"),q=i("span","arc-xp"),_e=i("i");q.append(_e),q.setAttribute("role","progressbar"),q.setAttribute("aria-label","Experiência"),q.setAttribute("aria-valuemin","0");const ke=i("span"),Ee=i("span","arc-onda"),je=i("span","arc-efeitos"),lt=i("span","arc-moedas"),fe=i("span");xt.append(_t,se,q,ke,Ee,je,lt,fe);const xe=i("button","arc-pausa","II");xe.title="Pausar (Esc)",xe.setAttribute("aria-label","Pausar jogo"),xe.hidden=!0;const Me=i("button","arc-x","X");Me.title="Sair (Esc)",Me.setAttribute("aria-label","Sair do jogo"),Je.append(Ge,wt,xt,xe,Me);const ye=i("div","arc-tela"),be=document.createElement("canvas");be.width=Dt,be.height=Ut,be.setAttribute("role","img"),be.setAttribute("aria-label","Área do jogo. Mova a nave com WASD, setas ou arrastando o dedo.");const A=be.getContext("2d");A.imageSmoothingEnabled=!1;const qe=i("div","arc-joystick");qe.hidden=!0;const We=i("i");qe.append(We);const it=i("div","arc-aviso");it.hidden=!0;const z=i("div","arc-sobre"),ut=i("div","arc-painel arc-inicio"),Mt=i("button","arc-btn","COMEÇAR [ESPAÇO]"),N=i("button","arc-btn sec"),y=i("p","arc-chamada","Sobreviva, evolua sua nave e atravesse regiões cada vez mais perigosas."),Z=i("div","arc-objetivos");for(const[v,g,D]of[["✦","PILOTE","WASD, setas ou arraste"],["◆","EVOLUA","Colete cristais de XP"],["☠","CONQUISTE","Chefes dão moedas"]]){const X=i("div");X.append(i("b",null,v),i("strong",null,g),i("small",null,D)),Z.append(X)}const ee=i("details","arc-regras"),ue=i("summary",null,"COMO JOGAR");ee.append(ue,i("p",null,"A nave atira sozinha. Monstros soltam cristais; rochas escondem itens; buracos negros levam a duelos especiais."),i("p",null,"Você começa só com o canhão [1]. Novas armas aparecem por sorte nos upgrades e ocupam [2], [3] e [4]. Cada arma evolui até o nível 4."));const Te=i("p","arc-recordes");ut.append(i("h3",null,"PRONTO PARA DECOLAR?"),y,Z,ee,Te,Mt,N);const we=i("div","arc-painel");we.hidden=!0;const le=i("div","arc-painel");le.hidden=!0;const me=i("button","arc-btn","CONTINUAR [ESC]"),Oe=i("button","arc-btn sec","SAIR");le.append(i("h3",null,"PAUSADO"),me,Oe);const Ke=i("div","arc-painel");Ke.hidden=!0;const Ie=i("div","of-raiz");Ie.hidden=!0,z.append(ut,we,le,Ke),ye.append(be,it,qe,z);const Ne=i("div","arc-armas"),ot=[];for(let v=1;v<=4;v++){const g=i("button","arc-arma"),D=i("b"),X=i("i");g.append(i("small",null,String(v)),D,X),g.onmousedown=K=>K.preventDefault(),g.onclick=()=>In(v),ot.push({b:g,nm:D,barra:X}),Ne.append(g)}ge.append(Je,ye,Ne,i("p","arc-nota","de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade")),he.append(ge,Ie),he.setAttribute("role","dialog"),he.setAttribute("aria-modal","true"),he.setAttribute("aria-label","Nave Arcade"),document.body.append(he);let at=!1,Fe="inicio",W=0,Le=0,pe="inicio",l=null;const Pe=new Set,ce={ativo:!1,x:cn,y:$i,toque:!1,dx:0,dy:0,origemX:0,origemY:0},ct=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS"],Xe=v=>Math.abs(v.x-l.cx)<Dt/2+4&&Math.abs(v.y-l.cy)<Ut/2+4,Lt=v=>{let g=Math.random()*v.reduce((D,X)=>D+X[1],0);for(const[D,X]of v)if(g-=X,g<=0)return D;return v[0][0]},St=(v,g=2.6)=>{l.avisoTxt=v,l.aviso=g};function Pn(){const v=B.oficina,g=l?l.niveis:{};return{casco:v.casco+(g.reparo|0),motor:v.motor+(g.motor|0),nucleo:v.nucleo+(g.recarga_geral|0),armas:v.dano+v.lente+(g.dano_geral|0),ima:v.ima+(g.ima|0)}}function wn(){const v=Pn();$=Pu(v),l&&(l.tiers=v);const g=Ge.getContext("2d");g.clearRect(0,0,20,20),g.drawImage($.c,0,0)}const Cs=()=>{if(l.regiaoForcada!=null)return l.regiaoForcada;const v=Math.min(2,Math.floor((l.fase-1)/2)),g=mr.map((D,X)=>X).filter(D=>mr[D].nivel===v);return g[(l.fundoBase+l.fase)%g.length]},Zn=v=>{const g=[...v];for(let D=g.length-1;D>0;D--){const X=Math.floor(Math.random()*(D+1));[g[D],g[X]]=[g[X],g[D]]}return g};function po(){const v=new Set([...Zn(["slime","inseto"]).slice(0,1),...Zn(["morcego","fantasma"]).slice(0,1),...Zn(["ogro","slime"]).slice(0,1),...Zn(["atirador","sentinela","bombardeiro","fulminante"]).slice(0,2),...Zn(["curandeiro","amplificador"]).slice(0,1)]);for(const g of Zn(Object.keys(Vn).filter(D=>!["chefe","alien"].includes(D)))){if(v.size>=6)break;v.add(g)}return[...v]}function Ua(){const v=B.oficina,g=po(),D=Zn(Array.from({length:Pi.length},(J,Ae)=>Ae)),X=Object.fromEntries(g.map((J,Ae)=>[J,D[Ae%D.length]])),K=Object.fromEntries(g.map((J,Ae)=>[J,Ae===0||Ae===1||Ae===3?1:Ae===5?3:2]));l={t:0,ta:0,nx:cn,ny:$i,cx:cn,cy:$i,velNave:75*(1+.08*v.motor),cristais:[],raioIma:26*(1+.25*v.ima),raioPegar:8,bonusXp:1+.1*v.xp,onda:0,ondaEstado:"calma",calmaT:20,proxOnda:20,ondaT:0,ondaDur:0,combo:0,comboT:0,melhorCombo:0,aviso:0,avisoTxt:"",fase:1,hp:6+v.casco,maxHp:6+v.casco,nivel:1,xp:0,xpProx:5,kills:0,dano:1+.25*v.dano,danoGlobal:1,recargaGlobal:1,cadencia:2.6*(1+.1*v.cadencia),projeteis:1+v.projetil,perfura:0,velTiro:160,critico:0,inimigos:[],tiros:[],tirosInimigos:[],campos:[],raios:[],rochas:[],itens:[],parts:[],ondas:[],textos:[],spawnAcc:0,recarga:.3,invul:0,mira:0,tremor:0,flash:0,niveis:{},imaT:0,turboT:0,escudoT:0,buffDanoT:0,buffVelT:0,buffXpT:0,proxEstrela:10+Math.random()*8,proxBuraco:40+Math.random()*30,buraco:null,alien:null,mundoSalvo:null,aliensVencidos:0,pendente:null,chefeIdx:Math.floor(Math.random()*_a.length),alienIdx:Math.floor(Math.random()*sr.length),chefe:null,chefesVencidos:0,moedasRun:0,skinBase:Math.floor(Math.random()*Pi.length),elencoRun:g,entradaRun:K,skinsRun:X,fundoBase:Math.floor(Math.random()*mr.length),movendo:!1,tiers:null,upgFx:null,arma:1,slots:[null,null,null],poderes:{laser:!1,missil:!1,orbes:!1,turbo:!1,cura:!1,escudo:!1,salto:!1,drift:!1},armasNivel:{normal:1,laser:0,missil:0,orbes:0,turbo:0,cura:0,escudo:0,salto:0,drift:0},laserMax:2+.5*v.bateria,laserE:2+.5*v.bateria,laserQuente:!1,laserTick:0,laserN:0,laser:null,laserDano:4.2*(1+.1*v.lente),laserAlc:66*(1+.1*v.lente),recM:1+.12*v.nucleo,missilT:1,missilMax:3.6,misseis:[],orbeAng:0,boostE:3,boostMax:3,curaCd:0,curaMax:11,escudoCd:0,escudoMax:13,saltoCd:0,saltoMax:8,saltoCarga:0,saltoCargaMax:.8,driftCd:0,driftMax:7,driftT:0,driftAcc:0,trilhasFogo:[],dirX:0,dirY:-1,barreiraMax:v.escudo>0?1+(v.escudo>=4?1:0):0,barreira:v.escudo>0?1+(v.escudo>=4?1:0):0,barreiraT:0,tempoBarreira:45-6*v.escudo},wn()}const Oa=()=>Math.max(l.onda,1+Math.floor(l.t/45));function Er(){const v=Oa(),g={slime:10,inseto:6,morcego:6,atirador:5.5,sentinela:4.5,bombardeiro:2.7,fulminante:3.2,curandeiro:2.4,ogro:3.2,fantasma:3.5,amplificador:2.1};let D=l.elencoRun.filter(X=>v>=l.entradaRun[X]).map(X=>[X,g[X]+Math.max(0,v-l.entradaRun[X])*(X==="atirador"||X==="sentinela"?.45:.2)]);return D.length||(D=[[l.elencoRun[0],1]]),Lt(D)}function ki(v,g,D){const X=Vn[v],K=Math.max(0,Oa()-1),J=Math.max(1,Math.round(X.hp*(1+(X.hp===1?.1:.15)*K)*(1+l.t/300))),Ae=X.vel*(.9+Math.random()*.3)*(1+Math.min(.8,.05*K))*(1+Math.min(.5,l.t/600)),Ue={tipo:v,x:g,y:D,hp:J,hpMax:J,vel:Ae,fase:Math.random()*6,piscar:0,cd:1+Math.random()*2,v:(l.skinsRun[v]??l.skinBase)+l.fase-1,cdOrbe:0,buffT:0,suporteFx:0};return l.inimigos.push(Ue),Ue}function Jn(v=99,g=null){const D=Er(),X=1+Math.min(6,Math.floor(l.t/80)),K=Math.max(1,Math.min(v,D==="inseto"?4+Math.floor(Math.random()*3):Math.round(X*(.7+Math.random()*.6)))),J=g==null?Math.random()*Math.PI*2:g+(Math.random()-.5)*1.8,Ae=215+(Math.random()<.35?Math.random()*230:Math.random()*60),Ue=l.nx+Math.cos(J)*Ae,Ze=l.ny+Math.sin(J)*Ae;for(let nt=0;nt<K;nt++)ki(D,Ue+(Math.random()-.5)*30,Ze+(Math.random()-.5)*30);return K}function Ar(v){for(let g=0;g<v;g++)Jn(1)}function mo(v){const g=l.elencoRun.filter(K=>Oa()>=l.entradaRun[K]),D=Zn(g.length?g:[l.elencoRun[0]]),X=[[l.cx-Dt/2-12,l.cy-Ut/2-12],[l.cx+Dt/2+12,l.cy-Ut/2-12],[l.cx-Dt/2-12,l.cy+Ut/2+12],[l.cx+Dt/2+12,l.cy+Ut/2+12]];for(let K=0;K<v;K++){const[J,Ae]=X[K%4],Ue=D[K%D.length];ki(Ue,J+(Math.random()-.5)*24,Ae+(Math.random()-.5)*24)}}function Wt(v,g,D,X,K=50){if(!(l.parts.length>400))for(let J=0;J<D;J++){const Ae=Math.random()*Math.PI*2,Ue=(.3+Math.random())*K;l.parts.push({x:v,y:g,vx:Math.cos(Ae)*Ue,vy:Math.sin(Ae)*Ue,vida:.3+Math.random()*.3,cor:X[J%X.length]})}}const Yt=(v,g,D,X="#ffffff")=>l.textos.push({x:v,y:g,txt:D,cor:X,vida:1.1});function go(){l.onda+=1;const v=1+Math.floor((l.onda-1)/3),g=l.onda%3===0;l.ondaDur=l.ondaT=10,l.proxOnda=Math.max(14,25-Math.min(8,l.onda*.45))+Math.random()*4,l.ondaEstado=g||l.chefe?"chefe":"ativa",l.spawnAcc=3,l.tremor=.25,mo(g?Math.min(24,10+l.onda*2):Math.min(36,16+l.onda*4)),v>l.fase&&(l.fase=v),g||(St("!! ONDA DE MONSTROS !!",2),n(300,.1,"square",.05),n(450,.14,"square",.05,.1)),g&&!l.chefe&&$e()}function Fa(){l.chefe||(l.ondaEstado=l.ondaT>0?"ativa":"calma")}function xo(v){const g=Math.atan2(v.y-l.ny,v.x-l.nx);l.mira=g;const D=l.armasNivel.normal,X=l.projeteis,K=.16;for(let J=0;J<X;J++){const Ae=g+(J-(X-1)/2)*K,Ue=l.velTiro*(1+.12*(D-1)),Ze=Math.random()<l.critico;l.tiros.push({x:l.nx+Math.cos(Ae)*7,y:l.ny+Math.sin(Ae)*7,vx:Math.cos(Ae)*Ue,vy:Math.sin(Ae)*Ue,dano:l.dano*l.danoGlobal*(1+.28*(D-1))*(Ze?2:1),perf:l.perfura,critico:Ze,acertou:new Set})}n(520+Math.random()*60,.04,"square",.012)}const fa=()=>1+Math.floor(l.t/420);function Sn(v,g,D,X,K=fa()){l.tirosInimigos.push({x:v,y:g,vx:Math.cos(D)*X,vy:Math.sin(D)*X,dano:K,vida:7})}function Ba(v,g,D){const X=Math.random()*Math.PI*2,K=16+Math.random()*22,J={x:v,y:g,v:D,vx:Math.cos(X)*K,vy:Math.sin(X)*K,fase:Math.random()*6};l.cristais.push(J),l.cristais.length>220&&(J.v+=l.cristais.shift().v)}function ua(v){return l.invul>0||l.escudoT>0?!1:l.barreira>0?(l.barreira-=1,l.invul=.7,l.ondas.push({x:l.nx,y:l.ny,r:0,max:28,v:90,cor:"#7dff9a"}),Yt(l.nx,l.ny-12,"BLOQUEOU","#7dff9a"),n(660,.12,"triangle",.05),!0):(l.hp-=v,l.invul=.7,l.tremor=.2,l.combo>=3&&Yt(l.nx,l.ny-14,"COMBO PERDIDO","#ff7a8a"),l.combo=0,l.comboT=0,n(110,.18,"sawtooth",.05),!0)}function Vi(v,g){v.sumido>0||v.morto||(v.hp-=g,v.piscar=.08,v.hp>0&&te(v),v.hp<=0&&(v.morto=!0,vo(v)))}function vo(v){if(v.tipo==="chefe"){rt(v);return}if(v.tipo==="alien"){l.pendente="vitoria",Wt(v.x,v.y,40,["#7ad8a0","#ff3bd4","#ffffff","#ffd23f"],110),l.flash=.35;return}const g=Vn[v.tipo];l.kills+=1,l.alien||(l.combo+=1,l.comboT=1.8,l.melhorCombo=Math.max(l.melhorCombo,l.combo),[10,25,50,100].includes(l.combo)&&(Yt(l.nx,l.ny-22,`COMBO x${l.combo}!`,"#ffe14a"),n(700+l.combo*4,.08,"square",.04),n(900+l.combo*4,.1,"square",.04,.08))),Ba(v.x,v.y,g.xp),Wt(v.x,v.y,8,["#ffe14a","#ffffff","#ff7a59"],60),ve(v.tipo);const D={slime:.012,inseto:.01,morcego:.03,fantasma:.05,atirador:.08,sentinela:.09,bombardeiro:.13,fulminante:.11,curandeiro:.11,amplificador:.12,ogro:.12}[v.tipo]||0;Math.random()<D&&(l.itens.push({tipo:"moedaEsp",x:v.x,y:v.y,vida:40,fase:Math.random()*6}),Yt(v.x,v.y-8,"◆","#6fe8ff"));const X=l.inimigos.indexOf(v);X>=0&&l.inimigos.splice(X,1)}function w(){const v=Math.random()*Math.PI*2,g=230+Math.random()*120,D=Math.floor(Math.random()*3),X=[4,6,9][D];l.rochas.push({x:l.nx+Math.cos(v)*g,y:l.ny+Math.sin(v)*g,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,tam:D,r:[8,10,13][D],hp:X,hpMax:X,piscar:0})}function H(v){v.hp-=1,v.piscar=.08,Wt(v.x,v.y,3,["#9aa0ad","#5a606c"],40),n(150,.04,"square",.03),v.hp<=0&&ne(v)}function ne(v){Wt(v.x,v.y,16,["#9aa0ad","#5a606c","#cfd6e0"],70),n(100,.15,"sawtooth",.04);const g=l.rochas.indexOf(v);g>=0&&l.rochas.splice(g,1),Math.random()<.9?l.itens.push({tipo:Lt(H_),x:v.x,y:v.y,vida:16,fase:Math.random()*6}):Ba(v.x,v.y,3)}function Q(v){const g=v.tipo;if(g==="ima")l.imaT=3,Yt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");else if(g==="explosao")j(),Yt(l.nx,l.ny-12,"BOOM!","#ffd23f");else if(g==="coracao")l.hp=Math.min(l.maxHp,l.hp+2),Yt(l.nx,l.ny-12,"+VIDA","#ff7a8a");else if(g==="escudo")l.escudoT=6,Yt(l.nx,l.ny-12,"ESCUDO!","#8bd3ff");else if(g==="turbo")l.turboT=8,Yt(l.nx,l.ny-12,"TURBO!","#ffe14a");else if(Qi[g]){const D=Qi[g];g==="estrelaVermelha"?(l.buffDanoT<=0&&(l.danoGlobal*=1.5),l.buffDanoT=D.tempo):g==="estrelaAmarela"?l.buffVelT=D.tempo:g==="estrelaAzul"?l.escudoT=Math.max(l.escudoT,D.tempo):g==="estrelaRoxa"&&(l.buffXpT=D.tempo),Yt(l.nx,l.ny-12,D.nome,D.cor),Wt(l.nx,l.ny,14,[D.cor,"#ffffff"],70),l.ondas.push({x:l.nx,y:l.ny,r:0,max:40,v:110,cor:D.cor}),n(660,.08,"triangle",.05),n(990,.1,"triangle",.05,.08),n(1320,.14,"triangle",.05,.16)}else g==="moedaEsp"&&(B.moedas+=1,l.moedasRun+=1,ae(),Yt(l.nx,l.ny-12,"+1 MOEDA","#6fe8ff"));n(880,.06,"square",.04),n(1175,.08,"square",.04,.06)}function j(){l.flash=.28,l.tremor=.35,l.ondas.push({x:l.nx,y:l.ny,r:0,max:210,v:420,cor:"#ffd23f"});const v=8+l.dano*3;for(const g of[...l.inimigos])Xe(g)&&(Vi(g,g.tipo==="chefe"||g.tipo==="alien"?14:v),Wt(g.x,g.y,4,["#ffd23f","#ff7a3a"],60));l.tirosInimigos=l.tirosInimigos.filter(g=>!Xe(g)),n(90,.4,"sawtooth",.07),n(60,.5,"sawtooth",.07,.1)}function Be(v,g,D,X=1.4){for(let K=0;K<D;K++){const J=Math.random()*Math.PI*2,Ae=K===0?Math.random()*14:28+Math.random()*55;let Ue=l.nx+Math.cos(J)*Ae,Ze=l.ny+Math.sin(J)*Ae;l.alien&&(Ue=Math.max(ft.x0+10,Math.min(ft.x1-10,Ue)),Ze=Math.max(ft.y0+10,Math.min(ft.y1-10,Ze))),l.campos.push({x:Ue,y:Ze,r:26,aviso:X+K*.15,avisoMax:X+K*.15,vida:4,tick:0,ox:v,oy:g})}n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}function $e(){l.chefeIdx=(l.chefeIdx+1+Math.floor(Math.random()*(_a.length-1)))%_a.length;const v=Math.random()<.5?-1:1,g=Math.round(150*(1+(l.fase-1)*.4+l.chefesVencidos*.35)*(1+l.t/300)),D=Zn(["raios","investida","drift","minhoca"]).slice(0,2),X={tipo:"chefe",x:l.cx+v*(Dt/2+40),y:l.cy-30,hp:g,hpMax:g,vel:30,fase:0,piscar:0,v:l.fase-1+l.skinBase,b:l.chefeIdx,cdRajada:2.2,cdMira:1.6,cdBomba:4,cdEsp:3.8,esp:null,movEsp:null,kit:D,rot:0};l.inimigos.push(X),l.chefe=X,P("chefe"),St(`${_a[l.chefeIdx].nome} DETECTOU VOCÊ!`,3),n(90,.4,"sawtooth",.06),n(70,.5,"sawtooth",.06,.3)}function ze(v,g){const D=l.nx-v.x,X=l.ny-v.y,K=Math.hypot(D,X)||1;if(v.fase+=g,v.movEsp){const U=v.movEsp;if(U.carga>0){if(U.carga-=g,v.piscar=Math.max(v.piscar,.04),U.carga<=0)if(U.tipo==="minhoca"){const ie=v.x,oe=v.y,de=Math.random()*Math.PI*2,Se=58+Math.random()*24;v.x=l.nx+Math.cos(de)*Se,v.y=l.ny+Math.sin(de)*Se,l.ondas.push({x:ie,y:oe,r:0,max:32,v:130,cor:"#a56bff"}),l.ondas.push({x:v.x,y:v.y,r:0,max:32,v:130,cor:"#ff3b4a"}),Wt(ie,oe,18,["#a56bff","#070a1a","#ffffff"],90),Wt(v.x,v.y,18,["#ff3b4a","#070a1a","#ffffff"],90),l.tremor=.28,v.movEsp=null}else U.ativo=U.tipo==="drift"?1.15:.72}else if(U.ativo>0){const ie=U.tipo==="drift"?175:235;v.x+=U.dx*ie*g,v.y+=U.dy*ie*g,U.ativo-=g,U.acc-=g,Wt(v.x-U.dx*15,v.y-U.dy*15,U.tipo==="drift"?2:1,U.tipo==="drift"?["#ff3b4a","#ff7a3a","#ffe14a"]:["#ff3b4a","#ffffff"],45),U.tipo==="drift"&&U.acc<=0&&(U.acc=.16,l.campos.push({x:v.x-U.dx*12,y:v.y-U.dy*12,r:14,aviso:0,avisoMax:0,vida:1.5,tick:0})),U.ativo<=0&&(v.movEsp=null)}if(v.movEsp)return}const J=-X/K,Ae=D/K,Ue=Math.sin(l.ta*.8)*.3,Ze=v.vel+l.fase*3+Math.min(45,l.t/10);if(v.x+=(D/K+J*Ue)*Ze*g,v.y+=(X/K+Ae*Ue)*Ze*g,K>300)return;const nt=1+Math.min(1,l.t/400);if(v.cdRajada-=g*nt,v.cdMira-=g*nt,v.cdBomba-=g*nt,v.cdRajada<=0){const U=12+Math.min(8,l.fase*2);for(let ie=0;ie<U;ie++)Sn(v.x,v.y,v.rot+ie*Math.PI*2/U,55);v.rot+=.27,v.cdRajada=Math.max(1.8,3.2-l.fase*.15),n(180,.12,"square",.04)}if(v.cdMira<=0){const U=Math.atan2(X,D),ie=3+Math.min(2,l.fase-1);for(let oe=0;oe<ie;oe++)Sn(v.x,v.y,U+(oe-(ie-1)/2)*.2,90);v.cdMira=1.7}if(v.cdBomba<=0){const U=1+(Math.random()<.5?1:0)+(l.fase>=2&&Math.random()<.4?1:0);Be(v.x,v.y,U),v.cdBomba=Math.max(3,4.6-l.fase*.2)}const G=et.filter(U=>U.assinatura?v.kit.includes(U.id):l.t>=U.t);if(v.esp){const U=v.esp;if(U.t-=g,U.acc-=g,U.tipo==="espiral"&&U.acc<=0){U.acc=.09,U.ang+=.4;for(let ie=0;ie<2;ie++)Sn(v.x,v.y,U.ang+ie*Math.PI,62)}else if(U.tipo==="aneis"&&U.acc<=0){U.acc=.5;const ie=Math.random()*Math.PI*2;for(let oe=0;oe<24;oe++){const de=oe*Math.PI*2/24;Math.abs(Math.atan2(Math.sin(de-ie),Math.cos(de-ie)))>.45&&Sn(v.x,v.y,de,58)}}U.t<=0&&(v.esp=null)}else if(G.length&&(v.cdEsp-=g*nt,v.cdEsp<=0)){const U=G[Math.floor(Math.random()*G.length)];if(Yt(v.x,v.y-28,U.nome,"#ff7ab8"),U.id==="espiral")v.esp={tipo:"espiral",t:2.2,acc:0,ang:Math.random()*6};else if(U.id==="aneis")v.esp={tipo:"aneis",t:1.6,acc:0};else if(U.id==="raios"){const ie=Math.atan2(X,D),oe=3+Math.min(2,G.length-2);for(let de=0;de<oe;de++)l.raios.push({x:v.x,y:v.y,ang:ie+(de-(oe-1)/2)*.35,aviso:1,vida:.5,tick:0,ligou:!1})}else if(U.id==="investida"||U.id==="drift")v.movEsp={tipo:U.id,carga:U.id==="drift"?.7:.5,ativo:0,dx:D/K,dy:X/K,acc:0};else if(U.id==="minhoca")v.movEsp={tipo:"minhoca",carga:.72,ativo:0,dx:0,dy:0,acc:0};else if(U.id==="invocar"){for(let ie=0;ie<4;ie++)ki(Er(),v.x+(ie-1.5)*12,v.y+22);n(300,.2,"triangle",.05)}v.cdEsp=Math.max(3.5,7.5-l.t/100)}}const et=[{id:"raios",nome:"TEMPESTADE",assinatura:!0},{id:"investida",nome:"IMPACTO",assinatura:!0},{id:"drift",nome:"DRIFT INFERNAL",assinatura:!0},{id:"minhoca",nome:"RUPTURA",assinatura:!0},{id:"espiral",nome:"ESPIRAL",t:120},{id:"aneis",nome:"ANÉIS",t:210},{id:"invocar",nome:"INVOCAR",t:330}];function rt(v){l.kills+=5,l.chefe=null,l.chefesVencidos+=1,P("normal");const g=l.inimigos.indexOf(v);g>=0&&l.inimigos.splice(g,1),Wt(v.x,v.y,50,["#ffd23f","#ff7a3a","#ffffff","#ff3b4a"],130),l.flash=.3,l.tremor=.5;const D=4+Math.min(4,l.chefesVencidos);for(let X=0;X<D;X++)l.itens.push({tipo:"moedaEsp",x:v.x+(Math.random()-.5)*46,y:v.y+(Math.random()-.5)*30,vida:60,fase:Math.random()*6});for(let X=0;X<6;X++)Ba(v.x,v.y,6);l.tirosInimigos=[],l.campos=[],l.ondaEstado==="chefe"&&Fa(),St("CHEFÃO DERROTADO!",2.6),n(220,.3,"triangle",.06),n(330,.3,"triangle",.06,.2),n(440,.4,"triangle",.06,.4)}function vt(){const v=Math.random()*Math.PI*2,g=100+Math.random()*40;l.buraco={x:l.nx+Math.cos(v)*g,y:l.ny+Math.sin(v)*g,vida:28,r:22},St("BURACO NEGRO!",2.4),n(70,.5,"sine",.07),n(55,.6,"sine",.07,.3)}function Et(v){const g=l.buraco;g.vida-=v;const D=g.x-l.nx,X=g.y-l.ny,K=Math.hypot(D,X)||1;if(K<70){const J=38*(1-K/70);l.nx+=D/K*J*v,l.ny+=X/K*J*v}if(K<9){tt();return}g.vida<=0&&(l.buraco=null,l.proxBuraco=l.t+50+Math.random()*40)}function tt(){P("chefe"),l.alienIdx=(l.alienIdx+1+Math.floor(Math.random()*(sr.length-1)))%sr.length,l.mundoSalvo={nx:l.nx,ny:l.ny,cx:l.cx,cy:l.cy,inimigos:l.inimigos,tirosInimigos:l.tirosInimigos,campos:l.campos,hp:l.hp,buraco:l.buraco,chefe:l.chefe};const v=Math.round(95*(1+l.aliensVencidos*.6+(l.fase-1)*.25)*(1+l.t/300)),g={tipo:"alien",x:cn,y:50,hp:v,hpMax:v,piscar:0,fase:0,v:l.alienIdx,cd:2,estado:"espera",carga:0,ataque:"",salvas:0,cdSalva:0,sumido:0,ta:0,combo:0,modo:"investida",dashMax:.75,padrao:null};l.hp=l.maxHp,l.invul=1,l.inimigos=[g],l.tirosInimigos=[],l.campos=[],l.raios=[],l.tiros=[],l.misseis=[],l.chefe=null,l.alien=g,l.nx=cn,l.ny=Ut-40,l.cx=cn,l.cy=$i,l.flash=.5,St(`${sr[l.alienIdx].nome} DETECTOU VOCÊ!`,2.8),n(60,.6,"sawtooth",.07)}function Pt(v){const g=l.mundoSalvo;if(l.nx=g.nx,l.ny=g.ny,l.cx=g.cx,l.cy=g.cy,l.inimigos=g.inimigos,l.tirosInimigos=g.tirosInimigos,l.campos=g.campos,l.chefe=g.chefe,l.hp=g.hp,l.tiros=[],l.raios=[],l.misseis=[],l.alien=null,l.mundoSalvo=null,l.buraco=null,P(l.chefe?"chefe":"normal"),l.invul=2,l.proxBuraco=l.t+60+Math.random()*40,l.flash=.4,v){l.aliensVencidos+=1,l.imaT=Math.max(l.imaT,3),Yt(l.nx,l.ny-12,"ÍMÃ!","#8be6ff");for(let X=0;X<6;X++)Ba(l.nx+(Math.random()-.5)*40,l.ny+(Math.random()-.5)*40,6);const D=Object.keys($d).filter(X=>!l.poderes[X]);if(D.length&&l.slots.includes(null))Ii(l,D[Math.floor(Math.random()*D.length)]);else{const X=Object.keys(l.armasNivel).filter(K=>l.armasNivel[K]>0&&l.armasNivel[K]<4);if(X.length){const K=X[Math.floor(Math.random()*X.length)];l.armasNivel[K]+=1,St(`${gs[K].nome} EVOLUIU PARA N${l.armasNivel[K]}!`,3.2)}else l.hp=l.maxHp,St("ALIENÍGENA DERROTADO!",3)}n(523,.12,"triangle",.06),n(659,.12,"triangle",.06,.12),n(784,.12,"triangle",.06,.24),n(1047,.3,"triangle",.06,.36)}else St("EXPULSO DO BURACO NEGRO",2.8),n(120,.3,"sawtooth",.05)}const jt={rajada:"RAJADA",mira:"MIRA",teleporte:"TELEPORTE",invocar:"INVOCAR",investida:"INVESTIDA",raio:"RAIO",bombas:"BOMBAS",espiral:"ESPIRAL",chuva:"CHUVA",varredura:"VARREDURA",aneis:"ANÉIS",cerco:"CERCO",tentaculos:"TENTÁCULOS",olhar:"OLHAR",psiquico:"PSÍQUICO",foice:"FOICE",corte:"CORTE",ovnis:"OVNIS"},zt={espiral:2.6,chuva:3.2,aneis:2.4,cerco:2.2},Ot=[["rajada",3,0],["mira",3,0],["investida",3,0],["raio",3,40],["bombas",2,40],["teleporte",2,80],["invocar",1,80],["espiral",2,130],["chuva",2,170],["varredura",2,210],["aneis",2,250],["cerco",2,290],["tentaculos",0,100],["olhar",0,100],["psiquico",0,100],["foice",0,100],["corte",0,100],["ovnis",0,100]];function on(v){const g=l.alien,D=g.hp<g.hpMax*.5,X=g.hp<g.hpMax*.25,K=1+Math.min(.6,l.t/500),J=(X?2:D?1.6:1.25)*K,Ae=(X?1.5:D?1.35:1.2)*(1+(K-1)*.6),Ue=de=>de*Ae;g.ta+=v*(X?2:D?1.7:1.3)*K,g.fase+=v,g.sumido=Math.max(0,g.sumido-v),D&&!g.furiaDita&&(g.furiaDita=!0,St("!! FÚRIA !!",1.6),l.flash=.2,n(80,.4,"sawtooth",.06)),X&&!g.desesperoDito&&(g.desesperoDito=!0,St("!! DESESPERO !!",1.6),l.flash=.25,n(60,.5,"sawtooth",.07));const Ze=()=>cn+Math.sin(g.ta*.7)*95,nt=()=>48+Math.sin(g.ta*1.3)*12;(g.estado==="espera"||g.estado==="carga"||g.estado==="salvas"||g.estado==="padrao")&&g.sumido<=0&&(g.x=Ze(),g.y=nt());const U=(de,Se)=>[Math.max(ft.x0+6,Math.min(ft.x1-6,de)),Math.max(ft.y0+6,Math.min(ft.y1-6,Se))],ie=()=>{const de=l.nx-g.x,Se=l.ny-g.y,Re=Math.hypot(de,Se)||1;g.dirX=de/Re,g.dirY=Se/Re,g.dashMax=.75,g.estado="aviso",g.carga=.8},oe=()=>{const de=l.nx<cn;g.x=de?ft.x1-4:ft.x0+4,g.y=U(0,l.ny)[1],g.dirX=de?-1:1,g.dirY=0,g.dashMax=1.15,g.estado="aviso",g.carga=.75};if(g.estado==="espera"){if(g.cd-=v*J,g.cd<=0){const de=sr[g.v].pesos,Se=Re=>Re==="rajada"||Re==="mira"||Re==="investida";g.ataque=Lt(Ot.filter(([,,Re])=>l.t>=Re).map(([Re,st])=>[Re,(st+(de[Re]||0))*(Se(Re)?1:.3)]).filter(([Re,st])=>st>0&&!(g.ultimoPoder&&!Se(Re)))),g.ultimoPoder=!Se(g.ataque),g.estado="carga",g.carga=.5,Yt(g.x,Math.max(12,g.y-24),jt[g.ataque]||"","#ff7ab8")}}else if(g.estado==="carga"){if(g.carga-=v,g.carga<=0){const de=g.ataque;if(de==="rajada"){const Se=X?30:D?24:18,Re=Math.random()*6;for(let st=0;st<Se;st++)Sn(g.x,g.y,Re+st*Math.PI*2/Se,Ue(62));g.estado="espera",g.cd=2}else if(de==="mira")g.salvas=X?6:D?5:4,g.cdSalva=0,g.estado="salvas";else if(de==="teleporte")g.sumido=.6,g.estado="teleporte",g.carga=.6;else if(de==="invocar"){const Se=l.inimigos.filter(Re=>Re.tipo==="inseto").length;for(let Re=0;Re<4&&Se+Re<10;Re++)ki("inseto",g.x+(Re-1.5)*12,g.y+14);g.estado="espera",g.cd=1.8,n(300,.2,"triangle",.05)}else if(de==="ovnis"){const Se=l.inimigos.filter(Re=>Re.tipo==="atirador").length;for(let Re=0;Re<2&&Se+Re<3;Re++)ki("atirador",g.x+(Re?16:-16),g.y+14);g.estado="espera",g.cd=2,n(300,.25,"triangle",.05)}else if(de==="investida")g.combo=X?1:0,g.modo="investida",ie();else if(de==="foice")g.combo=X?3:D?2:1,g.modo="investida",ie();else if(de==="corte")g.combo=X?2:D?1:0,g.modo="corte",oe();else if(de==="raio"){const Se=Math.atan2(l.ny-g.y,l.nx-g.x),Re=X?[Se-.7,Se-.35,Se,Se+.35,Se+.7]:D?[Se-.5,Se,Se+.5]:[Se];for(const st of Re)l.raios.push({x:g.x,y:g.y+8,ang:st,aviso:.9,vida:.55,tick:0,ligou:!1});g.estado="espera",g.cd=2.2,n(500,.3,"sine",.05)}else if(de==="olhar"){const Se=Math.atan2(l.ny-g.y,l.nx-g.x),Re=X?7:D?6:5;for(let st=0;st<Re;st++)l.raios.push({x:g.x,y:g.y+8,ang:Se+(st-(Re-1)/2)*.4,aviso:.9,vida:.5,tick:0,ligou:!1});g.estado="espera",g.cd=2.4,n(520,.3,"sine",.05)}else if(de==="varredura"){const Se=Math.random()<.5?1:-1,Re=Math.atan2(l.ny-g.y,l.nx-g.x)-1*Se;for(let st=0;st<(D?2:1);st++)l.raios.push({x:g.x,y:g.y+8,ang:Re+st*Math.PI,giro:1.15*Se*(X?1.3:1),seg:!0,aviso:.9,vida:1.7,tick:0,ligou:!1});g.estado="espera",g.cd=2.6,n(480,.3,"sine",.05)}else if(de==="tentaculos"){const Se=Math.random()*6.28,Re=Math.random()<.5?1:-1,st=D?6:4;for(let Qe=0;Qe<st;Qe++)l.raios.push({x:g.x,y:g.y+8,ang:Se+Qe*Math.PI*2/st,giro:.9*Re,seg:!0,aviso:.8,vida:2.2,tick:0,ligou:!1});g.estado="espera",g.cd=3,n(420,.3,"sine",.05)}else if(de==="bombas")Be(g.x,g.y,X?6:D?5:4,1.1),g.estado="espera",g.cd=2;else if(de==="psiquico"){const Se=Math.random()*6.28,Re=D?6:5;for(let st=0;st<Re;st++){const[Qe,yt]=U(l.nx+Math.cos(Se+st*Math.PI*2/Re)*40,l.ny+Math.sin(Se+st*Math.PI*2/Re)*40);l.campos.push({x:Qe,y:yt,r:24,aviso:1.1+st*.08,avisoMax:1.1+st*.08,vida:3.5,tick:0,ox:g.x,oy:g.y})}l.campos.push({x:l.nx,y:l.ny,r:22,aviso:1.4,avisoMax:1.4,vida:3.5,tick:0,ox:g.x,oy:g.y}),g.estado="espera",g.cd=2.2,n(200,.1,"square",.04),n(160,.1,"square",.04,.1)}else zt[de]?(g.padrao={tipo:de,t:zt[de]*(D?1.25:1),acc:0,ang:Math.random()*6.28},g.estado="padrao"):g.estado="espera";n(220,.12,"square",.05)}}else if(g.estado==="padrao"){const de=g.padrao;if(de.t-=v,de.acc-=v,de.acc<=0){if(de.tipo==="espiral"){de.acc=.075,de.ang+=.38;const Se=X?4:D?3:2;for(let Re=0;Re<Se;Re++)Sn(g.x,g.y+6,de.ang+Re*Math.PI*2/Se,Ue(58));re("espiral",90,()=>n(330+Math.random()*40,.04,"square",.02))}else if(de.tipo==="chuva"){de.acc=X?.45:.6;const Se=[ft.x0+24+Math.random()*(ft.x1-ft.x0-48)];D&&Se.push(ft.x0+24+Math.random()*(ft.x1-ft.x0-48));for(let Re=ft.x0+4;Re<=ft.x1-4;Re+=13)Se.every(st=>Math.abs(Re-st)>19)&&Sn(Re,ft.y0,Math.PI/2,Ue(58));n(240,.08,"square",.03)}else if(de.tipo==="aneis"){de.acc=.55;const Se=24,Re=Math.random()*Math.PI*2;for(let st=0;st<Se;st++){const Qe=st*Math.PI*2/Se;Math.abs(Math.atan2(Math.sin(Qe-Re),Math.cos(Qe-Re)))>.42&&Sn(g.x,g.y,Qe,Ue(55))}n(280,.08,"triangle",.03)}else if(de.tipo==="cerco"){de.acc=X?.08:.12;const Se=Math.random()<.5?ft.x0:ft.x1,Re=ft.y0+Math.random()*(ft.y1-ft.y0);Sn(Se,Re,Math.atan2(l.ny-Re,l.nx-Se)+(Math.random()-.5)*.3,Ue(72)),re("cerco",90,()=>n(360,.04,"square",.02))}}de.t<=0&&(g.estado="espera",g.cd=1.8)}else if(g.estado==="salvas"){if(g.cdSalva-=v,g.cdSalva<=0){const de=Math.atan2(l.ny-g.y,l.nx-g.x);for(let Se=-1;Se<=1;Se++)Sn(g.x,g.y+12,de+Se*.22,Ue(95));g.salvas-=1,g.cdSalva=.26,n(260,.06,"square",.04),g.salvas<=0&&(g.estado="espera",g.cd=1.6)}}else if(g.estado==="aviso")g.carga-=v,g.x+=(Math.random()-.5)*1.6,g.y+=(Math.random()-.5)*1.6,g.carga<=0&&(g.estado="investida",g.dashT=g.dashMax*(D?1.1:1),n(150,.25,"sawtooth",.06));else if(g.estado==="investida"){const de=X?400:D?350:310;g.x+=g.dirX*de*v,g.y+=g.dirY*de*v,g.dashT-=v;const Se=g.x<ft.x0||g.x>ft.x1||g.y<ft.y0||g.y>ft.y1;g.x=Math.max(ft.x0,Math.min(ft.x1,g.x)),g.y=Math.max(ft.y0-10,Math.min(ft.y1,g.y)),(g.dashT<=0||Se)&&(l.tremor=Math.max(l.tremor,Se?.2:0),g.combo>0?(g.combo-=1,g.modo==="corte"?oe():ie(),g.carga=.4):g.estado="volta")}else if(g.estado==="volta"){const de=Ze(),Se=nt(),Re=de-g.x,st=Se-g.y,Qe=Math.hypot(Re,st)||1;g.x+=Re/Qe*Math.min(Qe,260*v),g.y+=st/Qe*Math.min(Qe,260*v),Qe<5&&(g.estado="espera",g.cd=1.2)}else if(g.estado==="teleporte"&&(g.carga-=v,g.carga<=0)){g.x=ft.x0+20+Math.random()*(ft.x1-ft.x0-40),g.y=ft.y0+10+Math.random()*40,g.sumido=0;const de=X?16:12;for(let Se=0;Se<de;Se++)Sn(g.x,g.y,Se*Math.PI*2/de,Ue(70));g.ta=Math.asin(Math.max(-1,Math.min(1,(g.x-cn)/95)))/.7,g.estado="espera",g.cd=1.3,n(440,.1,"square",.05)}}function Ye(v){let g=(Pe.has("ArrowRight")||Pe.has("KeyD")?1:0)-(Pe.has("ArrowLeft")||Pe.has("KeyA")?1:0),D=(Pe.has("ArrowDown")||Pe.has("KeyS")?1:0)-(Pe.has("ArrowUp")||Pe.has("KeyW")?1:0);if(!g&&!D&&ce.ativo)if(ce.toque)g=ce.dx/18,D=ce.dy/18;else{const K=ce.x-(l.nx-l.cx+Dt/2),J=ce.y-(l.ny-l.cy+Ut/2),Ae=Math.hypot(K,J);Ae>3&&(g=K/Ae,D=J/Ae)}const X=Math.hypot(g,D);if(l.movendo=X>.08,X>.08){l.dirX=g/X,l.dirY=D/X;const K=l.arma>=2?l.slots[l.arma-2]:"normal",J=l.armasNivel.turbo||1,Ae=l.armasNivel.drift||1,Ue=K==="turbo"&&l.boostE>0?1.55+.18*(J-1):1,Ze=l.driftT>0?1.75+.15*(Ae-1):1,nt=K==="salto"&&l.saltoCarga>0?.32:1,G=l.turboT>0?1.35:1,U=Math.min(1,X),ie=l.velNave*Ue*Ze*nt*G*(l.buffVelT>0?1.5:1)*(l.alien?1:l.lentidao||1);l.nx+=l.dirX*ie*v*U,l.ny+=l.dirY*ie*v*U}if(l.alien)l.nx=Math.max(ft.x0,Math.min(ft.x1,l.nx)),l.ny=Math.max(ft.y0,Math.min(ft.y1,l.ny)),l.cx=cn,l.cy=$i;else{const K=Math.min(1,v*5);l.cx+=(l.nx-l.cx)*K,l.cy+=(l.ny-l.cy)*K}}function ln(v){l.proxOnda-=v,l.proxOnda<=0&&go(),l.ondaT=Math.max(0,l.ondaT-v),l.ondaEstado=l.chefe?"chefe":l.ondaT>0?"ativa":"calma";const g=l.ondaT>0?.75+.55*(1-l.ondaT/l.ondaDur):0,D=l.ondaT>0?(.9+.2*l.onda)*g:0,X=.6+Math.min(1.4,l.t*.005)+.03*l.nivel;l.spawnAcc+=v*(X+D)*(l.ondaEstado==="chefe"?.6:1),(!Number.isFinite(l.spawnAcc)||l.spawnAcc<0)&&(l.spawnAcc=0);const K=Math.min(60,14+3*Oa());let J=0;for(;l.spawnAcc>=1&&J<8;)l.spawnAcc-=1,J+=1,l.inimigos.length<K&&Jn();l.ultX==null&&(l.ultX=l.nx,l.ultY=l.ny,l.andou=0,l.angAndar=0);const Ae=l.nx-l.ultX,Ue=l.ny-l.ultY,Ze=Math.hypot(Ae,Ue);for(l.ultX=l.nx,l.ultY=l.ny,Ze>0&&Ze<60&&(l.andou+=Ze,l.angAndar=Math.atan2(Ue,Ae));l.andou>=170;)l.andou-=170,l.inimigos.length<K&&Jn(99,l.angAndar);if(l.ondaT<=0&&!l.chefe&&!l.buraco&&l.t>=l.proxBuraco&&vt(),l.proxEstrela-=v,l.proxEstrela<=0&&(l.proxEstrela=16+Math.random()*14,l.itens.filter(G=>Qi[G.tipo]).length<2)){const G=Math.random()*Math.PI*2,U=70+Math.random()*90;l.itens.push({tipo:Lt(G_),x:l.nx+Math.cos(G)*U,y:l.ny+Math.sin(G)*U,vida:24,fase:Math.random()*6}),n(1500,.05,"sine",.03)}if(l.buraco&&(Et(v),l.alien))return;l.rochas.length<3&&Math.random()<v*.12&&w();for(let G=l.rochas.length-1;G>=0;G--){const U=l.rochas[G];U.x+=U.vx*v,U.y+=U.vy*v,U.piscar=Math.max(0,U.piscar-v);const ie=l.nx-U.x,oe=l.ny-U.y,de=Math.hypot(ie,oe)||1;if(de>650){l.rochas.splice(G,1);continue}de<U.r+Zi&&(l.nx+=ie/de*(U.r+Zi-de),l.ny+=oe/de*(U.r+Zi-de))}for(const G of[...l.inimigos]){if(G.tipo==="chefe"){ze(G,v),o.empurrar(G,Vn.chefe.raio,{x:l.nx,y:l.ny},30*v);continue}G.buffT=Math.max(0,(G.buffT||0)-v),G.suporteFx=Math.max(0,(G.suporteFx||0)-v);const U=l.nx-G.x,ie=l.ny-G.y,oe=Math.hypot(U,ie)||1,de=G.buffT>0?1.35:1;let Se=U/oe*G.vel*de,Re=ie/oe*G.vel*de;if(G.tipo==="morcego"){const Qe=Math.sin(l.ta*5+G.fase)*28;Se+=-ie/oe*Qe,Re+=U/oe*Qe}else if(G.tipo==="inseto"){const Qe=Math.sin(l.ta*9+G.fase)*22;Se+=-ie/oe*Qe,Re+=U/oe*Qe}else if(G.tipo==="atirador"){const Qe=oe>110?1:oe<80?-.8:0,yt=Math.sin(l.ta*1.2+G.fase)*.5;Se=(U/oe*Qe+-ie/oe*yt)*G.vel*de,Re=(ie/oe*Qe+U/oe*yt)*G.vel*de,G.cd-=v*de,G.cd<=0&&Xe(G)&&(Sn(G.x,G.y,Math.atan2(ie,U),74,fa()*(G.buffT>0?1.5:1)),G.cd=1.8+Math.random()*.9)}else if(G.tipo==="sentinela"){const Qe=oe>125?1:oe<92?-.9:0,yt=Math.atan2(ie,U);if(Se=(U/oe*Qe+-ie/oe*Math.sin(l.ta+G.fase)*.35)*G.vel*de,Re=(ie/oe*Qe+U/oe*Math.sin(l.ta+G.fase)*.35)*G.vel*de,G.cd-=v*de,G.cd<=0&&Xe(G)){for(const Vt of[-.18,0,.18])Sn(G.x,G.y,yt+Vt,82,fa()*(G.buffT>0?1.5:1));G.cd=2.5+Math.random()*.8}}else if(G.tipo==="bombardeiro"){const Qe=oe>145?1:oe<110?-.8:0;Se=U/oe*Qe*G.vel*de,Re=ie/oe*Qe*G.vel*de,G.cd-=v*de,G.cd<=0&&Xe(G)&&(Be(G.x,G.y,G.buffT>0?2:1,1.15),G.cd=4+Math.random()*1.2)}else if(G.tipo==="fulminante"){const Qe=oe>145?.9:oe<105?-.9:0,yt=Math.atan2(ie,U);Se=(U/oe*Qe+-ie/oe*Math.sin(l.ta*1.7+G.fase)*.28)*G.vel*de,Re=(ie/oe*Qe+U/oe*Math.sin(l.ta*1.7+G.fase)*.28)*G.vel*de,G.cd-=v*de,G.cd<=0&&Xe(G)&&(l.raios.push({x:G.x,y:G.y,ang:yt,aviso:.8,vida:.28,tick:0,ligou:!1,cor:"#38c8ff",dano:fa(),dono:G}),G.cd=3.8+Math.random()*1.2,n(260,.12,"triangle",.025))}else if(G.tipo==="curandeiro"){const Qe=l.inimigos.filter(yt=>yt!==G&&!yt.morto&&yt.hp<yt.hpMax&&yt.tipo!=="chefe").sort((yt,Vt)=>Math.hypot(yt.x-G.x,yt.y-G.y)-Math.hypot(Vt.x-G.x,Vt.y-G.y))[0];if(Qe){const yt=Qe.x-G.x,Vt=Qe.y-G.y,O=Math.hypot(yt,Vt)||1;O>42?(Se=yt/O*G.vel,Re=Vt/O*G.vel):Se=Re=0}else{const yt=oe<95?-.8:oe>140?.45:0;Se=U/oe*yt*G.vel,Re=ie/oe*yt*G.vel}if(G.cd-=v,G.cd<=0&&Qe&&Math.hypot(Qe.x-G.x,Qe.y-G.y)<Ko){const yt=Math.max(1,Math.ceil(Qe.hpMax*.22));Qe.hp=Math.min(Qe.hpMax,Qe.hp+yt),Qe.suporteFx=.8,G.suporteFx=.8,Yt(Qe.x,Qe.y-8,`+${yt}`,"#7dff9a"),Wt(Qe.x,Qe.y,5,["#7dff9a","#ffffff"],35),G.cd=2.7+Math.random()*.8}}else if(G.tipo==="amplificador"){const Qe=l.inimigos.filter(Vt=>Vt!==G&&!Vt.morto&&Vt.tipo!=="chefe"&&Math.hypot(Vt.x-G.x,Vt.y-G.y)<Ko);for(const Vt of Qe)Vt.buffT=Math.max(Vt.buffT||0,.4);Qe.length&&(G.suporteFx=.25);const yt=oe<100?-.7:oe>150?.4:0;Se=U/oe*yt*G.vel,Re=ie/oe*yt*G.vel}const st=o.fatorLento(G.x,G.y);G.x+=Se*v*st,G.y+=Re*v*st,o.empurrar(G,Vn[G.tipo].raio,{x:l.nx,y:l.ny},G.vel*v*.9),G.piscar=Math.max(0,G.piscar-v)}l.inimigos=l.inimigos.filter(G=>G.tipo==="chefe"||Math.hypot(G.x-l.nx,G.y-l.ny)<520);const nt={x:l.nx,y:l.ny};o.empurrar(nt,Zi),l.nx=nt.x,l.ny=nt.y,l.lentidao=o.fatorLento(l.nx,l.ny);for(let G=l.itens.length-1;G>=0;G--){const U=l.itens[G];U.vida-=v;const ie=l.nx-U.x,oe=l.ny-U.y,de=Math.hypot(ie,oe)||1;if(U.tipo==="moedaEsp"&&de<l.raioIma*1.3&&(U.x+=ie/de*90*v,U.y+=oe/de*90*v),de<Zi+8){Q(U),l.itens.splice(G,1);continue}U.vida<=0&&l.itens.splice(G,1)}for(let G=l.cristais.length-1;G>=0;G--){const U=l.cristais[G];U.x+=U.vx*v,U.y+=U.vy*v;const ie=Math.pow(.05,v);U.vx*=ie,U.vy*=ie;const oe=l.nx-U.x,de=l.ny-U.y,Se=Math.hypot(oe,de)||1;if(l.imaT>0)U.x+=oe/Se*280*v,U.y+=de/Se*280*v;else if(Se<l.raioIma){const Re=70+(l.raioIma-Se)*4;U.x+=oe/Se*Re*v,U.y+=de/Se*Re*v}Se<Zi+l.raioPegar&&(l.xp+=U.v*l.bonusXp*(l.buffXpT>0?2:1),l.cristais.splice(G,1),Wt(U.x,U.y,4,["#8be6ff","#ffffff"],35),n(740+Math.min(U.v,6)*60,.05,"square",.03))}}function Tt(){let v=null,g=1/0;for(const K of l.inimigos){if(K.sumido>0||!Xe(K))continue;const J=Math.hypot(K.x-l.nx,K.y-l.ny);J<g&&(g=J,v=K)}let D=null,X=120;for(const K of l.rochas){if(!Xe(K))continue;const J=Math.hypot(K.x-l.nx,K.y-l.ny);J<X&&(X=J,D=K)}return D&&(!v||g>45)?D:v}const yn=v=>v.r||Vn[v.tipo].raio;function In(v){Fe!=="jogando"||!l||v>=2&&!l.slots[v-2]||l.arma!==v&&(l.arma=v,n(v===2?440:600,.05,"square",.03))}function Kn(){if(l.arma<2||l.slots[l.arma-2]!=="orbes")return[];const v=1+l.armasNivel.orbes,g=20+v*1.5;return Array.from({length:v},(D,X)=>({x:l.nx+Math.cos(l.orbeAng+X*Math.PI*2/v)*g,y:l.ny+Math.sin(l.orbeAng+X*Math.PI*2/v)*g}))}function Gi(v,g){const D=l.armasNivel.missil,X=24*(1+.16*(D-1)),K=(5+l.dano*2)*l.danoGlobal*(1+.32*(D-1));l.ondas.push({x:v,y:g,r:0,max:X,v:170,cor:"#ff9a3a"}),Wt(v,g,14,["#ffd23f","#ff7a3a","#ffffff"],80),l.tremor=Math.max(l.tremor,.1);for(const J of[...l.inimigos])!(J.sumido>0)&&Math.hypot(J.x-v,J.y-g)<X+Vn[J.tipo].raio&&Vi(J,K);for(const J of[...l.rochas])if(Math.hypot(J.x-v,J.y-g)<X+J.r)for(let Ae=0;Ae<3&&l.rochas.includes(J);Ae++)H(J);n(110,.18,"sawtooth",.05),n(70,.2,"square",.04,.05)}function Nt(v){const g=l.arma>=2?l.slots[l.arma-2]:"normal",D=l.recM*l.recargaGlobal;l.laser=null;let X=!1;if(g==="laser"&&!l.laserQuente){const G=l.armasNivel.laser,U=Tt(),ie=l.laserAlc*(1+.18*(G-1));if(U&&Math.hypot(U.x-l.nx,U.y-l.ny)<ie+yn(U)){X=!0;const oe=Math.atan2(U.y-l.ny,U.x-l.nx),de=Math.cos(oe),Se=Math.sin(oe);if(l.mira=oe,l.laser={ang:oe,len:ie},l.laserE-=v*1.15,l.laserE<=0&&(l.laserE=0,l.laserQuente=!0,n(180,.2,"sawtooth",.04)),l.laserTick-=v,l.laserTick<=0){l.laserTick=.1,l.laserN+=1;const Re=l.laserDano*(.5+.5*l.dano)*l.danoGlobal*(1+.3*(G-1))*.1;for(const st of[...l.inimigos]){const Qe=st.x-l.nx,yt=st.y-l.ny,Vt=Qe*de+yt*Se,O=Math.abs(-Qe*Se+yt*de),De=Vn[st.tipo].raio;!(st.sumido>0)&&Vt>0&&Vt<ie+De&&O<De+3&&(Vi(st,Re),Math.random()<.4&&Wt(st.x,st.y,1,["#8bd3ff","#ffffff"],40))}if(l.laserN%3===0)for(const st of[...l.rochas]){const Qe=st.x-l.nx,yt=st.y-l.ny,Vt=Qe*de+yt*Se,O=Math.abs(-Qe*Se+yt*de);Vt>0&&Vt<ie+st.r&&O<st.r+2&&H(st)}re("laser",90,()=>n(300+Math.random()*60,.06,"sawtooth",.02))}}}if(!X){const G=Math.max(1,l.armasNivel.laser),U=l.laserMax*(1+.18*(G-1));l.laserE=Math.min(U,l.laserE+v*U*.13*D*(1+.18*(G-1))),l.laserQuente&&l.laserE>=l.laserMax*.6&&(l.laserQuente=!1)}if(g==="missil"&&(l.missilT-=v,l.missilT<=0)){const G=[...l.inimigos.filter(U=>!(U.sumido>0)&&Xe(U)),...l.rochas.filter(Xe)].map(U=>({o:U,d:Math.hypot(U.x-l.nx,U.y-l.ny)})).filter(U=>U.d<135).sort((U,ie)=>U.d-ie.d);if(G.length){const U=l.armasNivel.missil,ie=1+(U>=3?1:0)+(U>=4?1:0);for(let oe=0;oe<ie;oe++){const de=G[oe%G.length].o;l.misseis.push({x:l.nx,y:l.ny,ang:Math.atan2(de.y-l.ny,de.x-l.nx)+(oe-(ie-1)/2)*.9,alvo:de,vida:2,v:70})}l.missilMax=3.6/(D*(1+.22*(U-1))),l.missilT=l.missilMax,n(240,.12,"sawtooth",.04),n(420,.12,"sawtooth",.03,.06)}else l.missilT=0}for(let G=l.misseis.length-1;G>=0;G--){const U=l.misseis[G],ie=U.alvo,oe=ie&&ie.hp>0&&!ie.morto&&(l.inimigos.includes(ie)||l.rochas.includes(ie));if(oe){let Se=Math.atan2(ie.y-U.y,ie.x-U.x)-U.ang;Se=Math.atan2(Math.sin(Se),Math.cos(Se)),U.ang+=Math.max(-6*v,Math.min(6*v,Se))}U.v=Math.min(150,U.v+160*v),U.x+=Math.cos(U.ang)*U.v*v,U.y+=Math.sin(U.ang)*U.v*v,U.vida-=v,Math.random()<.6&&l.parts.push({x:U.x,y:U.y,vx:0,vy:0,vida:.25,cor:Math.random()<.5?"#ffd23f":"#ff7a3a"}),(oe&&Math.hypot(ie.x-U.x,ie.y-U.y)<yn(ie)+3||U.vida<=0)&&(l.misseis.splice(G,1),Gi(U.x,U.y))}if(g==="orbes"){const G=l.armasNivel.orbes;l.orbeAng+=v*3.2*(1+.18*(G-1))*l.recargaGlobal;const U=(2+l.dano*.5)*l.danoGlobal*(1+.32*(G-1));for(const ie of Kn()){for(const oe of[...l.inimigos])oe.sumido>0||(oe.cdOrbe=(oe.cdOrbe||0)-v,oe.cdOrbe<=0&&Math.hypot(ie.x-oe.x,ie.y-oe.y)<Vn[oe.tipo].raio+4&&(Vi(oe,U),oe.cdOrbe=.35,Wt(oe.x,oe.y,2,["#ff3bd4","#ffffff"],40)));for(const oe of[...l.rochas])oe.cdOrbe=(oe.cdOrbe||0)-v,oe.cdOrbe<=0&&Math.hypot(ie.x-oe.x,ie.y-oe.y)<oe.r+4&&(H(oe),oe.cdOrbe=.5)}}const K=Math.max(1,l.armasNivel.turbo),J=3+.75*(K-1);l.boostMax=J,g==="turbo"&&l.movendo&&l.boostE>0?(l.boostE=Math.max(0,l.boostE-v),Math.random()<.45&&l.parts.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vx:-l.dirX*20,vy:-l.dirY*20,vida:.25,cor:Math.random()<.5?"#7dff9a":"#ffffff"})):l.boostE=Math.min(J,l.boostE+v*.5*D*(1+.12*(K-1)));const Ae=Math.max(1,l.armasNivel.cura);if(l.curaMax=Math.max(4.5,(11-1.6*(Ae-1))/D),l.curaCd=Math.max(0,l.curaCd-v),g==="cura"&&l.curaCd<=0&&l.hp<l.maxHp){const G=1+(Ae>=3?1:0)+(Ae>=4?1:0);l.hp=Math.min(l.maxHp,l.hp+G),l.curaCd=l.curaMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:30,v:80,cor:"#7dff9a"}),Wt(l.nx,l.ny,12,["#7dff9a","#ffffff"],45),Yt(l.nx,l.ny-13,`+${G} VIDA`,"#7dff9a"),n(660,.12,"sine",.05),n(880,.16,"sine",.04,.1)}const Ue=Math.max(1,l.armasNivel.escudo);l.escudoMax=Math.max(6,(13-1.3*(Ue-1))/D),l.escudoCd=Math.max(0,l.escudoCd-v),g==="escudo"&&l.escudoCd<=0&&l.escudoT<=0&&(l.escudoT=2.4+.75*(Ue-1),l.escudoCd=l.escudoMax,l.ondas.push({x:l.nx,y:l.ny,r:0,max:34,v:100,cor:"#8bd3ff"}),Yt(l.nx,l.ny-13,"ESCUDO DE FASE","#8bd3ff"),n(440,.18,"triangle",.05));const Ze=Math.max(1,l.armasNivel.salto);if(l.saltoMax=Math.max(3.5,(8-.85*(Ze-1))/D),l.saltoCd=Math.max(0,l.saltoCd-v),l.saltoCargaMax=Math.max(.42,.82-.1*(Ze-1)),g!=="salto"||!l.movendo?l.saltoCarga=0:l.saltoCd<=0&&l.saltoCarga<=0&&(l.saltoCarga=l.saltoCargaMax,n(180,.16,"sine",.04)),g==="salto"&&l.saltoCarga>0&&(l.saltoCarga-=v,Math.random()<.55&&l.parts.push({x:l.nx+(Math.random()-.5)*18,y:l.ny+(Math.random()-.5)*18,vx:-l.dirX*8,vy:-l.dirY*8,vida:.22,cor:Math.random()<.5?"#a56bff":"#ffffff"}),l.saltoCarga<=0)){const G=l.nx,U=l.ny,ie=58+18*Ze;l.nx+=l.dirX*ie,l.ny+=l.dirY*ie,l.alien&&(l.nx=Math.max(ft.x0,Math.min(ft.x1,l.nx)),l.ny=Math.max(ft.y0,Math.min(ft.y1,l.ny))),l.saltoCd=l.saltoMax,l.invul=Math.max(l.invul,.35),l.ondas.push({x:G,y:U,r:0,max:24,v:120,cor:"#a56bff"}),l.ondas.push({x:l.nx,y:l.ny,r:0,max:24,v:120,cor:"#a56bff"}),Wt(G,U,14,["#a56bff","#ffffff"],60),Wt(l.nx,l.ny,14,["#a56bff","#ffffff"],60),l.flash=Math.max(l.flash,.12),n(220,.1,"sine",.05),n(880,.14,"sine",.04,.08)}const nt=Math.max(1,l.armasNivel.drift);l.driftMax=Math.max(3.2,(7-.7*(nt-1))/D),l.driftCd=Math.max(0,l.driftCd-v),l.driftT=Math.max(0,l.driftT-v),g==="drift"&&l.driftCd<=0&&l.movendo&&l.driftT<=0&&(l.driftT=.75+.22*nt,l.driftCd=l.driftMax,l.driftAcc=0,l.tremor=Math.max(l.tremor,.12),n(130,.22,"sawtooth",.05)),l.driftT>0&&l.movendo&&(l.driftAcc-=v,l.driftAcc<=0&&(l.driftAcc=.055,l.trilhasFogo.push({x:l.nx-l.dirX*7,y:l.ny-l.dirY*7,vida:1+.12*nt,max:1+.12*nt,nv:nt})));for(const G of l.inimigos)G.cdFogo=Math.max(0,(G.cdFogo||0)-v);for(let G=l.trilhasFogo.length-1;G>=0;G--){const U=l.trilhasFogo[G];U.vida-=v;for(const ie of[...l.inimigos])!(ie.sumido>0)&&ie.cdFogo<=0&&Math.hypot(ie.x-U.x,ie.y-U.y)<Vn[ie.tipo].raio+7&&(Vi(ie,(1.2+U.nv*.75)*l.danoGlobal),ie.cdFogo=.22);U.vida<=0&&l.trilhasFogo.splice(G,1)}}function Zt(v){for(let g=l.tiros.length-1;g>=0;g--){const D=l.tiros[g];if(D.x+=D.vx*v,D.y+=D.vy*v,Math.hypot(D.x-l.nx,D.y-l.ny)>260){l.tiros.splice(g,1);continue}let X=!1;for(const K of[...l.inimigos])if(!(D.acertou.has(K)||K.sumido>0)&&Math.hypot(D.x-K.x,D.y-K.y)<Vn[K.tipo].raio+2)if(D.acertou.add(K),Wt(D.x,D.y,2,["#ffe14a","#ffffff"],40),Vi(K,D.dano),D.perf>0)D.perf-=1;else{X=!0;break}if(!X){for(const K of[...l.rochas])if(!D.acertou.has(K)&&Math.hypot(D.x-K.x,D.y-K.y)<K.r+2)if(D.acertou.add(K),H(K),D.perf>0)D.perf-=1;else{X=!0;break}}X&&l.tiros.splice(g,1)}}function si(v){for(let g=l.tirosInimigos.length-1;g>=0;g--){const D=l.tirosInimigos[g];if(D.x+=D.vx*v,D.y+=D.vy*v,D.vida-=v,D.vida<=0||Math.hypot(D.x-l.nx,D.y-l.ny)>420||l.alien&&(D.x<ft.x0-40||D.x>ft.x1+40||D.y<ft.y0-40||D.y>ft.y1+40)){l.tirosInimigos.splice(g,1);continue}Math.hypot(D.x-l.nx,D.y-l.ny)<Zi+1.5&&(ua(D.dano),Wt(D.x,D.y,4,["#ff5a8a","#ffffff"],50),l.tirosInimigos.splice(g,1))}for(let g=l.raios.length-1;g>=0;g--){const D=l.raios[g];if(D.dono){if(D.dono.morto){l.raios.splice(g,1);continue}D.x=D.dono.x,D.y=D.dono.y}if(D.aviso>0){D.aviso-=v;continue}D.ligou||(D.ligou=!0,l.tremor=Math.max(l.tremor,.2),n(110,.4,"sawtooth",.06)),D.vida-=v,D.tick-=v,D.giro&&(D.ang+=D.giro*v),D.seg&&l.alien&&(D.x=l.alien.x,D.y=l.alien.y+8);const X=l.nx-D.x,K=l.ny-D.y,J=X*Math.cos(D.ang)+K*Math.sin(D.ang),Ae=Math.abs(-X*Math.sin(D.ang)+K*Math.cos(D.ang));J>0&&J<400&&Ae<8&&D.tick<=0&&(ua(D.dano||1),D.tick=.3),D.vida<=0&&l.raios.splice(g,1)}for(let g=l.campos.length-1;g>=0;g--){const D=l.campos[g];if(D.aviso>0){D.aviso-=v,D.aviso<=0&&(l.tremor=Math.max(l.tremor,.15),n(100,.2,"sawtooth",.05));continue}D.vida-=v,D.tick-=v,Math.hypot(l.nx-D.x,l.ny-D.y)<D.r+3&&D.tick<=0&&(ua(1),D.tick=.5),D.vida<=0&&l.campos.splice(g,1)}}function kt(){for(const v of[...l.inimigos]){const g=Vn[v.tipo];if(Math.hypot(v.x-l.nx,v.y-l.ny)>=g.raio+Zi||v.sumido>0)continue;if(v.tipo==="chefe"||v.tipo==="alien"){if(ua(g.dano)){const K=l.nx-v.x,J=l.ny-v.y,Ae=Math.hypot(K,J)||1;l.nx+=K/Ae*18,l.ny+=J/Ae*18}continue}if(g.dano<=0){const K=v.x-l.nx,J=v.y-l.ny,Ae=Math.hypot(K,J)||1;v.x+=K/Ae*8,v.y+=J/Ae*8;continue}Wt(v.x,v.y,10,["#ff3b4a","#ffb3ba","#ffffff"],70);const X=l.inimigos.indexOf(v);X>=0&&l.inimigos.splice(X,1),ua(g.dano)}}function li(v){if(l.ta+=v,l.alien||(l.t+=v),l.invul=Math.max(0,l.invul-v),l.tremor=Math.max(0,l.tremor-v),l.flash=Math.max(0,l.flash-v),l.imaT=Math.max(0,l.imaT-v),l.turboT=Math.max(0,l.turboT-v),l.escudoT=Math.max(0,l.escudoT-v),l.buffVelT=Math.max(0,l.buffVelT-v),l.buffXpT=Math.max(0,l.buffXpT-v),l.buffDanoT>0&&(l.buffDanoT-=v,l.buffDanoT<=0&&(l.buffDanoT=0,l.danoGlobal/=1.5)),l.aviso=Math.max(0,l.aviso-v),l.comboT>0&&(l.comboT-=v,l.comboT<=0&&(l.combo=0)),l.upgFx&&(l.upgFx.t-=v,l.upgFx.t<=0&&(l.upgFx=null)),Ye(v),l.alien?on(v):ln(v),l.recarga-=v,l.arma===1&&l.recarga<=0){const g=Tt();g?(xo(g),l.recarga=1/(l.cadencia*l.recargaGlobal*(l.turboT>0?2:1))):l.recarga=.05}l.barreira<l.barreiraMax&&(l.barreiraT+=v,l.barreiraT>=l.tempoBarreira&&(l.barreira+=1,l.barreiraT=0,Yt(l.nx,l.ny-12,"ESCUDO ON","#7dff9a"),n(520,.08,"triangle",.04))),Nt(v),Zt(v),si(v),kt();for(const g of l.ondas)g.r+=g.v*v;l.ondas=l.ondas.filter(g=>g.r<g.max);for(let g=l.parts.length-1;g>=0;g--){const D=l.parts[g];D.x+=D.vx*v,D.y+=D.vy*v,D.vida-=v,D.vida<=0&&l.parts.splice(g,1)}for(let g=l.textos.length-1;g>=0;g--){const D=l.textos[g];D.y-=14*v,D.vida-=v,D.vida<=0&&l.textos.splice(g,1)}for(const g of l.inimigos)g.piscar=Math.max(0,(g.piscar||0)-v);if(l.hp<=0&&!l.pendente)if(l.alien)l.pendente="expulso";else{mh();return}if(l.pendente){const g=l.pendente;l.pendente=null,Pt(g==="vitoria");return}l.xp>=l.xpProx&&dh()}let zn=[];const Tr=v=>v.nivel?v.nivel(l):l.niveis[v.id]|0;function uh(v,g=3){const D=[...v],X=[];for(;D.length&&X.length<g;){const K=Ze=>(typeof Ze.peso=="function"?Ze.peso(l):Ze.peso)||1,J=D.reduce((Ze,nt)=>Ze+K(nt),0);let Ae=Math.random()*J,Ue=0;for(let Ze=0;Ze<D.length;Ze++)if(Ae-=K(D[Ze]),Ae<=0){Ue=Ze;break}X.push(D.splice(Ue,1)[0])}return X}function dh(){l.xp-=l.xpProx,l.nivel+=1,l.xpProx=Math.round(l.xpProx*1.3+2);const v=V_.filter(J=>Tr(J)<J.max&&(!J.requer||J.requer(l)));if(zn=uh(v),!zn.length)return;Fe="escolha",n(784,.1,"square",.05),n(988,.1,"square",.05,.1),n(1319,.16,"square",.05,.2),we.className="arc-painel arc-upgrade";const g=i("div","arc-up-topo"),D=i("div");D.append(i("small",null,`SUBIU PARA O NÍVEL ${l.nivel}`),i("h3",null,"ESCOLHA UM UPGRADE"));const X=i("div","arc-arsenal");l.slots.forEach((J,Ae)=>X.append(i("span",J?"on":"",J?`${Ae+2} ${Ru[J]} · N${l.armasNivel[J]}`:`${Ae+2} VAZIO`))),g.append(D,X);const K=i("div","arc-cartas");zn.forEach((J,Ae)=>{const Ue=Tr(J),Ze=i("button","arc-carta");Ze.style.setProperty("--cor",J.cor||"#4aa8ff");const nt=i("span","arc-carta-topo");nt.append(i("i",null,J.icone||"▲"),i("small",null,J.grupo||"UPGRADE"),i("em",null,(typeof J.raridade=="function"?J.raridade(l):J.raridade)||"COMUM"));const G=i("span","arc-up-pips");for(let U=1;U<=J.max;U++)G.append(i("i",U<=Ue?"on":U===Ue+1?"prox":""));Ze.append(nt,i("b",null,J.nome),i("span","arc-desc",J.desc),G,i("strong",null,`[${Ae+1}] ESCOLHER · N${Ue} → N${Ue+1}`)),Ze.onclick=()=>rf(Ae),K.append(Ze)}),we.replaceChildren(g,K,i("p","arc-up-dica","A partida fica pausada enquanto você decide. Cada arma chega no máximo ao nível 4.")),we.hidden=!1}function rf(v){if(Fe!=="escolha"||!zn[v])return;const g=zn[v];g.aplicar(l),g.nivel||(l.niveis[g.id]=(l.niveis[g.id]|0)+1),wn(),l.upgFx={t:1,max:1},Wt(l.nx,l.ny,18,["#ffe14a","#ffffff","#8bd3ff"],80),Yt(l.nx,l.ny-16,`▲ ${g.nome}`,"#ffe14a"),we.hidden=!0,Fe="jogando",Le=performance.now(),n(660,.08,"triangle",.05)}const Ps=[{nome:"NÚCLEO DE ENERGIA",sub:"Reator principal: energia para todos os sistemas",lado:"esq",ancora:[.5,.5],ids:["nucleo","bateria"]},{nome:"MOTOR PRINCIPAL",sub:"Propulsão, impulso e velocidade",lado:"esq",ancora:[.16,.6],ids:["motor"]},{nome:"ESTRUTURA / CASCO",sub:"Blindagem e resistência a danos",lado:"esq",ancora:[.27,.27],ids:["casco"]},{nome:"ANTENA / SENSORES",sub:"Detecção de cristais e ganho de XP",lado:"dir",ancora:[.5,.07],ids:["ima","xp"]},{nome:"ARMAS LATERAIS",sub:"Canhões e lente do laser",lado:"dir",ancora:[.88,.42],ids:["dano","cadencia","projetil","lente"]},{nome:"ESCUDO",sub:"Barreira de energia regenerativa",lado:"dir",ancora:[.8,.8],ids:["escudo"]}],za=document.createElement("canvas");za.width=za.height=128,za.className="of-nave";const Jt=za.getContext("2d");Jt.imageSmoothingEnabled=!1;let Is=null,wr=null;function hh(v){const g=_n(128,128),D="#2e7de0",X="#8b93a8",K="#5a6176",J="#c9cdd8",Ae="#171b2c",Ue="#ff7a3a",Ze="#e2533a";for(const[U,ie]of[[44,34],[82,92]]){for(let oe=0;oe<3;oe++)g.linha(U+oe,92,ie+oe,118,oe===1?X:K);g.retangulo(ie-5,118,13,3,J)}g.retangulo(0,122,128,6,"#12172b");for(let U=0;U<128;U+=8)g.retangulo(U,123,4,4,"#ffd23f");g.disco(62,60,38,D),g.disco(65,62,33,Ae),g.elipse(46,30,7,3,"#cfe9ff"),g.elipse(40,36,3,2,"#9cc9ff");for(const[U,ie,oe,de]of[[40,44,14,9],[42,70,12,10],[78,44,12,8],[80,72,14,9],[56,84,16,7],[56,36,14,7]])g.retangulo(U,ie,oe,de,K),g.retangulo(U,ie,oe,1,X),g.retangulo(U+2,ie+3,oe-4,2,"#2d3348");for(const[U,ie,oe,de]of[[40,60,52,60],[78,60,92,60],[65,40,65,50],[65,74,65,84],[47,53,47,66],[86,52,86,70]])g.linha(U,ie,oe,de,Ue),g.linha(U+1,ie+1,oe+1,de+1,"#b34a1e");for(const[U,ie,oe]of[[86,49,"#ffd23f"],[45,47,"#ff3b4a"],[82,76,"#7dff9a"],[60,87,"#ffd23f"]])g.pixel(U,ie,oe);g.disco(65,62,14,X),g.disco(65,62,12,"#10131f");for(const[U,ie]of[[50,47],[79,47],[50,76],[79,76]])g.retangulo(U,ie,3,3,J);for(let U=0;U<v.bateria;U++)g.retangulo(51+U*5,85,4,6,"#10131f"),g.retangulo(52+U*5,86,2,4,"#7dff9a");g.disco(80,34,5,J),g.disco(80,34,4,"#8bd3ff"),g.retangulo(77,33,6,1,"#ffffff");for(let U=0;U<v.casco;U++){const ie=2.6+U*.5,oe=Math.round(62+Math.cos(ie)*35),de=Math.round(60+Math.sin(ie)*35);g.retangulo(oe-2,de-2,5,5,K),g.retangulo(oe-1,de-1,3,3,J)}const nt=1+v.projetil,G=18+Math.floor(v.dano*1.6);for(let U=0;U<nt;U++){const ie=48+U*9;g.retangulo(88,ie-2,8,9,X),g.retangulo(90,ie,G,5,Ze),g.retangulo(90,ie,G,1,"#ff9a6a"),g.retangulo(90+G,ie-1,3,7,J),v.lente>0&&g.disco(90+G+5,ie+2,2,"#7be3ff");for(let oe=0;oe<v.cadencia;oe++)g.retangulo(92+oe*4,ie+1,1,3,"#ffd23f")}g.retangulo(16,50,24,22,X);for(const U of[20,26,32])g.retangulo(U,50,2,22,K);g.poligono([[16,50],[8,44],[8,78],[16,72]],K),g.poligono([[14,54],[10,50],[10,72],[14,68]],"#10131f"),v.motor>=3&&(g.retangulo(18,76,14,6,X),g.retangulo(14,76,4,6,K)),v.motor>=2&&(g.poligono([[28,50],[32,41],[36,50]],Ue),g.poligono([[28,72],[32,81],[36,72]],Ue)),g.retangulo(63,10,3,14,X),g.disco(64,8,4,"#e2243a"),g.pixel(63,6,"#ffb3ba");for(let U=0;U<Math.min(4,v.ima);U++)g.elipse(72+U*5,17-U*2,4,2,U%2?X:J);return v.xp>0&&(g.retangulo(55,14,2,8,X),g.disco(56,13,2,"#7dff9a")),g.contorno("#070a1a"),g.c}const Rr=(v,g,D,X)=>{Jt.fillStyle=X;for(let K=-D;K<=D;K++)for(let J=-D;J<=D;J++)J*J+K*K<=D*D+.5&&Jt.fillRect(v+J,g+K,1,1)};function of(v){const g=B.oficina,D=wr&&v-wr.t0<1.2?{i:wr.i,u:(v-wr.t0)/1.2}:null;Jt.clearRect(0,0,128,128),Is&&Jt.drawImage(Is,0,0);const X=g.nucleo>=4?["#ff7a2a","#ffc14a"]:g.nucleo>=2?["#22b85a","#7dff9a"]:["#2f8cff","#8bd3ff"],K=Math.sin(v*4)>0?1:0;Rr(65,62,9+K,X[0]),Rr(65,62,6,X[1]),Rr(65,62,3,"#ffffff"),Jt.fillStyle=X[1];for(let nt=0;nt<6;nt++){const G=v*2+nt*Math.PI/3;Jt.fillRect(Math.round(65+Math.cos(G)*12),Math.round(62+Math.sin(G)*12),1,1)}const J=nt=>{const G=Math.round((8+g.motor*3+Math.floor(Math.random()*4))*(D&&D.i===1?1+1.5*(1-D.u):1));for(let U=0;U<G;U++){const ie=Math.max(1,Math.round((1-U/G)*12));Jt.fillStyle=U<G*.35?"#fff0a0":U<G*.7?"#ffc83d":"#ff7a3a",Jt.fillRect(7-U,nt-(ie>>1),1,ie)}};J(61),g.motor>=3&&J(79),Math.floor(v*2)%2&&(Jt.fillStyle="#ff9aa6",Jt.fillRect(63,6,2,2));const Ae=1+g.projetil,Ue=18+Math.floor(g.dano*1.6);if(Math.floor(v*3)%2)for(let nt=0;nt<Ae;nt++)Jt.fillStyle="#ffe14a",Jt.fillRect(90+Ue+3,48+nt*9+2,2,1);const Ze=g.escudo>0?.35+.13*g.escudo:.12;Jt.globalAlpha=Math.min(1,Ze),Jt.fillStyle="#7dff9a";for(const[nt,G]of[[48,!0],[51,g.escudo>=4]])if(G)for(let U=0;U<72;U+=2){const ie=U*Math.PI*2/72+v*.4;Jt.fillRect(Math.round(62+Math.cos(ie)*nt),Math.round(60+Math.sin(ie)*nt),2,2)}Jt.globalAlpha=1,D&&ph(D,g)}function ph(v,g){const D=Ps[v.i],X=Math.round(D.ancora[0]*128),K=Math.round(D.ancora[1]*128),J=v.u,Ae=(Ue,Ze,nt,G,U=28)=>{Jt.fillStyle=G;for(let ie=0;ie<U;ie++){const oe=ie*Math.PI*2/U;Jt.fillRect(Math.round(Ue+Math.cos(oe)*nt),Math.round(Ze+Math.sin(oe)*nt),2,2)}};Jt.globalAlpha=1-J,Ae(X,K,4+J*26,"#ffe14a"),Jt.fillStyle="#ffffff";for(let Ue=0;Ue<10;Ue++){const Ze=Ue*.63+1,nt=J*34;Jt.fillRect(Math.round(X+Math.cos(Ze)*nt),Math.round(K+Math.sin(Ze)*nt-J*6),2,2)}if(v.i===0)Rr(65,62,12+Math.round(J*8),"#ffffff");else if(v.i===2)Ae(62,60,39,"#ffffff",64);else if(v.i===3)Ae(64,8,J*42,"#8bd3ff",36),Ae(64,8,J*24,"#ffffff",24);else if(v.i===4){const Ue=18+Math.floor(g.dano*1.6);for(let Ze=0;Ze<1+g.projetil;Ze++)Rr(90+Ue+6,50+Ze*9,4,"#ffe14a")}else v.i===5&&Ae(62,60,48+J*6,"#ffffff",72);Jt.globalAlpha=1}function Ls(){const v=Ie.querySelector(".of-corpo");if(!v)return;const g=v.querySelector("svg");if(g.replaceChildren(),getComputedStyle(g).display==="none")return;const D=v.getBoundingClientRect(),X=za.getBoundingClientRect(),K="http://www.w3.org/2000/svg";v.querySelectorAll(".of-parte").forEach(J=>{const Ae=Ps[Number(J.dataset.i)],Ue=J.getBoundingClientRect(),Ze=(Ae.lado==="esq"?Ue.right:Ue.left)-D.left,nt=(Ue.top+Ue.bottom)/2-D.top,G=X.left+Ae.ancora[0]*X.width-D.left,U=X.top+Ae.ancora[1]*X.height-D.top,ie=Ze+(Ae.lado==="esq"?18:-18),oe=document.createElementNS(K,"path");oe.setAttribute("d",`M${Ze} ${nt} L${ie} ${nt} L${G} ${U}`),oe.setAttribute("class","of-linha");const de=document.createElementNS(K,"circle");de.setAttribute("cx",G),de.setAttribute("cy",U),de.setAttribute("r",4),de.setAttribute("class","of-ponto"),g.append(oe,de)})}window.addEventListener("resize",()=>{Fe==="oficina"&&Ls()});function sf(v=-1,g=""){const D=B.oficina;Is=hh(D);const X=i("div","of-topo"),K=i("button","arc-btn","VOLTAR [ESC]");K.onclick=cf,X.append(i("h3",null,"OFICINA · ENGENHARIA DA NAVE"),i("span","of-moedas",`◆ ${B.moedas}`),K);const J=i("div","of-corpo"),Ae=i("div","of-col"),Ue=i("div","of-col"),Ze=i("div","of-centro");Ze.append(za,i("p",null,"Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.")),Ps.forEach((U,ie)=>{const oe=i("div",ie===v?"of-parte upgradiada":"of-parte");oe.dataset.i=String(ie),ie===v&&oe.append(i("span","of-selo","▲ UPGRADE!")),oe.append(i("h4",null,U.nome),i("p","sub",U.sub));for(const de of U.ids){const Se=Vc.find(He=>He.id===de),Re=D[de],st=Re>=Se.max,Qe=Se.custo(Re),yt=i("div",ie===v&&de===g?"of-melhoria upg":"of-melhoria"),Vt=i("div","info"),O=i("span","pips");for(let He=0;He<Se.max;He++)O.append(i("i",He<Re?He===Re-1&&ie===v&&de===g?"on nova":"on":""));Vt.append(i("b",null,Se.nome),i("small",null,Se.desc),O);const De=i("button","arc-btn pequeno",st?"MÁX":`◆${Qe}`);De.disabled=st||B.moedas<Qe,De.onclick=()=>{B.moedas>=Qe&&!st&&(B.moedas-=Qe,B.oficina[de]+=1,ae(),n(880,.08,"square",.05),n(1175,.1,"square",.05,.08),n(1568,.16,"triangle",.05,.16),wr={i:ie,t0:performance.now()/1e3},wn(),sf(ie,de),Ds())},yt.append(Vt,De),oe.append(yt)}(U.lado==="esq"?Ae:Ue).append(oe)});const nt=document.createElementNS("http://www.w3.org/2000/svg","svg");nt.setAttribute("class","of-svg"),J.append(Ae,Ze,Ue,nt);const G=i("p","of-rodape","ARMAS DE BORDO: toda run começa apenas com o canhão [1]. Laser, mísseis e orbes aparecem por sorte nos upgrades e ocupam os slots [2], [3] e [4].");Ie.replaceChildren(X,J,G),of(performance.now()/1e3),requestAnimationFrame(Ls)}function Ds(){N.textContent=`OFICINA (◆${B.moedas})`}function lf(){pe=Fe==="fim"?"fim":"inicio",Fe="oficina",ut.hidden=!0,Ke.hidden=!0,sf(),Ie.hidden=!1,requestAnimationFrame(Ls)}function cf(){Fe==="oficina"&&(Fe=pe,Ie.hidden=!0,(pe==="fim"?Ke:ut).hidden=!1,Ds())}function mh(){Fe="fim",P("fim");const v=Math.min(z_,Math.floor(l.kills/30)+Math.floor(l.nivel/3)),g=Math.floor(l.t),D=g>B.tempo||l.kills>B.kills||l.onda>B.onda;B.tempo=Math.max(B.tempo,g),B.kills=Math.max(B.kills,l.kills),B.onda=Math.max(B.onda,l.onda),B.skin=(B.skin+1+Math.floor(Math.random()*(Pi.length-1)))%Pi.length,B.moedas+=v,ae(),n(220,.25,"sawtooth",.05),n(165,.35,"sawtooth",.05,.25),Ke.replaceChildren(i("h3",null,"FIM DE JOGO"),i("p",null,`Tempo: ${_o(g)} · Monstros: ${l.kills} · Nível: ${l.nivel} · Onda: ${l.onda} · Melhor combo: x${l.melhorCombo}`),i("p","ganhou",`+${v+l.moedasRun} ◆ MOEDAS ESPACIAIS`),i("p","dica",`${l.moedasRun} coletadas + ${v} de bônus · Recorde: ${_o(B.tempo)} · ${B.kills} monstros · ${B.onda} ondas${D?" · NOVO RECORDE!":""}`));const X=i("button","arc-btn","JOGAR DE NOVO [ESPAÇO]");X.onclick=Ns;const K=i("button","arc-btn sec",`OFICINA (◆${B.moedas})`);K.onclick=lf;const J=i("button","arc-btn sec","SAIR");J.onclick=ka,Ke.append(X,K,J),Ke.hidden=!1}const _o=v=>`${Math.floor(v/60)}:${String(v%60).padStart(2,"0")}`,ff=v=>v>=6?a.cristais[6]:v>=3?a.cristais[3]:v>=2?a.cristais[2]:a.cristais[1],uf=(v,g,D,X,K)=>{A.fillStyle="#070a1a",A.fillRect(v-1,g-1,D+2,6),A.fillStyle="#3a2030",A.fillRect(v,g,D,4),A.fillStyle=K,A.fillRect(v,g,Math.max(0,Math.round(D*X)),4)};function gh(v){A.fillStyle="#0a0614",A.fillRect(0,0,Dt,Ut);for(let g=0;g<6;g++){const D=10+(v*22+g*40)%240;A.strokeStyle=`rgba(138, 92, 255, ${.28*(1-D/250)})`,A.lineWidth=1,A.beginPath(),A.arc(cn,$i,D,0,Math.PI*2),A.stroke()}for(let g=0;g<40;g++)A.fillStyle=Math.sin(v*2+g)>0?"#9a86c0":"#3a2f60",A.fillRect(g*53%Dt,g*31%Ut,1,1);A.strokeStyle="#8a5cff",A.lineWidth=2,A.strokeRect(ft.x0-3,ft.y0-3,ft.x1-ft.x0+6,ft.y1-ft.y0+6)}function Mo(v,g,D,X,K,J="",Ae=!1){const Ue=v-(D+Dt/2),Ze=g-(X+Ut/2),nt=Math.min((Dt/2-10)/(Math.abs(Ue)||1e-6),(Ut/2-10)/(Math.abs(Ze)||1e-6)),G=Math.round(Dt/2+Ue*nt),U=Math.round(Ut/2+Ze*nt);if(!(Ae&&Math.floor(l.ta*6)%2===0)&&(A.fillStyle="#070a1a",A.fillRect(G-3,U-3,7,7),A.fillStyle=K,A.fillRect(G-2,U-2,5,5),A.fillStyle="#ffffff",A.fillRect(G-1,U-1,3,3),J)){const ie=G<Dt/2;A.font="bold 8px monospace",A.textAlign=ie?"left":"right";const oe=G+(ie?7:-7),de=Math.max(10,Math.min(Ut-4,U+3));A.fillStyle="#070a1a",A.fillText(J,oe+1,de+1),A.fillStyle=Ae?"#ff9aa6":K,A.fillText(J,oe,de)}}function xh(){const v=performance.now()/1e3,g=l?l.cx:cn,D=l?l.cy:$i;if(A.save(),l&&l.alien?gh(v):V.desenhar(A,g,D,v,Cs()),!l){A.restore();return}const X=Math.round(g-Dt/2),K=Math.round(D-Ut/2),J=(O,De,He=16)=>O>X-He&&O<X+Dt+He&&De>K-He&&De<K+Ut+He,Ae=!l.alien;A.save(),l.tremor>0&&A.translate(Math.round((Math.random()-.5)*4),Math.round((Math.random()-.5)*4)),A.translate(-X,-K),A.strokeStyle="rgba(74, 168, 255, 0.12)",A.lineWidth=1;for(const O of[30,62])A.beginPath(),A.arc(Math.round(l.nx),Math.round(l.ny),O,0,Math.PI*2),A.stroke();for(const O of l.campos){if(!J(O.x,O.y,40))continue;const De=Math.round(O.x),He=Math.round(O.y);if(O.aviso>0){const mt=Math.floor(l.ta*8)%2===0;A.strokeStyle=mt?"#ff3b4a":"#ffb3ba",A.lineWidth=1,A.setLineDash([3,3]),A.beginPath(),A.arc(De,He,O.r,0,Math.PI*2),A.stroke(),A.setLineDash([]),A.fillStyle="rgba(255, 59, 74, 0.12)",A.beginPath(),A.arc(De,He,Math.max(0,O.r*(1-O.aviso/(O.avisoMax||1.4))),0,Math.PI*2),A.fill()}else{A.fillStyle=`rgba(255, 138, 58, ${.28+.12*Math.sin(l.ta*10)})`,A.beginPath(),A.arc(De,He,O.r,0,Math.PI*2),A.fill(),A.strokeStyle="#ff8a3a",A.lineWidth=2,A.beginPath(),A.arc(De,He,O.r,0,Math.PI*2),A.stroke();for(let mt=0;mt<6;mt++){const hn=l.ta*3+mt*1.05;A.fillStyle="#ffd23f",A.fillRect(Math.round(De+Math.cos(hn)*O.r*.6),Math.round(He+Math.sin(hn)*O.r*.6),2,2)}}}for(const O of l.campos)if(O.aviso>0&&O.ox!==void 0){const De=(O.avisoMax-O.aviso)/.45;if(De>=0&&De<1){const He=Math.round(O.ox+(O.x-O.ox)*De),mt=Math.round(O.oy+(O.y-O.oy)*De-Math.sin(Math.PI*De)*24);A.fillStyle="#070a1a",A.fillRect(He-3,mt-3,6,6),A.fillStyle="#ff7a3a",A.fillRect(He-2,mt-2,4,4),A.fillStyle="#ffffff",A.fillRect(He-1,mt-2,2,1)}}if(Ae){if(o.desenhar(A,X,K,Dt,Ut,v),l.buraco&&J(l.buraco.x,l.buraco.y,30)){__(A,l.buraco.x,l.buraco.y,l.ta,Math.min(1,l.buraco.vida/3));const O=`${Math.ceil(l.buraco.vida)}s`,De=Math.round(l.buraco.x),He=Math.round(l.buraco.y)-28;A.save(),A.font="bold 8px monospace",A.textAlign="center",A.fillStyle="#070a1a",A.fillText(O,De+1,He+1),A.fillStyle=l.buraco.vida<8&&Math.floor(l.ta*6)%2===0?"#ff9aa6":"#d9a8ff",A.fillText(O,De,He),A.restore()}for(const O of l.rochas){if(!J(O.x,O.y,20))continue;const De=O.hp<=O.hpMax*.34?2:O.hp<=O.hpMax*.67?1:0,He=r[O.tam].quadros[De];O.piscar>0&&(A.globalAlpha=.6),A.drawImage(He,Math.round(O.x-He.width/2),Math.round(O.y-He.height/2)),A.globalAlpha=1}for(const O of l.itens)!J(O.x,O.y)||O.vida<4&&O.tipo!=="moedaEsp"&&Math.floor(l.ta*8)%2===0||(Qi[O.tipo]&&(A.save(),A.globalAlpha=.22+.14*Math.sin(l.ta*6+O.fase),A.fillStyle=Qi[O.tipo].cor,A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),10,0,Math.PI*2),A.fill(),A.restore()),A.drawImage(s[O.tipo],Math.round(O.x-6),Math.round(O.y-6+Math.sin(l.ta*4+O.fase))));for(const O of l.cristais)J(O.x,O.y)&&A.drawImage(ff(O.v),Math.round(O.x-3.5),Math.round(O.y-4.5+Math.sin(l.ta*4+O.fase)))}for(const O of l.trilhasFogo){if(!J(O.x,O.y,12))continue;const De=Math.max(0,O.vida/O.max),He=1+Math.floor(Math.sin(l.ta*18+O.x)*1.5);A.globalAlpha=Math.max(.18,De),A.fillStyle="#8f1d20",A.fillRect(Math.round(O.x)-5,Math.round(O.y)-2,10,5),A.fillStyle="#ff5a2a",A.fillRect(Math.round(O.x)-3,Math.round(O.y)-4-He,7,7+He),A.fillStyle="#ffe14a",A.fillRect(Math.round(O.x)-1,Math.round(O.y)-3-He,3,4+He),A.fillStyle="#ffffff",A.fillRect(Math.round(O.x),Math.round(O.y)-3-He,1,2),A.globalAlpha=1}for(const O of l.inimigos){if(!J(O.x,O.y,40))continue;const De=Math.floor(l.ta*6+O.fase)%2;let He;if(O.tipo==="alien"){const mt=u(O.v);He=(O.piscar>0?mt.brancos:mt.quadros)[Math.floor(l.ta*3)%2],A.globalAlpha=O.sumido>0?.25:O.estado==="carga"&&Math.floor(l.ta*16)%2===0?.6:1}else if(O.tipo==="chefe"){const mt=h(O.b);He=(O.piscar>0?mt.brancos:mt.quadros)[Math.floor(l.ta*4)%2];const hn=25+Math.sin(l.ta*4)*3;A.fillStyle="rgba(5, 0, 12, .72)",A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),hn,0,Math.PI*2),A.fill(),A.strokeStyle=Math.floor(l.ta*8)%2?"#ff233f":"#6c1230",A.lineWidth=2,A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),hn+3,0,Math.PI*2),A.stroke()}else{const mt=k_[O.tipo]||O.tipo,hn=p(O.v).m[mt];He=(O.piscar>0?hn.brancos:hn.quadros)[De],O.tipo==="fantasma"&&(A.globalAlpha=.85)}if(A.drawImage(He,Math.round(O.x-He.width/2),Math.round(O.y-He.height/2)),A.globalAlpha=1,O.tipo==="chefe")A.fillStyle="#ff233f",A.fillRect(Math.round(O.x)-7,Math.round(O.y)-5,4,2),A.fillRect(Math.round(O.x)+4,Math.round(O.y)-5,4,2),A.fillStyle="#ffffff",A.fillRect(Math.round(O.x)-6,Math.round(O.y)-5,1,1),A.fillRect(Math.round(O.x)+5,Math.round(O.y)-5,1,1),O.movEsp&&O.movEsp.carga>0&&(A.strokeStyle=O.movEsp.tipo==="minhoca"?"#a56bff":"#ff3b4a",A.lineWidth=2,A.setLineDash([3,3]),A.beginPath(),O.movEsp.tipo==="minhoca"?A.arc(Math.round(O.x),Math.round(O.y),20+Math.sin(l.ta*12)*4,0,Math.PI*2):(A.moveTo(Math.round(O.x),Math.round(O.y)),A.lineTo(Math.round(O.x+O.movEsp.dx*240),Math.round(O.y+O.movEsp.dy*240))),A.stroke(),A.setLineDash([]));else if(O.tipo==="curandeiro"){A.save(),A.globalAlpha=.3,A.strokeStyle="#7dff9a",A.lineWidth=1,A.setLineDash([2,4]),A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),Ko,0,Math.PI*2),A.stroke(),A.restore();const mt=9+Math.sin(l.ta*6+O.fase)*2;A.strokeStyle="#7dff9a",A.lineWidth=1,A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),mt,0,Math.PI*2),A.stroke(),A.fillStyle="#ffffff",A.fillRect(Math.round(O.x)-1,Math.round(O.y)-10,3,7),A.fillRect(Math.round(O.x)-3,Math.round(O.y)-8,7,3)}else if(O.tipo==="amplificador"){A.save(),A.globalAlpha=.3,A.strokeStyle="#ff7ab8",A.lineWidth=1,A.setLineDash([2,4]),A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),Ko,0,Math.PI*2),A.stroke(),A.restore();const mt=11+(l.ta*8+O.fase)%5;A.strokeStyle=`rgba(255, 122, 184, ${.9-(mt-11)*.12})`,A.lineWidth=2,A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),mt,0,Math.PI*2),A.stroke(),A.fillStyle="#ff7ab8";for(const hn of[-4,0,4])A.fillRect(Math.round(O.x+hn),Math.round(O.y-10-Math.abs(hn)/2),2,4)}else O.tipo==="fulminante"&&(A.strokeStyle="#38c8ff",A.lineWidth=1,A.beginPath(),A.moveTo(Math.round(O.x)-8,Math.round(O.y)-7),A.lineTo(Math.round(O.x)-3,Math.round(O.y)-12),A.lineTo(Math.round(O.x),Math.round(O.y)-8),A.lineTo(Math.round(O.x)+5,Math.round(O.y)-13),A.stroke());if(O.buffT>0){A.fillStyle="#ffe14a";for(const mt of[-5,3])A.fillRect(Math.round(O.x+mt),Math.round(O.y-13),3,1),A.fillRect(Math.round(O.x+mt+1),Math.round(O.y-14),1,1)}}for(const O of l.tirosInimigos)J(O.x,O.y,4)&&(A.fillStyle="#ff5a8a",A.fillRect(Math.round(O.x)-2,Math.round(O.y)-2,4,4),A.fillStyle="#ffd0e0",A.fillRect(Math.round(O.x)-1,Math.round(O.y)-1,2,2));if(l.alien&&l.alien.estado==="aviso"){const O=l.alien;A.strokeStyle=Math.floor(l.ta*14)%2?"#ff3b4a":"#ffb3ba",A.lineWidth=2,A.setLineDash([4,4]),A.beginPath(),A.moveTo(Math.round(O.x),Math.round(O.y)),A.lineTo(Math.round(O.x+O.dirX*300),Math.round(O.y+O.dirY*300)),A.stroke(),A.setLineDash([])}for(const O of l.raios){const De=O.x+Math.cos(O.ang)*400,He=O.y+Math.sin(O.ang)*400;A.beginPath(),A.moveTo(Math.round(O.x),Math.round(O.y)),A.lineTo(Math.round(De),Math.round(He));const mt=O.cor||"#ff3bd4";O.aviso>0?(A.strokeStyle=Math.floor(l.ta*16)%2?mt:"#ffffff",A.lineWidth=1,A.setLineDash([3,3]),A.stroke(),A.setLineDash([])):(A.strokeStyle=mt,A.lineWidth=7,A.stroke(),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke())}for(const O of l.tiros)A.fillStyle=O.critico?"#ff5a2a":"#ffe14a",A.fillRect(Math.round(O.x)-(O.critico?2:1),Math.round(O.y)-(O.critico?2:1),O.critico?4:3,O.critico?4:3),A.fillStyle="#ffffff",A.fillRect(Math.round(O.x),Math.round(O.y),1,1);if(l.laser){const O=Math.cos(l.laser.ang),De=Math.sin(l.laser.ang),He=l.nx+O*l.laser.len,mt=l.ny+De*l.laser.len;A.beginPath(),A.moveTo(Math.round(l.nx+O*7),Math.round(l.ny+De*7)),A.lineTo(Math.round(He),Math.round(mt)),A.strokeStyle=Math.floor(l.ta*24)%2?"#38c8ff":"#8bd3ff",A.lineWidth=4,A.stroke(),A.strokeStyle="#ffffff",A.lineWidth=1.5,A.stroke()}for(const O of l.misseis){const De=Math.cos(O.ang),He=Math.sin(O.ang);A.fillStyle="#070a1a",A.fillRect(Math.round(O.x)-3,Math.round(O.y)-3,6,6),A.fillStyle="#ff9a3a",A.fillRect(Math.round(O.x+De*1)-2,Math.round(O.y+He*1)-2,4,4),A.fillStyle="#ffffff",A.fillRect(Math.round(O.x+De*2),Math.round(O.y+He*2),1,1)}const Ue=l.invul>0&&Math.floor(l.ta*14)%2===0,Ze=Math.PI/8,nt=Math.round(l.mira/Ze)*Ze,G=Math.round(l.nx),U=Math.round(l.ny),ie=l.tiers||{motor:0,armas:0},oe=(O,De,He)=>{for(let mt=0;mt<He;mt++)A.fillStyle=mt<He*.35?"#fff0a0":mt<He*.7?"#ffc83d":"#ff7a3a",A.fillRect(O-(mt<He*.6?1:0),De+mt,mt<He*.6?2:1,1)},de=l.arma>=2?l.slots[l.arma-2]:"normal",Se=de==="turbo"&&l.boostE>0,Re=2+ie.motor+(l.movendo?3:0)+(l.turboT>0||Se?3:0)+(l.driftT>0?5:0)+Math.floor(Math.random()*2);oe(G,U+8,Re),ie.motor>=2&&(oe(G-5,U+7,Math.max(2,Re-3)),oe(G+4,U+7,Math.max(2,Re-3))),A.fillStyle=l.driftT>0?"#ffffff":l.turboT>0||Se?"#ff7a3a":"#ffd23f";const st=Math.min(4,l.projeteis),Qe=5+Math.min(4,Math.floor(ie.armas/2)),yt=-Math.sin(nt),Vt=Math.cos(nt);for(let O=0;O<st;O++){const De=(O-(st-1)/2)*2.4;for(let He=4;He<=4+Qe;He++)A.fillRect(Math.round(G+Math.cos(nt)*He+yt*De)-1,Math.round(U+Math.sin(nt)*He+Vt*De)-1,2,2);B.oficina.lente>0&&(A.fillStyle="#7be3ff",A.fillRect(Math.round(G+Math.cos(nt)*(5+Qe)+yt*De)-1,Math.round(U+Math.sin(nt)*(5+Qe)+Vt*De)-1,2,2),A.fillStyle=l.turboT>0?"#ff7a3a":"#ffd23f")}if(A.drawImage(Ue?$.branca:$.c,G-10,U-10),l.upgFx){const O=1-l.upgFx.t/l.upgFx.max;A.globalAlpha=.7*(1-O),A.drawImage($.branca,G-10,U-10),A.globalAlpha=1-O,A.strokeStyle="#ffe14a",A.lineWidth=2,A.beginPath(),A.arc(G,U,Math.max(0,8+O*22),0,Math.PI*2),A.stroke(),A.strokeStyle="#ffffff",A.lineWidth=1,A.beginPath(),A.arc(G,U,Math.max(0,5+O*14),0,Math.PI*2),A.stroke(),A.globalAlpha=1}for(const[O,De,He]of[[l.buffDanoT,"#ff3b4a",14],[l.buffVelT,"#ffd23f",16],[l.buffXpT,"#a56bff",18]])O>0&&(O>2.5||Math.floor(l.ta*8)%2===0)&&(A.save(),A.globalAlpha=.55,A.strokeStyle=De,A.lineWidth=1,A.setLineDash([2,3]),A.beginPath(),A.arc(G,U,He+Math.sin(l.ta*8)*1.2,0,Math.PI*2),A.stroke(),A.restore());l.escudoT>0&&(l.escudoT>1.5||Math.floor(l.ta*10)%2===0)&&(A.strokeStyle="#8bd3ff",A.lineWidth=2,A.beginPath(),A.arc(G,U,11,0,Math.PI*2),A.stroke()),l.barreira>0&&(A.strokeStyle="#7dff9a",A.lineWidth=1,A.globalAlpha=.7,A.beginPath(),A.arc(G,U,12+(l.barreira>1?2:0),0,Math.PI*2),A.stroke(),A.globalAlpha=1);for(const O of Kn()){const De=Math.round(O.x),He=Math.round(O.y);A.fillStyle="#070a1a",A.fillRect(De-3,He-3,7,7),A.fillStyle="#ff3bd4",A.fillRect(De-2,He-2,5,5),A.fillStyle="#ffffff",A.fillRect(De-1,He-1,2,2)}for(const O of l.parts)J(O.x,O.y,4)&&(A.fillStyle=O.cor,A.fillRect(Math.round(O.x),Math.round(O.y),2,2));for(const O of l.ondas)A.strokeStyle=O.cor,A.lineWidth=2,A.globalAlpha=Math.max(0,1-O.r/O.max),A.beginPath(),A.arc(Math.round(O.x),Math.round(O.y),Math.max(0,O.r),0,Math.PI*2),A.stroke(),A.globalAlpha=1;A.font="bold 8px monospace",A.textAlign="center";for(const O of l.textos)A.globalAlpha=Math.min(1,O.vida*2),A.fillStyle="#070a1a",A.fillText(O.txt,Math.round(O.x)+1,Math.round(O.y)+1),A.fillStyle=O.cor,A.fillText(O.txt,Math.round(O.x),Math.round(O.y)),A.globalAlpha=1;if(A.restore(),Ae){const O=l.cristais.filter(De=>!J(De.x,De.y,2)).map(De=>({c:De,d:Math.hypot(De.x-l.nx,De.y-l.ny)})).filter(De=>De.d<620).sort((De,He)=>De.d-He.d).slice(0,6);A.globalAlpha=.55+.35*Math.sin(v*6);for(const{c:De}of O){const He=De.x-(X+Dt/2),mt=De.y-(K+Ut/2),hn=Math.min((Dt/2-10)/(Math.abs(He)||1e-6),(Ut/2-10)/(Math.abs(mt)||1e-6));A.drawImage(ff(De.v),Math.round(Dt/2+He*hn-3.5),Math.round(Ut/2+mt*hn-4.5))}A.globalAlpha=1,l.buraco&&!J(l.buraco.x,l.buraco.y,2)&&Mo(l.buraco.x,l.buraco.y,X,K,"#c43fff",`${Math.ceil(l.buraco.vida)}s`,l.buraco.vida<8),l.chefe&&!J(l.chefe.x,l.chefe.y,2)&&Mo(l.chefe.x,l.chefe.y,X,K,"#ff3b4a");for(const De of l.itens)De.tipo==="moedaEsp"&&!J(De.x,De.y,2)&&Mo(De.x,De.y,X,K,"#38c8ff");for(const De of l.itens)Qi[De.tipo]&&!J(De.x,De.y,2)&&Mo(De.x,De.y,X,K,Qi[De.tipo].cor,`${Math.ceil(De.vida)}s`,De.vida<5)}if(!l.alien){const O=(De,He,mt,hn,bh="center")=>{A.font="bold 8px monospace",A.textAlign=bh,A.fillStyle="#070a1a",A.fillText(De,He+1,mt+1),A.fillStyle=hn,A.fillText(De,He,mt)};l.combo>=3&&O(`COMBO x${l.combo}`,Dt-8,22,l.combo>=50?"#ff7ab8":l.combo>=25?"#ff9a3a":l.combo>=10?"#ffe14a":"#ffffff","right")}l.chefe&&(A.fillStyle="rgba(40, 0, 15, .34)",A.fillRect(0,0,Dt,5),A.fillRect(0,Ut-5,Dt,5),A.fillRect(0,0,5,Ut),A.fillRect(Dt-5,0,5,Ut),A.font="bold 7px monospace",A.textAlign="center",A.fillStyle="#070a1a",A.fillText(_a[l.chefe.b].nome,cn+1,8),A.fillStyle="#ff7084",A.fillText(_a[l.chefe.b].nome,cn,7),uf(cn-60,11,120,l.chefe.hp/l.chefe.hpMax,"#ff3b4a")),l.alien&&uf(cn-60,8,120,l.alien.hp/l.alien.hpMax,"#ff3bd4"),l.flash>0&&(A.fillStyle=`rgba(255, 255, 255, ${Math.min(.8,l.flash*2.5)})`,A.fillRect(0,0,Dt,Ut)),A.restore()}let So="";function vh(){if(!l)return;const v=l.arma>=2?l.slots[l.arma-2]:"normal",g=[l.buffDanoT>0?`DANO+ ${Math.ceil(l.buffDanoT)}`:"",l.buffVelT>0?`VELOC+ ${Math.ceil(l.buffVelT)}`:"",l.buffXpT>0?`XP×2 ${Math.ceil(l.buffXpT)}`:"",l.lentidao<1?"DETRITOS: LENTO":"",l.imaT>0?"ÍMÃ":"",l.escudoT>0?`ESCUDO ${Math.ceil(l.escudoT)}`:"",l.turboT>0?`TURBO ${Math.ceil(l.turboT)}`:"",v==="turbo"&&l.boostE>0?"HIPERPROPULSOR":"",l.driftT>0?"DRIFT ÍGNEO":""].filter(Boolean).join(" "),D=`${l.hp}/${l.maxHp}|${l.nivel}|${Math.floor(l.xp)}|${l.xpProx}|${l.kills}|${Math.floor(l.t)}|${l.onda}|${l.fase}|${l.aviso>0}|${l.avisoTxt}|${g}|${B.moedas}|${!!l.alien}`;D!==So&&(So=D,_t.replaceChildren(...Array.from({length:l.maxHp},(X,K)=>i("i",K<l.hp?"cheia":"vazia"))),_t.setAttribute("aria-label",`${Math.max(0,l.hp)} de ${l.maxHp} pontos de vida`),se.textContent=`NV ${l.nivel}`,_e.style.width=`${Math.min(100,l.xp/l.xpProx*100)}%`,q.setAttribute("aria-valuenow",String(Math.floor(l.xp))),q.setAttribute("aria-valuemax",String(l.xpProx)),ke.textContent=`☠ ${l.kills}`,Ee.textContent=l.alien?"BURACO NEGRO":l.onda>0?`F${l.fase} · ONDA ${l.onda}`:"",Ee.classList.toggle("alerta",!!l.alien||l.ondaEstado==="chefe"),je.textContent=g,lt.textContent=`◆ ${B.moedas}`,it.hidden=!(l.aviso>0),it.textContent=l.avisoTxt,fe.textContent=_o(Math.floor(l.t)))}function _h(){const v=l&&(Fe==="jogando"||Fe==="escolha"||Fe==="pausa");if(Ne.style.visibility=v?"visible":"hidden",!!v)for(let g=1;g<=4;g++){const{b:D,nm:X,barra:K}=ot[g-1],J=g===1?"normal":l.slots[g-2];let Ae="VAZIO",Ue=-1;J&&(Ae=`${Ru[J]||gs[J].curto} · N${l.armasNivel[J]}`,J==="laser"?Ue=l.laserE/(l.laserMax*(1+.18*(l.armasNivel.laser-1))):J==="missil"?Ue=1-Math.max(0,l.missilT)/l.missilMax:J==="turbo"?Ue=l.boostE/l.boostMax:J==="cura"?Ue=1-l.curaCd/l.curaMax:J==="escudo"?Ue=l.escudoT>0?1:1-l.escudoCd/l.escudoMax:J==="salto"?Ue=l.saltoCarga>0?1-l.saltoCarga/l.saltoCargaMax:1-l.saltoCd/l.saltoMax:J==="drift"&&(Ue=l.driftT>0?1:1-l.driftCd/l.driftMax)),X.textContent!==Ae&&(X.textContent=Ae),K.style.display=Ue<0?"none":"block",K.style.width=`${Math.round(Math.max(0,Math.min(1,Ue))*100)}%`,D.classList.toggle("ativa",l.arma===g),D.classList.toggle("vazio",g>=2&&!J),D.classList.toggle("quente",J==="laser"&&l.laserQuente),D.disabled=g>=2&&!J,D.setAttribute("aria-pressed",String(l.arma===g)),D.setAttribute("aria-label",`Arma ${g}: ${Ae}${J==="laser"&&l.laserQuente?", superaquecida":""}`)}}function Mh(){const v=Fe==="jogando"||Fe==="pausa";if(xe.hidden=!v,!v)return;const g=Fe==="pausa";xe.textContent=g?"▶":"II",xe.title=g?"Continuar (Esc)":"Pausar (Esc)",xe.setAttribute("aria-label",g?"Continuar jogo":"Pausar jogo")}function df(v){if(window.__curriculoArcadeGeracao!==t){at=!1,cancelAnimationFrame(W);return}if(!at)return;const g=Math.min((v-Le)/1e3,.05);Le=v,Fe==="jogando"&&li(g),Fe==="oficina"&&of(v/1e3),V.passo(g),xh(),vh(),_h(),Mh(),W=requestAnimationFrame(df)}function Ns(){Pe.clear(),ce.ativo=!1,qe.hidden=!0,F(),S="normal",x.pause(),T.pause(),_.currentTime=0,L(),Ua(),Ar(12),So="",ut.hidden=!0,Ke.hidden=!0,we.hidden=!0,le.hidden=!0,Ie.hidden=!0,Fe="jogando",Le=performance.now(),n(523,.08,"square",.05),n(784,.12,"square",.05,.08)}function Cr(v){v&&Fe==="jogando"?(Fe="pausa",Pe.clear(),ce.ativo=!1,qe.hidden=!0,le.hidden=!1,M()):!v&&Fe==="pausa"&&(Fe="jogando",le.hidden=!0,Le=performance.now(),L())}function Sh(){at||(at=!0,he.classList.add("aberto"),S="normal",x.pause(),T.pause(),L(),F(),B=Cu(),Te.textContent=B.tempo||B.kills||B.onda?`RECORDE  ${_o(B.tempo)}  ·  ${B.kills} MONSTROS  ·  ONDA ${B.onda}`:"PRIMEIRA MISSÃO · BOA SORTE, PILOTO!",l=null,Fe="inicio",So="",Ua(),ut.hidden=!1,Ke.hidden=!0,we.hidden=!0,le.hidden=!0,Ie.hidden=!0,_t.replaceChildren(),se.textContent="",ke.textContent="",fe.textContent="",Ee.textContent="",je.textContent="",lt.textContent=`◆ ${B.moedas}`,_e.style.width="0",Ds(),Le=performance.now(),W=requestAnimationFrame(df),Mt.focus({preventScroll:!0}))}function ka(){at&&(at=!1,Pe.clear(),ce.ativo=!1,qe.hidden=!0,he.classList.remove("aberto"),M(),cancelAnimationFrame(W))}Mt.onclick=Ns,N.onclick=lf,me.onclick=()=>Cr(!1),Oe.onclick=ka,xe.onclick=()=>Cr(Fe==="jogando"),Me.onclick=ka,he.addEventListener("pointerdown",v=>{v.target===he&&Fe!=="jogando"&&Fe!=="escolha"&&ka()}),window.addEventListener("visibilitychange",()=>{document.hidden&&Cr(!0)});const hf=v=>{const g=be.getBoundingClientRect();ce.x=(v.clientX-g.left)/g.width*Dt,ce.y=(v.clientY-g.top)/g.height*Ut},yh=v=>{const g=be.getBoundingClientRect(),D=(v.clientX-g.left)/g.width*Dt,X=(v.clientY-g.top)/g.height*Ut;ce.dx=D-ce.origemX,ce.dy=X-ce.origemY;const K=ce.dx*(g.width/Dt),J=ce.dy*(g.height/Ut),Ae=Math.hypot(K,J)||1,Ze=Math.min(1,28/Ae);We.style.transform=`translate(calc(-50% + ${Math.round(K*Ze)}px), calc(-50% + ${Math.round(J*Ze)}px))`};be.addEventListener("pointerdown",v=>{if(Fe==="jogando"){if(ce.ativo=!0,ce.toque=v.pointerType!=="mouse",hf(v),ce.toque){const g=be.getBoundingClientRect();ce.origemX=ce.x,ce.origemY=ce.y,ce.dx=ce.dy=0,qe.style.left=`${Math.round(v.clientX-g.left)}px`,qe.style.top=`${Math.round(v.clientY-g.top)}px`,We.style.transform="translate(-50%, -50%)",qe.hidden=!1}be.setPointerCapture?.(v.pointerId)}}),be.addEventListener("pointermove",v=>{ce.ativo&&(ce.toque?yh(v):hf(v))});for(const v of["pointerup","pointercancel"])be.addEventListener(v,()=>{ce.ativo=!1,ce.toque=!1,ce.dx=ce.dy=0,qe.hidden=!0});return window.addEventListener("keyup",v=>Pe.delete(v.code)),window.addEventListener("blur",()=>Pe.clear()),window.addEventListener("keydown",v=>{if(at){if(ct.includes(v.code)){v.preventDefault(),Fe==="jogando"&&Pe.add(v.code);return}if(v.code==="Escape")v.preventDefault(),Fe==="jogando"?Cr(!0):Fe==="pausa"?Cr(!1):Fe==="oficina"?cf():(Fe==="inicio"||Fe==="fim")&&ka();else if(v.code==="Space"||v.code==="Enter")(Fe==="inicio"||Fe==="fim")&&(v.preventDefault(),Ns());else if(["Digit1","Digit2","Digit3","Digit4","Numpad1","Numpad2","Numpad3","Numpad4"].includes(v.code)){v.preventDefault();const g=Number(v.code.slice(-1));Fe==="escolha"?rf(g-1):In(g)}}},!0),{abrir:Sh,fechar:ka,estaAberto:()=>at}}const oi=5,vi=6.5/oi,Y_=.7,$_=.42*vi,Z_=.27*vi,xs=new k(0,1,0),J_=[[.8,0],[1.8,.7],[-.5,.9],[-1.45,.45],[-1,-.6],[.1,-.95],[1.15,-.8]];function K_(n){const[e,t]=J_[n]??[n*2.4,(n*.37%1-.5)*1.6];return new k(Math.sin(e)*Math.cos(t),Math.cos(e)*Math.cos(t),-Math.sin(t))}const sa=ri.map((n,e)=>K_(e)),Q_=(n,e,t)=>n+(e-n)*t,Gc=(n,e,t)=>Math.max(e,Math.min(t,n)),Ml=(n,e,t,i)=>Q_(n,e,1-Math.exp(-t*i));function Hc(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function j_(n,e,t){const i=Math.sin(n*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function Sl(n,e,t){const i=Math.floor(n),a=Math.floor(e),r=Math.floor(t),s=n-i,o=e-a,f=t-r,c=m=>m*m*(3-2*m),u=c(s),h=c(o),d=c(f);let p=0;for(let m=0;m<2;m++)for(let b=0;b<2;b++)for(let _=0;_<2;_++){const x=(m?u:1-u)*(b?h:1-h)*(_?d:1-d);p+=x*j_(i+m,a+b,r+_)}return p}const Iu=Math.cos(.5);function Wc(n){const e=Sl(n.x*2.2+5,n.y*2.2+5,n.z*2.2+5)*.68+Sl(n.x*4.3+9,n.y*4.3+9,n.z*4.3+9)*.26+Sl(n.x*8.1,n.y*8.1,n.z*8.1)*.06;let t=0;n.y>Iu&&(t=1-Math.acos(Math.min(1,n.y))/.5);for(const i of sa){const a=n.dot(i);a>Iu&&(t=Math.max(t,1-Math.acos(Math.min(1,a))/.5))}return e+.6*t}const Xc=.5,ii=new qv({antialias:!1});ii.setPixelRatio(Math.min(window.devicePixelRatio||1,2));ii.shadowMap.enabled=!0;ii.shadowMap.type=Xr;document.body.appendChild(ii.domElement);const $n=new ud;$n.background=new ht(725030);const vn=new Hn(42,1,.1,200);$n.add(new H0(12374271,2366541,1));const la=new q0(16773332,1.9);la.position.set(7,oi+9,9);la.target.position.set(0,2,0);la.castShadow=!0;la.shadow.mapSize.set(2048,2048);Object.assign(la.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:50});la.shadow.bias=-4e-4;$n.add(la,la.target);const Zd=new vd({color:16777215,size:.42,sizeAttenuation:!0,fog:!1}),Jd=new yr({color:16777215,roughness:1,flatShading:!0,transparent:!0,opacity:.95}),Kd=[],Qd=[],jd={uMarRaso:{value:new ht(5685998)},uMarMedio:{value:new ht(3112924)},uMarFundo:{value:new ht(1922744)},uEspuma:{value:new ht(13955580)},uAreia:{value:new ht(15981987)},uGrama0:{value:new ht(7327594)},uGrama1:{value:new ht(5027680)},uGrama2:{value:new ht(3117141)}};{const n=Hc(3),e=[];for(let a=0;a<900;a++){const r=new k(n()-.5,n()-.5,n()-.5).normalize().multiplyScalar(90);e.push(r.x,r.y,r.z)}const t=new dn;t.setAttribute("position",new $t(e,3)),$n.add(new Jp(t,Zd));const i=new Ht(new Gn(4,32,32),new Mr({color:16773577,fog:!1}));i.position.set(24,16,-62),$n.add(i)}const ho=new Mn;$n.add(ho);{const i=new Uint16Array(2519424),a=[(h,d)=>[1,d,-h],(h,d)=>[-1,d,h],(h,d)=>[h,1,-d],(h,d)=>[h,-1,d],(h,d)=>[h,d,1],(h,d)=>[-h,d,-1]],r=new k,s=Lf.toHalfFloat(1);for(let h=0;h<6;h++){const d=h%3*324,p=Math.floor(h/3)*324;for(let m=0;m<324;m++){const b=(m+.5-2)/320*2-1;for(let _=0;_<324;_++){const x=(_+.5-2)/320*2-1,[T,C,S]=a[h](x,b);r.set(T,C,S).normalize();const E=((p+m)*3*324+d+_)*4;i[E]=Lf.toHalfFloat(Wc(r)),i[E+3]=s}}}const o=new xd(i,3*324,2*324,Xn,Yn);o.minFilter=o.magFilter=fn,o.generateMipmaps=!1,o.needsUpdate=!0;const f=new yr({roughness:.9});f.onBeforeCompile=h=>{Object.assign(h.uniforms,{uAltura:{value:o},uN:{value:320},uP:{value:2},uM:{value:324},uNivel:{value:Xc}},jd),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
diffuseColor.rgb = corTerreno(normalize(vObj));`)};const c=new Ht(new Gn(oi,128,96),f);c.receiveShadow=!0,ho.add(c);const u=new Ht(new Gn(oi*1.06,48,48),new Mr({color:6990079,transparent:!0,opacity:.1,side:Tn,depthWrite:!1}));$n.add(u)}function _c(n,e,t=0){const i=new Mn;return i.quaternion.setFromUnitVectors(new k(0,1,0),e),n.position.y=oi,n.rotation.y=t,i.add(n),ho.add(i),i}const Gt=(n,e={})=>new yr({color:n,roughness:.8,flatShading:!0,...e});function lo(n){return n.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),n}const vs=[];{const n=Hc(77),e=new k,t=()=>{for(let i=0;i<40;i++)if(e.set(n()-.5,n()-.5,n()-.5).normalize(),!(e.angleTo(xs)<.3*vi)&&!sa.some(a=>e.angleTo(a)<.38*vi)&&!(Wc(e)<Xc+.05))return e.clone();return null};for(let i=0;i<55;i++){const a=t();if(!a)continue;const r=new Mn,s=.5+n()*.45,o=new Ht(new Cn(.1,.14,.6,6),Gt(8014379));o.position.y=.3;const f=n()>.5?0:1,c=new Ht(new ia(.5,1.2,7),Gt(f===0?3120732:2460238));Kd.push({m:c.material,v:f}),c.position.y=1.1;const u=new Ht(new ia(.38,.9,7),Gt(3453032));Qd.push(u.material),u.position.y=1.7,r.add(o,c,u),r.scale.setScalar(s),_c(lo(r),a,n()*6),vs.push({d:a,r:(.05*s+.02)*vi})}for(let i=0;i<28;i++){const a=t();if(!a)continue;const r=new Ht(new Lc(.22+n()*.25,0),Gt(9278376));r.position.y=.1;const s=new Mn;s.add(r),_c(lo(s),a,n()*6),vs.push({d:a,r:.045*vi,baixo:!0})}}const qc=new Mn;$n.add(qc);{const n=Hc(5),e=Jd;for(let t=0;t<10;t++){const i=new k(n()-.5,n()-.5,n()-.5).normalize();i.z=-Math.abs(i.z)-.6,i.y=Math.abs(i.y),i.x=(i.x<0?-1:1)*(.55+Math.abs(i.x)),i.normalize();const a=new Mn;for(let s=0;s<4;s++){const o=new Ht(new Oc(.45+n()*.4,1),e);o.position.set((s-1.5)*.6,n()*.25,(n()-.5)*.5),a.add(o)}a.position.y=oi+4+n()*2.5;const r=new Mn;r.quaternion.setFromUnitVectors(new k(0,1,0),i),r.add(a),qc.add(r),lo(a)}}function eM(n){const e=new Uc;for(let t=0;t<10;t++){const i=Math.PI/5*t+Math.PI/2,a=t%2===0?n:n*.45;e[t===0?"moveTo":"lineTo"](Math.cos(i)*a,Math.sin(i)*a)}return e}function tM(n,e){const t=new Mn,i=Gt(e,{emissive:e,emissiveIntensity:.12}),a=Gt(new ht(e).multiplyScalar(.55)),r=new yr({color:16774856,emissive:16771488,emissiveIntensity:1.2}),s=(o,f,c=0,u=0,h=0)=>{const d=new Ht(o,f);return d.position.set(c,u,h),t.add(d),d};switch(n){case"casa":s(new Xt(2,1.4,1.7),i,0,.7),s(new ia(1.75,1,4),a,0,1.9).rotation.y=Math.PI/4,s(new Xt(.45,.8,.1),a,0,.4,.86),s(new Xt(.4,.4,.1),r,-.65,.85,.86),s(new Xt(.4,.4,.1),r,.65,.85,.86),s(new Xt(.3,.7,.3),a,.6,2.2,-.2);break;case"predio":s(new Xt(1.7,3.4,1.7),i,0,1.7),s(new Xt(1.9,.2,1.9),a,0,3.45);for(let o=0;o<4;o++)for(let f=0;f<3;f++)s(new Xt(.28,.4,.06),(o+f)%3?r:a,-.5+f*.5,.9+o*.7,.86);s(new Xt(.5,.7,.1),a,0,.35,.86);break;case"foguete":s(new Cn(.55,.62,2.4,14),Gt(15987963),0,1.9),s(new ia(.55,1,14),i,0,3.6),s(new Gn(.28,12,12),Gt(4892927,{emissive:2914512,emissiveIntensity:.6}),0,2.4,.5);for(let o=0;o<3;o++){const f=s(new Xt(.08,.9,.7),i,0,1,0),c=new Mn;c.rotation.y=o/3*Math.PI*2,f.position.set(.62,1,0),f.parent.remove(f),c.add(f),t.add(c)}s(new ia(.35,.9,10),Gt(16756782,{emissive:16742938,emissiveIntensity:1}),0,.45).rotation.x=Math.PI;break;case"estrela":{s(new Cn(.08,.12,2,8),a,0,1);const o=s(new hs(eM(1.1),{depth:.35,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:1}),Gt(e,{emissive:e,emissiveIntensity:.55}),0,3.1,-.17);o.name="gira";break}case"cassino":{const o=Gt(13620959,{emissive:3818064,emissiveIntensity:.25}),f=(c,u)=>s(new Xt(.36,.5,.06),Gt(u,{emissive:u,emissiveIntensity:.7}),c,2.05,.66);s(new Xt(2.2,.3,1.6),a,0,.15),s(new Xt(1.8,2.7,1.3),o,0,1.65),s(new Xt(2,.55,1.4),a,0,3.2),s(new Xt(1.6,.3,.08),r,0,3.2,.72),s(new Xt(1.45,.75,.1),Gt(1381675),0,2.05,.62),f(-.46,16726858),f(0,16769354),f(.46,5822207),s(new Xt(1.2,.28,.45),a,0,.8,.8),s(new Cn(.06,.06,1.1,8),Gt(13225432),1.05,2,0),s(new Gn(.2,12,12),Gt(16726858,{emissive:16726858,emissiveIntensity:.5}),1.05,2.65,0);break}case"nave":{const o=Gt(4892927,{emissive:1922744,emissiveIntensity:.4}),f=Gt(9163775,{emissive:4892927,emissiveIntensity:.6}),c=Gt(16743001,{emissive:9058848,emissiveIntensity:.3});s(new Gn(.95,14,12),o,0,1.85,0).scale.set(1,.85,1),s(new Gn(.58,12,10),f,0,2.15,.35),s(new Gn(.2,8,8),Gt(16777215,{emissive:16777215,emissiveIntensity:.9}),.1,2.35,.8);for(let u=0;u<4;u++){const h=u*Math.PI/2,d=s(new Xt(.55,.14,.95),c,Math.cos(h)*1.05,1.7,Math.sin(h)*1.05);d.rotation.y=-h}for(let u=0;u<3;u++){const h=u*Math.PI*2/3+.4,d=s(new Cn(.05,.07,1,8),Gt(13225432),Math.cos(h)*.62,.62,Math.sin(h)*.62);d.rotation.z=Math.cos(h)*.3,d.rotation.x=-Math.sin(h)*.3,s(new Cn(.16,.16,.05,8),Gt(13225432),Math.cos(h)*.78,.12,Math.sin(h)*.78)}s(new ia(.3,.55,10),Gt(16765503,{emissive:16742970,emissiveIntensity:1}),0,1.05,0).rotation.x=Math.PI,s(new Cn(.03,.03,.6,6),Gt(13225432),0,2.95,0),s(new Gn(.1,8,8),Gt(16726858,{emissive:16726858,emissiveIntensity:.8}),0,3.28,0);break}case"carta":s(new Cn(.1,.14,1.1,8),a,0,.55),s(new Xt(2.2,1.4,.35),i,0,1.75);{const o=new Uc;o.moveTo(-1.1,.7),o.lineTo(1.1,.7),o.lineTo(0,-.1),o.closePath();const f=new Ht(new hs(o,{depth:.06,bevelEnabled:!1}),a);f.position.set(0,1.75,.18),t.add(f)}s(new Gn(.17,12,12),Gt(16726876,{emissive:16726876,emissiveIntensity:.5}),0,1.7,.3);break}return t}const eh=ri.map((n,e)=>{const t=new Mn,i=new Ht(new Cn(1.6,1.75,.14,24),Gt(new ht(n.cor).multiplyScalar(.5)));i.position.y=.04;const a=new Ht(new Fc(1.95,.07,8,48),new Mr({color:n.cor,transparent:!0,opacity:0}));a.rotation.x=Math.PI/2,a.position.y=.1;const r=tM(n.icone,n.cor);r.position.y=.1;const s=new nn;return s.position.y=4.4+(n.escala?1.3:0),t.add(i,a,r,s),lo(t),i.castShadow=!1,t.scale.setScalar(n.escala??.8),_c(t,sa[e],0),{raiz:t,anel:a,icone:r,topo:s,gira:r.getObjectByName("gira")}}),os={parado:4,andar:5,correr:5,pular:5},nM=["direita","esquerda","norte","sul"],Lu=[0,1,2,3,2,1],th=84,_s=182,iM=168,aM=new G0,na={};for(const[n,e]of Object.entries(os)){na[n]={};for(const t of nM)na[n][t]=Array.from({length:e},(i,a)=>{const r=aM.load(`./avatar/${n}-${t}-${a}.png`);return r.colorSpace=Un,r.magFilter=r.minFilter=tn,r.generateMipmaps=!1,new pd({map:r,transparent:!0,toneMapped:!1,alphaTest:.5})})}let Rs=3.6,Yc=Rs*(th/_s);const aa=new Yp(na.parado.sul[0]);aa.center.set(.5,(_s-iM)/_s);aa.scale.set(Yc,Rs,1);aa.position.y=oi;$n.add(aa);const Du=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const i=new Ht(new Sr(1.7,1.7),new Mr({map:new Kp(n),transparent:!0,opacity:.55,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=oi+.04,$n.add(i),i})(),Na=n=>document.querySelector(n);Na("#nome").textContent=`${bu.nome} · ${bu.titulo}`;const nh=Na("#pontos"),rM=Na("#fichas-hud b");ri.forEach(n=>{const e=document.createElement("i");e.style.setProperty("--c","#"+n.cor.toString(16).padStart(6,"0")),nh.appendChild(e)});const Qo=Na("#painel"),ih=Na("#acao");let Nu=-2,Ta=-1;function oM(n){if(n!==Nu){if(Nu=n,n<0)Qo.classList.remove("on");else{const e=ri[n];Qo.style.setProperty("--c","#"+e.cor.toString(16).padStart(6,"0")),Qo.querySelector("h2").textContent=e.titulo,Na("#texto").replaceChildren(...e.linhas.map(i=>Object.assign(document.createElement("p"),{textContent:i}))),ih.hidden=!e.jogo,Qo.classList.add("on")}[...nh.children].forEach((e,t)=>e.classList.toggle("on",t===n))}}const mi=new Set;window.addEventListener("keydown",n=>{if(!(Oi.estaAberto()||Kc.estaAberto())){if((n.code==="KeyE"||n.code==="Enter")&&Ta>=0&&ri[Ta].jogo){mi.clear(),ch(ri[Ta].jogo);return}mi.add(n.code),(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault()}});window.addEventListener("keyup",n=>mi.delete(n.code));window.addEventListener("blur",()=>mi.clear());const Ui={x:0,y:0,pulo:!1},co=new Map;function $c(){Ui.x=0,Ui.y=0;const n=co.values().next().value;if(!n)return;const e=n.x-n.ox,t=n.y-n.oy,i=Math.hypot(e,t);if(i>14){const a=Math.min(i,70)/70/i;Ui.x=e*a,Ui.y=-t*a}}const Zc=ii.domElement;Zc.addEventListener("pointerdown",n=>{co.set(n.pointerId,{ox:n.clientX,oy:n.clientY,x:n.clientX,y:n.clientY,t0:performance.now()}),$c()});Zc.addEventListener("pointermove",n=>{const e=co.get(n.pointerId);e&&(e.x=n.clientX,e.y=n.clientY,$c())});for(const n of["pointerup","pointercancel","pointerleave"])Zc.addEventListener(n,e=>{const t=co.get(e.pointerId);t&&n==="pointerup"&&performance.now()-t.t0<220&&Math.hypot(t.x-t.ox,t.y-t.oy)<14&&(Ui.pulo=!0,setTimeout(()=>{Ui.pulo=!1},120)),co.delete(e.pointerId),$c()});const sM=640,ah=19,fo=new qn(2,2,{minFilter:tn,magFilter:tn,type:Yn,samples:0});fo.depthTexture=new xr(2,2);const rh=new ud,lM=new As(-1,1,1,-1,0,1),oh=new ai({uniforms:{tCor:{value:fo.texture},tProf:{value:fo.depthTexture},uPixel:{value:new Ce(1,1)},uBorda:{value:new URLSearchParams(location.search).get("borda")==="0"?0:1},uNear:{value:vn.near},uFar:{value:vn.far}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`,depthTest:!1,depthWrite:!1});rh.add(new Ht(new Sr(2,2),oh));function sh(){const n=window.innerWidth,e=window.innerHeight;ii.setSize(n,e),vn.aspect=n/e,vn.userData.afasta=1/Gc(vn.aspect/1.1,.5,1),vn.updateProjectionMatrix();const t=Math.min(sM,e),i=Math.max(2,Math.round(t*vn.aspect));fo.setSize(i,t),oh.uniforms.uPixel.value.set(1/i,1/t);const a=2*ah*vn.userData.afasta*Math.tan(bp.degToRad(vn.fov/2))/t;Rs=_s*a,Yc=th*a}window.addEventListener("resize",sh);sh();const ca=ho.quaternion,Uu=new URLSearchParams(location.search).get("zona");if(Uu!==null){const n=Gc(Math.round(Number(Uu))||0,0,ri.length-1);ca.setFromUnitVectors(sa[n],new k(.25,1,-.2).normalize())}const cM=2*7.2/20;let Ma=0,Sa=0,lr=0,jo=0,cr=!0,yl=0,Ou=!1,pi=0,Ji="sul",bl=0;const ya=new k,Ms=new La,Aa=new k,lh=n=>Math.acos(Gc(Aa.copy(n).applyQuaternion(ca).y,-1,1));function Fu(n,e){if(Aa.copy(n).applyQuaternion(ca),Aa.y<.8)return;const t=Math.acos(Math.min(1,Aa.y));t>=e||(ya.crossVectors(xs,Aa),ya.lengthSq()<1e-10&&ya.set(0,0,1),ya.normalize(),Ms.setFromAxisAngle(ya,e-t),ca.premultiply(Ms))}const Jc=document.createElement("div");Jc.id="rotulos";document.body.append(Jc);const fM=ri.map(n=>{const e=document.createElement("div");return e.className="rotulo",e.textContent=n.id,Jc.append(e),e}),Bu=new k,El=new k;function uM(n){Bu.copy(vn.position).normalize(),ri.forEach((e,t)=>{const i=fM[t];if(Aa.copy(sa[t]).applyQuaternion(ca),t===n||Aa.dot(Bu)<.2){i.style.opacity="0";return}eh[t].topo.getWorldPosition(El).project(vn),i.style.transform=`translate(${Math.round((El.x*.5+.5)*window.innerWidth)}px, ${Math.round((-El.y*.5+.5)*window.innerHeight)}px) translate(-50%, -100%)`,i.style.opacity="1"})}const dM={marRaso:"uMarRaso",marMedio:"uMarMedio",marFundo:"uMarFundo",espuma:"uEspuma",areia:"uAreia",grama0:"uGrama0",grama1:"uGrama1",grama2:"uGrama2"};function hM(n){const e=Kr(n.planeta)?.cores;if(e)for(const[a,r]of Object.entries(dM))jd[r].value.set(e[a]);const t=Kr(n.arvores)?.cores;if(t){for(const{m:a,v:r}of Kd)a.color.set(t.copa[r%t.copa.length]);for(const a of Qd)a.color.set(t.copa2)}const i=Kr(n.ceu)?.cores;i&&($n.background.set(i.fundo),Zd.color.set(i.estrelas),Jd.color.set(i.nuvens))}const Oi=n_({aoMudarSkins:hM,aoMudarFichas:n=>{rM.textContent=String(n)}}),Kc=q_({bip:(...n)=>Oi.bip(...n),somAtivo:()=>Oi.somAtivo()});function ch(n){n==="arcade"?Kc.abrir():Oi.abrir()}ih.addEventListener("click",()=>{Ta>=0&&ri[Ta].jogo&&(mi.clear(),ch(ri[Ta].jogo))});const pM=4,zu=5,mM=.2*vi,gM=new yr({color:14035262,emissive:9048096,emissiveIntensity:.6,roughness:.45,flatShading:!0}),ku=new yr({color:16052192,emissive:6973016,emissiveIntensity:.4,roughness:.6,flatShading:!0}),Qc=[],xM=new k;function fh(n){const e=new k;for(let t=0;t<80;t++)if(e.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),!(Wc(e)<Xc+.06)&&!(xM.copy(e).applyQuaternion(ca).angleTo(xs)<.45*vi)&&!sa.some(i=>e.angleTo(i)<.36*vi)&&!vs.some(i=>e.angleTo(i.d)<i.r+.09*vi)&&!Qc.some(i=>i!==n&&i.ativa&&i.d.angleTo(e)<.25)){n.d.copy(e),n.raiz.quaternion.setFromUnitVectors(xs,e),n.raiz.visible=!0,n.ativa=!0;return}n.ativa=!1,n.volta=pi+2}for(let n=0;n<pM;n++){const e=new Mn,t=new Mn,i=new Ht(new Cn(.3,.3,.08,12),gM),a=new Ht(new Cn(.2,.2,.1,12),ku);i.rotation.z=a.rotation.z=Math.PI/2,t.add(i,a);for(let s=0;s<8;s++){const o=s*Math.PI/4,f=new Ht(new Xt(.1,.14,.1),ku);f.position.set(0,Math.sin(o)*.3,Math.cos(o)*.3),f.rotation.x=o,t.add(f)}t.position.y=oi+.7,e.add(t),lo(e),ho.add(e);const r={d:new k,raiz:e,giro:t,ativa:!1,volta:0,fase:n*1.3};Qc.push(r),fh(r)}const es=new k;function vM(n){aa.getWorldPosition(es),es.project(vn);const e=document.createElement("div");e.className="popup",e.textContent=n,e.style.left=Math.round((es.x*.5+.5)*window.innerWidth)+"px",e.style.top=Math.round((-es.y*.5+.5)*window.innerHeight-70)+"px",document.body.append(e),setTimeout(()=>e.remove(),1e3)}function _M(n){for(const e of Qc){if(!e.ativa){pi>=e.volta&&fh(e);continue}e.giro.rotation.y+=n*3.2,e.giro.position.y=oi+.7+Math.sin(pi*3+e.fase)*.08,lh(e.d)<mM&&(e.ativa=!1,e.raiz.visible=!1,e.volta=pi+25+Math.random()*25,Oi.adicionarFichas(zu),vM("+"+zu),Oi.bip(988,.07,"square",.07),Oi.bip(1319,.22,"square",.07,.08),Oi.bip(1976,.3,"triangle",.05,.08))}}let Vu=performance.now();ii.setAnimationLoop(()=>{const n=performance.now(),e=Math.min((n-Vu)/1e3,.05);Vu=n,pi+=e;const t=(S,E)=>mi.has(S)||mi.has(E)?1:0,i=Oi.estaAberto()||Kc.estaAberto();let a=i?0:t("ArrowRight","KeyD")-t("ArrowLeft","KeyA")||Ui.x,r=i?0:t("ArrowUp","KeyW")-t("ArrowDown","KeyS")||Ui.y;const s=Math.hypot(a,r);s>1&&(a/=s,r/=s),(mi.has("ShiftLeft")||mi.has("ShiftRight"))&&(a*=1.7,r*=1.7),Ma=Ml(Ma,a,9,e),Sa=Ml(Sa,r,9,e);const f=Math.hypot(Ma,Sa);f>.003&&(ya.set(Sa,0,Ma).normalize(),Ms.setFromAxisAngle(ya,f*Y_*e),ca.premultiply(Ms),Ou=!0);for(const S of sa)Fu(S,Z_);for(const S of vs)S.baixo&&lr>.5||Fu(S.d,S.r);ca.normalize(),Ou&&Na("#dica").classList.add("some"),!i&&(mi.has("Space")||Ui.pulo)&&cr&&(jo=7.2,cr=!1,bl=0),cr||(jo-=20*e,bl+=e,lr+=jo*e,lr<=0&&(lr=0,jo=0,cr=!0));const u=Math.min(1.7,f);if(f>.08){const S=Math.abs(Ma)>Math.abs(Sa)*1.1,E=Math.abs(Sa)>Math.abs(Ma)*1.1;S?Ji=Ma>0?"direita":"esquerda":E&&(Ji=Sa>0?"norte":"sul")}yl+=u*e*9;let h;if(cr)f>1.2?h=na.correr[Ji][Math.floor(yl)%os.correr]:f>.08?h=na.andar[Ji][Math.floor(yl)%os.andar]:h=Ji==="sul"?na.parado.sul[Lu[Math.floor(pi*4)%Lu.length]]:na.parado[Ji][0];else{const S=Math.min(.999,bl/cM);h=na.pular[Ji][Math.floor(S*os.pular)]}aa.material=h;const d=cr&&f<=.08&&Ji!=="sul"?Math.sin(pi*2.4)*.012:0;aa.scale.set(Yc*(1-d*.5),Rs*(1+d),1),aa.position.y=oi+lr;const p=Math.min(lr,1.5);Du.scale.setScalar(1-p*.2),Du.material.opacity=.55-p*.2;const m=vn.userData.afasta,b=ah*m,_=.42,x=1.5;vn.position.set(0,x+Math.sin(_)*b,Math.cos(_)*b),vn.lookAt(0,x,0),qc.rotation.y=Math.sin(pi*.1)*.4;let T=-1,C=$_;sa.forEach((S,E)=>{const R=lh(S);R<C&&(C=R,T=E)}),eh.forEach((S,E)=>{const R=E===T;S.anel.material.opacity=Ml(S.anel.material.opacity,R?.55+Math.sin(pi*4)*.25:0,8,e),S.icone.position.y=.1+Math.sin(pi*1.6+E)*(R?.12:.04),S.gira&&(S.gira.rotation.y+=e*(R?2.4:.8))}),Ta=T,oM(T),uM(T),_M(e),ii.setRenderTarget(fo),ii.render($n,vn),ii.setRenderTarget(null),ii.render(rh,lM)});
