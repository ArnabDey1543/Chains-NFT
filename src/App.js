import "./app.css";
import Layout from "./components/Layout/Layout";
import Lod from "./components/loader/loader";
import { useState, useEffect } from 'react'
import Helmet from "react-helmet";


function App() {

  const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Loading function to load data or 
        // fake it using setTimeout;
        const loadData = async () => {
    
          // Wait for two second
          await new Promise((r) => setTimeout(r, 3000));
    
          // Toggle loading state
          setLoading((loading) => !loading);
        };
          
        loadData();
      }, []);
      if (loading) {
        return (
          <>
          <Helmet>
          <meta name="theme-color" content="black" />
          </Helmet>
              <Lod />
          </>
          );
        }
        else{
          return (
            
          <>
            
            <Helmet>
            <meta name="theme-color" content="#3586ff" />
            </Helmet>
                
                <Layout />
          </>
          );
        }
}

export default App;
