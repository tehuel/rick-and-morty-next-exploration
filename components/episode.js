export default function EpisodeComponent ({ episode }) {
  return (
    <div className="card" style={{height: 100 + "%"}}>
      <div className="card-content">
        <p className="subtitle">{episode.code}</p>
        <p className="title">{episode.name}</p>
        <p>Aired { episode.air_date }. { episode.characters.length } Characters.</p>
      </div>
    </div>
  )
}