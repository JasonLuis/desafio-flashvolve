<template>
  <q-chat-message
    :name="props.name"
    name-html
    :avatar="avatar"
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
    avatar?: string;
  }>(),
  {
    sent: false,
    avatar: '../../assets/images/bot-image.png'
  }
);

const color = computed(() => {
  return props.sent ? 'amber-7' : 'primary';
});

const avatar = computed(() => {
  return new URL(props.avatar, import.meta.url).href;
});
</script>
