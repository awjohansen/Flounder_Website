

var token = '4204090804.2626588.af19ceeca0e84535a8f8d976cb35e129',
      num_photos = 24;

  $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success: function(data){
          console.log(data);
          for( x in data.data ){
              $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
          }
      },
      error: function(data){
          console.log(data);
      }


    });
