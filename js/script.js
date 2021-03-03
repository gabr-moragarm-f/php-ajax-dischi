// Access-Control-Allow-Origin: app/server.php;
var app = new Vue({
  el: '#root',
  data:{
    genres: [],
    selectedGenre: '',
    disks: [],
  },
  mounted() {
    let self = this;

    axios.get('http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php')
    .then(function(response) {
      self.disks = response.data.disks;

      alert()

      sortJson(self.disks, 'title');

      // function compareStrings(a, b) {
      //   // Assuming you want case-insensitive comparison
      //   a = a.toLowerCase();
      //   b = b.toLowerCase();
      //
      //   return (a < b) ? -1 : (a > b) ? 1 : 0;
      // }
      //
      // self.disks.sort(function(a, b) {
      //   return compareStrings(a.title, b.title);
      // })

      self.genres = response.data.genres;
    });
  },
  methods:{
    sortJson: function(array, key) {
      function compareStrings(a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
      }

      array.sort(function(a, b) {
        return compareStrings(a[key], b[key]);
      })
    },
    filterGenre: function() {
      let self = this;

      axios.get('http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php?genre=' + this.selectedGenre)
      .then(function(response) {
        self.disks = response.data.disks;
      });
    }
  }
});
// http://localhost//Boolean/Day%2072/php-ajax-dischi/index.html
// http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php
Vue.config.devtools = true;
