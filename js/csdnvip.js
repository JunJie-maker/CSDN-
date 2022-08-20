/*
 * @Author: [JunJie-maker] [2573014631@qq.com]
 * @Date: 2022-08-15 11:58:55
 * @LastEditors: [JunJie-maker] [2573014631@qq.com]
 * @LastEditTime: 2022-08-19 12:01:11
 * @FilePath: \csdn.project.seven\js\csdnvip.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var header = document.getElementById("header");
var downcont = document.getElementById("downcont");
var menu = document.getElementById("menu");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var count = 0;

// 下拉菜单
menu.onclick = function () {
    if (count == 0) {
        header.style.boxShadow = "none";
        downcont.style.marginTop = "150px";
        img1.style.visibility = "hidden";
        img2.style.visibility = "visible";
        count = 1;
    }
    else {
        header.style.boxShadow = "0 2px 4px 0 rgb(0 0 0 / 5%)";
        downcont.style.marginTop = "-200%";
        img2.style.visibility = "hidden";
        img1.style.visibility = "visible";
        count = 0;
    }
}
// 充值选项卡
var tabsbd = document.getElementById("tabsbd");
var ularr1 = tabsbd.getElementsByTagName("ul");
var oList1 = ularr1[0].querySelectorAll("li");
var price1 = document.getElementById("price1").innerHTML;
var price2 = document.getElementById("price2").innerHTML;
var price3 = document.getElementById("price3").innerHTML;
var price4 = document.getElementById("price4").innerHTML;
var money = document.getElementById("money");
var footer = document.getElementById("footer");
var footerhd = document.getElementById("footerhd");
var footerbd = document.getElementById("footerbd");

// 折扣优惠值(有数据库话就可以直接从数据库调用)
var dct1 = 0;
var dct2 = 50;
var dct3 = 0;
var dct4 = 0;
// 创建span
var span = document.createElement("span");
// 明细详情
var detail1 = document.getElementById("detail1");
var detail2 = document.getElementById("detail2");
var detail3 = document.getElementById("detail3");
var num = document.getElementById("num");
var dtl = money.innerHTML;
// 购买信息
var ubl = document.getElementById("user_balance");
var dis_font = document.getElementById("dis_font");
var discount = document.getElementById("discount");
var dic = discount.innerHTML;
// 充值选项卡关联数值
function BL1() {
    for (var j = 0; j < oList1.length; j++) {
        if (oList1[j].style.background = "#fff9f1") {
            oList1[j].style.background = "#fff";
            oList1[j].style.border = "1px solid #e8e8ed";
        }
    }
}

for (var i = 0; i < oList1.length; i++) {
    oList1[i].index = i;
    oList1[i].tag = false;
    var user = ubl.innerHTML;
    var pt = 0;
    oList1[i].onclick = function () {
        if (ubl.innerHTML == "暂无余额") {
            ubl.innerHTML = "暂无余额";
            user = 0;
        }
        else {
            user = ubl.innerHTML;
        }
        function pay1() {
            dtl = money.innerHTML;
            dic = discount.innerHTML;
            detail1.innerHTML = "¥" + dtl;
            detail2.innerHTML = "-¥0.00";
            num.innerHTML = "¥" + dtl;
        }
        function pay2() {

            dtl = money.innerHTML;
            dic = discount.innerHTML;
            detail2.innerHTML = "-¥" + dic;
            num.innerHTML = "¥" + dtl;
        }
        function passtime() {
            if (pt == 0) {
                footerhd.style.visibility = "hidden";
                footerbd.style.marginTop = "-37px";
                footer.style.height = "91px";
            }
            else {
                footerhd.style.visibility = "visible";
                footerbd.style.marginTop = "0px";
                footer.style.height = "128px";
            }
        }
        if (this.tag == false) {
            if (this.index == 0) {
                if (dct1 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price1 * 1).toFixed(0) + ".00";
                    pay1();
                    pt = dct1;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct1).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price1 * 1 - dct1 - user).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price1 * 1).toFixed(0) + ".00";
                    pay2();
                    pt = dct1;
                    passtime();
                }
            }
            else if (this.index == 1) {
                if (dct2 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price2 * 24).toFixed(0) + ".00";
                    pay1();
                    pt = dct2;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct2).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price2 * 24 - dct2).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price2 * 24).toFixed(0) + ".00";
                    pay2();
                    pt = dct2;
                    passtime();
                }
            }
            else if (this.index == 2) {
                if (dct3 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price3 * 12).toFixed(0) + ".00";
                    pay1();
                    pt = dct3;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct3).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price3 * 12 - dct3).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price3 * 12).toFixed(0) + ".00";
                    pay2();
                    pt = dct3;
                    passtime();
                }
            }
            else {
                if (dct4 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price4 * 24).toFixed(0) + ".00";
                    pay1();
                    pt = dct4;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct4).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price4 * 24 - dct4).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price4 * 24).toFixed(0) + ".00";
                    pay2();
                    pt = dct4;
                    passtime();
                }
            }
            BL1();
            this.style.background = "#fff9f1";
            this.style.border = "1px solid #b87100";
            this.tag = true;
        }
        else {
            if (this.index == 0) {
                if (dct1 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price1 * 1).toFixed(0) + ".00";
                    pay1();
                    pt = dct1;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct1).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price1 * 1 - dct1).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price1 * 1).toFixed(0) + ".00";
                    pay2();
                    pt = dct1;
                    passtime();
                }
            }
            else if (this.index == 1) {
                if (dct2 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price2 * 24).toFixed(0) + ".00";
                    pay1();
                    pt = dct2;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct2).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price2 * 24 - dct2).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price2 * 24).toFixed(0) + ".00";
                    pay2();
                    pt = dct2;
                    passtime();
                }
            }
            else if (this.index == 2) {
                if (dct3 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price3 * 12).toFixed(0) + ".00";
                    pay1();
                    pt = dct3;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct3).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price3 * 12 - dct3).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price3 * 12).toFixed(0) + ".00";
                    pay2();
                    pt = dct3;
                    passtime();
                }
            }
            else {
                if (dct4 == 0) {
                    dis_font.innerHTML = "";
                    money.innerHTML = (price4 * 24).toFixed(0) + ".00";
                    pay1();
                    pt = dct4;
                    passtime();
                }
                else {
                    dis_font.appendChild(span);
                    span.setAttribute("id", "discount");
                    discount.innerHTML = (dct4).toFixed(0) + ".00";
                    dic = discount.innerHTML;
                    dis_font.innerHTML = "已减" + dic + "元，";
                    money.innerHTML = (price4 * 24 - dct4).toFixed(0) + ".00";
                    detail1.innerHTML = "¥" + (price4 * 24).toFixed(0) + ".00";
                    pay2();
                    pt = dct4;
                    passtime();
                }
            }
            BL1();
            this.style.background = "#fff9f1";
            this.style.border = "1px solid #b87100";
            this.tag = false;
        }
    }
}

// 选项卡移动
var left = document.getElementById("left");
var right = document.getElementById("right");
var move = document.getElementById("listmove");
left.onclick = function () {
    move.style.marginLeft = "-100px";

}
right.onclick = function () {
    move.style.marginLeft = "0";

}
// 更多支付选项
var paymore = document.getElementById("paymore");
var paybd = document.getElementById("paybd");
paymore.onclick = function () {
    paybd.style.height = "165px";
    this.style.height = "0";
}
// 支付选中
var ularr2 = paybd.getElementsByTagName("ul");
var oList2 = ularr2[0].querySelectorAll("li");
var iMg3 = document.getElementById("img3");
var iMg4 = document.getElementById("img4");
var iMg5 = document.getElementById("img5");
for (var i = 0; i < oList2.length; i++) {
    oList2[i].index = i;
    oList2[i].tag = false;
    oList2[i].onclick = function () {
        // alert(this.index);
        if (this.tag == false) {
            if (this.index == 0) {
                iMg3.style.visibility = "visible";
                iMg4.style.visibility = "hidden";
                iMg5.style.visibility = "hidden";
            }
            else if (this.index == 1) {
                iMg4.style.visibility = "visible";
                iMg3.style.visibility = "hidden";
                iMg5.style.visibility = "hidden";
            }
            else {
                iMg5.style.visibility = "visible";
                iMg4.style.visibility = "hidden";
                iMg3.style.visibility = "hidden";
            }
            this.tag = true;
        }
        else {
            if (this.index == 0) {
                iMg3.style.visibility = "visible";
                iMg4.style.visibility = "hidden";
                iMg5.style.visibility = "hidden";
            }
            else if (this.index == 1) {
                iMg4.style.visibility = "visible";
                iMg3.style.visibility = "hidden";
                iMg5.style.visibility = "hidden";
            }
            else {
                iMg5.style.visibility = "visible";
                iMg4.style.visibility = "hidden";
                iMg3.style.visibility = "hidden";
            }
            this.tag = false;
        }
    }
}
// 关闭弹窗
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
close1.onclick = function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    close1.style.zIndex = "-2";
    popcont1.style.bottom = "-60%";
    popcont2.style.bottom = "-60%";
}
close2.onclick = function () {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    close1.style.zIndex = "-2";
    popcont1.style.bottom = "-60%";
    popcont2.style.bottom = "-60%";
}
// 权益信息弹窗
var contopen = document.getElementById("cont_open");
var popcont1 = document.getElementById("popcont1");
contopen.onclick = function () {
    close1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    close1.style.zIndex = "99";
    popcont1.style.zIndex = "100"
    popcont1.style.bottom = "0";
}
popcont1.onclick = function () {
    close1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    close1.style.zIndex = "99";
    popcont1.style.zIndex = "100"
    popcont1.style.bottom = "0";
}

// 明细弹窗
var detailopen = document.getElementById("detail_open");
var popcont2 = document.getElementById("popcont2");
detailopen.onclick = function () {
    close1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    close1.style.zIndex = "99";
    popcont2.style.zIndex = "100"
    popcont2.style.bottom = "-18%";
}
popcont2.onclick = function () {
    close1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    close1.style.zIndex = "99";
    popcont2.style.zIndex = "100"
    popcont2.style.bottom = "-18%";
}
// 时间倒计时
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
//获取截止时间的时间戳（单位毫秒）
var inputTime = +new Date("2022/08/18 13:20:00");

//调用countDown函数，避免在打开界面后停一秒后才开始倒计时
countDown();
//定时器 每隔一秒变化一次
setInterval(countDown, 1000);
function countDown() {
    //获取当前时间的时间戳（单位毫秒）
    var nowTime = +new Date();
    //把剩余时间毫秒数转化为秒
    if((inputTime - nowTime)<=0){
        inputTime=inputTime+86400000;
        var times = (inputTime - nowTime) / 1000;
    }
    else{
        var times = (inputTime - nowTime) / 1000;
    }
    //计算小时数 转化为整数
    var h = parseInt(times / 60 / 60 % 24);
    //如果小时数小于 10，要变成 0 + 数字的形式 赋值给盒子
    hour.innerHTML = h < 10 ? "0" + h : h;
    //计算分钟数 转化为整数
    var m = parseInt(times / 60 % 60);
    //如果分钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    minute.innerHTML = m < 10 ? "0" + m : m;
    //计算描述 转化为整数
    var s = parseInt(times % 60);
    //如果秒钟数小于 10，要变成 0 + 数字的形式 赋值给盒子
    second.innerHTML = s < 10 ? "0" + s : s;
}
// 滑动隐藏导航栏
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
});