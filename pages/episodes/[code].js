import { getAllEpisodes } from '../../lib/episodes'

export default function Episode({ episode }) {
  return (
    <section className="section is-medium">
      <h1 className="title is-1">{ episode.name }</h1>
      <h2 className="title is-3">Characters</h2>
      <ul>
        {
          episode.characters.map(char => {
            return (
              <li>{ char }</li>
            )
          })
        }
      </ul>
    </section>
  )
}

export async function getStaticProps({ params }) {
  const episodes = await getAllEpisodes();
  const episode = episodes.find(ep => ep.code === params.code)
  return {
    props: {
      episode
    }
  }
}

export async function getStaticPaths() {
  const episodes = await getAllEpisodes();

  const paths = episodes.map(ep => {
    return {
      params: {
        code: ep.code
      }
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
