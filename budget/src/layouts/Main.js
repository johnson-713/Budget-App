import React from 'react'
// rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';

// assets
import wave from '../assets/wave.svg';

// helper functions
import { fetchData } from '../helpers';
import Nav from '../components/Nav';

//loader
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <Nav userName={ userName }/>
      <main>
      <Outlet />
      </main>
      <img src={ wave } alt='' />
    </div>
  )
}

export default Main;
