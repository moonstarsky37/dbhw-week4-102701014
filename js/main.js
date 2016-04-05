var API_PATH = "http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType="

function getData(callback) {
    $.ajax({
            url : API_PATH,
            method : "GET",
            success : function (data) {
                callback(null,data);
            },
            error : function (err) {
                callback(err);
            }
        });
}
