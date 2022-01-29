import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loading from './Loading'

const Form = () => {
  // occupation and state data fetched from URL.
  const [data, setData] = useState()
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [postStatus, setPostStatus] = useState(false)

  // fetch occupation and state data on component mount.
  useEffect(() => {
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    let formInputs = event.target
    const data = {
      name: formInputs.name.value,
      email: formInputs.email.value,
      password: formInputs.password.value,
      occupation: formInputs.occupation.value,
      state: formInputs.state.value,
    }
    setIsLoading(true)
    setFormSubmitted(true)
    setFormData((formData) => ({ ...formData, ...data }))
    formInputs.reset()
    postData(data)
  }

  const postData = (formInputs) => {
    fetch('https://frontend-take-home.fetchrewards.com/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInputs),
    }).then((res) => {
      setTimeout(() => {
        setPostStatus(res.ok)
        setIsLoading(false)
      }, 800)
    })
  }

  if (!formSubmitted) {
    return (
      <FormStyles>
        <form onSubmit={handleSubmit} autoComplete="on">
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <label>Occupation:</label>
          <select name="occupation" required>
            <option value="">Please Select...</option>
            {data?.occupations.map((occupation, i) => (
              <option value={occupation} key={i}>
                {occupation}
              </option>
            ))}
          </select>
          <label>State:</label>
          <select name="state" required>
            <option value="">Please Select...</option>
            {data?.states.map((state, i) => (
              <option value={state.abbreviation} key={i}>
                {state.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </FormStyles>
    )
  }
  if (formSubmitted) {
    return (
      <FormStyles>
        {isLoading ? (
          <Loading />
        ) : (
          <form>
            {postStatus ? (
              <h2>
                Thank you, {formData?.name}. Your information has successfully
                been submitted.
              </h2>
            ) : (
              <h2>
                Sorry. Something went wrong. Your information was not submitted.
              </h2>
            )}
          </form>
        )}
      </FormStyles>
    )
  }
}

export default Form

const FormStyles = styled.div`
  width: 80%;
  background: #fff;
  color: #000;
  margin: 2rem auto;
  border-radius: 10px;
  min-height: 40vh;
  transition: all 0.4s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  form {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    padding: 2rem;
    label {
      text-align: left;
      margin-bottom: 0.4rem;
    }
    input,
    select {
      margin-bottom: 1.4rem;
      width: 100%;
      font-size: 1.1rem;
    }
    button {
      padding: 0.4rem;
      width: 40%;
      margin: 0 auto;
      background: #f99185;
      border-radius: 10px;
      border: none;
      color: white;
      font-weight: bold;
      font-size: 1.4rem;
      transition: all 0.4s ease-in-out;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    button:hover {
      background: #b12a5b;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
`
