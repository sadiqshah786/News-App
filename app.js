fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
// fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=9cfd82ef38b44084baf883f5f7d53536")


    // fetch("https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=34aaf82b5237435bb562bbe51c7424c2")

    .then((response) => {
        return response.json();
    })
    .then((data1) => {
        displayNews(data1);
    })
    .catch((error) => {
        slider_news.innerHTML = `
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>

      <div class="spinner-border ms-auto text-light" role="status">
      <span class="visually-hidden" style="color:#fff;">Loading...</span>
    </div>
        `
    });

var slider_news = document.getElementById("slider_news");
function displayNews(news) {
    for (i = 0; i < 4; i++) {
        slider_news.innerHTML += `
            <li><span><img src="${news.articles[i].urlToImage}" class="card-img-top" alt="..."><a href="${news.articles[i].url}"  target="_blank"><span>${news.articles[i].title.slice(0, 25)}</li>
    `;
    }
}


var newsTech = document.getElementById("newsTech");
fetch("https://newsapi.org/v2/top-headlines?sources=recode,fox-sports&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
// fetch("https://newsapi.org/v2/top-headlines?sources=recode,fox-sports&apiKey=f5d69821b4634cdc80a6f708210e0e8e")
// fetch("https://newsapi.org/v2/top-headlines?sources=recode,fox-sports&apiKey=34aaf82b5237435bb562bbe51c7424c2")


    .then((response) => {
        return response.json();
    })
    .then((dataTech) => {
        techData(dataTech);
    })
    .catch((error) => {
        newsTech.innerHTML += `
        <div class="row mt-4">
        <div class="col-md-12">
            <div class="heading">
                <h2> <span><i class="fa-solid fa-bolt-lightning"></i></span> Categories News</h2>
            </div>
        </div>
    </div>
        <div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });

function techData(data) {
    newsTech.innerHTML += `
    <div class="col-md-6">

    <div class="card singleNews">
        <a href="${data.articles[14].url}" target="_blank">
            <div class="imageWrapper">
                <img src="${data.articles[14].urlToImage}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
                <span class="cat">Technology</span>
                <h5 class="card-title">${data.articles[14].title.slice(0, 70)}</h5>
                <div class="authorDate">
                    <ul>
                        <li><img src="assests/img/writer.png">${data.articles[14].author}</li>
                        <li><img src="assests/img/timetable.png">${data.articles[14].publishedAt.slice(0, 10)}</li>

                        <ul>

                </div>
            </div>
        </a>
    </div>
</div>

<div class="col-md-6">

    <div class="col-md-12">
        <div class="card singleNews right">
            <a href="${data.articles[2].url}" target="_blank">
                <div class="imageWrapper">
                    <img src="${data.articles[2].urlToImage}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <span class="cat">Sports</span>
                    <h5 class="card-title">${data.articles[2].title.slice(0, 70)}</h5>

                </div>
            </a>
        </div>
    </div>

    <div class="col-md-12">
        <div class="row">
            <div class="col-sm-6">
                <div class="card singleNews right bottom">
                    <a href="${data.articles[16].url}" target="_blank">
                        <div class="imageWrapper">
                            <img src="${data.articles[16].urlToImage}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <span class="cat">Gernal</span>
                            <h5 class="card-title">${data.articles[16].title.slice(0, 40)}</h5>

                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card singleNews right bottom">
                    <a href="${data.articles[17].url}" target="_blank">
                        <div class="imageWrapper">
                            <img src="${data.articles[17].urlToImage}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <span class="cat">Financials</span>
                            <h5 class="card-title">${data.articles[17].title.slice(0, 70)}</h5>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
                    `;
}

fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
// fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c28b02f0fa234fb1b5a1d05d9f4f1dbb")


// fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=34aaf82b5237435bb562bbe51c7424c2")


    .then((response) => {
        return response.json();
    })
    .then((topData) => {
        topStories(topData);
    })
    .catch((error) => {
        top_stories.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });

var top_stories = document.getElementById('top_stories')
function topStories(stories) {
    for (i = 0; i <= 3; i++) {
        top_stories.innerHTML += `
        <div class="col-md-3">
        <div class="card mb-4">
        <a href="${stories.articles[i].url}" target = "_blank">
         <img src="${stories.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
       <h5 class="card-title">${stories.articles[i].title.slice(0, 25)}...</h5>
       <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${stories.articles[i].publishedAt.slice(0, 10)}<span>
        </div>
        </a>
        </div>
</div>
            `
    }
}
fetch("https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
// fetch("https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=c28b02f0fa234fb1b5a1d05d9f4f1dbb")

// fetch("https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=34aaf82b5237435bb562bbe51c7424c2")

    .then((res) => {
        return res.json();
    })
    .then((dataary) => {
        AryData(dataary);
    })
    .catch((error) => {
        top_storiesARY.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });


var top_storiesARY = document.getElementById('top_storiesARY');
function AryData(aryData) {
    for (i = 0; i <= 3; i++) {

        top_storiesARY.innerHTML += `
    <div class="col-md-3">
        <div class="card mb-4">
        <a href="${aryData.articles[i].url}" target = "_blank">
         <img src="${aryData.articles[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
       <h5 class="card-title">${aryData.articles[i].title.slice(0, 25)}...</h5>
       <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${aryData.articles[i].publishedAt.slice(0, 10)}<span>
        </div>
        </a>
        </div>
</div>
    `
    }

}
var matchesdates = document.querySelector('.matchesdates')
fetch("https://api.cricapi.com/v1/matches?apikey=858581e6-ed23-4196-a161-65ad4f095ff0&offset=0")

    .then((response) => {
        return response.json();
    })
    .then((SportData) => {
        UpcomingMatches(SportData);
        console.log(SportData)
    })
    .catch((error) => {
      console.log(error)
        matchesdates.innerHTML+= `

        <div class="d-flex align-items-center mb-4 loader">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        `
    });
var upcomming = document.getElementById('carosels');
function UpcomingMatches(Sdata) {
  console.log(Sdata)
    upcomming.innerHTML=`
    <div class="carousel-item active" data-bs-interval="10000">
    <div class="sport-tournament">
                        <div class="tournament-details"> <span class="tournament-name">${Sdata.data[2].name} ${Sdata.data[2].matchType} </span>  <span class="tournament-date"> ${Sdata.data[2].date} </span> <span class="tournament-venue"> ${Sdata.data[2].venue}</span> </div>
                        <div class="tournament-score">
                          <div class="team-01 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[2].teamInfo[0].img}" alt="">
                            <span class="team-name">${Sdata.data[2].teamInfo[0].shortname}</span> </span>  </div> <span class="team-vs">V/S</span>
                          <div class="team-02 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[2].teamInfo[1].img}" alt="">
                            <span class="team-name">${Sdata.data[2].teamInfo[1].shortname}</span> </span> </div>
                        </div>
                      </div>
  </div>
  <div class="carousel-item" data-bs-interval="2000">
  <div class="sport-tournament">
                        <div class="tournament-details"> <span class="tournament-name">${Sdata.data[20].name} ${Sdata.data[20].matchType} </span>  <span class="tournament-date"> ${Sdata.data[2].date} </span> <span class="tournament-venue"> ${Sdata.data[2].venue}</span> </div>
                        <div class="tournament-score">
                          <div class="team-01 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[20].teamInfo[0].img}" alt="">
                            <span class="team-name">${Sdata.data[20].teamInfo[0].shortname}</span> </span>  </div> <span class="team-vs">V/S</span>
                          <div class="team-02 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[20].teamInfo[1].img}" alt="">
                            <span class="team-name">${Sdata.data[20].teamInfo[1].shortname}</span> </span> </div>
                        </div>
                      </div>
</div>
  </div>
  <div class="carousel-item">
  <div class="sport-tournament">
                        <div class="tournament-details"> <span class="tournament-name">${Sdata.data[6].name} ${Sdata.data[6].matchType} </span>  <span class="tournament-date"> ${Sdata.data[2].date} </span> <span class="tournament-venue"> ${Sdata.data[2].venue}</span> </div>
                        <div class="tournament-score">
                          <div class="team-01 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[6].teamInfo[0].img}" alt="">
                            <span class="team-name">${Sdata.data[6].teamInfo[0].shortname}</span> </span>  </div> <span class="team-vs">V/S</span>
                          <div class="team-02 team"> <span class="team-name-flag">
                            <img class="img-fluid country-flag" src="${Sdata.data[6].teamInfo[1].img}" alt="">
                            <span class="team-name">${Sdata.data[6].teamInfo[1].shortname}</span> </span> </div>
                        </div>
                      </div>
</div>
  </div>
    `
}

fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
// fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=34aaf82b5237435bb562bbe51c7424c2")


    .then((response) => {
        return response.json();
    })
    .then((everyData) => {
        blogData(everyData);
        // console.log(SportData)
    })
    .catch((error) => {

        blogListing.innerHTML += `

                    <div class="d-flex align-items-center mb-4 loader">
             <strong>Loading...</strong>
           <div class="spinner-border ms-auto text-light" role="status">
             <span class="visually-hidden">Loading...</span>
            </div>`
    });
var blogListing = document.getElementById('blogListing')
function blogData(everyData) {
    console.log(everyData)
    for (i = 0; i <= 4; i++) {
        blogListing.innerHTML += `
            <div class="blog-post post-style-05">
            <div class="blog-post-date"> <a href="${everyData.articles[i].url}">Sun</a>
              <h2>${everyData.articles[i].publishedAt.slice(8, 10)}</h2> </div>
            <div class="blog-image"> <img class="img-fluid" src="${everyData.articles[i].urlToImage}" alt="">
              <div class="video-icon"><a href="#"><i class="fa-solid fa-video text-orange"></i></a></div>
            </div>
            <div class="blog-post-details"> <span class="badge badge-small bg-orange">${everyData.articles[i].source.name}</span>
              <h6 class="blog-title"><a href="${everyData.articles[i].url}">${everyData.articles[i].title.slice(0, 25)}</a></h6>
              <div class="blog-view"> <a href="#">10 M Views</a> <a class="" href="#">6Days Ago</a> </div>
            </div>
          </div>

            `
    }

}



// fetch("https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=34aaf82b5237435bb562bbe51c7424c2")
    fetch("https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((business) => {
        businessblogData(business);
    })
    .catch((error) => {
        cat1.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });
var cat1 = document.getElementById('cat1');
function businessblogData(business) {
    for (i = 0; i < 1; i++) {
        cat1.innerHTML += `
            <div class="col-md-6">
            <div class="card catblog">
                <img src="${business.articles[i].urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                  <h5 class="card-title"> <a href="${business.articles[i].url}" target="_blank">${business.articles[i].title.slice(0, 35)}</a></h5>
                  <div class="blog_info">
                  <ul>
                  <li><span class="calender"><img src="assests/img/writer.png"></span><span class="timeBlog">${business.articles[i].author.slice(0, 10)}<span></li>
                  <li> <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${business.articles[i].publishedAt.slice(0, 10)}<span>
                  </li>
                  </ul>
                  </div>
                  <p class="card-text">${business.articles[i++].description}</p>
                </div>
              </div>
        </div>
        <div class="col-md-6">
        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${business.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${business.articles[i].url}" target="_blank">${business.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${business.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${business.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${business.articles[i].url}" target="_blank">${business.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${business.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${business.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${business.articles[i].url}" target="_blank">${business.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${business.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
          <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${business.articles[i].urlToImage}" alt=""> </div>
          <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
            <h6 class="blog-title"><a href="${business.articles[i].url}" target="_blank">${business.articles[i].title.slice(0, 35)}</a></h6>
            <div class="blog-post-meta">
              <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${business.articles[i++].publishedAt.slice(0, 10)}</a> </div>
            </div>
          </div>
        </div>
            `
    }

}


// fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=34aaf82b5237435bb562bbe51c7424c2")
    fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((sports) => {
        sportblogData(sports);
    })
    .catch((error) => {
        cat2.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });
var cat2 = document.getElementById('cat2');
function sportblogData(sport) {
    for (i = 0; i < 1; i++) {
        console.log(sport)
        cat2.innerHTML += `
            <div class="col-md-6">
            <div class="card catblog">
                <img src="${sport.articles[i].urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                  <h5 class="card-title"> <a href="${sport.articles[i].url}" target="_blank">${sport.articles[i].title.slice(0, 35)}</a></h5>
                  <div class="blog_info">
                  <ul>
                  <li><span class="calender"><img src="assests/img/writer.png"></span><span class="timeBlog">${sport.articles[i].source.name}<span></li>
                  <li> <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${sport.articles[i].publishedAt.slice(0, 10)}<span>
                  </li>
                  </ul>
                  </div>
                  <p class="card-text">${sport.articles[i++].description}</p>
                </div>
              </div>
        </div>
        <div class="col-md-6">
        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${sport.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${sport.articles[i].url}" target="_blank">${sport.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${sport.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${sport.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${sport.articles[i].url}" target="_blank">${sport.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${sport.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${sport.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${sport.articles[i].url}" target="_blank">${sport.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${sport.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
          <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${sport.articles[i].urlToImage}" alt=""> </div>
          <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
            <h6 class="blog-title"><a href="${sport.articles[i].url}" target="_blank">${sport.articles[i].title.slice(0, 35)}</a></h6>
            <div class="blog-post-meta">
              <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${sport.articles[i++].publishedAt.slice(0, 10)}</a> </div>
            </div>
          </div>
        </div>

            `
    }

}


// fetch("https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=34aaf82b5237435bb562bbe51c7424c2")
    fetch("https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")

    .then((response) => {
        return response.json();
    })
    .then((medical) => {
        medicalblogData(medical);
    })
    .catch((error) => {
        cat3.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });
var cat3 = document.getElementById('cat3');
function medicalblogData(medical) {
    for (i = 0; i < 1; i++) {
        cat3.innerHTML += `
            <div class="col-md-6">
            <div class="card catblog">
                <img src="${medical.articles[i].urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                  <h5 class="card-title"> <a href="${medical.articles[i].url}" target="_blank">${medical.articles[i].title.slice(0, 35)}</a></h5>
                  <div class="blog_info">
                  <ul>
                  <li><span class="calender"><img src="assests/img/writer.png"></span><span class="timeBlog">${medical.articles[i].author.slice(0, 10)}<span></li>
                  <li> <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${medical.articles[i].publishedAt.slice(0, 10)}<span>
                  </li>
                  </ul>
                  </div>
                  <p class="card-text">${medical.articles[i++].description}</p>
                </div>
              </div>
        </div>
        <div class="col-md-6">
        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${medical.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${medical.articles[i].url}" target="_blank">${medical.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${medical.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${medical.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${medical.articles[i].url}" target="_blank">${medical.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${medical.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${medical.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${medical.articles[i].url}" target="_blank">${medical.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${medical.articles[i++].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>

          <div class="blog-post post-style-04">
          <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${medical.articles[i].urlToImage}" alt=""> </div>
          <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
            <h6 class="blog-title"><a href="${medical.articles[i].url}" target="_blank">${medical.articles[i].title.slice(0, 35)}</a></h6>
            <div class="blog-post-meta">
              <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${medical.articles[i++].publishedAt.slice(0, 10)}</a> </div>
            </div>
          </div>
        </div>
            `
    }

}










fetch("https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((latest) => {
        latestblogData(latest);
    })
    .catch((error) => {
        cat4.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
        `
    });
var cat4 = document.getElementById('cat4');
function latestblogData(latest) {
    for (i = 0; i < 3; i++) {
        cat4.innerHTML += `

        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${latest.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${latest.articles[i].url}" target="_blank">${latest.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${latest.articles[i].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>
            `
    }

}




fetch("https://newsapi.org/v2/top-headlines?sources=politico&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((trending) => {
        trendingblogData(trending);
    })
    .catch((error) => {
        cat5.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>`
    });
var cat5 = document.getElementById('cat5');
function trendingblogData(trending) {
    for (i = 0; i < 3; i++) {
        cat5.innerHTML += `

        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${trending.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${trending.articles[i].url}" target="_blank">${trending.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${trending.articles[i].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>
            `
    }

}




fetch("https://newsapi.org/v2/top-headlines?sources=newsweek&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((popular) => {
        popularblogData(popular);
    })
    .catch((error) => {
        cat6.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>`
    });
var cat6 = document.getElementById('cat6');
function popularblogData(popular) {
    console.log(popular)
    for (i = 0; i < 3; i++) {
        cat6.innerHTML += `

        <div class="blog-post post-style-04">
            <div class="blog-image"> <img class="img-fluid bg-overlay-black-93" src="${popular.articles[i].urlToImage}" alt=""> </div>
            <div class="blog-post-details"> <span class="badge text-pink">Photography</span>
              <h6 class="blog-title"><a href="${popular.articles[i].url}" target="_blank">${popular.articles[i].title.slice(0, 35)}</a></h6>
              <div class="blog-post-meta">
                <div class="blog-post-time"> <a href="#"><i class="fa-solid fa-calendar-days"></i><span class="timeBlog">${popular.articles[i].publishedAt.slice(0, 10)}</a> </div>
              </div>
            </div>
          </div>
            `
    }

}



fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb")
    .then((response) => {
        return response.json();
    })
    .then((mostView) => {
        mostViewblogData(mostView);
    })
    .catch((error) => {
        viewsMost.innerHTML += `

        <div class="d-flex align-items-center mb-4">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>`
    });
var viewsMost = document.getElementById('viewsMost');
function mostViewblogData(mostView) {
    for (i = 0; i < 2; i++) {
        viewsMost.innerHTML += `
            <div class="col-md-6">
            <div class="card catblog">
                <img src="${mostView.articles[i].urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                  <h5 class="card-title"> <a href="${mostView.articles[i].url}" target="_blank">${mostView.articles[i].title.slice(0, 35)}</a></h5>
                  <div class="blog_info">
                  <ul>
                  <li><span class="calender"><img src="assests/img/writer.png"></span><span class="timeBlog">${mostView.articles[i].source.name}<span></li>
                  <li> <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${mostView.articles[i].publishedAt.slice(0, 10)}<span>
                  </li>
                  </ul>
                  </div>
                  <p class="card-text">${mostView.articles[i].description.slice(0, 75)}...</p>
                </div>
              </div>
        </div>
        `
    }
}

var searchCountry = document.getElementById('searchCountry');
var result = document.getElementById('result')
var headingData = document.getElementById('headingData')

function searchResult() {

  fetch(`https://newsapi.org/v2/top-headlines?country=${searchCountry.value.toLowerCase()}&apiKey=ed026db75b484dbeb3c55bdfdbf00ccb`)
    .then((response) => {
      return response.json();
    })
    .then((searchData) => {
      result.innerHTML = `
  <div class="row">   
  <div class="heading">
  <h2>Search Result :  <span>${searchCountry.value.toLowerCase()}</span></h2>
  </div>
  </div>
  `
      if(searchCountry.value===""){
        alert("Please enter city")
      }
      else{
      for (i = 0; i <8; i++) {
        result.innerHTML += `
            <div class="col-md-3">
            <div class="card mb-4">
            <a href="${searchData.articles[i].url}" target = "_blank">
             <img src="${searchData.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
           <h5 class="card-title">${searchData.articles[i].title.slice(0, 25)}...</h5>
           <span class="calender"><i class="fa-regular fa-calendar-days"></i></span><span class="timeBlog">${searchData.articles[i].publishedAt.slice(0, 10)}<span>
            </div>
            </a>
            </div>
    </div>
                `

      }
      search.style.display = "none";
    }









    })
    .catch((error) => {
      result.innerHTML += `<h1>Data Not Found</h1>`
      search.style.display = "none";
      
    });

}


// function searching(searchData){
//   var r = searchCountry.value.toLowerCase()
//   console.log(searchData)
//   console.log(searchCountry.value.toLowerCase())
// event.preventDefault();
//   // console.log(searchCountry.value.toLowerCase())
//   search.style.display = "none";



// }



var year = new Date().getFullYear();
var yeaar = document.getElementById('yeaar')
yeaar.innerHTML = year;

var dayMonthYear = new Date();
var dayMonthYearData = document.getElementById("dayMonthYear");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dayMonthYears() {
  var Currentmonth = month[dayMonthYear.getMonth()];
  var CurrentDay = days[dayMonthYear.getDay()];
  var getYear = dayMonthYear.getFullYear();
  dayMonthYearData.innerHTML = `${CurrentDay}, ${Currentmonth}, ${getYear}`;
}
dayMonthYears();

var weather = document.getElementById("weather");
function fetchDataOnload() {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=233a720fcff7e4f27d62707870344016`)
        .then((response) => {
          return response.json();
        })
        .then((data2) => {
          // Atmoshphere
          if (data2.weather[0].id == 701 || data2.weather[0].id == 741) {
            data2.weather[0].icon = "assests/img/mist.png";
          } else if (data2.weather[0].id == 711) {
            data2.weather[0].icon = "assests/img/smoke.png";
          } else if (data2.weather[0].id == 721) {
            data2.weather[0].icon = "assests/img/haze.png";
          } else if (data2.weather[0].id == 731) {
            data2.weather[0].icon = "assests/img/dust.png";
          } else if (data2.weather[0].id == 751 || data2.weather[0].id == 761 || data2.weather[0].id == 762 || data2.weather[0].id == 771 || data2.weather[0].id == 781) {
            data2.weather[0].icon = "assests/img/sand.png";
          } else if (
            data2.weather[0].id == 531 ||
            data2.weather[0].id == 522 ||
            data2.weather[0].id == 521 ||
            data2.weather[0].id == 520 ||
            data2.weather[0].id == 511 ||
            data2.weather[0].id == 504 ||
            data2.weather[0].id == 503 ||
            data2.weather[0].id == 502 ||
            data2.weather[0].id == 501 ||
            data2.weather[0].id == 500
          ) {
            data2.weather[0].icon = "assests/img/rain.png";
          } else if (data2.weather[0].id == 801 || data2.weather[0].id == 802 || data2.weather[0].id == 803 || data2.weather[0].id == 804) {
            data2.weather[0].icon = "assests/img/clouds.png";
          } else if (
            data2.weather[0].id == 600 ||
            data2.weather[0].id == 601 ||
            data2.weather[0].id == 602 ||
            data2.weather[0].id == 611 ||
            data2.weather[0].id == 612 ||
            data2.weather[0].id == 613 ||
            data2.weather[0].id == 615 ||
            data2.weather[0].id == 616 ||
            data2.weather[0].id == 620 ||
            data2.weather[0].id == 621 ||
            data2.weather[0].id == 622
          ) {
            data2.weather[0].icon = "assests/img/snow.png";
          } else if (
            data2.weather[0].id == 300 ||
            data2.weather[0].id == 301 ||
            data2.weather[0].id == 302 ||
            data2.weather[0].id == 310 ||
            data2.weather[0].id == 311 ||
            data2.weather[0].id == 312 ||
            data2.weather[0].id == 313 ||
            data2.weather[0].id == 314 ||
            data2.weather[0].id == 321
          ) {
            data2.weather[0].icon = "assests/img/snow.png";
          } else if (
            data2.weather[0].id == 200 ||
            data2.weather[0].id == 201 ||
            data2.weather[0].id == 202 ||
            data2.weather[0].id == 210 ||
            data2.weather[0].id == 211 ||
            data2.weather[0].id == 212 ||
            data2.weather[0].id == 213 ||
            data2.weather[0].id == 214 ||
            data2.weather[0].id == 221 ||
            data2.weather[0].id == 230 ||
            data2.weather[0].id == 231 ||
            data2.weather[0].id == 232
          ) {
            data2.weather[0].icon = "assests/img/scattered-thunderstorms.png";
          } else if (data2.weather[0].id == 800) {
            data2.weather[0].icon = "assests/img/cloudy.png";
          }
          weather.innerHTML += `
                    <li><span id="icon"><img id ="wImg" src="${data2.weather[0].icon}"></span> <span class="temp">${Math.floor(data2.main.temp)} <sup>o</sup></span></li>
                    <li class="weather_address"><span id="time">${data2.sys.country}</span>  <span>${days[dayMonthYear.getDay()].slice(0, 3)}, ${dayMonthYear.getDate()}, ${month[dayMonthYear.getMonth()]
            }, ${dayMonthYear.getFullYear()}</span></li>
                    <li><span id="timer"></span></li>
                    <li><i class="fa-solid fa-magnifying-glass" onclick="showSearch()"></i></li>
                    `;
        })
        .catch((error) => {
          console.log("Current Location Not detecting....");
        });
    });
  }
}
var search = document.getElementById('search');


function showSearch() {
  search.style.display = "block";
}



function closeSearch() {
  search.style.display = "none";
}

window.onload = fetchDataOnload();

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

  document.getElementById("timer").innerHTML = currentTime;
}
showTime();



