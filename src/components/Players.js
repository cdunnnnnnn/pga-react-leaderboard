import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

import Player from './Player'
import Form from './Form'

function Players() {
  const [players, setPlayers] = useState([])
  const [loading, loadingData] = useState(true)

  useEffect(() => {
    const getPlayers = async () => {
      const response = await fetch(
        'https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/players',
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'player',
          },
          method: 'GET',
        }
      )

      const json = await response.json()

      if (json.length) {
        setPlayers(json)
        loadingData(false)
      }
    }

    getPlayers()
  })

  const addPlayer = async newPlayer => {
    if (newPlayer.score !== '') {
      const response = await fetch(
        'https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/players',
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'player',
          },
          body: JSON.stringify({
            firstName: newPlayer.firstName,
            lastName: newPlayer.lastName,
            score: newPlayer.score,
            country: newPlayer.country,
            image: newPlayer.image,
          }),
          method: 'POST',
        }
      )

      const json = await response.json()

      setPlayers([...players, { json }])
    }
  }

  const editPlayer = async (updates, id) => {
    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/players/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'player',
        },
        body: JSON.stringify(updates),
        method: 'PUT',
      }
    )

    const json = await response.json()

    if (id === json._id) {
      setPlayers([...players, { json }])
    }
  }

  const removePlayer = async id => {
    const response = await fetch(
      `https://v61fbagrwl.execute-api.us-east-1.amazonaws.com/dev/api/players/${id}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'player',
        },
        method: 'DELETE',
      }
    )

    const json = await response.json()

    if (json.deletedCount === 1) {
      const newPlayer = [...players]

      newPlayer.splice(id, 1)
      setPlayers(newPlayer)
    }
  }

  return (
    <div className="flex flex-col flex-col-reverse md:flex-row max-w-6xl mx-auto py-8">
      <aside className="w-full md:w-1/4 py-2 px-6 md:pr-0">
        <div className="w-full h-full bg-white mx-auto shadow-lg rounded-sm overflow-hidden pb-4 md:pb-0">
          <Form addPlayer={addPlayer} />
        </div>
      </aside>
      <main className="w-full md:w-3/4">
        <div className="flex flex-col w-full px-6">
          {!loading &&
            players
              .sort((a, b) => {
                if (a.lastName < b.lastName) return -1
              })
              .sort((a, b) => {
                return a.score - b.score
              })
              .map(player => (
                <Player
                  player={player}
                  key={player._id}
                  id={player._id}
                  editPlayer={editPlayer}
                  removePlayer={removePlayer}
                />
              ))}
        </div>
      </main>
    </div>
  )
}

export default Players
