
import firebase from 'firebase/app';
import 'firebase/firestore'


class Server {

    db = null

    response = new Promise( () =>{} )

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyB7JgK_ztOnGDz2e6hwm-IERDFFjI8Zso4",
            authDomain: "proyectojms-38b7c.firebaseapp.com",
            databaseURL: "https://proyectojms-38b7c.firebaseio.com",
            projectId: "proyectojms-38b7c",
            storageBucket: "proyectojms-38b7c.appspot.com",
            messagingSenderId: "228394933239",
            appId: "1:228394933239:web:a680b99bd56601906a6cf2",
            measurementId: "G-CK704MHJ73"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } 

        this.db = firebase.firestore()
    }

    getCategorias() {   
        return this.db.collection("Resources").doc("Categorias").get() //.then( (docSnap) => console.log(docSnap.data()) ) 
    }

    getComerciantes(categoria){
        return this.db.collection("Comerciantes").doc(categoria).get() //.then( (docSnap) => console.log(docSnap.data()) )
    }
}

export default Server;