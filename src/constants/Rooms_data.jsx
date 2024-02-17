import img_1 from '../assets/single-img1.jpg'
import img_2 from '../assets/duo-img1.jpg'
import img_3 from '../assets/duplex-img1.jpg'
import img_4 from '../assets/family-img1.jpg'
import img_5 from '../assets/micro-img1.jpg'
import img_6 from '../assets/familyduo-img1.jpg'

import { RxPerson } from "react-icons/rx";
import { LiaBedSolid } from "react-icons/lia";

const rooms_data = [
    
    {
        id:1,
        img: img_1,  
        title:"Single cabin",
        sub:"Our single room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "1 Guest",
        bedroom: "1 Bedroom",
        price: "99",
        per: "night",
        button: "View Details",
        link: "/single_cabin"
    },
    {
        id:2,
        img: img_2,  
        title:"Duo cabin",
        sub:"Our duo room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "4 Guests",
        bedroom: "2 Bedrooms",
        price: "129",
        per: "night",
        button: "View Details",
        link: "/duo_cabin"
    },
    {
        id:3,
        img: img_3,  
        title:"Duplex cabin",
        sub:"Our duplex room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "6 Guests",
        bedroom: "3 Bedrooms",
        price: "150",
        per: "night",
        button: "View Details",
        link: "/duplex_cabin"
    },
    {
        id:4,
        img: img_4,  
        title:"Family cabin",
        sub:"Our family room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "8 Guests",
        bedroom: "4 Bedrooms",
        price: "399",
        per: "night",
        button: "View Details",
        link: "/family_cabin"
    },
    {
        id:5,
        img: img_5,  
        title:"Micro cabin",
        sub:"Our micro room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "1 Guest",
        bedroom: "1 Bedroom",
        price: "79",
        per: "night",
        button: "View Details",
        link: "/micro_cabin"
    },
    {
        id:6,
        img: img_6,  
        title:"Family Duo cabin",
        sub:"Our family duo room is the...",
        icon1: <RxPerson size={17}/>,
        icon2:<LiaBedSolid size={17} />,
        guest: "10 Guests",
        bedroom: "5 Bedrooms",
        price: "420",
        per: "night",
        button: "View Details",
        link: "/family duo_cabin",        
    },
]
export default rooms_data