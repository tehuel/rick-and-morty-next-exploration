import Head from 'next/head'
import fetch from 'node-fetch'
import EpisodeComponent from '../components/episode'

export default function Home({ episodes }) {
  return (
    <div className="container">
      <Head>
        <title>Rick And Morty - Next.js Exploration</title>
      </Head>
      <p>Episodes</p>
      { episodes.map(ep =>
        <EpisodeComponent episode={ep} />
      ) }
    </div>
  )
}

export async function getStaticProps() {

  const page1 = await fetch("https://rickandmortyapi.com/api/episode?page=1")
  const page2 = await fetch("https://rickandmortyapi.com/api/episode?page=2")

  const [ res1, res2 ] = await Promise.all([page1, page2]);
  const [ eps1, eps2 ] = await Promise.all([ res1.json(), res2.json() ])

  const episodes = eps1.results.concat(eps2.results);
  return {
    props: {
      episodes: episodes.map(ep => {
        return {
          name: ep.name,
          code: ep.episode,
          season: ep.episode.substr(1,2),
          air_date: ep.air_date,
          characters: ep.characters,
        }
      }),
    }
  }
}