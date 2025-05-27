<template>
  <div class="wrapper-test">
    <div class="button-holder">
      <button class="subscripe-button">SUBSCRIBE</button>
      <button class="join-button">JOIN</button>
      <button class="tweet-button">Tweet</button>
    </div>
  </div>
</template>

<style>
.subscripe-button {
  background-color: rgb(204, 0, 0);
  color: white;
  border-width: 0px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  transition: opacity 0.3s;
}

.subscripe-button:hover {
  opacity: 0.7;
}

.subscripe-button:active {
  opacity: 0.4;
}

.join-button {
  background-color: white;
  border-width: 1px;
  border-color: blue;
  color: blue;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  transition: background-color 0.3s, color 0.15s;
}

.join-button:hover {
  background-color: blue;
  color: white;
}

.join-button:active {
  opacity: 0.6;
}

.tweet-button {
  font-size: 15px;
  background-color: rgb(29, 155, 240);
  color: white;
  padding: 7px 16px;
  border: none;
  font-weight: bold;
  border-radius: 50px;
  line-height: 22.5px;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.tweet-button:hover {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

.content-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  column-gap: 20px;
}

.wrapper-test {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-height: 200px;
}

.button-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
