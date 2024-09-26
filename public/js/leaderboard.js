let games = '';

async function getLeaderBoard() {
    try {
        let res = await fetch('https://api-ap-south-1.graphcms.com/v2/cl0gg84d208ch01yz11hu0i6s/master', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `{
                    leaderBoards ( orderBy: rank_ASC ) {
                        downloads
                        gameName
                        id
                        likes
                        rank
                    }
                }`
            })
        });
        res = await res.json();
        res = res.data.leaderBoards;
        res.forEach(element => {
            console.log(element.gameName);
            div = `<div class="row">
                    <div class="col-1 col-md-2"><span>${element.rank}</span></div>
                    <div class="col-5 col-md-3 leaderboard-game">
                        <img src="/img/logos-22/${element.gameName}.webp">
                        <span>${element.gameName}</span>
                    </div>
                    <div class="col-4 col-md-2"><span>${element.downloads}</span></div>
                    <div class="col-2 col-md-2"><span>${element.likes}</span></div>
                   </div>`
            games += div
        });
        let leadTitle = document.getElementsByClassName('leaderboard-title')[0]
        leadTitle.insertAdjacentHTML('afterend', games)
    } catch (error) {
        console.log(error);
    }
}

getLeaderBoard()