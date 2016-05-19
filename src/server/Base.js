import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';

export default class Base extends Component {
  render() {
    return (
      <html lang="pt-br">
        <head>
          <title>Cleytoness</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <main id="root" />
          <script src="/dist/bundle.js"/>
        </body>
      </html>
    );
  }
}
