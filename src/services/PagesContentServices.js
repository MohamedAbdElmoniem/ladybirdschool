import Axios from "axios";

export const PagesContentServices = {
    getHomeContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bf81aaaaeadd5600f7989a9/2')
    },
    getMethodologyPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bf96221bd6fba76967f509a')
    },
    getStaffPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bf97c9a82eab4765e8139d5')
    },
    getAdmissionPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bf97d58bd6fba76967f5aa9/2')
    },
    getSafetyAndSecurityPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bfef56899d3ae6554926334')
    },
    getHealthPageContent: function () {
        return Axios.get('https://api.jsonbin.io/b/5bfefcd690a73066ac16fd69')
    },
    getProgramsAndEventsPageContent: function () {
        return Axios.get('')
    }
}