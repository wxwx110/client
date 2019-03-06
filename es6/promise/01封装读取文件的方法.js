//需求：封装一个方法，传入文件路径，用这个路径读取文件并返回

const fs=require('fs');
const path=require('path');

//读取文件方法
// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
//     if(err) throw err
//     console.log('dataStr :', dataStr);
// }) 


function  getFileByPath(fpath,callback){
    //由于node的异步机制调用该方法时会放到异步队列
    //因此再外面并不能获取
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
       // if(err) throw err;
       //报错应该更优化的处理可以让callback定义两个参数
       //参数1：err 如果成功返回null
       //参数2：dataStr 如果失败返回undefined
       if(err){
           return callback(err);
       }
        console.log('dataStr :', dataStr);
        //return dataStr;
        callback(null,dataStr);
    }) 
};

var res=getFileByPath(path.join(__dirname,'./files/1.txt'),(err,data)=>{
    if(err){    
        console.log(data);
    }else {
        console.log(data);
    }
});