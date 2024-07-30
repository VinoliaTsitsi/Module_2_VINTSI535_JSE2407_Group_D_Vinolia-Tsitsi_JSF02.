<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import ProductCard from './ProductCard.svelte';
  import { sorting, filterItem, searchTerm } from '../stores.js';
  import { get } from 'svelte/store';

  let products = [];
  let filteredProducts = [];
  let categories = [];
  let loading = true;
  let error = null;

  const fetchProducts = async () => {
    loading = true;
    error = null;
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      products = data;
      filteredProducts = data;
      categories = [...new Set(data.map(product => product.category))];
      applyFiltersAndSorting();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  };

  const applyFiltersAndSorting = () => {
    let tempProducts = products.filter(product => get(filterItem) === 'All categories' || product.category === get(filterItem));

    if (get(searchTerm)) {
      tempProducts = tempProducts.filter(product =>
        product.title.toLowerCase().includes(get(searchTerm).toLowerCase())
      );
    }

    if (get(sorting) === 'low') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    } else if (get(sorting) === 'high') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    filteredProducts = tempProducts;
  };

  onMount(() => {
    fetchProducts();
  });

  const viewProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
</script>

<div>
  <div class="controls mb-10 flex justify-between items-center mt-8">
    <div class="flex space-x-4">
      <select bind:value={$sorting} on:change={applyFiltersAndSorting} class="p-2 border border-gray-300 rounded">
        <option value="default">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      <select bind:value={$filterItem} on:change={applyFiltersAndSorting} class="p-2 border border-gray-300 rounded">
        <option value="All categories">All categories</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>

    <input type="text" placeholder="Search" bind:value={$searchTerm} on:input={applyFiltersAndSorting} class="p-2 border border-gray-300 rounded-full bg-green-100 placeholder-gray-500 placeholder-opacity-75 search-bar">
  </div>

  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p class="text-red-500">{error}</p>
  {:else if filteredProducts.length === 0}
    <p>No products available.</p>
  {:else}
    <div class="grid-container">
      {#each filteredProducts as product (product.id)}
        <button on:click={() => viewProductDetails(product.id)} class="product-card-button">
          <ProductCard {product} />
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .product-card-button {
    all: unset;
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .product-card-button:hover {
   background-color: azure;
  }

  .product-card-button:focus {
    outline: 2px solid blue; /* Add focus styles for accessibility */
  }

  .search-bar {
    margin-left: auto; /* Move search bar to the right */
  }

  /* Ensure product cards are equal in size */
  .product-card-button {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
