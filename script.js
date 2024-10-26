"use strict";
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
let exp_section = document.getElementById("exp");
let exp_btn = document.getElementById("exp_btn");
let obj_section = document.getElementById("obj");
let obj_btn = document.getElementById("obj_btn");
let skl_section = document.getElementById("skl");
let skl_btn = document.getElementById("skl_btn");
let edu_section = document.getElementById("edu");
let edu_btn = document.getElementById("edu_btn");
let con_section = document.getElementById("con");
let con_btn = document.getElementById("con_btn");
ref_btn?.addEventListener("click", () => {
    ref_section.classList.toggle("hide");
});
exp_btn?.addEventListener("click", () => {
    exp_section.classList.toggle("hide");
});
obj_btn?.addEventListener("click", () => {
    obj_section.classList.toggle("hide");
});
skl_btn?.addEventListener("click", () => {
    skl_section.classList.toggle("hide");
});
edu_btn?.addEventListener("click", () => {
    edu_section.classList.toggle("hide");
});
con_btn?.addEventListener("click", () => {
    con_section.classList.toggle("hide");
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
