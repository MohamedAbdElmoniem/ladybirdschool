import Axios from 'axios';

export function getImagePaths() {
    return Axios.get('https://api.jsonbin.io/b/5c00625590a73066ac17a106')
}