import React from 'react';
import marked from 'marked';
import * as fs from 'fs';

const Sandbox = () => {
  const fileName = 'public/blog/blog001.md';
};

export async function getStaticProps() {
  const res = fs.readFile('Input.txt', (err, data) => {
    if (err) return <div>Something went Wrong!</div>;
    const text = data.toString();
    const html = marked(text);
    return html;
  });
}

export default Sandbox;
