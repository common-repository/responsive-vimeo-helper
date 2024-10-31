jQuery(document).ready(function($){
    function videoInit(clickedID){
        $('.embed-container img').fadeIn();
        $('.embed-' + clickedID + ' img').fadeOut();

        var player = new Vimeo.Player($('.embed-' + clickedID + ' iframe'));
        player.play().then(function() {
        }).catch(function(error) {
            switch (error.name) {
                case 'PasswordError':
                    console.log('Video is password protected. The owner will need to change the settings in order to access this video');
                    break;
                case 'PrivacyError':
                    console.log('Privacy Error');
                    break;
                default:
                    console.log('An error occurred when trying to use the Vimeo JS API to play the video');
                    break;
            }
        });
        player.on('ended', function(){
            $('.embed-' + clickedID + ' img').fadeIn();
        });
    }

    $('iframe').each(function(){
        var iframeSource = $(this).attr('src').split('/');
        if(iframeSource[2] == 'player.vimeo.com'){
            videoID = iframeSource[4].split('?');
            $(this).wrap("<div class='embed-container embed-" + videoID[0] + "'>");
            $(".embed-" + videoID[0]).prepend("<style>.embed-container { position: relative; padding-bottom: 42.65%; height: 0; overflow: hidden; max-width: 100%; } .embed-container img{ position: absolute; left: 0; z-index: 2; object-fit: cover; width: 100%;} .embed-container img.play-btn{ width: 10%; left: 45%; top: 40%; z-index: 3; cursor: pointer;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><img class='play-btn' src='" + RVH_URL.pluginUrl + "/img/play-button.png' data-video-id='" + videoID[0] + "' /><img class='thumbnail' src=''  data-video-id='" + videoID[0] + "'/>");

            $.ajax({
                async: false,
                url: 'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + videoID[0],
                success: function(data){
                    (data.thumbnail_url ? thumbnail = data.thumbnail_url : thumbnail = 'nothing');
                    $('.embed-' + videoID[0] + ' img.thumbnail').attr('src', thumbnail);
                },
                error: function(){
                    console.log('Could not query Vimeo ID from iframe.')
                }
            })
        } // end if
    });

    $('.embed-container img').on('click', function(){
        videoInit($(this).data('video-id'));
    });
});