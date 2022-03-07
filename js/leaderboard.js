let leaderBoard = [];
let games = '';

async function getLeaderBoard(){
    try {
        let res = await fetch('https://api-ap-south-1.graphcms.com/v2/cl0gg84d208ch01yz11hu0i6s/master', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `{
                    leaderBoards {
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
        res = res.data.leaderBoards
        console.log(res);
        res.forEach(element => {
            div = `<div class="row">
                    <div class="col-2 col-md-2"><span>${element.rank}</span></div>
                    <div class="col-3 col-md-3 leaderboard-game">
                        <img src="img/logos-22/${element.gameName}.png">
                        <span>${element.gameName}</span>
                    </div>
                    <div class="col-2 col-md-2"><span>${element.downloads}</span></div>
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
// console.log(leaderBoard);
// let leadTitle = document.getElementsByClassName('leaderboard-title')[0]
// let leadTitle = `<div class="row leaderboard-title">
//                     <div class="col-2"><h3>Rank</h3></div>
//                     <div class="col-3"><h3>Game</h3></div>
//                     <div class="col-2"><h3>Downloads</h3></div>
//                     <div class="col-2"><h3>Likes</h3></div>
//                 </div>`
// console.log(leadTitle)
// console.log(leaderBoard);
// leadTitle.insertAdjacentElement('afterend',leaderBoard[0])