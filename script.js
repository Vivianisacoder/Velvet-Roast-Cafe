"use strict";

/**
 * PRELOAD
 *
 * loading will end after the document is fully loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded"); // Add 'loaded' class to preloader
  document.body.classList.add("loaded"); // Add 'loaded' class to body
});
