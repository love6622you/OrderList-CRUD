<template>
  <form @submit.prevent="onSubmit">
    <div>
      <Input name="name" label="品項" placeholder="請輸入品項名稱" />
      <Input name="price" label="價格" placeholder="請輸入價格" />
      <Input name="size" label="尺寸" placeholder="請選擇尺寸" />
      <Input name="note" label="備註" />
    </div>

    <button>Submit</button>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useForm } from "vee-validate";
import { orderFormSchema } from "@/model/formSchema";
import { TOrder } from "@/model/order";
import { toTypedSchema } from "@vee-validate/zod";
import Input from "@/components/formFiled/Input.vue";

const props = defineProps<{ data?: TOrder | null }>();
const emits = defineEmits(["onSubmit"]);

const validationSchema = toTypedSchema(orderFormSchema);

const { handleSubmit, isSubmitting, setFieldValue } = useForm({
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
