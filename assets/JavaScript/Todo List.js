$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input").keypress(function(event){
	if(event.which == 13 && $("input").val()!=""){
		var todo = $("input").val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+ todo +"</li>")
		$("input").val("");
	}
})

$("h1 i").click(function(){
	$("input").fadeToggle();
})