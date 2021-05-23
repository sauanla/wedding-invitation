$(() => $.imgPreview());
$.imgPreview({
  el: "[data-pic]",
  attr: "data-pic",
  attrTitle: "data-pic-title",
  attrDesc: "data-pic-desc",
  mode: "single",
  isMaskShow: true,
  maskBgColor: "rgba(0,0,0,.5)"
});
