import fetch from 'node-fetch'

export async function getAllEpisodes () {

  const page1 = await fetch('https://rickandmortyapi.com/api/episode?page=1')
  const page2 = await fetch('https://rickandmortyapi.com/api/episode?page=2')

  const [res1, res2] = await Promise.all([page1, page2])
  const [eps1, eps2] = await Promise.all([res1.json(), res2.json()])

  const episodes = eps1.results.concat(eps2.results)

  return episodes.map(ep => {
    return {
      name: ep.name,
      code: ep.episode,
      season: ep.episode.substr(1, 2),
      air_date: ep.air_date,
      characters: ep.characters,
    }
  });
}