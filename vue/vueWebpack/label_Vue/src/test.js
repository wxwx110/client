
//Node中向外暴露成员
//module.exports={}

//在ES6中通过规范的形式 规定了ES6中导入和导出模块

//ES6 中导入模块 
//imoprt 模块名 from '模块标识'   import '模块路径'

//ES6中，使用export default 和 export  向外暴露成员
// export default{
//     name:'aaa',
//     age:'20'
// }

//或者可以用如下方式暴露

var info={
    name:'aaa',
    age:'20'
}
export default info

//在NODE中使用var 名称=require('模块标识')
//module.exports 和exports来暴露成员
//注意在一个模块中只允许向外暴露一次 export default 接收方可以用自定义名称接收

//在一个模块中可以同时用export default 和 export 暴露成员
//使用使用export 暴露时，接收方只能使用{title}的形式接收
//这种形式叫按需导出，且可以导出多个，但是接收方必须与暴露方同名可以使用{title as mytitle}来改变接收名
//且可以部分接收

export var title='小行星'
export var title2='super'
export var title3='小太阳'



