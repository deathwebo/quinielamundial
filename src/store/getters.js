const getters = {
  participantsScore: (state) => {
    const participantsScores = Object.keys(state.participants).map((name) => {
      const participant = state.participants[name];
      let score = 0;
      const teams = [];
      let goals = 0;
      Object.keys(state.standings).forEach((groupName) => {
        const group = state.standings[groupName];
        let firstHit = false;
        let secondHit = false;
        // First place
        if (participant.selections[groupName][0] === group[0].teamId) {
          score += 1;
          goals += group[0].goals;
          firstHit = true;
        }

        // Second place
        if (participant.selections[groupName][1] === group[1].teamId) {
          score += 1;
          goals += group[0].goals;
          secondHit = true;
        }
        const firstRaw = group.find(team => team.teamId === participant.selections[groupName][0]);
        const secondRaw = group.find(team => team.teamId === participant.selections[groupName][1]);

        const first = {
          ...firstRaw,
          hit: firstHit,
        };

        const second = {
          ...secondRaw,
          hit: secondHit,
        };

        teams.push({
          groupName,
          first,
          second,
        });
      });

      const percentage = ((score / 16) * 100);
      let colorClass = '';

      if (percentage < 30) {
        colorClass = 'is-danger';
      } else if (percentage >= 30 && percentage < 70) {
        colorClass = 'is-warning';
      } else {
        colorClass = 'is-success';
      }

      return {
        name,
        score,
        percentage,
        colorClass,
        teams,
        goals,
      };
    });
    return participantsScores;
  },
};

export default getters;
