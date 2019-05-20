import React, { useState } from 'react'
import { useFormState } from 'react-use-form-state'

function Form({ addPlayer }) {
  const [formState, { text, number }] = useFormState(null, {
    onTouched(event) {
      const { name, value, ...target } = event.target

      if (parseInt(value.length) < 2) {
        return false
      }

      if (name === 'score') {
        const number = parseInt(value)

        if (number >= 0 && number <= 100) {
          return true
        }
      }
    },
  })

  const handleSubmit = event => {
    addPlayer(event.values)
    formState.clear()
  }

  return (
    <form className="mx-auto max-w-sm mt-12 mb-12 pl-2 pr-2">
      <h2 className="text-2xl font-display font-bold mb-4">Add a Player</h2>
      <div className="mb-4">
        <label className="block text-grey font-bold mb-1" htmlFor="firstName">
          First Name
        </label>
        <input
          {...text({
            name: 'firstName',
          })}
          className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="Tiger"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey font-bold mb-1" htmlFor="lastName">
          Last Name
        </label>
        <input
          {...text({
            name: 'lastName',
          })}
          className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="Woods"
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey font-bold mb-1" htmlFor="score">
          Score
        </label>
        <input
          {...number({
            name: 'score',
          })}
          className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="100"
          min="0"
          max="100"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-grey font-bold mb-1" htmlFor="country">
          Country
        </label>
        <input
          {...text({
            name: 'country',
          })}
          className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="USA"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-grey font-bold mb-1" htmlFor="image">
          Image
        </label>
        <input
          {...text({
            name: 'image',
          })}
          className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue"
          placeholder="http://link.to/picture.jpg"
        />
      </div>
      <div>
        <button
          className="block shadow bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
          type="button"
          onClick={() => handleSubmit(formState)}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
