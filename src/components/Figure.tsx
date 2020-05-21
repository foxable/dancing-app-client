import { Avatar, Button, createStyles, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, makeStyles, Theme, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { IFigure } from '../DataService';
import MarkdownContent from './MarkdownContent';

interface IFigureProps {
  data: IFigure;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {      
      width: theme.spacing(3),
      height: theme.spacing(3),
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontSize: '0.8rem',
      marginRight: '1rem'
    }
  })
);

const Figure: React.FC<IFigureProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar className={classes.avatar}>{data.level === 0 ? 'W' : data.level}</Avatar>
        <Typography>{data.name}</Typography>
      </ExpansionPanelSummary>
      {data.description && (
        <ExpansionPanelDetails>
          <Typography color="textSecondary">
            <MarkdownContent text={data.description} />
          </Typography>
        </ExpansionPanelDetails>
      )}
      {data.video_url && (
        <ExpansionPanelActions>
          <Button color="primary" href={data.video_url}>
            Video
          </Button>
        </ExpansionPanelActions>
      )}
    </ExpansionPanel>
  );
};

export default Figure;
