<template>
  <div>
    <Navbar />
    <div class="container">
      <Login />
    </div>
  </div>
</template>

<script>
  import Login from '../components/Login'
  import Navbar from '../components/Navbar'
  export default {
    name: 'MailPage',
    components: {Navbar, Login},
    provide() {
      return {
        emails: [
          {id: 1, title: 'delectus aut autem'},
          {id: 2, title: 'quis ut nam facilis et officia qui'},
          {id: 3, title: 'fugiat veniam minus'},
          {id: 4, title: 'et porro tempora'},
          {id: 5, title: 'laboriosam mollitia et enim '},
          {id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis'},
          {id: 7, title: 'illo expedita consequatur quia in'},
          {id: 8, title: 'quo adipisci enim quam ut ab'},
          {id: 9, title: 'molestiae perspiciatis ipsa'},
          {id: 10, title: 'illo est ratione doloremque quia maiores aut'},
          {id: 11, title: 'vero rerum temporibus dolor'},
          {id: 12, title: 'ipsa repellendus fugit nisi'},
          {id: 13, title: 'et doloremque nulla'}
        ]
      }
    }
  }
</script>

<style scoped></style>
