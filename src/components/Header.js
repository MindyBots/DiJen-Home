import videoBackground from "../assets/videos/video.mp4";
import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styled from '@mui/system/styled';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import whatsAppLogo from "../assets/images/whatsapp_logo.png";
import whatsAppContact from "../assets/images/whatsapp_contact.PNG";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 'fit-content',
  height: 'fit-content',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 2,
};

function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));

  return (
    <header>
      <video src={videoBackground} loop autoPlay muted></video>
      <a
            href="https://wa.me/9342152501"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <h1>DiJen Foods</h1>
      <div className="row">
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={style} >
                <div class="w3-container">
                  <h2 className="whatsapp">MINDYBOTS</h2>
                  <p className="whatsapp"> Point your phone to capture QR code </p>
                  <img alt="whatsAppContact" src={whatsAppContact} className='row' />
                  <Link href="https://wa.me/9342152501" underline="none" className="whatsapp-web-link">
                    {'Click Here to Chat Now !!'}
                  </Link>
                </div>
              </Box>
            </Container>
          </React.Fragment>
        </Modal>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
