import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

// import logo from './logo.svg'

import { boldStuffStyle } from './constants'
import { italicStuffStyle, purpleStuffStyle } from './commonStyles'

// import { Helmet } from 'react-helmet'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
  },

  appBar: {
    top: 0,
  },

  someStuff: boldStuffStyle(theme),

  ...italicStuffStyle(theme),
  ...purpleStuffStyle(theme),

  redStuff: {
    color: theme.palette.primary.red,
  },
}))

const rows = []
for (var i = 1; i <= 100; i++) {
  rows.push(<div>test vertical scroll {i}</div>)
}

const Home = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      {/* <Helmet>
        <title>HOME</title>
      </Helmet> */}
      <div className={classes.someStuff}>This stuff should be bold</div>
      <div className={classes.italicStuff}>This stuff should be italic</div>
      <div className={classes.purpleStuff}>This stuff should be purple</div>
      <div className={classes.redStuff}>This stuff should be red</div>
      {rows}
    </div>
  )
}

export default Home
