import { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'

function App() {
  const ditpatch = useDispatch()
  const pokemonDatas = useSelector(state => state.pokemon)

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
},[])

  return (
    <>
    <h1 className='text-3xl text-center'>포켓몬 도감</h1>
    <nav className='flex justify-center'>
      <Link to={'/'}>메인 </Link>
      <Link to={'/detail/1'}> 상세정보 </Link>
      <Link to={'/search'}> 검색 </Link>
      <Link to={'/favorite'}> 즐겨찾기</Link>
    </nav>
    <main className='flex flex-wrap justify-center gap-[20px] pt-[20px]'>
    <Routes>
      <Route path={'/'} element = { <Main />}/>
      <Route path={'/detail/:pokemonId'} element = { <Detail/>}/>
      <Route path={'/search'} element = { <Search />}/>
      <Route path={'/favorite'} element = { <Favorite />}/>
    </Routes>
    </main>
    </>
  )
}

export default App