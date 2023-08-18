<template>
  <div class="card">
    test
    <DataTable :value="orderList" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column field="price" header="Price"></Column>
      <Column field="size" header="Size"></Column>
      <Column field="note" header="Note"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getOrderList } from "@/service/OrderService";

onMounted(async () => {
  orderList.value = await getOrderList();
});

const orderList = ref();

// watch(
//   () => orderList.value,
//   (val) => {
//     console.log(val);
//   }
// );
</script>

<style scoped>
/* .card {
  background: var(--surface-card);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
} */
</style>
