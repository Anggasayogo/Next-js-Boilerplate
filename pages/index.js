import React, { useState } from 'react'
import { loginActions } from '../globalState/action/AuthAction'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import Image from 'next/image'

const Login =(props) => {
  const [email,setEmail] = useState('john@example.com')
  const [password,setPassword] = useState('password')

  const onSubmit = () => {
    props.login({
      email : email,
      password : password,
    })
    console.log({
      email : email,
      password : password,
    })
  }

  return (
      <div>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    
                      <input 
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email" 
                          autoComplete="off"
                      />

                      <input 
                          type="password"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          autoComplete="off"
                      />
                      <button
                          type="submit"
                          onClick={onSubmit}
                          name="submit"
                          className="w-full text-center py-3 rounded bg-yellow-300 text-white hover:bg-green-dark focus:outline-none my-1"
                      >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
const mapstateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  login: (value) => dispatch(loginActions(value))
})

export default connect(mapstateToProps, mapDispatchToProps)(Login)
