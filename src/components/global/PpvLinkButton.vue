<template>
    <router-link :class="['el-button','el-button--'+type,round?'is-round':'',plain?'is-plain':'',circle?'is-circle':'',disabled?'is-disabled':'',size?'el-button--'+size:'']" :replace="replace" :to="to?to:'javascript:void(0);'" :target="target">
        <i v-if="icon" :class="icon"></i>
        <span><slot></slot></span>
    </router-link>
</template>

<script>
  export default {
    name: "PpvLinkButton",
    // 配置同element ui的button组件
    props:{
      to:[String,Object],
      target:String,
      type:{
        type:String,
        default:'default'
      },
      size:String,
      plain:{
        type:Boolean,
        default:false
      },
        replace:{
          type:Boolean,
            default:false
        },
      round:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      },
      disabled:{
        type:Boolean,
        default:false
      },
      icon:String,
    }
  }
</script>

<style scoped>

</style>