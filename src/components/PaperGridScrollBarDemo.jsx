import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// import logo from './logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
  },
  appBar: {
    top: 0,
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
  },
  leftBar: {
    flex: 1,
    backgroundColor: 'green',
  },
  main: {
    flex: 2,
    overflow: 'auto',
  },
  rightBar: {
    flex: 1,
    backgroundColor: 'purple',
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}))

const rows = []
for (var i = 1; i <= 50; i++) {
  rows.push(<div>test vertical scroll {i}</div>)
}

const FormRow = () => {
  const classes = useStyles()
  const rows = []
  for (var i = 1; i <= 60; i++) {
    rows.push(
      <Grid item xs={4}>
        <Paper className={classes.paper}>item {i}</Paper>
      </Grid>
    )
  }
  return <React.Fragment>{rows}</React.Fragment>
}

const PaperGridScrollDemo = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.leftBar}>LEFT</div>
        <div className={classes.main}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div className={classes.rightBar}>RIGHT</div>
      </div>
    </div>
  )
}

export default PaperGridScrollDemo
