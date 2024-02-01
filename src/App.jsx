import {Container} from
'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Saludo from './components/Saludo'

function App() {
    return (
        <>
        <Container clasName='my-4 mainPage'>
            <Saludo />
        </Container>

        <Footer />
        </>
    )
}

export default App