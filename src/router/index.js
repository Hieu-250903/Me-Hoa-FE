import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/Test/index.vue')
    },
    {
      path: '/the-loai-phim',
      component: () => import('../components/TheLoaiPhim/index.vue')
    },
    {
      path: '/phong-chieu',
      component: () => import('../components/PhongChieu/index.vue')
    },
    {
      path: '/dich-vu',
      component: () => import('../components/DichVu/index.vue')
    },
    {
      path: '/voucher',
      component: () => import('../components/Voucher/index.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router