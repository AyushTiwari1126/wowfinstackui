import 'bootstrap/dist/css/bootstrap.css';
import Asidebar from '@/components/Asidebar'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect } from 'react';
import ApplicationForms from '@/components/ApplicationForms';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return <>
    <div className='screen'>
      <div className='asidebar'>
        <Asidebar />
      </div>
      <div className='formbody'>
        <Navbar />
        <ApplicationForms/>
      </div>
    </div>

    <Component {...pageProps} />
  </>

}
