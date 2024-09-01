import { useState, useMemo, useEffect, FormEvent } from "react";

// Material Ui Components
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from '@mui/lab/LoadingButton';

import DeleteIcon from '@mui/icons-material/Delete';


import { yupResolver } from '@hookform/resolvers/yup';
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';


import CustomInput from "../controls/custom-input"
import { TAnswer, TExam, TQuestion } from "@/utility/types";


type TPageProps = {
    selectedExam?: TExam
}

const ExamAddEditForm = ({ selectedExam }: TPageProps) => {
    const [isLoading, setIsLoading] = useState(false);

    // Validation Schema
    const schema = yup
        .object({
            examTitle: yup.string().required('Exam title is required'),
            questions: yup.array().of(yup.object().shape({
                quesTitle: yup.string().required('Question title is required'),
                quesDesc: yup.string(),
                answers: yup.array().min(3).of(yup.object().shape({
                    title: yup.string().required('Answer title is required'),
                    isCorrect: yup.boolean(),
                    description: yup.string()
                }))
                    .test('only-one-correct', 'Only one answer can be correct', (values) => {
                        if (values) {
                            const correctAnswers = values.filter((value) => value?.isCorrect);
                            return correctAnswers.length === 1 ? true : false;
                        }
                    })
            })),
        })
        .required();


    const defaultValues: TExam = useMemo(
        () => ({
            examTitle: '',
            examDesc: '',
            questions: [
                {
                    quesTitle: '',
                    answers: [
                        {
                            title: '',
                            isCorrect: false,
                            description: ''
                        }
                    ]
                }
            ],
        }),
        []
    );


    const {
        register,
        handleSubmit,
        setError,
        reset,
        getValues,
        formState: { errors, touchedFields, isValid },
        control,
        watch, // @ts-nocheck
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: 'all',
    });

    const formValues = watch()
    const { fields: questionsFields, append: appendQuestion, remove: removeQuestion } = useFieldArray({
        control,
        name: 'questions',
    });


    useEffect(() => {
        if (selectedExam) {
            reset(selectedExam);
        }
    }, [selectedExam, defaultValues, reset]);

    // Add Question
    const handleAddQuestion = () => {
        appendQuestion({
            quesTitle: '',
            answers: [
                {
                    title: '',
                    isCorrect: false,
                    description: ''
                }
            ]
        });
    };

    // Remove Question
    const handleRemoveQuestion = (index: number) => {
        removeQuestion(index);
    };


    // Add Answer
    const handleAddAnswer = (questionIndex: number) => {

        const updatedFormValues: any = formValues;

        if (updatedFormValues.questions[questionIndex].answers.length > 3) {
            toast.info('Answers should not be more than 4');
            return;
        }

        updatedFormValues.questions[questionIndex].answers = [
            // @ts-ignore
            ...formValues.questions[questionIndex].answers,
            {
                title: '',
                isCorrect: false,
                description: ''
            }
        ];
        reset(updatedFormValues);

    };

    // Remove Answer 
    const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
        let updatedFormValues = formValues;
        // @ts-ignore
        updatedFormValues.questions[questionIndex].answers = updatedFormValues.questions[questionIndex].answers.filter((answer, index) => index !== answerIndex);
        reset(updatedFormValues);
    };

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        const prevExams = localStorage.getItem('exams');
        const prevExamsParsed = prevExams && JSON.parse(prevExams)

        if (selectedExam && prevExams) {
            const updatedExamIndex = prevExamsParsed.findIndex((exam: TExam) => exam.id === selectedExam.id)
            const updatedExams = prevExamsParsed;
            updatedExams[updatedExamIndex] = data
            localStorage.setItem('exams', JSON.stringify(updatedExams))
            setTimeout(() => {
                toast.success('Exam updated successfully');
                setIsLoading(false);
            }, 1000);
        } else {
            data.id = Math.random() * 10 * Date.now();
            let updatedExams: TExam[] = []

            if (prevExams) {
                updatedExams = [...prevExamsParsed, data]
            } else {
                updatedExams = [data];
            }
            localStorage.setItem('exams', JSON.stringify(updatedExams))
            setTimeout(() => {
                toast.success('Exam submitted successfully');
                setIsLoading(false);
                reset(defaultValues)

            }, 1000);
        };
    }


    return (
        <>
            <Box noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} component='form'>
                <Grid container spacing={{ xs: 2, md: 3.5 }}>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label='Exam title'
                            placeholder='Exam title...'
                            register={register}
                            name='examTitle'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='string'
                            id='examTitle'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label='Exam description'
                            placeholder={'Exam description...'}
                            register={register}
                            name='examDesc'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='textarea'
                            otherProps={{
                                multiline: true,
                                maxRows: 6,
                            }}
                            id='examDesc'
                        />
                    </Grid>

                    {
                        questionsFields.map((item: any, index: number) => (
                            <Grid item xs={12} key={item.id}>
                                <Typography variant='h2' mb={2}>
                                    Question {index + 1}
                                </Typography>
                                <Grid container spacing={{ xs: 1, md: 2 }}>
                                    <Grid item xs={12} sm={6}>
                                        <CustomInput
                                            label='Question title'
                                            placeholder='Question title...'
                                            register={register}
                                            name={`questions[${index}].quesTitle`}
                                            // name={`items[${index}].title`}
                                            errors={errors}
                                            touchedFields={touchedFields}
                                            type='string'
                                            id={`quesTitle`}
                                            fieldIndex={index}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CustomInput
                                            label='Question description'
                                            placeholder={'Question description...'}
                                            register={register}
                                            // name='quesDesc'
                                            name={`questions[${index}].quesDesc`}
                                            errors={errors}
                                            touchedFields={touchedFields}
                                            type='textarea'
                                            otherProps={{
                                                multiline: true,
                                                maxRows: 6,
                                            }}
                                            id={`quesDesc`}
                                            fieldIndex={index}
                                        />
                                    </Grid>
                                    {item.answers.length > 0 && <Grid item xs={12}>
                                        <Typography variant='h5' mb={2}>
                                            Answers
                                        </Typography>
                                        {
                                            item.answers.map((answer: TAnswer, answerIndex: number) => (
                                                <Grid key={answer.id} container alignItems='center' mb={2} spacing={{ xs: 1, md: 1.5 }}>
                                                    <Grid item xs={6} sm={3.5}>
                                                        <CustomInput
                                                            label='Answer title'
                                                            placeholder={'Answer title...'}
                                                            register={register}
                                                            name={`questions[${index}].[answers].${answerIndex}.title`}
                                                            errors={errors}
                                                            touchedFields={touchedFields}
                                                            type='text'
                                                        // id={`titleAnswerQuestion[${index}].${answerIndex}`}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} sm={3.5}>
                                                        <CustomInput
                                                            label='Answer description'
                                                            placeholder={'Answer description...'}
                                                            register={register}
                                                            name={`questions[${index}].[answers].${answerIndex}.description`}
                                                            errors={errors}
                                                            touchedFields={touchedFields}
                                                            type='text'

                                                        // id={`titleAnswerQuestion[${index}].${answerIndex}`}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6} sm={3.5}>
                                                        <FormControlLabel labelPlacement="top"
                                                            control={<Checkbox
                                                                // indeterminate
                                                                defaultChecked={answer?.isCorrect}
                                                                // @ts-ignore
                                                                {...register(`questions[${index}].[answers].${answerIndex}.isCorrect`)}
                                                                name={`questions[${index}].[answers].${answerIndex}.isCorrect`}
                                                            />} label="Is correct" />

                                                    </Grid>
                                                    <Grid item xs={6} sm={1.5}>
                                                        <Button onClick={() => handleRemoveAnswer(index, answerIndex)}
                                                            color='error' variant='contained' size='small' sx={{ minWidth: 'auto' }}>
                                                            <DeleteIcon />
                                                        </Button>
                                                    </Grid>
                                                </Grid>

                                            ))
                                        }
                                    </Grid>}
                                    <Grid item xs={12} display='flex' justifyContent='end'>
                                        <Button onClick={() => handleAddAnswer(index)} variant='outlined'>
                                            Add Answer
                                        </Button>
                                    </Grid>

                                </Grid>

                                {index !== 0 && <Box display='flex' justifyContent='center' mt={2} mb={3}>
                                    <Button
                                        size="small"
                                        color="error"
                                        variant='contained'
                                        onClick={() => handleRemoveQuestion(index)}
                                    >
                                        Remove Question
                                    </Button>

                                </Box>}
                            </Grid>

                        ))
                    }
                    <Grid item xs={12}>
                        <Button onClick={handleAddQuestion} variant='outlined'>
                            Add Another Question
                        </Button>
                    </Grid>



                    <Grid item xs={12} display='flex' justifyContent='center'>
                        <LoadingButton
                            variant='contained'
                            disabled={!isValid}
                            loading={isLoading}
                            type='submit'
                            size='large'
                        >
                            SUBMIT
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ExamAddEditForm