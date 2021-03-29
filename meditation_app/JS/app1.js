console.log("hello");
$(document).ready(() => {
    $("#author").hide();
    $("#social").hide();
    $("#title").hide();
    $("#enter-btn").hide();
    $("#title").fadeIn(1700);
    $("#author").delay(2000).fadeIn(1700);
    $("#social").delay(4000).fadeIn(1700);
    $("#enter-btn").delay(6000).fadeIn(1700);

})

// When the user clicks a frequency in the selection, the matching Hz fill the div
$(document).ready(() => {

    const freq1 = "Flickering lights and sounds at 40 hertz have been used in Alzheimer’s therapy studies to stimulate an increased neural response and fight symptoms of dementia. Sound at 40 hertz has been linked to gamma brain waves and the stimulation of memory. For an example of 40 hertz therapy.";

    const freq2 = "174 hertz is one of the Solfeggio frequencies, a series of tones used in sacred music that is believed in alternative medicine to have different positive effects on human health. 174 hertz is associated with the reduction of both pain and stress.  For an example of 174 hertz therapy.";

    const freq3 = "285 hertz is also one of the Solfeggio frequencies and is considered instrumental in the healing of cuts, burns, and other physical wounds. 285 hertz sound frequencies are supposed to activate the body into cellular regeneration, encouraging it to heal itself in the event of an injury. For an example of 285 hertz therapy.";

    const freq4 = "This sound frequency is associated with the removal of fear and other negative feelings. As one of the Solfeggio frequencies, the 396 hertz tone aids in the removal of the feeling of guilt, making it an effective addition to spiritual music. 396 hertz frequencies balance the root chakra while simultaneously transforming negative emotions such as grief into positive, joyful ones.  For an example of 396Hz healing.";

    const freq5 = "Instead of a focus on physical ailments, healing sound therapy involving 417 hz (another of the Solfeggio frequencies) focuses on the removal of negative energy such as the energy surrounding a past trauma or negative energies in the ambient environment. 417 hertz therapy is designed to dissolve emotional blockages and activate the sacral chakra. For an example of 417 hertz therapy.";

    const freq6 = "432 hertz therapy is aimed at the heart chakra and listening to a 432 hertz frequency is supposed to lead to greater levels of mental and emotional clarity. A 432 hertz tuning is considered optimal for tuning opera singers and is associated with a higher level of spiritual development. For an example of 432 hertz therapy.";

    const freq7 = "Music that is tuned to the 440 hertz versus 432 hertz is considered “cerebral” music that aids in the listener’s cognitive development. Sound frequencies at 440 hertz are considered to activate the third eye chakra. For an example of 440 hertz sound frequency.";

    const freq8 = "Also known as the love frequency, 528 hertz is one of the most well-known and popular of the Solfeggio frequencies. This musical tone is also known as the “miracle note” and has been used in native populations as a sound associated with blessings since before written history. For an example of 528 hertz sound therapy.";

    const freq9 = "639 hertz is a sound frequency that affects the heart chakra. This sound frequency is associated with therapy intended to produce positive feelings and greater attunement to harmonious interpersonal relationships. As therapy, 639 hertz exposure encourages clearer communication practices and situational awareness. For an example of 639 hertz sound therapy.";

    const freq10 = "852 hertz sound therapy is a tone that is associated with redirecting the mind away from overthinking, intrusive thoughts, and negative thought patterns. These patterns of thought play a larger role in depression and anxiety. Exposure to this sound frequency can help alleviate the role of negative thoughts in these psychological ailments. For an example of 852 hertz sound therapy";

    const freq11 = "963 hertz sound frequencies are associated with activation of the pineal gland and higher spiritual development. The 963 hertz frequency is known as both the “pure miracle tone” and the “frequency of the gods”. 963 is associated with the activation of the crown chakra and a connection to the source of all humanity. For a sample of 963 hertz sound therapy.";
    var audio = $("#player");
    var src1 = "assets/40hz.ogg";
    var src2 = "assets/174hz.ogg"
    var src3 = "assets/285hz.ogg"
    var src4 = "assets/396hz.ogg"
    var src5 = "assets/417hz.ogg"
    var src6 = "assets/432hz.ogg"
    var src7 = "assets/440hz.ogg"
    var src8 = "assets/528hz.ogg"
    var src9 = "assets/639hz.ogg"
    var src10 = "assets/852hz.ogg"
    var src11 = "assets/963hz.ogg"
    $('select').on('click', event => {
        if (event.currentTarget.value === '1') {
            $('#pick').html('40Hz');
            $('#info-container #info').html(freq1);
            $('#player').show();
            $('.player').attr('src', src1)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '2') {
            $('#pick').html('174Hz');
            $('#info-container #info').html(freq2);
            $('#player').show();
            $('.player').attr('src', src2)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '3') {
            $('#pick').html('285Hz');
            $('#info-container #info').html(freq3);
            $('#player').show();
            $('.player').attr('src', src3)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '4') {
            $('#pick').html('396Hz');
            $('#info-container #info').html(freq4);
            $('#player').show();
            $('.player').attr('src', src4)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '5') {
            $('#pick').html('417Hz');
            $('#info-container #info').html(freq5);
            $('#player').show();
            $('.player').attr('src', src5)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '6') {
            $('#pick').html('432Hz');
            $('#info-container #info').html(freq6);
            $('#player').show();
            $('.player').attr('src', src6)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '7') {
            $('#pick').html('440Hz');
            $('#info-container #info').html(freq7);
            $('#player').show();
            $('.player').attr('src', src7)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '8') {
            $('#pick').html('528Hz');
            $('#info-container #info').html(freq8);
            $('#player').show();
            $('.player').attr('src', src8)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '9') {
            $('#pick').html('639Hz');
            $('#info-container #info').html(freq9);
            $('#player').show();
            $('.player').attr('src', src9)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '10') {
            $('#pick').html('852Hz');
            $('#info-container #info').html(freq10);
            $('#player').show();
            $('.player').attr('src', src10)[0]
            $('.player').play()
        } else if (event.currentTarget.value === '11') {
            $('#pick').html('963Hz');
            $('#info-container #info').html(freq11);
            $('#player').show();
            $('.player').attr('src', src11)[0]
            $('.player').play()
        } else {
            $('#pick').html('');
            $('#info-container #info').html('');
            $('#player').hide();

        }

    });


});