import React from 'react';
import { Router as WouterRouter, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/layout/Layout';
import { CartProvider } from './lib/shop/cartContext';
import { CartDrawer } from './components/shop/CartDrawer';
import { Home } from './pages/home';
import { Friends } from './pages/friends';
import { About } from './pages/about';
import { MentalHealthMatters } from './pages/mental-health-matters';
import { Join } from './pages/join';
import { Press } from './pages/press';
import { Contact } from './pages/contact';
import { Shop } from './pages/shop';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-5xl font-bold text-primary mb-4">Oh no!</h1>
      <p className="text-xl text-muted-foreground mb-8">We couldn't find this part of the garden.</p>
      <a href="/" className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-white font-bold hover:bg-secondary/90 transition-transform hover:scale-105">
        Back to the Garden
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/friends" component={Friends} />
      <Route path="/about" component={About} />
      <Route path="/mental-health-matters" component={MentalHealthMatters} />
      <Route path="/join" component={Join} />
      <Route path="/press" component={Press} />
      <Route path="/contact" component={Contact} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <CartProvider>
          <Layout>
            <Router />
          </Layout>
          <CartDrawer />
        </CartProvider>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
