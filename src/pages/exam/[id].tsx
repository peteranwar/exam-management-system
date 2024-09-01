import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { TExam } from '@/utility/types';
import ExamHeader from '@/components/exams/ExamHeader';
import ExamAddEditForm from '@/components/exams/ExamAddEditForm';

const Edit = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pageLoading, setPageLoading] = useState(true)

    const [selectedExam, setSelectedExam] = useState<TExam>()


    useEffect(() => {
        const prevExams = localStorage.getItem('exams');
        if (prevExams && id) {
            const exam = JSON.parse(prevExams).find((exam: TExam) => exam.id == id)
            setSelectedExam(exam);
            setPageLoading(false)
        }
    }, [id])



    if (pageLoading) {
        return <Typography variant='h1' textAlign='center' my={5}>
            Loading...
        </Typography>
    }

    if (!selectedExam) {
        return <Typography variant='h1' textAlign='center' my={5}>
            No Exam to show
        </Typography>
    }
    return (
        <Box py={4}>
            <Container>
                <ExamHeader title={selectedExam?.examTitle} handleClick={() => router.push('/')} />

                <ExamAddEditForm selectedExam={selectedExam} />
            </Container>
        </Box>
    )
}

export default Edit