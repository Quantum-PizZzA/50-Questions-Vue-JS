<template>
  <div>
    <ul>
      <strong>
        <div class="row list">
          <div class="col s1" align="left">#</div>
          <div class="col s2">EAN</div>
          <div class="col s2">INN</div>
          <div class="col s2">Цена</div>
          <div class="col s2">Название</div>
          <div class="col s1">Дата</div>
          <div class="col s2">Кнопка</div>
        </div>
      </strong>
      <hr />
      <div v-if="cases.length">
        <Case
          v-for="(ShowCase, i) in cases"
          :key="i"
          :index="i"
          :ShowCase="ShowCase"
        />
      </div>
      <p v-else>Нет задач</p>
      <hr />
    </ul>
  </div>
</template>

<script>
import Case from "@/components/Case.vue";
//firebase
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

// если надо чтобы принимал надо объявить поле props
// если не надо, то не передавай
export default {
  props: {
    cases: { type: Array, default: [] },
  },
  data: () => ({}),
  components: {
    Case,
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // this.fetchData(); //Данные текущего пользователя
      }
    });
  },

  methods: {
    //получать Данные пользователя
    // fetchData() {
    //   this.loadind = true;
    //   const reference = ref(database, "db-showcase/" + auth.currentUser.uid);
    //   onValue(reference, (snapshot) => {
    //     this.ShowCaseS = [];
    //     snapshot.forEach((childSnapshot) => {
    //       const childKey = childSnapshot.key;
    //       const childData = childSnapshot.val();
    //       this.ShowCaseS.push({ id: childKey, ...childData });
    //     });
    //     this.loading = false;
    //   });
    // },
    //получать Все Данные
  },
};
</script>
<style scoped lang="scss">
div {
  margin: 5px 0 5px 0 !important;
}
.list {
  border-radius: 10em;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  align-items: center;

  background: var(--gray2);

  font-size: 9px;
  @media (min-width: 576px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
  }
}
</style>
