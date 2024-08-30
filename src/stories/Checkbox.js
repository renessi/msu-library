import "../06_shared/ui/checkbox/checkbox.scss"

export const createCheckbox = ({ checked = false, label}) => {
    const check = checked ? "checked" : "";


return  `<div><input type="checkbox" class="checkbox" ${check}><label assets
<svg class="checkbox__img" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="none">
<path d="M19 5L8.6875 16L4 11" stroke="url(#paint0_linear_176_9088)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}