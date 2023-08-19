<template>
  <div class="flex flex-col gap-y-1">
    <label v-if="name" :for="name" class="text-base text-primary/70">
      {{ label }}
    </label>

    <InputText
      class="px-4 focus:outline-none"
      v-model="inputValue"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="handleBlur"
    />

    <small id="text-error" class="text-xs text-right text-red-600">
      {{ errorMessage || "&nbsp;" }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
const props = defineProps({
  type: {
    type: String,
    default: "text"
  },
  value: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: "欄位名稱"
  },
  placeholder: {
    type: String,
    default: ""
  },
  // Custom
  disabled: {
    type: Boolean,
    default: false
  }
});

const {
  value: inputValue,
  errorMessage,
  handleBlur
} = useField(props.name, undefined, {
  initialValue: props.value
});
</script>

<style scoped lang="scss"></style>
