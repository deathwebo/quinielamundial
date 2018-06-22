<template>
<div>
  <h3 class="title">{{ participant.name }}</h3>
  <h4 class="subtitle">Aciertos: {{ participant.score }}</h4>

  <h4 class="subtitle has-text-info">Equipos seleccionados</h4>
  <table class="table">
    <thead>
      <tr>
        <th>Grupo</th>
        <th>Primer lugar</th>
        <th>Segundo lugar</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="group in participant.teams"
        :key="group.groupName"
      >
        <td>{{ group.groupName }}</td>
        <td>
          <img :src="group.first.crestURI" style="width: 1rem">
          {{ group.first.team }}
          <span class="icon is-small has-text-success" v-if="group.first.hit">
            <i class="fas fa-check"></i>
          </span>
        </td>
        <td>
          <img :src="group.second.crestURI" style="width: 1rem">
          {{ group.second.team }}
          <span class="icon is-small has-text-success" v-if="group.second.hit">
            <i class="fas fa-check"></i>
          </span>
        </td>
      </tr>
    </tbody>
  </table>

  <p>
    <span class="has-text-success">{{ participant.goals }}</span>
    goles anotados por los equipos elegidos
  </p>

  <router-link to="/">
    <a class="button">
      <span class="icon is-small">
        <i class="fas fa-arrow-left"></i>
      </span>
      <span>Regresar</span>
    </a>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'ParticipantDetails',
  computed: {
    participant() {
      return this.$store.getters.participantsScore.find(
        participant => participant.name === this.$route.params.name);
    },
  },
};
</script>
