/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false//如果輸入為負數肯定不是回文
    }
    let a = x.toString().split("")//將a轉換成字串並用""區隔存入陣列中(.split()會自動存入陣列)
    let b = x.toString().split("").reverse()//反轉陣列
    if (a.join("") === b.join("")){//消除""比對字串(.join()把陣列變字串)
        return true
    }
    else{
        return false
    }
};