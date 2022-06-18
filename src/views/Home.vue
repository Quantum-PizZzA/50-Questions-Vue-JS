<template>
  <div>
    <h3>{{ homeTitle }}</h3>
    <div>
      <router-link to="/signin">
        <button class="waves-effect waves-light btn-large" @click="register">
          Войти
        </button>
      </router-link>
      <h6>или</h6>
      <router-link to="/register">
        <button
          class="waves-effect waves-light btn-small disabled"
          @click="register"
        >
          Зарегистрироваться
        </button>
      </router-link>
      <router-view />
      <div class="container">
        <input type="text" />
      </div>
      <h6>Список товаров</h6>
      <Loader v-if="isLoading" class="loader" />
      <Cases v-else :cases="cases" />
    </div>
  </div>
</template>

<script>
import { onValue, ref } from "firebase/database";
import { database } from "@/firebase";

import Cases from "../components/Cases.vue";
import Loader from "@/components/Loader.vue";
export default {
  components: { Cases, Loader },
  data: () => ({
    // camelCase
    homeTitle: "Добро пожаловать в онлайн витрину",
    count: 0,
    cases: [],
    isLoading: false,
  }),
  created() {
    this.fetchAllData();
  },
  methods: {
    fetchAllData() {
      this.isLoading = true;
      const reference = ref(database, "db-showcase");
      onValue(reference, (snapshot) => {
        this.cases = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          this.cases.push(
            ...Object.values(childData).map((item) => ({
              ...item,
            }))
          );
        });
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
button {
  margin: 30px;
}
</style>
