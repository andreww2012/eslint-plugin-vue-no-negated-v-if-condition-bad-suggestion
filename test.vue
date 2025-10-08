<template>
  <div v-if="!condition" div-attr="foo" div-attr-2>div contents</div>
  <span v-else span-attr="baz" span-attr2>span contents</span>
</template>
