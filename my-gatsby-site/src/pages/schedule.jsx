import * as React from 'react'
import Layout from '../components/layout'
import "./student-detail.css"
import { navigate } from "gatsby"
import { FaInfoCircle } from 'react-icons/fa';


const SchedulePage = () => {
  return (
    <Layout pageTitle="ตารางเวลา">
    <div>
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    <div className='tab'><label>วันเริ่ม:</label>
    <button className='c-button'>
    เลือกวัน
  </button>
  <button >
    เลือกเวลา
  </button></div>
  <div className='tab'><label>วันสิ้นสุด:</label>
    <button >
    เลือกวัน
  </button>
  <button >
    เลือกเวลา
  </button></div>
    <button className='s-button'>ค้นหา</button>
    </div>
  <div>
    <h2>วัน xxx xx.xx-xx.xx</h2>
  </div>
    <ul>
      <li>240-420 xxx xx.xx-xx.xx</li>
      <li>240-421 xxx xx.xx-xx.xx</li>
      <li>240-422 xxx xx.xx-xx.xx</li>
    </ul>

  </Layout>
  )
}

export default SchedulePage