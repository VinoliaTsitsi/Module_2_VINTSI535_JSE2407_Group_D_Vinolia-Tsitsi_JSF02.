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
    <nav class="bg-gray-500 border-gray-200">
        <div role="button" tabindex="0" on:click={goToHome} on:keydown={(e) => e.key === 'Enter' && goToHome()} class="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src="/assets/online-shop.png" class="logo" alt="SwiftCart Logo" />
          <span class="brand-name">SwiftCart</span>
        </div>
      </nav>
</header>

<style>
header {
    background-color: #6b7280;
    padding: 1rem 0;
}

.brand-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff; 
    white-space: nowrap;
}


</style>
