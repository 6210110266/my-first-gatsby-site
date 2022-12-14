import * as React from "react";
import Layout from "../components/layout";
import "./index.css";
import { graphql } from "gatsby";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const query = graphql`
  query {
    directus {
      Student {
        id
        firstname
        lastname
        student_id
        profile_picture {
          id
        }
        subjects {
          Subject_id {
            id
            section
            title
            code
          }
        }
      }
    }
  }
`;

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const { student } = props;
  const [open, setOpen] = React.useState(false);

  const url = "https://opxeubxg.directus.app/assets/";

  console.log(url + student.profile_picture.id);

  return (
    <React.Fragment>
      <StyledTableRow key={student.id} align="center">
        <img
          width="80"
          height="80"
          src={url + student.profile_picture.id}
          alt="profile_picture"
          style={{ padding: 5 }}
        />
        <StyledTableCell>{student.firstname}</StyledTableCell>
        <StyledTableCell>{student.lastname}</StyledTableCell>
        <StyledTableCell align="center">{student.student_id}</StyledTableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" className="head-color">
                ????????????????????????????????????????????????
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">????????????</TableCell>
                    <TableCell align="center">????????????????????????</TableCell>
                    <TableCell align="center">?????????????????????</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {student.subjects.map((subject) => (
                    <StyledTableRow key={subject.Subject_id.id}>
                      <StyledTableCell align="center">
                        {subject.Subject_id.code}
                      </StyledTableCell>
                      <StyledTableCell>
                        {subject.Subject_id.title}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {subject.Subject_id.section}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const IndexPage = ({ data: { directus } }) => {
  return (
    <Layout pageTitle="?????????????????????????????????????????????">
      <div>
        {/* <h1>????????????????????????????????????????????????????????????</h1> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">?????????</StyledTableCell>
                <StyledTableCell align="center">????????????</StyledTableCell>
                <StyledTableCell align="center">?????????????????????</StyledTableCell>
                <StyledTableCell align="center">????????????????????????????????????</StyledTableCell>
                <StyledTableCell align="center">??????????????????????????????</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directus.Student.map((student) => (
                <Row key={student.id} student={student} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
};

export default IndexPage;
