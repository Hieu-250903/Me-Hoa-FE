<template>
    <div class="container my-4">
        <!--Xe có sẵn -->
        <div class="card ">
            <div class="card-body ">
                <h2 class="text-center mt-2 mb-3">ĐẶT TOUR DU LỊCH ĐÀ NẴNG</h2>
                <p style="font-size : 18px">Đà Nẵng nằm giữa ba di sản thế giới: cố đô Huế, phố cổ Hội An và thánh địa Mỹ Sơn. Đà Nẵng còn có nhiều danh thắng tuyệt đẹp say lòng du khách như Ngũ Hành Sơn, Bà Nà, bán đảo Sơn Trà, đèo Hải Vân, sông Hàn thơ mộng và cầu quay Sông Hàn – niềm tự hào của thành phố, và biển Mỹ Khê đẹp nhất hành tinh.
Đăng ký tour Đà Nẵng cùng Vietravel, Quý khách có thể đến khám phá các điểm đến nổi bật sau: Bà Nà Hills, Cầu Quay Sông Hàn, Ngũ Hành Sơn, Bãi biển Non Nước, Đà Nẵng, Cù Lao Chàm,... Để hiểu hơn về Đà Nẵng, mời Quý khách tham khảo Kinh nghiệm du lịch Đà Nẵng.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h2>BỘ LỌC TÌM KIẾM</h2>
                <div class="card">
                    <div class="card-body">
                        <h5><b>Ngân Sách</b></h5>
                        <div class="row">
                            <template v-for="(value, index) in list_ngan_sach " :key="index">
                            <div class="col-lg-6 mt-2">
                                <btn @click="value_ngan_sach = 1" class="btn btn-outline-danger" style="width:180px">{{ value.ngan_sach }}</btn>
                            </div>
                        </template>
                        </div>
                        <h5 class="mt-4"><b>Khởi Hành</b></h5>
                        <select name="" id="" class="form-control mt-2">
                            <option value="">Chọn địa điểm khởi hành</option>
                            <option value="0">Đà Nẵng</option>
                            <option value="1">Huế</option>
                        </select>
                        <h5 class="mt-4"><b>Ngày đi</b></h5>
                        <input type="date" class="form-control mt-2" />
                        <h5 class="mt-4"><b>Thời gian</b></h5>
                        <select name="" id="" class="form-control mt-2">
                            <option value="">Chọn thời gian</option>
                            <option value="0">Dưới 3 ngày</option>
                            <option value="0">Từ 3-5 ngày</option>
                            <option value="0">Từ 5-7 ngày</option>
                        </select>
                        <button class="btn btn-primary text-center w-100 mt-3">Áp dụng</button>
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
            list_ngan_sach:[
            {
                ngan_sach: "Dưới 2 triệu"
            },
            {
                ngan_sach: "Từ 2-5 triệu"
            },
            {
                ngan_sach: "Từ 5-10 triệu"
            },
            {
                ngan_sach: "Từ 10 triệu trở lên"
            },
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