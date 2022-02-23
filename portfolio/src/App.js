import { useMediaQuery } from 'react-responsive'

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isLarge = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMedium = useMediaQuery({ query: '(max-width: 1224px)' })
  const issmall = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div className="w-full flex flex-wrap h-full">
      <Sidebar />
      {/* {isBigScreen && <Main />} */}
      <Main />
    </div>
  );
}

export default App;
