<template>
  <div class="about">
    <button @click.prevent="reservation()">123</button>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
   data() {
     return {
       room: [],
     };
   },
   created() {
     this.getroom();
   },
   methods: {
     getroom () {
      const api = `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`;
      this.$http.get(api, {
        headers: {
          'Accept':'application/json',
          'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        this.room = response.data.room;
      });
     },
     reservation () {
      let data = { 
        name: 'HELL',
        tel: '0987654321',
        'date[]': [ '2019-09-06', '2019-09-07', '2019-09-08' ] 
      }
      const api = `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`;
      this.$http.post(api, data, {
        headers: {
          accept:'application/json',
          authorization:`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        console.log(response);
      });
       let settings = {
        "async": true,
        "crossDomain": true,
        "data": data,
        "url": `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`,
        'dataType': "json",
        "method": "POST",
        "headers": {
          'Content-Type': "application/json",
          "accept": "application/json",
          "authorization": "Bearer EZdh4s1SzggyW6WGqiilybnv1BlVYGg3wIBqE5bo8QoEyD0GX0OCyGopFbOe",
        }
      }
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
     }
   },
}
</script>