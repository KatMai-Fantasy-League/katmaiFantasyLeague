import React from 'react';
import BracketOutline from '../BracketOutline';
import BracketForm from '../BracketForm';

function MyBracket(props) {
  const { myBracket, setMyBracket } = props;

  return (
    <div className='mx-auto px-auto'>
      <div className='mb-5'>
        <h2 className='mb-5'>My FBB Bracket</h2>

        <BracketOutline myBracket={myBracket} />
      </div>
      <BracketForm myBracket={myBracket} setMyBracket={setMyBracket} />
    </div>
  );
}
export default MyBracket;
