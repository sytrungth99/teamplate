import React, {useState, useContext, useLayoutEffect} from "react";
import ContainerLayouts from "./ContainerLayouts";
import AppContext from "AppContext";
import {withRouter} from "react-router-dom";
import { matchRoutes } from "react-router-config"

const MainLayout = (props) => {
    const [layoutOfRoute, setLayoutOfRoute] = useState('Guests');
    const routes = useContext(AppContext);

    // Nếu lấy layout từ state như này khi route thay đổi set lại state nó sẽ không sử
    // dụng được lazy load route, do đó phải set layout tử hooks của redux.
    useLayoutEffect(() => {
        (() => {
            const matched = matchRoutes(routes, props.location.pathname)[0];
            console.log('props:',props)
            console.log('day la props.location.pathname',props.location.pathname);
            console.log('day la matched',matched);
            if ( matched && matched.route.settings ) {
                const {layout} = matched.route.settings;
                setLayoutOfRoute(layout);
            }
        })();
    }, [props.location.pathname, routes]);

    const Layout = ContainerLayouts[layoutOfRoute];
    return (
        <Layout {...props}/>
    );
}

export default withRouter(React.memo(MainLayout));
