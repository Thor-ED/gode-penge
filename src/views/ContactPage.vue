<template>
  <div id="ex-contact-page" class="container-fluid background-contact">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3">
            <div class="d-flex flex-column align-items-start">
              <strong class="mb-2 headline">støtte</strong>
              <div
                class="d-flex flex-wrap align-items-start"
                style="gap: 20px; min-width: 232px"
              >
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
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.headline {
  display: block;
  color: var(--color-white);
  font-size: 1.2rem;
  padding-bottom: 18px;
}

.normal-text {
  color: var(--color-white);
}

.link-text {
  color: var(--color-white);
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

#logo-img-buttom {
  width: auto;
  display: block;
  height: 50px;
}

.background-contact {
  background-color: var(--color-red);
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 60px;
}
</style>
