import ProgressBar from "progressbar.js";

window.onload = function() {
  var bodyelement = document.querySelector("body");
  $("#datapicker").datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
  });
  jQuery(function($) {
    $(".phone_number").inputmask({
      mask: "+38(999)999-9999",
    });
  });
  $("select").niceSelect();
  const slinky = $(".js-menu").slinky({
    title: true,
  });
  let next_slide_text = document.querySelectorAll(".back");
  let title = document.querySelectorAll(".title");
  title.forEach(element => {
    element.style.display = "none";
  });
  next_slide_text.forEach(element => {
    element.innerHTML = "Назад";
  });
  if (document.getElementsByClassName("wrapper")[0]) {
    document.querySelector("body").classList.add("black");
    var bodyhover = event => {
      let listlinksproduct = document.querySelectorAll(".list_links_product ul li");
      let containerlistproduct = document.querySelectorAll(".container_list_product>div");
      let SizeRegular = document.getElementsByClassName("size-regular")[0];

      let ContainerInformation = document.getElementsByClassName("container_information")[0];
      let BackgroundTabsContainer = document.getElementsByClassName("background_tabs_container")[0];
      let ListHoverProduct = document.getElementsByClassName("product_hover");
      if (event.target.classList[0] === "product_hover") {
        for (var i = 0; i < ListHoverProduct.length; i++) {
          ListHoverProduct[i].classList.remove("active");
        }
        event.target.classList.add("active");

        for (var i = 0; i < ListHoverProduct.length; i++) {
          if (ListHoverProduct[i].classList[1] === "active") {
            ContainerInformation.children[i].classList.add("active");
            BackgroundTabsContainer.children[i].classList.add("active");
          } else {
            BackgroundTabsContainer.children[i].classList.remove("active");
            ContainerInformation.children[i].classList.remove("active");
          }
        }
      }

      if (event.target.classList[0] === "list_hover") {
        for (var i = 0; i < listlinksproduct.length; i++) {
          listlinksproduct[i].classList.remove("active");
        }

        event.target.classList.add("active");
        for (var i = 0; i < listlinksproduct.length; i++) {
          if (listlinksproduct[i].classList[1] === "active") {
            containerlistproduct[i].classList.add("active");
          } else {
            containerlistproduct[i].classList.remove("active");
          }
        }
      }

      for (var i = 0; i < listlinksproduct.length; i++) {
        if (listlinksproduct[i].classList[1] === "active") {
          if (containerlistproduct[i].children[0] === undefined) {
          } else {
            for (var j = 0; j < containerlistproduct[i].children[0].children.length; j++) {
              if (j > 8) {
                SizeRegular.appendChild(containerlistproduct[i].children[0].children[j]);
              }
            }
          }
        }
      }
    };
    bodyelement.addEventListener("mouseover", bodyhover, false);
  } else {
    var bodyhover = event => {
      let listlinksproduct = document.querySelectorAll(".list_links_product ul li");
      let containerlistproduct = document.querySelectorAll(".container_list_product>div");
      let SizeRegular = document.getElementsByClassName("size-regular")[0];
      let e = document.querySelectorAll(".menu_header>li:nth-child(1)")[0];
      let el = document.querySelectorAll(".menu_header>li:nth-child(2)")[0];

      if (!e.contains(event.target) && !el.contains(event.target)) {
        document.querySelector("body").classList.remove("black");
      } else {
        document.querySelector("body").classList.add("black");
      }

      let ContainerInformation = document.getElementsByClassName("container_information")[0];
      let BackgroundTabsContainer = document.getElementsByClassName("background_tabs_container")[0];
      let ListHoverProduct = document.getElementsByClassName("product_hover");
      if (event.target.classList[0] === "product_hover") {
        for (var i = 0; i < ListHoverProduct.length; i++) {
          ListHoverProduct[i].classList.remove("active");
        }
        event.target.classList.add("active");

        for (var i = 0; i < ListHoverProduct.length; i++) {
          if (ListHoverProduct[i].classList[1] === "active") {
            ContainerInformation.children[i].classList.add("active");
            BackgroundTabsContainer.children[i].classList.add("active");
          } else {
            BackgroundTabsContainer.children[i].classList.remove("active");
            ContainerInformation.children[i].classList.remove("active");
          }
        }
      }

      if (event.target.classList[0] === "list_hover") {
        for (var i = 0; i < listlinksproduct.length; i++) {
          listlinksproduct[i].classList.remove("active");
        }

        event.target.classList.add("active");
        for (var i = 0; i < listlinksproduct.length; i++) {
          if (listlinksproduct[i].classList[1] === "active") {
            containerlistproduct[i].classList.add("active");
          } else {
            containerlistproduct[i].classList.remove("active");
          }
        }
      }

      for (var i = 0; i < listlinksproduct.length; i++) {
        if (listlinksproduct[i].classList[1] === "active") {
          if (containerlistproduct[i].children[0] === undefined) {
          } else {
            for (var j = 0; j < containerlistproduct[i].children[0].children.length; j++) {
              if (j > 8) {
                SizeRegular.appendChild(containerlistproduct[i].children[0].children[j]);
              }
            }
          }
        }
      }
    };
    bodyelement.addEventListener("mouseover", bodyhover, false);
  }

  var ProgressBar = require("progressbar.js");
  var isFalse = true;
  let VideoContent = document.getElementById("video_content");
  if (VideoContent) {
    var bar = new ProgressBar.Circle(container, {
      color: "#fff",
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 2,
      trailWidth: 1,
      easing: "easeInOut",
      duration: 6400,
      text: {
        autoStyleContainer: true,
      },
      from: {
        color: "#fff",
        width: 1,
      },
      to: {
        color: "#00f",
        width: 2,
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        } else {
          if (value === 100) {
            document.querySelectorAll(".button_video_effect")[0].style.display = "none";
            VideoContent.style.zIndex = "1";
            VideoContent.play();
          }
        }
      },
    });
    document.querySelectorAll(".video_information>div")[0].onclick = () => {
      if (isFalse === true) {
        bar.animate(1.0);
        isFalse = false;
      }
    };

    VideoContent.onclick = () => {
      if (VideoContent.paused === true) {
        VideoContent.play();
        document.querySelectorAll(".button_video_effect")[0].style.display = "none";
      } else {
        VideoContent.pause();
        document.querySelectorAll(".button_video_effect")[0].style.display = "block";
        document.querySelectorAll(".button_video_effect .small_white_elise .pause")[0].style.display = "block";
        document.querySelectorAll(".button_video_effect .small_white_elise img")[0].style.display = "none";
      }
      document.getElementById("container").onclick = () => {
        if (VideoContent.paused === true) {
          VideoContent.play();
          document.querySelectorAll(".button_video_effect")[0].style.display = "none";
        } else {
          VideoContent.pause();
          document.querySelectorAll(".button_video_effect")[0].style.display = "block";
          document.querySelectorAll(".button_video_effect .small_white_elise .pause")[0].style.display = "block";
          document.querySelectorAll(".button_video_effect .small_white_elise img")[0].style.display = "none";
        }
      };
    };
    VideoContent.onended = function(e) {
      bar.set(0);
      isFalse = true;
      VideoContent.style.zIndex = "-1";
      document.querySelectorAll(".button_video_effect")[0].style.display = "block";
      document.querySelectorAll(".button_video_effect .small_white_elise .pause")[0].style.display = "none";
      document.querySelectorAll(".button_video_effect .small_white_elise img")[0].style.display = "block";
    };
  }
  let sliderNumber = document.querySelectorAll(".slider_product_new .slick-dots li");
  if (sliderNumber.length === 0) {
  } else {
    let sliderNumberTwo = document.querySelectorAll(".slider_product_new .slick-dots li");
    let NumberOne = document.getElementsByClassName("number_one");
    let NumberTwo = document.getElementsByClassName("number_two");
    if(document.getElementsByClassName("number_two")[0]){
    NumberTwo[0].innerHTML = sliderNumber.length;
    NumberTwo[1].innerHTML = sliderNumberTwo.length;
    var clickArray = document.querySelectorAll(".two_section button.slick-arrow");
    document.querySelectorAll(".slider_product_new")[0].addEventListener("mouseup", () => {
      let sliderNumberTwo = document.querySelectorAll(".slider_product_new .slick-dots li.slick-active button")[0];
      NumberOne[0].innerHTML = sliderNumberTwo.innerHTML;
    });
    document.querySelectorAll(".slider_product_hits")[0].addEventListener("mouseup", () => {
      let sliderNumberThree = document.querySelectorAll(".slider_product_hits .slick-dots li.slick-active button")[0];
      NumberOne[1].innerHTML = sliderNumberThree.innerHTML;
    });
    clickArray.forEach(element => {
      element.onclick = () => {
        let sliderNumberTwo = document.querySelectorAll(".slider_product_new .slick-dots li.slick-active button")[0];
        let sliderNumberThree = document.querySelectorAll(".slider_product_hits .slick-dots li.slick-active button")[0];
        NumberOne[0].innerHTML = sliderNumberTwo.innerHTML;
        NumberOne[1].innerHTML = sliderNumberThree.innerHTML;
      };
    });
  }
    let Container = document.querySelectorAll(".container_slider_girl")[0];
    let ContainerSliderGirl = document.querySelectorAll(".container_slider_girl>div");
    let elementSlider = document.querySelectorAll(".image_size_slider");
    let clickClose = document.querySelectorAll(".close_button");
    var buttonLeft = document.querySelectorAll(".button_top_left");
    var buttonRight = document.querySelectorAll(".button_bottom_right");

    let hoverFunction = event => {
      for (let i = 0; i < ContainerSliderGirl.length; i++) {
        elementSlider[i].parentNode.classList.remove("border_none");
        ContainerSliderGirl[i].classList.remove("active");
      }
      event.currentTarget.classList.add("active");
    };

    ContainerSliderGirl.forEach(element => {
      element.addEventListener("mouseover", hoverFunction, false);
    });

    buttonRight.forEach((element, i) => {
      element.onclick = () => {
        for (let i = 0; i < elementSlider.length; i++) {
          elementSlider[i].parentNode.classList.add("border_none");
        }
        ContainerSliderGirl.forEach(element => {
          element.removeEventListener("mouseover", hoverFunction, false);
        });
        for (let j = 0; j < ContainerSliderGirl.length; j++) {
          if (ContainerSliderGirl[j].classList.length > 1) {
            if (j === 4) {
              console.log(j);
              for (let h = 0; h < ContainerSliderGirl.length; h++) {
                ContainerSliderGirl[h].classList.remove("active", "width_slider");
              }
              Container.appendChild(ContainerSliderGirl[ContainerSliderGirl.length - ContainerSliderGirl.length]);
              ContainerSliderGirl = document.querySelectorAll(".container_slider_girl>div");
              setTimeout(() => {
                ContainerSliderGirl[ContainerSliderGirl.length - 1].classList.add("active", "width_slider");
              }, 50);
            } else {
              for (let h = 0; h < ContainerSliderGirl.length; h++) {
                ContainerSliderGirl[h].classList.remove("active", "width_slider");
              }
              ContainerSliderGirl[j + 1].classList.add("active", "width_slider");
            }
            break;
          }
        }
      };
    });
    buttonLeft.forEach((element, i) => {
      element.onclick = () => {
        for (let i = 0; i < elementSlider.length; i++) {
          elementSlider[i].parentNode.classList.add("border_none");
        }
        ContainerSliderGirl.forEach(element => {
          element.removeEventListener("mouseover", hoverFunction, false);
        });
        for (let j = 0; j < ContainerSliderGirl.length; j++) {
          if (ContainerSliderGirl[j].classList.length > 1) {
            if (j === 0) {
              for (let h = 0; h < ContainerSliderGirl.length; h++) {
                ContainerSliderGirl[h].classList.remove("active", "width_slider");
              }
              Container.insertBefore(ContainerSliderGirl[ContainerSliderGirl.length - 1], Container.firstChild);

              ContainerSliderGirl = document.querySelectorAll(".container_slider_girl>div");
              setTimeout(() => {
                ContainerSliderGirl[ContainerSliderGirl.length - ContainerSliderGirl.length].classList.add("active", "width_slider");
              }, 5);
            } else {
              for (let h = 0; h < ContainerSliderGirl.length; h++) {
                ContainerSliderGirl[h].classList.remove("active", "width_slider");
              }
              ContainerSliderGirl[j - 1].classList.add("active", "width_slider");
            }
            break;
          }
        }
      };
    });

    elementSlider.forEach(element => {
      element.onclick = () => {
        ContainerSliderGirl.forEach(element => {
          element.removeEventListener("mouseover", hoverFunction, false);
        });
        for (let i = 0; i < elementSlider.length; i++) {
          elementSlider[i].parentNode.classList.add("border_none");
        }
        element.parentNode.classList.remove("border_none");
        element.parentNode.classList.remove("active", "width_slider");
        element.parentNode.classList.add("active");
        element.parentNode.classList.add("width_slider");
      };
    });

    clickClose.forEach(element => {
      element.onclick = () => {
        setTimeout(() => {
          ContainerSliderGirl.forEach(element => {
            element.addEventListener("mouseover", hoverFunction, false);
          });
        }, 500);
        for (let i = 0; i < elementSlider.length; i++) {
          elementSlider[i].parentNode.classList.remove("border_none");
        }
        element.parentNode.classList.remove("width_slider", "active");
        element.parentNode.classList.add("active");
        element.classList.add("close_anim");
        setTimeout(() => {
          element.classList.remove("close_anim");
        }, 1900);
      };
    });

    var blackElem = document.getElementById("black_menu");

    var blackSourceBottom = blackElem.getBoundingClientRect().top + window.pageYOffset - 50;

    window.onscroll = function() {
      if (document.getElementsByTagName("header")[0].classList.contains("anim_black") && window.pageYOffset < blackSourceBottom) {
        document.getElementsByTagName("header")[0].classList.remove("anim_black");
      } else if (window.pageYOffset > blackSourceBottom) {
        document.getElementsByTagName("header")[0].classList.add("anim_black");
      }
    };

    if (document.getElementsByTagName("header")[0].classList.contains("anim_black") && window.pageYOffset < blackSourceBottom) {
      document.getElementsByTagName("header")[0].classList.remove("anim_black");
    } else if (window.pageYOffset > blackSourceBottom) {
      document.getElementsByTagName("header")[0].classList.add("anim_black");
    }

    if (window.innerWidth <= 1330) {
      document.querySelectorAll(".container_icons")[0].appendChild(document.querySelectorAll(".content_information .text_header_info")[0]);
      document.querySelectorAll(".main__slider")[0].appendChild(document.querySelectorAll(".button_slider")[0]);
    }
    if (window.innerWidth <= 1025) {
      document.querySelectorAll(".product_hover").forEach((element, j) => {
        element.addEventListener("click", () => {
          for (var i = 0; i < document.querySelectorAll(".product_hover").length; i++) {
            document.querySelectorAll(".product_hover")[i].classList.remove("active");
            document.querySelectorAll(".background_tabs_container>div")[i].classList.remove("active");
            document.querySelectorAll(".container_information>div")[i].classList.remove("active");
          }
          document.querySelectorAll(".container_information>div")[j].classList.add("active");
          document.querySelectorAll(".background_tabs_container>div")[j].classList.add("active");
          element.classList.add("active");
        });
      });
    }
    if (window.innerWidth <= 980) {
      document.querySelectorAll(".container_top_image")[0].appendChild(document.querySelectorAll(".banner")[0]);
    }
    if (window.innerWidth <= 730) {
      function element() {
        document.querySelectorAll(".items_list.active .list_tabs_information ul").forEach((element, i) => {
          var length = element.children.length;
          if (i >= 1) {
            for (var j = 0; j < length; j++) {
              document.querySelectorAll(".items_list.active .list_tabs_information ul")[0].appendChild(element.children[element.children.length - element.children.length]);
            }
          }
        });
        var appendChild = document.querySelectorAll(".items_list.active .list_tabs_information ul:nth-child(1) li");
        appendChild.forEach((element, i) => {
          if (i >= 8) {
            document.querySelectorAll(".items_list.active .list_tabs_information ul")[1].appendChild(element);
          }
        });
      }
      element();
      document.querySelectorAll("product_hover").forEach(element => {
        element.onclick = () => {
          element();
          element.classList.add("active");
        };
      });
    }
  }
  if (document.getElementsByClassName("burger_menu")[0]) {
    document.getElementsByClassName("burger_menu")[0].onclick = () => {
      document.getElementsByClassName("burger_menu")[0].classList.add("active");
      document.querySelectorAll(".menu__wrapper")[0].classList.add("active");
      document.querySelectorAll(".menu__wrapper .close_button_menu")[0].onclick = () => {
        document.querySelectorAll(".menu__wrapper")[0].classList.remove("active");
        document.getElementsByClassName("burger_menu")[0].classList.remove("active");
      };
    };
  }

  let listelement = document.querySelectorAll(".sorting_content > *");

  function functClcik(e) {
    for (var i = 0; i < listelement.length; i++) {
      listelement[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  }
  for (let i = 0; i < listelement.length; i++) {
    listelement[i].addEventListener("click", functClcik, false);
  }

  $(document).ready(function() {
    // появление/затухание кнопки #back-top
    $(function() {
      // прячем кнопку #back-top

      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $(".up_button").fadeIn();
        } else {
          $(".up_button").fadeOut();
        }
      });

      // при клике на ссылку плавно поднимаемся вверх
      $(".up_button").click(function() {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          800,
        );
        return false;
      });
    });
  });

  if (document.querySelectorAll(".list_use>li:nth-child(3)")[0]) {
    document.querySelectorAll(".list_use>li:nth-child(3)")[0].onclick = () => {
      document.getElementsByClassName("close_button_registration")[0].parentNode.classList.add("active");
      document.body.classList.add("blur");
    };
    if (document.querySelectorAll(".wish_list_info_regestation")[0]) {
      document.querySelectorAll(".wish_list_info_regestation")[0].onclick = () => {
        document.getElementsByClassName("close_button_registration")[0].parentNode.classList.add("active");
        document.body.classList.add("blur");
      };
    }
    if (document.querySelectorAll(".close_button_registration")[0]) {
      document.querySelectorAll(".close_button_registration")[0].onclick = () => {
        document.querySelectorAll(".close_button_registration")[0].parentNode.classList.remove("active");
        document.body.classList.remove("blur");
      };

      document.querySelectorAll(".container_center_regestration .new_pesons .all_button")[0].onclick = () => {
        document.querySelectorAll(".container_center_regestration")[0].classList.remove("active");
        document.querySelectorAll(".container_center_autorization")[0].classList.add("active");
      };
      document.querySelectorAll(".container_center_autorization .registration_forms .all_button")[0].onclick = () => {
        document.querySelectorAll(".container_center_autorization")[0].classList.remove("active");
        document.querySelectorAll(".container_center_regestration")[0].classList.add("active");
      };
    }
  }
  if (window.innerWidth <= 1025) {
    if (document.querySelectorAll(".m_button")[0]) {
      document.querySelectorAll(".m_button")[0].appendChild(document.querySelectorAll(".container_center_regestration .new_pesons")[0]);
    }

    if (document.querySelectorAll(".registration_forms")[1]) {
      document.querySelectorAll(".registration_forms")[1].appendChild(document.querySelectorAll(".container_center_autorization .new_pesons")[0]);
    }
  }
  // if (document.querySelectorAll(".popup_registration")[0]) {
  //     if (document.querySelectorAll(".popup_registration")[0].classList[1] === "active") {
  //         document.body.classList.add("blur");
  //     } else {
  //         document.body.classList.remove("blur");
  //     }
  // }

  if (window.innerWidth <= 1330) {
    if (document.getElementsByClassName("clearance_container")[0]) {
      document.querySelectorAll(".menu_header")[0].classList.add("number_block");
    }
  }
  if (document.querySelectorAll(".search_input_center input")[0]) {
    document.querySelectorAll(".search_input_center_button_clear")[0].onclick = () => {
      document.querySelectorAll(".search_input_center input")[0].value = "";
    };
  }
  document.querySelectorAll(".tabs_links>div").forEach(element => {
    element.onclick = index => {
      document.querySelectorAll(".tabs_links>div").forEach((element, i) => {
        element.classList.remove("active");
        document.getElementsByClassName("container_tabs")[i].classList.remove("active");
      });

      element.classList.add("active");

      document.querySelectorAll(".tabs_links>div").forEach((element, i) => {
        if (document.querySelectorAll(".tabs_links>div")[i].classList[0] === "active") {
          document.getElementsByClassName("container_tabs")[i].classList.add("active");
          if (document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0] === undefined) {
          } else {
            document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.remove("anim_height_finish");
          }
        }
      });
    };
  });
  if (document.querySelectorAll(".container_tabs>div>.edit_click")[0]) {
    document.querySelectorAll(".container_tabs>div>.edit_click")[0].onclick = () => {
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.remove("anim_height_finish");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.remove("anim_finish");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.add("active");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.add("anim_height");
      setTimeout(() => {
        document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].style.display = "none";
      }, 470);
    };

    document.querySelectorAll(".top_text_personal>.edit_click")[0].onclick = () => {
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.remove("active");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.add("anim_finish");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.remove("anim_height");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].style.display = "block";
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.add("anim_height_finish");
    };

    document.querySelectorAll(".container_tabs>div>.edit_click")[1].onclick = () => {
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.remove("anim_height_finish");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.remove("anim_finish");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.add("active");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.add("anim_height");
      setTimeout(() => {
        document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].style.display = "none";
      }, 470);
    };

    document.querySelectorAll(".top_text_personal>.edit_click")[1].onclick = () => {
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.remove("active");
      document.querySelectorAll(".container_tabs.active .new_persons")[0].classList.add("anim_finish");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.remove("anim_height");
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].style.display = "block";
      document.querySelectorAll(".container_tabs.active .new_persons>div:nth-child(2)")[0].classList.add("anim_height_finish");
    };
  }
  if (window.innerWidth <= 980) {
    if (document.querySelectorAll(".top_links_container>div:nth-child(1)>div:nth-child(1)")[0]) {
      document.querySelectorAll(".top_links_container>div:nth-child(2)>div:nth-child(1)")[0].appendChild(document.querySelectorAll(".top_links_container>div:nth-child(1)>div:nth-child(1)")[0]);
    }
  }

  document.querySelectorAll(".right_header_product .all_container_header .text_header").forEach(element => {
    element.onclick = () => {
      if (element.parentNode.classList[1] === "active") {
        element.parentNode.classList.remove("active");
      } else {
        element.parentNode.classList.add("active");
      }
    };
  });

  if (document.querySelectorAll(".tabs_blogs_header>div")[0]) {
    document.querySelectorAll(".tabs_blogs_header>div").forEach((element, i) => {
      if (element.classList[0] === "active") {
        if (window.innerWidth <= 660) {
          document.querySelectorAll(".tabs_blogs_header>div")[i].appendChild(document.querySelectorAll(".container_blogs_tabs>div")[i].cloneNode(true));
        }
      }
    });
    document.querySelectorAll(".tabs_blogs_header>div").forEach(element => {
      element.onclick = () => {
        if (window.innerWidth >= 660) {
          document.querySelectorAll(".tabs_blogs_header>div").forEach(element => {
            element.classList.remove("active");
          });
          element.classList.add("active");
        } else {
          if (element.classList[0] === "active") {
            element.classList.remove("active");
          } else {
            element.classList.add("active");
          }
        }

        document.querySelectorAll(".tabs_blogs_header>div").forEach((element, i) => {
          document.querySelectorAll(".container_blogs_tabs>div")[i].classList.remove("active");
          if (element.classList[0] === "active") {
            document.querySelectorAll(".container_blogs_tabs>div")[i].classList.add("active");
            if (window.innerWidth <= 660) {
              if (document.querySelectorAll(".tabs_blogs_header>div")[i].children[1]) {
                document.querySelectorAll(".tabs_blogs_header>div")[i].children[1].remove();
              }
              document.querySelectorAll(".tabs_blogs_header>div")[i].appendChild(document.querySelectorAll(".container_blogs_tabs>div")[i].cloneNode(true));
            }
          }
        });
      };
    });
  }
  if (window.innerWidth <= 1330) {
    if (document.querySelectorAll(".containter_info_contacts>div:nth-child(1)")[0]) {
      document.querySelectorAll(".containter_info_contacts>div:nth-child(1)")[0].appendChild(document.querySelectorAll(".container_contact_time")[0]);
    }
  }

  var button_blur = [
    document.querySelectorAll(".buy_links_container  .all_button")[1],
   document.querySelectorAll(".buy_links_container  .all_button")[0],
    document.querySelectorAll(".forms_contact .all_button")[0],
     document.querySelectorAll(".summa_container_buy .all_button")[0],
      document.querySelectorAll(".password_container .all_button")[0],
       document.querySelectorAll(".items_head_text a")[0]];
  document.querySelectorAll(".wish_list_click").forEach(element => {
    element.onclick = () => {
      document.querySelectorAll(".wish_list_pop")[0].classList.add("active");
    };
    button_blur.push(element);
  });

  document.querySelectorAll(".wish_list_click").forEach(element => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".wish_list_pop")[0].classList.add("active");
      setTimeout(() => {
        document.querySelectorAll(".wish_list_pop")[0].classList.remove("active");
        document.body.classList.remove("blur");
      }, 1500);
    });
  });

  // button_blur.forEach(element => {
  //     if (element === undefined) {

  //     } else {
  //         element.onclick = () => {
  //             document.body.classList.add("blur");
  //         }
  //     }
  // })

  document.querySelectorAll(".button_close").forEach(element => {
    element.onclick = () => {
      element.parentNode.parentNode.classList.remove("active");
      document.body.classList.remove("blur");
    };
  });

  // document.querySelectorAll(".pop_up").forEach(element => {
  //     if (element.style.display === "none") {
  //         document.body.classList.remove("blur");
  //     } else {
  //         document.body.classList.add("blur");
  //     }
  // })
  if (window.innerWidth <= 710) {
    if (document.querySelectorAll(".personal_container .text_header_all")[0]) {
      document.querySelectorAll(".personal_container .text_header_all")[0].appendChild(document.getElementsByClassName("close_personal")[0]);
    }
  }



  document.querySelectorAll(".pagintaion ul>li").forEach(element => {
    element.onmouseover = e => {
      document.querySelectorAll(".pagintaion ul>li").forEach(element => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    };
  });
  // document.addEventListener("click", event => {
  //   var element_search = document.querySelectorAll("body header")[0];
  //   if (!element_search.contains(event.target)) {
  //     if (document.querySelectorAll(".list_use>li:nth-child(2)")[0]) {
  //       document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList.remove("active");
  //       bodyelement.addEventListener("mouseover", bodyhover, false);
  //       document.body.classList.remove("black");
  //       document.body.classList.remove("anim_black");
  //     }
  //   } else {
  //   }
  // });

  if (document.querySelectorAll(".list_use>li:nth-child(2) svg")[0]) {
    document.querySelectorAll(".list_use>li:nth-child(2) svg")[0].onclick = () => {
      if (document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList[0] === "active") {
        document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList.remove("active");
        bodyelement.addEventListener("mouseover", bodyhover, false);
        document.body.classList.remove("anim_black");
      } else {
        document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList.add("active");
        bodyelement.removeEventListener("mouseover", bodyhover, false);
        document.body.classList.add("black");
        document.body.classList.add("anim_black");
      }
    };
  }

  let elementlist = document.querySelectorAll(".menu_header>li:nth-child(1)")[0];
  let elementlistTwo = document.querySelectorAll(".menu_header>li:nth-child(2)")[0];
  if (elementlist) {
    elementlist.addEventListener("mouseover", function() {
      bodyelement.addEventListener("mouseover", bodyhover, false);
      if (document.querySelectorAll(".list_use>li:nth-child(2)")[0]) {
        document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList.remove("active");
        document.querySelector("body").classList.remove("anim_black");
      }
    });
    if (elementlistTwo) {
      elementlistTwo.addEventListener("mouseover", function() {
        bodyelement.addEventListener("mouseover", bodyhover, false);
        if (document.querySelectorAll(".list_use>li:nth-child(2)")[0]) {
          document.querySelectorAll(".list_use>li:nth-child(2)")[0].classList.remove("active");
          document.querySelector("body").classList.remove("anim_black");
        }
      });
    }
  }
  if (document.querySelectorAll(".password_none a")[0]) {
    document.querySelectorAll(".password_none a")[0].onclick = () => {
      document.querySelectorAll(".password_reload")[0].classList.add("active");
      document.body.classList.add("blur");
    };
    if (document.querySelectorAll(".password_reload ")[0]) {
      document.querySelectorAll(".password_reload")[0].onclick = () => {
        document.body.classList.add("blur");
      };
    }
  }
};
