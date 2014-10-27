(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albums'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<li>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.artist : depth0)) != null ? stack1.name : stack1), depth0))
    + " released "
    + escapeExpression(((helper = (helper = helpers.releasedate || (depth0 != null ? depth0.releasedate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"releasedate","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.albums : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
var data = {
  albums : [
  {title: 'the guilty have no past',releasedate: '1997',  artist: {name: 'death in june'}},
  {title: 'the boatmans call', releasedate: '1998', artist: {name: 'nick cave' }},
  {title: 'all the pretty little horses', releasedate: '2008', artist: {name:'current 93'}}
  ]
};

var rendered = Handlebars.templates['albums'];

$('.album_list').append(rendered(data));
