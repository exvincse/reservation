<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="item in roomdata" :key="item.id">
          <div class="card" style="width: 18rem;">
            <img :src="item.imageUrl" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">平日價錢:{{item.normalDayPrice}}</p>
              <p class="card-text">假日價錢:{{item.holidayPrice}}</p>
              <a href="#" class="btn btn-primary"
                @click.prevent="gomoreroom(item.id)">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomdata: [],
    }
  },
  created() {
    this.getroom();
  },
  methods: {
    getroom () {
      const api = `${process.env.VUE_APP_APIPATH}/rooms`;
      this.$http.get(api, {
        headers: {
          'Accept':'application/json',
          'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        this.roomdata = response.data.items;
      });
    },
    gomoreroom (id) {
      this.$router.push(`/moreroom/${id}`)
    }
  },
};
</script>
