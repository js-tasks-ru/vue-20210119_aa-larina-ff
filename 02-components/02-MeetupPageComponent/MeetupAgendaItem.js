import { agendaItemTitles, agendaItemIcons } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item" :agendaItem="agendaItem">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="\`/assets/icons/icon-\${agenda.icon}.svg\`" />
      </div>
      <div class="meetup-agenda__item-col">{{ agenda.startsAt }} - {{ agenda.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ (agenda.title) ? agenda.title : agenda.localeType }}</h5>
        <p v-show="(agenda.speaker && agenda.language)">
          <span>{{ agenda.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agenda.language }}</span>
        </p>
        <p v-if="agenda.description">{{ agenda.description }}</p>
      </div>
    </div>`,

  // props
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  // Возможно, тут потребуется computed
  computed: {
    agenda() {
      return {
        ...this.$props.agendaItem,
        localeType: agendaItemTitles[this.$props.agendaItem.type],
        icon: agendaItemIcons[this.$props.agendaItem.type],
      };
    },
  },
};
