<template>
  <div class="participants">
    <h3>Participantes</h3>
    <el-table
      :data="participantsScore"
      :default-sort = "{prop: 'score', order: 'descending'}"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="props.row.teams"
            style="width: 100%">
            <el-table-column
              prop="groupName"
              label="Grupo">
            </el-table-column>
            <el-table-column
              prop="first"
              label="Primer lugar">
              <template slot-scope="scope">
                <img :src="scope.row.first.crestURI" style="width: 1rem">
                {{ scope.row.first.team }}
              </template>
            </el-table-column>
            <el-table-column
              prop="second"
              label="Segundo lugar">
              <template slot-scope="scope">
                <img :src="scope.row.second.crestURI" style="width: 1rem">
                {{ scope.row.second.team }}
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Participante">
      </el-table-column>
      <el-table-column
        prop="score"
        label="Aciertos">
      </el-table-column>
      <el-table-column
        prop="percentage"
        label="Porcentage de aciertos">
        <template slot-scope="scope">
          <el-progress
            :percentage="scope.row.percentage"
            :color="scope.row.color"
          ></el-progress>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Participants',
  computed: {
    ...mapGetters([
      'participantsScore',
    ]),
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 1rem;
}
</style>
