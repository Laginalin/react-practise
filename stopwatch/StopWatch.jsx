// 组件划分
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

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
// 状态提升
const MajorClock = ({ milliseconds }) => {
    // TODO: 返回数字时钟的JSX
}

MajorClock.propTypes = {
    milliseconds: PropTypes.number.isRequired
}


const ControlButtons = (props) => {
    // TODO: 返回两个按钮的JSX
}

ControlButtons.propTypes = {
    actived: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}


const SplitTimes = (props) => {
    // TODO: 返回所有计次时间的JSX
}

SplitTimes.propTypes = {
    splits: PropTypes.arrayOf(PropTypes.number)
}

render(<StopWatch />, document.getElementById('root'));
