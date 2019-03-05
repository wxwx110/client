<template>
    <div>
        <h1>这是App组件</h1>

        <button type='button' class="mui-btn mui-btn-royal">
            紫色
        </button>
      
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
  
  

}
</script>

