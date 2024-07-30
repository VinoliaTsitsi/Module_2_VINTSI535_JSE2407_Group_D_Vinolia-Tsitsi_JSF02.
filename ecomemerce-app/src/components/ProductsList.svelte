<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import ProductCard from './ProductCard.svelte';

  let products = [];
  let filteredProducts = [];
  let categories = [];
  let loading = true;
  let error = null;

  let sorting = 'default';
  let filterItem = 'All categories';
  let searchTerm = '';

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
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  };

  const sortProducts = () => {
    if (sorting === 'low') {
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sorting === 'high') {
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else {
      filteredProducts = products;
    }
  };

  const filterProducts = () => {
    filteredProducts = products.filter(product => filterItem === 'All categories' || product.category === filterItem);
    sortProducts();
  };

  const searchProducts = () => {
    filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filterProducts();
  };

  onMount(() => {
    fetchProducts();
  });

  const viewProductDetails = (id) => {
    navigate(`/product/${id}`);
  };
</script>

<div>
  <div class="mb-10 flex justify-between items-center mt-8">
    <div class="flex space-x-4">
      <select bind:value={sorting} on:change={sortProducts} class="p-2 border border-gray-300 rounded">
        <option value="default">Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      <select bind:value={filterItem} on:change={filterProducts} class="p-2 border border-gray-300 rounded">
        <option value="All categories">All categories</option>
        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>
    </div>

    <input type="text" placeholder="Search" bind:value={searchTerm} on:input={searchProducts} class="p-2 border border-gray-300 rounded-full bg-green-100 placeholder-gray-500 placeholder-opacity-75">
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
    div {
      margin-top: 1rem;
    }
  
    .grid-container {
     display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }
  </style>  