import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addNameAC, connectUserAC } from '../../redux/actions/user';
import './SignUp.scss';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  useEffect(():void => {
    setTimeout(():void => {
      setPlaceholder('Имя...');
    }, 500);
  }, []);

  const nameHandler = (event: any):void => {
    setName(event.target.value);
  }

  const addUserhandler = (): void => {
    dispatch(addNameAC(name));
    history.push('/online')
  }

  return (
    <div className='emersion conteiner'>
      <h3>Введите имя</h3>
      <input
        className='input'
        type="text"
        onChange={nameHandler}
        placeholder={placeholder}
      />
      <button onClick={addUserhandler} className='greyButton input'>продолжить</button>
    </div>
  )
}

export default SignUp;
