import { createStore } from 'vuex'

const store = createStore({
  state: {
    orders: [{ name: "Bob", price: 399 }, { name: "Jeremy", price: 459 }, { name: "Landon", price: 239 }, { name: "John", price: 899 }, { name: "Sara", price: 699 }, { name: "Candace", price: 429 }, { name: "Michelle", price: 399 }],
    history: [],
    todaysPayer: {}
  },
  actions: {},
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getTodaysPayer(state) {
      return state.todaysPayer;
    }
  },
  mutations: {
    addOrder(state) {
      state.orders.push({ name: "", price: 0 })
    },
    removeOrder(state, index) {
      state.orders.splice(index, 1);
    },
    random(state) {
      let paymentHistory = JSON.parse(localStorage.getItem("paymentHistory") || "[]")
      if (paymentHistory.length >= state.orders.length) {
        paymentHistory = []
        localStorage.setItem("paymentHistory", JSON.stringify([]));
      }
      let payer = "";
      if (paymentHistory.length === 0) {
        payer = state.orders[Math.floor(Math.random() * state.orders.length)]
      } else {
        let selectablePayers = state.orders.filter((payer) => {
          return !paymentHistory.some((history) => {
            return payer.name === history.name
          });
        });
        payer = selectablePayers[Math.floor(Math.random() * selectablePayers.length)]
        console.log(payer)
      }
      let allOrderCosts = state.orders.map(order => order.price);
      let total = allOrderCosts.reduce((a, b) => a + b, 0)
      state.todaysPayer = { name: payer.name, cost: total }
    },
    savePayer(state) {
      let paymentHistory = JSON.parse(localStorage.getItem("paymentHistory") || "[]")
      paymentHistory.push(state.todaysPayer);
      localStorage.setItem("paymentHistory", JSON.stringify(paymentHistory));
      state.todaysPayer = {};

    }
  },
});

export default store