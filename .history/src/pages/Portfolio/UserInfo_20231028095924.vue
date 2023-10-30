<template>
	<div class="userinfo">
		
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