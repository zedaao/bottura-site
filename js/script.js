import TabNav from './tabnav.js';
import SlideStories from './slide-stories.js';
import SlideNav from './slide.js';

const stories = new SlideStories('slide-1');
stories.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
