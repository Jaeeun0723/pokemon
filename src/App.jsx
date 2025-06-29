import { useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate} from 'react-router-dom'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorite from './pages/Favorite'

function App() {
  const navigate = useNavigate()
  const ditpatch = useDispatch()
  const pokemonDatas = useSelector(state => state.pokemon)

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151))
},[])

  return (
    <>
    <h1 className='border-t-[30px] border-t-[red] bg-black text-white
    text-[40px] text-center'>포켓몬 도감</h1>
    <nav className='flex justify-center gap-[20px] py-[10px] border-b-[3px] border-b-black'>
      <Link to={'/'}>메인 </Link>
      <Link to={'/favorite'}> 즐겨찾기</Link>
      <div>
        <span>🔍</span>
        <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
        className='w-[120px] border-b border-[darkgray] px-2'/>
      </div>
    </nav>
    <main className='bg-[darkgray] flex flex-wrap justify-center gap-[20px] pt-[20px]'>
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