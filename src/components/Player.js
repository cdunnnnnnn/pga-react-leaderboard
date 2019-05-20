import React, { useState, useEffect } from 'react'
import { useFormState } from 'react-use-form-state'

function Player({ player, id, editPlayer, removePlayer }) {
  const [toggle, setToggle] = useState(false)
  const [formState, { text, number }] = useFormState()

  const toggleEdit = () => {
    setToggle(!toggle)
  }

  const handleSubmit = event => {
    const updatedValues = event.values

    editPlayer(updatedValues, id)
    formState.clear()
    setToggle(!toggle)
  }

  return (
    <div className="w-full my-2">
      <div className="w-full h-full bg-white mx-auto shadow-lg rounded-sm overflow-hidden pb-4 sm:pb-0">
        <div className="flex flex-col sm:flex-row items-center sm:pr-4">
          {!toggle ? (
            <>
              <div className="w-full sm:w-1/5 pb-4 sm:pb-0">
                <div className="relative block w-full h-32 sm:h-32 overflow-hidden">
                  {player.image ? (
                    <img
                      className="absolute inset-0 min-w-full min-h-full object-cover"
                      src={player.image}
                      alt={
                        player.lastName
                          ? `${player.lastName}, ${player.firstName}`
                          : player.firstName
                      }
                    />
                  ) : (
                    <img
                      className="absolute inset-0 min-w-full min-h-full object-cover"
                      src="https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-user-avatar-dc6f2da9.gif"
                      alt={
                        player.lastName
                          ? `${player.lastName}, ${player.firstName}`
                          : player.firstName
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-3/5 text-left px-8 sm:pr-2 sm:mr-2 sm:border-r-2 sm:border-gray-200">
                <div className="sm:w-1/2 sm:pr-2 sm:mr-2 sm:border-r-2 sm:border-gray-200">
                  <p className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-white text-center mr-2">
                    {player.country}
                  </p>
                  <p className="text-3xl sm:text-xl md:text-3xl font-bold font-display leading-tight py-2">
                    {player.lastName
                      ? `${player.lastName}, ${player.firstName}`
                      : player.firstName}
                  </p>
                </div>
                <div className="sm:w-1/2 sm:px-4 pb-4">
                  <p className="text-2xl leading-tight text-gray-800 font-bold py-1">
                    <span className="block text-sm text-gray-600">Score:</span>
                    <span className="block text-3xl">{player.score}</span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full sm:w-1/5 pb-4 sm:pb-0">
                <div className="relative block w-full h-32 sm:h-32 overflow-hidden">
                  {player.image ? (
                    <img
                      className="absolute inset-0 min-w-full min-h-full object-cover"
                      src={player.image}
                      alt={
                        player.lastName
                          ? `${player.lastName}, ${player.firstName}`
                          : player.firstName
                      }
                    />
                  ) : (
                    <img
                      className="absolute inset-0 min-w-full min-h-full object-cover"
                      src="https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-user-avatar-dc6f2da9.gif"
                      alt={
                        player.lastName
                          ? `${player.lastName}, ${player.firstName}`
                          : player.firstName
                      }
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-3/5 text-left px-8 sm:pr-2 sm:mr-2 sm:border-r-2 sm:border-gray-200">
                <div className="sm:w-1/2 sm:pr-2 sm:mr-2 sm:border-r-2 sm:border-gray-200">
                  <p className="text-xs">
                    <input
                      {...text('country')}
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
                      minlength="2"
                      required
                    />
                  </p>
                  <p className="text-xl font-bold font-display leading-tight py-2">
                    <input
                      {...text('lastName')}
                      placeholder={player.lastName}
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter font-bold rounded w-full py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
                      minlength="2"
                      required
                    />
                    <input
                      {...text('firstName')}
                      placeholder={player.firstName}
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter font-bold rounded w-full py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
                      minlength="2"
                      required
                    />
                  </p>
                </div>
                <div className="sm:w-1/2 sm:px-4 pb-4">
                  <p className="text-lg leading-tight text-gray-800 font-bold py-1">
                    <input
                      {...number('score')}
                      placeholder={player.score}
                      className="bg-grey-lighter appearance-none border-2 border-grey-lighter font-bold rounded w-full py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
                      min="0"
                      max="100"
                      required
                    />
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="w-full sm:w-1/5 px-5">
            {!toggle ? (
              <>
                <button
                  className="block shadow bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white text-sm font-bold py-2 px-4 rounded w-full mb-1"
                  type="submit"
                  onClick={() => toggleEdit()}
                >
                  Edit
                </button>
                <button
                  className="block shadow bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white text-sm font-bold py-2 px-4 rounded w-full mt-1"
                  type="submit"
                  onClick={() => removePlayer(id)}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  className="block shadow bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white text-sm font-bold py-2 px-4 rounded w-full mt-1"
                  type="submit"
                  onClick={() => handleSubmit(formState)}
                >
                  Save
                </button>
                <button
                  className="block shadow bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white text-sm font-bold py-2 px-4 rounded w-full mt-1"
                  type="submit"
                  onClick={() => toggleEdit()}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Player)
