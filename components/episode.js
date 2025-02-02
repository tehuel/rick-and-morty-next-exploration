import Link from 'next/link'

export default function EpisodeComponent ({ episode }) {
  return (
    <Link href="/episodes/[code]" as={ `/episodes/${episode.code}` }>
      <a>
        <div className="card" style={{height: 100 + "%"}}>
          <div className="card-content">
            <p className="subtitle">{episode.code}</p>
            <p className="title">{episode.name}</p>
            <p>Aired { episode.air_date }. { episode.characters.length } Characters.</p>
          </div>
        </div>
      </a>
    </Link>
  )
}