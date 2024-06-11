import React from 'react'
import { useState } from 'react';

const Table = () => {

    const initialData = 
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ];

    const [setData, setSetData] = useState(initialData);

    const sortedDataByDate = () => {
        const sortedData = [...setData].sort((a,b) => {
            if(a.date === b.date) {
                return b.views - a.views;
            }
            return new Date(b.date) - new Date(a.date);
        });
        setSetData(sortedData);
    };

    const sortedDataByViews = () => {
        const sortedData = [...setData].sort((a,b) => {
            if(a.views === b.views) {
                return new Date(b.date) - new Date(a.date);
            }
            return b.views - a.views;
        });
        setSetData(sortedData);
    };

    return (
        <div>
            <h1>Date and Views Table</h1>
                <button onClick={sortedDataByDate}>Sort by Date</button>
                <button onClick={sortedDataByViews}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {setData.map((row) => (
                        <tr key={row.date}>
                            <td>{row.date}</td>
                            <td>{row.views}</td>
                            <td>{row.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;