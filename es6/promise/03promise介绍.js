/**
 * 1、promise是一个构造函数 console.dir(Promise)
 * 2、Promise包含两个重要函数
 *      resolve -成功之后回调函数
 *      reject  -失败之后回调函数
 * 3、Promise 原型上包含一个then 函数 
 * 
 * 4、Promise 表示一个异步操作，每次 new Promise表示创建一个异步操作
 * 
 * 5、Promise创建的实例有两个结果
 *    --异步成功，调用回调函数 resolve
 *    --异步失败，调用回调函数 reject
 *    --由于是异步操作，只能通过回调函数，返回执行结果
 * 
 * 6、可以在new Promise上调用.then()方法，预先为resolve、reject指定 函数
 *  var Promise =new Promise(function(){
     //这个function内部写具体的异步操作
    });
 */
 const fs=require('fs');

 //每当new Promise时就会立即执行异步操作中的代码
 var promise =new Promise(function(){
    fs.readFile('./files/2.txt','utf-8',(err,dataStr)=>{
        if(err) throw err;
        console.log('dataStr :', dataStr);
    })
 });

//放到函数中让它只在调用时才执行
 function getFileByPath(filePath){
    var promise =new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',(err,dataStr)=>{
            if(err){
                reject(err);
            } else{
                resolve(dataStr);
            }
        });
     });
     //对外返回promise对象
     return promise;
 };

 //接收到promise对象后，通过.then方法 提供resolve ，reject两个回调函数
 //resolve函数必须传 reject可以省略
 var p=getFileByPath('./files/2.txt').then(
        function(data){
            console.log(data);
        },function(err){
            console.log(err);
        }
     );