import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <div className="container-md">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/projects/:id' element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
    </>
  );
}

export default App;
