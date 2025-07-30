<template>
    <div class="container my-4">
        <!--Xe có sẵn -->
        <div class="card ">
            <div class="card-body ">
                <h2 class="text-center mt-2 mb-3">ĐẶT TOUR DU LỊCH ĐÀ NẴNG</h2>
                <p style="font-size : 18px">Đà Nẵng nằm giữa ba di sản thế giới: cố đô Huế, phố cổ Hội An và thánh địa Mỹ
                    Sơn. Đà Nẵng còn có nhiều danh thắng tuyệt đẹp say lòng du khách như Ngũ Hành Sơn, Bà Nà, bán đảo Sơn
                    Trà, đèo Hải Vân, sông Hàn thơ mộng và cầu quay Sông Hàn – niềm tự hào của thành phố, và biển Mỹ Khê đẹp
                    nhất hành tinh.
                    Đăng ký tour Đà Nẵng cùng Vietravel, Quý khách có thể đến khám phá các điểm đến nổi bật sau: Bà Nà
                    Hills, Cầu Quay Sông Hàn, Ngũ Hành Sơn, Bãi biển Non Nước, Đà Nẵng, Cù Lao Chàm,... Để hiểu hơn về Đà
                    Nẵng, mời Quý khách tham khảo Kinh nghiệm du lịch Đà Nẵng.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <h2>BỘ LỌC TÌM KIẾM</h2>
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5><b>Ngân Sách</b></h5>

                            <span v-if="selected != null" @click="selected = null, timKiem()" class=" btn text-primary"
                                style="font-size: 12px;">Xóa</span>
                        </div>
                        <div class="row">
                            <template v-for="(value, index) in list_ngan_sach " :key="index">
                                <div class="col-lg-6 mt-2">
                                    <button class="btn" :class="selected === index ? 'btn-danger' : 'btn-outline-danger'"
                                        style="width:180px" @click="selected = index, timKiem()">{{ value.ngan_sach
                                        }}</button>
                                </div>
                            </template>
                        </div>

                        <h5 class="mt-4"><b>Khởi Hành</b></h5>

                        <select v-model="selected_khoi_hanh" name="" id="" class="form-control mt-2">
                            <option value="">Chọn địa điểm khởi hành</option>
                            <option value="0">Đà Nẵng</option>
                            <option value="1">Huế</option>
                        </select>
                        <h5 class="mt-4"><b>Ngày đi</b></h5>
                        <input v-model="selected_ngay_di" type="date" class="form-control mt-2" />
                        <h5 class="mt-4"><b>Thời gian</b></h5>
                        <select v-model="selected_thoi_gian" name="" id="" class="form-control mt-2">
                            <option value="">Chọn thời gian</option>
                            <option value="0">Dưới 3 ngày</option>
                            <option value="1">Từ 3-7 ngày</option>
                            <option value="2">Từ 7 ngày trở lên</option>
                        </select>
                        <button class="btn btn-primary text-center w-100 mt-3" @click="timKiem()">Áp dụng</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <template v-for="(tour, index) in list_tour_filtered" :key="index">
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
                                        <p><strong>Thời gian:</strong> {{ tour.thoi_gian }}N{{ tour.thoi_gian - 1 }}Đ</p>
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
                                    <router-link to="/chi-tiet-tour-du-lich">
                                        <button class="btn btn-primary">Xem chi tiết</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
            </div>
        </div>

    </div>
</template>

