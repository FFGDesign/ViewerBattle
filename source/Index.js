let Controller;

// Connect button
$( '.btn[btn-id="Connect"]' ).click(()=>{
    let val = $('input[type="text"][inp-id="twitch-channel"]').val()
    Controller = new GameController(val)
})
