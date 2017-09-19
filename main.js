// list of all stop buttons
var stopButtons = ["ragdoll", "norwegianForrest", "shorthair", "maineCoon", "persian", "russianBlue"]
// intervals of image cell
var intervals = {}
// dictionary of images: cats pictures
// of different breeds
var picPool = {ragdoll:["http://cdn2-www.cattime.com/assets/uploads/gallery/ragdoll/ragdoll-cats-kittens-2.jpg",
	"https://vetstreet.brightspotcdn.com/dims4/default/f8c302a/2147483647/thumbnail/645x380/quality/90/?url=https%3A%\
2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fb1%2Fc46560a33411e087a80050568d634f%2Ffile%2FRagdoll-3-645mk062211.jpg",
	"https://www.floppycats.com/wp-content/uploads/2012/01/Murphy-adult.jpg",
	"http://www.cat-world.com.au/wp-content/uploads/2017/06/ragdoll-cat996.jpg"
], 
norwegianForrest:["http://images.mentalfloss.com/sites/default/files/norwegianforestcathed.png?resize=1100x740",
	"https://vetstreet-brightspot.s3.amazonaws.com/d6/c7/9e5618f24f8ebc2f9ee110b3d804/norwegian-forest-cat-ap-38tiiu.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpzmMUjOD3yFoVmgMWC2N9XfxeAI82qFUDuwbqzl3T3lbzntl0Q",
	"http://cdn3.sortra.com/wp-content/uploads/2016/12/norwegian-forest-cat65.jpg"],
shorthair:["http://cdn3-www.cattime.com/assets/uploads/2011/12/file_2716_American-Shorthair-cat-bree.jpg",
	"https://vetstreet.brightspotcdn.com/dims4/default/3acf9d1/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%\
2Fvetstreet-brightspot.s3.amazonaws.com%2Fe7%2F72%2F0e9bf32843e4a3fef50b9339cea5%2FAmerican-Shorthair-AP-1RPWID-645sm\
3614.jpg", "https://vetstreet.brightspotcdn.com/dims4/default/7eaec8d/2147483647/thumbnail/645x380/quality/90/?url=h\
ttps%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F67%2Fb51540a27c11e087a80050568d634f%2Ffile%2FAmerican-Shorthai\
r-2-645mk062311.jpg",
	"http://cdn1-www.cattime.com/assets/uploads/gallery/american-shorthair-cats-and-kittens/american-shorthair\
-cats-kittens-3.jpg"],
maineCoon:["http://cdn1-www.cattime.com/assets/uploads/gallery/maine-coon-cats-and-kittens/maine-coon-cats\
-and-kittens-4.jpg",
	"https://www.demilked.com/magazine/wp-content/uploads/2016/08/biggest-maine-coon-cat-photography-robert-sij\
ka-1.jpg",
	"http://static.boredpanda.com/blog/wp-content/uploads/2015/11/maine-coon-cats-14__605.jpg",
	"http://static.boredpanda.com/blog/wp-content/uploads/2015/11/maine-coon-cats-11__605.jpg"],
persian:["http://cdn2-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-10.jpg",
	"https://vetstreet.brightspotcdn.com/dims4/default/303f54d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%\
2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fb6%2Ff4a864144d09974dfe5bf0513e20%2FPersian-AP-V8HE5B-645sm3614.jpg",
	"https://vetstreet.brightspotcdn.com/dims4/default/5c40e17/2147483647/thumbnail/645x380/quality/90/\
?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F51%2F45%2Fa7f47de448fabce6e4a908cb878d%2FPersian-AP-\
J6XREO-645sm3614.jpg",
	"https://www.pets4homes.co.uk/images/breeds/21/large/566981d8b7427f6ff36c95a6c77aa734.jpg"],
russianBlue:["http://www.petmd.com/sites/default/files/xtiarawhiskey.jpeg",
	"https://phz8.petinsurance.com/-/media/all-phz-images/2016-images-breeds-850/russian_blue_catr850.jpg",
	"https://i.pinimg.com/736x/1f/a5/11/1fa511227974ad6cc10f02f0e806d4b8--russian-blue-cats-gray-cats.jpg"]
}


// set/reset the corresponding interval of image cell
function intervalArrayInit(whichBtn, idx, img, pics){
	intervals[whichBtn.id] = setInterval(function(){
		img.src = pics[(idx++)%pics.length]
	}, Math.floor(Math.random()*4000) + 1000)

}

// function that takes good care of all the 
// button clicking events of the cells
function loopingPicHandling(btnText){
	var btn = document.getElementById(btnText)
	var img = btn.parentNode.getElementsByTagName("img")[0]
	var pics = picPool[btnText]

	img.src = picPool[btnText][0]
	intervalArrayInit(btn, 0, img, pics)

	var clickAction = function(){
		if (btn.value == "Start"){
			btn.value = "Stop"
			intervalArrayInit(btn, 0, img, pics)
		}
		else{
			btn.value = "Start"
			clearInterval(intervals[btn.id])
		}
	}
	btn.addEventListener("click", clickAction, false)
}



window.onload = function() {
	// initialize interval for every img cell	
	stopButtons.forEach(function(element) {
		loopingPicHandling(element)
	})
}
