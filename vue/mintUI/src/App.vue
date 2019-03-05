<template>
    <div>
        <h1>这是App组件</h1>
        <mt-button type="primary" size="large">default</mt-button>
         <mt-button type="primary" size="small" >default</mt-button>
          <mt-button type="primary" plain icon="back" @click='show'>default</mt-button>


        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
        <router-view>
            
        </router-view>
    </div>
</template>
<script>
//js组件，需要导入后才能使用
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            msg:'提示信息提示信息提示信示信息'
        }
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            let closeInstance=this.show();
            setTimeout(() => {
               closeInstance.close();
            }, 3000);
        },
        show(){
           let closeInstance= Toast({
                message: this.msg,
                position: 'middle',
                duration: 3000,

                 iconClass: 'glyphicon glyphicon-heart',
                 //自定义弹出框样式
                 className:'mytoast'
            });
            //或者可以在data区设置一个变量得到closeInstance
            return closeInstance;

        }
    }

}
</script>

