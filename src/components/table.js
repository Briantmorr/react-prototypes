import React from 'react';

export default (props) => {
    const tableRows = props.data.map((x,index) => {
        return (<tr key = {index}>
                    <td>{x.student}</td>
                    <td>{x.course}</td>
                    <td>{x.grade}</td>
                </tr>)
    });
    return <table className='table'>
                <thead className = 'thead-inverse'>
                    <tr> 
                        <th> Name</th>
                        <th>Course</th>
                        <th> Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
}

