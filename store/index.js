import firebase, {auth, googleProvider, facebookProvider} from '@/middleware/fireinit.js';


export const state = () => ({
  user: {}
});

export const getters = {
  activeUser: (state, getters) => {
    return state.user
  }
};

export const mutations = {
  setUser: (state, payload) => {
    state.user = {...payload};
  }
};
    
export const actions = {
    autoSignIn ({commit}, payload) {
      commit('setUser', payload)
    },

    googleLogin ({commit}) {
      return new Promise((resolve, reject) => {
        auth.signInWithPopup(googleProvider)
          .then(res => {
            // commit('setUser', res.user)
            resolve(res);
          }).catch(err => {
            if(err.code == 'auth/account-exists-with-different-credential') {
              var pendingCred = err.credential;
              var email = err.email;
              console.log(auth.fetchSignInMethodsForEmail(email));
              reject('The E-Mail Exists with different Provider');
            }else reject(err.toString());
          });
      })
    },

    facebookLogin({commit}) {
      return new Promise((resolve, reject) => {
        auth.signInWithPopup(facebookProvider)
          .then(res => {
            // commit('setUser', res.user)
            resolve(res);
          }).catch(err => {
            if(err.code == 'auth/account-exists-with-different-credential') {
              var pendingCred = err.credential;
              var email = err.email;
              auth.fetchSignInMethodsForEmail(email).then(methods => console.log(methods))
              reject('The E-Mail Exists with different Provider');
            }else reject(err.toString());
          });
      })
    },

    signOut ({commit}) {
      auth.signOut().then(() => {
        commit('setUser', null)
      }).catch(err => console.log(error))
    }
};
