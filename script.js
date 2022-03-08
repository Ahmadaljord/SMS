document.getElementById('addPost').addEventListener('submit', addPost);
function addPost(e) {
    e.preventDefault();
    let number = document.getElementById('number').value;
    let text = document.getElementById('text').value;
    fetch("https://smsapi-com3.p.rapidapi.com/sms.do?access_token=1fa6c962cfmsh74043953635c7dfp129451jsn74041aa4016f", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "x-rapidapi-host": "smsapi-com3.p.rapidapi.com",
                "x-rapidapi-key": "1fa6c962cfmsh74043953635c7dfp129451jsn74041aa4016f"
            },
            "body": JSON.stringify({
                "to": number,
                "message": text
            })
            
        })
        
        .then((res) => res.json())
        .then((body) => console.log(body))
        alert(body.StatusCode === 0
            ? 'Code sent!'
            : 'Message has not been sent. Unable to send sms.');
}
