Vue.component('CoinDetail' , {
  props: ['coin'],

  data () {
    return {
      showPrices: false,
      value: 0
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices
      this.$emit('change-color',
      this.showPrices ? '33FF84' : '08FAD9')
    }
  },

  computed: {
    title () {
        return `${this.coin.name} - ${this.coin.symbol}`
    },

    convertedValue () {
      if (!this.value) {
        return 0
      }
      return this.value / this.coin.price
    }
  },



  template: `
  <div>
    <img 
      v-on:mouseover="toggleShowPrices" 
      v-on:mouseout="toggleShowPrices" 
      v-bind:src="coin.img" v-bind:alt="coin.name"
    >
  
    <h1
      class="uppercase"
      v-bind:class="coin.changePercent > 0 ? 'green' : 'orange'">
      {{ title }}
      <span v-if= "coin.changePercent >0">👍</span>
      <span v-else-if="coin.changePercent < 0">👎</span>
      <span v-else> 👌</span>

      <span v-on:click="toggleShowPrices">
        {{ showPrices ? '🙈':'🙉'}}</span>
    </h1>
    <input type="number" v-model="value">
    <span>{{ convertedValue }}</span>
    <ul v-show=showPrices>
      <li 
      v-bind:class="{blue: p.value == coin.price, red: p.value > coin.price, green: p.value < coin.price }"
      v-for="(p,i) in coin.pricesWithDays" 
      v-bind:key="p.day">
         {{i}} -{{ p.day }} -{{ p.value}}
      </li>
    </ul>
  </div>
  `
})

new Vue({
  el: '#app' ,

  data () {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 1,
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
      },
      
      color: 'f4f4f4'
      
      
      
      
      
    }
  },
  
    methods: {
      updateColor (color) {
        this.color = color || this.color
          .split('') 
          .reverse() 
          .join('')
     
       
      }
    },
  })

  


    
  