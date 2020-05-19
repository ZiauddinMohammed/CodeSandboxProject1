<template>
  <div class="details">
    <h2>Game :: {{SportName}}</h2>
    <ul>
      <li
        v-for="item in Object.keys(details)"
        :key="item"
        style="text-align:left"
      >{{item}} :: {{details[item]}}</li>
    </ul>
    <button @click="$router.push('/')">Home Page</button>
  </div>
</template>

<script>
import data from "../../Data.json";
export default {
  name: "Details",
  props: ["SportName"],
  data: function() {
    return {
      Sport: this.SportName,
      details: {}
    };
  },
  created: function() {
    data.forEach(item => {
      if (item.Name === this.SportName) {
        this.details = item;
      }
    });
  }
};
</script>