<template>
	<div class="header d-flex justify-content-between align-items-center">
		<div class="d-flex align-items-center">
			<img src="../assets/svg/left-header.svg" />
			<router-link to="/" class="mr-20px header__logo--text"> HaNoi Car </router-link>
			
				<div class="header__info--phone mr-20px d-flex justify-content-between align-items-center">
					<i class=" pointer fa-solid fa-phone"></i>
					<p class=" pointer mb-0px">19001733</p>
				</div>
				<div class="header__info--email mr-20px d-flex justify-content-between align-items-center">
					<i class=" pointer fa-solid fa-envelope"></i>
					<p class="pointer">hanoicar247@gmail.com</p>
				</div>
		
		</div>
		<div class="d-flex justify-content-around align-items-center">
			<div class="header__info d-flex justify-content-between">

				<div class="header__vendor d-flex justify-content-between align-items-center" v-if="!isLogin">
				
						<i class="fa-solid fa-car"></i>
						<router-link class="pointer" to="/vendor"> Trở thành chủ xe </router-link>
				
				</div>
			</div>
			<div class="header__infoAuth d-flex  align-items-center ml-40px gap-40px"
				v-if="!isLogin">
				<p class="header__infoAuth--login mb-0 pointer" @click="goToLogin()">Đăng nhập</p>
				<div class="header__infoAuth--register">
					<p class="header__infoAuth--register-button mb-0 pointer" @click="goToRegister()">Đăng ký</p>

				</div>
			</div>
			<div v-else>
				<b-dropdown id="dropdown-user" :text="userName" class="m-md-2">
					<b-dropdown-item>
						<router-link to="/portfolio/user-info" class="">
							Thông tin cá nhân
						</router-link>
					</b-dropdown-item>
					<b-dropdown-item v-if="role == 'admin'">
						<router-link to="/portfolio/list-users" class="">
							Quản lý thành viên
						</router-link>
					</b-dropdown-item>
					<b-dropdown-item v-if="role == 'admin'">
						<router-link to="/portfolio/list-vendors" class="">
							Quản lý chủ xe
						</router-link>
					</b-dropdown-item>

					<b-dropdown-item v-if="role !== 'customer'">
						<router-link to="/portfolio/list-cars" class="">
							Quản lý xe
						</router-link>
					</b-dropdown-item>

					<b-dropdown-item v-if="role == 'customer'">
						<router-link to="/portfolio/user-list-booking" class="">
							Lịch sử đặt xe
						</router-link>
					</b-dropdown-item>

					<b-dropdown-item v-if="role !== 'customer'">
						<router-link to="/portfolio/vendor-list-booking" class="">
							Quản lý đặt xe
						</router-link>
					</b-dropdown-item>

					<b-dropdown-item @click="logout()">Logout</b-dropdown-item>
				</b-dropdown>
			</div>

			<!-- <ModalLoginAndRegisterVue></ModalLoginAndRegisterVue> -->
			<div class="img-logo-right">
				<img src="../assets/svg/right-header.svg" />
			</div>
		</div>
	</div>
</template>

<script>
import { AUTH_LOGOUT } from "../store/constants";

export default {
	components: {},
	data() {
		return {
			isLogin: false,
			isOpen: false,
			user: {},
		};
	},
	methods: {
		goToLogin() {
			this.$router.push("/login");
		},
		goToRegister() {
			this.$router.push("/register");
		},

		loggedIn() {
			this.isLogin = true;
		},
		logout() {
			this.isLogin = false;
			this.$store
				.dispatch(AUTH_LOGOUT)
				.then(() => {
					this.$router.push("/");
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	created() {
		let token = localStorage.getItem("token");
		if (token != null) {
			this.isLogin = true;
		}
	},
	mounted() {
		let token = localStorage.getItem("token");
		if (token != null) {
			this.isLogin = true;
		}
	},
	watch: {
		isLogin() {
			let token = localStorage.getItem("token");
			if (token != null) {
				this.isLogin = true;
			}
		},
	},
	computed: {
		userName() {
			return localStorage.getItem("username");
		},
		role() {
			return localStorage.getItem("role");
		},
	},
};
</script>

<style lang="scss" scoped></style>