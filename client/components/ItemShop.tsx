import { Player } from '../../models/player'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

interface Props {
  player: Player
  addGold: (gold: number) => void
  addItems: (item: string[]) => void
  updateEvents: (events: Record<string, boolean>) => void
}

function ItemShop({ player, addGold, addItems, updateEvents }: Props) {
  //list of items for sale in the Item Store
  const getTibetanSingingBowl = useCallback(() => {
    addItems(['Tibetan Singing Bowl'])

    addGold(-120)
  }, [addItems, addGold])

  const getZeldaSword = useCallback(() => {
    addItems(['Zelda Sword'])

    addGold(-69)
  }, [addItems, addGold])

  const getCurlyBrace = useCallback(() => {
    addItems(['Curly Brace'])
    updateEvents({ foundBrace: true })
    addGold(-50)
  }, [])

  const getHealingWater = useCallback(() => {
    addItems(['Healing Water'])
    addGold(-5)
  }, [addItems, addGold])

  const getExplosives = useCallback(() => {
    addItems(['Explosives'])
    addGold(-30)
  }, [addItems, addGold])

  const donateMoneyToChurchOfWhare = useCallback(() => {
    addGold(-5)
  }, [addGold])

  return (
    <>
      <div className="location-name">
        <h2>The Redux Store</h2>
      </div>
      <div className="location-content-container">
        <p>
          Welcome to the Redux Store! We GET and SEND things from our warehouse
          and wait for things to get to us through our teams of ACTIONS and
          REDUCERS so that you do not have to wait! Come query our list items!
          <Link to="/loc/town-square" className="link">
            Town Square
          </Link>
          .
        </p>
        {player.inventory.includes('Tibetan Singing Bowl') ? (
          <p>You already have a Tibetan Singing Bowl</p>
        ) : (
          <button onClick={getTibetanSingingBowl}>
            Buy that annoying Tibetan Singing Bowl the Facilitators use in the
            morning for 120 gold
          </button>
        )}

        {player.inventory.includes('Curly Brace') ? (
          <p>You already have a Curly Brace fool</p>
        ) : (
          <button onClick={getCurlyBrace}>Buy Curly Brace for 50 gold</button>
        )}

        {player.inventory.includes('Healing Water') ? (
          <p>You already have Healing Water</p>
        ) : (
          <button onClick={getHealingWater}>
            Buy Healing Water for 5 gold
          </button>
        )}

        {player.inventory.includes('Explosives') ? (
          <p>You already have Explosives</p>
        ) : (
          <button onClick={getExplosives}>Buy Explosives for 30 gold</button>
        )}

        <button onClick={donateMoneyToChurchOfWhare}>
          Donate 5 gold to the Church{' '}
        </button>

        {player.inventory.includes('Zelda Sword') ? (
          <p>You already have the Zelda Sword</p>
        ) : (
          <button onClick={getZeldaSword}>
            Get the Zelda Sword for 69 gold
          </button>
        )}
      </div>
    </>
  )
}

export default ItemShop
