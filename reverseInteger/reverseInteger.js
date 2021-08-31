/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = Math.abs(x);
    var y = 1;
    var ans = 0;
    var rem = 0;
    
    if(x < 0){
        y = -1;
    }
    
    while(num > 0){
        rem = num % 10;
        ans = ans*10 + rem;
        num = (num - rem) / 10;
    }
    
    if (ans >= Math.pow(2, 31)){
        return 0;
    }
    
    return ans*y
};
