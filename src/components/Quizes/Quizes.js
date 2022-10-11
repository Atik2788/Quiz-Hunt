import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {

    const quizes = useLoaderData()[0];
    console.log(quizes)

    return (
        <div>
            <h3></h3>
        </div>
    );
};

export default Quizes;