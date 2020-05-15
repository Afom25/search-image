import axios from 'axios' ;


export default axios.create ({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization :'Client-ID vHbCpYg_F3ipNXlWG1jPv9yn2vvvbKHd_7lz4U4HWRQ'
      }
});
