import"./p-476cf7c4.js";import"./p-dc4230e0.js";import"./p-098cc742.js";import{a as n}from"./p-a1c96c01.js";import{hydratedAdapter as r}from"./p-cd5bdbe2.js";function t(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function e(r){return n.extendedSpatialReferenceInfo(r)}function u(e,u){return n.clip(r,t(e),e,u)}function i(e,u){return n.cut(r,t(e),e,u)}function o(e,u){return n.contains(r,t(e),e,u)}function c(e,u){return n.crosses(r,t(e),e,u)}function s(e,u,i){return n.distance(r,t(e),e,u,i)}function a(e,u){return n.equals(r,t(e),e,u)}function f(e,u){return n.intersects(r,t(e),e,u)}function l(e,u){return n.touches(r,t(e),e,u)}function p(e,u){return n.within(r,t(e),e,u)}function g(e,u){return n.disjoint(r,t(e),e,u)}function m(e,u){return n.overlaps(r,t(e),e,u)}function d(e,u,i){return n.relate(r,t(e),e,u,i)}function w(e){return n.isSimple(r,t(e),e)}function x(e){return n.simplify(r,t(e),e)}function E(e,u=!1){return n.convexHull(r,t(e),e,u)}function h(e,u){return n.difference(r,t(e),e,u)}function A(e,u){return n.symmetricDifference(r,t(e),e,u)}function I(e,u){return n.intersect(r,t(e),e,u)}function j(e,u=null){return n.union(r,t(e),e,u)}function y(e,u,i,o,c,s){return n.offset(r,t(e),e,u,i,o,c,s)}function v(e,u,i,o=!1){return n.buffer(r,t(e),e,u,i,o)}function b(e,u,i,o,c,s){return n.geodesicBuffer(r,t(e),e,u,i,o,c,s)}function V(e,u,i=!0){return n.nearestCoordinate(r,t(e),e,u,i)}function z(e,u){return n.nearestVertex(r,t(e),e,u)}function D(e,u,i,o){return n.nearestVertices(r,t(e),e,u,i,o)}function H(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function L(r,t,e){var u;if(null==r)throw new Error("Illegal Argument Exception");const i=r.spatialReference;if(null==(e=null!=(u=e)?u:H(r)))throw new Error("Illegal Argument Exception");const o=r.constructor.fromJSON(n.rotate(r,t,e));return o.spatialReference=i,o}function S(r,t){var e;if(null==r)throw new Error("Illegal Argument Exception");const u=r.spatialReference;if(null==(t=null!=(e=t)?e:H(r)))throw new Error("Illegal Argument Exception");const i=r.constructor.fromJSON(n.flipHorizontal(r,t));return i.spatialReference=u,i}function q(r,t){var e;if(null==r)throw new Error("Illegal Argument Exception");const u=r.spatialReference;if(null==(t=null!=(e=t)?e:H(r)))throw new Error("Illegal Argument Exception");const i=r.constructor.fromJSON(n.flipVertical(r,t));return i.spatialReference=u,i}function B(e,u,i,o){return n.generalize(r,t(e),e,u,i,o)}function C(e,u,i){return n.densify(r,t(e),e,u,i)}function R(e,u,i,o=0){return n.geodesicDensify(r,t(e),e,u,i,o)}function k(e,u){return n.planarArea(r,t(e),e,u)}function F(e,u){return n.planarLength(r,t(e),e,u)}function G(e,u,i){return n.geodesicArea(r,t(e),e,u,i)}function J(e,u,i){return n.geodesicLength(r,t(e),e,u,i)}export{v as buffer,u as clip,o as contains,E as convexHull,c as crosses,i as cut,C as densify,h as difference,g as disjoint,s as distance,a as equals,e as extendedSpatialReferenceInfo,S as flipHorizontal,q as flipVertical,B as generalize,G as geodesicArea,b as geodesicBuffer,R as geodesicDensify,J as geodesicLength,I as intersect,f as intersects,w as isSimple,V as nearestCoordinate,z as nearestVertex,D as nearestVertices,y as offset,m as overlaps,k as planarArea,F as planarLength,d as relate,L as rotate,x as simplify,A as symmetricDifference,l as touches,j as union,p as within}