<template>
  <div v-if="room">
    <header class="light-box mb-5">
      <div class="header-title px-2">WhiteSpace</div>
      <div class="header-linear"></div>
      <div class="d-flex flex-row" v-for="item in room" :key="item.id">
        <div class="room-bg"
          style="height:596px;width:65%;"
          :style="{backgroundImage:`url(${item.imageUrl[0]})`}">
        </div>
        <div class="d-flex flex-column" style="width:35%">
          <div class="room-bg light-box"
              style="height:298px;"
              :style="{backgroundImage:`url(${item.imageUrl[1]})`}">
          </div>
          <div class="room-bg light-box"
              style="height:298px;"
              :style="{backgroundImage:`url(${item.imageUrl[2]})`}">
          </div>
        </div>
        <a href="#" @click.prevent="showMultiple()"></a>
      </div>
      <VueEasyLightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide">
      </VueEasyLightbox>
    </header>

    <section class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="d-flex">
            <div class="room-msg" v-for="item in room" :key="item.id">
              <div class="d-flex justify-content-between">
                <div class="mb-5">
                  <h2 class="title mb-5">{{item.name}}</h2>
                  <div class="mb-2">房客人數限制： {{item.descriptionShort.GuestMin}}~{{item.descriptionShort.GuestMax}} 人</div>
                  <div class="mb-2" v-if="item.name==='Single Room'">床型：單人房</div>
                  <div class="mb-2" v-else-if="item.name==='Twin Room'">床型：雙床雙人房</div>
                  <div class="mb-2" v-else-if="item.name==='Double Room'">床型：雙人房</div>
                  <div class="mb-2" v-else-if="item.name==='Deluxe Single Room'">床型：豪華單人房</div>
                  <div class="mb-2" v-else-if="item.name==='Deluxe Twin Room'">床型：豪華雙床雙人房</div>
                  <div class="mb-2" v-else-if="item.name==='Deluxe Double Room'">床型：豪華單床雙人房</div>
                  <div class="mb-2">衛浴數量： {{item.descriptionShort["Private-Bath"]}} 間</div>
                  <div>房間大小： {{item.descriptionShort.Footage}} 平方公尺</div>
                </div>
                <div class="text-right">
                  <div style="font-size: 30px;">NT.{{item.normalDayPrice}}</div>
                  <span>平日(一~四)</span>
                  <div>NT.{{item.holidayPrice}}</div>
                  <span>假日(五~日)</span>
                </div>
              </div>
              <p class="description mb-4">
                {{item.description}}
              </p>
              <div class="room-mark mb-4">\ \ \</div>
              <div class="checktime mb-5">
                <div class="checkin d-inline-block">
                  <span class="checktitle">Check In</span>
                  <div class="time">{{item.checkInAndOut.checkInEarly}}  —  {{item.checkInAndOut.checkInLate}}</div>
                </div>
                <div class="d-inline-block">
                  <span class="checktitle">Check Out</span>
                  <div class="time">{{item.checkInAndOut.checkOut}}</div>
                </div>
              </div>
              <div class="amenities container py-3 mb-5">
                <div class="row">
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':item.amenities['Wi-Fi']}">
                    <i class="fas fa-wifi fa-lg mr-2"></i>
                    <span>Wi-Fi</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Room-Service']}">
                    <i class="fas fa-phone fa-lg mr-2"></i>
                    <span>電話</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Great-View']}">
                    <i class="fas fa-mountain fa-lg mr-2"></i>
                    <span>漂亮的視野</span>
                  </div>
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':item.amenities.Breakfast}">
                    <i class="fas fa-utensils fa-lg mr-2"></i>
                    <span>早餐</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Air-Conditioner']}">
                    <i class="fas fa-wind fa-lg mr-2"></i>
                    <span>空調</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Smoke-Free']}">
                    <i class="fas fa-smoking-ban fa-lg mr-2"></i>
                    <span>禁止吸煙</span>
                  </div>
                  <div class="col-4 mb-4"
                    :class="{'iconcolor':item.amenities['Mini-Bar']}">
                    <i class="fas fa-glass-martini-alt fa-lg mr-2"></i>
                    <span>Mini Bar</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities.Refrigerator}">
                    <i class="fas fa-wifi fa-lg mr-2"></i>
                    <span>冰箱</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Child-Friendly']}">
                    <i class="fas fa-baby fa-lg mr-2"></i>
                    <span>適合兒童</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Room-Service']}">
                    <i class="fas fa-concierge-bell fa-lg mr-2"></i>
                    <span>Room Service</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities.Sofa}">
                    <i class="fas fa-couch fa-lg mr-2"></i>
                    <span>沙發</span>
                  </div>
                  <div class="col-4"
                    :class="{'iconcolor':item.amenities['Pet-Friendly']}">
                    <i class="fas fa-dog fa-lg mr-2"></i>
                    <span>寵物攜帶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <datepeacker class="mb-4"
            :bad="bad"></datepeacker>
          <div class="btn-time">
            <button class="btn rounded-0" data-toggle="modal" data-target="#Modal1">預約時段</button>
            <div class="btn-bg"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade" id="Modal1" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">預約時段</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            <form class="p-4">
                <div>\ \ \</div>
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
                      @click="openstart=!openstart">
                    <customdate class="start p-0"
                      v-if="openstart"
                      @chooseday="startday"></customdate>
                    <div class="mx-5">~</div>
                    <input type="text" class="form-control coustomdate" id="inputEmail3"
                      v-model="enddata"
                      @click="openend=!openend">
                    <customdate class="end p-0"
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
                <span>   =    NT.{{normalDay*normalDayPrice+holiDay*holiDayPrice}}</span>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"
              @click.prevent="checkrequest()">確定預約</button>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal2">
      Launch demo modal
    </button>

    <div class="modal fade" id="Modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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

