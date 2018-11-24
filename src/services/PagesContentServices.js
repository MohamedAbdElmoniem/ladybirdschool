import Axios from "axios";

export const PagesContentServices = {
    getHomeContent: function () {
        return Axios.get('http://api.jsonbin.io/b/5bf81aaaaeadd5600f7989a9/2')
    },
    getMethodologyPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bf96221bd6fba76967f509a')
    }

}