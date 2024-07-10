<script>
    export let firstName = "";
    export let lastName = "";
    export let email = "";
    export let password = "";
    export let mobileNumber = "";
    export let handleRegister;
</script>

<div>
    <div class="mb-10 text-center logo-font">KOREDOR LOGO HERE</div>
    <h1 class="mb-10 text-2xl font-extrabold xl:text-3xl">Register</h1>
    <div class="mb-4">
        <input
            placeholder="First Name"
            class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
            id="firstName"
            type="text"
            bind:value={firstName}
            required
        />
    </div>
    <div class="mb-4">
        <input
            placeholder="Last Name"
            class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
            id="lastName"
            type="text"
            bind:value={lastName}
            required
        />
    </div>
    <div class="mb-4">
        <input
            placeholder="Email"
            class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
            id="email"
            type="email"
            bind:value={email}
            required
        />
    </div>
    <div class="mb-4">
        <input
            placeholder="Password"
            class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
            id="password"
            type="password"
            bind:value={password}
            required
        />
    </div>
    <div class="mb-6">
        <input
            placeholder="Mobile"
            class="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
            id="mobileNumber"
            type="tel"
            bind:value={mobileNumber}
            required
        />
    </div>

    <button
        on:click={handleRegister}
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
        <span class="ml-3">Register</span>
    </button>
</div>
