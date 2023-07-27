import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Posts } from './components/Posts';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Ipsum</h1>
        <Posts/>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
