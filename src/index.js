import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Form } from './Form/Form';
import { Table } from './Form/Table';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Context } from './Context';
import { Reducer } from './Reducer';
export const Index = () => {
  const [state,dispatch] = useReducer(Reducer,{data:[]})
  return (
    
    
    <Context.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Table />}></Route>
      <Route path='Form' element={<Form />}></Route>
    </Routes>
    
    </BrowserRouter>
    </Context.Provider>

  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
