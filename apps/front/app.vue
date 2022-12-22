<template>
  <div>
    <ui-templatesPage></ui-templatesPage>
    <ui-atomsButton :onClick=changeMessage :label=message id="button"></ui-atomsButton>
    <input :value=val>
  </div>
</template>

<script>
let i = 0
const lang = ["Hello world", "Hola mundo", "Bonjour monde"]
export default {
  data () {
    return {
      message: lang[i],
    }
  },
  methods: {
    changeMessage () {
      i = i === lang.length - 1 ? 0 : i + 1
      this.message = lang[i]
    },
  }
}
</script>