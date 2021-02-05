export const MeetupCover = {
  template: `
    <div class="meetup-cover" :style="link ? \`--bg-url: url('\${link}')\` : '' ">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  // props
  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
