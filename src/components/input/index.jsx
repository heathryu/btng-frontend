import React from 'react'
import TextField from '@material-ui/core/TextField';
const Input = ({values ="NO VALUES",  onChange = () =>{}}) => (
    <TextField
    id="standard-name"
    label="Name"
    value={values}
    onChange={onChange}
    margin="normal"
    />
)

export {Input}