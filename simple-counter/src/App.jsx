import { useState } from 'react'
import './App.css'
import SecondsCounter from './SecondsCounter';
import CountDown from './CountDown';

export default function App() {
  return (
    <div>
      <CountDown />
      <SecondsCounter />
    </div>
  );
}