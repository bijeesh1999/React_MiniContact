import { ToastContainer } from 'react-toastify';
import Table from './Table/table';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

/* Here is getting Table component and Popup flash message component */

function App() {
  return (
    <>
    <ToastContainer />
    <Table />
    </>
  );
}

export default App;
