import axios from 'axios';



const api2 = axios.create({

  baseURL: 'https://newsapi.org/v2/top-headlines?country=br&language=pt&sortBy=publishedAt&apiKey=27021da241244ac0a7450c9919578a04'
  
  
  });
  
  
  export default api2;
  