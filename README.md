# Responsive Vimeo Helper

This plugin is designed to make all iframe embedded Vimeo sourced video fully responsive, as well as retrieve their thumbnails from the Vimeo API and apply them as an overlaid play button. 

### Requirements ###
* Videos must be sourced from Vimeo and embedded in an iframe
* Video privacy must be set to 'Public', or allowed on the specific domain on which the plugin is insalled
* Videos must be accessible via the Vimeo JavaScript API

The plugin loops through each iframe on the page, determines if it is from Vimeo, scrapes the video ID, applies responsive styles, then queries the appropriate data via the Vimeo JavasScript API. The thumbnail will be overlaid upon the video, along with a play button. When clicked, the thumbnail and play button will fade away and autoplay the video. When the video is ended, or a different video is initialized, the thumbnail and play button will fade back in. 

**NOTE:** Embedded videos do not support programmatic initialization on mobile devices; users will need to tap the thumbnail (fading it out) then tap the video again to play. This is standard behavior for mobile vidoes with custom thumbnails.

You can find the files for this on GitHub https://github.com/apatt124/responsive-vimeo-helper