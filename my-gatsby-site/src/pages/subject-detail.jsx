import * as React from 'react'
import Layout from '../components/layout'
import "./student-detail.css"
import { navigate } from "gatsby"
import { FaInfoCircle } from 'react-icons/fa';

const SubjectDetailPage = () => {
  return (
    <div className='card-container '>
        <Layout pageTitle="ข้อมูลรายวิชา" className="heading">
    <table >
        <tr className='first-line'>
        <th className='th1'>ข้อมูลรายวิชา 240-420 ...</th>
        <td></td> 
        <td></td>    
        </tr>
        <tr className='line1'>
        <th className='th3'>section</th>
        <th className='th1'>เวลาเรียน</th>    
        <th className='th1'>นักเรียน</th>  
        </tr>
        <tr className='line2'>
        <td>0x</td>
        <td>xxx</td>  
        <td>xxx-xxx</td>  
        </tr>
        <tr className='line1'>
        <td className='td2'>0x</td>
        <td className='td2'>xxx</td>  
        <td className='td2'>xxx-xxx</td>  
        </tr>
      </table>
    </Layout>
    </div>
  )
}

export default SubjectDetailPage