import axiom from 'axios';

export default axiom.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID YOUR_KEY'
   }
})