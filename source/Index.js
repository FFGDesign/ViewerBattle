let GameC;

$( '#CONNECT-btn' ).click(()=>{
    let val = $('input[type="text"]#twitch-channel').val()
    GameC = new GameController("val")
})