import React, {useState} from "react";
import s from './Layout.module.scss';
import MenuToggle from "../navigation/MenuToggle";
import Header from "../../Navigation/Pages/Header/Header";
import Routes from "../../Navigation/Routes/Routes";
import HeaderBur from "../../Navigation/Pages/Header/HeaderBur";


type LayoutType = {
    children?: any
}

const Layout = (props: LayoutType) => {

    const [menu, setMenu] = useState(false)
    const toggleMenuHandler = () => {
        setMenu(!menu)
    }
    const menuCloseHandler = () => {
        setMenu(false)
    }


    return (
        <div className={`${s.Layout}}`}>
            <Header/>
            <HeaderBur isOpen={menu}
                       onClose={menuCloseHandler}/>
            <Routes/>
            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />
        </div>
    )
}

export default Layout;