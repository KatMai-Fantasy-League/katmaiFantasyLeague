import React, { useState, useEffect } from 'react';
import BracketOutline from '../BracketOutline';
import BracketForm from '../BracketForm';
import { convertFromSQL } from '../../utils/sqlConvertFrom';

function CurrentBracket(props) {
  const [loading, setLoading] = useState(true);
  const { resultsBracket, setResultsBracket } = props;

  useEffect(() => {
    const getBracket = async () => {
      const response = await fetch('api/resultsBracket');
      const data = await response.json();
      return data;
    };

    const getBears = async () => {
      const response = await fetch('api/bears');
      const data = await response.json();
      return data;
    };

    let bracketData;
    let bearsList;

    const setData = async () => {
      bracketData = await getBracket();
      bearsList = await getBears();
      setResultsBracket(convertFromSQL(bearsList, bracketData));
      setLoading(false);
    };

    setData();
  }, []);

  return (
    <div className='mx-auto px-auto'>
      {loading ? (
        <div>Bracket is Loading...</div>
      ) : (
        <>
          <div className='mb-5'>
            <h2 className='mb-5 text-3xl font-bold'>
              This Year's Katmai Fat Bear Fantasy Bracket Results
            </h2>
            <div className='mx-auto w-full'>
              <BracketOutline myBracket={resultsBracket} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default CurrentBracket;
