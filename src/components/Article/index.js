import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Article ({ title, description, source, url, imageUrl }) {
    return (
      <Card>
        {/* You can add an image if available */}
        {imageUrl && <img  src={imageUrl} alt={title} className="article-image"/>}
  
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Source: {source}
          </Typography>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </CardContent>
      </Card>
    );
  }
 
export default Article;