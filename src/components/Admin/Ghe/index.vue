<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <h4 class="mt-2"><b>THÊM GHẾ MỚI</b></h4>
                </div>
                <div class="card-body">
                    <div class="col-md-12 mb-3">
                        <label class="form-label">Tên Ghế</label>
                        <input type="text" class="form-control" v-model="create_ghe.ten_ghe" />
                    </div>
                    <div class="col-md-12 mb-3">
                        <label class="form-label">Phòng Chiếu</label>
                        <select class="form-select" v-model="create_ghe.id_phong">
                            <option value="">Chọn Phòng Chiếu</option>
                            <option v-for="phong in list_phong" :key="phong.id" :value="phong.id">{{ phong.ten_phong
                            }}</option>
                        </select>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label class="form-label">Tình Trạng</label>
                        <select class="form-select" v-model="create_ghe.tinh_trang">
                            <option value="1">Hoạt Động</option>
                            <option value="0">Không Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm ghế
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH GHẾ</b></h4>

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
                                <th class="text-center">Tên Ghế</th>
                                <th class="text-center">Phòng Chiếu</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in list_ghe" :key="index">
                                <tr class="text-nowrap">
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle text-center">{{ item.ten_ghe }}</td>
                                    <td class="align-middle">{{ item.ten_phong }}</td>
                                    <td class="align-middle text-center">
                                        <button v-if="item.tinh_trang == 1" class="btn btn-success w-100"
                                            style="color: white;">
                                            Hoạt Động
                                        </button>
                                        <button v-else class="btn btn-danger w-100" style="color: white;">
                                            Không Hoạt Động
                                        </button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button class="btn btn-success me-2" data-bs-toggle="modal"
                                            data-bs-target="#updateModal" @click="edit_ghe = item">
                                            Cập nhật
                                        </button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal" @click="del_ghe = item">
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
                    <h5 class="modal-title">Thêm Ghế Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="themGhe()">
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
                    <h5 class="modal-title">Cập Nhật Thông Tin Ghế</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tên Ghế</label>
                            <input type="text" class="form-control" v-model="edit_ghe.ten_ghe" />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Phòng Chiếu</label>
                            <select class="form-select" v-model="edit_ghe.id_phong">
                                <option v-for="phong in list_phong" :key="phong.id" :value="phong.id">{{ phong.ten_phong
                                }}
                                </option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Tình Trạng</label>
                            <select class="form-select" v-model="edit_ghe.tinh_trang">
                                <option value="1">Hoạt Động</option>
                                <option value="0">Không Hoạt Động</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" v-on:click="capNhatGhe()">
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
                    <h5 class="modal-title">Xóa Ghế</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        Bạn có chắc chắn muốn xóa ghế
                        <strong>{{ del_ghe.ten_ghe }}</strong> tại phòng <strong>{{ del_ghe.ten_phong }}</strong>?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Đóng
                    </button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaGhe()">
                        Xác nhận
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
            list_ghe: [],
            list_phong: [],
            create_ghe: {
                ten_ghe: '',
                id_phong: '',
                loai_ghe: 'Thường',
                hang: '',
                cot: '',
                tinh_trang: '1'
            },
            edit_ghe: {
                id: '',
                ten_ghe: '',
                id_phong: '',
                loai_ghe: '',
                hang: '',
                cot: '',
                tinh_trang: ''
            },
            del_ghe: {},
        };
    },
    mounted() {
        this.layDataGhe();
        this.layDataPhong();
    },
    methods: {
        layDataGhe() {
            axios
                .get('http://127.0.0.1:8000/api/admin/ghe/get-data')
                .then(response => {
                    this.list_ghe = response.data.data;
                })
        },
        layDataPhong() {
            axios
                .get('http://127.0.0.1:8000/api/admin/phong-chieu/get-data')
                .then(response => {
                    this.list_phong = response.data.data;
                })
        },
        themGhe() {
            axios
                .post('http://127.0.0.1:8000/api/admin/ghe/create', this.create_ghe)
                .then(response => {
                    if (response.data.status) {
                        this.layDataGhe();
                        this.create_ghe = {
                            ten_ghe: '',
                            id_phong: '',
                            loai_ghe: 'Thường',
                            hang: '',
                            cot: '',
                            tinh_trang: '1'
                        };
                        alert(response.data.message);
                    } else {
                        alert(response.data.message);
                    }
                })
        },
        capNhatGhe() {
            axios
                .post('http://127.0.0.1:8000/api/admin/ghe/update', this.edit_ghe)
                .then(response => {
                    if (response.data.status) {
                        this.layDataGhe();
                        alert(response.data.message);
                    } else {
                        alert(response.data.message);
                    }
                })
        },
        xoaGhe() {
            axios
                .post('http://127.0.0.1:8000/api/admin/ghe/delete', this.del_ghe)
                .then(response => {
                    if (response.data.status) {
                        this.layDataGhe();
                        alert(response.data.message);
                    } else {
                        alert(response.data.message);
                    }
                })
        }
    },
};
</script>

<style></style>