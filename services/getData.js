const url = 'http://3.134.99.170:4000//latest'

/*export const getProduct = () => (
    fetch(url, {
      method: 'GET',
    })
  );*/


  import * as base from '../utils/base-service';
  
  const getProduct = () => base.get(url);
  
  export default getProduct;