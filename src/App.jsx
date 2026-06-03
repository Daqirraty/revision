import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './pages/home'
import './App.css'
import Contact from './pages/contact'
import { datas } from './data'
import { ThemeStore } from './hook/context/GlobalContext'

function App() {
  const {theme} = useContext(ThemeStore)
  const userData = {
    name: "John Doe",
    email: "john@gmail.com"
  }
  const [count, setCount] = useState(0)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState("english")
  // const [userForm, setUserForm] = useState({
  //   firstName: "",
  //   lastName: ""
  // })

const handleAddCount= () => {
  setCount(count + 1)
}
const handleDecreaseCount = () => {
  setCount(count - 1)
}

// const handleUserFormChange = (e) => {
//   setUserForm({
//     ...userForm,
//     [e.target.name]: e.target.value
//   })
// }

const handleFirstnameChange = (e) => {
  setFirstname(e.target.value)
  console.log("see", firstname)
}

const handleLastnameChange = (e) => {
  setLastname(e.target.value)
  console.log("last", lastname)
}

const handleSubmit = (e) => {
  console.log("event ", e)
  e.preventDefault()
  console.log("first name is ", firstname)
  console.log("last name is ", lastname)
}


  return (
    <div className={theme === "light" ? "bg-white text-gray-700 h-[100vh]" : "bg-gray-800 text-gray-300 h-[100vh]"}>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{language === "english" ? "Get Started" : "E je kaa be re"}</h1>
          <span className=' space-x-5'>
            <button onClick={() => setLanguage("english")}>English</button>
            <button onClick={() => setLanguage("yoruba")}>Yoruba</button>
          </span>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <div className='flex gap-5 items-center justify-center'>
          <button
          type="button"
          // className="counter"
          // onClick={() => setCount((count) => count + 1)}
          onClick={handleAddCount}
        >+
        </button>
        <Contact count={count}/>
        {/* <div>Count is {count}</div> */}
        <button
          type="button"
          // className="counter"
          // onClick={() => setCount((count) => count + 1)}
          onClick={handleDecreaseCount}
        > -
          
        </button>
        </div>
      </section>

      {loading === true ? <p>Loading...</p> : <p>"it is false" </p>}

      {datas.map((data, index) => (
         <div key={index} className='grid grid-cols-4 border-2 border-red-500 p-5 m-5'>
          <h2>User Details Card</h2>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
      </div>
      ))}

     

      <div>
        <form onSubmit={handleSubmit} action="" className='flex justify-center items-center gap-5'>
          <input type="text" placeholder='first name please' className='p-4 rounded-md' onChange={handleFirstnameChange}/>
          <input type="text" placeholder='last name please' className='p-4 rounded-md' onChange={handleLastnameChange}/>
          <button>Submit</button>
        </form>
      </div>

      <div className="ticks" on>
        <Home userData={userData} />
      </div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  )
}

export default App
