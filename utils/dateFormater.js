const formatDate = (date) => {
    let resultantDate = '';
    const inputTime = new Date(date);
    const currentTime = new Date();
    const differenceInTime = currentTime.getTime() - inputTime.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log(differenceInTime, differenceInDays);
    if(differenceInDays > 0) {
        resultantDate = Math.round(differenceInDays).toString() + ' days ago';
    } else {
        const time = new Date(differenceInTime);
        resultantDate = time.getHours().toString() + ' hour ago';
    }
    console.log(resultantDate);
    return resultantDate;
}
module.exports = formatDate;