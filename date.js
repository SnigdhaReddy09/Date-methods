// // get
let date=new Date()
console.log(date.getFullYear())
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes())
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());

// set
function alarmRing(){
    let presentTime=new Date()
    let alarmTime=new Date()
    alarmTime.setHours(10)
    alarmTime.setMinutes(25)
    alarmTime.setSeconds(0)
    let timediff=alarmTime-presentTime
    console.log(timediff)
    setTimeout(()=>{
        alert("alarm is ringing")
    },timediff)
    console.log("alarm will ring at 10:25")
}
alarmRing()

// additional
console.log(date.toDateString())
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

