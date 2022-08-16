import * as React from 'react'
import Layout from '../components/layout'
import "./index.css"
import { navigate } from "gatsby"
import { FaInfoCircle } from 'react-icons/fa';
import { useStaticQuery,graphql } from 'gatsby'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const query = graphql`
query{
  directus {
      Student {
        id
        student_id
        firstname  
        lastname 
      }
    }
}`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const IndexPage = ({data: {directus} }) => {
    return (
    <Layout pageTitle="รายชื่อนักศึกษา">
      <div>
      {/* <h1>รายชื่อสมาชิกทั้งหมด</h1> */}
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ชื่อ</StyledTableCell>
                <StyledTableCell>นามสกุล</StyledTableCell>
                <StyledTableCell>รหัสนักศึกษา</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directus.Student.map((member) => (
                <StyledTableRow key={member.id}>
                  <StyledTableCell >
                    {member.firstname}
                  </StyledTableCell>
                  <StyledTableCell >
                    {member.lastname}
                  </StyledTableCell>
                  <StyledTableCell  align="center">
                    {member.student_id}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    {/* <div aria-label='student-list'>
      <table >
        <tr className='first-line'>
          <th>ลำดับ</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>เลขนศ.</th>
          <th>รายละเอียด</th>
        </tr>
        <tr className='line1'>
        {directus.student.map((student) => (
               <><td>{student.id}</td><td className='st-name'>{student.fullname.split(" ")[0]}</td><td className='st-name'>{student.fullname.split(" ")[1]}</td><td className='st-num'>{student.studentID}</td><td>
            <button onClick={() => { navigate("/student-detail"); } } className='button'><FaInfoCircle /></button>
          </td></>
              ))}
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
    </div> */}
      </div>
    </Layout>

  )
}

export default IndexPage