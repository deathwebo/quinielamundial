const getters = {
  participantsScore: (state) => {
    const participantsScores = Object.keys(state.participants).map((name) => {
      const participant = state.participants[name];
      let score = 0;
      const teams = [];
      Object.keys(state.standings).forEach((groupName) => {
        const group = state.standings[groupName];
        // First place
        if (participant.selections[groupName][0] === group[0].teamId) {
          score += 1;
        }

        // Second place
        if (participant.selections[groupName][1] === group[1].teamId) {
          score += 1;
        }
        const first = group.find(team => team.teamId === participant.selections[groupName][0]);
        const second = group.find(team => team.teamId === participant.selections[groupName][1]);
        teams.push({
          groupName,
          first,
          second,
        });
      });

      const percentage = ((score / 16) * 100);

      return {
        name,
        score,
        percentage,
        color: participant.color,
        teams,
      };
    });
    return participantsScores;
  },
};

export default getters;
