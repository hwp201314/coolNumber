/**
 * 判断是否是素数
 * 只能被1和自身整除
 * @param {*} n 
 */
export default function(n) {
    if(n < 2) {
        return false;
    }
    for(let i =2; i <= n-1; i++) {
        if(n % i == 0) { 
            //发现2到n-1之间有一个数能整除n，故这个n不是素数
            return false;
        }
    }
    return true;
}