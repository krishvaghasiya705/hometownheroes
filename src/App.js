import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';

function App() {

  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("keydown", (event) => {
    if (event.key === "F12") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "C") {
      event.preventDefault();
      console.log("Blocked Ctrl + Shift + C");
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "U") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "M") {
      event.preventDefault();
      console.log("Blocked Ctrl + Shift + M");
    }
    if (event.ctrlKey && event.key === "P") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "S") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "Delete") {
      event.preventDefault();
    }
    if (event.ctrlKey && (event.key === "F5" || event.key === "R")) {
      event.preventDefault();
    }
    if (event.altKey && event.key === "F4") {
      event.preventDefault();
    }
  });

  return (
    <RouterProvider router={router} />
  );
}

export default App;