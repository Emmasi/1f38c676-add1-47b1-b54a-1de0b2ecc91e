<template>
  <div class="border-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="breadcrumb d-flex flex-wrap py-3 m-0">
            <li class="m-0 fs-6 font-weight-bolder">
              <a href="/" class="text-dark text-decoration-none">Startsida</a>
            </li>
            <li class="m-0 fs-6 font-weight-bolder">
              <a href="/" class="text-dark text-decoration-none">Känn dig trygg</a>
            </li>
            <li class="m-0 fs-6 active">Så undviker du bedrägerier och ID-kapning</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1199px) {
  .breadcrumb-container {
    padding-top: 10px;
  }
}
.active {
  color: #5c5a5a;
}

.breadcrumb li:not(:first-child)::before {
  content: "/ ";
  color: rgb(204, 204, 204);
  padding: 0px 5px;
}
</style>
