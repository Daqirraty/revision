import About from "./about"

const Home = ({userData}) => {
  return (
    <>
    <div>Welcome Home</div>
            <About userData={userData}/>

    </>
  )
}

export default Home