import * as React from 'react'
import Layout from '../components/layout'
import "./index.css"
import { navigate } from "gatsby"
import { FaInfoCircle } from 'react-icons/fa';
import {graphql } from 'gatsby'

export const query = graphql`
query{
  directus {
      student {
        id
        studentID
        fullname   
      }
    }
}`

const IndexPage = ({data: {directus} }) => {
    return (
    <Layout pageTitle="รายชื่อนักศึกษา">
      <div>
      <p>คำอธิบายอะไรก็ว่าไป</p>
    <div aria-label='student-list'>
      <table >
        <tr className='first-line'>
          <th>ลำดับ</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>เลขนศ.</th>
          <th>รายละเอียด</th>
        </tr>
        <tr className='line1'>
          <td>1</td>
          <td className='st-name'>{directus.student[0].fullname.split(" ")[0]}</td>
          <td className='st-name'>{directus.student[0].fullname.split(" ")[1]}</td>
          <td className='st-num'>{directus.student[0].studentID}</td>
          <td>
          <button onClick={()=>{navigate("/student-detail")}} className='button'><FaInfoCircle/></button>
          </td>
        </tr>
        <tr className='line2'>
        <td>2</td>
        <td className='st-name'>{directus.student[1].fullname.split(" ")[0]}</td>
          <td className='st-name'>{directus.student[1].fullname.split(" ")[1]}</td>
          <td className='st-num'>{directus.student[1].studentID}</td>
          <td>
          <button onClick={()=>{navigate("/student-detail")}} className='button'><FaInfoCircle/></button>
          </td>
        </tr>
        <tr className='line1'>
        <td>3</td>
        <td className='st-name'>{directus.student[2].fullname.split(" ")[0]}</td>
          <td className='st-name'>{directus.student[2].fullname.split(" ")[1]}</td>
          <td className='st-num'>{directus.student[2].studentID}</td>
          <td>
          <button onClick={()=>{navigate("/student-detail")}} className='button'><FaInfoCircle/></button>
          </td>
        </tr>
        <tr className='line2'>
        <td>4</td>
        <td className='st-name'>{directus.student[3].fullname.split(" ")[0]}</td>
          <td className='st-name'>{directus.student[3].fullname.split(" ")[1]}</td>
          <td className='st-num'>{directus.student[3].studentID}</td>
          <td>
          <button onClick={()=>{navigate("/student-detail")}} className='button'><FaInfoCircle/></button>
          </td>
        </tr>
        <tr className='line1'>
        <td>5</td>
        <td className='st-name'>{directus.student[4].fullname.split(" ")[0]}</td>
          <td className='st-name'>{directus.student[4].fullname.split(" ")[1]}</td>
          <td className='st-num td2'>{directus.student[4].studentID}</td>
          <td className='td2'>
          <button onClick={()=>{navigate("/student-detail")}} className='button'><FaInfoCircle/></button>
          </td>
        </tr>
      </table>
    </div>
      </div>
    </Layout>

  )
}

export default IndexPage