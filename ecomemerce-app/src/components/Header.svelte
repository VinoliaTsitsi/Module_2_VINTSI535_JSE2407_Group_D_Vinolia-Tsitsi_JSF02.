<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';

    const goToHome = () => {
        navigate('/');
    };

    onMount(() => {
        // Any logic needed on mount
    });
</script>

<header>
    <nav class="nav">
        <div class="container">
            <div class="brand" on:click={goToHome}>
                <img src="/assets/online-shop.png" class="logo" alt="SwiftCart Logo" />
                <span class="brand-name">SwiftCart</span>
            </div>
        </div>
    </nav>
</header>

<style>
    header {
        /* Any additional styles for the header */
    }

    .nav {
        background-color: #6b7280; /* Gray-500 */
        border-color: #e5e7eb; /* Gray-200 */
    }

    .container {
        max-width: 1280px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1rem;
    }

    .brand {
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
    }

    .logo {
        height: 2rem; /* h-8 */
        margin-right: 0.75rem; /* Space between logo and text */
    }

    .brand-name {
        font-size: 1.5rem; /* text-2xl */
        font-weight: 600; /* font-semibold */
        color: #ffffff; /* text-white */
        white-space: nowrap;
    }
</style>
