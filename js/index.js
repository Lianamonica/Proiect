    ons.getScriptPage().onInit = function() {
      // Hooks are bound to the page element
      this.querySelector('#toolbar-title').innerHTML = 'Poziții participanți';

   //   this.onShow = function() {
         //  La incarcare relevez pozitia mea
   //      navigator.geolocation.getCurrentPosition(succes, eroare);
   //   };
    };
/*
function addMarkers() {
   var membrii = [];
   membrii.push({
      position: {
         lat: 46.768906,
         lng: 23.584875
      },
      map: map,
      label: 'A'
   });

   membrii.push({
      position: {
         lat: 46.771228,
         lng: 23.625217
      },
      map: map,
      label: 'B'
   });

   for (var i = 0; i < membrii.length; i++) {
      var marker = new google.maps.Marker(membrii[i]);
   }
}

function succes(position) {
   var centru = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
   };

   //  Afisez harta
   map = new google.maps.Map(document.getElementById('map'),
      {
         center: centru, zoom: 15
      });

   var marker = new google.maps.Marker({
      position: centru,
      map: map,
      label: 'Eu'
   });
   //  Apelez addMarkers()
   addMarkers();
}

function eroare(error) { }
*/