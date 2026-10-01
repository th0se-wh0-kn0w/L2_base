function domainName(url){
  return url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/\.]+)/i)[1];
}
