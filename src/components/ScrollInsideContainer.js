import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import { Helmet } from 'react-helmet'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // color: theme.palette.common.white,
    // backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
    overflow: 'auto',
    // maxHeight: 500,
    minWidth: '50vw',
    margin: theme.spacing(5),
  },
}))

const rows = []
for (var i = 1; i <= 50; i++) {
  rows.push(<div>test vertical scroll {i} inside container that flexes with browser resizing</div>)
}

const PaperScrollDemo = props => {
  const classes = useStyles(props)
  return (
    <Paper className={classes.root}>
      <Helmet>
        <title>Scroll Inside Container</title>
      </Helmet>
      {rows}
    </Paper>
  )
}

export default PaperScrollDemo
