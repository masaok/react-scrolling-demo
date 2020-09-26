import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css' // using CSS directly, instead of JSS

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

import { Helmet } from 'react-helmet'

// import Button from '@material-ui/core/Button'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

import ScrollInsideContainer from './components/ScrollInsideContainer'

import PaperScrollDemo from './components/PaperScrollDemo'
import PaperGridScrollDemo from './components/PaperGridScrollDemo'
import PaperGridScrollBarDemo from './components/PaperGridScrollBarDemo'

import StateVariableCopyDemo from './components/StateVariableCopyDemo'

// Override the default MUI theme:
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#0087be', // dull blue
      main: '#555555', // dark gray
      dark: '#282c34', // React default dark background
      red: '#FF0000', // React default dark background
    },
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: '#0087be',
  },

  content: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: '#282c34', // default overrides don't work here?
    display: 'flex',
    flexGrow: 1,

    // Position fixed tip: https://stackoverflow.com/a/4069794
    position: 'fixed',
    top: theme.spacing(8),
    bottom: theme.spacing(8),
    width: '100vw',
    justifyContent: 'center',
    overflow: 'auto', // scroll if necessary on all scrolling demo pages
  },
}))

const App = props => {
  const classes = useStyles(props)

  const [name] = useState('MASAO')

  console.log('HEYYYYY')

  // const doStuff = () => {
  //   console.log('DOING STUFF')
  // }

  return (
    <div className={classes.root}>
      <Helmet>
        <title>React Scrolling Demo - {name}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className={classes.root}>
            <Switch>
              <Route path="/" component={Header} />
            </Switch>

            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={ScrollInsideContainer} />
                <Route path="/scroll-inside-container" component={ScrollInsideContainer} />
                <Route path="/paper-scroll-demo" component={PaperScrollDemo} />
                <Route path="/paper-grid-scroll-demo" component={PaperGridScrollDemo} />
                <Route path="/paper-grid-scrollbar-demo" component={PaperGridScrollBarDemo} />
                <Route path="/state-variable-copy-demo" component={StateVariableCopyDemo} />
              </Switch>
            </main>

            <Switch>
              <Route path="/" component={Footer} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
