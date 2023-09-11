import React from 'react';

import TitleComponent from '../../components/Title/TitleComponent';

export default function AboutUsPage() {
  return (
    <>
      <TitleComponent name="About us" />
      <div className="about-container">
        <p>
          OJJO is a pet project created as part of training at Rolling Scopes School. Initially it
          was conceived as a website for a jewelry store. Hence some references in the design style.
          But a little later, in the API module, the product concept changed.
        </p>
        <p>
          The project is written in React using TypeScript and the Vite builder. And it fully
          complies with the given technical specifications. The project has implemented SSR, test
          coverage is more than 80%, there are no Eslint errors or warnings.
        </p>
        <h3>I hope you enjoy this work</h3>
      </div>
    </>
  );
}
