<template>
  <div class="container">
    <h1 class="title">Quiniela Mundial Rusia 2018</h1>
    <h2 class="subtitle">Jornada {{ matchday }}</h2>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  beforeMount() {
    axios.get('https://api.football-data.org/v1/competitions/467/leagueTable', {
      headers: {
        'X-Auth-Token': '577b28c15f7f471592e0ca6bb4e08381',
      },
    })
      // eslint-disable-next-line
      .then(response => {
        const { matchday, standings } = response.data;
        this.$store.commit('setMatchday', matchday);
        this.$store.commit('setStandings', standings);
      });
  },
  computed: {
    matchday() {
      return this.$store.state.matchday;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
