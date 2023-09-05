'use client';

import { useEffect } from 'react';

export default function OnLoadScripts({ lightOrDarkMode }) {
    useEffect(() => {
        if (lightOrDarkMode === 'Dark') {
            document.getElementById('header').classList.add('dark-mode-header');
        } else if (lightOrDarkMode === 'Light') {
            document.getElementById('header').classList.add('light-mode-header');
        } else {
            document.getElementById('header').classList.add('dark-mode-header');
        }

    }, []);
    return (
        <>
        
        </>
    )
}