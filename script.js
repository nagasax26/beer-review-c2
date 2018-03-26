var beers = [];

var renderBeers = function(){
//    $('.beers-list').find('li').remove();
    
//    for(var i in beers){
//        $('.beers-list').append('<li>'+beers[i].name + ':'+beers[i].category +'</li>');
//    }
    $('.beers-list').append('<li>'+beers[beers.length-1].name + ' '+beers[beers.length-1].category + ' '+beers[beers.length-1].rate  +'</li>');
    
};

var addBeer = function(name, category,rate){
    var beerObj = {'name' : name, 'category':category, 'rate' : rate};
    beers.push(beerObj);
};



$('.post-beer').click(function(){
    
    addBeer($('.beer-input').val(),$('.category-input').val(),$('.beer-rate').val());
    renderBeers();
});

var sort = false;
$('.sort-beer').click(function(){
    $('.beers-list').find('li').remove();
    if(!sort){
        beers.sort(function(obj1,obj2){return obj1.rate > obj2.rate;});
        sort = true;
    } 
    else{
        beers.reverse(function(obj1,obj2){return obj1.rate > obj2.rate;});
        sort = false;
    }
    
    //adding the sorting list
    for(var i in beers){
        $('.beers-list').append('<li>'+beers[i].name + ' '+beers[i].category + ' '+beers[i].rate  +'</li>');
    }

});


