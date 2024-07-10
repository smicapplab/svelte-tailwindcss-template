<script>
    import { onMount } from "svelte";
    import { initGoogleAuth } from "$lib/googleAuth";
    import { jwtDecode } from "jwt-decode";

    export let googleClientId;
    export let onLogin;
    export let fullWidth = true;

    let googleButton;
    let buttonContainer;

    onMount(async () => {
        const google = await initGoogleAuth(googleClientId);
        if (google) {
            google.accounts.id.initialize({
                client_id: googleClientId,
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(googleButton, {
                theme: "outline",
                size: "large",
                width: fullWidth ? buttonContainer.offsetWidth : undefined,
                type: "standard",
                text: "signin_with",
                locale: "en_US",
            });
            google.accounts.id.prompt();
        }
    });

    const handleResize = () => {
        if (fullWidth && window.google) {
            window.google.accounts.id.renderButton(googleButton, {
                theme: "outline",
                size: "large",
                width: buttonContainer.offsetWidth,
                type: "standard",
            });
        }
    }

    const handleCredentialResponse = (response) => {
        const decodedToken = jwtDecode(response.credential);
        const email = decodedToken.email;
        const name = decodedToken.name;
        const picture = decodedToken.picture;

        onLogin({
            email: email,
            name: name,
            picture: picture,
        });
    }
</script>

<svelte:window on:resize={handleResize} />
<div bind:this={buttonContainer} class="max-w-64">
    <div bind:this={googleButton} class="mb-5"></div>
</div>