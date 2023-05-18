import client from "../utils/http";

export class LocationService {
    static getLocations() {
        return client.get('/locations')
    }
}