import * as React from 'react'
import Layout from '../components/layout'
import "./student-detail.css"
import { navigate } from "gatsby"
import { FaInfoCircle } from 'react-icons/fa';

const StudentDetailPage = () => {
  return (
    <div className='card-container '>
        <Layout pageTitle="ข้อมูลนักศึกษา" className="heading">
    <table >
        <tr className='first-line'>
        <th className='th1'>ข้อมูลทั่วไป</th>
        <td></td> 
        <td></td>  
        <td></td>  
        <td></td>   
        <td></td>   
        </tr>
        <tr className='line1'>
        <th className='th1'>ชื่อ นาย....</th>
        <th className='th1'>นามสกุล ....</th>
        <th className='th1'>รหัส ....</th>
        <td></td>  
        <td></td> 
        <td></td>   
        </tr>
        <tr className='line2'>
        <th className='th2'>รหัสวิชา</th>
        <th className='th2'>ชื่อวิชา</th>    
        <th className='th2'>section</th>  
        <th className='th2'>หน่วยกิต</th>  
        <th className='th2'>เวลาเรียน</th>  
        <td></td>   
        </tr>
        <tr className='line1'>
        <td>xxx-xxx</td>
        <td>xxx</td>  
        <td>0x</td>  
        <td>x</td>  
        <td>xx xx</td> 
        <td>
          <button onClick={()=>{navigate("/subject-detail")}} className='button'><FaInfoCircle/></button>
        </td>  
        </tr>
        <tr className='line2'>
        <td>xxx-xxx</td>
        <td>xxx</td>  
        <td>0x</td>  
        <td>x</td>  
        <td>xx xx</td> 
        <td>
          <button onClick={()=>{navigate("/subject-detail")}} className='button'><FaInfoCircle/></button>
        </td>  
        </tr>
        <tr className='line1'>
        <td>xxx-xxx</td>
        <td>xxx</td>  
        <td>0x</td>  
        <td>x</td>  
        <td>xx xx</td> 
        <td>
          <button onClick={()=>{navigate("/subject-detail")}} className='button'><FaInfoCircle/></button>
        </td>  
        </tr>
        <tr className='line2'>
        <td className='td2'>xxx-xxx</td>
        <td className='td2'>xxx</td>  
        <td className='td2'>0x</td>  
        <td className='td2'>x</td>  
        <td className='td2'>xx xx</td>
        <td className='td2'>
          <button onClick={()=>{navigate("/subject-detail")}} className='button'><FaInfoCircle/></button>
        </td>  
        </tr>
      </table>
    </Layout>
    </div>
  )
}

export default StudentDetailPage