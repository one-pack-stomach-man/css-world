import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import { Menus } from './Components/Menus';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

// import CssBattery from './Components/CssBattery';
// import SvgAr from './Components/Svg-ar';
import CircleText from './Components/CircleText';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <Sider style={{ backgroundColor: 'white' }}><Menus /></Sider>
        <Layout>
          {/* <Content><CssBattery /></Content> */}
          <Content><CircleText/></Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
