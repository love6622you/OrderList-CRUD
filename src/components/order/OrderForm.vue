<template>
  <form @submit.prevent="onSubmit">
    <Input name="name" label="品項" placeholder="請輸入品項名稱" />
    <Input name="price" label="價格" placeholder="請輸入價格" />
    <RadioGroup label="尺寸" :radioList="sizeGroups" />
    <Input name="note" label="備註" />
    <p class="text-right text-gray-400">
      {{ values.note?.length }} / {{ NOTE_MAX_LENGTH }}
    </p>

    <div class="w-full text-center">
      <Button type="submit">送出</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
const sizeGroups = [
  {
    name: "S",
    value: "S"
  },
  {
    name: "M",
    value: "M"
  },
  {
    name: "L",
    value: "L"
  }
];

import { PropType, computed, onMounted } from "vue";
import { useForm } from "vee-validate";
import { orderFormSchema } from "@/model/formSchema";
import { TOrder } from "@/model/order";
import { toTypedSchema } from "@vee-validate/zod";
import Input from "@/components/formFiled/Input.vue";
import RadioGroup from "../formFiled/RadioGroup.vue";
import { NOTE_MAX_LENGTH } from "@/constant/input";

const props = defineProps({
  data: {
    type: Object as PropType<TOrder | null>,
    defualt: () => ({})
  }
});
const emits = defineEmits(["onSubmit"]);

const validationSchema = toTypedSchema(orderFormSchema);
const { handleSubmit, isSubmitting, setFieldValue, values } = useForm({
  validationSchema
});

const onSubmit = handleSubmit((values) => {
  if (isSubmitting) {
    emits("onSubmit", values);
  }
});

onMounted(() => {
  if (props.data) {
    const { name, price, size, note } = props.data;
    setFieldValue("name", name);
    setFieldValue("price", String(price));
    setFieldValue("size", size);
    setFieldValue("note", note);
  }
});
</script>

<style scoped></style>
