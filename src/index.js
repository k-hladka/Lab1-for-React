import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Table} from "./Table";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table mathematics = {7} english = {8} history = {6} biology = {10} informatics = {10} literature = {5} chemistry = {9} geography = {9}/>
  </React.StrictMode>
);

