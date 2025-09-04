import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/landing";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route component={NotFound} />
      <Toaster />
    </Switch>
  );
}

function App() {
  return (
        <Router />
  );
}

export default App;
