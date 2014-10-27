var data = {
  albums : [
  {title: 'the guilty have no past',releasedate: '1997',  artist: {name: 'death in june'}},
  {title: 'the boatmans call', releasedate: '1998', artist: {name: 'nick cave' }},
  {title: 'all the pretty little horses', releasedate: '2008', artist: {name:'current 93'}}
  ]
};

var rendered = Handlebars.templates['albums'];

$('.album_list').append(rendered(data));
