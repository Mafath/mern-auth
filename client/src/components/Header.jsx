import {Link} from 'react-router-dom'
// anchor tag use kroth refresh wenw
import {useSelector} from 'react-redux'

export default function Header() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Auth</span>
            <span className='text-slate-700'>App</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover'/> ) : (
              <li className='text-slate-700 hover:underline'>Sign in</li>
          )}
          </Link>
        </ul>
      </div>
    </header>
  )
}
