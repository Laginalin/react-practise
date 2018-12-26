// 组件划分
import React, { Component } from 'react';
import { render } from 'react-dom';


class StopWatch extends Component {
    render() {
        return (
            <div className="stopwatch">
                <MajorClock />
                <ControlButtons />
                <SplitTimes />
            </div>
        );
    }
}
// 不确定需不需要状态，先将三个组件定义为无状态函数
const MajorClock = (props) => {
    // TODO: 返回数字时钟的JSX
}

const ControlButtons = (props) => {
    // TODO: 返回两个按钮的JSX
}

const SplitTimes = (props) => {
    // TODO: 返回所有计次时间的JSX
}

render(<StopWatch />, document.getElementById('root'));
