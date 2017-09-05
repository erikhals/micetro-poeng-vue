<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 lg4 offset-md3>
        <h4 class="headline">Spillernavn</h4>
        <form>
          <v-card>

              <v-list>
                <v-template v-for="player in players">
                  <v-list-tile two-line :ripple="false">
                    <v-list-tile-action>
                      <v-icon medium>person</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-text-field
                        v-model="player.name"
                        :key="player.number"
                        :label="'Player '+player.number"
                        :id="player.number"
                        counter
                        max="20"
                      />
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider />
                </v-template>
              </v-list>

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
