<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card outlined class='pa-4'>
        <h4 class="headline text-center ma-4">
          Please Choose Your Prefered Login Type
        </h4>
        <div class='text-center'>
          <v-btn
          @click='googleLogin'
          large
          color='red'
          class='ma-5'
        ><v-icon left>mdi-google</v-icon> Login With Google </v-btn>         
         <v-btn
          @click='facebookLogin'
          large
          color='blue'
          class='ma-5'
        ><v-icon left>mdi-facebook</v-icon> Login With Facebook </v-btn>          
        </div>
      </v-card>
    </v-col>
    <v-snackbar
      v-model="snackbar"
      timeout="3000"
    >
      {{ text }}
    </v-snackbar>
  </v-row>
</template>

<script>

export default {
  data() {
    return {
      snackbar: false,
      text: '',
    }
  },
  methods: {
    googleLogin() {
      this.$store.dispatch('googleLogin')
        .then(res => {
          this.$router.replace('/userdata');
        }).catch(err => {
          this.text = err;
          this.snackbar = true;
        })
    },
    facebookLogin() {
      this.$store.dispatch('facebookLogin')
        .then(res => {
          this.$router.replace('/userdata');
        }).catch(err => {
          this.text = err;
          this.snackbar = true;
        })
    }
  },
}
</script>
