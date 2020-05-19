<template>
  <div class="hello">
    <div class="itemlist">
      <input
        name="searchBar"
        type="text"
        placeholder="Enter Game Name"
        v-model="searchGame"
        v-on:input="modifyList"
      >

      <h3>
        Games Sorted by
        <select v-model="selected" v-on:change="sort">
          <option v-for="option in options" :key="option" v-bind:value="option">{{ option }}</option>
        </select>
      </h3>

      <ul v-if="showItems">
        <li v-for="item in items" :key="item.Rank" :name="item.Name" v-on:click="show">{{item.Name}}</li>
      </ul>
      <ul v-else>
        <li style="background-color:red;color:white">!!! Please Enter Correct Name !!!</li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from "../../Data.json";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      items: ["list", "broad"],
      options: [],
      selected: "",
      searchGame: "",
      showItems: true,
      showItemDetails: "",
      hover: false
    };
  },

  created: function() {
    console.log("Created Called");
    this.items = data;
    this.options = this.items ? Object.keys(this.items[0]) : [];
    this.selected = this.options ? this.options[0] : [];
  },
  methods: {
    sort: function() {
      this.items.sort((item1, item2) =>
        item1[this.selected] > item2[this.selected] ? 1 : -1
      );
    },
    modifyList: function() {
      console.log("modifyList Called");
      const newList = [];
      data.forEach(item => {
        if (
          item["Name"].toLowerCase().includes(this.searchGame.toLowerCase())
        ) {
          newList.push(item);
        }
      });
      this.items = newList;
      this.showItems = this.items.length ? true : false;
    },
    show: function(event) {
      const SportName = event.target.attributes.name.value;
      //console.log(Sportsname);
      this.$router.push({
        path: "/Details/" + SportName
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding: 5px 5px;
  margin: 5px 5px;
  background-color: lightblue;
}
input {
  padding: 5px 5px;
  margin: 5px 5px;
}

.itemlist {
  width: 300px;
  background-color: rgb(160, 156, 156);
}

ul,
h4 {
  list-style-type: none;
  height: 400px;
  overflow: auto;
  margin: 5px 5px;
  padding: 5px;
  background-color: rgb(160, 156, 156);
}
li {
  text-align: left;
  padding: 5px 5px;
  margin: 0 10px 5px 5px;
  background-color: rgb(133, 228, 9);
}

li:hover {
  text-align: left;
  padding: 5px 5px;
  margin: 0 10px 5px 5px;
  background-color: orange;
}

a {
  color: white;
}
</style>
