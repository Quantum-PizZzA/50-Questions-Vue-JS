<template>
  <div class="row item">
    <div class="col s1" align="left">{{ index + 1 }}</div>
    <div class="col ean s2">{{ ShowCase.EAN.toUpperCase() }}</div>
    <div class="col inn s2">{{ ShowCase.INN.toUpperCase() }}</div>
    <div class="col price s2">{{ ShowCase.Price.toUpperCase() }}</div>
    <div class="col name s2" align="left">
      {{ ShowCase.Name.toUpperCase() }}
    </div>
    <div class="col date s1">
      {{ new Date(ShowCase.date.toUpperCase()).toLocaleDateString() }}
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="EditTodo(ShowCase.id)"
        align="center"
      >
        EDIT
      </button>
    </div>
    <div class="col s1">
      <button
        class="btn-floating btn-small waves-effect waves-teal btn-flat waves-light"
        @click="handleDeleteShowCase(ShowCase.id)"
        align="center"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script>
import { ref, remove } from "firebase/database";
import { auth, database } from "@/firebase";

export default {
  props: {
    ShowCase: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    handleDeleteShowCase(id) {
      // удаление задачи
      remove(ref(database, "db-showcase/" + auth.currentUser.uid + "/" + id));
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  border-radius: 10em;
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 12px;
  background: var(--gray2);

  @media (min-width: 576px) {
    padding: 0.5rem 2rem;
  }
}

.ean {
  font-size: 10px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
}

.inn {
  font-size: 10px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
}

.price {
  font-size: 10px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
}

.name {
  font-size: 8px;
  @media (min-width: 576px) {
    font-size: 10px;
  }
}

.date {
  font-size: 8px;
  @media (min-width: 576px) {
    font-size: 10px;
  }
}

.btn-small {
  font-size: 8px;
  @media (min-width: 576px) {
    font-size: 10px;
  }
  margin: 0;
}
</style>
