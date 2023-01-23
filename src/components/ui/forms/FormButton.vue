<template>
  <button type="button">{{nameValue??'save'}}</button>
</template>

<script>
export default {
  name: "FormButton",
  props:['nameValue']
}
</script>

<style scoped>

</style>