<template>
  <router-link :to="'/participant/' + participantScore.name">
    <div
      class="columns is-mobile">
      <div class="column">
        <p class="heading">Posición</p>
        <p class="is-size-4-mobile has-text-info">{{ position }}</p>
      </div>
      <div class="column">
        <p class="heading">Nombre</p>
        <p class="is-size-4-mobile">{{ participantScore.name }}</p>
      </div>
      <div class="column">
        <p class="heading">Aciertos</p>
        <p class="is-size-4-mobile has-text-primary">{{ participantScore.score }}</p>
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
