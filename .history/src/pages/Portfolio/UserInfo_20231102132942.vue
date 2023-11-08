<template>
	<div class="userinfo">
		<h1>User Info:</h1>
		<span>{{ user }}</span>
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
			let user_email = localStorage.getItem("email");
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