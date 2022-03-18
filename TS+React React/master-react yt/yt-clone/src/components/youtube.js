import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyAyw1pLQnMawz1HGE7_wkvVb5fpSAxP1IY'
    }
})