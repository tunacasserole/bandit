<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>File System Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>
    <v-container>
      <v-card class="mx-auto pa-3">
        <v-layout row wrap>
          <v-flex xs12>
            <v-textarea
              solo
              name="input-7-4"
              label="Solo textarea"
              value="Enter the name of the file you wish to create. Relative paths are supported.  Also, you must have the necessary permissions to perform this.  If needed, check the sudo option (coming soon...) to provide your username and password."
            ></v-textarea>
          </v-flex>

          <v-flex xs4></v-flex>
          <v-flex xs8>
            <v-text-field
              v-model="fileName"
              label="provide file name with .extension"
              single-line
              outline
            ></v-text-field>
          </v-flex>

          <v-flex xs4></v-flex>
          <v-flex xs8>
            <v-text-field
              v-model="password"
              box
              color="black"
              label="Password"
              style="min-height: 96px"
              type="password"
            ></v-text-field>
          </v-flex>

          <v-checkbox v-model="agreement" color="deep-purple">
            <template v-slot:label>Use sudo and the password provided to create my file.</template>
          </v-checkbox>

          <v-flex xs8></v-flex>
          <v-flex xs4>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="red"
              class="black--text"
              @click="createFile"
            >
              Create File
              <v-icon right>cloud_download</v-icon>
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
    fileName: "sample.txt",
    loading: false,
    password: undefined
  }),
  methods: {
    createFile: function() {
      this.loading = !this.loading;
      var fs = require("fs");
      var content = "some sample content";
      try {
        fs.writeFileSync(this.fileName, content, "utf-8");
        alert("Created your file " + this.fileName);
        var timestamp = Date.now();
        var logRow = {
          pid: this.pid,
          processName: "bandit",
          command: "mkfile",
          username: "aaron",
          description: "File Created!",
          fileName: this.fileName,
          timestamp: timestamp
        };
        var log4js = require("log4js");
        var logger = log4js.getLogger();
        logger.level = "debug";
        logger.debug(JSON.stringify(logRow));
      } catch (e) {
        alert("Failed to create the file !\n\n" + e);
      }
      this.loading = !this.loading;
    }
  }
};
</script>
