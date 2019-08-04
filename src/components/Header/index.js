import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  max-width: 500px;
  margin: 0 auto; 
  padding: 10px 30px;
  text-align: center;
`;

export default function Header() {
  return (
    <AppBar position="static">
      <Typography component="div">  
        <StyledBox fontStyle="oblique" fontWeight="fontWeightBold">Round up for Nigeria</StyledBox>
      </Typography>
    </AppBar>
  );
}
