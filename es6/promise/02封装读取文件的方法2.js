const fs=require('fs');
const path=require('path');

//拆分成功回调和异常回调
function  getFileByPath(fpath,sucessCallback,errCallBack){
  
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
    
       if(err){
           return errCallBack(err);
       }       
     
        sucessCallback(dataStr);
    }) 
};

var res=getFileByPath(path.join(__dirname,'./files/1.txt')
            ,(data)=>{console.log('成功',data);}
            ,(err)=>{console.log('失败',err);}
        );


//需求1：先读1 ，再读2，在读3
//回调嵌套，层级太深。。回调地狱。。
//使用promise解决回调问题，将多层嵌套，改为函数式调用
getFileByPath(path.join(__dirname,'./files/1.txt'),(data)=>{   
        console.log(data);

        getFileByPath(path.join(__dirname,'./files/2.txt'),(data)=>{   
            console.log(data);

            getFileByPath(path.join(__dirname,'./files/3.txt'),(data)=>{   
                console.log(data);
            
        });
        
    });
    
});