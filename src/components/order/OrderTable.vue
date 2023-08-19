<template>
  <div class="w-full md:w-[50rem] mx-auto">
    <DataTable :value="orderList" scrollable>
      <template #header>
        <div class="flex items-center justify-between">
          <span>Order List</span>
          <Button @click="setDialog(true, 'add')">Add Order</Button>
        </div>
      </template>

      <Column
        field="name"
        header="Name"
        class="max-w-[200px] break-words"
      />
      <Column field="price" header="Price" class="min-w-[100px]" />
      <Column field="size" header="Size" class="min-w-[50px]" />
      <Column
        field="note"
        header="Note"
        class="min-w-[200px] break-words"
      />
      <Column header="Action">
        <template #body="slotProps">
          <div class="flex gap-4">
            <Button
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
          </div>
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
