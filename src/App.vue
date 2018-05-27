<template>
  <div id="app">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="item in items" >
        <p>{{ item.first_name }} -- {{ item.last_name }} -- {{ item.email }}</p>
      </div>
    </div>
  </div>
</template>


<script>
  // import axios from 'axios';
  import data from './data.js'

  export default {
  name: 'app',

    data() {
      return {
        items: [],
        busy: false,

      }
    },
    methods: {

      loadMore: function() {
        this.busy = true;

        setTimeout(() => {

          for (let i = 0, j = 10; i < j; i++) {

            this.items = data
          }
          this.busy = false;
        }, 1000);
      }
    }
}
</script>

<style lang="scss">
  .person {
    background: #ccc;
    border-radius: 2px;
    width: 20%;
    margin: 0 auto 15px auto;
    padding: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 2px;
    }

    p:first-child {
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: 900;
    }

    .text-capitalize {
      text-transform: capitalize;
    }
  }
</style>
