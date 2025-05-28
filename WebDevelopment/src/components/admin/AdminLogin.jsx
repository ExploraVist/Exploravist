import React from 'react';
import { LockIcon } from 'lucide-react';
import '../../styles/admin/AdminLogin.css';

const Admin = () => {
    const handleLogin = () => {
        console.log("Nice Try");
    }
    return (
        <section className="admin_login">
            <form onSubmit={handleLogin} className="admin_login_wrapper">
                <p>Admin Portal</p>
                <div className='admin_login_line'/>
                <div className='admin_login_input_wrapper'>
                    <div className='admin_login_icon_wrapper'><LockIcon className='admin_login_icon' size={32}/></div>
                    <input className='admin_login_input' type='password' aria-label="hidden" />
                </div>
            </form>
        </section>
    );
};

export default Admin; 