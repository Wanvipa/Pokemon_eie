/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    msg: 'Pokemon Ranger',
    list: [],
    page: 0
  },
  methods: {
    getApi: function () {
      var url = 'http://www.pokesnipers.com/api/v1/pokemon.json'
      var that = this
      this.$http.get(url).then(function (res) {
        that.list = res.data.results
        console.log(that.list)
      })
    },
    next: function () {
      this.page++
    },
    previos: function () {
      this.page--
    }
  },
  ready: function () {
    this.getApi()
    var that = this
    setInterval(function () {
      that.getApi()
    }, 5000)
  }
})
console.log(app)
