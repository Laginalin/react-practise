// 将一个毫秒数输出为 hh:mm:ss.ms格式

const addZero = (time, num) => {
    if (time < Math.pow(10, num - 1)) {
        let result = time;
        for (let i = 1; i < num; i ++ ) {
            result = '0' + result;
        }
        return result.length === num ? result : result.slice(1,);
    }
    return time;
}

const msToTime = (milliseconds) => {
    let time = milliseconds;
    const ms = milliseconds % 1000;
    time = (milliseconds - ms) / 1000;
    const seconds = time % 60;
    time = (time - seconds) / 60;
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    return `${addZero(hours, 2)}:${addZero(minutes, 2)}:${addZero(seconds, 2)}.${addZero(ms, 3)}`
}

export default msToTime
