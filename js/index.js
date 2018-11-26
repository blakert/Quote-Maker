// jQuery API call and dom manipulation
// make api Call 
$(document).ready(function() {
  $.get("https://talaikis.com/api/quotes/random/",function(reply){
        let quote = reply.quote;
        let author = reply.author;
        //alert(quote + "\n" + author);
        
        $('#text').text(quote);
        $('#author').text(author);
      });
    $('#quoteBtn').click(function(){
      // make api call here on click
      $.get("https://talaikis.com/api/quotes/random/",function(reply){
        let quote = reply.quote;
        let author = reply.author;
        
        $('#text').text(quote);
        $('#author').text(author);
      });
    });    
});