<template>
  <v-row>
    <v-col class="text-center">
      <v-card outlined>
        <v-card-title>
          Logged In User's Data
        </v-card-title>
        <img class='ma-5' :src='user.photoURL' />
        <h4 class='mb-2'> 
          User Email :
          {{user.email}}
        </h4>
        <h4 class='mb-6'>
          User Name :
          {{user.displayName}}
        </h4>
        <v-card-actions>
          <v-btn
            @click='logout'
            large
            color='primary'
          >Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase, {auth, googleProvider, facebookProvider} from '@/middleware/fireinit.js';

export default {
  computed: {
    user() {
      return firebase.auth().currentUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut')
        .then(res => {
          console.log(res);
          this.$router.push('/');
        })
        .catch(err => console.log(err));
    },
  }
}
</script>