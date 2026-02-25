// test-firebase-token.js
// Run: node test-firebase-token.js
// Make sure the NestJS server is running on localhost:3000

const TOKEN = process.argv[2] || '';

if (!TOKEN) {
    console.error('Usage: node test-firebase-token.js <firebase_id_token>');
    process.exit(1);
}

// Decode and print token header + payload (no verification, just to inspect)
function decodeJwt(token) {
    const [header, payload] = token.split('.').slice(0, 2).map((part) => {
        const padded = part + '='.repeat((4 - (part.length % 4)) % 4);
        return JSON.parse(Buffer.from(padded, 'base64url').toString('utf8'));
    });
    return { header, payload };
}

console.log('\n─────────────── Token Inspection ───────────────');
try {
    const { header, payload } = decodeJwt(TOKEN);
    console.log('Algorithm :', header.alg);
    console.log('Issuer    :', payload.iss);
    console.log('Audience  :', payload.aud);
    console.log('Email     :', payload.email);
    console.log('Expires   :', new Date(payload.exp * 1000).toISOString());
    console.log('Expired?  :', Date.now() > payload.exp * 1000 ? '⚠️  YES' : '✅ No');

    const isFirebaseToken = payload.iss?.startsWith('https://securetoken.google.com/');
    const isGoogleToken = payload.iss === 'https://accounts.google.com';

    if (isFirebaseToken) {
        console.log('Token type: ✅ Firebase ID Token (correct for this endpoint)');
    } else if (isGoogleToken) {
        console.log('Token type: ⚠️  Google ID Token — Firebase Admin will REJECT this.');
        console.log('           You must sign in via Firebase (FirebaseAuth.signInWithCredential)');
        console.log('           and send the token from currentUser.getIdToken(), not the raw Google token.');
    } else {
        console.log('Token type: ❓ Unknown issuer');
    }
} catch (e) {
    console.error('Could not decode token:', e.message);
}

console.log('\n──────────────── API Call ────────────────────────');
fetch('http://localhost:3000/api/auth/google/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken: TOKEN }),
})
    .then(async (res) => {
        const body = await res.json();
        if (res.ok) {
            console.log('✅ Success  HTTP', res.status);
            console.log('User  :', body.user?.email, '|', body.user?.name);
            console.log('Token :', body.token?.slice(0, 40) + '...');
        } else {
            console.error('❌ Failed   HTTP', res.status);
            console.error('Message:', body.message || JSON.stringify(body));
        }
    })
    .catch((err) => {
        console.error('❌ Network error — is the server running on localhost:3000?');
        console.error(err.message);
    });
