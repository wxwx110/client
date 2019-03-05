<template>
    <div>
        <h1>这事Account是Loin组件</h1>
    </div>
</template>

<script>
export default {
    
}
</script>

//通过scoped限定 样式的适用范围仅限该组件以及该组件的子组件
//否则该样式会应用到全局
//scoped 是通过css的属性选择器实现的。 
<style scoped>
div{
    color:red;
}
</style>
