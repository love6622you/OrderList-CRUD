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
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import Input from "@/components/formFiled/Input.vue";

const emits = defineEmits(["onSubmit"]);

const validationSchema = toTypedSchema(
  zod.object({
    name: zod
      .string({
        required_error: "品項名稱必填"
      })
      .nonempty({ message: "該欄位不能為空" }),
    price: zod
      .string({
        required_error: "價格必填"
      })
      .nonempty({ message: "該欄位不能為空" }),
    size: zod
      .string({
        required_error: "尺寸必填"
      })
      .nonempty({ message: "該欄位不能為空" }),
    note: zod.string().optional()
  })
);

const { handleSubmit, isSubmitting } = useForm({
  validationSchema
});

const onSubmit = handleSubmit((values) => {
  if (isSubmitting) {
    emits("onSubmit", values);
  }
});
</script>

<style scoped></style>
