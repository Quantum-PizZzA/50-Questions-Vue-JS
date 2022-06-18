// Фильтр и навигация
<template>
  <div>
    <h5>Добавить товар</h5>
    <router-view />
    <ShowcaseAdd />

    <!-- Фильтр: -->
    <h6>Список моих товаров</h6>

    <Cases :Showcase="Showcase" />
  </div>
</template>

<script>
import Cases from "@/components/Cases.vue";
import ShowcaseAdd from "@/components/CaseAdd.vue";

export default {
  components: {
    Cases,
    ShowcaseAdd,
  },
};
</script>

<style>
.select {
  display: block;
}
</style>
