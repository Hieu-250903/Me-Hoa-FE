<template>
    

    <div class="container my-4">
        <!-- CHỌN XE THEO HÃNG -->
        <h3 class="text-center mb-4">CHỌN XE TỰ LÁI THEO HÃNG</h3>
        <div class="hang-slider-wrapper overflow-hidden mb-5">
            <div ref="hangSlider" class="hang-slider d-flex">
                <div v-for="hang in list_hang" :key="hang.ten_hang" class="hang-item text-center mx-2">
                    <img v-bind:src="hang.logo" class="w-50">
                    <strong>{{ hang.ten_hang }}</strong>
                </div>
            </div>

            <!-- Nút trượt trái -->
            <button class="btn-slide left" @click="slideHang('left')">
                <i class="fa-solid fa-angle-left"></i>
            </button>

            <!-- Nút trượt phải -->
            <button class="btn-slide right" @click="slideHang('right')">
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
        <!--Xe có sẵn -->
        
            <h3 class="text-center mb-4">THUÊ XE TỰ LÁI</h3>
            <div class="row">
                <template v-for="(value, index) in list_xe " :key="index">
                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img src="https://www.bonboncar.vn/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbonboncar-cms%2Fsmall_z5931051391049_829b1535afd2b8a3c195f5e3324381b6_copy_9cfcd23dea%2Fsmall_z5931051391049_829b1535afd2b8a3c195f5e3324381b6_copy_9cfcd23dea.jpg&w=768&q=80"
                                alt="" >
                            <div class="card-body">
                                <b>
                                    <h5>{{ value.ten_xe }}</h5>
                                </b>
                                <div class="d-flex justify-content-between">
                                    <p>{{ value.vi_tri_thue_xe }}</p>
                                    
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="badge bg-info text-dark">{{ value.so_cho }}</span>
                                    <span class="badge bg-info text-dark">Số tự động</span>
                                    <span class="badge bg-info text-dark">{{ value.loai_xe }}</span>

                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <p style="font-size:15px"><b class="text-success align-items-center">{{ value.gia_thue }}</b>/ngày</p>
                                    <button class="btn btn-dark text-light">Thuê Ngay</button>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </template>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_phim: [],
            list_bv: [],
            list_hang: [
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Toyota" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Hyundai" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Kia" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mazda" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Honda" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "VinFast" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mercedes-Benz" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "BMW" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mitsubishi" },
                { logo:"https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Ford" }
            ],

            list_xe: [
                {
                    ten_xe: 'Lamborghini Huracán',
                    vi_tri_thue_xe: 'Quận 1, TP.HCM',
                    gia_thue: '3.000.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng',
                    tinh_trang : '1'
                },
                {
                    ten_xe: 'Ferrari 488 GTB',
                    vi_tri_thue_xe: 'Quận 3, TP.HCM',
                    gia_thue: '2.800.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng'
                },
                {
                    ten_xe: 'Tesla Model S',
                    vi_tri_thue_xe: 'Quận 5, TP.HCM',
                    gia_thue: '2.500.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
                {
                    ten_xe: 'VinFast VF8',
                    vi_tri_thue_xe: 'Bình Thạnh, TP.HCM',
                    gia_thue: '1.200.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
                {
                    ten_xe: 'Lamborghini Huracán',
                    vi_tri_thue_xe: 'Quận 1, TP.HCM',
                    gia_thue: '3.000.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng',
                    tinh_trang : '1'
                },
                {
                    ten_xe: 'Ferrari 488 GTB',
                    vi_tri_thue_xe: 'Quận 3, TP.HCM',
                    gia_thue: '2.800.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng'
                },
                {
                    ten_xe: 'Tesla Model S',
                    vi_tri_thue_xe: 'Quận 5, TP.HCM',
                    gia_thue: '2.500.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
                {
                    ten_xe: 'VinFast VF8',
                    vi_tri_thue_xe: 'Bình Thạnh, TP.HCM',
                    gia_thue: '1.200.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },{
                    ten_xe: 'Lamborghini Huracán',
                    vi_tri_thue_xe: 'Quận 1, TP.HCM',
                    gia_thue: '3.000.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng',
                    tinh_trang : '1'
                },
                {
                    ten_xe: 'Ferrari 488 GTB',
                    vi_tri_thue_xe: 'Quận 3, TP.HCM',
                    gia_thue: '2.800.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng'
                },
                {
                    ten_xe: 'Tesla Model S',
                    vi_tri_thue_xe: 'Quận 5, TP.HCM',
                    gia_thue: '2.500.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
                {
                    ten_xe: 'VinFast VF8',
                    vi_tri_thue_xe: 'Bình Thạnh, TP.HCM',
                    gia_thue: '1.200.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },{
                    ten_xe: 'Lamborghini Huracán',
                    vi_tri_thue_xe: 'Quận 1, TP.HCM',
                    gia_thue: '3.000.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng',
                    tinh_trang : '1'
                },
                {
                    ten_xe: 'Ferrari 488 GTB',
                    vi_tri_thue_xe: 'Quận 3, TP.HCM',
                    gia_thue: '2.800.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng'
                },
                {
                    ten_xe: 'Tesla Model S',
                    vi_tri_thue_xe: 'Quận 5, TP.HCM',
                    gia_thue: '2.500.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
                {
                    ten_xe: 'VinFast VF8',
                    vi_tri_thue_xe: 'Bình Thạnh, TP.HCM',
                    gia_thue: '1.200.000đ',
                    so_cho: '5 chỗ',
                    loai_xe: 'Xe điện'
                },
            ]
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {

        slideHang(direction) {
            const slider = this.$refs.hangSlider;
            const scrollAmount = 200;
            if (direction === 'left') {
                slider.scrollLeft -= scrollAmount;
            } else {
                slider.scrollLeft += scrollAmount;
            }

        },

        scrollLeft() {
            this.$refs.hangSlider.scrollLeft -= 200;
        },
        scrollRight() {
            this.$refs.hangSlider.scrollLeft += 200;
        },


        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/client/home-page')
                .then((res) => {
                    this.list_phim = res.data.data_phim;
                    this.list_bv = res.data.data_bv;
                })
        }
    }
}
</script>

<style>
.hang-slider-wrapper {
    position: relative;
    overflow-x: hidden;
    padding: 10px 0;
}

.hang-slider {
    scroll-behavior: smooth;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    /* Firefox */
    padding: 0 40px;
}

.hang-slider::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}

.hang-item {
    flex: 0 0 auto;
    width: 120px;
    height: 100px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hang-logo {
    height: 40px;
    margin-bottom: 8px;
    background: #eee;
    width: 40px;
}

.btn-slide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.btn-slide.left {
    left: 0;
}

.btn-slide.right {
    right: 0;
}
</style>