<script>
    import { onMount } from 'svelte';
    import ProductCard from './ProductCard.svelte';
  import { navigate } from 'svelte-routing';
  
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
    navigate (`/product/${id}`)
  };
  </script>
  
  <div>
    {#if loading}
      <p>Loading...</p>
    {:else if error}
      <p class="text-red-500">{error}</p>
    {:else if products.length === 0}
      <p>No products available.</p>
    {:else}
      <div class="grid-container">
        {#each products as product (product.id)}
          <ProductCard {product} />
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