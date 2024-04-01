<script lang="js">
export default {

  computed: {
      getHistory() {
        return JSON.parse(localStorage.getItem("paymentHistory"))
      },
    },

    methods: {
      formatCost(value) {
        let cents = value.toString().slice(-2);
        let dollars = value.toString().slice(0, -2);
        return dollars + '.' + cents;
      }
    }

}
</script>

<template>
  <div>
    <div v-for="(order, index) in getHistory" :key="index">
      <span style="margin-right:10px; font-size:x-large;">{{order.name}}</span>
      <span style=" font-size:x-large;">${{formatCost(order.cost)}}</span>
    </div>
  </div>
</template>