import { AppContext } from './contexts/AppContext';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Musicbar from './components/musicbar/Musicbar';

import './App.css';

export default function App() {
  return (
    <>
      <AppContext>
        <Header />
        <Sidebar />
        <Musicbar />
      </AppContext>
    </>
  );
}