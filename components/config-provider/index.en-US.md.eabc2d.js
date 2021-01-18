(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{3030:function(n,t){n.exports={content:["section",["p",["code","ConfigProvider"]," provides a uniform configuration support for components."],["h2","Usage"],["p","This component provides a configuration to all React components underneath itself via the ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context API"],". In the render tree all components will have access to the provided config."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';

// ...

export default () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);`]],["h3","Content Security Policy"],["p","Some components use dynamic style to support wave effect. You can config ",["code","csp"]," prop if Content Security Policy (CSP) is enabled:"],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">csp</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nonce<span class="token punctuation">:</span> <span class="token string">'YourNonceCode'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>`},["code",`<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>`]]],meta:{category:"Components",type:"Other",cols:1,title:"ConfigProvider",cover:"https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg",filename:"components/config-provider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoInsertSpaceInButton"],["td","Set false to remove space between 2 chinese characters on Button"],["td","boolean"],["td","true"],["td"]],["tr",["td","componentSize"],["td","Config antd component size"],["td",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]],["td","-"],["td"]],["tr",["td","csp"],["td","Set ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy"]," config"],["td","{ nonce: string }"],["td","-"],["td"]],["tr",["td","direction"],["td","Set direction of layout. See ",["a",{title:null,href:"#components-config-provider-demo-direction"},"demo"]],["td",["code","ltr"]," ","|"," ",["code","rtl"]],["td",["code","ltr"]],["td"]],["tr",["td","dropdownMatchSelectWidth"],["td","Determine whether the dropdown menu and the select input are the same width. Default set ",["code","min-width"]," same as input. Will ignore when value less than select width. ",["code","false"]," will disable virtual scroll"],["td","boolean ","|"," number"],["td","-"],["td","4.3.0"]],["tr",["td","form"],["td","Set Form common props"],["td","{ validateMessages?: ",["a",{title:null,href:"/components/form/#validateMessages"},"ValidateMessages"],", requiredMark?: boolean ","|"," ",["code","optional"]," }"],["td","-"],["td","requiredMark: 4.8.0"]],["tr",["td","getPopupContainer"],["td","To set the container of the popup element. The default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","getTargetContainer"],["td","Config Affix, Anchor scroll target container"],["td","() => HTMLElement"],["td","() => window"],["td","4.2.0"]],["tr",["td","input"],["td","Set Input common props"],["td","{ autoComplete?: string }"],["td","-"],["td","4.2.0"]],["tr",["td","locale"],["td","Language package setting, you can find the packages in ",["a",{title:null,href:"http://unpkg.com/antd/lib/locale/"},"antd/lib/locale"]],["td","object"],["td","-"],["td"]],["tr",["td","pageHeader"],["td","Unify the ghost of PageHeader, ref ",["a",{title:null,href:"/components/page-header"},"PageHeader"]],["td","{ ghost: boolean }"],["td","true"],["td"]],["tr",["td","prefixCls"],["td","Set prefix className (cooperated with ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/2c6c789e3a9356f96c47aea0083f5a15538315cf/components/style/themes/default.less#L7"},"@ant-prefix"],")"],["td","string"],["td",["code","ant"]],["td"]],["tr",["td","renderEmpty"],["td","Set empty content of components. Ref ",["a",{title:null,href:"/components/empty/"},"Empty"]],["td","function(componentName: string): ReactNode"],["td","-"],["td"]],["tr",["td","space"],["td","Set Space ",["code","size"],", ref ",["a",{title:null,href:"/components/space"},"Space"]],["td","{ size: ",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]," ","|"," ",["code","number"]," }"],["td","-"],["td","4.1.0"]],["tr",["td","virtual"],["td","Disable virtual scroll when set to ",["code","false"]],["td","boolean"],["td","-"],["td","4.3.0"]]]],["h2","FAQ"],["h4","How to contribute a new language?"],["p","See ",["a",{title:null,href:"/docs/react/i18n#Adding-newplanguage"},"<Adding new language>"],"."],["h4","Does the locale problem still exist in DatePicker even if ConfigProvider ",["code","locale"]," is used?"],["p","Please make sure you set moment locale or that you don't have two different versions of moment."],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span><span class="token punctuation">;</span>
moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import 'moment/locale/zh-cn';
moment.locale('zh-cn');`]],["h4","Modal throw error when setting ",["code","getPopupContainer"],"?"],["p","Related issue: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/19974"},"https://github.com/ant-design/ant-design/issues/19974"]],["p","When you config ",["code","getPopupContainer"]," to parentNode globally, Modal will throw error of ",["code","triggerNode is undefined"]," because it did not have a triggerNode. You can try the ",["a",{title:null,href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a"},"fix"]," below."],["pre",{lang:"diff",highlighted:` &lt;ConfigProvider
<span class="token deleted">-  getPopupContainer={triggerNode => triggerNode.parentNode}</span>
<span class="token inserted">+  getPopupContainer={node => {</span>
<span class="token inserted">+    if (node) {</span>
<span class="token inserted">+      return node.parentNode;</span>
<span class="token inserted">+    }</span>
<span class="token inserted">+    return document.body;</span>
<span class="token inserted">+  }}</span>
 >
   &lt;App />
 &lt;/ConfigProvider>`},["code",` <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 >
   <App />
 </ConfigProvider>`]]]}}}]);
