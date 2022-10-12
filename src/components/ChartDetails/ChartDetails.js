import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,} from 'recharts';

const ChartDetails = ({quiz}) => {

    const {name, total} = quiz;
    console.log(total)

    return (
        <div>

        </div>
    );
};

export default ChartDetails;