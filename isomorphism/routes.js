
/*React 基础依赖*/
import React from 'react';
import {Route, IndexRoute} from 'react-router';
/*endregion */

/*region 页面级组件*/
import Home from './pages/Home';
/*endregion */

// 无状态（stateless）组件，一个简单的容器，react-router 会根据 route
// 规则匹配到的组件作为 `props.children` 传入
const App = (props) => {
    return (
        <div>{props.children}</div>
    );
};


export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
);