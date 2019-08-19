<template>
  <div v-if="datashow">
    <header class="light-box mb-5">
      <div class="header-title px-2">WhiteSpace</div>
      <div class="header-linear"></div>
      <div class="d-flex flex-row">
        <div class="room-bg"
          style="height:596px;width:65%;"
          :style="{backgroundImage:`url(${room.imageUrl[0]})`}">
        </div>
        <div class="d-flex flex-column" style="width:35%">
          <div class="room-bg"
              style="height:298px;"
              :style="{backgroundImage:`url(${room.imageUrl[1]})`}">
          </div>
          <div class="room-bg"
              style="height:298px;"
              :style="{backgroundImage:`url(${room.imageUrl[2]})`}">
          </div>
        </div>
        <a href="#" @click.prevent="showMultiple()"></a>
      </div>
      <VueEasyLightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide">
      <div>123</div>
      </VueEasyLightbox>
    </header>

    <section class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="d-flex">
            <div class="room-msg">
              <div class="d-flex justify-content-between">
                <div class="mb-5">
                  <h2 class="title mb-5">{{room.name}}</h2>
                  <div class="mb-2">房客人數限制： {{room.descriptionShort.GuestMin}}~{{room.descriptionShort.GuestMax}} 人</div>
                  <div class="mb-2" v-if="room.name==='Single Room'">床型：單人房</div>
                  <div class="mb-2" v-else-if="room.name==='Twin Room'">床型：雙床雙人房</div>
                  <div class="mb-2" v-else-if="room.name==='Double Room'">床型：雙人房</div>
                  <div class="mb-2" v-else-if="room.name==='Deluxe Single Room'">床型：豪華單人房</div>
                  <div class="mb-2" v-else-if="room.name==='Deluxe Twin Room'">床型：豪華雙床雙人房</div>
                  <div class="mb-2" v-else-if="room.name==='Deluxe Double Room'">床型：豪華單床雙人房</div>
                  <div class="mb-2">衛浴數量： {{room.descriptionShort["Private-Bath"]}} 間</div>
                  <div>房間大小： {{room.descriptionShort.Footage}} 平方公尺</div>
                </div>
              </div>
              <p class="description mb-4">
                {{room.description}}
              </p>
              <div class="room-mark mb-4">\ \ \</div>
              <div class="checktime mb-5">
                <div class="checkin d-inline-block">
                  <span class="checktitle">Check In</span>
                  <div class="time">{{room.checkInAndOut.checkInEarly}}  —  {{room.checkInAndOut.checkInLate}}</div>
                </div>
                <div class="d-inline-block">
                  <span class="checktitle">Check Out</span>
                  <div class="time">{{room.checkInAndOut.checkOut}}</div>
                </div>
              </div>
              <div class="amenities container py-3 mb-5">
                <div class="row">
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':!room.amenities['Wi-Fi']}">
                    <i class="fas fa-wifi fa-lg mr-2"></i>
                    <span>Wi-Fi</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Room-Service']}">
                    <i class="fas fa-phone fa-lg mr-2"></i>
                    <span>電話</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Great-View']}">
                    <i class="fas fa-mountain fa-lg mr-2"></i>
                    <span>漂亮的視野</span>
                  </div>
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':!room.amenities.Breakfast}">
                    <i class="fas fa-utensils fa-lg mr-2"></i>
                    <span>早餐</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Air-Conditioner']}">
                    <i class="fas fa-wind fa-lg mr-2"></i>
                    <span>空調</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Smoke-Free']}">
                    <i class="fas fa-smoking-ban fa-lg mr-2"></i>
                    <span>禁止吸煙</span>
                  </div>
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':!room.amenities['Mini-Bar']}">
                    <i class="fas fa-glass-martini-alt fa-lg mr-2"></i>
                    <span>Mini Bar</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities.Refrigerator}">
                    <img src="../assets/img/refrigerator.svg" width="30px" height="30px" alt=""
                      class="mr-2"
                      v-if="room.amenities.Refrigerator">
                    <img src="../assets/img/refrigeratori.svg" width="30px" height="30px" alt=""
                      class="mr-2"
                      v-else>
                    <span>冰箱</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Child-Friendly']}">
                    <i class="fas fa-baby fa-lg mr-2"></i>
                    <span>適合兒童</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Room-Service']}">
                    <i class="fas fa-concierge-bell fa-lg mr-2"></i>
                    <span>Room Service</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities.Sofa}">
                    <i class="fas fa-couch fa-lg mr-2"></i>
                    <span>沙發</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':!room.amenities['Pet-Friendly']}">
                    <i class="fas fa-dog fa-lg mr-2"></i>
                    <span>寵物攜帶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="dayprice text-right">
            <div class="normalday-price">NT.{{room.normalDayPrice}}</div>
            <span class="normalday">平日(一~四)</span>
            <div class="holiday-price">NT.{{room.holidayPrice}}</div>
            <span class="holiday">假日(五~日)</span>
          </div>
        </div>
        <div class="col-lg-4">
          <datepeacker class="mb-4"
            :bad="bad"></datepeacker>
          <span class="out d-inline-block" style="width:20px;height:20px"></span>
          <span class="d-inline-block">代表已被預約。</span>
          <span class="d-inline-block">可預約時間為現在時間後推90天左右</span>
          <span class="mb-4 d-inline-block">如果被預約超過90天，就無法再訂房</span>
          <div class="d-flex">
            <div class="btn-time mr-3">
              <button class="btn rounded-0" data-toggle="modal" data-target="#Modal1">預約時段</button>
              <div class="btn-bg"></div>
            </div>
            <div class="btn-time">
              <button class="btn rounded-0"
                @click="clear()">測試清除預約</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="modal fade" id="Modal1" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header p-4">
            <h5 class="modal-title" id="ModalLabel">預約時段</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="px-4 pt-4">\ \ \</div>
          <div>
            <form class="p-4">
                <div class="form-group d-flex align-items-center">
                  <label for="inputEmail3" class="col-form-label mr-5">姓名</label>
                  <input type="text" class="form-control w-75" id="inputEmail3"
                  v-model="name">
                </div>
                <div class="form-group d-flex align-items-center">
                  <label for="inputPassword3" class="col-form-label mr-5">電話</label>
                  <input type="phone" class="form-control w-75" id="inputPassword3"
                  v-model="phone">
                </div>
                <div class="form-group d-flex align-items-center date-pos">
                  <label class="col-form-label mr-3">預約起迄</label>
                    <input type="text" class="form-control coustomdate" id="inputEmail3"
                      v-model="startdata"
                      @click="openstart=!openstart,openend=false">
                    <customdate class="start p-0"
                      :bad="bad"
                      v-if="openstart"
                      @chooseday="startday"></customdate>
                    <div class="mx-5">~</div>
                    <input type="text" class="form-control coustomdate" id="inputEmail3"
                      v-model="enddata"
                      @click="openend=!openend,openstart=false">
                    <customdate class="end p-0"
                      :bad="bad"
                      v-if="openend"
                      @chooseday="endday"></customdate>
                </div>
            </form>
              <div class="total p-4">
                <div class="d-flex justify-content-between">
                  <span>平日時段</span>
                  <span>{{normalDay}}夜</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>假日時段</span>
                  <span>{{holiDay}}夜</span>
                </div>
              </div>
              <div class="text-right p-4">
                <span class="h3"
                style="color:#FF5C5C">
                <span class="m-5">=</span>NT.{{normalDay*normalDayPrice+holiDay*holiDayPrice}}</span>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn mr-auto rounded-0" data-dismiss="modal" style="background-color:#D8D8D8">取消</button>
            <button type="button" class="btn rounded-0"
              style="background-color:#484848; color:#fff"
              @click.prevent="checkrequest()">確定預約</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal fade" id="Modal2" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-header flex-column px-4 pt-4">
            <div class="d-flex justify-content-between align-items-center w-100 mb-3">
              <h4 class="modal-title" id="exampleModalLabel" v-if="success">預約成功</h4>
              <h4 class="modal-title" id="exampleModalLabel" v-else>預約失敗</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                @click="getroom()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>\ \ \</div>
          </div>
          <div class="modal-body py-0 px-4">
            <div v-if="success"
            class="room-bg mx-auto"
            style="width:60px;height:60px"
            :style="{backgroundImage:`url(${require('../assets/img/success.svg')})`}"></div>
            <div v-else>{{errormsg}}</div>
          </div>
          <div class="modal-footer">
            <router-link to="/allroom" type="button" class="btn btn-secondary rounded-0" data-dismiss="modal"
            style="background-color:#484848; color:#fff">回首頁</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import VueEasyLightbox from 'vue-easy-lightbox'
