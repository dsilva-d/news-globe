import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ArticlesModal = ({ show, onClose, articles = [], country, modalPosition }) => {
  // Ensure that articles is not undefined and is an array
  const safeArticles = Array.isArray(articles) ? articles : [];

  const dynamicStyle = {
    ...style,
    top: `${modalPosition.top}px`,  // Changed from % to px since we are getting actual position
    left: `${modalPosition.left}px`, // Same here
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={dynamicStyle}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Articles about {country}
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          {safeArticles.map((article, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">{article.title}</Typography>
              <Typography variant="body2">{article.summary}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ArticlesModal;
