const admin = require('firebase-admin');
const path = require('path');

// Load service account file
const serviceAccountPath = path.join(__dirname, 'serviceAccount.json');
let serviceAccount;

try {
    serviceAccount = require(serviceAccountPath);
} catch (error) {
    console.error('Error loading service account file:', error);
    process.exit(1);
}

// Firebase Admin SDK initialization
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // You can add other configurations here if needed
        // databaseURL: 'https://your-project-id.firebaseio.com',
        // storageBucket: 'your-project-id.appspot.com'
    });

    console.log('✅ Firebase Admin SDK initialized successfully');
} catch (error) {
    console.error('❌ Error initializing Firebase Admin SDK:', error);
    process.exit(1);
}

// Export the admin instance
const auth = admin.auth();
const firestore = admin.firestore();

module.exports = {
    admin,
    auth,
    firestore
};
