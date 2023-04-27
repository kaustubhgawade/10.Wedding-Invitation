//days left
let daysLeftBox = document.getElementById('days-left')
let theDate = new Date('03-02-2030');
let currentDate = new Date();
let daysLeft = theDate.getTime() - currentDate.getTime();
daysLeft = Math.ceil(daysLeft/(24*3600*1000));
daysLeftBox.innerText = daysLeft;
console.log(daysLeft);

//floating box
function openFloatingBox(){
    document.getElementById('floating-box').style.display = "block";
    document.getElementsByTagName('main').style.backgroundcolor = "gray";
}
function closeFloatingBox(){
    document.getElementById('floating-box').style.display = "none";
}

// for incrementing the year
let year = currentDate.getFullYear();
let incrNum = document.getElementById('incr-num');
// console.log(year);
incrNum.innerText = year;
