import{u as t,L as h,ap as p,h as l,j as e,a,d as m,b as c,aq as u,ar as f,as as b,r as d,C as v,s as j,at as w,H as k,O as E,au as y}from"./index-2c14e649.js";import{T as C}from"./TitlePage-af584fb3.js";const L=t.ul`
  display: flex;
  margin-top: 20px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,$=t(h)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${i=>i.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: ${i=>i.isactive==="true"?"4px":"0"};
    background-color: #ef8964;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,z=()=>{const i=["Body parts","Muscles","Equipment"],{filter:r}=p(),o=l(),s=r;return e.jsx(e.Fragment,{children:e.jsx(L,{children:i.map(n=>e.jsx("li",{children:e.jsx($,{to:`/exercises/${n}`,state:{from:o},isactive:n===s?"true":"false",children:n})},n))})})},D="/fs-90-react-node-DeadMakar/assets/trainingGym-1-78b576d3.jpg",F="/fs-90-react-node-DeadMakar/assets/trainingGym-1@2x-7f8d3593.jpg",B=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 78px;
    margin-bottom: 70px;
  }
`;t.div`
  text-align: center;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const M=t.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,O=t.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  gap: 8px;
  color: ${a.colorInput};
  font-size: 14px;
  line-height: 1.29;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 30px;
    font-size: 16px;
    line-height: 1.5;
  }

  > svg {
    stroke: ${a.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${a.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${a.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,G=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${D});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${F});
  }
`,T=()=>{const i=m(),r=c(u),o=c(f),{filter:s,filterList:n}=p(),x=b(),g=l();return d.useEffect(()=>{(async()=>{s&&i(y(s))})()},[i,s]),e.jsx(G,{children:e.jsx(v,{children:e.jsx(M,{children:e.jsxs("div",{children:[s!==void 0&&g.pathname.endsWith(s.replace(" ","%20"))?null:e.jsxs(O,{onClick:()=>x(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:j+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(B,{children:[e.jsx(C,{contentText:n?w(n.split(" ")[0]):"Exercises"}),e.jsx(z,{})]}),r&&!o?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx(d.Suspense,{children:e.jsx(E,{})})})]})})})})};export{T as default};
