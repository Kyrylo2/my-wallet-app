import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import MyWalletPage from './pages/myWalletPage/myWalletPage';
import Home from './pages/Home/Home';

function App() {
  // const [count, setCount] = useState(0);

  // return <Layout />;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="wallet" element={<MyWalletPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
