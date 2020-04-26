export default function EpisodeComponent ({ episode }) {
  return (
    <>
      <p>{episode.code}</p>
      <p>{episode.name}</p>
      <pre>{JSON.stringify(episode)}</pre>
    </>
  )
}