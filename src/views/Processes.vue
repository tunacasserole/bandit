<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Process Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-container>
      <v-card class="mx-auto pa-3">
        <v-layout row wrap>
          <v-flex xs12 pb-3>
            <v-label>Enter the name of the executable file:</v-label>
          </v-flex>

          <v-flex xs8 pb-4>
            <v-text-field v-model="fileName" label="path/to/file/name.ext" single-line outline></v-text-field>
          </v-flex>

          <v-flex xs8 pb-5>
            <v-label>Command line arguments:</v-label>
            <v-text-field v-model="processArguments"></v-text-field>
          </v-flex>

          <v-flex xs7></v-flex>
          <v-flex xs4>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="red"
              class="black--text"
              @click="startProcess"
            >Start Process
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
    agreement: false,
    processName: "path/to/process/processName.ext",
    processArguments: "-v --some-example",
    loading: false,
    password: undefined
  }),
  methods: {
    startProcess: function() {
      this.loading = !this.loading;
      const { spawn } = require("child_process");
      const ls = spawn("ls", ["-lh", "/usr"]);

      ls.stdout.on("data", data => {
        alert(`stdout: ${data}`);
      });

      ls.stderr.on("data", data => {
        alert(`stderr: ${data}`);
      });

      ls.on("close", code => {
        alert(`child process exited with code ${code}`);
      });
      this.loading = !this.loading;
    }
  }
};
</script>
