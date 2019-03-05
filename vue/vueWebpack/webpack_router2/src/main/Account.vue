<template>
    <div>
        <h1>这事是Account组件</h1>

        <router-link to="/account/login">Login</router-link>
        <router-link to="/account/reg">Reg</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

//普通style标签只支持普通的css样式如果需要启动scss 和less
//需要设置style的lang属性
<style lang="less">

</style>
