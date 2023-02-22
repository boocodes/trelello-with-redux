import React from 'react';
import { Header } from './';
import styled from 'styled-components';
import {
  UserNameModal,
  Application,
  selectUsername,
  useAppSelector,
} from "./";
import { useState, useEffect, useMemo } from 'react';

function App() {

  const username = useAppSelector(selectUsername);
  console.log(username);

  return (
    <>
      <Header/>
      <Application />
      {username === "" ? <UserNameModal /> : null}
    </>
  );
}

export default App;
