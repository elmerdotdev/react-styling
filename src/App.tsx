import './App.css'
import Bootstrap from './components/Bootstrap/Bootstrap'

import CSSModules from './components/CSSModules/CSSModules'
import InlineStyle from './components/InlineStyle/InlineStyle'
import StyledComponents from './components/StyledComponents/StyledComponents'

const App = () => {
  return (
    <div>
      <Bootstrap />
      <hr />
      <CSSModules />
      <hr />
      <InlineStyle />
      <hr />
      <StyledComponents />
    </div>
  )
}

export default App