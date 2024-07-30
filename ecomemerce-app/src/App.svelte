<script>
  import Header from './components/Header.svelte';
  import ProductList from "./components/ProductsList.svelte";
  import ProductDetail from './components/ProductCard.svelte';
  import { Router, Route } from 'svelte-routing';
  import ProductDetails from './components/ProductDetails.svelte';
  //import ProductDetail from './routes/[id].svelte';
</script>

<main>
  <Header />
  <Router>
    <Route path="/" component={ProductList} />
    <Route path= "product/:id" component={ProductDetails} />
    </Router>
  
</main>

<style>
  main {
    padding: 1rem;
    background-color: #ebf8ff;
  }
</style>
