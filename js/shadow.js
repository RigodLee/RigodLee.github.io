// $("#framework-info").attr("style","display:none;");//隐藏div

$(document).ready(function(e){
        $('.framework-info').html('<span id="htmer_time" style="color: red;"></span>');
    })

// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2019 - 2020 <i style="class="fas fa-infinity faa-pulse animated"></i> shadow');
})


function secondToDate(second) {
if (!second) {
return 0;
}
var time = new Array(0, 0, 0, 0, 0);
if (second >= 365 * 24 * 3600) {
time[0] = parseInt(second / (365 * 24 * 3600));
second %= 365 * 24 * 3600;
}
if (second >= 24 * 3600) {
time[1] = parseInt(second / (24 * 3600));
second %= 24 * 3600;
}
if (second >= 3600) {
time[2] = parseInt(second / 3600);
second %= 3600;
}
if (second >= 60) {
time[3] = parseInt(second / 60);
second %= 60;
}
if (second > 0) {
time[4] = second;
}
return time;
}

function setTime() {
var create_time = Math.round(new Date(Date.UTC(2015, 07, 09, 6, 6, 6)).getTime() / 1000);
var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
currentTime = secondToDate((timestamp - create_time));
currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
+ currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
+ '秒';
document.getElementById("htmer_time").innerHTML = currentTimeHtml;
} setInterval(setTime, 1000);