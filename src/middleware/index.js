import thunk from 'react-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger
)
