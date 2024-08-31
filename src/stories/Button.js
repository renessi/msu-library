import "../06_shared/ui/button/button.scss";

export const createButton = ({
                                 type = "default",
                                 label,
                                 onClick,
                             }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = label;
    btn.addEventListener("click", onClick);

    let mode = '';
    if(type === 'accent') mode = "btn--accent"

    btn.className = ["btn", mode].join(" ");

    return btn;
};