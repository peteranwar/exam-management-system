import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';




type TCustomInput = {
  label: string,
  placeholder: string,
  register: any;
  name: string,
  errors: any,
  touchedFields?: any,
  type: string,
  id?: string | 'quesTitle' | 'quesDesc',
  otherProps?: {},
  labelEnd?: string,
  disabled?: boolean,
  value?: string,
  fieldIndex?: number,
}

function CustomInput({
  label,
  placeholder,
  register,
  name,
  errors,
  touchedFields,
  type,
  id,
  otherProps,
  labelEnd,
  disabled,
  value,
  fieldIndex
}: TCustomInput) {
  const quesTitleErrMsg = fieldIndex !== undefined && errors['questions']?.[fieldIndex]?.quesTitle?.message;
  const quesDescErrMsg = fieldIndex !== undefined && errors['questions']?.[fieldIndex]?.quesDesc?.message;

  const isQuesTitleErr = id === 'quesTitle' ? true : false
  const isQuesDescErr = id === 'quesDesc' ? true : false


  return (
    <FormControl>
      <FormLabel sx={{ marginBottom: '10px', fontWeight: '400', color: "black" }}>{label}</FormLabel>
      <TextField
        sx={{
          borderRadius: '20px',
          backgroundColor: 'white',
          height: type === 'textarea' ? 'auto' : '50px',
          '& textarea': { height: '100% !important' },
        }}
        id={id}
        label={placeholder ? '' : label}
        placeholder={placeholder}
        variant='outlined'
        disabled={disabled}
        value={value}
        type={type}
        error={Boolean(errors[name]) || (isQuesTitleErr && quesTitleErrMsg) || (isQuesDescErr && quesDescErrMsg)} // || (isQuesTitleErr && quesTitleErrMsg) || (isQuesDescErr && quesDescErrMsg)
        {...otherProps}
        {...register(name)}
        InputProps={{
          endAdornment: labelEnd && (
            <InputAdornment position='start'>{labelEnd}</InputAdornment>
          ),
        }}
      />
      {Boolean(errors[name]) && ( //  && touchedFields[name]
        <FormHelperText sx={{ color: 'red' }} id={name}>
          {errors[name]?.message}
          {/* {isQuesDescErr && quesDescErrMsg}
          {isQuesTitleErr && quesTitleErrMsg} */}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default CustomInput;
