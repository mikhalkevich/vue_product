<template>
  <select v-model="SelectedValue" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.id" :value="option.id">{{option.name}}</option>
  </select>
</template>

<script>
export default {
  name: "FormSelect",
  data(){
    return {SelectedValue:''}
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(){
      this.$emit('update:modelValue', this.SelectedValue)
    }
  }
}
</script>

<style scoped>

</style>