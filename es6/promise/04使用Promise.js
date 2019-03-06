const fs=require('fs');
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

// 当异步函数调用失败时，如果没有指定失败返回函数，会导致后续的异步操作终止
//例如 getFileByPath('./files/11.txt')
//如果不希望后续操作被终止，可以指定失败回调
//  getFileByPath('./files/11.txt')
//     .then( 
//             (data)=>{
//             console.log('1data :', data);
//             return getFileByPath('./files/2.txt');
//         },
//         (err)=>{
//             console.log('err :', err);
//             //在失败函数中要返回promise
//            return getFileByPath('./files/2.txt');
//         }    
//      ).then(
//         (data)=>{
//             console.log('2data :', data);
//             return getFileByPath('./files/3.txt');
//         }     
//      ).then(
//         (data)=>{
//             console.log('3data :', data);           
//         }     
//      );


//使用catch 可以捕获异常
//一旦一个异步出错，则立即终止，并执行catch定义的函数
//但是注意，此时不能指定reject函数，如果指定会导致
//后续的异步程序继续执行
     getFileByPath('./files/11.txt')
    .then( 
            (data)=>{
            console.log('1data :', data);
            return getFileByPath('./files/2.txt');
        }      
        // ,(err)=>{
        //                 console.log('err :', err);
        //                如果指定了，本代码后面的异步会继续执行
        //                return getFileByPath('./files/2.txt');
        //             }    
     ).then(
        (data)=>{
            console.log('2data :', data);
            return getFileByPath('./files/3.txt');
        }     
     ).then(
        (data)=>{
            console.log('3data :', data);           
        }     
     ).catch((err)=>{

         console.log('my'+err);
     });





console.log(111111);