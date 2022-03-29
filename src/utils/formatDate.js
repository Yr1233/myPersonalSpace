export default function (time, showTime = false) {
    const dates = new Date(+time);
    const mouth = dates.getMonth().toString().padStart(2, '0');
    const date = dates.getDate().toString().padStart(2, '0');
    const timeDate = `${dates.getFullYear()}-${mouth}-${date}`
    if (showTime) {
        const hour = dates.getHours().toString().padStart(2, '0');
        const min = dates.getMinutes().toString().padStart(2, '0');
        const times = dates.getSeconds().toString().padStart(2, '0');
        return `${timeDate}  ${hour}:${min}:${times}`
    } else {
        return timeDate;
    }
}