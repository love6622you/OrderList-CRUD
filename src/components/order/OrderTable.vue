<template>
  <DataTable :value="orderList">
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg sm:text-2xl">訂單列表</h2>
        <Button @click="setDialog(true, 'add')">新增品項</Button>
      </div>
    </template>

    <Column field="name" header="品項" class="min-w-[200px] break-words" />
    <Column field="price" header="價格" class="min-w-[100px]" />
    <Column field="size" header="尺寸" class="min-w-[100px]" />
    <Column field="note" header="備註" class="min-w-[300px] break-words" />
    <Column>
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
