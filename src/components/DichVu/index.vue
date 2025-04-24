<template >
  <div class="row">
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5>Dịch Vụ</h5>
          <hr />
          <label>Tên dịch vụ</label>
          <input class="form-control" type="text" />
          <label class="mt-2">Giá dịch vụ</label>
          <input class="form-control" type="text" />
          <label class="mt-2">Mô tả dịch vụ</label>
          <textarea class="form-control" rows="3"></textarea>
          <label class="mt-2">Tình trạng</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Chọn tình trạng</option>
            <option value="1">Hiển thị</option>
            <option value="0">Tạm tắt</option>
          </select>
        </div>
        <div class="card-footer d-flex justify-content-end">
          <button type="button" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Danh Sách Dịch Vụ</h5>
          <hr />
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th class="align-middle text-center">#</th>
                  <th class="align-middle text-center text-nowrap">
                    Tên dịch vụ
                  </th>
                  <th class="align-middle text-center">Giá dịch vụ</th>
                  <th class="align-middle text-center">Mô tả dịch vụ</th>
                  <th class="align-middle text-center">Tình trạng</th>
                  <th class="align-middle text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle text-center">1</td>
                  <td class="align-middle text-center">Bắp rang bơ</td>
                  <td class="align-middle text-center">20.000đ</td>
                  <td class="align-middle text-center">Bắp rang bơ ngọt</td>
                  <td class="text-center align-middle">
                    <button class="btn btn-success" type="button">
                      <i class="fa-solid fa-square-check"></i> Hiển thị
                    </button>
                    <button class="btn btn-warning" type="button">
                      <i class="fa-solid fa-square-xmark"></i> Tạm tắt
                    </button>
                  </td>
                  <td class="text-nowrap align-middle text-center">
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#capNhatModal">
                      Cập Nhật
                    </button>
                    <button type="button" class="ms-2 btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#xoaModal">
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
  </div>
  <!-- Modal cap nhat-->
<div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật dịch vụ</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="mb-1">Tên dịch vụ</label>
        <input class="form-control" type="text" />
        <label class="mt-2">Giá dịch vụ</label>
        <input class="form-control" type="text" />
        <label class="mt-2">Mô tả dịch vụ</label>
        <textarea class="form-control" rows="3"></textarea>
        <label class="mt-2">Tình trạng</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Chọn tình trạng</option>
          <option value="1">Hiển thị</option>
          <option value="0">Tạm tắt</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        <button type="button" class="btn btn-primary">Cập nhật</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal xóa-->
<div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa dịch vụ</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-danger" role="alert">
                        <h6>
                            <b class="text-center text-danger">
                                Bạn có chắc chắn muốn xóa dịch vụ này không?</b>
                        </h6>
                        <br />
                        <br />
                        <i class="fa-solid fa-circle-xmark me-2"></i><b>
                           Điều này không thể hoàn tác !!.
                        </b>
                    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        <button type="button" class="btn btn-danger">Xóa</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {};
</script>
<style >
</style>