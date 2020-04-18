/* global $, player */
$('[data-video]').click(function () {
    const id = $(this).data('video');
    if (player.playerInfo.videoData.video_id != id) {
        player.loadVideoById(id);
    } else {
        player.playVideo();
    }
    $('#video').foundation('open');
})

$('#video').on('closed.zf.reveal', () => {
    player.stopVideo();
})
