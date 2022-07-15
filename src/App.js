import './App.css';
import {Routes, Route} from "react-router-dom";
import AddImage from './components/AddImage';
import Home from './components/Home';
import DeleteImage from './components/DeleteImage';
import EditImage from './components/EditImage';
import Navbar from './components/Navbar';
import ImageDetail from './components/ImageDetail';

function App() {

    // const [{image}, dispatch] = useStateValue();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show/:id" element={<ImageDetail />} />
                <Route path='/:id/edit' element={<EditImage />} />
                <Route path="/delete/:id" element={<DeleteImage />} />
                <Route path="/new" element={<AddImage />} />
            </Routes>
        </>
    );
}

export default App;
