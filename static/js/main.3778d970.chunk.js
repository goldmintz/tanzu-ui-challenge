(this["webpackJsonptanzu-ui-challenge"]=this["webpackJsonptanzu-ui-challenge"]||[]).push([[0],{16:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(9),r=s.n(a),l=s(2),i=(s(4),s(0)),o=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{id:"logo",children:"vm"}),"Tanzu Mission Control"]}),Object(i.jsx)("div",{children:"UserName | Org"})]})},j=s(10),u=function(e){var t=e.clusters,s=e.firstCluster,n=e.lastCluster,a=Object(j.a)(t),r=Object(c.useState)({field:null,direction:null}),o=Object(l.a)(r,2),u=o[0],b=o[1],d=u.field,h=u.direction;null!==d&&a.sort((function(e,t){return e[d]<t[d]?"ascending"===h?-1:1:e[d]>t[d]?"ascending"===h?1:-1:0}));var O=function(e){var t="ascending";u.field===e&&"ascending"===u.direction&&(t="descending"),b({field:e,direction:t})},m=function(e){return e!==u.field?Object(i.jsx)("i",{className:"fas fa-sort"}):u.field===e&&"ascending"===u.direction?Object(i.jsx)("i",{className:"fas fa-sort-up"}):u.field===e&&"descending"===u.direction?Object(i.jsx)("i",{className:"fas fa-sort-down"}):void 0},x=function(){b({field:null,direction:null})};return Object(i.jsxs)("table",{className:"table-wrapper",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsxs)("th",{children:[Object(i.jsx)("span",{onClick:function(){return x()},children:"Cluster Name"}),Object(i.jsx)("button",{type:"button",className:"sort-icon",onClick:function(e){O("name")},children:m("name")})]}),Object(i.jsxs)("th",{children:[Object(i.jsx)("span",{onClick:function(){return x()},children:"OS"}),Object(i.jsx)("button",{type:"button",className:"sort-icon",onClick:function(){return O("os")},children:m("os")})]}),Object(i.jsxs)("th",{children:[Object(i.jsx)("span",{onClick:function(){return x()},children:"Cores"}),Object(i.jsx)("button",{type:"button",className:"sort-icon",onClick:function(){O("cores")},children:m("cores")})]}),Object(i.jsx)("th",{children:"Pods"}),Object(i.jsx)("th",{children:"Nodes"}),Object(i.jsx)("th",{children:"Memory"}),Object(i.jsx)("th",{children:"Labels"}),Object(i.jsx)("th",{children:"Namespaces"})]})}),Object(i.jsx)("tbody",{children:a.slice(s,n).map((function(e){var t=e.name,s=e.os,c=e.cores,n=e.pods,a=e.nodes,r=e.total_memory_gb,l=e.labels,o=e.namespaces;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"cluster-name",children:t.replace("-cluster","")}),s.length>0&&Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsxs)("td",{children:[r.toLocaleString("en"),"%"]}),Object(i.jsxs)("td",{className:"list-col",children:[Object(i.jsx)("span",{className:"btn-labels",children:l.length})," ",l.join(", ")]}),Object(i.jsx)("td",{className:"list-col namespaces",children:o.join(", ")})]},t)}))})]})},b=function(e){var t=e.totalClustersCount,s=e.filteredClustersCount,c=e.searchTerm,n=e.setSearchTerm,a=e.clearSearchTerm,r=e.toggleClusterForm,l=s===t?"".concat(t," Total Clusters"):"".concat(s," of ").concat(t," Clusters");return Object(i.jsxs)("div",{className:"cluster-cntrl-wrapper",children:[Object(i.jsxs)("div",{className:"cluster-cntrl-group",children:[Object(i.jsxs)("div",{className:"cluster-cntrl-header",children:[Object(i.jsx)("h1",{children:"Clusters"}),Object(i.jsx)("div",{id:"cluster-count",children:l})]}),Object(i.jsx)("button",{className:"btn-primary",onClick:function(){return r(!0)},children:"New Cluster"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"search-input",type:"text",placeholder:"Search by name or OS",value:c,onChange:n}),Object(i.jsx)("button",{className:"btn-secondary",onClick:a,disabled:""===c,children:"Clear search"})]})]})},d=function(e){var t=e.setCurrentClusterPage,s=e.currentClusterPage,c=e.lastCluster,n=e.firstCluster,a=e.totalClusters,r=function(e){t("back"===e?s-1:s+1)};return Object(i.jsx)("div",{className:"pagination-wrapper",children:Object(i.jsxs)("div",{className:"pagination-controls",children:[Object(i.jsx)("button",{disabled:1===s,className:"btn-pagination",onClick:function(){return r("back")},children:Object(i.jsx)("i",{className:"fas fa-chevron-left"})}),Object(i.jsxs)("span",{className:"pagination-title",children:[n+1," to ",c," of ",a," Clusters"]}),Object(i.jsx)("button",{disabled:c>=a,className:"btn-pagination",onClick:function(){return r("fwd")},children:Object(i.jsx)("i",{className:"fas fa-chevron-right"})})]})})},h=s(5),O=s(3),m=function(e){var t=e.toggleClusterForm,s=e.addNewCluster,n=Object(c.useState)({name:"",os:"",cores:"",pods:"",nodes:"",total_memory_gb:"",labels:[],namespaces:[]}),a=Object(l.a)(n,2),r=a[0],o=a[1],j=r.name,u=r.os,b=r.cores,d=r.pods,m=r.labels,x=r.namespaces,f=function(e){if("namespaces"===e.target.name){var t=e.target.value.toLowerCase().split(",");o(Object(O.a)(Object(O.a)({},r),{},Object(h.a)({},e.target.name,t)))}if("labels"===e.target.name){var s=Array.from(e.target.selectedOptions,(function(e){return e.value}));o(Object(O.a)(Object(O.a)({},r),{},Object(h.a)({},e.target.name,s)))}else"labels"!==e.target.name&&"namespaces"!==e.target.name&&o(Object(O.a)(Object(O.a)({},r),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(i.jsx)("div",{className:"form-wrapper",children:Object(i.jsxs)("form",{className:"new-cluster-form",onSubmit:function(e){return function(e,c){e.preventDefault(),s(c),t(!1)}(e,r)},children:[Object(i.jsxs)("div",{className:"form-header",children:[" ",Object(i.jsx)("h2",{children:"Add New Cluster"}),Object(i.jsx)("button",{className:"btn-secondary ",onClick:function(){return t(!1)},children:"close"})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"form-input-wrapper",children:[Object(i.jsxs)("section",{className:"form-row",children:[" ",Object(i.jsxs)("label",{children:["Name",Object(i.jsx)("input",{name:"name",type:"text",value:j.toLowerCase(),onChange:f,required:!0})]}),Object(i.jsxs)("label",{children:["OS",Object(i.jsxs)("select",{name:"os",value:u,onChange:f,children:[Object(i.jsx)("option",{value:""}),Object(i.jsx)("option",{value:"fedora",children:"fedora"}),Object(i.jsx)("option",{value:"suse",children:"suse"}),Object(i.jsx)("option",{value:"ubuntu",children:"ubuntu"})]})]})]}),Object(i.jsxs)("section",{className:"form-row",children:[Object(i.jsxs)("label",{children:["Namespaces",Object(i.jsx)("input",{name:"namespaces",type:"text",value:x,onChange:f,placeholder:"Please separate namespaces with commas"})]}),Object(i.jsxs)("label",{children:["Labels",Object(i.jsxs)("select",{id:"labels-multiselect",name:"labels",multiple:!0,onChange:f,value:m,children:[Object(i.jsx)("option",{value:"britney",children:"britney"}),Object(i.jsx)("option",{value:"ariana",children:"ariana"}),Object(i.jsx)("option",{value:"christina",children:"christina"})]})]})]}),Object(i.jsxs)("section",{className:"form-row",children:[Object(i.jsxs)("label",{children:["Cores",Object(i.jsx)("input",{name:"cores",type:"number",min:"1",max:"10",value:b,onChange:f})]}),Object(i.jsxs)("label",{children:["Pods",Object(i.jsx)("input",{name:"pods",type:"number",min:"1",max:"10",value:d,onChange:f})]})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("input",{type:"submit",value:"Create New Cluster",className:"btn-primary",id:"btn-form-submit"})]})]})})},x=function(){Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("clusters");fetch("clusters.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e?n(JSON.parse(localStorage.getItem("clusters"))):(localStorage.setItem("clusters",JSON.stringify(t)),n(t))}))}()}),[]);var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(1),r=Object(l.a)(a,2),j=r[0],h=r[1],O=Object(c.useState)(10),x=Object(l.a)(O,1)[0],f=j*x,p=f-x,C=Object(c.useState)(""),g=Object(l.a)(C,2),v=g[0],N=g[1],w=function(e){var t=v.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)||e.os.toLowerCase().includes(t)}))},y=Object(c.useState)(!1),S=Object(l.a)(y,2),k=S[0],T=S[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"page-wrapper",children:[Object(i.jsx)(b,{totalClustersCount:s.length,filteredClustersCount:w(s).length,searchTerm:v,setSearchTerm:function(e){N(e.target.value),h(1)},clearSearchTerm:function(){N(""),h(1)},toggleClusterForm:T}),Object(i.jsx)(u,{clusters:w(s),firstCluster:p,lastCluster:f}),Object(i.jsx)(d,{setCurrentClusterPage:h,currentClusterPage:j,firstCluster:p,lastCluster:f,filteredClusters:w(s),totalClusters:s.length})]}),k&&Object(i.jsx)(m,{toggleClusterForm:T,addNewCluster:function(e){var t=s.concat(e);n(s.concat(e)),localStorage.setItem("clusters",JSON.stringify(t))}})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))},4:function(e,t,s){}},[[16,1,2]]]);
//# sourceMappingURL=main.3778d970.chunk.js.map