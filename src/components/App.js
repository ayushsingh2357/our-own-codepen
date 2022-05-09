import React, { useState, useEffect } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
  const [css, setCss] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>`)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html,js,css])


  return (
    <>
      <div className='pane top-pane'>
        <Editor language='xml' displayName='HTML' value={html} onChange={setHtml} />
        <Editor language='css' displayName='CSS' value={css} onChange={setCss} />
        <Editor language='javascript' displayName='JS' value={js} onChange={setJs} />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
          frameBorder="0"
        />
      </div>
    </>
  );
}

export default App;
