import React, { useState } from 'react'
import './Form.css'
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';
import { Context } from '../Context';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
export const Form = () => {
    const [param] = useSearchParams();
    const { state, dispatch } = useContext(Context);
    const ind = parseInt(param.get("id"));
    const find = param.get('id') ? state.data[parseInt(param.get("id"))].code : '';
    const find2 = param.get('id') ? state.data[parseInt(param.get("id"))].name : '';
    const find3 = param.get('id') ? state.data[parseInt(param.get("id"))].fname : '';
    const find4 = param.get('id') ? state.data[parseInt(param.get("id"))].phone : '';
    const find5 = param.get('id') ? state.data[parseInt(param.get("id"))].Class : '';
    const find6 = param.get('id') ? state.data[parseInt(param.get("id"))].date : '';
    const find7 = param.get('id') ? state.data[parseInt(param.get("id"))].address : '';
    const find8 = param.get('id') ? state.data[parseInt(param.get("id"))].village : '';
    const find9 = param.get('id') ? state.data[parseInt(param.get("id"))].district : '';
    const find10 = param.get('id') ? state.data[parseInt(param.get("id"))].pin : '';
    const [code, setcode] = useState(param.get("id") ? find : '');
    const [name, setname] = useState(param.get("id") ? find2 : '');
    const [fname, setfname] = useState(param.get("id") ? find3 : '');
    const [phone, setphone] = useState(param.get("id") ? find4 : '');
    const [Class, setClass] = useState(param.get("id") ? find5 : '');
    const [date, setdate] = useState(param.get("id") ? find6 : '');
    const [address, setaddress] = useState(param.get("id") ? find7 : '');
    const [village, setvillage] = useState(param.get("id") ? find8 : '');
    const [district, setdistrict] = useState(param.get("id") ? find9 : '');
    const [pin, setpin] = useState(param.get("id") ? find10 : '');


    const Navi = useNavigate();
    const onChange = e => {
        switch (e.target.name) {
            case 'code':
                setcode(e.target.value)
                break;
            case 'name':
                setname(e.target.value)
                break;
            case 'fname':
                setfname(e.target.value)
                break;
            case 'address':
                setaddress(e.target.value)
                break;
            case 'village':
                setvillage(e.target.value)
                break;
            case 'district':
                setdistrict(e.target.value)
                break;
            case 'pin':
                setpin(e.target.value)
                break;
            case 'phone':
                setphone(e.target.value)
                break;
            case 'Class':
                setClass(e.target.value)
                break;
            case 'date':
                setdate(e.target.value)
                break;
            default:
                break;
        }
    }
    var id = 0;
    const onCLicks = () => {
        if (code !== "") {
            if (name !== '') {
                if (fname !== '') {
                    if (address !== '') {
                        if (village !== '') {
                            if (district !== "") {
                                if (pin !== '') {
                                    if (phone !== '') {
                                        if (Class !== "") {
                                            if (date !== '') {
                                                if (param.get("id")) {
                                                    state.data[ind].code = code;
                                                    state.data[ind].name = name;
                                                    state.data[ind].fname = fname;
                                                    state.data[ind].phone = phone;
                                                    state.data[ind].Class = Class;
                                                    state.data[ind].date = date;
                                                    state.data[ind].village = village;
                                                    state.data[ind].district = district;
                                                    state.data[ind].pin = pin;
                                                    state.data[ind].address = address;
                                                    Navi('/')
                                                } else {
                                                    id++
                                                    let addTopush = {
                                                        id: Math.random(),
                                                        code,
                                                        name,
                                                        fname,
                                                        address,
                                                        village,
                                                        district,
                                                        pin,
                                                        phone,
                                                        Class,
                                                        date
                                                    }
                                                    dispatch({ type: "push", payload: [...state.data, addTopush] });
                                                    Navi('/')
                                                }
                                            } else {
                                                alert("InValid date")
                                            }

                                        } else {
                                            alert("InValid Class")
                                        }

                                    } else {
                                        alert("InValid phone")
                                    }
                                } else {
                                    alert("InValid pin")
                                }
                            } else {
                                alert("InValid district")
                            }
                        } else {
                            alert("InValid village")
                        }
                    } else {
                        alert("InValid address")
                    }
                } else {
                    alert("InValid fname")
                }
            } else {
                alert("InValid name")
            }
        } else {
            alert("InValid Code")
        }

    }
    console.log(state.data);
    const CAN = () => {
        Navi('/')
    }
    return (
        <div className='FRM'>
            <div className='container'>
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
                        <div className='new'><h3>New Student Master</h3></div>
                        <div className='inset-form'>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Student Code</td>
                                        <td><input type={"text"} onChange={onChange} value={code} name='code' /></td>
                                    </tr>
                                    <tr>
                                        <td>Student Name</td>
                                        <td><input type={"text"} onChange={onChange} value={name} name='name' /></td>
                                    </tr>
                                    <tr>
                                        <td>Father Name</td>
                                        <td><input type={"text"} onChange={onChange} value={fname} name='fname' /></td>
                                    </tr>

                                    <tr>
                                        <td>Address</td>
                                        <td><input type={"text"} onChange={onChange} value={address} name='address' /></td>
                                    </tr>

                                    <tr>
                                        <td>Village</td>
                                        <td><input type={"text"} onChange={onChange} value={village} name='village' /></td>
                                    </tr>

                                    <tr>
                                        <td>District</td>
                                        <td><input type={"text"} onChange={onChange} value={district} name='district' /></td>
                                    </tr>

                                    <tr>
                                        <td>Pin Code</td>
                                        <td><input type={"text"} onChange={onChange} value={pin} name='pin' /></td>
                                    </tr>

                                    <tr>
                                        <td>Phone Number</td>
                                        <td><input type={"text"} onChange={onChange} value={phone} name='phone' /></td>
                                    </tr>

                                    <tr>
                                        <td>Class</td>
                                        <td><input type={"text"} onChange={onChange} value={Class} name='Class' /></td>
                                    </tr>


                                    <tr>
                                        <td>Date Of Birth</td>
                                        <td><input type={"date"} style={{ width: "250px" }} onChange={onChange} value={date} name='date' /></td>
                                    </tr>

                                </tbody>
                            </table>
                            <button onClick={() => onCLicks()}>Save</button>
                            <button onClick={() => CAN()}>Cancel</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
