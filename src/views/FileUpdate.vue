<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>File System Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-form>
      <v-container>
        <v-card class="mx-auto" style="max-width: 600px;">
          <v-form ref="form" v-model="form" class="pa-3">
            <v-layout row wrap>
              <v-flex xs12>
                <v-textarea
                  solo
                  name="input-7-4"
                  label="Solo textarea"
                  value="Enter the name of the file you wish to edit."
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

              <v-flex xs8></v-flex>
              <v-flex xs4>
                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  color="red"
                  class="black--text"
                  @click="updateFile"
                >Create File
                  <v-icon right>cloud_download</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    fileName: "sample.txt",
    newContent: "sample.txt",
    loading: false,
    form: false
  }),
  methods: {
    updateFile: function() {
      var fs = require("fs");
      this.loading = !this.loading;
      var content = this.newContent;
      try {
        fs.writeFileSync(this.fileName, content, "utf-8");
        alert("Updated the file " + this.fileName);
      } catch (e) {
        alert("Failed to update the file !");
      }

      this.loading = !this.loading;
    }
  }
};
</script>
