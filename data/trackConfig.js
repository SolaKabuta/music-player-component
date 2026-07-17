/**
 * Configuration partagée entre le front (React) et le serveur Bun.
 * Une seule source de vérité pour les morceaux disponibles.
 */

export const TRACK_LIST = [
  { slug: 'vertigo', title: 'Vertigo', fileName: null },
  { slug: 'regrets', title: 'Regrets', fileName: null },
  { slug: 'twisted_truth', title: 'Twisted Truth', fileName: null },
  {
    slug: 'bad_news',
    title: 'Bad News (I Kill The President)',
    fileName: 'BadNewsIKill ThePresident.wav',
  },
  {
    slug: 'london_calls',
    title: 'London Calls (Interlude)',
    fileName: 'LondonCallsInterlude.wav',
  },
];

/** Map slug → nom de fichier (uniquement les morceaux servis par le serveur) */
export const TRACKS_BY_SLUG = Object.fromEntries(
  TRACK_LIST.filter((track) => track.fileName).map((track) => [
    track.slug,
    track.fileName,
  ]),
);

export const AUDIO_API_URL = 'http://localhost:4000';

export function titleToSlug(titleOrSlug) {
  const track = TRACK_LIST.find(
    (t) => t.title === titleOrSlug || t.slug === titleOrSlug,
  );
  return track?.slug ?? null;
}

export function slugToTitle(slug) {
  return TRACK_LIST.find((t) => t.slug === slug)?.title ?? slug;
}

export function getAudioUrl(slug) {
  return `${AUDIO_API_URL}/api/track/${slug}`;
}

export function getTrackIndex(titleOrSlug) {
  const slug = titleToSlug(titleOrSlug);
  return TRACK_LIST.findIndex((t) => t.slug === slug);
}
