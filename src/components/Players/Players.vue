<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 lg4 offset-md3>
        <h4 class="headline">Spillernavn</h4>
        <form>
          <v-card>
            <v-card-text>
              <v-layout row justify-space-around v-for="player in players">
                <v-icon medium class="mb-3">person</v-icon>
                <v-flex xs10>
                  <v-text-field
                  v-model="player.name"
                  :key="player.number"
                  :label="'Player '+player.number"
                  :id="player.number"
                  counter
                  max="20"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-layout row justify-space-around>
            <v-btn large class="primary mb-4">Lagre</v-btn>
          </v-layout>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        players: [
          {name: '', number: 1},
          {name: '', number: 2},
          {name: '', number: 3},
          {name: '', number: 4},
          {name: '', number: 5},
          {name: '', number: 6},
          {name: '', number: 7},
          {name: '', number: 8},
          {name: '', number: 9},
          {name: '', number: 10},
          {name: '', number: 11},
          {name: '', number: 12},
          {name: '', number: 13}
        ]
      }
    },
    methods: {
    }
  }
</script>
