new Vue({
  el: '#app' ,

  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 1,

      color: '4f4f4f',
      
      price: 8055,
      pricesWithDays:[
      {day: 'lunes' ,     value:8055},
      {day: 'martes' ,    value:7900},
      {day: 'miercoles' , value:8400},
      {day: 'jueves' ,    value:8400},
      {day: 'viernes' ,   value:8400},
      {day: 'sabado' ,    value:8400},
      {day: 'domingo' ,   value:8400}
      ],

      showPrices: false
    }
  },

  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    }
  },

  watch: {
    showPrices(newVal, oldVal) {
        console.log(newVal,oldVal)
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices
      this.color= this.color.split('') . reverse() . join('')
    }
  },
})