import axiom from 'axios';
import config from './config'

export default axiom.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID ' + config.MY_KEY
   }
})