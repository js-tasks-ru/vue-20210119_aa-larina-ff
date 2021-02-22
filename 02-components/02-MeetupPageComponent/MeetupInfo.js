export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{ stringLocalDate }}</time>
      </li>
    </ul>`,

  // props
  props: {
    organizer: {
      type: String,
      required: true,
      default: '',
    },

    place: {
      type: String,
      required: true,
      default: '',
    },

    date: {
      type: Date,
      required: true,
      default() {
        return new Date();
      },
    },
  },

  // computed
  computed: {
    stringLocalDate() {
      return this.$props.date.toLocaleString(
        navigator.language,
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
