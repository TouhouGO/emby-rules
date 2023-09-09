[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header BilibiliProCrack.js
[mitm] 
hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*
***********************************/
 
var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = ' _uuid=763F0196-22D5-0793-2993-268B9EC1DF1E29001infoc; buvid4=30345D78-6D34-F30D-EA33-29D372F72AC153006-123082723-4gXt3VzLTvxbfL13fZLZIQ%3D%3D; buvid_fp=3c330ea69da203bfe2e0521658beeb48; b_nut=1693149062; buvid3=871FB1F8-5A99-B22B-0982-A93F76D6F22662319infoc; Buvid=Y14A0D11EE21D2A6460AAADB12A06F39507B; DedeUserID=34673701; DedeUserID__ckMd5=09ec1e68ae520e8c; SESSDATA=09df28a4%2C1709784408%2C3f152d91; bili_jct=c34bbc1d39c768e707cbb9445ddca237; sid=oosn56lk';
modifiedHeaders['x-bili-device-bin'] = 'CAEQpOiwIxokWTE0QTBEMTFFRTIxRDJBNjQ2MEFBQURCMTJBMDZGMzk1MDdCIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoNaVBob25lIDE0IFByb1IEMTYuNmoGNy40Mi4wckAyQkY0Mjk0M0FDOTY5RkFGMEM3NkJENkJEMkI0MjZCOTIwMjMwNzI0MDk0ODM5M0VENTdBQzNBMUM3NDkzRDYweMX31bieMQ==';
modifiedHeaders['Authorization'] = 'identify_v1 4d44355e48fdc464041f5e86d053fb91';
modifiedHeaders['User-Agent'] = 'bili-universal/74200100 os/ios model/iPhone 14 Pro mobi_app/iphone osVer/16.6 network/2';
modifiedHeaders['buvid'] = 'Y14A0D11EE21D2A6460AAADB12A06F39507B';
modifiedHeaders['x-bili-metadata-bin'] = 'CiA0ZDQ0MzU1ZTQ4ZmRjNDY0MDQxZjVlODZkMDUzZmI5MRIGaXBob25lGgVwaG9uZSCk6LAjKgVhcHBsZTIkWTE0QTBEMTFFRTIxRDJBNjQ2MEFBQURCMTJBMDZGMzk1MDdCOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDg3ZDI1NDEx';
modifiedHeaders['x-bili-trace-id'] = '4284b15a2608279a696595477b64fbef:696595477b64fbef:0:0';
modifiedHeaders['x-bili-exps-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
$done({'headers': modifiedHeaders});
