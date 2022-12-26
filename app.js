new Vue({
  el: '#app' ,

  data () {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 5,
      prices : [8055, 7900, 8200, 9000, 10000, 10500, 11000],

      pricesWithDays:[
      {day: 'lunes' ,     value:8055},
      {day: 'martes' ,    value:7900},
      {day: 'miercoles' , value:8400},
      {day: 'jueves' ,    value:8400},
      {day: 'viernes' ,   value:8400},
      {day: 'sabado' ,    value:8400},
      {day: 'domingo' ,   value:8400}
      ]
    }
  }
})