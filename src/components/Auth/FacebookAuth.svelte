<script>
    import { onMount } from 'svelte';
    import { initFacebookSDK } from '$lib/facebookAuth';

    export let facebookAppId;
    export let onLogin = () => {};

    let FB;

    onMount(async () => {
        FB = await initFacebookSDK(facebookAppId);
    });

    const handleLogin = () => {
        FB.login((response) => {
            if (response.authResponse) {
                FB.api('/me', function(userInfo) {
                    onLogin({ ...response, userInfo });
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
    }
</script>

<button on:click={handleLogin} class="facebook-button">
    <svg class="facebook-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
    </svg>
    <span class="facebook-text">Sign in with Facebook</span>
</button>

<style>
    .facebook-button {
        height: 40px;
        letter-spacing: 0.25px;
        color: #3c4043;
        font-size: 14px;
        font-family: "Google Sans",arial,sans-serif;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.8rem;
        background-color: white;
        border: 1px solid #d2d6dc;
        border-radius: 0.275rem;
        transition: background-color 0.3s ease;
    }

    .facebook-button:hover {
        background-color: #f7fafc;
    }

    .facebook-icon {
        width: 1.25rem;
        height: 1.25rem;
    }

    .facebook-text {
        flex-grow: 1;
        text-align: center;
    }
</style>
