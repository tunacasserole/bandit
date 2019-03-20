<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Network Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <template>
      <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
          <v-flex sm12 d-flex>
            <v-text-field label="Connection Address"></v-text-field>
          </v-flex>

          <v-flex sm6 d-flex>
            <v-select :items="items" label="Connection Style" solo></v-select>
          </v-flex>
          <v-flex sm2 d-flex></v-flex>
          <v-flex sm4 d-flex>
            <v-btn color="error">Connect</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    fileName: "sample.txt",
    loading: false,
    password: undefined,
    items: ["CURL", "AJAX", "SCP"]
  }),
  methods: {
    sendData: function() {
      var fs = require("fs");
      this.loading = !this.loading;
      var content = "some sample content";
      alert("Creating your file " + this.fileName);
      try {
        fs.writeFileSync(this.fileName, content, "utf-8");
      } catch (e) {
        alert("Failed to save the file !");
      }

      this.loading = !this.loading;
    }
  }
};
</script>
