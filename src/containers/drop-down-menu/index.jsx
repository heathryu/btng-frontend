import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'
const LIST_OF_CURRENCIES = ['USD', 'GBP', 'EUR', 'JPY', 'INR']


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function onClick(e){
    props.getCCY(e.target.innerText)
    handleClose(e)
  }

  function handleClose(event, v) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
          variant="contained"
        >
          Choose your Currency
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className="menuList">
                    {LIST_OF_CURRENCIES.map(currency => <MenuItem key={currency} onClick={onClick}>{currency}</MenuItem>)}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

{/* <MenuItem onClick={handleClose}>USD</MenuItem>
<MenuItem onClick={handleClose}>GBP</MenuItem>
<MenuItem onClick={handleClose}>EUR</MenuItem> */}