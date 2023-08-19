<template>
  <div class="text-left text-sm mb-4">
    <label v-if="name" :for="name" class="text-base text-primary/70">
      {{ label }}
    </label>
    <InputText
      class="px-4 mt-1 focus:outline-none"
      :type="type"
      :id="name"
      :name="name"
      :value="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleChange"
      @blur="handleBlur"
      @change="onChange"
      @keyup="onChange"
    />

    <p
      v-show="errorMessage && meta.touched && !meta.valid"
      class="text-xs text-right text-red-600"
    >
      {{ errorMessage }}
    </p>
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
  handleBlur,
  handleChange,
  meta
} = useField(props.name, undefined, {
  initialValue: props.value
});

const onChange = (event: any) => {
  const val = event.target.value;
  handleChange(val);
};
</script>

<style scoped lang="scss"></style>
