<template>
  <q-chat-message
    :name="props.name"
    name-html
    avatar="https://cdn.quasar.dev/img/avatar5.jpg"
    :text="[props.message]"
    :stamp="props.stamp"
    :sent="!props.sent"
    :bg-color="color"
    :text-color="props.sent ? 'black' : 'white'"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    message: string;
    stamp: string;
    sent?: boolean;
  }>(),
  {
    sent: false
  }
);

const color = computed(() => {
  return props.sent ? 'amber-7' : 'primary';
});
</script>
