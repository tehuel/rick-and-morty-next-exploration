import Head from 'next/head'
import EpisodeComponent from '../components/episode'
import HeroComponent from '../components/hero'
import { getAllEpisodes } from '../lib/episodes'

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
                <div className="column is-half" key={ep.code}>
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

  const episodes = await getAllEpisodes();
  return {
    props: {
      episodes: episodes,
    }
  }
}