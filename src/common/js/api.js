var baseUrl = "http://192.168.1.244:8088/property-statistics-web"

var queryCompany = baseUrl + '/queryCompanyByPhone';//注册公司信息
var login = baseUrl + '/login';//登录


module.exports = {
  queryCompany,
  login,
 
}