export default {
  components:{
    datepeacker,
    customdate,
    VueEasyLightbox,
  },
  data() {
    return {
      room: [],
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
      index: 0,
      bad:[],
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
   methods: {
    getroom () {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_APIPATH}/room/${this.$route.params.id}`;
      this.$http.get(api, {
        headers: {
          'Accept':'application/json',
          'Authorization':`Bearer ${process.env.VUE_APP_CUSTOMPATH}`,
        },
      }).then((response) => {
        this.bad = [];
        this.room = response.data.room;
        response.data.booking.forEach((item) => {
          this.bad.push(item.date);
        })
        this.normalDayPrice = response.data.room[0].normalDayPrice;
        this.holiDayPrice = response.data.room[0].holidayPrice;
        this.$store.dispatch('updateLoading', false);
      });
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
        day: this.startdata.split("-")[2],
      }
      let enddata = {
        year: this.enddata.split("-")[0],
        month: this.enddata.split("-")[1],
        day: this.enddata.split("-")[2],
      }
      if(startdata.year===enddata.year && startdata.month===enddata.month){
        if(startdata.day>enddata.day) {
          alert('日期錯誤');
          this.startdata = '';
          this.enddata = '';
          return;
        } else {
          for(let i = startdata.day; i<=enddata.day; i++){
            i = i.toString();
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
            i = i.toString();
            this.date.push(`${startdata.year}-${startdata.month}-${i}`);
          }
          for(let i = 1; i<=enddata.day ; i++){
            if(i<10){
              i = `0${i}`;
            }
            i = i.toString();
            this.date.push(`${startdata.year}-${enddata.month}-${i}`);
          }
      } else if (startdata.yearenddata.year < enddata.year) {
          let lastday = this.everymonth(Number(startdata.year),Number(startdata.month-1));
          for(let i = startdata.day; i<=lastday ; i++){
            i = i.toString();
            this.date.push(`${startdata.year}-${startdata.month}-${i}`);
          }
          for(let i = 1; i<=enddata.day ; i++){
            if(i < 10){
              i = `0${i}`;
            }
            i = i.toString();
            this.date.push(`${startdata.year}-${enddata.month}-${i}`);
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
      }).then((response) => {
        if(response.data.success){
          $('#exampleModal').hide();
          // this.getroom();
        } else{
          $('#exampleModal').hide();
        }
        this.$store.dispatch('updateLoading', false);
      });
    },
    // showSingle(img) {
    //   this.imgs = img;
    //   this.show()
    // },
    showMultiple() {
      this.imgs = this.room[0].imageUrl;
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