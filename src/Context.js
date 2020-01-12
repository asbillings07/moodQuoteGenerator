import React, { createContext, useState, useEffect, useCallback } from 'react'
import { Data } from './Data'

const QuoteContext = createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({
    happyQuotes: [],
    sadQuotes: [],
    madQuotes: [],
    upbeatQuotes: [],
    qodQuotes: []
  })

  const data = new Data()

  const getQuoteData = useCallback(async () => {
    if (state.qodQuotes.length === 0) {
      const happyQuoteData = await data.getHappyQuote()
      const sadQuoteData = await data.getSadQuote()
      const madQuoteData = await data.getMadQuote()
      const upbeatQuoteData = await data.getUpbeatQuote()
      const qodQuoteData = await data.getRandomQuote()

      setState({
        happyQuotes: happyQuoteData,
        sadQuotes: sadQuoteData,
        madQuotes: madQuoteData,
        upbeatQuotes: upbeatQuoteData,
        qodQuotes: qodQuoteData
      })
    }
  }, [data, state.qodQuotes])

  useEffect(() => {
    getQuoteData()
  }, [getQuoteData])

  const value = {
    data,
    state: {
      happyQuotes: state.happyQuotes,
      sadQuotes: state.sadQuotes,
      upbeatQuotes: state.upbeatQuotes,
      qodQuotes: state.qodQuotes
    }
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

function useQuoteState () {
  const store = React.useContext(QuoteContext)
  if (!store) {
    throw new Error('Can not `useQuoteState` outside of a context Provider ')
  }
  return store
}

export { useQuoteState, Provider }
