<template>
  <div class="section" id="section">
    <div class="container">
      <div class="row">
        <h1 class="work-text pb-2 pt-4">How it Works</h1>
        <div class="section d-flex justify-content-center">
          <div class="image-section pb-5">
            <img src="../assets/imgcard.png" class="image" />
          </div>
          <div class="col-lg pb-2">
            <div class="card-section pb-5">
              <div
                class="card"
                style="
                  width: 100%;
                  height: 80px;
                  max-width: 500px;
                  min-width: 300px;
                  <!-- margin: 25px; -->
                  border-radius: 5px;
                  box-shadow: 22px 30px 30px 40px rgba(0, 0, 0, 0.12);
                  @media screen (max-width: 764px) {
                    width: 100%;
                    height: 30%;
                  }
                  .card: hover {
                    background: blue;
                  }
                "
              >
                <div class="card-body">
                  <h5 class="card-title">Search</h5>
                  <p class="card-text">
                    Search for a Service Category you need to use<br />eg
                    Doctors Hospital.
                  </p>
                </div>
              </div>
              <div
                class="card"
                style="
                  width: 100%;
                  height: 80px;
                  max-width: 500px;
                  min-width: 250px;
                  <!-- margin: 20px; -->
                  border-radius: 10px;
                  box-shadow: 22px 30px 30px 40px rgba(0, 0, 0, 0.12);
                  @media screen (max-width: 764px) {
                    width: 100%;
                    height: 30%;
                  }
                "
              >
                <div class="card-body">
                  <h5 class="card-title">Book</h5>
                  <p class="card-text">Meet a near by Profile that refers</p>
                </div>
              </div>
              <div
                class="card"
                style="
                  width: 100%;
                  height: 50%;
                  max-width: 500px;
                  min-width: 250px;
                  margin: 20px;
                  border-radius: 10px;
                  box-shadow: 2px 30px 40px rgba(0, 0, 0, 0.12);
                  @media screen (max-width: 764px) {
                    width: 100%;
                    height: 20%;
                  }
                "
              >
                <div class="card-body">
                  <h5 class="card-title">Meet</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
