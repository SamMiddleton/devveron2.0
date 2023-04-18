import { Player } from '../../models/player'
import { Link } from 'react-router-dom'

interface Props {
  player: Player
  setPlayer: (player: Player) => void
}

function Castle({ player, setPlayer }: Props) {
  return (
    <>
      <div className="location-name">
        <h2>Laputa Castle</h2>
      </div>
      <div className="location-content-container">
        <p>
          <Link to="/loc/woods" className="link">
            Woods
          </Link>
          .
        </p>
      </div>
    </>
  )
}

export default Castle