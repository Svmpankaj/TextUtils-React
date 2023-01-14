import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setTimeout(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';

    }
  }

  return (
    <>
      {/* <Navbar title='TextUtils' aboutText='About TextUtils'/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}

        {/* <Route path="/" element={<TextFrom showAlert={showAlert} heading='Enter The text to analyze below' mode={mode} />} /> */}
        <TextFrom showAlert={showAlert} heading='Enter The text to analyze below' mode={mode} />
        {/* <Route path="/about" element={<About />} /> */}

        {/* </Routes> */}
        {/* <About mode={mode}/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
