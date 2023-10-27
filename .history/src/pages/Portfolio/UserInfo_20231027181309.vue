<template>
	<div class="px-80px">
		<div class="user">
			<div class="user__content">
				<div class="user__coverImg">
					<img class="user__cover" src="../../../assets/jpg/BG_car.jpeg" />
				</div>
				<div class="user__avt d-flex align-items-center justify-content-center">
					<div class="d-flex justify-content-center icon-camera">
						<img
							class="user__avt--img"
							src="../../../assets/svg/default-avatar-profile-picture-male-icon.svg"
						/>
					</div>
				</div>

				<div class="user__info">
					<div
						class="container user__info--desc desc__profile d-flex justify-content-between"
					>
						<div class="desc__profile--info mt-20px">
							<div class="d-flex align-items-center">
								<h4 class="desc__profile--name"> {{ user.username }} </h4>
							</div>
							<div class="d-flex flex-row desc__profile--createdAt">
								<p class="mr-10">Tham gia:</p>
								<p>{{ user.createdAt }}</p>
							</div>
						</div>
						<div class="desc__profile--info mt-20px">
							<div class="desc__point">
								<p class="desc__account--label">Đăng ký chủ xe:</p>
								<p class="">
									{{
										user.vendorState == "none"
											? "Chưa đăng ký"
											: user.vendorState == "pending"
											? "Chờ duyệt"
											: user.vendorState == "approved"
											? "Đã duyệt"
											: "Đã từ chối"
									}}
								</p>
							</div>
						</div>
					</div>

				
					<div
						class="container d-flex flex-column user__info--desc desc__account"
					>
						<!-- <div class=" d-flex flex-column desc__account--item"> -->
						<div class="d-flex">
							<p class="desc__account--label width-150px">Tên hiển thị:</p>
							<p class="">{{ user.username }}</p>
						</div>

						<div class="d-flex justify-content-start">
							<p class="desc__account--label mkl width-150px">Email:</p>
							<p class="">{{ user.email }}</p>
						</div>

						<div class="d-flex justify-content-start">
							<p class="desc__account--label width-150px">Số điện thoại:</p>
							<p class="">{{ user.phone }}</p>
						</div>

						<div class="d-flex justify-content-start">
							<p class="desc__account--label width-150px">Họ tên đầy đủ:</p>
							<p class="">{{ user.fullName }}</p>
						</div>

						<div class="d-flex justify-content-start">
							<p class="desc__account--label width-150px">Địa chỉ:</p>
							<p class="">{{ user.address }}</p>
						</div>

						<div class="d-flex justify-content-start">
							<p class="desc__account--label width-0px">Căn cước công dân:</p>
							<div>
								<p class="width-50 mb-0"></p>
								<div
									v-for="(index, key) in user.imagesID"
									:key="key"
									class="idCards"
								>
									<img :src="index.src" alt="" class="idCrd__img ml-20px mb-16px width-50" />
								</div>
							</div>
						</div>
						<!-- 
							</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axiosIns from "@/libs/axiosConfig";

	export default {
		data() {
			return {
				user: {},
			};
		},

		created() {
			let user_email = localStorage.getItem("user_email");
			axiosIns
				.get("/user/email/" + user_email)
				.then((response) => {
					console.log("response", response);
					this.user = response.data;
				})
				.catch((error) => {
					console.log("Error", error);
				});
		},
	};
</script>

<style>
</style>