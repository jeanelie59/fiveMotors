let containImg = document.getElementsByClassName('containImg');
containImg[0].childNodes.forEach(item => {
    item.addEventListener('click' , (e) => {
        containImg[0].style.backgroundImage = "url('"+e.target.getAttribute('src')+"')";
    })
})
