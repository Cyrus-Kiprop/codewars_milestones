/** function time_format(time)
{   
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var result= [];
    if (hrs < 10) {
        result.push(`0${hrs}`);
    }else if (hrs > 10) {
        result.push(hrs);
    }else if (mins < 10) {
        result.push(`0${mins}`);
    }else if (hrs > 10) {
        result.push(mins);
    }else if (secs < 10) {
        result.push("0" + secs);
    }else if (hrs > 10) {
        result.push(secs);
    }
return result;
}
console.log(time_format(5));**/
function time_format(time)
{   
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var result= [];
    result.push(hrs);
    result.push(mins);
    result.push(secs);
    let arr = [];
    for (let i = 0; i < result.length; i++) {
    if (((result[i]).toString()).length > 0 && ((result[i]).toString()).length < 2 ){
        arr.push(`0${result[i].toString()}`);
        
    }else{
        arr.push(result[i]);
    }
}
    
return arr.join().replace(/\,/gi,":");
}
console.log(time_format(86399));