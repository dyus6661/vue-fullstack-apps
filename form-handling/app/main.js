const InputForm = {
  template: `
  <div class="input-form">
    <form @submit="submitForm" class="ui form">
      <div class="field">
        <input v-model="newItem" type="text" placeholder="Add an item!">
      </div>
      <button class="ui button">Submit</button>
    </form>
    <div class="ui segment">
      <h4 class="ui header">Items</h4>
      <ul v-if="items.length">
        <li v-for="item in items" class="item">{{ item }}</li>
      </ul>
      <p v-else>There is no items in the array!</p>
    </div>
  </div>  
  `,
  data() {
    return {
      newItem: "",
      items: []
    }
  },
  methods: {
    submitForm(e) {
      this.items.push(this.newItem);
      this.newItem = "";
      e.preventDefault();
    }
  }
};

const app = new Vue({
  components: {
    "input-form": InputForm
  }
});
app.$mount("#app");