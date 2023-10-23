<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img src="../assets/logo.png" alt="" class="logo" />

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="btn-group">
              <a href="">About Us</a>
              <div
                type="button"
                class="Author"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M8.59375 11.6667H32.6562"
                    stroke="#33363F"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.59375 20H32.6562"
                    stroke="#33363F"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.59375 28.3333H32.6562"
                    stroke="#33363F"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  width="30"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_102_131)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.1665 25C4.1665 13.4941 13.4939 4.16669 24.9998 4.16669C36.5058 4.16669 45.8332 13.4941 45.8332 25C45.8332 31.693 42.6771 37.6488 37.7719 41.4603C36.9132 38.9522 35.3321 36.7452 33.2181 35.1231C30.8604 33.314 27.9717 32.3334 24.9998 32.3334C22.028 32.3334 19.1393 33.314 16.7816 35.1231C14.6676 36.7452 13.0865 38.9522 12.2277 41.4603C7.32261 37.6488 4.1665 31.693 4.1665 25ZM32.0006 36.7098C33.9555 38.2098 35.3754 40.297 36.0539 42.6621C32.8501 44.6715 29.0607 45.8334 24.9998 45.8334C20.939 45.8334 17.1496 44.6715 13.9457 42.6621C14.6242 40.297 16.0442 38.2098 17.9991 36.7098C20.0075 35.1687 22.4683 34.3334 24.9998 34.3334C27.5314 34.3334 29.9922 35.1687 32.0006 36.7098ZM19.7498 18.75C19.7498 15.8505 22.1003 13.5 24.9998 13.5C27.8993 13.5 30.2498 15.8505 30.2498 18.75C30.2498 21.6495 27.8993 24 24.9998 24C22.1003 24 19.7498 21.6495 19.7498 18.75ZM24.9998 11.5C20.9958 11.5 17.7498 14.746 17.7498 18.75C17.7498 22.7541 20.9958 26 24.9998 26C29.0039 26 32.2498 22.7541 32.2498 18.75C32.2498 14.746 29.0039 11.5 24.9998 11.5Z"
                      fill="#6CA6A8"
                    />
                  </g>
                  <path
                    d="M37.7719 41.4603L37.2989 41.6223L37.5257 42.2848L38.0787 41.8551L37.7719 41.4603ZM33.2181 35.1231L32.9137 35.5198L33.2181 35.1231ZM16.7816 35.1231L17.0859 35.5198L16.7816 35.1231ZM12.2277 41.4603L11.9209 41.8551L12.4739 42.2848L12.7008 41.6223L12.2277 41.4603ZM36.0539 42.6621L36.3196 43.0857L36.6383 42.8858L36.5346 42.5242L36.0539 42.6621ZM32.0006 36.7098L31.6962 37.1065L32.0006 36.7098ZM13.9457 42.6621L13.4651 42.5242L13.3614 42.8858L13.6801 43.0857L13.9457 42.6621ZM17.9991 36.7098L17.6947 36.3131H17.6947L17.9991 36.7098ZM24.9998 3.66669C13.2178 3.66669 3.6665 13.2179 3.6665 25H4.6665C4.6665 13.7702 13.77 4.66669 24.9998 4.66669V3.66669ZM46.3332 25C46.3332 13.2179 36.7819 3.66669 24.9998 3.66669V4.66669C36.2296 4.66669 45.3332 13.7702 45.3332 25H46.3332ZM38.0787 41.8551C43.1005 37.9529 46.3332 31.8539 46.3332 25H45.3332C45.3332 31.5321 42.2536 37.3446 37.4652 41.0655L38.0787 41.8551ZM32.9137 35.5198C34.9494 37.0818 36.472 39.207 37.2989 41.6223L38.245 41.2984C37.3545 38.6973 35.7148 36.4086 33.5225 34.7264L32.9137 35.5198ZM24.9998 32.8334C27.8616 32.8334 30.6434 33.7776 32.9137 35.5198L33.5225 34.7264C31.0775 32.8503 28.0817 31.8334 24.9998 31.8334V32.8334ZM17.0859 35.5198C19.3563 33.7776 22.1381 32.8334 24.9998 32.8334V31.8334C21.918 31.8334 18.9222 32.8503 16.4772 34.7264L17.0859 35.5198ZM12.7008 41.6223C13.5277 39.207 15.0502 37.0818 17.0859 35.5198L16.4772 34.7264C14.2849 36.4086 12.6452 38.6973 11.7547 41.2984L12.7008 41.6223ZM3.6665 25C3.6665 31.8539 6.89917 37.9529 11.9209 41.8551L12.5345 41.0655C7.74605 37.3446 4.6665 31.5321 4.6665 25H3.6665ZM36.5346 42.5242C35.8266 40.0563 34.3449 37.8784 32.305 36.3131L31.6962 37.1065C33.5661 38.5413 34.9243 40.5377 35.5733 42.8L36.5346 42.5242ZM24.9998 46.3334C29.1574 46.3334 33.0385 45.1436 36.3196 43.0857L35.7883 42.2385C32.6617 44.1995 28.964 45.3334 24.9998 45.3334V46.3334ZM13.6801 43.0857C16.9612 45.1436 20.8423 46.3334 24.9998 46.3334V45.3334C21.0357 45.3334 17.3379 44.1995 14.2114 42.2385L13.6801 43.0857ZM17.6947 36.3131C15.6548 37.8784 14.1731 40.0563 13.4651 42.5242L14.4263 42.8C15.0753 40.5377 16.4336 38.5413 18.3035 37.1065L17.6947 36.3131ZM24.9998 33.8334C22.3582 33.8334 19.7904 34.705 17.6947 36.3131L18.3035 37.1065C20.2246 35.6324 22.5784 34.8334 24.9998 34.8334V33.8334ZM32.305 36.3131C30.2092 34.705 27.6415 33.8334 24.9998 33.8334V34.8334C27.4213 34.8334 29.7751 35.6324 31.6962 37.1065L32.305 36.3131ZM24.9998 13C21.8242 13 19.2498 15.5744 19.2498 18.75H20.2498C20.2498 16.1267 22.3765 14 24.9998 14V13ZM30.7498 18.75C30.7498 15.5744 28.1755 13 24.9998 13V14C27.6232 14 29.7498 16.1267 29.7498 18.75H30.7498ZM24.9998 24.5C28.1755 24.5 30.7498 21.9257 30.7498 18.75H29.7498C29.7498 21.3734 27.6232 23.5 24.9998 23.5V24.5ZM19.2498 18.75C19.2498 21.9257 21.8242 24.5 24.9998 24.5V23.5C22.3765 23.5 20.2498 21.3734 20.2498 18.75H19.2498ZM18.2498 18.75C18.2498 15.0221 21.2719 12 24.9998 12V11C20.7196 11 17.2498 14.4698 17.2498 18.75H18.2498ZM24.9998 25.5C21.2719 25.5 18.2498 22.4779 18.2498 18.75H17.2498C17.2498 23.0302 20.7196 26.5 24.9998 26.5V25.5ZM31.7498 18.75C31.7498 22.4779 28.7278 25.5 24.9998 25.5V26.5C29.28 26.5 32.7498 23.0302 32.7498 18.75H31.7498ZM24.9998 12C28.7278 12 31.7498 15.0221 31.7498 18.75H32.7498C32.7498 14.4698 29.28 11 24.9998 11V12Z"
                    fill="white"
                  />
                  <rect
                    x="4.6665"
                    y="4.66669"
                    width="40.6667"
                    height="40.6667"
                    rx="20.3333"
                    stroke="#222222"
                  />
                  <defs>
                    <filter
                      id="filter0_i_102_131"
                      x="3.6665"
                      y="3.66669"
                      width="42.6665"
                      height="46.6667"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_102_131"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">LogIn</a></li>
                <li><a class="dropdown-item" href="#">Sign In</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">LogOut</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  padding: 10px 5%;
}
.logo {
  width: auto;
  height: 80px;
}
.logo:hover {
  cursor: pointer;
}
a {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  margin-right: 20px;
}
a:hover {
  color: #000;
}
.Author {
  border-radius: 50px;
  border: 1px solid #dbcfcf;
  background: #fff;
  width: auto;
  height: 40px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 5px;
}
.Author:hover {
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(83, 80, 80, 0.25);
}
.dropdown-menu{
  right: 10px;
  top: -10px;
  border: 1px solid #dbcfcf;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(83, 80, 80, 0.25);
}
</style>
