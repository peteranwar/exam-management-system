import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


type TPageProps = {
    title: string,
    handleClick: () => void,
}

const ExamHeader = ({ title, handleClick }: TPageProps) => {
    return (
        <Box display='flex' alignItems='center' gap={2} my={4}>
            <Box onClick={handleClick} display='flex' alignItems='center' justifyContent='center' sx={{
                border: '1px solid #eee',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                cursor: 'pointer',
                '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'common.white'
                }
            }}>
                <ArrowBackIcon />
            </Box>
            <Typography variant='h1'>
                {title}
            </Typography>
        </Box>
    )
}

export default ExamHeader