/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from 'lib/context';

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button>FEED</button>
          </Link>
        </li>
        {/* user is signed in and has a username */}
        {username && (
          <>
            <li className='push-left'>
              <button>Sign Out</button>
            </li>
            <li>
              <Link href='/admin'>
                <button className='btn-blue'>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/hacker.png'} alt='avatar' />
              </Link>
            </li>
          </>
        )}
        {/* user is not signed in or has not created a username */}
        {!username && (
          <li>
            <Link href='/enter'>
              <button>Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
