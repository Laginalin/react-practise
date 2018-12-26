// 组件划分
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import msToTime from '../utils/msToTime.es'
class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: []
        };
    }

    onSplit() {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        });
    }

    onStart() {
        this.setState({
            isStarted: true,
            startTime: new Date(),
            currentTime: new Date()
        });

        this.intervalHandle = setInterval(() => {
            this.setState({ currentTime: new Date() });
        }, 1000 / 60);
    }

    onPause() {
        clearInterval(this.intervalHandle);
        this.setState({
            isStarted: false
        })
    }

    onReset() {
        this.setState({
            startTime: null,
            currentTime: null,
            splits: []
        });
    }
    render() {
        let { isStarted, startTime, currentTime, splits } = this.state;
        return (
            <div className="stopwatch">
                <MajorClock milliseconds={currentTime - startTime}/>
                <ControlButtons
                    actived={isStarted}
                    onPause={this.onPause.bind(this)}
                    onStart={this.onStart.bind(this)}
                    onReset={this.onReset.bind(this)}
                    onSplit={this.onSplit.bind(this)}
                />
                <SplitTimes value={splits}/>
            </div>
        );
    }
}
// 不确定需不需要状态，先将三个组件定义为无状态函数
// 状态提升
const MajorClock = ({ milliseconds = 0 }) => {
    // TODO: 返回数字时钟的JSX
    return <h1>{msToTime(milliseconds)}</h1>
}

MajorClock.propTypes = {
    milliseconds: PropTypes.number.isRequired
}


const ControlButtons = ({ actived, onStart, onPause, onSplit, onReset }) => {
    if (actived) {
        return (
            <div>
                <button onClick={onSplit}>计次</button>
                <button onClick={onPause}>停止</button>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={onReset}>复位</button>
                <button onClick={onStart}>启动</button>
            </div>
        );
    }
}

ControlButtons.propTypes = {
    actived: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
}


const SplitTimes = ({ value = [] }) => {
    // TODO: 返回所有计次时间的JSX
    return value.map((item, index) => <MajorClock key={index} milliseconds={item} />)
}

SplitTimes.propTypes = {
    splits: PropTypes.arrayOf(PropTypes.number)
}

render(<StopWatch />, document.getElementById('root'));
