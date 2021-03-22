import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import PreGameRoom from '../PreGameRoom/PreGameRoom';
import { addNameAC, connectUserAC } from '../../redux/actions/user';


function OnLine() {
  const dispatch = useDispatch();
  const history = useHistory()
  const store = JSON.parse(window.localStorage.getItem('store'));

  if (store?.user?.name) {
    dispatch(addNameAC(store.user.name));
    dispatch(connectUserAC());
  } else {
    history.push('signup');
  }

  return <PreGameRoom />
}

export default OnLine;
