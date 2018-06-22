<template>
  <router-link :to="'/participant/' + participantScore.name">
    <div
      class="columns is-mobile">
      <div class="column">
        <p
          class="is-size-4-mobile has-text-info has-text-centered"
          >{{ position }}</p>
      </div>
      <div class="column">
        <p
          class="is-size-4-mobile has-text-centered"
          >{{ participantScore.name }}</p>
      </div>
      <div class="column">
        <p
          class="is-size-4-mobile has-text-primary has-text-centered"
          >{{ participantScore.score }}</p>
      </div>
      <div class="column">
        <p
          class="is-size-4-mobile has-text-success has-text-centered"
        >{{ participantScore.goals }}</p>
      </div>
    </div>
    <progress
      :class="['progress '+participantScore.colorClass]"
      :value="participantScore.percentage"
      max="100"
      >{{participantScore.percentage}}%</progress>
  </router-link>
</template>

<script>
export default {
  name: 'Participant',
  props: {
    participantScore: Object,
    position: Number,
  },
};
</script>
