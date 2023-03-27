<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offser-md-3">
        <h2>Introduce match details</h2>
      </div>
      <form @submit.prevent="validsecretkeyAndProceed">
        <div class="form-group row">
          <label for="inputMatchID" class="col-sm-2 col-form-label"
            >Match ID</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputMatchID"
              placeholder="00000"
              v-model="matchID"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputTeam1" class="col-sm-2 col-form-label">Team 1</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputTeam1"
              placeholder="team1"
              v-model="team1"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputTeam2" class="col-sm-2 col-form-label">Team 2</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputTeam2"
              placeholder="team2"
              v-model="team2"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputMom" class="col-sm-2 col-form-label">MoM</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputMom"
              placeholder="MoM"
              v-model="mom"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="secretKey" class="col-sm-2 col-form-label"
            >Secret Key</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="*******"
              v-model="secretKey"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary bg-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matchID: null,
      matchNm: null,
      team1: null,
      team2: null,
      mom: null,
      secretKey: null,
      showlogs: null,
      useAPI: null,
      writeToDB: null,
      playersScore: new Map(),
      playersBowling: new Map(),
      playersCatchingStumping: new Map(),
      playersRunOuts: new Map(),
      playersBowlingBowledLbw: new Map(),
      playersNickName: new Map(),
      playersNickNameAsValue: new Map(),
      globalNickNameMapForMatch: new Map(),
      playersSubstitute: [],
      apiScore: {},
      obj: {},
      switchValues: {
        runs: "runs",
        fours: "fours",
        sixes: "sixes",
        Bowling: "wickets",
        BowledLbw: "bowledNlbw",
        CatchingStumping: "catchNstump",
        RunOuts: "runout",
        Substitute: "in11",
        mom: "mom",
      },
    };
  },
  methods: {
    async validsecretkeyAndProceed() {
      if (this.secretKey == "HailKing") {
        this.showlogs = true;
        this.useAPI = true;
        this.writeToDB = true;
        this.matchNm = this.matchID + "_" + this.team1 + "vs" + this.team2;
        console.log("HERREEE")
      } else {
        alert("Invalid Secret Key");
        return undefined;
      }
    },
  },
};
</script>
