import React from 'react'
import {StyledButton} from './index.style'

const Button = ({title = "NO title set"}) => (
    <StyledButton>{title}</StyledButton>
)

export {Button}