<template>
  <Dialog
    :visible="visible"
    modal
    header="Edit Order"
    :style="{ width: '40rem' }"
    @update:visible="close"
  >
    <OrderForm :data="data" @on-submit="onSubmit" />
  </Dialog>
</template>

<script setup lang="ts">
import { editOrder } from "@/service/OrderService";
import OrderForm from "./OrderForm.vue";
import { TOrder } from "@/model/order";

const props = defineProps<{ visible?: boolean; data: TOrder | null }>();
const emit = defineEmits(["updateList", "close"]);

const close = () => {
  emit("close", false);
};

const onSubmit = (data: TOrder) => {
  if (props.data) {
    const { id } = props.data;
    editOrder(id, data).then(() => {
      emit("updateList");
      close();
    });
  }
};
</script>

<style scoped></style>
