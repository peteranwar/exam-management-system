import Accordion from './accordion';
import Alert from './alert';
import Backdrop from './backdrop';
import Button from './button';
import Checkbox from './checkbox';
import Chip from './chip';
import Dialog from './dialog';
import DialogActions from './dialogActions';
import DialogContent from './dialogContent';
import DialogTitle from './dialogTitle';
import FormHelperText from './form-helper-text';
import Input from './input';
import LoadingButton from './loading-button';
import Radio from './radio';
import Select from './select';
import Snackbar from './snackbar';
import { Theme } from '@mui/material';
import Typography from './typography';
import Pagination from './pagination';
import { cssBaseline } from './css-baseline';

/**
 * It merges all the overrides for all the components into one object
 * @param {Theme} theme - Theme - the theme object that is passed to the theme provider
 * @returns A function that takes a theme and returns a style object.
 */
export default function ComponentsOverrides(theme) {
  return {
    ...cssBaseline(theme),
    ...Typography(theme),
    ...Button(theme),
    ...LoadingButton(theme),
    ...Input(theme),
    ...Backdrop(theme),
    ...Dialog(theme),
    ...DialogTitle(),
    ...DialogContent(theme),
    ...DialogActions(theme),
    ...Alert(theme),
    ...Snackbar(),
    ...Checkbox(theme),
    ...FormHelperText(),
    ...Chip(theme),
    ...Select(),
    ...Accordion(theme),
    ...Radio(theme),
    ...Pagination(theme),
  };
}
