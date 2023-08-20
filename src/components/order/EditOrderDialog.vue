<template>
  <Dialog
    :visible="visible"
    modal
    header="編輯品項"
    :style="{ width: '40rem' }"
    @update:visible="close"
  >
    <OrderForm :data="data" @on-submit="onSubmit" />
  </Dialog>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { editOrder } from "@/service/OrderService";
import OrderForm from "./OrderForm.vue";
import { TOrder } from "@/model/order";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object as PropType<TOrder | null>,
    default: () => ({})
  }
});
const emit = defineEmits(["updateList", "close"]);

const close = () => {
  emit("close", false);
};

const onSubmit = (data: TOrder) => {
  if (props.data) {
    const { id } = props.data;
    editOrder(id, {
      ...data,
      price: +data.price
    }).then(() => {
      emit("updateList");
      close();
    });
  }
};
</script>

<style scoped></style>
