<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Network Connections</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>
    <template>
      <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
          <v-flex sm6 d-flex>
            <v-text-field v-model="connectionAddress" label="Connect To"></v-text-field>
          </v-flex>
          <v-flex sm3 d-flex>
            <v-text-field v-model="connectionPort" label="Port"></v-text-field>
          </v-flex>
          <v-flex sm3 d-flex>
            <v-btn @click="establishNetworkConnection();" color="error">Connect</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    processName: "nc",
    connectionAddress: "127.0.0.1",
    connectionPort: "64"
  }),
  methods: {
    establishNetworkConnection: function() {
      this.loading = !this.loading;
      const { spawn } = require("child_process");

      const newProcess = spawn(this.processName, [
        this.connectionAddress,
        this.connectionPort
      ]);

      alert(`Spawned child pid: ${newProcess.pid}`);
      newProcess.stdout.on("data", data => {
        alert(`stdout: ${data}`);
      });

      var timestamp = Date.now();
      var logRow = {
        pid: newProcess.pid,
        processName: "bandit",
        username: "aaron",
        command: "nc",
        description: "Network Connection Established!",
        timestamp: timestamp
      };
      var log4js = require("log4js");
      var logger = log4js.getLogger();
      logger.level = "debug";
      logger.debug(JSON.stringify(logRow));

      newProcess.stderr.on("data", data => {
        alert(`stderr: ${data}`);
      });

      this.loading = !this.loading;
    }
  }
};
</script>
