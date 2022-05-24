import React from 'react';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

export default function Home() {
  return (
    <>
      <div className="div-ajuda">
        <img src="https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg" alt="imagem do psyduck" />
      </div>
      <div className="body2">
        <Header />
        <Main />
      </div>
    </>
  );
}
