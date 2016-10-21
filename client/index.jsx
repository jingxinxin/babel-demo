import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Render} from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Router, Route, Link, browserHistory} from 'react-router'
import {LineChart, Line} from 'Recharts';
// import { LineChart } from 'Recharts/src/chart/LineChart';


class index extends Component {
    render() {
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
        </LineChart>
    }
}

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 4567, amt: 2400},
    {name: 'Page C', uv: 280, pv: 1398, amt: 2400},
    {name: 'Page D', uv: 200, pv: 9800, amt: 2400},
    {name: 'Page E', uv: 278, pv: 3908, amt: 2400},
    {name: 'Page F', uv: 189, pv: 4800, amt: 2400},
];

let router = (
    <Router history={browserHistory}>
        <Route path="/" handler={index}>
        </Route>
    </Router>
);

// Render(router,document.getElementById('body'));

ReactDOMServer.renderToString(
    <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
    </LineChart>
);