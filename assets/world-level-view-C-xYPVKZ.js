import{$ as e,A as t,At as n,B as r,Bt as i,C as a,Ct as o,D as s,Dt as c,E as l,Et as u,F as d,G as f,Gt as p,H as m,Ht as h,It as g,J as _,K as v,Kt as y,Lt as b,M as x,Mt as S,N as ee,Nt as te,O as ne,Ot as C,P as re,Q as w,R as ie,Rt as ae,S as oe,St as se,T as ce,Tt as le,U as ue,Ut as de,V as fe,Vt as pe,W as me,Wt as he,X as ge,Xt as _e,Y as ve,Z as ye,_ as T,_t as be,a as xe,at as Se,b as Ce,bt as we,c as Te,ct as Ee,d as De,dt as Oe,et as ke,f as Ae,ft as je,g as Me,gt as Ne,h as Pe,ht as Fe,i as Ie,it as Le,j as Re,k as ze,kt as E,l as Be,lt as Ve,m as He,mt as Ue,n as We,nt as Ge,o as Ke,ot as qe,p as Je,pt as Ye,q as Xe,rt as Ze,s as Qe,st as $e,t as et,tt,u as nt,ut as rt,v as it,vt as at,w as ot,wt as st,x as ct,xt as lt,y as D,yt as ut,z as dt,zt as ft}from"./main-D1smWpVf.js";import{Ar as O,At as pt,F as k,Ft as mt,Hn as ht,J as A,Lt as gt,O as _t,P as vt,W as yt,Wn as bt,X as xt,Xt as St,Yt as Ct,Zn as wt,_ as j,at as M,c as Tt,cn as Et,d as N,en as Dt,fr as Ot,g as kt,it as At,jr as jt,jt as P,k as Mt,kr as Nt,nt as Pt,or as Ft,r as It,u as F,vt as Lt,xr as Rt,yt as zt}from"./three.core-CepfYkh1.js";import{K as Bt,L as Vt,S as I,X as Ht,w as L,x as Ut}from"./seed-code-Bh2oZUZ6.js";import{_ as Wt,b as Gt,d as Kt,f as qt,i as Jt,l as R,m as Yt,p as Xt,u as Zt,v as Qt,x as $t,y as en}from"./deadlines-_KOTvk_c.js";var tn=2.1,nn=6.5,rn=2.5,an=1.2,on=.06;function sn(e){let t=e/nn;return Math.exp(-t*t)}function cn(e){let t=Math.floor(e.length/3),n=new Float32Array(t*2);for(let r=0;r<t;r++){let t=r*3,i=e[t+2];n[r*2]=e[t]+tn*Math.sin(i),n[r*2+1]=e[t+1]+tn*Math.cos(i)}return n}function ln(e,t=512,n=600){let r=new Float32Array(t*t),i=2*n/t,a=rn*nn,o=cn(e);for(let e=0;e<o.length;e+=2){let s=o[e],c=o[e+1],l=Math.max(0,Math.floor((s-a+n)/i)),u=Math.min(t-1,Math.ceil((s+a+n)/i)),d=Math.max(0,Math.floor((c-a+n)/i)),f=Math.min(t-1,Math.ceil((c+a+n)/i));for(let e=d;e<=f;e++){let o=(e+.5)*i-n-c;for(let c=l;c<=u;c++){let l=(c+.5)*i-n-s,u=Math.sqrt(l*l+o*o);u<=a&&(r[e*t+c]+=sn(u))}}}let s=new Uint8Array(t*t);for(let e=0;e<s.length;e++)s[e]=Math.round(Math.min(1,r[e])*255);for(let e=0;e<t;e++)s[e]=s[(t-1)*t+e]=s[e*t]=s[e*t+t-1]=0;return s}function un(e){let t=new Mt(ln(e),512,512,ht,Rt);return t.name=`city-lamp-pools`,t.colorSpace=``,t.magFilter=Lt,t.minFilter=zt,t.generateMipmaps=!0,t.wrapS=t.wrapT=kt,t.unpackAlignment=1,t.needsUpdate=!0,t}var dn=`
{
  float pool = texture2D( uLampPool, p / ${1200 .toFixed(1)} + 0.5 ).r * step( max( abs( p.x ), abs( p.y ) ), ${600 .toFixed(1)} );
  vec3 liftCol = col * ${on.toFixed(3)} / ( dot( col, vec3( 0.2126, 0.7152, 0.0722 ) ) + ${on.toFixed(3)} );
  totalEmissiveRadiance += liftCol * uDusk * ( ${an.toFixed(3)} + ${14 .toFixed(3)} * pool * vec3( 1.0, 0.82, 0.55 ) );
}`,fn=[.07,.2],pn=[.18,.4],mn=[.4,.7],hn=.12,z=[.35,.75],B=[.15,1,2.4],gn=.95,_n=[.510125,.3975,.55*.53],V=e=>e.toFixed(4),vn=`
float floorShare( float rF, float litP ) {
  float k = rF < ${V(z[0])} ? ${V(B[0])} : rF < ${V(z[1])} ? ${V(B[1])} : ${V(B[2])};
  return clamp( litP * k, 0.0, ${V(gn)} );
}
float floorShareMean( float litP ) {
  return ${V(z[0])} * clamp( litP * ${V(B[0])}, 0.0, ${V(gn)} )
    + ${V(z[1]-z[0])} * clamp( litP * ${V(B[1])}, 0.0, ${V(gn)} )
    + ${V(1-z[1])} * clamp( litP * ${V(B[2])}, 0.0, ${V(gn)} );
}`,H={windowFade:`${V(fn[0])}, ${V(fn[1])}`,unitFade:`${V(pn[0])}, ${V(pn[1])}`,floorFade:`${V(mn[0])}, ${V(mn[1])}`,unitMin:V(2),unitSpan:V(3),darkInLit:V(hn),litMean:`vec3( ${_n.map(V).join(`, `)} )`},yn={tile:1024,data:512,low:256,layers:[{id:`glass`,source:`Facade001`,cols:16,rows:10,recess:.08,curtain:!0,cover:.8867,wall:[.0119,.0144,.0193],glass:[.0717,.0883,.1036]},{id:`ribbon`,source:`Facade006`,cols:14,rows:8,recess:.18,curtain:!0,cover:.6951,wall:[.6518,.6554,.6555],glass:[.073,.1044,.1048]},{id:`brick`,source:`Facade018A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.367,wall:[.2093,.1602,.1383],glass:[.0749,.0821,.0967]},{id:`pilaster`,source:`Facade019A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.3388,wall:[.1141,.1144,.1122],glass:[.0755,.0818,.0956]},{id:`brick-pier`,source:`Facade020A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.3388,wall:[.1053,.0894,.0843],glass:[.1372,.1426,.1545]},{id:`stucco`,source:`Facade018A`,cols:6,rows:6,recess:.22,curtain:!1,cover:.367,wall:[.4535,.4066,.342],glass:[.0749,.0821,.0967]}]},bn=new URL(`facade-color-BoK-lKvc.webp`,import.meta.url).href,xn=new URL(`facade-data-C4IJuv28.webp`,import.meta.url).href,Sn=new URL(`facade-color-low-D4cUquQB.webp`,import.meta.url).href,U=yn.layers,W=e=>{let t=U.findIndex(t=>t.id===e);if(t<0)throw Error(`facade layer ${e} missing from facades.json`);return t},G={glass:W(`glass`),ribbon:W(`ribbon`),brick:W(`brick`),pilaster:W(`pilaster`),"brick-pier":W(`brick-pier`),stucco:W(`stucco`)},Cn={glass:3.9,ribbon:3.7,brick:3.3,pilaster:3.6,"brick-pier":3.4,stucco:3.2};function wn(e){return Cn[U[e].id]}var Tn={tower:[[.42,`glass`],[.3,`ribbon`],[.18,`pilaster`],[.1,`brick-pier`]],mid:[[.12,`glass`],[.2,`ribbon`],[.22,`pilaster`],[.22,`brick`],[.24,`brick-pier`]],low:[[.4,`stucco`],[.34,`brick`],[.14,`brick-pier`],[.12,`pilaster`]]},En=e=>{let t=(e|0)^1540483477;return t=Math.imul(t^t>>>15,739982445),t=Math.imul(t^t>>>12,695872825),((t^t>>>15)>>>0)/4294967296};function Dn(e,t,n){if(e===1)return G.ribbon;if(e===2)return G.glass;let r=t>70?Tn.tower:t>24?Tn.mid:Tn.low,i=En(n);for(let[e,t]of r){if(i<e)return G[t];i-=e}return G[r[r.length-1][1]]}var On=262144;function kn(e,t,n){return(e*4+t)*On+Math.abs(n|0)%On}function An(e){return e?{color:bn,data:xn}:{color:Sn,data:null}}async function jn(e,t,n){let r=new Image;r.decoding=`async`,r.src=e,await r.decode();let i=U.length,a=r.naturalWidth;if(r.naturalHeight!==a*i)throw Error(`facade texture ${e}: ${a}x${r.naturalHeight} is not ${i} square tiles`);let o=new _t(r,a,a,i);return o.format=Et,o.type=Rt,o.colorSpace=t?wt:``,o.wrapS=o.wrapT=bt,o.minFilter=zt,o.magFilter=Lt,o.generateMipmaps=!0,o.anisotropy=n,o.flipY=!1,o.premultiplyAlpha=!1,o.needsUpdate=!0,o.name=e.split(`/`).pop()??`facade`,o}function Mn(e){return e.transient?null:e.tier!==`low`}var Nn=class{load;canLoad;uniforms={uFacadeColor:{value:null},uFacadeData:{value:null},uFacadeTex:{value:0},uFacadeHQ:{value:0}};bound=null;inFlight=new Map;failed=new Set;wantHQ=!1;disposed=!1;constructor(e=jn,t=()=>typeof Image==`function`&&typeof Image.prototype.decode==`function`){this.load=e,this.canLoad=t}setQuality(e){this.wantHQ=e,this.uniforms.uFacadeHQ.value=e&&this.uniforms.uFacadeData.value?1:0,this.request()}request(){if(this.disposed)return;let e=this.wantHQ&&!this.failed.has(!0);this.bound===!0||this.bound===!1&&!e||this.inFlight.has(!0)||!e&&this.inFlight.has(!1)||this.failed.has(e)||this.start(e)}get ready(){return Promise.all([...this.inFlight.values()]).then(()=>void 0)}start(e){if(!this.canLoad())return;let t=An(e),n=e?8:1,r=(async()=>{try{let r=await Promise.allSettled([this.load(t.color,!0,n),t.data?this.load(t.data,!1,n):Promise.resolve(null)]),i=r.find(e=>e.status===`rejected`);if(i){for(let e of r)e.status===`fulfilled`&&e.value?.dispose();throw i.reason}let[a,o]=r.map(e=>e.value);if(this.disposed||this.bound===!0||this.bound===!1&&!e){a.dispose(),o?.dispose();return}let s=this.uniforms;s.uFacadeColor.value?.dispose(),s.uFacadeData.value?.dispose(),s.uFacadeColor.value=a,s.uFacadeData.value=o,s.uFacadeTex.value=1,s.uFacadeHQ.value=this.wantHQ&&o?1:0,this.bound=e}catch(t){this.failed.add(e),console.warn(`City facade textures unusable; procedural panes stay`,t)}finally{this.inFlight.delete(e),this.request()}})();this.inFlight.set(e,r)}dispose(){this.disposed=!0,this.uniforms.uFacadeColor.value?.dispose(),this.uniforms.uFacadeData.value?.dispose(),this.uniforms.uFacadeColor.value=null,this.uniforms.uFacadeData.value=null,this.uniforms.uFacadeTex.value=0}},K=e=>e.toFixed(4),q=e=>`float[${e.length}]( ${e.map(K).join(`, `)} )`,Pn=e=>`vec3[${e.length}]( ${e.map(e=>`vec3( ${e.map(K).join(`, `)} )`).join(`, `)} )`,Fn=`
const float FL_COLS[${U.length}] = ${q(U.map(e=>e.cols))};
const float FL_ROWS[${U.length}] = ${q(U.map(e=>e.rows))};
const float FL_FLOOR[${U.length}] = ${q(U.map((e,t)=>wn(t)))};
const float FL_RECESS[${U.length}] = ${q(U.map(e=>e.recess))};
const float FL_COVER[${U.length}] = ${q(U.map(e=>e.cover))};
const float FL_CURTAIN[${U.length}] = ${q(U.map(e=>+!!e.curtain))};
const vec3 FL_WALL[${U.length}] = ${Pn(U.map(e=>e.wall))};
const vec3 FL_GLASS[${U.length}] = ${Pn(U.map(e=>e.glass))};
const float FL_STUCCO = ${K(G.stucco)};
const float FL_BRICK = ${K(G.brick)};
const float FL_BRICK_PIER = ${K(G[`brick-pier`])};
const float FL_SHIFT = ${K(On)};
float snapCells( float span, float cell ) { return max( 1.0, floor( span / cell + 0.5 ) ); }`,J=e=>e.toFixed(4),Y=[.3,1.6,.1,.94,.78,.1];function In(e){let[t,n,r,i,a,o]=Y;return e<r||e>i?0:t+n*Math.exp(-(((e-a)/o)**2))}var Ln=(()=>{let e=4096,t=0;for(let n=0;n<e;n++)t+=In((n+.5)/e);return t/e})(),Rn=`varying vec3 vFLocal;
varying vec3 vFN;
varying vec3 vFSize;
varying float vFBase;`,zn=`
vFLocal = position;
vFN = normal;
vFSize = aInstB.xyz;
vFBase = aInst.y;`,Bn=`
uniform float uTime;
uniform float uDusk;
uniform float uLit;
uniform sampler2D uDetail;
uniform sampler2D uGravel;
uniform float uGravelScale;
uniform highp sampler2DArray uFacadeColor;
uniform highp sampler2DArray uFacadeData;
uniform float uFacadeTex;
uniform float uFacadeHQ;
varying vec3 vFLocal;
varying vec3 vFN;
varying vec3 vFSize;
varying float vFBase;
${Fn}
float fh( float n ) { return fract( sin( mod( n, 251.0 ) * 12.9898 + 4.1414 ) * 43758.5453 ); }
// sin-hash arguments stay small (|p| < ~1000): a large argument collapses to the same value on GPUs
float fh3( vec3 p ) { return fract( sin( dot( mod( p, 251.0 ), vec3( 12.9898, 78.233, 37.719 ) ) ) * 43758.5453 ); }
vec3 srgb( float r, float g, float b ) { return pow( vec3( r, g, b ), vec3( 2.2 ) ); }
vec3 pick4( float t, vec3 a, vec3 b, vec3 c, vec3 d ) { return t < 0.25 ? a : t < 0.5 ? b : t < 0.75 ? c : d; }
float fRough;
float fMetal;
float fRefl;
// tangent-space normal of the facade (x along the face, y up, z out) and how much of it replaces the geometric one
vec3 fNT;
float fNK;
vec3 fTW;
vec3 fNW;
${vn}
/**
 * Interior mapping: the radiance behind a pane at p (room metres: x across from the room's left wall, y up from its floor) along the
 * ray r (x, y, z into the room), in a room of size 'room'. Daylight falls off from the window; a lit room takes its ceiling panels' light.
 * dayK and litC scale the two; rs picks the decor.
 */
vec3 roomLight( vec2 p, vec3 r, vec3 room, float rs, float dayK, vec3 litC, float shop ) {
  float tx = r.x > 0.0 ? ( room.x - p.x ) / r.x : p.x / max( -r.x, 1e-4 );
  float ty = r.y > 0.0 ? ( room.y - p.y ) / r.y : p.y / max( -r.y, 1e-4 );
  float tz = room.z / max( r.z, 1e-4 );
  float t = min( min( tx, ty ), tz );
  vec3 h = vec3( p, 0.0 ) + r * t;
  vec3 wallC = pick4( rs, srgb( 0.72, 0.71, 0.68 ), srgb( 0.55, 0.59, 0.63 ), srgb( 0.7, 0.64, 0.54 ), srgb( 0.48, 0.48, 0.47 ) );
  // desks, cabinets and sofas: a darker band along the walls, broken every 1.4 m
  float low = step( h.y, 0.85 ) * ( 0.35 + 0.3 * fh( rs * 31.0 + floor( ( h.x + h.z ) / 1.4 ) ) );
  vec3 c;
  float isCeil = 0.0;
  if ( t == tz ) c = wallC * mix( 1.0, low, step( h.y, 0.85 ) );
  else if ( t == tx ) c = wallC * 0.8 * mix( 1.0, low, step( h.y, 0.85 ) );
  else if ( r.y < 0.0 ) c = pick4( fract( rs * 7.31 ), srgb( 0.3, 0.29, 0.28 ), srgb( 0.42, 0.33, 0.25 ), srgb( 0.24, 0.26, 0.3 ), srgb( 0.48, 0.46, 0.42 ) );
  else { c = srgb( 0.84, 0.84, 0.82 ); isCeil = 1.0; }
  // desks and partitions: a plane across the room at 40-60 % of its depth, up to 1.1 m, in 1.6 m bays (three in five taken)
  float zp = room.z * ( 0.4 + 0.2 * fract( rs * 5.7 ) );
  float tp = zp / max( r.z, 1e-4 );
  vec3 hp = vec3( p, 0.0 ) + r * tp;
  float bay = floor( hp.x / 1.6 );
  if ( tp < t && hp.y < 1.1 && hp.x > 0.2 && hp.x < room.x - 0.2 && fh( rs * 17.0 + bay ) < 0.6 ) {
    t = tp;
    h = hp;
    c = pick4( fh( rs * 3.1 + bay ), srgb( 0.18, 0.18, 0.19 ), srgb( 0.36, 0.3, 0.24 ), srgb( 0.5, 0.5, 0.48 ), srgb( 0.22, 0.24, 0.28 ) ) * ( 0.7 + 0.3 * step( 0.72, hp.y ) );
    isCeil = 0.0;
  }
  // a shop: shelves of goods on its walls, a brighter floor
  if ( shop > 0.5 && ( t == tz || t == tx ) ) {
    vec2 sc = floor( vec2( h.x + h.z, h.y ) / vec2( 0.22, 0.32 ) );
    float shelf = step( 0.3, h.y ) * step( h.y, 1.9 );
    vec3 goods = pick4( fh( sc.x * 0.73 + sc.y * 5.1 + rs * 9.0 ), srgb( 0.55, 0.3, 0.26 ), srgb( 0.7, 0.68, 0.62 ), srgb( 0.3, 0.38, 0.5 ), srgb( 0.6, 0.52, 0.34 ) );
    c = mix( c, goods * mix( 0.35, 1.0, step( 0.12, fract( h.y / 0.32 ) ) ), shelf * 0.8 );
  }
  float deep = clamp( h.z / room.z, 0.0, 1.0 );
  vec3 day = c * dayK * ( 0.3 + 0.7 * exp( -2.4 * deep ) ) * ( 1.0 - 0.45 * isCeil );
  vec2 pn = abs( fract( h.xz / 2.4 ) - 0.5 );
  float panel = isCeil * step( pn.x, 0.16 ) * step( pn.y, 0.3 );
  vec3 lit = litC * ( c * ( 0.75 + 0.5 * ( 1.0 - deep ) ) + panel * 2.5 );
  return day + lit;
}`,Vn=`
float code = vTint;
float seed = mod( code, FL_SHIFT );
float kl = floor( code / FL_SHIFT );
float kind = mod( kl, 4.0 );
float layer = floor( kl / 4.0 + 0.01 );
int li = int( layer );
float h1 = fh( seed * 0.00137 + 0.31 );
float h2 = fh( seed * 0.00071 + 1.73 );
float h3 = fh( seed * 0.00053 + 2.91 );
float h4 = fh( seed * 0.00031 + 5.17 );
vec3 n = normalize( vFN );
vec3 S = vFSize;
bool curtain = FL_CURTAIN[li] > 0.5;
bool bridge = kind == 2.0;
// the stilts of the slab and other posts: bare concrete, no windows
bool post = min( S.x, S.z ) < 5.0 && !bridge;
// the building's own wall colour around the scan's: stucco takes a palette, brick and concrete vary in tone, glass in tint
vec3 tintW = layer == FL_STUCCO ? pick4( h3, vec3( 1.06, 1.02, 0.95 ), vec3( 1.1, 1.08, 1.06 ), vec3( 1.08, 0.97, 0.78 ), vec3( 1.02, 0.86, 0.78 ) )
  : layer == FL_BRICK || layer == FL_BRICK_PIER ? vec3( 0.86 + 0.3 * h3, 0.84 + 0.24 * h3, 0.84 + 0.2 * h2 )
  : vec3( 0.82 + 0.36 * h3 );
vec3 tintG = curtain ? pick4( h2, vec3( 0.9, 1.0, 1.15 ), vec3( 0.85, 1.08, 1.05 ), vec3( 1.15, 1.0, 0.85 ), vec3( 1.0 ) ) : vec3( 1.0 );
vec3 wallMean = FL_WALL[li] * tintW;
fRough = 0.86;
fMetal = 0.0;
fRefl = 1.0;
fNK = 0.0;
fNT = vec3( 0.0, 0.0, 1.0 );
fTW = vec3( 1.0, 0.0, 0.0 );
fNW = n;
vec3 col = wallMean;
vec3 emit = vec3( 0.0 );
float grain = texture2D( uDetail, ( vFLocal.xz * S.xz + vFLocal.y * S.y ) * 0.21 ).r;
if ( n.y > 0.5 ) {
  // roof: tar / gravel, a lighter parapet coping, patches
  vec2 e = ( 0.5 - abs( vFLocal.xz ) ) * S.xz;
  float edge = 1.0 - step( 0.6, min( e.x, e.y ) );
  float blot = texture2D( uDetail, vFLocal.xz * S.xz * 0.031 ).b;
  vec3 roof = srgb( 0.3, 0.3, 0.29 ) * ( 0.75 + 0.35 * texture2D( uDetail, vFLocal.xz * S.xz * 0.15 ).r ) * ( 0.85 + 0.3 * blot );
  // gravel ballast (the library's gravel set) on the roofs near the drone
  float roofNear = 1.0 - smoothstep( 40.0, 160.0, length( vViewPosition ) );
  if ( roofNear > 0.0 ) {
    vec3 gv = texture2D( uGravel, vFLocal.xz * S.xz * uGravelScale ).rgb / max( texture2D( uGravel, vec2( 0.5 ), 16.0 ).rgb, vec3( 0.03 ) );
    // close up the tar reads as pale ballast stones over it (a flat dark slab otherwise)
    float gl = pow( max( dot( gv, vec3( 0.2126, 0.7152, 0.0722 ) ), 0.0 ), 1.6 );
    vec3 ballast = srgb( 0.5, 0.49, 0.46 ) * mix( vec3( gl ), gv, 0.3 );
    // membrane panels between the ballast fields: 6 m seams, a darker strip, and wet-looking patches by the blot
    vec2 pm = abs( fract( vFLocal.xz * S.xz / 6.0 ) - 0.5 );
    float seam = smoothstep( 0.47, 0.5, max( pm.x, pm.y ) );
    ballast *= ( 1.0 - 0.35 * seam ) * ( 0.7 + 0.5 * blot );
    roof = mix( roof, ballast, roofNear * ( curtain ? 0.5 : 0.9 ) );
  }
  // a skybridge has a standing-seam metal roof
  if ( bridge ) roof = srgb( 0.42, 0.44, 0.46 ) * ( 0.85 + 0.3 * step( 0.5, fract( vFLocal.x * S.x / 0.6 + vFLocal.z * S.z / 0.6 ) ) );
  col = mix( roof * ( curtain ? 0.75 : 1.0 ), mix( max( wallMean, vec3( 0.08 ) ), vec3( 0.6 ), 0.3 ), edge );
} else if ( n.y < -0.5 ) {
  col = bridge ? srgb( 0.5, 0.5, 0.5 ) : srgb( 0.4, 0.4, 0.39 );
} else {
  // the face's own frame: x to the right as seen from outside, y up, z out
  vec3 T = vec3( n.z, 0.0, -n.x );
  fTW = T;
  float span = abs( n.x ) > 0.5 ? S.z : S.x;
  float u = dot( vFLocal * S, T ) + 0.5 * span;
  float v = vFLocal.y * S.y;
  float yAbs = vFBase + v;
  float ground = ( kind == 0.0 || kind == 3.0 ) && vFBase < 0.5 && S.y > 7.0 && !post ? ( curtain ? 6.0 : 4.6 ) : 0.0;
  float crown = bridge || post ? 0.0 : curtain ? 2.4 : 1.1;
  float floor0 = bridge ? S.y : FL_FLOOR[li];
  float gridH = max( S.y - ground - crown, 0.5 );
  float floors = bridge ? 1.0 : snapCells( gridH, floor0 );
  float floorH = gridH / floors;
  float colW0 = bridge ? 1.5 : floor0 * FL_ROWS[li] / FL_COLS[li];
  float colW = span / snapCells( span, colW0 );
  float vf = v - ground;
  float cu = u / colW;
  float cv = vf / floorH;
  float fu = fract( cu );
  float fv = fract( cv );
  float fwU = fwidth( cu );
  float fwV = fwidth( cv );
  float far = smoothstep( ${H.windowFade}, max( fwU, fwV ) );
  float floorI = floor( cv );
  float colI = floor( cu );
  float faceI = n.x * 3.0 + n.z * 7.0;
  float seedK = h4 * 211.0;
  float rnd = fh3( vec3( floorI, colI, seedK + faceI ) );
  // the view ray in the face's frame (x right, y up, z out of the wall toward the camera)
  vec3 Vw = normalize( ( vec4( normalize( vViewPosition ), 0.0 ) * viewMatrix ).xyz );
  vec3 Vt = vec3( dot( Vw, T ), Vw.y, max( dot( Vw, n ), 0.02 ) );
  float isStore = 0.0;
  float isBand = 0.0;
  float m = 0.0;
  vec3 alb = wallMean;
  vec4 dt = vec4( 0.5, 0.5, 1.0, 0.86 );
  float hq = uFacadeHQ * ( 1.0 - far );
  // scan coordinates (tiles repeat); derivatives taken before any branch
  vec2 tuv = vec2( cu / FL_COLS[li], -cv / FL_ROWS[li] );
  vec2 dX = dFdx( tuv );
  vec2 dY = dFdy( tuv );
  float pu = fu;
  float pv = fv;
  float pcol = colI;
  if ( vf < 0.0 ) {
    // ground storey: shopfronts between piers of the wall's material, a fascia above, lit at dusk
    float fs = fract( u / 4.2 + 0.5 );
    m = step( 0.08, fs ) * step( fs, 0.92 ) * step( 0.35, v ) * step( v, ground - 1.1 );
    isStore = 1.0;
    float fascia = step( ground - 1.0, v ) * step( v, ground - 0.35 );
    alb = mix( wallMean * ( curtain ? 0.6 : 0.85 ) * ( 0.85 + 0.3 * grain ), pick4( fh( seed + colI * 0.37 ), srgb( 0.12, 0.2, 0.3 ), srgb( 0.45, 0.12, 0.1 ), srgb( 0.15, 0.15, 0.15 ), srgb( 0.12, 0.28, 0.2 ) ), fascia );
    alb = mix( alb, srgb( 0.16, 0.16, 0.17 ), m );
    // a pier stands proud of the shopfront glass: shade the reveal
    dt = vec4( 0.5 + 0.35 * ( smoothstep( 0.0, 0.08, fs ) - smoothstep( 0.92, 1.0, fs ) ) * ( 1.0 - m ), 0.5, 1.0 - m, mix( 0.8, 0.06, m ) );
    pu = fs;
    pv = clamp( ( v - 0.35 ) / max( ground - 1.45, 0.5 ), 0.0, 1.0 );
    pcol = floor( u / 4.2 + 0.5 );
    rnd = fh( seed + pcol * 1.7 );
    fNK = 0.6 * uFacadeHQ;
  } else if ( vf >= gridH ) {
    // the crown: a cornice and coping over masonry, a louvred plant screen over a curtain wall
    isBand = 1.0;
    float top = S.y - v;
    if ( curtain ) {
      float lv = fract( v / 0.3 );
      alb = srgb( 0.32, 0.33, 0.35 ) * mix( 0.45, 1.0, smoothstep( 0.1, 0.6, lv ) );
      dt = vec4( 0.5, 0.5 + 0.4 * ( lv - 0.5 ), 1.0, 0.45 );
      fNK = uFacadeHQ;
      fMetal = 0.5;
    } else {
      float coping = step( top, 0.25 );
      float shadowLine = step( vf, gridH + 0.18 );
      alb = wallMean * mix( 1.0, 1.25, coping ) * mix( 1.0, 0.5, shadowLine ) * ( 0.9 + 0.2 * grain );
      dt = vec4( 0.5, mix( 0.5, 0.15, shadowLine ) + 0.3 * step( abs( top - 0.25 ), 0.04 ), 1.0, 0.85 );
      fNK = 0.8 * uFacadeHQ;
    }
  } else if ( post ) {
    alb = srgb( 0.55, 0.54, 0.52 ) * ( 0.85 + 0.3 * grain );
  } else if ( bridge ) {
    // a glazed bridge: steel transoms top and bottom, mullions every cell, a slab edge
    float frameX = 1.0 - step( 0.04, min( fu, 1.0 - fu ) * colW );
    float sill = step( v, 0.75 );
    float head = step( S.y - 0.6, v );
    m = ( 1.0 - frameX ) * ( 1.0 - sill ) * ( 1.0 - head );
    alb = mix( srgb( 0.3, 0.31, 0.33 ), srgb( 0.05, 0.06, 0.07 ), m );
    alb = mix( alb, srgb( 0.6, 0.6, 0.58 ), sill * step( v, 0.6 ) );
    dt = vec4( 0.5 + 0.4 * ( smoothstep( 0.0, 0.04, fu * colW ) - smoothstep( 0.0, 0.04, ( 1.0 - fu ) * colW ) ) * frameX, 0.5, 1.0 - 0.85 * m, mix( 0.4, 0.05, m ) );
    pv = clamp( ( v - 0.75 ) / ( S.y - 1.35 ), 0.0, 1.0 );
    fNK = uFacadeHQ;
    fMetal = 0.4 * ( 1.0 - m );
  } else if ( uFacadeTex > 0.5 ) {
    // the scan: parallax by its height (twice, the second step from where the first landed), then colour, mask and data
    if ( hq > 0.0 ) {
      vec2 toUV = vec2( 1.0 / ( colW * FL_COLS[li] ), -1.0 / ( floorH * FL_ROWS[li] ) );
      vec2 slide = -Vt.xy / max( Vt.z, 0.3 ) * FL_RECESS[li] * hq;
      float h0 = textureGrad( uFacadeData, vec3( tuv, layer ), dX, dY ).b;
      vec2 t1 = tuv + slide * ( 1.0 - h0 ) * toUV;
      float hb = textureGrad( uFacadeData, vec3( t1, layer ), dX, dY ).b;
      tuv += slide * ( 1.0 - 0.5 * ( h0 + hb ) ) * toUV;
      dt = textureGrad( uFacadeData, vec3( tuv, layer ), dX, dY );
      fNK = hq;
    }
    vec4 ct = textureGrad( uFacadeColor, vec3( tuv, layer ), dX, dY );
    m = ct.a;
    alb = ct.rgb * mix( tintW, tintG, m );
    if ( uFacadeHQ < 0.5 ) dt.a = mix( 0.85, 0.08, m );
    // where the room is seen through the pane, the pane is cell-local after the slide
    vec2 cs = vec2( tuv.x * FL_COLS[li], -tuv.y * FL_ROWS[li] );
    pu = fract( cs.x );
    pv = fract( cs.y );
    pcol = floor( cs.x );
  } else {
    // no scan (yet): a procedural pane per cell in the layer's mean colours
    float winW = curtain ? 0.92 : 0.5;
    float v0 = curtain ? 0.14 : 0.3;
    float v1 = curtain ? 0.97 : 0.8;
    m = step( 0.5 - winW * 0.5, fu ) * step( fu, 0.5 + winW * 0.5 ) * step( v0, fv ) * step( fv, v1 );
    alb = mix( wallMean * ( 0.9 + 0.2 * grain ), FL_GLASS[li] * tintG, m );
    dt.a = mix( 0.86, 0.08, m );
  }
  // weathering: vertical streaks and a darker base on the wall
  float streak = texture2D( uDetail, vec2( u * 0.05, yAbs * 0.004 ) ).g;
  alb *= mix( ( 0.88 + 0.2 * streak ) * ( 0.82 + 0.18 * smoothstep( 0.0, 6.0, yAbs ) ), 1.0, m );
  // rooms come in units of a few columns of one floor (a shopfront is its own): blinds, shade and light follow the unit
  float unitN = isStore > 0.5 ? 1.0 : bridge ? 64.0 : ${H.unitMin} + floor( fract( h4 * 7.13 ) * ${H.unitSpan} );
  float unitI = floor( colI / unitN );
  float rU = isStore > 0.5 ? rnd : fh3( vec3( floorI, unitI + 41.0, seedK + faceI ) );
  rnd = mix( rU, rnd, 0.3 );
  float farUnit = smoothstep( ${H.unitFade}, max( fwU / unitN, fwV ) );
  float farFloor = smoothstep( ${H.floorFade}, fwV );
  float litP = isStore > 0.5 ? 0.12 + 0.75 * uDusk : uDusk * uDusk * 0.55 + 0.01;
  float litF = isStore > 0.5 ? litP : floorShare( fh3( vec3( floorI + 7.0, seedK * 0.71, 3.0 ) ), litP );
  if ( bridge ) litF = 0.15 + 0.8 * uDusk;
  // living windows (docs/12): one unit in five switches its light now and then (each on its own slow clock)
  float tog = step( 0.8, fh3( vec3( unitI * 1.31 + 5.0, floorI * 0.71 + 2.0, seedK + faceI * 1.7 ) ) );
  float epoch = tog * floor( uTime / ( 25.0 + 70.0 * rU ) + rU * 11.0 );
  float litU = step( fh3( vec3( floorI + 17.0 * isStore, unitI + 3.7 + mod( epoch, 97.0 ) * 0.37, seedK * 1.37 + faceI ) ), litF );
  // a skybridge is one corridor: its lights come on together at dusk
  if ( bridge ) litU = step( 0.25, uDusk );
  float lit = litU * step( ${H.darkInLit}, fh3( vec3( colI + 9.0, floorI, seedK + faceI * 2.3 ) ) );
  vec3 warm = mix( vec3( 1.0, 0.7, 0.4 ), vec3( 0.85, 0.9, 1.0 ), step( 0.75, rU ) );
  // a lit room glows, it does not outshine the sky: dimmer than the sunlit wall, a spread of warm tones
  float litK = isStore > 0.5 ? 1.1 : 0.75;
  vec3 litCol = warm * ( 0.32 + 0.42 * rnd ) * litK;
  vec3 litColU = warm * ( 0.32 + 0.42 * rU ) * litK;
  vec3 litColA = ${H.litMean} * litK;
  // the scan's mask is the window grid at every distance (its mips are the unit / floor / building means)
  // a lit floor seen from outside: bright under its ceiling lights, dark at the slab and the plenum (mean 1, flat once a floor is a few px)
  // squared by hand: GLSL ES leaves pow of a negative base undefined (NaN on some GPUs)
  float dyGlow = ( fv - ${J(Y[4])} ) / ${J(Y[5])};
  float glowY = exp( -dyGlow * dyGlow );
  float rowGlow = isStore > 0.5 || bridge ? 1.0 : mix( ( ${J(Y[0])} + ${J(Y[1])} * glowY ) * step( ${J(Y[2])}, fv ) * step( fv, ${J(Y[3])} ) / ${J(Ln)}, 1.0, smoothstep( 0.12, 0.3, fwV ) );
  float rowCover = m * ( 1.0 - isBand ) * rowGlow;
  // the scan's mean glass share stands in for its panes far off; a post has no panes, so it keeps its own (zero) coverage
  float cover = isStore > 0.5 || bridge || post || uFacadeTex < 0.5 ? rowCover : FL_COVER[li];
  // the pane: near, a dark glass over the room behind it; the room fades into the scan's own pane colour with distance
  float inside = hq * m * ( 1.0 - isBand );
  if ( inside > 0.0 ) {
    float roomW = unitN * colW;
    float px = bridge ? clamp( u, 0.05, span - 0.05 ) : ( mod( pcol, unitN ) + pu ) * ( isStore > 0.5 ? 4.2 * 0.84 : colW );
    float py = pv * ( isStore > 0.5 ? max( ground - 1.45, 1.0 ) : bridge ? S.y - 1.35 : floorH * 0.85 ) + ( isStore > 0.5 || bridge ? 0.0 : 0.25 );
    vec3 room = isStore > 0.5 ? vec3( 4.2 * 0.84, max( ground - 1.45, 1.0 ), 7.0 ) : bridge ? vec3( span, S.y - 1.35, ( abs( n.x ) > 0.5 ? S.x : S.z ) ) : vec3( roomW, floorH - 0.3, clamp( roomW * 1.4, 4.0, 9.0 ) );
    vec3 r = vec3( -Vt.x, -Vt.y, Vt.z );
    float rs = fh3( vec3( floorI + 3.0, unitI + 11.0, seedK + faceI ) );
    float blind = step( 0.86, rU ) * ( 1.0 - isStore ) * step( 1.0 - 0.45 * fract( rU * 13.7 ), pv );
    float dayK = ( 1.0 - uDusk ) * ( curtain ? 0.17 : isStore > 0.5 ? 0.34 : 0.28 );
    vec3 L = roomLight( vec2( px, py ), r, room, rs, dayK, litCol * lit * uLit, isStore );
    L = mix( L, srgb( 0.6, 0.57, 0.5 ) * ( dayK + 0.6 * lit * uLit * litCol ), blind );
    // what the pane lets through (Schlick: the rest is the reflection the lighting adds)
    float fres = 0.04 + 0.96 * pow( max( 1.0 - Vt.z, 0.0 ), 5.0 );
    emit += L * ( 1.0 - fres ) * inside;
    alb = mix( alb, FL_GLASS[li] * tintG * ( 0.25 + 0.2 * rnd ), inside );
  }
  col = alb;
  // a pane is flat and smooth (the scans' glass roughness is photo grime: it sparkles in the sky's reflection)
  fRough = mix( dt.a, curtain ? 0.035 : 0.07, m );
  fMetal = max( fMetal, m * ( curtain ? 0.25 : 0.06 ) );
  // the sky probe has no buildings in it: a pane reflects the sky where its mirror ray climbs, the street's other side below that
  vec3 Rw = reflect( -Vw, n );
  float skyK = smoothstep( -0.05, 0.4, Rw.y );
  // coated office glass mirrors more than bare float glass (F0 0.04): the sky's share is lifted
  fRefl = mix( 1.0, mix( 0.12, curtain ? 2.0 : 0.9, skyK ), m );
  {
    // the facades across the street in the glass: a dim window grid by the mirror ray's bearing and climb, lit rooms at dusk
    vec2 rq = vec2( atan( Rw.x, Rw.z ) * 11.0, Rw.y / max( length( Rw.xz ), 0.15 ) * 6.0 + seed * 0.01 );
    vec2 rc = floor( rq );
    float rw = step( 0.2, fract( rq.x ) ) * step( 0.35, fract( rq.y ) );
    rw = mix( rw, 0.5, far );
    vec3 across = mix( srgb( 0.2, 0.21, 0.23 ), srgb( 0.06, 0.07, 0.09 ), rw ) * ( 1.0 - 0.85 * uDusk )
      + rw * litColA * uDusk * uLit * step( 0.55, fh( rc.x * 0.37 + rc.y * 3.1 + seedK ) ) * ( 1.0 - far * 0.5 );
    float fr = 0.04 + 0.96 * pow( max( 1.0 - Vt.z, 0.0 ), 5.0 );
    emit += across * ( curtain ? 0.9 : 0.6 ) * mix( fr, 1.0, 0.25 ) * m * ( 1.0 - skyK ) * ( 1.0 - isBand );
  }
  if ( fNK > 0.0 ) {
    vec2 nxy = dt.rg * 2.0 - 1.0;
    fNT = normalize( mix( vec3( nxy, sqrt( max( 1.0 - dot( nxy, nxy ), 0.04 ) ) ), vec3( 0.0, 0.0, 1.0 ), m ) );
  }
  // every level carries the lit unit's dark rooms, so the fades keep the facade's energy; a seen room carries its own light
  vec3 eNear = litCol * lit * rowCover * ( 1.0 - inside );
  vec3 eUnit = litColU * litU * ( 1.0 - ${H.darkInLit} ) * rowCover;
  vec3 eFloor = litColA * litF * ( 1.0 - ${H.darkInLit} ) * cover;
  vec3 eMean = litColA * ( isStore > 0.5 ? litP : floorShareMean( litP ) ) * ( 1.0 - ${H.darkInLit} ) * cover;
  emit += mix( mix( mix( eNear, eUnit, far ), eFloor, farUnit ), eMean, farFloor ) * uLit * ( 1.0 - isBand );
}
diffuseColor.rgb = col;
totalEmissiveRadiance += emit;`,Hn=`
if ( fNK > 0.0 ) {
  vec3 fNw = normalize( fTW * fNT.x + vec3( 0.0, 1.0, 0.0 ) * fNT.y + fNW * fNT.z );
  normal = normalize( mix( normal, normalize( ( viewMatrix * vec4( fNw, 0.0 ) ).xyz ), fNK ) );
}`,Un=300,Wn=.25,Gn=1.6,Kn=.15;function qn(e,t,n,r=new Float32Array(e.length/3*2)){let i=e.length/3,a=new Float64Array(i*2),o=new Float64Array(i*2),s=new Float64Array(i);for(let r=0;r+2<t.length;r+=3){let i=t[r],c=t[r+1],l=t[r+2];if(n[i]<Kn||n[c]<Kn||n[l]<Kn)continue;let u=e[i*3],d=e[i*3+2],f=e[c*3]-u,p=e[c*3+2]-d,m=e[l*3]-u,h=e[l*3+2]-d,g=f*h-p*m;if(Math.abs(g)<1e-9)continue;let _=(e,t,n,r)=>{let i=t-e,a=n-e;r[0]=(i*h-a*p)/g,r[1]=(a*f-i*m)/g};_(e[i*3+1],e[c*3+1],e[l*3+1],Jn),_(n[i],n[c],n[l],Yn);let v=Math.abs(g)*.5;for(let e of[i,c,l])a[e*2]=a[e*2]+Jn[0]*v,a[e*2+1]=a[e*2+1]+Jn[1]*v,o[e*2]=o[e*2]+Yn[0]*v,o[e*2+1]=o[e*2+1]+Yn[1]*v,s[e]=s[e]+v}for(let e=0;e<i;e++){r[e*2]=0,r[e*2+1]=0;let t=s[e];if(t<=0)continue;let n=a[e*2]/t,i=a[e*2+1]/t,c=o[e*2]/t,l=o[e*2+1]/t,u=Math.sqrt(c*c+l*l),d=-n,f=-i;if(u>1e-6){c/=u,l/=u;let e=d*c+f*l;d-=e*c,f-=e*l}let p=Math.sqrt(d*d+f*f);if(p<2e-4)continue;let m=Math.min(Gn,Math.max(Wn,p*Un));r[e*2]=d/p*m,r[e*2+1]=f/p*m}return r}var Jn=new Float64Array(2),Yn=new Float64Array(2),Xn=[0,.7],Zn=45,Qn=.9,$n=.35,er={building:0,slab:1,skybridge:2,outskirts:3},tr=`
uniform sampler2D uDetail;
uniform vec2 uPark;
uniform float uDusk;
uniform sampler2D uLampPool;
varying vec3 vGround;
vec3 gsrgb( float r, float g, float b ) { return pow( vec3( r, g, b ), vec3( 2.2 ) ); }`,nr=`
vec2 p = vGround.xz;
vec2 q = p + ${600 .toFixed(1)};
vec2 l = mod( q, 80.0 );
vec2 dc = min( l, 80.0 - l );
float dist = length( vViewPosition );
float aa = max( fwidth( p.x ), fwidth( p.y ) );
float grain = texture2D( uDetail, p * 0.37 ).r;
float macro = texture2D( uDetail, p * 0.011 ).a;
bool stX = dc.x < 8.0;
bool stZ = dc.y < 8.0;
float reach = max( abs( p.x ), abs( p.y ) );
vec3 asphalt = gsrgb( 0.2, 0.205, 0.21 ) * ( 0.78 + 0.35 * grain ) * ( 0.85 + 0.3 * macro );
vec3 paving = gsrgb( 0.58, 0.56, 0.52 ) * ( 0.85 + 0.25 * grain );
vec3 col;
float rough = 0.9;
if ( vGround.y < -0.25 || abs( p.x - ${C.x.toFixed(1)} ) < ${(C.halfWidth+6).toFixed(1)} ) {
  // quays and the embankment down to the water
  col = gsrgb( 0.5, 0.48, 0.44 ) * ( 0.75 + 0.35 * grain ) * ( vGround.y < -0.25 ? 0.7 : 1.0 );
} else if ( reach > 1820.0 ) {
  col = gsrgb( 0.36, 0.42, 0.24 ) * ( 0.75 + 0.4 * macro ) * ( 0.85 + 0.3 * grain );
} else if ( stX || stZ ) {
  col = asphalt;
  rough = 0.8;
  if ( !( stX && stZ ) ) {
    float across = stX ? dc.x : dc.y;
    float along = stX ? p.y : p.x;
    float side = stX ? dc.y : dc.x;
    float paint = 0.0;
    // double yellow centre
    float y1 = 1.0 - smoothstep( 0.07 - aa, 0.07 + aa, abs( across - 0.18 ) );
    // dashed lane lines between the two lanes of each direction
    float dash = step( 0.5, fract( along / 9.0 ) );
    float lane = ( 1.0 - smoothstep( 0.06 - aa, 0.06 + aa, abs( across - 3.9 ) ) ) * dash;
    // zebra crossing just outside the intersection, stripes along the traffic
    float zebraBand = step( 8.6, side ) * step( side, 12.2 );
    float zebra = zebraBand * step( 0.5, fract( ( stX ? p.x : p.y ) / 1.1 ) ) * step( across, 7.2 );
    // stop line before the crossing on the incoming lanes
    float stop = step( 12.6, side ) * step( side, 13.0 ) * step( 0.4, across ) * step( across, 7.2 );
    vec3 white = gsrgb( 0.86, 0.85, 0.8 );
    vec3 yellow = gsrgb( 0.85, 0.66, 0.16 );
    float inCity = step( reach, ${608 .toFixed(1)} );
    col = mix( col, yellow, y1 );
    col = mix( col, white, max( max( lane, zebra ), stop ) * mix( 0.6, 1.0, inCity ) );
    paint = max( max( y1, lane ), max( zebra, stop ) );
    rough = mix( rough, 0.6, paint );
  } else {
    col *= 0.94;
  }
} else if ( dc.x < 11.0 || dc.y < 11.0 ) {
  // sidewalk with a curb and 1.5 m paving joints
  float curb = min( dc.x, dc.y );
  vec2 j = abs( fract( p / 1.5 ) - 0.5 );
  float joint = 1.0 - smoothstep( 0.47, 0.5, max( j.x, j.y ) ) * 0.15;
  col = paving * joint * ( curb < 8.35 ? 1.18 : 1.0 );
} else {
  vec2 bi = floor( q / 80.0 );
  if ( all( equal( bi, uPark ) ) ) {
    col = gsrgb( 0.3, 0.45, 0.2 ) * ( 0.75 + 0.45 * grain ) * ( 0.85 + 0.3 * macro );
    // gravel paths across the park
    float path = min( abs( l.x - 40.0 ), abs( l.y - 40.0 ) );
    col = mix( col, gsrgb( 0.62, 0.56, 0.45 ), 1.0 - smoothstep( 1.4, 1.8, path ) );
    rough = 0.95;
  } else {
    vec2 j = abs( fract( p / 3.0 ) - 0.5 );
    col = paving * 0.92 * ( 1.0 - ( 1.0 - smoothstep( 0.46, 0.5, max( j.x, j.y ) ) ) * -0.1 );
  }
}
diffuseColor.rgb = col;
${dn}`,rr=`
if ( distance( vColor.rgb, pow( vec3( ${(Ze>>16&255)/255}, ${(Ze>>8&255)/255}, ${(Ze&255)/255} ), vec3( 2.2 ) ) ) < 0.05 ) {
  totalEmissiveRadiance += vec3( 1.0, 0.82, 0.55 ) * ( 0.15 + 2.5 * uDusk );
}`;function ir(e,t){let n=e.onBeforeCompile;e.onBeforeCompile=(r,i)=>{n.call(e,r,i),r.uniforms.uLampDusk=t,r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vLampPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLampPos = position;`),r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vLampPos;
uniform float uLampDusk;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  float head = step( vLampPos.x, -0.45 ) * step( 6.9, vLampPos.y ) * step( vLampPos.y, 7.12 );
  totalEmissiveRadiance += vec3( 1.0, 0.82, 0.55 ) * head * ( 0.15 + 2.5 * uLampDusk );
}`)},e.customProgramCacheKey=()=>`glb-street-lamp`,e.needsUpdate=!0}var ar=`
if ( vColor.r > 0.98 && vColor.g > 0.98 && vColor.b > 0.98 ) {
  float c = vTint;
  vec3 paint = vec3( floor( c / 65536.0 ), mod( floor( c / 256.0 ), 256.0 ), mod( c, 256.0 ) ) / 255.0;
  diffuseColor.rgb = pow( paint, vec3( 2.2 ) );
}`;function X(e,t){e.isMeshStandardMaterial&&(e.envMapIntensity=t)}function or(e,t){let n=0;for(let r of e)r.id===t&&n++;return Math.max(48,n)}var sr=new Set([`B3`,`B10`,`B11`,`B12`,`B15`]),cr=new Set([`B15`]),lr={};function ur(e,t){let n=lr[e];return n?$t(t,n):Kt.has(e)?e===`B3`?Yt[t]:Xt[t]:qt[t]}var dr={ultra:90,high:70,medium:40,low:24},fr=[1,.7,.6,.45],pr={ultra:80,high:60,medium:30,low:16},mr={ultra:140,high:110,medium:60,low:40},hr={ultra:32,high:32,medium:20,low:12},gr={ultra:48,high:40,medium:24,low:14},_r={ultra:48,high:40,medium:24,low:16},vr=1.054,yr=8,br=6;function xr(t,n,r=Bt){let i=[];for(let a=0;a<t.length/8;a++){let o=a*8,s=Ht(t[o+7]);if(!s)continue;let c=t[o],l=t[o+2],u=e(t[o+3],t[o+4],t[o+5],r,s);if(!u)continue;let d=Math.floor((c+600)/80),f=Math.floor((l+600)/80),p=c-E(d),m=l-E(f),h=u.yaw===0?m:p;i.push({id:s,outskirts:n,index:a,x:c,y:t[o+1],z:l,yaw:u.yaw+(h<0?Math.PI:0),fit:u})}return i}var Sr=class{group=new A;buildings;props;ground;owned=[];dusk={value:0};lit={value:1};facade=new Nn;batch=new Ye(`city-glb`,{dusk:this.dusk,lit:this.lit});city;outskirts;furniture;buildingSets=new Map;carSets=[];carFits=[];roofSets={};lightSet=null;stopSets={};streetSets={};streetRange=0;get streetPropRange(){return this.streetRange}stopFar=0;setList=[];lightScale=1;roofList=[];shops=[];facadeDetail=!0;roofDetailArgs=null;shopShown={city:new Set,outskirts:new Set};outskirtsShare=1;carRange={range:1/0,x:0,z:0};viewer=new O;filledAt=new O(1/0,0,1/0);paintLinear=new j;constructor(e,t,n,r,i,a,s,c,l=null){if(this.group.name=`city`,l){let n=te()??.2,r=[...xr(e.buildings,!1,n),...xr(t.buildings,!0,n)];for(let e of Vt){let t=S.has(e)?void 0:l.scenes[e];if(t)try{let n=sr.has(e)&&!cr.has(e),i=l.tier===`high`||l.tier===`ultra`,a=new R(t,{id:e,tier:l.tier,bands:ur(e,l.tier),capacity:or(r,e),batch:this.batch,batchFlags:+!!n,batchCast:i,tuneMaterial:(t,n)=>{X(t,.5),sr.has(e)&&!(n&&cr.has(e))&&Ue(t,{dusk:this.dusk,lit:this.lit},n)}});this.group.add(a.group),this.buildingSets.set(e,a)}catch(t){console.warn(`GLB building ${e} unusable; procedural buildings stay`,t)}}this.buildingSets.size>0&&(this.shops=r.filter(e=>this.buildingSets.has(e.id)));for(let e=0;e<Be.length;e++){let t=Be[e],n=l.scenes[t];if(this.carSets.push(null),this.carFits.push(null),n)try{let r=o[e],i=ke(t,r[0],r[1],r[2]);if(!i){Zt(n),console.warn(`GLB parked car ${t} does not fit the parked car size; procedural cars stay`);continue}let a=Math.max(4,Math.round((dr[l.tier]??24)*fr[e])),s=new R(n,{id:t,tier:l.tier,bands:Gt(`car`,l.tier),capacity:a,colours:!0,batch:this.batch,tuneMaterial:e=>X(e,.9)});this.group.add(s.group),this.carSets[e]=s,this.carFits[e]=i}catch(e){console.warn(`GLB parked car ${t} unusable; procedural cars stay`,e)}}for(let e of[`P1`,`P3`,`P4`]){let t=l.scenes[e];if(t)try{let n=new R(t,{id:e,tier:l.tier,bands:Gt(`car`,l.tier),capacity:pr[l.tier]??16,batch:this.batch,tuneMaterial:e=>X(e,.6)});this.group.add(n.group),this.roofSets[e]=n}catch(t){console.warn(`GLB roof prop ${e} unusable; procedural props stay`,t)}}let i=l.scenes.P5;if(i)try{this.lightSet=new R(i,{id:`P5`,tier:l.tier,bands:Gt(`car`,l.tier),capacity:mr[l.tier]??40,batch:this.batch,batchFlags:2,tuneMaterial:e=>{X(e,.6),ir(e,this.dusk)}}),this.lightScale=yr/w.P5.size[1],this.group.add(this.lightSet.group)}catch(e){console.warn(`GLB street light unusable; procedural lights stay`,e)}for(let[e,t]of[[`P7`,hr],[`P8`,_r]]){let n=l.scenes[e];if(n)try{let r=new R(n,{id:e,tier:l.tier,bands:Gt(`stop`,l.tier),capacity:t[l.tier]??12,batch:this.batch,tuneMaterial:e=>X(e,.6)});this.group.add(r.group),this.stopSets[e]=r,this.stopFar=Qt[l.tier].reduce((e,[,t])=>Math.max(e,t),0)+en[l.tier]}catch(t){console.warn(`GLB ${e===`P7`?`bus shelter`:`bench`} unusable; procedural ones stay`,t)}}}for(let e of st){let t=le[e].model,n=l?.scenes[t];if(l&&n)try{let r=new R(n,{id:t,tier:l.tier,bands:Gt(`prop`,l.tier),capacity:gr[l.tier]??16,batch:this.batch,tuneMaterial:e=>X(e,.6)});this.group.add(r.group),this.streetSets[e]=r}catch(e){console.warn(`GLB street prop ${t} unusable; procedural ones stay`,e)}}this.streetRange=Wt[c.tier??l?.tier??`high`].reduce((e,[,t])=>Math.max(e,t),0),this.setList=[...this.buildingSets.values(),...Object.values(this.streetSets),...this.carSets,this.roofSets.P1,this.roofSets.P3,this.roofSets.P4,this.lightSet,this.stopSets.P7,this.stopSets.P8].filter(e=>!!e),this.batch.seal();for(let e of this.batch.objects)this.group.add(e);this.lit.value=+!!c.facadeDetail,this.city=e,this.outskirts=t,this.furniture=n;let u=$e(16777215),d={uGravel:{value:null},uGravelScale:{value:1}};s.watchSet(`gravel`,(e,t)=>{d.uGravel.value=e.albedo,d.uGravelScale.value=1/t});let{material:f,depth:p}=Ve({key:`facade`,roughness:.85,vertexPars:Rn,vertex:zn,fragmentPars:Bn,fragment:Vn,afterRoughness:`roughnessFactor = fRough;`,afterMetalness:`metalnessFactor = fMetal;`,afterLightMaps:`#if defined( RE_IndirectSpecular )
  radiance *= fRefl;
#endif`,afterNormal:Hn,uniforms:{uDusk:this.dusk,uLit:this.lit,uDetail:{value:i},...d,...this.facade.uniforms}},a);this.buildings=new ge(u,f,p,`buildings`),this.owned.push(u,f,p),this.group.add(this.buildings.mesh),this.setOutskirts(c.outskirts),this.setFacadeQuality(s.profile.tier!==`low`);let m=(e,t,n={})=>{let r=Ve({key:t,roughness:.7,...n,uniforms:{uDusk:this.dusk}},a),i=new ge(e,r.material,n.shadow===!1?null:r.depth,t);return this.owned.push(e,r.material,r.depth),this.group.add(i.mesh),i};this.props=[m($e(10132638),`roof-ac`),m(Ee(9075302,6),`roof-tank`),m(Se(),`street-furniture`,{shadow:!1,vertexPars:`attribute float part;
varying float vAntY;`,vertex:Ge,fragmentPars:`uniform float uTime;
varying float vAntY;`,fragment:tt}),m(qe(),`street-lights`,{fragmentPars:`uniform float uDusk;`,fragment:rr}),m(Le(),`cars`,{fragment:ar}),m($e(11840928),`kerbs`,{shadow:!1}),m($e(10657172),`roof-parapets`),m($e(9343382),`roof-vents`)];for(let e of this.props.slice(3))e.begin(),e.end();this.fillRoofProps(),this.setFurniture(1/0,0,0);let h=un(n.lights);this.ground=new P(wr(r),Cr(i,h,e,this.dusk)),this.ground.name=`city-ground`,this.ground.receiveShadow=!0,this.owned.push(this.ground.geometry,this.ground.material,h),this.group.add(this.ground)}setOutskirts(e){this.outskirtsShare=e;let t=this.buildings;t.begin();let n=this.city,r=this.shopShown,i=(e,n,i)=>{let a=i?r.outskirts:r.city;for(let r=0;r<n;r++){if(a.has(r))continue;let n=r*8,o=i?er.outskirts:e[n+7]===1?er.slab:er.building,s=e[n+6]|0;t.push(e[n],e[n+1],e[n+2],0,e[n+3],e[n+4],e[n+5],kn(Dn(o,e[n+4],s),o,s))}};i(n.buildings,n.buildings.length/8,!1);let a=n.skybridges;for(let e=0;e<a.length;e+=6)t.push(a[e],a[e+1]-a[e+4]/2,a[e+2],0,a[e+3],a[e+4],a[e+5],kn(Dn(er.skybridge,a[e+4],e),er.skybridge,e));let o=this.outskirts.buildings.length/8;i(this.outskirts.buildings,Math.round(o*Math.min(1,Math.max(0,e))),!0),t.end()}setFurniture(e,t,n,r=!0){let[,,,i,a,o]=this.props;for(let e of[i,a,o])e.begin();let s=e*e,c=(e,r)=>(e-t)*(e-t)+(r-n)*(r-n)<=s,l=this.furniture;if(this.carRange.range=e,this.carRange.x=t,this.carRange.z=n,this.fillLights(),this.fillCars(),this.refillFurniture(),r)for(let e=0;e<l.kerbs.length;e+=4)c(l.kerbs[e],l.kerbs[e+1])&&o.push(l.kerbs[e],0,l.kerbs[e+1],l.kerbs[e+3],.3,.15,l.kerbs[e+2],0);for(let e of[i,a,o])e.end()}refillFurniture(){let e=this.props[2];e.begin();let t=this.city.roofProps;for(let n of this.roofList){if((t[n]|0)!=2)continue;let r=t[n+1],i=t[n+3];e.push(r,t[n+2],i,0,t[n+4],t[n+5],t[n+6],6+(r*.137+i*.071)%1)}this.fillStops(),this.fillStreetProps(),e.end()}fillStops(){let e=this.furniture,{range:t,x:n,z:r}=this.carRange,i=t*t,a=this.viewer,o=this.props[2],s=[[e.shelters,3,0,this.stopSets.P7],[e.benches,3,1,this.stopSets.P8]];for(let[e,t,c,l]of s){l?.clear();for(let s=0;s<e.length;s+=t){let t=e[s],u=e[s+1];if((t-n)*(t-n)+(u-r)*(u-r)>i)continue;let d=e[s+2];if(l){let e=t-a.x,n=u-a.z,r=Math.sqrt(e*e+a.y*a.y+n*n);if(l.inRange(r)&&l.push(t,0,u,d,1,1,1)||l.isActive&&r>this.stopFar)continue}o.push(t,0,u,d,1,1,1,c)}l?.update(a)}}fillStreetProps(){let e=this.props[2],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n,o=this.hasGlb()?this.viewer:new O(r,0,i),s={hydrant:t.hydrants,bin:t.bins,newsbox:t.newsboxes,booth:t.booths},c=this.streetRange*this.streetRange;for(let t of st){let n=s[t],l=this.streetSets[t],d=u[t];l?.clear();for(let s=0;s<n.length;s+=3){let u=n[s],f=n[s+1];if((u-r)*(u-r)+(f-i)*(f-i)>a)continue;let p=u-o.x,m=f-o.z;if(p*p+o.y*o.y+m*m>c)continue;let h=n[s+2];l&&l.inRange(Math.sqrt(p*p+o.y*o.y+m*m))&&l.push(u,0,f,h,1,1,1)||e.push(u,0,f,h,d[0],d[1],d[2],2+st.indexOf(t))}l?.update(o)}}fillLights(){let e=this.props[3],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n,o=this.lightSet;o?.clear();let s=this.viewer,c=this.lightScale;for(let n=0;n<t.lights.length;n+=3){let l=t.lights[n],u=t.lights[n+1];if((l-r)*(l-r)+(u-i)*(u-i)>a)continue;let d=t.lights[n+2];if(o){let e=l-s.x,t=u-s.z;if(o.inRange(Math.sqrt(e*e+s.y*s.y+t*t))){let e=d+Math.PI/2,t=c*vr;if(o.push(l-t*Math.cos(e),0,u+t*Math.sin(e),e,c,c,c))continue}}e.push(l,0,u,d,1,1,1,0)}o?.update(s)}fillCars(){let e=this.props[4],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n;for(let e of this.carSets)e?.clear();let s=this.viewer,c=this.paintLinear;for(let n=0;n<t.cars.length;n+=6){let l=t.cars[n],u=t.cars[n+2];if((l-r)*(l-r)+(u-i)*(u-i)>a)continue;let d=t.cars[n+5],f=this.carSets[d],p=this.carFits[d];if(f&&p){let e=l-s.x,r=t.cars[n+1]-s.y,i=u-s.z;if(f.inRange(Math.sqrt(e*e+r*r+i*i))&&(c.setHex(t.cars[n+4],wt),f.push(l,t.cars[n+1],u,t.cars[n+3],p.sx,p.sy,p.sz,c.r,c.g,c.b)))continue}let m=o[d];e.push(l,t.cars[n+1],u,t.cars[n+3],m[0]/o[0][0],m[1]/o[0][1],m[2]/o[0][2],t.cars[n+4])}for(let e of this.carSets)e?.update(s);this.filledAt.copy(s)}setViewer(e,t,n){if(!this.hasGlb())return;this.viewer.set(e,t,n);let r=e-this.filledAt.x,i=n-this.filledAt.z;if(!(Number.isFinite(r)&&r*r+i*i<36&&Math.abs(t-this.filledAt.y)<br)){if(this.splitShops(),this.carSets.some(e=>e)){let e=this.props[4];e.begin(),this.fillCars(),e.end()}if(this.lightSet){let e=this.props[3];e.begin(),this.fillLights(),e.end()}(this.stopSets.P7||this.stopSets.P8||Object.keys(this.streetSets).length>0)&&this.refillFurniture(),this.roofHasGlb()&&this.pushRoofProps(),this.filledAt.copy(this.viewer)}}roofHasGlb(){return!!(this.roofSets.P1||this.roofSets.P3||this.roofSets.P4)}allSets(){return this.setList}hasGlb(){return this.setList.length>0}splitShops(){if(this.buildingSets.size===0||this.shops.length===0)return;for(let e of this.buildingSets.values())e.clear();let e=this.viewer,t={city:new Set,outskirts:new Set},n=Math.round(this.outskirts.buildings.length/8*Math.min(1,Math.max(0,this.outskirtsShare)));for(let r of this.shops){let i=this.buildingSets.get(r.id);if(r.outskirts&&r.index>=n)continue;let a=r.x-e.x,o=r.y-e.y,s=r.z-e.z;i.inRange(Math.sqrt(a*a+o*o+s*s))&&i.push(r.x,r.y,r.z,r.yaw,r.fit.sx,r.fit.sy,r.fit.sz)&&(r.outskirts?t.outskirts:t.city).add(r.index)}for(let t of this.buildingSets.values())t.update(e);let r=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),i=!r(t.city,this.shopShown.city)||!r(t.outskirts,this.shopShown.outskirts);this.shopShown.city=t.city,this.shopShown.outskirts=t.outskirts,i&&(this.setOutskirts(this.outskirtsShare),this.roofDetailArgs&&this.setRoofDetail(...this.roofDetailArgs))}glbStats(){let e={instances:0,draws:0,tris:0};for(let t of this.allSets()){let n=t.drawn();e.instances+=n.instances,e.draws+=n.draws,e.tris+=n.tris}return e.draws+=this.batch.draws,e}setModelTier(e){let t=!1;for(let n of this.allSets())t=n.setActiveTier(e)||t;t&&(this.filledAt.set(1/0,0,1/0),this.setViewer(this.viewer.x,this.viewer.y,this.viewer.z))}setModelShadows(e){let t=new Set([...Object.values(this.streetSets),this.stopSets.P7,this.stopSets.P8,this.roofSets.P1,this.roofSets.P3,this.roofSets.P4,this.lightSet]),n=new Set(this.buildingSets.values());for(let r of this.allSets())r.setShadows(e,!0,t.has(r)?`none`:n.has(r)?`tall`:`near`);this.batch.setShadows(e)}fillRoofProps(){this.roofList=Array.from({length:this.city.roofProps.length/7},(e,t)=>t*7),this.pushRoofProps()}pushRoofProps(){let e=[this.props[0],this.props[1]];for(let t of e)t.begin();let t=this.roofSets;for(let e of[`P1`,`P3`,`P4`])t[e]?.clear();let n=this.city.roofProps,r=this.viewer;for(let i of this.roofList){let a=n[i+1],o=n[i+2],s=n[i+3],c=n[i+4],l=n[i+5],u=n[i+6],d=n[i]|0;if(d===2)continue;let f=d===3?1:Math.min(1,Math.max(0,d)),p=d===0?`P1`:d===1?`P3`:d===3?`P4`:null,m=p&&this.facadeDetail?t[p]:void 0;if(m&&p){let e=a-r.x,t=o-r.y,n=s-r.z;if(m.inRange(Math.sqrt(e*e+t*t+n*n))){let e=p===`P1`&&c>u,t=e?ke(p,u,l,c):ke(p,c,l,u);if(t&&m.push(a,o,s,e?Math.PI/2:0,t.sx,t.sy,t.sz))continue}}e[f].push(a,o,s,0,c,l,u,0)}for(let e of[`P1`,`P3`,`P4`])t[e]?.update(r);for(let t of e)t.end();for(let t of[e[0],e[1]])t.mesh.visible=this.facadeDetail&&t.count>0}setRoofDetail(e,t,n,r=t,i=n){let a=this.props[6],o=this.props[7];if(this.roofDetailArgs=[e,t,n,r,i],a.begin(),o.begin(),e){let e=this.city.buildings,s=22500;for(let c=0;c<e.length;c+=8){let l=e[c],u=e[c+2],d=e[c+3],f=e[c+4],p=e[c+5];if(f>Zn||e[c+7]===1||this.shopShown.city.has(c/8))continue;let m=Math.max(0,Math.abs(l-t)-d/2),h=Math.max(0,Math.abs(u-n)-p/2),g=Math.max(0,Math.abs(l-r)-d/2),_=Math.max(0,Math.abs(u-i)-p/2);if(m*m+h*h>s&&g*g+_*_>s)continue;let v=e[c+1]+f,y=$n;a.push(l,v,u-p/2+y/2,0,d,Qn,y,0),a.push(l,v,u+p/2-y/2,0,d,Qn,y,0),a.push(l-d/2+y/2,v,u,0,y,Qn,p-2*y,0),a.push(l+d/2-y/2,v,u,0,y,Qn,p-2*y,0);let b=(e[c+6]|0)>>>0,x=()=>(b=Math.imul(b^b>>>15,739982445)+1831565813>>>0,b/4294967296),S=2+Math.floor(x()*3);for(let e=0;e<S;e++){let t=e===0&&d>10&&p>10,n=t?2.4:.9+x()*.8,r=t?3.6:.9+x()*.8,i=l+(x()-.5)*Math.max(0,d-2*y-n-1.5),a=u+(x()-.5)*Math.max(0,p-2*y-r-1.5);o.push(i,v,a,x()<.5?0:Math.PI/2,n,t?.35:.6+x()*.7,r,0)}}}a.end(),o.end()}setFacadeDetail(e){this.lit.value=+!!e,this.facadeDetail=e;let[t,n]=this.props;t.mesh.visible=e&&t.count>0,n.mesh.visible=e&&n.count>0,this.roofHasGlb()&&this.pushRoofProps()}setFacadeQuality(e){this.facade.setQuality(e)}get facadesReady(){return this.facade.ready}setDusk(e){this.dusk.value=e}get trees(){let e=this.city.trees,t=this.furniture.trees,n=new Float32Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}dispose(){this.facade.dispose();for(let e of this.allSets())e.dispose();this.batch.dispose(),this.buildings.dispose();for(let e of this.props)e.dispose();for(let e of this.owned)e.dispose();this.group.removeFromParent(),this.group.clear()}};function Cr(e,t,n,r){let i=new Nt(-99,-99);for(let e=0;e<15;e++)for(let t=0;t<15;t++)n.blockClass(t,e)===`park`&&(i=new Nt(t,e));let a=new gt({color:16777215,roughness:.9,metalness:0,envMapIntensity:.4});return a.name=`city-ground`,a.onBeforeCompile=n=>{n.uniforms.uDetail={value:e},n.uniforms.uPark={value:i},n.uniforms.uDusk=r,n.uniforms.uLampPool={value:t},n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vGround;`).replace(`#include <project_vertex>`,`#include <project_vertex>
  vGround = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>\n${tr}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${nr}`)},a.customProgramCacheKey=()=>`city-ground-v2`,a}function wr(e,t=2600){let n=[],r=C,i=r.x-r.halfWidth-8,a=r.x+r.halfWidth+8;for(let e=-t;e<i;e+=100)n.push(e);for(let e=i;e<=a;e+=2)n.push(e);for(let e=Math.ceil(a/100)*100;e<=t;e+=100)n.push(e);let o=[];for(let e=-t;e<=t;e+=100)o.push(e);let s=n.length,c=o.length,l=new Float32Array(s*c*3),u=new Float32Array(s*c*3);for(let t=0;t<c;t++)for(let r=0;r<s;r++){let i=t*s+r,a=n[r],c=e.heightAt(a,0);l[i*3]=a,l[i*3+1]=c,l[i*3+2]=o[t];let d=.5,f=(e.heightAt(a+d,0)-e.heightAt(a-d,0))/(2*d),p=Math.sqrt(f*f+1);u[i*3]=-f/p,u[i*3+1]=1/p}let d=[];for(let e=0;e<c-1;e++)for(let t=0;t<s-1;t++){let n=e*s+t,r=n+1,i=n+s,a=i+1;d.push(n,i,r,r,i,a)}let f=new N;return f.setAttribute(`position`,new F(l,3)),f.setAttribute(`normal`,new F(u,3)),f.setIndex(d),f.computeBoundingSphere(),f}function Tr(e=2600){let t=C,n=new Ct(t.halfWidth*2,e*2,1,8);n.rotateX(-Math.PI/2),n.translate(t.x,t.level,0);let r=n.getAttribute(`position`).count,i=new Float32Array(r*2);for(let e=0;e<r;e++)i[e*2]=Xn[0],i[e*2+1]=Xn[1];return n.setAttribute(`aFlow`,new F(i,2)),n}var Er=1;function Dr(e,t,n=Ot){let r=new At(new Uint8Array(t*12),12).setUsage(n);return e.setAttribute(`aRock`,new M(r,1,0,!0)),e.setAttribute(`aWet`,new M(r,1,1,!0)),e.setAttribute(`aField`,new M(r,2,2,!0)),e.setAttribute(`aBase`,new M(r,4,4,!0)),e.setAttribute(`aCanopy`,new M(r,2,8,!0)),r}function Or(e,t,n,r){let i=e.array,a=r*12;t.surface.length>=a?i.set(t.surface.subarray(0,a),n*12):i.fill(0,n*12,n*12+a)}function kr(e){let t=b[e];return(t+1)*(t+1)+4*t}var Ar=class{road;mesh;capV=0;capI=0;constructor(e,t,n){this.road=n,this.mesh=new P(new N,e),this.mesh.name=t,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(1024,2048),this.mesh.visible=!1}rebuild(e,t,n){let r=0,i=0;for(let t of e.values()){if(!n(t))continue;let e=this.road?t.data.roads:t.data.water;r+=e.positions.length/3,i+=e.indices.length}(r>this.capV||i>this.capI)&&this.grow(Math.max(r,this.capV*2,1024),Math.max(i,this.capI*2,2048));let a=this.mesh.geometry,o=a.getAttribute(`position`),s=a.getIndex(),c=o.array,l=s.array,u=this.road?a.getAttribute(`aRoad`).array:null,d=this.road?null:a.getAttribute(`aShore`).array,f=this.road?null:a.getAttribute(`aFlow`).array,p=0,m=0;for(let r of e.values()){if(!n(r))continue;let e=this.road?r.data.roads:r.data.water,i=r.data.originX-t.x,a=r.data.originZ-t.z,o=e.positions,s=o.length/3;for(let e=0;e<s;e++)c[(p+e)*3]=o[e*3]+i,c[(p+e)*3+1]=o[e*3+1],c[(p+e)*3+2]=o[e*3+2]+a;if(u){let t=e.colors;for(let e=0;e<s;e++){let n=e%3-1,r=e-e%3+1;u[(p+e)*2]=n,u[(p+e)*2+1]=+(t[r*3]>150)}}if(d)for(let e=0;e<s;e++)d[p+e]=Ir(r.data,o[e*3],o[e*3+1],o[e*3+2]);f&&f.set(Nr(r.data),p*2);let h=e.indices;for(let e=0;e<h.length;e++)l[m+e]=h[e]+p;p+=s,m+=h.length}o.needsUpdate=!0,s.needsUpdate=!0,u&&(a.getAttribute(`aRoad`).needsUpdate=!0),d&&(a.getAttribute(`aShore`).needsUpdate=!0),f&&(a.getAttribute(`aFlow`).needsUpdate=!0),a.setDrawRange(0,m),this.mesh.visible=m>0}grow(e,t){this.mesh.geometry.dispose();let n=new N;n.setAttribute(`position`,new F(new Float32Array(e*3),3).setUsage(k)),n.setAttribute(`normal`,jr(e)),this.road?n.setAttribute(`aRoad`,new F(new Float32Array(e*2),2).setUsage(k)):(n.setAttribute(`aShore`,new F(new Float32Array(e),1).setUsage(k)),n.setAttribute(`aFlow`,new F(new Float32Array(e*2),2).setUsage(k))),n.setIndex(new F(new Uint32Array(t),1).setUsage(k)),this.mesh.geometry=n,this.capV=e,this.capI=t}dispose(){this.mesh.geometry.dispose()}};function jr(e){let t=new Float32Array(e*3);for(let n=0;n<e;n++)t[n*3+1]=1;return new F(t,3)}var Mr=new WeakMap;function Nr(e){let t=Mr.get(e);if(t)return t;let n=e.water.positions,r=n.length/3,i=new Float32Array(r);for(let t=0;t<r;t++)i[t]=Pr(e,n[t*3],n[t*3+1],n[t*3+2]);return t=qn(n,e.water.indices,i),Mr.set(e,t),t}function Pr(e,t,n,r){let i=e.gridSize,a=128/(i-1),o=Math.min(i-1,Math.max(0,Math.round(t/a))),s=Math.min(i-1,Math.max(0,Math.round(r/a)));return n-e.positions[(s*i+o)*3+1]}var Fr=1.1;function Ir(e,t,n,r){let i=e.gridSize,a=128/(i-1),o=Math.min(i-1,Math.max(0,Math.round(t/a))),s=Math.min(i-1,Math.max(0,Math.round(r/a))),c=n-e.positions[(s*i+o)*3+1];return c<=0?1:c>=Fr?0:1-c/Fr}var Lr=class{mesh;cap=0;surface=null;nv=kr(2);idx=ft(2);constructor(e){this.mesh=new P(new N,e),this.mesh.name=`terrain-lod2`,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(32),this.mesh.visible=!1}rebuild(e,t){let n=0;for(let t of e.values())t.lod===2&&n++;n>this.cap&&this.grow(Math.max(n,this.cap*2));let r=this.mesh.geometry,i=r.getAttribute(`position`).array,a=r.getAttribute(`normal`).array,o=r.getAttribute(`color`).array,s=r.getIndex().array,c=this.nv,l=this.idx.length,u=0;for(let n of e.values()){if(n.lod!==2)continue;let e=n.data,r=e.originX-t.x,d=e.originZ-t.z,f=u*c;for(let t=0;t<c;t++)i[(f+t)*3]=e.positions[t*3]+r,i[(f+t)*3+1]=e.positions[t*3+1],i[(f+t)*3+2]=e.positions[t*3+2]+d;a.set(e.normals,f*3),o.set(e.colors,f*3),Or(this.surface,e,f,c);for(let e=0;e<l;e++)s[u*l+e]=this.idx[e]+f;u++}for(let e of[`position`,`normal`,`color`])r.getAttribute(e).needsUpdate=!0;return this.surface.needsUpdate=!0,r.getIndex().needsUpdate=!0,r.setDrawRange(0,u*l),this.mesh.visible=u>0,u}grow(e){this.mesh.geometry.dispose();let t=e*this.nv,n=new N;n.setAttribute(`position`,new F(new Float32Array(t*3),3).setUsage(k)),n.setAttribute(`normal`,new F(new Int8Array(t*3),3,!0).setUsage(k)),n.setAttribute(`color`,new F(new Uint8Array(t*3),3,!0).setUsage(k)),this.surface=Dr(n,t,k),n.setIndex(new F(new Uint32Array(e*this.idx.length),1).setUsage(k)),this.mesh.geometry=n,this.cap=e}dispose(){this.mesh.geometry.dispose()}},Rr=class{stream;origin;mats;group=new A;shownMap=new Map;free=[[],[],[]];indices;roads;water;lod2;pending=[];originVersion=-1;batchedVersion=-1;uploads;version=0;created=0;uploadsLastFrame=0;batched=0;constructor(e,t,n,r={}){this.stream=e,this.origin=t,this.mats=n,this.group.name=`terrain`,this.uploads=r.uploads??2,this.indices=[0,1,2].map(e=>new F(ft(e),1)),this.roads=new Ar(n.road,`roads`,!0),this.water=new Ar(n.water,`water`,!1),this.lod2=new Lr(n.terrain),this.group.add(this.lod2.mesh,this.roads.mesh,this.water.mesh)}setUploads(e){this.uploads=Math.max(1,e)}get shown(){return this.shownMap}get pooled(){return this.free[0].length+this.free[1].length+this.free[2].length}update(e,t){if(this.stream.update(e,t),this.originVersion!==this.origin.version){this.originVersion=this.origin.version,this.group.position.set(this.origin.x,0,this.origin.z);for(let e of this.shownMap.values())e.mesh?.position.set(e.data.originX-this.origin.x,0,e.data.originZ-this.origin.z);this.batchedVersion=-1}let n=this.stream.cells;for(let e of this.shownMap.values()){let t=n.get(e.key);(!t||!t.data)&&this.release(e)}let r=this.pending;r.length=0;for(let e of n.values()){if(!e.data)continue;let t=this.shownMap.get(e.key);t&&(t.dist=e.dist),(!t||t.data!==e.data)&&r.push(e)}r.sort((e,t)=>e.dist-t.dist);let i=Math.floor(e/128),a=Math.floor(t/128),o=this.uploads,s=0;for(let e of r){let t=!this.shownMap.has(e.key)&&Math.max(Math.abs(e.cx-i),Math.abs(e.cz-a))<=Er;!t&&o<=0||(t||o--,this.upload(e),s++)}r.length=0,this.uploadsLastFrame=s,this.batchedVersion!==this.version&&(this.batchedVersion=this.version,this.batched=this.lod2.rebuild(this.shownMap,this.origin),this.roads.rebuild(this.shownMap,this.origin,e=>e.lod<=1),this.water.rebuild(this.shownMap,this.origin,()=>!0))}chunkAt(e,t){return this.shownMap.get(at(e,t))}upload(e){let t=e.data,n=this.shownMap.get(e.key);if(n&&n.lod!==t.lod&&(this.release(n),n=void 0),!n){let r=null;t.lod<2&&(r=this.acquire(t.lod).mesh,this.group.add(r)),n={key:e.key,cx:e.cx,cz:e.cz,lod:t.lod,data:t,mesh:r,dist:e.dist},this.shownMap.set(e.key,n)}n.data=t,n.mesh&&(Br(n.mesh.geometry,t),n.mesh.position.set(t.originX-this.origin.x,0,t.originZ-this.origin.z),n.mesh.name=`chunk ${e.cx},${e.cz} lod${t.lod}`),this.version++}acquire(e){let t=this.free[e].pop();if(t)return t.mesh.visible=!0,t;let n=kr(e),r=new N;r.setAttribute(`position`,new F(new Float32Array(n*3),3)),r.setAttribute(`normal`,new F(new Int8Array(n*3),3,!0)),r.setAttribute(`color`,new F(new Uint8Array(n*3),3,!0)),Dr(r,n),r.setIndex(this.indices[e]),r.boundingBox=new Tt,r.boundingSphere=new Ft;let i=new P(r,this.mats.terrain);return i.receiveShadow=!0,i.matrixAutoUpdate=!0,this.created++,{lod:e,mesh:i}}release(e){this.shownMap.delete(e.key),e.mesh&&(e.mesh.removeFromParent(),this.pooled<128?this.free[e.lod].push({lod:e.lod,mesh:e.mesh}):zr(e.mesh.geometry)),this.version++}dispose(){for(let e of this.shownMap.values())e.mesh&&zr(e.mesh.geometry);this.lod2.dispose();for(let e of this.free)for(let t of e)zr(t.mesh.geometry);this.shownMap.clear();for(let e of this.free)e.length=0;this.roads.dispose(),this.water.dispose(),this.group.removeFromParent(),this.group.clear()}};function zr(e){e.dispose()}function Br(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=e.getAttribute(`color`);n.array.set(t.positions),r.array.set(t.normals),i.array.set(t.colors),n.needsUpdate=!0,r.needsUpdate=!0,i.needsUpdate=!0;let a=e.getAttribute(`aRock`);a&&(Or(a.data,t,0,n.count),a.data.needsUpdate=!0);let o=e.boundingBox??=new Tt;o.min.set(0,t.minY,0),o.max.set(128,t.maxY,128);let s=e.boundingSphere??=new Ft;o.getBoundingSphere(s)}var Vr=10;function Hr(e,t,n){if(n.x>n.z)return 0;let r=Math.max(n.x-e,e-n.z,n.y-t,t-n.w,0),i=Math.min(1,r/384);return i*i*(3-2*i)}var Ur=new jt(1/0,1/0,-1/0,-1/0),Wr=1e3,Gr=300,Kr=class{quads;mesh;cap=0;surface=null;verts;step;constructor(e,t,n){this.quads=n,this.verts=(n+1)*(n+1),this.step=b[2]/n,this.mesh=new P(new N,e),this.mesh.name=t,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(64),this.mesh.visible=!1}fill(e,t,n=Ur){e.length>this.cap&&this.grow(Math.max(e.length,this.cap*2));let r=this.mesh.geometry,i=r.getAttribute(`position`).array,a=r.getAttribute(`normal`).array,o=r.getAttribute(`color`).array,s=this.surface.array,c=b[2]+1,l=this.quads,u=0;for(let r of e){let e=r.originX-t.x,d=r.originZ-t.z,f=r.surface;for(let t=0;t<=l;t++)for(let p=0;p<=l;p++){let l=t*this.step*c+p*this.step;i[u*3]=r.positions[l*3]+e,i[u*3+1]=r.positions[l*3+1],i[u*3+2]=r.positions[l*3+2]+d;for(let e=0;e<3;e++)a[u*3+e]=r.normals[l*3+e],o[u*3+e]=r.colors[l*3+e];for(let e=0;e<12;e++)s[u*12+e]=f.length>0?f[l*12+e]:0;s[u*12+Vr]=Math.round(Hr(r.positions[l*3]+r.originX,r.positions[l*3+2]+r.originZ,n)*255),u++}}for(let e of[`position`,`normal`,`color`])r.getAttribute(e).needsUpdate=!0;this.surface.needsUpdate=!0,r.setDrawRange(0,e.length*l*l*6),this.mesh.visible=e.length>0}grow(e){this.mesh.geometry.dispose();let t=e*this.verts,n=new N;n.setAttribute(`position`,new F(new Float32Array(t*3),3).setUsage(k)),n.setAttribute(`normal`,new F(new Int8Array(t*3),3,!0).setUsage(k)),n.setAttribute(`color`,new F(new Uint8Array(t*3),3,!0).setUsage(k)),this.surface=Dr(n,t,k),n.deleteAttribute(`aField`),n.deleteAttribute(`aBase`),n.setAttribute(`aFar`,new M(this.surface,1,Vr,!0));let r=this.quads,i=r+1,a=new Uint32Array(e*r*r*6),o=0;for(let t=0;t<e;t++){let e=t*this.verts;for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=e+t*i+n;a[o++]=r,a[o++]=r+i,a[o++]=r+1,a[o++]=r+1,a[o++]=r+i,a[o++]=r+i+1}}n.setIndex(new F(a,1)),this.mesh.geometry=n,this.cap=e}dispose(){this.mesh.geometry.dispose()}},qr=class{origin;group=new A;stream;fine;coarse;water;capWaterV=0;capWaterI=0;builtFar=-1;builtNear=-1;builtOrigin=-1;lastBuild=-1/0;fineList=[];coarseList=[];nearRect=new jt;count=0;constructor(e,t,n,r,i,a,o){this.origin=n,this.group.name=`far-terrain`,this.stream=new be({spec:e,builder:t,grid:null,ownsBuilder:!1,config:{radius:a,lod0:-1,lod1:-1,maxInFlight:2,objects:!1,priorityBase:Wr},limits:o===void 0?void 0:Ne(o)}),this.fine=new Kr(r,`far-ground`,8),this.coarse=new Kr(r,`far-ground-coarse`,4),this.water=new P(new N,i),this.water.name=`far-water`,this.water.frustumCulled=!1,this.growWater(1024,2048),this.water.visible=!1,this.group.add(this.fine.mesh,this.coarse.mesh,this.water)}setRadius(e){this.stream.configure({radius:e})}update(e,t,n,r){this.stream.update(e,t);let i=this.builtOrigin!==this.origin.version,a=this.builtFar!==this.stream.version,o=this.builtNear!==n.version;(i||a||o)&&(!i&&r-this.lastBuild<Gr||(this.lastBuild=r,this.builtFar=this.stream.version,this.builtNear=n.version,this.builtOrigin=this.origin.version,this.rebuild(n)))}rebuild(e){let t=this.fineList,n=this.coarseList;t.length=0,n.length=0;let r=0,i=0;for(let a of this.stream.cells.values())a.data&&!e.chunkAt(a.cx,a.cz)&&(a.dist<=10.5?(t.push(a.data),r+=a.data.water.positions.length/3,i+=a.data.water.indices.length):n.push(a.data));this.count=t.length+n.length,this.group.position.set(this.origin.x,0,this.origin.z);let a=this.nearRect.set(1/0,1/0,-1/0,-1/0);for(let t of e.shown.values())a.x=Math.min(a.x,t.cx*128),a.y=Math.min(a.y,t.cz*128),a.z=Math.max(a.z,(t.cx+1)*128),a.w=Math.max(a.w,(t.cz+1)*128);this.fine.fill(t,this.origin,a),this.coarse.fill(n,this.origin,a),(r>this.capWaterV||i>this.capWaterI)&&this.growWater(Math.max(r,this.capWaterV*2),Math.max(i,this.capWaterI*2));let o=this.water.geometry,s=o.getAttribute(`position`).array,c=o.getIndex().array,l=0,u=0;for(let e of t){let t=e.water,n=t.positions.length/3;if(n===0)continue;let r=e.originX-this.origin.x,i=e.originZ-this.origin.z;for(let e=0;e<n;e++)s[(l+e)*3]=t.positions[e*3]+r,s[(l+e)*3+1]=t.positions[e*3+1],s[(l+e)*3+2]=t.positions[e*3+2]+i;for(let e=0;e<t.indices.length;e++)c[u+e]=t.indices[e]+l;l+=n,u+=t.indices.length}o.getAttribute(`position`).needsUpdate=!0,o.getIndex().needsUpdate=!0,o.setDrawRange(0,u),this.water.visible=u>0,t.length=0,n.length=0}growWater(e,t){this.water.geometry.dispose();let n=new N;n.setAttribute(`position`,new F(new Float32Array(e*3),3).setUsage(k)),n.setAttribute(`normal`,jr(e)),n.setIndex(new F(new Uint32Array(t),1).setUsage(k)),this.water.geometry=n,this.capWaterV=e,this.capWaterI=t}dispose(){this.stream.dispose(),this.fine.dispose(),this.coarse.dispose(),this.water.geometry.dispose(),this.group.removeFromParent(),this.group.clear()}};function Jr(e){return(e+1)*128*Math.SQRT2}var Z=23;function Yr(e=256){let t=y(e,8,4,911,.55),n=y(e,16,3,913,.6),r=new Uint8Array(e*e*4),i=2.2;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=a*e+o,c=(t[a*e+(o+1)%e]-t[a*e+(o+e-1)%e])*i,l=(t[(a+1)%e*e+o]-t[(a+e-1)%e*e+o])*i,u=Math.sqrt(c*c+1+l*l);r[s*4]=Math.round(-c/u*127.5+127.5),r[s*4+1]=Math.round(-l/u*127.5+127.5),r[s*4+2]=Math.round(n[s]*255),r[s*4+3]=255}let a=new Mt(r,e,e,Et);return a.wrapS=a.wrapT=bt,a.magFilter=Lt,a.minFilter=zt,a.generateMipmaps=!0,a.colorSpace=``,a.needsUpdate=!0,a}var Xr=`
attribute float aShore;
attribute vec2 aFlow;
varying vec3 vWaterPos;
varying float vShore;
varying vec2 vFlow;`,Zr=`
uniform sampler2D uRipple;
uniform float uTime;
uniform float uDetailOn;
uniform vec3 uSkyTop;
uniform vec3 uSkyHorizon;
uniform vec3 uFoam;
varying vec3 vWaterPos;
varying float vShore;
varying vec2 vFlow;
float waterFoam = 0.0;
// flow-map advection (docs/12): two copies of a sample, each dragged downstream for one period and blended
// in a triangle wave, so the pattern runs along the river without ever stretching
const float FLOW_RATE = 0.11;
vec2 flowOffset( float phase ) { return vFlow * ( phase / FLOW_RATE ); }`,Qr=`
{
  vec2 p = vWaterPos.xz;
  float dist = length( vViewPosition );
  vec2 n2;
  float flowing = step( 0.01, dot( vFlow, vFlow ) );
  if ( uDetailOn > 0.5 && flowing > 0.5 ) {
    // a river: the ripple pattern runs downstream (two phases, blended), a little rougher where it runs fast
    float ph0 = fract( uTime * FLOW_RATE );
    float ph1 = fract( uTime * FLOW_RATE + 0.5 );
    float w0 = 1.0 - abs( 2.0 * ph0 - 1.0 );
    vec2 q0 = p - flowOffset( ph0 );
    vec2 q1 = p - flowOffset( ph1 ) + vec2( 7.3, 3.1 );
    vec2 a = mix( texture2D( uRipple, q1 * ${(1/Z).toFixed(5)} ).rg, texture2D( uRipple, q0 * ${(1/Z).toFixed(5)} ).rg, w0 ) * 2.0 - 1.0;
    vec2 b = mix( texture2D( uRipple, q1 * ${(1/(Z*.41)).toFixed(5)} ).rg, texture2D( uRipple, q0 * ${(1/(Z*.41)).toFixed(5)} ).rg, w0 ) * 2.0 - 1.0;
    n2 = ( a + b ) * ( 0.32 + 0.12 * clamp( length( vFlow ), 0.0, 1.5 ) );
  } else if ( uDetailOn > 0.5 ) {
    // a lake: gentle ripples drifting with the breeze
    vec2 a = texture2D( uRipple, p * ${(1/Z).toFixed(5)} + vec2( uTime * 0.011, uTime * 0.006 ) ).rg * 2.0 - 1.0;
    vec2 b = texture2D( uRipple, p * ${(1/(Z*.41)).toFixed(5)} - vec2( uTime * 0.008, -uTime * 0.014 ) ).rg * 2.0 - 1.0;
    n2 = ( a + b ) * 0.32;
  } else {
    // one analytic ripple (Quest), carried downstream on a river
    vec2 pf = p - vFlow * uTime;
    n2 = 0.05 * vec2( sin( pf.x * 0.35 + uTime * 1.3 ) + sin( pf.y * 0.21 - uTime * 0.7 ), cos( pf.y * 0.29 - uTime * 1.1 ) );
  }
  // gentle near the camera, flat into the distance (ripples finer than a pixel only alias)
  n2 *= 1.0 - smoothstep( 40.0, 320.0, dist );
  vec3 wn = normalize( vec3( n2.x, 1.0, n2.y ) );
  normal = normalize( ( viewMatrix * vec4( wn, 0.0 ) ).xyz );
}`,$r=`
{
  float shore = clamp( vShore, 0.0, 1.0 );
  if ( shore > 0.002 && uDetailOn > 0.5 ) {
    // foam drifts with the current (rivers) or the breeze (lakes)
    float ph0 = fract( uTime * FLOW_RATE );
    float ph1 = fract( uTime * FLOW_RATE + 0.5 );
    float w0 = 1.0 - abs( 2.0 * ph0 - 1.0 );
    vec2 q0 = vWaterPos.xz - flowOffset( ph0 );
    vec2 q1 = vWaterPos.xz - flowOffset( ph1 ) + vec2( 5.1, 2.7 );
    float n = mix( texture2D( uRipple, q1 * 0.11 + vec2( uTime * 0.02, -uTime * 0.013 ) ).b, texture2D( uRipple, q0 * 0.11 + vec2( uTime * 0.02, -uTime * 0.013 ) ).b, w0 );
    float n2 = mix( texture2D( uRipple, q1 * 0.37 - vec2( uTime * 0.03, uTime * 0.021 ) ).b, texture2D( uRipple, q0 * 0.37 - vec2( uTime * 0.03, uTime * 0.021 ) ).b, w0 );
    // a lacy band: dense at the bank, breaking into streaks further out
    waterFoam = smoothstep( 0.62, 0.9, shore * 0.85 + n * 0.45 + n2 * 0.25 - 0.18 ) * shore;
  } else if ( shore > 0.002 ) {
    waterFoam = smoothstep( 0.7, 1.0, shore ) * 0.6;
  }
  diffuseColor.rgb = mix( diffuseColor.rgb, uFoam, waterFoam );
}`,ei=`
#if defined( RE_IndirectSpecular ) && !defined( USE_ENVMAP )
{
  vec3 rv = reflect( -normalize( vViewPosition ), normal );
  rv = inverseTransformDirection( rv, viewMatrix );
  radiance += mix( uSkyHorizon, uSkyTop, pow( clamp( rv.y, 0.0, 1.0 ), 0.5 ) );
}
#endif
#if defined( RE_IndirectSpecular )
radiance *= 1.0 - waterFoam;
#endif`;function ti(e,t,n){let r=Math.max(.4,e.sunIntensity/5)*1.1;t.set(e.top).multiplyScalar(r),n.set(e.horizon).multiplyScalar(r)}function ni(e,t,n){let r=new gt({color:728351,roughness:.035,metalness:0,envMapIntensity:1});r.name=`water`;let i={uRipple:{value:t},uTime:{value:0},uDetailOn:{value:+!!n},uSkyTop:{value:new j},uSkyHorizon:{value:new j},uFoam:{value:new j(14213858)}};return ti(e,i.uSkyTop.value,i.uSkyHorizon.value),r.userData.water=i,r.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Xr}`).replace(`#include <project_vertex>`,`#include <project_vertex>
  vWaterPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
  vShore = aShore;
  vFlow = aFlow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Zr}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${$r}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = mix( roughnessFactor, 0.85, waterFoam );`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${Qr}`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>\n${ei}`)},r.customProgramCacheKey=()=>`water-v3`,r}var ri=e=>e.userData.water;function ii(e,t){ri(e).uTime.value=t}function ai(e,t){ri(e).uDetailOn.value=+!!t}function oi(e,t){let n=ri(e);ti(t,n.uSkyTop.value,n.uSkyHorizon.value)}var si=class{x=0;z=0;version=0;follow(e,t){let n=e-this.x,r=t-this.z;return n*n+r*r<=1048576?!1:(this.set(Math.floor(e/128)*128,Math.floor(t/128)*128),!0)}set(e,t){(e!==this.x||t!==this.z)&&(this.x=e,this.z=t,this.version++)}},ci=1.45;function li(e,t,n,r){let i=t.pts,a=i.length/2;if(a<2)return null;let o=[],s=[],c=[];for(let e=0;e<a;e++){let l=r?e:a-1-e,u=Math.max(0,l-1),d=Math.min(a-1,l+1),f=i[d*2]-i[u*2],p=i[d*2+1]-i[u*2+1];r||(f=-f,p=-p);let m=Math.sqrt(f*f+p*p)||1,h=i[l*2]+-p/m*ci,g=i[l*2+1]+f/m*ci,_=n.field.heightAt(h,g),v=Math.min(a-2,l);if(t.bridged[v]||l>0&&t.bridged[l-1]){let e=1/0;for(let n of t.bridges){let t=(n.x-h)*(n.x-h)+(n.z-g)*(n.z-g);t<e&&(e=t,_=n.y)}}o.push(h),s.push(g),c.push(_+ae)}return we(e,0,o,s,c,{limit:16})}function ui(e,t,n,r){let i=e.roads.polylinesNear(t-r,n-r,t+r,n+r,3),a=[];for(let t of i)for(let n of[!0,!1]){let r=li(a.length,t,e,n);r&&r.length>60&&a.push(r)}return{edges:a,spawnable:a.map(e=>e.id),nodes:[]}}var di=`life:flags`,fi=class{group=new A;puffs=new v;fans;flags;beacons;city;grid;at=new O(1/0,0,1/0);budget=null;flagSpots=[];steam=[];windYaw=0;constructor(e,t,n){this.group.name=`city-life`,this.city=e,this.grid=n,this.fans=new ie(Xe(),{key:`ac-fans`,pre:r,roughness:.6},t,!1),this.flags=new ie(ve(),{key:`flags`,pre:m,vertexPars:me,fragmentPars:ue,fragment:fe,roughness:.8,side:2},t,!1),this.beacons=new ie(_(),{key:`beacons`,fragment:dt,roughness:.4},t,!1),this.group.add(this.fans.mesh,this.flags.mesh,this.beacons.mesh,this.puffs.layer.mesh);let i=e.buildings,a=[];for(let t=0;t<i.length;t+=8){let n=i[t],r=i[t+1],o=i[t+2],s=i[t+3],c=i[t+4],l=i[t+5];if(i[t+7]===1||c>70||s<10)continue;let u=Ut(e.seed,Math.floor(n),Math.floor(o),61862);if(L(u)>.11)continue;let d=n-s/2+1.2,f=o-l/2+1.2,p={kind:`cylinder`,center:[d,r+c+3.5,f],radius:1.9,halfHeight:3.5};e.rings.some(e=>g(e.position[0],e.position[1],e.position[2],p)<e.radius+3)||(this.flagSpots.push(d,r+c,f,Math.floor(L(I(u,3))*4)),a.push({id:`flag:${a.length}`,shape:{kind:`cylinder`,center:[d,r+c+3.5,f],radius:.1,halfHeight:3.5}}))}this.grid?.insertOwned(di,a);let o=this.beacons.layer;o.begin();for(let e=0;e<i.length;e+=8){let t=i[e],n=i[e+1],r=i[e+2],a=i[e+3],s=i[e+4],c=i[e+5];if(!(s<90))for(let[e,i]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.push(t+e*(a/2-.4),n+s,r+i*(c/2-.4),0,1,1,1,0)}o.end();let s=e.roofProps;for(let t=0;t<s.length;t+=7){if(s[t]!==0)continue;let n=s[t+1],r=s[t+3];L(Ut(e.seed,Math.floor(n*3),Math.floor(r*3),22506))>.125||this.steam.push(n,s[t+2]+s[t+5]+.2,r,f.steam)}}setBudget(e){this.budget=e,this.puffs.budget=e.puffs,this.fans.mesh.visible=e.roofLife,this.flags.mesh.visible=e.roofLife,this.beacons.mesh.visible=e.roofLife,this.at.set(1/0,0,1/0)}setWind(e){let t=Math.atan2(-e.y,e.x);if(Math.abs(t-this.windYaw)<1e-6&&this.flags.layer.count>0)return;this.windYaw=t;let n=this.flags.layer;n.begin();for(let e=0;e<this.flagSpots.length;e+=4)n.push(this.flagSpots[e],this.flagSpots[e+1],this.flagSpots[e+2],t,1,1,1,this.flagSpots[e+3]);n.end(),this.flags.mesh.visible=this.budget?.roofLife!==!1&&n.count>0}update(e,t,n,r,i){let a=this.puffs.uniforms;if(a.uTime.value=e,a.uWindDir.value.copy(n),a.uFogDensity.value=r,a.uFogColor.value.copy(i),(t.x-this.at.x)**2+(t.z-this.at.z)**2<1600)return;this.at.copy(t);let o=this.fans.layer;if(o.begin(),this.budget?.roofLife!==!1){let e=this.city.roofProps;for(let n=0;n<e.length;n+=7){if(e[n]!==0)continue;let r=e[n+1],i=e[n+3];(r-t.x)**2+(i-t.z)**2>48400||o.push(r,e[n+2]+e[n+5],i,0,1,1,1,0)}}o.end(),this.fans.mesh.visible=this.budget?.roofLife!==!1&&o.count>0;let s=[];for(let e=0;e<this.steam.length;e+=4){let n=this.steam[e],r=this.steam[e+2];(n-t.x)**2+(r-t.z)**2<202500&&s.push(n,this.steam[e+1],r,this.steam[e+3])}this.puffs.set(s,s.length/4,0,0,5),this.puffs.layer.mesh.visible=this.puffs.layer.count>0}counts(){return{fans:this.fans.count,flags:this.flags.count,beacons:this.beacons.count,steam:this.puffs.count}}dispose(){this.grid?.removeOwner(di),this.group.removeFromParent(),this.fans.dispose(),this.flags.dispose(),this.beacons.dispose(),this.puffs.dispose(),this.group.clear()}},pi=class{group=new A;rt;budget;form;traffic=null;birds;origin;countryside=null;cityLife=null;placedAt=new O(1/0,0,1/0);roadsAt=new O(1/0,0,1/0);rural=null;ruralView=null;shared;wind;fogColor=new j;fogDensity=0;placeMs=0;trafficMs=0;ruralModels;constructor(e,t,n,r,i,a,o=null){this.group.name=`life`,this.shared=t,this.wind=a,this.rt=e,this.form=i,this.origin=n,this.budget=ot(r,i);let c=e.content;this.ruralModels=c?.kind===`terrain`?o:null;let u=(t,n)=>e.terrain?e.terrain.heightAt(t,n):0,d=c?.seed??1,f=e.def.spawn.position,p=[];if(c?.kind===`city`){let e=[E(10),E(4)];for(let t=0;t<15;t++)for(let n=0;n<15;n++)c.city.blockClass(n,t)===`park`&&(e=[E(n),E(t)]);let t=[];for(let e=0;e<15;e++)for(let n=0;n<15;n++)c.city.blockClass(n,e)===`low`&&t.push([E(n),E(e),(E(n)-f[0])**2+(E(e)-f[2])**2]);t.sort((e,t)=>e[2]-t[2]);let n=[e,...t.slice(0,2).map(e=>[e[0],e[1]])];p.push({sim:new s({seed:d,flocks:3,birds:16,speed:11,radius:[14,24],height:[30,44],keep:1/0,place:[90,220],ground:u,homes:n},f[0],f[2]),kind:ce.pigeon,scale:.85}),p.push({sim:new s({seed:d+1,flocks:1,birds:10,speed:8.5,radius:[30,55],height:[12,30],keep:1/0,place:[120,260],ground:u,homes:[[C.x,f[2]+120]]},f[0],f[2]),kind:ce.gull,scale:1.25})}else{let t=e.def.id===`alpine`;p.push({sim:new s({seed:d,flocks:3,birds:16,speed:t?10:12.5,radius:[22,45],height:t?[40,90]:[14,45],keep:650,place:[110,380],ground:u},f[0],f[2]),kind:t?ce.crow:ce.swallow,scale:t?1.2:.75})}if(this.birds=new l(p,t,e.life??null),this.birds.setBudget(this.budget.flocks,this.budget.birds),this.group.add(this.birds.group),c?.kind===`city`&&c.traffic){let e=c.traffic;this.traffic=new ct(e.sim,e.signals,e.roads.signals,t,this.trafficOptions(),o),this.group.add(this.traffic.group),this.applyTrafficBudget()}c?.kind===`city`&&(this.cityLife=new fi(c.city,t,e.grid),this.cityLife.setBudget(this.budget),this.cityLife.setWind(a),this.group.add(this.cityLife.group)),c?.kind===`terrain`&&(this.countryside=new oe(t,e.life??null,e.grid,u),this.countryside.setBudget(this.budget),this.group.add(this.countryside.group))}follow(e){let t=this.rt.content;if(t?.kind!==`terrain`||!this.countryside)return;let n=t.world.spec.preset===`alpine`,r=performance.now();if((e.x-this.placedAt.x)**2+(e.z-this.placedAt.z)**2>(n?1/0:102400)||!Number.isFinite(this.placedAt.x)){let r=n?[0,0]:[e.x,e.z];this.placedAt.set(r[0],0,r[1]);let i=Math.atan2(-this.wind.x,-this.wind.y),o=a(t.world,r[0],r[1],n?1700:900,i,{turbines:!n,sheep:!n,pastures:n});this.countryside.setContent(o,this.origin.x,this.origin.z)}if((e.x-this.roadsAt.x)**2+(e.z-this.roadsAt.z)**2>176400){this.roadsAt.set(e.x,0,e.z);let n=ui(t.world,e.x,e.z,750);this.rural&&this.rt.life?.removeTraffic(this.rural),this.rural=new ut(n,null,{seed:(t.seed^Math.floor(e.x)^Math.floor(e.z)<<8)>>>0,maxCars:12,radius:650,spawnInner:.5,vehicles:[0,1,2,3]}),this.rural.target=this.budget.ruralCars,this.rt.life?.addTraffic(this.rural),this.ruralView?this.ruralView.setSim(this.rural):(this.ruralView=new ct(this.rural,null,null,this.shared,{generic:this.budget.genericCars,glow:!1,shadows:!1,signalRange:0},this.ruralModels),this.modelTier&&this.ruralView.setModelTier(this.modelTier),this.group.add(this.ruralView.group))}let i=performance.now()-r;i>.5&&(this.placeMs=i)}trafficOptions(){let e=this.budget;return{generic:e.genericCars,glow:e.carGlow,shadows:e.carShadows,signalRange:e.signalRange}}applyTrafficBudget(){let e=this.rt.content;if(e?.kind!==`city`||!e.traffic)return;let t=e.traffic.sim;t.target=this.budget.cars,t.radius=this.budget.carRadius}setQuality(e){this.budget=ot(e,this.form),this.traffic?.setOptions(this.trafficOptions()),this.applyTrafficBudget(),this.birds.setBudget(this.budget.flocks,this.budget.birds),this.countryside?.setBudget(this.budget),this.cityLife?.setBudget(this.budget),this.rural&&(this.rural.target=this.budget.ruralCars),this.ruralView?.setOptions({generic:this.budget.genericCars,glow:!1,shadows:!1,signalRange:0})}setDusk(e){this.traffic?.setLights(Math.min(1,Math.max(0,(e-.25)/.5)))}setFog(e,t){this.fogDensity=e,t&&this.fogColor.copy(t),this.traffic?.setFog(e)}update(e){let t=this.rt.content;if(this.group.position.set(this.origin.x,0,this.origin.z),this.birds.origin.x=this.origin.x,this.birds.origin.z=this.origin.z,this.birds.update(e.dt,e.drone),this.cityLife?.update(e.time,e.drone,this.wind,this.fogDensity,this.fogColor),this.countryside&&(this.follow(e.drone),this.countryside.setOrigin(this.origin.x,this.origin.z),this.countryside.update(e.time,this.wind,this.fogDensity,this.fogColor)),this.rural&&this.ruralView){let t=e.drone,n=this.rt.terrain?this.rt.terrain.heightAt(t.x,t.z):0;this.rural.update(e.dt,t.x,t.y,t.z,t.y-n),this.ruralView.origin.x=this.origin.x,this.ruralView.origin.z=this.origin.z,this.ruralView.update(this.rural.time,t,e.camera)}if(t?.kind===`city`&&t.traffic&&this.traffic){let n=e.drone,r=this.rt.terrain?this.rt.terrain.heightAt(n.x,n.z):0,i=performance.now();t.traffic.sim.update(e.dt,n.x,n.y,n.z,n.y-Math.max(0,r)),this.trafficMs=performance.now()-i,this.rt.life?.flushTrafficEvents(),this.traffic.update(t.traffic.sim.time,n,e.camera)}}setModelTier(e){this.traffic?.setModelTier(e),this.ruralView?.setModelTier(e),this.modelTier=e}modelTier=null;glbStats(){let e=this.traffic?.glbStats(),t=this.ruralView?.glbStats();return{instances:(e?.instances??0)+(t?.instances??0),draws:(e?.draws??0)+(t?.draws??0),tris:(e?.tris??0)+(t?.tris??0)}}stats(){let e=this.rt.content,t={};return e?.kind===`city`&&e.traffic&&(t.cars=e.traffic.sim.count,t.trafficMs=Math.round(this.trafficMs*1e3)/1e3,t.trafficDraws=this.traffic?.counts()),t.birds=this.birds.count,this.countryside&&(t.countryside=this.countryside.counts()),this.cityLife&&(t.city=this.cityLife.counts()),this.rural&&(t.ruralCars=this.rural.count),t.placeMs=Math.round(this.placeMs*100)/100,t}dispose(){this.group.removeFromParent(),this.traffic?.dispose(),this.birds.dispose(),this.countryside?.dispose(),this.cityLife?.dispose(),this.rural&&this.rt.life?.removeTraffic(this.rural),this.ruralView?.dispose(),this.group.clear()}},mi=[.8,1.2,1.6,2,2.4,2.8],hi=.5,gi=.6,_i=[1.1,1.6],vi=2541,yi=[`H2`,`H3`,`H4`],bi=[.3,.9];function xi(e,t,n){for(let r of e.near(t,n))for(let e of bi)if(g(t,e,n,r.shape)<.55)return!1;return!0}function Si(e,t,n,r,i){let a=Math.sqrt((r-t)*(r-t)+(i-n)*(i-n)),o=Math.max(1,Math.ceil(a/hi));for(let a=0;a<=o;a++)if(!xi(e,t+(r-t)*a/o,n+(i-n)*a/o))return!1;return!0}function Ci(e,t,n,r,i,a){let o=a,s=NaN,c=NaN,l=Math.ceil(r-n);for(let a=0;a<=l;a++){let l=Math.min(r,n+a),u=-1,d=[o,...mi.filter(e=>e!==o&&Math.abs(e-o)<=.800000001).sort((e,t)=>Math.abs(e-o)-Math.abs(t-o)||e-t)];for(let n of d){let[r,i]=t(l,n);if(xi(e,r,i)&&!(a>0&&!Si(e,s,c,r,i))){u=n;break}}if(u<0)return null;let[f,p]=t(l,u);i.push(f,p),s=f,c=p,o=u}return o}function wi(e,t,r){let i=n(t),a=n(r),o=[(e,t)=>[i+e,a+t],(e,t)=>[i+64-t,a+e],(e,t)=>[i+64-e,a+64-t],(e,t)=>[i+t,a+64-e]],s=[],c=1.6;for(let t of o){let n=Ci(e,t,3,61,s,c);if(n===null)return null;c=n}for(let t=0;t<s.length;t+=2){let n=(t+2)%s.length;if(!Si(e,s[t],s[t+1],s[n],s[n+1]))return null}return s}function Ti(e,t){let n=e.length/2,r=new Float64Array(n+1);for(let t=0;t<n;t++){let i=(t+1)%n,a=e[2*i]-e[2*t],o=e[2*i+1]-e[2*t+1];r[t+1]=r[t]+Math.sqrt(a*a+o*o)}return{pts:Float64Array.from(e),cum:r,length:r[n],block:t}}function Ei(e,t,n){let r=new c;for(let e of t)r.add(e);let i=[],a=[],o=e.seed;for(let t=0;t<15;t++)for(let n=0;n<15;n++){let s=e.blockClass(n,t);if(s===`river`||s===`park`)continue;let c=Ut(o,n,t,vi);if(L(c)>=gi)continue;let l=wi(r,n,t);if(!l)continue;let u=Ti(l,[n,t]);i.push(u);let d=1+ +(L(I(c,1))<.4);for(let e=0;e<d;e++){let t=I(c,10+e),n=yi[Math.floor(L(t)*3)],r=n===`H4`&&L(I(t,1))<.5;a.push({id:a.length,model:n,gait:r?`jog`:`walk`,route:i.length-1,speed:r?3:_i[0]+(_i[1]-_i[0])*L(I(t,2)),dir:L(I(t,3))<.5?1:-1,phase:L(I(t,4))*u.length,x:0,z:0,yaw:0})}}for(let e=0;e*3+2<n.length;e++){let t=Ut(o,e,7,vi);L(t)>=.55||a.push({id:a.length,model:L(I(t,1))<.5?`H2`:`H3`,gait:`idle`,route:-1,speed:0,dir:1,phase:L(I(t,2))*10,x:n[e*3],z:n[e*3+1],yaw:n[e*3+2]})}return{routes:i,walkers:a}}var Di=.8;function Oi(e,t,n){let r=t-e;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return e+r*n}function ki(e,t,n,r){if(t.route<0)return r.x=t.x,r.z=t.z,r.yaw=t.yaw,r;let i=e.routes[t.route],a=(t.phase+t.dir*t.speed*n)%i.length;a<0&&(a+=i.length);let o=i.pts.length/2,s=0;for(;s<o-1&&i.cum[s+1]<=a;)s++;let c=(s+1)%o,l=i.cum[s+1]-i.cum[s],u=l>0?(a-i.cum[s])/l:0,d=i.pts[2*s],f=i.pts[2*s+1],p=i.pts[2*c]-d,m=i.pts[2*c+1]-f;r.x=d+p*u,r.z=f+m*u;let h=Math.atan2(p,m),g=i.cum[s+1]-a,_=a-i.cum[s],v=Math.min(Di,l/2),y=h;if(g<v)y=Oi(h,Math.atan2(i.pts[2*((c+1)%o)]-i.pts[2*c],i.pts[2*((c+1)%o)+1]-i.pts[2*c+1]),.5*(1-g/v));else if(_<v){let e=(s+o-1)%o;y=Oi(h,Math.atan2(i.pts[2*s]-i.pts[2*e],i.pts[2*s+1]-i.pts[2*e+1]),.5*(1-_/v))}return r.yaw=t.dir>0?y:y+Math.PI,r}var Ai=1.4,ji=3,Q={ultra:{skinned:6,proxies:!0},high:{skinned:6,proxies:!0},medium:{skinned:3,proxies:!1},low:{skinned:0,proxies:!1}};function Mi(e,t){e.updateMatrixWorld(!0);let n=new pt().copy(e.matrixWorld).invert().multiply(t.matrixWorld);return t.geometry.clone().applyMatrix4(n)}function Ni(e,t){let n=Q[e],r=Q[t];return n.skinned<=r.skinned&&(!n.proxies||r.proxies)}var Pi=[`H2`,`H3`,`H4`],Fi=40,Ii=class{peds;ground;group=new A;slots=[];templates=new Map;proxies=new Map;proxyList=[];proxyGeometries=[];proxyPose={x:0,z:0,yaw:0};proxyMaterials=[];budget;pose={x:0,z:0,yaw:0};m=new pt;q=new Dt;p=new O;one=new O(1,1,1);up=new O(0,1,0);pick;pickD;picked=0;slotOf;disposed=!1;skinnedShown=0;proxiesShown=0;constructor(e,t,n,r){this.peds=e,this.ground=r,this.budget=Q[n],this.group.name=`pedestrians`,this.pick=new Int32Array(this.budget.skinned),this.pickD=new Float64Array(this.budget.skinned),this.slotOf=new Int32Array(e.walkers.length).fill(-1);try{for(let e of Pi){let n=t[e];if(!n)continue;this.templates.set(e,n),n.traverse(e=>{let t=e;for(let e of[t.material].flat())e&&e.isMeshStandardMaterial&&(e.envMapIntensity=.6)});let r=n.getObjectByName(`${e}_LOD0`);if(n.visible=!1,r)for(let t=0;t<this.budget.skinned;t++)this.slots.push(this.makeSlot(e,n));let i=n.getObjectByName(`${e}_LODQ`);if(this.budget.proxies&&i){let t=i.material,r=new mt({map:t.map??null,color:16777215});this.proxyMaterials.push(r);let a=Mi(n,i);this.proxyGeometries.push(a);let o=new Pt(a,r,Fi);o.name=`${e}_proxies`,o.count=0,o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!0,Fe(o,()=>o.count>0),this.proxies.set(e,o),this.proxyList.push(o),this.group.add(o)}}}catch(e){this.dispose();for(let e of Pi){let n=t[e];n&&!this.templates.has(e)&&Zt(n)}throw e}}makeSlot(e,t){let n=new A;n.name=`ped-${e}`;let r=Jt(t);r.visible=!0;let i=[];r.traverse(e=>{let t=e;t.isSkinnedMesh&&(i.push(t),t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!0)});for(let t of[`${e}_LODQ`,`${e}_LOD1`])r.getObjectByName(t)?.removeFromParent();n.add(r),n.visible=!1;let a=new It(r),o=t.animations??[],s=e=>{let t=o.find(t=>t.name===e);return t?a.clipAction(t):null};this.group.add(n);let c={model:e,root:n,mixer:a,walk:s(`walk`),run:s(`run`),idle:s(`idle`),skinned:i,walker:-1,gait:null};return Fe(n,()=>c.walker>=0),c}setActive(e){if(this.group.visible=e,!e){this.skinnedShown=0,this.proxiesShown=0;for(let e of this.proxyList)e.count=0}}update(e,t,n,r){if(this.disposed||!this.group.visible)return;let i=this.peds.walkers,a=this.budget.skinned;this.lastTime=e,this.picked=0;for(let e of this.proxyList)e.count=0;this.proxiesShown=0;for(let t=0;t<i.length;t++){let o=i[t];if(!this.near(o,e,n,r))continue;let s=this.pose.x-n,c=this.pose.z-r,l=s*s+c*c;a>0&&l<=3600&&this.slotsFor(o.model)>0?this.insert(t,l):l<=16900&&this.drawProxy(o)}for(let e of this.slots){if(e.walker<0)continue;let t=!1;for(let n=0;n<this.picked;n++)this.pick[n]===e.walker&&(t=!0);t||this.release(e)}this.skinnedShown=0;for(let n=0;n<this.picked;n++){let r=this.pick[n],a=i[r],o=this.slotOf[r]>=0?this.slots[this.slotOf[r]]:null;if(!o){if(o=this.freeSlot(a.model),!o){this.drawProxy(a);continue}this.bind(o,r,a)}ki(this.peds,a,e,this.pose),o.root.position.set(this.pose.x,this.ground(this.pose.x,this.pose.z),this.pose.z),o.root.rotation.y=this.pose.yaw,o.mixer.update(t),this.skinnedShown++}for(let e of this.proxyList)e.visible=e.count>0,e.instanceMatrix.needsUpdate=!0}slotsFor(e){let t=0;for(let n of this.slots)n.model===e&&t++;return t}near(e,t,n,r){ki(this.peds,e,t,this.pose);let i=this.pose.x-n,a=this.pose.z-r;return i*i+a*a<=44100}insert(e,t){let n=this.pick.length,r=this.picked;for(;r>0&&this.pickD[r-1]>t;)r--;if(r>=n){this.drawProxy(this.peds.walkers[e]);return}this.picked===n?this.drawProxy(this.peds.walkers[this.pick[n-1]]):this.picked++;for(let e=this.picked-1;e>r;e--)this.pick[e]=this.pick[e-1],this.pickD[e]=this.pickD[e-1];this.pick[r]=e,this.pickD[r]=t}drawProxy(e){let t=this.proxies.get(e.model);if(!t||t.count>=Fi)return;let n=ki(this.peds,e,this.lastTime,this.proxyPose);this.q.setFromAxisAngle(this.up,n.yaw),this.p.set(n.x,this.ground(n.x,n.z),n.z),this.m.compose(this.p,this.q,this.one),t.setMatrixAt(t.count++,this.m),this.proxiesShown++}lastTime=0;freeSlot(e){for(let t of this.slots)if(t.model===e&&t.walker<0)return t;return null}bind(e,t,n){e.walker=t,this.slotOf[t]=this.slots.indexOf(e),e.root.visible=!0,e.mixer.stopAllAction();let r=n.gait===`idle`?e.idle:n.gait===`jog`?e.run??e.walk:e.walk;e.gait=n.gait,r&&(r.reset(),r.setEffectiveTimeScale(n.gait===`idle`?1:n.speed/(n.gait===`jog`&&e.run?ji:Ai)),r.play(),r.time=n.phase*.37%r.getClip().duration)}release(e){e.walker>=0&&(this.slotOf[e.walker]=-1),e.walker=-1,e.root.visible=!1,e.mixer.stopAllAction()}drawn(){if(!this.group.visible)return{draws:0,instances:0};let e=this.skinnedShown;for(let t of this.proxyList)t.count>0&&e++;return{draws:e,instances:this.skinnedShown+this.proxiesShown}}hasSlot(e){return this.slotOf[e]>=0}dispose(){if(!this.disposed){this.disposed=!0;for(let e of this.slots){e.mixer.stopAllAction();for(let t of e.skinned)t.skeleton.dispose()}for(let e of this.proxyList)e.dispose();for(let e of this.proxyGeometries)e.dispose();this.proxyGeometries.length=0;for(let e of this.proxyMaterials)e.dispose();this.group.removeFromParent();for(let e of this.templates.values())Zt(e);this.slots.length=0,this.proxies.clear(),this.proxyList.length=0}}},Li=class{deps;gen=0;loading=!1;done=!1;constructor(e){this.deps=e}request(e){if(this.done||this.loading||Q[e].skinned===0)return;this.loading=!0;let t=this.gen;this.deps.hub.loadExtra(this.deps.models).then(n=>{let r={};for(let e of this.deps.models){let t=n.scenes[e];t&&(r[e]=t)}let i=()=>{for(let e of Object.values(r))e&&Zt(e)};if(t!==this.gen||n.loaded<n.wanted)return i();let a=this.deps.build(r,e);if(!a)return i();this.done=!0,this.deps.adopt(a,e)}).catch(e=>console.warn(`late pedestrians could not be built`,e)).finally(()=>{this.loading=!1})}cancel(){this.gen++}get built(){return this.done}};function Ri(e,t,n){return e.transient!==!0&&!t&&n}var zi=.62,Bi=120,Vi=.6,Hi=600,Ui=300,Wi=1600,Gi=260,Ki=420,qi=7301730,Ji=32,Yi=5,Xi=5,Zi=.4,Qi=.9;function $i(e){return pe(e.sunColor,e.sunIntensity,e.hemi[1],Zi)}var ea=new O,$=new O,ta=new O,na=class{group=new A;background;fog;environmentIntensity=.85;bloomThreshold=1.6;ringLight=new St(1697535,0,7,2);probe;shadowFar;origin=new si;waterProbe;level;content;scope;renderer;dome;envTarget;sun;sunDir=new O;hemi;detail;ripple;shared={uTime:{value:0}};terrainMat;roadMat;waterMat;scatter;trees;impostors;wind;terrain=null;far=null;city=null;peds=null;pedsTier=null;late=null;liveModelTier=null;river=null;life;profile;baseProfile;sky;_time;viewScale=1;viewSetting=1;scatterTerrainVersion=-1;scatterOrigin=-1;followShadow=!1;roofDetail=!1;roofCam=new O;cityTrees=null;cityTreesAt=new O;viewDir=new O(0,0,-1);shadowAt=new O;form;cameraFar;constructor(e,n,r,a,o={}){if(e.def.kind!==`outdoor`||!e.content)throw Error(`WorldLevelView needs a generated outdoor level`);this.level=e.def,this.content=e.content,this.form=a,this.renderer=n,this.group.name=`world`,this.scope=r.scope(e.def.id),this._time=o.time??e.def.env.time??`afternoon`,this.sky=lt[this._time],this.viewSetting=o.viewDistance??1;let s=this.sky,c=s.haze??s.horizon;this.background=new j(c),this.baseProfile=et(r.profile.tier,a),this.profile=We(this.baseProfile,this.viewSetting),this.fog=new yt(c,2.15/this.fogDistance()),this.cameraFar=this.farPlane(),this.shadowFar=this.content.kind===`city`?Ki:Gi,this.dome=new re(s,c,{cloudSteps:ee[r.profile.tier]}),this.dome.fogGround=new j,this.dome.setSky(s,c),this.group.add(this.dome.mesh),this.envTarget=d(n,s,c),this.sun=new vt(s.sunColor,s.sunIntensity),this.sun.name=`sun`,this.sunDir.set(...s.sunDir).normalize(),this.group.add(this.sun,this.sun.target),this.hemi=new xt(s.hemi[0],s.hemi[1],zi),this.group.add(this.hemi,this.ringLight);let l=r.profile.tier===`low`;this.detail=Oe(256,Math.min(n.capabilities.getMaxAnisotropy(),8)),this.ripple=Yr(l?64:256),this.terrainMat=e.content.kind===`terrain`?this.scope.terrain({base:`grass`,uvMeters:1,rockAttribute:`aRock`,wetAttribute:`aWet`,slopeRock:.1,rockMeters:Ji,rockMacro:Yi,rockTint:qi,soil:!l,srgbColors:!0,snow:!0,snowMap:Xi,envMapIntensity:.8,worldUv:!0,detail:l?.2:.55,normalScale:l?.12:.45,roughness:1.35,gust:!0,fields:e.content.world.spec.genVersion>=2?{seed:e.content.world.spec.seed}:void 0,erosion:!0}):null,this.terrainMat&&(he(this.terrainMat,$i(s)),h(this.terrainMat,Qi,this.sunDir),de(this.terrainMat,l)),this.roadMat=rt(this.detail),this.waterMat=ni(s,this.ripple,this.profile.waterDetail);let u=se(s),f=Math.atan2(this.sunDir.z,-this.sunDir.x);this.wind={uTime:{value:0},uWind:{value:new Nt(Math.cos(f),-Math.sin(f))}};let p={wind:{uniforms:this.wind,flutter:!1}},m={wind:{uniforms:this.wind,flutter:!0}},g=this.scope,_=o.modelTier??it(r.profile.tier,a),v=Ce(T,_,D(Me,0));this.trees=new t({bark:g.material(`bark`,{uvMeters:1,vertexColors:!0,albedo:9075306,roughness:.95,envMapIntensity:.8,patch:p}),cards:g.material(`foliage`,{vertexColors:!0,roughness:.8,envMapIntensity:.8,patch:m}),needles:g.material(`needles`,{vertexColors:!0,roughness:.85,envMapIntensity:.8,patch:m}),lod:g.custom(`world:tree-lod`,()=>i(new gt({vertexColors:!0,roughness:.85,metalness:0,envMapIntensity:.8}),p))},v?x(v.scenes,this.wind):null);let y=e.content.kind===`terrain`?Ce(T,_,D([...Te,...Ae,...Ke,...Qe,...De],0)):null,b=e.terrain?(t,n)=>e.terrain.heightAt(t,n):null;this.scatter=new ye(this.origin,this.shared,{treesLod0:this.profile.treesLod0,treesLod1:this.profile.treesLod1,nearTrees:this.profile.nearTrees,nearRange:this.profile.nearRange},this.trees,y,b),this.terrainMat&&je(this.terrainMat,ne,ze,this.scatter.treeRect);let S=null;try{S=Re(n,this.trees.models,g.textures(`foliage`).albedo,g.textures(`needles`).albedo,r.profile.tier===`low`?4:8),this.scatter.setImpostorAtlas(S.color.texture,S.normal.texture,S.views)}catch{}this.impostors=S,this.scatter.setDusk(u),this.scatter.setRockModels(e.content.kind===`terrain`&&e.content.world.spec.genVersion>=2);let te=_e(e);this.waterProbe=te?(e,t)=>te.waterLevelAt(e,t):()=>-1/0;let C=this.content,w=this.level.spawn.position;if(C.kind===`terrain`?(this.terrain=new Rr(C.stream,this.origin,{terrain:this.terrainMat,road:this.roadMat,water:this.waterMat},{uploads:this.profile.uploads}),this.group.add(this.terrain.group,this.scatter.group),this.origin.set(Math.floor(w[0]/128)*128,Math.floor(w[2]/128)*128),this.terrain.setUploads(1024),this.terrain.update(w[0],w[2]),this.terrain.setUploads(this.profile.uploads),this.scatterTerrainVersion=this.terrain.version,this.scatterOrigin=this.origin.version,this.scatter.rebuild(this.terrain.shown)):(this.city=new Sr(C.city,C.outskirts,C.furniture,e.terrain??{heightAt:()=>0},this.detail,this.shared,this.scope,{outskirts:this.profile.outskirts,facadeDetail:this.profile.facadeDetail,tier:_},Ce(T,_,[...D(Ie,0),...D(Be,0),...D(xe,0)])),this.city.setDusk(u),this.river=new P(Tr(),this.waterMat),this.river.name=`river`,this.river.receiveShadow=!0,this.group.add(this.city.group,this.river,this.scatter.group),this.cityTrees=this.city.trees,this.cityTreesAt.set(w[0],0,w[2]),this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt)),this.life=new pi(e,this.shared,this.origin,r.profile.tier,a,this.wind.uWind.value,Ce(T,_,D(e.content.kind===`city`?[...Pe,...He]:Je,1))),C.kind===`city`&&Q[_].skinned>0){let t=Ce(T,_,D(nt,0));if(t)try{let n=e.terrain??{heightAt:()=>0};this.peds=new Ii(Ei(C.city,[...C.city.colliders,...C.furniture.colliders],C.furniture.shelters),t.scenes,_,(e,t)=>n.heightAt(e,t)),this.pedsTier=_,this.group.add(this.peds.group)}catch(e){console.warn(`GLB pedestrians unusable; the street stays empty`,e)}}if(C.kind===`city`){let t=e.terrain??{heightAt:()=>0},n=()=>Ei(C.city,[...C.city.colliders,...C.furniture.colliders],C.furniture.shelters);this.late=new Li({hub:T,models:nt,build:(e,r)=>new Ii(n(),e,r,(e,n)=>t.heightAt(e,n)),adopt:(e,t)=>{this.peds=e,this.pedsTier=t,this.group.add(this.peds.group),this.peds.setActive(this.liveModelTier!==null&&Ni(t,this.liveModelTier))}})}this.life.setDusk(u),this.life.setFog(this.fog.density,this.fog.color),this.group.add(this.life.group),this.placeSun(new O(...w));let ie=e.terrain?e.terrain.heightAt(w[0],w[2]):0;this.probe={position:new O(w[0],Math.max(w[1],ie)+6,w[2]),near:.5,far:3e3,minSize:64,always:!1},this.dome.follow(this.probe.position)}get environment(){return this.envTarget.texture}get time(){return this._time}setEnvironment(e){}setTime(e){if(e===this._time)return;this._time=e;let t=lt[e];this.sky=t;let n=t.haze??t.horizon;this.background.set(n),this.fog.color.set(n),this.dome.setSky(t,n),this.envTarget.dispose(),this.envTarget=d(this.renderer,t,n),this.sun.color.set(t.sunColor),this.sun.intensity=t.sunIntensity,this.sunDir.set(...t.sunDir).normalize(),this.hemi.color.set(t.hemi[0]),this.hemi.groundColor.set(t.hemi[1]),oi(this.waterMat,t),this.terrainMat&&(he(this.terrainMat,$i(t)),h(this.terrainMat,Qi,this.sunDir));let r=se(t);this.scatter.setDusk(r),this.city?.setDusk(r),this.life.setDusk(r),this.life.setFog(this.fog.density,this.fog.color),this.placeSun(this.shadowAt.lengthSq()>0?this.shadowAt:new O(...this.level.spawn.position)),this.dome.follow(this.probe.position)}fogDistance(){return Math.min(this.level.env.fog.viewDistance*Math.max(1,this.viewSetting),this.profile.fog)}farPlane(){let e=this.fogDistance(),t=this.content.kind===`terrain`?Math.max(Jr(this.profile.stream.radius),this.profile.farRadius>0?Jr(this.profile.farRadius):0):e;return Math.max(e<500?e*1.1:600,Math.min(e*1.05,t+200))}update(e){this.shared.uTime.value=e.time,this.wind.uTime.value=e.time,ii(this.waterMat,e.time),this.dome.follow(e.camera),this.dome.update(e.time),this.scatter.setViewer(e.camera.x,e.camera.y,e.camera.z),this.city?.setViewer(e.camera.x,e.camera.y,e.camera.z),this.peds?.update(e.time,e.dt,e.camera.x,e.camera.z),p.uGustTime.value=e.time,p.uGustWind.value.copy(this.wind.uWind.value);let t=e.drone;this.terrain&&(this.origin.follow(t.x,t.z),this.terrain.update(t.x,t.z),this.far?.update(t.x,t.z,this.terrain,e.time*1e3),(this.scatterTerrainVersion!==this.terrain.version||this.scatterOrigin!==this.origin.version)&&(this.scatterTerrainVersion=this.terrain.version,this.scatterOrigin=this.origin.version,this.scatter.rebuild(this.terrain.shown))),this.cityTrees&&(t.x-this.cityTreesAt.x)**2+(t.z-this.cityTreesAt.z)**2>1600?(this.cityTreesAt.set(t.x,0,t.z),this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt,this.profile.furnitureRange),this.city?.setFurniture(this.profile.furnitureRange,t.x,t.z,this.profile.kerbs),this.city?.setRoofDetail(this.roofDetail,t.x,t.z,e.camera.x,e.camera.z),this.roofCam.copy(e.camera)):this.city&&this.roofDetail&&(e.camera.x-this.roofCam.x)**2+(e.camera.z-this.roofCam.z)**2>1600&&(this.roofCam.copy(e.camera),this.city.setRoofDetail(!0,this.cityTreesAt.x,this.cityTreesAt.z,e.camera.x,e.camera.z)),this.followShadow&&this.placeSun(this.shadowCentre(e.camera,t)),this.life.update(e)}shadowCentre(e,t){let n=t.x-e.x,r=t.z-e.z,i=Math.sqrt(n*n+r*r);i>.5&&this.viewDir.set(n/i,0,r/i);let a=this.city?Ui:Bi;return this.shadowAt.copy(t).addScaledVector(this.viewDir,a*Vi)}placeSun(e){let t=this.sunDir,n=this.sun,r=this.city?Ui:Bi,i=this.city?Wi:Hi;$.set(0,1,0).cross(t).normalize(),$.lengthSq()<1e-6&&$.set(1,0,0),ta.crossVectors(t,$).normalize();let a=r*2/Math.max(256,n.shadow.mapSize.x),o=Math.round(e.dot($)/a)*a,s=Math.round(e.dot(ta)/a)*a,c=e.dot(t);ea.copy($).multiplyScalar(o).addScaledVector(ta,s).addScaledVector(t,c),n.target.position.copy(ea),n.position.copy(ea).addScaledVector(t,i/2),n.target.updateMatrixWorld(),n.updateMatrixWorld()}setQuality(e){this.dome.setCloudSteps(ee[e.tier]),this.baseProfile=et(e.tier,this.form),this.terrainMat&&de(this.terrainMat,e.tier===`low`),this.applyProfile(e)}setViewScale(e){this.viewScale=Math.min(1,Math.max(.5,e)),this.applyProfile(null)}setViewDistance(e){e!==this.viewSetting&&(this.viewSetting=e,this.applyProfile(null))}applyProfile(e){let t=We(this.baseProfile,this.viewScale*this.viewSetting);this.profile=t,this.fog.density=2.15/this.fogDistance(),this.life?.setFog(this.fog.density,this.fog.color),this.cameraFar=this.farPlane(),ai(this.waterMat,t.waterDetail),this.scatter.caps={treesLod0:t.treesLod0,treesLod1:t.treesLod1,nearTrees:t.nearTrees,nearRange:t.nearRange,rocks:t.rocks},this.cityTrees&&this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt,t.furnitureRange);let n=this.content;if(n.kind===`terrain`&&this.terrain&&(n.stream.configure(t.stream),this.terrain.setUploads(t.uploads),this.scatterTerrainVersion=-1,t.farRadius>0?this.far?this.far.setRadius(t.farRadius):(this.far=new qr(n.world.spec,n.stream.chunkBuilder,this.origin,this.terrainMat,this.waterMat,t.farRadius,this.level.bounds.kind===`rect`&&this.level.bounds.max[0]<1e4?this.level.bounds.max[0]+1280:void 0),this.group.add(this.far.group)):this.far&&=(this.far.dispose(),null)),this.city&&(this.city.setOutskirts(t.outskirts),this.city.setFurniture(t.furnitureRange,this.cityTreesAt.x,this.cityTreesAt.z,t.kerbs),this.city.setFacadeDetail(t.facadeDetail)),!e)return;this.life.setQuality(e.tier);let r=it(e.tier,this.form);this.scatter.setModelTier(r),this.city?.setModelTier(r);let i=Mn(e);i!==null&&this.city?.setFacadeQuality(i),e.transient||(this.liveModelTier=r,this.peds?.setActive(this.pedsTier!==null&&Ni(this.pedsTier,r)),Ri(e,this.peds!==null,T.on)&&this.late?.request(r)),this.life.setModelTier(r);let a=e.shadows&&(t.sunShadows||e.sunCascades),o=e.tier===`ultra`||e.tier===`high`;this.trees.setDetailed(o,t.nearDetail),this.trees.setFringe(t.nearFringe),this.roofDetail=o,this.city?.setRoofDetail(o,this.cityTreesAt.x,this.cityTreesAt.z,this.roofCam.x,this.roofCam.z),this.scatter.setShadows(a),this.city&&(this.city.buildings.mesh.castShadow=a,this.city.setModelShadows(a));let s=e.shadows&&t.sunShadows&&!e.sunCascades;this.sun.castShadow=s,this.followShadow=s;let c=this.sun.shadow,l=this.city?e.shadowMapSize:Math.min(e.shadowMapSize,2048);c.mapSize.set(l,l),c.map?.dispose(),c.map=null;let u=c.camera,d=this.city?Ui:Bi;u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.near=1,u.far=this.city?Wi:Hi,u.updateProjectionMatrix();let f=d*2/l;c.bias=-4e-4,c.normalBias=Math.max(.04,f*.9),c.autoUpdate=!0,c.radius=2,c.needsUpdate=!0,this.hemi.intensity=a?zi:zi*1.15}refreshShadows(){this.sun.shadow.needsUpdate=!0}setFoliageCoverage(e){this.scatter.setFoliageCoverage(e)}get busy(){let e=this.content;return e.kind!==`terrain`||!this.terrain?!1:e.stream.pending>0||this.terrain.uploadsLastFrame>0||this.far!==null&&this.far.stream.pending>0}stats(){let e=this.content,t={origin:[this.origin.x,this.origin.z],time:this._time,fog:Math.round(this.fogDistance()),far:Math.round(this.cameraFar),viewScale:this.viewScale,viewDistance:this.viewSetting,instances:this.scatter.counts()};return e.kind===`terrain`&&this.terrain&&(t.chunks=this.terrain.shown.size,t.created=this.terrain.created,t.pooled=this.terrain.pooled,t.uploads=this.terrain.uploadsLastFrame,t.colliderChunks=e.stream.colliderChunks.size,t.pending=e.stream.pending,t.builder=e.stream.builderKind,t.failures=e.stream.failures,t.farChunks=this.far?.count??0,t.radius=this.profile.stream.radius),this.city&&(t.buildings=this.city.buildings.count),t.life=this.life.stats(),t.models=this.modelStats(),t}modelStats(){return{houses:this.scatter.glbStats(),city:this.city?.glbStats()??null,traffic:this.life.glbStats(),pedestrians:this.peds?.drawn()??null}}dispose(){this.group.removeFromParent(),this.terrain?.dispose(),this.far?.dispose(),this.city?.dispose(),this.late?.cancel(),this.peds?.dispose(),this.life.dispose(),this.river?.geometry.dispose(),this.scatter.dispose(),this.impostors?.dispose(),this.dome.dispose(),this.envTarget.dispose(),this.sun.shadow.map?.dispose(),this.sun.dispose(),this.hemi.dispose(),this.ringLight.dispose(),this.detail.dispose(),this.ripple.dispose(),this.roadMat.dispose(),this.waterMat.dispose(),this.scope.dispose(),this.group.clear()}};export{na as WorldLevelView};
