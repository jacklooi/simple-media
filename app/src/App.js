import React from 'react'
import './App.css'
import './styles.scss'
import Watch from './containers/Watch'
import Upload from './containers/Upload'
import MediaLibrary from './containers/MediaLibrary'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Switch className='container'>
            <Route path='/' component={MediaLibrary} exact/>
            <Route path='/upload' component={Upload}/>
            <Route path='/watch/:uid' render={(props) => {
              const uid = props.match.params.uid
              return (<Watch {...props} uid={uid} />)
            }}/>
            {/* <Route component={Error}/> */}
          </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
