<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="Newsletter-section">
          <div class="newsletter-text">
            <h5>
              Sign Up For Our Weekly Newsletter To Recieve Updated and Health
              Tip
            </h5>
          </div>
          <div class="form-section text-center">
            <form class="search-wrapper">
              <input
                type="text"
                class="form"
                required
                style="box-shadow: none;
                padding-right: 25px
                box-shadow: rbga(0, 0, 0, 0.31);
                "
              />
              <button
                type="submit"
                class="btn3"
                style="
                  width: 70px;
                  outline: none;
                  border: none;
                  height: 35px;
                  margin-bottom: -10px;
                  margin-left: -5.5em;
                  background-color: rgba(60, 109, 167, 255);
                  box-shadow: rbga(0, 0, 0, 0.31);
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="">
            <img
              src="../assets/SITEICON2.png"
              class="img-foot"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div class="col-md">
          <div class="company">
            <h3>COMPANY</h3>
            <ul class="">
              <li><a href="">About Us</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Learn More</a></li>
              <li><a href="">Careers</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="Services">
            <h3>SERVICES</h3>
            <ul>
              <li><a href="">Patients</a></li>
              <li><a href="">Hospitals</a></li>
              <li><a href="">Clinician</a></li>
              <li><a href="">Labolatory</a></li>
              <li><a href="">Pharmacy</a></li>
              <li><a href="">Ambulance Service</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="resources">
            <h3>RESOURCES</h3>
            <ul class="">
              <li><a href="">FAQS</a></li>
              <li><a href="">Partners</a></li>
              <li><a href=""> Portal</a></li>
              <li><a href="">Clinikli App</a></li>
              <li><a href=""> Hospital</a></li>
              <li><a href="">Teams Of Use</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <div class="Contact">
            <h3>Contact US</h3>
            <ul>
              <li><a href="">info@gmail.com</a></li>
              <li><a href="">(080-CLINIKLI)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="row copy-right">
      <div class="social">
        <a href=""><i class="fa fa-facebook"></i></a>
        <a href=""><i class="fa fa-whatsapp"></i></a>
        <a href=""><i class="fa fa-instagram"></i></a>
        <a href=""><i class="fa fa-twitter"></i></a>
        <p>@2020Clinikli All Right Reserve</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Newsletter-section {
  text-align: center;
}
.Newsletter-section .newsletter-text {
  margin: 10px;
  text-align: center;
}
.newsletter-text h5 {
  text-align: center;
  margin: 5px;
  margin-top: 76px;
  font-weight: lighter;
  font-size: 15px;
  color: blue;
  font-family: sans-serif;
}
.form-section {
  margin: 0 10px;
}
.form-section .search-wrapper {
  padding: 50px;
}
.search-wrapper input {
  border-radius: 20px;
  border: 1px solid pink;
  width: 300px;
  height: 35px;
  z-index: -5;
  outline: none;
  padding: 0 50px;
  margin-top: 2px;
  border: 1px solid rgb(21, 21, 145);
  box-shadow: 2px 30px 40px rgba(0, 0, 0, 0.12);
}
.form input {
  box-shadow: 2px 30px 40px rgba(0, 0, 0, 0.12);
}
.form button {
  margin: 10px;
  margin-top: 20px;
}
input {
  box-shadow: 2px 30px 40px rgba(0, 0, 0, 0.453);
  padding: 20px;
  box-sizing: border-box;
  padding-right: 80px;
  border: 1px solid rgb(21, 21, 145);
  width: 100%;
}
.btn3 {
  box-shadow: 0px 20px 40px rgba(189, 167, 167, 0.36);
  color: white;
  font-size: 13px;
  height: 35px;
  background-color: rgb(6, 6, 54);
  border-radius: 20px;
  z-index: -5;
  outline: none;
  text-decoration: none;
  font-family: cursive;
  cursor: pointer;
}
/*------------End of newletter---------------- */
.footer {
  width: 100vw;
  min-height: 60vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #f8f8fa;
  margin-top: 26px;
}
.company {
  justify-content: center;
  padding: 0;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 5px;
  display: block;
}
.img-foot {
  height: 200px;
  width: 250px;
  max-width: 300px;
  padding-right: 10px;
  float: left;
  margin-top: 3em;
}
h3 {
  color: blue;
  font-size: 14px;
}
ul li a {
  list-style: none;
  text-decoration: none;
  list-style: none;
}
ul {
  list-style: none;
}
ul li a {
  font-weight: 300;
  font-family: sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  font-size: 13px;
  display: block;
  transition: all 0.3s ease;
  margin-right: 5em;
}
.company ul li a:hover {
  color: black;
  padding-left: 8px;
}
.company ul li:not(:last-child) {
  margin-bottom: 10px;
}
.company h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: blue;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
}
.Services {
  color: blue;
  font-size: 16px;
  margin-bottom: 20px;
  position: relative;
}
.Services h3 {
  color: blue;
  font-size: 14px;
  margin-bottom: 20px;
  position: relative;
  display: block;
}
.Services ul li a {
  font-weight: 300;
  font-family: sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  font-size: 13px;
  display: block;
  transition: all 0.3s ease;
  margin-right: 5em;
}
.Services ul li a:hover {
  color: black;
  padding-left: 8px;
}
.Services ul li:not(:last-child) {
  margin-bottom: 10px;
}
.Services h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: blue;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
}
.resources {
  color: blue;
  font-size: 16px;
  position: relative;
  float: left;
}
.resources h3 {
  color: blue;
  font-size: 14px;
  margin-bottom: 20px;
  position: relative;
}
.resources ul li a {
  font-weight: 300;
  font-family: sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  font-size: 13px;
  display: block;
  transition: all 0.3s ease;
  margin-right: 5em;
}
.resources ul li a:hover {
  color: black;
  padding-left: 8px;
}
.resources ul li:not(:last-child) {
  margin-bottom: 10px;
}
.resources h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: blue;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
}
.Contact {
  color: blue;
  font-size: 16px;
  position: relative;
}
.Contact h3 {
  color: darkblue;
  font-size: 15px;
  margin-bottom: 20px;
  position: relative;
}
.Contact ul li a {
  font-weight: 300;
  font-family: cursive;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  font-size: 13px;
  list-style: none;
  display: block;
  transition: all 0.3s ease;
  margin-right: 5em;
}
.Contact ul li a:hover {
  color: black;
  padding-left: 8px;
}
.Contact ul li:not(:last-child) {
  margin-bottom: 10px;
}
.Contact h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: blue;
  height: 2px;
  box-sizing: border-box;
  width: 60px;
}
.copy-right {
  /* padding: 10px 5px; */
  background: rgba(16, 76, 147, 255);
  /* height: 50px; */
  bottom: 0;
  width: 100vw;
  /* left: 0;
  bottom: 0; */
}
.social {
  float: left;
  /* margin-top: 3px; */
  padding-right: 20px;
}
.social i {
  float: right;
  margin: 5px;
  border-radius: 50%;
}
.social i:hover {
  color: blue;
}
.fa {
  font-size: 20px;
  color: white;
  line-height: 40px;
}
.social p {
  text-align: left;
  padding-top: 7px;
  font-size: 15px;
  color: white;
  font-family: cursive;
}
@media (max-width: 767px) {
  .footer-col {
    width: 100%;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 745px) {
  .card {
    width: 150px;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.36);
    background: white;
    border: none;
    margin: 20px;
    outline: none;
    text-decoration: none;
  }
  .card a {
    text-decoration: none;
  }
  .middle-text {
    font-size: 20px;
    padding: 10px;
  }
  .middle {
    padding: 20px;
    margin-top: 20px;
  }
  .middle h3 {
    padding: 20px;
    margin-top: 20px;
  }
}
@media (max-width: 645px) {
  .card {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.36);
    background: white;
    border: none;
  }
  .image {
    height: 300px;
    width: 120%;
    align-items: center;
    float: right;
    justify-content: center;
    border-bottom-right-radius: 35%;
    border-top-left-radius: 35%;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.877);
    margin: 20px;
  }
  .dropdown a {
    margin: 20px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.12);
    text-align: left;
    left: 20px;
    font-family: cursive;
    color: black;
  }
}
</style>
