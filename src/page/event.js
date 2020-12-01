import NumberTime from "../util/number";
import appendNumber from "./appendNumber";
var n = new NumberTime(150);
n.onNumberCreated = function (n, isPrime) {
    appendNumber(n,isPrime);
}
//该模块用于设置事件

var isStart = false;
window.onclick = function () {
    if(isStart) {
        n.stop();
        isStart = false;
    }
    else {
        n.start();
        isStart = true;
    }
}