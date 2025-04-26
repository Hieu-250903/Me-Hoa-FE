<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH PHIM</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm phim
                    </button>
                </div>
                <div class="row mb-2 mt-2">
                    <div class="col-lg-12">
                        <div class="position-relative search-bar-box input-group" style="width: 100%;">
                            <input type="text" class="form-control search-control" placeholder="Tìm Kiếm?">
                            <span class="position-absolute top-50 search-show translate-middle-y"><i
                                    class='bx bx-search'></i></span>
                            <span class="position-absolute top-50 search-close translate-middle-y"><i
                                    class='bx bx-x'></i></span>
                            <button class="btn btn-primary">Tìm Kiếm</button>
                        </div>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Phim</th>
                                <th class="text-center">Hình Ảnh</th>
                                <th class="text-center">Đạo Diễn</th>
                                <th class="text-center">Ngày Phát Hành</th>
                                <th class="text-center">Thể Loại</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in list_phim" :key="index">
                                <tr class="text-nowrap">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ item.ten_phim }}</td>
                                    <td class="align-middle">
                                        <img :src="item.hinh_anh" alt="Hình Ảnh" style="width: 100px; height: 100px;">
                                    </td>
                                    <td class="align-middle">{{ item.dao_dien }}</td>
                                    <td class="align-middle text-center">{{ item.ngay_phat_hanh }}</td>
                                    <td class="align-middle text-center">{{ item.ten_the_loai }}</td>
                                    <td class="align-middle text-center">
                                        <!-- Ví dụ: 1 = Sắp chiếu, 2 = Đang chiếu, 0 = Ngừng chiếu -->
                                        <button v-if="item.tinh_trang == 0" class="btn btn-danger w-100"
                                            style="color: white;">
                                            Ngừng Chiếu
                                        </button>
                                        <button v-if="item.tinh_trang == 1" class="btn btn-warning w-100"
                                            style="color: white;">
                                            Sắp Chiếu
                                        </button>
                                        <button v-if="item.tinh_trang == 2" class="btn btn-success w-100"
                                            style="color: white;">
                                            Đang Chiếu
                                        </button>

                                    </td>

                                    <td class="align-middle text-center">
                                        <button class="btn btn-info me-2"
                                            @click="Object.assign(obj_phim_chi_tiet, item)" style="color: white;"
                                            data-bs-toggle="modal" data-bs-target="#chiTietModal">
                                            Chi Tiết
                                        </button>
                                        <button class="btn btn-success me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Thêm Mới -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thêm Phim Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tên Phim</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Hình Ảnh</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Đạo Diễn</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Diễn Viên</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Phát Hành</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thể Loại</label>
                            <select class="form-control">
                                <option value="1">Hành Động</option>
                                <option value="2">Viễn Tưởng</option>
                                <option value="3">Tình Cảm</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thời Lượng</label>
                            <input type="number" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Trạng Thái</label>
                            <select class="form-control">
                                <option value="0">Ngừng Chiếu</option>
                                <option value="1">Sắp Chiếu</option>
                                <option value="2">Đang Chiếu</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Mô Tả</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="themNhanVien()">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cập Nhật Thông Tin Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tên Phim</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Hình Ảnh</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Đạo Diễn</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Diễn Viên</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Ngày Phát Hành</label>
                            <input type="date" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thể Loại</label>
                            <select class="form-control">
                                <option value="1">Hành Động</option>
                                <option value="2">Viễn Tưởng</option>
                                <option value="3">Tình Cảm</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thời Lượng</label>
                            <input type="number" class="form-control" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Trạng Thái</label>
                            <select class="form-control">
                                <option value="0">Ngừng Chiếu</option>
                                <option value="1">Sắp Chiếu</option>
                                <option value="2">Đang Chiếu</option>
                            </select>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label class="form-label">Mô Tả</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                        Cập nhật
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Xóa Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa phim
                        <strong>Phim</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaNhanVien()">
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal chi tiết -->
    <div class="modal fade" id="chiTietModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chi Tiết Phim</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 text-center mb-3">
                            <img :src="obj_phim_chi_tiet.hinh_anh" alt="Hình Ảnh" class="img-fluid rounded"
                                style="max-height: 300px;">
                        </div>
                        <div class="col-md-8">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th style="width: 35%">Tên Phim</th>
                                        <td>{{ obj_phim_chi_tiet.ten_phim }}</td>
                                    </tr>
                                    <tr>
                                        <th>Đạo Diễn</th>
                                        <td>{{ obj_phim_chi_tiet.dao_dien }}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày Phát Hành</th>
                                        <td>{{ obj_phim_chi_tiet.ngay_phat_hanh }}</td>
                                    </tr>
                                    <tr>
                                        <th>Thể Loại</th>
                                        <td>{{ obj_phim_chi_tiet.ten_the_loai }}</td>
                                    </tr>
                                    <tr>
                                        <th>Trạng Thái</th>
                                        <td>
                                            <span v-if="obj_phim_chi_tiet.tinh_trang == 0" class="badge bg-danger">Ngừng
                                                Chiếu</span>
                                            <span v-if="obj_phim_chi_tiet.tinh_trang == 1" class="badge bg-warning">Sắp
                                                Chiếu</span>
                                            <span v-if="obj_phim_chi_tiet.tinh_trang == 2" class="badge bg-success">Đang
                                                Chiếu</span>
                                        </td>
                                    </tr>
                                    <tr v-if="obj_phim_chi_tiet.mo_ta">
                                        <th>Mô Tả</th>
                                        <td>{{ obj_phim_chi_tiet.mo_ta }}</td>
                                    </tr>
                                    <tr v-if="obj_phim_chi_tiet.thoi_luong">
                                        <th>Thời Lượng</th>
                                        <td>{{ obj_phim_chi_tiet.thoi_luong }} phút</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_phim: [],
            obj_phim_chi_tiet: {},
        };
    },
    mounted() {
        this.layDataPhim();
    },
    methods: {
        layDataPhim() {
            axios
                .get('http://127.0.0.1:8000/api/admin/phim/get-data')
                .then(response => {
                    this.list_phim = response.data.data;
                })
        },
    },
};
</script>

<style></style>
