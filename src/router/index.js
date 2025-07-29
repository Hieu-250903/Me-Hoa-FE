import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkAdmin from "./checkAdmin.js";
import checkKhachHang from "./checkKhachHang.js";
const routes = [
    {
        path: "/",
        component: () => import("../components/Client/Home/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/dat-tour-du-lich",
        component: () => import("../components/Client/BookTour/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/thue-xe-tu-lai",
        component: () => import("../components/Client/CarRent/index.vue"),
        meta: { layout: "client" },
    },
    {
        path: "/client/quen-mat-khau",
        component: () => import("../components/Client/Auth/ForgotPassword/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/client/dang-nhap",
        component: () => import("../components/Client/Auth/Login/index.vue"),
        meta: { layout: "blank" },
    },
    {
        path: "/client/dang-ky",
        component: () => import("../components/Client/Auth/Register/index.vue"),
        meta: { layout: "blank" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
