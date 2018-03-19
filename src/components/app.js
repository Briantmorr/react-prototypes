import React from 'react';
import Table from './table';

const students = [
    {
        student: 'name1',
        course: 'course1',
        grade: 'grade1'
    },
    {
        student: 'name2',
        course: 'course2',
        grade: 'grade2'
    },
    {
        student: 'name3',
        course: 'course3',
        grade: 'grade3'
    },
];

export default () => (<div className='container'>
                        <h1>Student Grade Table</h1>
                        <Table data={students}/>
                    </div>);

