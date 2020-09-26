import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

// import { clone } from 'rfdc'
const clone = require('rfdc')()

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
    overflow: 'auto',
  },
}))

const StateVariableCopyDemo = props => {
  const classes = useStyles(props)

  const [simpleString] = useState('THIS IS A STRING')

  const [complexObject] = useState({
    keyOne: 'valueOne',
    keyTwo: 'valueTwo',
    listOne: ['ayyy', 'beee', 'ceee'],
    moreStuff: {
      secondLevel: 'ok',
      evenMore: {
        thirdLevel: 'this is the 3rd level',
      },
    },
  })

  const getComplexObject = () => {
    return complexObject // this doesn't do a deep copy (it must a an explicit hash/array object)
  }

  console.log('SIMPLE STRING:')
  console.log(simpleString)

  const stringCopy = (' ' + simpleString).slice(1)
  console.log('STRING COPY:')
  console.log(stringCopy)

  const substring = simpleString.substring(0, 5)
  console.log('SUBSTRING:')
  console.log(substring)

  console.log('ORIGINAL STRING:')
  console.log(simpleString)

  console.log('THE ORIGINAL OBJECT')
  console.log(complexObject)

  const simpleCopy = { ...complexObject }
  console.log('USE EFFECT > SIMPLE COPY:')
  console.log(simpleCopy)

  // Edit the copy at a deeper level (should not affect the original Complex Object)
  simpleCopy.moreStuff.evenMore.test = 'THIS IS A TEST CHANGE'

  console.log('DID THE ORIGINAL CHANGE? YES, IT DOES, EVEN THOUGH WE NEVER SET IT DIRECTLY')
  console.log(complexObject)

  const functionalCopy = getComplexObject()
  functionalCopy.moreStuff.evenMore.function = 'FUNCTIONAL CHANGE'

  console.log('ORIGINAL CHANGED AFTER FUNCTION COPY? YES, FAIL')
  console.log(complexObject)

  const rfdcClone = clone(complexObject)
  rfdcClone.moreStuff.evenMore.rfdc = 'RFDC CHANGE'

  // https://www.npmjs.com/package/rfdc
  console.log('ORIGINAL CHANGED AFTER RFDC COPY? NO, SUCCESS!')
  console.log(complexObject)

  const spreadOp = {
    simpleString,
    ...complexObject,
  }

  console.log('SPREAD OP:')
  console.log(spreadOp)
  spreadOp.newThing = 'SPREAD OP ADDITION'
  spreadOp.moreStuff.evenMore.spreadOpNew = 'SPREAD OP ADDITION'
  console.log('ORIGINAL CHANGED AFTER SPREAD OP COPY? YES, interesting')
  console.log(complexObject)

  return <div className={classes.root}>STATE VARIABLE COPY DEMO</div>
}

export default StateVariableCopyDemo
