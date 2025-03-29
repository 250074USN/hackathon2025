import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/footer.tsx";

import Routing from "./routing/routing.tsx"


function App() {
    return (
        <>
            <Navbar />

            <Routing />

            <Footer />
        </>
    );
}

export default App;
