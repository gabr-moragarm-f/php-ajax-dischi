// Access-Control-Allow-Origin: app/server.php;
var app = new Vue({
  el: '#root',
  data:{
    prova: 'boooh',
    disksRender: [],
  },
  mounted() {
    let self = this;

    axios.get('http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php')
    .then(function(response) {
      self.disksRender = response.data;
    });
  },
  methods:{

  }
});
// http://localhost//Boolean/Day%2072/php-ajax-dischi/index.html
// http://localhost//Boolean/Day%2072/php-ajax-dischi/app/server.php
Vue.config.devtools = true;
