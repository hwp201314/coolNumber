import radColor from "../util/radColor";
import { getRandom } from "../util/radColor";
import $ from "jquery";

var divContainer = $("#divContainer");
var divCenter = $(".center");
export default function (n, isPrime) {
    var span = $("<span>").text(n);
    if (isPrime) {
        var color = radColor();
        span.css("color", color);
        createCenterPrimeNumber(n, color);
    }
    divContainer.append(span);
    //产生中间数字
    createCenterNumber(n);
}

function createCenterNumber(n) {
    divCenter.text(n);
}
/**
 * 在中间产生一个素数
 */
function createCenterPrimeNumber(n, color) {
    var div = $("<div>").addClass("center").css("color", color).text(n);
    $("body").append(div);
    //加入div后，强行让页面渲染
    getComputedStyle(div[0]).left; //只要读取某个元素的位置或尺寸信息，则会导致浏览器重新渲染reflow
    div.css("transform", `translate(${getRandom(-260, 260)}px, ${getRandom(-260, 260)}px)`).css("opacity", 0);
}