import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate authentication (replace with actual logic)
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
            alert('Logged in successfully!');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    if (loggedIn) {
        return (
            <div>
                <h2>Welcome, {username}!</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <center >
            <form onSubmit={handleLogin}>

                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form></center>
    );
};

export default LoginPage;