import datepeacker from './Date';
import customdate from './Customdate';
import { mapGetters } from 'vuex';
export default {
  components:{
    datepeacker,
    customdate,
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: [],
      startdata: '',
      enddata: '',
      name: '',
      phone: '',
      date: [],
      normalDay: 0,
      normalDayPrice: 0,
      holiDay:0,
      holiDayPrice: 0,
      visible: false,
      openstart: false,
      openend: false,
      datashow: false,
      success: true,
      index: 0,
      bad: [],
      errormsg: '',
    };
  },
  created() {
    this.getroom();
  },
  watch: {
    enddata() {
      this.reservation();
    },
    startdata() {
      this.reservation();
    }
  },
  computed: {
    ...mapGetters(['room']),
  },
   methods: {
    getroom () {
      this.startdata = '',
      this.enddata = '',
      this.name = '',
      this.phone = '',
      this.datashow = false;
      this.$store.dispatch('updateLoading', true);
      this.$store.dispatch('getmoreroom', this.$route.params.id).then(() => {
        this.bad = this.$store.state.bad;
        this.normalDayPrice = this.$store.state.moreroom.normalDayPrice;
        this.holiDayPrice = this.$store.state.moreroom.holidayPrice;
        this.datashow = true;
        this.$store.dispatch('updateLoading', false);
      });
      // const api = `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`;
      // this.$http.get(api, {
      //   headers: {
      //     'Accept':'application/json',
      //     'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
      //   },
      // }).then((response) => {
      //   this.bad = [];
      //   response.data.booking.forEach((item) => {
      //     this.bad.push(item.date);
      //   })
      //   this.normalDayPrice = response.data.room[0].normalDayPrice;
      //   this.holiDayPrice = response.data.room[0].holidayPrice;
      //   this.room = response.data.room[0];
      //   this.datashow = true;
      //   console.log(response);
      //   this.$store.dispatch('updateLoading', false);
      // });
    },
    everymonth(year, month) {
      let leap = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
      let monthday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if(leap && month === 1) {
        return 29;
      }else {
        return monthday[month];
      } 
    },
    reservation () {
      if(this.startdata === '' || this.enddata === '') return false;
      this.date = [];
      this.holiDay = 0;
      this.normalDay = 0;
      let startdata = {
        year: this.startdata.split("-")[0],
        month: this.startdata.split("-")[1],
        day: Number(this.startdata.split("-")[2]),
      }
      let enddata = {
        year: this.enddata.split("-")[0],
        month: this.enddata.split("-")[1],
        day: Number(this.enddata.split("-")[2]),
      }
      if(startdata.year===enddata.year && startdata.month===enddata.month){
        if(startdata.day>enddata.day) {
          alert('日期錯誤');
          this.startdata = '';
          this.enddata = '';
          return;
        } else {
          for(let i = startdata.day; i<=enddata.day; i++){
            i < 10 ? i = `0${i}` : i = i.toString();
            this.date.push(`${startdata.year}-${startdata.month}-${i}`);
          }
        }
      }else if(startdata.year > enddata.year || (startdata.year===enddata.year && startdata.month>enddata.month)) {
          alert('日期錯誤');
          this.startdata = '';
          this.enddata = '';
          return;
      }else if(startdata.year===enddata.year && startdata.month<enddata.month){
          let lastday = this.everymonth(Number(startdata.year),Number(startdata.month-1));
          for(let i = startdata.day; i<=lastday ; i++){
            i < 10 ? i = `0${i}` : i = i.toString();
            this.date.push(`${startdata.year}-${startdata.month}-${i}`);
          }
          if (startdata.month<enddata.month){
            let startmonth = Number(startdata.month)+1;
            let endmonth = Number(enddata.month);
            let stringmonth = '';
            for (let i = startmonth; i<endmonth ; i++){
              if (i < 10) {
                stringmonth = `0${i}`;
              } else {
                stringmonth = `${i}`;
              }
              let lastday = this.everymonth(Number(startdata.year),Number(i-1));
              for(let i = 1; i<=lastday ; i++){
                i < 10 ? i = `0${i}` : i = i.toString();
                this.date.push(`${startdata.year}-${stringmonth}-${i}`);
              }
            }
          }
          for(let i = 1; i<=enddata.day ; i++){
            i < 10 ? i = `0${i}` : i = i.toString();
            this.date.push(`${startdata.year}-${enddata.month}-${i}`);
          }
      } else if (startdata.year < enddata.year) {
          let lastday = this.everymonth(Number(startdata.year),Number(startdata.month-1));
          for(let i = startdata.day; i<=lastday ; i++){
            i < 10 ? i = `0${i}` : i = i.toString();
            this.date.push(`${startdata.year}-${startdata.month}-${i}`);
          }
          if (startdata.month<=12){
            let startmonth = Number(startdata.month)+1;
            let stringmonth = '';
            for (let i = startmonth; i<=12 ; i++){
              if (i < 10) {
                stringmonth = `0${i}`;
              } else {
                stringmonth = `${i}`;
              }
              let lastday = this.everymonth(Number(startdata.year),Number(i-1));
              for(let i = 1; i<=lastday ; i++){
                i < 10 ? i = `0${i}` : i = i.toString();
                this.date.push(`${startdata.year}-${stringmonth}-${i}`);
              }
            }
          }
          if (enddata.month>=1){
            let startmonth = 1;
            let endmonth = Number(enddata.month) - 1;
            let stringmonth = '';
            for (let i = startmonth; i<=endmonth ; i++){
              if (i < 10) {
                stringmonth = `0${i}`;
              } else {
                stringmonth = `${i}`;
              }
              let lastday = this.everymonth(Number(enddata.year),Number(i-1));
              for(let i = 1; i<=lastday ; i++){
                i < 10 ? i = `0${i}` : i = i.toString();
                this.date.push(`${enddata.year}-${stringmonth}-${i}`);
              }
            }
          }
          for(let i = 1; i<=enddata.day ; i++){
            i < 10 ? i = `0${i}` : i = i.toString();
            this.date.push(`${enddata.year}-${enddata.month}-${i}`);
          }
      }
      this.date.forEach((item) => {
        let week = new Date(item.split("-")[0],(item.split("-")[1]-1),item.split("-")[2]).getDay();
        if(week===0||week===6 || week===5){
          this.holiDay += 1;
        } else {
          this.normalDay += 1;
        }
      });
    },
    checkrequest() {
      this.$store.dispatch('updateLoading', true);
      let formdata = new FormData();
      formdata.append('name',this.name);
      formdata.append('tel',this.phone);
      this.date.forEach((item,index) => {
        formdata.append(`date[${index}]`,item);
      })
      const api = `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`;
      this.$http.post(api, formdata, {
        headers: {
          accept:'application/json',
          authorization:`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then(() => {
        this.success = true; 
        $('#Modal1').modal('hide');
        $('#Modal2').modal('show');
        this.$store.dispatch('updateLoading', false);
      }).catch((error) =>{
        this.errormsg = error.response.data.message;
        this.success = false;
        $('#Modal1').modal('hide');
        $('#Modal2').modal('show');
        this.$store.dispatch('updateLoading', false);
      });
    },
    clear() {
      const api = `${process.env.VUE_APP_APIPATH}/rooms`;
      this.$http.delete(api, {
        headers: {
          accept:'application/json',
          authorization:`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then(() => {
        this.getroom();
      })
    },
    // showSingle(img) {
    //   this.imgs = img;
    //   this.show()
    // },
    showMultiple() {
      this.imgs = this.room.imageUrl;
      this.index = 0;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    startday(day,hide) {
      this.startdata = day;
      this.openstart = hide;
    },
    endday(day,hide) {
      this.enddata = day;
      this.openend = hide;
    }
   },
}
</script>