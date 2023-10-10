import React from 'react';
import BannerBg from '../assets/images/hero-bg.png';
import DashboardNavItems from './DashboardNavItems';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import useAuth from '../hooks/useAuth';

const Profile = () => {
    // const {user}=useAuth()
    // console.log(user)
    return (
        <section style={{ backgroundImage: `url(${BannerBg})` }} className='relative  h-[500px] md:h-[730px] bg-cover bg-center pt-36 '>
            <div className='container grid grid-cols-11 gap-8'>
                <div className='col-span-8 '>
                    {/* Sidebar */}
                    <DashboardNavItems />


                    {/* Outlet */}
                    <main className='bg-white p-2 mt-5'>
                        <Outlet />
                    </main>
                </div>
                <div className='col-span-3 border-2'>
                    Chat
                </div>
            </div>
        </section>

    );
};

export default Profile;