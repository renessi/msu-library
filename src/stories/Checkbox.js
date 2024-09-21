import "../06_shared/ui/checkbox/checkbox.scss";

export const createCheckbox = ({ checked = false, label}) => {
    const check = checked ? "checked" : "";

return  `
    <label class="checkbox">
        <input class="checkbox__input" type="checkbox" ${check}> 
        <span class="checkbox__span">${label}</span>
    </label>
`
}