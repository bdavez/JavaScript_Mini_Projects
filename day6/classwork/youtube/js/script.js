var links = document.querySelectorAll('a'); 

for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href');
    var thumbnail = youtube.generateThumbnailUrl(href);
    var img = document.createElement('img')
    img.setAttribute('src',thumbnail);
    links[i].appendChild(img);
} 