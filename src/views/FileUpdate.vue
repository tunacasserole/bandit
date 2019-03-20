<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>File System Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-container>
      <v-card class="mx-auto pa-3">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>Enter the name of the file you wish to edit and the new contents.</h3>
            <br>
          </v-flex>

          <v-flex xs8>
            <v-text-field
              v-model="fileName"
              label="provide file name with .extension"
              single-line
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              solo
              v-model="newContent"
              name="newContent"
              label="New File Contents"
              value="Enter the contents of the file you wish to edit."
            ></v-textarea>
          </v-flex>

          <v-flex xs8></v-flex>
          <v-flex xs4>
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="red"
              class="black--text"
              @click="updateFile"
            >Update File
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
    newContent: "New Contents.",
    loading: false,
    drawer: null
  }),
  methods: {
    updateFile: function() {
      var fs = require("fs");
      this.loading = !this.loading;
      fs.writeFile(this.fileName, this.newContent, err => {
        if (err) {
          alert("Failed to update the file ! \n\n" + err);
        } else {
          alert("Updated your file ! \n\n " + this.fileName);
        }
      });

      this.loading = !this.loading;
    }
  }
};
</script>
