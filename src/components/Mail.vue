<template>
  <div class="card">
    <ul class="list">
      <li class="item" :key="i" v-for="i in 10">
        <a href="#">
          {{ i }}
        </a>
      </li>
    </ul>
    <MailBody />
  </div>
</template>

<script>
  import MailBody from './MailBody'
  export default {
    name: 'Mail',
    components: {MailBody}
  }
</script>

<style scoped></style>
