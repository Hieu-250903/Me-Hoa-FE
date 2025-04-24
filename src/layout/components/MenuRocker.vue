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
				<router-link to="/">
					<li class="nav-item">
					<a class="nav-link" href="/">
						<div class="parent-icon">
							<i class="bx bx-home-circle"></i>
					
						</div>
						<div class="menu-title">Trang Chủ</div>
					</a>
				</li>
				</router-link>
				<router-link to="/the-loai-phim">
				<li class="nav-item">
					<a class="nav-link" href="/the-loai-phim">
						<div class="parent-icon">
							<i class="bx bx-category"></i>
					
						</div>
						<div class="menu-title">Thể Loại Phim</div>
					</a>
				</li>
			</router-link>
			<router-link to="/phong-chieu">
				<li class="nav-item">
					<a class="nav-link" href="/phong-chieu">
						<div class="parent-icon">
							<i class="fa-solid fa-person-shelter"></i>
					
						</div>
						<div class="menu-title">Phòng Chiếu</div>
					</a>
				</li>
			</router-link>
			<router-link to="/dich-vu">
				<li class="nav-item">
					<a class="nav-link" href="/dich-vu">
						<div class="parent-icon">
							<i class="fa-brands fa-servicestack"></i>
					
						</div>
						<div class="menu-title">Dịch Vụ</div>
					</a>
				</li>
			</router-link>
			<router-link to="/voucher">
				<li class="nav-item">
					<a class="nav-link" href="/voucher">
						<div class="parent-icon">
							<i class="fa-solid fa-ticket"></i>
					
						</div>
						<div class="menu-title">Voucher</div>
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