<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 offset-md3>
        <v-card>

            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Passord"
                      id="password"
                      v-model="password"
                      type="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <v-btn large primary type="submit">Logg inn</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: 'erikhals@gmail.com',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>
