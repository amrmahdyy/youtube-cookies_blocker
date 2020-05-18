const input = document.querySelector('.url');
const form = document.querySelector('form');
const btn = document.querySelector('.button');

//Function that gets id of the youtube video with ads and return the id
function videoId() {
    let videoUrl = input.value
    let startIndex = videoUrl.search('=')
    let video_Id = videoUrl.slice(startIndex + 1, videoUrl.length)
    return video_Id
}
//function that attach the id with the website that redirects the video to a no cookie youtube and returns the url
function redirectVideo() {
    let id = videoId()
    return `https://www.youtube-nocookie.com/embed/${id}`
}



form.addEventListener('submit', event => {
    if (input.value) {
        event.preventDefault()
        redirected_url = redirectVideo()
        window.open(redirected_url)
    } else alert('Enter youtube video URL')
})