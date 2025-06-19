/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
            let Roman = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
    let key_ = s.split("");//將字串轉成字元並存入陣列
    let value_ = s.split("").map(char => Roman[char])//將字串轉成字再轉成對應的值元並存入陣列
    let total = 0
    
    for (let y = 0;y < key_.length-1;y++){
        if ((key_[y]=== "V" || key_[y] === "L" || key_[y] === "D") &&//判斷V、L、D不能連續2次
        (key_[y] === key_[y+1])){
            console.log("語法錯誤") 
        return null  
        }
    }
     for (let y = 0;y < key_.length-3;y++){
        if (key_[y] === key_[y+1] &&       //判斷同一個字元不能連續出現3次
            key_[y] === key_[y+2] &&
            key_[y] === key_[y+3]){
            console.log("語法錯誤")
        return null  
        }   
     }
    for (let x = 0;x < value_.length;x++){ 
        if (value_[x] < value_[x+1] && x < value_.length-1){//左值<右值則相減
            total -= value_[x]
        }
        else{                          //左值>右值則相加
            total += value_[x]
        }
    } 
        console.log(total); 
        return total  
};
//還未解決一些羅馬數字的嚴謹規則及非法字元問題