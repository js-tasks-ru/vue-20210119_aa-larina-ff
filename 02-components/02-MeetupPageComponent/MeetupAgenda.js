import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
      <div
        class="meetup-agenda__item"
        v-for="agendaItem in agenda"
      >
        <meetup-agenda-item :agendaItem="agendaItem" />
      </div>
    </div>`,

  // components
  components: { MeetupAgendaItem },

  // props
  props: {
    agenda: {
      type: Array,
      required: true,
      default() {
        return {};
      },
    },
  },
};
