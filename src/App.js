import github from './images/github.png';
import cv from './images/cv.png';
import construction from './images/construction_sign.png';

import Link from './components/link/Link';

import './App.css';
import Title from './components/link/title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text="Introduction - Kornidesz Máté" />
        <img src={construction} className="App-logo" alt="logo" />
        <p className="construction-text">
          This site is currently under construction, by the time the new site is created, please use my GitHub profile and CV as information source about me.
        </p>
      </header>
      <main className='App-header'>
        <table>
          <tbody>
            <tr>
              <td>
                <Link link="https://github.com/Kornimate" image={github} title="Kornidesz Máté's GitHub profile"/>
              </td>
              <td>
                <Link link="https://drive.google.com/file/d/1Yr6AVcPTLEY9y2rUrAEnMeEvuS8gvZqG/view?usp=sharing" image={cv} title="Kornidesz Máté's CV"/>

              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
