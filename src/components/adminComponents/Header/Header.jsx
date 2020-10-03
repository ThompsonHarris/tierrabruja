import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className='bg-white w-full rounded-b-lg'>
        <div className='w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0 '>
          <div className='w-1/2 pl-2 md:pl-0'>
            <Link
              className='text-black text-base xl:text-xl no-underline hover:no-underline font-bold ml-6'
              to='/admin'
            >
              ADMIN
            </Link>
          </div>
          <div className='w-full flex-grow justify-end lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0'>
            <ul className='lg:flex flex-1 justify-end items-center px-4 md:px-0'>
              <li className='mr-6 my-2 md:my-0'>
                <Link
                  to='/admin/users'
                  className='block py-1 md:py-3 pl-1 align-middle no-underline hover:text-orange-400 '
                >
                  <span className='pb-1 md:pb-0 text-sm'>users</span>
                </Link>
              </li>
              <li className='mr-6 my-2 md:my-0'>
                <Link
                  to='/admin/projects'
                  className='block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-orange-400  '
                >
                  <span className='pb-1 md:pb-0 text-sm'>projects</span>
                </Link>
              </li>
              <li className='mr-6 my-2 md:my-0'>
                <Link
                  to='/admin/traffic'
                  className='block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-orange-400  '
                >
                  <span className='pb-1 md:pb-0 text-sm'>traffic</span>
                </Link>
              </li>
              <li className='mr-6 my-2 md:my-0'>
                <Link
                  to='/admin/analytics'
                  className='block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-orange-400 '
                >
                  <span className='pb-1 md:pb-0 text-sm'>analytics</span>
                </Link>
              </li>
              <li className='mr-6 my-2 md:my-0'>
                <Link
                  to='/admin/settings'
                  className='block py-1 md:py-3 pl-1 align-middle text-grey no-underline hover:text-orange-400 '
                >
                  <span className='pb-1 md:pb-0 text-sm'>settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
