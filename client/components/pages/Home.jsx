import React from 'react';
import img128 from '../../images/128.jpg';
import img132 from '../../images/132.jpg';
import img151 from '../../images/151.jpg';
import img435 from '../../images/435.jpg';
import img480 from '../../images/480.jpg';
import img634 from '../../images/634.jpg';
import img747 from '../../images/747.jpg';
import img812 from '../../images/812.jpg';

function Home() {
  return (
    <div className='mx-20 my-10'>
      <h2 className='text-5xl font-bold'>Home</h2>
      <br />
      <br />
      <div className='leading-7 text-justify'>
        <h3 className='text-3xl font-bold'>Why fat matters</h3>
        <br />
        <p>
          From its humble beginnings as Fat Bear Tuesday in 2014 to nearly
          800,000 votes cast last year in 2021, celebrating fat bears and
          Katmai's healthy ecosystem has since become a tradition. For bears,
          fat equals survival. Each winter, bears enter the den where they will
          not eat or drink until they emerge in spring. During this time, they
          may lose up to one-third of their body weight as they rely solely on
          their fat reserves. Survival depends on eating a year's worth of food
          in six months.
        </p>
        <br />
        <br />
        <p>
          At Katmai, bears are drawn to the large number of salmon readily
          available from roughly late June through September. Salmon have long
          since been the lifeblood of the area, supporting Katmai's people,
          bears and other animals. Fat bears exemplify the richness of this
          area, a wild region that is home to more brown bears than people and
          the largest, healthiest runs of sockeye salmon left on the planet. How
          it works Rangers create a March-Madness style bracket pitting
          individual bears against each other. The public then votes to see who
          will advance each round. Voting takes place over several days on
          www.fatbearweek.org. People may vote using any criteria they see fit.
          In the end, one bear will reign supreme.
        </p>
        <br />
        <br />
        <h3 className='text-3xl font-bold'>Give me the tl;dr</h3>
        <br />
        <p>
          Rangers create a march-madness style bracket pitting individual bears
          against each other. The public then votes to see who will advance each
          round. Voting takes place over several days on www.fatbearweek.org.
        </p>
        <br />
        <br />
        <p>
          And now...you can create your own Katmai Fat Bear Fantasy Brackets{' '}
        </p>
        <span className='text-2xl'>*Mind Explosions*</span>
        <br />
        <br />
      </div>
      <h3 className='text-3xl font-bold'>Show me the bears!</h3>
      <br />
      <br />
      <div className='grid grid-cols-2 gap-4 w-full max-w-xl mx-auto'>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img435}
              alt='435 Holly'
            />
          </div>
          <div className='py-2 text-center'>
            <span>435 Holly</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img128}
              alt='128 Grazer'
            />
          </div>
          <div className='py-2 text-center'>
            <span>128 Grazer</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img132}
              alt='132 Cub'
            />
          </div>
          <div className='py-2 text-center'>
            <span>132 Cub</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img634}
              alt='634 Popeye'
            />
          </div>
          <div className='py-2 text-center'>
            <span>634 Popeye</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img151}
              alt='151 Walker'
            />
          </div>
          <div className='py-2 text-center'>
            <span>151 Walker</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img812}
              alt='812 Chunk'
            />
          </div>
          <div className='py-2 text-center'>
            <span>812 Chunk</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img
              className='object-contain h-48 w-96'
              src={img480}
              alt='480 Otis'
            />
          </div>
          <div className='py-2 text-center'>
            <span>480 Otis</span>
          </div>
        </div>
        <div>
          <div className='bg-gray-700 rounded shadow-lg'>
            <img className='object-contain h-48 w-96' src={img747} alt='747' />
          </div>
          <div className='py-2 text-center'>
            <span>747</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
