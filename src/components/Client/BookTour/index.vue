<template>
    <div class="container my-4">
        <!--Xe có sẵn -->
        <div class="card ">
            <div class="card-body text-center">
                <h2>ĐẶT TOUR DU LỊCH ĐÀ NẴNG</h2>
                <p>AN NGU SI ÓC CHÓ</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h2>BỘ LỌC TÌM KIẾM</h2>
                <div class="card">
                    <div class="card-body">
                        <h4><b>Ngân Sách</b></h4>
                        <div class="row">
                            <btn class="btn btn-secondary  col-lg-6">Dưới 2 triệu</btn>
                            <btn class="btn btn-secondary col-lg-6">Từ 2-5 triệu</btn>
                            <btn class="btn btn-secondary col-lg-6">Từ 5-10 triệu</btn>
                            <btn class="btn btn-secondary col-lg-6">Từ 10-15 triệu</btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <template v-for="(tour, index) in list_tour" :key="index">
                    <div class="card mb-4 p-3 d-flex flex-row shadow" style="border-radius: 8px;">
                        <!-- Ảnh tour -->
                        <div class="col-md-4 p-0">
                            <img :src="tour.hinh_anh" alt="Ảnh tour" class="img-fluid rounded-start"
                                style="height: 100%; object-fit: cover;" />
                        </div>

                        <!-- Nội dung tour -->
                        <div class="col-md-8 ps-4 d-flex flex-column justify-content-between">
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

                </template>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
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
                {
                    tieu_de: "Tuyết Phong Sơn",
                    ma_tour: "NNHAN288",
                    khoi_hanh: "Đà Nẵng",
                    thoi_gian: "8N7Đ",
                    phuong_tien: "Xe Oto",
                    ngay_khoi_hanh: ["31/07", "07/08", "14/08", "21/08", "28/08"],
                    gia: "19.900.000 ₫",
                    hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Dinh-Quang-Minh2-1540983982.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=uotGyq8jmgDtmqEUWRQLkg"
                },
                {
                    tieu_de: "Vực Ngoại Thiên Ma",
                    ma_tour: "NNHAN288",
                    khoi_hanh: "Đà Nẵng",
                    thoi_gian: "8N7Đ",
                    phuong_tien: "Phi Kiếm",
                    ngay_khoi_hanh: ["31/07"],
                    gia: "79.000.000.000 ₫",
                    hinh_anh: "https://thanhnien.mediacdn.vn/Uploaded/minhhung/2022_08_31/000-32hc83f-249.jpg"
                },
            ],
        }
    },
    mounted() {

    },
    methods: {
    }
}
</script>

<style></style>