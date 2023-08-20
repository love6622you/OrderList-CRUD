<template>
  <Dialog
    :visible="visible"
    modal
    header="新增品項"
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

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
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
