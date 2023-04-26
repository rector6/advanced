<template>
  <div id="category" class="category">
    <div class="container">
      <div class="row">
        <h2 class="text-center pt-5 muted pb-5">
          Get Fast and Better Health Services Category
        </h2>
        <div class="cards">
          <a href="patient" class="card">
            <img src="../assets/icons/Doc.png" class="card-header" />
            <h3 class="">Patients Account</h3>
            <p class="card-info">
              Signip as a patient and get quick reliable service on the click
            </p>
          </a>
          <a href="user" class="card">
            <img src="../assets/icons/Doc.png" class="card-header" />
            <h3 class="">Clinicians</h3>
            <p class="card-info">
              Signip as a Clinician and get quick reliable service on the click
            </p>
          </a>
          <a href="" class="card">
            <img src="../assets/icons/Hospital.png" class="card-header" />
            <h3 class="">Hospitals</h3>
            <p class="card-info">
              Signip as a Hospital and Provide services to our many patients
            </p>
          </a>
          <a href="" class="card">
            <img src="../assets/icons/pharmacy.png" class="card-header" />
            <h3 class="">Pharmacys</h3>
            <p class="card-info">
              Signup as a Pharmacy to Provide services to our patients.
            </p>
          </a>
          <a class="card">
            <img src="../assets/icons/lab.png" class="card-header" />
            <h3 class="">Diagonosis Center</h3>
            <p class="card-info">
              Signup as a Lab and provide services to our many patients
            </p>
          </a>
          <a class="card">
            <img src="../assets/icons/amb.png" class="card-header" />
            <h3 class="">Ambulance Services</h3>
            <p class="card-info">
              Get quick and reliable support from our ambulance services
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.category {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
  padding: 0;
}
.card {
  min-width: 250px;
  width: 330px;
  height: 200px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border: none;
  margin: 20px;
  text-decoration: none;
}
.card-header {
  width: 15%;
  height: 15%;
  background-color: #afb1c4;
  border: none;
}
.card img {
  border-radius: 50%;
  margin: 10px;
  padding: 2px;
  background-image: none;
  background: #afb1c4;
  width: 39px;
  height: 39px;
  border: none;
}
.card h3 {
  font-size: 18px;
  text-align: left;
  font-weight: 600;
  color: rgb(100, 95, 95);
  display: block;
  padding: 10px;
  font-family: sans-serif;
}
a {
  text-decoration: none;
  text-align: auto;
}
a:hover {
  color: white;
}
.card-info {
  text-align: left;
  display: block;
  color: rgb(48, 42, 42);
  font-size: 15px;
  padding: 10px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 25px;
}
.card:hover {
  background-color: blue;
  color: white;
}
.card-info:hover {
  color: white;
}
a .card:hover {
  color: white;
}
</style>
