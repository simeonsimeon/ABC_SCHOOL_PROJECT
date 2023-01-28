import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';
import SearchIcon from '@mui/icons-material/Search';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import { useContext } from 'react';
import './Table.css'
export const Table = () => {
  
    const [search,setsearch] = useState([])
    const Navigate = useNavigate();
    const { state, dispatch } = useContext(Context);
    
    const [findSearchcode,setfindSearchcode] = useState('')
     var findCode;
    
    const Search = e => {
        setfindSearchcode(e.target.value)
    }
    
    const onCLickSearch  = () => {
        
        console.log(search);
        findCode = search.findIndex((item)=>item.code == findSearchcode);
        console.log(search[findCode].name);
        
        
    }
    
    const aDD = () => {
        Navigate('/Form')
    }
    console.log(state.data)
    const eDIT = (index) => {
        Navigate({
            pathname: '/Form',
            search: createSearchParams({
                id: index
            }).toString()
        })
    }
    return (
        <div>
            <header>
                <h2>ABC School</h2>
                <PersonIcon className='icon' />
            </header>
            <div className='form'>
                <div className='side-bar-form'>
                    <div className='first'>

                        <Groups2Icon className='icon' />
                        <h3>Student</h3>

                    </div>
                    <div className='second'>
                        <p>Powered By : <span style={{ color: "yellow" }}>ABC School</span></p>
                    </div>

                </div>
                <div className='mid-form'>
                    <div className='new1'>
                        <h3>New Student Master</h3>
                        <div>
                            <input type='text' onChange={Search}/>
                            <SearchIcon className='search' onClick={()=>onCLickSearch()}/>
                        </div>
                        <button onClick={() => aDD()}>Add</button>
                    </div>
                    <div className='inset-form1'>
                        <table>
                            <thead>
                            <tr style={{ backgroundColor: "rgb(3, 116, 190)", color: "white" }}>
                                <th>S no</th>
                                <th>S code</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Mobile Name</th>
                                <th>Class</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {state.data?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.Class}</td>
                                        <td><button onClick={() => eDIT(index)}>E</button></td>

                                    </tr>
                                )
                            }

                            )}
</tbody>
                        </table>

                    </div>
                </div>
            </div>
       
        </div>
    )
}
