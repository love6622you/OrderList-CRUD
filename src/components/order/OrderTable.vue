<template>
  <div>
    <DataTable :value="orderList" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex items-center justify-between">
          <span>Order List</span>
          <Button @click="setDialog(true, 'add')">Add Order</Button>
        </div>
      </template>

      <Column field="name" header="Name"></Column>
      <Column field="price" header="Price"></Column>
      <Column field="size" header="Size"></Column>
      <Column field="note" header="Note"></Column>
      <Column header="Action">
        <template #body="slotProps">
          <Button
            class="mr-4"
            icon="pi pi-pencil"
            outlined
            rounded
            @click="
              () => {
                currentData = slotProps.data;
                setDialog(true, 'edit');
              }
            "
          />
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

  <template v-if="dialogInfo.isShow">
    <AddOrderDialog
      v-if="dialogInfo.type === 'add'"
      :visible="dialogInfo.isShow"
      @updateList="updateOrderList"
      @close="closeDialog"
    />
    <EditOrderDialog
      v-if="dialogInfo.type === 'edit'"
      :visible="dialogInfo.isShow"
      :data="currentData"
      @updateList="updateOrderList"
      @close="closeDialog"
    />
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { getOrderList, deleteOrder } from "@/service/OrderService";
import { TOrder } from "@/model/order";
import AddOrderDialog from "./AddOrderDialog.vue";
import EditOrderDialog from "./EditOrderDialog.vue";
import useDialog from "@/hook/useDialog";

const { dialogInfo, setDialog, closeDialog } = useDialog();

const orderList = ref<TOrder[]>([]);
const currentData = ref(null);

watch(
  () => dialogInfo.value.isShow,
  (val) => {
    if (!val) currentData.value = null;
  }
);

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
