import { useEffect, useState } from 'react';
import Link from 'next/link';


import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { TExam } from '@/utility/types';

export default function Home() {
  const [exams, setExams] = useState([])
  const [isPageLoading, setIsPageLoading] = useState(true)


  useEffect(() => {
    if (typeof window !== "undefined") {
      let prevExams = localStorage.getItem('exams');
      setIsPageLoading(false)
      prevExams && setExams(JSON.parse(prevExams))
    }

  }, [])


  // const EXAMS = prevExams ? JSON.parse(prevExams) : [];

  if (isPageLoading) {
    return (
      <Typography>Loading...</Typography>
    )
  }
  return (
    <>
      <Container>
        {/* Header */}
        <Box display='flex' justifyContent='space-between' alignItems='center' my={4}>
          <Typography variant='h1' mb={2}>
            Exams
          </Typography>
          <Button variant='contained' component={Link} href='/exam/new'>
            Add New Exam
          </Button>
        </Box>
        {/* In case no Exams */}
        {exams.length === 0 && <Box my={4} textAlign='center'>
          There are no exams added yet!
        </Box>}

        {/* List of exams */}

        {exams.length > 0 && exams.map((exam: TExam, index: number) => (
          <Grid key={exam.id} container spacing={{ xs: 1, md: 2 }} mb={{ xs: 3, md: 6 }}>
            <Grid item xs={12}>
              <Typography variant='h3' mb={0}>
                Exam {index + 1}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Box display='flex' alignItems='center' gap={1}>
                <Typography color='primary.light' variant='h4'>
                  Exam Title:
                </Typography>
                <Typography variant='h5'>
                  {exam.examTitle}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display='flex' alignItems='center' gap={1}>
                <Typography color='primary.light' variant='h4'>
                  Exam Description:
                </Typography>
                <Typography variant='h5'>
                  {exam.examDesc === "" ? '~' : exam.examDesc}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Button variant='outlined' component={Link} href={`/exam/${exam.id}`}>
                View
              </Button>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}
