import StickySidebar from "../../../bower_components/sticky-sidebar/dist/sticky-sidebar";

if (document.getElementsByClassName("button_block_filter")[0]) {
  document.getElementsByClassName("button_block_filter")[0].onclick = () => {
    if (document.getElementsByClassName("filter_left_block")[0].classList[1] === "active") {
      document.getElementsByClassName("filter_left_block")[0].classList.remove("active");
    } else {
      document.getElementsByClassName("filter_left_block")[0].classList.add("active");
    }
  };

  document.querySelectorAll(".filters > div>.header_name_filter").forEach(element => {
    element.onclick = () => {
      if (element.parentNode.classList[0] === "active") {
        element.parentNode.classList.remove("active");
      } else {
        element.parentNode.classList.add("active");
      }
    };
  });

  document.querySelectorAll(".container_filters > ul .header_name_filter").forEach(element => {
    element.onclick = () => {
      if (element.classList[1] === "active") {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    };
  });

  document.querySelectorAll(".button_block_filter")[0].addEventListener("click", () => {
    if (document.getElementsByClassName("video_information")[0].classList[1] === "size") {
      document.getElementsByClassName("video_information")[0].classList.remove("size");
      document.getElementsByClassName("image_items")[0].classList.remove("size");
      if (window.innerWidth >= 980) {
        document.getElementsByClassName("image_size_new")[0].classList.remove("size");
      }
    } else {
      document.getElementsByClassName("video_information")[0].classList.add("size");
      document.getElementsByClassName("image_items")[0].classList.add("size");
      if (window.innerWidth >= 980) {
        document.getElementsByClassName("image_size_new")[0].classList.add("size");
      }
    }
  });

  if (window.innerWidth <= 660) {
    document.querySelectorAll(".filters>span")[0].onclick = () => {
      document.querySelectorAll(".filter_left_block")[0].classList.remove("active");
    };
    $(".text_header_catalog").readmore({
      maxHeight: 80,
      speed: 200,
      moreLink: '<a href="#">Read more...</a>',
      afterToggle: function(trigger, element, expanded) {
        if (!expanded) {
          document.querySelectorAll(".read_more")[0].appendChild(document.getElementsByClassName("readmore-js-toggle")[0]);
          document.querySelectorAll(".text_header_catalog")[0].classList.remove("active");
        } else {
          document.querySelectorAll(".text_header_catalog>p")[0].appendChild(document.getElementsByClassName("readmore-js-toggle")[0]);
          document.querySelectorAll(".text_header_catalog")[0].classList.add("active");
        }
      },
    });
    document.getElementsByClassName("read_more")[0].appendChild(document.getElementsByClassName("readmore-js-toggle")[0]);
  }
  if (document.querySelectorAll(".wrapper.catalog")) {
    if (window.innerWidth <= 660) {
      document.getElementsByClassName("sorting_content")[0].appendChild(document.getElementsByClassName("button_block_filter")[0]);
    }
  }
}
if (document.getElementsByClassName("list_adress")[0]) {
  if (window.innerWidth <= 660) {
    document.getElementsByClassName("container_block_links")[0].appendChild(document.getElementsByClassName("list_adress")[0]);
  }
}
if (document.querySelectorAll(".color label").length === 0) {
} else {
  document.querySelectorAll(".color label").forEach(element => {
    element.style.background = "#" + element.classList[0];

    element.onclick = () => {
      if (element.parentNode.classList[0] === "active") {
        element.parentNode.classList.remove("active");
      } else {
        element.parentNode.classList.add("active");
      }
    };
  });

  document.querySelectorAll(".size label").forEach(element => {
    element.style.background = "#" + element.classList[0];

    element.onclick = () => {
      if (element.parentNode.classList[0] === "active") {
        element.parentNode.classList.remove("active");
      } else {
        element.parentNode.classList.add("active");
      }
    };
  });
}

if (document.getElementsByClassName("container_product")[0]) {
  if (document.querySelectorAll(".color_pick")[0]) {
    let massive = [];
    document.querySelectorAll(".color_pick input").forEach((element, i) => {
      document.querySelectorAll(".color_pick input")[i].parentNode.classList.remove("active");
      if (element.disabled === true) {
        element.parentNode.style.display = "none";
      } else {
        massive.push(document.querySelectorAll(".color_pick input")[i]);
      }
    });

    massive[massive.length - massive.length].parentNode.classList.add("active");
  }
  if (document.querySelectorAll(".items_head_text")[0]) {
    document.querySelectorAll(".items_head_text").forEach((element, i) => {
      element.onclick = () => {
        if (element.parentNode.classList[1] === "active") {
          element.parentNode.classList.remove("active");
        } else {
          element.parentNode.classList.add("active");
        }
      };
    });
  }

  let sliderNumberTwo = document.querySelectorAll(".slider_product_hits .slick-dots li");

  let NumberOne = document.getElementsByClassName("number_one");
  let NumberTwo = document.getElementsByClassName("number_two");
  if (document.getElementsByClassName("number_two")[0]) {
    NumberTwo[0].innerHTML = sliderNumberTwo.length;
    var clickArray = document.querySelectorAll(".slider_content_product button.slick-arrow");
    document.querySelectorAll(".slider_product_hits")[0].addEventListener("mouseup", () => {
      let sliderNumberThree = document.querySelectorAll(".slider_product_hits .slick-dots li.slick-active button")[0];
      NumberOne[0].innerHTML = sliderNumberThree.innerHTML;
    });
    clickArray.forEach(element => {
      element.onclick = () => {
        let sliderNumberThree = document.querySelectorAll(".slider_product_hits .slick-dots li.slick-active button")[0];
        NumberOne[0].innerHTML = sliderNumberThree.innerHTML;
      };
    });
  }
  if (window.innerWidth >= 1330) {
    var sidebar = new StickySidebar(".info_container", {
      bottomSpacing: 220,
    });
  }
  if (window.innerWidth <= 730) {
    if (document.querySelectorAll(".image_functional")[0]) {
      document.querySelectorAll(".image_functional")[0].appendChild(document.querySelectorAll(".info_container .text_header_all")[0]);
      document.querySelectorAll(".image_functional")[0].appendChild(document.querySelectorAll(".article")[0]);
      document.querySelectorAll(".new_label")[0].appendChild(document.querySelectorAll(".functional")[0]);
    }
  }
}
