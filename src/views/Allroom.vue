<template>
  <div v-if="allroom.length">
    <div class="messsage">
      <div class="content p-5 linear-pos">
        <div class="white-space p-4 mx-auto">
          White<br>Space
        </div>
        <div class="linear"></div>
        <div class="msg d-flex justify-content-between mt-4">
          <div class="link-border pr-4 mr-4">
            <a href="#" class="mr-2 link">
              <i class="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="#" class="link">
              <i class="fab fa-instagram fa-2x"></i>
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
      <swiper :options="Bswiper">
        <swiper-slide v-for="item in allroom" :key="item.id">
          <div class="room-bg" style="height:660px;"
              :style="{backgroundImage:`url(${item.imageUrl})`}">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="container l-margin">
      <div class="row">
        <div class="col-lg-4 mb-5" v-for="item in allroom" :key="item.id">
          <div class="card-pos" style="overflow: hidden; height:345px;box-shadow: 2px 2px 9px 0 rgba(0,0,0,0.18);">
            <div :style="{backgroundImage:`url(${item.imageUrl})`}"
                  class="img-fluid room-bg"
                  style="height:280px"></div>
            <div class="trans">
              <div class="p-4">
                <div class="mb-3">{{item.name}}</div>
                <div class="kind">
                  <div class="room">
                    <span v-if="item.name==='Single Room'">單人房</span>
                    <span v-else-if="item.name==='Twin Room'">雙床雙人房</span>
                    <span v-else-if="item.name==='Double Room'">雙人房</span>
                    <span v-else-if="item.name==='Deluxe Single Room'">豪華單人房</span>
                    <span v-else-if="item.name==='Deluxe Twin Room'">豪華雙床雙人房</span>
                    <span v-else-if="item.name==='Deluxe Double Room'">豪華單床雙人房</span>
                  </div>
                  <div class="mt-4 d-flex justify-content-between align-items-end price">
                    <span>
                      <span class="today">NT.{{item.normalDayPrice}}</span>
                      平日
                    </span>
                    <span class="holiday">NT.{{item.holidayPrice}} 假日</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="goroom"
                @click.prevent="gomoreroom(item.id)"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      Bswiper: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        autoplay:true,
        delay:3000,
      },
    }
  },
  created() {
    this.getroom();
  },
  computed: {
    ...mapGetters(['allroom']),
  },
  methods: {
    ...mapActions(['getroom']),
    gomoreroom (id) {
      this.$router.push(`/moreroom/${id}`)
    }
  },
};
</script>
