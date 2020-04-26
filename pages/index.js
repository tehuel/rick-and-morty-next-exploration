import Head from 'next/head'
import fetch from 'node-fetch'
import EpisodeComponent from '../components/episode'
import HeroComponent from '../components/hero'

export default function Home({ episodes }) {
  return (
    <>
      <Head>
        <title>Rick And Morty - Next.js Exploration</title>
      </Head>
      <HeroComponent/>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title is-3">Episodes</h1>
          <div className="columns is-multiline">
            { episodes.map(ep => {
              return (
                <div className="column is-half">
                  <EpisodeComponent episode={ep} />
                </div>
              )
            }) }
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>rick-and-morty-next-exploration</strong> by <a href="https://tehuel.blog">Tehuel</a>
          </p>
          <p>
            view source code | data from <a href="https://rickandmortyapi.com/">rickandmortyapi.com</a> | comments?
          </p>
        </div>
      </footer>
    </>
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