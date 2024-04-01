<!-- eslint-disable vue/return-in-computed-property -->
<script lang="js">
import { mapGetters, mapMutations } from 'vuex'

export default {

  computed: {
      ...mapGetters(['getOrders', 'getTodaysPayer']),

      formatCost() {
        let cents = this.getTodaysPayer.cost.toString().slice(-2);
        let dollars = this.getTodaysPayer.cost.toString().slice(0, -2);
        return dollars + '.' + cents;

      }
    },

  methods: {
      ...mapMutations(['addOrder', 'removeOrder', 'random', 'savePayer']),

      remove(index) {
        this.removeOrder(index)
      },
      
    }

}
</script>

<template>
  <div>
    <div v-for="(order, index) in getOrders" :key="index">
      <div style="display:flex; align-items:center;">
        <v-text-field label="Name" style="padding-right: 10px;" variant="solo" v-model="order.name"></v-text-field>
        <v-text-field label="Drink Cost (USD in cents)" variant="solo" v-model="order.price"></v-text-field>
        <v-btn variant="plain" style="margin-bottom: 20px;" @click="remove(index)">
          Remove
        </v-btn>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <v-btn variant="plain" @click="addOrder()" style="margin-left: -15px;">Add Order</v-btn>
      <v-btn variant="plain" @click="random()">Select Payer</v-btn>
    </div>
    <div>
      <span style="font-size:xx-large; margin-right: 10px;">{{ getTodaysPayer.name }}</span>
      <span style="font-size:xx-large;" v-if="getTodaysPayer.cost">Total Cost: ${{ formatCost }}</span>
      <v-btn variant="plain" v-if="getTodaysPayer.cost" style="margin-bottom: 15px;" @click="savePayer()">Save</v-btn>
    </div>
  </div>
</template>
