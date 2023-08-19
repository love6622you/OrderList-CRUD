<template>
  <div>
    <DataTable :value="orderList" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex items-center justify-between">
          <span>Order List</span>
          <Button @click="showDialog">Add Order</Button>
        </div>
      </template>
      <Column field="name" header="Name"></Column>
      <Column field="price" header="Price"></Column>
      <Column field="size" header="Size"></Column>
      <Column field="note" header="Note"></Column>
      <Column header="Action">
        <template #body="slotProps">
          <Button class="mr-4" icon="pi pi-pencil" outlined rounded />
          <Button
            icon="pi pi-trash"
            outlined
            rounded
            severity="danger"
            @click="deleteOrderItem(slotProps.data.id)"
          />
        </template>
      </Column>
    </DataTable>
  </div>

  <AddOrderDialog
    :visible="visible"
    @updateList="updateOrderList"
    @close="closeDialog"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getOrderList, deleteOrder } from "@/service/OrderService";
import { TOrder } from "@/model/order";
import AddOrderDialog from "./AddOrderDialog.vue";

const orderList = ref<TOrder[]>([]);
const visible = ref(false);

const showDialog = () => {
  visible.value = true;
};

const closeDialog = () => {
  visible.value = false;
};
const deleteOrderItem = async (id: string) => {
  await deleteOrder(id);
  await updateOrderList();
};

const updateOrderList = async () => {
  orderList.value = await getOrderList();
};

onMounted(async () => {
  updateOrderList();
});
</script>

<style scoped></style>
