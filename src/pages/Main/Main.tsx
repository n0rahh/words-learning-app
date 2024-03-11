import { useState } from 'react';
import { Word } from '@/types/interfaces';
import { ButtonType } from '../../types/enums';
import Button from '../../UI/Button';
import axios from 'axios';
import classes from './Main.module.scss';

const Main = () => {

  const [csvData, setCsvData] = useState<Word[]>([]);
  const fetchCSVData = async () => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTkN_mtB4Z0taXByBthZ2pj4jo2uxIdTa7AjsCv5cWmUhhbcJP1EaksJnTcg0lTbSoIaUIIi7WlAk2/pub?output=csv';
    await axios.get(csvUrl)
      .then((response) => {
        const parsedCsvData: Word[] = parseCSV(response.data);
        setCsvData(parsedCsvData);
      })
      .catch((error) => {
        console.error('Error fetching CSV data:', error);
      });
  };

  function parseCSV(csvText: string) {
    const rows = csvText.split(/\r?\n/);
    const headers: string[] = rows[0].split(',');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const rowData: string[] = rows[i].split(',');
      const rowObject = {} as Word;
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return (
    <div className='py-16 flex flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold'>Learn words easily</h1>
      <Button
        title="import words"
        type={ButtonType.BUTTON}
        isButton
        additionalClass={`${classes.button} mt-8`}
        onClick={fetchCSVData}
      />
      {
        csvData && (
          <div className='mt-16'>
            <h2 className='text-3xl mb-4'>Words</h2>
            <ul className={classes.list}>
              {csvData.map((word: Word, index: number) => (
                <li
                  key={index}
                  className={classes['list__item']}
                >{word ? word.Original : ''} - {word.Translated}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
};

export default Main;
