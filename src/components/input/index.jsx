import React from 'react'
import TextField from '@material-ui/core/TextField';
const Input = ({value ="NO VALUES",  onChange = () =>{}}) => (
    <TextField
    id="standard-name"
    label="Amount"
    value={value}
    onChange={onChange}
    margin="normal"
    />
)

export {Input}