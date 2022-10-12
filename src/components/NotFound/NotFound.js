import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found '>

        <div className='pt-10 lg:pt-[500px]'>
        <Link to='/' className="btn btn-outline btn-primary bg-white text-white border-black ">Back To Home</Link>
        </div>

            <div className='lg:hidden mt-[200px]'>
                <h3 className='text-5xl font-bold bg-blue-400 mx-auto rounded-md p-5 text-red-600'>404</h3>
                <p className='bg-blue-400 p-5 mt-5 font-bold text-2xl'>Page Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;