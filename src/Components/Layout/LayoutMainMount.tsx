import { Outlet } from "react-router-dom";
import LayoutMainHeader from "./LayoutMainHeader";
import LayoutMainFooter from "./LayoutMainFooter";
import { darkTheme } from "../../Theme";

export default function LayoutMainMount(  ) {
    return (
        <div style={mainStyle}>
            <LayoutMainHeader />
            <div className="container">
                <Outlet />
            </div>
            <div style={{position: 'absolute', bottom: 0}}>
                <LayoutMainFooter />
            </div>
        </div>
        
    )
}

const mainStyle = {
    backgroundColor: darkTheme.palette.background.default, 
    minHeight: '100vh',
    color: 'white'
}