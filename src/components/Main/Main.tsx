import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './_Main.scss'

function Main() {

  const userName = window.localStorage.getItem('userName')

  return (
    <div className='conteiner'>
      <div className='emersion'>
        Это длинные нарды!
        <div className='rules-div'>Правила игры <a target='_blank' href='https://ru.wikipedia.org/wiki/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BD%D0%B0%D1%80%D0%B4%D1%8B'>
          тут.
          </a></div>
      </div>
      <div className='emersion2'>Выбери режим:</div>
      <div className='choiseConteiner'>
        <Link to='/supermind'>
          <div className='choiseBox'>cверхразум</div>
        </Link>
        <Link to='/online'>
          <div className='choiseBox'>онлайн</div>
        </Link>
      </div>
    </div>
  )
}

export default Main
