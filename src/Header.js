import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import { Helmet } from 'react-helmet'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
  appBar: {
    backgroundColor: 'Maroon',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
  },
  link: {
    marginLeft: theme.spacing(1),
    color: 'white',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}))

const Header = props => {
  const classes = useStyles(props)

  const [name, setName] = useState('MASAO')

  console.log('RENDERING HEADER')

  // const doStuff = () => {
  //   console.log('DOING STUFF')
  //   setName('KITAMURA')
  // }

  return (
    // https://stackoverflow.com/questions/52653103/what-is-appbar-vs-toolbar
    <AppBar className={classes.appBar}>
      <Helmet>
        <title>HEADER - {name}</title>
      </Helmet>
      <Toolbar>
        <div>THIS IS THE HEADER</div>
        {/* <Button onClick={doStuff}>DO STUFF</Button> */}
        <Button className={classes.button} variant="contained" href="/">
          Home
        </Button>
        <Button className={classes.button} variant="contained" href="/scroll-inside-container">
          Scroll Inside Container
        </Button>
        {/* <Button className={classes.button} variant="contained" href="/paper-scroll-demo">
          Paper Scroll Demo
        </Button>
        <Button className={classes.button} variant="contained" href="/paper-grid-scroll-demo">
          Paper Grid Scroll Demo
        </Button>
        <Button className={classes.button} variant="contained" href="/paper-grid-scrollbar-demo">
          Paper Grid Scrollbar Demo
        </Button>
        <Button className={classes.button} variant="contained" href="/state-variable-copy-demo">
          State Variable Copy Demo
        </Button> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header
