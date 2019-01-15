let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=e70d2380517f4cd08d6fddac8bc0d0b9";
fetch(url)
    .then( r =>{
        return r.json();
    })
    .then(data =>{
        // create an unordered list in the html page
        let newsList = document.createElement('ul');
        // append the list to body
        let body = document.querySelector("body");
        body.appendChild(newsList);
        let results = data.articles; // get the array of articles
        results.map(news=>{
            // loop through everyguy in the array and extract corresponding content into index.html
            let newsItem = document.createElement('li');
            newsItem.innerHTML = "<a href=" + news.url + ">" + news.content + "</a>";
            newsList.appendChild(newsItem);
        });
    })
    .catch(e=>{
        console.log("An Error Has Occurred");
    });