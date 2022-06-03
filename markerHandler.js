AFRAME.registerComponent("markerhandler", {
    init: async function () {
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found")
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost")
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var ratingButton = document.getElementById("rating-button");
      var orderButtton = document.getElementById("order-button");

      ratingButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Rate Toy",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks for Ordering!",
          text: "Your order will soon arrive!"
        });
      });
    },
  
    handleMarkerLost: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });