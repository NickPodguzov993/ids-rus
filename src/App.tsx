import Wrapper from "./components/Wrapper";
import { Route, Routes} from "react-router-dom";
import Cookies from "./utils/Cookies.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import Contacts from "./components/Contacts.tsx";
import Policies from "./components/Policies.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";


function App() {
    return (

        <Wrapper>
            <div>
                <Cookies/>
                <Header/>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/policies' element={<Policies/>}/>
                </Routes>
                <Footer/>


            </div>
        </Wrapper>
    )
}

export default App