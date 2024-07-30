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
            <button
                on:click={toggleNavbar}
                type="button"
                class="menu-toggle"
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg class="menu-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div bind:this={navbarDropdown} class="dropdown hidden" id="navbar-dropdown">
                <ul class="menu">
                    <li>
                        <a href="Wishlist" class="menu-item">Wishlist</a>
                    </li>
                    <li class="menu-item-notification">
                        <div class="notification">2</div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="cart-icon"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </li>
                    <li>
                        <a href="Cart" class="menu-item menu-item-cart">Cart</a>
                    </li>
                    <li>
                        <a href="/login" class="menu-item">Login</a>
                    </li>
                </ul>
            </div>
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

.brand {
    display: flex;
    align-items: center;
    space-between: 0.75rem;
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

.menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    color: #ffffff;
    border-radius: 0.5rem;
    background-color: #6b7280;
}

.menu-toggle:hover {
    background-color: #f3f4f6;
}

.menu-toggle:focus {
    outline: none;
    ring: 2px;
    ring-color: #d1d5db;
}

.menu-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.hidden {
    display: none;
}

.dropdown {
    width: 100%;
    display: block;
}

.menu {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background-color: #6b7280;
}

.menu-item {
    padding: 0.5rem 1rem;
    color: #ffffff;
    border-radius: 0.5rem;
}

.menu-item:hover {
    background-color: #f3f4f6;
    color: #1e40af;
}

.menu-item-notification {
    display: none;
}

.notification {
    position: absolute;
    top: -1rem;
    left: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    background-color: #ef4444;
    color: #ffffff;
    border-radius: 50%;
    padding: 0.75rem;
    font-size: 0.75rem;
}

.cart-icon {
    height: 1.5rem;
    width: 1.5rem;
    stroke: #ffffff;
    cursor: pointer;
}

@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }

    .dropdown {
        display: flex;
        width: auto;
    }

    .menu {
        flex-direction: row;
        padding: 0;
        margin-top: 0;
        border: none;
        background-color: transparent;
    }

    .menu-item {
        padding: 0.5rem 0;
    }

    .menu-item-notification {
        display: block;
        position: relative;
    }

    .menu-item-cart {
        display: none;
    }
}

@media (min-width: 1024px) {
    .menu-item-cart {
        display: none;
    }
}
</style>
