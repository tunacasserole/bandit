<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>File System Attacks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>send</v-icon>
    </v-toolbar>
    <v-form>
      <v-container>
        <v-card class="mx-auto" style="max-width: 500px;">
          <v-form ref="form" v-model="form" class="pa-3 pt-4">
            <v-layout row wrap>
              <v-flex xs12>
                <v-textarea
                  solo
                  name="input-7-4"
                  label="Solo textarea"
                  value="Enter the name of the file you wish to create.  You must have the necessary permissions to perform this.  If you experience any issues, check the sudo option (coming soon...) to provide your username and password."
                ></v-textarea>
              </v-flex>

              <v-flex xs4></v-flex>
              <v-flex xs8>
                <v-text-field label="provide file name with .extension" single-line outline></v-text-field>
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

              <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
                <template v-slot:label>Use sudo and the password provided to create my file.</template>
              </v-checkbox>
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
    bio:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => (v || "").match(/@/) || "Please enter a valid email",
      length: len => v =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      password: v =>
        (v || "").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
      required: v => !!v || "This field is required"
    }
  })
};
</script>
