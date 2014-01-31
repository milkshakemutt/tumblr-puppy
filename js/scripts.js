/**
 * Collar tag animation.
 */
var blog_avatar = document.getElementById('blog_avatar'),
	avatar_image = blog_avatar.getElementsByTagName('img')[0],
	animated = false,
	oldClassName,
	
	// Sets an "animate" class on the blog avatar <img> element
	animation_trigger = function(e) {
		if (!animated) {
			animated = true;
			
			oldClassName = avatar_image.className;
			avatar_image.className += ' animate';
		}
	},
	
	// Unsets the "animate" class on the blog avatar <img> element
	animation_end_handler = function(e) {
		avatar_image.className = oldClassName;
		animated = false;
	};

// Triggers the animation
avatar_image.addEventListener('mouseover', animation_trigger);
avatar_image.addEventListener('click', animation_trigger);

// Allows the animation to be triggered again
avatar_image.addEventListener('webkitAnimationEnd', animation_end_handler, false);
avatar_image.addEventListener('MSAnimationEnd', animation_end_handler, false);
avatar_image.addEventListener('oanimationend', animation_end_handler, false);
avatar_image.addEventListener('animationend', animation_end_handler, false);
