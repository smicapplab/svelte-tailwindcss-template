export const initGoogleAuth = () => {
    if (typeof window !== 'undefined' && !window.google) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        return new Promise((resolve) => {
            script.onload = () => {
                resolve(window.google);
            };
            script.onerror = () => {
                console.error("Failed to load Google script");
                resolve(null);
            };
        });
    } else if (typeof window !== 'undefined') {
        return Promise.resolve(window.google);
    }
    return Promise.resolve(null);
}
