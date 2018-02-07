<template>
    <div class="abc">
        <input type="text"  :value="names">
        <div @click="len">{{names}}</div>
        <button @click="clicks">按钮</button>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data(){
            return {
                names:this.$store.state.names,
            }
        },
        methods:{
            clicks(){
                this.$store.commit("change");
            },

            len(){
                console.log(this.$store.state)   //这里查看有没有通过gettter方法派生出来新的state
            }
        },
        computed:mapGetters([
            'arrLength'
        ])
    }
</script>

<style scoped>

</style>