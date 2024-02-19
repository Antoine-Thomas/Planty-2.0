!function(){var e={703:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.blockEditor,t=e.InspectorControls,r=e.PanelColorSettings,__=(e.MediaUpload,e.MediaUploadCheck,wp.i18n.__),o=wp.components,l=o.PanelBody,a=o.PanelRow,c=o.ToggleControl,i=o.SelectControl,u=(o.Button,function(e){var n=e.attributes,o=n.productId,u=n.showDescription,s=n.showPrice,p=n.template,f=n.backgroundColor,m=n.contentColor,d=n.pricingColor,g=e.setAttributes;return o?React.createElement(t,null,React.createElement(l,{title:"Template Settings",initialOpen:!0},React.createElement(a,null,React.createElement("div",{className:"fluent-singleProduct-template-settings"},React.createElement(i,{label:__("Design Template"),value:p,options:[{value:"left",name:"Image Left"},{value:"top",name:"Image Top"},{value:"none",name:"No Image"}].map((function(e){return{value:e.value,label:e.name}})),onChange:function(e){return g({template:e})}}),React.createElement(c,{label:__("Show Description"),checked:u,onChange:function(){return g({showDescription:!u})}}),React.createElement(c,{label:__("Show Price"),checked:s,onChange:function(){return g({showPrice:!s})}})))),React.createElement("div",{className:"fluent-singleProduct-titleAndSubtitle-settings"},React.createElement(r,{title:__("Customization"),colorSettings:[{value:m,onChange:function(e){g({contentColor:e})},label:__("Content Color")},{value:f,onChange:function(e){g({backgroundColor:e})},label:__("Background Color")},{value:d,onChange:function(e){g({pricingColor:e})},label:__("Pricing Color")}]}))):null}),s=(window.wp.i18n,n(703)),p=n.n(s);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){var r,o,l;r=e,o=t,l=n[t],(o=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,c=[],i=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=wp.components,h=y.RadioControl,v=y.Spinner,w=wp.element,E=w.useState,R=w.useEffect,_=(wp.i18n.__,function(e){var t=e.attributes,n=t.productId,r=t.showDescription,o=t.showPrice,l=t.buttonText,a=t.customImage,c=t.template,i=t.backgroundColor,u=t.contentColor,s=t.pricingColor,f=e.setAttributes,m=wp.blockEditor.InnerBlocks,b=g(E([]),2),y=b[0],w=b[1],_=g(E(""),2),C=_[0],S=_[1],O=g(E(""),2),P=O[0],k=O[1],j=g(E({}),2),N=j[0],I=j[1],x=g(E(!1),2),A=x[0],T=x[1],D=g(E(!1),2),L=D[0],B=D[1],M=g(E(!1),2),z=(M[0],M[1]);R((function(){n?K(n):U()}),[]);var F=wp.apiFetch,H=wp.url.addQueryArgs,U=function(e){B(!0),F({path:H("wc/store/products",d({per_page:6},e))}).then((function(e){w(e)})).catch((function(e){z(!0)})).finally((function(){B(!1)}))},K=function(e){T(!0),F({path:H("wc/store/products/"+e)}).then((function(e){I(e),f({productId:e.id}),T(!1)}))},Q={backgroundColor:i,color:u},V=p()("fcw_p","fcw_template_"+c,{fc_product_loading:A}),$=p()("fcw_search_box",{fc_product_loading:A});return[React.createElement("div",null,A&&React.createElement("div",{style:Q,className:"fc_woo_loader"},React.createElement(v,null),React.createElement("h3",null,"Loading product")),N.id&&n?React.createElement("div",{style:Q,className:V},"none"!=c&&React.createElement("div",{className:"fcw_image"},React.createElement("img",{src:a||N&&N.images&&N.images.length&&N.images[0].src||""})),React.createElement("div",{className:"fcw_p_content"},React.createElement("h2",{style:{color:u},className:"fcw_p_title",dangerouslySetInnerHTML:{__html:N.name}}),r&&React.createElement("div",{style:{color:u},className:"fcw_p_desc",dangerouslySetInnerHTML:{__html:N.short_description}}),o&&React.createElement("div",{style:{color:s},className:"fcw_p_price",dangerouslySetInnerHTML:{__html:N.price_html}}),React.createElement("div",{className:"fcb_p_button"},React.createElement(m,{template:[["core/buttons",{},[["core/button",{text:l,url:N.permalink,align:"left"}]]]],templateLock:"all"})))):React.createElement("div",{className:$},React.createElement("h4",null,"Search and Select a Product"),React.createElement("hr",null),React.createElement("div",{style:{marginBottom:"25px",display:"flex"},className:"fluent-single-product-search-bar"},React.createElement("div",{style:{width:"80%"}},React.createElement("input",{placeholder:"product",style:{width:"100%",height:"30px"},value:C,onChange:function(e){S(e.target.value)},onKeyDown:function(e){"Enter"!==e.key&&""!==e.target.value||U({search:C})}})),React.createElement("button",{style:{width:"20%",height:"30px"},onClick:function(){U({search:C})}},"Search")),L?React.createElement("h2",null,React.createElement(v,null)):React.createElement("div",{className:"fcw_results"},y&&y.length?React.createElement(h,{selected:P,options:y.map((function(e){return{value:e.id.toString(),label:e.name}})),onChange:function(e){k(e)}}):React.createElement("div",{className:"fcw_products_not_found"},React.createElement("h2",null,"No products found!"))),React.createElement("div",{style:{marginTop:"20px"},className:"components-button is-primary",onClick:function(){K(P)}},"Done")))]}),C=wp.element.Fragment,S=window.wp.blockEditor,O={productId:{type:"number",default:null},showDescription:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},buttonText:{type:"string",default:(0,wp.i18n.__)("Buy Now")},customImage:{type:"string",default:""},backgroundColor:{type:"string",default:"#fffeeb"},contentColor:{type:"string",default:""},pricingColor:{type:"string",default:""},template:{type:"string",default:"left"}},P=wp.element.createElement,k=wp.i18n.__,j=wp.blocks.registerBlockType,N=P("svg",{width:20,height:20},P("path",{d:"M0 0h24v24H0V0z",fill:"none"}),P("path",{fill:"#96588a",d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));j("fluentcrm/woo-product",{title:k("Product Block"),description:k("Product Block For your Email"),category:"layout",icon:N,keywords:[k("product"),k("woocommerce"),k("card")],supports:{align:["wide","full"],html:!0},attributes:O,edit:function(e){return React.createElement(C,null,React.createElement("div",{className:"fluent-single-product-block"},React.createElement(_,{attributes:e.attributes,setAttributes:e.setAttributes})),React.createElement(u,{attributes:e.attributes,setAttributes:e.setAttributes}))},save:function(e){return React.createElement("div",null,React.createElement(React.Fragment,null,React.createElement(S.InnerBlocks.Content,null)))}})}()}();