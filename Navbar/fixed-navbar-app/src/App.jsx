import Navbar from "./Navbar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Members from './pages/Members.jsx'
import Join from "./pages/Join.jsx";
import Contact from "./pages/Contact.jsx";
import Events from "./pages/Events.jsx";
import Home from "./pages/Home.jsx";


function App() {

    return(
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/top-board" element={<Members />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
