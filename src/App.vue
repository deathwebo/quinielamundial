<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  beforeMount() {
    axios.get('http://api.football-data.org/v1/competitions/467/leagueTable', {
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
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
