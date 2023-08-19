<template>
  <Dialog
    :visible="visible"
    modal
    header="Add Order"
    :style="{ width: '40rem' }"
    @update:visible="close"
  >
    <OrderForm @on-submit="onSubmit" />
  </Dialog>
</template>

<script setup lang="ts">
import { generateRandomId } from "@/utils/index";
import { addOrder } from "@/service/OrderService";
import OrderForm from "./OrderForm.vue";
import { TOrder } from "@/model/order";

const props = defineProps<{ visible?: boolean }>();
const emit = defineEmits(["updateList", "close"]);

const close = () => {
  emit("close", false);
};

const onSubmit = (data: TOrder) => {
  addOrder({
    ...data,
    id: generateRandomId(),
    price: +data.price
  }).then(() => {
    emit("updateList");
    close();
  });
};
</script>

<style scoped></style>
