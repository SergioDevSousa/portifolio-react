import Footer from "./components/Footer";
import Header from "./components/Header";
import Information from "./components/Information";
import GitHubRepos from './components/GitHubRepos';

function App() {

  return (
    <>
      <Header />
      <Information />
      <GitHubRepos username="SergioDevSousa"/>
      <Footer />
    </>
  )
}

export default App
