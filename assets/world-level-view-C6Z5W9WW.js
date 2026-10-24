const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./KTX2Loader-csHXa3Ko.js","./three.core-DgfU1NtU.js"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,At as r,Bt as i,C as a,Ct as o,D as s,E as c,Et as l,F as u,Ft as d,G as f,Gn as p,Gt as m,H as h,Hn as g,Ht as _,I as v,It as y,J as b,Jn as x,Jt as S,K as C,Kn as ee,Kt as w,L as te,Lt as ne,M as T,N as re,O as ie,P as ae,Q as oe,Qn as E,Qt as se,R as ce,Rt as le,S as ue,St as de,T as fe,Tt as pe,U as me,Un as he,Ut as ge,V as _e,Vn as ve,Vt as ye,W as be,Wn as xe,Wt as Se,X as Ce,Xn as we,Xt as Te,Y as Ee,Yn as De,Yt as Oe,Z as ke,Zn as Ae,Zt as je,_ as Me,_n as Ne,_t as Pe,a as Fe,an as Ie,at as Le,b as Re,bn as ze,bt as Be,c as Ve,cn as He,cr as Ue,ct as We,d as Ge,dn as Ke,dr as qe,dt as Je,en as Ye,et as Xe,f as Ze,fn as Qe,ft as $e,g as et,gn as tt,gt as nt,h as rt,hn as it,ht as at,in as ot,it as st,j as ct,jt as lt,k as ut,l as dt,ln as ft,lr as pt,lt as mt,m as ht,mn as gt,mt as _t,n as vt,nn as yt,nt as bt,o as xt,on as St,ot as Ct,p as wt,pn as Tt,pt as Et,q as Dt,qn as Ot,qt as kt,r as At,rn as jt,rt as Mt,s as Nt,sn as Pt,st as Ft,t as It,tn as Lt,tr as Rt,tt as zt,u as Bt,un as Vt,ur as Ht,ut as Ut,v as Wt,vn as Gt,vt as Kt,w as qt,wt as Jt,x as Yt,xn as Xt,y as Zt,yn as Qt,yt as $t,zt as en}from"./main-DVRPGHX0.js";import{A as tn,At as nn,D as rn,Er as an,F as on,Fr as D,G as sn,Gn as cn,I as O,Ir as k,Jt as ln,Lt as un,Mt as A,Nt as j,Pr as dn,Pt as fn,Q as pn,Qt as mn,Tr as hn,U as M,Vt as gn,W as _n,X as vn,Xt as yn,Y as N,Yt as bn,Z as xn,Zt as Sn,_ as P,ar as Cn,at as wn,bt as Tn,c as En,d as F,er as Dn,et as On,g as kn,gr as An,ir as jn,k as Mn,l as Nn,lr as Pn,nn as Fn,nr as In,o as Ln,ot as Rn,qn as zn,r as Bn,rr as Vn,rt as Hn,u as I,un as Un,ur as Wn,vr as Gn,yr as Kn,yt as L,zr as qn,zt as R}from"./three.core-DgfU1NtU.js";import{a as Jn,o as Yn,s as Xn,t as Zn}from"./prewarm-B77Fdtk8.js";import{r as Qn}from"./textures-CYoU-P5h.js";import{A as $n,P as er,x as tr}from"./seed-code-CxDntGpi.js";import{a as nr,d as rr,i as ir,s as z,y as ar}from"./rng-Dz2-0SY0.js";import{n as or,r as sr,t as cr}from"./BufferGeometryUtils-CjvQxtao.js";import{_ as lr,b as ur,d as dr,f as fr,i as pr,l as mr,m as hr,p as gr,u as _r,v as vr,x as yr,y as br}from"./deadlines-DdBTRcuP.js";import{n as xr,t as Sr}from"./bay-asset-urls-DwcrXSWh.js";var Cr=23;function wr(e=256){let t=Qn(e,8,4,911,.55),n=Qn(e,16,3,913,.6),r=new Uint8Array(e*e*4),i=2.2;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=a*e+o,c=(t[a*e+(o+1)%e]-t[a*e+(o+e-1)%e])*i,l=(t[(a+1)%e*e+o]-t[(a+e-1)%e*e+o])*i,u=Math.sqrt(c*c+1+l*l);r[s*4]=Math.round(-c/u*127.5+127.5),r[s*4+1]=Math.round(-l/u*127.5+127.5),r[s*4+2]=Math.round(n[s]*255),r[s*4+3]=255}let a=new tn(r,e,e,Un);return a.wrapS=a.wrapT=zn,a.magFilter=L,a.minFilter=Tn,a.generateMipmaps=!0,a.colorSpace=``,a.needsUpdate=!0,a}var Tr=`
attribute float aShore;
attribute vec2 aFlow;
varying vec3 vWaterPos;
varying float vShore;
varying vec2 vFlow;`,Er=`
uniform sampler2D uRipple;
uniform float uTime;
uniform float uDetailOn;
uniform vec3 uSkyTop;
uniform vec3 uSkyHorizon;
uniform vec3 uFoam;
uniform vec3 uWarm;
uniform vec3 uBody;
uniform float uBodyStrength;
uniform float uRippleScale;
uniform sampler2D uContact;
uniform float uContactOn;
uniform vec3 uContactBox;
varying vec3 vWaterPos;
varying float vShore;
varying vec2 vFlow;
float waterFoam = 0.0;
// how close a rock's foot is (0 open water … 1 at the foot): darker water and a dark reflection of the wall there
float waterContact = 0.0;
// flow-map advection (docs/12): two copies of a sample, each dragged downstream for one period and blended
// in a triangle wave, so the pattern runs along the river without ever stretching
const float FLOW_RATE = 0.11;
vec2 flowOffset( float phase ) { return vFlow * ( phase / FLOW_RATE ); }`,Dr=`
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
    vec2 a = mix( texture2D( uRipple, q1 * ${(1/Cr).toFixed(5)} ).rg, texture2D( uRipple, q0 * ${(1/Cr).toFixed(5)} ).rg, w0 ) * 2.0 - 1.0;
    vec2 b = mix( texture2D( uRipple, q1 * ${(1/(Cr*.41)).toFixed(5)} ).rg, texture2D( uRipple, q0 * ${(1/(Cr*.41)).toFixed(5)} ).rg, w0 ) * 2.0 - 1.0;
    n2 = ( a + b ) * ( 0.32 + 0.12 * clamp( length( vFlow ), 0.0, 1.5 ) );
  } else if ( uDetailOn > 0.5 ) {
    // a lake: gentle ripples drifting with the breeze
    vec2 a = texture2D( uRipple, p * ${(1/Cr).toFixed(5)} + vec2( uTime * 0.011, uTime * 0.006 ) ).rg * 2.0 - 1.0;
    vec2 b = texture2D( uRipple, p * ${(1/(Cr*.41)).toFixed(5)} - vec2( uTime * 0.008, -uTime * 0.014 ) ).rg * 2.0 - 1.0;
    n2 = ( a + b ) * 0.32;
  } else {
    // one analytic ripple (Quest), carried downstream on a river
    vec2 pf = p - vFlow * uTime;
    n2 = 0.05 * vec2( sin( pf.x * 0.35 + uTime * 1.3 ) + sin( pf.y * 0.21 - uTime * 0.7 ), cos( pf.y * 0.29 - uTime * 1.1 ) );
  }
  // gentle near the camera, flat into the distance (ripples finer than a pixel only alias)
  n2 *= ( 1.0 - smoothstep( 40.0, 320.0, dist ) ) * uRippleScale;
  vec3 wn = normalize( vec3( n2.x, 1.0, n2.y ) );
  normal = normalize( ( viewMatrix * vec4( wn, 0.0 ) ).xyz );
}`,Or=`
if ( uContactOn > 0.5 ) {
  vec2 cuv = ( vWaterPos.xz - uContactBox.xy ) * uContactBox.z;
  // past the map's edge the sea is open water (a clamped edge texel would smear a border karst's foot out to the horizon)
  waterContact = all( greaterThanEqual( cuv, vec2( 0.0 ) ) ) && all( lessThanEqual( cuv, vec2( 1.0 ) ) ) ? texture2D( uContact, cuv ).r : 0.0;
  diffuseColor.rgb *= 1.0 - 0.5 * waterContact;
}
if ( uBodyStrength > 0.0 ) {
  // a turbid body (Ha Long's jade): seen from above more of it shows through, at grazing angles the reflection wins
  vec3 up = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
  float facing = clamp( dot( normalize( vViewPosition ), up ), 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uBody, uBodyStrength * ( 0.35 + 0.65 * facing ) );
}
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
}`,kr=`
#if defined( RE_IndirectSpecular ) && !defined( USE_ENVMAP )
{
  vec3 rv = reflect( -normalize( vViewPosition ), normal );
  rv = inverseTransformDirection( rv, viewMatrix );
  radiance += mix( uSkyHorizon, uSkyTop, pow( clamp( rv.y, 0.0, 1.0 ), 0.5 ) ) + uWarm * ( 1.0 - smoothstep( 0.0, 0.18, rv.y ) );
}
#endif
#if defined( RE_IndirectSpecular )
radiance *= 1.0 - waterFoam;
// the rock rising there is what the water mirrors: dark, faintly green, not sky
radiance = mix( radiance, vec3( 0.025, 0.04, 0.03 ), 0.7 * waterContact );
#endif`,Ar=`  vWaterPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
  vShore = aShore;
  vFlow = aFlow;`,jr=`
uniform mat4 uMirrorMatrix;
varying vec4 vMirrorUv;`,Mr=`
uniform vec3 uBodyDeep;
uniform vec2 uBodyFade;
uniform vec3 uReflectTint;`,Nr=`
#if defined( RE_IndirectSpecular )
radiance *= uReflectTint;
#endif`,Pr=`
uniform sampler2D uMirror;
uniform float uMirrorOn;
uniform vec2 uMirrorFade;
uniform float uMirrorBase;
uniform float uMirrorDistort;
varying vec4 vMirrorUv;
vec2 waterRipple = vec2( 0.0 );
vec3 waterMirror = vec3( 0.0 );
float waterMirrorFade = 0.0;`,Fr=`
{
  vec4 muv = vMirrorUv;
  muv.xy += waterRipple * muv.w * uMirrorDistort;
  waterMirror = texture2DProj( uMirror, muv ).rgb;
  waterMirrorFade = uMirrorOn * ( 1.0 - smoothstep( uMirrorFade.x, uMirrorFade.y, length( vViewPosition ) ) );
}
#if defined( RE_IndirectSpecular )
radiance = mix( radiance, waterMirror, waterMirrorFade );
#endif`,Ir=`
outgoingLight = mix( outgoingLight, waterMirror * uReflectTint, uMirrorBase * waterMirrorFade * ( 1.0 - waterFoam ) );`;function Lr(e){return`water-v5`+(e.jade?`-jade`:``)+(e.mirror?`-mirror`:``)}function Rr(e){return{parsVertex:e.mirror?Tr+jr:Tr,projectVertex:e.mirror?Ar+`
  vMirrorUv = uMirrorMatrix * vec4( vWaterPos, 1.0 );`:Ar,parsFragment:Er+(e.jade||e.mirror?Mr:``)+(e.mirror?Pr:``),foamColor:e.jade?Or.replace(`diffuseColor.rgb = mix( diffuseColor.rgb, uBody, `,`diffuseColor.rgb = mix( diffuseColor.rgb, mix( uBody, uBodyDeep, smoothstep( uBodyFade.x, uBodyFade.y, length( vViewPosition ) ) ), `):Or,rippleNormal:e.mirror?Dr.replace(/\}$/,`  waterRipple = n2;
}`):Dr,skyReflection:(e.mirror?Fr+kr.replace(`0.7 * waterContact );`,`0.7 * waterContact * ( 1.0 - waterMirrorFade ) );`):kr)+(e.jade||e.mirror?Nr:``)}}function zr(e,t,n){let r=Math.max(.4,e.sunIntensity/5)*1.1;t.set(e.top).multiplyScalar(r),n.set(e.horizon).multiplyScalar(r)}function Br(e,t,n,r){let i=new R({color:728351,roughness:.035,metalness:0,envMapIntensity:1});i.name=`water`;let a={uRipple:{value:t},uTime:{value:0},uDetailOn:{value:+!!n},uSkyTop:{value:new P},uSkyHorizon:{value:new P},uFoam:{value:new P(14213858)},uWarm:{value:new P(r?.warm??0)},uBody:{value:new P(0,0,0)},uBodyStrength:{value:0},uRippleScale:{value:1},uContact:{value:null},uContactOn:{value:0},uContactBox:{value:new D}};zr(e,a.uSkyTop.value,a.uSkyHorizon.value);let o={uBodyDeep:{value:new P},uBodyFade:{value:new dn(1,2)},uReflectTint:{value:new P(1,1,1)},uMirror:{value:null},uMirrorMatrix:{value:new A},uMirrorOn:{value:0},uMirrorFade:{value:new dn(1e5,2e5)},uMirrorBase:{value:0},uMirrorDistort:{value:0}};return i.userData.water=a,i.userData.waterExtra=o,i.userData.waterVariant={jade:!1,mirror:!1},i.onBeforeCompile=e=>{let t=i.userData.waterVariant;Object.assign(e.uniforms,a),(t.jade||t.mirror)&&Object.assign(e.uniforms,o);let n=Rr(t);e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${n.parsVertex}`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${n.projectVertex}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${n.parsFragment}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${n.foamColor}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = mix( roughnessFactor, 0.85, waterFoam );`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${n.rippleNormal}`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>\n${n.skyReflection}`),t.mirror&&(e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,`${Ir}\n#include <opaque_fragment>`))},i.customProgramCacheKey=()=>Lr(i.userData.waterVariant),i}var Vr=e=>e.userData.water;function Hr(e,t){Vr(e).uTime.value=t}function Ur(e,t){Vr(e).uDetailOn.value=+!!t}function Wr(e,t){let n=Vr(e);zr(t,n.uSkyTop.value,n.uSkyHorizon.value)}function Gr(e,t,n,r=1){let i=Vr(e);i.uBody.value.set(t),i.uBodyStrength.value=n,i.uRippleScale.value=r}function Kr(e,t,n=0,r=0,i=1){let a=Vr(e);a.uContact.value=t,a.uContactOn.value=+!!t,a.uContactBox.value.set(n,r,1/i)}var qr=e=>e.userData.waterExtra;function Jr(e,t,n){let r=e.userData.waterVariant,i=qr(e);t&&(i.uBodyDeep.value.set(t.deep),i.uBodyFade.value.set(t.fade[0],t.fade[1]),i.uReflectTint.value.setRGB(t.tint[0],t.tint[1],t.tint[2])),(r.jade!==!!t||r.mirror!==n)&&(r.jade=!!t,r.mirror=n,e.needsUpdate=!0)}function Yr(e){let t=qr(e);return t.uMirrorOn.value?t.uMirror.value:null}function Xr(e,t,n,r={}){let i=qr(e);i.uMirror.value=t,i.uMirrorOn.value=+!!t,i.uMirrorMatrix.value.copy(n),r.base!==void 0&&(i.uMirrorBase.value=r.base),r.distort!==void 0&&(i.uMirrorDistort.value=r.distort),r.fade&&i.uMirrorFade.value.set(r.fade[0],r.fade[1])}var Zr=new URL(`cliff-normal-4WANiPDa.webp`,import.meta.url).href,Qr=`
attribute float aLedge;
attribute vec2 aCentre;
attribute float aRel;
attribute float aOcc;
varying float vOcc;
varying float vRel;
varying float vTower;
varying vec2 vKarstLocal;
varying vec3 vKarstPos;
varying vec3 vKarstNormal;
varying float vLedge;`,$r=`
{
  vec4 kp = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
  kp = batchingMatrix * kp;
  #endif
  #ifdef USE_INSTANCING
  kp = instanceMatrix * kp;
  #endif
  vKarstPos = ( modelMatrix * kp ).xyz;
  vKarstNormal = normalize( mat3( modelMatrix ) * objectNormal );
  vKarstLocal = vKarstPos.xz - aCentre;
  vLedge = aLedge;
  vRel = aRel;
  vOcc = aOcc;
  // one shade per tower, hashed from its axis here: constant over the tower, no interpolation error
  vTower = fract( sin( dot( floor( aCentre ), vec2( 127.1, 311.7 ) ) ) * 43758.5453 );
}`,ei=`
uniform sampler2D uRock;
uniform float uRockScale;
uniform sampler2D uCliffN;
uniform float uCliffScale;
uniform float uCliffReady;
uniform vec3 uLime;
uniform vec3 uLimeWarm;
uniform vec3 uStain;
uniform float uStreak;
uniform vec3 uMoss;
uniform vec3 uJungle;
uniform vec3 uJungleDark;
uniform vec3 uNotch;
uniform float uGreenSlope;
uniform float uMossFrom;
uniform float uMossTo;
uniform float uCloak;
uniform float uCliff;
uniform vec3 uRust;
uniform float uRustShare;
uniform vec3 uJungleLit;
uniform float uNotchTop;
uniform vec3 uOyster;
uniform float uCrown;
uniform float uCanopyFill;
varying vec3 vKarstPos;
varying vec2 vKarstLocal;
varying vec3 vKarstNormal;
varying float vLedge;
varying float vRel;
varying float vTower;
varying float vOcc;
uniform float uQuality;
// what the colour pass decides for the lighting pass: how much canopy, its crown normal, the rock's detail normal (world)
float gVeg;
vec3 gNormalW;
float kHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
float kNoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  vec2 u = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( kHash( i ), kHash( i + vec2( 1.0, 0.0 ) ), u.x ), mix( kHash( i + vec2( 0.0, 1.0 ) ), kHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
}
float kHash3( vec3 p ) { return fract( sin( dot( p, vec3( 127.1, 311.7, 74.7 ) ) ) * 43758.5453 ); }
vec3 kHash33( vec3 p ) {
  return fract( sin( vec3( dot( p, vec3( 127.1, 311.7, 74.7 ) ), dot( p, vec3( 269.5, 183.3, 246.1 ) ), dot( p, vec3( 113.5, 271.9, 124.6 ) ) ) ) * 43758.5453 );
}
// crown cells in 3D: nearest and second-nearest jittered cell centres (F1, F2), the nearest's offset and id
void kVoronoi3( vec3 q, out float f1, out float f2, out vec3 off, out vec3 id ) {
  vec3 i = floor( q ), f = fract( q );
  f1 = 8.0; f2 = 8.0;
  off = vec3( 0.0 ); id = i;
  for ( int z = -1; z <= 1; z++ ) for ( int y = -1; y <= 1; y++ ) for ( int x = -1; x <= 1; x++ ) {
    vec3 g = vec3( float( x ), float( y ), float( z ) );
    vec3 o = g + 0.15 + 0.7 * kHash33( i + g ) - f;
    float d = dot( o, o );
    if ( d < f1 ) { f2 = f1; f1 = d; off = o; id = i + g; } else if ( d < f2 ) { f2 = d; }
  }
  f1 = sqrt( f1 ); f2 = sqrt( f2 );
}
// whiteout-blended triplanar tangent normal of the cliff scan around world normal n
vec3 kCliffNormal( vec3 n, vec3 p, vec3 w ) {
  vec3 tx = texture2D( uCliffN, p.zy ).xyz * 2.0 - 1.0;
  vec3 ty = texture2D( uCliffN, p.xz ).xyz * 2.0 - 1.0;
  vec3 tz = texture2D( uCliffN, p.xy ).xyz * 2.0 - 1.0;
  tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
  ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
  tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
  return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
}`,ti=`
{
  vec3 n = normalize( vKarstNormal );
  vec3 p = vKarstPos * uRockScale;
  vec3 w = pow( abs( n ), vec3( 4.0 ) );
  w /= w.x + w.y + w.z;
  vec3 rock;
  if ( uQuality > 0.5 ) {
    rock = texture2D( uRock, p.zy ).rgb * w.x + texture2D( uRock, p.xz ).rgb * w.y + texture2D( uRock, p.xy ).rgb * w.z;
  } else {
    vec3 a = abs( n );
    rock = texture2D( uRock, a.y > max( a.x, a.z ) ? p.xz : ( a.x > a.z ? p.zy : p.xy ) ).rgb;
  }
  gNormalW = n;
  if ( uCliffReady > 0.5 ) {
    if ( uQuality > 0.5 ) gNormalW = kCliffNormal( n, vKarstPos * uCliffScale, w );
    else {
      // one tap on the face's main plane
      vec3 a = abs( n );
      vec2 uv = ( a.y > max( a.x, a.z ) ? vKarstPos.xz : ( a.x > a.z ? vKarstPos.zy : vKarstPos.xy ) ) * uCliffScale;
      vec3 t = texture2D( uCliffN, uv ).xyz * 2.0 - 1.0;
      vec3 up = a.y > 0.9 ? vec3( 1.0, 0.0, 0.0 ) : vec3( 0.0, 1.0, 0.0 );
      vec3 tA = normalize( cross( up, n ) );
      gNormalW = normalize( n + ( tA * t.x + cross( n, tA ) * t.y ) * 0.8 );
    }
  }
  float occ = vOcc;
  float wall = 1.0 - smoothstep( 0.5, 0.9, abs( n.y ) );
  float relief = clamp( dot( rock, vec3( 0.299, 0.587, 0.114 ) ) / 0.42, 0.6, 1.3 );
  float around = atan( vKarstLocal.y, vKarstLocal.x ) * max( length( vKarstLocal ), 1.0 );
  float drift = uQuality > 1.5 ? kNoise( vec2( around / 30.0, vKarstPos.y / 40.0 ) ) : 0.5;
  vec3 stone = mix( uLime, uLimeWarm, clamp( vTower * 0.7 + drift * 0.5 - 0.1, 0.0, 1.0 ) ) * relief;
  // streaks start under ledges and in gullies (cavity), run down the walls
  float streak = kNoise( vec2( around / 0.9, vKarstPos.y / 26.0 ) );
  if ( uQuality > 1.5 ) streak = streak * 0.6 + kNoise( vec2( around / 3.0, vKarstPos.y / 12.0 ) ) * 0.4;
  float stain = smoothstep( 0.45, 0.78, streak + ( 1.0 - occ ) * 0.35 ) * wall;
  vec3 c = mix( stone, uStain, stain * uStreak * 0.85 );
  if ( uQuality > 0.5 ) {
    float rust = smoothstep( 1.0 - uRustShare, 1.0 - uRustShare * 0.5, kNoise( vec2( around / 1.4 + 17.0, vKarstPos.y / 24.0 ) ) ) * wall;
    c = mix( c, uRust * relief, rust * 0.5 );
  }
  float mossNoise = uQuality > 1.5 ? kNoise( vec2( around / 4.0, vKarstPos.y / 6.0 ) ) : 0.5;
  c = mix( c, uMoss * relief, smoothstep( uMossFrom, uMossTo, vKarstPos.y ) * 0.35 * ( 0.6 + 0.4 * mossNoise ) );
  // the wet notch: a darkening rising 1.5–2.5 m over the water, its upper edge irregular, darkest at the waterline
  float wetTop = uNotchTop - 1.0 + 1.5 * ( uQuality > 0.5 ? kNoise( vec2( around / 3.0, 7.0 ) ) : 0.5 );
  float wet = 1.0 - smoothstep( wetTop - 0.8, wetTop + 0.4, vKarstPos.y );
  c = mix( c, uNotch, wet * 0.7 );
  c *= 1.0 - 0.35 * ( 1.0 - smoothstep( 0.0, 0.6, vKarstPos.y ) );

  // where the jungle grows: faces turned up, ledges, gullies (cavity) on the upper walls, and each tower's top from its own height
  float start = uCloak + 0.25 * vTower + 0.2 * ( ( uQuality > 0.5 ? kNoise( vec2( around / 18.0, 3.0 ) ) : 0.5 ) - 0.5 );
  float top = smoothstep( start - 0.05, start + 0.05, vRel );
  float up = smoothstep( uGreenSlope - 0.1, uGreenSlope + 0.15, n.y );
  float gullyGreen = smoothstep( 0.55, 0.85, 1.0 - occ + 0.2 ) * smoothstep( start - 0.35, start - 0.1, vRel );
  float cliff = ( 1.0 - smoothstep( 0.1, 0.35, n.y ) ) * smoothstep( uCliff - 0.1, uCliff + 0.1, uQuality > 0.5 ? kNoise( vec2( around / 14.0 + 31.0, vKarstPos.y / 40.0 ) ) : 0.5 );
  float veg = max( max( vLedge, up ), max( top, gullyGreen ) ) * ( 1.0 - cliff * 0.85 );
  veg = smoothstep( 0.35, 0.6, veg + ( kNoise( vKarstPos.xz / 3.1 + vKarstPos.y * 0.21 ) - 0.5 ) * 0.4 ) * smoothstep( 2.5, 6.0, vKarstPos.y );
  gVeg = veg;

  // far canopy: stands of one tone (12 m noise), no crowns; crowns fade in under ~260 m
  float stand = kNoise( uQuality > 0.5 ? vKarstPos.xz / 12.0 + vKarstPos.y * 0.05 + vTower * 7.0 : vKarstPos.xz / 2.5 + vKarstPos.y * 0.5 );
  vec3 leaves = mix( uJungleDark, uJungle, smoothstep( 0.15, 0.85, stand ) );
  float near = uQuality > 0.5 ? 1.0 - smoothstep( 60.0, 260.0, length( vViewPosition ) ) : 0.0;
  if ( near > 0.0 && veg > 0.01 ) {
    // crowns: 3D cells in world space (no seam round the tower, none where walls turn into tops), warped so crowns differ
    vec3 q = vKarstPos / uCrown;
    q += ( vec3( kNoise( q.xz * 0.37 + q.y * 0.21 ), kNoise( q.zy * 0.37 + 17.0 ), kNoise( q.xy * 0.37 + 31.0 ) ) - 0.5 ) * 1.1;
    float f1, f2; vec3 off, id;
    kVoronoi3( q, f1, f2, off, id );
    // each crown a shade off its stand, a few sunlit ones
    float h = clamp( stand * 0.75 + kHash3( id + floor( vTower * 31.0 ) ) * 0.4, 0.0, 1.0 );
    vec3 g = mix( uJungleDark, uJungle, smoothstep( 0.2, 0.75, h ) );
    g = mix( g, uJungleLit, step( 0.93, kHash3( id * 1.3 ) ) * 0.7 );
    g *= 0.88 + 0.24 * kHash3( id * 1.7 );
    float gap = smoothstep( 0.0, 0.3, f2 - f1 );
    float dome = 1.0 - smoothstep( 0.1, 0.8, f1 );
    g *= ( 0.84 + 0.16 * gap ) * ( 0.88 + 0.18 * dome );
    // hue, shading and the crown normal all fade with distance: sub-pixel crowns would shimmer
    leaves = mix( leaves, g, near );
    // sphered crown normal: the offset to the crown's centre, in the surface plane
    vec3 d = -( off - n * dot( off, n ) ) / 0.6;
    float lift = sqrt( max( 0.0, 1.0 - dot( d, d ) ) );
    vec3 crownN = normalize( n * ( 0.35 + lift ) + d * 0.9 );
    gNormalW = normalize( mix( gNormalW, crownN, veg * 0.65 * near ) );
  }
  c = mix( c, leaves, veg );
  // baked cavity: gullies, overhangs and the waterline get less sky; canopy keeps a higher floor (leaves scatter light, and a
  // shadowed dome of dark crowns read as a black blob)
  c *= mix( mix( 0.38, 0.6, veg ), 1.0, occ );
  diffuseColor.rgb = c;
}`,ni=`
normal = normalize( ( viewMatrix * vec4( gNormalW, 0.0 ) ).xyz );
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif
`;function ri(e){return e===`low`?0:e===`medium`?1:2}function ii(e,t){e.userData.karst.uQuality.value=ri(t)}var ai={lime:11777977,limeWarm:8883085,stain:2040096,streak:1,rust:12089924,rustShare:.15,moss:7764079,jungle:4021802,jungleDark:3033634,jungleLit:7244862,notch:3421487,notchTop:2.5,oyster:11447462,greenSlope:.15,mossFrom:12,mossTo:55,cloak:.45,cliff:.62,crown:2.8,canopyFill:.22},oi=2.7;function si(e){let t=ai;return e.custom(`bay:karst`,n=>{let r=n(new R({color:16777215,roughness:.92,metalness:0,envMapIntensity:.6}));r.name=`karst`;let i={uRock:{value:null},uRockScale:{value:1/3},uLime:{value:new P(t.lime)},uLimeWarm:{value:new P(t.limeWarm)},uStain:{value:new P(t.stain)},uStreak:{value:t.streak},uMoss:{value:new P(t.moss)},uJungle:{value:new P(t.jungle)},uJungleDark:{value:new P(t.jungleDark)},uNotch:{value:new P(t.notch)},uGreenSlope:{value:t.greenSlope},uMossFrom:{value:t.mossFrom},uMossTo:{value:t.mossTo},uCloak:{value:t.cloak},uCliff:{value:t.cliff},uRust:{value:new P(t.rust)},uRustShare:{value:t.rustShare},uJungleLit:{value:new P(t.jungleLit)},uNotchTop:{value:t.notchTop},uOyster:{value:new P(t.oyster)},uQuality:{value:2},uCliffN:{value:null},uCliffScale:{value:1/oi},uCliffReady:{value:0},uCrown:{value:t.crown},uCanopyFill:{value:t.canopyFill}};if(r.userData.karst=i,e.watchSet(`rock`,(e,t)=>{i.uRock.value=e.albedo,i.uRockScale.value=1/t,r.needsUpdate=!0}),e.profile.pbrTextures&&typeof document<`u`){let t=e.texture(`bay:cliff-normal`,()=>{let e=new Kn().load(Zr,()=>{i.uCliffReady.value=1});return e.wrapS=e.wrapT=zn,e.colorSpace=``,e.anisotropy=4,e});i.uCliffN.value=t,t.image&&(i.uCliffReady.value=1)}return r.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Qr}`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${$r}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${ei}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${ti}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${ni}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * gVeg * uCanopyFill;`)},r.customProgramCacheKey=()=>`karst-v9`,r})}var ci=[`KT1`,`KT2`,`KT3`,`KT4`,`KM4`,`KP2`,`KH1R`,`KM3`,`KM5`,`KH2`,`KM1R`,`KM2`],li=de,ui=xr,di={0:0,1:1,2:1,3:2,4:-1},fi=2.7,pi=70,mi=new WeakMap;function hi(e,t){let n=r(e),i=n.lods[t];if(!i)throw Error(`karst model ${e} has no LOD ${t}`);let a=mi.get(i);if(a)return a;let o=i.pos,s=i.nrm,c=i.uv,l=new Float32Array(s.length);for(let e=0;e<s.length;e+=3){let t=s[e]/127,n=s[e+1]/127,r=s[e+2]/127,i=Math.hypot(t,n,r)||1;l[e]=t/i,l[e+1]=n/i,l[e+2]=r/i}return a={pos:Float32Array.from(o,e=>e/n.coordScale),nrm:l,uv:Float32Array.from(c,e=>e/65535),idx:i.idx},mi.set(i,a),a}function gi(e,t,n){let r=hi(e,t),i=new F;return i.setAttribute(`position`,new I(r.pos,3)),i.setAttribute(`normal`,new I(r.nrm,3)),i.setAttribute(`uv`,new I(r.uv,2)),i.setAttribute(`aLayer`,new I(new Float32Array(r.pos.length/3).fill(n),1)),i.setIndex(new I(r.idx,1)),i.computeBoundingSphere(),i}function _i(e,t=new A){let n=e.model;return t.compose(new D(n.x,n.foot,n.z),new Fn().setFromAxisAngle(new D(0,1,0),n.yaw),new D(n.height,n.height,n.height))}function vi(e,t){let n=e.length/3,r=new Map,i=new Uint32Array(n);for(let t=0;t<n;t++){let n=`${e[t*3].toFixed(5)},${e[t*3+1].toFixed(5)},${e[t*3+2].toFixed(5)}`,a=r.get(n);a===void 0&&r.set(n,a=t),i[t]=a}let a=new Float64Array(n*3);for(let n=0;n<t.length;n+=3){let r=t[n],o=t[n+1],s=t[n+2],c=e[o*3]-e[r*3],l=e[o*3+1]-e[r*3+1],u=e[o*3+2]-e[r*3+2],d=e[s*3]-e[r*3],f=e[s*3+1]-e[r*3+1],p=e[s*3+2]-e[r*3+2],m=[l*p-u*f,u*d-c*p,c*f-l*d];for(let e of[r,o,s])for(let t=0;t<3;t++)a[i[e]*3+t]+=m[t]}let o=new Float32Array(n*3);for(let e=0;e<n;e++){let t=i[e]*3,n=Math.hypot(a[t],a[t+1],a[t+2]);if(n>0)for(let r=0;r<3;r++)o[e*3+r]=a[t+r]/n}return o}function yi(e,t,n){let r=e.length/3,i=new Float32Array(r).fill(1/0);for(let a=0;a<r;a++){let r=-n[a*3],o=-n[a*3+1],s=-n[a*3+2];if(r===0&&o===0&&s===0)continue;let c=e[a*3],l=e[a*3+1],u=e[a*3+2],d=1/0;for(let n=0;n<t.length;n+=3){let i=t[n],a=t[n+1],f=t[n+2],p=e[a*3]-e[i*3],m=e[a*3+1]-e[i*3+1],h=e[a*3+2]-e[i*3+2],g=e[f*3]-e[i*3],_=e[f*3+1]-e[i*3+1],v=e[f*3+2]-e[i*3+2],y=o*v-s*_,b=s*g-r*v,x=r*_-o*g,S=p*y+m*b+h*x;if(Math.abs(S)<1e-12)continue;let C=1/S,ee=c-e[i*3],w=l-e[i*3+1],te=u-e[i*3+2],ne=(ee*y+w*b+te*x)*C;if(ne<0||ne>1)continue;let T=w*h-te*m,re=te*p-ee*h,ie=ee*m-w*p,ae=(r*T+o*re+s*ie)*C;if(ae<0||ne+ae>1)continue;let oe=(g*T+_*re+v*ie)*C;oe>1e-4&&oe<d&&(d=oe)}i[a]=d}return i}var bi=.5,xi=new WeakMap;function Si(e,t,n){let r=e.pos.length/3,i=new Float32Array(r*3),a=n>0?xi.get(e):void 0;if(n>0&&!a){let t=vi(e.pos,e.idx);a={nrm:t,thick:yi(e.pos,e.idx,t)},xi.set(e,a)}for(let o=0;o<r;o++){let r=e.pos[o*3]*t,s=e.pos[o*3+1]*t,c=e.pos[o*3+2]*t;if(a){let e=Math.min(n,a.thick[o]*t*bi);r-=a.nrm[o*3]*e,s=Math.min(Math.max(0,s-a.nrm[o*3+1]*e),Math.max(0,t-n)),c-=a.nrm[o*3+2]*e}i[o*3]=r,i[o*3+1]=s,i[o*3+2]=c}return i}function Ci(e,t,n=0){let r=e.model,i=hi(r.id,t),a=Math.cos(r.yaw),o=Math.sin(r.yaw),s=i.pos.length/3,c=Si(i,r.height,n),l=new Float32Array(s*3),u=new Float32Array(s);for(let e=0;e<s;e++){let t=c[e*3],n=c[e*3+2];l[e*3]=r.x+a*t+o*n,l[e*3+1]=r.foot+c[e*3+1],l[e*3+2]=r.z-o*t+a*n,u[e]=i.pos[e*3+1]}let d=new F;return d.setAttribute(`position`,new I(l,3)),d.setAttribute(`aLedge`,new I(new Float32Array(s),1)),d.setAttribute(`aCentre`,_a(s,r.x,r.z)),d.setAttribute(`aRel`,new I(u,1)),d.setAttribute(`aOcc`,new I(new Float32Array(s).fill(1),1)),d.setIndex(new I(Uint32Array.from(i.idx),1)),d.computeVertexNormals(),d.computeBoundingSphere(),d}function wi(e){let t=e.bands[0].y0,n=new F;return n.setAttribute(`position`,new M([e.x,t,e.z,e.x,t,e.z,e.x,t,e.z],3)),n.setAttribute(`aLedge`,new M([0,0,0],1)),n.setAttribute(`aCentre`,_a(3,e.x,e.z)),n.setAttribute(`aRel`,new M([0,0,0],1)),n.setAttribute(`aOcc`,new M([1,1,1],1)),n.setIndex([0,1,2]),n.computeVertexNormals(),n.computeBoundingSphere(),n}var Ti=`
attribute float aLayer;
varying float vLayer;
varying vec3 vModelWorld;
`,Ei=`
vLayer = aLayer;
{
  vec4 mw = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
  mw = batchingMatrix * mw;
  #endif
  vModelWorld = ( modelMatrix * mw ).xyz;
}
`,Di=`
uniform sampler2DArray uAlbedo;
uniform sampler2DArray uNormal;
uniform float uReady;
uniform sampler2D uCliffN;
uniform float uCliffReady;
uniform float uCliffScale;
uniform float uDetailNear;
varying float vLayer;
varying vec3 vModelWorld;
vec3 kmCliff( vec3 n, vec3 p ) {
  vec3 w = pow( abs( n ), vec3( 4.0 ) );
  w /= w.x + w.y + w.z;
  vec3 tx = texture2D( uCliffN, p.zy ).xyz * 2.0 - 1.0;
  vec3 ty = texture2D( uCliffN, p.xz ).xyz * 2.0 - 1.0;
  vec3 tz = texture2D( uCliffN, p.xy ).xyz * 2.0 - 1.0;
  tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
  ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
  tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
  return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
}
`,Oi=1.1,ki=new P(ai.lime),Ai=`
#ifdef USE_MAP
diffuseColor.rgb = uReady > 0.5 ? texture( uAlbedo, vec3( vMapUv, vLayer ) ).rgb * ${Oi.toFixed(3)} : vec3( ${ki.r.toFixed(3)}, ${ki.g.toFixed(3)}, ${ki.b.toFixed(3)} );
#endif
{
  float wetTop = 2.0 + 0.5 * sin( vModelWorld.x * 0.37 + vModelWorld.z * 0.21 ) * sin( vModelWorld.z * 0.53 );
  diffuseColor.rgb *= mix( 0.45, 1.0, smoothstep( wetTop - 0.8, wetTop + 0.4, vModelWorld.y ) );
}
`,ji=`vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;`;if(!Yn.normal_fragment_maps.includes(ji))throw Error(`model-karsts: three changed normal_fragment_maps`);var Mi=Yn.normal_fragment_maps.replace(ji,`vec3 mapN = uReady > 0.5 ? texture( uNormal, vec3( vNormalMapUv, vLayer ) ).xyz * 2.0 - 1.0 : vec3( 0.0, 0.0, 1.0 );`),Ni=`
if ( uCliffReady > 0.5 ) {
  float near = 1.0 - smoothstep( uDetailNear * 0.5, uDetailNear, length( vViewPosition ) );
  vec3 nW = normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
  vec3 dW = kmCliff( nW, vModelWorld * uCliffScale );
  normal = normalize( ( viewMatrix * vec4( normalize( mix( nW, dW, 0.6 * near ) ), 0.0 ) ).xyz );
}
`;function Pi(e,t){let n=new Uint8Array(4*e);for(let r=0;r<e;r++)n.set(t?[128,128,255,255]:[255,255,255,255],r*4);let r=new Mn(n,1,1,e);return r.needsUpdate=!0,r}var Fi={ultra:4096,high:4096,medium:512,low:256};function Ii(e,t,n){return Math.min((t===`albedo`?y:d)[e],Fi[n])}function Li(e,t,n){let r=0;for(let i of[`albedo`,`normal`])r+=Ii(e,i,t)**2*4*n;return Math.round(r*4/3)}var Ri=Promise.resolve(),zi=e=>{let t=Ri.then(e,e);return Ri=t.catch(()=>void 0),t};function Bi(){return new Promise(e=>{let t=setTimeout(e,50);typeof requestAnimationFrame<`u`&&requestAnimationFrame(()=>{clearTimeout(t),e()})})}var Vi=null,Hi={async pixels(e,t){Vi??=document.createElement(`canvas`);let n=Vi;n.width!==t&&(n.width=n.height=t);let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`no 2D canvas to decode the karst model maps`);let i=await(await fetch(e)).blob(),a=await createImageBitmap(i,{imageOrientation:`none`,premultiplyAlpha:`none`,colorSpaceConversion:`none`});return r.clearRect(0,0,t,t),r.drawImage(a,0,0,t,t),a.close(),r.getImageData(0,0,t,t).data},frame:Bi};function Ui(e,t,n,r,i=Hi){let a=r*r*4,o=new Mn(new Uint8Array(a*e.length),r,r,e.length);o.colorSpace=n===`albedo`?Dn:``,o.generateMipmaps=!0,o.minFilter=Tn,o.magFilter=L,o.wrapS=o.wrapT=kn,o.anisotropy=4;let s=o.image,c=()=>{s.data??=new Uint8Array(a*e.length)};return{tex:o,prepare:c,refill:l=>zi(async()=>{o.onUpdate=null,c();let u=s.data;for(let[s,c]of e.entries()){if(!l())return!1;let e=ui[`../render/materials/karst/models/${c.toLowerCase()}/lod${t}-${n}.webp`];if(!e)throw Error(`karst model ${c}: no lod${t}-${n}.webp in this build`);u.set(await i.pixels(e,r),s*a),o.addLayerUpdate(s),o.needsUpdate=!0,await i.frame()}if(!l())return!1;let d=()=>{s.data=null,o.onUpdate=null};return o.layerUpdates.size===0?d():o.onUpdate=()=>o.layerUpdates.size===0&&d(),!0})}}function Wi(e,t,n,r,i,a=Hi){let o=Ui(e,t,`albedo`,Ii(t,`albedo`,n),a),s=Ui(e,t,`normal`,Ii(t,`normal`,n),a),c=0;return{albedo:o,normal:s,fill:async()=>{let e=++c,t=()=>r()&&c===e;i(!1),o.prepare(),s.prepare();let[n,a]=await Promise.all([o.refill(t),s.refill(t)]);n&&a&&t()&&i(!0)}}}var Gi=[`medium`,`low`];function Ki(e,t,n){return Sr[`../render/materials/karst/models/arrays/karst-lod${e}-${t}-${n}.ktx2`]??null}var qi=2e3;function Ji(e,t=qi){let n=null,r=0,i;return{async load(a){clearTimeout(i),r++;try{return n??=e(),await(await n).loadAsync(a)}finally{if(--r===0){let e=n;i=setTimeout(()=>{r>0||n!==e||(n=null,e?.then(e=>e.dispose()).catch(()=>void 0))},t)}}}}}var Yi=new WeakMap;function Xi(e){let t=Yi.get(e);return t||(t=Ji(()=>E(async()=>{let{KTX2Loader:e}=await import(`./KTX2Loader-csHXa3Ko.js`);return{KTX2Loader:e}},__vite__mapDeps([0,1]),import.meta.url).then(({KTX2Loader:t})=>new t().setTranscoderPath(Wt().transcoder).detectSupport(e))),Yi.set(e,t)),t}async function Zi(e,t,n,r,i){let a;try{a=await $i(t,n,r,e)}catch(e){return i()?{kind:`webp`,reason:e}:{kind:`gone`}}return i()?a?{kind:`ktx2`,...a}:{kind:`webp`,reason:`no KTX2 arrays for these layers`}:(a?.albedo.dispose(),a?.normal.dispose(),{kind:`gone`})}function Qi(e){return e.mipmaps.reduce((e,t)=>e+t.data.byteLength,0)}async function $i(e,t,n,r){if(ci.join()!==n.join())return null;let i=Ki(e,`albedo`,Ii(e,`albedo`,t)),a=Ki(e,`normal`,Ii(e,`normal`,t));if(!i||!a)return null;let[o,s]=await Promise.all([r.load(i),r.load(a)]);for(let e of[o,s]){if(e.image.depth!==n.length)throw Error(`karst KTX2 array has ${e.image.depth} layers, the bay ${n.length}`);e.wrapS=e.wrapT=kn,e.minFilter=Tn,e.magFilter=L,e.anisotropy=4,e.needsUpdate=!0}return{albedo:o,normal:s}}function ea(e,t,n,r,i,a){let o=new tn(new Uint8Array([255,255,255,255]),1,1);o.needsUpdate=!0;let s=new R({color:16777215,roughness:.9,metalness:0,map:o,normalMap:o,envMapIntensity:.6});s.name=`karst-model-lod${t}`;let c=typeof document<`u`&&typeof createImageBitmap<`u`,l={uAlbedo:{value:null},uNormal:{value:null},uReady:{value:0},uCliffN:{value:null},uCliffReady:{value:0},uCliffScale:{value:1/fi},uDetailNear:{value:t===0?pi:0}};i.push(s,o),s.userData.karstModel=l;let u=()=>{},d=new Promise(e=>u=e);s.userData.karstReady=d;let f=()=>u();s.userData.karstStart=e=>f(e);let p=Pi(n.length,!1),m=Pi(n.length,!0);if(l.uAlbedo.value=p,l.uNormal.value=m,i.push(p,m),c){let e=null,o=()=>void e?.fill().catch(e=>console.warn(`karst model textures failed to load`,e)).finally(()=>u()),c=()=>{!e&&a()&&(e=Wi(n,t,r,a,e=>{l.uReady.value=+!!e,e&&u()}),l.uAlbedo.value=e.albedo.tex,l.uNormal.value=e.normal.tex,i.push(e.albedo.tex,e.normal.tex),s.userData.karstArrays={source:`webp`,bytes:Li(t,r,n.length)},o())},d=null,p=()=>{a()&&e&&(e.albedo.prepare(),e.normal.prepare(),o())},m=Gi.includes(r);m||c(),f=e=>{d||(d=e.domElement,d.addEventListener(`webglcontextrestored`,p),m&&Zi(Xi(e),t,r,n,a).then(e=>{if(e.kind===`gone`)return u();if(e.kind===`webp`){console.warn(`karst KTX2 arrays unavailable, decoding the WebP layers`,e.reason),c();return}l.uAlbedo.value=e.albedo,l.uNormal.value=e.normal,i.push(e.albedo,e.normal),l.uReady.value=1,s.userData.karstArrays={source:`ktx2`,format:e.albedo.format,normalFormat:e.normal.format,bytes:Qi(e.albedo)+Qi(e.normal)},u()}).catch(e=>{console.warn(`karst KTX2 arrays failed, decoding the WebP layers`,e),c()}))},s.onBeforeRender=e=>f(e),i.push({dispose:()=>d?.removeEventListener(`webglcontextrestored`,p)})}if(t===0&&e.profile?.pbrTextures&&typeof document<`u`){let t=e.texture(`bay:cliff-normal`,()=>{let e=new Kn().load(Zr,()=>{l.uCliffReady.value=1});return e.wrapS=e.wrapT=zn,e.colorSpace=``,e.anisotropy=4,e});l.uCliffN.value=t,t.image&&(l.uCliffReady.value=1)}return s.onBeforeCompile=e=>{Object.assign(e.uniforms,l),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Ti}`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${Ei}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Di}`).replace(`#include <map_fragment>`,Ai).replace(`#include <normal_fragment_maps>`,`${Mi}\n${Ni}`)},s.customProgramCacheKey=()=>`karst-model-v1-${t}`,s}var ta=class{tier;group=new N;batches=[null,null,null];towers=[];far=[];layers=[];ids=[];shown;get texturesPending(){return this.batches.some(e=>e!==null&&e.material.userData.karstModel?.uReady.value===0)}owned=[];disposed=!1;constructor(e,t,n,r=!0){if(this.tier=n,this.group.name=`karst-models`,e.karsts.forEach((e,t)=>{e.model&&(this.towers.push(t),this.far.push(pe(e)))}),this.shown=new Int8Array(this.towers.length).fill(-1),!this.towers.length)return;let i=n===`low`?[2]:[0,1,2],a=new A,o=new Set(this.towers.map(t=>e.karsts[t].model.id));this.layers=li.filter(e=>o.has(e));for(let o of i){let i=new Map(this.layers.map((e,t)=>[e,gi(e,o,t)])),s=0,c=0;for(let e of i.values())s+=e.getAttribute(`position`).count,c+=e.index.count;let l=new Ln(this.towers.length,s,c,ea(t,o,this.layers,n,this.owned,()=>!this.disposed));l.name=`karst-models-lod${o}`;let u=new Map([...i].map(([e,t])=>[e,l.addGeometry(t)]));this.towers.forEach((t,n)=>{let r=e.karsts[t],i=l.addInstance(u.get(r.model.id));l.setMatrixAt(i,_i(r,a)),l.setVisibleAt(i,!1),(this.ids[n]??=[])[o]=i});for(let e of i.values())e.dispose();l.receiveShadow=!0,l.castShadow=n===`low`&&r,l.perObjectFrustumCulled=!0,Kt(l.geometry),this.batches[o]=l,this.group.add(l),this.owned.push(l)}}async prepare(e){let t=this.batches.filter(e=>e!==null).map(e=>e.material);for(let n of t)n.userData.karstStart?.(e);if(await Promise.all(t.map(e=>e.userData.karstReady)),!this.disposed)for(let n of t){let t=n.userData.karstModel;if(t.uReady.value===1)for(let n of[t.uAlbedo.value,t.uNormal.value])try{n&&e.initTexture(n)}catch{}}}show(e,t){let n=t<0?-1:t===4&&this.far[e]?2:di[t];if(n===this.shown[e])return;let r=this.shown[e];r>=0&&this.batches[r].setVisibleAt(this.ids[e][r],!1),n>=0&&this.batches[n].setVisibleAt(this.ids[e][n],!0),this.shown[e]=n}shownAt(e){return this.shown[e]}setShadows(e){for(let t of this.batches)t&&(t.castShadow=e&&this.tier===`low`)}dispose(){this.disposed=!0;for(let e of this.owned)e.dispose();this.owned.length=0}},na={0:48,1:24,2:12,3:10,4:7},ra={0:5,1:12,2:22,3:28,4:45},ia={0:160,1:80,2:24,3:18,4:12};function aa(e,t){return Math.min(ia[t],Math.max(na[t],Math.ceil(2*Math.PI*e.extent/ra[t])))}var oa={0:3,1:8},sa={2:2,3:2.4,4:9},ca=.3,la=.5,ua=e=>1/Math.cos(Math.PI/e/2);function da(e,t){let n=e.bands,r=[{y:n[0].y0,band:0,kind:`edge`}];if(n.forEach((e,t)=>{t>0&&e.step&&r.push({y:e.y0,band:t-1,kind:`hard-lo`},{y:e.y0,band:t,kind:`hard-hi`}),r.push({y:(e.y0+e.y1)/2,band:t,kind:`mid`})}),r.push({y:e.top,band:n.length-1,kind:`top`}),t===0)return r;if(t===1)return r.filter(e=>e.kind!==`mid`||e.band%2==0);let i=sa[t],a=t=>e.bands[t.band].lobes[0].r,o=[],s=a(r[0]);return r.forEach((e,t)=>{if(e.kind!==`mid`){o.push(e),s=a(e);return}let n=r.slice(t+1).find(e=>e.kind===`mid`);(Math.abs(a(e)-s)>i||n&&Math.abs(a(n)-s)>i||!n)&&(o.push(e),s=a(e))}),o}function fa(e,t,n){let r=e.seed%997,i=t*(e.extent/5),a=.5+.25*Math.sin(i*.53+n*.07+r)+.25*Math.sin(i*.21-n*.031+r*1.7),o=Math.max(4,Math.round(e.extent*Math.PI*2/7)),s=Math.sin(t*3+r)*.9+Math.sin(n*.035+r)*.5,c=(.5+.5*Math.sin(t*2.3+r*.7))*Math.max(0,Math.cos(t*o+s))**8;return ca*Math.min(1,.7*a+.3*c)}function pa(e,t,n){let r=e.seed%991,i=Math.max(3,Math.round(e.extent*Math.PI*2/(6+9*(r%7/6)))),a=.6*Math.sin(n*.045+r)+.35*Math.sin(t*2+n*.02+r*.3),o=Math.max(0,Math.cos(t*i+a)),s=.55+.45*Math.sin(t*1.7+n*.03+r*1.3);return o*o*s}function ma(e,t){return Math.min(1,Math.max(0,(e-3)/4))*Math.min(1,Math.max(0,(t.top-e)/Math.max(4,(t.top-3)*.25)))}var ha=1.5;function ga(e,t,n=0,r=0){if(e.model&&(t!==4||pe(e)))return n>0?Ci(e,2,n+ha):wi(e);let i=aa(e,t),a=t<=1?ua(i):1,o=[],s=[];for(let e=0;e<i;e++){let t=(e+.5)/i*Math.PI*2;o.push(t),s.push([Math.cos(t),Math.sin(t)])}let c=t=>{let n=e.bands[t.band],r=Math.min(Math.max(t.y,n.y0+1e-6),n.y1-1e-6);return Float64Array.from(s,t=>Jt(e,t[0],t[1],r)*a)},l=[],u=[],d=[],f=[],p=new Float64Array(i),m=new Float64Array(i),h=(a,c,f)=>{let h=l.length/3,g=r>0&&t<=1?r*ma(a,e):0;for(let r=0;r<i;r++)m[r]=g>0?g*pa(e,o[r],a):0,p[r]=Math.max(.2,c[r]-(t<=1?fa(e,o[r],a):0)-n-m[r]);return s.forEach((t,n)=>{l.push(e.x+t[0]*p[n],a,e.z+t[1]*p[n]),u.push(f);let o=(p[(n+i-1)%i]+p[(n+1)%i])/2,s=Math.max(0,o-p[n]),c=Math.min(1,Math.max(0,a/3));d.push(Math.max(.3,(1-Math.min(.45,s*.35)-.25*(m[n]/Math.max(1,r)))*(.55+.45*c)))}),h},g=(e,t)=>{for(let n=0;n<i;n++){let r=(n+1)%i;f.push(e+n,t+n,e+r,e+r,t+n,t+r)}},_=da(e,t),v=_.map(c),y=h(_[0].y,v[0],0);for(let e=1;e<_.length;e++){let n=_[e-1],r=_[e];if(n.kind===`hard-lo`&&r.kind===`hard-hi`){g(h(n.y,v[e-1],1),h(r.y,v[e],1)),y=h(r.y,v[e],0);continue}let i=t<=1?Math.max(1,Math.ceil((r.y-n.y)/oa[t])):1;for(let t=1;t<=i;t++){let a=t/i,o=v[e-1].map((t,n)=>t+(v[e][n]-t)*a),s=h(n.y+(r.y-n.y)*a,o,+(r.kind===`top`&&t===i));g(y,s),y=s}}let b=Jt(e,1,0,e.top-1e-6),x=l.length/3;l.push(e.x,e.top+Math.min(la,.25*b),e.z),u.push(1),d.push(1);for(let e=0;e<i;e++)f.push(y+e,x,y+(e+1)%i);let S=new F;S.setAttribute(`position`,new M(l,3)),S.setAttribute(`aLedge`,new M(u,1)),S.setAttribute(`aCentre`,_a(l.length/3,e.frame?.[0]??e.x,e.frame?.[1]??e.z));let C=new Float32Array(l.length/3),[ee,w]=e.relSpan??[e.bands[0].y0,e.top];for(let e=0;e<C.length;e++)C[e]=Math.min(1,Math.max(0,(l[e*3+1]-ee)/(w-ee)));S.setAttribute(`aRel`,new M(C,1)),S.setIndex(f),S.computeVertexNormals();let te=S.getAttribute(`normal`);for(let e=0;e<d.length;e++){let t=Math.min(1,Math.max(0,-te.getY(e)/.4));d[e]=d[e]*(1-.4*t)}return S.setAttribute(`aOcc`,new M(d,1)),S.computeBoundingSphere(),S}function _a(e,t,n){let r=new Float32Array(e*2);for(let i=0;i<e;i++)r[i*2]=t,r[i*2+1]=n;return new M(r,2)}var va={ultra:1,high:1,medium:.5,low:0},ya=[1.8,3.6],ba=.2,xa=.45,Sa=.7,Ca=[2,3.6],wa=.45,B=e=>{let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)},V=new D,H=new D,U=new D,Ta=new D,W=new D;function Ea(e,t,n=12,r=40,i=Ca,a=wa){let o=[],s=e.getAttribute(`position`),c=e.index??{count:s.count,getX:e=>e};e.computeBoundingBox();let l=e.boundingBox.min.y,u=e.boundingBox.max.y,d=e=>{V.fromBufferAttribute(s,c.getX(e)),H.fromBufferAttribute(s,c.getX(e+1)),U.fromBufferAttribute(s,c.getX(e+2)),W.subVectors(H,V).cross(Ta.subVectors(U,V));let t=W.length()/2;if(t<1e-6)return 0;W.normalize();let n=(V.y+H.y+U.y)/3,r=(n-l)/(u-l);return n<4||W.y<xa&&(r<Sa||W.y<-.1)?0:t},f=0;for(let e=0;e<c.count;e+=3)f+=d(e);let p=Math.max(r,f/n),m=B(t)*p;for(let e=0;e<c.count&&o.length<n*9;e+=3){let r=d(e);if(r!==0)for(m+=r;m>=p&&o.length<n*9;){m-=p;let n=t*997+e+o.length,r=B(n+1),s=B(n+2);r+s>1&&(r=1-r,s=1-s);let c=i[0]+(i[1]-i[0])*B(n+3),l=V.x+(H.x-V.x)*r+(U.x-V.x)*s-W.x*c*a,u=V.y+(H.y-V.y)*r+(U.y-V.y)*s-W.y*c*a,d=V.z+(H.z-V.z)*r+(U.z-V.z)*s-W.z*c*a;o.push(l,u,d,c,B(n+4)*Math.PI*2,B(n+5),W.x,W.y,W.z)}}let h=o.length/9;for(let e=h-1;e>0;e--){let n=Math.floor(B(t*31+e+.5)*(e+1));for(let t=0;t<9;t++)[o[e*9+t],o[n*9+t]]=[o[n*9+t],o[e*9+t]]}return Float32Array.from(o)}var Da={ultra:1,high:1,medium:0,low:0};function Oa(e){let t=new pn(1,e),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=.82+.3*B(Math.round((n.getX(e)*7+n.getY(e)*13+n.getZ(e)*17)*100));n.setXYZ(e,n.getX(e)*t,n.getY(e)*t*.78,n.getZ(e)*t)}t.deleteAttribute(`uv`);let r=new Float32Array(n.count*3);for(let e=0;e<n.count;e++){let t=n.getX(e),i=n.getY(e)/.78,a=n.getZ(e),o=Math.hypot(t,i,a)||1;r.set([t/o,i/o,a/o],e*3)}return t.setAttribute(`normal`,new M(r,3)),t}function ka(){let e=[],t=[],n=[],r=[],i=i=>{let a=e.length/3;for(let[r,a]of i.entries()){e.push(...a),t.push(+(r===1||r===2),+(r>=2));let i=Math.hypot(a[0],a[1]/.8,a[2])||1;n.push(a[0]/i,a[1]/.8/i+.35,a[2]/i)}r.push(a,a+1,a+2,a,a+2,a+3)};for(let e=0;e<3;e++){let t=e/3*Math.PI,n=Math.cos(t)*1.15,r=Math.sin(t)*1.15;i([[-n,-.7,-r],[n,-.7,r],[n,1,r],[-n,1,-r]])}i([[-1.1,.55,-1.1],[1.1,.75,-1.1],[1.1,.75,1.1],[-1.1,.55,1.1]]);let a=new F;a.setAttribute(`position`,new M(e,3)),a.setAttribute(`uv`,new M(t,2));let o=new M(n,3);for(let e=0;e<o.count;e++){let t=Math.hypot(o.getX(e),o.getY(e),o.getZ(e))||1;o.setXYZ(e,o.getX(e)/t,o.getY(e)/t,o.getZ(e)/t)}return a.setAttribute(`normal`,o),a.setIndex(r),a}var Aa=.5,ja=.2;function Ma(e){let t=new Kn().load(e,void 0,void 0,t=>console.warn(`leaf atlas ${e} failed; cards stay untextured`,t));return t.colorSpace=Dn,t.anisotropy=4,t}var Na=128;function Pa(){let e=Na,t=new Uint8Array(65536),n=new Float32Array(16384),r=new Float32Array(16384);for(let t=0;t<260;t++){let i=Math.sqrt(B(t*3+1))*.44,a=B(t*3+2)*Math.PI*2,o=.5+Math.cos(a)*i,s=.55+Math.sin(a)*i*.85,c=.035+.035*B(t*5+7),l=c*.45,u=B(t*7+3)*Math.PI,d=.85+.15*B(t*11+5)-.12*(1-i/.44),f=Math.cos(u),p=Math.sin(u),m=Math.max(0,Math.floor((o-c)*e)),h=Math.min(127,Math.ceil((o+c)*e)),g=Math.max(0,Math.floor((s-c)*e)),_=Math.min(127,Math.ceil((s+c)*e));for(let t=g;t<=_;t++)for(let i=m;i<=h;i++){let a=(i+.5)/e-o,u=(t+.5)/e-s,m=(a*f+u*p)/c,h=(-a*p+u*f)/l;m*m+h*h<=1&&(n[t*e+i]=d,r[t*e+i]=1)}}for(let e=0;e<16384;e++){let i=Math.round(255*Math.min(1,n[e]));t.set([i,i,i,r[e]>0?255:0],e*4)}let i=new tn(t,e,e,Un);return i.colorSpace=Dn,i.generateMipmaps=!0,i.minFilter=Tn,i.magFilter=L,i.needsUpdate=!0,i}var Fa=class{group=new N;towers;totals;planted;floors;geometry;detail;material=new R({color:16777215,roughness:.95,metalness:0,envMapIntensity:.5});prewarm;share;cards;leaves;photo;constructor(e,t,n={}){this.cards=n.cards??!1,this.photo=this.cards&&!!n.leafUrl,this.leaves=this.cards?n.leafUrl&&typeof document<`u`?Ma(n.leafUrl):Pa():null,this.leaves&&(this.material.map=this.leaves,this.material.alphaTest=.5,this.material.side=2),this.group.name=`karst-greens`,this.material.name=`karst-greens`;let r=this.photo?ja:this.cards?Aa:ai.canopyFill,i=this.cards;this.material.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * ${r.toFixed(3)};`),i&&(e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif`))},this.material.customProgramCacheKey=()=>this.cards?`karst-greens-fill-${r.toFixed(3)}`:`karst-greens-fill`,this.share=va[t],this.detail=Da[t],this.geometry=this.cards?ka():Oa(this.detail),this.prewarm=new Hn(this.geometry,this.material,1),this.prewarm.name=`karst-greens-prewarm`,this.prewarm.setMatrixAt(0,new A().makeScale(0,0,0)),this.prewarm.setColorAt(0,new P),this.prewarm.receiveShadow=!0,this.prewarm.frustumCulled=!1,this.prewarm.visible=!1,this.group.add(Zn(this.prewarm)),this.towers=Array(e).fill(null),this.totals=Array(e).fill(0),this.planted=new Uint8Array(e),this.floors=new Uint16Array(e),this.syncPrewarm()}keep(e,t){this.floors[e]=t,this.syncPrewarm()}syncPrewarm(){this.prewarm.userData.prewarm=this.share>0||this.floors.some(e=>e>0)}wants(e){return this.share>0||this.floors[e]>0}shown(e){let t=this.totals[e];return Math.max(Math.round(t*this.share),Math.min(t,this.floors[e]))}has(e){return this.planted[e]===1}plant(e,t){if(this.planted[e])return;this.planted[e]=1;let n=t.length/9;if(this.totals[e]=n,n===0)return;let r=Math.min(n,this.floors[e]),i=[];for(let e=0;e<r;e++)i.push(Math.floor(e*n/r));let a=new Set(i);for(let e=0;e<n;e++)a.has(e)||i.push(e);let o=new A,s=new Fn,c=new D,l=new D,u=new D(0,1,0),d=new P(ai.jungleDark),f=new P(ai.jungle),p=new P(ai.jungleLit),m=new P,h=new Hn(this.geometry,this.material,n);h.name=`karst-greens-${e}`;for(let e=0;e<n;e++){let n=i[e]*9,r=t[n+3];o.compose(l.set(t[n],t[n+1],t[n+2]),s.setFromAxisAngle(u,t[n+4]),c.set(r,r,r)),h.setMatrixAt(e,o);let a=t[n+5];this.photo?h.setColorAt(e,m.setRGB(.26+.1*a,.32+.12*a,.17+.06*a)):h.setColorAt(e,a>.85?m.copy(f).lerp(p,(a-.85)/.15):m.copy(d).lerp(f,a/.85))}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h.computeBoundingSphere(),h.receiveShadow=!0,h.visible=!1,h.count=this.shown(e),this.group.add(h),this.towers[e]=h}get count(){let e=0;for(let t of this.towers)t?.visible&&(e+=t.count);return e}setQuality(e){if(this.share=va[e],this.syncPrewarm(),!this.cards&&Da[e]!==this.detail){this.detail=Da[e],this.geometry.dispose(),this.geometry=Oa(this.detail);for(let e of this.towers)e&&(e.geometry=this.geometry);this.prewarm.geometry=this.geometry}this.towers.forEach((e,t)=>{e&&(e.count=this.shown(t))})}show(e,t){let n=this.towers[e];n&&(n.visible=t&&n.count>0)}dispose(){for(let e of this.towers)e?.dispose();this.prewarm.dispose(),this.geometry.dispose(),this.material.dispose(),this.leaves?.dispose(),this.group.clear()}};function Ia(e,t,n,r,i=ya,a=ba){let o=e.getAttribute(`position`),s=e.index??{count:o.count,getX:e=>e},c=s.count/3,l=new Float32Array(c),u=0;for(let e=0;e<c;e++){V.fromBufferAttribute(o,s.getX(e*3)),H.fromBufferAttribute(o,s.getX(e*3+1)),U.fromBufferAttribute(o,s.getX(e*3+2)),W.subVectors(H,V).cross(Ta.subVectors(U,V));let t=W.length()/2,r=(V.y+H.y+U.y)/3;if(t<1e-6||r<4)continue;W.normalize();let i=n((V.x+H.x+U.x)/3,r,(V.z+H.z+U.z)/3,W.y,W.x,W.z);l[e]=t*i*i,u+=l[e]}let d=Math.min(r,Math.round(u/25)),f=[];if(d<=0)return Float32Array.from(f);let p=u/d,m=B(t)*p;for(let e=0;e<c&&f.length<d*9;e++)if(l[e])for(m+=l[e];m>=p&&f.length<d*9;){m-=p,V.fromBufferAttribute(o,s.getX(e*3)),H.fromBufferAttribute(o,s.getX(e*3+1)),U.fromBufferAttribute(o,s.getX(e*3+2)),W.subVectors(H,V).cross(Ta.subVectors(U,V)).normalize();let n=t*997+e+f.length,r=B(n+1),c=B(n+2);r+c>1&&(r=1-r,c=1-c);let l=i[0]+(i[1]-i[0])*B(n+3);f.push(V.x+(H.x-V.x)*r+(U.x-V.x)*c-W.x*l*a,V.y+(H.y-V.y)*r+(U.y-V.y)*c-W.y*l*a,V.z+(H.z-V.z)*r+(U.z-V.z)*c-W.z*l*a,l,B(n+4)*Math.PI*2,B(n+5),W.x,W.y,W.z)}return Float32Array.from(f)}var G={plank:new P(8018492),plankDark:new P(6177840),bamboo:new P(10126422),drum:new P(2973600),walls:[7317688,5217941,10274209,15261640].map(e=>new P(e)),roofs:[8293006,9067068,3108776].map(e=>new P(e)),door:new P(3812900),window:new P(2371642),hull:new P(5913122),deck:new P(8018492),cabin:new P(15921126),mast:new P(4863012),sails:[8011298,9325098,10246702].map(e=>new P(e)),batten:new P(4072468),sand:new P(14207392),wetSand:new P(11049072),buoy:new P(13123626),buoyBand:new P(15921126)},La=24,Ra=26,za=.9,Ba=.32,Va=1.5,Ha=class{pos=[];col=[];tri(e,t,n,r,i){if(i){let r=(t[1]-e[1])*(n[2]-e[2])-(t[2]-e[2])*(n[1]-e[1]),a=(t[2]-e[2])*(n[0]-e[0])-(t[0]-e[0])*(n[2]-e[2]),o=(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);r*i[0]+a*i[1]+o*i[2]<0&&([t,n]=[n,t])}for(let i of[e,t,n])this.pos.push(i[0],i[1],i[2]),this.col.push(r.r,r.g,r.b)}quad(e,t,n,r,i,a){this.tri(e,t,n,i,a),this.tri(e,n,r,i,a)}geometry(){let e=new F;return e.setAttribute(`position`,new M(this.pos,3)),e.setAttribute(`color`,new M(this.col,3)),e.computeVertexNormals(),e}};function Ua(e,t,n){let r=Math.cos(n),i=Math.sin(n);return(n,a,o)=>[e+r*n+i*o,a,t-i*n+r*o]}function K(e,t,n,r){let i=Math.cos(e),a=Math.sin(e);return[i*t+a*r,n,-a*t+i*r]}function Wa(e,t,n,r,i,a,o,s,c,l,u=!1){let d=(e,n,l)=>t(r+e*o,i+n*s,a+l*c);e.quad(d(-1,1,-1),d(1,1,-1),d(1,1,1),d(-1,1,1),l,[0,1,0]),u&&e.quad(d(-1,-1,-1),d(1,-1,-1),d(1,-1,1),d(-1,-1,1),l,[0,-1,0]),e.quad(d(1,-1,-1),d(1,1,-1),d(1,1,1),d(1,-1,1),l,K(n,1,0,0)),e.quad(d(-1,-1,-1),d(-1,1,-1),d(-1,1,1),d(-1,-1,1),l,K(n,-1,0,0)),e.quad(d(-1,-1,1),d(1,-1,1),d(1,1,1),d(-1,1,1),l,K(n,0,0,1)),e.quad(d(-1,-1,-1),d(1,-1,-1),d(1,1,-1),d(-1,1,-1),l,K(n,0,0,-1))}function Ga(e,t,n,r,i,a,o,s,c=s){for(let l=0;l<o;l++){let u=l/o*Math.PI*2,d=(l+1)/o*Math.PI*2,f=(e,i)=>[t+Math.cos(e)*r,i,n+Math.sin(e)*r],p=(u+d)/2;e.quad(f(u,i),f(d,i),f(d,a),f(u,a),s,[Math.cos(p),0,Math.sin(p)]),c&&e.tri(f(u,a),f(d,a),[t,a,n],c,[0,1,0])}}var Ka=e=>{let t=Math.sin(e*12.9898+4.1414)*43758.5453;return t-Math.floor(t)};function qa(e,t){let n=[];for(let r of e)t(r.id)&&r.shape.kind===`box`&&n.push({center:r.shape.center,half:r.shape.half,yaw:r.shape.yaw??0});return n}function Ja(e,t){let n=ne,r=e.arch,i=n.width/2,a=(e,t,n)=>[r.x-e*r.fz+t*r.fx,n,r.z+e*r.fx+t*r.fz],o=e=>{let t=Math.min(1,Math.max(-1,e/i));return n.soffit+n.rise*(1-t*t)+.25},s=-i-1,c=i+1,l=[r.fx,0,r.fz],u=[-r.fx,0,-r.fz],d=new P(1,1,1);for(let e=0;e<La;e++){let r=s+(c-s)*e/La,i=s+(c-s)*(e+1)/La,f=o(r),p=o(i);t.quad(a(r,-n.depth/2,f),a(i,-n.depth/2,p),a(i,n.depth/2,p),a(r,n.depth/2,f),d,[0,-1,0]),t.quad(a(r,n.depth/2,f),a(i,n.depth/2,p),a(i,n.depth/2,n.spanTop),a(r,n.depth/2,n.spanTop),d,l),t.quad(a(r,-n.depth/2,f),a(i,-n.depth/2,p),a(i,-n.depth/2,n.spanTop),a(r,-n.depth/2,n.spanTop),d,u)}t.quad(a(s,-n.depth/2,n.spanTop),a(c,-n.depth/2,n.spanTop),a(c,n.depth/2,n.spanTop),a(s,n.depth/2,n.spanTop),d,[0,1,0])}function Ya(e){return Math.min(1,Math.max(0,(e-ne.soffit)/(ne.spanTop-ne.soffit)))}var Xa=[[7,-1],[7,8],[6.3,8.6],[5.4,9.4],[4.4,10.6],[3,11],[0,11]];function Za(e,t){let n=e.cave.axis,r=n.length,i=n.map(([e,t],i)=>{let[a,o]=n[Math.max(0,i-1)],[s,c]=n[Math.min(r-1,i+1)],l=Math.hypot(s-a,c-o);return{x:e,z:t,fx:(s-a)/l,fz:(c-o)/l}}),a=le.width/14,o=Xa.map(([e,t])=>[e*a,t]),s=Xa.slice(0,-1).map(([e,t])=>[-e*a,t]).reverse(),c=[...o,...s],u=new P(1,1,1),d=(e,t,n)=>[e.x-t*e.fz,n,e.z+t*e.fx];for(let e=0;e<r-1;e++){let n=i[e],r=i[e+1];for(let e=0;e<c.length-1;e++){let[i,a]=c[e],[o,s]=c[e+1],l=(i+o)/2,f=(a+s)/2,p=[n.fz*l,-Math.max(0,f-8),-n.fx*l];t.quad(d(n,i,a),d(r,i,a),d(r,o,s),d(n,o,s),u,p)}}let f=l[0].footprint,p=0,m=0;for(let e=0;e<f.length;e+=2)p+=f[e],m+=f[e+1];p/=f.length/2,m/=f.length/2;let h=Math.hypot(n[0][0]-p,n[0][1]-m)<Math.hypot(n[r-1][0]-p,n[r-1][1]-m)?0:r-1,g=i[h],_=h===0?1:-1;for(let e=0;e<Ra;e++){let n=_*(1+7*Ka(e*3+1)),r=(Ka(e*3+2)-.5)*le.width*.6,i=.18+.25*Ka(e*3+3),a=za*(.4+.6*Ka(e*7+5)),o=g.x-r*g.fz+n*g.fx,s=g.z+r*g.fx+n*g.fz,c=le.ceil,l=[o,c-a,s];for(let n=0;n<4;n++){let r=n/4*Math.PI*2+e,a=(n+1)/4*Math.PI*2+e;t.tri([o+Math.cos(r)*i,c,s+Math.sin(r)*i],[o+Math.cos(a)*i,c,s+Math.sin(a)*i],l,u,[Math.cos((r+a)/2),-.2,Math.sin((r+a)/2)])}}}function Qa(e,t,n,r){let i=Ua(e.x,e.z,e.yaw),a=Math.max(2,Math.round(e.hz*2/.6));for(let r=0;r<a;r++){let o=-e.hz+2*e.hz*r/a,s=-e.hz+2*e.hz*(r+1)/a,c=r%2?n:n.clone().multiplyScalar(.86);t.quad(i(-e.hx,e.top,o),i(e.hx,e.top,o),i(e.hx,e.top,s),i(-e.hx,e.top,s),c,[0,1,0])}let o=e.top-.35,s=(n,r,a,s,c)=>t.quad(i(n,o,r),i(a,o,s),i(a,e.top,s),i(n,e.top,r),G.plankDark,c);if(s(e.hx,-e.hz,e.hx,e.hz,K(e.yaw,1,0,0)),s(-e.hx,-e.hz,-e.hx,e.hz,K(e.yaw,-1,0,0)),s(-e.hx,e.hz,e.hx,e.hz,K(e.yaw,0,0,1)),s(-e.hx,-e.hz,e.hx,-e.hz,K(e.yaw,0,0,-1)),!r)return;let c=Math.max(2,Math.floor(e.hz*2/Va));for(let n of[-1,1])for(let r=0;r<c;r++){let a=-e.hz+Ba+(2*e.hz-2*Ba)*r/Math.max(1,c-1),[s,,l]=i(n*(e.hx-Ba-.05),0,a);Ga(t,s,l,Ba,-.3,o,6,G.drum,null)}}function $a(e,t,n){let[r,i,a]=e.half,o=Ua(e.center[0],e.center[2],e.yaw),s=e.center[1]-i,c=s+i*2*.62,l=s+i*2,u=G.walls[Math.floor(Ka(t)*G.walls.length)],d=G.roofs[Math.floor(Ka(t+1)*G.roofs.length)],f=.3;Wa(n,o,e.yaw,0,(s+c)/2,0,r-f,(c-s)/2,a-f,u);let p=(e,t,n)=>o(e*r,n,t);for(let t of[-1,1])n.quad(p(t,-a,c),p(t,a,c),o(0,l,a),o(0,l,-a),d,K(e.yaw,t,1,0));for(let t of[-1,1])n.tri(o(-(r-f),c,t*(a-f)),o(r-f,c,t*(a-f)),o(0,l-.05,t*(a-f)),u,K(e.yaw,0,0,t));let m=a-f+.02;n.quad(o(-.45,s+.05,m),o(.45,s+.05,m),o(.45,s+1.9,m),o(-.45,s+1.9,m),G.door,K(e.yaw,0,0,1));for(let t of[-1,1]){let i=t*(r-f+.02);n.quad(o(i,s+1.1,-.6),o(i,s+1.1,.6),o(i,s+1.9,.6),o(i,s+1.9,-.6),G.window,K(e.yaw,t,0,0))}}function eo(e,t,n){for(let r of e.junks){let e=Ua(r.x,r.z,r.yaw),i=r.length/2,a=r.beam/2,o=e=>a*(e<0?1-(-e)**2.4*.92:1-e**4*.35),s=e=>1.6+.9*e*e,c=-.7;for(let n=0;n<12;n++){let a=-1+2*n/12,l=-1+2*(n+1)/12,u=a*i,d=l*i;for(let n of[-1,1]){let i=o(a),f=o(l);t.quad(e(n*i*.7,c,u),e(n*f*.7,c,d),e(n*f,s(l),d),e(n*i,s(a),u),G.hull,K(r.yaw,n,-.2,0))}t.quad(e(-o(a),s(a),u),e(o(a),s(a),u),e(o(l),s(l),d),e(-o(l),s(l),d),G.deck,[0,1,0])}t.quad(e(-o(1)*.7,c,i),e(o(1)*.7,c,i),e(o(1),s(1),i),e(-o(1),s(1),i),G.hull,K(r.yaw,0,0,1));let l=r.length/3;Wa(t,e,r.yaw,0,3.6,l,a-.6,1.05,3.3,G.cabin),Wa(t,e,r.yaw,0,5.15,l,a-.5,.3,3.4,G.hull);for(let[a,o,c]of[[-6,10,0],[0,13,1],[6,9,2]]){let[l,,u]=e(0,0,a);Ga(t,l,u,.14,s(a/i),3+o,6,G.mast),to(n,e,r.yaw,a,3,3+o,G.sails[c])}}}function to(e,t,n,r,i,a,o){let s=Math.max(4,Math.round((a-i)/1.3)),c=i+.3,l=e=>{let t=e/s;return[r-1.2-.9*t,r+1.4+1.5*Math.sqrt(t)]},u=K(n,1,0,0);for(let n=0;n<s;n++){let i=c+(a-c)*n/s,d=c+(a-c)*(n+1)/s,[f,p]=l(n),[m,h]=l(n+1),g=Math.min(p,h)-.35,_=o.clone().multiplyScalar(.92+.12*Ka(n+r));e.quad(t(0,i,f),t(0,i,p),t(0,(i+d)/2,g),t(0,(i+d)/2,(f+m)/2),_,u),e.quad(t(0,(i+d)/2,(f+m)/2),t(0,(i+d)/2,g),t(0,d,h),t(0,d,m),_,u),e.quad(t(.02,d-.1,m),t(.02,d-.1,h),t(.02,d,h),t(.02,d,m),G.batten,u)}}function no(e,t){let n=[0,e.hx*.5,e.hx*.85,e.hx];for(let t=1;t<=6;t++)n.push(e.hx+e.edge*t/6);let r=t=>i+(e.top-i)*(1-ar(0,e.edge,Math.max(0,t-e.hx)));for(let i=0;i<n.length-1;i++){let a=n[i],o=n[i+1],s=r(a),c=r(o),l=c<.25?G.wetSand:G.sand;for(let n=0;n<40;n++){let r=n/40*Math.PI*2,i=(n+1)/40*Math.PI*2,u=[e.x+Math.cos(r)*a,s,e.z+Math.sin(r)*a],d=[e.x+Math.cos(i)*a,s,e.z+Math.sin(i)*a],f=[e.x+Math.cos(i)*o,c,e.z+Math.sin(i)*o],p=[e.x+Math.cos(r)*o,c,e.z+Math.sin(r)*o];a===0?t.tri(u,f,p,l,[0,1,0]):t.quad(u,d,f,p,l,[0,1,0])}}}function ro(e){let t=new Ha,n=new Ha;e.proc?.length||(Ja(e,t),Za(e,n));let r=[t,n].map((t,n)=>{let r=t.geometry();r.deleteAttribute(`color`);let i=r.getAttribute(`position`).count,a=n===0?e.arch:e.cave;r.setAttribute(`aLedge`,new M(new Float32Array(i),1)),r.setAttribute(`aCentre`,_a(i,a.x,a.z));let o=new Float32Array(i),s=r.getAttribute(`position`);if(n===0)for(let e=0;e<i;e++)o[e]=Ya(s.getY(e));return r.setAttribute(`aRel`,new M(o,1)),r.setAttribute(`aOcc`,new M(new Float32Array(i).fill(.8),1)),r}),i=cr(r,!1);for(let e of r)e.dispose();let a=new Ha;for(let t of e.dry)t.kind===`cove`?no(t,a):t.kind===`raft`?Qa(t,a,G.bamboo,!0):Qa(t,a,G.plank,t.hx===en.deckHalfW);qa(e.colliders,e=>e.startsWith(`house-`)).forEach((t,n)=>$a(t,e.houses[n*8+6],a));let o=new Ha;eo(e,a,o);let s=e.buoys;for(let e=0;e<s.length;e+=2)Ga(a,s[e],s[e+1],.48,-.35,.5,8,G.buoy,null),Ga(a,s[e],s[e+1],.48,.5,.75,8,G.buoyBand),Ga(a,s[e],s[e+1],.36,.75,1.1,8,G.buoy);return{rock:i,painted:a.geometry(),sails:o.geometry()}}var io=4164184,ao=.7,oo=.6,so=.9,co=2778182,lo=[20,600],uo=[.55,.78,.6],fo=.22,po=.3,mo=/^(karsts|karsts-lod\d|karst-models-lod\d|proc-karsts|set-rock|sky)$/,ho={ultra:{scale:.5,lod:2},high:{scale:.25,lod:2},medium:null,low:null};function go(e,t,n,r=!0){return t||!n||!r?null:ho[e]}function _o(e){return e===`low`?{n:32,reach:1100}:e===`medium`?{n:64,reach:2700}:{n:96,reach:3600}}var vo=.45,yo=32,bo=1.1;function xo(e){let{n:t,reach:n}=_o(e),r=new Sn(2,2,t,t).rotateX(-Math.PI/2),i=r.getAttribute(`position`),a=e=>n*(vo*e+.55*e*e*e);for(let e=0;e<i.count;e++)i.setXYZ(e,a(i.getX(e)),0,a(i.getZ(e)));r.computeBoundingSphere();let o=i.count;return r.setAttribute(`aShore`,new M(new Float32Array(o),1)),r.setAttribute(`aFlow`,new M(new Float32Array(o*2),2)),r}var So=new dn,Co=new D,wo=new D,To=new A,Eo=new yn,Do=new k,Oo=new k,ko=new D(0,1,0),Ao=new A().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),jo=class{mesh;target=null;passes={count:0,calls:0,triangles:0};water;camera=new bn;matrix=new A;tier;far=0;mode;layersDirty=!0;mirrorAllowed;constructor(e,t,n=!0){this.water=e,this.tier=t,this.mirrorAllowed=n,this.mode=go(t,!1,Pe(),n),this.camera.layers.set(7),this.mesh=new j(xo(t),e),this.mesh.name=`sea`,this.mesh.position.y=0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.applyLook()}get mirror(){return this.mode}applyLook(){Gr(this.water,io,ao,this.mode?oo:so),Jr(this.water,{deep:co,fade:lo,tint:uo},this.mode!==null),Xr(this.water,null,this.matrix,{base:fo,distort:po})}setQuality(e,t=this.mirrorAllowed){this.mirrorAllowed=t;let n=_o(e),r=_o(this.tier);(n.n!==r.n||n.reach!==r.reach)&&(this.mesh.geometry.dispose(),this.mesh.geometry=xo(e)),this.tier=e,this.stretch(),this.mode=go(e,!1,Pe(),t),this.layersDirty=!0,this.mode||this.dropTarget(),this.applyLook()}setFade(e){Xr(this.water,this.target?.texture??null,this.matrix,{fade:[e*.6,e*.95]}),this.far=e,this.stretch()}stretch(){let e=Math.max(1,this.far*bo/_o(this.tier).reach);this.mesh.scale.set(e,1,e)}follow(e){this.mesh.position.set(Math.round(e.x/yo)*yo,0,Math.round(e.z/yo)*yo)}render(e,t,n,r,i){let a=n;if(e.xr.isPresenting||n.updateMatrixWorld(),Co.setFromMatrixPosition(n.matrixWorld),!this.mode||e.xr.isPresenting||!a.isPerspectiveCamera||Co.y<=.05)return Xr(this.water,null,this.matrix),!1;e.getDrawingBufferSize(So);let o=Math.max(16,Math.round(So.x*this.mode.scale)),s=Math.max(16,Math.round(So.y*this.mode.scale));this.target?(this.target.width!==o||this.target.height!==s)&&this.target.setSize(o,s):this.target=new qn(o,s,{type:vn,depthBuffer:!0,stencilBuffer:!1});let c=this.camera;To.extractRotation(n.matrixWorld),wo.set(0,0,-1).applyMatrix4(To).add(Co),c.position.set(Co.x,0-Co.y,Co.z),c.up.set(0,1,0).applyMatrix4(To),c.up.y=-c.up.y,c.lookAt(wo.x,0-wo.y,wo.z),c.far=a.far,c.updateMatrixWorld(),c.projectionMatrix.copy(a.projectionMatrix),this.matrix.copy(Ao).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse),Eo.setFromNormalAndCoplanarPoint(ko,wo.set(0,0,0)).applyMatrix4(c.matrixWorldInverse),Do.set(Eo.normal.x,Eo.normal.y,Eo.normal.z,Eo.constant);let l=c.projectionMatrix.elements;if(Oo.set((Math.sign(Do.x)+l[8])/l[0],(Math.sign(Do.y)+l[9])/l[5],-1,(1+l[10])/l[14]),Do.multiplyScalar(2/Do.dot(Oo)),l[2]=Do.x,l[6]=Do.y,l[10]=Do.z+1-.003,l[14]=Do.w,c.projectionMatrixInverse.copy(c.projectionMatrix).invert(),this.layersDirty){this.layersDirty=!1,t.traverse(e=>{e.isLight&&e.layers.enable(7)});for(let e of r)e.traverse(e=>mo.test(e.name)&&e.layers.enable(7))}for(let e of r)e.updateMatrixWorld();let u=e.info.render,d=u.calls,f=u.triangles,p=e.getRenderTarget(),m=e.shadowMap,h={auto:m.autoUpdate,needs:m.needsUpdate},g=t.matrixWorldAutoUpdate;m.autoUpdate=!1,m.needsUpdate=!1,t.matrixWorldAutoUpdate=!1,this.mesh.visible=!1;try{i?.(!0),e.setRenderTarget(this.target),e.state.buffers.depth.setMask(!0),e.autoClear||e.clear(),e.render(t,c)}finally{i?.(!1),this.mesh.visible=!0,t.matrixWorldAutoUpdate=g,m.autoUpdate=h.auto,m.needsUpdate=h.needs,e.setRenderTarget(p)}return this.passes.count++,this.passes.calls=u.calls-d,this.passes.triangles=u.triangles-f,Xr(this.water,this.target.texture,this.matrix),!0}forCapture(){let e=Yr(this.water);return e?(Xr(this.water,null,this.matrix),()=>Xr(this.water,e,this.matrix)):()=>{}}restoreContext(){this.dropTarget()}dropTarget(){this.target?.dispose(),this.target=null,Xr(this.water,null,this.matrix)}stats(){return{mirror:this.mode,target:this.target?[this.target.width,this.target.height]:null,passes:{...this.passes}}}dispose(){this.dropTarget(),Jr(this.water,null,!1),this.mesh.geometry.dispose()}};function Mo(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function No(e){if(e.roof){let t=[];for(let n=0;n<e.bottom.length;n+=2)t.push(e.bottom[n],e.y0,e.bottom[n+1]);return pt([...t,...e.roof])}return Mo(e.bottom,e.top)&&e.bottom.length/2<=16?qe(e.y0,e.y1,e.bottom):Ht(e.y0,e.y1,e.bottom,e.top)}var Po=.02,Fo=-1.5,Io=15*Math.PI/180,Lo=.72;function Ro(e){let[t,n,r]=e.center,i=[],a=[];if(e.kind===`prism`){let o=e.poly.length/2,s=n-e.halfHeight,c=n+e.halfHeight,l=[],u=[];for(let n=0;n<o;n++){l.push(e.poly[n*2]+t,c,e.poly[n*2+1]+r);let i=o-1-n;u.push(e.poly[i*2]+t,s,e.poly[i*2+1]+r)}i.push(0,1,0,c,0,-1,0,-s),a.push(l,u);for(let n=0,l=o-1;n<o;l=n++){let o=e.poly[l*2]+t,u=e.poly[l*2+1]+r,d=e.poly[n*2]+t,f=e.poly[n*2+1]+r,p=d-o,m=f-u,h=Math.sqrt(p*p+m*m);if(h<1e-9)continue;let g=m/h,_=-p/h;i.push(g,0,_,g*o+_*u),a.push([o,s,u,d,s,f,d,c,f,o,c,u])}}else{let o=e.verts,s=0,c=e.planes.length/4;for(let l=0;l<c;l++){let c=e.planes[l*4],u=e.planes[l*4+1],d=e.planes[l*4+2];i.push(c,u,d,e.planes[l*4+3]+c*t+u*n+d*r);let f=e.faces[s++],p=[];for(let i=0;i<f;i++){let i=e.faces[s++];p.push(o[i*3]+t,o[i*3+1]+n,o[i*3+2]+r)}a.push(p)}}let o=[1/0,1/0,1/0,-1/0,-1/0,-1/0];for(let e of a)for(let t=0;t<e.length;t+=3)o[0]=Math.min(o[0],e[t]),o[1]=Math.min(o[1],e[t+1]),o[2]=Math.min(o[2],e[t+2]),o[3]=Math.max(o[3],e[t]),o[4]=Math.max(o[4],e[t+1]),o[5]=Math.max(o[5],e[t+2]);return{planes:i,faces:a,box:o}}function zo(e,t,n,r,i,a){let o=e.length/3;for(let s=0;s<t.planes.length;s+=4){let c=t.planes[s],l=t.planes[s+1],u=t.planes[s+2],d=t.planes[s+3],f=!0;for(let t=0;t<o;t++){let n=c*e[t*3]+l*e[t*3+1]+u*e[t*3+2]-d;if(n>Po)return!1;n<-.02&&(f=!1)}if(f&&a&&c*n+l*r+u*i>.999)return!1}return!0}var Bo=(e,t)=>e[0]<=t[3]+Po&&t[0]<=e[3]+Po&&e[1]<=t[4]+Po&&t[1]<=e[4]+Po&&e[2]<=t[5]+Po&&t[2]<=e[5]+Po;function Vo(e,t,n){let r=new Map,i=e=>{let t=[];for(let n=Math.floor(e[0]/24);n<=Math.floor(e[3]/24);n++)for(let r=Math.floor(e[2]/24);r<=Math.floor(e[5]/24);r++)t.push(rr(n,r));return t};e.forEach((e,t)=>{for(let n of i(e.box)){let e=r.get(n);e||r.set(n,e=[]),e.push(t)}});let a=[],o=[],s=[];return e.forEach((c,l)=>{if(n&&!n[l])return;let u=new Set;for(let n of i(c.box))for(let i of r.get(n)??[])i!==l&&(!t||t[i]===t[l])&&Bo(c.box,e[i].box)&&u.add(i);let d=[...u].sort((e,t)=>e-t);c.faces.forEach((t,n)=>{let r=-1/0;for(let e=1;e<t.length;e+=3)r=Math.max(r,t[e]);if(r<Fo)return;let i=c.planes[n*4],u=c.planes[n*4+1],f=c.planes[n*4+2];d.some(n=>zo(t,e[n],i,u,f,l<n))||(a.push(t),o.push(i,u,f),s.push(l))})}),{polys:a,normals:o,owner:s}}function Ho(e,t,n,r,i,a=1,o=-1){let s=[];for(let[n,r]of e.entries()){let e=t[n*3],i=t[n*3+1],a=t[n*3+2],o=r.length/3;for(let t=1;t<o-1;t++){let n=t,o=t+1,c=r[n*3]-r[0],l=r[n*3+1]-r[1],u=r[n*3+2]-r[2],d=r[o*3]-r[0],f=r[o*3+1]-r[1],p=r[o*3+2]-r[2],m=(l*p-u*f)*e+(u*d-c*p)*i+(c*f-l*d)*a;Math.abs(m)<1e-10||(m<0&&([n,o]=[o,n]),s.push(r[0],r[1],r[2],r[n*3],r[n*3+1],r[n*3+2],r[o*3],r[o*3+1],r[o*3+2]))}}let c=new F;return c.setAttribute(`position`,new M(s,3)),c=sr(c,Io),Uo(c,n,r,i,a,o),c}function Uo(e,t,n,r,i=1,a=-1){let o=e.getAttribute(`position`).count,s=e.getAttribute(`position`),c=e.getAttribute(`normal`),l=new Float32Array(o),u=new Float32Array(o),d=new Float32Array(o),f=new Float32Array(o*2),p=Math.max(1,n-t);for(let e=0;e<o;e++){let n=s.getY(e),i=c.getY(e);l[e]=+(i>=Lo),u[e]=Math.min(1,Math.max(0,(n-t)/p));let a=Math.min(1,Math.max(0,n/3)),o=Math.min(1,Math.max(0,-i/.4));d[e]=(.55+.45*a)*(1-.4*o),f[e*2]=r[0],f[e*2+1]=r[1]}e.setAttribute(`aLedge`,new I(l,1)),e.setAttribute(`aRel`,new I(u,1)),e.setAttribute(`aOcc`,new I(d,1)),e.setAttribute(`aCentre`,new I(f,2)),e.setAttribute(`aGreen`,new I(new Float32Array(o).fill(i),1)),e.setAttribute(`aIslet`,new I(new Float32Array(o).fill(a),1)),e.computeBoundingSphere()}var Wo=e=>e.pieces.length?Math.min(...e.pieces.map(e=>e.y0)):0;function Go(e,t){let n=0,r=0,i=e.bottom.length/2;for(let t=0;t<i;t++)n+=e.bottom[t*2]/i,r+=e.bottom[t*2+1]/i;return[Math.floor(n/t),Math.floor(r/t)]}function Ko(e,t,n,r,i=1,a=[],o,s=-1){let c=[...e.map((e,t)=>({p:e,emit:!0,at:o?.[t]??t})),...a.map((t,n)=>({p:t,emit:!1,at:o?.[e.length+n]??e.length+n}))];c.sort((e,t)=>e.at-t.at);let{polys:l,normals:u}=Vo(c.map(e=>Ro(No(e.p))),void 0,c.map(e=>e.emit)),d=Ho(l,u,t,n,r,i,s),f=or(d,1e-4);return d.dispose(),f.computeBoundingSphere(),f}var qo=[{id:2,centroid:[-1253.0736367310687,-846.1718159592597],top:163.20494079589844,aabb:[-1303.9,-962.1500000000001,-1187.6000000000001,-720.0500000000001],rockLum:.2646,rMax:129.02},{id:3,centroid:[-257.48760581331925,-1067.8339375782498],top:155.2924346923828,aabb:[-456.70000000000005,-1225.95,-45.5,-923],rockLum:.2325,rMax:227.2},{id:7,centroid:[248.45539517918758,-557.7993098791384],top:134.440185546875,aabb:[185.15,-760,309.3,-380.35],rockLum:.2161,rMax:202.27},{id:9,centroid:[-619.061942402101,-639.100759510857],top:122.3895034790039,aabb:[-680.5500000000001,-717.0500000000001,-558.5500000000001,-563.35],rockLum:.2698,rMax:77.95},{id:10,centroid:[-771.207568385222,264.5416722364177],top:117.43121337890625,aabb:[-840.95,198.8,-706.1500000000001,332.55],rockLum:.262,rMax:69.86},{id:13,centroid:[-267.6821434750504,51.471075751062166],top:129.48085021972656,aabb:[-340.65000000000003,2.6500000000000004,-187.75,91.75],rockLum:.2594,rMax:83.35},{id:15,centroid:[-62.205673490949074,220.829796192898],top:107.56925201416016,aabb:[-115.85000000000001,177.45000000000002,-8.950000000000001,256.45],rockLum:.2506,rMax:57.83},{id:16,centroid:[-686.4329838438908,387.20379438420514],top:97.8333511352539,aabb:[-726.9000000000001,339.55,-643.2,436.55],rockLum:.2412,rMax:56.87},{id:17,centroid:[-130.06614421585763,46.64876567932393],top:87.2238540649414,aabb:[-164.35000000000002,8.75,-92,81.4],rockLum:.2388,rMax:41.21},{id:21,centroid:[-947.9424040851551,272.0588544084481],top:54.83462905883789,aabb:[-973.1500000000001,258.45,-921.75,288.65000000000003],rockLum:.257,rMax:27.09},{id:22,centroid:[524.5669900430496,-628.0719222238372],top:57.146427154541016,aabb:[505.90000000000003,-648.1,542.9,-607.2],rockLum:.227,rMax:23.88},{id:24,centroid:[-849.2888132839254,429.4171067053883],top:46.6298713684082,aabb:[-867.85,413.95000000000005,-834.7,445.85],rockLum:.2002,rMax:16.7},{id:100,centroid:[406.22187480819133,-461.215837613747],top:13.55198860168457,aabb:[400.75,-467,411.8,-453.8],rockLum:.1912,rMax:6.39},{id:101,centroid:[392.4278199398007,-481.194230037113],top:11.380514144897461,aabb:[385.65000000000003,-489.3,400.05,-473.1],rockLum:.2014,rMax:9}],Jo=()=>({fetch:e=>fetch(e),createImageBitmap:typeof createImageBitmap==`function`?(e,t)=>createImageBitmap(e,t):void 0,canvas:(e,t)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n},image:async e=>{let t=new Image;return t.decoding=`async`,t.src=e,await t.decode(),t}});async function Yo(e,t,n,r,i={},a=Jo()){let o=i.outW??t,s=i.outH??n,c,l,u,d=null;if(a.createImageBitmap)try{let t=await a.fetch(e);if(!t.ok)throw Error(`${r} ${e}: HTTP ${t.status}`);d=await a.createImageBitmap(await t.blob(),{imageOrientation:`none`,premultiplyAlpha:`none`,colorSpaceConversion:`none`})}catch(t){console.warn(`${r}: ${e} not decoded as a bitmap, reading it as an image`,t)}if(d)c=d,l=d.width,u=d.height;else{let t=await a.image(e);c=t,l=t.naturalWidth,u=t.naturalHeight}try{if(l!==t||u!==n)throw Error(`${r} ${e}: ${l}x${u}, expected ${t}x${n}`);let d=a.canvas(o,s).getContext(`2d`,{willReadFrequently:!0});if(!d)throw Error(`${r}: no 2D canvas`);return d.imageSmoothingEnabled=i.smooth??!0,d.imageSmoothingQuality=`high`,d.drawImage(c,0,0,o,s),d.getImageData(0,0,o,s).data}finally{d?.close()}}var Xo=()=>Promise.all([E(()=>import(`./islet-cyl-rgb-B01epMRE.js`),[],import.meta.url),E(()=>import(`./islet-cyl-mask-mLSDJNVx.js`),[],import.meta.url),E(()=>import(`./islet-cap-rgb-sIbB1uMp.js`),[],import.meta.url),E(()=>import(`./islet-cap-mask-DYqFdtey.js`),[],import.meta.url),E(()=>import(`./islet-cyl-radius-VTUV6uEO.js`),[],import.meta.url)]).then(e=>e.map(e=>e.default)),Zo=qo;if(Zo.length>32)throw Error(`islet maps: ${Zo.length} islets, the shader holds 32`);function Qo(e){return Zo.findIndex(t=>t.id===e)}function $o(){let e=[],t=[],n=[];for(let r=0;r<32;r++){let i=Zo[r];e.push(i?new k(i.centroid[0],i.centroid[1],i.top,1/i.rockLum):new k(0,0,1,1)),t.push(i?new k(i.aabb[0],i.aabb[1],i.aabb[2],i.aabb[3]):new k(0,0,1,1)),n.push(new k(i?.rMax??0,0,0,0))}return{a:e,b:t,c:n}}function es(){let e=new Mn(new Uint8Array([128,128,128,0]),1,1,1);return e.needsUpdate=!0,e}function ts(e,t,n,r){let i=Zo[e],a=Math.atan2(r-i.centroid[1],t-i.centroid[0])/(Math.PI*2);return[a-Math.floor(a),1-Math.min(1,Math.max(0,n/i.top))]}function ns(e,t,n,r,i,a){let o=Zo[t],[s,c]=ts(t,n,r,i),l=e.cylMask[t*512*256+Math.min(255,Math.floor(c*256))*512+Math.min(511,Math.floor(s*512))]/255,u=Math.min(1,Math.max(0,(n-o.aabb[0])/(o.aabb[2]-o.aabb[0]))),d=Math.min(1,Math.max(0,(i-o.aabb[1])/(o.aabb[3]-o.aabb[1]))),f=e.capMask[t*256*256+Math.min(255,Math.floor(d*256))*256+Math.min(255,Math.floor(u*256))]/255,p=Math.min(1,Math.max(0,(a-.35)/.4));return l+(f-l)*p*p*(3-2*p)}function rs(e,t,n){return Yo(e,t,n,`islet maps`)}async function is(e,t,n,r,i,a){let[o,s]=await Promise.all([rs(e,n,r*i),rs(t,n,r*i)]),c=new Uint8Array(n*r*i*4),l=new Uint8Array(n*r*i);for(let e=0;e<l.length;e++)c[e*4]=o[e*4],c[e*4+1]=o[e*4+1],c[e*4+2]=o[e*4+2],c[e*4+3]=l[e]=s[e*4];let u=new Mn(c,n,r,i);return u.format=Un,u.type=an,u.colorSpace=Dn,u.wrapS=a,u.wrapT=kn,u.minFilter=L,u.magFilter=L,u.generateMipmaps=!1,u.flipY=!1,u.premultiplyAlpha=!1,u.needsUpdate=!0,{tex:u,mask:l}}async function as(e,t){let n=await rs(e,128,64*t),r=new Uint8Array(8192*t);for(let e=0;e<r.length;e++)r[e]=n[e*4];let i=new Mn(r,128,64,t);return i.format=cn,i.type=an,i.wrapS=zn,i.wrapT=kn,i.minFilter=L,i.magFilter=L,i.generateMipmaps=!1,i.flipY=!1,i.unpackAlignment=1,i.needsUpdate=!0,i}async function os([e,t,n,r,i]){let a=Zo.length,[o,s,c]=await Promise.all([is(e,t,512,256,a,zn),is(n,r,256,256,a,kn),as(i,a)]);return{cyl:o.tex,cap:s.tex,rad:c,cylMask:o.mask,capMask:s.mask}}var ss=null;function cs(){return ss||=typeof document>`u`||!Zo.length?Promise.resolve(null):Xo().then(os).catch(e=>(console.warn(`islet maps failed to load; procedural look kept`,e),ss=null,null)),ss}function ls(){let e=ss;ss=null,e?.then(e=>{e?.cyl.dispose(),e?.cap.dispose(),e?.rad.dispose()})}var us=JSON.parse(`[{"id":0,"top":187.37127685546875,"yRange":[0,188],"faceSize":128,"pad":2,"facesPerRow":16,"rows":29,"faceCount":451,"rockLum":0.198,"cells":[{"cell":[-4,4],"faces":{"cap":0,"-x":1}},{"cell":[-4,5],"faces":{"cap":2,"-x":3}},{"cell":[-4,6],"faces":{"cap":4,"-x":5}},{"cell":[-4,7],"faces":{"cap":6,"-x":7,"+z":8}},{"cell":[-3,3],"faces":{"cap":9,"-z":10}},{"cell":[-3,4],"faces":{"cap":11,"-x":12,"-z":13}},{"cell":[-3,5],"faces":{"cap":14}},{"cell":[-3,6],"faces":{"cap":15}},{"cell":[-3,7],"faces":{"cap":16}},{"cell":[-3,8],"faces":{"cap":17,"+x":18,"-x":19,"+z":20,"-z":21}},{"cell":[-3,9],"faces":{"cap":22,"-x":23,"+z":24}},{"cell":[-2,3],"faces":{"cap":25,"-z":26}},{"cell":[-2,4],"faces":{"cap":27,"+x":28,"+z":29,"-z":30}},{"cell":[-2,5],"faces":{"cap":31,"-z":32}},{"cell":[-2,6],"faces":{"cap":33}},{"cell":[-2,7],"faces":{"cap":34,"-x":35,"+z":36}},{"cell":[-2,8],"faces":{"cap":37,"-x":38,"+z":39,"-z":40}},{"cell":[-2,9],"faces":{"cap":41,"-x":42}},{"cell":[-2,10],"faces":{"cap":43,"-x":44,"+z":45}},{"cell":[-1,-1],"faces":{"cap":46,"-x":47,"-z":48}},{"cell":[-1,0],"faces":{"cap":49,"-x":50,"+z":51}},{"cell":[-1,3],"faces":{"cap":52}},{"cell":[-1,4],"faces":{"cap":53,"+x":54,"-z":55}},{"cell":[-1,5],"faces":{"cap":56,"-z":57}},{"cell":[-1,6],"faces":{"cap":58}},{"cell":[-1,7],"faces":{"cap":59}},{"cell":[-1,8],"faces":{"cap":60}},{"cell":[-1,9],"faces":{"cap":61}},{"cell":[-1,10],"faces":{"cap":62,"-x":63,"+z":64}},{"cell":[0,-1],"faces":{"cap":65,"-x":66,"-z":67}},{"cell":[0,0],"faces":{"cap":68,"+z":69}},{"cell":[0,1],"faces":{"cap":70,"+z":71}},{"cell":[0,3],"faces":{"cap":72}},{"cell":[0,4],"faces":{"cap":73,"-x":74,"-z":75}},{"cell":[0,5],"faces":{"cap":76}},{"cell":[0,6],"faces":{"cap":77}},{"cell":[0,7],"faces":{"cap":78}},{"cell":[0,8],"faces":{"cap":79}},{"cell":[0,9],"faces":{"cap":80}},{"cell":[0,10],"faces":{"cap":81,"+x":82,"-x":83,"+z":84}},{"cell":[0,11],"faces":{"cap":85}},{"cell":[1,-1],"faces":{"cap":86,"+x":87,"-z":88}},{"cell":[1,0],"faces":{"cap":89,"+x":90,"-z":91}},{"cell":[1,1],"faces":{"cap":92,"+x":93,"-x":94,"+z":95}},{"cell":[1,2],"faces":{"cap":96,"+x":97,"-x":98,"+z":99,"-z":100}},{"cell":[1,3],"faces":{"cap":101,"-x":102,"+z":103,"-z":104}},{"cell":[1,4],"faces":{"cap":105}},{"cell":[1,5],"faces":{"cap":106,"-z":107}},{"cell":[1,6],"faces":{"cap":108}},{"cell":[1,7],"faces":{"cap":109}},{"cell":[1,8],"faces":{"cap":110}},{"cell":[1,9],"faces":{"cap":111,"+x":112}},{"cell":[1,10],"faces":{"cap":113,"+x":114,"+z":115}},{"cell":[1,11],"faces":{"cap":116,"+x":117,"-x":118,"+z":119}},{"cell":[2,-4],"faces":{"cap":120,"-z":121}},{"cell":[2,-3],"faces":{"cap":122,"+x":123,"-x":124,"+z":125,"-z":126}},{"cell":[2,-2],"faces":{"cap":127,"+x":128,"-x":129,"+z":130,"-z":131}},{"cell":[2,-1],"faces":{"cap":132}},{"cell":[2,0],"faces":{"cap":133,"-z":134}},{"cell":[2,1],"faces":{"cap":135,"-z":136}},{"cell":[2,2],"faces":{"cap":137,"+x":138,"-x":139}},{"cell":[2,3],"faces":{"cap":140}},{"cell":[2,4],"faces":{"cap":141,"+x":142,"-x":143,"+z":144}},{"cell":[2,5],"faces":{"cap":145,"+x":146,"-z":147}},{"cell":[2,6],"faces":{"cap":148,"+x":149}},{"cell":[2,7],"faces":{"cap":150,"+x":151,"+z":152}},{"cell":[2,8],"faces":{"cap":153,"+x":154,"+z":155}},{"cell":[2,9],"faces":{"cap":156,"+x":157}},{"cell":[2,10],"faces":{"cap":158,"+x":159}},{"cell":[3,-4],"faces":{"cap":160}},{"cell":[3,-3],"faces":{"cap":161}},{"cell":[3,-2],"faces":{"cap":162,"+x":163,"-x":164,"+z":165,"-z":166}},{"cell":[3,-1],"faces":{"cap":167,"+x":168,"-x":169,"+z":170,"-z":171}},{"cell":[3,0],"faces":{"cap":172,"-x":173,"-z":174}},{"cell":[3,1],"faces":{"cap":175}},{"cell":[3,2],"faces":{"cap":176,"-z":177}},{"cell":[3,3],"faces":{"cap":178}},{"cell":[3,4],"faces":{"cap":179,"+x":180,"-x":181,"+z":182}},{"cell":[3,5],"faces":{"cap":183}},{"cell":[3,6],"faces":{"cap":184,"+x":185}},{"cell":[3,7],"faces":{"cap":186}},{"cell":[3,8],"faces":{"cap":187}},{"cell":[4,-3],"faces":{"cap":188}},{"cell":[4,-2],"faces":{"cap":189,"+x":190}},{"cell":[4,-1],"faces":{"cap":191,"+x":192,"-z":193}},{"cell":[4,0],"faces":{"cap":194,"+x":195,"-z":196}},{"cell":[4,1],"faces":{"cap":197,"-x":198,"+z":199}},{"cell":[4,2],"faces":{"cap":200}},{"cell":[4,3],"faces":{"cap":201,"+x":202}},{"cell":[4,4],"faces":{"cap":203,"+x":204,"+z":205}},{"cell":[4,5],"faces":{"cap":206}},{"cell":[4,6],"faces":{"cap":207}},{"cell":[4,7],"faces":{"cap":208}},{"cell":[4,12],"faces":{"cap":209}},{"cell":[5,-6],"faces":{"cap":210}},{"cell":[5,-5],"faces":{"cap":211,"+x":212,"-x":213,"+z":214,"-z":215}},{"cell":[5,-4],"faces":{"cap":216,"-x":217,"+z":218}},{"cell":[5,-3],"faces":{"cap":219,"-x":220}},{"cell":[5,-2],"faces":{"cap":221,"+x":222,"-x":223,"+z":224,"-z":225}},{"cell":[5,0],"faces":{"cap":226,"-x":227,"-z":228}},{"cell":[5,1],"faces":{"cap":229,"+x":230,"-x":231,"+z":232,"-z":233}},{"cell":[5,2],"faces":{"cap":234,"+x":235,"-x":236,"+z":237,"-z":238}},{"cell":[5,3],"faces":{"cap":239,"+x":240,"-x":241,"+z":242,"-z":243}},{"cell":[5,4],"faces":{"cap":244,"+z":245}},{"cell":[5,5],"faces":{"cap":246,"+x":247,"-x":248}},{"cell":[5,6],"faces":{"cap":249,"+x":250,"-x":251}},{"cell":[5,12],"faces":{"cap":252,"-x":253,"+z":254,"-z":255}},{"cell":[5,13],"faces":{"+z":256}},{"cell":[6,-6],"faces":{"cap":257,"+x":258,"-x":259,"+z":260,"-z":261}},{"cell":[6,-5],"faces":{"cap":262,"+x":263,"-x":264,"+z":265,"-z":266}},{"cell":[6,-4],"faces":{"cap":267,"+x":268,"-x":269,"+z":270,"-z":271}},{"cell":[6,-3],"faces":{"cap":272,"+x":273,"-x":274,"+z":275,"-z":276}},{"cell":[6,-2],"faces":{"cap":277,"+x":278,"+z":279,"-z":280}},{"cell":[6,-1],"faces":{"cap":281,"-x":282,"+z":283,"-z":284}},{"cell":[6,0],"faces":{"cap":285,"+x":286,"-x":287,"+z":288,"-z":289}},{"cell":[6,1],"faces":{"cap":290}},{"cell":[6,2],"faces":{"cap":291}},{"cell":[6,3],"faces":{"cap":292,"+x":293,"-x":294,"-z":295}},{"cell":[6,4],"faces":{"cap":296,"+x":297,"-x":298,"+z":299,"-z":300}},{"cell":[6,5],"faces":{"cap":301,"+x":302,"-x":303,"+z":304,"-z":305}},{"cell":[6,6],"faces":{"cap":306,"+x":307,"-x":308,"+z":309}},{"cell":[6,11],"faces":{"cap":310,"-z":311}},{"cell":[6,12],"faces":{"cap":312,"+z":313,"-z":314}},{"cell":[6,13],"faces":{"+z":315}},{"cell":[7,-6],"faces":{"cap":316,"+x":317,"-z":318}},{"cell":[7,-5],"faces":{"cap":319,"+x":320,"+z":321}},{"cell":[7,-2],"faces":{"cap":322}},{"cell":[7,-1],"faces":{"cap":323,"+x":324,"-x":325,"+z":326,"-z":327}},{"cell":[7,0],"faces":{"cap":328,"+x":329,"-x":330,"+z":331,"-z":332}},{"cell":[7,1],"faces":{"cap":333,"-x":334,"+z":335,"-z":336}},{"cell":[7,3],"faces":{"cap":337,"-z":338}},{"cell":[7,4],"faces":{"cap":339,"-z":340}},{"cell":[7,5],"faces":{"cap":341}},{"cell":[7,6],"faces":{"cap":342,"-x":343,"+z":344}},{"cell":[7,7],"faces":{"cap":345,"-x":346,"+z":347}},{"cell":[7,8],"faces":{"cap":348,"-x":349}},{"cell":[7,9],"faces":{"cap":350,"-x":351}},{"cell":[7,10],"faces":{"cap":352,"-x":353,"-z":354}},{"cell":[7,11],"faces":{"cap":355,"-x":356,"-z":357}},{"cell":[7,12],"faces":{"cap":358,"+z":359}},{"cell":[8,-6],"faces":{"cap":360}},{"cell":[8,-5],"faces":{"cap":361}},{"cell":[8,0],"faces":{"cap":362,"-z":363}},{"cell":[8,1],"faces":{"cap":364,"+x":365,"-x":366,"+z":367,"-z":368}},{"cell":[8,4],"faces":{"cap":369,"+x":370,"-z":371}},{"cell":[8,5],"faces":{"cap":372,"+x":373,"+z":374,"-z":375}},{"cell":[8,6],"faces":{"cap":376,"+x":377,"-x":378,"+z":379,"-z":380}},{"cell":[8,7],"faces":{"cap":381,"-x":382}},{"cell":[8,8],"faces":{"cap":383}},{"cell":[8,9],"faces":{"cap":384,"-x":385,"+z":386}},{"cell":[8,10],"faces":{"cap":387,"-x":388,"-z":389}},{"cell":[8,11],"faces":{"cap":390}},{"cell":[8,12],"faces":{"cap":391,"-x":392,"+z":393}},{"cell":[8,13],"faces":{"+z":394}},{"cell":[9,0],"faces":{"cap":395,"-z":396}},{"cell":[9,1],"faces":{"cap":397,"+x":398,"+z":399}},{"cell":[9,4],"faces":{"cap":400}},{"cell":[9,5],"faces":{"cap":401}},{"cell":[9,6],"faces":{"cap":402,"-x":403,"-z":404}},{"cell":[9,7],"faces":{"cap":405,"-z":406}},{"cell":[9,8],"faces":{"cap":407}},{"cell":[9,9],"faces":{"cap":408}},{"cell":[9,10],"faces":{"cap":409,"+x":410}},{"cell":[9,11],"faces":{"cap":411,"+x":412}},{"cell":[9,12],"faces":{"cap":413,"+x":414,"+z":415}},{"cell":[10,6],"faces":{"cap":416,"-x":417,"-z":418}},{"cell":[10,7],"faces":{"cap":419,"+x":420}},{"cell":[10,8],"faces":{"cap":421}},{"cell":[10,9],"faces":{"cap":422,"+x":423,"+z":424}},{"cell":[10,10],"faces":{"cap":425,"+x":426}},{"cell":[10,11],"faces":{"cap":427,"+x":428}},{"cell":[10,12],"faces":{"cap":429,"+x":430}},{"cell":[11,6],"faces":{"cap":431,"+x":432,"-z":433}},{"cell":[11,7],"faces":{"cap":434,"+x":435,"-x":436,"-z":437}},{"cell":[11,8],"faces":{"cap":438,"+x":439,"-x":440,"+z":441,"-z":442}},{"cell":[11,9],"faces":{"cap":443}},{"cell":[12,11],"faces":{"cap":444,"-z":445}},{"cell":[12,12],"faces":{"cap":446,"+x":447,"-x":448,"+z":449}},{"cell":[13,12],"faces":{"+x":450}}]},{"id":1,"top":181.7855682373047,"yRange":[0,182],"faceSize":128,"pad":2,"facesPerRow":16,"rows":8,"faceCount":117,"rockLum":0.183,"cells":[{"cell":[-12,10],"faces":{"cap":0,"-x":1,"-z":2}},{"cell":[-12,11],"faces":{"cap":3,"+z":4}},{"cell":[-11,9],"faces":{"cap":5,"-x":6,"+z":7,"-z":8}},{"cell":[-11,10],"faces":{"cap":9,"+x":10,"-x":11,"+z":12,"-z":13}},{"cell":[-11,11],"faces":{"cap":14,"+x":15,"-x":16,"+z":17,"-z":18}},{"cell":[-11,12],"faces":{"cap":19,"-x":20,"+z":21,"-z":22}},{"cell":[-10,9],"faces":{"cap":23,"+x":24,"-x":25,"+z":26,"-z":27}},{"cell":[-10,10],"faces":{"cap":28,"+x":29,"-x":30,"+z":31,"-z":32}},{"cell":[-10,11],"faces":{"cap":33,"+x":34,"-x":35}},{"cell":[-10,12],"faces":{"cap":36,"+x":37,"-x":38,"+z":39,"-z":40}},{"cell":[-9,9],"faces":{"cap":41,"+x":42,"-x":43,"+z":44,"-z":45}},{"cell":[-9,10],"faces":{"cap":46,"+x":47,"-x":48,"+z":49,"-z":50}},{"cell":[-9,11],"faces":{"cap":51,"+x":52,"-x":53,"+z":54,"-z":55}},{"cell":[-9,12],"faces":{"cap":56,"+x":57,"-x":58,"+z":59}},{"cell":[-8,8],"faces":{"cap":60}},{"cell":[-8,9],"faces":{"cap":61,"-x":62,"-z":63}},{"cell":[-8,10],"faces":{"cap":64,"+x":65,"-x":66,"+z":67,"-z":68}},{"cell":[-8,11],"faces":{"cap":69,"+x":70,"-x":71,"+z":72,"-z":73}},{"cell":[-8,12],"faces":{"cap":74,"+x":75,"-x":76,"+z":77,"-z":78}},{"cell":[-7,8],"faces":{"cap":79}},{"cell":[-7,9],"faces":{"cap":80,"+x":81}},{"cell":[-7,10],"faces":{"cap":82,"+x":83,"-z":84}},{"cell":[-7,11],"faces":{"cap":85,"+x":86,"-x":87,"-z":88}},{"cell":[-7,12],"faces":{"cap":89,"+x":90,"-x":91,"+z":92}},{"cell":[-6,10],"faces":{"cap":93}},{"cell":[-6,11],"faces":{"cap":94,"+x":95,"-z":96}},{"cell":[-6,12],"faces":{"cap":97,"+x":98,"-x":99,"+z":100,"-z":101}},{"cell":[-6,13],"faces":{"cap":102}},{"cell":[-5,11],"faces":{"cap":103,"+z":104,"-z":105}},{"cell":[-5,12],"faces":{"cap":106,"+x":107,"-x":108,"+z":109,"-z":110}},{"cell":[-4,11],"faces":{"cap":111}},{"cell":[-4,12],"faces":{"cap":112,"+x":113,"-x":114,"+z":115,"-z":116}}]}]`),ds=[`cap`,`+x`,`-x`,`+z`,`-z`],fs=us;if(fs.length>4)throw Error(`massif maps: ${fs.length} massifs, the shader holds 4`);var ps=()=>Promise.all([Promise.all([E(()=>import(`./massif-0-colour-B-WcbwlQ.js`),[],import.meta.url),E(()=>import(`./massif-0-mask-CCycNZos.js`),[],import.meta.url),E(()=>import(`./massif-0-depth-CWyP5aBe.js`),[],import.meta.url)]),Promise.all([E(()=>import(`./massif-1-colour-D9acF66r.js`),[],import.meta.url),E(()=>import(`./massif-1-mask-6M8Afunq.js`),[],import.meta.url),E(()=>import(`./massif-1-depth-Cwa3Q4yd.js`),[],import.meta.url)])]).then(e=>e.map(e=>e.map(e=>e.default)));function ms(e){return fs.findIndex(t=>t.id===e)}function hs(e=fs){let t=e.map(e=>{let t=e.cells.map(e=>e.cell[0]),n=e.cells.map(e=>e.cell[1]);return{x0:Math.min(...t),z0:Math.min(...n),w:Math.max(...t)-Math.min(...t)+1,h:Math.max(...n)-Math.min(...n)+1}}),n=Math.max(1,...t.map(e=>e.w*ds.length)),r=Math.max(1,t.reduce((e,t)=>e+t.h,0)),i=new Float32Array(n*r).fill(-1),a=[],o=[],s=[],c=0,l=0;for(let r=0;r<4;r++){let u=e[r],d=t[r];if(!u||!d){a.push(new k(0,0,0,1)),o.push(new k(1,0,0,0));continue}for(let e of u.cells){let t=e.cell[0]-d.x0,r=e.cell[1]-d.z0;ds.forEach((a,o)=>{let s=e.faces[a];s!==void 0&&(i[(c+r)*n+t*ds.length+o]=l+s)})}a.push(new k(d.x0,d.z0,c,u.yRange[1])),o.push(new k(1/u.rockLum,d.w,d.h,0)),s.push(l),c+=d.h,l+=u.faceCount}return{a,b:o,index:i,width:n,height:r,base:s,layers:l}}function gs(){let e=new tn(new Float32Array([-1]),1,1,cn,_n);return e.minFilter=e.magFilter=gn,e.needsUpdate=!0,e}function _s(e,t,n,r,i,a,o,s,c,l,u){let d=n%r*i,f=Math.floor(n/r)*i,p=u?2*i:i,m=u?o%4:0,h=(u?Math.floor(o/4):o)*p*p+(m>>1)*i*p+(m&1)*i;for(let n=0;n<i;n++){let r=(f+n)*t;for(let t=0;t<i;t++)a[(h+n*p+t)*c+l]=e[(r+d+t)*4+s]}}async function vs(e,t,n,r,i=!0){let a=Math.round(t*r);return{px:await Yo(e,t,n,`massif maps`,{outW:a,outH:Math.round(n*r),smooth:i}),w:a}}function ys(e,t,n,r,i,a=L){let o=new Mn(e,t,t,n);return o.format=r,o.type=an,i&&(o.colorSpace=Dn),o.wrapS=o.wrapT=kn,o.minFilter=a,o.magFilter=a,o.generateMipmaps=!1,o.flipY=!1,o.premultiplyAlpha=!1,o.unpackAlignment=1,o.needsUpdate=!0,o}async function bs(e,t,n){let r=hs(),i=fs[0].faceSize,a=Math.max(8,Math.round(i*t)),o=Math.ceil(r.layers/4),s=2*a,c=new Uint8Array(o*s*s*4),l=new Uint8Array(o*s*s),u=n?new Uint8Array(r.layers*a*a):null,d=n?new Uint8Array(r.layers*a*a):null;for(let[t,n]of fs.entries()){let[i,o,s]=e[t],f=n.facesPerRow*n.faceSize,p=n.rows*n.faceSize,m=a/n.faceSize,[h,g,_]=await Promise.all([vs(i,f,p,m),vs(o,f,p,m),vs(s,f,p,m,!1)]);for(let e=0;e<n.faceCount;e++){let i=r.base[t]+e;for(let t=0;t<3;t++)_s(h.px,h.w,e,n.facesPerRow,a,c,i,t,4,t,!0);_s(g.px,g.w,e,n.facesPerRow,a,c,i,0,4,3,!0),_s(_.px,_.w,e,n.facesPerRow,a,l,i,0,1,0,!0),u&&_s(g.px,g.w,e,n.facesPerRow,a,u,i,0,1,0,!1),d&&_s(_.px,_.w,e,n.facesPerRow,a,d,i,0,1,0,!1)}}let f=new tn(r.index,r.width,r.height,cn,_n);return f.minFilter=f.magFilter=gn,f.generateMipmaps=!1,f.needsUpdate=!0,{colour:ys(c,s,o,Un,!0),depth:ys(l,s,o,cn,!1,gn),index:f,layout:r,size:a,mask:u,depthCpu:d}}var xs=new Map;function Ss(e,t){let n=`${e}:${t}`,r=xs.get(n);return r||(r=typeof document>`u`||!fs.length?Promise.resolve(null):ps().then(n=>bs(n,e,t)).catch(e=>(console.warn(`massif maps failed to load; procedural look kept`,e),xs.delete(n),null)),xs.set(n,r)),r}function Cs(){let e=[...xs.values()];xs.clear();for(let t of e)t.then(e=>{e?.colour.dispose(),e?.depth.dispose(),e?.index.dispose()})}function ws(e){return e===`low`?.25:e===`medium`?.5:1}var Ts=253;function Es(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function Ds(e,t,n,r,i,a){let o=Math.min(n-1,Math.floor(r+Math.min(1,Math.max(0,i))*(n-2*r))),s=Math.min(n-1,Math.floor(r+Math.min(1,Math.max(0,a))*(n-2*r)));return e[t*n*n+s*n+o]}var Os=0;function ks(e,t,n,r,i,a,o){if(t<0)return 0;let s=Ds(e.depthCpu,t,e.size,n,r,i);return s>=Ts?0:(Os=Ds(e.mask,t,e.size,n,r,i)/255,1-Es(4,10,a-s/255*o))}function As(e,t,n,r,i,a,o,s){let c=fs[t];if(!c||!e.mask||!e.depthCpu)return-1;let l=e.layout,u=l.a[t],d=l.b[t],f=Math.floor(n/100),p=Math.floor(i/100),m=f-u.x,h=p-u.y;if(m<0||h<0||m>=d.y||h>=d.z)return-1;let g=(u.z+h)*l.width+m*ds.length,_=n/100-f,v=i/100-p,y=u.w,b=c.pad/c.faceSize*e.size,x=1-Math.min(1,Math.max(0,r/y)),S=Es(.35,.75,o),C=a*a,ee=s*s,w=C+ee>1e-6?C/(C+ee):.5,te=(1-S)*Es(.08,.2,w),ne=(1-S)*Es(.08,.2,1-w),T=0,re=0,ie=0,ae=0,oe=0,E=0;if(S>.01&&(T=S*ks(e,l.index[g],b,_,v,y-r,y),ae=Os),te>.01){let t=a>=0?1:2;re=te*w*ks(e,l.index[g+t],b,v,x,a>=0?(f+1)*100-n:n-f*100,100),oe=Os}if(ne>.01){let t=s>=0?3:4;ie=ne*(1-w)*ks(e,l.index[g+t],b,_,x,s>=0?(p+1)*100-i:i-p*100,100),E=Os}let se=T+re+ie;return se<.05?-1:(T*ae+re*oe+ie*E)/se}var js=new URL(`rock-albedo-1024-CslbQtSb.webp`,import.meta.url).href,Ms=new URL(`rock-albedo-512-Ba7uhlYV.webp`,import.meta.url).href,Ns=new URL(`rock-normal-1024-DHsQGApO.webp`,import.meta.url).href,Ps=new URL(`canopy-albedo-1024-Dd6n7Cy1.webp`,import.meta.url).href,Fs=new URL(`canopy-albedo-512-DmArd7NA.webp`,import.meta.url).href,Is=new URL(`canopy-normal-1024-CI8-7L1Z.webp`,import.meta.url).href,Ls=new URL(`leaf-cluster-512-DMnNiODt.webp`,import.meta.url).href,Rs=new URL(`rock_albedo_1k-S6AB_Uzh.webp`,import.meta.url).href,zs=new URL(`rock_albedo_512-DjgC3950.webp`,import.meta.url).href,Bs=new URL(`rock_normal_1k-D2RFOiIv.webp`,import.meta.url).href,Vs=new URL(`rock_alt_warm_albedo_1k-CoknNQwz.webp`,import.meta.url).href,Hs=new URL(`rock_alt_warm_albedo_512-C_oGRxyv.webp`,import.meta.url).href,Us=new URL(`canopy_albedo_1k-CEihpgZd.webp`,import.meta.url).href,Ws=new URL(`canopy_albedo_512-DaKrSI-U.webp`,import.meta.url).href,Gs=new URL(`canopy_normal_1k-DKHYciV8.webp`,import.meta.url).href,Ks={photo:{rock:{albedo:{512:Ms,1024:js},normal:Ns,tile:10},canopy:{albedo:{512:Fs,1024:Ps},normal:Is,tile:4.5},leaves:Ls,look:{desat:.72,lift:1.9,tintA:16052454,tintB:13815490,streak:.9,leafSat:1,leafTint:13161632,normal:1},credit:`ambientCG Rock060, Moss004, LeafSet024 (CC0 1.0)`},ai:{rock:{albedo:{512:zs,1024:Rs},normal:Bs,tile:16},rockAlt:{512:Hs,1024:Vs},canopy:{albedo:{512:Ws,1024:Us},normal:Gs,tile:9},leaves:Ls,look:{desat:.3,lift:1.05,tintA:15920870,tintB:13947076,streak:.5,leafSat:.85,leafTint:13158568,normal:.4},credit:`gpt-image-2 repaints of code-drawn guides (assets/PROVENANCE.md, Ha Long karst AI textures); cards: ambientCG LeafSet024`},blend:{rock:{albedo:{512:zs,1024:Rs},normal:Ns,tile:16},rockAlt:{512:Ms,1024:js},canopy:{albedo:{512:Ws,1024:Us},normal:Is,tile:9},leaves:Ls,look:{desat:.55,lift:1.7,tintA:16052456,tintB:14473420,streak:.85,leafSat:.9,leafTint:12108956,normal:.9,heightShade:.2,streakLo:.56},credit:`AI albedos (assets/PROVENANCE.md) with ambientCG Rock060 / Moss004 normals and Rock060 albedo blended (CC0)`}},qs=`blend`;function Js(e){return e===`low`?0:e===`medium`?1:2}var Ys=`
uniform sampler2D uRockA;
uniform sampler2D uRockN;
uniform sampler2D uCanA;
uniform sampler2D uCanN;
uniform sampler2D uRockB;
uniform float uRockMix;
uniform float uNrm;
uniform float uHeightShade;
uniform float uStreakLo;
uniform float uRockScale;
uniform float uCanScale;
uniform float uPQ;
uniform float uReady;
uniform vec3 uTintA;
uniform vec3 uTintB;
uniform vec3 uWet;
uniform float uWetTop;
uniform float uCloak;
uniform float uGreen;
uniform float uDesat;
uniform float uLift;
uniform vec3 uStain;
uniform float uStreak;
uniform float uLeafSat;
uniform vec3 uLeafTint;
varying vec3 vKarstPos;
varying vec2 vKarstLocal;
varying vec3 vKarstNormal;
varying float vLedge;
varying float vRel;
varying float vTower;
varying float vOcc;
varying float vGreen;
varying float vIslet;
uniform sampler2DArray uCyl;
uniform sampler2DArray uCap;
uniform sampler2DArray uRad;
uniform vec4 uIsletC[ 32 ];
uniform vec4 uIsletA[ 32 ];
uniform vec4 uIsletB[ 32 ];
uniform float uMaps;
uniform sampler2DArray uMassif;
uniform sampler2DArray uMassifDepth;
uniform highp sampler2D uMassifIdx;
uniform vec4 uMassifA[ 4 ];
uniform vec4 uMassifB[ 4 ];
uniform vec2 uMassifPad;
uniform float uMassifOn;
// a massif face's colour (rgb, jungle a) at face coords uv on index texel (cx·5 + k, row), and how much it counts: 0 with no
// face there, none painted at that texel, or a painted surface more than 4–10 m off this fragment along the face's axis
vec4 mFace( int k, ivec2 c, int row, vec2 uv, float fragDepth, float scale, out float ok ) {
  float g = texelFetch( uMassifIdx, ivec2( c.x * 5 + k, row ), 0 ).r;
  ok = 0.0;
  if ( g < 0.0 ) return vec4( 0.0 );
  // four faces a layer (massif-maps.ts FACES_PER_LAYER): face g in layer g / 4, quadrant g mod 4
  float layer = floor( g * 0.25 );
  float q = g - layer * 4.0;
  vec2 p = ( vec2( mod( q, 2.0 ), floor( q * 0.5 ) ) + uMassifPad.x + clamp( uv, 0.0, 1.0 ) * uMassifPad.y ) * 0.5;
  float d = textureLod( uMassifDepth, vec3( p, layer ), 0.0 ).r;
  if ( d > 0.99 ) return vec4( 0.0 );
  ok = 1.0 - smoothstep( 4.0, 10.0, fragDepth - d * scale );
  return textureLod( uMassif, vec3( p, layer ), 0.0 );
}
float gVeg;
vec3 gNormalW;
float pHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
float pNoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  vec2 u = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( pHash( i ), pHash( i + vec2( 1.0, 0.0 ) ), u.x ), mix( pHash( i + vec2( 0.0, 1.0 ) ), pHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
}
// triplanar: side planes keep the texture's v along world y (vertical drips), the top plane uses x, z
vec3 pTri( sampler2D t, vec3 p, vec3 w ) {
  return texture2D( t, p.zy ).rgb * w.x + texture2D( t, p.xz ).rgb * w.y + texture2D( t, p.xy ).rgb * w.z;
}
// biplanar for low: the top plane and the dominant side plane
vec3 pBi( sampler2D t, vec3 p, vec3 n ) {
  vec3 a = abs( n );
  // both side taps in uniform control flow (a tap inside a per-fragment branch has no defined derivatives: wrong mips)
  vec3 side = mix( texture2D( t, p.xy ).rgb, texture2D( t, p.zy ).rgb, step( a.z, a.x ) );
  float up = smoothstep( 0.45, 0.75, a.y );
  return mix( side, texture2D( t, p.xz ).rgb, up );
}
// whiteout-blended triplanar tangent normal around world normal n
vec3 pTriN( sampler2D t, vec3 n, vec3 p, vec3 w ) {
  vec3 tx = texture2D( t, p.zy ).xyz * 2.0 - 1.0;
  vec3 ty = texture2D( t, p.xz ).xyz * 2.0 - 1.0;
  vec3 tz = texture2D( t, p.xy ).xyz * 2.0 - 1.0;
  tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
  ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
  tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
  return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
}`,Xs=`
{
  vec3 n = normalize( vKarstNormal );
  vec3 w = pow( abs( n ), vec3( 4.0 ) );
  w /= w.x + w.y + w.z;
  vec3 pr = vKarstPos * uRockScale;
  vec3 pc = vKarstPos * uCanScale;
  vec3 rock;
  vec3 leaves;
  if ( uPQ > 1.5 ) {
    // a second, coarser and offset sample hides the tile's repeat (same axes: the drips stay vertical)
    rock = mix( pTri( uRockA, pr, w ), pTri( uRockA, pr * vec3( 0.31, 0.27, 0.31 ) + 0.37, w ), 0.4 );
    // a second rock blended in by a large noise: no tile repeats over a whole cliff
    if ( uRockMix > 0.0 ) rock = mix( rock, pTri( uRockB, pr * 0.83 + 0.21, w ), smoothstep( 0.45, 0.7, pNoise( vKarstPos.xz / 45.0 + vKarstPos.y / 60.0 ) ) * uRockMix );
    leaves = mix( pTri( uCanA, pc, w ), pTri( uCanA, pc * 0.23 + 0.11, w ), 0.4 );
  } else if ( uPQ > 0.5 ) {
    // medium: one scale of each (the low-frequency tint below still breaks the repeat at range)
    rock = pTri( uRockA, pr, w );
    leaves = pTri( uCanA, pc, w );
  } else {
    rock = pBi( uRockA, pr, n );
    leaves = pBi( uCanA, pc, n );
  }
  if ( uReady < 0.5 ) { rock = vec3( 0.42 ); leaves = vec3( 0.12, 0.2, 0.08 ); }
  // low-frequency tint: towers and walls drift between two greys, no tile repeats at 500 m
  float tint = pNoise( vKarstPos.xz / 90.0 + vTower * 7.0 ) * 0.7 + pNoise( vKarstPos.xz / 23.0 + vKarstPos.y / 31.0 ) * 0.3;
  // the set's own colour, pulled towards the bay's pale grey limestone
  rock = mix( rock, vec3( dot( rock, vec3( 0.299, 0.587, 0.114 ) ) ), uDesat ) * uLift;
  // an islet with its own maps (islet-maps.ts): their colour and jungle mask, as the projection lab renders them. The maps have
  // no mips, so nothing here needs derivatives and an unmapped islet skips it all
  int iL = int( max( vIslet, 0.0 ) + 0.5 );
  vec4 iA = uIsletA[ iL ];
  float iCapW = smoothstep( 0.35, 0.75, n.y );
  vec4 iMap = vec4( 0.0 );
  float iHas = 0.0;
  float iInv = iA.w;
  if ( vIslet > -0.5 && uMaps > 0.5 ) {
    vec4 iB = uIsletB[ iL ];
    // the wrap at +X needs no care: a single level filtered with repeat blends across it
    float iU = fract( atan( vKarstPos.z - iA.y, vKarstPos.x - iA.x ) / 6.2831853 );
    float iV = 1.0 - clamp( vKarstPos.y / iA.z, 0.0, 1.0 );
    vec4 iCyl = textureLod( uCyl, vec3( iU, iV, float( iL ) ), 0.0 );
    // clamped like the cards' maskAt: an upward face just past the box (the box is the bases') reads the edge, not the far side
    vec4 iCap = textureLod( uCap, vec3( clamp( ( vKarstPos.xz - iB.xy ) / ( iB.zw - iB.xy ), 0.0, 1.0 ), float( iL ) ), 0.0 );
    iMap = mix( iCyl, iCap, iCapW );
    // a wall well inside the rock's outer surface at its bearing and height (a cluster's inner cleft) was painted with the outer
    // wall's colour: the procedural look there
    float iOuter = textureLod( uRad, vec3( iU, iV, float( iL ) ), 0.0 ).r * uIsletC[ iL ].x;
    float iInside = smoothstep( 4.0, 10.0, iOuter - length( vKarstPos.xz - iA.xy ) );
    iHas = mix( 1.0 - iInside, 1.0, iCapW );
  } else if ( vIslet < -1.5 && uMassifOn > 0.5 ) {
    // a massif (massif-maps.ts): its 100 m cell's cap and the two sides this face turns to, blended by the normal
    int mm = int( -vIslet - 1.5 );
    vec4 mA = uMassifA[ mm ];
    vec4 mB = uMassifB[ mm ];
    vec2 cell = floor( vKarstPos.xz / 100.0 );
    vec2 t = vKarstPos.xz / 100.0 - cell;
    ivec2 c = ivec2( cell - mA.xy );
    if ( c.x >= 0 && c.y >= 0 && float( c.x ) < mB.y && float( c.y ) < mB.z ) {
      int row = c.y + int( mA.z );
      float vy = 1.0 - clamp( vKarstPos.y / mA.w, 0.0, 1.0 );
      float ax = n.x * n.x;
      float az = n.z * n.z;
      float wx = ax / max( ax + az, 1e-6 );
      // the faces this fragment barely leans on are not read at all (a wall reads one side, a flat top only the cap)
      float qC = iCapW;
      float qX = ( 1.0 - iCapW ) * smoothstep( 0.08, 0.2, wx );
      float qZ = ( 1.0 - iCapW ) * smoothstep( 0.08, 0.2, 1.0 - wx );
      float okC = 0.0;
      float okX = 0.0;
      float okZ = 0.0;
      vec4 fc = vec4( 0.0 );
      vec4 fx = vec4( 0.0 );
      vec4 fz = vec4( 0.0 );
      if ( qC > 0.01 ) fc = mFace( 0, c, row, t, mA.w - vKarstPos.y, mA.w, okC );
      if ( qX > 0.01 ) fx = n.x >= 0.0 ? mFace( 1, c, row, vec2( t.y, vy ), ( cell.x + 1.0 ) * 100.0 - vKarstPos.x, 100.0, okX ) : mFace( 2, c, row, vec2( t.y, vy ), vKarstPos.x - cell.x * 100.0, 100.0, okX );
      if ( qZ > 0.01 ) fz = n.z >= 0.0 ? mFace( 3, c, row, vec2( t.x, vy ), ( cell.y + 1.0 ) * 100.0 - vKarstPos.z, 100.0, okZ ) : mFace( 4, c, row, vec2( t.x, vy ), vKarstPos.z - cell.y * 100.0, 100.0, okZ );
      float wC = qC * okC;
      float wX = qX * wx * okX;
      float wZ = qZ * ( 1.0 - wx ) * okZ;
      float wSum = wC + wX + wZ;
      iMap = ( fc * wC + fx * wX + fz * wZ ) / max( wSum, 1e-4 );
      iHas = smoothstep( 0.05, 0.4, wSum );
      iInv = mB.x;
    }
  }
  rock *= mix( uTintA, uTintB, tint );
  // grey shading by height: the lower walls darker, the crowns' rock lightest
  rock *= 1.0 - uHeightShade * ( 1.0 - smoothstep( 0.0, 0.7, vRel ) );
  // the distance read: big dark rain streaks running down the walls (5–20 m wide), on the side planes only, each plane's
  // horizontal along its own axis so they stay continuous across faces
  // narrow runnels (1–4 m) grouped in wider bands, long down the wall: the reference's dark vertical streaks on pale rock
  float sx = pNoise( vec2( vKarstPos.z / 7.0, vKarstPos.y / 80.0 ) ) * 0.45 + pNoise( vec2( vKarstPos.z / 1.6, vKarstPos.y / 40.0 ) ) * 0.55;
  float sz = pNoise( vec2( vKarstPos.x / 7.0 + 17.0, vKarstPos.y / 80.0 ) ) * 0.45 + pNoise( vec2( vKarstPos.x / 1.6 + 5.0, vKarstPos.y / 40.0 ) ) * 0.55;
  float streak = ( sx * w.x + sz * w.z ) / max( w.x + w.z, 1e-3 );
  float wallness = 1.0 - smoothstep( 0.35, 0.7, abs( n.y ) );
  float stain = smoothstep( uStreakLo, uStreakLo + 0.22, streak + ( 1.0 - vOcc ) * 0.3 ) * wallness;
  rock = mix( rock, rock * uStain, stain * uStreak );
  // the wet band: darker rising 1.5–2.5 m over the water, its edge irregular
  float wetTop = uWetTop - 1.0 + 1.5 * pNoise( vec2( ( vKarstPos.x + vKarstPos.z ) / 3.0, 7.0 ) );
  float wet = 1.0 - smoothstep( wetTop - 0.8, wetTop + 0.4, vKarstPos.y );
  rock = mix( rock, rock * uWet, wet );

  // vegetation in world space: up-facing faces, ledges and each tower's upper share, broken by two noise scales so the edge
  // is ragged and does not follow the faces' edges
  float rag = pNoise( vKarstPos.xz / 4.0 + vKarstPos.y * 0.17 ) * 0.6 + pNoise( vKarstPos.zy / 1.6 + vKarstPos.x * 0.29 ) * 0.4;
  // shrubs on any face less steep than ~70°, the crown and the upper share wrapped, the sheerest walls bare
  float up = smoothstep( 0.22, 0.42, n.y );
  // the wrapped share's lower edge broken into tongues running down the wall, never one level band round the tower
  float tongue = pNoise( vec2( ( vKarstPos.x + vKarstPos.z ) / 6.0, vKarstPos.y / 60.0 ) );
  float top = smoothstep( uCloak - 0.1, uCloak + 0.1, vRel + ( pNoise( vKarstPos.xz / 30.0 ) - 0.5 ) * 0.3 + ( tongue - 0.5 ) * 0.5 );
  float cliff = 1.0 - smoothstep( -0.2, 0.15, n.y );
  // and patches hanging on the walls (shrubs rooted in cracks), not on the sheerest overhangs
  float patchy = smoothstep( 0.66, 0.8, pNoise( vec2( ( vKarstPos.x + vKarstPos.z ) / 5.0, vKarstPos.y / 28.0 ) ) ) * ( 1.0 - cliff );
  // green hanging down from ledges and the crown: streaks of the same kind as the rain stains, below the wrapped share
  float hangN = ( pNoise( vec2( vKarstPos.z / 3.0 + 3.0, vKarstPos.y / 45.0 ) ) * w.x + pNoise( vec2( vKarstPos.x / 3.0 + 9.0, vKarstPos.y / 45.0 ) ) * w.z ) / max( w.x + w.z, 1e-3 );
  float hang = smoothstep( 0.6, 0.78, hangN ) * smoothstep( uCloak - 0.35, uCloak - 0.05, vRel );
  float veg = max( max( max( up, vLedge * 0.8 ), top * ( 1.0 - cliff * 0.45 ) ), max( patchy * 0.9, hang ) ) * uGreen;
  veg = smoothstep( 0.4, 0.62, veg + ( rag - 0.5 ) * 0.9 ) * smoothstep( 2.5, 6.0, vKarstPos.y );
  // an authored rock (aGreen 0: Trống Mái) stays bare: tufts on its crown and a few ledges only
  float tuft = smoothstep( 0.5, 0.7, up * smoothstep( 0.8, 0.9, vRel + ( rag - 0.5 ) * 0.2 ) + vLedge * patchy );
  veg = mix( tuft * uGreen, veg, vGreen );
  // the mask's own edge, broken by a coarse noise only (the fine one dithers a half-covered wall into speckle)
  float iRag = pNoise( vec2( vKarstPos.x + vKarstPos.z, vKarstPos.y * 1.7 ) / 7.0 );
  veg = mix( veg, smoothstep( 0.32, 0.58, iMap.a + ( iRag - 0.5 ) * 0.22 ) * smoothstep( 2.5, 6.0, vKarstPos.y ), iHas );
  gVeg = veg;

  gNormalW = n;
  if ( uPQ > 0.5 && uReady > 0.5 ) {
    vec3 nr = pTriN( uRockN, n, pr, w );
    vec3 nc = pTriN( uCanN, n, pc, w );
    gNormalW = normalize( mix( n, mix( nr, nc, veg ), uNrm ) );
  }
  // deeper, more saturated jungle green; a canopy seen from above is mostly its own shade (no pale sunlit lawn on a plateau)
  leaves = mix( vec3( dot( leaves, vec3( 0.299, 0.587, 0.114 ) ) ), leaves, uLeafSat ) * uLeafTint;
  leaves *= 1.0 - 0.3 * smoothstep( 0.55, 0.95, n.y );
  // a mapped islet's rock: the map's hue and low-frequency variation at the material's own rock brightness (iA.w: 1 over the
  // map's mean rock luminance), streaks and wet band included
  rock = mix( rock, iMap.rgb * dot( rock, vec3( 0.2126, 0.7152, 0.0722 ) ) * iInv, iHas );
  vec3 c = mix( rock, leaves, veg );
  c *= mix( mix( 0.4, 0.62, veg ), 1.0, vOcc );
  diffuseColor.rgb = c;
}`,Zs=`
normal = normalize( ( viewMatrix * vec4( gNormalW, 0.0 ) ).xyz );
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif
`,Qs={stain:2895666,wet:6973016,wetTop:2.5,cloak:.52,green:1,canopyFill:.22,rockFill:.32},$s=new WeakMap;function ec(e,t){let n=$s.get(e);if(!n)return;n.uMassif.value=t.colour,n.uMassifDepth.value=t.depth,n.uMassifIdx.value=t.index,n.uMassifA.value=t.layout.a,n.uMassifB.value=t.layout.b;let r=fs[0];n.uMassifPad.value.set(r.pad/r.faceSize,(r.faceSize-2*r.pad)/r.faceSize),n.uMassifOn.value=1}var tc=new WeakMap;function nc(e,t){let n=tc.get(e);n&&(n.uCyl.value=t.cyl,n.uCap.value=t.cap,n.uRad.value=t.rad,n.uMaps.value=1)}var rc=new WeakMap;function ic(e,t,n){let r=rc.get(e);n?rc.set(e,[...r??[],t]):r?r.push(t):e.image&&t()}function ac(e){let t=rc.get(e);rc.delete(e);for(let e of t??[])e()}function oc(e,t=qs){let n=Js(e);return[`rockA`,`canA`,...Ks[t].rockAlt&&n===2?[`rockB`]:[],...n>0?[`rockN`,`canN`]:[]]}function sc(e,t,n=qs){let r=Ks[n],i={...Qs,...r.look},a=t===`low`?`low`:t===`medium`?`medium`:`full`;return e.custom(`bay:proc-karst:${n}:${a}`,a=>{let o=a(new R({color:16777215,roughness:.88,metalness:0,envMapIntensity:.6}));o.name=`proc-karst`;let s=$o(),c={uRockA:{value:null},uRockN:{value:null},uCanA:{value:null},uCanN:{value:null},uRockScale:{value:1/r.rock.tile},uCanScale:{value:1/r.canopy.tile},uPQ:{value:Js(t)},uReady:{value:0},uTintA:{value:new P(i.tintA)},uTintB:{value:new P(i.tintB)},uWet:{value:new P(i.wet)},uWetTop:{value:i.wetTop},uCloak:{value:i.cloak},uGreen:{value:i.green},uDesat:{value:i.desat},uLift:{value:i.lift},uStain:{value:new P(i.stain)},uStreak:{value:i.streak},uLeafSat:{value:i.leafSat},uLeafTint:{value:new P(i.leafTint)},uRockB:{value:null},uRockMix:{value:0},uNrm:{value:i.normal},uHeightShade:{value:i.heightShade??0},uStreakLo:{value:i.streakLo??.52},uCanopyFill:{value:i.canopyFill},uCyl:{value:es()},uCap:{value:es()},uRad:{value:es()},uIsletC:{value:s.c},uIsletA:{value:s.a},uIsletB:{value:s.b},uMaps:{value:0},uMassif:{value:es()},uMassifDepth:{value:es()},uMassifIdx:{value:gs()},uMassifA:{value:hs([]).a},uMassifB:{value:hs([]).b},uMassifPad:{value:new dn(0,1)},uMassifOn:{value:0},uRockFill:{value:i.rockFill}};if(o.userData.procKarst=c,tc.set(o,c),$s.set(o,c),typeof document<`u`){let i=t===`low`?512:1024,a=oc(t,n),o=a.length,s=()=>{--o===0&&(c.uReady.value=1)},l=(t,n,r)=>{let i=!1,a=e.texture(t,()=>{i=!0;let e=new Kn().load(n,()=>ac(e),void 0,e=>console.warn(`karst texture ${n} failed; flat stand-in kept`,e));return e.wrapS=e.wrapT=zn,e.colorSpace=r?Dn:``,e.anisotropy=4,e});return ic(a,s,i),a};c.uRockA.value=l(`bay:proc-rock-a-${n}-${i}`,r.rock.albedo[i],!0),c.uCanA.value=l(`bay:proc-canopy-a-${n}-${i}`,r.canopy.albedo[i],!0),a.includes(`rockB`)&&r.rockAlt&&(c.uRockB.value=l(`bay:proc-rock-b-${n}-${i}`,r.rockAlt[i],!0),c.uRockMix.value=.6),a.includes(`rockN`)&&(c.uRockN.value=l(`bay:proc-rock-n-${n}`,r.rock.normal,!1),c.uCanN.value=l(`bay:proc-canopy-n-${n}`,r.canopy.normal,!1))}return o.onBeforeCompile=e=>{Object.assign(e.uniforms,c),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${Qr}\nattribute float aGreen;\nvarying float vGreen;\nattribute float aIslet;\nvarying float vIslet;`).replace(`#include <project_vertex>`,`#include <project_vertex>\n${$r}\nvGreen = aGreen;\nvIslet = aIslet;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uCanopyFill;\nuniform float uRockFill;\n${Ys}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${Xs}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${Zs}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * mix( uRockFill, uCanopyFill, gVeg );`)},o.customProgramCacheKey=()=>`proc-karst-v9`,o})}var cc=20,lc=6,uc=.8;function dc(e,t,n){let r=t.tile,i=n.maps;if(t.layer>=0&&i)return Ia(e,r,(e,n,r,a)=>ns(i,t.layer,e,n,r,a),t.top<cc?lc:160);let a=n.massifs;if(t.layer<-1&&a?.mask)return Ia(e,r,(e,n,r,i,o,s)=>{let c=As(a,-2-t.layer,e,n,r,o,i,s);return c>=0?c:i>.5?.6:0},160);if(!t.hero)return Ea(e,r,160,8,ya,ba);let o=Ea(e,r,160,8,ya,ba),s=t.foot+(t.top-t.foot)*uc,c=[];for(let e=0;e<o.length&&c.length<216;e+=9)o[e+1]>=s&&c.push(...o.subarray(e,e+9));return Float32Array.from(c)}function fc(e){let t=new F;for(let[n,r]of Object.entries(e.attributes))t.setAttribute(n,new I(r.array,r.itemSize));return t.setIndex(new I(e.index,1)),t.computeBoundingSphere(),t}function pc(e){let t=e.userData.greens;return t instanceof Float32Array?t:null}var mc=class{worker=null;failed=!1;seq=0;pending=new Map;masks={maps:null,massifs:null};sent={maps:null,massifs:null};get busy(){return this.pending.size}spawn(){if(this.worker||this.failed)return this.worker;if(typeof Worker>`u`)return this.failed=!0,null;try{let e=new Worker(new URL(new URL(`proc-tile-worker-DWrZjoqS.js`,import.meta.url).href,``+import.meta.url),{type:`module`});e.onmessage=e=>{let t=this.pending.get(e.data.id);if(t){if(this.pending.delete(e.data.id),e.data.arrays){let n=fc(e.data.arrays);e.data.greens&&(n.userData.greens=e.data.greens),t.resolve(n)}else t.reject(Error(`karst tile: ${e.data.error??`worker error`}`))}},e.onerror=e=>{e.preventDefault(),this.fail()},e.onmessageerror=()=>this.fail(),this.worker=e}catch{this.failed=!0}return this.worker}fail(){this.failed=!0,this.worker?.terminate(),this.worker=null;let e=[...this.pending.values()];this.pending.clear();for(let t of e)this.inline(t.req).then(t.resolve,t.reject)}async inline(e){await p();let t=Ko(e.pieces,e.foot,e.top,e.centre,e.green,e.hiders,e.order,e.layer);return e.greens&&(t.userData.greens=dc(t,e.greens,this.masks)),t}setMasks(e){this.masks={...this.masks,...e}}sendMasks(e,t){let n=t.greens;if(!n)return;let r=n.layer>=0?`maps`:n.layer<-1?`massifs`:null;r&&this.sent[r]!==this.masks[r]&&(e.postMessage({masks:{[r]:this.masks[r]}}),r===`maps`?this.sent.maps=this.masks.maps:this.sent.massifs=this.masks.massifs)}build(e){let t=this.spawn();if(!t)return this.inline(e);let n=++this.seq;return new Promise((r,i)=>{this.pending.set(n,{req:e,resolve:r,reject:i});try{this.sendMasks(t,e),t.postMessage({id:n,...e})}catch{this.fail()}})}dispose(){this.worker?.terminate(),this.worker=null,this.pending.clear()}},hc={ultra:[500,1500],high:[350,1e3],medium:[180,600],low:[120,450]},gc={ultra:8e5,high:52e4,medium:22e4,low:48e3},_c=6,vc=2,yc=1.5,bc=.1,xc=6,Sc=`proc-karsts`;function Cc(e,t){let n=new Map(t.map(e=>[e.id,e])),r=[];return e.karsts.forEach((e,t)=>{if(e.proc===void 0)return;let i=n.get(e.proc);if(!i)return;let a=Wo(i.karst),o=i.id>=100,s=Qo(i.id),c=ms(i.id),l=s>=0?s:c>=0?-2-c:-1,u=new Map,d=(e,n)=>{let r=`${e},${n}`,s=u.get(r);return s||(s={karst:t,islet:i.id,ix:e,iz:n,box:[1/0,1/0,-1/0,-1/0],pieces:[],hiders:[],order:[],foot:a,top:i.karst.top,centre:[i.frame[0],i.frame[1]],hero:o,layer:l,lod2:null,lod3:null},u.set(r,s)),s},f=(e,t,n)=>{e.box[0]=Math.min(e.box[0],t),e.box[1]=Math.min(e.box[1],n),e.box[2]=Math.max(e.box[2],t),e.box[3]=Math.max(e.box[3],n)},p=i.karst.pieces.map(Dc),m=i.karst.pieces.map(e=>Go(e,100));for(let[e,t]of i.karst.pieces.entries()){let n=d(...m[e]);n.pieces.push(t),n.order.push(e);for(let e=0;e<t.bottom.length;e+=2)f(n,t.bottom[e],t.bottom[e+1])}let h=new Tc(p);for(let e of u.values()){let t=new Set(e.order),n=e.order.map(e=>p[e]),r=n.reduce((e,t)=>[Math.min(e[0],t[0]),Math.min(e[1],t[1]),Math.max(e[2],t[2]),Math.max(e[3],t[3])],[1/0,1/0,-1/0,-1/0]),a=[];for(let e of h.near(r,bc)){if(t.has(e))continue;let i=p[e];wc(r,i)&&n.some(e=>wc(e,i))&&a.push(e)}for(let t of a)e.hiders.push(i.karst.pieces[t]),e.order.push(t)}for(let e of i.meshes){if(e.lod!==2&&e.lod!==3)continue;let t=d(e.ix,e.iz),n=Ec(e,t.centre,+!t.hero,t.layer);e.lod===2?t.lod2=n:t.lod3=n;for(let n=0;n<e.pos.length;n+=3)f(t,e.pos[n],e.pos[n+2])}r.push(...[...u.values()].sort((e,t)=>e.ix-t.ix||e.iz-t.iz))}),r}var wc=(e,t)=>e[0]<=t[2]+bc&&t[0]<=e[2]+bc&&e[1]<=t[3]+bc&&t[1]<=e[3]+bc,Tc=class{cell;cells=new Map;seen;stamp=0;constructor(e,t=25){this.cell=t,this.seen=new Uint32Array(e.length),e.forEach((e,t)=>{e[0]<=e[2]&&e[1]<=e[3]&&this.each(e[0],e[1],e[2],e[3],e=>{let n=this.cells.get(e);n?n.push(t):this.cells.set(e,[t])})})}near(e,t){let n=[];if(!(e[0]<=e[2]&&e[1]<=e[3]))return n;let r=++this.stamp;return this.each(e[0]-t,e[1]-t,e[2]+t,e[3]+t,e=>{for(let t of this.cells.get(e)??[])this.seen[t]!==r&&(this.seen[t]=r,n.push(t))}),n.sort((e,t)=>e-t)}each(e,t,n,r,i){let a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let e=Math.floor(t/a);e<=Math.floor(r/a);e++)i(o*65536+e)}};function Ec(e,t,n=1,r=-1){let i=new F;return i.setAttribute(`position`,new I(e.pos,3)),i.setAttribute(`normal`,new I(e.nrm,3)),i.setIndex(new I(e.idx,1)),Uo(i,e.foot,e.top,t,n,r),i}function Dc(e){let t=[1/0,1/0,-1/0,-1/0],n=(e,n)=>{t[0]=Math.min(t[0],e),t[1]=Math.min(t[1],n),t[2]=Math.max(t[2],e),t[3]=Math.max(t[3],n)};for(let t=0;t<e.bottom.length;t+=2)n(e.bottom[t],e.bottom[t+1]);for(let t=0;t<e.top.length;t+=2)n(e.top[t],e.top[t+1]);for(let t=0;t<(e.roof?.length??0);t+=3)n(e.roof[t],e.roof[t+2]);return t}function Oc(e,t,n){let r=Math.max(e.box[0]-t,0,t-e.box[2]),i=Math.max(e.box[1]-n,0,n-e.box[3]);return Math.sqrt(r*r+i*i)}function kc(e,t,n){let[r,i]=hc[n],a=(e,n)=>t>=0&&t<=n?e*1.1:e;return e<a(r,0)?0:e<a(i,2)?2:3}function Ac(e){let t=512;for(;t<e;)t=Math.ceil(t*1.25/64)*64;return t}var jc={0:0,2:1,3:2},Mc=class{lib;setId;opts;group=new N;tiles;greens;batch=null;meshes=[];ids=[];lod0=[];want;shown;dist;building;inFlight=0;failed;noRoom;placeholder=-1;slots=[];pool={verts:0,index:0};poolBuilt=0;client=new mc;build;maps=null;toPlant=[];toPlace=[];mapsSettled=!1;massifs=null;massifsSettled=!1;mapsWait=null;mapsLoaded;material;tier;disposed=!1;counts={lod0:0,compactions:0,failed:0};constructor(e,t,n,r,i=qs,a={}){this.lib=n,this.setId=i,this.opts=a,this.group.name=`proc-karst-view`,this.tier=r,this.build=a.build??(e=>this.client.build(e));let o=(a.maps??cs)().then(e=>{this.maps=e,this.client.setMasks({maps:this.greenMasks().maps}),this.mapsSettled=!0,e&&nc(this.material,e)}).catch(e=>console.warn(`karst islet maps failed`,e)),s=(a.massifs??(()=>Ss(ws(r),va[r]>0)))().then(e=>{this.massifs=e,this.client.setMasks({massifs:this.greenMasks().massifs}),this.massifsSettled=!0,e&&ec(this.material,e)}).catch(e=>console.warn(`karst massif maps failed`,e)),c=()=>{},l=new Promise(e=>c=e);this.mapsWait=setTimeout(()=>{this.mapsSettled=!0,this.massifsSettled=!0,c()},a.mapsWaitMs??3500),this.mapsLoaded=Promise.race([Promise.all([o,s]).then(()=>void 0),l]),this.tiles=Cc(e,t);let u=this.tiles.length;this.want=new Int8Array(u).fill(-1),this.shown=new Int8Array(u).fill(-1),this.dist=new Float64Array(u),this.building=new Uint8Array(u),this.failed=new Uint8Array(u),this.noRoom=new Uint8Array(u),this.lod0=Array(u).fill(null),this.material=sc(n,r,i),this.greens=new Fa(u,r,{cards:!0,leafUrl:Ks[i].leaves});for(let[e,t]of this.tiles.entries())t.hero&&this.greens.keep(e,xc);this.group.add(this.greens.group),Pe()?this.buildBatch():this.buildMeshes()}buildBatch(){let e=0,t=0;for(let n of this.tiles)for(let r of[n.lod2,n.lod3])r&&(e+=r.getAttribute(`position`).count,t+=r.index.count);let n=this.opts.pool??gc[this.tier];this.pool={verts:n,index:n*_c},this.poolBuilt=n;let r=new Ln(this.tiles.length,e+this.pool.verts,t+this.pool.index,this.material);r.name=Sc,this.ids=this.tiles.map(e=>{let t=e.lod2?r.addGeometry(e.lod2):-1,n=e.lod3?r.addGeometry(e.lod3):-1;return this.placeholder<0&&(this.placeholder=t>=0?t:n),[-1,t,n]});for(let[e]of this.ids.entries()){if(r.addInstance(this.parked(e))!==e)throw Error(`proc karsts: instance ids out of step`);r.setVisibleAt(e,!1)}for(let e of this.tiles)e.lod2?.dispose(),e.lod3?.dispose();Kt(r.geometry),r.castShadow=!1,r.receiveShadow=!0,this.batch=r,this.group.add(r)}buildMeshes(){this.meshes=this.tiles.map(e=>{let t=new j(e.lod2??e.lod3??new F,this.material);return t.name=Sc,t.receiveShadow=!0,t.visible=!1,this.group.add(t),t})}parked(e){let t=this.ids[e];return t[1]>=0?t[1]:t[2]>=0?t[2]:this.placeholder}fallbackGeometry(e,t){let n=this.tiles[e];return t===0?this.lod0[e]:t===2?n.lod2:n.lod3}has(e,t){return this.batch?this.ids[e][jc[t]]>=0:this.fallbackGeometry(e,t)!==null}show(e,t){if(t!==this.shown[e]){if(this.shown[e]=t,this.batch)t>=0&&this.batch.setGeometryIdAt(e,this.ids[e][jc[t]]),this.batch.setVisibleAt(e,t>=0);else{let n=this.meshes[e];t>=0&&(n.geometry=this.fallbackGeometry(e,t)),n.visible=t>=0}this.greens.show(e,t===0)}}update(e,t){let n=[];for(let r=0;r<this.tiles.length;r++){let i=Oc(this.tiles[r],e.x,e.z);if(this.dist[r]=i,i>=t){this.want[r]=-1,this.show(r,-1),this.batch||this.dropFallbackLod0(r);continue}let a=kc(i,this.want[r],this.tier);this.want[r]=a,a!==0&&(this.noRoom[r]=0);let o=this.tiles[r];a===0&&o.pieces.length&&!this.has(r,0)&&!this.building[r]&&!this.failed[r]&&!this.noRoom[r]&&this.mapsReady(o)&&n.push(r);let s=a;s===0&&!this.has(r,0)&&(s=o.pieces.length?2:-1),s===2&&!this.has(r,2)&&(s=this.has(r,3)?3:-1),s===3&&!this.has(r,3)&&(s=-1),this.show(r,s),!this.batch&&a!==0&&this.dropFallbackLod0(r)}n.sort((e,t)=>this.dist[e]-this.dist[t]);for(let e of n){if(this.inFlight>=vc)break;this.requestLod0(e)}let r=this.toPlace.shift();r&&(this.building[r.tile]=0,this.placeLod0(r.tile,r.g));let i=this.toPlant.shift();i&&!this.greens.has(i.tile)&&this.greens.wants(i.tile)&&(this.greens.plant(i.tile,i.greens),this.greens.show(i.tile,this.shown[i.tile]===0))}greenMasks(){let e=this.maps,t=this.massifs;return{maps:e?{cylMask:e.cylMask,capMask:e.capMask}:null,massifs:t?.mask?{mask:t.mask,depthCpu:t.depthCpu,layout:t.layout,size:t.size}:null}}dropFallbackLod0(e){let t=this.lod0[e];t&&(t.dispose(),this.lod0[e]=null)}requestLod0(e){let t=this.tiles[e];this.building[e]=1,this.inFlight++;let n=!this.greens.has(e)&&this.greens.wants(e)?{tile:e,layer:t.layer,hero:t.hero,foot:t.foot,top:t.top}:void 0;this.build({pieces:t.pieces,foot:t.foot,top:t.top,centre:t.centre,green:+!t.hero,hiders:t.hiders,order:t.order,layer:t.layer,...n?{greens:n}:{}}).then(t=>{if(this.inFlight--,this.disposed)return t.dispose();this.toPlace.push({tile:e,g:t})},n=>{this.building[e]=0,this.inFlight--,this.counts.failed++,console.warn(`karst tile ${t.islet}/${t.ix},${t.iz}: LOD0 not built:`,n),this.failed[e]=1})}placeLod0(e,t){if(this.counts.lod0++,!this.greens.has(e)&&this.greens.wants(e)&&!this.toPlant.some(t=>t.tile===e)&&this.toPlant.push({tile:e,greens:pc(t)??this.tileGreens(e,t)}),this.want[e]!==0){t.dispose();return}if(!this.batch){this.lod0[e]=t;return}let n=this.acquire(e,t);t.dispose(),n?this.ids[e][0]=n.id:this.noRoom[e]=1}mapsReady(e){return e.layer>=0?this.mapsSettled:e.layer<-1?this.massifsSettled:!0}tileGreens(e,t){let n=this.tiles[e];return dc(t,{tile:e,layer:n.layer,hero:n.hero,foot:n.foot,top:n.top},this.greenMasks())}free(e){return e.tile<0||this.want[e.tile]!==0}acquire(e,t){let n=this.batch,r=t.getAttribute(`position`).count,i=t.index.count,a=Ac(r),o=Ac(i),s=null;for(let e of this.slots)!this.free(e)||e.verts<r||e.index<i||e.verts>a*yc||e.index>o*yc||(!s||e.verts<s.verts)&&(s=e);if(s)return this.release(s),n.setGeometryAt(s.id,t),s.tile=e,s;if((a>this.pool.verts||o>this.pool.index)&&this.slots.some(e=>this.free(e))){for(let e of this.slots.filter(e=>this.free(e)))this.release(e),n.deleteGeometry(e.id),this.pool.verts+=e.verts,this.pool.index+=e.index;this.slots=this.slots.filter(e=>!this.free(e)),n.optimize(),this.counts.compactions++}if(a>this.pool.verts||o>this.pool.index)return null;this.pool.verts-=a,this.pool.index-=o;let c={id:n.addGeometry(t,a,o),verts:a,index:o,tile:e};return this.slots.push(c),c}release(e){if(e.tile<0)return;let t=e.tile;this.ids[t][0]=-1,e.tile=-1,this.shown[t]===0&&(this.shown[t]=-2,this.show(t,this.has(t,2)?2:this.has(t,3)?3:-1)),this.shown[t]===-1&&this.batch.setGeometryIdAt(t,this.parked(t))}reflection(e){let t=this.batch;if(t)for(let n=0;n<this.shown.length;n++){if(this.shown[n]!==0)continue;let r=this.ids[n][1];r<0||t.setGeometryIdAt(n,e?r:this.ids[n][0])}}outgrown(e){return this.batch!==null&&gc[e]>this.poolBuilt}async texturesReady(e){if(await this.mapsLoaded,this.disposed)return;let t=this.material.userData.procKarst;for(let n of[`uCyl`,`uCap`,`uRad`,`uMassif`,`uMassifDepth`,`uMassifIdx`]){let r=t[n]?.value;try{r instanceof Gn&&e.initTexture(r)}catch{}}}setQuality(e){this.tier=e,this.material=sc(this.lib,e,this.setId),this.maps&&nc(this.material,this.maps),this.massifs&&ec(this.material,this.massifs),this.batch&&(this.batch.material=this.material);for(let e of this.meshes)e.material=this.material;this.greens.setQuality(e),this.want.fill(-1)}stats(){let e=[0,0,0,0];return this.shown.forEach(t=>{t>=0&&e[t]++}),{tiles:this.tiles.length,lods:e,lod0Built:this.counts.lod0,compactions:this.counts.compactions,failed:this.counts.failed,pool:{...this.pool},greens:this.greens.count}}dispose(){this.disposed=!0,this.mapsWait&&clearTimeout(this.mapsWait),this.client.dispose(),this.batch?.dispose();for(let e of this.tiles)e.lod2?.dispose(),e.lod3?.dispose();for(let e of this.lod0)e?.dispose();for(let e of this.toPlace)e.g.dispose();this.toPlace.length=0,this.greens.dispose(),this.group.clear()}},Nc={ultra:[140,400,1e3,1800],high:[90,260,600,1300],medium:[55,170,400,800],low:[0,0,0,300]},Pc=.6,Fc={ultra:26e4,high:18e4,medium:15e4,low:0},Ic=6,Lc=1.5,Rc=1500;function zc(e){let t=512;for(;t<e;)t=Math.ceil(t*1.25/64)*64;return t}var Bc=class{group=new N;sea;seaView;batch=null;lodIds=[];greens;load={ms:0,vertices:0,lod0:0};bay;material;lib;models=null;get texturesPending(){return this.models?.texturesPending??!1}texturesReady(e){return Promise.all([this.models?.prepare(e),this.proc?.texturesReady(e)]).then(()=>void 0)}modelWant=new Int8Array;owned=[];tier;cull=1/0;castShadows=!0;water=null;contact=null;keep=`full`;karstObjects=[];karstOwned=[];want=new Int8Array;shown=new Int8Array;slots=[];pool={verts:0,index:0};poolBuilt=0;compactions=0;waiting=new Map;lod0Builds=new Uint32Array;dist=new Float64Array;queue=[];byDist=(e,t)=>this.dist[e]-this.dist[t];lod0=[];lod1=[];relief=new Float32Array;near=[];far=[];proxyBatch=null;shadowDir={x:0,z:0,perMetre:0};shadowMaterial=Gc();mirrorLod=0;proc=null;procDrawn=new Uint8Array;constructor(e,t,n,r){this.group.name=`bay`,this.bay=e,this.tier=r,this.lib=t,this.material=si(t),this.greens=new Fa(e.karsts.length,r),this.buildProc(),this.buildKarsts(),this.water=n,this.contact=Xc(e),Kr(n,this.contact,-qc,-qc,qc*2),this.seaView=new jo(n,r,t.profile.waterMirror!==!1),this.sea=this.seaView.mesh,this.group.add(this.sea,this.greens.group),this.buildSetPieces(t),ii(this.material,r)}buildProc(){let e=this.bay.proc?.length?lt():null;if(this.procDrawn=new Uint8Array(this.bay.karsts.length),e){this.proc?.dispose(),this.proc&&this.group.remove(this.proc.group),this.proc=new Mc(this.bay,e.islets,this.lib,this.tier,Rt().set??void 0);for(let e of this.proc.tiles)this.procDrawn[e.karst]=1;this.group.add(this.proc.group)}}buildKarsts(){let e=performance.now();for(let e of this.karstObjects)this.group.remove(e);for(let e of this.karstOwned)e.dispose();this.karstObjects=[],this.karstOwned=[],this.batch=null,this.proxyBatch=null,this.lodIds=[],this.slots=[],this.near=[],this.far=[];let t=this.bay.karsts.length;this.want=new Int8Array(t).fill(-1),this.shown=new Int8Array(t).fill(-1),this.lod0=Array(t).fill(null),this.lod0Builds=new Uint32Array(t),this.dist=new Float64Array(t);for(let e of this.waiting.values())e.dispose();this.waiting.clear(),this.keep=this.tier===`low`?`q`:`full`;let n=this.keep===`q`?this.bay.karsts.map(()=>3):Wc(this.bay);this.relief=this.keep===`q`?new Float32Array:Hc(n);let r=this.bay.karsts.map((e,t)=>{if(this.procDrawn[t]){let t=ga(e,4);return[null,t,t,t,t]}let r=ga(e,3),i=ga(e,4);if(n[t]===3)return[null,r,r,r,i];let a=ga(e,2);return[null,n[t]<=1?ga(e,1,0,this.relief[t]??0):a,a,r,i]}),i=new Set(r.flat().filter(e=>e!==null)),a=0;for(let e of i)a+=e.getAttribute(`position`).count;this.lod1=[],Pe()?this.buildBatch(r,i):(this.buildTiles(r),this.keep===`full`&&(this.lod1=r.map(e=>e[1]))),this.keep===`full`&&this.batch&&this.buildProxyBatch(),this.models=new ta(this.bay,this.lib,this.tier,this.castShadows),this.modelWant=new Int8Array(this.models.towers.length).fill(-1),this.group.add(this.models.group),this.karstObjects.push(this.models.group),this.karstOwned.push(this.models);for(let e of i)e.dispose();if(this.load.lod0=0,this.keep===`full`){let e=Nc[this.tier][0]*1.1,t=[this.bay.start.spawn.position,this.bay.sprint.spawn.position];this.bay.karsts.forEach((n,r)=>{if(this.procDrawn[r]||!t.some(t=>Math.hypot(n.x-t[0],n.z-t[2])-n.extent<e))return;this.want[r]=0;let i=this.buildLod0(r);i>0&&(this.load.lod0+=i)})}this.load.ms=performance.now()-e,this.load.vertices=a+this.load.lod0}buildBatch(e,t){let n=0,r=0;for(let e of t)n+=e.getAttribute(`position`).count,r+=e.index.count;let i=this.keep===`q`?0:Fc[this.tier];this.pool={verts:i,index:i*Ic},this.poolBuilt=i;let a=new Ln(this.bay.karsts.length,n+this.pool.verts,r+this.pool.index,this.material);a.name=`karsts`;let o=new Map;for(let t of e){let e=t.map(e=>{if(!e)return-1;let t=o.get(e)??a.addGeometry(e);return o.set(e,t),t});this.lodIds.push(e),a.addInstance(e[2])}a.castShadow=this.castShadows&&this.keep===`q`,a.receiveShadow=!0,Kt(a.geometry),this.batch=a,this.group.add(a),this.karstObjects.push(a),this.karstOwned.push(a)}buildProxyBatch(){let e=this.bay.karsts.map(e=>ga(e,3,3)),t=0,n=0;for(let r of e)t+=r.getAttribute(`position`).count,n+=r.index.count;let r=new Ln(this.bay.karsts.length,t,n,this.shadowMaterial);r.name=`karst-shadows`;for(let t of e)r.addInstance(r.addGeometry(t));for(let t of e)t.dispose();r.castShadow=this.castShadows,Kc(r),Kt(r.geometry),this.proxyBatch=r,this.group.add(r),this.karstObjects.push(r),this.karstOwned.push(r)}tileMesh(e,t){let n=cr(e,!1),r=new j(n,this.material);return r.name=`karsts-lod${t}`,r.castShadow=this.castShadows&&this.keep===`q`,r.receiveShadow=!0,r.visible=!1,this.group.add(r),this.karstObjects.push(r),this.karstOwned.push(n),r}buildTiles(e){let t=new Map,n=new Map;if(this.bay.karsts.forEach((e,r)=>{if(this.procDrawn[r])return;let i=`${Math.floor(e.x/200)},${Math.floor(e.z/200)}`,a=t.get(i);if(!a){a={towers:[],meshes:[null,null,null,null,null],set:new Set,wantSet:[],want:-1,shown:-1,d:1/0},t.set(i,a);let r=`${Math.floor(e.x/400)},${Math.floor(e.z/400)}`,o=n.get(r)??{near:[],meshes:[null,null,null,null,null],proxy:null};n.set(r,o),o.near.push(a)}a.towers.push(r)}),this.near=[...t.values()],this.far=[...n.values()],this.keep===`full`)for(let t of this.near)for(let n of[1,2])t.meshes[n]=this.tileMesh(t.towers.map(t=>e[t][n]),n);let r=this.keep===`q`?[3,4]:[1,2,3,4];for(let t of this.far){let n=t.near.flatMap(e=>e.towers);for(let i of r)t.meshes[i]=this.tileMesh(n.map(t=>e[t][i]),i);if(this.keep===`q`)continue;let i=cr(n.map(e=>ga(this.bay.karsts[e],3,3)),!1),a=new j(i,this.shadowMaterial);a.name=`karst-shadows`,a.castShadow=this.castShadows,Kc(a),this.group.add(a),this.karstObjects.push(a),this.karstOwned.push(i),t.proxy=a}}buildLod0(e){let t=this.waiting.get(e);if(!t&&(t=ga(this.bay.karsts[e],0,0,this.relief[e]??0),this.lod0Builds[e]++,!this.greens.has(e))){let n=this.bay.karsts[e],r=n.model?Ci(n,0):t;this.greens.plant(e,Ea(r,e)),r!==t&&r.dispose()}let n=t.getAttribute(`position`).count;if(!this.batch)return this.lod0[e]=t,n;let r=this.acquire(e,t);return r?(this.waiting.delete(e),t.dispose(),this.lodIds[e][0]=r.id,n):(this.waiting.set(e,t),-1)}free(e){return e.tower<0||this.want[e.tower]!==0}acquire(e,t){let n=this.batch,r=t.getAttribute(`position`).count,i=t.index.count,a=zc(r),o=zc(i),s=null;for(let e of this.slots)!this.free(e)||e.verts<r||e.index<i||e.verts>a*Lc||e.index>o*Lc||(!s||e.verts<s.verts)&&(s=e);if(s)return s.tower>=0&&(this.lodIds[s.tower][0]=-1),n.setGeometryAt(s.id,t),s.tower=e,s;if((a>this.pool.verts||o>this.pool.index)&&this.slots.some(e=>this.free(e))){for(let e of this.slots.filter(e=>this.free(e)))e.tower>=0&&(this.lodIds[e.tower][0]=-1),n.deleteGeometry(e.id),this.pool.verts+=e.verts,this.pool.index+=e.index;this.slots=this.slots.filter(e=>!this.free(e)),n.optimize(),this.compactions++}if(a>this.pool.verts||o>this.pool.index)return null;this.pool.verts-=a,this.pool.index-=o;let c={id:n.addGeometry(t,a,o),verts:a,index:o,tower:e};return this.slots.push(c),c}mergeNear0(e,t){this.removeNear0(e);let n=new Set(t);e.meshes[0]=this.tileMesh(e.towers.map(e=>n.has(e)?this.lod0[e]:this.lod1[e]),0),e.set=n}removeNear0(e){let t=e.meshes[0];t&&(this.group.remove(t),t.geometry.dispose(),this.karstObjects=this.karstObjects.filter(e=>e!==t),this.karstOwned=this.karstOwned.filter(e=>e!==t.geometry),e.meshes[0]=null,e.set=new Set)}dropNear0(e){this.removeNear0(e);for(let t of e.towers)this.lod0[t]?.dispose(),this.lod0[t]=null}buildSetPieces(e){let t=ro(this.bay),n=e.custom(`bay:set-pieces`,e=>e(new R({vertexColors:!0,roughness:.85,metalness:0}))),r=e.custom(`bay:sails`,e=>e(new R({vertexColors:!0,roughness:.9,metalness:0,side:2})));for(let[e,i,a]of[[t.rock,this.material,`set-rock`],[t.painted,n,`set-pieces`],[t.sails,r,`set-sails`]]){if(!e.getAttribute(`position`)?.count){e.dispose();continue}this.owned.push(e);let t=new j(e,i);t.name=a,t.castShadow=t.receiveShadow=!0,this.group.add(t)}}setQuality(e,t){this.seaView.setQuality(e,t),this.tier=e,this.greens.setQuality(e),ii(this.material,e),this.proc?.outgrown(e)?this.buildProc():this.proc?.setQuality(e);let n=e===`low`?`q`:`full`;if(n!==this.keep||this.batch&&n===`full`&&Fc[e]>this.poolBuilt){this.buildKarsts();return}this.want.fill(-1),this.shown.fill(-1),this.modelWant.fill(-1);for(let e of this.near)e.want=e.shown=-1}setCullDistance(e){this.cull=e,this.seaView.setFade(e)}renderReflection(e,t,n,r){this.mirrorLod=this.seaView.mirror?.lod??0,this.seaView.render(e,t,n,[this.group,r],e=>this.reflectionLods(e?this.mirrorLod:-1))}reflectionLods(e){let t=e>=0;this.proc?.reflection(t);let n=this.batch;if(n)for(let r=0;r<this.shown.length;r++){let i=this.shown[r];i>=0&&i<this.mirrorLod&&n.setGeometryIdAt(r,this.lodIds[r][t?e:i])}let r=this.models;if(r)for(let n=0;n<this.modelWant.length;n++){let i=this.modelWant[n];i>=0&&i<this.mirrorLod&&r.show(n,t?e:i)}}restoreContext(){this.seaView.restoreContext()}forCapture(){return this.seaView.forCapture()}setSun(e){let t=Math.hypot(e.x,e.z);if(t<1e-6){this.shadowDir={x:0,z:0,perMetre:0};return}this.shadowDir={x:-e.x/t,z:-e.z/t,perMetre:t/Math.max(e.y,.001)}}casts(e,t,n){let r=this.bay.karsts[e],{x:i,z:a,perMetre:o}=this.shadowDir,s=Math.min(Rc,Math.max(0,r.top)*o),c=Math.min(s,Math.max(0,(t-r.x)*i+(n-r.z)*a));return Math.hypot(r.x+i*c-t,r.z+a*c-n)-r.extent<300}setShadows(e){this.castShadows=e;for(let t of this.karstObjects)t.castShadow=e&&(t.name===`karst-shadows`||this.keep===`q`);for(let t of this.group.children)(t.name===`set-rock`||t.name===`set-pieces`||t.name===`set-sails`)&&(t.castShadow=e);this.models?.setShadows(e)}show(e,t,n){t!==this.shown[e]&&(this.shown[e]=t,this.batch.setGeometryIdAt(e,this.lodIds[e][t])),this.greens.show(e,t===0&&n)}update(e){this.seaView.follow(e),this.proc?.update(e,this.cull);let[t,n,r,i]=Nc[this.tier],a=this.bay.karsts;for(let t=0;t<a.length;t++){let n=a[t];this.dist[t]=Math.max(0,Math.hypot(n.x-e.x,n.z-e.z)-n.extent)}let o=this.models;o&&o.towers.forEach((e,a)=>{let s=this.dist[e],c=s<this.cull?Vc(s,this.modelWant[a],t,n,this.tier,r,i):-1;this.modelWant[a]=c,o.show(a,c)});let s=this.queue;if(s.length=0,this.batch){let o=this.batch;for(let c=0;c<a.length;c++){let a=this.dist[c];if(this.procDrawn[c]){o.setVisibleAt(c,!1),this.proxyBatch?.setVisibleAt(c,this.casts(c,e.x,e.z));continue}let l=a<this.cull;o.setVisibleAt(c,l);let u=Vc(a,this.want[c],t,n,this.tier,r,i);this.proxyBatch?.setVisibleAt(c,this.casts(c,e.x,e.z)),this.want[c]=u;let d=u!==0||this.lodIds[c][0]>=0;!d&&l&&s.push(c),this.show(c,d?u:1,l)}for(let[e,t]of this.waiting)this.want[e]!==0&&(t.dispose(),this.waiting.delete(e));s.sort(this.byDist);let c=0;for(let e of s){if(c>=6e3)break;let t=this.buildLod0(e);if(t<0)break;c+=t,this.show(e,0,!0)}return}let c=[];for(let e of this.near){e.d=1/0;for(let t of e.towers)e.d=Math.min(e.d,this.dist[t]);let a=Pc;e.wantSet=this.tier===`low`?[]:e.towers.filter(n=>this.dist[n]<(e.set.has(n)?t*1.1:t));let o=e.d<this.cull?Vc(e.d,e.want,t*a,n*a,this.tier,r*a,i*a):-1;e.want=e.d>=this.cull?-1:e.wantSet.length>0?0:o===0?1:o,e.want>=2||e.want<0?this.dropNear0(e):e.want===0&&(e.wantSet.length!==e.set.size||e.wantSet.some(t=>!e.set.has(t)))&&c.push([e.d,e])}for(let t of this.far){let n=t.near.some(e=>e.want===0),r=-1;if(!n)for(let e of t.near)e.want>=0&&(r<0||e.want<r)&&(r=e.want);t.meshes.forEach((e,t)=>e&&(e.visible=t===r)),t.proxy&&(t.proxy.visible=t.near.some(t=>t.towers.some(t=>this.casts(t,e.x,e.z))));for(let e of t.near)e.shown=n?e.want===0&&!e.meshes[0]?1:Math.min(e.want,2):-1,e.meshes.forEach((t,n)=>t&&(t.visible=n===e.shown))}c.sort((e,t)=>e[0]-t[0]);let l=0;for(let[,e]of c){for(let t of e.wantSet){if(l>=6e3)break;this.lod0[t]||(l+=this.buildLod0(t))}if(!e.wantSet.every(e=>this.lod0[e]))break;this.mergeNear0(e,e.wantSet),e.shown>=0&&(e.shown=0,e.meshes.forEach((e,t)=>e&&(e.visible=t===0)))}for(let e of this.near)for(let t of e.towers)this.greens.show(t,e.shown===0&&e.set.has(t))}stats(){let e=[0,0,0,0,0],t=0;if(this.batch)this.shown.forEach((t,n)=>{t>=0&&this.batch.getVisibleAt(n)&&e[t]++});else for(let n of this.karstObjects)n.visible&&n.name.startsWith(`karsts-lod`)&&(e[Number(n.name.slice(-1))]++,t++);let n=this.batch?this.lodIds.filter(e=>e[0]>=0).length:this.near.filter(e=>e.meshes[0]).length;return{karsts:this.bay.karsts.length,batched:this.batch!==null,tiles:this.near.length,farTiles:this.far.length,lods:e,draws:(this.batch?1:t)+(this.models?.batches.filter(e=>e).length??0),lod0:n,models:this.models?{towers:this.models.towers.length,lods:[0,1,2].map(e=>this.models.towers.filter((t,n)=>this.models.shownAt(n)===e).length)}:null,compactions:this.compactions,greens:this.greens.count,sea:this.seaView.stats(),load:{...this.load},proc:this.proc?.stats()??null}}dispose(){this.water&&Kr(this.water,null),this.contact?.dispose(),this.shadowMaterial.dispose();for(let e of this.karstOwned)e.dispose();for(let e of this.lod0)e?.dispose();for(let e of this.waiting.values())e.dispose();for(let e of this.owned)e.dispose();this.seaView.dispose(),this.greens.dispose(),this.proc?.dispose(),this.group.clear()}};function Vc(e,t,n,r,i,a=1/0,o=1/0){let s=(e,n)=>t>=0&&t<=n?e*1.1:e;return i===`low`?e<s(o,3)?3:4:e<s(n,0)?0:e<s(r,1)?1:e<s(a,2)?2:e<s(o,3)?3:4}function Hc(e){return Float32Array.from(e,e=>e===1?3:0)}var Uc=[250,700];function Wc(e){let t=o(e.course);return e.karsts.map(e=>{let n=1/0;for(let r of t){let t=r[2]-r[0],i=r[3]-r[1],a=t*t+i*i,o=a>0?Math.min(1,Math.max(0,((e.x-r[0])*t+(e.z-r[1])*i)/a)):0,s=e.x-r[0]-t*o,c=e.z-r[1]-i*o;n=Math.min(n,Math.sqrt(s*s+c*c)-e.extent)}return n<=Uc[0]?0:n<=Uc[1]?1:2})}function Gc(){let e=new fn({colorWrite:!1,depthWrite:!1});return e.name=`karst-shadow-proxy`,e}function Kc(e){let t=e.onBeforeRender.bind(e);e.onBeforeRender=(n,r,i,a,o,s)=>{t(n,r,i,a,o,s),e.geometry.drawRange.count=-1},e.onAfterRender=()=>{e.geometry.drawRange.count=1/0}}var qc=1300,Jc=512,Yc=16;function Xc(e){let t=Jc,n=qc*2/t,r=new Uint8Array(t*t*4);for(let i of e.karsts){if(i.bands[0].y0>.5)continue;let e=i.extent+Yc,a=Math.max(0,Math.floor((i.x-e+qc)/n)),o=Math.min(511,Math.ceil((i.x+e+qc)/n)),s=Math.max(0,Math.floor((i.z-e+qc)/n)),c=Math.min(511,Math.ceil((i.z+e+qc)/n));for(let e=s;e<=c;e++)for(let s=a;s<=o;s++){let a=-1300+(s+.5)*n-i.x,o=-1300+(e+.5)*n-i.z,c=Math.hypot(a,o),l=c<1e-6?i.extent:Jt(i,a/c,o/c,.5),u=1-Math.min(1,Math.max(0,(c-l)/Yc)),d=(e*t+s)*4;r[d]=Math.max(r[d],Math.round(255*u*u)),r[d+3]=255}}for(let e=0;e<t;e++)for(let[n,i]of[[e,0],[e,511],[0,e],[511,e]])r[(i*t+n)*4]=0;let i=new tn(r,t,t,Un);return i.magFilter=L,i.minFilter=L,i.needsUpdate=!0,i}var Zc=2.15,Qc=.9,$c={ultra:.97,high:.97,medium:.97,low:.97},el={from:60,to:180},tl={ultra:1.2,high:1.2,medium:1.2,low:0},nl=.35;function rl(e){let t=Math.min(1,Math.max(0,(e-el.from)/(el.to-el.from)));return Math.round(t*t*(3-2*t)*100)/100}function il(e,t){return Qc+($c[e]-Qc)*t}function al(e,t,n=Qc){let r=Math.sqrt(-Math.log(1-n))/(Zc*Math.max(t,.001));return Math.min(1,Math.max(r,Math.exp(-Math.max(0,e-40)/90)))}function ol(e,t,n,r,i,a,o,s){let{size:c,half:l}=e,u=2*l/c,d=o*a;for(let o=0,f=0;o+Math.max(r,i)<t.length;o+=n,f++){let n=t[o+r]-e.cx,p=t[o+i]-e.cz,m=Math.max(0,Math.floor((n-d+l)/u)),h=Math.min(c-1,Math.ceil((n+d+l)/u)),g=Math.max(0,Math.floor((p-d+l)/u)),_=Math.min(c-1,Math.ceil((p+d+l)/u));for(let e=g;e<=_;e++){let t=(e+.5)*u-l-p;for(let r=m;r<=h;r++){let i=(r+.5)*u-l-n,o=Math.sqrt(i*i+t*t);if(o<=d){let t=o/a;s(e*c+r,Math.exp(-t*t),f)}}}}}var sl=2.1,cl=6.5,ll=2.5,ul=1.2,dl=.06;function fl(e){let t=Math.floor(e.length/3),n=new Float32Array(t*2);for(let r=0;r<t;r++){let t=r*3,i=e[t+2];n[r*2]=e[t]+sl*Math.sin(i),n[r*2+1]=e[t+1]+sl*Math.cos(i)}return n}function pl(e,t=512,n=600){let r=new Float32Array(t*t);ol({size:t,cx:0,cz:0,half:n},fl(e),2,0,1,cl,ll,(e,t)=>{r[e]+=t});let i=new Uint8Array(t*t);for(let e=0;e<i.length;e++)i[e]=Math.round(Math.min(1,r[e])*255);for(let e=0;e<t;e++)i[e]=i[(t-1)*t+e]=i[e*t]=i[e*t+t-1]=0;return i}function ml(e){let t=new tn(pl(e),512,512,cn,an);return t.name=`city-lamp-pools`,t.colorSpace=``,t.magFilter=L,t.minFilter=Tn,t.generateMipmaps=!0,t.wrapS=t.wrapT=kn,t.unpackAlignment=1,t.needsUpdate=!0,t}var hl=`
{
  float pool = texture2D( uLampPool, p / ${1200 .toFixed(1)} + 0.5 ).r * step( max( abs( p.x ), abs( p.y ) ), ${600 .toFixed(1)} );
  vec3 liftCol = col * ${dl.toFixed(3)} / ( dot( col, vec3( 0.2126, 0.7152, 0.0722 ) ) + ${dl.toFixed(3)} );
  totalEmissiveRadiance += liftCol * uDusk * ( ${ul.toFixed(3)} + ${14 .toFixed(3)} * pool * vec3( 1.0, 0.82, 0.55 ) );
}`,gl=[.07,.2],_l=[.18,.4],vl=[.4,.7],yl=.12,bl=[.35,.75],xl=[.15,1,2.4],Sl=.95,Cl=[.510125,.3975,.55*.53],q=e=>e.toFixed(4),wl=`
float floorShare( float rF, float litP ) {
  float k = rF < ${q(bl[0])} ? ${q(xl[0])} : rF < ${q(bl[1])} ? ${q(xl[1])} : ${q(xl[2])};
  return clamp( litP * k, 0.0, ${q(Sl)} );
}
float floorShareMean( float litP ) {
  return ${q(bl[0])} * clamp( litP * ${q(xl[0])}, 0.0, ${q(Sl)} )
    + ${q(bl[1]-bl[0])} * clamp( litP * ${q(xl[1])}, 0.0, ${q(Sl)} )
    + ${q(1-bl[1])} * clamp( litP * ${q(xl[2])}, 0.0, ${q(Sl)} );
}`,Tl={windowFade:`${q(gl[0])}, ${q(gl[1])}`,unitFade:`${q(_l[0])}, ${q(_l[1])}`,floorFade:`${q(vl[0])}, ${q(vl[1])}`,unitMin:q(2),unitSpan:q(3),darkInLit:q(yl),litMean:`vec3( ${Cl.map(q).join(`, `)} )`},El={tile:1024,data:512,low:256,layers:[{id:`glass`,source:`Facade001`,cols:16,rows:10,recess:.08,curtain:!0,cover:.8867,wall:[.0119,.0144,.0193],glass:[.0717,.0883,.1036]},{id:`ribbon`,source:`Facade006`,cols:14,rows:8,recess:.18,curtain:!0,cover:.6951,wall:[.6518,.6554,.6555],glass:[.073,.1044,.1048]},{id:`brick`,source:`Facade018A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.367,wall:[.2093,.1602,.1383],glass:[.0749,.0821,.0967]},{id:`pilaster`,source:`Facade019A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.3388,wall:[.1141,.1144,.1122],glass:[.0755,.0818,.0956]},{id:`brick-pier`,source:`Facade020A`,cols:6,rows:6,recess:.3,curtain:!1,cover:.3388,wall:[.1053,.0894,.0843],glass:[.1372,.1426,.1545]},{id:`stucco`,source:`Facade018A`,cols:6,rows:6,recess:.22,curtain:!1,cover:.367,wall:[.4535,.4066,.342],glass:[.0749,.0821,.0967]}]},Dl=new URL(`facade-color-BoK-lKvc.webp`,import.meta.url).href,Ol=new URL(`facade-data-C4IJuv28.webp`,import.meta.url).href,kl=new URL(`facade-color-low-D4cUquQB.webp`,import.meta.url).href,J=El.layers,Al=e=>{let t=J.findIndex(t=>t.id===e);if(t<0)throw Error(`facade layer ${e} missing from facades.json`);return t},jl={glass:Al(`glass`),ribbon:Al(`ribbon`),brick:Al(`brick`),pilaster:Al(`pilaster`),"brick-pier":Al(`brick-pier`),stucco:Al(`stucco`)},Ml={glass:3.9,ribbon:3.7,brick:3.3,pilaster:3.6,"brick-pier":3.4,stucco:3.2};function Nl(e){return Ml[J[e].id]}var Pl={tower:[[.42,`glass`],[.3,`ribbon`],[.18,`pilaster`],[.1,`brick-pier`]],mid:[[.12,`glass`],[.2,`ribbon`],[.22,`pilaster`],[.22,`brick`],[.24,`brick-pier`]],low:[[.4,`stucco`],[.34,`brick`],[.14,`brick-pier`],[.12,`pilaster`]]},Fl=e=>{let t=(e|0)^1540483477;return t=Math.imul(t^t>>>15,739982445),t=Math.imul(t^t>>>12,695872825),((t^t>>>15)>>>0)/4294967296};function Il(e,t,n){if(e===1)return jl.ribbon;if(e===2)return jl.glass;let r=t>70?Pl.tower:t>24?Pl.mid:Pl.low,i=Fl(n);for(let[e,t]of r){if(i<e)return jl[t];i-=e}return jl[r[r.length-1][1]]}var Ll=262144;function Rl(e,t,n){return(e*4+t)*Ll+Math.abs(n|0)%Ll}function zl(e){return e?{color:Dl,data:Ol}:{color:kl,data:null}}async function Bl(e,t,n){let r=new Image;r.decoding=`async`,r.src=e,await r.decode();let i=J.length,a=r.naturalWidth;if(r.naturalHeight!==a*i)throw Error(`facade texture ${e}: ${a}x${r.naturalHeight} is not ${i} square tiles`);let o=new Mn(r,a,a,i);return o.format=Un,o.type=an,o.colorSpace=t?Dn:``,o.wrapS=o.wrapT=zn,o.minFilter=Tn,o.magFilter=L,o.generateMipmaps=!0,o.anisotropy=n,o.flipY=!1,o.premultiplyAlpha=!1,o.needsUpdate=!0,o.name=e.split(`/`).pop()??`facade`,o}function Vl(e){return e.transient?null:e.tier!==`low`}var Hl=class{load;canLoad;uniforms={uFacadeColor:{value:null},uFacadeData:{value:null},uFacadeTex:{value:0},uFacadeHQ:{value:0}};bound=null;inFlight=new Map;failed=new Set;wantHQ=!1;disposed=!1;constructor(e=Bl,t=()=>typeof Image==`function`&&typeof Image.prototype.decode==`function`){this.load=e,this.canLoad=t}setQuality(e){this.wantHQ=e,this.uniforms.uFacadeHQ.value=e&&this.uniforms.uFacadeData.value?1:0,this.request()}request(){if(this.disposed)return;let e=this.wantHQ&&!this.failed.has(!0);this.bound===!0||this.bound===!1&&!e||this.inFlight.has(!0)||!e&&this.inFlight.has(!1)||this.failed.has(e)||this.start(e)}get ready(){return Promise.all([...this.inFlight.values()]).then(()=>void 0)}start(e){if(!this.canLoad())return;let t=zl(e),n=e?8:1,r=(async()=>{try{let r=await Promise.allSettled([this.load(t.color,!0,n),t.data?this.load(t.data,!1,n):Promise.resolve(null)]),i=r.find(e=>e.status===`rejected`);if(i){for(let e of r)e.status===`fulfilled`&&e.value?.dispose();throw i.reason}let[a,o]=r.map(e=>e.value);if(this.disposed||this.bound===!0||this.bound===!1&&!e){a.dispose(),o?.dispose();return}let s=this.uniforms;s.uFacadeColor.value?.dispose(),s.uFacadeData.value?.dispose(),s.uFacadeColor.value=a,s.uFacadeData.value=o,s.uFacadeTex.value=1,s.uFacadeHQ.value=this.wantHQ&&o?1:0,this.bound=e}catch(t){this.failed.add(e),console.warn(`City facade textures unusable; procedural panes stay`,t)}finally{this.inFlight.delete(e),this.request()}})();this.inFlight.set(e,r)}dispose(){this.disposed=!0,this.uniforms.uFacadeColor.value?.dispose(),this.uniforms.uFacadeData.value?.dispose(),this.uniforms.uFacadeColor.value=null,this.uniforms.uFacadeData.value=null,this.uniforms.uFacadeTex.value=0}},Ul=e=>e.toFixed(4),Wl=e=>`float[${e.length}]( ${e.map(Ul).join(`, `)} )`,Gl=e=>`vec3[${e.length}]( ${e.map(e=>`vec3( ${e.map(Ul).join(`, `)} )`).join(`, `)} )`,Kl=`
const float FL_COLS[${J.length}] = ${Wl(J.map(e=>e.cols))};
const float FL_ROWS[${J.length}] = ${Wl(J.map(e=>e.rows))};
const float FL_FLOOR[${J.length}] = ${Wl(J.map((e,t)=>Nl(t)))};
const float FL_RECESS[${J.length}] = ${Wl(J.map(e=>e.recess))};
const float FL_COVER[${J.length}] = ${Wl(J.map(e=>e.cover))};
const float FL_CURTAIN[${J.length}] = ${Wl(J.map(e=>+!!e.curtain))};
const vec3 FL_WALL[${J.length}] = ${Gl(J.map(e=>e.wall))};
const vec3 FL_GLASS[${J.length}] = ${Gl(J.map(e=>e.glass))};
const float FL_STUCCO = ${Ul(jl.stucco)};
const float FL_BRICK = ${Ul(jl.brick)};
const float FL_BRICK_PIER = ${Ul(jl[`brick-pier`])};
const float FL_SHIFT = ${Ul(Ll)};
float snapCells( float span, float cell ) { return max( 1.0, floor( span / cell + 0.5 ) ); }`,ql=e=>e.toFixed(4),Jl=[.3,1.6,.1,.94,.78,.1];function Yl(e){let[t,n,r,i,a,o]=Jl;return e<r||e>i?0:t+n*Math.exp(-(((e-a)/o)**2))}var Xl=(()=>{let e=4096,t=0;for(let n=0;n<e;n++)t+=Yl((n+.5)/e);return t/e})(),Zl=`varying vec3 vFLocal;
varying vec3 vFN;
varying vec3 vFSize;
varying float vFBase;`,Ql=`
vFLocal = position;
vFN = normal;
vFSize = aInstB.xyz;
vFBase = aInst.y;`,$l=`
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
${Kl}
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
${wl}
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
}`,eu=`
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
  float far = smoothstep( ${Tl.windowFade}, max( fwU, fwV ) );
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
  float unitN = isStore > 0.5 ? 1.0 : bridge ? 64.0 : ${Tl.unitMin} + floor( fract( h4 * 7.13 ) * ${Tl.unitSpan} );
  float unitI = floor( colI / unitN );
  float rU = isStore > 0.5 ? rnd : fh3( vec3( floorI, unitI + 41.0, seedK + faceI ) );
  rnd = mix( rU, rnd, 0.3 );
  float farUnit = smoothstep( ${Tl.unitFade}, max( fwU / unitN, fwV ) );
  float farFloor = smoothstep( ${Tl.floorFade}, fwV );
  float litP = isStore > 0.5 ? 0.12 + 0.75 * uDusk : uDusk * uDusk * 0.55 + 0.01;
  float litF = isStore > 0.5 ? litP : floorShare( fh3( vec3( floorI + 7.0, seedK * 0.71, 3.0 ) ), litP );
  if ( bridge ) litF = 0.15 + 0.8 * uDusk;
  // living windows (docs/12): one unit in five switches its light now and then (each on its own slow clock)
  float tog = step( 0.8, fh3( vec3( unitI * 1.31 + 5.0, floorI * 0.71 + 2.0, seedK + faceI * 1.7 ) ) );
  float epoch = tog * floor( uTime / ( 25.0 + 70.0 * rU ) + rU * 11.0 );
  float litU = step( fh3( vec3( floorI + 17.0 * isStore, unitI + 3.7 + mod( epoch, 97.0 ) * 0.37, seedK * 1.37 + faceI ) ), litF );
  // a skybridge is one corridor: its lights come on together at dusk
  if ( bridge ) litU = step( 0.25, uDusk );
  float lit = litU * step( ${Tl.darkInLit}, fh3( vec3( colI + 9.0, floorI, seedK + faceI * 2.3 ) ) );
  vec3 warm = mix( vec3( 1.0, 0.7, 0.4 ), vec3( 0.85, 0.9, 1.0 ), step( 0.75, rU ) );
  // a lit room glows, it does not outshine the sky: dimmer than the sunlit wall, a spread of warm tones
  float litK = isStore > 0.5 ? 1.1 : 0.75;
  vec3 litCol = warm * ( 0.32 + 0.42 * rnd ) * litK;
  vec3 litColU = warm * ( 0.32 + 0.42 * rU ) * litK;
  vec3 litColA = ${Tl.litMean} * litK;
  // the scan's mask is the window grid at every distance (its mips are the unit / floor / building means)
  // a lit floor seen from outside: bright under its ceiling lights, dark at the slab and the plenum (mean 1, flat once a floor is a few px)
  // squared by hand: GLSL ES leaves pow of a negative base undefined (NaN on some GPUs)
  float dyGlow = ( fv - ${ql(Jl[4])} ) / ${ql(Jl[5])};
  float glowY = exp( -dyGlow * dyGlow );
  float rowGlow = isStore > 0.5 || bridge ? 1.0 : mix( ( ${ql(Jl[0])} + ${ql(Jl[1])} * glowY ) * step( ${ql(Jl[2])}, fv ) * step( fv, ${ql(Jl[3])} ) / ${ql(Xl)}, 1.0, smoothstep( 0.12, 0.3, fwV ) );
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
  vec3 eUnit = litColU * litU * ( 1.0 - ${Tl.darkInLit} ) * rowCover;
  vec3 eFloor = litColA * litF * ( 1.0 - ${Tl.darkInLit} ) * cover;
  vec3 eMean = litColA * ( isStore > 0.5 ? litP : floorShareMean( litP ) ) * ( 1.0 - ${Tl.darkInLit} ) * cover;
  emit += mix( mix( mix( eNear, eUnit, far ), eFloor, farUnit ), eMean, farFloor ) * uLit * ( 1.0 - isBand );
}
diffuseColor.rgb = col;
totalEmissiveRadiance += emit;`,tu=`
if ( fNK > 0.0 ) {
  vec3 fNw = normalize( fTW * fNT.x + vec3( 0.0, 1.0, 0.0 ) * fNT.y + fNW * fNT.z );
  normal = normalize( mix( normal, normalize( ( viewMatrix * vec4( fNw, 0.0 ) ).xyz ), fNK ) );
}`,nu=300,ru=.25,iu=1.6,au=.15;function ou(e,t,n,r=new Float32Array(e.length/3*2)){let i=e.length/3,a=new Float64Array(i*2),o=new Float64Array(i*2),s=new Float64Array(i);for(let r=0;r+2<t.length;r+=3){let i=t[r],c=t[r+1],l=t[r+2];if(n[i]<au||n[c]<au||n[l]<au)continue;let u=e[i*3],d=e[i*3+2],f=e[c*3]-u,p=e[c*3+2]-d,m=e[l*3]-u,h=e[l*3+2]-d,g=f*h-p*m;if(Math.abs(g)<1e-9)continue;let _=(e,t,n,r)=>{let i=t-e,a=n-e;r[0]=(i*h-a*p)/g,r[1]=(a*f-i*m)/g};_(e[i*3+1],e[c*3+1],e[l*3+1],su),_(n[i],n[c],n[l],cu);let v=Math.abs(g)*.5;for(let e of[i,c,l])a[e*2]=a[e*2]+su[0]*v,a[e*2+1]=a[e*2+1]+su[1]*v,o[e*2]=o[e*2]+cu[0]*v,o[e*2+1]=o[e*2+1]+cu[1]*v,s[e]=s[e]+v}for(let e=0;e<i;e++){r[e*2]=0,r[e*2+1]=0;let t=s[e];if(t<=0)continue;let n=a[e*2]/t,i=a[e*2+1]/t,c=o[e*2]/t,l=o[e*2+1]/t,u=Math.sqrt(c*c+l*l),d=-n,f=-i;if(u>1e-6){c/=u,l/=u;let e=d*c+f*l;d-=e*c,f-=e*l}let p=Math.sqrt(d*d+f*f);if(p<2e-4)continue;let m=Math.min(iu,Math.max(ru,p*nu));r[e*2]=d/p*m,r[e*2+1]=f/p*m}return r}var su=new Float64Array(2),cu=new Float64Array(2),lu=[0,.7],uu=45,du=.9,fu=.35,pu={building:0,slab:1,skybridge:2,outskirts:3},mu=`
uniform sampler2D uDetail;
uniform vec2 uPark;
uniform float uDusk;
uniform sampler2D uLampPool;
varying vec3 vGround;
vec3 gsrgb( float r, float g, float b ) { return pow( vec3( r, g, b ), vec3( 2.2 ) ); }`,hu=`
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
if ( vGround.y < -0.25 || abs( p.x - ${Ne.x.toFixed(1)} ) < ${(Ne.halfWidth+6).toFixed(1)} ) {
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
${hl}`,gu=`
if ( distance( vColor.rgb, pow( vec3( ${(Ct>>16&255)/255}, ${(Ct>>8&255)/255}, ${(Ct&255)/255} ), vec3( 2.2 ) ) ) < 0.05 ) {
  totalEmissiveRadiance += vec3( 1.0, 0.82, 0.55 ) * ( 0.15 + 2.5 * uDusk );
}`;function _u(e,t){let n=e.onBeforeCompile;e.onBeforeCompile=(r,i)=>{n.call(e,r,i),r.uniforms.uLampDusk=t,r.vertexShader=r.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vLampPos;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLampPos = position;`),r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vLampPos;
uniform float uLampDusk;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  float head = step( vLampPos.x, -0.45 ) * step( 6.9, vLampPos.y ) * step( vLampPos.y, 7.12 );
  totalEmissiveRadiance += vec3( 1.0, 0.82, 0.55 ) * head * ( 0.15 + 2.5 * uLampDusk );
}`)},e.customProgramCacheKey=()=>`glb-street-lamp`,e.needsUpdate=!0}var vu=`
if ( vColor.r > 0.98 && vColor.g > 0.98 && vColor.b > 0.98 ) {
  float c = vTint;
  vec3 paint = vec3( floor( c / 65536.0 ), mod( floor( c / 256.0 ), 256.0 ), mod( c, 256.0 ) ) / 255.0;
  diffuseColor.rgb = pow( paint, vec3( 2.2 ) );
}`;function yu(e,t){e.isMeshStandardMaterial&&(e.envMapIntensity=t)}function bu(e,t){let n=0;for(let r of e)r.id===t&&n++;return Math.max(48,n)}var xu=new Set([`B3`,`B10`,`B11`,`B12`,`B15`]),Su=new Set([`B15`]),Cu={};function wu(e,t){let n=Cu[e];return n?yr(t,n):dr.has(e)?e===`B3`?hr[t]:gr[t]:fr[t]}var Tu={ultra:90,high:70,medium:40,low:24},Eu=[1,.7,.6,.45],Du={ultra:80,high:60,medium:30,low:16},Ou={ultra:140,high:110,medium:60,low:40},ku={ultra:32,high:32,medium:20,low:12},Au={ultra:48,high:40,medium:24,low:14},ju={ultra:48,high:40,medium:24,low:16},Mu=1.054,Nu=8,Pu=6;function Fu(e,t,n=$n){let r=[];for(let i=0;i<e.length/8;i++){let a=i*8,o=er(e[a+7]);if(!o)continue;let s=e[a],c=e[a+2],l=bt(e[a+3],e[a+4],e[a+5],n,o);if(!l)continue;let u=Math.floor((s+600)/80),d=Math.floor((c+600)/80),f=s-Gt(u),p=c-Gt(d),m=l.yaw===0?p:f;r.push({id:o,outskirts:t,index:i,x:s,y:e[a+1],z:c,yaw:l.yaw+(m<0?Math.PI:0),fit:l})}return r}var Iu=class{group=new N;buildings;props;ground;owned=[];dusk={value:0};lit={value:1};facade=new Hl;batch=new nt(`city-glb`,{dusk:this.dusk,lit:this.lit});city;outskirts;furniture;buildingSets=new Map;carSets=[];carFits=[];roofSets={};lightSet=null;stopSets={};streetSets={};streetRange=0;get streetPropRange(){return this.streetRange}stopFar=0;setList=[];lightScale=1;roofList=[];shops=[];facadeDetail=!0;roofDetailArgs=null;shopShown={city:new Set,outskirts:new Set};outskirtsShare=1;carRange={range:1/0,x:0,z:0};viewer=new D;filledAt=new D(1/0,0,1/0);paintLinear=new P;constructor(t,n,r,i,a,o,s,c,l=null){if(this.group.name=`city`,l){let e=Xt()??.2,r=[...Fu(t.buildings,!1,e),...Fu(n.buildings,!0,e)];for(let e of tr){let t=ze.has(e)?void 0:l.scenes[e];if(t)try{let n=xu.has(e)&&!Su.has(e),i=l.tier===`high`||l.tier===`ultra`,a=new mr(t,{id:e,tier:l.tier,bands:wu(e,l.tier),capacity:bu(r,e),batch:this.batch,batchFlags:+!!n,batchCast:i,tuneMaterial:(t,n)=>{yu(t,.5),xu.has(e)&&!(n&&Su.has(e))&&$t(t,{dusk:this.dusk,lit:this.lit},n)}});this.group.add(a.group),this.buildingSets.set(e,a)}catch(t){console.warn(`GLB building ${e} unusable; procedural buildings stay`,t)}}this.buildingSets.size>0&&(this.shops=r.filter(e=>this.buildingSets.has(e.id)));for(let e=0;e<Bt.length;e++){let t=Bt[e],n=l.scenes[t];if(this.carSets.push(null),this.carFits.push(null),n)try{let r=Qe[e],i=Mt(t,r[0],r[1],r[2]);if(!i){_r(n),console.warn(`GLB parked car ${t} does not fit the parked car size; procedural cars stay`);continue}let a=Math.max(4,Math.round((Tu[l.tier]??24)*Eu[e])),o=new mr(n,{id:t,tier:l.tier,bands:ur(`car`,l.tier),capacity:a,colours:!0,batch:this.batch,tuneMaterial:e=>yu(e,.9)});this.group.add(o.group),this.carSets[e]=o,this.carFits[e]=i}catch(e){console.warn(`GLB parked car ${t} unusable; procedural cars stay`,e)}}for(let e of[`P1`,`P3`,`P4`]){let t=l.scenes[e];if(t)try{let n=new mr(t,{id:e,tier:l.tier,bands:ur(`car`,l.tier),capacity:Du[l.tier]??16,batch:this.batch,tuneMaterial:e=>yu(e,.6)});this.group.add(n.group),this.roofSets[e]=n}catch(t){console.warn(`GLB roof prop ${e} unusable; procedural props stay`,t)}}let i=l.scenes.P5;if(i)try{this.lightSet=new mr(i,{id:`P5`,tier:l.tier,bands:ur(`car`,l.tier),capacity:Ou[l.tier]??40,batch:this.batch,batchFlags:2,tuneMaterial:e=>{yu(e,.6),_u(e,this.dusk)}}),this.lightScale=Nu/zt.P5.size[1],this.group.add(this.lightSet.group)}catch(e){console.warn(`GLB street light unusable; procedural lights stay`,e)}for(let[e,t]of[[`P7`,ku],[`P8`,ju]]){let n=l.scenes[e];if(n)try{let r=new mr(n,{id:e,tier:l.tier,bands:ur(`stop`,l.tier),capacity:t[l.tier]??12,batch:this.batch,tuneMaterial:e=>yu(e,.6)});this.group.add(r.group),this.stopSets[e]=r,this.stopFar=vr[l.tier].reduce((e,[,t])=>Math.max(e,t),0)+br[l.tier]}catch(t){console.warn(`GLB ${e===`P7`?`bus shelter`:`bench`} unusable; procedural ones stay`,t)}}}for(let e of Tt){let t=gt[e].model,n=l?.scenes[t];if(l&&n)try{let r=new mr(n,{id:t,tier:l.tier,bands:ur(`prop`,l.tier),capacity:Au[l.tier]??16,batch:this.batch,tuneMaterial:e=>yu(e,.6)});this.group.add(r.group),this.streetSets[e]=r}catch(e){console.warn(`GLB street prop ${t} unusable; procedural ones stay`,e)}}this.streetRange=lr[c.tier??l?.tier??`high`].reduce((e,[,t])=>Math.max(e,t),0),this.setList=[...this.buildingSets.values(),...Object.values(this.streetSets),...this.carSets,this.roofSets.P1,this.roofSets.P3,this.roofSets.P4,this.lightSet,this.stopSets.P7,this.stopSets.P8].filter(e=>!!e),this.batch.seal();for(let e of this.batch.objects)this.group.add(e);this.lit.value=+!!c.facadeDetail,this.city=t,this.outskirts=n,this.furniture=r;let u=Ut(16777215),d={uGravel:{value:null},uGravelScale:{value:1}};s.watchSet(`gravel`,(e,t)=>{d.uGravel.value=e.albedo,d.uGravelScale.value=1/t});let{material:f,depth:p}=$e({key:`facade`,roughness:.85,vertexPars:Zl,vertex:Ql,fragmentPars:$l,fragment:eu,afterRoughness:`roughnessFactor = fRough;`,afterMetalness:`metalnessFactor = fMetal;`,afterLightMaps:`#if defined( RE_IndirectSpecular )
  radiance *= fRefl;
#endif`,afterNormal:tu,uniforms:{uDusk:this.dusk,uLit:this.lit,uDetail:{value:a},...d,...this.facade.uniforms}},o);this.buildings=new e(u,f,p,`buildings`),this.owned.push(u,f,p),this.group.add(this.buildings.mesh),this.setOutskirts(c.outskirts),this.setFacadeQuality(s.profile.tier!==`low`);let m=(t,n,r={})=>{let i=$e({key:n,roughness:.7,...r,uniforms:{uDusk:this.dusk}},o),a=new e(t,i.material,r.shadow===!1?null:i.depth,n);return this.owned.push(t,i.material,i.depth),this.group.add(a.mesh),a};this.props=[m(Ut(10132638),`roof-ac`),m(Je(9075302,6),`roof-tank`),m(We(),`street-furniture`,{shadow:!1,vertexPars:`attribute float part;
varying float vAntY;`,vertex:Le,fragmentPars:`uniform float uTime;
varying float vAntY;`,fragment:st}),m(mt(),`street-lights`,{fragmentPars:`uniform float uDusk;`,fragment:gu}),m(Ft(),`cars`,{fragment:vu}),m(Ut(11840928),`kerbs`,{shadow:!1}),m(Ut(10657172),`roof-parapets`),m(Ut(9343382),`roof-vents`)];for(let e of this.props.slice(3))e.begin(),e.end();this.fillRoofProps(),this.setFurniture(1/0,0,0);let h=ml(r.lights);this.ground=new j(Ru(i),Lu(a,h,t,this.dusk)),this.ground.name=`city-ground`,this.ground.receiveShadow=!0,this.owned.push(this.ground.geometry,this.ground.material,h),this.group.add(this.ground)}setOutskirts(e){this.outskirtsShare=e;let t=this.buildings;t.begin();let n=this.city,r=this.shopShown,i=(e,n,i)=>{let a=i?r.outskirts:r.city;for(let r=0;r<n;r++){if(a.has(r))continue;let n=r*8,o=i?pu.outskirts:e[n+7]===1?pu.slab:pu.building,s=e[n+6]|0;t.push(e[n],e[n+1],e[n+2],0,e[n+3],e[n+4],e[n+5],Rl(Il(o,e[n+4],s),o,s))}};i(n.buildings,n.buildings.length/8,!1);let a=n.skybridges;for(let e=0;e<a.length;e+=6)t.push(a[e],a[e+1]-a[e+4]/2,a[e+2],0,a[e+3],a[e+4],a[e+5],Rl(Il(pu.skybridge,a[e+4],e),pu.skybridge,e));let o=this.outskirts.buildings.length/8;i(this.outskirts.buildings,Math.round(o*Math.min(1,Math.max(0,e))),!0),t.end()}setFurniture(e,t,n,r=!0){let[,,,i,a,o]=this.props;for(let e of[i,a,o])e.begin();let s=e*e,c=(e,r)=>(e-t)*(e-t)+(r-n)*(r-n)<=s,l=this.furniture;if(this.carRange.range=e,this.carRange.x=t,this.carRange.z=n,this.fillLights(),this.fillCars(),this.refillFurniture(),r)for(let e=0;e<l.kerbs.length;e+=4)c(l.kerbs[e],l.kerbs[e+1])&&o.push(l.kerbs[e],0,l.kerbs[e+1],l.kerbs[e+3],.3,.15,l.kerbs[e+2],0);for(let e of[i,a,o])e.end()}refillFurniture(){let e=this.props[2];e.begin();let t=this.city.roofProps;for(let n of this.roofList){if((t[n]|0)!=2)continue;let r=t[n+1],i=t[n+3];e.push(r,t[n+2],i,0,t[n+4],t[n+5],t[n+6],6+(r*.137+i*.071)%1)}this.fillStops(),this.fillStreetProps(),e.end()}fillStops(){let e=this.furniture,{range:t,x:n,z:r}=this.carRange,i=t*t,a=this.viewer,o=this.props[2],s=[[e.shelters,3,0,this.stopSets.P7],[e.benches,3,1,this.stopSets.P8]];for(let[e,t,c,l]of s){l?.clear();for(let s=0;s<e.length;s+=t){let t=e[s],u=e[s+1];if((t-n)*(t-n)+(u-r)*(u-r)>i)continue;let d=e[s+2];if(l){let e=t-a.x,n=u-a.z,r=Math.sqrt(e*e+a.y*a.y+n*n);if(l.inRange(r)&&l.push(t,0,u,d,1,1,1)||l.isActive&&r>this.stopFar)continue}o.push(t,0,u,d,1,1,1,c)}l?.update(a)}}fillStreetProps(){let e=this.props[2],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n,o=this.hasGlb()?this.viewer:new D(r,0,i),s={hydrant:t.hydrants,bin:t.bins,newsbox:t.newsboxes,booth:t.booths},c=this.streetRange*this.streetRange;for(let t of Tt){let n=s[t],l=this.streetSets[t],u=it[t];l?.clear();for(let s=0;s<n.length;s+=3){let d=n[s],f=n[s+1];if((d-r)*(d-r)+(f-i)*(f-i)>a)continue;let p=d-o.x,m=f-o.z;if(p*p+o.y*o.y+m*m>c)continue;let h=n[s+2];l&&l.inRange(Math.sqrt(p*p+o.y*o.y+m*m))&&l.push(d,0,f,h,1,1,1)||e.push(d,0,f,h,u[0],u[1],u[2],2+Tt.indexOf(t))}l?.update(o)}}fillLights(){let e=this.props[3],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n,o=this.lightSet;o?.clear();let s=this.viewer,c=this.lightScale;for(let n=0;n<t.lights.length;n+=3){let l=t.lights[n],u=t.lights[n+1];if((l-r)*(l-r)+(u-i)*(u-i)>a)continue;let d=t.lights[n+2];if(o){let e=l-s.x,t=u-s.z;if(o.inRange(Math.sqrt(e*e+s.y*s.y+t*t))){let e=d+Math.PI/2,t=c*Mu;if(o.push(l-t*Math.cos(e),0,u+t*Math.sin(e),e,c,c,c))continue}}e.push(l,0,u,d,1,1,1,0)}o?.update(s)}fillCars(){let e=this.props[4],t=this.furniture,{range:n,x:r,z:i}=this.carRange,a=n*n;for(let e of this.carSets)e?.clear();let o=this.viewer,s=this.paintLinear;for(let n=0;n<t.cars.length;n+=6){let c=t.cars[n],l=t.cars[n+2];if((c-r)*(c-r)+(l-i)*(l-i)>a)continue;let u=t.cars[n+5],d=this.carSets[u],f=this.carFits[u];if(d&&f){let e=c-o.x,r=t.cars[n+1]-o.y,i=l-o.z;if(d.inRange(Math.sqrt(e*e+r*r+i*i))&&(s.setHex(t.cars[n+4],Dn),d.push(c,t.cars[n+1],l,t.cars[n+3],f.sx,f.sy,f.sz,s.r,s.g,s.b)))continue}let p=Qe[u];e.push(c,t.cars[n+1],l,t.cars[n+3],p[0]/Qe[0][0],p[1]/Qe[0][1],p[2]/Qe[0][2],t.cars[n+4])}for(let e of this.carSets)e?.update(o);this.filledAt.copy(o)}setViewer(e,t,n){if(!this.hasGlb())return;this.viewer.set(e,t,n);let r=e-this.filledAt.x,i=n-this.filledAt.z;if(!(Number.isFinite(r)&&r*r+i*i<36&&Math.abs(t-this.filledAt.y)<Pu)){if(this.splitShops(),this.carSets.some(e=>e)){let e=this.props[4];e.begin(),this.fillCars(),e.end()}if(this.lightSet){let e=this.props[3];e.begin(),this.fillLights(),e.end()}(this.stopSets.P7||this.stopSets.P8||Object.keys(this.streetSets).length>0)&&this.refillFurniture(),this.roofHasGlb()&&this.pushRoofProps(),this.filledAt.copy(this.viewer)}}roofHasGlb(){return!!(this.roofSets.P1||this.roofSets.P3||this.roofSets.P4)}allSets(){return this.setList}hasGlb(){return this.setList.length>0}splitShops(){if(this.buildingSets.size===0||this.shops.length===0)return;for(let e of this.buildingSets.values())e.clear();let e=this.viewer,t={city:new Set,outskirts:new Set},n=Math.round(this.outskirts.buildings.length/8*Math.min(1,Math.max(0,this.outskirtsShare)));for(let r of this.shops){let i=this.buildingSets.get(r.id);if(r.outskirts&&r.index>=n)continue;let a=r.x-e.x,o=r.y-e.y,s=r.z-e.z;i.inRange(Math.sqrt(a*a+o*o+s*s))&&i.push(r.x,r.y,r.z,r.yaw,r.fit.sx,r.fit.sy,r.fit.sz)&&(r.outskirts?t.outskirts:t.city).add(r.index)}for(let t of this.buildingSets.values())t.update(e);let r=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),i=!r(t.city,this.shopShown.city)||!r(t.outskirts,this.shopShown.outskirts);this.shopShown.city=t.city,this.shopShown.outskirts=t.outskirts,i&&(this.setOutskirts(this.outskirtsShare),this.roofDetailArgs&&this.setRoofDetail(...this.roofDetailArgs))}glbStats(){let e={instances:0,draws:0,tris:0};for(let t of this.allSets()){let n=t.drawn();e.instances+=n.instances,e.draws+=n.draws,e.tris+=n.tris}return e.draws+=this.batch.draws,e}setModelTier(e){let t=!1;for(let n of this.allSets())t=n.setActiveTier(e)||t;t&&(this.filledAt.set(1/0,0,1/0),this.setViewer(this.viewer.x,this.viewer.y,this.viewer.z))}setModelShadows(e){let t=new Set([...Object.values(this.streetSets),this.stopSets.P7,this.stopSets.P8,this.roofSets.P1,this.roofSets.P3,this.roofSets.P4,this.lightSet]),n=new Set(this.buildingSets.values());for(let r of this.allSets())r.setShadows(e,!0,t.has(r)?`none`:n.has(r)?`tall`:`near`);this.batch.setShadows(e)}fillRoofProps(){this.roofList=Array.from({length:this.city.roofProps.length/7},(e,t)=>t*7),this.pushRoofProps()}pushRoofProps(){let e=[this.props[0],this.props[1]];for(let t of e)t.begin();let t=this.roofSets;for(let e of[`P1`,`P3`,`P4`])t[e]?.clear();let n=this.city.roofProps,r=this.viewer;for(let i of this.roofList){let a=n[i+1],o=n[i+2],s=n[i+3],c=n[i+4],l=n[i+5],u=n[i+6],d=n[i]|0;if(d===2)continue;let f=d===3?1:Math.min(1,Math.max(0,d)),p=d===0?`P1`:d===1?`P3`:d===3?`P4`:null,m=p&&this.facadeDetail?t[p]:void 0;if(m&&p){let e=a-r.x,t=o-r.y,n=s-r.z;if(m.inRange(Math.sqrt(e*e+t*t+n*n))){let e=p===`P1`&&c>u,t=e?Mt(p,u,l,c):Mt(p,c,l,u);if(t&&m.push(a,o,s,e?Math.PI/2:0,t.sx,t.sy,t.sz))continue}}e[f].push(a,o,s,0,c,l,u,0)}for(let e of[`P1`,`P3`,`P4`])t[e]?.update(r);for(let t of e)t.end();for(let t of[e[0],e[1]])t.mesh.visible=this.facadeDetail&&t.count>0}setRoofDetail(e,t,n,r=t,i=n){let a=this.props[6],o=this.props[7];if(this.roofDetailArgs=[e,t,n,r,i],a.begin(),o.begin(),e){let e=this.city.buildings,s=22500;for(let c=0;c<e.length;c+=8){let l=e[c],u=e[c+2],d=e[c+3],f=e[c+4],p=e[c+5];if(f>uu||e[c+7]===1||this.shopShown.city.has(c/8))continue;let m=Math.max(0,Math.abs(l-t)-d/2),h=Math.max(0,Math.abs(u-n)-p/2),g=Math.max(0,Math.abs(l-r)-d/2),_=Math.max(0,Math.abs(u-i)-p/2);if(m*m+h*h>s&&g*g+_*_>s)continue;let v=e[c+1]+f,y=fu;a.push(l,v,u-p/2+y/2,0,d,du,y,0),a.push(l,v,u+p/2-y/2,0,d,du,y,0),a.push(l-d/2+y/2,v,u,0,y,du,p-2*y,0),a.push(l+d/2-y/2,v,u,0,y,du,p-2*y,0);let b=(e[c+6]|0)>>>0,x=()=>(b=Math.imul(b^b>>>15,739982445)+1831565813>>>0,b/4294967296),S=2+Math.floor(x()*3);for(let e=0;e<S;e++){let t=e===0&&d>10&&p>10,n=t?2.4:.9+x()*.8,r=t?3.6:.9+x()*.8,i=l+(x()-.5)*Math.max(0,d-2*y-n-1.5),a=u+(x()-.5)*Math.max(0,p-2*y-r-1.5);o.push(i,v,a,x()<.5?0:Math.PI/2,n,t?.35:.6+x()*.7,r,0)}}}a.end(),o.end()}setFacadeDetail(e){this.lit.value=+!!e,this.facadeDetail=e;let[t,n]=this.props;t.mesh.visible=e&&t.count>0,n.mesh.visible=e&&n.count>0,this.roofHasGlb()&&this.pushRoofProps()}setFacadeQuality(e){this.facade.setQuality(e)}get facadesReady(){return this.facade.ready}setDusk(e){this.dusk.value=e}get trees(){let e=this.city.trees,t=this.furniture.trees,n=new Float32Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}dispose(){this.facade.dispose();for(let e of this.allSets())e.dispose();this.batch.dispose(),this.buildings.dispose();for(let e of this.props)e.dispose();for(let e of this.owned)e.dispose();this.group.removeFromParent(),this.group.clear()}};function Lu(e,t,n,r){let i=new dn(-99,-99);for(let e=0;e<15;e++)for(let t=0;t<15;t++)n.blockClass(t,e)===`park`&&(i=new dn(t,e));let a=new R({color:16777215,roughness:.9,metalness:0,envMapIntensity:.4});return a.name=`city-ground`,a.onBeforeCompile=n=>{n.uniforms.uDetail={value:e},n.uniforms.uPark={value:i},n.uniforms.uDusk=r,n.uniforms.uLampPool={value:t},n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vGround;`).replace(`#include <project_vertex>`,`#include <project_vertex>
  vGround = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>\n${mu}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${hu}`)},a.customProgramCacheKey=()=>`city-ground-v2`,a}function Ru(e,t=2600){let n=[],r=Ne,i=r.x-r.halfWidth-8,a=r.x+r.halfWidth+8;for(let e=-t;e<i;e+=100)n.push(e);for(let e=i;e<=a;e+=2)n.push(e);for(let e=Math.ceil(a/100)*100;e<=t;e+=100)n.push(e);let o=[];for(let e=-t;e<=t;e+=100)o.push(e);let s=n.length,c=o.length,l=new Float32Array(s*c*3),u=new Float32Array(s*c*3);for(let t=0;t<c;t++)for(let r=0;r<s;r++){let i=t*s+r,a=n[r],c=e.heightAt(a,0);l[i*3]=a,l[i*3+1]=c,l[i*3+2]=o[t];let d=.5,f=(e.heightAt(a+d,0)-e.heightAt(a-d,0))/(2*d),p=Math.sqrt(f*f+1);u[i*3]=-f/p,u[i*3+1]=1/p}let d=[];for(let e=0;e<c-1;e++)for(let t=0;t<s-1;t++){let n=e*s+t,r=n+1,i=n+s,a=i+1;d.push(n,i,r,r,i,a)}let f=new F;return f.setAttribute(`position`,new I(l,3)),f.setAttribute(`normal`,new I(u,3)),f.setIndex(d),f.computeBoundingSphere(),f}function zu(e=2600){let t=Ne,n=new Sn(t.halfWidth*2,e*2,1,8);n.rotateX(-Math.PI/2),n.translate(t.x,t.level,0);let r=n.getAttribute(`position`).count,i=new Float32Array(r*2);for(let e=0;e<r;e++)i[e*2]=lu[0],i[e*2+1]=lu[1];return n.setAttribute(`aFlow`,new I(i,2)),n}var Bu=1;function Vu(e,t,n=An){let r=new wn(new Uint8Array(t*12),12).setUsage(n);return e.setAttribute(`aRock`,new Rn(r,1,0,!0)),e.setAttribute(`aWet`,new Rn(r,1,1,!0)),e.setAttribute(`aField`,new Rn(r,2,2,!0)),e.setAttribute(`aBase`,new Rn(r,4,4,!0)),e.setAttribute(`aCanopy`,new Rn(r,2,8,!0)),r}function Hu(e,t,n,r){let i=e.array,a=r*12;t.surface.length>=a?i.set(t.surface.subarray(0,a),n*12):i.fill(0,n*12,n*12+a)}function Uu(e){let t=g[e];return(t+1)*(t+1)+4*t}var Wu=class{road;mesh;capV=0;capI=0;constructor(e,t,n){this.road=n,this.mesh=new j(new F,e),this.mesh.name=t,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(1024,2048),this.mesh.visible=!1}rebuild(e,t,n){let r=0,i=0;for(let t of e.values()){if(!n(t))continue;let e=this.road?t.data.roads:t.data.water;r+=e.positions.length/3,i+=e.indices.length}(r>this.capV||i>this.capI)&&this.grow(Math.max(r,this.capV*2,1024),Math.max(i,this.capI*2,2048));let a=this.mesh.geometry,o=a.getAttribute(`position`),s=a.getIndex(),c=o.array,l=s.array,u=this.road?a.getAttribute(`aRoad`).array:null,d=this.road?null:a.getAttribute(`aShore`).array,f=this.road?null:a.getAttribute(`aFlow`).array,p=0,m=0;for(let r of e.values()){if(!n(r))continue;let e=this.road?r.data.roads:r.data.water,i=r.data.originX-t.x,a=r.data.originZ-t.z,o=e.positions,s=o.length/3;for(let e=0;e<s;e++)c[(p+e)*3]=o[e*3]+i,c[(p+e)*3+1]=o[e*3+1],c[(p+e)*3+2]=o[e*3+2]+a;if(u){let t=e.colors;for(let e=0;e<s;e++){let n=e%3-1,r=e-e%3+1;u[(p+e)*2]=n,u[(p+e)*2+1]=+(t[r*3]>150)}}if(d)for(let e=0;e<s;e++)d[p+e]=Xu(r.data,o[e*3],o[e*3+1],o[e*3+2]);f&&f.set(qu(r.data),p*2);let h=e.indices;for(let e=0;e<h.length;e++)l[m+e]=h[e]+p;p+=s,m+=h.length}o.needsUpdate=!0,s.needsUpdate=!0,u&&(a.getAttribute(`aRoad`).needsUpdate=!0),d&&(a.getAttribute(`aShore`).needsUpdate=!0),f&&(a.getAttribute(`aFlow`).needsUpdate=!0),a.setDrawRange(0,m),this.mesh.visible=m>0}grow(e,t){this.mesh.geometry.dispose();let n=new F;n.setAttribute(`position`,new I(new Float32Array(e*3),3).setUsage(O)),n.setAttribute(`normal`,Gu(e)),this.road?n.setAttribute(`aRoad`,new I(new Float32Array(e*2),2).setUsage(O)):(n.setAttribute(`aShore`,new I(new Float32Array(e),1).setUsage(O)),n.setAttribute(`aFlow`,new I(new Float32Array(e*2),2).setUsage(O))),n.setIndex(new I(new Uint32Array(t),1).setUsage(O)),this.mesh.geometry=n,this.capV=e,this.capI=t}dispose(){this.mesh.geometry.dispose()}};function Gu(e){let t=new Float32Array(e*3);for(let n=0;n<e;n++)t[n*3+1]=1;return new I(t,3)}var Ku=new WeakMap;function qu(e){let t=Ku.get(e);if(t)return t;let n=e.water.positions,r=n.length/3,i=new Float32Array(r);for(let t=0;t<r;t++)i[t]=Ju(e,n[t*3],n[t*3+1],n[t*3+2]);return t=ou(n,e.water.indices,i),Ku.set(e,t),t}function Ju(e,t,n,r){let i=e.gridSize,a=128/(i-1),o=Math.min(i-1,Math.max(0,Math.round(t/a))),s=Math.min(i-1,Math.max(0,Math.round(r/a)));return n-e.positions[(s*i+o)*3+1]}var Yu=1.1;function Xu(e,t,n,r){let i=e.gridSize,a=128/(i-1),o=Math.min(i-1,Math.max(0,Math.round(t/a))),s=Math.min(i-1,Math.max(0,Math.round(r/a))),c=n-e.positions[(s*i+o)*3+1];return c<=0?1:c>=Yu?0:1-c/Yu}var Zu=class{mesh;cap=0;surface=null;nv=Uu(2);idx=xe(2);constructor(e){this.mesh=new j(new F,e),this.mesh.name=`terrain-lod2`,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(32),this.mesh.visible=!1}rebuild(e,t){let n=0;for(let t of e.values())t.lod===2&&n++;n>this.cap&&this.grow(Math.max(n,this.cap*2));let r=this.mesh.geometry,i=r.getAttribute(`position`).array,a=r.getAttribute(`normal`).array,o=r.getAttribute(`color`).array,s=r.getIndex().array,c=this.nv,l=this.idx.length,u=0;for(let n of e.values()){if(n.lod!==2)continue;let e=n.data,r=e.originX-t.x,d=e.originZ-t.z,f=u*c;for(let t=0;t<c;t++)i[(f+t)*3]=e.positions[t*3]+r,i[(f+t)*3+1]=e.positions[t*3+1],i[(f+t)*3+2]=e.positions[t*3+2]+d;a.set(e.normals,f*3),o.set(e.colors,f*3),Hu(this.surface,e,f,c);for(let e=0;e<l;e++)s[u*l+e]=this.idx[e]+f;u++}for(let e of[`position`,`normal`,`color`])r.getAttribute(e).needsUpdate=!0;return this.surface.needsUpdate=!0,r.getIndex().needsUpdate=!0,r.setDrawRange(0,u*l),this.mesh.visible=u>0,u}grow(e){this.mesh.geometry.dispose();let t=e*this.nv,n=new F;n.setAttribute(`position`,new I(new Float32Array(t*3),3).setUsage(O)),n.setAttribute(`normal`,new I(new Int8Array(t*3),3,!0).setUsage(O)),n.setAttribute(`color`,new I(new Uint8Array(t*3),3,!0).setUsage(O)),this.surface=Vu(n,t,O),n.setIndex(new I(new Uint32Array(e*this.idx.length),1).setUsage(O)),this.mesh.geometry=n,this.cap=e}dispose(){this.mesh.geometry.dispose()}},Qu=class{stream;origin;mats;group=new N;shownMap=new Map;free=[[],[],[]];indices;roads;water;lod2;pending=[];originVersion=-1;batchedVersion=-1;uploads;version=0;created=0;uploadsLastFrame=0;batched=0;constructor(e,t,n,r={}){this.stream=e,this.origin=t,this.mats=n,this.group.name=`terrain`,this.uploads=r.uploads??2,this.indices=[0,1,2].map(e=>new I(xe(e),1)),this.roads=new Wu(n.road,`roads`,!0),this.water=new Wu(n.water,`water`,!1),this.lod2=new Zu(n.terrain),this.group.add(this.lod2.mesh,this.roads.mesh,this.water.mesh)}setUploads(e){this.uploads=Math.max(1,e)}get shown(){return this.shownMap}get pooled(){return this.free[0].length+this.free[1].length+this.free[2].length}update(e,t){if(this.stream.update(e,t),this.originVersion!==this.origin.version){this.originVersion=this.origin.version,this.group.position.set(this.origin.x,0,this.origin.z);for(let e of this.shownMap.values())e.mesh?.position.set(e.data.originX-this.origin.x,0,e.data.originZ-this.origin.z);this.batchedVersion=-1}let n=this.stream.cells;for(let e of this.shownMap.values()){let t=n.get(e.key);(!t||!t.data)&&this.release(e)}let r=this.pending;r.length=0;for(let e of n.values()){if(!e.data)continue;let t=this.shownMap.get(e.key);t&&(t.dist=e.dist),(!t||t.data!==e.data)&&r.push(e)}r.sort((e,t)=>e.dist-t.dist);let i=Math.floor(e/128),a=Math.floor(t/128),o=this.uploads,s=0;for(let e of r){let t=!this.shownMap.has(e.key)&&Math.max(Math.abs(e.cx-i),Math.abs(e.cz-a))<=Bu;!t&&o<=0||(t||o--,this.upload(e),s++)}r.length=0,this.uploadsLastFrame=s,this.batchedVersion!==this.version&&(this.batchedVersion=this.version,this.batched=this.lod2.rebuild(this.shownMap,this.origin),this.roads.rebuild(this.shownMap,this.origin,e=>e.lod<=1),this.water.rebuild(this.shownMap,this.origin,()=>!0))}chunkAt(e,t){return this.shownMap.get(Pt(e,t))}upload(e){let t=e.data,n=this.shownMap.get(e.key);if(n&&n.lod!==t.lod&&(this.release(n),n=void 0),!n){let r=null;t.lod<2&&(r=this.acquire(t.lod).mesh,this.group.add(r)),n={key:e.key,cx:e.cx,cz:e.cz,lod:t.lod,data:t,mesh:r,dist:e.dist},this.shownMap.set(e.key,n)}n.data=t,n.mesh&&(ed(n.mesh.geometry,t),n.mesh.position.set(t.originX-this.origin.x,0,t.originZ-this.origin.z),n.mesh.name=`chunk ${e.cx},${e.cz} lod${t.lod}`),this.version++}acquire(e){let t=this.free[e].pop();if(t)return t.mesh.visible=!0,t;let n=Uu(e),r=new F;r.setAttribute(`position`,new I(new Float32Array(n*3),3)),r.setAttribute(`normal`,new I(new Int8Array(n*3),3,!0)),r.setAttribute(`color`,new I(new Uint8Array(n*3),3,!0)),Vu(r,n),r.setIndex(this.indices[e]),r.boundingBox=new En,r.boundingSphere=new Pn;let i=new j(r,this.mats.terrain);return i.receiveShadow=!0,i.matrixAutoUpdate=!0,this.created++,{lod:e,mesh:i}}release(e){this.shownMap.delete(e.key),e.mesh&&(e.mesh.removeFromParent(),this.pooled<128?this.free[e.lod].push({lod:e.lod,mesh:e.mesh}):$u(e.mesh.geometry)),this.version++}dispose(){for(let e of this.shownMap.values())e.mesh&&$u(e.mesh.geometry);this.lod2.dispose();for(let e of this.free)for(let t of e)$u(t.mesh.geometry);this.shownMap.clear();for(let e of this.free)e.length=0;this.roads.dispose(),this.water.dispose(),this.group.removeFromParent(),this.group.clear()}};function $u(e){e.dispose()}function ed(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=e.getAttribute(`color`);n.array.set(t.positions),r.array.set(t.normals),i.array.set(t.colors),n.needsUpdate=!0,r.needsUpdate=!0,i.needsUpdate=!0;let a=e.getAttribute(`aRock`);a&&(Hu(a.data,t,0,n.count),a.data.needsUpdate=!0);let o=e.boundingBox??=new En;o.min.set(0,t.minY,0),o.max.set(128,t.maxY,128);let s=e.boundingSphere??=new Pn;o.getBoundingSphere(s)}var td=10;function nd(e,t,n){if(n.x>n.z)return 0;let r=Math.max(n.x-e,e-n.z,n.y-t,t-n.w,0),i=Math.min(1,r/384);return i*i*(3-2*i)}var rd=new k(1/0,1/0,-1/0,-1/0),id=1e3;function ad(e,t){return e<=t+.5}function od(e,t,n,r){r.fine.length=0,r.coarse.length=0,r.wet.length=0;for(let i of e)i.data&&!t(i.cx,i.cz)&&((ad(i.dist,n)?r.fine:r.coarse).push(i.data),ad(i.dist,10)&&i.data.water.positions.length>0&&r.wet.push(i.data))}var sd=300,cd=class{quads;mesh;cap=0;surface=null;verts;step;constructor(e,t,n){this.quads=n,this.verts=(n+1)*(n+1),this.step=g[2]/n,this.mesh=new j(new F,e),this.mesh.name=t,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.grow(64),this.mesh.visible=!1}fill(e,t,n=rd){e.length>this.cap&&this.grow(Math.max(e.length,this.cap*2));let r=this.mesh.geometry,i=r.getAttribute(`position`).array,a=r.getAttribute(`normal`).array,o=r.getAttribute(`color`).array,s=this.surface.array,c=g[2]+1,l=this.quads,u=0;for(let r of e){let e=r.originX-t.x,d=r.originZ-t.z,f=r.surface;for(let t=0;t<=l;t++)for(let p=0;p<=l;p++){let l=t*this.step*c+p*this.step;i[u*3]=r.positions[l*3]+e,i[u*3+1]=r.positions[l*3+1],i[u*3+2]=r.positions[l*3+2]+d;for(let e=0;e<3;e++)a[u*3+e]=r.normals[l*3+e],o[u*3+e]=r.colors[l*3+e];for(let e=0;e<12;e++)s[u*12+e]=f.length>0?f[l*12+e]:0;s[u*12+td]=Math.round(nd(r.positions[l*3]+r.originX,r.positions[l*3+2]+r.originZ,n)*255),u++}}for(let e of[`position`,`normal`,`color`])r.getAttribute(e).needsUpdate=!0;this.surface.needsUpdate=!0,r.setDrawRange(0,e.length*l*l*6),this.mesh.visible=e.length>0}grow(e){this.mesh.geometry.dispose();let t=e*this.verts,n=new F;n.setAttribute(`position`,new I(new Float32Array(t*3),3).setUsage(O)),n.setAttribute(`normal`,new I(new Int8Array(t*3),3,!0).setUsage(O)),n.setAttribute(`color`,new I(new Uint8Array(t*3),3,!0).setUsage(O)),this.surface=Vu(n,t,O),n.deleteAttribute(`aField`),n.deleteAttribute(`aBase`),n.setAttribute(`aFar`,new Rn(this.surface,1,td,!0));let r=this.quads,i=r+1,a=new Uint32Array(e*r*r*6),o=0;for(let t=0;t<e;t++){let e=t*this.verts;for(let t=0;t<r;t++)for(let n=0;n<r;n++){let r=e+t*i+n;a[o++]=r,a[o++]=r+i,a[o++]=r+1,a[o++]=r+1,a[o++]=r+i,a[o++]=r+i+1}}n.setIndex(new I(a,1)),this.mesh.geometry=n,this.cap=e}dispose(){this.mesh.geometry.dispose()}},ld=class{origin;fineRadius;group=new N;stream;fine;coarse;water;capWaterV=0;capWaterI=0;builtFar=-1;builtNear=-1;builtOrigin=-1;lastBuild=-1/0;fineList=[];coarseList=[];wetList=[];nearRect=new k;count=0;constructor(e,t,n,r,i,a,o,s=10){this.origin=n,this.fineRadius=s,this.group.name=`far-terrain`,this.stream=new St({spec:e,builder:t,grid:null,ownsBuilder:!1,config:{radius:a,lod0:-1,lod1:-1,maxInFlight:2,objects:!1,priorityBase:id},limits:o===void 0?void 0:Ie(o)}),this.fine=new cd(r,`far-ground`,8),this.coarse=new cd(r,`far-ground-coarse`,4),this.water=new j(new F,i),this.water.name=`far-water`,this.water.frustumCulled=!1,this.growWater(1024,2048),this.water.visible=!1,this.group.add(this.fine.mesh,this.coarse.mesh,this.water)}setRadius(e,t=this.fineRadius){this.stream.configure({radius:e}),t!==this.fineRadius&&(this.fineRadius=t,this.builtFar=-1)}update(e,t,n,r){this.stream.update(e,t);let i=this.builtOrigin!==this.origin.version,a=this.builtFar!==this.stream.version,o=this.builtNear!==n.version;(i||a||o)&&(!i&&r-this.lastBuild<sd||(this.lastBuild=r,this.builtFar=this.stream.version,this.builtNear=n.version,this.builtOrigin=this.origin.version,this.rebuild(n)))}rebuild(e){let t=this.fineList,n=this.coarseList,r=this.wetList;od(this.stream.cells.values(),(t,n)=>!!e.chunkAt(t,n),this.fineRadius,{fine:t,coarse:n,wet:r});let i=0,a=0;for(let e of r)i+=e.water.positions.length/3,a+=e.water.indices.length;this.count=t.length+n.length,this.group.position.set(this.origin.x,0,this.origin.z);let o=this.nearRect.set(1/0,1/0,-1/0,-1/0);for(let t of e.shown.values())o.x=Math.min(o.x,t.cx*128),o.y=Math.min(o.y,t.cz*128),o.z=Math.max(o.z,(t.cx+1)*128),o.w=Math.max(o.w,(t.cz+1)*128);this.fine.fill(t,this.origin,o),this.coarse.fill(n,this.origin,o),(i>this.capWaterV||a>this.capWaterI)&&this.growWater(Math.max(i,this.capWaterV*2),Math.max(a,this.capWaterI*2));let s=this.water.geometry,c=s.getAttribute(`position`).array,l=s.getIndex().array,u=0,d=0;for(let e of r){let t=e.water,n=t.positions.length/3;if(n===0)continue;let r=e.originX-this.origin.x,i=e.originZ-this.origin.z;for(let e=0;e<n;e++)c[(u+e)*3]=t.positions[e*3]+r,c[(u+e)*3+1]=t.positions[e*3+1],c[(u+e)*3+2]=t.positions[e*3+2]+i;for(let e=0;e<t.indices.length;e++)l[d+e]=t.indices[e]+u;u+=n,d+=t.indices.length}s.getAttribute(`position`).needsUpdate=!0,s.getIndex().needsUpdate=!0,s.setDrawRange(0,d),this.water.visible=d>0,t.length=0,n.length=0,r.length=0}growWater(e,t){this.water.geometry.dispose();let n=new F;n.setAttribute(`position`,new I(new Float32Array(e*3),3).setUsage(O)),n.setAttribute(`normal`,Gu(e)),n.setIndex(new I(new Uint32Array(t),1).setUsage(O)),this.water.geometry=n,this.capWaterV=e,this.capWaterI=t}dispose(){this.stream.dispose(),this.fine.dispose(),this.coarse.dispose(),this.water.geometry.dispose(),this.group.removeFromParent(),this.group.clear()}};function ud(e){return(e+1)*128*Math.SQRT2}var dd=class{x=0;z=0;version=0;follow(e,t){let n=e-this.x,r=t-this.z;return n*n+r*r<=1048576?!1:(this.set(Math.floor(e/128)*128,Math.floor(t/128)*128),!0)}set(e,t){(e!==this.x||t!==this.z)&&(this.x=e,this.z=t,this.version++)}},fd=1.45;function pd(e,t,n,r){let i=t.pts,a=i.length/2;if(a<2)return null;let o=[],s=[],c=[];for(let e=0;e<a;e++){let l=r?e:a-1-e,u=Math.max(0,l-1),d=Math.min(a-1,l+1),f=i[d*2]-i[u*2],p=i[d*2+1]-i[u*2+1];r||(f=-f,p=-p);let m=Math.sqrt(f*f+p*p)||1,h=i[l*2]+-p/m*fd,g=i[l*2+1]+f/m*fd,_=n.field.heightAt(h,g),v=Math.min(a-2,l);if(t.bridged[v]||l>0&&t.bridged[l-1]){let e=1/0;for(let n of t.bridges){let t=(n.x-h)*(n.x-h)+(n.z-g)*(n.z-g);t<e&&(e=t,_=n.y)}}o.push(h),s.push(g),c.push(_+he)}return ft(e,0,o,s,c,{limit:16})}function md(e,t,n,r){let i=e.roads.polylinesNear(t-r,n-r,t+r,n+r,3),a=[];for(let t of i)for(let n of[!0,!1]){let r=pd(a.length,t,e,n);r&&r.length>60&&a.push(r)}return{edges:a,spawnable:a.map(e=>e.id),nodes:[]}}var hd=`life:flags`,gd=class{group=new N;puffs=new Ee;fans;flags;beacons;city;grid;at=new D(1/0,0,1/0);budget=null;flagSpots=[];steam=[];windYaw=0;constructor(e,t,n){this.group.name=`city-life`,this.city=e,this.grid=n,this.fans=new _e(Ce(),{key:`ac-fans`,pre:me,roughness:.6},t,!1),this.flags=new _e(oe(),{key:`flags`,pre:f,vertexPars:Dt,fragmentPars:C,fragment:be,roughness:.8,side:2},t,!1),this.beacons=new _e(ke(),{key:`beacons`,fragment:h,roughness:.4},t,!1),this.group.add(this.fans.mesh,this.flags.mesh,this.beacons.mesh,this.puffs.layer.mesh);let r=e.buildings,i=[];for(let t=0;t<r.length;t+=8){let n=r[t],a=r[t+1],o=r[t+2],s=r[t+3],c=r[t+4],l=r[t+5];if(r[t+7]===1||c>70||s<10)continue;let u=ir(e.seed,Math.floor(n),Math.floor(o),61862);if(z(u)>.11)continue;let d=n-s/2+1.2,f=o-l/2+1.2,p={kind:`cylinder`,center:[d,a+c+3.5,f],radius:1.9,halfHeight:3.5};e.rings.some(e=>ve(e.position[0],e.position[1],e.position[2],p)<e.radius+3)||(this.flagSpots.push(d,a+c,f,Math.floor(z(nr(u,3))*4)),i.push({id:`flag:${i.length}`,shape:{kind:`cylinder`,center:[d,a+c+3.5,f],radius:.1,halfHeight:3.5}}))}this.grid?.insertOwned(hd,i);let a=this.beacons.layer;a.begin();for(let e=0;e<r.length;e+=8){let t=r[e],n=r[e+1],i=r[e+2],o=r[e+3],s=r[e+4],c=r[e+5];if(!(s<90))for(let[e,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])a.push(t+e*(o/2-.4),n+s,i+r*(c/2-.4),0,1,1,1,0)}a.end();let o=e.roofProps;for(let t=0;t<o.length;t+=7){if(o[t]!==0)continue;let n=o[t+1],r=o[t+3];z(ir(e.seed,Math.floor(n*3),Math.floor(r*3),22506))>.125||this.steam.push(n,o[t+2]+o[t+5]+.2,r,b.steam)}}setBudget(e){this.budget=e,this.puffs.budget=e.puffs,this.fans.mesh.visible=e.roofLife,this.flags.mesh.visible=e.roofLife,this.beacons.mesh.visible=e.roofLife,this.at.set(1/0,0,1/0)}setWind(e){let t=Math.atan2(-e.y,e.x);if(Math.abs(t-this.windYaw)<1e-6&&this.flags.layer.count>0)return;this.windYaw=t;let n=this.flags.layer;n.begin();for(let e=0;e<this.flagSpots.length;e+=4)n.push(this.flagSpots[e],this.flagSpots[e+1],this.flagSpots[e+2],t,1,1,1,this.flagSpots[e+3]);n.end(),this.flags.mesh.visible=this.budget?.roofLife!==!1&&n.count>0}update(e,t,n,r,i){let a=this.puffs.uniforms;if(a.uTime.value=e,a.uWindDir.value.copy(n),a.uFogDensity.value=r,a.uFogColor.value.copy(i),(t.x-this.at.x)**2+(t.z-this.at.z)**2<1600)return;this.at.copy(t);let o=this.fans.layer;if(o.begin(),this.budget?.roofLife!==!1){let e=this.city.roofProps;for(let n=0;n<e.length;n+=7){if(e[n]!==0)continue;let r=e[n+1],i=e[n+3];(r-t.x)**2+(i-t.z)**2>48400||o.push(r,e[n+2]+e[n+5],i,0,1,1,1,0)}}o.end(),this.fans.mesh.visible=this.budget?.roofLife!==!1&&o.count>0;let s=[];for(let e=0;e<this.steam.length;e+=4){let n=this.steam[e],r=this.steam[e+2];(n-t.x)**2+(r-t.z)**2<202500&&s.push(n,this.steam[e+1],r,this.steam[e+3])}this.puffs.set(s,s.length/4,0,0,5),this.puffs.layer.mesh.visible=this.puffs.layer.count>0}counts(){return{fans:this.fans.count,flags:this.flags.count,beacons:this.beacons.count,steam:this.puffs.count}}dispose(){this.grid?.removeOwner(hd),this.group.removeFromParent(),this.fans.dispose(),this.flags.dispose(),this.beacons.dispose(),this.puffs.dispose(),this.group.clear()}},_d=class{group=new N;rt;budget;form;traffic=null;birds;origin;countryside=null;cityLife=null;placedAt=new D(1/0,0,1/0);roadsAt=new D(1/0,0,1/0);rural=null;ruralView=null;shared;wind;fogColor=new P;fogDensity=0;placeMs=0;trafficMs=0;ruralModels;constructor(e,t,n,r,i,o,l=null){this.group.name=`life`,this.shared=t,this.wind=o,this.rt=e,this.form=i,this.origin=n,this.budget=c(r,i);let u=e.content;this.ruralModels=u?.kind===`terrain`?l:null;let d=(t,n)=>e.terrain?e.terrain.heightAt(t,n):0,f=u?.seed??1,p=e.def.spawn.position,m=[];if(u?.kind===`city`){let e=[Gt(10),Gt(4)];for(let t=0;t<15;t++)for(let n=0;n<15;n++)u.city.blockClass(n,t)===`park`&&(e=[Gt(n),Gt(t)]);let t=[];for(let e=0;e<15;e++)for(let n=0;n<15;n++)u.city.blockClass(n,e)===`low`&&t.push([Gt(n),Gt(e),(Gt(n)-p[0])**2+(Gt(e)-p[2])**2]);t.sort((e,t)=>e[2]-t[2]);let n=[e,...t.slice(0,2).map(e=>[e[0],e[1]])];m.push({sim:new ut({seed:f,flocks:3,birds:16,speed:11,radius:[14,24],height:[30,44],keep:1/0,place:[90,220],ground:d,homes:n},p[0],p[2]),kind:s.pigeon,scale:.85}),m.push({sim:new ut({seed:f+1,flocks:1,birds:10,speed:8.5,radius:[30,55],height:[12,30],keep:1/0,place:[120,260],ground:d,homes:[[Ne.x,p[2]+120]]},p[0],p[2]),kind:s.gull,scale:1.25})}else{let t=e.def.id===`alpine`;m.push({sim:new ut({seed:f,flocks:3,birds:16,speed:t?10:12.5,radius:[22,45],height:t?[40,90]:[14,45],keep:650,place:[110,380],ground:d},p[0],p[2]),kind:t?s.crow:s.swallow,scale:t?1.2:.75})}if(this.birds=new ie(m,t,e.life??null),this.birds.setBudget(this.budget.flocks,this.budget.birds),this.group.add(this.birds.group),u?.kind===`city`&&u.traffic){let e=u.traffic;this.traffic=new a(e.sim,e.signals,e.roads.signals,t,this.trafficOptions(),l),this.group.add(this.traffic.group),this.applyTrafficBudget()}u?.kind===`city`&&(this.cityLife=new gd(u.city,t,e.grid),this.cityLife.setBudget(this.budget),this.cityLife.setWind(o),this.group.add(this.cityLife.group)),u?.kind===`terrain`&&(this.countryside=new qt(t,e.life??null,e.grid,d),this.countryside.setBudget(this.budget),this.group.add(this.countryside.group))}follow(e){let t=this.rt.content;if(t?.kind!==`terrain`||!this.countryside)return;let n=t.world.spec.preset===`alpine`,r=performance.now();if((e.x-this.placedAt.x)**2+(e.z-this.placedAt.z)**2>(n?1/0:102400)||!Number.isFinite(this.placedAt.x)){let r=n?[0,0]:[e.x,e.z];this.placedAt.set(r[0],0,r[1]);let i=Math.atan2(-this.wind.x,-this.wind.y),a=fe(t.world,r[0],r[1],n?1700:900,i,{turbines:!n,sheep:!n,pastures:n});this.countryside.setContent(a,this.origin.x,this.origin.z)}if((e.x-this.roadsAt.x)**2+(e.z-this.roadsAt.z)**2>176400){this.roadsAt.set(e.x,0,e.z);let n=md(t.world,e.x,e.z,750);this.rural&&this.rt.life?.removeTraffic(this.rural),this.rural=new He(n,null,{seed:(t.seed^Math.floor(e.x)^Math.floor(e.z)<<8)>>>0,maxCars:12,radius:650,spawnInner:.5,vehicles:[0,1,2,3]}),this.rural.target=this.budget.ruralCars,this.rt.life?.addTraffic(this.rural),this.ruralView?this.ruralView.setSim(this.rural):(this.ruralView=new a(this.rural,null,null,this.shared,{generic:this.budget.genericCars,glow:!1,shadows:!1,signalRange:0},this.ruralModels),this.modelTier&&this.ruralView.setModelTier(this.modelTier),this.group.add(this.ruralView.group))}let i=performance.now()-r;i>.5&&(this.placeMs=i)}trafficOptions(){let e=this.budget;return{generic:e.genericCars,glow:e.carGlow,shadows:e.carShadows,signalRange:e.signalRange}}applyTrafficBudget(){let e=this.rt.content;if(e?.kind!==`city`||!e.traffic)return;let t=e.traffic.sim;t.target=this.budget.cars,t.radius=this.budget.carRadius}setQuality(e){this.budget=c(e,this.form),this.traffic?.setOptions(this.trafficOptions()),this.applyTrafficBudget(),this.birds.setBudget(this.budget.flocks,this.budget.birds),this.countryside?.setBudget(this.budget),this.cityLife?.setBudget(this.budget),this.rural&&(this.rural.target=this.budget.ruralCars),this.ruralView?.setOptions({generic:this.budget.genericCars,glow:!1,shadows:!1,signalRange:0})}setDusk(e){this.traffic?.setLights(Math.min(1,Math.max(0,(e-.25)/.5)))}setFog(e,t){this.fogDensity=e,t&&this.fogColor.copy(t),this.traffic?.setFog(e)}update(e){let t=this.rt.content;if(this.group.position.set(this.origin.x,0,this.origin.z),this.birds.origin.x=this.origin.x,this.birds.origin.z=this.origin.z,this.birds.update(e.dt,e.drone),this.cityLife?.update(e.time,e.drone,this.wind,this.fogDensity,this.fogColor),this.countryside&&(this.follow(e.drone),this.countryside.setOrigin(this.origin.x,this.origin.z),this.countryside.update(e.time,this.wind,this.fogDensity,this.fogColor)),this.rural&&this.ruralView){let t=e.drone,n=this.rt.terrain?this.rt.terrain.heightAt(t.x,t.z):0;this.rural.update(e.dt,t.x,t.y,t.z,t.y-n),this.ruralView.origin.x=this.origin.x,this.ruralView.origin.z=this.origin.z,this.ruralView.update(this.rural.time,t,e.camera)}if(t?.kind===`city`&&t.traffic&&this.traffic){let n=e.drone,r=this.rt.terrain?this.rt.terrain.heightAt(n.x,n.z):0,i=performance.now();t.traffic.sim.update(e.dt,n.x,n.y,n.z,n.y-Math.max(0,r)),this.trafficMs=performance.now()-i,this.rt.life?.flushTrafficEvents(),this.traffic.update(t.traffic.sim.time,n,e.camera)}}setModelTier(e){this.traffic?.setModelTier(e),this.ruralView?.setModelTier(e),this.modelTier=e}modelTier=null;glbStats(){let e=this.traffic?.glbStats(),t=this.ruralView?.glbStats();return{instances:(e?.instances??0)+(t?.instances??0),draws:(e?.draws??0)+(t?.draws??0),tris:(e?.tris??0)+(t?.tris??0)}}stats(){let e=this.rt.content,t={};return e?.kind===`city`&&e.traffic&&(t.cars=e.traffic.sim.count,t.trafficMs=Math.round(this.trafficMs*1e3)/1e3,t.trafficDraws=this.traffic?.counts()),t.birds=this.birds.count,this.countryside&&(t.countryside=this.countryside.counts()),this.cityLife&&(t.city=this.cityLife.counts()),this.rural&&(t.ruralCars=this.rural.count),t.placeMs=Math.round(this.placeMs*100)/100,t}dispose(){this.group.removeFromParent(),this.traffic?.dispose(),this.birds.dispose(),this.countryside?.dispose(),this.cityLife?.dispose(),this.rural&&this.rt.life?.removeTraffic(this.rural),this.ruralView?.dispose(),this.group.clear()}},vd=[.8,1.2,1.6,2,2.4,2.8],yd=.5,bd=.6,xd=[1.1,1.6],Sd=2541,Cd=[`H2`,`H3`,`H4`],wd=[.3,.9];function Td(e,t,n){for(let r of e.near(t,n))for(let e of wd)if(ve(t,e,n,r.shape)<.55)return!1;return!0}function Ed(e,t,n,r,i){let a=Math.sqrt((r-t)*(r-t)+(i-n)*(i-n)),o=Math.max(1,Math.ceil(a/yd));for(let a=0;a<=o;a++)if(!Td(e,t+(r-t)*a/o,n+(i-n)*a/o))return!1;return!0}function Dd(e,t,n,r,i,a){let o=a,s=NaN,c=NaN,l=Math.ceil(r-n);for(let a=0;a<=l;a++){let l=Math.min(r,n+a),u=-1,d=[o,...vd.filter(e=>e!==o&&Math.abs(e-o)<=.800000001).sort((e,t)=>Math.abs(e-o)-Math.abs(t-o)||e-t)];for(let n of d){let[r,i]=t(l,n);if(Td(e,r,i)&&!(a>0&&!Ed(e,s,c,r,i))){u=n;break}}if(u<0)return null;let[f,p]=t(l,u);i.push(f,p),s=f,c=p,o=u}return o}function Od(e,t,n){let r=Qt(t),i=Qt(n),a=[(e,t)=>[r+e,i+t],(e,t)=>[r+64-t,i+e],(e,t)=>[r+64-e,i+64-t],(e,t)=>[r+t,i+64-e]],o=[],s=1.6;for(let t of a){let n=Dd(e,t,3,61,o,s);if(n===null)return null;s=n}for(let t=0;t<o.length;t+=2){let n=(t+2)%o.length;if(!Ed(e,o[t],o[t+1],o[n],o[n+1]))return null}return o}function kd(e,t){let n=e.length/2,r=new Float64Array(n+1);for(let t=0;t<n;t++){let i=(t+1)%n,a=e[2*i]-e[2*t],o=e[2*i+1]-e[2*t+1];r[t+1]=r[t]+Math.sqrt(a*a+o*o)}return{pts:Float64Array.from(e),cum:r,length:r[n],block:t}}function Ad(e,t,n){let r=new tt;for(let e of t)r.add(e);let i=[],a=[],o=e.seed;for(let t=0;t<15;t++)for(let n=0;n<15;n++){let s=e.blockClass(n,t);if(s===`river`||s===`park`)continue;let c=ir(o,n,t,Sd);if(z(c)>=bd)continue;let l=Od(r,n,t);if(!l)continue;let u=kd(l,[n,t]);i.push(u);let d=1+ +(z(nr(c,1))<.4);for(let e=0;e<d;e++){let t=nr(c,10+e),n=Cd[Math.floor(z(t)*3)],r=n===`H4`&&z(nr(t,1))<.5;a.push({id:a.length,model:n,gait:r?`jog`:`walk`,route:i.length-1,speed:r?3:xd[0]+(xd[1]-xd[0])*z(nr(t,2)),dir:z(nr(t,3))<.5?1:-1,phase:z(nr(t,4))*u.length,x:0,z:0,yaw:0})}}for(let e=0;e*3+2<n.length;e++){let t=ir(o,e,7,Sd);z(t)>=.55||a.push({id:a.length,model:z(nr(t,1))<.5?`H2`:`H3`,gait:`idle`,route:-1,speed:0,dir:1,phase:z(nr(t,2))*10,x:n[e*3],z:n[e*3+1],yaw:n[e*3+2]})}return{routes:i,walkers:a}}var jd=.8;function Md(e,t,n){let r=t-e;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;return e+r*n}function Nd(e,t,n,r){if(t.route<0)return r.x=t.x,r.z=t.z,r.yaw=t.yaw,r;let i=e.routes[t.route],a=(t.phase+t.dir*t.speed*n)%i.length;a<0&&(a+=i.length);let o=i.pts.length/2,s=0;for(;s<o-1&&i.cum[s+1]<=a;)s++;let c=(s+1)%o,l=i.cum[s+1]-i.cum[s],u=l>0?(a-i.cum[s])/l:0,d=i.pts[2*s],f=i.pts[2*s+1],p=i.pts[2*c]-d,m=i.pts[2*c+1]-f;r.x=d+p*u,r.z=f+m*u;let h=Math.atan2(p,m),g=i.cum[s+1]-a,_=a-i.cum[s],v=Math.min(jd,l/2),y=h;if(g<v)y=Md(h,Math.atan2(i.pts[2*((c+1)%o)]-i.pts[2*c],i.pts[2*((c+1)%o)+1]-i.pts[2*c+1]),.5*(1-g/v));else if(_<v){let e=(s+o-1)%o;y=Md(h,Math.atan2(i.pts[2*s]-i.pts[2*e],i.pts[2*s+1]-i.pts[2*e+1]),.5*(1-_/v))}return r.yaw=t.dir>0?y:y+Math.PI,r}var Pd=1.4,Fd=3,Id={ultra:{skinned:6,proxies:!0},high:{skinned:6,proxies:!0},medium:{skinned:3,proxies:!1},low:{skinned:0,proxies:!1}};function Ld(e,t){e.updateMatrixWorld(!0);let n=new A().copy(e.matrixWorld).invert().multiply(t.matrixWorld);return t.geometry.clone().applyMatrix4(n)}function Rd(e,t){let n=Id[e],r=Id[t];return n.skinned<=r.skinned&&(!n.proxies||r.proxies)}var zd=[`H2`,`H3`,`H4`],Bd=40,Vd=class{peds;ground;group=new N;slots=[];templates=new Map;proxies=new Map;proxyList=[];proxyGeometries=[];proxyPose={x:0,z:0,yaw:0};proxyMaterials=[];budget;pose={x:0,z:0,yaw:0};m=new A;q=new Fn;p=new D;one=new D(1,1,1);up=new D(0,1,0);pick;pickD;picked=0;slotOf;disposed=!1;skinnedShown=0;proxiesShown=0;constructor(e,t,n,r){this.peds=e,this.ground=r,this.budget=Id[n],this.group.name=`pedestrians`,this.pick=new Int32Array(this.budget.skinned),this.pickD=new Float64Array(this.budget.skinned),this.slotOf=new Int32Array(e.walkers.length).fill(-1);try{for(let e of zd){let n=t[e];if(!n)continue;this.templates.set(e,n),n.traverse(e=>{let t=e;for(let e of[t.material].flat())e&&e.isMeshStandardMaterial&&(e.envMapIntensity=.6)});let r=n.getObjectByName(`${e}_LOD0`);if(n.visible=!1,r)for(let t=0;t<this.budget.skinned;t++)this.slots.push(this.makeSlot(e,n));let i=n.getObjectByName(`${e}_LODQ`);if(this.budget.proxies&&i){let t=i.material,r=new un({map:t.map??null,color:16777215});this.proxyMaterials.push(r);let a=Ld(n,i);this.proxyGeometries.push(a);let o=new Hn(a,r,Bd);o.name=`${e}_proxies`,o.count=0,o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!0,Zn(o,()=>o.count>0),this.proxies.set(e,o),this.proxyList.push(o),this.group.add(o)}}}catch(e){this.dispose();for(let e of zd){let n=t[e];n&&!this.templates.has(e)&&_r(n)}throw e}}makeSlot(e,t){let n=new N;n.name=`ped-${e}`;let r=pr(t);r.visible=!0;let i=[];r.traverse(e=>{let t=e;t.isSkinnedMesh&&(i.push(t),t.frustumCulled=!1,t.castShadow=!1,t.receiveShadow=!0)});for(let t of[`${e}_LODQ`,`${e}_LOD1`])r.getObjectByName(t)?.removeFromParent();n.add(r),n.visible=!1;let a=new Bn(r),o=t.animations??[],s=e=>{let t=o.find(t=>t.name===e);return t?a.clipAction(t):null};this.group.add(n);let c={model:e,root:n,mixer:a,walk:s(`walk`),run:s(`run`),idle:s(`idle`),skinned:i,walker:-1,gait:null};return Zn(n,()=>c.walker>=0),c}setActive(e){if(this.group.visible=e,!e){this.skinnedShown=0,this.proxiesShown=0;for(let e of this.proxyList)e.count=0}}update(e,t,n,r){if(this.disposed||!this.group.visible)return;let i=this.peds.walkers,a=this.budget.skinned;this.lastTime=e,this.picked=0;for(let e of this.proxyList)e.count=0;this.proxiesShown=0;for(let t=0;t<i.length;t++){let o=i[t];if(!this.near(o,e,n,r))continue;let s=this.pose.x-n,c=this.pose.z-r,l=s*s+c*c;a>0&&l<=3600&&this.slotsFor(o.model)>0?this.insert(t,l):l<=16900&&this.drawProxy(o)}for(let e of this.slots){if(e.walker<0)continue;let t=!1;for(let n=0;n<this.picked;n++)this.pick[n]===e.walker&&(t=!0);t||this.release(e)}this.skinnedShown=0;for(let n=0;n<this.picked;n++){let r=this.pick[n],a=i[r],o=this.slotOf[r]>=0?this.slots[this.slotOf[r]]:null;if(!o){if(o=this.freeSlot(a.model),!o){this.drawProxy(a);continue}this.bind(o,r,a)}Nd(this.peds,a,e,this.pose),o.root.position.set(this.pose.x,this.ground(this.pose.x,this.pose.z),this.pose.z),o.root.rotation.y=this.pose.yaw,o.mixer.update(t),this.skinnedShown++}for(let e of this.proxyList)e.visible=e.count>0,e.instanceMatrix.needsUpdate=!0}slotsFor(e){let t=0;for(let n of this.slots)n.model===e&&t++;return t}near(e,t,n,r){Nd(this.peds,e,t,this.pose);let i=this.pose.x-n,a=this.pose.z-r;return i*i+a*a<=44100}insert(e,t){let n=this.pick.length,r=this.picked;for(;r>0&&this.pickD[r-1]>t;)r--;if(r>=n){this.drawProxy(this.peds.walkers[e]);return}this.picked===n?this.drawProxy(this.peds.walkers[this.pick[n-1]]):this.picked++;for(let e=this.picked-1;e>r;e--)this.pick[e]=this.pick[e-1],this.pickD[e]=this.pickD[e-1];this.pick[r]=e,this.pickD[r]=t}drawProxy(e){let t=this.proxies.get(e.model);if(!t||t.count>=Bd)return;let n=Nd(this.peds,e,this.lastTime,this.proxyPose);this.q.setFromAxisAngle(this.up,n.yaw),this.p.set(n.x,this.ground(n.x,n.z),n.z),this.m.compose(this.p,this.q,this.one),t.setMatrixAt(t.count++,this.m),this.proxiesShown++}lastTime=0;freeSlot(e){for(let t of this.slots)if(t.model===e&&t.walker<0)return t;return null}bind(e,t,n){e.walker=t,this.slotOf[t]=this.slots.indexOf(e),e.root.visible=!0,e.mixer.stopAllAction();let r=n.gait===`idle`?e.idle:n.gait===`jog`?e.run??e.walk:e.walk;e.gait=n.gait,r&&(r.reset(),r.setEffectiveTimeScale(n.gait===`idle`?1:n.speed/(n.gait===`jog`&&e.run?Fd:Pd)),r.play(),r.time=n.phase*.37%r.getClip().duration)}release(e){e.walker>=0&&(this.slotOf[e.walker]=-1),e.walker=-1,e.root.visible=!1,e.mixer.stopAllAction()}drawn(){if(!this.group.visible)return{draws:0,instances:0};let e=this.skinnedShown;for(let t of this.proxyList)t.count>0&&e++;return{draws:e,instances:this.skinnedShown+this.proxiesShown}}hasSlot(e){return this.slotOf[e]>=0}dispose(){if(!this.disposed){this.disposed=!0;for(let e of this.slots){e.mixer.stopAllAction();for(let t of e.skinned)t.skeleton.dispose()}for(let e of this.proxyList)e.dispose();for(let e of this.proxyGeometries)e.dispose();this.proxyGeometries.length=0;for(let e of this.proxyMaterials)e.dispose();this.group.removeFromParent();for(let e of this.templates.values())_r(e);this.slots.length=0,this.proxies.clear(),this.proxyList.length=0}}},Hd=class{deps;gen=0;loading=!1;done=!1;constructor(e){this.deps=e}request(e){if(this.done||this.loading||Id[e].skinned===0)return;this.loading=!0;let t=this.gen;this.deps.hub.loadExtra(this.deps.models).then(n=>{let r={};for(let e of this.deps.models){let t=n.scenes[e];t&&(r[e]=t)}let i=()=>{for(let e of Object.values(r))e&&_r(e)};if(t!==this.gen||n.loaded<n.wanted)return i();let a=this.deps.build(r,e);if(!a)return i();this.done=!0,this.deps.adopt(a,e)}).catch(e=>console.warn(`late pedestrians could not be built`,e)).finally(()=>{this.loading=!1})}cancel(){this.gen++}get built(){return this.done}};function Ud(e,t,n){return e.transient!==!0&&!t&&n}var Wd=`
varying vec3 vDir;
void main() {
  vDir = normalize( position );
  vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  gl_Position = p.xyww;
}`,Gd=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uGlow;
uniform vec3 uGlowDir;
uniform vec3 uMoonDir;
uniform vec3 uMoon;
uniform float uStars;
varying vec3 vDir;
float sh( vec3 p ) { return fract( sin( dot( p, vec3( 127.1, 311.7, 74.7 ) ) ) * 43758.5453 ); }
void main() {
  vec3 d = normalize( vDir );
  float up = clamp( d.y, 0.0, 1.0 );
  vec3 c = mix( uHorizon, uTop, pow( up, 0.45 ) );
  // the town's glow: a low warm band, brightest towards the lantern market
  float toward = 0.5 + 0.5 * dot( normalize( d.xz + 1e-5 ), normalize( uGlowDir.xz ) );
  c += uGlow * exp( -up * 9.0 ) * ( 0.35 + 0.65 * toward * toward );
  // stars: one candidate per cell of a direction grid, twinkle-free (no time), fading into the haze
  vec3 g = d * 180.0;
  vec3 cell = floor( g );
  float s = sh( mod( cell, 251.0 ) );
  float star = step( 0.985, s ) * smoothstep( 0.42, 0.0, length( fract( g ) - 0.5 ) ) * smoothstep( 0.08, 0.35, up );
  c += vec3( 0.9, 0.92, 1.0 ) * star * uStars * ( 0.4 + 0.6 * fract( s * 91.0 ) );
  // the moon: a disc and a soft halo
  float m = dot( d, uMoonDir );
  c += uMoon * ( smoothstep( 0.99965, 0.99985, m ) * 6.0 + pow( max( m, 0.0 ), 400.0 ) * 0.6 );
  // below the horizon the dome is the haze colour (the ground and the backdrop cover it)
  if ( d.y < 0.0 ) c = uHorizon;
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Kd=class{mesh;constructor(e,t,n=800){let r=new Vn({vertexShader:Wd,fragmentShader:Gd,uniforms:{uTop:{value:new P(e.top)},uHorizon:{value:new P(e.haze??e.horizon)},uGlow:{value:new P(t.glow)},uGlowDir:{value:new D(...t.glowDir)},uMoonDir:{value:new D(...e.sunDir).normalize()},uMoon:{value:new P(e.sunColor)},uStars:{value:1}},side:1,depthWrite:!1,fog:!1});this.mesh=new j(new Wn(n,32,16),r),this.mesh.name=`night-sky`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=v}follow(e){this.mesh.position.copy(e)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};function qd(e,t,n){let r=new In,i=new Kd(t,n,50);i.mesh.material.uniforms.uStars.value=0,r.add(i.mesh);let a=new Jn(e),o=a.fromScene(r,.02,.1,100);return a.dispose(),i.dispose(),o}var Jd=`
varying vec3 vB;
void main() {
  vB = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`
uniform vec3 uRoof;
uniform vec3 uGlow;
uniform vec3 uWindow;
varying vec3 vB;
float bh( float n ) { return fract( sin( mod( n, 251.0 ) * 12.9898 + 4.1414 ) * 43758.5453 ); }
void main() {
  float ang = atan( vB.x, vB.z );
  // 360 lots round the ring, each a gable of its own height
  float a = ang / 6.28318 * 360.0;
  float lot = floor( a );
  float f = fract( a );
  float h = 6.0 + 9.0 * bh( lot ) + 6.0 * step( 0.93, bh( lot + 17.0 ) );
  float gableTop = h + 2.5 * ( 1.0 - abs( f - 0.5 ) * 2.0 );
  if ( vB.y > gableTop ) discard;
  // the market glow: south (+z, angle 0) behind the roofs, lighter towards the roofline
  float south = pow( max( cos( ang ), 0.0 ), 3.0 );
  vec3 c = uRoof + uGlow * south * smoothstep( 0.0, h, vB.y ) * 0.35;
  // lit windows: a few warm cells per lot
  vec2 cell = vec2( floor( f * 4.0 ), floor( vB.y / 3.0 ) );
  float lit = step( 0.86, bh( lot * 13.0 + cell.x * 3.0 + cell.y * 7.0 ) ) * step( vB.y, h - 1.0 ) * step( 1.0, vB.y );
  vec2 wf = vec2( fract( f * 4.0 ), fract( vB.y / 3.0 ) );
  c += uWindow * lit * step( 0.3, wf.x ) * step( wf.x, 0.7 ) * step( 0.35, wf.y ) * step( wf.y, 0.75 );
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Xd=class{mesh;constructor(e,t){let n=new rn(t,t,40,128,1,!0);n.translate(0,19.5,0);let r=new Vn({vertexShader:Jd,fragmentShader:Yd,uniforms:{uRoof:{value:new P(854540)},uGlow:{value:new P(16747066)},uWindow:{value:new P(16752736).multiplyScalar(.6)}},side:1,fog:!1});this.mesh=new j(n,r),this.mesh.name=`hoi-an-backdrop`,this.mesh.position.set(e[0],0,e[1]),this.mesh.frustumCulled=!1}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Zd=.12,Qd=.07,$d=.025,ef=e=>1-e-Zd*e*(1-e);function tf(e,t,n){let r=new F;return r.setAttribute(`position`,new M(e,3)),r.setAttribute(`uv`,new M(t,2)),r.setIndex(n),r.computeVertexNormals(),r}function nf(e,t,n){let r=[],i=[],a=[];for(let a=0;a<=n;a++){let o=a/n;for(let n=0;n<=t;n++){let a=-.5+n/t;r.push(a,ef(o),e*.5*o),i.push(a,o)}}for(let r=0;r<n;r++)for(let n=0;n<t;n++){let i=r*(t+1)+n,o=i+1,s=i+t+1,c=s+1;e===1?a.push(i,s,o,o,s,c):a.push(i,o,s,o,c,s)}return tf(r,i,a)}function rf(e,t){let n=[e,0,0],r=[e,1];for(let i=-t;i<=t;i++){let a=Math.abs(i)/t;n.push(e,ef(a),.5*a*Math.sign(i)),r.push(e,a)}let i=[];for(let n=1;n<=2*t;n++)e>0?i.push(0,n,n+1):i.push(0,n+1,n);return tf(n,r,i)}function af(){return tf([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],[-.5,1,.5,1,-.5,1,.5,1],[0,1,2,1,3,2])}function of(){let e=new Nn(1,Qd,2*$d);e.translate(0,1-Qd/2,0);let t=e.getAttribute(`uv`);for(let e=0;e<t.count;e++)t.setXY(e,0,0);return e}function sf(e){let t=cr(e.map(e=>e.index?e.toNonIndexed():e),!1);for(let t of e)t.dispose();return t}function cf(e){let[t,n]=e===0?[6,8]:[1,2];return sf([nf(1,t,n),nf(-1,t,n),rf(.5,n),rf(-.5,n),af(),of()])}function lf(){return sf([tf([-.5,1,-.5,.5,1,-.5,-.5,0,.5,.5,0,.5],[-.5,0,.5,0,-.5,1,.5,1],[0,2,1,1,2,3]),tf([-.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,.5],[-.5,1,.5,1,-.5,1,.5,1],[0,1,2,1,3,2])])}var Y={lacquer:new P(8010274),ochre:new P(14198078),tile:new P(4930097),ceramic:new P(15262938),plaque:new P(2758672),brick:new P(9062962),concrete:new P(10130568),rail:new P(5920335),pole:new P(4864556),bark:new P(4863012),leaves:new P(3099176),hull:new P(7227952),stone:new P(7827562),nosing:new P(10853520),riser:new P(3814704)};Y.nosing;var uf=.16,df=.06,ff=.07,pf=.01,X=.22;function Z(e,t){return t.yaw&&e.rotateY(t.yaw),e.translate(t.center[0],t.center[1],t.center[2]),e.index?e.toNonIndexed():e}function Q(e,t,n,r=0){let i=e.getAttribute(`position`).count,a=new Float32Array(i*3);for(let e=0;e<i;e++){let n=r?1-r+r*2*((Math.floor(e/3)*2654435761>>>0)/4294967296):1;a.set([t.r*n,t.g*n,t.b*n],e*3)}e.setAttribute(`color`,new M(a,3)),e.setAttribute(`aGlow`,new M(new Float32Array(i).fill(n),1));for(let t of Object.keys(e.attributes))[`position`,`normal`,`color`,`aGlow`].includes(t)||e.deleteAttribute(t);return e}function mf(e,t,n,r=0,i=0,a=0){return new Nn(e,t,n).translate(r,i,a)}function hf(e,t){let n=cf(0);return n.scale(2*e[0],e[1]-t,2*e[2]),n.translate(0,t,0),n}function gf(e){let t=e.shape,[n,r,i]=t.half,a=e.id.slice(4);if(a===`roof`){let e=[Z(Q(hf(t.half,-r),Y.tile,X*.5,.08),t)];for(let i=-n+.6;i<=n-.6;i+=.7)e.push(Z(Q(mf(.14,.14,.14,i,r-.2,0),Y.ceramic,X),t));return e}if(a===`shrine`){let e=r-1.6;return[Z(Q(mf(2*n,r+e,2*i,0,(e-r)/2,0),Y.ochre,X,.05),t),Z(Q(hf(t.half,e),Y.tile,X*.5,.08),t)]}if(a===`shrine-wall`)return[Z(Q(mf(2*n,2*r,2*i-.02,0,0,-.01),Y.ochre,X,.05),t),Z(Q(new Sn(Math.min(1.8,2*n-.4),.7).translate(0,r-.6,i-.01),Y.plaque,X*.3),t)];if(a.startsWith(`step-`))return _f(t,a.startsWith(`step-w`)?-1:1);let o=a.startsWith(`pier`)?Y.brick:Y.lacquer;return[Z(Q(mf(2*n,2*r,2*i),o,X,.06),t)]}function _f(e,t){let[n,r,i]=e.half,a=2*(i-uf),o=2*n-df,s=t*(n-df);return[Z(Q(mf(o,2*r,a,-t*df/2,0,0),Y.stone,X*.6,.07),e),Z(Q(mf(pf,2*r-ff,a,s+t*pf/2,-.07/2,0),Y.riser,X*.2,.04),e),Z(Q(mf(df,ff,a,t*(n-df/2),r-ff/2,0),Y.nosing,X*.6,.04),e),...[-1,1].map(t=>Z(Q(mf(2*n,2*r,uf,0,0,t*(i-uf/2)),Y.lacquer,X,.06),e))]}function vf(e){let t=e.shape;if(e.id.startsWith(`cau:`)&&t.kind===`box`)return gf(e);if(t.kind===`box`){let n=e.id.startsWith(`bridge:`)?e.id.includes(`rail`)?Y.rail:Y.concrete:e.id.startsWith(`boat:`)?Y.hull:Y.concrete;return[Z(Q(mf(2*t.half[0],2*t.half[1],2*t.half[2]),n,0,.05),t)]}if(t.kind===`cylinder`){if(e.id.startsWith(`tree:`)&&e.id.endsWith(`-crown`))return[Q(new pn(1,1).scale(t.radius,t.halfHeight,t.radius).translate(t.center[0],t.center[1],t.center[2]).toNonIndexed(),Y.leaves,0,.12)];let n=e.id.startsWith(`tree:`)?Y.bark:Y.pole;return[Q(new rn(t.radius,t.radius,2*t.halfHeight,e.id.startsWith(`tree:`)?8:5,1).translate(t.center[0],t.center[1],t.center[2]).toNonIndexed(),n,0)]}return[]}function yf(e,t){let n=[];for(let r of e)t.some(e=>e.test(r.id))&&n.push(...vf(r));if(n.length===0)return null;for(let e of n)e.getAttribute(`normal`)||e.computeVertexNormals();let r=cr(n,!1);for(let e of n)e.dispose();return r}function bf(){let e=new R({vertexColors:!0,roughness:.8,metalness:0});return e.name=`hoi-an-parts`,e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aGlow;
varying float vGlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vGlow;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * vGlow * vec3( 1.0, 0.78, 0.55 );`)},e.customProgramCacheKey=()=>`hoi-an-parts-v1`,e}var $=700;function xf(e){let t=ge;for(;t<200&&t<Te(S(t)+e*5.25);)t+=.25;return t}function Sf(){let e=[],t=xf(-1),n=xf(1),r=S(t)-_,i=S(n)+_;for(let t=-700;t<r;t=t<-200?-200:t+5)e.push([t,Te(t)]);for(let n=t;n>ge;n-=2)e.push([S(n)-_,n]);e.push([S(ge)-_,ge],[S(ge)+_,ge]);for(let t=ge+2;t<n;t+=2)e.push([S(t)+_,t]);for(let t=Math.ceil(i/5)*5;t<=$;t=t>=250?701:t+5)e.push([Math.min(t,$),Te(Math.min(t,$))]);e[e.length-1][0]!==$&&e.push([$,Te($)]);for(let t=$;t>=-700;t=t>250?250:t<-200?t-$:t-5)e.push([t,se(t)]);return e.push([-700,se(-700)]),e}function Cf(e,t,n){let r=new jn(e.map(([e,t])=>new dn(e,-t)));for(let e of t)r.holes.push(new ln(e.map(([e,t])=>new dn(e,-t))));let i=new Cn(r);return i.rotateX(-Math.PI/2),i.translate(0,n,0),i}function wf(e){let t=w-.05,n=[],r=[];for(let i=0;i<e.length;i++){let[a,o]=e[i],[s,c]=e[(i+1)%e.length],l=Math.sqrt((s-a)**2+(c-o)**2);if(l<1e-6||Math.abs(a)>=$||Math.abs(s)>=$)continue;let u=-(c-o)/l,d=(s-a)/l;Oe((a+s)/2+u*.6,(o+c)/2+d*.6)||(u=-u,d=-d);let f=(s-a)*d-(c-o)*u>0?[[a,0,o],[a,t,o],[s,0,c],[s,0,c],[a,t,o],[s,t,c]]:[[a,0,o],[s,0,c],[a,t,o],[s,0,c],[s,t,c],[a,t,o]];for(let e of f)n.push(...e),r.push(u,0,d)}let i=new F;return i.setAttribute(`position`,new M(n,3)),i.setAttribute(`normal`,new M(r,3)),i.setAttribute(`uv`,new M(new Float32Array(n.length/3*2),2)),i}function Tf(){let e=Sf(),t=Cf([[-700,-700],[$,-700],[$,$],[-700,$]],[e],0),n=[t.index?t.toNonIndexed():t,wf(e)];t.dispose();let r=cr(n,!1);for(let e of n)e.dispose();return r}function Ef(){let e=Cf(Sf(),[],kt),t=e.getAttribute(`position`),n=[];for(let e=0;e<t.count;e++){let r=t.getZ(e)<Te(t.getX(e))-.5;n.push(r?0:.25,r?.3:0)}return e.setAttribute(`aShore`,new M(new Float32Array(t.count),1)),e.setAttribute(`aFlow`,new M(n,2)),e}var Df=.01;function Of(){let e=[],t=[],n=new P(2894376),r=new P(6971994),i=(n,r,i)=>{for(let a=1;a<n.length;a++){let[o,s]=n[a-1],[c,l]=n[a],u=Math.hypot(c-o,l-s),d=-(l-s)/u*(r/2),f=(c-o)/u*(r/2),p=Df;e.push(o+d,p,s+f,c+d,p,l+f,o-d,p,s-f,o-d,p,s-f,c+d,p,l+f,c-d,p,l-f);for(let e=0;e<6;e++)t.push(i.r,i.g,i.b)}};for(let e of jt)(e.id===`nguyen-phuc-chu`||e.id===`nguyen-hoang`)&&i([[e.segments[0].ax,e.segments[0].az],...e.segments.map(e=>[e.bx,e.bz])],e.width,n);for(let e of Lt)i(e.points,e.width,r);let a=new F;return a.setAttribute(`position`,new M(e,3)),a.setAttribute(`color`,new M(t,3)),a.setAttribute(`normal`,new M(Array.from({length:e.length/3},()=>[0,1,0]).flat(),3)),a}function kf(){let e=new R({vertexColors:!0,roughness:.92,metalness:0,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});return e.name=`hoi-an-paving`,e}var Af=[/^cau:/,/^bridge:/,/^pole:/,/^tree:/];function jf(e){return yf(e,Af)}var Mf=[[1,.03,.01],[1,.16,.02],[1,.42,.04],[.05,.14,1],[.07,.65,.08],[.38,.05,1]],Nf={size:512,cx:40,cz:35,half:165},Pf=3.5,Ff=2.5,If=1.5,Lf=1.2,Rf=14,zf=11,Bf=[16,28],Vf=7;function Hf(e,t=Nf){let n=t.size*t.size,r=new Float32Array(n*3),i=new Float32Array(n),a=new Float32Array(n),o=e.lanterns;ol(t,o,8,0,2,Pf,Ff,(e,t,n)=>{let s=n*8,c=Mf[o[s+4]],l=t*(o[s+3]/.42)**2;r[e*3]+=c[0]*l,r[e*3+1]+=c[1]*l,r[e*3+2]+=c[2]*l,i[e]+=l*o[s+1],a[e]+=l});let s=new Uint8Array(n*4);for(let e=0;e<n;e++){for(let t=0;t<3;t++)s[e*4+t]=Math.round(Math.min(1,r[e*3+t]/8)*255);s[e*4+3]=a[e]>0?Math.round(Math.min(1,i[e]/a[e]/10)*255):0}return s}function Uf(e){let t=new tn(Hf(e),Nf.size,Nf.size,Un,an);return t.name=`hoi-an-lantern-splat`,t.colorSpace=``,t.magFilter=L,t.minFilter=L,t.wrapS=t.wrapT=kn,t.needsUpdate=!0,t}var Wf=()=>({uTime:{value:0},uKick:{value:Array.from({length:4},()=>new k(0,0,-100,0))}}),Gf=`
uniform float uTime;
uniform vec4 uKick[ 4 ];
// offset of a point of a string at world w, amp 0 at its anchors to 1 at its middle
vec3 sway( vec3 w, float amp ) {
  vec3 o = vec3( sin( uTime * 1.3 + w.x * 0.37 + w.z * 0.21 ), 0.0, 0.6 * cos( uTime * 1.1 + w.z * 0.33 - w.x * 0.17 ) ) * 0.06;
  for ( int i = 0; i < 4; i++ ) {
    vec4 k = uKick[ i ];
    float age = uTime - k.z;
    if ( age < 0.0 || age > 4.0 ) continue;
    vec2 d = w.xz - k.xy;
    o.xz += normalize( d + vec2( 1e-3 ) ) * k.w * 0.45 * exp( -age * 1.4 ) * sin( age * 6.5 ) * exp( -dot( d, d ) * 0.08 );
  }
  return o * amp;
}`;function Kf(e,t){let n=[],r=[],i=[];for(let i=0;i<=t;i++){let a=i/t;for(let t=0;t<=e;t++){let i=t/e*Math.PI*2;n.push(Math.cos(i),a,Math.sin(i)),r.push(t/e,a)}}for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,a=r+e+1;i.push(r,a,r+1,r+1,a,a+1)}let a=new F;return a.setAttribute(`position`,new M(n,3)),a.setAttribute(`uv`,new M(r,2)),a.setIndex(i),a}var qf=`
attribute vec4 aLantern;
varying vec2 vL;
varying vec3 vColor;
varying float vFacing;
#include <fog_pars_vertex>
${Gf}
float profile( float t, float s ) {
  if ( s < 0.5 ) return sin( 3.14159 * t );
  if ( s < 1.5 ) return sin( 3.14159 * pow( t, 0.8 ) ) * ( 1.0 - 0.25 * t );
  return 1.0 - abs( 2.0 * t - 1.0 );
}
void main() {
  float size = aLantern.y;
  float r = 0.5 * size * profile( position.y, aLantern.x );
  vec3 local = vec3( position.x * r, ( position.y - 0.5 ) * size * 1.25, position.z * r );
  vec3 centre = ( modelMatrix * vec4( instanceMatrix[ 3 ].xyz, 1.0 ) ).xyz;
  vec3 w = centre + local + sway( centre, aLantern.z );
  vL = uv;
  vColor = instanceColor;
  vec4 mvPosition = viewMatrix * vec4( w, 1.0 );
  vec3 n = normalize( mat3( viewMatrix ) * vec3( position.x, 0.25 * ( 1.0 - 2.0 * position.y ), position.z ) );
  vFacing = abs( n.z );
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Jf=`
uniform float uGlow;
varying vec2 vL;
varying vec3 vColor;
varying float vFacing;
#include <fog_pars_fragment>
void main() {
  // bamboo ribs every 1/8 turn, a darker band at the top and bottom rims
  float rib = smoothstep( 0.0, 0.08, abs( fract( vL.x * 8.0 ) - 0.5 ) * 2.0 );
  float rim = smoothstep( 0.02, 0.12, vL.y ) * smoothstep( 0.98, 0.88, vL.y );
  // saturated silk at the rim, a hot candle core where the lantern faces the eye (it carries the bloom)
  vec3 silk = vColor * uGlow * ( 0.45 + 0.55 * vFacing );
  vec3 core = ( vColor + vec3( 0.12, 0.05, 0.0 ) ) * uGlow * 1.4 * pow( vFacing, 4.0 );
  vec3 c = ( silk + core ) * mix( 0.35, 1.0, rib * rim );
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,Yf=`
attribute float aAmp;
#include <fog_pars_vertex>
${Gf}
void main() {
  vec3 w = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
  w += sway( w, aAmp );
  vec4 mvPosition = viewMatrix * vec4( w, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Xf=`
#include <fog_pars_fragment>
void main() {
  gl_FragColor = vec4( 0.03, 0.025, 0.02, 1.0 );
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function Zf(e){let t=e.lanterns,n=e.strings,r=t.length/8,i=new Int16Array(r).fill(-1),a=new Float32Array(r);for(let e=0;e<r;e++){let r=e*8,o=t[r+6];if(o===1||o===2){a[e]=o===1?.3:.15;continue}let s=1/0;for(let o=0;o<n.length;o+=8){let c=n[o],l=n[o+2],u=n[o+3]-c,d=n[o+5]-l,f=Math.min(1,Math.max(0,((t[r]-c)*u+(t[r+2]-l)*d)/(u*u+d*d))),p=(t[r]-c-u*f)**2+(t[r+2]-l-d*f)**2;p<s&&(s=p,i[e]=o/8,a[e]=4*f*(1-f))}}return{string:i,amp:a}}function Qf(e,n=12){let r=[],i=[],a=[0,0,0],o=[0,0,0],s=.012,c=e.strings.length/8;for(let l=0;l<c;l++)for(let c=0;c<n;c++){let u=c/n,d=(c+1)/n;t(e.strings,l,u,a),t(e.strings,l,d,o);let f=4*u*(1-u),p=4*d*(1-d),m=o[0]-a[0],h=o[2]-a[2],g=Math.sqrt(m*m+h*h)||1,_=-h/g*s,v=m/g*s;r.push(a[0],a[1]-s,a[2],o[0],o[1]-s,o[2],a[0],a[1]+s,a[2],a[0],a[1]+s,a[2],o[0],o[1]-s,o[2],o[0],o[1]+s,o[2]),r.push(a[0]-_,a[1],a[2]-v,o[0]-_,o[1],o[2]-v,a[0]+_,a[1],a[2]+v,a[0]+_,a[1],a[2]+v,o[0]-_,o[1],o[2]-v,o[0]+_,o[1],o[2]+v),i.push(f,p,f,f,p,p,f,p,f,f,p,p)}let l=new F;return l.setAttribute(`position`,new M(r,3)),l.setAttribute(`aAmp`,new M(i,1)),l}function $f(e,n){let r=e.strings.length/8,i=[0,0,0],a=new Float32Array(r*3),o=e.lanterns;for(let e=0;e<n.length;e++){let t=n[e];if(t<0)continue;let r=Mf[o[e*8+4]];for(let e=0;e<3;e++)a[t*3+e]+=r[e]}let s=[];for(let n=0;n<r;n++){t(e.strings,n,.5,i);let r=Math.max(a[n*3],a[n*3+1],a[n*3+2],1e-6),o=r>1e-5?new P(a[n*3]/r,a[n*3+1]/r,a[n*3+2]/r):new P(1,.5,.2);s.push({position:new D(i[0],i[1]-.7,i[2]),color:o})}return s}var ep={ultra:1/0,high:1/0,medium:110,low:60},tp={ultra:1/0,high:1/0,medium:110,low:40},np=.8,rp=4,ip=.3,ap=.05,op=10,sp=9;function cp(e,t,n,r,i,a){let o=r[a]-r[i],s=r[a+1]-r[i+1],c=r[a+2]-r[i+2],l=o*o+s*s+c*c,u=l>0?Math.min(1,Math.max(0,((e-r[i])*o+(t-r[i+1])*s+(n-r[i+2])*c)/l)):0,d=e-r[i]-o*u,f=t-r[i+1]-s*u,p=n-r[i+2]-c*u;return d*d+f*f+p*p}var lp=class{group=new N;mesh;wires;halos;lights=[];sway=Wf();geometries;clusters;wirePoints;lastKick;kickSlot=0;budget=0;lightFrame=0;cullFrame=0;lanternRange=1/0;haloRange=1/0;prevDrone=new D(NaN,0,0);src;attr;lightCluster=new Int16Array(Vf).fill(-1);lightWeight=new Float32Array(Vf);lightWanted=new Uint8Array(Vf);clusterDist;pick=new Int16Array(Vf);constructor(e){this.group.name=`hoi-an-lanterns`;let n=e.lanterns,r=n.length/8;this.geometries={high:Kf(8,6),medium:Kf(6,4),low:Kf(3,2)};let i=hn.clone(Xn.fog),a=new Vn({vertexShader:qf,fragmentShader:Jf,uniforms:{...i,...this.sway,uGlow:{value:If}},fog:!0});a.name=`hoi-an-lanterns`,this.mesh=new Hn(this.geometries.high,a,Math.max(1,r)),this.mesh.name=`hoi-an-lanterns`,this.mesh.frustumCulled=!1;let{string:o,amp:s}=Zf(e);this.src={pos:new Float32Array(r*3),matrix:new Float32Array(r*16),color:new Float32Array(r*3),attr:new Float32Array(r*4),haloMatrix:new Float32Array(r*16),haloColor:new Float32Array(r*3)};let c=new A,l=[];for(let e=0;e<r;e++){let t=e*8,r=Mf[n[t+4]];this.src.pos.set([n[t],n[t+1],n[t+2]],e*3),c.makeTranslation(n[t],n[t+1],n[t+2]).toArray(this.src.matrix,e*16),this.src.color.set(r,e*3),this.src.attr.set([n[t+5],n[t+3],s[e],n[t+7]],e*4);let i=n[t+3]*3.2;c.makeScale(i,i,i).setPosition(n[t],n[t+1],n[t+2]).toArray(this.src.haloMatrix,e*16),this.src.haloColor.set([r[0]*.75,r[1]*.75,r[2]*.75],e*3),l.push({position:new D(n[t],n[t+1],n[t+2]),size:i,color:new P(r[0]*.75,r[1]*.75,r[2]*.75)})}this.mesh.setColorAt(0,new P),this.attr=new On(new Float32Array(r*4),4),this.attr.setUsage(O);for(let e of Object.values(this.geometries))e.setAttribute(`aLantern`,this.attr);this.mesh.instanceMatrix.setUsage(O),this.halos=new Be(l),this.halos.mesh.instanceMatrix.setUsage(O);let u=new Vn({vertexShader:Yf,fragmentShader:Xf,uniforms:{...hn.clone(Xn.fog),...this.sway},fog:!0,side:2});u.name=`hoi-an-wires`,this.wires=new j(Qf(e),u),this.wires.name=`hoi-an-wires`,this.wires.frustumCulled=!1;let d=e.strings.length/8;this.wirePoints=new Float32Array(d*sp*3);let f=[0,0,0];for(let n=0;n<d;n++)for(let r=0;r<sp;r++)this.wirePoints.set(t(e.strings,n,r/8,f),(n*sp+r)*3);this.lastKick=new Float32Array(d).fill(-100),this.clusters=$f(e,o),this.clusterDist=new Float32Array(this.clusters.length);for(let e=0;e<Vf;e++){let e=new mn(16752720,0,zf,2);e.visible=!1,this.lights.push(e)}this.group.add(this.mesh,this.wires,this.halos.mesh,...this.lights),this.cull(new D)}setQuality(e){let t=e.tier;this.mesh.geometry=this.geometries[t===`low`?`low`:t===`medium`?`medium`:`high`],this.lanternRange=ep[t],this.haloRange=tp[t],this.cullFrame=0,this.halos.setBloom(e.bloom),this.budget=Math.min(Vf,Math.max(0,e.pointLights-1)),this.lights.forEach((e,t)=>{e.visible=t<this.budget,t>=this.budget&&(this.lightCluster[t]=-1,this.lightWeight[t]=0,e.intensity=0)}),this.lightFrame=0}update(e,t,n,r){this.sway.uTime.value=e,this.brush(e,t,n),this.cullFrame--<=0&&(this.cullFrame=8,this.cull(r)),this.lightFrame--<=0&&(this.lightFrame=4,this.selectLights(n)),this.fadeLights(t,n)}cull(e){let{pos:t,matrix:n,color:r,attr:i,haloMatrix:a,haloColor:o}=this.src,s=t.length/3,c=this.lanternRange*this.lanternRange,l=this.haloRange*this.haloRange,u=this.mesh.instanceMatrix.array,d=this.mesh.instanceColor.array,f=this.attr.array,p=this.halos.mesh.instanceMatrix.array,m=this.halos.mesh.instanceColor.array,h=0,g=0;for(let _=0;_<s;_++){let s=t[_*3]-e.x,v=t[_*3+1]-e.y,y=t[_*3+2]-e.z,b=s*s+v*v+y*y;b<=c&&(u.set(n.subarray(_*16,_*16+16),h*16),d.set(r.subarray(_*3,_*3+3),h*3),f.set(i.subarray(_*4,_*4+4),h*4),h++),b<=l&&(p.set(a.subarray(_*16,_*16+16),g*16),m.set(o.subarray(_*3,_*3+3),g*3),g++)}this.mesh.count=h,this.halos.mesh.count=g;for(let e of[this.mesh.instanceMatrix,this.mesh.instanceColor,this.attr,this.halos.mesh.instanceMatrix,this.halos.mesh.instanceColor])e.needsUpdate=!0}brush(e,t,n){let r=Number.isNaN(this.prevDrone.x)?0:this.prevDrone.distanceTo(n);if(this.prevDrone.copy(n),t<=0||r>op)return;let i=Math.min(1,ip+r/t*ap),a=this.wirePoints;for(let t=0;t<this.lastKick.length;t++)if(!(e-this.lastKick[t]<Lf))for(let r=0;r<8;r++){let o=(t*sp+r)*3;if(!(cp(n.x,n.y,n.z,a,o,o+3)>1)){this.lastKick[t]=e,this.sway.uKick.value[this.kickSlot].set(a[o],a[o+2],e,i),this.kickSlot=(this.kickSlot+1)%4;break}}}selectLights(e){let t=this.budget;if(t===0)return;let n=this.clusters.length;for(let t=0;t<n;t++)this.clusterDist[t]=this.clusters[t].position.distanceToSquared(e);for(let e=0;e<t;e++){let t=this.lightCluster[e];t>=0&&(this.clusterDist[t]=this.clusterDist[t]*np*np)}let r=0;for(let e=0;e<n;e++){let n=this.clusterDist[e];if(r===t&&n>=this.clusterDist[this.pick[t-1]])continue;let i=r<t?r++:t-1;for(;i>0&&this.clusterDist[this.pick[i-1]]>n;)this.pick[i]=this.pick[i-1],i--;this.pick[i]=e}for(let e=0;e<t;e++){let t=this.lightCluster[e],n=!1;for(let e=0;e<r;e++)this.pick[e]===t&&(n=!0);this.lightWanted[e]=t>=0&&n?1:0}for(let e=0;e<r;e++){let n=this.pick[e],r=!1;for(let e=0;e<t;e++)this.lightCluster[e]===n&&(r=!0);if(!r)for(let e=0;e<t;e++){if(this.lightCluster[e]!==-1)continue;this.lightCluster[e]=n,this.lightWeight[e]=0,this.lightWanted[e]=1;let t=this.lights[e];t.position.copy(this.clusters[n].position),t.color.copy(this.clusters[n].color);break}}}fadeLights(e,t){let n=Math.max(0,e)*rp;for(let e=0;e<this.budget;e++){let r=this.lightCluster[e],i=this.lights[e];if(r<0){i.intensity=0;continue}let a=this.lightWanted[e]?Math.min(1,this.lightWeight[e]+n):Math.max(0,this.lightWeight[e]-n);this.lightWeight[e]=a,a===0&&!this.lightWanted[e]&&(this.lightCluster[e]=-1);let o=this.clusters[r].position.distanceTo(t);i.intensity=Rf*a*(1-nn.smoothstep(o,Bf[0],Bf[1]))}}dispose(){for(let e of Object.values(this.geometries))e.dispose();this.mesh.material.dispose(),this.mesh.dispose(),this.wires.geometry.dispose(),this.wires.material.dispose(),this.halos.dispose();for(let e of this.lights)e.dispose()}},up={hull:0,trim:1,canopy:2,eyeWhite:3,eyePupil:4,lantern:5,deck:6},dp={half:1.2,radius:.85,axis:.6},fp={high:[60,140],low:[55,90]},pp=.2,mp=new A,hp=new Fn,gp=new D,_p=new D(0,1,0),vp=new D(1,1,1),yp=[-5,190],bp=e=>.95*Math.sqrt(Math.max(0,1-e*e*e*e*e*e)),xp=e=>-.3+.15*e*e,Sp=e=>.35+.1*e*e,Cp=class{pos=[];part=[];tri(e,t,n,r){this.pos.push(...e,...t,...n),this.part.push(r,r,r)}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}disc(e,t,n,r,i,a){for(let o=0;o<8;o++){let s=o/8*Math.PI*2,c=(o+1)/8*Math.PI*2,l=[e+Math.cos(s)*r,t+Math.sin(s)*r,n],u=[e+Math.cos(c)*r,t+Math.sin(c)*r,n];i>0?this.tri([e,t,n],l,u,a):this.tri([e,t,n],u,l,a)}}geometry(){let e=new F;return e.setAttribute(`position`,new M(this.pos,3)),e.setAttribute(`aPart`,new M(this.part,1)),e.computeVertexNormals(),e}};function wp(e){let t=new Cp,n=e=>{let t=bp(e),n=e*7/2,r=Sp(e),i=xp(e),a=(r+i)/2-.05,o=r-.12;return[[n,r,-t],[n,o,-t*.97],[n,a,-t*.8],[n,i,0],[n,a,t*.8],[n,o,t*.97],[n,r,t]]};for(let e=0;e<14;e++){let r=n(-1+2*e/14),i=n(-1+2*(e+1)/14);for(let e=0;e<r.length-1;e++){let n=e===0||e===r.length-2?up.trim:up.hull;t.quad(r[e],r[e+1],i[e+1],i[e],n)}let a=[r[0][0],r[0][1]-.08,r[0][2]],o=[i[0][0],i[0][1]-.08,i[0][2]],s=[r[6][0],r[6][1]-.08,r[6][2]],c=[i[6][0],i[6][1]-.08,i[6][2]];t.quad(a,s,c,o,up.deck)}for(let e=0;e<8;e++){let n=e/8*Math.PI,r=(e+1)/8*Math.PI,i=(e,t)=>[e,dp.axis+Math.sin(t)*dp.radius,Math.cos(t)*dp.radius],[a,o,s,c]=[i(-dp.half,n),i(dp.half,n),i(dp.half,r),i(-dp.half,r)];t.quad(a,o,s,c,up.canopy),t.quad(a,c,s,o,up.canopy)}let r=bp(.7)*.97;for(let e of[-1,1])t.disc(2.4499999999999997,.17,e*(r+.01),.13,e,up.eyeWhite),t.disc(2.4699999999999998,.17,e*(r+.02),.06,e,up.eyePupil);if(e)for(let[e,n]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let r=e*(dp.half-.1),i=n*(dp.radius-.05),a=1.15,o=.16,s=[0,1,2,3].map(e=>[r+(e===0?o:e===2?-.16:0),a,i+(e===1?o:e===3?-.16:0)]);for(let e=0;e<4;e++)t.tri([r,1.3579999999999999,i],s[(e+1)%4],s[e],up.lantern),t.tri([r,a-o*1.3,i],s[e],s[(e+1)%4],up.lantern)}return t.geometry()}var Tp=`
{
  float p = vPart;
  vec3 hull = vec3( 0.06, 0.035, 0.02 );
  // the trim band's colour per boat: red, blue or green
  vec3 trim = vBoatSeed < 0.4 ? vec3( 0.42, 0.04, 0.03 ) : vBoatSeed < 0.7 ? vec3( 0.05, 0.14, 0.4 ) : vec3( 0.05, 0.3, 0.12 );
  vec3 c = p < 0.5 ? hull : p < 1.5 ? trim : p < 2.5 ? vec3( 0.16, 0.1, 0.05 ) : p < 3.5 ? vec3( 0.85, 0.82, 0.75 ) : p < 4.5 ? vec3( 0.01 ) : p < 5.5 ? vec3( 1.0, 0.25, 0.06 ) : vec3( 0.1, 0.06, 0.035 );
  diffuseColor.rgb = c;
  boatGlow = p > 4.5 && p < 5.5 ? c * 2.6 : vec3( 0.0 );
}`;function Ep(){let e=new R({roughness:.75,metalness:0,side:2});return e.name=`hoi-an-boats`,e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPart;
varying float vPart;
varying float vBoatSeed;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vPart = aPart;
vBoatSeed = fract( sin( dot( instanceMatrix[ 3 ].xz, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vPart;
varying float vBoatSeed;
vec3 boatGlow = vec3( 0.0 );`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${Tp}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += boatGlow;`)},e.customProgramCacheKey=()=>`hoi-an-boats-v1`,e}function Dp(){let{size:e,cx:t,cz:n,half:r}=Nf,i=new Uint8Array(e*e);for(let a=0;a<e;a++){let o=n-r+(a+.5)/e*2*r;for(let n=0;n<e;n++)i[a*e+n]=Oe(t-r+(n+.5)/e*2*r,o)?255:0}let a=new tn(i,e,e,cn,an);return a.name=`hoi-an-water-mask`,a.magFilter=a.minFilter=L,a.needsUpdate=!0,a}function Op(e){let t=e.lanterns,n=[];for(let e=0;e<t.length/8;e++){let r=e*8,i=Oe(t[r],t[r+2]);for(let e=5;e<=25&&!i;e+=5)for(let n=0;n<16&&!i;n++){let a=n/16*Math.PI*2;i=Oe(t[r]+Math.cos(a)*e,t[r+2]+Math.sin(a)*e)}i&&n.push(e)}return n}var kp=`
attribute vec4 aSrc;
attribute vec3 aTint;
uniform float uWater;
uniform vec2 uFade;
varying vec2 vUv;
varying vec3 vTint;
varying vec2 vWorld;
varying float vFade;
varying float vFogDepth;
void main() {
  vec3 C = cameraPosition;
  // the lantern mirrored in the water plane, and where the eye's ray to it meets the water: there the reflection shows
  vec3 M = vec3( aSrc.x, 2.0 * uWater - aSrc.y, aSrc.z );
  float t = ( C.y - uWater ) / max( C.y - M.y, 1e-3 );
  vec3 H = C + t * ( M - C );
  vec2 d = H.xz - C.xz;
  float dl = max( length( d ), 1e-3 );
  vec2 along = d / dl;
  vec2 across = vec2( -along.y, along.x );
  // a streak stretched away from the eye (vertical on screen), longer under the higher lanterns
  float len = 3.0 + 5.0 * clamp( ( aSrc.y - uWater ) / 7.0, 0.0, 1.0 );
  vec2 xz = H.xz + along * ( uv.y - 0.25 ) * len + across * ( uv.x - 0.5 ) * 0.5 * aSrc.w;
  vUv = uv;
  vTint = aTint;
  vWorld = xz;
  vFade = ( 1.0 - smoothstep( uFade.x, uFade.y, dl ) ) * step( uWater, C.y );
  vec4 mvPosition = viewMatrix * vec4( xz.x, uWater + 0.03, xz.y, 1.0 );
  vFogDepth = -mvPosition.z;
  // a faded-out streak (too far, or the eye below the water) collapses off screen: no fragments at all
  gl_Position = vFade > 0.001 ? projectionMatrix * mvPosition : vec4( 2.0, 2.0, 2.0, 1.0 );
}`,Ap=`
uniform sampler2D uMask;
uniform vec4 uMaskBox;
uniform float uTime;
uniform float fogDensity;
varying vec2 vUv;
varying vec3 vTint;
varying vec2 vWorld;
varying float vFade;
varying float vFogDepth;
float sh( float n ) { return fract( sin( mod( n, 251.0 ) * 12.9898 ) * 43758.5453 ); }
void main() {
  float water = texture2D( uMask, ( vWorld - uMaskBox.xy ) / ( 2.0 * uMaskBox.z ) + 0.5 ).r;
  // broken by the ripples: bands that slide along the streak
  float band = floor( vUv.y * 14.0 + uTime * 1.3 );
  float ripple = 0.35 + 0.65 * sh( band + floor( vWorld.x * 3.0 ) );
  float across = 1.0 - abs( vUv.x - 0.5 ) * 2.0;
  float along = smoothstep( 0.0, 0.2, vUv.y ) * ( 1.0 - smoothstep( 0.55, 1.0, vUv.y ) );
  float a = across * across * along * ripple * smoothstep( 0.4, 0.9, water );
  // additive light: the fog dims it (mixing towards the fog colour would add the fog's light where the streak is empty), and the
  // fade multiplies last, so a transparent pixel adds nothing
  float fog = exp( -fogDensity * fogDensity * vFogDepth * vFogDepth );
  gl_FragColor = vec4( vTint, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb *= a * fog * vFade;
}`,jp=`
attribute vec4 aCandle;
attribute float aPart;
uniform float uTime;
uniform float uWater;
uniform float uNorth[ ${yt.length} ];
uniform float uSouth[ ${ot.length} ];
varying float vPart;
varying float vHue;
#include <fog_pars_vertex>
float bankAt( float x, float north ) {
  float f = clamp( ( x - ${Ye.toFixed(1)} ) / ${25 .toFixed(1)}, 0.0, ${(yt.length-1).toFixed(1)} );
  int i = int( min( floor( f ), ${(yt.length-2).toFixed(1)} ) );
  float a = north > 0.5 ? uNorth[ i ] : uSouth[ i ];
  float b = north > 0.5 ? uNorth[ i + 1 ] : uSouth[ i + 1 ];
  return mix( a, b, f - float( i ) );
}
void main() {
  // downstream (east) round the stretch, at the same share of the way across the river, bobbing
  float span = ${(yp[1]-yp[0]).toFixed(1)};
  float x = ${yp[0].toFixed(1)} + mod( aCandle.x - ${yp[0].toFixed(1)} + uTime * ${pp.toFixed(2)}, span );
  float zn = bankAt( x, 1.0 );
  float z = zn + aCandle.y * ( bankAt( x, 0.0 ) - zn );
  float bob = sin( uTime * 1.7 + aCandle.z * 6.283 ) * 0.02;
  vec3 w = vec3( x, uWater + 0.02 + bob, z ) + position;
  vPart = aPart;
  vHue = aCandle.w;
  vec4 mvPosition = viewMatrix * vec4( w, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Mp=`
varying float vPart;
varying float vHue;
#include <fog_pars_fragment>
void main() {
  // paper lotus cups lit from inside (pink, white, yellow), and the flame
  vec3 paper = vHue < 0.5 ? vec3( 0.9, 0.3, 0.45 ) : vHue < 1.5 ? vec3( 0.85, 0.8, 0.7 ) : vec3( 0.95, 0.7, 0.2 );
  vec3 c = vPart > 0.5 ? vec3( 1.0, 0.55, 0.15 ) * 3.0 : paper * 0.55;
  gl_FragColor = vec4( c, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function Np(){let e=new Cp,t=.05,n=.11;for(let r=0;r<6;r++){let i=r/6*Math.PI*2,a=(r+1)/6*Math.PI*2,o=(e,t,n)=>[Math.cos(t)*e,n,Math.sin(t)*e];e.quad(o(t,i,0),o(t,a,0),o(n,a,.06),o(n,i,.06),0)}return e.quad([-.025,.05,0],[.025,.05,0],[.025,.13,0],[-.025,.13,0],1),e.quad([0,.05,-.025],[0,.05,.025],[0,.13,.025],[0,.13,-.025],1),e.geometry()}var Pp=class{group=new N;boats;movingMesh;streaks;candles;moored;moving;mask;owned=[];constructor(e,t){this.group.name=`hoi-an-river`,this.moving=t;let n=e.boats;this.moored=n.length/6;let r=t?.boats.length??0,i=wp(!1),a=wp(!0),o=Ep();this.owned.push(i,a,o),this.boats=new Hn(i,o,Math.max(1,this.moored)),this.boats.count=this.moored,this.boats.name=`hoi-an-boats`,this.boats.castShadow=this.boats.receiveShadow=!0;for(let e=0;e<this.moored;e++){let t=e*6;mp.compose(gp.set(n[t],0,n[t+1]),hp.setFromAxisAngle(_p,n[t+5]),new D(n[t+2]/7,1,1)),this.boats.setMatrixAt(e,mp)}this.movingMesh=new Hn(a,o,Math.max(1,r)),this.movingMesh.count=r,this.movingMesh.name=`hoi-an-boats-moving`,this.movingMesh.frustumCulled=!1,this.movingMesh.instanceMatrix.setUsage(O),this.mask=Dp();let s=Op(e),c=e.lanterns,l=new Sn(1,1).translate(.5,.5,0),u=new Float32Array(s.length*4),d=new Float32Array(s.length*3);s.forEach((e,t)=>{let n=e*8;u.set([c[n],c[n+1],c[n+2],c[n+3]/.45],t*4);let r=Mf[c[n+4]];d.set([r[0]*.55,r[1]*.55,r[2]*.55],t*3)}),l.setAttribute(`aSrc`,new On(u,4)),l.setAttribute(`aTint`,new On(d,3));let f=new Vn({vertexShader:kp,fragmentShader:Ap,uniforms:{...hn.clone(Xn.fog),uWater:{value:kt},uTime:{value:0},uFade:{value:new dn(...fp.high)},uMask:{value:this.mask},uMaskBox:{value:new k(Nf.cx,Nf.cz,Nf.half,0)}},transparent:!0,depthWrite:!1,blending:2,fog:!0});f.name=`hoi-an-reflections`,this.streaks=new Hn(l,f,Math.max(1,s.length)),this.streaks.count=s.length,this.streaks.name=`hoi-an-reflections`,this.streaks.frustumCulled=!1,this.owned.push(l,f,this.mask);let p=e.candles,m=p.length/4,h=Np(),g=new Float32Array(m*4);for(let e=0;e<m;e++){let t=e*4,n=p[t],r=Te(n);g.set([n,(p[t+1]-r)/Math.max(1,se(n)-r),p[t+2],p[t+3]],e*4)}h.setAttribute(`aCandle`,new On(g,4));let _=new Vn({vertexShader:jp,fragmentShader:Mp,uniforms:{...hn.clone(Xn.fog),uTime:{value:0},uWater:{value:kt},uNorth:{value:[...yt]},uSouth:{value:[...ot]}},fog:!0,side:2});_.name=`hoi-an-candles`,this.candles=new Hn(h,_,Math.max(1,m)),this.candles.count=m,this.candles.name=`hoi-an-candles`,this.candles.frustumCulled=!1,this.owned.push(h,_),this.group.add(this.boats,this.movingMesh,this.streaks,this.candles),this.update(0)}setQuality(e){this.streaks.material.uniforms.uFade.value.set(...fp[e===`low`?`low`:`high`]);let t=this.candles.geometry.getAttribute(`aCandle`).count;this.candles.count=e===`low`?Math.ceil(t/2):t}update(e){this.streaks.material.uniforms.uTime.value=e,this.candles.material.uniforms.uTime.value=e,this.moving&&(this.moving.boats.forEach((t,n)=>{gp.set(t.x,Math.sin(e*1.1+n)*.03,t.z),mp.compose(gp,hp.setFromAxisAngle(_p,t.yaw),vp),this.movingMesh.setMatrixAt(n,mp)}),this.movingMesh.instanceMatrix.needsUpdate=!0)}dispose(){for(let e of this.owned)e.dispose();this.boats.dispose(),this.movingMesh.dispose(),this.streaks.dispose(),this.candles.dispose()}},Fp=`aHouse`,Ip=null;function Lp(){return Ip||(Ip=new tn(new Uint8Array(4),1,1),Ip.name=`hoi-an-no-splat`,Ip.needsUpdate=!0),Ip}function Rp(e){return{uLantern:{value:new P(1,.92,.85).multiplyScalar(.22)},uSplat:{value:e??Lp()},uSplatBox:{value:new k(Nf.cx,Nf.cz,Nf.half,0)}}}var zp=`
uniform vec3 uLantern;
uniform sampler2D uSplat;
uniform vec4 uSplatBox;
float kh( float n ) { return fract( sin( mod( n, 251.0 ) * 12.9898 + 4.1414 ) * 43758.5453 ); }
float kh2( vec2 p ) { return fract( sin( dot( mod( p, 251.0 ), vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ); }
float kn( vec2 p ) {
  vec2 i = floor( p );
  vec2 f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( kh2( i ), kh2( i + vec2( 1.0, 0.0 ) ), f.x ), mix( kh2( i + vec2( 0.0, 1.0 ) ), kh2( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
}
vec3 lin( float r, float g, float b ) { return pow( vec3( r, g, b ), vec3( 2.2 ) ); }
// the lanterns' light at world w (one splat texel), fading with height away from theirs; face scales it per surface
vec3 lanternLight( vec3 w, float face ) {
  vec4 s = texture2D( uSplat, ( w.xz - uSplatBox.xy ) / ( 2.0 * uSplatBox.z ) + 0.5 );
  float h = s.a * ${10 .toFixed(1)};
  return uLantern * s.rgb * ${8 .toFixed(1)} * exp( -pow( ( w.y - h ) / 5.0, 2.0 ) ) * face;
}`,Bp=`vec3( length( instanceMatrix[ 0 ].xyz ), length( instanceMatrix[ 1 ].xyz ), length( instanceMatrix[ 2 ].xyz ) )`;function Vp(e,t,n){if(!e.includes(t))throw Error(`shader anchor missing: ${t}`);return e.replace(t,`${t}\n${n}`)}function Hp(e,t,n,r,i,a,o){return e.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=Vp(Vp(e.vertexShader,`#include <common>`,r),`#include <begin_vertex>`,i);let t=Vp(e.fragmentShader,`#include <common>`,`${zp}\n${a}\nvec3 kitGlow = vec3( 0.0 );\nfloat kitRough = 0.9;`);t=Vp(t,`#include <color_fragment>`,o),t=Vp(t,`#include <roughnessmap_fragment>`,`  roughnessFactor = kitRough;`),e.fragmentShader=Vp(t,`#include <emissivemap_fragment>`,`  totalEmissiveRadiance += kitGlow;`)},e.customProgramCacheKey=()=>t,e}var Up=`
attribute vec4 aHouse;
varying vec3 vKLocal;
varying vec3 vKN;
varying vec3 vKSize;
varying vec4 vKHouse;
varying vec3 vKWorld;`,Wp=`
vKSize = ${Bp};
vKLocal = position * vKSize;
vKN = normal;
vKHouse = aHouse;
vKWorld = ( modelMatrix * instanceMatrix * vec4( position, 1.0 ) ).xyz;`,Gp=`
varying vec3 vKLocal;
varying vec3 vKN;
varying vec3 vKSize;
varying vec4 vKHouse;
varying vec3 vKWorld;`,Kp=`
{
  float pal = vKHouse.x;
  float vr = vKHouse.y;
  float flags = vKHouse.z;
  float front = vKHouse.w;
  vec3 n = normalize( vKN );
  float isFront = step( 0.5, n.z * front );
  float y = vKLocal.y;
  float w = n.x * n.x > 0.25 ? vKSize.z : vKSize.x;
  float u = ( n.x * n.x > 0.25 ? vKLocal.z : vKLocal.x ) + 0.5 * w;
  // lime wash (docs/20 §12 palette): fresh, typical and weathered ochre, a shaded one; cream, white, pale blue
  vec3 plaster = pal < 0.5 ? lin( 0.9, 0.71, 0.235 ) : pal < 1.5 ? lin( 0.85, 0.643, 0.2 ) : pal < 2.5 ? lin( 0.77, 0.56, 0.227 ) : pal < 3.5 ? lin( 0.7, 0.52, 0.24 ) : pal < 4.5 ? lin( 0.92, 0.85, 0.65 ) : pal < 5.5 ? lin( 0.91, 0.89, 0.83 ) : lin( 0.66, 0.765, 0.79 );
  float fOpen = mod( floor( flags / 4.0 ), 2.0 );
  float fWood = mod( floor( flags / 8.0 ), 2.0 );
  float fHall = mod( floor( flags / 16.0 ), 2.0 );
  float fStall = mod( floor( flags / 32.0 ), 2.0 );
  // damp: patchy stains and vertical streaks, heavier low down
  float stain = kn( vKWorld.xz * 0.45 + vec2( y * 0.6 ) ) * 0.55 + kn( vec2( u * 1.7 + vr * 40.0, y * 0.12 ) ) * 0.45;
  vec3 c = plaster * mix( 1.0, 0.62, smoothstep( 0.45, 0.9, stain ) * ( 0.5 + 0.5 * smoothstep( 3.0, 0.0, y ) ) );
  // a damp band at the base, then the stone plinth
  c = mix( c, lin( 0.43, 0.35, 0.23 ), 0.4 * step( y, 0.6 + 0.25 * kn( vec2( u * 0.8, vr * 13.0 ) ) ) );
  c = mix( c, lin( 0.32, 0.3, 0.28 ), step( y, 0.35 ) );
  float rough = 0.92;
  vec3 glow = vec3( 0.0 );
  // lacquered brown on most fronts; teal, blue or oxblood shutters on some
  vec3 wood = vr < 0.6 ? lin( 0.29, 0.173, 0.11 ) : vr < 0.75 ? lin( 0.184, 0.42, 0.36 ) : vr < 0.9 ? lin( 0.23, 0.424, 0.54 ) : lin( 0.42, 0.165, 0.133 );
  if ( isFront > 0.5 && y > 0.4 && fWood > 0.5 ) {
    // a dark wooden front (Tấn Ký): panels floor to eave
    c = lin( 0.25, 0.14, 0.085 ) * ( 0.8 + 0.2 * kn( vec2( u * 7.0, y * 0.6 ) ) ) * ( 1.0 - 0.4 * step( fract( u / 0.55 ), 0.06 ) );
    rough = 0.65;
  } else if ( isFront > 0.5 && y > 0.4 && fHall > 0.5 ) {
    // an assembly-hall gate (generic, no lettering): cream plaster on a stone base, three lacquered doors (the middle one taller),
    // studded with brass, and a frieze of glazed tiles under the eave
    float du = abs( u - 0.5 * w );
    float mid = max( 1.1, 0.13 * w );
    float sideC = 0.33 * w;
    float sideW = max( 0.7, 0.08 * w );
    float doorTop = min( 4.2, vKSize.y - 1.2 );
    bool door = ( du < mid && y < doorTop ) || ( abs( du - sideC ) < sideW && y < doorTop * 0.72 );
    if ( y < 0.55 ) c = lin( 0.42, 0.4, 0.37 );
    if ( door ) {
      c = lin( 0.42, 0.13, 0.1 ) * ( 0.85 + 0.15 * step( 0.5, fract( y / 0.4 ) ) );
      // brass studs in a grid on the leaves
      vec2 st = abs( fract( vec2( u, y ) / 0.32 ) - 0.5 );
      c = mix( c, lin( 0.75, 0.55, 0.2 ), step( length( st ), 0.08 ) * 0.8 );
      rough = 0.55;
    } else if ( y > vKSize.y - 0.95 && y < vKSize.y - 0.45 ) {
      float tile = kh( floor( u / 0.3 ) + vr * 31.0 );
      c = mix( lin( 0.79, 0.63, 0.23 ), lin( 0.2, 0.42, 0.33 ), step( 0.6, tile ) );
      rough = 0.4;
    }
  } else if ( isFront > 0.5 && y > 0.4 && fStall > 0.5 ) {
    // a night-market stall: open, its goods lit
    c = lin( 0.22, 0.14, 0.08 );
    glow = vec3( 1.0, 0.62, 0.3 ) * ( 0.7 + 0.6 * kh( floor( u / 0.6 ) + vr * 53.0 ) );
  } else if ( isFront > 0.5 && y > 0.4 ) {
    float two = step( 6.0, vKSize.y );
    if ( y < 3.35 ) {
      // folding door panels across the ground storey, a pair of leaves per bay
      float nb = max( 2.0, floor( w / 1.7 ) );
      float bw = w / nb;
      float bay = floor( u / bw );
      float fu = fract( u / bw );
      if ( fu > 0.05 && fu < 0.95 && y < 2.95 ) {
        float open = fOpen * ( abs( bay - floor( nb * 0.5 ) ) < 0.75 ? 1.0 : 0.0 );
        if ( open > 0.5 ) {
          // an open shopfront: a warm room, darker at the floor
          c = lin( 0.2, 0.12, 0.07 );
          glow = vec3( 1.0, 0.56, 0.24 ) * ( 0.9 + 0.5 * smoothstep( 0.4, 2.6, y ) ) * ( 0.75 + 0.25 * kh( bay + vr * 97.0 ) );
        } else {
          float leaf = fract( fu * 4.0 );
          c = wood * ( 0.8 + 0.2 * kn( vec2( u * 9.0, y * 0.8 ) ) ) * ( 1.0 - 0.45 * ( step( leaf, 0.06 ) + step( 0.94, leaf ) ) );
          rough = 0.7;
        }
      } else if ( y > 2.95 ) {
        c = mix( c, wood * 0.6, 0.6 );
      }
    } else if ( y < 3.7 ) {
      c = lin( 0.2, 0.12, 0.07 );
      rough = 0.75;
    } else if ( two > 0.5 && y < vKSize.y - 0.25 ) {
      // two or three louvred windows upstairs, some lit from inside
      float nw = w > 7.0 ? 3.0 : 2.0;
      float cw = w / nw;
      float k = floor( u / cw );
      float fu = fract( u / cw );
      if ( fu > 0.24 && fu < 0.76 && y > 4.3 && y < 5.9 ) {
        float lit = step( kh( k * 7.0 + vr * 131.0 ), 0.4 );
        float louvre = fract( ( y - 4.3 ) / 0.085 );
        c = wood * ( 0.8 + 0.2 * smoothstep( 0.1, 0.5, louvre ) );
        glow = vec3( 1.0, 0.6, 0.28 ) * lit * 0.3 * smoothstep( 0.6, 0.85, louvre );
        rough = 0.7;
      } else if ( vr > 0.5 && abs( u - 0.5 * w ) < 0.26 && abs( y - ( vKSize.y - 0.55 ) ) < 0.2 ) {
        // the round "eye" vent under the eave
        if ( length( vec2( u - 0.5 * w, y - ( vKSize.y - 0.55 ) ) ) < 0.18 ) c = lin( 0.12, 0.08, 0.06 );
      }
    }
  }
  diffuseColor.rgb = c;
  kitRough = rough;
  kitGlow = glow + c * lanternLight( vKWorld, mix( 0.45, 1.0, isFront ) );
}`,qp=`
varying vec3 vKSlope;
varying vec3 vKN;
varying vec3 vKWorld;`,Jp=`
{
  vec3 sz = ${Bp};
  // metres across the lot and down the slope from the ridge, and the slope's length
  float slope = sqrt( sz.y * sz.y + 0.25 * sz.z * sz.z );
  vKSlope = vec3( uv.x * sz.x, uv.y * slope, slope );
  vKN = normal;
  vKWorld = ( modelMatrix * instanceMatrix * vec4( position, 1.0 ) ).xyz;
}`,Yp=`
varying vec3 vKSlope;
varying vec3 vKN;
varying vec3 vKWorld;`,Xp=`
{
  vec3 c;
  float rough = 0.85;
  if ( vKN.y < -0.5 ) {
    // soffit: dark rafters every 0.45 m
    c = lin( 0.16, 0.1, 0.07 ) * ( 0.7 + 0.3 * step( 0.2, fract( vKWorld.x / 0.45 ) ) );
  } else if ( abs( vKN.x ) > 0.7 ) {
    c = lin( 0.5, 0.36, 0.22 );
  } else {
    // barrel tiles: convex caps over concave channels across the slope (ribs 0.22 m apart), courses every 0.32 m down it
    float col = vKSlope.x / 0.22;
    float cell = fract( col );
    float cap = mod( floor( col ), 2.0 );
    float profile = cap > 0.5 ? 0.75 + 0.25 * sin( cell * 3.14159 ) : 0.55 + 0.2 * ( 1.0 - sin( cell * 3.14159 ) );
    float course = fract( vKSlope.y / 0.32 );
    float tile = kh2( vec2( floor( col ), floor( vKSlope.y / 0.32 ) ) + floor( vKWorld.xz * 0.05 ) );
    c = mix( lin( 0.48, 0.294, 0.216 ), lin( 0.294, 0.227, 0.192 ), tile * 0.6 ) * ( 0.8 + 0.3 * tile ) * profile * ( 1.0 - 0.35 * step( course, 0.07 ) );
    // moss and grime collect on the lower courses
    float moss = smoothstep( 0.55, 0.85, kn( vKWorld.xz * 0.35 ) ) * smoothstep( 1.0, 3.5, vKSlope.y );
    c = mix( c, lin( 0.31, 0.353, 0.227 ), moss * 0.6 );
    // the white mortar line along the eave course
    c = mix( c, lin( 0.85, 0.82, 0.77 ), step( vKSlope.z - 0.16, vKSlope.y ) );
    rough = 0.8;
  }
  diffuseColor.rgb = c;
  kitRough = rough;
  kitGlow = c * lanternLight( vKWorld, mix( 0.3, 1.0, step( vKN.y, -0.5 ) ) );
}`,Zp=`
varying vec3 vKLocal;
varying vec3 vKSize;
varying vec3 vKWorld;`,Qp=`
vKSize = ${Bp};
vKLocal = position * vKSize;
vKWorld = ( modelMatrix * instanceMatrix * vec4( position, 1.0 ) ).xyz;`,$p=Zp,em=`
{
  float v = kh2( floor( vKWorld.xz * 0.2 ) );
  vec3 wood = v < 0.6 ? lin( 0.28, 0.16, 0.1 ) : lin( 0.12, 0.3, 0.3 );
  float y = vKLocal.y + 0.5 * vKSize.y;
  float rail = step( vKSize.y - 0.12, y ) + step( y, 0.1 );
  float u = vKLocal.x;
  // balusters every 0.14 m, the gaps between them dark
  float bal = smoothstep( 0.25, 0.4, abs( fract( u / 0.14 ) - 0.5 ) );
  vec3 c = mix( wood * mix( 1.0, 0.18, bal ), wood * 1.1, clamp( rail, 0.0, 1.0 ) );
  diffuseColor.rgb = c;
  kitRough = 0.7;
  kitGlow = c * lanternLight( vKWorld, 1.0 );
}`,tm=`varying vec3 vKWorld;
varying vec3 vKN;`,nm=`vKWorld = ( modelMatrix * vec4( position, 1.0 ) ).xyz;
vKN = normal;`,rm=`
{
  vec3 n = normalize( vKN );
  vec3 c;
  if ( n.y > 0.5 ) {
    // pavers in staggered courses, worn and stained
    vec2 p = vKWorld.xz / vec2( 0.62, 0.38 );
    p.x += 0.5 * mod( floor( p.y ), 2.0 );
    vec2 f = abs( fract( p ) - 0.5 );
    float seam = step( 0.44, max( f.x * 1.0, f.y * 1.0 ) );
    float stone = kh2( floor( p ) );
    c = lin( 0.42, 0.38, 0.33 ) * ( 0.75 + 0.3 * stone ) * ( 1.0 - 0.5 * seam ) * ( 0.8 + 0.25 * kn( vKWorld.xz * 0.15 ) );
  } else {
    // embankment: stone blocks, darker and wet at the waterline
    vec2 p = vec2( vKWorld.x + vKWorld.z, vKWorld.y ) / vec2( 0.9, 0.3 );
    p.x += 0.5 * mod( floor( p.y ), 2.0 );
    vec2 f = abs( fract( p ) - 0.5 );
    c = lin( 0.3, 0.29, 0.27 ) * ( 0.8 + 0.25 * kh2( floor( p ) ) ) * ( 1.0 - 0.45 * step( 0.44, max( f.x, f.y ) ) ) * mix( 0.45, 1.0, smoothstep( -0.35, 0.0, vKWorld.y ) );
  }
  diffuseColor.rgb = c;
  kitRough = 0.9;
  kitGlow = c * lanternLight( vKWorld, 1.0 );
}`;function im(e){let t=Hp(new R({roughness:.9,metalness:0}),`hoi-an-wall-v1`,e,Up,Wp,Gp,Kp);return t.name=`hoi-an-wall`,t}function am(e){let t=Hp(new R({roughness:.85,metalness:0}),`hoi-an-roof-v1`,e,qp,Jp,Yp,Xp);return t.name=`hoi-an-roof`,t}function om(e){let t=Hp(new R({roughness:.7,metalness:0}),`hoi-an-wood-v1`,e,Zp,Qp,$p,em);return t.name=`hoi-an-wood`,t}function sm(e){let t=Hp(new R({roughness:.9,metalness:0}),`hoi-an-ground-v1`,e,tm,nm,tm,rm);return t.name=`hoi-an-ground`,t}var cm={ultra:120,high:80,medium:60,low:40},lm={glow:new P(16742962).multiplyScalar(.18),glowDir:[0,0,1]},um={top:461596,horizon:2760218,sunDir:[.35,.55,-.76],sunColor:10466559,sunIntensity:.35,hemi:[2766162,2759700],haze:1971730},dm=new P(16747072).multiplyScalar(.05),fm=2.4,pm=3,mm=new A,hm=new D,gm=new Fn,_m=new D,vm=new D(0,1,0),ym=new Fn().setFromAxisAngle(vm,Math.PI);function bm(e,t,n,r){let i=new Hn(e,t,Math.max(1,n));return i.count=n,i.name=r,i.castShadow=!0,i.receiveShadow=!0,i}function xm(e,t){let n=new N,r=[],i=Uf(e);r.push(i);let a=Rp(i),o=e=>(r.push(e),e),s=o(im(a)),c=o(am(a)),l=o(om(a)),u=e.houses,d=u.length/12,f=o(new Nn(1,1,1).translate(0,.5,0)),p=bm(f,s,d,`hoi-an-walls`),h=new Float32Array(d*4),g=[],_=new Float32Array(d*2);for(let e=0;e<d;e++){let t=e*12,[n,r,i,a,o,s]=[u[t],u[t+1],u[t+2],u[t+3],u[t+4],u[t+5]];gm.setFromAxisAngle(vm,u[t+11]),p.setMatrixAt(e,mm.compose(hm.set(n,0,r),gm,_m.set(i,o,a))),h.set([u[t+8],u[t+9],u[t+10],u[t+6]],e*4),g.push(new A().compose(hm.set(n,o,r),gm,_m.set(i,s-o,a+2*m))),_[e*2]=n,_[e*2+1]=r}f.setAttribute(Fp,new On(h,4));let v=bm(o(cf(0)),c,d,`hoi-an-roofs`),y=bm(o(cf(1)),c,d,`hoi-an-roofs-far`);y.count=0,g.forEach((e,t)=>v.setMatrixAt(t,e));for(let e of[v,y])e.instanceMatrix.setUsage(O);let b=e.awnings,x=b.length/8,S=bm(o(lf()),c,x,`hoi-an-awnings`);for(let e=0;e<x;e++){let t=e*8,n=u[b[t+6]*12+6];gm.setFromAxisAngle(vm,b[t+7]),n<0&&gm.multiply(ym),S.setMatrixAt(e,mm.compose(hm.set(b[t],b[t+1]-b[t+4]/2,b[t+2]),gm,_m.set(b[t+3],b[t+4],b[t+5])))}let C=e.balconies,ee=C.length/8,w=bm(o(new Nn(1,1,1)),l,ee,`hoi-an-balconies`);for(let e=0;e<ee;e++){let t=e*8;w.setMatrixAt(e,mm.compose(hm.set(C[t],C[t+1],C[t+2]),gm.setFromAxisAngle(vm,C[t+7]),_m.set(C[t+3],C[t+4],C[t+5])))}let te=new j(o(Tf()),o(sm(a)));te.name=`hoi-an-ground`,te.receiveShadow=!0;let ne=o(Br(t,o(wr()),!0,{warm:dm})),T=new j(o(Ef()),ne);T.name=`hoi-an-water`,T.receiveShadow=!0;let re=o(new Xd([(Se.minX+Se.maxX)/2,(Se.minZ+Se.maxZ)/2],420));n.add(te,T,re.mesh,p,v,y,S,w);let ie=jf(e.colliders);if(ie){let e=new j(o(ie),o(bf()));e.name=`hoi-an-set-pieces`,e.castShadow=e.receiveShadow=!0,n.add(e)}let ae=new j(o(Of()),o(kf()));ae.name=`hoi-an-paving`,ae.receiveShadow=!0,n.add(ae);for(let e of[p,v,y,S,w])r.push(e);return{group:n,walls:p,roofsNear:v,roofsFar:y,awnings:S,balconies:w,water:T,roofMatrices:g,roofCentres:_,uniforms:a,dispose:()=>{for(let e of r)e.dispose()}}}function Sm(e,t,n,r){let i=r*r,a=0,o=0;for(let r=0;r<e.roofMatrices.length;r++){let s=e.roofCentres[r*2]-t,c=e.roofCentres[r*2+1]-n;s*s+c*c<=i?e.roofsNear.setMatrixAt(a++,e.roofMatrices[r]):e.roofsFar.setMatrixAt(o++,e.roofMatrices[r])}e.roofsNear.count=a,e.roofsFar.count=o;for(let t of[e.roofsNear,e.roofsFar])t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere()}var Cm=class{group=new N;ringLight=new mn(1697535,0,7,2);background;fog;environmentIntensity=1;bloomThreshold=1.2;probe={position:new D(40,6,70),near:.5,far:1200,minSize:64,always:!1};cameraFar=1500;waterProbe=(e,t)=>Oe(e,t)?kt:-1/0;kit;lanterns;river;sky;envTarget;buildEnvironment;moon;hemi;lodDistance=cm.high;lodFrame=0;constructor(e,t,n,r){this.group.name=`hoi-an`;let i=typeof e.env.sky==`string`?um:e.env.sky;this.background=new P(i.haze??i.horizon),this.fog=new sn(e.env.fog.color,2.15/e.env.fog.viewDistance),this.sky=new Kd(i,lm),this.buildEnvironment=()=>qd(t,i,lm),this.envTarget=this.buildEnvironment(),this.kit=xm(n,i),this.lanterns=new lp(n),this.river=new Pp(n,(r&&ye.get(r))??null),this.moon=new on(i.sunColor,i.sunIntensity*pm),this.moon.position.set(...i.sunDir).normalize().multiplyScalar(300),this.moon.target.position.set((Se.minX+Se.maxX)/2,0,(Se.minZ+Se.maxZ)/2),this.moon.position.add(this.moon.target.position),this.moon.castShadow=!0;let a=this.moon.shadow.camera;a.left=a.bottom=-190,a.right=a.top=190,a.near=10,a.far=700,a.updateProjectionMatrix(),this.moon.shadow.bias=-8e-4,this.moon.shadow.normalBias=.2,this.moon.shadow.autoUpdate=!1,this.moon.shadow.needsUpdate=!0,this.hemi=new xn(i.hemi[0],i.hemi[1],fm),this.group.add(this.sky.mesh,this.kit.group,this.lanterns.group,this.river.group,this.moon,this.moon.target,this.hemi,this.ringLight)}update(e){this.sky.follow(e.camera),Hr(this.kit.water.material,e.time),this.lanterns.update(e.time,e.dt,e.drone,e.camera),this.river.update(e.time),this.lodFrame--<=0&&(this.lodFrame=8,Sm(this.kit,e.camera.x,e.camera.z,this.lodDistance))}setQuality(e){this.lodDistance=cm[e.tier],this.lanterns.setQuality(e),this.river.setQuality(e.tier),this.lodFrame=0,Ur(this.kit.water.material,e.tier!==`low`),this.moon.castShadow=e.shadows,this.moon.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.moon.shadow.map?.dispose(),this.moon.shadow.map=null,this.moon.shadow.needsUpdate=!0}refreshShadows(){this.moon.shadow.needsUpdate=!0}setEnvironment(e){}get environment(){return this.envTarget.texture}restoreContext(){this.envTarget.dispose(),this.envTarget=this.buildEnvironment()}stats(){return{houses:this.kit.walls.count,roofsNear:this.kit.roofsNear.count,roofsFar:this.kit.roofsFar.count,awnings:this.kit.awnings.count,balconies:this.kit.balconies.count,lanterns:this.lanterns.mesh.count,halos:this.lanterns.halos.mesh.count,poolLights:this.lanterns.lights.filter(e=>e.visible).length}}dispose(){this.group.removeFromParent(),this.kit.dispose(),this.lanterns.dispose(),this.river.dispose(),this.sky.dispose(),this.envTarget.dispose(),this.moon.shadow.map?.dispose(),this.moon.dispose(),this.hemi.dispose(),this.ringLight.dispose(),this.group.clear()}},wm=.62,Tm=120,Em=.6,Dm=600,Om=300,km=1600,Am=260,jm=420,Mm=7301730,Nm=32,Pm=5,Fm=5,Im=.4,Lm=.9;function Rm(e){return Ot(e.sunColor,e.sunIntensity,e.hemi[1],Im)}var zm=new D,Bm=new D,Vm=new D;function Hm(){ls(),Cs()}var Um=class{group=new N;background;fog;environmentIntensity=.85;bloomThreshold=1.6;ringLight=new mn(1697535,0,7,2);probe;shadowFar;origin=new dd;waterProbe;level;content;scope;renderer;dome;envTarget;sun;sunDir=new D;tier;hemi;detail;ripple;shared={uTime:{value:0}};terrainMat;roadMat;waterMat;scatter;trees;impostors;wind;terrain=null;far=null;city=null;bay=null;peds=null;pedsTier=null;late=null;liveModelTier=null;river=null;life;profile;baseProfile;sky;_time;viewScale=1;viewSetting=1;scatterTerrainVersion=-1;scatterOrigin=-1;followShadow=!1;fogScale=1;altShare=0;hazeBase=new P;zenith=new P;roofDetail=!1;roofCam=new D;cityTrees=null;cityTreesAt=new D;viewDir=new D(0,0,-1);shadowAt=new D;form;cameraFar;constructor(e,t,r,i,a={}){if(e.def.kind!==`outdoor`||!e.content)throw Error(`WorldLevelView needs a generated outdoor level`);this.level=e.def,this.content=e.content,this.form=i,this.renderer=t,this.group.name=`world`,this.scope=r.scope(e.def.id),this._time=a.time??e.def.env.time??`afternoon`,this.sky=Vt[this._time],this.viewSetting=a.viewDistance??1;let o=this.sky,s=o.haze??o.horizon;this.background=new P(s),this.tier=r.profile.tier,this.baseProfile=vt(r.profile.tier,i),this.profile=At(this.baseProfile,this.viewSetting),this.fog=new sn(s,Zc/this.fogDistance()),this.hazeBase.set(s),this.zenith.set(o.top),this.cameraFar=this.farPlane(),this.shadowFar=this.content.kind===`city`?jm:Am,this.dome=new te(o,s,{cloudSteps:u[r.profile.tier]}),this.dome.fogGround=new P,this.dome.rawGround=this.content.kind===`bay`,this.dome.setSky(o,s),this.group.add(this.dome.mesh),this.envTarget=ce(t,o,s),this.sun=new on(o.sunColor,o.sunIntensity),this.sun.name=`sun`,this.sunDir.set(...o.sunDir).normalize(),this.group.add(this.sun,this.sun.target),this.hemi=new xn(o.hemi[0],o.hemi[1],wm),this.group.add(this.hemi,this.ringLight);let c=r.profile.tier===`low`;this.detail=_t(256,Math.min(t.capabilities.getMaxAnisotropy(),8)),this.ripple=wr(c?64:256),this.terrainMat=e.content.kind===`terrain`?this.scope.terrain({base:`grass`,uvMeters:1,rockAttribute:`aRock`,wetAttribute:`aWet`,slopeRock:.1,rockMeters:Nm,rockMacro:Pm,rockTint:Mm,soil:!c,srgbColors:!0,snow:!0,snowMap:Fm,envMapIntensity:.8,worldUv:!0,detail:c?.2:.55,normalScale:c?.12:.45,roughness:1.35,gust:!0,fields:e.content.world.spec.genVersion>=2?{seed:e.content.world.spec.seed}:void 0,erosion:!0}):null,this.terrainMat&&(we(this.terrainMat,Rm(o)),x(this.terrainMat,Lm,this.sunDir),De(this.terrainMat,c)),this.roadMat=Et(this.detail),this.waterMat=Br(o,this.ripple,this.profile.waterDetail);let l=Ke(o),d=Math.atan2(this.sunDir.z,-this.sunDir.x);this.wind={uTime:{value:0},uWind:{value:new dn(Math.cos(d),-Math.sin(d))}};let f={wind:{uniforms:this.wind,flutter:!1}},p={wind:{uniforms:this.wind,flutter:!0}},m=this.scope,h=a.modelTier??Re(r.profile.tier,i),g=ue(Zt,h,Yt(Me,0));this.trees=new T({bark:m.material(`bark`,{uvMeters:1,vertexColors:!0,albedo:9075306,roughness:.95,envMapIntensity:.8,patch:f}),cards:m.material(`foliage`,{vertexColors:!0,roughness:.8,envMapIntensity:.8,patch:p}),needles:m.material(`needles`,{vertexColors:!0,roughness:.85,envMapIntensity:.8,patch:p}),lod:m.custom(`world:tree-lod`,()=>ee(new R({vertexColors:!0,roughness:.85,metalness:0,envMapIntensity:.8}),f))},g?ae(g.scenes,this.wind):null);let _=e.content.kind===`terrain`?ue(Zt,h,Yt([...dt,...wt,...Nt,...Ve,...Ze],0)):null,v=e.terrain?(t,n)=>e.terrain.heightAt(t,n):null;this.scatter=new Xe(this.origin,this.shared,{treesLod0:this.profile.treesLod0,treesLod1:this.profile.treesLod1,nearTrees:this.profile.nearTrees,nearRange:this.profile.nearRange},this.trees,_,v),this.terrainMat&&at(this.terrainMat,n,ct,this.scatter.treeRect);let y=null;try{y=re(t,this.trees.models,m.textures(`foliage`).albedo,m.textures(`needles`).albedo,r.profile.tier===`low`?4:8),this.scatter.setImpostorAtlas(y.color.texture,y.normal.texture,y.views)}catch{}this.impostors=y,this.scatter.setDusk(l),this.scatter.setRockModels(e.content.kind===`terrain`&&e.content.world.spec.genVersion>=2);let b=Ue(e);this.waterProbe=b?(e,t)=>b.waterLevelAt(e,t):()=>-1/0;let S=this.content,C=this.level.spawn.position;if(S.kind===`terrain`?(this.terrain=new Qu(S.stream,this.origin,{terrain:this.terrainMat,road:this.roadMat,water:this.waterMat},{uploads:this.profile.uploads}),this.group.add(this.terrain.group,this.scatter.group),this.origin.set(Math.floor(C[0]/128)*128,Math.floor(C[2]/128)*128),this.terrain.setUploads(1024),this.terrain.update(C[0],C[2]),this.terrain.setUploads(this.profile.uploads),this.scatterTerrainVersion=this.terrain.version,this.scatterOrigin=this.origin.version,this.scatter.rebuild(this.terrain.shown)):S.kind===`city`?(this.city=new Iu(S.city,S.outskirts,S.furniture,e.terrain??{heightAt:()=>0},this.detail,this.shared,this.scope,{outskirts:this.profile.outskirts,facadeDetail:this.profile.facadeDetail,tier:h},ue(Zt,h,[...Yt(Fe,0),...Yt(Bt,0),...Yt(xt,0)])),this.city.setDusk(l),this.river=new j(zu(),this.waterMat),this.river.name=`river`,this.river.receiveShadow=!0,this.group.add(this.city.group,this.river,this.scatter.group),this.cityTrees=this.city.trees,this.cityTreesAt.set(C[0],0,C[2]),this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt)):S.kind===`bay`&&(this.bay=new Bc(S.bay,this.scope,this.waterMat,r.profile.tier),this.bay.setCullDistance(this.cameraFar),this.bay.setSun(this.sunDir),this.bay.update(new D(...C)),this.group.add(this.bay.group)),this.life=new _d(e,this.shared,this.origin,r.profile.tier,i,this.wind.uWind.value,ue(Zt,h,Yt(e.content.kind===`city`?[...et,...rt]:ht,1))),S.kind===`city`&&Id[h].skinned>0){let t=ue(Zt,h,Yt(Ge,0));if(t)try{let n=e.terrain??{heightAt:()=>0};this.peds=new Vd(Ad(S.city,[...S.city.colliders,...S.furniture.colliders],S.furniture.shelters),t.scenes,h,(e,t)=>n.heightAt(e,t)),this.pedsTier=h,this.peds.group.userData.noCapture=!0,this.group.add(this.peds.group)}catch(e){console.warn(`GLB pedestrians unusable; the street stays empty`,e)}}if(S.kind===`city`){let t=e.terrain??{heightAt:()=>0},n=()=>Ad(S.city,[...S.city.colliders,...S.furniture.colliders],S.furniture.shelters);this.late=new Hd({hub:Zt,models:Ge,build:(e,r)=>new Vd(n(),e,r,(e,n)=>t.heightAt(e,n)),adopt:(e,t)=>{this.peds=e,this.pedsTier=t,this.peds.group.userData.noCapture=!0,this.group.add(this.peds.group),this.peds.setActive(this.liveModelTier!==null&&Rd(t,this.liveModelTier))}})}this.life.setDusk(l),this.life.setFog(this.fog.density,this.fog.color),this.life.group.userData.noCapture=!0,this.group.add(this.life.group),this.placeSun(new D(...C));let w=e.terrain?e.terrain.heightAt(C[0],C[2]):0;this.probe={position:new D(C[0],Math.max(C[1],w)+6,C[2]),near:.5,far:3e3,minSize:64,always:!1},this.dome.follow(this.probe.position)}get environment(){return this.envTarget.texture}get time(){return this._time}restoreContext(){this.dome.poseForCapture(this.probe.position),this.envTarget.dispose(),this.envTarget=ce(this.renderer,this.sky,this.sky.haze??this.sky.horizon);try{this.impostors?.rebake(this.renderer)}catch(e){console.warn(`tree impostor re-bake failed after a context restore`,e)}this.bay?.restoreContext()}texturesPending(){return this.bay?.texturesPending??!1}forCapture(){return this.bay?.forCapture()??(()=>{})}setEnvironment(e){}setTime(e){if(e===this._time)return;this._time=e;let t=Vt[e];this.sky=t;let n=t.haze??t.horizon;this.hazeBase.set(n),this.zenith.set(t.top),this.background.set(n),this.fog.color.set(n),this.dome.setSky(t,n),this.tintFog(),this.envTarget.dispose(),this.envTarget=ce(this.renderer,t,n),this.sun.color.set(t.sunColor),this.sun.intensity=t.sunIntensity,this.sunDir.set(...t.sunDir).normalize(),this.bay?.setSun(this.sunDir),this.hemi.color.set(t.hemi[0]),this.hemi.groundColor.set(t.hemi[1]),Wr(this.waterMat,t),this.terrainMat&&(we(this.terrainMat,Rm(t)),x(this.terrainMat,Lm,this.sunDir));let r=Ke(t);this.scatter.setDusk(r),this.city?.setDusk(r),this.life.setDusk(r),this.life.setFog(this.fog.density,this.fog.color),this.placeSun(this.shadowAt.lengthSq()>0?this.shadowAt:new D(...this.level.spawn.position)),this.dome.follow(this.probe.position)}fogDistance(){return It(this.level.env.fog,this.profile.fog,this.tier,this.viewSetting,this.viewScale)}farPlane(){let e=this.fogDistance(),t=this.content.kind===`terrain`?Math.max(ud(this.profile.stream.radius),this.profile.farRadius>0?ud(this.profile.farRadius):0):e,n=Math.max(e<500?e*1.1:600,Math.min(e*1.05,t+200));return this.bay?n*(1+tl[this.tier]*this.altShare):n}update(e){if(this.shared.uTime.value=e.time,this.wind.uTime.value=e.time,Hr(this.waterMat,e.time),this.dome.follow(e.camera),this.dome.update(e.time),this.scatter.setViewer(e.camera.x,e.camera.y,e.camera.z),this.city?.setViewer(e.camera.x,e.camera.y,e.camera.z),this.bay){this.bay.update(e.camera),this.thinFog(e.camera.y-0);let t=Wm(this.group);e.view&&t&&this.bay.renderReflection(this.renderer,t,e.view,this.dome.mesh)}this.peds?.update(e.time,e.dt,e.camera.x,e.camera.z),Ae.uGustTime.value=e.time,Ae.uGustWind.value.copy(this.wind.uWind.value);let t=e.drone;this.terrain&&(this.origin.follow(t.x,t.z),this.terrain.update(t.x,t.z),this.far?.update(t.x,t.z,this.terrain,e.time*1e3),(this.scatterTerrainVersion!==this.terrain.version||this.scatterOrigin!==this.origin.version)&&(this.scatterTerrainVersion=this.terrain.version,this.scatterOrigin=this.origin.version,this.scatter.rebuild(this.terrain.shown))),this.cityTrees&&(t.x-this.cityTreesAt.x)**2+(t.z-this.cityTreesAt.z)**2>1600?(this.cityTreesAt.set(t.x,0,t.z),this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt,this.profile.furnitureRange),this.city?.setFurniture(this.profile.furnitureRange,t.x,t.z,this.profile.kerbs),this.city?.setRoofDetail(this.roofDetail,t.x,t.z,e.camera.x,e.camera.z),this.roofCam.copy(e.camera)):this.city&&this.roofDetail&&(e.camera.x-this.roofCam.x)**2+(e.camera.z-this.roofCam.z)**2>1600&&(this.roofCam.copy(e.camera),this.city.setRoofDetail(!0,this.cityTreesAt.x,this.cityTreesAt.z,e.camera.x,e.camera.z)),this.followShadow&&this.placeSun(this.shadowCentre(e.camera,t)),this.life.update(e)}thinFog(e){let t=rl(e);t!==this.altShare&&(this.altShare=t,this.cameraFar=this.farPlane(),this.bay?.setCullDistance(this.cameraFar),this.tintFog()),this.dome.setGroundDip(e,this.cameraFar);let n=al(e,this.cameraFar/this.fogDistance(),il(this.tier,t));n===this.fogScale||n<1&&Math.abs(n-this.fogScale)<.01||(this.fogScale=n,this.fog.density=Zc/this.fogDistance()*n,this.life.setFog(this.fog.density,this.fog.color))}tintFog(){this.fog.color.copy(this.hazeBase).lerp(this.zenith,nl*this.altShare),this.background.copy(this.fog.color),this.dome.setGround(this.fog.color),this.life.setFog(this.fog.density,this.fog.color)}shadowCentre(e,t){let n=t.x-e.x,r=t.z-e.z,i=Math.sqrt(n*n+r*r);i>.5&&this.viewDir.set(n/i,0,r/i);let a=this.city?Om:Tm;return this.shadowAt.copy(t).addScaledVector(this.viewDir,a*Em)}placeSun(e){let t=this.sunDir,n=this.sun,r=this.city?Om:Tm,i=this.city?km:Dm;Bm.set(0,1,0).cross(t).normalize(),Bm.lengthSq()<1e-6&&Bm.set(1,0,0),Vm.crossVectors(t,Bm).normalize();let a=r*2/Math.max(256,n.shadow.mapSize.x),o=Math.round(e.dot(Bm)/a)*a,s=Math.round(e.dot(Vm)/a)*a,c=e.dot(t);zm.copy(Bm).multiplyScalar(o).addScaledVector(Vm,s).addScaledVector(t,c),n.target.position.copy(zm),n.position.copy(zm).addScaledVector(t,i/2),n.target.updateMatrixWorld(),n.updateMatrixWorld()}setQuality(e){this.dome.setCloudSteps(u[e.tier]),this.tier=e.tier,this.baseProfile=vt(e.tier,this.form),this.terrainMat&&De(this.terrainMat,e.tier===`low`),this.applyProfile(e)}setViewScale(e){this.viewScale=Math.min(1,Math.max(.5,e)),this.applyProfile(null)}setViewDistance(e){e!==this.viewSetting&&(this.viewSetting=e,this.applyProfile(null))}applyProfile(e){let t=At(this.baseProfile,this.viewScale*this.viewSetting);this.profile=t,this.fog.density=Zc/this.fogDistance()*this.fogScale,this.life?.setFog(this.fog.density,this.fog.color),this.cameraFar=this.farPlane(),this.bay?.setCullDistance(this.cameraFar),Ur(this.waterMat,t.waterDetail),this.scatter.caps={treesLod0:t.treesLod0,treesLod1:t.treesLod1,nearTrees:t.nearTrees,nearRange:t.nearRange,rocks:t.rocks},this.cityTrees&&this.scatter.rebuild(new Map,this.cityTrees,this.cityTreesAt,t.furnitureRange);let n=this.content;if(n.kind===`terrain`&&this.terrain&&(n.stream.configure(t.stream),this.terrain.setUploads(t.uploads),this.scatterTerrainVersion=-1,t.farRadius>0?this.far?this.far.setRadius(t.farRadius,t.farFine):(this.far=new ld(n.world.spec,n.stream.chunkBuilder,this.origin,this.terrainMat,this.waterMat,t.farRadius,this.level.bounds.kind===`rect`&&this.level.bounds.max[0]<1e4?this.level.bounds.max[0]+1280:void 0,t.farFine),this.group.add(this.far.group)):this.far&&=(this.far.dispose(),null)),this.city&&(this.city.setOutskirts(t.outskirts),this.city.setFurniture(t.furnitureRange,this.cityTreesAt.x,this.cityTreesAt.z,t.kerbs),this.city.setFacadeDetail(t.facadeDetail)),!e)return;e.transient||this.bay?.setQuality(e.tier,e.waterMirror!==!1),this.life.setQuality(e.tier);let r=Re(e.tier,this.form);this.scatter.setModelTier(r),this.city?.setModelTier(r);let i=Vl(e);i!==null&&this.city?.setFacadeQuality(i),e.transient||(this.liveModelTier=r,this.peds?.setActive(this.pedsTier!==null&&Rd(this.pedsTier,r)),Ud(e,this.peds!==null,Zt.on)&&this.late?.request(r)),this.life.setModelTier(r);let a=e.shadows&&(t.sunShadows||e.sunCascades),o=e.tier===`ultra`||e.tier===`high`;this.trees.setDetailed(o,t.nearDetail),this.trees.setFringe(t.nearFringe),this.roofDetail=o,this.city?.setRoofDetail(o,this.cityTreesAt.x,this.cityTreesAt.z,this.roofCam.x,this.roofCam.z),this.scatter.setShadows(a),this.bay?.setShadows(a),this.city&&(this.city.buildings.mesh.castShadow=a,this.city.setModelShadows(a));let s=e.shadows&&t.sunShadows&&!e.sunCascades;this.sun.castShadow=s,this.followShadow=s;let c=this.sun.shadow,l=this.city?e.shadowMapSize:Math.min(e.shadowMapSize,2048);c.mapSize.set(l,l),c.map?.dispose(),c.map=null;let u=c.camera,d=this.city?Om:Tm;u.left=-d,u.right=d,u.top=d,u.bottom=-d,u.near=1,u.far=this.city?km:Dm,u.updateProjectionMatrix();let f=d*2/l;c.bias=-4e-4,c.normalBias=Math.max(.04,f*.9),c.autoUpdate=!0,c.radius=2,c.needsUpdate=!0,this.hemi.intensity=a?wm:wm*1.15}refreshShadows(){this.sun.shadow.needsUpdate=!0}setFoliageCoverage(e){this.scatter.setFoliageCoverage(e)}get busy(){let e=this.content;return e.kind!==`terrain`||!this.terrain?!1:e.stream.pending>0||this.terrain.uploadsLastFrame>0||this.far!==null&&this.far.stream.pending>0}tierReady(){return Promise.all([this.city?.facadesReady,this.bay?.texturesReady(this.renderer)]).then(()=>void 0)}stats(){let e=this.content,t={origin:[this.origin.x,this.origin.z],time:this._time,fog:Math.round(this.fogDistance()),far:Math.round(this.cameraFar),viewScale:this.viewScale,viewDistance:this.viewSetting,instances:this.scatter.counts()};return e.kind===`terrain`&&this.terrain&&(t.chunks=this.terrain.shown.size,t.created=this.terrain.created,t.pooled=this.terrain.pooled,t.uploads=this.terrain.uploadsLastFrame,t.colliderChunks=e.stream.colliderChunks.size,t.pending=e.stream.pending,t.builder=e.stream.builderKind,t.failures=e.stream.failures,t.farChunks=this.far?.count??0,t.radius=this.profile.stream.radius),this.city&&(t.buildings=this.city.buildings.count),this.bay&&(t.bay=this.bay.stats()),t.life=this.life.stats(),t.models=this.modelStats(),t}modelStats(){return{houses:this.scatter.glbStats(),city:this.city?.glbStats()??null,traffic:this.life.glbStats(),pedestrians:this.peds?.drawn()??null}}dispose(){this.group.removeFromParent(),this.terrain?.dispose(),this.far?.dispose(),this.city?.dispose(),this.bay?.dispose(),this.late?.cancel(),this.peds?.dispose(),this.life.dispose(),this.river?.geometry.dispose(),this.scatter.dispose(),this.impostors?.dispose(),this.dome.dispose(),this.envTarget.dispose(),this.sun.shadow.map?.dispose(),this.sun.dispose(),this.hemi.dispose(),this.ringLight.dispose(),this.detail.dispose(),this.ripple.dispose(),this.roadMat.dispose(),this.waterMat.dispose(),this.scope.dispose(),this.group.clear()}};function Wm(e){let t=e;for(;t.parent;)t=t.parent;return t.isScene?t:null}export{Cm as HoiAnView,Um as WorldLevelView,je as oldTown,Hm as releaseBayMaps};
