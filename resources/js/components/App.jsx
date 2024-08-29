import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Certificate from './pages/certificate/Certificate';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddCertificate from './pages/addCertificate/AddCertificate';
// import reportWebVitals from '../components/reportWebVitals';


export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Certificate/>} />
                <Route path='/addCer' element={<AddCertificate/>}  />
            </Routes>
        </Router>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
