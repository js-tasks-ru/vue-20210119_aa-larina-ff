/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEK_LENGTH = 7;

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button
            class="rangepicker__selector-control-left"
            @click="decrementMonth()"
          ></button>
          <div>{{ calendarTitle }}</div>
          <button
            class="rangepicker__selector-control-right"
            @click="incrementMonth()"
          ></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div
          class="rangepicker__cell rangepicker__cell_inactive"
          v-for="day in currentMonth.currentDateWeekDayIndex"
        >
          {{ previousMonth.daysInMonth - currentMonth.currentDateWeekDayIndex + day}}
        </div>
        <div
          class="rangepicker__cell"
          v-for="day in currentMonth.daysInMonth"
        >
          {{ day }}
          <template v-for="meetup in currentMonthMeetups">
            <a
              class="rangepicker__event"
              v-if="meetup.day === day"
            >
              {{ meetup.title }}
              {{ meetup.organizer }}
            </a>
          </template>
        </div>
        <div
          class="rangepicker__cell rangepicker__cell_inactive"
          v-for="day in nextMonth.restDaysAmount"
        >
         {{ day }}
        </div>
      </div>
    </div>
  </div>`,

  // Пропсы
  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц
  data() {
    return {
      date: new Date(),
    };
  },

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации
  computed: {
    currentMonth() {
      return {
        index: this.date.getMonth(),
        previousMonthIndex:
          this.date.getMonth() - 1 < 0
            ? MONTHS.length - 1
            : this.date.getMonth() - 1,
        lastDayWeekDayIndex: new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay(),
        title: MONTHS[this.date.getMonth()],
        //currentDateWeekDayIndex: this.date.getDay(),
        currentDateWeekDayIndex: this.date.getDay() - 1 < 0 ? WEEK_LENGTH - 1 : this.date.getDay() - 1,
        daysInMonth: new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate(),
      };
    },

    previousMonth() {
      return {
        daysInMonth:
          new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate(),
      };
    },

    nextMonth() {
      return {
        restDaysAmount:
          WEEK_LENGTH - this.currentMonth.lastDayWeekDayIndex < WEEK_LENGTH
            ? WEEK_LENGTH - this.currentMonth.lastDayWeekDayIndex
            : 0,
      };
    },

    currentYear() {
      return this.date.getFullYear();
    },

    calendarTitle() {
      return `${this.currentMonth.title} ${this.currentYear}`;
    },

    currentMonthMeetups() {
      return this.$props.meetups.filter((meetup) => {
        return new Date(meetup.date).getMonth() === this.currentMonth.index &&
          new Date(meetup.date).getFullYear() === this.currentYear;
      }).map((meetup) =>({
        ...meetup,
        day: new Date(meetup.date).getDay(),
      }));
    },
  },

  // Методы понадобятся для переключения между месяцами
  methods: {
    incrementMonth() {
      this.date = new Date(this.date.setMonth(this.currentMonth.index + 1));
      this.$emit('incrementMonth', this.currentMonth.index);
    },

    decrementMonth() {
      this.date = new Date(this.date.setMonth(this.currentMonth.index - 1));
      this.$emit('decrementMonth', this.currentMonth.index);
    },
  },
};
