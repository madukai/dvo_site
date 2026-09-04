import React, { useState } from 'react';
import Home from './home/home';
import Membership from './membership/membership';
import About from './about/about';
import Fundraiser from './fundraiser/fundraiser';

const App = () => {
    const [page, setPage] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavSelection = (targetPage) => {
        setPage(targetPage);
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                id="nav"
                style={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 10003,
                    pointerEvents: 'auto',
                    display: 'none',
                }}
            >
                <button
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    aria-controls="nav-dropdown"
                    onClick={() => setMenuOpen((open) => !open)}
                    style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        border: 'none',
                        background: 'rgba(255,255,255,0.12)',
                        cursor: 'pointer',
                        padding: 0,
                        outline: 'none',
                        gap: 4,
                    }}
                >
                    <span style={{ display: 'block', width: 24, height: 3, background: '#fff', borderRadius: 2 }} />
                    <span style={{ display: 'block', width: 24, height: 3, background: '#fff', borderRadius: 2 }} />
                    <span style={{ display: 'block', width: 24, height: 3, background: '#fff', borderRadius: 2 }} />
                </button>

                {menuOpen && (
                    <div
                        id="nav-dropdown"
                        style={{
                            position: 'absolute',
                            top: 56,
                            right: 0,
                            minWidth: 170,
                            borderRadius: 14,
                            background: 'transparent',
                            padding: '0.5rem 0',
                            marginTop: 10,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => handleNavSelection('home')}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '2.5rem',
                                border: 'none',
                                background: 'transparent',
                                color: '#fff',
                                padding: '0.8rem 1rem',
                                cursor: 'pointer',
                                textTransform: 'none',
                                letterSpacing: 'normal',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                            }}
                        >
                            Home
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavSelection('membership')}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '2.5rem',
                                border: 'none',
                                background: 'transparent',
                                color: '#fff',
                                padding: '0.8rem 1rem',
                                cursor: 'pointer',
                                textTransform: 'none',
                                letterSpacing: 'normal',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                            }}
                        >
                            Membership
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavSelection('about')}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '2.5rem',
                                border: 'none',
                                background: 'transparent',
                                color: '#fff',
                                padding: '0.8rem 1rem',
                                cursor: 'pointer',
                                textTransform: 'none',
                                letterSpacing: 'normal',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                            }}
                        >
                            About Us
                        </button>
                        <button
                            type="button"
                            onClick={() => handleNavSelection('fundraiser')}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '2.5rem',
                                border: 'none',
                                background: 'transparent',
                                color: '#fff',
                                padding: '0.8rem 1rem',
                                cursor: 'pointer',
                                textTransform: 'none',
                                letterSpacing: 'normal',
                                fontSize: '0.95rem',
                                fontWeight: '500',
                            }}
                        >
                            Fundraiser
                        </button>
                    </div>
                )}
            </nav>
            {page === 'home' ? (
                <Home />
            ) : page === 'membership' ? (
                <Membership onBack={() => setPage('home')} />
            ) : page === 'fundraiser' ? (
                <Fundraiser />
            ) : (
                <About />
            )}
        </>
    );
};
export default App;