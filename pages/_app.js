import Asidebar from '@/components/Asidebar'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Home from '.'

export default function App({ Component, pageProps }) {
  return <>
    {/* <div className='screen'>
      <div className='asidebar'>
        <Asidebar />
      </div>
      <div className='formbody'>
        <Navbar />
      </div>
    </div> */}
    <Home/>

    <Component {...pageProps} />
  </>


}
