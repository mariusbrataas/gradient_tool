import React, {useState} from 'react';
import './App.css';

import { SketchPicker } from 'react-color';

function App() {

  const [col1, setCol1] = useState({r:117, g:82, b:0, a:0.74})
  const [col2, setCol2] = useState({r:6, g:0, b:141, a:0.93})
  const [img_url, setUrl] = useState("https://cdn.pixabay.com/photo/2019/08/17/04/18/morning-4411420_1280.jpg")
  const [rot, setRot] = useState(145)

  var background_str = 'linear-gradient(' + rot + 'deg, '
  background_str += 'rgba('
  Object.keys(col1).map(key => background_str += col1[key] + ',')
  background_str = background_str.slice(0, background_str.length - 1) + '), '
  background_str += 'rgba('
  Object.keys(col2).map(key => background_str += col2[key] + ',')
  background_str = background_str.slice(0, background_str.length - 1) + ')), '
  background_str += 'url("' + img_url + '")'
  return (
    <div style={{
      position:'fixed',
      overflow:'hidden',
      height:'100vh',
      width:'100vw',
      backgroundImage:background_str,
      backgroundPosition:'center center',
      width:'100%',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}>
      <div class="wrapper">

        <div class="header area">
          <input class="inputfield" type="text" placeholder="Image url" onChange={e => setUrl(e.target.value)}/>
        </div>

        <div class="sidebar area">
            <SketchPicker
              color={col1}
              onChange={ e => setCol1(e.rgb) }
              />
            <br/>
            <SketchPicker
              color={col2}
              onChange={ e => setCol2(e.rgb) }
            />
            <br/>
            Rotation {"  "} <input type="range" name="points" min="0" max="360" onChange={e => setRot(e.target.value)}></input>
            <br/>{background_str}
        </div>

      </div>
    </div>
  );
}

export default App;
