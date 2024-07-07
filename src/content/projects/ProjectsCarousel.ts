export const movies = [
  { poster: '/imgs/experience/educationWallpaper.jpg', name: 'Airplane' },
  {
    poster: '/imgs/experience/educationWallpaper.jpg',
    name: 'Family man',
  },
  {
    poster: '/imgs/experience/educationWallpaper.jpg',
    name: 'Laboratory',
  },
  { poster: '/imgs/experience/educationWallpaper.jpg', name: 'Napoleon' },
  {
    poster: '/imgs/experience/educationWallpaper.jpg',
    name: 'Person in Darkness',
  },
  {
    poster: '/imgs/experience/educationWallpaper.jpg',
    name: 'Scary Building',
  },
  { poster: '/imgs/experience/educationWallpaper.jpg', name: 'Stars' },
]

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5)
