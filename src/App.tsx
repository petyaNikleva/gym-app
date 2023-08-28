import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
import { PageContextProvider } from "./context/PageContext";


function App() {
  return (
    <PageContextProvider>
      <div className='app bg-gray-20'>
        <Navbar />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer />
      </div>
    </PageContextProvider>
  )
}

export default App;
