import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/home';
import Friends from '@/pages/friends';
import About from '@/pages/about';
import MentalHealthMatters from '@/pages/mental-health-matters';
import Join from '@/pages/join';
import Press from '@/pages/press';
import Contact from '@/pages/contact';

const queryClient = new QueryClient();

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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
