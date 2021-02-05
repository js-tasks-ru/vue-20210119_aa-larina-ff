import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
// import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <!-- meetup cover -->
      <meetup-cover :link="meetup.link" :title="meetup.title" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <meetup-description :description="meetup.description" />
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
            <!-- meetup agenda -->
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <meetup-info
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.localDate"
            />
          </div>
        </div>
      </div>
    </div>`,

  // components
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
  },

  // props
  props: {
    meetup: {
      type: Object, // расширенно описать ? как лучше сделать ?
      required: true, // вот тут проблема ? null поступает раньше загрузки данных
    },
  },
};
