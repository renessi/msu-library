import './lightButton.css';

export const createLightButton = ({
   label
 }) => {
   const btn = document.createElement("button");
   btn.type = "button";
   btn.innerText = label;
   btn.className = 'light-button';

   return btn;
};
