<template>
  <div v-if="allroom.length">
    <div class="room-bg"
      :style="{backgroundImage:`url(${this.NowRoomMsg.imgurl})`}">
      <div class="d-flex flex-column justify-content-between p-5 h-100">
        <div class="d-flex justify-content-between linear-pos mb-5">
          <div class="white-space p-4">
            White<br>Space
          </div>
          <div class="linear"></div>

          <div class="menu bg-white py-4 px-5">
            <div class="menu-linear"></div>
            <ul class="p-0">
              <li>
                <router-link to="/allroom">ALL Room</router-link>
              </li>
              <li v-for="(item,index) in allroom" :key="item.id">
                <a href="#"
                  @mouseover="more(index,item.name)"
                  @click.prevent="gomoreroom(item.id)">{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <div class="room-number">
            <div class="number linear-pos">
              <div class="number-linear"></div>
              {{this.NowRoomMsg.id}}
            </div>
            <div class="name">{{this.NowRoomMsg.name}}</div>
          </div>
          <div class="msg d-flex flex-column justify-content-between">
            <div>
              <a href="#" class="mr-2 link">
                <i class="fab fa-facebook-square fa-lg"></i>
              </a>
              <a href="#" class="link">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
            </div>
            <div>
              <div class="mb-2">
                <i class="fas fa-phone-alt"></i>
                <span class="ml-2">02-17264937</span>
              </div>
              <div class="mb-2">
                <i class="fas fa-envelope"></i>
                <span class="ml-2">whitespace@whitespace.com.tw</span>
              </div>
              <div>
                <i class="fas fa-home"></i>
                <span class="ml-2">台北市羅斯福路十段30號</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      chooseimg:[
        'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1528908929486-dfaa209c6986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2021&q=80',
        'https://images.unsplash.com/photo-1552902019-a6dddd56544a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2124&q=80',
      ],
      NowRoomMsg: {
        id: '01',
        imgurl: 'https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        name: 'Single Room'
      },
    };
  },
  created() {
    this.getroom();
  },
  computed: {
    ...mapGetters(['allroom']),
  },
  methods: {
    ...mapActions(['getroom']),
    more(id,name) {
      this.NowRoomMsg = {
        id : `0${id + 1}`,
        imgurl: this.chooseimg[id],
        name,
      }
    },
    gomoreroom (id) {
      this.$router.push(`/moreroom/${id}`)
    }
  },
}
</script>