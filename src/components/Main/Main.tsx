import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Main.scss'

function Main() {

  return (
    <div className='conteiner'>
      <div className='emersion'>Это длинные нарды!</div>
      <div className='emersion2'>Выбери режим:</div>
      <div className='choiseConteiner'>
        <Link to="/supermind">
          <div className='choiseBox'>cверхразум</div>
        </Link>
        <div className='choiseBox'>онлайн</div>
      </div>
    </div>
  )
}

export default Main
