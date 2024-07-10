<script>
    import GoogleAuth from "./GoogleAuth.svelte";
    import FacebookAuth from "./FacebookAuth.svelte";

    export let email = "";
    export let password = "";
    export let handleLogin;
    export let handleFacebookLogin;
    export let handleGoogleLogin;
    export let googleClientId;
    export let facebookAppId;
</script>

<div class="">
    <div class="mb-10 text-center logo-font">KOREDOR LOGO HERE</div>
    <div class="flex flex-col items-center mt-12">
        <h1 class="text-2xl font-extrabold xl:text-3xl">Welcome Back!</h1>
        <div class="flex-1 w-full mt-8">
            <div class="max-w-xs mx-auto">
                <input
                    class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    bind:value={email}
                />
                <input
                    class="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    bind:value={password}
                />
                <button
                    on:click={handleLogin}
                    class="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-orange-500 rounded-lg hover:bg-orange-700 focus:shadow-outline focus:outline-none"
                >
                    <svg
                        class="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span class="ml-3"> Sign In </span>
                </button>
            </div>

            <div class="my-12 text-center border-b">
                <div
                    class="inline-block px-8 text-lg font-bold leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white"
                >
                    Or
                </div>
            </div>
            <div
                class="flex flex-col items-center sm:flex-row sm:justify-between sm:items-stretch sm:space-y-0 sm:space-x-0"
            >
                <GoogleAuth {googleClientId} onLogin={handleGoogleLogin} />
                <FacebookAuth {facebookAppId} onLogin={handleFacebookLogin} />
            </div>

            <p class="mt-6 text-xs text-center text-gray-600">
                I agree to abide by Koredor's
                <a href="/" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                </a>
                and its
                <a href="/" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                </a>
            </p>
        </div>
    </div>
</div>

<!-- <div>
    <h1 class="mb-4 text-2xl font-bold">Login</h1>
    <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
        <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="text" bind:value={email} required />
    </div>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
        <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" bind:value={password} required />
    </div>
    <div class="flex items-center justify-between">
        <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button" on:click={handleLogin}>Login</button>
    </div>
    <div class="flex items-center justify-between mt-4">
        <GoogleAuth {googleClientId} onLogin={handleGoogleLogin}/>
        <FacebookAuth {facebookAppId} onLogin={handleFacebookLogin} />
    </div>
</div> -->
