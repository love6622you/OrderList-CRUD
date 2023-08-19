<template>
  <div class="flex flex-col gap-y-1">
    <div>{{ label }}</div>

    <div class="flex flex-wrap gap-3">
      <div
        v-for="radio in radioList"
        :key="radio.name"
        class="flex align-items-center"
      >
        <RadioButton
          v-model="value"
          :inputId="radio.name"
          :name="radio.name"
          :value="radio.value"
        />
        <label :for="radio.name" class="ml-2">{{ radio.value }}</label>
      </div>
    </div>

    <small id="text-error" class="text-xs text-right text-red-600">
      {{ errorMessage || "&nbsp;" }}
    </small>
  </div>
</template>

<script setup lang="ts">
type TRadio = {
  name: string;
  value: string;
};

import { useField } from "vee-validate";
import { PropType } from "vue";

const props = defineProps({
  radioList: {
    type: Array as PropType<TRadio[]>,
    default: []
  },
  label: {
    type: String,
    default: "尺寸"
  }
});

const { value, errorMessage } = useField("size", undefined);
</script>
