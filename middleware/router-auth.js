import firebase, {auth, googleProvider, facebookProvider} from '@/middleware/fireinit.js';

export default function({  store, redirect, route }) {
  console.log( firebase.auth().currentUser , store.state.user)
  let user = firebase.auth().currentUser;
  if( user != null && route.name == 'index') {
    redirect('/userdata');
  }
  if(user == null && route.name == 'userdata') {
    redirect('/')
  }
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/userdata')) {
    return true
  }
}