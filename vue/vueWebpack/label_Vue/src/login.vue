<template>
    <div>
        
        <h1>这事使用.vue文件定义的组件 ---{{msg}} </h1>
    </div>
</template>

<script>
    export default{
        data(){  //组件的data必须是function
            return{
                msg:'这事组件的数据123'
            }
        },
        methods: {
            show(){
                console.log("调用了login.vue中的show方法");
            }
        },
    }
</script>

<style lang="">
    
</style>