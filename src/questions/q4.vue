<template>
  <h2>Вопрос №4</h2>
  <h3>Как работает реактивность во Vue</h3>

  <div id="id">Количество лайков = {{ likes }}</div>
  <button id="btn">Поставить лайк</button>
</template>

<script>
let counter = 0;

/* TODO HTML JS
let btn;
let div;
btn.addEventListener("click", () => {
  counter += 1;
  div.innerText = "Количество лайков = ${counter}";
});*/

export default {
  data() {
    return {
      likes: 0,
    };
  },
};
</script>

<style scoped></style>
