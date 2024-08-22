import "../06_shared/ui/button/button.scss";

export const createButton = ({
                                    label
                                  }) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.className = 'button';

  return btn;
};
