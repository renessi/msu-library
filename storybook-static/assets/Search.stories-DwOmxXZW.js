import"./arrow-right-CPyRIcXp.js";const u=({label:r})=>{const a=document.createElement("search");return a.innerHTML=`
        <div style="background: rgba(0, 0, 0, 1)">
        <search class="search">
            <form  class="search__form">
                <input
                class="search__input"
                type="search"
                placeholder="Поиск по материалам"
                />
                <button class="search__round">
                <svg>
                    <use href="#icon-arrow-right"></use>
                </svg>
                </button>
            </form>
            </search>
        </div>
        `,a},n={title:"Component/Search",tags:["autodocs"],render:({label:r})=>u({label:r}),argTypes:{label:{control:"text"}}},e={args:{label:"Поиск по материалам"}};var s,t,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Поиск по материалам"
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const l=["DefaultSearch"];export{e as DefaultSearch,l as __namedExportsOrder,n as default};
