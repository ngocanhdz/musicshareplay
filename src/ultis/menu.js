import icons from '../ultis/icon';

const {MdOutlineLibraryMusic} = icons;
const {HiChartPie} = icons;
const {BiHomeHeart} = icons;

export const sidebarMenu = [
{
    path: 'unic',
    text: 'Cá nhân',
    icons:<MdOutlineLibraryMusic size={24}/>
},
{
    path: '',
    text: 'Khám Phá',
    icons:<BiHomeHeart size={24}/>
},
{
    path: 'xep-hang',
    text: 'xếp hạng',
    icons:<HiChartPie size={24}/>
},

    
]