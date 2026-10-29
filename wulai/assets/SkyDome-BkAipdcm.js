import{r as a,a as s,j as u}from"./r3f-DI1lngOx.js";import{m as c,v as t,be as p}from"./three-Dc6XZrl1.js";function l({top:i="#cfdae4",horizon:e="#e3e9ed",bottom:r="#c9d3da",exponent:o=.7}={}){return new c({side:p,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new t(i)},uHorizon:{value:new t(e)},uBottom:{value:new t(r)},uExp:{value:o}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTop;
      uniform vec3 uHorizon;
      uniform vec3 uBottom;
      uniform float uExp;
      varying vec3 vDir;
      void main() {
        float h = vDir.y;
        vec3 col = h > 0.0
          ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), uExp))
          : mix(uHorizon, uBottom, pow(clamp(-h, 0.0, 1.0), 0.5));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }
    `})}function d({radius:i=300,...e}){const r=a.useRef(),o=a.useMemo(()=>l(e),[e.top,e.horizon,e.bottom]);return a.useEffect(()=>()=>o.dispose(),[o]),s(({camera:m})=>{var n;return(n=r.current)==null?void 0:n.position.copy(m.position)}),u.jsx("mesh",{ref:r,material:o,renderOrder:-10,frustumCulled:!1,children:u.jsx("sphereGeometry",{args:[i,24,16]})})}export{d as S};
