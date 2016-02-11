import request from 'superagent';
const config = require('../config');

export default class API {
    fetchData() {
        return Promise.all([
            this.fetchJSON(config.recentURL),
            this.fetchJSON(config.allTimeURL)
        ]);
    }

    fetchJSON(url) {
        return new Promise(function(resolve, reject) {
            request.get(url, function(err, response) {
                if(err || response.error)
                    return reject(response.error);

                resolve(response.body);
            });
        });
    }
}