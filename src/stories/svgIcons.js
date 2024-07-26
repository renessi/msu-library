import iconUser from '../shared/img/svg/user.svg';
import iconDownload from '../shared/img/svg/download.svg';
import IconArrowRight from '../shared/img/svg/arrow-right.svg';
import IconCopy from '../shared/img/svg/copy.svg';
import IconCheck from '../shared/img/svg/check.svg';
import IconTick from '../shared/img/svg/tick.svg';
import IconSearch from '../shared/img/svg/search.svg';
import IconUp from '../shared/img/svg/chevron-up.svg';
import IconDown from '../shared/img/svg/chevron-down.svg';



import('../shared/img/svg/user.svg').then((item) => {
     console.log(item)
})
export const icons = [
     {name: "User", icon: iconUser },
     {name: "Download", icon: iconDownload},
     {name: "ArrowRight", icon: IconArrowRight},
     {name: "Copy", icon: IconCopy},
     {name: "Check", icon: IconCheck},
     {name: "Tick", icon: IconTick},
     {name: "Search", icon: IconSearch},
     {name: "Up", icon: IconUp},
     {name: "Down", icon: IconDown},
] 
