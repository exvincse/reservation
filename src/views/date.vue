<template>
  <div>
    <div class="calendar-container">
        <div class="year">
            <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="h3 mb-0" @click.prevent="lastYear">«</a>
                <a href="#" class="h3 mb-0" @click.prevent="lastMonth">‹</a>
                <p class="h5 mb-0">{{nowdate.year}}/{{nowdate.month+1}}</p>
                <a href="#" class="h3 mb-0" @click.prevent="nextMonth">›</a>
                <a href="#" class="h3 mb-0" @click.prevent="nextYear">»</a>
            </div>
        </div>
        <div class="week">
           <div v-for="(i,index) in 7" :key="i">{{formatWeek(index)}}</div> 
        </div>
        <div class="date">
            <div class="none-week" v-for="i in lastMonthDays" :key="i+100" >{{lastmonthdate + i}}</div>
            <div v-for="day in nowmonthdate" :key="day"
              :class="{'out':noclick(day)}">
              <span href="#" v-if="dayoverflow(day)"
                :class="{'bgb':dayoverflow(day)}"
               >{{day}}</span>
              <span class="none-week" v-else>{{day}}</span>
            </div>
            <!-- <li v-for="day in nowmonthdate" :key="day"
              :class="{'bgb':noclick(day)}">{{day}}</li> -->
            <div class="none-week" v-for="day in (42-lastMonthDays-nowmonthdate)" :key="day+200">{{day}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       nowdate: {},
       lastmonthday: 0,
      //  dayname:[],
    };
  },
  created() {
    this.nowdate = this.getdate(new Date());
    // this.noclick();
  },
  computed: {
    lastMonthDays () {
      return this.nowmonthoneday();
    },
    nowmonthdate () {
      return this.everymonth(this.nowdate.year,this.nowdate.month);
    },
    lastmonthdate () {
      return this.monthoverflow(this.nowdate.year,this.nowdate.month)-(this.nowmonthoneday())
    }
  },
  methods: {
    // clickday(day){
    //   let arrmonth = null;
    //   let arrday = null;
    //   if(this.nowdate.month + 1 < 10){
    //     arrmonth = `${'0' + (this.nowdate.month+1)}`;
    //   } else {
    //     arrmonth = `${this.nowdate.month+1}`;
    //   }
    //   day < 10 ? arrday = `${'0' + day}` : arrday = `${day}`;
    //   if (this.dayname.includes(`${this.nowdate.year}-${arrmonth}-${arrday}`)) {
    //     return;
    //   } else {
    //     this.dayname.push(`${this.nowdate.year}-${arrmonth}-${arrday}`);
    //   }
    // },
    // hoverday(day){
    //   let now = this.getdate(new Date());
    //   let arrday = null;
    //   let arrmonth = null;
    //   let arryear = null;
    //   let a = this.dayname.filter((item) => {
    //     let i = item.split("-");
    //     day < 10 ? arrday = `${'0' + day}`: arrday = `${day}`;
    //     arryear = i[0];
    //     arrmonth = i[1];
    //     return (i[2] === arrday && Number(arryear) === this.nowdate.year && Number(arrmonth) === this.nowdate.month+1) ? true : false;
    //   })
    //   return (a.length !==0) ? true : false;
    // },
    formatWeek (day) {
      switch (day) {                
        case 0:
            return '日';
        case 1:
            return '一'
        case 2:
            return '二';
        case 3:
            return '三'
        case 4:
            return '四'
        case 5:
            return '五'
        case 6:
            return '六'
      }
    },
    dayoverflow(day) {
      let now = this.getdate(new Date());
      if (this.nowdate.year < now.year) {
        return false;
      } else {
        if(this.nowdate.year === now.year && this.nowdate.month < now.month){
          return false;
        }else {
          if (this.nowdate.month > now.month + 3 || this.nowdate.year > now.year) {
            return false;
          }else if(this.nowdate.month === now.month) {
            return now.date <= day ? true : false;
          }else{
            return (this.nowdate.month < now.month + 3 || now.date >= day) ? true : false;
          }
        }
      }
    },
    noclick(day){
      let ary = ['2019-10-1','2019-10-3','2019-10-7'];
      let a = ary.filter((item) => {
          if (day == undefined) return;
          let a = item.split("-");
          if(a[0]===this.nowdate.year.toString() && a[1]===(this.nowdate.month+1).toString() && a[2] === day.toString()){
            return true;
          } else {
            return false;
          }
      })
      if (a.length!==0) {
        return true
      } else {
        return false
      }
    },
    getdate (date) {
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
      }
    },
    monthoverflow(year,month) {
      if (month === 0) {
        return this.everymonth(year-1,11);
      } else {
        return this.everymonth(year,month-1);
      }
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
    nowmonthoneday() {
      return new Date(this.nowdate.year,this.nowdate.month,1).getDay();
    },
    // lastmonthlastday() {
    //   if(this.nowdate.month - 1 < 0) {
    //     let year = this.nowdate.year -1;
    //     let month = 11;
    //     this.lastmonthday = this.everymonth(year,month);
    //   } else {
    //     this.lastmonthday = this.everymonth(this.nowdate.year,this.nowdate.month - 1);
    //   }
    // },
    lastMonth () {
        if(this.nowdate.month===0) {
            this.nowdate.month = 11
            this.nowdate.year --
        }else {
            this.nowdate.month --
        }
    },
    nextMonth () {
        if(this.nowdate.month===11) {
            this.nowdate.month = 0
            this.nowdate.year ++
        }else {
            this.nowdate.month ++
        }
    },
    lastYear () {
        this.nowdate.year --
    },
    nextYear () {
        this.nowdate.year ++
    },
  },
}
</script>
<style lang="scss">
    .date .bgb{
      color:#6D7278;
    }
    .calendar-container {
      max-width: 383px;
      padding: 2rem 3rem;
    }
    .week,.date{
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        max-width: 400px;
        padding: 0;
    }
    .week {
        border-bottom: .5px solid #ddd;
        margin-bottom: 5px;
    }
    .date,.week{
      a{
        text-decoration: none;
      }
    }
    .none-week {
        color: #C9CCD0;
    }
</style>