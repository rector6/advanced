<template>
  <div class="section" id="section">
    <div class="container">
      <div class="row">
        <h1 class="work-text pb-4 pt-4">How it Works</h1>
        <div class="section d-flex justify-content-center">
          <div class="image-section pb-5">
            <img src="../assets/doc.jpg" class="image" />
          </div>
          <div class="col-6 pb-2">
            <div class="card-section pb-5">
              <div
                class="card"
                style="
                  width: 100%;
                  height: 80px;
                  max-width: 500px;
                  min-width: 300px;
                  margin: 10px;
                  border-radius: 10px;
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
                  margin: 10px;
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
                  margin: 10px;
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

<style scoped>
#section {
  min-height: 80vh;
  width: 100vw;
  background: rgb(240, 237, 237);
  /* margin: 20px; */
}
.section {
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}
.work-text {
  text-align: center;
  color: black;
}
.image-section {
  width: 50%;
  padding-left: 13px;
}
.image {
  height: 350px;
  width: 350px;
  align-items: center;
  float: right;
  justify-content: center;
  border-bottom-right-radius: 5em;
  border-top-left-radius: 5em;
  border: none;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.34);
}
.card-img {
  width: 50px;
  margin: 10px;
  border-radius: 30px 30px;
  left: 20px;
}
.card-section {
  justify-content: center;
  align-items: center;
  width: 100%;
}
h5 {
  font-size: 20px;
  font-weight: 700;
  color: black;
  font-family: cursive;
  cursor: pointer;
}
.card:hover {
  background-color: blue;
  color: white;
  transition: 0.5sec;
}
/*-------------End of section ---------*/
#question {
  min-height: 40vh;
  width: 100%;
  background-color: rgb(231, 210, 230);
}
.q-head {
  font-size: 30px;
  font-weight: 700;
  color: rgb(48, 42, 42);
  background: transparent;
}
.card-subbody p {
  font: 1em sans-serif;
  font-weight: lighter;
}
@media screen and (max-width: 600) {
  .section {
    min-height: 80vh;
    width: 100vw;
  }
  .image {
    height: 200px;
    width: 200vw;
    margin: 50px;
  }
}
</style>
