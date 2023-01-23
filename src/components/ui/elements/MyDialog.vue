<template>
<div class="dialog" v-if="show" @click="hideDialog">
  <div @click.stop class="dialog_content">
    <slot>Default</slot>
  </div>
</div>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog(){
      this.$emit('update:show', false);
    }
  }
}
</script>

<style scoped>
.dialog {
  position:fixed;
  display:flex;
  height: 100%;
  top:0;
  left:0;
  right:0;
  background: rgba(0,0,0,0.5);
}
.dialog_content {
  margin: auto;
  background: white;
  border-radius: 16px;
  min-height: 50px;
  width: 600px;
  padding: 20px;
}
</style>