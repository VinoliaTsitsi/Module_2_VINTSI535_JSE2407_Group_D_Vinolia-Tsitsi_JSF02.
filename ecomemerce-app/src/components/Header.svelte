<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';

    let navbarDropdown;

    const toggleNavbar = () => {
        if (navbarDropdown.classList.contains('hidden')) {
            navbarDropdown.classList.remove('hidden');
        } else {
            navbarDropdown.classList.add('hidden');
        }
    };

    onMount(() => {});
</script>

<header class="header">
    <nav class="nav">
        <div class="container">
            <button on:click={() => navigate('/')} class="brand">
                <img src="/online-shop.png" class="logo" alt="Flowbite Logo" />
                <span class="brand-name">SwiftCart</span>
            </button>
         
        </div>
    </nav>
</header>

<style>
.header {
    position: sticky;
    top: 0;
    z-index: 50;
}

.nav {
    background-color: #6b7280;
    border-color: #d1d5db;
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


.logo {
    height: 2rem;
}

.brand-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
}
</style>
