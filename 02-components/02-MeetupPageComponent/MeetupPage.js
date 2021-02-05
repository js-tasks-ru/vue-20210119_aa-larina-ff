import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup, getMeetupCoverLink } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `
    <meetup-view :meetup="meetup" />
  `,

  // components
  components: { MeetupView },

  // data
  data() {
    return {
      rawMeetup: {},
    };
  },

  // mounted
  async mounted() {
    this.rawMeetup = await fetchMeetup(MEETUP_ID);
  },

  computed: {
    meetup() {
      return {
        ...this.rawMeetup,
        link: this.rawMeetup.imageId ? getMeetupCoverLink(this.rawMeetup) : ``,
        localDate: new Date(this.rawMeetup.date),
      };
    },
  },

  // methods
};
