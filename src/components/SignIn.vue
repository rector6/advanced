<template>
  <div class="account" id="account">
    <div class="container pb-4">
      <div class="dropdown-section">
        <select
          class="form-select form-select"
          aria-label="from-select-lg example"
        >
          <option selected class="">How can i create an Account?</option>
          <option value="Clinicain"><a href="">Clinicain</a></option>
          <option value="Patients">
            <router-link to="/patient">Patients</router-link>
          </option>
          <option value="Lab"><a href="">Labolatory</a></option>
          <option value="Hospital"><a href="">Hospital</a></option>
          <option value="Phamarcy"><a href="">Pharmacy</a></option>
          <option value="Ambulance"><a href="">Ambulance</a></option>
        </select>
        <select
          class="form-select form-select"
          aria-label="from-select-lg example"
        >
          <option selected class="">How to Book a Doctor</option>
          <option value="Clinicain"><a href="">Clinicain</a></option>
          <option value="Patients">
            <router-link to="/patient">Patients</router-link>
          </option>
          <option value="Lab"><a href="">Labolatory</a></option>
          <option value="Hospital"><a href="">Hospital</a></option>
          <option value="Phamarcy"><a href="">Pharmacy</a></option>
          <option value="Ambulance"><a href="">Ambulance</a></option>
        </select>
        <select
          class="form-select form-select"
          aria-label="from-select-lg example"
        >
          <option selected class="">How can i Book a Hospital</option>
          <option value="Clinicain"><a href="">Clinicain</a></option>
          <option value="Patients">
            <router-link to="/patient">Patients</router-link>
          </option>
          <option value="Lab"><a href="">Labolatory</a></option>
          <option value="Hospital"><a href="">Hospital</a></option>
          <option value="Phamarcy"><a href="">Pharmacy</a></option>
          <option value="Ambulance"><a href="">Ambulance</a></option>
        </select>
        <select
          class="form-select form-select"
          aria-label="from-select-lg example"
        >
          <option selected class="">How can i Purchase Drugs?</option>
          <option value="Clinicain"><a href="">Clinicain</a></option>
          <option value="Patients">
            <router-link to="/patient">Patients</router-link>
          </option>
          <option value="Lab"><a href="">Labolatory</a></option>
          <option value="Hospital"><a href="">Hospital</a></option>
          <option value="Phamarcy"><a href="">Pharmacy</a></option>
          <option value="Ambulance"><a href="">Ambulance</a></option>
        </select>
        <select
          class="form-select form-select"
          aria-label="from-select-lg example"
        >
          <option selected class="">How can order for Abulance</option>
          <option value="Clinicain"><a href="">Clinicain</a></option>
          <option value="Patients">
            <router-link to="/patient">Patients</router-link>
          </option>
          <option value="Lab"><a href="">Labolatory</a></option>
          <option value="Hospital"><a href="">Hospital</a></option>
          <option value="Phamarcy"><a href="">Pharmacy</a></option>
          <option value="Ambulance"><a href="">Ambulance</a></option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.account {
  min-height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.dropdown-section {
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
}
select {
  margin: 10px;
  float: left;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  border: none;
  font-weight: 500;
  color: rgb(94, 94, 191);
  box-shadow: 0 20px 30px rgb(0, 0, 0, 0.15);
}
option a {
  margin: 10px;
}
.form-select {
  height: 50px;
  border: 1px solid rgb(159, 159, 230);
}
</style>
