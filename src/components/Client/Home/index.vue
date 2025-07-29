<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://kilala.vn/data/emagazine/images/vol45/japan-cars/1900x800.jpg" class="d-block w-100"
                    alt="Banner 1">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://kilala.vn/data/emagazine/images/vol45/japan-cars/1900x800.jpg" class="d-block w-100"
                    alt="Banner 2">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://kilala.vn/data/emagazine/images/vol45/japan-cars/1900x800.jpg" class="d-block w-100"
                    alt="Banner 3">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container my-4">
        <!--Xe có sẵn -->

        <h3 class="text-center mb-4">THUÊ XE TỰ LÁI</h3>
        <div class="row">
            <template v-for="(value, index) in list_xe " :key="index">
                <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="https://www.bonboncar.vn/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbonboncar-cms%2Fsmall_z5931051391049_829b1535afd2b8a3c195f5e3324381b6_copy_9cfcd23dea%2Fsmall_z5931051391049_829b1535afd2b8a3c195f5e3324381b6_copy_9cfcd23dea.jpg&w=768&q=80"
                            alt="">
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
                            <div class="d-flex justify-content-between mt-3">
                                <p style="font-size:20px"><b class="text-success align-items-center">{{ value.gia_thue
                                }}</b>/ngày</p>
                                <div>
                                    <button class="btn btn-dark text-light">Thuê Ngay</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </template>
        </div>
        <div class="text-center mb-4">
            <router-link to="/thue-xe-tu-lai">
                <button class="btn btn-outline-danger rounded-pill">Xem thêm xe</button>
            </router-link>
        </div>


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
        <h3 class="text-center mb-4">ĐẶT TOUR DU LỊCH</h3>
        <div class="row">

            <template v-for="(tour, index) in list_tour" :key="index">
                <div class="col-lg-4">
                    <div class="card mb-4 p-3 shadow" style="border-radius: 8px;">
                        <!-- Ảnh tour -->
                        <div class="p-0">
                            <img :src="tour.hinh_anh" alt="Ảnh tour" class="img-fluid rounded-start"
                                style="height: 300px; object-fit: cover;" />
                        </div>

                        <!-- Nội dung tour -->
                        <div class="ps-4 d-flex flex-column justify-content-between mt-2">
                            <div>
                                <h5 class="fw-bold text-dark mb-2">
                                    {{ tour.tieu_de }}
                                </h5>

                                <div class="row">
                                    <div class="col-lg-6 mb-2 text-muted">
                                        <p><strong>Mã tour:</strong> {{ tour.ma_tour }}</p>
                                        <p><strong>Khởi hành:</strong> {{ tour.khoi_hanh }}</p>
                                    </div>
                                    <div class="col-lg-6 mb-2 text-muted">
                                        <p><strong>Thời gian:</strong> {{ tour.thoi_gian }}</p>
                                        <p><strong>Phương tiện:</strong> {{ tour.phuong_tien }}</p>
                                    </div>

                                </div>
                                <!-- Ngày khởi hành -->
                                <div class="d-flex gap-2 flex-wrap mb-3">
                                    <span v-for="(ngay, i) in tour.ngay_khoi_hanh.slice(0, 5)" :key="i"
                                        class="border px-3 py-1 rounded text-danger border-danger">
                                        {{ ngay }}
                                    </span>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p class="text-danger fs-4 fw-bold mb-2">
                                    Giá từ: {{ tour.gia }}
                                </p>
                                <div>
                                    <button class="btn btn-primary">Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

        </div>
        <div class="text-center mb-4">
            <router-link to="/dat-tour-du-lich">
                <button class="btn btn-outline-danger rounded-pill">Xem toàn bộ tour du lịch</button>
            </router-link>
        </div>



        <!-- Về chúng tôi -->
        <!-- Về chúng tôi -->
        <!-- Về chúng tôi -->
        <div class="card p-5 border-0 shadow-sm rounded-4" style="background-color: #000000;">
            <h3 class="text-center text-uppercase fw-bold mb-5 text-light">Dịch vụ du lịch & thuê xe tự lái <span class="text-danger">ME</span>HOA</h3>
            <div class="row align-items-center">
                <!-- Nội dung bên trái -->
                <div class="col-md-7">
                    <h4 class="fw-bold mb-3">
                        <span class="text-danger">Du lịch tiện lợi</span>
                        <span class="text-primary">– di chuyển chủ động</span>
                        <span class="text-light">– khám phá thoải mái</span>
                    </h4>
                    <p class="text-light fs-5 mb-4">
                        MEHOA là đơn vị hàng đầu tại Đà Nẵng chuyên cung cấp <strong>tour du lịch trọn gói</strong> và
                        <strong>dịch vụ thuê xe ô tô tự lái</strong>,
                        đáp ứng nhu cầu di chuyển và khám phá linh hoạt của mọi khách hàng.
                    </p>
                    <ul class="list-unstyled fs-5">
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Đa dạng tour khám phá Đà Nẵng, Hội An, Bà Nà Hills, Huế...</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Cho thuê xe tự lái 4–7 chỗ đời mới, bảo hiểm đầy đủ</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Giá thuê xe tiết kiệm – đặt xe nhanh – thủ tục đơn giản</span>
                        </li>
                        <li class="mb-3 d-flex align-items-start">
                            <i class="fa fa-check-circle text-success me-2 mt-1"></i>
                            <span class="text-light">Hỗ trợ khách du lịch, gia đình, công tác và sự kiện</span>
                        </li>
                    </ul>
                </div>

                <!-- Ảnh bên phải -->
                <div class="col-md-5 text-center">
                    <img src="https://media.baamboozle.com/uploads/images/55836/1682378705_349492_import-url.png"
                        alt="Dịch vụ MEHOA" class="img-fluid rounded-3 shadow-sm">
                </div>
            </div>
        </div>






        <h3 class="text-center mb-4 fw-bold">Khách hàng nói gì về MEHOA?</h3>
        <div class="row justify-content-center">
            <!-- Feedback 1 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #f2f6ff;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-dark">Nguyễn Văn A</div>
                                <div class="text-muted" style="font-size: 0.95em;">Khách thuê xe tự lái</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div class="fst-italic text-dark" style="font-size: 1em;">
                            "Dịch vụ thuê xe tại MEHOA rất chuyên nghiệp, xe mới và đầy đủ tiện nghi. Tôi luôn tin tưởng khi
                            cần di chuyển tự túc ở Đà Nẵng."
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feedback 2 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #f2f6ff;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-dark">Trần Thị B</div>
                                <div class="text-muted" style="font-size: 0.95em;">Du khách TP.HCM</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div class="fst-italic text-dark" style="font-size: 1em;">
                            "Tôi đặt tour Bà Nà Hills qua MEHOA, hướng dẫn viên thân thiện, dịch vụ trọn gói, không phải lo
                            gì cả. Rất đáng giá!"
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feedback 3 -->
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm" style="background-color: #f2f6ff;">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar"
                                class="rounded-circle me-3" width="48" height="48">
                            <div>
                                <div class="fw-bold text-dark">Lê Văn C</div>
                                <div class="text-muted" style="font-size: 0.95em;">Khách doanh nhân</div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <span class="text-warning">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <div class="fst-italic text-dark" style="font-size: 1em;">
                            "Tôi đã nhiều lần thuê xe từ MEHOA cho chuyến công tác tại Đà Nẵng. Giá hợp lý, thủ tục nhanh và
                            xe rất mới."
                        </div>
                    </div>
                </div>
            </div>
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
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Toyota" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Hyundai" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Kia" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mazda" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Honda" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "VinFast" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mercedes-Benz" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "BMW" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Mitsubishi" },
                { logo: "https://pngdownload.io/wp-content/uploads/2023/12/BMW-Logo-emblem-of-Bayerische-Motoren-Werke-AG-transparent-png-jpg.webp", ten_hang: "Ford" }
            ],
            list_tour: [
                {
                    tieu_de: "Hoa Sơn",
                    ma_tour: "NNHAN288",
                    khoi_hanh: "Đà Nẵng",
                    thoi_gian: "8N7Đ",
                    phuong_tien: "Xe Oto",
                    ngay_khoi_hanh: ["31/07", "07/08", "14/08", "21/08", "28/08"],
                    gia: "19.900.000 ₫",
                    hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Hoa-Son1-1540983301.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=xNRtGdRWj2pxQkQaKOuU7g"
                },
                {
                    tieu_de: "Vạn Lý Trường Thành",
                    ma_tour: "NNHAN288",
                    khoi_hanh: "Đà Nẵng",
                    thoi_gian: "8N7Đ",
                    phuong_tien: "Xe Oto",
                    ngay_khoi_hanh: ["31/07", "07/08", "14/08", "21/08", "28/08"],
                    gia: "19.900.000 ₫",
                    hinh_anh: "https://cdn.tgdd.vn/Files/2021/06/23/1362595/du-lich-trung-quoc-dung-bo-qua-10-dia-diem-noi-tieng-hap-dan-nhat-nay-202201030832031917.jpg"
                },
                {
                    tieu_de: "Đỉnh Quang Minh",
                    ma_tour: "NNHAN288",
                    khoi_hanh: "Đà Nẵng",
                    thoi_gian: "8N7Đ",
                    phuong_tien: "Xe Oto",
                    ngay_khoi_hanh: ["31/07", "07/08", "14/08", "21/08", "28/08"],
                    gia: "19.900.000 ₫",
                    hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Dinh-Quang-Minh1-1540983981.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=bgvdx6MSUHZEXVxfAxUMZg"
                },
            ],
            list_xe: [
                {
                    ten_xe: 'Lamborghini Huracán',
                    vi_tri_thue_xe: 'Quận 1, TP.HCM',
                    gia_thue: '3.000.000đ',
                    so_cho: '2 chỗ',
                    loai_xe: 'Xe xăng',
                    tinh_trang: '1'
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
}</style>