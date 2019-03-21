<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Command Line Vector</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>
    <v-container>
      <v-card class="mx-auto pa-3">
        <v-layout row wrap>
          <v-flex xs12 pb-3>
            <v-label>Enter the command or path to the executable file:</v-label>
          </v-flex>

          <v-flex xs8 pb-4>
            <v-text-field v-model="processName" single-line outline></v-text-field>
          </v-flex>

          <v-flex xs8 pb-5>
            <v-label>Command line arguments:</v-label>
            <v-text-field v-model="processArguments"></v-text-field>
            <h6>(comma-separated list)</h6>
          </v-flex>

          <v-flex xs7></v-flex>
          <v-flex xs4>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="red"
              class="black--text"
              @click="startProcess"
            >
              Start Process
              <v-icon right>play_circle_outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    processName: "ls",
    processArguments: "-lh,/usr",
    loading: false,
    password: undefined
  }),
  methods: {
    startProcess: function() {
      this.loading = !this.loading;
      const { spawn } = require("child_process");
      var args = [];

      if (this.processArguments.length > 0) {
        args = this.processArguments.split(",");
      }

      const newProcess = spawn(this.processName, args);

      alert(`Spawned child pid: ${newProcess.pid}`);
      newProcess.stdout.on("data", data => {
        alert(`stdout: ${data}`);
        var timestamp = Date.now();
        var logRow = {
          pid: "0",
          processName: "bandit",
          command: "curl http",
          username: "aaron",
          description: "Data Sent!",
          timestamp: timestamp
        };
        var log4js = require("log4js");
        var logger = log4js.getLogger();
        logger.level = "debug";
        logger.debug(JSON.stringify(logRow));
      });

      newProcess.stderr.on("data", data => {
        alert(`stderr: ${data}`);
      });

      this.loading = !this.loading;
    }
  }
};
</script>
