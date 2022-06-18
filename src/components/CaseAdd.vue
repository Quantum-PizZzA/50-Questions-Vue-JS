<template>
  <div class="container">
    <div>
      <form class="row">
        <div class="col s12 m4">
          <input v-model="EAN" type="text" placeholder="EAN" />
        </div>
        <div class="col s12 m4">
          <input v-model="INN" type="text" placeholder="INN" />
        </div>
        <div class="col s12 m4">
          <input v-model="Price" type="text" placeholder="Цена" />
        </div>
      </form>
      {{ errors }}

      <form class="row">
        <div class="col s12 m4">
          <input v-model="Name" type="text" placeholder="Название" />
        </div>
        <div class="col s12 m4">
          <input v-model="tele" type="text" placeholder="Телефон" />
        </div>
        <div class="col s12 m4">
          <input v-model="date" type="date" placeholder="Дата" />
        </div>

        <form class="col s12" @submit.prevent="onSubmit">
          <button class="waves-effect waves-light btn" type="submit">
            Создать
            <i class="material-icons right">send</i>
          </button>
        </form>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, push } from "firebase/database";
import { auth, database } from "@/firebase";
import { checkEAN } from "@/javascript/ean";
import { checkINN } from "@/javascript/inn";

export default {
  //начальое значение
  data() {
    return {
      errors: "",
      EAN: "",
      INN: "",
      Price: "",
      Name: "",
      tele: "",
      date: new Date().toISOString().slice(0, 10),
      completed: true,
    };
  },
  created() {},
  methods: {
    onSubmit() {
      this.errors = "";
      if (checkEAN(this.EAN) === false || checkINN(this.INN) === false) {
        this.errors = "EAN и/или INN не проходит проверку";
        return;
      }

      //передача данных в БД
      push(ref(database, "db-showcase/" + auth.currentUser.uid), {
        EAN: this.EAN,
        INN: this.INN,
        Price: this.Price,
        Name: this.Name,
        tele: this.tele,
        date: this.date,
        completed: false,
      });
      //значение после ввода
      this.EAN = "";
      this.INN = "";
      this.Price = "";
      this.Name = "";
      this.tele = "";
      this.date = new Date().toISOString().slice(0, 10);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin-top: 16px;
}

button,
input {
  margin: 0 8px;
  &:focus {
    border-color: #a6267c;
  }
}
</style>
