//输入数字
function setNum(context, thisnum){
    //如果输入数字前，为运算符号
    if(context.data.flag == 1){
        context.setData({flag: 0, sd: "0"});
    }
    //如果sd为0
    if(context.data.sd == "0"){
        var str = thisnum;
    }else{
        if(context.data.sd.length < 18){
            var str = context.data.sd + thisnum; 
        }else{
            var str = context.data.sd;
        }
    }
    context.setData({sd: str});
}
//plus
function plus(context){
    var n = context.data.sd;
    context.setData({num1: n, flag: 1, symbol: 'plus'});
}
//minus
function minus(context){
    var n = context.data.sd;
    context.setData({num1: n, flag: 1, symbol: 'minus'});
}
//times
function times(context){
    var n = context.data.sd;
    context.setData({num1: n, flag: 1, symbol: 'times'});
}
//divide
function divide(context){
    var n = context.data.sd;
    context.setData({num1: n, flag: 1, symbol: 'divide'});
}
//clean
function clean(context){
    context.setData({sd: '0', num1: 0, flag: 0, symbol: ''});
}
//back
function back(context){
    var str1 = context.data.sd;
    var str2 = str1.substring(0,str.length-1);
    if(str2.length > 0){
        context.setData({sd: str2});
    }
}
//point
function setPoint(context){
    
    var str1 = context.data.sd + '';
    if(str1.indexOf('.') > 0){
        var str2 = str1;
    }else{
        var str2 = str1 + '.'; 
    }
    context.setData({sd: str2});
}
//equal
function equal(context){
    var n1 = context.data.num1;
    var n2 = context.data.sd;
    var res = '0';
    switch(context.data.symbol){
        case 'plus': 
            res = n1 + n2;
            break;
        case 'minus':
            res = n1 - n2;
            break;
        case 'times':
            res = n1 * n2;
            break;
        case 'divide':
            res = ni / n2;
            break;
        default:
            break;
    };
    context.setData({sd: res+'', num1: 0});
}
//模块化
module.exports={
    setNum: setNum,
    plus: plus,
    minus: minus,
    times: times,
    divide: divide,
    clean: clean,
    back: back,
    setPoint: setPoint,
    equal: equal
}