<template>
    <div>
        <cmtbox :newsId="this.$route.params.id"></cmtbox>

    </div>
</template>
<script>
import cmtbox from '../subcomponents/comment.vue'

export default {
    components:{
        cmtbox
    }    
}
</script>

<style lang="scss" scoped>

</style>
