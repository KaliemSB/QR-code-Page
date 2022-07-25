<template>
  <main :class="wrapper().className">
    <div :class="card().className">
      <img src="image-qr-code.png" alt="QR Code" draggable="false" />
      <div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { css } from "../stitches.config";

const wrapper = css({
  display: "grid",
  placeContent: "center",
  height: "inherit",
});

const card = css({
  background: "white",
  borderRadius: "$4",
  padding: "1rem",
  textAlign: "center",
  maxWidth: "375px",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  img: {
    borderRadius: "$4",
    width: "100%",
  },
  div: {
    padding: "1rem 1rem 0 1rem",
    userSelect: "none",
    h1: {
      fontSize: "1.6rem",
      color: "$darkBlue",
    },
    p: {
      color: "$grayishBlue",
      margin: "1rem 0 1.6rem 0",
      fontSize: "1rem",
    },
  },
});
</script>
