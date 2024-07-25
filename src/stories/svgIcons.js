import iconUser from '../shared/img/svg/user.svg';
import iconDownload from '../shared/img/svg/download.svg';

import('../shared/img/svg/user.svg').then((item) => {
     console.log(item)
})
export const icons = [
     {name: "User", icon: iconUser },
     {name: "Download", icon: iconDownload}
] 
