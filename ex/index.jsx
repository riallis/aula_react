import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'
import He from './he'
ReactDOM.render(
  <Field initialValue='Teste' />  
, document.getElementById('app'))

ReactDOM.render(<He/>, document.getElementById('mais'))