<!-- <script>
import axios from 'axios'
export default {
    data() {
        return {
      
            selected: null,
            list_ngan_sach: [
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
        timKiem(){

        }
    }
}
</script> -->
<script>
export default {
    data() {
        return {
            selected: null,
            selected_khoi_hanh: '',
            selected_ngay_di: '',
            selected_thoi_gian: '',
            list_ngan_sach: [
                { ngan_sach: "Dưới 2 triệu", min: 0, max: 2000000 },
                { ngan_sach: "Từ 2-5 triệu", min: 2000000, max: 5000000 },
                { ngan_sach: "Từ 5-10 triệu", min: 5000000, max: 10000000 },
                { ngan_sach: "Từ 10 triệu trở lên", min: 10000000, max: 99999999999999999999 },
            ],
            list_tour_full: [],
            list_tour_filtered: []
        }
    },
    mounted() {
        // Gắn dữ liệu ban đầu cho list_tour_full và hiển thị ban đầu
        this.list_tour_full = [
            {
                tieu_de: "Hoa Sơn",
                ma_tour: "NNHAN288",
                khoi_hanh: "Huế",
                thoi_gian: "2",
                phuong_tien: "Xe Oto",
                ngay_khoi_hanh: ["01/08", "07/08"],
                gia: "1.000.000 ₫",
                hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Hoa-Son1-1540983301.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=xNRtGdRWj2pxQkQaKOuU7g"
            },
            {
                tieu_de: "Vạn Lý Trường Thành",
                ma_tour: "NNHAN288",
                khoi_hanh: "Đà Nẵng",
                thoi_gian: "4",
                phuong_tien: "Tàu Hỏa",
                ngay_khoi_hanh: ["07/08", "14/08"],
                gia: "7.000.000 ₫",
                hinh_anh: "https://cdn.tgdd.vn/Files/2021/06/23/1362595/du-lich-trung-quoc-dung-bo-qua-10-dia-diem-noi-tieng-hap-dan-nhat-nay-202201030832031917.jpg"
            },
            {
                tieu_de: "Đỉnh Quang Minh",
                ma_tour: "NNHAN288",
                khoi_hanh: "Huế",
                thoi_gian: "3",
                phuong_tien: "Xe Oto",
                ngay_khoi_hanh: ["10/08", "15/08"],
                gia: "3.500.000 ₫",
                hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Dinh-Quang-Minh1-1540983981.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=bgvdx6MSUHZEXVxfAxUMZg"
            },
            {
                tieu_de: "Tuyết Phong Sơn",
                ma_tour: "NNHAN288",
                khoi_hanh: "Đà Nẵng",
                thoi_gian: "8",
                phuong_tien: "Xe Oto",
                ngay_khoi_hanh: ["14/08", "21/08", "28/08"],
                gia: "19.900.000 ₫",
                hinh_anh: "https://i1-dulich.vnecdn.net/2018/10/31/Dinh-Quang-Minh2-1540983982.jpg?w=1200&h=0&q=100&dpr=2&fit=crop&s=uotGyq8jmgDtmqEUWRQLkg"
            },
            {
                tieu_de: "Vực Ngoại Thiên Ma",
                ma_tour: "NNHAN288",
                khoi_hanh: "Huế",
                thoi_gian: "10",
                phuong_tien: "Phi Kiếm",
                ngay_khoi_hanh: ["31/07", "05/08"],
                gia: "79.000.000.000 ₫",
                hinh_anh: "https://thanhnien.mediacdn.vn/Uploaded/minhhung/2022_08_31/000-32hc83f-249.jpg"
            }
        ];

        this.list_tour_filtered = this.list_tour_full;
    },
    methods: {
        timKiem() {
            let filtered = this.list_tour_full;

            // Lọc theo Ngân sách
            if (this.selected !== null) {
                // Lấy đối tượng ngân sách được chọn từ danh sách
                const mucNganSach = this.list_ngan_sach[this.selected];

                // Lọc danh sách tour theo khoảng giá từ mucNganSach.min đến mucNganSach.max
                filtered = filtered.filter(tour => {
                    // tour.gia là chuỗi như "19.900.000 ₫", ta cần chuyển về số: 19900000
                    const giaTour = Number(tour.gia.replace(/[^0-9]/g, ''));

                    // Kiểm tra xem giá tour có nằm trong khoảng min-max đã chọn không
                    return giaTour >= mucNganSach.min && giaTour <= mucNganSach.max;
                });
            }

            // Lọc theo khởi hành
            if (this.selected_khoi_hanh) {
                const khoiHanhStr = this.selected_khoi_hanh == 0 ? "Đà Nẵng" : "Huế";
                filtered = filtered.filter(tour => tour.khoi_hanh === khoiHanhStr);
            }

            // Lọc theo ngày đi
            if (this.selected_ngay_di) {
                // Format ngày về dạng dd/mm để so sánh
                const date = new Date(this.selected_ngay_di);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const ngayDiFormatted = `${day}/${month}`;  // VD: "07/08"

                // Lọc các tour có ngày khởi hành chứa ngày đã chọn
                filtered = filtered.filter(tour => tour.ngay_khoi_hanh.includes(ngayDiFormatted));
            }


            // Lọc theo thời gian tour
            if (this.selected_thoi_gian) {
                const thoiGian = this.selected_thoi_gian;
                filtered = filtered.filter(tour => {
                    const soNgay = parseInt(tour.thoi_gian);
                    if (thoiGian == 0) return soNgay < 3;
                    if (thoiGian == 1) return soNgay >= 3 && soNgay <= 7;
                    if (thoiGian == 2) return soNgay >= 7;
                    return true;
                });
            }

            this.list_tour_filtered = filtered;
        }
    }
}
</script>
<style></style>