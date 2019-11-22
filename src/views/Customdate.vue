<template>
    <div>
        <div class="calendar">
            <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="h3 mb-0" @click.prevent="lastYear">«</a>
                <a href="#" class="h3 mb-0" @click.prevent="lastMonth">‹</a>
                <p class="h5 mb-0">{{nowdate.year}}/{{nowdate.month+1}}</p>
                <a href="#" class="h3 mb-0" @click.prevent="nextMonth">›</a>
                <a href="#" class="h3 mb-0" @click.prevent="nextYear">»</a>
            </div>

            <div class="d-flex justify-content-between text-center">
                <div class="datewidth" v-for="(i,index) in 7" :key="i" :class="{'text-danger':index===0 || index===6}">{{formatWeek(index)}}</div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center text-center">
                <div class="none-week datewidth" v-for="i in lastMonthDays" :key="i+100">{{lastmonthdate + i}}</div>
                <div class="datewidth" v-for="day in nowmonthdate" :key="day" :class="{'out':noclick(day)}">
                    <div v-if="dayoverflow(day-1)">
                        <a href="#" class="coustom-click d-block" v-if="!noclick(day)" :class="{'text-danger':holiday(day)}" @click.prevent="clickday(day)">{{day}}</a>
                        <span v-else>{{day}}</span>
                    </div>
                    <span class="none-week" v-else>{{day}}</span>
                </div>
                <div class="none-week datewidth" v-for="day in (42-lastMonthDays-nowmonthdate)" :key="day+200">{{day}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['bad'],
        data() {
            return {
                nowdate: {},
                lastmonthday: 0,
                chooseday: '',
            };
        },
        created() {
            this.nowdate = this.getdate(new Date());
            let da = this.everymonth(this.nowdate.year, this.nowdate.month);
            if (this.nowdate.date + 1 > da) {
                this.nowdate.month += 1;
                this.nowdate.date = 1;
            } else {
                this.nowdate.date += 1;
            }
        },
        computed: {
            lastMonthDays() {
                return this.nowmonthoneday();
            },
            nowmonthdate() {
                return this.everymonth(this.nowdate.year, this.nowdate.month);
            },
            lastmonthdate() {
                return this.monthoverflow(this.nowdate.year, this.nowdate.month) - (this.nowmonthoneday());
            },
        },
        methods: {
            hoverday(day) {
                return this.startdata.split('-')[2] === day.toString();
            },
            holiday(day) {
                const getdays = new Date(this.nowdate.year, this.nowdate.month, day).getDay();
                return Boolean(getdays === 6 || getdays === 0);
            },
            noclick(getday) {
                const ary = this.bad;
                let month = '';
                let day = getday;
                if (day < 10) {
                    day = `0${day}`;
                }
                if ((this.nowdate.month + 1) < 10) {
                    month = `0${(this.nowdate.month + 1)}`;
                } else {
                    month = `${(this.nowdate.month + 1)}`;
                }
                const a = ary.filter((item) => {
                    if (day === undefined) return false;
                    const date = item.split('-');
                    if (date[0] === this.nowdate.year.toString() && date[1] === month.toString() && date[2] === day.toString()) {
                        return true;
                    }
                    return null;
                });
                return Boolean(a.length !== 0);
            },
            clickday(day) {
                let arrmonth = null;
                let arrday = null;
                if (this.nowdate.month + 1 < 10) {
                    arrmonth = `0${(this.nowdate.month + 1)}`;
                } else {
                    arrmonth = `${this.nowdate.month + 1}`;
                }
                if (day < 10) {
                    arrday = `0${day}`;
                } else {
                    arrday = `${day}`;
                }
                if (this.chooseday === `${this.nowdate.year}-${arrmonth}-${arrday}`) {
                    return;
                }
                this.chooseday = `${this.nowdate.year}-${arrmonth}-${arrday}`;
                this.$emit('chooseday', this.chooseday, false);
            },
            // hoverday(day){
            //   // let now = this.getdate(new Date());
            //   let arrday = this.chooseday.split("-")[2];
            //   let arrmonth = this.chooseday.split("-")[1];
            //   let arryear = this.chooseday.split("-")[0];
            //   day < 10 ? day = `${'0' + day}` : day = `${day}`;
            //   if (`${this.nowdate.year}`===arryear && `${'0'+(this.nowdate.month + 1)}`===arrmonth && day===arrday) {
            //     return true;
            //   } else {
            //     return false;
            //   }
            //   // let a = this.dayname.filter((item) => {
            //   //   let i = item.split("-");
            //   //   day < 10 ? arrday = `${'0' + day}`: arrday = `${day}`;
            //   //   arryear = i[0];
            //   //   arrmonth = i[1];
            //   //   return (i[2] === arrday && Number(arryear) === this.nowdate.year && Number(arrmonth) === this.nowdate.month+1) ? true : false;
            //   // })
            //   // return (a.length !==0) ? true : false;
            // },
            formatWeek(day) {
                switch (day) {
                    case 0:
                        return '日';
                    case 1:
                        return '一';
                    case 2:
                        return '二';
                    case 3:
                        return '三';
                    case 4:
                        return '四';
                    case 5:
                        return '五';
                    case 6:
                        return '六';
                    default:
                        return false;
                }
            },
            dayoverflow(day) {
                const now = this.getdate(new Date());
                let monthadd = now.month + 3;
                let yearadd = now.year;
                if (monthadd > 11) {
                    monthadd -= 12;
                    yearadd += 1;
                }
                if (this.nowdate.year === now.year && this.nowdate.month < now.month) {
                    return false;
                } else if (this.nowdate.month === now.month && this.nowdate.year === now.year) {
                    return Boolean(now.date <= day);
                } else if ((monthadd < this.nowdate.month || now.date >= day) && this.nowdate.year === yearadd) {
                    if (this.nowdate.month > monthadd) {
                        return false;
                    }
                    return true;
                } else if ((monthadd < this.nowdate.month || now.date >= day) && this.nowdate.year === now.year) {
                    return true;
                } else if ((this.nowdate.month < monthadd || now.date >= day) && this.nowdate.year === yearadd) {
                    if (this.nowdate.month > monthadd) {
                        return false;
                    }
                    return true;
                }
                return false;
            },
            // noclick(day){
            //   let ary = ['2019-10-1','2019-10-3','2019-10-7'];
            //   let a = ary.filter((item) => {
            //       if (day == undefined) return;
            //       let a = item.split("-");
            //       if(a[0]===this.nowdate.year.toString() && a[1]===(this.nowdate.month+1).toString() && a[2] === day.toString()){
            //         return true;
            //       } else {
            //         return false;
            //       }
            //   })
            //   if (a.length!==0) {
            //     return true
            //   } else {
            //     return false
            //   }
            // },
            getdate(date) {
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDay(),
                    date: date.getDate(),
                };
            },
            monthoverflow(year, month) {
                if (month === 0) {
                    return this.everymonth(year - 1, 11);
                }
                return this.everymonth(year, month - 1);
            },
            everymonth(year, month) {
                const leap = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
                const monthday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (leap && month === 1) {
                    return 29;
                }
                return monthday[month];
            },
            nowmonthoneday() {
                return new Date(this.nowdate.year, this.nowdate.month, 1).getDay();
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
            lastMonth() {
                if (this.nowdate.month === 0) {
                    this.nowdate.month = 11;
                    this.nowdate.year -= 1;
                } else {
                    this.nowdate.month -= 1;
                }
            },
            nextMonth() {
                if (this.nowdate.month === 11) {
                    this.nowdate.month = 0;
                    this.nowdate.year += 1;
                } else {
                    this.nowdate.month += 1;
                }
            },
            lastYear() {
                this.nowdate.year -= 1;
            },
            nextYear() {
                this.nowdate.year += 1;
            },
        },
    };
</script>