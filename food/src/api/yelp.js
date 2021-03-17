import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer GZGpWYbf0o35HY50R4-FDcLrFBqhK4Li1sYG5vMHX7yVPjXBIlURyE2HytlZoLaajPFgXFyaWuHQ7omNPUQezhOKC3ZAP-YxIOu_qWm4s5gGQxxAsJsPLizg_V1QYHYx'
    }
});