<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<router-link to="/admin">
					<li class="nav-item">
						<a class="nav-link" href="/admin">
							<div class="parent-icon">
								<i class="bx bx-home-circle"></i>

							</div>
							<div class="menu-title">Dashboard</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/phim">
					<li class="nav-item">
						<a class="nav-link" href="/admin/phim">
							<div class="parent-icon">
								<i class="fa-solid fa-film"></i>

							</div>
							<div class="menu-title">Phim</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/the-loai-phim">
					<li class="nav-item">
						<a class="nav-link" href="/admin/the-loai-phim">
							<div class="parent-icon">
								<i class="bx bx-category"></i>

							</div>
							<div class="menu-title">Thể Loại Phim</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/phong-chieu">
					<li class="nav-item">
						<a class="nav-link" href="/admin/phong-chieu">
							<div class="parent-icon">
								<i class="fa-solid fa-person-shelter"></i>

							</div>
							<div class="menu-title">Phòng Chiếu</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/dich-vu">
					<li class="nav-item">
						<a class="nav-link" href="/admin/dich-vu">
							<div class="parent-icon">
								<i class="fa-brands fa-servicestack"></i>

							</div>
							<div class="menu-title">Dịch Vụ</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/voucher">
					<li class="nav-item">
						<a class="nav-link" href="/admin/	voucher">
							<div class="parent-icon">
								<i class="fa-solid fa-ticket"></i>

							</div>
							<div class="menu-title">Voucher</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/nhan-vien">
					<li class="nav-item">
						<a class="nav-link" href="/admin/nhan-vien">
							<div class="parent-icon">
								<i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Nhân Viên</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/khach-hang">
					<li class="nav-item">
						<a class="nav-link" href="/admin/khach-hang">
							<div class="parent-icon">
								<i class="fa-solid fa-user-group"></i>
							</div>
							<div class="menu-title">Khách Hàng</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/phan-quyen">
					<li class="nav-item">
						<a class="nav-link" href="/admin/phan-quyen">
							<div class="parent-icon">
								<i class="fa-solid fa-user-shield"></i>
							</div>
							<div class="menu-title">Phân Quyền</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/ve">
					<li class="nav-item">
						<a class="nav-link" href="/admin/ve">
							<div class="parent-icon">
								<i class="fa-solid fa-ticket"></i>
							</div>
							<div class="menu-title">Vé</div>
						</a>
					</li>
				</router-link>
				<router-link to="/admin/suat-chieu">
					<li class="nav-item">
						<a class="nav-link" href="/admin/suat-chieu">
							<div class="parent-icon">
								<i class="fa-solid fa-calendar-days"></i>
							</div>
							<div class="menu-title">Suất Chiếu</div>
						</a>
					</li>
					</router-link>
				<router-link to="/admin/ghe">
					<li class="nav-item">
						<a class="nav-link" href="/admin/ghe">
							<div class="parent-icon">
								<i class="fa-solid fa-chair"></i>
							</div>
							<div class="menu-title">Ghế</div>
						</a>
					</li>
				</router-link>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>