
import { useMemo, useState } from 'react';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DeleteIcon from '@mui/icons-material/Delete';

import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import CustomInput from '@/components/controls/custom-input';
import { LoadingButton } from '@mui/lab';
import { Button, Checkbox, FormControlLabel, Radio } from '@mui/material';
import { TAnswer, TExam } from '@/utility/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import ExamHeader from '@/components/exams/ExamHeader';
import ExamAddEditForm from '@/components/exams/ExamAddEditForm';

const New = () => {
    const router = useRouter()


    return (
        <Box py={4}>
            <Container>
                <ExamHeader title='Add New Exam' handleClick={() => router.back()} />

                <ExamAddEditForm />
            </Container>
        </Box>
    )
}

export default New