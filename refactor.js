(function () {

    "use strict";

    const pathIcons = {
        play: '<path d="M13.6,8.1L1.9,0.2C1.1-0.3,0,0.2,0,1.1v15.7c0,0.9,1.1,1.5,1.9,0.9l11.7-7.9C14.1,9.4,14.1,8.6,13.6,8.1L13.6,8.1z"/>',
        pause: '<path d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM12 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"/>',
        restart: '<path d="M9.7 1.2l.7 6.4 2.1-2.1c1.9 1.9 1.9 5.1 0 7-.9 1-2.2 1.5-3.5 1.5-1.3 0-2.6-.5-3.5-1.5-1.9-1.9-1.9-5.1 0-7 .6-.6 1.4-1.1 2.3-1.3l-.6-1.9C6 2.6 4.9 3.2 4 4.1 1.3 6.8 1.3 11.2 4 14c1.3 1.3 3.1 2 4.9 2 1.9 0 3.6-.7 4.9-2 2.7-2.7 2.7-7.1 0-9.9L16 1.9l-6.3-.7z"/>',
        high: '<path d="M15.6 3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4C15.4 5.9 16 7.4 16 9c0 1.6-.6 3.1-1.8 4.3-.4.4-.4 1 0 1.4.2.2.5.3.7.3.3 0 .5-.1.7-.3C17.1 13.2 18 11.2 18 9s-.9-4.2-2.4-5.7z"></path><path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>',
        low: '<path d="M11.282 5.282a.909.909 0 0 0 0 1.316c.735.735.995 1.458.995 2.402 0 .936-.425 1.917-.995 2.487a.909.909 0 0 0 0 1.316c.145.145.636.262 1.018.156a.725.725 0 0 0 .298-.156C13.773 11.733 14.13 10.16 14.13 9c0-.17-.002-.34-.011-.51-.053-.992-.319-2.005-1.522-3.208a.909.909 0 0 0-1.316 0zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"></path>',
        mute: '<path d="M12.4 12.5l2.1-2.1 2.1 2.1 1.4-1.4L15.9 9 18 6.9l-1.4-1.4-2.1 2.1-2.1-2.1L11 6.9 13.1 9 11 11.1zM3.786 6.008H.714C.286 6.008 0 6.31 0 6.76v4.512c0 .452.286.752.714.752h3.072l4.071 3.858c.5.3 1.143 0 1.143-.602V2.752c0-.601-.643-.977-1.143-.601L3.786 6.008z"/>',
        cc: '<path d="M1 1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h4.6l2.7 2.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3l2.7-2.7H17c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1H1zm4.52 10.15c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41C8.47 4.96 7.46 3.76 5.5 3.76c-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69zm7.57 0c1.99 0 3.01-1.32 3.28-2.41l-1.29-.39c-.19.66-.78 1.45-1.99 1.45-1.14 0-2.2-.83-2.2-2.34 0-1.61 1.12-2.37 2.18-2.37 1.23 0 1.78.75 1.95 1.43l1.3-.41c-.28-1.15-1.29-2.35-3.25-2.35-1.9 0-3.61 1.44-3.61 3.7 0 2.26 1.65 3.69 3.63 3.69z" fill-rule="evenodd"/>',
        fullscreen: '<path d="M10 3h3.6l-4 4L11 8.4l4-4V8h2V1h-7zM7 9.6l-4 4V10H1v7h7v-2H4.4l4-4z"/>',
        restore: '<path d="M1 12h3.6l-4 4L2 17.4l4-4V17h2v-7H1zM16 .6l-4 4V1h-2v7h7V6h-3.6l4-4z"/>',
        setting: '<path d="M16.135 7.784a2 2 0 01-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094a2 2 0 01-2.969-1.23C10.065 1.258 9.669 1 9.219 1h-.438c-.45 0-.845.258-.997.865a2 2 0 01-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 01-1.23 2.969C1.26 7.935 1 8.33 1 8.781v.438c0 .45.258.845.865.997a2 2 0 011.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 012.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 012.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.781.094-1.316a2 2 0 011.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997zM9 12a3 3 0 110-6 3 3 0 010 6z"></path>',
        picture: '<path d="M13.293 3.293L7.022 9.564l1.414 1.414 6.271-6.271L17 7V1h-6z"></path><path d="M13 15H3V5h5V3H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-6h-2v5z"></path>'
    };

    const content = '';
    const isTouch = 'ontouchstart' in document.documentElement === true;

    function jlPlayer() {

        const container = document.getElementById('jlplayer-video-0');
        var sliderDrag = false;

        const player = (function () {

            const playerIds = container.querySelectorAll('[data-pid]');
            const elements = {};

            for (const element in playerIds) {
                if (playerIds.hasOwnProperty(element)) {
                    elements[playerIds[element].dataset.pid] = playerIds[element];
                }
            }

            return elements;
        })();

        function checkMouseActivity(evt) {

            if (!activityMouseFull) {
                activityMouseFull = true;
                var e = jlPlayerElem.className;
                jlPlayerElem.className = e.replace("jlplayer-cursor-hidden", "jlplayer-cursor-show");
            }

            var d = new Date();
            activityMouseTime = d.getTime();
        }

        function timeUpdater(evt) {

            player.time.textContent = getTime(player.video.currentTime);

            const seekerPercentage = (player.video.currentTime / player.video.duration) * 100;
            if (!sliderDrag) {
                player.progress.style.width = seekerPercentage + '%';
                player.progressRange.value = seekerPercentage;
            }
        }

        function progressBuffering(evt) {

            const buffered = player.video.buffered;

            if (player.video.duration == 0) {
                return;
            }

            for (var i = 0; i < buffered.length; i++) {
                if (buffered.start(buffered.length - 1 - i) < player.video.currentTime) {
                    player.buffer.style.width = (buffered.end(buffered.length - 1 - i) / player.video.duration) * 100 + "%";
                    break;
                }
            }
        }

        function play(evt) {

            if (isTouch && String(evt.currentTarget.tagName).toLowerCase() === 'video') {
                return;
            }

            if (!player.video.paused) {
                player.video.pause();
                return;
            }

            player.video.play()
        }

        function setSeeker(evt) {

            const clientX = String(evt.clientX) !== 'undefined' ? evt.clientX : evt.touches[0].clientX;

            const ClientRect = player.presetation.getBoundingClientRect();
            const value = (clientX - ClientRect.left) / rangeSeeker.clientWidth;

            return;

            player.timeTooltip.textContent = getTime(player.video.duration);
            player.timeTooltip.style.left = (value * 100) + '%';

            switch (evt.type) {
                case 'mousemove':
                    if (sliderDrag) {
                        player.progress.style.width = (value * 100) + '%';
                        // updateSeeker();
                    }
                    break;
                case 'touchmove':
                    player.progress.style.width = (value * 100) + '%';
                    // updateSeeker();
                    break;
                default:
                    updateSeeker();
            }

            // Seta a nova posição do seeker
            function updateSeeker() {
                rangeSeeker.value = (value * 100);
                progressVideo.style.width = (value * 100) + '%';
                player.video.currentTime = (value * player.video.duration);
            }
        }

        // Chamado quando o vídeo pode ser reproduzido
        function canplay(evt) {

            player.time.textContent = getTime(player.video.duration);
            player.timeTooltip.textContent = getTime(player.video.currentTime);

            // Eventos de seeker
            //['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove'].map( (evt) => {player.presentation.addEventListener(evt, setSeeker)});

            // Faz a leitura do track da primeira legenda
            //trackCaption = player.video.textTracks[0];

            // Verifica se existra track de legenda
            // if (trackCaption) {
            //     trackCaption.mode = activeCaption;
            // }

            // Eventos de player e pause
            player.play.addEventListener('click', play);
            player.center.addEventListener('click', play);
            ['click', 'touchstart'].map((evt) => { player.video.addEventListener(evt, play) });

            // Remove evento click se existir touch
            if (isTouch) {
                player.video.removeEventListener('click', play)
            }

        }

        function getTime(time) {
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(((time / 60) % 1) * 60);
            hours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
            minutes = minutes > 59 ? minutes - (Math.floor(minutes / 60) * 60) : minutes;
            return hours + String(minutes).padStart(2, 0) + ':' + String(seconds).padStart(2, 0);
        }

        // Eventos do vídeo
        player.video.addEventListener('canplay', canplay);
        player.video.addEventListener('timeupdate', timeUpdater);
        //['waiting', 'canplay', 'playing', 'play', 'loadstart', 'seeked'].map((evt) => { player.video.addEventListener(evt, loader) })


        player.video.addEventListener('ended', () => {

            // player.video.play.innerHTML = pathIcons.restart;
            console.log(container);
            // var e = jlPlayerElem.className;
            // jlPlayerElem.className = e.replace("jlplayer-cursor-hidden", "jlplayer-cursor-show");
            // jlPlayerBtnPlayCenter.innerHTML = svgIcos.playc;
            // jlPlayerBtnPlayCenter.style.display = 'block';
        })

        if (player.video.preload == 'none') {
            player.play.addEventListener('click', play);
            player.center.addEventListener('click', play);
            player.video.addEventListener('click', play);
            if (isTouch) {
                player.video.removeEventListener('click', play);
            }
        }

        player.video.addEventListener('progress', progressBuffering);
    }

    jlPlayer()
})();