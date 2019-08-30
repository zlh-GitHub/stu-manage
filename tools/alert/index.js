import tip from "./index.vue"
import Vue from "vue"

const Tip = Vue.extend(tip);

export default function createTip({ duration = 2000, msg, type }) {
    const app = new Tip({
        el: document.createElement("div"),
        data: {
            showTip: true,
            exits: true,
            msg,
            type
        }
    })

    document.body.appendChild(app.$el);
    setTimeout(() => {
        app.showTip = false;
    }, duration)
    setTimeout(() => {
        app.exits = false;
    }, duration + 700)
}