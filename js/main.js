//var API_PATH = "http://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType="
var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=6f4e0b9b-8cb1-4b1d-a5c4-febd90f62469";
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
