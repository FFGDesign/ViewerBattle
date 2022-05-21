let Controller;

// Connect button
$( '.btn[btn-id="Connect"]' ).click(()=>{
    let val = $('input[type="text"][inp-id="twitch-channel"]').val()
    Controller = new GameController(val)
})

$( '.btn[btn-id="Play"]' ).click(()=>{
    $( '.btn[btn-id="Connect"]' ).attr("disabled", true)
    $( '.btn[btn-id="Play"]' ).attr("disabled", true)
    Controller.play()
})