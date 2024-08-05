import "./roundCheckbox.css";

export const createRoundCheckbox = ({ checked = false }) => {
    const check = checked ? "checked" : "";

    return `<div class="round-checkbox-container"><input type="checkbox" class="round-checkbox" ${check}><label class="checkbox-label"><svg class="checkbox-icon" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.55455 6.87388C3.61422 6.941 3.71911 6.941 3.77878 6.87388L9 1" stroke-width="2"/></svg></label></div>`;
};
