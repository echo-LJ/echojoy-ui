<template>
  <div class="hello">
    <h1 @click="show">{{ msg }}</h1>
    <echojoy-test></echojoy-test>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    show(){
      this.$message.success({
        content: "哈哈哈哈，消失的贼快",
        duration: 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
