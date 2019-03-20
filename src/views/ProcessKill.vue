<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Process Killer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>
    <v-container>
      <v-card class="mx-auto pa-3">
        <v-layout row wrap>
          <v-flex xs12 pb-3>
            <v-label>Enter the pid of the process to kill:</v-label>
          </v-flex>

          <v-flex xs8 pb-4>
            <v-text-field v-model="pid" label="e.g. 6619" single-line outline></v-text-field>
          </v-flex>

          <v-flex xs7></v-flex>
          <v-flex xs4>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="red"
              class="black--text"
              @click="killProcess"
            >Kill Process
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
    pid: "1101",
    loading: false
  }),
  methods: {
    killProcess: function() {
      this.loading = !this.loading;
      const { spawn } = require("child_process");
      const killCommand = spawn("kill " + this.pid, []);

      alert(`Issued Kill comand for pid: ${this.pid}`);
      killCommand.stdout.on("data", data => {
        alert(`stdout: ${data}`);
      });

      killCommand.stderr.on("data", data => {
        alert(`stderr: ${data}`);
      });

      killCommand.on("close", code => {
        alert(`child process exited with code ${code}`);
      });
      this.loading = !this.loading;
    }
  }
};
</script>
