import React, { useState, useEffect } from 'react';
import Moveable from 'react-moveable';
import './App.css';

const App = () => {
  const [target, setTarget] = useState();

  useEffect(() => {
    setTarget(document.querySelector('.content'));
  }, []);

  return (
    <div className={'parent'}>
      <div className={'content'}>target</div>
      <Moveable
        //動かす要素の指定
        target={target}
        //要素の動き指定
        draggable={true}
        resizable={true}
        rotatable={true}
        //動かした時の移動幅
        throttleDrag={0}
        throttleResize={0}
        throttleRotate={0}
        //縦横比率の維持
        keepRatio={false}
        //中心点の有無
        origin={false}
        //辺中央の編集ボタンの有無
        edge={true}
        //イベント指定
        onDrag={e => {
          e.target.style.transform = e.transform;
        }}
        onResize={e =>{
          e.target.style.width  = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
        }}
        onRotate={e =>{
          e.target.style.transform = e.transform;
        }}
      />
    </div>
  );
};

export default App;