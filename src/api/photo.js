import request from "@/utils/request";

export function getAssetList(params) {
  return request({
    url: "http://rap2api.taobao.org/app/mock/270779/search/list",
    method: "get",
    params
  });
}
