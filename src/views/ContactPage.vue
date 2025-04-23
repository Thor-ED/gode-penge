<template>
  <div
    id="ex-contact-page"
    class="container-fluid background-contact px-5 py-5"
  >
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div
            class="col-md-3 d-flex justify-content-center align-items-center"
          >
            <img
              src="GP_Logo_hjemmeside.png"
              id="logo-img-top"
              class="img-fluid"
            />
          </div>
          <div class="col-md-3">
            <strong class="mb-2 headline">Kontakt os</strong>
            <p></p>
            <p class="normal-text">
              Sebastian Solander-Bruus <br />
              sebastian@godepenge.dk
            </p>
            <p class="normal-text">
              Jonas Jensen <br />
              jonas@godepenge.dk
            </p>
          </div>
          <div class="col-md-3">
            <strong class="mb-2 headline">Om projektet</strong>
            <p></p>
            <p class="link-text">
              <a href="Tak-til.pdf" download>Tak til (pdf)</a><br />
              <a href="Disclaimer.pdf" download>Disclaimer (pdf)</a>
            </p>
            <p class="link-text">
              <a href="https://www.godepenge.dk/" target="_blank"
                >Gode Penge hjemmeside</a
              >
            </p>
          </div>
          <div class="col-md-3">
            <strong class="mb-2 headline">Om projektet</strong>
            <p></p>
            <p class="normal-text">
              Gode Investeringer er støttet med fondsmidler under den
              alemnnyttige forening Gode Penge. Projektet har til formål at
              oplyse om konsekvenserne ved vores nuværende investeringssystem og
              hvordan vi tage handling.
            </p>
          </div>
        </div>
        <div class="d-flex flex-column align-items-start">
          <strong class="mb-2 headline">støtte</strong>
          <div class="d-flex flex-wrap align-items-start" style="gap: 20px">
            <img
              src="FS-Fond-logo.png"
              id="logo-img-buttom"
              class="img-fluid"
            />
            <img
              src="tuborgfondet-logo.png"
              id="logo-img-buttom"
              class="img-fluid logo-img"
            />
            <img
              src="KR-Foundation_Logo.png"
              id="logo-img-buttom"
              class="img-fluid logo-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.headline {
  color: white;
  font-size: 1.2rem;
}

.normal-text {
  color: white;
}

.link-text {
  color: white;
  cursor: pointer;
}

.link-text a {
  all: unset;
  color: inherit;
  text-decoration: underline;
}

.link-text a:hover {
  text-decoration: none;
}

#logo-img-top {
  width: 150px;
  height: auto;
}

#logo-img-buttom {
  width: auto;
  height: 50px;
}

.background-contact {
  background-color: #0057ff;
}
</style>
