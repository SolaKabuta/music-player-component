/**
 * CONFIG SHARED BETWEEN FRONT AND BACK.
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

/** MAP SLUG TO FILE NAME -> ONLY AVAILABLE TRACKS */
export const TRACKS_BY_SLUG = Object.fromEntries(
  TRACK_LIST.filter((track) => track.fileName).map((track) => [
    track.slug,
    track.fileName,
  ]),
);


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
  const fileName = TRACKS_BY_SLUG[slug];
  return fileName ? `/${fileName}` : '';
}

export function getTrackIndex(titleOrSlug) {
  const slug = titleToSlug(titleOrSlug);
  return TRACK_LIST.findIndex((t) => t.slug === slug);
}
