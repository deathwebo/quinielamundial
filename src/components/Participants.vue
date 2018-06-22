<template>
  <div class="participants">
    <h3 class="title">Participantes</h3>
    <div class="container">
      <Participant
        v-for="(participantScore, idx) in getSortedParticipantsScore"
        :key="participantScore.name"
        :participant-score="participantScore"
        :position="idx + 1">
      </Participant>
    </div>
  </div>
</template>

<script>
import Participant from './Participant';

export default {
  name: 'Participants',
  components: {
    Participant,
  },
  computed: {
    getSortedParticipantsScore() {
      return this.$store.getters.participantsScore.slice().sort((a, b) => b.score - a.score);
    },
  },
};
</script>
