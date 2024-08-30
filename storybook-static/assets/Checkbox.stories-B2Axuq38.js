const b=({checked:a=!1,label:s})=>`
    <div style="background: rgba(0,0,0,0.7);">
        <label class="checkbox">
            <input class="checkbox__input" type="checkbox" ${a?"checked":""}> 
            <span class="checkbox__span">${s}</span>
        </label>
    </div>
`,p={title:"Component/Checkbox",tags:["autodocs"],render:({label:a,...s})=>b({label:a,...s}),argTypes:{checked:{control:"boolean"},label:{control:"text"}}},e={args:{checked:!1,label:"Label Text"}},c={args:{checked:!0,label:"Label Text"}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Label Text'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,n,d;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Label Text'
  }
}`,...(d=(n=c.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const h=["Default","Checked"];export{c as Checked,e as Default,h as __namedExportsOrder,p as default};
