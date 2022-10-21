import React from 'react';
import Editor from "@monaco-editor/react";
import { JsonLang } from 'jsonlang-js';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import getExample from '@site/src/components/JsonLangRunner/examples';

const jsonLang = new JsonLang();

jsonLang.registerOne({ name: 'Test', shortcut: 't' }, (input) => {
  return `${input} Test`
});

export default function JsonLangRunner() {
  const [result, setResult] = React.useState('');
  const [code, setCode] = React.useState(
    getExample(1)[0]
  );

  const [objData, setData] = React.useState(
    getExample(1)[1]
  );

  React.useEffect(() => {
    run();
  })

  function run() {
    let jsonCode, jsonData;

    try {
      jsonCode = JSON.parse(code);
      jsonData = JSON.parse(objData);
    } catch {
      jsonCode = jsonData = null
    }

    if (jsonCode && jsonData) {
      try {
        const res = jsonLang.execute(jsonCode, jsonData);
        setResult(typeof res == 'object'? JSON.stringify(res) : res);
      } catch (error) {
        setResult(error.message);
      }
    }
  }

  function handleCodeChange(value) {
    setCode(value);
  }

  function handleDataChange(value) {
    setData(value);
  }

  function handleCodeValidation(markers) {
  }

  return ([
    <Layout title="Hello" description="Hello React Page">
      <div className={styles.gridContainer} key="JsonLang">
        <div className={styles.gridItem}>
        <label key="JsonLangLabel" className={styles.label}>Rules</label>
        <Editor
          theme="vs-dark"
          height="60vh"
          width="100%"
          defaultLanguage="json"
          defaultValue={code}
          onChange={handleCodeChange}
          onValidate={handleCodeValidation}
          key="JsonLangCode"
        />
        </div>
        <div className={styles.gridItem}>
        <label key="DataLabel" className={styles.label}>Data</label>
        <Editor
          theme="vs-dark"
          height="60vh"
          width="100%"
          defaultLanguage="json"
          defaultValue={objData}
          onChange={handleDataChange}
          key="JsonLangData"
        />
        </div>
      </div>
      <div key="Result">
        <label key="ResultLabel" className={styles.label}>Result</label>
        <textarea key="ResultValue" defaultValue={result} disabled={true} className={styles.result}></textarea>
      </div>
    </Layout>
  ]);
}



