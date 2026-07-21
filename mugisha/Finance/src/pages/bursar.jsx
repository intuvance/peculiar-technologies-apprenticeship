import Header from "../components/Header";
import Quickactions from "../components/Quickactions";
import Sidebar from "../components/Sidebar";
import Statcards from "../components/Statcards";

function Bursar() {
    return (
        <div>
            <Header />
            <div className="app-layout">
                <Sidebar />
                <div className="content-area">
                    <Statcards />
                    <Quickactions />
                </div>
            </div>
        </div>
    )
}

export default Bursar;