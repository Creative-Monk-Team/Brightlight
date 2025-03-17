// lib/fetchSeoData.js
export async function fetchSeoData(endpoint) {
    try {
      const res = await fetch(`https://brightlight-node.onrender.com/${endpoint}`);
      const data = await res.json();
  
      return {
        props: {
          metaData: data.length > 0 ? data[0] : null,
        },
      };
    } catch (error) {
      console.error(`Error fetching SEO metadata from ${endpoint}:`, error);
      return {
        props: {
          metaData: null,
        },
      };
    }
  }
  