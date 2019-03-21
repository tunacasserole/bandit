<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Network Attack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>
    <template>
      <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
          <v-flex sm12 d-flex>
            <v-text-field v-model="destination" label="Connection Address"></v-text-field>
          </v-flex>

          <v-flex sm6 d-flex>
            <v-select :items="connectionStyles" label="Connection Style" solo></v-select>
          </v-flex>
          <v-flex sm2 d-flex></v-flex>
          <v-flex sm4 d-flex>
            <v-btn @click="sendDataByRequest();" color="error">Send Data Now !</v-btn>
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
    destination: "http://mockbin.com/request",
    destinationPort: "8080",
    connectionStyles: ["Curl - coming soon", "Node Request"]
  }),
  methods: {
    sendDataByRequest: function() {
      this.loading = !this.loading;
      var destination = this.destination;
      var destinationPort = this.destinationPort;
      var request = require("request");
      var options = {
        method: "POST",
        url: this.destination,
        qs: { foo: ["bar", "baz"] },
        headers: {
          "x-pretty-print": "2",
          "content-type": "application/json",
          accept: "application/json"
        },
        body: { foo: "bar" },
        json: true
      };

      request(options, function(error) {
        if (error) {
          alert("Failed to send the data !\n\n" + error);
        } else {
          alert("Data Sent to " + destination + "!\n\n");
          var timestamp = Date.now();
          var logRow = {
            pid: "0",
            processName: "bandit",
            command: "curl http",
            username: "aaron",
            description: "Data Sent!",
            sourceAddress: "localhost",
            sourcePort: "3000",
            destinationAddress: destination,
            destinationPort: destinationPort,
            dataSent: "100kb",
            dataProtocol: "tcp",
            timestamp: timestamp
          };
          var log4js = require("log4js");
          var logger = log4js.getLogger();
          logger.level = "debug";
          logger.debug(JSON.stringify(logRow));
        }
      });

      this.loading = !this.loading;
    }
  }
};
</script>
