import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
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
    Subject {
      code
      section
      title
      schedules {
        start_time
        end_time
        day
      }
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
const SubjectListPage = ({data: {directus} }) => {
  return (
    <div className='card-container '>
        <Layout pageTitle="รายวิชาทั้งหมด" className="heading">
        <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>รหัสวิชา</StyledTableCell>
                                <StyledTableCell align='center'>ชื่อวิชา</StyledTableCell>
                                <StyledTableCell>เซคชั่น</StyledTableCell>
                                <StyledTableCell align='center'>เวลาเรียน</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {directus.Subject.map((subject) => (
                                <StyledTableRow key={subject.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {subject.code}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {subject.title}
                                    </StyledTableCell>
                                    <StyledTableCell align='center'>
                                      0{subject.section}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                    {subject.schedules.map((element) => (
                                      <>{element.day} {element.start_time} - {element.end_time}<br /></>
                                    ))}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
    {/* <table >
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
      </table> */}
    </Layout>
    </div>
  )
}

export default SubjectListPage