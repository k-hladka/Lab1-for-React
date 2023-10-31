import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Table} from "./Table";
import {Number} from "./Number";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Table mathematics={7} english={8} history={6} biology={10} informatics={10} literature={5} chemistry={9} geography={9}/>
        <Table mathematics={7} informatics={10} literature={5} chemistry={9} geography={9}/>
        {/* В перший компонент 'Table' передані всі параметри (всі шкільні предмети). В другий - частково.*/}

        <Number num1={5} num2={7}/>
        <Number />
        {/* В перший компонент 'Number' передані всі параметри (2 числа). В другий - не передані взагалі
        (вони приймають, в такому випадку, значення за замов.).*/}
    </React.StrictMode>
);

