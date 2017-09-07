var common = {};
Object.extend = function(destination, source) {
for (var property in source) {
    destination[property] = source[property];
}
return destination;
}

function setCookie(name,value) 
{ 
    var Days = 30; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
//读取cookies 
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 

//删除cookies 
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}

/*简单观察者*/
var observerObj = {}
var observer = {
    //简单观察者实现
    /**
     * 注册事件方法
     * @param  {[type]} eventName   事件名
     * @param  {[type]} func  回调方法
     * @return {[type]}       [description]
     */
    register:function(eventName,func,target){
        var observerItemArray = observerObj[eventName];
        var observerItem = {target:target,func:func};
        if(!observerItemArray){ //如果是新注册进来的
            observerItemArray = [observerItem];
        }else{
            //先要检查是否之前已经存在
            var item = null;
            for(var k in observerItemArray){
                item = observerItemArray[k];
                if(item.target == target && item.func==func){
                    return false;
                }
            }
            observerItemArray.push(observerItem);
        }
        observerObj[eventName] = observerItemArray;
    },
    /**
     * 注销方法（如果只传事件名，那么所有事件移除）
     * @param  {[type]} eventName 事件名
     * @param  {[type]} func      [description]
     * @param  {[type]} target    [description]
     * @return {[type]}           [description]
     */
    unRegister:function(eventName,func,target){
        var observerItemArray = observerObj[eventName];
        if(func || target){
            var searchIndex = -1;
            if(observerItemArray){
                var item = null;
                var len = observerItemArray.length;
                for(var i=0;i<len;++i){
                    item = observerItemArray[i];
                    if(item.target == target && item.func==func){
                        searchIndex=i;
                        break;
                    }
                }
                if(searchIndex>=0){
                    observerItemArray.splice(searchIndex,1);
                }
            }
        }else{
            observerObj[eventName]=null;
        }
    },
    /**
     * 触发事件
     * @param  {[type]} eventName 事件名
     * @return {[type]} [description]
     */
    trigger:function(eventName,param){
        var arg = Array.prototype.slice.call(arguments,0);
        arg.shift();//把第一个eventName去掉
        var observerItemArray = observerObj[eventName];
        if(observerItemArray){
            var item = null;
            for(var k in observerItemArray){
                item = observerItemArray[k];
                item.func.apply(item.target,arg);
            }
        }
    }
}


common.setCookie = setCookie;
common.getCookie = getCookie;
common.delCookie = delCookie;
common.observer = observer;

export default common;