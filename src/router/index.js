import Vue from 'vue';
import Router from 'vue-router';
import Participants from '@/components/Participants';
import ParticipantDetails from '@/components/ParticipantDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Participants',
      component: Participants,
    },
    {
      path: '/participant/:name',
      component: ParticipantDetails,
    },
  ],
});
