import axios from "axios";
import Environment from "../Environment";

let instance = axios.create({
    baseURL: Environment.USER_URL,
    headers: { "Content-Type": "application/json" },
});

export default class Coments {
    static getComments() {
        return new Promise((resolve) => {
            instance
                .get("/comments")
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    console.log(error, resolve);
                });
        });
    }
}
