$(document).ready(function () {
    // Google Sheets API endpoint
    var spreadsheetId = '1qMnd6rg1xnboHYh4-OKbw5d8BN8iux6OkzGqDbIXKLo';
    var range = 'Sheet1!G2:J13'; // range of cells to retrieve

    var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + range;

    // Make AJAX request to Google Sheets API
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: {
            'Authorization': 'Bearer ya29.a0AVvZVsqog5EjaBiSUZly-LSmmdiCUEqYbxbzQeW_oe9rDkeGtGLiWLw-NMNSJ282zrslUpA-76kctuDFZ36UISY08NUGfpIDUqMkwMwwUji3jBoyBG9-Jx2eGurJkWqSiumAc0RxCiPn7MGwnpXlvmSegiIyBzwaCgYKAQISAQASFQGbdwaIzXzsqpkJXmxM6xoDl9gnhw0166' // Replace with your access token
        },
        success: function (data) {
            var rows = data.values;

            var code = `
            <div class="row leaderboard-title">
                <div class="col-2 col-md-2">
                    <h3>Rank</h3>
                </div>
                <div class="col-4 col-md-3">
                    <h3>Game</h3>
                </div>
                <div class="col-4 col-md-2">
                    <h3>Downloads</h3>
                </div>
                <div class="col-2 col-md-2">
                    <h3>Likes</h3>
                </div>
            </div>
            `;

            // `<div class="row">
            //         <div class="col-1 col-md-2"><span>${element.rank}</span></div>
            //         <div class="col-5 col-md-3 leaderboard-game">
            //             <img src="/img/logos-22/${element.gameName}.webp">
            //             <span>${element.gameName}</span>
            //         </div>
            //         <div class="col-4 col-md-2"><span>${element.downloads}</span></div>
            //         <div class="col-2 col-md-2"><span>${element.likes}</span></div>
            //        </div>`

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i];
                code += '<div class="row">';

                for (var j = 0; j < cells.length; j++) {
                    if (i == 1) {
                        code += '<div class="col-1 col-md-2"><span>' + cells[j] + '</span></div>';
                    }
                    else if (i == 2) {
                        code += '<div class="col-5 col-md-3"><span>' + cells[j] + '</span></div>';
                    }
                    else if (i == 3) {
                        code += '<div class="col-4 col-md-2"><span>' + cells[j] + '</span></div>';
                    }
                    else if (i == 4) {
                        code += '<div class="col-2 col-md-2"><span>' + cells[j] + '</span></div>';
                    }
                    table += '<td>' + cells[j] + '</td>';
                }

                code += '</div>';
            }

            code += '</div>';
            //$('#data-container').html(table);
            document.getElementById('leaderboard').innerHTML = code;
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error:', errorThrown);
        }
    });
});