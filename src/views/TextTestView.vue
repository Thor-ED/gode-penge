<template>
  <div class="wrapper-texttestview">
    <p class="video-title">
      Talking Tech and AI with Google CEO Sundar Pichai!
    </p>
    <p class="video-stats">3.4M views &#183; 6 months ago</p>
    <p class="creator-name">Marques Brownlee &#10003;</p>
    <p class="sale-banner-text">
      Shop early for the best selection of holiday favourites.
      <span class="underline-text">Shop now &#62; </span>
    </p>
  </div>
</template>

<style>
.wrapper-texttestview {
  min-height: 300px;
  background-color: var(--color-primary);
}

p {
  font-family: Arial;
}

.video-title {
  padding-top: 20px;
  width: 300px;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
}

.video-stats {
  font-size: 14px;
  color: rgb(96, 96, 96);
}

.creator-name {
  font-size: 14px;
  color: rgb(96, 96, 96);
}

.sale-banner-text {
  background-color: rgb(227, 65, 64);
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.underline-text:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
