<template>
    <div class="container">
        <template v-for="(tour, index) in Tour" :key="index">


            <h1 class="mt-3 mb-2  text-dark">{{ tour.tieu_de }}</h1>
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-3 p-0">
                            <div class="row mt-2 mb-2">
                                <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/521001398_628101429819637_1695442633335760912_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=zi5eXnrvvzoQ7kNvwHBHtbH&_nc_oc=AdkkC8628rzNAl0Do2WaFl4sZBOei1L4WQkrQPH50_WwfBkDfUIspbI-g_50M_JCt_o&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&oh=03_Q7cD2wFdHLM706OEu8fim9454r1M1MaZOiNri-oWENSjaGpCFg&oe=68B16F94"
                                    class="img-fluid rounded-start" style=" object-fit: cover;" alt="">
                            </div>
                            <div class="row mt-2 mb-2">
                                <img src="https://thuvienanime.net/wp-content/uploads/2024/04/luc-mac-thuvienanime-7.jpg"
                                    class="img-fluid rounded-start" style="height: 100%; object-fit: cover;" alt="">
                            </div>
                            <div class="row mt-2 mb-2">
                                <img src="https://thuvienanime.net/wp-content/uploads/2024/04/luc-mac-thuvienanime-7.jpg"
                                    class="img-fluid rounded-start" style="height: 100%; object-fit: cover;" alt="">
                            </div>
                            <div class="row mt-2 mb-2">
                                <img src="https://thuvienanime.net/wp-content/uploads/2024/04/luc-mac-thuvienanime-7.jpg"
                                    class="img-fluid rounded-start" style="height: 100%; object-fit: cover;" alt="">
                            </div>
                        </div>
                        <div class="col-lg-9 mt-2 mb-2">
                            <img src="https://thuvienanime.net/wp-content/uploads/2024/04/luc-mac-thuvienanime-7.jpg"
                                class="img-fluid rounded-start" style="height: 100%; object-fit: cover;" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mt-2">
                        <div class="card-body">
                            <h4>Giá từ :</h4>
                            <span style="font-size: 15px"><b class="text-danger" style="font-size: 30px">{{ tour.gia }}</b> /Khách</span>
                            <h5 class="mt-2 mb-2">Chọn ngày khởi hành :</h5>
                            <div class="d-flex gap-2 flex-wrap mb-3">
                                <button v-for="(ngay, i) in tour.ngay_khoi_hanh.slice(0, 5)" :key="i"
                                    class="btn btn-outline-danger px-3 py-1 rounded">
                                    {{ ngay }}
                                </button>
                            </div>
                            <h5 class="mt-2 mb-2">Nhập mã giảm giá</h5>
                            <input type="text" class="form-control mt-2 mb-2">
                            <button class="btn btn-primary w-100">Xác Nhận</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card mt-2">
                    <div class="card-body">
                        <b><h2 class="text-center mt-3 mb-2">THÔNG TIN THÊM VỀ CHUYẾN ĐI</h2></b>
                        <div class="row mt-4">
                            <div class="col-lg-4">
                                <i class="fa-solid fa-location-dot fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Điểm tham quan</b>
                                <p class="mb-2" style="font-size:15px">Đa dạng điểm tham quan hấp dẫn để du khách trải nghiệm</p>
                            </div>
                            <div class="col-lg-4">
                                <i class="fa-solid fa-utensils fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Ẩm thực</b>
                                <p class="mb-2" style="font-size:15px">Buffet sáng, Theo thực đơn</p>
                            </div>
                            <div class="col-lg-4">
                                <i class="fa-solid fa-people-group fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Đối tượng thích hợp</b>
                                <p class="mb-2" style="font-size:15px">Cặp đôi, Gia đình nhiều thế hệ,..</p>
                            </div>
                            <div class="col-lg-4">
                                <i class="fa-solid fa-clock fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Thời gian lý tưởng</b>
                                <p class="mb-2" style="font-size:15px">Quanh năm</p>
                            </div>
                            <div class="col-lg-4">
                                <i class="fa-solid fa-car fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Phương tiện</b>
                                <p class="mb-2" style="font-size:15px">Máy bay, Xe du lịch, Tàu hoả</p>
                            </div>
                            <div class="col-lg-4">
                                <i class="fa-solid fa-gift fa-3x mb-2"></i>
                                <br>
                                <b class="mt-2 mb-2" style="font-size:18px" >Khuyến mãi</b>
                                <p class="mb-2" style="font-size:15px">Đã bao gồm ưu đãi trong giá tour</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
 data() {
    return {
        Tour: [
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
            ]
    }
 },
}
</script>
<style></style>