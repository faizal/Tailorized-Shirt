/*
Udemy course: https://www.udemy.com/course/react-three-fiber-configurator
*/

import { createRoot } from 'react-dom/client'
import './styles.css'
import './css/styles.css'
import './css/styles2.css'
import { Loader } from '@react-three/drei'
// import './css/jquery.mCustomScrollbar.css'
// import './css/font-awesome.css'
import CanvasImageUploader from './fabric'
import App from './main'
import NewApp from './newApp'
import UI from './UI'
import { Suspense } from 'react'
createRoot(document.getElementById('root')).render(
  <>
        {/* <Loader/> */}
    <Suspense fallback={<Loader/>} >
        <UI/>
    </Suspense>
  </>
)
