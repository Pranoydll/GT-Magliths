//
//	MADE BY PRANOY DUTTA
//

var bodyHeight = 0;

$(function(){
	bodyHeight = $(document).height();
});


function openNav() {
	$('#mainSideNav').css("width", "250px");
	$('#mainSideNav').css("opacity", "1");
	$('#content-wrap').css("margin-left", "250px");
}

function closeNav() {
	$("#mainSideNav").css("width", "0px");
	$('#mainSideNav').css("opacity", "0");
	$('#content-wrap').css("margin-left", "0px");
}

$(document).ready(function(){

	$('#s').click(function(){
		$('#main-text').text('Maglithians (or Magliths for short) have no race or gender and because of this, magliths have never suffered discrimination in their kingdom. Magliths are content with drilling underground to find the two things they need/want most, gold and coal. Magliths are fueled by coal, and their main currency is gold. Magliths live in families. You might wonder how all these Magliths came to be.  Well, first when 2 Magliths have an affectionate bond with each other they can each give part of their lava to make a baby Maglith. When the lava combines from the 2 Magliths, it creates a Maglith baby. The hard outer shells forms in about 3-4 days. Their average lifespan is 50-60 year and then their lava starts to cool down.');
	});
	$('#p').click(function(){
		// TODO change political image name to politics.JPG
		$('#parallax').css('background-image', 'url(imgs/social.JPG)');
		$('#main-text').text("Magliths live in a monarchical society and their main leader is a king.The king doesn't try to control everything and the main leader of the civilization is the High Priest. The king's throne is made up of the dragon, Smaug's dead head as a mantlepiece.");
	});
	$('#r').click(function(){
		$('#main-text').text('The magliths worship the Sun god, Sol, as they believe that it was that celestial body that created their civilization. Every year on the Summer Solstice they hold a ritual where they sacrifice half of their gold to please the Sun God. Then all day long after the ritual they celebrate, eat and play music with their instruments.');
	});
	$('#i').click(function(){
		$('#main-text').text('Magliths appreciate fine rock art (i.e. obsidian tablets, stalagmite formations, and stone carvings. They are relatively smart compared to other civilizations and they have modern ideas of equality and integrity.');
	});
	$('#i2').click(function(){
		$('#main-text').text("Magliths are friendly with everything except for goblins, wargs and spiders. As magliths are not as accustomed to creating metal tools, they trade some gold with the dwarves in exchange for tools, weapons, and other metals to use as decor or building material. A special diamond which is embedded in the king's crown is a diamond which was mined by Thror himself. The first maglith king traded it for the first piece of gold found in their volcano home.");
	});
	$('#t').click(function(){
		$('#main-text').text('Magliths use their hands for everything. Their hands are normally shaped as drills, however, they can change at will. Other tools and weapons such as bows and swords are traded with elves and dwarves, but are rarely used.');
	});
	$('#e').click(function(){
		$('#main-text').text('Magliths have gold as their currency of choice. Gold is valuable to all, and the Magliths have an abundance of wealth. They keep it in a treasury buried deep within the volcano. Only 2 people in the entire civilization have the key to open the vault and to successfully open the vault you must have both of them in possession. The King and the High priest. They use this gold as their civilization&#39;s main bank and use it to make part of the Royal Palace.');
	});
	$('#home').click(function(){
		$('#parallax').css('background-image', 'url(imgs/home.JPG)');
		$('#main-text').text('This is what a normal maglith home would look like.');
	});

	$('.item').each(function(i){
		setTimeout(function(){
			$('.item').eq(i).addClass('is-visible');
		}, 400 * i);
	});
});
