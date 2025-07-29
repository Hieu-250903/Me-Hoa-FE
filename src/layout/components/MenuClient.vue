<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark py-0" style="background-color: #000000;">
            <div class="container"> <a class="navbar-brand fs-4 fw-bold" href="#"><span class="text-danger">ME</span>HOA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                    aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <router-link to="/">
                            <li class="nav-item"> <a class="nav-link  text-light fs-6" aria-current="page" href="#">Trang
                                    Chủ</a>
                            </li>
                        </router-link>
                        <!-- <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle text-light fs-6" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Xe
                            </a>
                            <ul class="dropdown-menu">
                                <router-link to="/xe/xe-co-san">
                                    <li><a class="dropdown-item" href="/xe/xe-co-san">Xe có sẵn</a>
                                    </li>
                                </router-link>
                                <router-link to="/xe/xe-duoc-yeu-thich">
                                    <li><a class="dropdown-item" href="/xe/xe-duoc-yeu-thich">Xe được yêu thích</a>
                                    </li>
                                </router-link>
                                
                            </ul>
                        </li> -->
                        <router-link to="/thue-xe-tu-lai">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/thue-xe-tu-lai">Thuê xe tự lái</a>
                            </li>
                        </router-link>
                        <router-link to="/dat-tour-du-lich">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/dat-tour-du-lich">Đặt tour du lịch</a>
                            </li>
                        </router-link>
                        <router-link to="/lien-he">
                            <li class="nav-item"> <a class="nav-link text-light fs-6" href="/lien-he">Liên Hệ</a>
                            </li>
                        </router-link>
                    </ul>
                    <div class="d-flex nav-search">
                        <div class="my-2">
                            <div class="dropdown">
                                <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                    href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://photo.znews.vn/w360/Uploaded/wqdyqdxwp/2025_06_08/AEminh_thumb.jpg" class="user-img"
                                        style="height: 35px; object-fit: cover;">
                                    <div class="user-info ps-3 pe-3">
                                        <p class="user-name mb-0 text-light">An chim be</p>
                                        <p class="designattion mb-0">@ancube</p>
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <router-link to="/client/profile">
                                        <li><a class="dropdown-item" href="javascript:;"><i
                                                    class="bx bx-user"></i><span>Profile</span></a>
                                        </li>
                                    </router-link>
                                    <li><a class="dropdown-item" href="javascript:;"><i
                                                class="bx bx-log-out-circle"></i><span>Logout</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style></style>