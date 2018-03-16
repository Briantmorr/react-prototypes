import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber(){
    return Math.random() * 1000 >>0;
}
function greeting(user){
    return (<div className="container">
                <h1>hello {user.name}</h1>
                <h2 className='text-muted'>Your lucky number is {user.luckyNumber}</h2>
</div>);
}
let user = {
    name:'Brian',
    luckyNumber: luckyNumber()
}
ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
