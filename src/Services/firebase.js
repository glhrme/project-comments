import firebase from 'firebase/app';
import 'firebase/database';
import fconfig from './config.json';

const firebaseConfig = {
    apiKey: fconfig.firebase.apiKey,
    authDomain: fconfig.firebase.authDomain,
    databaseURL: fconfig.firebase.databaseURL,
    projectId: fconfig.firebase.projectId,
    storageBucket: fconfig.firebase.storageBucket,
    messagingSenderId: fconfig.firebase.messagingSenderId,
    appId: fconfig.firebase.appId
};

firebase.initializeApp(firebaseConfig);

//Criando uma const do banco (uma nova conexão com o banco.)
export const database = firebase.database();

//export const auth = firebase.auth();