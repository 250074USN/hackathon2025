import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/footer.tsx";
import Routing from "./routing/routing.tsx"


function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen"> {/* Bruker flexbox og min-h-screen */}
                <Navbar />
                <Routing />
                <Footer />
            </div>
        </>
    );
}

export default App;
