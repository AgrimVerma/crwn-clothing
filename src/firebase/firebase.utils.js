import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDXxoxWZm8I923bDnU3AhX2BnmzbE_8RYA", 
    authDomain: "crwn-db-bd37d.firebaseapp.com", 
    projectId: "crwn-db-bd37d",  
    storageBucket: "crwn-db-bd37d.appspot.com", 
    messagingSenderId: "193542061307", 
    appId: "1:193542061307:web:c0932e493586050387445e",  
    measurementId: "G-RHBBKH780B" 
};

export const createUserProfileDocument = async( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;