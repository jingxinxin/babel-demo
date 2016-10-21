import React from 'react';
import {Route} from 'react-router';

// 无状态（stateless）组件，一个简单的容器，react-router 会根据 route
// 规则匹配到的组件作为 `props.children` 传入
const Container = (props) => {
    return (
        <div>{props.children}</div>
    );
};

export default(
    <Route path="/" component={Container}>
        <Route path="list" component={List}/>
        <Route path="item/:id" component={Item}/>
    </Route>
);