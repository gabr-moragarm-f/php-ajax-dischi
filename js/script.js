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

      self.genres = response.data.genres;

      self.sortJson(self.disks, 'title');

      self.sortJson(self.genres);
    });
  },
  methods:{
    prova: function() {
      alert('prova');
    },
    sortJson: function(array, key) {
      function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
      }

      if (key) {
        array.sort(function(a, b) {
          return compareStrings(a[key], b[key]);
        })
      }else {
        array.sort(function(a, b) {
          return compareStrings(a, b);
        })
      }
    },
    filterGenre: function() {
      let self = this;

      axios.get('http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php?genre=' + this.selectedGenre)
      .then(function(response) {
        self.disks = response.data.disks;

        self.sortJson(self.disks, 'title');
      });
    }
  },
});
// http://localhost//Boolean/Day%2072/php-ajax-dischi/index.html
// http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php
Vue.config.devtools = true;
