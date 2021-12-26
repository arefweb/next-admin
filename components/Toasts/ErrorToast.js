import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from "@emotion/styled";
import { useEffect } from 'react';

const ErrorToast = ({openError}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (openError) {
      setOpen(true)
    }
  }, [openError]);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <MyComponent>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="اطلاعات نامعتبر است"
        action={action}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      />
    </MyComponent>
  );
}

const MyComponent = styled.div`
  direction: ltr;
  & .MuiSnackbarContent-root {
    background-color: #ec4545;
    font-family: Iransans;
  }
`;

export default ErrorToast


