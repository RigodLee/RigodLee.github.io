// $("#framework-info").attr("style","display:none;");//隐藏div

// $(document).ready(function(e){
//         $('.framework-info').html('本站已安全运行了<span id="htmer_time" style="color: #fff;"></span>');
//     })

$(document).ready(function(e){
        $('.framework-info').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
    })

// 设置页脚会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i class="fa-fw fas fa-heart card-announcement-animation cc_pointer"></i> shadow');
})


// function secondToDate(second) {
// if (!second) {
// return 0;
// }
// var time = new Array(0, 0, 0, 0, 0);
// if (second >= 365 * 24 * 3600) {
// time[0] = parseInt(second / (365 * 24 * 3600));
// second %= 365 * 24 * 3600;
// }
// if (second >= 24 * 3600) {
// time[1] = parseInt(second / (24 * 3600));
// second %= 24 * 3600;
// }
// if (second >= 3600) {
// time[2] = parseInt(second / 3600);
// second %= 3600;
// }
// if (second >= 60) {
// time[3] = parseInt(second / 60);
// second %= 60;
// }
// if (second > 0) {
// time[4] = second;
// }
// return time;
// }

// function setTime() {
// var create_time = Math.round(new Date(Date.UTC(2020, 05, 02, 0, 0, 0)).getTime() / 1000);
// var timestamp = Math.round((new Date().getTime() ) / 1000);
// currentTime = secondToDate((timestamp - create_time));
// currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
// + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
// + '秒';
// document.getElementById("htmer_time").innerHTML = currentTimeHtml;
// } setInterval(setTime, 1000);


function show_date_time(){
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("5/2/2020 0:0:0");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML=' <font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
    }
    show_date_time();



$(document).ready(function(e){
    // up酱
    /*添加图片top*/

    /*添加到返回顶部按钮下*/
    document.getElementById("go-up").innerHTML = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/rigodlee/BLOGCDN/img/upDoraemon.gif' title='回到顶部' >";
})