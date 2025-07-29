<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <span class="d-flex justify-content-between">
                        <h5 class="card-title mt-2">Danh Sách Phòng Chiếu</h5>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themModal">
                            Thêm Phòng Chiếu
                        </button>
                    </span>
                    <hr />
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="align-middle text-center">#</th>
                                <th class="align-middle text-center text-nowrap">
                                    Tên Phòng Chiếu
                                </th>
                                <th class="align-middle text-center">Hàng Dọc</th>
                                <th class="align-middle text-center">Hàng Ngang</th>
                                <th class="align-middle text-center">Tình Trạng</th>
                                <th class="align-middle text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in list_phong_chieu" :key="index"  >
                                <td class="align-middle text-center">{{ index + 1 }}</td>
                                <td class="align-middle text-center">{{ item.ten_phong }}</td>
                                <td class="align-middle text-center">{{ item.hang_doc }}</td>
                                <td class="align-middle text-center">{{ item.hang_ngang }}</td>
                                <td class="text-center align-middle">
                                    <button v-if="item.tinh_trang == 1" class="btn btn-success" type="button">
                                        <i class="fa-solid fa-square-check"></i> Hoạt động
                                    </button>
                                    <button v-else class="btn btn-warning" type="button">
                                        <i class="fa-solid fa-square-xmark"></i> Ngưng hoạt động
                                    </button>
                                </td>
                                <td class="text-nowrap align-middle text-center">
                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#capNhatModal">
                                        Cập Nhật
                                    </button>
                                    <button type="button" class="ms-2 btn btn-danger btn-sm" data-bs-toggle="modal"
                                        data-bs-target="#xoaModal">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal thêm phòng-->
    <div class="modal fade" id="themModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Thêm mới phòng chiếu
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="tenPhong" class="form-label">Tên phòng chiếu</label>
                        <input v-model="create_phong_chieu.ten_phong" type="text" class="form-control" id="tenPhong" placeholder="Nhập tên phòng chiếu" />
                    </div>
                    <div class="mb-3">
                        <label for="hangDoc" class="form-label">Hàng dọc</label>
                        <input v-model="create_phong_chieu.hang_doc" type="number" class="form-control" id="hangDoc" placeholder="Nhập số hàng dọc" />
                    </div>
                    <div class="mb-3">
                        <label for="hangNgang" class="form-label">Hàng ngang</label>
                        <input v-model="create_phong_chieu.hang_ngang" type="number" class="form-control" id="hangNgang" placeholder="Nhập số hàng ngang" />
                    </div>
                    <div class="mb-3">
                        <label for="isActive" class="form-label">Trạng thái</label>
                        <select v-model="create_phong_chieu.tinh_trang" class="form-select" id="isActive">
                            <option value="">Chọn trạng thái</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Ngưng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Hủy
                    </button>
                    <button type="button" class="btn btn-primary" @click="themPhongChieu">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xóa phòng -->
    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger" role="alert">
                        <h6>
                            <b class="text-center text-danger">
                                Bạn có chắc chắn muốn xóa phòng chiếu này không?</b>
                        </h6>
                        <br />
                        <br />
                        <i class="fa-solid fa-circle-xmark me-2"></i><b>
                            Nếu xóa phòng chiếu này, tất cả các suất chiếu liên quan cũng sẽ
                            bị xóa.
                        </b>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Hủy
                    </button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal cập nhật -->
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Cập nhật phòng chiếu
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="tenPhong" class="form-label">Tên phòng chiếu</label>
                        <input type="text" class="form-control" id="tenPhong" placeholder="Nhập tên phòng chiếu" />
                    </div>
                    <div class="mb-3">
                        <label for="hangDoc" class="form-label">Hàng dọc</label>
                        <input type="number" class="form-control" id="hangDoc" placeholder="Nhập số hàng dọc" />
                    </div>
                    <div class="mb-3">
                        <label for="hangNgang" class="form-label">Hàng ngang</label>
                        <input type="number" class="form-control" id="hangNgang" placeholder="Nhập số hàng ngang" />
                    </div>
                    <div class="mb-3">
                        <label for="isActive" class="form-label">Trạng thái</label>
                        <select class="form-select" id="isActive">
                            <option value="">Chọn trạng thái</option>
                            <option value="1">Hoạt động</option>
                            <option value="0">Ngưng hoạt động</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Hủy
                    </button>
                    <button type="button" class="btn btn-primary">Cập nhật</button>
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
            list_phong_chieu: [],
            create_phong_chieu: {
                ten_phong: '',
                hang_ngang: '',
                hang_doc: '',
                tinh_trang: '',
            },
        };
    },
    mounted() {
        this.getListPhongChieu();
    },
    methods: {
        getListPhongChieu() {
            axios.get('http://localhost:8000/api/admin/phong-chieu/get-data')
                .then(res => {
                    this.list_phong_chieu = res.data.data;
                });
        },
        themPhongChieu() {
            axios.post('http://localhost:8000/api/admin/phong-chieu/add-data', this.create_phong_chieu)
                .then(res => {
                    if (res.data.status) {
                        alert('Thêm phòng chiếu thành công');
                        this.getListPhongChieu();
                    } else {
                        alert('Thêm phòng chiếu thất bại');
                    }
                });
        },
    },
};
</script>
<style></style>