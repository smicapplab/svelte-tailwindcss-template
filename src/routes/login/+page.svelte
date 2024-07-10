<script>
    import Login from "../../components/Auth/Login.svelte";
    import Register from "../../components/Auth/Register.svelte";

    const googleClientId = import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID;
    const facebookAppId = import.meta.env.VITE_PUBLIC_FACEBOOK_APP_ID;

    let isLogin = true;
    let password = "";
    let firstName = "";
    let lastName = "";
    let email = "";
    let mobileNumber = "";

    const toggleForm = () => {
        isLogin = !isLogin;
    };

    const handleLogin = () => {
        // Handle login logic
        console.log("Username:", email);
        console.log("Password:", password);
    };

    const handleRegister = () => {
        // Handle registration logic
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Mobile Number:", mobileNumber);
    };

    const handleFacebookLogin = (response) => {
        console.log("Facebook Login In:", response);
        // Handle Facebook login logic
    };

    const handleGoogleLogin = async (response) => {
        // const result = await googleSignIn(googleAuth2);
        console.log("Google Sign In:", response);
    };
</script>

<main
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
>
    <div class="w-full max-w-md p-8 bg-white rounded shadow-md">
        {#if isLogin}
            <Login
                bind:email
                bind:password
                {googleClientId}
                {facebookAppId}
                {handleLogin}
                {handleFacebookLogin}
                {handleGoogleLogin}
            />
        {:else}
            <Register
                bind:firstName
                bind:lastName
                bind:email
                bind:password
                bind:mobileNumber
                {handleRegister}
            />
        {/if}
        <p class="mt-4 text-center text-gray-600">
            {isLogin ? "Need an account?" : "Already have an account?"}
            <button
                on:click={toggleForm}
                class="text-blue-500 underline bg-transparent border-none hover:text-blue-700 focus:outline-none"
            >
                {isLogin ? "Register" : "Login"}
            </button>
        </p>
    </div>
</main>

<style>
    main {
        background-color: #f7fafc;
    }
</style>
