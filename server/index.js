// // index.js
// // Lance avec : bun run index.js
// // ou via un script "start": "bun run index.js"

// const PORT = 4000;

// // Whitelist des morceaux disponibles
// // clé = id côté front, valeur = nom du fichier sur le disque
// const TRACKS = {
//   vertigo: 'Vertigo.mp3',
//   regrets: 'Regrets.mp3',
//   twisted_truth: 'TwistedTruth.mp3',
//   bad_news: 'BadNewsIKillThePresident.mp3',
//   london_calls: 'LondonCallsInterlude.mp3',
// };

// // Dossier contenant les fichiers audio (relatif à index.js)
// const AUDIO_DIR = new URL('./audio_files/', import.meta.url).pathname;

// function getFilePath(fileName) {
//   // Construit le chemin absolu du fichier audio
//   return AUDIO_DIR + fileName;
// }

// const server = Bun.serve({
//   port: PORT,

//   async fetch(req) {
//     const url = new URL(req.url);

//     // Route: /api/track/vertigo
//     if (url.pathname.startsWith('/api/track/')) {
//       const id = url.pathname.replace('/api/track/', ''); // ex: "vertigo"
//       const fileName = TRACKS[id];

//       if (!fileName) {
//         return new Response('Track not found', { status: 404 });
//       }

//       const filePath = getFilePath(fileName);

//       try {
//         const file = Bun.file(filePath);

//         const exists = await file.exists();
//         if (!exists) {
//           return new Response('File not found on server', { status: 404 });
//         }

//         const fullBuffer = await file.arrayBuffer();
//         const fileSize = fullBuffer.byteLength;

//         const range = req.headers.get('range');

//         // On gère le Range pour pouvoir seek dans la timeline
//         if (range) {
//           // Exemple de header: "bytes=0-"
//           const parts = range.replace(/bytes=/, '').split('-');
//           const start = parseInt(parts[0], 10);
//           const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

//           const chunkSize = end - start + 1;
//           const chunk = fullBuffer.slice(start, end + 1);

//           return new Response(chunk, {
//             status: 206,
//             headers: {
//               'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//               'Accept-Ranges': 'bytes',
//               'Content-Length': String(chunkSize),
//               'Content-Type': 'audio/mpeg',
//               // CORS dev – adapte selon ton front
//               'Access-Control-Allow-Origin': 'http://localhost:3000',
//             },
//           });
//         }

//         // Pas de Range → on envoie tout le fichier
//         return new Response(fullBuffer, {
//           status: 200,
//           headers: {
//             'Content-Length': String(fileSize),
//             'Accept-Ranges': 'bytes',
//             'Content-Type': 'audio/mpeg',
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//           },
//         });
//       } catch (err) {
//         console.error(err);
//         return new Response('Server error', { status: 500 });
//       }
//     }

//     // Route de test
//     if (url.pathname === '/') {
//       return new Response('Bun audio server is running', {
//         headers: { 'Content-Type': 'text/plain' },
//       });
//     }

//     return new Response('Not found', { status: 404 });
//   },
// });

// console.log(`🎧 Bun audio server running on http://localhost:${PORT}`);
