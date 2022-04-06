import React, { useRef } from 'react'
import {useLoadScript, Autocomplete} from '@react-google-maps/api'

const scriptOptions = {
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  libraries: ['places'],
}

function InputAutocomplete(props) {
  const { isLoaded, loadError } = useLoadScript(scriptOptions)
  // const [autocomplete, setAutocomplete] = useState(null)
  const inputEl = useRef(null)

  // Handle the keypress for input
  const onKeypress = (e) => {
    // On enter pressed
    if (e.key === 'Enter') {
      e.preventDefault()
      return false
    }
  }

  
  return (
    <>
      { loadError && (
        <div>{"Google Map script can't be loaded, please reload the page"}</div>
      ) }
      { isLoaded && (
        <div className="w-full">
          <Autocomplete
            onLoad={props.onLoad}
            fields={['all']}
            onPlaceChanged={props.onPlaceChanged}
          >
            <input
              ref={inputEl}
              className='input play-fair-font'
              type="text"
              placeholder={props.placeHolder}
              onKeyPress={onKeypress}
            />
          </Autocomplete>
        </div>
      ) }
    </>
  )
}

export default InputAutocomplete