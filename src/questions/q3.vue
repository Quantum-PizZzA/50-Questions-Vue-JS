//props todo добавить

<template>
  <!--  <input :value="inputValue" @input="inputValue = $event.target.value" type="text"/>-->
  <input v-model="inputValue" type="text" />
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped></style>
